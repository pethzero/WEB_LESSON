data_main = [
    {"name": "pump_fire01", "m_type": "f001", "total": 600},
]

list_week = [
    {"amount_used": 0, "amount_add": 100, "amount_summary": 0, "amount_per": 0, "per_used": 78, "amount_remain": 0, "m_type": "f001", "ww": 1, "mode": "E"},
    {"amount_used": 0, "amount_add": 0, "amount_summary": 0, "amount_per": 0, "per_used": 75, "amount_remain": 0, "m_type": "f001", "ww": 2, "mode": "E"},
    {"amount_used": 0, "amount_add": 0, "amount_summary": 0, "amount_per": 0, "per_used": 0, "amount_remain": 0, "m_type": "f001", "ww": 3, "mode": "E"},
    {"amount_used": 0, "amount_add": 0, "amount_summary": 0, "amount_per": 0, "per_used": 0, "amount_remain": 0, "m_type": "f001", "ww": 4, "mode": "E"},
]

list_week = [
    {"amount_used": 0, "amount_add": 0, "amount_summary": 0, "amount_per": 0, "per_used": 0, "amount_remain": 0, "m_type": "f001", "ww": 1, "mode": "E"},
    {"amount_used": 0, "amount_add": 0, "amount_summary": 0, "amount_per": 0, "per_used": 100, "amount_remain": 0, "m_type": "f001", "ww": 2, "mode": "E"},
    {"amount_used": 0, "amount_add": 0, "amount_summary": 0, "amount_per": 0, "per_used": 0, "amount_remain": 0, "m_type": "f001", "ww": 3, "mode": "E"},
    {"amount_used": 0, "amount_add": 0, "amount_summary": 0, "amount_per": 0, "per_used": 0, "amount_remain": 0, "m_type": "f001", "ww": 4, "mode": "E"},
]


# ตัวแปรสำหรับคำนวณเริ่มต้น
initial_total = data_main[0]["total"]

for i, current_week in enumerate(list_week):
    # ถ้าเป็น ww1 ใช้ initial_total
    if i == 0:
        current_week["amount_used"] = initial_total
    else:
        # ใช้ amount_remain จาก ww ก่อนหน้า
        current_week["amount_used"] = list_week[i - 1]["amount_remain"]

    # คำนวณ amount_summary (amount_used + amount_add)
    current_week["amount_summary"] = current_week["amount_used"] + current_week["amount_add"]

    # คำนวณ amount_remain จาก amount_summary * (1 - per_used / 100)
    current_week["amount_remain"] = current_week["amount_summary"] * (current_week["per_used"] / 100)
    
    current_week['mode'] = 'T'
    # หยุดคำนวณถ้า per_used เป็น 0 (หรือ null)
    if current_week["per_used"] == 0:
        break

# แสดงผลลัพธ์
for week in list_week:
    print(week)
