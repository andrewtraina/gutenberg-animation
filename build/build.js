!function(e){var a={};function t(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)t.d(n,i,function(a){return e[a]}.bind(null,i));return n},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=5)}([function(e,a,t){"use strict";e.exports=function(e){var a=[];return a.toString=function(){return this.map((function(a){var t=function(e,a){var t=e[1]||"",n=e[3];if(!n)return t;if(a&&"function"==typeof btoa){var i=(l=n,r=btoa(unescape(encodeURIComponent(JSON.stringify(l)))),m="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(m," */")),o=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[t].concat(o).concat([i]).join("\n")}var l,r,m;return[t].join("\n")}(a,e);return a[2]?"@media ".concat(a[2]," {").concat(t,"}"):t})).join("")},a.i=function(e,t,n){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(n)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(i[l]=!0)}for(var r=0;r<e.length;r++){var m=[].concat(e[r]);n&&i[m[0]]||(t&&(m[2]?m[2]="".concat(t," and ").concat(m[2]):m[2]=t),a.push(m))}},a}},function(e,a,t){var n=t(2),i=t(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};n(i,o);e.exports=i.locals||{}},function(e,a,t){"use strict";var n,i=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},o=function(){var e={};return function(a){if(void 0===e[a]){var t=document.querySelector(a);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[a]=t}return e[a]}}(),l=[];function r(e){for(var a=-1,t=0;t<l.length;t++)if(l[t].identifier===e){a=t;break}return a}function m(e,a){for(var t={},n=[],i=0;i<e.length;i++){var o=e[i],m=a.base?o[0]+a.base:o[0],u=t[m]||0,d="".concat(m," ").concat(u);t[m]=u+1;var s=r(d),c={css:o[1],media:o[2],sourceMap:o[3]};-1!==s?(l[s].references++,l[s].updater(c)):l.push({identifier:d,updater:p(c,a),references:1}),n.push(d)}return n}function u(e){var a=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var i=t.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(e){a.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(a);else{var l=o(e.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(a)}return a}var d,s=(d=[],function(e,a){return d[e]=a,d.filter(Boolean).join("\n")});function c(e,a,t,n){var i=t?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=s(a,i);else{var o=document.createTextNode(i),l=e.childNodes;l[a]&&e.removeChild(l[a]),l.length?e.insertBefore(o,l[a]):e.appendChild(o)}}function f(e,a,t){var n=t.css,i=t.media,o=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var b=null,y=0;function p(e,a){var t,n,i;if(a.singleton){var o=y++;t=b||(b=u(a)),n=c.bind(null,t,o,!1),i=c.bind(null,t,o,!0)}else t=u(a),n=f.bind(null,t,a),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return n(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;n(e=a)}else i()}}e.exports=function(e,a){(a=a||{}).singleton||"boolean"==typeof a.singleton||(a.singleton=i());var t=m(e=e||[],a);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<t.length;n++){var i=r(t[n]);l[i].references--}for(var o=m(e,a),u=0;u<t.length;u++){var d=r(t[u]);0===l[d].references&&(l[d].updater(),l.splice(d,1))}t=o}}}},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n)()(!1);i.push([e.i,".animated.delay-100ms{-webkit-animation-delay:100ms;animation-delay:100ms}.animated.delay-200ms{-webkit-animation-delay:200ms;animation-delay:200ms}.animated.delay-300ms{-webkit-animation-delay:300ms;animation-delay:300ms}.animated.delay-400ms{-webkit-animation-delay:400ms;animation-delay:400ms}.animated.delay-500ms{-webkit-animation-delay:500ms;animation-delay:500ms}.animated.delay-600ms{-webkit-animation-delay:600ms;animation-delay:600ms}.animated.delay-700ms{-webkit-animation-delay:700ms;animation-delay:700ms}.animated.delay-800ms{-webkit-animation-delay:800ms;animation-delay:800ms}.animated.delay-900ms{-webkit-animation-delay:900ms;animation-delay:900ms}.animated.delay-1000ms{-webkit-animation-delay:1000ms;animation-delay:1000ms}.animated.delay-1100ms{-webkit-animation-delay:1100ms;animation-delay:1100ms}.animated.delay-1200ms{-webkit-animation-delay:1200ms;animation-delay:1200ms}.animated.delay-1300ms{-webkit-animation-delay:1300ms;animation-delay:1300ms}.animated.delay-1400ms{-webkit-animation-delay:1400ms;animation-delay:1400ms}.animated.delay-1500ms{-webkit-animation-delay:1500ms;animation-delay:1500ms}.animated.delay-1600ms{-webkit-animation-delay:1600ms;animation-delay:1600ms}.animated.delay-1700ms{-webkit-animation-delay:1700ms;animation-delay:1700ms}.animated.delay-1800ms{-webkit-animation-delay:1800ms;animation-delay:1800ms}.animated.delay-1900ms{-webkit-animation-delay:1900ms;animation-delay:1900ms}.animated.delay-2000ms{-webkit-animation-delay:2000ms;animation-delay:2000ms}.animated.delay-2100ms{-webkit-animation-delay:2100ms;animation-delay:2100ms}.animated.delay-2200ms{-webkit-animation-delay:2200ms;animation-delay:2200ms}.animated.delay-2300ms{-webkit-animation-delay:2300ms;animation-delay:2300ms}.animated.delay-2400ms{-webkit-animation-delay:2400ms;animation-delay:2400ms}.animated.delay-2500ms{-webkit-animation-delay:2500ms;animation-delay:2500ms}.animated.delay-2600ms{-webkit-animation-delay:2600ms;animation-delay:2600ms}.animated.delay-2700ms{-webkit-animation-delay:2700ms;animation-delay:2700ms}.animated.delay-2800ms{-webkit-animation-delay:2800ms;animation-delay:2800ms}.animated.delay-2900ms{-webkit-animation-delay:2900ms;animation-delay:2900ms}.animated.delay-3000ms{-webkit-animation-delay:3000ms;animation-delay:3000ms}.animated.delay-3100ms{-webkit-animation-delay:3100ms;animation-delay:3100ms}.animated.delay-3200ms{-webkit-animation-delay:3200ms;animation-delay:3200ms}.animated.delay-3300ms{-webkit-animation-delay:3300ms;animation-delay:3300ms}.animated.delay-3400ms{-webkit-animation-delay:3400ms;animation-delay:3400ms}.animated.delay-3500ms{-webkit-animation-delay:3500ms;animation-delay:3500ms}.animated.delay-3600ms{-webkit-animation-delay:3600ms;animation-delay:3600ms}.animated.delay-3700ms{-webkit-animation-delay:3700ms;animation-delay:3700ms}.animated.delay-3800ms{-webkit-animation-delay:3800ms;animation-delay:3800ms}.animated.delay-3900ms{-webkit-animation-delay:3900ms;animation-delay:3900ms}.animated.delay-4000ms{-webkit-animation-delay:4000ms;animation-delay:4000ms}.animated.delay-4100ms{-webkit-animation-delay:4100ms;animation-delay:4100ms}.animated.delay-4200ms{-webkit-animation-delay:4200ms;animation-delay:4200ms}.animated.delay-4300ms{-webkit-animation-delay:4300ms;animation-delay:4300ms}.animated.delay-4400ms{-webkit-animation-delay:4400ms;animation-delay:4400ms}.animated.delay-4500ms{-webkit-animation-delay:4500ms;animation-delay:4500ms}.animated.delay-4600ms{-webkit-animation-delay:4600ms;animation-delay:4600ms}.animated.delay-4700ms{-webkit-animation-delay:4700ms;animation-delay:4700ms}.animated.delay-4800ms{-webkit-animation-delay:4800ms;animation-delay:4800ms}.animated.delay-4900ms{-webkit-animation-delay:4900ms;animation-delay:4900ms}.animated.delay-5000ms{-webkit-animation-delay:5000ms;animation-delay:5000ms}.animated.duration-250ms{-webkit-animation-duration:250ms;animation-duration:250ms}.animated.duration-500ms{-webkit-animation-duration:500ms;animation-duration:500ms}.animated.duration-750ms{-webkit-animation-duration:750ms;animation-duration:750ms}.animated.duration-1000ms{-webkit-animation-duration:1000ms;animation-duration:1000ms}.animated.duration-1250ms{-webkit-animation-duration:1250ms;animation-duration:1250ms}.animated.duration-1500ms{-webkit-animation-duration:1500ms;animation-duration:1500ms}.animated.duration-1750ms{-webkit-animation-duration:1750ms;animation-duration:1750ms}.animated.duration-2000ms{-webkit-animation-duration:2000ms;animation-duration:2000ms}.animated.duration-2250ms{-webkit-animation-duration:2250ms;animation-duration:2250ms}.animated.duration-2500ms{-webkit-animation-duration:2500ms;animation-duration:2500ms}.animated.duration-2750ms{-webkit-animation-duration:2750ms;animation-duration:2750ms}.animated.duration-3000ms{-webkit-animation-duration:3000ms;animation-duration:3000ms}.animated.duration-3250ms{-webkit-animation-duration:3250ms;animation-duration:3250ms}.animated.duration-3500ms{-webkit-animation-duration:3500ms;animation-duration:3500ms}.animated.duration-3750ms{-webkit-animation-duration:3750ms;animation-duration:3750ms}.animated.duration-4000ms{-webkit-animation-duration:4000ms;animation-duration:4000ms}.animated.duration-4250ms{-webkit-animation-duration:4250ms;animation-duration:4250ms}.animated.duration-4500ms{-webkit-animation-duration:4500ms;animation-duration:4500ms}.animated.duration-4750ms{-webkit-animation-duration:4750ms;animation-duration:4750ms}.animated.duration-5000ms{-webkit-animation-duration:5000ms;animation-duration:5000ms}",""]),a.default=i},,function(e,a,t){"use strict";function n(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}t.r(a);var i,o=wp.i18n.__,l=[{label:o("None"),value:"none"},{label:o("Bounce"),value:"bounce"},{label:o("Bounce In"),value:"bounceIn"},{label:o("Bounce In Down"),value:"bounceInDown"},{label:o("Bounce In Left"),value:"bounceInLeft"},{label:o("Bounce In Right"),value:"bounceInRight"},{label:o("Bounce In Up"),value:"bounceInUp"},{label:o("Bounce Out"),value:"bounceOut"},{label:o("Bounce Out Down"),value:"bounceOutDown"},{label:o("Bounce Out Left"),value:"bounceOutLeft"},{label:o("Bounce Out Right"),value:"bounceOutRight"},{label:o("Bounce Out Up"),value:"bounceOutUp"},{label:o("Fade In"),value:"fadeIn"},{label:o("Fade In Down"),value:"fadeInDown"},{label:o("Fade In Down Big"),value:"fadeInDownBig"},{label:o("Fade In Left"),value:"fadeInLeft"},{label:o("Fade In Left Big"),value:"fadeInLeftBig"},{label:o("Fade In Right"),value:"fadeInRight"},{label:o("Fade In Right Big"),value:"fadeInRightBig"},{label:o("Fade In Up"),value:"fadeInUp"},{label:o("Fade Out"),value:"fadeOut"},{label:o("Fade Out Down"),value:"fadeOutDown"},{label:o("Fade Out Down Big"),value:"fadeOutDownBig"},{label:o("Fade Out Left"),value:"fadeOutLeft"},{label:o("Fade Out Left Big"),value:"fadeOutLeftBig"},{label:o("Fade Out Right"),value:"fadeOutRight"},{label:o("Fade Out Right Big"),value:"fadeOutRightBig"},{label:o("Fade Out Up"),value:"fadeOutUp"},{label:o("Fade Out Up Big"),value:"fadeOutUpBig"},{label:o("Flip"),value:"flip"},{label:o("Flip In X"),value:"flipInX"},{label:o("Flip In Y"),value:"flipInY"},{label:o("Flip Out X"),value:"flipOutX"},{label:o("Flip Out Y"),value:"flipOutY"},{label:o("Rotate In"),value:"rotateIn"},{label:o("Rotate In Down Left"),value:"rotateInDownLeft"},{label:o("Rotate In Down Right"),value:"rotateInDownRight"},{label:o("Rotate In Up Left"),value:"rotateInUpLeft"},{label:o("Rotate In Up Right"),value:"rotateInUpRight"},{label:o("Rotate Out"),value:"rotateOut"},{label:o("Rotate Out Down Left"),value:"rotateOutDownLeft"},{label:o("Rotate Out Down Right"),value:"rotateOutDownRight"},{label:o("Rotate Out Up Left"),value:"rotateOutUpLeft"},{label:o("Rotate Out Up Right"),value:"rotateOutUpRight"},{label:o("Slide In Down"),value:"slideInDown"},{label:o("Slide In Left"),value:"slideInLeft"},{label:o("Slide In Right"),value:"slideInRight"},{label:o("Slide In Up"),value:"slideInUp"},{label:o("Slide Out Down"),value:"slideOutDown"},{label:o("Slide Out Left"),value:"slideOutLeft"},{label:o("Slide Out Right"),value:"slideOutRight"},{label:o("Slide Out Up"),value:"slideOutUp"},{label:o("Zoom In"),value:"zoomIn"},{label:o("Zoom In Down"),value:"zoomInDown"},{label:o("Zoom In Left"),value:"zoomInLeft"},{label:o("Zoom In Right"),value:"zoomInRight"},{label:o("Zoom In Up"),value:"zoomInUp"},{label:o("Zoom Out"),value:"zoomOut"},{label:o("Zoom Out Down"),value:"zoomOutDown"},{label:o("Zoom Out Left"),value:"zoomOutLeft"},{label:o("Zoom Out Right"),value:"zoomOutRight"},{label:o("Zoom Out Up"),value:"zoomOutUp"},{label:o("Roll In"),value:"rollIn"},{label:o("Roll Out"),value:"rollOut"},{label:o("Light Speed In"),value:"lightSpeedIn"},{label:o("Light Speed Out"),value:"lightSpeedOut"},{label:o("Flash"),value:"flash"},{label:o("Pulse"),value:"pulse"},{label:o("Rubber Band"),value:"rubberBand"},{label:o("Shake"),value:"shake"},{label:o("Head Shake"),value:"headShake"},{label:o("Swing"),value:"swing"},{label:o("TaDa"),value:"tada"},{label:o("Wobble"),value:"wobble"},{label:o("Jello"),value:"jello"},{label:o("Heart Beat"),value:"heartBeat"},{label:o("Hinge"),value:"hinge"},{label:o("Jack In The Box"),value:"jackInTheBox"}],r=[{label:"Bouncing",value:"bounce"},{label:"Fading",value:"fadeIn"},{label:"Flipping",value:"flip"},{label:"Rotating",value:"rotateIn"},{label:"Sliding",value:"slideInDown"},{label:"Zooming",value:"zoomIn"},{label:"Rolling",value:"rollIn"},{label:"Other",value:"lightSpeedIn"}],m=["bounceOut","bounceOutDown","bounceOutLeft","bounceOutRight","bounceOutUp","fadeOut","fadeOutDown","fadeOutDownBig","fadeOutLeft","fadeOutLeftBig","fadeOutRight","fadeOutRightBig","fadeOutUp","fadeOutUpBig","flipOutX","flipOutY","lightSpeedOut","rotateOut","rotateOutDownLeft","rotateOutDownRight","rotateOutUpLeft","rotateOutUpRight","slideOutDown","slideOutLeft","slideOutRight","slideOutUp","zoomOut","zoomOutDown","zoomOutLeft","zoomOutRight","zoomOutUp","rollOut"],u=Array.from({length:51},(function(e,a){return 100*a})).map((function(e,a){return{label:o(e?"".concat(e," Milliseconds"):"None"),value:e?"delay-".concat(e,"ms"):"none"}})),d=["none","slow","slower","fast","faster"].concat((i=Array.from({length:21},(function(e,a){return 250*a})),function(e){if(Array.isArray(e))return n(e)}(i)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(i)||function(e,a){if(e){if("string"==typeof e)return n(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,a):void 0}}(i)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())).map((function(e,a){return{label:o("number"==typeof e?"".concat(e," Milliseconds"):e.charAt(0).toUpperCase()+e.slice(1)),value:"number"==typeof e?"duration-".concat(e,"ms"):e}}));function s(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,i=!1,o=void 0;try{for(var l,r=e[Symbol.iterator]();!(n=(l=r.next()).done)&&(t.push(l.value),!a||t.length!==a);n=!0);}catch(e){i=!0,o=e}finally{try{n||null==r.return||r.return()}finally{if(i)throw o}}return t}(e,a)||function(e,a){if(!e)return;if("string"==typeof e)return c(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}var f=wp.i18n.__,b=wp.components,y=b.BaseControl,p=b.Button,v=b.Dropdown,w=b.MenuGroup,h=b.MenuItem,g=b.TextControl,O=wp.compose.useInstanceId,I=wp.element,k=I.Fragment,S=I.useState;var R=function e(a){var t=a.animationsList,n=a.updateAnimation,i=a.currentAnimationLabel,o=a.setCurrentAnimationLabel,l=O(e),m=s(S(""),2),u=m[0],d=m[1],c=s(S(!1),2),b=c[0],I=c[1],R="inspector-themeisle-animations-control-".concat(l);return wp.element.createElement(y,{label:f("Animation"),id:R},wp.element.createElement(v,{contentClassName:"themeisle-animations-control__popover",position:"bottom center",renderToggle:function(e){var a=e.isOpen,t=e.onToggle;return wp.element.createElement(p,{isLarge:!0,className:"themeisle-animations-control__button",id:R,onClick:t,"aria-expanded":a},i)},renderContent:function(e){var a=e.onToggle;return wp.element.createElement(w,{label:f("Animations")},wp.element.createElement(g,{placeholder:f("Search"),value:u,onChange:function(e){d(e),I(!1)}}),wp.element.createElement("div",{className:"components-popover__items"},t.map((function(e){return wp.element.createElement(k,null,""===u&&r.map((function(a){return a.value===e.value?wp.element.createElement("div",{className:"themeisle-animations-control__category"},a.label):""})),function(e,a){var t=!0;u&&u.toLowerCase().split(" ").forEach((function(a){e.label.toLowerCase().includes(a)||(t=!1)}));return t&&!b&&I(!0),t&&wp.element.createElement(h,{className:i===e.label?"is-selected":"",onClick:function(){o(e.label),n(e.value),a()}},e.label)}(e,a))})),!b&&wp.element.createElement("div",null,f("Nothing found. Try searching for something else!"))))}}))};function L(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,i=!1,o=void 0;try{for(var l,r=e[Symbol.iterator]();!(n=(l=r.next()).done)&&(t.push(l.value),!a||t.length!==a);n=!0);}catch(e){i=!0,o=e}finally{try{n||null==r.return||r.return()}finally{if(i)throw o}}return t}(e,a)||function(e,a){if(!e)return;if("string"==typeof e)return B(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return B(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}var U=wp.i18n.__,A=wp.components.SelectControl,D=wp.element,j=D.Fragment,E=D.useState,C=D.useEffect;var F=function(e){var a=e.attributes,t=e.clientId,n=e.setAttributes;C((function(){var e;if(a.className){e=(e=a.className).split(" ");var t=Array.from(l).find((function(a){return e.find((function(e){return e===a.value}))})),n=Array.from(u).find((function(a){return e.find((function(e){return e===a.value}))})),i=Array.from(d).find((function(a){return e.find((function(e){return e===a.value}))}));r(t?t.value:"none"),f(n?n.value:"default"),p(i?i.value:"default"),h(t?t.label:"none")}}),[]);var i=L(E("none"),2),o=i[0],r=i[1],s=L(E("default"),2),c=s[0],f=s[1],b=L(E("default"),2),y=b[0],p=b[1],v=L(E("none"),2),w=v[0],h=v[1];return wp.element.createElement("div",{className:"themeisle-animations-control"},wp.element.createElement(R,{animationsList:l,updateAnimation:function(e){var i,l="none"!==e?e:"";if(a.className){var u=(i=(i=a.className).split(" ")).find((function(e){return e===o}));i.find((function(e){return"animated"===e}))||i.push("animated"),u?i=i.join(" ").replace(o,l):(i.push(l),i=i.join(" "))}else i="animated ".concat(l);"none"===e&&(i=i.replace("animated","").replace(c,"").replace(y,""),f("default"),p("default")),""===(i=i.replace(/\s+/g," ").trim())&&(i=void 0),r(e),n({className:i});var d=document.querySelector("#block-".concat(t," .animated"));d&&m.forEach((function(e){d.className.includes(e)&&d.addEventListener("animationend",(function(){d.classList.remove(e),d.addEventListener("animationstart",(function(){d.classList.remove(e)}))}))}))},currentAnimationLabel:w,setCurrentAnimationLabel:h}),"none"!==o&&wp.element.createElement(j,null,wp.element.createElement(A,{label:U("Delay"),value:c||"default",options:u,onChange:function(e){var t,i="none"!==e?e:"";a.className?(t=(t=a.className).split(" ")).find((function(e){return e===c}))?t=t.join(" ").replace(c,i):(t.push(i),t=t.join(" ")):t=i;t=t.replace(/\s+/g," "),f(e),n({className:t})}}),wp.element.createElement(A,{label:U("Speed"),value:y||"default",options:d,onChange:function(e){var t,i="none"!==e?e:"";a.className?(t=(t=a.className).split(" ")).find((function(e){return e===y}))?t=t.join(" ").replace(y,i):(t.push(i),t=t.join(" ")):t=i;t=t.replace(/\s+/g," "),p(e),n({className:t})}})))},N=(t(1),wp.i18n.__),_=wp.blocks.hasBlockSupport,M=wp.components.PanelBody,T=wp.compose.createHigherOrderComponent,x=(wp.blockEditor||wp.editor).InspectorControls,z=wp.element.Fragment;(0,wp.hooks.addFilter)("editor.BlockEdit","themeisle-custom-css/with-inspector-controls",T((function(e){return function(a){return _(a.name,"customClassName",!0)&&a.isSelected?wp.element.createElement(z,null,wp.element.createElement(e,a),wp.element.createElement(x,null,wp.element.createElement(M,{title:N("Animations"),initialOpen:!1},wp.element.createElement(F,{clientId:a.clientId,setAttributes:a.setAttributes,attributes:a.attributes})))):wp.element.createElement(e,a)}}),"withInspectorControl"))}]);