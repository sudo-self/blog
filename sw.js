if(!self.define){let e,o={};const n=(n,s)=>(n=new URL(n+".js",s).href,o[n]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=o,document.head.appendChild(e)}else e=n,importScripts(n),o()})).then((()=>{let e=o[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(o[r])return;let t={};const a=e=>n(e,r),d={module:{uri:r},exports:t,require:a};o[r]=Promise.all(s.map((e=>d[e]||a(e)))).then((e=>(i(...e),t)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_payload.json",revision:"955b89dbfebde382d7e73767b3c1cc0e"},{url:"about/_payload.json",revision:"9c0be3b97a8baead763007da39bde430"},{url:"clock/_payload.json",revision:"70fb5a2496221d20463c4b2506572a76"},{url:"contact/_payload.json",revision:"0d6d510a80091e1cf6d7769aaeb0490e"},{url:"ip-tool/_payload.json",revision:"87b231007220ba2ce61f609d34100e2a"},{url:"_nuxt/builds/latest.json",revision:null},{url:"_nuxt/builds/meta/d2cfc119-0fa6-4ab9-bf8c-fd005deb97ee.json",revision:null},{url:"manifest.webmanifest",revision:"add437e2b9a53a744ca3a10b1d0db828"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));
