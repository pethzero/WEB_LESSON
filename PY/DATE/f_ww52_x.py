# import copy
# def process_weeks(data_main, list_week):
#     # ดึงค่า initial_total จาก data_main
#     remain_total = data_main[0]["total"]
#     # หาตำแหน่งเริ่มต้น (เจอค่า amount_used ที่ไม่ใช่ None)
#     start_week_index = next((i for i, week in enumerate(list_week) if week["per_used"] is not None), None)
    
  
#     mode = 'E'
#     condition = False
#     original_list_week = copy.deepcopy(list_week)
    
#     # for i in range(start_week_index, len(list_week)):
#     for index,entry in enumerate(list_week):
#         # print(entry)
#         current_week = original_list_week[index]
#         if index == start_week_index:
#             mode = 'I'
#             condition = True

#         if condition == True:
#             if mode == 'I':
#                 entry["amount_used"]  =  remain_total
#                 entry["amount_add"]  = (current_week["amount_add"] or 0)
#                 remain_total +=  (current_week["amount_add"] or 0)
#                 entry["amount_summary"] = remain_total
#                 entry["mode"] = mode
#                 if not (current_week["per_used"] == 0 or current_week["per_used"] == None):
#                     remain_total = remain_total * ((current_week["per_used"] or 0) / 100)
#                     entry["amount_remain"] = remain_total
#                     mode = 'N'
#                 else:
#                     if current_week["per_used"] == None:
#                         entry["amount_used"] = None
#                         entry["amount_add"]  = None
#                         entry["mode"] = 'F'
#                         entry["amount_summary"] = None
#                         entry["amount_remain"]  = None    
#                     else:
#                         entry["mode"] = 'F'
#                         remain_total = 0
#                     condition = False
                    
#             elif mode == 'N':
#                 entry["amount_used"]  =  remain_total
#                 entry["amount_add"]  = (current_week["amount_add"] or 0)
#                 remain_total +=  (current_week["amount_add"] or 0)
#                 entry["amount_summary"] = remain_total
#                 entry["mode"] = mode
#                 if not (current_week["per_used"] == 0 or current_week["per_used"] == None):
#                     remain_total = remain_total * ((current_week["per_used"] or 0) / 100)
#                     entry["amount_remain"] = remain_total
#                 else:
#                     if current_week["per_used"] == None:
#                         entry["amount_used"] = None
#                         entry["amount_add"]  = None
#                         entry["mode"] = 'F'
#                         entry["amount_summary"] = None
#                         entry["amount_remain"]  = None    
#                     else:
#                         entry["mode"] = 'F'
#                         remain_total = 0
#                     condition = False
#         else:
#             entry["amount_used"] = None
#             entry["amount_add"]  = None
#             entry["mode"] = 'E'
#             entry["amount_summary"] = None
#             entry["amount_remain"]  = None    
#         print(entry)       
#     return list_week


# # เรียกใช้ฟังก์ชัน
# data_main = [
#     {"name": "pump_fire01", "m_type": "f001", "total": 600},
# ]


# list_week = [ 
#     {"amount_used": 111, "amount_add": 100,  "amount_summary": 111, "per_used": None, "amount_remain": 0, "m_type": "f001", "ww": 1, "mode": "E"},
#     {"amount_used": 111, "amount_add": None,  "amount_summary": 111, "per_used": 50, "amount_remain": 0, "m_type": "f001", "ww": 2, "mode": "E"},
#     {"amount_used": 111, "amount_add": None, "amount_summary": 11, "per_used": None, "amount_remain": 0, "m_type": "f001", "ww": 3, "mode": "E"},
#     {"amount_used": 111, "amount_add": None, "amount_summary": 111, "per_used": None, "amount_remain": 0, "m_type": "f001", "ww": 4, "mode": "E"},
# ]

# # ผลลัพธ์
# result = process_weeks(data_main, list_week)

# แสดงผลลัพธ์
# for week in result:
#     print(week)

import copy

def process_weeks(data_main, list_week):
    # ดึงค่า initial_total จาก data_main
    remain_total = data_main[0]["total"]
    
    # หาตำแหน่งเริ่มต้น (เจอค่า per_used ที่ไม่ใช่ None)
    start_week_index = next((i for i, week in enumerate(list_week) if week["per_used"] is not None), None)

    if start_week_index is None:
        return list_week  # if no start week found, return list as is
    
    mode = 'E'  # Default mode to 'E'
    condition = False

    # เริ่มการประมวลผล
    for index, entry in enumerate(list_week):
        if index == start_week_index:
            mode = 'I'  # เริ่มต้นด้วย 'I'
            condition = True

        if condition:
            if mode == 'I':  # Initial week setup
                entry["amount_used"] = remain_total
                entry["amount_add"] = (entry["amount_add"] or 0)
                remain_total += entry["amount_add"]
                entry["amount_summary"] = remain_total
                entry["mode"] = mode

                # คำนวณ amount_remain หาก per_used ไม่ใช่ 0 หรือ None
                if entry["per_used"] not in (None, 0):
                    remain_total *= (entry["per_used"] / 100)
                    entry["amount_remain"] = remain_total
                    mode = 'N'  # Change mode for subsequent weeks
                else:
                    # กรณีที่ per_used เป็น None หรือ 0
                    if entry["per_used"] is None:
                        entry["amount_used"] = None
                        entry["amount_add"] = None
                        entry["mode"] = 'F'
                        entry["amount_summary"] = None
                        entry["amount_remain"] = None
                    else:
                        entry["mode"] = 'F'
                        remain_total = 0  # if per_used is 0, reset remain_total
                    condition = False

            elif mode == 'N':  # For subsequent weeks
                entry["amount_used"] = remain_total
                entry["amount_add"] = (entry["amount_add"] or 0)
                remain_total += entry["amount_add"]
                entry["amount_summary"] = remain_total
                entry["mode"] = mode

                # คำนวณ amount_remain หาก per_used ไม่ใช่ 0 หรือ None
                if entry["per_used"] not in (None, 0):
                    remain_total *= (entry["per_used"] / 100)
                    entry["amount_remain"] = remain_total
                else:
                    # กรณีที่ per_used เป็น None หรือ 0
                    if entry["per_used"] is None:
                        entry["amount_used"] = None
                        entry["amount_add"] = None
                        entry["mode"] = 'F'
                        entry["amount_summary"] = None
                        entry["amount_remain"] = None
                    else:
                        entry["mode"] = 'F'
                        remain_total = 0  # if per_used is 0, reset remain_total
                    condition = False
        else:
            # กรณีที่ไม่ตรงเงื่อนไข ให้เป็นค่าเริ่มต้น
            entry["amount_used"] = None
            entry["amount_add"] = None
            entry["mode"] = 'E'
            entry["amount_summary"] = None
            entry["amount_remain"] = None
    return list_week


# เรียกใช้ฟังก์ชัน
data_main = [
    {"name": "pump_fire01", "m_type": "f001", "total": 600},
]

list_week = [
    {"amount_used": 111, "amount_add": 100, "amount_summary": 111, "per_used": None, "amount_remain": 0, "m_type": "f001", "ww": 1, "mode": "E"},
    {"amount_used": 111, "amount_add": None, "amount_summary": 111, "per_used": 50, "amount_remain": 0, "m_type": "f001", "ww": 2, "mode": "E"},
    {"amount_used": 111, "amount_add": None, "amount_summary": 11, "per_used": None, "amount_remain": 0, "m_type": "f001", "ww": 3, "mode": "E"},
    {"amount_used": 111, "amount_add": None, "amount_summary": 111, "per_used": None, "amount_remain": 0, "m_type": "f001", "ww": 4, "mode": "E"},
]

# ผลลัพธ์
result = process_weeks(data_main, list_week)

# แสดงผลลัพธ์
print("Updated List Week:")
for week in result:
    print(week)
