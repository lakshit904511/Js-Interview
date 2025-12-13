// promise is the event whixch can be fullfilled and rejected.

// const mypromise = new Promise((resolve, reject) => {
//      setTimeout(()=>{
//         console.log("promise called");
//      },2000)
// })

// mypromise.then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })


// callback hell ---> below is the callback hell

// const mypromise = new Promise((resolve, reject) => {
//      setTimeout(()=>{
//         console.log("promise called");
//      },2000)
// })

// const mypromise2 = new Promise((resolve, reject) => {
//      setTimeout(()=>{
//         console.log("promise2 called");
//      },2000)
// })

// const mypromise3= new Promise((resolve, reject) => {
//      setTimeout(()=>{
//         console.log("promise3 called");
//      },2000)
// })
// const mypromise4 = new Promise((resolve, reject) => {
//      setTimeout(()=>{
//         console.log("promise4 called");
//      },2000)
// })


// mypromise.then((res)=>{
//     console.log(res);
//     mypromise2.then((res)=>{
//         console.log(res);
//         mypromise3.then((res)=>{
//             console.log(res);
//             mypromise4.then((res)=>{
//                 console.log(res);
//             })
//         })
//     })
// })
// .catch((err)=>{
//     console.log(err);
// })


// to handle these callback hells we use promise combinators like promise.all, race, allsetted

// const mypromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("promise called");
//         resolve("promise done");
//     }, 2000)
// })

// const mypromise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("promise2 called");
//         resolve("promise2 done");
//     }, 2000)
// })

// const mypromise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("promise3 called");
//         resolve("promise3 done");
//     }, 2000)
// })
// const mypromise4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("promise4 called");
//         reject("promise4 done");
//     }, 2000)
// })

// in promise.all we write all the promise in an array and if any condition is not fullfilled 
// we sent to erro.


// const promise = Promise.all([mypromise,mypromise2,mypromise3,mypromise4]);

// promise.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log("in err");
//     console.log(err);
// });


// in promise.race , it console first fullfilled promise

// const promise = Promise.race([mypromise,mypromise2,mypromise3,mypromise4]);

// promise.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log("in err");
//     console.log(err);
// });

// In promise.allsettled, it console all fullfilled and rejected promises

// const promise = Promise.allSettled([mypromise,mypromise2,mypromise3,mypromise4]);

// promise.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log("in err");
//     console.log(err);
// });

// best way to handle promises is async and await

// async  function promisefunction(){
//     try {
//         const p1 = await new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log("promise called");
//                 resolve("await called");
//             }, 1000);
//         })
//         return p1;

//     } catch (err) {
//         console.log(err);
//     }

// }

// const f = await promisefunction();
// console.log(f);



// output based questuion on promise


// | Step | What runs   | Output    |
// | ---- | ----------- | --------- |
// | 1    | Synchronous | start     |
// | 2    | Synchronous | end       |
// | 3    | Microtask   | promise 1 |
// | 4    | Microtask   | promise 2 |
// | 5    | Macrotask   | timeout   |

// Microtasks (Promises) always execute before macrotasks (setTimeout), even with a delay of 0 ms.


// console.log('start');

// setTimeout(() => {
//     // macrotask
//   console.log('timeout');  
// }, 0);

// Promise.resolve()
// // micro task
//   .then(() => {
//     console.log('promise 1');
//   })
//   .then(() => {
//     console.log('promise 2');
//   });

// console.log('end');



// question 2


// async function foo() {
//   console.log('foo start');
//   await bar();
//   console.log('foo end');
// }

// async function bar() {
//   console.log('bar');
// }

// console.log('script start');

// setTimeout(() => {
//   console.log('setTimeout');
// }, 0);

// foo();

// new Promise((resolve) => {
//   console.log('promise executor');
//   resolve();
// }).then(() => {
//   console.log('promise then');
// });

// console.log('script end');

// | Phase     | Output           |
// | --------- | ---------------- |
// | Sync      | script start     |
// | Sync      | foo start        |
// | Sync      | bar              |
// | Sync      | promise executor |
// | Sync      | script end       |
// | Microtask | foo end          |
// | Microtask | promise then     |
// | Macrotask | setTimeout       |


// question 3

// console.log('start');

// setTimeout(() => {
//   console.log('timeout 1');
//   Promise.resolve().then(() => {
//     console.log('promise inside timeout');
//   });
// }, 0);

// Promise.resolve().then(() => {
//   console.log('promise 1');
// });

// (async function () {
//   console.log('async start');
//   await null;
//   console.log('async end');
// })();

// console.log('end');


// | Line                     | Reason                             |
// | ------------------------ | ---------------------------------- |
// | `start`                  | synchronous                        |
// | `async start`            | synchronous part of async function |
// | `end`                    | synchronous                        |
// | `promise 1`              | microtask (`Promise.then`)         |
// | `async end`              | microtask (after `await`)          |
// | `timeout 1`              | macrotask (`setTimeout`)           |
// | `promise inside timeout` | microtask created inside macrotask |



// ✅ Event Loop Summary (Quick & Clear)

// Synchronous code runs first, top to bottom.

// Microtasks run next:

// Promise.then / catch / finally

// async/await (code after await)

// Macrotasks run last:

// setTimeout

// setInterval

// DOM events
