// alert("Gaurav");

//----JavaScript - Date ObjectsJavaScript - Date Objects---//

//----------------Date Constructor-------------------//

// let todayData = new Date();
// console.log(todayData);

/*

---------------------Constructor--------------------

You can use 4 variant of Date constructor to create date object.

1] Date()
2] Date(milliseconds)
3] Date(dateString)
4] Date(year, month, day, hours, minutes, seconds, milliseconds)

*/

//-------------------0-11 index----------------------//

//----------------Create Custom Date------------------//

// let todayData1 = new Date(2020, 4, 22, 10, 35, 10, 0);
// console.log(todayData1);

// var todayDate = new Date(2020, 4, 22, 10, 35, 10);

// console.log(todayDate);

// var todayDate = new Date(2020, 4, 22, 10, 35);

// console.log(todayDate);

// var todayDate = new Date(2020, 4, 22, 10);

// console.log(todayDate);

// var todayDate = new Date(2020, 4);

// console.log(todayDate);

// var todayDate = new Date(202054454);

// console.log(todayDate);

// var backendDate = 233983;

// var currentDate = new Date(backendDate);
// console.log(currentDate);

// var dateFormate = new Date("March 22, 2022");
// console.log(dateFormate);

// var dateFormate = new Date("Mar 22, 2022");
// console.log(dateFormate);

// var dateFormate = new Date("03-22-2022");
// console.log(dateFormate);

// var dateFormate = new Date("04/22/2022");
// console.log(dateFormate);

// var currentDate = "Fri Apr 22 2022 00:00:00 GMT+0530 (India Standard Time)";

// console.log(currentDate);

// var dateFormate = currentDate.toString().split(" ");
// console.log(dateFormate);
// console.log(dateFormate[2]);
// console.log(dateFormate[2] + "/" + dateFormate[1] + "/" + dateFormate[3]);

//-----------JavaScript - Get Date Methods--------------//

// var currentDate = new Date();
// console.log(currentDate);
// console.log(currentDate.getFullYear());
// console.log(currentDate.getMonth());
// console.log(currentDate.getDate());
// console.log(currentDate.getHours());
// console.log(currentDate.getMinutes());
// console.log(currentDate.getSeconds());
// console.log(currentDate.getMilliseconds());
// console.log(currentDate.getTime());
// console.log(currentDate.getDay());

// var currentDate = new Date();
// //    console.log(currentDate.getFullYear());

// var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];

// console.log(currentDate.getMonth());
// console.log(months[currentDate.getMonth()]);

// var currentDate = new Date();
// // console.log(currentDate.getTime());
// var militime = currentDate.getTime();

// var dateFor = new Date(militime);

// console.log(dateFor);
// var time = dateFor.toString().split(" ")[4];
// console.log(time);

// var currentDate = Date.now();
// console.log(currentDate);

// var currentDate = new Date();
// console.log(currentDate.toLocaleDateString());

// var currentDate = new Date();
// console.log(currentDate.toLocaleTimeString());

//-----------JavaScript - Set Date Methods-------------//

// var currentDate = new Date();
// console.log(currentDate);
// currentDate.setFullYear(2020);
// console.log(currentDate);

// var currentDate = new Date();
// console.log(currentDate);
// currentDate.setDate(8);
// console.log(currentDate);

// var employeeDates = [
//   { id: 10, name: "ajit kumar", date: "Mar 3,2022" },
//   { id: 11, name: "amol vidhate", date: "Jan 15,2022" },
//   { id: 12, name: "chandan kumar", date: "Mar 13,2022" },
//   { id: 13, name: "yash kumar", date: "Feb 3,2022" },
// ];

// employeeDates.sort(function (emp1) {
//   console.log(emp1.date);
// });

// var newRes = employeeDates.sort(function (emp1, emp2) {
//   var date1 = emp1.date;
//   var date2 = emp2.date;

//   return new Date(date2) - new Date(date1);
// });

// console.log(newRes);
