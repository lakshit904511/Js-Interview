// function check(){
//     return 100;
// }
// var check;
// console.log(check);

// var a = 12;
// console.log(a*12);
// console.log(a**12);

// function test(){
//     s = 1200;
//     console.log(s);
// }
// test();
//  600


// function test(){
//     console.log(test.abc);
// }
// test();
// test.abc = 300;
// test.abc = 600;
// test();
// undefined 600


// console.log({}==={});
// console.log({}=={});


// let a = {
//     name : "rahul"
// }

// let b = {
//     ...a
// }

// b.name = "lakshit";

// console.log(a.name,b.name);


// function test(record){
//   if(record === {age:28}){
//     console.log("1");
//   }else if(record =={age:28}){
//     console.log("2");
//   }else{
//     console.log("3");
//   }
// }

// test({age:28}) 
// object check by their refrences not by value


// most occurence element and times


// let arr = [1,2,1,2,1,4,5,6,1];

// function countoccurence(arr){
//    let mp = {};
//    let maxcount = 0;
//    let maxvalue = 0;
//    for(let i=0;i<arr.length;i++){
//       mp[arr[i]] = (mp[arr[i]] || 0) + 1;
//       console.log(mp);
//       if(mp[arr[i]]>maxcount){
//           maxcount = mp[arr[i]];
//           maxvalue = arr[i];
//       }
//    }
//    console.log(mp);
//    console.log( maxcount,maxvalue);
// }

// countoccurence(arr);



// null and undefined
// console.log(typeof(null));
// console.log(typeof(undefined));
// console.log(null == undefined);
// console.log(null === undefined);



// flat array implementation

// let arr = [
//     [1,2],[2,3],[4,5],[6,[7,8]]
// ]

// function flatarray(arr, depth){
//    let res = [];
//    arr.forEach(ar => {
//     if(Array.isArray(ar) && depth>0){
//         res.push(...flatarray(ar,depth-1));
//     }else{
//         res.push(ar);
//     }
//    })
//   return res;
// }
// console.log(flatarray(arr,2));



// promise.all


// function mypromiseall(promises){
//     let res1 = [];
//     return new Promise((resolve, reject) => {
//         promises.map((promise,i)=>{
//             promise.then((res)=>{res1.push(res);if(i === promises.length -1){resolve(res1)}}).catch((err)=>reject(err));
//         })
//     })
// }

// const promiseall = mypromiseall([Promise.resolve("hello1"),Promise.resolve("HELLO2")]);
// console.log(promiseall.then((res)=>console.log(res)));


// debouncing implementation


// function debounce(cb,d){
//     let timerId;
//     return function(...args){
//         if(timerId){clearTimeout(timerId)}
//         timerId = setTimeout(()=>{
//             cb(...args)
//         },d)
//     }
// }

// function searchInput(args){
//     console.log("debounce funxtion",args);
// }

// const myfunc = debounce(searchInput,1000);
// myfunc("hello");