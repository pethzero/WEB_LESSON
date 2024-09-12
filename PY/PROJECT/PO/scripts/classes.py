import os
import json
from typing import List

class Customer:
    def __init__(self, customer_id=None, name='', email=''):
        self.customer_id = customer_id
        self.name = name
        self.email = email

    def to_dict(self):
        return {
            "customer_id": self.customer_id,
            "name": self.name,
            "email": self.email
        }
    
    @classmethod
    def from_dict(cls, data):
        return cls(
            customer_id=data.get("customer_id"),
            name=data.get("name"),
            email=data.get("email")
        )

class CustomerManager:
    def __init__(self, file_path):
        self.file_path = file_path
        self.ensure_directory_exists()
        self.customers = self.load_customers()

    def ensure_directory_exists(self):
        directory = os.path.dirname(self.file_path)
        if not os.path.exists(directory):
            os.makedirs(directory)

    def load_customers(self) -> List[Customer]:
        try:
            with open(self.file_path, 'r') as file:
                data = json.load(file)
                return [Customer.from_dict(item) for item in data]
        except FileNotFoundError:
            return []
        except json.JSONDecodeError:
            return []

    def save_customers(self):
        with open(self.file_path, 'w') as file:
            json.dump([customer.to_dict() for customer in self.customers], file, indent=4)

    def read_customers(self) -> List[Customer]:
        return self.customers

    def customer_exists(self, customer_id):
        return any(customer.customer_id == customer_id for customer in self.customers)

    def add_customer(self, customer):
        if not self.customer_exists(customer.customer_id):
            self.customers.append(customer)
            self.save_customers()
            return True
        return False

    def edit_customer(self, customer_id, name=None, email=None):
        for customer in self.customers:
            if customer.customer_id == customer_id:
                if name:
                    customer.name = name
                if email:
                    customer.email = email
                self.save_customers()
                return True
        return False

    def delete_customer(self, customer_id):
        updated_customers = [customer for customer in self.customers if customer.customer_id != customer_id]
        
        if len(updated_customers) < len(self.customers):
            self.customers = updated_customers
            self.save_customers()
            return True
        return False

class Product:
    def __init__(self, product_id=None, name='', price=0.0, stock=0):
        self.product_id = product_id
        self.name = name
        self.price = price
        self.stock = stock

    def to_dict(self):
        return {
            "product_id": self.product_id,
            "name": self.name,
            "price": self.price,
            "stock": self.stock
        }
    
    @classmethod
    def from_dict(cls, data):
        return cls(
            product_id=data.get("product_id"),
            name=data.get("name"),
            price=data.get("price"),
            stock=data.get("stock")
        )

class ProductManager:
    def __init__(self, file_path):
        self.file_path = file_path
        self.ensure_directory_exists()
        self.products = self.load_products()

    def ensure_directory_exists(self):
        directory = os.path.dirname(self.file_path)
        if not os.path.exists(directory):
            os.makedirs(directory)

    def load_products(self) -> List[Product]:
        try:
            with open(self.file_path, 'r') as file:
                data = json.load(file)
                return [Product.from_dict(item) for item in data]
        except FileNotFoundError:
            return []
        except json.JSONDecodeError:
            return []

    def save_products(self):
        with open(self.file_path, 'w') as file:
            json.dump([product.to_dict() for product in self.products], file, indent=4)

    def read_products(self) -> List[Product]:
        return self.products

    def product_exists(self, product_id):
        return any(product.product_id == product_id for product in self.products)

    def add_product(self, product):
        if not self.product_exists(product.product_id):
            self.products.append(product)
            self.save_products()
            return True
        return False

    def edit_product(self, product_id, name=None, price=None, stock=None):
        for product in self.products:
            if product.product_id == product_id:
                if name:
                    product.name = name
                if price is not None:
                    product.price = price
                if stock is not None:
                    product.stock = stock
                self.save_products()
                return True
        return False

    def delete_product(self, product_id):
        updated_products = [product for product in self.products if product.product_id != product_id]
        
        if len(updated_products) < len(self.products):
            self.products = updated_products
            self.save_products()
            return True
        return False
