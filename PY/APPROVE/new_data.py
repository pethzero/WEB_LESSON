class ApprovalProcess:
    def __init__(self, requests, approvers):
        self.requests = requests  # ข้อมูล request หลายรายการ
        self.approvers = approvers  # ข้อมูลผู้อนุมัติหลายคน
    
    def approve_by_code(self, request_id, code, target_level=None):
        # หา request ที่ต้องการจาก request ทั้งหมด
        request = next((req for req in self.requests if req['request_id'] == request_id), None)
        
        if request:
            # ตรวจสอบสิทธิพิเศษของ admin9999
            if code == 'admin9999':
                if target_level is not None:
                    # ถ้า admin9999 ต้องการข้ามไปยัง target_level ที่ระบุ
                    if 0 <= target_level <= request['level_finish']:
                        # อัปเดต level_current ไปยัง target_level
                        request['level_current'] = target_level
                        
                        # อนุมัติผู้อนุมัติทุกคนที่มี level <= target_level และยังไม่ได้อนุมัติ
                        for approver in self.approvers:
                            if approver['request_id'] == request_id and approver['level'] <= target_level and not approver['approve']:
                                approver['approve'] = True
                                print(f"Approver {approver['code']} at level {approver['level']} has been approved by admin9999.")
                        
                        print(f"Admin {code} has approved request {request_id} directly to level {target_level}.")
                        print(f"Current level for request {request_id} is now: {request['level_current']}")
                    else:
                        print(f"Cannot approve directly to level {target_level}. Maximum level is {request['level_finish']}.")
                else:
                    # ถ้า admin9999 ไม่มี target_level จะอนุมัติขั้นตอนปกติ
                    self.approve_normal(request_id, code)
            else:
                # ถ้าไม่ใช่ admin9999 จะทำการอนุมัติตามปกติ
                self.approve_normal(request_id, code)
        else:
            print(f"Request {request_id} not found.")

    def approve_normal(self, request_id, code):
        # หา request ที่ต้องการจาก request ทั้งหมด
        request = next((req for req in self.requests if req['request_id'] == request_id), None)
        
        if request:
            # หา approver ที่ตรงกับ code
            approver = next((item for item in self.approvers if item['request_id'] == request_id and item['code'] == code), None)
            
            if approver:
                # หา level ของ approver
                level = approver['level']
                
                # ตรวจสอบว่า approver ยังไม่ได้รับการอนุมัติ และลำดับการอนุมัติถูกต้อง
                if not approver['approve'] and level == request['level_current'] + 1:
                    # อนุมัติ approver
                    approver['approve'] = True
                    print(f"Request {request_id} - Level {level} - Code {approver['code']} has approved.")
                    
                    # อัปเดต level_current ให้ตรงกับ level นี้
                    request['level_current'] = level
                    print(f"Current level for request {request_id} is now: {request['level_current']}")
                elif approver['approve']:
                    print(f"Code {code} at level {level} has already been approved.")
                else:
                    print(f"Cannot approve code {code}. The current level is {request['level_current']}, but the code is for level {level}.")
            else:
                print(f"No approver found for code {code} in request {request_id}")
        else:
            print(f"Request {request_id} not found.")

    def is_complete(self, request_id):
        # ตรวจสอบว่ากระบวนการอนุมัติเสร็จสิ้นหรือยัง
        request = next((req for req in self.requests if req['request_id'] == request_id), None)
        return request['level_current'] >= request['level_finish'] if request else True
    
    def get_approval_status(self, request_id):
        # ดึงสถานะการอนุมัติของ request นั้นๆ
        return [item for item in self.approvers if item['request_id'] == request_id]

# ข้อมูลการจำลองหลาย request
requests = [
    {
        'request_id': '00001',
        'level_current': 0,  # เริ่มต้นที่ 0 คือยังไม่มีการอนุมัติ
        'level_finish': 4,   # ลำดับสุดท้ายของการอนุมัติ
        'total': 1000000
    },
    {
        'request_id': '00002',
        'level_current': 0,
        'level_finish': 2,
        'total': 500000
    }
]

# ข้อมูลการจำลองผู้อนุมัติ
approvers = [
    {'request_id': '00001', 'code': 'A', 'level': 1, 'approve': False},
    {'request_id': '00001', 'code': 'B', 'level': 2, 'approve': False},
    {'request_id': '00001', 'code': 'C', 'level': 3, 'approve': False},
    {'request_id': '00001', 'code': 'D', 'level': 4, 'approve': False},
    {'request_id': '00002', 'code': 'B1', 'level': 1, 'approve': False},
    {'request_id': '00002', 'code': 'B1', 'level': 2, 'approve': False},
]

# สร้าง object ของ ApprovalProcess
cls_approve = ApprovalProcess(requests, approvers)

# ตัวอย่างการใช้งาน
cls_approve.approve_by_code('00001', 'A')  # อนุมัติแบบปกติ
cls_approve.approve_by_code('00001', 'admin9999', 4)  # อนุมัติแบบ admin ข้ามไปยัง level 4
cls_approve.approve_by_code('00002', 'admin9999', 1)  # อนุมัติแบบ admin ข้ามไปยัง level 1
cls_approve.approve_by_code('00002', 'B1')  # อนุมัติแบบปกติ
class ApprovalProcess:
    def __init__(self, requests, approvers):
        self.requests = requests  # ข้อมูล request หลายรายการ
        self.approvers = approvers  # ข้อมูลผู้อนุมัติหลายคน
    
    def approve_by_code(self, request_id, code, target_level=None):
        # หา request ที่ต้องการจาก request ทั้งหมด
        request = next((req for req in self.requests if req['request_id'] == request_id), None)
        
        if request:
            # ตรวจสอบสิทธิพิเศษของ admin9999
            if code == 'admin9999':
                if target_level is not None:
                    # ถ้า admin9999 ต้องการข้ามไปยัง target_level ที่ระบุ
                    if 0 <= target_level <= request['level_finish']:
                        # อัปเดต level_current ไปยัง target_level
                        request['level_current'] = target_level
                        
                        # อนุมัติผู้อนุมัติทุกคนที่มี level <= target_level และยังไม่ได้อนุมัติ
                        for approver in self.approvers:
                            if approver['request_id'] == request_id and approver['level'] <= target_level and not approver['approve']:
                                approver['approve'] = True
                                print(f"Approver {approver['code']} at level {approver['level']} has been approved by admin9999.")
                        
                        print(f"Admin {code} has approved request {request_id} directly to level {target_level}.")
                        print(f"Current level for request {request_id} is now: {request['level_current']}")
                    else:
                        print(f"Cannot approve directly to level {target_level}. Maximum level is {request['level_finish']}.")
                else:
                    # ถ้า admin9999 ไม่มี target_level จะอนุมัติขั้นตอนปกติ
                    self.approve_normal(request_id, code)
            else:
                # ถ้าไม่ใช่ admin9999 จะทำการอนุมัติตามปกติ
                self.approve_normal(request_id, code)
        else:
            print(f"Request {request_id} not found.")

    def approve_normal(self, request_id, code):
        # หา request ที่ต้องการจาก request ทั้งหมด
        request = next((req for req in self.requests if req['request_id'] == request_id), None)
        
        if request:
            # หา approver ที่ตรงกับ code
            approver = next((item for item in self.approvers if item['request_id'] == request_id and item['code'] == code), None)
            
            if approver:
                # หา level ของ approver
                level = approver['level']
                
                # ตรวจสอบว่า approver ยังไม่ได้รับการอนุมัติ และลำดับการอนุมัติถูกต้อง
                if not approver['approve'] and level == request['level_current'] + 1:
                    # อนุมัติ approver
                    approver['approve'] = True
                    print(f"Request {request_id} - Level {level} - Code {approver['code']} has approved.")
                    
                    # อัปเดต level_current ให้ตรงกับ level นี้
                    request['level_current'] = level
                    print(f"Current level for request {request_id} is now: {request['level_current']}")
                elif approver['approve']:
                    print(f"Code {code} at level {level} has already been approved.")
                else:
                    print(f"Cannot approve code {code}. The current level is {request['level_current']}, but the code is for level {level}.")
            else:
                print(f"No approver found for code {code} in request {request_id}")
        else:
            print(f"Request {request_id} not found.")

    def is_complete(self, request_id):
        # ตรวจสอบว่ากระบวนการอนุมัติเสร็จสิ้นหรือยัง
        request = next((req for req in self.requests if req['request_id'] == request_id), None)
        return request['level_current'] >= request['level_finish'] if request else True
    
    def get_approval_status(self, request_id):
        # ดึงสถานะการอนุมัติของ request นั้นๆ
        return [item for item in self.approvers if item['request_id'] == request_id]

# ข้อมูลการจำลองหลาย request
requests = [
    {
        'request_id': '00001',
        'level_current': 0,  # เริ่มต้นที่ 0 คือยังไม่มีการอนุมัติ
        'level_finish': 4,   # ลำดับสุดท้ายของการอนุมัติ
        'total': 1000000
    },
    {
        'request_id': '00002',
        'level_current': 0,
        'level_finish': 2,
        'total': 500000
    }
]

# ข้อมูลการจำลองผู้อนุมัติ
approvers = [
    {'request_id': '00001', 'code': 'A', 'level': 1, 'approve': False},
    {'request_id': '00001', 'code': 'B', 'level': 2, 'approve': False},
    {'request_id': '00001', 'code': 'C', 'level': 3, 'approve': False},
    {'request_id': '00001', 'code': 'D', 'level': 4, 'approve': False},
    {'request_id': '00002', 'code': 'B1', 'level': 1, 'approve': False},
    {'request_id': '00002', 'code': 'B1', 'level': 2, 'approve': False},
]

# สร้าง object ของ ApprovalProcess
cls_approve = ApprovalProcess(requests, approvers)

# ตัวอย่างการใช้งาน
cls_approve.approve_by_code('00001', 'A')  # อนุมัติแบบปกติ
cls_approve.approve_by_code('00001', 'admin9999', 4)  # อนุมัติแบบ admin ข้ามไปยัง level 4
# cls_approve.approve_by_code('00002', 'admin9999', 1)  # อนุมัติแบบ admin ข้ามไปยัง level 1
cls_approve.approve_by_code('00002', 'B1')  # อนุมัติแบบปกติ
cls_approve.approve_by_code('00002', 'B1')  # อนุมัติแบบปกติ

# # แสดงสถานะสุดท้ายของการอนุมัติสำหรับ request 00002
print("\nFinal Approval Status for request 00002:")
data_process = cls_approve.get_approval_status('00002')
for item in data_process:
    print(item)
    

is_complete = cls_approve.is_complete('00002')
if is_complete:
    print("The approval process for request 00002 is complete.")
else:
    print("The approval process for request 00002 is still in progress.")