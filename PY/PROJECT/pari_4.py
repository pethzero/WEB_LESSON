import random
from typing import List, Dict, Any

# ข้อมูลจำลอง 13 ชุด
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
    {"gender": "M", "type": "A", "EN": "00013"}
]

# ฟังก์ชั่นในการสุ่มข้อมูล
def shuffle(array: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    random.shuffle(array)
    return array

# ฟังก์ชั่นในการจัดกลุ่ม
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
            if key not in seen:
                group.append(emp)
                seen.add(key)
                shuffled_employees.pop(i)
            else:
                i += 1

        if group:
            groups.append({"group": group})

    return groups

# ทดสอบฟังก์ชั่น
groups = group_employees(employees, 3)
for idx, group in enumerate(groups):
    print(f"Group {idx + 1}: {group}")
