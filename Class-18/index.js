// alert("Gaurav");

//====================Arrays.from======================//

// const numList = [23, 52, 45, 24, 76, 34, 25];

// const x = Array.from(numList);

// x[0] = 100;

// console.log(numList);
// console.log(x);

//===================... spread=====================//

// const numList = [23, 52, 45, 24, 76, 34, 25];

// const x = [...numList];

// x[1] = 111;
// console.log(numList);
// console.log(x);

//==================Secondory Array====================//

// const numList = [23, 52, 45, 24, 76, 34, 25, [65, 544, 23]];

// const x = [].concat(numList);

// x[0] = 100;
// x[7][1] = 200;
// console.log(numList);
// console.log(x);

//======================Deep copy=====================//

//=======================JSON======================//

const numList = [23, 52, 45, 24, 76, 34, 25, [65, 544, 23]];

// console.log(numList);

var x = JSON.stringify(numList);
// console.log(x);

var y = JSON.parse(x);
// console.log(y);

y[1] = 555;
y[7][1] = 7589;

console.log(numList);
console.log(y);
