class Restaurant:
    def __init__(self, name, menu):
        self.name = name
        self.menu = menu  # เมนูพร้อมจำนวนสินค้าคงคลัง
        self.inventory = {}  # สินค้าคงคลังของแต่ละเมนู
    
    def add_menu_item(self, name, price, stock):
        self.menu[name] = price
        self.inventory[name] = stock  # เพิ่มจำนวนสินค้าคงคลัง
    
    def remove_menu_item(self, name):
        if name in self.menu:
            del self.menu[name]
            if name in self.inventory:
                del self.inventory[name]  # ลบสินค้าในคลังด้วย (ถ้ามี)
            print(f"{name} has been removed from the menu.")
        else:
            print(f"{name} is not in the menu.")
    
    def show_menu(self):
        print(f"Menu for {self.name}:")
        for item, price in self.menu.items():
            stock = self.inventory.get(item, 0)
            stock_status = "Out of stock" if stock == 0 else f"Stock: {stock}"
            print(f"{item}: {price} THB ({stock_status})")
    
    def update_stock(self, item_name, quantity):
        if item_name in self.inventory:
            self.inventory[item_name] += quantity
            print(f"Updated stock for {item_name}: {self.inventory[item_name]} units.")
        else:
            print(f"{item_name} is not in the inventory.")
    
    def recommend_menu(self):
        print("Recommended dishes:")
        for item, stock in self.inventory.items():
            if stock > 0:  # แนะนำเฉพาะเมนูที่ยังมีสินค้า
                print(f"{item}: {self.menu[item]} THB")


# สร้างวัตถุของคลาส Restaurant
restaurant = Restaurant("Good Eats", {"Burger": 150, "Pasta": 200})

# เพิ่มเมนูใหม่และจำนวนสินค้าคงคลัง
restaurant.add_menu_item("Salad", 100, 5)  # Salad มีในสต็อก 5 หน่วย
restaurant.add_menu_item("Pasta", 200, 2)  # Pasta มีในสต็อก 2 หน่วย
restaurant.add_menu_item("Burger", 150, 5)  # เพิ่ม Burger กลับไปและตั้งค่า stock 5 หน่วย

# แสดงเมนูพร้อมสต็อก
restaurant.show_menu()

# ลบเมนู
# restaurant.remove_menu_item("Burger")  # ลบเมนู Burger (ซึ่งไม่มีในสินค้าคงคลัง)


# เพิ่มเมนู Burger กลับไปก่อนที่จะอัปเดตสต็อก
# ทำการอัปเดต stock
restaurant.update_stock("Burger", 10)  # เพิ่มสต็อก Burger อีก 10 หน่วย

# แสดงเมนูอีกครั้ง
restaurant.show_menu()
