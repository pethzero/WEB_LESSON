คำสั่ง `LIKE` ใน SQL ใช้สำหรับการค้นหาข้อความในคอลัมน์ที่ตรงกับรูปแบบที่กำหนด โดยสามารถใช้เครื่องหมายพิเศษต่าง ๆ เพื่อกำหนดรูปแบบการค้นหาได้

### รูปแบบการใช้งาน `LIKE`

- `%` แทนที่จำนวนอักขระใด ๆ (สามารถเป็น 0 อักขระหรือมากกว่า)
- `_` แทนที่หนึ่งอักขระใด ๆ

### ตัวอย่างการใช้งาน

#### ค้นหาข้อความที่ขึ้นต้นด้วยตัวอักษรหรือคำที่กำหนด

```sql
SELECT * FROM Customers WHERE CustomerName LIKE 'A%';
```
ในตัวอย่างนี้จะค้นหาลูกค้าที่มีชื่อลูกค้า (`CustomerName`) เริ่มต้นด้วยตัวอักษร "A"

#### ค้นหาข้อความที่ลงท้ายด้วยตัวอักษรหรือคำที่กำหนด

```sql
SELECT * FROM Customers WHERE CustomerName LIKE '%son';
```
ในตัวอย่างนี้จะค้นหาลูกค้าที่มีชื่อลูกค้า (`CustomerName`) ลงท้ายด้วย "son"

#### ค้นหาข้อความที่มีตัวอักษรหรือคำที่กำหนดอยู่ภายใน

```sql
SELECT * FROM Customers WHERE CustomerName LIKE '%ann%';
```
ในตัวอย่างนี้จะค้นหาลูกค้าที่มีชื่อลูกค้า (`CustomerName`) ที่มี "ann" อยู่ในชื่อ

#### ค้นหาข้อความที่มีอักขระบางตัวตรงกับตำแหน่งที่กำหนด

```sql
SELECT * FROM Customers WHERE CustomerName LIKE '_a%';
```
ในตัวอย่างนี้จะค้นหาลูกค้าที่มีชื่อลูกค้า (`CustomerName`) มีตัวอักษรที่สองเป็น "a" โดยตัวอักษรตัวแรกสามารถเป็นอะไรก็ได้

#### การใช้หลายเงื่อนไขพร้อมกัน

```sql
SELECT * FROM Customers WHERE CustomerName LIKE 'A%' OR CustomerName LIKE '%son';
```
ในตัวอย่างนี้จะค้นหาลูกค้าที่มีชื่อลูกค้า (`CustomerName`) เริ่มต้นด้วยตัวอักษร "A" หรือ ลงท้ายด้วย "son"

#### ค้นหาข้อความที่มีอักขระหนึ่งในชุดที่กำหนด

```sql
SELECT * FROM Customers WHERE CustomerName LIKE '[A-C]%';
```
ในตัวอย่างนี้จะค้นหาลูกค้าที่มีชื่อลูกค้า (`CustomerName`) เริ่มต้นด้วยตัวอักษร "A", "B" หรือ "C"

#### ค้นหาข้อความที่มีอักขระหนึ่งในช่วงที่กำหนด

```sql
SELECT * FROM Customers WHERE CustomerName LIKE 'm_n%';
```
ในตัวอย่างนี้จะค้นหาลูกค้าที่มีชื่อลูกค้า (`CustomerName`) ที่มี "m" เป็นตัวอักษรแรก, "n" เป็นตัวอักษรที่สาม และมีตัวอักษรใด ๆ ที่ตำแหน่งที่สอง

### การใช้ `LIKE` ในคำสั่ง `UPDATE`

```sql
UPDATE Customers SET ContactName = 'Updated Name' WHERE ContactName LIKE '%Smith';
```
ในตัวอย่างนี้จะทำการอัพเดตชื่อผู้ติดต่อ (`ContactName`) เป็น 'Updated Name' สำหรับลูกค้าที่มีผู้ติดต่อ (`ContactName`) ลงท้ายด้วย "Smith"

### การใช้ `LIKE` ในคำสั่ง `DELETE`

```sql
DELETE FROM Customers WHERE CustomerName LIKE '%Test%';
```
ในตัวอย่างนี้จะทำการลบลูกค้าที่มีชื่อลูกค้า (`CustomerName`) มีคำว่า "Test" อยู่ในชื่อ

การใช้ `LIKE` ช่วยให้คุณสามารถค้นหาและจัดการข้อมูลในตารางฐานข้อมูลได้อย่างยืดหยุ่นและมีประสิทธิภาพตามรูปแบบที่กำหนด