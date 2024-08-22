from collections import defaultdict

def process_group(data, mode=0):
    groups = defaultdict(lambda: {'details': []})
    for item in data:
        if mode == 0:
            key = (item.get('parent_id'), item.get('child_id'))
        else:
            key = item.get('child_id')
        groups[key]['details'].append(item)
    return dict(groups)

# ตัวอย่างข้อมูลวัสดุ
material_data = [
    {'parent_id': 'A00-001', 'child_id': 'A00-001', 'material_no': 'M001', 'demand_qty': 10},
    {'parent_id': 'A00-001', 'child_id': 'A00-001', 'material_no': 'M002', 'demand_qty': 10},
    {'parent_id': 'A00-001', 'child_id': 'A00-001', 'material_no': 'M003', 'demand_qty': 10},
    {'parent_id': 'A00-001', 'child_id': 'A00-002', 'material_no': '', },
    {'parent_id': 'A00-001', 'child_id': 'A00-003', 'material_no': '', },
    {'parent_id': 'B00-001', 'child_id': 'B00-001', 'material_no': '', },
    {'parent_id': 'B00-001', 'child_id': 'B00-002', 'material_no': '', },
]

detail = [
        {'child_id': 'A00-002', 'material_no': 'A', 'sub_quantity': 5},
        {'child_id': 'A00-002', 'material_no': 'A', 'sub_quantity': 5},
        {'child_id': 'A00-002', 'material_no': 'A', 'sub_quantity': 5},
        {'child_id': 'A00-002', 'material_no': 'A', 'sub_quantity': 5},
]

# เรียกใช้ฟังก์ชันเพื่อจัดกลุ่มวัสดุตาม parent_id และ child_id
grouped_materials = process_group(material_data)

# แสดงผลลัพธ์
for group_key, group_details in grouped_materials.items():
    print(f"Group: {group_key}")
    for detail in group_details['details']:
        print(f"  Material No: {detail['material_no']}, Quantity: {detail['quantity']}")
