// Add Event Listners
console.log(document.getElementsByClassName("test")[1]);
//console.log(document.getElementById("btn"));
//console.log(document.querySelector("#btn"));
//console.log(document.querySelectorAll(".test"));

//1. String 2.Call back function 3.Capturing/bubbling
// 3.1. Printing from parent to child -> Capturing
// 3.2. Printing from parent to child -> Bubbling
// document.getElementById("btn").addEventListener(
//   "click",
//   // can use method name or create ciustom
//   function () {
//     console.log("clicked");
//   }
// );

document.getElementById("form").addEventListener(
  "click",
  function (e) {
    console.log("Form clicked");
    // Stop the Bubbling or Capturing effect
    e.stopPropagation();
  },
  true
);
document.getElementById("div").addEventListener(
  "click",
  function () {
    console.log("div clicked");
  },
  true
);
document.getElementById("p").addEventListener(
  "click",
  function (e) {
    console.log("p clicked");
    e.stopPropagation();
  },
  true
);

// Get Data Attribute
console.log(document.getElementById("div").getAttribute("data-id"));

document.getElementById("dataId").addEventListener("click", function (e) {
  console.log(e.target.getAttribute("data-name"));
});

//Event loop
(function () {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
})();

// 1 and 4 completes which is in call stack and set timer
// is moved to WebAPI and moved to Event loop
// once call stack is empty Event loop will execute
//Output 1 4 3 2
