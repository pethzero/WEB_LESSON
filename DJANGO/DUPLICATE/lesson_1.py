




duplicates = []

for item in data:
    existing_records = XXXXXX.objects.using('op_doc_ctrl').filter(request_by=item['en'])
    if existing_records.exists():
        duplicates.append(item['en'])

# รวมค่าที่ซ้ำกันเป็นข้อความเดียว
if duplicates:
    method = 'duplicate'
    message = 'มีรหัสพนักงานนี้อยู่ในระบบ: '
    message += ', '.join(duplicates)
else:
    method = 'No duplicate'
    message = 'ไม่มีรหัสพนักงานนี้อยู่ในระบบ: '