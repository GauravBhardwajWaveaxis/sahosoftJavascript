// alert("Gaurav");

//====================Arrays.from======================//

// const numList = [23, 52, 45, 24, 76, 34, 25];

// const x = Array.from(numList);

// x[0] = 100;

// console.log(numList);
// console.log(x);

//===================... spread=====================//

// const numList = [23, 52, 45, 24, 76, 34, 25];

// const x = [...numList];

// x[1] = 111;
// console.log(numList);
// console.log(x);

//==================Secondory Array====================//

// const numList = [23, 52, 45, 24, 76, 34, 25, [65, 544, 23]];

// const x = [].concat(numList);

// x[0] = 100;
// x[7][1] = 200;
// console.log(numList);
// console.log(x);

//======================Deep copy=====================//

//=======================JSON======================//

// const numList = [23, 52, 45, 24, 76, 34, 25, [65, 544, 23]];

// // console.log(numList);

// var x = JSON.stringify(numList);
// // console.log(x);

// var y = JSON.parse(x);
// // console.log(y);

// y[1] = 555;
// y[7][1] = 7589;

// console.log(numList);
// console.log(y);

//=========Object - Shollow Copy And Deep Copy============//

// const student = {
//   rollno: 10,
//   fullName: "Gaurav Bhardwaj",
//   city: "Bangalore",
// };

// console.log(student);

// let x = student;

// console.log(x);

// x.city = "Saharanpur";

// console.log(student);
// console.log(x);

//=====================Shollow Copy====================//

//=============assign ,   ... spread operator===========//

// const student = {
//   rollno: 10,
//   fullName: "Gaurav Bhardwaj",
//   city: "Bangalore",
// };

// const x = Object.assign({}, student);
// x.city = "Saharanpur";

// console.log(x);
// console.log(student);

//===================Spread Operator===================//

// const student = {
//   rollno: 10,
//   fullName: "Gaurav Bhardwaj",
//   city: "Bangalore",
// };

// console.log(student);

// const x = { ...student };
// x.rollno = 15;

// console.log(x);
// console.log(student);

//================Secondary Reference===================//

// const student = {
//   rollno: 10,
//   fullName: "Gaurav Bhardwaj",
//   city: "Bangalore",
//   tempAdd: {
//     permAdd: "Saharanpur",
//   },
// };

// console.log(student);

// const x = { ...student };
// console.log(x);
// x.tempAdd.permAdd = "Delhi";

// console.log(x);
// console.log(student);

//==================Deep Copy-JSON=====================//

// const student = {
//   rollno: 10,
//   fullName: "Gaurav Bhardwaj",
//   city: "Bangalore",
// };

// console.log(student);

// const x = JSON.stringify(student);
// console.log(x);

// const y = JSON.parse(x);
// console.log(y);

// y.city = "Saharanpur";

// console.log(y);
// console.log(student);

//=========Arrow Function - Annonymous Function -()=> ========//

// function getName(params) {
//   console.log("Traditional Function");
// }
// getName();

// function getName(a, b) {
//   console.log("My Full Name Is : " + a + " " + b);
// }
// getName("Gaurav", "Bhardwaj");

//============ Arrow Function With Body ============//

// const getName = () => {
//   console.log("Arrow Function");
// };
// getName();

//============ Arrow Function WithOut Body ============//

// const getName = () => console.log("Arrow Function");

// const getName = (a) => console.log("In Arrow Function WithOut Body " + a);
// getName("Gaurav Bhardwaj");

// const getName = (a, b) =>
//   console.log("In Arrow Function Without Body " + a + " " + b);
// getName("Gaurav Bhardwaj", "Bangalore");

// function getSum(a, b) {
//   var z = a + b;
//   return z;
// }
// console.log(getSum(234, 23));

// const getSum = (a, b) => a + b;
// console.log(getSum(54, 45));

// const getName = (a, b) => {
//   z = a * b;
//   return z;
// };
// console.log(getName(47, 6));

//=======Arrow Function As A Callback Function==========//

// const numList = [34, 56, 32, 6, 32, 544, 323];

// numList.map((value, index, array) => {
//   console.log(value, index, array);
// });

//===============JavaScript - Closure=================//

debugger;
function outer() {
  debugger;
  let x = 10;

  function inner() {
    debugger;
    let y = 15;

    var res = x + y;
    return res;
  }

  return inner;
}
debugger;
const innerFun = outer();
console.log(innerFun());
