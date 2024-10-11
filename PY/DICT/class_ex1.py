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

# สร้างวัตถุจาก class Product
product_1 = Product(product_id=101, name="Laptop", price=1500.0, stock=10)
print(f"Product 1 - name: {product_1.name}, price: {product_1.price}")

# แปลงวัตถุเป็น dictionary ด้วย to_dict method
product_dict = product_1.to_dict()
print(f"Product 1 as dictionary: {product_dict}")
# Output:
# Product 1 as dictionary: {'product_id': 101, 'name': 'Laptop', 'price': 1500.0, 'stock': 10}

# สร้างวัตถุใหม่จาก dictionary ด้วย from_dict method
product_data = {
    "product_id": 102,
    "name": "Smartphone",
    "price": 800.0,
    "stock": 25
}
product_2 = Product.from_dict(product_data)
print(f"Product 2 - name: {product_2.name}, price: {product_2.price}")
# Output:
# Product 2 - name: Smartphone, price: 800.0
