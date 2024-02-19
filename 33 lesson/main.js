// click – происходит, когда кликнули на элемент левой кнопкой мыши (на устройствах с сенсорными экранами оно происходит при касании).
// contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши.
// mouseover / mouseout – когда мышь наводится на / покидает элемент.
// mousedown / mouseup – когда нажали / отжали кнопку мыши на элементе.
// mousemove – при движении мыши.
// События на элементах управления:

// submit – пользователь отправил форму <form>.
// focus – пользователь фокусируется на элементе, например нажимает на <input>.
// Клавиатурные события:

// keydown и keyup – когда пользователь нажимает / отпускает клавишу.
// События документа:

// DOMContentLoaded – когда HTML загружен и обработан, DOM документа полностью построен и доступен.
// CSS events:

// transitionend – когда CSS-анимация завершена.

// function countTo3() {
//   console.log('countTo3');
//   for (let index = 1; index <= 3; index++) {
//     alert(index);
//   }
// }
// const btn2 = document.querySelector('#btn2');
// btn2.onclick = function () {
//   alert('second alert');
// };
// btn2.onclick = countTo3; // countTo3() // undefined
// // countTo3 - функция
// // countTo3() - вызов функций

// function first(event) {
//     console.log(event);
//   alert('hello');
// }
// function second() {
//   alert('Bye Bye');
// }

// // addEventListener

// btn2.addEventListener('click', first);
// btn2.addEventListener('click', second);

// const btn3 = document.querySelector('#btn3');
// function onclickbtn3(event){
//     console.log(event.type);
//     console.log(event.currentTarget);
// }
// btn3.addEventListener('click', onclickbtn3)
// btn3.addEventListener('mouseover', onclickbtn3)
// // setTimeout(()=>{
// //     btn3.removeEventListener('click', onclickbtn3)
// // }, 3000)

// let a = {name: 'a'}
// let b = {name: 'a'}
// let c = a
// a == b // false 
// a == c // true


// document.body.addEventListener('mousemove', ()=>{
//     console.log('mouse is moving');
// })

// document.addEventListener('keydown', (event)=>{
//     console.log(event);
// })

// let mouseListener = {
//     handleEvent(event){
//         // console.log(event.type);
//         if(event.type === 'mousedown') this.onMouseDown()
//         if(event.type === 'mouseup') this.onMouseUp()
//     },
//     onMouseDown(){
//         console.log('onMouseDown');
//     },
//     onMouseUp(){
//         console.log('onMouseUp');
//     }
// }
// document.addEventListener('mousedown', mouseListener )
// document.addEventListener('mouseup', mouseListener )

// document.body.addEventListener('click', {
//     handleEvent(evt){
//         console.log('currentTarget', evt.currentTarget); // element где стоит ваш слушатель 
//         console.log('target', evt.target); // element где событие тригернулась
//     }
// })


function onClickDiv(evt){
    console.log('evt', evt );
    // evt.stopPropagation()
}

// btn.onclick = onClickDiv

form.onclick = function(event) {
    event.target.style.backgroundColor = 'yellow';
  
    // браузеру нужно некоторое время, чтобы зарисовать всё жёлтым
    setTimeout(() => {
      alert("target = " + event.target.tagName + 
      ", this=" + this.tagName); // this -> event.currentTarget
      event.target.style.backgroundColor = ''
    }, 0);
  };