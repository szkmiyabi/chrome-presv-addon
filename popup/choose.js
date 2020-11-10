function action_handler() {

    document.addEventListener("click", (e) => {

        const tabs = browser.tabs;
        let tid = e.target.id;

        switch(tid) {
            case "csscut":
                browser.tabs.query({active: true, currentWindow: true})
                    .then((tabs) => {
                        browser.tabs.sendMessage(tabs[0].id, {
                            command: "csscut"
                        });
                    })
                    .catch(console.error("error"));
                break;
            case "altcheck":
                browser.tabs.query({active: true, currentWindow: true})
                    .then((tabs) => {
                        browser.tabs.sendMessage(tabs[0].id, {
                            command: "altcheck"
                        });
                    })
                    .catch(console.error("error"));
                break;
            case "targetcheck":
                browser.tabs.query({active: true, currentWindow: true})
                    .then((tabs) => {
                        browser.tabs.sendMessage(tabs[0].id, {
                            command: "targetcheck"
                        });
                    })
                    .catch(console.error("error"));
                break;
            case "documentlink":
                browser.tabs.query({active: true, currentWindow: true})
                    .then((tabs) => {
                        browser.tabs.sendMessage(tabs[0].id, {
                            command: "documentlink"
                        });
                    })
                    .catch(console.error("error"));
                break;
            case "langcheck":
                browser.tabs.query({active: true, currentWindow: true})
                    .then((tabs) => {
                        browser.tabs.sendMessage(tabs[0].id, {
                            command: "langcheck"
                        });
                    })
                    .catch(console.error("error"));
                break;
            case "label-and-title-check":
                browser.tabs.query({active: true, currentWindow: true})
                    .then((tabs) => {
                        browser.tabs.sendMessage(tabs[0].id, {
                            command: "label-and-title-check"
                        });
                    })
                    .catch(console.error("error"));
                break;
            case "structcheck":
                browser.tabs.query({active: true, currentWindow: true})
                    .then((tabs) => {
                        browser.tabs.sendMessage(tabs[0].id, {
                            command: "structcheck"
                        });
                    })
                    .catch(console.error("error"));
                break;
            case "superfocus":
                browser.tabs.query({active: true, currentWindow: true})
                    .then((tabs) => {
                        browser.tabs.sendMessage(tabs[0].id, {
                            command: "superfocus"
                        });
                    })
                    .catch(console.error("error"));
                break;
            case "ariacheck":
                    browser.tabs.query({active: true, currentWindow: true})
                        .then((tabs) => {
                            browser.tabs.sendMessage(tabs[0].id, {
                                command: "ariacheck"
                            });
                        })
                        .catch(console.error("error"));
                break;
        }
    });

}

browser.tabs.executeScript({file: "/action.js"})
    .then(action_handler)
    .catch(console.error("error!"));