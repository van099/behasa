webpackJsonp([23],{1334:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(46);o.n(n);o(1335),e.default={name:"ContactUs",mounted:function(){this.fill_word()},data:function(){return{lorem:"Lorem ipsum dolor sit amet consectetur adipiscing elit Duis vestibulum tincidunt turpis Etiam eget eleifend elit In et vestibulum ipsum Donec eu convallis urna Pellentesque sit amet accumsan leo Aliquam elementum justo turpis mollis maximus libero faucibus non Vivamus et eros libero",words:[],items:["Sakura","Sunflower","Rose"],input:"Hello",effect:"bounceDown"}},methods:{fill_word:function(){this.words=this.lorem.split(" ")},addItem:function(){this.input&&(this.items.splice(0,0,this.input),this.input=this.words.shift(),this.words.length||(this.words=this.lorem.split(" ")))},reset:function(){this.items=[]}},destroyed:function(){}}},1335:function(t,e,o){var n=o(1336);"string"==typeof n&&(n=[[t.i,n,""]]);var s={transform:void 0};o(564)(n,s);n.locals&&(t.exports=n.locals)},1336:function(t,e){throw new Error("Module build failed: BrowserslistError: Unknown browser query `dead`\n    at error (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\caniuse-api\\node_modules\\browserslist\\index.js:37:11)\n    at C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\caniuse-api\\node_modules\\browserslist\\index.js:222:9\n    at Array.forEach (<anonymous>)\n    at browserslist (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\caniuse-api\\node_modules\\browserslist\\index.js:196:13)\n    at cleanBrowsersList (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\caniuse-api\\dist\\utils.js:56:59)\n    at setBrowserScope (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\caniuse-api\\dist\\index.js:29:43)\n    at Object.<anonymous> (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\caniuse-api\\dist\\index.js:91:1)\n    at Module._compile (internal/modules/cjs/loader.js:1133:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1153:10)\n    at Module.load (internal/modules/cjs/loader.js:977:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:877:14)\n    at Module.require (internal/modules/cjs/loader.js:1019:19)\n    at require (internal/modules/cjs/helpers.js:77:18)\n    at Object.<anonymous> (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss-merge-rules\\dist\\lib\\ensureCompatibility.js:7:19)\n    at Module._compile (internal/modules/cjs/loader.js:1133:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1153:10)\n    at Module.load (internal/modules/cjs/loader.js:977:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:877:14)\n    at Module.require (internal/modules/cjs/loader.js:1019:19)\n    at require (internal/modules/cjs/helpers.js:77:18)\n    at Object.<anonymous> (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss-merge-rules\\dist\\index.js:21:28)\n    at Module._compile (internal/modules/cjs/loader.js:1133:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1153:10)\n    at Module.load (internal/modules/cjs/loader.js:977:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:877:14)\n    at Module.require (internal/modules/cjs/loader.js:1019:19)\n    at require (internal/modules/cjs/helpers.js:77:18)\n    at Object.<anonymous> (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\cssnano\\dist\\index.js:113:26)\n    at Module._compile (internal/modules/cjs/loader.js:1133:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1153:10)")},1337:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-12"},[o("b-card",{staticClass:"bg-primary-card",attrs:{header:"Select an effect","header-tag":"h4"}},[o("div",{staticClass:"row",attrs:{id:"demo"}},[o("div",{staticClass:"col-lg-12"},[o("div",{staticClass:"form-group"},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.effect,expression:"effect"}],staticClass:"form-control",attrs:{name:"effect"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.effect=e.target.multiple?o:o[0]}}},[o("optgroup",{attrs:{label:"Bounce"}},[o("option",{attrs:{value:"bounce"}},[t._v("bounce")]),t._v(" "),o("option",{attrs:{value:"bounceDown"}},[t._v("bounceDown")]),t._v(" "),o("option",{attrs:{value:"bounceLeft"}},[t._v("bounceLeft")]),t._v(" "),o("option",{attrs:{value:"bounceRight"}},[t._v("bounceRight")]),t._v(" "),o("option",{attrs:{value:"bounceUp"}},[t._v("bounceUp")])]),t._v(" "),o("optgroup",{attrs:{label:"Fade"}},[o("option",{attrs:{value:"fade"}},[t._v("fade")]),t._v(" "),o("option",{attrs:{value:"fadeDown"}},[t._v("fadeDown")]),t._v(" "),o("option",{attrs:{value:"fadeDownBig"}},[t._v("fadeDownBig")]),t._v(" "),o("option",{attrs:{value:"fadeLeft"}},[t._v("fadeLeft")]),t._v(" "),o("option",{attrs:{value:"fadeLeftBig"}},[t._v("fadeLeftBig")]),t._v(" "),o("option",{attrs:{value:"fadeRight"}},[t._v("fadeRight")]),t._v(" "),o("option",{attrs:{value:"fadeRightBig"}},[t._v("fadeRightBig")]),t._v(" "),o("option",{attrs:{value:"fadeUp"}},[t._v("fadeUp")]),t._v(" "),o("option",{attrs:{value:"fadeUpBig"}},[t._v("fadeUpBig")])]),t._v(" "),o("optgroup",{attrs:{label:"Rotate"}},[o("option",{attrs:{value:"rotate"}},[t._v("rotate")]),t._v(" "),o("option",{attrs:{value:"rotateDownLeft"}},[t._v("rotateDownLeft")]),t._v(" "),o("option",{attrs:{value:"rotateDownRight"}},[t._v("rotateDownRight")]),t._v(" "),o("option",{attrs:{value:"rotateUpLeft"}},[t._v("rotateUpLeft")]),t._v(" "),o("option",{attrs:{value:"rotateUpRight"}},[t._v("rotateUpRight")])]),t._v(" "),o("optgroup",{attrs:{label:"Slide"}},[o("option",{attrs:{value:"slideDown"}},[t._v("slideDown")]),t._v(" "),o("option",{attrs:{value:"slideLeft"}},[t._v("slideLeft")]),t._v(" "),o("option",{attrs:{value:"slideRight"}},[t._v("slideRight")]),t._v(" "),o("option",{attrs:{value:"slideUp"}},[t._v("slideUp")])]),t._v(" "),o("optgroup",{attrs:{label:"Zoom"}},[o("option",{attrs:{value:"zoom"}},[t._v("zoom")]),t._v(" "),o("option",{attrs:{value:"zoomDown"}},[t._v("zoomDown")]),t._v(" "),o("option",{attrs:{value:"zoomLeft"}},[t._v("zoomLeft")]),t._v(" "),o("option",{attrs:{value:"zoomRight"}},[t._v("zoomRight")]),t._v(" "),o("option",{attrs:{value:"zoomUp"}},[t._v("zoomUp")])])])]),t._v(" "),o("div",{staticClass:"code-sample"},[o("pre",[o("code",[t._v('<transition-group name="'+t._s(t.effect)+'" tag="ul" class="list-group">\n    <li v-for="(item, i) in items" class="list-group-item" v-bind:key="i">'),o("span",{pre:!0},[t._v("{{ item }}")]),t._v("</li>\n</transition-group>")])])])])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-12 mt-5",attrs:{id:"demo-component"}},[o("h4",[t._v("Add some input")]),t._v(" "),o("div",{staticClass:"text-toolbar"},[o("div",{staticClass:"input-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}}),t._v(" "),o("span",{staticClass:"btn-group"},[o("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:t.addItem}},[t._v("Add")]),t._v(" "),o("button",{staticClass:"btn btn-danger text-white",attrs:{type:"button"},on:{click:t.reset}},[t._v("Reset")])])])]),t._v(" "),o("div",{staticClass:"list-box mt-5"},[o("transition-group",{staticClass:"list-group",attrs:{name:t.effect,tag:"ul"}},t._l(t.items,function(e,n){return o("li",{key:e,staticClass:"list-group-item"},[t._v(t._s(e))])}),0)],1)])])])],1)])])},staticRenderFns:[]}},1554:function(t,e,o){var n=o(45)(o(1334),o(1337),!1,null,null,null);t.exports=n.exports},564:function(t,e,o){var n,s,a={},r=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===s&&(s=n.apply(this,arguments)),s}),i=function(t){var e={};return function(t){return void 0===e[t]&&(e[t]=function(t){return document.querySelector(t)}.call(this,t)),e[t]}}(),l=null,u=0,d=[],c=o(565);function p(t,e){for(var o=0;o<t.length;o++){var n=t[o],s=a[n.id];if(s){s.refs++;for(var r=0;r<s.parts.length;r++)s.parts[r](n.parts[r]);for(;r<n.parts.length;r++)s.parts.push(b(n.parts[r],e))}else{var i=[];for(r=0;r<n.parts.length;r++)i.push(b(n.parts[r],e));a[n.id]={id:n.id,refs:1,parts:i}}}}function v(t,e){for(var o=[],n={},s=0;s<t.length;s++){var a=t[s],r=e.base?a[0]+e.base:a[0],i={css:a[1],media:a[2],sourceMap:a[3]};n[r]?n[r].parts.push(i):o.push(n[r]={id:r,parts:[i]})}return o}function f(t,e){var o=i(t.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=d[d.length-1];if("top"===t.insertAt)n?n.nextSibling?o.insertBefore(e,n.nextSibling):o.appendChild(e):o.insertBefore(e,o.firstChild),d.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");o.appendChild(e)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=d.indexOf(t);e>=0&&d.splice(e,1)}function h(t){var e=document.createElement("style");return t.attrs.type="text/css",_(e,t.attrs),f(t,e),e}function _(t,e){Object.keys(e).forEach(function(o){t.setAttribute(o,e[o])})}function b(t,e){var o,n,s,a;if(e.transform&&t.css){if(!(a=e.transform(t.css)))return function(){};t.css=a}if(e.singleton){var r=u++;o=l||(l=h(e)),n=w.bind(null,o,r,!1),s=w.bind(null,o,r,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=function(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",_(e,t.attrs),f(t,e),e}(e),n=function(t,e,o){var n=o.css,s=o.sourceMap,a=void 0===e.convertToAbsoluteUrls&&s;(e.convertToAbsoluteUrls||a)&&(n=c(n));s&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");var r=new Blob([n],{type:"text/css"}),i=t.href;t.href=URL.createObjectURL(r),i&&URL.revokeObjectURL(i)}.bind(null,o,e),s=function(){m(o),o.href&&URL.revokeObjectURL(o.href)}):(o=h(e),n=function(t,e){var o=e.css,n=e.media;n&&t.setAttribute("media",n);if(t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}.bind(null,o),s=function(){m(o)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else s()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=r()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var o=v(t,e);return p(o,e),function(t){for(var n=[],s=0;s<o.length;s++){var r=o[s];(i=a[r.id]).refs--,n.push(i)}t&&p(v(t,e),e);for(s=0;s<n.length;s++){var i;if(0===(i=n[s]).refs){for(var l=0;l<i.parts.length;l++)i.parts[l]();delete a[i.id]}}}};var j,g=(j=[],function(t,e){return j[t]=e,j.filter(Boolean).join("\n")});function w(t,e,o,n){var s=o?"":n.css;if(t.styleSheet)t.styleSheet.cssText=g(e,s);else{var a=document.createTextNode(s),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(a,r[e]):t.appendChild(a)}}},565:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var o=e.protocol+"//"+e.host,n=o+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var s,a=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(a)?t:(s=0===a.indexOf("//")?a:0===a.indexOf("/")?o+a:n+a.replace(/^\.\//,""),"url("+JSON.stringify(s)+")")})}}});