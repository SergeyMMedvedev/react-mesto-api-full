(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{34:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(1),i=n.n(o),s=n(23),c=n.n(s),r=n(10),u=(n(34),n(26)),l=n(2),p=n(4),d=n(24),A=n(18),j=n.n(A),b=n.p+"static/media/logo.6129e9de.svg";var h=function(e){var t=e.loggedIn,n=e.email,i=e.onSignOut,s=Object(o.useState)(!1),c=Object(l.a)(s,2),u=c[0],A=c[1],h=Object(d.useMediaQuery)({query:"(max-width: 480px)"});function m(){return Object(a.jsxs)("div",{className:j()("header__log-container",{"header__log-container_mobile":h},{"header__log-container_mobile-active section section_wide":u&&h}),children:[Object(a.jsx)("p",{className:"header__user-email",children:n}),Object(a.jsx)("button",{onClick:i,className:"header__signOut-button",children:"\u0412\u044b\u0439\u0442\u0438"})]})}return Object(a.jsxs)("header",{className:"header",children:[h&&t&&m(),Object(a.jsxs)("div",{className:"header__container section section_wide",children:[Object(a.jsx)("img",{className:"header__logo",src:b,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u041c\u0435\u0441\u0442\u043e \u0420\u043e\u0441\u0441\u0438\u044f"}),Object(a.jsx)(p.b,{path:"/sign-up",children:Object(a.jsx)(r.b,{to:"/sign-in",className:"header__link",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(a.jsx)(p.b,{path:"/sign-in",children:Object(a.jsx)(r.b,{to:"/sign-up",className:"header__link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),t&&(h?Object(a.jsx)("button",{onClick:function(){A(!u)},className:j()("header__extend-button",{"header__extend-button_active":u})}):m())]})]})},m=i.a.createContext(),f={name:"...",about:"...",avatar:"",_id:"...",cohort:"...",default:!0};var g=function(e){var t=e.card,n=e.onLikeClick,i=e.onCardClick,s=e.onDelPlace,c=Object(o.useContext)(m),r=t.owner===c._id,u="card__del-button ".concat(!r&&"card__del-button_hidden"),l=t.likes.some((function(e){return e===c._id})),p="card__like ".concat(l&&"card__like_pressed");return Object(a.jsxs)("li",{className:"card",children:[Object(a.jsx)("div",{className:"card__picture-container",children:Object(a.jsx)("img",{src:t.link,className:"card__picture",alt:t.name,onClick:function(){i(t)}})}),Object(a.jsxs)("div",{className:"card__info",children:[Object(a.jsx)("p",{className:"card__title",children:t.name}),Object(a.jsxs)("div",{className:"card__likes",children:[Object(a.jsx)("button",{className:p,onClick:function(){n(t)},type:"button","aria-label":"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043b\u0430\u0439\u043a"}),Object(a.jsx)("div",{className:"card__likes-count",children:t.likes.length})]})]}),Object(a.jsx)("button",{className:u,onClick:function(){s(t)}})]})};var O=function(e){var t=e.onEditProfile,n=e.onEditAvatar,i=e.onAddPlace,s=e.onDelPlace,c=e.onCardClick,r=e.onCardLike,u=e.isLoading,l=e.cards,p=Object(o.useContext)(m);return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("main",{className:"section",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__avatar",children:[Object(a.jsx)("img",{className:"profile__avatar-img",src:p.avatar?p.avatar:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCADwAPADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+f+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooq0usTLorafstfIaYTljaxmbcBjAl2+YFx/AG255xnmgCrRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFDHcxPT2HaiigAooooAKVNpcbiQueSBkgUlFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFOEbGMttO1SATjgE5x/I/lTasR6i0WlTWm1fLmljmJx8wKBwMf8AfZ/IUAV6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//2Q==",alt:"\u0444\u043e\u0442\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f"}),Object(a.jsx)("div",{onClick:n,className:"profile__avatar-edit"})]}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsxs)("div",{className:"profile__name-edit",children:[Object(a.jsx)("h1",{className:"profile__name",children:p.name}),Object(a.jsx)("button",{onClick:t,className:"profile__edit-button",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c"})]}),Object(a.jsx)("p",{className:"profile__profession",children:p.about})]}),Object(a.jsx)("button",{onClick:i,className:"profile__add-button",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0430\u0444\u0438\u044e"})]}),Object(a.jsxs)("div",{className:"spinner ".concat(u&&"spinner_visible"),children:[Object(a.jsx)("i",{className:"spinner__inner"}),Object(a.jsx)("p",{className:"spinner__text",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})]}),Object(a.jsx)("section",{className:"card-list",children:Object(a.jsx)("ul",{className:"card-list__elements",children:l.map((function(e){return Object(a.jsx)(g,{card:e,onLikeClick:r,onCardClick:c,onDelPlace:s},e._id)}))})})]})})};var K=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{lang:"en",className:"footer__text",children:"\xa9 2020. Mesto Russia"})})},v=n(3),_=n.n(v),x=n(8),U=n(15),C=n(16),w="https://api.medvedevmesto.students.nomoredomains.icu",k=new(function(){function e(t){Object(U.a)(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}return Object(C.a)(e,[{key:"getUserInfo",value:function(){var e=Object(x.a)(_.a.mark((function e(){var t,n,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=fetch(this.baseUrl+"/users/me",{headers:this.headers}),e.next=3,t;case 3:if((n=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(n.status)));case 6:return e.next=8,n.json();case 8:return a=e.sent,e.abrupt("return",new Promise((function(e){e(a)})));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getInitialCards",value:function(){var e=Object(x.a)(_.a.mark((function e(){var t,n,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=fetch(this.baseUrl+"/cards",{headers:this.headers}),e.next=3,t;case 3:if((n=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(n.status)));case 6:return e.next=8,n.json();case 8:return a=e.sent,e.abrupt("return",new Promise((function(e){e(a)})));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setUserInfo",value:function(){var e=Object(x.a)(_.a.mark((function e(t){var n,a,o;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=fetch(this.baseUrl+"/users/me",{method:"PATCH",headers:this.headers,body:JSON.stringify(t)}),e.next=3,n;case 3:if((a=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(a.status)));case 6:return e.next=8,a.json();case 8:return o=e.sent,e.abrupt("return",new Promise((function(e){e(o)})));case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"addCard",value:function(){var e=Object(x.a)(_.a.mark((function e(t){var n,a,o;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=fetch(this.baseUrl+"/cards",{method:"POST",headers:this.headers,body:JSON.stringify(t)}),e.next=3,n;case 3:if((a=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(a.status)));case 6:return e.next=8,a.json();case 8:return o=e.sent,e.abrupt("return",new Promise((function(e){e(o)})));case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"removeCard",value:function(){var e=Object(x.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return fetch(this.baseUrl+"/cards/"+t._id,{method:"DELETE",headers:this.headers}),e.abrupt("return",new Promise((function(e){e()})));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"addLike",value:function(){var e=Object(x.a)(_.a.mark((function e(t){var n,a,o;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=fetch(this.baseUrl+"/cards/".concat(t._id,"/likes"),{method:"PUT",headers:this.headers}),e.next=3,n;case 3:if((a=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(a.status)));case 6:return o=a.json(),e.abrupt("return",new Promise((function(e){e(o)})));case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"removeLike",value:function(){var e=Object(x.a)(_.a.mark((function e(t){var n,a,o;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=fetch(this.baseUrl+"/cards/".concat(t._id,"/likes"),{method:"DELETE",headers:this.headers}),e.next=3,n;case 3:if((a=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(a.status)));case 6:return o=a.json(),e.abrupt("return",new Promise((function(e){e(o)})));case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"changeAvatar",value:function(){var e=Object(x.a)(_.a.mark((function e(t){var n,a,o;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=fetch(this.baseUrl+"/users/me/avatar",{method:"PATCH",headers:this.headers,body:JSON.stringify(t)}),e.next=3,n;case 3:if((a=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(a.status)));case 6:return e.next=8,a.json();case 8:return o=e.sent,e.abrupt("return",new Promise((function(e){e(o)})));case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())({baseUrl:w,headers:{authorization:"Bearer ".concat(localStorage.getItem("jwt")),"Content-Type":"application/json"}}),F=new(function(){function e(t){Object(U.a)(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}return Object(C.a)(e,[{key:"register",value:function(){var e=Object(x.a)(_.a.mark((function e(t,n){var a,o,i;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=fetch(this.baseUrl+"/signup",{method:"POST",headers:this.headers,body:JSON.stringify({email:t,password:n})}),e.next=3,a;case 3:if((o=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(o.status)));case 6:return e.next=8,o.json();case 8:return i=e.sent,e.abrupt("return",new Promise((function(e){e(i)})));case 10:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"authorize",value:function(){var e=Object(x.a)(_.a.mark((function e(t,n){var a,o,i,s;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=fetch(this.baseUrl+"/signin",{method:"POST",headers:this.headers,body:JSON.stringify({email:t,password:n})}),e.next=3,a;case 3:if((o=e.sent).ok){e.next=9;break}return e.next=7,o.json();case 7:return i=e.sent,e.abrupt("return",Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(o.status," ").concat(i.message)));case 9:return e.next=11,o.json();case 11:return s=e.sent,e.abrupt("return",new Promise((function(e){e(s)})));case 13:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getContent",value:function(){var e=Object(x.a)(_.a.mark((function e(t){var n,a,o;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=fetch(this.baseUrl+"/users/me",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}),e.next=3,n;case 3:if((a=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(a.status)));case 6:return e.next=8,a.json();case 8:return o=e.sent,e.abrupt("return",new Promise((function(e){e(o)})));case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())({baseUrl:w,headers:{Accept:"application/json","Content-Type":"application/json"}});var R=function(e){var t=e.children,n=e.title,i=e.name,s=e.textButton,c=e.textButtonLoading,r=e.isOpen,u=e.isSaving,l=e.onSubmit,p=e.onClose,d=e.isDisabled,A=u?c:s,j="popup__submit ".concat(d&&"popup__submit_inactive"),b=Object(o.useCallback)((function(e){"Escape"===e.key&&p(b)}),[p]);return Object(o.useEffect)((function(){r&&document.addEventListener("keydown",b)}),[r,b]),Object(a.jsx)("div",{onMouseDown:function(e){(e.target.classList.contains("popup__close")||e.target.classList.contains("popup_opened"))&&p(b)},className:"popup popup_".concat(i," ").concat(r&&"popup_opened"),children:Object(a.jsxs)("div",{className:"popup__window ".concat(r&&"popup__window_opened"),children:[Object(a.jsx)("h2",{className:"popup__title",children:n}),Object(a.jsxs)("form",{id:i,onSubmit:function(e){e.preventDefault(),document.removeEventListener("keydown",b),l()},className:"popup__form",name:i,noValidate:!0,children:[t,Object(a.jsx)("input",{type:"submit",className:j,value:A,disabled:d})]}),Object(a.jsx)("button",{onClick:p,className:"popup__close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})]})})};function N(e,t,n){!Boolean(e)&&t<2&&n("\u041d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044f!")}var B=function(e){var t=e.isSaving,n=e.onUpdateUser,i=e.isOpen,s=e.onClose,c="popup__input-error ".concat(i&&"popup__input-error_active"),r=Object(o.useContext)(m),u=Object(o.useState)(r.name),p=Object(l.a)(u,2),d=p[0],A=p[1],j=Object(o.useState)(),b=Object(l.a)(j,2),h=b[0],f=b[1],g=Object(o.useState)(r.about),O=Object(l.a)(g,2),K=O[0],v=O[1],_=Object(o.useState)(),x=Object(l.a)(_,2),U=x[0],C=x[1],w=Object(o.useState)(!1),k=Object(l.a)(w,2),F=k[0],B=k[1];return Object(o.useEffect)((function(){A(r.name),v(r.about)}),[r,i]),Object(a.jsxs)(R,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"profile-form",textButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",textButtonLoading:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...",isOpen:i,isSaving:t,isDisabled:F,onSubmit:function(){n({name:d,about:K})},onClose:function(e){setTimeout((function(){A(r.name),f(),v(r.about),C(),B(!1)}),500),s(e)},children:[Object(a.jsx)("input",{id:"input-name",onChange:function(e){A(e.target.value),f(e.target.validationMessage),N(e.target.validationMessage,e.target.value.trim().length,f),B(Boolean(e.target.validationMessage)||Boolean(U)||e.target.value.trim().length<2)},value:d,type:"text",className:"popup__input",placeholder:"\u0418\u043c\u044f",name:"name",required:!0,minLength:"2",maxLength:"40"}),Object(a.jsx)("span",{id:"input-name-error",className:c,children:h}),Object(a.jsx)("input",{id:"input-activity",onChange:function(e){v(e.target.value),C(e.target.validationMessage),N(e.target.validationMessage,e.target.value.trim().length,C),B(Boolean(e.target.validationMessage)||Boolean(h)||e.target.value.trim().length<2)},value:K,type:"text",className:"popup__input",placeholder:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f",name:"text",required:!0,minLength:"2",maxLength:"200"}),Object(a.jsx)("span",{id:"input-activity-error",className:c,children:U})]})};var S=function(e){var t=e.isSaving,n=e.onUpdateAvatar,i=e.isOpen,s=e.onClose,c=Object(o.useRef)(),r=Object(o.useState)(!1),u=Object(l.a)(r,2),p=u[0],d=u[1],A="popup__input-error ".concat(p&&"popup__input-error_active");return Object(a.jsxs)(R,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"add-avatar",textButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",textButtonLoading:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...",isOpen:i,isSaving:t,isDisabled:c.current&&Boolean(c.current.validationMessage),onSubmit:function(){n({avatar:c.current.value}),setTimeout((function(){d(!1),c.current.value=""}),500)},onClose:function(e){setTimeout((function(){d(!1),c.current.value=""}),500),s(e)},children:[Object(a.jsx)("input",{id:"input-source",onChange:function(){d(!0)},ref:c,type:"url",className:"popup__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",name:"link",required:!0}),Object(a.jsx)("span",{id:"input-source-error",className:A,children:c.current&&c.current.validationMessage})]})};var y=function(e){var t=e.isSaving,n=e.onAddPlace,i=e.isOpen,s=e.onClose,c="popup__input-error ".concat(i&&"popup__input-error_active"),r=Object(o.useState)(""),u=Object(l.a)(r,2),p=u[0],d=u[1],A=Object(o.useState)(!0),j=Object(l.a)(A,2),b=j[0],h=j[1],m=Object(o.useState)(""),f=Object(l.a)(m,2),g=f[0],O=f[1],K=Object(o.useState)(!0),v=Object(l.a)(K,2),_=v[0],x=v[1],U=Object(o.useState)(!0),C=Object(l.a)(U,2),w=C[0],k=C[1];return Object(o.useEffect)((function(){d(""),O("")}),[i]),Object(a.jsxs)(R,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add-form",textButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",textButtonLoading:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...",isOpen:i,isSaving:t,isDisabled:w,onSubmit:function(){n({name:p,link:g}),setTimeout((function(){h(!0),x(!0),k(!0)}),500)},onClose:function(e){setTimeout((function(){d(""),h(!0),O(""),x(!0),k(!0)}),500),s(e)},children:[Object(a.jsx)("input",{id:"input-photo-title",onChange:function(e){d(e.target.value),h(e.target.validationMessage),N(e.target.validationMessage,e.target.value.trim().length,h),k(Boolean(e.target.validationMessage)||Boolean(_)||e.target.value.trim().length<2)},value:p,type:"text",className:"popup__input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",minLength:"2",maxLength:"30",required:!0}),Object(a.jsx)("span",{id:"input-photo-title-error",className:c,children:b}),Object(a.jsx)("input",{id:"input-source-img",onChange:function(e){O(e.target.value),x(e.target.validationMessage),k(Boolean(e.target.validationMessage)||Boolean(b))},value:g,type:"url",className:"popup__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"text",required:!0}),Object(a.jsx)("span",{id:"input-source-img-error",className:c,children:_})]})};var E=function(e){var t=e.isSaving,n=e.onDeletePlace,o=e.isOpen,i=e.card,s=e.onClose;return Object(a.jsx)(R,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"del-form",textButton:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",textButtonLoading:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...",isOpen:o,isSaving:t,onSubmit:function(){n(i)},onClose:s})};var D=function(e){var t=e.card,n=e.isOpen,i=e.onClose,s=Object(o.useCallback)((function(e){"Escape"===e.key&&i(s)}),[i]);return Object(o.useEffect)((function(){n&&document.addEventListener("keydown",s)}),[n,s]),Object(a.jsx)("div",{onClick:function(e){e.target.classList.contains("popup_opened")&&i(s)},className:"popup popup_picture ".concat(n&&"popup_opened"),children:Object(a.jsxs)("div",{className:"popup__picture-container ".concat(n&&"popup__window_opened"),children:[Object(a.jsx)("img",{src:t&&t.link,className:"popup__image",alt:"\u0444\u043e\u0442\u043e"}),Object(a.jsx)("h2",{className:"popup__image-title",children:t&&t.name}),Object(a.jsx)("button",{className:"popup__close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:function(e){i(e)}})]})})},Q=n(27),M=n(28),P=function(e){var t=e.component,n=Object(M.a)(e,["component"]);return Object(a.jsx)(p.b,{exact:!0,path:n.path,children:function(){return n.loggedIn?Object(a.jsx)(t,Object(Q.a)({},n)):Object(a.jsx)(p.a,{to:"/sign-in"})}})};var L=function(e){var t=e.onRegister,n=Object(o.useState)(""),i=Object(l.a)(n,2),s=i[0],c=i[1],u=Object(o.useState)(""),p=Object(l.a)(u,2),d=p[0],A=p[1];return Object(a.jsxs)("div",{className:"register",children:[Object(a.jsx)("p",{className:"register__header",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(s,d,(function(){c(""),A("")}))},className:"register__form",children:[Object(a.jsx)("input",{id:"email",className:"register__input",name:"email",type:"email",value:s,onChange:function(e){c(e.target.value)},placeholder:"Email",required:!0,minLength:"2",maxLength:"30"}),Object(a.jsx)("input",{id:"password",className:"register__input",name:"password",type:"password",value:d,onChange:function(e){A(e.target.value)},placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,minLength:"8",maxLength:"30"}),Object(a.jsx)("button",{type:"submit",className:"register__submit-button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(a.jsxs)("p",{className:"register__login-text",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",Object(a.jsx)(r.b,{to:"/sign-in",className:"register__login-link",children:" \u0412\u043e\u0439\u0442\u0438"})]})]})};var I=function(e){var t=e.onLogin,n=Object(o.useState)(""),i=Object(l.a)(n,2),s=i[0],c=i[1],r=Object(o.useState)(""),u=Object(l.a)(r,2),p=u[0],d=u[1];return Object(a.jsxs)("div",{className:"register",children:[Object(a.jsx)("p",{className:"register__header",children:"\u0412\u0445\u043e\u0434"}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(s,p)},className:"register__form",children:[Object(a.jsx)("input",{id:"email",className:"register__input",name:"email",type:"email",value:s,onChange:function(e){c(e.target.value)},placeholder:"Email",required:!0}),Object(a.jsx)("input",{id:"password",className:"register__input",name:"password",type:"password",value:p,onChange:function(e){d(e.target.value)},placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",minLength:"8",maxLength:"30",required:!0}),Object(a.jsx)("button",{type:"submit",className:"register__submit-button",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})};var T=function(e){var t=e.name,n=e.isOpen,i=e.onClose,s=e.isSuccessSignUp,c=e.infoTooltipText,r=!0,u=Object(o.useCallback)((function(e){"Escape"===e.key&&i(u,r,s)}),[i,r,s]);return Object(o.useEffect)((function(){n&&document.addEventListener("keydown",u)}),[n,u]),Object(a.jsx)("div",{onMouseDown:function(e){(e.target.classList.contains("popup__close")||e.target.classList.contains("popup_opened"))&&i(u,r,s)},className:"popup popup_".concat(t," ").concat(n&&"popup_opened"),children:Object(a.jsxs)("div",{className:"popup__window popup__window_infoTooltip ".concat(n&&"popup__window_opened"),children:[s?Object(a.jsx)("div",{className:"popup__logo-success"}):Object(a.jsx)("div",{className:"popup__logo-unsuccess"}),Object(a.jsx)("h2",{className:"popup__title popup__title_infoTooltip",children:c}),Object(a.jsx)("button",{onClick:function(){i(u,r,s)},className:"popup__close popup__close_infoTooltip",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})]})})};var J=function(){var e=Object(o.useState)(!0),t=Object(l.a)(e,2),n=t[0],i=t[1],s=Object(o.useState)(!1),c=Object(l.a)(s,2),r=c[0],d=c[1],A=Object(o.useState)(f),j=Object(l.a)(A,2),b=j[0],g=j[1],v=Object(o.useState)([]),_=Object(l.a)(v,2),x=_[0],U=_[1],C=Object(o.useState)(),w=Object(l.a)(C,2),R=w[0],N=w[1],Q=Object(o.useState)(null),M=Object(l.a)(Q,2),J=M[0],q=M[1],H=Object(o.useState)(""),W=Object(l.a)(H,2),Y=W[0],Z=W[1],V=Object(o.useState)(!1),G=Object(l.a)(V,2),z=G[0],X=G[1],$=Object(o.useState)(!1),ee=Object(l.a)($,2),te=ee[0],ne=ee[1],ae=Object(o.useState)(!1),oe=Object(l.a)(ae,2),ie=oe[0],se=oe[1],ce=Object(o.useState)(!1),re=Object(l.a)(ce,2),ue=re[0],le=re[1],pe=Object(o.useState)(!1),de=Object(l.a)(pe,2),Ae=de[0],je=de[1],be=Object(o.useState)(!1),he=Object(l.a)(be,2),me=he[0],fe=he[1],ge=Object(o.useState)(),Oe=Object(l.a)(ge,2),Ke=Oe[0],ve=Oe[1],_e=Object(o.useState)(""),xe=Object(l.a)(_e,2),Ue=xe[0],Ce=xe[1],we=Object(p.g)();function ke(e){Ce(e?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."),ve(e),fe(!0)}function Fe(e,t,n){X(!1),ne(!1),se(!1),le(!1),je(!1),t&&function(e){e&&we.push("/sign-in"),fe(!1)}(n),document.removeEventListener("keydown",e)}return Object(o.useEffect)((function(){J&&we.push("/")}),[J]),Object(o.useEffect)((function(){J&&Promise.all([k.getUserInfo(),k.getInitialCards()]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];U(a),g(n),i(!1)})).catch((function(e){return console.log(e)}))}),[J]),Object(o.useEffect)((function(){!function(){var e=localStorage.getItem("jwt");e?F.getContent(e).then((function(e){e&&(q(!0),Z(e.email),we.push("/"))})).catch((function(e){return console.log(e)})):(q(!1),localStorage.removeItem("jwt"))}()}),[]),Object(a.jsx)("div",{className:"page",children:Object(a.jsx)("div",{className:"page__container",children:Object(a.jsxs)(m.Provider,{value:b,children:[Object(a.jsx)(h,{loggedIn:J,email:Y,onSignOut:function(){localStorage.removeItem("jwt"),we.push("/sign-in"),q(!1)}}),null===J?Object(a.jsxs)("div",{className:"spinner spinner_visible",children:[Object(a.jsx)("i",{className:"spinner__inner"}),Object(a.jsx)("p",{className:"spinner__text",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})]}):Object(a.jsxs)(p.d,{children:[Object(a.jsx)(P,{exact:!0,path:"/",loggedIn:J,component:O,onEditProfile:function(){d(!1),X(!0)},onEditAvatar:function(){d(!1),ne(!0)},onAddPlace:function(){d(!1),se(!0)},onDelPlace:function(e){N(e),d(!1),le(!0)},onCardClick:function(e){N(e),je(!0)},onCardLike:function(e){e.likes.some((function(e){return e===b._id}))?k.removeLike(e).then((function(t){var n=x.map((function(n){return n._id===e._id?t:n}));U(n)})).catch((function(e){return console.log(e)})):k.addLike(e).then((function(t){var n=x.map((function(n){return n._id===e._id?t:n}));U(n)})).catch((function(e){return console.log(e)}))},isLoading:n,cards:x}),Object(a.jsx)(p.b,{path:"/sign-in",children:Object(a.jsx)(I,{onLogin:function(e,t){F.authorize(e,t).then((function(t){if(t.token){var n=t.token;localStorage.setItem("jwt",n),k.headers.authorization="Bearer ".concat(localStorage.getItem("jwt")),q(!0),Z(e)}})).catch((function(e){Ce("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."),ve(!1),fe(!0),console.log(e)}))}})}),Object(a.jsx)(p.b,{path:"/sign-up",children:Object(a.jsx)(L,{onRegister:function(e,t,n){F.register(e,t).then((function(){ke(!0),n()})).catch((function(e){ke(!1),console.log(e)}))}})}),Object(a.jsx)(p.b,{children:J?Object(a.jsx)(p.a,{to:"/"}):Object(a.jsx)(p.a,{to:"/sign-in"})})]}),J&&Object(a.jsx)(K,{}),Object(a.jsx)(B,{isSaving:r,onUpdateUser:function(e){d(!0),k.setUserInfo(e).then((function(e){g(e),Fe()})).catch((function(e){return console.log(e)}))},isOpen:z,onClose:Fe}),Object(a.jsx)(S,{isSaving:r,onUpdateAvatar:function(e){d(!0),k.changeAvatar(e).then((function(e){g(e),Fe()})).catch((function(e){return console.log(e)}))},isOpen:te,onClose:Fe}),Object(a.jsx)(y,{isSaving:r,onAddPlace:function(e){d(!0),k.addCard(e).then((function(e){var t=Object(u.a)(x);t.unshift(e),U(t),Fe()})).catch((function(e){return console.log(e)}))},isOpen:ie,onClose:Fe}),Object(a.jsx)(E,{isSaving:r,onDeletePlace:function(e){d(!0),k.removeCard(e).then((function(){var t=x.filter((function(t){return t._id!==e._id}));U(t),Fe()})).catch((function(e){return console.log(e)}))},isOpen:ue,card:R,onClose:Fe}),Object(a.jsx)(D,{card:R,isOpen:Ae,onClose:Fe}),Object(a.jsx)(T,{isOpen:me,onClose:Fe,isSuccessSignUp:Ke,infoTooltipText:Ue})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(r.a,{basename:"/",children:Object(a.jsx)(J,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.9d377163.chunk.js.map