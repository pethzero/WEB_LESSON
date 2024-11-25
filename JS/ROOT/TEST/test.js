if (node_children.length > 0) {
  node_children.forEach((node) => {
    if (node) {
      if (node["total"] < 0) {
        let fg_qty = 0;
        let fg_condition = false;
        if (node["wo_len"] == 0) {
          fg_condition = true;
          // fg_item = data_fg.find(
          //     (item) => item.material_no === entry["material_no"]
          // );
          // fg_qty = fg_item?.["fg_qty"] || 0;
          fg_qty = node["fg_qty"] || 0;
          // node["detail"][0].fg_qty = fg_qty;
          node["detail"][0].work_order = null;
          node["detail"][0].plan_order = entry.plan_order;
          node["detail"][0].wo_status = entry.status;
          node["detail"][0].wo_qty = entry.qty;
          node["detail"][0].wo_balance = entry.balance;
          node["detail"][0].wo_date = entry.start_date;
          node["detail"][0].cplk_per_o = entry.cal_kit;
          node["detail"][0].cplk_count_o = entry.count_cal_kit;
          node["detail"][0].cplk_per_n = entry.cal_kit_w1;
          node["detail"][0].cplk_count_n = entry.count_cal_kit_w1;
        } else {
          const newDetail = {
            main_id: node["main_id"],
            parent_id: node["parent_id"],
            child_id: node["child_id"],
            work_order: null,
            plan_order: entry.plan_order,
            wo_status: entry.status,
            wo_qty: entry.qty,
            wo_balance: entry.balance,
            wo_date: entry.start_date,
            cplk_per_o: entry.cal_kit,
            cplk_count_o: entry.count_cal_kit,
            cplk_per_n: entry.cal_kit_w1,
            cplk_count_n: entry.count_cal_kit_w1,
          };
          node["detail"].push(newDetail);
        }
        if (node["total"] < 0) {
          let temp_total = 0;
          temp_total = JSON.parse(JSON.stringify(node["total"]));
          if (fg_condition) {
            temp_total += fg_qty + entry.qty;
          } else {
            temp_total += entry.qty;
          }
          node["total"] = temp_total;
        }
        node["wo_len"] += 1;
        // msg.test = node
      }
    }
  });
}

function nodeDetailPlan(data_plan,temp_plan_total) {
  data_plan.forEach((entry, index) => {
    if (entry.balance > 0) {
      if (node) {
        // if (node["total"] < 0) {
            if (temp_plan_total < 0) {
          let fg_qty = 0;
          let fg_condition = false;
          if (node["wo_len"] == 0) {
            fg_condition = true;
            // fg_item = data_fg.find(
            //     (item) => item.material_no === entry["material_no"]
            // );
            // fg_qty = fg_item?.["fg_qty"] || 0;
            fg_qty = node["fg_qty"] || 0;
            // node["detail"][0].fg_qty = fg_qty;
            node["detail"][0].work_order = null;
            node["detail"][0].plan_order = entry.plan_order;
            node["detail"][0].wo_status = entry.status;
            node["detail"][0].wo_qty = entry.qty;
            node["detail"][0].wo_balance = entry.balance;
            node["detail"][0].wo_date = entry.start_date;
            node["detail"][0].cplk_per_o = entry.cal_kit;
            node["detail"][0].cplk_count_o = entry.count_cal_kit;
            node["detail"][0].cplk_per_n = entry.cal_kit_w1;
            node["detail"][0].cplk_count_n = entry.count_cal_kit_w1;
          } else {
            const newDetail = {
              main_id: node["main_id"],
              parent_id: node["parent_id"],
              child_id: node["child_id"],
              work_order: null,
              plan_order: entry.plan_order,
              wo_status: entry.status,
              wo_qty: entry.qty,
              wo_balance: entry.balance,
              wo_date: entry.start_date,
              cplk_per_o: entry.cal_kit,
              cplk_count_o: entry.count_cal_kit,
              cplk_per_n: entry.cal_kit_w1,
              cplk_count_n: entry.count_cal_kit_w1,
            };
            node["detail"].push(newDetail);
          }
          node["wo_len"] += 1;
          if (temp_plan_total < 0) {
            let temp_total = 0;
            temp_total = JSON.parse(JSON.stringify(temp_plan_total));
            if (fg_condition) {
              temp_total += fg_qty + entry.qty;
            } else {
              temp_total += entry.qty;
            }
          }

          if (temp_plan_total > 0) {
            return false
          }
        }
      }
    }
  });
}
