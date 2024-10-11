# def is_even(n):
#     return n%2 == 0

# print(is_even(3))
# print(is_even(10))

# def sum_list(lst):
#     total = 0
#     for i in lst:
#         total += i
#     return total

# data_l = [1,5,9,8]
# print(sum_list(data_l))


# data_w = 'peth'
# # data_w = 'wanaw'
# def is_palindrome(word):
#     print(word)
#     print(word[::-1])
#     # เปรียบเทียบ string กับการกลับด้าน
#     return word == word[::-1]
        
# print(is_palindrome(data_w))


# A = [
#     [1, 2],
#     [3, 4]
# ]

# B = [
#     [5, 6],
#     [7, 8]
# ]


# def matrix_multiply(A, B):
#     # ตรวจสอบเงื่อนไขการคูณ (จำนวนคอลัมน์ของ A ต้องเท่ากับจำนวนแถวของ B)
#     if len(A[0]) != len(B):
#         raise ValueError("Matrices cannot be multiplied")
    
#     # สร้างเมทริกซ์เปล่าขนาดผลลัพธ์ (m x p)
#     result = [[0 for _ in range(len(B[0]))] for _ in range(len(A))]
#     print([0 for _ in range(len(B[0]))])
#     print(result)
#     # ดำเนินการคูณเมทริกซ์
#     for i in range(len(A)):  # แถวของ A
#         for j in range(len(B[0])):  # คอลัมน์ของ B
#             for k in range(len(B)):  # จำนวนคอลัมน์ของ A หรือแถวของ B
#                 result[i][j] += A[i][k] * B[k][j]
    
#     return result

# print(matrix_multiply(A,B))


# def count_words(sentence):
#     # แบ่งคำในประโยคด้วยช่องว่าง
#     words = sentence.split()
    
#     # คืนค่าจำนวนคำ
#     return len(words)

# data_sen = 'wow ww'
# print(count_words(data_sen))  # Output: 2



def sort_array(arr):
    n = len(arr)
    
    # ลูปผ่านทุก element
    print('N',n)
    for i in range(n):
        print('I',i)
        # ลูปอีกครั้งเพื่อเปรียบเทียบแต่ละคู่
        for j in range(0, n-i-1):
            # ถ้าตัวหน้าใหญ่กว่าตัวหลัง ให้สลับที่
            print('Now',arr[j],arr[j+1])
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                print('Current',arr[j], arr[j+1])
    
    return arr


arr = [64, 34, 25, 12, 22, 11, 90]
# print(sort_array(arr))  
# Output: [11, 12, 22, 25, 34, 64, 90]

def fibonacci_recursive(n):
    # กรณีฐาน
    if n == 0:
        return 0
    elif n == 1:
        return 1
    
    # ใช้การเรียกซ้ำ
    return fibonacci_recursive(n-1) + fibonacci_recursive(n-2)
print(fibonacci_recursive(5))  # Output: 5
print(fibonacci_recursive(10))  # Output: 55


def fibonacci_iterative(n):
    # กรณีที่ n เป็น 0 หรือ 1
    if n == 0:
        return 0
    elif n == 1:
        return 1
    
    # ตัวแปรเริ่มต้น
    a, b = 0, 1
    
    # ใช้ลูปคำนวณค่า Fibonacci ที่ตำแหน่ง n
    for _ in range(2, n + 1):
        a, b = b, a + b
    
    return b
print(fibonacci_iterative(11))   # Output: 89
print(fibonacci_iterative(12))  # Output: 55
