import{b as u,g as $,a as r,i as a,r as d,t as _,d as m,c,T as b}from"./entry-client-4c9273e5.js";const p=_('<button class="increment">Clicks: <!#><!/>');function x(){const[t,l]=u(0);return(()=>{const e=$(p),i=e.firstChild,o=i.nextSibling,[s,n]=r(o.nextSibling);return e.$$click=()=>{l(t()+1),console.log(t())},a(e,t,s,n),d(),e})()}m(["click"]);const S=_('<main><!#><!/><h1>Hello world!</h1><!#><!/><p>Visit <a href="https://start.solidjs.com" target="_blank">start.solidjs.com</a> to learn how to build SolidStart apps.');function f(){return(()=>{const t=$(S),l=t.firstChild,[e,i]=r(l.nextSibling),o=e.nextSibling,s=o.nextSibling,[n,g]=r(s.nextSibling);return n.nextSibling,a(t,c(b,{children:"Hello World"}),e,i),a(t,c(x,{}),n,g),t})()}export{f as default};
