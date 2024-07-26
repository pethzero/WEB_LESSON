SELECT 
    ROW_NUMBER() OVER(ORDER BY id) AS row_number,
    id,
    name,
    department
FROM 
    employees



SELECT *
FROM (
    SELECT 
        ROW_NUMBER() OVER(ORDER BY a.id) AS row_no,
        a.*
    FROM 
        [PLAN].dbo.build_plan_material_master a
) AS subquery
WHERE row_no > 0 AND row_no <= 100
