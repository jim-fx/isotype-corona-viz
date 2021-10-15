import{C as ve,J as he,K as Se,S as le,i as ne,s as ae,e as C,c as b,a as w,d as c,b as I,f as g,I as M,t as O,k as A,g as z,n as $,L as H,H as V,h as de,j as J,m as R,M as pe,o as q,x as L,u as S,v as K,N as je,r as G,w as Y,O as ge,P as se,Q as ie,R as oe,T as Ce,U as re,V as Ae,W as $e,l as x}from"../chunks/vendor-9bc53f8b.js";var Ne=(a,e)=>{a="local-store-"+a;{let l=e;if(a in localStorage)try{l=JSON.parse(localStorage.getItem(a))}catch(t){console.log(t)}const n=ve(l);return n.subscribe(t=>{localStorage.setItem(a,JSON.stringify(t))}),n}};const be=ve(!1),we=Ne("selectedCountries",[]),Pe={};async function Te(a){be.set(!0);const l=await(await fetch(a)).json();return be.set(!1),l}async function ye(a,e){let l=Pe[a];return l||(l=await Te("/data/"+a),e&&e.length?l.filter(n=>e.includes(n.country)):l)}he.registerLocale(Se);var ue=a=>he.getName(a,"en",{select:"official"})||a,He=`<svg viewBox="0 0 148 151" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.15894 127.3L130.847 53.84C132.516 53.0337 134.412 52.8257 136.217 53.251C138.022 53.6763 139.625 54.7089 140.759 56.1759L146.008 66.0885C146.559 66.8261 146.938 67.6772 147.12 68.5799C147.301 69.4826 147.279 70.4144 147.055 71.3075C146.832 72.2007 146.412 73.0328 145.827 73.7436C145.241 74.4544 144.505 75.026 143.672 75.417L15.9838 149.462C15.1836 149.899 14.3035 150.171 13.396 150.261C12.4884 150.351 11.5721 150.257 10.7016 149.985C9.8311 149.713 9.02421 149.269 8.32904 148.679C7.63388 148.088 7.06467 147.364 6.65534 146.549L0.823043 137.221C0.0167642 135.551 -0.191161 133.655 0.234111 131.851C0.659383 130.046 1.69201 128.442 3.15894 127.308V127.3ZM126.766 45.6718C126.182 48.5842 121.517 47.4238 122.686 44.5039C131.43 13.0217 102.86 34.0075 101.117 14.1827C99.9486 2.51828 111.029 -3.30632 112.197 1.94188C112.781 4.27768 101.7 8.94188 106.948 17.1026C107.944 18.2475 109.218 19.1169 110.647 19.6269C112.076 20.137 113.613 20.2706 115.108 20.015C134.35 19.431 126.773 45.6725 126.773 45.6725L126.766 45.6718ZM118.021 40.4236C118.139 41.0287 118.021 41.6561 117.69 42.1764C117.359 42.6966 116.841 43.0702 116.243 43.2199C115.645 43.3697 115.012 43.2843 114.475 42.9813C113.938 42.6784 113.538 42.1809 113.357 41.5916C109.861 36.3434 103.444 36.9274 103.444 34.5916C103.444 33.4236 104.028 32.2557 105.196 32.2557C110.444 31.0877 116.276 35.752 118.021 40.4157L118.021 40.4236ZM136.094 74.2415C132.598 75.4095 129.094 71.9056 129.678 68.4093C128.327 68.1651 127.11 67.4398 126.252 66.3676C125.395 65.2953 124.955 63.9488 125.014 62.5771L38.1372 112.716L46.2978 126.708L136.087 74.2341L136.094 74.2415Z" fill="black"/>
</svg>

`,Ze=`<svg  viewBox="0 0 210 271" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M104.747 63.8446C98.4329 63.8447 92.2608 61.9724 87.0109 58.4646C81.761 54.9568 77.6693 49.9711 75.253 44.1378C72.8368 38.3045 72.2046 31.8857 73.4364 25.6931C74.6682 19.5005 77.7086 13.8122 82.1733 9.34761C86.6379 4.88302 92.3262 1.84262 98.5188 0.610906C104.711 -0.620812 111.13 0.011471 116.964 2.4278C122.797 4.84412 127.783 8.93596 131.29 14.1859C134.798 19.4358 136.67 25.608 136.67 31.9219C136.668 40.3876 133.304 48.5058 127.317 54.492C121.331 60.4781 113.213 63.8422 104.747 63.8446H104.747ZM208.283 73.9228C206.385 69.8669 203.02 66.6822 198.865 65.0117C194.711 63.3412 190.077 63.3094 185.9 64.9228L142.973 82.618H142.961C136.107 85.1127 128.869 86.3936 121.575 86.4031H87.9177C80.6231 86.3936 73.3859 85.1127 66.531 82.618L23.745 64.9813C19.5681 63.3679 14.9345 63.3997 10.78 65.0702C6.62557 66.7407 3.25978 69.9254 1.36235 73.9813C0.456273 76.1057 -0.00773531 78.3924 -0.00140085 80.702C0.00493361 83.0115 0.481478 85.2956 1.39919 87.4151C2.31691 89.5345 3.65657 91.4449 5.33654 93.0297C7.01651 94.6146 9.0016 95.8409 11.1708 96.6337L52.5498 113.755C55.8483 114.96 58.6965 117.15 60.7088 120.028C62.7211 122.906 63.8001 126.333 63.7998 129.845V160.712C63.8088 162.759 63.4516 164.791 62.7451 166.712L23.7451 246.272C22.1242 250.448 22.1523 255.085 23.8235 259.241C25.4948 263.397 28.6843 266.763 32.7451 268.654C34.8696 269.56 37.1563 270.024 39.4658 270.018C41.7754 270.012 44.0595 269.535 46.1789 268.617C48.2984 267.7 50.2087 266.36 51.7936 264.68C53.3785 263 54.6047 261.015 55.3975 258.846L88.6915 194.64C89.8968 191.351 92.083 188.512 94.9544 186.506C97.8258 184.5 101.244 183.424 104.747 183.424C108.249 183.424 111.667 184.5 114.539 186.506C117.41 188.512 119.596 191.351 120.802 194.64L153.979 257.91C155.431 262.141 158.433 265.664 162.38 267.769C166.327 269.874 170.925 270.405 175.248 269.253C177.458 268.578 179.507 267.459 181.27 265.964C183.033 264.47 184.472 262.631 185.5 260.561C186.528 258.491 187.123 256.233 187.248 253.926C187.373 251.618 187.026 249.309 186.228 247.14L146.748 166.563C146.042 164.642 145.685 162.61 145.693 160.563V129.849C145.693 126.337 146.772 122.91 148.785 120.032C150.797 117.154 153.645 114.964 156.943 113.759L198.463 96.579C200.632 95.7852 202.617 94.5587 204.297 92.9739C205.976 91.3891 207.316 89.4791 208.235 87.3603C209.153 85.2414 209.631 82.9578 209.64 80.6484C209.648 78.339 209.187 76.052 208.283 73.9266L208.283 73.9228Z" fill="black"/>
</svg>

`,ke=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",cigarette:He,person:Ze});function Be(a){let e,l=ke[a[0]]+"";return{c(){e=C("div"),this.h()},l(n){e=b(n,"DIV",{class:!0});var t=w(e);t.forEach(c),this.h()},h(){I(e,"class","svelte-7zut0b")},m(n,t){g(n,e,t),e.innerHTML=l},p(n,[t]){t&1&&l!==(l=ke[n[0]]+"")&&(e.innerHTML=l)},i:M,o:M,d(n){n&&c(e)}}}function Oe(a,e,l){let{type:n}=e;return a.$$set=t=>{"type"in t&&l(0,n=t.type)},[n]}class ze extends le{constructor(e){super();ne(this,e,Oe,Be,ae,{type:0})}}function Ve(a,e,l){const n=a.slice();return n[9]=e[l],n[11]=l,n}function De(a){let e=Math.floor(a[0]*10)/10+"",l,n,t,r;return{c(){l=O(e),n=A(),t=C("div"),r=C("span"),this.h()},l(i){l=z(i,e),n=$(i),t=b(i,"DIV",{class:!0});var s=w(t);r=b(s,"SPAN",{class:!0,style:!0}),w(r).forEach(c),s.forEach(c),this.h()},h(){I(r,"class","h-full inline-block svelte-vaanfy"),H(r,"width",a[2]*100+"%"),I(t,"class","bar h-5 w-full svelte-vaanfy")},m(i,s){g(i,l,s),g(i,n,s),g(i,t,s),V(t,r)},p(i,s){s&1&&e!==(e=Math.floor(i[0]*10)/10+"")&&de(l,e),s&4&&H(r,"width",i[2]*100+"%")},d(i){i&&c(l),i&&c(n),i&&c(t)}}}function Me(a){let e,l,n,t;return l=new ze({props:{type:a[3],filled:a[11]/a[4]<a[2]}}),{c(){e=C("div"),J(l.$$.fragment),n=A(),this.h()},l(r){e=b(r,"DIV",{class:!0});var i=w(e);R(l.$$.fragment,i),n=$(i),i.forEach(c),this.h()},h(){I(e,"class","w-10 h-10 svelte-vaanfy"),pe(e,"filled",a[11]/a[4]>a[2])},m(r,i){g(r,e,i),q(l,e,null),V(e,n),t=!0},p(r,i){const s={};i&8&&(s.type=r[3]),i&20&&(s.filled=r[11]/r[4]<r[2]),l.$set(s),i&20&&pe(e,"filled",r[11]/r[4]>r[2])},i(r){t||(L(l.$$.fragment,r),t=!0)},o(r){S(l.$$.fragment,r),t=!1},d(r){r&&c(e),K(l)}}}function Je(a){let e,l,n,t,r,i,s=a[1]&&De(a),o=new Array(a[4]),u=[];for(let m=0;m<o.length;m+=1)u[m]=Me(Ve(a,o,m));const d=m=>S(u[m],1,1,()=>{u[m]=null});return{c(){e=C("div"),s&&s.c(),l=A(),n=C("div");for(let m=0;m<u.length;m+=1)u[m].c();this.h()},l(m){e=b(m,"DIV",{});var f=w(e);s&&s.l(f),l=$(f),n=b(f,"DIV",{class:!0});var p=w(n);for(let y=0;y<u.length;y+=1)u[y].l(p);p.forEach(c),f.forEach(c),this.h()},h(){I(n,"class","flex svelte-vaanfy")},m(m,f){g(m,e,f),s&&s.m(e,null),V(e,l),V(e,n);for(let p=0;p<u.length;p+=1)u[p].m(n,null);t=!0,r||(i=je(window,"keydown",a[5]),r=!0)},p(m,[f]){if(m[1]?s?s.p(m,f):(s=De(m),s.c(),s.m(e,l)):s&&(s.d(1),s=null),f&28){o=new Array(m[4]);let p;for(p=0;p<o.length;p+=1){const y=Ve(m,o,p);u[p]?(u[p].p(y,f),L(u[p],1)):(u[p]=Me(y),u[p].c(),L(u[p],1),u[p].m(n,null))}for(G(),p=o.length;p<u.length;p+=1)d(p);Y()}},i(m){if(!t){for(let f=0;f<o.length;f+=1)L(u[f]);t=!0}},o(m){u=u.filter(Boolean);for(let f=0;f<u.length;f+=1)S(u[f]);t=!1},d(m){m&&c(e),s&&s.d(),ge(u,m),r=!1,i()}}}function Re(a){return"person"}function qe(a,e,l){let n,t,r,{type:i}=e,{minAmount:s=0}=e,{maxAmount:o=10}=e,{value:u=0}=e;console.log(s,o,u);let d=!1;function m(f){f.key==="D"&&l(1,d=!d)}return a.$$set=f=>{"type"in f&&l(6,i=f.type),"minAmount"in f&&l(7,s=f.minAmount),"maxAmount"in f&&l(8,o=f.maxAmount),"value"in f&&l(0,u=f.value)},a.$$.update=()=>{a.$$.dirty&256&&l(4,n=Math.min(50,o)),a.$$.dirty&64&&l(3,t=Re()),a.$$.dirty&257&&l(2,r=u/o)},[u,d,r,t,n,m,i,s,o]}class Le extends le{constructor(e){super();ne(this,e,qe,Je,ae,{type:6,minAmount:7,maxAmount:8,value:0})}}function Ee(a,e,l){const n=a.slice();return n[15]=e[l],n}function Ke(a){return{c:M,l:M,m:M,p:M,i:M,o:M,d:M}}function Qe(a){let e,l,n,t;const r=[We,Ue],i=[];function s(o,u){return o[14]&&o[14].countries&&o[14].countries.length?0:1}return e=s(a),l=i[e]=r[e](a),{c(){l.c(),n=x()},l(o){l.l(o),n=x()},m(o,u){i[e].m(o,u),g(o,n,u),t=!0},p(o,u){let d=e;e=s(o),e===d?i[e].p(o,u):(G(),S(i[d],1,1,()=>{i[d]=null}),Y(),l=i[e],l?l.p(o,u):(l=i[e]=r[e](o),l.c()),L(l,1),l.m(n.parentNode,n))},i(o){t||(L(l),t=!0)},o(o){S(l),t=!1},d(o){i[e].d(o),o&&c(n)}}}function Ue(a){let e,l,n,t;return{c(){e=C("div"),l=A(),n=C("p"),t=O("No Data")},l(r){e=b(r,"DIV",{}),w(e).forEach(c),l=$(r),n=b(r,"P",{});var i=w(n);t=z(i,"No Data"),i.forEach(c)},m(r,i){g(r,e,i),g(r,l,i),g(r,n,i),V(n,t)},p:M,i:M,o:M,d(r){r&&c(e),r&&c(l),r&&c(n)}}}function We(a){let e,l,n=a[14].countries,t=[];for(let i=0;i<n.length;i+=1)t[i]=Ie(Ee(a,n,i));const r=i=>S(t[i],1,1,()=>{t[i]=null});return{c(){for(let i=0;i<t.length;i+=1)t[i].c();e=x()},l(i){for(let s=0;s<t.length;s+=1)t[s].l(i);e=x()},m(i,s){for(let o=0;o<t.length;o+=1)t[o].m(i,s);g(i,e,s),l=!0},p(i,s){if(s&44){n=i[14].countries;let o;for(o=0;o<n.length;o+=1){const u=Ee(i,n,o);t[o]?(t[o].p(u,s),L(t[o],1)):(t[o]=Ie(u),t[o].c(),L(t[o],1),t[o].m(e.parentNode,e))}for(G(),o=n.length;o<t.length;o+=1)r(o);Y()}},i(i){if(!l){for(let s=0;s<n.length;s+=1)L(t[s]);l=!0}},o(i){t=t.filter(Boolean);for(let s=0;s<t.length;s+=1)S(t[s]);l=!1},d(i){ge(t,i),i&&c(e)}}}function Xe(a){let e,l;return{c(){e=C("p"),l=O("No Data")},l(n){e=b(n,"P",{});var t=w(e);l=z(t,"No Data"),t.forEach(c)},m(n,t){g(n,e,t),V(e,l)},p:M,i:M,o:M,d(n){n&&c(e)}}}function Fe(a){let e,l;return e=new Le({props:{type:a[2],value:a[15].right,minAmount:a[14].rightMinValue,maxAmount:a[14].rightMaxValue}}),{c(){J(e.$$.fragment)},l(n){R(e.$$.fragment,n)},m(n,t){q(e,n,t),l=!0},p(n,t){const r={};t&4&&(r.type=n[2]),t&32&&(r.value=n[15].right),t&32&&(r.minAmount=n[14].rightMinValue),t&32&&(r.maxAmount=n[14].rightMaxValue),e.$set(r)},i(n){l||(L(e.$$.fragment,n),l=!0)},o(n){S(e.$$.fragment,n),l=!1},d(n){K(e,n)}}}function Ie(a){let e,l,n,t,r=ue(a[15].id)+"",i,s,o,u,d,m,f;l=new Le({props:{type:a[3],value:a[15].left,minAmount:a[14].leftMinValue,maxAmount:a[14].leftMaxValue}});const p=[Fe,Xe],y=[];function P(v,_){return v[15].right?0:1}return u=P(a),d=y[u]=p[u](a),{c(){e=C("div"),J(l.$$.fragment),n=A(),t=C("p"),i=O(r),s=A(),o=C("div"),d.c(),m=A(),this.h()},l(v){e=b(v,"DIV",{class:!0,style:!0});var _=w(e);R(l.$$.fragment,_),_.forEach(c),n=$(v),t=b(v,"P",{class:!0,style:!0});var j=w(t);i=z(j,r),j.forEach(c),s=$(v),o=b(v,"DIV",{class:!0,style:!0});var N=w(o);d.l(N),m=$(N),N.forEach(c),this.h()},h(){I(e,"class","w-full text-center max-w-full overflow-hidden mx-auto w-min"),H(e,"width","40vw"),H(e,"margin-bottom","40px"),I(t,"class","bg-black min-w-max h-min p-2 rounded-xl text-white mb-5"),H(t,"transform","translateX(-50%)"),H(t,"z-index","-1"),I(o,"class","w-full text-center overflow-hidden mx-auto w-min"),H(o,"width","40vw")},m(v,_){g(v,e,_),q(l,e,null),g(v,n,_),g(v,t,_),V(t,i),g(v,s,_),g(v,o,_),y[u].m(o,null),V(o,m),f=!0},p(v,_){const j={};_&8&&(j.type=v[3]),_&32&&(j.value=v[15].left),_&32&&(j.minAmount=v[14].leftMinValue),_&32&&(j.maxAmount=v[14].leftMaxValue),l.$set(j),(!f||_&32)&&r!==(r=ue(v[15].id)+"")&&de(i,r);let N=u;u=P(v),u===N?y[u].p(v,_):(G(),S(y[N],1,1,()=>{y[N]=null}),Y(),d=y[u],d?d.p(v,_):(d=y[u]=p[u](v),d.c()),L(d,1),d.m(o,m))},i(v){f||(L(l.$$.fragment,v),L(d),f=!0)},o(v){S(l.$$.fragment,v),S(d),f=!1},d(v){v&&c(e),K(l),v&&c(n),v&&c(t),v&&c(s),v&&c(o),y[u].d()}}}function Ge(a){let e,l,n,t,r,i;return{c(){e=C("div"),l=A(),n=C("p"),t=O("Loooading..."),r=A(),i=C("div")},l(s){e=b(s,"DIV",{}),w(e).forEach(c),l=$(s),n=b(s,"P",{});var o=w(n);t=z(o,"Loooading..."),o.forEach(c),r=$(s),i=b(s,"DIV",{}),w(i).forEach(c)},m(s,o){g(s,e,o),g(s,l,o),g(s,n,o),V(n,t),g(s,r,o),g(s,i,o)},p:M,i:M,o:M,d(s){s&&c(e),s&&c(l),s&&c(n),s&&c(r),s&&c(i)}}}function Ye(a){let e,l,n,t,r,i,s,o,u,d,m,f,p,y,P,v,_,j,N,Z,B;function W(h){a[10](h)}let Q={items:a[6],isClearable:!1};a[0]!==void 0&&(Q.value=a[0]),s=new se({props:Q}),ie.push(()=>oe(s,"value",W));function ee(h){a[11](h)}let X={items:a[7],isMulti:!0};a[4]!==void 0&&(X.value=a[4]),f=new se({props:X}),ie.push(()=>oe(f,"value",ee));function te(h){a[12](h)}let F={items:a[6],isClearable:!1};a[1]!==void 0&&(F.value=a[1]),_=new se({props:F}),ie.push(()=>oe(_,"value",te));let D={ctx:a,current:null,token:null,hasCatch:!1,pending:Ge,then:Qe,catch:Ke,value:14,blocks:[,,,]};return Ce(Z=a[5],D),{c(){e=C("h1"),l=O("The numbers of global Covid"),n=A(),t=C("div"),r=C("div"),i=C("div"),J(s.$$.fragment),u=A(),d=C("div"),m=C("div"),J(f.$$.fragment),y=A(),P=C("div"),v=C("div"),J(_.$$.fragment),N=A(),D.block.c(),this.h()},l(h){e=b(h,"H1",{class:!0});var k=w(e);l=z(k,"The numbers of global Covid"),k.forEach(c),n=$(h),t=b(h,"DIV",{class:!0,style:!0});var E=w(t);r=b(E,"DIV",{class:!0});var T=w(r);i=b(T,"DIV",{class:!0});var U=w(i);R(s.$$.fragment,U),U.forEach(c),T.forEach(c),u=$(E),d=b(E,"DIV",{class:!0,style:!0});var fe=w(d);m=b(fe,"DIV",{class:!0});var ce=w(m);R(f.$$.fragment,ce),ce.forEach(c),fe.forEach(c),y=$(E),P=b(E,"DIV",{class:!0});var _e=w(P);v=b(_e,"DIV",{class:!0});var me=w(v);R(_.$$.fragment,me),me.forEach(c),_e.forEach(c),N=$(E),D.block.l(E),E.forEach(c),this.h()},h(){I(e,"class","absolute text-4xl font-bold text-center w-screen svelte-oyjmnj"),I(i,"class","select-box svelte-oyjmnj"),I(r,"class","left svelte-oyjmnj"),I(m,"class","center-select svelte-oyjmnj"),I(d,"class","center svelte-oyjmnj"),H(d,"width","200px"),I(v,"class","select-box svelte-oyjmnj"),I(P,"class","right svelte-oyjmnj"),I(t,"class","grid grid-cols-3 auto-rows-min svelte-oyjmnj"),H(t,"grid-template-columns","1fr 0px 1fr")},m(h,k){g(h,e,k),V(e,l),g(h,n,k),g(h,t,k),V(t,r),V(r,i),q(s,i,null),V(t,u),V(t,d),V(d,m),q(f,m,null),V(t,y),V(t,P),V(P,v),q(_,v,null),V(t,N),D.block.m(t,D.anchor=null),D.mount=()=>t,D.anchor=null,B=!0},p(h,[k]){a=h;const E={};!o&&k&1&&(o=!0,E.value=a[0],re(()=>o=!1)),s.$set(E);const T={};!p&&k&16&&(p=!0,T.value=a[4],re(()=>p=!1)),f.$set(T);const U={};!j&&k&2&&(j=!0,U.value=a[1],re(()=>j=!1)),_.$set(U),D.ctx=a,k&32&&Z!==(Z=a[5])&&Ce(Z,D)||Ae(D,a,k)},i(h){B||(L(s.$$.fragment,h),L(f.$$.fragment,h),L(_.$$.fragment,h),L(D.block),B=!0)},o(h){S(s.$$.fragment,h),S(f.$$.fragment,h),S(_.$$.fragment,h);for(let k=0;k<3;k+=1){const E=D.blocks[k];S(E)}B=!1},d(h){h&&c(e),h&&c(n),h&&c(t),K(s),K(f),K(_),D.block.d(),D.token=null,D=null}}}async function t1({fetch:a}){return{props:{allCountries:await(await a("/data/countries")).json()}}}function xe(a,e,l){let n,t,r,i,s;$e(a,we,_=>l(4,s=_));let{allCountries:o}=e,u=[{value:"deaths",label:"Deaths"},{value:"total_cases",label:"Total Cases"},{value:"cases_per_million",label:"Cases Per Million"},{value:"deaths_per_million",label:"Deaths Per Million"},{value:"population_density",label:"Population Density"}],d=o.map(_=>({value:_,label:ue(_)})),m=u[0],f=u[0];async function p(_,j,N){console.log(n,t);const Z=await ye(n,_),B=await ye(t,_),W=Z.map(h=>h[n]),Q=B.map(h=>h[t]),ee=Math.max(...W),X=Math.min(...W),te=Math.max(...Q),F=Math.min(...Q);console.log("LeftDataSet",Z),console.log("RightDataSet",B);const D={leftMinValue:X,leftMaxValue:ee,rightMinValue:F,rightMaxValue:te,countries:_.map(h=>{const k=Z.find(T=>T.country===h),E=B.find(T=>T.country===h);return{id:h,left:k&&k[n],right:E&&E[t]}})};return console.log("DataSet",D),console.log("-----------------------"),D}function y(_){m=_,l(0,m)}function P(_){s=_,we.set(s)}function v(_){f=_,l(1,f)}return a.$$set=_=>{"allCountries"in _&&l(8,o=_.allCountries)},a.$$.update=()=>{a.$$.dirty&1&&l(3,n=m&&m.value),a.$$.dirty&2&&l(2,t=f&&f.value),a.$$.dirty&16&&l(9,r=s&&s.map(_=>_.value)),a.$$.dirty&524&&l(5,i=r&&n&&t&&p(r))},[m,f,t,n,s,i,u,d,o,r,y,P,v]}class l1 extends le{constructor(e){super();ne(this,e,xe,Ye,ae,{allCountries:8})}}export{l1 as default,t1 as load};
