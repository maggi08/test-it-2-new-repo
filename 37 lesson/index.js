// function two(){
//   console.log(2);
// }

// function one(callback){
//   console.log(1);
//   callback()
// }

// one(two)

// new Promise((resolve, reject)=>{
//     reject(1)
//   })
//   .catch(()=>{
//     console.log('catch 1');
//   })
//   .finally(()=>{
//     console.log('finally 0');
//   })
//   .then(()=>{
//     console.log('then 1');
//   })
//   .finally(()=>{
//     console.log('finally 1');
//   })
//   .then(()=>{
//     console.log('then 2');
//     // throw Error('err')
//     return new Error('err')
//   })
//   .then((err)=>{
//     console.log(err);
//   })
//   .catch(()=>{
//     console.log('catch 2');
//   })
//   .finally(()=>{
//     console.log('finally 2');
//   })


// Callback -> Promise -> async/await

// Promise.all
let promise1 = new Promise((resolve, reject)=> {
  setTimeout(() => {
    // console.log(1)
    reject('promise1 reject');
  }, 1000)
})

let promise2 = new Promise((resolve, reject)=> {
  setTimeout(() => {
    // console.log(2)
    resolve('promise2 resolved');
  }, 2000)
})

let promise3 = new Promise((resolve)=> {
  setTimeout(() => {
    // console.log(3)
    resolve('promise3 resolved');
  }, 3000)
})

let promises = [promise1, promise2, promise3]

// Promise.all(promises)
//   .then((res)=>{
//     console.log('res', res );
//   })
//   .catch((err)=>{
//     console.log('err', err);
//   })




// Promise.allSettled()
// Promise.allSettled(promises)
//   .then(res=>{
//     // console.log('res', res);
//     res.forEach(prmiseRes=>{
//       if(prmiseRes.status === 'rejected'){
//         console.log(prmiseRes.status + '-' + prmiseRes.reason);
//       }
//       else console.log(prmiseRes.status + '-' + prmiseRes.value);
//     })
//   })
//   .catch(err=>{
//     console.log('err', err);
//   })

// Promise.race первый любой промис
// Promise.race([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 4000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ])
//   .then(alert)
//   .catch((err=>alert(err))); // 1


// Promise.any первое успешное
// Promise.any([
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка! 1")), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка! 2")), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка! 3")), 3000))
// ]).then(alert).catch(err=>{
//   alert(err);
// }) // 1


// Promise.resolve 
// Promise.reject
// let users = ['Malika', 'Aidos']
// let users = []

// function fetchUser(){
//   if(users.length === 0) return Promise.reject('no users')
//   // setTimeout(() => {
//   return Promise.resolve(users)
//   // }, 100);
// }
// console.log(fetchUser());
// fetchUser()
//   .then(res=>{
//     console.log('res', res);
//   })
//   .catch(err=>{
//     console.log('err', err);
//   })



// function getUser(num){
//   if(users.length === 0 ) return Promise.reject('No user data')

//   if(users[num-1]) {
//     return Promise.resolve(users[num-1])
//   }

//   return Promise.reject(new Error('no such user'))
// }

// getUser(1)
//   .then(res=>{
//     console.log('user 1', res);
//   })

// getUser(3)
//   .then(res=>{
//     console.log('user 3', res);
//   })
//   .catch(err=>{
//     console.log('user 3 err', err);
//   })

  // async/await


// async function hello(){
//   return 'Hello'
// }
// function heello(){
//   return new Promise((resolve)=>{
//     return resolve('heelo')
//   })
// } 
// console.log(hello());

// await hello()

async function f() {
  console.log(1);
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("готово!"), 1000)
  });
  
  console.log(2);
  let result = await promise; // будет ждать, пока промис не выполнится (*)
  
  console.log(3);

  alert(result); // "готово!"

  console.log(4);
}

function f() {
  console.log(1);
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("готово!"), 1000)
  }).then(res=>{
    console.log(2);
    console.log(3);
    console.log(res);
    console.log(4);
  })
}

// f();


async function doAllPromises(){
  let first = await promise1
  console.log(first);

  let second = await promise2
  console.log(second);

  let third = await promise3
  console.log(third);
}

doAllPromises()
  .then(()=>{
    console.log('all done');
  })
  .catch((err)=>{
    console.log('err', err);
  })