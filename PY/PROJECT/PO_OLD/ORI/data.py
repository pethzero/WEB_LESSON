# Sample data for a store managing PO and sales

# Product data
products = [
    {
        'product_id': 'P001',
        'name': 'Laptop',
        'description': '15-inch laptop with 8GB RAM',
        'price': 1200.00,
        'stock_quantity': 30,
        'category': 'Electronics',
        'supplier': 'Tech Supplier Inc.'
    },
    {
        'product_id': 'P002',
        'name': 'Smartphone',
        'description': 'Latest smartphone with 128GB storage',
        'price': 800.00,
        'stock_quantity': 50,
        'category': 'Electronics',
        'supplier': 'Gadget Co.'
    }
]

# Customer data
customers = [
    {
        'customer_id': 'C001',
        'name': 'Alice Johnson',
        'contact_number': '+1-555-6789',
        'email': 'alice.johnson@example.com',
        'address': '789 Maple Street, Anytown, TX',
        'registration_date': '2023-01-15'
    },
    {
        'customer_id': 'C002',
        'name': 'Bob Smith',
        'contact_number': '+1-555-2345',
        'email': 'bob.smith@example.com',
        'address': '456 Oak Avenue, Big City, CA',
        'registration_date': '2023-03-22'
    }
]

# Purchase Order (PO) data
purchase_orders = [
    {
        'order_id': 'O001',
        'customer_id': 'C001',
        'order_date': '2024-09-01',
        'delivery_date': '2024-09-05',
        'total_amount': 2000.00,
        'status': 'Processing'
    },
    {
        'order_id': 'O002',
        'customer_id': 'C002',
        'order_date': '2024-09-02',
        'delivery_date': '2024-09-06',
        'total_amount': 800.00,
        'status': 'Shipped'
    }
]

# Order items data
order_items = [
    {
        'order_id': 'O001',
        'product_id': 'P001',
        'quantity': 1,
        'unit_price': 1200.00,
        'total_price': 1200.00
    },
    {
        'order_id': 'O001',
        'product_id': 'P002',
        'quantity': 1,
        'unit_price': 800.00,
        'total_price': 800.00
    },
    {
        'order_id': 'O002',
        'product_id': 'P002',
        'quantity': 1,
        'unit_price': 800.00,
        'total_price': 800.00
    }
]

# Payment data
payments = [
    {
        'payment_id': 'P001',
        'order_id': 'O001',
        'payment_date': '2024-09-01',
        'amount': 2000.00,
        'payment_method': 'Credit Card'
    },
    {
        'payment_id': 'P002',
        'order_id': 'O002',
        'payment_date': '2024-09-02',
        'amount': 800.00,
        'payment_method': 'Bank Transfer'
    }
]

# สร้าง Class สำหรับสินค้า (Product)
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

#  สร้าง Class สำหรับลูกค้า (Customer)
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

# สร้าง Class สำหรับคำสั่งซื้อ (PurchaseOrder)
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

#  สร้าง Class สำหรับการชำระเงิน (Payment)
class Payment:
    def __init__(self, payment_id, order, payment_date, amount, payment_method):
        self.payment_id = payment_id
        self.order = order
        self.payment_date = payment_date
        self.amount = amount
        self.payment_method = payment_method

    def __repr__(self):
        return f"Payment({self.payment_id}, {self.amount})"
# สร้าง Class สำหรับการจัดการร้านค้า (Store)
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
# 

# สร้างสินค้าตัวอย่าง
laptop = Product('P001', 'Laptop', '15-inch laptop with 8GB RAM', 1200.00, 30, 'Electronics', 'Tech Supplier Inc.')
smartphone = Product('P002', 'Smartphone', 'Latest smartphone with 128GB storage', 800.00, 50, 'Electronics', 'Gadget Co.')

# สร้างลูกค้าตัวอย่าง
alice = Customer('C001', 'Alice Johnson', '+1-555-6789', 'alice.johnson@example.com', '789 Maple Street, Anytown, TX', '2023-01-15')
bob = Customer('C002', 'Bob Smith', '+1-555-2345', 'bob.smith@example.com', '456 Oak Avenue, Big City, CA', '2023-03-22')

# สร้างร้านค้า
store = Store()
store.add_product(laptop)
store.add_product(smartphone)
store.add_customer(alice)
store.add_customer(bob)

# สร้างคำสั่งซื้อ
order1 = store.create_order('O001', 'C001', '2024-09-01', '2024-09-05')
order1.add_item(laptop, 1, laptop.price)
order1.add_item(smartphone, 1, smartphone.price)

# สร้างการชำระเงิน
payment1 = Payment('P001', order1, '2024-09-01', order1.total_amount, 'Credit Card')
store.add_payment(payment1)

# แสดงผล
print(store)
print(order1)
print(payment1)
