// let x = prompt('2 + 2 = ?')
// x = +x
// // x = '4'

// switch(x){
//     case 3: 
//         alert('маловато')
//         break

//     case 4: 
//         alert('Правильно')
//         break

//     case 5: 
//     case 6:
//         alert('большевато')
//         break;

//     default: alert('ошибочка')
// }


// console.log('sadfads');
// Functions

function sayHello(){
    alert('Hello');
}

function sum(num1, num2){
    console.log(num1 + num2)
}

// sum(2, 3)
// sum(265, 233)
// sum(10, 56)


function greet(name = 'friend'){
    alert('Hello ' + name)
}

// greet('Hasbik')
// greet()
// greet('Sonik')

function pow(number, power=2){
    return number**power
}

// pow(2, 3)
// pow(5, 6)
let result = pow(5)
let result2 = pow(6)
// alert('result is ' + (result + result2))
// pow(212)
// pow(556)

// 0 - 100, 6

function divNumber(number){
    let result = 0
    if(number < 100 || number > 1000) return 'Error'
    
    for (let num = 100; num < 1000; num++) {
        if(num % number === 0) {
            result = num
            break
        }
    }

    return result
}


// console.log('result is - ', divNumber(45))
// console.log('result is - ', divNumber(45))


// var City = "Almaty"

// function hello(){ //global function
//     var city = 'Astana' // local variable

//     function hi(){ // local function
//         console.log('hi', city); // leksical
//     }
//     hi()
//     console.log('hello', city);
// }
// // hi()
// // console.log(city);

// hello()

// console.log(City);




if(true){
    let name = 'Jim'
    console.log('1',name);
}
console.log('2',name);

//hoisting
// var circle = undefined
// circel = ci

let pi = 3.14
circle(2)
function circle(length){ // function declaration
    let text = 'a'
    console.log( length * pi, text);
}
circle(4)

// area(2, 3)
let area = function(a,b){ //function expression
    return a * b
}

function calculateRectangle(a, b){
    let area = function() {
        return a*b
    }
    let peremetr = function (){
        return 2*a + 2*b
    }

    return area() + ' ' + peremetr()
}
console.log(calculateRectangle(2, 2));
