(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{160:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),l=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(a,".").concat(d)]||u[d]||m[d]||i;return n?o.a.createElement(f,s(s({ref:t},c),{},{components:n})):o.a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),i=(n(0),n(160)),a={id:"top-items",title:"Top Items List Example",sidebar_label:"Top Items",slug:"/top-items/"},s={unversionedId:"top-items",id:"top-items",isDocsHomePage:!1,title:"Top Items List Example",description:"The Virtuoso component accepts an optional topItemCount number property that allows you to pin the first several items of the list.",source:"@site/docs/top-items.md",slug:"/top-items/",permalink:"/top-items/",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/top-items.md",version:"current",sidebar_label:"Top Items",sidebar:"someSidebar",previous:{title:"Virtual List With 100,000 Items",permalink:"/hello/"},next:{title:"List with Footer Example",permalink:"/footer/"}},p=[],c={rightToc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Virtuoso component accepts an optional ",Object(i.b)("inlineCode",{parentName:"p"},"topItemCount")," number property that allows you to pin the first several items of the list."),Object(i.b)("p",null,"Scroll the list below - the first two items remain fixed and always visible.\n",Object(i.b)("inlineCode",{parentName:"p"},"backgroundColor")," is set to hide the scrollable items behind the top ones."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"live include-data",live:!0,"include-data":!0}),"import { Virtuoso } from 'react-virtuoso'\nimport { generateUsers } from './data'\n\nexport default function App() {\n  return (\n    <Virtuoso\n      style={{ height: 400 }}\n      data={generateUsers(1000)}\n      topItemCount={2}\n      itemContent={(index, user) => (\n        <div\n          style={{\n            backgroundColor: user.bgColor,\n            padding: '1rem 0.5rem',\n          }}\n        >\n          <h4>{user.name}</h4>\n        </div>\n      )}\n    />\n  )\n}\n")))}l.isMDXComponent=!0}}]);