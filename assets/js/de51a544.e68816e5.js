"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[406],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5087:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],l={id:"claimer",title:"\ud83d\udc64 Claimer"},c=void 0,s={unversionedId:"sdk/workshop/claimer/claimer",id:"sdk/workshop/claimer/claimer",title:"\ud83d\udc64 Claimer",description:"In this section you will walk though all processes done by the Claimer.",source:"@site/docs/sdk/1-workshop/04-claimer/index.md",sourceDirName:"sdk/1-workshop/04-claimer",slug:"/sdk/workshop/claimer/",permalink:"/docs/sdk/workshop/claimer/",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/sdk/1-workshop/04-claimer/index.md",tags:[],version:"current",frontMatter:{id:"claimer",title:"\ud83d\udc64 Claimer"},sidebar:"sdk",previous:{title:"CType",permalink:"/docs/sdk/workshop/attester/ctype"},next:{title:"DID",permalink:"/docs/sdk/workshop/claimer/did"}},p=[{value:"Folder Structure",id:"folder-structure",children:[],level:2}],u={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this section you will walk though all processes done by the ",(0,o.kt)("span",{class:"label-role claimer"},"Claimer"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First step is to ",(0,o.kt)("a",{parentName:"li",href:"./did"},"create a DID")," which is the identity that is used to interact with ",(0,o.kt)("span",{class:"label-role attester"},"Attesters")," and ",(0,o.kt)("span",{class:"label-role verifier"},"Verifiers"),"."),(0,o.kt)("li",{parentName:"ol"},"Next we will create a claim, request a credential and present it to a ",(0,o.kt)("span",{class:"label-role verifier"},"Verifier"))),(0,o.kt)("h2",{id:"folder-structure"},"Folder Structure"),(0,o.kt)("p",null,"Create the following files in the ",(0,o.kt)("span",{class:"label-role claimer"},"Claimer")," folder.\nThis folders serves to mimic a ",(0,o.kt)("span",{class:"label-role claimer"},"Claimer"),"'s perspective."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u2514\u2500 kilt-rocks/ # project\n  \u2514\u2500 claimer/ # all claimer code\n    \u251c\u2500 createClaim.ts # creates a claim\n    \u251c\u2500 createPresentation.ts # creates a presentation for verifiers\n    \u251c\u2500 generateKeypairs.ts # create keypairs for the light DID\n    \u251c\u2500 generateLightDid.ts # create the light DID for the claimer\n    \u2514\u2500 generateRequest.ts # create the request for attestation that is sent to the attester\n")))}d.isMDXComponent=!0}}]);