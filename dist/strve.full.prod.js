/*!
 * Strve.js v4.7.0
 * (c) 2021-2022 maomincoding
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Strve={})}(this,(function(e){"use strict";const t=i("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot"),n=i("svg,animate,circle,clippath,cursor,image,defs,desc,ellipse,filter,font-faceforeignobject,g,glyph,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feFlood,feGaussianBlur,feImage,feMerge,feMorphology,feOffset,feSpecularLighting,feTile,feTurbulence,feDistantLight,fePointLight,feSpotLight,linearGradient,stop,radialGradient,animateTransform,animateMotion");function o(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)}function r(e){return-1!==["object","array","function","regexp","date","math"].indexOf(l(e))}function l(e){return Object.prototype.toString.call(e).match(/\[object (.+?)\]/)[1].toLowerCase()}function i(e){const t=Object.create(null),n=e.split(",");for(let e=0;e<n.length;e++)t[n[e]]=!0;return function(e){return t[e]}}function s(e){if(e.hasOwnProperty("tag")&&e.hasOwnProperty("props")&&e.hasOwnProperty("children"))return!0}function a(e){if("array"===l(e)){for(let t=0;t<e.length;t++)if(s(e[t]))return!0}else if("object"===l(e))return s(e)}i("function,regexp,date,math,undefined,null,boolean,string,number,symbol,bigInt");const c=e=>("object"==typeof e||"function"==typeof e)&&null!==e;function u(e,t){if(!c(e)||!c(t))return e===t;if(e===t)return!0;const n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(const n in e){if(!u(e[n],t[n]))return!1}return!0}const f={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},p="http://www.w3.org/1999/xlink";function d(e,t){for(let n in t)e.style[n]=t[n]}function h(e,t,n){var r;if(o(t)?e.removeAttributeNS(p,o(r=t)?r.slice(6,r.length):""):e.removeAttribute(t),t.startsWith("on")){const o=t.split("on")[1][0].toLowerCase()+t.split("on")[1].substring(1);e.removeEventListener(o,n[t])}}function m(e){return t(e)?document.createElement(e):n(e)?(o=function(e){return n(e)?"svg":"math"===e?"math":void 0}(e),r=e,document.createElementNS(f[o],r)):"fragment"===e||"component"===e?document.createDocumentFragment():"comment"===e||"null"===e?document.createComment(e):(e.indexOf("-"),document.createElement(e));var o,r}function g(e){return e.tag?e:function(e){return{tag:"fragment",props:null,children:e}}(e)}const b=Object.create(null),y=new WeakMap,w=["$key","$name","$props"];let v="";const C=Object.create(null);let O=function e(t={}){if("object"!=typeof t||null===t)return t;const n={get(t,n,o){if(Reflect.ownKeys(t).includes(n)){const r=Reflect.get(t,n,o);return e(r)}},set(e,t,n,o){if(n===e[t])return!0;if(Reflect.ownKeys(e).includes(t)||Object.keys(b).includes(t)){return Reflect.set(e,t,n,o)}},deleteProperty:(e,t)=>Reflect.deleteProperty(e,t)};return new Proxy(t,n)}(Object.create(null));function j(e,t,n){if(e.tag){const r=m(e.tag);if(e.props){!function(e,t){for(let n=0;n<Object.keys(t).length;n++){const o=Object.keys(t)[n].toString();if(o.startsWith("on")){const n=o.split("on")[1][0].toLowerCase()+o.split("on")[1].substring(1);e.addEventListener(n,t[o])}}}(r,e.props),e.props.hasOwnProperty(w[0])&&(e.el=r,"string"===l(e.props[w[0]])&&(C[e.props[w[0]]]=r)),e.props.hasOwnProperty(w[1])&&(b[e.props[w[1]]]=Object.create(null),y.set(b[e.props[w[1]]],e.children[0])),e.props.hasOwnProperty(w[1])&&e.props.hasOwnProperty(w[2])&&(O[e.props[w[1]]]=e.props[w[2]]);for(const i in e.props)e.props.hasOwnProperty(i)&&("function"!==l(e.props[i])&&(o(i)?r.setAttributeNS(p,i,e.props[i]):w.includes(i)||r.setAttribute(i,e.props[i])),"object"===l(e.props[i])&&d(r,e.props[i]))}if(e.children){function a(){"array"===l(e.children[0])?e.children[0].forEach((e=>{s(e)&&j(e,r)})):"array"===l(e.children)&&e.children.forEach((e=>{s(e)&&j(e,r)}))}M(e.children,r,a)}n?t.insertBefore(r,n):t.appendChild(r)}}function k(e,t,n){const r=e.props||{};if(r.hasOwnProperty(w[0])&&e.tag!==t.tag){const i=e.el.parentNode,s=e.el.nextSibling;i.removeChild(e.el),j(t,i,s)}else{let a=null;if(r.hasOwnProperty(w[0])){const b=t.props||{};a=t.el=e.el;for(const y in b){let[v,C]=[b[y],r[y]];if(v!==C)if(null!==v)if("function"===l(v)||w.includes(y)){if(y.startsWith("on")){const O=y.split("on")[1][0].toLowerCase()+y.split("on")[1].substring(1);a.addEventListener(O,v,!1)}}else a[y]&&(a[y]=v),o(y)?a.setAttributeNS(p,y,v):a.setAttribute(y,v),"object"===l(v)&&d(a,v);else h(a,y,r)}for(const k in r)k in b||h(a,k,r)}const c=e.children[0],f=t.children[0],m=e.children,g=t.children;if(!u(m,g)){function S(){"array"!==l(c)&&"array"===l(f)?(a.innerHTML="",f.forEach((e=>j(e,a)))):"array"===l(c)&&"array"===l(f)?x(c,f,a,n):x(m,g,a,n)}M(g,a,S)}}}function x(e,t,n,o){if("useFirstKey"===o)for(let r=1;r<=Math.max(e.length,t.length);r++)e[e.length-r]?t[t.length-r]?k(e[e.length-r],t[t.length-r],o):n.removeChild(e[e.length-r].el):j(t[t.length-r],e[e.length-1].el.parentNode,e[0].el);else{for(let n=0;n<Math.min(e.length,t.length);n++)k(e[n],t[n],o);t.length>e.length?t.slice(e.length).forEach((e=>j(e,n))):e.length>t.length&&e.slice(t.length).forEach((e=>{n.removeChild(e.el)}))}}function M(e,t,n){1!==e.length||r(e[0])?e.length>1&&!a(e)?t&&S(e.join().replace(/,/g,""),t):!r(e[0])||e[0].tag||a(e[0])?n():t&&S(e[0],t):t&&S(e,t)}function S(e,t){r(e)?"function"===l(e)||"regexp"===l(e)||"array"===l(e)?t.textContent=String(e):t.textContent=JSON.stringify(e,null,2):t.textContent=e?e.toString():String(e)}let E=null;let T=null;let L=null;function P(e,t,n,o){if(A.isMounted){const t=g(e);k(A.oldTree,t,n),A.oldTree=t,o&&y.set(b[o],e)}else{const n=g(e);j(n,t),A.oldTree=n,A.isMounted=!0,E&&E()}}const A={_el:null,_template:null,oldTree:null,isMounted:!1,observer:null};function _(e){if("string"==typeof e){const t=document.querySelector(e);if(!t){let t=null;return e.startsWith("#")?(t=document.createElement("div"),t.setAttribute("id",e.substring(1,e.length))):e.startsWith(".")?(t=document.createElement("div"),t.setAttribute("class",e.substring(1,e.length))):console.warn(`[Strve warn]: Failed to mount app: mount target selector "${e}" returned null.`),document.body.insertAdjacentElement("afterbegin",t),t}return t}return e instanceof HTMLElement?e:window.ShadowRoot&&e instanceof window.ShadowRoot&&"closed"===e.mode?(console.warn('[Strve warn]: mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs.'),null):null}const R=(e,t,n,o)=>{let r;t[0]=0;for(let l=1;l<t.length;l++){const i=t[l++],s=t[l]?(t[0]|=i?1:2,n[t[l++]]):t[++l];3===i?o[0]=s:4===i?o[1]=Object.assign(o[1]||{},s):5===i?(o[1]=o[1]||{})[t[++l]]=s:6===i?o[1][t[++l]]+=s+"":i?(r=e.apply(s,R(e,s,n,["",null])),o.push(r),s[0]?t[0]|=2:(t[l-2]=0,t[l]=r)):o.push(s)}return o},N=function(e){let t,n,o=1,r="",l="",i=[0];const s=e=>{1===o&&(e||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?i.push(0,e,r):3===o&&(e||r)?(i.push(3,e,r),o=2):2===o&&"..."===r&&e?i.push(4,e,0):2===o&&r&&!e?i.push(5,0,!0,r):o>=5&&((r||!e&&5===o)&&(i.push(o,0,r,n),o=6),e&&(i.push(o,e,0,n),o=6)),r=""};for(let a=0;a<e.length;a++){a&&(1===o&&s(),s(a));for(let c=0;c<e[a].length;c++)t=e[a][c],1===o?"<"===t?(s(),i=[i],o=3):r+=t:4===o?"--"===r&&">"===t?(o=1,r=""):r=t+r[0]:l?t===l?l="":r+=t:'"'===t||"'"===t?l=t:">"===t?(s(),o=1):o&&("="===t?(o=5,n=r,r=""):"/"===t&&(o<5||">"===e[a][c+1])?(s(),3===o&&(i=i[0]),o=i,(i=i[0]).push(2,0,o),o=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(s(),o=2):r+=t),3===o&&"!--"===r&&(o=4,i=i[0])}return s(),i},D=new Map,W=function(e){let t=D.get(this);return t||(t=new Map,D.set(this,t)),t=R(this,t.get(e)||(t.set(e,t=N(e)),t),arguments,[]),t.length>1?t:t[0]}.bind((function(e,t,...n){return{tag:e,props:t,children:n}}));e.createApp=function(e){return{mount(t){if(_(t)){const n=e();A._template=e,A._el=_(t),A._el&&P(n,A._el)}else console.warn("[Strve warn]: There must be a mount element node.")}}},e.defineCustomElement=function(e){class t extends HTMLElement{constructor(){if(super(),e.template&&e.id){const t=document.createElement("template");t.setAttribute("id",e.id);const n=t.content.cloneNode(!0);if(e.styles&&Array.isArray(e.styles)){const t=document.createElement("style");t.textContent=e.styles.join(""),n.appendChild(t)}P(e.template,n);this.attachShadow({mode:"open"}).appendChild(n)}}connectedCallback(){const t=arguments;e.lifetimes&&e.lifetimes.connectedCallback(t)}disconnectedCallback(){const t=arguments;e.lifetimes&&e.lifetimes.disconnectedCallback(t)}adoptedCallback(){const t=arguments;e.lifetimes&&e.lifetimes.adoptedCallback(t)}attributeChangedCallback(){const t=arguments;e.lifetimes&&e.lifetimes.attributeChangedCallback(t)}}return t},e.domInfo=C,e.h=W,e.nextTick=function(e){L=e},e.onMounted=function(e){E=e},e.onUnmounted=function(e){T=e},e.propsData=O,e.setData=function(e,t){if("function"===l(e)&&"undefined"!==l(Promise))return Promise.resolve().then((()=>{e()})).then((()=>{if(t&&"useRouter"===t.status)T&&T(),A._el.innerHTML="",T=null,j(A.oldTree=A._template(),A._el),E&&E();else if(t&&"function"==typeof t.name){const e=t.name.name,n=t.name();v!==e&&(v=e,A.oldTree=g(y.get(b[e]))),P(n,A._el,t.status,e)}else{const e=t&&t.status?t.status:null;P(A._template(),A._el,e)}L&&L()})).catch((e=>console.error(e)))},e.version="4.7.0",Object.defineProperty(e,"__esModule",{value:!0})}));
