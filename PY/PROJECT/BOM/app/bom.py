# app/bom.py

class BOM:
    def __init__(self, name, level, quantity=1, children=None):
        self.name = name
        self.level = level
        self.quantity = quantity
        self.children = children if children is not None else []

    def add_child(self, child_bom):
        if isinstance(child_bom, BOM):
            self.children.append(child_bom)
        else:
            raise ValueError("Invalid child. Must be an instance of BOM.")

    def remove_child(self, child_name):
        self.children = [child for child in self.children if child.name != child_name]

    def display_bom(self, indent=0):
        indent_str = '  ' * indent
        bom_structure = f"{indent_str}Component(name={self.name}, quantity={self.quantity})\n"
        for child in self.children:
            bom_structure += child.display_bom(indent + 1)
        return bom_structure

    def __str__(self):
        return self.display_bom()