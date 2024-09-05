from collections import defaultdict

def process_group(material_data):
    group = defaultdict(lambda: defaultdict(list))
    group_total = defaultdict(lambda: defaultdict(dict))
    processed_parents = set()

    # Process materials data
    for item in material_data:
        parent_id = item.get('parent_id')
        child_id = item.get('child_id')
        qpa = item.get('qpa', 1)
        key = (parent_id, child_id)
        item_type = "M" if parent_id == child_id else "C"
        item['type'] = item_type

        # Calculate demand_total and variance
        if item_type == "M":
            
            if parent_id not in processed_parents:
                # item['demand_total'] = item['fg'] - (qpa * item['demand_qty'])
                # item['variance'] = item['fg'] - item['demand_qty']  # Initial variance
                processed_parents.add(parent_id)
            else:
                item['demand_total'] = -(qpa * item['demand_qty'])
                # item['variance'] = -item['demand_qty']  # Variance for subsequent M type
                
            # group_total[parent_id][child_id] += item['demand_total']
        elif item_type == "C":
            parent_demand_total = group_total[parent_id].get(parent_id, 0)
            item['demand_total'] = qpa * parent_demand_total
            # item['variance'] = 0  # No variance for C type
            # group_total[parent_id][child_id] += item['demand_total']
        
        group[parent_id][key].append(item)
    
    return group, group_total

# Sample material data
material_data = [
    {'parent_id': 'A999-1001', 'child_id': 'A999-1001', 'qpa': 1, 'fg': 429,'order_no': 'M001', 'demand_qty': 840},
    {'parent_id': 'A999-1001', 'child_id': 'A999-1001', 'qpa': 1, 'fg': 10, 'order_no': 'M002', 'demand_qty': 840},
    {'parent_id': 'A999-1001', 'child_id': 'A999-1001', 'qpa': 1, 'fg': 10, 'order_no': 'M003', 'demand_qty': 840},
    {'parent_id': 'A999-1001', 'child_id': 'A01E-1002', 'qpa': 1, 'material_no': '', 'demand_qty': 0},
    {'parent_id': 'A999-1001', 'child_id': 'A01R-1002', 'qpa': 1, 'material_no': '', 'demand_qty': 0},
    {'parent_id': 'B999-1001', 'child_id': 'B999-1001', 'qpa': 1, 'fg': 542, 'order_no': 'M001', 'demand_qty': 504},
    {'parent_id': 'B999-1001', 'child_id': 'B999-1001', 'qpa': 1, 'fg': 10, 'order_no': 'M002', 'demand_qty': 504},
    {'parent_id': 'B999-1001', 'child_id': 'B999-1001', 'qpa': 1, 'fg': 10, 'order_no': 'M003', 'demand_qty': 504},
    {'parent_id': 'B999-1001', 'child_id': 'B999-1001', 'qpa': 1, 'fg': 10, 'order_no': 'M004', 'demand_qty': 504},
    {'parent_id': 'B999-1001', 'child_id': 'B01R-1002', 'qpa': 2, 'material_no': '', 'demand_qty': 0},
]

# Group materials and calculate totals
group, group_total = process_group(material_data)

# Print results
for parent_id, child_dict in group.items():
    print(f"Parent ID: {parent_id}")
    for key, details in child_dict.items():
        child_id = key[1]
        total_demand = group_total[parent_id][child_id]
        print(f"  Child ID: {child_id}  Demand Total: {total_demand}")
        for detail in details:
            order_no = detail.get('order_no', 'N/A')
            quantity = detail.get('demand_qty', 'N/A')
            type_label = detail.get('type', 'N/A')
            demand_total = detail.get('demand_total', 'N/A')
            variance = detail.get('variance', 'N/A')
            print(f"    order_no: {order_no}, Quantity: {quantity}, Type: {type_label}, Demand Total: {demand_total}, Variance: {variance}")

