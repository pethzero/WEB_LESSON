@echo off
setlocal

:: Define database connection parameters
set DB_SERVER=your_server_name
set DB_NAME=your_database_name
set DB_USER=your_username
set DB_PASSWORD=your_password

:: Path to the SQL file
set SQL_FILE=create_and_populate_db.sql

:: Execute the SQL file using sqlcmd
sqlcmd -S %DB_SERVER% -d %DB_NAME% -U %DB_USER% -P %DB_PASSWORD% -i %SQL_FILE%

:: End script
endlocal
