import time
import os

# ความกว้างของหน้าจอในเทอร์มินัล
screen_width = 120

# ตัวรถแต่ละคันเป็นสัญลักษณ์
cars = ["🚗", "🏎️", "🚙", "🚐"]

# เริ่มต้นตำแหน่งของแต่ละคัน
positions = [0, 0, 0, 0]

# กำหนดความเร็ว (เวลาหน่วง) ของแต่ละคัน
speeds = [0.1, 0.05, 0.15, 0.2]  # ความเร็วต่างกัน

# สร้างตัวจับเวลาแยกสำหรับแต่ละคัน
last_update_time = [0, 0, 0, 0]

# เลือกโหมด: mode 1 = ลูป, mode 2 = มีเส้นชัย
mode = 2

# เส้นชัย
finish_line = screen_width - 10  # กำหนดเส้นชัยอยู่ก่อนขอบจอเล็กน้อย

# เริ่มต้นเวลาเริ่มต้น
start_time = time.time()

# สถานะของรถแต่ละคันว่าถึงเส้นชัยหรือไม่
has_finished = [False, False, False, False]

while True:
    # ลบข้อมูลในหน้าจอ (clear screen) เพื่อให้เห็นการเคลื่อนไหว
    os.system('cls' if os.name == 'nt' else 'clear')

    # ตรวจสอบถ้าทุกคันเข้าเส้นชัยแล้ว (สำหรับ mode 2)
    if mode == 2 and all(has_finished):
        print("ทุกคันเข้าเส้นชัยแล้ว!")
        break
    
    # เคลื่อนที่แต่ละคัน
    current_time = time.time()
    for i, car in enumerate(cars):
        # ข้ามถ้ารถคันนี้เข้าเส้นชัยแล้ว (สำหรับ mode 2)
        if mode == 2 and has_finished[i]:
            road = " " * positions[i] + car + " เข้าเส้นชัย!"
            print(road)
            continue

        # ตรวจสอบว่าผ่านไปตามเวลาที่กำหนดสำหรับคันนี้หรือยัง
        if current_time - last_update_time[i] >= speeds[i]:
            # ปรับตำแหน่งของรถคันนั้น
            positions[i] += 1
            
            # ถ้า mode 1: เคลื่อนที่ไปเรื่อยๆ วนลูป
            if mode == 1:
                if positions[i] > screen_width:
                    positions[i] = 0

            # ถ้า mode 2: เช็คว่าถึงเส้นชัยหรือยัง
            if mode == 2 and positions[i] >= finish_line:
                has_finished[i] = True
            
            # อัปเดตเวลาที่ทำการเคลื่อนที่ล่าสุด
            last_update_time[i] = current_time

        # สร้างถนนพร้อมรถ
        road = " " * positions[i] + car
        print(road)  # พิมพ์รถแต่ละคันในตำแหน่งปัจจุบัน

    # หน่วงเวลาเล็กน้อยเพื่อไม่ให้ทำงานหนักเกินไป
    time.sleep(0.01)
