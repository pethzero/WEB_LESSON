// const data = [
//     {id:1,parentId:'000001',childId:'',seq_no:3,data:'A',condition:'1',name:'N A',position:'vp'},
//     {id:2,parentId:'000002',childId:'000001',seq_no:4,data:'B',condition:'1',name:'N B',position:'leader'},
//     {id:3,parentId:'000003',childId:'000002',seq_no:5,data:'C',condition:'2',name:'N C',position:'manager'},
//     {id:4,parentId:'000004',childId:'000001',seq_no:5,data:'D',condition:'2',name:'N D',position:'manager'},
// ];

// function cssClassMap(position){
//     if(position){
//         return `ngx-org-${position}`
//     }
//     return ''
// }

// function buildTree(data) {
//     let tree = [];
//     let map = {};

//     data.forEach(item => {
//         let title = '-';
//         if(item.condition == 1){
//             title = item.data;
//         }else if(item.condition == 2){
//             title = item.name;
//         }

//         map[item.parentId] = { 
//             id: item.parentId,
//             image: '',
//             cssClass: cssClassMap(item.position),
//             title: title,
//             childs: []
//         };
//     });

//     data.forEach(item => {
//         if (item.childId) {
//             map[item.childId].childs.push(map[item.parentId]);
//         } else {
//             tree.push(map[item.parentId]);
//         }
//     });

//     return tree;
// }

// const output = buildTree(data);
// console.log(JSON.stringify(output, null, 2));


const data = [
    {id:1,parentId:'000001',childId:'',seq_no:3,data:'A',condition:'1',name:'N A',position:'vp'},
    {id:2,parentId:'000002',childId:'000001',seq_no:4,data:'B',condition:'1',name:'N B',position:'leader'},
    {id:3,parentId:'000003',childId:'000002',seq_no:5,data:'C',condition:'2',name:'N C',position:'manager'},
    {id:4,parentId:'000004',childId:'000001',seq_no:5,data:'D',condition:'2',name:'N D',position:'manager'},
];

function cssClassMap(position) {
    if(position) {
        return `ngx-org-${position}`;
    }
    return '';
}

function buildTree(data) {
    let tree = [];
    let map = {};

    data.forEach(item => {
        let title = '-';
        if(item.condition == 1) {
            title = item.data;
        } else if(item.condition == 2) {
            title = item.name;
        }

        map[item.parentId] = { 
            id: item.parentId,
            image: '',
            cssClass: cssClassMap(item.position),
            title: title,
            childs: []
        };
    });

    data.forEach(item => {
        if (item.childId) {
            map[item.childId].childs.push(map[item.parentId]);
        } else {
            tree.push(map[item.parentId]);
        }
    });

    return tree;
}

const output = buildTree(data);
console.log(JSON.stringify(output, null, 2));
