// // console.log('main');
// //

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error('script is not exist'));
  document.head.append(script);
}

// loadScript('./index1.js', step1)

// function step1(error, data){
//   if(error){
//     console.log(error.message);
//   }else{
//     loadScript('./index2asdf.js', step2)
//   }
// }
// function step2(error, data){
//   if(error){
//     console.log(error.message);
//   }else{
//     loadScript('./index3.js', step3)
//   }
// }
// function step3(error, data){
//   if(error){
//     console.log(error.message);
//   }else{
//     loadScript('./index4asdf.js', step4)
//   }
// }
// function step4(error, data){
//   if(error){
//     console.log(error.message);
//   }else{
//     console.log(data);
//   }
// }
// loadScript('./index1.js', function (data) {
//   console.log(data);
//   loadScript('./index2.js', () => {
//     console.log(data);
//     loadScript('./index3.js', function () {
//       console.log(data);
//       loadScript('./index4.js', function () {
//         //  ...
//         //  ...
//         //  ...
//         //  ...
//       });
//     });
//   });
// });

// console.log('start'); // синхронность
// loadScript('./index1.js') // 1 // асинхронность
// loadScript('./index2.js') // 2 // асинхронность
// console.log('end'); // синхронность

// console.log(1);
// console.log(2);
// console.log(123);
// console.log(12);


// Promise - обещание


// let createFilm = new Promise((resolve, reject)=>{
//   // let promptRes = confirm('Is film created?')
//   // if(promptRes) resolve('Happy end')
//   // reject(new Error('Netflix closed'))

//   setTimeout(()=>{
//     reject('date is loaded')
//   }, 5000)
// })
// console.log(createFilm);
// // createFilm.then((res)=>{
// //   console.log(res);
// // })
// createFilm.catch((error)=>{
//   alert(error.message);
// })
// console.log('asdf');

// console.log('start');
// createFilm
//   .then(res=>{
//     console.log('res', res);
//     console.log('then createFilm', createFilm);
//   })
//   .catch(err=>{
//     console.log('err', err.message);
//     console.log('err createFilm', createFilm);
//   })
// console.log('end', createFilm);

function loadScript(){
  return 
}
