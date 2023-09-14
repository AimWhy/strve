/*!
 * Strve.js v6.0.1
 * (c) 2021-2023 maomincoding
 * Released under the MIT License.
 */
const e=o("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot"),t=o("svg,animate,circle,clippath,cursor,image,defs,desc,ellipse,filter,font-faceforeignobject,g,glyph,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feFlood,feGaussianBlur,feImage,feMerge,feMorphology,feOffset,feSpecularLighting,feTile,feTurbulence,feDistantLight,fePointLight,feSpotLight,linearGradient,stop,radialGradient,animateTransform,animateMotion");function n(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)}function o(e){const t=Object.create(null),n=e.split(",");for(let e=0;e<n.length;e++)t[n[e]]=!0;return function(e){return t[e]}}function r(e){return-1!==["object","array","function","regexp","date","math"].indexOf(s(e))}function s(e){return Object.prototype.toString.call(e).match(/\[object (.+?)\]/)[1].toLowerCase()}function l(e){return null==e}function i(e,t){return e.tag===t.tag&&e.key===t.key}function a(e){if(e)return e.hasOwnProperty("tag")&&e.hasOwnProperty("props")&&e.hasOwnProperty("children")&&e.hasOwnProperty("key")&&e.hasOwnProperty("el")}function c(e){return"array"===s(e)?function(e){for(let t=0;t<e.length;t++)return a(e[t])}(e):"object"===s(e)?a(e):void 0}const u=e=>("object"==typeof e||"function"==typeof e)&&null!==e;function f(e,t){if(!u(e)||!u(t))return e===t;if(e===t)return!0;const n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(const n in e){if(!f(e[n],t[n]))return!1}return!0}const p={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},d="http://www.w3.org/1999/xlink";function h(e,t){for(let n in t)e.style[n]=t[n]}function m(e,t){for(let n=0;n<Object.keys(t).length;n++){const o=Object.keys(t)[n].toString();if(o.startsWith("on")){const n=o.split("on")[1][0].toLowerCase()+o.split("on")[1].substring(1);e.addEventListener(n,t[o])}else if(o.startsWith("@")){const n=o.split("@")[1];e.addEventListener(n,t[o])}}}function g(e,t,n){if(t.startsWith("on")){const o=t.split("on")[1][0].toLowerCase()+t.split("on")[1].substring(1);e.removeEventListener(o,n[t])}else if(t.startsWith("@")){const o=t.split("@")[1];e.removeEventListener(o,n[t])}}function b(e,t,o){var r;n(t)?e.removeAttributeNS(d,n(r=t)?r.slice(6,r.length):""):e.removeAttribute(t),g(e,t,o)}function y(n){return e(n)?document.createElement(n):t(n)?(o=function(e){return t(e)?"svg":"math"===e?"math":void 0}(n),r=n,document.createElementNS(p[o],r)):"fragment"===n||"component"===n?document.createDocumentFragment():"comment"===n||"null"===n?document.createComment(n):(n.indexOf("-"),document.createElement(n));var o,r}const w=["$ref","$name","$props"],C=Object.create(null),v=new WeakMap;let O="",k=[],j=[];const S=Object.create(null);let M=function e(t={}){if("object"!=typeof t||null===t)return t;const n={get(t,n,o){if(Reflect.ownKeys(t).includes(n)){const r=Reflect.get(t,n,o);return e(r)}if("symbol"==typeof n){const r=Reflect.get(t,n,o);return e(r)}},set(e,t,n,o){if(n===e[t])return!0;if(Reflect.ownKeys(e).includes(t)||Object.keys(C).includes(t)){return Reflect.set(e,t,n,o)}if("symbol"==typeof t){return Reflect.set(e,t,n,o)}},deleteProperty:(e,t)=>Reflect.deleteProperty(e,t)};return new Proxy(t,n)}(Object.create(null));function x(e,t){if(r(e))if("array"===s(e))if(e.length>1){let n="";for(let t=0;t<e.length;t++){const o=e[t];n+=r(o)?JSON.stringify(o):o}t.textContent=n}else if(0===e.length)t.textContent="";else{const n=JSON.stringify(e).replace(/,/g,"");t.textContent=n}else t.textContent=JSON.stringify(e);else t.textContent=e.toString()}function P(e,t,o){if(!l(e.tag)){const r=y(e.tag);if(e.el=r,!l(e.props)){m(r,e.props),e.props.hasOwnProperty(w[0])&&"string"===s(e.props[w[0]])&&(S[e.props[w[0]]]=r),e.props.hasOwnProperty(w[1])&&(C[e.props[w[1]]]=Object.create(null),v.set(C[e.props[w[1]]],e.children)),e.props.hasOwnProperty(w[1])&&e.props.hasOwnProperty(w[2])&&(M[e.props[w[1]]]=e.props[w[2]]);for(const t in e.props)e.props.hasOwnProperty(t)&&("function"===s(e.props[t])||e.props.hasOwnProperty("key")||(n(t)?r.setAttributeNS(d,t,e.props[t]):w.includes(t)||r.setAttribute(t,e.props[t])),"object"===s(e.props[t])&&h(r,e.props[t]))}if(!l(e.children)){const t=e.children;if(c(t))if("array"===s(t))for(let e=0;e<t.length;e++){const n=t[e];a(n)&&P(n,r)}else"object"===s(t)&&P(t,r);else r&&x(t,r)}if(o)t.insertBefore(r,o);else{if(!t)return r;t.appendChild(r)}}}function T(e,t){if(i(e,t)){const o=t.el=e.el,r=e.props||{},u=t.props||{};for(const e in u){const t=u[e],i=r[e];t!==i&&(l(t)?b(o,e,r):"function"===s(t)||u.hasOwnProperty("key")?"function"===s(t)&&t.toString()!==i.toString()&&(g(o,e,r),m(o,u)):(o[e]&&(o[e]=t),n(e)?o.setAttributeNS(d,e,t):o.setAttribute(e,t),"object"===s(t)&&h(o,t)))}for(const e in r)e in u||b(o,e,r);const p=e.children,y=t.children;c(p)||c(y)||f(p,y)?a(p)&&a(y)?T(p,y):"array"===s(p)&&"array"===s(y)&&function(e,t,n){let o=0,r=0,s=e.length-1,a=t.length-1,c=e[0],u=t[0],f=e[s],p=t[a],d={};for(;o<=s&&r<=a;)if(l(c))c=e[++o];else if(l(f))f=e[--s];else if(i(c,u))T(c,u),c=e[++o],u=t[++r];else if(i(f,p))T(f,p),f=e[--s],p=t[--a];else if(i(c,p))n.insertBefore(c.el,f.el.nextSibling),T(c,p),c=e[++o],p=t[--a];else if(i(f,u))n.insertBefore(f.el,c.el),T(f,u),f=e[--s],u=t[++r];else{if(!d){d={};for(let t=o;t<=s;t++)d[e[t].key]=t}const i=d[u.key];if(l(i))n.insertBefore(P(u),c.el);else{const t=e[i];n.insertBefore(t.el,c.el),T(t,u),e[i]=void 0}u=t[++r]}if(r<=a)for(let e=r;e<=a;e++){const o=t[a+1]?.el||null;n.insertBefore(P(t[e]),o)}else if(o<=s)for(let t=o;t<=s;t++)n.removeChild(e[t].el)}(p,y,o):o&&x(y,o)}else{const n=e.el.parentNode,o=e.el.nextSibling;n.removeChild(e.el),P(t,n,o)}}function E(e=null){null!==e&&("function"==typeof e?k.push(e):console.error("[Strve warn]: The parameter of onMounted is not a function!"))}function L(e=null){null!==e&&("function"==typeof e?j.push(e):console.error("[Strve warn]: The parameter of onUnmounted is not a function!"))}const A="undefined"!==s(Promise)&&Promise.resolve(),R=e=>A.then(e);function _(e,t,n){if($.isMounted){const t=e;T($.oldTree,t),$.oldTree=t,n&&v.set(C[n],e)}else{if(P(e,t),$.oldTree=e,$.isMounted=!0,k.length>0)for(let e=0,t=k.length;e<t;e++)k[e]&&k[e]();k=[]}}function N(e,t){if("function"===s(e)&&"undefined"!==s(Promise))return Promise.resolve().then((()=>{e()})).then((()=>{if(t&&"useRouter"===t.status){if(j.length>0)for(let e=0,t=j.length;e<t;e++)j[e]&&j[e]();j=[],$.isMounted=!1,$._el.innerHTML="";_($._template(),$._el)}else if(t&&"useCustomElement"===t.name){const e=v.get(C[t.customElement.id]).template,n=v.get(C[t.customElement.id]).props;T(e,t.customElement.template(n))}else if(t&&"function"==typeof t.name){const e=t.name.name,n=t.name();O!==e&&(O=e,$.oldTree=v.get(C[e])),_(n,null,e)}else _($._template(),null)})).catch((e=>console.error(e)))}function B(e,t){class n extends HTMLElement{shadow;props;isComMounted;comOldTree;static get observedAttributes(){if(e.attributeChanged&&e.attributeChanged.length>0)return e.attributeChanged}constructor(){if(super(),this.shadow=null,this.props=Object.create(null),this.isComMounted=!1,this.comOldTree=Object.create(null),e.template&&e.id){const t=document.createElement("template");t.setAttribute("id",e.id);const n=t.content.cloneNode(!0);if(e.styles&&Array.isArray(e.styles)){const t=document.createElement("style");t.textContent=e.styles.join(""),n.appendChild(t)}if(this.shadow=this.attachShadow({mode:"open"}),this.shadow.appendChild(n),!e.attributeChanged){const t=e.template();P(t,this.shadow),C[e.id]=Object.create(null),v.set(C[e.id],{template:t,props:null})}}}connectedCallback(){const t=arguments;e.lifetimes&&"function"==typeof e.lifetimes.connectedCallback&&e.lifetimes.connectedCallback(t)}disconnectedCallback(){const t=arguments;e.lifetimes&&"function"==typeof e.lifetimes.disconnectedCallback&&e.lifetimes.disconnectedCallback(t)}adoptedCallback(){const t=arguments;e.lifetimes&&"function"==typeof e.lifetimes.adoptedCallback&&e.lifetimes.adoptedCallback(t)}attributeChangedCallback(){const t=arguments;if(e.attributeChanged&&e.attributeChanged.length>0){this.props[t[0]]=t[2];const n=e.template(this.props);this.isComMounted?(T(this.comOldTree,n),v.set(C[e.id],{template:n,props:this.props}),this.comOldTree=n):(P(n,this.shadow),C[e.id]=Object.create(null),v.set(C[e.id],{template:n,props:this.props}),this.comOldTree=n,this.isComMounted=!0)}e.immediateProps&&e.lifetimes&&"function"==typeof e.lifetimes.attributeChangedCallback&&e.lifetimes.attributeChangedCallback(t)}}"string"==typeof t&&-1!==t.indexOf("-")?customElements.define(t,n):console.error(`[Strve warn]: [${t}]>> please name the string with "-" as a custom element. `)}const W="6.0.1",$={_el:null,_template:null,oldTree:null,isMounted:!1};function D(e){if("string"==typeof e){const t=document.querySelector(e);if(!t){let t=null;return e.startsWith("#")?(t=document.createElement("div"),t.setAttribute("id",e.substring(1,e.length))):e.startsWith(".")?(t=document.createElement("div"),t.setAttribute("class",e.substring(1,e.length))):console.warn(`[Strve warn]: Failed to mount app: mount target selector "${e}" returned null.`),document.body.insertAdjacentElement("afterbegin",t),t}return t}return e instanceof HTMLElement?e:window.ShadowRoot&&e instanceof window.ShadowRoot&&"closed"===e.mode?(console.warn('[Strve warn]: mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs.'),null):null}function q(e){return{mount(t){if(D(t)){const n=e();"array"===s(n)?console.error("[Strve warn]: Please provide a root node."):($._template=e,$._el=D(t),$._el&&_(n,$._el))}else console.error("[Strve warn]: There must be a mount element node.")}}}const F=(e,t,n,o)=>{let r;t[0]=0;for(let s=1;s<t.length;s++){const l=t[s++],i=t[s]?(t[0]|=l?1:2,n[t[s++]]):t[++s];3===l?o[0]=i:4===l?o[1]=Object.assign(o[1]||{},i):5===l?(o[1]=o[1]||{})[t[++s]]=i:6===l?o[1][t[++s]]+=i+"":l?(r=e.apply(i,F(e,i,n,["",null])),o.push(r),i[0]?t[0]|=2:(t[s-2]=0,t[s]=r)):o.push(i)}return o},G=new Map,H=function(e){let t=G.get(this);return t||(t=new Map,G.set(this,t)),t=F(this,t.get(e)||(t.set(e,t=function(e){let t,n,o=1,r="",s="",l=[0];const i=e=>{1===o&&(e||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(0,e,r):3===o&&(e||r)?(l.push(3,e,r),o=2):2===o&&"..."===r&&e?l.push(4,e,0):2===o&&r&&!e?l.push(5,0,!0,r):o>=5&&((r||!e&&5===o)&&(l.push(o,0,r,n),o=6),e&&(l.push(o,e,0,n),o=6)),r=""};for(let a=0;a<e.length;a++){a&&(1===o&&i(),i(a));for(let c=0;c<e[a].length;c++)t=e[a][c],1===o?"<"===t?(i(),l=[l],o=3):r+=t:4===o?"--"===r&&">"===t?(o=1,r=""):r=t+r[0]:s?t===s?s="":r+=t:'"'===t||"'"===t?s=t:">"===t?(i(),o=1):o&&("="===t?(o=5,n=r,r=""):"/"===t&&(o<5||">"===e[a][c+1])?(i(),3===o&&(l=l[0]),o=l,(l=l[0]).push(2,0,o),o=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(i(),o=2):r+=t),3===o&&"!--"===r&&(o=4,l=l[0])}return i(),l}(e)),t),arguments,[]),t.length>1?t:t[0]}.bind((function(e,t,n){let o=null,r=null,s=null;for(r in t)"key"===r&&(o=t[r]);return arguments.length>2&&(s=arguments.length>3?Array.prototype.slice.call(arguments,2):n),{tag:e,props:t,children:s,key:o,el:null}}));export{q as createApp,B as defineCustomElement,S as domInfo,H as html,R as nextTick,E as onMounted,L as onUnmounted,M as propsData,N as setData,W as version};
