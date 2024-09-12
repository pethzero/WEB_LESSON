from pathlib import Path

def create_folders(base_path, folder_structure):
    """
    สร้างโฟลเดอร์ตามโครงสร้างที่กำหนด

    :param base_path: โฟลเดอร์หลักที่ต้องการสร้างโครงสร้าง
    :param folder_structure: โครงสร้างโฟลเดอร์ที่ต้องการสร้าง (เป็นลิสต์ของลิสต์)
    """
    base_path = Path(base_path)
    for subfolders in folder_structure:
        # สร้างเส้นทางโฟลเดอร์ย่อย
        current_path = base_path
        for folder in subfolders:
            current_path /= folder
            current_path.mkdir(parents=True, exist_ok=True)
            print(f'สร้างโฟลเดอร์: {current_path}')

# กำหนดโครงสร้างโฟลเดอร์
folder_structure = [
    ['b', 'c', '1'],
    ['b', 'c', '2'],
    ['b', 'c', '1', '1a'],
    ['b', 'd', '1', '1a'],
    ['b', 'd', '2', '1b']
]

# กำหนดโฟลเดอร์หลัก
base_path = 'a'

# เรียกใช้ฟังก์ชันเพื่อสร้างโฟลเดอร์ตามโครงสร้าง
create_folders(base_path, folder_structure)
