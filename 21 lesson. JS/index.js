// && || ?? 

// false, null, 0, NaN, '', undefined - falsy 

// Boolean(false) // false
// Boolean(null) // false
// Boolean(0) // false
// Boolean('') // false
// Boolean(undefined) // false


// || -> false, null, 0, NaN, '', undefined - значение ложное
// console.log(false || 2); // 2
// console.log(0 || 2); // 2
// console.log('' || 2); // 2
// console.log(null || 2); // 2
// console.log(undefined || 2); // 2


// ?? -> null, undefined -значение не пределено
// console.log(false ?? 2); // false
// console.log(0 ?? 2); // 0
// console.log('' ?? 2); // ''
// console.log(null ?? 2); // 2
// console.log(undefined ?? 2); // 2



let string = 'asdfasdf'
let number = 234 // NaN
let boolean = false  // true
let bigint = 234n
let undef = undefined
let nul = null
let symbol = Symbol('$')

let obj = {
    string: 'dsaflkasd',
    number: 1231,
    boolean: false,
    myFync: () => {
        console.log('myFunc');
    },
    myFunc2(){
        console.log('myFunc2');
    },
    myFunc3: function (){
        console.log('myFunc2');
    },
    massiv: [1,2,34,5],
    obj2: {
        name: 'name'
    }
}
// console.log(obj);



let user = {
    name: 'FirstName',
    surename: 'LastName',
    email: 'lorem@a.com',
    phoneNumber1: 87022248533,
    age: 23,
    phoneNumber2: 1293918,

    dog: {
        name: 'Aktos',
        age: 4,
    }
}

// console.log(user);
// console.log(user.name);
// console.log(user[`phoneNumber${1}`]);
// console.log(user[`phoneNumber${2}`]); // phoneNumber2


// console.log(user.dog);

// delete user.dog

// console.log(user.dog);


// console.log('age' in user); // true
// console.log('age' in user.dog); // true
// console.log('dog' in user); // true
// console.log('cat' in user); // false
// console.log('birthday' in user); // false

// for(let key in user){
//     // name
//     // surename
//     console.log(`user key is - ${key}, value - ${user[key]}`);
// }

// console.log(new Date());

// function myFunc(){
//     console.log('myFunc');
// }



// let a = 10
// let b = a
// console.log(a); // 10
// console.log(b); // 10
// a = 20
// console.log(a); // 20

// let obj1 = {name: 'Jhon'}
// let obj2 = obj1
// obj1.name = 'Smith'

// console.log(obj1);
// console.log(obj2);\



// let obj1 = {name: "jhon"}
// let obj2 = obj1
// console.log(obj2 == obj1);
// console.log(obj2 === obj1);


// let obj3 = {name: "jhon"}
// let obj4 = {name: "jhon"}
// console.log(obj3 == obj4);
// console.log(obj3 === obj4);

// obj3 = obj4
// console.log(obj3 == obj4);
// console.log(obj3 === obj4);


// var let const

// let obj1 = {
//     name: 'jhone'
// }

// obj1 = {
//     nick: 'jh'
// }

// console.log(obj1);

const constObj = {
    name: 'asdlkf'
}

// constObj = {
//     nick: 'nick'
// }

// constObj.name = 'Jhons'



// console.log(constObj);


let user1 = {name: 'jhon', last: 'smith'}
let clone = {}
// let user2 = {name: 'user2'}

// console.log(user1);
// console.log(clone);

// for(let key in user1){
//     clone[key] = user1[key]
// }

// console.log(user1);
// console.log(clone);


// console.log('user1', user1);
// console.log('clone', clone);
// Object.assign(clone, user1)
// const clone2 = Object.assign({age: 20, name:'killmonger'}, {user1} )
// const clone2 = Object.assign({age: 20, name:'killmonger'}, {user1} )
//  clone = {...user1}
//  clone = {...user1, email: 'email@email.com'}

// console.log('user1', user1);
// console.log('clone', clone);
// console.log('clone2', clone2);


let user2 = {
    name: 'Jhon',
    lastName: 'Smith',
    email: 'email@email.com',
    phoneNumber1: 87022248533,
    age: 23,
    phoneNumber2: 1293918,

    pet: {
        name: 'Aktos',
        age: 4,
    }
}

let userClone = {
    ...user2
}

// var lodash = require('lodash');
// const deepClone = lodash.cloneDeep([user1, {}])

// console.log('user2',user2 );
// console.log('userClone', userClone );
// console.log('deepClone', deepClone );

user2.name = 'mika'
userClone.name = 'rika'

// user2.pet.name = 'Buldog'
// user2.pet = {
//     name: 'asdf',
//     age: 1
// }

// console.log('user2',user2 );
// console.log('userClone',userClone );


// function cloneDeep(object){
//     let newObj = {}
//     for(let key  in object){
//         if(typeof object[key] === 'object'){
//             cloneDeep(object[key])
//         }
//         newObj[key] = object[key]
//     }
//     return newObj
// }

// const cloneOfUser2 = cloneDeep(user2)

// console.log(user2);
// console.log(cloneOfUser2);

// deepClone lodash



let pet = {
    name: 'Aktos',
    age: 5,
    sayHi(){
        console.log('Hello, my name is', this.name);
        console.log('age is', this.age);
    },
    sayHi2: () => {
        console.log('Hello, my name is', this.name);
        console.log('age is', this.age);
    }
}

// pet.sayHi()
// pet.sayHi2()

// if(user2.pet.name){
    // }

console.log('hello', user2.pet.name);
user2.pet = null
console.log('hello', user2?.pet?.name);

let nameOfPet
if(user2?.pet?.name){
    console.log(user2.pet.name);
}
if(user2 && user2.pet && user2.pet.name){
    console.log(user2.pet.name);
}
user2.sayHello()

// console.log(this);