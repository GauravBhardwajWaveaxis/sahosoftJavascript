// alert("Gaurav");

//------JavaScript - Scope Chain & Lexical Scoping-------//

//-------------------scope chain------------------------//

// var a = "Hi All.";

// function outer() {
//   var b = "How Are You ?";
//   function inner() {
//     var c = "I Am Fine.Thank You";
//     console.log(a + b + c);
//   }
//   inner();
// }
// outer();

//-----------------JavaScript - this--------------------//

// const student = {
//   id: 10,
//   name: "Gaurav Bhardwaj",
//   city: "Bangalore",
//   getinfor: function () {
//     console.log("details: " + student.name + " " + student.city);
//   },
// };

// student.getinfor();

// let name = "vijay kumar";

// const student = {
//   id: 10,
//   name: "Gaurav Bhardwaj",
//   city: "Bangalore",
//   getinfor: function () {
//     console.log("details: " + this.name + " " + this.city);
//   },
// };

// student.getinfor();

// console.log(this);
// console.log(this.alert("targeting to global object"));

// function getName() {
//   console.log("in function: " + this);
// }
// getName();

// "use strict";

// function getName() {
//   console.log(this);
// }
// getName();

// function getHide(btn) {
//   btn.style.display = "none";
// }

// function getHide(btn) {
//   btn.style.display = "none";
// }

//---------JavaScript - Objects Are Mutable--------//

// const student = {
//   id: 10,
//   name: "Gaurav Bhardwaj",
//   city: "Bangalore",
// };

// var x = student;

// x.name = "vijay kumar";

// console.log(student);
// console.log(x);

//-----------JavaScript - Object Properties------------//

// const student = {
//   id: 10,
//   name: "Gaurav Bhardwaj",
//   city: "Bangalore",
// };

// var col = "name";

// console.log(student.city);

// console.log(student[col]);

// console.log(student["id"]);

//--------------JavaScript - Object Loop---------------//

// const student = {
//   id: 10,
//   name: "Gaurav Bhardwaj",
//   city: "Bangalore",
// };

// for (const key in student) {
//   // console.log(key);
//   console.log(student[key]);
// }

// const student = {
//   id: 10,
//   name: "Gaurav Bhardwaj",
//   city: "Bangalore",
// };

// let res = Object.values;
// console.log(res);
// let res = Object.values(student);
// console.log(res);

// for (const item of Object.values(student)) {
//   console.log(item);
// }

// for (const item of student) {
//   console.log(item);
// }

// var prop = Object.keys(student);
// console.log(prop);

// for (const prop of Object.keys(student)) {
//   console.log(student[prop]);
// }

// const student = {
//   id: 10,
//   name: "Gaurav Bhardwaj",
//   city: "Bangalore",
// };

// var res = Object.entries(student);
// console.log(res);

// for (const [key, val] of Object.entries(student)) {
//   console.log(key);
//   console.log(val);
// }

// const student = {
//   id: 10,
//   name: "Gaurav Bhardwaj",
//   city: "Bangalore",
// };

// student.email = "gaurav.bhardwaj@gmail.com";
// console.log(student);

// delete student.city;

// console.log(student);

//--------JavaScript - Shallow Copy And Deep Copy-------//

//------------------Shallow Copy--------------------//

//----------Concat , Arrays.from, slice, ... spread Operator----------//

// const student = [32, 54, 2, 52, 5, 32];

// var x = student;

// x[1] = 100;

// console.log(student);
// console.log(x);

//---------------------Concat------------------------//

// const student = [32, 54, 2, 52, 5, 32];

// var x = [].concat(student);

// x[1] = 100;

// console.log(student);
// console.log(x);

//---------------------Slice-------------------///

const student = [32, 54, 2, 52, 5, 32];

var x = student.slice(0);

x[2] = 1000;

console.log(student);
console.log(x);
