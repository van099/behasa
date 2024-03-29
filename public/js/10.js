webpackJsonp([10],{

/***/ 1118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function __$styleInject(t,e){if("undefined"==typeof document)return e;t=t||"";var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");return a.type="text/css",i.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t)),e}function $(t,e){return"string"==typeof t?(e||document).querySelector(t):t||null}function offset(t){var e=t.getBoundingClientRect();return{top:e.top+(document.documentElement.scrollTop||document.body.scrollTop),left:e.left+(document.documentElement.scrollLeft||document.body.scrollLeft)}}function isElementInViewport(t){var e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)}function getElementContentWidth(t){var e=window.getComputedStyle(t),i=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight);return t.clientWidth-i}function getBarHeightAndYAttr(t,e,i){var a=void 0,s=void 0;return t<=e?(s=t,0===(a=e-t)&&(s-=a=.01*i)):(s=e,0===(a=t-e)&&(a=.01*i)),[a,s]}function $$1(t,e){return"string"==typeof t?(e||document).querySelector(t):t||null}function createSVG(t,e){var i=document.createElementNS("http://www.w3.org/2000/svg",t);for(var a in e){var s=e[a];if("inside"===a)$$1(s).appendChild(i);else if("around"===a){var n=$$1(s);n.parentNode.insertBefore(i,n),i.appendChild(n)}else"styles"===a?"object"===(void 0===s?"undefined":_typeof(s))&&Object.keys(s).map(function(t){i.style[t]=s[t]}):("className"===a&&(a="class"),"innerHTML"===a?i.textContent=s:i.setAttribute(a,s))}return i}function renderVerticalGradient(t,e){return createSVG("linearGradient",{inside:t,id:e,x1:0,x2:0,y1:0,y2:1})}function setGradientStop(t,e,i,a){return createSVG("stop",{inside:t,style:"stop-color: "+i,offset:e,"stop-opacity":a})}function makeSVGContainer(t,e,i,a){return createSVG("svg",{className:e,inside:t,width:i,height:a})}function makeSVGDefs(t){return createSVG("defs",{inside:t})}function makeSVGGroup(t,e){return createSVG("g",{className:e,inside:t,transform:arguments.length>2&&void 0!==arguments[2]?arguments[2]:""})}function makePath(t){return createSVG("path",{className:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",d:t,styles:{stroke:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"none",fill:arguments.length>3&&void 0!==arguments[3]?arguments[3]:"none"}})}function makeGradient(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a="path-fill-gradient-"+e,s=renderVerticalGradient(t,a),n=[1,.6,.2];return i&&(n=[.4,.2,0]),setGradientStop(s,"0%",e,n[0]),setGradientStop(s,"50%",e,n[1]),setGradientStop(s,"100%",e,n[2]),a}function makeHeatSquare(t,e,i,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"none",n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},r={className:t,x:e,y:i,width:a,height:a,fill:s};return Object.keys(n).map(function(t){r[t]=n[t]}),createSVG("rect",r)}function makeText(t,e,i,a){return createSVG("text",{className:t,x:e,y:i,dy:".32em",innerHTML:a})}function makeXLine(t,e,i,a,s,n){var r=createSVG("line",{x1:0,x2:0,y1:0,y2:t}),o=createSVG("text",{className:a,x:0,y:e,dy:".71em",innerHTML:i}),l=createSVG("g",{className:"tick "+s,transform:"translate("+n+", 0)"});return l.appendChild(r),l.appendChild(o),l}function makeYLine(t,e,i,a,s,n,r){var o=arguments.length>7&&void 0!==arguments[7]&&arguments[7],l=createSVG("line",{className:"dashed"===(arguments.length>8&&void 0!==arguments[8]?arguments[8]:"")?"dashed":"",x1:t,x2:e,y1:0,y2:0}),h=createSVG("text",{className:s,x:i,y:0,dy:".32em",innerHTML:a+""}),u=createSVG("g",{className:"tick "+n,transform:"translate(0, "+r+")","stroke-opacity":1});return o&&(l.style.stroke="rgba(27, 31, 35, 0.6)"),u.appendChild(l),u.appendChild(h),u}function animateSVG(t,e,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"linear",s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0,n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},r=t.cloneNode(!0),o=t.cloneNode(!0);for(var l in e){var h=void 0;h="transform"===l?document.createElementNS("http://www.w3.org/2000/svg","animateTransform"):document.createElementNS("http://www.w3.org/2000/svg","animate");var u=n[l]||t.getAttribute(l),c=e[l],p={attributeName:l,from:u,to:c,begin:"0s",dur:i/1e3+"s",values:u+";"+c,keySplines:EASING[a],keyTimes:"0;1",calcMode:"spline",fill:"freeze"};s&&(p.type=s);for(var _ in p)h.setAttribute(_,p[_]);r.appendChild(h),s?o.setAttribute(l,"translate("+c+")"):o.setAttribute(l,c)}return[r,o]}function transform(t,e){t.style.transform=e,t.style.webkitTransform=e,t.style.msTransform=e,t.style.mozTransform=e,t.style.oTransform=e}function runSVGAnimation(t,e){var i=[],a=[];e.map(function(t){var e=t[0],s=e.unit.parentNode,n=void 0,r=void 0;t[0]=e.unit;var o=animateSVG.apply(void 0,toConsumableArray(t)),l=slicedToArray(o,2);n=l[0],r=l[1],i.push(r),a.push([n,s]),s.replaceChild(n,e.unit),e.array?e.array[e.index]=r:e.object[e.key]=r});var s=t.cloneNode(!0);return a.map(function(t,a){t[1].replaceChild(i[a],t[0]),e[a][0]=i[a]}),s}function normalize(t){if(0===t)return[0,0];if(isNaN(t))return{mantissa:-6755399441055744,exponent:972};var e=t>0?1:-1;if(!isFinite(t))return{mantissa:4503599627370496*e,exponent:972};t=Math.abs(t);var i=Math.floor(Math.log10(t));return[e*(t/Math.pow(10,i)),i]}function getRangeIntervals(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=Math.ceil(t),a=Math.floor(e),s=i-a,n=s,r=1;s>5&&(s%2!=0&&(s=++i-a),n=s/2,r=2),s<=2&&(r=s/(n=4)),0===s&&(n=5,r=1);for(var o=[],l=0;l<=n;l++)o.push(a+r*l);return o}function getIntervals(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=normalize(t),a=slicedToArray(i,2),s=a[0],n=a[1],r=e?e/Math.pow(10,n):0,o=getRangeIntervals(s=s.toFixed(6),r);return o=o.map(function(t){return t*Math.pow(10,n)})}function calcIntervals(t){function e(t,e){for(var i=getIntervals(t),a=i[1]-i[0],s=0,n=1;s<e;n++)s+=a,i.unshift(-1*s);return i}var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=Math.max.apply(Math,toConsumableArray(t)),s=Math.min.apply(Math,toConsumableArray(t)),n=[];if(a>=0&&s>=0)normalize(a)[1],n=i?getIntervals(a,s):getIntervals(a);else if(a>0&&s<0){var r=Math.abs(s);a>=r?(normalize(a)[1],n=e(a,r)):(normalize(r)[1],n=e(r,a).map(function(t){return-1*t}))}else if(a<=0&&s<=0){var o=Math.abs(s),l=Math.abs(a);normalize(o)[1],n=(n=i?getIntervals(o,l):getIntervals(o)).reverse().map(function(t){return-1*t})}return n}function calcDistribution(t,e){for(var i=Math.max.apply(Math,toConsumableArray(t)),a=1/(e-1),s=[],n=0;n<e;n++){var r=i*(a*n);s.push(r)}return s}function getMaxCheckpoint(t,e){return e.filter(function(e){return e<t}).length}function floatTwo(t){return parseFloat(t.toFixed(2))}function arraysEqual(t,e){if(t.length!==e.length)return!1;var i=!0;return t.map(function(t,a){e[a]!==t&&(i=!1)}),i}function getStringWidth(t,e){return(t+"").length*e}function limitColor(t){return t>255?255:t<0?0:t}function lightenDarkenColor(t,e){var i=getColor(t),a=!1;"#"==i[0]&&(i=i.slice(1),a=!0);var s=parseInt(i,16),n=limitColor((s>>16)+e),r=limitColor((s>>8&255)+e),o=limitColor((255&s)+e);return(a?"#":"")+(o|r<<8|n<<16).toString(16)}function isValidColor(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)}function treatAsUtc(t){var e=new Date(t);return e.setMinutes(e.getMinutes()-e.getTimezoneOffset()),e}function getDdMmYyyy(t){var e=t.getDate(),i=t.getMonth()+1;return[(e>9?"":"0")+e,(i>9?"":"0")+i,t.getFullYear()].join("-")}function getWeeksBetween(t,e){return Math.ceil(getDaysBetween(t,e)/7)}function getDaysBetween(t,e){return(treatAsUtc(e)-treatAsUtc(t))/864e5}function addDays(t,e){t.setDate(t.getDate()+e)}function getChartByType(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"line",e=arguments[1];return chartTypes[t]?new chartTypes[t](e):new LineChart(e)}__$styleInject('.chart-container{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}.chart-container .graph-focus-margin{margin:0 5%}.chart-container>.title{margin-top:25px;margin-left:25px;text-align:left;font-weight:400;font-size:12px;color:#6c7680}.chart-container .graphics{margin-top:10px;padding-top:10px;padding-bottom:10px;position:relative}.chart-container .graph-stats-group{-ms-flex-pack:distribute;-webkit-box-flex:1;-ms-flex:1;flex:1}.chart-container .graph-stats-container,.chart-container .graph-stats-group{display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:space-around}.chart-container .graph-stats-container{-ms-flex-pack:distribute;padding-top:10px}.chart-container .graph-stats-container .stats{padding-bottom:15px}.chart-container .graph-stats-container .stats-title{color:#8d99a6}.chart-container .graph-stats-container .stats-value{font-size:20px;font-weight:300}.chart-container .graph-stats-container .stats-description{font-size:12px;color:#8d99a6}.chart-container .graph-stats-container .graph-data .stats-value{color:#98d85b}.chart-container .axis,.chart-container .chart-label{font-size:11px;fill:#555b51}.chart-container .axis line,.chart-container .chart-label line{stroke:#dadada}.chart-container .percentage-graph .progress{margin-bottom:0}.chart-container .data-points circle{stroke:#fff;stroke-width:2}.chart-container .path-group path{fill:none;stroke-opacity:1;stroke-width:2px}.chart-container line.dashed{stroke-dasharray:5,3}.chart-container .tick.x-axis-label{display:block}.chart-container .tick .specific-value{text-anchor:start}.chart-container .tick .y-value-text{text-anchor:end}.chart-container .tick .x-value-text{text-anchor:middle}.chart-container .progress{height:20px;margin-bottom:20px;overflow:hidden;background-color:#f5f5f5;border-radius:4px;-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);box-shadow:inset 0 1px 2px rgba(0,0,0,.1)}.chart-container .progress-bar{float:left;width:0;height:100%;font-size:12px;line-height:20px;color:#fff;text-align:center;background-color:#36414c;-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);-webkit-transition:width .6s ease;transition:width .6s ease}.chart-container .graph-svg-tip{position:absolute;z-index:1;padding:10px;font-size:12px;color:#959da5;text-align:center;background:rgba(0,0,0,.8);border-radius:3px}.chart-container .graph-svg-tip ol,.chart-container .graph-svg-tip ul{padding-left:0;display:-webkit-box;display:-ms-flexbox;display:flex}.chart-container .graph-svg-tip ul.data-point-list li{min-width:90px;-webkit-box-flex:1;-ms-flex:1;flex:1;font-weight:600}.chart-container .graph-svg-tip strong{color:#dfe2e5;font-weight:600}.chart-container .graph-svg-tip .svg-pointer{position:absolute;height:5px;margin:0 0 0 -5px;content:" ";border:5px solid transparent;border-top-color:rgba(0,0,0,.8)}.chart-container .graph-svg-tip.comparison{padding:0;text-align:left;pointer-events:none}.chart-container .graph-svg-tip.comparison .title{display:block;padding:10px;margin:0;font-weight:600;line-height:1;pointer-events:none}.chart-container .graph-svg-tip.comparison ul{margin:0;white-space:nowrap;list-style:none}.chart-container .graph-svg-tip.comparison li{display:inline-block;padding:5px 10px}.chart-container .indicator,.chart-container .indicator-right{background:none;font-size:12px;vertical-align:middle;font-weight:700;color:#6c7680}.chart-container .indicator i{content:"";display:inline-block;height:8px;width:8px;border-radius:8px}.chart-container .indicator:before,.chart-container .indicator i{margin:0 4px 0 0}.chart-container .indicator-right:after{margin:0 0 0 4px}',void 0);var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},asyncGenerator=function(){function t(t){this.value=t}function e(e){function i(t,e){return new Promise(function(i,s){var o={key:t,arg:e,resolve:i,reject:s,next:null};r?r=r.next=o:(n=r=o,a(t,e))})}function a(i,n){try{var r=e[i](n),o=r.value;o instanceof t?Promise.resolve(o.value).then(function(t){a("next",t)},function(t){a("throw",t)}):s(r.done?"return":"normal",r.value)}catch(t){s("throw",t)}}function s(t,e){switch(t){case"return":n.resolve({value:e,done:!0});break;case"throw":n.reject(e);break;default:n.resolve({value:e,done:!1})}(n=n.next)?a(n.key,n.arg):r=null}var n,r;this._invoke=i,"function"!=typeof e.return&&(this.return=void 0)}return"function"==typeof Symbol&&Symbol.asyncIterator&&(e.prototype[Symbol.asyncIterator]=function(){return this}),e.prototype.next=function(t){return this._invoke("next",t)},e.prototype.throw=function(t){return this._invoke("throw",t)},e.prototype.return=function(t){return this._invoke("return",t)},{wrap:function(t){return function(){return new e(t.apply(this,arguments))}},await:function(e){return new t(e)}}}(),classCallCheck=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),get=function t(e,i,a){null===e&&(e=Function.prototype);var s=Object.getOwnPropertyDescriptor(e,i);if(void 0===s){var n=Object.getPrototypeOf(e);return null===n?void 0:t(n,i,a)}if("value"in s)return s.value;var r=s.get;if(void 0!==r)return r.call(a)},inherits=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},possibleConstructorReturn=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},slicedToArray=function(){function t(t,e){var i=[],a=!0,s=!1,n=void 0;try{for(var r,o=t[Symbol.iterator]();!(a=(r=o.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){s=!0,n=t}finally{try{!a&&o.return&&o.return()}finally{if(s)throw n}}return i}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),toConsumableArray=function(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)};$.create=function(t,e){var i=document.createElement(t);for(var a in e){var s=e[a];if("inside"===a)$(s).appendChild(i);else if("around"===a){var n=$(s);n.parentNode.insertBefore(i,n),i.appendChild(n)}else"styles"===a?"object"===(void 0===s?"undefined":_typeof(s))&&Object.keys(s).map(function(t){i.style[t]=s[t]}):a in i?i[a]=s:i.setAttribute(a,s)}return i},$.bind=function(t,e){if(t)for(var i in e){var a=e[i];i.split(/\s+/).forEach(function(e){t.addEventListener(e,a)})}},$.unbind=function(t,e){if(t)for(var i in e){var a=e[i];i.split(/\s+/).forEach(function(e){t.removeEventListener(e,a)})}},$.fire=function(t,e,i){var a=document.createEvent("HTMLEvents");a.initEvent(e,!0,!0);for(var s in i)a[s]=i[s];return t.dispatchEvent(a)};var UnitRenderer=function(){var t=function(t,e,i){this.totalHeight=t,this.zeroLine=e,this.avgUnitWidth=i};return t.prototype={bar:function(t,e,i,a,s,n,r){var o=this.avgUnitWidth-i.spaceWidth,l=o/r,h=t-o/2+l*n,u=getBarHeightAndYAttr(e,this.zeroLine,this.totalHeight),c=slicedToArray(u,2),p=c[0];return createSVG("rect",{className:"bar mini",style:"fill: "+a,"data-point-index":s,x:h,y:c[1],width:l,height:p})},dot:function(t,e,i,a,s){return createSVG("circle",{style:"fill: "+a,"data-point-index":s,cx:t,cy:e,r:i.radius})}},t}(),Animator=function(){var t=function(t,e,i,a){this.totalHeight=t,this.totalWidth=e,this.avgUnitWidth=a,this.zeroLine=i};return t.prototype={bar:function(t,e,i,a,s){var n=e-this.avgUnitWidth/4,r=this.avgUnitWidth/2/s,o=getBarHeightAndYAttr(i,this.zeroLine,this.totalHeight),l=slicedToArray(o,2);return e=n+r*a,[t,{width:r,height:l[0],x:e,y:l[1]},350,"easein"]},dot:function(t,e,i){return[t,{cx:e,cy:i},350,"easein"]},path:function(t,e){var i=[],a=[{unit:t.path,object:t,key:"path"},{d:"M"+e},350,"easein"];if(i.push(a),t.regionPath){var s="0,"+this.zeroLine+"L",n="L"+this.totalWidth+", "+this.zeroLine,r=[{unit:t.regionPath,object:t,key:"regionPath"},{d:"M"+s+e+n},350,"easein"];i.push(r)}return i}},t}(),EASING={ease:"0.25 0.1 0.25 1",linear:"0 0 1 1",easein:"0.1 0.8 0.2 1",easeout:"0 0 0.58 1",easeinout:"0.42 0 0.58 1"},SvgTip=function(){function t(e){var i=e.parent,a=void 0===i?null:i,s=e.colors,n=void 0===s?[]:s;classCallCheck(this,t),this.parent=a,this.colors=n,this.title_name="",this.title_value="",this.list_values=[],this.title_value_first=0,this.x=0,this.y=0,this.top=0,this.left=0,this.setup()}return createClass(t,[{key:"setup",value:function(){this.make_tooltip()}},{key:"refresh",value:function(){this.fill(),this.calc_position()}},{key:"make_tooltip",value:function(){var t=this;this.container=$.create("div",{inside:this.parent,className:"graph-svg-tip comparison",innerHTML:'<span class="title"></span>\n\t\t\t\t<ul class="data-point-list"></ul>\n\t\t\t\t<div class="svg-pointer"></div>'}),this.hide_tip(),this.title=this.container.querySelector(".title"),this.data_point_list=this.container.querySelector(".data-point-list"),this.parent.addEventListener("mouseleave",function(){t.hide_tip()})}},{key:"fill",value:function(){var t=this,e=void 0;e=this.title_value_first?"<strong>"+this.title_value+"</strong>"+this.title_name:this.title_name+"<strong>"+this.title_value+"</strong>",this.title.innerHTML=e,this.data_point_list.innerHTML="",this.list_values.map(function(e,i){var a=t.colors[i]||"black",s=$.create("li",{styles:{"border-top":"3px solid "+a},innerHTML:'<strong style="display: block;">'+(0===e.value||e.value?e.value:"")+"</strong>\n\t\t\t\t\t"+(e.title?e.title:"")});t.data_point_list.appendChild(s)})}},{key:"calc_position",value:function(){var t=this.container.offsetWidth;this.top=this.y-this.container.offsetHeight,this.left=this.x-t/2;var e=this.parent.offsetWidth-t,i=this.container.querySelector(".svg-pointer");if(this.left<0)i.style.left="calc(50% - "+-1*this.left+"px)",this.left=0;else if(this.left>e){var a="calc(50% + "+(this.left-e)+"px)";i.style.left=a,this.left=e}else i.style.left="50%"}},{key:"set_values",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;this.title_name=i,this.title_value=a,this.list_values=s,this.x=t,this.y=e,this.title_value_first=n,this.refresh()}},{key:"hide_tip",value:function(){this.container.style.top="0px",this.container.style.left="0px",this.container.style.opacity="0"}},{key:"show_tip",value:function(){this.container.style.top=this.top+"px",this.container.style.left=this.left+"px",this.container.style.opacity="1"}}]),t}(),PRESET_COLOR_MAP={"light-blue":"#7cd6fd",blue:"#5e64ff",violet:"#743ee2",red:"#ff5858",orange:"#ffa00a",yellow:"#feef72",green:"#28a745","light-green":"#98d85b",purple:"#b554ff",magenta:"#ffa3ef",black:"#36114C",grey:"#bdd3e6","light-grey":"#f0f4f7","dark-grey":"#b8c2cc"},DEFAULT_COLORS=["light-blue","blue","violet","red","orange","yellow","green","light-green","purple","magenta"],getColor=function(t){return PRESET_COLOR_MAP[t]||t},ALL_CHART_TYPES=["line","scatter","bar","percentage","heatmap","pie"],COMPATIBLE_CHARTS={bar:["line","scatter","percentage","pie"],line:["scatter","bar","percentage","pie"],pie:["line","scatter","percentage","bar"],scatter:["line","bar","percentage","pie"],percentage:["bar","line","scatter","pie"],heatmap:[]},COLOR_COMPATIBLE_CHARTS={bar:["line","scatter"],line:["scatter","bar"],pie:["percentage"],scatter:["line","bar"],percentage:["pie"],heatmap:[]},BaseChart=function(){function t(e){var i=e.height,a=void 0===i?240:i,s=e.title,n=void 0===s?"":s,r=e.subtitle,o=void 0===r?"":r,l=e.colors,h=void 0===l?[]:l,u=e.summary,c=void 0===u?[]:u,p=e.is_navigable,_=void 0===p?0:p,d=e.has_legend,f=void 0===d?0:d,v=e.type,m=void 0===v?"":v,g=e.parent,y=e.data;classCallCheck(this,t),this.raw_chart_args=arguments[0],this.parent="string"==typeof g?document.querySelector(g):g,this.title=n,this.subtitle=o,this.data=y,this.specific_values=y.specific_values||[],this.summary=c,this.is_navigable=_,this.is_navigable&&(this.current_index=0),this.has_legend=f,this.setColors(h,m),this.set_margins(a)}return createClass(t,[{key:"get_different_chart",value:function(t){if(t!==this.type){ALL_CHART_TYPES.includes(t)||console.error("'"+t+"' is not a valid chart type."),COMPATIBLE_CHARTS[this.type].includes(t)||console.error("'"+this.type+"' chart cannot be converted to a '"+t+"' chart.");var e=COLOR_COMPATIBLE_CHARTS[this.type].includes(t);return new Chart({parent:this.raw_chart_args.parent,title:this.title,data:this.raw_chart_args.data,type:t,height:this.raw_chart_args.height,colors:e?this.colors:void 0})}}},{key:"setColors",value:function(t,e){this.colors=t;var i="percentage"===e||"pie"===e?this.data.labels:this.data.datasets;(!this.colors||i&&this.colors.length<i.length)&&(this.colors=DEFAULT_COLORS),this.colors=this.colors.map(function(t){return getColor(t)})}},{key:"set_margins",value:function(t){this.base_height=t,this.height=t-40,this.translate_x=60,this.translate_y=10}},{key:"setup",value:function(){if(!this.parent)return void console.error("No parent element to render on was provided.");this.validate_and_prepare_data()&&(this.bind_window_events(),this.refresh(!0))}},{key:"validate_and_prepare_data",value:function(){return!0}},{key:"bind_window_events",value:function(){var t=this;window.addEventListener("resize",function(){return t.refresh()}),window.addEventListener("orientationchange",function(){return t.refresh()})}},{key:"refresh",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.setup_base_values(),this.set_width(),this.setup_container(),this.setup_components(),this.setup_values(),this.setup_utils(),this.make_graph_components(t),this.make_tooltip(),this.summary.length>0?this.show_custom_summary():this.show_summary(),this.is_navigable&&this.setup_navigation(t)}},{key:"set_width",value:function(){var t=0;this.specific_values.map(function(e){var i=getStringWidth(e.title+"",8);i>t&&(t=i-40)}),this.base_width=getElementContentWidth(this.parent)-t,this.width=this.base_width-2*this.translate_x}},{key:"setup_base_values",value:function(){}},{key:"setup_container",value:function(){this.container=$.create("div",{className:"chart-container",innerHTML:'<h6 class="title">'+this.title+'</h6>\n\t\t\t\t<h6 class="sub-title uppercase">'+this.subtitle+'</h6>\n\t\t\t\t<div class="frappe-chart graphics"></div>\n\t\t\t\t<div class="graph-stats-container"></div>'}),this.parent.innerHTML="",this.parent.appendChild(this.container),this.chart_wrapper=this.container.querySelector(".frappe-chart"),this.stats_wrapper=this.container.querySelector(".graph-stats-container"),this.make_chart_area(),this.make_draw_area()}},{key:"make_chart_area",value:function(){return this.svg=makeSVGContainer(this.chart_wrapper,"chart",this.base_width,this.base_height),this.svg_defs=makeSVGDefs(this.svg),this.svg}},{key:"make_draw_area",value:function(){this.draw_area=makeSVGGroup(this.svg,this.type+"-chart","translate("+this.translate_x+", "+this.translate_y+")")}},{key:"setup_components",value:function(){}},{key:"make_tooltip",value:function(){this.tip=new SvgTip({parent:this.chart_wrapper,colors:this.colors}),this.bind_tooltip()}},{key:"show_summary",value:function(){}},{key:"show_custom_summary",value:function(){var t=this;this.summary.map(function(e){var i=$.create("div",{className:"stats",innerHTML:'<span class="indicator">\n\t\t\t\t\t<i style="background:'+e.color+'"></i>\n\t\t\t\t\t'+e.title+": "+e.value+"\n\t\t\t\t</span>"});t.stats_wrapper.appendChild(i)})}},{key:"setup_navigation",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.make_overlay(),e&&(this.bind_overlay(),document.addEventListener("keydown",function(e){isElementInViewport(t.chart_wrapper)&&("37"==(e=e||window.event).keyCode?t.on_left_arrow():"39"==e.keyCode?t.on_right_arrow():"38"==e.keyCode?t.on_up_arrow():"40"==e.keyCode?t.on_down_arrow():"13"==e.keyCode&&t.on_enter_key())}))}},{key:"make_overlay",value:function(){}},{key:"bind_overlay",value:function(){}},{key:"bind_units",value:function(){}},{key:"on_left_arrow",value:function(){}},{key:"on_right_arrow",value:function(){}},{key:"on_up_arrow",value:function(){}},{key:"on_down_arrow",value:function(){}},{key:"on_enter_key",value:function(){}},{key:"get_data_point",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.current_index,e={index:t},i=this.y[0];return["svg_units","y_tops","values"].map(function(a){var s=a.slice(0,a.length-1);e[s]=i[a][t]}),e.label=this.x[t],e}},{key:"update_current_data_point",value:function(t){(t=parseInt(t))<0&&(t=0),t>=this.x.length&&(t=this.x.length-1),t!==this.current_index&&(this.current_index=t,$.fire(this.parent,"data-select",this.get_data_point()))}},{key:"setup_utils",value:function(){}},{key:"makeDrawAreaComponent",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return makeSVGGroup(this.draw_area,t,e)}}]),t}(),AxisChart=function(t){function e(t){classCallCheck(this,e);var i=possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.x=i.data.labels||[],i.y=i.data.datasets||[],i.is_series=t.is_series,i.format_tooltip_y=t.format_tooltip_y,i.format_tooltip_x=t.format_tooltip_x,i.zero_line=i.height,i}return inherits(e,t),createClass(e,[{key:"validate_and_prepare_data",value:function(){return!0}},{key:"setup_values",value:function(){this.data.datasets.map(function(t){t.values=t.values.map(function(t){return isNaN(t)?0:t})}),this.setup_x(),this.setup_y()}},{key:"setup_x",value:function(){var t=this;this.set_avg_unit_width_and_x_offset(),this.x_axis_positions&&(this.x_old_axis_positions=this.x_axis_positions.slice()),this.x_axis_positions=this.x.map(function(e,i){return floatTwo(t.x_offset+i*t.avg_unit_width)}),this.x_old_axis_positions||(this.x_old_axis_positions=this.x_axis_positions.slice())}},{key:"setup_y",value:function(){this.y_axis_values&&(this.y_old_axis_values=this.y_axis_values.slice());var t=this.get_all_y_values();this.y_sums&&this.y_sums.length>0&&(t=t.concat(this.y_sums)),this.y_axis_values=calcIntervals(t,"line"===this.type),this.y_old_axis_values||(this.y_old_axis_values=this.y_axis_values.slice());var e=this.y_axis_values,i=e[e.length-1]-e[0];this.multiplier&&(this.old_multiplier=this.multiplier),this.multiplier=this.height/i,this.old_multiplier||(this.old_multiplier=this.multiplier);var a=e[1]-e[0],s=a*this.multiplier,n=void 0;n=e.indexOf(0)>=0?e.indexOf(0):e[0]>0?-1*e[0]/a:-1*e[e.length-1]/a+(e.length-1),this.zero_line&&(this.old_zero_line=this.zero_line),this.zero_line=this.height-n*s,this.old_zero_line||(this.old_zero_line=this.zero_line)}},{key:"setup_components",value:function(){get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setup_components",this).call(this),this.setup_marker_components(),this.setup_aggregation_components(),this.setup_graph_components()}},{key:"setup_marker_components",value:function(){this.y_axis_group=this.makeDrawAreaComponent("y axis"),this.x_axis_group=this.makeDrawAreaComponent("x axis"),this.specific_y_group=this.makeDrawAreaComponent("specific axis")}},{key:"setup_aggregation_components",value:function(){this.sum_group=this.makeDrawAreaComponent("data-points"),this.average_group=this.makeDrawAreaComponent("chart-area")}},{key:"setup_graph_components",value:function(){var t=this;this.svg_units_groups=[],this.y.map(function(e,i){t.svg_units_groups[i]=t.makeDrawAreaComponent("data-points data-points-"+i)})}},{key:"make_graph_components",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.make_y_axis(),this.make_x_axis(),this.draw_graph(t),this.make_y_specifics()}},{key:"make_x_axis",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=void 0,a=void 0,s=void 0,n="";if("span"===this.x_axis_mode?(i=-7,a=this.height+15,s=this.height+25):"tick"===this.x_axis_mode&&(i=this.height,a=6,s=9,n="x-axis-label"),this.x_axis_group.setAttribute("transform","translate(0,"+i+")"),e)return void this.make_anim_x_axis(a,s,n);var r=1.5*this.avg_unit_width,o=r/8;this.x_axis_group.textContent="",this.x.map(function(e,i){var l=getStringWidth(e,8)+2;if(l>r)if(t.is_series){for(var h=1;l/h*2>r;)h++;if(i%h!=0)return}else e=e.slice(0,o-3)+" ...";t.x_axis_group.appendChild(makeXLine(a,s,e,"x-value-text",n,t.x_axis_positions[i]))})}},{key:"make_y_axis",value:function(){var t=this;if(arguments.length>0&&void 0!==arguments[0]&&arguments[0])return this.make_anim_y_axis(),void this.make_anim_y_specifics();var e=this.get_y_axis_line_props(),i=slicedToArray(e,4),a=i[0],s=i[1],n=i[2],r=i[3];this.y_axis_group.textContent="",this.y_axis_values.map(function(e,i){t.y_axis_group.appendChild(makeYLine(r,a,s,e,"y-value-text",n,t.zero_line-e*t.multiplier,0===e&&0!==i))})}},{key:"get_y_axis_line_props",value:function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0])return[this.width,this.width+5,"specific-value",0];var t=void 0,e="",i=0;return"span"===this.y_axis_mode?(t=this.width+6,i=-6):"tick"===this.y_axis_mode&&(t=-6,e="y-axis-label"),[t,-9,e,i]}},{key:"draw_graph",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.raw_chart_args.hasOwnProperty("init")&&!this.raw_chart_args.init?void this.y.map(function(e,i){e.svg_units=[],t.make_path&&t.make_path(e,i,t.x_axis_positions,e.y_tops,t.colors[i]),t.make_new_units(e,i),t.calc_y_dependencies()}):e?void this.draw_new_graph_and_animate():void this.y.map(function(e,i){e.svg_units=[],t.make_path&&t.make_path(e,i,t.x_axis_positions,e.y_tops,t.colors[i]),t.make_new_units(e,i)})}},{key:"draw_new_graph_and_animate",value:function(){var t=this,e=[];this.y.map(function(i,a){i.y_tops=new Array(i.values.length).fill(t.zero_line),e.push({values:i.values}),i.svg_units=[],t.make_path&&t.make_path(i,a,t.x_axis_positions,i.y_tops,t.colors[a]),t.make_new_units(i,a)}),setTimeout(function(){t.update_values(e)},350)}},{key:"setup_navigation",value:function(t){var i=this;t?setTimeout(function(){get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setup_navigation",i).call(i,t)},500):get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setup_navigation",this).call(this,t)}},{key:"make_new_units",value:function(t,e){this.make_new_units_for_dataset(this.x_axis_positions,t.y_tops,this.colors[e],e,this.y.length)}},{key:"make_new_units_for_dataset",value:function(t,e,i,a,s,n,r,o){n||(n=this.svg_units_groups[a]),r||(r=this.y[a].svg_units),o||(o=this.unit_args),n.textContent="",r.length=0;var l=new UnitRenderer(this.height,this.zero_line,this.avg_unit_width);e.map(function(e,h){var u=l[o.type](t[h],e,o.args,i,h,a,s);n.appendChild(u),r.push(u)}),this.is_navigable&&this.bind_units(r)}},{key:"make_y_specifics",value:function(){var t=this;this.specific_y_group.textContent="",this.specific_values.map(function(e){t.specific_y_group.appendChild(makeYLine(0,t.width,t.width+5,e.title.toUpperCase(),"specific-value","specific-value",t.zero_line-e.value*t.multiplier,!1,e.line_type))})}},{key:"bind_tooltip",value:function(){var t=this;this.chart_wrapper.addEventListener("mousemove",function(e){var i=offset(t.chart_wrapper),a=e.pageX-i.left-t.translate_x;e.pageY-i.top-t.translate_y<t.height+2*t.translate_y?t.map_tooltip_x_position_and_show(a):t.tip.hide_tip()})}},{key:"map_tooltip_x_position_and_show",value:function(t){var e=this;if(this.y_min_tops){var i=this.x;this.format_tooltip_x&&this.format_tooltip_x(this.x[0])&&(i=this.x.map(function(t){return e.format_tooltip_x(t)}));for(var a=this.format_tooltip_y&&this.format_tooltip_y(this.y[0].values[0]),s=this.x_axis_positions.length-1;s>=0;s--){var n=this.x_axis_positions[s];if(t>n-this.avg_unit_width/2){var r=n+this.translate_x,o=this.y_min_tops[s]+this.translate_y,l=i[s],h=this.y.map(function(t,i){return{title:t.title,value:a?e.format_tooltip_y(t.values[s]):t.values[s],color:e.colors[i]}});this.tip.set_values(r,o,l,"",h),this.tip.show_tip();break}}}}},{key:"show_sums",value:function(){var t=this;this.updating=!0,this.y_sums=new Array(this.x_axis_positions.length).fill(0),this.y.map(function(e){e.values.map(function(e,i){t.y_sums[i]+=e})}),this.update_values(),this.sum_units=[],this.make_new_units_for_dataset(this.x_axis_positions,this.y_sums.map(function(e){return floatTwo(t.zero_line-e*t.multiplier)}),"#f0f4f7",0,1,this.sum_group,this.sum_units),this.updating=!1}},{key:"hide_sums",value:function(){this.updating||(this.y_sums=[],this.sum_group.textContent="",this.sum_units=[],this.update_values())}},{key:"show_averages",value:function(){var t=this;this.old_specific_values=this.specific_values.slice(),this.y.map(function(e,i){var a=0;e.values.map(function(t){a+=t});var s=a/e.values.length;t.specific_values.push({title:"AVG "+(i+1),line_type:"dashed",value:s,auto:1})}),this.update_values()}},{key:"hide_averages",value:function(){var t=this;this.old_specific_values=this.specific_values.slice();var e=[];this.specific_values.map(function(t,i){t.auto&&e.unshift(i)}),e.map(function(e){t.specific_values.splice(e,1)}),this.update_values()}},{key:"update_values",value:function(t,e){var i=this;e||(e=this.x),this.elements_to_animate=[],this.updating=!0,this.old_x_values=this.x.slice(),this.old_y_axis_tops=this.y.map(function(t){return t.y_tops.slice()}),this.old_y_values=this.y.map(function(t){return t.values}),this.no_of_extra_pts=e.length-this.x.length,t&&this.y.map(function(e,i){e.values=t[i].values}),e&&(this.x=e),this.setup_x(),this.setup_y(),this.calc_y_dependencies(),this.animator=new Animator(this.height,this.width,this.zero_line,this.avg_unit_width),arraysEqual(this.x_old_axis_positions,this.x_axis_positions)||(this.make_x_axis(!0),setTimeout(function(){i.updating||i.make_x_axis()},350)),(!arraysEqual(this.y_old_axis_values,this.y_axis_values)||this.old_specific_values&&!arraysEqual(this.old_specific_values,this.specific_values))&&(this.make_y_axis(!0),setTimeout(function(){i.updating||(i.make_y_axis(),i.make_y_specifics())},350)),this.animate_graphs(),this.run_animation(),this.updating=!1}},{key:"add_data_point",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.x.length,a=this.y.map(function(t){return{values:t.values}});a.map(function(e,a){e.values.splice(i,0,t[a])});var s=this.x.slice();s.splice(i,0,e),this.update_values(a,s)}},{key:"remove_data_point",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.x.length-1;if(!(this.x.length<3)){var e=this.y.map(function(t){return{values:t.values}});e.map(function(e){e.values.splice(t,1)});var i=this.x.slice();i.splice(t,1),this.update_values(e,i)}}},{key:"run_animation",value:function(){var t=this,e=runSVGAnimation(this.svg,this.elements_to_animate);this.svg.parentNode==this.chart_wrapper&&(this.chart_wrapper.removeChild(this.svg),this.chart_wrapper.appendChild(e)),setTimeout(function(){e.parentNode==t.chart_wrapper&&(t.chart_wrapper.removeChild(e),t.chart_wrapper.appendChild(t.svg))},250)}},{key:"animate_graphs",value:function(){var t=this;this.y.map(function(e,i){var a=t.calc_old_and_new_postions(e,i),s=slicedToArray(a,4),n=s[0],r=s[1],o=s[2],l=s[3];t.no_of_extra_pts>=0&&(t.make_path&&t.make_path(e,i,n,r,t.colors[i]),t.make_new_units_for_dataset(n,r,t.colors[i],i,t.y.length)),e.path&&t.animate_path(e,i,n,r,o,l),t.animate_units(e,i,n,r,o,l)}),setTimeout(function(){t.y.map(function(e,i){t.make_path&&t.make_path(e,i,t.x_axis_positions,e.y_tops,t.colors[i]),t.make_new_units(e,i)})},400)}},{key:"animate_path",value:function(t,e,i,a,s,n){var r=n.map(function(t,e){return s[e]+","+t}).join("L");this.elements_to_animate=this.elements_to_animate.concat(this.animator.path(t,r))}},{key:"animate_units",value:function(t,e,i,a,s,n){var r=this,o=this.unit_args.type;t.svg_units.map(function(i,a){void 0!==s[a]&&void 0!==n[a]&&r.elements_to_animate.push(r.animator[o]({unit:i,array:t.svg_units,index:a},s[a],n[a],e,r.y.length))})}},{key:"calc_old_and_new_postions",value:function(t,e){var i=this.x_old_axis_positions.slice(),a=this.x_axis_positions.slice(),s=this.old_y_axis_tops[e].slice(),n=t.y_tops.slice(),r=i[i.length-1],o=s[s.length-1],l=a[a.length-1],h=n[n.length-1];if(this.no_of_extra_pts>=0){var u=new Array(Math.abs(this.no_of_extra_pts)).fill(r),c=new Array(Math.abs(this.no_of_extra_pts)).fill(o);i=i.concat(u),s=s.concat(c)}else{var p=new Array(Math.abs(this.no_of_extra_pts)).fill(l),_=new Array(Math.abs(this.no_of_extra_pts)).fill(h);a=a.concat(p),n=n.concat(_)}return[i,s,a,n]}},{key:"make_anim_x_axis",value:function(t,e,i){var a=this,s=this.x_old_axis_positions,n=this.x_axis_positions,r=this.old_x_values,o=this.x,l=s[s.length-1],h=function(s,n,r){"string"==typeof r&&(r=parseInt(r.substring(0,r.length-1)));var o=makeXLine(t,e,s,"x-value-text",i,n);a.x_axis_group.appendChild(o),a.elements_to_animate&&a.elements_to_animate.push([{unit:o,array:[0],index:0},{transform:r+", 0"},350,"easein","translate",{transform:n+", 0"}])};this.x_axis_group.textContent="",this.make_new_axis_anim_lines(s,n,r,o,l,h)}},{key:"make_anim_y_axis",value:function(){var t=this,e=this.y_old_axis_values.map(function(e){return t.zero_line-e*t.multiplier}),i=this.y_axis_values.map(function(e){return t.zero_line-e*t.multiplier}),a=this.y_old_axis_values,s=this.y_axis_values,n=e[e.length-1];this.y_axis_group.textContent="",this.make_new_axis_anim_lines(e,i,a,s,n,this.add_and_animate_y_line.bind(this),this.y_axis_group)}},{key:"make_anim_y_specifics",value:function(){var t=this;this.specific_y_group.textContent="",this.specific_values.map(function(e){t.add_and_animate_y_line(e.title,t.old_zero_line-e.value*t.old_multiplier,t.zero_line-e.value*t.multiplier,0,t.specific_y_group,e.line_type,!0)})}},{key:"make_new_axis_anim_lines",value:function(t,e,i,a,s,n,r){var o=void 0,l=void 0,h=a.length-i.length;if(h>0)o=e.slice(0,t.length),l=a.slice(0,i.length);else{var u=new Array(Math.abs(h)).fill("");l=a.concat(u);var c=new Array(Math.abs(h)).fill(s+"F");o=e.concat(c)}if(l.map(function(e,i){n(e,t[i],o[i],i,r)}),h>0){var p=a.slice(i.length),_=e.slice(t.length);p.map(function(t,e){n(t,s,_[e],e,r)})}}},{key:"add_and_animate_y_line",value:function(t,e,i,a,s,n){var r=arguments.length>6&&void 0!==arguments[6]&&arguments[6],o=!1;"string"==typeof i&&(i=parseInt(i.substring(0,i.length-1)),o=!0);var l={transform:"0, "+i},h={transform:"0, "+e};o&&(l["stroke-opacity"]=0);var u=this.get_y_axis_line_props(r),c=slicedToArray(u,4),p=c[0],_=c[1],d=c[2],f=c[3],v=r?"specific-value":"y-value-text",m=makeYLine(f,p,_,t=r?(t+"").toUpperCase():t,v,d,e,0===t&&0!==a,n);s.appendChild(m),this.elements_to_animate&&this.elements_to_animate.push([{unit:m,array:[0],index:0},l,350,"easein","translate",h])}},{key:"set_avg_unit_width_and_x_offset",value:function(){this.avg_unit_width=this.width/(this.x.length-1),this.x_offset=0}},{key:"get_all_y_values",value:function(){var t=[];return this.y.map(function(e){t=t.concat(e.values)}),t.concat(this.specific_values.map(function(t){return t.value}))}},{key:"calc_y_dependencies",value:function(){var t=this;this.y_min_tops=new Array(this.x_axis_positions.length).fill(9999),this.y.map(function(e){e.y_tops=e.values.map(function(e){return floatTwo(t.zero_line-e*t.multiplier)}),e.y_tops.map(function(e,i){e<t.y_min_tops[i]&&(t.y_min_tops[i]=e)})})}}]),e}(BaseChart),BarChart=function(t){function e(t){classCallCheck(this,e);var i=possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.type="bar",i.x_axis_mode=t.x_axis_mode||"tick",i.y_axis_mode=t.y_axis_mode||"span",i.setup(),i}return inherits(e,t),createClass(e,[{key:"setup_values",value:function(){get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setup_values",this).call(this),this.x_offset=this.avg_unit_width,this.unit_args={type:"bar",args:{spaceWidth:this.avg_unit_width/2}}}},{key:"make_overlay",value:function(){var t=this.x.length-1,e=this.y[0].svg_units[t];this.update_current_data_point(t),this.overlay&&this.overlay.parentNode.removeChild(this.overlay),this.overlay=e.cloneNode(),this.overlay.style.fill="#000000",this.overlay.style.opacity="0.4",this.draw_area.appendChild(this.overlay)}},{key:"bind_overlay",value:function(){var t=this;this.parent.addEventListener("data-select",function(e){t.update_overlay(e.svg_unit)})}},{key:"bind_units",value:function(t){var e=this;t.map(function(t){t.addEventListener("click",function(){var i=t.getAttribute("data-point-index");e.update_current_data_point(i)})})}},{key:"update_overlay",value:function(t){var e=this,i=[];Object.keys(t.attributes).map(function(e){i.push(t.attributes[e])}),i.filter(function(t){return t.specified}).map(function(t){e.overlay.setAttribute(t.name,t.nodeValue)}),this.overlay.style.fill="#000000",this.overlay.style.opacity="0.4"}},{key:"on_left_arrow",value:function(){this.update_current_data_point(this.current_index-1)}},{key:"on_right_arrow",value:function(){this.update_current_data_point(this.current_index+1)}},{key:"set_avg_unit_width_and_x_offset",value:function(){this.avg_unit_width=this.width/(this.x.length+1),this.x_offset=this.avg_unit_width}}]),e}(AxisChart),LineChart=function(t){function e(t){classCallCheck(this,e);var i=possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.x_axis_mode=t.x_axis_mode||"span",i.y_axis_mode=t.y_axis_mode||"span",t.hasOwnProperty("show_dots")?i.show_dots=t.show_dots:i.show_dots=1,i.region_fill=t.region_fill,Object.getPrototypeOf(i)!==e.prototype?possibleConstructorReturn(i):(i.dot_radius=t.dot_radius||4,i.heatline=t.heatline,i.type="line",i.setup(),i)}return inherits(e,t),createClass(e,[{key:"setup_graph_components",value:function(){this.setup_path_groups(),get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setup_graph_components",this).call(this)}},{key:"setup_path_groups",value:function(){var t=this;this.paths_groups=[],this.y.map(function(e,i){t.paths_groups[i]=makeSVGGroup(t.draw_area,"path-group path-group-"+i)})}},{key:"setup_values",value:function(){get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setup_values",this).call(this),this.unit_args={type:"dot",args:{radius:this.dot_radius}}}},{key:"make_new_units_for_dataset",value:function(t,i,a,s,n,r,o,l){this.show_dots&&get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"make_new_units_for_dataset",this).call(this,t,i,a,s,n,r,o,l)}},{key:"make_paths",value:function(){var t=this;this.y.map(function(e,i){t.make_path(e,i,t.x_axis_positions,e.y_tops,e.color||t.colors[i])})}},{key:"make_path",value:function(t,e,i,a,s){var n=a.map(function(t,e){return i[e]+","+t}).join("L");if(this.paths_groups[e].textContent="",t.path=makePath("M"+n,"line-graph-path",s),this.paths_groups[e].appendChild(t.path),this.heatline){var r=makeGradient(this.svg_defs,s);t.path.style.stroke="url(#"+r+")"}this.region_fill&&this.fill_region_for_dataset(t,e,s,n)}},{key:"fill_region_for_dataset",value:function(t,e,i,a){var s=makeGradient(this.svg_defs,i,!0),n="M0,"+this.zero_line+"L"+a+"L"+this.width+","+this.zero_line;t.regionPath=makePath(n,"region-fill","none","url(#"+s+")"),this.paths_groups[e].appendChild(t.regionPath)}}]),e}(AxisChart),ScatterChart=function(t){function e(t){classCallCheck(this,e);var i=possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.type="scatter",t.dot_radius?i.dot_radius=t.dot_radius:i.dot_radius=8,i.setup(),i}return inherits(e,t),createClass(e,[{key:"setup_graph_components",value:function(){this.setup_path_groups(),get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setup_graph_components",this).call(this)}},{key:"setup_path_groups",value:function(){}},{key:"setup_values",value:function(){get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setup_values",this).call(this),this.unit_args={type:"dot",args:{radius:this.dot_radius}}}},{key:"make_paths",value:function(){}},{key:"make_path",value:function(){}}]),e}(LineChart),PercentageChart=function(t){function e(t){classCallCheck(this,e);var i=possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.type="percentage",i.max_slices=10,i.max_legend_points=6,i.setup(),i}return inherits(e,t),createClass(e,[{key:"make_chart_area",value:function(){this.chart_wrapper.className+=" graph-focus-margin",this.chart_wrapper.style.marginTop="45px",this.stats_wrapper.className+=" graph-focus-margin",this.stats_wrapper.style.marginBottom="30px",this.stats_wrapper.style.paddingTop="0px"}},{key:"make_draw_area",value:function(){this.chart_div=$.create("div",{className:"div",inside:this.chart_wrapper}),this.chart=$.create("div",{className:"progress-chart",inside:this.chart_div})}},{key:"setup_components",value:function(){this.percentage_bar=$.create("div",{className:"progress",inside:this.chart})}},{key:"setup_values",value:function(){var t=this;this.slice_totals=[];var e=this.data.labels.map(function(e,i){var a=0;return t.data.datasets.map(function(t){a+=t.values[i]}),[a,e]}).filter(function(t){return t[0]>0}),i=e;if(e.length>this.max_slices){e.sort(function(t,e){return e[0]-t[0]}),i=e.slice(0,this.max_slices-1);var a=0;e.slice(this.max_slices-1).map(function(t){a+=t[0]}),i.push([a,"Rest"]),this.colors[this.max_slices-1]="grey"}this.labels=[],i.map(function(e){t.slice_totals.push(e[0]),t.labels.push(e[1])}),this.legend_totals=this.slice_totals.slice(0,this.max_legend_points)}},{key:"make_graph_components",value:function(){var t=this;this.grand_total=this.slice_totals.reduce(function(t,e){return t+e},0),this.slices=[],this.slice_totals.map(function(e,i){var a=$.create("div",{className:"progress-bar",inside:t.percentage_bar,styles:{background:t.colors[i],width:100*e/t.grand_total+"%"}});t.slices.push(a)})}},{key:"bind_tooltip",value:function(){var t=this;this.slices.map(function(e,i){e.addEventListener("mouseenter",function(){var a=offset(t.chart_wrapper),s=offset(e),n=s.left-a.left+e.offsetWidth/2,r=s.top-a.top-6,o=(t.formatted_labels&&t.formatted_labels.length>0?t.formatted_labels[i]:t.labels[i])+": ",l=(100*t.slice_totals[i]/t.grand_total).toFixed(1);t.tip.set_values(n,r,o,l+"%"),t.tip.show_tip()})})}},{key:"show_summary",value:function(){var t=this,e=this.formatted_labels&&this.formatted_labels.length>0?this.formatted_labels:this.labels;this.legend_totals.map(function(i,a){i&&($.create("div",{className:"stats",inside:t.stats_wrapper}).innerHTML='<span class="indicator">\n\t\t\t\t\t<i style="background: '+t.colors[a]+'"></i>\n\t\t\t\t\t<span class="text-muted">'+e[a]+":</span>\n\t\t\t\t\t"+i+"\n\t\t\t\t</span>")})}}]),e}(BaseChart),ANGLE_RATIO=Math.PI/180,FULL_ANGLE=360,PieChart=function(t){function e(t){classCallCheck(this,e);var i=possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.type="pie",i.elements_to_animate=null,i.hoverRadio=t.hoverRadio||.1,i.max_slices=10,i.max_legend_points=6,i.isAnimate=!1,i.startAngle=t.startAngle||0,i.clockWise=t.clockWise||!1,i.mouseMove=i.mouseMove.bind(i),i.mouseLeave=i.mouseLeave.bind(i),i.setup(),i}return inherits(e,t),createClass(e,[{key:"setup_values",value:function(){var t=this;this.centerX=this.width/2,this.centerY=this.height/2,this.radius=this.height>this.width?this.centerX:this.centerY,this.slice_totals=[];var e=this.data.labels.map(function(e,i){var a=0;return t.data.datasets.map(function(t){a+=t.values[i]}),[a,e]}).filter(function(t){return t[0]>0}),i=e;if(e.length>this.max_slices){e.sort(function(t,e){return e[0]-t[0]}),i=e.slice(0,this.max_slices-1);var a=0;e.slice(this.max_slices-1).map(function(t){a+=t[0]}),i.push([a,"Rest"]),this.colors[this.max_slices-1]="grey"}this.labels=[],i.map(function(e){t.slice_totals.push(e[0]),t.labels.push(e[1])}),this.legend_totals=this.slice_totals.slice(0,this.max_legend_points)}},{key:"makeArcPath",value:function(t,e){var i=this.centerX,a=this.centerY,s=this.radius,n=this.clockWise;return"M"+i+" "+a+" L"+(i+t.x)+" "+(a+t.y)+" A "+s+" "+s+" 0 0 "+(n?1:0)+" "+(i+e.x)+" "+(a+e.y)+" z"}},{key:"make_graph_components",value:function(t){var i=this,a=this.radius,s=this.clockWise;this.grand_total=this.slice_totals.reduce(function(t,e){return t+e},0);var n=this.slicesProperties||[];this.slices=[],this.elements_to_animate=[],this.slicesProperties=[];var r=180-this.startAngle;this.slice_totals.map(function(o,l){var h=r,u=o/i.grand_total*FULL_ANGLE,c=s?-u:u,p=r+=c,_=e.getPositionByAngle(h,a),d=e.getPositionByAngle(p,a),f=t&&n[l],v=void 0,m=void 0;t?(v=f?f.startPosition:_,m=f?f.endPosition:_):(v=_,m=d);var g=i.makeArcPath(v,m),y=makePath(g,"pie-path","none",i.colors[l]);y.style.transition="transform .3s;",i.draw_area.appendChild(y),i.slices.push(y),i.slicesProperties.push({startPosition:_,endPosition:d,value:o,total:i.grand_total,startAngle:h,endAngle:p,angle:c}),t&&i.elements_to_animate.push([{unit:y,array:i.slices,index:i.slices.length-1},{d:i.makeArcPath(_,d)},650,"easein",null,{d:g}])}),t&&this.run_animation()}},{key:"run_animation",value:function(){var t=this;if(this.elements_to_animate&&0!==this.elements_to_animate.length){var e=runSVGAnimation(this.svg,this.elements_to_animate);this.svg.parentNode==this.chart_wrapper&&(this.chart_wrapper.removeChild(this.svg),this.chart_wrapper.appendChild(e)),setTimeout(function(){e.parentNode==t.chart_wrapper&&(t.chart_wrapper.removeChild(e),t.chart_wrapper.appendChild(t.svg))},650)}}},{key:"calTranslateByAngle",value:function(t){var i=this.radius,a=this.hoverRadio,s=e.getPositionByAngle(t.startAngle+t.angle/2,i);return"translate3d("+s.x*a+"px,"+s.y*a+"px,0)"}},{key:"hoverSlice",value:function(t,e,i,a){if(t){var s=this.colors[e];if(i){transform(t,this.calTranslateByAngle(this.slicesProperties[e])),t.style.fill=lightenDarkenColor(s,50);var n=offset(this.svg),r=a.pageX-n.left+10,o=a.pageY-n.top-10,l=(this.formatted_labels&&this.formatted_labels.length>0?this.formatted_labels[e]:this.labels[e])+": ",h=(100*this.slice_totals[e]/this.grand_total).toFixed(1);this.tip.set_values(r,o,l,h+"%"),this.tip.show_tip()}else transform(t,"translate3d(0,0,0)"),this.tip.hide_tip(),t.style.fill=s}}},{key:"mouseMove",value:function(t){for(var e=t.target,i=this.curActiveSliceIndex,a=this.curActiveSlice,s=0;s<this.slices.length;s++)if(e===this.slices[s]){this.hoverSlice(a,i,!1),this.curActiveSlice=e,this.curActiveSliceIndex=s,this.hoverSlice(e,s,!0,t);break}}},{key:"mouseLeave",value:function(){this.hoverSlice(this.curActiveSlice,this.curActiveSliceIndex,!1)}},{key:"bind_tooltip",value:function(){this.draw_area.addEventListener("mousemove",this.mouseMove),this.draw_area.addEventListener("mouseleave",this.mouseLeave)}},{key:"show_summary",value:function(){var t=this,e=this.formatted_labels&&this.formatted_labels.length>0?this.formatted_labels:this.labels;this.legend_totals.map(function(i,a){var s=t.colors[a];i&&($.create("div",{className:"stats",inside:t.stats_wrapper}).innerHTML='<span class="indicator">\n\t\t\t\t\t<i style="background-color:'+s+';"></i>\n\t\t\t\t\t<span class="text-muted">'+e[a]+":</span>\n\t\t\t\t\t"+i+"\n\t\t\t\t</span>")})}}],[{key:"getPositionByAngle",value:function(t,e){return{x:Math.sin(t*ANGLE_RATIO)*e,y:Math.cos(t*ANGLE_RATIO)*e}}}]),e}(BaseChart),Heatmap=function(t){function e(t){var i=t.start,a=void 0===i?"":i,s=t.domain,n=void 0===s?"":s,r=t.subdomain,o=void 0===r?"":r,l=t.data,h=void 0===l?{}:l,u=t.discrete_domains,c=void 0===u?0:u,p=t.count_label,_=void 0===p?"":p,d=t.legend_colors,f=void 0===d?[]:d;classCallCheck(this,e);var v=possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,arguments[0]));v.type="heatmap",v.domain=n,v.subdomain=o,v.data=h,v.discrete_domains=c,v.count_label=_;var m=new Date;return v.start=a||addDays(m,365),f=f.slice(0,5),v.legend_colors=v.validate_colors(f)?f:["#ebedf0","#c6e48b","#7bc96f","#239a3b","#196127"],v.distribution_size=5,v.translate_x=0,v.setup(),v}return inherits(e,t),createClass(e,[{key:"validate_colors",value:function(t){if(t.length<5)return 0;var e=1;return t.forEach(function(t){isValidColor(t)||(e=0,console.warn('"'+t+'" is not a valid color.'))},this),e}},{key:"setup_base_values",value:function(){this.today=new Date,this.start||(this.start=new Date,this.start.setFullYear(this.start.getFullYear()-1)),this.first_week_start=new Date(this.start.toDateString()),this.last_week_start=new Date(this.today.toDateString()),7!==this.first_week_start.getDay()&&addDays(this.first_week_start,-1*this.first_week_start.getDay()),7!==this.last_week_start.getDay()&&addDays(this.last_week_start,-1*this.last_week_start.getDay()),this.no_of_cols=getWeeksBetween(this.first_week_start+"",this.last_week_start+"")+1}},{key:"set_width",value:function(){this.base_width=12*(this.no_of_cols+3),this.discrete_domains&&(this.base_width+=144)}},{key:"setup_components",value:function(){this.domain_label_group=this.makeDrawAreaComponent("domain-label-group chart-label"),this.data_groups=this.makeDrawAreaComponent("data-groups","translate(0, 20)")}},{key:"setup_values",value:function(){var t=this;this.domain_label_group.textContent="",this.data_groups.textContent="";var e=Object.keys(this.data).map(function(e){return t.data[e]});this.distribution=calcDistribution(e,this.distribution_size),this.month_names=["January","February","March","April","May","June","July","August","September","October","November","December"],this.render_all_weeks_and_store_x_values(this.no_of_cols)}},{key:"render_all_weeks_and_store_x_values",value:function(t){var e=new Date(this.first_week_start);this.week_col=0,this.current_month=e.getMonth(),this.months=[this.current_month+""],this.month_weeks={},this.month_start_points=[],this.month_weeks[this.current_month]=0,this.month_start_points.push(13);for(var i=0;i<t;i++){var a=void 0,s=0,n=new Date(e),r=this.get_week_squares_group(n,this.week_col),o=slicedToArray(r,2);a=o[0],s=o[1],this.data_groups.appendChild(a),this.week_col+=1+parseInt(this.discrete_domains&&s),this.month_weeks[this.current_month]++,s&&(this.current_month=(this.current_month+1)%12,this.months.push(this.current_month+""),this.month_weeks[this.current_month]=1),addDays(e,7)}this.render_month_labels()}},{key:"get_week_squares_group",value:function(t,e){for(var i=this.today.getTime(),a=0,s=0,n=makeSVGGroup(this.data_groups,"data-group"),r=0,o=0;o<7;o+=1,r+=12){var l=0,h=0,u=t.getTime()/1e3,c=Math.floor(u-u%86400).toFixed(1);this.data[c]&&(l=this.data[c]),this.data[Math.round(c)]&&(l=this.data[Math.round(c)]),l&&(h=getMaxCheckpoint(l,this.distribution));var p=13+12*(e+s),_={"data-date":getDdMmYyyy(t),"data-value":l,"data-day":t.getDay()},d=makeHeatSquare("day",p,r,10,this.legend_colors[h],_);n.appendChild(d);var f=new Date(t);if(addDays(f,1),f.getTime()>i)break;f.getMonth()-t.getMonth()&&(a=1,this.discrete_domains&&(s=1),this.month_start_points.push(13+12*(e+s))),t=f}return[n,a]}},{key:"render_month_labels",value:function(){var t=this;this.months.shift(),this.month_start_points.shift(),this.months.pop(),this.month_start_points.pop(),this.month_start_points.map(function(e,i){var a=makeText("y-value-text",e+12,10,t.month_names[t.months[i]].substring(0,3));t.domain_label_group.appendChild(a)})}},{key:"make_graph_components",value:function(){Array.prototype.slice.call(this.container.querySelectorAll(".graph-stats-container, .sub-title, .title")).map(function(t){t.style.display="None"}),this.chart_wrapper.style.marginTop="0px",this.chart_wrapper.style.paddingTop="0px"}},{key:"bind_tooltip",value:function(){var t=this;Array.prototype.slice.call(document.querySelectorAll(".data-group .day")).map(function(e){e.addEventListener("mouseenter",function(e){var i=e.target.getAttribute("data-value"),a=e.target.getAttribute("data-date").split("-"),s=t.month_names[parseInt(a[1])-1].substring(0,3),n=t.chart_wrapper.getBoundingClientRect(),r=e.target.getBoundingClientRect(),o=parseInt(e.target.getAttribute("width")),l=r.left-n.left+(o+2)/2,h=r.top-n.top-(o+2)/2,u=i+" "+t.count_label,c=" on "+s+" "+a[0]+", "+a[2];t.tip.set_values(l,h,c,u,[],1),t.tip.show_tip()})})}},{key:"update",value:function(t){this.data=t,this.setup_values(),this.bind_tooltip()}}]),e}(BaseChart),chartTypes={line:LineChart,bar:BarChart,scatter:ScatterChart,percentage:PercentageChart,heatmap:Heatmap,pie:PieChart},Chart=function t(e){return classCallCheck(this,t),getChartByType(e.type,arguments[0])};/* harmony default export */ __webpack_exports__["a"] = (Chart);


/***/ }),

/***/ 1520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_plugins_frappe_charts_composite_chart__ = __webpack_require__(1521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_plugins_frappe_charts_composite_chart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_plugins_frappe_charts_composite_chart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_plugins_frappe_charts_default_charts__ = __webpack_require__(1526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_plugins_frappe_charts_default_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_plugins_frappe_charts_default_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_plugins_frappe_charts_trend_chart__ = __webpack_require__(1531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_plugins_frappe_charts_trend_chart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_plugins_frappe_charts_trend_chart__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    name: "frappe-charts",
    data: function data() {
        return {};
    },

    components: {
        compositeChart: __WEBPACK_IMPORTED_MODULE_0_components_plugins_frappe_charts_composite_chart___default.a,
        defaultChart: __WEBPACK_IMPORTED_MODULE_1_components_plugins_frappe_charts_default_charts___default.a,
        trendChart: __WEBPACK_IMPORTED_MODULE_2_components_plugins_frappe_charts_trend_chart___default.a
    },
    mounted: function mounted() {},
    methods: {},
    destroyed: function destroyed() {}
});

/***/ }),

/***/ 1521:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1522)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1524)
/* template */
var __vue_template__ = __webpack_require__(1525)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0d168737"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/components/plugins/frappe-charts/composite-chart.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d168737", Component.options)
  } else {
    hotAPI.reload("data-v-0d168737", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1522:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1523);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(39)("19162194", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0d168737\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./composite-chart.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0d168737\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./composite-chart.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1523:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_frappe_charts_dist_frappe_charts_min_esm__ = __webpack_require__(1118);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    // ===Component name
    name: "composite",
    // ===Props passed to component
    props: {},
    // ===Components used by this component
    components: {},
    // ===component Data properties
    data: function data() {
        return {};
    },

    // ===Code to be executed when Component is mounted
    mounted: function mounted() {
        // Composite Chart
        // ================================================================================
        var report_count_list = [17, 40, 33, 44, 126, 156, 324, 333, 478, 495, 373];

        var bar_composite_data = {
            labels: ["2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"],
            datasets: [{
                "title": "Events",
                "values": report_count_list,
                "formatted": report_count_list.map(function (d) {
                    return d + " reports";
                })
            }]
        };

        var line_composite_data = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                "values": [36, 46, 45, 32, 27, 31, 30, 36, 39, 49, 0, 0]
            }]
        };

        var more_line_data = {
            // 0: {values: [4, 0, 3, 1, 1, 2, 1, 2, 1, 0, 1, 1]},
            0: {
                values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            1: {
                values: [2, 3, 3, 2, 1, 4, 0, 1, 2, 7, 11, 4]
            },
            2: {
                values: [7, 7, 2, 4, 0, 1, 5, 3, 1, 2, 0, 1]
            },
            3: {
                values: [0, 2, 6, 2, 2, 1, 2, 3, 6, 3, 7, 10]
            },
            4: {
                values: [9, 10, 8, 10, 6, 5, 8, 8, 24, 15, 10, 13]
            },
            5: {
                values: [9, 13, 16, 9, 4, 5, 7, 10, 14, 22, 23, 24]
            },
            6: {
                values: [20, 22, 28, 19, 28, 19, 14, 19, 51, 37, 29, 38]
            },
            7: {
                values: [29, 20, 22, 16, 16, 19, 24, 26, 57, 31, 46, 27]
            },
            8: {
                values: [36, 24, 38, 27, 15, 22, 24, 38, 32, 57, 139, 26]
            },
            9: {
                values: [37, 36, 32, 33, 12, 34, 52, 45, 58, 57, 64, 35]
            },
            10: {
                values: [36, 46, 45, 32, 27, 31, 30, 36, 39, 49, 0, 0]
            }
        };

        var c1 = document.querySelector("#chart-composite-1");
        var c2 = document.querySelector("#chart-composite-2");

        var bar_composite_chart = new __WEBPACK_IMPORTED_MODULE_0_frappe_charts_dist_frappe_charts_min_esm__["a" /* default */]({
            parent: c1,
            title: "Fireball/Bolide Events - Yearly (more than 5 reports)",
            data: bar_composite_data,
            type: 'bar',
            height: 180,
            colors: ['#ff6666'],
            is_navigable: 1,
            is_series: 1,
            region_fill: 1
        });

        var line_composite_chart = new __WEBPACK_IMPORTED_MODULE_0_frappe_charts_dist_frappe_charts_min_esm__["a" /* default */]({
            parent: c2,
            data: line_composite_data,
            type: 'line',
            height: 180,
            colors: ['#20c997'],
            is_series: 1
        });

        bar_composite_chart.parent.addEventListener('data-select', function (e) {
            line_composite_chart.update_values([more_line_data[e.index]]);
        });
    },

    // ===Computed properties for the component
    computed: {},
    // ===Component methods
    methods: {}
});

/***/ }),

/***/ 1525:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        {
          staticClass: "col-sm-6 push-sm-1 later",
          staticStyle: { "font-size": "14px" }
        },
        [
          _c(
            "div",
            { staticClass: "border", attrs: { id: "chart-composite-1" } },
            [_c("svg", { attrs: { height: "225" } })]
          ),
          _vm._v(" "),
          _c("span", { staticClass: "mt-1" }, [
            _vm._v("Click or use arrow keys to navigate data points")
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-sm-6 push-sm-1 later",
          staticStyle: { "font-size": "14px" }
        },
        [
          _c("div", { staticClass: "card-header" }, [
            _c(
              "div",
              { staticClass: "border", attrs: { id: "chart-composite-2" } },
              [_c("svg", { attrs: { height: "225" } })]
            )
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0d168737", module.exports)
  }
}

/***/ }),

/***/ 1526:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1527)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1529)
/* template */
var __vue_template__ = __webpack_require__(1530)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-77b131dc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/components/plugins/frappe-charts/default-charts.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-77b131dc", Component.options)
  } else {
    hotAPI.reload("data-v-77b131dc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1527:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1528);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(39)("3e5d061c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-77b131dc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./default-charts.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-77b131dc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./default-charts.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1528:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_frappe_charts_dist_frappe_charts_min_esm__ = __webpack_require__(1118);
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    // ===Component name
    name: "default-charts",
    // ===Props passed to component
    props: {},
    // ===Components used by this component
    components: {},
    // ===component Data properties
    data: function data() {
        return {};
    },

    // ===Code to be executed when Component is mounted
    mounted: function mounted() {
        // Demo Chart (bar, linepts, scatter(blobs), percentage)
        // ================================================================================
        var type_data = {
            labels: ["12am-3am", "3am-6am", "6am-9am", "9am-12pm", "12pm-3pm", "3pm-6pm", "6pm-9pm", "9pm-12am"],

            datasets: [{
                title: "Some Data",
                values: [25, 40, 30, 35, 8, 52, 17, -4]
            }, {
                title: "Another Set",
                values: [25, 50, -10, 15, 18, 32, 27, 14]
            }, {
                title: "Yet Another",
                values: [15, 20, -3, -15, 58, 12, -17, 37]
            }]
        };

        var type_chart = new __WEBPACK_IMPORTED_MODULE_0_frappe_charts_dist_frappe_charts_min_esm__["a" /* default */]({
            parent: "#chart-types",
            title: "My Awesome Chart",
            data: type_data,
            type: 'pie',
            height: 250,
            colors: ['#20c997', '#fd7e14', '#66ccff'],
            is_series: 1,
            format_tooltip_x: function format_tooltip_x(d) {
                return (d + '').toUpperCase();
            },
            format_tooltip_y: function format_tooltip_y(d) {
                return d + ' pts';
            }
        });

        Array.prototype.slice.call(document.querySelectorAll('.chart-type-buttons button')).map(function (el) {
            el.addEventListener('click', function (e) {
                var btn = e.target;
                var type = btn.getAttribute('data-type');

                var newChart = type_chart.get_different_chart(type);
                //                    type_chart.colors=['#20c997', '#fd7e14', '#66ccff','#ccc','#ddd','#eee','#222','#111'];

                if (newChart) {
                    type_chart = newChart;
                }

                type_chart.setColors(['#20c997', '#fd7e14', '#66ccff'], type);
                type_chart.refresh();
                Array.prototype.slice.call(btn.parentNode.querySelectorAll('button')).map(function (el) {
                    el.classList.remove('active');
                });
                btn.classList.add('active');
            });
        });
    },

    // ===Computed properties for the component
    computed: {},
    // ===Component methods
    methods: {}
});

/***/ }),

/***/ 1530:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "border", attrs: { id: "chart-types" } }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "btn-group chart-type-buttons margin-vertical-px mt-3",
          attrs: { role: "group" }
        },
        [
          _c(
            "button",
            {
              staticClass: "btn btn-sm btn-primary  p-1 p-sm-2",
              attrs: { type: "button", "data-type": "bar" }
            },
            [_vm._v("Bar")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-sm btn-primary p-1 p-sm-2",
              attrs: { type: "button", "data-type": "line" }
            },
            [_vm._v("Line")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-sm btn-primary p-1 p-sm-2",
              attrs: { type: "button", "data-type": "scatter" }
            },
            [_vm._v("Scatter")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-sm btn-primary p-1 p-sm-2",
              attrs: { type: "button", "data-type": "pie" }
            },
            [_vm._v("Pie")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-sm btn-primary p-1 p-sm-2",
              attrs: { type: "button", "data-type": "percentage" }
            },
            [_vm._v("Percentage")]
          )
        ]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-77b131dc", module.exports)
  }
}

/***/ }),

/***/ 1531:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1532)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1534)
/* template */
var __vue_template__ = __webpack_require__(1535)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9a7ae366"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/components/plugins/frappe-charts/trend-chart.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9a7ae366", Component.options)
  } else {
    hotAPI.reload("data-v-9a7ae366", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1532:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1533);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(39)("2408febc", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9a7ae366\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./trend-chart.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9a7ae366\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./trend-chart.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1533:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_frappe_charts_dist_frappe_charts_min_esm__ = __webpack_require__(1118);
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    // ===Component name
    name: "blank",
    // ===Props passed to component
    props: {},
    // ===Components used by this component
    components: {},
    // ===component Data properties
    data: function data() {
        return {};
    },

    // ===Code to be executed when Component is mounted
    mounted: function mounted() {
        // Trends Chart
        // ================================================================================
        var trends_data = {
            labels: [1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
            datasets: [{
                "values": [132.9, 150.0, 149.4, 148.0, 94.4, 97.6, 54.1, 49.2, 22.5, 18.4, 39.3, 131.0, 220.1, 218.9, 198.9, 162.4, 91.0, 60.5, 20.6, 14.8, 33.9, 123.0, 211.1, 191.8, 203.3, 133.0, 76.1, 44.9, 25.1, 11.6, 28.9, 88.3, 136.3, 173.9, 170.4, 163.6, 99.3, 65.3, 45.8, 24.7, 12.6, 4.2, 4.8, 24.9, 80.8, 84.5, 94.0, 113.3, 69.8, 39.8]
            }]
        };

        var plot_chart_args = {
            parent: "#chart-trends",
            title: "Mean Total Sunspot Count - Yearly",
            data: trends_data,
            type: 'line',
            height: 250,
            colors: ['#20c997'],
            is_series: 1,
            show_dots: 0,
            heatline: 1,
            x_axis_mode: 'tick',
            y_axis_mode: 'span'
        };

        new __WEBPACK_IMPORTED_MODULE_0_frappe_charts_dist_frappe_charts_min_esm__["a" /* default */](plot_chart_args);

        Array.prototype.slice.call(document.querySelectorAll('.chart-plot-buttons button')).map(function (el) {
            el.addEventListener('click', function (e) {
                var btn = e.target;
                var type = btn.getAttribute('data-type');
                var config = [];

                if (type === 'line') {
                    config = [0, 0, 0];
                } else if (type === 'region') {
                    config = [0, 0, 1];
                } else {
                    config = [0, 1, 0];
                }

                plot_chart_args.show_dots = config[0];
                plot_chart_args.heatline = config[1];
                plot_chart_args.region_fill = config[2];

                plot_chart_args.init = false;

                new __WEBPACK_IMPORTED_MODULE_0_frappe_charts_dist_frappe_charts_min_esm__["a" /* default */](plot_chart_args);

                Array.prototype.slice.call(btn.parentNode.querySelectorAll('button')).map(function (el) {
                    el.classList.remove('active');
                });
                btn.classList.add('active');
            });
        });
    },

    // ===Computed properties for the component
    computed: {},
    // ===Component methods
    methods: {}
});

/***/ }),

/***/ 1535:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "border", attrs: { id: "chart-trends" } }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "btn-group chart-plot-buttons mt-1  mt-3",
          attrs: { role: "group" }
        },
        [
          _c(
            "button",
            {
              staticClass: "btn btn-sm btn-primary",
              attrs: { type: "button", "data-type": "line" }
            },
            [_vm._v("Line")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-sm btn-primary active",
              attrs: { type: "button", "data-type": "heatline" }
            },
            [_vm._v("HeatLine")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-sm btn-primary",
              attrs: { type: "button", "data-type": "region" }
            },
            [_vm._v("Region")]
          )
        ]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9a7ae366", module.exports)
  }
}

/***/ }),

/***/ 1536:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "card" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [_c("composite-chart")], 1)
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card" }, [
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [_c("default-chart")], 1)
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card" }, [
      _vm._m(2),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [_c("trend-chart")], 1)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", { staticClass: "card-title" }, [_vm._v("Bar Charts")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", { staticClass: "card-title" }, [_vm._v("Default charts")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", { staticClass: "card-title" }, [_vm._v("Plot Trends")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-40c15844", module.exports)
  }
}

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1520)
/* template */
var __vue_template__ = __webpack_require__(1536)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/components/pages/frappe_charts.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-40c15844", Component.options)
  } else {
    hotAPI.reload("data-v-40c15844", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});