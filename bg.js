


function match(pattern, url) {
    pattern = pattern.split("/");
    url = url.split("/");
    
    while(url.length) {
     const p = pattern.shift();
     if(p !== url.shift() && p !== "*")
      return false;
    }
    return true;
  }
  
  

chrome.tabs.onActivated.addListener(tab=>{
    chrome.tabs.get(tab.tabId,tab_info=>{
        if(match("https://gs.nike.com/*",tab_info.url)){
           
            console.log('AT CHECKOUT PAGE');
            chrome.tabs.executeScript(null,{file:'content.js'},()=>{
                console.log('LOADED');
            });
        }
        console.log(tab_info.url);
    })
console.log(tab);

})