class ClassName:
    # ตัวแปรคลาส (class variable) - ใช้ร่วมกันระหว่างทุกอินสแตนซ์
    class_variable = "This is a class variable"
    
    def __init__(self, param1, param2):
        # ตัวแปรอินสแตนซ์ (instance variables) - เฉพาะสำหรับแต่ละอินสแตนซ์
        self.instance_variable1 = param1
        self.instance_variable2 = param2
    
    def method1(self):
        # เมธอด (method) - ฟังก์ชันที่ทำงานภายในคลาส
        print(f"Method1 called with {self.instance_variable1} and {self.instance_variable2}")
    
    def method2(self, param):
        # เมธอดที่รับพารามิเตอร์
        print(f"Method2 called with {param}")

    @classmethod
    def class_method(cls):
        # เมธอดคลาส (class method) - เข้าถึงได้โดยไม่ต้องสร้างอินสแตนซ์ และใช้ตัวแปรคลาส
        print(f"Class method called with {cls.class_variable}")

    @staticmethod
    def static_method():
        # เมธอดสเตติก (static method) - ไม่ใช้ตัวแปรคลาสหรืออินสแตนซ์
        print("Static method called")


# สร้างอินสแตนซ์ของคลาส
obj = ClassName("value1", "value2")

# เรียกใช้เมธอดของอินสแตนซ์
obj.method1()  # Method1 called with value1 and value2
obj.method2("extra value")  # Method2 called with extra value

# เรียกใช้เมธอดคลาส
ClassName.class_method()  # Class method called with This is a class variable

# เรียกใช้เมธอดสเตติก
ClassName.static_method()  # Static method called
