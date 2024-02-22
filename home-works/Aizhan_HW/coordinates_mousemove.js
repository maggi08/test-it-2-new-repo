let data = document.querySelector('#box');
let result = document.querySelector('#result');


data.addEventListener('mousemove', (e) => {
  let xPosition = e.clientX;
  let yPosition = e.clientY;
  console.log(xPosition, yPosition);
  result.innerHTML = "x: " + xPosition + "; y: " + yPosition;
});