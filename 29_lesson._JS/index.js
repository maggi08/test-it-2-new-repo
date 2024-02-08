
// alert('Hello')
// prompt('hey')

// console.log('window', window);

// console.log(window.innerWidth, window.innerHeight)

// function sayHi(){
//     alert('hello')
// }
// console.log(window);

// console.log(document);
// console.log(document.body);
// document.body.style.background = 'red' // DOM 
// let color = 'red'
// setInterval(()=>{
//     color = color === 'red' ? 'green' : 'red'
//     document.body.style.background = color // DOM  Document Object Module
// }, 1000)
 

// BOM - Browser Object Module

// alert('hasdf')
// prompt('hasdf')
// console.log(navigator.userAgent);
// console.log(navigator);

// console.log(location);
// console.log(localStorage);


// CSSOM

// console.log(document.head);
// console.log(document.body.style);

// console.log(document.body.childNodes);
// console.log(document.documentElement);

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
// console.log('btn3', btn3);
if(btn1){
    btn1.style.background = 'yellow'
}
btn2.style.background = 'red'
// console.log(btn1);

let listItems = document.getElementsByTagName('li')
// console.log();
for( let item of listItems ){
    item.style.fontSize = '48px'
    // console.log(item);
}

// console.log(document.getElementsByClassName('button'));

// document.querySelector
// document.querySelectorAll

// console.log(document.querySelector('li'));
console.log(document.querySelectorAll('li'));
console.log(document.querySelectorAll('ul > li'));
console.log(document.querySelectorAll('ol > li'));
console.log(document.querySelector('#btn1'));
console.log(document.querySelector('.heading-1'));
console.log(document.querySelector('h2'));
console.log(document.querySelector('h4'));

console.log();

let numbers = [1,2,3,4]
numbers[2] = 546
console.log(numbers);

console.log(document.getElementsByName('age'));
let byNames = document.getElementsByName('age')
byNames[1] = 2
console.log(byNames);

for(let i of byNames){
    console.log('i' , i);
}