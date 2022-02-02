var action = require("./../lib/browserAction.js");
var format = require("string-template");

module.exports = {
    elements: {
        welcome_msg: {
            selector: '[class="product-view-container"]'
        },
		 competencyTest: {
            selector: '[qid="pView-3-3"]' 
        },
		
      
 },
    commands: [
        {
            waitForPageLoad: function(){
              this.api.perform(function() {
                  testlog.info("Waiting for Login Page to get loaded")
              })
                action.waitForElementVisible(this,this.elements.welcome_msg.selector,50000);
            },
			clickCompetencyTest: function(){
				 this.api.perform(function() {
                    testlog.info("clicking Competency Test")
                })
                this.api.useCss();
                action.click(this,this.elements.competencyTest.selector)
			}
        }

    ]
};
