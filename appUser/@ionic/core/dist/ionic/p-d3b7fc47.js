import"./p-ed8a8a37.js";import"./p-01cf4201.js";import{c as t}from"./p-c9aabdbb.js";import{g as n}from"./p-bf7e7656.js";const o=t=>document.querySelector(t+".ion-cloned-element"),a=t=>t.shadowRoot||t,e=t=>{const n="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs"),o="ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(null!=n){const t=n.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return null!=t?t.querySelector(o):null}return t.querySelector(o)},s=(t,n)=>{const o="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs");let a=[];if(null!=o){const t=o.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");null!=t&&(a=t.querySelectorAll("ion-buttons"))}else a=t.querySelectorAll("ion-buttons");for(const e of a){const t=e.closest("ion-header"),o=t&&!t.classList.contains("header-collapse-condense-inactive"),a=e.querySelector("ion-back-button"),s=e.classList.contains("buttons-collapse"),r="start"===e.slot||""===e.slot;if(null!==a&&r&&(s&&o&&n||!s))return a}return null},r=(n,e,s,r,l,i)=>{const c=e?`calc(100% - ${i.right+4}px)`:i.left-4+"px",p=e?"7px":"-7px",f=e?"-4px":"4px",d=e?"-4px":"4px",b=e?"right":"left",$=e?"left":"right",m=s?[{offset:0,opacity:1,transform:`translate3d(${f}, ${i.top-46}px, 0) scale(1)`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${p}, ${l.top-40}px, 0) scale(2.1)`}]:[{offset:0,opacity:0,transform:`translate3d(${p}, ${l.top-40}px, 0) scale(2.1)`},{offset:1,opacity:1,transform:`translate3d(${f}, ${i.top-46}px, 0) scale(1)`}],u=s?[{offset:0,opacity:1,transform:`translate3d(${d}, ${i.top-46}px, 0) scale(1)`},{offset:.2,opacity:0,transform:`translate3d(${d}, ${i.top-41}px, 0) scale(0.6)`},{offset:1,opacity:0,transform:`translate3d(${d}, ${i.top-41}px, 0) scale(0.6)`}]:[{offset:0,opacity:0,transform:`translate3d(${d}, ${i.top-41}px, 0) scale(0.6)`},{offset:1,opacity:1,transform:`translate3d(${d}, ${i.top-46}px, 0) scale(1)`}],X=t(),x=t(),y=o("ion-back-button"),h=a(y).querySelector(".button-text"),g=a(y).querySelector("ion-icon");y.text=r.text,y.mode=r.mode,y.icon=r.icon,y.color=r.color,y.disabled=r.disabled,y.style.setProperty("display","block"),y.style.setProperty("position","fixed"),x.addElement(g),X.addElement(h),X.beforeStyles({"transform-origin":b+" center"}).beforeAddWrite(()=>{r.style.setProperty("display","none"),y.style.setProperty(b,c)}).afterAddWrite(()=>{r.style.setProperty("display",""),y.style.setProperty("display","none"),y.style.removeProperty(b)}).keyframes(m),x.beforeStyles({"transform-origin":$+" center"}).keyframes(u),n.addAnimation([X,x])},l=(n,a,e,s,r,l)=>{const i=a?`calc(100% - ${r.right}px)`:r.left+"px",c=a?"-18px":"18px",p=a?"right":"left",f=e?[{offset:0,opacity:0,transform:`translate3d(${c}, ${l.top-4}px, 0) scale(0.49)`},{offset:.1,opacity:0},{offset:1,opacity:1,transform:`translate3d(0, ${r.top-2}px, 0) scale(1)`}]:[{offset:0,opacity:.99,transform:`translate3d(0, ${r.top-2}px, 0) scale(1)`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${c}, ${l.top-4}px, 0) scale(0.5)`}],d=o("ion-title"),b=t();d.innerText=s.innerText,d.size=s.size,d.color=s.color,b.addElement(d),b.beforeStyles({"transform-origin":p+" center",height:"46px",display:"",position:"relative",[p]:i}).beforeAddWrite(()=>{s.style.setProperty("display","none")}).afterAddWrite(()=>{s.style.setProperty("display",""),d.style.setProperty("display","none")}).keyframes(f),n.addAnimation(b)},i=(o,i)=>{try{const c="cubic-bezier(0.32,0.72,0,1)",p="opacity",f="transform",d="0%",b=.8,$="rtl"===o.ownerDocument.dir,m=$?"-99.5%":"99.5%",u=$?"33%":"-33%",X=i.enteringEl,x=i.leavingEl,y="back"===i.direction,h=X.querySelector(":scope > ion-content"),g=X.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),k=X.querySelectorAll(":scope > ion-header > ion-toolbar"),v=t(),w=t();if(v.addElement(X).duration(i.duration||540).easing(i.easing||c).fill("both").beforeRemoveClass("ion-page-invisible"),x&&o){const n=t();n.addElement(o),v.addAnimation(n)}if(h||0!==k.length||0!==g.length?(w.addElement(h),w.addElement(g)):w.addElement(X.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),v.addAnimation(w),y?w.beforeClearStyles([p]).fromTo("transform",`translateX(${u})`,`translateX(${d})`).fromTo(p,b,1):w.beforeClearStyles([p]).fromTo("transform",`translateX(${m})`,`translateX(${d})`),h){const n=a(h).querySelector(".transition-effect");if(n){const o=n.querySelector(".transition-cover"),a=n.querySelector(".transition-shadow"),e=t(),s=t(),r=t();e.addElement(n).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),s.addElement(o).beforeClearStyles([p]).fromTo(p,0,.1),r.addElement(a).beforeClearStyles([p]).fromTo(p,.03,.7),e.addAnimation([s,r]),w.addAnimation([e])}}const T=X.querySelector("ion-header.header-collapse-condense"),{forward:j,backward:A}=((t,n,o,a,i)=>{const c=s(a,o),p=e(i),f=e(a),d=s(i,o),b=null!==c&&null!==p&&!o,$=null!==f&&null!==d&&o;if(b){const a=p.getBoundingClientRect(),e=c.getBoundingClientRect();l(t,n,o,p,a,e),r(t,n,o,c,a,e)}else if($){const a=f.getBoundingClientRect(),e=d.getBoundingClientRect();l(t,n,o,f,a,e),r(t,n,o,d,a,e)}return{forward:b,backward:$}})(v,$,y,X,x);if(k.forEach(n=>{const o=t();o.addElement(n),v.addAnimation(o);const e=t();e.addElement(n.querySelector("ion-title"));const s=t(),r=Array.from(n.querySelectorAll("ion-buttons,[menuToggle]")),l=n.closest("ion-header"),i=l&&l.classList.contains("header-collapse-condense-inactive");let c;c=r.filter(y?t=>{const n=t.classList.contains("buttons-collapse");return n&&!i||!n}:t=>!t.classList.contains("buttons-collapse")),s.addElement(c);const f=t();f.addElement(n.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const b=t();b.addElement(a(n).querySelector(".toolbar-background"));const X=t(),x=n.querySelector("ion-back-button");if(x&&X.addElement(x),o.addAnimation([e,s,f,b,X]),s.fromTo(p,.01,1),f.fromTo(p,.01,1),y)i||e.fromTo("transform",`translateX(${u})`,`translateX(${d})`).fromTo(p,.01,1),f.fromTo("transform",`translateX(${u})`,`translateX(${d})`),X.fromTo(p,.01,1);else if(T||e.fromTo("transform",`translateX(${m})`,`translateX(${d})`).fromTo(p,.01,1),f.fromTo("transform",`translateX(${m})`,`translateX(${d})`),b.beforeClearStyles([p,"transform"]),(null==l?void 0:l.translucent)?b.fromTo("transform",$?"translateX(-100%)":"translateX(100%)","translateX(0px)"):b.fromTo(p,.01,1),j||X.fromTo(p,.01,1),x&&!j){const n=t();n.addElement(a(x).querySelector(".button-text")).fromTo("transform",$?"translateX(-100px)":"translateX(100px)","translateX(0px)"),o.addAnimation(n)}}),x){const o=t(),e=x.querySelector(":scope > ion-content"),s=x.querySelectorAll(":scope > ion-header > ion-toolbar"),r=x.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(e||0!==s.length||0!==r.length?(o.addElement(e),o.addElement(r)):o.addElement(x.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),v.addAnimation(o),y){o.beforeClearStyles([p]).fromTo("transform",`translateX(${d})`,$?"translateX(-100%)":"translateX(100%)");const t=n(x);v.afterAddWrite(()=>{"normal"===v.getDirection()&&t.style.setProperty("display","none")})}else o.fromTo("transform",`translateX(${d})`,`translateX(${u})`).fromTo(p,1,b);if(e){const n=a(e).querySelector(".transition-effect");if(n){const a=n.querySelector(".transition-cover"),e=n.querySelector(".transition-shadow"),s=t(),r=t(),l=t();s.addElement(n).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),r.addElement(a).beforeClearStyles([p]).fromTo(p,.1,0),l.addElement(e).beforeClearStyles([p]).fromTo(p,.7,.03),s.addAnimation([r,l]),o.addAnimation([s])}}s.forEach(n=>{const o=t();o.addElement(n);const e=t();e.addElement(n.querySelector("ion-title"));const s=t(),r=n.querySelectorAll("ion-buttons,[menuToggle]"),l=n.closest("ion-header"),i=l&&l.classList.contains("header-collapse-condense-inactive"),c=Array.from(r).filter(t=>{const n=t.classList.contains("buttons-collapse");return n&&!i||!n});s.addElement(c);const b=t(),m=n.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");m.length>0&&b.addElement(m);const X=t();X.addElement(a(n).querySelector(".toolbar-background"));const x=t(),h=n.querySelector("ion-back-button");if(h&&x.addElement(h),o.addAnimation([e,s,b,x,X]),v.addAnimation(o),x.fromTo(p,.99,0),s.fromTo(p,.99,0),b.fromTo(p,.99,0),y){if(i||e.fromTo("transform",`translateX(${d})`,$?"translateX(-100%)":"translateX(100%)").fromTo(p,.99,0),b.fromTo("transform",`translateX(${d})`,$?"translateX(-100%)":"translateX(100%)"),X.beforeClearStyles([p,"transform"]),(null==l?void 0:l.translucent)?X.fromTo("transform","translateX(0px)",$?"translateX(-100%)":"translateX(100%)"):X.fromTo(p,.99,0),h&&!A){const n=t();n.addElement(a(h).querySelector(".button-text")).fromTo("transform",`translateX(${d})`,`translateX(${($?-124:124)+"px"})`),o.addAnimation(n)}}else i||e.fromTo("transform",`translateX(${d})`,`translateX(${u})`).fromTo(p,.99,0).afterClearStyles([f,p]),b.fromTo("transform",`translateX(${d})`,`translateX(${u})`).afterClearStyles([f,p]),x.afterClearStyles([p]),e.afterClearStyles([p]),s.afterClearStyles([p])})}return v}catch(c){throw c}};export{i as iosTransitionAnimation,a as shadow}