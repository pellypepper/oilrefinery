"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[268],{268:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var n=a(540);const r=()=>{const[e,t]=(0,n.useState)(!1),[a,r]=(0,n.useState)(!1);(0,n.useEffect)((()=>{const e=new IntersectionObserver((a=>{let[n]=a;n.isIntersecting&&(t(!0),e.unobserve(n.target))}),{threshold:.1}),a=document.getElementById("map-container");return a&&e.observe(a),()=>{a&&e.unobserve(a)}}),[]);return n.createElement("div",{id:"map-container",className:"frame-wrapper relative","aria-label":"Google Maps showing our location"},e&&n.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2230.5923996872893!2d92.86905987669368!3d56.00841267317989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5cd7ae39587ca113%3A0xbbad0e3605e3c0e6!2sBograda%20St%2C%20Krasnoyarsk%2C%20Krasnoyarskiy%20kray%2C%20Russia%2C%20660049!5e0!3m2!1sen!2suk!4v1736279444174!5m2!1sen!2suk",className:"w-100 frame-box",style:{border:0,opacity:a?1:0,transition:"opacity 0.3s ease-in-out"},allowFullScreen:!0,loading:"lazy",title:"Our location on Google Maps",referrerPolicy:"no-referrer-when-downgrade",onLoad:()=>{r(!0)}}),e&&!a&&n.createElement("div",{className:"absolute inset-0 bg-gray-100 flex items-center justify-center"},n.createElement("div",{className:"text-gray-600"},"Loading map...")))},l=(0,n.lazy)((()=>a.e(802).then(a.bind(a,802)))),i=(0,n.lazy)((()=>a.e(450).then(a.bind(a,450))));const s=[{id:"hero",image:"/assets/card1.webp",ariaLabel:"Welcome section"},{id:"mission",image:"/assets/bg2.webp",ariaLabel:"Our mission and vision"},{id:"about",image:"/assets/bg3.webp",ariaLabel:"About our company"},{id:"services",image:"",ariaLabel:"Our services"},{id:"ratings",image:"",ariaLabel:"Customer ratings"},{id:"location",image:"",ariaLabel:"Our location"},{id:"footer",image:"",ariaLabel:"Footer"}];function o(){const[e,t]=(0,n.useState)([]),[a,o]=(0,n.useState)(Array(s.length).fill(!1)),c=(0,n.useRef)([]),[m,u]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>{const n=c.current.indexOf(e.target);e.isIntersecting&&(u(!0),t((e=>[...new Set([...e,n])])),!a[n]&&s[n].image&&o((e=>{const t=[...e];return t[n]=!0,t})))}))}),{threshold:.1,rootMargin:"50px"}),n=c.current.filter(Boolean);return n.forEach((t=>e.observe(t))),()=>{n.forEach((t=>e.unobserve(t))),e.disconnect()}}),[a]),(0,n.useEffect)((()=>{const e=function(e,t){let a,n;return function(){for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];const s=this;n?(clearTimeout(a),a=setTimeout((()=>{Date.now()-n>=t&&(e.apply(s,l),n=Date.now())}),t-(Date.now()-n))):(e.apply(s,l),n=Date.now())}}((()=>{}),200);return window.addEventListener("scroll",e,{passive:!0}),()=>{window.removeEventListener("scroll",e)}}),[]),n.createElement("main",null,n.createElement("article",{className:"home-content"},n.createElement("div",{className:"content-container"},s.map(((t,s)=>n.createElement("section",{key:t.id,ref:e=>c.current[s]=e,className:"section ".concat(e.includes(s)?"active":""),"aria-label":t.ariaLabel,"aria-hidden":!e.includes(s),style:{backgroundImage:a[s]&&t.image?"url(".concat(t.image,")"):"none",backgroundSize:"cover",backgroundPosition:"center"}},0===s&&n.createElement("div",{className:"content-1 text-content"},n.createElement("h1",null,"TAIMYR FUEL"),n.createElement("h2",null,"Pioneering Energy ",n.createElement("span",null,"Solutions")),n.createElement("h3",null,"in Krasnoyarsk"),n.createElement("button",{"aria-label":"Learn more about our company",className:"focus:ring-2 hover:bg-opacity-90"},"Learn More"),n.createElement("p",null,"At Taimyr Fuel Company, we are a premier oil refining and storage facility located in the heart of Kazakhstan, strategically positioned to fulfill the region's increasing energy requirements.")),1===s&&n.createElement("div",{className:"content-2-wrapper text-content"},n.createElement("div",{className:"content-2 "},n.createElement("div",{className:"card-wrapper"},n.createElement("div",{className:"card-title"},n.createElement("h1",null,"01"),n.createElement("h3",null,"Our Mission")),n.createElement("div",{className:"card-content "},n.createElement("p",null,"Our mission is to provide top-tier oil refining, storage, and logistics solutions while fostering sustainable development within the energy industry. We are dedicated to achieving excellence and ensuring safety."))),n.createElement("div",{className:"card-wrapper"},n.createElement("div",{className:"card-title"},n.createElement("h1",null,"02"),n.createElement("h3",null,"Our Vision")),n.createElement("div",{className:"card-content"},n.createElement("p",null,"Our vision is to become a premier oil refining and storage center in Central Asia, globally acknowledged for our operational excellence, environmental sustainability, and technological advancements."))),n.createElement("div",{className:"card-wrapper"},n.createElement("div",{className:"card-title"},n.createElement("h1",null,"03"),n.createElement("h3",null,"Our Goal")),n.createElement("div",{className:"card-content"},n.createElement("p",null,"Global Presence - To broaden our market footprint and establish strategic alliances that enable us to effectively cater to various markets throughout Europe, Asia, and the Middle East."))))),2===s&&n.createElement("div",{className:"content-3 text-content"},n.createElement("h1",null,"Fostering Innovation and Excellence in Krasnoyarsk’s Oil Sector"),n.createElement("p",null,"Taimyr Fuel Company is a leading oil Mandate facilitator situated in Krasnoyarsk. As a vital player in the region's energy landscape, we focus on bringing buyers and seller company supplying high-quality petroleum products from a reputable refining company to satisfy both local and global demands. Our advantageous location, state-of-the-art technology, and dedication to sustainable energy practices establish us as a frontrunner in oil."),n.createElement("button",null,"Learn More")),3===s&&n.createElement("div",{className:"content-4  text-content d-flex  flex-column px-4 h-100   "},n.createElement("h1",null,n.createElement("span",{className:"tick"},"____"),"WHAT WE DO"),n.createElement("h3",null,"Services What we Provide"),n.createElement("div",{className:"card-container"},n.createElement("div",{className:"service-bg"}," "),n.createElement("div",{className:"service-text"},n.createElement("h3",null,"Oil Exploration"),n.createElement("p",null,"At Taimyr Fuel Company, we are committed to enhancing the exploration and production of oil to address the increasing global energy demands. Our Exploration & Production (E&P) services concentrate on identifying, extracting, and supplying high-quality crude oil from Krasnoyarsk's abundant natural reserves.")))),4===s&&n.createElement(n.Suspense,{fallback:n.createElement("div",null,"Loading ratings...")},n.createElement("div",{className:"content-x text-content"},n.createElement(l,null))),5===s&&n.createElement("div",{className:"content-6 text-content"},n.createElement("h2",null,"Our Location"),n.createElement("div",{className:"frame-wrapper","aria-label":"Google Maps showing our location"},n.createElement(n.Suspense,{fallback:n.createElement("div",null,"Loading map...")},m&&n.createElement(r,null))),n.createElement("div",{className:"subscribe-wrapper",role:"form","aria-label":"Newsletter subscription"},n.createElement("h3",null,"Subscribe For Our Newsletter"),n.createElement("div",null,n.createElement("label",{htmlFor:"email",className:"sr-only"},"Email address"),n.createElement("input",{type:"email",id:"email",placeholder:"Enter Your Email","aria-label":"Enter your email for newsletter"}),n.createElement("button",{type:"submit","aria-label":"Subscribe to newsletter"},"Subscribe")))),6===s&&n.createElement(n.Suspense,{fallback:n.createElement("div",null,"Loading footer...")},n.createElement("div",{className:"content-7 text-content"},n.createElement(i,null)))))))))}}}]);