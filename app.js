var btnTranslate = document.querySelector("#btn-translate");
var userInput = document.querySelector("#input-txt");
var outputText = document.querySelector(".output-txt");

function callHandler(){
    console.log("clicked");
    console.log("User input: "+userInput.value);
    outputText.innerHTML= userInput.value;
};

btnTranslate.addEventListener("click",callHandler);


