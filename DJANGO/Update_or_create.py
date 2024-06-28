# รับค่า id หลักจากข้อมูลที่ได้รับมา
id_pk = data['id']

# กำหนดฟิลด์ที่จะใช้ในการอัปเดตหรือสร้างวัตถุ
defaults = {
    "status": data['status'],
    "name": data['name'],
}

# อัปเดตวัตถุที่มี id ที่กำหนด หรือสร้างวัตถุใหม่ถ้าไม่มีอยู่
# เปลี่ยน 'XXXXXXX' เป็นชื่อของโมเดลของคุณ
obj_main, created_main = XXXXXXX.objects.using('setting_db').update_or_create(
    id=id_pk,
    defaults=defaults
)
 
if created_main:
    print('id_pk = None ไม่มี  สร้างใหม่')
else:
    print('id = 1 มี อัพเดท')
    