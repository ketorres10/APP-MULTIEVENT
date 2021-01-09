var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,i=0,t=arguments.length;i<t;i++)e+=arguments[i].length;for(var r=Array(e),o=0,i=0;i<t;i++)for(var n=arguments[i],s=0,a=n.length;s<a;s++,o++)r[o]=n[s];return r};System.register(["./p-6993f487.system.js"],(function(e){"use strict";var i,t,r,o;return{setters:[function(e){i=e.r;t=e.h;r=e.H;o=e.c}],execute:function(){var n="ios";var s="android";var a="windows";var l=[n,s,a];function c(e){if(e==="ios"){return"iOS"}else if(e==="android"){return"Android"}else if(e==="windows"){return"Windows"}return"Unknown"}function u(e){var i=e;if(e==="ios"){i="apple"}return"ion-social-"+i}function d(e){if(e==="android"){return"md"}return e}var f=e("ionlab_app",function(){function e(e){i(this,e);this.sidebarVisible=true;this.activeDevices=[n,s];this.details={}}e.prototype.componentWillLoad=function(){this.loadAppDetails();this.loadLocalStorageState()};e.prototype.componentWillUpdate=function(){this.saveLocalStorageState()};e.prototype.loadAppDetails=function(){var e=this;var i=new XMLHttpRequest;i.addEventListener("load",(function(){try{e.details=JSON.parse(this.responseText)}catch(i){console.error("Error loading app details from Ionic Lab API!");console.error("Response was:",this.responseText)}}));i.addEventListener("error",(function(e){console.error("Error loading app details from Ionic Lab API!");console.error("Error was:",e)}));i.open("GET","/api/app");i.send()};e.prototype.loadLocalStorageState=function(){var e=localStorage.getItem("ionic-lab-platforms");if(e){this.activeDevices=JSON.parse(e)}var i=localStorage.getItem("ionic-lab-sidebar-open");if(i){this.sidebarVisible=JSON.parse(i)}};e.prototype.saveLocalStorageState=function(){localStorage.setItem("ionic-lab-platforms",JSON.stringify(this.activeDevices));localStorage.setItem("ionic-lab-sidebar-open",JSON.stringify(this.sidebarVisible))};e.prototype.sidebarCloseClickedHander=function(e){this.sidebarVisible=false};e.prototype.ionlabPlatformToggledHandler=function(e){this.togglePlatform(e.detail)};e.prototype.togglePlatform=function(e){var i=this.activeDevices.indexOf(e);var t=__spreadArrays(this.activeDevices);if(i>=0){t.splice(i,1)}else{t.push(e)}this.activeDevices=t};e.prototype.render=function(){var e=this;return[t("header",null,t("div",{id:"header-left"},t("i",{class:"menu-icon icon ion-navicon-round",onClick:function(){return e.sidebarVisible=!e.sidebarVisible}}),t("div",{id:"logo"})),t("div",{id:"header-right"},t("a",{href:this.details.url},t("button",{type:"button"},"Open fullscreen",t("i",{class:"fullscreen-icon icon ion-share"}))),t("ionlab-platform-dropdown",{activePlatforms:this.activeDevices}))),t("main",null,t("ionlab-sidebar",{visible:this.sidebarVisible}),t("ionlab-preview",{projectType:this.details.projectType,url:this.details.url,activeDevices:this.activeDevices})),t("footer",null,t("div",{id:"footer-left"},t("div",{id:"app-info"},[this.details.name,this.details.version].filter((function(e){return e})).join(" - "))),t("div",{id:"footer-right"},t("a",{href:"https://twitter.com/ionicframework"},"Twitter"),t("a",{href:"https://ionicframework.com/docs"},"Documentation"),t("a",{href:"https://forum.ionicframework.com/"},"Forum"),t("a",{href:"https://github.com/ionic-team/ionic"},"GitHub")))]};return e}());var p=e("ionlab_device_frame",function(){function e(e){i(this,e);this.error=false;this.loaded=false}e.prototype.componentDidLoad=function(){var e=this;this.interval=window.setInterval((function(){e.error=e.url?false:true}),2e4)};e.prototype.loadedHandler=function(e){this.loaded=true;this.error=false;window.clearInterval(this.interval)};e.prototype.hostData=function(){return{id:"device-"+this.platform}};e.prototype.__stencil_render=function(){var e=this;return[t("h2",null,t("i",{class:["icon",this.icon].join(" ")}),this.platformName),t("div",{class:"frame-container"},t("div",{class:"statusbar"}),!this.loaded&&!this.error?t("sk-fading-circle",null):null,this.error?t("div",{class:"load-error"},t("h3",null,"Load Timeout"),t("p",null,"Still trying...")):null,t("iframe",{src:this.url,onLoad:function(i){return e.loadedHandler(i)},allow:"geolocation; microphone; camera; midi; encrypted-media"}))]};e.prototype.render=function(){return t(r,this.hostData(),this.__stencil_render())};Object.defineProperty(e,"style",{get:function(){return"ionlab-device-frame{display:block;margin:0 20px;vertical-align:middle}ionlab-device-frame h2{font-size:var(--font-size-base);margin:1em 0;vertical-align:middle;text-align:left;font-weight:var(--font-weight-bold);vertical-align:top;color:#727a87}ionlab-device-frame h2 .icon{display:inline-block;margin-right:7px;font-size:var(--font-size-lg)}ionlab-device-frame .frame-container{position:relative;width:var(--frame-width);height:var(--frame-height);border-radius:3px;-webkit-box-shadow:0 8px 24px rgba(0,0,0,.08),0 0 6px rgba(0,0,0,.1);box-shadow:0 8px 24px rgba(0,0,0,.08),0 0 6px rgba(0,0,0,.1);overflow:hidden}ionlab-device-frame .frame-container .statusbar{position:absolute;top:0;width:var(--frame-width);height:20px;background-size:100%;background-repeat:no-repeat;background-position:50%;border-radius:3px 3px 0 0}ionlab-device-frame .frame-container .load-error,ionlab-device-frame .frame-container sk-fading-circle{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}ionlab-device-frame .frame-container .load-error{background:var(--section-bg);padding:10px 20px}ionlab-device-frame .frame-container .load-error p{margin:0}ionlab-device-frame .frame-container iframe{background:#000;border:none;width:100%;height:100%}#device-ios .frame-container .statusbar{background-image:url(/assets/ios-statusbar.png)}#device-android .frame-container .statusbar{background-image:url(/assets/android-statusbar.png)}#device-windows .frame-container .statusbar{background-image:url(/assets/wp-statusbar.png);background-color:#fff}\@media only screen and (max-height:850px){ionlab-device-frame h2{display:none}}"},enumerable:true,configurable:true});return e}());var h=e("ionlab_platform_dropdown",function(){function e(e){i(this,e);this.visible=false;this.ionlabPlatformToggled=o(this,"ionlabPlatformToggled",7)}e.prototype.platformActive=function(e){return this.activePlatforms.indexOf(e)>=0};e.prototype.renderPlatformCheckbox=function(e){var i=this;return t("li",{onClick:function(){return i.ionlabPlatformToggled.emit(e)}},t("input",{type:"checkbox",name:e,checked:this.platformActive(e)}),t("label",null,c(e)))};e.prototype.render=function(){var e=this;var i=["dropdown-menu"];if(!this.visible){i.push("hidden")}return t("div",{class:"dropdown",onMouseOver:function(){return e.visible=true},onMouseOut:function(){return e.visible=false}},t("button",{class:"dropdown-toggle",type:"button"},"Platforms",t("span",{class:"dropdown-caret"})),t("ul",{class:i.join(" ")},l.map((function(i){return e.renderPlatformCheckbox(i)}))))};Object.defineProperty(e,"style",{get:function(){return"#header-right .dropdown{position:relative;height:100%;display:inline-block;margin-right:10px}#header-right .dropdown-caret{display:inline-block;width:0;height:0;border-top:5px solid var(--icon-color);border-left:5px solid transparent;border-right:5px solid transparent}#header-right .dropdown-menu{display:block;position:absolute;z-index:999;width:150px;right:-10px;background-color:#fff;-webkit-box-shadow:0 6px 10px rgba(0,0,0,.08),0 0 6px rgba(0,0,0,.05);box-shadow:0 6px 10px rgba(0,0,0,.08),0 0 6px rgba(0,0,0,.05);line-height:1em;font-weight:400;margin:0;padding:5px 0}#header-right .dropdown-menu.hidden{display:none}#header-right li{cursor:pointer;list-style:none;padding:6px 5px}#header-right input,#header-right label{cursor:pointer;margin:0 5px}#header-right .dropdown-caret{margin-left:5px}"},enumerable:true,configurable:true});return e}());var v=e("ionlab_preview",function(){function e(e){i(this,e)}e.prototype.platformUrl=function(e){if(!this.url){return}var i={};if(this.projectType==="angular"){i["ionic:mode"]=d(e);i["ionic:persistConfig"]="true";i["ionic:_forceStatusbarPadding"]="true"}else if(this.projectType==="ionic-angular"){i["ionicplatform"]=e;i["ionicstatusbarpadding"]="true"}return this.url+"?"+Object.keys(i).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(i[e])})).join("&")};e.prototype.render=function(){var e=this;return t("div",null,this.activeDevices.map((function(i){return t("ionlab-device-frame",{platform:i,platformName:c(i),url:e.platformUrl(i),icon:u(i)})})))};Object.defineProperty(e,"style",{get:function(){return"ionlab-preview{text-align:center;-ms-flex:1;flex:1;overflow:scroll;--frame-width:var(--frame-default-width);--frame-height:var(--frame-default-height)}ionlab-preview>div{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-wrap:wrap;flex-wrap:wrap;vertical-align:middle;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding-bottom:60px;min-height:100%}\@media only screen and (max-height:850px){ionlab-preview{overflow:hidden;--frame-width:300px;--frame-height:calc(var(--frame-width) / var(--frame-ratio))}ionlab-preview>div{padding-bottom:0}}"},enumerable:true,configurable:true});return e}());var m=e("ionlab_sidebar",function(){function e(e){i(this,e);this.ionlabSidebarCloseClicked=o(this,"ionlabSidebarCloseClicked",7)}e.prototype.hostData=function(){var e=[];if(!this.visible){e.push("hidden")}return{class:e.join(" ")}};e.prototype.__stencil_render=function(){var e=this;return[t("h3",null,"Quick reference",t("i",{class:"icon ion-close-circled",onClick:function(){return e.ionlabSidebarCloseClicked.emit()}})),t("ul",{class:"menu"},t("li",null,t("a",{href:"https://ionicframework.com/docs/components"},"Components")),t("li",null,t("a",{href:"https://ionicframework.com/docs/api"},"API Reference")),t("li",null,t("a",{href:"https://ionicframework.com/docs/native"},"Ionic Native")),t("li",null,t("a",{href:"https://ionicframework.com/docs/"},"All Documentation")))]};e.prototype.render=function(){return t(r,this.hostData(),this.__stencil_render())};Object.defineProperty(e,"style",{get:function(){return"ionlab-sidebar{position:relative;z-index:1;background-color:var(--section-bg);height:100%;width:300px;overflow:auto;padding:15px}ionlab-sidebar.hidden{display:none}ionlab-sidebar h3{color:#fff}ionlab-sidebar h3 .icon{float:right;font-size:24px;color:var(--font-color);margin-top:-5px;cursor:pointer}ionlab-sidebar .menu{list-style:none;margin:0;padding:0}ionlab-sidebar .menu li{margin:10px 0}"},enumerable:true,configurable:true});return e}());var b=e("sk_fading_circle",function(){function e(e){i(this,e)}e.prototype.render=function(){return[t("div",{class:"sk-circle1 sk-circle"}),t("div",{class:"sk-circle2 sk-circle"}),t("div",{class:"sk-circle3 sk-circle"}),t("div",{class:"sk-circle4 sk-circle"}),t("div",{class:"sk-circle5 sk-circle"}),t("div",{class:"sk-circle6 sk-circle"}),t("div",{class:"sk-circle7 sk-circle"}),t("div",{class:"sk-circle8 sk-circle"}),t("div",{class:"sk-circle9 sk-circle"}),t("div",{class:"sk-circle10 sk-circle"}),t("div",{class:"sk-circle11 sk-circle"}),t("div",{class:"sk-circle12 sk-circle"})]};Object.defineProperty(e,"style",{get:function(){return"sk-fading-circle{display:block;width:40px;height:40px;position:relative}sk-fading-circle .sk-circle{width:100%;height:100%;position:absolute;left:0;top:0}sk-fading-circle .sk-circle:before{content:\"\";display:block;margin:0 auto;width:15%;height:15%;background-color:#fff;border-radius:100%;-webkit-animation:sk-circleFadeDelay 1.2s ease-in-out infinite both;animation:sk-circleFadeDelay 1.2s ease-in-out infinite both}sk-fading-circle .sk-circle2{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}sk-fading-circle .sk-circle3{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}sk-fading-circle .sk-circle4{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}sk-fading-circle .sk-circle5{-webkit-transform:rotate(120deg);-ms-transform:rotate(120deg);transform:rotate(120deg)}sk-fading-circle .sk-circle6{-webkit-transform:rotate(150deg);-ms-transform:rotate(150deg);transform:rotate(150deg)}sk-fading-circle .sk-circle7{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}sk-fading-circle .sk-circle8{-webkit-transform:rotate(210deg);-ms-transform:rotate(210deg);transform:rotate(210deg)}sk-fading-circle .sk-circle9{-webkit-transform:rotate(240deg);-ms-transform:rotate(240deg);transform:rotate(240deg)}sk-fading-circle .sk-circle10{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}sk-fading-circle .sk-circle11{-webkit-transform:rotate(300deg);-ms-transform:rotate(300deg);transform:rotate(300deg)}sk-fading-circle .sk-circle12{-webkit-transform:rotate(330deg);-ms-transform:rotate(330deg);transform:rotate(330deg)}sk-fading-circle .sk-circle2:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}sk-fading-circle .sk-circle3:before{-webkit-animation-delay:-1s;animation-delay:-1s}sk-fading-circle .sk-circle4:before{-webkit-animation-delay:-.9s;animation-delay:-.9s}sk-fading-circle .sk-circle5:before{-webkit-animation-delay:-.8s;animation-delay:-.8s}sk-fading-circle .sk-circle6:before{-webkit-animation-delay:-.7s;animation-delay:-.7s}sk-fading-circle .sk-circle7:before{-webkit-animation-delay:-.6s;animation-delay:-.6s}sk-fading-circle .sk-circle8:before{-webkit-animation-delay:-.5s;animation-delay:-.5s}sk-fading-circle .sk-circle9:before{-webkit-animation-delay:-.4s;animation-delay:-.4s}sk-fading-circle .sk-circle10:before{-webkit-animation-delay:-.3s;animation-delay:-.3s}sk-fading-circle .sk-circle11:before{-webkit-animation-delay:-.2s;animation-delay:-.2s}sk-fading-circle .sk-circle12:before{-webkit-animation-delay:-.1s;animation-delay:-.1s}\@-webkit-keyframes sk-circleFadeDelay{0%,39%,to{opacity:0}40%{opacity:1}}\@keyframes sk-circleFadeDelay{0%,39%,to{opacity:0}40%{opacity:1}}"},enumerable:true,configurable:true});return e}())}}}));