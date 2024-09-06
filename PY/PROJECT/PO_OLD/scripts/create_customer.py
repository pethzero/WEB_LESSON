import json
import os

# Path to the JSON file
products_file = os.path.join(os.path.dirname(__file__), '../data/products.json')

# Create an empty list if the file doesn't exist
if not os.path.exists(products_file):
    with open(products_file, 'w') as f:
        json.dump([], f)

# Load existing products
with open(products_file, 'r') as f:
    products = json.load(f)

# Gather product information from the user
product = {}
product['id'] = input("Enter product ID: ")
product['name'] = input("Enter product name: ")
product['description'] = input("Enter product description: ")
product['price'] = input("Enter product price: ")
product['quantity'] = input("Enter stock quantity: ")

# Add the new product to the list
products.append(product)

# Save the updated product list back to the file
with open(products_file, 'w') as f:
    json.dump(products, f, indent=4)

print("Product saved successfully!")
