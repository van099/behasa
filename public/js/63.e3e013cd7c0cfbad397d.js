webpackJsonp([63],{1474:function(t,e,a){var n=a(1475);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(38)("221290fe",n,!0,{})},1475:function(t,e){throw new Error("Module build failed: BrowserslistError: Unknown browser query `dead`\n    at C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\browserslist\\index.js:164:11\n    at Array.reduce (<anonymous>)\n    at resolve (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\browserslist\\index.js:132:18)\n    at browserslist (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\browserslist\\index.js:224:16)\n    at Browsers.parse (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\browsers.js:61:16)\n    at new Browsers (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\browsers.js:52:30)\n    at loadPrefixes (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\autoprefixer.js:70:24)\n    at plugin (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\autoprefixer.js:81:24)\n    at LazyResult.run (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:277:20)\n    at LazyResult.asyncTick (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:192:32)\n    at C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:231:20\n    at new Promise (<anonymous>)\n    at LazyResult.async (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:228:27)\n    at LazyResult.then (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:134:21)\n    at C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\vue-loader\\lib\\style-compiler\\index.js:62:10")},1476:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(46),o=a.n(n),s=a(569),i=a.n(s),r=a(570),l=a(767),u=a(108),d=(a.n(u),a(80)),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t};l.a.init(),o.a.use(i.a,r.a),e.default={name:"language",data:function(){return{formstate:{},model:{text_language:this.$store.state.user.language,audio_language:this.$store.state.user.language,category:this.$store.state.user.category},languages:[],categories:[]}},methods:{onSubmit:function(){var t=this;if(!this.formstate.$invalid){for(var e=this.languages,a="en-en",n=0;n<e.length;n++)if(e[n].id==this.model.text_language){a=e[n].code;break}var o={text_language:this.model.text_language,audio_language:this.model.audio_language,category:this.model.category};$.getJSON("public/languages/"+a+".json").then(function(e){d.a.setLocaleMessage(a,e),d.a.locale=a,o=c({},o,{language_code:a,messages:e}),t.$store.commit("updateCustomerOption",o),localStorage.setItem("customerOption",JSON.stringify(o)),t.$router.push("/")},function(e){t.$store.commit("updateCustomerOption",o),localStorage.setItem("customerOption",JSON.stringify(o)),t.$router.push("/")})}}},mounted:function(){var t=this;l.a.get("/get_language_categories").then(function(e){var a=e.data;t.languages=a.languages,t.categories=a.categories,t.$i18n.locale="ch"},function(t){console.log(t)})},destroyed:function(){}}},1477:function(t,e,a){var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row mt-2"},[e("div",{staticClass:"col-sm-12"},[e("div",{staticClass:"text-center m-2 mt-5"},[e("img",{staticClass:"logo-img",attrs:{src:a(1478)}})])])])}];t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid img_backgrond"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-3 offset-lg-5 col-sm-6 offset-sm-3 col-xs-10 offset-xs-1 login-content mt-5"},[t._m(0),a("div",{staticClass:"login-content-h-line"}),t._v(" "),a("vue-form",{attrs:{state:t.formstate},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("div",{staticClass:"row sub-select-content"},[a("div",{staticClass:"col-sm-12 mt-3 "},[a("div",{staticClass:"form-group"},[a("validate",{attrs:{tag:"div"}},[a("label",{attrs:{for:"category"}},[t._v("Select Category")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.model.category,expression:"model.category"}],staticClass:"form-control",attrs:{name:"category",id:"category",required:"",autofocus:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.model,"category",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Select Category")]),t._v(" "),t._l(t.categories,function(e){return a("option",{domProps:{value:e.id}},[t._v("\n                                        "+t._s(e.name)+"\n                                    ")])})],2),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"category",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"required"},slot:"required"},[t._v("Category is a required field")])])],1)],1)]),t._v(" "),a("div",{staticClass:"col-sm-12 mt-3"},[a("div",{staticClass:"form-group"},[a("validate",{attrs:{tag:"div"}},[a("label",{attrs:{for:"text_language"}},[t._v("Select Language")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.model.text_language,expression:"model.text_language"}],staticClass:"form-control",attrs:{name:"text_language",id:"text_language",required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.model,"text_language",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Select Language")]),t._v(" "),t._l(t.languages,function(e){return a("option",{domProps:{value:e.id}},[t._v("\n                                        "+t._s(e.name)+"\n                                    ")])})],2),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"text_language",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"required"},slot:"required"},[t._v("Language is a required field")])])],1)],1)]),t._v(" "),a("div",{staticClass:"col-sm-12 mt-3 "},[a("div",{staticClass:"form-group"},[a("validate",{attrs:{tag:"div"}},[a("label",{attrs:{for:"audio_language"}},[t._v("Select Audio Language")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.model.audio_language,expression:"model.audio_language"}],staticClass:"form-control",attrs:{name:"audio_language",id:"audio_language",required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.model,"audio_language",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Select Audio Language")]),t._v(" "),t._l(t.languages,function(e){return a("option",{domProps:{value:e.id}},[t._v(t._s(e.name))])})],2),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"audio_language",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"required"},slot:"required"},[t._v("Audio Language is a required field")])])],1)],1)]),t._v(" "),a("div",{staticClass:"col-lg-12 col-md-12 text-right"},[a("div",{staticClass:"form-group sub-select"},[a("input",{staticClass:"btn btn-info  btn-sm submit-btn",attrs:{type:"submit",value:"Submit"}})])]),t._v(" "),a("br")])]),t._v(" "),a("div",{staticClass:"login-content-f-line"})],1)])])},staticRenderFns:n}},1478:function(t,e){t.exports="/vuejs-laravel/public/images/logo.png?c72104ecb684b5a513ccb8754e4a190d"},1577:function(t,e,a){var n=a(45)(a(1476),a(1477),!1,function(t){a(1474)},"data-v-3293e7a2",null);t.exports=n.exports},563:function(t,e,a){"use strict";var n,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){function a(t,e){if(!a.installed){if(a.installed=!0,!e)return void console.error("You have to install axios");t.axios=e,Object.defineProperties(t.prototype,{axios:{get:function(){return e}},$http:{get:function(){return e}}})}}"object"==o(e)?t.exports=a:void 0===(n=function(){return a}.apply(e,[]))||(t.exports=n)}()},569:function(t,e,a){(function(e){var a;a=function(){"use strict";var t=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,a=/^(http\:\/\/|https\:\/\/)(.{4,})$/,n=function(e,a,n){return t.test(e)};n._allowNulls=!0;var o=function(t,e,a){return!isNaN(t)};o._allowNulls=!0;var s=function(t,e,n){return a.test(t)};s._allowNulls=!0;var i={validators:{email:n,number:o,url:s,required:function(t,e,a){return!1===e||(0===t||(!(!(a.data.attrs&&void 0!==a.data.attrs.bool||a.componentOptions&&a.componentOptions.propsData&&void 0!==a.componentOptions.propsData.bool)||!1!==t)||(Array.isArray(t)?!!t.length:!!t)))},minlength:function(t,e){return t.length>=e},maxlength:function(t,e){return e>=t.length},pattern:function(t,e){return new RegExp("^"+e+"$").test(t)},min:function(t,e,a){return"number"==(a.data.attrs.type||"").toLowerCase()?+t>=+e:t>=e},max:function(t,e,a){return"number"==(a.data.attrs.type||"").toLowerCase()?+e>=+t:e>=t}},formComponent:"VueForm",formTag:"form",messagesComponent:"FieldMessages",messagesTag:"div",showMessages:"",validateComponent:"Validate",validateTag:"div",fieldComponent:"Field",fieldTag:"div",formClasses:{dirty:"vf-form-dirty",pristine:"vf-form-pristine",valid:"vf-form-valid",invalid:"vf-form-invalid",touched:"vf-form-touched",untouched:"vf-form-untouched",focused:"vf-form-focused",submitted:"vf-form-submitted",pending:"vf-form-pending"},validateClasses:{dirty:"vf-field-dirty",pristine:"vf-field-pristine",valid:"vf-field-valid",invalid:"vf-field-invalid",touched:"vf-field-touched",untouched:"vf-field-untouched",focused:"vf-field-focused",submitted:"vf-field-submitted",pending:"vf-field-pending"},inputClasses:{dirty:"vf-dirty",pristine:"vf-pristine",valid:"vf-valid",invalid:"vf-invalid",touched:"vf-touched",untouched:"vf-untouched",focused:"vf-focused",submitted:"vf-submitted",pending:"vf-pending"},Promise:"function"==typeof Promise?Promise:null},r=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},l=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),u=function(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t},d=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e};function c(t,e){var a;return u(a={},t.dirty,e.$dirty),u(a,t.pristine,e.$pristine),u(a,t.valid,e.$valid),u(a,t.invalid,e.$invalid),u(a,t.touched,e.$touched),u(a,t.untouched,e.$untouched),u(a,t.focused,e.$focused),u(a,t.pending,e.$pending),u(a,t.submitted,e.$submitted),a}function f(t){return t.model?t.model.value:t.directives.filter(function(t){return"model"===t.name})[0].value}function m(t,e){var a={vModel:[],label:null,messages:null};if(!t)return a;return function t(n){for(var o=0;o<n.length;o++){var s=n[o];s.componentOptions&&s.componentOptions.tag===h(e.messagesComponent)&&(a.messages=s),"label"!==s.tag||a.label||(a.label=s),s.data&&(s.data.model?a.vModel.push(s):s.data.directives&&s.data.directives.filter(function(t){return"model"===t.name}).length&&a.vModel.push(s)),s.children?t(s.children):s.componentOptions&&s.componentOptions.children&&t(s.componentOptions.children)}}(t),a}function v(t){return t.data&&t.data.attrs&&t.data.attrs.name?t.data.attrs.name:t.componentOptions&&t.componentOptions.propsData&&t.componentOptions.propsData.name?t.componentOptions.propsData.name:void 0}var p=/([^-])([A-Z])/g;function h(t){return t.replace(p,"$1-$2").replace(p,"$1-$2").toLowerCase()}function g(){return Math.random().toString(36).substr(2,10)}var _="VueFormProviderConfig"+g(),b="VueFormProviderState"+g(),y="VueFormProviderParentForm"+g(),$=Object.prototype.hasOwnProperty,C=Object.prototype.toString,w=Object.defineProperty,x=Object.getOwnPropertyDescriptor,O=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===C.call(t)},j=function(t){if(!t||"[object Object]"!==C.call(t))return!1;var e,a=$.call(t,"constructor"),n=t.constructor&&t.constructor.prototype&&$.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!a&&!n)return!1;for(e in t);return void 0===e||$.call(t,e)},F=function(t,e){w&&"__proto__"===e.name?w(t,e.name,{enumerable:!0,configurable:!0,value:e.newValue,writable:!0}):t[e.name]=e.newValue},S=function(t,e){if("__proto__"===e){if(!$.call(t,e))return;if(x)return x(t,e).value}return t[e]},N=function t(){var e,a,n,o,s,i,r=arguments[0],l=1,u=arguments.length,d=!1;for("boolean"==typeof r&&(d=r,r=arguments[1]||{},l=2),(null==r||"object"!=typeof r&&"function"!=typeof r)&&(r={});l<u;++l)if(null!=(e=arguments[l]))for(a in e)n=S(r,a),r!==(o=S(e,a))&&(d&&o&&(j(o)||(s=O(o)))?(s?(s=!1,i=n&&O(n)?n:[]):i=n&&j(n)?n:{},F(r,{name:a,newValue:t(d,i,o)})):void 0!==o&&F(r,{name:a,newValue:o}));return r},L={render:function(t){var e=this,a={};return"undefined"!=typeof window&&(a.novalidate=""),t(this.tag||this.vueFormConfig.formTag,{on:{submit:function(t){e.state.$pending?(t.preventDefault(),e.vueFormConfig.Promise.all(e.promises).then(function(){e.state._submit(),e.$emit("submit",t),e.promises=[]})):(e.state._submit(),e.$emit("submit",t))},reset:function(t){e.state._reset(),e.$emit("reset",t)}},class:this.className,attrs:a},[this.$slots.default])},props:{state:{type:Object,required:!0},tag:String,showMessages:String},inject:{vueFormConfig:_},provide:function(){var t;return u(t={},b,this.state),u(t,y,this),t},data:function(){return{promises:[]}},created:function(){var t=this;if(this.state){var e={},a=this.state,n={$dirty:!1,$pristine:!0,$valid:!0,$invalid:!1,$submitted:!1,$touched:!1,$untouched:!0,$focused:!1,$pending:!1,$error:{},$submittedState:{},_id:"",_submit:function(){t.state.$submitted=!0,t.state._cloneState()},_cloneState:function(){var e=JSON.parse(JSON.stringify(a));delete e.$submittedState,Object.keys(e).forEach(function(a){t.$set(t.state.$submittedState,a,e[a])})},_addControl:function(n){e[n.$name]=n,t.$set(a,n.$name,n)},_removeControl:function(a){delete e[a.$name],t.$delete(t.state,a.$name),t.$delete(t.state.$error,a.$name)},_validate:function(){Object.keys(e).forEach(function(t){e[t]._validate()})},_reset:function(){a.$submitted=!1,a.$pending=!1,a.$submittedState={},Object.keys(e).forEach(function(t){var a=e[t];a._hasFocused=!1,a._setUntouched(),a._setPristine(),a.$submitted=!1,a.$pending=!1})}};Object.keys(n).forEach(function(e){t.$set(t.state,e,n[e])}),this.$watch("state",function(){var n=!1,o=!0,s=!1,i=!1,r=!1;Object.keys(e).forEach(function(l){var u=e[l];u.$submitted=a.$submitted,u.$dirty&&(n=!0),u.$touched&&(s=!0),u.$focused&&(i=!0),u.$pending&&(r=!0),u.$valid?t.$delete(a.$error,u.$name):(o=!1,t.$set(a.$error,u.$name,u))}),a.$dirty=n,a.$pristine=!n,a.$touched=s,a.$untouched=!s,a.$focused=i,a.$valid=o,a.$invalid=!o,a.$pending=r},{deep:!0,immediate:!0})}},computed:{className:function(){return c(this.vueFormConfig.formClasses,this.state)}},methods:{reset:function(){this.state._reset()},validate:function(){this.state._validate()}}},P="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var V,E=(function(t){(function(){var e={}.hasOwnProperty,a=[].slice;t.exports=function(t,n){var o,s,i,r;for(o in s=[],r=[],n)e.call(n,o)&&(i=n[o],"this"!==o&&(s.push(o),r.push(i)));return Function.apply(null,a.call(s).concat(["return eval("+JSON.stringify(t)+")"])).apply(n.this,r)}}).call(P)}(V={exports:{}},V.exports),V.exports);function k(t){if(t)for(var e=0;e<t.length;e++){if("label"===t[e].tag)return t[e];if(t[e].children)return k(t[e].children)}}var D={inject:{vueFormConfig:_,vueFormState:b,vueFormParentForm:y},render:function(t){var e=this,a=[],n=this.formstate[this.fieldname];if(n&&n.$error&&this.isShown&&(Object.keys(n.$error).forEach(function(t){if(e.$slots[t]||e.$scopedSlots[t]){var o=e.$slots[t]||e.$scopedSlots[t](n);if(e.autoLabel){var s=k(o);s&&(s.data=s.data||{},s.data.attrs=s.data.attrs||{},s.data.attrs.for=n._id)}a.push(o)}}),!a.length&&n.$valid&&(this.$slots.default||this.$scopedSlots.default))){var o=this.$slots.default||this.$scopedSlots.default(n);if(this.autoLabel){var s=k(o);s&&(s.data=s.data||{},s.data.attrs=s.data.attrs||{},s.data.attrs.for=n._id)}a.push(o)}return t(this.tag||this.vueFormConfig.messagesTag,a)},props:{state:Object,name:String,show:{type:String,default:""},tag:{type:String},autoLabel:Boolean},data:function(){return{formstate:null,fieldname:""}},created:function(){this.fieldname=this.name,this.formstate=this.state||this.vueFormState},computed:{isShown:function(){var t=this.formstate[this.fieldname],e=this.show||this.vueFormParentForm.showMessages||this.vueFormConfig.showMessages;return!e||!t||E(e,t)}}},q={render:function(t){var e=this,a=m(this.$slots.default,this.vueFormConfig),n=a.vModel,o={for:null};if(n.length){if(this.name=v(n[0]),a.messages&&this.$nextTick(function(){var t=a.messages.componentInstance;t&&(t.fieldname=t.fieldname||e.name)}),this.autoLabel){var s=n[0].data.attrs.id||this.fieldstate._id;this.fieldstate._id=s,n[0].data.attrs.id=s,a.label?(a.label.data=a.label.data||{},a.label.data.attrs=a.label.data.attrs||{},a.label.data.attrs.for=s):"label"===this.tag&&(o.for=s)}n.forEach(function(t){t.data.directives||(t.data.directives=[]),t.data.directives.push({name:"vue-form-validator",value:{fieldstate:e.fieldstate,config:e.vueFormConfig}}),t.data.attrs["vue-form-validator"]="",t.data.attrs.debounce=e.debounce})}return t(this.tag||this.vueFormConfig.validateTag,{class:this.className,attrs:o},this.$slots.default)},props:{state:Object,custom:null,autoLabel:Boolean,tag:{type:String},debounce:Number},inject:{vueFormConfig:_,vueFormState:b,vueFormParentForm:y},data:function(){return{name:"",formstate:null,fieldstate:{}}},methods:{getClasses:function(t){var e=this.fieldstate;return Object.keys(e.$error).reduce(function(e,a){return e[t.invalid+"-"+h(a)]=!0,e},c(t,e))}},computed:{className:function(){return this.getClasses(this.vueFormConfig.validateClasses)},inputClassName:function(){return this.getClasses(this.vueFormConfig.inputClasses)}},mounted:function(){var t=this;this.fieldstate.$name=this.name,this.formstate._addControl(this.fieldstate);var e=this.$el.querySelectorAll("[vue-form-validator]");this.$watch("inputClassName",function(a,n){for(var o,s=void 0,i=function(t,e){n&&Object.keys(n).filter(function(t){return n[t]}).forEach(function(t){return function(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}(e,t)}),s=[],Object.keys(a).filter(function(t){return a[t]}).forEach(function(t){s.push(t),function(t,e){t.classList?t.classList.add(e):t.className+=" "+e}(e,t)})},r=0;o=e[r++];)i(0,o);t.fieldstate._className=s},{deep:!0,immediate:!0}),this.$watch("name",function(e,a){t.formstate._removeControl(t.fieldstate),t.fieldstate.$name=e,t.formstate._addControl(t.fieldstate)})},created:function(){var t=this;this.formstate=this.state||this.vueFormState;var e=this,a=[],n=void 0;this.fieldstate={$name:"",$dirty:!1,$pristine:!0,$valid:!0,$invalid:!1,$touched:!1,$untouched:!0,$focused:!1,$pending:!1,$submitted:!1,$error:{},$attrs:{},_className:null,_id:"vf"+g(),_setValidatorValidity:function(t,a){a?e.$delete(this.$error,t):e.$set(this.$error,t,!0)},_setValidity:function(t){this.$valid=t,this.$invalid=!t},_setDirty:function(){this.$dirty=!0,this.$pristine=!1},_setPristine:function(){this.$dirty=!1,this.$pristine=!0},_setTouched:function(){this.$touched=!0,this.$untouched=!1},_setUntouched:function(){this.$touched=!1,this.$untouched=!0},_setFocused:function(t){this.$focused="boolean"==typeof t&&t,this.$focused?this._setHasFocused():this._setTouched()},_setHasFocused:function(){this._hasFocused=!0},_hasFocused:!1,_validators:{},_validate:function(t){var o=this;t?n=t:t=n,this.$pending=!0;var s=!0,i=f(t.data);i;var r={promises:[],names:[]};a.push(r);var l=t.data.attrs||{},u=t.componentInstance;u&&u._vfValidationData_&&(l=N({},l,u._vfValidationData_));var d=t.componentOptions&&t.componentOptions.propsData?t.componentOptions.propsData:{};Object.keys(this._validators).forEach(function(a){if((""===i||void 0===i||null===i)&&"required"!==a)return o._setValidatorValidity(a,!0),void!0;var n=void 0!==l[a]?l[a]:d[a],u="function"==typeof o._validators[a];if(!u||null!==n&&void 0!==n||o._validators[a]._allowNulls){n&&(o.$attrs[a]=n);var c=u?o._validators[a](i,n,t):e.custom[a];"boolean"==typeof c?c?o._setValidatorValidity(a,!0):(s=!1,o._setValidatorValidity(a,!1)):(r.promises.push(c),r.names.push(a),e.vueFormParentForm.promises.push(c))}}),r.promises.length?e.vueFormConfig.Promise.all(r.promises).then(function(t){r===a[a.length-1]&&(a=[],t.forEach(function(t,e){var a=r.names[e];t?o._setValidatorValidity(a,!0):(s=!1,o._setValidatorValidity(a,!1))}),o._setValidity(s),o.$pending=!1)}):(this._setValidity(s),this.$pending=!1)}},this.custom&&Object.keys(this.custom).forEach(function(e){"function"==typeof t.custom[e]?(t.custom[e]._allowNulls=!0,t.fieldstate._validators[e]=t.custom[e]):t.fieldstate._validators[e]=t.custom[e]}),this.$watch("custom",function(e,a){var n,o,s,i;a&&e&&(n=e,o=a,s="",i="",Object.keys(n).sort().filter(function(t){return"function"!=typeof n[t]}).forEach(function(t){return s+=n[t]}),Object.keys(o).sort().filter(function(t){return"function"!=typeof n[t]}).forEach(function(t){return i+=o[t]}),s!==i&&t.fieldstate._validate())},{deep:!0})},destroyed:function(){this.formstate._removeControl(this.fieldstate)}},A={inject:{vueFormConfig:_},render:function(t){var e=m(this.$slots.default,this.vueFormConfig),a=e.vModel,n={for:null};if(a.length&&this.autoLabel){var o=a[0].data.attrs&&a[0].data.attrs.id||"vf"+g();a[0].data.attrs.id=o,e.label?(e.label.data=e.label.data||{},e.label.data.attrs=e.label.data.attrs={},e.label.data.attrs.for=o):"label"===this.tag&&(n.for=o)}return t(this.tag||this.vueFormConfig.fieldTag,{attrs:n},this.$slots.default)},props:{tag:{type:String},autoLabel:{type:Boolean,default:!0}}},M={};function z(t,e,a){Object.keys(t).forEach(function(n){var o="type"===n?t[n].toLowerCase():n.toLowerCase();e[o]&&!a[o]&&(a[o]=e[o])})}var T={name:"vue-form-validator",bind:function(t,e,a){var n=e.value.fieldstate,o=e.value.config.validators,s=a.data.attrs||{};if(v(a)){var i,r,l,u;s.debounce&&(M[n._id]=(i=function(t,e){t._hasFocused&&t._setDirty(),t._validate(e)},r=s.debounce,function(){var t=this,e=arguments,a=l&&!u;clearTimeout(u),u=setTimeout(function(){u=null,l||i.apply(t,e)},r),a&&i.apply(t,e)})),z(s,o,n._validators),a.componentOptions&&a.componentOptions.propsData&&z(a.componentOptions.propsData,o,n._validators),n._validate(a),t.addEventListener("blur",function(){n._setFocused(!1)},!1),t.addEventListener("focus",function(){n._setFocused(!0)},!1);var d=a.componentInstance;d&&(d.$on("blur",function(){n._setFocused(!1)}),d.$on("focus",function(){n._setFocused(!0)}),d.$once("vf:addFocusListeners",function(){t.addEventListener("focusout",function(){n._setFocused(!1)},!1),t.addEventListener("focusin",function(){n._setFocused(!0)},!1)}),d.$on("vf:validate",function(t){d._vfValidationData_||z(t,o,n._validators),d._vfValidationData_=t,n._validate(d.$vnode)}))}else console.warn("vue-form: name attribute missing")},update:function(t,e,a,n){var o=function(t,e,a){var n=!1,o=t.data.attrs||{},s=e.data.attrs||{},i={};if(f(t.data)!==f(e.data)&&(i.vModel=!0,n=!0),Object.keys(a).forEach(function(t){o[t]!==s[t]&&(i[t]=!0,n=!0)}),t.componentOptions&&t.componentOptions.propsData){var r=t.componentOptions.propsData,l=e.componentOptions.propsData;Object.keys(a).forEach(function(t){r[t]!==l[t]&&(i[t]=!0,n=!0)})}if(n)return i}(a,n,e.value.config.validators),s=e.value.fieldstate,i=a.data.attrs||{},r=a.componentInstance;r&&r._vfValidationData_&&(i=N({},i,r[r._vfValidationData_])),-1===a.elm.className.indexOf(s._className[0])&&(a.elm.className=a.elm.className+" "+s._className.join(" ")),o&&(o.vModel?i.debounce?(s.$pending=!0,M[s._id](s,a)):(s._hasFocused&&s._setDirty(),s._validate(a)):s._validate(a))}};function R(t){var e,a=N(!0,{},i,t);this.provide=function(){return u({},_,a)},this.components=(u(e={},a.formComponent,L),u(e,a.messagesComponent,D),u(e,a.validateComponent,q),u(e,a.fieldComponent,A),e),this.directives={vueFormValidator:T}}var J=function(t){function e(){return r(this,e),d(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,R),l(e,null,[{key:"install",value:function(t,e){t.mixin(new this(e))}},{key:"installed",get:function(){return!!this.install.done},set:function(t){this.install.done=t}}]),e}();return R.call(J),J.options=new J,J},t.exports=a()}).call(e,a(25))},570:function(t,e,a){"use strict";e.a={validators:{checkbox:function(t,e,a){return t},sameas:function(t,e,a){return t==e}}}},767:function(t,e,a){"use strict";var n=a(46),o=a.n(n),s=a(108),i=a.n(s),r=a(563),l=a.n(r),u=a(196),d={init:function(){o.a.use(l.a,i.a),o.a.axios.defaults.baseURL="api/user/",o.a.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"},setHeader:function(){var t=u.a.getUser("user");o.a.axios.defaults.headers.common.user_id=""+t.user_id,o.a.axios.defaults.headers.common.password=""+t.password},query:function(t,e){return o.a.axios.get(t,e).catch(function(t){throw new Error("[RWV] ApiService "+t)})},get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";null!==u.a.getUser()&&this.setHeader();var a="";return _.isNaN(e)||(a="?"+e),_.isObject(e)&&(a="?"+_.keys(e).filter(function(t){return null!=e[t]&&"null"!==e[t]}).map(function(t){return t+"="+e[t]}).join("&")),o.a.axios.get(""+t+a).catch(function(t){throw new Error("[RWV] ApiService "+t)})},post:function(t,e){return console.log(o.a.axios),null!==u.a.getUser()&&this.setHeader(),o.a.axios.post(""+t,e)}};e.a=d}});