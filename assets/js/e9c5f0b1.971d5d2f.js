"use strict";(self.webpackChunkspec_untp_website=self.webpackChunkspec_untp_website||[]).push([[7788],{5318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,v=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(v,o(o({ref:t},u),{},{components:r})):n.createElement(v,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5611:(e,t,r)=>{r.d(t,{ZP:()=>o});var n=r(5773),i=(r(7378),r(5318));const a={toc:[]};function o(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses.")))}o.isMDXComponent=!0},6452:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(5773),i=(r(7378),r(5318)),a=r(5611);const o={sidebar_position:45,title:"Anti-Counterfeiting"},s=void 0,c={unversionedId:"design-patterns/Counterfeiting",id:"design-patterns/Counterfeiting",title:"Anti-Counterfeiting",description:"Overview",source:"@site/docs/design-patterns/Counterfeiting.md",sourceDirName:"design-patterns",slug:"/design-patterns/Counterfeiting",permalink:"/spec-untp/docs/design-patterns/Counterfeiting",draft:!1,editUrl:"https://github.com/uncefact/spec-untp/edit/main/website/docs/design-patterns/Counterfeiting.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{sidebar_position:45,title:"Anti-Counterfeiting"},sidebar:"tutorialSidebar",previous:{title:"Transparency Graphs",permalink:"/spec-untp/docs/design-patterns/TrustGraphs"},next:{title:"Mass Balance",permalink:"/spec-untp/docs/design-patterns/MassBalance"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Product Serial DID",id:"product-serial-did",level:2},{value:"Product Serial VC",id:"product-serial-vc",level:2},{value:"Brand Trust Root",id:"brand-trust-root",level:2},{value:"Public Verification",id:"public-verification",level:2},{value:"Private Acquittal",id:"private-acquittal",level:2}],p={toc:u};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.ZP,{mdxType:"Disclaimer"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"As the value of genuinely sustainable goods increases, so do the incentives to sell fake goods as the real thing. UNTP defines a simple and decentralised anti-counterfeiting protocol that can be implemented by any producer at very low cost. It builds upon the W3C DID standard by issuing a unique DID (and corresponding keypair) for every serialised (individual or batch) product. The DID (and therefore the public key) is discoverable from the product serial number using the standard link resolver protocol. The item/batch level DID is cryptographically linked to the product class level DID The private key is discoverable from a QR code hidden inside the product packaging. Scanning the QR provides the necessary key to update the individual serialised product public status to indicate consumption. Attackers that copy genuine serial numbers will find that their products are quickly identifiable as fakes. Attackers that try to create new serial numbers will not be able to create valid links to the genuine product class. The UNTP anti-counterfeiting protocol provides additional value/incentive for UNTP uptake beyond ESG integrity."),(0,i.kt)("h2",{id:"product-serial-did"},"Product Serial DID"),(0,i.kt)("h2",{id:"product-serial-vc"},"Product Serial VC"),(0,i.kt)("h2",{id:"brand-trust-root"},"Brand Trust Root"),(0,i.kt)("h2",{id:"public-verification"},"Public Verification"),(0,i.kt)("h2",{id:"private-acquittal"},"Private Acquittal"))}d.isMDXComponent=!0}}]);