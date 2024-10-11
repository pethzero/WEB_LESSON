# main.py
from app.product import Product
from app.bom import BOMItem
from app.assembly import AssemblyItem

def create_bicycle_product():
    # สร้างผลิตภัณฑ์จักรยาน
    bicycle = Product("Bicycle", "Mountain Bike", "A high-quality mountain bike.")

    # แสดงข้อมูลผลิตภัณฑ์ในรูปแบบ JSON
    print("Product in JSON format:")
    print(bicycle.to_json())

    # บันทึกผลิตภัณฑ์ลงในไฟล์ JSON ในโฟลเดอร์ json/
    bicycle.save_to_json(folder_path="json", filename="bicycle_product.json")

def create_bicycle_bom():
    # สร้าง BOM ของจักรยาน
    bicycle_bom = BOMItem("Bicycle", 1)

    # สร้างโครงของจักรยาน
    frame = BOMItem("Frame", 1)
    frame.add_child(BOMItem("Steel Tubes", 3))
    frame.add_child(BOMItem("Welding Rods", 10))

    # สร้างล้อ
    wheels = BOMItem("Wheels", 2)
    wheels.add_child(BOMItem("Rim", 1))
    wheels.add_child(BOMItem("Spokes", 20))

    # เพิ่มชิ้นส่วนอื่น ๆ
    seat = BOMItem("Seat", 1)

    # ประกอบจักรยาน
    bicycle_bom.add_child(frame)
    bicycle_bom.add_child(wheels)
    bicycle_bom.add_child(seat)

    # แสดง BOM ในรูปแบบ JSON
    print("\nBOM in JSON format:")
    print(bicycle_bom.to_json())

    # บันทึก BOM ลงในไฟล์ JSON ในโฟลเดอร์ json/
    bicycle_bom.save_to_json(folder_path="json", filename="bicycle_bom.json")

def create_bicycle_assembly():
    # สร้างข้อมูล assembly ของจักรยาน
    steps = ["Attach frame", "Install wheels", "Add seat"]
    bicycle_assembly = AssemblyItem("Bicycle Assembly", 1, steps)

    # แสดง assembly ในรูปแบบ JSON
    print("\nAssembly Process in JSON format:")
    print(bicycle_assembly.to_json())

    # บันทึก assembly ลงในไฟล์ JSON ในโฟลเดอร์ json/
    bicycle_assembly.save_to_json(folder_path="json", filename="bicycle_assembly.json")

if __name__ == "__main__":
    create_bicycle_product()
    create_bicycle_bom()
    # create_bicycle_assembly()
