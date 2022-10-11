(function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.VMoney=n():e.VMoney=n()})(this,function(){return function(e){function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var t={};return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p=".",n(n.s=9)}([function(e,n,t){"use strict";n.a={prefix:"",suffix:"",thousands:",",decimal:".",precision:2,allowBlank:!1}},function(e,n,t){"use strict";var r=t(2),i=t(5),o=t(0);n.a=function(e,n){if(n.value){var u=t.i(i.a)(o.a,n.value);if("INPUT"!==e.tagName.toLocaleUpperCase()){var a=e.getElementsByTagName("input");1!==a.length||(e=a[0])}e.onkeydown=function(n){var i=8==n.which||46==n.which,o=e.value.length-e.selectionEnd==0;u.allowBlank&&i&&o&&0===t.i(r.a)(e.value,0)&&(e.value=0,e.dispatchEvent(t.i(r.b)("change")))},e.oninput=function(){var n=e.value.length-e.selectionEnd;e.value=t.i(r.c)(e.value,u),n=Math.max(n,u.suffix.length),n=e.value.length-n,n=Math.max(n,u.prefix.length+1),t.i(r.d)(e,n),e.dispatchEvent(t.i(r.b)("change"))},e.onfocus=function(){t.i(r.d)(e,e.value.length-u.suffix.length)},e.oninput(),e.dispatchEvent(t.i(r.b)("input"))}}},function(e,n,t){"use strict";function r(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v.a;if(n.allowBlank&&""==e)return"";"number"==typeof e&&(e=e.toFixed(u(n.precision)));var t=e.indexOf("-")>=0?"-":"",r=o(e),i=c(r,n.precision),a=l(i).split("."),d=a[0],p=a[1];return d=f(d,n.thousands),n.prefix+t+s(d,p,n.decimal)+n.suffix}function i(e,n){var t=e.indexOf("-")>=0?-1:1,r=o(e),i=c(r,n);return parseFloat(i)*t}function o(e){return l(e).replace(/\D+/g,"")||"0"}function u(e){return a(0,e,20)}function a(e,n,t){return Math.max(e,Math.min(n,t))}function c(e,n){var t=Math.pow(10,n);return(parseFloat(e)/t).toFixed(u(n))}function f(e,n){return e.replace(/(\d)(?=(?:\d{3})+\b)/gm,"$1"+n)}function s(e,n,t){return n?e+t+n:e}function l(e){return e?e.toString():""}function d(e,n){var t=function(){e.setSelectionRange(n,n)};e===document.activeElement&&(t(),setTimeout(t,1))}function p(e){var n=document.createEvent("Event");return n.initEvent(e,!0,!0),n}t.d(n,"c",function(){return r}),t.d(n,"a",function(){return i}),t.d(n,"d",function(){return d}),t.d(n,"b",function(){return p});var v=t(0)},function(e,n,t){"use strict";function r(e,n){n&&Object.keys(n).map(function(e){a.a[e]=n[e]}),e.directive("money",u.a),e.component("money",o.a)}Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"VERSION",function(){return c});var i=t(6),o=t.n(i),u=t(1),a=t(0);t.d(n,"Money",function(){return o.a}),t.d(n,"VMoney",function(){return u.a}),t.d(n,"options",function(){return a.a});var c="0.8.3";n.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),i=t(0),o=t(2);n.default={name:"Money",props:{value:{required:!0,type:[Number,String],default:0},masked:{type:Boolean,default:!1},precision:{type:Number,default:function(){return i.a.precision}},decimal:{type:String,default:function(){return i.a.decimal}},thousands:{type:String,default:function(){return i.a.thousands}},prefix:{type:String,default:function(){return i.a.prefix}},suffix:{type:String,default:function(){return i.a.suffix}},allowBlank:{type:Boolean,default:function(){return i.a.allowBlank}}},directives:{money:r.a},data:function(){return{formattedValue:""}},watch:{value:{immediate:!0,handler:function(e,n){var r=t.i(o.c)(e,this.$props);r!==this.formattedValue&&(this.formattedValue=r)}}},methods:{change:function(e){this.$emit("input",this.masked?e.target.value:t.i(o.a)(e.target.value,this.precision))}}}},function(e,n,t){"use strict";n.a=function(e,n){return e=e||{},n=n||{},Object.keys(e).concat(Object.keys(n)).reduce(function(t,r){return t[r]=void 0===n[r]?e[r]:n[r],t},{})}},function(e,n,t){var r=t(7)(t(4),t(8),null,null);e.exports=r.exports},function(e,n){e.exports=function(e,n,t,r){var i,o=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(i=e,o=e.default);var a="function"==typeof o?o.options:o;if(n&&(a.render=n.render,a.staticRenderFns=n.staticRenderFns),t&&(a._scopeId=t),r){var c=a.computed||(a.computed={});Object.keys(r).forEach(function(e){var n=r[e];c[e]=function(){return n}})}return{esModule:i,exports:o,options:a}}},function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;return(e._self._c||n)("input",{directives:[{name:"money",rawName:"v-money",value:{precision:e.precision,decimal:e.decimal,thousands:e.thousands,prefix:e.prefix,suffix:e.suffix,allowBlank:e.allowBlank},expression:"{precision, decimal, thousands, prefix, suffix, allowBlank}"}],staticClass:"v-money",attrs:{type:"tel"},domProps:{value:e.formattedValue},on:{change:e.change}})},staticRenderFns:[]}},function(e,n,t){e.exports=t(3)}])});