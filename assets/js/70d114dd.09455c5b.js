"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12],{3666:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(9214),o=r(5226);const i={id:"getting-started",title:"Getting started"},a=void 0,s={id:"explore/developers-quickstart/getting-started",title:"Getting started",description:"Before you start, make sure you are familiar with Calimero Terminology.",source:"@site/docs/01-explore/04-developers-quickstart/01-getting-started.mdx",sourceDirName:"01-explore/04-developers-quickstart",slug:"/explore/developers-quickstart/getting-started",permalink:"/core/explore/developers-quickstart/getting-started",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:17158587e5,sidebarPosition:1,frontMatter:{id:"getting-started",title:"Getting started"},sidebar:"tutorialSidebar",previous:{title:"The Calimero Manifesto",permalink:"/core/explore/manifesto"},next:{title:"Admin Dashboard",permalink:"/core/explore/developers-quickstart/admin-ui"}},d={},l=[{value:"Setup your local node",id:"setup-your-local-node",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Setup",id:"setup",level:3},{value:"Initialize and start coordinator node (separate terminal)",id:"initialize-and-start-coordinator-node-separate-terminal",level:4},{value:"Initialize and start your node (separate terminal)",id:"initialize-and-start-your-node-separate-terminal",level:4},{value:"Congratulations on setting up your node!",id:"congratulations-on-setting-up-your-node",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Before you start, make sure you are familiar with ",(0,n.jsx)(t.a,{href:"/core/learn/terminology",children:"Calimero Terminology"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"setup-your-local-node",children:"Setup your local node"}),"\n",(0,n.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(t.p,{children:"Position in the root of the project and create a data folder for all configuration files."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"$ mkdir data\n"})}),"\n",(0,n.jsx)(t.h3,{id:"setup",children:"Setup"}),"\n",(0,n.jsx)(t.p,{children:"Setup coordinator node used for managing the network transactions and peer nodes representing the network participants."}),"\n",(0,n.jsx)(t.h4,{id:"initialize-and-start-coordinator-node-separate-terminal",children:"Initialize and start coordinator node (separate terminal)"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"$ cargo run -p calimero-node -- --home data/coordinator init --server-port 2427 --swarm-port 2527\n$ cargo run -p calimero-node -- --home data/coordinator run --node-type coordinator\n"})}),"\n",(0,n.jsx)(t.h4,{id:"initialize-and-start-your-node-separate-terminal",children:"Initialize and start your node (separate terminal)"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"$ cargo run -p calimero-node -- --home data/node1 init --server-port 2428 --swarm-port 2528\n$ cargo run -p calimero-node -- --home data/node1 run\n"})}),"\n",(0,n.jsx)(t.p,{children:"Node is now initialized and ready for use."}),"\n",(0,n.jsx)(t.h3,{id:"congratulations-on-setting-up-your-node",children:"Congratulations on setting up your node!"}),"\n",(0,n.jsx)(t.p,{children:"Your next step is to add an authentication mechanism to your node by adding a decentralized identity."})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},5226:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>s});var n=r(8318);const o={},i=n.createContext(o);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);