-- ขั้นตอนที่ 1: สร้างและใส่ข้อมูลในตาราง
-- 1.สร้างฐานข้อมูล
CREATE DATABASE school;

-- 2.ใช้ฐานข้อมูลที่สร้างขึ้น
USE school;

-- 3.สร้างตารางนักเรียน (students)
CREATE TABLE students (
    id INT PRIMARY KEY,
    student_id INT ,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    grade_level INT
);

-- 4.ใส่ข้อมูลในตารางนักเรียน
INSERT INTO students (student_id, first_name, last_name, grade_level) VALUES
(1, 'John', 'Doe', 10),
(2, 'Jane', 'Doe', 10),
(3, 'Jim', 'Beam', 11),
(4, 'Jack', 'Daniels', 12),
(5, 'John', 'Doe', 12);


-- ขั้นตอนที่ 2: การใช้คำสั่ง SELECT พร้อมกับ DISTINCT
-- การเลือกข้อมูลทั้งหมด
-- ก่อนที่เราจะใช้ DISTINCT เรามาดูการดึงข้อมูลทั้งหมดจากตารางก่อน:
SELECT * FROM students;
-- ผลลัพธ์:
-- | student_id | first_name | last_name | grade_level |
-- |------------|------------|-----------|-------------|
-- | 1          | John       | Doe       | 10          |
-- | 2          | Jane       | Doe       | 10          |
-- | 3          | Jim        | Beam      | 11          |
-- | 4          | Jack       | Daniels   | 12          |
-- | 5          | John       | Doe       | 12          |
-- การเลือกข้อมูลไม่ซ้ำกัน
-- ต่อไปเราจะใช้ DISTINCT เพื่อดึงข้อมูลที่ไม่ซ้ำกัน:

-- ดึงระดับชั้นที่ไม่ซ้ำกัน
SELECT DISTINCT grade_level FROM students;
-- | grade_level |
-- |-------------|
-- | 10          |
-- | 11          |
-- | 12          |
-- ผลลัพธ์:
-- | first_name |
-- |------------|
-- | John       |
-- | Jane       |
-- | Jim        |
-- | Jack       |

-- ขั้นตอนที่ 3: ตัวอย่างการใช้งาน DISTINCT ในคำสั่งที่ซับซ้อนขึ้น
-- การรวมคอลัมน์หลายคอลัมน์
-- ถ้าเราต้องการดึงข้อมูลที่ไม่ซ้ำกันโดยดูจากหลายคอลัมน์ เราก็สามารถทำได้เช่นกัน:
SELECT DISTINCT first_name, last_name FROM students;
-- ผลลัพธ์:
-- | first_name | last_name |
-- |------------|-----------|
-- | John       | Doe       |
-- | Jane       | Doe       |
-- | Jim        | Beam      |
-- | Jack       | Daniels   |

-- ขั้นตอนที่ 4: สรุป
-- DISTINCT ใช้เพื่อดึงข้อมูลที่ไม่ซ้ำกันในคอลัมน์ที่ต้องการ
-- สามารถใช้กับคอลัมน์เดียวหรือหลายคอลัมน์ได้
-- ช่วยให้ผลลัพธ์มีความเรียบร้อยและไม่ซ้ำซ้อน
-- การใช้ DISTINCT เป็นวิธีที่ง่ายและมีประสิทธิภาพในการทำให้ข้อมูลของคุณมีความชัดเจนและลดการซ้ำซ้อนของข้อมูลที่ไม่จำเป็นในผลลัพธ์ของการสืบค้น (query) ของคุณ