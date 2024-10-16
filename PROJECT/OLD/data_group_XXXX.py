


def process_data_none_dic(data):
    groups = {}
    for item in data_group:
        key = item['fg_material_no']
        if key not in groups:
            groups[key] = {'details': []}
        groups[key]['details'].append(item)

    result = []
    for key, value in groups.items():
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
            
            # Print or perform other operations with `detail`
            # print(detail)
            result.append(detail)
    return result

data = process_data_none_dic(data_group)
# print(process_data_none_dic(data_group))
for x in data:
    print(x)


