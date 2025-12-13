// function abc(){
//     console.log(abc.xyz);
// }

// abc();
// abc.xyz =400;
// abc.xyz =  200;
// abc();
// ans: undefined, 200



// const numbers = [1,2,3,4];
// numbers[100]=500;
// console.log(numbers);
// // ans print 100 --- 500 and rest from 5 to 98 empty


// console.log(typeof(typeof(100)));
// it will print string becauze type of 100 is number which print as string so ans is string



// const arr = [..."10"];
// console.log(arr);
// it destructure the string like spread operator do but if in place of string we give number it will give error

// console.log(parseInt('10+2'));
// console.log(parseInt('7FM'));
// console.log(parseInt('M7F'));
// it will print 10,7,nan because in first case it get plus after 10 so it convert this
// into 10 same for 2nd one as well but in case of third it will give nan because first value is not number


// console.log([1,2,3]).map(num=>{
//     if(num>0) return;
//     return num*2
// })
// it undefined



// {
//     function abc(){
//         console.log("Abc");
//     }
// }
// abc();
// The { ... } here is just a block, not an object.
// The function abc is declared inside that block.
// In non-strict mode, function declarations inside a block are still hoisted to the outer scope.
// So abc() is accessible and gets executed. if use strict mode then it will give undefined


// mutation means changing exiting array

// const arr = [1,2,3,4,5,6];
// console.log(arr.splice(1,4));



// myfunc();

// var myfunc = function myfunc(){
//     console.log("1");
// }

// myfunc();

// myfunc();

// function myfunc(){
//     console.log("2");
// }

// myfunc();

// function myfunc(){
//     console.log("3");
// }

// myfunc();



// var variable =10;
// (()=>{
//   console.log(variable);
//   variable = 20;
//   console.log(variable);
// })()

// console.log(variable);

// var variable = 30;


// var variable =10;
// (()=>{
//     foo =10
//   console.log(variable);
//   variable = 20;
//   var foo = 20;
//   console.log(variable);
// })()

// console.log(foo);
// console.log(variable);

// var variable = 30;

// during hosting it host root level variable in memory but foo is defined in function so it can not access outer 

// {
//     for(var i=0;i<3;i++){
//         console.log(i);
//     }
// }


// throtling and debouncing


// function debounce(fn,delay){
//     let timerId;
//     return function(...args){
//        clearTimeout(timerId);
//        setTimeout(()=>{
//          fn(...args);
//        },delay)
//     }
// }


// function throtle(fn,delay){
//     let last = 0;
//     return function(...args){
//         const now = Date.now();
//         if(now-last<delay){
//             return;
//         }
//         last =  now;
//         fn(...args);
//     }
// }

// throtle(fn,1000);
// function searhInput(args){
//    console.log(args);
// }

// const debounce1= debounce(searhInput,2000);



// console.log("20" + 2020 -"20" - "20");

// console.log("20" - 2020 -"20" - "20");

// console.log(2020 -"20" - "20");

// console.log(2020 + "20");

// console.log([..."Hello"]);

// console.log([...[1,2,3]]);

// console.log([..."123"]);


// console.log(parseInt("10Hello"));

// console.log(parseInt("H5e6llo"));

// console.log(typeof([]))

// console.log(typeof([]))
// console.log(typeof({}))
// console.log(typeof(NaN))
// console.log(typeof(undefined))


// let abc =200;
// if(function xyz(){}){
   
// }
