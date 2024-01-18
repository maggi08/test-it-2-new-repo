// let phone1 = '7772342343'
// let phone2 = '7772342344'
// .
// .
// .

function getLastElementOfArray(arr){
    return arr[arr.length - 1]
}

let users = ['Moldir', 'Aidos', 'Malika', 'Ilias']
// console.log(users);
// console.log(users.length); // 4
// console.log(getLastElementOfArray(users)); // Ilias

users.push('Magzhan')
// console.log(users);
// console.log(users.length); // 5
// console.log(getLastElementOfArray(users)); // Magzhan

users.push('Saniya')
// console.log(users);
// console.log(users.length); // 6
// console.log(getLastElementOfArray(users)); // Saniya

users.push('Jimbo', 'Jhone', 'Farida')
// console.log(users);
// console.log(users.length); // 9
// console.log(getLastElementOfArray(users)); // Farida

// console.log('2 index of  array: ', users[2]); // Malika
// console.log('last element of  array: ', users[users.length - 1]); // Farida


// console.log(users);
// console.log(users.length); // 9
users.pop()
// console.log(users);
// console.log(users.length); // 8

let deleted1 = users.pop()
let deleted2 = users.pop()

// console.log(users);
// console.log(users.length); // 8
// console.log('deleted1', deleted1); // 
// console.log('deleted2', deleted2); // 

// console.log(users);
users.unshift('Tima')
// console.log(users);
let deleted3 = users.shift()
// console.log(users);
// console.log('deleted3', deleted3);
users.unshift('Tima', 'Kuzia')
// console.log(users);


// splice
// let users1 = ['Moldir', 'Aidos', 'Malika', 'Ilias']
// console.log(users1);

// users1.splice(1, 1) 
// console.log(users1); // ['Moldir', 'Malika', 'Ilias']

// users1.splice(0, 2)
// console.log(users1); // ['Ilias']

// users1.splice(0, 0, 'Rauan')
// console.log(users1); // ['Rauan', 'Ilias']

// users1.splice(2, 0, 'Rimma')
// console.log(users1); // ['Rauan', 'Ilias', 'Rimma']

// users1.splice(10, 0, 'Roma')
// console.log(users1); // ['Rauan', 'Ilias', 'Rimma', 'Roma']

// users1.splice(1, 2, 'Tima', 'Moldir')
// console.log(users1); // ['Rauan', 'Tima', 'Moldir', 'Roma']

// users1.splice(2, 1, 'Nazgul', 'Nargiz', 'Sanniya')
// console.log(users1); // ['Rauan', 'Tima', 'Nazgul', 'Nargiz', 'Sanniya', 'Roma']


// let arr = [1, 2, 5];

// arr.splice(-1, 0, 3, 4);

// alert( arr ); 


// Slice
let letters = ['h', 'e', 'l', 'l', 'o']
let sliced = letters.slice(2, 4)
let sliced2 = letters.slice(3)
let sliced3 = letters.slice(-3)
// console.log('letters:', letters); // ['h', 'e', 'l', 'l', 'o']
// console.log('sliced:', sliced); // ['l', 'l']
// console.log('sliced2:', sliced2); // ['l', 'o']
// console.log('sliced3:', sliced3); // ['l', 'l', 'o']


// Concat
let students1 = ['Jimbo', 'Jhone']
let students2 = ['Jimbo', 'Jhone']
let students3 = students1
let studentsCopy = [...students1]
// console.log(students1 === students2); // false
// console.log(students1 === students3); // true
// console.log(students1 === studentsCopy); // false

let teachers = ['Klara', 'Joy']
let people = students1.concat(teachers)
let people1 = [...students1, ...teachers] // ... - называется spread оператором

// console.log(students1)
// console.log(people);
// console.log(people1)


// let arr = [1, 2];

// // создать массив из: arr и [3,4]
// alert( arr.concat([3, 4]) ); // 1,2,3,4

// // создать массив из: arr и [3,4] и [5,6]
// alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// // создать массив из: arr и [3,4], потом добавить значения 5 и 6
// alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

// console.log(users);
// function printUser(user){
//     console.log('user:', user)
// }

// users.forEach((el) => {
//     console.log(el)
// })
// users.forEach(printUser)

// const printUserIndex = (user, index) =>{
//    alert(`user: ${user}, index: ${index}`)
// }
// users.forEach((user, index) => {
//    alert(`user: ${user}, index: ${index}`)
// })
// users.forEach(printUserIndex)


// Search in arrays


// indexOf
let users1 = ['Moldir', 'Aidos', 'Malika', 'Ilias', 'Aidos', 'Malika']
let users2 = [
   {name: 'Moldir'},
   {name: 'Aidos'},
   {name: 'Malika'},
   {name: 'Ilias'},
   {name: 'Aidos'},
   {name: 'Malika'}
]
// console.log(users1.indexOf('Aidos')); // 1
// console.log(users1.indexOf('Ilias')); // 3
// console.log(users1.lastIndexOf('Aidos')); // 4
// console.log(users1.lastIndexOf('Malika')); // 5
// console.log(users1.lastIndexOf('Malika')); // 3
// console.log(users1.indexOf('Magzhan')); // -1
// console.log(users1.lastIndexOf('Magzhan')); // -1

// console.log(users1.includes('Magzhan')); // false
// console.log(users1.includes('Malika')); // true

let arr = [1, 0, false];

// в indexOf, includes идет строгое сравнивание
// alert( arr.indexOf(0) ); // 1
// alert( arr.indexOf(false) ); // 2
// alert( arr.indexOf(null) ); // -1
// alert( arr.includes(1) ); // true
// alert( arr.includes('') ); // false





// Function Expression
let print1 = function(msg){
    console.log(msg)
}
// Function Declaration
function print2(msg){
    
    console.log(arguments)
}
// print2('adsf', 23, 45)
// Arrow Functions
const print3 = (msg) => {
    // this 
    console.log('arrow', arguments);
    console.log(msg)
}
// print3('adsf', 23, 45)

// let saySomethig = null
// let otvet = prompt('Are you friendly?')
// if(otvet){
//     saySomethig = function(){
//         console.log('Hello');
//     }
// }else{
//     saySomethig = function(){
//         console.log('Goodbye');
//     }
// }

// saySomethig()


function sum(a, b){
    return a + b
}

// sum(2, 4) // 6
// sum(6, 4) // 10
// sum(6, 4, 10) // 10
// sum(6, 4, 10, 20) // 10

function superSum(){
    let result = 0
    console.log(arguments);

    let copy = [...arguments]
    console.log(copy);

    copy.forEach(arg=>{
        result += arg
        console.log('arg', arg);
    })

    return result
}

// console.log(superSum(6, 4, 10, 20)); // 40

function superSum2(...vseArgumenty){
    let result = 0
    vseArgumenty.forEach(arg=>{
        result += arg
        console.log('vseArgumenty', arg);
    })
    return result
}
// console.log(superSum2(6, 4, 10, 20)); // 40





// find, findIndex, findLastIndex
let users3 = [
    {name: 'Moldir', surename: 'surename', email: 'email@gmail.com', age: 24}, 
    {name: 'Aidos', surename: 'surename1', email: 'email@gmail.com', age: 24}, 
    {name: 'Malika', surename: 'surename1', email: 'email@gmail.com', age: 24}, 
    {name: 'Ilias', surename: 'surename', email: 'email@gmail.com', age: 24}, 
    {name: 'Aidos', surename: 'surename2', email: 'email@gmail.com', age: 24}, 
    {name: 'Malika', surename: 'surename2', email: 'email@gmail.com', age: 24}, 
    {name: '', surename: 'surename', email: 'email@gmail.com', age: 24},
]
// users3.includes('Aidos') // true
// users3.includes('aidos') // false includes, indexOf, lastIndexOf используют строгое сравнение (===)
// users3.includes(0) // false includes, indexOf, lastIndexOf используют строгое сравнение (===)

// console.log(users3.includes('Aidos')); // false
function findByName(name){
    let result;
    users3.forEach((user)=>{
        if(user.name === name){
            result = user
        }
    })
    return result
}

function findByName2(arr, name){
    let result;
    for (let i = 0; i < arr.length; i++ ){
        let user = arr[i]
        // console.log('findByName2', i, user.name )
        if(user.name === name){
            result = user
            break;
        }
    }
    return result
}

function findByNameFromLast(arr, name){
    let result;
    for(let i = arr.length -1; i >= 0; i--){
        let user = arr[i]
        if(user.name === name){
            result = user
            break
        }
    }
    return result
}

function findByNameProVersion(arr, neededName){
    let result
    result = arr.find((el)=>{
        return el.name === neededName
    })
    return result
}
function findByNameProVersion2(arr, neededName){
    return arr.find((user) => user.name === neededName)
}

function findIndexByName(arr, name){
    let result
    result = arr.findIndex((user)=>{
        // console.log('user', user);
        return user.name === name
    })
    return result
}

function findLastIndexByName(arr, name){
   return arr.findLastIndex((user) => user.name === name )
}


findByName('Aidos')
findByName2(users3, 'Malika')
findByNameFromLast(users3, 'Malika')
findByNameProVersion(users3, 'Malika')
findByNameProVersion2(users3, 'Malika')
findIndexByName(users3, 'Malika') // 2
findIndexByName(users3, 'Magzhan') // -1
findLastIndexByName(users3, 'Malika') // 
findLastIndexByName(users3, 'Aidos') // 
let index  = findLastIndexByName(users3, 'Malika') //
// console.log(users3[index]);

let users4 = [
    {name: 'Moldir', surename: 'surename', email: 'email@gmail.com', age: 24}, 
    {name: 'Aidos', surename: 'surename1', email: 'email@gmail.com', age: 24}, 
    {name: 'Malika', surename: 'surename1', email: 'email@gmail.com', age: 24}, 
    {name: 'Ilias', surename: 'surename', email: 'email@gmail.com', age: 24}, 
    {name: 'Aidos', surename: 'surename2', email: 'email@gmail.com', age: 24}, 
    {name: 'Malika', surename: 'surename2', email: 'email@gmail.com', age: 24}, 
    {name: '', surename: 'surename', email: 'email@gmail.com', age: 24},
]

users4.find((el, index, arr)=>{
    console.log('index', index);
    console.log('el', el);
    console.log('arr', arr);
})
