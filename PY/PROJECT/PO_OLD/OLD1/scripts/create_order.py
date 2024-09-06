import json
import os

DATA_DIR = os.path.join(os.path.dirname(__file__), '..', 'data')

def load_data(file_name):
    try:
        with open(os.path.join(DATA_DIR, file_name), 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        return []

def save_data(file_name, data):
    with open(os.path.join(DATA_DIR, file_name), 'w') as file:
        json.dump(data, file, indent=4)

def create_product():
    products = load_data('products.json')
    
    product_id = input("กรุณาใส่รหัสสินค้า: ")
    name = input("ชื่อสินค้า: ")
    description = input("รายละเอียดสินค้า: ")
    price = float(input("ราคาสินค้า: "))
    stock_quantity = int(input("จำนวนคงคลัง: "))
    category = input("หมวดหมู่สินค้า: ")
    supplier = input("ผู้จำหน่าย: ")
    
    product = {
        'product_id': product_id,
        'name': name,
        'description': description,
        'price': price,
        'stock_quantity': stock_quantity,
        'category': category,
        'supplier': supplier
    }
    
    products.append(product)
    save_data('products.json', products)
    print("เพิ่มสินค้าสำเร็จแล้ว!")

if __name__ == "__main__":
    create_product()
