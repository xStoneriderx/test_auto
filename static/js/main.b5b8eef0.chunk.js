(window.webpackJsonptest_auto=window.webpackJsonptest_auto||[]).push([[0],{10:function(e,t,n){e.exports={label:"styles_label__1YxJq",select:"styles_select__nqQE4",loading:"styles_loading__1PoVI"}},34:function(e,t,n){e.exports=n(74)},39:function(e,t,n){},57:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(27),l=n.n(c),o=(n(39),n(33)),u=n(9),s=n(6),i=n(15),p=n(28),b=n.n(p),f=n(10),m=n.n(f),d=n(29),O=n.n(d),g=function(){var e=O.a.create({baseURL:"https://beta.autobooking.com/api/test/v1/"});return e.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),e}(),y=function(e){var t=e.label,n=e.url,c=e.name,l=e.onFilterChange,o=e.query,s=Object(r.useState)([]),p=Object(i.a)(s,2),f=p[0],d=p[1],O=Object(r.useState)(!1),y=Object(i.a)(O,2),j=y[0],h=y[1];return Object(r.useEffect)((function(){n&&(h(!0),function(e){return g.get(e).then((function(e){return e.data.data})).catch((function(e){return Promise.reject(e)}))}(n).then((function(e){d(e),h(!1)})).catch((function(e){return h(!1),Promise.reject(e)})))}),[]),a.a.createElement("div",null,t&&a.a.createElement("span",{className:m.a.label},t),a.a.createElement("select",{disabled:j,className:b()(m.a.select,Object(u.a)({},m.a.loading,j)),value:o[c],onChange:function(e){return l(c,e.target.value)}},a.a.createElement("option",null,"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"),f.map((function(e){return a.a.createElement("option",{key:e.id,value:e.slug},e.label)}))))};y.defaultProps={};var j=y,h=(n(57),n(12)),v=n.n(h),E=n(30);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var P=[{id:1,name:"s",label:"\u0423\u0441\u043b\u0443\u0433\u0438",url:"search/terms"},{id:2,name:"b",label:"\u0411\u0440\u0435\u043d\u0434\u044b",url:"search/brands_terms"},{id:3,name:"st",label:"\u0421\u0442\u0438\u043b\u0438",url:"search/styles"}],_=Object(s.d)((function(e){var t=e.history,n=function(e){var t=e.replace(/-/g,"=").replace(/\//g,"&"),n=v.a.parse(t);return Object(E.mapValues)(n,(function(e){return e&&e.replace(/=/g,"-")}))}(t.location.pathname),r=function(e,r){var a=function(e){return v.a.stringify(e).replace(/=/g,"-").replace(/[&?]/g,"/")}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,Object(u.a)({},e,r)));t.replace("/".concat(a,"/"))};return a.a.createElement("div",{className:"App"},a.a.createElement("h2",null,"The story of 3 dropdowns"),P.map((function(e){return a.a.createElement(j,{name:e.name,label:e.label,url:e.url,onFilterChange:r,query:n,key:e.id})})))}));l.a.render(a.a.createElement(o.a,null,a.a.createElement(_,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.b5b8eef0.chunk.js.map