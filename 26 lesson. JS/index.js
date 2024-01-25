let numbers = [1, 23, 4, 7, 7, 8, 7, 4];

function findCountOfNumberInArray(arr, num){
    return arr.filter(el => el === num )
}
let users = [
    {name: 'Moldir', surename: 'surename', email: 'email@gmail.com', age: 8, gender: 'female'}, 
    {name: 'Ardak', surename: 'surename1', email: 'email@gmail.com', age: 15, gender: 'male'}, 
    {name: 'Malika', surename: 'surename1', email: 'email@gmail.com', age: 80, gender: 'female'}, 
    {name: 'Ilias', surename: 'surename', email: 'email@gmail.com', age: 50, gender: 'male'}, 
    {name: 'Aidos', surename: 'surename2', email: 'email@gmail.com', age: 24, gender: 'male'}, 
    {name: 'Jhonny', surename: 'surename2', email: 'email@gmail.com', age: 30, gender: 'male'}, 
    {name: 'Tima', surename: 'surename', email: 'email@gmail.com', age: 43, gender: 'male'},
    {name: 'Aigul', surename: 'surename', email: 'email@gmail.com', age: 3, gender: 'female'},
]
// console.log(findCountOfNumberInArray(numbers, 7))
// console.log(findCountOfNumberInArray(numbers, 8))

// console.log('Males: ', users.filter(e => e.gender === 'male'));
// console.log('Females: ', users.filter(e => e.gender === 'female'));

let getUsersByGenderUnderAge = (arr, gender, age) =>{
    return arr.filter(e => e.gender === gender).filter(e => e.age < age)
}
// console.log('Males under 20 age: ', getUsersByGenderUnderAge(users,'male', 20) );
// console.log('Males under 20 age: ', getUsersByGenderUnderAge(users,'female', 20) );
// console.log('Males under 20 age: ', getUsersByGenderUnderAge(users,'other', 20) );

let userNames = users.map(user => {
    return user.name
})
let userNamesUpper = userNames.map(name=>name.toUpperCase())
// console.log('userNames', userNames);
// console.log('userNamesUpper', userNamesUpper);

let doubledNums = [1,2,35,66,7,100].map(num=>num*2)
// console.log('doubledNums',doubledNums );

let result = []
let users2 = users.map((user)=>{
    return {
        firstName: user.name,
        lastName: user.surename,
        fullName: user.name + ' ' +user.surename
    }
})
// console.log('users2', users2);
// console.log('result', result);

let numbers2 = [5,1,7,23,8,9]
function sortNumbers(a, b){
    console.log('sortNumbers', a, b);
    if( a > b ) return 1
    if( a < b ) return -1
    if( a == b ) return 0
}
function sortNumbers2(a, b){
    return a-b
}
// console.log('inintial', numbers2);
// console.log('default sort', numbers2.sort());
// console.log('custom sort', numbers2.sort(sortNumbers));

function sortUsersByAge(arr){
    return arr.sort((a,b)=>{
        return a.age - b.age
    })
}

function sortUsersByKey(arr, key){
    return arr.sort((a,b)=> {
        if(typeof a[key] === 'string'){
            console.log(a[key] , b[key],a[key] > b[key] ? 1 : -1);
            return a[key] > b[key] ? 1 : -1
        }
        // console.log(a[key], b[key]);
        return a[key]-b[key]
    } )
}

// console.log(sortUsersByAge(users))
console.log('name', sortUsersByKey(users, 'name'))
// console.log('age', sortUsersByKey(users, 'age'))