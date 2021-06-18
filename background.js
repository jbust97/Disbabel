var tabId = "Hello";
var selection = null;

browser.contextMenus.create({
    id: "log-selection",
    title: "Disbabel",
    contexts: ["selection"],
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  switch (info.menuItemId) {
    case "log-selection":
    	tabId = tab.id;
		  selection = info.selectionText
      browser.browserAction.setPopup({"tabId":tab.id , "popup":"popup.html"});
  		browser.browserAction.openPopup();
  		break;  
  }
})

browser.browserAction.onClicked.addListener((tab) => {
	tabId = tab.id;
	browser.browserAction.setPopup({"tabId":tab.id , "popup":"info.html"});
  browser.browserAction.openPopup();
});	