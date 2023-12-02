let score = document.querySelector("span");
let question = document.querySelector("p");
let textinpt = document.querySelector("#text");
let submitinput = document.querySelector("#submit");
let form = document.getElementById("form");
let ran1 = Math.ceil(Math.random() * 10);
let ran2 = Math.ceil(Math.random() * 10);
let result = ran1 * ran2;

//code made by the trutoil
// question.innerHTML = `what is ${ran1} muliply by ${ran2}`;

// let count = JSON.parse(localStorage.getItem("score"));

// if (!count) {
//   count = 0;
// }
// form.addEventListener("submit", () => {
//   let useranswar = +textinpt.value;
//   if (useranswar === result) {
//     count++;
//     localstorge();
//   } else {
//     count--;
//     localstorge();

//   }
// });
// score.innerHTML = `score: ${count}`;
// function localstorge() {
//   localStorage.setItem("score", JSON.stringify(count));
// }

//coded my by me with adding som futhers
start();
let count = 0;
score.innerHTML = `scrore: ${JSON.parse(localStorage.getItem("value"))}`;

function start() {
  //clear the quetsion text
  question.innerHTML = "";
  //get random number
  ran1 = Math.ceil(Math.random() * 10);
  ran2 = Math.ceil(Math.random() * 10);
  let mainp = document.createElement("p");

  mainp.classList.add("question");

  let ptext = document.createTextNode(`waht is ${ran1} multiply ${ran2}`);

  mainp.appendChild(ptext);

  question.appendChild(mainp);
}

form.addEventListener("submit", function (event) {
  count = JSON.parse(localStorage.getItem("value"));
  if (!count) count = 0;

  //get the right answar
  let answar = ran1 * ran2;
  //get the user answar
  let useranswar = +textinpt.value;
  //check if the useranswar equal to the answar
  if (answar === useranswar) {
    event.preventDefault();
    // incress the count with 1
    count++;
    //if the the answar is right will make a new quetsion
    start();
  } else {
    //stop from sending form
    event.preventDefault();
    //decress the count
    count--;
  }
  // set the count into local storge
  localStorage.setItem("value", JSON.stringify(count));
  //change the text of score
  score.innerHTML = `score: ${count}`;
  // clear the input 
  textinpt.value = ""
});
