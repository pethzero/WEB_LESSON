data = [
    {"id": 1, "name": "Product A", "category": "Electronics", "price": 100, "quantity": 10},
    {"id": 2, "name": "Product B", "category": "Electronics", "price": 200, "quantity": 5},
    {"id": 3, "name": "Product C", "category": "Home", "price": 150, "quantity": 7},
    {"id": 4, "name": "Product D", "category": "Electronics", "price": 300, "quantity": 2},
    {"id": 5, "name": "Product E", "category": "Home", "price": 50, "quantity": 20}
]
from collections import defaultdict

def total_value(data):
    # สร้าง defaultdict ที่มีค่าเริ่มต้นเป็น 0
    result = defaultdict(float)
    
    # คำนวณมูลค่ารวมของสินค้าแต่ละรายการ
    for item in data:
        id = item.get('id')
        price = item.get('price', 0)
        quantity = item.get('quantity', 0)
        result[id] = price * quantity
    
    return dict(result)  # แปลงผลลัพธ์เป็นดิกชันนารีปกติ

print(total_value(data))
# # ผลลัพธ์: {1: 1000, 2: 1000, 3: 1050, 4: 600, 5: 1000}

def category_summary(data):
    # สร้าง defaultdict ที่มีค่าเริ่มต้นเป็น 0
    result = defaultdict(float)
    
    # คำนวณยอดรวมมูลค่าของสินค้าในแต่ละหมวดหมู่
    for item in data:
        category = item.get('category')
        price = item.get('price', 0)
        quantity = item.get('quantity', 0)
        result[category] += price * quantity
    
    return dict(result)  # แปลงผลลัพธ์เป็นดิกชันนารีปกติ

print(category_summary(data))
# # ผลลัพธ์: {'Electronics': 3000, 'Home': 1150}


# เราทำ
# def filter_expensive(data,price_sell):
#     result = []
#     for  item in data:
#         if item['price'] >= price_sell:
#             result.append(item)
#     return result
# print(filter_expensive(data, 150))

def filter_expensive(data, price_sell):
    # ใช้ list comprehension เพื่อกรองรายการที่ราคามากกว่าหรือเท่ากับ price_sell
    return [item for item in data if item['price'] >= price_sell]
# # ผลลัพธ์: [{'id': 2, 'name': 'Product B', 'category': 'Electronics', 'price': 200, 'quantity': 5}, {'id': 3, 'name': 'Product C', 'category': 'Home', 'price': 150, 'quantity': 7}, {'id': 4, 'name': 'Product D', 'category': 'Electronics', 'price': 300, 'quantity': 2}]
