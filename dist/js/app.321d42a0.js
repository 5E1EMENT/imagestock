(function(t){function e(e){for(var n,a,i=e[0],c=e[1],u=e[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);h&&h(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},o={app:0},s=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-1c3dd3b8":"f782e311","chunk-7f56d99c":"7ac8af78"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={"chunk-1c3dd3b8":1,"chunk-7f56d99c":1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise(function(e,r){for(var n="css/"+({}[t]||t)+"."+{"chunk-1c3dd3b8":"1cce2245","chunk-7f56d99c":"6836a41f"}[t]+".css",o=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===n||l===o)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var n=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[t],h.parentNode.removeChild(h),r(s)},h.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(h)}).then(function(){a[t]=0}));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise(function(e,r){n=o[t]=[e,r]});e.push(n[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(h);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,r[1](f)}o[t]=void 0}};var h=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var h=l;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"042e6":function(t,e,r){t.exports=r.p+"img/Search.b7c404d6.svg"},"082e":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{ref:"navbarWrapper",staticClass:"navbar-wrapper",class:{"navbar-sticky":t.sticky},attrs:{id:"navbar"}},[n("b-row",{staticClass:"navbar",attrs:{"align-h":"between"}},[n("b-col",{attrs:{cols:"4",md:"5",sm:"5"}},[n("router-link",{staticClass:"navbar-link",attrs:{tag:"a",to:"/home"}},[n("div",{staticClass:"navbar-logo"},[n("img",{staticClass:"navbar-logo__svg",attrs:{src:r("974e"),alt:"ImageStock-logo"}}),n("span",{staticClass:"navbar-logo__title"},[t._v("ImageStock")])])])],1),n("b-col",{staticClass:"navbar-column",attrs:{cols:"8",sm:"7",md:"6",lg:"5",xl:"4"}},[n("nav",{staticClass:"navbar-nav"},[n("ul",{staticClass:"navbar-nav__list"},[n("li",{staticClass:"navbar-nav__item search-nav",class:{"nav-active":t.getHeaderSearch},on:{click:t.showSearch}},[n("img",{staticClass:"navbar-nav__item-favorites",attrs:{src:r("042e6"),alt:"Favorites-icon"}}),n("span",{staticClass:"navbar-nav__item-text"},[t._v("Поиск")])]),n("router-link",{staticClass:"navbar-nav__item",attrs:{tag:"li",to:"/favorites"}},[n("img",{staticClass:"navbar-nav__item-favorites",attrs:{src:r("b3e2"),alt:"Favorites-icon"}}),n("span",{staticClass:"navbar-nav__item-text"},[t._v("Избранное")])]),n("li",{staticClass:"navbar-nav__item history-nav",class:{"nav-active":t.getHeaderHistory},on:{click:t.showHistory}},[n("img",{staticClass:"navbar-nav__item-history",attrs:{src:r("d0cc"),alt:"History-icon"}}),n("span",{staticClass:"navbar-nav__item-text"},[t._v("История поиска")])])],1)])])],1)],1)},a=[],o=r("2f62"),s=(r("56d7"),r("c2b4")),i=r.n(s);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(r,!0).forEach(function(e){l(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var f={props:{sticky:Boolean},data:function(){return{history:!1,search:!0}},computed:u({},Object(o["c"])(["getHeaderSearch","getHeaderHistory"])),methods:u({},Object(o["b"])(["invertSearchStatus","invertHistoryStatus"]),{showSearch:function(){this.getHeaderSearch||(("/favorites"===this.$route.path||this.$route.params.imgId)&&(this.$parent.onFavorites=!1,this.$parent.onPhoto=!1,this.$parent.sticky=!1),this.invertSearchStatus(!0),this.invertHistoryStatus(!1)),i()({scrollableDomEle:window,direction:"top",duration:500,easingPreset:"easeInOutCubic"})},showHistory:function(){this.getHeaderHistory||(("/favorites"===this.$route.path||this.$route.params.imgId)&&(this.$parent.onFavorites=!1,this.$parent.onPhoto=!1),this.invertSearchStatus(!1),this.invertHistoryStatus(!0)),i()({scrollableDomEle:window,direction:"top",duration:500,easingPreset:"easeInOutCubic"})}})},h=f,p=(r("cdb2"),r("2877")),d=Object(p["a"])(h,n,a,!1,null,"246135f6",null);e["a"]=d.exports},"155b":function(t,e,r){},"15a1":function(t,e,r){"use strict";var n=r("1c70"),a=r.n(n);a.a},"1c70":function(t,e,r){},"25b6":function(t,e,r){},"2a1c":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"masonry-wrapper"},[n("ul",{directives:[{name:"masonry",rawName:"v-masonry"}],staticClass:"masonry",attrs:{"transition-duration":"0","origin-top":!0,"horizontal-order":!1,"fit-width":"true",stagger:"0.03s","item-selector":".masonry-item"}},[t._l(t.images,function(e){return n("li",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile"}],key:e.id,staticClass:"masonry-item"},[t.isOnPhoto?n("img",{staticClass:"masonry-image",attrs:{src:e.cover_photo.urls.small,alt:"image"}}):n("img",{staticClass:"masonry-image",attrs:{src:e.urls.small,alt:"image"}}),n("div",{staticClass:"masonry-image__data"},[n("img",{staticClass:"masonry-image__profile",attrs:{src:e.user.profile_image.medium,alt:"user-logo"}}),n("h3",{staticClass:"masonry-image__user"},[t._v("\n          "+t._s(e.user.username)+"\n        ")]),e.user.instagram_username?n("h4",{staticClass:"masonry-image__instagram"},[t._v("\n          @"+t._s(e.user.instagram_username)+"\n        ")]):t._e(),n("div",{staticClass:"masonry-logos"},[t.isOnPhoto?n("img",{ref:"masonryIcon",refInFor:!0,staticClass:"masonry-logos__item favorive",attrs:{src:r("a3be"),alt:"favorite-icon"},on:{mouseover:t.hoverStart,mouseleave:t.hoverLeave,click:function(r){return t.addToFavorite(e.cover_photo.id)}}}):n("img",{ref:"masonryIcon",refInFor:!0,staticClass:"masonry-logos__item favorive",attrs:{src:r("a3be"),alt:"favorite-icon"},on:{mouseover:t.hoverStart,mouseleave:t.hoverLeave,click:function(r){return t.addToFavorite(e.id)}}}),t.isOnPhoto?n("img",{ref:"masonryIcon",refInFor:!0,staticClass:"masonry-logos__item maximize",attrs:{src:r("e660"),alt:"maximize-icon"},on:{mouseover:t.hoverStart,mouseleave:t.hoverLeave,click:function(r){return t.goToPhoto(e.cover_photo.id)}}}):n("img",{ref:"masonryIcon",refInFor:!0,staticClass:"masonry-logos__item maximize",attrs:{src:r("e660"),alt:"maximize-icon"},on:{mouseover:t.hoverStart,mouseleave:t.hoverLeave,click:function(r){return t.goToPhoto(e.id)}}}),n("img",{ref:"masonryIcon",refInFor:!0,staticClass:"masonry-logos__item download",attrs:{src:r("2c9d"),alt:"download-icon"},on:{mouseover:t.hoverStart,mouseleave:t.hoverLeave,click:function(r){return t.downloadImg(e.id)}}})])])])}),t.loaded&&t.images&&t.isOnHome||t.isOnPhoto||t.isOnFavorites&&t.loaded?n("a",{staticClass:"masonry-top",on:{click:t.scrollTop}},[n("img",{staticClass:"photos-button masonry-up",attrs:{src:r("fd74"),alt:"up"}})]):t._e()],2)])},a=[],o=r("a34a"),s=r.n(o),i=r("2ef0"),c=r.n(i);function u(t){for(var e=[],r=t.parentNode.firstChild;r;r=r.nextSibling)1==r.nodeType&&r!=t&&e.push(r);return e}var l=r("c2b4"),f=r.n(l),h=r("2f62"),p=r("56d7");function d(t){return g(t)||m(t)||v()}function v(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function m(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function g(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}function b(t,e,r,n,a,o,s){try{var i=t[o](s),c=i.value}catch(u){return void r(u)}i.done?e(c):Promise.resolve(c).then(n,a)}function y(t){return function(){var e=this,r=arguments;return new Promise(function(n,a){var o=t.apply(e,r);function s(t){b(o,n,a,s,i,"next",t)}function i(t){b(o,n,a,s,i,"throw",t)}s(void 0)})}}function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(r,!0).forEach(function(e){_(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function _(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var S={data:function(){return{images:[],loadImages:!0,loaded:!1}},computed:O({},Object(h["c"])(["getSearchCollection"]),{isOnPhoto:function(){return this.$route.params.imgId},isOnHome:function(){return"/home"===this.$route.path},isOnFavorites:function(){return"/favorites"===this.$route.path}}),mounted:function(){var t=y(s.a.mark(function t(){var e,r=this;return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if("/home"!==this.$route.path){t.next=10;break}return t.next=3,this.getCollection();case 3:this.images=t.sent,e=c.a.debounce(this.handleScroll,400),window.addEventListener("scroll",e),p["eventBus"].$on("collection",function(t){r.images=t}),this.loaded=!0,t.next=11;break;case 10:"/favorites"===this.$route.path?this.getFavorites():this.getSimilar();case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:O({},Object(h["b"])(["getCollection","getFavoritesImg","updateLocalStorage","dowloadPhoto","getSimilarImg"]),{getFavorites:function(){var t=y(s.a.mark(function t(){var e,r=this;return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getFavoritesImg();case 2:e=t.sent,this.images=c.a.uniqWith(e,c.a.isEqual),this.$emit("loadedFavorites",!1),this.loaded=!0,p["eventBus"].$on("collection",function(t){r.images=t}),p["eventBus"].$on("showFavorites",function(t){r.images=t});case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getSimilar:function(){var t=y(s.a.mark(function t(){var e;return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$route.params.imgId,t.next=3,this.getSimilarImg(e);case 3:this.images=t.sent,console.log(this.images),this.loaded=!0;case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),loadImg:function(){var t=this;if(this.loadImages&&this.isOnHome){this.loadImages=!1;this.$store.dispatch("getCollection",this.getSearchCollection).then(function(e){var r;(r=t.images).push.apply(r,d(e))})}},handleScroll:function(){var t=document.documentElement.scrollTop,e=window.innerHeight,r=document.documentElement.offsetHeight,n=t+e>=r;n&&this.isOnHome&&(this.loadImages=!0,this.loadImg())},hoverStart:function(t){this.$refs.masonryIcon;var e=t.target,r=u(e);r.forEach(function(t){t.classList.add("unactive-icon")})},hoverLeave:function(t){this.$refs.masonryIcon;var e=t.target,r=u(e);r.forEach(function(t){t.classList.remove("unactive-icon")})},addToFavorite:function(){var t=y(s.a.mark(function t(e){var r;return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=JSON.parse(localStorage.getItem("favorites"))||[],r.push(e),localStorage.setItem("favorites",JSON.stringify(r)),t.next=5,this.updateLocalStorage(localStorage.getItem("favorites"));case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),scrollTop:function(){f()({scrollableDomEle:window,direction:"top",duration:500,easingPreset:"easeInOutCubic"})},downloadImg:function(){var t=y(s.a.mark(function t(e){var r;return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.dowloadPhoto(e);case 2:r=t.sent,location.assign(r);case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),goToPhoto:function(t){this.$router.push("/photo/".concat(t))}})},P=S,C=(r("15a1"),r("2877")),j=Object(C["a"])(P,n,a,!1,null,null,null);e["a"]=j.exports},"2c9d":function(t,e,r){t.exports=r.p+"img/photo-download.c71bd344.svg"},3425:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("744f"),r("6c7b"),r("7514"),r("20d6"),r("1c4c"),r("6762"),r("cadf"),r("e804"),r("55dd"),r("d04f"),r("c8ce"),r("217b"),r("7f7f"),r("f400"),r("7f25"),r("536b"),r("d9ab"),r("f9ab"),r("32d7"),r("25c9"),r("9f3c"),r("042e"),r("c7c6"),r("f4ff"),r("049f"),r("7872"),r("a69f"),r("0b21"),r("6c1a"),r("c7c62"),r("84b4"),r("c5f6"),r("2e37"),r("fca0"),r("7cdf"),r("ee1d"),r("b1b1"),r("87f3"),r("9278"),r("5df2"),r("04ff"),r("f751"),r("4504"),r("fee7"),r("ffc1"),r("0d6d"),r("9986"),r("8e6e"),r("25db"),r("e4f7"),r("b9a1"),r("64d5"),r("9aea"),r("db97"),r("66c8"),r("57f0"),r("165b"),r("456d"),r("cf6a"),r("fd24"),r("8615"),r("551c"),r("097d"),r("df1b"),r("2397"),r("88ca"),r("ba16"),r("d185"),r("ebde"),r("2d34"),r("f6b3"),r("2251"),r("c698"),r("a19f"),r("9253"),r("9275"),r("3b2b"),r("3846"),r("4917"),r("a481"),r("28a5"),r("386d"),r("6b54"),r("4f7f"),r("8a81"),r("ac4d"),r("8449"),r("9c86"),r("fa83"),r("48c0"),r("a032"),r("aef6"),r("d263"),r("6c37"),r("9ec8"),r("5695"),r("2fdb"),r("d0b0"),r("5df3"),r("b54a"),r("f576"),r("ed50"),r("788d"),r("14b9"),r("f386"),r("f559"),r("1448"),r("673e"),r("242a"),r("c66f"),r("b05c"),r("34ef"),r("6aa2"),r("15ac"),r("af56"),r("b6e4"),r("9c29"),r("63d9"),r("4dda"),r("10ad"),r("c02b"),r("4795"),r("130f"),r("ac6a"),r("96cf");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Header"),r("router-view")],1)},o=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{ref:"headerWrapper",staticClass:"header-wrapper",class:{"header-favorites":t.onFavorites||t.onPhoto,"active-padding":t.sticky&&!t.onFavorites,"active-padding__photo":t.sticky&&t.onPhoto},attrs:{id:"header-wrapper"}},[r("b-container",{ref:"headerContainer",staticClass:"header-container"},[r("Navbar",{ref:"navbar",attrs:{sticky:t.sticky}}),r("div",{staticClass:"header-container__wrapper",class:{"header-container__wrapper-favorites":t.onFavorites||t.onPhoto}},[r("Search"),r("History")],1)],1)],1)},i=[],c=r("082e"),u=r("b5a4"),l=r("76ea"),f=r("2f62");function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(r,!0).forEach(function(e){d(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var v={components:{Navbar:c["a"],Search:u["a"],History:l["a"]},data:function(){return{onFavorites:!1,onPhoto:!1,sticky:!1}},computed:p({},Object(f["c"])(["getHeaderSearch","getHeaderHistory"])),watch:{$route:{handler:"startComponent",immediate:!0}},mounted:function(){this.startComponent(),window.addEventListener("scroll",this.stickyNavbar)},destroyed:function(){window.removeEventListener("scroll",this.stickyNavbar)},methods:p({},Object(f["b"])(["invertSearchStatus","invertHistoryStatus"]),{startComponent:function(){"/favorites"===this.$route.path?(this.onPhoto=!1,this.onFavorites=!0,this.sticky=!0,this.invertSearchStatus(!1),this.invertHistoryStatus(!1)):"/home"===this.$route.path?(this.onFavorites=!1,this.sticky=!1,this.invertSearchStatus(!0),this.invertHistoryStatus(!1)):this.$route.params.imgId&&(this.onPhoto=!0,this.onFavorites=!1,this.sticky=!0,this.invertSearchStatus(!1),this.invertHistoryStatus(!1))},stickyNavbar:function(){var t=this.$refs.navbar.$refs.navbarWrapper,e=(this.$refs.headerContainer,this.$refs.headerWrapper,t.offsetTop?t.offsetTop:0);"/home"===this.$route.path?(window.pageYOffset>=e&&(this.sticky=!0),window.pageYOffset<=40&&(this.sticky=!1)):"/favorites"===this.$route.path&&this.getHeaderSearch||"/favorites"===this.$route.path&&this.getHeaderHistory?(window.pageYOffset>=e&&(this.sticky=!0),window.pageYOffset<=40&&(this.sticky=!1)):(this.$route.params.imgId&&this.getHeaderSearch||this.$route.params.imgId&&this.getHeaderHistory)&&(window.pageYOffset>=e&&(this.sticky=!0),window.pageYOffset<=40&&(this.sticky=!1))}})},m=v,g=(r("b040"),r("2877")),b=Object(g["a"])(m,s,i,!1,null,"2518dbc3",null),y=b.exports,w={components:{Header:y}},O=w,_=(r("5c0b"),Object(g["a"])(O,a,o,!1,null,null,null)),S=_.exports,P=r("8c4f"),C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Photos")],1)},j=[],k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"photos-wrapper",attrs:{id:"photos-wrapper"}},[r("b-container",{staticClass:"photos-container"},[r("MasonryButtons"),r("Masonry"),r("Loader")],1)],1)},x=[],H=r("2a1c"),I=r("57d7"),$=r("f93b");r("5118");function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function F(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?E(r,!0).forEach(function(e){D(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function D(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var A={components:{Masonry:H["a"],MasonryButtons:I["a"],Loader:$["a"]},data:function(){return{images:[]}},methods:F({},Object(f["b"])(["getImages"]))},L=A,T=(r("58a2"),Object(g["a"])(L,k,x,!1,null,"7f940a0c",null)),N=T.exports,B={components:{Photos:N}},M=B,W=Object(g["a"])(M,C,j,!1,null,"ef3620c8",null),J=W.exports,z=[{path:"",redirect:"/home"},{path:"/home",name:"Home",component:J}],Y=[{path:"/favorites",name:"Favorites",component:function(){return r.e("chunk-7f56d99c").then(r.bind(null,"3ad9"))}}],q=[{path:"/photo/:imgId",name:"Photo",component:function(){return r.e("chunk-1c3dd3b8").then(r.bind(null,"879f"))}}];function G(t){return Q(t)||U(t)||K()}function K(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function U(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function Q(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}n["default"].use(P["a"]);var R=new P["a"]({mode:"history",routes:[].concat(G(z),G(Y),G(q))}),V=r("a34a"),X=r.n(V);function Z(t,e,r,n,a,o,s){try{var i=t[o](s),c=i.value}catch(u){return void r(u)}i.done?e(c):Promise.resolve(c).then(n,a)}function tt(t){return function(){var e=this,r=arguments;return new Promise(function(n,a){var o=t.apply(e,r);function s(t){Z(o,n,a,s,i,"next",t)}function i(t){Z(o,n,a,s,i,"throw",t)}s(void 0)})}}var et={state:{min:1,max:50,searchCollection:"Wallpapers",history:localStorage.getItem("history"),headerSearch:!1,headerHistory:!1},getters:{getSearchCollection:function(t){return t.searchCollection},getHistory:function(t){return t.history},getHeaderSearch:function(t){return t.headerSearch},getHeaderHistory:function(t){return t.headerHistory}},mutations:{setCollection:function(t,e){return t.searchCollection=e},setHistory:function(t,e){return t.history=e},setHeaderSearch:function(t,e){return t.headerSearch=e},setHeaderHistory:function(t,e){return t.headerHistory=e}},actions:{getCollection:function(){var t=tt(X.a.mark(function t(e){var r,n,a,o,s,i=arguments;return X.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.state,n=i.length>1&&void 0!==i[1]?i[1]:"Wallpapers",t.prev=2,a=Math.floor(r.min+Math.random()*(r.max+1-r.min)),t.next=6,this._vm.$unsplash.search.photos(n,a,25);case 6:return o=t.sent,t.next=9,o.json();case 9:return s=t.sent,t.abrupt("return",s.results);case 13:throw t.prev=13,t.t0=t["catch"](2),new t.t0("Get collection error");case 16:case"end":return t.stop()}},t,this,[[2,13]])}));function e(e){return t.apply(this,arguments)}return e}(),setCollection:function(){var t=tt(X.a.mark(function t(e,r){var n;return X.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,t.prev=1,n("setCollection",r),t.next=8;break;case 5:throw t.prev=5,t.t0=t["catch"](1),new t.t0("Set collection error");case 8:case"end":return t.stop()}},t,null,[[1,5]])}));function e(e,r){return t.apply(this,arguments)}return e}(),updateHistory:function(t,e){var r=t.commit;try{r("setHistory",e)}catch(n){throw new n("Set history error")}},invertSearchStatus:function(t,e){var r=t.commit;r("setHeaderSearch",e)},invertHistoryStatus:function(t,e){var r=t.commit;r("setHeaderHistory",e)}}};function rt(t,e,r,n,a,o,s){try{var i=t[o](s),c=i.value}catch(u){return void r(u)}i.done?e(c):Promise.resolve(c).then(n,a)}function nt(t){return function(){var e=this,r=arguments;return new Promise(function(n,a){var o=t.apply(e,r);function s(t){rt(o,n,a,s,i,"next",t)}function i(t){rt(o,n,a,s,i,"throw",t)}s(void 0)})}}var at={state:{favorites:localStorage.getItem("favorites")},getters:{getFavorites:function(t){return t.favorites}},mutations:{setFavoritesLocalStorage:function(t,e){return t.favorites=e}},actions:{getFavoritesImg:function(){var t=nt(X.a.mark(function t(e){var r,n,a,o=this;return X.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.state,t.prev=1,n=JSON.parse(r.favorites)||[],a=[],t.next=6,Promise.all(n.map(function(){var t=nt(X.a.mark(function t(e){var r,n;return X.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o._vm.$unsplash.photos.getPhoto(e);case 2:return r=t.sent,t.next=5,r.json();case 5:n=t.sent,a.push(n);case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()));case 6:return t.abrupt("return",a||[]);case 9:throw t.prev=9,t.t0=t["catch"](1),new t.t0("Action error: getFavoritesImg");case 12:case"end":return t.stop()}},t,null,[[1,9]])}));function e(e){return t.apply(this,arguments)}return e}(),updateLocalStorage:function(t,e){var r=t.commit;try{r("setFavoritesLocalStorage",e)}catch(n){throw new n("Action error: updateLocalStorage")}}}};function ot(t,e,r,n,a,o,s){try{var i=t[o](s),c=i.value}catch(u){return void r(u)}i.done?e(c):Promise.resolve(c).then(n,a)}function st(t){return function(){var e=this,r=arguments;return new Promise(function(n,a){var o=t.apply(e,r);function s(t){ot(o,n,a,s,i,"next",t)}function i(t){ot(o,n,a,s,i,"throw",t)}s(void 0)})}}var it={actions:{getCurrentImg:function(){var t=st(X.a.mark(function t(e,r){var n,a;return X.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this._vm.$unsplash.photos.getPhoto(r);case 3:return n=t.sent,t.next=6,n.json();case 6:return a=t.sent,console.log(a),t.abrupt("return",a);case 11:throw t.prev=11,t.t0=t["catch"](0),new t.t0("Action error: getCurrentImg");case 14:case"end":return t.stop()}},t,this,[[0,11]])}));function e(e,r){return t.apply(this,arguments)}return e}(),dowloadPhoto:function(){var t=st(X.a.mark(function t(e,r){return X.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.abrupt("return","https://unsplash.com/photos/".concat(r,"/download?force=true"));case 4:throw t.prev=4,t.t0=t["catch"](0),new t.t0("Action error: dowloadPhoto");case 7:case"end":return t.stop()}},t,null,[[0,4]])}));function e(e,r){return t.apply(this,arguments)}return e}(),getSimilarImg:function(){var t=st(X.a.mark(function t(e,r){var n,a,o;return X.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this._vm.$unsplash.photos.getPhoto(r);case 3:return n=t.sent,t.next=6,n.json();case 6:return a=t.sent,o=a.related_collections.results,t.abrupt("return",o);case 11:throw t.prev=11,t.t0=t["catch"](0),new t.t0("Action error: getSimilarImg");case 14:case"end":return t.stop()}},t,this,[[0,11]])}));function e(e,r){return t.apply(this,arguments)}return e}()}};n["default"].use(f["a"]);var ct=new f["a"].Store({modules:{homePage:et,favoritesPage:at,photoPage:it}}),ut=r("5a58"),lt=r.n(ut),ft=r("3f9b"),ht=r("a916"),pt=r.n(ht),dt={applicationId:"705b8c6bdc2447239dd01e022019ead8ca0b8053597229b2dda00190562b45cd",secret:"16d09a789d6dfd40e586a5c569665626cb44d3c373695fa613cc8dda074197cc"},vt=new pt.a(dt);n["default"].prototype.$unsplash=vt;var mt=r("5f5b");r("ab8b"),r("2dd8");n["default"].use(mt["a"]);r("693e"),r("0cdd"),r("25b6");r.d(e,"eventBus",function(){return gt}),n["default"].config.productionTip=!1,n["default"].use(lt.a),n["default"].use(ft["a"]),new n["default"]({router:R,store:ct,render:function(t){return t(S)}}).$mount("#app");var gt=new n["default"]},"57d7":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"photos-buttons",attrs:{id:"photos-buttons"}},[n("li",{staticClass:"photos-buttons__item"},[n("img",{staticClass:"photos-button order",attrs:{src:r("6ba3"),alt:""}})]),n("li",{staticClass:"photos-buttons__item"},[n("img",{staticClass:"photos-button decompose",attrs:{src:r("e743"),alt:""}})])])}],o=(r("63db"),r("2877")),s={},i=Object(o["a"])(s,n,a,!1,null,"d69f47d4",null);e["a"]=i.exports},"58a2":function(t,e,r){"use strict";var n=r("e4a1"),a=r.n(n);a.a},"5c0b":function(t,e,r){"use strict";var n=r("e332"),a=r.n(n);a.a},"63db":function(t,e,r){"use strict";var n=r("d55c"),a=r.n(n);a.a},"693e":function(t,e,r){},"6ba3":function(t,e,r){t.exports=r.p+"img/photos-btn__order.8f3281d5.svg"},"6f99":function(t,e,r){"use strict";var n=r("7fd3"),a=r.n(n);a.a},"76ea":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"history",staticClass:"history",class:{"history-active":t.getHeaderHistory}},[r("b-container",{staticClass:"history-container"},[r("b-row",{staticClass:"history-row"},[r("b-col",{staticClass:"history-wrapper"},[r("h1",{staticClass:"history-title"},[t._v("\n          Ваши запросы\n        ")]),t.items.length?r("ul",{staticClass:"history-list"},t._l(t.items,function(e){return r("li",{key:e,staticClass:"history-list__item",on:{click:function(r){return t.getCollection(e)}}},[t._v("\n            "+t._s(e)+"\n          ")])}),0):r("h4",{staticClass:"history-empty"},[t._v("\n          История пуста\n        ")])])],1)],1)],1)},a=[],o=r("2f62"),s=(r("56d7"),r("2ef0")),i=r.n(s);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(r,!0).forEach(function(e){l(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var f={data:function(){return{items:[]}},computed:u({},Object(o["c"])(["getHistory","getHeaderHistory"])),watch:{getHeaderHistory:function(){this.startComponent()}},mounted:function(){this.startComponent()},methods:{startComponent:function(){this.items=i.a.uniq(JSON.parse(this.getHistory))}}},h=f,p=(r("fd4e"),r("2877")),d=Object(p["a"])(h,n,a,!1,null,"0f7d55a9",null);e["a"]=d.exports},"7fd3":function(t,e,r){},"82c7":function(t,e,r){},8864:function(t,e,r){},9353:function(t,e,r){"use strict";var n=r("3425"),a=r.n(n);a.a},"974e":function(t,e,r){t.exports=r.p+"img/ImageStock-logo.3b290725.svg"},a3be:function(t,e,r){t.exports=r.p+"img/photo-favorive.cfe063ae.svg"},b040:function(t,e,r){"use strict";var n=r("155b"),a=r.n(n);a.a},b3e2:function(t,e,r){t.exports=r.p+"img/Favorites.ace6e0ce.svg"},b5a4:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search",class:{"search-active":t.getHeaderSearch}},[r("b-container",{staticClass:"search-container"},[r("b-row",[r("b-col",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchItem,expression:"searchItem"}],ref:"search",staticClass:"search-input",attrs:{type:"text",placeholder:"Поиск"},domProps:{value:t.searchItem},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.getCollection(e.target.value),t.addHistory(e.target.value)},input:function(e){e.target.composing||(t.searchItem=e.target.value)}}})])],1),r("b-row",{staticClass:"search-row"},[r("b-col",{staticClass:"search-wrapper"},[r("ul",{staticClass:"search-list"},[t._l(t.items,function(e){return r("li",{key:e,staticClass:"search-list__item",on:{click:function(r){t.getCollection(e),t.addHistory(e)}}},[t._v("\n            "+t._s(e)+"\n          ")])}),r("li",{staticClass:"search-list__item empty"})],2)])],1)],1)],1)},a=[],o=r("a34a"),s=r.n(o),i=r("2f62"),c=r("56d7");function u(t,e,r,n,a,o,s){try{var i=t[o](s),c=i.value}catch(u){return void r(u)}i.done?e(c):Promise.resolve(c).then(n,a)}function l(t){return function(){var e=this,r=arguments;return new Promise(function(n,a){var o=t.apply(e,r);function s(t){u(o,n,a,s,i,"next",t)}function i(t){u(o,n,a,s,i,"throw",t)}s(void 0)})}}function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(r,!0).forEach(function(e){p(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d={data:function(){return{searchItem:"",items:["Wallpapers","Textures & Patterns","Nature","Architecture","Business & Work","Film","Animals","Travel","Fashion","Food & Drink","Spirituality","Experemental","People","Health","Arts & Culture"],collection:null}},computed:h({},Object(i["c"])(["getHeaderSearch"])),methods:h({},Object(i["b"])(["getCollection","setCollection","updateHistory"]),{getCollection:function(){var t=l(s.a.mark(function t(e){var r;return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return("/favorites"===this.$route.path||this.$route.params.imgId)&&this.$router.push("/home"),this.$refs.search.blur(),this.searchItem=e,t.next=5,this.$store.dispatch("getCollection",e);case 5:return r=t.sent,c["eventBus"].$emit("collection",r),t.next=9,this.setCollection(e);case 9:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),addHistory:function(){var t=l(s.a.mark(function t(e){var r;return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=JSON.parse(localStorage.getItem("history"))||[],r.push(e),localStorage.setItem("history",JSON.stringify(r)),t.next=5,this.updateHistory(localStorage.getItem("history"));case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()})},v=d,m=(r("9353"),r("2877")),g=Object(m["a"])(v,n,a,!1,null,"0620f040",null);e["a"]=g.exports},cdb2:function(t,e,r){"use strict";var n=r("82c7"),a=r.n(n);a.a},d0cc:function(t,e,r){t.exports=r.p+"img/History.3a338f77.svg"},d55c:function(t,e,r){},e332:function(t,e,r){},e4a1:function(t,e,r){},e660:function(t,e,r){t.exports=r.p+"img/photo-maximize.57efce79.svg"},e743:function(t,e,r){t.exports=r.p+"img/photos-btn__decompose.a83cc1c8.svg"},f8fc:function(t,e,r){t.exports=r.p+"img/photos-loader.425399b2.svg"},f93b:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loader"},[n("img",{staticClass:"loader-img",attrs:{src:r("f8fc"),alt:"loading"}})])}],o=(r("6f99"),r("2877")),s={},i=Object(o["a"])(s,n,a,!1,null,"75679112",null);e["a"]=i.exports},fd4e:function(t,e,r){"use strict";var n=r("8864"),a=r.n(n);a.a},fd74:function(t,e,r){t.exports=r.p+"img/photos-btn__top.6a8b03df.svg"}});
//# sourceMappingURL=app.321d42a0.js.map