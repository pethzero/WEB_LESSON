const input = [
	{id: 2, en: '11111', name: 'peth', responsible: 'bbb', group_text: 'A', seq: 2},
	{id: 1, en: '11111', name: 'peth', responsible: 'aaa', group_text: 'VP', seq: 1},
	{id: 3, en: '11111', name: 'peth', responsible: 'ccc', group_text: 'B', seq: 3},
	{id: 4, en: '22222', name: 'xxxx', responsible: 'ccc', group_text: 'D', seq: 4},
	{id: 5, en: '33333', name: 'aaaa', responsible: 'dddd', group_text: 'B', seq: 3}
  ];
  
  const output = Object.values(
	input.reduce((acc, item) => {
	  const key = `${item.en}-${item.name}`;
	  if (!acc[key]) {
		acc[key] = {...item, responsible: [item.responsible]};
	  } else {
		acc[key].responsible.push(item.responsible);
		if (item.seq < acc[key].seq) {
		  acc[key].group_text = item.group_text;
		  acc[key].seq = item.seq;
		}
	  }
	  return acc;
	}, {})
  )
  .map(item => ({
	en: item.en,
	name: item.name,
	responsible: item.responsible.join(','),
	group_text: item.group_text,
	seq: item.seq
  }))
  .sort((a, b) => a.seq - b.seq);
  
  console.log(output);
  