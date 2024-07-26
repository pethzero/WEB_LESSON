def process_data_dic(data):
    from collections import defaultdict

    # สร้าง dictionary สำหรับจัดกลุ่มข้อมูลตาม fg_material_no
    grouped_data = defaultdict(lambda: {'status': None, 'details': []})

    # จัดกลุ่มข้อมูล
    for item in data:
        key = item['fg_material_no']
        grouped_data[key]['details'].append(item)

    # ปรับสถานะของกลุ่ม
    for key, value in grouped_data.items():
        statuses = set(detail['status'] for detail in value['details'])
        
        # กำหนดสถานะใหม่สำหรับกลุ่ม
        if 10 in statuses:
            if None in statuses:
                value['status'] = 5
            else:
                value['status'] = 10
        else:
            value['status'] = 0

    # สร้างรายการ output ที่จัดเรียงแล้วและปรับข้อมูลให้เป็น flat
    result = []
    for key, value in grouped_data.items():
        sorted_details = sorted(
            value['details'],
            key=lambda x: (x['material_no'] != x['fg_material_no'], x['seq_no'] if x['seq_no'] is not None else float('inf'))
        )
        no_counter = 0
        for detail in sorted_details:
            detail['status'] = value['status']
            if detail['type'] == '908':
                detail["no"] = 0
            else:
                no_counter += 1
                detail["no"] = no_counter
            result.append(detail)
    return result

# ทดสอบฟังก์ชัน
data_1 = [
    { "material_no" : "ZZZ07I-111ZZZZ", "fg_material_no" : "ZZZ07I-111ZZZZ", "customer" : "ZZZ", "type" : "07I", "status" : 10, "seq_no" : 3, "row_no" : 67 },
    { "material_no" : "ZZZ07I-111ZZZZ", "fg_material_no" : "ZZZ07I-111ZZZZ", "customer" : "ZZZ", "type" : "07I", "status" : 10, "seq_no" : 3, "row_no" : 68 },
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

processed_data = process_data_dic(data_1)
for item in processed_data:
    print(item)
