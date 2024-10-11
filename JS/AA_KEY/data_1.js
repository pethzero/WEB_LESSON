const data = [
    { fg_material_no: "A", material_no: "001", qty: 10 },
    { fg_material_no: "A", material_no: "002", qty: 20 },
    { fg_material_no: "B", material_no: "003", qty: 30 }
  ];
  
  const groupMain = processGroupMC(data, 1, 'fg_material_no');
  console.log(groupMain);

  function processGroupMC(materialData, mode, keyMain = null, keyDt = null) {
    let group;

    if (mode === 0) {
        // Mode 0: Group by both keyMain and keyDt
        group = {};
        materialData.forEach(item => {
            const parentId = item[keyMain];
            const childId = item[keyDt];
            const key = `${parentId}_${childId}`; // Use a combination of keys for grouping

            if (!group[parentId]) {
                group[parentId] = {};
            }

            if (!group[parentId][key]) {
                group[parentId][key] = [];
            }

            group[parentId][key].push(item);
        });

    } else if (mode === 1) {
        // Mode 1: Group only by keyMain
        group = {};
        materialData.forEach(item => {
            const parentId = item[keyMain];

            if (!group[parentId]) {
                group[parentId] = [];
            }

            group[parentId].push(item);
        });

    } else {
        throw new Error("Invalid mode. Mode should be 0 or 1.");
    }

    return group;
}












function processGroupMC(materialData, mode, keyMain = null, keyDt = null) {
    let group;

    group = {};
    materialData.forEach(item => {
        const parentId = item[keyMain];

        if (!group[parentId]) {
            group[parentId] = [];
        }

        group[parentId].push(item);
    });


    return group;
}

