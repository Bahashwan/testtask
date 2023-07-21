const arr  = [
  {
    id: 1,
    count: 13,
  },
  {
    id: 2,
    count: 5,
  },
  {
    id: 3,
    count: 24,
  },
  {
    id: 4,
    count: 101,
  },
  {
    id: 5,
    count: 72,
  },
  {
    id: 6,
    count: 64,
  },
  {
    id: 7,
    count: 305,
  },
  {
    id: 8,
    count: 67,
  },
  {
    id: 9,
    count: 95,
  },
  {
    id: 10,
    count: 21,
  },
  {
    id: 11,
    count: 37,
  },
];


function toObj(arr) {
    const result = {};
    for (const el of arr) {
      const { id, count } = el;
      result[id] = count;
    }
    return result;
  }


console.log(toObj(arr))