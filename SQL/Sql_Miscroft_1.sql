
CREATE TABLE Test_Data1_Master (
   id INT IDENTITY(1,1) PRIMARY KEY,
   Column1 NVARCHAR(100),
   Column2 NVARCHAR(100)
);

CREATE TABLE Test_Data1_Detail (
   id INT IDENTITY(1,1) PRIMARY KEY,
   MasterID INT,
   ColumnA NVARCHAR(100),
   ColumnB NVARCHAR(100)
);


--TRUNCATE TABLE Test_Data1_Master 
--TRUNCATE TABLE Test_Data1_Detail 


BEGIN TRANSACTION;

BEGIN TRY
   -- Insert into DATA1
   INSERT INTO Test_Data1_Master (column1, column2)
   VALUES ('A', 'A');

   -- Get the last inserted ID
   DECLARE @LastInsertedID INT;
   SET @LastInsertedID = SCOPE_IDENTITY();

   -- Use the inserted ID to insert into DATA2
   INSERT INTO Test_Data1_Detail (MasterID, columnA, columnB)
   VALUES (@LastInsertedID, 'valueA', 'valueB');

   -- Commit the transaction
   COMMIT TRANSACTION;
END TRY
BEGIN CATCH
   -- Rollback the transaction if any error occurs
   ROLLBACK TRANSACTION;
   -- Raise the error to the caller
   THROW;
END CATCH;



BEGIN TRANSACTION;

BEGIN TRY
    First Insert Block
   INSERT INTO Test_Data1_Master (column1, column2)
   VALUES ('A', 'A');

   DECLARE @LastInsertedID INT;
   SET @LastInsertedID = SCOPE_IDENTITY();

   INSERT INTO Test_Data1_Detail (MasterID, columnA, columnB)
   VALUES (@LastInsertedID, '1A', '1A');
	INSERT INTO Test_Data1_Detail (MasterID, columnA, columnB)
   VALUES (@LastInsertedID, '2A', '2A');
   INSERT INTO Test_Data1_Detail (MasterID, columnA, columnB)
   VALUES (@LastInsertedID, '3A', '3A');
   INSERT INTO Test_Data1_Detail (MasterID, columnA, columnB)
   VALUES (@LastInsertedID, '4A', '4A');
   INSERT INTO Test_Data1_Detail (MasterID, columnA, columnB)
   VALUES (@LastInsertedID, '5A', '5A');
   INSERT INTO Test_Data1_Detail (MasterID, columnA, columnB)
   VALUES (@LastInsertedID, '6A', '6A');
   INSERT INTO Test_Data1_Detail (MasterID, columnA, columnB)
   VALUES (@LastInsertedID, '7A', '7A');
  
    Second Insert Block
   INSERT INTO Test_Data1_Master (column1, column2)
   VALUES ('B', 'B');

   SET @LastInsertedID = SCOPE_IDENTITY();

   INSERT INTO Test_Data1_Detail (MasterID, columnA, columnB)
   VALUES (@LastInsertedID, '1B', '1B');
	 INSERT INTO Test_Data1_Detail (MasterID, columnA, columnB)
   VALUES (@LastInsertedID, '2B', '2B');
    INSERT INTO Test_Data1_Detail (MasterID, columnA, columnB)
   VALUES (@LastInsertedID, '3B', '3B');
    INSERT INTO Test_Data1_Detail (MasterID, columnA, columnB)
   VALUES (@LastInsertedID, '4B', '4B');
    INSERT INTO Test_Data1_Detail (MasterID, columnA, columnB)
   VALUES (@LastInsertedID, '5B', '5B');
    INSERT INTO Test_Data1_Detail (MasterID, columnA, columnB)
   VALUES (@LastInsertedID, '6B', '6B');
    INSERT INTO Test_Data1_Detail (MasterID, columnA, columnB)
   VALUES (@LastInsertedID, '7B', '7B');

    Commit the transaction if all inserts succeed
   COMMIT TRANSACTION;
END TRY
BEGIN CATCH
    Rollback the transaction if any error occurs
   ROLLBACK TRANSACTION;

    Capture and raise the error
   DECLARE @ErrorMessage NVARCHAR(4000);
   DECLARE @ErrorSeverity INT;
   DECLARE @ErrorState INT;

   SELECT 
       @ErrorMessage = ERROR_MESSAGE(),
       @ErrorSeverity = ERROR_SEVERITY(),
       @ErrorState = ERROR_STATE();

   RAISERROR (@ErrorMessage, @ErrorSeverity, @ErrorState);
END CATCH;

