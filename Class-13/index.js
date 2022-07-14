// alert("Gaurav");

//-------------JavaScript - Array.map()----------------//

// const numList = [32, 4, 235, 5665, 347, 345, 27];

// numList.map(function (value, index, array) {
//   console.log(value, +" " + index, +" " + array);
// });

// const numList = [32, 4, 235, 5665, 347, 345, 27];
// numList.map(function (value, index, array) {
// console.log(value + 100);
//   console.log("Add 100 to Each element : " + (value + 100));
// });

// const numList = [32, 4, 235, 5665, 347, 345, 27];

// numList.map(function (value, index, arr) {
//   if (index == 0) {
//     console.log(value + 100);
//   } else if (index == 1) {
//     console.log(value + 50);
//   }
// });

//---------------------forEach---------------------//

// const numList = [32, 4, 235, 5665, 347, 345, 27];

// numList.forEach(function (value, index, array) {
//   console.log(value, index, array);
// });

// const numList = [32, 4, 235, 5665, 347, 345, 27];

// const result = numList.forEach(function (value, index, array) {
//   return value + 10;
// });
// console.log(result);

// const result = numList.map(function (value, index, array) {
//   return value + 10;
// });
// console.log(result);

//-------------JavaScript - Array.filter()-------------//

//----------------------filter-----------------------//

// const products1 = [
//   { id: 1, name: "nokia32", price: 3000 },
//   { id: 2, name: "vivo", price: 9000 },
//   { id: 3, name: "lenovo", price: 30000 },
//   { id: 4, name: "samsung", price: 31000 },
//   { id: 5, name: "vivo", price: 10000 },
// ];

// let newProduct1 = products1.filter(function (value, index, array) {
//   // console.log(value, index, array);
//   return value.price < 10000;
// });
// console.log(newProduct1);
// console.log(typeof newProduct1);

// const products = [
//   { id: 1, name: "nokia", price: [3000, 5000, 7000] },
//   { id: 2, name: "vivo", price: [40000, 12000, 6000] },
//   { id: 3, name: "lenovo", price: [41000, 22000, 60000] },
//   { id: 4, name: "samsung", price: [14000, 11000, 6100] },
//   { id: 5, name: "vivo", price: [4006, 62000, 61000] },
// ];

// products.filter(function (value, index, array) {
//   return value.price.filter(function (value, index, array) {
//     console.log(value);
//     if (value <= 5000) {
//       console.log("Our Products");
//     } else {
//       console.log("Not Yours");
//     }
//   });
// });

// let Result = products.filter(function (value, index, array) {
//   return value.price.filter(function (value, index, array) {
//     console.log(value);
//     if (price < 5000) {
//       return value;
//     }
//   });
// });
// console.log(Result);

//--------------JavaScript - Array.find()---------------//

//---------------------find----------------------//

// const products = [
//   { id: 1, name: "nokia32", price: 3000 },
//   { id: 2, name: "vivo", price: 9000 },
//   { id: 3, name: "lenovo", price: 30000 },
//   { id: 4, name: "samsung", price: 31000 },
//   { id: 5, name: "vivo", price: 10000 },
// ];

// const newProduct = products.find(function (value, index, array) {
//   // console.log(value);
//   // console.log(index);
//   // console.log(array);
//   // console.log(value, index, array);
//   return value.id === 2;
// });
// console.log(newProduct);
// console.log(typeof newProduct);

//---------JavaScript - Array.findIndex()------------//

// const products = [
//   { id: 1, name: "nokia32", price: 3000 },
//   { id: 2, name: "vivo", price: 9000 },
//   { id: 3, name: "lenovo", price: 30000 },
//   { id: 4, name: "samsung", price: 31000 },
//   { id: 5, name: "vivo", price: 10000 },
// ];

// const newProduct = products.findIndex(function (value, index, array) {
//   // console.log(value, index, array);
//   return value.id === 2;
// });
// console.log(newProduct);

//----------JavaScript - Array.reduce()---------------//

const numList = [32, 4, 235, 5665, 347, 345, 27];

numList.reduce(function (previousValue, value, index, array) {
  console.log(value, index, array);
});
