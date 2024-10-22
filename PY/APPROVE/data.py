class ApprovalProcess:
    def __init__(self, requests):
        self.requests = requests  # ข้อมูลหลาย request
    
    def approve_by_code(self, request_id, code):
        # หา request ที่ต้องการจาก request ทั้งหมด
        request = next((req for req in self.requests if req['request_id'] == request_id), None)
        
        if request:
            # หา approver ที่ตรงกับ code
            approver = next((item for item in request['approvers'] if item['code'] == code), None)
            
            if approver:
                # หา level ของ approver
                level = approver['level']
                
                # อนุมัติทุก level ที่น้อยกว่าหรือเท่ากับ level นี้
                for item in request['approvers']:
                    if item['level'] <= level:
                        item['approve'] = True
                        print(f"Request {request_id} - Level {item['level']} - {item['code']} has approved.")
                
                # อัปเดต level_current ให้เป็น level ที่สูงกว่า level นี้
                request['level_current'] = level + 1
                print(f"Current level for request {request_id} is now: {request['level_current']}")
            else:
                print(f"No approver found for code {code} in request {request_id}")
        else:
            print(f"Request {request_id} not found.")
    
    def is_complete(self, request_id):
        # ตรวจสอบว่ากระบวนการอนุมัติเสร็จสิ้นหรือยัง
        request = next((req for req in self.requests if req['request_id'] == request_id), None)
        return request['level_current'] > request['level_finish'] if request else True
    
    def get_approval_status(self, request_id):
        # ดึงสถานะการอนุมัติของ request นั้นๆ
        request = next((req for req in self.requests if req['request_id'] == request_id), None)
        return request['approvers'] if request else None

# ข้อมูลการจำลองหลาย request
requests = [
    {
        'request_id': '00001',
        'level_current': 1,  # เริ่มจาก Level 1
        'level_finish': 4,   # เปลี่ยนจาก level_max เป็น level_finish
        'total': 1000000,
        'approvers': [
            {'code': 'A', 'level': 1, 'approve': False},
            {'code': 'B', 'level': 2, 'approve': False},
            {'code': 'C', 'level': 3, 'approve': False},
            {'code': 'D', 'level': 4, 'approve': False},
        ]
    },
    {
        'request_id': '00002',
        'level_current': 1,  # เริ่มจาก Level 1
        'level_finish': 3,   # เปลี่ยนจาก level_max เป็น level_finish
        'total': 500000,
        'approvers': [
            {'code': 'X', 'level': 1, 'approve': False},
            {'code': 'Y', 'level': 2, 'approve': False},
            {'code': 'Z', 'level': 3, 'approve': False},
        ]
    }
]

# สร้าง object ของ ApprovalProcess
approval_process = ApprovalProcess(requests)

# สมมติว่า approve โดย code C สำหรับ request 00001
approval_process.approve_by_code('00001', 'A')

# แสดงสถานะสุดท้ายของการอนุมัติสำหรับ request 00001
print("\nFinal Approval Status for request 00001:")
status = approval_process.get_approval_status('00001')
if status:
    for item in status:
        print(item)
