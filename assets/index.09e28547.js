import{o as e,c as t,a as o,b as a,d as s,r,e as n,t as d,F as l,w as c,p as u,f as m,g as p,h as i,i as v,j as f,k as b}from"./vendor.3f265ac5.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const a=new URL(e,location),s=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,r)=>{const n=new URL(e,a);if(self[t].moduleMap[n])return o(self[t].moduleMap[n]);const d=new Blob([`import * as m from '${n}';`,`${t}.moduleMap['${n}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(d),onerror(){r(new Error(`Failed to import: ${e}`)),s(l)},onload(){o(self[t].moduleMap[n]),s(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("assets/");const h={};h.render=function(o,a){return e(),t("div",null,"这是Home")};const g=[{path:"/home",name:"Home",component:h}],_=o({history:a(),routes:g});var k=s({name:"HelloWorld",props:{msg:{type:String,required:!0}},setup:()=>({count:r(0)})});const j=c();u("data-v-b4948d22");const w=m('<p data-v-b4948d22> Recommended IDE setup: <a href="https://code.visualstudio.com/" target="_blank" data-v-b4948d22>VSCode</a> + <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank" data-v-b4948d22> Vetur </a> or <a href="https://github.com/johnsoncodehk/volar" target="_blank" data-v-b4948d22>Volar</a> (if using <code data-v-b4948d22>&lt;script setup&gt;</code>) </p><p data-v-b4948d22>See <code data-v-b4948d22>README.md</code> for more information.</p><p data-v-b4948d22><a href="https://vitejs.dev/guide/features.html" target="_blank" data-v-b4948d22> Vite Docs </a> | <a href="https://v3.vuejs.org/" target="_blank" data-v-b4948d22>Vue 3 Docs</a></p>',3),H=n("p",null,[p(" Edit "),n("code",null,"components/HelloWorld.vue"),p(" to test hot module replacement. ")],-1);i();const R=j(((o,a,s,r,c,u)=>(e(),t(l,null,[n("h1",null,d(o.msg),1),w,n("button",{onClick:a[1]||(a[1]=e=>o.count++)},"count is: "+d(o.count),1),H],64))));k.render=R,k.__scopeId="data-v-b4948d22";var V=s({name:"App",components:{HelloWorld:k}});const y=n("img",{alt:"Vue logo",src:"./assets/logo.03d6d6da.png"},null,-1),E=p(" Home ");V.render=function(o,a,s,r,d,c){const u=f("HelloWorld"),m=f("router-link"),p=f("router-view");return e(),t(l,null,[y,n(u,{msg:"Hello Vue 3 + TypeScript + Vite"}),n(m,{to:"/home"},{default:v((()=>[E])),_:1}),n(p)],64)},b(V).use(_).mount("#app");
