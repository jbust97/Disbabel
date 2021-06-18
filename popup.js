//Paste your yandex.dictionary api key (with quotes).
var APIkey = ""
/*
	Choose language pair. Currently on German -> English
	Some valid pairs:
	"en-es": English -> Spanish
	"es-en": Spanish -> English
	"fr-en": French -> English
	"de-en": German -> English
	"ru-en": Russian -> English
	
	For a full list: 
		- https://dictionary.yandex.net/api/v1/dicservice.json/getLangs?key= 
	Add your yandex.dictionary api key to the link above (without quotes)
*/
var language = "de-en"
async function getTranslation(APIkey,text){
	
	var translation = "";
	if(text != ""){
		let  response =  await fetch('https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=' + APIkey + '&lang=' + language + '&text=' + text + '&flags=4');
		let  data = await response.json()
		console.log(data);
		if (data.def.length > 0){
			for (def of data.def){
				translation = translation + "<span class=\"word\">" + def.text + 	"</span></br>";   
				for (tr of def.tr){
					translation = translation  + tr.text  + " (" + tr.pos + ").</br>";
				}
			}
		}else{
			translation = "We couldn't find '" + text + "' on yandex.dictionary" ;

		}
	}else{
		translation = "Please select a word";
	}	
	document.getElementById("translation").innerHTML = translation.toString();
}




var bg = browser.runtime.getBackgroundPage();

bg.then(page => {
		var selectedText;
		//browser.tabs.sendMessage(page.tabId, {"message": "Send Word"}).then(resolve => {
		selectedText = page.selection;
		//selectedText = selection
		getTranslation(APIkey,selectedText);
});
