(globalThis["webpackChunkmc_portfolio"]=globalThis["webpackChunkmc_portfolio"]||[]).push([[654],{1654:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>Ne});var n=i(9835),o=i(499),l=i(2162),a=i.n(l),s=i(6970);const r={__name:"MainButton",props:{name:String,type:String,loading:Boolean},emits:["handle-button"],setup(e,{emit:t}){const i=t;function o(e){i("handle-button",e)}return(t,i)=>{const l=(0,n.up)("q-btn");return(0,n.wg)(),(0,n.j4)(l,{class:"main-button",flat:"",loading:e.loading,type:e.type,color:"white",onClick:i[0]||(i[0]=e=>o("contact-me"))},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(e.name),1)])),_:1},8,["loading","type"])}}};var c=i(8556),u=i(9984),p=i.n(u);const m=r,d=m;p()(r,"components",{QBtn:c.Z});const g={class:"hero-section"},v={class:"top"},h={class:"text"},S=(0,n.uE)('<div class="top-text"><h1 class="hi">Hi</h1><h1 class="name">I’m Catalin M.</h1><div class="role"><hr><span>frontend developer</span></div><p class="desc">Crafting pixel-perfect, user-centric web experiences with passion and proficiency.</p></div>',1),w=(0,n._)("div",{class:"portrait-image image-hero"},[(0,n._)("img",{src:a(),alt:""})],-1),k={__name:"HeroSection",setup(e){function t(){const e=document.getElementById("contact-section");e.scrollIntoView({behavior:"instant"})}return(e,i)=>((0,n.wg)(),(0,n.iD)("div",g,[(0,n._)("div",v,[(0,n._)("div",h,[S,(0,n.Wm)((0,o.SU)(d),{class:"button-tablet button-hero",name:"Contact Me",onHandleButton:t})]),w]),(0,n.Wm)((0,o.SU)(d),{class:"button-mobile button-hero",name:"Contact Me",onHandleButton:t})]))}},y=k,f=y,b=["src"],_={class:"skill-name"},C={__name:"SkillComp",props:{skill:String,logo:String,hoverColor:String},setup(e){function t(e){return{"--color-hover":e}}return(i,o)=>((0,n.wg)(),(0,n.iD)("div",{class:"skill-comp",style:(0,s.j5)(t(e.hoverColor))},[(0,n._)("img",{style:{width:"80px"},src:`${e.logo}`,alt:"logo"},null,8,b),(0,n._)("span",_,(0,s.zw)(e.skill),1)],4))}},j=C,H=j,x={class:"skills-section"},W=(0,n._)("h2",null,"Some of the skills and tools I work with",-1),M={class:"skill-list"},q={__name:"SkillsSection",setup(e){const t=(0,o.iH)([{name:"HTML",logo:"html.png",hoverColor:"#f16528"},{name:"CSS",logo:"css.png",hoverColor:"#369cd6"},{name:"JavaScript",logo:"js.png",hoverColor:"#e9ca32"},{name:"Vue js",logo:"vue.png",hoverColor:"#41b783"},{name:"Quasar js",logo:"quasar.png",hoverColor:"#00b3fe"},{name:"Nuxt js",logo:"nuxt.png",hoverColor:"#03c58e"}]);return(e,i)=>((0,n.wg)(),(0,n.iD)("div",x,[W,(0,n._)("div",M,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.value,(({name:e,logo:t,hoverColor:i})=>((0,n.wg)(),(0,n.j4)((0,o.SU)(H),{key:e,logo:t,skill:e,"hover-color":i},null,8,["logo","skill","hover-color"])))),128))])]))}},D=q,Q=D;i(2879);var I=i(1957);const U=["src","alt"],T={class:"info"},L={style:{display:"flex","margin-top":"5px","justify-content":"space-between","align-items":"baseline"}},Z={key:0,class:"see-live"},F=["href"],V={class:"skills"},B={__name:"ProjectCard",props:{img:String,title:String,skills:Array,id:String,link:String},emits:["open-modal"],setup(e,{emit:t}){const i=t,o=e;function l(){i("open-modal",{id:o.id,img:o.img,skills:o.skills,title:o.title,link:o.link})}return(t,i)=>{const o=(0,n.up)("q-icon"),a=(0,n.up)("q-card"),r=(0,n.up)("q-spinner-radio");return(0,n.wg)(),(0,n.iD)("section",{class:"project-card animation-section",onClick:l},[(0,n.Wm)(a,null,{default:(0,n.w5)((()=>[(0,n._)("img",{src:`${e.img}`,alt:e.img},null,8,U),(0,n.Wm)(o,{class:"icon-open-full",color:"grey-6",size:"30px",name:"fullscreen"})])),_:1}),(0,n._)("div",T,[(0,n._)("div",L,[(0,n._)("h3",null,(0,s.zw)(e.title),1),e.link?((0,n.wg)(),(0,n.iD)("div",Z,[(0,n._)("a",{style:{gap:"10px",display:"flex",cursor:"pointer","font-weight":"700",color:"#41B783FF","text-decoration":"none","align-items":"center"},href:e.link,target:"_blank"},[(0,n.Uk)(" See live "),(0,n.Wm)(r,{size:"1em",color:"#41B783FF"})],8,F)])):(0,n.kq)("",!0)]),(0,n._)("div",V,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.skills,(e=>((0,n.wg)(),(0,n.iD)("p",{key:e},(0,s.zw)(e),1)))),128))])])])}}};var P=i(4458),J=i(2857),z=i(4486);const N=B,E=N;p()(B,"components",{QCard:P.Z,QIcon:J.Z,QSpinnerRadio:z.Z});var Y=i(3100);const A={class:"projects-section"},$={class:"title text-h6"},K={style:{display:"flex","align-items":"center",gap:"10px"}},R=["src","alt"],O={class:"top"},G=(0,n._)("h2",null,"Recent work",-1),X={class:"search"},ee={class:"projects-list"},te={__name:"ProjectsSection",setup(e){const{state:t}=(0,Y.oR)(),i=(0,o.iH)(""),l=(0,o.iH)(!1),a=(0,o.iH)(!1),r=(0,n.Fl)((()=>t.data.screenWidth)),c=(0,o.iH)([{id:"suport-solar",img:"suport-solar.png",title:"Suport Solar",skills:["HTML","CSS","JavaScript","Quasar js"],link:"https://suport-solar.ro/"},{id:"black-mar",img:"black-mar.png",title:"Black Mar",skills:["HTML","CSS","JavaScript","Vue js"],link:"https://blackmar.io/"},{id:"juicy-llama",img:"juicy.png",title:"Juicy Llama",skills:["HTML","CSS","JavaScript","Vue js","Tailwind CSS"]},{id:"ibrowse",img:"ibrowse.png",title:"iBrowse",skills:["HTML","CSS","JavaScript","Quasar js"]},{id:"salva-monument",img:"salvamonument.png",title:"Salva Monument",skills:["HTML","CSS","JavaScript","Quasar js"],link:"https://salvamonument.ro/"},{id:"mim",img:"mim.png",title:"Muzeul Migratiei",skills:["HTML","CSS","JavaScript"]},{id:"la-viitor",img:"laviitor.png",title:"La Viitor Patrimoniu",skills:["Web Design","UX | UI","Figma"],link:"https://laviitor.patrimoniu.ro/"},{id:"notorius-nft",img:"notoriusNFT.png",title:"Notorius Kings NFT",skills:["HTML","CSS","JavaScript","React js"]},{id:"dinstitute",img:"dinstitute.png",title:"Dinstitute",skills:["HTML","CSS","JavaScript","Vue js"]},{id:"add-to-cart",img:"add-to-cart.png",title:"Product Component",skills:["HTML","CSS","JavaScript"],link:"https://catalinmuresian.github.io/product-preview-card-component/"},{id:"countdown",img:"countdown.png",title:"Countdown timer",skills:["HTML","CSS","JavaScript","Vue js"],link:"https://catalinmuresian.github.io/countdown-timer/"},{id:"results",img:"results.png",title:"Results summary - App",skills:["HTML","CSS","JavaScript"],link:"https://catalinmuresian.github.io/results-summary/"}]),u=(0,o.iH)([...c.value]),p=(0,o.iH)({});function m({title:e,img:t,skills:i,id:n,link:o}){r.value>=768&&(console.log(r.value>=768),a.value=!0,p.value={title:e,img:t,skills:i,id:n,link:o})}function d(e){const t=[],i=new Set;function n(){u.value.filter((i=>{i.title.toLowerCase().includes(e.toLowerCase())&&t.push(i),i.skills.forEach((n=>n.toLowerCase().includes(e.toLowerCase())&&t.push(i)))})),c.value=t.filter((e=>{const t=i.has(e.id);return i.add(e.id),!t}))}null!==e?n():c.value=u.value}return(0,n.YP)((()=>c.value),(e=>{l.value=0===e.length})),(e,t)=>{const r=(0,n.up)("q-space"),u=(0,n.up)("q-btn"),g=(0,n.up)("q-card-section"),v=(0,n.up)("q-separator"),h=(0,n.up)("q-card"),S=(0,n.up)("q-dialog"),w=(0,n.up)("q-icon"),k=(0,n.up)("q-input"),y=(0,n.Q2)("close-popup");return(0,n.wg)(),(0,n.iD)("div",A,[(0,n.Wm)(S,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e)},{default:(0,n.w5)((()=>[(0,n.Wm)(h,{class:"project-dialog"},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{class:"row items-center q-pb-none title-section-card"},{default:(0,n.w5)((()=>[(0,n._)("div",$,(0,s.zw)(p.value.title),1),(0,n.Wm)(r),(0,n._)("div",K,[(0,n.wy)((0,n.Wm)(u,{icon:"close",flat:"",round:"",dense:""},null,512),[[y]])])])),_:1}),(0,n.Wm)(g,{class:"q-pb-none q-pt-none skills"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(p.value.skills,(e=>((0,n.wg)(),(0,n.iD)("p",{key:e},(0,s.zw)(e),1)))),128))])),_:1}),(0,n.Wm)(v),(0,n.Wm)(g,{style:{height:"100%"},class:"scroll"},{default:(0,n.w5)((()=>[(0,n._)("img",{style:{width:"100%"},src:`${p.value.img}`,alt:`${p.value.img}`},null,8,R)])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,n._)("div",O,[G,(0,n._)("div",X,[(0,n.Wm)(k,{placeholder:"Search","label-color":"white",clearable:"","clear-icon":"close",color:"white",dense:"",modelValue:i.value,"onUpdate:modelValue":[t[1]||(t[1]=e=>i.value=e),t[2]||(t[2]=e=>d(e))],flat:"",type:"search"},{prepend:(0,n.w5)((()=>[(0,n.Wm)(w,{color:"white",name:"search"})])),_:1},8,["modelValue"])])]),(0,n._)("div",ee,[(0,n.wy)((0,n._)("h3",null,"No results",512),[[I.F8,l.value]]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(c.value,(({img:e,title:t,skills:i,id:l,link:a})=>((0,n.wg)(),(0,n.j4)((0,o.SU)(E),{key:t,id:l,img:e,title:t,skills:i,link:a,onOpenModal:m},null,8,["id","img","title","skills","link"])))),128))])])}}};var ie=i(8988),ne=i(3190),oe=i(136),le=i(926),ae=i(7882),se=i(8149),re=i(2146);const ce=te,ue=ce;p()(te,"components",{QDialog:ie.Z,QCard:P.Z,QCardSection:ne.Z,QSpace:oe.Z,QBtn:c.Z,QSeparator:le.Z,QInput:ae.Z,QIcon:J.Z,QField:se.Z}),p()(te,"directives",{ClosePopup:re.Z});const pe={__name:"BaseInput",props:{label:String,type:String,value:String},emits:["handle-input"],setup(e,{emit:t}){const i=t,l=e,a=(0,o.iH)("");function r(e){i("handle-input",{key:l.label,value:e})}return(0,n.YP)((()=>l.value),(e=>{a.value=e}),{immediate:!0}),(t,i)=>{const o=(0,n.up)("q-input");return(0,n.wg)(),(0,n.j4)(o,{class:"base-input",modelValue:a.value,"onUpdate:modelValue":[i[0]||(i[0]=e=>a.value=e),i[1]||(i[1]=e=>r(e))],"lazy-rules":"ondemand",type:e.type,"label-color":"grey",rows:"4",style:(0,s.j5)("textarea"===e.type&&"min-height: 70px;"),rules:[e=>!!e||"Field is required"],label:e.label},null,8,["modelValue","type","style","rules","label"])}}},me=pe,de=me;p()(pe,"components",{QInput:ae.Z,QField:se.Z});var ge=i(9302);const ve={id:"contact-section",class:"contact-section"},he={class:"contact-section-anim container main-max-width main-padding animation-section"},Se=(0,n._)("div",{class:"info"},[(0,n._)("h2",null,"Contact"),(0,n._)("p",null,"I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.")],-1),we={__name:"ContactSection",setup(e){const{state:t,dispatch:i}=(0,Y.oR)(),l=(0,ge.Z)(),a=(0,n.Fl)((()=>t.data.isFetching)),s=(0,n.Fl)((()=>t.data.reqStatus)),r=(0,n.Fl)((()=>t.data.reqMessage));let c=(0,o.iH)({name:"",email:"",message:""});const u=(0,o.iH)([{key:"name",type:"text"},{key:"email",type:"email"},{key:"message",type:"textarea"}]);function p({key:e,value:t}){c.value[e]=t}function m(){i("send_mmessage",{name:c.value.name,email:c.value.email,message:c.value.message})}return(0,n.YP)((()=>s.value),(e=>{const t={position:"top",icon:"error",color:"negative",message:r.value},i={position:"top",icon:"success",color:"positive",message:r.value};"success"===e&&(l.notify(i),c.value={name:"",email:"",message:""}),"error"===e&&l.notify(t)}),{immediate:!0}),(e,t)=>{const i=(0,n.up)("q-form");return(0,n.wg)(),(0,n.iD)("div",ve,[(0,n._)("div",he,[Se,(0,n.Wm)(i,{onSubmit:(0,I.iM)(m,["prevent"])},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(u.value,(({key:e,type:t})=>((0,n.wg)(),(0,n.j4)((0,o.SU)(de),{value:(0,o.SU)(c)[e],key:e,label:e,type:t,onHandleInput:p},null,8,["value","label","type"])))),128)),(0,n.Wm)((0,o.SU)(d),{loading:a.value,name:"Send Message",type:"submit"},null,8,["loading"])])),_:1})])])}}};var ke=i(8326);const ye=we,fe=ye;p()(we,"components",{QForm:ke.Z});const be={class:"start-project-card"},_e={class:"container"},Ce=(0,n._)("h4",null,"Start a project",-1),je=(0,n._)("p",null,"Interested in working together ? Let's schedule a call and turn your idea into a successful product.",-1),He={__name:"StartProjectCard",setup(e){function t(){const e=document.getElementById("contact-section");e.scrollIntoView({behavior:"instant"})}return(e,i)=>((0,n.wg)(),(0,n.iD)("div",be,[(0,n._)("div",_e,[Ce,je,(0,n.Wm)((0,o.SU)(d),{name:"Send me a message",onHandleButton:t})])]))}},xe=He,We=xe,Me={__name:"ServicesCard",props:{title:String,description:String,hoverColor:String},setup(e){function t(e){return{"--color-hover":e}}return(i,o)=>((0,n.wg)(),(0,n.iD)("section",{class:"services-card animation-section",style:(0,s.j5)(t(e.hoverColor))},[(0,n._)("h4",null,(0,s.zw)(e.title),1),(0,n._)("p",null,(0,s.zw)(e.description),1)],4))}},qe=Me,De=qe,Qe={class:"our-services-section"},Ie=(0,n._)("h2",null,"Services",-1),Ue={class:"our-services-list"},Te={__name:"OurServicesSection",setup(e){const t=(0,o.iH)([{title:"Responsive Web Design",description:"Ensure your website looks great and functions seamlessly on all devices, from desktops to smartphones.",hoverColor:"#bf6fff"},{title:"Front-end Development",description:"Implement robust and efficient front-end solutions using cutting-edge technologies such as HTML5, CSS3, JavaScript, Vue js, Quasar js and Nuxt js.",hoverColor:"#bf9648"},{title:"Web Performance Optimization",description:"Enhance website speed and performance to provide users with a smooth and responsive browsing experience.",hoverColor:"#766fff"},{title:"API Integration",description:"Integrate third-party APIs seamlessly to enhance the functionality and features of your website.",hoverColor:"#48bf68"},{title:"Collaboration with Back-End Developers:",description:"Work closely with back-end developers to integrate front-end and back-end functionalities seamlessly.",hoverColor:"#abb500"},{title:"Cross-Browser Compatibility",description:"Guarantee consistent performance and appearance across various web browsers for a broader user reach.",hoverColor:"#48a2bf"}]);return(e,i)=>((0,n.wg)(),(0,n.iD)("div",Qe,[Ie,(0,n._)("div",Ue,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.value,(({title:e,description:t,hoverColor:i},l)=>((0,n.wg)(),(0,n.j4)((0,o.SU)(De),{key:l,title:e,description:t,"hover-color":i},null,8,["title","description","hover-color"])))),128))])]))}},Le=Te,Ze=Le;var Fe=i(388),Ve=i(345);const Be=(0,n._)("hr",null,null,-1),Pe={__name:"MainPage",setup(e){return(0,n.bv)((()=>{Fe.p8.registerPlugin(Ve.i);const e=document.querySelectorAll("section"),t=["nav","our-services-section","skills-section","start-project-card","projects-section","contact-section-anim"],i=[{sectionName:"hi"},{sectionName:"name",delay:.6},{sectionName:"role",delay:.8},{sectionName:"desc",delay:1},{sectionName:"button-hero",delay:1.2},{sectionName:"image-hero",delay:1.6}];e.forEach((e=>{Fe.p8.to(e,{scrollTrigger:{trigger:e,toggleActions:"play none none none",start:"-250px 100%",end:"bottom 100%"},y:0,opacity:1,duration:1})})),t.forEach((e=>{Fe.p8.to(`.${e}`,{scrollTrigger:{trigger:`.${e}`,toggleActions:"play none none none"},y:0,opacity:1,duration:1})})),i.forEach((({sectionName:e,delay:t})=>{Fe.p8.to(`.${e}`,{scrollTrigger:{trigger:`.${e}`,toggleActions:"play none none none"},x:0,y:0,opacity:1,duration:1.1,delay:t})}))})),(e,t)=>{const i=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(i,{class:"flex main-page column main-distance"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(f),{class:"main-padding main-max-width"}),Be,(0,n.Wm)((0,o.SU)(Ze),{class:"main-padding main-max-width our-services-section animation-section"}),(0,n.Wm)((0,o.SU)(Q),{class:"main-padding main-max-width animation-section"}),(0,n.Wm)((0,o.SU)(We),{class:"main-padding main-max-width animation-section"}),(0,n.Wm)((0,o.SU)(ue),{class:"main-padding main-max-width animation-section"}),(0,n.Wm)((0,o.SU)(fe))])),_:1})}}};var Je=i(9885);const ze=Pe,Ne=ze;p()(Pe,"components",{QPage:Je.Z})},2162:(e,t,i)=>{e.exports=i.p+"img/cm-main-image.cdaf7c7d.png"}}]);