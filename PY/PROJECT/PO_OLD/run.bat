@echo off
:menu
cls
echo.
echo ==== Online Store ====
echo.
echo 1. Create New Product
echo 2. Create New Customer
echo 3. Create New Order
echo 4. Exit Program
echo.
set /p choice=Please choose an option (1-4): 

if %choice% == 1 (
    python scripts/create_product.py
    pause
    goto menu
)
if %choice% == 2 (
    python scripts/create_customer.py
    pause
    goto menu
)
if %choice% == 3 (
    python scripts/create_order.py
    pause
    goto menu
)
if %choice% == 4 (
    exit
)
goto menu
