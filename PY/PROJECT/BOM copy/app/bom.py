# app/bom.py
from base import ItemBase

class BOMItem(ItemBase):
    def __init__(self, item_id, quantity, children=None):
        super().__init__(item_id, quantity)
        self.children = children if children is not None else []

    def add_child(self, child):
        self.children.append(child)

    def display_bom(self, indent=0):
        print(f"{'  ' * indent}Item: {self.item_id}, Quantity: {self.quantity}")
        for child in self.children:
            child.display_bom(indent + 1)

    def to_dict(self):
        """แปลง BOM เป็น dictionary รวมถึง children"""
        return {
            'item_id': self.item_id,
            'quantity': self.quantity,
            'children': [child.to_dict() for child in self.children]
        }
