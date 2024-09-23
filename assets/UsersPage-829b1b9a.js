import{d as J}from"./index-46e10f60.js";import{u as I}from"./useModal-aba5b434.js";import{_ as D,u as K}from"./useProjects-84b05d2e.js";import{u as E}from"./index-bd55d569.js";import{d as z,X as Q,e as L,f as i,a as A,c as M,h as l,w as p,b as u,i as k,t as U,u as n,Y as N,H,F as W,_ as Z,r as j,C as R,g as q,R as ee}from"./index-ca099b55.js";import{u as le}from"./useForm-a9714679.js";import{v as C}from"./utils-b2fc192b.js";import{u as ae}from"./useUsers-752ec978.js";import{u as se}from"./useToast-e4b23f51.js";const oe={class:"flex items-center gap-2 max-w-[230px] ellipsis"},te={class:"max-w-[120px] ellipsis"},ne={class:"ellipsis max-w-[230px]"},re={class:"ellipsis max-w-[300px] lg:max-w-[450px]"},ue={class:"flex gap-2 justify-end"},ie={class:"flex flex-col-reverse md:flex-row gap-2 justify-between items-center py-2"},de={key:0,class:"flex"},me=z({__name:"UsersTable",props:{users:{type:Array,required:!0},loading:{type:Boolean,default:!1},pagination:{type:Object,required:!0},sortBy:{type:String,required:!0},sortingOrder:{type:String,required:!0}},emits:["edit-user","delete-user","update:sortBy","update:sortingOrder"],setup(B,{emit:_}){const S=J([{label:"Full Name",key:"fullname",sortable:!0},{label:"Email",key:"email",sortable:!0},{label:"Username",key:"username",sortable:!0},{label:"Role",key:"role",sortable:!0},{label:"Projects",key:"projects",sortable:!0},{label:" ",key:"actions",align:"right"}]),c=B,v=_,s=Q(c,"users"),y=E(c,"sortBy",v),f=E(c,"sortingOrder",v),b={admin:"danger",user:"background-element",owner:"warning"},x=L(()=>Math.ceil(c.pagination.total/c.pagination.perPage)),{confirm:F}=I(),w=async t=>{await F({title:"Delete user",message:`Are you sure you want to delete ${t.fullname}?`,okText:"Delete",cancelText:"Cancel",size:"small",maxWidth:"380px"})&&v("delete-user",t)},h=t=>t.length===0?"No projects":t.length<=2?t.map(e=>e.project_name).join(", "):t.slice(0,2).map(e=>e.project_name).join(", ")+" + "+(t.length-2)+" more";return(t,e)=>{const o=i("VaBadge"),g=i("VaButton"),d=i("VaDataTable"),m=i("VaSelect"),$=i("VaPagination");return A(),M(W,null,[l(d,{"sort-by":n(y),"onUpdate:sortBy":e[0]||(e[0]=a=>N(y)?y.value=a:null),"sorting-order":n(f),"onUpdate:sortingOrder":e[1]||(e[1]=a=>N(f)?f.value=a:null),columns:n(S),items:s.value,loading:t.$props.loading},{"cell(fullname)":p(({rowData:a})=>[u("div",oe,[l(D,{user:a,size:"small"},null,8,["user"]),k(" "+U(a.fullname),1)])]),"cell(username)":p(({rowData:a})=>[u("div",te,U(a.username),1)]),"cell(email)":p(({rowData:a})=>[u("div",ne,U(a.email),1)]),"cell(role)":p(({rowData:a})=>[l(o,{text:a.role,color:b[a.role]},null,8,["text","color"])]),"cell(projects)":p(({rowData:a})=>[u("div",re,U(h(a.projects)),1)]),"cell(actions)":p(({rowData:a})=>[u("div",ue,[l(g,{preset:"primary",size:"small",icon:"mso-edit","aria-label":"Edit user",onClick:T=>t.$emit("edit-user",a)},null,8,["onClick"]),l(g,{preset:"primary",size:"small",icon:"mso-delete",color:"danger","aria-label":"Delete user",onClick:T=>w(a)},null,8,["onClick"])])]),_:1},8,["sort-by","sorting-order","columns","items","loading"]),u("div",ie,[u("div",null,[u("b",null,U(t.$props.pagination.total)+" results.",1),k(" Results per page "),l(m,{modelValue:t.$props.pagination.perPage,"onUpdate:modelValue":e[2]||(e[2]=a=>t.$props.pagination.perPage=a),class:"!w-20",options:[10,50,100]},null,8,["modelValue"])]),x.value>1?(A(),M("div",de,[l(g,{preset:"secondary",icon:"va-arrow-left","aria-label":"Previous page",disabled:t.$props.pagination.page===1,onClick:e[3]||(e[3]=a=>t.$props.pagination.page--)},null,8,["disabled"]),l(g,{class:"mr-2",preset:"secondary",icon:"va-arrow-right","aria-label":"Next page",disabled:t.$props.pagination.page===x.value,onClick:e[4]||(e[4]=a=>t.$props.pagination.page++)},null,8,["disabled"]),l($,{modelValue:t.$props.pagination.page,"onUpdate:modelValue":e[5]||(e[5]=a=>t.$props.pagination.page=a),"buttons-preset":"secondary",pages:x.value,"visible-pages":5,"boundary-links":!1,"direction-links":!1},null,8,["modelValue","pages"])])):H("",!0)])],64)}}});const pe=Z(me,[["__scopeId","data-v-cc541ca7"]]),ce={class:"self-stretch flex-col justify-start items-start gap-4 flex"},fe={class:"flex gap-4 flex-col sm:flex-row w-full"},ve={class:"flex gap-4 flex-col sm:flex-row w-full"},ge={class:"flex gap-4 w-full"},Ve={class:"w-1/2"},be={class:"flex items-center w-1/2 mt-4"},_e={class:"flex gap-2 flex-col-reverse items-stretch justify-end w-full sm:flex-row sm:items-center"},ye=z({__name:"EditUserForm",props:{user:{type:Object,default:null},saveButtonLabel:{type:String,default:"Save"}},emits:["close","save"],setup(B,{expose:_,emit:S}){const c=B,v={id:-1,avatar:"",fullname:"",role:"user",username:"",notes:"",email:"",active:!0,projects:[]},s=j({...v}),y=L(()=>Object.keys(s.value).some(e=>{var o;return e==="avatar"||e==="projects"?!1:s.value[e]!==((o=c.user??v)==null?void 0:o[e])}));_({isFormHasUnsavedChanges:y}),R(()=>c.user,()=>{c.user&&(s.value={...c.user,avatar:c.user.avatar||""})},{immediate:!0});const f=j(),b=e=>URL.createObjectURL(e);R(f,e=>{s.value.avatar=e?b(e):""});const x=le("add-user-form"),F=S,w=()=>{x.validate()&&F("save",s.value)},h=[{text:"Admin",value:"admin"},{text:"User",value:"user"},{text:"Owner",value:"owner"}],{projects:t}=K({pagination:j({page:1,perPage:9999,total:10})});return(e,o)=>{const g=i("VaButton"),d=i("VaFileUpload"),m=i("VaInput"),$=i("VaSelect"),a=i("VaCheckbox"),T=i("VaTextarea"),O=i("VaForm");return A(),q(O,{ref:"add-user-form",class:"flex-col justify-start items-start gap-4 inline-flex w-full"},{default:p(({isValid:P})=>[l(d,{modelValue:f.value,"onUpdate:modelValue":o[1]||(o[1]=r=>f.value=r),type:"single","hide-file-list":"",class:"self-stretch justify-start items-center gap-4 inline-flex"},{default:p(()=>[l(D,{user:s.value,size:"large"},null,8,["user"]),l(g,{preset:"primary",size:"small"},{default:p(()=>[k("Add image")]),_:1}),f.value?(A(),q(g,{key:0,preset:"primary",color:"danger",size:"small",icon:"delete",class:"z-10",onClick:o[0]||(o[0]=ee(r=>f.value=void 0,["stop"]))})):H("",!0)]),_:1},8,["modelValue"]),u("div",ce,[u("div",fe,[l(m,{modelValue:s.value.fullname,"onUpdate:modelValue":o[2]||(o[2]=r=>s.value.fullname=r),label:"Full name",class:"w-full sm:w-1/2",rules:[n(C).required],name:"fullname"},null,8,["modelValue","rules"]),l(m,{modelValue:s.value.username,"onUpdate:modelValue":o[3]||(o[3]=r=>s.value.username=r),label:"Username",class:"w-full sm:w-1/2",rules:[n(C).required],name:"username"},null,8,["modelValue","rules"])]),u("div",ve,[l(m,{modelValue:s.value.email,"onUpdate:modelValue":o[4]||(o[4]=r=>s.value.email=r),label:"Email",class:"w-full sm:w-1/2",rules:[n(C).required,n(C).email],name:"email"},null,8,["modelValue","rules"]),l($,{modelValue:s.value.projects,"onUpdate:modelValue":o[5]||(o[5]=r=>s.value.projects=r),label:"Projects",class:"w-full sm:w-1/2",options:n(t),rules:[n(C).required],name:"projects","text-by":"project_name","track-by":"id",multiple:"","max-visible-options":2},null,8,["modelValue","options","rules"])]),u("div",ge,[u("div",Ve,[l($,{modelValue:s.value.role,"onUpdate:modelValue":o[6]||(o[6]=r=>s.value.role=r),label:"Role",class:"w-full",options:h,rules:[n(C).required],name:"role","value-by":"value"},null,8,["modelValue","rules"])]),u("div",be,[l(a,{modelValue:s.value.active,"onUpdate:modelValue":o[7]||(o[7]=r=>s.value.active=r),label:"Active",class:"w-full",name:"active"},null,8,["modelValue"])])]),l(T,{modelValue:s.value.notes,"onUpdate:modelValue":o[8]||(o[8]=r=>s.value.notes=r),label:"Notes",class:"w-full",name:"notes"},null,8,["modelValue"]),u("div",_e,[l(g,{preset:"secondary",color:"secondary",onClick:o[9]||(o[9]=r=>e.$emit("close"))},{default:p(()=>[k("Cancel")]),_:1}),l(g,{disabled:!P,onClick:w},{default:p(()=>[k(U(B.saveButtonLabel),1)]),_:2},1032,["disabled"])])])]),_:1},512)}}}),xe=u("h1",{class:"page-title"},"Users",-1),we={class:"flex flex-col md:flex-row gap-2 mb-2 justify-between"},Ue={class:"flex flex-col md:flex-row gap-2 justify-start"},$e={class:"va-h5"},Oe=z({__name:"UsersPage",setup(B){const _=j(!1),{users:S,isLoading:c,filters:v,sorting:s,pagination:y,...f}=ae(),b=j(null),x=d=>{b.value=d,_.value=!0},F=()=>{b.value=null,_.value=!0},{init:w}=se(),h=async d=>{b.value?(await f.update(d),w({message:`${d.fullname} has been updated`,color:"success"})):(f.add(d),w({message:`${d.fullname} has been created`,color:"success"}))},t=async d=>{await f.remove(d),w({message:`${d.fullname} has been deleted`,color:"success"})},e=j(),{confirm:o}=I(),g=async d=>{e.value.isFormHasUnsavedChanges?await o({maxWidth:"380px",message:"Form has unsaved changes. Are you sure you want to close it?",size:"small"})&&d():d()};return(d,m)=>{const $=i("VaButtonToggle"),a=i("VaIcon"),T=i("VaInput"),O=i("VaButton"),P=i("VaCardContent"),r=i("VaCard"),X=i("VaModal");return A(),M(W,null,[xe,l(r,null,{default:p(()=>[l(P,null,{default:p(()=>[u("div",we,[u("div",Ue,[l($,{modelValue:n(v).isActive,"onUpdate:modelValue":m[0]||(m[0]=V=>n(v).isActive=V),color:"background-element","border-color":"background-element",options:[{label:"Active",value:!0},{label:"Inactive",value:!1}]},null,8,["modelValue"]),l(T,{modelValue:n(v).search,"onUpdate:modelValue":m[1]||(m[1]=V=>n(v).search=V),placeholder:"Search"},{prependInner:p(()=>[l(a,{name:"search",color:"secondary",size:"small"})]),_:1},8,["modelValue"])]),l(O,{onClick:F},{default:p(()=>[k("Add User")]),_:1})]),l(pe,{"sort-by":n(s).sortBy,"onUpdate:sortBy":m[2]||(m[2]=V=>n(s).sortBy=V),"sorting-order":n(s).sortingOrder,"onUpdate:sortingOrder":m[3]||(m[3]=V=>n(s).sortingOrder=V),users:n(S),loading:n(c),pagination:n(y),onEditUser:x,onDeleteUser:t},null,8,["sort-by","sorting-order","users","loading","pagination"])]),_:1})]),_:1}),l(X,{modelValue:_.value,"onUpdate:modelValue":m[4]||(m[4]=V=>_.value=V),size:"small","mobile-fullscreen":"","close-button":"","hide-default-actions":"","before-cancel":g},{default:p(({cancel:V,ok:Y})=>[u("h1",$e,U(b.value?"Edit user":"Add user"),1),l(ye,{ref_key:"editFormRef",ref:e,user:b.value,"save-button-label":b.value?"Save":"Add",onClose:V,onSave:G=>{h(G),Y()}},null,8,["user","save-button-label","onClose","onSave"])]),_:1},8,["modelValue"])],64)}}});export{Oe as default};
//# sourceMappingURL=UsersPage-829b1b9a.js.map