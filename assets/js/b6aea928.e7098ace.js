"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5337],{8937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=n(216),a=n(8976);const o={id:"client-node",title:"Client Node",slug:"/client-node"},r=void 0,s={id:"client-node",title:"Client Node",description:"Runtime",source:"@site/docs/client-node.mdx",sourceDirName:".",slug:"/client-node",permalink:"/cali2.0-experimental/docs/client-node",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/client-node.mdx",tags:[],version:"current",frontMatter:{id:"client-node",title:"Client Node",slug:"/client-node"},sidebar:"tutorialSidebar",previous:{title:"Application Network",permalink:"/cali2.0-experimental/docs/application-network"},next:{title:"Getting started",permalink:"/cali2.0-experimental/docs/getting-started/"}},c={},d=[];function l(e){const t={p:"p",...(0,a.R)(),...e.components};return(0,i.jsx)(t.p,{children:"Runtime\nOverview: The runtime environment of a client node in the Calimero Network is crucial for the execution of decentralized applications (DApps), particularly those compiled to WebAssembly (WASM).\nFunctionality:\nState Synchronization: Each node can download and synchronize the state with existing applications, ensuring that all nodes participating in a particular application network are consistent and up-to-date.\nApplication Settings: Nodes can be configured with specific settings for each application, including which WASM modules to run, source URLs for fetching these modules, encryption protocols to be used, and more.\nNetwork Topology & Update Rules: Defines the structure of the network and how nodes communicate and update each other. Proper update rules are crucial for application security and integrity, particularly in a decentralized setting where trust is distributed.\nRecommendations for Developers: Thorough testing of applications in a controlled environment is advised before deploying them in production to ensure stability and security. Additionally, developers are encouraged to implement locked update rules to prevent unauthorized modifications to the application's behavior.\nStorage\nOverview: Storage on client nodes involves maintaining the state and data required for the decentralized applications they support.\nFunctionality:\nLocal Storage: Each node stores application data locally, contributing to the overall decentralized storage model of the network. This ensures that data is distributed across the network, enhancing privacy and resilience against central points of failure.\nEncryption: Data stored on client nodes can be encrypted, providing an additional layer of security and privacy for user data.\nIdentity Management\nOverview: Managing identities on the Calimero Network is fundamental for ensuring secure and private interactions between nodes and applications.\nFunctionality:\nAuthentication: Nodes implement mechanisms for authenticating users and applications, ensuring that interactions are secure and that entities are who they claim to be.\nKey Management: The management of cryptographic keys is an integral part of identity management, enabling secure communication and data encryption across the network.\nApplication Marketplace\nCurrent State: The marketplace for decentralized applications within the Calimero Network is facilitated by a smart contract on the NEAR blockchain, with application data and metadata hosted on IPFS. This setup serves as a temporary solution while further community engagement and discussions are underway to refine the marketplace's infrastructure and governance.\nThe Calimero Network's approach to client nodes emphasizes security, decentralization, and privacy, with a strong recommendation for users to engage with applications that have securely locked update mechanisms. These applications are more reliable for critical use cases and are the only ones featured in the official marketplace, ensuring a curated and trustworthy selection of DApps for users. This framework demonstrates Calimero Network's commitment to building a secure and user-centric decentralized ecosystem."})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8976:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var i=n(6372);const a={},o=i.createContext(a);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);