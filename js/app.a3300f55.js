(function(){"use strict";var t={5571:function(t,e,s){var i=s(6369),a=s(1158),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Navbar",{attrs:{scrolledDown:!t.scrolledDown}}),e("div",{staticClass:"splash"},[e("div",{staticClass:"gradient-overlay"}),e("Sketch")],1),e("font-awesome-icon",{attrs:{icon:"fa-solid fa-chevron-right"}}),e("Hero"),e("MainView",{attrs:{scrolledDown:!t.scrolledDown}})],1)},n=[],r=function(){var t=this;t._self._c;return t._m(0)},l=[function(){var t=this,e=t._self._c;return e("div",[e("div",{attrs:{id:"header"}},[e("div",{staticClass:"mid"},[e("div",{staticClass:"search-holder"}),e("div",{staticClass:"buttons"}),e("a",{staticClass:"logo-mobile",attrs:{href:"fb.com"}},[e("img",{staticClass:"logo",attrs:{src:"/svg/personal-logo.svg",alt:"logo"}})])])])])}],c={components:{},props:{scrolledDown:Boolean}},d=c,u=s(1001),h=(0,u.Z)(d,r,l,!1,null,"47a4cd64",null),f=h.exports,m=function(){var t=this,e=t._self._c;return e("vue-p5",{on:{sketch:t.sketch}})},p=[],v=s(995),g=s.n(v),b={components:{VueP5:g()},methods:{sketch(t){class e{constructor(e,s,i){this.pos=t.createVector(e,s),this.vel=t.constructor.Vector.random2D(),this.vel.mult(5),this.acc=t.createVector(0,0),this.mass=i,this.r=t.sqrt(2*this.mass)}applyForce(e){let s=t.constructor.Vector.div(e,this.mass);this.acc.add(s)}update(){this.vel.add(this.acc),this.pos.add(this.vel),this.acc.set(0,0)}show(){t.fill("#141824"),t.ellipse(this.pos.x,this.pos.y,2*this.r)}}class s{constructor(e,s,i){this.pos=t.createVector(e,s),this.mass=i,this.r=2*t.sqrt(this.mass)}attract(e){let s=t.constructor.Vector.sub(this.pos,e.pos),i=t.constrain(s.magSq(),100,1e3),a=10,o=a*(this.mass*e.mass)/i;s.setMag(.01*o),e.applyForce(s)}show(){t.noStroke(),t.fill("#19233b"),t.ellipse(this.pos.x,this.pos.y,2*this.r)}}let i=[],a=[];const o=document.body.clientWidth,n=window.innerHeight;t.setup=()=>{t.createCanvas(o,n);for(let r=0;r<8;r++){let l=t.random(o),c=t.random(n),d=t.random(100,300,500);i.push(new e(l,c,d)),r<6&&a.push(new s(t.random(o),t.random(n),t.random(100,300,500)))}},t.draw=()=>{t.background("#161c2c");for(let t of i){t.update(),t.show();for(const e of a)e.attract(t)}for(const t of a)t.show()},t.windowResized=()=>{t.resizeCanvas(document.body.clientWidth,window.innerHeight)},t.mouseClicked=()=>{i.push(new e(t.mouseX,t.mouseY,t.random(150,350))),i.length>13&&i.shift()},t.keyPressed=e=>{"a"===e.key&&a.push(new s(t.mouseX,t.mouseY,t.random(150,350)))}}}},_=b,C=(0,u.Z)(_,m,p,!1,null,"3fcb5a5e",null),y=C.exports,w=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"main-view",class:{hidden:t.scrolledDown}},[t._m(0),e("div",{staticClass:"main"},[t._m(1),e("section",{class:t.hide,attrs:{id:"About","aria-labelledby":"About-heading"}},[e("h2",{attrs:{id:"intro-heading"}},[t._v("About me")]),e("span",[t._v(" Self-taught developer from Dallas, TX with an artistic and technical background. I pride myself on my work-ethic, quick-learning, and ability to problem solve. Any project that I'm involved with is handled with great care. ")])]),e("section",{class:t.hide,attrs:{id:"Projects","aria-labelledby":"Projects-heading"}},[e("h2",{attrs:{id:"Projects-heading"}},[t._v("Projects")]),e("div",{staticClass:"cards"},[e("div",{staticClass:"card-col"},[e("Card",{staticClass:"stagger",class:t.hide,staticStyle:{"--order":"1"},attrs:{item:t.projects[0],txt:t.select}}),e("Card",{staticClass:"stagger",class:t.hide,staticStyle:{"--order":"2"},attrs:{item:t.projects[1],txt:t.select}})],1),e("div",{staticClass:"card-col"},[e("Card",{staticClass:"stagger",class:t.hide,staticStyle:{"--order":"3"},attrs:{item:t.projects[2],txt:t.select}}),e("Card",{staticClass:"stagger",class:t.hide,staticStyle:{"--order":"4"},attrs:{item:t.projects[3],txt:t.select}})],1)])]),e("section",{class:t.hide,attrs:{id:"Experience","aria-labelledby":"Experience-heading"}},[e("h2",{attrs:{id:"Experience-heading"}},[t._v("Experience")]),e("div",{staticClass:"work stagger",class:t.hide,staticStyle:{"--order":"1"}},[e("h3",[t._v("Work")]),t._l(t.work,(function(s){return e("div",{key:s.ort,staticClass:"cont"},[e("span",[t._v(t._s(s.date))]),e("span",[t._v(t._s(s.extra))]),e("span",[t._v(t._s(s.title1))]),e("span",[t._v(t._s(s.ort))]),e("span",[t._v(t._s(s.txt))])])}))],2),e("div",{staticClass:"education stagger",class:t.hide,staticStyle:{"--order":"2"}},[e("h3",[t._v("Education")]),t._l(t.education,(function(s){return e("div",{key:s.title1,staticClass:"cont"},[e("span",[t._v(t._s(s.date))]),e("span",[t._v(t._s(s.extra))]),e("span",[t._v(t._s(s.title1))]),e("span",[t._v(t._s(s.ort))]),e("span",[t._v(t._s(s.txt))])])}))],2)]),e("section",{class:t.hide,attrs:{id:"Contact","aria-labelledby":"Contact-heading"}},[e("div",{staticClass:"contact"},[e("h2",{attrs:{id:"Contact-heading"}},[t._v("Contact")]),t._v(" Email "),e("a",{attrs:{href:"mailto:mondbradley@gmail.com"}},[e("Fa",{attrs:{fa:"envelope-o"}}),t._v(" mondbradley@gmail.com ")],1)]),e("div",{staticClass:"links"},[e("h2",{attrs:{id:"Contact-heading"}},[t._v("Links")]),e("a",{attrs:{href:"https://linkedin.com/in/mondb214/"}},[e("Fa",{attrs:{fa:"linkedin"}}),t._v(" Linkedin")],1),e("a",{attrs:{href:"https://github.com/big-mond/"}},[e("Fa",{attrs:{fa:"github"}}),t._v(" GitHub")],1),e("a",{attrs:{href:"https://instagram.com/big_mond/"}},[e("Fa",{attrs:{fa:"instagram"}}),t._v(" Instagram")],1)])])])]),e("PopUp",{attrs:{selected:t.selected,closeWindow:t.closePopUp}})],1)},k=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"side sidebar"},[e("div",{staticClass:"container"},[e("div",{staticClass:"sidebuttons",attrs:{role:"navigation","aria-labelledby":"main-nav-heading"}},[e("div",{staticClass:"title",attrs:{id:"main-nav-heading"}},[t._v(" Table of Contents ")]),e("a",{staticClass:"listitem",attrs:{href:"#Intro"}},[t._v("Intro")]),e("a",{staticClass:"listitem",attrs:{href:"#About"}},[t._v("About Me")]),e("a",{staticClass:"listitem",attrs:{href:"#Projects"}},[t._v("Projects")]),e("a",{staticClass:"listitem",attrs:{href:"#Experience"}},[t._v("Experience")]),e("a",{staticClass:"listitem",attrs:{href:"#Contact"}},[t._v("Contact")])])])])},function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"Intro"}},[e("div",{staticClass:"txt"},[e("p",[t._v("I'M")]),e("h1",[t._v("MOND")]),e("h3",[t._v("I have a passion for everything creative.")])])])}],S=function(){var t=this,e=t._self._c;return e("kinesis-container",{attrs:{duration:300}},[e("kinesis-element",{attrs:{strength:3,type:"depth_inv"}},[e("div",{staticClass:"card",on:{click:function(e){return t.txt(t.item.id)},mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1}}},[e("div",{staticClass:"overlay",style:{background:`linear-gradient(0deg, #161c2c 9%, #1d2029e3 21%, rgba(34, 35, 38, 0) 30% ), url(${t.hover?t.item.images[0].img:t.item.images[1].img}) top center/cover`}}),e("div",{staticClass:"info"},[e("kinesis-element",{attrs:{strength:2,type:"depth_inv"}},[e("h3",[t._v(t._s(t.item.title1))])]),e("div",{staticClass:"tags"},t._l(t.item.tags,(function(s){return e("span",{key:s},[t._v(t._s(s))])})),0),e("div",{staticClass:"tags links"},[t.item.demo.length>1?e("a",{attrs:{href:t.item.demo}},[t._v("Demo")]):t._e(),e("a",{attrs:{href:t.item.source}},[t._v("Source")])])],1)])])],1)},x=[],P=s(9864),M={components:{KinesisContainer:P.tB,KinesisElement:P.M2},data:()=>({hover:!1}),props:{item:Object,txt:Function}},j=M,A=(0,u.Z)(j,S,x,!1,null,"370e24a8",null),D=A.exports,z=function(){var t=this,e=t._self._c;return t.fa?e("i",{class:`fa fa-${t.fa}`,attrs:{"aria-hidden":"true"}}):t.fas?e("i",{class:`fas fa-${t.fas}`,attrs:{"aria-hidden":"true"}}):t.far?e("i",{class:`far fa-${t.far}`,attrs:{"aria-hidden":"true"}}):e("i",{class:`fab fa-${t.fab}`,attrs:{"aria-hidden":"true"}})},E=[],T={props:{fa:String,fas:String,far:String,fab:String},mounted(){}},Z=T,O=(0,u.Z)(Z,z,E,!1,null,"7fdf620e",null),L=O.exports,I=function(){var t=this,e=t._self._c;return t.selected?e("div",{staticClass:"popup"},[e("div",{staticClass:"content"},[e("button",{staticClass:"close",on:{click:t.closeWindow}},[e("Fa",{attrs:{fa:""}}),t._v(" "),e("a",[t._v("close")])],1),[e("div",{staticClass:"container-fluid"},[e("agile",{staticClass:"imgs",attrs:{dots:!0,navButtons:!0,centerMode:!0,slidesToShow:1,infinite:!0}},[t._l(t.selected.images,(function(t){return e("img",{key:t.img,staticClass:"slide",attrs:{src:t.img,alt:""}})})),e("template",{slot:"prevButton"},[e("a",[e("i",{staticClass:"fa fa-angle-left"})])]),e("template",{slot:"nextButton"},[e("a",[e("i",{staticClass:"fa fa-angle-right"})])])],2)],1)],e("div",{staticClass:"info"},[e("h3",[t._v(t._s(t.selected.title1))]),e("div",{staticClass:"tags"},t._l(t.selected.tags,(function(s){return e("span",{key:s},[t._v(t._s(s))])})),0),e("div",{staticClass:"tags links"},[t.selected.demo.length>1?e("a",{attrs:{href:t.selected.demo}},[t._v("Demo")]):t._e(),e("a",{attrs:{href:t.selected.source}},[t._v("Source")])]),e("div",{staticClass:"description"})])],2),e("div",{staticClass:"background",on:{click:t.closeWindow}})]):t._e()},F=[],H={components:{Fa:L,agile:a.I},props:{selected:Object,closeWindow:Function}},V=H,W=(0,u.Z)(V,I,F,!1,null,null,null),N=W.exports,q={components:{Card:D,Fa:L,PopUp:N},data:()=>({work:[{date:"2022 – Current",extra:"",title1:"Mond's Makes",ort:"redbubble.com",txt:"Graphic Design for Print On Demand"},{date:"2017 – 2020",extra:"",title1:"Elevated Relief",ort:"Dallas, TX",txt:" Graphic Design, Branding, Social Media Management"},{date:"2012 – Current",extra:"",title1:"Freelance",ort:"",txt:"Digital Artwork, Graphic Design, Device Repair, Music Production"}],education:[{date:"2011 – 2012",extra:"Graphic Design",title1:"NSULA",ort:"Natchitoches, LA",txt:""},{date:"2010 – 2011",extra:"Graphic Communications",title1:"The University of Houston",ort:"Houston, TX",txt:""},{date:"2006 – 2010",extra:"HS Diploma",title1:"DeSoto High School",ort:"DeSoto, TX",txt:""}],projects:[{id:0,images:[{img:"/gifs/NoteIt.gif"},{img:"/images/NoteIt.png"}],title1:"NoteIt Web App",tags:["HTML","Bootstrap","Python","Flask"],demo:"",source:"https://github.com/big-mond/NoteIt-Web-App"},{id:1,images:[{img:"/gifs/MovieApp.gif"},{img:"/images/MovieApp.png"}],title1:"Movie App ReactJS",tags:["HTML","ReactJS","CSS"],demo:"",source:"https://github.com/big-mond/Movie-App-ReactJS"},{id:2,images:[{img:"/gifs/VideoPlayer.gif"},{img:"/images/VideoPlayer.png"}],title1:"Web Video Player",tags:["HTML","JavaScript","CSS"],demo:"",source:"https://github.com/big-mond/Web-Video-Player"},{id:3,images:[{img:"/gifs/MusicPlayer.gif"},{img:"/images/MusicPlayer.png"}],title1:"Web Music Player",tags:["HTML","JavaScript","CSS"],demo:"",source:"https://github.com/big-mond/Web-Music-Player"}],selected:null,hide:"hide"}),mounted(){window.onscroll=this.lodash.debounce(this.afterScroll,5),this.afterScroll();let t=document.querySelectorAll('a[href^="#"]');for(let i of t)i.addEventListener("click",(t=>{let e=i.getAttribute("href"),s=document.querySelector(e);s.scrollIntoView({behavior:"smooth",block:"start"}),history.pushState(null,null,e),t.preventDefault()}));let e=new IntersectionObserver((t=>{t.forEach((t=>{console.log(t),t.target.classList.toggle("show",t.isIntersecting)}))})),s=document.querySelectorAll(".hide");s.forEach((t=>e.observe(t)))},methods:{select:function(t){this.selected=this.projects.find((e=>e.id===t)),document.body.style.overflow="hidden"},closePopUp(){this.selected=null,document.body.style.overflow="auto"},afterScroll(){let t=document.documentElement.scrollTop,e=200,s=document.querySelectorAll(".sidebuttons a");s.forEach((s=>{if(""==s.hash)return;let i=document.querySelector(s.hash);if(null!=i)if(i.offsetTop<=t+window.innerHeight&&i.offsetTop+i.offsetHeight>t+e){s.classList.add("current");let t=document.querySelectorAll(".current"),e=document.querySelector(".solid");null!=e&&e.classList.remove("solid"),t[0].classList.add("solid")}else s.classList.remove("current")}))}},props:{scrolledDown:Boolean}},B=q,G=(0,u.Z)(B,w,k,!1,null,"00b7dcce",null),R=G.exports,U=function(){var t=this;t._self._c;return t._m(0)},X=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"hero"},[e("div",{staticClass:"content"})])}],$={},J=$,Y=(0,u.Z)(J,U,X,!1,null,"55f24837",null),K=Y.exports,Q={name:"App",components:{Navbar:f,MainView:R,Hero:K,Sketch:y},data:()=>({size:"xl",scrolledDown:!1}),mounted(){window.onresize=this.lodash.debounce(this.detectSize,50),window.addEventListener("scroll",this.lodash.debounce(this.detectScroll,5)),this.detectSize()},methods:{detectSize(){const t=window.innerWidth;let e={};switch(!0){case t<425:e={size:"mobile",sizeint:0,range:[0,425],includes:["mobile"]};break;case t<680:e={size:"s",sizeint:426,range:[426,680],includes:["mobile","s"]};break;case t<1024:e={size:"m",sizeint:681,range:[681,1024],includes:["mobile","s","m"]};break;case t<1300:e={size:"l",sizeint:1025,range:[1025,1300],includes:["mobile","s","m","l"]};break;case t<1600:e={size:"xl",sizeint:1301,range:[1301,1600],includes:["mobile","s","m","l","xl"]};break;default:e={size:"xl",sizeint:1600,range:[1301,1600],includes:["mobile","s","m","l","xl"]}}this.size={width:t,size:e.size,sizeint:e.sizeint,range:e.range,includes:e.includes}},detectScroll(){this.scrolledDown=window.scrollY>0}}},tt=Q,et=(0,u.Z)(tt,o,n,!1,null,"d004ae76",null),st=et.exports,it=s(2631);i.ZP.use(it.Z);const at=[{path:"/"},{path:"/about",name:"About",component:()=>s.e(443).then(s.bind(s,8913))}],ot=new it.Z({routes:at});var nt=ot,rt=s(3822);i.ZP.use(rt.ZP);var lt=new rt.ZP.Store({state:{},mutations:{},actions:{},modules:{}}),ct=s(8805),dt=s.n(ct),ut=s(4806),ht=s.n(ut),ft=s(3204);i.ZP.use(dt(),{name:"custom",lodash:ht()}),i.ZP.use("agile",a.Z),i.ZP.config.productionTip=!1,i.ZP.component("font-awesome-icon",ft.GN),i.ZP.component("fa",L),new i.ZP({router:nt,store:lt,render:t=>t(st)}).$mount("#app")}},e={};function s(i){var a=e[i];if(void 0!==a)return a.exports;var o=e[i]={id:i,loaded:!1,exports:{}};return t[i].call(o.exports,o,o.exports,s),o.loaded=!0,o.exports}s.m=t,function(){var t=[];s.O=function(e,i,a,o){if(!i){var n=1/0;for(d=0;d<t.length;d++){i=t[d][0],a=t[d][1],o=t[d][2];for(var r=!0,l=0;l<i.length;l++)(!1&o||n>=o)&&Object.keys(s.O).every((function(t){return s.O[t](i[l])}))?i.splice(l--,1):(r=!1,o<n&&(n=o));if(r){t.splice(d--,1);var c=a();void 0!==c&&(e=c)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[i,a,o]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,i){return s.f[i](t,e),e}),[]))}}(),function(){s.u=function(t){return"js/about.4e36404b.js"}}(),function(){s.miniCssF=function(t){}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="portfolio1:";s.l=function(i,a,o,n){if(t[i])t[i].push(a);else{var r,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==i||u.getAttribute("data-webpack")==e+o){r=u;break}}r||(l=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,s.nc&&r.setAttribute("nonce",s.nc),r.setAttribute("data-webpack",e+o),r.src=i),t[i]=[a];var h=function(e,s){r.onerror=r.onload=null,clearTimeout(f);var a=t[i];if(delete t[i],r.parentNode&&r.parentNode.removeChild(r),a&&a.forEach((function(t){return t(s)})),e)return e(s)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=h.bind(null,r.onerror),r.onload=h.bind(null,r.onload),l&&document.head.appendChild(r)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){s.p="/"}(),function(){var t={143:0};s.f.j=function(e,i){var a=s.o(t,e)?t[e]:void 0;if(0!==a)if(a)i.push(a[2]);else{var o=new Promise((function(s,i){a=t[e]=[s,i]}));i.push(a[2]=o);var n=s.p+s.u(e),r=new Error,l=function(i){if(s.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var o=i&&("load"===i.type?"missing":i.type),n=i&&i.target&&i.target.src;r.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",r.name="ChunkLoadError",r.type=o,r.request=n,a[1](r)}};s.l(n,l,"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,o,n=i[0],r=i[1],l=i[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(a in r)s.o(r,a)&&(s.m[a]=r[a]);if(l)var d=l(s)}for(e&&e(i);c<n.length;c++)o=n[c],s.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return s.O(d)},i=self["webpackChunkportfolio1"]=self["webpackChunkportfolio1"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(5571)}));i=s.O(i)})();
//# sourceMappingURL=app.a3300f55.js.map