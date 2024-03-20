const inputText = document.querySelector(".main_div_textBar_textArea");
const id = ".main_div_right_output_text";
const outputText = document.querySelector(id);

function checkMessage(event) {
  let verifyText = /^[a-z\n\s]+$/.test(event.target.value) || event.target.value == "";
  if (!verifyText) {
    blockButton(event);
  }
  else {
    unblockButton(event)
  }
}

function blockButton(event) {
  document.querySelector('.crypt').setAttribute('disabled', true);
  document.querySelector('.crypt').style.setProperty('background-color', 'var(--color-gray)');
  document.querySelector('.crypt').style.setProperty('color', 'var(--color-dark-blue)');
  document.querySelector('.decrypt').setAttribute('disabled', true);
  document.querySelector('.decrypt').style.setProperty('background-color', 'var(--color-gray)');
}

function unblockButton(event) {
  document.querySelector('.crypt').removeAttribute('disabled');
  document.querySelector('.crypt').style.setProperty('background-color', 'var(--color-dark-blue)');
  document.querySelector('.crypt').style.setProperty('color', 'white');
  document.querySelector('.decrypt').removeAttribute('disabled');
  document.querySelector('.decrypt').style.setProperty('background-color', 'var(--color-soft-white)');
}

function btnCrypt() {
  const textCrypt = crypt(inputText.value);
  outputText.value = textCrypt;
  inputText.value = "";
}

function btnDecrypt() {
  const textDecrypt = decrypt(inputText.value);
  outputText.value = textDecrypt;
  inputText.value = "";
}

function crypt(stringCrypted) {

  let codeMatrix = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringCrypted = stringCrypted.toLowerCase();

  for (let i = 0; i < codeMatrix.length; i++) {
    if (stringCrypted.includes(codeMatrix[i][0])) {
      stringCrypted = stringCrypted.replaceAll(codeMatrix[i][0], codeMatrix[i][1]);
    }
  }
  return stringCrypted;
}

function decrypt(stringDecrypted) {
  let codeMatrix = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
  stringDecrypted = stringDecrypted.toLowerCase();

  for (let i = 0; i < codeMatrix.length; i++) {
    if (stringDecrypted.includes(codeMatrix[i][0])) {
      stringDecrypted = stringDecrypted.replaceAll(codeMatrix[i][0], codeMatrix[i][1]);
    }
  }
  return stringDecrypted;
}

function removeSidebar() {
  const removeSidebar = document.querySelector(".main_div_right").remove();
  const showSidebar = document.querySelector(".main_div_right_output").style.display = 'flex';
}

function copyText() {
  var textarea = document.querySelector(".main_div_right_output_text");
  textarea.select();
  navigator.clipboard.writeText(textarea.value)
    .then(() => {
      alert("Texto copiado!");
    })
    .catch(err => {
      console.error('Falha ao copiar texto: ', err);
    });
}
