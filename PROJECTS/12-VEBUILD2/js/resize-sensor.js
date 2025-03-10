/**
 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
 * directory of this distribution and at
 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
 */
"use strict";!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.ResizeSensor=t()}("undefined"!=typeof window?window:this,function(){if("undefined"==typeof window)return null;var e="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),t=e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame||function(t){return e.setTimeout(t,20)},n=e.cancelAnimationFrame||e.mozCancelAnimationFrame||e.webkitCancelAnimationFrame||function(t){e.clearTimeout(t)};function i(e,t){var n=Object.prototype.toString.call(e),i="[object Array]"===n||"[object NodeList]"===n||"[object HTMLCollection]"===n||"[object Object]"===n||"undefined"!=typeof jQuery&&e instanceof jQuery||"undefined"!=typeof Elements&&e instanceof Elements,o=0,r=e.length;if(i)for(;o<r;o++)t(e[o]);else t(e)}function o(e){if(!e.getBoundingClientRect)return{width:e.offsetWidth,height:e.offsetHeight};var t=e.getBoundingClientRect();return{width:Math.round(t.width),height:Math.round(t.height)}}function r(e,t){Object.keys(t).forEach(function(n){e.style[n]=t[n]})}var s=function(e,d){var a=0;function c(){var e,t,n=[];this.add=function(e){n.push(e)},this.call=function(i){for(e=0,t=n.length;e<t;e++)n[e].call(this,i)},this.remove=function(i){var o=[];for(e=0,t=n.length;e<t;e++)n[e]!==i&&o.push(n[e]);n=o},this.length=function(){return n.length}}function f(e,n){if(e)if(e.resizedAttached)e.resizedAttached.add(n);else{e.resizedAttached=new c,e.resizedAttached.add(n),e.resizeSensor=document.createElement("div"),e.resizeSensor.dir="ltr",e.resizeSensor.className="resize-sensor";var i={pointerEvents:"none",position:"absolute",left:"0px",top:"0px",right:"0px",bottom:"0px",overflow:"hidden",zIndex:"-1",visibility:"hidden",maxWidth:"100%"},s={position:"absolute",left:"0px",top:"0px",transition:"0s"};r(e.resizeSensor,i);var d=document.createElement("div");d.className="resize-sensor-expand",r(d,i);var f=document.createElement("div");r(f,s),d.appendChild(f);var h=document.createElement("div");h.className="resize-sensor-shrink",r(h,i);var l=document.createElement("div");r(l,s),r(l,{width:"200%",height:"200%"}),h.appendChild(l),e.resizeSensor.appendChild(d),e.resizeSensor.appendChild(h),e.appendChild(e.resizeSensor);var u=window.getComputedStyle(e),p=u?u.getPropertyValue("position"):null;"absolute"!==p&&"relative"!==p&&"fixed"!==p&&"sticky"!==p&&(e.style.position="relative");var m=!1,v=0,z=o(e),w=0,g=0,y=!0;a=0;var S=function(){if(y){if(0===e.offsetWidth&&0===e.offsetHeight)return void(a||(a=t(function(){a=0,S()})));y=!1}var n,i;n=e.offsetWidth,i=e.offsetHeight,f.style.width=n+10+"px",f.style.height=i+10+"px",d.scrollLeft=n+10,d.scrollTop=i+10,h.scrollLeft=n+10,h.scrollTop=i+10};e.resizeSensor.resetSensor=S;var b=function(){v=0,m&&(w=z.width,g=z.height,e.resizedAttached&&e.resizedAttached.call(z))},A=function(){z=o(e),(m=z.width!==w||z.height!==g)&&!v&&(v=t(b)),S()},x=function(e,t,n){e.attachEvent?e.attachEvent("on"+t,n):e.addEventListener(t,n)};x(d,"scroll",A),x(h,"scroll",A),a=t(function(){a=0,S()})}}i(e,function(e){f(e,d)}),this.detach=function(t){a&&(n(a),a=0),s.detach(e,t)},this.reset=function(){e.resizeSensor.resetSensor&&e.resizeSensor.resetSensor()}};if(s.reset=function(e){i(e,function(t){e.resizeSensor.resetSensor&&t.resizeSensor.resetSensor()})},s.detach=function(e,t){i(e,function(e){e&&(e.resizedAttached&&"function"==typeof t&&(e.resizedAttached.remove(t),e.resizedAttached.length())||e.resizeSensor&&(e.contains(e.resizeSensor)&&e.removeChild(e.resizeSensor),delete e.resizeSensor,delete e.resizedAttached))})},"undefined"!=typeof MutationObserver){var d=new MutationObserver(function(e){for(var t in e)if(e.hasOwnProperty(t))for(var n=e[t].addedNodes,i=0;i<n.length;i++)n[i].resizeSensor&&s.reset(n[i])});document.addEventListener("DOMContentLoaded",function(e){d.observe(document.body,{childList:!0,subtree:!0})})}return s});