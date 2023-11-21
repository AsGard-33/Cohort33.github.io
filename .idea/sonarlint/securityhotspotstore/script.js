// script.js
console.log("JavaScript подключен и работает!");

function changeParagraphText() {
    var paragraph = document.querySelector('p');
    if (paragraph) {
        paragraph.textContent = "Текст абзаца был изменен с помощью JavaScript!";
    }
}

window.onload = changeParagraphText;