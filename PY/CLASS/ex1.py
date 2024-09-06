class Student:
    def __init__(self, name, age, gpa, student_id):
        self.name = name
        self.age = age
        self.gpa = gpa
        self.student_id = student_id
            
    def display_info(self):
        print(f"Student Name: {self.name}, Age: {self.age}, GPA: {self.gpa}, Student ID: {self.student_id}")
        
    def is_honor_roll(self):
        return self.gpa >= 3.5
        
class School:
    def __init__(self):
        self.students = []
        
    def add_student(self, name, age, gpa, student_id):
        student = Student(name, age, gpa, student_id)
        self.students.append(student)
        return student
    
    def find_student_by_id(self, student_id):
        for student in self.students:
            if student.student_id == student_id:
                return student
        return None
    
    def honor_students(self):
        return [student for student in self.students if student.is_honor_roll()]

# สร้างอินสแตนซ์ของคลาส School
school = School()

# เพิ่มนักเรียน
school.add_student("Alice", 16, 3.8, '0001')
school.add_student("Bob", 17, 3.6, '0002')
school.add_student("Charlie", 18, 3.2, '0003')

# แสดงลิสต์ของนักเรียนทั้งหมด
for student in school.students:
    student.display_info()

# ค้นหานักเรียนโดย ID
found_student = school.find_student_by_id('0003')
if found_student:
    found_student.display_info()
else:
    print("Student not found")

# แสดงนักเรียนที่อยู่ในเกียรตินิยม
honor_roll_students = school.honor_students()
print("\nHonor Roll Students:")
for student in honor_roll_students:
    student.display_info()
