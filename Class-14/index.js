//---------JavaScript - The toString() Method---------//

// let mblno = 902387843;
// console.log(typeof mblno);

// let newNo = mblno.toString();
// console.log(newNo);
// console.log(typeof newNo);

// let sum = (10 + 20).toString();
// console.log(sum);
// console.log(typeof sum);

// const emp = {
//   id: 12,
//   name: "Gaurav Bhardwaj",
// };
// console.log(typeof emp);
// console.log(typeof emp.toString());

//-----JavaScript - Converting Variables to Numbers-----//

//   There are 3 JavaScript methods that can be used to convert variables to numbers:
//    The Number() method
//    The parseInt() method
//    The parseFloat() method

//------------------Numbers------------------//

// let mblno = "54854534";
// console.log(typeof mblno);
// let res = Number(mblno);

// console.log(typeof res);

// let num = Number("45");
// console.log(num);

// let num=Number("   45    ")
// console.log(num);

// let num=Number("45.10")
// console.log(num);

// let num = Number(true);
// console.log(num);

// let num = Number("amol");
// console.log(num);

//-------------------parseInt-------------------//

// let mblno = "54854534";
// let res = parseInt(mblno);

// console.log(res);

// let num = parseInt("45");
// console.log(num);

// let num=parseInt("   45    ")
// console.log(num);

// let num = parseInt("45.75");
// console.log(num);

// let num = parseInt(true);
// console.log(num);

//--------------------parsefloat---------------------//

// let mblno="54854534";
//   let res= parseFloat(mblno);

//   console.log(res);

// let num=parseInt("45")
// console.log(num);

// let num=parseInt("   45    ")
// console.log(num);

// let num = parseFloat("45.75");
// console.log(num);

// let num=parseInt(true)
// console.log(num);

//------------------JavaScript - JSON-------------------//

//----------JSON (JavaScript Object Notation)-----------//

// const emp = {
//   id: 10,
//   fullname: "Gaurav Bhardwaj",
//   gender: "male",
//   mblno: 434356457443,
// };
// console.log(emp);
// console.log(typeof emp);

// const result = JSON.stringify(emp);
// console.log(result);
// console.log(typeof result);

// const empList = [
//   {
//     id: 15,
//     fullname: "abc vidhate",
//     gender: "male",
//     mblno: 4343443,
//   },
//   {
//     id: 16,
//     fullname: "xyzz vidhate",
//     gender: "male",
//     mblno: 4343443,
//   },
//   {
//     id: 17,
//     fullname: "pqr vidhate",
//     gender: "male",
//     mblno: 4343443,
//   },
// ];
// console.log(empList);
// console.log(typeof empList);

// const newList = JSON.stringify(empList);
// console.log(newList);
// console.log(typeof newList);

// const emp = '{"id":12, "name":"Gaurav Bhardwaj","mblno":54844943}';

// console.log(emp);
// console.log(typeof emp);

// const newList = JSON.parse(emp);
// console.log(newList);
// console.log(typeof newList);

//----------JavaScript - HTML Attributes------------//

//-------------------Filter Problem--------------------//

// const studentList = [
//   {
//     id: 12,
//     name: "amol vid",
//     gender: "male",
//     marks: [32, 54, 65, 23, 56],
//   },
//   {
//     id: 13,
//     name: "suyash vid",
//     gender: "male",
//     marks: [54, 67, 34, 54, 23],
//   },
//   {
//     id: 14,
//     name: "abc vid",
//     gender: "female",
//     marks: [54, 65, 23, 87, 54],
//   },
// ];

// const res = studentList.filter(function (value, index, array) {
//   return value.gender == "male" && value.name == "suyash vid";
// });
// console.log(
//   res[0].marks.map(function (value) {
//     console.log(value);
//   })
// );
