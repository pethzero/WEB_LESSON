# Example of parent-child relationship in a dictionary
data = [
    {"id": 1, "name": "Parent1", "parentid": None},
    {"id": 2, "name": "Child1", "parentid": 1},
    {"id": 3, "name": "Child2", "parentid": 1},
    {"id": 4, "name": "Parent2", "parentid": None},
    {"id": 5, "name": "Child3", "parentid": 4},
]

# Convert list to a dictionary with id as key
id_to_item = {item['id']: item for item in data}

# Function to build a hierarchy
def build_hierarchy(data):
    tree = {}
    for item in data:
        item['children'] = []
        if item['parentid'] is None:
            tree[item['id']] = item
        else:
            parent = id_to_item.get(item['parentid'])
            if parent:
                parent['children'].append(item)
    return tree

# Build the hierarchy
hierarchy = build_hierarchy(data)

# Print the hierarchy
import pprint
pprint.pprint(hierarchy)
