
# ตัวอย่างการใช้งาน
# data_test_1 = [
#     {'material_no': 'A01', 'fg_material_no': 'A00','wo':'A001','po':'A001','Qty':1,'sale':None,'SlQty':None},
#     {'material_no': 'A01', 'fg_material_no': 'A00','wo':None,'po':'B001','Qty':2,'sale':None,'SlQty':None},
#     {'material_no': 'A01', 'fg_material_no': 'A00','wo':'A002','po':None,'Qty':3,'sale':None,'SlQty':None},
# ]

# data_test_2 = [
#     {'material_no': 'A01', 'fg_material_no': 'A00','wo':None,'po':None,'sale':'S001','SlQty':2},
#     {'material_no': 'A01', 'fg_material_no': 'A00','wo':None,'po':None,'sale':'S002','SlQty':3},
# ]
# ตัวอย่างข้อมูล
import datetime


data_test_1 = [
    {'material_no': 'A01', 'fg_material_no': 'A00', 'wo': 'A001', 'po': 'A001', 'Qty': 1, 'sale': None, 'SlQty': None},
    {'material_no': 'A01', 'fg_material_no': 'A00', 'wo': None, 'po': 'B001', 'Qty': 2, 'sale': None, 'SlQty': None},
    {'material_no': 'A01', 'fg_material_no': 'A00', 'wo': 'A002', 'po': None, 'Qty': 3, 'sale': None, 'SlQty': None},
]

data_test_2 = [
    {'material_no': 'A01', 'fg_material_no': 'A00', 'wo': None, 'po': None, 'sale': 'S001', 'SlQty': 2},
    {'material_no': 'A01', 'fg_material_no': 'A00', 'wo': None, 'po': None, 'sale': 'S002', 'SlQty': 3},
    {'material_no': 'A01', 'fg_material_no': 'A00', 'wo': None, 'po': None, 'sale': 'S003', 'SlQty': 1},
    {'material_no': 'A01', 'fg_material_no': 'A00', 'wo': None, 'po': None, 'sale': 'S004', 'SlQty': 5},
    {'material_no': 'A01', 'fg_material_no': 'A00', 'wo': None, 'po': None, 'sale': 'S005', 'SlQty': 4}
]

def process_merge(group1, group2):
    combined = {}

    for key in group1:
        if key not in combined:
            combined[key] = {}
        
        for idx, item in enumerate(group1[key]['details']):
            item_key = (item['material_no'], item['fg_material_no'], idx)
            combined[key][item_key]  = item
            # combined[key][item_key] = {
            #     'material_no': item['material_no'],
            #     'fg_material_no': item['fg_material_no'],
            #     'wo': item['wo'],
            #     'po': item['po'],
            #     'Qty': item['Qty'],
            #     'sale': None,
            #     'SlQty': None
            # }
    
    # Update or add items from group2
    for key in group2:
        if key not in combined:
            combined[key] = {}
        
        for idx, item in enumerate(group2[key]['details']):
            item_key = (item['material_no'], item['fg_material_no'], idx)
            if item_key in combined[key]:
                # Update existing item
                combined[key][item_key]['sale'] = item['sale']
                combined[key][item_key]['SlQty'] = item['SlQty']
            else:
                # Add new item
                combined[key][item_key] = item
                # combined[key][item_key] = {
                #     'material_no': item['material_no'],
                #     'fg_material_no': item['fg_material_no'],
                #     'wo': item['wo'],
                #     'po': item['po'],
                #     'Qty': None,  # Default to None for missing Qty
                #     'sale': item['sale'],
                #     'SlQty': item['SlQty']
                # }
    
    # Convert the combined dictionary back to the desired output format
    result = {}
    for key in combined:
        result[key] = {'details': list(combined[key].values())}
    return result

def process_group(data):
    groups = {}
    for item in data:
        key = item['fg_material_no']
        if key not in groups:
            groups[key] = {'details': []}
        groups[key]['details'].append(item)

    return groups


group1 = process_group(data_test_1)
group2 = process_group(data_test_2)
out_p = process_merge(group1, group2)
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


# print(process_data_extact(out_p))
# for x in process_extact(out_p):
#     print(x)

# จำลองว่า merge:
data_total = {('AAE908-208669ALF', 'AAE908-208669ALF'): 
    {'details': [
        {'customer': 'AAE', 'type': '908', 'material_no': 'AAE908-208669ALF', 'fg_material_no': 'AAE908-208669ALF', 'so': '0212186346', 'so_item': '000010', 'so_qty': 9.0, 'so_workweek': '2024-31', 'status': 0, 'm_group': 'X', 'fg_qty': 0.0, 'z_start_date': datetime.date(2024, 8, 9), 'z_prod_order': '211100401781', 'z_plan_order': None, 'z_orignal_qty': 730.0, 'plant': 'SVI2', 'seq_no': 0.0}, 
        {'customer': 'AAE', 'type': '908', 'material_no': 'AAE908-208669ALF', 'fg_material_no': 'AAE908-208669ALF', 'so': '0212187892', 'so_item': '000010', 'so_qty': 864.0, 'so_workweek': '2024-33', 'status': 0, 'm_group': 'X', 'fg_qty': 0.0, 'z_start_date': datetime.date(2024, 8, 1), 'z_prod_order': '211100401239', 'z_plan_order': None, 'z_orignal_qty': 100.0, 'plant': 'SVI2', 'seq_no': 0.0}, 
        {'customer': 'AAE', 'type': '908', 'material_no': 'AAE908-208669ALF', 'fg_material_no': 'AAE908-208669ALF', 'so': '0212187900', 'so_item': '000010', 'so_qty': 864.0, 'so_workweek': '2024-35', 'status': 0, 'm_group': 'X', 'fg_qty': 0.0, 'z_start_date': datetime.date(2024, 8, 17), 'z_prod_order': None, 'z_plan_order': '0156513168', 'z_orignal_qty': 864.0, 'plant': 'SVI2', 'seq_no': 0.0}, 
        {'customer': 'AAE', 'type': '908', 'material_no': 'AAE908-208669ALF', 'fg_material_no': 'AAE908-208669ALF', 'so': None, 'so_item': None, 'so_qty': None, 'so_workweek': None, 'status': 0, 'm_group': 'X', 'fg_qty': 0.0, 'z_start_date': datetime.date(2024, 10, 11), 'z_prod_order': None, 'z_plan_order': '0156513171', 'z_orignal_qty': 864.0, 'plant': 'SVI2', 'seq_no': 0.0}, 
        {'customer': 'AAE', 'type': '908', 'material_no': 'AAE908-208669ALF', 'fg_material_no': 'AAE908-208669ALF', 'so': None, 'so_item': None, 'so_qty': None, 'so_workweek': None, 'status': 0, 'm_group': 'X', 'fg_qty': 0.0, 'z_start_date': datetime.date(2024, 10, 18), 'z_prod_order': None, 'z_plan_order': '0156513172', 'z_orignal_qty': 432.0, 'plant': 'SVI2', 'seq_no': 0.0}, 
        {'customer': 'AAE', 'type': '908', 'material_no': 'AAE908-208669ALF', 'fg_material_no': 'AAE908-208669ALF', 'so': None, 'so_item': None, 'so_qty': None, 'so_workweek': None, 'status': 0, 'm_group': 'X', 'fg_qty': 0.0, 'z_start_date': datetime.date(2024, 9, 14), 'z_prod_order': None, 'z_plan_order': '0156513169', 'z_orignal_qty': 864.0, 'plant': 'SVI2', 'seq_no': 0.0}, 
        {'customer': 'AAE', 'type': '908', 'material_no': 'AAE908-208669ALF', 'fg_material_no': 'AAE908-208669ALF', 'so': None, 'so_item': None, 'so_qty': None, 'so_workweek': None, 'status': 0, 'm_group': 'X', 'fg_qty': 0.0, 'z_start_date': datetime.date(2024, 9, 17), 'z_prod_order': None, 'z_plan_order': '0156513170', 'z_orignal_qty': 1087.0, 'plant': 'SVI2', 'seq_no': 0.0}
        ]}}


def process_total(data):
    for key, value in data.items():
        # print()
        details = value['details']
        for i, detail in enumerate(details):
            print(detail)
        
process_total(data_total)


{('AAE908-208669ALF', 'AAE908-208669ALF'): 
    {('AAE908-208669ALF', 'AAE908-208669ALF', 0): 
        {'customer': 'AAE', 'type': '908', 'material_no': 'AAE908-208669ALF', 'fg_material_no': 'AAE908-208669ALF', 'so': '0212186346', 'so_item': '000010', 'so_qty': 9.0, 'so_workweek': '2024-31', 'status': 0, 'm_group': 'X', 'fg_qty': 82.0, 'z_start_date': None, 'z_prod_order': '211100401781', 'z_plan_order': None, 'z_orignal_qty': None, 'plant': 'SVI2', 'seq_no': 0.0}, ('AAE908-208669ALF', 'AAE908-208669ALF', 1): {'customer': 'AAE', 'type': '908', 'material_no': 'AAE908-208669ALF', 'fg_material_no': 'AAE908-208669ALF', 'so': '0212187892', 'so_item': '000010', 'so_qty': 864.0, 'so_workweek': '2024-33', 'status': 0, 'm_group': 'X', 'fg_qty': 82.0, 'z_start_date': None, 'z_prod_order': '211100401239', 'z_plan_order': None, 'z_orignal_qty': None, 'plant': 'SVI2', 'seq_no': 0.0}, ('AAE908-208669ALF', 'AAE908-208669ALF', 2): {'customer': 'AAE', 'type': '908', 'material_no': 'AAE908-208669ALF', 'fg_material_no': 'AAE908-208669ALF', 'so': '0212187900', 'so_item': '000010', 'so_qty': 864.0, 'so_workweek': '2024-35', 'status': 0, 'm_group': 'X', 'fg_qty': 82.0, 'z_start_date': None, 'z_prod_order': None, 'z_plan_order': '0156513169', 'z_orignal_qty': None, 'plant': 'SVI2', 'seq_no': 0.0}}}