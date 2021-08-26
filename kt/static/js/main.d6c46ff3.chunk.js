(this["webpackJsonpair-conditioner"]=this["webpackJsonpair-conditioner"]||[]).push([[0],{103:function(e,t,r){},104:function(e,t,r){},110:function(e,t,r){},113:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(33),c=r.n(o),i=(r(103),r(104),r(137)),s=r(115),l=r(91),d=r(1);function u(e){var t=e.children,r=Object(i.a)("(prefers-color-scheme: dark)")?"dark":"light",a=Object(n.useMemo)((function(){return Object(l.a)({palette:{mode:r}})}),[r]);return Object(d.jsx)(s.a,{theme:a,children:t})}var j=r(148),b=r(90),h=r(13),m=r(149),g=r(140),f=r(143),x=r(84),p=r.n(x),O=Object(f.a)((function(e){return{root:{margin:e.spacing(3,0),display:"flex",justifyContent:"center",alignItems:"center"}}}));function v(){var e=O();return Object(d.jsxs)(m.a,{align:"center",className:e.root,color:"textSecondary",children:[Object(d.jsx)(p.a,{}),"Tip: \u4e3a\u4f60\u7684\u590f\u65e5\u5e26\u53bb\u6e05\u51c9\uff01"]})}var w=r(32),y=r(141),k=r(150),S=r(88),C=r.n(S),I=r(89),N=r.n(I),B=r(86),L=r.n(B),T=r(85),E=r.n(T),R=r(87),W=r.n(R),F=r(60),J=r(52),M=function(){return Object(J.b)()},P=J.c,Y=r(45),A=Object(Y.b)({name:"toast",initialState:{open:!1,message:""},reducers:{setMessage:function(e,t){e.message=t.payload},setOpen:function(e,t){e.open=t.payload}}}),q=A.actions,D=q.setMessage,K=q.setOpen,Q=A.reducer,U={status:"ac-status",mode:"ac-mode",temperature:"ac-temperature"},V={status:!1,mode:localStorage.getItem(U.mode)||"cold",temperature:parseInt(localStorage.getItem(U.temperature)||"")||20},z=Object(Y.b)({name:"ac",initialState:V,reducers:{setStatus:function(e,t){e.status=t.payload},setTemperature:function(e,t){e.temperature=t.payload},increment:function(e){e.temperature+=1,localStorage.setItem(U.temperature,e.temperature.toString())},decrement:function(e){e.temperature-=1,localStorage.setItem(U.temperature,e.temperature.toString())},setMode:function(e,t){e.mode=t.payload,localStorage.setItem(U.mode,e.mode)},toggleStatus:function(e){e.status=!e.status,localStorage.setItem(U.status,e.status.toString())}}}),G=function(e){return e.ac.temperature},H=z.actions,X=H.setTemperature,$=H.increment,_=H.decrement,Z=H.setMode,ee=H.toggleStatus,te=H.setStatus,re=z.reducer;function ne(e){return"https://cdn.jsdelivr.net/gh/YunYouJun/air-conditioner/public"+e}var ae,oe,ce=Object(f.a)((function(e){return{margin:{margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)}}}));function ie(e){return Object(d.jsx)(k.a,Object(w.a)(Object(w.a)({},e),{},{onClick:function(){!function(){var e=document.getElementById("di");e&&e.play()}(),e.onClick()}}))}function se(){var e=document.getElementById("ac-work");e.load(),e.play(),setTimeout((function(){!function(){var e=document.getElementById("air-extractor-fan");e.load(),e.play(),ae=setTimeout((function(){oe=setInterval((function(){e.currentTime=2}),56e3)}),2e3)}()}),8e3)}var le=Object(l.a)({palette:{primary:F.a}}),de=ne("/assets/audio/di.mp3"),ue=ne("/assets/audio/ac-work.mp3"),je=ne("/assets/audio/air-extractor-fan.mp3");function be(){var e=ce(),t=P((function(e){return e.ac})),r=M();return Object(d.jsxs)(g.a,{my:4,display:"flex",flexDirection:"column",alignItems:"center",children:[Object(d.jsx)("audio",{id:"di",src:de,preload:"auto"}),Object(d.jsx)("audio",{id:"ac-work",src:ue,preload:"auto"}),Object(d.jsx)("audio",{id:"air-extractor-fan",src:je,preload:"auto"}),Object(d.jsxs)("div",{children:[" ",Object(d.jsx)(ie,{color:"primary","aria-label":"cold",className:e.margin,onClick:function(){r(Z("cold"))},children:Object(d.jsx)(E.a,{})}),Object(d.jsx)(y.a,{theme:le,children:Object(d.jsx)(ie,{color:t.status?"secondary":"primary","aria-label":"add",className:e.margin,onClick:function(){!function(e,t){if(e){document.getElementById("ac-work").load();var r=document.getElementById("air-extractor-fan");ae&&clearTimeout(ae),oe&&clearInterval(oe),r.currentTime=58}else se();t(ee())}(t.status,r)},style:{color:"white"},children:Object(d.jsx)(L.a,{})})}),Object(d.jsx)(ie,{"aria-label":"hot",className:e.margin,style:{backgroundColor:"orange",color:"white"},onClick:function(){r(Z("hot"))},children:Object(d.jsx)(W.a,{})})]}),Object(d.jsx)(ie,{"aria-label":"add",className:e.margin,onClick:function(){r((function(e,t){G(t())<31?e($()):(e(D("\u5df2\u7ecf\u662f\u6700\u5927\u6e29\u5ea6\u5566\uff01")),e(K(!0)))}))},children:Object(d.jsx)(C.a,{})}),Object(d.jsx)(ie,{"aria-label":"reduce",className:e.margin,onClick:function(){r((function(e,t){G(t())>16?e(_()):(e(D("\u5df2\u7ecf\u662f\u6700\u5c0f\u6e29\u5ea6\u5566\uff01")),e(K(!0)))}))},children:Object(d.jsx)(N.a,{})})]})}var he=r(14),me=r(147),ge=r(142),fe="static/media/logo.4cbbb3c8.svg",xe=r(38),pe=(r(110),"#e0e0e0"),Oe="#cccccc",ve="#bbbbbb",we=Object(f.a)((function(e){return{acBorder:{borderRadius:10,borderBottomLeftRadius:20,borderBottomRightRadius:20},acDisplay:{textShadow:"0px 0px 2px rgba(0, 0, 0, 0.3)"},acLogo:{width:12},acStatus:{backgroundColor:function(e){return e.backgroundColor||"transparent"}},energyLabel:{backgroundColor:"#4ea5f5"}}}));function ye(e){return Object(d.jsx)(g.a,Object(w.a)({bgcolor:"background.paper",height:150,border:1,borderColor:pe,borderRadius:10,boxShadow:3,position:"relative"},e))}function ke(){var e=P(G);return Object(d.jsxs)(m.a,{variant:"h4",align:"center",children:[Object(d.jsx)("span",{className:"font-digit ac-temperature",children:e}),Object(d.jsx)("small",{className:"font-digit",children:"\xb0C"})]})}var Se=a.a.forwardRef((function(e,t){return Object(d.jsxs)(g.a,Object(w.a)(Object(w.a)({},e),{},{ref:t,position:"absolute",top:25,right:30,color:Oe,children:[Object(d.jsxs)(m.a,{align:"left",variant:"subtitle2",children:[Object(d.jsx)("span",{children:"cold"===e.mode?"\u2744":"\u2600\ufe0f"}),"\ufe0f\ufe0f"]}),Object(d.jsx)(ke,{})]}))}));function Ce(e){return Object(d.jsx)(g.a,{textAlign:"center",mt:12,children:Object(d.jsx)("a",{href:xe.c.url,title:xe.b,target:"_blank",rel:"noreferrer noopener",children:Object(d.jsx)("img",{className:e.className,src:fe,alt:"logo"})})})}function Ie(){return Object(d.jsx)(g.a,{mt:1,border:1,borderColor:pe})}function Ne(e){var t={backgroundColor:e.status?"#38F709":pe},r=we(t);return Object(d.jsx)(g.a,{className:r.acStatus,position:"absolute",height:4,width:4,borderRadius:"50%",top:130,right:10})}function Be(e,t,r,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=Object(he.a)(new Array(e).keys()),c=o.map((function(e){return Object(d.jsx)(g.a,{mx:n,my:a,width:r,height:r,borderRadius:"50%",bgcolor:t},e)}));return Object(d.jsx)(g.a,{display:"flex",justifyContent:"center",children:c})}function Le(e){return Object(d.jsxs)(g.a,{className:e.className,position:"absolute",top:10,left:10,height:70,width:50,borderRadius:2,p:.5,children:[Be(6,"white",4,.25),Object(d.jsxs)(g.a,{my:.5,px:1,py:.25,height:28,width:"100%",bgcolor:"background.paper",children:[Object(d.jsxs)(me.a,{container:!0,children:[Object(d.jsx)(g.a,{bgcolor:"green",height:3,width:"40%"}),Object(d.jsx)(g.a,{height:3,marginLeft:"40%",style:{borderTop:1.5,borderRight:2,borderBottom:1.5,borderLeft:0,borderTopColor:"transparent",borderRightColor:"green",borderBottomColor:"transparent",borderLeftColor:"transparent",borderStyle:"solid"}}),Object(d.jsx)(g.a,{bgcolor:"green",height:3,width:"10%"})]}),Object(d.jsx)(g.a,{mt:.25,bgcolor:"lightGreen",height:3,width:"50%"}),Object(d.jsx)(g.a,{mt:.25,bgcolor:"#ffc107",height:3,width:"60%"}),Object(d.jsx)(g.a,{mt:.25,bgcolor:"orange",height:3,width:"70%"}),Object(d.jsx)(g.a,{mt:.25,bgcolor:"red",height:3,width:"80%"})]}),Object(d.jsxs)(g.a,{mb:.25,pt:.1,height:20,width:"100%",bgcolor:"background.paper",children:[Be(11,"black",2,.1,.25),Object(d.jsx)(g.a,{my:.1,borderTop:1,height:0,width:"100%"}),Be(9,"black",1.5,.1,.25),Be(10,"black",1.2,.1,0)]}),Be(8,"white",2,.1)]})}var Te=a.a.forwardRef((function(e,t){return Object(d.jsxs)(g.a,Object(w.a)(Object(w.a)({},e),{},{ref:t,mt:3,display:"flex",justifyContent:"center",children:[Object(d.jsx)(g.a,{style:{transform:"rotate(10deg)"},bgcolor:ve,width:5,height:40}),Object(d.jsx)(g.a,{mx:10,bgcolor:ve,width:5,height:40}),Object(d.jsx)(g.a,{style:{transform:"rotate(-10deg)"},bgcolor:ve,width:5,height:40})]}))}));function Ee(e){var t=we(e);return Object(d.jsxs)(g.a,{children:[Object(d.jsxs)(ye,{className:t.acBorder,children:[Object(d.jsx)(ge.a,{in:e.status,children:Object(d.jsx)(Se,{mode:e.mode})}),Object(d.jsx)(Ce,{className:t.acLogo}),Object(d.jsx)(Ie,{}),Object(d.jsx)(Ne,{status:e.status}),Object(d.jsx)(Le,{className:t.energyLabel,titleLength:6})]}),Object(d.jsx)(ge.a,{in:e.status,timeout:{enter:2500,exit:1500},children:Object(d.jsx)(Te,{})})]})}var Re=r(146),We=r(144);function Fe(){var e=P((function(e){return e.toast})),t=M(),r=function(e,r){t(K(!1))};return Object(d.jsx)(Re.a,{open:e.open,autoHideDuration:5e3,onClose:r,children:Object(d.jsx)(We.a,{onClose:r,severity:"error",style:{width:"100%"},children:e.message})})}var Je=r(152);var Me=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(g.a,{children:Object(d.jsxs)(m.a,{variant:"body2",color:"textSecondary",align:"center",children:["\xa9 ",Object(d.jsx)(Je.a,{color:"inherit",href:xe.c.url,children:"2021"})," - ",Object(d.jsx)(Je.a,{color:"inherit",href:xe.c.url,children:"首页"})]})}),Object(d.jsx)(m.a,{variant:"body2",color:"textSecondary",align:"center",children:Object(d.jsx)(Je.a,{color:"inherit",href:xe.a.url,children:""})})]})};var Pe=function(){var e=P((function(e){return e.ac})),t=M();return Object(n.useEffect)((function(){function e(e){switch(e.key){case U.status:t(te("true"===e.newValue));break;case U.temperature:t(X(parseInt(e.newValue||"20")));break;case U.mode:t(Z(e.newValue||"cold"))}}return window.addEventListener("storage",e),function(){window.removeEventListener("storage",e)}}),[t]),Object(d.jsx)(u,{children:Object(d.jsxs)(j.a,{maxWidth:"sm",className:e.status?"hot"===e.mode?"hot-color":"cold-color":"",children:[Object(d.jsxs)(g.a,{sx:{pt:4},bgcolor:"transparent",children:[Object(d.jsx)(m.a,{color:"textPrimary",align:"center",variant:"h4",component:"h1",gutterBottom:!0,children:"\u4fbf\u643a\u5c0f\u7a7a\u8c03"}),Object(d.jsx)(v,{}),Object(d.jsx)(Ee,{status:e.status,temperature:e.temperature,mode:e.mode}),Object(d.jsx)("div",{className:"text-center",children:Object(d.jsx)(g.a,{sx:{mt:2}})}),Object(d.jsx)(be,{}),Object(d.jsx)(Me,{})]}),Object(d.jsx)(Fe,{})]})})};function Ye(){return Object(d.jsx)(be,{})}var Ae=function(){return Object(d.jsx)(u,{children:Object(d.jsx)(j.a,{maxWidth:"sm",children:Object(d.jsx)(b.a,{children:Object(d.jsxs)(h.c,{children:[Object(d.jsx)(h.a,{path:"/rc",children:Object(d.jsx)(Ye,{})}),Object(d.jsx)(h.a,{path:"/",children:Object(d.jsx)(Pe,{})})]})})})})},qe=Object(Y.a)({reducer:{ac:re,toast:Q}}),De=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ke(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var r=e.installing;null!=r&&(r.onstatechange=function(){"installed"===r.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Qe=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,153)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;r(e),n(e),a(e),o(e),c(e)}))};c.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(J.a,{store:qe,children:Object(d.jsx)(Ae,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/s/Kw37YF1oeOE-SKJaCvpyQw",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/s/Kw37YF1oeOE-SKJaCvpyQw","/service-worker.js");De?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(r){var n=r.headers.get("content-type");404===r.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ke(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Ke(t,e)}))}}(),Qe()},38:function(e){e.exports=JSON.parse('{"b":"\u4e91\u7a7a\u8c03\uff0c\u4fbf\u643a\u5c0f\u7a7a\u8c03","a":{"url":"https://mp.weixin.qq.com/s/dD59lfMHNjBkQMbXvTpQTA","email":"me@yunyoujun.cn","name":"YunYouJun"},"c":{"type":"git","url":"http://crazyl.work"}}')}},[[113,1,2]]]);
//# sourceMappingURL=main.d6c46ff3.chunk.js.map