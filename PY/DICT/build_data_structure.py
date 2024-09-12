import copy
# ตัวอย่างการใช้งาน
product_list = [
    {"product_main": "ProductA", "product_sub": "SubProduct1", "product_code": "A001", "price": 100, "quantity": 5},
    {"product_main": "ProductA", "product_sub": "SubProduct1", "product_code": "A002", "price": 105, "quantity": 3},
    {"product_main": "ProductA", "product_sub": "SubProduct2", "product_code": "A003", "price": 200, "quantity": 2},
    {"product_main": "ProductA", "product_sub": "SubProduct2", "product_code": "A004", "price": 210, "quantity": 4},
    {"product_main": "ProductB", "product_sub": "SubProduct3", "product_code": "A001", "price": 300, "quantity": 1},
    {"product_main": "ProductB", "product_sub": "SubProduct3", "product_code": "A002", "price": 320, "quantity": 5}
]

# ตัวอย่างการใช้งาน
deduct_list = [
    {"product_code": "A001", "qty": 10},
    {"product_code": "A002", "qty": 3}
]

################################################################################################################################################################
def build_data_structure(product_list):
    data = {}
    
    for product in product_list:
        key1 = product["product_main"]
        key2 = product["product_sub"]
        
        # ตรวจสอบว่ามีสินค้าหลักนี้ใน data หรือยัง
        if key1 not in data:
            data[key1] = {}
        
        # ตรวจสอบว่ามีสินค้าย่อยนี้ในสินค้าหลักหรือยัง
        if key2 not in data[key1]:
            data[key1][key2] = []
        
        # เพิ่มข้อมูลสินค้าย่อยเข้าไปในรายการ
        data[key1][key2].append({
            "product_code": product["product_code"],
            "price": product["price"],
            "quantity": product["quantity"],
        })
    
    return data

result = build_data_structure(product_list)
# สร้างสำเนาลึกของ result ก่อนที่จะทำการปรับปรุง
result_copy = copy.deepcopy(result)
################################################################################################################################################################
def deduct_quantity(data, deduct_list):
    for item in deduct_list:
        product_code_to_deduct = item["product_code"]
        qty_to_deduct = item["qty"]
        
        for product_main, subproducts in data.items():
            for subproduct_name, subproduct_list in subproducts.items():
                for product in subproduct_list:
                    if product["product_code"] == product_code_to_deduct:
                        if product["quantity"] >= qty_to_deduct:
                            product["quantity"] -= qty_to_deduct
                            qty_to_deduct = 0  # หักครบแล้ว
                        else:
                            qty_to_deduct -= product["quantity"]
                            product["quantity"] = 0
                        # ถ้าไม่มีจำนวนที่ต้องหักแล้วให้หยุด
                        if qty_to_deduct == 0:
                            break
                if qty_to_deduct == 0:
                    break
            if qty_to_deduct == 0:
                break
    
    return data

# ตัวอย่างการใช้งาน
deduct_list = [
    {"product_code": "A001", "qty": 10},
    {"product_code": "A002", "qty": 3}
]

# เรียกใช้ฟังก์ชัน
updated_data = deduct_quantity(result, deduct_list)
################################################################################################################################################################
print(f"-------------------------------------------------- OLD --------------------------------------------------")     
for parent_id, child_dict in result_copy.items():
    print(f"Parent ID: {parent_id}")
    for key, details in child_dict.items():
        child_id = key[1]
        for detail in details:
            product_code = detail.get('product_code', 'N/A')
            price = detail.get('price', 'N/A')
            quantity = detail.get('quantity', 'N/A')
            print(f"    Product code: {product_code}, Quantity: {quantity}, Price: {price}")
print(f"-------------------------------------------------- NEW --------------------------------------------------")               
# แสดงข้อมูลที่ถูกปรับปรุงแล้ว
for parent_id, child_dict in updated_data.items():
    print(f"Parent ID: {parent_id}")
    for key, details in child_dict.items():
        for detail in details:
            product_code = detail.get('product_code', 'N/A')
            price = detail.get('price', 'N/A')
            quantity = detail.get('quantity', 'N/A')
            print(f"    Product code: {product_code}, Quantity: {quantity}, Price: {price}")
