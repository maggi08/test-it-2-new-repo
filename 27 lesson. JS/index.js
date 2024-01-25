let numbers = [1, 2, 3, 4, 5, 6, 7];

function sumOfArray(arr) {
  let sum = 0;
  arr.forEach(num => {
    sum += num;
  });
  return sum;
}

function sumOfArrayPro(arr) {
  console.log(arr);
  let result = arr.reduce((acc, num) => {
    console.log(acc, num);
    return acc + num;
  });
  return result;
}

function sumOfArrayProReverse(arr) {
  console.log(arr);
  let result = arr.reduceRight((acc, num) => {
    console.log(acc, num);
    return acc + num;
  });
  return result;
}

let numbers2 = numbers;

// let numbers2Result = [...numbers2].splice(0,numbers2.length/2).reduce((acc, num)=> acc+num)
// console.log('numbers2Result', numbers2Result);

sumOfArray(numbers); // 28
// console.log(sumOfArray(numbers) );
// console.log(sumOfArrayPro(numbers) );
// console.log(sumOfArrayPro(numbers.reduce((acc,item) => acc + item)) );
// console.log(sumOfArrayProReverse(numbers));

let users = [
  {
    name: 'Moldir',
    surename: 'surename',
    email: 'email@gmail.com',
    age: 8,
    gender: 'female',
  },
  {
    name: 'Ardak',
    surename: 'surename1',
    email: 'email@gmail.com',
    age: 15,
    gender: 'male',
  },
  {
    name: 'Malika',
    surename: 'surename1',
    email: 'email@gmail.com',
    age: 80,
    gender: 'female',
  },
  {
    name: 'Ilias',
    surename: 'surename',
    email: 'email@gmail.com',
    age: 50,
    gender: 'male',
  },
  {
    name: 'Aidos',
    surename: 'surename2',
    email: 'email@gmail.com',
    age: 24,
    gender: 'male',
  },
  {
    name: 'Jhonny',
    surename: 'surename2',
    email: 'email@gmail.com',
    age: 30,
    gender: 'male',
  },
  {
    name: 'Tima',
    surename: 'surename',
    email: 'email@gmail.com',
    age: 43,
    gender: 'male',
  },
  {
    name: 'Aigul',
    surename: 'surename',
    email: 'email@gmail.com',
    age: 3,
    gender: 'female',
  },
];

function getTotalAgeOfUsers(arr) {
  return arr.reduce((acc, user) => {
    // console.log(acc, user);
    return acc + user.age;
    // 8 + 15
    // 23 23.age + 80 NaN
  }, 0);
}

function getAVGAgeOfUsers(arr) {
  return Math.floor(arr.reduce((acc, user) => acc + user.age, 0) / arr.length);
}
// console.log(getTotalAgeOfUsers(users))
// console.log(getAVGAgeOfUsers(users))

// console.log(typeof numbers); // object
// console.log(Array.isArray(numbers)); // true

let user1 = {
  name: 'Moldir',
  surename: 'surename',
  email: 'email@gmail.com',
  age: 8,
  gender: 'female',
};

let keys = Object.keys(user1); // [key, key, key, ...]
let values = Object.values(user1); // [value, value, value, ...]
let entries = Object.entries(user1); // [[key, value], [key, value], ...]

// console.log(user1);
// console.log(keys);
// console.log(values);
// console.log(entries);
// keys.forEach(k=>console.log(k))
// values.forEach(k=>console.log(k))
// entries.forEach(en => {
//     // console.log(en);
//     console.log('key is', en[0], 'value is', en[1]);
// })

let names = ['Moldir', 'Malika', 'Aidos'];
let firstName = names[0];
let secondName = names[1];
console.log(firstName, secondName);

let [first, , third] = names;
// console.log(first, second);
// console.log(first, second, third);
// console.log(first, second, third, fourth);
// console.log(first, third, fourth);

let coordinates = [73.13123, 43.123124];
// let lat = coordinates[0]
// let long = coordinates[1]

let [lat, long] = coordinates;

// console.log('lat', lat);
// console.log('long', long);

let [a, b, c] = 'abs';
// console.log(a);
// console.log(b);
// console.log(c);

let [name1, name2, ...otherNames] = [
  'Julius',
  'Caesar',
  'Consul',
  'of the Roman Republic',
];
// console.log(name1); // Julius
// console.log(name2); // Caesar
// console.log(otherNames); // ["Consul", "of the Roman Republic"]

let user2 = {
  name: 'Aidos',
  surename: 'Myktybek',
  email: 'email@gmail.com',
  age: 24,
  gender: 'male',
  birth_date: '21.01.1997',
  description: 'lasdgoasdgnasldkjf;lk'
};
let user3 = {
    name: 'Aidos',
    surename: 'Myktybek',
    email: 'email@gmail.com',
    age: 24,
    gender: 'male',
    birth_date: '21.01.1997',
    description: 'lasdgoasdgnasldkjf;lk',
    weight: 67,
};

let { name, surename, birth_date: birthDate, description: descr } = user2;
// console.log('name', name);
// console.log('surename', surename);
// console.log('birthDate', birthDate);
// console.log('birth_date', birth_date);

// let { weight } = user1
// console.log('weight', weight); // undefined

// let { weight = 80 } = user2
// console.log('weight', weight); // 80

// let { weight = 80 } = user3
// console.log('weight', weight); // 67

let options = {
    title: "Menu"
};
  
let {width: w = 100, height: h = 200, title} = options;

// console.log('w', w);
// console.log('h', h);
// console.log('title', title);

let {name: first_name, ...restUser} = user1
// console.log('first_name', first_name);
// console.log('rest',rest);
// console.log('restUser', restUser);

let [one, two] = [1,2]
console.log(one, two);
[two, one] = [one, two]
console.log(one, two);