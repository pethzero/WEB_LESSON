const data = [
    {id:1,parentid:'000001',childid:'',seq_no:3},
    {id:2,parentid:'000002',childid:'000001'},
    {id:3,parentid:'000003',childid:'000002'},
    {id:4,parentid:'000004',childid:'000001'},
    {id:5,parentid:'000005',childid:'000004'},
    {id:6,parentid:'000006',childid:'999999'},
    {id:7,parentid:'',childid:'88888'},
    {id:8,parentid:null,childid:'7777777'},
];
const node_empty = {
    name: '',
    childs: []
};

function errorbuildTree(data) {
    try {
      let data_err = []
      let tree = [];
      let map = {};
      let status = 'T'; // Assume no errors initially
  
      data.forEach(item => {
        map[item.parentid] = { 
            id: item.parentid,
            childs: [],
            // seq_no: item.seq_no
        };
      });
      console.log(map)
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
            // let gap = child.seq_no - parent.seq_no - 1;
            let currentParent = parent;
  
            // for (let i = 0; i < gap; i++) {
            //     let emptyNode = JSON.parse(JSON.stringify(node_empty));  // Deep clone empty node
            //     currentParent.childs.push(emptyNode);
            //     currentParent = emptyNode;
            // }
            currentParent.childs.push(child);
        } else {
            if (map[item.parentid]) {
                tree.push(map[item.parentid]);
            } else {
                data_err.push({message:`Parent with id ${item.parentid} not found`})
                console.error(`Parent with id ${item.parentid} not found`);
                status = 'E'; // Update status to indicate unrecoverable error
            }
        }
      });
  
      // Remove seq_no from final output
    //   function removeSeqNo(node) {
    //       delete node.seq_no;
    //       node.childs.forEach(child => removeSeqNo(child));
    //   }
    //   tree.forEach(node => removeSeqNo(node));
      return {  error: data_err, status: status };
    } catch (error) {
      console.error("Error building tree:", error);
      return { error: [error], status: 'E' }; // Handle unexpected errors
    }
  }
  

const output = errorbuildTree(data);
// console.log(JSON.stringify(output['data'], null, 2));


console.log(output);