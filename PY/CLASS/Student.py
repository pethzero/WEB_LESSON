class Student:
    def __init__(self, name, student_id, grade):
        self.name = name
        self.student_id = student_id
        self.grade = grade
        
    def display_info(self):
        print(f"Name: {self.name}, Student ID: {self.student_id}, Grade: {self.grade}")

        
class Teacher:
    def __init__(self, name, teacher_id, subject):
        self.name = name
        self.teacher_id = teacher_id
        self.subject = subject
        
    def display_info(self):
        print(f"Name: {self.name}, Teacher ID: {self.teacher_id}, Subject: {self.subject}")
        

class School:
    def __init__(self):
        self.students = []
        self.teachers = []

    def add_student(self, name, student_id, grade):
        student = Student(name, student_id, grade)
        self.students.append(student)
        return student
    
    def add_teacher(self, name, teacher_id, subject):
        teacher = Teacher(name, teacher_id, subject)
        self.teachers.append(teacher)
        return teacher
    
    def list_students(self):
        for student in self.students:
            student.display_info()  # ใช้เมธอด display_info ของ Student
            
    def list_teachers(self):
        for teacher in self.teachers:
            teacher.display_info()  # ใช้เมธอด display_info ของ Teacher


# ทดสอบการใช้งาน
school = School()

# เพิ่มนักเรียนและครู
school.add_student("John Doe", "S001", "A")
school.add_student("Jane Smith", "S002", "B")
school.add_teacher("Mr. Brown", "T001", "Math")
school.add_teacher("Ms. Green", "T002", "English")

# แสดงข้อมูลนักเรียนและครู
print("Students:")
school.list_students()

print("\nTeachers:")
school.list_teachers()
