// function callFun() {
//   alert("Operators");
// }

//-------------Assignment Operators---------------//

// let x = 10;
// function assignment() {
//   let y = x;
//   console.log(y);
// }

// let num1 = 50;
// let num2 = 20;

// num1 -= num2;
// console.log(num1);

// let num1 = 10;
// let num2 = 20;
// num1 *= num2;
// console.log(num1);

// let num1 = 50;
// let num2 = 20;
// num1 %= num2;
// console.log(num1);

//--------------Ternary Operator----------------//

// let age = 18;

// function ternaryFun() {
//   if (age > 18) {
//     alert("You can Vote");
//   } else {
//     alert("Not Eligable");
//   }
//   age >= 18 ? alert("You can Vote") : alert("Not Eligable");
// }
// ternaryFun();

// let isActive = true;
// function ternaryFun() {
//   isActive ? console.log("User Is Active") : console.log("User Is Not Active");
// }
// ternaryFun();

// function ternaryFun() {
//   let num1 = 10;
//   let num2 = 20;
//   num1 + num2 > 50 ? console.log("Addition") : console.log("Substraction");
// }
// ternaryFun();

// function ternaryFun(params) {
//   let num1 = 10;
//   let num2 = 40;
//   num1 + num2 >= 50
//     ? console.log("Sum Is Fifty")
//     : num1 + num2 >= 30
//     ? console.log("Sum Is Thirty")
//     : console.log("XYZ");
// }
// ternaryFun();

//-----------------typeof Operator---------------//

// var x = 50;
// var num = x;
// console.log(typeof num);

// typeof num === "number"
//   ? console.log("Data Type Is Number.")
//   : console.log("Data Type Is Not Number.");

// let isActive = true;
// console.log(typeof isActive);

//---------JavaScript - if...else Statement----------//

// function ConditionalSta() {
//   let city = "Bangalore";
//   if (city == "Bagalore") {
//     console.log("MY CITY !!!");
//   } else {
//     console.log("Not My City");
//   }
// }
// ConditionalSta();

// function ConditionalSta() {
//   //-----------ladder if else--------------//

//   let marks = 50;

//   if (marks > 90) {
//     console.log("Grade A");
//   } else if (marks > 60 && marks < 90) {
//     console.log("Grade B");
//   } else if (marks > 35 && marks < 60) {
//     console.log("Grade C");
//   } else {
//     console.log("Fail");
//   }
// }
// ConditionalSta();

// function ConditionalSta() {
//---------------nested if else---------------//

// let marks = 85;

//   if (marks > 35) {
//     if (marks > 90) {
//       console.log("Grade A");
//     } else if (marks > 60 && marks < 90) {
//       console.log("Grade B");
//     } else if (marks > 35 && marks < 60) {
//       console.log("Grade C");
//     }
//   } else {
//     console.log("you r fail!");
//   }
// }
// ConditionalSta();

//--------------JavaScript {Switch Case}---------------//

// function ConditionalSta() {
//-----------------Switch Case------------------//
// let name = "xyz";

//   switch (name) {
//     case "amol":
//       console.log("i am amol........");
//       break;
//     case "chandan":
//       console.log(" i am chandan ......");
//       break;
//     case "xyz":
//       console.log("i am xyz ......");
//       break;

//     default:
//       console.log("no Match");
//       break;
//   }
// }
// ConditionalSta();

//--------------JavaScript - For Loop---------------//

// let numList = [12, 34, 43, 32, 54, 65, 3, 56, 3];

// console.log(numList.length);
// console.log(numList.length - 1);

// console.log(numList[4]);
// console.log(numList[5]);
// console.log(numList[numList.length - 1]);

// let numList = [12, 34, 43, 32, 54, 65, 3, 56, 3];

// for (let item of numList) {
//   console.log(item);
// }

// for (let i = 0; i < numList.length; i++) {
//   console.log("Element are :" + " " + numList[i]);
// }

//-------------for of and for in------------------//

// let numList = [12, 34, 43, 32, 54, 65, 3, 56, 3];

// for (const item of numList) {
//   console.log("for of :" + " " + item);
// }

// for (const key in numList) {
//   console.log(numList[key]);
// }
