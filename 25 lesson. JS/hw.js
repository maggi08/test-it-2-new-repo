// 1)
// Переведите текст вида border-left-width в borderLeftWidth
// важность: 5
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

// let text = 'my-short-string';

// function camelize(str){
//     let strArray = str.split('');
//     let result;
//     for (let i = 0; i < strArray.length; i++){
//         if(strArray[i] !== '-') continue

//         if(strArray[i+1]) strArray[i+1] = strArray[i+1].toUpperCase();
//         strArray.splice(i, 1);
//     }
//     result = strArray.join('');
//     return result
// }
// console.log(camelize(text));
// console.log(camelize('my-short-string-'));
// console.log(camelize('-my-short-string-'));

// // 2. Поиск индекса элемента:
// // Напишите функцию, которая принимает массив и значение, а затем возвращает индекс первого вхождения этого значения в массиве. Если элемент не найден, вернуть -1.
let arr = [1, 2, 3, 4, 7, 6, 7, 7, 8];
let num = 9;
function findIndex(array, number) {
  return array.indexOf(number);
}
// findIndex(arr, num);

// 3)
// Сумма элементов массива:
// Напишите функцию, которая принимает массив чисел и возвращает их сумму.
function arrSum(numbers) {
  let S = 0;
  for (let i = 0; i < numbers.length; i++) {
    S += numbers[i];
  }
  return S;
}

// let array2 = [1, 3, 45, 5, 2, 6];

// alert (arrSum(array2));

// 4)
// Нахождение максимального элемента:
// Напишите функцию, которая принимает массив чисел и возвращает наибольшее число в этом массиве.
function findMaxNumber(numbers) {
  //простая функция для макс числа без проверки отрицательных
//   let max = Number.MIN_SAFE_INTEGER;
	let max = numbers[0]


//   console.log('max', max, Number.MIN_VALUE);
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    } 
  }
  return max;
}
let array3 = [1, 2, 3, 4, 5, 6, 7];
let array4 = [ -7, -1, -2, -3, -4, -5, -6, 10];
// console.log(new Date());
// console.log(findMaxNumber(array3));
// console.log(findMaxNumber(array4));

// 5)
// Объединение двух массивов:
// Напишите функцию, которая принимает два массива и возвращает новый массив, содержащий элементы обоих исходных массивов.

//грубый вариант решения через два цикла
function arr_merger (arr1, arr2) {
    let arrMerger = [];
    let a = 0;
    for (let i = 0; i <arr1.length; i++){
        arrMerger [i] = arr1[i];
        a++;
    }

    for (let i = 0; i < arr2.length; i++){
        arrMerger [a] = arr2[i];
        a++;

    }
    return arrMerger;
}
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
let num3 = arr_merger (num1, num2);

// for (let i = 0; i < num3.length; i++) {
//     alert(num3[i]);
// }
// простое решение через push и slice
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
function array_union (first, second){
    let arr_union = first.slice(0); //сначала копируем первый массив в основной
		arr_union.push(...second) // arr_union.push(4,5,6) 
    // for (let i = 0; i < second.length; i++){
    //     arr_union.push(second[i]); //через пуш добавляем элементы второго массива в конец основного
    // }
    return arr_union;
}

function mergeArray(arr1, arr2){
	return arr1.concat(arr2)
}
function mergeArray2(arr1, arr2){
	return [...arr1, ...arr2]
}
// let result = mergeArray2(arr1, arr2);
// for (let i = 0; i < result.length; i++) {
//     console.log(result[i]); //вывод через алерт для проверки
// }


// 6)
// Подсчет количества определенных элементов:
// Напишите функцию, которая принимает массив и значение, а затем возвращает количество вхождений этого значения в массиве.
let arr3 = [1, 2, 3, 4, 7, 6, 7, 7, 8];
let numm = 7;
function sumFind (array, number){
    let result = 0;
    let index = array.indexOf(number);
    while (index != -1){
        result++;
        index = array.indexOf(number, index+1);
    }
    return result;
}

// console.log(sumFind (arr3, numm));

// 7)
// Напишите функцию, которая принимает массив и возвращает новый массив, элементы которого следуют в обратном порядке.
let array = [1, 2, 3, 4, 5];
function revers (arr) {
    let result = [];
    for (let i = arr.length - 1; i>=0; i--){
        result.push(arr[i]);
    }
    return result;
}
revers (array);

// 8)
// Преобразование элементов:
// Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий те же строки, но с добавленным восклицательным знаком в конце каждой строки.
let array = ['быть', 'или', 'не', 'быть', 'вот'];
function exclamation_point(arr){
		// let result = []
    for (let i=0; i< arr.length; i++){
        arr[i] = arr[i]+'!';
    }
    return arr;
}
exclamation_point (array);
