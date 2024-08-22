data = [
    {"parentid": 1, "childid": 101, "info": "Data 1"},
    {"parentid": 1, "childid": 101, "info": "Data 2"},
    {"parentid": 1, "childid": 101, "info": "Data 3"},
    {"parentid": 1, "childid": 102, "info": "Data 2"},
    {"parentid": 2, "childid": 201, "info": "Data 3"},
    {"parentid": 2, "childid": 202, "info": "Data 4"},
    {"parentid": 3, "childid": 301, "info": "Data 5"}
]

# สร้าง dict ที่ใช้ parentid เป็นคีย์หลัก
result = {}
for item in data:
    parentid = item["parentid"]
    if parentid not in result:
        result[parentid] = []
    # เพิ่มข้อมูล childid และข้อมูลอื่นๆ ลงใน dict
    result[parentid].append({"childid": item["childid"], "info": item["info"]})

print(result)
