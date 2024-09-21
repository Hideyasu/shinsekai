import{r as xe,s as ce,a as Ne,x as z,u as Me,g as Ee,b as je,y as Be,z as te,o as lt,A as Xe,e as nt}from"../chunks/scheduler.CjZ6x9ss.js";import{p as Z,S as me,i as _e,z as et,u as we,A as tt,a as S,d as p,B as Ie,g as re,h,q as J,C as st,l as ue,m as fe,o as de,r as he,e as w,s as A,t as Pe,D as ot,c as I,f as G,b as Le,k as ve,n as g,E as ke,F as ae,j as it,v as at,w as ee,x as rt}from"../chunks/index.DTdbICNU.js";import{a as ct,b as ut,c as ft}from"../chunks/index.CU4dFde9.js";const dt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ye(o){return(o==null?void 0:o.length)!==void 0?o:Array.from(o)}function ht(o,e){o.d(1),e.delete(o.key)}function mt(o,e,s,t,l,n,i,r,_,f,b,N){let a=o.length,u=n.length,c=a;const W={};for(;c--;)W[o[c].key]=c;const M=[],j=new Map,V=new Map,O=[];for(c=u;c--;){const d=N(l,n,c),T=s(d);let C=i.get(T);C?O.push(()=>C.p(d,e)):(C=f(T,d),C.c()),j.set(T,M[c]=C),T in W&&V.set(T,Math.abs(c-W[T]))}const le=new Set,K=new Set;function v(d){Z(d,1),d.m(r,b),i.set(d.key,d),b=d.first,u--}for(;a&&u;){const d=M[u-1],T=o[a-1],C=d.key,D=T.key;d===T?(b=d.first,a--,u--):j.has(D)?!i.has(C)||le.has(C)?v(d):K.has(D)?a--:V.get(C)>V.get(D)?(K.add(C),v(d)):(le.add(D),a--):(_(T,i),a--)}for(;a--;){const d=o[a];j.has(d.key)||_(d,i)}for(;u;)v(M[u-1]);return xe(O),M}function ge(o,e){const s={},t={},l={$$scope:1};let n=o.length;for(;n--;){const i=o[n],r=e[n];if(r){for(const _ in i)_ in r||(t[_]=1);for(const _ in r)l[_]||(s[_]=r[_],l[_]=1);o[n]=r}else for(const _ in i)l[_]=1}for(const i in t)i in s||(s[i]=void 0);return s}function De(o){return typeof o=="object"&&o!==null?o:{}}const _t=!0,gt=!1,zt=Object.freeze(Object.defineProperty({__proto__:null,prerender:_t,ssr:gt},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-svelte v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function Qe(o,e,s){const t=o.slice();return t[11]=e[s][0],t[12]=e[s][1],t}function Te(o){let e,s=[o[12]],t={};for(let l=0;l<s.length;l+=1)t=z(t,s[l]);return{c(){e=et(o[11]),this.h()},l(l){e=tt(l,o[11],{}),S(e).forEach(p),this.h()},h(){Ie(e,t)},m(l,n){re(l,e,n)},p(l,n){Ie(e,t=ge(s,[n&32&&l[12]]))},d(l){l&&p(e)}}}function He(o){let e=o[11],s,t=o[11]&&Te(o);return{c(){t&&t.c(),s=we()},l(l){t&&t.l(l),s=we()},m(l,n){t&&t.m(l,n),re(l,s,n)},p(l,n){l[11]?e?ce(e,l[11])?(t.d(1),t=Te(l),e=l[11],t.c(),t.m(s.parentNode,s)):t.p(l,n):(t=Te(l),e=l[11],t.c(),t.m(s.parentNode,s)):e&&(t.d(1),t=null,e=l[11])},d(l){l&&p(s),t&&t.d(l)}}}function pt(o){let e,s,t,l,n,i=ye(o[5]),r=[];for(let a=0;a<i.length;a+=1)r[a]=He(Qe(o,i,a));const _=o[10].default,f=Ne(_,o,o[9],null);let b=[qe,o[7],{width:o[2]},{height:o[2]},{stroke:o[1]},{"stroke-width":t=o[4]?Number(o[3])*24/Number(o[2]):o[3]},{class:l=o[6]("lucide-icon","lucide",o[0]?`lucide-${o[0]}`:"",o[8].class)}],N={};for(let a=0;a<b.length;a+=1)N=z(N,b[a]);return{c(){e=et("svg");for(let a=0;a<r.length;a+=1)r[a].c();s=we(),f&&f.c(),this.h()},l(a){e=tt(a,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var u=S(e);for(let c=0;c<r.length;c+=1)r[c].l(u);s=we(),f&&f.l(u),u.forEach(p),this.h()},h(){Ie(e,N)},m(a,u){re(a,e,u);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);h(e,s),f&&f.m(e,null),n=!0},p(a,[u]){if(u&32){i=ye(a[5]);let c;for(c=0;c<i.length;c+=1){const W=Qe(a,i,c);r[c]?r[c].p(W,u):(r[c]=He(W),r[c].c(),r[c].m(e,s))}for(;c<r.length;c+=1)r[c].d(1);r.length=i.length}f&&f.p&&(!n||u&512)&&Me(f,_,a,a[9],n?je(_,a[9],u,null):Ee(a[9]),null),Ie(e,N=ge(b,[qe,u&128&&a[7],(!n||u&4)&&{width:a[2]},(!n||u&4)&&{height:a[2]},(!n||u&2)&&{stroke:a[1]},(!n||u&28&&t!==(t=a[4]?Number(a[3])*24/Number(a[2]):a[3]))&&{"stroke-width":t},(!n||u&257&&l!==(l=a[6]("lucide-icon","lucide",a[0]?`lucide-${a[0]}`:"",a[8].class)))&&{class:l}]))},i(a){n||(Z(f,a),n=!0)},o(a){J(f,a),n=!1},d(a){a&&p(e),st(r,a),f&&f.d(a)}}}function bt(o,e,s){const t=["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"];let l=Be(e,t),{$$slots:n={},$$scope:i}=e,{name:r=void 0}=e,{color:_="currentColor"}=e,{size:f=24}=e,{strokeWidth:b=2}=e,{absoluteStrokeWidth:N=!1}=e,{iconNode:a=[]}=e;const u=(...c)=>c.filter((W,M,j)=>!!W&&j.indexOf(W)===M).join(" ");return o.$$set=c=>{s(8,e=z(z({},e),te(c))),s(7,l=Be(e,t)),"name"in c&&s(0,r=c.name),"color"in c&&s(1,_=c.color),"size"in c&&s(2,f=c.size),"strokeWidth"in c&&s(3,b=c.strokeWidth),"absoluteStrokeWidth"in c&&s(4,N=c.absoluteStrokeWidth),"iconNode"in c&&s(5,a=c.iconNode),"$$scope"in c&&s(9,i=c.$$scope)},e=te(e),[r,_,f,b,N,a,u,l,e,i,n]}class Ae extends me{constructor(e){super(),_e(this,e,bt,pt,ce,{name:0,color:1,size:2,strokeWidth:3,absoluteStrokeWidth:4,iconNode:5})}}function vt(o){let e;const s=o[2].default,t=Ne(s,o,o[3],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,n){t&&t.m(l,n),e=!0},p(l,n){t&&t.p&&(!e||n&8)&&Me(t,s,l,l[3],e?je(s,l[3],n,null):Ee(l[3]),null)},i(l){e||(Z(t,l),e=!0)},o(l){J(t,l),e=!1},d(l){t&&t.d(l)}}}function kt(o){let e,s;const t=[{name:"mic-off"},o[1],{iconNode:o[0]}];let l={$$slots:{default:[vt]},$$scope:{ctx:o}};for(let n=0;n<t.length;n+=1)l=z(l,t[n]);return e=new Ae({props:l}),{c(){ue(e.$$.fragment)},l(n){fe(e.$$.fragment,n)},m(n,i){de(e,n,i),s=!0},p(n,[i]){const r=i&3?ge(t,[t[0],i&2&&De(n[1]),i&1&&{iconNode:n[0]}]):{};i&8&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){s||(Z(e.$$.fragment,n),s=!0)},o(n){J(e.$$.fragment,n),s=!1},d(n){he(e,n)}}}function wt(o,e,s){let{$$slots:t={},$$scope:l}=e;const n=[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]];return o.$$set=i=>{s(1,e=z(z({},e),te(i))),"$$scope"in i&&s(3,l=i.$$scope)},e=te(e),[n,e,t,l]}class It extends me{constructor(e){super(),_e(this,e,wt,kt,ce,{})}}function yt(o){let e;const s=o[2].default,t=Ne(s,o,o[3],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,n){t&&t.m(l,n),e=!0},p(l,n){t&&t.p&&(!e||n&8)&&Me(t,s,l,l[3],e?je(s,l[3],n,null):Ee(l[3]),null)},i(l){e||(Z(t,l),e=!0)},o(l){J(t,l),e=!1},d(l){t&&t.d(l)}}}function Nt(o){let e,s;const t=[{name:"mic"},o[1],{iconNode:o[0]}];let l={$$slots:{default:[yt]},$$scope:{ctx:o}};for(let n=0;n<t.length;n+=1)l=z(l,t[n]);return e=new Ae({props:l}),{c(){ue(e.$$.fragment)},l(n){fe(e.$$.fragment,n)},m(n,i){de(e,n,i),s=!0},p(n,[i]){const r=i&3?ge(t,[t[0],i&2&&De(n[1]),i&1&&{iconNode:n[0]}]):{};i&8&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){s||(Z(e.$$.fragment,n),s=!0)},o(n){J(e.$$.fragment,n),s=!1},d(n){he(e,n)}}}function Mt(o,e,s){let{$$slots:t={},$$scope:l}=e;const n=[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]];return o.$$set=i=>{s(1,e=z(z({},e),te(i))),"$$scope"in i&&s(3,l=i.$$scope)},e=te(e),[n,e,t,l]}class Et extends me{constructor(e){super(),_e(this,e,Mt,Nt,ce,{})}}function jt(o){let e;const s=o[2].default,t=Ne(s,o,o[3],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,n){t&&t.m(l,n),e=!0},p(l,n){t&&t.p&&(!e||n&8)&&Me(t,s,l,l[3],e?je(s,l[3],n,null):Ee(l[3]),null)},i(l){e||(Z(t,l),e=!0)},o(l){J(t,l),e=!1},d(l){t&&t.d(l)}}}function Ct(o){let e,s;const t=[{name:"phone"},o[1],{iconNode:o[0]}];let l={$$slots:{default:[jt]},$$scope:{ctx:o}};for(let n=0;n<t.length;n+=1)l=z(l,t[n]);return e=new Ae({props:l}),{c(){ue(e.$$.fragment)},l(n){fe(e.$$.fragment,n)},m(n,i){de(e,n,i),s=!0},p(n,[i]){const r=i&3?ge(t,[t[0],i&2&&De(n[1]),i&1&&{iconNode:n[0]}]):{};i&8&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){s||(Z(e.$$.fragment,n),s=!0)},o(n){J(e.$$.fragment,n),s=!1},d(n){he(e,n)}}}function Wt(o,e,s){let{$$slots:t={},$$scope:l}=e;const n=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]];return o.$$set=i=>{s(1,e=z(z({},e),te(i))),"$$scope"in i&&s(3,l=i.$$scope)},e=te(e),[n,e,t,l]}class Ot extends me{constructor(e){super(),_e(this,e,Wt,Ct,ce,{})}}const{document:Ve}=dt;function Ke(o,e,s){const t=o.slice();return t[24]=e[s],t}function $e(o,e){let s,t,l,n;return{key:o,first:null,c(){s=w("div"),t=w("img"),n=A(),this.h()},l(i){s=I(i,"DIV",{class:!0,style:!0});var r=S(s);t=I(r,"IMG",{src:!0,alt:!0,class:!0}),n=G(r),r.forEach(p),this.h()},h(){Xe(t.src,l="src/lib/images/"+e[24].image)||g(t,"src",l),g(t,"alt","Emotion Image"),g(t,"class","fade svelte-1kp0war"),g(s,"class","fukidasi absolute svelte-1kp0war"),ee(s,"top",e[24].position.top),ee(s,"left",e[24].position.left),ee(s,"right",e[24].position.right),ee(s,"bottom",e[24].position.bottom),this.first=s},m(i,r){re(i,s,r),h(s,t),h(s,n)},p(i,r){e=i,r&4&&!Xe(t.src,l="src/lib/images/"+e[24].image)&&g(t,"src",l),r&4&&ee(s,"top",e[24].position.top),r&4&&ee(s,"left",e[24].position.left),r&4&&ee(s,"right",e[24].position.right),r&4&&ee(s,"bottom",e[24].position.bottom)},d(i){i&&p(s)}}}function St(o){let e,s;return e=new It({props:{class:"w-8 h-8"}}),{c(){ue(e.$$.fragment)},l(t){fe(e.$$.fragment,t)},m(t,l){de(e,t,l),s=!0},i(t){s||(Z(e.$$.fragment,t),s=!0)},o(t){J(e.$$.fragment,t),s=!1},d(t){he(e,t)}}}function Tt(o){let e,s;return e=new Et({props:{class:"w-8 h-8"}}),{c(){ue(e.$$.fragment)},l(t){fe(e.$$.fragment,t)},m(t,l){de(e,t,l),s=!0},i(t){s||(Z(e.$$.fragment,t),s=!0)},o(t){J(e.$$.fragment,t),s=!1},d(t){he(e,t)}}}function Vt(o){let e,s,t,l,n,i,r,_,f,b,N="喜",a,u,c="怒",W,M,j="哀",V,O,le="楽",K,v,d=[],T=new Map,C,D,E,q,Y,B,Q,X,H,ie,P,$,F,R,Ce,U,ne,se,We,Ge,pe=ye(o[2]);const Ze=m=>m[24].id;for(let m=0;m<pe.length;m+=1){let y=Ke(o,pe,m),k=Ze(y);T.set(k,d[m]=$e(k,y))}const ze=[Tt,St],oe=[];function Je(m,y){return m[1]?0:1}return F=Je(o),R=oe[F]=ze[F](o),ne=new Ot({props:{class:"w-8 h-8"}}),{c(){e=w("meta"),s=A(),t=w("section"),l=w("p"),n=Pe("ID: "),i=w("span"),r=Pe(o[4]),_=A(),f=w("div"),b=w("button"),b.textContent=N,a=A(),u=w("button"),u.textContent=c,W=A(),M=w("button"),M.textContent=j,V=A(),O=w("button"),O.textContent=le,K=A(),v=w("article");for(let m=0;m<d.length;m+=1)d[m].c();C=A(),D=w("div"),E=w("video"),q=A(),Y=w("div"),B=A(),Q=w("div"),X=A(),H=w("div"),ie=A(),P=w("div"),$=w("button"),R.c(),Ce=A(),U=w("button"),ue(ne.$$.fragment),this.h()},l(m){const y=ot("svelte-c3ycj2",Ve.head);e=I(y,"META",{name:!0,content:!0,class:!0}),y.forEach(p),s=G(m),t=I(m,"SECTION",{class:!0});var k=S(t);l=I(k,"P",{class:!0});var Oe=S(l);n=Le(Oe,"ID: "),i=I(Oe,"SPAN",{id:!0,class:!0});var Ye=S(i);r=Le(Ye,o[4]),Ye.forEach(p),Oe.forEach(p),_=G(k),f=I(k,"DIV",{class:!0});var x=S(f);b=I(x,"BUTTON",{class:!0,"data-svelte-h":!0}),ve(b)!=="svelte-r1led5"&&(b.textContent=N),a=G(x),u=I(x,"BUTTON",{class:!0,"data-svelte-h":!0}),ve(u)!=="svelte-1o9wrzw"&&(u.textContent=c),W=G(x),M=I(x,"BUTTON",{class:!0,"data-svelte-h":!0}),ve(M)!=="svelte-cmxzba"&&(M.textContent=j),V=G(x),O=I(x,"BUTTON",{class:!0,"data-svelte-h":!0}),ve(O)!=="svelte-yrf02f"&&(O.textContent=le),x.forEach(p),K=G(k),v=I(k,"ARTICLE",{class:!0});var L=S(v);for(let Se=0;Se<d.length;Se+=1)d[Se].l(L);C=G(L),D=I(L,"DIV",{class:!0});var Fe=S(D);E=I(Fe,"VIDEO",{class:!0}),S(E).forEach(p),Fe.forEach(p),q=G(L),Y=I(L,"DIV",{class:!0}),S(Y).forEach(p),B=G(L),Q=I(L,"DIV",{class:!0}),S(Q).forEach(p),X=G(L),H=I(L,"DIV",{class:!0}),S(H).forEach(p),L.forEach(p),ie=G(k),P=I(k,"DIV",{class:!0});var be=S(P);$=I(be,"BUTTON",{class:!0});var Re=S($);R.l(Re),Re.forEach(p),Ce=G(be),U=I(be,"BUTTON",{class:!0});var Ue=S(U);fe(ne.$$.fragment,Ue),Ue.forEach(p),be.forEach(p),k.forEach(p),this.h()},h(){Ve.title="天才たちの恋愛頭脳戦通話アプリ",g(e,"name","description"),g(e,"content","SvelteKit video call application"),g(e,"class","svelte-1kp0war"),g(i,"id","my-id"),g(i,"class","svelte-1kp0war"),g(l,"class","text-center svelte-1kp0war"),g(b,"class","px-4 py-2 bg-yellow-400 text-black rounded-full svelte-1kp0war"),g(u,"class","px-4 py-2 bg-red-500 text-white rounded-full svelte-1kp0war"),g(M,"class","px-4 py-2 bg-blue-500 text-white rounded-full svelte-1kp0war"),g(O,"class","px-4 py-2 bg-green-500 text-white rounded-full svelte-1kp0war"),g(f,"class","flex space-x-4 justify-center svelte-1kp0war"),g(E,"class","w-full h-full object-cover svelte-1kp0war"),E.muted=!0,E.playsInline=!0,g(D,"class","panel flex-grow basis-[400px] relative svelte-1kp0war"),g(Y,"class","panel flex-grow basis-[500px] cartoon-frame svelte-1kp0war"),g(Q,"class","panel flex-grow basis-[500px] cartoon-frame svelte-1kp0war"),g(H,"class","panel flex-grow basis-[400px] cartoon-frame svelte-1kp0war"),g(v,"class","flex flex-wrap font-comic-sans p-[5vmin] mx-64 relative svelte-1kp0war"),g($,"class","w-16 h-16 rounded-full border-2 border-black flex items-center justify-center bg-gray-200 svelte-1kp0war"),g(U,"class","w-16 h-16 rounded-full border-2 border-black flex items-center justify-center transition-colors duration-300 svelte-1kp0war"),ke(U,"bg-[#57EEF8]",o[0]),ke(U,"bg-[#EE1971]",!o[0]),g(P,"class","flex space-x-4 justify-center svelte-1kp0war"),g(t,"class","min-h-screen bg-gray-100 svelte-1kp0war")},m(m,y){h(Ve.head,e),re(m,s,y),re(m,t,y),h(t,l),h(l,n),h(l,i),h(i,r),h(t,_),h(t,f),h(f,b),h(f,a),h(f,u),h(f,W),h(f,M),h(f,V),h(f,O),h(t,K),h(t,v);for(let k=0;k<d.length;k+=1)d[k]&&d[k].m(v,null);h(v,C),h(v,D),h(D,E),o[12](E),h(v,q),h(v,Y),h(v,B),h(v,Q),h(v,X),h(v,H),h(t,ie),h(t,P),h(P,$),oe[F].m($,null),h(P,Ce),h(P,U),de(ne,U,null),se=!0,We||(Ge=[ae(b,"click",o[8]),ae(u,"click",o[9]),ae(M,"click",o[10]),ae(O,"click",o[11]),ae($,"click",o[7]),ae(U,"click",o[6])],We=!0)},p(m,[y]){(!se||y&16)&&it(r,m[4]),y&4&&(pe=ye(m[2]),d=mt(d,y,Ze,1,m,pe,T,v,ht,$e,C,Ke));let k=F;F=Je(m),F!==k&&(rt(),J(oe[k],1,1,()=>{oe[k]=null}),at(),R=oe[F],R||(R=oe[F]=ze[F](m),R.c()),Z(R,1),R.m($,null)),(!se||y&1)&&ke(U,"bg-[#57EEF8]",m[0]),(!se||y&1)&&ke(U,"bg-[#EE1971]",!m[0])},i(m){se||(Z(R),Z(ne.$$.fragment,m),se=!0)},o(m){J(R),J(ne.$$.fragment,m),se=!1},d(m){m&&(p(s),p(t)),p(e);for(let y=0;y<d.length;y+=1)d[y].d();o[12](null),oe[F].d(),he(ne),We=!1,xe(Ge)}}}function Dt(o,e,s){let t=!0,l=!0,n=[];const i={happy:"Nomal1.png",angry:"DO.png",sad:"think.png",surprised:"Do2.png"},r=[{top:"0",left:"0"},{top:"0",right:"0"},{bottom:"0",left:"0"},{bottom:"0",right:"0"}];function _(E){const q=r[Math.floor(Math.random()*r.length)],Y={image:i[E],position:q,id:Date.now()};s(2,n=[...n,Y]),setTimeout(()=>{s(2,n=n.filter(B=>B.id!==Y.id))},5e3)}function f(){s(0,t=!t),t?K():le()}function b(){s(1,l=!l),V&&(V.track.enabled=l)}let N,a=[],u="",c,W,M,j,V,O;lt(async()=>{a=Array.from(document.getElementsByClassName("cartoon-frame")),typeof window<"u"&&window.RTCPeerConnection&&(M="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4OGY1OTgwNi1lNWM3LTRmZWYtOGMxMi1jOGQ2ZWRhNTRkYWMiLCJpYXQiOjE3MjY5MTc2MDIsImV4cCI6MTcyNzAwNDAwMiwic2NvcGUiOnsiYXBwIjp7ImlkIjoiZWJlMDBjNjMtMDU1OS00ZjZhLTkyZGEtNWViNGMwNDE1NjVjIiwidHVybiI6dHJ1ZSwiYWN0aW9ucyI6WyJyZWFkIl0sImNoYW5uZWxzIjpbeyJpZCI6IioiLCJuYW1lIjoiKiIsImFjdGlvbnMiOlsid3JpdGUiXSwibWVtYmVycyI6W3siaWQiOiIqIiwibmFtZSI6IioiLCJhY3Rpb25zIjpbIndyaXRlIl0sInB1YmxpY2F0aW9uIjp7ImFjdGlvbnMiOlsid3JpdGUiXX0sInN1YnNjcmlwdGlvbiI6eyJhY3Rpb25zIjpbIndyaXRlIl19fV0sInNmdUJvdHMiOlt7ImFjdGlvbnMiOlsid3JpdGUiXSwiZm9yd2FyZGluZ3MiOlt7ImFjdGlvbnMiOlsid3JpdGUiXX1dfV19XX19fQ.lg0ghxp5uR-WsnIGorzAdZq32IVAV64tQFZZxPKYf50")});async function le(){W=await ct.Create(M),c=await ut.FindOrCreate(W,{type:"p2p",name:"love_is_war"}),j=await c.join(),s(4,u=j.id);const{audio:E,video:q}=await ft.createMicrophoneAudioAndCameraStream();V=E,O=q,q.attach(N),await N.play(),await j.publish(E),await j.publish(q);const Y=async B=>{if(B.publisher.id===j.id)return;const{stream:Q}=await j.subscribe(B.id);let X,H;const ie=a.find(P=>P.childElementCount===0);if(ie)switch(Q.track.kind){case"video":X=document.createElement("video"),X.playsInline=!0,X.autoplay=!0,X.className="w-full h-full object-cover",Q.attach(X),ie.appendChild(X),H=document.createElement("audio"),H.autoplay=!0,Q.attach(H);break;case"audio":break;default:return}};c.publications.forEach(Y),c.onStreamPublished.add(B=>Y(B.publication))}async function K(){j&&(await j.leave(),await c.dispose(),s(4,u=""),a.forEach(E=>E.replaceChildren()),V&&(V.track.stop(),V=null),O&&(O.track.stop(),O=null))}const v=()=>_("happy"),d=()=>_("angry"),T=()=>_("sad"),C=()=>_("surprised");function D(E){nt[E?"unshift":"push"](()=>{N=E,s(3,N)})}return[t,l,n,N,u,_,f,b,v,d,T,C,D]}class Jt extends me{constructor(e){super(),_e(this,e,Dt,Vt,ce,{})}}export{Jt as component,zt as universal};
