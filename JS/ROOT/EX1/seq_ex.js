const data = [
    {id:1,parentId:'000001',childId:'',seq_no:3,data:'A',condition:'1',name:'N A',position:'vp'},
    {id:2,parentId:'000002',childId:'000001',seq_no:4,data:'B',condition:'1',name:'N B',position:'leader'},
    {id:3,parentId:'000003',childId:'000002',seq_no:5,data:'C',condition:'2',name:'N C',position:'manager'},
    {id:4,parentId:'000004',childId:'000001',seq_no:5,data:'D',condition:'2',name:'N D',position:'manager'},
    {id:4,parentId:'000005',childId:'000004',seq_no:8,data:'D',condition:'2',name:'N D',position:'staff'},
];

const node_empty = {
    name: '',
    cssClass: 'empty-node',
    image: '',
    title: '',
    childs: []
};

function cssClassMap(position) {
    if (position) {
        return `ngx-org-${position}`;
    }
    return '';
}

function buildTree(data) {
    let tree = [];
    let map = {};

    data.forEach(item => {
        let title = '-';
        if (item.condition == 1) {
            title = item.data;
        } else if (item.condition == 2) {
            title = item.name;
        }

        map[item.parentId] = { 
            id: item.parentId,
            image: '',
            cssClass: cssClassMap(item.position),
            title: title,
            childs: [],
            seq_no: item.seq_no
        };
    });

    data.forEach(item => {
        if (item.childId) {
            let parent = map[item.childId];
            let child = map[item.parentId];

            let gap = child.seq_no - parent.seq_no - 1;
            if (gap > 0) {
                let emptyNode = JSON.parse(JSON.stringify(node_empty));  // Deep clone empty node
                emptyNode.childs.push(child);
                parent.childs.push(emptyNode);
            } else {
                parent.childs.push(child);
            }
        } else {
            tree.push(map[item.parentId]);
        }
    });

    // Remove seq_no from final output
    function removeSeqNo(node) {
        delete node.seq_no;
        node.childs.forEach(child => removeSeqNo(child));
    }
    tree.forEach(node => removeSeqNo(node));

    return tree;
}

const output = buildTree(data);
console.log(JSON.stringify(output, null, 2));
