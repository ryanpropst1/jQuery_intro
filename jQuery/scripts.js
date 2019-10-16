// let $btn = $(".my-button");

window.addEventListener("DOMContentLoaded", () => {
  let button = document.createElement("BUTTON");
  let btnText = (document.createTextNode = "Click Me!");

  // button.setAttribute('id', 'btn');

  button.addEventListener("click", () => {
    alert("Sup mate? How you traveling?");
    document.body.appendChild(button);
  });
});

// var btn = document.createElement("button");
// var text = document.createTextNode("Please Click Me");
// window.addEventListener("DOMContentLoaded", () => {
//   window.addEventListener("load", () => {
//     btn.classList.add("button-two");
//     document.body.appendChild(btn).appendChild(text);
//     btn.addEventListener("click", on_click);
//   });
//   function on_click() {
//     /// document.querySelector('.button-two').addEventListener('onclick', on_click);
//     alert("Please remain still while we attempt to hack your email");
//   }
// });
