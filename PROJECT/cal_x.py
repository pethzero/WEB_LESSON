def update_group1_with_group2(group1, group2):
    for key, data2 in group2.items():
        if key not in group1:
            # ถ้าคีย์ไม่อยู่ใน group1, ให้สร้างคีย์ใหม่
            group1[key] = {'details': data2['details']}
        else:
            # อัปเดตหรือเพิ่มรายละเอียดใน group1 ตาม index ของ group2
            details1 = group1[key]['details']
            details2 = data2['details']
            
            for index, item2 in enumerate(details2):
                if index < len(details1):
                    # อัปเดตรายละเอียดที่มีอยู่ใน group1
                    details1[index].update(item2)
                else:
                    # ถ้า index เกินขอบเขต, เพิ่มรายละเอียดใหม่ใน group1
                    details1.append(item2)
    
    return group1

# ตัวอย่างข้อมูล
group1 = {
    ('AAE908-208669ALF', 'AAE908-208669ALF'): {
        'details': [
            {'customer': 'AAE', 'type': '908', 'material_no': 'AAE908-208669ALF', 'fg_material_no': 'AAE908-208669ALF', 'so': '0212186346', 'so_item': '000010', 'so_qty': 9.0, 'so_workweek': '2024-31', 'status': 0, 'm_group': 'X', 'fg_qty': 82.0, 'z_start_date': None, 'z_prod_order': None, 'z_plan_order': None, 'z_orignal_qty': None, 'plant': 'SVI2', 'seq_no': 0.0}
        ]
    }
}

group2 = {
    ('AAE908-208669ALF', 'AAE908-208669ALF'): {
        'details': [
            {'customer': 'AAE', 'type': '908', 'material_no': 'AAE908-208669ALF', 'fg_material_no': 'AAE908-208669ALF', 'so': '0212186346', 'so_item': '000010', 'so_qty': 100.00, 'so_workweek': '2024-31', 'status': 0, 'm_group': 'X', 'fg_qty': 82.0, 'z_start_date': None, 'z_prod_order': None, 'z_plan_order': None, 'z_orignal_qty': None, 'plant': 'SVI2', 'seq_no': 0.0},
            {'customer': 'AAE', 'type': '908', 'material_no': 'AAE908-208669ALF', 'fg_material_no': 'AAE908-208669ALF', 'so': '0212187892', 'so_item': '000010', 'so_qty': 864.0, 'so_workweek': '2024-33', 'status': 0, 'm_group': 'X', 'fg_qty': 82.0, 'z_start_date': None, 'z_prod_order': None, 'z_plan_order': None, 'z_orignal_qty': None, 'plant': 'SVI2', 'seq_no': 0.0}
        ]
    }
}

# เรียกใช้ฟังก์ชัน
updated_group1 = update_group1_with_group2(group1, group2)

# พิมพ์ผลลัพธ์หลังการอัปเดต
print("Updated Group1:")
print(updated_group1)
