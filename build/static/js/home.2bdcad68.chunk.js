"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[962],{285:(e,a,n)=>{n.d(a,{A:()=>o});var i=n(483),r=n(764),s=n.n(r),t=(n(841),n(723));const o=()=>{const e=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const a=s().map(e.current,{center:[56.008412,92.86906],zoom:15});return s().tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(a),s().marker([56.008412,92.86906]).addTo(a).bindPopup("Taimyr Fuel Company Location").openPopup(),()=>{a.remove()}}),[]),(0,t.jsx)("div",{ref:e,className:"location-map","aria-label":"Interactive map showing Taimyr Fuel Company's location"})}},601:(e,a,n)=>{n.r(a),n.d(a,{default:()=>c});var i=n(483),r=n(285),s=n(723);const t=(0,i.lazy)((()=>n.e(300).then(n.bind(n,300)))),o=(0,i.lazy)((()=>n.e(209).then(n.bind(n,209)))),l=[{id:"hero",image:"/assets/card1.webp",ariaLabel:"Welcome section"},{id:"mission",image:"/assets/bg2.webp",ariaLabel:"Our mission and vision"},{id:"about",image:"/assets/bg3.webp",ariaLabel:"About our company"},{id:"services",image:"",ariaLabel:"Our services"},{id:"ratings",image:"",ariaLabel:"Customer ratings"},{id:"location",image:"",ariaLabel:"Our location"},{id:"footer",image:"",ariaLabel:"Footer"}];function c(){const[e,a]=(0,i.useState)([]),[n,c]=(0,i.useState)(Array(l.length).fill(!1)),d=(0,i.useRef)([]);return(0,i.useEffect)((()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>{const i=d.current.indexOf(e.target);e.isIntersecting&&(a((e=>[...new Set([...e,i])])),!n[i]&&l[i].image&&c((e=>{const a=[...e];return a[i]=!0,a})))}))}),{threshold:.1,rootMargin:"50px"}),i=d.current.filter(Boolean);return i.forEach((a=>e.observe(a))),()=>{i.forEach((a=>e.unobserve(a))),e.disconnect()}}),[n]),(0,s.jsx)("main",{children:(0,s.jsx)("article",{className:"home-content",children:(0,s.jsx)("div",{className:"content-container",children:l.map(((a,l)=>(0,s.jsxs)("section",{ref:e=>d.current[l]=e,className:"section ".concat(e.includes(l)?"active":""),"aria-label":a.ariaLabel,style:{backgroundImage:n[l]&&a.image?"url(".concat(a.image,")"):"none",backgroundSize:"cover",backgroundPosition:"center"},children:[0===l&&(0,s.jsxs)("div",{className:"content-1 text-content",children:[(0,s.jsx)("h1",{children:"TAIMYR FUEL"}),(0,s.jsxs)("h2",{children:["Pioneering Energy ",(0,s.jsx)("span",{children:"Solutions"})]}),(0,s.jsx)("h3",{children:"in Krasnoyarsk"}),(0,s.jsx)("button",{"aria-label":"Learn more about our company",className:"focus:ring-2 hover:bg-opacity-90",children:"Learn More"}),(0,s.jsx)("p",{children:"At Taimyr Fuel Company, we are a premier oil refining and storage facility located in the heart of Kazakhstan, strategically positioned to fulfill the region's increasing energy requirements."})]}),1===l&&(0,s.jsx)("div",{className:"content-2-wrapper text-content",children:(0,s.jsxs)("div",{className:"content-2 ",children:[(0,s.jsxs)("div",{className:"card-wrapper",children:[(0,s.jsxs)("div",{className:"card-title",children:[(0,s.jsx)("h1",{children:"01"}),(0,s.jsx)("h3",{children:"Our Mission"})]}),(0,s.jsx)("div",{className:"card-content ",children:(0,s.jsx)("p",{children:"Our mission is to provide top-tier oil refining, storage, and logistics solutions while fostering sustainable development within the energy industry. We are dedicated to achieving excellence and ensuring safety."})})]}),(0,s.jsxs)("div",{className:"card-wrapper",children:[(0,s.jsxs)("div",{className:"card-title",children:[(0,s.jsx)("h1",{children:"02"}),(0,s.jsx)("h3",{children:"Our Vision"})]}),(0,s.jsx)("div",{className:"card-content",children:(0,s.jsx)("p",{children:"Our vision is to become a premier oil refining and storage center in Central Asia, globally acknowledged for our operational excellence, environmental sustainability, and technological advancements."})})]}),(0,s.jsxs)("div",{className:"card-wrapper",children:[(0,s.jsxs)("div",{className:"card-title",children:[(0,s.jsx)("h1",{children:"03"}),(0,s.jsx)("h3",{children:"Our Goal"})]}),(0,s.jsx)("div",{className:"card-content",children:(0,s.jsx)("p",{children:"Global Presence - To broaden our market footprint and establish strategic alliances that enable us to effectively cater to various markets throughout Europe, Asia, and the Middle East."})})]})]})}),2===l&&(0,s.jsxs)("div",{className:"content-3 text-content",children:[(0,s.jsx)("h1",{children:"Fostering Innovation and Excellence in Krasnoyarsk\u2019s Oil Sector"}),(0,s.jsx)("p",{children:"Taimyr Fuel Company is a leading oil Mandate facilitator situated in Krasnoyarsk. As a vital player in the region's energy landscape, we focus on bringing buyers and seller company supplying high-quality petroleum products from a reputable refining company to satisfy both local and global demands. Our advantageous location, state-of-the-art technology, and dedication to sustainable energy practices establish us as a frontrunner in oil."}),(0,s.jsx)("button",{children:"Learn More"})]}),3===l&&(0,s.jsxs)("div",{className:"content-4  text-content d-flex  flex-column px-4 h-100   ",children:[(0,s.jsxs)("h1",{children:[(0,s.jsx)("span",{className:"tick",children:"____"}),"WHAT WE DO"]}),(0,s.jsx)("h3",{children:"Services What we Provide"}),(0,s.jsxs)("div",{className:"card-container",children:[(0,s.jsx)("div",{className:"service-bg",children:" "}),(0,s.jsxs)("div",{className:"service-text",children:[(0,s.jsx)("h3",{children:"Oil Exploration"}),(0,s.jsx)("p",{children:"At Taimyr Fuel Company, we are committed to enhancing the exploration and production of oil to address the increasing global energy demands. Our Exploration & Production (E&P) services concentrate on identifying, extracting, and supplying high-quality crude oil from Krasnoyarsk's abundant natural reserves."})]})]})]}),4===l&&(0,s.jsx)(i.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading ratings..."}),children:(0,s.jsx)("div",{className:"content-x text-content",children:(0,s.jsx)(t,{})})}),5===l&&(0,s.jsxs)("div",{className:"content-6 text-content",children:[(0,s.jsx)("h2",{children:"Our Location"}),(0,s.jsx)("div",{className:"frame-wrapper","aria-label":"Google Maps showing our location",children:(0,s.jsx)(i.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading map..."}),children:(0,s.jsx)(r.A,{})})}),(0,s.jsxs)("div",{className:"subscribe-wrapper",role:"form","aria-label":"Newsletter subscription",children:[(0,s.jsx)("h3",{children:"Subscribe For Our Newsletter"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"email",className:"sr-only",children:"Email address"}),(0,s.jsx)("input",{type:"email",id:"email",placeholder:"Enter Your Email","aria-label":"Enter your email for newsletter"}),(0,s.jsx)("button",{type:"submit","aria-label":"Subscribe to newsletter",children:"Subscribe"})]})]})]}),6===l&&(0,s.jsx)(i.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading footer..."}),children:(0,s.jsx)("div",{className:"content-7 text-content",children:(0,s.jsx)(o,{})})})]},a.id)))})})})}}}]);
//# sourceMappingURL=home.2bdcad68.chunk.js.map