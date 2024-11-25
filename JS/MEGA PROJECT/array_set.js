
data_main = [
    'VET01R-216630',    'VET01E-216630A',
    'VET01E-216630B',   'VET01R-216631',
    'VET01E-216631A',   'VET01P-217654',
    'VET01R-216632',    'VET01E-216632',
    'VET01P-9002111LF', 'VET01P-9002114LF',
    'VET01R-216633',    'VET01E-216633A',
    'VET01E-216633B',   'VET01E-216633C',
    'VET01R-216634',    'VET01E-216634A',
    'VET01E-216635A',   'VET01R-216635',
    'VET01R-217655',    'VET01E-217655',
    'VET01R-216636',    'VET01E-216636A',
    'VET01E-216636B',   'VET01R-216637',
    'VET01E-216637',    'VET01R-216638',
    'VET01E-216638',    'VET01R-216639',
    'VET01E-216639',    'VET01P-9002112LF',
    'VET01R-217656',    'VET01E-217656'
  ]
let format_data_sql = data_main.map(item => `'${item}'`).join(',');


let sql = `SELECT 
                    a.material_no,
                    a.plan_order AS work_order,
                    NULL AS plan_order,
                    ISNULL(a.qty, 0) - ISNULL(a.delivered_qty, 0) - ISNULL(a.scarp_qty, 0) as qty,
                    ISNULL(a.qty, 0) - ISNULL(a.delivered_qty, 0) - ISNULL(a.scarp_qty, 0) as balance,
                    a.start_date,
                    a.status,
                    SUBSTRING(a.material_no, 4, 3) AS type,
                    ISNULL(s.cal_kit,0) as cal_kit,
                    ISNULL(s.count_cal_kit,0) as count_cal_kit,
                    ISNULL(t.cal_kit,0) as cal_kit_w1,
                    ISNULL(t.count_cal_kit,0) as count_cal_kit_w1
                FROM [PLAN].dbo.prd_plan_order_new a
                LEFT JOIN (
                    SELECT
                        fg_material_no AS material_no,
                        z_prod_order,
                        z_plan_order,
                        z_orignal_qty,
                        MIN(cal_kit) AS cal_kit,
                        COUNT(*) AS count_cal_kit,
                        z_start_date
                      FROM(
                      SELECT
                            a.fg_sub_mat AS fg_material_no,
                            a.prod_order AS z_prod_order,
                            a.plan_order AS z_plan_order,
                            a.orignal_qty AS z_orignal_qty,
                            CASE
                                WHEN ISNULL(req_qty, 0) = 0 THEN NULL
                                ELSE 100 + ((ISNULL(short_qty, 0) / req_qty) * 100)
                            END AS cal_kit,
                            a.start_date AS z_start_date
                        FROM [OP_DOC_CTRL].dbo.mat_ctrl_zrmm a
                        WHERE a.plant LIKE 'SVI2%%'
                        AND a.prod_order IS NOT NULL 
                        AND a.mat_group NOT IN ('65P','67B','50B','50D','52D','63M','65','65B','65P','65U','65W','67B','67P','67T','29W001','01E','01R','01S','70B','70P','70W','76M')
                        AND NOT(a.matpgr  LIKE '6%' and a.mat_group = '01P')
                    ) Calculated
                    GROUP BY
                        fg_material_no,
                        z_prod_order,
                        z_plan_order,
                        z_orignal_qty,
                        z_start_date
                ) s ON a.plan_order = s.z_prod_order
               LEFT JOIN (
                    SELECT
                        fg_material_no AS material_no,
                        z_prod_order,
                        z_plan_order,
                        z_orignal_qty,
                        MIN(cal_kit) AS cal_kit,
                        COUNT(*) AS count_cal_kit,
                        z_start_date
                      FROM(
                      SELECT
                            a.fg_sub_mat AS fg_material_no,
                            a.prod_order AS z_prod_order,
                            a.plan_order AS z_plan_order,
                            a.orignal_qty AS z_orignal_qty,
                            CASE
                                WHEN ISNULL(req_qty, 0) = 0 THEN NULL
                                ELSE 100 + ((ISNULL(short_qty, 0) / req_qty) * 100)
                            END AS cal_kit,
                            a.start_date AS z_start_date
                        FROM [OP_DOC_CTRL].dbo.mat_ctrl_zrmm a
                        WHERE a.plant LIKE 'SVI2%%'
                        AND a.prod_order IS NOT NULL 
                        AND a.mat_group NOT IN ('65P','67B','50B','50D','52D','63M','65','65B','65P','65U','65W','67B','67P','67T','29W001','70B','70P','70W','76M')
                    ) Calculated
                    GROUP BY
                        fg_material_no,
                        z_prod_order,
                        z_plan_order,
                        z_orignal_qty,
                        z_start_date
                ) t ON a.plan_order = t.z_prod_order
                WHERE
                    a.plant LIKE 'SVI2%%'
                    AND a.material_no IS NOT NULL
                    AND a.material_no <> ''
                    AND a.material_no IN (${format_data_sql})
                    AND (a.status = 'REL' or a.status = 'CRTD')
                    AND ISNULL(a.qty, 0) - ISNULL(a.delivered_qty, 0) - ISNULL(a.scarp_qty, 0) > 0
                    AND substring(a.material_no, 4, 3) = '908'
                ORDER BY  a.material_no, a.start_date ASC;`;


console.log(sql)
