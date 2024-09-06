# scripts/main.py

import json

class Product:
    def __init__(self, product_id, name, description, price, stock_quantity):
        self.product_id = product_id
        self.name = name
        self.description = description
        self.price = price
        self.stock_quantity = stock_quantity

    def update_stock(self, quantity):
        self.stock_quantity += quantity

    def to_dict(self):
        return self.__dict__

class Customer:
    def __init__(self, customer_id, name, contact_number, email, address):
        self.customer_id = customer_id
        self.name = name
        self.contact_number = contact_number
        self.email = email
        self.address = address

    def to_dict(self):
        return self.__dict__

class Order:
    def __init__(self, order_id, customer, items=[]):
        self.order_id = order_id
        self.customer = customer
        self.items = items

    def add_item(self, product, quantity):
        total_price = product.price * quantity
        self.items.append({
            'product_id': product.product_id,
            'quantity': quantity,
            'total_price': total_price
        })
        product.update_stock(-quantity)

    def to_dict(self):
        return {
            'order_id': self.order_id,
            'customer_id': self.customer.customer_id,
            'items': self.items
        }

def save_to_file(data, filename):
    with open(filename, 'w') as f:
        json.dump(data, f, indent=4)
