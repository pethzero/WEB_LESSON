import json
import os

DATA_DIR = os.path.join(os.path.dirname(__file__), '..', 'data')

def load_data(file_name):
    try:
        with open(os.path.join(DATA_DIR, file_name), 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        return []

def show_products():
    products = load_data('products.json')
    if not products:
        print("ไม่มีสินค้าในระบบ")
    for product in products:
        print(f"ID: {product['product_id']}, ชื่อ: {product['name']}, ราคา: {product['price']}, คงคลัง: {product['stock_quantity']}")

def show_customers():
    customers = load_data('customers.json')
    if not customers:
        print("ไม่มีลูกค้าในระบบ")
    for customer in customers:
        print(f"ID: {customer['customer_id']}, ชื่อ: {customer['name']}, อีเมล: {customer['email']}")

def show_orders():
    orders = load_data('orders.json')
    if not orders:
        print("ไม่มีคำสั่งซื้อในระบบ")
    for order in orders:
        print(f"Order ID: {order['order_id']}, ลูกค้า: {order['customer_id']}, วันที่สั่ง: {order['order_date']}, ยอดรวม: {order['total_amount']}")

if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1:
        command = sys.argv[1]
        if command == "show_products":
            show_products()
        elif command == "show_customers":
            show_customers()
        elif command == "show_orders":
            show_orders()
