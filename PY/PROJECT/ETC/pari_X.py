import random
from typing import List, Dict, Any

# ข้อมูลจำลอง 26 ชุด
employees = [
    {"gender": "M", "type": "A", "EN": "00001"},
    {"gender": "F", "type": "A", "EN": "00002"},
    {"gender": "M", "type": "B", "EN": "00003"},
    {"gender": "F", "type": "B", "EN": "00004"},
    {"gender": "M", "type": "C", "EN": "00005"},
    {"gender": "F", "type": "C", "EN": "00006"},
    {"gender": "M", "type": "A", "EN": "00007"},
    {"gender": "F", "type": "A", "EN": "00008"},
    {"gender": "M", "type": "B", "EN": "00009"},
    {"gender": "F", "type": "B", "EN": "00010"},
    {"gender": "M", "type": "C", "EN": "00011"},
    {"gender": "F", "type": "C", "EN": "00012"},
    {"gender": "M", "type": "A", "EN": "00013"},
    {"gender": "F", "type": "A", "EN": "00014"},
    {"gender": "M", "type": "B", "EN": "00015"},
    {"gender": "F", "type": "B", "EN": "00016"},
    {"gender": "M", "type": "C", "EN": "00017"},
    {"gender": "F", "type": "C", "EN": "00018"},
    {"gender": "M", "type": "A", "EN": "00019"},
    {"gender": "F", "type": "A", "EN": "00020"},
    {"gender": "M", "type": "B", "EN": "00021"},
    {"gender": "F", "type": "B", "EN": "00022"},
    {"gender": "M", "type": "C", "EN": "00023"},
    {"gender": "F", "type": "C", "EN": "00024"},
    {"gender": "M", "type": "A", "EN": "00025"},
    {"gender": "F", "type": "A", "EN": "00026"}
]

# ฟังก์ชั่นในการสุ่มข้อมูล
def shuffle(array: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    random.shuffle(array)
    return array

# ฟังก์ชั่นในการจัดกลุ่ม
# def group_employees(employees: List[Dict[str, Any]], max_group_size: int) -> List[Dict[str, Any]]:
#     groups = []
#     shuffled_employees = shuffle(employees[:])
#     i = 0

#     while i < len(shuffled_employees):
#         group = []
#         seen = set()

#         for emp in shuffled_employees[i:]:
#             key = (emp['gender'], emp['type'])

#             if all((emp['gender'] == g and emp['type'] == t) for g, t in seen):
#                 group.append(emp)
#                 seen.add(key)
#                 i += 1

#                 if len(group) >= max_group_size:
#                     break

#         if group:
#             groups.append({"group": group})

#     return groups


def group_employees(employees: List[Dict[str, Any]], max_group_size: int) -> List[Dict[str, Any]]:
    groups = []
    shuffled_employees = shuffle(employees[:])

    while shuffled_employees:
        group = []
        seen = set()
        i = 0
        
        while i < len(shuffled_employees) and len(group) < max_group_size:
            emp = shuffled_employees[i]
            key = (emp['gender'], emp['type'])
            # ตรวจสอบว่าข้อมูลซ้ำหรือยัง
            if all((emp['gender'] == g and emp['type'] == t) for g, t in seen):
                group.append(emp)
                seen.add(key)
                shuffled_employees.pop(i)
            else:
                i += 1

        if group:
            groups.append({"group": group})

    return groups

# ทดสอบฟังก์ชั่น
groups = group_employees(employees, 5)
for idx, group in enumerate(groups):
    print(f"Group {idx + 1}: {group}")
