ถ้าคุณต้องการให้ทั้ง `RowNum` และ `RowNo` ได้รับการจัดเรียงใหม่ตามลำดับที่คำนวณจาก `RowNum`, คุณสามารถทำได้โดยการใช้ `ROW_NUMBER()` ซ้อนกันใน CTE (Common Table Expression) หรือ Subquery

นี่คือตัวอย่างของการทำเช่นนั้น:

```sql
WITH NumberedEmployees AS (
    SELECT 
        EmployeeID, 
        Name, 
        Department, 
        Salary, 
        ROW_NUMBER() OVER (PARTITION BY Department ORDER BY Salary DESC) AS RowNum,
        ROW_NUMBER() OVER (ORDER BY EmployeeID) AS RowNo
    FROM 
        Employees
),
OrderedEmployees AS (
    SELECT 
        EmployeeID, 
        Name, 
        Department, 
        Salary, 
        RowNum, 
        RowNo,
        ROW_NUMBER() OVER (ORDER BY RowNum, RowNo) AS FinalRowNum
    FROM 
        NumberedEmployees
)
SELECT 
    EmployeeID, 
    Name, 
    Department, 
    Salary, 
    RowNum, 
    RowNo,
    FinalRowNum
FROM 
    OrderedEmployees
ORDER BY 
    FinalRowNum;
```

### การทำงานของ Query นี้:

1. **CTE `NumberedEmployees`**:
   - คำนวณ `RowNum` ตามแผนก (`Department`) โดยเรียงตามเงินเดือน (`Salary`).
   - คำนวณ `RowNo` ตาม `EmployeeID`.

2. **CTE `OrderedEmployees`**:
   - คำนวณ `FinalRowNum` โดยใช้ `ROW_NUMBER()` เพื่อจัดลำดับตาม `RowNum` และ `RowNo`.

3. **ผลลัพธ์**:
   - ดึงข้อมูลจาก `OrderedEmployees` และจัดเรียงลำดับตาม `FinalRowNum`.

### ผลลัพธ์ที่คาดหวัง:

```sql
EmployeeID | Name    | Department | Salary | RowNum | RowNo | FinalRowNum
-----------------------------------------------------------------------
4          | David   | HR         | 52000  | 1      | 4     | 1
1          | Alice   | HR         | 50000  | 2      | 1     | 2
5          | Eve     | IT         | 70000  | 1      | 5     | 3
2          | Bob     | IT         | 60000  | 2      | 2     | 4
3          | Charlie | IT         | 55000  | 3      | 3     | 5
7          | Grace   | Finance    | 53000  | 1      | 7     | 6
6          | Frank   | Finance    | 48000  | 2      | 6     | 7
```

ในตัวอย่างนี้:

- `FinalRowNum` จะเป็นลำดับที่จัดเรียงตาม `RowNum` และ `RowNo`, โดย `RowNum` เป็นลำดับหลัก.
- ผลลัพธ์จะถูกจัดเรียงตาม `FinalRowNum`.

หวังว่านี่จะช่วยให้คุณเข้าใจการจัดเรียงข้อมูลได้ดีขึ้นครับ! ถ้ามีคำถามเพิ่มเติมหรือข้อสงสัยอื่น ๆ ยินดีให้ความช่วยเหลือครับ