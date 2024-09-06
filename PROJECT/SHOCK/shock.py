mat_data = [
    {'material_no': 'A123', 'wo_pl_order': 'P001', 'wo_pl_status': 'REL'},
    {'material_no': 'A123', 'wo_pl_order': 'P002', 'wo_pl_status': 'CRTD'},
    {'material_no': 'A123', 'wo_pl_order': 'P003', 'wo_pl_status': 'PLAN'},
    {'material_no': 'B456', 'wo_pl_order': 'P004', 'wo_pl_status': 'PLAN'},
    {'material_no': 'B456', 'wo_pl_order': 'P005', 'wo_pl_status': 'REL'},
    {'material_no': 'C789', 'wo_pl_order': 'P006', 'wo_pl_status': 'CRTD'},
]

def process_shock_mat(mat_data):
    try:
        data = []
        for item in mat_data:
            fg_value = item.get('material_no')
            # Find the existing entry in data
            existing_entry = next((entry for entry in data if entry['fg_sub_mat'] == fg_value), None)
            if existing_entry:
                # Append to prod or plan based on some condition (example condition)
                if item.get('wo_pl_status') == 'REL' or item.get('wo_pl_status') == 'CRTD':
                    existing_entry['prod_order'].append(item.get('wo_pl_order'))
                elif item.get('wo_pl_status') == 'PLAN':
                    existing_entry['plan_order'].append(item.get('wo_pl_order'))
            else:
                # Create a new entry if it doesn't exist
                new_entry = {
                    'fg_sub_mat': fg_value,
                    'prod_order': [item.get('wo_pl_order')] if item.get('wo_pl_status') == 'REL' or  item.get('wo_pl_status') == 'CRTD' else [],
                    'plan_order': [item.get('wo_pl_order')] if item.get('wo_pl_status') == 'PLAN' else []
                }
                data.append(new_entry)
        
        query_parts = []
        for item in data:
            fg_sub_mat = item['fg_sub_mat']
            conditions = [f"(fg_sub_mat IN ('{fg_sub_mat}'))"]

            if len(item['prod_order']) > 0 and len(item['plan_order']) > 0:
                prod_order_str = "', '".join(item['prod_order'])
                plan_order_str = "', '".join(item['plan_order'])
                conditions.append(f"( (prod_order IN ('{prod_order_str}')) OR (plan_order IN ('{plan_order_str}')) )")
            else:
                if len(item['prod_order']) > 0:
                    prod_order_str = "', '".join(item['prod_order'])
                    conditions.append(f"(prod_order IN ('{prod_order_str}'))")

                if len(item['plan_order']) > 0:
                    plan_order_str = "', '".join(item['plan_order'])
                    conditions.append(f"(plan_order IN ('{plan_order_str}'))")

            # Combine conditions with ' AND '
            query_part = ' AND '.join(conditions)
            
            # Enclose the combined conditions in parentheses
            query_parts.append(f"({query_part})")

        # Join all parts with ' OR '
        query_string = ' OR '.join(query_parts)

        return query_string

    except Exception as e:
        print(f"An error occurred: {e}")
        return ""

# Test the function
query_string = process_shock_mat(mat_data)
print(query_string)
