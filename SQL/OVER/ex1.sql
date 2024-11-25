เพื่อแสดงการใช้งานฟังก์ชัน `ROW_NUMBER()` ใน SQL เราสามารถสร้างตารางที่แบ่งแยกข้อมูลเป็นกลุ่ม (Partition) หรือเรียงลำดับข้อมูลในแต่ละกลุ่ม ตัวอย่างต่อไปนี้จะแสดงการใช้ `ROW_NUMBER()` ในสองกรณี คือการแบ่งกลุ่มโดยใช้ `PARTITION BY` และการเรียงลำดับด้วย `ORDER BY`:

สมมติว่าเรามีตาราง `Employees` ที่มีข้อมูลดังนี้:

| EmployeeID | Department | Name        | Salary |
|------------|------------|-------------|--------|
| 1          | HR         | Alice       | 50000  |
| 2          | IT         | Bob         | 55000  |
| 3          | HR         | Charlie     | 52000  |
| 4          | IT         | Dave        | 58000  |
| 5          | Sales      | Eva         | 49000  |
| 6          | HR         | Frank       | 51000  |
| 7          | IT         | Grace       | 60000  |
| 8          | Sales      | Helen       | 47000  |

### ตัวอย่างที่ 1: ใช้ `ROW_NUMBER()` ร่วมกับ `PARTITION BY` และ `ORDER BY`
ในตัวอย่างนี้ เราจะใช้ `ROW_NUMBER()` เพื่อกำหนดลำดับของพนักงานในแต่ละแผนกตามเงินเดือน โดยเรียงจากสูงไปต่ำ:

```sql
SELECT 
    EmployeeID,
    Department,
    Name,
    Salary,
    ROW_NUMBER() OVER (PARTITION BY Department ORDER BY Salary DESC) AS RowNum
FROM 
    Employees;
```

ผลลัพธ์ที่ได้จะเป็นตารางที่แสดงลำดับพนักงานตามเงินเดือนในแต่ละแผนก:

| EmployeeID | Department | Name    | Salary | RowNum |
|------------|------------|---------|--------|--------|
| 1          | HR         | Alice   | 50000  | 1      |
| 3          | HR         | Charlie | 52000  | 2      |
| 6          | HR         | Frank   | 51000  | 3      |
| 7          | IT         | Grace   | 60000  | 1      |
| 4          | IT         | Dave    | 58000  | 2      |
| 2          | IT         | Bob     | 55000  | 3      |
| 5          | Sales      | Eva     | 49000  | 1      |
| 8          | Sales      | Helen   | 47000  | 2      |

### ตัวอย่างที่ 2: ใช้ `ROW_NUMBER()` ร่วมกับ `ORDER BY` (โดยไม่ใช้ `PARTITION BY`)
หากเราต้องการให้ลำดับโดยรวมตามเงินเดือนของพนักงานทั้งหมดในบริษัทโดยไม่แบ่งกลุ่ม สามารถทำได้ดังนี้:

```sql
SELECT 
    EmployeeID,
    Department,
    Name,
    Salary,
    ROW_NUMBER() OVER (ORDER BY Salary DESC) AS RowNum
FROM 
    Employees;
```

ผลลัพธ์ที่ได้คือ:

| EmployeeID | Department | Name    | Salary | RowNum |
|------------|------------|---------|--------|--------|
| 7          | IT         | Grace   | 60000  | 1      |
| 4          | IT         | Dave    | 58000  | 2      |
| 2          | IT         | Bob     | 55000  | 3      |
| 3          | HR         | Charlie | 52000  | 4      |
| 6          | HR         | Frank   | 51000  | 5      |
| 1          | HR         | Alice   | 50000  | 6      |
| 5          | Sales      | Eva     | 49000  | 7      |
| 8          | Sales      | Helen   | 47000  | 8      |

ในกรณีนี้ `ROW_NUMBER()` จะทำงานโดยการให้ลำดับทั้งหมดโดยเรียงจากเงินเดือนสูงไปต่ำ