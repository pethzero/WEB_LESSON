# การใช้ extend()
data_1 = [1, 2, 3]
data_2 = [4, 5, 6]
data_1.extend(data_2)
print(data_1)  # ผลลัพธ์: [1, 2, 3, 4, 5, 6] (แก้ไข list data_1 เดิม)

# การใช้ +
data_1 = [1, 2, 3]
data_2 = [4, 5, 6]
result = data_1 + data_2
print(result)  # ผลลัพธ์: [1, 2, 3, 4, 5, 6] (สร้าง list ใหม่)
print(data_1)  # data_1 ยังเป็น [1, 2, 3]
