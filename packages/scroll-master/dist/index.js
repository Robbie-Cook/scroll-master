!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ScrollMaster=e():t.ScrollMaster=e()}(window,(function(){return function(t){var e={};function i(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(s,o,function(e){return t[e]}.bind(null,o));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0,e.ScrollMaster=void 0;var o=s(i(1));e.ScrollMaster=o.default,e.default=o.default},function(t,e,i){"use strict";var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var o=s(i(2)),n=function(){function t(t,e){void 0===t&&(t=""),void 0===e&&(e={}),this.selector=t,this.elements=[],this.vp=this.getViewportSize(),this.body=document.querySelector("body"),this.options=o.default(e,{wrap:!1,wrapWith:"<span></span>",marginTop:0,stickyFor:0,stickyClass:"stuck",stickyContainer:"body"}),this.updateScrollTopPosition=this.updateScrollTopPosition.bind(this),this.updateScrollTopPosition(),window.addEventListener("load",this.updateScrollTopPosition),window.addEventListener("scroll",this.updateScrollTopPosition),this.run()}return t.prototype.run=function(){var t=this,e=setInterval((function(){if("complete"===document.readyState){clearInterval(e);var i=document.querySelectorAll(t.selector);t.forEach(i,(function(e){return t.renderElement(e)}))}}),10)},t.prototype.renderElement=function(t){var e,i,s,o,n=this;t.sticky={},t.sticky.active=!1,t.sticky.customStyles=null!==(e=t.getAttribute("data-custom-styles"))&&void 0!==e&&e,t.sticky.marginTop=parseInt(null!==(i=t.getAttribute("data-margin-top"))&&void 0!==i?i:"")||this.options.marginTop,t.sticky.marginBottom=parseInt(null!==(s=t.getAttribute("data-margin-bottom"))&&void 0!==s?s:"")||this.options.marginBottom,t.sticky.stickyFor=parseInt(null!==(o=t.getAttribute("data-sticky-for"))&&void 0!==o?o:"")||this.options.stickyFor,t.sticky.stickyClass=t.getAttribute("data-sticky-class")||this.options.stickyClass,t.sticky.wrap=!!t.hasAttribute("data-sticky-wrap")||this.options.wrap,t.sticky.stickyContainer=this.options.stickyContainer,t.sticky.container=this.getStickyContainer(t),t.sticky.container.rect=this.getRectangle(t.sticky.container),t.sticky.rect=this.getRectangle(t),"img"===t.tagName.toLowerCase()&&(t.onload=function(){return t.sticky.rect=n.getRectangle(t)}),t.sticky.wrap&&this.wrapElement(t),this.activate(t)},t.prototype.wrapElement=function(t){var e;t.insertAdjacentHTML("beforebegin",t.getAttribute("data-sticky-wrapWith")||this.options.wrapWith),null===(e=t.previousSibling)||void 0===e||e.appendChild(t)},t.prototype.activate=function(t){t.sticky.rect.top+t.sticky.rect.height<t.sticky.container.rect.top+t.sticky.container.rect.height&&t.sticky.stickyFor<this.vp.width&&!t.sticky.active&&(t.sticky.active=!0),this.elements.indexOf(t)<0&&this.elements.push(t),t.sticky.resizeEvent||(this.initResizeEvents(t),t.sticky.resizeEvent=!0),t.sticky.scrollEvent||(this.initScrollEvents(t),t.sticky.scrollEvent=!0),this.setPosition(t)},t.prototype.initResizeEvents=function(t){var e=this;t.sticky.resizeListener=function(){return e.onResizeEvents(t)},window.addEventListener("resize",t.sticky.resizeListener)},t.prototype.destroyResizeEvents=function(t){window.removeEventListener("resize",t.sticky.resizeListener)},t.prototype.onResizeEvents=function(t){this.vp=this.getViewportSize(),t.sticky.rect=this.getRectangle(t),t.sticky.container.rect=this.getRectangle(t.sticky.container),t.sticky.rect.top+t.sticky.rect.height<t.sticky.container.rect.top+t.sticky.container.rect.height&&t.sticky.stickyFor<this.vp.width&&!t.sticky.active?t.sticky.active=!0:(t.sticky.rect.top+t.sticky.rect.height>=t.sticky.container.rect.top+t.sticky.container.rect.height||t.sticky.stickyFor>=this.vp.width&&t.sticky.active)&&(t.sticky.active=!1),this.setPosition(t)},t.prototype.initScrollEvents=function(t){var e=this;t.sticky.scrollListener=function(){return e.onScrollEvents(t)},window.addEventListener("scroll",t.sticky.scrollListener)},t.prototype.destroyScrollEvents=function(t){window.removeEventListener("scroll",t.sticky.scrollListener)},t.prototype.onScrollEvents=function(t){t.sticky&&t.sticky.active&&this.setPosition(t)},t.prototype.setPosition=function(t){this.css(t,{position:"",width:"",top:"",left:""}),t.sticky.active&&(t.sticky.rect.width||(t.sticky.rect=this.getRectangle(t)),t.sticky.wrap&&this.css(t.parentElement,{display:"block",width:t.sticky.rect.width+"px",height:t.sticky.rect.height+"px"}),0===t.sticky.rect.top&&t.sticky.container===this.body?(t.sticky.customStyles||this.css(t,{position:"fixed",top:t.sticky.rect.top+"px",left:t.sticky.rect.left+"px",width:t.sticky.rect.width+"px"}),t.sticky.stickyClass&&t.classList.add(t.sticky.stickyClass)):this.scrollTop&&this.scrollTop>t.sticky.rect.top-t.sticky.marginTop?(t.sticky.customStyles||this.css(t,{position:"fixed",width:t.sticky.rect.width+"px",left:t.sticky.rect.left+"px"}),this.scrollTop+t.sticky.rect.height+t.sticky.marginTop>t.sticky.container.rect.top+t.sticky.container.offsetHeight-t.sticky.marginBottom?(t.sticky.stickyClass&&t.classList.remove(t.sticky.stickyClass),this.css(t,{top:t.sticky.container.rect.top+t.sticky.container.offsetHeight-(this.scrollTop+t.sticky.rect.height+t.sticky.marginBottom)+"px"})):(t.sticky.stickyClass&&t.classList.add(t.sticky.stickyClass),this.css(t,{top:t.sticky.marginTop+"px"}))):(t.sticky.stickyClass&&t.classList.remove(t.sticky.stickyClass),this.css(t,{position:"",width:"",top:"",left:""}),t.sticky.wrap&&this.css(t.parentElement,{display:"",width:"",height:""})))},t.prototype.update=function(){var t=this;this.forEach(this.elements,(function(e){e.sticky.rect=t.getRectangle(e),e.sticky.container.rect=t.getRectangle(e.sticky.container),t.activate(e),t.setPosition(e)}))},t.prototype.destroy=function(){var t=this;window.removeEventListener("load",this.updateScrollTopPosition),window.removeEventListener("scroll",this.updateScrollTopPosition),this.forEach(this.elements,(function(e){t.destroyResizeEvents(e),t.destroyScrollEvents(e),delete e.sticky}))},t.prototype.getStickyContainer=function(t){for(var e,i,s=t.parentElement;!(null==s?void 0:s.hasAttribute("data-sticky-container"))&&!(null===(e=null==s?void 0:s.parentElement)||void 0===e?void 0:e.querySelector(t.sticky.stickyContainer))&&s!==this.body;)s=null!==(i=null==s?void 0:s.parentNode)&&void 0!==i?i:null;return s},t.prototype.getRectangle=function(t){this.css(t,{position:"",width:"",top:"",left:""});var e=Math.max(t.offsetWidth,t.clientWidth,t.scrollWidth),i=Math.max(t.offsetHeight,t.clientHeight,t.scrollHeight),s=0,o=0;do{s+=t.offsetTop||0,o+=t.offsetLeft||0,t=t.offsetParent}while(t);return{top:s,left:o,width:e,height:i}},t.prototype.getViewportSize=function(){return{width:Math.max(document.documentElement.clientWidth,window.innerWidth||0),height:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}},t.prototype.updateScrollTopPosition=function(){this.scrollTop=(window.pageYOffset||document.body.scrollTop)-(document.body.clientTop||0)||0},t.prototype.forEach=function(t,e){for(var i=0,s=t.length;i<s;i++)e(t[i])},t.prototype.css=function(t,e){for(var i in e)e.hasOwnProperty(i)&&t&&(t.style[i]=e[i])},t}();e.default=n},function(t,e){t.exports=require("lodash/merge")}])}));
//# sourceMappingURL=index.js.map