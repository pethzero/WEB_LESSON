function processGroupMC(materialData, mode, keyMain = null, keyDt = null) {
    if (mode === 0) {
        // Mode 0: Group by both keyMain and keyDt
        const group = {};
        materialData.forEach(item => {
            const parentId = item[keyMain];
            const childId = item[keyDt];
            const key = `${parentId}_${childId}`; // Combining parentId and childId as key
            
            if (!group[parentId]) {
                group[parentId] = {};
            }
            if (!group[parentId][key]) {
                group[parentId][key] = [];
            }
            group[parentId][key].push(item);
        });
        return group;
    } else if (mode === 1) {
        // Mode 1: Group only by keyMain
        const group = {};
        materialData.forEach(item => {
            const parentId = item[keyMain];
            
            if (!group[parentId]) {
                group[parentId] = [];
            }
            group[parentId].push(item);
        });
        return group;
    } else {
        throw new Error("Invalid mode. Mode should be 0 or 1.");
    }
}



const sql = [];
for (const [parent_id, child_dict] of Object.entries(group)) {
    console.log(`FG MAT: ${parent_id}`);
    let condition_seq_no = false;
    let qpa = 1;
    let seq_no = 0;
    let fg_qty = 0;

    Object.entries(child_dict).forEach(([key, details], child_index) => {
        const child_id = key.split('_')[1];  // Adjust based on your combined key structure
        console.log(`  MAT: ${child_id}`);

        details.forEach((detail, dt_index) => {
            if (child_index === 0 && dt_index === 0) {
                const m_group = detail['m_group'] || null;
                if (m_group === 'F') {
                    condition_seq_no = true;
                }
            }

            if (condition_seq_no) {
                if (dt_index === 0) {
                    seq_no = detail['seq_no'] || child_index;
                }
            } else {
                seq_no = child_index;
            }

            if (dt_index === 0) {
                qpa = detail['qpa'] || 1;
                fg_qty = detail['fg_qty'] || 1;
            }

            let wo_pl_order, wo_pl_status, wo_pl_qty, start_date, qty, balance, cmp_kit_shock, cmp_kit_item, cmp_kit_per_shock, cmp_kit_per_item;

            if (detail['z_prod_order'] || detail['z_plan_order']) {
                wo_pl_order = detail['z_prod_order'] || detail['z_plan_order'];
                wo_pl_status = detail['z_status'] || null;
                wo_pl_qty = detail['z_orignal_qty'] || 0;
                start_date = detail['z_start_date'] || null;
                qty = detail['z_orignal_qty'] || 0;
                balance = detail['balance'] || 0;

                cmp_kit_shock = Math.round(detail['count_cal_kit'] || 0);
                cmp_kit_item = detail['cmp_kit'] || 0;
                if (cmp_kit_shock !== 0) {
                    cmp_kit_per_shock = Math.round(detail['cal_kit'] || 0);
                    if (cmp_kit_item !== 0) {
                        cmp_kit_per_item = Math.round(100 - ((cmp_kit_shock / cmp_kit_item) * 100));
                    }
                } else {
                    cmp_kit_per_shock = 100;
                    cmp_kit_per_item = 100;
                }
            } else {
                wo_pl_qty = 0;
                wo_pl_status = null;
                wo_pl_order = null;
                start_date = null;
                qty = 0;
                balance = 0;
                cmp_kit_shock = 0;
                cmp_kit_item = 0;
                cmp_kit_per_item = 0;
                cmp_kit_per_shock = 0;
            }

            let sale_no, sale_item, sale_qty, sale_var, sale_price, sale_amount, sale_year, sale_ww;

            if (detail['so']) {
                sale_no = detail['so'];
                sale_item = detail['so_item'] || null;
                sale_qty = detail['so_qty'] || 0;
                sale_var = detail['variance'] || 0;
                sale_price = detail['so_net_price'] || 0;
                sale_amount = detail['so_amount'] || 0;
                if (detail['so_workweek']) {
                    [sale_year, sale_ww] = detail['so_workweek'].split("-");
                } else {
                    sale_year = null;
                    sale_ww = null;
                }
            } else {
                sale_no = null;
                sale_item = null;
                sale_qty = 0;
                sale_var = 0;
                sale_price = 0;
                sale_amount = 0;
                sale_year = null;
                sale_ww = null;
            }

            const fg_material_no = detail['fg_material_no'] || null;
            const material_no = detail['material_no'] || null;
            const summary = detail['summary'] || null;
            const primary_sub = detail['primary_sub'] || 0;

            if (summary !== '1') {
                const data = {
                    fg_material_no: fg_material_no,
                    material_no: material_no,
                    plant: data_user['plant'] || '-',
                    create_date: now,
                    seq_no: seq_no,
                    item_no: child_index,
                    qpa: qpa,
                    start_date: start_date,
                    wo_pl_status: wo_pl_status,
                    wo_pl_order: wo_pl_order,
                    cmp_kit_per_shock: cmp_kit_per_shock,
                    cmp_kit_shock: cmp_kit_shock,
                    cmp_kit_item: cmp_kit_item,
                    primary_sub: primary_sub,
                    sale_no: sale_no,
                    sale_item: sale_item,
                    sale_qty: sale_qty,
                    sale_var: sale_var,
                    sale_price: sale_price,
                    sale_amount: sale_amount,
                    sale_year: sale_year,
                    balance: balance,
                    sale_ww: sale_ww,
                    wo_pl_qty: wo_pl_qty
                };
                sql.push(data);
            }
        });
    });
}

