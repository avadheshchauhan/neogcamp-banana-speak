let btnTranslate = document.querySelector("#btn-translate");

let btnReset = document.querySelector("#btn-reset");

let txtInput = document.querySelector("#input-textarea");

let outoutText = document.querySelector("#output-textarea");

let serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}


function clickHandler() {
    let inputText = txtInput.value; // taking input

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            let translatedText = json.contents.translated;
            outoutText.innerText = translatedText; // output
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)

btnReset.addEventListener("click", () => {
    txtInput.value = "";
    outoutText.value = "";
});