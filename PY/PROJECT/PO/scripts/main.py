# from classes import Customer, CustomerManager

# def print_menu():
#     print("==== Online Store ====")
#     print("1. Manage Customer")
#     print("2. Exit")

# def manage_customer(manager: CustomerManager):
#     while True:
#         print("\nCustomer Management:")
#         print("1. Read Customers")
#         print("2. Add Customer")
#         print("3. Edit Customer")
#         print("4. Delete Customer")
#         print("5. Back to Main Menu")

#         choice = input("Enter your choice: ")

#         if choice == '1':
#             customers = manager.read_customers()
#             if customers:
#                 for customer in customers:
#                     print(customer.to_dict())
#             else:
#                 print("No customers found.")

#         elif choice == '2':
#             customer_id = input("Enter customer ID: ")
#             if not manager.customer_exists(customer_id):
#                 name = input("Enter name: ")
#                 email = input("Enter email: ")
#                 customer = Customer(customer_id, name, email)
#                 manager.add_customer(customer)
#                 # print("Customer added.")
#             else:
#                 print("Customer ID already exists.")
            

#         elif choice == '3':
#             customer_id = input("Enter customer ID to edit: ")
#             if  manager.customer_exists(customer_id):
#                 name = input("Enter name: ")
#                 email = input("Enter email: ")
#                 # customer = Customer(customer_id, name, email)
#                 manager.edit_customer(customer_id, name, email)
#                 # print("Customer updated.")
#             else:
#                 print("Customer not found.")
#             # name = input("Enter new name (leave empty to keep current): ")
#             # email = input("Enter new email (leave empty to keep current): ")
#             # if manager.edit_customer(customer_id, name, email):
#             #     print("Customer updated.")
#             # else:
#             #     print("Customer not found.")

#         elif choice == '4':
#             customer_id = input("Enter customer ID to delete: ")
#             if manager.delete_customer(customer_id):
#                 print("Customer deleted.")
#             else:
#                 print("Customer not found.")

#         elif choice == '5':
#             break

#         else:
#             print("Invalid choice. Please try again.")

# def main():
#     file_path = 'data/customers.json'  # Path relative to the project root
#     manager = CustomerManager(file_path)

#     while True:
#         print_menu()
#         choice = input("Enter your choice: ")

#         if choice == '1':
#             manage_customer(manager)
#         elif choice == '2':
#             break
#         else:
#             print("Invalid choice. Please try again.")

# if __name__ == "__main__":
#     main()

from classes import Customer, CustomerManager

def print_menu():
    print("==== Online Store ====")
    print("1. Manage Customer")
    print("2. Exit")

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

def main():
    file_path = 'data/customers.json'  # Path relative to the project root
    manager = CustomerManager(file_path)

    while True:
        print_menu()
        choice = input("Enter your choice: ")

        if choice == '1':
            manage_customer(manager)
        elif choice == '2':
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
