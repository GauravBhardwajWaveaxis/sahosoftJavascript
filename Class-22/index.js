//==========JavaScript - Callback hell=============//

// const getStudentInfo = () => {
//   setTimeout(() => {
//     console.log("getStudentInfo is called");
//     const getRollNo = () => {
//       console.log("getRollNo is called");
//       let rollNo = [1, 2, 3, 4, 5, 6, 7, 8];
//       setTimeout(
//         (rollNo) => {
//           console.log(`student roll no is: ${rollNo}`);
//         },
//         3000,
//         rollNo[0]
//       );
//       console.log("get roll no is finished");
//     };
//     getRollNo();
//   }, 3000);
// };
// getStudentInfo();

// const getStudentInfo = () => {
//   setTimeout(() => {
//     const rollNo = [3, 5, 13, 6, 21, 55, 7, 87, 4];

//     setTimeout(
//       (rollNo) => {
//         console.log(`My Roll No is ${rollNo}.`);

//         const stdData = { name: "Gaurav Bhardwaj", city: "Bangalore" };

//         setTimeout(
//           (st) => {
//             console.log(
//               `Student Details: Student Name is ${st.name} and Student city is ${st.city}.`
//             );
//           },
//           3000,
//           stdData
//         );
//       },
//       3000,
//       rollNo[4]
//     );
//   }, 3000);
// };
// getStudentInfo();

//===========JavaScript - Promises=============//

//=============Executor // Producer===============//

// const obj = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const rollNo = [1, 2, 3, 4, 5, 6, 7, 8];
//     resolve(rollNo);
//   }, 3000);
// });

//==================Consumer===================//

// obj.then((rollNoData) => {
//   console.log("Roll No In Data: " + rollNoData);
// });

// const obj = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const rollNo = [1, 2, 3, 4, 5, 6, 7, 8];

//     Response = true;
//     if (Response) {
//       resolve(rollNo);
//     } else {
//       reject("Error Occured !!!");
//     }
//   }, 3000);
// });

// obj
//   .then((rollNoData) => {
//     console.log("Roll No In Data: " + rollNoData);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//================Second Executor===============//

// const getRollNo = (rollno) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resText = true;

//       if (resText) {
//         resolve(rollno);
//       } else {
//         reject("error occured in 2nd executor!");
//       }
//     }, 3000);
//   });
// };

// obj
//   .then((rollNoData) => {
//     console.log("Roll No In Data: " + rollNoData);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//===================Async-Await==================//

// async const getRollNoResp = () => {};
// getRollNoResp();

const getRollNoResp = async () => {
  //  var data   = await obj;
  //  console.log(data);

  try {
    var data = await obj;
    console.log(data);

    var rollNoData = await getRollNo(data[0]);
    console.log("My roll no is: " + rollNoData);
  } catch (error) {
    console.log(error);
  }
};

getRollNoResp();
