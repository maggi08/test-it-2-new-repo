let massive = ['h', 'e', 'l', 'l', 'o']

// console.log(massive);

let str = 'How old Are you?'

// console.log(str[0]); // H
// console.log(str[5]); // l
// console.log(str[10]); // e

str[0] = '12312'

// console.log(str);

str = 'переменная с текстом'
// console.log(str);


// console.log('z' > 'a'); // true
// console.log('a' === 'a'); // true
// console.log('A' === 'a'); // false
// console.log('A' > 'a'); // false
// console.log('A' < 'a'); // true

let str2 = 'a purple animal'
// console.log(str2.charAt(0)); // a, тоже самое что это str2[0]
// console.log(str2.charAt(5)); // p, тоже самое что это str2[5]
// console.log(str.indexOf('текст')); // 13
// console.log(str.indexOf('тексте')); // -1
// console.log(str2.indexOf('a')); // 0
// console.log(str2.lastIndexOf('a')); // 17
// console.log(str2.lastIndexOf('a')); // 17

// console.log(str2.startsWith('a')); // true
// console.log(str2.endsWith('a')); // false
// console.log(str2.endsWith('al')); // true

// console.log(str2);
// console.log(str2.length);

// for (let index = 0; index < str2.length; index++) {
//     console.log(str2[index]);
// }

let users = [
    {name: 'user1', email: 'email1@gmai.com'},
    {name: 'user2', email: 'email2@gmai.com'},
    {name: 'user3', email: 'email3@gmai.com'},
]
function getUser(name){
    let result = null
    for(let i = 0; i < users.length; i++){
        // 0
        // 1
        // 2

        if(users[i].name === name){ 
            result = users[i]
            break
        }
    }
    return result
}

// console.log(getUser('user2'));


let str3 = 'hello world'
// he
// wo
// world

// let Prompt = prompt('enter your email')
// console.log(Prompt);
// console.log(Prompt.trim());


      
const lorem = 'Hello Java. Java is the best!'
let lorem2 = lorem.replace('Java', 'javascript')
let lorem3 = lorem.replaceAll('Java', 'Javascript')

// console.log(lorem);
// console.log(lorem2);
// console.log(lorem3);

const splited = lorem3.split(' ')
const splited2 = lorem3.split('')
const splited3 = lorem3.split('Javascript')
// console.log(lorem);
// console.log('splited', splited);
// console.log('splited2', splited2);
// console.log('splited3', splited3);
const joined1 = splited.join(' ')
const joined2 = splited2.join('')
const joined3 = splited3.join('Javascript')
// console.log(splited, joined1);
// console.log(splited2, joined2);
// console.log(splited3, joined3);


// console.log('есть ли слова "Java" в тексте "' + lorem + '"? Ответ:', lorem.includes('Java'));
// console.log('есть ли слова "Javascript" в тексте "' + lorem + '"? Ответ:', lorem.includes('Javascript'));
// console.log('есть ли слова "J" в тексте "' + lorem + '"? Ответ:', lorem.includes('J'));

let hello = "hello, world"
hello.includes('world') // true
hello.includes('world', 8) // false
hello[8] // 'o'
hello.includes('world', 7) //true
hello[7] // 'w'



// let names = ['Aidos', 'Iliyas', "Moldir", 'Malika']

// for (let index = 0; index < names.length; index++) {
//     let name = names[index]
//     if(name.startsWith('M')) console.log('name', name);
// }

let ob = {property: 'значене'}
let mas = ['значене1', 'значене2']
// ob['property'] 
// mas[0]

let ob1 = {name: 'name'}
let ob2 = {name: 'name'}
let ob3 = ob1
// console.log(ob1 === ob2); // false
// console.log(ob3 === ob1); // true
// console.log(ob3 === ob2); // false




let mas1 = [1,2,3,4]
let mas2 = [1,2,3,4]
let mas3 = mas1
// console.log(mas1 === mas2); // false
// console.log(mas3 === mas1); // true
// console.log(mas3 === mas2); // false


let numbers = ['one', 'two', 'four', '123', 'Pi']
numbers.length // 5

for (let index = 0; index < numbers.length; index++) {
   
    console.log(`индекс(позиция элемента массива): ${index}, а значение элемента: ${numbers[index]}`);
    
}