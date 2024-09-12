from scripts.classes import Customer, CustomerManager, Product, ProductManager
import os

def print_menu():
    print("==== Online Store ====")
    print("1. Manage Customer")
    print("2. Manage Products")
    print("0. Exit")

def manage_customer(manager: CustomerManager):
    while True:
        print("\nCustomer Management:")
        print("1. Read Customers")
        print("2. Add Customer")
        print("3. Edit Customer")
        print("4. Delete Customer")
        print("5. Back to Main Menu")

        choice = input("Enter your choice: ")

        if choice == '1':
            customers = manager.read_customers()
            if customers:
                for customer in customers:
                    print(customer.to_dict())
            else:
                print("No customers found.")

        elif choice == '2':
            customer_id = input("Enter customer ID: ")
            if not manager.customer_exists(customer_id):
                name = input("Enter name: ")
                email = input("Enter email: ")
                customer = Customer(customer_id, name, email)
                if manager.add_customer(customer):
                    print("Customer added.")
                else:
                    print("Failed to add customer.")
            else:
                print("Customer ID already exists.")

        elif choice == '3':
            customer_id = input("Enter customer ID to edit: ")
            if manager.customer_exists(customer_id):
                name = input("Enter new name (leave empty to keep current): ")
                email = input("Enter new email (leave empty to keep current): ")
                if manager.edit_customer(customer_id, name, email):
                    print("Customer updated.")
                else:
                    print("Failed to update customer.")
            else:
                print("Customer not found.")

        elif choice == '4':
            customer_id = input("Enter customer ID to delete: ")
            if manager.delete_customer(customer_id):
                print("Customer deleted.")
            else:
                print("Customer not found.")

        elif choice == '5':
            break

        else:
            print("Invalid choice. Please try again.")

def manage_products(manager: ProductManager):
    while True:
        print("\nProduct Management:")
        print("1. View Products")
        print("2. Add Product")
        print("3. Edit Product")
        print("4. Delete Product")
        print("5. Back to Main Menu")

        choice = input("Enter your choice: ")

        if choice == '1':
            products = manager.read_products()
            if products:
                for product in products:
                    print(product.to_dict())
            else:
                print("No products found.")

        elif choice == '2':
            product_id = input("Enter product ID: ")
            if not manager.product_exists(product_id):
                name = input("Enter product name: ")
                try:
                    price = float(input("Enter product price: "))
                except ValueError:
                    print("Invalid price. Please enter a valid number.")
                    continue
                
                try:
                    stock = int(input("Enter stock quantity: "))
                except ValueError:
                    print("Invalid stock quantity. Please enter a valid number.")
                    continue
                
                product = Product(product_id, name, price, stock)
                if manager.add_product(product):
                    print("Product added.")
                else:
                    print("Failed to add product.")
            else:
                print("Product ID already exists.")

        elif choice == '3':
            product_id = input("Enter product ID to edit: ")
            if manager.product_exists(product_id):
                name = input("Enter new name (leave empty to keep current): ")
                
                price = input("Enter new price (leave empty to keep current): ")
                if price:
                    try:
                        price = float(price)
                    except ValueError:
                        print("Invalid price. Keeping current price.")
                        price = None
                else:
                    price = None

                stock = input("Enter new stock quantity (leave empty to keep current): ")
                if stock:
                    try:
                        stock = int(stock)
                    except ValueError:
                        print("Invalid stock quantity. Keeping current stock.")
                        stock = None
                else:
                    stock = None

                if manager.edit_product(product_id, name, price, stock):
                    print("Product updated.")
                else:
                    print("Failed to update product.")
            else:
                print("Product not found.")

        elif choice == '4':
            product_id = input("Enter product ID to delete: ")
            if manager.delete_product(product_id):
                print("Product deleted.")
            else:
                print("Product not found.")

        elif choice == '5':
            break

        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    customer_file_path = os.path.join("data", "customers.json")
    product_file_path = os.path.join("data", "products.json")
    
    customer_manager = CustomerManager(customer_file_path)
    product_manager = ProductManager(product_file_path)

    while True:
        print_menu()
        choice = input("Enter your choice: ")

        if choice == '1':
            manage_customer(customer_manager)
        elif choice == '2':
            manage_products(product_manager)
        elif choice == '0':
            break
        else:
            print("Invalid choice. Please try again.")
