// collection of key value and pair to iterate on each key we use for in loop

// let student = {
//     name: "Rahul",
//     Class: 12,
//     Roll: 34,
//     section:"A"
// }

// console.log(student);

// for(key in student){
//     console.log(key,student[key]);
// }



// because the object will take the last specified value of the same property.
// const obj = { a: 'one', b: 'two', a: 'three' }; 
// console.log(obj);


// let student = {
//     name: "Rahul",
//     Class: 12,
//     Roll: 34,
//     section:"A"
// }

// for(key in student){
//     if(typeof(student[key])==="number"){
//         student[key]=student[key]*2;
//     }
// }

// console.log(student);



// And the answer is 456.🥁
// Object keys are automatically converted into strings. We are trying to set an object as a key to object `a`, with the value of `123`.

// However, when we stringify an object, it becomes `"[object Object]"`. So what we are saying here, is that `a["[object Object]"] = 123`. Then, we can try to do the same again. `c` is another object that we are implicitly stringifying. So then, `a["[object Object]"] = 456`.

// Then, we log `a[b]`, which is actually `a["[object Object]"]`. We just set that to `456`, so it returns `456`.
// const a = {}; 
// const b = { key: 'b' }; 
// const c = { key: 'c' };

// a[b] = 123; a[c] = 456;

// console.log(a[b]);


// Deep and shallow copy
// shallow copy take refrence of original object if we change in duplicate object then it will we visible in original object but for nested value for primitive value it does not affect we can
// do this with the help of spread operator

// let user = {
//     name: "rahul",
//     age: 21,
//     jobtype: "SDE",
//     contact: {
//         Phone: 90452398023,
//         link: "adkjdsajk"
//     }
// }

// let user2 = {...user};  
// // let user2 = Object.assign({},user);  with the help of assignment
// user2.name = "lakshit";
// user2.jobtype = "SDE3";
// user2.contact.Phone = 111111;

// console.log(user,user2);


// for deep copy it create seprate space of duplicate object and chanegs in duplicate does not affect other.

// const user = {
//     name: "rahul",
//     age: 21,
//     jobtype: "SDE",
//     contact: {
//         Phone: 90452398023,
//         link: "adkjdsajk"
//     }
// }

// const user2 = JSON.parse(JSON.stringify(user));

// user2.name = 
// "lakshit";
// user2.contact.Phone = 111111;

// console.log(user,user2);



