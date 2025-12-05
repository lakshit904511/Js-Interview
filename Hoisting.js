// output -- undefines
// var x = 1;
// function test() {
//   console.log(x);
//   var x = 2;
// }
// test();

// op-- hello
// foo();
// function foo() {
//   console.log("Hello");
// }

// bar not a function
// bar();
// var bar = function() {
//   console.log("Hello");
// };

// can get greet before intialization
// greet();
// let greet = function() {
//   console.log("Hi");
// };


// // first x undefined, second one is 5
// console.log(x);
// {
//   var x = 5;
// }
// console.log(x);


// refrence error x before intialization
// let x = 10;
// {
//   console.log(x);
//   let x = 20;
// }


// undefined and intialization error
// function test() {
//   console.log(a);
//   console.log(b);
//   var a = 1;
//   let b = 2;
// }
// test();


// undefined
// function f() {
//   console.log(message);
//   if (false) {
//     var message = "Hello";
//   }
// }
// f();


// [Function: test]
// 10
// 1
// var test = 1;
// function fh(){
//     console.log(test);
//     test = 10;
//     console.log(test);
//     return;
//     function test(){}
// }
// fh();
// console.log(test);