/*!
 * Strve.js v5.6.0
 * (c) 2021-2023 maomincoding
 * Released under the MIT License.
 */
const e=i("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot"),t=i("svg,animate,circle,clippath,cursor,image,defs,desc,ellipse,filter,font-faceforeignobject,g,glyph,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feFlood,feGaussianBlur,feImage,feMerge,feMorphology,feOffset,feSpecularLighting,feTile,feTurbulence,feDistantLight,fePointLight,feSpotLight,linearGradient,stop,radialGradient,animateTransform,animateMotion");function n(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)}function o(e){return-1!==["object","array","function","regexp","date","math"].indexOf(r(e))}function r(e){return Object.prototype.toString.call(e).match(/\[object (.+?)\]/)[1].toLowerCase()}function i(e){const t=Object.create(null),n=e.split(",");for(let e=0;e<n.length;e++)t[n[e]]=!0;return function(e){return t[e]}}function l(e){if(e.hasOwnProperty("tag")&&e.hasOwnProperty("props")&&e.hasOwnProperty("children"))return!0}function s(e){if("array"===r(e)){for(let t=0;t<e.length;t++)if(l(e[t]))return!0}else if("object"===r(e))return l(e)}i("function,regexp,date,math,undefined,null,boolean,string,number,symbol,bigInt");const a=e=>("object"==typeof e||"function"==typeof e)&&null!==e;function c(e,t){if(!a(e)||!a(t))return e===t;if(e===t)return!0;const n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(const n in e){if(!c(e[n],t[n]))return!1}return!0}const u={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},p="http://www.w3.org/1999/xlink";function d(e,t){for(let n in t)e.style[n]=t[n]}function f(e,t,o){var r;if(n(t)?e.removeAttributeNS(p,n(r=t)?r.slice(6,r.length):""):e.removeAttribute(t),t.startsWith("on")){const n=t.split("on")[1][0].toLowerCase()+t.split("on")[1].substring(1);e.removeEventListener(n,o[t])}else if(t.startsWith("@")){const n=t.split("@")[1];e.removeEventListener(n,o[t])}}function h(n){return e(n)?document.createElement(n):t(n)?(o=function(e){return t(e)?"svg":"math"===e?"math":void 0}(n),r=n,document.createElementNS(u[o],r)):"fragment"===n||"component"===n?document.createDocumentFragment():"comment"===n||"null"===n?document.createComment(n):(n.indexOf("-"),document.createElement(n));var o,r}function m(e){return e.tag?e:function(e){return{tag:"fragment",props:null,children:e}}(e)}const g=Object.create(null),b=new WeakMap,y=["$key","$name","$props"];let w="";const C=Object.create(null);let v=function e(t={}){if("object"!=typeof t||null===t)return t;const n={get(t,n,o){if(Reflect.ownKeys(t).includes(n)){const r=Reflect.get(t,n,o);return e(r)}},set(e,t,n,o){if(n===e[t])return!0;if(Reflect.ownKeys(e).includes(t)||Object.keys(g).includes(t)){return Reflect.set(e,t,n,o)}},deleteProperty:(e,t)=>Reflect.deleteProperty(e,t)};return new Proxy(t,n)}(Object.create(null));function O(e,t,o){if(e.tag){const i=h(e.tag);if(e.props){!function(e,t){for(let n=0;n<Object.keys(t).length;n++){const o=Object.keys(t)[n].toString();if(o.startsWith("on")){const n=o.split("on")[1][0].toLowerCase()+o.split("on")[1].substring(1);e.addEventListener(n,t[o])}else if(o.startsWith("@")){const n=o.split("@")[1];e.addEventListener(n,t[o])}}}(i,e.props),e.props.hasOwnProperty(y[0])&&(e.el=i,"string"===r(e.props[y[0]])&&(C[e.props[y[0]]]=i)),e.props.hasOwnProperty(y[1])&&(g[e.props[y[1]]]=Object.create(null),b.set(g[e.props[y[1]]],e.children[0])),e.props.hasOwnProperty(y[1])&&e.props.hasOwnProperty(y[2])&&(v[e.props[y[1]]]=e.props[y[2]]);for(const t in e.props)e.props.hasOwnProperty(t)&&("function"!==r(e.props[t])&&(n(t)?i.setAttributeNS(p,t,e.props[t]):y.includes(t)||i.setAttribute(t,e.props[t])),"object"===r(e.props[t])&&d(i,e.props[t]))}if(e.children){E(e.children,i,(function(){"array"===r(e.children[0])?e.children[0].forEach((e=>{l(e)&&O(e,i)})):"array"===r(e.children)&&e.children.forEach((e=>{l(e)&&O(e,i)}))}))}o?t.insertBefore(i,o):t.appendChild(i)}}function k(e,t,o){const i=e.props||{};if(i.hasOwnProperty(y[0])&&e.tag!==t.tag){const n=e.el.parentNode,o=e.el.nextSibling;n.removeChild(e.el),O(t,n,o)}else{let l=null;if(i.hasOwnProperty(y[0])){const o=t.props||{};l=t.el=e.el;for(const e in o){let[t,s]=[o[e],i[e]];if(t!==s)if(null!==t)if("function"===r(t)||y.includes(e)){if(e.startsWith("on")){const n=e.split("on")[1][0].toLowerCase()+e.split("on")[1].substring(1);l.addEventListener(n,t,!1)}}else l[e]&&(l[e]=t),n(e)?l.setAttributeNS(p,e,t):l.setAttribute(e,t),"object"===r(t)&&d(l,t);else f(l,e,i)}for(const e in i)e in o||f(l,e,i)}const s=e.children[0],a=t.children[0],u=e.children,h=t.children;if(!c(u,h)){E(h,l,(function(){"array"!==r(s)&&"array"===r(a)?(l.innerHTML="",a.forEach((e=>O(e,l)))):"array"===r(s)&&"array"===r(a)?j(s,a,l,o):j(u,h,l,o)}))}}}function j(e,t,n,o){if("useFirstKey"===o)for(let r=1;r<=Math.max(e.length,t.length);r++)e[e.length-r]?t[t.length-r]?k(e[e.length-r],t[t.length-r],o):n.removeChild(e[e.length-r].el):O(t[t.length-r],e[e.length-1].el.parentNode,e[0].el);else{for(let n=0;n<Math.min(e.length,t.length);n++)k(e[n],t[n],o);t.length>e.length?t.slice(e.length).forEach((e=>O(e,n))):e.length>t.length&&e.slice(t.length).forEach((e=>{n.removeChild(e.el)}))}}function E(e,t,n){1!==e.length||o(e[0])?e.length>1&&!s(e)?t&&M(e.join().replace(/,/g,""),t):!o(e[0])||e[0].tag||s(e[0])?n():t&&M(e[0],t):t&&M(e,t)}function M(e,t){o(e)?"function"===r(e)||"regexp"===r(e)||"array"===r(e)?t.textContent=String(e):t.textContent=JSON.stringify(e,null,2):t.textContent=e?e.toString():String(e)}let x=null;function S(e){x=e}let L=null;function P(e){L=e}const T="undefined"!==r(Promise)&&Promise.resolve(),A=e=>T.then(e);function _(e,t,n,o){if($.isMounted){const t=m(e);k($.oldTree,t,n),$.oldTree=t,o&&b.set(g[o],e)}else{const n=m(e);O(n,t),$.oldTree=n,$.isMounted=!0,x&&x(),x=null}}function R(e,t){if("function"===r(e)&&"undefined"!==r(Promise))return Promise.resolve().then((()=>{e()})).then((()=>{if(t&&"useRouter"===t.status){L&&L(),L=null,$.isMounted=!1,$._el.innerHTML="";_($._template(),$._el)}else if(t&&"useCustomElement"===t.name){const e=b.get(g[t.customElement.id]).template,n=b.get(g[t.customElement.id]).props;k(e,m(t.customElement.template(n)),t.status)}else if(t&&"function"==typeof t.name){const e=t.name.name,n=t.name();w!==e&&(w=e,$.oldTree=m(b.get(g[e]))),_(n,null,t.status,e)}else{const e=t&&t.status?t.status:null;_($._template(),null,e)}})).catch((e=>console.error(e)))}function N(e,t){class n extends HTMLElement{shadow;props;isComMounted;comOldTree;static get observedAttributes(){if(e.attributeChanged&&e.attributeChanged.length>0)return e.attributeChanged}constructor(){if(super(),this.shadow=null,this.props=Object.create(null),this.isComMounted=!1,this.comOldTree=Object.create(null),e.template&&e.id){const t=document.createElement("template");t.setAttribute("id",e.id);const n=t.content.cloneNode(!0);if(e.styles&&Array.isArray(e.styles)){const t=document.createElement("style");t.textContent=e.styles.join(""),n.appendChild(t)}if(this.shadow=this.attachShadow({mode:"open"}),this.shadow.appendChild(n),!e.attributeChanged){const t=m(e.template());O(t,this.shadow),g[e.id]=Object.create(null),b.set(g[e.id],{template:t,props:null})}}}connectedCallback(){const t=arguments;e.lifetimes&&"function"==typeof e.lifetimes.connectedCallback&&e.lifetimes.connectedCallback(t)}disconnectedCallback(){const t=arguments;e.lifetimes&&"function"==typeof e.lifetimes.disconnectedCallback&&e.lifetimes.disconnectedCallback(t)}adoptedCallback(){const t=arguments;e.lifetimes&&"function"==typeof e.lifetimes.adoptedCallback&&e.lifetimes.adoptedCallback(t)}attributeChangedCallback(){const t=arguments;if(e.attributeChanged&&e.attributeChanged.length>0){this.props[t[0]]=t[2];const n=m(e.template(this.props));this.isComMounted?(k(this.comOldTree,n),b.set(g[e.id],{template:n,props:this.props}),this.comOldTree=n):(O(n,this.shadow),g[e.id]=Object.create(null),b.set(g[e.id],{template:n,props:this.props}),this.comOldTree=n,this.isComMounted=!0)}e.immediateProps&&e.lifetimes&&"function"==typeof e.lifetimes.attributeChangedCallback&&e.lifetimes.attributeChangedCallback(t)}}"string"==typeof t&&-1!==t.indexOf("-")?customElements.define(t,n):console.warn(`[Strve warn]: [${t}]>> please name the string with "-" as a custom element. `)}const W="5.6.0",$={_el:null,_template:null,oldTree:null,isMounted:!1,observer:null};function D(e){if("string"==typeof e){const t=document.querySelector(e);if(!t){let t=null;return e.startsWith("#")?(t=document.createElement("div"),t.setAttribute("id",e.substring(1,e.length))):e.startsWith(".")?(t=document.createElement("div"),t.setAttribute("class",e.substring(1,e.length))):console.warn(`[Strve warn]: Failed to mount app: mount target selector "${e}" returned null.`),document.body.insertAdjacentElement("afterbegin",t),t}return t}return e instanceof HTMLElement?e:window.ShadowRoot&&e instanceof window.ShadowRoot&&"closed"===e.mode?(console.warn('[Strve warn]: mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs.'),null):null}function F(e){return{mount(t){if(D(t)){const n=e();$._template=e,$._el=D(t),$._el&&_(n,$._el)}else console.warn("[Strve warn]: There must be a mount element node.")}}}export{F as createApp,N as defineCustomElement,C as domInfo,A as nextTick,S as onMounted,P as onUnmounted,v as propsData,R as setData,W as version};
