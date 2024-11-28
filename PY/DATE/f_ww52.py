import copy

def process_weeks(data_main, list_week):
    remain_total = data_main[0]["total"]
    
    # Clone list_week เพื่อเก็บต้นฉบับ
    original_list_week = copy.deepcopy(list_week)
    
    # หาตำแหน่งเริ่มต้น
    start_week_index = next((i for i, week in enumerate(list_week) if week["amount_used"] is not None), 0)
    
    # ตั้งค่าเริ่มต้น
    condition = True
    for i in range(start_week_index, len(list_week)):
        current_week = original_list_week[i]
        
        if condition:
            if i == start_week_index:
                # สัปดาห์เริ่มต้น
                current_week["mode"] = "I"
                current_week["amount_used"] = remain_total
            else:
                # สัปดาห์ถัดไป
                current_week["mode"] = "N"
                current_week["amount_used"] = remain_total
            
            # คำนวณ amount_summary และ amount_remain
            current_week["amount_add"] = current_week.get("amount_add", 0) or 0
            remain_total += current_week.get("amount_add", 0) or 0
            current_week["amount_summary"] = remain_total
            remain_total  *= (current_week.get("per_used", 0) / 100)
            current_week["amount_remain"] = remain_total
            
            # จบการทำงานเมื่อ per_used เป็น None หรือ 0
            if current_week.get("per_used") in (None, 0):
                current_week["mode"] = "F"
                remain_total = 0
                condition = False
        else:
            # ตั้งค่าที่เหลือเป็น None
            current_week.update({
                "amount_used": None,
                "amount_add": None,
                "amount_summary": None,
                "amount_remain": None,
                "mode": "E"
            })
    
    # คืนค่าทั้ง list ที่ถูกปรับปรุง และสำเนาต้นฉบับ
    return list_week, original_list_week


# เรียกใช้ฟังก์ชัน
data_main = [
    {"name": "pump_fire01", "m_type": "f001", "total": 600},
]

list_week = [ 
    {"amount_used": None, "amount_add": 100,  "amount_summary": None, "per_used": 78, "amount_remain": 0, "m_type": "f001", "ww": 1, "mode": "E"},
    {"amount_used": None, "amount_add": 200,  "amount_summary": None, "per_used": 50, "amount_remain": 0, "m_type": "f001", "ww": 2, "mode": "E"},
    {"amount_used": None, "amount_add": None, "amount_summary": None, "per_used": None, "amount_remain": 0, "m_type": "f001", "ww": 3, "mode": "E"},
    {"amount_used": None, "amount_add": None, "amount_summary": None, "per_used": None, "amount_remain": 0, "m_type": "f001", "ww": 4, "mode": "E"},
]

# ผลลัพธ์
updated_list_week, original_list_week = process_weeks(data_main, list_week)

# แสดงผลลัพธ์
print("Updated List Week:")
for week in updated_list_week:
    print(week)

print("\nOriginal List Week (Before Processing):")
for week in original_list_week:
    print(week)
