module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=38)}({0:function(e,t){e.exports=require("react")},10:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Col=t.Row=t.Container=void 0;var n=a(r(0)),o=a(r(3));function a(e){return e&&e.__esModule?e:{default:e}}var i=function(e){return n.default.createElement("div",{className:"container",style:e.style},e.children)};i.propTypes={children:o.default.node};var l=function(e){return n.default.createElement("div",{className:"row",style:e.style},e.children)};l.propTypes={children:o.default.node};var d=function(e){var t=e.className+" "||!1;return e.sm&&("number"==typeof e.sm?t+="col-sm-"+e.sm+" ":(t+="col-sm-"+e.sm.span+" ",e.sm.offset&&(t+="offset-sm-"+e.sm.offset+" "))),e.md&&("number"==typeof e.md?t+="col-md-"+e.md+" ":(t+="col-md-"+e.md.span+" ",e.md.offset&&(t+="offset-md-"+e.md.offset+" "))),n.default.createElement("div",{className:t,style:e.style},e.children)};d.propTypes={className:o.default.string,children:o.default.node,sm:o.default.object,md:o.default.object},t.Container=i,t.Row=l,t.Col=d},12:function(e,t,r){"use strict";var n=r(13);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},13:function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3:function(e,t,r){e.exports=r(12)()},38:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=s(r(0)),a=s(r(3)),i=r(10),l=u(r(9)),d=u(r(39));function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function s(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return o.default.createElement(o.default.Fragment,null,o.default.createElement(i.Row,null,o.default.createElement("div",{style:l.headerCopy},e.Row1Top," ",o.default.createElement("div",{style:n({},l.fullWidthLanderGraphic,d.row1MiddleWrapper)},e.Row1Middle," "),e.Row1Bottom," ")),e.Row2&&o.default.createElement(i.Row,null,o.default.createElement(i.Col,{sm:{span:12}},e.Row2)),e.Row3&&o.default.createElement(i.Row,null," ",o.default.createElement("div",{style:l.articleShareBar},e.Row3)),o.default.createElement(i.Row,null,o.default.createElement(i.Col,{sm:{span:10,offset:1},md:{span:8,offset:2},style:l.headerCopy,className:"header-copy"},e.Row4," ")),e.UnderRows," ")};c.propTypes={Row1Top:a.default.node.isRequired,Row1Middle:a.default.node.isRequired,Row1Bottom:a.default.node.isRequired,Row2:a.default.node,Row3:a.default.node,Row4:a.default.node.isRequired,UnderRows:a.default.node.isRequired},t.default=c},39:function(e,t){e.exports={row1MiddleWrapper:{margin:"0 auto"}}},9:function(e,t){e.exports={headerCopy:{margin:"0 auto",textAlign:"center"},headerCopy_sponsorLogo_div_div:{margin:"20px auto"},fullWidthLanderGraphic:{width:"100vw",margin:"0 8px 40px"},fullWidthLanderGraphic_img:{width:"100%",height:"auto"},portraitLeft:{marginBottom:"20px"},portraitImage:{maxHeight:"734px"},articleHeader:{marginBottom:"20px",marginTop:"40px"},articleHeader_skinnyPano:{marginTop:"0"},articleHeader_skinnyPano__articleShareBar:{marginTop:"40px"},"@media (max-width: 1500px)":{__expression__:"(max-width: 1500px)"},"@media (min-width: 1500px)":{__expression__:"(min-width: 1500px)"},articleHeader_lead__articleShareBar:{margin:"0 auto 20px auto"},articleShareBar:{textAlign:"center",margin:"0 auto"},articleShareBar___div:{fontSize:"20px",width:"auto",marginLeft:"initial",marginRight:"20px"},articleShareBar___div_last_child:{marginRight:"0px"}}}});