import{U as T,q as L,o as J,H as Ne,I as j,a as p,F as x,C as c,as as ze,_ as Ce,af as Oe,at as Fe,aK as Me,aL as Be,a7 as te,ap as Te,c as q,f as se,b as $,aC as le,V as de,W as he,B as Q,d as Re,a$ as Ae}from"./index-53f645fa.js";import{m as Ve,E as Ue}from"./el-select-4297ffc6.js";import{C as ae}from"./index-3750cfe2.js";import{_ as Ee}from"./next-c0fcf091.js";import{e as Pe,c as Le}from"./index-f7adadce.js";import{V as Ze}from"./index.min-fd1f5a15.js";const He=p("span",{class:"dialog-footer"},null,-1),We={__name:"dialog",props:["dialogVisible","data"],emits:["closeDialog"],setup(ue,{emit:s}){const w=ue;let F=T();async function Z(){Ze.preview(F.value,`

`+H.value)}function _(v){if(!v)return"0.00";var v=Math.round(parseFloat(v)*100)/100,f=v.toString().split(".");if(f.length==1)return v=v.toString()+".00",v;if(f.length>1)return f[1].length<2&&(v=v.toString()+"0"),v}L(()=>w.dialogVisible);function M(R,v=0){let f=`
`;const N=D=>"  ".repeat(D);for(const[D,U]of Object.entries(R))typeof U=="object"&&U!==null?(f+=`${N(v)}- **${D}**
`,f+=M(U,v+1)):f+=`${N(v)}- ${D}: ${U}
`;return f}function z(R){return new Date(R).toISOString()}let H=L(()=>{let R=()=>{let f="";for(const N in w.data.resources){const D=w.data.resources[N];f+=`The resource with ID ${D.resourceId} was originally planned to have ${_(D.plannedUnits)} units. The initial planned usage rate was ${_(D.plannedUnitsPerHour)} units per hour, and it currently remains at ${_(D.Units)} units per hour. However, after optimization, the new usage rate is ${_(D.newUnitsPerHour)} units per hour, and the new daily usage is ${_(D.newUnitsPerDay)} units per day.
`}return f};return`This is a task named '${w.data.name}' categorized as '${w.data.type}', and it is ${w.data.critical==!0?"":"not"} a Critical Task.
   Before optimization,
   it is scheduled to start on ${z(w.data.plannedStart).replace("T"," ").replace("Z","").slice(0,16)} (date) and finish on ${z(w.data.plannedFinish).replace("T"," ").replace("Z","").slice(0,16)} (date), with an estimated duration of ${w.data.remainingDuration} hours. 
  After optimization,
   it is scheduled to start on ${z(w.data.newStart).replace("T"," ").replace("Z","").slice(0,16)} (date) and finish on ${z(w.data.newFinish).replace("T"," ").replace("Z","").slice(0,16)} (date), with an estimated duration of ${w.data.newDuration} hours. 
Resources:
${R()}As of now, the task has not commenced and is labeled as '${w.data.status}.' The task's duration ratio is ${_(w.data.durationRatio)}.`+M(w.data)});const Y=()=>{s("closeDialog")};return(R,v)=>{const f=ze;return J(),Ne(f,{onOpen:Z,onClose:Y,modelValue:w.dialogVisible,"onUpdate:modelValue":v[0]||(v[0]=N=>w.dialogVisible=N),title:"Detailed content",width:"50%",draggable:""},{footer:j(()=>[He]),default:j(()=>[p("span",null,x(c(H).id),1),p("div",{ref_key:"editorRef",ref:F},null,512)]),_:1},8,["modelValue"])}}};const Je={class:"contain"},je={class:"box"},Ye={class:"sp"},Ge={class:"step"},Ke={class:"step"},qe={class:"maintop"},Qe={class:"mainEchar1"},Xe={class:"Echar1top"},et=Re('<div class="choosebox" data-v-08e69a00><div class="choose" data-v-08e69a00><div style="background-color:#b0e054;" class="item" data-v-08e69a00></div><div data-v-08e69a00>Optimized</div></div><div class="choose" data-v-08e69a00><div style="background-color:#5474c4;" class="item" data-v-08e69a00></div><div data-v-08e69a00>Baseline</div></div><div class="choose" data-v-08e69a00><div style="background-color:red;" class="item" data-v-08e69a00></div><div data-v-08e69a00>Critical Path</div></div><div class="choose" data-v-08e69a00><div style="background-color:pink;" class="item" data-v-08e69a00></div><div data-v-08e69a00>Critical Path(Baseline)</div></div></div><div id="main" data-v-08e69a00></div>',2),tt={ref:"main",style:{width:"1350px",height:"610px"},id:"myEcharts"},at={class:"mainEchar2"},nt={class:"Echar2top"},rt={class:"resources-title"},it={class:"types"},ot={class:"DateContent"},st={ref:"main01",style:{width:"1350px",height:"610px"},id:"myEcharts01"},lt={class:"button"},dt={__name:"index",setup(ue){const s=Oe(),w=Fe();let F=T("day");function Z(t){F.value=t}function _(t,a){let n;return function(){const r=this,m=arguments;clearTimeout(n),n=setTimeout(function(){t.apply(r,m)},a)}}let M=T("Compare"),z=T("Date"),H=T(!1),Y=T("");const R=()=>{H.value=!1};Me((t,a,n)=>{t.name=="InputData",n()}),Be(()=>{s.selectChange&&(B.value="",we(),re(),s.selectChange=!1)});function v(t,a){return Math.round(t/a*1e4)/100+"%"}function f(t){return new Date(t).toISOString()}function N(t){const a=new Date(t);return`${a.getUTCFullYear()}/${a.getUTCMonth()+1}/${a.getUTCDate()} ${("0"+a.getUTCHours()).slice(-2)}:${("0"+a.getUTCMinutes()).slice(-2)}:${("0"+a.getUTCSeconds()).slice(-2)}`}const D=t=>t[0]===void 0||t[0].length===0?[]:t[0].xy.map(a=>{const[n,r]=Object.entries(a)[0];return{value:[f(parseInt(n)),r],name:f(parseInt(n))+r+t[1]}});function U(t,a,n){var r=[];return a==="day"?t:(a==="week"?r=ne(t,"week",n):a==="month"?r=ne(t,"month",n):a==="year"&&(r=ne(t,"year",n)),r)}function ne(t,a,n){var r=[],m=ye(t,a);for(var S in m)if(m.hasOwnProperty(S)){var l=m[S].map(y=>y.value[1]),P=ve(l);r.push({name:S+n,value:[S,P]})}return r}function ye(t,a){return t.reduce(function(n,r){var m;let S=new Date(r.value[0]);return a=="week"?m=S.getFullYear()+"-W"+ge(S):a==="month"?m=S.getFullYear()+"-"+(S.getMonth()+1):a==="year"&&(m=S.getFullYear().toString()),n[m]||(n[m]=[]),n[m].push(r),n},{})}function ve(t){return t.reduce(function(a,n){return a+n},0)}function ge(t){var a=new Date(t.getFullYear(),0,4),n=(t-a)/(24*60*60*1e3);return Math.ceil((n+a.getDay()+1)/7)}function X(t){let a=U(D(fe.value),t,"new"),n=U(D(pe.value),t,"base"),r;t=="day"?r="time":r="category",E.setOption({xAxis:{name:"date",type:r,axisLabel:t=="day"?{showMaxLabel:"true",showMinLabel:"true",formatter:function(m,S){return N(m)}}:{}},yAxis:{name:`units / ${t}`},series:[{name:"Baseline",type:"bar",data:n,large:!0,selectedMode:"single",select:{itemStyle:{color:"red",borderWidth:"5px"}},emphasis:{focus:"self",blurScope:"coordinateSystem"}},{name:"New",type:"bar",data:a,large:!0,selectedMode:"single",select:{itemStyle:{color:"red",borderWidth:"5px"}},emphasis:{focus:"series",blurScope:"coordinateSystem"}}]})}let ce=Pe,be=T(2),E;L(()=>s.selectedData?s.selectedData.baselineTasks.filter(a=>a.critical):void 0);function A(t){return`<span >${t}</span>`}let O=[],C=[],k,I;function me(t,a){const n=[];for(let r=0;r<t.length;r+=a)n.push(t.slice(r,r+a));return n}function we(){let t=1,a=[],n=[];M.value="Compare",C=[],O=[];const r={};s.selectedData.tasks.forEach(e=>{r[e.id]=e}),s.selectedData.baselineTasks.forEach((e,d)=>{const i=r[e.id];i.old=e,C.push(i);const o=ie(s.selectedData.baselineTasks.length-d);O.push({name:e.name,value:[o,f(e.newStart),f(e.newFinish),e,{baseNew:{start:e.newStart,finish:e.newFinish,duration:e.newDuration},changeNew:{start:i.newStart,finish:i.newFinish,duration:i.newDuration}}],itemStyle:{color:e.critical?"pink":void 0}})}),C=C.map((e,d)=>{function i(u,h){return u===h?h:u+(u-h)*2}const o=i(C.length-d+1,2);return{id:e.id,name:e.name,value:[o,f(e.newStart),f(e.newFinish),e,{baseNew:{start:e.old.newStart,finish:e.old.newFinish,duration:e.old.newDuration},changeNew:{start:e.newStart,finish:e.newFinish,duration:e.newDuration}}],itemStyle:{color:e.critical?"red":void 0}}});let m=JSON.parse(JSON.stringify(O)),S=JSON.parse(JSON.stringify(C));k=m.sort(function(e,d){return e.value[3].plannedFinish-d.value[3].plannedFinish}),k.map((e,d)=>{let i={...e};return i.value[0]=ie(O.length-d+1),i}),I=S.sort(function(e,d){return e.value[3].newFinish-d.value[3].newFinish}),I.map((e,d)=>{let i={...e};return i.value[0]=ie(C.length-d+1),i}),a=me(k,1e4),n=me(I,1e4),k=a[0],I=n[0];let l=ce.init(document.getElementById("myEcharts"),"purple-passion");l.on("click",function(e){const d=O.find(i=>i.name===e.data.value[3].name);e.data.value[3].plannedStart=d.value[1],e.data.value[3].plannedFinish=d.value[2],Y.value=e.data.value[3],console.log(Y.value),H.value=!0});var P;let y=(e,d)=>{let i=d.coord([d.value(1),d.value(0)]),o=d.coord([d.value(2),d.value(0)]),u=d.size([0,1])[1];return{type:"rect",shape:Le({x:i[0],y:i[1]-u/2,width:Math.max(o[0]-i[0],1),height:u},e.coordSys),style:d.style(),focus:"self",blurScope:"coordinateSystem",emphasis:{}}},g;C.length<30?g=!0:g=!1,P={toolbox:{show:!0,feature:{dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},dataZoom:[{type:"slider",filterMode:"weakFilter",xAxisIndex:[0],labelFormatter:function(e){return N(e)},moveHandleSize:15,height:15,moveHandleStyle:{}},{type:"slider",filterMode:"weakFilter",yAxisIndex:[0]},{type:"inside",filterMode:"weakFilter",xAxisIndex:[0]},{type:"inside",filterMode:"weakFilter",yAxisIndex:[0]}],legend:{data:["Baseline","New"]},xAxis:{name:"date",type:"time",splitNumber:5,boundaryGap:[0,0],axisTick:{show:!0,alignWithLabel:!0},minInterval:24*3600,max:function(e){return e.max+(e.max-e.min)*.01},min:function(e){return e.min-(e.max-e.min)*.01},axisLabel:{showMaxLabel:"true",showMinLabel:"true",formatter:function(e,d){return N(e)}}},yAxis:{name:"tasks"},selectedMode:"single",series:[{name:"Baseline",type:"custom",data:k,large:!0,renderItem:y,encode:{x:[1,2],y:0},label:{normal:{show:g,color:"black",position:"inside",formatter:function(e){return e.data.name},fontSize:12}}},{name:"New",type:"custom",data:I,large:!0,renderItem:y,encode:{x:[1,2],y:0},label:{normal:{show:g,color:"black",position:"inside",formatter:function(e){return e.data.name},fontSize:12}}}],tooltip:{axisPointer:{},formatter:e=>{let d="Resources: <br/>";if(e.value[3].resources)for(const o in e.value[3].resources){let u=e.value[3].resources,h=s.selectedData.newResources.find(V=>V.id==o);h||(h=""),d+=` &nbsp&nbspResource &nbsp  ${h==null?void 0:h.name} &nbsp id: ${o}  <br/>&nbsp&nbsp&nbsp&nbspunits/hour:${ee(u[o].plannedUnitsPerHour)}=> ${ee(u[o].newUnitsPerHour)}<br/>`}function i(o){let u;switch(o){case"New":e.value[3].critical?u="red":u="#b0e054";break;case"Old":e.value[3].critical?u="pink":u="#5474c4"}return`<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:${u};"></span>`}return`${e.name}<br/>
        <div style='margin-top:20px'>
         ${i("New")} New: ${A(f(e.value[4].changeNew.start).replace("T"," ").replace("Z","").slice(0,16))} -> ${A(f(e.value[4].changeNew.finish).replace("T"," ").replace("Z","").slice(0,16))}
         (${e.value[4].changeNew.duration})
        <br/>
         ${i("Old")} Old: ${A(f(e.value[4].baseNew.start).replace("T"," ").replace("Z","").slice(0,16))} -> ${A(f(e.value[4].baseNew.finish).replace("T"," ").replace("Z","").slice(0,16))}
       (${e.value[4].baseNew.duration})
         <br/>
         ${d}
        </div>`}}};let _e=setInterval(()=>{l.setOption(P),k=k.concat(a[t]||[]),I=I.concat(n[t]||[]),t==a.length?clearInterval(_e):t=t+1,P={toolbox:{show:!0,feature:{dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},dataZoom:[{type:"slider",filterMode:"weakFilter",xAxisIndex:[0],labelFormatter:function(e){return N(e)},moveHandleSize:15,height:15,moveHandleStyle:{}},{type:"slider",filterMode:"weakFilter",yAxisIndex:[0]},{type:"inside",filterMode:"weakFilter",xAxisIndex:[0]},{type:"inside",filterMode:"weakFilter",yAxisIndex:[0]}],legend:{data:["Baseline","New"]},xAxis:{name:"date",type:"time",splitNumber:5,boundaryGap:[0,0],axisTick:{show:!0,alignWithLabel:!0},minInterval:24*3600,max:function(e){return e.max+(e.max-e.min)*.01},min:function(e){return e.min-(e.max-e.min)*.01},axisLabel:{showMaxLabel:"true",showMinLabel:"true",formatter:function(e,d){return N(e)}}},yAxis:{name:"tasks"},selectedMode:"single",series:[{name:"Baseline",type:"custom",data:k,large:!0,renderItem:y,encode:{x:[1,2],y:0},label:{normal:{show:g,color:"black",position:"inside",formatter:function(e){return e.data.name},fontSize:12}}},{name:"New",type:"custom",data:I,large:!0,renderItem:y,encode:{x:[1,2],y:0},label:{normal:{show:g,color:"black",position:"inside",formatter:function(e){return e.data.name},fontSize:12}}}],tooltip:{axisPointer:{},formatter:e=>{let d="Resources: <br/>";if(e.value[3].resources)for(const o in e.value[3].resources){let u=e.value[3].resources,h=s.selectedData.newResources.find(V=>V.id==o);h||(h=""),d+=` &nbsp&nbspResource &nbsp  ${h==null?void 0:h.name} &nbsp id: ${o}  <br/>&nbsp&nbsp&nbsp&nbspunits/hour:${ee(u[o].plannedUnitsPerHour)}=> ${ee(u[o].newUnitsPerHour)}<br/>`}function i(o){let u;switch(o){case"New":e.value[3].critical?u="red":u="#b0e054";break;case"Old":e.value[3].critical?u="pink":u="#5474c4"}return`<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:${u};"></span>`}return`${e.name}<br/>
        <div style='margin-top:20px'>
         ${i("New")} New: ${A(f(e.value[4].changeNew.start).replace("T"," ").replace("Z","").slice(0,16))} -> ${A(f(e.value[4].changeNew.finish).replace("T"," ").replace("Z","").slice(0,16))}
         (${e.value[4].changeNew.duration})
        <br/>
         ${i("Old")} Old: ${A(f(e.value[4].baseNew.start).replace("T"," ").replace("Z","").slice(0,16))} -> ${A(f(e.value[4].baseNew.finish).replace("T"," ").replace("Z","").slice(0,16))}
       (${e.value[4].baseNew.duration})
         <br/>
         ${d}
        </div>`}}}},1e3);l.off("datazoom"),l.on("datazoom",_(function(e){G(e,k,I,g)},700));function ie(e){return e===2?2:e+(e-2)*2}te(M,(e,d)=>{let i,o;if(z.value=="Date"?(i=k,o=I):(i=O,o=C),e==="Compare"){let u={series:[{name:"Baseline",type:"custom",data:i,large:!0,renderItem:y,encode:{x:[1,2],y:0},label:{normal:{show:g,color:"black",position:"inside",formatter:function(h){return h.data.name},fontSize:12}},large:!0},{large:!0,name:"New",type:"custom",data:o,large:!0,renderItem:y,encode:{x:[1,2],y:0},label:{normal:{show:g,color:"black",position:"inside",formatter:function(h){return h.data.name},fontSize:12}}}]};l.setOption(u),l.off("datazoom"),l.on("datazoom",_(function(h){G(h,k,I,g)},700))}else{let u=JSON.parse(JSON.stringify(i)).map((b,oe)=>{let K={...b};return K.value[0]=O.length*2-oe,K}),h=JSON.parse(JSON.stringify(o)).map((b,oe)=>{let K={...b};return K.value[0]=O.length-oe,K}),V={series:[{large:!0,name:"Baseline",type:"custom",data:u,large:!0,renderItem:y,encode:{x:[1,2],y:0,label:11},label:{normal:{show:g,color:"black",position:"inside",formatter:function(b){return b.data.name},fontSize:12}}},{large:!0,name:"New",type:"custom",data:h,large:!0,renderItem:y,encode:{x:[1,2],y:0},label:{normal:{show:g,color:"black",position:"inside",formatter:function(b){return b.data.name},fontSize:12}}}]};l.setOption(V),l.off("datazoom"),l.on("datazoom",_(function(b){G(b,u,h,g)},700))}}),te(z,(e,d)=>{if(e==="Date"){let i={series:[{name:"Baseline",type:"custom",data:k,large:!0,renderItem:y,encode:{x:[1,2],y:0,label:11},label:{normal:{show:g,color:"black",position:"inside",formatter:function(o){return o.data.name},fontSize:12}}},{name:"New",type:"custom",data:I,large:!0,renderItem:y,encode:{x:[1,2],y:0},label:{normal:{show:g,color:"black",position:"inside",formatter:function(o){return o.data.name},fontSize:12}}}]};l.setOption(i),l.off("datazoom"),l.on("datazoom",_(function(o){G(o,k,I,g)},700)),console.log("成功")}else{let i={series:[{name:"Baseline",type:"custom",data:O,large:!0,renderItem:y,encode:{x:[1,2],y:0,label:11},label:{normal:{show:g,color:"black",position:"inside",formatter:function(o){return o.data.name},fontSize:12}}},{name:"New",type:"custom",data:C,large:!0,renderItem:y,encode:{x:[1,2],y:0},label:{normal:{show:g,color:"black",position:"inside",formatter:function(o){return o.data.name},fontSize:12}}}]};l.setOption(i),l.off("datazoom"),l.on("datazoom",_(function(o){G(o,O,C,g)},700))}});function G(e,d,i,o){let u=l.getOption();var h=u.series.find(b=>b.name==="Baseline").data,V=u.series.find(b=>b.name==="New").data;o||(e.batch[0].end-e.batch[0].start<30/i.length*100?l.setOption({series:[{name:"Baseline",type:"custom",data:h,large:!0,renderItem:y,encode:{x:[1,2],y:0},label:{normal:{show:!0,color:"black",position:"inside",formatter:function(b){return b.data.name},fontSize:12}}},{name:"New",type:"custom",data:V,large:!0,renderItem:y,encode:{x:[1,2],y:0},label:{normal:{show:!0,color:"black",position:"inside",formatter:function(b){return b.data.name},fontSize:12}}}]}):l.setOption({series:[{name:"Baseline",type:"custom",data:h,large:!0,renderItem:y,encode:{x:[1,2],y:0},label:{normal:{show:!1,color:"black",position:"inside",formatter:function(b){return b.data.name},fontSize:12}}},{name:"New",type:"custom",data:V,large:!0,renderItem:y,encode:{x:[1,2],y:0},label:{normal:{show:!1,color:"black",position:"inside",formatter:function(b){return b.data.name},fontSize:12}}}]}))}l.on("mousemove",function(e){l.dispatchAction({type:"highlight",dataIndex:e.dataIndex})}),E=ce.init(document.getElementById("myEcharts01"),"purple-passion"),E.on("mousemove",function(e){E.dispatchAction({type:"highlight",name:e.name})}),E.on("click",function(e){E.dispatchAction({type:"select",name:e.name})})}let W=T("");function ee(a){if(!a)return"0.00";var a=Math.round(parseFloat(a)*100)/100,n=a.toString().split(".");if(n.length==1)return a=a.toString()+".00",a;if(n.length>1)return n[1].length<2&&(a=a.toString()+"0"),a}function Se(t,a){return t.reduce(function(n,r){let m=r[a];return n[m]||(n[m]=[]),n[m].push(r),n},{})}let xe=L(()=>{let t=s.selectedData.baselineResources.map(n=>({id:n.id,name:n.name,type:n.type})),a=Se(t,"type");if(W.value){const n=new RegExp(W.value,"i");let r={};for(let m in a)r[m]=a[m].filter(S=>n.test(S.name));return r}else return a}),pe=L(()=>{var n;const t=s.selectedData.baselineResources;let a="base";return B.value?[t.filter(m=>m.id&&m.id===B.value)[0].distribution,a]:t.length==0?[]:(B.value=t[0].id,[(n=t[0])==null?void 0:n.distribution,a])}),fe=L(()=>{var n;const t=s.selectedData.newResources;let a="new";return B.value?[t.filter(m=>m.id&&m.id===B.value)[0].distribution,a]:t.length==0?[]:[(n=t[0])==null?void 0:n.distribution,a]}),De=L(()=>({toolbox:{feature:{dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},dataZoom:[{type:"slider",filterMode:"none"},{type:"slider",filterMode:"none"},{type:"inside",filterMode:"none"},{type:"inside",filterMode:"none"}],tooltip:{trigger:"axis",axisPointer:{type:"cross"}},animation:!1,legend:{data:["Baseline","New"]},xAxis:{name:"date",type:"time",axisLabel:{formatter:"{yyyy}-{MM}-{dd}"}},yAxis:{name:"units / day"},series:[{name:"Baseline",type:"bar",data:D(pe.value),large:!0,selectedMode:"single",select:{itemStyle:{color:"red",borderWidth:"5px"}},emphasis:{focus:"self",blurScope:"coordinateSystem"}},{name:"New",type:"bar",data:D(fe.value),large:!0,selectedMode:"single",select:{itemStyle:{color:"red",borderWidth:"5px"}},emphasis:{focus:"series",blurScope:"coordinateSystem"}}]}));function re(){E.setOption(De.value)}te(be,()=>{re()});async function $e(){w.push({name:"OptimizedReport"}),s.active=3}let B=T("");function ke(){w.push({name:"BaselineSummary"}),s.active=1}function Ie(t){B.value=t,F.value="day"}return te(B,()=>{re()}),(t,a)=>{const n=Ue,r=Ve,m=Ae,S=Te("v-btn");return J(),q(de,null,[p("div",Je,[p("div",je,[p("h2",null,[se(x(t.$t("optimizedSummary.title[0]"))+" ",1),p("span",Ye,x(c(s).SummaryData.group.replace("_"," ").replace("base","Base")),1),p("div",Ge,[p("span",null,x(c(s).setting.Steps)+" "+x(t.$t("optimizedSummary.title[1]")),1)]),p("div",Ke,[p("span",null,x(`${c(s).setting.Ratio[0]*100}% - ${c(s).setting.Ratio[1]*100}% ${t.$t("optimizedSummary.title[2]")}`),1)])]),p("div",qe,[$(ae,{title:t.$t("optimizedSummary.header[0]"),height:180,precent:v(c(s).SummaryData.changedDuration-c(s).SummaryData.baseDuration,c(s).SummaryData.baseDuration),isPositive:!0,body:[c(s).SummaryData.changedDuration+" days",c(s).SummaryData.baseDuration+" days",c(s).SummaryData.planDurationDays+" days"]},null,8,["title","precent","body"]),$(ae,{title:t.$t("baselineSummary.Tsidebar[1]"),height:180,precent:v(c(s).SummaryData.maxResourceUnit-c(s).SummaryData.BasemaxResourceUnit,c(s).SummaryData.BasemaxResourceUnit),isPositive:!0,body:[c(s).SummaryData.maxResourceUnit,c(s).SummaryData.BasemaxResourceUnit]},null,8,["title","precent","body"]),$(ae,{title:t.$t("optimizedSummary.header[2]"),height:180,body:[c(s).SummaryData.changgedTasks,c(s).SummaryData.TotalTasks]},null,8,["title","body"]),$(ae,{title:t.$t("optimizedSummary.header[3]"),height:180,body:[c(s).SummaryData.changedCriticalPath,c(s).SummaryData.changedCriticalPath,c(s).SummaryData.baseCriticalPath]},null,8,["title","body"])]),p("div",Qe,[p("div",Xe,[p("div",null,x(t.$t("optimizedSummary.chartName[0]")),1),p("div",null,[$(r,{modelValue:c(z),"onUpdate:modelValue":a[0]||(a[0]=l=>le(z)?z.value=l:z=l),class:"m-2",placeholder:"Select",size:"large"},{default:j(()=>[$(n,{label:"Sort by Date",value:"Date"}),$(n,{label:"Original Order",value:"Original"})]),_:1},8,["modelValue"]),$(r,{modelValue:c(M),"onUpdate:modelValue":a[1]||(a[1]=l=>le(M)?M.value=l:M=l),class:"m-2",placeholder:"Select",size:"large"},{default:j(()=>[$(n,{label:"Compare Mode",value:"Compare"}),$(n,{label:"Separate Mode",value:"Separate"})]),_:1},8,["modelValue"])])]),p("span",null,x(t.$t("optimizedSummary.chartName[1]")),1),et,p("div",tt,null,512)]),p("div",at,[p("div",nt,[p("div",null,x(t.$t("optimizedSummary.chartName[2]")),1)]),p("span",null,x(t.$t("optimizedSummary.chartName[3]")),1),$(m,{modelValue:c(W),"onUpdate:modelValue":a[2]||(a[2]=l=>le(W)?W.value=l:W=l),placeholder:"Search Resources"},null,8,["modelValue"]),(J(!0),q(de,null,he(c(xe),(l,P)=>(J(),q("div",null,[p("div",rt,x(P)+" Resources",1),p("div",it,[(J(!0),q(de,null,he(l,(y,g)=>(J(),q("div",{key:g,class:"type"},[$(S,{variant:"text",value:g,class:Q({activeType:c(B)==y.id}),onClick:()=>{Ie(y.id)}},{default:j(()=>[se(x(y.name)+" "+x(y.type),1)]),_:2},1032,["value","class","onClick"])]))),128))])]))),256)),p("div",ot,[p("span",{class:Q({activeDate:c(F)==="day"}),onClick:a[3]||(a[3]=()=>{X("day"),Z("day")})},x(t.$t("day")),3),p("span",{class:Q({activeDate:c(F)==="week"}),onClick:a[4]||(a[4]=()=>{X("week"),Z("week")})},x(t.$t("week")),3),p("span",{class:Q({activeDate:c(F)==="month"}),onClick:a[5]||(a[5]=()=>{X("month"),Z("month")})},x(t.$t("month")),3),p("span",{class:Q({activeDate:c(F)==="year"}),onClick:a[6]||(a[6]=()=>{X("year"),Z("year")})},x(t.$t("year")),3)]),p("div",st,null,512)]),p("div",lt,[$(S,{onClick:ke,class:"btnback"},{default:j(()=>[se("BACK")]),_:1}),$(Ee,{style:"color:white;margin-left:1050px",disabled:!0,onClicked:$e,title:t.$t("optimizedSummary.btn[1]")},null,8,["title"])])])]),$(We,{onCloseDialog:R,data:c(Y),dialogVisible:c(H)},null,8,["data","dialogVisible"])],64)}}},yt=Ce(dt,[["__scopeId","data-v-08e69a00"]]);export{yt as default};
