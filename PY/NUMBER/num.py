# ตัวอย่างข้อมูล
data = [
    {'type': '908', 'fg_material_no': 'LGP908-210661CLF', 'material_no': 'LGP908-210661CLF', 'seq_no': 0},
    {'material_no': 'LGP01R-210661CLF', 'fg_material_no': 'LGP908-210661CLF', 'customer': 'LGP', 'status': 10, 'seq_no': None, 'type': '01R', 'row_no': 2, 'no': 3},
    {'material_no': 'LGP01E-210661CLF', 'fg_material_no': 'LGP908-210661CLF', 'customer': 'LGP', 'status': 10, 'seq_no': 1.2, 'type': '01E', 'row_no': 3, 'no': 4},
    {'material_no': 'LGP01P-21066102LF', 'fg_material_no': 'LGP908-210661CLF', 'customer': 'LGP', 'status': 10, 'seq_no': None, 'type': '01P', 'row_no': 4, 'no': 5},
    {'material_no': 'LGP01P-21066103LF', 'fg_material_no': 'LGP908-210661CLF', 'customer': 'LGP', 'status': 10, 'seq_no': None, 'type': '01P', 'row_no': 5, 'no': 6},
    {'material_no': 'LGP01P-21066105CLF', 'fg_material_no': 'LGP908-210661CLF', 'customer': 'LGP', 'status': 10, 'seq_no': None, 'type': '01P', 'row_no': 6, 'no': 7},
    {'material_no': 'LGP01P-21066101LF', 'fg_material_no': 'LGP908-210661CLF', 'customer': 'LGP', 'status': 10, 'seq_no': None, 'type': '01P', 'row_no': 7, 'no': 8},
    {'material_no': 'LGP01E-210662LF', 'fg_material_no': 'LGP908-210661CLF', 'customer': 'LGP', 'status': 10, 'seq_no': 2.1, 'type': '01E', 'row_no': 8, 'no': 2},
    {'material_no': 'LGP01E-210663LF', 'fg_material_no': 'LGP908-210661CLF', 'customer': 'LGP', 'status': 10, 'seq_no': 1.1, 'type': '01E', 'row_no': 9, 'no': 1},
    {'material_no': 'LGP01E-210664LF', 'fg_material_no': 'LGP908-210661CLF', 'customer': 'LGP', 'status': 10, 'seq_no': None, 'type': '01E', 'row_no': 10, 'no': 9}
]

# Filter out entries with None values in seq_no
filtered_data = [item for item in data if item.get('seq_no') is not None]

# Extract seq_no values and find the maximum
max_seq_no = max(item['seq_no'] for item in filtered_data)

print("The highest seq_no is:", max_seq_no)

value_max =  int(max_seq_no) +1


# Process each item in data
for index, item in enumerate(data):
    if item['seq_no'] is None:
        item['seq_no'] = value_max
        value_max += 1
        item['m_group'] = 'M'
    else:
        item['m_group'] = 'M'
        item['seq_no'] = item['m_group']


    print(item)
