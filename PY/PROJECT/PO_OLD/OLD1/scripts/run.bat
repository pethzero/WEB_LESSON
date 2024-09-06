@echo off
setlocal

:menu
cls
echo ==============================
echo  ระบบจัดการร้านค้า
echo ==============================
echo 1. สร้างสินค้าใหม่
echo 2. สร้างลูกค้าใหม่
echo 3. สร้างคำสั่งซื้อใหม่
echo 4. แสดงสินค้าทั้งหมด
echo 5. แสดงลูกค้าทั้งหมด
echo 6. แสดงคำสั่งซื้อทั้งหมด
echo 7. ออกจากระบบ
echo ==============================
set /p choice="เลือกเมนูที่ต้องการ: "

if "%choice%"=="1" goto create_product
if "%choice%"=="2" goto create_customer
if "%choice%"=="3" goto create_order
if "%choice%"=="4" goto show_products
if "%choice%"=="5" goto show_customers
if "%choice%"=="6" goto show_orders
if "%choice%"=="7" goto exit

:create_product
python scripts\create_product.py
goto menu

:create_customer
python scripts\create_customer.py
goto menu

:create_order
python scripts\create_order.py
goto menu

:show_products
python scripts\main.py show_products
pause
goto menu

:show_customers
python scripts\main.py show_customers
pause
goto menu

:show_orders
python scripts\main.py show_orders
pause
goto menu

:exit
exit

endlocal
