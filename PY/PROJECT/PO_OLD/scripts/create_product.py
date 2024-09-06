import os
import json
from main import Product, save_to_file

def create_product():
    product_id = input("Enter product ID: ")
    name = input("Enter product name: ")
    description = input("Enter product description: ")
    price = float(input("Enter product price: "))
    stock_quantity = int(input("Enter stock quantity: "))

    product = Product(product_id, name, description, price, stock_quantity)
    return product

if __name__ == "__main__":
    # ตรวจสอบว่าโฟลเดอร์ data/ มีอยู่หรือไม่ ถ้าไม่มีก็สร้างใหม่
    data_dir = '../data'
    if not os.path.exists(data_dir):
        os.makedirs(data_dir)
    
    products_file = os.path.join(data_dir, 'products.json')
    
    # ตรวจสอบว่าไฟล์ products.json มีอยู่หรือไม่ ถ้าไม่มีก็สร้างใหม่
    if not os.path.exists(products_file):
        with open(products_file, 'w') as f:
            json.dump([], f)

    product = create_product()
    
    with open(products_file, 'r') as f:
        products = json.load(f)
    
    products.append(product.to_dict())
    save_to_file(products, products_file)
