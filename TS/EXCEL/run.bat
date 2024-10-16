@echo off

REM รันไฟล์ app.js เพื่อสร้าง example.xlsx
echo Running app.js...
node dist\app.js
if %errorlevel% neq 0 (
    echo Failed to run app.js
    pause
    exit /b
)
pause
