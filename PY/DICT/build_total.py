from collections import defaultdict

def process_key_dict_mc(data_json, mode, key_main=None, key_dt=None):
    if mode == 0:
        group = defaultdict(lambda: defaultdict(lambda: {"demand_total": 0, "details": []}))
        
        for item in data_json:
            parent_id = item.get(key_main)
            child_id = item.get(key_dt)
            key = (parent_id, child_id)
            
            group[parent_id][key]["details"].append(item)
            # You can calculate and update the 'total' value here if needed
            # For example:
            # group[parent_id][key]["total"] += item.get('some_value', 0)
            
    else:
        raise ValueError("Invalid mode. Mode should be 0 or 1.")
    
    return group

data_json = [
    {"parent_id": "P1", "child_id": "P1", "value": 100},
    {"parent_id": "P1", "child_id": "C1", "value": 150},
    {"parent_id": "P2", "child_id": "P2", "value": -200},
    {"parent_id": "P1", "child_id": "P1", "value": -50},
    {"parent_id": "P2", "child_id": "C3", "value": 300}
]


result = process_key_dict_mc(data_json, mode=0, key_main="parent_id", key_dt="child_id")
# print(result)

for parent_id, child_dict in result.items():
    print(f"Parent ID: {parent_id}")
    for child_id, details in child_dict.items():
        demand_total = details["demand_total"]
        details_list = details["details"]
        if parent_id == child_id[1]:
            for entry in details_list:
               if entry.get('value',0) < 0:
                    demand_total -= entry.get('value',0)
        
            if demand_total > 0:
                new_item = {
                    '':''
                }
                details_list.append(new_item)
                
            
        print(f"  Child ID: {child_id}")
        print(f" Demand Total:{demand_total},Details: {details_list}")
        
        