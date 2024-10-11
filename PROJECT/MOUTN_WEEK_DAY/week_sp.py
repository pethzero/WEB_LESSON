from datetime import timedelta, datetime

def count_sp_next_day(start_date, days_to_add, special_days, list_stop):
    current_date = start_date
    added_days = 0
    
    # แปลง special_days จากสตริงให้เป็น datetime objects
    special_days = [datetime.strptime(day, '%Y%m%d') for day in special_days]

    while added_days < days_to_add:
        current_date += timedelta(days=1)  # เพิ่มวันทีละ 1

        # ถ้าไม่ใช่วันหยุดที่กำหนดใน list_stop และไม่ใช่วันพิเศษ
        if (current_date.weekday() not in list_stop and
            current_date not in special_days):
            added_days += 1

    # คืนค่าผลลัพธ์ในรูปแบบสตริง
    return current_date.strftime('%Y-%m-%d')



# ตัวอย่าง: เริ่มจากวันที่ปัจจุบัน
start_date = datetime.now()

# ตัวอย่าง array ของวันพิเศษ
special_days = ['20240916', '20240918', '20241001', '20241003']  # วันพิเศษในรูปแบบ YYYYMMDD
# special_days = []  # วันพิเศษในรูปแบบ YYYYMMDD

# รายการของวันหยุด (0=จันทร์, 1=อังคาร, ..., 5=เสาร์, 6=อาทิตย์)
list_stop = [5, 6]  # ห้ามนับวันจันทร์, เสาร์ และอาทิตย์

# เรียกใช้ฟังก์ชัน
new_start = count_sp_next_day(start_date, 2, special_days, list_stop)
print("New start date:", new_start)  # พิมพ์ new_start ได้เลย

# แปลง new_start กลับเป็น datetime เพื่อใช้ในการนับวันถัดไป
finish_date = datetime.strptime(new_start, '%Y-%m-%d')

# เรียกใช้ฟังก์ชันอีกครั้งเพื่อนับเพิ่มอีก 3 วัน
new_next = count_sp_next_day(finish_date, 3, special_days, list_stop)
print("Next date after 3 days:", new_next)
