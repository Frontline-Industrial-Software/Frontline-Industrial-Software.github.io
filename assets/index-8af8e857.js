import{aM as mn,am as dn,x as w,y as _,B as W,E as $,F as cn,C as gn,ar as pn,as as En}from"./index-00c8b004.js";var Dn={exports:{}};(function(Z,C){(function(u,r){Z.exports=r()})(mn,function(){return function(v){var u={};function r(t){if(u[t])return u[t].exports;var F=u[t]={exports:{},id:t,loaded:!1};return v[t].call(F.exports,F,F.exports,r),F.loaded=!0,F.exports}return r.m=v,r.c=u,r.p="",r(0)}([function(v,u,r){var t;t=function(F){return{clustering:r(1),regression:r(5),statistics:r(6),histogram:r(15),transform:{regression:r(18),histogram:r(21),clustering:r(22)}}}.call(u,r,u,v),t!==void 0&&(v.exports=t)},function(v,u,r){var t;t=function(F){var d=r(2),S=d.dataPreprocess,g=d.normalizeDimensions,f=r(3),n=r(4),m=f.size,p=f.sumOfColumn,e=f.sum,D=f.zeros,n=r(4),s=n.isNumber,i=Math.pow,a={SINGLE:"single",MULTIPLE:"multiple"};function l(x,N,M){for(var U=D(x.length,2),T=E(N,z(x,M.dimensions)),A=!0,L,I,R,B;A;){A=!1;for(var P=0;P<x.length;P++){L=1/0,I=-1;for(var O=0;O<N;O++)R=y(x[P],T[O],M),R<L&&(L=R,I=O);U[P][0]!==I&&(A=!0),U[P][0]=I,U[P][1]=L}for(var P=0;P<N;P++){B=[];for(var O=0;O<U.length;O++)U[O][0]===P&&B.push(x[O]);T[P]=c(B,M)}}var q={centroids:T,clusterAssigned:U};return q}function c(x,N){for(var M=[],U,T,A=0;A<N.dimensions.length;A++){var L=N.dimensions[A];U=0;for(var I=0;I<x.length;I++)U+=x[I][L];T=U/x.length,M.push(T)}return M}function o(x,N,M){var U=(s(N)?{clusterCount:N,stepByStep:M}:N)||{clusterCount:2},T=U.clusterCount;if(T<2)return;var A=b(x,U),L=A.outputType===a.SINGLE,I=S(x,{dimensions:A.dimensions}),R=D(I.length,2),B,P,O;function q(X,J){R[X][1]=J}function V(X){return R[X][1]}if(L){B=[];var un=A.outputClusterIndexDimension;P=function(X,J){B[X][un]=J},O=function(X){return B[X][un]};for(var G=0;G<I.length;G++)B.push(I[G].slice()),q(G,0),P(G,0)}else P=function(X,J){R[X][0]=J},O=function(X){return R[X][0]};for(var vn=c(I,A),j=[vn],G=0;G<I.length;G++){var hn=y(I[G],vn,A);q(G,hn)}var rn,en,tn,nn,an,on,ln=1,H={data:B,centroids:j,isEnd:!1};L||(H.clusterAssment=R);function fn(){if(ln<T){rn=1/0;for(var X,J,Q,Y=0;Y<j.length;Y++){en=[],tn=[];for(var K=0;K<I.length;K++)O(K)===Y?en.push(I[K]):tn.push(V(K));nn=l(en,2,A),an=p(nn.clusterAssigned,1),on=e(tn),an+on<rn&&(rn=on+an,X=Y,J=nn.centroids,Q=nn.clusterAssigned)}for(var K=0;K<Q.length;K++)Q[K][0]===0?Q[K][0]=X:Q[K][0]===1&&(Q[K][0]=j.length);j[X]=J[0],j.push(J[1]);for(var K=0,Y=0;K<I.length&&Y<Q.length;K++)O(K)===X&&(P(K,Q[Y][0]),q(K,Q[Y++][1]));var sn=[];if(!L){for(var K=0;K<j.length;K++){sn[K]=[];for(var Y=0;Y<I.length;Y++)O(Y)===K&&sn[K].push(I[Y])}H.pointsInCluster=sn}ln++}else H.isEnd=!0}if(U.stepByStep)H.next=function(){return fn(),h(H,A),H};else for(;fn(),!H.isEnd;);return h(H,A),H}function h(x,N){var M=N.outputCentroidDimensions;if(!(N.outputType!==a.SINGLE||M==null))for(var U=x.data,T=x.centroids,A=0;A<U.length;A++)for(var L=U[A],I=L[N.outputClusterIndexDimension],R=T[I],B=Math.min(R.length,M.length),P=0;P<B;P++)L[M[P]]=R[P]}function E(x,N){for(var M=D(x,N.length),U=0;U<N.length;U++)for(var T=N[U],A=0;A<x;A++)M[A][U]=T.min+T.span*Math.random();return M}function y(x,N,M){for(var U=0,T=M.dimensions,A=M.rawExtents,L=0;L<T.length;L++){var I=A[L].span;if(I){var R=T[L],B=(x[R]-N[L])/I;U+=i(B,2)}}return U}function b(x,N){var M=m(x);if(M.length<1)throw new Error("The input data of clustering should be two-dimension array.");for(var U=M[1],T=[],A=0;A<U;A++)T.push(A);var L=g(N.dimensions,T),I=N.outputType||a.MULTIPLE,R=N.outputClusterIndexDimension;if(I===a.SINGLE&&!n.isNumber(R))throw new Error("outputClusterIndexDimension is required as a number.");var B=z(x,L);return{dimensions:L,rawExtents:B,outputType:I,outputClusterIndexDimension:R,outputCentroidDimensions:N.outputCentroidDimensions}}function z(x,N){for(var M=[],U=N.length,T=0;T<U;T++)M.push({min:1/0,max:-1/0});for(var T=0;T<x.length;T++)for(var A=x[T],L=0;L<U;L++){var I=M[L],R=A[N[L]];I.min>R&&(I.min=R),I.max<R&&(I.max=R)}for(var T=0;T<U;T++)M[T].span=M[T].max-M[T].min;return M}return{OutputType:a,hierarchicalKMeans:o}}.call(u,r,u,v),t!==void 0&&(v.exports=t)},function(v,u,r){var t;t=function(F){var d=r(3),S=d.isArray,g=d.size,f=r(4),m=f.isNumber;function p(n,s){return typeof n=="number"?[n]:n??s}function e(n,s){s=s||{};var i=s.dimensions,a={};if(i!=null)for(var l=0;l<i.length;l++)a[i[l]]=!0;var c=s.toOneDimensionArray?i?i[0]:0:null;function o(x){return!i||a.hasOwnProperty(x)}if(!S(n))throw new Error("Invalid data type, you should input an array");var h=[],E=g(n);if(E.length===1)for(var l=0;l<E[0];l++){var y=n[l];m(y)&&h.push(y)}else if(E.length===2)for(var l=0;l<E[0];l++){for(var b=!0,y=n[l],z=0;z<E[1];z++)o(z)&&!m(y[z])&&(b=!1);b&&h.push(c!=null?y[c]:y)}return h}function D(n){var s=n.toString(),i=s.indexOf(".");return i<0?0:s.length-1-i}return{normalizeDimensions:p,dataPreprocess:e,getPrecision:D}}.call(u,r,u,v),t!==void 0&&(v.exports=t)},function(v,u,r){var t;t=function(F){var d=Object.prototype.toString,S=Array.prototype,g=S.map;function f(a){for(var l=[];m(a);)l.push(a.length),a=a[0];return l}function m(a){return d.call(a)==="[object Array]"}function p(a,l){for(var c=[],o=0;o<a;o++){c[o]=[];for(var h=0;h<l;h++)c[o][h]=0}return c}function e(a){for(var l=0,c=0;c<a.length;c++)l+=a[c];return l}function D(a,l){for(var c=0,o=0;o<a.length;o++)c+=a[o][l];return c}function n(a,l){return a>l?1:a<l?-1:a===l?0:NaN}function s(a,l,c,o){for(c==null&&(c=0),o==null&&(o=a.length);c<o;){var h=Math.floor((c+o)/2),E=n(a[h],l);if(E>0)o=h;else if(E<0)c=h+1;else return h+1}return c}function i(a,l,c){if(a&&l){if(a.map&&a.map===g)return a.map(l,c);for(var o=[],h=0,E=a.length;h<E;h++)o.push(l.call(c,a[h],h,a));return o}}return{size:f,isArray:m,zeros:p,sum:e,sumOfColumn:D,ascending:n,bisect:s,map:i}}.call(u,r,u,v),t!==void 0&&(v.exports=t)},function(v,u,r){var t;t=function(F){function d(f){return f=f===null?NaN:+f,typeof f=="number"&&!isNaN(f)}function S(f){return isFinite(f)&&f===Math.round(f)}function g(f){if(f===0)return 0;var m=Math.floor(Math.log(f)/Math.LN10);return f/Math.pow(10,m)>=10&&m++,m}return{isNumber:d,isInteger:S,quantityExponent:g}}.call(u,r,u,v),t!==void 0&&(v.exports=t)},function(v,u,r){var t;t=function(F){var d=r(2),S=d.dataPreprocess,g=d.normalizeDimensions,f={linear:function(e,D){for(var n=D.dimensions[0],s=D.dimensions[1],i=0,a=0,l=0,c=0,o=e.length,h=0;h<o;h++){var E=e[h];i+=E[n],a+=E[s],l+=E[n]*E[s],c+=E[n]*E[n]}for(var y=(o*l-i*a)/(o*c-i*i),b=a/o-y*i/o,z=[],x=0;x<e.length;x++){var E=e[x],N=E.slice();N[n]=E[n],N[s]=y*E[n]+b,z.push(N)}var M="y = "+Math.round(y*100)/100+"x + "+Math.round(b*100)/100;return{points:z,parameter:{gradient:y,intercept:b},expression:M}},linearThroughOrigin:function(e,D){for(var n=D.dimensions[0],s=D.dimensions[1],i=0,a=0,l=0;l<e.length;l++){var c=e[l];i+=c[n]*c[n],a+=c[n]*c[s]}for(var o=a/i,h=[],E=0;E<e.length;E++){var c=e[E],y=c.slice();y[n]=c[n],y[s]=c[n]*o,h.push(y)}var b="y = "+Math.round(o*100)/100+"x";return{points:h,parameter:{gradient:o},expression:b}},exponential:function(e,D){for(var n=D.dimensions[0],s=D.dimensions[1],i=0,a=0,l=0,c=0,o=0,h=0,E=0;E<e.length;E++){var y=e[E];i+=y[n],a+=y[s],h+=y[n]*y[s],l+=y[n]*y[n]*y[s],c+=y[s]*Math.log(y[s]),o+=y[n]*y[s]*Math.log(y[s])}for(var b=a*l-h*h,z=Math.pow(Math.E,(l*c-h*o)/b),x=(a*o-h*c)/b,N=[],M=0;M<e.length;M++){var y=e[M],U=y.slice();U[n]=y[n],U[s]=z*Math.pow(Math.E,x*y[n]),N.push(U)}var T="y = "+Math.round(z*100)/100+"e^("+Math.round(x*100)/100+"x)";return{points:N,parameter:{coefficient:z,index:x},expression:T}},logarithmic:function(e,D){for(var n=D.dimensions[0],s=D.dimensions[1],i=0,a=0,l=0,c=0,o=0;o<e.length;o++){var h=e[o];i+=Math.log(h[n]),a+=h[s]*Math.log(h[n]),l+=h[s],c+=Math.pow(Math.log(h[n]),2)}for(var E=(o*a-l*i)/(o*c-i*i),y=(l-E*i)/o,b=[],z=0;z<e.length;z++){var h=e[z],x=h.slice();x[n]=h[n],x[s]=E*Math.log(h[n])+y,b.push(x)}var N="y = "+Math.round(y*100)/100+" + "+Math.round(E*100)/100+"ln(x)";return{points:b,parameter:{gradient:E,intercept:y},expression:N}},polynomial:function(e,D){var n=D.dimensions[0],s=D.dimensions[1],i=D.order;i==null&&(i=2);for(var a=[],l=[],c=i+1,o=0;o<c;o++){for(var h=0,E=0;E<e.length;E++){var y=e[E];h+=y[s]*Math.pow(y[n],o)}l.push(h);for(var b=[],z=0;z<c;z++){for(var x=0,N=0;N<e.length;N++)x+=Math.pow(e[N][n],o+z);b.push(x)}a.push(b)}a.push(l);for(var M=m(a,c),U=[],o=0;o<e.length;o++){for(var T=0,y=e[o],E=0;E<M.length;E++)T+=M[E]*Math.pow(y[n],E);var A=y.slice();A[n]=y[n],A[s]=T,U.push(A)}for(var L="y = ",o=M.length-1;o>=0;o--)o>1?L+=Math.round(M[o]*Math.pow(10,o+1))/Math.pow(10,o+1)+"x^"+o+" + ":o===1?L+=Math.round(M[o]*100)/100+"x + ":L+=Math.round(M[o]*100)/100;return{points:U,parameter:M,expression:L}}};function m(e,D){for(var n=0;n<e.length-1;n++){for(var s=n,i=n+1;i<e.length-1;i++)Math.abs(e[n][i])>Math.abs(e[n][s])&&(s=i);for(var a=n;a<e.length;a++){var l=e[a][n];e[a][n]=e[a][s],e[a][s]=l}for(var c=n+1;c<e.length-1;c++)for(var o=e.length-1;o>=n;o--)e[o][c]-=e[o][n]/e[n][n]*e[n][c]}for(var h=new Array(D),E=e.length-1,i=e.length-2;i>=0;i--){for(var l=0,n=i+1;n<e.length-1;n++)l+=e[n][i]*h[n];h[i]=(e[E][i]-l)/e[i][i]}return h}var p=function(e,D,n){var s=typeof n=="number"?{order:n}:n||{},i=g(s.dimensions,[0,1]),a=S(D,{dimensions:i}),l=f[e](a,{order:s.order,dimensions:i}),c=i[0];return l.points.sort(function(o,h){return o[c]-h[c]}),l};return p}.call(u,r,u,v),t!==void 0&&(v.exports=t)},function(v,u,r){var t;t=function(F){var d={};return d.max=r(7),d.deviation=r(8),d.mean=r(10),d.median=r(12),d.min=r(14),d.quantile=r(13),d.sampleVariance=r(9),d.sum=r(11),d}.call(u,r,u,v),t!==void 0&&(v.exports=t)},function(v,u,r){var t;t=function(F){var d=r(4),S=d.isNumber;function g(f){for(var m=-1/0,p=0;p<f.length;p++)S(f[p])&&f[p]>m&&(m=f[p]);return m}return g}.call(u,r,u,v),t!==void 0&&(v.exports=t)},function(v,u,r){var t;t=function(F){var d=r(9);return function(S){var g=d(S);return g&&Math.sqrt(g)}}.call(u,r,u,v),t!==void 0&&(v.exports=t)},function(v,u,r){var t;t=function(F){var d=r(4),S=d.isNumber,g=r(10);function f(m){var p=m.length;if(!p||p<2)return 0;if(m.length>=2){for(var e=g(m),D=0,n,s=0;s<m.length;s++)S(m[s])&&(n=m[s]-e,D+=n*n);return D/(m.length-1)}}return f}.call(u,r,u,v),t!==void 0&&(v.exports=t)},function(v,u,r){var t;t=function(F){var d=r(11);function S(g){var f=g.length;return f?d(g)/g.length:0}return S}.call(u,r,u,v),t!==void 0&&(v.exports=t)},function(v,u,r){var t;t=function(F){var d=r(4),S=d.isNumber;function g(f){var m=f.length;if(!m)return 0;for(var p=0,e=0;e<m;e++)S(f[e])&&(p+=f[e]);return p}return g}.call(u,r,u,v),t!==void 0&&(v.exports=t)},function(v,u,r){var t;t=function(F){var d=r(13);function S(g){return d(g,.5)}return S}.call(u,r,u,v),t!==void 0&&(v.exports=t)},function(v,u,r){var t;t=function(F){return function(d,S){var g=d.length;if(!g)return 0;if(S<=0||g<2)return d[0];if(S>=1)return d[g-1];var f=(g-1)*S,m=Math.floor(f),p=d[m],e=d[m+1];return p+(e-p)*(f-m)}}.call(u,r,u,v),t!==void 0&&(v.exports=t)},function(v,u,r){var t;t=function(F){var d=r(4),S=d.isNumber;function g(f){for(var m=1/0,p=0;p<f.length;p++)S(f[p])&&f[p]<m&&(m=f[p]);return m}return g}.call(u,r,u,v),t!==void 0&&(v.exports=t)},function(v,u,r){var t;t=function(F){var d=r(7),S=r(14),g=r(13),f=r(8),m=r(2),p=m.dataPreprocess,e=m.normalizeDimensions,D=r(3),n=D.ascending,s=D.map,i=r(16),a=D.bisect,l=r(17);function c(O,E){for(var y=typeof E=="string"?{method:E}:E||{},b=y.method==null?o.squareRoot:o[y.method],z=e(y.dimensions),x=p(O,{dimensions:z,toOneDimensionArray:!0}),N=d(x),M=S(x),U=b(x,M,N),T=l(M,N,U),A=T.step,L=T.toFixedPrecision,I=i(+(Math.ceil(M/A)*A).toFixed(L),+(Math.floor(N/A)*A).toFixed(L),A,L),R=I.length,B=new Array(R+1),P=0;P<=R;P++)B[P]={},B[P].sample=[],B[P].x0=P>0?I[P-1]:I[P]-M===A?M:I[P]-A,B[P].x1=P<R?I[P]:N-I[P-1]===A?N:I[P-1]+A;for(var P=0;P<x.length;P++)M<=x[P]&&x[P]<=N&&B[a(I,x[P],0,R)].sample.push(x[P]);var O=s(B,function(V){return[+((V.x0+V.x1)/2).toFixed(L),V.sample.length,V.x0,V.x1,V.x0+" - "+V.x1]}),q=s(B,function(V){return[V.x0,V.x1,V.sample.length]});return{bins:B,data:O,customData:q}}var o={squareRoot:function(h){var E=Math.ceil(Math.sqrt(h.length));return E>50?50:E},scott:function(h,E,y){return Math.ceil((y-E)/(3.5*f(h)*Math.pow(h.length,-1/3)))},freedmanDiaconis:function(h,E,y){return h.sort(n),Math.ceil((y-E)/(2*(g(h,.75)-g(h,.25))*Math.pow(h.length,-1/3)))},sturges:function(h){return Math.ceil(Math.log(h.length)/Math.LN2)+1}};return c}.call(u,r,u,v),t!==void 0&&(v.exports=t)},function(v,u,r){var t;t=function(F){var d=r(2),S=d.getPrecision;return function(g,f,m,p){var e=arguments.length;e<2?(f=g,g=0,m=1):e<3?m=1:e<4?(m=+m,p=S(m)):p=+p;for(var D=Math.ceil(((f-g)/m).toFixed(p)),n=new Array(D+1),s=0;s<D+1;s++)n[s]=+(g+s*m).toFixed(p);return n}}.call(u,r,u,v),t!==void 0&&(v.exports=t)},function(v,u,r){var t;t=function(F){var d=r(4);return function(S,g,f){var m=Math.abs(g-S)/f,p=d.quantityExponent(m),e=Math.pow(10,p),D=m/e;D>=Math.sqrt(50)?e*=10:D>=Math.sqrt(10)?e*=5:D>=Math.sqrt(2)&&(e*=2);var n=p<0?-p:0,s=+(g>=S?e:-e).toFixed(n);return{step:s,toFixedPrecision:n}}}.call(u,r,u,v),t!==void 0&&(v.exports=t)},function(v,u,r){var t;t=function(F){var d=r(5),S=r(19),g=2;return{type:"ecStat:regression",transform:function(m){var p=m.upstream,e=m.config||{},D=e.method||"linear",n=d(D,p.cloneRawData(),{order:e.order,dimensions:S.normalizeExistingDimensions(m,e.dimensions)}),s=n.points,i=e.formulaOn;i==null&&(i="end");var a;if(i!=="none"){for(var l=0;l<s.length;l++)s[l][g]=i==="start"&&l===0||i==="all"||i==="end"&&l===s.length-1?n.expression:"";a=p.cloneAllDimensionInfo(),a[g]={}}return[{dimensions:a,data:s}]}}}.call(u,r,u,v),t!==void 0&&(v.exports=t)},function(v,u,r){var t;t=function(F){var d=r(3),S=r(4),g=r(20);function f(p,e){if(e==null)return;var D=p.upstream;if(d.isArray(e)){for(var n=[],s=0;s<e.length;s++){var i=D.getDimensionInfo(e[s]);a(i,e[s]),n[s]=i.index}return n}else{var i=D.getDimensionInfo(e);return a(i,e),i.index}function a(l,c){if(!l)throw new Error("Can not find dimension by "+c)}}function m(p){if(d.isArray(p)){for(var e=[],D=[],n=0;n<p.length;n++){var s=i(p[n]);e.push(s.name),D.push(s.index)}return{name:e,index:D}}else if(p!=null)return i(p);function i(a){if(S.isNumber(a))return{index:a};if(g.isObject(a)&&S.isNumber(a.index))return a;throw new Error("Illegle new dimensions config. Expect `{ name: string, index: number }`.")}}return{normalizeExistingDimensions:f,normalizeNewDimensions:m}}.call(u,r,u,v),t!==void 0&&(v.exports=t)},function(v,u,r){var t;t=function(F){function d(g,f){if(Object.assign)Object.assign(g,f);else for(var m in f)f.hasOwnProperty(m)&&(g[m]=f[m]);return g}function S(g){const f=typeof g;return f==="function"||!!g&&f==="object"}return{extend:d,isObject:S}}.call(u,r,u,v),t!==void 0&&(v.exports=t)},function(v,u,r){var t;t=function(F){var d=r(15),S=r(19);return{type:"ecStat:histogram",transform:function(f){var m=f.upstream,p=f.config||{},e=d(m.cloneRawData(),{method:p.method,dimensions:S.normalizeExistingDimensions(f,p.dimensions)});return[{dimensions:["MeanOfV0V1","VCount","V0","V1","DisplayableName"],data:e.data},{data:e.customData}]}}}.call(u,r,u,v),t!==void 0&&(v.exports=t)},function(v,u,r){var t;t=function(F){var d=r(1),S=r(4),g=r(19),f=S.isNumber;return{type:"ecStat:clustering",transform:function(p){var e=p.upstream,D=p.config||{},n=D.clusterCount;if(!f(n)||n<=0)throw new Error('config param "clusterCount" need to be specified as an interger greater than 1.');if(n===1)return[{},{data:[]}];var s=g.normalizeNewDimensions(D.outputClusterIndexDimension),i=g.normalizeNewDimensions(D.outputCentroidDimensions);if(s==null)throw new Error("outputClusterIndexDimension is required as a number.");for(var a=d.hierarchicalKMeans(e.cloneRawData(),{clusterCount:n,stepByStep:!1,dimensions:g.normalizeExistingDimensions(p,D.dimensions),outputType:d.OutputType.SINGLE,outputClusterIndexDimension:s.index,outputCentroidDimensions:(i||{}).index}),l=e.cloneAllDimensionInfo(),c=[],o=0;o<l.length;o++){var h=l[o];c.push(h.name)}if(c[s.index]=s.name,i)for(var o=0;o<i.index.length;o++)i.name[o]!=null&&(c[i.index[o]]=i.name[o]);return[{dimensions:c,data:a.data},{data:a.centroids}]}}}.call(u,r,u,v),t!==void 0&&(v.exports=t)}])})})(Dn);const yn=""+new URL("../arrow-down-thin-green.svg",import.meta.url).href,xn=""+new URL("../arrow-up-thin-red.svg",import.meta.url).href,Mn=""+new URL("../arrow-down-thin.svg",import.meta.url).href,Nn=""+new URL("../arrow-up-thin.svg",import.meta.url).href;const k=Z=>(pn("data-v-c843e234"),Z=Z(),En(),Z),An={class:"right-items"},Sn={class:"title"},Pn={class:"content"},In={class:"t-content"},Tn={class:"f"},Un={key:0},Ln={key:0,style:{color:"#10be00","font-weight":"700"}},Fn=k(()=>W("img",{style:{"vertical-align":"bottom"},src:yn,alt:"",srcset:""},null,-1)),Rn={key:1,style:{color:"#be0010","font-weight":"700"}},Cn=k(()=>W("img",{style:{"vertical-align":"bottom"},src:xn,alt:"",srcset:""},null,-1)),zn={key:1},Bn={key:0,style:{color:"#be0010","font-weight":"700"}},Kn=k(()=>W("img",{style:{"vertical-align":"bottom"},src:Mn,alt:"",srcset:""},null,-1)),bn={key:1,style:{color:"#10be00","font-weight":"700"}},Wn=k(()=>W("img",{style:{"vertical-align":"bottom"},src:Nn,alt:"",srcset:""},null,-1)),On={class:"b-content"},Xn={style:{"border-right":"1px solid #f0f1f3"},class:"bottom"},Vn=k(()=>W("div",null,"Actual",-1)),Yn={class:"bottom"},Gn=k(()=>W("div",null,"Plan",-1)),Hn={__name:"index",props:["title","body","precent","height","isPositive"],setup(Z){const C=Z;return(v,u)=>(w(),_("div",An,[W("div",{style:gn({height:Z.height+"px"}),class:"right-item"},[W("div",Sn,$(C.title),1),W("div",Pn,[W("div",In,[W("span",Tn,$(C.body&&C.body.length>0?C.body[0]:null),1),C.isPositive?(w(),_("span",Un,[C.precent&&C.precent.indexOf("-")!==-1?(w(),_("span",Ln,[Fn,W("span",null,$(C.precent),1)])):C.precent?(w(),_("span",Rn,[Cn,W("span",null,$(C.precent),1)])):cn("",!0)])):(w(),_("span",zn,[C.precent&&C.precent.indexOf("-")!==-1?(w(),_("span",Bn,[Kn,W("span",null,$(C.precent),1)])):C.precent?(w(),_("span",bn,[Wn,W("span",null,$(C.precent),1)])):cn("",!0)]))]),W("div",On,[W("div",Xn,[W("span",null,$(C.body&&C.body.length>0?C.body[1]:null),1),Vn]),W("div",Yn,[W("span",null,$(C.body&&C.body.length>0?C.body[2]!==null&&C.body[2]!==void 0?C.body[2]:C.body[1]:null),1),Gn])])])],4)]))}},Qn=dn(Hn,[["__scopeId","data-v-c843e234"]]);export{Qn as C};
