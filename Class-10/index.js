// "use strict";

//-------------JavaScript Functions-------------//

//-----------Function Defination, Function Declaration, Function Statement---------------//

// function func() {
//   console.log("Function Statement !!!");
// }

//------------Function Invoke/Call-------------//

// func();
// console.log(func);

// function func() {
//   alert("Alert !!!");
// }

//-------Function Parameter - To Make Dynamic--------//

// function sum(num1, num2) {
//   var res = num1 + num2;
//   alert("Sum :" + " " + res);
// }
// sum(43, 54);
// sum(564, null);

// function getMulti(a, b) {
//   console.log(a * b);
// }

//----------------Arguments Object-----------------//

// function getArguments(a, b, c, d) {
//   console.log(arguments);
//   console.log(typeof arguments);
// console.log(arguments[0]);
// console.log(arguments[1]);
// console.log(arguments[2]);
// console.log(arguments[3]);
//   for (const items of arguments) {
//     console.log(items);
//   }
// }
// getArguments(35, 20, 15, 20);

//-----------Default Parameter In A Function-------------//

// function sum(num1 = 0, num2 = 0) {
//   alert(num1 + num2);
// }
// sum(12);

//-------Rest Parameter In JavaScript Function-------//

// function sum(a, b, ...rest) {
//   console.log(a + b);
//   console.log(arguments);
//   console.log(...rest);
//   console.log(typeof rest);
//   for (let items of rest) {
//     console.log(items);
//   }
// }
// sum(12, 73, 76, 79);

// function sum(...rem,a,b)
// {
//     console.log(arguments);
//     console.log(...rem);
//     console.log(a+b);
// for(let r of rem)
// {
// console.log(r);
// }
// }

//-------The Rest Parameters Are Array Instances--------//

// function sum(a, b, ...rest) {
//   console.log(a + b);
//   console.log(rest);
//   console.log(typeof rest);
//   rest.push(25);
//   console.log(rest);
//   console.log(arguments);
//   arguments.push(86);
//   console.log(arguments);
// }
// sum(12, 73, 76, 79);

//-------Passing A Function AS A Parameter----------//

// function abc(x) {
// console.log("1st Function :" + " " + x);
// console.log("1st Function :" + " " + x());
//   console.log("1st Function :");
//   x();
// }

// function pqr(params) {
// console.log("2nd Function");
// }
// abc(pqr);

// function fullname(fname, lname) {
//   console.log("My Full Name Is : " + fname() + " " + lname());
// }

// function fname() {
//   return "Gaurav";
// }

// function lname() {
//   return "Bhardwaj";
// }
// fullname(fname, lname);

//---------Functions Used As Variable Values---------//

// let res = function sum(params) {
//   let a = 10;
//   let b = 20;
//   return a + b;
// };
// console.log(res());

//---------------Annonymous Function----------------//

// function fullname(fname, lname) {
//   console.log("My Full Name Is : " + fname() + " " + lname());
// }

// let fname = function () {
//   return "Gaurav";
// };

// let lname = function () {
//   return "Bhardwaj";
// };
// fullname(fname, lname);

// abc();
// function abc() {
//   console.log("I Am Called Before Declare !!!");
// }

// res();
// let res = function () {
//   console.log("I am annonymous fun please call me after delcaration!");
// };
// res();
