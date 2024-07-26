from collections import defaultdict
# ------------------------------------------------------------------------------------------------------------
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
    def __init__(self, name):
        self.name = name
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

# สร้าง `Category` ใหม่และใช้ชื่อหมวดหมู่เป็นคีย์
categories = defaultdict(lambda: Category(name=''))

# จัดกลุ่มข้อมูล
for item in data:
    category_name = item['category']
    subcategory_name = item['subcategory']
    if not categories[category_name].name:
        categories[category_name] = Category(name=category_name)
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

# # ------------------------------------------------
class Category:
    def __init__(self, name):
        self.name = name
        self.subcategories = {}

    def add_item(self, subcategory_name, item):
        if subcategory_name not in self.subcategories:
            self.subcategories[subcategory_name] = Subcategory(subcategory_name)
        self.subcategories[subcategory_name].add_item(item)

    def get_summary(self):
        summary = {'category': self.name, 'subcategories': []}
        for subcategory in self.subcategories.values():
            summary['subcategories'].append(subcategory.get_summary())
        return summary

class Subcategory:
    def __init__(self, name):
        self.name = name
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

categories = {}

# จัดกลุ่มข้อมูล
for item in data:
    category_name = item['category']
    subcategory_name = item['subcategory']
    if category_name not in categories:
        categories[category_name] = Category(category_name)
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
