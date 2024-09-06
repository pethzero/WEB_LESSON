# class Employee:
#     def __init__(self, name, employee_id, position, salary):
#         self.name = name
#         self.employee_id = employee_id
#         self.position = position
#         self.salary = salary
            
#     def display_info(self):
#         print(f"Employee name: {self.name}, employee_id: {self.employee_id}, position: {self.position}, salary: {self.salary}")
        
#     def give_raise(self,param):
#         return self.salary + param

# class Company:
#     def __init__(self):
#         self.employees = []
        
#     def add_employee(self, name, employee_id, position, salary):
#         employee = Employee(name, employee_id, position, salary)
#         self.employees.append(employee)
#         return employee
    
#     def find_employee_by_id(self, employee_id):
#         for employee in self.employees:
#             if employee.employee_id == employee_id:
#                 return employee
#         return None
    
#     def average_salary(self):
#         total = 0
#         for employee in self.employees:
#             total += employee.salary
#         average = total / len(self.employees)
#         return average

# # # สร้างอินสแตนซ์ของ Library
# company = Company()

# company.add_employee("Prayot", "50196", "Manager", 300000).give_raise(5000)
# found_employee = company.find_employee_by_id("50196")

# if found_employee:
#     found_employee.display_info()


import csv

class Employee:
    def __init__(self, name, employee_id, position, salary):
        self.name = name
        self.employee_id = employee_id
        self.position = position
        self.salary = salary
            
    def display_info(self):
        print(f"Employee Name: {self.name}, Employee ID: {self.employee_id}, Position: {self.position}, Salary: {self.salary}")
        
    def give_raise(self, amount):
        self.salary += amount
        return self.salary

class Company:
    def __init__(self):
        self.employees = []
        
    def add_employee(self, name, employee_id, position, salary):
        employee = Employee(name, employee_id, position, salary)
        self.employees.append(employee)
        return employee
    
    def find_employee_by_id(self, employee_id):
        for employee in self.employees:
            if employee.employee_id == employee_id:
                return employee
        return None
    
    def remove_employee(self, employee_id):
        self.employees = [emp for emp in self.employees if emp.employee_id != employee_id]
    
    def promote_employee(self, employee_id, new_position, raise_amount):
        employee = self.find_employee_by_id(employee_id)
        if employee:
            employee.position = new_position
            employee.give_raise(raise_amount)
    
    def list_employees_by_position(self, position):
        for employee in self.employees:
            if employee.position == position:
                employee.display_info()
    
    def average_salary(self):
        total = sum(employee.salary for employee in self.employees)
        average = total / len(self.employees) if self.employees else 0
        return average
    
    def total_payroll(self):
        return sum(employee.salary for employee in self.employees)
    
    def give_all_raises(self, amount=None, percentage=None):
        for employee in self.employees:
            if amount:
                employee.give_raise(amount)
            elif percentage:
                employee.give_raise(employee.salary * percentage / 100)
    
    def salary_report(self):
        print("Salary Report:")
        print("-" * 40)
        for employee in self.employees:
            employee.display_info()
        print("-" * 40)
        print(f"Total Payroll: {self.total_payroll()}")
        print(f"Average Salary: {self.average_salary()}")
    
    def export_to_csv(self, filename="employees.csv"):
        with open(filename, 'w', newline='') as file:
            writer = csv.writer(file)
            writer.writerow(["Name", "Employee ID", "Position", "Salary"])
            for employee in self.employees:
                writer.writerow([employee.name, employee.employee_id, employee.position, employee.salary])
    
    def import_from_csv(self, filename="employees.csv"):
        with open(filename, 'r') as file:
            reader = csv.DictReader(file)
            for row in reader:
                self.add_employee(row['Name'], row['Employee ID'], row['Position'], float(row['Salary']))

# ตัวอย่างการใช้งาน
company = Company()

# เพิ่มพนักงานใหม่
employee1 = company.add_employee("Prayot", "50196", "Manager", 30000)
employee2 = company.add_employee("Thanadol", "53196", "Developer", 20000)
employee3 = company.add_employee("Somchai", "54213", "Designer", 150000)

# เพิ่มเงินเดือนให้พนักงาน
employee1.give_raise(50000)

# ค้นหาพนักงานโดยรหัสพนักงานและแสดงข้อมูล
found_employee = company.find_employee_by_id("50196")
if found_employee:
    found_employee.display_info()

# เลื่อนตำแหน่งให้พนักงานและเพิ่มเงินเดือน
company.promote_employee("53196", "Senior Developer", 30000)

# แสดงรายชื่อนักพัฒนาทั้งหมด
print("\nEmployees with position 'Developer':")
company.list_employees_by_position("Developer")

# แสดงค่าเฉลี่ยเงินเดือนของพนักงานทั้งหมด
print(f"\nAverage Salary: {company.average_salary()}")

# แสดงรายงานเงินเดือนทั้งหมด
company.salary_report()

# ส่งออกข้อมูลพนักงานไปยัง CSV
company.export_to_csv()

# ลบพนักงานออกจากระบบ
company.remove_employee("54213")

# นำเข้าข้อมูลพนักงานจาก CSV
company.import_from_csv()
