import{C as _1,J as d1,K as S1,S as W,i as X,s as F,L as D1,l as H,M as x1,f as v,I,d as f,e as w,j as T,k as x,c as y,a as k,m as Z,n as M,b as j,o as P,H as L,x as C,u as $,v as B,r as G,w as Y,N as h1,t as z,g as K,O as e1,P as t1,Q as l1,R as v1,T as n1,U as s1,V as M1,W as C1,h as A1}from"../chunks/vendor-85410965.js";var N1=(n,t)=>{n="local-store-"+n;{let s=t;if(n in localStorage)try{s=JSON.parse(localStorage.getItem(n))}catch(e){console.log(e)}const l=_1(s);return l.subscribe(e=>{localStorage.setItem(n,JSON.stringify(e))}),l}};const H1=_1(!1),g1=N1("selectedCountries",[]);d1.registerLocale(S1);var a1=n=>d1.getName(n,"en",{select:"official"})||n,T1=`<svg viewBox="0 0 148 151" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.15894 127.3L130.847 53.84C132.516 53.0337 134.412 52.8257 136.217 53.251C138.022 53.6763 139.625 54.7089 140.759 56.1759L146.008 66.0885C146.559 66.8261 146.938 67.6772 147.12 68.5799C147.301 69.4826 147.279 70.4144 147.055 71.3075C146.832 72.2007 146.412 73.0328 145.827 73.7436C145.241 74.4544 144.505 75.026 143.672 75.417L15.9838 149.462C15.1836 149.899 14.3035 150.171 13.396 150.261C12.4884 150.351 11.5721 150.257 10.7016 149.985C9.8311 149.713 9.02421 149.269 8.32904 148.679C7.63388 148.088 7.06467 147.364 6.65534 146.549L0.823043 137.221C0.0167642 135.551 -0.191161 133.655 0.234111 131.851C0.659383 130.046 1.69201 128.442 3.15894 127.308V127.3ZM126.766 45.6718C126.182 48.5842 121.517 47.4238 122.686 44.5039C131.43 13.0217 102.86 34.0075 101.117 14.1827C99.9486 2.51828 111.029 -3.30632 112.197 1.94188C112.781 4.27768 101.7 8.94188 106.948 17.1026C107.944 18.2475 109.218 19.1169 110.647 19.6269C112.076 20.137 113.613 20.2706 115.108 20.015C134.35 19.431 126.773 45.6725 126.773 45.6725L126.766 45.6718ZM118.021 40.4236C118.139 41.0287 118.021 41.6561 117.69 42.1764C117.359 42.6966 116.841 43.0702 116.243 43.2199C115.645 43.3697 115.012 43.2843 114.475 42.9813C113.938 42.6784 113.538 42.1809 113.357 41.5916C109.861 36.3434 103.444 36.9274 103.444 34.5916C103.444 33.4236 104.028 32.2557 105.196 32.2557C110.444 31.0877 116.276 35.752 118.021 40.4157L118.021 40.4236ZM136.094 74.2415C132.598 75.4095 129.094 71.9056 129.678 68.4093C128.327 68.1651 127.11 67.4398 126.252 66.3676C125.395 65.2953 124.955 63.9488 125.014 62.5771L38.1372 112.716L46.2978 126.708L136.087 74.2341L136.094 74.2415Z" fill="black"/>
</svg>

`,Z1=`<svg  viewBox="0 0 210 271" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M104.747 63.8446C98.4329 63.8447 92.2608 61.9724 87.0109 58.4646C81.761 54.9568 77.6693 49.9711 75.253 44.1378C72.8368 38.3045 72.2046 31.8857 73.4364 25.6931C74.6682 19.5005 77.7086 13.8122 82.1733 9.34761C86.6379 4.88302 92.3262 1.84262 98.5188 0.610906C104.711 -0.620812 111.13 0.011471 116.964 2.4278C122.797 4.84412 127.783 8.93596 131.29 14.1859C134.798 19.4358 136.67 25.608 136.67 31.9219C136.668 40.3876 133.304 48.5058 127.317 54.492C121.331 60.4781 113.213 63.8422 104.747 63.8446H104.747ZM208.283 73.9228C206.385 69.8669 203.02 66.6822 198.865 65.0117C194.711 63.3412 190.077 63.3094 185.9 64.9228L142.973 82.618H142.961C136.107 85.1127 128.869 86.3936 121.575 86.4031H87.9177C80.6231 86.3936 73.3859 85.1127 66.531 82.618L23.745 64.9813C19.5681 63.3679 14.9345 63.3997 10.78 65.0702C6.62557 66.7407 3.25978 69.9254 1.36235 73.9813C0.456273 76.1057 -0.00773531 78.3924 -0.00140085 80.702C0.00493361 83.0115 0.481478 85.2956 1.39919 87.4151C2.31691 89.5345 3.65657 91.4449 5.33654 93.0297C7.01651 94.6146 9.0016 95.8409 11.1708 96.6337L52.5498 113.755C55.8483 114.96 58.6965 117.15 60.7088 120.028C62.7211 122.906 63.8001 126.333 63.7998 129.845V160.712C63.8088 162.759 63.4516 164.791 62.7451 166.712L23.7451 246.272C22.1242 250.448 22.1523 255.085 23.8235 259.241C25.4948 263.397 28.6843 266.763 32.7451 268.654C34.8696 269.56 37.1563 270.024 39.4658 270.018C41.7754 270.012 44.0595 269.535 46.1789 268.617C48.2984 267.7 50.2087 266.36 51.7936 264.68C53.3785 263 54.6047 261.015 55.3975 258.846L88.6915 194.64C89.8968 191.351 92.083 188.512 94.9544 186.506C97.8258 184.5 101.244 183.424 104.747 183.424C108.249 183.424 111.667 184.5 114.539 186.506C117.41 188.512 119.596 191.351 120.802 194.64L153.979 257.91C155.431 262.141 158.433 265.664 162.38 267.769C166.327 269.874 170.925 270.405 175.248 269.253C177.458 268.578 179.507 267.459 181.27 265.964C183.033 264.47 184.472 262.631 185.5 260.561C186.528 258.491 187.123 256.233 187.248 253.926C187.373 251.618 187.026 249.309 186.228 247.14L146.748 166.563C146.042 164.642 145.685 162.61 145.693 160.563V129.849C145.693 126.337 146.772 122.91 148.785 120.032C150.797 117.154 153.645 114.964 156.943 113.759L198.463 96.579C200.632 95.7852 202.617 94.5587 204.297 92.9739C205.976 91.3891 207.316 89.4791 208.235 87.3603C209.153 85.2414 209.631 82.9578 209.64 80.6484C209.648 78.339 209.187 76.052 208.283 73.9266L208.283 73.9228Z" fill="black"/>
</svg>

`,p1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",cigarette:T1,person:Z1});function P1(n){let t,s=p1[n[0]]+"",l;return{c(){t=new D1,l=H(),this.h()},l(e){t=x1(e),l=H(),this.h()},h(){t.a=l},m(e,i){t.m(s,e,i),v(e,l,i)},p(e,[i]){i&1&&s!==(s=p1[e[0]]+"")&&t.p(s)},i:I,o:I,d(e){e&&f(l),e&&t.d()}}}function B1(n,t,s){let{type:l}=t;return n.$$set=e=>{"type"in e&&s(0,l=e.type)},[l]}class O1 extends W{constructor(t){super();X(this,t,B1,P1,F,{type:0})}}function b1(n,t,s){const l=n.slice();return l[5]=t[s],l}function w1(n){let t,s,l,e;return s=new O1({props:{type:n[0]}}),{c(){t=w("div"),T(s.$$.fragment),l=x(),this.h()},l(i){t=y(i,"DIV",{class:!0});var a=k(t);Z(s.$$.fragment,a),l=M(a),a.forEach(f),this.h()},h(){j(t,"class","w-10 h-10")},m(i,a){v(i,t,a),P(s,t,null),L(t,l),e=!0},p(i,a){const o={};a&1&&(o.type=i[0]),s.$set(o)},i(i){e||(C(s.$$.fragment,i),e=!0)},o(i){$(s.$$.fragment,i),e=!1},d(i){i&&f(t),B(s)}}}function J1(n){let t,s,l=n[1],e=[];for(let a=0;a<l.length;a+=1)e[a]=w1(b1(n,l,a));const i=a=>$(e[a],1,1,()=>{e[a]=null});return{c(){t=w("div");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){t=y(a,"DIV",{class:!0});var o=k(t);for(let r=0;r<e.length;r+=1)e[r].l(o);o.forEach(f),this.h()},h(){j(t,"class","flex")},m(a,o){v(a,t,o);for(let r=0;r<e.length;r+=1)e[r].m(t,null);s=!0},p(a,[o]){if(o&3){l=a[1];let r;for(r=0;r<l.length;r+=1){const d=b1(a,l,r);e[r]?(e[r].p(d,o),C(e[r],1)):(e[r]=w1(d),e[r].c(),C(e[r],1),e[r].m(t,null))}for(G(),r=l.length;r<e.length;r+=1)i(r);Y()}},i(a){if(!s){for(let o=0;o<l.length;o+=1)C(e[o]);s=!0}},o(a){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)$(e[o]);s=!1},d(a){a&&f(t),h1(e,a)}}}function R1(n){return"person"}function q1(n,t,s){let l,e,{type:i}=t,{minAmount:a=0}=t,{maxAmount:o=10}=t;return n.$$set=r=>{"type"in r&&s(2,i=r.type),"minAmount"in r&&s(3,a=r.minAmount),"maxAmount"in r&&s(4,o=r.maxAmount)},n.$$.update=()=>{n.$$.dirty&24&&s(1,l=new Array(o-a)),n.$$.dirty&4&&s(0,e=R1())},[e,l,i,a,o]}class y1 extends W{constructor(t){super();X(this,t,q1,J1,F,{type:2,minAmount:3,maxAmount:4})}}function k1(n,t,s){const l=n.slice();return l[15]=t[s],l}function L1(n){let t,s;return{c(){t=w("p"),s=z("IsLoading")},l(l){t=y(l,"P",{});var e=k(t);s=K(e,"IsLoading"),e.forEach(f)},m(l,e){v(l,t,e),L(t,s)},d(l){l&&f(t)}}}function z1(n){return{c:I,l:I,m:I,p:I,i:I,o:I,d:I}}function K1(n){let t,s,l=n[14]&&n[14].length&&V1(n);return{c(){l&&l.c(),t=H()},l(e){l&&l.l(e),t=H()},m(e,i){l&&l.m(e,i),v(e,t,i),s=!0},p(e,i){e[14]&&e[14].length?l?(l.p(e,i),i&8&&C(l,1)):(l=V1(e),l.c(),C(l,1),l.m(t.parentNode,t)):l&&(G(),$(l,1,1,()=>{l=null}),Y())},i(e){s||(C(l),s=!0)},o(e){$(l),s=!1},d(e){l&&l.d(e),e&&f(t)}}}function V1(n){let t,s,l=n[14],e=[];for(let a=0;a<l.length;a+=1)e[a]=j1(k1(n,l,a));const i=a=>$(e[a],1,1,()=>{e[a]=null});return{c(){for(let a=0;a<e.length;a+=1)e[a].c();t=H()},l(a){for(let o=0;o<e.length;o+=1)e[o].l(a);t=H()},m(a,o){for(let r=0;r<e.length;r+=1)e[r].m(a,o);v(a,t,o),s=!0},p(a,o){if(o&8){l=a[14];let r;for(r=0;r<l.length;r+=1){const d=k1(a,l,r);e[r]?(e[r].p(d,o),C(e[r],1)):(e[r]=j1(d),e[r].c(),C(e[r],1),e[r].m(t.parentNode,t))}for(G(),r=l.length;r<e.length;r+=1)i(r);Y()}},i(a){if(!s){for(let o=0;o<l.length;o+=1)C(e[o]);s=!0}},o(a){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)$(e[o]);s=!1},d(a){h1(e,a),a&&f(t)}}}function j1(n){let t,s,l,e,i=a1(n[15].id)+"",a,o,r,d,E,g;return s=new y1({}),d=new y1({}),{c(){t=w("div"),T(s.$$.fragment),l=x(),e=w("p"),a=z(i),o=x(),r=w("div"),T(d.$$.fragment),E=x(),this.h()},l(c){t=y(c,"DIV",{class:!0});var m=k(t);Z(s.$$.fragment,m),m.forEach(f),l=M(c),e=y(c,"P",{class:!0,style:!0});var A=k(e);a=K(A,i),A.forEach(f),o=M(c),r=y(c,"DIV",{class:!0});var S=k(r);Z(d.$$.fragment,S),E=M(S),S.forEach(f),this.h()},h(){j(t,"class","w-full text-center max-w-full overflow-hidden mx-auto w-min"),j(e,"class","bg-black min-w-max h-min p-2 rounded-xl text-white mb-5"),n1(e,"transform","translateX(-50%)"),j(r,"class","w-full text-center overflow-hidden mx-auto w-min")},m(c,m){v(c,t,m),P(s,t,null),v(c,l,m),v(c,e,m),L(e,a),v(c,o,m),v(c,r,m),P(d,r,null),L(r,E),g=!0},p(c,m){(!g||m&8)&&i!==(i=a1(c[15].id)+"")&&A1(a,i)},i(c){g||(C(s.$$.fragment,c),C(d.$$.fragment,c),g=!0)},o(c){$(s.$$.fragment,c),$(d.$$.fragment,c),g=!1},d(c){c&&f(t),B(s),c&&f(l),c&&f(e),c&&f(o),c&&f(r),B(d)}}}function Q1(n){let t,s;return{c(){t=w("p"),s=z("Loooading...")},l(l){t=y(l,"P",{});var e=k(t);s=K(e,"Loooading..."),e.forEach(f)},m(l,e){v(l,t,e),L(t,s)},p:I,i:I,o:I,d(l){l&&f(t)}}}function U1(n){let t,s,l,e,i,a,o,r,d,E,g,c,m,A,S,N,_,D,Q,U,R,q,p=n[4]&&L1();function $1(u){n[11](u)}let r1={items:n[5],isClearable:!1};n[0]!==void 0&&(r1.value=n[0]),r=new e1({props:r1}),t1.push(()=>l1(r,"value",$1));function I1(u){n[12](u)}let o1={items:n[6],isMulti:!0};n[2]!==void 0&&(o1.value=n[2]),m=new e1({props:o1}),t1.push(()=>l1(m,"value",I1));function E1(u){n[13](u)}let i1={items:n[5],isClearable:!1};n[1]!==void 0&&(i1.value=n[1]),D=new e1({props:i1}),t1.push(()=>l1(D,"value",E1));let b={ctx:n,current:null,token:null,hasCatch:!1,pending:Q1,then:K1,catch:z1,value:14,blocks:[,,,]};return v1(R=n[3],b),{c(){p&&p.c(),t=x(),s=w("h1"),l=z("The numbers of global Covid"),e=x(),i=w("div"),a=w("div"),o=w("div"),T(r.$$.fragment),E=x(),g=w("div"),c=w("div"),T(m.$$.fragment),S=x(),N=w("div"),_=w("div"),T(D.$$.fragment),U=x(),b.block.c(),this.h()},l(u){p&&p.l(u),t=M(u),s=y(u,"H1",{class:!0});var h=k(s);l=K(h,"The numbers of global Covid"),h.forEach(f),e=M(u),i=y(u,"DIV",{class:!0,style:!0});var V=k(i);a=y(V,"DIV",{class:!0});var O=k(a);o=y(O,"DIV",{class:!0});var J=k(o);Z(r.$$.fragment,J),J.forEach(f),O.forEach(f),E=M(V),g=y(V,"DIV",{class:!0,style:!0});var c1=k(g);c=y(c1,"DIV",{class:!0});var u1=k(c);Z(m.$$.fragment,u1),u1.forEach(f),c1.forEach(f),S=M(V),N=y(V,"DIV",{class:!0});var f1=k(N);_=y(f1,"DIV",{class:!0});var m1=k(_);Z(D.$$.fragment,m1),m1.forEach(f),f1.forEach(f),U=M(V),b.block.l(V),V.forEach(f),this.h()},h(){j(s,"class","absolute text-4xl font-bold text-center w-screen svelte-oyjmnj"),j(o,"class","select-box svelte-oyjmnj"),j(a,"class","left svelte-oyjmnj"),j(c,"class","center-select svelte-oyjmnj"),j(g,"class","center svelte-oyjmnj"),n1(g,"width","200px"),j(_,"class","select-box svelte-oyjmnj"),j(N,"class","right svelte-oyjmnj"),j(i,"class","grid grid-cols-3 auto-rows-min svelte-oyjmnj"),n1(i,"grid-template-columns","1fr 0px 1fr")},m(u,h){p&&p.m(u,h),v(u,t,h),v(u,s,h),L(s,l),v(u,e,h),v(u,i,h),L(i,a),L(a,o),P(r,o,null),L(i,E),L(i,g),L(g,c),P(m,c,null),L(i,S),L(i,N),L(N,_),P(D,_,null),L(i,U),b.block.m(i,b.anchor=null),b.mount=()=>i,b.anchor=null,q=!0},p(u,[h]){n=u,n[4]?p||(p=L1(),p.c(),p.m(t.parentNode,t)):p&&(p.d(1),p=null);const V={};!d&&h&1&&(d=!0,V.value=n[0],s1(()=>d=!1)),r.$set(V);const O={};!A&&h&4&&(A=!0,O.value=n[2],s1(()=>A=!1)),m.$set(O);const J={};!Q&&h&2&&(Q=!0,J.value=n[1],s1(()=>Q=!1)),D.$set(J),b.ctx=n,h&8&&R!==(R=n[3])&&v1(R,b)||M1(b,n,h)},i(u){q||(C(r.$$.fragment,u),C(m.$$.fragment,u),C(D.$$.fragment,u),C(b.block),q=!0)},o(u){$(r.$$.fragment,u),$(m.$$.fragment,u),$(D.$$.fragment,u);for(let h=0;h<3;h+=1){const V=b.blocks[h];$(V)}q=!1},d(u){p&&p.d(u),u&&f(t),u&&f(s),u&&f(e),u&&f(i),B(r),B(m),B(D),b.block.d(),b.token=null,b=null}}}async function G1({fetch:n}){return{props:{allCountries:await(await n("/data/countries")).json()}}}async function W1(n,t,s){return n.map(l=>({id:l,left:Math.random(),right:Math.random()}))}function X1(n,t,s){let l,e,i,a,o,r;C1(n,g1,_=>s(2,o=_)),C1(n,H1,_=>s(4,r=_));let{allCountries:d}=t,E=[{value:"deaths",label:"Deaths"},{value:"vaccinations",label:"Vaccinations"},{value:"smokers",label:"Smokers"}],g=d.map(_=>({value:_,label:a1(_)})),c=E[0],m=E[0];function A(_){c=_,s(0,c)}function S(_){o=_,g1.set(o)}function N(_){m=_,s(1,m)}return n.$$set=_=>{"allCountries"in _&&s(7,d=_.allCountries)},n.$$.update=()=>{n.$$.dirty&1&&s(9,l=c&&c.value),n.$$.dirty&2&&s(8,e=m&&m.value),n.$$.dirty&4&&s(10,i=o&&o.map(_=>_.value)),n.$$.dirty&1792&&s(3,a=i&&l&&e&&W1(i))},[c,m,o,a,r,E,g,d,e,l,i,A,S,N]}class Y1 extends W{constructor(t){super();X(this,t,X1,U1,F,{allCountries:7})}}export{Y1 as default,G1 as load};
