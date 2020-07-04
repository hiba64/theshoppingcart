//Variables Globales

const buttonlike = Array.from(document.querySelectorAll(".button-like"));
const minusBtn = Array.from(document.querySelectorAll(".minus-btn"));
const buttonplus = Array.from(document.querySelectorAll(".plus-btn"));
const buttonremove = Array.from(document.querySelectorAll(".remove-btn"));
const Totalprice = document.querySelector(".Total-price");
const quantity = Array.from(document.querySelectorAll(".quantity"));
const price = Array.from(document.querySelectorAll(".price"));

//Change Color Function

function changeColor(el) {
  console.log(el);
  if (el.target.style.color !== "red") {
    el.target.style.color = "red";
  } else {
    el.target.style.color = "black";
  }
}

//Total Price btn

function Total() {

  let T = 0;
  for (let i = 0; i < quantity.length;i++){
  T = T + quantity[i].innerText * price[i].innerText;
}
Totalprice.innerText = T;
}
//Plus btn

function increment(e) {
  e.target.previousElementSibling.innerHTML =
    Number(e.target.previousElementSibling.innerHTML) + 1;
    Total();
}
//Minus btn

function decrement(e) {
  if (Number(e.target.nextElementSibling.innerText) < 1) {
    e.target.nextElementSibling.innerText = 0;
  } else {
    e.target.nextElementSibling.innerText =
      Number(e.target.nextElementSibling.innerText) - 1;
  }
  Total();
}

//remove btn

function remove(e) {

  e.target.parentElement.parentElement.remove();
  e.target.parentElement.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling.innerText = 0; 

     Total();
}




//event


for (let i = 0; i < buttonlike.length; i++) {

  buttonlike[i].addEventListener("click", changeColor);
  buttonplus[i].addEventListener("click", increment);
   minusBtn[i].addEventListener("click", decrement);
   buttonremove[i].addEventListener("click", remove);
} 

