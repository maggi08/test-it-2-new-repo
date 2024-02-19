let btnRed = document.querySelector('#red-button');
setTimeout(() => {btnRed.classList.add('red-btn')}, 1000);
setTimeout(() => {btnRed.classList.remove('red-btn')}, 2000);

let btnYellow = document.querySelector('#yellow-button');
setTimeout(() => {btnYellow.classList.add('yellow-btn')}, 1000);
setTimeout(() => {btnYellow.classList.remove('yellow-btn')}, 2000);

let btnGreen = document.querySelector('#green-button');
setTimeout(() => {btnGreen.classList.add('green-btn')}, 1000);
setTimeout(() => {btnGreen.classList.remove('green-btn')}, 2000);

// change lights for 3 buttons
setInterval(()=> {
  if(btnRed.classList.contains('red-btn')) {
    btnRed.classList.remove('red-btn'); 
    btnYellow.classList.add('yellow-btn');
  } else if (btnYellow.classList.contains('yellow-btn')) {
    btnYellow.classList.remove('yellow-btn'); 
    btnGreen.classList.add('green-btn');
  } else if (btnGreen.classList.contains('green-btn')) {
    btnGreen.classList.remove('green-btn'); 
  } else {
    btnRed.classList.add('red-btn');
  }
}, 1000)


// change lights for 1 button
let btnAllColors = document.querySelector('#all-colors');
setInterval(()=> {
  if(btnAllColors.classList.contains('red-btn')) {
    btnAllColors.classList.remove('red-btn'); 
    btnAllColors.classList.add('yellow-btn');
  } else if (btnAllColors.classList.contains('yellow-btn')) {
    btnAllColors.classList.remove('yellow-btn'); 
    btnAllColors.classList.add('green-btn');
  } else if (btnAllColors.classList.contains('green-btn')) {
    btnAllColors.classList.remove('green-btn'); 
  } else {
    btnAllColors.classList.add('red-btn');
  }
}, 1000)























   





