-- ติดตั้ง 

-- npm install --save typescript
-- npm install xlsx --save


แปลง npx tsc export_excel.ts และ npx tsc app.ts ให้เป็น .js




ยังไม่สมบรูณ์
@echo off

REM คอมไพล์ TypeScript ทั้งสองไฟล์ไปยังโฟลเดอร์ app
echo Compiling export_excel.ts...
npx tsc app\export_excel.ts
if %errorlevel% neq 0 (
    echo Failed to compile export_excel.ts
    pause
    exit /b
)

echo Compiling app.ts...
npx tsc app\app.ts
if %errorlevel% neq 0 (
    echo Failed to compile app.ts
    pause
    exit /b
)

REM ตรวจสอบว่ามีไฟล์ .js ในโฟลเดอร์ app
if exist app\*.js (
    echo Moving compiled JavaScript files to dist...
    move app\*.js dist\
) else (
    echo No JavaScript files were created in app.
    pause
    exit /b
)

REM รันไฟล์ app.js เพื่อสร้าง example.xlsx
echo Running app.js...
node dist\app.js
if %errorlevel% neq 0 (
    echo Failed to run app.js
    pause
    exit /b
)

echo Finished running app.js and generating example.xlsx
pause
