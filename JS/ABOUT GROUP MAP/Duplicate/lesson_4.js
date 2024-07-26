const data = [
    {id: 1, user: '0000001',name:'AAA'},
    {id: 2, user: '0000002',name:'BBB'},
    {id: 3, user: '0000001',name:'AAA'},
    // เพิ่มเติมข้อมูลตามที่คุณมี
  ];
  
  const uniqueUsers = Array.from(new Set(data.map(item => item.user)));
  
  console.log(uniqueUsers); // ['0000001', '0000002']
  
const uniqueUserMap = new Map(data.map(item => [item.user, item.name]));
const uniqueUsersOBJ = Array.from(uniqueUserMap.entries()).map(([user, name]) => ({user, name}));

console.log(uniqueUserMap);
console.log(uniqueUsersOBJ); // [{ user: 'P1', name: 'Name1' }, { user: 'P2', name: 'Name2' }]


const uniqueUsersRE = data.reduce((acc, current) => {
    const x = acc.find(item => item.user === current.user);
    console.log(current)
    if (!x) {
      acc.push(current);
    }
    return acc;
  }, [] );
  
  console.log(uniqueUsersRE); // [{ user: 'P1', name: 'Name1' }, { user: 'P2', name: 'Name2' }]