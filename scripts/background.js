chrome.tabs.onCreated.addListener(function(tab) {
console.log(tab)
    if (tab.url === "edge://newtab/") {
        alert("hello")
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["get_data.js"]
        });
    }
});