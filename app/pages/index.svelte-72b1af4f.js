import{C as h1,J as d1,K as j1,S as n1,i as a1,s as s1,e as b,c as w,a as y,d as _,b as I,f as p,I as M,t as B,k as H,g as z,n as $,L as P,H as D,h as C1,j as O,m as J,M as p1,o as R,x as E,u as j,v as q,N as A1,r as Y,w as x,O as g1,P as i1,Q as o1,R as r1,T as b1,U as u1,V as H1,W as $1,l as e1}from"../chunks/vendor-9bc53f8b.js";var N1=(a,e)=>{a="local-store-"+a;{let n=e;if(a in localStorage)try{n=JSON.parse(localStorage.getItem(a))}catch(t){console.log(t)}const l=h1(n);return l.subscribe(t=>{localStorage.setItem(a,JSON.stringify(t))}),l}};const w1=h1(!1),y1=N1("selectedCountries",[]),P1={};async function T1(a){w1.set(!0);const n=await(await fetch(a)).json();return w1.set(!1),n}async function V1(a,e){let n="/data/"+a;window.location.href.includes("github")&&(n="/isotype-corona-viz"+n,console.log("Diiirty fix"),console.log(n));let l=P1[a];return l||(l=await T1(n),e&&e.length?l.filter(t=>e.includes(t.country)):l)}d1.registerLocale(j1);var c1=a=>d1.getName(a,"en",{select:"official"})||a,Z1=`<svg width="136" height="175" viewBox="0 0 136 175" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M117.663 140.545H82.7141V62.77H113.637C114.24 62.7754 114.837 62.6608 115.394 62.4328C115.952 62.2049 116.458 61.8681 116.884 61.4421C117.31 61.0162 117.647 60.5097 117.875 59.9522C118.103 59.3947 118.218 58.7973 118.212 58.195V37.7013C118.218 37.099 118.103 36.5017 117.875 35.9441C117.647 35.3866 117.31 34.8801 116.884 34.4542C116.458 34.0283 115.952 33.6915 115.394 33.4636C114.837 33.2356 114.24 33.121 113.637 33.1264H82.7141V4.575C82.7196 3.97269 82.6049 3.37533 82.377 2.8178C82.149 2.26028 81.8122 1.75377 81.3863 1.32785C80.9604 0.901936 80.4538 0.56515 79.8963 0.337163C79.3388 0.109176 78.7414 -0.00544245 78.1391 2.16175e-06H57.6378C57.0355 -0.00544265 56.4382 0.109176 55.8806 0.337164C55.3231 0.565153 54.8166 0.901941 54.3907 1.32786C53.9648 1.75378 53.628 2.26029 53.4 2.81781C53.1721 3.37533 53.0575 3.97269 53.0629 4.575V33.3039H22.3246C21.7223 33.2985 21.125 33.4131 20.5674 33.6411C20.0099 33.869 19.5034 34.2058 19.0775 34.6317C18.6516 35.0576 18.3148 35.5641 18.0868 36.1216C17.8588 36.6791 17.7442 37.2765 17.7496 37.8788V58.3728C17.7442 58.9751 17.8588 59.5725 18.0868 60.13C18.3148 60.6875 18.6516 61.194 19.0775 61.62C19.5034 62.0459 20.0099 62.3827 20.5674 62.6106C21.1249 62.8386 21.7223 62.9532 22.3246 62.9478H53.2477V140.909H18.1138C15.7322 140.899 13.3721 141.36 11.1698 142.267C8.96753 143.173 6.9666 144.507 5.28252 146.191C3.59845 147.875 2.26458 149.876 1.3579 152.079C0.451218 154.281 -0.0103197 156.641 -7.73354e-05 159.023V174.213H135.598V159.023C135.635 156.631 135.2 154.256 134.318 152.033C133.437 149.81 132.126 147.782 130.46 146.066C128.794 144.35 126.807 142.979 124.611 142.031C122.415 141.084 120.054 140.578 117.663 140.544L117.663 140.545Z" fill="black"/>
</svg>

`,B1=`<svg  viewBox="0 0 210 271" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M104.747 63.8446C98.4329 63.8447 92.2608 61.9724 87.0109 58.4646C81.761 54.9568 77.6693 49.9711 75.253 44.1378C72.8368 38.3045 72.2046 31.8857 73.4364 25.6931C74.6682 19.5005 77.7086 13.8122 82.1733 9.34761C86.6379 4.88302 92.3262 1.84262 98.5188 0.610906C104.711 -0.620812 111.13 0.011471 116.964 2.4278C122.797 4.84412 127.783 8.93596 131.29 14.1859C134.798 19.4358 136.67 25.608 136.67 31.9219C136.668 40.3876 133.304 48.5058 127.317 54.492C121.331 60.4781 113.213 63.8422 104.747 63.8446H104.747ZM208.283 73.9228C206.385 69.8669 203.02 66.6822 198.865 65.0117C194.711 63.3412 190.077 63.3094 185.9 64.9228L142.973 82.618H142.961C136.107 85.1127 128.869 86.3936 121.575 86.4031H87.9177C80.6231 86.3936 73.3859 85.1127 66.531 82.618L23.745 64.9813C19.5681 63.3679 14.9345 63.3997 10.78 65.0702C6.62557 66.7407 3.25978 69.9254 1.36235 73.9813C0.456273 76.1057 -0.00773531 78.3924 -0.00140085 80.702C0.00493361 83.0115 0.481478 85.2956 1.39919 87.4151C2.31691 89.5345 3.65657 91.4449 5.33654 93.0297C7.01651 94.6146 9.0016 95.8409 11.1708 96.6337L52.5498 113.755C55.8483 114.96 58.6965 117.15 60.7088 120.028C62.7211 122.906 63.8001 126.333 63.7998 129.845V160.712C63.8088 162.759 63.4516 164.791 62.7451 166.712L23.7451 246.272C22.1242 250.448 22.1523 255.085 23.8235 259.241C25.4948 263.397 28.6843 266.763 32.7451 268.654C34.8696 269.56 37.1563 270.024 39.4658 270.018C41.7754 270.012 44.0595 269.535 46.1789 268.617C48.2984 267.7 50.2087 266.36 51.7936 264.68C53.3785 263 54.6047 261.015 55.3975 258.846L88.6915 194.64C89.8968 191.351 92.083 188.512 94.9544 186.506C97.8258 184.5 101.244 183.424 104.747 183.424C108.249 183.424 111.667 184.5 114.539 186.506C117.41 188.512 119.596 191.351 120.802 194.64L153.979 257.91C155.431 262.141 158.433 265.664 162.38 267.769C166.327 269.874 170.925 270.405 175.248 269.253C177.458 268.578 179.507 267.459 181.27 265.964C183.033 264.47 184.472 262.631 185.5 260.561C186.528 258.491 187.123 256.233 187.248 253.926C187.373 251.618 187.026 249.309 186.228 247.14L146.748 166.563C146.042 164.642 145.685 162.61 145.693 160.563V129.849C145.693 126.337 146.772 122.91 148.785 120.032C150.797 117.154 153.645 114.964 156.943 113.759L198.463 96.579C200.632 95.7852 202.617 94.5587 204.297 92.9739C205.976 91.3891 207.316 89.4791 208.235 87.3603C209.153 85.2414 209.631 82.9578 209.64 80.6484C209.648 78.339 209.187 76.052 208.283 73.9266L208.283 73.9228Z" fill="black"/>
</svg>

`,z1=`<svg viewBox="0 0 148 151" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.15894 127.3L130.847 53.84C132.516 53.0337 134.412 52.8257 136.217 53.251C138.022 53.6763 139.625 54.7089 140.759 56.1759L146.008 66.0885C146.559 66.8261 146.938 67.6772 147.12 68.5799C147.301 69.4826 147.279 70.4144 147.055 71.3075C146.832 72.2007 146.412 73.0328 145.827 73.7436C145.241 74.4544 144.505 75.026 143.672 75.417L15.9838 149.462C15.1836 149.899 14.3035 150.171 13.396 150.261C12.4884 150.351 11.5721 150.257 10.7016 149.985C9.8311 149.713 9.02421 149.269 8.32904 148.679C7.63388 148.088 7.06467 147.364 6.65534 146.549L0.823043 137.221C0.0167642 135.551 -0.191161 133.655 0.234111 131.851C0.659383 130.046 1.69201 128.442 3.15894 127.308V127.3ZM126.766 45.6718C126.182 48.5842 121.517 47.4238 122.686 44.5039C131.43 13.0217 102.86 34.0075 101.117 14.1827C99.9486 2.51828 111.029 -3.30632 112.197 1.94188C112.781 4.27768 101.7 8.94188 106.948 17.1026C107.944 18.2475 109.218 19.1169 110.647 19.6269C112.076 20.137 113.613 20.2706 115.108 20.015C134.35 19.431 126.773 45.6725 126.773 45.6725L126.766 45.6718ZM118.021 40.4236C118.139 41.0287 118.021 41.6561 117.69 42.1764C117.359 42.6966 116.841 43.0702 116.243 43.2199C115.645 43.3697 115.012 43.2843 114.475 42.9813C113.938 42.6784 113.538 42.1809 113.357 41.5916C109.861 36.3434 103.444 36.9274 103.444 34.5916C103.444 33.4236 104.028 32.2557 105.196 32.2557C110.444 31.0877 116.276 35.752 118.021 40.4157L118.021 40.4236ZM136.094 74.2415C132.598 75.4095 129.094 71.9056 129.678 68.4093C128.327 68.1651 127.11 67.4398 126.252 66.3676C125.395 65.2953 124.955 63.9488 125.014 62.5771L38.1372 112.716L46.2978 126.708L136.087 74.2341L136.094 74.2415Z" fill="black"/>
</svg>

`,k1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",tombstone:Z1,person:B1,cigarette:z1});function O1(a){let e,n=k1[a[0]]+"";return{c(){e=b("div"),this.h()},l(l){e=w(l,"DIV",{class:!0});var t=y(e);t.forEach(_),this.h()},h(){I(e,"class","svelte-7zut0b")},m(l,t){p(l,e,t),e.innerHTML=n},p(l,[t]){t&1&&n!==(n=k1[l[0]]+"")&&(e.innerHTML=n)},i:M,o:M,d(l){l&&_(e)}}}function J1(a,e,n){let{type:l}=e;return a.$$set=t=>{"type"in t&&n(0,l=t.type)},[l]}class R1 extends n1{constructor(e){super();a1(this,e,J1,O1,s1,{type:0})}}function D1(a,e,n){const l=a.slice();return l[10]=e[n],l[12]=n,l}function M1(a){let e=Math.floor(a[0]*10)/10+"",n,l,t,r;return{c(){n=B(e),l=H(),t=b("div"),r=b("span"),this.h()},l(i){n=z(i,e),l=$(i),t=w(i,"DIV",{class:!0});var s=y(t);r=w(s,"SPAN",{class:!0,style:!0}),y(r).forEach(_),s.forEach(_),this.h()},h(){I(r,"class","h-full inline-block svelte-vaanfy"),P(r,"width",a[2]*100+"%"),I(t,"class","bar h-5 w-full svelte-vaanfy")},m(i,s){p(i,n,s),p(i,l,s),p(i,t,s),D(t,r)},p(i,s){s&1&&e!==(e=Math.floor(i[0]*10)/10+"")&&C1(n,e),s&4&&P(r,"width",i[2]*100+"%")},d(i){i&&_(n),i&&_(l),i&&_(t)}}}function L1(a){let e,n,l,t;return n=new R1({props:{type:a[3],filled:a[12]/a[4]<a[2]}}),{c(){e=b("div"),O(n.$$.fragment),l=H(),this.h()},l(r){e=w(r,"DIV",{class:!0});var i=y(e);J(n.$$.fragment,i),l=$(i),i.forEach(_),this.h()},h(){I(e,"class","w-10 h-10 p-2 svelte-vaanfy"),p1(e,"filled",a[12]/a[4]>a[2])},m(r,i){p(r,e,i),R(n,e,null),D(e,l),t=!0},p(r,i){const s={};i&8&&(s.type=r[3]),i&20&&(s.filled=r[12]/r[4]<r[2]),n.$set(s),i&20&&p1(e,"filled",r[12]/r[4]>r[2])},i(r){t||(E(n.$$.fragment,r),t=!0)},o(r){j(n.$$.fragment,r),t=!1},d(r){r&&_(e),q(n)}}}function q1(a){let e,n,l,t,r,i,s=a[1]&&M1(a),o=new Array(a[4]),c=[];for(let f=0;f<o.length;f+=1)c[f]=L1(D1(a,o,f));const h=f=>j(c[f],1,1,()=>{c[f]=null});return{c(){e=b("div"),s&&s.c(),n=H(),l=b("div");for(let f=0;f<c.length;f+=1)c[f].c();this.h()},l(f){e=w(f,"DIV",{});var m=y(e);s&&s.l(m),n=$(m),l=w(m,"DIV",{class:!0});var v=y(l);for(let V=0;V<c.length;V+=1)c[V].l(v);v.forEach(_),m.forEach(_),this.h()},h(){I(l,"class","flex svelte-vaanfy")},m(f,m){p(f,e,m),s&&s.m(e,null),D(e,n),D(e,l);for(let v=0;v<c.length;v+=1)c[v].m(l,null);t=!0,r||(i=A1(window,"keydown",a[5]),r=!0)},p(f,[m]){if(f[1]?s?s.p(f,m):(s=M1(f),s.c(),s.m(e,n)):s&&(s.d(1),s=null),m&28){o=new Array(f[4]);let v;for(v=0;v<o.length;v+=1){const V=D1(f,o,v);c[v]?(c[v].p(V,m),E(c[v],1)):(c[v]=L1(V),c[v].c(),E(c[v],1),c[v].m(l,null))}for(Y(),v=o.length;v<c.length;v+=1)h(v);x()}},i(f){if(!t){for(let m=0;m<o.length;m+=1)E(c[m]);t=!0}},o(f){c=c.filter(Boolean);for(let m=0;m<c.length;m+=1)j(c[m]);t=!1},d(f){f&&_(e),s&&s.d(),g1(c,f),r=!1,i()}}}function G1(a,e,n){let l,t,r,{type:i}=e,{minAmount:s=0}=e,{maxAmount:o=10}=e,{value:c=0}=e;console.log(s,o,c);function h(v){return i.includes("death")?"tombstone":"person"}let f=!1;function m(v){v.key==="D"&&n(1,f=!f)}return a.$$set=v=>{"type"in v&&n(6,i=v.type),"minAmount"in v&&n(7,s=v.minAmount),"maxAmount"in v&&n(8,o=v.maxAmount),"value"in v&&n(0,c=v.value)},a.$$.update=()=>{a.$$.dirty&256&&n(4,l=Math.min(50,o)),a.$$.dirty&64&&n(3,t=h()),a.$$.dirty&257&&n(2,r=c/o)},[c,f,r,t,l,m,i,s,o]}class E1 extends n1{constructor(e){super();a1(this,e,G1,q1,s1,{type:6,minAmount:7,maxAmount:8,value:0})}}function I1(a,e,n){const l=a.slice();return l[14]=e[n],l}function K1(a){return{c:M,l:M,m:M,p:M,i:M,o:M,d:M}}function Q1(a){let e,n,l,t;const r=[W1,U1],i=[];function s(o,c){return o[13]&&o[13].countries&&o[13].countries.length?0:1}return e=s(a),n=i[e]=r[e](a),{c(){n.c(),l=e1()},l(o){n.l(o),l=e1()},m(o,c){i[e].m(o,c),p(o,l,c),t=!0},p(o,c){let h=e;e=s(o),e===h?i[e].p(o,c):(Y(),j(i[h],1,1,()=>{i[h]=null}),x(),n=i[e],n?n.p(o,c):(n=i[e]=r[e](o),n.c()),E(n,1),n.m(l.parentNode,l))},i(o){t||(E(n),t=!0)},o(o){j(n),t=!1},d(o){i[e].d(o),o&&_(l)}}}function U1(a){let e,n,l,t;return{c(){e=b("div"),n=H(),l=b("p"),t=B("No Data")},l(r){e=w(r,"DIV",{}),y(e).forEach(_),n=$(r),l=w(r,"P",{});var i=y(l);t=z(i,"No Data"),i.forEach(_)},m(r,i){p(r,e,i),p(r,n,i),p(r,l,i),D(l,t)},p:M,i:M,o:M,d(r){r&&_(e),r&&_(n),r&&_(l)}}}function W1(a){let e,n,l=a[13].countries,t=[];for(let i=0;i<l.length;i+=1)t[i]=S1(I1(a,l,i));const r=i=>j(t[i],1,1,()=>{t[i]=null});return{c(){for(let i=0;i<t.length;i+=1)t[i].c();e=e1()},l(i){for(let s=0;s<t.length;s+=1)t[s].l(i);e=e1()},m(i,s){for(let o=0;o<t.length;o+=1)t[o].m(i,s);p(i,e,s),n=!0},p(i,s){if(s&44){l=i[13].countries;let o;for(o=0;o<l.length;o+=1){const c=I1(i,l,o);t[o]?(t[o].p(c,s),E(t[o],1)):(t[o]=S1(c),t[o].c(),E(t[o],1),t[o].m(e.parentNode,e))}for(Y(),o=l.length;o<t.length;o+=1)r(o);x()}},i(i){if(!n){for(let s=0;s<l.length;s+=1)E(t[s]);n=!0}},o(i){t=t.filter(Boolean);for(let s=0;s<t.length;s+=1)j(t[s]);n=!1},d(i){g1(t,i),i&&_(e)}}}function X1(a){let e,n;return{c(){e=b("p"),n=B("No Data")},l(l){e=w(l,"P",{});var t=y(e);n=z(t,"No Data"),t.forEach(_)},m(l,t){p(l,e,t),D(e,n)},p:M,i:M,o:M,d(l){l&&_(e)}}}function F1(a){let e,n;return e=new E1({props:{type:a[2],value:a[14].right,minAmount:a[13].rightMinValue,maxAmount:a[13].rightMaxValue}}),{c(){O(e.$$.fragment)},l(l){J(e.$$.fragment,l)},m(l,t){R(e,l,t),n=!0},p(l,t){const r={};t&4&&(r.type=l[2]),t&32&&(r.value=l[14].right),t&32&&(r.minAmount=l[13].rightMinValue),t&32&&(r.maxAmount=l[13].rightMaxValue),e.$set(r)},i(l){n||(E(e.$$.fragment,l),n=!0)},o(l){j(e.$$.fragment,l),n=!1},d(l){q(e,l)}}}function S1(a){let e,n,l,t,r=c1(a[14].id)+"",i,s,o,c,h,f,m;n=new E1({props:{type:a[3],value:a[14].left,minAmount:a[13].leftMinValue,maxAmount:a[13].leftMaxValue}});const v=[F1,X1],V=[];function N(u,C){return u[14].right?0:1}return c=N(a),h=V[c]=v[c](a),{c(){e=b("div"),O(n.$$.fragment),l=H(),t=b("p"),i=B(r),s=H(),o=b("div"),h.c(),f=H(),this.h()},l(u){e=w(u,"DIV",{class:!0,style:!0});var C=y(e);J(n.$$.fragment,C),C.forEach(_),l=$(u),t=w(u,"P",{class:!0,style:!0});var A=y(t);i=z(A,r),A.forEach(_),s=$(u),o=w(u,"DIV",{class:!0,style:!0});var S=y(o);h.l(S),f=$(S),S.forEach(_),this.h()},h(){I(e,"class","w-full text-center max-w-full overflow-hidden mx-auto w-min"),P(e,"width","40vw"),P(e,"margin-bottom","40px"),I(t,"class","bg-black min-w-max h-min p-2 rounded-xl text-white mb-5"),P(t,"transform","translateX(-50%)"),P(t,"z-index","-1"),I(o,"class","w-full text-center overflow-hidden mx-auto w-min"),P(o,"width","40vw")},m(u,C){p(u,e,C),R(n,e,null),p(u,l,C),p(u,t,C),D(t,i),p(u,s,C),p(u,o,C),V[c].m(o,null),D(o,f),m=!0},p(u,C){const A={};C&8&&(A.type=u[3]),C&32&&(A.value=u[14].left),C&32&&(A.minAmount=u[13].leftMinValue),C&32&&(A.maxAmount=u[13].leftMaxValue),n.$set(A),(!m||C&32)&&r!==(r=c1(u[14].id)+"")&&C1(i,r);let S=c;c=N(u),c===S?V[c].p(u,C):(Y(),j(V[S],1,1,()=>{V[S]=null}),x(),h=V[c],h?h.p(u,C):(h=V[c]=v[c](u),h.c()),E(h,1),h.m(o,f))},i(u){m||(E(n.$$.fragment,u),E(h),m=!0)},o(u){j(n.$$.fragment,u),j(h),m=!1},d(u){u&&_(e),q(n),u&&_(l),u&&_(t),u&&_(s),u&&_(o),V[c].d()}}}function Y1(a){let e,n,l,t,r,i;return{c(){e=b("div"),n=H(),l=b("p"),t=B("Loooading..."),r=H(),i=b("div")},l(s){e=w(s,"DIV",{}),y(e).forEach(_),n=$(s),l=w(s,"P",{});var o=y(l);t=z(o,"Loooading..."),o.forEach(_),r=$(s),i=w(s,"DIV",{}),y(i).forEach(_)},m(s,o){p(s,e,o),p(s,n,o),p(s,l,o),D(l,t),p(s,r,o),p(s,i,o)},p:M,i:M,o:M,d(s){s&&_(e),s&&_(n),s&&_(l),s&&_(r),s&&_(i)}}}function x1(a){let e,n,l,t,r,i,s,o,c,h,f,m,v,V,N,u,C,A,S,T,Z;function W(d){a[9](d)}let X={items:U,isClearable:!1};a[0]!==void 0&&(X.value=a[0]),s=new i1({props:X}),o1.push(()=>r1(s,"value",W));function t1(d){a[10](d)}let F={items:a[6],isMulti:!0};a[4]!==void 0&&(F.value=a[4]),m=new i1({props:F}),o1.push(()=>r1(m,"value",t1));function l1(d){a[11](d)}let G={items:U,isClearable:!1};a[1]!==void 0&&(G.value=a[1]),C=new i1({props:G}),o1.push(()=>r1(C,"value",l1));let g={ctx:a,current:null,token:null,hasCatch:!1,pending:Y1,then:Q1,catch:K1,value:13,blocks:[,,,]};return b1(T=a[5],g),{c(){e=b("h1"),n=B("The numbers of global Covid"),l=H(),t=b("div"),r=b("div"),i=b("div"),O(s.$$.fragment),c=H(),h=b("div"),f=b("div"),O(m.$$.fragment),V=H(),N=b("div"),u=b("div"),O(C.$$.fragment),S=H(),g.block.c(),this.h()},l(d){e=w(d,"H1",{class:!0});var k=y(e);n=z(k,"The numbers of global Covid"),k.forEach(_),l=$(d),t=w(d,"DIV",{class:!0,style:!0});var L=y(t);r=w(L,"DIV",{class:!0});var K=y(r);i=w(K,"DIV",{class:!0});var Q=y(i);J(s.$$.fragment,Q),Q.forEach(_),K.forEach(_),c=$(L),h=w(L,"DIV",{class:!0,style:!0});var f1=y(h);f=w(f1,"DIV",{class:!0});var _1=y(f);J(m.$$.fragment,_1),_1.forEach(_),f1.forEach(_),V=$(L),N=w(L,"DIV",{class:!0});var v1=y(N);u=w(v1,"DIV",{class:!0});var m1=y(u);J(C.$$.fragment,m1),m1.forEach(_),v1.forEach(_),S=$(L),g.block.l(L),L.forEach(_),this.h()},h(){I(e,"class","absolute text-4xl font-bold text-center w-screen svelte-oyjmnj"),I(i,"class","select-box svelte-oyjmnj"),I(r,"class","left svelte-oyjmnj"),I(f,"class","center-select svelte-oyjmnj"),I(h,"class","center svelte-oyjmnj"),P(h,"width","200px"),I(u,"class","select-box svelte-oyjmnj"),I(N,"class","right svelte-oyjmnj"),I(t,"class","grid grid-cols-3 auto-rows-min svelte-oyjmnj"),P(t,"grid-template-columns","1fr 0px 1fr")},m(d,k){p(d,e,k),D(e,n),p(d,l,k),p(d,t,k),D(t,r),D(r,i),R(s,i,null),D(t,c),D(t,h),D(h,f),R(m,f,null),D(t,V),D(t,N),D(N,u),R(C,u,null),D(t,S),g.block.m(t,g.anchor=null),g.mount=()=>t,g.anchor=null,Z=!0},p(d,[k]){a=d;const L={};!o&&k&1&&(o=!0,L.value=a[0],u1(()=>o=!1)),s.$set(L);const K={};!v&&k&16&&(v=!0,K.value=a[4],u1(()=>v=!1)),m.$set(K);const Q={};!A&&k&2&&(A=!0,Q.value=a[1],u1(()=>A=!1)),C.$set(Q),g.ctx=a,k&32&&T!==(T=a[5])&&b1(T,g)||H1(g,a,k)},i(d){Z||(E(s.$$.fragment,d),E(m.$$.fragment,d),E(C.$$.fragment,d),E(g.block),Z=!0)},o(d){j(s.$$.fragment,d),j(m.$$.fragment,d),j(C.$$.fragment,d);for(let k=0;k<3;k+=1){const L=g.blocks[k];j(L)}Z=!1},d(d){d&&_(e),d&&_(l),d&&_(t),q(s),q(m),q(C),g.block.d(),g.token=null,g=null}}}const U=[{value:"deaths",label:"Deaths"},{value:"total_cases",label:"Total Cases"},{value:"cases_per_million",label:"Cases Per Million"},{value:"deaths_per_million",label:"Deaths Per Million"},{value:"population_density",label:"Population Density"},{value:"gdp_per_capita",label:"GDP Per Capita"},{value:"total_vaccinations",label:"Total Vaccinations"},{value:"vaccinations_per_million",label:"Vaccinations per Million"}];async function le({fetch:a}){const e=await a("/data/countries");return U.forEach(n=>a("/data/"+n.value)),{props:{allCountries:await e.json()}}}function ee(a,e,n){let l,t,r,i,s;$1(a,y1,u=>n(4,s=u));let{allCountries:o}=e,c=o.map(u=>({value:u,label:c1(u)})),h=U[0],f=U[0];async function m(u,C,A){console.log(l,t);const S=await V1(l,u),T=await V1(t,u),Z=S.map(g=>g[l]),W=T.map(g=>g[t]),X=Math.max(...Z),t1=Math.min(...Z),F=Math.max(...W),l1=Math.min(...W);console.log("LeftDataSet",S),console.log("RightDataSet",T);const G={leftMinValue:t1,leftMaxValue:X,rightMinValue:l1,rightMaxValue:F,countries:u.map(g=>{const d=S.find(L=>L.country===g),k=T.find(L=>L.country===g);return{id:g,left:d&&d[l],right:k&&k[t]}})};return console.log("DataSet",G),console.log("-----------------------"),G}function v(u){h=u,n(0,h)}function V(u){s=u,y1.set(s)}function N(u){f=u,n(1,f)}return a.$$set=u=>{"allCountries"in u&&n(7,o=u.allCountries)},a.$$.update=()=>{a.$$.dirty&1&&n(3,l=h&&h.value),a.$$.dirty&2&&n(2,t=f&&f.value),a.$$.dirty&16&&n(8,r=s&&s.map(u=>u.value)),a.$$.dirty&268&&n(5,i=r&&l&&t&&m(r))},[h,f,t,l,s,i,c,o,r,v,V,N]}class ne extends n1{constructor(e){super();a1(this,e,ee,x1,s1,{allCountries:7})}}export{ne as default,le as load};