def filter_sequence(data):
    filtered_values = []
    
    if not data:
        return filtered_values
    
    # เริ่มจากค่าแรก
    last_value = data[0]['seq_no']
    filtered_values.append(last_value)
    
    # เริ่มเปรียบเทียบจากค่าถัดไป
    for i in range(1, len(data)):
        current_value = data[i]['seq_no']
        print(current_value)
        if current_value - last_value > 1:
            filtered_values.append(current_value)
            last_value = current_value
            print(last_value)
    
    return filtered_values

# กำหนดข้อมูล
data = [
    {'seq_no': 0},
    {'seq_no': 1.1},
    {'seq_no': 1.2},
    {'seq_no': 1.9},
    {'seq_no': 2.6},
    {'seq_no': 2.7},
    {'seq_no': 4.2},
    {'seq_no': 3.6},
    {'seq_no': 8.6},
    {'seq_no': 5.4}
]

# ใช้ฟังก์ชัน
filtered_group = filter_sequence(data)
print("Filtered group:", filtered_group)
