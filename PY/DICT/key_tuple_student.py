# Sample student data with more details
data = [
    {
        'parent_id': 'P1',
        'child_id': 'C1',
        'name': 'John Doe',
        'age': 15,
        'date_of_birth': '2008-04-15',
        'gender': 'Male',
        'address': '123 Elm Street, Springfield, IL',
        'phone_number': '+1-555-1234',
        'email': 'john.doe@example.com',
        'grade': '10',
        'enrollment_date': '2023-08-15',
        'guardian_name': 'Emily Doe',
        'guardian_phone': '+1-555-5678',
        'guardian_relationship': 'Mother'
    },
    {
        'parent_id': 'P1',
        'child_id': 'C2',
        'name': 'Jane Smith',
        'age': 14,
        'date_of_birth': '2009-07-22',
        'gender': 'Female',
        'address': '123 Elm Street, Springfield, IL',
        'phone_number': '+1-555-1234',
        'email': 'jane.smith@example.com',
        'grade': '9',
        'enrollment_date': '2023-08-15',
        'guardian_name': 'Emily Doe',
        'guardian_phone': '+1-555-5678',
        'guardian_relationship': 'Mother'
    },
    {
        'parent_id': 'P2',
        'child_id': 'C3',
        'name': 'Alice Johnson',
        'age': 16,
        'date_of_birth': '2007-12-05',
        'gender': 'Female',
        'address': '456 Oak Street, Rivertown, TX',
        'phone_number': '+1-555-2345',
        'email': 'alice.johnson@example.com',
        'grade': '11',
        'enrollment_date': '2022-08-15',
        'guardian_name': 'Robert Johnson',
        'guardian_phone': '+1-555-6789',
        'guardian_relationship': 'Father'
    },
    {
        'parent_id': 'P2',
        'child_id': 'C4',
        'name': 'Bob Brown',
        'age': 17,
        'date_of_birth': '2006-11-30',
        'gender': 'Male',
        'address': '456 Oak Street, Rivertown, TX',
        'phone_number': '+1-555-2345',
        'email': 'bob.brown@example.com',
        'grade': '12',
        'enrollment_date': '2021-08-15',
        'guardian_name': 'Robert Johnson',
        'guardian_phone': '+1-555-6789',
        'guardian_relationship': 'Father'
    }
]

# Initialize the dictionary to store the organized data
result = {}

# Process the data
for item in data:
    parent_id = item['parent_id']
    child_id = item['child_id']
    
    # Create an entry for the parent_id if it doesn't exist
    if parent_id not in result:
        result[parent_id] = {}
    
    # Create an entry for the (parent_id, child_id) if it doesn't exist
    if (parent_id, child_id) not in result[parent_id]:
        result[parent_id][(parent_id, child_id)] = {
            'name': item['name'],
            'age': item['age'],
            'date_of_birth': item['date_of_birth'],
            'gender': item['gender'],
            'address': item['address'],
            'phone_number': item['phone_number'],
            'email': item['email'],
            'grade': item['grade'],
            'enrollment_date': item['enrollment_date'],
            'guardian_name': item['guardian_name'],
            'guardian_phone': item['guardian_phone'],
            'guardian_relationship': item['guardian_relationship']
        }

# Display the result
for parent_id, children in result.items():
    print(f"Parent ID: {parent_id}")
    for key, details in children.items():
        print(f"  Key: {key}")
        print(f"    Name: {details['name']}")
        print(f"    Age: {details['age']}")
        print(f"    Date of Birth: {details['date_of_birth']}")
        print(f"    Gender: {details['gender']}")
        print(f"    Address: {details['address']}")
        print(f"    Phone Number: {details['phone_number']}")
        print(f"    Email: {details['email']}")
        print(f"    Grade: {details['grade']}")
        print(f"    Enrollment Date: {details['enrollment_date']}")
        print(f"    Guardian Name: {details['guardian_name']}")
        print(f"    Guardian Phone: {details['guardian_phone']}")
        print(f"    Guardian Relationship: {details['guardian_relationship']}")

# Save to file
with open('student_details.py', 'w') as file:
    file.write(f"data = {result}\n")
