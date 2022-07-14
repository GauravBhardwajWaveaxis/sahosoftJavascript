// alert("Gaurav");

//--------JavaScript - Replacing String Content---------//

//------------replace and replaceAll--------------//

// let para =
//   "This is Gaurav Bhardwaj And he is FrontEnd deveoper.good morning to everybody, deveoper deveoper";

// console.log(para);

// let newPara = para.replace("deveoper", "developer");
// let newPara1 = para.replaceAll("deveoper", "developerrrrr");

// console.log(newPara);
// console.log(newPara1);

//----------JavaScript - The concat() Method-----------//

//-------------------concat------------------//

// let str1 = "I am Gaurav Bhardwaj,";
// let str2 = "i am from bangalore.";

// let str3 = str1 + str2;
// console.log(str3);

// let str3 = str1.concat(str2);
// console.log(str3);

// let str3 = str1.concat(str2, "Waveaxis");
// console.log(str3);

//-------------JavaScript - String.trim()--------------//

//------------------------trim()----------------------//

// let para =
//   "      this is Gaurav Bhardwaj and he is deveoper , gm to everybody, deveoper      ";
// console.log(para);

// let newPara = para.trim();
// console.log(newPara);

// let newP=para.replaceAll(" ","")

// console.log(newP);

//------JavaScript - Extracting String Characters-------//

/*
There are 3 methods for extracting string characters:

.......... charAt(position)
.......... charCodeAt(position)
.......... Property access [position]
*/

//----------------------charAt----------------------//

// let para =
//   "this is gaurav bhardwaj and he is frontend deveoper , gm to everybody, deveoper";

// let newPara = para.charAt(5);
// console.log(newPara);

// for (const char of para) {
//   console.log(char);
//   console.log("extract char: " + para.charAt(char));
// }

//--------------------charCodeAt---------------------//

// let para =
//   "this is gaurav bhardwaj and he is frontend deveoper , gm to everybody, deveoper";

// let newPara = para.charCodeAt(5);
// console.log(newPara);

// A-Z----65-90
// a-z----97-122

//------JavaScript - Converting Arrays to Strings-------//

//-----------------toString()----------------//

// const names = ["ashish", "pooja", "siuyasg", "ajit"];

// let str = names.toString();
// console.log(names);
// console.log(str);

//----------------------join----------------------//

// let str = names.join();
// console.log(str);

// let str1 = names.join("*>>>>");
// console.log(str1);

//---------------------delete-----------------------//

// const names = ["ashish", "pooja", "siuyasg", "ajit"];

// names.delete("ashish");
// // delete names[1];
// console.log(names);

// names.delete[1];

// delete names[3];
// console.log(names);

//------------JavaScript - Splicing an Array------------//

//------------------splice-----------------//

const names = ["ashish", "pooja", "siuyasg", "ajit"];

console.log(names);

names.splice(0, 1);

console.log(names);

// names.splice(0, 2);

// console.log(names);
