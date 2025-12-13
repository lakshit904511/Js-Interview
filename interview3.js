// index of

// let arr = [1,2,3,4,5,1,2,2,1,1];
// console.log(arr.indexOf(2,2));


// saorting for numbers
// let arr = [1,2,3,4,5,1,2,2,1,1];
// // asscending
// console.log(arr.sort((a,b)=>a-b));
// // descending
// console.log(arr.sort((a,b)=>b-a));

// sorting for charcter and string

// let arr = ['Asjd','Bsdd','c','Asjd'];
// console.log(arr.sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase())));


// console.log([]===[]);
// console.log([]==[]);

// 🔥 1. Why [] === [] is false?

// === checks:

// same value

// same type

// same reference in memory

// Each [] creates a new array stored in a different memory location.

// Example visualization:

// []  → memory address A
// []  → memory address B
// A !== B


// So:

// [] === []   // false

// 🔥 2. Why [] == [] is also false?

// Even with == (loose equality), JavaScript does NOT compare object contents.

// It still checks reference equality.

// Meaning:

// [] == []  → comparing two different references → false

// 🧠 Important Note

// Only primitive values are compared by value.

// Objects (including arrays) are always compared by reference.

// So even if two arrays look exactly the same:

// [1,2,3] == [1,2,3] // false
// [1,2,3] === [1,2,3] // false


// Same reason: different memory references.

// ✅ When is it true?

// Only when both variables refer to the same array:

// let a = [];
// let b = a;
// console.log(a === b); // true
// console.log(a == b);  // true
// Because now both point to the same memory address.


// let abc =2;
// let a = !--abc;
// let b = !--abc;

// console.log(a,b);


// function sum(){
//     console.log("sum");
//     return 2+3;
// }

// function square(){
//     console.log("square");
//     return 2*2;
// }

// console.log(a);
// let a = (sum(),square())

// find substring in a sentance


// function findoutSubstring(s1){
//    s1 = s1.split(" ");
//    console.log(s1);
//    for(let i=0;i<s1.length;i++){
//     if(s1[0].substr("sh")){
//         return true
//     }
//    }
//    return false;
// }

// console.log(findoutSubstring("my name is lakshit"));


// const str1 = "lakshit";
// const str2 = "rahul";
// const str3 = str1 && str2;
// console.log(str3);
// left value and right value ----> in case of left falsy value it retrun left value , for all other case it return right value.
// left value or right value -----> in case of left truty it return left value and for left falsey it return right value.

// console.log("A" || "B");
// console.log("" || "hello");
// console.log("" ?? "hello");



let arr = ["lakshit","abc"];
console.log(arr.includes("abc",-2));