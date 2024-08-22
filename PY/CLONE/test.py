import copy

# 1. ใช้ copy โมดูล
# Python มีโมดูล copy ที่ให้ฟังก์ชัน deepcopy สำหรับการคัดลอกอ็อบเจ็กต์ทั้งหมดอย่างลึกซึ้ง:
# ตัวอย่างข้อมูล
original = {
    'name': 'Alice',
    'age': 30,
    'address': {
        'city': 'Wonderland',
        'zip': '12345'
    }
}

# การคัดลอกลึก
deep_copy = copy.deepcopy(original)

# แสดงผลลัพธ์
print("Original:", original)
print("Deep Copy:", deep_copy)

# การเปลี่ยนแปลงค่าของสำเนาจะไม่กระทบกับข้อมูลต้นฉบับ
deep_copy['address']['city'] = 'New City'
print("Modified Deep Copy:", deep_copy)
print("Original after modification:", original)

# 2. การคัดลอกอ็อบเจ็กต์ในลักษณะเฉพาะ
# บางครั้งอ็อบเจ็กต์บางชนิดอาจต้องใช้วิธีการคัดลอกเฉพาะ เช่น การคัดลอกลิสต์หรือดิกชันนารี:

# การคัดลอกลิสต์: ใช้การคัดลอกลึกโดยใช้ copy.deepcopy หรือการคัดลอกลึกของลิสต์โดยการใช้การเข้าใจลิสต์:
# ตัวอย่างลิสต์
original_list = [1, 2, [3, 4]]

#2.1 การคัดลอกลึก
deep_copy_list = copy.deepcopy(original_list)

# การเปลี่ยนแปลงค่าของสำเนาจะไม่กระทบกับข้อมูลต้นฉบับ
deep_copy_list[2][0] = 99
print("Original List:", original_list)
print("Modified Deep Copy List:", deep_copy_list)

#2.2 การคัดลอกดิกชันนารี:
# python
# ตัวอย่างดิกชันนารี
original_dict = {'name': 'Bob', 'details': {'age': 25, 'city': 'Gotham'}}

# การคัดลอกลึก
deep_copy_dict = copy.deepcopy(original_dict)

# การเปลี่ยนแปลงค่าของสำเนาจะไม่กระทบกับข้อมูลต้นฉบับ
deep_copy_dict['details']['city'] = 'Metropolis'
print("Original Dict:", original_dict)
print("Modified Deep Copy Dict:", deep_copy_dict)

# 3. การคัดลอกอ็อบเจ็กต์ที่สร้างเอง
# หากคุณมีคลาสที่สร้างเอง, คุณอาจต้องจัดการการคัดลอกอย่างลึกซึ้งโดยการเขียนฟังก์ชัน __copy__ และ __deepcopy__:
class CustomClass:
    def __init__(self, data):
        self.data = data

    def __deepcopy__(self, memo):
        # การคัดลอกลึกของ CustomClass
        copied = CustomClass(copy.deepcopy(self.data, memo))
        return copied

original = CustomClass([1, 2, 3])
deep_copy = copy.deepcopy(original)

# การเปลี่ยนแปลงค่าของสำเนาจะไม่กระทบกับข้อมูลต้นฉบับ
deep_copy.data.append(4)
print("Original Data:", original.data)
print("Modified Deep Copy Data:", deep_copy.data)
