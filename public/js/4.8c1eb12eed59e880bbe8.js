webpackJsonp([4],{1059:function(s,t){s.exports="/vuejs-laravel/public/images/e2.jpg?b6a8ff8303972eb0a74a194b3d2d44a0"},1097:function(s,t,a){var e=a(1098);"string"==typeof e&&(e=[[s.i,e,""]]),e.locals&&(s.exports=e.locals);a(38)("c9ffc660",e,!0,{})},1098:function(s,t){throw new Error("Module build failed: BrowserslistError: Unknown browser query `dead`\n    at C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\browserslist\\index.js:164:11\n    at Array.reduce (<anonymous>)\n    at resolve (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\browserslist\\index.js:132:18)\n    at browserslist (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\browserslist\\index.js:224:16)\n    at Browsers.parse (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\browsers.js:61:16)\n    at new Browsers (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\browsers.js:52:30)\n    at loadPrefixes (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\autoprefixer.js:70:24)\n    at plugin (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\autoprefixer.js:81:24)\n    at LazyResult.run (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:277:20)\n    at LazyResult.asyncTick (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:192:32)\n    at C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:231:20\n    at new Promise (<anonymous>)\n    at LazyResult.async (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:228:27)\n    at LazyResult.then (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:134:21)\n    at C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\vue-loader\\lib\\style-compiler\\index.js:62:10")},1099:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e,i=a(46),r=(a.n(i),a(198)),l=a(201),o=(a.n(l),a(202)),n=(a.n(o),a(199)),c=(a.n(n),a(203)),d=(a.n(c),a(1100)),v=a.n(d),u=a(1105),_=a.n(u),p=a(1110),m=a.n(p),b=a(1115),C=a.n(b);t.default={name:"E-commerce",props:{},components:{IEcharts:r.default,popularItem:v.a,recentActivity:_.a,recentlyViewed:m.a,todayDeal:C.a},data:function(){return{popular_items:[],recently_viewed:[],today_deals:[],recent_activity:[],tabindex:0,instances:[],loading:!1,line:{grid:{top:5,bottom:55,right:"2%"},xAxis:[{color:["red"],type:"category",axisTick:{alignWithLabel:!0},axisLine:{onZero:!1},axisPointer:{label:{formatter:function(s){return"2015  "+s.value+(s.seriesData.length?"："+s.seriesData[0].data:"")}}},data:["2016-1","2016-1","2016-3","2016-4","2016-5","2016-6","2016-2","2016-4","2016-4","2016-10","2016-4","2016-2"]},{type:"category",axisTick:{alignWithLabel:!0},axisPointer:{label:{formatter:function(s){return"2015  "+s.value+(s.seriesData.length?"："+s.seriesData[0].data:"")}}},data:["2015-1","2015-2","2015-3","2015-1","2015-5","2015-6","2015-5","2015-8","2015-9","2015-10","2015-11","2015-12"]}],yAxis:{axisLine:{lineStyle:{color:"#4d8a77"}},axisTick:{color:["#4fc1e9"],show:!0,alignWithLabel:!1,interval:"auto",inside:!1,length:5}},series:[{name:"2015 ",type:"line",xAxisIndex:1,smooth:!0,color:["#4fc1e9"],data:[.6,1.9,2,3.1,4.8,4.1,6.4,6.2,3.1,4.1,5.1,3.5]},{name:"2016 ",type:"line",smooth:!0,color:["#6494fa"],data:[.9,1.8,2.8,3.2,2.4,5.3,6.2,5.8,4.5,4.6,5.4,4.6]}]},area_chart:{title:{text:"",subtext:""},tooltip:{trigger:"axis"},legend:{show:!1,data:["sales","revenue"]},color:{pattern:["red","red"]},calculable:!0,xAxis:[{type:"category",boundaryGap:!1,data:["2000-06-05","2000-06-06","2000-06-07","2000-06-08","2000-06-09","2000-06-10","2000-06-11","2000-06-12","2000-06-13","2000-06-14","2000-06-15","2000-06-16","2000-06-17","2000-06-18","2000-06-19","2000-06-20","2000-06-21","2000-06-22","2000-06-23","2000-06-24","2000-06-25","2000-06-26","2000-06-27","2000-06-28","2000-06-29","2000-06-30","2000-07-01","2000-07-02","2000-07-03","2000-07-04","2000-07-05","2000-07-06","2000-07-07","2000-07-08","2000-07-09","2000-07-09","2000-07-10","2000-07-11","2000-07-12","2000-07-13","2000-07-14","2000-07-15","2000-07-16","2000-07-17","2000-07-18","2000-07-19","2000-07-20","2000-07-21","2000-07-22","2000-07-23","2000-07-24"]}],yAxis:[{type:"value"}],series:[{name:"sales",type:"line",smooth:!0,itemStyle:{normal:{areaStyle:{type:"default",color:"#D3F6F6"},lineStyle:{color:"#95EAEA"}}},data:[16,129,135,86,73,85,73,68,92,130,145,139,115,111,239,206,337,128,155,94,401,206,254,403,255,73,83,125,207,82,44,72,106,107,66,91,92,113,107,131,111,244,369,388,377,483,311,357,385,408]}]}}},watch:{tabindex:function(){var s=this;setTimeout(function(){s.instances.forEach(function(s,t){setTimeout(function(){s.resize()})})})}},mounted:function(){var s=this;e=this.$store.subscribe(function(t,a){"left_menu"==t.type&&s.instances.forEach(function(s,t){setTimeout(function(){s.resize()})})}),axios.get("http://www.filltext.com/?rows=3&id={index}&name={lorem|2}&stars={numberRange|1,5}&description={lorem|20}&price={numberRange|20,500}").then(function(t){s.popular_items=t.data,s.popular_items.forEach(function(s){s.image="images/20.jpg"})}).catch(function(s){}),axios.get("http://www.filltext.com/?rows=4&id={index}&stars={numberRange|1,5}&price={numberRange|20,500}").then(function(t){s.recently_viewed=t.data,s.recently_viewed.forEach(function(s){s.image="images/20.jpg"})}).catch(function(s){}),axios.get("http://www.filltext.com/?rows=3&id={index}&stars={numberRange|1,5}&price={numberRange|20,500}").then(function(t){s.today_deals=t.data}).catch(function(s){}),axios.get("http://www.filltext.com/?rows=8&id={index}&stars={numberRange|1,5}&price={numberRange|20,500}").then(function(t){s.recent_activity=t.data}).catch(function(s){})},destroyed:function(){},computed:{},methods:{onReady:function(s){this.instances.push(s)}},beforeRouteLeave:function(s,t,a){e(),a()}}},1100:function(s,t,a){var e=a(45)(a(1103),a(1104),!1,function(s){a(1101)},"data-v-616bf084",null);s.exports=e.exports},1101:function(s,t,a){var e=a(1102);"string"==typeof e&&(e=[[s.i,e,""]]),e.locals&&(s.exports=e.locals);a(38)("655d818e",e,!0,{})},1102:function(s,t){throw new Error("Module build failed: BrowserslistError: Unknown browser query `dead`\n    at C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\browserslist\\index.js:164:11\n    at Array.reduce (<anonymous>)\n    at resolve (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\browserslist\\index.js:132:18)\n    at browserslist (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\browserslist\\index.js:224:16)\n    at Browsers.parse (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\browsers.js:61:16)\n    at new Browsers (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\browsers.js:52:30)\n    at loadPrefixes (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\autoprefixer.js:70:24)\n    at plugin (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\autoprefixer.js:81:24)\n    at LazyResult.run (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:277:20)\n    at LazyResult.asyncTick (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:192:32)\n    at C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:231:20\n    at new Promise (<anonymous>)\n    at LazyResult.async (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:228:27)\n    at LazyResult.then (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:134:21)\n    at C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\vue-loader\\lib\\style-compiler\\index.js:62:10\n    at runMicrotasks (<anonymous>)\n    at processTicksAndRejections (internal/process/task_queues.js:97:5)")},1103:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a(46);a.n(e);t.default={name:"popular_item",props:{item:{required:!0,type:Object}},components:{},data:function(){return{}},mounted:function(){},computed:{},methods:{}}},1104:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"col-md-6 col-lg-4 card_border"},[a("b-card",[a("div",{staticClass:"img_box"},[a("img",{staticClass:"img-fluid",attrs:{src:s.item.image,alt:"phone image"}})]),s._v(" "),a("h4",{staticClass:"model mt-2"},[s._v(s._s(s.item.name))]),s._v(" "),a("hr"),s._v(" "),a("div",{staticClass:"col-md-12"},[a("b",[s._v("Description:")]),s._v(" "),a("div",{staticClass:"text-justify"},[s._v(s._s(s.item.description)+" "),a("a",{attrs:{href:""}},[s._v("Read more")])])]),s._v(" "),a("div",{staticClass:"back_color mt-2"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 text-center mt-1"},[s._v("Cost")]),s._v(" "),a("div",{staticClass:"col-6 mt-1"},[s._v(s._s(s.item.price)+"$")])])]),s._v(" "),a("div",{staticClass:"col-12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6 col-6 text-center mt-2"},[s._v("Rating")]),s._v(" "),a("div",{staticClass:"col-lg-6  col-6 icon_star mt-2"},s._l(s.item.stars,function(s){return a("i",{staticClass:"fa fa-star-o"})}),0)])])]),s._v(" "),a("div",{staticClass:"row pull-8"},[a("div",{staticClass:"col-md-12 text-center mt-3"},[a("div",{staticClass:"btn btn-info"},[s._v("More")])])])])],1)},staticRenderFns:[]}},1105:function(s,t,a){var e=a(45)(a(1108),a(1109),!1,function(s){a(1106)},"data-v-c0f803c0",null);s.exports=e.exports},1106:function(s,t,a){var e=a(1107);"string"==typeof e&&(e=[[s.i,e,""]]),e.locals&&(s.exports=e.locals);a(38)("c5358ce0",e,!0,{})},1107:function(s,t){throw new Error("Module build failed: BrowserslistError: Unknown browser query `dead`\n    at C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\browserslist\\index.js:164:11\n    at Array.reduce (<anonymous>)\n    at resolve (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\browserslist\\index.js:132:18)\n    at browserslist (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\browserslist\\index.js:224:16)\n    at Browsers.parse (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\browsers.js:61:16)\n    at new Browsers (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\browsers.js:52:30)\n    at loadPrefixes (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\autoprefixer.js:70:24)\n    at plugin (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\autoprefixer.js:81:24)\n    at LazyResult.run (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:277:20)\n    at LazyResult.asyncTick (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:192:32)\n    at C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:231:20\n    at new Promise (<anonymous>)\n    at LazyResult.async (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:228:27)\n    at LazyResult.then (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:134:21)\n    at C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\vue-loader\\lib\\style-compiler\\index.js:62:10\n    at runMicrotasks (<anonymous>)\n    at processTicksAndRejections (internal/process/task_queues.js:97:5)")},1108:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a(46);a.n(e);t.default={name:"recent_activity",props:{activity:{}},components:{},data:function(){return{}},mounted:function(){},computed:{},methods:{}}},1109:function(s,t,a){s.exports={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"col-sm-6 col-lg-4"},[e("b-card",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 mb-2"},[e("img",{staticClass:"rounded-circle img_height",attrs:{src:a(766),alt:"user image"}})]),s._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:" icon_star"},[e("img",{staticClass:"img-fluid",attrs:{src:a(1059),alt:"image missing"}})])]),s._v(" "),e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"table-responsive"},[e("table",[e("tr",[e("th",[s._v("Order ID ")]),s._v(" "),e("td",[s._v(": #12345")])]),s._v(" "),e("tr",[e("th",[s._v("Name")]),s._v(" "),e("td",[s._v(": Peter jammy")])]),s._v(" "),e("tr",[e("th",[s._v("Product")]),s._v(" "),e("td",[s._v(": Micro oven")])]),s._v(" "),e("tr",[e("th",[e("b",[s._v("Rating")])]),s._v(" "),e("td",[e("div",{staticClass:"icon_star"},[e("i",{staticClass:"fa fa-star"}),s._v(" "),e("i",{staticClass:"fa fa-star"}),s._v(" "),e("i",{staticClass:"fa fa-star-half-empty"}),s._v(" "),e("i",{staticClass:"fa fa-star-o"})])])])])])])])])],1)},staticRenderFns:[]}},1110:function(s,t,a){var e=a(45)(a(1113),a(1114),!1,function(s){a(1111)},"data-v-12826c32",null);s.exports=e.exports},1111:function(s,t,a){var e=a(1112);"string"==typeof e&&(e=[[s.i,e,""]]),e.locals&&(s.exports=e.locals);a(38)("846026d0",e,!0,{})},1112:function(s,t){throw new Error("Module build failed: BrowserslistError: Unknown browser query `dead`\n    at C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\browserslist\\index.js:164:11\n    at Array.reduce (<anonymous>)\n    at resolve (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\browserslist\\index.js:132:18)\n    at browserslist (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\browserslist\\index.js:224:16)\n    at Browsers.parse (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\browsers.js:61:16)\n    at new Browsers (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\browsers.js:52:30)\n    at loadPrefixes (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\autoprefixer.js:70:24)\n    at plugin (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\autoprefixer.js:81:24)\n    at LazyResult.run (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:277:20)\n    at LazyResult.asyncTick (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:192:32)\n    at C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:231:20\n    at new Promise (<anonymous>)\n    at LazyResult.async (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:228:27)\n    at LazyResult.then (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:134:21)\n    at C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\vue-loader\\lib\\style-compiler\\index.js:62:10\n    at runMicrotasks (<anonymous>)\n    at processTicksAndRejections (internal/process/task_queues.js:97:5)")},1113:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a(46);a.n(e);t.default={name:"recently_viewed",props:{viewed:{required:!0,type:Object}},components:{},data:function(){return{}},mounted:function(){},computed:{},methods:{}}},1114:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"col-lg-3 col-md-6 card_border"},[a("b-card",[a("div",{staticClass:"img_box"},[a("img",{staticClass:"img-fluid",attrs:{src:s.viewed.image,alt:"LED tv image"}})]),s._v(" "),a("hr"),s._v(" "),a("div",[a("b",[s._v("Cost")])]),s._v(" "),a("div",{staticClass:"price"},[s._v("$ "+s._s(s.viewed.price))]),s._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("b",[s._v("Rating")])]),s._v(" "),a("div",{staticClass:"col-md-12 icon_star"},s._l(s.viewed.stars,function(s){return a("i",{staticClass:"fa fa-star-o mr-1"})}),0)]),s._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:" col-md-4  mt-3"},[a("div",{staticClass:"btn btn-info"},[s._v("Like "),a("i",{staticClass:"fa fa-thumbs-o-up"})])]),s._v(" "),a("div",{staticClass:"col-md-4 mt-3"},[a("div",{staticClass:"btn btn-danger"},[s._v("Remove "),a("i",{staticClass:"fa fa-trash"})])])])])])],1)},staticRenderFns:[]}},1115:function(s,t,a){var e=a(45)(a(1118),a(1119),!1,function(s){a(1116)},"data-v-dbaac612",null);s.exports=e.exports},1116:function(s,t,a){var e=a(1117);"string"==typeof e&&(e=[[s.i,e,""]]),e.locals&&(s.exports=e.locals);a(38)("2c0b651a",e,!0,{})},1117:function(s,t){throw new Error("Module build failed: BrowserslistError: Unknown browser query `dead`\n    at C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\browserslist\\index.js:164:11\n    at Array.reduce (<anonymous>)\n    at resolve (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\browserslist\\index.js:132:18)\n    at browserslist (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\browserslist\\index.js:224:16)\n    at Browsers.parse (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\browsers.js:61:16)\n    at new Browsers (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\browsers.js:52:30)\n    at loadPrefixes (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\autoprefixer.js:70:24)\n    at plugin (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\autoprefixer.js:81:24)\n    at LazyResult.run (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:277:20)\n    at LazyResult.asyncTick (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:192:32)\n    at C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:231:20\n    at new Promise (<anonymous>)\n    at LazyResult.async (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:228:27)\n    at LazyResult.then (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:134:21)\n    at C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\vue-loader\\lib\\style-compiler\\index.js:62:10\n    at runMicrotasks (<anonymous>)\n    at processTicksAndRejections (internal/process/task_queues.js:97:5)")},1118:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a(46);a.n(e);t.default={name:"today_deal",props:{},components:{},data:function(){return{}},mounted:function(){},computed:{},methods:{}}},1119:function(s,t,a){s.exports={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"col-md-4 col-sm-2 card_border"},[e("b-card",[e("div",{staticClass:"deal_image"},[e("img",{attrs:{src:a(1120)}})]),s._v(" "),e("div",{staticClass:"img_box"},[e("img",{staticClass:"img-fluid",attrs:{src:a(848),alt:"LED Tv image"}})]),s._v(" "),e("hr"),s._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("span",[s._v("Price:")]),s._v(" "),e("span",[e("del",[s._v("$ 2,031")])])]),s._v(" "),e("div",{staticClass:"col-md-12"},[e("span",[s._v("Sale:")]),s._v(" "),e("span",{staticClass:"price_red"},[s._v("$ 1,031")]),s._v(" "),e("span",[s._v("Save: 50%/off")])])]),s._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 mt-3"},[e("p",[e("b",[s._v("Features :")])]),s._v(" "),e("li",[s._v("HD Ready (Resolution: 1366 x 768)")]),s._v(" "),e("li",[s._v("Connectivity - Input: 2*HDMI, 1*VGA")]),s._v(" "),e("li",[s._v(" Remote controller")]),s._v(" "),e("li",[s._v("DLED backlight")])])]),s._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 col-md-12"},[e("div",{staticClass:"order_name mt-2"},[e("b",[s._v("Orders:")])])])]),s._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 col-md-12"},[e("div",{staticClass:"progress mt-3"},[e("div",{staticClass:"progress-bar w-50 progress_height",attrs:{role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"}})])])]),s._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6  mt-3"},[e("div",{staticClass:"btn btn-danger"},[s._v("Remove"),e("i",{staticClass:"fa fa-trash ml-1"})])])])])],1)},staticRenderFns:[]}},1120:function(s,t){s.exports="/vuejs-laravel/public/images/deal_img.png?dc3cc2b39454296dcc769a4c8147223e"},1121:function(s,t,a){var e=[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"col-md-12 tot_boxline3"},[t("h4",{staticClass:"name_visitors"},[this._v("Last Orders")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"col-md-7 mt-5"},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-hover tot_boxline"},[e("thead",[e("tr",[e("th",{staticClass:"text-gray"},[s._v("Product ")]),s._v(" "),e("th",{staticClass:"text-gray"},[s._v("Previous Price")]),s._v(" "),e("th",{staticClass:"text-gray"},[s._v("Current Price")]),s._v(" "),e("th",{staticClass:"text-gray"},[s._v("Changes")]),s._v(" "),e("th",{staticClass:"text-gray"},[s._v("Status")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[e("div",{staticClass:"tb_img"},[e("img",{staticClass:"tb_img rounded-circle",attrs:{src:a(1059),alt:"microwave image"}})])]),s._v(" "),e("td",[s._v("$3.20")]),s._v(" "),e("td",[s._v("$ 10.23")]),s._v(" "),e("td",[e("span",{staticClass:"change_text"},[s._v("- $ 4.561")])]),s._v(" "),e("td",[e("span",{staticClass:"fa fa-arrow-down down_red"})])]),s._v(" "),e("tr",[e("td",[e("div",{staticClass:"tb_img"},[e("img",{staticClass:"tb_img rounded-circle",attrs:{src:a(850),alt:"Mobile image"}})])]),s._v(" "),e("td",[s._v("$ 5.658")]),s._v(" "),e("td",[s._v("$ 4.56")]),s._v(" "),e("td",[e("span",{staticClass:"change_text"},[s._v("- $ 1.897")])]),s._v(" "),e("td",[e("span",{staticClass:"fa fa-arrow-down down_red"})])]),s._v(" "),e("tr",[e("td",[e("div",{staticClass:"tb_img"},[e("img",{staticClass:"tb_img rounded-circle",attrs:{src:a(1128),alt:"image missing"}})])]),s._v(" "),e("td",[s._v("$ 7.89")]),s._v(" "),e("td",[s._v("$ 8.982")]),s._v(" "),e("td",[e("span",{staticClass:"change_text"},[s._v("+ $ 1.205")])]),s._v(" "),e("td",[e("span",{staticClass:" fa fa-arrow-up up_green"})])]),s._v(" "),e("tr",[e("td",[e("div",{staticClass:"tb_img"},[e("img",{staticClass:"tb_img rounded-circle",attrs:{src:a(837),alt:"image missing"}})])]),s._v(" "),e("td",[s._v("$ 7.89")]),s._v(" "),e("td",[s._v("$ 9.58")]),s._v(" "),e("td",[e("span",{staticClass:"change_text"},[s._v(" + $ 2.205")])]),s._v(" "),e("td",[e("span",{staticClass:"fa fa-arrow-up up_green"})])])])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"col-md-12"},[t("h4",{staticClass:"name_visitors"},[this._v("Recent Activity")])])}];s.exports={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3 text-center"},[e("b-card",[e("div",{staticClass:"icon"},[e("img",{attrs:{src:a(1122),alt:"sales icon"}})]),s._v(" "),e("div",{staticClass:"number_font1"},[s._v("Sales")]),s._v(" "),e("span",{staticClass:"arrow_up"},[e("img",{attrs:{src:a(849),alt:"dollar image"}})]),s._v(" "),e("span",{staticClass:"number_font"},[s._v("58.78%")])])],1),s._v(" "),e("div",{staticClass:"col-md-3 text-center"},[e("b-card",[e("div",{staticClass:"icon"},[e("img",{attrs:{src:a(1123),alt:"user image"}})]),s._v(" "),e("div",{staticClass:"number_font1"},[s._v("Income")]),s._v(" "),e("span",{staticClass:"arrow_up"},[e("img",{attrs:{src:a(849),alt:"image up"}})]),s._v(" "),e("span",{staticClass:"number_font"},[s._v("64.12%")])])],1),s._v(" "),e("div",{staticClass:"col-md-3 text-center"},[e("b-card",[e("div",{staticClass:"icon"},[e("img",{attrs:{src:a(1124),alt:"user image"}})]),s._v(" "),e("div",{staticClass:"number_font1"},[s._v("Customers")]),s._v(" "),e("span",{staticClass:"arrow_down text-danger"},[e("img",{attrs:{src:a(1125),alt:"image down"}})]),s._v(" "),e("span",{staticClass:"number_font2"},[s._v("45.65%")])])],1),s._v(" "),e("div",{staticClass:"col-md-3 text-center"},[e("b-card",[e("div",{staticClass:"icon"},[e("img",{attrs:{src:a(1126),alt:"product image"}})]),s._v(" "),e("div",{staticClass:"number_font1"},[s._v("Products")]),s._v(" "),e("span",{staticClass:"arrow_up"},[e("img",{attrs:{src:a(849),alt:"image up"}})]),s._v(" "),e("span",{staticClass:"number_font"},[s._v("84.23%")])])],1)]),s._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-8 col-sm-7"},[e("b-card",[e("div",{staticClass:"col-12"},[e("h4",{staticClass:"Sales_text"},[s._v("Weekly sales report")])]),s._v(" "),e("div",[e("div",{staticClass:"sales_text"},[e("div",{staticStyle:{height:"250px"}},[e("IEcharts",{ref:"areachart",attrs:{option:s.area_chart,loading:s.loading},on:{ready:s.onReady}})],1)])])])],1),s._v(" "),e("div",{staticClass:"col-lg-4 col-sm-5 padding_swiper"},[e("b-card",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 mt-3"},[e("div",{staticClass:"text-center"},[e("div",{staticClass:"pie_rate"},[e("span",{staticClass:"percent_rate"},[s._v("87%")]),s._v(" "),e("div",{staticClass:"text-gray"},[s._v("Bounce rate")])]),s._v(" "),e("img",{staticClass:"img_move",attrs:{src:a(1127),alt:"rounded circle"}})])])]),s._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 mt-5 mb-4 text-center"},[e("div",{staticClass:"percent_rate"},[s._v("22%")]),s._v(" "),e("div",[s._v("Shipping completed")]),s._v(" "),e("div",{staticClass:"progress progree_height mt-3"},[e("div",{staticClass:"progress-bar w-100 progressbar_height bg-success",attrs:{role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"}})])]),s._v(" "),e("div",{staticClass:"col-md-6 mt-5 mb-4 text-center"},[e("div",{staticClass:"percent_rate"},[s._v(" 18%")]),s._v(" "),e("div",[s._v("Shipping in progress")]),s._v(" "),e("div",{staticClass:"progress progree_height mt-3"},[e("div",{staticClass:"progress-bar w-25 progressbar_height bg-warning",attrs:{role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"}})])])])])],1)]),s._v(" "),s._m(0),s._v(" "),e("b-card",{staticClass:"line_remove"},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-hover hover_table"},[e("thead",[e("tr",[e("th",{staticClass:"text-gray"},[s._v("ORDER ID")]),s._v(" "),e("th",{staticClass:"text-gray"},[s._v("DATE")]),s._v(" "),e("th",{staticClass:"text-gray"},[s._v(" CUSTOMER")]),s._v(" "),e("th",{staticClass:"text-gray"},[s._v("STATUS")]),s._v(" "),e("th",{staticClass:"text-gray"},[s._v("PRICE")]),s._v(" "),e("th")])]),s._v(" "),e("tbody",[e("tr",[e("td",{staticClass:"blue_text"},[s._v("#1256SA")]),s._v(" "),e("td",[s._v("2016/06/12")]),s._v(" "),e("td",{staticClass:"blue_text "},[s._v("\n                            Harry john\n                        ")]),s._v(" "),e("td",[e("span",{staticClass:"success_background"},[s._v("Completed")])]),s._v(" "),e("td",[s._v("$ 3,697")]),s._v(" "),e("td",[e("span",{staticClass:"search_icon"},[e("i",{staticClass:"fa fa-search-plus"})])])]),s._v(" "),e("tr",[e("td",{staticClass:"blue_text "},[s._v("#1456G")]),s._v(" "),e("td",[s._v("2016/07/12")]),s._v(" "),e("td",{staticClass:"blue_text "},[s._v("\n                            Devid pork\n                        ")]),s._v(" "),e("td",[e("span",{staticClass:"pending_background"},[s._v("Pending")])]),s._v(" "),e("td",[s._v("$ 5,897")]),s._v(" "),e("td",[e("span",{staticClass:"search_icon"},[e("i",{staticClass:"fa fa-search-plus"})])])]),s._v(" "),e("tr",[e("td",{staticClass:"blue_text "},[s._v("#8754HF")]),s._v(" "),e("td",[s._v("2016/08/12")]),s._v(" "),e("td",{staticClass:"blue_text "},[s._v("\n                            Mendes vally\n                        ")]),s._v(" "),e("td",[e("span",{staticClass:"cancelled_background"},[s._v("Cancelled")])]),s._v(" "),e("td",[s._v("$ 1,205")]),s._v(" "),e("td",[e("span",{staticClass:"search_icon"},[e("i",{staticClass:"fa fa-search-plus"})])])]),s._v(" "),e("tr",[e("td",{staticClass:"blue_text "},[s._v("#687TYA")]),s._v(" "),e("td",[s._v("2016/10/12")]),s._v(" "),e("td",{staticClass:"blue_text "},[s._v("\n                            Freng Georgy\n                        ")]),s._v(" "),e("td",[e("span",{staticClass:"success_background"},[s._v("completed")])]),s._v(" "),e("td",[s._v("$ 1,023")]),s._v(" "),e("td",[e("span",{staticClass:"search_icon"},[e("i",{staticClass:"fa fa-search-plus"})])])]),s._v(" "),e("tr",[e("td",{staticClass:"blue_text "},[s._v("#4894ABL")]),s._v(" "),e("td",[s._v("2016/11/12")]),s._v(" "),e("td",{staticClass:"blue_text "},[s._v("\n                            Peter parker\n                        ")]),s._v(" "),e("td",[e("span",{staticClass:"onhold_background"},[s._v("on hold")])]),s._v(" "),e("td",[s._v("$ 1,320")]),s._v(" "),e("td",[e("span",{staticClass:"search_icon"},[e("i",{staticClass:"fa fa-search-plus"})])])])])])])]),s._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"report_tot_boxline"},[e("h4",{staticClass:"name_visitors"},[s._v(" Reports from visitors")]),s._v(" "),e("b-tabs",{ref:"tabs",staticClass:"tab_color",attrs:{card:""}},[e("b-tab",{attrs:{title:"Popular categories"}},[e("div",{staticClass:"row"},s._l(s.popular_items,function(s){return e("popular-item",{key:s.id,attrs:{item:s}})}),1)]),s._v(" "),e("b-tab",{attrs:{title:"Recently viewed items"}},[e("div",{staticClass:"row recent_mt-10"},s._l(s.recently_viewed,function(s){return e("recently-viewed",{key:s.id,attrs:{viewed:s}})}),1)]),s._v(" "),e("b-tab",{attrs:{title:"Today Deals"}},[e("div",{staticClass:"row"},s._l(s.today_deals,function(s){return e("today-deal",{key:s.id,attrs:{deal:s}})}),1)])],1)],1)])]),s._v(" "),e("div",{staticClass:"col-md-12 product_stats"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-5"},[e("h4",{staticClass:"name_visitors"},[s._v("Product Stats")]),s._v(" "),e("div",{staticStyle:{height:"250px"}},[e("IEcharts",{attrs:{option:s.line,loading:s.loading},on:{ready:s.onReady}})],1)]),s._v(" "),s._m(1)])]),s._v(" "),e("div",{staticClass:"col-md-12  recent_mt-10"},[e("div",{staticClass:"row"},[s._m(2),s._v(" "),s._l(s.recent_activity,function(s){return e("recent-activity",{key:s.id,attrs:{activity:s}})}),s._v(" "),e("div",{staticClass:"col-sm-6 col-lg-4"},[e("b-card",{staticClass:"bg_card"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 text-center"},[e("div",{staticClass:"view text-cente"},[e("i",{staticClass:"fa fa-refresh",attrs:{title:"Reload"}})])])])])],1)],2)])],1)},staticRenderFns:e}},1122:function(s,t){s.exports="/vuejs-laravel/public/images/icon-03.png?79157a6bd36c77ad0b581b847f39362d"},1123:function(s,t){s.exports="/vuejs-laravel/public/images/icon-02.png?baa5dd28be120f2e23c7babf72aee07a"},1124:function(s,t){s.exports="/vuejs-laravel/public/images/users.png?e23ce715e248b62d1a164e871579a59b"},1125:function(s,t){s.exports="/vuejs-laravel/public/images/Icons_1-10.png?9e35e9749fdaee38755848b678a267a2"},1126:function(s,t){s.exports="/vuejs-laravel/public/images/icon-04.png?1d603658771059c4a09db7eee9cc39f4"},1127:function(s,t){s.exports="/vuejs-laravel/public/images/Icons-06 (3).png?fced2d3c7158c726930007272b3e42df"},1128:function(s,t){s.exports="/vuejs-laravel/public/images/e5.png?7ff47f36c050187a7b4bd64abd8d02b5"},1517:function(s,t,a){var e=a(45)(a(1099),a(1121),!1,function(s){a(1097)},"data-v-34fce128",null);s.exports=e.exports},766:function(s,t){s.exports="/vuejs-laravel/public/images/avatar1.jpg?2d4968bd8ec1519b0535ba849643dd1c"},837:function(s,t){s.exports="/vuejs-laravel/public/images/900x600_2.png?7ff47f36c050187a7b4bd64abd8d02b5"},848:function(s,t){s.exports="/vuejs-laravel/public/images/900x600.png?7ff47f36c050187a7b4bd64abd8d02b5"},849:function(s,t){s.exports="/vuejs-laravel/public/images/Icons-10(1).png?a87c46bf4c5aeafb89694ef6353bfce0"},850:function(s,t){s.exports="/vuejs-laravel/public/images/e6.png?7ff47f36c050187a7b4bd64abd8d02b5"}});