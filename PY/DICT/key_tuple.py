# Sample data
data = [
    {'parent_id': 'P1', 'child_id': 'C1', 'detail': {'info': 'Detail 1'}},
    {'parent_id': 'P1', 'child_id': 'C2', 'detail': {'info': 'Detail 2'}},
    {'parent_id': 'P2', 'child_id': 'C3', 'detail': {'info': 'Detail 3'}},
    {'parent_id': 'P2', 'child_id': 'C4', 'detail': {'info': 'Detail 4'}}
]

# Initialize the dictionary
result = {}

# Process the data
for item in data:
    parent_id = item['parent_id']
    child_id = item['child_id']
    detail = item['detail']
    
    if parent_id not in result:
        result[parent_id] = {}
    
    if (parent_id, child_id) not in result[parent_id]:
        result[parent_id][(parent_id, child_id)] = []
    
    result[parent_id][(parent_id, child_id)].append(detail)

# Display the result
for parent_id, child_details in result.items():
    print(f"Parent ID: {parent_id}")
    for key, details in child_details.items():
        print(f"  Key: {key}")
        for detail in details:
            print(f"    Detail: {detail}")

# Save to file
with open('output_data.py', 'w') as file:
    file.write(f"data = {result}\n")
