data = {
    'E_TFACT': {'IDENT': 'TH', 'SPRAS': 'E', 'LTEXT': 'AAA'},
    'C_DATA': [{'JAHR': '2024', 'DATUM': '20240101', 'HOLIDAY_FLAG': 'X', 'LTEXT': 'New Year Day(A)-1st'},{'JAHR': '2024', 'DATUM': '202401010', 'HOLIDAY_FLAG': '', 'LTEXT': 'New Year Day(A)-1st'}]
}

date_holiday = []
# # แสดงข้อมูล C_DATA
print("\nC_DATA:")
for item in data['C_DATA']:
    for key, value in item.items():
        if key == 'DATUM':
            date_holiday.append(value)
        # print(f"  {key}: {value}")

print(date_holiday)

for item in data['C_DATA']:
    if item['HOLIDAY_FLAG'] == 'X':
        date_holiday.append(item['DATUM'])

# แสดงข้อมูล E_TFACT
# print("E_TFACT:")
# for key, value in data['E_TFACT'].items():
#     print(f"  {key}: {value}")

# # แสดงข้อมูล C_DATA
# print("\nC_DATA:")
# for item in data['C_DATA']:
#     for key, value in item.items():
        # print(f"  {key}: {value}")


# ลูปผ่าน key และ value ใน data
# for key, value in data.items():
#     print(f"{key}:")
    
    # ถ้า value เป็น dictionary ให้แสดงข้อมูลภายใน
    # if key == 'C_DATA':
    #     # ลูปผ่านรายการใน C_DATA (ซึ่งเป็น list)
    #     for item in value:
    #         for sub_key, sub_value in item.items():
    #             print(f"  {sub_key}: {sub_value}")
    
######################################################################################################## 
    # if isinstance(value, dict):
    #     for sub_key, sub_value in value.items():
    #         print(f"  {sub_key}: {sub_value}")
    
    # # ถ้า value เป็น list ให้ลูปผ่านแต่ละ item ใน list
    # elif isinstance(value, list):
    #     for item in value:
    #         for sub_key, sub_value in item.items():
    #             print(f"  {sub_key}: {sub_value}")