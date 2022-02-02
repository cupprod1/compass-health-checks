var screenshots = require('./../lib/screenshots');
describe('Cambridge One APP ', function () {
    before(function (browser, done) {              
        //Create object of nemo launch page
        nemoLaunchPageObj = browser.page['nemoLaunch.page']();
        //Launch nemo url
        console.log("Launching URL: " + browser.globals.test.launchUrl)
        nemoLaunchPageObj.navigate();
        done();
        browser.perform(function() {
            testlog.info("URL: " + browser.globals.test.launchUrl + " launched successfully")
        })
        nemoLaunchPageObj.waitForLoginButtonToBePresent(); 
        nemoLaunchPageObj.clickLogin();
        //Create object for login page
        nemoLoginPageObj = browser.page['login.page']();
        //Wait for login page
        nemoLoginPageObj.waitForPageLoad();
        done();
    });
    it('Verify that the Compass Test is working fine', function(browser) {
        //Create object for login page
        nemoLoginPageObj = browser.page['login.page']();
        nemoLoginPageObj.login('cqa_teacher1@yopmail.com',"Compro11");
        teacherDashboard = browser.page['nemoTeacherDashboard.page']();
        teacherDashboard.waitForPageLoad();
        teacherDashboard.openMyLibrary();
        teacherDashboard.waitForCourseMaterialSearchTextBoxToAppear();
        teacherDashboard.searchCourseMaterial('MQA Compass Product 01');
        teacherDashboard.clickCourseMaterial();
        productView = browser.page['productView.page']();
        productView.waitForPageLoad();
        productView.clickCompetencyTest();
        browser.pause(5000);
        activityView = browser.page['activity.page']();
        activityView.waitForPageLoad();
        activityView.clickPreview();
        browser.pause(5000);
        activityView.IsTestLaunched();
        /*browser.url(function(result) {
            // return the current url
            console.log(result);
          });*/
        browser.assert.urlContains('https://www.metritests.com/metrica/player.aspx');
    });   
    after(function (browser, done) {
        //close browser
        if (browser.sessionId) {
            browser.end(function () {
                done();
            });
        } else {
            done();
        }
    });
});