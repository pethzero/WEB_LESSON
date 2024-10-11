# app/product.py
from base import ItemBase

class Product(ItemBase):
    def __init__(self, product_id, name, description=None):
        super().__init__(product_id, 1)  # Quantity default to 1 for a single product
        self.name = name
        self.description = description

    def to_dict(self):
        """แปลง Product เป็น dictionary รวมถึง name และ description"""
        return {
            'item_id': self.item_id,
            'name': self.name,
            'description': self.description
        }
