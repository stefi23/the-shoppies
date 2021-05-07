(this["webpackJsonpthe-shoppies"]=this["webpackJsonpthe-shoppies"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(8),i=n.n(a),o=(n(14),n(7)),s=n.n(o),l=n(5),u=n(9),m=n(2),j=(n(16),n(17),n(0));var d=function(e){var t=e.movie,n=e.buttonEvent,c=e.index,r=e.nominatedMovies,a=e.buttonTitle;return Object(j.jsxs)("div",{className:"movie-card-container",children:[Object(j.jsxs)("div",{className:"movie-card-container__info",children:["Nominate"!==a?Object(j.jsxs)("p",{className:"movie-card-container__info-count",children:[c+1,"."]}):null,Object(j.jsx)("img",{className:"movie-card-container__info__image",src:t.Poster,alt:"Poster of ".concat(t.Title)})]}),Object(j.jsxs)("div",{className:"movie-card-container__body",children:[Object(j.jsxs)("div",{className:"movie-card-container__text",children:[Object(j.jsx)("h3",{className:"movie-card-container__text__title",children:t.Title}),Object(j.jsxs)("p",{children:["- ",t.Year," -"]})]}),Object(j.jsx)("button",{className:"movie-card-container__text__button",onClick:function(e){return n(c,e)},disabled:"Nominate"===a&&r.find((function(e){return e.Title===t.Title})),children:a})]})]})};var b=function(e){var t=e.title,n=e.movies,c=e.nominatedMovies,r=e.buttonEvent,a=e.buttonTitle;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:"movie-grid-title",children:"Nominations"===a?"".concat(c.length,"/5 ").concat(t):"".concat(t)}),Object(j.jsx)("div",{className:"movie-grid",children:n.map((function(e,t){return Object(j.jsx)(d,{index:t,movie:e,nominatedMovies:c,buttonEvent:r,buttonTitle:a},t)}))})]})},v=function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),i=Object(m.a)(a,2),o=i[0],d=i[1],v=Object(c.useState)([]),h=Object(m.a)(v,2),p=h[0],f=h[1],O=Object(c.useState)(!1),x=Object(m.a)(O,2),_=x[0],N=x[1],g=Object(c.useState)(!1),S=Object(m.a)(g,2),w=S[0],T=S[1],y=Object(c.useState)(""),E=Object(m.a)(y,2),M=E[0],k=E[1],C=Object(c.useState)(""),F=Object(m.a)(C,2),I=F[0],J=F[1];Object(c.useEffect)((function(){var e=localStorage.getItem("nominatedMovies"),t=JSON.parse(e);t&&f(t)}),[]),Object(c.useEffect)((function(){N((function(e){return 5===p.length}));var e=JSON.stringify(p);localStorage.setItem("nominatedMovies",e)}),[p]);var P=function(){var e=Object(u.a)(s.a.mark((function e(t){var c,a,i,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),J(""),k(""),T(!1),c="http://www.omdbapi.com/?apikey=".concat("45a1d724","&s=").concat(n,"&type=movie"),e.prev=5,e.next=8,fetch(c);case 8:return a=e.sent,e.next=11,a.json();case 11:"True"===(i=e.sent).Response?(o=Object(l.a)(new Map(i.Search.slice(0,5).map((function(e){return[e.imdbID,e]}))).values()),d(Object(l.a)(o)),r("")):(T(!0),"Too many results."===i.Error?J(i.Error):"Movie not found!"===i.Error&&k(i.Error)),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("h1",{className:"wrapper__title",children:"The Shoppies"}),Object(j.jsx)("p",{className:"wrapper__text",children:"Time to choose your 5 favorite movies for the Shoppies nominations \ud83c\udf7f"}),Object(j.jsxs)("form",{className:"form wrapper__form",onSubmit:P,children:[Object(j.jsx)("input",{type:"text",disabled:_,autocomplete:"off",className:"form wrapper__form__input",name:"query",placeholder:"",value:n,onChange:function(e){return r(e.target.value)}}),Object(j.jsx)("button",{className:"search-button",type:"submit",disabled:_||""===n,children:"Search"})]}),_?Object(j.jsx)("div",{className:"wrapper__success-message",children:"\ud83c\udfa5 You have nominated 5 films. \ud83c\udfc6"}):null,w&&I?Object(j.jsxs)("div",{className:"wrapper__warning-message",children:["\u26a0\ufe0f ",I," Try to narrow done your search by using more characters."]}):w&&M?Object(j.jsxs)("div",{className:"wrapper__error-message",children:["\u2757 We're sorry. ",M]}):Object(j.jsx)("div",{children:!_&&(null===o||void 0===o?void 0:o.length)>0?Object(j.jsx)(b,{title:"Search results:",movies:o,nominatedMovies:p,buttonEvent:function(e,t){f((function(t){return[].concat(Object(l.a)(t),[o[e]])})),d((function(){return[]}))},buttonTitle:"Nominate"}):null}),Object(j.jsx)("div",{children:p.length>0?Object(j.jsx)(b,{title:"Nominations",movies:p,nominatedMovies:p,buttonEvent:function(e,t){f((function(t){return t.filter((function(t,n){return n!==e}))}))},buttonTitle:"Remove"}):null})]})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),h()}},[[19,1,2]]]);
//# sourceMappingURL=main.b67ce1f8.chunk.js.map