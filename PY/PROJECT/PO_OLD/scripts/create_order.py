# scripts/create_order.py

import json
from main import Order, Product, Customer, save_to_file

def create_order(customers, products):
    order_id = input("Enter order ID: ")
    customer_id = input("Enter customer ID: ")

    customer = next((c for c in customers if c['customer_id'] == customer_id), None)
    if not customer:
        print(f"Customer ID {customer_id} not found.")
        return

    order = Order(order_id, Customer(**customer))
    while True:
        product_id = input("Enter product ID (or 'done' to finish): ")
        if product_id == 'done':
            break
        product = next((p for p in products if p['product_id'] == product_id), None)
        if not product:
            print(f"Product ID {product_id} not found.")
            continue
        quantity = int(input(f"Enter quantity for {product['name']}: "))
        order.add_item(Product(**product), quantity)

    return order

if __name__ == "__main__":
    with open('../data/customers.json', 'r') as f:
        customers = json.load(f)
    with open('../data/products.json', 'r') as f:
        products = json.load(f)
    
    order = create_order(customers, products)
    
    if order:
        with open('../data/orders.json', 'r') as f:
            orders = json.load(f)
        
        orders.append(order.to_dict())
        save_to_file(orders, '../data/orders.json')
