from datetime import datetime, timedelta

def add_business_days(start_date, days_to_add):
    current_date = start_date
    added_days = 0

    while added_days < days_to_add:
        current_date += timedelta(days=1)  # เพิ่มวันทีละ 1
        if current_date.weekday() < 5:  # ถ้าวันนั้นไม่ใช่วันเสาร์ (5) หรือวันอาทิตย์ (6)
            added_days += 1

    return current_date

# ใช้งานฟังก์ชัน
# start_date = datetime.now()
start_date = datetime.strptime('2024-09-14', '%Y-%m-%d')
new_date = add_business_days(start_date, 2)
print(new_date)
