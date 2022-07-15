//==============JavaScript - Call Method===============//

// const employeeInfo = {
//   getFullInfo: function () {
//     console.log(
//       "My full name is: " +
//         this.firstName +
//         " " +
//         this.lastName +
//         " " +
//         emp2.city
//     );
//   },
// };

// const emp1 = {
//   id: 10,
//   firstName: "Gaurav",
//   lastName: "Bhardwaj",
//   city: "Bangalore",
// };

// const emp2 = {
//   id: 15,
//   firstName: "Sourav",
//   lastName: "Bhardwaj",
//   city: "New Delhi",
// };

// employeeInfo.getFullInfo.call(emp1);
// employeeInfo.getFullInfo.call(emp2);

//=============JavaScript - Apply Method================//

// const employeeInfo = {
//   getFullInfo: function () {
//     console.log(
//       "My full name is: " +
//         this.firstName +
//         " " +
//         this.lastName +
//         " " +
//         emp2.city
//     );
//   },
// };

// const emp1 = {
//   id: 10,
//   firstName: "Gaurav",
//   lastName: "Bhardwaj",
//   city: "Bangalore",
// };

// const emp2 = {
//   id: 15,
//   firstName: "Sourav",
//   lastName: "Bhardwaj",
//   city: "New Delhi",
// };

// employeeInfo.getFullInfo.apply(emp1);
// employeeInfo.getFullInfo.apply(emp2);

//============JavaScript - Bind Method==================//

// const employeeInfo = {
//   getFullInfo: function (a) {
//     console.log(
//       "My full name is: " +
//         this.firstName +
//         " " +
//         this.lastName +
//         " " +
//         this.city +
//         " " +
//         a
//     );
//   },
// };

// const emp1 = {
//   id: 12,
//   firstName: "Amol",
//   lastName: "vidhate",
//   city: "pune",
// };

//   const newFun=  employeeInfo.getFullInfo.bind(emp1);
//         newFun();

// const emp2 = {
//   id: 15,
//   firstName: "Ajit",
//   lastName: "Kumar",
//   city: "Patna",
// };

// const newFun = employeeInfo.getFullInfo.bind(emp2, "abc");
// newFun();

//================JavaScript – Template Literals ${}===============//

// let simple = `This is a template literal`;
// console.log(simple);

// var firstName = "Gaurav";
// var lastName = "Bhardwaj";

// console.log("My FullName is: " + firstName + " " + lastName);

// console.log(`My FullName is:---- ${firstName} ${lastName}`);

// var table = 12;

// var count = 1;

// for (let i = count; i <= 10; i++) {
//   console.log("Table Of" + " " + 12 + " is : " + table * count);
//   count++;
// }

// var table = 12;

// var count = 1;

// for (let i = count; i <= 10; i++) {
//   //console.log("Table of"+" "+table+":"+  table+ " *"+count +"= "+(table*count));

//   console.log(`table of ${table} : ${table} * ${count} = ${table * count}`);

//   count++;
// }

//===========JavaScript – Template Literals=============//

// var firstName = "bangalore";
// var lastName = "new delhi";

// console.log(`${firstName} ${lastName}`);

// console.log(`${firstName} ${lastName}`.toLocaleUpperCase());

// console.log(`My FullName is:---- ${firstName} ${lastName}`.endsWith("ate"));

//==============Default Parameter=================//

// function sum(a, b) {
//   var res = a + b;
//   console.log(res);
// }
// sum(15, 20);

// sum(15);

// function sum(a = 0, b = 0) {
//   var res = a + b;
//   console.log(res);
// }
// sum(15, 20);

// sum(15);

//=================Rest Parameter==================//

// function sum(a, b, ...x) {
//   console.log(x);
//   var sum = a + b;

//   for (let num of x) {
//     sum = sum + num;
//   }

//   console.log(sum);
// }

// sum(15, 12, 34, 54, 32, 56, 433, 67);
