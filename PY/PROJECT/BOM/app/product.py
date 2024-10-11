# app/product.py
from app.component import Component

class Product:
    def __init__(self, product_id, name, category):
        self.product_id = product_id
        self.name = name
        self.category = category
        self.components = []  # รายการของ Component

    def add_component(self, component):
        if isinstance(component, Component):
            self.components.append(component)
        else:
            raise ValueError("Invalid component. Must be an instance of Component.")

    def remove_component(self, component_name):
        self.components = [comp for comp in self.components if comp.name != component_name]

    def display_bom(self):
        return {
            "product_id": self.product_id,
            "name": self.name,
            "category": self.category,
            "components": [{"name": comp.name, "quantity": comp.quantity} for comp in self.components]
        }

    def __str__(self):
        components_str = ', '.join(str(comp) for comp in self.components)
        return f"Product(product_id={self.product_id}, name={self.name}, category={self.category}, components=[{components_str}])"
