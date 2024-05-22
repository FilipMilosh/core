"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[607],{2525:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(6106),s=t(791);const o={id:"identity",title:"Identity"},r=void 0,a={id:"learn/core-concepts/identity",title:"Identity",description:"Key Management",source:"@site/docs/02-learn/03-core-concepts/01-identity (DID).mdx",sourceDirName:"02-learn/03-core-concepts",slug:"/learn/core-concepts/identity",permalink:"/core/learn/core-concepts/identity",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1716375296e3,sidebarPosition:1,frontMatter:{id:"identity",title:"Identity"},sidebar:"tutorialSidebar",previous:{title:"Network",permalink:"/core/learn/Core-concepts/Node/network"},next:{title:"Client Node",permalink:"/core/learn/core-concepts/node/client-node"}},l={},c=[{value:"Key Management",id:"key-management",level:3},{value:"Node Keys",id:"node-keys",level:3},{value:"Application Keys",id:"application-keys",level:3}];function d(e){const n={a:"a",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"key-management",children:"Key Management"}),"\n",(0,i.jsx)(n.p,{children:"Calimero's key management is centered around two types: Node Keys for node management and Application Keys for app operation. This structure ensures secure, anonymous and decentralized control across the network."}),"\n",(0,i.jsx)(n.h3,{id:"node-keys",children:"Node Keys"}),"\n",(0,i.jsx)(n.p,{children:"Node Keys are used to for node operations which include, add new node keys, identifier listing, and key deletion. Web3 wallets can be used as node keys, easing the setup process."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Key Initialization Process"}),":"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Starting Without Keys"}),": Initially, nodes have no keys. The addition of the first key is crucial for setting up application identities."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Adding the First Key"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["In the node admin UI, connect a wallet, such as MetaMask or Near wallets compliant with ",(0,i.jsx)(n.a,{href:"https://github.com/near/NEPs/blob/master/neps/nep-0413.md",children:"NEP-413"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Sign a challenge from the node and submit the signature."}),"\n",(0,i.jsx)(n.li,{children:"If the signature matches the challenge and the public key, the first node key is added, activating key management capabilities."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"application-keys",children:"Application Keys"}),"\n",(0,i.jsx)(n.p,{children:"Application Keys initiate applications, with keypairs stored in browser local storage."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Application Key Usage"}),":"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Key Creation"}),": Users generate a new keypair in their browser."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Verification"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A Verifiable Presentation Request is sent to the node, which responds with a challenge."}),"\n",(0,i.jsx)(n.li,{children:"The challenge and public key are signed using the node key."}),"\n",(0,i.jsx)(n.li,{children:"Upon node verification of the request and signature, the new key is cleared for JSONRPC API communication from the browser to the node."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Calimero's TypeScript SDK supports developers in building browser and CLI applications by simplifying interaction with the network."}),"\n",(0,i.jsx)(n.p,{children:"This key management setup underpins secure and efficient operations within the Calimero Network, facilitating both node and application functionalities."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},791:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(7378);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);