browser.action.onClicked.addListener((tab) => {
    let split = tab.url.split('/');


    if(split[0].startsWith('http') && !split[2].startsWith('192') && !split[2].startsWith('localhost') || split[0].startsWith('https') && !split[2].startsWith('192') && !split[2].startsWith('localhost')) {

        browser.tabs.create({url: "https://ip.steinlarve.de/?query="+split[2]});

    
    } else {
        error = "Invalid URL";
        console.log("error")

    }});

function checkurl() {
    browser.tabs.query({active: true, currentWindow: true}, async function(tabs) {
        let split = tabs[0].url.split('/');
        if(split[0].startsWith('http') && !split[2].startsWith('192') && !split[2].startsWith('localhost') || split[0].startsWith('https') && !split[2].startsWith('192') && !split[2].startsWith('localhost')) {
            browser.action.enable();

        } else {
            browser.action.disable();

        }
    }); 
}

browser.tabs.onActivated.addListener( function() { 
    checkurl()
      })
  
   browser.tabs.onUpdated.addListener(function() {
    checkurl()
    })
