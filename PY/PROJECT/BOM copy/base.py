# base.py
import json
import os

class ItemBase:
    def __init__(self, item_id, quantity):
        self.item_id = item_id
        self.quantity = quantity

    def to_dict(self):
        """แปลงวัตถุคลาสเป็น dictionary"""
        return {
            'item_id': self.item_id,
            'quantity': self.quantity
        }

    def to_json(self):
        """แปลงวัตถุคลาสเป็น JSON string"""
        return json.dumps(self.to_dict(), indent=4)

    def save_to_json(self, folder_path="json", filename=None):
        """บันทึกข้อมูลเป็นไฟล์ JSON"""
        if not filename:
            filename = f"{self.item_id}.json"
        file_path = os.path.join(folder_path, filename)
        
        # ตรวจสอบว่าโฟลเดอร์ json มีอยู่แล้วหรือไม่ ถ้าไม่มีก็สร้างใหม่
        os.makedirs(folder_path, exist_ok=True)
        
        # บันทึกไฟล์ JSON
        with open(file_path, 'w') as json_file:
            json.dump(self.to_dict(), json_file, indent=4)
        print(f"Data saved to {file_path}")
