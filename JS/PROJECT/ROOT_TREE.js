function convertCSVtoHierarchy(data) {
    // Group data by parent ID
    const groupedData = {};
    data.forEach(item => {
      const parentId = item.leader || ''; // Use leader as parentId, handle root nodes
      if (!groupedData[parentId]) {
        groupedData[parentId] = [];
      }
      groupedData[parentId].push(item);
    });
  
    // Function to recursively build hierarchy
    function buildHierarchy(parentId) {

      if (!groupedData[parentId]) {
        return [];
      }
      
      return groupedData[parentId].map(item => {
        const node = {
          name: item.record_name,
          cssClass: `ngx-org-${item.group_position}`,
          image: item.file_upload || '',
          title: item.group_text || item.cust_owner || '',
          childs: buildHierarchy(item.en_and_cc.toString())
        };
        if (node.title === '' && item.display_profile === 2) {
          node.title = item.group_text;
          node.image = '';
        }
        return node;
      });
    }
  
    // Build the hierarchy starting from the root
    return buildHierarchy('');
  }
  
  // Example usage with your CSV data
  const csvData = [
    { id: 1, id_organization: 1, en_and_cc: 50916, record_name: 'PRAYOT VONGTARUA', leader: '', cust_owner: 'BBBB', cust_report: 'AAA', group_position: 'vp', group_text: 'VP', display_profile: 1, seq_no: 3, record_count: 1, file_upload: '' },
    { id: 2, id_organization: 1, en_and_cc: 47810, record_name: 'PONGSAPAK INPRASIT', leader: 50916, cust_owner: 'DDD', cust_report: 'CCC', group_position: 'director', group_text: 'Director', display_profile: 1, seq_no: 4, record_count: 1, file_upload: '' },
    { id: 3, id_organization: 1, en_and_cc: 47812, record_name: 'PANITHAN SEESON', leader: 47810, cust_owner: '11', cust_report: '11', group_position: 'manager', group_text: 'Manager', display_profile: 1, seq_no: 5, record_count: 1, file_upload: '' },
    { id: 4, id_organization: 1, en_and_cc: 47813, record_name: 'SUKAPOJ HIRUL', leader: 47810, cust_owner: '22', cust_report: '22', group_position: 'manager', group_text: 'Manager', display_profile: 1, seq_no: 5, record_count: 1, file_upload: '' },
    { id: 14, id_organization: 1, en_and_cc: 47818, record_name: 'THITICHAYA TAMTEM', leader: 47812, cust_owner: '', cust_report: '', group_position: 'leader', group_text: 'Leader / Sr.', display_profile: 1, seq_no: 6, record_count: 1, file_upload: '' },
    { id: 15, id_organization: 1, en_and_cc: 53196, record_name: 'THAWATCHAPONG CHUAYBUDDA', leader: 47813, cust_owner: '', cust_report: '', group_position: 'staff', group_text: 'Staff', display_profile: 2, seq_no: 7, record_count: 1, file_upload: '' },
    { id: 16, id_organization: 1, en_and_cc: 47825, record_name: 'DEN JUNLAD', leader: 47818, cust_owner: '', cust_report: '', group_position: 'staff', group_text: 'Staff', display_profile: 2, seq_no: 7, record_count: 1, file_upload: '' }
  ];
  
  const hierarchy = convertCSVtoHierarchy(csvData);
  console.log(hierarchy);
  