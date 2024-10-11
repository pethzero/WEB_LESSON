# app/component.py

class Component:
    def __init__(self, name, quantity=1, level=1, product_id=None):
        self.name = name
        self.quantity = quantity
        self.level = level
        self.product_id = product_id

    @classmethod
    def from_dict(cls, data):
        return cls(
            product_id=data.get("product_id"),
            name=data.get("name"),
            quantity=data.get("quantity"),
            level=data.get("level", 1),  # ตั้งค่า default ถ้าไม่เจอ key 'level'
        )

    def __str__(self):
        return f"Component(name={self.name}, quantity={self.quantity}, level={self.level}, product_id={self.product_id})"
