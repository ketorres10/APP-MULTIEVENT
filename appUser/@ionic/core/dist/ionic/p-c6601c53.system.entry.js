var __awaiter=this&&this.__awaiter||function(e,t,o,a){function r(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,i){function n(e){try{d(a.next(e))}catch(t){i(t)}}function s(e){try{d(a["throw"](e))}catch(t){i(t)}}function d(e){e.done?o(e.value):r(e.value).then(n,s)}d((a=a.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var o={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},a,r,i,n;return n={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(n[Symbol.iterator]=function(){return this}),n;function s(e){return function(t){return d([e,t])}}function d(n){if(a)throw new TypeError("Generator is already executing.");while(o)try{if(a=1,r&&(i=n[0]&2?r["return"]:n[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,n[1])).done)return i;if(r=0,i)n=[n[0]&2,i.value];switch(n[0]){case 0:case 1:i=n;break;case 4:o.label++;return{value:n[1],done:false};case 5:o.label++;r=n[1];n=[0];continue;case 7:n=o.ops.pop();o.trys.pop();continue;default:if(!(i=o.trys,i=i.length>0&&i[i.length-1])&&(n[0]===6||n[0]===2)){o=0;continue}if(n[0]===3&&(!i||n[1]>i[0]&&n[1]<i[3])){o.label=n[1];break}if(n[0]===6&&o.label<i[1]){o.label=i[1];i=n;break}if(i&&o.label<i[2]){o.label=i[2];o.ops.push(n);break}if(i[2])o.ops.pop();o.trys.pop();continue}n=t.call(e,o)}catch(s){n=[6,s];r=0}finally{a=i=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:true}}};System.register(["./p-8b1a777b.system.js","./p-e4b6dc64.system.js","./p-90f9da43.system.js","./p-868c98e1.system.js","./p-a00e3dab.system.js","./p-9b5507eb.system.js","./p-919cbd63.system.js","./p-b6779b96.system.js","./p-b946d1fe.system.js","./p-f709d13b.system.js","./p-a04342e3.system.js"],(function(e){"use strict";var t,o,a,r,i,n,s,d,l,c,m,p,f,h,u,b,v,y,w,x,g,k;return{setters:[function(e){t=e.r;o=e.d;a=e.w;r=e.h;i=e.H;n=e.e},function(e){s=e.b;d=e.c},function(e){l=e.c},function(e){c=e.c},function(e){m=e.e},function(e){p=e.g},function(e){f=e.createGesture},function(){},function(e){h=e.B;u=e.d;b=e.e;v=e.h;y=e.f;w=e.g},function(e){x=e.g},function(e){g=e.a;k=e.d}],execute:function(){var E={MIN_PRESENTING_SCALE:.93};var S=function(e,t,o){var a=e.offsetHeight;var r=false;var i=function(e){var t=e.event.target;if(t===null||!t.closest){return true}var o=t.closest("ion-content");if(o===null){return true}return false};var n=function(){t.progressStart(true,r?1:0)};var s=function(e){var o=e.deltaY/a;if(o<0){return}t.progressStep(o)};var d=function(e){var i=e.velocityY;var n=e.deltaY/a;if(n<0){return}var s=(e.deltaY+i*1e3)/a;var d=s>=.5;var c=d?-.001:.001;if(!d){t.easing("cubic-bezier(1, 0, 0.68, 0.28)");c+=p([0,0],[1,0],[.68,.28],[1,1],n)[0]}else{t.easing("cubic-bezier(0.32, 0.72, 0, 1)");c+=p([0,0],[.32,.72],[0,1],[1,1],n)[0]}var m=d?D(n*a,i):D((1-n)*a,i);r=d;l.enable(false);t.onFinish((function(){if(!d){l.enable(true)}})).progressEnd(d?1:0,c,m);if(d){o()}};var l=f({el:e,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:i,onStart:n,onMove:s,onEnd:d});return l};var D=function(e,t){return l(400,e/Math.abs(t*1.1),500)};var _=function(e,t){var o=c().addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);var a=c().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)");var r=c().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(a);if(t){var i=window.innerWidth<768;var n=t.tagName==="ION-MODAL"&&t.presentingElement!==undefined;var s=c().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"});var d=document.body;if(i){var l=!CSS.supports("width","max(0px, 1px)")?"30px":"max(30px, var(--ion-safe-area-top))";var m=n?"-10px":l;var p=E.MIN_PRESENTING_SCALE;var f="translateY("+m+") scale("+p+")";s.afterStyles({transform:f}).beforeAddWrite((function(){return d.style.setProperty("background-color","black")})).addElement(t).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:f,borderRadius:"10px 10px 0 0"}]);r.addAnimation(s)}else{r.addAnimation(o);if(!n){a.fromTo("opacity","0","1")}else{var p=n?E.MIN_PRESENTING_SCALE:1;var f="translateY(-10px) scale("+p+")";s.afterStyles({transform:f}).addElement(t.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:f}]);var h=c().afterStyles({transform:f}).addElement(t.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:f}]);r.addAnimation([s,h])}}}else{r.addAnimation(o)}return r};var A=function(e,t,o){if(o===void 0){o=500}var a=c().addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);var r=c().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)");var i=c().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(o).addAnimation(r);if(t){var n=window.innerWidth<768;var s=t.tagName==="ION-MODAL"&&t.presentingElement!==undefined;var d=c().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((function(e){if(e!==1){return}t.style.setProperty("overflow","");var o=Array.from(l.querySelectorAll("ion-modal")).filter((function(e){return e.presentingElement!==undefined})).length;if(o<=1){l.style.setProperty("background-color","")}}));var l=document.body;if(n){var m=!CSS.supports("width","max(0px, 1px)")?"30px":"max(30px, var(--ion-safe-area-top))";var p=s?"-10px":m;var f=E.MIN_PRESENTING_SCALE;var h="translateY("+p+") scale("+f+")";d.addElement(t).keyframes([{offset:0,filter:"contrast(0.85)",transform:h,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]);i.addAnimation(d)}else{i.addAnimation(a);if(!s){r.fromTo("opacity","1","0")}else{var f=s?E.MIN_PRESENTING_SCALE:1;var h="translateY(-10px) scale("+f+")";d.addElement(t.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:h},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);var u=c().addElement(t.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:h},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);i.addAnimation([d,u])}}}else{i.addAnimation(a)}return i};var T=function(e){var t=c();var o=c();var a=c();o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);a.addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]);return t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([o,a])};var C=function(e){var t=c();var o=c();var a=c();var r=e.querySelector(".modal-wrapper");o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);a.addElement(r).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]);return t.addElement(e).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([o,a])};var Y=".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios,.modal-shadow.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-ios{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{height:calc(100% - 40px)}}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}[dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{display:none}.modal-card.sc-ion-modal-ios-h ion-backdrop.sc-ion-modal-ios{pointer-events:none}}@media screen and (min-width: 768px){.modal-card.sc-ion-modal-ios-h{--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}.modal-card.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:0.18}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{-webkit-box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1)}}";var M=".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md,.modal-shadow.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-md{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--border-radius:2px}.sc-ion-modal-md-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}";var P=e("ion_modal",function(){function e(e){var a=this;t(this,e);this.gestureAnimationDismissing=false;this.presented=false;this.keyboardClose=true;this.backdropDismiss=true;this.showBackdrop=true;this.animated=true;this.swipeToClose=false;this.onBackdropTap=function(){a.dismiss(undefined,h)};this.onDismiss=function(e){e.stopPropagation();e.preventDefault();a.dismiss()};this.onLifecycle=function(e){var t=a.usersElement;var o=I[e.type];if(t&&o){var r=new CustomEvent(o,{bubbles:false,cancelable:false,detail:e.detail});t.dispatchEvent(r)}};u(this.el);this.didPresent=o(this,"ionModalDidPresent",7);this.willPresent=o(this,"ionModalWillPresent",7);this.willDismiss=o(this,"ionModalWillDismiss",7);this.didDismiss=o(this,"ionModalDidDismiss",7)}e.prototype.swipeToCloseChanged=function(e){if(this.gesture){this.gesture.enable(e)}else if(e){this.initSwipeToClose()}};e.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,o;var r=this;return __generator(this,(function(i){switch(i.label){case 0:if(this.presented){return[2]}e=this.el.querySelector(".modal-wrapper");if(!e){throw new Error("container is undefined")}t=Object.assign(Object.assign({},this.componentProps),{modal:this.el});o=this;return[4,g(this.delegate,e,this.component,["ion-page"],t)];case 1:o.usersElement=i.sent();return[4,m(this.usersElement)];case 2:i.sent();a((function(){return r.el.classList.add("show-modal")}));return[4,b(this,"modalEnter",_,T,this.presentingElement)];case 3:i.sent();if(this.swipeToClose){this.initSwipeToClose()}return[2]}}))}))};e.prototype.initSwipeToClose=function(){var e=this;if(s(this)!=="ios"){return}var t=this.leaveAnimation||d.get("modalLeave",A);var o=this.animation=t(this.el,this.presentingElement);this.gesture=S(this.el,o,(function(){e.gestureAnimationDismissing=true;e.animation.onFinish((function(){return __awaiter(e,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return[4,this.dismiss(undefined,"gesture")];case 1:e.sent();this.gestureAnimationDismissing=false;return[2]}}))}))}))}));this.gesture.enable(true)};e.prototype.dismiss=function(e,t){return __awaiter(this,void 0,void 0,(function(){var o,a;return __generator(this,(function(r){switch(r.label){case 0:if(this.gestureAnimationDismissing&&t!=="gesture"){return[2,false]}o=v.get(this)||[];return[4,y(this,e,t,"modalLeave",A,C,this.presentingElement)];case 1:a=r.sent();if(!a)return[3,3];return[4,k(this.delegate,this.usersElement)];case 2:r.sent();if(this.animation){this.animation.destroy()}o.forEach((function(e){return e.destroy()}));r.label=3;case 3:this.animation=undefined;return[2,a]}}))}))};e.prototype.onDidDismiss=function(){return w(this.el,"ionModalDidDismiss")};e.prototype.onWillDismiss=function(){return w(this.el,"ionModalWillDismiss")};e.prototype.render=function(){var e;var t=s(this);return r(i,{"no-router":true,"aria-modal":"true",tabindex:"-1",class:Object.assign((e={},e[t]=true,e["modal-card"]=this.presentingElement!==undefined&&t==="ios",e),x(this.cssClass)),style:{zIndex:""+(2e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},r("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),t==="ios"&&r("div",{class:"modal-shadow"}),r("div",{role:"dialog",class:"modal-wrapper"}))};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{swipeToClose:["swipeToCloseChanged"]}},enumerable:true,configurable:true});return e}());var I={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};P.style={md:M}}}}));