(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(6),s=n.n(o),i=n(9),r=n(2),u=n.p+"static/media/Vector-mesto-logo.c2821b38.svg",l=n(0);var p=function(){return Object(l.jsx)("header",{className:"header page__header",children:Object(l.jsx)("img",{className:"header__logo",src:u,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"})})},d=c.a.createContext();var _=function(e){var t=c.a.useContext(d),n=e.owner._id===t._id,a=e.likes.some((function(e){return e._id===t._id}))?"elements__heart-button elements__heart-button_like":"elements__heart-button";return Object(l.jsxs)("li",{className:"elements__item",children:[Object(l.jsx)("img",{className:"elements__photo",src:e.link,alt:e.name,onClick:function(){e.onCardClick({name:e.name,link:e.link,imgOpen:!0})}}),Object(l.jsx)("button",{type:"button",className:"elements__delete-photo ".concat(n?"":"elements__delete-photo_no-active"),onClick:function(){e.onCardDelete(e)}}),Object(l.jsxs)("div",{className:"elements__container",children:[Object(l.jsx)("h2",{className:"elements__text",children:e.name}),Object(l.jsxs)("div",{className:"elements__like-container",children:[Object(l.jsx)("button",{type:"button",className:a,onClick:function(){e.onCardLike(e)}}),Object(l.jsx)("p",{className:"elements__like-counter",children:e.likes.length})]})]})]})};var h=function(e){var t=c.a.useContext(d);return Object(l.jsxs)("main",{className:"content",children:[Object(l.jsxs)("section",{className:"profile page__profile",children:[Object(l.jsxs)("div",{className:"profile__main-container",children:[Object(l.jsxs)("div",{className:"profile__avatar-container",children:[Object(l.jsx)("img",{className:"profile__avatar",src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440\u043a\u0430"}),Object(l.jsx)("div",{className:"profile__avatar-overlay",children:Object(l.jsx)("button",{onClick:e.onEditAvatar,className:"profile__avatar-edit",type:"button"})})]}),Object(l.jsxs)("div",{className:"profile__info",children:[Object(l.jsxs)("div",{className:"profile__title-button",children:[Object(l.jsx)("h1",{className:"profile__title",children:t.name}),Object(l.jsx)("button",{onClick:e.onEditProfile,className:"profile__edit-button",type:"button"})]}),Object(l.jsx)("p",{className:"profile__subtitle",children:t.about})]})]}),Object(l.jsx)("button",{onClick:e.onAddPlace,className:"profile__add-button",type:"button"})]}),Object(l.jsx)("section",{className:"elements page__elements",children:Object(l.jsx)("ul",{className:"elements__list",children:e.cards.map((function(t){return Object(l.jsx)(_,{link:t.link,name:t.name,likes:t.likes,onCardClick:e.onCardClick,owner:t.owner,onCardLike:e.onCardLike,id:t._id,onCardDelete:e.onCardDelete},t._id)}))})})]})};var m=function(){return Object(l.jsx)("footer",{className:"footer page__footer",children:Object(l.jsxs)("p",{className:"footer__text",children:["\xa9 ",(new Date).getFullYear()," Mesto Russia"]})})};var j=function(e){return Object(l.jsx)("div",{className:"popup popup_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(l.jsxs)("div",{className:"popup__container popup__container_".concat(e.name),children:[Object(l.jsx)("button",{className:"popup__close popup__close_".concat(e.name),type:"button",onClick:e.onClose}),Object(l.jsx)("h2",{className:"popup__title",children:e.title}),Object(l.jsx)("form",{onSubmit:e.onSubmit,className:"popup__form popup__form_".concat(e.name),name:"".concat(e.name,"-form"),noValidate:!0,children:e.children})]})})};var b=function(e){return Object(l.jsx)("div",{className:"popup popup_img ".concat(e.card.imgOpen?"popup_opened":""),children:Object(l.jsxs)("div",{className:"popup__container popup__container_img",children:[Object(l.jsx)("button",{className:"popup__close popup__close_img",type:"button",onClick:e.onClose}),Object(l.jsx)("img",{className:"popup__image",src:e.card.link,alt:e.card.name}),Object(l.jsx)("h2",{className:"popup__title popup__title_img",children:e.card.name})]})})},f=n(7),O=n(8),v=new(function(){function e(t){Object(f.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(O.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u0421\u0435\u0440\u0432\u0435\u0440 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d. \u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status,"."))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"editUserInfo",value:function(e){return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"editUserAvatar",value:function(e){return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}},{key:"_putLike",value:function(e){return fetch("".concat(this._url,"cards/likes/").concat(e,"/"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"_removeLike",value:function(e){return fetch("".concat(this._url,"cards/likes/").concat(e,"/"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return t?this._putLike(e):this._removeLike(e)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"cards/").concat(e,"/"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-20/",headers:{"content-type":"application/json",Authorization:"43c52a6d-19a6-461e-b067-2db5e03ba70b"}});var x=function(e){var t=c.a.useContext(d),n=c.a.useState(""),a=Object(r.a)(n,2),o=a[0],s=a[1],i=c.a.useState(""),u=Object(r.a)(i,2),p=u[0],_=u[1];return c.a.useEffect((function(){s(t.name),_(t.about)}),[t]),Object(l.jsxs)(j,{name:"user",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:o,about:p})},children:[Object(l.jsx)("input",{value:o,onChange:function(e){s(e.target.value)},type:"text",className:"popup__input popup__input_topform",name:"popup-name",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40",id:"name-user-input"}),Object(l.jsx)("span",{className:"popup__span",id:"name-user-input-error"}),Object(l.jsx)("input",{value:p,onChange:function(e){_(e.target.value)},type:"text",className:"popup__input popup__input_bottomform",name:"popup-about",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,minLength:"2",maxLength:"200",id:"about-user-input"}),Object(l.jsx)("span",{className:"popup__span",id:"about-user-input-error"}),Object(l.jsx)("button",{className:"popup__button",type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})};var k=function(e){var t=c.a.useRef();return Object(l.jsxs)(j,{name:"new-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:[Object(l.jsx)("input",{ref:t,type:"url",className:"popup__input popup__input_topform popup__input_new-avatar",name:"new-avatar-photo",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,id:"new-avatar"}),Object(l.jsx)("span",{className:"popup__span",id:"new-avatar-error"}),Object(l.jsx)("button",{className:"popup__button popup__button_new-avatar",type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})};var g=function(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],o=n[1],s=c.a.useState(""),i=Object(r.a)(s,2),u=i[0],p=i[1];return Object(l.jsxs)(j,{name:"place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:a,link:u})},children:[Object(l.jsx)("input",{value:a,onChange:function(e){o(e.target.value)},type:"text",className:"popup__input popup__input_topform",name:"popup-name-place",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"30",id:"name-place-input"}),Object(l.jsx)("span",{className:"popup__span",id:"name-place-input-error"}),Object(l.jsx)("input",{value:u,onChange:function(e){p(e.target.value)},type:"url",className:"popup__input popup__input_bottomform",name:"popup-link-photo",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,id:"link-input"}),Object(l.jsx)("span",{className:"popup__span",id:"link-input-error"}),Object(l.jsx)("button",{className:"popup__button",type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})};var N=function(){var e=c.a.useState(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],o=c.a.useState(!1),s=Object(r.a)(o,2),u=s[0],_=s[1],f=c.a.useState(!1),O=Object(r.a)(f,2),N=O[0],C=O[1],y=c.a.useState({name:"",link:"",imgOpen:!1}),S=Object(r.a)(y,2),L=S[0],w=S[1],E=c.a.useState({name:"\u0416\u0434\u0451\u043c\u0441",about:"\u0416\u0434\u0451\u043c\u0441",avatar:"https://i007.fotocdn.net/s124/4a5340ffd4d2b33c/public_pin_l/2826322361.jpg"}),P=Object(r.a)(E,2),A=P[0],U=P[1],D=c.a.useState([]),R=Object(r.a)(D,2),I=R[0],T=R[1];function q(){C(!1),a(!1),_(!1),w({name:"",link:"",imgOpen:!1})}return c.a.useEffect((function(){v.getInitialCards().then((function(e){T(e)})).catch((function(e){console.log("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 - ".concat(e))}))}),[]),c.a.useEffect((function(){v.getUserInfo().then((function(e){U(e)})).catch((function(e){console.log("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 - ".concat(e))}))}),[]),Object(l.jsx)(d.Provider,{value:A,children:Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)(p,{}),Object(l.jsx)(h,{onEditProfile:function(){a(!0)},onAddPlace:function(){_(!0)},onEditAvatar:function(){C(!0)},onCardClick:function(e){w(e)},cards:I,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===A._id}));v.changeLikeCardStatus(e.id,!t).then((function(t){T((function(n){return n.map((function(n){return n._id===e.id?t:n}))}))})).catch((function(e){console.log("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 - ".concat(e))}))},onCardDelete:function(e){v.deleteCard(e.id).then((function(t){T((function(t){return t.filter((function(t){return t._id===e.id?null:t}))}))})).catch((function(e){console.log("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 - ".concat(e))}))}}),Object(l.jsx)(m,{}),Object(l.jsxs)("section",{className:"popups",children:[Object(l.jsx)(x,{isOpen:n,onClose:q,onUpdateUser:function(e){v.editUserInfo(e).then((function(e){U(e),q()})).catch((function(e){console.log("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 - ".concat(e))}))}}),Object(l.jsx)(g,{isOpen:u,onClose:q,onAddPlace:function(e){v.addNewCard(e).then((function(e){T([e].concat(Object(i.a)(I))),q()})).catch((function(e){console.log("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 - ".concat(e))}))}}),Object(l.jsx)(j,{name:"areyousure",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",children:Object(l.jsx)("button",{className:"popup__button popup__button_areyousure",type:"submit",children:"\u0414\u0430"})}),Object(l.jsx)(k,{isOpen:N,onClose:q,onUpdateAvatar:function(e){console.log(e),v.editUserAvatar(e).then((function(e){U(e),q()})).catch((function(e){console.log("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 - ".concat(e))}))}}),Object(l.jsx)(b,{onClose:q,card:L})]})]})})},C=(n(15),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))});s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),C()}},[[16,1,2]]]);
//# sourceMappingURL=main.e656058c.chunk.js.map