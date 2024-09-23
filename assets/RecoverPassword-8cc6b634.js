import{d as f,r as _,a3 as w,f as s,a as b,g as y,w as a,h as t,i as m,R as V,b as u}from"./index-081829f7.js";import{u as v}from"./useForm-8b7b94f1.js";const h=u("h1",{class:"font-semibold text-4xl mb-4"},"Forgot your password?",-1),x=u("p",{class:"text-base mb-4 leading-5"}," If you've forgotten your password, don't worry. Simply enter your email address below, and we'll send you an email with a temporary password. Restoring access to your account has never been easier. ",-1),C=f({__name:"RecoverPassword",setup(g){const r=_(""),d=v("passwordForm"),i=w(),e=()=>{d.validate()&&i.push({name:"recover-password-email"})};return(F,n)=>{const c=s("VaInput"),l=s("VaButton"),p=s("VaForm");return b(),y(p,{ref:"passwordForm",onSubmit:V(e,["prevent"])},{default:a(()=>[h,x,t(c,{modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=o=>r.value=o),rules:[o=>!!o||"Email field is required"],class:"mb-4",label:"Enter your email",type:"email"},null,8,["modelValue","rules"]),t(l,{class:"w-full mb-2",onClick:e},{default:a(()=>[m("Send password")]),_:1}),t(l,{to:{name:"login"},class:"w-full",preset:"secondary",onClick:e},{default:a(()=>[m("Go back")]),_:1})]),_:1},8,["onSubmit"])}}});export{C as default};
//# sourceMappingURL=RecoverPassword-8cc6b634.js.map
