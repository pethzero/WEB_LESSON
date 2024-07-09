format_sql_detail = {
    'leave': None,
    'owner': None,
}

def check_format_sql_detail(details):
    # ตรวจสอบว่ามีค่าใดไม่เป็น None ใน dictionary หรือไม่
    return any(value is not None for value in details.values())

# ตัวอย่างการใช้งาน
result = check_format_sql_detail(format_sql_detail)
print(result)  # จะพิมพ์ False เนื่องจากทุกค่าคือ None

# ทดสอบเมื่อมีค่าไม่เป็น None
format_sql_detail['leave'] = 'some_value'
result = check_format_sql_detail(format_sql_detail)
print(result)  # จะพิมพ์ True เนื่องจาก 'leave' มีค่าไม่เป็น None