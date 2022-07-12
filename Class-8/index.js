//------------JavaScript - While Loops------------//

// function whileLoop(params) {
//   const numList = [32, 54, 2, 5, 63, 54, 33, 632, 45];
//   let index = 0;

//   while (index < numList.length) {
//     console.log("While Loop :" + " " + numList[index]);
//     index++;
//   }
// }
// whileLoop();

//----------JavaScript - The do...while Loop------------//

// function whileLoop() {
//   const numList = [32, 54, 2, 5, 63, 54, 33, 632, 45];

//   let i = 0;
//   do {
//     console.log(numList[i]);
//     i++;
//   } while (i < numList.length);
// }

// whileLoop();

//------------Control Statement......-------------//

// function whileLoop() {
//   const numList = [32, 54, 2, 5, 63, 54, 33, 632, 45];

//   for (let i = 0; i < numList.length; i++) {
//     console.log(numList[i]);
//     if (numList[i] == 5) {
//       console.log(numList[i]);
//       break;
//     }
//   }
// }
// whileLoop();

// function whileLoop() {
//   const numList = [32, 54, 2, 5, 63, 54, 33, 632, 45];

//   for (let i = 0; i < numList.length; i++) {
//     if (numList[i] == 5) {
//       continue;
//     }
//     console.log(numList[i]);
//   }
// }

// whileLoop();

// function whileLoop() {
//   const numList = [32, 54, 2, 5, 63, 54, 33, 632, 5, 45];
//   let firstDup = 0;

//   for (let i = 0; i < numList.length - 1; i++) {
//     for (let j = i + 1; j < numList.length; j++) {
//       if (numList[i] == numList[j]) {
//         console.log(numList[i]);
//         firstDup = numList[i];
//         break;
//       }
//     }
//     if (firstDup > 0) {
//       break;
//     }
//   }
// }
// whileLoop();

//------------------JavaScript Arrays-------------------//

// const numList = [32, 54, 23, 5, 2, 4, 6, 25, 65];

// console.log(typeof numList);

// index     ,     length

// console.log(numList[3]);
// console.log(numList.length);
// console.log(numList[numList.length - 1]);

//-----------Const With Varibale---------------//

// const city = "pune";

// city = "delhi";

// console.log(city);

//------------Const With Reference-------------//

// const numList = [32, 54, 23, 5, 2, 65];

// numList.push(111);

// console.log(numList);

// numList = [5, 4, 36, 34];

// console.log(numList);

//--------------Ways To Create Array--------------//

//-----------1st Way-----------//

// const friendsList = new Array("amol", "suyash", "nutan", "shilpa", "abc");

// console.log(friendsList[1]);
// console.log(friendsList.length);

//----------------2nd Way----------------//

// const friendsList = ["amol", "suyash", "nutan", "shilpa", "abc"];

// console.log(friendsList[2]);
// console.log(friendsList.length);

//--------------Array Methods----------------//

//---------------Push Method----------------//

// const friendsList = ["amol", "suyash", "nutan", "shilpa", "abc"];

// friendsList.push("atul");

// console.log(friendsList);

//----------------unshift-----------------//

// friendsList.unshift("atul");
// console.log(friendsList);

//------------------pop------------------//

// friendsList.pop();
// console.log(friendsList);

//-------------------shift-------------------//

// friendsList.shift();
// console.log(friendsList);

const numList = [34, 23, 62, 43, 34, 65, 2, 6, 8];

numList.sort();

console.log(numList);
