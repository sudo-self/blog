if(!self.define){let e,o={};const n=(n,s)=>(n=new URL(n+".js",s).href,o[n]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=o,document.head.appendChild(e)}else e=n,importScripts(n),o()})).then((()=>{let e=o[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(o[c])return;let r={};const t=e=>n(e,c),a={module:{uri:c},exports:r,require:t};o[c]=Promise.all(s.map((e=>a[e]||t(e)))).then((e=>(i(...e),r)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_payload.json",revision:"625c6b84557cbc3e4694a0b63ee2a810"},{url:"about/_payload.json",revision:"6949ea8c4cd9439ab9a88d42f73936fd"},{url:"clock/_payload.json",revision:"e493103dc214ee86503a2b9c20aa10f1"},{url:"contact/_payload.json",revision:"fd57f7169750362b7a94dbb371e9ce20"},{url:"edge/_payload.json",revision:"059bc76ead6d6acec1eb34351ccaf6e3"},{url:"_nuxt/builds/latest.json",revision:null},{url:"_nuxt/builds/meta/41d450b3-b98c-443c-b656-42c09c9393e3.json",revision:null},{url:"manifest.webmanifest",revision:"add437e2b9a53a744ca3a10b1d0db828"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));
