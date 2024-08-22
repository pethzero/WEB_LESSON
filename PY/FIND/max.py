list_mat = [
    {'material_no': 'LGP01E-210772CLF', 'fg_qty': 18.0},
    {'material_no': 'LGP01E-210772DLF', 'fg_qty': 66.0},
    {'material_no': 'LGP01E-210772JLF', 'fg_qty': 0},
    {'material_no': 'LGP01S-177081LF', 'fg_qty': 0},
    {'material_no': 'LGP01S-177082LF', 'fg_qty': 0}
]

material_no_to_find = 'LGP01E-210772CLF'
subtract_value = 22

# # อัปเดตค่า fg_qty โดยหัก subtract_value
# for item in list_mat:
#     if item['material_no'] == material_no_to_find:
#         item['fg_qty'] = item['fg_qty'] - subtract_value
#         break

# print(list_mat)


# หา dictionary ที่ตรงกับ material_no และอัปเดตค่า fg_qty
item = next((item for item in list_mat if item['material_no'] == material_no_to_find), 0)
# print(item)
if item and item['fg_qty'] > 0:
    item['fg_qty'] -= subtract_value

print(list_mat)