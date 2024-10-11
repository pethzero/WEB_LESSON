import random

def guess_number():
    # สุ่มตัวเลขตั้งแต่ 1 ถึง 100
    number_random = random.randint(1, 100)
    number_guess = None  # ตั้งค่าเริ่มต้น
    attempts = 0  # ตัวนับจำนวนครั้ง
    
    # ทำลูปจนกว่าผู้ใช้จะทายถูก
    while number_guess != number_random:
        # รับค่าการทายจากผู้ใช้และแปลงเป็นตัวเลข
        number_guess = int(input("Please enter an integer between 1 and 100: "))
        attempts += 1  # นับจำนวนครั้งที่ทาย

        # ตรวจสอบว่าทายสูงหรือต่ำเกินไป
        if number_guess < number_random:
            print("Too low, try again!")
        elif number_guess > number_random:
            print("Too high, try again!")
    
    # เมื่อทายถูก
    print(f"Congratulations! You've guessed the right number in {attempts} attempts.")

# เรียกใช้ฟังก์ชัน
guess_number()
