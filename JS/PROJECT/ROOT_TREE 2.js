function transformData(data) {
  // Sort data by seq_no ascending
  data.sort((a, b) => a.seq_no - b.seq_no);

  // Function to recursively build the hierarchy
  function buildHierarchy(items, parentId) {
      let result = [];

      // Filter items with matching parentId
      let filteredItems = items.filter(item => item.leader === parentId);

      // Iterate through filtered items
      filteredItems.forEach(item => {
          let newItem = {
              name: item.record_name,
              cssClass: getCssClass(item.group_text.toLowerCase()),
              image: "",
              title: item.group_text,
              childs: []
          };

          // Recursively build child hierarchy
          newItem.childs = buildHierarchy(items, item.en_and_cc);

          // If no child elements, handle display profile logic
          if (newItem.childs.length === 0) {
              if (item.display_profile === 2) {
                  // Create a child with Staff title if display profile is 2
                  newItem.childs.push({
                      name: "Staff",
                      cssClass: "ngx-org-staff",
                      image: "",
                      title: item.cust_owner  // Assuming cust_owner holds the title
                  });
              } else if (item.display_profile === 1) {
                  // Otherwise, create an empty node as specified
                  newItem.childs.push({
                      name: "",
                      cssClass: "empty-node",
                      image: "",
                      title: "",
                      childs: []
                  });
              }
          }

          // Push the new item to the result
          result.push(newItem);
      });

      return result;
  }

  // Helper function to get CSS class based on group_text
  function getCssClass(groupText) {
      switch (groupText) {
          case 'vp':
              return 'ngx-org-vp';
          case 'director':
              return 'ngx-org-director';
          case 'manager':
              return 'ngx-org-manager';
          case 'leader / sr.':
              return 'ngx-org-leader';
          case 'staff':
              return 'ngx-org-staff';
          default:
              return '';
      }
  }

  // Start building hierarchy with root elements (where leader is empty string)
  let hierarchy = buildHierarchy(data, '');

  return hierarchy;
}

// Usage example:
let transformedData = transformData(csvData);
console.log(JSON.stringify(transformedData, null, 4));
