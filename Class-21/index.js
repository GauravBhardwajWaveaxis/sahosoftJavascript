// class Student {
//   constructor(rollNo, stdName, city) {
//     console.log(
//       "Parent Level Method Constructor" + rollNo + " " + stdName + " " + city
//     );
//   }
//   getStudentDetails() {
//     console.log("In Student Class Level Method");
//   }
// }
// class poorStudent extends Student {
//   constructor(marks, rollNo, stdName, city) {
//     super(rollNo, stdName, city);
//     console.log(`Students Marks: ${marks}`);
//   }
// }
// let obj = new poorStudent(76, 10, "Gaurav", "Bangalore");
// obj.getStudentDetails();

// let obj1 = new poorStudent(14, 2, "chandan sir", "patna");
// obj1.getStudentDetails();

//==========Synchronous And Asynchronous===========//

// const fun2 = () => {
//   console.log("fun2 is called!!!");
// };

// const fun1 = () => {
//   console.log("fun1 is started...");
//   fun2();
//   console.log("fun1 is finished...");
// };
// fun1();

// const fun2 = () => {
//   setTimeout(() => {
//     console.log("fun2 is called after 3 seconds asynchronously !!!");
//   }, 3000);
// };

// const stdName = () => {
//   setTimeout(() => {
//     console.log("Student Function wait 4 seconds...");
//   }, 4000);
// };

// const fun1 = () => {
//   console.log("fun1 is started...");
//   fun2();
//   stdName();
//   console.log("fun1 is finished...");
// };
// fun1();

//===========JavaScript - Event Loop=============//

//==========JavaScript - Callback hell=============//

const getStudentInfo = () => {
  setTimeout(() => {
    console.log("getStudentInfo is called");
    const getRollNo = () => {
      console.log("getRollNo is called");
      let rollNo = [1, 2, 3, 4, 5, 6, 7, 8];
      setTimeout(
        (rollNo) => {
          console.log(`student roll no is: ${rollNo}`);
        },
        3000,
        rollNo[0]
      );
      console.log("get roll no is finished");
    };
    getRollNo();
  }, 3000);
};
getStudentInfo();
