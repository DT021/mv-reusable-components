module.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=14)}([function(e,t){e.exports=require("react")},function(e,t,n){e.exports=n(2)()},function(e,t,n){"use strict";var o=n(3);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},,,function(e,t,n){"use strict";n.d(t,"a",function(){return l});var o=!("undefined"==typeof window||!window.document||!window.document.createElement);var r=void 0;function i(){return void 0===r&&(r=function(){if(!o)return!1;if(!window.addEventListener||!window.removeEventListener||!Object.defineProperty)return!1;var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}catch(e){}return e}()),r}function a(e){e.handlers===e.nextHandlers&&(e.nextHandlers=e.handlers.slice())}function s(e){this.target=e,this.events={}}s.prototype.getEventHandlers=function(e,t){var n,o=String(e)+" "+String((n=t)?!0===n?100:(n.capture<<0)+(n.passive<<1)+(n.once<<2):0);return this.events[o]||(this.events[o]={handlers:[],handleEvent:void 0},this.events[o].nextHandlers=this.events[o].handlers),this.events[o]},s.prototype.handleEvent=function(e,t,n){var o=this.getEventHandlers(e,t);o.handlers=o.nextHandlers,o.handlers.forEach(function(e){e&&e(n)})},s.prototype.add=function(e,t,n){var o=this,r=this.getEventHandlers(e,n);a(r),0===r.nextHandlers.length&&(r.handleEvent=this.handleEvent.bind(this,e,n),this.target.addEventListener(e,r.handleEvent,n)),r.nextHandlers.push(t);var i=!0;return function(){if(i){i=!1,a(r);var s=r.nextHandlers.indexOf(t);r.nextHandlers.splice(s,1),0===r.nextHandlers.length&&(o.target&&o.target.removeEventListener(e,r.handleEvent,n),r.handleEvent=void 0)}}};var c="__consolidated_events_handlers__";function l(e,t,n,o){e[c]||(e[c]=new s(e));var r=function(e){if(e)return i()?e:!!e.capture}(o);return e[c].add(t,n,r)}},function(e,t,n){"use strict";e.exports=n(17)},,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),a=l(i),s=l(n(1)),c=n(15);function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},"undefined"!=typeof window&&(window.inf=n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),r(t,[{key:"handleArticleEnter",value:function(e,t,n){console.log("handleArticleEnter (from top)",e),this.props.onArticleEnter&&this.props.onArticleEnter.bind(this,e,t,n)}},{key:"handleArticleLeave",value:function(e,t,n,o){console.log("handleArticleLeave (from top)",e);var r=void 0;r="above"==o.currentPosition?e:e-1;var i=this.props.items[r];this.props.onChangeIndex(i,r,n)}},{key:"render",value:function(){var e=this;return this.eachRef=[],a.default.createElement("div",{className:"articlesHolder",ref:function(t){return e.articlesHolder=t}},this.props.items.map(function(t,n){var r=n>0&&e.props.items[n-1],i=o({},e.props.componentEvents);Object.keys(i).forEach(function(e){i[e]=i[e].bind(null,t,n)});var s,l,u,f=a.default.createElement(c.Waypoint,{onEnter:function(){e.props.onCrossLoadWaypoint(t,n)}}),p=e.props.children(t,n,f),d=(o({},p.props,(s={},l=e.props.waypointPropName,u=f,l in s?Object.defineProperty(s,l,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[l]=u,s)),a.default.createElement(p.type,o({},p.props,{waypoint:a.default.createElement(c.Waypoint,{onEnter:function(){e.props.onCrossLoadWaypoint(t,n)}})})));return a.default.createElement("div",{key:n},a.default.createElement(c.Waypoint,{topOffset:e.props.topOffset,onEnter:e.handleArticleEnter.bind(e,n,t,r),onLeave:e.handleArticleLeave.bind(e,n,t,r)},e.props.debugMode&&a.default.createElement("div",{style:{width:"100%",height:"1px",background:"red"}})),d)}))}}]),t}();u.defaultProps={waypointPropName:"waypoint",onChangeIndex:function(){}},u.propTypes={topOffset:s.default.string,items:s.default.array,onChangeIndex:s.default.func,onCrossLoadWaypoint:s.default.func},t.default=u},function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"Waypoint",function(){return O});var o=n(6),r=(n(1),n(0)),i=n.n(r),a=n(7);function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e,t){var n,o=(n=e,!isNaN(parseFloat(n))&&isFinite(n)?parseFloat(n):"px"===n.slice(-2)?parseFloat(n.slice(0,-2)):void 0);if("number"==typeof o)return o;var r=function(e){if("%"===e.slice(-1))return parseFloat(e.slice(0,-1))/100}(e);return"number"==typeof r?r*t:void 0}var p="above",d="inside",v="below",y="invisible";function h(e){return"string"==typeof e.type}var w,b="<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.";var m=[];function g(e){m.push(e),w||(w=setTimeout(function(){var e;for(w=null;e=m.shift();)e()},0));var t=!0;return function(){if(t){t=!1;var n=m.indexOf(e);-1!==n&&(m.splice(n,1),!m.length&&w&&(clearTimeout(w),w=null))}}}var E={debug:!1,scrollableAncestor:void 0,children:void 0,topOffset:"0px",bottomOffset:"0px",horizontal:!1,onEnter:function(){},onLeave:function(){},onPositionChange:function(){},fireOnRapidScroll:!0},O=function(t){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=u(this,c(n).call(this,e))).refElement=function(e){t._ref=e},t}var r,w,m;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(n,i.a.PureComponent),r=n,(w=[{key:"componentDidMount",value:function(){var e=this;n.getWindow()&&(this.cancelOnNextTick=g(function(){e.cancelOnNextTick=null;var t=e.props,n=t.children;t.debug;!function(e,t){if(e&&!h(e)&&!t)throw new Error(b)}(n,e._ref),e._handleScroll=e._handleScroll.bind(e),e.scrollableAncestor=e._findScrollableAncestor(),e.scrollEventListenerUnsubscribe=Object(o.a)(e.scrollableAncestor,"scroll",e._handleScroll,{passive:!0}),e.resizeEventListenerUnsubscribe=Object(o.a)(window,"resize",e._handleScroll,{passive:!0}),e._handleScroll(null)}))}},{key:"componentDidUpdate",value:function(){var e=this;n.getWindow()&&this.scrollableAncestor&&(this.cancelOnNextTick||(this.cancelOnNextTick=g(function(){e.cancelOnNextTick=null,e._handleScroll(null)})))}},{key:"componentWillUnmount",value:function(){n.getWindow()&&(this.scrollEventListenerUnsubscribe&&this.scrollEventListenerUnsubscribe(),this.resizeEventListenerUnsubscribe&&this.resizeEventListenerUnsubscribe(),this.cancelOnNextTick&&this.cancelOnNextTick())}},{key:"_findScrollableAncestor",value:function(){var t=this.props,n=t.horizontal,o=t.scrollableAncestor;if(o)return function(t){return"window"===t?e.window:t}(o);for(var r=this._ref;r.parentNode;){if((r=r.parentNode)===document.body)return window;var i=window.getComputedStyle(r),a=(n?i.getPropertyValue("overflow-x"):i.getPropertyValue("overflow-y"))||i.getPropertyValue("overflow");if("auto"===a||"scroll"===a)return r}return window}},{key:"_handleScroll",value:function(e){if(this._ref){var t=this._getBounds(),n=function(e){return e.viewportBottom-e.viewportTop==0?y:e.viewportTop<=e.waypointTop&&e.waypointTop<=e.viewportBottom?d:e.viewportTop<=e.waypointBottom&&e.waypointBottom<=e.viewportBottom?d:e.waypointTop<=e.viewportTop&&e.viewportBottom<=e.waypointBottom?d:e.viewportBottom<e.waypointTop?v:e.waypointTop<e.viewportTop?p:y}(t),o=this._previousPosition,r=this.props,i=(r.debug,r.onPositionChange),a=r.onEnter,s=r.onLeave,c=r.fireOnRapidScroll;if(this._previousPosition=n,o!==n){var l={currentPosition:n,previousPosition:o,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom};i.call(this,l),n===d?a.call(this,l):o===d&&s.call(this,l),c&&(o===v&&n===p||o===p&&n===v)&&(a.call(this,{currentPosition:d,previousPosition:o,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}),s.call(this,{currentPosition:n,previousPosition:d,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}))}}}},{key:"_getBounds",value:function(){var e,t,n=this.props,o=n.horizontal,r=(n.debug,this._ref.getBoundingClientRect()),i=r.left,a=r.top,s=r.right,c=r.bottom,l=o?i:a,u=o?s:c;this.scrollableAncestor===window?(e=o?window.innerWidth:window.innerHeight,t=0):(e=o?this.scrollableAncestor.offsetWidth:this.scrollableAncestor.offsetHeight,t=o?this.scrollableAncestor.getBoundingClientRect().left:this.scrollableAncestor.getBoundingClientRect().top);var p=this.props,d=p.bottomOffset;return{waypointTop:l,waypointBottom:u,viewportTop:t+f(p.topOffset,e),viewportBottom:t+e-f(d,e)}}},{key:"render",value:function(){var e=this,t=this.props.children;if(!t)return i.a.createElement("span",{ref:this.refElement,style:{fontSize:0}});if(h(t)||Object(a.isForwardRef)(t)){return i.a.cloneElement(t,{ref:function(n){e.refElement(n),t.ref&&("function"==typeof t.ref?t.ref(n):t.ref.current=n)}})}return i.a.cloneElement(t,{innerRef:this.refElement})}}])&&s(r.prototype,w),m&&s(r,m),n}();O.above=p,O.below=v,O.inside=d,O.invisible=y,O.getWindow=function(){if("undefined"!=typeof window)return window},O.defaultProps=E,O.displayName="Waypoint"}.call(this,n(16))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";
/** @license React v16.8.6
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&Symbol.for,r=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,s=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,u=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.async_mode"):60111,p=o?Symbol.for("react.concurrent_mode"):60111,d=o?Symbol.for("react.forward_ref"):60112,v=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case f:case p:case a:case c:case s:case v:return e;default:switch(e=e&&e.$$typeof){case u:case d:case l:return e;default:return t}}case h:case y:case i:return t}}}function b(e){return w(e)===p}t.typeOf=w,t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=u,t.ContextProvider=l,t.Element=r,t.ForwardRef=d,t.Fragment=a,t.Lazy=h,t.Memo=y,t.Portal=i,t.Profiler=c,t.StrictMode=s,t.Suspense=v,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===p||e===c||e===s||e===v||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===y||e.$$typeof===l||e.$$typeof===u||e.$$typeof===d)},t.isAsyncMode=function(e){return b(e)||w(e)===f},t.isConcurrentMode=b,t.isContextConsumer=function(e){return w(e)===u},t.isContextProvider=function(e){return w(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===a},t.isLazy=function(e){return w(e)===h},t.isMemo=function(e){return w(e)===y},t.isPortal=function(e){return w(e)===i},t.isProfiler=function(e){return w(e)===c},t.isStrictMode=function(e){return w(e)===s},t.isSuspense=function(e){return w(e)===v}}]);