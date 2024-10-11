import pprint

data = [
    {'parent_id': 'P1', 'child_id': 'C1', 'name': 'Material1', 'qty': 100},
    {'parent_id': 'P1', 'child_id': 'C1', 'name': 'Material1', 'qty': 200},
    {'parent_id': 'P1', 'child_id': 'C2', 'name': 'Material2', 'qty': 200},
    {'parent_id': 'P2', 'child_id': 'C3', 'name': 'Material3', 'qty': 150},
    {'parent_id': 'P2', 'child_id': 'C4', 'name': 'Material4', 'qty': 250}
]

list_a = ['C1','C2','C3','C4']

# Initialize result dictionary
result = {}

# First, create entries for all parents and children
for parent_id in set(item['parent_id'] for item in data):
    result[parent_id] = {
        'total_all': 0,
        'price_data': 0,
        'children': {}
    }
    
    for child_id in list_a:
        result[parent_id]['children'][(parent_id, child_id)] = {
            'total': 0,  # Initialize total
            'detail': []  # Initialize detail list
        }

# Process each item in the data
for item in data:
    parent_id = item['parent_id']
    child_id = item['child_id']
    qty = item['qty']
    
    # Update the total quantity for the specific child
    key = (parent_id, child_id)
    if key in result[parent_id]['children']:
        result[parent_id]['children'][key]['total'] += qty
        
        # Add detail to the list
        result[parent_id]['children'][key]['detail'].append({
            'parent_id': parent_id,
            'child_id': child_id,
            'mat': item['name'],
            'qty': qty
        })
        
        # Update parent_id total
        result[parent_id]['total_all'] += qty
        # Example: You can set 'price_data' based on quantity (as a placeholder)
        result[parent_id]['price_data'] += qty * 10  # Assuming price is qty * 10 for this example

# Print the result dictionary
pprint.pprint(result)

# # Process each item in the data
# for item in data:
#     parent_id = item['parent_id']
#     child_id = item['child_id']
#     qty = item['qty']
    
#     # Create an entry for the parent_id if it doesn't exist
#     if parent_id not in result:
#         result[parent_id] = {'total_all': 0, 'price_data': 0, 'children': {}}
    
#     # Create an entry for the (parent_id, child_id) if it doesn't exist
#     key = (parent_id, child_id)
#     if key not in result[parent_id]['children']:
#         result[parent_id]['children'][key] = {
#             'total': 0,  # Initialize total
#             'detail': []  # Initialize detail list
#         }
    
#     # Update the total quantity
#     result[parent_id]['children'][key]['total'] += qty
    
#     # Add detail to the list, including parent_id and child_id
#     result[parent_id]['children'][key]['detail'].append({
#         'parent_id': parent_id,
#         'child_id': child_id,
#         'mat': item['name'],
#         'qty': qty
#     })
    
#     # Update parent_id total
#     result[parent_id]['total_all'] += qty
#     # Example: You can set 'price_data' based on quantity (as a placeholder)
#     result[parent_id]['price_data'] += qty * 10  # Assuming price is qty * 10 for this example

# Define summary function
def summary(result):
    for parent_id in result:
        for key in result[parent_id]['children']:
            # Append the summary entry to the detail list, including parent_id and child_id
            result[parent_id]['children'][key]['detail'].append({
                'parent_id': parent_id,
                'child_id': key[1],  # Use the child_id from the key tuple
                'mat': 'Total',
                'qty': result[parent_id]['children'][key]['total']
            })

# Call summary function to add summary details
summary(result)

pprint.pprint(result)
# Extract back to array format
extracted_data = []

# วนลูปผ่าน parent_id และ child_data ใน result
for parent_id, child_data in result.items():
    # ดึงข้อมูล all_total และ price จาก parent_id
    all_total = result[parent_id]['total_all']  # รวมทั้งหมดของ parent_id
    price_data = result[parent_id]['price_data']  # ราคาที่สัมพันธ์กับ parent_id

    # วนลูป child_data เพื่อดึงรายละเอียดในแต่ละ child_id
    for key, value in child_data['children'].items():
        # วนลูปในแต่ละ detail ภายใน child_id
        print(key) #(parent_id,child_id)
        for detail in value['detail']:
            # เพิ่มข้อมูลลงใน extracted_data พร้อมกับ all_total และ price_data
            extracted_data.append({
                'parent_id': detail['parent_id'],
                'child_id': detail['child_id'],
                'name': detail['mat'],
                'qty': detail['qty'],
                'all_total': all_total,  # เพิ่มค่า all_total
                'price': price_data  # เพิ่มค่า price_data
            })

# แสดงข้อมูลที่ถูกดึงออกมา
for item in extracted_data:
    print(item)


# Print the extracted data to verify
# pprint.pprint(extracted_data)
