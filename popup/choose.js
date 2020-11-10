function action_handler() {

    document.addEventListener("click", (e) => {

        const tabs = chrome.tabs;
        let tid = e.target.id;

        switch(tid) {
            case "csscut":
                    chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{
                        chrome.tabs.sendMessage(tabs[0].id, {
                            command: "csscut"
                        });
                    });
                    break;
            case "altcheck":
                chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{
                    chrome.tabs.sendMessage(tabs[0].id, {
                        command: "altcheck"
                    });
                });
                break;
            case "targetcheck":
                chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{
                    chrome.tabs.sendMessage(tabs[0].id, {
                        command: "targetcheck"
                    });
                });
                break;
            case "documentlink":
                chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{
                    chrome.tabs.sendMessage(tabs[0].id, {
                        command: "documentlink"
                    });
                });
                break;
            case "langcheck":
                chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{
                    chrome.tabs.sendMessage(tabs[0].id, {
                        command: "langcheck"
                    });
                });
                break;
            case "label-and-title-check":
                chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{
                    chrome.tabs.sendMessage(tabs[0].id, {
                        command: "label-and-title-check"
                    });
                });
                break;
            case "structcheck":
                chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{
                    chrome.tabs.sendMessage(tabs[0].id, {
                        command: "structcheck"
                    });
                });
                break;
            case "superfocus":
                chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{
                    chrome.tabs.sendMessage(tabs[0].id, {
                        command: "superfocus"
                    });
                });
                break;
            case "ariacheck":
                chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{
                    chrome.tabs.sendMessage(tabs[0].id, {
                        command: "ariacheck"
                    });
                });
                break;
        }
    });

}

chrome.tabs.executeScript({file: "/action.js"}, action_handler);