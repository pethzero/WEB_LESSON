
sql += `INSERT INTO OP_DOC_CTRL.dbo.ocs_build_plan
(
manager,
supervisor,
pc,
bu,
plant,
customer,
material_no,
marketing_price,
plan_qty,
actual_qty,
variance_qty,
variance,
workweek,
[year],
last_update,
series_name,
[type],
remark,
longtxt_pc
 )
VALUES(
 ${ResultData(el.A)},
 ${ResultData(el.B)},
 ${ResultData(el.C)},
 ${ResultData(el.D)},
 ${ResultData(el.E)},
 ${ResultData(el.F)},
 ${ResultData(el.G)},
 ${ResultData(el.I)},
 ${ResultData(el.K)},
 '0',
 '0',
 '0',
 '${info_date['workweek']}',
 '${info_date['year']}',
GETDATE(), 
${ResultData(el.H)}, 
${ResultData(el.J)}, 
null , 
null
)
;`;       

`INSERT INTO OP_DOC_CTRL.dbo.ocs_build_plan_daily
( 
build_plan_id, 
plan_date, 
plan_qty, 
actual_qty, 
miss_build_qty, 
create_date, 
workweek, 
[year])
VALUES( 
@max_id, 
${day[i]['value']}, 
${ResultData(el[day[i]['col']],'0')},
 '0'
,'0'
 , getdate()
 , ${ResultData(info_date['workweek'])}
 , ${ResultData(info_date['year'])} );`
