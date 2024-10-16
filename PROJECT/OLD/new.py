data_1 = [
    {"material_no": "LGP01E-210772CLF", "fg_material_no": "LGP908-213198BTLF", "customer": "LGP", "type": "01E", "row_no": 101},
    {"material_no": "LGP01S-177134LF", "fg_material_no": "LGP908-213198BTLF", "customer": "LGP", "type": "01S", "row_no": 102},
    {"material_no": "LGP01S-177135LF", "fg_material_no": "LGP908-213198BTLF", "customer": "LGP", "type": "01S", "row_no": 103},
    {"material_no": "LGP908-213200ALF", "fg_material_no": "LGP908-213200ALF", "customer": "LGP", "type": "908", "row_no": 104},
    {"material_no": "LGP01E-213200ALF", "fg_material_no": "LGP908-213200ALF", "customer": "LGP", "type": "01E", "row_no": 105},
    {"material_no": "LGP908-213200T3LF", "fg_material_no": "LGP908-213200T3LF", "customer": "LGP", "type": "908", "row_no": 106},
    {"material_no": "LGP01E-213200LF", "fg_material_no": "LGP908-213200T3LF", "customer": "LGP", "type": "01E", "row_no": 107},
    {"material_no": "LGP908-213600ATLF", "fg_material_no": "LGP908-213600ATLF", "customer": "LGP", "type": "908", "row_no": 108},
    {"material_no": "LGP01R-213600ATLF", "fg_material_no": "LGP908-213600ATLF", "customer": "LGP", "type": "01R", "row_no": 109},
    {"material_no": "LGP01E-213600LF", "fg_material_no": "LGP908-213600ATLF", "customer": "LGP", "type": "01E", "row_no": 110},
    {"material_no": "LGP908-214030LF", "fg_material_no": "LGP908-214030LF", "customer": "LGP", "type": "908", "row_no": 111},
    {"material_no": "LGP01R-214030LF", "fg_material_no": "LGP908-214030LF", "customer": "LGP", "type": "01R", "row_no": 112},
    {"material_no": "LGP01E-214030LF", "fg_material_no": "LGP908-214030LF", "customer": "LGP", "type": "01E", "row_no": 113},
    {"material_no": "LGP01E-214002LF", "fg_material_no": "LGP908-214030LF", "customer": "LGP", "type": "01E", "row_no": 114},
    {"material_no": "LGP908-214268TLF", "fg_material_no": "LGP908-214268TLF", "customer": "LGP", "type": "908", "row_no": 115},
    {"material_no": "LGP01E-214268LF", "fg_material_no": "LGP908-214268TLF", "customer": "LGP", "type": "01E", "row_no": 116},
    {"material_no": "LGP01E-210772CLF", "fg_material_no": "LGP908-214268TLF", "customer": "LGP", "type": "01E", "row_no": 117},
    {"material_no": "LGP01E-210772DLF", "fg_material_no": "LGP908-214268TLF", "customer": "LGP", "type": "01E", "row_no": 118},
    {"material_no": "LGP01S-001125LF", "fg_material_no": "LGP908-214268TLF", "customer": "LGP", "type": "01S", "row_no": 119},
    {"material_no": "LGP01S-177086LF", "fg_material_no": "LGP908-214268TLF", "customer": "LGP", "type": "01S", "row_no": 120}
]

data_search = [    
    {"material_no": "LGP908-213198BTLF", "fg_material_no": "LGP908-213198BTLF", "customer": "LGP", "type": "908", "row_no": 1},
    {"material_no": "LGP01E-213198BTLF", "fg_material_no": "LGP908-213198BTLF", "customer": "LGP", "type": "01E", "row_no": 2},
    {"material_no": "LGP01E-210772DLF", "fg_material_no": "LGP908-213198BTLF", "customer": "LGP", "type": "01E", "row_no": 3},
    {"material_no": "LGP01E-210772CLF", "fg_material_no": "LGP908-213198BTLF", "customer": "LGP", "type": "01E", "row_no": 4},
    {"material_no": "LGP01S-177134LF", "fg_material_no": "LGP908-213198BTLF", "customer": "LGP", "type": "01S", "row_no": 5},
    {"material_no": "LGP01S-177135LF", "fg_material_no": "LGP908-213198BTLF", "customer": "LGP", "type": "01S", "row_no": 6}
]

def process_data(data_1, data_search):
    # Grouping data_1 by fg_material_no
    grouped_data_1 = {}
    for item in data_1:
        fg_material_no = item["fg_material_no"]
        if fg_material_no not in grouped_data_1:
            grouped_data_1[fg_material_no] = []
        grouped_data_1[fg_material_no].append(item)

    # Grouping data_search by fg_material_no
    grouped_data_search = {}
    for item in data_search:
        fg_material_no = item["fg_material_no"]
        if fg_material_no not in grouped_data_search:
            grouped_data_search[fg_material_no] = []
        grouped_data_search[fg_material_no].append(item)
    
    transformed_data = []
    for group_id, (fg_material_no, items) in enumerate(grouped_data_1.items(), start=1):
        if items[0]["type"] != "908":
            # If the first item in the group is not '908', use data_search to get the order
            search_items = grouped_data_search.get(fg_material_no, [])
            search_map = {item["material_no"]: i+1 for i, item in enumerate(search_items)}
            for item in items:
                item["group"] = str(group_id)
                item["no"] = search_map.get(item["material_no"], None)
                transformed_data.append(item)
        else:
            # If the first item in the group is '908', process normally
            no_counter = 0
            for item in items:
                item["group"] = str(group_id)
                if item["type"] == "908":
                    item["no"] = 0
                else:
                    no_counter += 1
                    item["no"] = no_counter
                transformed_data.append(item)
    
    return transformed_data

transformed_data = process_data(data_1, data_search)

for item in transformed_data:
    print(item)
