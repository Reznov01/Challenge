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
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

  if (userText != "") {
    toggleAside(encrypt);
  } else {
    alert("enter your message");
  }
};

btnDecrypt.onclick = () => {
  let asideText = textArea.value;
  let decriptText = asideText
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

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
