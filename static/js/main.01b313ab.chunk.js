(window.webpackJsonpnoter=window.webpackJsonpnoter||[]).push([[0],{144:function(e,t,n){},147:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(24),l=n.n(c),o=(n(81),n(15)),i=n(18),u=n(2),s=n.n(u),p=n(4),f=n(14),m=function(e){return a.a.createElement("div",{className:"input-wrapper",style:e.customStyle},a.a.createElement("div",{className:"Input"},a.a.createElement("input",{type:"email",id:"input",className:"Input-text",value:e.value,placeholder:e.placeholder,onChange:e.onChange})))},g=function(e){var t=e.primary?"button primary":"button",n=e.href?e.href:"javascript".concat(":void(0);");return a.a.createElement("a",{className:t,onClick:function(){e.action(e.id)},href:n,style:e.customStyle},a.a.createElement("div",null,e.text))},d=n(6);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e){var t=e.justifyContent,n=e.style;return a.a.createElement("div",{className:"header-item",style:E({justifyContent:t},n)},e.children)},v=function(e){var t=e.size||1,n=window.innerWidth<=500?{padding:0,paddingRight:0,paddingLeft:0,paddingBottom:0}:e,r=n.padding,c=n.paddingRight,l=n.paddingLeft,o=n.paddingBottom,i="";switch(e.position){case"center":i="header-unlimited-position-center";break;case"right":i="header-unlimited-position-end";break;default:i=""}return a.a.createElement("div",{className:"header-zone-"+t+" header-unlimited-item "+i,style:{backgroundColor:e.color,padding:r,paddingRight:c,paddingLeft:l,paddingBottom:o}},e.children)},O=function(e){var t=e.shadow?" shadow":"",n=e.isFloat?" header-container-float":"",r=e.height||"10vh",c=e.backgroundColor;return a.a.createElement("div",{className:"header-container header-unlimited-item"+n+t,style:{height:r,backgroundColor:c}},e.children)};function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(e){var t=e.height,n=e.customStyle;return a.a.createElement("div",{className:"card-container",style:w({height:t},n)},e.children)},x=function(e){return e.collections.map((function(e){return a.a.createElement(o.b,{to:"/note/"+e._id,style:{color:"black",textDecoration:"none"}},a.a.createElement(j,{height:"100px"},a.a.createElement("div",{style:{width:"100%",height:"100%",padding:"24px",overflow:"hidden",display:"flex",justifyContent:"left",alignItems:"center"}},a.a.createElement("p",{style:{fontSize:"24px"}}," ",e.name," "))))}))},C=n(62),P=n.n(C),k=n(17),N=n(10),L=n.n(N),S=window._env_?window._env_.BACKEND:"https://api.backend.kaptuer.com/noter",D=function(e){e?L.a.defaults.headers.common.Authorization="Bearer ".concat(e):delete L.a.defaults.headers.common.Authorization},R=n(73),_={DOMAIN:Object({NODE_ENV:"production",PUBLIC_URL:""}).DOMAIN||".kaptuer.com"},T=new R.a,z="jwtToken",I=_.DOMAIN,B=function(){return T.get(z)},A=function(){return T.remove(z,{path:"/",domain:I})},M=function(){return!!T.get(z)},U=function(){D(),A()},G={logout:function(){U()}};(function(){var e=B();D(e)})();var V=G,H=function(e){e({type:"LOGOUT"}),window.location.href="https://kaptuer.com"},F=function(){return function(){var e=Object(p.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.logout();case 2:H(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},W=function(e){var t=Object(r.useState)(!1),n=Object(f.a)(t,2),c=n[0],l=n[1],o=Object(r.useState)(""),i=Object(f.a)(o,2),u=i[0],s=i[1];return a.a.createElement("div",null,a.a.createElement(P.a,{isOpen:c,onRequestClose:function(){return l(!1)},contentLabel:"Create Collection",style:{overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:1e3,backgroundColor:"rgba(0, 0, 0, 0.75)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}}},a.a.createElement("div",{style:{display:"grid",gridGap:"12px",gridTemplateRows:"2fr 2fr 1fr"}},a.a.createElement("h1",null,"Create Collection"),a.a.createElement(m,{value:u,placeholder:"Collection name",onChange:function(e){var t=e.target.value;return s(t)}}),a.a.createElement(g,{primary:!0,text:"Create",action:function(){return e.action&&e.action(u),l(!1),void s("")}}))),a.a.createElement("div",{className:"empty-card",style:{width:"100%",height:"100%"},onClick:function(){l(!0)}},a.a.createElement("h3",null,"Create new Collection")))},J={getCollections:function(){return function(){var e=Object(p.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get(S+"/collection");case 2:return n=e.sent,t({type:"GET_COLLECTION",payload:n.data}),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},createCollection:function(e){return function(){var t=Object(p.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.a.post(S+"/collection",{name:e});case 2:return r=t.sent,n({type:"CREATE_COLLECTION",payload:r.data}),t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},logoutUser:F},$=Object(k.b)((function(e){return{user:e.user.item,collections:e.collection.items}}),J)((function(e){Object(r.useEffect)((function(){e.getCollections()}),[]);var t=function(){var t=Object(p.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.createCollection(n);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement(O,{height:"80px",backgroundColor:"#151b26",isFloat:!0,shadow:!0},a.a.createElement(v,{paddingLeft:"50px"},a.a.createElement(y,{justifyContent:"start"},a.a.createElement("h1",null,"Noter"))),a.a.createElement(v,{position:"right",size:4,paddingRight:"50px"},a.a.createElement(y,{justifyContent:"start"},a.a.createElement(o.b,{to:"/",onClick:function(){e.logoutUser(),e.history.push("/")},style:{textDecoration:"none",color:"white"}},"logout")))),a.a.createElement("div",{style:{padding:"8% 10% 0px",minHeight:"100vh",backgroundColor:"#f6f8f9"}},a.a.createElement("h1",null,"Collections"),a.a.createElement("div",{style:{display:"grid",gridGap:"28px",gridTemplateColumns:"1fr 1fr 1fr 1fr"}},a.a.createElement(W,{action:t}),a.a.createElement(x,{collections:e.collections}))))})),q=n(9),K=(n(113),n(21));function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Y=a.a.createElement("g",null),Z=a.a.createElement("g",null),ee=a.a.createElement("g",null),te=a.a.createElement("g",null),ne=a.a.createElement("g",null),re=a.a.createElement("g",null),ae=a.a.createElement("g",null),ce=a.a.createElement("g",null),le=a.a.createElement("g",null),oe=a.a.createElement("g",null),ie=a.a.createElement("g",null),ue=a.a.createElement("g",null),se=a.a.createElement("g",null),pe=a.a.createElement("g",null),fe=a.a.createElement("g",null),me=function(e){var t=e.svgRef,n=e.title,r=X(e,["svgRef","title"]);return a.a.createElement("svg",Q({id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 426.667 426.667",style:{enableBackground:"new 0 0 426.667 426.667"},xmlSpace:"preserve",ref:t},r),a.a.createElement("title",null,n),a.a.createElement("polygon",{style:{fill:"#FAC917"},points:"213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91  81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "}),Y,Z,ee,te,ne,re,ae,ce,le,oe,ie,ue,se,pe,fe)},ge=a.a.forwardRef((function(e,t){return a.a.createElement(me,Q({svgRef:t},e))}));n.p;function de(){return(de=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function he(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Ee=a.a.createElement("path",{d:"M11.287,54.548c-0.207,0-0.414-0.064-0.588-0.191c-0.308-0.224-0.462-0.603-0.397-0.978l3.091-18.018L0.302,22.602 c-0.272-0.266-0.37-0.663-0.253-1.024c0.118-0.362,0.431-0.626,0.808-0.681l18.09-2.629l8.091-16.393 c0.168-0.342,0.516-0.558,0.896-0.558l0,0c0.381,0,0.729,0.216,0.896,0.558l8.09,16.393l18.091,2.629 c0.377,0.055,0.689,0.318,0.808,0.681c0.117,0.361,0.02,0.759-0.253,1.024L42.475,35.363l3.09,18.017 c0.064,0.375-0.09,0.754-0.397,0.978c-0.308,0.226-0.717,0.255-1.054,0.076l-16.18-8.506l-16.182,8.506 C11.606,54.51,11.446,54.548,11.287,54.548z M3.149,22.584l12.016,11.713c0.235,0.229,0.343,0.561,0.287,0.885L12.615,51.72 l14.854-7.808c0.291-0.154,0.638-0.154,0.931,0l14.852,7.808l-2.836-16.538c-0.056-0.324,0.052-0.655,0.287-0.885l12.016-11.713 l-16.605-2.413c-0.326-0.047-0.607-0.252-0.753-0.547L27.934,4.578l-7.427,15.047c-0.146,0.295-0.427,0.5-0.753,0.547L3.149,22.584z "}),ye=a.a.createElement("g",null),ve=a.a.createElement("g",null),Oe=a.a.createElement("g",null),be=a.a.createElement("g",null),we=a.a.createElement("g",null),je=a.a.createElement("g",null),xe=a.a.createElement("g",null),Ce=a.a.createElement("g",null),Pe=a.a.createElement("g",null),ke=a.a.createElement("g",null),Ne=a.a.createElement("g",null),Le=a.a.createElement("g",null),Se=a.a.createElement("g",null),De=a.a.createElement("g",null),Re=a.a.createElement("g",null),_e=function(e){var t=e.svgRef,n=e.title,r=he(e,["svgRef","title"]);return a.a.createElement("svg",de({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 55.867 55.867",style:{enableBackground:"new 0 0 55.867 55.867"},xmlSpace:"preserve",ref:t},r),a.a.createElement("title",null,n),Ee,ye,ve,Oe,be,we,je,xe,Ce,Pe,ke,Ne,Le,Se,De,Re)},Te=a.a.forwardRef((function(e,t){return a.a.createElement(_e,de({svgRef:t},e))})),ze=(n.p,function(e){var t=e.isPress,n=Object(K.a)(e,["isPress"]);return a.a.createElement("div",Object.assign({},n,{style:{width:"28px",height:"28px",cursor:"pointer",margin:"0 12px 0 12px"}}),t?a.a.createElement(ge,null):a.a.createElement(Te,null))});function Ie(){return(Ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Be(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Ae=a.a.createElement("g",null,a.a.createElement("path",{d:"M52.963,21.297c-0.068-0.329-0.297-0.603-0.609-0.727c-2.752-1.097-5.67-1.653-8.673-1.653  c-4.681,0-8.293,1.338-9.688,1.942L19.114,8.2c0.52-4.568-1.944-7.692-2.054-7.828C16.881,0.151,16.618,0.016,16.335,0  c-0.282-0.006-0.561,0.091-0.761,0.292L0.32,15.546c-0.202,0.201-0.308,0.479-0.291,0.765c0.016,0.284,0.153,0.549,0.376,0.726  c2.181,1.73,4.843,2.094,6.691,2.094c0.412,0,0.764-0.019,1.033-0.04l12.722,14.954c-0.868,2.23-3.52,10.27-0.307,18.337  c0.124,0.313,0.397,0.541,0.727,0.609c0.067,0.014,0.135,0.021,0.202,0.021c0.263,0,0.518-0.104,0.707-0.293l14.57-14.57  l13.57,13.57c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414l-13.57-13.57  l14.527-14.528C52.929,21.969,53.031,21.627,52.963,21.297z","data-original":"#000000",className:"active-path","data-old_color":"#000000",fill:"#FF0606"})),Me=function(e){var t=e.svgRef,n=e.title,r=Be(e,["svgRef","title"]);return a.a.createElement("svg",Ie({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 53.011 53.011",style:{enableBackground:"new 0 0 53.011 53.011"},xmlSpace:"preserve",width:"512px",height:"512px",className:"",ref:t},r),a.a.createElement("title",null,n),Ae)},Ue=a.a.forwardRef((function(e,t){return a.a.createElement(Me,Ie({svgRef:t},e))}));n.p;function Ge(){return(Ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ve(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var He=a.a.createElement("path",{d:"M52.963,21.297c-0.068-0.329-0.297-0.603-0.609-0.727c-8.574-3.416-16.173-0.665-18.361,0.288L19.114,8.2 c0.52-4.568-1.944-7.692-2.054-7.828C16.881,0.151,16.618,0.016,16.335,0c-0.282-0.006-0.561,0.091-0.761,0.292L0.32,15.546 c-0.202,0.201-0.308,0.479-0.291,0.765c0.016,0.284,0.153,0.549,0.376,0.726c2.775,2.202,6.349,2.167,7.726,2.055l12.721,14.953 c-0.868,2.23-3.52,10.27-0.307,18.337c0.124,0.313,0.397,0.541,0.727,0.609c0.067,0.014,0.135,0.021,0.202,0.021 c0.263,0,0.518-0.104,0.707-0.293l14.57-14.57l13.57,13.57c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293 c0.391-0.391,0.391-1.023,0-1.414l-13.57-13.57l14.527-14.528C52.929,21.969,53.031,21.627,52.963,21.297z M35.314,36.755 L21.89,50.18c-2.437-8.005,0.993-15.827,1.03-15.909c0.158-0.353,0.1-0.765-0.15-1.059L9.31,17.39 c-0.191-0.225-0.473-0.352-0.764-0.352c-0.051,0-0.103,0.004-0.154,0.013c-0.036,0.006-3.173,0.472-5.794-0.955l13.5-13.5 c0.604,1.156,1.391,3.26,0.964,5.848C17.004,8.79,17.133,9.141,17.4,9.368l15.785,13.43c0.309,0.262,0.748,0.309,1.105,0.128 c0.077-0.04,7.378-3.695,15.869-1.017L35.314,36.755z"}),Fe=a.a.createElement("g",null),We=a.a.createElement("g",null),Je=a.a.createElement("g",null),$e=a.a.createElement("g",null),qe=a.a.createElement("g",null),Ke=a.a.createElement("g",null),Qe=a.a.createElement("g",null),Xe=a.a.createElement("g",null),Ye=a.a.createElement("g",null),Ze=a.a.createElement("g",null),et=a.a.createElement("g",null),tt=a.a.createElement("g",null),nt=a.a.createElement("g",null),rt=a.a.createElement("g",null),at=a.a.createElement("g",null),ct=function(e){var t=e.svgRef,n=e.title,r=Ve(e,["svgRef","title"]);return a.a.createElement("svg",Ge({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 53.011 53.011",style:{enableBackground:"new 0 0 53.011 53.011"},xmlSpace:"preserve",ref:t},r),a.a.createElement("title",null,n),He,Fe,We,Je,$e,qe,Ke,Qe,Xe,Ye,Ze,et,tt,nt,rt,at)},lt=a.a.forwardRef((function(e,t){return a.a.createElement(ct,Ge({svgRef:t},e))})),ot=(n.p,function(e){var t=e.isPress,n=Object(K.a)(e,["isPress"]);return a.a.createElement("div",Object.assign({},n,{style:{width:"28px",height:"28px",cursor:"pointer"}}),t?a.a.createElement(Ue,{style:{width:"28px",height:"28px"}}):a.a.createElement(lt,null))});function it(){return(it=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ut(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var st=a.a.createElement("path",{d:"m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"}),pt=a.a.createElement("path",{d:"m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"}),ft=a.a.createElement("path",{d:"m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0"}),mt=a.a.createElement("path",{d:"m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"}),gt=function(e){var t=e.svgRef,n=e.title,r=ut(e,["svgRef","title"]);return a.a.createElement("svg",it({height:"427pt",viewBox:"-40 0 427 427.00131",width:"427pt",ref:t},r),a.a.createElement("title",null,n),st,pt,ft,mt)},dt=a.a.forwardRef((function(e,t){return a.a.createElement(gt,it({svgRef:t},e))})),ht=(n.p,n(65));function Et(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function yt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Et(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Et(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var vt=function(e){var t=function(e){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)};return e.notes.map((function(n,r){return t(n.content)&&(n.content.includes("http")||(n.content="http://"+n.content)),a.a.createElement("div",{key:r},t(n.content)?a.a.createElement("div",{style:{marginTop:"24px",position:"relative"}},a.a.createElement("div",{style:{position:"absolute",right:"20px",top:"12px",zIndex:"100",display:"flex"}},a.a.createElement(ot,{isPress:n.pin,onClick:function(){e.update(yt({},n,{pin:!n.pin}))}}),a.a.createElement(ze,{isPress:n.star,onClick:function(){e.update(yt({},n,{star:!n.star}))}}),a.a.createElement(dt,{onClick:function(){e.deleteNote(n)},style:{width:"28px",height:"28px",cursor:"pointer"}})),a.a.createElement(ht.a,{style:{maxWidth:"100%"},url:n.content})):a.a.createElement(j,{customStyle:{marginTop:"24px",padding:"24px",position:"relative"}},a.a.createElement("div",{style:{position:"absolute",top:"12px",right:"20px",display:"flex"}},a.a.createElement(ot,{isPress:n.pin,onClick:function(){e.update(yt({},n,{pin:!n.pin}))}}),a.a.createElement(ze,{isPress:n.star,onClick:function(){e.update(yt({},n,{star:!n.star}))}}),a.a.createElement(dt,{onClick:function(){e.deleteNote(n)},style:{width:"28px",height:"28px",cursor:"pointer"}})),a.a.createElement("p",{style:{paddingRight:"20%"}},n.content)))}))};function Ot(){return(Ot=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function bt(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var wt=a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("path",{d:"M452,40h-24V0h-40v40H124V0H84v40H60C26.916,40,0,66.916,0,100v352c0,33.084,26.916,60,60,60h392 c33.084,0,60-26.916,60-60V100C512,66.916,485.084,40,452,40z M472,452c0,11.028-8.972,20-20,20H60c-11.028,0-20-8.972-20-20V188 h432V452z M472,148H40v-48c0-11.028,8.972-20,20-20h24v40h40V80h264v40h40V80h24c11.028,0,20,8.972,20,20V148z"}))),jt=a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("rect",{x:76,y:230,width:40,height:40}))),xt=a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("rect",{x:156,y:230,width:40,height:40}))),Ct=a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("rect",{x:236,y:230,width:40,height:40}))),Pt=a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("rect",{x:316,y:230,width:40,height:40}))),kt=a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("rect",{x:396,y:230,width:40,height:40}))),Nt=a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("rect",{x:76,y:310,width:40,height:40}))),Lt=a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("rect",{x:156,y:310,width:40,height:40}))),St=a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("rect",{x:236,y:310,width:40,height:40}))),Dt=a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("rect",{x:316,y:310,width:40,height:40}))),Rt=a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("rect",{x:76,y:390,width:40,height:40}))),_t=a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("rect",{x:156,y:390,width:40,height:40}))),Tt=a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("rect",{x:236,y:390,width:40,height:40}))),zt=a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("rect",{x:316,y:390,width:40,height:40}))),It=a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("rect",{x:396,y:310,width:40,height:40}))),Bt=a.a.createElement("g",null),At=a.a.createElement("g",null),Mt=a.a.createElement("g",null),Ut=a.a.createElement("g",null),Gt=a.a.createElement("g",null),Vt=a.a.createElement("g",null),Ht=a.a.createElement("g",null),Ft=a.a.createElement("g",null),Wt=a.a.createElement("g",null),Jt=a.a.createElement("g",null),$t=a.a.createElement("g",null),qt=a.a.createElement("g",null),Kt=a.a.createElement("g",null),Qt=a.a.createElement("g",null),Xt=a.a.createElement("g",null),Yt=function(e){var t=e.svgRef,n=e.title,r=bt(e,["svgRef","title"]);return a.a.createElement("svg",Ot({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:t},r),a.a.createElement("title",null,n),wt,jt,xt,Ct,Pt,kt,Nt,Lt,St,Dt,Rt,_t,Tt,zt,It,Bt,At,Mt,Ut,Gt,Vt,Ht,Ft,Wt,Jt,$t,qt,Kt,Qt,Xt)},Zt=a.a.forwardRef((function(e,t){return a.a.createElement(Yt,Ot({svgRef:t},e))})),en=(n.p,function(e){var t=e.isPress,n=Object(K.a)(e,["isPress"]);return a.a.createElement("div",Object.assign({},n,{style:{width:"28px",height:"28px",cursor:"pointer"}}),t?a.a.createElement(Zt,{fill:"green"}):a.a.createElement(Zt,null))}),tn=n(69),nn={createNote:function(e,t){return function(){var n=Object(p.a)(s.a.mark((function n(r){var a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,L.a.post(S+"/note",{content:t,collectionNote:e});case 2:return a=n.sent,r({type:"CREATE_NOTE",payload:a.data}),n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},getNotes:function(e){return function(){var t=Object(p.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.a.get(S+"/note?collectionNote=".concat(e));case 2:return r=t.sent,n({type:"GET_NOTE",payload:r.data}),t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},logoutUser:F,updateNote:function(e,t){return function(){var e=Object(p.a)(s.a.mark((function e(n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.put(S+"/note/".concat(t._id),t);case 2:return r=e.sent,n({type:"UPDATE_NOTE",payload:r.data}),e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},deleteNote:function(e,t){return function(){var e=Object(p.a)(s.a.mark((function e(n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.delete(S+"/note/".concat(t._id),t);case 2:return r=e.sent,n({type:"DELETE_NOTE",payload:r.data}),e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},deleteCollection:function(e){return function(){var t=Object(p.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.a.delete(S+"/collection/".concat(e));case 2:return r=t.sent,n({type:"DELETE_COLLECTION",payload:r.data}),t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},rn={CollectionPage:$,NotePage:Object(k.b)((function(e){return{user:e.user.item,notes:e.note.items}}),nn)((function(e){Object(r.useEffect)((function(){e.getNotes(e.match.params.id)}),[]);var t=Object(r.useState)(""),n=Object(f.a)(t,2),c=n[0],l=n[1],i=Object(r.useState)(!1),u=Object(f.a)(i,2),m=u[0],g=u[1],d=Object(r.useState)(!1),h=Object(f.a)(d,2),E=h[0],b=h[1],w=e.notes.filter((function(e){return!m||e.star})),x=w.filter((function(e){return e.pin}));w=[].concat(Object(q.a)(x),Object(q.a)(w.filter((function(e){return!e.pin})))),E&&(w=tn.sortBy(w,["created_at"]));var C=function(){var t=Object(p.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.createNote(e.match.params.id,c);case 2:l("");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement(O,{height:"80px",backgroundColor:"#151b26",isFloat:!0,shadow:!0},a.a.createElement(v,{paddingLeft:"50px"},a.a.createElement(y,{justifyContent:"start"},a.a.createElement("h1",null,"Noter"))),a.a.createElement(v,{position:"right",size:4,paddingRight:"50px"},a.a.createElement(y,{justifyContent:"start"},a.a.createElement(o.b,{to:"/",style:{textDecoration:"none",color:"white",paddingRight:"30px"}},"collections")),a.a.createElement(y,{justifyContent:"start"},a.a.createElement(o.b,{to:"/",onClick:function(){e.logoutUser(),e.history.push("/")},style:{textDecoration:"none",color:"white"}},"logout")))),a.a.createElement("div",{style:{padding:"8% 10% 0px",minHeight:"100vh",backgroundColor:"#f6f8f9"}},a.a.createElement("h1",null,"Notes"),a.a.createElement("p",{style:{display:"flex",justifyContent:"space-between"}},a.a.createElement("div",{style:{display:"flex"}},a.a.createElement("div",null,"sort by "),a.a.createElement(ze,{onClick:function(){g(!m)},isPress:m}),a.a.createElement(en,{onClick:function(){b(!E)},isPress:E})),a.a.createElement("div",null,a.a.createElement(dt,{onClick:function(){e.deleteCollection(e.match.params.id),e.history.goBack()},style:{width:"28px",height:"28px",cursor:"pointer"}}))),a.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},a.a.createElement(j,{customStyle:{width:"100%",minHeight:"180px",padding:"0px 24px 12px"}},a.a.createElement("p",{style:{fontSize:"24px"}},"Take a Note"),a.a.createElement("textarea",{placeholder:"write your note here...",value:c,onChange:function(e){var t=e.target.value;return l(t)}}),a.a.createElement("div",{style:{height:"45px",display:"flex",justifyContent:"flex-end",marginTop:"12px"}},a.a.createElement("div",{className:"note-button",onClick:C},"Note"))),a.a.createElement("div",{style:{margin:"24px 0"}},a.a.createElement(vt,{deleteNote:function(t){return e.deleteNote(e.match.params.id,t)},notes:w,update:function(t){e.updateNote(e.match.params.id,t)}})))))}))},an=(n(144),n(29)),cn=function(){an.a.initialize("UA-150820819-1")},ln=function(){an.a.pageview(window.location.pathname+window.location.search)},on=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";e&&t&&an.a.event({category:e,action:t})};var un={try_login:function(){return function(){var e=Object(p.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:M()?t({type:"LOGIN"}):H(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},sn=Object(k.b)((function(e){return{user:e.user}}),un)((function(e){return Object(r.useEffect)((function(){cn(),ln(),e.try_login()}),[]),e.user.isLogin||(on("appPage","not login"),window.location.href="https://kaptuer.com"),a.a.createElement("div",{className:"App"},a.a.createElement(o.a,null,a.a.createElement(i.a,{exact:!0,path:"/",component:rn.CollectionPage}),a.a.createElement(i.a,{path:"/note/:id",component:rn.NotePage})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pn=n(12);function fn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function mn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?fn(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fn(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var gn={items:[]};function dn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function hn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?dn(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dn(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var En={items:[]};function yn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function vn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?yn(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yn(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var On={id:"",name:"",email:"",provider_type:"",isLogin:M()},bn=Object(pn.c)({note:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:gn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_NOTE":return mn({},e,{items:t.payload});case"CREATE_NOTE":return mn({},e,{items:[t.payload].concat(Object(q.a)(e.items))});case"UPDATE_NOTE":var n=[t.payload],r=e.items.map((function(e){return n.find((function(t){return t._id===e._id}))||e}));return mn({},e,{items:r});case"DELETE_NOTE":return mn({},e,{items:Object(q.a)(e.items.filter((function(e){return e._id!==t.payload._id})))});default:return e}},collection:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:En,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_COLLECTION":return hn({},e,{items:t.payload});case"CREATE_COLLECTION":return hn({},e,{items:[].concat(Object(q.a)(e.items),[t.payload])});case"DELETE_COLLECTION":return hn({},e,{items:Object(q.a)(e.items.filter((function(e){return e.id!==t.payload.id})))});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:On,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return vn({},e,{isLogin:!0});case"LOGOUT":return vn({},e,{name:"",username:"",provider:"",isLogin:!1});default:return e}}}),wn=n(70),jn=n(42),xn=n(71),Cn={key:"root",storage:n.n(xn).a},Pn=Object(jn.a)(Cn,bn),kn=[wn.a],Nn=Object(pn.d)(Pn,{},pn.a.apply(void 0,kn)),Ln=Object(jn.b)(Nn),Sn=n(72),Dn={store:Nn,persistor:Ln},Rn=Dn.store,_n=Dn.persistor;l.a.render(a.a.createElement(k.a,{store:Rn},a.a.createElement(Sn.a,{loading:null,persistor:_n},a.a.createElement(sn,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},76:function(e,t,n){e.exports=n(147)},81:function(e,t,n){}},[[76,1,2]]]);
//# sourceMappingURL=main.01b313ab.chunk.js.map