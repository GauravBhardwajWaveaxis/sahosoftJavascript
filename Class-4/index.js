// alert("Gaurav Bhardwaj.Hey I am External JavaScript file!");

// function display() {
//   alert("I am fired on click");
//   document.body.style.backgroundColor = "green";
// }

//-------The HTML DOM (Document Object Model)--------//

//--------HTML DOM getElementById() Method----------//

// function display() {
//   document.getElementById("heading").style.backgroundColor = "yellow";
//   document.getElementById("heading").innerHTML = "I am Changed when clicked.";
// }

// function display() {
//   let ele = document.getElementById("heading");
//   console.log(ele);
//   ele.style.color = "red";
//   ele.innerHTML = "I am Changed when Clicked.";
// }

//-------HTML DOM getElementsByClassName () Method--------//

// function display() {
//   let ele = document.getElementsByClassName("list");
//   console.log(ele);
//   ele[1].style.backgroundColor = "blue";
// }

function display() {
  let ele = document.getElementsByClassName("list");

  // forOf Loop

  for (let li of ele) {
    console.log(li);
    li.style.backgroundColor = "blue";
  }
}
