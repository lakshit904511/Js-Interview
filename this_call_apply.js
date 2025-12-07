// GIVES UNDEFINED BECAUSE ARROW FUNCTION TAKE WINDOW OBJECT MEANS ITS PARENT OBJECT.

// let user = {
//     name: "lakshit",
//     Call1: function(){
//         return this.name;
//     },
//     Call2: ()=>{return this.name}
// }

// console.log(user.Call1(),user.Call2());


// TO MAKE IT WORKING WE HAVE TO WRITE ARROW FUNCTION IN NESTED FUNCTION

// let user = {
//     name: "lakshit",
//     Call1: function () {
//         return this.name;
//     },
//     Call3: function(){
//         const call2 = () => { return this.name }
//         return call2();
//     }
// }

// console.log(user.Call1(), user.Call3());


// it gives undefined because ref take refrence of window object.
// function mk(){
//     return {
//         name: "lakshit",
//         ref: this
//     }
// }

// let user = mk();
// console.log(user.ref.name); 

// to get expected output


// function mk(){
//     return {
//         name: "lakshit",
//         ref(){return this.name}
//     }
// }

// let user = mk();
// console.log(user.ref()); 


// output based question
// print undefined because logmsg work as callback function so it take refrence of window.
// const user = {
//     name: "lakshit",
//     logmsg() {
//         console.log(this.name);
//     }

// }
// setTimeout(user.logmsg, 3000);


// apply explict method

// const user = {
//     name: "lakshit",
//     age: 18
// }


// function callMe(city){
//     console.log(` my name ${this.name} and age is ${this.age} and from ${city} `)
// }

// callMe.apply(user,["saharanpur"]);


// call method bind object

// const user = {
//     name: "lakshit",
//     age: 18
// }


// function callMe(city){
//     console.log(` my name ${this.name} and age is ${this.age} and from ${city} `)
// }

// const c1 = callMe.call(user,"saharanpur");


// bind method

// const user = {
//     name: "lakshit",
//     age: 18
// }


// function callMe(city){
//     console.log(` my name ${this.name} and age is ${this.age} and from ${city} `)
// }

// callMe.bind(user)("Saharanpur");


// arrow function always take global contrext

// const personOne = {
//   age: '20',
// };

// var age = '10'

// // Arrow Function
// const getAge = () => {
//   console.log(this)  // window object
//   return this.age;
// };

// // // console.log(getAge());
// // console.log(getAge.call(personOne));
// // // console.log(getAge.apply(personOne));
// // // console.log(getAge.bind(personOne)());


// settimeout takes callback in that case function prints blank
// const person = {
//   name: "Bruce Wayne",
//   getName: function() {
//      console.log(this.name);
//   }
// };

// person.getName();  // Bruce Wayne


// // What happens here?
// setTimeout(person.getName, 2000)

// to make this unblank we can use bind

// setTimeout(person.getName.bind(person),200);
// setTimeout(()=>{person.getName()},200);


// we can merge array with the help of apply

// const arr1 = [1,2,3];
// const arr2 = ["1","2","3"];

// arr1.push.apply(arr1,arr2);
// console.log(arr1);


// bind chaining does not exits because if a function bind with an object then it does not bind woth others

// function name1(){
//     console.log(this.name);
// }

// console.log(name1.bind({name: "lakshit"}).bind({name:"rahul"})());


// PollyFills for call, bind and apply


// Function.prototype.mycall = function (context = {},...args){
//     console.log(this,context);
//     if(typeof this !== "function"){
//         throw console.error("tis is not function");
//     }
//     context.fn = this
//     return context.fn(...args);
// }

// const personOne = {
//   age: '20',
// };

// function callme(){
//     return this.age;
// }

// console.log(callme.mycall(personOne))


// pollyfills for  apply

// Function.prototype.myapply = function (context = {},...args){
//     console.log(this,context);
//     if(typeof this !== "function"){
//         throw console.error("tis is not function");
//     }
//     context.fn = this
//     return context.fn(...args);
// }

// const personOne = {
//   age: '20',
// };

// function callme(name){
//     return this.age 
//     + `${name}`;
// }

// console.log(callme.myapply(personOne,["lakshit"]))


// polly fills for bind

// Function.prototype.mybind = function (context = {},...args){
//     console.log(this,context);
//     if(typeof this !== "function"){
//         throw console.error("tis is not function");
//     }
//     context.fn = this
//     return function(...args){
//         return context.fn(...args);
//     } 
// }

// const personOne = {
//   age: '20',
// };

// function callme(){
//     return this.age;
// }

// console.log(callme.mybind(personOne)())


