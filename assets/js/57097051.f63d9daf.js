"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8433],{6045:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=t(4848),s=t(8453);const r={id:"client-ts-sdk",title:"TypeScript Client SDK"},o=void 0,c={id:"Build/client-ts-sdk",title:"TypeScript Client SDK",description:"About TypeScript Client SDK",source:"@site/docs/03-Build/02-client-ts-sdk.mdx",sourceDirName:"03-Build",slug:"/Build/client-ts-sdk",permalink:"/core/Build/client-ts-sdk",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"client-ts-sdk",title:"TypeScript Client SDK"},sidebar:"tutorialSidebar",previous:{title:"Quickstart",permalink:"/core/Build/quickstart"},next:{title:"Calimero SDK (Rust)",permalink:"/core/Build/calimero-sdk-rs"}},a={},l=[{value:"About TypeScript Client SDK",id:"about-typescript-client-sdk",level:3},{value:"Components",id:"components",level:3},{value:"RpcClient interface",id:"rpcclient-interface",level:4},{value:"SubscriptionsClient",id:"subscriptionsclient",level:4},{value:"Examples",id:"examples",level:3},{value:"JsonRpcClient",id:"jsonrpcclient",level:4},{value:"WsSubscriptionsClient",id:"wssubscriptionsclient",level:4}];function p(e){const n={code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"about-typescript-client-sdk",children:"About TypeScript Client SDK"}),"\n",(0,i.jsx)(n.p,{children:"Our TypeScript Client SDK is a powerful tool designed to simplify the process of interacting with decentralized peer-to-peer applications installed on the node. It serves as an efficient conduit for communication between the client and the node\u2019s server. This SDK is particularly beneficial for developers as it abstracts the complexities of server communication, allowing them to concentrate on the core application logic."}),"\n",(0,i.jsx)(n.p,{children:"The SDK is built with the modern features of TypeScript, a language that is gaining popularity for its static typing and advanced capabilities. By using our SDK, developers can write applications in TypeScript, and the SDK takes care of the rest. It handles all the interactions with the server, making the development process more streamlined and efficient."}),"\n",(0,i.jsx)(n.p,{children:"This not only enhances the overall development experience but also accelerates the deployment of innovative decentralized applications on our network. In essence, our TypeScript SDK is a comprehensive solution that makes building and interacting with decentralized applications a breeze. It\u2019s all about making the development process more enjoyable and productive for developers worldwide."}),"\n",(0,i.jsx)(n.h3,{id:"components",children:"Components"}),"\n",(0,i.jsxs)(n.p,{children:["Our TypeScript Client SDK is composed of two main components: ",(0,i.jsx)(n.code,{children:"RpcClient"})," and ",(0,i.jsx)(n.code,{children:"SubscriptionsClient"}),". Each of these components has an interface and a class that implements the interface. The ",(0,i.jsx)(n.code,{children:"RpcClient"})," interface is implemented by the ",(0,i.jsx)(n.code,{children:"JsonRpcClient"})," class, and the ",(0,i.jsx)(n.code,{children:"SubscriptionsClient"})," interface is implemented by the ",(0,i.jsx)(n.code,{children:"WsSubscriptionsClient"})," class."]}),"\n",(0,i.jsx)(n.p,{children:"These components are designed with flexibility and future growth in mind. While currently there is only one implementation of each interface, we anticipate multiple implementations in the future. This is because our server will have multiple implementations of both the Rpc server and the Subscriptions server. This design allows us to easily add new classes that implement these interfaces as our server capabilities expand."}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"RpcClient"})," and ",(0,i.jsx)(n.code,{children:"SubscriptionsClient"})," interfaces define a standard set of methods that all implementations must provide. This ensures consistency across different implementations, making it easier for developers to switch between different Rpc and Subscriptions servers as needed."]}),"\n",(0,i.jsx)(n.p,{children:"By designing our SDK in this way, we ensure that it remains flexible, scalable, and easy to use, regardless of how our server implementations evolve in the future."}),"\n",(0,i.jsx)(n.h4,{id:"rpcclient-interface",children:"RpcClient interface"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"export interface RpcClient {\n    query<Args, Output>(params: RpcQueryParams<Args>, config?: RequestConfig): Promise<RpcQueryResponse<Output>>;\n    mutate<Args, Output>(params: RpcMutateParams<Args>, config?: RequestConfig): Promise<RpcMutateResponse<Output>>;\n}\n\nexport interface RequestConfig {\n    timeout?: number\n}\n\nexport interface RpcQueryParams<Args> {\n    applicationId: ApplicationId;\n    method: string;\n    argsJson: Args;\n}\n\nexport interface RpcQueryResponse<Output> {\n    output?: Output;\n}\n\nexport interface RpcMutateParams<Args> {\n    applicationId: ApplicationId;\n    method: string;\n    argsJson: Args;\n}\n\nexport interface RpcMutateResponse<Output> {\n    output?: Output;\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"subscriptionsclient",children:"SubscriptionsClient"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"export interface SubscriptionsClient {\n    connect(connectionId?: string): void;\n    disconnect(connectionId?: string): void;\n    subscribe(applicationIds: string[], connectionId?: string): void;\n    unsubscribe(applicationIds: string[], connectionId?: string): void;\n    addCallback(callback: (event: NodeEvent) => void, connectionId?: string): void;\n    removeCallback(callback: (event: NodeEvent) => void, connectionId?: string): void;\n}\n\nexport type NodeEvent = ApplicationEvent;\n\nexport interface ApplicationEvent {\n    application_id: ApplicationId;\n    type: 'TransactionExecuted' | 'PeerJoined'\n    data: TransactionExecuted | PeerJoined;\n}\n\nexport interface TransactionExecuted {\n    hash: string;\n}\n\nexport interface PeerJoined {\n    peerId: string;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.h4,{id:"jsonrpcclient",children:"JsonRpcClient"}),"\n",(0,i.jsx)(n.p,{children:"Here's an example of how to use it:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'// Import the necessary classes and interfaces from the SDK\nimport { RpcClient, JsonRpcClient, RpcMutateParams, RpcMutateResponse } from \'@calimero-is-near/calimero-p2p-sdk\';\n\n// Define the Args and Output interfaces\ninterface CreatePost {\n    title: string;\n    text: string;\n}\n\ninterface Post {\n    id: string;\n    title: string;\n    text: string;\n}\n\n// Create an instance of JsonRpcClient\nconst rpcClient: RpcClient = new JsonRpcClient("http://localhost:2529", "/jsonrpc");\n\n// Define the parameters for the mutate\n// applicationId argument can be obtained via admin server\nconst params: RpcMutateParams<CreatePost> = {\n    applicationId: "my-application-id",\n    method: "create_post",\n    argsJson: {\n        title: "My First Post",\n        text: "This is my first post using the TypeScript Client SDK"\n    }\n};\n\n// Use the mutate method\nconst respone: RpcMutateResponse<Post> = await rpcClient.mutate<CreatePost, Post>(params);\n\nconsole.log(response);\n'})}),"\n",(0,i.jsx)(n.h4,{id:"wssubscriptionsclient",children:"WsSubscriptionsClient"}),"\n",(0,i.jsx)(n.p,{children:"Here's an example of how to use it:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'// Import the necessary classes and interfaces from the SDK\nimport { SubscriptionsClient, WsSubscriptionsClient, NodeEvent } from \'@calimero-is-near/calimero-p2p-sdk\';\n\n// Create an instance of WsSubscriptionsClient\nconst subscriptionsClient: SubscriptionsClient = new WsSubscriptionsClient("http://localhost:2529", "/ws");\n\n// Create (default) connection to the server\nawait subscriptionsClient.connect();\n\n// Subscribe to an application events\nsubscriptionsClient.subscribe(["my-application-id"]);\n\n// Add a callback to process messages\nsubscriptionsClient.addCallback((data: NodeEvent) => {\n    console.log(data);\n});\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(6540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);