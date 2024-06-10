-- ขั้นตอนที่ 1: สร้างและใส่ข้อมูลในตาราง
-- สมมุติว่าเรามีตารางนักเรียน (students) ดังนี้:

CREATE TABLE students (
    student_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    grade_level INT
);

INSERT INTO students (student_id, first_name, last_name, grade_level) VALUES
(1, 'John', 'Doe', 10),
(2, 'Jane', 'Doe', 10),
(3, 'Jim', 'Beam', 11),
(4, 'Jack', 'Daniels', 12),
(5, 'John', 'Doe', 12);


SELECT * FROM students;
-- ผลลัพธ์:
-- | student_id | first_name | last_name | grade_level |
-- |------------|------------|-----------|-------------|
-- | 1          | John       | Doe       | 10          |
-- | 2          | Jane       | Doe       | 10          |
-- | 3          | Jim        | Beam      | 11          |
-- | 4          | Jack       | Daniels   | 12          |
-- | 5          | John       | Doe       | 12          |

-- ขั้นตอนที่ 2: การใช้ GROUP BY
-- การใช้ GROUP BY เพื่อจัดกลุ่มข้อมูล
-- คำสั่ง GROUP BY จะจัดกลุ่มข้อมูลตามคอลัมน์ที่เราระบุ ลองดูตัวอย่างการใช้งาน:

-- ตัวอย่าง: *********************การนับจำนวนนักเรียนในแต่ละชั้น*********************

SELECT grade_level, COUNT(*) AS student_count
FROM students
GROUP BY grade_level;

-- | grade_level | student_count |
-- |-------------|---------------|
-- | 10          | 2             |
-- | 11          | 1             |
-- | 12          | 2             |

-- การใช้ GROUP BY ร่วมกับ DISTINCT
-- ตัวอย่าง: *********************นับจำนวนชื่อที่ไม่ซ้ำกันในแต่ละชั้น*********************

SELECT grade_level, COUNT(DISTINCT first_name) AS unique_first_name_count
FROM students
GROUP BY grade_level;
-- | grade_level | unique_first_name_count |
-- |-------------|--------------------------|
-- | 10          | 2                        |
-- | 11          | 1                        |
-- | 12          | 1                        |


-- ขั้นตอนที่ 3: การรวมหลายคอลัมน์ในการจัดกลุ่ม
-- ตัวอย่าง: ดึงข้อมูลชื่อและนามสกุลที่ไม่ซ้ำกันในแต่ละชั้น
SELECT grade_level, first_name, last_name, COUNT(*) AS count
FROM students
GROUP BY grade_level, first_name, last_name;
-- | grade_level | first_name | last_name | count |
-- |-------------|------------|-----------|-------|
-- | 10          | John       | Doe       | 1     |
-- | 10          | Jane       | Doe       | 1     |
-- | 11          | Jim        | Beam      | 1     |
-- | 12          | Jack       | Daniels   | 1     |
-- | 12          | John       | Doe       | 1     |

-- สรุป
-- GROUP BY ใช้เพื่อจัดกลุ่มข้อมูลตามคอลัมน์ที่เราระบุ
-- DISTINCT ใช้เพื่อดึงข้อมูลที่ไม่ซ้ำกัน
-- การใช้ DISTINCT ร่วมกับ GROUP BY จะช่วยให้เราสามารถดึงข้อมูลที่ไม่ซ้ำกันในแต่ละกลุ่มได้
-- ตัวอย่างข้างต้นแสดงให้เห็นถึงวิธีการใช้ GROUP BY และ DISTINCT เพื่อจัดการและสรุปข้อมูลในฐานข้อมูล SQL