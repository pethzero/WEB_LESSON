# app/assembly.py
from base import ItemBase

class AssemblyItem(ItemBase):
    def __init__(self, item_id, quantity, assembly_steps):
        super().__init__(item_id, quantity)
        self.assembly_steps = assembly_steps

    def display_assembly(self):
        print(f"Assembly ID: {self.item_id}, Quantity: {self.quantity}")
        print("Assembly Steps:")
        for step in self.assembly_steps:
            print(f"- {step}")

    def to_dict(self):
        """แปลง Assembly เป็น dictionary รวมถึง steps"""
        return {
            'item_id': self.item_id,
            'quantity': self.quantity,
            'assembly_steps': self.assembly_steps
        }
