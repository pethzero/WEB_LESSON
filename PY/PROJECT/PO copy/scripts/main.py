import json
import os
from classes import Product, Customer, PurchaseOrder, Payment, Store

# สร้าง object ร้านค้า
store = Store()

# ฟังก์ชันสำหรับบันทึกข้อมูลไปยังไฟล์ JSON
def save_to_json(filename, data):
    base_dir = os.path.dirname(os.path.abspath(__file__))
    file_path = os.path.join(base_dir, '..', 'data', filename)

    # Ensure the directory exists
    os.makedirs(os.path.dirname(file_path), exist_ok=True)

    # Convert the data to a serializable format
    serializable_data = {
        k: v.__dict__ if hasattr(v, '__dict__') else v
        for k, v in data.items()
    }
    
    try:
        with open(file_path, 'w') as f:
            json.dump(serializable_data, f, indent=4)
    except IOError as e:
        print(f"Error saving data to file '{filename}': {e}")


# ฟังก์ชันสำหรับโหลดข้อมูลจากไฟล์ JSON
def load_from_json(filename):
    base_dir = os.path.dirname(os.path.abspath(__file__))
    file_path = os.path.join(base_dir, '..', 'data', filename)

    if os.path.exists(file_path) and os.path.getsize(file_path) > 0:
        try:
            with open(file_path, 'r') as f:
                return json.load(f)
        except json.JSONDecodeError:
            print(f"Warning: File '{filename}' is not a valid JSON or is empty.")
    return {}


# โหลดข้อมูลเก่า
store.products = load_from_json('products.json')
store.customers = load_from_json('customers.json')
store.orders = load_from_json('orders.json')
store.payments = load_from_json('payments.json')

# แสดงเมนูให้ผู้ใช้เลือก
def main_menu():
    while True:
        print("\n==== Online Store ====\n")
        print("1. Create New Product")
        print("2. Create New Customer")
        print("3. Create New Order")
        print("4. Exit Program")
        choice = input("\nPlease choose an option (1-4): ")

        if choice == '1':
            create_new_product()
        elif choice == '2':
            create_new_customer()
        elif choice == '3':
            create_new_order()
        elif choice == '4':
            save_and_exit()
        else:
            print("Invalid choice. Please choose again.")

# สร้างสินค้าใหม่
def create_new_product():
    product_id = input("Enter product ID: ")
    name = input("Enter product name: ")
    description = input("Enter product description: ")
    price = float(input("Enter product price: "))
    stock_quantity = int(input("Enter stock quantity: "))
    category = input("Enter product category: ")
    supplier = input("Enter supplier name: ")

    product = Product(product_id, name, description, price, stock_quantity, category, supplier)
    store.add_product(product)
    save_to_json('products.json', store.products)

    print(f"Product '{name}' created successfully!")

# สร้างลูกค้าใหม่
def create_new_customer():
    customer_id = input("Enter customer ID: ")
    name = input("Enter customer name: ")
    contact_number = input("Enter contact number: ")
    email = input("Enter email: ")
    address = input("Enter address: ")
    registration_date = input("Enter registration date: ")

    customer = Customer(customer_id, name, contact_number, email, address, registration_date)
    store.add_customer(customer)
    save_to_json('customers.json', store.customers)

    print(f"Customer '{name}' created successfully!")

# สร้างคำสั่งซื้อใหม่
def create_new_order():
    order_id = input("Enter order ID: ")
    customer_id = input("Enter customer ID: ")
    order_date = input("Enter order date: ")
    delivery_date = input("Enter delivery date: ")

    order = store.create_order(order_id, customer_id, order_date, delivery_date)
    if order:
        while True:
            product_id = input("Enter product ID to add (or type 'done' to finish): ")
            if product_id.lower() == 'done':
                break
            product = store.products.get(product_id)
            if product:
                quantity = int(input(f"Enter quantity for {product.name}: "))
                order.add_item(product, quantity, product.price)
            else:
                print("Product not found.")

        save_to_json('orders.json', store.orders)
        print(f"Order '{order_id}' created successfully!")

# บันทึกข้อมูลและออกจากโปรแกรม
def save_and_exit():
    save_to_json('products.json', store.products)
    save_to_json('customers.json', store.customers)
    save_to_json('orders.json', store.orders)
    save_to_json('payments.json', store.payments)
    print("Data saved. Exiting program.")
    exit()

if __name__ == "__main__":
    main_menu()
