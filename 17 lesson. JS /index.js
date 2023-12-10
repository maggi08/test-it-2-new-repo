// console.log(4 < 5); // true
// console.log(5 < 4); // false

// let a = 1
// let b = 2
// let c = 1

// console.log(a >= b); // false
// console.log(a >= c); // true
// console.log(a <= c); // true

// console.log(2 == 2); // true
// console.log('text' == 'text'); // true
// console.log(2 == 3); // false

// console.log(2 != 3); // true
// console.log(2 != 2); // false

// console.log('a' == 'a'); // true
// console.log('a' == 'b'); // false

// console.log('a' > 'b'); // true
// console.log('cat' > 'cattie'); false


// console.log(1 > '0'); // true
// console.log(1 > 'a0'); // false
// console.log('01' == 1); // true

// console.log('0' == '0'); // true
// console.log(2 > '1'); // true
// console.log('text' + 2); // 'text2'


// Boolean(true) true
// Number(1) true
// Boolean(1) true

// console.log(true == 1); // true
// console.log(false == 0); // true
// console.log(false == ''); // true




// === строгое сравнивание
// let number = 1
// number = '1'


// console.log(1 == '1'); // true
// console.log(1 === '1'); // false

// console.log(1 === true); // false
// console.log(0 === false); // false
// console.log(0 === ''); // false
// console.log(0 === 0); // true
// console.log('text' === 'text'); // true


// let userName = prompt('Enter you name:')
// console.log('userName ', userName);
// if (userName) {
//   console.log(`Hello ${userName}`);
// } else {
//   console.log("You don't entered your name");
// }

// let question = confirm("is 2+2 equal to 4")
// if (question) {
//   console.log('success');
// } else {
//   console.log('error');

// }

// let age1 = prompt('user1 Enter age')
// let age2 = prompt('user2 Enter age')

// if (age1 === age2) {
//   console.log(
//     'they are have same age'
//   );
// } else if (age1 > age2) {
//   console.log('user1 старше чем  user2');
// } else if (age1 === '2') {
//   console.log('2222222');
// } else {
//   console.log('error');
// }


// ?

// let age = prompt('Сколько вам лет')
// if (age >= 18) {
//   console.log('разрешено');
// } else if (age < 13) {
//   console.log('еще нужно вырасти');
// } else {
//   console.log('запрещено');
// }

// let result =
//   age >= 18 ? 'разрешено' :
//     age < 13 ? 'еще нужно вырасти' :
//       'запрещено'


// console.log('result', result);


// && and и
// console.log(true && true); // true
// console.log(false && true); // false
// console.log(true && false); // false
// console.log(false && false); // false
// console.log(1 && 2 && 3); // 3 // Boolean(1) Boolean(2) Boolean(3) 
// console.log(1 && '' && false); // '' // Boolean(1) Boolean(2) Boolean(3) 
// -> true true true -> true

// || or или
// console.log(true || true); // true
// console.log(false || true); // true
// console.log(true || false); // true 
// console.log(false || false); // false 

// console.log(1 || 2 || 3); // 1
// console.log(false || '' || null); // null
// console.log(false || '' || true || "" || null); // true
// console.log(false || '' || '1' || "" || null); // '1'

// ! not не

// let a = true
// console.log(!a); // false
// console.log(!false); // true
// console.log(!''); // true
// console.log(!'text'); // false

// let name = prompt('Enter name')
// let age = prompt('Enter age')
// let email = prompt('Enter email')
// let isFullInfo = name && age && email
// console.log('isFullInfo', !!isFullInfo);

// if (isFullInfo === true) {
//   alert(`Name: ${name} and age: ${age} and email: ${email}`)
// } else {
//   alert(`error`)
// }

// ?? is nullable  нулевое слияние









