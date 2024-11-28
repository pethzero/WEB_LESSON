def createww52(m_type):
    # ฟังก์ชันสร้าง list ของ ww 1 ถึง 52
    return [
        {
            "amount_used": 0,
            "amount_add": 0,
            "amount_summary": 0,
            "amount_per": 0,
            "per_used": 0,
            "amount_remain": 0,
            "m_type": m_type,
            "ww": week,
            "mode": "E",
        }
        for week in range(1, 53)  # สร้าง ww 1 ถึง 52
    ]

# ตัวอย่างการใช้งาน
ww_data = createww52("f001")

print(ww_data)
# แสดงผลลัพธ์
# for item in ww_data[:5]:  # ดูตัวอย่างแค่ 5 รายการแรก
#     print(item)
