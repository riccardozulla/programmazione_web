(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-393a04c8"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,a,i){try{var s=t[a](i),u=s.value}catch(c){return void r(c)}s.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function s(t){n(i,o,a,s,u,"next",t)}function u(t){n(i,o,a,s,u,"throw",t)}s(void 0)}))}}},"73cf":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex centered-form"},[r("form",{staticClass:"text-center form-signin",on:{submit:function(e){return e.preventDefault(),t.register.apply(null,arguments)}}},[r("p",{staticClass:"return-msg"},[t._v(t._s(t.returnMsg))]),r("h1",{staticClass:"h3 mb-3 fw-normal"},[t._v("Please register")]),r("div",{staticClass:"form-floating"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{required:"",type:"text",id:"name",placeholder:"Mario"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),r("label",{attrs:{for:"name"}},[t._v("Name")])]),r("div",{staticClass:"form-floating"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.surname,expression:"surname"}],staticClass:"form-control",attrs:{required:"",type:"text",id:"surname",placeholder:"Rossi"},domProps:{value:t.surname},on:{input:function(e){e.target.composing||(t.surname=e.target.value)}}}),r("label",{attrs:{for:"surname"}},[t._v("Surname")])]),r("div",{staticClass:"form-floating"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{required:"",type:"email",id:"email",placeholder:"name@example.com"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),r("label",{attrs:{for:"email"}},[t._v("Email address")])]),r("div",{staticClass:"form-floating"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{required:"",type:"password",id:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),r("label",{attrs:{for:"password"}},[t._v("Password")])]),r("button",{staticClass:"w-100 btn btn-lg btn-primary",attrs:{type:"submit"}},[t._v(" Register ")])])])},o=[],a=r("1da1"),i=(r("96cf"),r("d3b7"),r("e9c4"),r("b0c0"),r("a18c")),s={name:"Register",components:{},data:function(){return{name:"",surname:"",email:"",password:"",returnMsg:""}},methods:{register:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t.name,surname:t.surname,email:t.email,password:t.password})});case 2:return r=e.sent,e.next=5,r.text();case 5:n=e.sent,r.ok?(t.returnMsg=n,setTimeout((function(){i["a"].push("/login")}),2e3)):400===r.status?t.returnMsg=n:t.returnMsg="Server error",t.name="",t.surname="",t.email="",t.password="";case 11:case"end":return e.stop()}}),e)})))()}}},u=s,c=(r("fdd8"),r("2877")),l=Object(c["a"])(u,n,o,!1,null,"e39d83c2",null);e["default"]=l.exports},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(k){u=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new P(n||[]);return a._invoke=O(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=c;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",m={};function v(){}function g(){}function y(){}var w={};u(w,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(j([])));x&&x!==r&&n.call(x,a)&&(w=x);var L=y.prototype=v.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,a,i,s){var u=l(t[o],t,a);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(f).then((function(t){c.value=t,i(c)}),(function(t){return r("throw",t,i,s)}))}s(u.arg)}var o;function a(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}this._invoke=a}function O(t,e,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return F()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var s=S(i,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function j(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:F}}function F(){return{value:e,done:!0}}return g.prototype=y,u(L,"constructor",y),u(y,"constructor",g),g.displayName=u(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},E(_.prototype),u(_.prototype,i,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new _(c(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(L),u(L,s,"Generator"),u(L,a,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},adb8:function(t,e,r){},b0c0:function(t,e,r){var n=r("83ab"),o=r("5e77").EXISTS,a=r("e330"),i=r("9bf2").f,s=Function.prototype,u=a(s.toString),c=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=a(c.exec),f="name";n&&!o&&i(s,f,{configurable:!0,get:function(){try{return l(c,u(this))[1]}catch(t){return""}}})},e9c4:function(t,e,r){var n=r("23e7"),o=r("da84"),a=r("d066"),i=r("2ba4"),s=r("e330"),u=r("d039"),c=o.Array,l=a("JSON","stringify"),f=s(/./.exec),h=s("".charAt),p=s("".charCodeAt),d=s("".replace),m=s(1..toString),v=/[\uD800-\uDFFF]/g,g=/^[\uD800-\uDBFF]$/,y=/^[\uDC00-\uDFFF]$/,w=function(t,e,r){var n=h(r,e-1),o=h(r,e+1);return f(g,t)&&!f(y,o)||f(y,t)&&!f(g,n)?"\\u"+m(p(t,0),16):t},b=u((function(){return'"\\udf06\\ud834"'!==l("\udf06\ud834")||'"\\udead"'!==l("\udead")}));l&&n({target:"JSON",stat:!0,forced:b},{stringify:function(t,e,r){for(var n=0,o=arguments.length,a=c(o);n<o;n++)a[n]=arguments[n];var s=i(l,null,a);return"string"==typeof s?d(s,v,w):s}})},fdd8:function(t,e,r){"use strict";r("adb8")}}]);
//# sourceMappingURL=chunk-393a04c8.cd52d8cd.js.map