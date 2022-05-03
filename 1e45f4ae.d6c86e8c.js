(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{156:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),i=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),s=i(n),u=r,O=s["".concat(o,".").concat(u)]||s[u]||m[u]||c;return n?a.a.createElement(O,l(l({ref:t},p),{},{components:n})):a.a.createElement(O,l({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=u;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return i}));var r=n(2),a=n(6),c=(n(0),n(156)),o={id:"_interfaces_.tablecomponents",title:"Interface: TableComponents<Context>",sidebar_label:"TableComponents"},l={unversionedId:"api/interfaces/_interfaces_.tablecomponents",id:"api/interfaces/_interfaces_.tablecomponents",isDocsHomePage:!1,title:"Interface: TableComponents<Context>",description:'"interfaces".TableComponents',source:"@site/docs/api/interfaces/_interfaces_.tablecomponents.md",slug:"/api/interfaces/_interfaces_.tablecomponents",permalink:"/api/interfaces/_interfaces_.tablecomponents",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/api/interfaces/_interfaces_.tablecomponents.md",version:"current",sidebar_label:"TableComponents",sidebar:"someSidebar",previous:{title:"Interface: ScrollSeekToggle",permalink:"/api/interfaces/_interfaces_.scrollseektoggle"},next:{title:"Interface: WindowViewportInfo",permalink:"/api/interfaces/_interfaces_.windowviewportinfo"}},b=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"EmptyPlaceholder",id:"emptyplaceholder",children:[]},{value:"FillerRow",id:"fillerrow",children:[]},{value:"ScrollSeekPlaceholder",id:"scrollseekplaceholder",children:[]},{value:"Scroller",id:"scroller",children:[]},{value:"Table",id:"table",children:[]},{value:"TableBody",id:"tablebody",children:[]},{value:"TableHead",id:"tablehead",children:[]},{value:"TableRow",id:"tablerow",children:[]}]}],p={rightToc:b};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/api/modules/_interfaces_"}),'"interfaces"'),".TableComponents"),Object(c.b)("p",null,"Customize the TableVirtuoso rendering by passing a set of custom components."),Object(c.b)("h2",{id:"type-parameters"},"Type parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"Context")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"unknown")))),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"TableComponents"))),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"emptyplaceholder"},"EmptyPlaceholder"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"EmptyPlaceholder"),": ComponentType","<","{ context?: Context  }>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/8c0f918/src/interfaces.ts#L171"}),"src/interfaces.ts:171"))),Object(c.b)("p",null,"Set to render a custom UI when the list is empty."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"fillerrow"},"FillerRow"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"FillerRow"),": ComponentType","<",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.fillerrowprops"}),"FillerRowProps")," & { context?: Context  }>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/8c0f918/src/interfaces.ts#L181"}),"src/interfaces.ts:181"))),Object(c.b)("p",null,"Set to render an empty item placeholder."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"scrollseekplaceholder"},"ScrollSeekPlaceholder"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"ScrollSeekPlaceholder"),": ComponentType","<",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.scrollseekplaceholderprops"}),"ScrollSeekPlaceholderProps")," & { context?: Context  }>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/8c0f918/src/interfaces.ts#L176"}),"src/interfaces.ts:176"))),Object(c.b)("p",null,"Set to render an item placeholder when the user scrolls fast.  See the ",Object(c.b)("inlineCode",{parentName:"p"},"scrollSeek")," property for more details."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"scroller"},"Scroller"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"Scroller"),": ComponentType","<",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/api/modules/_interfaces_#scrollerprops"}),"ScrollerProps")," & { context?: Context  }>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/8c0f918/src/interfaces.ts#L161"}),"src/interfaces.ts:161"))),Object(c.b)("p",null,"Set to customize the outermost scrollable element. This should not be necessary in general,\nas the component passes its HTML attribute props to it."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"table"},"Table"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"Table"),": ComponentType","<",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/api/modules/_interfaces_#tableprops"}),"TableProps")," & { context?: Context  }>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/8c0f918/src/interfaces.ts#L144"}),"src/interfaces.ts:144"))),Object(c.b)("p",null,"Set to customize the wrapping ",Object(c.b)("inlineCode",{parentName:"p"},"table")," element."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"tablebody"},"TableBody"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"TableBody"),": ComponentType","<",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/api/modules/_interfaces_#tablebodyprops"}),"TableBodyProps")," & { context?: Context  }>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/8c0f918/src/interfaces.ts#L166"}),"src/interfaces.ts:166"))),Object(c.b)("p",null,"Set to customize the items wrapper. Default is ",Object(c.b)("inlineCode",{parentName:"p"},"tbody"),"."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"tablehead"},"TableHead"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"TableHead"),": ComponentType","<","{ context?: Context  }>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/8c0f918/src/interfaces.ts#L150"}),"src/interfaces.ts:150"))),Object(c.b)("p",null,"Set to render a fixed header at the top of the table (",Object(c.b)("inlineCode",{parentName:"p"},"thead"),"). use [","[fixedHeaderHeight]","] to set the contents"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"tablerow"},"TableRow"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"TableRow"),": ComponentType","<",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/api/modules/_interfaces_#itemprops"}),"ItemProps")," & { context?: Context  }>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/8c0f918/src/interfaces.ts#L155"}),"src/interfaces.ts:155"))),Object(c.b)("p",null,"Set to customize the item wrapping element. Default is ",Object(c.b)("inlineCode",{parentName:"p"},"tr"),"."))}i.isMDXComponent=!0}}]);