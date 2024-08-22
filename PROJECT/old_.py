def process_calulate(group1, group2):
    combined = {}
    totals_dict = {}  # Dictionary to track totals

    # Process group1
    for key in group1:
        if key not in combined:
            combined[key] = {}
        
        for idx, item in enumerate(group1[key]['details']):
            item_key = (item['material_no'], item['fg_material_no'], idx)
            combined[key][item_key] = item
            
            # Initialize quantities
            so_qty = item.get('so_qty', 0) or 0  # Default to 0 if None
            fg_qty = item.get('fg_qty', 0) or 0  # Default to 0 if None
            
            # Calculate total_qty and update combined details
            if idx == 0:
                total_qty = fg_qty - so_qty
                combined[key][item_key]['variance'] = total_qty
            else:
                total_qty = -so_qty
                combined[key][item_key]['variance'] = total_qty
            
            # Create a unique key for the totals dictionary
            if item.get('type') == '908':
                total_key = (item['material_no'], item['fg_material_no'])
                if total_key not in totals_dict:
                    totals_dict[total_key] = {
                        'material_no': item['material_no'],
                        'fg_material_no': item['fg_material_no'],
                        'fg_qty': fg_qty,
                        'wo_total': 0,
                        'po_total': 0,
                        'total': 0,
                        'calculate': 0,
                        'summary': '1'
                    }
                # Adjust the total based on the index
                totals_dict[total_key]['total'] += total_qty
                totals_dict[total_key]['calculate'] += total_qty

    # Process group2
    for key in group2:
        if key in combined:
            # combined[key] = {}
            for idx, item in enumerate(group2[key]['details']):
                print('www')
                item_key = (item['material_no'], item['fg_material_no'], idx)
                total_key = (item['material_no'], item['fg_material_no'])
                z_orignal_qty = 0
                fg_qty = 0
                if item_key in combined[key]:    
                    z_prod_order = item.get('z_prod_order','')
                    z_plan_order = item.get('z_plan_order','')
                    if total_key in totals_dict:
                        if totals_dict[total_key]['fg_qty'] is not None:
                            fg_qty = totals_dict[total_key]['fg_qty']
                        
                        if  item['z_orignal_qty'] is not None:
                            z_orignal_qty =  item['z_orignal_qty'] 
                        
                        temp_calculate = totals_dict[total_key]['calculate']
                        if temp_calculate > 0:
                            z_prod_order = ''
                            z_plan_order = ''
                            
                        if item['z_prod_order'] is not None:
                            totals_dict[total_key]['wo_total'] += z_orignal_qty
                        if item['z_plan_order'] is not None:
                            totals_dict[total_key]['po_total'] += z_orignal_qty
                            
                        totals_dict[total_key]['calculate'] += z_orignal_qty + fg_qty
        
                    combined[key][item_key]['z_prod_order'] = z_prod_order
                    combined[key][item_key]['z_plan_order'] = z_plan_order
                    combined[key][item_key]['z_orignal_qty'] = z_orignal_qty
                else:
                    if total_key in totals_dict:
                        if temp_calculate < 0:
                            print('ADD') 
    # Add total summary item to each group's details
    for key in combined:
        # Update the last item total and add the summary
        for idx, (key_id, value) in enumerate(totals_dict.items()):
            item_key = (value['material_no'], value['fg_material_no'], 'TOTAL')
            combined[key_id][item_key] = value

    # Prepare result
    result = {}
    for key in combined:
        result[key] = {'details': list(combined[key].values())}
    
    return result

def process_group(data):
    
    groups = {}
    for item in data:
        key = (item['fg_material_no'],item['material_no'])
        if key not in groups:
            groups[key] = {'details': []}
        groups[key]['details'].append(item)
    return groups

def process_extact(data):
    result = []
    for key, value in data.items():
        details = value['details']
        item_row = 0
        order_row = 0
        match_row = 0
        data_temp = {
            'material_no': '',
            'fg_material_no': '',
        }
        for i, detail in enumerate(details):
            if (data_temp['material_no'] == detail['material_no'] and 
                data_temp['fg_material_no'] == detail['fg_material_no']):
                match_row += 1
                detail['match_row'] = match_row
                detail['order_row'] = order_row
                
            else:
                order_row += 1
                match_row = 1
                detail['match_row'] = match_row  
                detail['order_row'] = order_row
                data_temp['material_no'] = detail['material_no']
                data_temp['fg_material_no'] = detail['fg_material_no']
            
            item_row += 1
            detail['item_row'] = item_row
            result.append(detail)
    return result