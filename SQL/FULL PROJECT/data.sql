-- Combine data from multiple sources
WITH CombinedData AS (
    SELECT 
        SUBSTRING(a.fg_material_no, 1, 3) AS customer,
        a.fg_material_no,
        a.material_no,
        a.wo_pl_order,
        a.wo_pl_status,
        a.wo_pl_qty,
        a.cmp_kit_shock,
        a.cmp_kit_item,
        b.cmp_focus,
        a.item_no,
        a.start_date,
        ISNULL(c.mat_group, NULL) AS mat_group,
        ISNULL(c.mat_no, NULL) AS mat_no,
        ISNULL(c.description, NULL) AS description,
        ISNULL(c.short_qty, NULL) AS short_qty,
        ISNULL(c.purch_doc, NULL) AS purch_doc,
        ISNULL(c.item, NULL) AS item,
        ISNULL(c.qty, NULL) AS qty,
        ISNULL(c.conf_d_pl_gr_dt, NULL) AS conf_d_pl_gr_dt,
        ISNULL(c.vendor_code, NULL) AS vendor_code,
        ISNULL(c.vendor_name, NULL) AS vendor_name,
        ISNULL(h.avg_sale_price, 0) * ISNULL(a.wo_pl_qty, 0) AS revenue
    FROM OP_DOC_CTRL.dbo.mat_ctrl_mps_routing a
    LEFT JOIN  
    (
        SELECT 
            fg_material_no, 
            SUM(cmp_kit_shock) AS cmp_focus
        FROM OP_DOC_CTRL.dbo.mat_ctrl_mps_routing
        WHERE plant LIKE 'SVI2%'
        GROUP BY fg_material_no
    ) b ON a.fg_material_no = b.fg_material_no 
    LEFT JOIN 
    (
        SELECT
            a.fg_sub_mat AS material_no, 
            a.prod_order,
            a.plan_order,
            a.mat_group,
            a.mat_no,
            a.description,
            a.short_qty,
            a.purch_doc,
            a.item,
            a.qty,
            a.conf_d_pl_gr_dt,
            a.vendor_code,
            a.vendor_name
        FROM OP_DOC_CTRL.dbo.mat_ctrl_zrmm a
        WHERE a.mat_group NOT IN ('65P','67B','50B','50D','52D','63M','65','65B','65P','65U','65W','67B','67P','67T','29W001','01E','01R','01S','70B','70P','70W','76M')
        AND NOT (a.matpgr LIKE '6%' AND a.mat_group = '01P')
    ) c ON c.prod_order = a.wo_pl_order
    LEFT JOIN (
        SELECT 
            fg_material_no,
            AVG(sale_price) AS avg_sale_price
        FROM OP_DOC_CTRL.dbo.mat_ctrl_mps_routing
        WHERE sale_no IS NOT NULL
        GROUP BY fg_material_no
    ) h ON h.fg_material_no = a.fg_material_no 
    WHERE 
        b.cmp_focus >= 1 
        AND b.cmp_focus <= 5 
        AND a.wo_pl_order IS NOT NULL 
        AND a.cmp_kit_shock > 0 
        AND a.wo_pl_status <> 'PLAN'
    UNION 
    SELECT 
        SUBSTRING(a.fg_material_no, 1, 3) AS customer,
        a.fg_material_no,
        a.material_no,
        a.wo_pl_order,
        a.wo_pl_status,
        a.wo_pl_qty,
        a.cmp_kit_shock,
        a.cmp_kit_item,
        b.cmp_focus,
        a.item_no,
        a.start_date,
        ISNULL(c.mat_group, NULL) AS mat_group,
        ISNULL(c.mat_no, NULL) AS mat_no,
        ISNULL(c.description, NULL) AS description,
        ISNULL(c.short_qty, NULL) AS short_qty,
        ISNULL(c.purch_doc, NULL) AS purch_doc,
        ISNULL(c.item, NULL) AS item,
        ISNULL(c.qty, NULL) AS qty,
        ISNULL(c.conf_d_pl_gr_dt, NULL) AS conf_d_pl_gr_dt,
        ISNULL(c.vendor_code, NULL) AS vendor_code,
        ISNULL(c.vendor_name, NULL) AS vendor_name,
        ISNULL(h.avg_sale_price, 0) * ISNULL(a.wo_pl_qty, 0) AS revenue
    FROM OP_DOC_CTRL.dbo.mat_ctrl_mps_routing a
    LEFT JOIN  
    (
        SELECT 
            fg_material_no, 
            SUM(cmp_kit_shock) AS cmp_focus
        FROM OP_DOC_CTRL.dbo.mat_ctrl_mps_routing
        WHERE plant LIKE 'SVI2%'
        GROUP BY fg_material_no
    ) b ON a.fg_material_no = b.fg_material_no 
    LEFT JOIN 
    (
        SELECT
            a.fg_sub_mat AS material_no, 
            a.prod_order,
            a.plan_order,
            a.mat_group,
            a.mat_no,
            a.description,
            a.short_qty,
            a.purch_doc,
            a.item,
            a.qty,
            a.conf_d_pl_gr_dt,
            a.vendor_code,
            a.vendor_name
        FROM OP_DOC_CTRL.dbo.mat_ctrl_zrmm a
        WHERE a.mat_group NOT IN ('65P','67B','50B','50D','52D','63M','65','65B','65P','65U','65W','67B','67P','67T','29W001','01E','01R','01S','70B','70P','70W','76M')
        AND NOT (a.matpgr LIKE '6%' AND a.mat_group = '01P')
    ) c ON c.plan_order = a.wo_pl_order 
    LEFT JOIN (
        SELECT 
            fg_material_no,
            AVG(sale_price) AS avg_sale_price
        FROM OP_DOC_CTRL.dbo.mat_ctrl_mps_routing
        WHERE sale_no IS NOT NULL
        GROUP BY fg_material_no
    ) h ON h.fg_material_no = a.fg_material_no 
    WHERE 
        b.cmp_focus >= 1 
        AND b.cmp_focus <= 5 
        AND a.wo_pl_order IS NOT NULL 
        AND a.cmp_kit_shock > 0 
        AND a.wo_pl_status = 'PLAN'
),
-- Get unique revenue for each fg_material_no and wo_pl_order
UniqueRevenue AS (
    SELECT DISTINCT
        fg_material_no,
        wo_pl_order,
        revenue
    FROM CombinedData
),
-- Aggregate total revenue by fg_material_no
RevenueTotals AS (
    SELECT 
        fg_material_no,
        SUM(revenue) AS total_revenue
    FROM UniqueRevenue
    GROUP BY fg_material_no
),
-- Count unique mat_no for each fg_material_no
UniqueMat_no AS (
    SELECT
        fg_material_no,
        COUNT(DISTINCT mat_no) AS unique_mat_count
    FROM CombinedData
    GROUP BY fg_material_no
),
-- Calculate total revenue across all fg_material_no
TotalFGRevenue AS (
    SELECT SUM(total_revenue) AS total_all_revenue
    FROM RevenueTotals
),
-- Count total unique fg_material_no
TotalFGCount AS (
    SELECT COUNT(DISTINCT fg_material_no) AS total_all_fg_material_no
    FROM CombinedData
)
-- Final result with row numbers and joined aggregates
SELECT
    cd.*,
    rt.total_revenue,
    tfg.total_all_fg_material_no,
    tfr.total_all_revenue,
    um.unique_mat_count,
    ROW_NUMBER() OVER (PARTITION BY cd.fg_material_no ORDER BY cd.fg_material_no) AS row_num,
    ROW_NUMBER() OVER (PARTITION BY cd.fg_material_no, cd.wo_pl_order ORDER BY cd.fg_material_no, cd.wo_pl_order) AS row_dt
FROM CombinedData cd
LEFT JOIN RevenueTotals rt ON cd.fg_material_no = rt.fg_material_no
LEFT JOIN UniqueMat_no um ON cd.fg_material_no = um.fg_material_no
CROSS JOIN TotalFGCount tfg
CROSS JOIN TotalFGRevenue tfr
ORDER BY
    rt.total_revenue DESC, cd.fg_material_no;
----------------------------------------------
CREATE TABLE OP_DOC_CTRL.dbo.mat_ctrl_mps_routing (
    fg_material_no VARCHAR(20),
    material_no VARCHAR(20),
    wo_pl_order VARCHAR(20),
    wo_pl_status VARCHAR(10),
    wo_pl_qty DECIMAL(18,2),
    cmp_kit_shock DECIMAL(18,2),
    cmp_kit_item DECIMAL(18,2),
    plant VARCHAR(20),
    sale_price DECIMAL(18,2),
    item_no VARCHAR(20),
    start_date DATE
);
----------------------------------------------
CREATE TABLE OP_DOC_CTRL.dbo.mat_ctrl_zrmm (
    fg_sub_mat VARCHAR(20),
    prod_order VARCHAR(20),
    plan_order VARCHAR(20),
    mat_group VARCHAR(10),
    mat_no VARCHAR(20),
    description VARCHAR(255),
    short_qty DECIMAL(18,2),
    purch_doc VARCHAR(20),
    item VARCHAR(20),
    qty DECIMAL(18,2),
    conf_d_pl_gr_dt DATE,
    vendor_code VARCHAR(20),
    vendor_name VARCHAR(100),
    matpgr VARCHAR(10)
);
----------------------------------------------
-- Insert example data into mat_ctrl_mps_routing
INSERT INTO OP_DOC_CTRL.dbo.mat_ctrl_mps_routing (fg_material_no, material_no, wo_pl_order, wo_pl_status, wo_pl_qty, cmp_kit_shock, cmp_kit_item, plant, sale_price, item_no, start_date)
VALUES 
('FG001', 'MAT001', 'ORD001', 'PLAN', 100, 50, 30, 'SVI2', 20.50, 'ITEM001', '2024-09-01'),
('FG002', 'MAT002', 'ORD002', 'RELEASE', 200, 75, 40, 'SVI2', 15.75, 'ITEM002', '2024-09-02');

-- Insert example data into mat_ctrl_zrmm
INSERT INTO OP_DOC_CTRL.dbo.mat_ctrl_zrmm (fg_sub_mat, prod_order, plan_order, mat_group, mat_no, description, short_qty, purch_doc, item, qty, conf_d_pl_gr_dt, vendor_code, vendor_name, matpgr)
VALUES 
('MAT001', 'ORD001', 'PLAN001', '01A', 'MAT01', 'Material Description 1', 10, 'P001', 'ITEM01', 100, '2024-09-15', 'V001', 'Vendor 1', '01'),
('MAT002', 'ORD002', 'PLAN002', '01B', 'MAT02', 'Material Description 2', 20, 'P002', 'ITEM02', 200, '2024-09-16', 'V002', 'Vendor 2', '02');
