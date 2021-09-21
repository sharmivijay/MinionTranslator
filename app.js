var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#input-txt");
var outputText = document.querySelector(".output-txt");

/**
 * This funtion is an example of detailed function and I have written the same using arrow functions
 * function callHandler(){
    fetch(translateUrl+"?text="+inputText.value)
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
    
};**/

function callHandler(){
    var finalUrl= translateUrl+"?text="+inputText.value;
    console.log(finalUrl);
 fetch(finalUrl)
 .then((response) => 
    {
        if(response.ok){
            return response.json();
        }
        console.log(response);
     throw new Error("Lets try after sometime");
    })
 .then(data => outputText.innerHTML = data.contents.translated )
 .catch((error) => {alert("Error : " +error.message)});
}

function errorHandler(){
    alert("Please try after sometime");
}

btnTranslate.addEventListener("click",callHandler);


var translateUrl = "https://api.funtranslations.com/translate/minion.json";

