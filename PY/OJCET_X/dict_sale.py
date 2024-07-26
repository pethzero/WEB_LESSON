from collections import defaultdict

def group_and_calculate_sales(data):
    # สร้าง defaultdict สำหรับจัดกลุ่มข้อมูล
    grouped_sales = defaultdict(lambda: {'total_sales': 0, 'items': []})
    
    # จัดกลุ่มข้อมูล
    for item in data:
        category = item['category']
        grouped_sales[category]['total_sales'] += item['sales_amount']
        grouped_sales[category]['items'].append(item)
    
    # แสดงผลลัพธ์ที่จัดกลุ่มแล้ว
    result = []
    for category, info in grouped_sales.items():
        result.append({
            'category': category,
            'total_sales': info['total_sales'],
            'items': info['items']
        })
    
    return result

# ตัวอย่างข้อมูล
data = [
    {'item': 'Widget A', 'category': 'Electronics', 'sales_amount': 150},
    {'item': 'Widget B', 'category': 'Electronics', 'sales_amount': 200},
    {'item': 'Gadget A', 'category': 'Home & Kitchen', 'sales_amount': 75},
    {'item': 'Gadget B', 'category': 'Home & Kitchen', 'sales_amount': 125},
    {'item': 'Tool A', 'category': 'Tools', 'sales_amount': 300}
]

# เรียกใช้ฟังก์ชัน
result = group_and_calculate_sales(data)

# แสดงผลลัพธ์
for group in result:
    print(f"Category: {group['category']}")
    print(f"Total Sales: ${group['total_sales']}")
    print("Items:")
    for item in group['items']:
        print(f"  - {item['item']} : ${item['sales_amount']}")
    print()
