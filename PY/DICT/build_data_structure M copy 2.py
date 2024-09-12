# ใช้งานฟังก์ชัน
product_list = [
    {"product_main": "AAA999-0001", "product_sub": "AAA999-0001"},
    {"product_main": "AAA999-0001", "product_sub": "AAA901-0001"},
    {"product_main": "AAA999-0001", "product_sub": "AAA902-0001"},
    {"product_main": "AAA999-0002", "product_sub": "AAA999-0002"},
    {"product_main": "AAA999-0002", "product_sub": "AAA901-0001"},
    {"product_main": "AAA999-0002", "product_sub": "AAA902-0012"},
    {"product_main": "AAA999-0001", "product_sub": "AAA902-0001"},
]

product_list_detail_demand = [
    {"product_main": "AAA999-0001", "product_sub": "AAA999-0001", "demand_id": "0000001", "price": 100, "qty": 20},
    {"product_main": "AAA999-0001", "product_sub": "AAA999-0001", "demand_id": "0000002", "price": 200, "qty": 40},
    {"product_main": "AAA999-0001", "product_sub": "AAA999-0001", "demand_id": "0000003", "price": 300, "qty": 30},
]

product_list_fg = [
         {"product_sub": "AAA999-0001","fg_qty":0},
         {"product_sub": "AAA901-0001","fg_qty":0},
         {"product_sub": "AAA902-0001","fg_qty":0},
    ]

# ฟังก์ชันที่ 1: สร้างโครงสร้างข้อมูลหลัก
def create_initial_structure(product_list):
    data = {}
    for product in product_list:
        key1 = product["product_main"]
        key2 = product["product_sub"]
        
        if key1 not in data:
            data[key1] = {}
        
        if key2 not in data[key1]:
            data[key1][key2] = {
                "total_demand_price": 0,
                "total_demand_quantity": 0,
                "product_type": 'M' if key1 == key2 else 'S',
                "details": []
            }
    return data

# ฟังก์ชันที่ 2: เพิ่มรายละเอียดและคำนวณผลรวม
def add_details_and_calculate_totals(data, product_list_detail_demand):
    for detail in product_list_detail_demand:
        key1 = detail["product_main"]
        key2 = detail["product_sub"]
        if key1 in data and key2 in data[key1]:
            data[key1][key2]["details"].append(detail)
            data[key1][key2]["total_demand_price"] += detail["price"]
            data[key1][key2]["total_demand_quantity"] += detail["qty"]
    return data

# ฟังก์ชันที่ 3: อัปเดตข้อมูลสำหรับสินค้าประเภท 'S'
def update_sub_product_totals(data):
    for key1, sub_products in data.items():
        for key2, details in sub_products.items():
            if details["product_type"] == 'S':
                parent_key = key1
                if parent_key in data and parent_key in sub_products:
                    details["total_demand_price"] = data[parent_key][parent_key]["total_demand_price"]
                    details["total_demand_quantity"] = data[parent_key][parent_key]["total_demand_quantity"]
    return data


# เรียกใช้แต่ละฟังก์ชันตามลำดับ
data = create_initial_structure(product_list)
data = add_details_and_calculate_totals(data, product_list_detail_demand)
data = update_sub_product_totals(data)

# แสดงผลลัพธ์
print(f"-------------------------------------------------- Result --------------------------------------------------")
for parent_id, child_dict in data.items():
    print(f"Parent ID: {parent_id}")
    for child_id, details in child_dict.items():
        product_type = details["product_type"]
        total_demand_price = details["total_demand_price"]
        total_demand_quantity = details["total_demand_quantity"]
        details_list = details["details"]
        print(f"  Child ID: {child_id}")
        print(f"    Type: {product_type}, Total Demand Quantity: {total_demand_quantity}, Total Demand Price: {total_demand_price}, Details: {details_list}")
