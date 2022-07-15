// console.log("Gaurav");

//Object Destructuring And Array Destructuring

//==============Object Destructuring===============//

// const emp = {
//   id: 10,
//   name: "Gaurav Bhardwaj",
//   city: "Bangalore",
//   mblno: 9032328734387,
// };

// console.log(emp);
// console.log(emp.id);
// console.log(emp.mblno);

// let { id, name, city, mblno } = emp;

// console.log(city);
// console.log(mblno);

// function getEmpInfo(emp) {
//   console.log(`emp info : ${emp.id}  ${emp.city}`);
//   console.log(` Employee Info : ${name}`);
// }
// getEmpInfo(emp);

//=============Array Destructuring================//

// const numList = [32, 54, 6532, 6, 43, 6343, 32];

// console.log(numList[3]);

// let [a, b, c, d, e, f] = numList;

// console.log(a);
// console.log(c);

// const empList = [
//   { id: 32, name: "Gaurav", city: "Pune" },
//   { id: 35, name: "Nitash", city: "Mumbai" },
// ];

// let [emp1, emp2] = empList;

// console.log(emp1.name);
// console.log(emp2.name);

// let [{ id, name, city }] = empList;

// console.log(city);

// const numList = [32, 544, 3267, 43];

// function getArrayValue([a, b, c, d]) {
//   console.log(a, b, c, d);
// }
// getArrayValue(numList);

//================Spread Operator==================//

// let emp1 = {
//   id1: 32,
//   name1: "Gaurav",
//   city1: "Pune",
// };

// let emp2 = {
//   id2: 35,
//   name2: "Sourav",
//   city2: "Delhi",
// };

// let empData = { company: "IT Tech", ...emp1, ...emp2 };

// console.log(empData);

// const bestFrindsList = ["amol", "suyash", "annkita", "pooja"];
// const normalFrindsList = ["abc", "pqr", "xyz"];

// const totalFrindsList = [...bestFrindsList, ...normalFrindsList];

// console.log(totalFrindsList);

//===========Math.sign(), Math.trunc()============//

// let num1 = 54;
// console.log(Math.sign(num1));

// let num2 = -54;
// console.log(Math.sign(num2));

// let num3 = 0;
// console.log(Math.sign(num3));

// let num4 = 12.6;
// console.log(Math.trunc(num4));

// let num5 = 12.6;
// console.log(Math.round(num5));

// let num6 = 12.2;
// console.log(Math.round(num6));

// let num = 12.000001;
// console.log(Math.ceil(num));

// let num = Math.random();
// console.log(num + 1);

//=======JavaScript – Exponentiation Operator======//

// let num = Math.pow(2, 3);
// console.log(num);

// console.log(2 ** 3);

// let num1 = 43843894489343893489;
// console.log(isFinite(num1));

// let num2 = 10 / 0;
// console.log(isFinite(num2));

// let num = 4344;
// console.log(isNaN(num));

// let num3 = 4344 + undefined;
// console.log(isNaN(num3));

// let num4 = 43;
// console.log(Number.isInteger(num4));

// let num5 = "43";
// console.log(Number.isInteger(num5));

//=============JavaScript – Class================//

// class Student {
//   stuId = 15;
//   stuName = "Gaurav Bhardwaj";

//   getStudentDetails() {
//     console.log("Student Class Method");
//   }
// }

// let obj = new Student();
// obj.getStudentDetails();
// console.log(obj.stuId);

// class Student {
//   constructor() {
//     console.log("Constructor Called Automatically ........");
//   }

//   getStudentDetails() {
//     console.log(" Studebt Class Method ........");
//   }
// }

// let obj = new Student();
// obj.getStudentDetails();

// let obj1 = new Student();
// obj1.getStudentDetails();

// class Student {
//   id = 21;
//   name = "dkj";

//   constructor(id, name, city) {
//     console.log("constructor called..........." + id + " " + name + " " + city);

//     this.stuId = id;
//     this.stuName = name;
//     this.stuCity = city;
//   }

//   getStudentDetails(a, b) {
//     console.log(
//       "in Studebt Class Method..." +
//         this.stuId +
//         " " +
//         this.stuName +
//         " " +
//         this.stuCity
//     );
//   }
// }

// let obj = new Student(32, "channdn sir", "patna");
// obj.getStudentDetails();

//==================Inheritance===================//

class Student {
  id;
  name;

  constructor() {
    console.log("Parent Constructor Called ...........");
  }

  getStudentDetails() {
    console.log("In Studebt Class Method .........");
  }
}

class PoorStudent extends Student {}

let obj = new PoorStudent();
obj.getStudentDetails();
