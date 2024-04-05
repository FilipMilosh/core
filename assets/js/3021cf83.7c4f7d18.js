"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2857],{2019:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=t(216),s=t(8976);const o={id:"getting-started",title:"Getting started",slug:"/getting-started/"},r=void 0,l={id:"getting-started",title:"Getting started",description:"Using the main features of Calimero Network involves several components and processes tailored to developers looking to build decentralized, privacy-focused applications. Here\u2019s an overview of how to engage with its core functionalities, along with examples of common use cases:",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/getting-started/",permalink:"/cali2.0-experimental/docs/getting-started/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started.mdx",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting started",slug:"/getting-started/"},sidebar:"tutorialSidebar",previous:{title:"Client Node",permalink:"/cali2.0-experimental/docs/client-node"},next:{title:"Introduction",permalink:"/cali2.0-experimental/docs/intro"}},a={},c=[{value:"1. <strong>Setting Up Client Nodes</strong>",id:"1-setting-up-client-nodes",level:3},{value:"2. <strong>Developing with Protocol SDK (Rust Library)</strong>",id:"2-developing-with-protocol-sdk-rust-library",level:3},{value:"3. <strong>Utilizing Client SDKs</strong>",id:"3-utilizing-client-sdks",level:3},{value:"4. <strong>Interacting with the Specialized Compute Market</strong>",id:"4-interacting-with-the-specialized-compute-market",level:3},{value:"5. <strong>End-to-End Encryption with Double Ratchet Algorithm</strong>",id:"5-end-to-end-encryption-with-double-ratchet-algorithm",level:3},{value:"Examples of Commands and Options",id:"examples-of-commands-and-options",level:3}];function d(e){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Using the main features of Calimero Network involves several components and processes tailored to developers looking to build decentralized, privacy-focused applications. Here\u2019s an overview of how to engage with its core functionalities, along with examples of common use cases:"}),"\n",(0,i.jsxs)(n.h3,{id:"1-setting-up-client-nodes",children:["1. ",(0,i.jsx)(n.strong,{children:"Setting Up Client Nodes"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),": Client nodes are the entry points for applications to connect to the Calimero Network, facilitating the execution of WASM applications in a peer-to-peer (P2P) environment."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Common Use Case"}),": A developer creating a decentralized messaging app would set up a client node to handle encrypted messages between users."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"How to Use"}),":","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"# Example command to initialize a client node\ncalimero_node init --name myNode --network calimeroNetwork\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"2-developing-with-protocol-sdk-rust-library",children:["2. ",(0,i.jsx)(n.strong,{children:"Developing with Protocol SDK (Rust Library)"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),": The Protocol SDK assists in defining the rules for application-specific networks, automating code generation to simplify the development process."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Common Use Case"}),": Defining the communication protocol for a decentralized finance (DeFi) application, including smart contract interactions and P2P transactions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"How to Use"}),":","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'// Example Rust code snippet to define a protocol\nuse calimero_sdk::ProtocolBuilder;\n\nlet my_protocol = ProtocolBuilder::new()\n    .name("DeFiProtocol")\n    .version("1.0")\n    .build();\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"3-utilizing-client-sdks",children:["3. ",(0,i.jsx)(n.strong,{children:"Utilizing Client SDKs"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),": Client SDKs provide interfaces for interacting with client nodes, managing session keys, and handling authentication and encryption."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Common Use Case"}),": A mobile app developer integrating Calimero\u2019s encryption for secure user communications within the app."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"How to Use"}),":","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"// Example JavaScript code using Client SDK\nimport { CalimeroClient } from 'calimero-client-sdk';\n\nconst client = new CalimeroClient({ nodeUrl: 'https://node.calimero.network' });\nclient.authenticateUser('userToken').then(() => {\n  console.log('User authenticated successfully');\n});\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"4-interacting-with-the-specialized-compute-market",children:["4. ",(0,i.jsx)(n.strong,{children:"Interacting with the Specialized Compute Market"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),": The specialized compute market allows nodes to offer or request specific computational resources or services, such as data replication or executing complex algorithms."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Common Use Case"}),": An application requiring heavy computational tasks like rendering 3D graphics in a decentralized game can request resources from the specialized compute market."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"How to Use"}),":","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"# Example command to request specialized computation\ncalimero_compute request --type rendering --app my3DGameApp\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"5-end-to-end-encryption-with-double-ratchet-algorithm",children:["5. ",(0,i.jsx)(n.strong,{children:"End-to-End Encryption with Double Ratchet Algorithm"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),": Ensuring secure, private communication between peers in the network."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Common Use Case"}),": A chat application using the Double Ratchet Algorithm to encrypt messages, ensuring that each message has a unique encryption key."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"How to Use"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Typically, the use of the Double Ratchet Algorithm is abstracted within the Client SDKs, requiring minimal direct interaction from the developer."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"examples-of-commands-and-options",children:"Examples of Commands and Options"}),"\n",(0,i.jsx)(n.p,{children:"While specific commands and options would depend on the implementation of the Calimero Network tools and SDKs, here are some hypothetical examples:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Initializing a project: ",(0,i.jsx)(n.code,{children:"calimero init myProject"})]}),"\n",(0,i.jsxs)(n.li,{children:["Deploying an application to the network: ",(0,i.jsx)(n.code,{children:"calimero deploy --app myDapp"})]}),"\n",(0,i.jsxs)(n.li,{children:["Managing keys and authentication: ",(0,i.jsx)(n.code,{children:"calimero keys generate --app myDapp"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"By integrating these components, developers can build decentralized applications that prioritize user privacy and data ownership, from secure messaging platforms to privacy-preserving financial applications. The Calimero Network offers a comprehensive suite of tools and services to facilitate this, all while maintaining an open-source ethos and fostering a community of privacy-centric developers and users."})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8976:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(6372);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);