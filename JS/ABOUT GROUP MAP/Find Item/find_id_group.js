let data_group = [
    {
        id: 1,
        group_data: [
            { type: 'A', name: 'aaa01', count: 0 },
            { type: 'B', name: 'aaa02', count: 0 }
        ]
    }
];

let data = [{ id: '1', type: 'A', n_count: 5 }];

data.forEach(item => {
    let group = data_group.find(group => group.id === parseInt(item.id));
    if (group) {
        let groupItem = group.group_data.find(gd => gd.type === item.type);
        if (groupItem) {
            groupItem.count += item.n_count;
        }
    }
});

console.log(data_group);
