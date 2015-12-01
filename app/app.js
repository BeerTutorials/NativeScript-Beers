var application = require("application");
application.mainModule = "main-page";
application.cssFile = "./app.css";
application.start();

application.on(application.launchEvent, function (args) {
   var mainPage = require("./main-page");
   mainPage.beers();



})
