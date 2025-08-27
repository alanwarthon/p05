const btn01 = document.getElementById("btnProcess");
btn01.addEventListener("click",process01);

const msg01 = document.getElementById("txt01");
const msg02 = document.getElementById("txt02");
const txtMessage = document.getElementById("txtS");


function process01() {
  
  let sum = Number(msg01.value) + Number(msg02.value);
  let finalMessage = `${msg01.value} + ${msg02.value} = ${sum}`;

  txtMessage.textContent += finalMessage + "\n";
  msg01.value = "";
  msg02.value = "";
  msg01.focus();

}