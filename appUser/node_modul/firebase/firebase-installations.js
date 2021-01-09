!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app"],e):e((t=t||self).firebase)}(this,function(It){"use strict";try{(function(){It=It&&Object.prototype.hasOwnProperty.call(It,"default")?It.default:It;var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};var c=function(){return(c=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function h(t,a,s,u){return new(s=s||Promise)(function(n,e){function r(t){try{i(u.next(t))}catch(t){e(t)}}function o(t){try{i(u.throw(t))}catch(t){e(t)}}function i(t){var e;t.done?n(t.value):((e=t.value)instanceof s?e:new s(function(t){t(e)})).then(r,o)}i((u=u.apply(t,a||[])).next())})}function d(n,r){var o,i,a,t,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return t={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,i&&(a=2&e[0]?i.return:e[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,e[1])).done)return a;switch(i=0,a&&(e=[2&e[0],a.value]),e[0]){case 0:case 1:a=e;break;case 4:return s.label++,{value:e[1],done:!1};case 5:s.label++,i=e[1],e=[0];continue;case 7:e=s.ops.pop(),s.trys.pop();continue;default:if(!(a=0<(a=s.trys).length&&a[a.length-1])&&(6===e[0]||2===e[0])){s=0;continue}if(3===e[0]&&(!a||e[1]>a[0]&&e[1]<a[3])){s.label=e[1];break}if(6===e[0]&&s.label<a[1]){s.label=a[1],a=e;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(e);break}a[2]&&s.ops.pop(),s.trys.pop();continue}e=r.call(n,s)}catch(t){e=[6,t],i=0}finally{o=a=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}}function s(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function r(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||0<e--)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}var o,t,e,v=(o=Error,n(t=a,e=o),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i),a);function i(){this.constructor=t}function a(t,e){var n=o.call(this,e)||this;return n.code=t,n.name="FirebaseError",Object.setPrototypeOf(n,a.prototype),Error.captureStackTrace&&Error.captureStackTrace(n,u.prototype.create),n}var u=(f.prototype.create=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];for(var r,o=e[0]||{},i=this.service+"/"+t,a=this.errors[t],s=a?(r=o,a.replace(y,function(t,e){var n=r[e];return null!=n?n.toString():"<"+e+"?>"})):"Error",u=this.serviceName+": "+s+" ("+i+").",c=new v(i,u),f=0,l=Object.keys(o);f<l.length;f++){var p=l[f];"_"!==p.slice(-1)&&(p in c&&console.warn('Overwriting FirebaseError base field "'+p+'" can cause unexpected behavior.'),c[p]=o[p])}return c},f);function f(t,e,n){this.service=t,this.serviceName=e,this.errors=n}var y=/\{\$([^}]+)}/g,l=(p.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},p.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},p.prototype.setServiceProps=function(t){return this.serviceProps=t,this},p);function p(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}function g(n){return new Promise(function(t,e){n.onsuccess=function(){t(n.result)},n.onerror=function(){e(n.error)}})}function b(n,r,o){var i,t=new Promise(function(t,e){g(i=n[r].apply(n,o)).then(t,e)});return t.request=i,t}function w(t,n,e){e.forEach(function(e){Object.defineProperty(t.prototype,e,{get:function(){return this[n][e]},set:function(t){this[n][e]=t}})})}function m(e,n,r,t){t.forEach(function(t){t in r.prototype&&(e.prototype[t]=function(){return b(this[n],t,arguments)})})}function S(e,n,r,t){t.forEach(function(t){t in r.prototype&&(e.prototype[t]=function(){return this[n][t].apply(this[n],arguments)})})}function _(t,r,e,n){n.forEach(function(n){n in e.prototype&&(t.prototype[n]=function(){return t=this[r],(e=b(t,n,arguments)).then(function(t){if(t)return new C(t,e.request)});var t,e})})}function I(t){this._index=t}function C(t,e){this._cursor=t,this._request=e}function j(t){this._store=t}function k(n){this._tx=n,this.complete=new Promise(function(t,e){n.oncomplete=function(){t()},n.onerror=function(){e(n.error)},n.onabort=function(){e(n.error)}})}function x(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new k(n)}function P(t){this._db=t}w(I,"_index",["name","keyPath","multiEntry","unique"]),m(I,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),_(I,"_index",IDBIndex,["openCursor","openKeyCursor"]),w(C,"_cursor",["direction","key","primaryKey","value"]),m(C,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(n){n in IDBCursor.prototype&&(C.prototype[n]=function(){var e=this,t=arguments;return Promise.resolve().then(function(){return e._cursor[n].apply(e._cursor,t),g(e._request).then(function(t){if(t)return new C(t,e._request)})})})}),j.prototype.createIndex=function(){return new I(this._store.createIndex.apply(this._store,arguments))},j.prototype.index=function(){return new I(this._store.index.apply(this._store,arguments))},w(j,"_store",["name","keyPath","indexNames","autoIncrement"]),m(j,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),_(j,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),S(j,"_store",IDBObjectStore,["deleteIndex"]),k.prototype.objectStore=function(){return new j(this._tx.objectStore.apply(this._tx,arguments))},w(k,"_tx",["objectStoreNames","mode"]),S(k,"_tx",IDBTransaction,["abort"]),x.prototype.createObjectStore=function(){return new j(this._db.createObjectStore.apply(this._db,arguments))},w(x,"_db",["name","version","objectStoreNames"]),S(x,"_db",IDBDatabase,["deleteObjectStore","close"]),P.prototype.transaction=function(){return new k(this._db.transaction.apply(this._db,arguments))},w(P,"_db",["name","version","objectStoreNames"]),S(P,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(i){[j,I].forEach(function(t){i in t.prototype&&(t.prototype[i.replace("open","iterate")]=function(){var t,e=(t=arguments,Array.prototype.slice.call(t)),n=e[e.length-1],r=this._store||this._index,o=r[i].apply(r,e.slice(0,-1));o.onsuccess=function(){n(o.result)}})})}),[I,j].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(t,n){var r=this,o=[];return new Promise(function(e){r.iterateCursor(t,function(t){t?(o.push(t.value),void 0===n||o.length!=n?t.continue():e(o)):e(o)})})})});var T,E="0.4.9",q=1e4,O="w:"+E,D="FIS_v2",A="https://firebaseinstallations.googleapis.com/v1",N=36e5,B=((T={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',T["not-registered"]="Firebase Installation is not registered.",T["installation-not-found"]="Firebase Installation not found.",T["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',T["app-offline"]="Could not process request. Application offline.",T["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",T),K=new u("installations","Installations",B);function L(t){return t instanceof v&&t.code.includes("request-failed")}function M(t){var e=t.projectId;return A+"/projects/"+e+"/installations"}function F(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}function V(r,o){return h(this,void 0,void 0,function(){var e,n;return d(this,function(t){switch(t.label){case 0:return[4,o.json()];case 1:return e=t.sent(),n=e.error,[2,K.create("request-failed",{requestName:r,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})]}})})}function $(t){var e=t.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function z(t,e){var n=e.refreshToken,r=$(t);return r.append("Authorization",D+" "+n),r}function G(n){return h(this,void 0,void 0,function(){var e;return d(this,function(t){switch(t.label){case 0:return[4,n()];case 1:return 500<=(e=t.sent()).status&&e.status<600?[2,n()]:[2,e]}})})}function J(e){return new Promise(function(t){setTimeout(t,e)})}function R(t){return btoa(String.fromCharCode.apply(String,function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(r(arguments[e]));return t}(t))).replace(/\+/g,"-").replace(/\//g,"_")}var U=/^[cdef][\w-]{21}$/,H="";function Y(){try{var t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;var e=R(t).substr(0,22);return U.test(e)?e:H}catch(t){return H}}function Z(t){return t.appName+"!"+t.appId}var Q=new Map;function W(t,e){var n=Z(t);X(n,e),function(t,e){var n=et();n&&n.postMessage({key:t,fid:e});nt()}(n,e)}function X(t,e){var n,r,o=Q.get(t);if(o)try{for(var i=s(o),a=i.next();!a.done;a=i.next()){(0,a.value)(e)}}catch(t){n={error:t}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}var tt=null;function et(){return!tt&&"BroadcastChannel"in self&&((tt=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(t){X(t.data.key,t.data.fid)}),tt}function nt(){0===Q.size&&tt&&(tt.close(),tt=null)}var rt,ot="firebase-installations-database",it=1,at="firebase-installations-store",st=null;function ut(){var e,t,n;return st||(e=function(t){switch(t.oldVersion){case 0:t.createObjectStore(at)}},t=b(indexedDB,"open",[ot,it]),(n=t.request)&&(n.onupgradeneeded=function(t){e&&e(new x(n.result,t.oldVersion,n.transaction))}),st=t.then(function(t){return new P(t)})),st}function ct(a,s){return h(this,void 0,void 0,function(){var e,n,r,o,i;return d(this,function(t){switch(t.label){case 0:return e=Z(a),[4,ut()];case 1:return n=t.sent(),r=n.transaction(at,"readwrite"),[4,(o=r.objectStore(at)).get(e)];case 2:return i=t.sent(),[4,o.put(s,e)];case 3:return t.sent(),[4,r.complete];case 4:return t.sent(),i&&i.fid===s.fid||W(a,s.fid),[2,s]}})})}function ft(o){return h(this,void 0,void 0,function(){var e,n,r;return d(this,function(t){switch(t.label){case 0:return e=Z(o),[4,ut()];case 1:return n=t.sent(),[4,(r=n.transaction(at,"readwrite")).objectStore(at).delete(e)];case 2:return t.sent(),[4,r.complete];case 3:return t.sent(),[2]}})})}function lt(s,u){return h(this,void 0,void 0,function(){var e,n,r,o,i,a;return d(this,function(t){switch(t.label){case 0:return e=Z(s),[4,ut()];case 1:return n=t.sent(),r=n.transaction(at,"readwrite"),[4,(o=r.objectStore(at)).get(e)];case 2:return i=t.sent(),void 0!==(a=u(i))?[3,4]:[4,o.delete(e)];case 3:return t.sent(),[3,6];case 4:return[4,o.put(a,e)];case 5:t.sent(),t.label=6;case 6:return[4,r.complete];case 7:return t.sent(),!a||i&&i.fid===a.fid||W(s,a.fid),[2,a]}})})}function pt(o){return h(this,void 0,void 0,function(){var r,e,n;return d(this,function(t){switch(t.label){case 0:return[4,lt(o,function(t){var e=dt(t||{fid:Y(),registrationStatus:0}),n=function(t,e){{if(0!==e.registrationStatus)return 1===e.registrationStatus?{installationEntry:e,registrationPromise:function(i){return h(this,void 0,void 0,function(){var e,n,r,o;return d(this,function(t){switch(t.label){case 0:return[4,ht(i)];case 1:e=t.sent(),t.label=2;case 2:return 1!==e.registrationStatus?[3,5]:[4,J(100)];case 3:return t.sent(),[4,ht(i)];case 4:return e=t.sent(),[3,2];case 5:return 0!==e.registrationStatus?[3,7]:[4,pt(i)];case 6:return n=t.sent(),r=n.installationEntry,(o=n.registrationPromise)?[2,o]:[2,r];case 7:return[2,e]}})})}(t)}:{installationEntry:e};if(!navigator.onLine){var n=Promise.reject(K.create("app-offline"));return{installationEntry:e,registrationPromise:n}}var r={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},o=function(r,o){return h(this,void 0,void 0,function(){var e,n;return d(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,7]),[4,function(s,t){var u=t.fid;return h(this,void 0,void 0,function(){var e,n,r,o,i,a;return d(this,function(t){switch(t.label){case 0:return e=M(s),n=$(s),r={fid:u,authVersion:D,appId:s.appId,sdkVersion:O},o={method:"POST",headers:n,body:JSON.stringify(r)},[4,G(function(){return fetch(e,o)})];case 1:return(i=t.sent()).ok?[4,i.json()]:[3,3];case 2:return a=t.sent(),[2,{fid:a.fid||u,registrationStatus:2,refreshToken:a.refreshToken,authToken:F(a.authToken)}];case 3:return[4,V("Create Installation",i)];case 4:throw t.sent()}})})}(r,o)];case 1:return e=t.sent(),[2,ct(r,e)];case 2:return L(n=t.sent())&&409===n.serverCode?[4,ft(r)]:[3,4];case 3:return t.sent(),[3,6];case 4:return[4,ct(r,{fid:o.fid,registrationStatus:0})];case 5:t.sent(),t.label=6;case 6:throw n;case 7:return[2]}})})}(t,r);return{installationEntry:r,registrationPromise:o}}}(o,e);return r=n.registrationPromise,n.installationEntry})];case 1:return(e=t.sent()).fid!==H?[3,3]:(n={},[4,r]);case 2:return[2,(n.installationEntry=t.sent(),n)];case 3:return[2,{installationEntry:e,registrationPromise:r}]}})})}function ht(t){return lt(t,function(t){if(!t)throw K.create("installation-not-found");return dt(t)})}function dt(t){return 1===(e=t).registrationStatus&&e.registrationTime+q<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e}function vt(t,f){var l=t.appConfig,p=t.platformLoggerProvider;return h(this,void 0,void 0,function(){var r,o,i,a,s,u,c;return d(this,function(t){switch(t.label){case 0:return e=l,n=f.fid,r=M(e)+"/"+n+"/authTokens:generate",o=z(l,f),(i=p.getImmediate({optional:!0}))&&o.append("x-firebase-client",i.getPlatformInfoString()),a={installation:{sdkVersion:O}},s={method:"POST",headers:o,body:JSON.stringify(a)},[4,G(function(){return fetch(r,s)})];case 1:return(u=t.sent()).ok?[4,u.json()]:[3,3];case 2:return c=t.sent(),[2,F(c)];case 3:return[4,V("Generate Auth Token",u)];case 4:throw t.sent()}var e,n})})}function yt(s,u){return void 0===u&&(u=!1),h(this,void 0,void 0,function(){var a,e,n;return d(this,function(t){switch(t.label){case 0:return[4,lt(s.appConfig,function(t){if(!bt(t))throw K.create("not-registered");var e,n,r,o=t.authToken;if(u||2!==(r=o).requestStatus||function(t){var e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+N}(r)){if(1===o.requestStatus)return a=function(r,o){return h(this,void 0,void 0,function(){var e,n;return d(this,function(t){switch(t.label){case 0:return[4,gt(r.appConfig)];case 1:e=t.sent(),t.label=2;case 2:return 1!==e.authToken.requestStatus?[3,5]:[4,J(100)];case 3:return t.sent(),[4,gt(r.appConfig)];case 4:return e=t.sent(),[3,2];case 5:return 0===(n=e.authToken).requestStatus?[2,yt(r,o)]:[2,n]}})})}(s,u),t;if(!navigator.onLine)throw K.create("app-offline");var i=(e=t,n={requestStatus:1,requestTime:Date.now()},c(c({},e),{authToken:n}));return a=function(o,i){return h(this,void 0,void 0,function(){var e,n,r;return d(this,function(t){switch(t.label){case 0:return t.trys.push([0,3,,8]),[4,vt(o,i)];case 1:return e=t.sent(),r=c(c({},i),{authToken:e}),[4,ct(o.appConfig,r)];case 2:return t.sent(),[2,e];case 3:return!L(n=t.sent())||401!==n.serverCode&&404!==n.serverCode?[3,5]:[4,ft(o.appConfig)];case 4:return t.sent(),[3,7];case 5:return r=c(c({},i),{authToken:{requestStatus:0}}),[4,ct(o.appConfig,r)];case 6:t.sent(),t.label=7;case 7:throw n;case 8:return[2]}})})}(s,i),i}return t})];case 1:return e=t.sent(),a?[4,a]:[3,3];case 2:return n=t.sent(),[3,4];case 3:n=e.authToken,t.label=4;case 4:return[2,n]}})})}function gt(t){return lt(t,function(t){if(!bt(t))throw K.create("not-registered");var e,n=t.authToken;return 1===(e=n).requestStatus&&e.requestTime+q<Date.now()?c(c({},t),{authToken:{requestStatus:0}}):t})}function bt(t){return void 0!==t&&2===t.registrationStatus}function wt(e,n){return void 0===n&&(n=!1),h(this,void 0,void 0,function(){return d(this,function(t){switch(t.label){case 0:return[4,function(n){return h(this,void 0,void 0,function(){var e;return d(this,function(t){switch(t.label){case 0:return[4,pt(n)];case 1:return(e=t.sent().registrationPromise)?[4,e]:[3,3];case 2:t.sent(),t.label=3;case 3:return[2]}})})}(e.appConfig)];case 1:return t.sent(),[4,yt(e,n)];case 2:return[2,t.sent().token]}})})}function mt(s,u){return h(this,void 0,void 0,function(){var r,o,i,a;return d(this,function(t){switch(t.label){case 0:return e=s,n=u.fid,r=M(e)+"/"+n,o=z(s,u),i={method:"DELETE",headers:o},[4,G(function(){return fetch(r,i)})];case 1:return(a=t.sent()).ok?[3,3]:[4,V("Delete Installation",a)];case 2:throw t.sent();case 3:return[2]}var e,n})})}function St(t,r){var o=t.appConfig;return function(t,e){et();var n=Z(t),r=Q.get(n);r||(r=new Set,Q.set(n,r)),r.add(e)}(o,r),function(){var t,e,n;t=r,e=Z(o),(n=Q.get(e))&&(n.delete(t),0===n.size&&Q.delete(e),nt())}}function _t(t){return K.create("missing-app-config-values",{valueName:t})}(rt=It).INTERNAL.registerComponent(new l("installations",function(t){var e=t.getProvider("app").getImmediate(),n={appConfig:function(t){var e,n;if(!t||!t.options)throw _t("App Configuration");if(!t.name)throw _t("App Name");try{for(var r=s(["projectId","apiKey","appId"]),o=r.next();!o.done;o=r.next()){var i=o.value;if(!t.options[i])throw _t(i)}}catch(t){e={error:t}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e),platformLoggerProvider:t.getProvider("platform-logger")};return{app:e,getId:function(){return function(o){return h(this,void 0,void 0,function(){var e,n,r;return d(this,function(t){switch(t.label){case 0:return[4,pt(o.appConfig)];case 1:return e=t.sent(),n=e.installationEntry,(r=e.registrationPromise)?r.catch(console.error):yt(o).catch(console.error),[2,n.fid]}})})}(n)},getToken:function(t){return wt(n,t)},delete:function(){return function(r){return h(this,void 0,void 0,function(){var e,n;return d(this,function(t){switch(t.label){case 0:return[4,lt(e=r.appConfig,function(t){if(!t||0!==t.registrationStatus)return t})];case 1:if(!(n=t.sent()))return[3,6];if(1!==n.registrationStatus)return[3,2];throw K.create("delete-pending-registration");case 2:if(2!==n.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw K.create("app-offline");case 3:return[4,mt(e,n)];case 4:return t.sent(),[4,ft(e)];case 5:t.sent(),t.label=6;case 6:return[2]}})})}(n)},onIdChange:function(t){return St(n,t)}}},"PUBLIC")),rt.registerVersion("@firebase/installations",E)}).apply(this,arguments)}catch(t){throw console.error(t),new Error("Cannot instantiate firebase-installations.js - be sure to load firebase-app.js first.")}});
//# sourceMappingURL=firebase-installations.js.map
