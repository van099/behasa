webpackJsonp([19],{1324:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(46),a=(r.n(n),r(589)),o=r.n(a);t.default={name:"users_list",components:{datatable:o.a},data:function(){return{tableData:[],columndata:[{label:"ID",field:"id",numeric:!0,html:!1},{label:"Name",field:"name",numeric:!1,html:!1},{label:"Email",field:"email",numeric:!1,html:!1},{label:"Age",field:"age",numeric:!0,html:!1},{label:"Status",field:"status",numeric:!1,html:!1},{label:"Actions",field:"action",numeric:!1,html:!0}]}},mounted:function(){var e=this;axios.get("http://www.filltext.com/?rows=20&id={index}&name={firstName}~{lastName}&email={email}&age={numberRange|20,60}&status=[%22Activated%22,%22Deactivated%22]").then(function(t){e.tableData=t.data,e.tableData.forEach(function(t,r){e.$set(t,"action","<a class='btn btn-info' href='#/edit_user?"+r+"'>Edit</a>")})}).catch(function(e){})}}},1325:function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-12"},[t("b-card",{staticClass:"bg-primary-card",attrs:{header:"Basic Client Table","header-tag":"h4"}},[t("div",{staticClass:"table-responsive"},[t("datatable",{attrs:{title:"Registered Users",rows:this.tableData,columns:this.columndata}})],1)])],1)])},staticRenderFns:[]}},1551:function(e,t,r){var n=r(45)(r(1324),r(1325),!1,null,null,null);e.exports=n.exports},589:function(e,t,r){var n=r(45)(r(592),r(594),!1,function(e){r(590)},"data-v-3257aabc",null);e.exports=n.exports},590:function(e,t,r){var n=r(591);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(38)("5e62ff65",n,!0,{})},591:function(e,t){throw new Error("Module build failed: BrowserslistError: Unknown browser query `dead`\n    at C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\browserslist\\index.js:164:11\n    at Array.reduce (<anonymous>)\n    at resolve (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\browserslist\\index.js:132:18)\n    at browserslist (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\browserslist\\index.js:224:16)\n    at Browsers.parse (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\browsers.js:61:16)\n    at new Browsers (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\browsers.js:52:30)\n    at loadPrefixes (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\autoprefixer.js:70:24)\n    at plugin (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\autoprefixer.js:81:24)\n    at LazyResult.run (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:277:20)\n    at LazyResult.asyncTick (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:192:32)\n    at C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:231:20\n    at new Promise (<anonymous>)\n    at LazyResult.async (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:228:27)\n    at LazyResult.then (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:134:21)\n    at C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\vue-loader\\lib\\style-compiler\\index.js:62:10\n    at runMicrotasks (<anonymous>)\n    at processTicksAndRejections (internal/process/task_queues.js:97:5)")},592:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(593),a=r.n(n);t.default={props:{title:{default:""},columns:{required:!0},rows:{required:!0},perPage:{default:10},sortable:{default:!0},paginate:{default:!0},exportable:{default:!0},pagelen:{type:Array,default:function(){return[5,10,20,50]}}},data:function(){return{data:{},currentPage:1,currentPerPage:this.perPage,sortColumn:-1,sortType:"asc",searchInput:"",CategoryStatus:[]}},mounted:function(){this.sort(0)},methods:{nextPage:function(){this.processedRows.length>this.currentPerPage*this.currentPage&&-1!=this.currentPerPage&&++this.currentPage},previousPage:function(){this.currentPage>1&&--this.currentPage},sort:function(e){this.sortable&&(this.sortColumn===e?this.sortType="asc"===this.sortType?"desc":"asc":(this.sortType="asc",this.sortColumn=e))},click:function(e,t){this.$emit("rowClick",e,t)},exportExcel:function(){var e=this.renderTable().replace(/ /g,"%20"),t=new Date,r=document.createElement("a");r.href="data:application/vnd.ms-excel, "+e,r.download=this.title.toLowerCase().replace(/ /g,"-")+"-"+t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+"-"+t.getHours()+"-"+t.getMinutes()+"-"+t.getSeconds()+".xls",r.click()},renderTable:function(){var e="<table><thead>";e+="<tr>";for(var t=0;t<this.columns.length;t++){e+="<th>",e+=this.columns[t].label,e+="</th>"}e+="</tr>",e+="</thead><tbody>";for(t=0;t<this.rows.length;t++){var r=this.rows[t];e+="<tr>";for(var n=0;n<this.columns.length;n++){var a=this.columns[n];e+="<td>",e+=this.collect(r,a.field),e+="</td>"}e+="</tr>"}return e+="</tbody></table>"},dig:function(e,t){for(var r=e,n=t.split("."),a=0;a<n.length;a++){if(void 0===r)return;r=r[n[a]]}return r},collect:function(e,t){return"function"==typeof t?t(e):"string"==typeof t?this.dig(e,t):void 0},handleClick:function(e){if(e.target.attributes.target_id){var t={};t.id=e.target.attributes.target_id.value,t.action=e.target.attributes.action.value,t.target=e.target,this.$emit("input",t)}}},computed:{processedRows:function(){var e=this,t=this.rows;return!1!==this.sortable&&(t=t.sort(function(t,r){if(!e.columns[e.sortColumn])return 0;var n=function(t){return"string"==typeof(t=e.collect(t,e.columns[e.sortColumn].field))&&(t=t.toLowerCase(),e.columns[e.sortColumn].numeric&&(t=t.indexOf(".")>=0?parseFloat(t):parseInt(t))),t};return((t=n(t))<(r=n(r))?-1:t>r?1:0)*("desc"===e.sortType?-1:1)})),this.searchInput&&(t=new a.a(t,{keys:this.columns.map(function(e){return e.field})}).search(this.searchInput)),t},paginated:function(){var e=this.processedRows;return this.paginate&&-1!=this.currentPerPage&&(e=e.slice((this.currentPage-1)*this.currentPerPage,this.currentPage*this.currentPerPage)),e}},watch:{currentPerPage:function(){this.currentPage=1,this.paginated},searchInput:function(){this.currentPage=1,this.paginated}}}},593:function(e,t,r){var n;n=function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,r){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=r(2),s=r(8),i=r(0),l=function(){function e(t,r){var n=r.location,a=void 0===n?0:n,o=r.distance,i=void 0===o?100:o,l=r.threshold,c=void 0===l?.6:l,u=r.maxPatternLength,h=void 0===u?32:u,d=r.caseSensitive,p=void 0!==d&&d,f=r.tokenSeparator,v=void 0===f?/ +/g:f,g=r.findAllMatches,m=void 0!==g&&g,y=r.minMatchCharLength,b=void 0===y?1:y,_=r.id,x=void 0===_?null:_,k=r.keys,w=void 0===k?[]:k,P=r.shouldSort,C=void 0===P||P,S=r.getFn,M=void 0===S?s:S,j=r.sortFn,L=void 0===j?function(e,t){return e.score-t.score}:j,A=r.tokenize,I=void 0!==A&&A,T=r.matchAllTokens,O=void 0!==T&&T,z=r.includeMatches,R=void 0!==z&&z,E=r.includeScore,F=void 0!==E&&E,D=r.verbose,N=void 0!==D&&D;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:a,distance:i,threshold:c,maxPatternLength:h,isCaseSensitive:p,tokenSeparator:v,findAllMatches:m,minMatchCharLength:b,id:x,keys:w,includeMatches:R,includeScore:F,shouldSort:C,getFn:M,sortFn:L,verbose:N,tokenize:I,matchAllTokens:O},this.setCollection(t)}var t,r;return t=e,(r=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var r=this._prepareSearchers(e),n=r.tokenSearchers,a=r.fullSearcher,o=this._search(n,a),s=o.weights,i=o.results;return this._computeScore(s,i),this.options.shouldSort&&this._sort(i),t.limit&&"number"==typeof t.limit&&(i=i.slice(0,t.limit)),this._format(i)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var r=e.split(this.options.tokenSeparator),n=0,a=r.length;n<a;n+=1)t.push(new o(r[n],this.options));return{tokenSearchers:t,fullSearcher:new o(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=this.list,n={},a=[];if("string"==typeof r[0]){for(var o=0,s=r.length;o<s;o+=1)this._analyze({key:"",value:r[o],record:o,index:o},{resultMap:n,results:a,tokenSearchers:e,fullSearcher:t});return{weights:null,results:a}}for(var i={},l=0,c=r.length;l<c;l+=1)for(var u=r[l],h=0,d=this.options.keys.length;h<d;h+=1){var p=this.options.keys[h];if("string"!=typeof p){if(i[p.name]={weight:1-p.weight||1},p.weight<=0||p.weight>1)throw new Error("Key weight has to be > 0 and <= 1");p=p.name}else i[p]={weight:1};this._analyze({key:p,value:this.options.getFn(u,p),record:u,index:l},{resultMap:n,results:a,tokenSearchers:e,fullSearcher:t})}return{weights:i,results:a}}},{key:"_analyze",value:function(e,t){var r=e.key,n=e.arrayIndex,a=void 0===n?-1:n,o=e.value,s=e.record,l=e.index,c=t.tokenSearchers,u=void 0===c?[]:c,h=t.fullSearcher,d=void 0===h?[]:h,p=t.resultMap,f=void 0===p?{}:p,v=t.results,g=void 0===v?[]:v;if(null!=o){var m=!1,y=-1,b=0;if("string"==typeof o){this._log("\nKey: ".concat(""===r?"-":r));var _=d.search(o);if(this._log('Full text: "'.concat(o,'", score: ').concat(_.score)),this.options.tokenize){for(var x=o.split(this.options.tokenSeparator),k=[],w=0;w<u.length;w+=1){var P=u[w];this._log('\nPattern: "'.concat(P.pattern,'"'));for(var C=!1,S=0;S<x.length;S+=1){var M=x[S],j=P.search(M),L={};j.isMatch?(L[M]=j.score,m=!0,C=!0,k.push(j.score)):(L[M]=1,this.options.matchAllTokens||k.push(1)),this._log('Token: "'.concat(M,'", score: ').concat(L[M]))}C&&(b+=1)}y=k[0];for(var A=k.length,I=1;I<A;I+=1)y+=k[I];y/=A,this._log("Token score average:",y)}var T=_.score;y>-1&&(T=(T+y)/2),this._log("Score average:",T);var O=!this.options.tokenize||!this.options.matchAllTokens||b>=u.length;if(this._log("\nCheck Matches: ".concat(O)),(m||_.isMatch)&&O){var z=f[l];z?z.output.push({key:r,arrayIndex:a,value:o,score:T,matchedIndices:_.matchedIndices}):(f[l]={item:s,output:[{key:r,arrayIndex:a,value:o,score:T,matchedIndices:_.matchedIndices}]},g.push(f[l]))}}else if(i(o))for(var R=0,E=o.length;R<E;R+=1)this._analyze({key:r,arrayIndex:R,value:o[R],record:s,index:l},{resultMap:f,results:g,tokenSearchers:u,fullSearcher:d})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var r=0,n=t.length;r<n;r+=1){for(var a=t[r].output,o=a.length,s=1,i=1,l=0;l<o;l+=1){var c=e?e[a[l].key].weight:1,u=(1===c?a[l].score:a[l].score||.001)*c;1!==c?i=Math.min(i,u):(a[l].nScore=u,s*=u)}t[r].score=1===i?s:i,this._log(t[r])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var r=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,function(e,t){if("object"===n(t)&&null!==t){if(-1!==r.indexOf(t))return;r.push(t)}return t})),r=null}var a=[];this.options.includeMatches&&a.push(function(e,t){var r=e.output;t.matches=[];for(var n=0,a=r.length;n<a;n+=1){var o=r[n];if(0!==o.matchedIndices.length){var s={indices:o.matchedIndices,value:o.value};o.key&&(s.key=o.key),o.hasOwnProperty("arrayIndex")&&o.arrayIndex>-1&&(s.arrayIndex=o.arrayIndex),t.matches.push(s)}}}),this.options.includeScore&&a.push(function(e,t){t.score=e.score});for(var o=0,s=e.length;o<s;o+=1){var i=e[o];if(this.options.id&&(i.item=this.options.getFn(i.item,this.options.id)[0]),a.length){for(var l={item:i.item},c=0,u=a.length;c<u;c+=1)a[c](i,l);t.push(l)}else t.push(i.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&a(t.prototype,r),e}();e.exports=l},function(e,t,r){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=r(3),o=r(4),s=r(7),i=function(){function e(t,r){var n=r.location,a=void 0===n?0:n,o=r.distance,i=void 0===o?100:o,l=r.threshold,c=void 0===l?.6:l,u=r.maxPatternLength,h=void 0===u?32:u,d=r.isCaseSensitive,p=void 0!==d&&d,f=r.tokenSeparator,v=void 0===f?/ +/g:f,g=r.findAllMatches,m=void 0!==g&&g,y=r.minMatchCharLength,b=void 0===y?1:y;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:a,distance:i,threshold:c,maxPatternLength:h,isCaseSensitive:p,tokenSeparator:v,findAllMatches:m,minMatchCharLength:b},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=h&&(this.patternAlphabet=s(this.pattern))}var t,r;return t=e,(r=[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,r=t.maxPatternLength,n=t.tokenSeparator;if(this.pattern.length>r)return a(e,this.pattern,n);var s=this.options,i=s.location,l=s.distance,c=s.threshold,u=s.findAllMatches,h=s.minMatchCharLength;return o(e,this.pattern,this.patternAlphabet,{location:i,distance:l,threshold:c,findAllMatches:u,minMatchCharLength:h})}}])&&n(t.prototype,r),e}();e.exports=i},function(e,t){var r=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,a=new RegExp(t.replace(r,"\\$&").replace(n,"|")),o=e.match(a),s=!!o,i=[];if(s)for(var l=0,c=o.length;l<c;l+=1){var u=o[l];i.push([e.indexOf(u),u.length-1])}return{score:s?.5:1,isMatch:s,matchedIndices:i}}},function(e,t,r){var n=r(5),a=r(6);e.exports=function(e,t,r,o){for(var s=o.location,i=void 0===s?0:s,l=o.distance,c=void 0===l?100:l,u=o.threshold,h=void 0===u?.6:u,d=o.findAllMatches,p=void 0!==d&&d,f=o.minMatchCharLength,v=void 0===f?1:f,g=i,m=e.length,y=h,b=e.indexOf(t,g),_=t.length,x=[],k=0;k<m;k+=1)x[k]=0;if(-1!==b){var w=n(t,{errors:0,currentLocation:b,expectedLocation:g,distance:c});if(y=Math.min(w,y),-1!==(b=e.lastIndexOf(t,g+_))){var P=n(t,{errors:0,currentLocation:b,expectedLocation:g,distance:c});y=Math.min(P,y)}}b=-1;for(var C=[],S=1,M=_+m,j=1<<(_<=31?_-1:30),L=0;L<_;L+=1){for(var A=0,I=M;A<I;)n(t,{errors:L,currentLocation:g+I,expectedLocation:g,distance:c})<=y?A=I:M=I,I=Math.floor((M-A)/2+A);M=I;var T=Math.max(1,g-I+1),O=p?m:Math.min(g+I,m)+_,z=Array(O+2);z[O+1]=(1<<L)-1;for(var R=O;R>=T;R-=1){var E=R-1,F=r[e.charAt(E)];if(F&&(x[E]=1),z[R]=(z[R+1]<<1|1)&F,0!==L&&(z[R]|=(C[R+1]|C[R])<<1|1|C[R+1]),z[R]&j&&(S=n(t,{errors:L,currentLocation:E,expectedLocation:g,distance:c}))<=y){if(y=S,(b=E)<=g)break;T=Math.max(1,2*g-b)}}if(n(t,{errors:L+1,currentLocation:g,expectedLocation:g,distance:c})>y)break;C=z}return{isMatch:b>=0,score:0===S?.001:S,matchedIndices:a(x,v)}}},function(e,t){e.exports=function(e,t){var r=t.errors,n=void 0===r?0:r,a=t.currentLocation,o=void 0===a?0:a,s=t.expectedLocation,i=void 0===s?0:s,l=t.distance,c=void 0===l?100:l,u=n/e.length,h=Math.abs(i-o);return c?u+h/c:h?1:u}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=[],n=-1,a=-1,o=0,s=e.length;o<s;o+=1){var i=e[o];i&&-1===n?n=o:i||-1===n||((a=o-1)-n+1>=t&&r.push([n,a]),n=-1)}return e[o-1]&&o-n>=t&&r.push([n,o-1]),r}},function(e,t){e.exports=function(e){for(var t={},r=e.length,n=0;n<r;n+=1)t[e.charAt(n)]=0;for(var a=0;a<r;a+=1)t[e.charAt(a)]|=1<<r-a-1;return t}},function(e,t,r){var n=r(0);e.exports=function(e,t){return function e(t,r,a){if(r){var o=r.indexOf("."),s=r,i=null;-1!==o&&(s=r.slice(0,o),i=r.slice(o+1));var l=t[s];if(null!=l)if(i||"string"!=typeof l&&"number"!=typeof l)if(n(l))for(var c=0,u=l.length;c<u;c+=1)e(l[c],i,a);else i&&e(l,i,a);else a.push(l.toString())}else a.push(t);return a}(e,t,[])}}])},e.exports=n()},594:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card p-3"},[r("div",{staticClass:"text-left"},[r("div",{attrs:{id:"search-input-container"}},[r("div",{staticClass:"row-shorter"},[r("span",[e._v("Rows per page:")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.currentPerPage,expression:"currentPerPage"}],staticClass:"custom-select",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.currentPerPage=t.target.multiple?r:r[0]}}},[e._l(e.pagelen,function(t){return r("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}),e._v(" "),r("option",{attrs:{value:"-1"}},[e._v("All")])],2)]),e._v(" "),r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchInput,expression:"searchInput"}],staticClass:"form-control mb-2",attrs:{type:"search",id:"search-input",placeholder:"Search data"},domProps:{value:e.searchInput},on:{input:function(t){t.target.composing||(e.searchInput=t.target.value)}}})])])]),e._v(" "),r("div",{staticClass:"table-responsive"},[r("table",{ref:"table",staticClass:"table"},[r("thead",[r("tr",[e._l(e.columns,function(t,n){return r("th",{key:n,class:(e.sortable?"sortable":"")+(e.sortColumn===n?"desc"===e.sortType?" sorting-desc":" sorting-asc":""),style:{width:t.width?t.width:"auto"},on:{click:function(t){return e.sort(n)}}},[e._v("\n                            "+e._s(t.label)+"\n                            "),r("i",{staticClass:"fa float-right",class:e.sortColumn===n?"desc"===e.sortType?" fa fa-angle-down":" fa fa-angle-up":""})])}),e._v(" "),e._t("thead-tr")],2)]),e._v(" "),r("tbody",e._l(e.paginated,function(t,n){return r("tr",{key:n,on:{click:function(r){return e.click(t,n)}}},[e._l(e.columns,function(n,a){return[n.html?e._e():r("td",{key:a,class:n.numeric?"numeric":""},[e._v("\n                                "+e._s(e.collect(t,n.field))+"\n                            ")]),e._v(" "),n.html?r("td",{key:a,class:n.numeric?"numeric":"",domProps:{innerHTML:e._s(e.collect(t,n.field))},on:{click:e.handleClick}}):e._e()]}),e._v(" "),e._t("tbody-tr",null,{row:t})],2)}),0)])]),e._v(" "),e.paginate?r("div",{staticClass:"table-footer"},[r("div",{staticClass:"datatable-length float-left pl-3"},[r("div",{staticClass:"datatable-info  pb-2 mt-3"},[r("span",[e._v("Showing ")]),e._v(" "+e._s((e.currentPage-1)*e.currentPerPage?(e.currentPage-1)*e.currentPerPage:1)+" -"+e._s(-1==e.currentPerPage?e.processedRows.length:Math.min(e.processedRows.length,e.currentPerPage*e.currentPage))+" of "+e._s(e.processedRows.length)+"\n                    "),r("span",[e._v("records")])])]),e._v(" "),r("div",{staticClass:"float-right"},[r("ul",{staticClass:"pagination"},[r("li",[r("a",{staticClass:" link",attrs:{href:"javascript:undefined",tabindex:"0"},on:{click:function(t){return t.preventDefault(),e.previousPage(t)}}},[e._v("\n                            < PREV\n                        ")])]),e._v("    \n                    "),r("li",[r("a",{staticClass:" link",attrs:{href:"javascript:undefined",tabindex:"0"},on:{click:function(t){return t.preventDefault(),e.nextPage(t)}}},[e._v("\n                            NEXT >\n                        ")])])])])]):e._e()])},staticRenderFns:[]}}});