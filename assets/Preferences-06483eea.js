import{d as R,K,f as C,a as x,c as N,h as m,w as y,b as l,t as V,u as h,F as H,e as v,L as _e,M as X,N as he,g as F,q as xe,i as P,H as O,O as ye,A as be,P as we,r as A,o as Ce,Q as Z,s as se,j as T,R as J,S as U,T as $e,U as Se,W as ze,X as G}from"./index-11037ce6.js";import{m as ee,u as j,a as W,o as ae,w as Ve,i as Pe,g as Te}from"./useColors-e02311f5.js";import{u as Ie}from"./useForm-92a866d3.js";import{u as Ne}from"./useToast-39735d89.js";const Re=l("span",{class:"text-4xl"}," 😍 ",-1),Me={class:"flex flex-col justify-center"},Ae={class:"text-[28px] md:text-[32px] leading-10 font-bold"},Ee={class:"flex space-x-1 text-[13px] leading-4"},Fe=l("p",null,"Member since",-1),ke=R({__name:"PreferencesHeader",setup(e){const t=K();return(o,s)=>{const n=C("VaAvatar");return x(),N(H,null,[m(n,{size:"large",color:"warning"},{default:y(()=>[Re]),_:1}),l("div",Me,[l("h2",Ae,V(h(t).userName),1),l("div",Ee,[Fe,l("p",null,V(h(t).memberSince),1)])])],64)}}}),re={preset:{type:String,default:void 0}},Oe="VaLocalConfig",Be=v(()=>[]);function Le(){return _e(Oe,Be)}const Ye=(e,t)=>t.test(e),le=(e,t)=>{if(typeof t!="string"&&t.global)return[...e.matchAll(t)].map(s=>s.slice(1));const o=e.match(t)||[];return o?o.length>1?o.slice(1):o:[]},ie=/{[^}]*}/g,ce=e=>e.replace(ie,"(.*)"),Ue=e=>(e.match(ie)||[]).map(t=>t.replace(/{|}/g,"")),He=(e,t)=>le(e,ce(t)),Xe=(e,t)=>{const o=Ue(t),s=He(e,t);return o.reduce((n,a,i)=>({...n,[a]:s[i]}),{})},je=(e,t)=>(e.match(t)||[])[0]===e,Ge=(e,t)=>{const o=ce(t);return je(e,new RegExp(o))},ue=e=>typeof e.name=="string",de=e=>e.name instanceof RegExp,De=(e,t)=>ue(t)?Ge(e,t.name):de(t)?Ye(e,t.name):!1,qe=(e,t)=>{const o=Xe(e,t.name);return t.resolve&&t.resolve(o)},Ke=(e,t)=>{if(t.name.global)throw new Error(`Bad icon config with name ${t.name}. Please, don't use global regex as name.`);const o=le(e,t.name);return t.resolveFromRegex&&t.resolveFromRegex(...o)},We=(e,t)=>{if(ue(t))return qe(e,t);if(de(t))return Ke(e,t);throw Error("Unknown icon config")},Qe=(e,t,o=[])=>{const s=t.find(n=>o.includes(n.name.toString())?!1:De(e,n));if(!s)throw new Error(`Can not find icon config from ${e}. Please provide default config.`);return s},pe=(e,t,o=[])=>{if(!e)return;const s=Qe(e,t,o),n=ee(We(e,s),s);return o=[...o,s.name.toString()],ee(pe(n.to,t,o),n)},Ze=e=>{const t=["name","to","resolve","resolveFromRegex"],o=e;return t.forEach(s=>{delete o[s]}),o},Je=(e,t)=>{const o=pe(e,t);return o===void 0?{}:Ze(o)},et=()=>{const{globalConfig:e}=j();return{getIcon:t=>Je(t,e.value.icons)}},tt=()=>typeof window>"u",ot={},$=()=>tt()?typeof globalThis>"u"?ot:globalThis:window,nt={defaultSize:48,sizes:{small:32,medium:48,large:64}},st={defaultSize:1,sizes:{small:.75,medium:1,large:1.25}},at={size:{type:[String,Number],default:"",validator:e=>typeof e=="string"||typeof e=="number"},sizesConfig:{type:Object,default:()=>nt},fontSizesConfig:{type:Object,default:()=>st}},rt=/(?<fontSize>\d+)(?<extension>px|rem)/i,te=e=>e/16-.5,lt=(e,t=(o=>(o=X())==null?void 0:o.type.name)())=>{const{getGlobalConfig:o}=j(),s=v(()=>{var r,c;return t?(c=(r=o().components)==null?void 0:r[t])==null?void 0:c.sizesConfig:void 0}),n=v(()=>{var r,c,u;const{defaultSize:d,sizes:g}=e.sizesConfig,p=(r=s.value)==null?void 0:r.defaultSize;if(!e.size)return`${d||p}px`;if(typeof e.size=="string"){const f=(u=(c=s.value)==null?void 0:c.sizes)==null?void 0:u[e.size],w=g[e.size];return w?`${w}px`:f?`${f}px`:e.size}return`${e.size}px`}),a=v(()=>{const{defaultSize:r,sizes:c}=e.fontSizesConfig;if(!e.size)return r;if(typeof e.size=="string"){if(e.size in c)return c[e.size];const u=e.size.match(rt);if(!u||!u.groups)throw new Error("Size prop should be either valid string or number");const{extension:d,fontSize:g}=u.groups;return d==="rem"?+g:te(+g)}return te(e.size)}),i=v(()=>`${a.value}rem`);return{sizeComputed:n,fontSizeComputed:i,fontSizeInRem:a}},it=R({name:"VaIcon",__name:"VaIcon",props:{...at,...re,name:{type:String,default:""},tag:{type:String},component:{type:Object},color:{type:String},rotation:{type:[String,Number]},spin:{type:[String,Boolean]},flip:{type:String,default:"off",validator:e=>["off","horizontal","vertical","both"].includes(e)}},setup(e){const t=e,{getColor:o}=W(),{sizeComputed:s}=lt(t),{getIcon:n}=et(),a=v(()=>n(t.name)),i=v(()=>t.component||t.tag||a.value.component||a.value.tag||"i"),r=he(),c=v(()=>({...a.value.attrs,...ae(r,["class"])})),u=b=>{if(!(b===void 0||b===!1))return b==="counter-clockwise"?"va-icon--spin-reverse":"va-icon--spin"},d=v(()=>[a.value.class,u(t.spin??a.value.spin)]),g=v(()=>{const b=t.rotation?`rotate(${t.rotation}deg)`:"",S=t.flip==="vertical"||t.flip==="both"?-1:1,M=t.flip==="horizontal"||t.flip==="both"?-1:1;return`${t.flip==="off"?"":`scale(${S}, ${M})`} ${b}`.trim()}),p=v(()=>({transform:g.value,cursor:r.onClick?"pointer":null,color:t.color?o(t.color,void 0,!0):a.value.color,fontSize:s.value,height:s.value,lineHeight:s.value})),f=v(()=>r.tabindex??-1),w=v(()=>r.role!=="button"||f.value<0);return(b,S)=>(x(),F(be(i.value),ye({class:["va-icon",d.value],style:p.value,"aria-hidden":w.value,notranslate:""},c.value),{default:y(()=>[xe(b.$slots,"default",{},()=>[a.value.content?(x(),N(H,{key:0},[P(V(a.value.content),1)],64)):O("",!0)])]),_:3},16,["class","style","aria-hidden"]))}}),fe=(e,t)=>{const o=e.__vccOpts||e;for(const[s,n]of t)o[s]=n;return o},ct=`:root,
:host {
  --va-icon-vertical-align: middle;
  --va-icon-user-select: none;
}
.va-icon {
  vertical-align: var(--va-icon-vertical-align);
  -webkit-user-select: var(--va-icon-user-select);
     -moz-user-select: var(--va-icon-user-select);
          user-select: var(--va-icon-user-select);
}
.va-icon[role^=button][tabindex]:not([tabindex^="-"]) {
  cursor: pointer;
}
.va-icon[role^=button][tabindex]:not([tabindex^="-"]):focus-visible {
  outline: 2px solid var(--va-focus) !important;
  border-radius: 2px;
}
.va-icon.va-icon {
  font-style: normal;
}
.va-icon--spin {
  animation: va-icon--spin-animation 1500ms linear infinite;
}
.va-icon--spin-reverse {
  animation: va-icon--spin-animation 1500ms linear infinite;
  animation-direction: reverse;
}
@keyframes va-icon--spin-animation {
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
}
.va-icon svg {
  fill: currentColor;
  height: 100%;
}`,ut=fe(it,[["styles",[ct]]]),dt=()=>{let e;return{start:(...s)=>(e=window.setTimeout(...s),e),clear:()=>e&&window.clearTimeout(e)}},oe=(e,t)=>(t&&Object.keys(t).forEach(o=>{e=e.replace(`{${o}}`,String(t[o]))}),e),pt=()=>{const{globalConfig:e}=j(),t=v(()=>e.value.i18n);return{tp:(o,s)=>o?(o.startsWith("$t:")&&(o=t.value[o.slice(3)]||o),oe(o,s)||o):"",t(o,s){const n=t.value[o];return n?oe(n,s)||o:(Ve(`${o} not found in VuesticUI i18n config`),o)}}},ft=(e,t=!1)=>{const{props:o}=X(),{getColor:s,getTextColor:n}=W();return{textColorComputed:v(()=>{if(o.textColor)return s(o.textColor);const i=e?h(e):o.color;if(!i)return"currentColor";const r=s(i);return Pe(r)?"currentColor":h(t)?r:s(n(r))})}},vt=["role","aria-live"],mt={class:"va-toast__group"},gt=["textContent"],_t={class:"va-toast__content"},ht=["innerHTML"],xt=["textContent"],yt={key:1,class:"va-toast__content"},bt=R({name:"VaToast",__name:"VaToast",props:{...re,title:{type:String,default:""},offsetY:{type:Number,default:16},offsetX:{type:Number,default:16},message:{type:[String,Function],default:""},dangerouslyUseHtmlString:{type:Boolean,default:!1},icon:{type:String,default:"close"},customClass:{type:String,default:""},duration:{type:Number,default:5e3},color:{type:String,default:""},closeable:{type:Boolean,default:!0},onClose:{type:Function},onClick:{type:Function},multiLine:{type:Boolean,default:!1},position:{type:String,default:"top-right",validator:e=>["top-right","top-left","bottom-right","bottom-left"].includes(e)},render:{type:Function},ariaCloseLabel:{type:String,default:"$t:close"},role:{type:String,default:void 0},inline:{type:Boolean,default:!1}},emits:["on-click","on-close"],setup(e,{emit:t}){const o=R({name:"VaToastRenderer",props:{render:{type:Function,required:!0}},setup:_=>()=>_.render()}),{tp:s}=pt(),n=e,a=t,i=we(),{getColor:r}=W(),{textColorComputed:c}=ft(v(()=>r(n.color))),u=A(!1),d=v(()=>n.position.includes("right")?"right":"left"),g=v(()=>n.position.includes("top")?"top":"bottom"),p=v(()=>[n.customClass,n.multiLine?"va-toast--multiline":"",n.inline?"va-toast--inline":""]),f=v(()=>({[g.value]:`${n.offsetY}px`,[d.value]:`${n.offsetX}px`,backgroundColor:r(n.color),color:c.value})),w=v(()=>n.role==="status"?"polite":"assertive"),b=v(()=>typeof n.message=="function"?n.message():n.message),S=()=>{var _,L;(_=i.value)==null||_.removeEventListener("transitionend",S),(L=i.value)==null||L.remove()},M=()=>{typeof n.onClick=="function"?n.onClick():a("on-click")},I=()=>{var _;u.value=!1,(_=i.value)==null||_.addEventListener("transitionend",S),typeof n.onClose=="function"?n.onClose():a("on-close")},k=dt(),z=k.clear,Q=()=>{n.duration>0&&k.start(()=>u.value&&I(),n.duration)};return Ce(()=>{u.value=!0,Q()}),(_,L)=>(x(),F(Se,{name:"va-toast-fade"},{default:y(()=>[Z(l("div",{ref_key:"rootElement",ref:i,role:_.$props.role??_.$props.closeable?"alertdialog":"alert","aria-live":w.value,"aria-atomic":"true",class:se(["va-toast",p.value]),style:T(f.value),onMouseenter:L[0]||(L[0]=(...ge)=>h(z)&&h(z)(...ge)),onMouseleave:Q,onClick:M},[l("div",mt,[_.$props.title?(x(),N("h2",{key:0,class:"va-toast__title",textContent:V(_.$props.title)},null,8,gt)):O("",!0),Z(l("div",_t,[_.$props.dangerouslyUseHtmlString?(x(),N("div",{key:0,innerHTML:b.value},null,8,ht)):(x(),N("p",{key:1,textContent:V(b.value)},null,8,xt))],512),[[J,_.$props.message]]),_.$props.render?(x(),N("div",yt,[m(h(o),{render:_.$props.render},null,8,["render"])])):O("",!0),_.$props.closeable?(x(),F(ut,{key:2,class:"va-toast__close-icon",role:"button","aria-label":h(s)(_.$props.ariaCloseLabel),tabindex:"0",size:"1rem",name:_.$props.icon,onClick:U(I,["stop"]),onKeydown:$e(U(I,["stop"]),["enter"])},null,8,["aria-label","name","onKeydown"])):O("",!0)])],46,vt),[[J,u.value]])]),_:1}))}}),wt=`:root,
:host {
  --va-toast-display: flex;
  --va-toast-width: 330px;
  --va-toast-padding: 14px 26px 14px 13px;
  --va-toast-border-radius: 8px;
  --va-toast-border-color: transparent;
  --va-toast-border: 1px solid var(--va-toast-border-color);
  --va-toast-background-color: var(--va-background-secondary);
  --va-toast-box-shadow: 0 2px 12px 0 var(--va-shadow);
  --va-toast-transition: opacity 0.3s, transform 0.3s, left 0.3s, right 0.3s, top 0.4s, bottom 0.3s;
  --va-toast-z-index: calc(var(--va-z-index-teleport-overlay) + 100);
  /* Group */
  --va-toast-group-margin-left: 13px;
  --va-toast-group-margin-right: 8px;
  /* Title */
  --va-toast-title-font-weight: bold;
  --va-toast-title-font-size: 1rem;
  --va-toast-title-color: #303133;
  --va-toast-title-margin: 0 0 6px;
  /* Content */
  --va-toast-content-font-size: 1rem;
  --va-toast-content-line-height: 1.3125;
  --va-toast-content-padding-right: 20px;
  /* Icon */
  --va-toast-icon-height: 24px;
  --va-toast-icon-width: 24px;
  --va-toast-icon-font-size: 24px;
  /* Icon Close */
  --va-toast-close-icon-top: 18px;
  --va-toast-close-icon-right: 15px;
  --va-toast-close-icon-font-size: 1rem;
}
.va-toast {
  position: fixed;
  box-sizing: border-box;
  width: var(--va-toast-width);
  padding: var(--va-toast-padding);
  display: flex;
  align-items: center;
  border-radius: var(--va-toast-border-radius);
  border: var(--va-toast-border);
  background-color: var(--va-toast-background-color);
  box-shadow: var(--va-toast-box-shadow);
  transition: var(--va-toast-transition);
  overflow: hidden;
  z-index: var(--va-toast-z-index);
  font-family: var(--va-font-family);
}
.va-toast--inline {
  position: static;
}
.va-toast--multiline {
  min-height: 70px;
}
.va-toast--right {
  right: 16px;
}
.va-toast--left {
  left: 16px;
}
.va-toast__group {
  margin-left: var(--va-toast-group-margin-left);
  margin-right: var(--va-toast-group-margin-right);
}
.va-toast__title {
  font-weight: var(--va-toast-title-font-weight);
  font-size: var(--va-toast-title-font-size);
  margin: var(--va-toast-title-margin);
  font-size: 0.625rem;
  letter-spacing: 0.6px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
}
.va-toast__content {
  font-size: var(--va-toast-content-font-size);
  line-height: var(--va-toast-content-line-height);
  padding-right: var(--va-toast-content-padding-right);
}
.va-toast__content p,
.va-toast__content div {
  margin: 0;
}
.va-toast__icon {
  height: var(--va-toast-icon-height);
  width: var(--va-toast-icon-width);
  font-size: var(--va-toast-icon-font-size);
}
.va-toast__close-icon {
  position: absolute;
  top: 50%;
  right: var(--va-toast-close-icon-right);
  cursor: pointer;
  transform: translateY(-50%);
  font-size: var(--va-toast-close-icon-font-siz);
  opacity: 0.7;
}
.va-toast__close-icon:hover {
  opacity: 1;
}
.va-toast-fade-enter.right {
  right: 0;
  transform: translateX(100%);
}
.va-toast-fade-enter.left {
  left: 0;
  transform: translateX(-100%);
}
.va-toast-fade-leave-active {
  opacity: 0;
}`,Ct=fe(bt,[["styles",[wt]]]),$t=(e,t)=>{const o=Le(),{globalConfig:s}=j(),n=v(()=>t.preset),a=i=>{var r,c,u;return(u=(c=(r=s.value.components)==null?void 0:r.presets)==null?void 0:c[e.name])==null?void 0:u[i]};return v(()=>{var i,r;const c={...(i=s.value.components)==null?void 0:i.all,...(r=s.value.components)==null?void 0:r[e.name]},u=o.value.reduce((p,f)=>f[e.name]?{...p,...f[e.name]}:p,{}),d=n.value||u.preset||c.preset,g=d&&a(d);return{...c,...u,...g}})},St=/([a-z0-9])([A-Z])/g,zt=e=>e.replace(St,"$1-$2").toLowerCase(),Vt=(e,t)=>t in e?e[t]:e[zt(t)],Pt=(e,t)=>{const o=e.props;return new Proxy(o,{get:(s,n)=>{var a;if(typeof n!="string")return s[n];const i=e.vnode.props||{},r=s[n],c=(a=t.value)==null?void 0:a[n];return Vt(i,n)!==void 0?r:c!==void 0?c:r}})},Tt=(e,t)=>{const o=e.attrs;return new Proxy(o,{get:(s,n)=>{var a;if(typeof n!="string")return s[n];if(n==="class")return se([t.value.class,o.class]);if(n==="style")return T([t.value.style,o.style]);const i=(a=t.value)==null?void 0:a[n];return i!==void 0?i:s[n]},ownKeys(s){return[...new Set([...Object.keys(o),...Object.keys(t.value)])]},getOwnPropertyDescriptor(s,n){return Reflect.getOwnPropertyDescriptor(t.value,n)??Reflect.getOwnPropertyDescriptor(o,n)}})},D=e=>{const t=(o,s)=>{var n;const a=X(),i=$t(e,o),r=v(()=>ae(i.value,Object.keys(o))),c=Pt(a,i),u=Tt(a,r);a.props=c,a.attrs=u;const d=(n=e.setup)==null?void 0:n.call(e,ze(c),{...s,attrs:u});return typeof d=="object"&&!a.exposed&&s.expose(d),d};return new Proxy(e,{get(o,s){return s==="setup"?t:o[s]}})},q="__c",It=e=>(e[q]=D(e[q]),e),Nt=e=>"setup"in e?D(e):q in e?It(e):(e.setup=()=>({}),D(e)),Rt=Nt(Ct),ve=5;let Y=1;$().vaToastInstances=[];const Mt=(e,t)=>{if(e.el){const o=t.includes("bottom")?-1:1;return(e.el.offsetHeight+ve)*o}return 0},At=(e,t,o)=>{const s=o.includes("bottom")?-1:1;return parseInt(e,10)-(t+ve)*s},B=e=>{var t;return((t=e.component)==null?void 0:t.props)||{}},Et=(e,t)=>{var o;if(!e)return;if(!$().vaToastInstances.length){Y=1;return}const s=$().vaToastInstances.findIndex(u=>u===e);if(s<0)return;const n=B(e),{offsetX:a,offsetY:i,position:r}=n,c=(o=e.el)==null?void 0:o.offsetHeight;t(),$().vaToastInstances=$().vaToastInstances.reduce((u,d,g)=>{if(d===e)return u;if(d.component){const{offsetX:p,offsetY:f,position:w}=B(d);if(g>s&&a===p&&i===f&&r===w&&d.el&&c){const[S,M]=d.el.style.transform.match(/[\d-]+(?=px)/g),I=At(M,c,w);d.el.style.transform=`translate(0, ${I}px)`}}return[...u,d]},[]),$().vaToastInstances.length||(Y=1)},Ft=(e,t)=>{e&&(G(null,e),e.remove()),e=null},kt=(e,{props:t,children:o,element:s,appContext:n}={})=>{let a=s,i;return i=m(e,{...t,onClose:()=>{Et(i,()=>Ft(a)),t!=null&&t.onClose&&t.onClose()}},o),n&&(i.appContext=n),a?G(i,a):typeof document<"u"&&G(i,a=document.createElement("div")),{vNode:i,el:a}},Ot=e=>{if(!$().vaToastInstances.length){Y=1;return}$().vaToastInstances.forEach(t=>{e&&t.appContext!==e||B(t).onClose()})},ne=e=>{const t=$().vaToastInstances.find(o=>{var s;return((s=o.el)==null?void 0:s.id)===e});t&&B(t).onClose()},Bt=e=>typeof e=="string"?{message:e}:e,Lt=(e,t)=>{const{vNode:o,el:s}=kt(Rt,{appContext:t,props:Bt(e)}),n=B(o);if(s&&o.el&&n){document.body.appendChild(s.childNodes[0]);const{offsetX:a,offsetY:i,position:r}=n;o.el.style.display="flex",o.el.id="notification_"+Y;let c=0;return $().vaToastInstances.filter(u=>{const{offsetX:d,offsetY:g,position:p}=B(u);return d===a&&g===i&&r===p}).forEach(u=>{c+=Mt(u,r)}),o.el.style.transform=`translate(0, ${c}px)`,Y+=1,$().vaToastInstances.push(o),o.el.id}return null},Yt=()=>{const e=X();return v(()=>{var t;return((t=Te())==null?void 0:t._context)||(e==null?void 0:e.appContext)})},me=()=>{const e=Yt(),t=[],o=r=>{const c=Lt(r,e.value);return c&&t.push(c),c};return{init:r=>o(r),notify:o,close:r=>ne(r),closeAll:(r=!1)=>Ot(r?void 0:e.value),closeAllCreatedInThisHook:()=>{t.forEach(r=>ne(r))}}},E={"--va-button-font-size":"14px","--va-button-line-height":"20px"},Ut={class:"flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 min-h-[36px] leading-5"},Ht=l("p",{class:"font-bold w-[200px]"},"Name",-1),Xt={class:"flex-1"},jt={class:"max-w-[748px]"},Gt={class:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 min-h-[36px] leading-5"},Dt=l("p",{class:"font-bold w-[200px]"},"Email",-1),qt={class:"flex-1"},Kt={class:"max-w-[748px]"},Wt={class:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 min-h-[36px] leading-5"},Qt=l("p",{class:"font-bold w-[200px]"},"Password",-1),Zt=l("div",{class:"flex-1"},[l("div",{class:"max-w-[748px]"},"•••••••••••••")],-1),Jt={class:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 min-h-[36px] leading-5"},eo=l("p",{class:"font-bold w-[200px]"},"Two-factor authentication",-1),to={class:"flex-1"},oo={class:"max-w-[748px]"},no={class:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 min-h-[36px] leading-5"},so=l("p",{class:"font-bold w-[200px]"},"Email subscriptions",-1),ao={class:"flex-1"},ro={class:"max-w-[748px]"},lo=l("p",null,"To manage what emails you get, visit the",-1),io={class:"flex space-x-1 w-fit"},co=R({__name:"Settings",emits:["openNameModal","openResetPasswordModal"],setup(e,{emit:t}){const o=K(),{init:s}=me(),n=v(()=>o.is2FAEnabled?"2FA successfully enabled":"2FA successfully disabled"),a=v(()=>o.is2FAEnabled?{color:"danger",button:"Disable 2FA",content:"Two-Factor Authentication (2FA) is now enabled for your account, adding an extra layer of security to your sign-ins."}:{color:"primary",button:"Set up 2FA",content:"Add an extra layer of security to your account. To sign in, you’ll need to provide a code along with your username and password."}),i=()=>{o.toggle2FA(),s({message:n.value,color:"success"})},r=t;return(c,u)=>{const d=C("VaButton"),g=C("VaDivider"),p=C("RouterLink");return x(),N(H,null,[l("div",Ut,[Ht,l("div",Xt,[l("div",jt,V(h(o).userName),1)]),m(d,{style:T(h(E)),class:"w-fit h-fit",preset:"primary",onClick:u[0]||(u[0]=f=>r("openNameModal"))},{default:y(()=>[P(" Edit ")]),_:1},8,["style"])]),m(g),l("div",Gt,[Dt,l("div",qt,[l("div",Kt,V(h(o).email),1)])]),l("div",Wt,[Qt,Zt,m(d,{style:T(h(E)),class:"w-fit h-fit",preset:"primary",onClick:u[1]||(u[1]=f=>r("openResetPasswordModal"))},{default:y(()=>[P(" Reset Password ")]),_:1},8,["style"])]),m(g),l("div",Jt,[eo,l("div",to,[l("div",oo,V(a.value.content),1)]),m(d,{style:T(h(E)),class:"w-fit h-fit",preset:"primary",color:a.value.color,onClick:i},{default:y(()=>[P(V(a.value.button),1)]),_:1},8,["style","color"])]),m(g),l("div",no,[so,l("div",ao,[l("div",ro,[lo,l("div",io,[m(p,{to:{name:"settings"},class:"font-semibold text-primary"},{default:y(()=>[P("Notification settings")]),_:1})])])])])],64)}}}),uo=l("h1",{class:"va-h5 mb-4"},"Reset password",-1),po={class:"flex flex-col-reverse md:flex-row md:items-center md:justify-end md:space-x-4"},fo=R({__name:"EditNameModal",emits:["cancel"],setup(e,{emit:t}){const o=K(),{init:s}=me(),n=t,a=A(o.userName),i=()=>{if(!a.value||a.value===o.userName)return n("cancel");o.changeUserName(a.value),s({message:"You've successfully changed your name",color:"success"}),n("cancel")};return(r,c)=>{const u=C("VaInput"),d=C("VaButton"),g=C("VaForm"),p=C("VaModal");return x(),F(p,{"mobile-fullscreen":!1,size:"small","hide-default-actions":"","max-width":"380px","model-value":"","close-button":"","onUpdate:modelValue":c[2]||(c[2]=f=>n("cancel"))},{default:y(()=>[uo,m(g,{ref:"form",onSubmit:U(i,["prevent"])},{default:y(()=>[m(u,{modelValue:a.value,"onUpdate:modelValue":c[0]||(c[0]=f=>a.value=f),class:"mb-4",label:"Name",placeholder:"Name"},null,8,["modelValue"]),l("div",po,[m(d,{style:T(h(E)),preset:"secondary",color:"secondary",onClick:c[1]||(c[1]=f=>n("cancel"))},{default:y(()=>[P(" Cancel")]),_:1},8,["style"]),m(d,{style:T(h(E)),class:"mb-4 md:mb-0",type:"submit",onClick:i},{default:y(()=>[P(" Save")]),_:1},8,["style"])])]),_:1},8,["onSubmit"])]),_:1})}}});const vo=l("h1",{class:"va-h5 mb-4"},"Reset password",-1),mo={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},go=l("div",{class:"hidden md:block"},null,-1),_o={class:"flex flex-col space-y-2"},ho={class:"flex space-x-2 items-center"},xo=l("p",null,"Must be at least 8 characters long",-1),yo={class:"flex space-x-2 items-center"},bo=l("p",null,"Must contain at least 6 unique characters",-1),wo={class:"flex flex-col-reverse md:justify-end md:flex-row md:space-x-4"},Co=R({__name:"ResetPasswordModal",emits:["cancel"],setup(e,{emit:t}){const o=A(),s=A(),n=A(),{validate:a}=Ie("form"),{init:i}=Ne(),r=t,c=()=>{a()&&(i({message:"You've successfully changed your password",color:"success"}),r("cancel"))},u=[p=>!!p||"Old password field is required"],d=[p=>!!p||"New password field is required",p=>(p==null?void 0:p.length)>=8||"Must be at least 8 characters long",p=>new Set(p).size>=6||"Must contain at least 6 unique characters",p=>p!==o.value||"New password cannot be the same"],g=[p=>!!p||"Repeat new password field is required",p=>p===s.value||"Confirm password does not match new password"];return(p,f)=>{const w=C("VaInput"),b=C("VaIcon"),S=C("VaButton"),M=C("VaForm"),I=C("VaModal");return x(),F(I,{"max-width":"530px","mobile-fullscreen":!1,"hide-default-actions":"","model-value":"","close-button":"","onUpdate:modelValue":f[4]||(f[4]=k=>r("cancel"))},{default:y(()=>[vo,m(M,{ref:"form",class:"space-y-6",onSubmit:U(c,["prevent"])},{default:y(()=>{var k;return[l("div",mo,[m(w,{modelValue:o.value,"onUpdate:modelValue":f[0]||(f[0]=z=>o.value=z),rules:u,label:"Old password",placeholder:"Old password","required-mark":"",type:"password"},null,8,["modelValue"]),go,m(w,{modelValue:s.value,"onUpdate:modelValue":f[1]||(f[1]=z=>s.value=z),rules:d,label:"New password",placeholder:"New password","required-mark":"",type:"password"},null,8,["modelValue"]),m(w,{modelValue:n.value,"onUpdate:modelValue":f[2]||(f[2]=z=>n.value=z),rules:g,label:"Repeat new password",placeholder:"Repeat new password","required-mark":"",type:"password"},null,8,["modelValue"])]),l("div",_o,[l("div",ho,[l("div",null,[m(b,{name:((k=s.value)==null?void 0:k.length)>=8?"mso-check":"mso-close",color:"secondary",size:"20px"},null,8,["name"])]),xo]),l("div",yo,[l("div",null,[m(b,{name:new Set(s.value).size>=6?"mso-check":"mso-close",color:"secondary",size:"20px"},null,8,["name"])]),bo])]),l("div",wo,[m(S,{style:T(h(E)),preset:"secondary",color:"secondary",onClick:f[3]||(f[3]=z=>r("cancel"))},{default:y(()=>[P(" Cancel")]),_:1},8,["style"]),m(S,{style:T(h(E)),class:"mb-4 md:mb-0",type:"submit",onClick:c},{default:y(()=>[P(" Update Password")]),_:1},8,["style"])])]}),_:1},8,["onSubmit"])]),_:1})}}});const $o=l("h1",{class:"page-title"},"Preferences",-1),So={class:"flex flex-col p-4 space-y-10 bg-backgroundSecondary rounded-lg"},zo={class:"flex space-x-5"},Vo={class:"space-y-4 md:space-y-6"},Ro=R({__name:"Preferences",setup(e){const t=A(!1),o=A(!1);return(s,n)=>(x(),N(H,null,[$o,l("div",So,[l("div",zo,[m(ke)]),l("div",Vo,[m(co,{onOpenNameModal:n[0]||(n[0]=a=>t.value=!0),onOpenResetPasswordModal:n[1]||(n[1]=a=>o.value=!0)})])]),t.value?(x(),F(fo,{key:0,onCancel:n[2]||(n[2]=a=>t.value=!1)})):O("",!0),o.value?(x(),F(Co,{key:1,onCancel:n[3]||(n[3]=a=>o.value=!1)})):O("",!0)],64))}});export{Ro as default};
//# sourceMappingURL=Preferences-06483eea.js.map
