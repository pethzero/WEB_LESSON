import pandas as pd

# ข้อมูลต้นฉบับ
data_test_1 = [
    {'mat': 'A01', 'fg_mat': 'A00', 'wo': 'A001', 'po': 'A001', 'Qty': 1, 'sale': None, 'SlQty': None},
    {'mat': 'A01', 'fg_mat': 'A00', 'wo': None, 'po': 'B001', 'Qty': 2, 'sale': None, 'SlQty': None},
    {'mat': 'A01', 'fg_mat': 'A00', 'wo': 'A002', 'po': None, 'Qty': 3, 'sale': None, 'SlQty': None},
]

data_test_2 = [
    {'mat': 'A01', 'fg_mat': 'A00', 'wo': None, 'po': None, 'sale': 'S001', 'SlQty': 2},
    {'mat': 'A01', 'fg_mat': 'A00', 'wo': None, 'po': None, 'sale': 'S002', 'SlQty': 3},
]

# แปลงข้อมูลเป็น DataFrame
df1 = pd.DataFrame(data_test_1)
df2 = pd.DataFrame(data_test_2)

# การรวมข้อมูลที่ตรงกัน
# ใช้การรวมข้อมูลแบบ left join
result = pd.merge(df1, df2, on=['mat', 'fg_mat', 'wo', 'po'], how='left')

# แปลง DataFrame กลับเป็น list ของ dictionary
output = result.to_dict(orient='records')

for x in output:
    print(x)

print(output)

