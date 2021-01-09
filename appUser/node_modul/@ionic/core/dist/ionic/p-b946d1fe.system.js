var __awaiter=this&&this.__awaiter||function(e,n,t,r){function i(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,o){function a(e){try{s(r.next(e))}catch(n){o(n)}}function u(e){try{s(r["throw"](e))}catch(n){o(n)}}function s(e){e.done?t(e.value):i(e.value).then(a,u)}s((r=r.apply(e,n||[])).next())}))};var __generator=this&&this.__generator||function(e,n){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(e){return function(n){return s([e,n])}}function s(a){if(r)throw new TypeError("Generator is already executing.");while(t)try{if(r=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:t.label++;return{value:a[1],done:false};case 5:t.label++;i=a[1];a=[0];continue;case 7:a=t.ops.pop();t.trys.pop();continue;default:if(!(o=t.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){t=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){t.label=a[1];break}if(a[0]===6&&t.label<o[1]){t.label=o[1];o=a;break}if(o&&t.label<o[2]){t.label=o[2];t.ops.push(a);break}if(o[2])t.ops.pop();t.trys.pop();continue}a=n.call(e,t)}catch(u){a=[6,u];i=0}finally{r=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;for(var r=Array(e),i=0,n=0;n<t;n++)for(var o=arguments[n],a=0,u=o.length;a<u;a++,i++)r[i]=o[a];return r};System.register(["./p-e4b6dc64.system.js","./p-b6779b96.system.js"],(function(e){"use strict";var n,t,r;return{setters:[function(e){n=e.b;t=e.c},function(e){r=e.OVERLAY_BACK_BUTTON_PRIORITY}],execute:function(){var i=this;var o=0;var a=e("h",new WeakMap);var u=function(e){return{create:function(n){return m(e,n)},dismiss:function(n,t,r){return b(document,n,t,e,r)},getTop:function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(n){return[2,w(document,e)]}))}))}}};var s=e("a",u("ion-alert"));var c=e("b",u("ion-action-sheet"));var f=e("l",u("ion-loading"));var l=e("m",u("ion-modal"));var d=e("p",u("ion-picker"));var v=e("c",u("ion-popover"));var p=e("t",u("ion-toast"));var h=e("d",(function(e){var n=document;y(n);var t=o++;e.overlayIndex=t;if(!e.hasAttribute("id")){e.id="ion-overlay-"+t}}));var m=function(e,n){return customElements.whenDefined(e).then((function(){var t=document;var r=t.createElement(e);r.classList.add("overlay-hidden");Object.assign(r,n);A(t).appendChild(r);return r.componentOnReady()}))};var y=function(e){if(o===0){o=1;e.addEventListener("focusin",(function(n){var t=w(e);if(t&&t.backdropDismiss&&!P(t,n.target)){var r=t.querySelector("input,button");if(r){r.focus()}}}));e.addEventListener("ionBackButton",(function(n){var t=w(e);if(t&&t.backdropDismiss){n.detail.register(r,(function(){return t.dismiss(undefined,O)}))}}));e.addEventListener("keyup",(function(n){if(n.key==="Escape"){var t=w(e);if(t&&t.backdropDismiss){t.dismiss(undefined,O)}}}))}};var b=function(e,n,t,r,i){var o=w(e,r,i);if(!o){return Promise.reject("overlay does not exist")}return o.dismiss(n,t)};var _=function(e,n){if(n===undefined){n="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"}return Array.from(e.querySelectorAll(n)).filter((function(e){return e.overlayIndex>0}))};var w=function(e,n,t){var r=_(e,n);return t===undefined?r[r.length-1]:r.find((function(e){return e.id===t}))};var g=e("e",(function(e,r,o,a,u){return __awaiter(i,void 0,void 0,(function(){var i,s,c;return __generator(this,(function(f){switch(f.label){case 0:if(e.presented){return[2]}e.presented=true;e.willPresent.emit();i=n(e);s=e.enterAnimation?e.enterAnimation:t.get(r,i==="ios"?o:a);return[4,E(e,s,e.el,u)];case 1:c=f.sent();if(c){e.didPresent.emit()}if(e.keyboardClose){e.el.focus()}return[2]}}))}))}));var k=e("f",(function(e,r,o,u,s,c,f){return __awaiter(i,void 0,void 0,(function(){var i,l,d;return __generator(this,(function(v){switch(v.label){case 0:if(!e.presented){return[2,false]}e.presented=false;v.label=1;case 1:v.trys.push([1,4,,5]);e.el.style.setProperty("pointer-events","none");e.willDismiss.emit({data:r,role:o});i=n(e);l=e.leaveAnimation?e.leaveAnimation:t.get(u,i==="ios"?s:c);if(!(o!=="gesture"))return[3,3];return[4,E(e,l,e.el,f)];case 2:v.sent();v.label=3;case 3:e.didDismiss.emit({data:r,role:o});a.delete(e);return[3,5];case 4:d=v.sent();console.error(d);return[3,5];case 5:e.el.remove();return[2,true]}}))}))}));var A=function(e){return e.querySelector("ion-app")||e.body};var E=function(e,n,r,o){return __awaiter(i,void 0,void 0,(function(){var i,u,s;return __generator(this,(function(c){switch(c.label){case 0:r.classList.remove("overlay-hidden");i=r.shadowRoot||e.el;u=n(i,o);if(!e.animated||!t.getBoolean("animated",true)){u.duration(0)}if(e.keyboardClose){u.beforeAddWrite((function(){var e=r.ownerDocument.activeElement;if(e&&e.matches("input, ion-input, ion-textarea")){e.blur()}}))}s=a.get(e)||[];a.set(e,__spreadArrays(s,[u]));return[4,u.play()];case 1:c.sent();return[2,true]}}))}))};var x=e("g",(function(e,n){var t;var r=new Promise((function(e){return t=e}));L(e,n,(function(e){t(e.detail)}));return r}));var L=function(e,n,t){var r=function(i){e.removeEventListener(n,r);t(i)};e.addEventListener(n,r)};var D=e("i",(function(e){return e==="cancel"||e===O}));var P=function(e,n){while(n){if(n===e){return true}n=n.parentElement}return false};var B=function(e){return e()};var S=e("s",(function(e,n){if(typeof e==="function"){var r=t.get("_zoneGate",B);return r((function(){try{return e(n)}catch(t){console.error(t)}}))}return undefined}));var O=e("B","backdrop")}}}));