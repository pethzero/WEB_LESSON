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

def create_customer():
    customers = load_data('customers.json')
    
    customer_id = input("กรุณาใส่รหัสลูกค้า: ")
    name = input("ชื่อลูกค้า: ")
    contact_number = input("เบอร์โทรติดต่อ: ")
    email = input("อีเมล: ")
    address = input("ที่อยู่: ")
    
    customer = {
        'customer_id': customer_id,
        'name': name,
        'contact_number': contact_number,
        'email': email,
        'address': address,
        'registration_date': input("วันที่ลงทะเบียน (YYYY-MM-DD): ")
    }
    
    customers.append(customer)
    save_data('customers.json', customers)
    print("เพิ่มลูกค้าสำเร็จแล้ว!")

if __name__ == "__main__":
    create_customer()
