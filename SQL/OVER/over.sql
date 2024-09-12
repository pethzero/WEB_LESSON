ถ้าคุณต้องการเพิ่มการนับลำดับของทุกแถวในตารางทั้งหมด โดยให้เลขลำดับเริ่มต้นที่ 1 ไปจนถึงจำนวนแถวสุดท้าย (แบบต่อเนื่องโดยไม่แบ่งกลุ่มตาม `Department`) คุณสามารถใช้ `ROW_NUMBER()` โดยไม่ต้องใช้ `PARTITION BY` ได้ครับ

### ตัวอย่างตาราง `Employees` เดิม:

| EmployeeID | Name    | Department | Salary |
|------------|---------|------------|--------|
| 1          | Alice   | HR         | 50000  |
| 2          | Bob     | IT         | 60000  |
| 3          | Charlie | IT         | 55000  |
| 4          | David   | HR         | 52000  |
| 5          | Eve     | IT         | 70000  |
| 6          | Frank   | Finance    | 48000  |
| 7          | Grace   | Finance    | 53000  |

### SQL Query:

```sql
SELECT 
    EmployeeID, 
    Name, 
    Department, 
    Salary, 
    ROW_NUMBER() OVER (ORDER BY EmployeeID) AS RowNum
FROM 
    Employees
ORDER BY 
    RowNum;
```

### ผลลัพธ์:

| EmployeeID | Name    | Department | Salary | RowNum |
|------------|---------|------------|--------|--------|
| 1          | Alice   | HR         | 50000  | 1      |
| 2          | Bob     | IT         | 60000  | 2      |
| 3          | Charlie | IT         | 55000  | 3      |
| 4          | David   | HR         | 52000  | 4      |
| 5          | Eve     | IT         | 70000  | 5      |
| 6          | Frank   | Finance    | 48000  | 6      |
| 7          | Grace   | Finance    | 53000  | 7      |

### อธิบาย:

- **`ROW_NUMBER() OVER (ORDER BY EmployeeID)`**: ฟังก์ชัน `ROW_NUMBER()` จะสร้างเลขลำดับ (`RowNum`) สำหรับทุกแถวในตารางตามลำดับ `EmployeeID` จาก 1 ถึงจำนวนแถวสุดท้าย.
- ในกรณีนี้ ไม่ได้ใช้ `PARTITION BY` เพราะเราต้องการให้เลขลำดับเป็นแบบต่อเนื่องโดยไม่แบ่งกลุ่ม.
- **`ORDER BY EmployeeID`**: ในตัวอย่างนี้ ใช้ `EmployeeID` เพื่อกำหนดลำดับของแถว. คุณสามารถใช้คอลัมน์อื่นที่เหมาะสมเพื่อจัดเรียงลำดับที่ต้องการ.

### หมายเหตุ:

- คุณสามารถปรับ `ORDER BY` ใน `ROW_NUMBER()` เพื่อจัดลำดับข้อมูลตามคอลัมน์อื่นๆ ได้ตามต้องการ เช่น ตาม `Salary`, `Name`, หรือ `Department`.

นี่เป็นวิธีการเพิ่มลำดับที่ต่อเนื่องให้กับข้อมูลในตารางทั้งหมดอย่างง่ายๆ ครับ!