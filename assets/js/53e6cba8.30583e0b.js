"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[800],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return u}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),g=d(n),u=a,p=g["".concat(s,".").concat(u)]||g[u]||c[u]||i;return n?o.createElement(p,r(r({ref:t},h),{},{components:n})):o.createElement(p,r({ref:t},h))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},78856:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return h},default:function(){return g}});var o=n(83117),a=n(80102),i=(n(67294),n(3905)),r=["components"],l={id:"delegations",title:"Delegation Hierarchies and Delegated Attestations"},s=void 0,d={unversionedId:"sdk/core-feature/delegations",id:"sdk/core-feature/delegations",title:"Delegation Hierarchies and Delegated Attestations",description:"KILT allows attesters to delegate their attestation rights to others, giving them permission to attest in their name, relying on their reputation. For example, an organisation \u2013 the attester \u2013 can delegate members of staff to attest in the name of the company. Attesters can also build complex delegation hierarchies by allowing delegates to delegate further.",source:"@site/docs/sdk/0-core-feature/7_delegations.md",sourceDirName:"sdk/0-core-feature",slug:"/sdk/core-feature/delegations",permalink:"/docs/sdk/core-feature/delegations",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/sdk/0-core-feature/7_delegations.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"delegations",title:"Delegation Hierarchies and Delegated Attestations"},sidebar:"sdk",previous:{title:"Verification",permalink:"/docs/sdk/core-feature/verification"},next:{title:"\ud83d\udc4b\ud83c\udffb Welcome",permalink:"/docs/sdk/workshop/welcome"}},h=[{value:"Creating a DelegationRootNode",id:"creating-a-delegationrootnode",children:[],level:2},{value:"Creating a DelegationNode",id:"creating-a-delegationnode",children:[],level:2},{value:"Making a Delegated Attestation",id:"making-a-delegated-attestation",children:[],level:2},{value:"Revoking a Delegated Attestation",id:"revoking-a-delegated-attestation",children:[],level:2},{value:"Delegated Attestation",id:"delegated-attestation",children:[],level:2},{value:"Revoking a DelegationNode",id:"revoking-a-delegationnode",children:[],level:2},{value:"Revoking a DelegationRootNode",id:"revoking-a-delegationrootnode",children:[],level:2}],c={toc:h};function g(e){var t=e.components,l=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"KILT allows attesters to delegate their attestation rights to others, giving them permission to attest in their name, relying on their reputation. For example, an organisation \u2013 the attester \u2013 can delegate members of staff to attest in the name of the company. Attesters can also build complex delegation hierarchies by allowing delegates to delegate further."),(0,i.kt)("p",null,"Attesters retain full authority over the delegations and attestations issued by a (sub-)delegate, which allows them to revoke any delegation or attestation issued to a branch in the delegation hierarchy that originates from them. In this way, any employee who leaves the company can have their rights withdrawn."),(0,i.kt)("p",null,"To enable this functionality, KILT represents these permissions with interlinked delegation nodes stored on the blockchain:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"A DelegationRootNode")," establishes a new delegation hierarchy or tree. This is created and owned by the delegating Attester. Because a delegation tree is always specific to one claim type (CType), it also stores a CType hash. A DelegationRootNode cannot be used in an attestation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"A DelegationNode")," is owned by the delegate and stores what the delegate is authorised to do in the name of the delegating attester: either attest, delegate further, or do both. Links to a parent DelegationRootNode or DelegationNode establish which delegation tree this node is part of. A DelegationNode can be used in an attestation by its owner.")),(0,i.kt)("h2",{id:"creating-a-delegationrootnode"},"Creating a DelegationRootNode"),(0,i.kt)("p",null,"As an attester, to establish a new delegation tree that allows another to attest to a CType in your name, you need to write a DelegationRootNode to the KILT blockchain."),(0,i.kt)("p",null,"If delegating the attestation rights for multiple CTypes, a separate delegation tree needs to be created for each CType. To do so, just repeat these steps:"),(0,i.kt)("p",null,"/1. Use the SDK to create a DelegationRootNode object"),(0,i.kt)("p",null,"This requires a unique Id (the DelegationRootNode's identifier), the CType hash, and the owner identity\u2019s address"),(0,i.kt)("p",null,"/2. Call the ",(0,i.kt)("inlineCode",{parentName:"p"},".getStoreTx()")," method on the DelegationRootNode object to produce a SubmittableExtrinsic, a transaction object which can be dispatched to the KILT blockchain."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},".getStoreTx()")," method takes the owner's identity as its argument to sign the transaction, which acts as proof of authority. This owner identity also pays the transaction fees, which are triggered in the next steps."),(0,i.kt)("p",null,"/3. Submit the transaction."),(0,i.kt)("h2",{id:"creating-a-delegationnode"},"Creating a DelegationNode"),(0,i.kt)("p",null,"To actually delegate rights, you now need to create a DelegationNode for the delegate which links to your Delegation(Root)Node."),(0,i.kt)("p",null,"Although the node is owned by the delegate, it is submitted by the delegating attester (you). This part of the process requires communication with the delegate as their signature is required during submission as proof of their consent."),(0,i.kt)("p",null,"/1. Create a new DelegationNode object"),(0,i.kt)("p",null,"Like the DelegationRootNode, this takes a unique id and owner address. Instead of the CType, it requires the id of the delegation tree\u2019s DelegationRootNode as a reference. This can be used to look up the CType for which the delegation is valid."),(0,i.kt)("p",null,"You will also need an array of permission flags, which are available as an enum in the SDK. You can select either one or both of the two available permissions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Attest"),(0,i.kt)("li",{parentName:"ul"},"Delegate")),(0,i.kt)("p",null,"The last argument lets you add a ",(0,i.kt)("inlineCode",{parentName:"p"},"parentId"),". This indicates the direct parent node (the owner of which is the one creating the new delegation), just as the ",(0,i.kt)("inlineCode",{parentName:"p"},"rootId")," indicates the root node. Note that this field will be cleared if the parent is the root node (i.e. if both fields are equal)."),(0,i.kt)("p",null,"/2. Obtain the delegate\u2019s signature over the new DelegationNode\u2019s hash."),(0,i.kt)("p",null,"The hash is obtained by calling the .generateHash() method on the DelegationNode object. The resulting hash is signed using the delegate's identity."),(0,i.kt)("p",null,"Ideally, send the complete DelegationNode object to the delegate, so they have all the information about what they are signing. You can do this using the KILT messaging system, which has a message type for that purpose: request-accept-delegation"),(0,i.kt)("p",null,"/3. Call the ",(0,i.kt)("inlineCode",{parentName:"p"},".getStoreTx()")," method on the new DelegationNode"),(0,i.kt)("p",null,"This takes two arguments: the delegating identity (owner of the parent node) to sign the transaction (proof of authority, payment of fees) and the delegate\u2019s signature as proof of consent (owner of the new DelegationNode)."),(0,i.kt)("p",null,"Again, this method call returns a SubmittableExtrinsic."),(0,i.kt)("p",null,"/4. Submit the transaction."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"Permission.delegate")," flag is set on the new DelegationNode, the delegate can now repeat this process and delegate permissions further. To do so, their DelegationNode id is added as parentId to the new DelegationNode."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"Permisson.delegate")," flag is not set on the parent, or if it is no longer active (i.e. has been revoked in the meantime), the blockchain will reject new delegations."),(0,i.kt)("h2",{id:"making-a-delegated-attestation"},"Making a Delegated Attestation"),(0,i.kt)("p",null,"An attestation is considered to be delegated (i.e. made in another\u2019s name / using another\u2019s reputation) when it contains the id of a DelegationNode stored on the blockchain, thereby establishing a connection to the attesters referenced in the parent nodes and the root node, in whose name it is issued."),(0,i.kt)("p",null,"A delegated attestation can only be written to the blockchain by the owner of the referenced DelegationNode, which must still be active (i.e. has not been revoked) and must have the attestation permission flag set."),(0,i.kt)("h2",{id:"revoking-a-delegated-attestation"},"Revoking a Delegated Attestation"),(0,i.kt)("p",null,"While a regular attestation can only be revoked by its issuer (Attester), an attestation with a ",(0,i.kt)("inlineCode",{parentName:"p"},"delegationId")," can also be revoked by any of the identities who had delegated to the respective DelegationNode or to a parent (who own one of the ancestor nodes). This works irrespective of the revocation of delegation nodes."),(0,i.kt)("p",null,"Because transaction costs on the blockchain increase proportionally to the number of lookups that need to be performed to retrace the delegation tree to the node owned by the revoking identity, the revocation call takes a maximum number of delegation node lookups as an argument. This will increase the funds locked and thus required to submit the transaction."),(0,i.kt)("p",null,"However, if the number of actual lookups performed is less than this number, excess funds will be returned after the transaction has been completed. If this number is lower than the actual steps required, the transaction will fail."),(0,i.kt)("h2",{id:"delegated-attestation"},"Delegated Attestation"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"delegation attestation",src:n(62919).Z,width:"729",height:"685"})),(0,i.kt)("p",null,"CASE 1: Delegation node 3 revokes the attestation. The number of lookups performed will be zero as delegation node 3 created the delegated attestation"),(0,i.kt)("p",null,"CASE 2: Delegation node 1 revokes the attestation. The number of lookups performed will be two as delegation node 3 created the delegated attestation, therefore, must count to find the delegation."),(0,i.kt)("p",null,"Each CASE the delegator must call the revoke on the instantiated attestation object with the given delegator or parent of the delegator to revoke the attestation. The fee is taken considering the maximum number of lookups needed to reach all cases, these fees will be refunded if paid too much."),(0,i.kt)("p",null,"The SDK provides functions to retrieve the number of lookups required by querying the blockchain."),(0,i.kt)("h2",{id:"revoking-a-delegationnode"},"Revoking a DelegationNode"),(0,i.kt)("p",null,"Revoking a DelegationNode has similar logic to revoking delegated attestations. Both the owner and any delegating identity (i.e. an \u201cancestor\u201d or \u201csuperior\u201d in the hierarchy) can revoke a DelegationNode."),(0,i.kt)("p",null,"Credentials attested using a DelegationNode that is later revoked are still valid (but revocable, if required), but no further attestations can be created using this DelegationNode."),(0,i.kt)("p",null,"Revoking a DelegationNode requires revoking all its children (and their children, and so on), with extra fees applying for each revocation. For this reason, the call has an additional parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"maxRevocations"),". As with max_depth, this increases the funds required. Child nodes are revoked first, so if this number is lower than the actual revocations required, the revocation process will abort before revoking the targeted node, leaving only ",(0,i.kt)("inlineCode",{parentName:"p"},"maxRevocation")," child/descendant nodes revoked. If the number is higher than actually required, excess funds will be returned at the end."),(0,i.kt)("p",null,"The SDK has code to count child nodes and their children, in addition to functionality counting the number of lookups to find the parent owned by the submitting identity. This is currently included and performed automatically in the getRevokeTx() method on the DelegationNode and DelegationRootNode."),(0,i.kt)("h2",{id:"revoking-a-delegationrootnode"},"Revoking a DelegationRootNode"),(0,i.kt)("p",null,"The process of revoking a DelegationRootNode is similar to revoking the DelegationNode, but can only be done by the owner (as it has no parents). This also means that traversing parent nodes is not required, which is why the respective call lacks this parameter."))}g.isMDXComponent=!0},62919:function(e,t,n){t.Z=n.p+"assets/images/delegation-attestation-8753aeada142935525539822c82a3d84.png"}}]);