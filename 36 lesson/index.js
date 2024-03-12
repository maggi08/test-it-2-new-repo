// console.log('init');
let promise = new Promise(function(resolve, reject) {
  // console.log(1);
  resolve("done");

  // console.log(2);
  reject(new Error("Error")); // игнорируется

  // console.log(3);
  setTimeout(() => resolve("…")); // игнорируется
  // console.log(4);
});

// console.log('start');

// promise // pending
//   .then((res)=>{ // fullfilled
//     console.log(res);
//   })
//   .catch((err)=>{ // rejected
//     console.log(err.message);
//   })
//   .finally(()=>{
//     console.log('finally');
//   })
//   .then((res)=>{
//     console.log('res 2', res);
//   })
//   .catch((err)=>{
//     console.log('Error 2', err.message);
//   })
//   .finally(()=>{
//     console.log('finally 2');
//   })


  // promise.then.catch.finally

// console.log('end');


// console.log(1);
// setTimeout(()=>console.log(2)) 
// setTimeout(()=>console.log(3), 1000) 
// console.log(4);


function loadScript(src, callback) {
  return new Promise((resolve, reject)=>{
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      setTimeout(() => {
        resolve('Script is loaded ' + src)
      }, 2000);
    };
    script.onerror = () => reject(new Error('Script is not loaded'));
    document.head.append(script);
  })
}

let loader = document.querySelector('#loader')
console.log('loader', loader);
loader.style.display = 'block'

// loadScript('./index1.js')
//   .then(res=>{
//     console.log(res);
//     return loadScript('./index2.js')
//   })
//   .then(res=>{
//     console.log(res); // undefined
//     return loadScript('./index3.js')
//   })
//   .then(res=>{
//     console.log(res); 
//     return loadScript('./index4.js')
//   })
//   .catch(err=>{
//     console.log('Error', err.message);
//     // return 'catched'
//   })
//   // .then(res=>{
//   //   console.log(ress); 
//   //   throw Error('Some problem')
//   //   // return 'success'
//   // })
//   // .then(res=>{
//   //   console.log(res);
//   // })
//   // .catch(err=>{
//   //   console.log('Error 2', err.message);
//   // })
//   .finally(()=>{
//     console.log('finally');
//     loader.style.display = 'none'
//   })

// Вот так вот можно но лучше то что внизу
// loadScript('./indexx1.js')
//   .then(
//     res=>{
//       console.log(res);
//     },
//     err=>{
//       console.log('err', err.message);
//     }
//   )

  // вот это
// loadScript('./indexx1.js')
//   .then(
//     res=>{
//       console.log(res);
//     },
//   )
//   .catch(err=>{
//     console.log('err', err.message);
//   })

loadScript('./index1.js')
  .then(res=>{
    console.log(res);
    return 'success'
  })
  .finally(()=>{
    console.log('finally');
    return 'finally2'
  })
  .then((res)=>{
    console.log('then 2', res); // then 2 sucess
  })
  // .then((res)=>{
  //   console.log(res);
  // })
  // .catch(err=>{
  //   console.log('err', err.message);
  //   return 'error'
  // })
  // .then((res)=>{
  //   console.log(res);
  // })


  // new Promise(function(resolve, reject) {
  //   setTimeout(() => resolve(1), 1000); // (*)
  // })
  // .then(function(result) { // (**) 
  //   alert(result); // 1
  //   return result * 2;
  // })
  // .then(function(result) { // (***)
  //   alert(result); // 2
  //   return result * 2;
  // })
  // .then(function(result) {
  //   alert(result); // 4
  //   return result * 2;
  // })
  // .then(function(result) {
  //   alert(result); // 8
  //   return result * 3
  // })
  // .finally((result)=>{
  //   alert(result); // undefined
  //   return 'success'
  // })
  // .then(function(result) {
  //   alert(result); // 24
  // })


new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  })
  .then(function(result) {
    // alert(result); // 
    return new Promise((resolve, reject) => { // (*)
      setTimeout(() => resolve(result * 2), 1000 * 2);
    });
  })
  .then(function(result) { // (**)
    // alert(result); // 2  
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000 * 2);
    });
  })
  .then(function(result) {
    alert(result); // 4
  });