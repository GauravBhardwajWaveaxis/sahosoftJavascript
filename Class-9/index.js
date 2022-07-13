// function SortArray() {
// const frindsList = ["ajit", "suyash", "ramesh", "nutan", "xyz", "pooja"];

// frindsList.sort();  Ascending

// console.log(frindsList);

// frindsList.reverse();  Descending

// console.log(frindsList);

//   const numList = [54, 2, 43, 54, 23, 67, 32, 89, 4];

//   numList.sort(function (n1, n2) {
//     return n1 - n2;
//   });

//   numList.reverse();

//   numList.sort(function (n1, n2) {
//     return n2 - n1;
//   });

//   console.log(numList);
// }
// SortArray();

//-----------------JavaScript Objects------------------//

// let employee = {
//   id: 10,
//   name: "Gaurav Bhardwaj",
//   city: "Bangalore",
//   gender: "Male",
//   mblno: 343343434,
//   isActive: true,
// };

// console.log(employee);

// console.log(employee.id);
// console.log(employee.name);
// console.log(employee.gender);
// console.log(employee.city);

// const employeeList = [
//   {
//     id: 12,
//     name: "suyash patil",
//     city: "pune",
//     gender: "male",
//     mblno: 343343434,
//     isActive: true,
//   },
//   {
//     id: 13,
//     name: "amol vidhate",
//     city: "delhi",
//     gender: "male",
//     mblno: 5445545454,
//     isActive: true,
//   },
//   {
//     id: 14,
//     name: "nita patel",
//     city: "mumbai",
//     gender: "female",
//     mblno: 656556,
//     isActive: true,
//   },
// ];

// console.log(employeeList);

// employeeList.sort(function (emp1, emp2) {
//   let name1 = emp1.name.toLowerCase();
//   let name2 = emp2.name.toLowerCase();
//   if (name1 > name2) {
//     return 1;
//   }
//   if (name1 < name2) {
//     return 2;
//   }
//   return 0;
// });

// console.log(employeeList);

// const names = ["suyash", "amol", "poja", "nita"];
// names.sort(function (n1, n2) {
//   if (n1 > n2) {
//     return -1;
//   }
//   if (n1 < n2) {
//     return 1;
//   }

//   return 0;
// });
// console.log(names);

//---------------JavaScript Undefined--------------//

// var fullname;
// console.log(fullname);
// console.log(typeof fullname);

//---------------JavaScript Empty Values--------------//

//---------------JavaScript Null Values--------------//

// let emp = null;
// console.log(emp.toLowerCase());
// console.log(typeof null);

// let name1 = null;
// let name2 = null;

// if (name1 == name2) {
//   console.log(name1 == name2);
//   console.log(name1 == name2);
// }

//---------------------Functions--------------------//

// let num1 = 35;
// let num2 = 25;
// let sum = num1 + num2;

// console.log(sum);

// function addition(n1, n2) {
//   console.log(n1 + n2);
// }
// addition(23, 45);
// addition(26, 15);
// addition(13, 45);
// addition(33, 45);
