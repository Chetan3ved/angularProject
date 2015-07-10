requirejs.config({baseUrl:"./scripts",packages:["controllers","services","directives","filters"],paths
:{app:"app","angular-modules":"angular-modules",angular:"../node_modules/angular/angular","angular-animate"
:"../node_modules/angular-animate/angular-animate","angular-resource":"../node_modules/angular-resource/angular-resource"
,"angular-route":"../node_modules/angular-route/angular-route","angular-ui-router":"../node_modules/angular-ui-router/angular-ui-router"
},shim:{angular:{exports:"angular"},"angular-animate":{deps:["angular"],exports:"angular-animate"},"angular-resource"
:{deps:["angular"],exports:"angular-resource"},"angular-route":{deps:["angular"],exports:"angular-route"
},"angular-ui-route":{deps:["angular"],exports:"angular-ui-route"},bootstrap:{deps:["angular-modules"
,"app"]}}});