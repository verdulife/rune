/* Partytown 0.5.0 - MIT builder.io */
const e=new Map,t=(e,t)=>({E:e.E,p:t}),r=(e,t)=>new Response(e,{headers:{"content-type":t||"text/html","Cache-Control":"no-store"}});self.oninstall=()=>self.skipWaiting(),self.onactivate=()=>self.clients.claim(),self.onmessage=t=>{const r=t.data,n=e.get(r.E);n&&(e.delete(r.E),clearTimeout(n[1]),n[0](r))},self.onfetch=n=>{const i=n.request,s=new URL(i.url).pathname;s.endsWith("sw.html")?n.respondWith(r('<!DOCTYPE html><html><head><meta charset="utf-8"><script type="module">/* Partytown 0.5.0 - MIT builder.io */\n(e=>{const t=()=>{},r=e=>e.length,n=e=>{try{return e.constructor.name}catch(e){}return""},i=(e,t)=>e.startsWith(t),s=e=>!(i(e,"webkit")||i(e,"toJSON")||i(e,"constructor")||i(e,"toString")||i(e,"_")),o=e=>11===e.nodeType&&e.host?"#s":e.nodeName,a=()=>Math.round(Math.random()*Number.MAX_SAFE_INTEGER).toString(36),l={Anchor:"a",DList:"dl",Image:"img",OList:"ol",Paragraph:"p",Quote:"q",TableCaption:"caption",TableCell:"td",TableCol:"colgroup",TableRow:"tr",TableSection:"tbody",UList:"ul"},c={Graphics:"g",SVG:"svg"},u=Symbol(),d=Symbol(),p=new Map,h=new Map,m={},g=new WeakMap,f=(e,t)=>{if(e)return(t=g.get(e))||(t=e[u])||$(e,t=a()),t},y=(e,t,r,n,i)=>{if((r=m[e])&&r.T){if(e===t)return r.T;if(n=r.T.document,"d"===(i=t.split(".").pop()))return n;if("e"===i)return n.documentElement;if("h"===i)return n.head;if("b"===i)return n.body}return p.get(t)},$=(e,t,r)=>{e&&(p.set(t,e),e[u]=t,e[d]=r=Date.now(),r>w+5e3&&(p.forEach(((e,t)=>{e[d]<w&&e.nodeType&&!e.isConnected&&p.delete(t)})),w=r))};let w=0;const v=e.parent,b=document,S=v.partytown||{},T=(S.lib||"/~partytown/")+"",E=(e,t,r)=>{const n=((e,t)=>{return r=e,n={value:t},Object.defineProperty(r,"name",{...n,configurable:!0});var r,n})(class extends m[e].T.HTMLElement{},r[0]);return"connectedCallback,disconnectedCallback,attributeChangedCallback,adoptedCallback".split(",").map((r=>n.prototype[r]=function(...n){t.postMessage([13,e,f(this),r,n])})),n.observedAttributes=r[1],n},M=(e,t,r,s,a)=>void 0!==t&&(s=typeof t)?"string"===s||"number"===s||"boolean"===s||null==t?[0,t]:"function"===s?[6]:(r=r||new Set)&&Array.isArray(t)?r.has(t)?[1,[]]:r.add(t)&&[1,t.map((t=>M(e,t,r)))]:"object"===s?""===(a=n(t))?[2,{}]:"Window"===a?[3,[e,e]]:"HTMLCollection"===a||"NodeList"===a?[7,Array.from(t).map((t=>M(e,t,r)[1]))]:a.endsWith("Event")?[5,x(e,t,r)]:"CSSRuleList"===a?[12,Array.from(t).map(I)]:i(a,"CSS")&&a.endsWith("Rule")?[11,I(t)]:"CSSStyleDeclaration"===a?[13,x(e,t,r)]:"Attr"===a?[10,[t.name,t.value]]:t.nodeType?[3,[e,f(t),o(t)]]:[2,x(e,t,r,!0,!0)]:void 0:t,x=(e,t,r,n,i,o,a,l)=>{if(o={},!r.has(t))for(a in r.add(t),t)s(a)&&(l=t[a],(n||"function"!=typeof l)&&(i||""!==l)&&(o[a]=M(e,l,r)));return o},I=e=>{let t,r={};for(t in e)O.includes(t)&&(r[t]=String(e[t]));return r},N=(t,r,n,i)=>r?(n=r[0],i=r[1],0===n?i:4===n?C(t,i):1===n?i.map((e=>N(t,e))):3===n?y(i[0],i[1]):5===n?L(A(t,i)):2===n?A(t,i):8===n?i:9===n?new e[r[2]](i):void 0):void 0,C=(e,{U:t,w:r,K:n},i)=>((i=h.get(n))||(i=function(...i){e.postMessage([7,{U:t,w:r,K:n,Q:M(t,this),b:M(t,i)}])},h.set(n,i)),i),L=e=>new("detail"in e?CustomEvent:Event)(e.type,e),A=(e,t,r,n)=>{for(n in r={},t)r[n]=N(e,t[n]);return r},O="cssText,selectorText,href,media,namespaceURI,prefix,name,conditionText".split(","),R=async(e,t)=>{let n,i,s,o,a,l,c={E:t.E},u=r(t.P),d=0;for(;d<u;d++)try{l=d===u-1,n=t.P[d],i=n.U,s=n.a,!m[i]&&i.startsWith("f_")&&await new Promise((e=>{let t=0,r=()=>{m[i]||t++>1e3?e():requestAnimationFrame(r)};r()})),1===s[0]&&s[1]in m[i].T?$(new m[i].T[s[1]](...N(e,s[2])),n.w):(o=y(i,n.w),o?(a=H(e,i,o,s,l,n.r),n.d&&("string"==typeof n.d?$(a,n.d):m[n.d.U]={U:n.d.U,T:{document:a}}),"object"==typeof(p=a)&&p&&p.then&&(a=await a,l&&(c.z=!0)),l&&(c.L=M(i,a))):c.p=n.w+" not found")}catch(e){l?c.p=String(e.stack||e):console.error(e)}var p;return c},H=(e,t,i,s,o,a)=>{let l,c,u,d,p,h=0,m=r(s);for(;h<m;h++){c=s[h],l=s[h+1],u=s[h-1];try{if(!Array.isArray(l))if("string"==typeof c||"number"==typeof c){if(h+1===m&&a)return p={},a.map((e=>p[e]=i[e])),p;i=i[c]}else{if(0===l)return void(i[u]=N(e,c));if("function"==typeof i[u]&&(d=N(e,c),"define"===u&&"CustomElementRegistry"===n(i)&&(d[1]=E(t,e,d[1])),"insertRule"===u&&d[1]>r(i.cssRules)&&(d[1]=r(i.cssRules)),i=i[u].apply(i,d),"play"===u))return Promise.resolve()}}catch(e){if(o)throw e;console.debug(e)}}return i},D=(e,t,r)=>{if(!g.has(r)){g.set(r,t);const n=r.document,i=r.history,s=g.get(r.parent),o=()=>e.postMessage([3,{U:t,I:s,R:n.baseURI,S:n.visibilityState}]),a=i.pushState.bind(i),l=i.replaceState.bind(i),c=()=>setTimeout((()=>e.postMessage([11,t,n.baseURI])));i.pushState=(e,t,r)=>{a(e,t,r),c()},i.replaceState=(e,t,r)=>{l(e,t,r),c()},r.addEventListener("popstate",c),r.addEventListener("hashchange",c),n.addEventListener("visibilitychange",(()=>e.postMessage([12,t,n.visibilityState]))),m[t]={U:t,T:r},"complete"===n.readyState?o():r.addEventListener("load",o)}},P=(e,t)=>{let n,i,s,o=t.U,a=t.T,l=a.document;l&&l.body?(n=l.querySelector(\'script[type="text/partytown"]:not([data-ptid]):not([data-pterror]):not([async]):not([defer])\'),n||(n=l.querySelector(\'script[type="text/partytown"]:not([data-ptid]):not([data-pterror])\')),n?(n.dataset.ptid=i=f(n,o),s={U:o,w:i},n.src?(s.R=n.src,s.G=n.dataset.ptsrc||n.src):s.j=n.innerHTML,e.postMessage([5,s])):(t.x||(t.x=1,((e,t,n)=>{let i,s,o=n._ptf,a=(n.partytown||{}).forward||[],l=(r,n)=>e.postMessage([8,{U:t,q:r,b:M(t,Array.from(n))}]);if(n._ptf=void 0,a.map((e=>{s=n,e.split(".").map(((e,t,n)=>{s=s[n[t]]=t+1<r(n)?s[n[t]]||("push"===n[t+1]?[]:{}):(...e)=>l(n,e)}))})),o)for(i=0;i<r(o);i+=2)l(o[i],o[i+1])})(e,o,a),l.dispatchEvent(new CustomEvent("pt0"))),e.postMessage([6,o]))):requestAnimationFrame((()=>P(e,t)))},U=()=>{const e=b.implementation.createHTMLDocument(),t=e.createElement("i"),r=e.createTextNode(""),i=e.createComment(""),s=e.createDocumentFragment(),o=e.createElement("p").attachShadow({mode:"open"}),a=B(v,"IntersectionObserver"),u=B(v,"MutationObserver"),d=B(v,"ResizeObserver"),p=v.performance,h=v.screen,m=Object.getOwnPropertyNames(v).map((t=>((e,t,r,n)=>{if(r=t.match(/^(HTML|SVG)(.+)Element$/))return n=r[2],"S"==t[0]?e.createElementNS("http://www.w3.org/2000/svg",c[n]||n.slice(0,2).toLowerCase()+n.slice(2)):e.createElement(l[n]||n)})(e,t))).filter((e=>e)).map((e=>[e])),g=[[v.history],[p],[p.navigation],[p.timing],[h],[h.orientation],[v.visualViewport],[a,12],[u,12],[d,12],[r],[i],[s],[o],[t],[t.attributes],[t.classList],[t.dataset],[t.style],[e],[e.doctype],...m].filter((e=>e[0])).map((e=>{const t=e[0],r=e[1],i=n(t);return[i,v[i].prototype,t,r]})),f=[k("Window",v),k("Node",r)],y={i:JSON.stringify(S,((e,t)=>("function"==typeof t&&(t=String(t)).startsWith(e+"(")&&(t="function "+t),t))),B:new URL(T,v.location)+"",v:f,H:origin,C:j("localStorage"),N:j("sessionStorage")};return g.map((([e,t,r,n])=>_(f,e,t,r,n))),W(f,v,"IntersectionObserverEntry"),y},k=(e,t,r)=>{let n=[],i=[e,"Object",n];for(r in t)F(n,t,r);return i},_=(e,t,r,i,s)=>{if("Object"!==t&&!e.some((e=>e[0]===t))){const a=Object.getPrototypeOf(r),l=n(a),c=[];_(e,l,a,i,s),Object.keys(Object.getOwnPropertyDescriptors(r)).map((e=>F(c,i,e))),e.push([t,l,c,s,o(i)])}},F=(e,t,r,i,o,a)=>{try{s(r)&&isNaN(r[0])&&"all"!==r&&("function"==(o=typeof(i=t[r]))?(String(i).includes("[native")||Object.getPrototypeOf(t)[r])&&e.push([r,5]):"object"===o&&null!=i?"Object"!==(a=n(i))&&self[a]&&e.push([r,i.nodeType||a]):"symbol"!==o&&(r.toUpperCase()===r?e.push([r,6,i]):e.push([r,6])))}catch(e){console.warn(e)}},j=e=>{let t,n=[],i=0,s=r(v[e]);for(;i<s;i++)t=v[e].key(i),n.push([t,v[e].getItem(t)]);return n},B=(e,r)=>void 0!==e[r]?new e[r](t):0,W=(e,t,r)=>{void 0!==t[r]&&e.push([r,"Object",Object.keys(t[r].prototype).map((e=>[e,6])),12])};let V;(t=>{const r=e.navigator.serviceWorker;return r.getRegistration().then((e=>(r.addEventListener("message",(t=>{return r=t.data,n=t=>e.active&&e.active.postMessage(t),R(V,r).then(n);var r,n})),(e,t)=>{0===t[0]?e.postMessage([1,U()]):((e,t,r)=>{2===t[0]?D(e,a(),v):(r=m[t[1]])&&(5===t[0]?requestAnimationFrame((()=>P(e,r))):4===t[0]&&((e,t,r,n,i)=>{(i=t.T.document.querySelector(`[data-ptid="${r}"]`))&&(n?i.dataset.pterror=n:i.type+="-x",delete i.dataset.ptid),P(e,t)})(e,r,t[2],t[3]))})(e,t)})))})().then((e=>{e&&(V=new Worker(URL.createObjectURL(new Blob([\'/* Partytown 0.5.0 - MIT builder.io */\\n(e=>{const t=Symbol(),r=Symbol(),n=Symbol(),i=Symbol(),s=Symbol(),o=Symbol(),a=Symbol(),l=Symbol(),c=new Map,$={},u=new WeakMap,d=[],h={},p=new Map,g=new Map,m={},f=new Map,w=new Map,y="about:blank",v=e=>e.split(","),S=e=>{if(e=h.B+e,new URL(e).origin!=location.origin)throw"Invalid "+e;return e},b=v("clientWidth,clientHeight,clientTop,clientLeft,innerWidth,innerHeight,offsetWidth,offsetHeight,offsetTop,offsetLeft,outerWidth,outerHeight,pageXOffset,pageYOffset,scrollWidth,scrollHeight,scrollTop,scrollLeft"),I=v("childElementCount,children,firstElementChild,lastElementChild,nextElementSibling,previousElementSibling"),M=v("insertBefore,remove,removeChild,replaceChild"),T=v("className,width,height,hidden,innerHTML,innerText,textContent"),E=v("setAttribute,setAttributeNS,setProperty"),N=v("addEventListener,dispatchEvent,removeEventListener"),L=N.concat(E,v("add,observe,remove,unobserve")),x=/^[A-Z_]([A-Z0-9-]*[A-Z0-9])?$/,C=()=>{},A=e=>e.length,R=e=>{try{return e.constructor.name}catch(e){}return""},P=[],H=()=>Math.round(Math.random()*Number.MAX_SAFE_INTEGER).toString(36),O="text/partytown",W=(e,t,r)=>Object.defineProperty(e,t,{...r,configurable:!0}),D=(e,t)=>W(e,"name",{value:t}),k=(e,t,r)=>W(e.prototype,t,r),B=(e,t)=>Object.defineProperties(e.prototype,t),U=(e,t,r)=>k(e,t,{value:r,writable:!0}),j=(e,t)=>t in e[o],F=(e,t)=>e[o][t],_=(e,t,r)=>e[o][t]=r,V=(e,t,r,n,i)=>(!(i=c.get(t))&&r&&m[e]&&(i=m[e].k(r,t,n),c.set(t,i)),i),X=(e,t)=>U(e,"nodeType",t),q=(e,t)=>t.map((t=>k(e,t,{get(){let e=z(this,t),r=w.get(e);return r||(r=$e(this,[t]),w.set(e,r)),r}}))),z=(e,n,i)=>[e[t],e[r],n,...(i||P).map((e=>String(e&&e[t]?e[r]:e)))].join("."),G=(e,t)=>v(t).map((t=>k(e,t,{get(){return j(this,t)||_(this,t,$e(this,[t])),F(this,t)},set(e){F(this,t)!==e&&ue(this,[t],e),_(this,t,e)}}))),J=e=>b.map((t=>k(e,t,{get(){const e=f.get(z(this,t));if("number"==typeof e)return e;const r=$e(this,[t],b);return r&&"object"==typeof r?(Object.entries(r).map((([e,t])=>f.set(z(this,e),t))),r[t]):r}}))),Z=(e,t)=>t.map((t=>{e.prototype[t]=function(...e){let r=z(this,t,e),n=f.get(r);return n||(n=de(this,[t],e),f.set(r,n)),n}})),Y=(e,n,i,s,o)=>{return void 0!==i&&(o=typeof i)?"string"===o||"boolean"===o||"number"===o||null==i?[0,i]:"function"===o?[4,{U:e,w:n,K:(a=i,(l=u.get(a))||(u.set(a,l=H()),$[l]=a),l)}]:(s=s||new Set)&&Array.isArray(i)?s.has(i)?[1,[]]:s.add(i)&&[1,i.map((t=>Y(e,n,t,s)))]:"object"===o?i[r]?[3,[i[t],i[r]]]:i instanceof Event?[5,Q(e,n,i,!1,s)]:K&&i instanceof TrustedHTML?[0,i.toString()]:i instanceof ArrayBuffer?[8,i]:ArrayBuffer.isView(i)?[9,i.buffer,R(i)]:[2,Q(e,n,i,!0,s)]:void 0:i;var a,l},K="undefined"!=typeof TrustedHTML,Q=(e,t,r,n,i,s,o,a)=>{if(s={},!i.has(r))for(o in i.add(r),r)a=r[o],(n||"function"!=typeof a)&&(s[o]=Y(e,t,a,i));return s},ee=(e,n)=>e?Y(e[t],e[r],n):[0,n],te=(e,t,r,n,i,s,o,a)=>{if(n){if(i=n[0],s=n[1],0===i||11===i||12===i)return s;if(4===i)return ne(r,s);if(6===i)return C;if(3===i)return re(s);if(7===i)return new ie(s.map(re));if(10===i)return new se(s);if(1===i)return s.map((n=>te(e,t,r,n)));for(a in o={},s)o[a]=te(e,t,[...r,a],s[a]);if(13===i)return new m[e].T.CSSStyleDeclaration(e,t,r,o);if(5===i){if("message"===o.type&&o.origin){let e,t=JSON.stringify(o.data),r=d.find((e=>e.m===t));r&&(e=m[r.U],e&&(o.source=e.T,o.origin=e.D.origin))}return new Proxy(new Event(o.type,o),{get:(e,t)=>t in o?o[t]:"function"==typeof e[String(t)]?C:e[String(t)]})}if(2===i)return o}},re=([e,t,r])=>t===e&&m[e]?m[e].T:V(e,t,r),ne=(e,{U:t,w:r,F:n,K:i})=>($[i]||u.set($[i]=function(...i){const s=V(t,r,n);return de(s,e,i)},i),$[i]),ie=class{constructor(e){(this._=e).map(((e,t)=>this[t]=e))}entries(){return this._.entries()}forEach(e,t){this._.map(e,t)}item(e){return this[e]}keys(){return this._.keys()}get length(){return A(this._)}values(){return this._.values()}[Symbol.iterator](){return this._[Symbol.iterator]()}},se=class{constructor(e){this.name=e[0],this.value=e[1]}get nodeName(){return this.name}get nodeType(){return 2}},oe=(e,t,r)=>console.warn(`Partytown unable to ${e} cross-origin ${t}: `+r.D),ae=[],le=(e,n,i,o,a,l)=>{if(ae.push({U:e[t],w:e[r],a:[...e[s],...n],d:o,r:a}),3===i)h.J([10,{E:H(),P:[...ae]}],l?[l instanceof ArrayBuffer?l:l.buffer]:void 0),ae.length=0;else if(1===i)return ce(!0);h.c=setTimeout(ce,20)},ce=e=>{if(clearTimeout(h.c),A(ae)){const t=ae[A(ae)-1],r={E:H(),P:[...ae]};if(ae.length=0,e){const e=((e,t)=>{const r=new XMLHttpRequest;return r.open("POST",S("proxytown"),!1),r.send(JSON.stringify(t)),JSON.parse(r.responseText)})(0,r),n=e.z,i=te(t.U,t.w,t.a,e.L);if(e.p){if(n)return Promise.reject(e.p);throw new Error(e.p)}return n?Promise.resolve(i):i}h.J([10,r])}},$e=(e,t,r,n)=>h.i.get&&(n=h.i.get(pe(e,t)))!==a?n:n=le(e,t,1,void 0,r),ue=(e,t,r,n)=>{if(h.i.set){if((n=h.i.set({value:r,prevent:l,...pe(e,t)}))===l)return;n!==a&&(r=n)}T.some((e=>t.includes(e)))&&(f.clear(),t[t.length-1]),t=[...t,ee(e,r),0],le(e,t,2)},de=(e,t,r,n,i,s,o,l)=>h.i.apply&&(o=h.i.apply({args:r,...pe(e,t)}))!==a?o:(l=t[A(t)-1],t=[...t,ee(e,r)],n=n||(L.includes(l)?2:1),"setAttribute"===l&&j(e,r[0])?_(e,r[0],r[1]):M.includes(l)?(f.clear(),w.clear()):E.includes(l)&&(n=2,f.clear()),o=le(e,t,n,i,void 0,s)),he=(e,t,r)=>{le(e,[1,t,ee(e,r)],1)},pe=(e,t)=>({name:t.join("."),continue:a,nodeName:e[n],constructor:R(e)}),ge=(e,t,r,n,i)=>{let s,o,a=t=>((t=r.get(e.origin))||r.set(e.origin,t=[]),t),l=e=>a().findIndex((t=>t[me]===e)),c={getItem:e=>(s=l(e),s>-1?a()[s][fe]:null),setItem(r,o){s=l(r),s>-1?a()[s][fe]=o:a().push([r,o]),n?de(e,[t,"setItem"],[r,o],2):oe("set",t,i)},removeItem(r){s=l(r),s>-1&&a().splice(s,1),n?de(e,[t,"removeItem"],[r],2):oe("remove",t,i)},key:e=>(o=a()[e],o?o[me]:null),clear(){a().length=0,n?de(e,[t,"clear"],P,2):oe("clear",t,i)},get length(){return a().length}};e[t]=c},me=0,fe=1,we=(e,t,r)=>{e[r]=D(class extends t{constructor(e,t,r,i){return super(e,t,r,i||{}),new Proxy(this,{get:(e,t)=>e[t]?e[t]:(e[t]||"string"!=typeof t||e[n][t]||(e[n][t]=$e(e,[t])),e[n][t]),set:(e,t,r)=>(e[n][t]=r,ue(e,[t],r),f.clear(),!0)})}setProperty(...e){this[n][e[0]]=e[1],de(this,["setProperty"],e,2),e[0],f.clear()}getPropertyValue(e){return this[e]}removeProperty(e){let t=this[n][e];return de(this,["removeProperty"],[e],2),f.clear(),this[n][e]=void 0,t}},r)},ye=(e,t)=>{e[t]=D(class{constructor(e){this.ownerNode=e}get cssRules(){const e=this.ownerNode;return new Proxy({},{get(t,r){const n=String(r);return"item"===n?t=>Se(e,t):"length"===n?ve(e).length:isNaN(n)?t[r]:Se(e,n)}})}insertRule(e,t){const r=ve(this.ownerNode);return(t=void 0===t?0:t)>=0&&t<=r.length&&(de(this.ownerNode,["sheet","insertRule"],[e,t],2),r.splice(t,0,0)),this.ownerNode,f.clear(),t}deleteRule(e){de(this.ownerNode,["sheet","deleteRule"],[e],2),ve(this.ownerNode).splice(e,1),this.ownerNode,f.clear()}get type(){return"text/css"}},t);const r={sheet:{get(){return new e[t](this)}}};B(e.HTMLStyleElement,r)},ve=(e,t)=>((t=F(e,2))||(t=$e(e,["sheet","cssRules"]),_(e,2,t)),t),Se=(e,t,r)=>(0===(r=ve(e))[t]&&(r[t]=$e(e,["sheet","cssRules",parseInt(t,10)])),r[t]),be="0.5.0",Ie=(e,t,r,n,i)=>{try{e.l=t,Me(e,r)}catch(e){console.error(r,e),i=String(e.stack||e)}return e.l="",i},Me=(e,t,r)=>{e.M=1,t=`with(this){${(h.i.globalFns||[]).filter((e=>/[a-zA-Z_$][0-9a-zA-Z_$]*/.test(e))).map((e=>`(typeof ${e}==\\\'function\\\'&&(window.${e}=${e}))`)).join(";")+t.replace(/\\\\bthis\\\\b/g,"(thi$(this)?window:this)").replace(/\\\\/\\\\/# so/g,"//Xso")}\\\\n;function thi$(t){return t===this}}`+(r?"\\\\n//# sourceURL="+r:""),e.A||(t=t.replace(/.postMessage\\\\(/g,`.postMessage(\\\'${e.U}\\\',`)),new Function(t).call(e.T),e.M=0},Te=(e,t,r)=>{(r=F(e,t))&&setTimeout((()=>r.map((e=>e({type:t})))))},Ee=(e,t,r,n,i,s)=>{for(n=e.D;!n.host&&(n=(e=m[e.I]).D,e.U!==e.I););return i=new URL(t||"",n),!r&&h.i.resolveUrl&&(s=h.i.resolveUrl(i,n))?s:i},Ne=(e,t,r)=>Ee(e,t,r)+"",Le=()=>`<script src="${S("partytown.js?v="+be)}"><\\\\/script>`,xe=e=>class{constructor(){this.s="",this.l=[],this.e=[]}get src(){return this.s}set src(t){fetch(Ne(e,t,!0),{mode:"no-cors",keepalive:!0}).then((e=>{e.ok||0===e.status?this.l.map((e=>e({type:"load"}))):this.e.map((e=>e({type:"error"})))}),(()=>this.e.forEach((e=>e({type:"error"})))))}addEventListener(e,t){"load"===e&&this.l.push(t),"error"===e&&this.e.push(t)}get onload(){return this.l[0]}set onload(e){this.l=[e]}get onerror(){return this.e[0]}set onerror(e){this.e=[e]}},Ce={addEventListener:{value(...e){const t=e[0],r=F(this,t)||[];r.push(e[1]),_(this,t,r)}},async:{get:C,set:C},defer:{get:C,set:C},onload:{get(){let e=F(this,"load");return e&&e[0]||null},set(e){_(this,"load",e?[e]:null)}},onerror:{get(){let e=F(this,"error");return e&&e[0]||null},set(e){_(this,"error",e?[e]:null)}},getAttribute:{value(e){return"src"===e?this.src:de(this,["getAttribute"],[e])}},setAttribute:{value(e,t){Ae.includes(e)?this[e]=t:de(this,["setAttribute"],[e,t])}}},Ae=v("src,type"),Re=(e,t)=>{const r={innerHTML:Pe,innerText:Pe,src:{get(){return F(this,4)||""},set(e){const r=Ne(t,e,!0);e=Ne(t,e),_(this,4,e),ue(this,["src"],e),r!==e&&ue(this,["dataset","ptsrc"],r)}},textContent:Pe,type:{get(){return $e(this,["type"])},set(e){He(e)||(_(this,5,e),ue(this,["type"],e))}},...Ce};B(e,r)},Pe={get(){return F(this,3)||""},set(e){_(this,3,e)}},He=e=>!e||"text/javascript"===e,Oe=(e,i,s)=>{const o=D(class extends s{appendChild(e){return this.insertBefore(e,null)}get href(){}set href(e){}insertBefore(e,s){const o=e[t]=this[t],a=e[r],l=e[n],c="SCRIPT"===l,$="IFRAME"===l;if(c){const t=F(e,3),r=F(e,5);if(t){if(He(r)){const r=Ie(i,a,t,0,""),n=r?"pterror":"ptid",s=r||a;ue(e,["type"],O+"-x"),ue(e,["dataset",n],s)}ue(e,["innerHTML"],t)}}return de(this,["insertBefore"],[e,s],2),$&&((e,t)=>{let r,n,i=0,s=()=>{m[e]&&m[e].x&&!m[e].y?(r=F(t,1)?"error":"load",n=F(t,r),n&&n.map((e=>e({type:r})))):i++>2e3?(n=F(t,"error"),n&&n.map((e=>e({type:"error"})))):setTimeout(s,9)};s()})(a,e),c&&(ce(!0),h.J([5,o])),e}get nodeName(){return"#s"===this[n]?"#document-fragment":this[n]}get nodeType(){return 3}get ownerDocument(){return i.n}},"Node");q(o,v("childNodes,firstChild,isConnected,lastChild,nextSibling,parentElement,parentNode,previousSibling")),e.Node=o},We=v("AUDIO,CANVAS,VIDEO"),De=v("Audio,MediaSource"),ke=(e,r,n)=>{B(e,{body:{get:()=>r.e},cookie:{get(){return r.A?$e(this,["cookie"]):(oe("get","cookie",r),"")},set(e){r.A&&ue(this,["cookie"],e)}},createElement:{value(e){if(e=e.toUpperCase(),!x.test(e))throw e+" not valid";const r="IFRAME"===e,n=this[t],i=(r?"f_":"")+H();de(this,["createElement"],[e],2,i);const s=V(n,i,e);if(r)ze({U:i,I:n,R:y},!0).T.fetch=fetch,ue(s,["srcdoc"],Le());else if("SCRIPT"===e){const e=F(s,5);He(e)&&ue(s,["type"],O)}return s}},createElementNS:{value(e,r){const n=H(),i=V(this[t],n,r,e);return de(this,["createElementNS"],[e,r],2,n),i}},createTextNode:{value(e){const r=this[t],n=H(),i=V(r,n,"#text");return de(this,["createTextNode"],[e],2,n),i}},createEvent:{value:e=>new Event(e)},currentScript:{get(){return r.l?V(this[t],r.l,"SCRIPT"):null}},defaultView:{get:()=>n?null:r.T},documentElement:{get:()=>r.o},getElementsByTagName:{value(e){return"BODY"===(e=e.toUpperCase())?[r.e]:"HEAD"===e?[r.s]:de(this,["getElementsByTagName"],[e])}},head:{get:()=>r.s},implementation:{get(){return{hasFeature:()=>!0,createHTMLDocument:e=>{const t=H();return de(this,["implementation","createHTMLDocument"],[e],1,{U:t}),Xe(t,t,r.D+"","hidden",!0,!0).n}}}},location:{get:()=>r.D,set(e){r.D.href=e+""}},nodeType:{value:9},parentNode:{value:null},parentElement:{value:null},readyState:{value:"complete"},visibilityState:{get:()=>r.S||"visible"}}),G(e,"compatMode,referrer,forms")},Be=(e,t)=>{B(e,{parentElement:{get(){return this.parentNode}},parentNode:{get:()=>t.o}})},Ue=(e,t)=>{B(e,{localName:{get(){return this[n].toLowerCase()}},namespaceURI:{get(){return this[i]||"http://www.w3.org/1999/xhtml"}},nodeType:{value:1},tagName:{get(){return this[n]}}}),q(e,I),G(e,"id"),J(t),Z(t,v("getClientRects,getBoundingClientRect"))},je=(e,t)=>{const r={};v("hash,host,hostname,href,origin,pathname,port,protocol,search").map((e=>{r[e]={get(){let r,n=F(this,4);return"string"!=typeof n&&(r=$e(this,["href"]),_(this,4,r),n=new URL(r)[e]),Ee(t,n)[e]},set(r){let n=F(this,4),i=Ee(t,n);i[e]=new URL(r+"",i.href),_(this,4,i.href),ue(this,["href"],i.href)}}})),B(e,r)},Fe=(e,t)=>{const r={contentDocument:{get(){return _e(this).n}},contentWindow:{get(){return _e(this).T}},src:{get(){let e=_e(this).D.href;return e.startsWith("about:")?"":e},set(e){if(!e.startsWith("about:")){let t,r=new XMLHttpRequest,n=_e(this);n.D.href=e=Ne(n,e),n.y=1,_(this,1,void 0),r.open("GET",e,!1),r.send(),t=r.status,t>199&&t<300?(ue(this,["srcdoc"],`<base href="${e}">`+r.responseText.replace(/<script>/g,\\\'<script type="text/partytown">\\\').replace(/<script /g,\\\'<script type="text/partytown" \\\').replace(/text\\\\/javascript/g,O)+Le()),ce(!0),h.J([5,n.U])):(_(this,1,t),n.y=0)}}},...Ce};B(e,r)},_e=e=>{const n=e[r];return m[n]||ze({U:n,I:e[t],R:$e(e,["src"])||y},!0),m[n]},Ve=e=>{const t=(e,t)=>{const{a:r,b:n,c:i,d:s,e:o,f:a}=de(e,[t],P);return new DOMMatrixReadOnly([r,n,i,s,o,a])},r={...e,getCTM:{value:function(){return t(this,"getCTM")}},getScreenCTM:{value:function(){return t(this,"getScreenCTM")}}};B(e,r)},Xe=(a,l,c,$,u,f)=>{let w,b,M;const T=class{constructor(e,l,c,$,u){this[t]=e||a,this[r]=l||w||H(),this[s]=c||[],this[n]=$||b,this[i]=u||M,this[o]={},w=b=M=void 0}},E=new(D(class extends URL{assign(){}reload(){}replace(){}},"Location"))(c),L=E.origin===h.H||E.origin===y,x={},C=D(class extends T{constructor(){super(a,a);let n,i,o=this,c=0,d=()=>{c||((h.u||(e.g=[$e,ue,de,he,B,H,t,r,s],h.t(S("partytown-media.js?v="+be)),h.u=e.f,delete e.f),h.u)(T,O,x,o,De),c=1)},m={},y=(e,t,r)=>{We.includes(e)&&d();const n=m[e]?m[e]:e.includes("-")?m.UNKNOWN:m.I;return w=t,b=e,M=r,new n};var N,A;o.Window=C,Oe(o,x,T),we(o,T,"CSSStyleDeclaration"),((e,t,r)=>{e[r]=D(class extends t{now(){return performance.now()}},r)})(o,T,"Performance"),((e,t)=>{const r="customElements",n=new Map;e.customElements={define(i,s,o){n.set(i,s),t[i.toUpperCase()]=s;const a=[s.name,s.observedAttributes];de(e,[r,"define"],[i,a,o])},get:t=>n.get(t)||de(e,[r,"get"],[t]),whenDefined:t=>n.has(t)?Promise.resolve():de(e,[r,"whenDefined"],[t]),upgrade:t=>de(e,[r,"upgrade"],[t])}})(o,m),h.v.map((([e,t,n,i,l])=>{const c=qe[e]?P:"EventTarget"===t?O:"Object"===t?T:o[t],$=o[e]=D(12===i?class extends T{constructor(...t){super(),he(this,e,t)}}:o[e]||class extends c{},e);l&&(m[l]=$),n.map((([e,t,n])=>{e in $.prototype||e in c.prototype||("string"==typeof t?k($,e,{get(){if(!j(this,e)){const n=this[r],i=[...this[s],e],l=o[t];l&&_(this,e,new l(a,n,i))}return F(this,e)},set(t){_(this,e,t)}}):5===t?U($,e,(function(...t){return de(this,[e],t)})):t>0&&(void 0!==n?U($,e,n):k($,e,{get(){return $e(this,[e])},set(t){return ue(this,[e],t)}})))}))})),v("atob,btoa,crypto,indexedDB,setTimeout,setInterval,clearTimeout,clearInterval").map((t=>{delete C.prototype[t],t in o||(n=e[t],null!=n&&(o[t]="function"!=typeof n||n.toString().startsWith("class")?n:n.bind(e)))})),Object.getOwnPropertyNames(e).map((t=>{t in o||(o[t]=e[t])})),De.map((e=>W(o,e,{get:()=>(d(),o[e])}))),"trustedTypes"in e&&(o.trustedTypes=e.trustedTypes),Ue(o.Element,o.HTMLElement),ke(o.Document,x,f),N=o.DocumentFragment,X(N,11),q(N,I),je(o.HTMLAnchorElement,x),A=o.HTMLFormElement,B(A,{}),G(A,"elements"),Fe(o.HTMLIFrameElement),Re(o.HTMLScriptElement,x),Ve(o.SVGGraphicsElement),Be(o.HTMLHeadElement,x),Be(o.HTMLBodyElement,x),((e,t)=>{B(e,{parentElement:{value:null},parentNode:{get:()=>t.n}})})(o.HTMLHtmlElement,x),ye(o,"CSSStyleSheet"),X(o.Comment,8),X(o.DocumentType,10),Object.assign(x,{U:a,I:l,T:new Proxy(o,{has:()=>!0}),n:y("#document",a+".d"),o:y("HTML",a+".e"),s:y("HEAD",a+".h"),e:y("BODY",a+".b"),D:E,S:$,A:L,k:y}),o.requestAnimationFrame=e=>setTimeout((()=>e(performance.now())),9),o.cancelAnimationFrame=e=>clearTimeout(e),o.requestIdleCallback=(e,t)=>(t=Date.now(),setTimeout((()=>e({didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-t))})),1)),o.cancelIdleCallback=e=>clearTimeout(e),ge(o,"localStorage",p,L,x),ge(o,"sessionStorage",g,L,x),L||(o.indexeddb=void 0),u&&(i={},o.history={pushState(e){i=e},replaceState(e){i=e},get state(){return i},length:0}),o.Worker=void 0}addEventListener(...e){"load"===e[0]?x.M&&setTimeout((()=>e[1]({type:"load"}))):de(this,["addEventListener"],e,2)}get body(){return x.e}get document(){return x.n}get documentElement(){return x.o}fetch(e,t){return e="string"==typeof e||e instanceof URL?String(e):e.url,fetch(Ne(x,e),t)}get frameElement(){return a===l?null:V(l,a,"IFRAME")}get globalThis(){return this}get head(){return x.s}get location(){return E}set location(e){E.href=e+""}get Image(){return xe(x)}get name(){return name+a}get navigator(){return(e=>{let t,r={sendBeacon:(t,r)=>{try{return fetch(Ne(e,t,!0),{method:"POST",body:r,mode:"no-cors",keepalive:!0}),!0}catch(e){return console.error(e),!1}}};for(t in navigator)r[t]=navigator[t];return r})(x)}get origin(){return E.origin}set origin(e){}get parent(){for(let e in m)if(m[e].U===l)return m[e].T;return this}postMessage(...e){m[e[0]]&&(A(d)>50&&d.splice(0,5),d.push({U:e[0],m:JSON.stringify(e[1])}),e=e.slice(1)),de(this,["postMessage"],e,3)}get self(){return this}get top(){for(let e in m)if(m[e].U===m[e].I)return m[e].T;return this}get window(){return this}get XMLHttpRequest(){const e=XMLHttpRequest,t=String(e),r=D(class extends e{open(...e){e[1]=Ne(x,e[1]),super.open(...e)}set withCredentials(e){}toString(){return t}},R(e));return r.prototype.constructor.toString=()=>t,r}},"Window"),P=class extends T{constructor(e,t,r,n){return super(e,t,r,n),new Proxy(this,{get:(e,t)=>$e(e,[t]),set:(e,t,r)=>(ue(e,[t],r),!0)})}},O=class extends T{};return N.map((e=>O.prototype[e]=function(...t){return de(this,[e],t,2)})),G(C,"devicePixelRatio"),J(C),Z(C,["getComputedStyle"]),new C,x},qe={DOMStringMap:1,NamedNodeMap:1},ze=({U:e,I:t,R:r,S:n},i)=>(m[e]||(m[e]=Xe(e,t,r,n,i)),h.J([5,e]),m[e]),Ge=[],Je=t=>{const r=t.data,n=r[0],i=r[1];h.x?5===n?(async e=>{let t,r=e.U,n=e.w,i=V(r,n,"SCRIPT"),s=e.j,o=e.R,a=e.G,l="",c=m[r];if(o)try{o=Ee(c,o)+"",_(i,4,o),t=await fetch(o),t.ok?(s=await t.text(),c.l=n,Me(c,s,a||o),Te(i,"load")):(l=t.statusText,Te(i,"error"))}catch(e){console.error(e),l=String(e.stack||e),Te(i,"error")}else s&&(l=Ie(c,n,s,0,l));c.l="",h.J([4,r,n,l])})(i):7===n?(({U:e,w:t,K:r,Q:n,b:i})=>{if($[r])try{$[r].apply(te(e,t,[],n),te(e,t,[],i))}catch(e){console.error(e)}})(i):8===n?(({U:e,q:t,b:r})=>{try{let n=m[e].T,i=0,s=A(t);for(;i<s;i++)i+1<s?n=n[t[i]]:n[t[i]].apply(n,te(null,e,[],r))}catch(e){console.error(e)}})(i):3===n?ze(i):6===n?(m[i].x=1,m[i].y=0):12===n?m[i].S=r[2]:11===n?m[i].D.href=r[2]:13===n&&((e,t,r,n,i)=>{const s=V(t,r);s&&"function"==typeof s[n]&&s[n].apply(s,i)})(...r):1===n?((t=>{const r=h.i=JSON.parse(t.i),n=t.H;h.t=importScripts.bind(e),h.v=t.v,h.B=t.B,h.H=n,h.J=postMessage.bind(e),h.O=t.O,p.set(n,t.C),g.set(n,t.N),e.importScripts=void 0,delete e.postMessage,delete e.WorkerGlobalScope,v("resolveUrl,get,set,apply").map((e=>{r[e]&&(r[e]=new Function("return "+r[e])())})),h.x=1})(i),h.J([2]),[...Ge].map(Je),Ge.length=0):Ge.push(t)};e.onmessage=Je,postMessage([0])})(self);\\n\'],{type:"text/javascript"})),{name:"Partytown 🎉"}),V.onmessage=t=>{const r=t.data;10===r[0]?R(V,r[1]):e(V,r)},v.addEventListener("pt1",(e=>D(V,f(e.detail.frameElement),e.detail))))}))})(window);\n<\/script></head></html>')):s.endsWith("proxytown")&&n.respondWith((n=>new Promise((async i=>{const s=await n.clone().json(),o=await(r=>new Promise((async n=>{const i=[...await self.clients.matchAll()].sort(((e,t)=>e.url>t.url?-1:e.url<t.url?1:0))[0];if(i){const s=[n,setTimeout((()=>{e.delete(r.E),n(t(r,"Timeout"))}),1e4)];e.set(r.E,s),i.postMessage(r)}else n(t(r,"NoParty"))})))(s);i(r(JSON.stringify(o),"application/json"))})))(i))};
