class Car:
    def __init__(self, make, model, year, license_plate):
        self.make = make
        self.model = model
        self.year = year
        self.license_plate = license_plate

    def display_info(self):
        logo = self.get_logo()  # ดึงโลโก้ของยี่ห้อรถ
        print(f"Make: {logo}, Model: {self.model}, Year: {self.year}, License Plate: {self.license_plate}")

    def get_logo(self):
        # สร้างดิกชันนารีสำหรับโลโก้ยี่ห้อรถ
        logos = {
            "Toyota": "🚗",  # ตัวอย่างใช้ Emoji แทนโลโก้จริง
            "Honda": "🚙",
            "Ford": "🚕",
            "BMW": "🚘"
        }
        # คืนค่าโลโก้จากชื่อยี่ห้อ ถ้าไม่มีในดิกชันนารีจะคืนค่าเป็นชื่อยี่ห้อ
        return logos.get(self.make, self.make)


class Garage:
    def __init__(self):
        self.cars = []  # สร้างลิสต์เปล่าสำหรับเก็บข้อมูลรถ

    def add_car(self, car):
        # เพิ่มรถใหม่เข้าไปในลิสต์
        self.cars.append(car)
        print(f"Added {car.make} {car.model} to the garage.")

    def find_car_by_license_plate(self, license_plate):
        # ค้นหารถโดยหมายเลขทะเบียน
        for car in self.cars:
            if car.license_plate == license_plate:
                return car
        return None

    def list_cars(self):
        # แสดงข้อมูลของรถทั้งหมดในโรงรถ
        if not self.cars:
            print("No cars in the garage.")
        else:
            for car in self.cars:
                car.display_info()


# สร้างอินสแตนซ์ของคลาส Car พร้อมพารามิเตอร์
car1 = Car("Toyota", "Corolla", 2020, "AB1234")
car2 = Car("Honda", "Civic", 2021, "XY5678")
car3 = Car("Ford", "Mustang", 2019, "MN6789")
car4 = Car("BMW", "X5", 2022, "CD9876")

# สร้างอินสแตนซ์ของคลาส Garage
garage = Garage()

# เพิ่มรถเข้าไปในโรงรถ
garage.add_car(car1)
garage.add_car(car2)
garage.add_car(car3)
garage.add_car(car4)

# ค้นหารถโดยหมายเลขทะเบียน
found_car = garage.find_car_by_license_plate("XY5678")
if found_car:
    print("\nFound Car:")
    found_car.display_info()
else:
    print("\nCar not found.")

# แสดงข้อมูลของรถทั้งหมดในโรงรถ
print("\nList of cars in the garage:")
garage.list_cars()
