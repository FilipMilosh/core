"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[545],{9055:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(9214),r=t(5226);const o={id:"protocol-rs-sdk",title:"Rust Protocol SDK"},s=void 0,a={id:"Build/protocol-sdks/protocol-rs-sdk",title:"Rust Protocol SDK",description:"Getting Started with Calimero SDK for Rust",source:"@site/docs/03-Build/01-protocol-sdks/02-protocol-rs-sdk.mdx",sourceDirName:"03-Build/01-protocol-sdks",slug:"/Build/protocol-sdks/protocol-rs-sdk",permalink:"/core/Build/protocol-sdks/protocol-rs-sdk",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1715857265e3,sidebarPosition:2,frontMatter:{id:"protocol-rs-sdk",title:"Rust Protocol SDK"},sidebar:"tutorialSidebar",previous:{title:"Protocol SDK",permalink:"/core/Build/protocol-sdks/protocol-sdk"},next:{title:"TypeScript Client SDK",permalink:"/core/Build/client-sdks/client-ts-sdk"}},l={},c=[{value:"Getting Started with Calimero SDK for Rust",id:"getting-started-with-calimero-sdk-for-rust",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Setting Up Your Project",id:"setting-up-your-project",level:3},{value:"Writing Your Application",id:"writing-your-application",level:3},{value:"Building Your Application",id:"building-your-application",level:3},{value:"Deploying Your Application",id:"deploying-your-application",level:3},{value:"Writing Efficient Code with Calimero SDK",id:"writing-efficient-code-with-calimero-sdk",level:3},{value:"Handling Errors with Calimero SDK",id:"handling-errors-with-calimero-sdk",level:3},{value:"Emitting Events with Calimero SDK",id:"emitting-events-with-calimero-sdk",level:3},{value:"Ensuring Atomicity and Event Reliability in Calimero Applications",id:"ensuring-atomicity-and-event-reliability-in-calimero-applications",level:3},{value:"Atomic State Changes",id:"atomic-state-changes",level:4},{value:"Reliable Event Emission",id:"reliable-event-emission",level:4},{value:"Local-First Efficiency: No Network Overhead for Read-Only Calls",id:"local-first-efficiency-no-network-overhead-for-read-only-calls",level:3},{value:"Conclusion",id:"conclusion",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"getting-started-with-calimero-sdk-for-rust",children:"Getting Started with Calimero SDK for Rust"}),"\n",(0,i.jsx)(n.p,{children:"The Calimero SDK for Rust empowers developers to build applications that compile to WebAssembly (Wasm) and run securely within the Calimero virtual machine (VM). This guide will walk you through setting up a Rust project using the Calimero SDK, writing an application, and preparing it for deployment."}),"\n",(0,i.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.p,{children:["Before you begin, ensure you have Rust installed on your system. If not, follow the official Rust installation guide for your platform: ",(0,i.jsx)(n.a,{href:"https://www.rust-lang.org/tools/install",children:"Rust Installation Guide"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["You should ensure you have the ",(0,i.jsx)(n.code,{children:"wasm32-unknown-unknown"})," target installed. Run the following command in your terminal to install the target:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"rustup target add wasm32-unknown-unknown\n"})}),"\n",(0,i.jsx)(n.h3,{id:"setting-up-your-project",children:"Setting Up Your Project"}),"\n",(0,i.jsx)(n.p,{children:"In this example we will guide you to create new key-value store application.\nTo create a new project, initialize a Rust library project using Cargo. Run the following command in your terminal:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cargo new --lib kv-store\n"})}),"\n",(0,i.jsx)(n.p,{children:"You should have a tree that looks like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ tree kv-store\nkv-store\n\u251c\u2500\u2500 Cargo.toml\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 lib.rs\n\n2 directories, 2 files\n"})}),"\n",(0,i.jsxs)(n.p,{children:["At this point, we can ",(0,i.jsx)(n.code,{children:"cd"})," into the ",(0,i.jsx)(n.code,{children:"kv-store"})," directory:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd kv-store\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Next, you need to specify the crate-type as ",(0,i.jsx)(n.code,{children:"cdylib"})," in your ",(0,i.jsx)(n.code,{children:"Cargo.toml"})," file to generate a dynamic library that can be compiled to Wasm:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'# Cargo.toml\n\n[lib]\ncrate-type = ["cdylib"]\n'})}),"\n",(0,i.jsxs)(n.p,{children:["You can now configure your project to use the Calimero SDK by adding it as a dependency in your ",(0,i.jsx)(n.code,{children:"Cargo.toml"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'# Cargo.toml\n\n[dependencies]\ncalimero-sdk = { git = "https://github.com/calimero-network/core" }\n'})}),"\n",(0,i.jsx)(n.p,{children:"Then, we need to specify a custom build profile for the most compact Wasm output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'# Cargo.toml\n\n[profile.app-release]\ninherits = "release"\ncodegen-units = 1\nopt-level = "z"\nlto = true\ndebug = false\npanic = "abort"\noverflow-checks = true\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Your ",(0,i.jsx)(n.code,{children:"Cargo.toml"})," file should now look like this:"]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsxs)("summary",{children:[" ",(0,i.jsx)(n.code,{children:"Cargo.toml"})," "]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[package]\nname = "kv-store"\nversion = "0.1.0"\nedition = "2021"\n\n[lib]\ncrate-type = ["cdylib"]\n\n[dependencies]\ncalimero-sdk = { git = "https://github.com/calimero-network/core" }\n\n[profile.app-release]\ninherits = "release"\ncodegen-units = 1\nopt-level = "z"\nlto = true\ndebug = false\npanic = "abort"\noverflow-checks = true\n'})})]}),"\n",(0,i.jsxs)(n.p,{children:["And finally, create a ",(0,i.jsx)(n.code,{children:"build.sh"})," script to compile your application into Wasm format, for example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\nset -e\n\ncd "$(dirname $0)"\n\nTARGET="${CARGO_TARGET_DIR:-../../target}"\n\ncargo build --target wasm32-unknown-unknown --profile app-release\n\nmkdir -p res\n\ncp $TARGET/wasm32-unknown-unknown/app-release/kv_store.wasm ./res/\n'})}),"\n",(0,i.jsxs)(n.p,{children:["You can optionally choose to install and use ",(0,i.jsx)(n.a,{href:"https://github.com/WebAssembly/binaryen",children:(0,i.jsx)(n.code,{children:"wasm-opt"})}),", for an additional optimization step in the build script. This step is not required but can help reduce the size of the generated Wasm file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# build.sh\n\nif command -v wasm-opt > /dev/null; then\n  wasm-opt -Oz ./res/kv_store.wasm -o ./res/kv_store.wasm\nfi\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Don't forget to make the ",(0,i.jsx)(n.code,{children:"build.sh"})," script executable:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"chmod +x build.sh\n"})}),"\n",(0,i.jsx)(n.p,{children:"At this point, your project structure should look like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# in the kv-store directory\n$ tree\ntree\n.\n\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 build.sh\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 lib.rs\n\n2 directories, 3 files\n"})}),"\n",(0,i.jsx)(n.h3,{id:"writing-your-application",children:"Writing Your Application"}),"\n",(0,i.jsxs)(n.p,{children:["Now, let's create a simple key-value store application using the Calimero SDK. Start by defining your application logic in ",(0,i.jsx)(n.code,{children:"lib.rs"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"use calimero_sdk::borsh::{BorshDeserialize, BorshSerialize};\nuse calimero_sdk::app;\n\n#[app::state]\n#[derive(Default, BorshSerialize, BorshDeserialize)]\nstruct KvStore {}\n\n#[app::logic]\nimpl KvStore {}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"KvStore"})," struct represents the state of your application, which will be borsh-encoded in the app-scoped state partition on the node's storage. The ",(0,i.jsx)(n.code,{children:"#[app::state]"})," attribute macro marks the struct as the application state, permitting its use by Calimero SDK."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"#[app::logic]"})," attribute macro marks the implementation block as the application logic, allowing you to define the methods that interact with the application state."]}),"\n",(0,i.jsxs)(n.p,{children:["Consider a method like ",(0,i.jsx)(n.code,{children:"get"})," that retrieves a value from the key-value store:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"pub fn get(&self, key: &str) -> Option<&str> {\n    // Snip...\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The inputs must be deserializable from the transaction data, and the output must be serializable to the response data. The ",(0,i.jsx)(n.code,{children:"Option"})," type is used to represent the possibility of the key not being present in the store."]}),"\n",(0,i.jsx)(n.p,{children:"And now, here's a complete example of a key-value store application:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'use std::collections::HashMap;\n\nuse calimero_sdk::borsh::{BorshDeserialize, BorshSerialize};\nuse calimero_sdk::{app, env};\n\n#[app::state]\n#[derive(Default, BorshSerialize, BorshDeserialize)]\nstruct KvStore {\n    entries: HashMap<String, String>,\n}\n\n#[app::logic]\nimpl KvStore {\n    pub fn set(&mut self, key: String, value: String) {\n        env::log(&format!("Setting key: {:?} to value: {:?}", key, value));\n\n        self.entries.insert(key, value);\n    }\n\n    pub fn entries(&self) -> &HashMap<String, String> {\n        env::log("Getting all entries");\n\n        &self.entries\n    }\n\n    pub fn get(&self, key: &str) -> Option<&str> {\n        env::log(&format!("Getting key: {:?}", key));\n\n        self.entries.get(key).map(|v| v.as_str())\n    }\n\n    pub fn remove(&mut self, key: &str) -> Option<String> {\n        env::log(&format!("Removing key: {:?}", key));\n\n        self.entries.remove(key)\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"building-your-application",children:"Building Your Application"}),"\n",(0,i.jsxs)(n.p,{children:["Once your application logic is defined, run the ",(0,i.jsx)(n.code,{children:"./build.sh"})," script to compile your application into Wasm format. This script will generate ",(0,i.jsx)(n.code,{children:"kv_store.wasm"})," in the ",(0,i.jsx)(n.code,{children:"res"})," folder of your application."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ ./build.sh\n$ tree\n.\n\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 build.sh\n\u251c\u2500\u2500 res\n\u2502\xa0\xa0 \u2514\u2500\u2500 kv_store.wasm\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 lib.rs\n\n3 directories, 4 files\n"})}),"\n",(0,i.jsx)(n.h3,{id:"deploying-your-application",children:"Deploying Your Application"}),"\n",(0,i.jsxs)(n.p,{children:["After successfully building your application, you can upload the compiled ",(0,i.jsx)(n.code,{children:"kv_store.wasm"})," to the registry for use by a live Calimero node."]}),"\n",(0,i.jsx)(n.h3,{id:"writing-efficient-code-with-calimero-sdk",children:"Writing Efficient Code with Calimero SDK"}),"\n",(0,i.jsx)(n.p,{children:"In the following code snippet:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"pub fn get(&self, key: &str) -> Option<&str> {\n    // Snip...\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"you'll notice that we prioritize using references instead of owned values. This approach optimizes performance and memory usage by minimizing unnecessary data copying."}),"\n",(0,i.jsxs)(n.p,{children:["For input parameters, such as ",(0,i.jsx)(n.code,{children:"&str"})," and ",(0,i.jsx)(n.code,{children:"&[u8]"}),", utilizing references allows you to avoid unnecessary copying of data. Similarly, for output values, you can return references to data that live as long as ",(0,i.jsx)(n.code,{children:"&self"})," or any of the input parameters. By doing so, you reduce memory overhead and improve the overall efficiency of your application."]}),"\n",(0,i.jsx)(n.p,{children:"By returning a reference to the value associated with the provided key instead of cloning the entire value, you ensure efficient memory usage and enhance the performance of your application."}),"\n",(0,i.jsx)(n.h3,{id:"handling-errors-with-calimero-sdk",children:"Handling Errors with Calimero SDK"}),"\n",(0,i.jsxs)(n.p,{children:["When designing methods that may potentially fail, it's recommended to return a ",(0,i.jsx)(n.code,{children:"Result"})," type with an error variant representing the possible failure cases. This enables you to handle errors more effectively and communicate error conditions to users of your application. As opposed to panicking which would only return a string message, using ",(0,i.jsx)(n.code,{children:"Result"})," allows you to provide a structured error type with additional context."]}),"\n",(0,i.jsxs)(n.p,{children:["First, let's define an error type ",(0,i.jsx)(n.code,{children:"Error<'a>"})," with a lifetime tied to the key ",(0,i.jsx)(n.code,{children:"&'a str"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"use calimero_sdk::serde::Serialize;\n\n#[derive(Debug, Serialize)]\npub enum Error<'a> {\n    NotFound(&'a str),\n    // Add more error variants as needed\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the above definition, ",(0,i.jsx)(n.code,{children:"Error"})," represents the possible error variants that may occur during the execution of your method. Each variant can carry additional data to provide context about the error condition."]}),"\n",(0,i.jsxs)(n.p,{children:["Next, let's modify the ",(0,i.jsx)(n.code,{children:"get"})," method to return a ",(0,i.jsx)(n.code,{children:"Result"})," with ",(0,i.jsx)(n.code,{children:"Error"})," as the error type:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"pub fn get<'a>(&self, key: &'a str) -> Result<&'a str, Error<'a>> {\n    match self.entries.get(key) {\n        Some(value) => Ok(value),\n        None => Err(Error::NotFound(key)),\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"get"})," method, we return ",(0,i.jsx)(n.code,{children:"Ok(value)"})," if the key exists in the key-value store, and ",(0,i.jsx)(n.code,{children:"Err(Error::NotFound(key))"})," if the key is not found. This allows callers of the method to handle the possibility of the key not being present in the store."]}),"\n",(0,i.jsxs)(n.p,{children:["Additionally, ensure that the ",(0,i.jsx)(n.code,{children:"Error"})," type is serializable by implementing (or deriving) the ",(0,i.jsx)(n.code,{children:"Serialize"})," trait, as shown in the definition above. This enables errors to be encoded in a structured format when returned as part of a call error."]}),"\n",(0,i.jsx)(n.p,{children:"By following this approach, you can handle errors more gracefully and provide meaningful feedback to users of your Calimero application."}),"\n",(0,i.jsx)(n.h3,{id:"emitting-events-with-calimero-sdk",children:"Emitting Events with Calimero SDK"}),"\n",(0,i.jsxs)(n.p,{children:["To facilitate real-time monitoring of state transitions within your Calimero application, you can emit events using the ",(0,i.jsx)(n.code,{children:"app::emit!"})," macro provided by the Calimero SDK. Event emission is particularly useful for handling live state transitions triggered by other actors, allowing subscribed clients to receive immediate updates about relevant actions."]}),"\n",(0,i.jsxs)(n.p,{children:["Let's focus on emitting events for mutating calls, specifically ",(0,i.jsx)(n.code,{children:"set"})," and ",(0,i.jsx)(n.code,{children:"remove"})," methods:"]}),"\n",(0,i.jsxs)(n.p,{children:["First, define your custom events using the ",(0,i.jsx)(n.code,{children:"#[app::event]"})," proc macro. In this example, we'll define events for setting a new key-value pair (",(0,i.jsx)(n.code,{children:"Inserted"}),"), updating an existing value (",(0,i.jsx)(n.code,{children:"Updated"}),"), and removing a key-value pair (",(0,i.jsx)(n.code,{children:"Removed"}),"):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"use calimero_sdk::app;\n\n#[app::event]\npub enum Event<'a> {\n    Inserted { key: &'a str, value: &'a str },\n    Updated { key: &'a str, value: &'a str },\n    Removed { key: &'a str },\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Each event variant can carry additional data to provide context about the event."}),"\n",(0,i.jsx)(n.p,{children:"Now, you need to associate the event with the application logic by annotating the application state."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"#[app::state(emits = for<'a> Event<'a>)]\n#[derive(Default, BorshSerialize, BorshDeserialize)]\nstruct KvStore {\n    // Snip...\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["And finally, within your application logic methods, emit events using the ",(0,i.jsx)(n.code,{children:"app::emit!"})," macro:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"use std::collections::hash_map::Entry;\n\npub fn set(&mut self, key: String, value: String) {\n    match self.items.entry(key) {\n        Entry::Occupied(mut entry) => {\n            app::emit!(Event::Updated {\n                key: entry.key(),\n                value: &value,\n            });\n            entry.insert(value);\n        }\n        Entry::Vacant(entry) => {\n            app::emit!(Event::Inserted {\n                key: entry.key(),\n                value: &value,\n            });\n            entry.insert(value);\n        }\n    }\n}\n\npub fn remove(&mut self, key: &str) -> Result<String, Error> {\n    app::emit!(Event::Removed { key });\n\n    self.entries.remove(key).ok_or_else(|| Error::NotFound(key))\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"In each method, we emit the corresponding event with relevant data. This allows external observers to react to these events and take appropriate actions."}),"\n",(0,i.jsx)(n.p,{children:"By emitting events, you can ensure connected clients receive real-time updates about state transitions within your Calimero application, enabling them to respond to changes as they occur."}),"\n",(0,i.jsx)(n.h3,{id:"ensuring-atomicity-and-event-reliability-in-calimero-applications",children:"Ensuring Atomicity and Event Reliability in Calimero Applications"}),"\n",(0,i.jsx)(n.p,{children:"In Calimero applications, ensuring atomicity of state changes and reliability of event emission is crucial for maintaining data consistency and facilitating reliable communication between actors. Here's how atomicity and event reliability are enforced:"}),"\n",(0,i.jsx)(n.h4,{id:"atomic-state-changes",children:"Atomic State Changes"}),"\n",(0,i.jsxs)(n.p,{children:["When a method call fails, whether due to panics or returning an ",(0,i.jsx)(n.code,{children:"Err"}),", all state changes made up to that point are discarded. This ensures that if an operation cannot be completed successfully, the application's state remains consistent and unaffected by partial updates. By enforcing atomicity, Calimero promotes data integrity and prevents inconsistencies that may arise from incomplete transactions."]}),"\n",(0,i.jsx)(n.h4,{id:"reliable-event-emission",children:"Reliable Event Emission"}),"\n",(0,i.jsx)(n.p,{children:"Similarly, event emission in Calimero applications is tied to the successful execution of transactions. Events are only relayed when a transaction has been successfully executed, ensuring that external observers receive updates about state changes reliably. By linking event emission to transaction execution, Calimero guarantees that event notifications accurately reflect the application's current state, enhancing the reliability and consistency of communication between actors."}),"\n",(0,i.jsx)(n.p,{children:"This also means it doesn't matter if the event emission is done before or after the state change, as the event will only be emitted if the state change is successful."}),"\n",(0,i.jsx)(n.p,{children:"By adhering to these principles of atomicity and event reliability, Calimero applications maintain data integrity and enable robust interaction between different components, facilitating the development of secure and dependable decentralized systems."}),"\n",(0,i.jsx)(n.h3,{id:"local-first-efficiency-no-network-overhead-for-read-only-calls",children:"Local-First Efficiency: No Network Overhead for Read-Only Calls"}),"\n",(0,i.jsx)(n.p,{children:"In Calimero, adherence to the local-first principle eliminates the need for network communication in read-only calls. Since read-only operations don't modify the state, there's no associated network overhead. This local-first approach streamlines data access, promoting efficient and responsive application performance without unnecessary network activity."}),"\n",(0,i.jsx)(n.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"You've now learned how to set up a Rust project using the Calimero SDK, write a simple application, build it into Wasm, and prepare it for deployment. Experiment with different features and functionalities to create powerful and secure applications with Calimero."}),"\n",(0,i.jsx)(n.p,{children:"Happy coding! \ud83d\ude80"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5226:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(8318);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);