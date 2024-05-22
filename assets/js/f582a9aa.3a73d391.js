"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[226],{8923:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=t(6106),s=t(791);const o={id:"contexts",title:"Contexts"},r=void 0,a={id:"learn/core-concepts/contexts",title:"Contexts",description:"Contexts are the core of the Calimero ecosystem. These are application specific networks designed to enable direct communication between users, eliminating the need for intermediaries. Here's a closer look at how they operate:",source:"@site/docs/02-learn/03-core-concepts/04-context.mdx",sourceDirName:"02-learn/03-core-concepts",slug:"/learn/core-concepts/contexts",permalink:"/core/learn/core-concepts/contexts",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1716388933e3,sidebarPosition:4,frontMatter:{id:"contexts",title:"Contexts"},sidebar:"tutorialSidebar",previous:{title:"Applications",permalink:"/core/learn/core-concepts/applications"},next:{title:"Specialized Nodes",permalink:"/core/learn/advanced-concepts/specialized-nodes"}},c={},l=[{value:"<strong>How Contexts Work:</strong>",id:"how-contexts-work",level:4}];function d(e){const n={h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Contexts are the core of the Calimero ecosystem. These are application specific networks designed to enable direct communication between users, eliminating the need for intermediaries. Here's a closer look at how they operate:"}),"\n",(0,i.jsx)(n.h4,{id:"how-contexts-work",children:(0,i.jsx)(n.strong,{children:"How Contexts Work:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Initialization"}),": A user selects a WebAssembly (WASM) module from a repository, which contains the logic and rules for the application. With this, they initiate a new Application Network, creating a unique identity for this specific network and setting the initial parameters and update strategies."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Joining the Network"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Inviting Peers"}),": The initial user can invite others directly or set up Access Control Lists (ACLs) to govern how new members can join the network."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"New Member Process"}),": When a new user joins, they generate a unique identity for the network, download the relevant WASM module, and synchronize with the existing data on the network. This process ensures they're up to speed and ready to engage fully with the network's activities."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Data Interaction"}),": Within the network, users can query and modify data according to the application's rules. Each Application Network autonomously manages data interactions, ensuring consistency and integrity."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Security and Privacy"}),": All communications within an Application Network are secured with end-to-end encryption, utilizing the Double Ratchet Algorithm. This ensures that data exchanged between peers remains private and secure."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Offline Capability and Consistency"}),": Calimero's design is 'offline-first,' accommodating the reality that peers may not always be online. When a peer goes offline and later returns, they synchronize with the network to update and reconcile any changes, maintaining eventual consistency across the network's state."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Governance and Updates"}),": Application Networks can be governed by the users themselves, with decisions made through a consensus mechanism. Updates to the network, including changes to the WASM module or network parameters, can be proposed and voted on by the network's members."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Extending network capabilities"}),": In addition to the core components of Application Networks, Calimero introduces Specialized Nodes to further enhance network capabilities. These nodes are designed to perform specific functions that go beyond the standard operations of client nodes, such as heavy data processing, advanced encryption tasks, or providing additional storage solutions. They play a crucial role in scaling the network's functionality and performance, ensuring that even as demand grows, the network remains efficient and responsive. Specialized Nodes can be deployed by any participant in the network, including Calimero, third-party developers, or users themselves, offering a flexible and decentralized approach to augmenting the network's capabilities. By leveraging these nodes, Application Networks can meet the diverse needs of different applications, ensuring that each network can be customized and optimized for its unique requirements, all while maintaining the overarching principles of privacy, security, and decentralization inherent to Calimero."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},791:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(7378);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);