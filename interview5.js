// let obj1 = {
//     name: "lakshit",
//     age:20
// }

// let obj2 = {
//     name: "rqahul",
//     age:20
// }

// const obj3 = {...obj1,...obj2};
// console.log(obj3);
// spread operator can merge two objects if both object has same keys then last written object key value overite first one


// function rest1(...args){
//     console.log(args);
// }

// rest1(1,2,3,4);

// const [a,b,...args] = [1,2,3,4,5];
// console.log(args);


// var x= 100;
// {
//    x=50
// }

// let a = 10;
// {
//     let a = 10000;
// }

// console.log(a);


// let obj = {
//     a : 10,
//     b : 10,
//     sum(){
//         return this.a + this.b;
//     }

// }

// const ans = obj.sum;
// console.log(ans());
// give output nan because ans = obj.sum loose its obj property now this will refer to window thats why it gives nan to worl it we use bind


// const a = {};
// const b = {key: "b"};
// const c = {key: "c"};

// a[b]=123; 
// // a["[object object]"] =  123
// a[c]=246;
// // a["[object object]"] =  246 thats why it print 246


// console.log(a[b]);


// const a = {};
// const b = {key: "b"};
// const c = {key: "c"};

// a[b[key]]=123; 
// // a["[object object]"] =  123
// a[c[key]]=246;
// // a["[object object]"] =  246 thats why it print 246
// console.log(a);

// console.log(a["b"]);