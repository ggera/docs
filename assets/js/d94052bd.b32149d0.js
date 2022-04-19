"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[546],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),p=a,m=h["".concat(s,".").concat(p)]||h[p]||d[p]||r;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},67548:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var i=n(83117),a=n(80102),r=(n(67294),n(3905)),o=["components"],l={},s="DID",u={unversionedId:"chain/did",id:"chain/did",title:"DID",description:"What is a DID?",source:"@site/docs/chain/did.md",sourceDirName:"chain",slug:"/chain/did",permalink:"/docs/chain/did",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/chain/did.md",tags:[],version:"current",frontMatter:{},sidebar:"chain",previous:{title:"Become a delegator",permalink:"/docs/chain/delegator"},next:{title:"How to set up a full node",permalink:"/docs/chain/fullnode"}},c=[{value:"What is a DID?",id:"what-is-a-did",children:[],level:2},{value:"Registering a DID",id:"registering-a-did",children:[],level:2},{value:"Using a DID",id:"using-a-did",children:[],level:2},{value:"Updating a DID",id:"updating-a-did",children:[],level:2},{value:"What about the deposit?",id:"what-about-the-deposit",children:[],level:2}],d={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"did"},"DID"),(0,r.kt)("h2",{id:"what-is-a-did"},"What is a DID?"),(0,r.kt)("p",null,"In KILT a DID is a decentralized identifier that the user owns and controls.\nIt consists of a unique set of keys that can be used for different operations on the blockchain.\nFor an in-depth explanation see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/kilt-did-driver/blob/master/docs/did-spec/spec.md"},"KILT DID spec"),"."),(0,r.kt)("p",null,'A DID may be a "light" DID, which is not stored on-chain, or a "full" on-chain DID.\nA light DID is issued by default, with the keys stored locally on your device.\nBy upgrading this to a full DID registered on the blockchain, all the keys associated with it can be retrieved from the KILT blockchain storage.'),(0,r.kt)("p",null,"A full DID can then be used to perform certain on-chain actions which include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Writing CTypes to the chain"),(0,r.kt)("li",{parentName:"ul"},"Writing attestations to the chain"),(0,r.kt)("li",{parentName:"ul"},"Setting delegations"),(0,r.kt)("li",{parentName:"ul"},"Doing key rotations on the DID keys")),(0,r.kt)("h2",{id:"registering-a-did"},"Registering a DID"),(0,r.kt)("p",null,"A full DID is needed if the user wants to become an attester or wants to setup delegations.\nA full DID also allows the user to embed a list of URLs, known as service endpoints, into the DID document so that they can be retrieved from the chain as part of the DID document.\nTo create a full DID the user first has to create a set of keys and service endpoints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"one authentication key for signing extrinsics from your DID"),(0,r.kt)("li",{parentName:"ul"},"zero or more key agreement keys for encrypting messages that are sent to you"),(0,r.kt)("li",{parentName:"ul"},"one attestation key for signing attestations (optional)"),(0,r.kt)("li",{parentName:"ul"},"one delegation key for authorizing delegations (optional)"),(0,r.kt)("li",{parentName:"ul"},"service endpoints that point to external hostings for others to find (optional)")),(0,r.kt)("p",null,"With those keys prepared and the service endpoints set up, they are ready to write the DID to the KILT blockchain.\nThe user then has to create the ",(0,r.kt)("inlineCode",{parentName:"p"},"did::create")," extrinsic and sign it with any KILT account that has enough funding to pay both the transaction fees and the DID deposit.\nThe extrinsic consists of"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"DidCreationDetails")," object containing keys, service endpoints and the account id of the submitter for the creation"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"DidSignature")," which is a signature using your authentication key over the scale encoded ",(0,r.kt)("inlineCode",{parentName:"li"},"DidCreationDetails")," from above"),(0,r.kt)("li",{parentName:"ul"},"A regular signature authenticating the sender of the extrinsic")),(0,r.kt)("p",null,"The DID owner and the submitter can be two different parties.\nThis allows the creation of a DID without having to pay any fees or deposits.\nBeware that this also means that the DID creator gives up some power over the DID: The submitter who pays the deposit will be able to delete the DID from the blockchain and claim back its deposit.\nOnce the ",(0,r.kt)("inlineCode",{parentName:"p"},"did::create")," extrinsic is submitted and executed, the DID is written to the chain."),(0,r.kt)("h2",{id:"using-a-did"},"Using a DID"),(0,r.kt)("p",null,"Once the DID is successfully registered on chain, it can be used to perform certain on-chain actions that are not possible to do with a regular account.\nThis includes handling of attestations and ctypes, setting up trust hierarchies through delegations, managing web3 names and much more."),(0,r.kt)("p",null,'Those actions need to be signed by the DID before they can be submitted to chain by any account that the DID owner specifies when signing.\nWe are naming those actions "DID-Calls". To submit those there is a special extrinsic called ',(0,r.kt)("inlineCode",{parentName:"p"},"submit_did_call"),". "),(0,r.kt)("p",null,"The process of doing any DID-Call is always the same:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Construct the actual call you want to execute including all arguments of that extrinsic."),(0,r.kt)("li",{parentName:"ul"},"Wrap the call in a ",(0,r.kt)("inlineCode",{parentName:"li"},"DidAuthorizedCallOperation")," together with",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Senders DID to indicate who wants this operation to happen"),(0,r.kt)("li",{parentName:"ul"},"Senders DID tx_counter + 1 to prevent replay attacks"),(0,r.kt)("li",{parentName:"ul"},"Current block number to prevent the operation to be submitted too far in the future"),(0,r.kt)("li",{parentName:"ul"},"Account of the submitter to allow the DID owner to specify who is allowed to submit"))),(0,r.kt)("li",{parentName:"ul"},"Create a signature over the ",(0,r.kt)("inlineCode",{parentName:"li"},"DidAuthorizedCallOperation")," by scale-encoding it and signing it using the appropriate key",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Most operations require the authentication key of the DID to be used"),(0,r.kt)("li",{parentName:"ul"},"Managing attestations requires the attestation key"),(0,r.kt)("li",{parentName:"ul"},"Managing delegations requires the delegation key"))),(0,r.kt)("li",{parentName:"ul"},"Construct the ",(0,r.kt)("inlineCode",{parentName:"li"},"submit_did_call")," extrinsic consisting of",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"DidAuthorizedCallOperation")),(0,r.kt)("li",{parentName:"ul"},"The DID signature"))),(0,r.kt)("li",{parentName:"ul"},"Pass the call over to the submitter who can now sign and submit it to the chain",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The submitter will have to pay for all fees and deposits that result from the operation"),(0,r.kt)("li",{parentName:"ul"},"In general the submitter will have the power to delete all on-chain objects to reclaim its deposit"))),(0,r.kt)("li",{parentName:"ul"},"The chain now checks that",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The submitters signature is correct"),(0,r.kt)("li",{parentName:"ul"},"The submitter is the one specified in the ",(0,r.kt)("inlineCode",{parentName:"li"},"DidAuthorizedCallOperation")),(0,r.kt)("li",{parentName:"ul"},"The DID signature is correct"),(0,r.kt)("li",{parentName:"ul"},"The tx_counter is valid (current tx_counter + 1)"),(0,r.kt)("li",{parentName:"ul"},"The blocknumber is not older than an hour (given 12s block time)"))),(0,r.kt)("li",{parentName:"ul"},"After that the actual call gets dispatched with a special ",(0,r.kt)("inlineCode",{parentName:"li"},"DidOrigin"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This allows the executer of the actual call to get the DID and the account of the submitter")))),(0,r.kt)("h2",{id:"updating-a-did"},"Updating a DID"),(0,r.kt)("p",null,"There is a set of extrinsics available to update a full DID.\nThese are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set_authentication_key")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set_delegation_key")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"remove_delegation_key")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set_attestation_key")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"remove_attestation_key")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"add_key_agreement_key")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"remove_key_agreement_key")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"add_service_endpoint")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"remove_service_endpoint")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"delete"))),(0,r.kt)("p",null,"All of them have to be authenticated using the DID that is updated following the process described above. "),(0,r.kt)("h2",{id:"what-about-the-deposit"},"What about the deposit?"),(0,r.kt)("p",null,"When writing a DID to the chain the submitter of the extrinsic has to pay a deposit, currently 2 KILT.\nThis is to incentivize deleting unused DIDs to save storage on the chain.\nThe deposit is always bound to the account that submitted the extrinsic to create the DID, and not to the DID itself.\nConsequently there are also two ways of reclaiming the deposit:"),(0,r.kt)("p",null,"1) The DID owner decides to delete the DID using the ",(0,r.kt)("inlineCode",{parentName:"p"},"did::delete")," extrinsic.\nThis call needs to be authorized by the DID and can therefore be submitted by any account.\nDespite the fact that this account can differ from the deposit owner, the deposit will always be reimbursed to the account that paid for it.\n2) The deposit owner can decide to claim their deposit back using the ",(0,r.kt)("inlineCode",{parentName:"p"},"did::reclaim_deposit")," extrinsic.\nThis will also cause the DID to be fully deleted but it doesn't require a signature from the DID.\nOnly the signature of the account that created the DID is needed for this."))}h.isMDXComponent=!0}}]);