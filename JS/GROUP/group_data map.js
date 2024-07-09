const data = [
    { id_detail: 1, group_name: "A", department: "B", en_and_cc: "371", leader: "346", cust_owner: "VVC", cust_report: "VVR", responsible: "VV", group_position: "vp", user_level: "R", seq_no: 3, display_profile: 1 },
    { id_detail: 2, group_name: "A", department: "B", en_and_cc: "371", leader: "346", cust_owner: "DDDA", cust_report: "DDCR", responsible: "AA", group_position: "director", user_level: "AA", seq_no: 4, display_profile: 1 },
    { id_detail: 3, group_name: "A", department: "B", en_and_cc: "346", leader: "371", cust_owner: "fff", cust_report: "ff", responsible: "eee", group_position: "manager", user_level: "feeee", seq_no: 5, display_profile: 1 },
    { id_detail: 4, group_name: "A", department: "B", en_and_cc: "346", leader: "83", cust_owner: "ee", cust_report: "eee", responsible: "sss", group_position: "leader", user_level: "eee", seq_no: 6, display_profile: 1 },
    { id_detail: 5, group_name: "A", department: "B", en_and_cc: "346", leader: "346", cust_owner: "h", cust_report: "", responsible: "aaa", group_position: "staff", user_level: "AAA", seq_no: 7, display_profile: 2 },
    { id_detail: 6, group_name: "A", department: "B", en_and_cc: "212003", leader: "346", cust_owner: "daily", cust_report: "", responsible: "daily", group_position: "daily", user_level: "", seq_no: 8, display_profile: 3 }
];

const initialDataGroup = [
    { name: "vp", detail: [] },
    { name: "director", detail: [] },
    { name: "manager", detail: [] },
    { name: "leader", detail: [] },
    { name: "staff", detail: [] },
    { name: "daily", detail: [] }
];

const groupedData = initialDataGroup.map(group => ({
    name: group.name,
    detail: data
        .filter(item => item.group_position === group.name)
        .map(item => ({
            id: item.id_detail,
            group_name: item.group_name,
            department: item.department,
            en_and_cc: item.en_and_cc,
            leader: item.leader,
            cust_owner: item.cust_owner,
            cust_report: item.cust_report,
            responsible: item.responsible,
            group_position: item.group_position,
            user_level: item.user_level,
            seq_no: item.seq_no,
            display_profile: item.display_profile
        }))
}));

console.log(groupedData);
