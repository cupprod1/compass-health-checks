var action = require("./../lib/browserAction.js");
var format = require("string-template");

module.exports = {
    elements: {
        welcome_div: {
            selector: '[class="content-container"]'
        },
        preview_btn: {
            selector: 'a[class*=launch-btn]'
        },


    },
    commands: [
        {
            waitForPageLoad: function () {
                this.api.perform(function () {
                    testlog.info("Waiting for activity Page to get loaded")
                })
                action.waitForElementVisible(this, this.elements.welcome_div.selector, 50000);
            },
            clickPreview: function () {
                this.api.perform(function () {
                    testlog.info("clicking Preview Button")
                })
                this.api.useCss();
                action.click(this, this.elements.preview_btn.selector)
            },
            clickPreview: function () {
                this.api.perform(function () {
                    testlog.info("clicking Preview Button")
                })
                this.api.useCss();
                action.click(this, this.elements.preview_btn.selector)
            },
            IsTestLaunched: function () {

                this.api.useCss();
                var handle;
                var browser = this.api;
                browser.windowHandles(function (result) {
                    handle = result.value[1];
                    browser.perform(function () {
                        testlog.info("Switching Window")
                    })
                    browser.switchWindow(handle, function () {
                        browser.perform(function () {
                            testlog.info("Window is switched")
                        })
                    });
                })
                browser.perform(function () {
                    testlog.info("Waiting for test Page to get loaded")
                })

                browser.useCss();
                browser.pause(5000)
                //continously check for max 60 secs
                action.waitForElementVisible(this, '#player', 60000);
                action.waitForElementVisible(this, '#player iframe#content', 60000);
                browser.perform(function () {
                    testlog.info("Test is launched successfully")
                })
            }

        }

    ]
};
