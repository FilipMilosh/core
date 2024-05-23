"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74],{6859:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=i(6106),r=i(791);const s={id:"encryption",title:"Encryption"},a=void 0,o={id:"learn/advanced-concepts/encryption",title:"Encryption",description:"Encryption in Calimero ensures data security in transit over the network, maintaining confidentiality and integrity.",source:"@site/docs/02-learn/04-advanced-concepts/02-encryption.mdx",sourceDirName:"02-learn/04-advanced-concepts",slug:"/learn/advanced-concepts/encryption",permalink:"/core/learn/advanced-concepts/encryption",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1716475916e3,sidebarPosition:2,frontMatter:{id:"encryption",title:"Encryption"},sidebar:"tutorialSidebar",previous:{title:"Specialized Nodes",permalink:"/core/learn/advanced-concepts/specialized-nodes"},next:{title:"Quickstart",permalink:"/core/build/quickstart"}},c={},l=[{value:"Key Principles",id:"key-principles",level:3},{value:"Double Ratchet Algorithm",id:"double-ratchet-algorithm",level:3},{value:"Tree-Based Diffie-Hellman Key Exchange",id:"tree-based-diffie-hellman-key-exchange",level:3}];function d(e){const n={h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Encryption in Calimero ensures data security in transit over the network, maintaining confidentiality and integrity."}),"\n",(0,t.jsx)(n.h3,{id:"key-principles",children:"Key Principles"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Forward Secrecy"}),": Ensuring past messages remain secure even if a key is compromised in the future."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Post-Compromise Security"}),": Ensuring future messages remain secure even after any previous message has been compromised."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Zero Trust in Third Parties"}),": No reliance on intermediaries for security."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Verifiable End-to-End Encryption"}),": Confirming that only the intended recipients can read the messages."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Asynchronous Communication"}),": Ability to start communications without recipients being online."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Multi-Device Support"}),": Ensuring seamless use across multiple devices."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Deniability"}),": Providing plausible deniability for message authorship to non-context members."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Non-Interactive Group Management"}),": Adding and removing context members without requiring interaction."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"double-ratchet-algorithm",children:"Double Ratchet Algorithm"}),"\n",(0,t.jsx)(n.p,{children:"Each network message uses a distinct encryption key derived from the ratchet state, providing forward secrecy by ensuring that the compromise of one key does not affect the security of previous messages."}),"\n",(0,t.jsx)(n.p,{children:"Each context can configure Diffie-Hellman reset parameters. For one-on-one peer interactions, resets can occur instantaneously, while for larger groups, resets can happen at non-deterministic intervals to balance security and performance."}),"\n",(0,t.jsx)(n.h3,{id:"tree-based-diffie-hellman-key-exchange",children:"Tree-Based Diffie-Hellman Key Exchange"}),"\n",(0,t.jsx)(n.p,{children:"All contexts use a tree-based Diffie-Hellman key exchange. This method efficiently manages shared secrets among multiple members, ensuring that keys are updated and propagated correctly. The reset of keys occurs at the leaf nodes of the tree, guaranteeing post-compromise security."}),"\n",(0,t.jsx)(n.p,{children:"Adding a new member involves existing members using their prekeys to complete an X3DH (Triple Diffie-Hellman) exchange, securely adding the new member without requiring direct interaction. Removing a member involves invalidating their keys and updating the shared secrets among remaining members, ensuring efficient and secure updates."}),"\n",(0,t.jsx)(n.p,{children:"By leveraging advanced encryption techniques such as the Double Ratchet Algorithm and tree-based Diffie-Hellman key exchange, Calimero ensures that all data in transit is protected, maintaining the confidentiality and integrity of network messages."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},791:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(7378);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);