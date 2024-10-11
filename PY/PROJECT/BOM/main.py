# main.py
from app.product import Product
from app.component import Component

# สร้าง instance ของ Components
frame = {"name":"frame", "quantity":1,"level":1}


cmpt_frame = Component(frame)


# # สร้าง instance ของ Product
# bike = Product(product_id="B001", name="Mountain Bike", category="Bicycle")

# # เพิ่ม components ลงใน Product
# bike.add_component(frame)
# bike.add_component(wheel)
# bike.add_component(handlebar)
# bike.add_component(seat)

# # ลบ component
# bike.remove_component("seat")

# # แสดง BOM
# print(bike.display_bom())

# bom_bike = bike.display_bom()['components']
# print(bom_bike)

# แสดงรายละเอียดของ Product
# print(bike)
