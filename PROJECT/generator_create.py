def generate_sql_create_table(table_name, column_definitions, primary_key='id', identity_column=None, collation='Thai_CI_AS'):
    sql = f"CREATE TABLE {table_name} (\n"
    columns = []

    date_now = ['create_date']
    
    for column_name, data_type in column_definitions.items():
        if column_name == identity_column:
            columns.append(f"    {column_name} {data_type} IDENTITY(1,1) NOT NULL")
        elif 'nvarchar' in data_type:
            columns.append(f"    {column_name} {data_type} COLLATE {collation}  NULL")
        elif 'datetime' in data_type and column_name in date_now:
            columns.append(f"    {column_name} {data_type}   NULL DEFAULT GETDATE()")
        else:
            columns.append(f"    {column_name} {data_type}  NULL")

    # Add primary key constraint
    # columns.append(f"    PRIMARY KEY ({primary_key})")

    sql += ",\n".join(columns)
    sql += "\n);"

    return sql


def infer_sql_types(data):
    sql_types = {}
    for key, value in data.items():
        if isinstance(value, bool):
            sql_types[key] = 'bit'
        elif isinstance(value, int):
            sql_types[key] = 'int'
        elif isinstance(value, str):
            if value.lower() in ('true', 'false'):
                sql_types[key] = 'bit'
            elif is_date(value):
                sql_types[key] = 'datetime'
            else:
                sql_types[key] = 'nvarchar(100)'
        else:
            raise ValueError(f"Unsupported data type for key: {key}")
    return sql_types


def is_date(string):
    from datetime import datetime

    try:
        datetime.strptime(string, '%Y-%m-%d')
        return True
    except ValueError:
        return False



# Example usage:

mc = {
    'id':0,
    'fg_material_no':'AA',
    'material_no':'AA',
    'group':'AA',
    'create_date':'2024-06-01',
    'create_by':'AA',
    'edit_date':'2024-06-01',
    'edit_by':'AA',
}



# print(generate_sql_create_table('organization_master', infer_sql_types(Orgres), primary_key='id', identity_column='id'))

print(generate_sql_create_table('bp_mc_setting', infer_sql_types(mc), primary_key='id', identity_column='id'))