"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[720],{55397:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return u}});var i=n(83117),a=n(80102),o=(n(67294),n(3905)),r=n(31736),s=["components"],c={id:"did",title:"DID"},l=void 0,d={unversionedId:"sdk/workshop/attester/did",id:"sdk/workshop/attester/did",title:"DID",description:"Time to make a DID using the previously created account for the Attester.",source:"@site/docs/sdk/1-workshop/03-attester/02-did.md",sourceDirName:"sdk/1-workshop/03-attester",slug:"/sdk/workshop/attester/did",permalink:"/docs/sdk/workshop/attester/did",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/sdk/1-workshop/03-attester/02-did.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"did",title:"DID"},sidebar:"sdk",previous:{title:"Account",permalink:"/docs/sdk/workshop/attester/account"},next:{title:"CType",permalink:"/docs/sdk/workshop/attester/ctype"}},u=[{value:"Account vs DID",id:"account-vs-did",children:[],level:2},{value:"Create a DID",id:"create-a-did",children:[],level:2},{value:"Execute",id:"execute",children:[],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Time to make a DID using the previously created account for the ",(0,o.kt)("span",{class:"label-role attester"},"Attester"),"."),(0,o.kt)("p",null,"A DID may represent any entity, may it be a person, an organization or a machine."),(0,o.kt)("p",null,"A KILT Decentralised Identifier (DID) is a string uniquely identifying each KILT user.\nYou can store information about your DID on the KILT chain.\nThis is useful for many different use cases.\nOne example would be messaging.\nYou would store a public encryption key and a service endpoint on-chain, that can both be queried using your DID.\nOther users can now encrypt messages using your public encryption key and send the message to your service endpoint."),(0,o.kt)("p",null,"There are light and full DIDs.\nTake a look at our ",(0,o.kt)("a",{parentName:"p",href:"/docs/sdk/core-feature/did"},"DID documentation")," if you want to learn more about DIDs and the difference between their light and full versions."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"KILT DID")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There are currently four different key types that a DID supports:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)("em",{parentName:"li"},"authentication keypair"),", used to sign claims and presented them when requested"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("em",{parentName:"li"},"key-agreement keypair"),", used to encrypt/decrypt messages"),(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)("em",{parentName:"li"},"assertion-method keypair"),", used to write CTypes and attestations on chain"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("em",{parentName:"li"},"capability-delegation keypair"),", used to write delegations on chain")),(0,o.kt)("p",{parentName:"div"},"Keys can be replaced over time, e.g., if a key is compromised."))),(0,o.kt)("h2",{id:"account-vs-did"},"Account vs DID"),(0,o.kt)("p",null,"A full DID needs to be registered on the blockchain.\nFor that, an account has to submit the DID creation transaction.\nThere is always an account that submits the transactions and pays for the fees and the DID that authorized the call.\nBecause the DID and the account are not connected, DIDs do not hold any coins."),(0,o.kt)("h2",{id:"create-a-did"},"Create a DID"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Keystore")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"A keystore has multiple purposes:"),(0,o.kt)("p",{parentName:"div"},"The keystore ..."),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"stores private keys that belong to a DID"),(0,o.kt)("li",{parentName:"ul"},"creates new keys"),(0,o.kt)("li",{parentName:"ul"},"encrypts and decrypts arbitrary data")))),(0,o.kt)("p",null,"To create a DID we need a keystore.\nFor our ",(0,o.kt)("span",{class:"label-role attester"},"Attester")," we'll need all four types of keys.\nSince three of the key types use are used for signatures, we can use the same key for these.\nWe'll use a demo keystore to generate them.\nCreate a file ",(0,o.kt)("inlineCode",{parentName:"p"},"attester/generateKeypairs.ts")," and copy the code below."),(0,o.kt)(r.Z,{className:"language-js",title:"attester/generateKeypairs.ts",mdxType:"CodeBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function generateKeypairs(\n  keystore: Kilt.Did.DemoKeystore,\n  mnemonic?: string\n): Promise<{\n  authentication: Kilt.NewDidVerificationKey\n  keyAgreement: Kilt.NewDidEncryptionKey\n  assertionMethod: Kilt.NewDidVerificationKey\n  capabilityDelegation: Kilt.NewDidVerificationKey\n}> {\n  // signing keypair\n  const signing = await keystore.generateKeypair({\n    alg: Kilt.Did.SigningAlgorithms.Sr25519,\n    seed: mnemonic\n  })\n\n  // encryption keypair\n  const encryption = await keystore.generateKeypair({\n    alg: Kilt.Did.EncryptionAlgorithms.NaclBox,\n    seed: mnemonic\n  })\n\n  // build the Attester keys object\n  const keys = {\n    authentication: {\n      publicKey: signing.publicKey,\n      type: Kilt.VerificationKeyType.Sr25519\n    },\n    keyAgreement: {\n      publicKey: encryption.publicKey,\n      type: Kilt.EncryptionKeyType.X25519\n    },\n    capabilityDelegation: {\n      publicKey: signing.publicKey,\n      type: Kilt.VerificationKeyType.Sr25519\n    },\n    assertionMethod: {\n      publicKey: signing.publicKey,\n      type: Kilt.VerificationKeyType.Sr25519\n    }\n  }\n\n  return keys\n}\n"),(0,o.kt)("p",null,"Once we have created all the necessary keys for a DID we can create the on-chain DID.\nTo create a DID we first initialize everything.\nAfter that, we load the account that we created in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/sdk/workshop/attester/account"},"last section"),".\nThe account will be used to pay for the DID registration.\nFinally, we create and submit the extrinsic (aka transaction) that will register our DID."),(0,o.kt)(r.Z,{className:"language-js",title:"attester/generateDid.ts",mdxType:"CodeBlock"},"import { config as envConfig } from 'dotenv'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nimport { generateKeypairs } from './generateKeypairs'\nimport { getAccount } from './generateAccount'\n\nexport async function createFullDid(): Promise<Kilt.Did.FullDidDetails> {\n  await Kilt.init({ address: process.env.WSS_ADDRESS })\n  const { api } = await Kilt.connect()\n  const mnemonic = process.env.ATTESTER_MNEMONIC as string\n\n  // Init keystore and load attester account\n  const account = await getAccount(mnemonic)\n  const keystore = new Kilt.Did.DemoKeystore()\n\n  // generate the keypairs\n  // we are using the same mnemonic as for the attester account, but we could also use a new secret\n  const keys = await generateKeypairs(keystore, mnemonic)\n\n  // get extrinsic that will create the DID on chain and DID-URI that can be used to resolve the DID Document\n  return new Kilt.Did.FullDidCreationBuilder(api, keys.authentication)\n    .addEncryptionKey(keys.keyAgreement)\n    .setAttestationKey(keys.assertionMethod)\n    .setDelegationKey(keys.capabilityDelegation)\n    .consumeWithHandler(keystore, account.address, async (creationTx) => {\n      await Kilt.BlockchainUtils.signAndSubmitTx(creationTx, account, {\n        reSign: true,\n        resolveOn: Kilt.BlockchainUtils.IS_FINALIZED\n      })\n    })\n}\n\nexport async function getFullDid(\n  didIdentifier: Kilt.IDidIdentifier\n): Promise<Kilt.Did.FullDidDetails> {\n  // make sure the did is already on chain\n  const onChain = await Kilt.Did.FullDidDetails.fromChainInfo(didIdentifier)\n  if (!onChain)\n    throw Error(`failed to find on chain did: did:kilt:${didIdentifier}`)\n  return onChain\n}\n\n// don't execute if this is imported by another file\nif (require.main === module) {\n  envConfig()\n  createFullDid()\n    .catch((e) => {\n      console.log('Error while creating attester DID', e)\n      process.exit(1)\n    })\n    .then((did) => {\n      console.log('\\nsave following to .env to continue\\n')\n      console.error(`ATTESTER_DID_URI=${did.did}\\n`)\n      process.exit()\n    })\n}\n"),(0,o.kt)("h2",{id:"execute"},"Execute"),(0,o.kt)("p",null,"You can now execute the script with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn ts-node ./attester/generateDid.ts\n")),(0,o.kt)("p",null,"Once you executed the script, the output should provide you with your ",(0,o.kt)("inlineCode",{parentName:"p"},"ATTESTER_DID_URI"),".\nYour output should look like this (but it won't be identical since the DIDs are constructed from your account):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ATTESTER_DID_URI=did:kilt:4rgeGJNgHNiZ9TngzQTwmSAYXxMJCUFVbMCcwqwGobwQvc9X\n")),(0,o.kt)("p",null,"Be sure to save it in your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file, it should now look similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-env",metastring:'title=".env"',title:'".env"'},'WSS_ADDRESS=wss://peregrine.kilt.io/parachain-public-ws\n\nATTESTER_MNEMONIC="warrior icon use cry...\nATTESTER_ADDRESS=4ohMvUHsyeDhMVZF...\nATTESTER_DID_URI=did:kilt:4ohMvUHsyeDhMVZF...\n')),(0,o.kt)("p",null,"Well done - You've successfully generated a full DID! Let's create a CType!"))}m.isMDXComponent=!0}}]);