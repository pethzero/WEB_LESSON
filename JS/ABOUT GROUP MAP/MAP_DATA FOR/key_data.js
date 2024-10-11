const outsql = [
  {
    match_group: "001",
    month_date: "0001",
    qty_on_hand: 1436.0,
    receive_qty: 0,
    usage_qty: -230.0,
    unit_price: "value1",
  },
  {
    match_group: "001",
    month_date: "0002",
    qty_on_hand: 1206.0,
    receive_qty: 0,
    usage_qty: -2188.0,
    unit_price: "value2",
  },
  {
    match_group: "001",
    month_date: "0003",
    qty_on_hand: -982.0,
    receive_qty: 0,
    usage_qty: -3860,
    unit_price: "value3",
  },
  {
    match_group: "001",
    month_date: "0004",
    qty_on_hand: -4780.0,
    receive_qty: 0,
    usage_qty: -602,
    unit_price: "value4",
  },
];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function calculateTotalSummary(item, prevTotal) {
  let tempTotal = item["qty_on_hand"] + item["receive_qty"] + item["usage_qty"];
  if (tempTotal < 0) {
    return item["qty_on_hand"] + Math.abs(tempTotal);
  } else {
    return tempTotal;
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function group_map(data) {
  const result = data.reduce((acc, curr) => {
    const { match_group, qty_on_hand, receive_qty, usage_qty } = curr;
    if (!acc[match_group]) {
      acc[match_group] = { total_current: 0, condition: true, detail: [] };
    }
    if (qty_on_hand + receive_qty + usage_qty < 0) {
      acc[match_group].condition = false;
    }
    acc[match_group].detail.push({ ...curr });
    return acc;
  }, {});

  for (const match_group in result) {
    const entry = result[match_group];
    if (!entry.condition) {
      let totalSummary = 0;
      let i = 0;
      for (let item of entry["detail"]) {
        if (i === 0) {
          totalSummary = calculateTotalSummary(item);
        } else {
          item["qty_on_hand"] = totalSummary;
          totalSummary = calculateTotalSummary(item);
        }
        // item['total'] = totalSummary;
        i++;
      }
    }
  }
  return result;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function extract(data, conditionFn) {
  const extractedData = [];
  for (const match_group in data) {
    const entry = data[match_group];
    for (let item of entry.detail) {
      extractedData.push(item);
    }
  }
  return extractedData;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const result = group_map(outsql);
const extractedResult = extract(result, null);

console.log(JSON.stringify(extractedResult, null, 2));
