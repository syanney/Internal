"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var root_routing_module_1 = require("./root-routing.module");
var root_component_1 = require("./root.component");
var home_component_1 = require("./home/home.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var RootModule = /** @class */ (function () {
    function RootModule() {
    }
    RootModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                root_routing_module_1.RootRoutingModule
            ],
            declarations: [
                root_component_1.RootComponent,
                home_component_1.HomeComponent,
                page_not_found_component_1.PageNotFoundComponent
            ],
            bootstrap: [root_component_1.RootComponent]
        })
    ], RootModule);
    return RootModule;
}());
exports.RootModule = RootModule;
