data = [
    {'mat': 'AAA908-XXX111', 'com': 'AAA01E-XXX0123'},
    {'mat': 'AAA908-XXX111', 'com': 'AAA01E-XXX0444'},
    {'mat': 'AAA908-XXX111', 'com': 'AAA02P-XXX0555'},
    {'mat': 'AAA908-XXX111', 'com': 'AAA01E-XXX0666'},
    {'mat': 'AAA908-XXX111', 'com': 'AAA02P-XXX0777'},
    {'mat': 'BBBB7908-12314', 'com': 'BBBB02P-AAAAAAAA'},
    {'mat': 'BBBB7908-12314', 'com': 'BBBB01E-AAAAAAAA'},
    {'mat': 'BBBB7908-12314', 'com': 'BBBB02P-AAAAAAAA'},
    {'mat': 'BBBB7908-12314', 'com': 'BBBB02P-CCCCCCCC'},
    {'mat': 'BBBB7908-12314', 'com': 'BBBB01E-BBBBBBBB'},
    {'mat': 'BBBB7908-12314', 'com': 'BBBB02P-BBBBBBBB'},
    {'mat': 'CCCC-12314', 'com': 'CCC02P-ADWDDWDf'},
    {'mat': 'DDDDD-12314', 'com': 'DDDD01E-ADWDDWDf'},
    {'mat': 'DDDDD-12314', 'com': 'DDDD02P-ADWDDWDf'},
    {'mat': 'EEEEE-12314', 'com': 'EEEEE01E-ADWDDWDf'},
]

result = {}

for item in data:
    parent_id = item['mat']
    com_value = item['com']
    
    # ตัดคำเพื่อให้ได้รูปแบบ '01E', '01S', หรือ '02P'
    com_prefix = com_value.split('-')[0]  # ตัดคำที่เครื่องหมาย '-'
    
    # ตรวจสอบว่ามี parent_id อยู่ใน result หรือไม่ ถ้าไม่มีให้สร้างใหม่
    if parent_id not in result:
        result[parent_id] = {
            'index': 0,
            'detail': []  # เริ่มต้นเป็นลิสต์ว่างแทนที่จะเป็น {}
        }
    
    # ตรวจสอบว่ามีคำว่า '01E' หรือ '01S' ใน com_prefix
    if '01E' in com_prefix or '01S' in com_prefix:
        # ถ้า detail ยังไม่มีข้อมูล ให้เพิ่ม dictionary ว่างก่อน
        if not result[parent_id]['detail']:
            result[parent_id]['detail'].append({})
        
        # ถ้ามีการจับคู่แล้ว ให้เพิ่มรายการใหม่
        if 'sub' in result[parent_id]['detail'][-1]:
            result[parent_id]['index'] += 1
            result[parent_id]['detail'].append({})
        
        result[parent_id]['detail'][-1]['main'] = com_value
    
    elif '02P' in com_prefix:
        # ถ้า detail ยังไม่มีข้อมูล ให้เพิ่ม dictionary ว่างก่อน
        if not result[parent_id]['detail']:
            result[parent_id]['detail'].append({})
        
        # ถ้า main ยังไม่มี ให้ตั้งเป็น parent_id
        if 'main' not in result[parent_id]['detail'][-1]:
            result[parent_id]['detail'][-1]['main'] = parent_id
        
        # ถ้า sub ยังไม่มี ให้เพิ่มค่า sub
        if 'sub' not in result[parent_id]['detail'][-1]:
            result[parent_id]['detail'][-1]['sub'] = com_value
        else:
            # ถ้ามีทั้ง main และ sub แล้ว ให้เพิ่มรายการใหม่
            result[parent_id]['index'] += 1
            result[parent_id]['detail'].append({'main': parent_id, 'sub': com_value})

print(result)



# ลิสต์สำหรับเก็บผลลัพธ์ที่แปลง
extracted_data = []

# วนลูปผ่านแต่ละ parent_id ใน result
for parent_id, data in result.items():
    # วนลูปผ่านแต่ละรายการใน detail ของ parent_id นั้นๆ
    for detail in data['detail']:
        extracted_data.append({
            'key': parent_id,
            'main': detail['main'],
            'sub': detail['sub']
        })

# แสดงผลลัพธ์ที่แปลง
print(extracted_data)