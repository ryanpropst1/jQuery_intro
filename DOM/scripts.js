// // let $btn = $(".my-button");
// // button.setAttribute('id', 'btn');
// // let button = document.createElement("BUTTON");
// // let btnText = document.createTextNode = ("Click Me!");

window.addEventListener("DOMContentLoaded", () => {
  // console.log("dom loaded");
  const body = document.body;

  // 1st item
  let btn = document.createElement("button");
  let btnText = document.createTextNode("Please Click Me");
  btn.appendChild(btnText);
  body.appendChild(btn);

  btn.addEventListener("click", e => {
    alert("Sup mate? How you traveling?");
  });
  // 2nd item

  let submit = document.getElementById("submit-button");
  submit.addEventListener("click", e => {
    let input = document.getElementById("message").value;
    alert(input);
  });

  // 3rd item
  let new_div = document.createElement("div");
  new_div.className = "container_1";
  new_div.id = "color";
  new_div.style.backgroundColor = "#4571DA";
  new_div.style.height = "150px";
  new_div.style.width = "150px";
  new_div.style.margin = "25px";
  body.appendChild(new_div);

  new_div.addEventListener("mouseover", () => {
    document.getElementById("color").style.backgroundColor = "#00FFFF";
  });

  new_div.addEventListener("mouseout", () => {
    document.getElementById("color").style.backgroundColor = "#4571DA";
  });

  // 4th item
  div_2 = document.createElement("div");
  div_2.className = "container_2";
  div_2.id = "color";
  div_2.style.height = "150px";
  div_2.style.width = "150px";
  div_2.style.margin = "25px";
  let para = document.createElement("p");
  para.className = "para_text";
  let paraText = document.createTextNode(
    "lorem ipsum. It will be Halloween soon and then Thanksgiving and then Chrissy!"
  );
  para.appendChild(paraText);
  div_2.appendChild(para);
  body.appendChild(div_2);

  const textToChange = document.querySelector("paraText");

  para.addEventListener("click", e => {
    console.log(e.target);
    e.target.style.color = getRandomColor();
  });

  // function to create random color
  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // 5th item
  div_3 = document.createElement("div");
  div_3.style.height = "100px";
  div_3.style.width = "100px";
  div_3.style.margin = "25px";
  let btn_3 = document.createElement("button");
  btn_3.innerHTML = "Click to Reveal";
  btn_3.style.backgroundColor = "#348ceb";
  btn_3.style.color = "white";
  div_3.appendChild(btn_3);
  body.appendChild(div_3);

  btn_3.addEventListener("click", e => {
    //  console.log(e.target);
    let span = document.createElement("span");
    let spanTxt = document.createTextNode("Ryan Propst");
    span.appendChild(spanTxt);
    body.appendChild(span);
  });

  // 6th  and last item in DOM list

  let div_4 = document.createElement("div");
  div_4.className = "container_4";
  div_4.style.height = "100px";
  div_4.style.width = "100px";
  div_4.style.margin = "25px";
  let btn_4 = document.createElement("button");
  btn_4.className = "listBtn";
  btn_4.innerHTML = "Click to add Friend";
  btn_4.style.backgroundColor = "#348ceb";
  btn_4.style.color = "white";
  div_4.appendChild(btn_4);
  body.appendChild(div_4);

  const friends = [
    "Chris",
    "Ryan",
    "Steve",
    "Will",
    "Jeremy",
    "Avera",
    "Caroline",
    "Veronica",
    "Jake",
    "Alex"
  ];

  btn_4.addEventListener("click", e => {
    const list = document.createElement("ul");
    body.appendChild(list);
  });
  for (let i = 0; i < friends.length; i++) {
    const listItem = document.createElement("li");
    let listItemText = document.createTextNode(friends[i]);
    listItem.appendChild(listItemText);
    list.appendChild(listItem);
  }
});

//
// function test() {
//   console.log("test");
// }
//   function on_click() {
// document.querySelector('.button-two').addEventListener('onclick', on_click);
//     alert("Please Feed the DOM with jQuery");
//   }
// });
// window.addEventListener("DOMContentLoaded", () => {
//   console.log("yes");
//   function test() {
//     console.log("in test");
//   }
// });
// function test() {
//   console.log("!!!");
// }
