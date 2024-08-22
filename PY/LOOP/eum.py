# 1. การใช้ enumerate กับ List

fruits = ['apple', 'banana', 'cherry']

for index, fruit in enumerate(fruits):
    print(f"Index: {index}, Fruit: {fruit}")


# 2. การเริ่มต้นดัชนีที่แตกต่าง
fruits = ['apple', 'banana', 'cherry']

for index, fruit in enumerate(fruits, start=1):
    print(f"Index: {index}, Fruit: {fruit}")


# 3. การใช้ enumerate กับ Tuple
coordinates = [(1, 2), (3, 4), (5, 6)]

for index, (x, y) in enumerate(coordinates):
    print(f"Index: {index}, X: {x}, Y: {y}")

# 4. การใช้ enumerate ในการค้นหาตำแหน่งของค่าที่ต้องการ
items = ['apple', 'banana', 'cherry']

search_item = 'banana'
for index, item in enumerate(items):
    if item == search_item:
        print(f"Item '{search_item}' found at index {index}")
        break

# 5. การใช้ enumerate กับ Dictionary
data = {'name': 'John', 'age': 30, 'city': 'New York'}

for index, (key, value) in enumerate(data.items()):
    print(f"Index: {index}, Key: {key}, Value: {value}")

# 6. การใช้ enumerate กับ List Comprehension
fruits = ['apple', 'banana', 'cherry']
indexed_fruits = [f"{index}: {fruit}" for index, fruit in enumerate(fruits)]
print(indexed_fruits)

########################################################################################################################################################################
# 1. การใช้ enumerate กับ List of Dictionaries
students = [
    {'name': 'Alice', 'age': 21},
    {'name': 'Bob', 'age': 22},
    {'name': 'Charlie', 'age': 23}
]

for index, student in enumerate(students):
    print(f"Index: {index}, Name: {student['name']}, Age: {student['age']}")

# 2. การเริ่มต้นดัชนีที่แตกต่างใน List of Dictionaries
students = [
    {'name': 'Alice', 'age': 21},
    {'name': 'Bob', 'age': 22},
    {'name': 'Charlie', 'age': 23}
]

for index, student in enumerate(students, start=1):
    print(f"Index: {index}, Name: {student['name']}, Age: {student['age']}")

# 3. การใช้ enumerate เพื่อดัดแปลงข้อมูลใน List of Dictionaries
students = [
    {'name': 'Alice', 'age': 21},
    {'name': 'Bob', 'age': 22},
    {'name': 'Charlie', 'age': 23}
]

# เปลี่ยนแปลงข้อมูลโดยการเพิ่มข้อมูลดัชนีในพจนานุกรม
updated_students = [{'index': index, **student} for index, student in enumerate(students)]

print(updated_students)

# 4. การใช้ enumerate เพื่อตรวจสอบข้อมูลใน List of Dictionaries
students = [
    {'name': 'Alice', 'age': 21},
    {'name': 'Bob', 'age': 22},
    {'name': 'Charlie', 'age': 23}
]

search_name = 'Bob'
for index, student in enumerate(students):
    if student['name'] == search_name:
        print(f"Student '{search_name}' found at index {index}")
        break


# 5. การใช้ enumerate เพื่อสร้าง DataFrame จาก List of Dictionaries (ใช้ Pandas)
import pandas as pd

students = [
    {'name': 'Alice', 'age': 21},
    {'name': 'Bob', 'age': 22},
    {'name': 'Charlie', 'age': 23}
]

# สร้าง DataFrame จาก List of Dictionaries
df = pd.DataFrame(students)
print(df)
