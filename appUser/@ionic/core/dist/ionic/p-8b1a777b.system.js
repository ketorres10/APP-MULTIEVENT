var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function s(e){try{l(n.next(e))}catch(r){i(r)}}function o(e){try{l(n["throw"](e))}catch(r){i(r)}}function l(e){e.done?t(e.value):a(e.value).then(s,o)}l((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(r){return l([e,r])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;a=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){t.label=s[1];break}if(s[0]===6&&t.label<i[1]){t.label=i[1];i=s;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(s);break}if(i[2])t.ops.pop();t.trys.pop();continue}s=r.call(e,t)}catch(o){s=[6,o];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var i=arguments[r],s=0,o=i.length;s<o;s++,a++)n[a]=i[s];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n="ionic";var a;var i;var s;var o=false;var l=false;var $=false;var f=false;var u=0;var c=false;var v=typeof window!=="undefined"?window:{};var d=v.CSS;var h=v.document||{head:{}};var m={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var p=function(){return(h.head.attachShadow+"").indexOf("[native")>-1}();var g=function(e){return Promise.resolve(e)};var y=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var w=function(e,r,t,n){if(t){{if(n){t=t.filter((function(e){var r=e[0];return r&16}))}else{t=t.filter((function(e){var r=e[0];return!(r&16)}))}}t.map((function(t){var n=t[0],a=t[1],i=t[2];var s=N(e,n);var o=b(r,i);var l=R(n);m.ael(s,a,o,l);(r.$rmListeners$=r.$rmListeners$||[]).push((function(){return m.rel(s,a,o,l)}))}))}};var b=function(e,r){return function(t){{if(e.$flags$&256){e.$lazyInstance$[r](t)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([r,t])}}}};var N=function(e,r){if(r&4)return h;if(r&8)return v;if(r&32)return h.body;if(r&16)return e.parentElement;return e};var R=function(e){return(e&2)!==0};var x="r";var S="o";var _="s";var L="t";var k="s-id";var T="sty-id";var C="c-id";var A="{visibility:hidden}.hydrated{visibility:inherit}";var I="http://www.w3.org/1999/xlink";var j=function(e,r){if(r===void 0){r=""}{return function(){return}}};var E=function(e,r){{return function(){return}}};var M=new WeakMap;var B=function(e,r,t){var n=nr.get(e);if(y&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}nr.set(e,n)};var P=function(e,r,t,n){var a=U(r.$tagName$,t);var i=nr.get(a);e=e.nodeType===11?e:h;if(!i){a=U(r.$tagName$);i=nr.get(a)}if(i){if(typeof i==="string"){e=e.head||e;var s=M.get(e);var o=void 0;if(!s){M.set(e,s=new Set)}if(!s.has(a)){if(e.host&&(o=e.querySelector("["+T+'="'+a+'"]'))){o.innerHTML=i}else{if(m.$cssShim$){o=m.$cssShim$.createHostStyle(n,a,i,!!(r.$flags$&10));var l=o["s-sc"];if(l){a=l;s=null}}else{o=h.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var O=function(e){var r=e.$cmpMeta$;var t=e.$hostElement$;var n=r.$flags$;var a=j("attachStyles",r.$tagName$);var i=P(p&&t.shadowRoot?t.shadowRoot:t.getRootNode(),r,e.$modeName$,t);if(n&10){t["s-sc"]=i;t.classList.add(i+"-h");if(n&2){t.classList.add(i+"-s")}}a()};var U=function(e,r){return"sc-"+(r?e+"-"+r:e)};var z=function(e){return e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{")};var q=function(e){return ar.map((function(r){return r(e)})).find((function(e){return!!e}))};var H=e("s",(function(e){return ar.push(e)}));var V=e("g",(function(e){return Ke(e).$modeName$}));var D={};var F="http://www.w3.org/2000/svg";var W="http://www.w3.org/1999/xhtml";var G=function(e){return e!=null};var Q=function(e){e=typeof e;return e==="object"||e==="function"};var J=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var K=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=null;var s=null;var o=false;var l=false;var $=[];var f=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(o=typeof e!=="function"&&!Q(a)){a=String(a)}if(o&&l){$[$.length-1].$text$+=a}else{$.push(o?X(null,a):a)}l=o}}};f(t);if(r){if(r.key){i=r.key}if(r.name){s=r.name}{var u=r.className||r.class;if(u){r.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}if(typeof e==="function"){return e(r===null?{}:r,$,ee)}var c=X(e,null);c.$attrs$=r;if($.length>0){c.$children$=$}{c.$key$=i}{c.$name$=s}return c}));var X=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}{t.$key$=null}{t.$name$=null}return t};var Y=e("H",{});var Z=function(e){return e&&e.$tag$===Y};var ee={forEach:function(e,r){return e.map(re).forEach(r)},map:function(e,r){return e.map(re).map(r).map(te)}};var re=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var te=function(e){var r=X(e.vtag,e.vtext);r.$attrs$=e.vattrs;r.$children$=e.vchildren;r.$key$=e.vkey;r.$name$=e.vname;return r};var ne=function(e,r,t,n,a,i){if(t!==n){var s=Ze(e,r);var o=r.toLowerCase();if(r==="class"){var l=e.classList;var $=ie(t);var f=ie(n);l.remove.apply(l,$.filter((function(e){return e&&!f.includes(e)})));l.add.apply(l,f.filter((function(e){return e&&!$.includes(e)})))}else if(r==="style"){{for(var u in t){if(!n||n[u]==null){if(u.includes("-")){e.style.removeProperty(u)}else{e.style[u]=""}}}}for(var u in n){if(!t||n[u]!==t[u]){if(u.includes("-")){e.style.setProperty(u,n[u])}else{e.style[u]=n[u]}}}}else if(r==="key");else if(r==="ref"){if(n){n(e)}}else if(!s&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(Ze(v,o)){r=o.slice(2)}else{r=o[2]+r.slice(3)}if(t){m.rel(e,r,t,false)}if(n){m.ael(e,r,n,false)}}else{var c=Q(n);if((s||c&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var d=n==null?"":n;if(r==="list"){s=false}else if(t==null||e[r]!=d){e[r]=d}}else{e[r]=n}}catch(p){}}var h=false;{if(o!==(o=o.replace(/^xlink\:?/,""))){r=o;h=true}}if(n==null||n===false){if(h){e.removeAttributeNS(I,r)}else{e.removeAttribute(r)}}else if((!s||i&4||a)&&!c){n=n===true?"":n;if(h){e.setAttributeNS(I,r,n)}else{e.setAttribute(r,n)}}}}};var ae=/\s/;var ie=function(e){return!e?[]:e.split(ae)};var se=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||D;var s=r.$attrs$||D;{for(n in i){if(!(n in s)){ne(a,n,i[n],undefined,t,r.$flags$)}}}for(n in s){ne(a,n,i[n],s[n],t,r.$flags$)}};var oe=function(e,r,t,n){var l=r.$children$[t];var u=0;var c;var v;var d;if(!o){$=true;if(l.$tag$==="slot"){if(a){n.classList.add(a+"-s")}l.$flags$|=l.$children$?2:1}}if(l.$text$!==null){c=l.$elm$=h.createTextNode(l.$text$)}else if(l.$flags$&1){c=l.$elm$=h.createTextNode("")}else{if(!f){f=l.$tag$==="svg"}c=l.$elm$=h.createElementNS(f?F:W,l.$flags$&2?"slot-fb":l.$tag$);if(f&&l.$tag$==="foreignObject"){f=false}{se(null,l,f)}if(G(a)&&c["s-si"]!==a){c.classList.add(c["s-si"]=a)}if(l.$children$){for(u=0;u<l.$children$.length;++u){v=oe(e,l,u,c);if(v){c.appendChild(v)}}}{if(l.$tag$==="svg"){f=false}else if(c.tagName==="foreignObject"){f=true}}}{c["s-hn"]=s;if(l.$flags$&(2|1)){c["s-sr"]=true;c["s-cr"]=i;c["s-sn"]=l.$name$||"";d=e&&e.$children$&&e.$children$[t];if(d&&d.$tag$===l.$tag$&&e.$elm$){le(e.$elm$,false)}}}return c};var le=function(e,r){m.$flags$|=1;var t=e.childNodes;for(var n=t.length-1;n>=0;n--){var a=t[n];if(a["s-hn"]!==s&&a["s-ol"]){de(a).insertBefore(a,ve(a));a["s-ol"].remove();a["s-ol"]=undefined;$=true}if(r){le(a,r)}}m.$flags$&=~1};var $e=function(e,r,t,n,a,i){var o=e["s-cr"]&&e["s-cr"].parentNode||e;var l;if(o.shadowRoot&&o.tagName===s){o=o.shadowRoot}for(;a<=i;++a){if(n[a]){l=oe(null,t,a,e);if(l){n[a].$elm$=l;o.insertBefore(l,ve(r))}}}};var fe=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;we(n);{l=true;if(a["s-ol"]){a["s-ol"].remove()}else{le(a,true)}}a.remove()}}};var ue=function(e,r,t,n){var a=0;var i=0;var s=0;var o=0;var l=r.length-1;var $=r[0];var f=r[l];var u=n.length-1;var c=n[0];var v=n[u];var d;var h;while(a<=l&&i<=u){if($==null){$=r[++a]}else if(f==null){f=r[--l]}else if(c==null){c=n[++i]}else if(v==null){v=n[--u]}else if(ce($,c)){he($,c);$=r[++a];c=n[++i]}else if(ce(f,v)){he(f,v);f=r[--l];v=n[--u]}else if(ce($,v)){if($.$tag$==="slot"||v.$tag$==="slot"){le($.$elm$.parentNode,false)}he($,v);e.insertBefore($.$elm$,f.$elm$.nextSibling);$=r[++a];v=n[--u]}else if(ce(f,c)){if($.$tag$==="slot"||v.$tag$==="slot"){le(f.$elm$.parentNode,false)}he(f,c);e.insertBefore(f.$elm$,$.$elm$);f=r[--l];c=n[++i]}else{s=-1;{for(o=a;o<=l;++o){if(r[o]&&r[o].$key$!==null&&r[o].$key$===c.$key$){s=o;break}}}if(s>=0){h=r[s];if(h.$tag$!==c.$tag$){d=oe(r&&r[i],t,s,e)}else{he(h,c);r[s]=undefined;d=h.$elm$}c=n[++i]}else{d=oe(r&&r[i],t,i,e);c=n[++i]}if(d){{de($.$elm$).insertBefore(d,ve($.$elm$))}}}}if(a>l){$e(e,n[u+1]==null?null:n[u+1].$elm$,t,n,i,u)}else if(i>u){fe(r,a,l)}};var ce=function(e,r){if(e.$tag$===r.$tag$){if(e.$tag$==="slot"){return e.$name$===r.$name$}{return e.$key$===r.$key$}}return false};var ve=function(e){return e&&e["s-ol"]||e};var de=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var he=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;var i=r.$tag$;var s=r.$text$;var o;if(s===null){{f=i==="svg"?true:i==="foreignObject"?false:f}{if(i==="slot");else{se(e,r,f)}}if(n!==null&&a!==null){ue(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}$e(t,null,r,a,0,a.length-1)}else if(n!==null){fe(n,0,n.length-1)}if(f&&i==="svg"){f=false}}else if(o=t["s-cr"]){o.parentNode.textContent=s}else if(e.$text$!==s){t.data=s}};var me=function(e){var r=e.childNodes;var t;var n;var a;var i;var s;var o;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){s=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){o=r[i].nodeType;if(s!==""){if(o===1&&s===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(o===1||o===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}me(t)}}};var pe=[];var ge=function(e){var r;var t;var n;var a;var i;var s;var o=0;var $=e.childNodes;var f=$.length;for(;o<f;o++){r=$[o];if(r["s-sr"]&&(t=r["s-cr"])){n=t.parentNode.childNodes;a=r["s-sn"];for(s=n.length-1;s>=0;s--){t=n[s];if(!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==r["s-hn"]){if(ye(t,a)){i=pe.find((function(e){return e.$nodeToRelocate$===t}));l=true;t["s-sn"]=t["s-sn"]||a;if(i){i.$slotRefNode$=r}else{pe.push({$slotRefNode$:r,$nodeToRelocate$:t})}if(t["s-sr"]){pe.map((function(e){if(ye(e.$nodeToRelocate$,t["s-sn"])){i=pe.find((function(e){return e.$nodeToRelocate$===t}));if(i&&!e.$slotRefNode$){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!pe.some((function(e){return e.$nodeToRelocate$===t}))){pe.push({$nodeToRelocate$:t})}}}}if(r.nodeType===1){ge(r)}}};var ye=function(e,r){if(e.nodeType===1){if(e.getAttribute("slot")===null&&r===""){return true}if(e.getAttribute("slot")===r){return true}return false}if(e["s-sn"]===r){return true}return r===""};var we=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(we)}};var be=function(e,r){var t=e.$hostElement$;var n=e.$cmpMeta$;var f=e.$vnode$||X(null,null);var u=Z(r)?r:K(null,null,r);s=t.tagName;if(n.$attrsToReflect$){u.$attrs$=u.$attrs$||{};n.$attrsToReflect$.map((function(e){var r=e[0],n=e[1];return u.$attrs$[n]=t[r]}))}u.$tag$=null;u.$flags$|=4;e.$vnode$=u;u.$elm$=f.$elm$=t.shadowRoot||t;{a=t["s-sc"]}{i=t["s-cr"];o=p&&(n.$flags$&1)!==0;l=false}he(f,u);{m.$flags$|=1;if($){ge(u.$elm$);var c=void 0;var v=void 0;var d=void 0;var g=void 0;var y=void 0;var w=void 0;var b=0;for(;b<pe.length;b++){c=pe[b];v=c.$nodeToRelocate$;if(!v["s-ol"]){d=h.createTextNode("");d["s-nr"]=v;v.parentNode.insertBefore(v["s-ol"]=d,v)}}for(b=0;b<pe.length;b++){c=pe[b];v=c.$nodeToRelocate$;if(c.$slotRefNode$){g=c.$slotRefNode$.parentNode;y=c.$slotRefNode$.nextSibling;d=v["s-ol"];while(d=d.previousSibling){w=d["s-nr"];if(w&&w["s-sn"]===v["s-sn"]&&g===w.parentNode){w=w.nextSibling;if(!w||!w["s-nr"]){y=w;break}}}if(!y&&g!==v.parentNode||v.nextSibling!==y){if(v!==y){if(!v["s-hn"]&&v["s-ol"]){v["s-hn"]=v["s-ol"].parentNode.nodeName}g.insertBefore(v,y)}}}else{if(v.nodeType===1){v.hidden=true}}}}if(l){me(u.$elm$)}m.$flags$&=~1;pe.length=0}};var Ne=e("e",(function(e){return Ke(e).$hostElement$}));var Re=e("d",(function(e,r,t){var n=Ne(e);return{emit:function(e){return xe(n,r,{bubbles:!!(t&4),composed:!!(t&2),cancelable:!!(t&1),detail:e})}}}));var xe=function(e,r,t){var n=new CustomEvent(r,t);e.dispatchEvent(n);return n};var Se=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var _e=function(e,r){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}var t=j("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$ancestorComponent$;var a=e.$lazyInstance$;var i=function(){return Le(e,a,r)};Se(e,n);var s;if(r){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var r=e[0],t=e[1];return Ie(a,r,t)}));e.$queuedListeners$=null}}{s=Ie(a,"componentWillLoad")}}{s=je(s,(function(){return Ie(a,"componentWillRender")}))}t();return je(s,(function(){return dr(i)}))};var Le=function(e,r,t){var n=e.$hostElement$;var a=j("update",e.$cmpMeta$.$tagName$);var i=n["s-rc"];if(t){O(e)}var s=j("render",e.$cmpMeta$.$tagName$);{{be(e,ke(r))}}if(m.$cssShim$){m.$cssShim$.updateHost(n)}{e.$flags$&=~16}{e.$flags$|=2}if(i){i.map((function(e){return e()}));n["s-rc"]=undefined}s();a();{var o=n["s-p"];var l=function(){return Te(e)};if(o.length===0){l()}else{Promise.all(o).then(l);e.$flags$|=4;o.length=0}}};var ke=function(e){try{e=e.render&&e.render()}catch(r){er(r)}return e};var Te=function(e){var r=e.$cmpMeta$.$tagName$;var t=e.$hostElement$;var n=j("postUpdate",r);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{Ee(t)}{Ie(a,"componentDidLoad")}n();{e.$onReadyResolve$(t);if(!i){Ae()}}}else{{Ie(a,"componentDidUpdate")}n()}{e.$onInstanceResolve$(t)}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){cr((function(){return _e(e,false)}))}e.$flags$&=~(4|512)}};var Ce=e("i",(function(e){{var r=Ke(e);var t=r.$hostElement$.isConnected;if(t&&(r.$flags$&(2|16))===2){_e(r,false)}return t}}));var Ae=function(e){{Ee(h.documentElement)}{m.$flags$|=2}cr((function(){return xe(v,"appload",{detail:{namespace:n}})}))};var Ie=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(n){er(n)}}return undefined};var je=function(e,r){return e&&e.then?e.then(r):r()};var Ee=function(e){return e.classList.add("hydrated")};var Me=function(e,r,t,n){var a=j("hydrateClient",r);var i=e.shadowRoot;var s=[];var o=[];var l=i?[]:null;var $=n.$vnode$=X(r,null);if(!m.$orgLocNodes$){Pe(h.body,m.$orgLocNodes$=new Map)}e[k]=t;e.removeAttribute(k);Be($,s,o,l,e,e,t);s.map((function(e){var t=e.$hostId$+"."+e.$nodeId$;var n=m.$orgLocNodes$.get(t);var a=e.$elm$;if(n&&p&&n["s-en"]===""){n.parentNode.insertBefore(a,n.nextSibling)}if(!i){a["s-hn"]=r;if(n){a["s-ol"]=n;a["s-ol"]["s-nr"]=a}}m.$orgLocNodes$.delete(t)}));if(i){l.map((function(e){if(e){i.appendChild(e)}}))}a()};var Be=function(e,r,t,n,a,i,s){var o;var l;var $;var f;if(i.nodeType===1){o=i.getAttribute(C);if(o){l=o.split(".");if(l[0]===s||l[0]==="0"){$={$flags$:0,$hostId$:l[0],$nodeId$:l[1],$depth$:l[2],$index$:l[3],$tag$:i.tagName.toLowerCase(),$elm$:i,$attrs$:null,$children$:null,$key$:null,$name$:null,$text$:null};r.push($);i.removeAttribute(C);if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$;e=$;if(n&&$.$depth$==="0"){n[$.$index$]=$.$elm$}}}for(f=i.childNodes.length-1;f>=0;f--){Be(e,r,t,n,a,i.childNodes[f],s)}if(i.shadowRoot){for(f=i.shadowRoot.childNodes.length-1;f>=0;f--){Be(e,r,t,n,a,i.shadowRoot.childNodes[f],s)}}}else if(i.nodeType===8){l=i.nodeValue.split(".");if(l[1]===s||l[1]==="0"){o=l[0];$={$flags$:0,$hostId$:l[1],$nodeId$:l[2],$depth$:l[3],$index$:l[4],$elm$:i,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null};if(o===L){$.$elm$=i.nextSibling;if($.$elm$&&$.$elm$.nodeType===3){$.$text$=$.$elm$.textContent;r.push($);i.remove();if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$;if(n&&$.$depth$==="0"){n[$.$index$]=$.$elm$}}}else if($.$hostId$===s){if(o===_){$.$tag$="slot";if(l[5]){i["s-sn"]=$.$name$=l[5]}else{i["s-sn"]=""}i["s-sr"]=true;if(n){$.$elm$=h.createElement($.$tag$);if($.$name$){$.$elm$.setAttribute("name",$.$name$)}i.parentNode.insertBefore($.$elm$,i);i.remove();if($.$depth$==="0"){n[$.$index$]=$.$elm$}}t.push($);if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$}else if(o===x){if(n){i.remove()}else{a["s-cr"]=i;i["s-cn"]=true}}}}}else if(e&&e.$tag$==="style"){var u=X(null,i.textContent);u.$elm$=i;u.$index$="0";e.$children$=[u]}};var Pe=function(e,r){if(e.nodeType===1){var t=0;for(;t<e.childNodes.length;t++){Pe(e.childNodes[t],r)}if(e.shadowRoot){for(t=0;t<e.shadowRoot.childNodes.length;t++){Pe(e.shadowRoot.childNodes[t],r)}}}else if(e.nodeType===8){var n=e.nodeValue.split(".");if(n[0]===S){r.set(n[1]+"."+n[2],e);e.nodeValue="";e["s-en"]=n[3]}}};var Oe=function(e,r){if(e!=null&&!Q(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&2){return parseFloat(e)}if(r&1){return String(e)}return e}return e};var Ue=function(e,r){return Ke(e).$instanceValues$.get(r)};var ze=function(e,r,t,n){var a=Ke(e);var i=a.$instanceValues$.get(r);var s=a.$flags$;var o=a.$lazyInstance$;t=Oe(t,n.$members$[r][0]);if((!(s&8)||i===undefined)&&t!==i){a.$instanceValues$.set(r,t);if(o){if(n.$watchers$&&s&128){var l=n.$watchers$[r];if(l){l.map((function(e){try{o[e](t,i,r)}catch(n){er(n)}}))}}if((s&(2|16))===2){_e(a,false)}}}};var qe=function(e,r,t){if(r.$members$){if(e.watchers){r.$watchers$=e.watchers}var n=Object.entries(r.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return Ue(this,n)},set:function(e){ze(this,n,e,r)},configurable:true,enumerable:true})}else if(t&1&&i&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var r=0;r<arguments.length;r++){e[r]=arguments[r]}var t=Ke(this);return t.$onInstancePromise$.then((function(){var r;return(r=t.$lazyInstance$)[n].apply(r,e)}))}})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;m.jmp((function(){var r=i.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var t=e[0],n=e[1];var a=n[1]||t;i.set(a,t);if(n[0]&512){r.$attrsToReflect$.push([t,a])}return a}))}}return e};var He=function(e,n,a,i,s){return __awaiter(t,void 0,void 0,(function(){var t,i,o,l,$,f,u;return __generator(this,(function(c){switch(c.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;if(n.$modeName$==null){n.$modeName$=typeof a.$lazyBundleIds$!=="string"?q(e):""}s=tr(a,n);if(!s.then)return[3,2];t=E();return[4,s];case 1:s=c.sent();t();c.label=2;case 2:if(!s.isProxied){{a.$watchers$=s.watchers}qe(s,a,2);s.isProxied=true}i=j("createInstance",a.$tagName$);{n.$flags$|=8}try{new s(n)}catch(v){er(v)}{n.$flags$&=~8}{n.$flags$|=128}i();Ve(n.$lazyInstance$);o=U(a.$tagName$,n.$modeName$);if(!(!nr.has(o)&&s.style))return[3,5];l=j("registerStyles",a.$tagName$);$=s.style;if(typeof $!=="string"){$=$[n.$modeName$]}if(!(a.$flags$&8))return[3,4];return[4,r.import("./p-e7788500.system.js").then((function(e){return e.scopeCss($,o,false)}))];case 3:$=c.sent();c.label=4;case 4:B(o,$,!!(a.$flags$&1));l();c.label=5;case 5:f=n.$ancestorComponent$;u=function(){return _e(n,true)};if(f&&f["s-rc"]){f["s-rc"].push(u)}else{u()}return[2]}}))}))};var Ve=function(e){{Ie(e,"connectedCallback")}};var De=function(e){if((m.$flags$&1)===0){var r=Ke(e);var t=r.$cmpMeta$;var n=j("connectedCallback",t.$tagName$);{w(e,r,t.$listeners$,true)}if(!(r.$flags$&1)){r.$flags$|=1;var a=void 0;{a=e.getAttribute(k);if(a){if(p&&t.$flags$&1){var i=P(e.shadowRoot,t,e.getAttribute("s-mode"));e.classList.remove(i+"-h",i+"-s")}Me(e,t.$tagName$,a,r)}}if(!a){if(t.$flags$&(4|8)){Fe(e)}}{var s=e;while(s=s.parentNode||s.host){if(s.nodeType===1&&s.hasAttribute("s-id")||s["s-p"]){Se(r,r.$ancestorComponent$=s);break}}}if(t.$members$){Object.entries(t.$members$).map((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{cr((function(){return He(e,r,t)}))}}else{w(e,r,t.$listeners$,false);Ve(r.$lazyInstance$)}n()}};var Fe=function(e){var r=e["s-cr"]=h.createComment("");r["s-cn"]=true;e.insertBefore(r,e.firstChild)};var We=function(e){if((m.$flags$&1)===0){var r=Ke(e);var t=r.$lazyInstance$;{if(r.$rmListeners$){r.$rmListeners$.map((function(e){return e()}));r.$rmListeners$=undefined}}if(m.$cssShim$){m.$cssShim$.removeHost(e)}{Ie(t,"disconnectedCallback")}{Ie(t,"componentDidUnload")}}};var Ge=e("b",(function(e,r){if(r===void 0){r={}}var t=j();var n=[];var a=r.exclude||[];var i=v.customElements;var s=h.head;var o=s.querySelector("meta[charset]");var l=h.createElement("style");var $=[];var f=h.querySelectorAll("["+T+"]");var u;var c=true;var d=0;Object.assign(m,r);m.$resourcesUrl$=new URL(r.resourcesUrl||"./",h.baseURI).href;{if(r.syncQueue){m.$flags$|=4}}{m.$flags$|=2}{for(;d<f.length;d++){B(f[d].getAttribute(T),z(f[d].innerHTML),true)}}e.map((function(e){return e[1].map((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}{t.$listeners$=r[3]}{t.$attrsToReflect$=[]}{t.$watchers$={}}if(!p&&t.$flags$&1){t.$flags$|=8}var s=t.$tagName$;var o=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;Ye(r,t);if(t.$flags$&1){if(p){{r.attachShadow({mode:"open",delegatesFocus:!!(t.$flags$&16)})}}else if(!("shadowRoot"in r)){r.shadowRoot=r}}return n}r.prototype.connectedCallback=function(){var e=this;if(u){clearTimeout(u);u=null}if(c){$.push(this)}else{m.jmp((function(){return De(e)}))}};r.prototype.disconnectedCallback=function(){var e=this;m.jmp((function(){return We(e)}))};r.prototype.forceUpdate=function(){Ce(this)};r.prototype.componentOnReady=function(){return Ke(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleIds$=e[0];if(!a.includes(s)&&!i.get(s)){n.push(s);i.define(s,qe(o,t,1))}}))}));{l.innerHTML=n+A;l.setAttribute("data-styles","");s.insertBefore(l,o?o.nextSibling:s.firstChild)}c=false;if($.length){$.map((function(e){return e.connectedCallback()}))}else{{m.jmp((function(){return u=setTimeout(Ae,30)}))}}t()}));var Qe=e("c",(function(e){var r=new URL(e,m.$resourcesUrl$);return r.origin!==v.location.origin?r.href:r.pathname}));var Je=new WeakMap;var Ke=function(e){return Je.get(e)};var Xe=e("r",(function(e,r){return Je.set(r.$lazyInstance$=e,r)}));var Ye=function(e,r){var t={$flags$:0,$hostElement$:e,$cmpMeta$:r,$instanceValues$:new Map};{t.$onInstancePromise$=new Promise((function(e){return t.$onInstanceResolve$=e}))}{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}w(e,t,r.$listeners$,false);return Je.set(e,t)};var Ze=function(e,r){return r in e};var er=function(e){return console.error(e)};var rr=new Map;var tr=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=typeof e.$lazyBundleIds$!=="string"?e.$lazyBundleIds$[t.$modeName$]:e.$lazyBundleIds$;var s=rr.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{rr.set(i,e)}return e[a]}),er)};var nr=new Map;var ar=[];var ir=[];var sr=[];var or=[];var lr=function(e,r){return function(t){e.push(t);if(!c){c=true;if(r&&m.$flags$&4){cr(ur)}else{m.raf(ur)}}}};var $r=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){er(t)}}e.length=0};var fr=function(e,r){var t=0;var n=0;while(t<e.length&&(n=performance.now())<r){try{e[t++](n)}catch(a){er(a)}}if(t===e.length){e.length=0}else if(t!==0){e.splice(0,t)}};var ur=function(){{u++}$r(ir);{var e=(m.$flags$&6)===2?performance.now()+14*Math.ceil(u*(1/10)):Infinity;fr(sr,e);fr(or,e);if(sr.length>0){or.push.apply(or,sr);sr.length=0}if(c=ir.length+sr.length+or.length>0){m.raf(ur)}else{u=0}}};var cr=function(e){return g().then(e)};var vr=e("f",lr(ir,false));var dr=e("w",lr(sr,true));var hr=e("B",{isDev:false,isBrowser:true,isServer:false,isTesting:false});var mr=e("a",(function(){if(!(d&&d.supports&&d.supports("color","var(--c)"))){return r.import("./p-72a63507.system.js").then((function(){if(m.$cssShim$=v.__cssshim){return m.$cssShim$.i()}else{return 0}}))}return g()}));var pr=e("p",(function(){{m.$cssShim$=v.__cssshim}var e=Array.from(h.querySelectorAll("script")).find((function(e){return new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===n}));var t=e["data-opts"]||{};if("onbeforeload"in e&&!history.scrollRestoration){return{then:function(){}}}{t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,v.location.href)).href;{gr(t.resourcesUrl,e)}if(!v.customElements){return r.import("./p-b6350533.system.js").then((function(){return t}))}}return g(t)}));var gr=function(e,r){var t=J(n);try{v[t]=new Function("w","return import(w);//"+Math.random())}catch(i){var a=new Map;v[t]=function(n){var i=new URL(n,e).href;var s=a.get(i);if(!s){var o=h.createElement("script");o.type="module";o.crossOrigin=r.crossOrigin;o.src=URL.createObjectURL(new Blob(["import * as m from '"+i+"'; window."+t+".m = m;"],{type:"application/javascript"}));s=new Promise((function(e){o.onload=function(){e(v[t].m);o.remove()}}));a.set(i,s);h.head.appendChild(o)}return s}}}}}}));