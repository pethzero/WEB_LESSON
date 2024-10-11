from datetime import datetime

def process_po_headtab(po_headtab, plant):
    sql_statements = []
    
    for x in po_headtab:
        # Skip if 'STTXT' is present
        if 'STTXT' in x and x['STTXT']:
            continue
        
        # Format dates from YYYYMMDD to YYYY-MM-DD
        start_date = f"{x['GSTRP'][:4]}-{x['GSTRP'][4:6]}-{x['GSTRP'][6:8]}"
        finish_date = f"{x['GLTRP'][:4]}-{x['GLTRP'][4:6]}-{x['GLTRP'][6:8]}"
        
        # Choose material number
        material_no = x.get('MATNR') or x.get('STLBEZ') or x.get('PLNBEZ')
        
        # Set status
        status = 'CRTD' if 'STTXT' in x and 'CRTD' in x['STTXT'] else 'PLAN'
        
        # Construct SQL query
        sql = f"""
        INSERT INTO [PLAN].dbo.prd_plan_order_new
        (plan_order, start_date, finish_date, qty, create_date, material_no, plant, status, scarp_qty, delivered_qty)
        VALUES ('{x['AUFNR']}', '{start_date}', '{finish_date}', '{x['GAMNG']}', '{datetime.now().strftime('%Y-%m-%d')}', '{material_no}', '{plant}', '{status}', '{x['IASMG']}', '{x['IGMNG']}')
        """
        
        # Add the SQL statement to the list
        sql_statements.append(sql)
    
    # Join all statements with ';' to form a single string
    return '; '.join(sql_statements)

# Example usage:
msg_payload = {
    'PO_HEADTAB': [
        {'AUFNR': '123456', 'GSTRP': '20240101', 'GLTRP': '20240110', 'GAMNG': '100', 'MATNR': 'MAT123', 'IASMG': '5', 'IGMNG': '90', 'STTXT': 'CRTD'},
        {'AUFNR': '789101', 'GSTRP': '20240201', 'GLTRP': '20240210', 'GAMNG': '200', 'PLNBEZ': 'PLN456', 'IASMG': '10', 'IGMNG': '190'},
        # Add more dictionaries as needed
    ]
}

msg_mat_plant = 'PLANT001'

# Generate SQL
sql_output = process_po_headtab(msg_payload['PO_HEADTAB'], msg_mat_plant)
print(sql_output)
