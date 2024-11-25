DECLARE @material_no NVARCHAR(30) = 'value_of_material_no';
DECLARE @wo_plan_order NVARCHAR(30) = 'value_of_wo_plan_order';
DECLARE @plant NVARCHAR(10) = 'value_of_plant';
DECLARE @wo_plan_qty INT = value_of_wo_plan_qty;
DECLARE @now DATETIME = GETDATE();

-- Check if the record exists
IF NOT EXISTS (
    SELECT 1 
    FROM mat_ctrl_abpi_log
    WHERE material_no = @material_no
      AND wo_order_no = @wo_plan_order
      AND plant = @plant
)
BEGIN
    -- Insert the new record if it does not exist
    INSERT INTO mat_ctrl_abpi_log (
        material_no, wo_order_no, plant, status, wo_order_qty, create_date
    ) VALUES (
        @material_no, @wo_plan_order, @plant, 1, @wo_plan_qty, @now
    );
END
