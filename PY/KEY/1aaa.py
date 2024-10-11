# ข้อมูลเริ่มต้น
list_on_hand = [{ 
    'material_no': 'AAAA', 
    'qty': 0,
}]

data_fg = [
    {'material_no': 'AAAA', 'qty': 110},
    {'material_no': 'BBBB', 'qty': 50},
]

# สร้างพจนานุกรมเพื่อรวบรวมข้อมูล
merged_dict = {item['material_no']: item['qty'] for item in list_on_hand}

# อัปเดตค่าของพจนานุกรม
for item in data_fg:
    material_no = item['material_no']
    qty = item['qty']
    if material_no in merged_dict:
        merged_dict[material_no] += qty
    else:
        merged_dict[material_no] = qty

# แปลงพจนานุกรมกลับเป็นรายการ
merged_list = [{'material_no': k, 'qty': v} for k, v in merged_dict.items()]

print(merged_list)
