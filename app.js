var btnTranslate = document.querySelector("#btn-translate");
var userInput = document.querySelector("#input-txt");
var outputText = document.querySelector(".output-txt");

function callHandler(){
    var translatedOutput;
    fetch(translateUrl+"?text="+userInput.value)
    .then(function (response)
    {
        if(response.ok){
            return response.json();
            }
    }
    ).then(function (data)
    {
        outputText.innerHTML= data.contents.translated;
    })
    .catch(errorHandler);
    
};

function errorHandler(){
    alert("Error occured while fetching the minion language");
}

btnTranslate.addEventListener("click",callHandler);


var translateUrl = "https://api.funtranslations.com/translate/minion.json";

