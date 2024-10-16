data_refecnce = [ 
  { "material_no" : "LGP908-213198BTLF", "fg_material_no" : "LGP908-213198BTLF", "customer" : "LGP", "type" : "908" ,'status':10, "seq_no" : 0 , "row_no" : 64}
, { "material_no" : "LGP01E-213198BTLF", "fg_material_no" : "LGP908-213198BTLF", "customer" : "LGP", "type" : "01E" ,'status':10, "seq_no" : None , "row_no" : 65}
, { "material_no" : "LGP01E-210772DLF", "fg_material_no" : "LGP908-213198BTLF", "customer" : "LGP", "type" : "01E"  ,'status':10, "seq_no" : None , "row_no" : 66}
, { "material_no" : "LGP01E-210772CLF", "fg_material_no" : "LGP908-213198BTLF", "customer" : "LGP", "type" : "01E"  ,'status':10, "seq_no" : 3 , "row_no" : 67}
, { "material_no" : "LGP01S-177134LF", "fg_material_no" : "LGP908-213198BTLF", "customer" : "LGP", "type" : "01S"   ,'status':10, "seq_no" : 1 , "row_no" : 68}
]

data_1 = [
{ "material_no" : "LGP01E-210772CLF", "fg_material_no" : "LGP908-213198BTLF", "customer" : "LGP", "type" : "01E"  ,'status':10, "seq_no" : 3 , "row_no" : 67},
{ "material_no" : "LGP01S-177134LF", "fg_material_no" : "LGP908-213198BTLF", "customer" : "LGP", "type" : "01S"   ,'status':10, "seq_no" : 1 , "row_no" : 68},
{ "material_no" : "WWW908-111WWWW", "fg_material_no" : "WWW908-111WWWW", "customer" : "WWW", "type" : "908", "status" : None, "seq_no" : None, "row_no" : 69 },
{ "material_no" : "AAA908-222AAAA", "fg_material_no" : "AAA908-222AAAA", "customer" : "AAA", "type" : "908", "status" : None, "seq_no" : None, "row_no" : 70 },
{ "material_no" : "AAA01C-222BBBB", "fg_material_no" : "AAA908-222AAAA", "customer" : "AAA", "type" : "01C", "status" : None, "seq_no" : None, "row_no" : 71 },
{ "material_no" : "CCC908-478CCCC", "fg_material_no" : "CCC908-478CCCC", "customer" : "CCC", "type" : "908", "status" : 10, "seq_no" : 0, "row_no" : 75 },
{ "material_no" : "CCC01C-478CCCC", "fg_material_no" : "CCC908-478CCCC", "customer" : "CCC", "type" : "01C", "status" : 10, "seq_no" : None, "row_no" : 76 },
{ "material_no" : "CCC01E-2221CCC", "fg_material_no" : "CCC908-478CCCC", "customer" : "CCC", "type" : "01E", "status" : None, "seq_no" : 2.1, "row_no" : 77 },
{ "material_no" : "CCC01B-2222CCC", "fg_material_no" : "CCC908-478CCCC", "customer" : "CCC", "type" : "01B", "status" : None, "seq_no" : 1, "row_no" : 78 },
{ "material_no" : "CCC01P-2223CCC", "fg_material_no" : "CCC908-478CCCC", "customer" : "CCC", "type" : "01P", "status" : 10, "seq_no" : 2.2, "row_no" : 79 },
{ "material_no" : "CCC01P-2223CCC", "fg_material_no" : "CCC908-478CCCC", "customer" : "CCC", "type" : "01P", "status" : 10, "seq_no" : None, "row_no" : 80 }
]

def process_data_none_dic(data):
    # จัดกลุ่มข้อมูลตาม fg_material_no
    groups = {}
    for item in data:
        key = item['fg_material_no']
        if key not in groups:
            groups[key] = {'status': None, 'details': []}
        groups[key]['details'].append(item)

    # ปรับสถานะของกลุ่ม
    for key, value in groups.items():
        statuses = set(detail['status'] for detail in value['details'])
        if 10 in statuses:
            value['status'] = 5 if None in statuses else 10
        else:
            value['status'] = 0

    # สร้างรายการ output ที่จัดเรียงแล้วและปรับข้อมูลให้เป็น flat
    result = []
    for key, value in groups.items():
        sorted_details = sorted(
            value['details'],
            key=lambda x: (x['material_no'] != x['fg_material_no'], x['seq_no'] if x['seq_no'] is not None else float('inf'))
        )
        no_counter = 0
        for detail in sorted_details:
            detail["status"] = value['status']
            if detail['type'] == '908':
                detail["no"] = 0
            else:
                no_counter += 1
                detail["no"] = no_counter
            result.append(detail)
    return result

processed_data = process_data_none_dic(data_1)
process_concent = False
process_key = None

for item in processed_data:
    if item['type'] != '908':
        process_key = item['fg_material_no']
        process_concent = True
        break

if process_concent:
    processed_refecnce = process_data_none_dic(data_refecnce)
    count = sum(1 for item in processed_data if item['fg_material_no'] == process_key)
    # รับข้อมูลล่าสุดจาก processed_refecnce
    array1 = processed_refecnce[-count:] if count > 0 else []
    # อัปเดต processed_data
    updated_data = array1 + processed_data[2:]

#     # แสดงผลลัพธ์
#     print('Updated data_r:')
#     for item in updated_data:
#         print(item)


# def process_data_none_dic(data):
#     # จัดกลุ่มข้อมูลตาม fg_material_no
#     groups = {}
#     for item in data:
#         key = item['fg_material_no']
#         if key not in groups:
#             groups[key] = {'status': None, 'details': []}
#         groups[key]['details'].append(item)

#     # ปรับสถานะของกลุ่ม
#     for key, value in groups.items():
#         statuses = {detail['status'] for detail in value['details']}
#         value['status'] = 5 if None in statuses and 10 in statuses else (10 if 10 in statuses else 0)

#     # สร้างรายการ output ที่จัดเรียงแล้วและปรับข้อมูลให้เป็น flat
#     result = []
#     for key, value in groups.items():
#         sorted_details = sorted(
#             value['details'],
#             key=lambda x: (x['material_no'] != x['fg_material_no'], x['seq_no'] if x['seq_no'] is not None else float('inf'))
#         )
#         no_counter = 0
#         for detail in sorted_details:
#             detail["status"] = value['status']
#             detail["no"] = no_counter if detail['type'] == '908' else (no_counter := no_counter + 1)
#             result.append(detail)
#     return result

# # ประมวลผลข้อมูล
# processed_data = process_data_none_dic(data_1)
# process_key = next((item['fg_material_no'] for item in processed_data if item['type'] != '908'), None)

# if process_key:
#     print(process_key)
#     processed_refecnce = process_data_none_dic(data_refecnce)
#     count = sum(1 for item in processed_data if item['fg_material_no'] == process_key)
    
#     # รับข้อมูลล่าสุดจาก processed_refecnce และอัปเดต processed_data
#     updated_data = processed_refecnce[-count:] + processed_data[2:]

#     # แสดงผลลัพธ์
#     print('Updated data_r:')
#     for item in updated_data:
#         print(item)
