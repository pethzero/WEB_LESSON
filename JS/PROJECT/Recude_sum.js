const data_main = [
    { "id": 1, "name": "ceo", "text": "CEO", "display_profile": 1, "seq_no": 1 },
    { "id": 2, "name": "cfo", "text": "CFO", "display_profile": 1, "seq_no": 2 },
    { "id": 3, "name": "vp", "text": "VP", "display_profile": 1, "seq_no": 3 },
    { "id": 4, "name": "director", "text": "Director", "display_profile": 1, "seq_no": 4 },
    { "id": 5, "name": "manager", "text": "Manager", "display_profile": 1, "seq_no": 5 },
    { "id": 6, "name": "leader", "text": "Leader / Sr.", "display_profile": 1, "seq_no": 6 },
    { "id": 7, "name": "staff", "text": "Staff", "display_profile": 2, "seq_no": 7 },
    { "id": 8, "name": "daily", "text": "Daily", "display_profile": 3, "seq_no": 8 }
];

const data_detail = [
    { "en_and_cc": "00678", "group_position": "manager", "group_text": "Manager", "record_count": 1 },
    { "en_and_cc": "47810", "group_position": "director", "group_text": "Director", "record_count": 1 },
    { "en_and_cc": "47811", "group_position": "staff", "group_text": "Staff", "record_count": 1 },
    { "en_and_cc": "47812", "group_position": "leader", "group_text": "Leader / Sr.", "record_count": 1 },
    { "en_and_cc": "47813", "group_position": "manager", "group_text": "Manager", "record_count": 1 },
    { "en_and_cc": "50916", "group_position": "vp", "group_text": "VP", "record_count": 1 },
    { "en_and_cc": "53328", "group_position": "manager", "group_text": "Manager", "record_count": 1 },
    { "en_and_cc": "53644", "group_position": "director", "group_text": "Director", "record_count": 1 },
    { "en_and_cc": "53648", "group_position": "director", "group_text": "Director", "record_count": 1 },
    { "en_and_cc": "212002", "group_position": "daily", "group_text": "Daily", "record_count": 7 },
    { "en_and_cc": "212003", "group_position": "daily", "group_text": "Daily", "record_count": 51 }
];

const group_count = data_main.map(main => {
    const count = data_detail.reduce((acc, detail) => {
        if (detail.group_position === main.name) {
            return acc + detail.record_count;
        }
        return acc;
    }, 0);

    return { text: main.text, value: count };
});

console.log(group_count);
// Output:
// [
//   { text: 'CEO', value: 0 },
//   { text: 'CFO', value: 0 },
//   { text: 'VP', value: 1 },
//   { text: 'Director', value: 3 },
//   { text: 'Manager', value: 3 },
//   { text: 'Leader / Sr.', value: 1 },
//   { text: 'Staff', value: 1 },
//   { text: 'Daily', value: 58 }
// ]
