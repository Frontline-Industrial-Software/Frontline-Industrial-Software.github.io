import{i as de,g as yt,e as bt,r as vt,S as be,a as Be,b as _t,c as Z,d as C,f as z,u as H,h as R,w as wt,j as Ve,k as $t,l as Me,m as Ne,n as kt,o as ve,p as k,q as E,s as T,t as s,v as _,x as W,y as P,z as S,A,B as I,C as m,D as Tt,E as K,_ as Q,F as qe,G as fe,H as ze,I as ie,N as j,J as Dt,K as ae,L as N,M as pe,O as Ct,P as We,Q as G,R as u,T as St,U as At,V as Et,W as Ft,X as Ut,Y as jt,Z as ue,$ as _e,a0 as Rt,a1 as Ot,a2 as we,a3 as Pt,a4 as Lt,a5 as xt,a6 as It,a7 as Bt,a8 as $e,a9 as ke,aa as me,ab as Ke,ac as He,ad as X,ae as Ge,af as O,ag as Vt,ah as Mt,ai as J,aj as Xe,ak as Ze,al as Ye,am as M,an as Nt,ao as qt,ap as zt,aq as Qe,ar as Je,as as Wt,at as Kt}from"./index-58562194.js";import{i as et,a as Ht,b as Gt,o as Xt,k as tt,g as at,s as Zt,c as Yt,d as Qt,U as Te,e as ge,n as te,f as nt,h as Jt,S as ea,j as ta,l as aa,E as na,m as sa}from"./el-select-72bc1060.js";import{_ as oa}from"./next-01c9ac6b.js";import{E as la,L as ra,i as ia}from"./luckyexcel.umd-17f0c046.js";var De=Object.create,ua=function(){function e(){}return function(a){if(!de(a))return{};if(De)return De(a);e.prototype=a;var n=new e;return e.prototype=void 0,n}}();const ca=ua;function da(e,a){var n=-1,t=e.length;for(a||(a=Array(t));++n<t;)a[n]=e[n];return a}var fa=function(){try{var e=yt(Object,"defineProperty");return e({},"",{}),e}catch{}}();const Ce=fa;function pa(e,a){for(var n=-1,t=e==null?0:e.length;++n<t&&a(e[n],n,e)!==!1;);return e}function st(e,a,n){a=="__proto__"&&Ce?Ce(e,a,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[a]=n}var ma=Object.prototype,ga=ma.hasOwnProperty;function ot(e,a,n){var t=e[a];(!(ga.call(e,a)&&bt(t,n))||n===void 0&&!(a in e))&&st(e,a,n)}function ne(e,a,n,t){var o=!n;n||(n={});for(var i=-1,p=a.length;++i<p;){var b=a[i],v=t?t(n[b],e[b],b,n,e):void 0;v===void 0&&(v=e[b]),o?st(n,b,v):ot(n,b,v)}return n}function ha(e){var a=[];if(e!=null)for(var n in Object(e))a.push(n);return a}var ya=Object.prototype,ba=ya.hasOwnProperty;function va(e){if(!de(e))return ha(e);var a=et(e),n=[];for(var t in e)t=="constructor"&&(a||!ba.call(e,t))||n.push(t);return n}function he(e){return Ht(e)?Gt(e,!0):va(e)}var _a=Xt(Object.getPrototypeOf,Object);const lt=_a;function wa(e,a){return e&&ne(a,tt(a),e)}function $a(e,a){return e&&ne(a,he(a),e)}var rt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Se=rt&&typeof module=="object"&&module&&!module.nodeType&&module,ka=Se&&Se.exports===rt,Ae=ka?vt.Buffer:void 0,Ee=Ae?Ae.allocUnsafe:void 0;function Ta(e,a){if(a)return e.slice();var n=e.length,t=Ee?Ee(n):new e.constructor(n);return e.copy(t),t}function Da(e,a){return ne(e,at(e),a)}var Ca=Object.getOwnPropertySymbols,Sa=Ca?function(e){for(var a=[];e;)Yt(a,at(e)),e=lt(e);return a}:Zt;const it=Sa;function Aa(e,a){return ne(e,it(e),a)}function Ea(e){return Qt(e,he,it)}var Fa=Object.prototype,Ua=Fa.hasOwnProperty;function ja(e){var a=e.length,n=new e.constructor(a);return a&&typeof e[0]=="string"&&Ua.call(e,"index")&&(n.index=e.index,n.input=e.input),n}function ye(e){var a=new e.constructor(e.byteLength);return new Te(a).set(new Te(e)),a}function Ra(e,a){var n=a?ye(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var Oa=/\w*$/;function Pa(e){var a=new e.constructor(e.source,Oa.exec(e));return a.lastIndex=e.lastIndex,a}var Fe=be?be.prototype:void 0,Ue=Fe?Fe.valueOf:void 0;function La(e){return Ue?Object(Ue.call(e)):{}}function xa(e,a){var n=a?ye(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var Ia="[object Boolean]",Ba="[object Date]",Va="[object Map]",Ma="[object Number]",Na="[object RegExp]",qa="[object Set]",za="[object String]",Wa="[object Symbol]",Ka="[object ArrayBuffer]",Ha="[object DataView]",Ga="[object Float32Array]",Xa="[object Float64Array]",Za="[object Int8Array]",Ya="[object Int16Array]",Qa="[object Int32Array]",Ja="[object Uint8Array]",en="[object Uint8ClampedArray]",tn="[object Uint16Array]",an="[object Uint32Array]";function nn(e,a,n){var t=e.constructor;switch(a){case Ka:return ye(e);case Ia:case Ba:return new t(+e);case Ha:return Ra(e,n);case Ga:case Xa:case Za:case Ya:case Qa:case Ja:case en:case tn:case an:return xa(e,n);case Va:return new t;case Ma:case za:return new t(e);case Na:return Pa(e);case qa:return new t;case Wa:return La(e)}}function sn(e){return typeof e.constructor=="function"&&!et(e)?ca(lt(e)):{}}var on="[object Map]";function ln(e){return Be(e)&&ge(e)==on}var je=te&&te.isMap,rn=je?nt(je):ln;const un=rn;var cn="[object Set]";function dn(e){return Be(e)&&ge(e)==cn}var Re=te&&te.isSet,fn=Re?nt(Re):dn;const pn=fn;var mn=1,gn=2,hn=4,ut="[object Arguments]",yn="[object Array]",bn="[object Boolean]",vn="[object Date]",_n="[object Error]",ct="[object Function]",wn="[object GeneratorFunction]",$n="[object Map]",kn="[object Number]",dt="[object Object]",Tn="[object RegExp]",Dn="[object Set]",Cn="[object String]",Sn="[object Symbol]",An="[object WeakMap]",En="[object ArrayBuffer]",Fn="[object DataView]",Un="[object Float32Array]",jn="[object Float64Array]",Rn="[object Int8Array]",On="[object Int16Array]",Pn="[object Int32Array]",Ln="[object Uint8Array]",xn="[object Uint8ClampedArray]",In="[object Uint16Array]",Bn="[object Uint32Array]",D={};D[ut]=D[yn]=D[En]=D[Fn]=D[bn]=D[vn]=D[Un]=D[jn]=D[Rn]=D[On]=D[Pn]=D[$n]=D[kn]=D[dt]=D[Tn]=D[Dn]=D[Cn]=D[Sn]=D[Ln]=D[xn]=D[In]=D[Bn]=!0;D[_n]=D[ct]=D[An]=!1;function ee(e,a,n,t,o,i){var p,b=a&mn,v=a&gn,g=a&hn;if(n&&(p=o?n(e,t,o,i):n(e)),p!==void 0)return p;if(!de(e))return e;var c=_t(e);if(c){if(p=ja(e),!b)return da(e,p)}else{var f=ge(e),l=f==ct||f==wn;if(Jt(e))return Ta(e,b);if(f==dt||f==ut||l&&!o){if(p=v||l?{}:sn(e),!b)return v?Aa(e,$a(p,e)):Da(e,wa(p,e))}else{if(!D[f])return o?e:{};p=nn(e,f,b)}}i||(i=new ea);var d=i.get(e);if(d)return d;i.set(e,p),pn(e)?e.forEach(function($){p.add(ee($,a,n,$,e,i))}):un(e)&&e.forEach(function($,h){p.set(h,ee($,a,n,h,e,i))});var r=g?v?Ea:ta:v?he:tt,w=c?void 0:r(e);return pa(w||e,function($,h){w&&(h=$,$=e[h]),ot(p,h,ee($,a,n,h,e,i))}),p}var Vn=1,Mn=4;function Oe(e){return ee(e,Vn|Mn)}const Nn=Z({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:e=>e>=0&&e<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:{type:Boolean,default:!1},duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:C(String),default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:C([String,Array,Function]),default:""},striped:Boolean,stripedFlow:Boolean,format:{type:C(Function),default:e=>`${e}%`}}),qn=["aria-valuenow"],zn={viewBox:"0 0 100 100"},Wn=["d","stroke","stroke-width"],Kn=["d","stroke","opacity","stroke-linecap","stroke-width"],Hn={key:0},Gn=z({name:"ElProgress"}),Xn=z({...Gn,props:Nn,setup(e){const a=e,n={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},t=H("progress"),o=R(()=>({width:`${a.percentage}%`,animationDuration:`${a.duration}s`,backgroundColor:V(a.percentage)})),i=R(()=>(a.strokeWidth/a.width*100).toFixed(1)),p=R(()=>["circle","dashboard"].includes(a.type)?Number.parseInt(`${50-Number.parseFloat(i.value)/2}`,10):0),b=R(()=>{const y=p.value,F=a.type==="dashboard";return`
          M 50 50
          m 0 ${F?"":"-"}${y}
          a ${y} ${y} 0 1 1 0 ${F?"-":""}${y*2}
          a ${y} ${y} 0 1 1 0 ${F?"":"-"}${y*2}
          `}),v=R(()=>2*Math.PI*p.value),g=R(()=>a.type==="dashboard"?.75:1),c=R(()=>`${-1*v.value*(1-g.value)/2}px`),f=R(()=>({strokeDasharray:`${v.value*g.value}px, ${v.value}px`,strokeDashoffset:c.value})),l=R(()=>({strokeDasharray:`${v.value*g.value*(a.percentage/100)}px, ${v.value}px`,strokeDashoffset:c.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),d=R(()=>{let y;return a.color?y=V(a.percentage):y=n[a.status]||n.default,y}),r=R(()=>a.status==="warning"?wt:a.type==="line"?a.status==="success"?Ve:$t:a.status==="success"?Me:Ne),w=R(()=>a.type==="line"?12+a.strokeWidth*.4:a.width*.111111+2),$=R(()=>a.format(a.percentage));function h(y){const F=100/y.length;return y.map((U,q)=>ve(U)?{color:U,percentage:(q+1)*F}:U).sort((U,q)=>U.percentage-q.percentage)}const V=y=>{var F;const{color:x}=a;if(kt(x))return x(y);if(ve(x))return x;{const U=h(x);for(const q of U)if(q.percentage>y)return q.color;return(F=U[U.length-1])==null?void 0:F.color}};return(y,F)=>(k(),E("div",{class:T([s(t).b(),s(t).m(y.type),s(t).is(y.status),{[s(t).m("without-text")]:!y.showText,[s(t).m("text-inside")]:y.textInside}]),role:"progressbar","aria-valuenow":y.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[y.type==="line"?(k(),E("div",{key:0,class:T(s(t).b("bar"))},[_("div",{class:T(s(t).be("bar","outer")),style:W({height:`${y.strokeWidth}px`})},[_("div",{class:T([s(t).be("bar","inner"),{[s(t).bem("bar","inner","indeterminate")]:y.indeterminate},{[s(t).bem("bar","inner","striped")]:y.striped},{[s(t).bem("bar","inner","striped-flow")]:y.stripedFlow}]),style:W(s(o))},[(y.showText||y.$slots.default)&&y.textInside?(k(),E("div",{key:0,class:T(s(t).be("bar","innerText"))},[P(y.$slots,"default",{percentage:y.percentage},()=>[_("span",null,S(s($)),1)])],2)):A("v-if",!0)],6)],6)],2)):(k(),E("div",{key:1,class:T(s(t).b("circle")),style:W({height:`${y.width}px`,width:`${y.width}px`})},[(k(),E("svg",zn,[_("path",{class:T(s(t).be("circle","track")),d:s(b),stroke:`var(${s(t).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-width":s(i),fill:"none",style:W(s(f))},null,14,Wn),_("path",{class:T(s(t).be("circle","path")),d:s(b),stroke:s(d),fill:"none",opacity:y.percentage?1:0,"stroke-linecap":y.strokeLinecap,"stroke-width":s(i),style:W(s(l))},null,14,Kn)]))],6)),(y.showText||y.$slots.default)&&!y.textInside?(k(),E("div",{key:2,class:T(s(t).e("text")),style:W({fontSize:`${s(w)}px`})},[P(y.$slots,"default",{percentage:y.percentage},()=>[y.status?(k(),I(s(K),{key:1},{default:m(()=>[(k(),I(Tt(s(r))))]),_:1})):(k(),E("span",Hn,S(s($)),1))])],6)):A("v-if",!0)],10,qn))}});var Zn=Q(Xn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/progress/src/progress.vue"]]);const Yn=qe(Zn),ft=Symbol("uploadContextKey"),Qn="ElUpload";class Jn extends Error{constructor(a,n,t,o){super(a),this.name="UploadAjaxError",this.status=n,this.method=t,this.url=o}}function Pe(e,a,n){let t;return n.response?t=`${n.response.error||n.response}`:n.responseText?t=`${n.responseText}`:t=`fail to ${a.method} ${e} ${n.status}`,new Jn(t,n.status,a.method,e)}function es(e){const a=e.responseText||e.response;if(!a)return a;try{return JSON.parse(a)}catch{return a}}const ts=e=>{typeof XMLHttpRequest>"u"&&fe(Qn,"XMLHttpRequest is undefined");const a=new XMLHttpRequest,n=e.action;a.upload&&a.upload.addEventListener("progress",i=>{const p=i;p.percent=i.total>0?i.loaded/i.total*100:0,e.onProgress(p)});const t=new FormData;if(e.data)for(const[i,p]of Object.entries(e.data))Array.isArray(p)?t.append(i,...p):t.append(i,p);t.append(e.filename,e.file,e.file.name),a.addEventListener("error",()=>{e.onError(Pe(n,e,a))}),a.addEventListener("load",()=>{if(a.status<200||a.status>=300)return e.onError(Pe(n,e,a));e.onSuccess(es(a))}),a.open(e.method,n,!0),e.withCredentials&&"withCredentials"in a&&(a.withCredentials=!0);const o=e.headers||{};if(o instanceof Headers)o.forEach((i,p)=>a.setRequestHeader(p,i));else for(const[i,p]of Object.entries(o))ze(p)||a.setRequestHeader(i,String(p));return a.send(t),a},pt=["text","picture","picture-card"];let as=1;const ce=()=>Date.now()+as++,mt=Z({action:{type:String,default:"#"},headers:{type:C(Object)},method:{type:String,default:"post"},data:{type:Object,default:()=>ie({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},type:{type:String,default:"select"},fileList:{type:C(Array),default:()=>ie([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:pt,default:"text"},httpRequest:{type:C(Function),default:ts},disabled:Boolean,limit:Number}),ns=Z({...mt,beforeUpload:{type:C(Function),default:j},beforeRemove:{type:C(Function)},onRemove:{type:C(Function),default:j},onChange:{type:C(Function),default:j},onPreview:{type:C(Function),default:j},onSuccess:{type:C(Function),default:j},onProgress:{type:C(Function),default:j},onError:{type:C(Function),default:j},onExceed:{type:C(Function),default:j}}),ss=Z({files:{type:C(Array),default:()=>ie([])},disabled:{type:Boolean,default:!1},handlePreview:{type:C(Function),default:j},listType:{type:String,values:pt,default:"text"}}),os={remove:e=>!!e},ls=["onKeydown"],rs=["src"],is=["onClick"],us=["title"],cs=["onClick"],ds=["onClick"],fs=z({name:"ElUploadList"}),ps=z({...fs,props:ss,emits:os,setup(e,{emit:a}){const{t:n}=Dt(),t=H("upload"),o=H("icon"),i=H("list"),p=ae(),b=N(!1),v=g=>{a("remove",g)};return(g,c)=>(k(),I(Ft,{tag:"ul",class:T([s(t).b("list"),s(t).bm("list",g.listType),s(t).is("disabled",s(p))]),name:s(i).b()},{default:m(()=>[(k(!0),E(pe,null,Ct(g.files,f=>(k(),E("li",{key:f.uid||f.name,class:T([s(t).be("list","item"),s(t).is(f.status),{focusing:b.value}]),tabindex:"0",onKeydown:We(l=>!s(p)&&v(f),["delete"]),onFocus:c[0]||(c[0]=l=>b.value=!0),onBlur:c[1]||(c[1]=l=>b.value=!1),onClick:c[2]||(c[2]=l=>b.value=!1)},[P(g.$slots,"default",{file:f},()=>[g.listType==="picture"||f.status!=="uploading"&&g.listType==="picture-card"?(k(),E("img",{key:0,class:T(s(t).be("list","item-thumbnail")),src:f.url,alt:""},null,10,rs)):A("v-if",!0),f.status==="uploading"||g.listType!=="picture-card"?(k(),E("div",{key:1,class:T(s(t).be("list","item-info"))},[_("a",{class:T(s(t).be("list","item-name")),onClick:G(l=>g.handlePreview(f),["prevent"])},[u(s(K),{class:T(s(o).m("document"))},{default:m(()=>[u(s(St))]),_:1},8,["class"]),_("span",{class:T(s(t).be("list","item-file-name")),title:f.name},S(f.name),11,us)],10,is),f.status==="uploading"?(k(),I(s(Yn),{key:0,type:g.listType==="picture-card"?"circle":"line","stroke-width":g.listType==="picture-card"?6:2,percentage:Number(f.percentage),style:W(g.listType==="picture-card"?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):A("v-if",!0)],2)):A("v-if",!0),_("label",{class:T(s(t).be("list","item-status-label"))},[g.listType==="text"?(k(),I(s(K),{key:0,class:T([s(o).m("upload-success"),s(o).m("circle-check")])},{default:m(()=>[u(s(Ve))]),_:1},8,["class"])):["picture-card","picture"].includes(g.listType)?(k(),I(s(K),{key:1,class:T([s(o).m("upload-success"),s(o).m("check")])},{default:m(()=>[u(s(Me))]),_:1},8,["class"])):A("v-if",!0)],2),s(p)?A("v-if",!0):(k(),I(s(K),{key:2,class:T(s(o).m("close")),onClick:l=>v(f)},{default:m(()=>[u(s(Ne))]),_:2},1032,["class","onClick"])),A(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),A(" This is a bug which needs to be fixed "),A(" TODO: Fix the incorrect navigation interaction "),s(p)?A("v-if",!0):(k(),E("i",{key:3,class:T(s(o).m("close-tip"))},S(s(n)("el.upload.deleteTip")),3)),g.listType==="picture-card"?(k(),E("span",{key:4,class:T(s(t).be("list","item-actions"))},[_("span",{class:T(s(t).be("list","item-preview")),onClick:l=>g.handlePreview(f)},[u(s(K),{class:T(s(o).m("zoom-in"))},{default:m(()=>[u(s(At))]),_:1},8,["class"])],10,cs),s(p)?A("v-if",!0):(k(),E("span",{key:0,class:T(s(t).be("list","item-delete")),onClick:l=>v(f)},[u(s(K),{class:T(s(o).m("delete"))},{default:m(()=>[u(s(Et))]),_:1},8,["class"])],10,ds))],2)):A("v-if",!0)])],42,ls))),128)),P(g.$slots,"append")]),_:3},8,["class","name"]))}});var Le=Q(ps,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue"]]);const ms=Z({disabled:{type:Boolean,default:!1}}),gs={file:e=>Ut(e)},hs=["onDrop","onDragover"],gt="ElUploadDrag",ys=z({name:gt}),bs=z({...ys,props:ms,emits:gs,setup(e,{emit:a}){const n=jt(ft);n||fe(gt,"usage: <el-upload><el-upload-dragger /></el-upload>");const t=H("upload"),o=N(!1),i=ae(),p=v=>{if(i.value)return;o.value=!1,v.stopPropagation();const g=Array.from(v.dataTransfer.files),c=n.accept.value;if(!c){a("file",g);return}const f=g.filter(l=>{const{type:d,name:r}=l,w=r.includes(".")?`.${r.split(".").pop()}`:"",$=d.replace(/\/.*$/,"");return c.split(",").map(h=>h.trim()).filter(h=>h).some(h=>h.startsWith(".")?w===h:/\/\*$/.test(h)?$===h.replace(/\/\*$/,""):/^[^/]+\/[^/]+$/.test(h)?d===h:!1)});a("file",f)},b=()=>{i.value||(o.value=!0)};return(v,g)=>(k(),E("div",{class:T([s(t).b("dragger"),s(t).is("dragover",o.value)]),onDrop:G(p,["prevent"]),onDragover:G(b,["prevent"]),onDragleave:g[0]||(g[0]=G(c=>o.value=!1,["prevent"]))},[P(v.$slots,"default")],42,hs))}});var vs=Q(bs,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue"]]);const _s=Z({...mt,beforeUpload:{type:C(Function),default:j},onRemove:{type:C(Function),default:j},onStart:{type:C(Function),default:j},onSuccess:{type:C(Function),default:j},onProgress:{type:C(Function),default:j},onError:{type:C(Function),default:j},onExceed:{type:C(Function),default:j}}),ws=["onKeydown"],$s=["name","multiple","accept"],ks=z({name:"ElUploadContent",inheritAttrs:!1}),Ts=z({...ks,props:_s,setup(e,{expose:a}){const n=e,t=H("upload"),o=ae(),i=ue({}),p=ue(),b=r=>{if(r.length===0)return;const{autoUpload:w,limit:$,fileList:h,multiple:V,onStart:y,onExceed:F}=n;if($&&h.length+r.length>$){F(r,h);return}V||(r=r.slice(0,1));for(const x of r){const U=x;U.uid=ce(),y(U),w&&v(U)}},v=async r=>{if(p.value.value="",!n.beforeUpload)return g(r);let w,$={};try{const V=n.data,y=n.beforeUpload(r);$=_e(n.data)?Oe(n.data):n.data,w=await y,_e(n.data)&&aa(V,$)&&($=Oe(n.data))}catch{w=!1}if(w===!1){n.onRemove(r);return}let h=r;w instanceof Blob&&(w instanceof File?h=w:h=new File([w],r.name,{type:r.type})),g(Object.assign(h,{uid:r.uid}),$)},g=(r,w)=>{const{headers:$,data:h,method:V,withCredentials:y,name:F,action:x,onProgress:U,onSuccess:q,onError:se,httpRequest:L}=n,{uid:oe}=r,le={headers:$||{},withCredentials:y,file:r,data:w??h,method:V,filename:F,action:x,onProgress:Y=>{U(Y,r)},onSuccess:Y=>{q(Y,r),delete i.value[oe]},onError:Y=>{se(Y,r),delete i.value[oe]}},re=L(le);i.value[oe]=re,re instanceof Promise&&re.then(le.onSuccess,le.onError)},c=r=>{const w=r.target.files;w&&b(Array.from(w))},f=()=>{o.value||(p.value.value="",p.value.click())},l=()=>{f()};return a({abort:r=>{Rt(i.value).filter(r?([$])=>String(r.uid)===$:()=>!0).forEach(([$,h])=>{h instanceof XMLHttpRequest&&h.abort(),delete i.value[$]})},upload:v}),(r,w)=>(k(),E("div",{class:T([s(t).b(),s(t).m(r.listType),s(t).is("drag",r.drag)]),tabindex:"0",onClick:f,onKeydown:We(G(l,["self"]),["enter","space"])},[r.drag?(k(),I(vs,{key:0,disabled:s(o),onFile:b},{default:m(()=>[P(r.$slots,"default")]),_:3},8,["disabled"])):P(r.$slots,"default",{key:1}),_("input",{ref_key:"inputRef",ref:p,class:T(s(t).e("input")),name:r.name,multiple:r.multiple,accept:r.accept,type:"file",onChange:c,onClick:w[0]||(w[0]=G(()=>{},["stop"]))},null,42,$s)],42,ws))}});var xe=Q(Ts,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue"]]);const Ie="ElUpload",Ds=e=>{var a;(a=e.url)!=null&&a.startsWith("blob:")&&URL.revokeObjectURL(e.url)},Cs=(e,a)=>{const n=Ot(e,"fileList",void 0,{passive:!0}),t=l=>n.value.find(d=>d.uid===l.uid);function o(l){var d;(d=a.value)==null||d.abort(l)}function i(l=["ready","uploading","success","fail"]){n.value=n.value.filter(d=>!l.includes(d.status))}const p=(l,d)=>{const r=t(d);r&&(console.error(l),r.status="fail",n.value.splice(n.value.indexOf(r),1),e.onError(l,r,n.value),e.onChange(r,n.value))},b=(l,d)=>{const r=t(d);r&&(e.onProgress(l,r,n.value),r.status="uploading",r.percentage=Math.round(l.percent))},v=(l,d)=>{const r=t(d);r&&(r.status="success",r.response=l,e.onSuccess(l,r,n.value),e.onChange(r,n.value))},g=l=>{ze(l.uid)&&(l.uid=ce());const d={name:l.name,percentage:0,status:"ready",size:l.size,raw:l,uid:l.uid};if(e.listType==="picture-card"||e.listType==="picture")try{d.url=URL.createObjectURL(l)}catch(r){Pt(Ie,r.message),e.onError(r,d,n.value)}n.value=[...n.value,d],e.onChange(d,n.value)},c=async l=>{const d=l instanceof File?t(l):l;d||fe(Ie,"file to be removed not found");const r=w=>{o(w);const $=n.value;$.splice($.indexOf(w),1),e.onRemove(w,$),Ds(w)};e.beforeRemove?await e.beforeRemove(d,n.value)!==!1&&r(d):r(d)};function f(){n.value.filter(({status:l})=>l==="ready").forEach(({raw:l})=>{var d;return l&&((d=a.value)==null?void 0:d.upload(l))})}return we(()=>e.listType,l=>{l!=="picture-card"&&l!=="picture"||(n.value=n.value.map(d=>{const{raw:r,url:w}=d;if(!w&&r)try{d.url=URL.createObjectURL(r)}catch($){e.onError($,d,n.value)}return d}))}),we(n,l=>{for(const d of l)d.uid||(d.uid=ce()),d.status||(d.status="success")},{immediate:!0,deep:!0}),{uploadFiles:n,abort:o,clearFiles:i,handleError:p,handleProgress:b,handleStart:g,handleSuccess:v,handleRemove:c,submit:f}},Ss=z({name:"ElUpload"}),As=z({...Ss,props:ns,setup(e,{expose:a}){const n=e,t=Lt(),o=ae(),i=ue(),{abort:p,submit:b,clearFiles:v,uploadFiles:g,handleStart:c,handleError:f,handleRemove:l,handleSuccess:d,handleProgress:r}=Cs(n,i),w=R(()=>n.listType==="picture-card"),$=R(()=>({...n,fileList:g.value,onStart:c,onProgress:r,onSuccess:d,onError:f,onRemove:l}));return xt(()=>{g.value.forEach(({url:h})=>{h!=null&&h.startsWith("blob:")&&URL.revokeObjectURL(h)})}),It(ft,{accept:Bt(n,"accept")}),a({abort:p,submit:b,clearFiles:v,handleStart:c,handleRemove:l}),(h,V)=>(k(),E("div",null,[s(w)&&h.showFileList?(k(),I(Le,{key:0,disabled:s(o),"list-type":h.listType,files:s(g),"handle-preview":h.onPreview,onRemove:s(l)},$e({append:m(()=>[u(xe,ke({ref_key:"uploadRef",ref:i},s($)),{default:m(()=>[s(t).trigger?P(h.$slots,"trigger",{key:0}):A("v-if",!0),!s(t).trigger&&s(t).default?P(h.$slots,"default",{key:1}):A("v-if",!0)]),_:3},16)]),_:2},[h.$slots.file?{name:"default",fn:m(({file:y})=>[P(h.$slots,"file",{file:y})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):A("v-if",!0),!s(w)||s(w)&&!h.showFileList?(k(),I(xe,ke({key:1,ref_key:"uploadRef",ref:i},s($)),{default:m(()=>[s(t).trigger?P(h.$slots,"trigger",{key:0}):A("v-if",!0),!s(t).trigger&&s(t).default?P(h.$slots,"default",{key:1}):A("v-if",!0)]),_:3},16)):A("v-if",!0),h.$slots.trigger?P(h.$slots,"default",{key:2}):A("v-if",!0),P(h.$slots,"tip"),!s(w)&&h.showFileList?(k(),I(Le,{key:3,disabled:s(o),"list-type":h.listType,files:s(g),"handle-preview":h.onPreview,onRemove:s(l)},$e({_:2},[h.$slots.file?{name:"default",fn:m(({file:y})=>[P(h.$slots,"file",{file:y})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):A("v-if",!0)]))}});var Es=Q(As,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue"]]);const ht=qe(Es);const Fs={__name:"upload",setup(e){const a=me();let n=N(!1);function t(){n.value=!1}let o=N(!1);function i(){o.value=!1}function p(c){const f=c.lastIndexOf(".");return f!==-1?c.replace(/[^\w\d](?=.*\..*$)/g,(l,d)=>d<f?"_":l):c.replace(/[^\w\d]/g,"_")}let b=N();setTimeout(async()=>{const c=await Ke.currentAuthenticatedUser();He.identify(c.attributes.sub,{email:c.attributes.email});let f=await X.checkUser(c.attributes.email);b.value=f,a.isVip=b,console.log(a.isVip.auth)},0);async function v(){}const g=async c=>{a.file.name="";const f=c.name,l=p(f),d=new File([c],l,{type:c.type});a.truefile=c.name,a.file.size=d.size;let r=await X.sendFile(d);if(a.loginAndauthRequired=r.data.loginAndauthRequired,r.data.loginAndauthRequired===!1)console.log("文件满足要求"),J({showClose:!0,message:"Upload Success",type:"success"});else if(a.loginStatus===!0)if(console.log("用户已登录"),a.isVip.auth===!0)console.log("用户为付费用户"),J({showClose:!0,message:"Upload Success",type:"success"});else{console.log("用户未付费"),J({showClose:!0,message:"File size exceeded, requires permission authorization. Please contact us.",type:"error",duration:1e4}),o.value=!0;return}else{console.log("用户未登录"),J({showClose:!0,message:"File size exceeded, please log in to obtain authorization.",type:"error",duration:1e4}),n.value=!0;return}return a.file.name=r.data.mapping[l],r.data.mapping[l]&&(a.newUpload=!0),a.originalplan.originalDurationDays=r.data.originalDurationDaysWithCalendar,a.originalplan.newCriticalTasksLen=r.data.newCriticalTasksLen,a.originalplan.maxResourceUnitAgg=r.data.maxResourceUnitAgg,a.ConstraintsFile="",!1};return(c,f)=>{const l=Xe,d=ht;return k(),E(pe,null,[u(d,{class:"upload-demo",action:"",multiple:"","before-upload":g,limit:3,onClick:v},{default:m(()=>[u(l,{icon:s(Ge),color:"rgb(42, 123, 108)",style:{color:"white"},type:"primary"},{default:m(()=>[O(" Upload ")]),_:1},8,["icon"])]),_:1}),u(Vt,{onClose:t,dialogVisible:s(n)},null,8,["dialogVisible"]),u(Mt,{onClose:i,dialogVisible:s(o)},null,8,["dialogVisible"])],64)}}},Us=function(e,a){const n=new la.Workbook;return Object.prototype.toString.call(e)==="[object Object]"&&(e=[e]),e.forEach(function(o){if(o.data.length===0)return!0;const i=n.addWorksheet(o.name),p=o.config&&o.config.merge||{},b=o.config&&o.config.borderInfo||{};return Os(o.data,i),js(p,i),Rs(b,i),!0}),n.xlsx.writeBuffer().then(o=>{const i=new Blob([o],{type:"application/vnd.ms-excel;charset=utf-8"});return new File([i],`${a}.xlsx`,{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"})})};var js=function(e={},a){Object.values(e).forEach(function(t){a.mergeCells(t.r+1,t.c+1,t.r+t.rs,t.c+t.cs)})},Rs=function(e,a){Array.isArray(e)&&e.forEach(function(n){if(n.rangeType==="range"){let t=Is(n.borderType,n.style,n.color),o=n.range[0],i=o.row,p=o.column;for(let b=i[0]+1;b<i[1]+2;b++)for(let v=p[0]+1;v<p[1]+2;v++)a.getCell(b,v).border=t}if(n.rangeType==="cell"){const{col_index:t,row_index:o}=n.value,i=Object.assign({},n.value);delete i.col_index,delete i.row_index;let p=Bs(i);a.getCell(o+1,t+1).border=p}})},Os=function(e,a){Array.isArray(e)&&e.forEach(function(n,t){n.every(function(o,i){if(!o)return!0;let p=Ps(o.bg),b=Ls(o.ff,o.fc,o.bl,o.it,o.fs,o.cl,o.ul),v=xs(o.vt,o.ht,o.tb,o.tr),g="";o.f?g={formula:o.f,result:o.v}:!o.v&&o.ct&&o.ct.s?o.ct.s.forEach(l=>{g+=l.v}):g=o.v;let c=Vs(i),f=a.getCell(c+(t+1));for(const l in p){f.fill=p;break}return f.font=b,f.alignment=v,f.value=g,!0})})},Ps=function(e){return e?{type:"pattern",pattern:"solid",fgColor:{argb:e.replace("#","")}}:{}},Ls=function(e=0,a="#000000",n=0,t=0,o=10,i=0,p=0){const b={0:"微软雅黑",1:"宋体（Song）",2:"黑体（ST Heiti）",3:"楷体（ST Kaiti）",4:"仿宋（ST FangSong）",5:"新宋体（ST Song）",6:"华文新魏",7:"华文行楷",8:"华文隶书",9:"Arial",10:"Times New Roman ",11:"Tahoma ",12:"Verdana",num2bl:function(g){return g!==0}};return{name:typeof e=="number"?b[e]:e,family:1,size:o,color:{argb:a.replace("#","")},bold:b.num2bl(n),italic:b.num2bl(t),underline:b.num2bl(p),strike:b.num2bl(i)}},xs=function(e="default",a="default",n="default",t="default"){const o={vertical:{0:"middle",1:"top",2:"bottom",default:"top"},horizontal:{0:"center",1:"left",2:"right",default:"left"},wrapText:{0:!1,1:!1,2:!0,default:!1},textRotation:{0:0,1:45,2:-45,3:"vertical",4:90,5:-90,default:0}};return{vertical:o.vertical[e],horizontal:o.horizontal[a],wrapText:o.wrapText[n],textRotation:o.textRotation[t]}},Is=function(e,a=1,n="#000"){if(!e)return{};const t={type:{"border-all":"all","border-top":"top","border-right":"right","border-bottom":"bottom","border-left":"left"},style:{0:"none",1:"thin",2:"hair",3:"dotted",4:"dashDot",5:"dashDot",6:"dashDotDot",7:"double",8:"medium",9:"mediumDashed",10:"mediumDashDot",11:"mediumDashDotDot",12:"slantDashDot",13:"thick"}};let o={style:t.style[a],color:{argb:n.replace("#","")}},i={};return t.type[e]==="all"?(i.top=o,i.right=o,i.bottom=o,i.left=o):i[t.type[e]]=o,i};function Bs(e,a,n){let t={};const o={type:{l:"left",r:"right",b:"bottom",t:"top"},style:{0:"none",1:"thin",2:"hair",3:"dotted",4:"dashDot",5:"dashDot",6:"dashDotDot",7:"double",8:"medium",9:"mediumDashed",10:"mediumDashDot",11:"mediumDashDotDot",12:"slantDashDot",13:"thick"}};for(const i in e)e[i].color.indexOf("rgb")===-1?t[o.type[i]]={style:o.style[e[i].style],color:{argb:e[i].color.replace("#","")}}:t[o.type[i]]={style:o.style[e[i].style],color:{argb:e[i].color}};return t}function Vs(e){let a="A".charCodeAt(0),t="Z".charCodeAt(0)-a+1,o="";for(;e>=0;)o=String.fromCharCode(e%t+a)+o,e=Math.floor(e/t)-1;return o}const Ms=e=>(Qe("data-v-2f8cc2a7"),e=e(),Je(),e),Ns={class:"content"},qs=Ms(()=>_("div",{id:"luckysheet"},null,-1)),zs={id:"tip"},Ws={__name:"luckysheet",props:{open:Boolean,url:Object},emits:["close"],setup(e,{expose:a,emit:n}){const t=e;Ye(async()=>{}),a({start:i});async function o(){let v=await Us(luckysheet.getAllSheets(),"constraints");await X.sendConstraintsFile(v,"constraints")}function i(){setTimeout(()=>{const v=t.url,g="test";p.value=!0,ra.transformExcelToLuckyByUrl(v,g,(c,f)=>{var l;if(c.sheets==null||c.sheets.length==0){alert("Failed to read the content of the excel file, currently does not support xls files!");return}b.value=c,p.value=!1,ia((l=window==null?void 0:window.luckysheet)==null?void 0:l.destroy)&&window.luckysheet.destroy(),window.luckysheet.create({container:"luckysheet",showinfobar:!1,data:c.sheets,title:c.info.name,userInfo:c.info.name.creator})})},0)}const p=N(!1);N("");const b=N({});return(v,g)=>{const c=M("v-btn"),f=zt;return k(),I(f,{onClose:g[0]||(g[0]=()=>{n("close")}),width:"80%",fullscreen:!1,modelValue:t.open,"onUpdate:modelValue":g[1]||(g[1]=l=>t.open=l)},{default:m(()=>[u(c,{class:"upload",color:"rgb(64, 170, 151)",style:{color:"white"},onClick:o},{default:m(()=>[O(" Upload ")]),_:1}),_("div",Ns,[qs,Nt(_("div",zs,"Downloading",512),[[qt,p.value]])])]),_:1},8,["modelValue"])}}},Ks=Ze(Ws,[["__scopeId","data-v-2f8cc2a7"]]),Hs={__name:"constraintsUpload",setup(e){const a=me(),n=async t=>{let o=await X.sendConstraintsFile(t,a.file.name);return a.ConstraintsFile=o,!1};return(t,o)=>{const i=Xe,p=ht;return k(),I(p,{class:"upload-demo",disabled:!s(a).file.name,action:"",multiple:"","before-upload":n,limit:3},{default:m(()=>[u(i,{icon:s(Ge),disabled:!s(a).file.name,color:"rgb(42, 123, 108)",style:{color:"white"},type:"primary"},{default:m(()=>[O(" Upload ")]),_:1},8,["icon","disabled"])]),_:1},8,["disabled"])}}};const B=e=>(Qe("data-v-79586b02"),e=e(),Je(),e),Gs={class:"contentData"},Xs={class:"uploadBox"},Zs={key:0,style:{color:"rgb(42, 123, 108)","margin-left":"10px"}},Ys={key:1,style:{color:"rgb(42, 123, 108)","margin-left":"10px"}},Qs={class:"uploadBox"},Js={style:{color:"rgb(42, 123, 108)","margin-left":"10px"}},eo=B(()=>_("h4",{style:{color:"white"}},"False:",-1)),to=B(()=>_("br",null,null,-1)),ao=B(()=>_("h4",{style:{color:"white"}},"Any:",-1)),no=B(()=>_("br",null,null,-1)),so=B(()=>_("h4",{style:{color:"white"}},"All:",-1)),oo=B(()=>_("label",null,"How To Handle Tasks Without Resources?",-1)),lo=B(()=>_("h4",{style:{color:"white"}},"Adjust task duration:",-1)),ro=B(()=>_("br",null,null,-1)),io=B(()=>_("br",null,null,-1)),uo=B(()=>_("h4",{style:{color:"white"}},"Adjust task-task lag:",-1)),co=B(()=>_("br",null,null,-1)),fo=B(()=>_("br",null,null,-1)),po=B(()=>_("label",null,"Method To Satisfy Resource Constraints",-1)),mo={__name:"index",setup(e){let a=N(!1);const n=Wt(),t=me(),o=N(null);Ye(async()=>{let c;try{c=await Ke.currentAuthenticatedUser(),c?(t.loginStatus=!0,t.email=c.attributes.email):t.loginStatus=!1}catch{t.loginStatus=!1}await He.identify(c.attributes.sub,{email:c.attributes.email})});function i(){a.value=!1}async function p(){Object.keys(t.dataArray).forEach(c=>{t.dataArray[c].all=[],t.dataArray[c].data=[],t.dataArray[c].span=[],t.dataArray[c].cost=[]}),console.log(t.loginAndauthRequired,t.isVip.auth),t.selectedData=null,t.wss=await t.connectWebsocket(),n.push({name:"BaselineSummary"}),t.active=1,t.end.data=!1}async function b(){t.ConstraintsFile="",fetch("demo_project.xml").then(c=>c.blob()).then(async c=>{const f=new File([c],"demo_project.xml");t.truefile=f.name,t.file.size=f.size;let l=await X.sendFile(f);t.file.name=l.data.mapping[f.name],t.originalplan.originalDurationDays=l.data.originalDurationDaysWithCalendar,t.originalplan.newCriticalTasksLen=l.data.newCriticalTasksLen,t.originalplan.maxResourceUnitAgg=l.data.maxResourceUnitAgg,t.loginAndauthRequired=l.data.loginAndauthRequired})}let v=N("");async function g(){t.file.name&&await X.constraintsFileDownload(`${t.file.name.split(".")[0]}.xlsx`)}return(c,f)=>{const l=M("v-sheet"),d=M("v-col"),r=M("v-row"),w=M("v-divider"),$=M("v-radio"),h=M("v-radio-group"),V=M("v-text-field"),y=Kt,F=na,x=sa,U=M("v-range-slider"),q=M("v-slider"),se=M("v-container");return k(),E(pe,null,[_("div",Gs,[u(se,{class:"container"},{default:m(()=>[u(r,{"no-gutters":""},{default:m(()=>[u(d,null,{default:m(()=>[u(l,{class:"pa-2 ma-2"},{default:m(()=>[_("h2",null,S(c.$t("inputData.title")),1)]),_:1})]),_:1})]),_:1}),u(r,{"no-gutters":""},{default:m(()=>[u(d,null,{default:m(()=>[u(l,{class:"pa-2 ma-2"},{default:m(()=>[_("h2",null,S(c.$t("inputData.oneData[0]")),1),_("h3",null,S(c.$t("inputData.oneData[1]")),1)]),_:1})]),_:1}),u(d,null,{default:m(()=>[u(l,{class:"pa-2 ma-2"},{default:m(()=>[_("div",Xs,[u(Fs),s(t).file.name?(k(),E("span",Ys,S(s(t).truefile),1)):(k(),E("span",Zs,S(c.$t("inputData.oneData[3]")),1))])]),_:1})]),_:1}),u(d,null,{default:m(()=>[u(l,{class:"pa-2 ma-2"},{default:m(()=>[O(S(c.$t("inputData.oneData[4]"))+" ",1),_("span",{onClick:f[0]||(f[0]=L=>b()),style:{"text-decoration":"underline",cursor:"pointer"}},S(c.$t("inputData.oneData[5]")),1)]),_:1})]),_:1})]),_:1}),u(w),_("div",{class:T({disabled:!s(t).file.name})},[u(r,{disabled:!s(t).file.name,"no-gutters":""},{default:m(()=>[u(d,null,{default:m(()=>[u(l,{class:"pa-2 ma-2"},{default:m(()=>[_("h2",null,S(c.$t("inputData.twoData[0]")),1),_("h3",null,[O(S(c.$t("inputData.twoData[1]"))+" ",1),_("span",{style:{cursor:"pointer","text-decoration":"underline"},onClick:g},S(c.$t("inputData.twoData[2]")),1)])]),_:1})]),_:1}),u(d,null,{default:m(()=>[u(l,{class:"pa-2 ma-2"},{default:m(()=>[_("div",Qs,[u(Hs),_("span",Js,S(s(t).ConstraintsFile),1)]),_("div",{onClick:f[1]||(f[1]=()=>{c.openSheet()})}," Online editing ")]),_:1})]),_:1}),u(d,null,{default:m(()=>[u(l,{class:"pa-2 ma-2"})]),_:1})]),_:1},8,["disabled"]),u(r,{"no-gutters":""},{default:m(()=>[u(d,null,{default:m(()=>[u(l,{class:"pa-2 ma-2"},{default:m(()=>[_("h2",null,S(c.$t("inputData.threeData[0]")),1),_("h3",null,S(c.$t("inputData.threeData[1]")),1)]),_:1})]),_:1}),u(d,null,{default:m(()=>[u(l,{class:"pa-2 ma-2"},{default:m(()=>[_("label",null,S(c.$t("inputData.threeData[2]")),1),u(h,{disabled:!s(t).file.name,modelValue:s(t).setting.IgnoreProject,"onUpdate:modelValue":f[2]||(f[2]=L=>s(t).setting.IgnoreProject=L),inline:""},{default:m(()=>[u($,{label:c.$t("inputData.threeData[3]"),value:!0},null,8,["label"]),u($,{label:c.$t("inputData.threeData[4]"),value:!1},null,8,["label"])]),_:1},8,["disabled","modelValue"])]),_:1})]),_:1}),u(d,null,{default:m(()=>[u(l,{class:"pa-2 ma-2"},{default:m(()=>[O(S(c.$t("inputData.threeData[5]"))+" ",1),_("p",null,[u(V,{disabled:!s(t).file.name,density:"compact",modelValue:s(t).setting.Rate,"onUpdate:modelValue":f[3]||(f[3]=L=>s(t).setting.Rate=L),placeholder:"0.025",variant:"outlined"},null,8,["disabled","modelValue"])])]),_:1})]),_:1})]),_:1}),u(r,{"no-gutters":""},{default:m(()=>[u(d),u(d,null,{default:m(()=>[u(l,{class:"pa-2 ma-2"},{default:m(()=>[u(y,{class:"box-item",effect:"dark",placement:"top-end"},{content:m(()=>[eo,O(" Tasks without explicitly assigned resources will not receive any default resource allocation. "),to,ao,O(" Any task without a specified resource will automatically be allocated a default Labor resource at a rate of 1.0 unit per hour. "),no,so,O(" Default Labor resources are assigned to tasks only when there are no existing resource or role definitions or when no tasks are explicitly assigned to resources or roles. ")]),default:m(()=>[oo]),_:1}),u(x,{modelValue:s(t).setting.considerDefaultResourceType,"onUpdate:modelValue":f[4]||(f[4]=L=>s(t).setting.considerDefaultResourceType=L),class:"m-2",style:{width:"300px"},placeholder:"Select",size:"large"},{default:m(()=>[u(F,{label:"All:Fill default resource for all tasks",value:"all"}),u(F,{label:"Any:Fill default resource for unassigned tasks",value:"any"}),u(F,{label:"False:No default resource filled",value:"false"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),u(d,null,{default:m(()=>[u(l,{class:"pa-2 ma-2"},{default:m(()=>[u(y,{class:"box-item",effect:"dark",placement:"top-end"},{content:m(()=>[lo,O(" This option involves modifying the actual time required to complete a task, aiming to align it with the available resources. "),ro,O(" For instance, this could mean shortening or extending the duration of a task to fit within the constraints of the available resources. "),io,uo,O(" This option revolves around altering the time gap between tasks, ensuring a more reasonable schedule for the waiting time between tasks considering the limitations in available resources. "),co,O(" This adjustment might involve delaying the start time of the subsequent task to accommodate the existing resource constraints. "),fo]),default:m(()=>[po]),_:1}),u(x,{modelValue:s(t).setting.resourceConstraint,"onUpdate:modelValue":f[5]||(f[5]=L=>s(t).setting.resourceConstraint=L),class:"m-3",placeholder:"Select",size:"large",style:{width:"300px"}},{default:m(()=>[u(F,{label:"Adjust task duration",value:!1}),u(F,{label:"Adjust task-task lag",value:!0})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),u(r,{"no-gutters":""},{default:m(()=>[u(d,{cols:"4"},{default:m(()=>[u(l,{class:"pa-2 ma-2"})]),_:1}),u(d,null,{default:m(()=>[u(l,{class:"pa-2 ma-2"},{default:m(()=>[O(S(`${c.$t("inputData.fourData[0]")}(${Math.floor(s(t).setting.Ratio[0]*100)}% - ${Math.floor(s(t).setting.Ratio[1]*100)}%)`)+" ",1),u(U,{disabled:!s(t).file.name,max:10,min:.1,step:.1,modelValue:s(t).setting.Ratio,"onUpdate:modelValue":f[6]||(f[6]=L=>s(t).setting.Ratio=L),color:"rgb(112, 191, 177)"},null,8,["disabled","modelValue"])]),_:1})]),_:1})]),_:1}),u(r,{"no-gutters":""},{default:m(()=>[u(d,{cols:"4"},{default:m(()=>[u(l,{class:"pa-2 ma-2"})]),_:1}),u(d,null,{default:m(()=>[u(l,{class:"pa-2 ma-2"},{default:m(()=>[O(S(c.$t("inputData.fiveData[0]"))+" ("+S(s(t).setting.Steps)+") ",1),u(q,{disabled:!s(t).file.name,step:1,modelValue:s(t).setting.Steps,"onUpdate:modelValue":f[7]||(f[7]=L=>s(t).setting.Steps=L),color:"rgb(112, 191, 177)"},null,8,["disabled","modelValue"])]),_:1})]),_:1})]),_:1}),u(r,{justify:"space-between"},{default:m(()=>[u(d,null,{default:m(()=>[u(l,{class:"pa-2 ma-2"})]),_:1}),u(d,null,{default:m(()=>[u(l,{class:"pa-2 ma-2"})]),_:1}),u(d,null,{default:m(()=>[u(l,{class:"pa-2 ma-2"},{default:m(()=>[u(oa,{style:"color:white",disabled:s(t).file.name,onClicked:p,title:"next"},null,8,["disabled"])]),_:1})]),_:1})]),_:1})],2)]),_:1})]),u(Ks,{ref_key:"sheet",ref:o,open:s(a),url:s(v),onClose:i},null,8,["open","url"])],64)}}},vo=Ze(mo,[["__scopeId","data-v-79586b02"]]);export{vo as default};
