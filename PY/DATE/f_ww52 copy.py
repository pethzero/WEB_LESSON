data_main = [
    {"name": "pump_fire01", "m_type": "f001", "total": 600},
]

list_week = [ 
    {"amount_used": 0, "amount_add": 100, "amount_summary": 0, "amount_per": 0, "per_used": 78, "amount_remain": 0, "m_type": "f001", "ww": 1, "mode": "E"},
    {"amount_used": 0, "amount_add": 0, "amount_summary": 0, "amount_per": 0, "per_used": 75, "amount_remain": 0, "m_type": "f001", "ww": 2, "mode": "E"},
    {"amount_used": 0, "amount_add": 0, "amount_summary": 0, "amount_per": 0, "per_used": None, "amount_remain": 0, "m_type": "f001", "ww": 3, "mode": "E"},
    {"amount_used": 0, "amount_add": 0, "amount_summary": 0, "amount_per": 0, "per_used": None, "amount_remain": 0, "m_type": "f001", "ww": 4, "mode": "E"},
]

# เริ่มจาก total ใน data_main
initial_total = data_main[0]["total"]

# หาตำแหน่งเริ่มต้นที่ต้องใช้ amount_used
start_week_index = next((i for i, week in enumerate(list_week) if week["amount_used"] > 0), 0)

# ใช้ initial_total แทนถ้าไม่มี amount_used ที่มากกว่า 0
if start_week_index == 0:
    list_week[start_week_index]["amount_used"] = initial_total

# เริ่มคำนวณจากตำแหน่งที่กำหนด
for i in range(start_week_index, len(list_week)):
    current_week = list_week[i]

    # ใช้ amount_remain ของสัปดาห์ก่อนหน้าถ้าไม่ใช่สัปดาห์แรก
    if i > start_week_index:
        current_week["amount_used"] = list_week[i - 1]["amount_remain"]

    # คำนวณ amount_summary
    current_week["amount_summary"] = current_week["amount_used"] + current_week["amount_add"]

    # คำนวณ amount_remain
    current_week["amount_remain"] = current_week["amount_summary"] * (current_week["per_used"] / 100)

    # ตั้ง mode เป็น 'T'
    current_week["mode"] = "T"

    # หยุดคำนวณถ้า per_used == 0
    if current_week["per_used"] == 0:
        break

# แสดงผลลัพธ์
for week in list_week:
    print(week)
