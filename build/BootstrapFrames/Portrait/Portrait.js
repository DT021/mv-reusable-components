module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=9)}([function(e,t){e.exports=require("react")},function(e,t,r){e.exports=r(2)()},function(e,t,r){"use strict";var n=r(3);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,o,l){if(l!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){e.exports={headerCopy:{margin:"0 auto",textAlign:"center"},headerCopy_sponsorLogo_div_div:{margin:"20px auto"},fullWidthLanderGraphic:{width:"100vw",margin:"0 8px 40px"},fullWidthLanderGraphic_img:{width:"100%",height:"auto"},portraitLeft:{marginBottom:"20px"},portraitImage:{maxHeight:"734px"},articleHeader:{marginBottom:"20px",marginTop:"40px"},articleHeader_skinnyPano:{marginTop:"0"},articleHeader_skinnyPano__articleShareBar:{marginTop:"40px"},"@media (max-width: 1500px)":{__expression__:"(max-width: 1500px)"},"@media (min-width: 1500px)":{__expression__:"(min-width: 1500px)"},articleHeader_lead__articleShareBar:{margin:"0 auto 20px auto"},articleShareBar:{textAlign:"center",margin:"0 auto"},articleShareBar___div:{fontSize:"20px",width:"auto",marginLeft:"initial",marginRight:"20px"},articleShareBar___div_last_child:{marginRight:"0px"}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Col=t.Row=t.Container=void 0;var n=o(r(0)),a=o(r(1));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(e){return n.default.createElement("div",{className:"container",style:e.style},e.children)};l.propTypes={children:a.default.node};var i=function(e){return n.default.createElement("div",{className:"row",style:e.style},e.children)};i.propTypes={children:a.default.node};var u=function(e){var t=e.className+" "||!1;return e.sm&&("number"==typeof e.sm?t+="col-sm-"+e.sm+" ":(t+="col-sm-"+e.sm.span+" ",e.sm.offset&&(t+="offset-sm-"+e.sm.offset+" "))),e.md&&("number"==typeof e.md?t+="col-md-"+e.md+" ":(t+="col-md-"+e.md.span+" ",e.md.offset&&(t+="offset-md-"+e.md.offset+" "))),n.default.createElement("div",{className:t,style:e.style},e.children)};u.propTypes={className:a.default.string,children:a.default.node,sm:a.default.object,md:a.default.object},t.Container=l,t.Row=i,t.Col=u},,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(0)),a=i(r(1)),o=r(5),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(4));function i(e){return e&&e.__esModule?e:{default:e}}var u=function(e){return n.default.createElement(n.default.Fragment,null,n.default.createElement(o.Container,null,n.default.createElement(o.Row,null,n.default.createElement(o.Col,{sm:{span:6},styles:l.portraitLeft},n.default.createElement(o.Row,null,n.default.createElement(o.Col,{sm:{span:11},styles:l.headerCopy},e.Col1," ",e.InnerRow&&n.default.createElement(o.Row,null," ",e.InnerRow),e.UnderContent," "))),n.default.createElement(o.Col,{sm:{span:6},styles:l.portraitImage}," ",e.Col2&&n.default.createElement(o.Col,{sm:{span:6},className:"header-copy"},e.Col2)))))};u.propTypes={Col1:a.default.node.isRequired,InnerRow:a.default.node,UnderContent:a.default.node,Col2:a.default.node},t.default=u}]);