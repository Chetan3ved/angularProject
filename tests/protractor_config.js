// conf.js
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/test_main.js'],
  capabilities: {
    browserName: 'chrome'
  },
  baseUrl : 'http://localhost:8080',
  framework : 'jasmine',
  jasmineNodeOpts : {
  	showColors : true,
  	defaultTimeoutInterval : 30000
  },
  rootElement: '#myApp',
  onPrepare: function() 
    {
        // implicit and page load timeouts
        // browser.manage().timeouts().pageLoadTimeout(10000);
        // browser.manage().timeouts().implicitlyWait(5000);

        // // for non-angular page
        // browser.ignoreSynchronization = true;

        // sign in before all tests
     }
};