(function(e,n){typeof exports=="object"&&typeof module<"u"?n(exports,require("react"),require("@fiftyone/plugins"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","@fiftyone/plugins","styled-components"],n):(e=typeof globalThis<"u"?globalThis:e||self,n(e["@adonai/fiftyone-ohif-panel-plugin"]={},e.React,e.__fop__,e.__styled__))})(this,function(e,n,t,o){"use strict";const r=o.div`
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`,l=o.iframe`
    width: 100%;
    height: 100%;
    border: none;
`;function i(){const[s,f]=n.useState("http://localhost:3000/localbasic"),c=()=>{console.log("OHIF Viewer loaded successfully!")},a=()=>{console.error("Failed to load OHIF Viewer.")};return n.createElement(r,null,n.createElement(l,{src:s,title:"OHIF Viewer",onLoad:c,onError:a}))}t.registerComponent({name:"OHIFViewerPanel",label:"OHIF Viewer Panel",component:i,type:t.PluginComponentType.Panel}),e.OHIFViewerPanel=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=index.umd.js.map
