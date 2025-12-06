// const nums = [1,2,3,4];
// const arr = nums.map((num)=>{return num*10});
// console.log("map method", arr);


// const nums1 = [1,2,3,4];
// const arr1 = nums.filter((num)=>{return num>1});
// console.log("filter method", arr1);


// const nums2 = [1,2,3,4];
// const arr2= nums.reduce((acc,num)=>{return num+acc},0);
// console.log("reduce method", arr2);


// Pollyfills for map, filter, reduce 
// pollyfills are the own implementation of a feature


// map pollyfills
// Array.prototype.myMapPollyfills =  function(cb){
//     console.log(this,cb);
//     let temp = [];
//     for(let i=0;i<this.length;i++){
//         temp.push(cb(this[i]));
//     }
//     return temp;
// }

// const nums = [1,2,3,4];
// const arr = nums.myMapPollyfills((num)=>{return num*10});
// console.log("map method", arr);


// filter polly fills
// Array.prototype.myFilterPollyfills =  function(cb){
//     console.log(this,cb);
//     let temp = [];
//     for(let i=0;i<this.length;i++){
//         if(cb(this[i])){
//             temp.push((this[i]));
//         }
//     }
//     return temp;
// }

// const nums = [1,2,3,4];
// const arr = nums.myFilterPollyfills((num)=>{return num>2});
// console.log("map method", arr);



// reduce polly fills
// Array.prototype.myReducePollyfills =  function(cb,intialValue){
//     console.log(this,cb);
//     let acc = intialValue;
//     for(let i=0;i<this.length;i++){
//        acc = acc ? cb(acc,this[i],this) : this[i];
//     }
//     return acc;
// }

// const nums = [1,2,3,4];
// const arr = nums.myReducePollyfills((acc,num)=>{return num+acc},0);
// console.log("map method", arr);


// DIFF BETWEEN FOR EACH AND MAP
// MAP RETURN ARRAY AFTER THAN WE CAN PERFOEM OTHER OPERATION BUT IN CASE OF FOE EAC IT ONLY MODIFY THE VALUE OF ARRAY

// const nums = [1,2,3,4];
// const arr = nums.map((num)=>{return num*10}).filter(
//     (num) => {return num>10}
// );
// console.log("map method", arr);


// const numsforeach = [1,2,3,4];
// const numsforeach2 = numsforeach.forEach((num,i)=> {numsforeach[i] = num*10})
// console.log(numsforeach);


// pratice

// const students = [
//   {
//     name: "Aman",
//     rollNumber: 101,
//     marks: 85
//   },
//   {
//     name: "Lakshit",
//     rollNumber: 102,
//     marks: 92
//   },
//   {
//     name: "Rohit",
//     rollNumber: 103,
//     marks: 78
//   }
// ];

// const names = students.filter((student)=>{return student.marks>80 && student.rollNumber >80});
// console.log("names",names);

// const sumofallmarks =  students.reduce((acc,student)=>{return acc+student.marks},0);
// console.log("totalmarks",sumofallmarks);


// iife function

// (function(x){
//   return (function(y){
//     console.log("dflnkdfs",x);
//   })(2)
// })(1)

// closures gives the function access to its outer scope, when a function is created closure also created as well.

// function init(){
//     var name = "lakshit";
//     function call(){
//         console.log("call me",name);
//     }
//     call();
// }
// init();

// spread and rest operator

// rest operator
// function add(x,y,...args){
//     console.log("...args",args,x,y);
// }

// add(1,2,3,4)

// // spread operator

// function sub(...args){
//   const arr1 = [1,2,3,4];
//   console.log("combined array",[...arr1,args]);
// }

// sub(1,2,3,4);


// arrow function and regular function diffrence
// let obj = {
//     x: "string",

//     name1: () => {
//         console.log(
//             "arrow function this difference",
//             this.x
//         );
//     },

//     name2: function () {
//         console.log(
//             "regular function this difference",
//             this.x
//         );
//     }
// };

// obj.name1();
// obj.name2();



// closure chainniing
// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }

// console.log(add(1)(2)(3));

// questions

// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     // access above scope
//     console.log(count); // Output ?
//   }
// //   access by outer scope
//   console.log(count); // Output?
// })();



// 4. Can you create a function named createBase to show the below functionality?

// function createBase(base){
//     return function(num){
//      return num+base;
//     }
// }
// var addSix = createBase(6);
// console.log(addSix(10));// returns 16
// console.log(addSix(21));// returns 27


// closure help to optimise the time

// function count(num){
//     const a = [];
//     for(let i =0;i<100000;i++){
//         a[i]=i*i
//     }
//     console.log(a[num]);
// }

// console.time("6");
// count(6);
// console.timeEnd("6");  it takes 39ms


// with the help of closure chaining we cna reduce time as well


// function count(){
//     const a = [];
//     for(let i =0;i<100000;i++){
//         a[i]=i*i
//     }
//     return function(num){
//         return a[num];
//     }
// }

// console.time("6");
// const c = count();
// c(6);
// console.timeEnd("6"); 6: 7.155ms



// question
// for (var i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i); // What is logged? 333 because var in function scope
//   }, 1000);
// }


// 1️⃣ var is function-scoped

// Only one variable i exists

// All loop iterations share the same i


// 1️⃣ let is block-scoped

// JavaScript creates a new i for each iteration

// Each loop iteration has its own lexical environment


// for (let i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i); // What is logged?
//   }, 1000);
// }


// infinite curry function

// function add(a){
//     return function(b){
//         if(b)return add(a+b);
//         else return a;
//     }
// }
// const a = add(1)(2)();
// console.log(a);

