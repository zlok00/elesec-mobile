(function(t){function e(e){for(var s,n,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&f.push(i[n][0]),i[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);v&&v(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,n=1;n<a.length;n++){var o=a[n];0!==i[o]&&(s=!1)}s&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},n={app:0},i={app:0},r=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"30c317a6"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var s="css/"+({about:"about"}[t]||t)+"."+{about:"9e94386f"}[t]+".css",i=c.p+s,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===i))return e()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){l=f[o],u=l.getAttribute("data-href");if(u===s||u===i)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var s=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=s,delete n[t],v.parentNode.removeChild(v),a(r)},v.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(v)})).then((function(){n[t]=0})));var s=i[t];if(0!==s)if(s)e.push(s[2]);else{var r=new Promise((function(e,a){s=i[t]=[e,a]}));e.push(s[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(v);var a=i[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",f.name="ChunkLoadError",f.type=s,f.request=n,a[1](f)}i[t]=void 0}};var v=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var v=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),n=a.n(s);n.a},"0418":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[t._m(0),t.isNav?s("span",{staticClass:"navButton",on:{click:t.toggle}},[s("img",{attrs:{src:a("0c1d"),width:"20"}})]):s("span",{staticClass:"navButton",on:{click:t.toggle}},[s("img",{attrs:{src:a("42ea"),width:"27"}})]),t.isNav?s("ul",{staticClass:"navMenu"},[t._m(1),t._m(2),t._m(3),t._m(4),t._m(5)]):t._e()])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"#/"}},[s("img",{staticClass:"logo",attrs:{src:a("9d64"),alt:"青寕信安"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"##"}},[t._v("技术核心")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#/solution"}},[t._v("行业方案")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#/news"}},[t._v("新闻中心")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"##"}},[t._v("加入我们")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#/about"}},[t._v("关于我们")])])}],i=(a("a2f0"),{name:"v-header",props:{},data:function(){return{isNav:!1}},mounted:function(){},methods:{toggle:function(){this.isNav=!this.isNav}}}),r=i,o=a("2877"),c=Object(o["a"])(r,s,n,!1,null,"71efdaba",null);e["a"]=c.exports},"06f1":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAAgCAYAAADKbvy8AAAFHUlEQVRoQ+2bbehfYxjHP98ZI2SbWSQhUzQy85gQbzwrbzzsjYyIRN54nETM0xuJ8hBNJq1RJN7wwnOUPJSJUBZCbYtlC2P76vq7zzr77ez/O/c553f+m+1+8///fue6rvu6r+/1dO77/okdo3cL2L4XuFWS2k7eWkBbBfrit+0013xJz/Q1b9U8JV3OkPRGG11k+0HgwiRkeaawgxL9BkmHZPJi+xVgiqQzc3lz6bcyAD8ATgTWStojdy1l+gCw8Mw2coL3GEmf1BVi+yjgs76iog2AtsPJ/qq7tmF0tvcGVgZd2zTaJYBZytieA3yaA2CHzjbMxlXP50laUjywPR/Yq4mgxPNQ+rsYqO34pfmWSPplEwBzvaHCoAsl3V5nUdsggJs4qO2IoIikCRuBV9cA1o7ChgDe18JatyTe14DPM+TsAnws6fkyj+0/gF0z5HRO2iWAUUeLjnaZpCOHadsEwFL6mgsEEDlj30S8Ggjj1x0/SDp+kNj298ABwCOSrq8rrC2d7cOAL0NOlwB+BYTgYsyQtGo8ZVsCGB1cdHJ9jOWSDq4AcD0wKTp4SS/2VJ+PBqJrfRewpEldpdAA8E6gKPLrJU0eIYCzgLsz0buklEJ/z+BdURVhBWBF39AjgLGOm4HFki7tDEBJh9v+B9gpGeciSS9syVC5EWh7Z2D3DMMPkv6avpjWQkZ4faTgeId9DogX8Znp82lD5J4ELEw0ZwN/NtDjo5T+x6I/WpiuAZwBrCgUG6+rbQDgBcBLDRbdKUtup15MXorQ9ySd0pVSnQKYPHEZMDspuFTSxVXK/p8A7Cl9hhmnSyoyyZhZOwcwgVje3ZksKUJ+k5ELYFceOwo5PQJ4uqS3ymsYFYCR629LE62UtE/XANreHzhuFICUSsDLdeQPNjQVax1z6C2l35IDTJP0W5nfdtTO99N3/QBYEYVHSPpiQLHsrbQB/iuAp+oYuAXNOklThvGPEsABW/YK4LFAdE3/5eqBs6+2KdT2jUCcpIx01Glaekyhmx2FjSSFFha1Hemg2PBdICkOMsdGBwBeBiwaLzU1Rdb2xhKwvQMY727rqqKwAwBj++rhJPvxpmCV+SRdk5zrBmDstKAOgF3M3VTGSCMwGeNV4NykYGwKR2rtIgJjN+L+pguv4ivtqmz1ANqeHX3FyAEcKMLxcWrsZnQQgTcBDyQgmuxqbIahpN3qRGCPNW+Yf87pC8CN9SpSanR2HQA4yho4bgRuRQCu7QXA5NUbSkdO5wM/5p7Il93R9oSlUNtnDQuNIc/PAa5LNLEvmjtiz/ltSX/3CeB+wE8lTeNoJOtKxdYCYK61B+ltXw081kWT1BuAKQq/AeIoKMY7wKnp/+yrfrYvB55O/OEcrUfcMalTA9tOtM0CmIxTdQuuCYATVgO3dwDj/SqahPLYAWBDrxi8VrjJTncNmcUh5ipJM2y/OcCzSNKzFTVgMAqbAHgl8GQXdaRCv3i/jCZpjaQ9a9ghi8T2AuAeYOjNhWGCu7oXOrbQqva6aifD9snpXkehXxMA7wLuAFZLmjpsoTnPbcehdBxOx93LeTm8dWhtxw34A+NilqTz6vBsiWZCAEy1cE3pikQTAD8ETgBe7/Jqvu1rgUeTwQ6V9G0bA1dE91XAE+n7uZKKTrzRNNvsj1tsL02/6Rj37k2uVWx/B8RvPlqnt6q5bQdgcZQ2dqssV79B+m0ZwOnAz3XO63KMZPtrYGbXabnQIQE4q6va+i9BPlVrB4LPkwAAAABJRU5ErkJggg=="},"0c1d":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAACi0lEQVRYR9WZvW7UQBDH5z+mg0jwBtBSrG0FEnoeAQlBlxJCkSIPkIYHIAWBEqRIIPEiBLAOL0/ACyDxVaHbiTY5R747397ueuM7XPqs3d/Nf2bnY0FEVBTFdQCbIrIBYDQajb7b96t4iqK4aZGY+ReAqqqqn7CARPSciB4DuCIiWkT267r+NDRknudbzHxIRLeJ6J+IHGdZdoCyLO+LyAcANyZQIiJfjTFPtdYnQ4EqpbaZ+RWAstlTRH4AeGghHxDRWyK62gIaFLQFWBARWhx/iWgHSqlbzPwewN2ZDwYBdQDa/T8bYx5ZagvamDofEnQJYN243IVplVL3Jj4xCKgn4EcrfVt/Ggo0BHAO0r64bNBQwE7IywSdGOAIwGwU2yBpfPBM4vYzJXf7h9QWXbLeQsCFlmxgU4H2AVwKmUL6voBekH1AUwB6Q3qC7mqtL5w+FWAQpAeodf4nWusvSqk7zPwaQFdicAZJV0GzMLoXVT8uCxFRZYw5YuZdItrsSLHBgMGW9Il6AH9E5FoqwGjIJdLPiuA8qH3q1WC5Zw787SzLXopICYA76IxtR8bj8bM+BXQvSCtpnuc7AA4BbHRA/haRvbqu3xCR+FgtSeD8V5Z0RPl6+KTrGFqL6F77c9Ij1a0243gA2j59dbk7FNAnM7kqce/KPNVGsX/Qq33wrHqmJI4pSnwsGtvjBFczfSzaCdlnQVfqi113DjJ2Id+8HLN+yAQjWOJUPuo7C0oGGHNqNFM1O2FN1pMklv6kmU++A7CVsuRPBHo+n3RMepNLHOGj55Nex8x8qo/2tUzsd61h1vzMvOP24ZsxZr9PT9ID1PZML5rbBwDHAA7Oonud7nEmM/y8fY9zCoOMhHmSPULuAAAAAElFTkSuQmCC"},1477:function(t,e,a){t.exports=a.p+"img/anli.986f8b58.png"},"42ea":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAApCAYAAACRB7GtAAABKklEQVRoQ+2aMWrDQBBF/2gxCJmUKZILqBNCOkgOEbmxb5DKOYTd2D6SrmEXrrMIzGqCbJMusHY1O8x2gl34f94g9jNLZVm+FEWxBLAA8I701xHAznu/pbquP4hoB+A1fV9/Ds4AOmqa5ouZ1wBmisxdiOhbLTlmXlBVVfMsyzoi+gTwpoDeiZkP4zjuaTLTtu0shDAfhsGlbi7P8+Cc++n7/nI1p3WZuVTJGjkjJ7AC1pYCoURJMnJRZRK4ST85tXfLKRU456ZE0GlJBQD2IYSD2jxnSVzgTzBG0tmSeEyZJO2xJC6JxrNa9N9Qnq2M9HNGTjqh//QZOSMnsALWlgKhREnSPeWxJB7VBKI22UxcFI4HxNyS+P0dyur6QZT8TJyZT9PTE+/95heKZo/1p907hgAAAABJRU5ErkJggg=="},5241:function(t,e,a){t.exports=a.p+"img/company.0a419764.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],r=(a("034f"),a("2877")),o={},c=Object(r["a"])(o,n,i,!1,null,null,null),l=c.exports,u=a("b970"),f=(a("157a"),a("d3b7"),a("8c4f")),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header"),a("div",{staticStyle:{height:"70px"}}),a("swiper",{staticClass:"swiper myBanner",attrs:{options:t.swiperOption1}},[a("swiper-slide",{staticClass:"box bg1"},[a("div",{staticClass:"text"},[a("p",[t._v("智能饲养助手")]),a("div",[t._v("基于牛只养殖生命周期全过程管理"),a("br"),t._v(" 减少人工投入，提升管理效能，增强养殖生产力")])])]),a("swiper-slide",{staticClass:"box bg2"},[a("div",{staticClass:"text"},[a("p",[t._v("繁殖优化引擎")]),a("div",[t._v("提高发情识别率及种群提纯复壮成功率"),a("br"),t._v(" 从而提升繁殖生产力。")])])]),a("swiper-slide",{staticClass:"box bg3"},[a("div",{staticClass:"text"},[a("p",[t._v("疾病受伤预警")]),a("div",[t._v("对牛只多维数据进行识别分析后"),a("br"),t._v(" 给出当前牛只异常状态分析结果，及时推送消息预警"),a("br"),t._v(" 降低牛只疾病受伤死亡率")])])]),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1),t._m(0),a("div",{staticClass:"example-3d swipeBnner"},[a("swiper",{staticClass:"swiper",attrs:{options:t.swiperOption}},[a("swiper-slide",{staticClass:"banner2"},[a("div",{staticClass:"item-txt"},[a("p",{staticClass:"title"},[t._v("智能消防")]),a("p",{staticClass:"pre"}),a("p",{staticClass:"intro"},[t._v("提供从传感器硬件产品到云端智能监控预"),a("br"),t._v(" 警系统等一整套的服务方案。")])])]),a("swiper-slide",{staticClass:"banner1"},[a("div",{staticClass:"item-txt"},[a("p",{staticClass:"title"},[t._v("智慧农牧")]),a("p",{staticClass:"pre"}),a("p",{staticClass:"intro"},[t._v("以自研关键技术为核心，在养殖协同领域"),a("br"),t._v(" 打造端到端闭环的数据+分析+决策的服务体系。")])])]),a("swiper-slide",{staticClass:"banner3"},[a("div",{staticClass:"item-txt"},[a("p",{staticClass:"title"},[t._v("智慧养老")]),a("p",{staticClass:"pre"}),a("p",{staticClass:"intro"},[t._v("结合智能终端与大数据云平台，随时随地"),a("br"),t._v(" 守护老人的人身安全。")])])])],1)],1),t._m(1),t._m(2),t._m(3),a("Footer")],1)},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box1"},[a("a",{attrs:{href:"#/sensorsHeathy"}},[a("div",{staticClass:"item item1"},[a("p",{staticClass:"title"},[t._v("传感器与健康监测")]),a("p",[t._v("通过人工智能分析算法实时监测牛只健康状态")])])]),a("a",{attrs:{href:"#/cameraWeight"}},[a("div",{staticClass:"item item2",staticStyle:{"text-align":"left","padding-left":"20px"}},[a("p",{staticClass:"title"},[t._v("摄像头与体重识别")]),a("p",[t._v("通过视觉采集装置识别牛只体重变化精准饲养")])])]),a("div",{staticClass:"item item3"},[a("p",{staticClass:"title"},[t._v("区块链与药效监测")]),a("p",[t._v("通过去人化技术记录分析用药效果避免药物滥用")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box2"},[s("div",{staticClass:"bigTitle"},[t._v("商业案例")]),s("div",{staticStyle:{background:"#fff"}},[s("div",[s("img",{staticStyle:{width:"100%"},attrs:{src:a("1477")}})]),s("div",{staticStyle:{"font-size":"14px","line-height":"16px",color:"#000",padding:"17px 22px","text-align":"left"}},[t._v("2020年1月与阿坝州红原县畜牧局达成意向，联合中国农业大学规划设计院在红原县建立未来牧场试点园区。")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box2"},[s("div",{staticClass:"bigTitle"},[t._v("新闻中心")]),s("div",{staticStyle:{background:"#fff"}},[s("a",{attrs:{href:"#/news"}},[s("div",[s("img",{staticStyle:{width:"100%"},attrs:{src:a("bf19")}})]),s("div",{staticClass:"time"},[s("span",{staticClass:"day"},[t._v("15")]),s("span",{staticClass:"month"},[t._v("NOV"),s("br"),t._v("2018")])]),s("div",{staticClass:"info"},[t._v("海洋救援产品荣获2018年军民融合专业赛中获得优秀奖 ")])])]),s("div",{staticStyle:{background:"#fff","margin-top":"15px"}},[s("a",{attrs:{href:"#/news"}},[s("div",[s("img",{staticStyle:{width:"100%"},attrs:{src:a("b391")}})]),s("div",{staticClass:"time"},[s("span",{staticClass:"day"},[t._v("23")]),s("span",{staticClass:"month"},[t._v("MAY"),s("br"),t._v("2019")])]),s("div",{staticClass:"info"},[t._v("有角动物智能放牧机器人产品荣获电信首届物联网大赛中获得三等奖")])])]),s("div",{staticStyle:{background:"#fff","margin-top":"15px"}},[s("a",{attrs:{href:"#/news"}},[s("div",[s("img",{staticStyle:{width:"100%"},attrs:{src:a("d483")}})]),s("div",{staticClass:"time"},[s("span",{staticClass:"day"},[t._v("8")]),s("span",{staticClass:"month"},[t._v("JULY"),s("br"),t._v("2019")])]),s("div",{staticClass:"info"},[t._v("有角动物智能放牧机器人产品荣获2019德国红点之星奖最高概念奖")])])]),s("div",{staticStyle:{background:"#fff","margin-top":"15px"}},[s("a",{attrs:{href:"#/news"}},[s("div",[s("img",{staticStyle:{width:"100%"},attrs:{src:a("6cc3")}})]),s("div",{staticClass:"time"},[s("span",{staticClass:"day"},[t._v("26")]),s("span",{staticClass:"month"},[t._v("DEC"),s("br"),t._v("2019")])]),s("div",{staticClass:"info"},[t._v("青宁信安荣获2019年未来农业食品100强年度潜力企业")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box2",staticStyle:{background:"#fff",padding:"20px 20px 40px",margin:"40px 0 0"}},[s("div",{staticClass:"bigTitle",staticStyle:{border:"0"}},[t._v("合作伙伴")]),s("div",{staticStyle:{background:"#fff"}},[s("div",[s("img",{staticStyle:{width:"100%"},attrs:{src:a("5241")}})])])])}],p=a("7212"),h=(a("a7a3"),a("a2f0"),a("0418")),m=a("fd2d"),A={name:"index",components:{Header:h["a"],Footer:m["a"],Swiper:p["Swiper"],SwiperSlide:p["SwiperSlide"]},data:function(){return{swiperOption:{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",initialSlide:1,coverflowEffect:{rotate:30,stretch:25,depth:80,modifier:1,slideShadows:!0}},swiperOption1:{autoplay:!0,pagination:{el:".swiper-pagination"}}}},mounted:function(){},methods:{}},g=A,w=(a("8fc1"),a("d662"),Object(r["a"])(g,v,d,!1,null,"ebfa245a",null)),b=w.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"error-page"},[a("h1",{staticClass:"title"},[t._v("404")]),a("div",{staticClass:"neirongItem"},[a("p",{staticClass:"neirong"},[t._v("哎呀，页面找不到啦")]),a("router-link",{staticClass:"home",attrs:{to:{path:"/"}}},[t._v("返回首页")])],1)])},_=[],x={},B=x,y=(a("a775"),Object(r["a"])(B,C,_,!1,null,"4b12f792",null)),S=y.exports;s["default"].use(f["a"]);var O=[{path:"/",name:"Index",component:b,meta:{title:"青寕信安"}},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))},meta:{title:"关于我们"}},{path:"/solution",name:"Solution",component:function(){return a.e("about").then(a.bind(null,"1bc4"))},meta:{title:"解决方案"}},{path:"/news",name:"News",component:function(){return a.e("about").then(a.bind(null,"a2f9"))},meta:{title:"新闻中心"}},{path:"/farmAnimals",name:"FarmAnimals",component:function(){return a.e("about").then(a.bind(null,"9d01"))},meta:{title:"农场动物福利"}},{path:"/sensorsHeathy",name:"SensorsHeathy",component:function(){return a.e("about").then(a.bind(null,"ffd1"))},meta:{title:"传感器与健康监测"}},{path:"/cameraWeight",name:"CameraWeight",component:function(){return a.e("about").then(a.bind(null,"b784"))},meta:{title:"摄像头与体重识别"}},{path:"*",component:S}],N=new f["a"]({base:"",routes:O});N.beforeEach((function(t,e,a){t.meta.title&&(document.title=t.meta.title),a()}));var E=N;s["default"].use(u["a"]),s["default"].config.productionTip=!1,new s["default"]({router:E,render:function(t){return t(l)}}).$mount("#app")},"6cc3":function(t,e,a){t.exports=a.p+"img/news4.d43c2c5f.png"},"85ec":function(t,e,a){},"8fc1":function(t,e,a){"use strict";var s=a("9272"),n=a.n(s);n.a},9272:function(t,e,a){},"9d64":function(t,e){t.exports="data:image/png;base64,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"},a2f0:function(t,e,a){},a775:function(t,e,a){"use strict";var s=a("c717"),n=a.n(s);n.a},b391:function(t,e,a){t.exports=a.p+"img/news2.5adc6207.png"},bf19:function(t,e,a){t.exports=a.p+"img/news1.e079c795.png"},c717:function(t,e,a){},d483:function(t,e,a){t.exports=a.p+"img/news3.2ffcf890.png"},d662:function(t,e,a){"use strict";var s=a("e9a7"),n=a.n(s);n.a},e9a7:function(t,e,a){},fd2d:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[t._m(0),a("ul",{staticClass:"menu"},[a("li",[a("span",{class:t.showNav?"active":"",on:{click:function(e){return t.showMenu(1)}}},[t._v("解决方案")]),t.showNav?a("ul",{staticClass:"submenu"},[t._m(1),t._m(2),t._m(3),t._m(4)]):t._e()]),a("li",[a("span",{class:t.showNav2?"active":"",on:{click:function(e){return t.showMenu(2)}}},[t._v("技术优势")]),t.showNav2?a("ul",{staticClass:"submenu"},[t._m(5),t._m(6)]):t._e()]),a("li",[a("span",{class:t.showNav3?"active":"",on:{click:function(e){return t.showMenu(3)}}},[t._v("青寕支持")]),t.showNav3?a("ul",{staticClass:"submenu"},[t._m(7),t._m(8)]):t._e()]),a("li",[a("span",{class:t.showNav4?"active":"",on:{click:function(e){return t.showMenu(4)}}},[t._v("商务合作")]),t.showNav4?a("ul",{staticClass:"submenu"},[t._m(9),t._m(10),t._m(11)]):t._e()]),a("li",[a("span",{class:t.showNav5?"active":"",on:{click:function(e){return t.showMenu(5)}}},[t._v("关于青寕")]),t.showNav5?a("ul",{staticClass:"submenu"},[t._m(12),t._m(13),t._m(14),t._m(15)]):t._e()])]),a("div",{staticClass:"footerBottom"},[t._v(" Copyright© 2020 青寕科技 保留所有权利 | 粤ICP备18151626号 | 版权所有：深圳青寕信安科技有限公司 ")])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footerTop"},[s("img",{attrs:{src:a("06f1"),width:"61"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#/solution"}},[t._v("智慧农牧")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#/solution"}},[t._v("智能消防")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#/solution"}},[t._v("智慧养老")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#/farmAnimals"}},[t._v("农场动物福利")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"##"}},[t._v("低功耗传感器")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"##"}},[t._v("运动模式识别")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"##"}},[t._v("维护保障")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"##"}},[t._v("赋能培训")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"##"}},[t._v("业务咨询")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"##"}},[t._v("招商加盟")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"##"}},[t._v("商业案例")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#/about"}},[t._v("关于我们")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"##"}},[t._v("大事记")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"##"}},[t._v("新闻中心")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"##"}},[t._v("加入我们")])])}],i=(a("a2f0"),{name:"v-footer",props:{},data:function(){return{showNav:!1,showNav2:!1,showNav3:!1,showNav4:!1,showNav5:!1}},mounted:function(){},methods:{showMenu:function(t){var e=t;console.log(e),1==e?this.showNav=!this.showNav:2==e?this.showNav2=!this.showNav2:3==e?this.showNav3=!this.showNav3:4==e?this.showNav4=!this.showNav4:5==e&&(this.showNav5=!this.showNav5)}}}),r=i,o=a("2877"),c=Object(o["a"])(r,s,n,!1,null,"539199f5",null);e["a"]=c.exports}});