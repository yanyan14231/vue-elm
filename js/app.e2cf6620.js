(function(e){function t(t){for(var n,o,i=t[0],u=t[1],s=t[2],f=0,p=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,i=1;i<a.length;i++){var u=a[i];0!==r[u]&&(n=!1)}n&&(c.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},c=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=u;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"0d67":function(e,t,a){},"12db":function(e,t,a){"use strict";var n=a("a63a"),r=a.n(n);r.a},1543:function(e,t,a){},"1ccc":function(e,t,a){},"200f":function(e,t,a){},"25de":function(e,t,a){},"2cd2":function(e,t,a){"use strict";var n=a("1ccc"),r=a.n(n);r.a},"3a9a":function(e,t,a){"use strict";var n=a("25de"),r=a.n(n);r.a},"3bec":function(e,t,a){"use strict";var n=a("200f"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},c=[],o={name:"app"},i=o,u=(a("034f"),a("2877")),s=Object(u["a"])(i,r,c,!1,null,null,null),l=s.exports,f=a("c478"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home-wrap"},[a("header-page",{attrs:{activeName:"homePage"}}),e._m(0)],1)},m=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title"},[a("p",[e._v("欢迎您一块儿体验生活")]),a("span",[e._v("Welcome to experience life together")])])}],v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header-wrap flexflfr"},[a("a",{staticClass:"brand",attrs:{href:"/"}},[e._v("Personal brand")]),a("ul",{staticClass:"flexflfr"},[a("li",[a("router-link",{class:{activeName:"homePage"===e.activeName},attrs:{to:{path:"/"}}},[e._v("首页")])],1),a("li",[a("router-link",{class:{activeName:"sourcePage"===e.activeName},attrs:{to:{path:"/source"}}},[e._v("资源")])],1),a("li",[a("router-link",{class:{activeName:"musicPage"===e.activeName},attrs:{to:{path:"/music"}}},[e._v("音乐")])],1),a("li",[a("router-link",{class:{activeName:"actualTimePage"===e.activeName},attrs:{to:{path:"/actualTime"}}},[e._v("实时")])],1),a("li",[a("router-link",{class:{activeName:"softExamPage"===e.activeName},attrs:{to:{path:"/softExam"}}},[e._v("信息")])],1),a("li",[a("router-link",{class:{activeName:"aboutPage"===e.activeName},attrs:{to:{path:"/about"}}},[e._v("关于")])],1)])])},d=[],h={props:["activeName"]},b=h,g=(a("12db"),Object(u["a"])(b,v,d,!1,null,"69135bb0",null)),_=g.exports,P=a("f187"),x=a.n(P);function w(e,t,a){return e+=(e.indexOf("?")<0?"?":"&")+O(t),new Promise((function(t,n){x()(e,a,(function(e,a){e?n(e):t(a)}))}))}function O(e){var t="";for(var a in e){var n=void 0!==e[a]?e[a]:"";t+="&"+a+"="+encodeURIComponent(n)}return t?t.substring(1):""}var j={g_tk:1928093487,inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"jsonp"},N={param:"jsonpCallback"};function y(){var e="https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",t=Object.assign({},j,{platform:"h5",uin:0,needNewCode:1});return w(e,t,N)}var C={components:{HeaderPage:_},data:function(){return{}},created:function(){this.test()},methods:{test:function(){y().then((function(e){console.log(e)}))}}},E=C,k=(a("3a9a"),Object(u["a"])(E,p,m,!1,null,"cee2eaa0",null)),$=k.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"soft-exam-wrap"},[a("header-page",{attrs:{activeName:"softExamPage"}})],1)},H=[],S={components:{HeaderPage:_},data:function(){return{}}},q=S,M=(a("a0bd"),Object(u["a"])(q,T,H,!1,null,"6ae9a678",null)),J=M.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"actual-time-wrap"},[a("header-page",{attrs:{activeName:"actualTimePage"}})],1)},R=[],U={components:{HeaderPage:_},data:function(){return{}}},W=U,z=(a("6494"),Object(u["a"])(W,I,R,!1,null,"26975769",null)),A=z.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about-wrap"},[a("header-page",{attrs:{activeName:"aboutPage"}})],1)},D=[],F={components:{HeaderPage:_},data:function(){return{}}},G=F,K=(a("3bec"),Object(u["a"])(G,B,D,!1,null,"71c1e02f",null)),L=K.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"music-wrap"},[a("header-page",{attrs:{activeName:"musicPage"}})],1)},V=[],X={components:{HeaderPage:_},data:function(){return{}}},Y=X,Z=(a("e1de"),Object(u["a"])(Y,Q,V,!1,null,"07db3348",null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"source-wrap"},[a("header-page",{attrs:{activeName:"sourcePage"}})],1)},ae=[],ne={components:{HeaderPage:_},data:function(){return{}}},re=ne,ce=(a("2cd2"),Object(u["a"])(re,te,ae,!1,null,"0008dbdc",null)),oe=ce.exports,ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[e._v("\n  404\n")])},ue=[],se={},le=se,fe=Object(u["a"])(le,ie,ue,!1,null,"0be4980c",null),pe=fe.exports;n["a"].use(f["a"]);var me=[{path:"/",component:$,name:"首页"},{path:"/",redirect:"/"},{path:"/softExam",component:J,name:"信息"},{path:"/music",component:ee,name:"音乐"},{path:"/source",component:oe,name:"资源"},{path:"/actualTime",component:A,name:"实时"},{path:"/about",component:L,name:"关于"},{path:"*",component:pe,name:"404"}],ve=new f["a"]({routes:me});a("1543");n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(l)},router:ve}).$mount("#app")},5838:function(e,t,a){},6494:function(e,t,a){"use strict";var n=a("5838"),r=a.n(n);r.a},"64a9":function(e,t,a){},a0bd:function(e,t,a){"use strict";var n=a("0d67"),r=a.n(n);r.a},a42e:function(e,t,a){},a63a:function(e,t,a){},e1de:function(e,t,a){"use strict";var n=a("a42e"),r=a.n(n);r.a}});
//# sourceMappingURL=app.e2cf6620.js.map