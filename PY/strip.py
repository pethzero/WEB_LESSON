data = [1234, '   ', 'XX', '  dwdqwd ']

# ใช้ list comprehension เพื่อลบช่องว่างของข้อความที่อยู่ใน list
trimmed_data = [x.strip() if isinstance(x, str) else x for x in data]

print(trimmed_data)
