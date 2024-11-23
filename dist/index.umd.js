(function(e,n){typeof exports=="object"&&typeof module<"u"?n(exports,require("@fiftyone/plugins"),require("@fiftyone/components"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","@fiftyone/plugins","@fiftyone/components","styled-components"],n):(e=typeof globalThis<"u"?globalThis:e||self,n(e["@adonai/fiftyone-ohif-panel-plugin"]={},e.__fop__,e.__foc__,e.__styled__))})(this,function(e,n,i,o){"use strict";const r=o.div`
    margin: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1em;
`;function t(){const f=()=>{window.location.href="https://viewer.ohif.org/"};return React.createElement(r,null,React.createElement("h3",null,"OHIF Viewer Panel"),React.createElement(i.Button,{onClick:f,style:{width:"200px"}},"Open OHIF Viewer"))}n.registerComponent({name:"OHIFViewerPanel",label:"OHIF Viewer Panel",component:t,type:n.PluginComponentType.Panel}),e.OHIFViewerPanel=t,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=index.umd.js.map
