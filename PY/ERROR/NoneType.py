# def get_element(data, index):
#     # สมมติว่า data อาจจะเป็น None
#     return data[index]

# my_data = None
# print(get_element(my_data, 0))  # นี่จะเกิดข้อผิดพลาด 'NoneType' object is not subscriptable


def get_element(data, index):
    if data is None:
        raise ValueError("Data is None, cannot subscript.")
    return data[index]

my_data = None
try:
    print(get_element(my_data, 0))
except ValueError as e:
    print(e)
