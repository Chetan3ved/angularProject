define("angular-modules",["angular"],function(e){var t=e.module("controllers",[]),n=e.module("directives"
,[]),r=e.module("filters",[]),i=e.module("services",[]),s={controllers:t,directives:n,filters:r,services
:i};return s}),define("controllers/masterCtrl",["angular","angular-modules"],function(e,t){t.controllers
.controller("masterCtrl",["$scope",function(e){e.name="master ctrl",e.links=[{url:"#/myApp/main",label
:"main Page",id:"main"},{url:"#/myApp/sub",label:"sub Page",id:"sub"}]}])}),define("controllers/mainCtrl"
,["angular","angular-modules"],function(e,t){t.controllers.controller("mainCtrl",["$scope",function(e
){e.name="some app"}])}),define("controllers/subCtrl",["angular","angular-modules"],function(e,t){t.controllers
.controller("subCtrl",["$scope",function(e){e.name="sub app"}])}),define("controllers/main",["./masterCtrl"
,"./mainCtrl","./subCtrl"],function(){}),define("controllers",["controllers/main"],function(e){return e
}),define("filters/sample-filter",["angular","angular-modules"],function(e,t){t.filters.filter("sampleFilter"
,function(){return function(e){return e+" hey"}})}),define("filters/main",["./sample-filter"],function(
){}),define("filters",["filters/main"],function(e){return e}),define("directives/sample-directive",["angular"
,"angular-modules"],function(e,t){t.directives.directive("sample-directive",function(){})}),define("directives/main"
,["./sample-directive"],function(){}),define("directives",["directives/main"],function(e){return e}),
define("services/sample-service",["angular","angular-modules"],function(e,t){t.services.filter("sample-service"
,function(){return"hello"})}),define("services/main",["./sample-service"],function(){}),define("services"
,["services/main"],function(e){return e}),define("app",["angular","angular-route","angular-resource","angular-animate"
,"controllers","filters","directives","services"],function(e){var t=e.module("myApp",["ngRoute","ngAnimate"
,"ngResource","controllers","directives","services","filters"]);return t.config(["$routeProvider","$locationProvider"
,"$httpProvider",function(e,t,n){t.html5Mode(!1),e.when("/myApp/main",{templateUrl:"../views/main.html"
,controller:"mainCtrl"}).when("/myApp/sub",{templateUrl:"../views/sub.html",controller:"subCtrl"}).otherwise
({redirectTo:"/myApp/main"})}]),t}),requirejs.config({baseUrl:"./scripts",packages:["controllers","services"
,"directives","filters"],paths:{app:"app","angular-modules":"angular-modules",angular:"../node_modules/angular/angular"
,"angular-animate":"../node_modules/angular-animate/angular-animate","angular-resource":"../node_modules/angular-resource/angular-resource"
,"angular-route":"../node_modules/angular-route/angular-route","angular-ui-router":"../node_modules/angular-ui-router/angular-ui-router"
},shim:{angular:{exports:"angular"},"angular-animate":{deps:["angular"],exports:"angular-animate"},"angular-resource"
:{deps:["angular"],exports:"angular-resource"},"angular-route":{deps:["angular"],exports:"angular-route"
},"angular-ui-route":{deps:["angular"],exports:"angular-ui-route"},bootstrap:{deps:["angular-modules"
,"app"]}}}),define("config",function(){}),require(["config"],function(e){require(["angular","app"],function(
e,t){e.bootstrap(document,["myApp"])})}),define("bootstrap",["angular-modules","app"],function(){});