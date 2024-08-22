# สร้าง iterator จาก list
numbers = iter([1, 2, 3])

# ดึงค่าถัดไปจาก iterator
print(next(numbers))  # Output: 1
print(next(numbers))  # Output: 2
print(next(numbers))  # Output: 3

# เมื่อ iterator หมด จะเกิด StopIteration ถ้าไม่ใส่ default_value
# print(next(numbers))  # Error: StopIteration

# สามารถใส่ default_value เพื่อป้องกันการเกิด error ได้
print(next(numbers, 'End of Iterator'))  # Output: End of Iterator


# ตัวอย่าง data และ key
data = {'A': 1, 'B': 2, 'C': 3}
key = ('x', 'B')

# ใช้ next เพื่อหาค่าที่ตรงกับเงื่อนไข
result = next(gk for gk in data.keys() if key[1] == gk)

print(result)  # Output: 'B'
