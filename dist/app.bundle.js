(()=>{var e,n,t={11:(e,n,t)=>{"use strict";t.d(n,{A:()=>b});var a=t(354),r=t.n(a),i=t(314),o=t.n(i),s=t(417),A=t.n(s),c=new URL(t(703),t.b),l=new URL(t(371),t.b),p=new URL(t(977),t.b),d=new URL(t(338),t.b),u=new URL(t(832),t.b),g=o()(r()),m=A()(c),C=A()(l),h=A()(p),w=A()(d),f=A()(u);g.push([e.id,`body{display:flex;flex-direction:column;justify-content:center;margin:auto;background:#000;background:linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(144, 144, 144) 50%, rgb(0, 0, 0) 100%);height:100vh;min-height:100%}.main-wrapper{position:relative;height:500px;background-color:#fff;opacity:1;transition:all 1.5s ease-in-out}.main-wrapper.hide{opacity:0}.swiper-container{display:none;box-sizing:border-box;overflow:hidden;height:500px;width:100%;background-repeat:no-repeat;background-size:cover;background-position:center bottom;overflow-x:auto;color:#000;background-color:#fff}.swiper-container.visible{display:block}.swiper-container::-webkit-scrollbar{display:none}.swiper-wrapper{width:fit-content;display:flex;gap:500px;height:100%;background:url(${m});padding:0px 600px 0 60%}.swiper-slide{height:300px;width:300px;position:relative}.stall-container{width:300px;height:300px;position:relative;top:125px;z-index:5}.stall-interaction{display:flex;opacity:0;transform:translateX(100px);justify-content:center;align-items:center;border-radius:50%;font-weight:600;border:1px solid #fff;background-color:#fff;width:100px;height:100px;position:absolute;top:100px;left:-110px;transition:all .9s ease-in-out}.stall-interaction.visible{opacity:1;transform:translate(0)}.stall-head{height:70px;width:100%;box-sizing:border-box;border:2px solid #000;border-radius:4px;position:absolute;top:0px;background-color:#fff}.stall-head::after,.stall-body::after{content:"";position:absolute;height:100%;width:100%;background:rgba(0,0,0,.5);top:0;left:0}.active .stall-head::after,.active .stall-body::after{display:none}.stall-support{height:100px;width:90%;box-sizing:border-box;border-left:10px solid brown;border-right:10px solid brown;position:absolute;top:70px;left:5%}.stall-body{height:130px;width:100%;border:2px solid #000;position:absolute;bottom:0px;background-color:#fff}.image-container{width:100%;height:100%;overflow:hidden}.logo-container{width:100%;height:100%;overflow:hidden}.logo-container img{object-fit:contain;width:100%;height:100%}.image-container img{object-fit:cover;width:100%;height:100%}.sprite{position:absolute;z-index:10;bottom:30px}.walking-man-wrapper{position:absolute;bottom:0;transform:translate(-65%, 0)}.walking-man{overflow:hidden}.walking-man.man{width:165px;height:195px}.walking-man.woman{width:165px;height:195px}.walking-man.man .image-wrapper{width:30400px;height:600px;background-image:url(${C});transform:scale(0.3)}.walking-man.woman .image-wrapper{width:9600px;height:360px;background-image:url(${h});transform:scale(0.55)}.walking-man .image-wrapper{background-repeat:no-repeat;transform-origin:top left}.walking-man.man .image-wrapper.walking{background-image:url(${C});animation:walk .8s steps(38) infinite}.walking-man.woman .image-wrapper.walking{background-image:url(${h});animation:walkWoman .8s steps(20) infinite}.walking-man.man .walking-reverse{background-image:url(${w}) !important;animation:walk .8s steps(38) infinite reverse}.walking-man.woman .walking-reverse{background-image:url(${f}) !important;animation:walkWoman .8s steps(20) infinite reverse}.walking-man.man .reverse-man{background-image:url(${w}) !important}.walking-man.woman .reverse-man{background-image:url(${f}) !important}@keyframes walk{0%{background-position:0 0}100%{background-position:-30400px 0}}@keyframes walkWoman{0%{background-position:0 0}100%{background-position:-9600px 0}}.character-buttons-wrapper{position:absolute;top:50%;left:50%;margin-top:-100px;margin-left:-100px;color:#fff;display:flex;gap:50px;z-index:11}.character-buttons-wrapper button{border:none;width:100px;height:100px;aspect-ratio:1;transition:transform .1s ease-in}.character-buttons-wrapper button img{width:100%;height:100%}.character-buttons-wrapper button:hover{transform:scale(1.1)}.character-buttons-wrapper button:active{transform:scale(1)}`,"",{version:3,sources:["webpack://./src/stylesheets/_global.scss","webpack://./src/stylesheets/_main.scss","webpack://./src/stylesheets/_sprite.scss","webpack://./src/stylesheets/_characterButtons.scss"],names:[],mappings:"AAAA,KACE,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,WAAA,CACA,eAAA,CACA,4FAAA,CAMA,YAAA,CACA,eAAA,CCPF,cACE,iBAAA,CACA,YAAA,CACA,qBAAA,CACA,SAAA,CACA,+BAAA,CAGF,mBACE,SAAA,CAGF,kBACE,YAAA,CACA,qBAAA,CACA,eAAA,CACA,YAAA,CACA,UAAA,CACA,2BAAA,CACA,qBAAA,CACA,iCAAA,CACA,eAAA,CACA,UAAA,CACA,qBAAA,CAGF,0BACE,aAAA,CAGF,qCACE,YAAA,CAGF,gBACE,iBAAA,CACA,YAAA,CACA,SAAA,CACA,WAAA,CACA,kDAAA,CACA,uBAAA,CAGF,cACE,YAAA,CACA,WAAA,CACA,iBAAA,CAGF,iBACE,WAAA,CACA,YAAA,CACA,iBAAA,CACA,SAAA,CACA,SAAA,CAEF,mBACE,YAAA,CACA,SAAA,CACA,2BAAA,CACA,sBAAA,CACA,kBAAA,CACA,iBAAA,CACA,eAAA,CACA,qBAAA,CACA,qBAAA,CACA,WAAA,CACA,YAAA,CACA,iBAAA,CACA,SAAA,CACA,WAAA,CACA,8BAAA,CAGF,2BACE,SAAA,CACA,sBAAA,CAGF,YACE,WAAA,CACA,UAAA,CACA,qBAAA,CACA,qBAAA,CACA,iBAAA,CACA,iBAAA,CACA,OAAA,CACA,qBAAA,CAGF,sCAEE,UAAA,CACA,iBAAA,CACA,WAAA,CACA,UAAA,CACA,yBAAA,CACA,KAAA,CACA,MAAA,CAGF,sDAEE,YAAA,CAGF,eACE,YAAA,CACA,SAAA,CACA,qBAAA,CACA,4BAAA,CACA,6BAAA,CACA,iBAAA,CACA,QAAA,CACA,OAAA,CAGF,YACE,YAAA,CACA,UAAA,CACA,qBAAA,CACA,iBAAA,CACA,UAAA,CACA,qBAAA,CAEF,iBACE,UAAA,CACA,WAAA,CACA,eAAA,CAEF,gBACE,UAAA,CACA,WAAA,CACA,eAAA,CAGF,oBACE,kBAAA,CACA,UAAA,CACA,WAAA,CAEF,qBACE,gBAAA,CACA,UAAA,CACA,WAAA,CChJF,QACE,iBAAA,CACA,UAAA,CACA,WAAA,CAGF,qBACE,iBAAA,CACA,QAAA,CACA,4BAAA,CAGF,aACE,eAAA,CAGF,iBACE,WAAA,CACA,YAAA,CAGF,mBACE,WAAA,CACA,YAAA,CAGF,gCACE,aAjCkB,CAkClB,YAjCmB,CAkCnB,wDAAA,CACA,oBAAA,CAGF,kCACE,YArCoB,CAsCpB,YArCqB,CAsCrB,wDAAA,CACA,qBAAA,CAGF,4BACE,2BAAA,CACA,yBAAA,CAGF,wCACE,wDAAA,CACA,qCAAA,CAGF,0CACE,wDAAA,CACA,0CAAA,CAGF,kCACE,mEAAA,CACA,6CAAA,CAGF,oCACE,mEAAA,CACA,kDAAA,CAGF,8BACE,mEAAA,CAGF,gCACE,mEAAA,CAGF,gBACE,GACE,uBAAA,CAEF,KACE,8BAAA,CAAA,CAIJ,qBACE,GACE,uBAAA,CAEF,KACE,6BAAA,CAAA,CC7FJ,2BACE,iBAAA,CACA,OAAA,CACA,QAAA,CACA,iBAAA,CACA,kBAAA,CACA,UAAA,CACA,YAAA,CACA,QAAA,CACA,UAAA,CAEA,kCACE,WAAA,CACA,WAAA,CACA,YAAA,CACA,cAAA,CACA,gCAAA,CAEA,sCACE,UAAA,CACA,WAAA,CAIJ,wCACE,oBAAA,CAGF,yCACE,kBAAA",sourcesContent:["body {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: auto;\n  background: rgb(0, 0, 0);\n  background: linear-gradient(\n    0deg,\n    rgba(0, 0, 0, 1) 0%,\n    rgba(144, 144, 144, 1) 50%,\n    rgba(0, 0, 0, 1) 100%\n  );\n  height: 100vh;\n  min-height: 100%;\n}\n",'/*:root {\n  /* --width:27200px;\n  --width: 30400px;\n  --height: 600px;\n}*/\n\n.main-wrapper {\n  position: relative;\n  height: 500px;\n  background-color: white;\n  opacity: 1;\n  transition: all 1.5s ease-in-out;\n}\n\n.main-wrapper.hide {\n  opacity: 0;\n}\n\n.swiper-container {\n  display: none;\n  box-sizing: border-box;\n  overflow: hidden;\n  height: 500px;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center bottom;\n  overflow-x: auto;\n  color: black;\n  background-color: white;\n}\n\n.swiper-container.visible {\n  display: block;\n}\n\n.swiper-container::-webkit-scrollbar {\n  display: none;\n}\n\n.swiper-wrapper {\n  width: fit-content;\n  display: flex;\n  gap: 500px;\n  height: 100%;\n  background: url(./assets/bg.svg);\n  padding: 0px 600px 0 60%;\n}\n\n.swiper-slide {\n  height: 300px;\n  width: 300px;\n  position: relative;\n}\n\n.stall-container {\n  width: 300px;\n  height: 300px;\n  position: relative;\n  top: 125px;\n  z-index: 5;\n}\n.stall-interaction {\n  display: flex;\n  opacity: 0;\n  transform: translateX(100px);\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  font-weight: 600;\n  border: 1px solid white;\n  background-color: white;\n  width: 100px;\n  height: 100px;\n  position: absolute;\n  top: 100px;\n  left: -110px;\n  transition: all 0.9s ease-in-out;\n}\n\n.stall-interaction.visible {\n  opacity: 1;\n  transform: translate(0);\n}\n\n.stall-head {\n  height: 70px;\n  width: 100%;\n  box-sizing: border-box;\n  border: 2px solid black;\n  border-radius: 4px;\n  position: absolute;\n  top: 0px;\n  background-color: white;\n}\n\n.stall-head::after,\n.stall-body::after {\n  content: "";\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  top: 0;\n  left: 0;\n}\n\n.active .stall-head::after,\n.active .stall-body::after {\n  display: none;\n}\n\n.stall-support {\n  height: 100px;\n  width: 90%;\n  box-sizing: border-box;\n  border-left: 10px solid brown;\n  border-right: 10px solid brown;\n  position: absolute;\n  top: 70px;\n  left: 5%;\n}\n\n.stall-body {\n  height: 130px;\n  width: 100%;\n  border: 2px solid black;\n  position: absolute;\n  bottom: 0px;\n  background-color: white;\n}\n.image-container {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.logo-container {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.logo-container img {\n  object-fit: contain;\n  width: 100%;\n  height: 100%;\n}\n.image-container img {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n','$walking-man-width: 30400px;\n$walking-man-height: 600px;\n\n$walking-woman-width: 9600px;\n$walking-woman-height: 360px;\n\n.sprite {\n  position: absolute;\n  z-index: 10;\n  bottom: 30px;\n}\n\n.walking-man-wrapper {\n  position: absolute;\n  bottom: 0;\n  transform: translate(-65%, 0);\n}\n\n.walking-man {\n  overflow: hidden;\n}\n\n.walking-man.man {\n  width: 165px;\n  height: 195px;\n}\n\n.walking-man.woman {\n  width: 165px;\n  height: 195px;\n}\n\n.walking-man.man .image-wrapper {\n  width: $walking-man-width;\n  height: $walking-man-height;\n  background-image: url("./assets/walking-man.png");\n  transform: scale(0.3);\n}\n\n.walking-man.woman .image-wrapper {\n  width: $walking-woman-width;\n  height: $walking-woman-height;\n  background-image: url("./assets/walking-woman.png");\n  transform: scale(0.55);\n}\n\n.walking-man .image-wrapper {\n  background-repeat: no-repeat;\n  transform-origin: top left;\n}\n\n.walking-man.man .image-wrapper.walking {\n  background-image: url("./assets/walking-man.png");\n  animation: walk 0.8s steps(38) infinite;\n}\n\n.walking-man.woman .image-wrapper.walking {\n  background-image: url("./assets/walking-woman.png");\n  animation: walkWoman 0.8s steps(20) infinite;\n}\n\n.walking-man.man .walking-reverse {\n  background-image: url("./assets/walking-man-reverse.png") !important;\n  animation: walk 0.8s steps(38) infinite reverse;\n}\n\n.walking-man.woman .walking-reverse {\n  background-image: url("./assets/walking-woman-reverse.png") !important;\n  animation: walkWoman 0.8s steps(20) infinite reverse;\n}\n\n.walking-man.man .reverse-man {\n  background-image: url("./assets/walking-man-reverse.png") !important;\n}\n\n.walking-man.woman .reverse-man {\n  background-image: url("./assets/walking-woman-reverse.png") !important;\n}\n\n@keyframes walk {\n  0% {\n    background-position: 0 0;\n  }\n  100% {\n    background-position: calc($walking-man-width * -1) 0;\n  }\n}\n\n@keyframes walkWoman {\n  0% {\n    background-position: 0 0;\n  }\n  100% {\n    background-position: calc($walking-woman-width * -1) 0;\n  }\n}\n',".character-buttons-wrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -100px;\n  margin-left: -100px;\n  color: white;\n  display: flex;\n  gap: 50px;\n  z-index: 11;\n\n  button {\n    border: none;\n    width: 100px;\n    height: 100px;\n    aspect-ratio: 1;\n    transition: transform 0.1s ease-in;\n\n    img {\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  button:hover {\n    transform: scale(1.1);\n  }\n\n  button:active {\n    transform: scale(1);\n  }\n}\n"],sourceRoot:""}]);const b=g},314:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var s=0;s<this.length;s++){var A=this[s][0];null!=A&&(o[A]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);a&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},417:e=>{"use strict";e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},354:e=>{"use strict";e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),i="/*# ".concat(r," */");return[n].concat([i]).join("\n")}return[n].join("\n")}},72:e=>{"use strict";var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var i={},o=[],s=0;s<e.length;s++){var A=e[s],c=a.base?A[0]+a.base:A[0],l=i[c]||0,p="".concat(c," ").concat(l);i[c]=l+1;var d=t(p),u={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==d)n[d].references++,n[d].updater(u);else{var g=r(u,a);a.byIndex=s,n.splice(s,0,{identifier:p,updater:g,references:1})}o.push(p)}return o}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=a(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=t(i[o]);n[s].references--}for(var A=a(e,r),c=0;c<i.length;c++){var l=t(i[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=A}}},659:e=>{"use strict";var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},540:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},388:(e,n,t)=>{var a={"./bg.svg":703,"./walk.mp3":697,"./walking-man-head.png":268,"./walking-man-reverse.png":338,"./walking-man.png":371,"./walking-woman-head.png":262,"./walking-woman-reverse.png":832,"./walking-woman.png":977};function r(e){return Promise.resolve().then((()=>{if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}var r=a[e];return t.t(r,17)}))}r.keys=()=>Object.keys(a),r.id=388,e.exports=r},703:(e,n,t)=>{"use strict";e.exports=t.p+"f8abac8d2d6abd286cea.svg"},697:(e,n,t)=>{"use strict";e.exports=t.p+"cb17bfed3dfb87d69c05.mp3"},268:(e,n,t)=>{"use strict";e.exports=t.p+"f8b21cb9fd2575c1125f.png"},338:(e,n,t)=>{"use strict";e.exports=t.p+"3f4b6ca8b0fd95e5771f.png"},371:(e,n,t)=>{"use strict";e.exports=t.p+"596f57e4e800cbaf98fe.png"},262:(e,n,t)=>{"use strict";e.exports=t.p+"00c437c8688e87170f8d.png"},832:(e,n,t)=>{"use strict";e.exports=t.p+"ccf2797f859c4ed858b6.png"},977:(e,n,t)=>{"use strict";e.exports=t.p+"50f9d944d44e8f436ba7.png"}},a={};function r(e){var n=a[e];if(void 0!==n)return n.exports;var i=a[e]={id:e,exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(t,a){if(1&a&&(t=this(t)),8&a)return t;if("object"==typeof t&&t){if(4&a&&t.__esModule)return t;if(16&a&&"function"==typeof t.then)return t}var i=Object.create(null);r.r(i);var o={};e=e||[null,n({}),n([]),n(n)];for(var s=2&a&&t;"object"==typeof s&&!~e.indexOf(s);s=n(s))Object.getOwnPropertyNames(s).forEach((e=>o[e]=()=>t[e]));return o.default=()=>t,r.d(i,o),i},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.e=()=>Promise.resolve(),r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var n=r.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");if(t.length)for(var a=t.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=t[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.b=document.baseURI||self.location.href,r.nc=void 0,(()=>{"use strict";var e=r(72),n=r.n(e),t=r(825),a=r.n(t),i=r(659),o=r.n(i),s=r(56),A=r.n(s),c=r(540),l=r.n(c),p=r(113),d=r.n(p),u=r(11),g={};g.styleTagTransform=d(),g.setAttributes=A(),g.insert=o().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=l(),n()(u.A,g),u.A&&u.A.locals&&u.A.locals;var m=r(268),C=r(262);function h(){const e=document.createElement("div");return e.textContent="Discount",e.classList.add("stall-interaction"),e}function w(e="logo",n="banner"){const t=document.createElement("div");t.classList.add("swiper-slide");const a=h(),r=function(e,n){const t=document.createElement("div");t.classList.add("stall-container");const a=document.createElement("div");a.classList.add("stall-head");const r=document.createElement("div");r.classList.add("logo-container");const i=document.createElement("img");i.src=e,r.appendChild(i),a.appendChild(r);const o=document.createElement("div");o.classList.add("stall-support");const s=document.createElement("div");s.classList.add("stall-body");const A=document.createElement("div");A.classList.add("image-container");const c=document.createElement("img");return c.src=n,A.appendChild(c),s.appendChild(A),t.appendChild(a),t.appendChild(o),t.appendChild(s),t}(e,n);t.appendChild(a),t.appendChild(r),document.querySelector(".swiper-wrapper").appendChild(t)}var f=r(697);const b=new Audio(f);function k(){b.play()}function v(){b.pause()}function x(){const e=document.querySelectorAll(".swiper-slide"),n=window.innerWidth;e.forEach((e=>{const t=e.querySelector(".stall-interaction"),a=e.getBoundingClientRect().left,r=n/2;a<r+150&a>r-200?t&&(t.classList.add("visible"),t.parentElement.classList.add("active")):t&&(t.classList.remove("visible"),t.parentElement.classList.remove("active"))}))}function y(e="woman"){const n=document.createElement("div");n.classList.add("sprite");const t=document.createElement("div");t.classList.add("walking-man"),t.classList.add(e.toLowerCase());const a=document.createElement("div");a.classList.add("image-wrapper"),t.appendChild(a),n.appendChild(t),document.querySelector(".main-wrapper").appendChild(n),(()=>{let e,n,t=50,a=5,r=5,i=85,o=0,s=!1,A=null,c=document.querySelector(".walking-man .image-wrapper"),l=document.querySelector(".swiper-container");console.log(l);let p=document.querySelector(".sprite");function d(){s=!1,clearInterval(n),A=null,u()}function u(){clearTimeout(e),e=setTimeout((()=>{console.log("Scrolling has stopped")}),150)}function g(){t>r?(r+=.5,p.setAttribute("style","left:"+r+"%")):(l.scrollLeft+l.clientWidth>l.scrollWidth-1?i>r&&(r+=.5,p.setAttribute("style","left:"+r+"%")):l.scrollLeft=l.scrollLeft+10,t===r&&(o-=10,l.setAttribute("style","background-position:"+o+"px 0"))),c.classList.remove("walking-reverse"),c.classList.remove("reverse-man"),c.classList.add("walking")}function m(){r>t&&i>=r?(r-=.5,p.setAttribute("style","left:"+r+"%")):(l.scrollLeft-=10,0===l.scrollLeft?r>a&&(r-=.5,p.setAttribute("style","left:"+r+"%")):r===t&&(o+=10,o>0&&(o=0),l.setAttribute("style","background-position:"+o+"px 0"))),c.classList.remove("walking"),c.classList.add("reverse-man"),c.classList.add("walking-reverse")}function u(){v(),clearTimeout(e),e=setTimeout((()=>{c.classList.remove("walking-reverse"),c.classList.remove("walking")}),150)}p.setAttribute("style","left:"+r+"%"),document.addEventListener("keydown",(function(e){"ArrowRight"===e.key?(e.preventDefault(),k(),g(),x()):"ArrowLeft"===e.key&&(e.preventDefault(),k(),m(),x())})),document.addEventListener("keyup",(function(e){const n=document.querySelector(".walking-man .image-wrapper");"ArrowRight"===e.key?(v(),n.classList.remove("walking"),n.classList.remove("reverse-man")):"ArrowLeft"===e.key&&(v(),n.classList.remove("walking-reverse"),n.classList.add("reverse-man"))})),l.addEventListener("wheel",(e=>{e.deltaX>0?(e.preventDefault(),g()):e.deltaX<0?(e.preventDefault(),m()):e.deltaY>0?(e.preventDefault(),g()):e.deltaY<0&&(e.preventDefault(),m()),u()})),document.addEventListener("touchstart",(e=>{var t;t=e.touches[0].pageX<window.innerWidth/2?"left":"right",s=!0,A=t,n=setInterval((()=>{"right"===A?g():"left"===A&&m()}),16)})),document.addEventListener("touchend",(e=>{d()})),document.addEventListener("touchcancel",(e=>{d()}))})()}const E=e=>{r(388)("./bg.svg").then((e=>{const n=e.default,t=new Image;t.src=n;const a=document.querySelector(".swiper-wrapper");a.style.backgroundImage=t,a.style.backgroundRepeat="repeat-x",a.style.backgroundSize="cover",a.style.backgroundPosition="center bottom"})).catch((e=>{console.error("error loosing image:",e)}));let n=["https://assets.kfc.com.np/storage/uploads/images/Kfcheaderlogo/63e64b753ab7a.jpg","https://assets-cdn.kantipurdaily.com/uploads/source/ads/fantasy-league-970x120px-1862024113234.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWZJVSSjLlHf2OTmNd5pIh3ZpvemWVs9okZQ&s","https://logos-world.net/wp-content/uploads/2021/10/Suzuki-Symbol.png"],t=["https://assets-cdn.kantipurdaily.com/uploads/source/ads/fantasy-league-970x120px-1862024113234.jpg","https://assets-cdn.ekantipur.com/uploads/source/ads/euro-cup-ad-8col-x-5cm-13-june-2024-1-1462024093042.jpg","https://assets-cdn.ekantipur.com/uploads/source/ads/ekantipur-1200x100-0872024070205.jpg","https://suzuki.com.np/uploads/product/5cfab11ba7f188474a71a0f58a1e6c36.png"];for(let e=0;e<n.length;e++)w(n[e],t[e]);(function(e="<iframe></iframe>"){const n=document.createElement("div");n.classList.add("swiper-slide");const t=h(),a=function(e){const n=document.createElement("div");n.classList.add("stall-container");const t=document.createElement("div");t.classList.add("stall-head"),t.style.height="200px";const a=document.createElement("div");a.classList.add("image-container");const r=document.createElement("iframe");return r.src=e,a.appendChild(r),n.appendChild(t),n.appendChild(a),n}(e);n.appendChild(t),n.appendChild(a),document.querySelector(".swiper-wrapper").appendChild(n)})(),y(e),document.querySelector(".swiper-container").classList.add("visible")};function B(e){const n=document.querySelector(".main-wrapper"),t=document.querySelector(".character-buttons-wrapper");n.classList.add("hide"),t.remove(),setTimeout((()=>{E(e),setTimeout((()=>{n.classList.remove("hide")}),200)}),1500)}document.querySelector(".main-wrapper").appendChild((()=>{const e=document.createElement("div");e.classList.add("character-buttons-wrapper");const n=document.createElement("button");n.setAttribute("id","woman-button"),n.classList.add("character-button");const t=document.createElement("button");t.setAttribute("id","man-button"),t.classList.add("character-button");const a=new Image;a.src=C;const r=new Image;return r.src=m,n.appendChild(a),t.appendChild(r),e.appendChild(n),e.appendChild(t),e})());const L=document.getElementById("man-button"),S=document.getElementById("woman-button");L.addEventListener("click",(()=>{B("man")})),S.addEventListener("click",(()=>{B("woman")}))})()})();
//# sourceMappingURL=app.bundle.js.map