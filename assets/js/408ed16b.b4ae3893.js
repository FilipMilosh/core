"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6151],{636:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=s(4848),t=s(8453);const a={id:"admin-ui",title:"Admin UI"},o=void 0,r={id:"explore/Developers-Quickstart/admin-ui",title:"Admin UI",description:"About Admin UI",source:"@site/docs/01-explore/04-Developers-Quickstart/02-admin-ui.mdx",sourceDirName:"01-explore/04-Developers-Quickstart",slug:"/explore/Developers-Quickstart/admin-ui",permalink:"/core/explore/Developers-Quickstart/admin-ui",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"admin-ui",title:"Admin UI"},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/core/explore/Developers-Quickstart/getting-started"},next:{title:"Learn",permalink:"/core/category/learn"}},d={},l=[{value:"About Admin UI",id:"about-admin-ui",level:3},{value:"How to Use",id:"how-to-use",level:3},{value:"Usage",id:"usage",level:3}];function c(e){const n={code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"about-admin-ui",children:"About Admin UI"}),"\n",(0,i.jsxs)(n.p,{children:["The Admin UI is a web application designed to streamline the management of node states within your system. Seamlessly connected with the API provided by the ",(0,i.jsx)(n.strong,{children:"Admin Client API"}),", this user interface offers a user-friendly platform for overseeing and controlling various aspects of your node infrastructure."]}),"\n",(0,i.jsx)(n.h3,{id:"how-to-use",children:"How to Use"}),"\n",(0,i.jsxs)(n.p,{children:["To access the Admin UI, simply navigate to ",(0,i.jsx)(n.code,{children:"http://<node_url>/admin"})," in your web browser. Once logged in, you'll gain access to a comprehensive set of tools and features for managing your node infrastructure"]}),"\n",(0,i.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Login page"})}),"\n",(0,i.jsx)(n.p,{children:"The Login Page initiates the authentication process by calling the /request-challenge endpoint. This endpoint generates a challenge that is then signed along with the user's message using their wallet."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Login Page",src:s(6117).A+"",width:"1286",height:"874"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Add root key"})}),"\n",(0,i.jsx)(n.p,{children:'The "Add Root Key" feature facilitates the addition of a root key to the node. This process involves sending parameters such as signature, public key, account ID, and callback URL to the /root-key API endpoint, which is hosted by the Admin API.'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Add root key",src:s(7602).A+"",width:"1275",height:"862"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"List installed applications"})}),"\n",(0,i.jsx)(n.p,{children:'The "List Installed Applications" feature provides overview of all installed applications on a node'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"List installed application",src:s(8161).A+"",width:"1283",height:"873"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Install new application"})}),"\n",(0,i.jsx)(n.p,{children:'The "Install New Application" process involves the user filling out a form to add a new package, uploading the application release WebAssembly (Wasm) file, and then submitting another form to add the new application for installation on the node.'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Add new application package",src:s(6177).A+"",width:"1280",height:"871"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Add new application package release",src:s(2037).A+"",width:"1285",height:"871"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"List the DID"})}),"\n",(0,i.jsx)(n.p,{children:'The "List DID" feature provides overview of all DID\'s saved on a node'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"List DID",src:s(2296).A+"",width:"1283",height:"873"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"List saved node keys"})}),"\n",(0,i.jsx)(n.p,{children:'The "List saved node keys" feature provides overview of all keys saved on a node'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"List saved node keys",src:s(4684).A+"",width:"1283",height:"875"})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},2037:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/add-application-package-release-7a21e52361f783c0919ea9d9c7ec6787.png"},6177:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/add-application-package-d36344aba609bfd70f86895c57cccdd8.png"},2296:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/list-DID-29e625728468cc752c2910065d347f01.png"},8161:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/list-application-441589cdfecef1d27be43498d0455d62.png"},4684:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/list-keys-2b327c79b671675d1e869346332b9698.png"},6117:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/login-page-2795d7be7a516b46498289bc226b2fa4.png"},7602:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/request-root-key-fe78ee40f903cc63494491016e952831.png"},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var i=s(6540);const t={},a=i.createContext(t);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);