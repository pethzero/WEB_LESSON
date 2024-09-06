# scripts/classes.py

class Product:
    def __init__(self, product_id, name, description, price, stock_quantity, category, supplier):
        self.product_id = product_id
        self.name = name
        self.description = description
        self.price = price
        self.stock_quantity = stock_quantity
        self.category = category
        self.supplier = supplier

    def update_stock(self, quantity):
        self.stock_quantity += quantity
        print(f"Updated stock for {self.name}: {self.stock_quantity}")

    def __repr__(self):
        return f"Product({self.product_id}, {self.name}, {self.price})"

class Customer:
    def __init__(self, customer_id, name, contact_number, email, address, registration_date):
        self.customer_id = customer_id
        self.name = name
        self.contact_number = contact_number
        self.email = email
        self.address = address
        self.registration_date = registration_date

    def __repr__(self):
        return f"Customer({self.customer_id}, {self.name})"

class PurchaseOrder:
    def __init__(self, order_id, customer, order_date, delivery_date, total_amount, status):
        self.order_id = order_id
        self.customer = customer
        self.order_date = order_date
        self.delivery_date = delivery_date
        self.total_amount = total_amount
        self.status = status
        self.items = []

    def add_item(self, product, quantity, unit_price):
        total_price = quantity * unit_price
        self.items.append({
            'product': product,
            'quantity': quantity,
            'unit_price': unit_price,
            'total_price': total_price
        })
        self.total_amount += total_price
        print(f"Added {quantity} of {product.name} to order {self.order_id}")

    def __repr__(self):
        return f"PurchaseOrder({self.order_id}, {self.customer.name}, {self.total_amount})"

class Payment:
    def __init__(self, payment_id, order, payment_date, amount, payment_method):
        self.payment_id = payment_id
        self.order = order
        self.payment_date = payment_date
        self.amount = amount
        self.payment_method = payment_method

    def __repr__(self):
        return f"Payment({self.payment_id}, {self.amount})"

class Store:
    def __init__(self):
        self.products = {}
        self.customers = {}
        self.orders = {}
        self.payments = {}

    def add_product(self, product):
        self.products[product.product_id] = product

    def add_customer(self, customer):
        self.customers[customer.customer_id] = customer

    def create_order(self, order_id, customer_id, order_date, delivery_date):
        customer = self.customers.get(customer_id)
        if not customer:
            print("Customer not found!")
            return
        order = PurchaseOrder(order_id, customer, order_date, delivery_date, 0, 'Processing')
        self.orders[order_id] = order
        return order

    def add_payment(self, payment):
        self.payments[payment.payment_id] = payment

    def __repr__(self):
        return f"Store({len(self.products)} products, {len(self.orders)} orders)"
