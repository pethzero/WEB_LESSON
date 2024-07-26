# 1. การจัดกลุ่มหลายระดับ (Hierarchical Grouping)
# ในการจัดกลุ่มข้อมูลหลายระดับ เช่น ข้อมูลที่มีโครงสร้างเป็นลำดับชั้น (hierarchical), คุณสามารถใช้โครงสร้างข้อมูลเช่น nested dictionaries หรือ classes เพื่อจัดการข้อมูล

# ตัวอย่าง:
# สมมติว่าคุณมีข้อมูลการขายที่มีหลายระดับของหมวดหมู่ (Category > Subcategory > Item):
from collections import defaultdict

def hierarchical_grouping(data):
    grouped_data = defaultdict(lambda: defaultdict(lambda: {'total_sales': 0, 'items': []}))
    
    for item in data:
        category = item['category']
        subcategory = item['subcategory']
        grouped_data[category][subcategory]['total_sales'] += item['sales_amount']
        grouped_data[category][subcategory]['items'].append(item)
    
    result = []
    for category, subcategories in grouped_data.items():
        category_info = {'category': category, 'subcategories': []}
        for subcategory, info in subcategories.items():
            category_info['subcategories'].append({
                'subcategory': subcategory,
                'total_sales': info['total_sales'],
                'items': info['items']
            })
        result.append(category_info)
    
    return result

# ตัวอย่างข้อมูล
data = [
    {'item': 'Widget A', 'category': 'Electronics', 'subcategory': 'Computers', 'sales_amount': 150},
    {'item': 'Widget B', 'category': 'Electronics', 'subcategory': 'Computers', 'sales_amount': 200},
    {'item': 'Gadget A', 'category': 'Home & Kitchen', 'subcategory': 'Kitchen', 'sales_amount': 75},
    {'item': 'Gadget B', 'category': 'Home & Kitchen', 'subcategory': 'Kitchen', 'sales_amount': 125},
    {'item': 'Tool A', 'category': 'Tools', 'subcategory': 'Hand Tools', 'sales_amount': 300}
]

# เรียกใช้ฟังก์ชัน
result = hierarchical_grouping(data)

# แสดงผลลัพธ์
# for category in result:
#     print(f"Category: {category['category']}")
#     for subcategory in category['subcategories']:
#         print(f"  Subcategory: {subcategory['subcategory']}")
#         print(f"  Total Sales: ${subcategory['total_sales']}")
#         print("  Items:")
#         for item in subcategory['items']:
#             print(f"    - {item['item']} : ${item['sales_amount']}")
#     print()

# 2. การจัดกลุ่มด้วยคลาส (Class-Based Grouping)
# การใช้คลาสช่วยให้คุณสามารถจัดการข้อมูลในลักษณะ OOP (Object-Oriented Programming) ซึ่งช่วยในการจัดระเบียบข้อมูลและการคำนวณได้ดีขึ้น
class Category:
    def __init__(self, name):
        self.name = name
        self.subcategories = defaultdict(lambda: Subcategory(name))

    def add_item(self, subcategory_name, item):
        self.subcategories[subcategory_name].add_item(item)

    def get_summary(self):
        summary = {'category': self.name, 'subcategories': []}
        for subcategory in self.subcategories.values():
            summary['subcategories'].append(subcategory.get_summary())
        return summary

class Subcategory:
    def __init__(self, category_name):
        self.name = category_name
        self.items = []
        self.total_sales = 0

    def add_item(self, item):
        self.items.append(item)
        self.total_sales += item['sales_amount']

    def get_summary(self):
        return {
            'subcategory': self.name,
            'total_sales': self.total_sales,
            'items': self.items
        }

# ตัวอย่างข้อมูล
data = [
    {'item': 'Widget A', 'category': 'Electronics', 'subcategory': 'Computers', 'sales_amount': 150},
    {'item': 'Widget B', 'category': 'Electronics', 'subcategory': 'Computers', 'sales_amount': 200},
    {'item': 'Gadget A', 'category': 'Home & Kitchen', 'subcategory': 'Kitchen', 'sales_amount': 75},
    {'item': 'Gadget B', 'category': 'Home & Kitchen', 'subcategory': 'Kitchen', 'sales_amount': 125},
    {'item': 'Tool A', 'category': 'Tools', 'subcategory': 'Hand Tools', 'sales_amount': 300}
]

categories = defaultdict(lambda: Category(name=''))

# จัดกลุ่มข้อมูล
for item in data:
    category_name = item['category']
    subcategory_name = item['subcategory']
    categories[category_name].add_item(subcategory_name, item)

# แสดงผลลัพธ์
for category in categories.values():
    summary = category.get_summary()
    print(f"Category: {summary['category']}")
    for subcategory in summary['subcategories']:
        print(f"  Subcategory: {subcategory['subcategory']}")
        print(f"  Total Sales: ${subcategory['total_sales']}")
        print("  Items:")
        for item in subcategory['items']:
            print(f"    - {item['item']} : ${item['sales_amount']}")
    print()


# 3. การจัดกลุ่มและการคำนวณด้วยการใช้ pandas
# หากข้อมูลของคุณมีขนาดใหญ่หรือซับซ้อนมาก การใช้ pandas อาจทำให้การจัดกลุ่มและการคำนวณเป็นเรื่องง่าย

# ตัวอย่าง:
import pandas as pd

# ตัวอย่างข้อมูล
data = [
    {'item': 'Widget A', 'category': 'Electronics', 'subcategory': 'Computers', 'sales_amount': 150},
    {'item': 'Widget B', 'category': 'Electronics', 'subcategory': 'Computers', 'sales_amount': 200},
    {'item': 'Gadget A', 'category': 'Home & Kitchen', 'subcategory': 'Kitchen', 'sales_amount': 75},
    {'item': 'Gadget B', 'category': 'Home & Kitchen', 'subcategory': 'Kitchen', 'sales_amount': 125},
    {'item': 'Tool A', 'category': 'Tools', 'subcategory': 'Hand Tools', 'sales_amount': 300}
]

# สร้าง DataFrame
df = pd.DataFrame(data)

# การจัดกลุ่มและคำนวณ
result = df.groupby(['category', 'subcategory']).agg(
    total_sales=pd.NamedAgg(column='sales_amount', aggfunc='sum'),
    items=pd.NamedAgg(column='item', aggfunc=lambda x: list(x))
).reset_index()

# แสดงผลลัพธ์
print(result)
