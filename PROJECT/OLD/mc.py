import copy

data_1 = [
    {"material_no": "LGP908-21011601TLF", "fg_material_no": "LGP908-21011601TLF", "customer": "LGP", "type": "908", "row_no": 1},
    {"material_no": "LGP01E-210116FLF", "fg_material_no": "LGP908-21011601TLF", "customer": "LGP", "type": "01E", "row_no": 2},
    {"material_no": "LGP908-21011705LF", "fg_material_no": "LGP908-21011705LF", "customer": "LGP", "type": "908", "row_no": 3},
    {"material_no": "LGP01E-21011705LF", "fg_material_no": "LGP908-21011705LF", "customer": "LGP", "type": "01E", "row_no": 4},
    {"material_no": "LGP908-21011705TLF", "fg_material_no": "LGP908-21011705TLF", "customer": "LGP", "type": "908", "row_no": 5},
    {"material_no": "LGP01E-21011705TLF", "fg_material_no": "LGP908-21011705TLF", "customer": "LGP", "type": "01E", "row_no": 6},
    {"material_no": "LGP908-210117FLF", "fg_material_no": "LGP908-210117FLF", "customer": "LGP", "type": "908", "row_no": 7},
    {"material_no": "LGP01E-210117FLF", "fg_material_no": "LGP908-210117FLF", "customer": "LGP", "type": "01E", "row_no": 8},
    {"material_no": "LGP908-210117LF", "fg_material_no": "LGP908-210117LF", "customer": "LGP", "type": "908", "row_no": 9},
    {"material_no": "LGP01E-210117LF", "fg_material_no": "LGP908-210117LF", "customer": "LGP", "type": "01E", "row_no": 10}
]




# # Transform the data
# transformed_data = transform_data(data_1)


    
data_2 = [ { "material_no" : "LGP01E-210772CLF", "fg_material_no" : "LGP908-213198BTLF", "customer" : "LGP", "type" : "01E", "row_no" : 101,'status':0 }
, { "material_no" : "LGP01S-177134LF", "fg_material_no" : "LGP908-213198BTLF", "customer" : "LGP", "type" : "01S", "row_no" : 102 ,'status':0}
, { "material_no" : "LGP01S-177135LF", "fg_material_no" : "LGP908-213198BTLF", "customer" : "LGP", "type" : "01S", "row_no" : 103 ,'status':0}
, { "material_no" : "LGP908-213200ALF", "fg_material_no" : "LGP908-213200ALF", "customer" : "LGP", "type" : "908", "row_no" : 104 ,'status':0}
, { "material_no" : "LGP01E-213200ALF", "fg_material_no" : "LGP908-213200ALF", "customer" : "LGP", "type" : "01E", "row_no" : 105 ,'status':0}
, { "material_no" : "LGP908-213200T3LF", "fg_material_no" : "LGP908-213200T3LF", "customer" : "LGP", "type" : "908", "row_no" : 106 ,'status':0}
, { "material_no" : "LGP01E-213200LF", "fg_material_no" : "LGP908-213200T3LF", "customer" : "LGP", "type" : "01E", "row_no" : 107 ,'status':0}
, { "material_no" : "LGP908-213600ATLF", "fg_material_no" : "LGP908-213600ATLF", "customer" : "LGP", "type" : "908", "row_no" : 108 ,'status':0}
, { "material_no" : "LGP01R-213600ATLF", "fg_material_no" : "LGP908-213600ATLF", "customer" : "LGP", "type" : "01R", "row_no" : 109 ,'status':0}
, { "material_no" : "LGP01E-213600LF", "fg_material_no" : "LGP908-213600ATLF", "customer" : "LGP", "type" : "01E", "row_no" : 110 ,'status':0}
, ]


data_search = [ { "material_no" : "LGP908-213198BTLF", "fg_material_no" : "LGP908-213198BTLF", "customer" : "LGP", "type" : "908", "row_no" : 1 ,'status':10 }
, { "material_no" : "LGP01E-213198BTLF", "fg_material_no" : "LGP908-213198BTLF", "customer" : "LGP", "type" : "01E", "row_no" : 2 ,'status':0 }
, { "material_no" : "LGP01E-210772DLF", "fg_material_no" : "LGP908-213198BTLF", "customer" : "LGP", "type" : "01E", "row_no" : 3 ,'status':0 }
, { "material_no" : "LGP01E-210772CLF", "fg_material_no" : "LGP908-213198BTLF", "customer" : "LGP", "type" : "01E", "row_no" : 4 ,'status':0 }
, { "material_no" : "LGP01S-177134LF", "fg_material_no" : "LGP908-213198BTLF", "customer" : "LGP", "type" : "01S", "row_no" : 5 ,'status':0 }
, { "material_no" : "LGP01S-177135LF", "fg_material_no" : "LGP908-213198BTLF", "customer" : "LGP", "type" : "01S", "row_no" : 6 ,'status':0 } ]


def transform_data(data):
    # Group the data by fg_material_no
    grouped_data = {}
    for item in data:
        fg_material_no = item["fg_material_no"]
        if fg_material_no not in grouped_data:
            grouped_data[fg_material_no] = []
        grouped_data[fg_material_no].append(item)
    
    transformed_data = []
    for group_id, (fg_material_no, items) in enumerate(grouped_data.items(), start=1):
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

def update_no_in_transformed_data(main_data, reference_data,mode = 1):
    # Create a dictionary to map material_no to its no in reference_data
    no_mapping = {item['material_no']: item['no'] for item in reference_data}

    if mode == 0:
        # # Create a copy of main_data to avoid modifying the original list
        updated_data = copy.deepcopy(main_data)
        # Update the no in the copy of main_data based on the mapping
        for item in updated_data:
            if item['material_no'] in no_mapping:
                item['no'] = no_mapping[item['material_no']]
    else:                
        # IF NOT COPY
        updated_data = main_data
        for item in main_data:
            print(item)
            if item['material_no'] in no_mapping:
                item['no'] = no_mapping[item['material_no']]
                
    return updated_data

# Transform the main data
transformed_data_main = transform_data(data_2)
for item in transformed_data_main:
    print(item)
print('---------------------------------------------------------------------------')
# If the first item in the transformed main data is not of type '908', update the no
if transformed_data_main[0]['type'] != '908':
    transformed_data_reference = transform_data(data_search)
    updated_transformed_data_main = update_no_in_transformed_data(transformed_data_main, transformed_data_reference)
    print('---------------------------------------------------------------------------')
    for item in transformed_data_main:
        print(item)
        
        
        
