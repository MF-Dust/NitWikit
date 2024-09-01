"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[1900],{40191:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=i(86070),n=i(25296);const s={title:"Visual C++ \u8fd0\u884c\u5e93",sidebar_position:3},o="Visual C++ \u8fd0\u884c\u5e93",a={id:"bds-core/preparation/vcruntime",title:"Visual C++ \u8fd0\u884c\u5e93",description:"\u6211\u7684\u4e16\u754c\u57fa\u5ca9\u7248\u7531\u4e8e\u4f7f\u7528\u5fae\u8f6f\u5f00\u53d1\u7684 Visual C++ \u7f16\u5199,\u9700\u8981\u4f9d\u8d56 Visual C++ \u8fd0\u884c\u5e93(vc\u8fd0\u884c\u5e93)\u624d\u80fd\u6b63\u5e38\u8fd0\u884c\u3002\u5728\u73a9\u5bb6\u7684\u7535\u8111\u4e0a,\u7531\u4e8e Windows \u7cfb\u7edf\u4f1a\u81ea\u52a8\u4e3a\u6e38\u620f\u8865\u5168\u8fd9\u4e9b\u8fd0\u884c\u5e93,\u6240\u4ee5\u73a9\u5bb6\u4e0b\u8f7d\u597d\u57fa\u5ca9\u7248\u4e4b\u540e\u5c31\u53ef\u4ee5\u76f4\u63a5\u5f00\u59cb\u6e38\u620f\u3002",source:"@site/docs-bedrock/bds-core/preparation/vcruntime.md",sourceDirName:"bds-core/preparation",slug:"/bds-core/preparation/vcruntime",permalink:"/NitWikit/Bedrock/bds-core/preparation/vcruntime",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-bedrock/bds-core/preparation/vcruntime.md",tags:[],version:"current",lastUpdatedBy:"MF.",lastUpdatedAt:17251671e5,sidebarPosition:3,frontMatter:{title:"Visual C++ \u8fd0\u884c\u5e93",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u6587\u672c\u7f16\u8f91\u5668",permalink:"/NitWikit/Bedrock/bds-core/preparation/text-editor"},next:{title:"\u5f00\u59cb\u9636\u6bb5",permalink:"/NitWikit/Bedrock/bds-core/start/"}},c={},d=[];function l(e){const t={a:"a",h1:"h1",header:"header",p:"p",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"visual-c-\u8fd0\u884c\u5e93",children:"Visual C++ \u8fd0\u884c\u5e93"})}),"\n",(0,r.jsx)(t.p,{children:"\u6211\u7684\u4e16\u754c\u57fa\u5ca9\u7248\u7531\u4e8e\u4f7f\u7528\u5fae\u8f6f\u5f00\u53d1\u7684 Visual C++ \u7f16\u5199,\u9700\u8981\u4f9d\u8d56 Visual C++ \u8fd0\u884c\u5e93(vc\u8fd0\u884c\u5e93)\u624d\u80fd\u6b63\u5e38\u8fd0\u884c\u3002\u5728\u73a9\u5bb6\u7684\u7535\u8111\u4e0a,\u7531\u4e8e Windows \u7cfb\u7edf\u4f1a\u81ea\u52a8\u4e3a\u6e38\u620f\u8865\u5168\u8fd9\u4e9b\u8fd0\u884c\u5e93,\u6240\u4ee5\u73a9\u5bb6\u4e0b\u8f7d\u597d\u57fa\u5ca9\u7248\u4e4b\u540e\u5c31\u53ef\u4ee5\u76f4\u63a5\u5f00\u59cb\u6e38\u620f\u3002"}),"\n",(0,r.jsxs)(t.p,{children:["\u4f46\u662f\u5728\u57fa\u5ca9\u7248\u7684\u670d\u52a1\u5668\u8f6f\u4ef6BDS\u8fd9\u8fb9\u60c5\u51b5\u5c31\u6709\u6240\u4e0d\u540c\u4e86\u3002BDS \u53ea\u662f\u4e00\u4e2a\u53ef\u6267\u884c\u6587\u4ef6,\u5b83\u5e76\u4e0d\u5177\u5907\u81ea\u5df1\u8865\u5168 vc \u8fd0\u884c\u5e93\u7684\u529f\u80fd,\u9700\u8981\u624b\u52a8\u8fdb\u884c\u5b89\u88c5,\u5426\u5219\u5c31\u4f1a\u62a5\u9519\u201c\u7f3a\u5c11vmruntimexxx.dll\u201d\u3002\u4f60\u9700\u8981\u4e3a\u670d\u52a1\u5668\u5b89\u88c5\u81f3\u5c11 ",(0,r.jsx)(t.a,{href:"https://aka.ms/vs/17/release/vc_redist.x64.exe",children:"Visual C++ Redistributable for Visual Studio 2015-2022"})," \u8fd9\u4e2a\u8fd0\u884c\u5e93\u624d\u884c\u3002"]}),"\n",(0,r.jsx)(t.p,{children:"\u6709\u65f6\u4e00\u4e9b\u8f85\u52a9\u8f6f\u4ef6\u4e5f\u4f1a\u4f9d\u8d56\u8fd9\u4e2a\u8fd0\u884c\u5e93,\u4f8b\u5982LeviLamina\u5728\u7f3a\u5c11\u8fd0\u884c\u5e93\u65f6\u4f1a\u62a5\u9519\u201cError code: 1114 \u52a8\u6001\u88e2\u63a5\u5e93(DLL)\u521d\u59cb\u5316\u4f8b\u7a0b\u5931\u8d25\u3002\u201d,\u5b89\u88c5\u8fd9\u4e2a\u8fd0\u884c\u5e93\u4e5f\u53ef\u4ee5\u89e3\u51b3\u95ee\u9898\u3002"}),"\n",(0,r.jsxs)(t.p,{children:["\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,r.jsx)(t.a,{href:"https://cloud.wujiyan.cc/f/D0DIW/MSVBCRT.AIO.2024.08.16.exe",children:"\u5e38\u7528VC\u8fd0\u884c\u5e93\u5408\u96c6"}),"\u6765\u5feb\u901f\u5b89\u88c5"]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},25296:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var r=i(30758);const n={},s=r.createContext(n);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);