(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],Array(25).concat([function(e,t,c){},,,,,,,,,,,function(e,t,c){},,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(38),i=c.n(s),r=(c(43),c(7)),o=c(4),l=(c(44),c(5)),j=c(9),d=c.n(j),b=(c(45),c(36),c(0)),u=function(e){var t=e.to,c=e.title,n=e.setIsMenuOpened;return Object(b.jsx)("li",{className:"nav__item nav__item--active",children:Object(b.jsx)(r.c,{to:t,className:function(e){var t=e.isActive;return d()("nav__link",{"nav__link--active":t})},onClick:function(){return n(!1)},children:c})})},m=a.a.memo((function(e){var t=e.setIsMenuOpened;return Object(b.jsx)("nav",{className:"nav",children:Object(b.jsxs)("ul",{className:"nav__list",children:[Object(b.jsx)(u,{setIsMenuOpened:t,title:"home",to:"/"}),Object(b.jsx)(u,{setIsMenuOpened:t,title:"Phones",to:"phones"}),Object(b.jsx)(u,{setIsMenuOpened:t,title:"Tablets",to:"tablets"}),Object(b.jsx)(u,{setIsMenuOpened:t,title:"Accessories",to:"accessories"})]})})})),O=(c(47),a.a.memo((function(e){var t=e.iconName,c=e.to;return Object(b.jsx)("div",{className:"iconBlock",children:Object(b.jsx)(r.c,{title:t,"aria-label":t,to:c,className:function(e){var t=e.isActive;return d()("iconBlock__link",{"iconBlock__link--active":t})},children:Object(b.jsx)("div",{className:"iconBlock__icon iconBlock__icon--".concat(t)})})})}))),_=(c(48),c.p+"static/media/Logo.3c6bd188.svg"),h=Object(n.memo)((function(e){var t=e.setIsMenuOpened;return t?Object(b.jsx)(r.b,{title:"Nice Gadgets - Home Page",className:"logo",to:"/",onClick:function(){return t(!1)},children:Object(b.jsx)("img",{src:_,className:"logo__image",alt:"NiceGadgets logo"})}):Object(b.jsx)(r.b,{title:"Nice Gadgets - Home Page",className:"logo",to:"/",children:Object(b.jsx)("img",{src:_,className:"logo__image",alt:"NiceGadgets logo"})})})),p=(c(49),Object(n.memo)((function(e){var t=e.isMenuOpen,c=e.setIsMenuOpened;return Object(b.jsxs)("div",{className:d()("burger-menu",{"burger-menu--active":t}),children:[Object(b.jsx)(m,{setIsMenuOpened:c}),Object(b.jsxs)("div",{className:"burger-menu__icons",children:[Object(b.jsx)("div",{className:"burger-menu__icon-block",children:Object(b.jsx)(r.c,{title:"Favourites","aria-label":"favourites",to:"/favourites",className:function(e){var t=e.isActive;return d()("burger-menu__icon-link",{"burger-menu__icon-link--active":t})},onClick:function(){return c(!1)},children:Object(b.jsx)("div",{className:"burger-menu__icon burger-menu__icon--favourites"})})}),Object(b.jsx)("div",{className:"burger-menu__icon-block",children:Object(b.jsx)(r.c,{title:"Cart","aria-label":"cart",to:"/cart",className:function(e){var t=e.isActive;return d()("burger-menu__icon-link",{"burger-menu__icon-link--active":t})},onClick:function(){return c(!1)},children:Object(b.jsx)("div",{className:"burger-menu__icon burger-menu__icon--cart"})})})]})]})}))),x=a.a.memo((function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useCallback)((function(e){e.preventDefault(),a((function(e){return!e}))}),[]);return Object(n.useEffect)((function(){return c?document.body.classList.add("page--with-menu"):document.body.classList.remove("page--with-menu")}),[c]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("header",{className:"header page__header",children:[Object(b.jsxs)("div",{className:"header__links",children:[Object(b.jsx)("div",{className:"header__logo",children:Object(b.jsx)(h,{setIsMenuOpened:a})}),Object(b.jsx)("div",{className:"header__nav",children:Object(b.jsx)(m,{setIsMenuOpened:a})})]}),Object(b.jsx)("div",{className:"header__menu",children:Object(b.jsx)("button",{title:"Menu","aria-label":"menu button",type:"button",className:"header__menu-opener",onClick:function(e){return s(e)},children:Object(b.jsx)("div",{className:d()("header__menu-icon",{"header__menu-icon--opened":c,"header__menu-icon--closed":!c})})})}),Object(b.jsxs)("div",{className:"header__icons",children:[Object(b.jsx)(O,{iconName:"Favourites",to:"/favourites"}),Object(b.jsx)(O,{iconName:"Cart",to:"/cart"})]})]}),Object(b.jsx)(p,{isMenuOpen:c,setIsMenuOpened:a})]})})),f=(c(25),Object(n.memo)((function(){return Object(b.jsxs)("button",{type:"button",className:"footer__btn",onClick:function(){setTimeout((function(){return window.scrollTo({top:0,behavior:"smooth"})}),200)},children:[Object(b.jsx)("span",{className:"footer__back-to-top",children:"Back to top"}),Object(b.jsx)("div",{className:"footer__arrow-up"})]})}))),g=Object(n.memo)((function(e){var t=e.to,c=e.text;return Object(b.jsx)("a",{href:t,className:"footer__nav-link",children:c})})),v=Object(n.memo)((function(){return Object(b.jsxs)("div",{className:"footer__nav",children:[Object(b.jsx)(g,{to:"https://github.com/fe-oct22-senior-html-developers/product_catalog",text:"github"}),Object(b.jsx)(g,{to:"#",text:"contacts"}),Object(b.jsx)(g,{to:"#",text:"rights"})]})})),N=Object(n.memo)((function(){return Object(b.jsx)("footer",{className:"footer",children:Object(b.jsxs)("div",{className:"footer__content container",children:[Object(b.jsx)(h,{}),Object(b.jsx)(v,{}),Object(b.jsx)(f,{})]})})})),k=(c(50),c(51),Object(n.memo)((function(e){var t=e.mixClass,c=e.children;return Object(b.jsx)("h2",{className:"page-title ".concat(t),children:c})}))),y=(c(52),a.a.createContext({cart:[],setCart:function(){},updateCart:function(){}})),C=function(e){var t=e.children,c=Object(n.useState)(JSON.parse(localStorage.getItem("cart")||"[]")),a=Object(l.a)(c,2),s=a[0],i=a[1],r=Object(n.useCallback)((function(e){i(e),localStorage.setItem("cart",JSON.stringify(e))}),[]),o=Object(n.useMemo)((function(){return{cart:s,setCart:i,updateCart:r}}),[s]);return Object(b.jsx)(y.Provider,{value:o,children:t})},w=(c(53),a.a.memo((function(){return Object(b.jsx)("div",{className:"modal",children:Object(b.jsxs)("div",{className:"modal__content",children:[Object(b.jsx)("div",{className:"modal__header"}),Object(b.jsx)("p",{className:"modal__text",children:"Thank you for purchase!"})]})})}))),S=(c(54),function(e){var t=e.total,c=void 0===t?0:t,a=e.itemsNum,s=void 0===a?0:a,i=Object(n.useContext)(y).updateCart,r=Object(n.useState)(!1),o=Object(l.a)(r,2),j=o[0],d=o[1];return Object(b.jsxs)("div",{className:" cart-total grid__item--tablet_1-12 grid__item--desktop_17-24",children:[Object(b.jsx)("div",{className:"cart-total__price",children:"$".concat(c)}),Object(b.jsx)("div",{className:"cart-total__items",children:"Total for ".concat(s," items")}),Object(b.jsx)("button",{type:"button",className:"cart-total__btn","aria-label":"Checkout button",onClick:function(){return d(!0),void setTimeout((function(){d(!1),i([]),window.location.replace("c")}),2e3)},children:"Checkout"}),j&&Object(b.jsx)(w,{})]})}),T=function(e){var t=e.children;return Object(b.jsx)("ul",{className:" cart__list grid__item--tablet_1-12 grid__item--desktop_1-16",children:t})},I=c(13),M=(c(55),function(e){var t=e.cartItem,c=t.quantity,a=t.product,s=a.id,i=a.name,o=a.price,j=a.image,d=Object(n.useContext)(y),u=d.cart,m=d.updateCart,O=Object(n.useState)(!1),_=Object(l.a)(O,2),h=_[0],p=_[1],x=Object(n.useState)(!1),f=Object(l.a)(x,2),g=f[0],v=f[1];Object(n.useEffect)((function(){1===c&&p(!0),c>1&&p(!1)}),[c]),Object(n.useEffect)((function(){10===c&&v(!0),c<10&&v(!1)}),[c]);return Object(b.jsxs)("article",{className:"cart-item",children:[Object(b.jsxs)("div",{className:"cart-item__container",children:[Object(b.jsx)("button",{type:"button",className:"cart-item__close-button","aria-label":"click to remove ".concat(i," from cart"),onClick:function(){return function(){var e=u.filter((function(e){return e.product.id!==s}));m(e)}()}}),Object(b.jsx)("img",{src:j,alt:i,className:"cart-item__img"}),Object(b.jsx)(r.b,{to:"/product/:productId",className:"cart-item__title",children:"".concat(i)})]}),Object(b.jsxs)("div",{className:"cart-item__container cart-item__container__bottom ",children:[Object(b.jsxs)("div",{className:"cart-item__counter",children:[Object(b.jsx)("button",{type:"button",className:"cart-item__counter-button-minus","aria-label":"decrease quantity by 1",onClick:function(){return function(){var e=u.map((function(e){return e.product.id===s?Object(I.a)(Object(I.a)({},e),{},{quantity:e.quantity-1}):e}));m(e)}()},disabled:h}),Object(b.jsx)("p",{className:"cart-item__counter-number",children:c}),Object(b.jsx)("button",{type:"button",className:"cart-item__counter-button-plus","aria-label":"increase quantity by 1",onClick:function(){return function(){var e=u.map((function(e){return e.product.id===s?Object(I.a)(Object(I.a)({},e),{},{quantity:e.quantity+1}):e}));m(e)}()},disabled:g})]}),Object(b.jsx)("p",{className:"cart-item__price",children:"$".concat(c*o)})]})]})}),A=(c(56),Object(n.memo)((function(e){var t=e.image,c=e.btnText;return Object(b.jsxs)("section",{className:"container empty-message",children:[Object(b.jsxs)("div",{className:"empty-message__inner",children:[Object(b.jsx)("img",{src:t,alt:"EmptySpace",className:"empty-message__img"}),Object(b.jsx)("p",{className:"text",children:"Oopps... It is empty in here."})]}),Object(b.jsx)(r.b,{to:"/phones",className:"empty-message__btn",children:c})]})}))),B=c.p+"static/media/emptyCart.1a79597b.jpg",P=function(){var e=Object(n.useContext)(y).cart,t=e.reduce((function(e,t){return e+t.quantity*t.product.price}),0),c=e.reduce((function(e,t){return e+t.quantity}),0);return Object(b.jsx)(b.Fragment,{children:c?Object(b.jsxs)("section",{className:"cart page__cart container grid",children:[Object(b.jsx)(T,{children:e.map((function(e){return Object(b.jsx)("li",{className:"cart__list-item",children:Object(b.jsx)(M,{cartItem:e})},e.product.itemId)}))}),Object(b.jsx)(S,{total:t,itemsNum:c})]}):Object(b.jsx)(A,{image:B,btnText:"Buy"})})},E=(c(57),c(58),Object(n.memo)((function(e){var t=e.isAlone,c=Object(o.m)();return Object(b.jsxs)("button",{type:"button","aria-label":"click to go back",className:d()("back-button",{"page__alone-back-button":t,"page__back-button":!t}),onClick:function(){return c(-1)},children:[Object(b.jsx)("div",{className:"back-button__icon"}),"Back"]})}))),q=function(e){var t=e.pageTitle;return Object(b.jsxs)("div",{className:"cart-page",children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(E,{isAlone:!0}),Object(b.jsx)(k,{mixClass:"cart-page__title",children:t})]}),Object(b.jsx)(P,{})]})},F=(c(59),c(60),Object(n.memo)((function(){var e=Object(o.k)(),t="",c=e.pathname.split("/").filter((function(e){return""!==e})).map((function(e){var c=e[0].toUpperCase()+e.slice(1);return t+="/".concat(e),Object(b.jsxs)(n.Fragment,{children:[Object(b.jsx)("div",{className:"breadcrumbs__icon breadcrumbs__icon--arrow"}),Object(b.jsx)(r.b,{"aria-label":"click to go to the ".concat(e," page"),className:"breadcrumbs__link",to:t,children:c})]},e)}));return Object(b.jsxs)("div",{className:"breadcrumbs page__breadcrumbs",children:[Object(b.jsx)(r.b,{"aria-label":"click to go to the home page",title:"Home page",to:"/",className:"breadcrumbs__link",children:Object(b.jsx)("div",{className:"breadcrumbs__icon--home breadcrumbs__icon"})}),Object(b.jsx)(b.Fragment,{children:c})]})}))),G=c.p+"static/media/empty-box.158a7fdc.png",L=function(e){var t=e.pageTitle;return Object(b.jsxs)("div",{className:"favourites-page",children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(F,{}),Object(b.jsx)(k,{mixClass:"favourites-page__title",children:t})]}),Object(b.jsx)("div",{children:"Amount"}),Object(b.jsx)("div",{children:"Favourites cards"}),Object(b.jsx)(A,{image:G,btnText:"Add"})]})},D=(c(61),c(62),c(63),function(e){var t=e.children;return Object(b.jsx)("h3",{className:"section-title",children:t})}),H=(c(64),function(e){var t=e.link,c=e.gridClasses,n=e.image,a=e.title,s=e.amount;return Object(b.jsx)("article",{className:"category-card ".concat(c),children:Object(b.jsxs)(r.b,{to:t,className:"category-card__link",children:[Object(b.jsx)("img",{className:"category-card__image",src:n,alt:"banner of ".concat(a," category")}),Object(b.jsx)("h4",{className:"category-card__title",children:a}),Object(b.jsx)("p",{className:"category-card__models-amount",children:"".concat(s," models")})]})})}),J=c.p+"static/media/category__phones.5745f0cd.jpg",$=c.p+"static/media/category__tablets.05b3d251.jpg",R=c.p+"static/media/category__accessories.3b9d45fd.jpg",U=function(){return Object(b.jsxs)("section",{className:"shop-by-category container",children:[Object(b.jsx)(D,{children:"Shop by category"}),Object(b.jsxs)("div",{className:"shop-by-category__categories grid",children:[Object(b.jsx)(H,{link:"/phones",gridClasses:"grid__item--tablet_1-4 grid__item--desktop_1-8",image:J,title:"Mobile phones",amount:95}),Object(b.jsx)(H,{link:"/tablets",gridClasses:"grid__item--tablet_5-8 grid__item--desktop_9-16",image:$,title:"Tablets",amount:24}),Object(b.jsx)(H,{link:"/accessories",gridClasses:"grid__item--tablet_9-12 grid__item--desktop_17-24",image:R,title:"Accessories",amount:100})]})]})},W=(c(65),function(){return Object(b.jsx)("h1",{className:"website-title",children:"Product Catalog"})}),z=c(31),K=c.n(z),Q=(c(81),function(e){var t=e.children,c={dots:!0,dotsClass:"slick-dots slick-thumb",infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,initialSlide:0,arrows:!0,autoplay:!0,draggable:!0,autoplaySpeed:3e3,customPaging:function(){return Object(b.jsx)("div",{children:Object(b.jsx)("div",{style:{visibility:"hidden"},children:"\u2022"})})},responsive:[{breakpoint:640,settings:{arrows:!1,slidesToShow:1,slidesToScroll:1,initialSlide:1}}]};return Object(b.jsx)(K.a,Object(I.a)(Object(I.a)({},c),{},{className:"grid__item grid__item--tablet_2-11 grid__item--desktop_2-23",children:t}))}),V=(c(82),c.p+"static/media/banner.330ccefb.jpeg"),X=function(){return Object(b.jsx)("section",{className:"banner grid",children:Object(b.jsxs)(Q,{children:[Object(b.jsx)("img",{className:"banner__image",src:V,alt:"BannerImg"}),Object(b.jsx)("img",{className:"banner__image",src:V,alt:"BannerImg"}),Object(b.jsx)("img",{className:"banner__image",src:V,alt:"BannerImg"})]})})},Y=c(95),Z=function(e){return Y.a.get("".concat("https://guarded-waters-77447.herokuapp.com").concat(e))},ee=c(12),te=(c(87),function(e){var t=e.phone,c=e.mixClass,a=t.image,s=t.name,i=t.price,r=t.fullPrice,o=t.screen,j=t.capacity,d=t.ram,u=Object(n.useContext)(y),m=u.cart,O=u.updateCart,_=Object(n.useState)(!1),h=Object(l.a)(_,2),p=h[0],x=h[1],f=m,g=m.some((function(e){return e.product.itemId===t.itemId}));Object(n.useEffect)((function(){g&&x(!0)}),[p]);return Object(b.jsxs)("article",{className:"card ".concat(c),children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{className:"card__img",src:a,alt:s}),Object(b.jsx)("h4",{className:"card__title",children:s})]}),Object(b.jsxs)("div",{className:"card__prices",children:[Object(b.jsx)("span",{className:"card__prices--price",children:"$".concat(i)}),Object(b.jsx)("span",{className:"card__prices--old-price",children:"$".concat(r)})]}),Object(b.jsxs)("div",{className:"card__specifications",children:[Object(b.jsxs)("div",{className:"card__specifications--feature",children:[Object(b.jsx)("span",{children:"Screen"}),Object(b.jsx)("span",{children:"Capacity"}),Object(b.jsx)("span",{children:"RAM"})]}),Object(b.jsxs)("div",{className:"card__specifications--feature",children:[Object(b.jsx)("span",{children:o}),Object(b.jsx)("span",{children:j}),Object(b.jsx)("span",{children:d})]})]}),Object(b.jsxs)("div",{className:"card__footer",children:[p?Object(b.jsx)("button",{type:"button",className:"card__button card__button--active",onClick:function(){var e=f.filter((function(e){return e.product.itemId!==t.itemId}));O(e),x(!1)},children:"Added to cart"}):Object(b.jsx)("button",{type:"button",className:"card__button",onClick:function(){var e;f.push({id:(e=f,e.length>0?Math.max.apply(Math,Object(ee.a)(e.map((function(e){return e.id}))))+1:0),quantity:1,product:t}),O(f),x(!0)},children:"Add to cart"}),Object(b.jsx)("div",{className:"card__footer--favorites"})]})]})});c(88);var ce=function(e){var t=function(e){return"undefined"!==typeof window&&window.matchMedia(e).matches},c=Object(n.useState)(t(e)),a=Object(l.a)(c,2),s=a[0],i=a[1];function r(){i(t(e))}return Object(n.useEffect)((function(){var t=window.matchMedia(e);return r(),t.addListener?t.addListener(r):t.addEventListener("change",r),function(){t.removeListener?t.removeListener(r):t.removeEventListener("change",r)}}),[e]),s};function ne(e){var t=e.onClick,c=e.isDisabled,n=d()("arrow arrow-left",{disabled:c});return Object(b.jsx)("div",{onClick:c?void 0:t,className:n})}function ae(e){var t=e.onClick,c=e.isDisabled,n=d()("arrow arrow-right",{disabled:c});return Object(b.jsx)("div",{onClick:c?void 0:t,className:n})}var se=function(e){var t=e.children,c=Object(n.useState)(0),s=Object(l.a)(c,2),i=s[0],r=s[1],o=a.a.Children.count(t),j=ce("(max-width: 1024px)"),d=ce("(max-width: 740px)"),u=0;u=ce("(max-width: 480px)")?1.5:d?2:j?2.5:4;var m={dots:!1,infinite:!1,speed:500,slidesToShow:4,slidesToScroll:1,initialSlide:0,nextArrow:Object(b.jsx)(ae,{isDisabled:i===o-u,onClick:function(){return r(i+1)}}),prevArrow:Object(b.jsx)(ne,{isDisabled:0===i,onClick:function(){return r(i-1)}}),responsive:[{breakpoint:1024,settings:{slidesToShow:2.5,slidesToScroll:1}},{breakpoint:740,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1.5,slidesToScroll:1}}],beforeChange:function(e,t){r(t)}};return Object(b.jsx)(K.a,Object(I.a)(Object(I.a)({},m),{},{className:"smartphone-slider",children:t}))};ne.defaultProps={onClick:function(){}},ae.defaultProps={onClick:function(){}};c(89);var ie=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){Z("/phones/new").then((function(e){return e.data})).then(a).catch((function(e){return window.console.log(e)}))}),[]),Object(b.jsxs)("section",{className:"brand-new-models container",children:[Object(b.jsx)(D,{children:"Brand new models"}),Object(b.jsx)(se,{children:c.map((function(e){return Object(b.jsx)(te,{mixClass:"card--slider",phone:e},e.id)}))})]})},re=(c(90),function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){Z("/phones/discount").then((function(e){return e.data})).then(a).catch((function(e){return window.console.log(e)}))}),[]),Object(b.jsxs)("section",{className:"hot-prices container",children:[Object(b.jsx)(D,{children:"Hot prices"}),Object(b.jsx)(se,{children:c.map((function(e){return Object(b.jsx)(te,{mixClass:"card--slider",phone:e},e.id)}))})]})}),oe=function(e){var t=e.pageTitle;return Object(b.jsxs)("div",{className:"home-page",children:[Object(b.jsx)(W,{}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(k,{mixClass:"home-page__title",children:t})}),Object(b.jsx)(X,{}),Object(b.jsx)(ie,{}),Object(b.jsx)(U,{}),Object(b.jsx)(re,{})]})},le=(c(91),c.p+"static/media/404.748a45b2.svg"),je=function(){return Object(b.jsx)("div",{className:"container not-found-page",children:Object(b.jsxs)("section",{className:"not-found-page__content",children:[Object(b.jsxs)("div",{className:"not-found-page__text",children:[Object(b.jsx)("h1",{className:"not-found-page__title",children:"Sorry, this page could not be found"}),Object(b.jsxs)("p",{className:"not-found-page__description",children:["The link is broken or the page no longer exists. ",Object(b.jsx)("br",{className:"not-found-page__break"}),"Go to the ",Object(b.jsx)(r.b,{className:"not-found-page__link",to:"/",children:"homepage"}),"."]})]}),Object(b.jsx)("img",{src:le,alt:"404 error",className:"not-found-page__image"})]})})},de=function(){var e=Object(o.o)().productId;return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(F,{}),Object(b.jsx)(E,{}),Object(b.jsx)("div",{children:"Section title component ".concat(e)})]})},be=(c(92),function(e){var t=e.pageTitle;return Object(b.jsxs)("div",{className:"product-page",children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(F,{}),Object(b.jsx)(k,{mixClass:"product-page__title",children:t})]}),Object(b.jsx)("div",{children:"Data amount"}),Object(b.jsx)("div",{children:"Sorting"}),Object(b.jsx)("div",{children:"Datalist"}),Object(b.jsx)("div",{children:"Pagination"}),Object(b.jsx)(te,{phone:{id:"1",category:"phones",phoneId:"apple-iphone-7-32gb-black",itemId:"apple-iphone-7-32gb-black",name:"Apple iPhone 7 32GB Black",fullPrice:400,price:375,screen:"4.7' IPS",capacity:"32GB",color:"black",ram:"2GB",year:2016,image:"img/phones/apple-iphone-7/black/00.jpg"},mixClass:""})]})}),ue=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(x,{}),Object(b.jsx)("main",{className:"page__main",children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/",element:Object(b.jsx)(oe,{pageTitle:"Welcome to Nice Gadgets store!"})}),Object(b.jsx)(o.a,{path:"phones",element:Object(b.jsx)(be,{pageTitle:"Mobile Phones"})}),Object(b.jsx)(o.a,{path:"tablets",element:Object(b.jsx)(be,{pageTitle:"Tablets"})}),Object(b.jsx)(o.a,{path:"accessories",element:Object(b.jsx)(be,{pageTitle:"Accessories"})}),Object(b.jsx)(o.a,{path:"/cart",element:Object(b.jsx)(q,{pageTitle:"Cart"})}),Object(b.jsx)(o.a,{path:"/favourites",element:Object(b.jsx)(L,{pageTitle:"Favourites"})}),Object(b.jsx)(o.a,{path:"product/:productId",element:Object(b.jsx)(de,{})}),Object(b.jsx)(o.a,{path:"*",element:Object(b.jsx)(je,{})})]})}),Object(b.jsx)(N,{})]})};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(C,{children:Object(b.jsx)(r.a,{children:Object(b.jsx)(ue,{})})})}),document.getElementById("root"))}]),[[93,1,2]]]);
//# sourceMappingURL=main.4d2bb339.chunk.js.map