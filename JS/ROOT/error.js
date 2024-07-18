const data = [
    {id:1,parentid:'000001',childid:'',seq_no:3,data:'A',condition:'1',name:'N A',position:'vp'},
    {id:2,parentid:'000002',childid:'000001',seq_no:4,data:'B',condition:'1',name:'N B',position:'leader'},
    {id:3,parentid:'000003',childid:'000002',seq_no:5,data:'C',condition:'2',name:'N C',position:'manager'},
    {id:4,parentid:'000004',childid:'000001',seq_no:5,data:'D',condition:'2',name:'N D',position:'manager'},
    {id:5,parentid:'000005',childid:'000004',seq_no:6,data:'D',condition:'2',name:'N D',position:'staff'},
    {id:6,parentid:'000006',childid:'999999',seq_no:6,data:'A',condition:'1',name:'N A',position:'vp'},
    {id:6,parentid:'',childid:'88888',seq_no:6,data:'A',condition:'1',name:'N A',position:'vp'},
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
    try {
      let data_err = []
      let tree = [];
      let map = {};
      let status = 'T'; // Assume no errors initially
  
      data.forEach(item => {
        let name = '';
        let title = '';
        let image = '';
        // if (item['display_profile'] == 1) {
        //     name = item.name ? item.name : '';
        //     title = item.group_text;
        // } else if (item['display_profile'] == 2) {
        //     name = item.name ? item.name : '';
        //     title = item.group_text;
        // } else if (item['display_profile'] == 3) {
        //     name = item.group_text;
        //     title = item.record_count;
        // }
  
        map[item.parentid] = { 
            id: item.parentid,
            name: name,
            image: image,
            cssClass: cssClassMap(item.position),
            title: title,
            childs: [],
            seq_no: item.seq_no
        };
      });
  
      data.forEach(item => {
        if (item.childid) {
            let parent = map[item.childid];
            let child = map[item.parentid];
  
            if (!parent) {
                data_err.push({message:`Parent with id ${item.childid} not found for child id ${item.parentid}`});
                console.error(`Parent with id ${item.childid} not found for child id ${item.parentid}`);
                status = 'F'; // Update status to indicate fixable error
                return;
            }
  
            let gap = child.seq_no - parent.seq_no - 1;
            let currentParent = parent;
  
            for (let i = 0; i < gap; i++) {
                let emptyNode = JSON.parse(JSON.stringify(node_empty));  // Deep clone empty node
                currentParent.childs.push(emptyNode);
                currentParent = emptyNode;
            }
            currentParent.childs.push(child);
        } else {
            if (map[item.parentid]) {
                tree.push(map[item.parentid]);
            } else {
                data_err.push({message:`Parent with id ${item.childid} not found for child id ${item.parentid}`})
                console.error(`Parent with id ${item.parentid} not found`);
                status = 'E'; // Update status to indicate unrecoverable error
            }
        }
      });
  
      // Remove seq_no from final output
      function removeSeqNo(node) {
          delete node.seq_no;
          node.childs.forEach(child => removeSeqNo(child));
      }
      tree.forEach(node => removeSeqNo(node));
      return { data: tree, error: data_err, status: status };
    } catch (error) {
      console.error("Error building tree:", error);
      return { data: [], error: [error], status: 'E' }; // Handle unexpected errors
    }
  }
  

const output = buildTree(data);
console.log(JSON.stringify(output['data'], null, 2));


