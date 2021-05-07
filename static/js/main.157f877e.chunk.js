(this["webpackJsonpthe-shoppies"]=this["webpackJsonpthe-shoppies"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(8),i=n.n(a),o=(n(15),n(7)),s=n.n(o),l=n(5),u=n(9),m=n(2),j=(n(17),n(10)),b=n(0);var d=function(e){var t=e.movie,n=e.buttonEvent,c=e.index,r=e.nominatedMovies,a=e.buttonTitle;return Object(b.jsxs)("div",{className:"movie-card-container",children:[Object(b.jsxs)("div",{className:"movie-card-container__info",children:["Nominate"!==a?Object(b.jsxs)("p",{className:"movie-card-container__info-count",children:[c+1,"."]}):null,Object(b.jsx)("img",{className:"movie-card-container__info__image",src:t.Poster,alt:"Poster of ".concat(t.Title)})]}),Object(b.jsxs)("div",{className:"movie-card-container__body",children:[Object(b.jsxs)("div",{className:"movie-card-container__text",children:[Object(b.jsx)("h3",{className:"movie-card-container__text__title",children:t.Title}),Object(b.jsxs)("p",{children:["- ",t.Year," -"]})]}),Object(b.jsx)("button",{className:"movie-card-container__text__button",onClick:function(e){return n(c,e)},disabled:"Nominate"===a&&r.find((function(e){return e.Title===t.Title})),children:a})]})]})};var v=function(e){var t=e.title,n=e.movies,c=e.nominatedMovies,r=e.buttonEvent,a=e.buttonTitle;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{className:"movie-grid-title",children:"Nominations"===t?"".concat(c.length,"/5 ").concat(t):"".concat(t)}),Object(b.jsx)("div",{className:"movie-grid",children:n.map((function(e,t){return Object(b.jsx)(d,{index:t,movie:e,nominatedMovies:c,buttonEvent:r,buttonTitle:a},t)}))})]})},h=j.a.API_KEY,p=function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),i=Object(m.a)(a,2),o=i[0],j=i[1],d=Object(c.useState)([]),p=Object(m.a)(d,2),f=p[0],O=p[1],x=Object(c.useState)(!1),_=Object(m.a)(x,2),N=_[0],g=_[1],S=Object(c.useState)(!1),w=Object(m.a)(S,2),T=w[0],y=w[1],E=Object(c.useState)(""),M=Object(m.a)(E,2),k=M[0],I=M[1],C=Object(c.useState)(""),F=Object(m.a)(C,2),P=F[0],J=F[1];Object(c.useEffect)((function(){var e=localStorage.getItem("nominatedMovies"),t=JSON.parse(e);t&&O(t)}),[]),Object(c.useEffect)((function(){g((function(e){return 5===f.length}));var e=JSON.stringify(f);localStorage.setItem("nominatedMovies",e)}),[f]);var D=function(){var e=Object(u.a)(s.a.mark((function e(t){var c,a,i,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),J(""),I(""),y(!1),c="http://www.omdbapi.com/?apikey=".concat(h,"&s=").concat(n,"&type=movie"),e.prev=5,e.next=8,fetch(c);case 8:return a=e.sent,e.next=11,a.json();case 11:"True"===(i=e.sent).Response?(o=Object(l.a)(new Map(i.Search.slice(0,5).map((function(e){return[e.imdbID,e]}))).values()),j(Object(l.a)(o)),r("")):(y(!0),"Too many results."===i.Error?J(i.Error):"Movie not found!"===i.Error&&I(i.Error)),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)("h1",{className:"wrapper__title",children:"The Shoppies"}),Object(b.jsx)("p",{className:"wrapper__text",children:"Time to choose your 5 favorite movies for the Shoppies nominations \ud83c\udf7f"}),Object(b.jsxs)("form",{className:"form wrapper__form",onSubmit:D,children:[Object(b.jsx)("input",{type:"text",disabled:N,autocomplete:"off",className:"form wrapper__form__input",name:"query",placeholder:"",value:n,onChange:function(e){return r(e.target.value)}}),Object(b.jsx)("button",{className:"search-button",type:"submit",disabled:N||""===n,children:"Search"})]}),N?Object(b.jsx)("div",{className:"wrapper__success-message",children:"\ud83c\udfa5 You have nominated 5 films. \ud83c\udfc6"}):null,T&&P?Object(b.jsxs)("div",{className:"wrapper__warning-message",children:["\u26a0\ufe0f ",P," Try to narrow done your search by using more characters."]}):T&&k?Object(b.jsxs)("div",{className:"wrapper__error-message",children:["\u2757 We're sorry. ",k]}):Object(b.jsx)("div",{children:!N&&(null===o||void 0===o?void 0:o.length)>0?Object(b.jsx)(v,{title:"Search results:",movies:o,nominatedMovies:f,buttonEvent:function(e,t){O((function(t){return[].concat(Object(l.a)(t),[o[e]])})),j((function(){return[]}))},buttonTitle:"Nominate"}):null}),Object(b.jsx)("div",{children:f.length>0?Object(b.jsx)(v,{title:"Nominations",movies:f,nominatedMovies:f,buttonEvent:function(e,t){O((function(t){return t.filter((function(t,n){return n!==e}))}))},buttonTitle:"Remove"}):null})]})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),f()}},[[19,1,2]]]);
//# sourceMappingURL=main.157f877e.chunk.js.map