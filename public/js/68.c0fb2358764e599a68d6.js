webpackJsonp([68],{1164:function(t,e,a){var s=a(1165);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(38)("242ef4cc",s,!0,{})},1165:function(t,e){throw new Error("Module build failed: BrowserslistError: Unknown browser query `dead`\n    at C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\browserslist\\index.js:164:11\n    at Array.reduce (<anonymous>)\n    at resolve (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\browserslist\\index.js:132:18)\n    at browserslist (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\browserslist\\index.js:224:16)\n    at Browsers.parse (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\browsers.js:61:16)\n    at new Browsers (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\browsers.js:52:30)\n    at loadPrefixes (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\autoprefixer.js:70:24)\n    at plugin (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\autoprefixer\\lib\\autoprefixer.js:81:24)\n    at LazyResult.run (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:277:20)\n    at LazyResult.asyncTick (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:192:32)\n    at C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:231:20\n    at new Promise (<anonymous>)\n    at LazyResult.async (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:228:27)\n    at LazyResult.then (C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\postcss\\lib\\lazy-result.js:134:21)\n    at C:\\xampp\\htdocs\\vuejs-laravel\\node_modules\\vue-loader\\lib\\style-compiler\\index.js:62:10\n    at runMicrotasks (<anonymous>)\n    at processTicksAndRejections (internal/process/task_queues.js:97:5)")},1166:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(46),o=a.n(s),i=a(569),r=a.n(i),n=a(570);o.a.use(r.a,n.a),e.default={name:"formfeatures",data:function(){return{username:"",mail:"",password:"",repeatPassword:"",confirm_field:"",address:"",terms:!1,formstate:{},model:{username:"",email:"",password:"",repeatPassword:"",gender:0,address:"",terms:!1}}},methods:{onSubmit:function(){this.formstate.$invalid||this.$router.push("/form_validations")}},mounted:function(){},destroyed:function(){}}},1167:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("b-card",{staticClass:"bg-default-card",attrs:{header:"vue-form Validation","header-tag":"h4"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("vue-form",{attrs:{state:t.formstate},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"form-group"},[a("validate",{attrs:{tag:"div"}},[a("label",{attrs:{for:"email"}},[t._v(" User Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.username,expression:"model.username"}],staticClass:"form-control",attrs:{name:"username",type:"text",required:"",autofocus:"",placeholder:"User Name",id:"email"},domProps:{value:t.model.username},on:{input:function(e){e.target.composing||t.$set(t.model,"username",e.target.value)}}}),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"username",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"required"},slot:"required"},[t._v("Username is a required field")])])],1)],1)]),t._v(" "),a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"form-group"},[a("validate",{attrs:{tag:"div"}},[a("label",{attrs:{for:"email_input"}},[t._v(" E-mail")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.email,expression:"model.email"}],staticClass:"form-control",attrs:{name:"email",type:"email",required:"",placeholder:"E-mail",id:"email_input"},domProps:{value:t.model.email},on:{input:function(e){e.target.composing||t.$set(t.model,"email",e.target.value)}}}),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"email",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"required"},slot:"required"},[t._v("Email is a required field")]),t._v(" "),a("div",{attrs:{slot:"email"},slot:"email"},[t._v("Email is not valid")])])],1)],1)]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"form-group"},[a("validate",{attrs:{tag:"div"}},[a("label",{attrs:{for:"email_password"}},[t._v(" Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.password,expression:"model.password"}],staticClass:"form-control",attrs:{name:"password",type:"password",required:"",placeholder:"Password",minlength:"4",maxlength:"10",id:"email_password"},domProps:{value:t.model.password},on:{input:function(e){e.target.composing||t.$set(t.model,"password",e.target.value)}}}),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"password",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"required"},slot:"required"},[t._v("Password is required")]),t._v(" "),a("div",{attrs:{slot:"minlength"},slot:"minlength"},[t._v("Password should be atleast 4 characters long")]),t._v(" "),a("div",{attrs:{slot:"maxlength"},slot:"maxlength"},[t._v("Password should be atmost 10 characters long")])])],1)],1)]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"form-group"},[a("validate",{attrs:{tag:"div"}},[a("label",{attrs:{for:"email_confirm"}},[t._v(" Confirm Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.repeatPassword,expression:"model.repeatPassword"}],staticClass:"form-control",attrs:{name:"repeatpassword",type:"password",required:"",placeholder:"Confirm Password",sameas:t.model.password,id:"email_confirm"},domProps:{value:t.model.repeatPassword},on:{input:function(e){e.target.composing||t.$set(t.model,"repeatPassword",e.target.value)}}}),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"repeatpassword",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"required"},slot:"required"},[t._v("Password confirmatoin is required")]),t._v(" "),a("div",{attrs:{slot:"sameas"},slot:"sameas"},[t._v("Password and Confirm password should match")])])],1)],1)]),t._v(" "),a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"form-group"},[a("validate",{attrs:{tag:"div"}},[a("label",{attrs:{for:"name_gen"}},[t._v("Gender")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.model.gender,expression:"model.gender"}],staticClass:"form-control",attrs:{id:"name_gen",name:"gender",size:"1",required:"",checkbox:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.model,"gender",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"0",selected:"",disabled:""}},[t._v("\n                                                Please select\n                                            ")]),t._v(" "),a("option",{attrs:{value:"1"}},[t._v("Male")]),t._v(" "),a("option",{attrs:{value:"2"}},[t._v("Female")]),t._v(" "),a("option",{attrs:{value:"3"}},[t._v("Other")])]),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"gender",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"checkbox"},slot:"checkbox"},[t._v("Gender is required")])])],1)],1)]),t._v(" "),a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"form-group"},[a("validate",{attrs:{tag:"div"}},[a("label",{attrs:{for:"address"}},[t._v("Address")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.model.address,expression:"model.address"}],staticClass:"form-control resize_vertical",attrs:{rows:"5",name:"address",id:"address",placeholder:"Enter your Address",required:""},domProps:{value:t.model.address},on:{input:function(e){e.target.composing||t.$set(t.model,"address",e.target.value)}}}),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"address",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"required"},slot:"required"},[t._v("Address is required")])])],1)],1)]),t._v(" "),a("div",{staticClass:"col-sm-12"},[a("validate",{attrs:{tag:"label"}},[a("label",{staticClass:"form-group custom-control custom-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.terms,expression:"model.terms"}],staticClass:"custom-control-input checkbox_label",attrs:{type:"checkbox",name:"terms",id:"terms",checkbox:""},domProps:{checked:Array.isArray(t.model.terms)?t._i(t.model.terms,null)>-1:t.model.terms},on:{change:function(e){var a=t.model.terms,s=e.target,o=!!s.checked;if(Array.isArray(a)){var i=t._i(a,null);s.checked?i<0&&t.$set(t.model,"terms",a.concat([null])):i>-1&&t.$set(t.model,"terms",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.model,"terms",o)}}}),t._v(" "),a("span",{staticClass:"custom-control-indicator"}),t._v(" "),a("span",{staticClass:"custom-control-description"},[t._v("I agree the\n                            "),a("span",[a("router-link",{attrs:{to:"/"}},[t._v("terms & conditions")])],1)])]),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"terms",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"checkbox"},slot:"checkbox"},[t._v("Terms must be accepted")])])],1)],1),t._v(" "),a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"form-group float-right"},[a("input",{staticClass:"btn btn-success",attrs:{type:"submit",value:"Sign Up"}})])])])])],1)])])],1)])},staticRenderFns:[]}},1521:function(t,e,a){var s=a(45)(a(1166),a(1167),!1,function(t){a(1164)},null,null);t.exports=s.exports},569:function(t,e,a){(function(e){var a;a=function(){"use strict";var t=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,a=/^(http\:\/\/|https\:\/\/)(.{4,})$/,s=function(e,a,s){return t.test(e)};s._allowNulls=!0;var o=function(t,e,a){return!isNaN(t)};o._allowNulls=!0;var i=function(t,e,s){return a.test(t)};i._allowNulls=!0;var r={validators:{email:s,number:o,url:i,required:function(t,e,a){return!1===e||(0===t||(!(!(a.data.attrs&&void 0!==a.data.attrs.bool||a.componentOptions&&a.componentOptions.propsData&&void 0!==a.componentOptions.propsData.bool)||!1!==t)||(Array.isArray(t)?!!t.length:!!t)))},minlength:function(t,e){return t.length>=e},maxlength:function(t,e){return e>=t.length},pattern:function(t,e){return new RegExp("^"+e+"$").test(t)},min:function(t,e,a){return"number"==(a.data.attrs.type||"").toLowerCase()?+t>=+e:t>=e},max:function(t,e,a){return"number"==(a.data.attrs.type||"").toLowerCase()?+e>=+t:e>=t}},formComponent:"VueForm",formTag:"form",messagesComponent:"FieldMessages",messagesTag:"div",showMessages:"",validateComponent:"Validate",validateTag:"div",fieldComponent:"Field",fieldTag:"div",formClasses:{dirty:"vf-form-dirty",pristine:"vf-form-pristine",valid:"vf-form-valid",invalid:"vf-form-invalid",touched:"vf-form-touched",untouched:"vf-form-untouched",focused:"vf-form-focused",submitted:"vf-form-submitted",pending:"vf-form-pending"},validateClasses:{dirty:"vf-field-dirty",pristine:"vf-field-pristine",valid:"vf-field-valid",invalid:"vf-field-invalid",touched:"vf-field-touched",untouched:"vf-field-untouched",focused:"vf-field-focused",submitted:"vf-field-submitted",pending:"vf-field-pending"},inputClasses:{dirty:"vf-dirty",pristine:"vf-pristine",valid:"vf-valid",invalid:"vf-invalid",touched:"vf-touched",untouched:"vf-untouched",focused:"vf-focused",submitted:"vf-submitted",pending:"vf-pending"},Promise:"function"==typeof Promise?Promise:null},n=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},l=function(){function t(t,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,a,s){return a&&t(e.prototype,a),s&&t(e,s),e}}(),d=function(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t},u=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e};function c(t,e){var a;return d(a={},t.dirty,e.$dirty),d(a,t.pristine,e.$pristine),d(a,t.valid,e.$valid),d(a,t.invalid,e.$invalid),d(a,t.touched,e.$touched),d(a,t.untouched,e.$untouched),d(a,t.focused,e.$focused),d(a,t.pending,e.$pending),d(a,t.submitted,e.$submitted),a}function m(t){return t.model?t.model.value:t.directives.filter(function(t){return"model"===t.name})[0].value}function f(t,e){var a={vModel:[],label:null,messages:null};if(!t)return a;return function t(s){for(var o=0;o<s.length;o++){var i=s[o];i.componentOptions&&i.componentOptions.tag===h(e.messagesComponent)&&(a.messages=i),"label"!==i.tag||a.label||(a.label=i),i.data&&(i.data.model?a.vModel.push(i):i.data.directives&&i.data.directives.filter(function(t){return"model"===t.name}).length&&a.vModel.push(i)),i.children?t(i.children):i.componentOptions&&i.componentOptions.children&&t(i.componentOptions.children)}}(t),a}function v(t){return t.data&&t.data.attrs&&t.data.attrs.name?t.data.attrs.name:t.componentOptions&&t.componentOptions.propsData&&t.componentOptions.propsData.name?t.componentOptions.propsData.name:void 0}var p=/([^-])([A-Z])/g;function h(t){return t.replace(p,"$1-$2").replace(p,"$1-$2").toLowerCase()}function _(){return Math.random().toString(36).substr(2,10)}var g="VueFormProviderConfig"+_(),b="VueFormProviderState"+_(),$="VueFormProviderParentForm"+_(),y=Object.prototype.hasOwnProperty,w=Object.prototype.toString,C=Object.defineProperty,x=Object.getOwnPropertyDescriptor,j=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===w.call(t)},O=function(t){if(!t||"[object Object]"!==w.call(t))return!1;var e,a=y.call(t,"constructor"),s=t.constructor&&t.constructor.prototype&&y.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!a&&!s)return!1;for(e in t);return void 0===e||y.call(t,e)},F=function(t,e){C&&"__proto__"===e.name?C(t,e.name,{enumerable:!0,configurable:!0,value:e.newValue,writable:!0}):t[e.name]=e.newValue},P=function(t,e){if("__proto__"===e){if(!y.call(t,e))return;if(x)return x(t,e).value}return t[e]},k=function t(){var e,a,s,o,i,r,n=arguments[0],l=1,d=arguments.length,u=!1;for("boolean"==typeof n&&(u=n,n=arguments[1]||{},l=2),(null==n||"object"!=typeof n&&"function"!=typeof n)&&(n={});l<d;++l)if(null!=(e=arguments[l]))for(a in e)s=P(n,a),n!==(o=P(e,a))&&(u&&o&&(O(o)||(i=j(o)))?(i?(i=!1,r=s&&j(s)?s:[]):r=s&&O(s)?s:{},F(n,{name:a,newValue:t(u,r,o)})):void 0!==o&&F(n,{name:a,newValue:o}));return n},N={render:function(t){var e=this,a={};return"undefined"!=typeof window&&(a.novalidate=""),t(this.tag||this.vueFormConfig.formTag,{on:{submit:function(t){e.state.$pending?(t.preventDefault(),e.vueFormConfig.Promise.all(e.promises).then(function(){e.state._submit(),e.$emit("submit",t),e.promises=[]})):(e.state._submit(),e.$emit("submit",t))},reset:function(t){e.state._reset(),e.$emit("reset",t)}},class:this.className,attrs:a},[this.$slots.default])},props:{state:{type:Object,required:!0},tag:String,showMessages:String},inject:{vueFormConfig:g},provide:function(){var t;return d(t={},b,this.state),d(t,$,this),t},data:function(){return{promises:[]}},created:function(){var t=this;if(this.state){var e={},a=this.state,s={$dirty:!1,$pristine:!0,$valid:!0,$invalid:!1,$submitted:!1,$touched:!1,$untouched:!0,$focused:!1,$pending:!1,$error:{},$submittedState:{},_id:"",_submit:function(){t.state.$submitted=!0,t.state._cloneState()},_cloneState:function(){var e=JSON.parse(JSON.stringify(a));delete e.$submittedState,Object.keys(e).forEach(function(a){t.$set(t.state.$submittedState,a,e[a])})},_addControl:function(s){e[s.$name]=s,t.$set(a,s.$name,s)},_removeControl:function(a){delete e[a.$name],t.$delete(t.state,a.$name),t.$delete(t.state.$error,a.$name)},_validate:function(){Object.keys(e).forEach(function(t){e[t]._validate()})},_reset:function(){a.$submitted=!1,a.$pending=!1,a.$submittedState={},Object.keys(e).forEach(function(t){var a=e[t];a._hasFocused=!1,a._setUntouched(),a._setPristine(),a.$submitted=!1,a.$pending=!1})}};Object.keys(s).forEach(function(e){t.$set(t.state,e,s[e])}),this.$watch("state",function(){var s=!1,o=!0,i=!1,r=!1,n=!1;Object.keys(e).forEach(function(l){var d=e[l];d.$submitted=a.$submitted,d.$dirty&&(s=!0),d.$touched&&(i=!0),d.$focused&&(r=!0),d.$pending&&(n=!0),d.$valid?t.$delete(a.$error,d.$name):(o=!1,t.$set(a.$error,d.$name,d))}),a.$dirty=s,a.$pristine=!s,a.$touched=i,a.$untouched=!i,a.$focused=r,a.$valid=o,a.$invalid=!o,a.$pending=n},{deep:!0,immediate:!0})}},computed:{className:function(){return c(this.vueFormConfig.formClasses,this.state)}},methods:{reset:function(){this.state._reset()},validate:function(){this.state._validate()}}},E="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var S,V=(function(t){(function(){var e={}.hasOwnProperty,a=[].slice;t.exports=function(t,s){var o,i,r,n;for(o in i=[],n=[],s)e.call(s,o)&&(r=s[o],"this"!==o&&(i.push(o),n.push(r)));return Function.apply(null,a.call(i).concat(["return eval("+JSON.stringify(t)+")"])).apply(s.this,n)}}).call(E)}(S={exports:{}},S.exports),S.exports);function q(t){if(t)for(var e=0;e<t.length;e++){if("label"===t[e].tag)return t[e];if(t[e].children)return q(t[e].children)}}var L={inject:{vueFormConfig:g,vueFormState:b,vueFormParentForm:$},render:function(t){var e=this,a=[],s=this.formstate[this.fieldname];if(s&&s.$error&&this.isShown&&(Object.keys(s.$error).forEach(function(t){if(e.$slots[t]||e.$scopedSlots[t]){var o=e.$slots[t]||e.$scopedSlots[t](s);if(e.autoLabel){var i=q(o);i&&(i.data=i.data||{},i.data.attrs=i.data.attrs||{},i.data.attrs.for=s._id)}a.push(o)}}),!a.length&&s.$valid&&(this.$slots.default||this.$scopedSlots.default))){var o=this.$slots.default||this.$scopedSlots.default(s);if(this.autoLabel){var i=q(o);i&&(i.data=i.data||{},i.data.attrs=i.data.attrs||{},i.data.attrs.for=s._id)}a.push(o)}return t(this.tag||this.vueFormConfig.messagesTag,a)},props:{state:Object,name:String,show:{type:String,default:""},tag:{type:String},autoLabel:Boolean},data:function(){return{formstate:null,fieldname:""}},created:function(){this.fieldname=this.name,this.formstate=this.state||this.vueFormState},computed:{isShown:function(){var t=this.formstate[this.fieldname],e=this.show||this.vueFormParentForm.showMessages||this.vueFormConfig.showMessages;return!e||!t||V(e,t)}}},D={render:function(t){var e=this,a=f(this.$slots.default,this.vueFormConfig),s=a.vModel,o={for:null};if(s.length){if(this.name=v(s[0]),a.messages&&this.$nextTick(function(){var t=a.messages.componentInstance;t&&(t.fieldname=t.fieldname||e.name)}),this.autoLabel){var i=s[0].data.attrs.id||this.fieldstate._id;this.fieldstate._id=i,s[0].data.attrs.id=i,a.label?(a.label.data=a.label.data||{},a.label.data.attrs=a.label.data.attrs||{},a.label.data.attrs.for=i):"label"===this.tag&&(o.for=i)}s.forEach(function(t){t.data.directives||(t.data.directives=[]),t.data.directives.push({name:"vue-form-validator",value:{fieldstate:e.fieldstate,config:e.vueFormConfig}}),t.data.attrs["vue-form-validator"]="",t.data.attrs.debounce=e.debounce})}return t(this.tag||this.vueFormConfig.validateTag,{class:this.className,attrs:o},this.$slots.default)},props:{state:Object,custom:null,autoLabel:Boolean,tag:{type:String},debounce:Number},inject:{vueFormConfig:g,vueFormState:b,vueFormParentForm:$},data:function(){return{name:"",formstate:null,fieldstate:{}}},methods:{getClasses:function(t){var e=this.fieldstate;return Object.keys(e.$error).reduce(function(e,a){return e[t.invalid+"-"+h(a)]=!0,e},c(t,e))}},computed:{className:function(){return this.getClasses(this.vueFormConfig.validateClasses)},inputClassName:function(){return this.getClasses(this.vueFormConfig.inputClasses)}},mounted:function(){var t=this;this.fieldstate.$name=this.name,this.formstate._addControl(this.fieldstate);var e=this.$el.querySelectorAll("[vue-form-validator]");this.$watch("inputClassName",function(a,s){for(var o,i=void 0,r=function(t,e){s&&Object.keys(s).filter(function(t){return s[t]}).forEach(function(t){return function(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}(e,t)}),i=[],Object.keys(a).filter(function(t){return a[t]}).forEach(function(t){i.push(t),function(t,e){t.classList?t.classList.add(e):t.className+=" "+e}(e,t)})},n=0;o=e[n++];)r(0,o);t.fieldstate._className=i},{deep:!0,immediate:!0}),this.$watch("name",function(e,a){t.formstate._removeControl(t.fieldstate),t.fieldstate.$name=e,t.formstate._addControl(t.fieldstate)})},created:function(){var t=this;this.formstate=this.state||this.vueFormState;var e=this,a=[],s=void 0;this.fieldstate={$name:"",$dirty:!1,$pristine:!0,$valid:!0,$invalid:!1,$touched:!1,$untouched:!0,$focused:!1,$pending:!1,$submitted:!1,$error:{},$attrs:{},_className:null,_id:"vf"+_(),_setValidatorValidity:function(t,a){a?e.$delete(this.$error,t):e.$set(this.$error,t,!0)},_setValidity:function(t){this.$valid=t,this.$invalid=!t},_setDirty:function(){this.$dirty=!0,this.$pristine=!1},_setPristine:function(){this.$dirty=!1,this.$pristine=!0},_setTouched:function(){this.$touched=!0,this.$untouched=!1},_setUntouched:function(){this.$touched=!1,this.$untouched=!0},_setFocused:function(t){this.$focused="boolean"==typeof t&&t,this.$focused?this._setHasFocused():this._setTouched()},_setHasFocused:function(){this._hasFocused=!0},_hasFocused:!1,_validators:{},_validate:function(t){var o=this;t?s=t:t=s,this.$pending=!0;var i=!0,r=m(t.data);r;var n={promises:[],names:[]};a.push(n);var l=t.data.attrs||{},d=t.componentInstance;d&&d._vfValidationData_&&(l=k({},l,d._vfValidationData_));var u=t.componentOptions&&t.componentOptions.propsData?t.componentOptions.propsData:{};Object.keys(this._validators).forEach(function(a){if((""===r||void 0===r||null===r)&&"required"!==a)return o._setValidatorValidity(a,!0),void!0;var s=void 0!==l[a]?l[a]:u[a],d="function"==typeof o._validators[a];if(!d||null!==s&&void 0!==s||o._validators[a]._allowNulls){s&&(o.$attrs[a]=s);var c=d?o._validators[a](r,s,t):e.custom[a];"boolean"==typeof c?c?o._setValidatorValidity(a,!0):(i=!1,o._setValidatorValidity(a,!1)):(n.promises.push(c),n.names.push(a),e.vueFormParentForm.promises.push(c))}}),n.promises.length?e.vueFormConfig.Promise.all(n.promises).then(function(t){n===a[a.length-1]&&(a=[],t.forEach(function(t,e){var a=n.names[e];t?o._setValidatorValidity(a,!0):(i=!1,o._setValidatorValidity(a,!1))}),o._setValidity(i),o.$pending=!1)}):(this._setValidity(i),this.$pending=!1)}},this.custom&&Object.keys(this.custom).forEach(function(e){"function"==typeof t.custom[e]?(t.custom[e]._allowNulls=!0,t.fieldstate._validators[e]=t.custom[e]):t.fieldstate._validators[e]=t.custom[e]}),this.$watch("custom",function(e,a){var s,o,i,r;a&&e&&(s=e,o=a,i="",r="",Object.keys(s).sort().filter(function(t){return"function"!=typeof s[t]}).forEach(function(t){return i+=s[t]}),Object.keys(o).sort().filter(function(t){return"function"!=typeof s[t]}).forEach(function(t){return r+=o[t]}),i!==r&&t.fieldstate._validate())},{deep:!0})},destroyed:function(){this.formstate._removeControl(this.fieldstate)}},A={inject:{vueFormConfig:g},render:function(t){var e=f(this.$slots.default,this.vueFormConfig),a=e.vModel,s={for:null};if(a.length&&this.autoLabel){var o=a[0].data.attrs&&a[0].data.attrs.id||"vf"+_();a[0].data.attrs.id=o,e.label?(e.label.data=e.label.data||{},e.label.data.attrs=e.label.data.attrs={},e.label.data.attrs.for=o):"label"===this.tag&&(s.for=o)}return t(this.tag||this.vueFormConfig.fieldTag,{attrs:s},this.$slots.default)},props:{tag:{type:String},autoLabel:{type:Boolean,default:!0}}},z={};function T(t,e,a){Object.keys(t).forEach(function(s){var o="type"===s?t[s].toLowerCase():s.toLowerCase();e[o]&&!a[o]&&(a[o]=e[o])})}var M={name:"vue-form-validator",bind:function(t,e,a){var s=e.value.fieldstate,o=e.value.config.validators,i=a.data.attrs||{};if(v(a)){var r,n,l,d;i.debounce&&(z[s._id]=(r=function(t,e){t._hasFocused&&t._setDirty(),t._validate(e)},n=i.debounce,function(){var t=this,e=arguments,a=l&&!d;clearTimeout(d),d=setTimeout(function(){d=null,l||r.apply(t,e)},n),a&&r.apply(t,e)})),T(i,o,s._validators),a.componentOptions&&a.componentOptions.propsData&&T(a.componentOptions.propsData,o,s._validators),s._validate(a),t.addEventListener("blur",function(){s._setFocused(!1)},!1),t.addEventListener("focus",function(){s._setFocused(!0)},!1);var u=a.componentInstance;u&&(u.$on("blur",function(){s._setFocused(!1)}),u.$on("focus",function(){s._setFocused(!0)}),u.$once("vf:addFocusListeners",function(){t.addEventListener("focusout",function(){s._setFocused(!1)},!1),t.addEventListener("focusin",function(){s._setFocused(!0)},!1)}),u.$on("vf:validate",function(t){u._vfValidationData_||T(t,o,s._validators),u._vfValidationData_=t,s._validate(u.$vnode)}))}else console.warn("vue-form: name attribute missing")},update:function(t,e,a,s){var o=function(t,e,a){var s=!1,o=t.data.attrs||{},i=e.data.attrs||{},r={};if(m(t.data)!==m(e.data)&&(r.vModel=!0,s=!0),Object.keys(a).forEach(function(t){o[t]!==i[t]&&(r[t]=!0,s=!0)}),t.componentOptions&&t.componentOptions.propsData){var n=t.componentOptions.propsData,l=e.componentOptions.propsData;Object.keys(a).forEach(function(t){n[t]!==l[t]&&(r[t]=!0,s=!0)})}if(s)return r}(a,s,e.value.config.validators),i=e.value.fieldstate,r=a.data.attrs||{},n=a.componentInstance;n&&n._vfValidationData_&&(r=k({},r,n[n._vfValidationData_])),-1===a.elm.className.indexOf(i._className[0])&&(a.elm.className=a.elm.className+" "+i._className.join(" ")),o&&(o.vModel?r.debounce?(i.$pending=!0,z[i._id](i,a)):(i._hasFocused&&i._setDirty(),i._validate(a)):i._validate(a))}};function R(t){var e,a=k(!0,{},r,t);this.provide=function(){return d({},g,a)},this.components=(d(e={},a.formComponent,N),d(e,a.messagesComponent,L),d(e,a.validateComponent,D),d(e,a.fieldComponent,A),e),this.directives={vueFormValidator:M}}var U=function(t){function e(){return n(this,e),u(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,R),l(e,null,[{key:"install",value:function(t,e){t.mixin(new this(e))}},{key:"installed",get:function(){return!!this.install.done},set:function(t){this.install.done=t}}]),e}();return R.call(U),U.options=new U,U},t.exports=a()}).call(e,a(25))},570:function(t,e,a){"use strict";e.a={validators:{checkbox:function(t,e,a){return t},sameas:function(t,e,a){return t==e}}}}});