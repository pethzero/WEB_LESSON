import pprint

data = [
    {'parent_id': 'P1', 'child_id': 'C1', 'name': 'Material1', 'qty': 100},
    {'parent_id': 'P1', 'child_id': 'C1', 'name': 'Material1', 'qty': 200},
    {'parent_id': 'P1', 'child_id': 'C2', 'name': 'Material2', 'qty': 200},
    {'parent_id': 'P2', 'child_id': 'C3', 'name': 'Material3', 'qty': 150},
    {'parent_id': 'P2', 'child_id': 'C4', 'name': 'Material4', 'qty': 250}
]

# Initialize result dictionary
result = {}

# Process each item in the data
for item in data:
    parent_id = item['parent_id']
    child_id = item['child_id']
    qty = item['qty']
    
    # Create an entry for the parent_id if it doesn't exist
    if parent_id not in result:
        result[parent_id] = {}
    
    # Create an entry for the (parent_id, child_id) if it doesn't exist
    key = (parent_id, child_id)
    if key not in result[parent_id]:
        result[parent_id][key] = {
            # 'parent_id': parent_id,
            # 'child_id': child_id,
            'total': 0,  # Initialize total
            'detail': []  # Initialize detail list
        }
    
    # Update the total quantity
    result[parent_id][key]['total'] += qty
    
    # Add detail to the list, including parent_id and child_id
    result[parent_id][key]['detail'].append({
        'parent_id': parent_id,
        'child_id': child_id,
        'mat': item['name'],
        'qty': qty
    })

# Define summary function
def summary(result):
    for parent_id in result:
        for key in result[parent_id]:
            # Append the summary entry to the detail list, including parent_id and child_id
            result[parent_id][key]['detail'].append({
                'parent_id': parent_id,
                'child_id': key[1],  # Use the child_id from the key tuple
                'mat': 'Total',
                'qty': result[parent_id][key]['total']
            })

# Call summary function to add summary details
summary(result)
print(result)
# Extract back to array format
extracted_data = []
for parent_id, child_data in result.items():
    for key, value in child_data.items():
        for detail in value['detail']:
            extracted_data.append({
                'parent_id': detail['parent_id'],
                'child_id': detail['child_id'],
                'name': detail['mat'],
                'qty': detail['qty']
            })

# Print the extracted data to verify
# pprint.pprint(extracted_data)
