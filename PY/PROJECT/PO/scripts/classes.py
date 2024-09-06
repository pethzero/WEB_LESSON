# import json
# import os
# from typing import List

# class Customer:
#     def __init__(self, customer_id=None, name='', email=''):
#         self.customer_id = customer_id
#         self.name = name
#         self.email = email

#     def to_dict(self):
#         return {
#             "customer_id": self.customer_id,
#             "name": self.name,
#             "email": self.email
#         }
    
#     @classmethod
#     def from_dict(cls, data):
#         return cls(
#             customer_id=data.get("customer_id"),
#             name=data.get("name"),
#             email=data.get("email")
#         )

# class CustomerManager:
#     def __init__(self, file_path):
#         # Resolve the path relative to the project root
#         project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
#         self.file_path = os.path.join(project_root, file_path)
#         self.ensure_directory_exists()
#         self.customers = self.load_customers()

#     def ensure_directory_exists(self):
#         directory = os.path.dirname(self.file_path)
#         if not os.path.exists(directory):
#             os.makedirs(directory)

#     def load_customers(self) -> List[Customer]:
#         try:
#             with open(self.file_path, 'r') as file:
#                 data = json.load(file)
#                 customers = [Customer.from_dict(item) for item in data]
#                 return self.merge_customers(customers)
#         except FileNotFoundError:
#             return []
#         except json.JSONDecodeError:
#             return []

#     def save_customers(self):
#         with open(self.file_path, 'w') as file:
#             json.dump([customer.to_dict() for customer in self.customers], file, indent=4)

#     def read_customers(self) -> List[Customer]:
#         return self.customers

#     def customer_exists(self, customer_id):
#         return any(customer.customer_id == customer_id for customer in self.customers)

#     # def add_customer(self, customer):
#     #     if self.customer_exists(customer.customer_id):
#     #         return False  # ลูกค้าที่มี ID นี้อยู่แล้ว
#     #     self.customers.append(customer)
#     #     self.save_customers()
#     #     return True
    
#     def add_customer(self, customer):
#         # if self.customer_exists(customer.customer_id):
#             # return False  # ลูกค้าที่มี ID นี้อยู่แล้ว
#         self.customers.append(customer)
#         self.save_customers()
#         return print("Customer added.")

#     # def edit_customer(self, customer_id, name=None, email=None):
#     #     if not self.customer_exists(customer_id):
#     #         return False  # ลูกค้าไม่พบ

#     #     for customer in self.customers:
#     #         if customer.customer_id == customer_id:
#     #             if name:
#     #                 customer.name = name
#     #             if email:
#     #                 customer.email = email
#     #             self.save_customers()
#     #             return True

#     #     return False.
#     def edit_customer(self, customer_id, name=None, email=None):
#         # if not self.customer_exists(customer_id):
#         #     return False  # ลูกค้าไม่พบ
#         for customer in self.customers:
#             if customer.customer_id == customer_id:
#                 if name:
#                     customer.name = name
#                 if email:
#                     customer.email = email
#                 self.save_customers()

#         return print("Customer updated.")

#     # def delete_customer(self, customer_id):
#     #     self.customers = [customer for customer in self.customers if customer.customer_id != customer_id]
#     #     self.save_customers()
#     def delete_customer(self, customer_id):
#         # เก็บรายการลูกค้าใหม่ที่ไม่มี customer_id ที่ต้องการลบ
#         updated_customers = [customer for customer in self.customers if customer.customer_id != customer_id]
        
#         # ตรวจสอบว่ามีการลบลูกค้าออกหรือไม่
#         if len(updated_customers) < len(self.customers):
#             self.customers = updated_customers
#             self.save_customers()
#             return True

#     def merge_customers(self, customers: List[Customer]) -> List[Customer]:
#         customer_dict = {}
#         for customer in customers:
#             if customer.customer_id not in customer_dict:
#                 customer_dict[customer.customer_id] = customer
#             else:
#                 existing = customer_dict[customer.customer_id]
#                 if customer.name:
#                     existing.name = customer.name
#                 if customer.email:
#                     existing.email = customer.email
#         return list(customer_dict.values())

import json
import os
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
        # Resolve the path relative to the project root
        project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        self.file_path = os.path.join(project_root, file_path)
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
                customers = [Customer.from_dict(item) for item in data]
                return self.merge_customers(customers)
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

    def merge_customers(self, customers: List[Customer]) -> List[Customer]:
        customer_dict = {}
        for customer in customers:
            if customer.customer_id not in customer_dict:
                customer_dict[customer.customer_id] = customer
            else:
                existing = customer_dict[customer.customer_id]
                if customer.name:
                    existing.name = customer.name
                if customer.email:
                    existing.email = customer.email
        return list(customer_dict.values())
