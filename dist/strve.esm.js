const e={_nHtml:[],_oHtml:[],_el:null,_data:null,_template:null,oldTree:null,isMounted:!1},t=new RegExp("{(.+?)}");function n(e,t){try{return t.split(".").reduce(((e,t)=>e[t]),e)}catch(e){return}}function r(n,l,o){const s=document.createElement(n.type);if(n.el=s,n.props)for(const r in n.props){if("string"==typeof n.props[r]&&t.test(n.props[r])){const l=t.exec(n.props[r])[1];n.props[r]=n.props[r].replace(t,e._data[l])}s.setAttribute(r,n.props[r])}n.children&&("string"==typeof n.children[0]?i(n.children[0],s):Array.isArray(n.children[0])?n.children[0].forEach((e=>{r(e,s)})):n.children.forEach((e=>{r(e,s)}))),o?l.insertBefore(s,o):l.appendChild(s)}function l(o,s){if(o.type!==s.type){const e=o.el.parentNode,t=o.el.nextSibling;return e.removeChild(o.el),void r(s,e,t)}const c=s.el=o.el,a=o.props||{},p=s.props||{};for(const r in p){let l=p[r],o=a[r];if(null!=l){if(l!==o){if(t.test(l)){const r=t.exec(l)[1];l=e._data.hasOwnProperty(r)?e._data[r]:n(e._data,r.toString())}c.setAttribute(r,l)}}else c.removeAttribute(r)}for(const e in a)e in p||c.removeAttribute(e);const h=o.children,u=s.children;if("string"==typeof u[0])i(u[0],c);else if("string"!==h[0])if(Array.isArray(h[0])&&Array.isArray(u[0])){for(let e=0;e<Math.min(h[0].length,u[0].length);e++)l(h[0][e],u[0][e]);u[0].length>h[0].length?u[0].slice(h[0].length).forEach((e=>r(e,c))):h[0].length>u[0].length&&h[0].slice(u[0].length).forEach((e=>{c.removeChild(e.el)}))}else{for(let e=0;e<Math.min(h.length,u.length);e++)l(h[e],u[e]);u.length>h.length?u.slice(h.length).forEach((e=>r(e,c))):h.length>u.length&&h.slice(u.length).forEach((e=>{c.removeChild(e.el)}))}else c.innerHTML="",u.forEach((e=>r(e,c)))}function o(e,n,r){e=e.replace(t,r),t.test(e)?i(e,n):n.textContent=e}function i(r,l){if(t.test(r)){const i=t.exec(r)[1];e._data.hasOwnProperty(i)?o(r,l,e._data[i]):o(r,l,n(e._data,i.toString()))}else l.textContent=r}function s(t,n){if(e.isMounted){const n=t;l(e.oldTree,n),e.oldTree=n}else r(e.oldTree=t,document.querySelector(n)),e.isMounted=!0}function c(e,t,n){return{el:e,event:t,cb:n}}function a(t,n){if(e._data=n.data,e._template=n.template,e._el=t,!t)throw Error("[Strve warn]:Please set el property!");if(!e._template().type)throw Error("[Strve warn]:Multiple root nodes returned from render function. Render function should return a single root node.");s(e._template(),t),function(e){for(let l=0;l<e.length;l++){const o=e[l];t=o.el,n=o.event,r=o.cb,o.isUpdate,document.querySelector(t).addEventListener(n,r)}var t,n,r}(n.ways)}async function p(t){"function"==typeof t&&(await t(),s(e._template(),e._el))}let h=function(e,t,n,r){let l;t[0]=0;for(let o=1;o<t.length;o++){let i=t[o++],s=t[o]?(t[0]|=i?1:2,n[t[o++]]):t[++o];3===i?r[0]=s:4===i?r[1]=Object.assign(r[1]||{},s):5===i?(r[1]=r[1]||{})[t[++o]]=s:6===i?r[1][t[++o]]+=s+"":i?(l=e.apply(s,h(e,s,n,["",null])),r.push(l),s[0]?t[0]|=2:(t[o-2]=0,t[o]=l)):r.push(s)}return r},u=new Map;const f=function(e){let t=u.get(this);return t||(t=new Map,u.set(this,t)),(t=h(this,t.get(e)||(t.set(e,t=function(e){let t,n,r,l=1,o="",i="",s=[0],c=0;for(r=function(e){1===l&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?s.push(0,e,o):3===l&&(e||o)?(s.push(3,e,o),l=2):2===l&&"..."===o&&e?s.push(4,e,0):2===l&&o&&!e?s.push(5,0,!0,o):l>=5&&((o||!e&&5===l)&&(s.push(l,0,o,n),l=6),e&&(s.push(l,e,0,n),l=6)),o=""};c<e.length;c++){c&&(1===l&&r(),r(c));for(let a=0;a<e[c].length;a++)t=e[c][a],1===l?"<"===t?(r(),s=[s],l=3):o+=t:4===l?"--"===o&&">"===t?(l=1,o=""):o=t+o[0]:i?t===i?i="":o+=t:'"'===t||"'"===t?i=t:">"===t?(r(),l=1):l&&("="===t?(l=5,n=o,o=""):"/"===t&&(l<5||">"===e[c][a+1])?(r(),3===l&&(s=s[0]),l=s,(s=s[0]).push(2,0,l),l=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(r(),l=2):o+=t),3===l&&"!--"===o&&(l=4,s=s[0])}return r(),s}(e)),t),arguments,[])).length>1?t:t[0]}.bind((function(e,t,...n){return{type:e,props:t,children:n}}));export{a as Strve,f as render,p as updateView,c as useEvent};
