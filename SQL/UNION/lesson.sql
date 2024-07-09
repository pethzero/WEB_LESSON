ดูเหมือนว่าคุณกำลังพยายามใช้ `UNION` เพื่อรวมผลลัพธ์จากสองคำสั่ง `SELECT` ใน subquery และทำ `LEFT JOIN` กับ `organization_master`. อย่างไรก็ตาม การใช้ `UNION` ภายใน subquery อาจทำให้เกิดข้อผิดพลาดหากโครงสร้างของผลลัพธ์ทั้งสองคำสั่ง `SELECT` ไม่ตรงกัน.

เราสามารถปรับปรุงการ query โดยการทำให้แน่ใจว่าคอลัมน์ทั้งหมดในทั้งสองคำสั่ง `SELECT` มีโครงสร้างที่ตรงกัน และจัดการ `LEFT JOIN` อย่างถูกต้อง.

ลองใช้ SQL ที่ปรับปรุงดังนี้:

```sql
SELECT 
   a.id,
   b.id AS id_detail,
   b.id_group,
   a.group_name,
   a.department,
   a.edit_date,
   a.edit_by,
   (d.FirstNameE + ' ' + d.LastNameE) AS edit_name,
   b.group_position,
   b.group_text,
   b.display_profile,
   b.seq_no,
   b.record_name,
   b.record_count
FROM 
    OP_DOC_CTRL.dbo.organization_master a
LEFT JOIN 
(
   SELECT 
       b.id,
       b.id_organization,
       b.id_group,
       b.en_and_cc,
       ISNULL(e.FirstNameE + ' ' + e.LastNameE, '') AS record_name,
       c.name AS group_position,
       c.[text] AS group_text,
       c.display_profile,
       c.seq_no,
       1 AS record_count
   FROM 
       OP_DOC_CTRL.dbo.organization_detail b
   LEFT JOIN 
       (SELECT id, name, [text], display_profile, seq_no, mode FROM OP_DOC_CTRL.dbo.organization_group) c 
       ON c.id = b.id_group
   LEFT JOIN 
       (SELECT UserID, FirstNameE, LastNameE FROM UserCenter.dbo.tblUsers WHERE UserID IS NOT NULL AND LoginFlag = 'T') e 
       ON e.UserID = b.en_and_cc
   WHERE 
       c.mode = 'A'
   UNION ALL
   SELECT 
       b.id,
       b.id_organization,
       b.id_group,
       b.en_and_cc,
       '' AS record_name,
       c.name AS group_position,
       c.[text] AS group_text,
       c.display_profile,
       c.seq_no,
       (SELECT COUNT(*) FROM UserCenter.dbo.tblUsers e WHERE UserID IS NOT NULL AND e.LoginFlag = 'T' AND e.Department LIKE '%' + b.en_and_cc + '%') AS record_count
   FROM  
       OP_DOC_CTRL.dbo.organization_detail b
   LEFT JOIN 
       (SELECT id, name, [text], display_profile, seq_no, mode FROM OP_DOC_CTRL.dbo.organization_group) c 
       ON c.id = b.id_group
   WHERE 
       c.mode = 'M'
) b 
ON b.id_organization = a.id
LEFT JOIN 
   (SELECT UserID, FirstNameE, LastNameE FROM UserCenter.dbo.tblUsers WHERE UserID IS NOT NULL) d 
   ON d.UserID = a.edit_by
WHERE 
    a.id IS NOT NULL
ORDER BY 
    a.id, b.seq_no;
```

### จุดสำคัญในโค้ดนี้:
1. **UNION ALL**: ใช้ `UNION ALL` แทน `UNION` เพื่อรวมผลลัพธ์ของสอง `SELECT` query. `UNION ALL` จะรวมทุกแถว รวมถึงแถวที่ซ้ำกัน ซึ่งช่วยลดการคำนวณและทำให้ query เร็วขึ้น.
2. **โครงสร้างที่ตรงกัน**: ทำให้แน่ใจว่าผลลัพธ์ของทั้งสอง `SELECT` query มีโครงสร้างที่ตรงกัน โดยกำหนดคอลัมน์ให้ตรงกันทั้งชื่อและประเภทข้อมูล.
3. **ISNULL**: ใช้ `ISNULL` เพื่อกำหนดค่า default ให้กับ `record_name` ในกรณีที่ไม่มีชื่อใน subquery แรก.

ลองใช้ query ที่ปรับปรุงใหม่นี้และดูผลลัพธ์.