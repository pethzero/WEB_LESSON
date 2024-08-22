def merge_lists(list1, list2, key):
    # สร้างดิกชันนารีเพื่อเก็บข้อมูลที่รวมกัน
    merged_dict = {}

    # เพิ่มข้อมูลจาก list1
    for item in list1:
        merged_dict[item[key]] = item

    # รวมข้อมูลจาก list2 โดยอัปเดตค่าของคีย์ที่ตรงกัน
    for item in list2:
        if item[key] in merged_dict:
            # ถ้ามีข้อมูลใน merged_dict แล้ว อัปเดตค่าของคีย์
            merged_dict[item[key]].update(item)
        else:
            # ถ้ายังไม่มีข้อมูลใน merged_dict เพิ่มข้อมูลใหม่
            merged_dict[item[key]] = item

    # เปลี่ยน merged_dict กลับเป็นลิสต์
    return list(merged_dict.values())

# ตัวอย่างการใช้งาน
list1 = [
    {'id': 1, 'name': 'Alice', 'age': 25},
    {'id': 2, 'name': 'Bob', 'age': 30},
    {'id': 3, 'name': 'Charlie', 'age': 35}
]

list2 = [
    {'id': 2, 'name': 'Bobby', 'age': 31},
    {'id': 4, 'name': 'David', 'age': 40}
]

merged_list = merge_lists(list1, list2, 'id')
print(merged_list)
