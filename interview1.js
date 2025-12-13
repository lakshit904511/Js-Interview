// merge two string alternatively

// function mergeTwoString( s1 , s2){
//    var n1 = s1.length;
//    var n2 = s2.length;
//    var i = 0;
//    var ans = "";
//    var j = 0;
//    while(i<n1 && j<n2){
//        ans+=s1[i];
//        ans+=s2[i];
//        i++;
//        j++;
//    }

//    while(i<n1){
//     ans+=s1[i];
//     i++;
//    }

//     while(j<n2){
//     ans+=s2[j];
//     j++;
//    }
//    console.log(ans);
// }

// mergeTwoString("rahul","chaudharypawar");




// longest word in a sentence



// function longestWord(s1){
//    let s2 = s1.split(" ");
//    console.log(s2);
//    var index, maxi = 0;
//    for(let i=0;i<s2.length;i++){
//       const eachlen = s2[i].length;
//       if(eachlen>maxi){
//         maxi = eachlen;
//         index = i;
//       }
//    }
//    console.log(index,maxi);
//    console.log(s2[index]);
// }

// longestWord("lakshit is good in Javasriptdsa")


// array contain subarray we have to flattend them in single aaray with inbuilt function or without

// with built in
// let arr = [[1,2],[3,4],[5,6]];
// arr = arr.flat(1);
// console.log(arr);

// /without built in
// let arr = [[1,2],[3,4],[5,6]];

// function flatarray(arr){
//    const newArray  = [];
//    for(let i =0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         newArray.push(arr[i][j]);
//     }
//    }
//    console.log(newArray);
// }

// flatarray(arr);


// infinite currying

// function myfunc(a){
//     return function(b){
//        if(b) return  myfunc(a+b);
//        else return a;
//     }
// }


// console.log(myfunc(3)(4)(5)(9)());



// setinterval and settimeout


// function functionintervalcall(){
//     let count = 0;
//     const timerId =  setInterval(()=>{
//      console.log(count++);
//      if(count === 5){
//         clearTimeout(timerId);
//         console.log("timeout clear for setinterval");
//      }
//     },7000)
// }

// functionintervalcall();


// function runTimeout() {
//   const timeoutId = setTimeout(() => {
//     console.log("Timeout executed!");
//   }, 2000);

//   // Clear timeout after 1 second
//   setTimeout(() => {
//     // clearTimeout(timeoutId);
//     console.log("Timeout cleared before execution!");
//   }, 3000);
// }

// runTimeout();



// find duplicate and print them
// let arr = [1,2,1,2,3,4,5,1,2,5,5,5];

// function containduoplicate(arr){
//    arr.sort();
//    const newarray = []
//    for(let i=1;i<arr.length;i++){
//      if(arr[i]==arr[i-1]){
//         if(newarray.includes(arr[i-1]) === false){
//               newarray.push(arr[i-1]);
//         }
//      }
//    }
//    console.log(newarray);
// }

// containduoplicate(arr);


// object destructuring

// let user = {
//     name: "lakshit",
//     age: "20",
//     skills: {
//         technical: "html css js",
//         soft: "cmsdaldsa"
//     }
// };

// // Simple destructuring
// const { name, age } = user;
// console.log(name, age);

// // Nested destructuring
// const { skills: { technical } } = user;
// console.log(technical);



// async in js
// async function datafetch (){
//     const response = await fetch('../ds');
//     const result = response.json();
//     return result;
// }
// datafetch();


// function datafetch1(){
//     return promise = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//              resolve("resolved");
//         },100)
//     })
// }
// datafetch1()