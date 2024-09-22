import{r as xe,s as me,a as je,x as q,u as Te,g as Oe,b as We,y as Le,z as ie,o as lt,A as Pe,e as st}from"../chunks/scheduler.CjZ6x9ss.js";import{p as P,S as Ie,i as ye,z as et,u as Ce,A as tt,a as F,d as k,B as Se,g as he,h as m,q as H,C as ot,l as ge,m as pe,o as be,r as _e,e as E,s as Z,t as ze,D as at,c as N,f as J,b as Ge,k as Ne,n as v,E as oe,F as de,j as nt,v as it,w as ae,x as rt}from"../chunks/index.DTdbICNU.js";import{a as ct,b as ut,c as ft}from"../chunks/index.CU4dFde9.js";const dt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Ae(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function ht(l,e){l.d(1),e.delete(l.key)}function mt(l,e,o,t,n,s,a,r,g,u,b,_){let i=l.length,d=s.length,c=i;const T={};for(;c--;)T[l[c].key]=c;const O=[],K=new Map,R=new Map,C=[];for(c=d;c--;){const h=_(n,s,c),z=o(h);let S=a.get(z);S?C.push(()=>S.p(h,e)):(S=u(z,h),S.c()),K.set(z,O[c]=S),z in T&&R.set(z,Math.abs(c-T[z]))}const $=new Set,Y=new Set;function w(h){P(h,1),h.m(r,b),a.set(h.key,h),b=h.first,d--}for(;i&&d;){const h=O[d-1],z=l[i-1],S=h.key,A=z.key;h===z?(b=h.first,i--,d--):K.has(A)?!a.has(S)||$.has(S)?w(h):Y.has(A)?i--:R.get(S)>R.get(A)?(Y.add(S),w(h)):($.add(A),i--):(g(z,a),i--)}for(;i--;){const h=l[i];K.has(h.key)||g(h,a)}for(;d;)w(O[d-1]);return xe(C),O}function Me(l,e){const o={},t={},n={$$scope:1};let s=l.length;for(;s--;){const a=l[s],r=e[s];if(r){for(const g in a)g in r||(t[g]=1);for(const g in r)n[g]||(o[g]=r[g],n[g]=1);l[s]=r}else for(const g in a)n[g]=1}for(const a in t)a in o||(o[a]=void 0);return o}function Ze(l){return typeof l=="object"&&l!==null?l:{}}const gt=!0,pt=!1,Zt=Object.freeze(Object.defineProperty({__proto__:null,prerender:gt,ssr:pt},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-svelte v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function Qe(l,e,o){const t=l.slice();return t[11]=e[o][0],t[12]=e[o][1],t}function Re(l){let e,o=[l[12]],t={};for(let n=0;n<o.length;n+=1)t=q(t,o[n]);return{c(){e=et(l[11]),this.h()},l(n){e=tt(n,l[11],{}),F(e).forEach(k),this.h()},h(){Se(e,t)},m(n,s){he(n,e,s)},p(n,s){Se(e,t=Me(o,[s&32&&n[12]]))},d(n){n&&k(e)}}}function He(l){let e=l[11],o,t=l[11]&&Re(l);return{c(){t&&t.c(),o=Ce()},l(n){t&&t.l(n),o=Ce()},m(n,s){t&&t.m(n,s),he(n,o,s)},p(n,s){n[11]?e?me(e,n[11])?(t.d(1),t=Re(n),e=n[11],t.c(),t.m(o.parentNode,o)):t.p(n,s):(t=Re(n),e=n[11],t.c(),t.m(o.parentNode,o)):e&&(t.d(1),t=null,e=n[11])},d(n){n&&k(o),t&&t.d(n)}}}function bt(l){let e,o,t,n,s,a=Ae(l[5]),r=[];for(let i=0;i<a.length;i+=1)r[i]=He(Qe(l,a,i));const g=l[10].default,u=je(g,l,l[9],null);let b=[qe,l[7],{width:l[2]},{height:l[2]},{stroke:l[1]},{"stroke-width":t=l[4]?Number(l[3])*24/Number(l[2]):l[3]},{class:n=l[6]("lucide-icon","lucide",l[0]?`lucide-${l[0]}`:"",l[8].class)}],_={};for(let i=0;i<b.length;i+=1)_=q(_,b[i]);return{c(){e=et("svg");for(let i=0;i<r.length;i+=1)r[i].c();o=Ce(),u&&u.c(),this.h()},l(i){e=tt(i,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var d=F(e);for(let c=0;c<r.length;c+=1)r[c].l(d);o=Ce(),u&&u.l(d),d.forEach(k),this.h()},h(){Se(e,_)},m(i,d){he(i,e,d);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);m(e,o),u&&u.m(e,null),s=!0},p(i,[d]){if(d&32){a=Ae(i[5]);let c;for(c=0;c<a.length;c+=1){const T=Qe(i,a,c);r[c]?r[c].p(T,d):(r[c]=He(T),r[c].c(),r[c].m(e,o))}for(;c<r.length;c+=1)r[c].d(1);r.length=a.length}u&&u.p&&(!s||d&512)&&Te(u,g,i,i[9],s?We(g,i[9],d,null):Oe(i[9]),null),Se(e,_=Me(b,[qe,d&128&&i[7],(!s||d&4)&&{width:i[2]},(!s||d&4)&&{height:i[2]},(!s||d&2)&&{stroke:i[1]},(!s||d&28&&t!==(t=i[4]?Number(i[3])*24/Number(i[2]):i[3]))&&{"stroke-width":t},(!s||d&257&&n!==(n=i[6]("lucide-icon","lucide",i[0]?`lucide-${i[0]}`:"",i[8].class)))&&{class:n}]))},i(i){s||(P(u,i),s=!0)},o(i){H(u,i),s=!1},d(i){i&&k(e),ot(r,i),u&&u.d(i)}}}function _t(l,e,o){const t=["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"];let n=Le(e,t),{$$slots:s={},$$scope:a}=e,{name:r=void 0}=e,{color:g="currentColor"}=e,{size:u=24}=e,{strokeWidth:b=2}=e,{absoluteStrokeWidth:_=!1}=e,{iconNode:i=[]}=e;const d=(...c)=>c.filter((T,O,K)=>!!T&&K.indexOf(T)===O).join(" ");return l.$$set=c=>{o(8,e=q(q({},e),ie(c))),o(7,n=Le(e,t)),"name"in c&&o(0,r=c.name),"color"in c&&o(1,g=c.color),"size"in c&&o(2,u=c.size),"strokeWidth"in c&&o(3,b=c.strokeWidth),"absoluteStrokeWidth"in c&&o(4,_=c.absoluteStrokeWidth),"iconNode"in c&&o(5,i=c.iconNode),"$$scope"in c&&o(9,a=c.$$scope)},e=ie(e),[r,g,u,b,_,i,d,n,e,a,s]}class Je extends Ie{constructor(e){super(),ye(this,e,_t,bt,me,{name:0,color:1,size:2,strokeWidth:3,absoluteStrokeWidth:4,iconNode:5})}}function vt(l){let e;const o=l[2].default,t=je(o,l,l[3],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,s){t&&t.m(n,s),e=!0},p(n,s){t&&t.p&&(!e||s&8)&&Te(t,o,n,n[3],e?We(o,n[3],s,null):Oe(n[3]),null)},i(n){e||(P(t,n),e=!0)},o(n){H(t,n),e=!1},d(n){t&&t.d(n)}}}function kt(l){let e,o;const t=[{name:"mic-off"},l[1],{iconNode:l[0]}];let n={$$slots:{default:[vt]},$$scope:{ctx:l}};for(let s=0;s<t.length;s+=1)n=q(n,t[s]);return e=new Je({props:n}),{c(){ge(e.$$.fragment)},l(s){pe(e.$$.fragment,s)},m(s,a){be(e,s,a),o=!0},p(s,[a]){const r=a&3?Me(t,[t[0],a&2&&Ze(s[1]),a&1&&{iconNode:s[0]}]):{};a&8&&(r.$$scope={dirty:a,ctx:s}),e.$set(r)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){H(e.$$.fragment,s),o=!1},d(s){_e(e,s)}}}function wt(l,e,o){let{$$slots:t={},$$scope:n}=e;const s=[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]];return l.$$set=a=>{o(1,e=q(q({},e),ie(a))),"$$scope"in a&&o(3,n=a.$$scope)},e=ie(e),[s,e,t,n]}class It extends Ie{constructor(e){super(),ye(this,e,wt,kt,me,{})}}function yt(l){let e;const o=l[2].default,t=je(o,l,l[3],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,s){t&&t.m(n,s),e=!0},p(n,s){t&&t.p&&(!e||s&8)&&Te(t,o,n,n[3],e?We(o,n[3],s,null):Oe(n[3]),null)},i(n){e||(P(t,n),e=!0)},o(n){H(t,n),e=!1},d(n){t&&t.d(n)}}}function Mt(l){let e,o;const t=[{name:"mic"},l[1],{iconNode:l[0]}];let n={$$slots:{default:[yt]},$$scope:{ctx:l}};for(let s=0;s<t.length;s+=1)n=q(n,t[s]);return e=new Je({props:n}),{c(){ge(e.$$.fragment)},l(s){pe(e.$$.fragment,s)},m(s,a){be(e,s,a),o=!0},p(s,[a]){const r=a&3?Me(t,[t[0],a&2&&Ze(s[1]),a&1&&{iconNode:s[0]}]):{};a&8&&(r.$$scope={dirty:a,ctx:s}),e.$set(r)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){H(e.$$.fragment,s),o=!1},d(s){_e(e,s)}}}function Et(l,e,o){let{$$slots:t={},$$scope:n}=e;const s=[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]];return l.$$set=a=>{o(1,e=q(q({},e),ie(a))),"$$scope"in a&&o(3,n=a.$$scope)},e=ie(e),[s,e,t,n]}class Nt extends Ie{constructor(e){super(),ye(this,e,Et,Mt,me,{})}}function Ct(l){let e;const o=l[2].default,t=je(o,l,l[3],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,s){t&&t.m(n,s),e=!0},p(n,s){t&&t.p&&(!e||s&8)&&Te(t,o,n,n[3],e?We(o,n[3],s,null):Oe(n[3]),null)},i(n){e||(P(t,n),e=!0)},o(n){H(t,n),e=!1},d(n){t&&t.d(n)}}}function St(l){let e,o;const t=[{name:"phone"},l[1],{iconNode:l[0]}];let n={$$slots:{default:[Ct]},$$scope:{ctx:l}};for(let s=0;s<t.length;s+=1)n=q(n,t[s]);return e=new Je({props:n}),{c(){ge(e.$$.fragment)},l(s){pe(e.$$.fragment,s)},m(s,a){be(e,s,a),o=!0},p(s,[a]){const r=a&3?Me(t,[t[0],a&2&&Ze(s[1]),a&1&&{iconNode:s[0]}]):{};a&8&&(r.$$scope={dirty:a,ctx:s}),e.$set(r)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){H(e.$$.fragment,s),o=!1},d(s){_e(e,s)}}}function At(l,e,o){let{$$slots:t={},$$scope:n}=e;const s=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]];return l.$$set=a=>{o(1,e=q(q({},e),ie(a))),"$$scope"in a&&o(3,n=a.$$scope)},e=ie(e),[s,e,t,n]}class jt extends Ie{constructor(e){super(),ye(this,e,At,St,me,{})}}const{document:Ve}=dt;function Ke(l,e,o){const t=l.slice();return t[39]=e[o],t}function $e(l,e){let o,t,n=e[39].response+"",s,a,r,g,u;return{key:l,first:null,c(){o=E("div"),t=E("p"),s=ze(n),a=Z(),r=E("img"),u=Z(),this.h()},l(b){o=N(b,"DIV",{class:!0,style:!0});var _=F(o);t=N(_,"P",{class:!0});var i=F(t);s=Ge(i,n),i.forEach(k),a=J(_),r=N(_,"IMG",{src:!0,alt:!0,class:!0}),u=J(_),_.forEach(k),this.h()},h(){v(t,"class","gpt-response text-3xl bg-white p-1 rounded-md mb-1 svelte-4h068b"),Pe(r.src,g="src/lib/images/"+e[39].image)||v(r,"src",g),v(r,"alt","Emotion Image"),v(r,"class","fade svelte-4h068b"),v(o,"class","fukidasi absolute svelte-4h068b"),ae(o,"top",e[39].position.top),ae(o,"left",e[39].position.left),ae(o,"right",e[39].position.right),ae(o,"bottom",e[39].position.bottom),this.first=o},m(b,_){he(b,o,_),m(o,t),m(t,s),m(o,a),m(o,r),m(o,u)},p(b,_){e=b,_[0]&4&&n!==(n=e[39].response+"")&&nt(s,n),_[0]&4&&!Pe(r.src,g="src/lib/images/"+e[39].image)&&v(r,"src",g),_[0]&4&&ae(o,"top",e[39].position.top),_[0]&4&&ae(o,"left",e[39].position.left),_[0]&4&&ae(o,"right",e[39].position.right),_[0]&4&&ae(o,"bottom",e[39].position.bottom)},d(b){b&&k(o)}}}function Tt(l){let e,o;return e=new It({props:{class:"w-8 h-8"}}),{c(){ge(e.$$.fragment)},l(t){pe(e.$$.fragment,t)},m(t,n){be(e,t,n),o=!0},i(t){o||(P(e.$$.fragment,t),o=!0)},o(t){H(e.$$.fragment,t),o=!1},d(t){_e(e,t)}}}function Ot(l){let e,o;return e=new Nt({props:{class:"w-8 h-8"}}),{c(){ge(e.$$.fragment)},l(t){pe(e.$$.fragment,t)},m(t,n){be(e,t,n),o=!0},i(t){o||(P(e.$$.fragment,t),o=!0)},o(t){H(e.$$.fragment,t),o=!1},d(t){_e(e,t)}}}function Wt(l){let e,o,t,n,s,a,r,g,u,b,_="喜",i,d,c="怒",T,O,K="哀",R,C,$="楽",Y,w,h=[],z=new Map,S,A,G,re,Q,ve,ce,ke,ue,fe,x,ee,B,U,we,X,le,p,y,W,I=Ae(l[2]);const te=f=>f[39].id;for(let f=0;f<I.length;f+=1){let M=Ke(l,I,f),j=te(M);z.set(j,h[f]=$e(j,M))}const L=[Ot,Tt],V=[];function D(f,M){return f[1]?0:1}return B=D(l),U=V[B]=L[B](l),le=new jt({props:{class:"w-8 h-8"}}),{c(){e=E("meta"),o=Z(),t=E("section"),n=E("p"),s=ze("ID: "),a=E("span"),r=ze(l[4]),g=Z(),u=E("div"),b=E("button"),b.textContent=_,i=Z(),d=E("button"),d.textContent=c,T=Z(),O=E("button"),O.textContent=K,R=Z(),C=E("button"),C.textContent=$,Y=Z(),w=E("article");for(let f=0;f<h.length;f+=1)h[f].c();S=Z(),A=E("div"),G=E("video"),re=Z(),Q=E("div"),ve=Z(),ce=E("div"),ke=Z(),ue=E("div"),fe=Z(),x=E("div"),ee=E("button"),U.c(),we=Z(),X=E("button"),ge(le.$$.fragment),this.h()},l(f){const M=at("svelte-xgg23l",Ve.head);e=N(M,"META",{name:!0,content:!0,class:!0}),M.forEach(k),o=J(f),t=N(f,"SECTION",{class:!0});var j=F(t);n=N(j,"P",{class:!0});var De=F(n);s=Ge(De,"ID: "),a=N(De,"SPAN",{id:!0,class:!0});var Ye=F(a);r=Ge(Ye,l[4]),Ye.forEach(k),De.forEach(k),g=J(j),u=N(j,"DIV",{class:!0});var se=F(u);b=N(se,"BUTTON",{class:!0,"data-svelte-h":!0}),Ne(b)!=="svelte-1o2mll0"&&(b.textContent=_),i=J(se),d=N(se,"BUTTON",{class:!0,"data-svelte-h":!0}),Ne(d)!=="svelte-8hmwgh"&&(d.textContent=c),T=J(se),O=N(se,"BUTTON",{class:!0,"data-svelte-h":!0}),Ne(O)!=="svelte-1dqnekx"&&(O.textContent=K),R=J(se),C=N(se,"BUTTON",{class:!0,"data-svelte-h":!0}),Ne(C)!=="svelte-v34who"&&(C.textContent=$),se.forEach(k),Y=J(j),w=N(j,"ARTICLE",{class:!0});var ne=F(w);for(let Fe=0;Fe<h.length;Fe+=1)h[Fe].l(ne);S=J(ne),A=N(ne,"DIV",{class:!0});var Be=F(A);G=N(Be,"VIDEO",{class:!0}),F(G).forEach(k),Be.forEach(k),re=J(ne),Q=N(ne,"DIV",{class:!0}),F(Q).forEach(k),ve=J(ne),ce=N(ne,"DIV",{class:!0}),F(ce).forEach(k),ke=J(ne),ue=N(ne,"DIV",{class:!0}),F(ue).forEach(k),ne.forEach(k),fe=J(j),x=N(j,"DIV",{class:!0});var Ee=F(x);ee=N(Ee,"BUTTON",{class:!0});var Ue=F(ee);U.l(Ue),Ue.forEach(k),we=J(Ee),X=N(Ee,"BUTTON",{class:!0});var Xe=F(X);pe(le.$$.fragment,Xe),Xe.forEach(k),Ee.forEach(k),j.forEach(k),this.h()},h(){Ve.title="天才たちの恋愛頭脳戦通話アプリ",v(e,"name","description"),v(e,"content","SvelteKit video call application"),v(e,"class","svelte-4h068b"),v(a,"id","my-id"),v(a,"class","svelte-4h068b"),v(n,"class","text-center svelte-4h068b"),v(b,"class","px-4 py-2 bg-yellow-400 text-black rounded-full svelte-4h068b"),v(d,"class","px-4 py-2 bg-red-500 text-white rounded-full svelte-4h068b"),v(O,"class","px-4 py-2 bg-blue-500 text-white rounded-full svelte-4h068b"),v(C,"class","px-4 py-2 bg-green-500 text-white rounded-full svelte-4h068b"),v(u,"class","flex space-x-4 justify-center svelte-4h068b"),v(G,"class","w-full h-full object-cover svelte-4h068b"),G.muted=!0,G.playsInline=!0,v(A,"class","panel flex-grow basis-[400px] relative border-8 svelte-4h068b"),oe(A,"border-red-500",l[5]),oe(A,"border-black",!l[5]),v(Q,"class","panel flex-grow basis-[500px] cartoon-frame svelte-4h068b"),v(ce,"class","panel flex-grow basis-[500px] cartoon-frame svelte-4h068b"),v(ue,"class","panel flex-grow basis-[400px] cartoon-frame svelte-4h068b"),v(w,"class","flex flex-wrap font-comic-sans p-[5vmin] mx-64 relative svelte-4h068b"),v(ee,"class","w-16 h-16 rounded-full border-2 border-black flex items-center justify-center bg-gray-200 svelte-4h068b"),v(X,"class","w-16 h-16 rounded-full border-2 border-black flex items-center justify-center transition-colors duration-300 svelte-4h068b"),oe(X,"bg-[#57EEF8]",l[0]),oe(X,"bg-[#EE1971]",!l[0]),v(x,"class","flex space-x-4 justify-center svelte-4h068b"),v(t,"class","min-h-screen bg-gray-100 svelte-4h068b")},m(f,M){m(Ve.head,e),he(f,o,M),he(f,t,M),m(t,n),m(n,s),m(n,a),m(a,r),m(t,g),m(t,u),m(u,b),m(u,i),m(u,d),m(u,T),m(u,O),m(u,R),m(u,C),m(t,Y),m(t,w);for(let j=0;j<h.length;j+=1)h[j]&&h[j].m(w,null);m(w,S),m(w,A),m(A,G),l[13](G),m(w,re),m(w,Q),m(w,ve),m(w,ce),m(w,ke),m(w,ue),m(t,fe),m(t,x),m(x,ee),V[B].m(ee,null),m(x,we),m(x,X),be(le,X,null),p=!0,y||(W=[de(b,"click",l[9]),de(d,"click",l[10]),de(O,"click",l[11]),de(C,"click",l[12]),de(ee,"click",l[8]),de(X,"click",l[7])],y=!0)},p(f,M){(!p||M[0]&16)&&nt(r,f[4]),M[0]&4&&(I=Ae(f[2]),h=mt(h,M,te,1,f,I,z,w,ht,$e,S,Ke)),(!p||M[0]&32)&&oe(A,"border-red-500",f[5]),(!p||M[0]&32)&&oe(A,"border-black",!f[5]);let j=B;B=D(f),B!==j&&(rt(),H(V[j],1,1,()=>{V[j]=null}),it(),U=V[B],U||(U=V[B]=L[B](f),U.c()),P(U,1),U.m(ee,null)),(!p||M[0]&1)&&oe(X,"bg-[#57EEF8]",f[0]),(!p||M[0]&1)&&oe(X,"bg-[#EE1971]",!f[0])},i(f){p||(P(U),P(le.$$.fragment,f),p=!0)},o(f){H(U),H(le.$$.fragment,f),p=!1},d(f){f&&(k(o),k(t)),k(e);for(let M=0;M<h.length;M+=1)h[M].d();l[13](null),V[B].d(),_e(le),y=!1,xe(W)}}}let Dt=.02;function Ft(l,e){l.audioContext=new AudioContext;const o=l.audioContext.createMediaStreamSource(new MediaStream([e.track])),t=l.audioContext.createAnalyser();t.fftSize=256,o.connect(t);const n=new Float32Array(t.fftSize);function s(){t.getFloatTimeDomainData(n);let a=0;for(let u=0;u<n.length;u++)a+=n[u]*n[u];let r=Math.sqrt(a/n.length);const g=.22;l.isSpeaking=r>g,l.panel&&(l.isSpeaking?(l.panel.classList.add("border-red-500"),l.panel.classList.remove("border-black")):(l.panel.classList.add("border-black"),l.panel.classList.remove("border-red-500"))),l.animationId=requestAnimationFrame(s)}s()}function Rt(l,e,o){let t=!0,n=!0,s=[];const a={happy:"Nomal1.png",angry:"DO.png",sad:"think.png",surprised:"Do2.png"},r=[{top:"0",left:"0"},{top:"0",right:"0"},{bottom:"0",left:"0"},{bottom:"0",right:"0"}];function g(){if(S.length===0)return"No response available";const p=Math.floor(Math.random()*S.length);return S[p]}function u(p){const y=r[Math.floor(Math.random()*r.length)],W={image:a[p],position:y,id:Date.now(),response:g()};o(2,s=[...s,W]),setTimeout(()=>{o(2,s=s.filter(I=>I.id!==W.id))},5e3)}function b(){o(0,t=!t),t?ce():ve()}function _(){o(1,n=!n),C&&(C.track.enabled=n)}let i,d=[],c="",T,O,K,R,C,$,Y,w,h=!1,z=null,S=[],A=!1,G,re=[],Q={};lt(async()=>{d=Array.from(document.getElementsByClassName("cartoon-frame")),typeof window<"u"&&window.RTCPeerConnection&&(K="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4OGY1OTgwNi1lNWM3LTRmZWYtOGMxMi1jOGQ2ZWRhNTRkYWMiLCJpYXQiOjE3MjY5MTc2MDIsImV4cCI6MTcyNzAwNDAwMiwic2NvcGUiOnsiYXBwIjp7ImlkIjoiZWJlMDBjNjMtMDU1OS00ZjZhLTkyZGEtNWViNGMwNDE1NjVjIiwidHVybiI6dHJ1ZSwiYWN0aW9ucyI6WyJyZWFkIl0sImNoYW5uZWxzIjpbeyJpZCI6IioiLCJuYW1lIjoiKiIsImFjdGlvbnMiOlsid3JpdGUiXSwibWVtYmVycyI6W3siaWQiOiIqIiwibmFtZSI6IioiLCJhY3Rpb25zIjpbIndyaXRlIl0sInB1YmxpY2F0aW9uIjp7ImFjdGlvbnMiOlsid3JpdGUiXX0sInN1YnNjcmlwdGlvbiI6eyJhY3Rpb25zIjpbIndyaXRlIl19fV0sInNmdUJvdHMiOlt7ImFjdGlvbnMiOlsid3JpdGUiXSwiZm9yd2FyZGluZ3MiOlt7ImFjdGlvbnMiOlsid3JpdGUiXX1dfV19XX19fQ.lg0ghxp5uR-WsnIGorzAdZq32IVAV64tQFZZxPKYf50")});async function ve(){O=await ct.Create(K),T=await ut.FindOrCreate(O,{type:"p2p",name:"love_is_war"}),R=await T.join(),o(4,c=R.id);const{audio:p,video:y}=await ft.createMicrophoneAudioAndCameraStream();C=p,$=y,y.attach(i),await i.play(),await R.publish(p),await R.publish(y),ke();const W=async I=>{if(I.publisher.id===R.id)return;const te=I.publisher.id;Q[te]||(Q[te]={panel:null,videoElement:null,audioElement:null,isSpeaking:!1,audioContext:null,animationId:null});const L=Q[te],{stream:V}=await R.subscribe(I.id);if(!L.panel){const D=d.find(f=>f.childElementCount===0);if(!D)return;L.panel=D,L.panel.classList.add("border-8","border-black","relative")}if(V.track.kind==="video"){const D=document.createElement("video");D.playsInline=!0,D.autoplay=!0,D.className="w-full h-full object-cover",V.attach(D),L.panel.appendChild(D),L.videoElement=D}else if(V.track.kind==="audio"){const D=document.createElement("audio");D.autoplay=!0,V.attach(D),L.audioElement=D,Ft(L,V)}};T.publications.forEach(W),T.onStreamPublished.add(I=>W(I.publication))}async function ce(){if(R){await R.leave(),await T.dispose(),o(4,c=""),d.forEach(p=>p.replaceChildren()),C&&(C.track.stop(),C=null),$&&($.track.stop(),$=null),Y&&(Y.close(),Y=null),w&&(cancelAnimationFrame(w),w=null);for(let p in Q){const y=Q[p];y.audioContext&&(y.audioContext.close(),y.audioContext=null),y.animationId&&(cancelAnimationFrame(y.animationId),y.animationId=null)}Q={}}}function ke(){Y=new AudioContext;const p=new MediaStream([C.track]),y=Y.createMediaStreamSource(p),W=Y.createAnalyser();W.fftSize=256,y.connect(W);const I=new Float32Array(W.fftSize);let te=!1;function L(){W.getFloatTimeDomainData(I);let V=0;for(let f=0;f<I.length;f++)V+=I[f]*I[f];let D=Math.sqrt(V/I.length);o(5,h=D>Dt),h&&!te?(console.log("開始"),ue()):!h&&te&&(console.log("終了"),x()),te=h,w=requestAnimationFrame(L)}L()}function ue(){A||(A=!0,G=new MediaRecorder(new MediaStream([C.track])),re=[],G.ondataavailable=p=>{re.push(p.data)},G.onstop=()=>{console.log("送信");const p=new Blob(re,{type:"audio/webm"});ee(p)},G.start())}let fe;function x(){A&&(clearTimeout(fe),fe=setTimeout(()=>{A=!1,G.stop()},1e3))}async function ee(p){const y=new FormData;y.append("audio",p,"recording.webm");try{const W=await fetch("https://shinsekai-django.tunn.dev/api/v1/transcribe/",{method:"POST",body:y});if(W.ok){const I=await W.json();z=I.text,S=I.gpt_responses,console.log("Server response:",I)}else console.error("Failed to send audio file")}catch(W){console.error("An error occurred",W)}}const B=()=>u("happy"),U=()=>u("angry"),we=()=>u("sad"),X=()=>u("surprised");function le(p){st[p?"unshift":"push"](()=>{i=p,o(3,i)})}return[t,n,s,i,c,h,u,b,_,B,U,we,X,le]}class Jt extends Ie{constructor(e){super(),ye(this,e,Rt,Wt,me,{},null,[-1,-1])}}export{Jt as component,Zt as universal};
