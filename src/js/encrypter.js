const textArea = document.getElementById("userText");
const btnEncrypt = document.getElementById("encrypt");
const btnDecrypt = document.getElementById("decrypt");
const btnCopy = document.getElementById("btnCopy");
const asideUserText = document.getElementById("userTextEncrypt");
const noText = document.getElementById("noText");
const yesText = document.getElementById("yesText");

const toggleAside = (text) => {
  noText.style.display = "none";
  asideUserText.innerHTML = text;
  yesText.style.display = "inline-block";
  textArea.value = "";
};

btnEncrypt.onclick = () => {
  let userText = textArea.value;
  let encrypt = userText
    .replace("e", "enter")
    .replace("i", "imes")
    .replace("a", "ai")
    .replace("o", "ober")
    .replace("u", "ufat");

  if (userText != "") {
    toggleAside(encrypt);
  } else {
    alert("enter your message");
  }
};

btnDecrypt.onclick = () => {
  let asideText = textArea.value;
  let decriptText = asideText
    .replace("enter", "e")
    .replace("imes", "i")
    .replace("ai", "a")
    .replace("ober", "o")
    .replace("ufat", "u");

  textArea.value = decriptText;
  toggleAside(decriptText);
};

btnCopy.onclick = () => {
  console.log("btnCopy push");
  let textAside = asideUserText;
  if (textAside != "") {
    navigator.clipboard.writeText(textAside.innerHTML);
    alert("Se copió el mensaje: " + textAside.innerHTML);
  }
};
