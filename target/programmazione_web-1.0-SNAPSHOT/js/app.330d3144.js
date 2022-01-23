(function(e){function t(t){for(var r,a,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-1c0a5c91":"4777a270","chunk-2d21a3d2":"b05ac7c6","chunk-393a04c8":"cd52d8cd","chunk-74336100":"ea41704a"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-1c0a5c91":1,"chunk-393a04c8":1,"chunk-74336100":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1c0a5c91":"06b1f34c","chunk-2d21a3d2":"31d6cfe0","chunk-393a04c8":"688c47e9","chunk-74336100":"c6c3dba6"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],p.parentNode.removeChild(p),n(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/programmazione_web/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4360:function(e,t,n){"use strict";var r=n("2b0e"),a=n("2f62"),o=n("a18c");r["a"].use(a["a"]),t["a"]=new a["a"].Store({state:{user:null,token:null},mutations:{setUser:function(e,t){e.user=t},setToken:function(e,t){e.token=t},logout:function(e){e.user=null,e.token=null,o["a"].push("/")},sessionExpired:function(e){e.user=null,e.token=null,alert("Session expired"),o["a"].push("/login")}},actions:{},getters:{isLoggedIn:function(e){return!!e.token}},modules:{}})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vh-100",attrs:{id:"app"}},[n("Navbar",{staticClass:"app-nav"}),n("router-view",{staticClass:"app-content"})],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"py-2 bg-light border-bottom"},[n("div",{staticClass:"container d-flex flex-wrap"},[n("ul",{staticClass:"nav me-auto"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link link-dark px-2 active",attrs:{to:"/","aria-current":"page"}},[e._v("Home")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link link-dark px-2",attrs:{to:"/dashboard"}},[e._v("Dashboard")])],1)]),n("ul",{staticClass:"nav"},[e.isLoggedIn?e._e():n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link link-dark px-2",attrs:{to:"/login"}},[e._v("Login")])],1),e.isLoggedIn?n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link link-dark px-2",attrs:{to:"to"},nativeOn:{click:function(t){return e.logout.apply(null,arguments)}}},[e._v("Logout")])],1):e._e(),e.isLoggedIn?e._e():n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link link-dark px-2",attrs:{to:"/register"}},[e._v("Sign up")])],1)])])])},c=[],s=n("5530"),u=n("2f62"),l={name:"Navbar",computed:Object(s["a"])({},Object(u["b"])(["isLoggedIn"])),methods:Object(s["a"])({},Object(u["c"])(["logout"]))},d=l,p=n("2877"),f=Object(p["a"])(d,i,c,!1,null,null,null),h=f.exports,g={components:{Navbar:h}},v=g,m=(n("a55b"),Object(p["a"])(v,a,o,!1,null,"2d9c4a6b",null)),b=m.exports,k=n("a18c"),y=n("4360"),C=n("e37d");r["a"].config.productionTip=!0,r["a"].use(C["a"]),new r["a"]({router:k["a"],store:y["a"],render:function(e){return e(b)}}).$mount("#app")},a18c:function(e,t,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0"),n("caad");var r=n("2b0e"),a=n("8c4f"),o=n("4360");r["a"].use(a["a"]);var i=[{path:"/",name:"Home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-1c0a5c91").then(n.bind(null,"a55b3"))}},{path:"/register",name:"register",component:function(){return n.e("chunk-393a04c8").then(n.bind(null,"73cf"))}},{path:"/dashboard",name:"dashboard",component:function(){return n.e("chunk-74336100").then(n.bind(null,"7277"))}}],c=new a["a"]({mode:"history",base:"/programmazione_web/",routes:i});c.beforeEach((function(e,t,n){var r=["/","/login","/register"],a=!r.includes(e.path);a&&!o["a"].getters.isLoggedIn?n("/login"):n()})),t["a"]=c},a55b:function(e,t,n){"use strict";n("ee6c")},ee6c:function(e,t,n){}});
//# sourceMappingURL=app.330d3144.js.map