
// Prime - простые

// let start = 1
// let end = 100

// for (let i = 2; i < end; i++) {
//     let isPrime = true
//     for (let j = 2; j < i; j++) {
//         // console.log(i, j, isPrime);
//         if (i % j === 0) {
//             isPrime = false
//             break
//         }
//     }
//     // console.log('                     ');
//     console.log(i, isPrime);
//     // console.log('                     ');
// }

// 1

// 2 -> 1  2 / 1=2 prime

// 3 -> 2, 1

// 4 -> 3, 2, 1

// 5 -> 4, 3, 2, 1 
// ...
// ...
// ...
// ...


// function onSuccess() {
//     alert("Nice to meet you")
// }

// function onBlabla() {
//     alert("BLABLABALBALBALBALBALBALBALB")
// }


// function onDeny() {
//     alert("GoodBye")
// }

// function sayHello(cb, cb2) {
//     let res = confirm('Hello. How are you?')
//     if (res) {
//         cb()
//     } else {
//         cb2()
//     }
// }

// sayHello(onBlabla, onDeny)




// function sum(a, b) {
//     return a + b
// }


// let sum2 = (a, b) => a + b
// let sum3 = (a, b) => {
//     // ...
//     // ...
//     // ...
//     // ...
//     return a + b
// }


// console.log(sum(2, 7));

// console.log(sum2(2, 7));

// let saySomething = (cb) => console.log(cb())

// let sayHello = () => `Hello world`

// saySomething(sayHello)


// let numbers = [1, 3245, 1235, 15, 2, 15, 1, 51, 25]
// for (let i of numbers) {
//     console.log(i);
// }

// console.log(numbers);
// for (let i = 0; i < numbers.length; i++) {
// console.log(i, numbers[i]);
// }

// numbers.forEach((e) => console.log(e));


let func = function () {
    let result = ''
    for (let index = 0; index < arguments.length; index++) {
        result += arguments[index];
    }
    console.log(result);
}

function sum() {
    let result = 0
    for (let index = 0; index < arguments.length; index++) {
        result += arguments[index];
    }
    return result
}

// func(1, 'hello', false)
// func('12', 'hello', false, null, 0)

console.log(sum(2))
console.log(sum(2, 3))
console.log(sum(2, 3, 4))
console.log(sum(2, 3, 4, 5))