const data_example = [
  {
    "id": 14,
    "status": 20,
    "building": "SVI2A",
    "zone": "A",
    "locker": "1A",
    "cell": 14,
    "edit_date": "2024-07-18",
    "name": "?12460 YUPAPORN TAVONFANG|M|Asst.Manager|T|F|10",
    "temp_name": null
  },
  {
    "id": 40,
    "status": 20,
    "building": "SVI2B",
    "zone": "A",
    "locker": "B",
    "cell": 4,
    "edit_date": "2024-07-18",
    "name": "?11111|-|-|A|F|20?22222 XXXXX AAAA|-|-|A|F|20",
    "temp_name": null
  },
  {
    "id": 18,
    "status": 0,
    "building": "SVI2A",
    "zone": "A",
    "locker": "1A",
    "cell": 18,
    "edit_date": "2024-07-02",
    "name": null,
    "temp_name": null
  }
];

const parseName = (value) => {
  if (!value) return [];
  return value.split('?').filter(Boolean).map(entry => {
    let [en_name, gender] = entry.split('|');
    return {
      en_name: en_name ? en_name.trim() : null,
      gender: gender ? gender.trim() : null
    };
  });
};

const data = data_example.flatMap(item => {
  const parsedNames = parseName(item.name);
  if (parsedNames.length === 0) {
    return [{
      en: null,
      name: null,
      gender: null,
      building: item.status === 0 ? null : item.building,
      zone: item.zone,
      locker: item.locker,
      cell: item.cell
    }];
  }
  return parsedNames.map(parsed => ({
    en: parsed.en_name,
    name: parsed.en_name,
    gender: parsed.gender,
    building: item.building,
    zone: item.zone,
    locker: item.locker,
    cell: item.cell
  }));
});

// console.log(data);
function parseEntry(entry){
  if (!entry) {
    return { en: null, name: null };
  }
  const parts = entry.split(' ');
  const en = parts.shift();
  const name = parts.length > 0 ? parts.join(' ') : null;
  return { en, name };
};


const parseEntry = (entry) => {
  if (!entry) {
    return { en: null, name: null };
  }
  const parts = entry.split(' ');
  const en = parts.shift();
  const name = parts.length > 0 ? parts.join(' ') : null;
  return { en, name };
};

console.log(parseEntry("22222 XXXXX AAAA"))