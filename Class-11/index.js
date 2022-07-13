//------------Functiom Is First Class Citizen -- As Variable Store, As Argument Pass-----------//

//----------Return One Funtion Fron Another Funtion------------//

// function fullname() {
//   let firstName = "Gaurav";
//   function lastname() {
//     let lastname = "Bhardwaj";

//     console.log(firstName + " " + lastname);
//   }
//   return lastname;
// }
// let result = fullname();
// result();

// function fullName() {
//   debugger;
//   let firstName = "amol";

//   function lastname() {
//     debugger;
//     let lastname = "vidhate";

//     return firstName + " " + lastname;
//   }

//   return lastname;
// }
// debugger;

// var innerFun = fullName();
// debugger;
// console.log(innerFun());

//-----------------Function Currying------------------//

// function fullName() {
//   let firstName = "suyash";

//   function lastname() {
//     let lastname = "vidhate";

//     console.log(firstName + " " + lastname);
//   }

//   return lastname;
// }

// fullName()();

//-----Higher Order Function And Callback Function------//

// function HigherOrderFunction(Callback) {
//   console.log(Callback);
//   Callback();
// }
// HigherOrderFunction(function (params) {
//   console.log("Call Back Function");
// });

// function A(callbackFun) {
//   debugger;
//   console.log("in Higher Order Functtion");
//   debugger;
//   callbackFun();
// }

// function B() {
//   debugger;
//   console.log("CallBack function B ");
// }
// debugger;
// A(B);

//....................................................//

// var radius = [4, 6, 2, 9, 5, 7];

// function calArea() {
//   for (const r of radius) {
//     console.log(r);
//     console.log("Area of circle:" + Math.PI * r * r);
//   }
// }
// calArea();

// function calDia() {
//   for (const r of radius) {
//     console.log(r);
//     console.log("Diameter of circle:" + 2 * r);
//   }
// }
// calDia();

// var radius = [4, 6, 2, 9, 5, 7];

// function area(r) {
//   return Math.PI * r * r;
// }

// function diamater(r) {
//   return 2 * r;
// }

// function calArea(radius, Area, Diamater) {
//   for (const r of radius) {
//     console.log(r);
//     let result1 = Area(r);
//     console.log("Area Of Circle : " + result1);
//     let result2 = Diamater(r);
//     console.log("Diamater Of Circle : " + result2);
//   }
// }
// calArea(radius, area, diamater);

//-----JavaScript - Finding a String in a String-----//

var fullName =
  " Gaurav Bhardwaj lives in Bangalore !    Gaurav is Developer. Gaurav is Graduated.";

//--------------------indexOf()----------------------//

// console.log(fullName.indexOf("Gaurav"));

// console.log(fullName.indexOf("Bhardwaj"));

// console.log(fullName.indexOf("gfvydjid"));

// console.log(fullName.indexOf("Gaurav", 5));

//--------------------lastIndexOf----------------------//

// console.log(fullName.lastIndexOf("Gaurav"));

//--------------------Searching-----------------------//

// console.log(fullName.search("in"));
// console.log(fullName.search("is"));

/*

JavaScript - Extracting String Parts.

There are 3 methods for extracting a part of a string:

---------------- slice(start, end)
---------------- substring(start, end)
---------------- substr(start, length)

*/
