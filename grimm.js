//https://dictionary.yandex.net/api/v1/dicservice.json/getLangs?key=APIkey
//const fetch = require("node-fetch");


//get_translation('de','en','wrong_key').then(data => console.log(data));
//The line below only serves to quick test the add-on
//document.body.style.border = "5px solid red";
function getSelectedText() {
	if(window.getSelection){
    	return window.getSelection().toString();
    }else if (document.getSelection){
		return document.getSelection.toString();
		
	}


    return "";
}


browser.runtime.onMessage.addListener(request => {
	return Promise.resolve({response: getSelectedText()});
});

