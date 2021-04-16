let btnTranslate = document.getElementById('btn-translate');
let btnReset = document.getElementById('btn-reset');
let input = document.getElementById('input');
let output = document.getElementById('output');
let serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTransationURL(text){
    return serverURL + "?" + text;
}

function clickHandler(){
    let inputText = input.value;

    fetch(getTransationURL(inputText))
    .then(response => response.json())
    .then(json => console.log(json.contents.translated))
}

btnTranslate.addEventListener("click", clickHandler)