function a1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Ts(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var uc={exports:{}},ii={},cc={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vr=Symbol.for("react.element"),u1=Symbol.for("react.portal"),c1=Symbol.for("react.fragment"),f1=Symbol.for("react.strict_mode"),d1=Symbol.for("react.profiler"),p1=Symbol.for("react.provider"),m1=Symbol.for("react.context"),h1=Symbol.for("react.forward_ref"),g1=Symbol.for("react.suspense"),v1=Symbol.for("react.memo"),y1=Symbol.for("react.lazy"),Da=Symbol.iterator;function w1(e){return e===null||typeof e!="object"?null:(e=Da&&e[Da]||e["@@iterator"],typeof e=="function"?e:null)}var fc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dc=Object.assign,pc={};function Bn(e,t,n){this.props=e,this.context=t,this.refs=pc,this.updater=n||fc}Bn.prototype.isReactComponent={};Bn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Bn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function mc(){}mc.prototype=Bn.prototype;function zs(e,t,n){this.props=e,this.context=t,this.refs=pc,this.updater=n||fc}var Rs=zs.prototype=new mc;Rs.constructor=zs;dc(Rs,Bn.prototype);Rs.isPureReactComponent=!0;var Aa=Array.isArray,hc=Object.prototype.hasOwnProperty,js={current:null},gc={key:!0,ref:!0,__self:!0,__source:!0};function vc(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)hc.call(t,r)&&!gc.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Vr,type:e,key:i,ref:l,props:o,_owner:js.current}}function x1(e,t){return{$$typeof:Vr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Os(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vr}function S1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Va=/\/+/g;function Gi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?S1(""+e.key):t.toString(36)}function vo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Vr:case u1:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Gi(l,0):r,Aa(o)?(n="",e!=null&&(n=e.replace(Va,"$&/")+"/"),vo(o,t,n,"",function(c){return c})):o!=null&&(Os(o)&&(o=x1(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Va,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Aa(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+Gi(i,s);l+=vo(i,t,n,a,o)}else if(a=w1(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+Gi(i,s++),l+=vo(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Yr(e,t,n){if(e==null)return e;var r=[],o=0;return vo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function C1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var _e={current:null},yo={transition:null},k1={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:yo,ReactCurrentOwner:js};I.Children={map:Yr,forEach:function(e,t,n){Yr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Yr(e,function(){t++}),t},toArray:function(e){return Yr(e,function(t){return t})||[]},only:function(e){if(!Os(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=Bn;I.Fragment=c1;I.Profiler=d1;I.PureComponent=zs;I.StrictMode=f1;I.Suspense=g1;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k1;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=dc({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=js.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)hc.call(t,a)&&!gc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Vr,type:e.type,key:o,ref:i,props:r,_owner:l}};I.createContext=function(e){return e={$$typeof:m1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:p1,_context:e},e.Consumer=e};I.createElement=vc;I.createFactory=function(e){var t=vc.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:h1,render:e}};I.isValidElement=Os;I.lazy=function(e){return{$$typeof:y1,_payload:{_status:-1,_result:e},_init:C1}};I.memo=function(e,t){return{$$typeof:v1,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=yo.transition;yo.transition={};try{e()}finally{yo.transition=t}};I.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};I.useCallback=function(e,t){return _e.current.useCallback(e,t)};I.useContext=function(e){return _e.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return _e.current.useDeferredValue(e)};I.useEffect=function(e,t){return _e.current.useEffect(e,t)};I.useId=function(){return _e.current.useId()};I.useImperativeHandle=function(e,t,n){return _e.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return _e.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return _e.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return _e.current.useMemo(e,t)};I.useReducer=function(e,t,n){return _e.current.useReducer(e,t,n)};I.useRef=function(e){return _e.current.useRef(e)};I.useState=function(e){return _e.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return _e.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return _e.current.useTransition()};I.version="18.2.0";cc.exports=I;var z=cc.exports;const U=Ts(z),Ua=a1({__proto__:null,default:U},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E1=z,_1=Symbol.for("react.element"),N1=Symbol.for("react.fragment"),P1=Object.prototype.hasOwnProperty,L1=E1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T1={key:!0,ref:!0,__self:!0,__source:!0};function yc(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)P1.call(t,r)&&!T1.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:_1,type:e,key:i,ref:l,props:o,_owner:L1.current}}ii.Fragment=N1;ii.jsx=yc;ii.jsxs=yc;uc.exports=ii;var x=uc.exports,El={},wc={exports:{}},He={},xc={exports:{}},Sc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,O){var $=L.length;L.push(O);e:for(;0<$;){var A=$-1>>>1,V=L[A];if(0<o(V,O))L[A]=O,L[$]=V,$=A;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var O=L[0],$=L.pop();if($!==O){L[0]=$;e:for(var A=0,V=L.length,fe=V>>>1;A<fe;){var oe=2*(A+1)-1,Le=L[oe],Se=oe+1,ut=L[Se];if(0>o(Le,$))Se<V&&0>o(ut,Le)?(L[A]=ut,L[Se]=$,A=Se):(L[A]=Le,L[oe]=$,A=oe);else if(Se<V&&0>o(ut,$))L[A]=ut,L[Se]=$,A=Se;else break e}}return O}function o(L,O){var $=L.sortIndex-O.sortIndex;return $!==0?$:L.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],c=[],h=1,m=null,p=3,w=!1,v=!1,g=!1,P=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(L){for(var O=n(c);O!==null;){if(O.callback===null)r(c);else if(O.startTime<=L)r(c),O.sortIndex=O.expirationTime,t(a,O);else break;O=n(c)}}function y(L){if(g=!1,d(L),!v)if(n(a)!==null)v=!0,Tt(E);else{var O=n(c);O!==null&&Me(y,O.startTime-L)}}function E(L,O){v=!1,g&&(g=!1,f(C),C=-1),w=!0;var $=p;try{for(d(O),m=n(a);m!==null&&(!(m.expirationTime>O)||L&&!G());){var A=m.callback;if(typeof A=="function"){m.callback=null,p=m.priorityLevel;var V=A(m.expirationTime<=O);O=e.unstable_now(),typeof V=="function"?m.callback=V:m===n(a)&&r(a),d(O)}else r(a);m=n(a)}if(m!==null)var fe=!0;else{var oe=n(c);oe!==null&&Me(y,oe.startTime-O),fe=!1}return fe}finally{m=null,p=$,w=!1}}var N=!1,S=null,C=-1,j=5,R=-1;function G(){return!(e.unstable_now()-R<j)}function Pe(){if(S!==null){var L=e.unstable_now();R=L;var O=!0;try{O=S(!0,L)}finally{O?Ye():(N=!1,S=null)}}else N=!1}var Ye;if(typeof u=="function")Ye=function(){u(Pe)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,Lt=et.port2;et.port1.onmessage=Pe,Ye=function(){Lt.postMessage(null)}}else Ye=function(){P(Pe,0)};function Tt(L){S=L,N||(N=!0,Ye())}function Me(L,O){C=P(function(){L(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){v||w||(v=!0,Tt(E))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(L){switch(p){case 1:case 2:case 3:var O=3;break;default:O=p}var $=p;p=O;try{return L()}finally{p=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,O){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var $=p;p=L;try{return O()}finally{p=$}},e.unstable_scheduleCallback=function(L,O,$){var A=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?A+$:A):$=A,L){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=$+V,L={id:h++,callback:O,priorityLevel:L,startTime:$,expirationTime:V,sortIndex:-1},$>A?(L.sortIndex=$,t(c,L),n(a)===null&&L===n(c)&&(g?(f(C),C=-1):g=!0,Me(y,$-A))):(L.sortIndex=V,t(a,L),v||w||(v=!0,Tt(E))),L},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(L){var O=p;return function(){var $=p;p=O;try{return L.apply(this,arguments)}finally{p=$}}}})(Sc);xc.exports=Sc;var z1=xc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cc=z,Be=z1;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kc=new Set,gr={};function fn(e,t){$n(e,t),$n(e+"Capture",t)}function $n(e,t){for(gr[e]=t,e=0;e<t.length;e++)kc.add(t[e])}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_l=Object.prototype.hasOwnProperty,R1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ba={},Ha={};function j1(e){return _l.call(Ha,e)?!0:_l.call(Ba,e)?!1:R1.test(e)?Ha[e]=!0:(Ba[e]=!0,!1)}function O1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $1(e,t,n,r){if(t===null||typeof t>"u"||O1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ne(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new Ne(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new Ne(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new Ne(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new Ne(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new Ne(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new Ne(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new Ne(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new Ne(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new Ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var $s=/[\-:]([a-z])/g;function Is(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace($s,Is);he[t]=new Ne(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace($s,Is);he[t]=new Ne(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($s,Is);he[t]=new Ne(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new Ne(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new Ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ms(e,t,n,r){var o=he.hasOwnProperty(t)?he[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($1(t,n,o,r)&&(n=null),r||o===null?j1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Pt=Cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xr=Symbol.for("react.element"),hn=Symbol.for("react.portal"),gn=Symbol.for("react.fragment"),Fs=Symbol.for("react.strict_mode"),Nl=Symbol.for("react.profiler"),Ec=Symbol.for("react.provider"),_c=Symbol.for("react.context"),Ds=Symbol.for("react.forward_ref"),Pl=Symbol.for("react.suspense"),Ll=Symbol.for("react.suspense_list"),As=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),Nc=Symbol.for("react.offscreen"),Wa=Symbol.iterator;function Yn(e){return e===null||typeof e!="object"?null:(e=Wa&&e[Wa]||e["@@iterator"],typeof e=="function"?e:null)}var b=Object.assign,Zi;function nr(e){if(Zi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Zi=t&&t[1]||""}return`
`+Zi+e}var qi=!1;function Ji(e,t){if(!e||qi)return"";qi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{qi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?nr(e):""}function I1(e){switch(e.tag){case 5:return nr(e.type);case 16:return nr("Lazy");case 13:return nr("Suspense");case 19:return nr("SuspenseList");case 0:case 2:case 15:return e=Ji(e.type,!1),e;case 11:return e=Ji(e.type.render,!1),e;case 1:return e=Ji(e.type,!0),e;default:return""}}function Tl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case gn:return"Fragment";case hn:return"Portal";case Nl:return"Profiler";case Fs:return"StrictMode";case Pl:return"Suspense";case Ll:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _c:return(e.displayName||"Context")+".Consumer";case Ec:return(e._context.displayName||"Context")+".Provider";case Ds:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case As:return t=e.displayName||null,t!==null?t:Tl(e.type)||"Memo";case Rt:t=e._payload,e=e._init;try{return Tl(e(t))}catch{}}return null}function M1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tl(t);case 8:return t===Fs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function F1(e){var t=Pc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Kr(e){e._valueTracker||(e._valueTracker=F1(e))}function Lc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Pc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Oo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zl(e,t){var n=t.checked;return b({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Qa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Tc(e,t){t=t.checked,t!=null&&Ms(e,"checked",t,!1)}function Rl(e,t){Tc(e,t);var n=Yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?jl(e,t.type,n):t.hasOwnProperty("defaultValue")&&jl(e,t.type,Yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ya(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function jl(e,t,n){(t!=="number"||Oo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var rr=Array.isArray;function Pn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Yt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ol(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return b({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(rr(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Yt(n)}}function zc(e,t){var n=Yt(t.value),r=Yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ka(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Rc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $l(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Rc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Gr,jc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Gr=Gr||document.createElement("div"),Gr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Gr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var lr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},D1=["Webkit","ms","Moz","O"];Object.keys(lr).forEach(function(e){D1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),lr[t]=lr[e]})});function Oc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||lr.hasOwnProperty(e)&&lr[e]?(""+t).trim():t+"px"}function $c(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Oc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var A1=b({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Il(e,t){if(t){if(A1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Ml(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fl=null;function Vs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dl=null,Ln=null,Tn=null;function Ga(e){if(e=Hr(e)){if(typeof Dl!="function")throw Error(k(280));var t=e.stateNode;t&&(t=ci(t),Dl(e.stateNode,e.type,t))}}function Ic(e){Ln?Tn?Tn.push(e):Tn=[e]:Ln=e}function Mc(){if(Ln){var e=Ln,t=Tn;if(Tn=Ln=null,Ga(e),t)for(e=0;e<t.length;e++)Ga(t[e])}}function Fc(e,t){return e(t)}function Dc(){}var bi=!1;function Ac(e,t,n){if(bi)return e(t,n);bi=!0;try{return Fc(e,t,n)}finally{bi=!1,(Ln!==null||Tn!==null)&&(Dc(),Mc())}}function yr(e,t){var n=e.stateNode;if(n===null)return null;var r=ci(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Al=!1;if(kt)try{var Xn={};Object.defineProperty(Xn,"passive",{get:function(){Al=!0}}),window.addEventListener("test",Xn,Xn),window.removeEventListener("test",Xn,Xn)}catch{Al=!1}function V1(e,t,n,r,o,i,l,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var sr=!1,$o=null,Io=!1,Vl=null,U1={onError:function(e){sr=!0,$o=e}};function B1(e,t,n,r,o,i,l,s,a){sr=!1,$o=null,V1.apply(U1,arguments)}function H1(e,t,n,r,o,i,l,s,a){if(B1.apply(this,arguments),sr){if(sr){var c=$o;sr=!1,$o=null}else throw Error(k(198));Io||(Io=!0,Vl=c)}}function dn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Vc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Za(e){if(dn(e)!==e)throw Error(k(188))}function W1(e){var t=e.alternate;if(!t){if(t=dn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Za(o),e;if(i===r)return Za(o),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Uc(e){return e=W1(e),e!==null?Bc(e):null}function Bc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Bc(e);if(t!==null)return t;e=e.sibling}return null}var Hc=Be.unstable_scheduleCallback,qa=Be.unstable_cancelCallback,Q1=Be.unstable_shouldYield,Y1=Be.unstable_requestPaint,te=Be.unstable_now,X1=Be.unstable_getCurrentPriorityLevel,Us=Be.unstable_ImmediatePriority,Wc=Be.unstable_UserBlockingPriority,Mo=Be.unstable_NormalPriority,K1=Be.unstable_LowPriority,Qc=Be.unstable_IdlePriority,li=null,ht=null;function G1(e){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(li,e,void 0,(e.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:J1,Z1=Math.log,q1=Math.LN2;function J1(e){return e>>>=0,e===0?32:31-(Z1(e)/q1|0)|0}var Zr=64,qr=4194304;function or(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=or(s):(i&=l,i!==0&&(r=or(i)))}else l=n&~o,l!==0?r=or(l):i!==0&&(r=or(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-lt(t),o=1<<n,r|=e[n],t&=~o;return r}function b1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ed(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-lt(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=b1(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function Ul(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yc(){var e=Zr;return Zr<<=1,!(Zr&4194240)&&(Zr=64),e}function el(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ur(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-lt(t),e[t]=n}function td(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-lt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Bs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-lt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var B=0;function Xc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Kc,Hs,Gc,Zc,qc,Bl=!1,Jr=[],Dt=null,At=null,Vt=null,wr=new Map,xr=new Map,Ot=[],nd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ja(e,t){switch(e){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":At=null;break;case"mouseover":case"mouseout":Vt=null;break;case"pointerover":case"pointerout":wr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xr.delete(t.pointerId)}}function Kn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Hr(t),t!==null&&Hs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function rd(e,t,n,r,o){switch(t){case"focusin":return Dt=Kn(Dt,e,t,n,r,o),!0;case"dragenter":return At=Kn(At,e,t,n,r,o),!0;case"mouseover":return Vt=Kn(Vt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return wr.set(i,Kn(wr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,xr.set(i,Kn(xr.get(i)||null,e,t,n,r,o)),!0}return!1}function Jc(e){var t=bt(e.target);if(t!==null){var n=dn(t);if(n!==null){if(t=n.tag,t===13){if(t=Vc(n),t!==null){e.blockedOn=t,qc(e.priority,function(){Gc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Hl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Fl=r,n.target.dispatchEvent(r),Fl=null}else return t=Hr(n),t!==null&&Hs(t),e.blockedOn=n,!1;t.shift()}return!0}function ba(e,t,n){wo(e)&&n.delete(t)}function od(){Bl=!1,Dt!==null&&wo(Dt)&&(Dt=null),At!==null&&wo(At)&&(At=null),Vt!==null&&wo(Vt)&&(Vt=null),wr.forEach(ba),xr.forEach(ba)}function Gn(e,t){e.blockedOn===t&&(e.blockedOn=null,Bl||(Bl=!0,Be.unstable_scheduleCallback(Be.unstable_NormalPriority,od)))}function Sr(e){function t(o){return Gn(o,e)}if(0<Jr.length){Gn(Jr[0],e);for(var n=1;n<Jr.length;n++){var r=Jr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Dt!==null&&Gn(Dt,e),At!==null&&Gn(At,e),Vt!==null&&Gn(Vt,e),wr.forEach(t),xr.forEach(t),n=0;n<Ot.length;n++)r=Ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ot.length&&(n=Ot[0],n.blockedOn===null);)Jc(n),n.blockedOn===null&&Ot.shift()}var zn=Pt.ReactCurrentBatchConfig,Do=!0;function id(e,t,n,r){var o=B,i=zn.transition;zn.transition=null;try{B=1,Ws(e,t,n,r)}finally{B=o,zn.transition=i}}function ld(e,t,n,r){var o=B,i=zn.transition;zn.transition=null;try{B=4,Ws(e,t,n,r)}finally{B=o,zn.transition=i}}function Ws(e,t,n,r){if(Do){var o=Hl(e,t,n,r);if(o===null)cl(e,t,r,Ao,n),Ja(e,r);else if(rd(o,e,t,n,r))r.stopPropagation();else if(Ja(e,r),t&4&&-1<nd.indexOf(e)){for(;o!==null;){var i=Hr(o);if(i!==null&&Kc(i),i=Hl(e,t,n,r),i===null&&cl(e,t,r,Ao,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else cl(e,t,r,null,n)}}var Ao=null;function Hl(e,t,n,r){if(Ao=null,e=Vs(r),e=bt(e),e!==null)if(t=dn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Vc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ao=e,null}function bc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X1()){case Us:return 1;case Wc:return 4;case Mo:case K1:return 16;case Qc:return 536870912;default:return 16}default:return 16}}var It=null,Qs=null,xo=null;function e0(){if(xo)return xo;var e,t=Qs,n=t.length,r,o="value"in It?It.value:It.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return xo=o.slice(e,1<r?1-r:void 0)}function So(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function br(){return!0}function eu(){return!1}function We(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?br:eu,this.isPropagationStopped=eu,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=br)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=br)},persist:function(){},isPersistent:br}),t}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ys=We(Hn),Br=b({},Hn,{view:0,detail:0}),sd=We(Br),tl,nl,Zn,si=b({},Br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zn&&(Zn&&e.type==="mousemove"?(tl=e.screenX-Zn.screenX,nl=e.screenY-Zn.screenY):nl=tl=0,Zn=e),tl)},movementY:function(e){return"movementY"in e?e.movementY:nl}}),tu=We(si),ad=b({},si,{dataTransfer:0}),ud=We(ad),cd=b({},Br,{relatedTarget:0}),rl=We(cd),fd=b({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),dd=We(fd),pd=b({},Hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),md=We(pd),hd=b({},Hn,{data:0}),nu=We(hd),gd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yd[e])?!!t[e]:!1}function Xs(){return wd}var xd=b({},Br,{key:function(e){if(e.key){var t=gd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=So(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xs,charCode:function(e){return e.type==="keypress"?So(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?So(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sd=We(xd),Cd=b({},si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ru=We(Cd),kd=b({},Br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xs}),Ed=We(kd),_d=b({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nd=We(_d),Pd=b({},si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ld=We(Pd),Td=[9,13,27,32],Ks=kt&&"CompositionEvent"in window,ar=null;kt&&"documentMode"in document&&(ar=document.documentMode);var zd=kt&&"TextEvent"in window&&!ar,t0=kt&&(!Ks||ar&&8<ar&&11>=ar),ou=" ",iu=!1;function n0(e,t){switch(e){case"keyup":return Td.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function r0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vn=!1;function Rd(e,t){switch(e){case"compositionend":return r0(t);case"keypress":return t.which!==32?null:(iu=!0,ou);case"textInput":return e=t.data,e===ou&&iu?null:e;default:return null}}function jd(e,t){if(vn)return e==="compositionend"||!Ks&&n0(e,t)?(e=e0(),xo=Qs=It=null,vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return t0&&t.locale!=="ko"?null:t.data;default:return null}}var Od={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Od[e.type]:t==="textarea"}function o0(e,t,n,r){Ic(r),t=Vo(t,"onChange"),0<t.length&&(n=new Ys("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ur=null,Cr=null;function $d(e){h0(e,0)}function ai(e){var t=xn(e);if(Lc(t))return e}function Id(e,t){if(e==="change")return t}var i0=!1;if(kt){var ol;if(kt){var il="oninput"in document;if(!il){var su=document.createElement("div");su.setAttribute("oninput","return;"),il=typeof su.oninput=="function"}ol=il}else ol=!1;i0=ol&&(!document.documentMode||9<document.documentMode)}function au(){ur&&(ur.detachEvent("onpropertychange",l0),Cr=ur=null)}function l0(e){if(e.propertyName==="value"&&ai(Cr)){var t=[];o0(t,Cr,e,Vs(e)),Ac($d,t)}}function Md(e,t,n){e==="focusin"?(au(),ur=t,Cr=n,ur.attachEvent("onpropertychange",l0)):e==="focusout"&&au()}function Fd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ai(Cr)}function Dd(e,t){if(e==="click")return ai(t)}function Ad(e,t){if(e==="input"||e==="change")return ai(t)}function Vd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var at=typeof Object.is=="function"?Object.is:Vd;function kr(e,t){if(at(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!_l.call(t,o)||!at(e[o],t[o]))return!1}return!0}function uu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cu(e,t){var n=uu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=uu(n)}}function s0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?s0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function a0(){for(var e=window,t=Oo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Oo(e.document)}return t}function Gs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ud(e){var t=a0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&s0(n.ownerDocument.documentElement,n)){if(r!==null&&Gs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=cu(n,i);var l=cu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bd=kt&&"documentMode"in document&&11>=document.documentMode,yn=null,Wl=null,cr=null,Ql=!1;function fu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ql||yn==null||yn!==Oo(r)||(r=yn,"selectionStart"in r&&Gs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),cr&&kr(cr,r)||(cr=r,r=Vo(Wl,"onSelect"),0<r.length&&(t=new Ys("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=yn)))}function eo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wn={animationend:eo("Animation","AnimationEnd"),animationiteration:eo("Animation","AnimationIteration"),animationstart:eo("Animation","AnimationStart"),transitionend:eo("Transition","TransitionEnd")},ll={},u0={};kt&&(u0=document.createElement("div").style,"AnimationEvent"in window||(delete wn.animationend.animation,delete wn.animationiteration.animation,delete wn.animationstart.animation),"TransitionEvent"in window||delete wn.transitionend.transition);function ui(e){if(ll[e])return ll[e];if(!wn[e])return e;var t=wn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in u0)return ll[e]=t[n];return e}var c0=ui("animationend"),f0=ui("animationiteration"),d0=ui("animationstart"),p0=ui("transitionend"),m0=new Map,du="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kt(e,t){m0.set(e,t),fn(t,[e])}for(var sl=0;sl<du.length;sl++){var al=du[sl],Hd=al.toLowerCase(),Wd=al[0].toUpperCase()+al.slice(1);Kt(Hd,"on"+Wd)}Kt(c0,"onAnimationEnd");Kt(f0,"onAnimationIteration");Kt(d0,"onAnimationStart");Kt("dblclick","onDoubleClick");Kt("focusin","onFocus");Kt("focusout","onBlur");Kt(p0,"onTransitionEnd");$n("onMouseEnter",["mouseout","mouseover"]);$n("onMouseLeave",["mouseout","mouseover"]);$n("onPointerEnter",["pointerout","pointerover"]);$n("onPointerLeave",["pointerout","pointerover"]);fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qd=new Set("cancel close invalid load scroll toggle".split(" ").concat(ir));function pu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,H1(r,t,void 0,e),e.currentTarget=null}function h0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;pu(o,s,c),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,c=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;pu(o,s,c),i=a}}}if(Io)throw e=Vl,Io=!1,Vl=null,e}function X(e,t){var n=t[Zl];n===void 0&&(n=t[Zl]=new Set);var r=e+"__bubble";n.has(r)||(g0(t,e,2,!1),n.add(r))}function ul(e,t,n){var r=0;t&&(r|=4),g0(n,e,r,t)}var to="_reactListening"+Math.random().toString(36).slice(2);function Er(e){if(!e[to]){e[to]=!0,kc.forEach(function(n){n!=="selectionchange"&&(Qd.has(n)||ul(n,!1,e),ul(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[to]||(t[to]=!0,ul("selectionchange",!1,t))}}function g0(e,t,n,r){switch(bc(t)){case 1:var o=id;break;case 4:o=ld;break;default:o=Ws}n=o.bind(null,t,n,e),o=void 0,!Al||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function cl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=bt(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Ac(function(){var c=i,h=Vs(n),m=[];e:{var p=m0.get(e);if(p!==void 0){var w=Ys,v=e;switch(e){case"keypress":if(So(n)===0)break e;case"keydown":case"keyup":w=Sd;break;case"focusin":v="focus",w=rl;break;case"focusout":v="blur",w=rl;break;case"beforeblur":case"afterblur":w=rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=tu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=ud;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Ed;break;case c0:case f0:case d0:w=dd;break;case p0:w=Nd;break;case"scroll":w=sd;break;case"wheel":w=Ld;break;case"copy":case"cut":case"paste":w=md;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ru}var g=(t&4)!==0,P=!g&&e==="scroll",f=g?p!==null?p+"Capture":null:p;g=[];for(var u=c,d;u!==null;){d=u;var y=d.stateNode;if(d.tag===5&&y!==null&&(d=y,f!==null&&(y=yr(u,f),y!=null&&g.push(_r(u,y,d)))),P)break;u=u.return}0<g.length&&(p=new w(p,v,null,n,h),m.push({event:p,listeners:g}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",p&&n!==Fl&&(v=n.relatedTarget||n.fromElement)&&(bt(v)||v[Et]))break e;if((w||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,w?(v=n.relatedTarget||n.toElement,w=c,v=v?bt(v):null,v!==null&&(P=dn(v),v!==P||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=c),w!==v)){if(g=tu,y="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(g=ru,y="onPointerLeave",f="onPointerEnter",u="pointer"),P=w==null?p:xn(w),d=v==null?p:xn(v),p=new g(y,u+"leave",w,n,h),p.target=P,p.relatedTarget=d,y=null,bt(h)===c&&(g=new g(f,u+"enter",v,n,h),g.target=d,g.relatedTarget=P,y=g),P=y,w&&v)t:{for(g=w,f=v,u=0,d=g;d;d=pn(d))u++;for(d=0,y=f;y;y=pn(y))d++;for(;0<u-d;)g=pn(g),u--;for(;0<d-u;)f=pn(f),d--;for(;u--;){if(g===f||f!==null&&g===f.alternate)break t;g=pn(g),f=pn(f)}g=null}else g=null;w!==null&&mu(m,p,w,g,!1),v!==null&&P!==null&&mu(m,P,v,g,!0)}}e:{if(p=c?xn(c):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var E=Id;else if(lu(p))if(i0)E=Ad;else{E=Fd;var N=Md}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=Dd);if(E&&(E=E(e,c))){o0(m,E,n,h);break e}N&&N(e,p,c),e==="focusout"&&(N=p._wrapperState)&&N.controlled&&p.type==="number"&&jl(p,"number",p.value)}switch(N=c?xn(c):window,e){case"focusin":(lu(N)||N.contentEditable==="true")&&(yn=N,Wl=c,cr=null);break;case"focusout":cr=Wl=yn=null;break;case"mousedown":Ql=!0;break;case"contextmenu":case"mouseup":case"dragend":Ql=!1,fu(m,n,h);break;case"selectionchange":if(Bd)break;case"keydown":case"keyup":fu(m,n,h)}var S;if(Ks)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else vn?n0(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(t0&&n.locale!=="ko"&&(vn||C!=="onCompositionStart"?C==="onCompositionEnd"&&vn&&(S=e0()):(It=h,Qs="value"in It?It.value:It.textContent,vn=!0)),N=Vo(c,C),0<N.length&&(C=new nu(C,e,null,n,h),m.push({event:C,listeners:N}),S?C.data=S:(S=r0(n),S!==null&&(C.data=S)))),(S=zd?Rd(e,n):jd(e,n))&&(c=Vo(c,"onBeforeInput"),0<c.length&&(h=new nu("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=S))}h0(m,t)})}function _r(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=yr(e,n),i!=null&&r.unshift(_r(e,i,o)),i=yr(e,t),i!=null&&r.push(_r(e,i,o))),e=e.return}return r}function pn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function mu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,o?(a=yr(n,i),a!=null&&l.unshift(_r(n,a,s))):o||(a=yr(n,i),a!=null&&l.push(_r(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Yd=/\r\n?/g,Xd=/\u0000|\uFFFD/g;function hu(e){return(typeof e=="string"?e:""+e).replace(Yd,`
`).replace(Xd,"")}function no(e,t,n){if(t=hu(t),hu(e)!==t&&n)throw Error(k(425))}function Uo(){}var Yl=null,Xl=null;function Kl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gl=typeof setTimeout=="function"?setTimeout:void 0,Kd=typeof clearTimeout=="function"?clearTimeout:void 0,gu=typeof Promise=="function"?Promise:void 0,Gd=typeof queueMicrotask=="function"?queueMicrotask:typeof gu<"u"?function(e){return gu.resolve(null).then(e).catch(Zd)}:Gl;function Zd(e){setTimeout(function(){throw e})}function fl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Sr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Sr(t)}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function vu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Wn=Math.random().toString(36).slice(2),mt="__reactFiber$"+Wn,Nr="__reactProps$"+Wn,Et="__reactContainer$"+Wn,Zl="__reactEvents$"+Wn,qd="__reactListeners$"+Wn,Jd="__reactHandles$"+Wn;function bt(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Et]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=vu(e);e!==null;){if(n=e[mt])return n;e=vu(e)}return t}e=n,n=e.parentNode}return null}function Hr(e){return e=e[mt]||e[Et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function ci(e){return e[Nr]||null}var ql=[],Sn=-1;function Gt(e){return{current:e}}function K(e){0>Sn||(e.current=ql[Sn],ql[Sn]=null,Sn--)}function Y(e,t){Sn++,ql[Sn]=e.current,e.current=t}var Xt={},xe=Gt(Xt),je=Gt(!1),ln=Xt;function In(e,t){var n=e.type.contextTypes;if(!n)return Xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Oe(e){return e=e.childContextTypes,e!=null}function Bo(){K(je),K(xe)}function yu(e,t,n){if(xe.current!==Xt)throw Error(k(168));Y(xe,t),Y(je,n)}function v0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(k(108,M1(e)||"Unknown",o));return b({},n,r)}function Ho(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xt,ln=xe.current,Y(xe,e),Y(je,je.current),!0}function wu(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=v0(e,t,ln),r.__reactInternalMemoizedMergedChildContext=e,K(je),K(xe),Y(xe,e)):K(je),Y(je,n)}var wt=null,fi=!1,dl=!1;function y0(e){wt===null?wt=[e]:wt.push(e)}function bd(e){fi=!0,y0(e)}function Zt(){if(!dl&&wt!==null){dl=!0;var e=0,t=B;try{var n=wt;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wt=null,fi=!1}catch(o){throw wt!==null&&(wt=wt.slice(e+1)),Hc(Us,Zt),o}finally{B=t,dl=!1}}return null}var Cn=[],kn=0,Wo=null,Qo=0,Xe=[],Ke=0,sn=null,xt=1,St="";function qt(e,t){Cn[kn++]=Qo,Cn[kn++]=Wo,Wo=e,Qo=t}function w0(e,t,n){Xe[Ke++]=xt,Xe[Ke++]=St,Xe[Ke++]=sn,sn=e;var r=xt;e=St;var o=32-lt(r)-1;r&=~(1<<o),n+=1;var i=32-lt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,xt=1<<32-lt(t)+o|n<<o|r,St=i+e}else xt=1<<i|n<<o|r,St=e}function Zs(e){e.return!==null&&(qt(e,1),w0(e,1,0))}function qs(e){for(;e===Wo;)Wo=Cn[--kn],Cn[kn]=null,Qo=Cn[--kn],Cn[kn]=null;for(;e===sn;)sn=Xe[--Ke],Xe[Ke]=null,St=Xe[--Ke],Xe[Ke]=null,xt=Xe[--Ke],Xe[Ke]=null}var Ve=null,De=null,Z=!1,it=null;function x0(e,t){var n=Ge(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function xu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ve=e,De=Ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ve=e,De=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=sn!==null?{id:xt,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ge(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ve=e,De=null,!0):!1;default:return!1}}function Jl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bl(e){if(Z){var t=De;if(t){var n=t;if(!xu(e,t)){if(Jl(e))throw Error(k(418));t=Ut(n.nextSibling);var r=Ve;t&&xu(e,t)?x0(r,n):(e.flags=e.flags&-4097|2,Z=!1,Ve=e)}}else{if(Jl(e))throw Error(k(418));e.flags=e.flags&-4097|2,Z=!1,Ve=e}}}function Su(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function ro(e){if(e!==Ve)return!1;if(!Z)return Su(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Kl(e.type,e.memoizedProps)),t&&(t=De)){if(Jl(e))throw S0(),Error(k(418));for(;t;)x0(e,t),t=Ut(t.nextSibling)}if(Su(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){De=Ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}De=null}}else De=Ve?Ut(e.stateNode.nextSibling):null;return!0}function S0(){for(var e=De;e;)e=Ut(e.nextSibling)}function Mn(){De=Ve=null,Z=!1}function Js(e){it===null?it=[e]:it.push(e)}var e2=Pt.ReactCurrentBatchConfig;function rt(e,t){if(e&&e.defaultProps){t=b({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Yo=Gt(null),Xo=null,En=null,bs=null;function ea(){bs=En=Xo=null}function ta(e){var t=Yo.current;K(Yo),e._currentValue=t}function es(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Rn(e,t){Xo=e,bs=En=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Re=!0),e.firstContext=null)}function qe(e){var t=e._currentValue;if(bs!==e)if(e={context:e,memoizedValue:t,next:null},En===null){if(Xo===null)throw Error(k(308));En=e,Xo.dependencies={lanes:0,firstContext:e}}else En=En.next=e;return t}var en=null;function na(e){en===null?en=[e]:en.push(e)}function C0(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,na(t)):(n.next=o.next,o.next=n),t.interleaved=n,_t(e,r)}function _t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var jt=!1;function ra(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function k0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,_t(e,n)}return o=r.interleaved,o===null?(t.next=t,na(r)):(t.next=o.next,o.next=t),r.interleaved=t,_t(e,n)}function Co(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bs(e,n)}}function Cu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ko(e,t,n,r){var o=e.updateQueue;jt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,c=a.next;a.next=null,l===null?i=c:l.next=c,l=a;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==l&&(s===null?h.firstBaseUpdate=c:s.next=c,h.lastBaseUpdate=a))}if(i!==null){var m=o.baseState;l=0,h=c=a=null,s=i;do{var p=s.lane,w=s.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,g=s;switch(p=t,w=n,g.tag){case 1:if(v=g.payload,typeof v=="function"){m=v.call(w,m,p);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=g.payload,p=typeof v=="function"?v.call(w,m,p):v,p==null)break e;m=b({},m,p);break e;case 2:jt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[s]:p.push(s))}else w={eventTime:w,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(c=h=w,a=m):h=h.next=w,l|=p;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;p=s,s=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(h===null&&(a=m),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);un|=l,e.lanes=l,e.memoizedState=m}}function ku(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var E0=new Cc.Component().refs;function ts(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:b({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var di={isMounted:function(e){return(e=e._reactInternals)?dn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ee(),o=Wt(e),i=Ct(r,o);i.payload=t,n!=null&&(i.callback=n),t=Bt(e,i,o),t!==null&&(st(t,e,o,r),Co(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ee(),o=Wt(e),i=Ct(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Bt(e,i,o),t!==null&&(st(t,e,o,r),Co(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ee(),r=Wt(e),o=Ct(n,r);o.tag=2,t!=null&&(o.callback=t),t=Bt(e,o,r),t!==null&&(st(t,e,r,n),Co(t,e,r))}};function Eu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!kr(n,r)||!kr(o,i):!0}function _0(e,t,n){var r=!1,o=Xt,i=t.contextType;return typeof i=="object"&&i!==null?i=qe(i):(o=Oe(t)?ln:xe.current,r=t.contextTypes,i=(r=r!=null)?In(e,o):Xt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=di,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function _u(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&di.enqueueReplaceState(t,t.state,null)}function ns(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=E0,ra(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=qe(i):(i=Oe(t)?ln:xe.current,o.context=In(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ts(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&di.enqueueReplaceState(o,o.state,null),Ko(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function qn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;s===E0&&(s=o.refs={}),l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function oo(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Nu(e){var t=e._init;return t(e._payload)}function N0(e){function t(f,u){if(e){var d=f.deletions;d===null?(f.deletions=[u],f.flags|=16):d.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function o(f,u){return f=Qt(f,u),f.index=0,f.sibling=null,f}function i(f,u,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<u?(f.flags|=2,u):d):(f.flags|=2,u)):(f.flags|=1048576,u)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,u,d,y){return u===null||u.tag!==6?(u=wl(d,f.mode,y),u.return=f,u):(u=o(u,d),u.return=f,u)}function a(f,u,d,y){var E=d.type;return E===gn?h(f,u,d.props.children,y,d.key):u!==null&&(u.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Rt&&Nu(E)===u.type)?(y=o(u,d.props),y.ref=qn(f,u,d),y.return=f,y):(y=Lo(d.type,d.key,d.props,null,f.mode,y),y.ref=qn(f,u,d),y.return=f,y)}function c(f,u,d,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=xl(d,f.mode,y),u.return=f,u):(u=o(u,d.children||[]),u.return=f,u)}function h(f,u,d,y,E){return u===null||u.tag!==7?(u=rn(d,f.mode,y,E),u.return=f,u):(u=o(u,d),u.return=f,u)}function m(f,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=wl(""+u,f.mode,d),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Xr:return d=Lo(u.type,u.key,u.props,null,f.mode,d),d.ref=qn(f,null,u),d.return=f,d;case hn:return u=xl(u,f.mode,d),u.return=f,u;case Rt:var y=u._init;return m(f,y(u._payload),d)}if(rr(u)||Yn(u))return u=rn(u,f.mode,d,null),u.return=f,u;oo(f,u)}return null}function p(f,u,d,y){var E=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return E!==null?null:s(f,u,""+d,y);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Xr:return d.key===E?a(f,u,d,y):null;case hn:return d.key===E?c(f,u,d,y):null;case Rt:return E=d._init,p(f,u,E(d._payload),y)}if(rr(d)||Yn(d))return E!==null?null:h(f,u,d,y,null);oo(f,d)}return null}function w(f,u,d,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(d)||null,s(u,f,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Xr:return f=f.get(y.key===null?d:y.key)||null,a(u,f,y,E);case hn:return f=f.get(y.key===null?d:y.key)||null,c(u,f,y,E);case Rt:var N=y._init;return w(f,u,d,N(y._payload),E)}if(rr(y)||Yn(y))return f=f.get(d)||null,h(u,f,y,E,null);oo(u,y)}return null}function v(f,u,d,y){for(var E=null,N=null,S=u,C=u=0,j=null;S!==null&&C<d.length;C++){S.index>C?(j=S,S=null):j=S.sibling;var R=p(f,S,d[C],y);if(R===null){S===null&&(S=j);break}e&&S&&R.alternate===null&&t(f,S),u=i(R,u,C),N===null?E=R:N.sibling=R,N=R,S=j}if(C===d.length)return n(f,S),Z&&qt(f,C),E;if(S===null){for(;C<d.length;C++)S=m(f,d[C],y),S!==null&&(u=i(S,u,C),N===null?E=S:N.sibling=S,N=S);return Z&&qt(f,C),E}for(S=r(f,S);C<d.length;C++)j=w(S,f,C,d[C],y),j!==null&&(e&&j.alternate!==null&&S.delete(j.key===null?C:j.key),u=i(j,u,C),N===null?E=j:N.sibling=j,N=j);return e&&S.forEach(function(G){return t(f,G)}),Z&&qt(f,C),E}function g(f,u,d,y){var E=Yn(d);if(typeof E!="function")throw Error(k(150));if(d=E.call(d),d==null)throw Error(k(151));for(var N=E=null,S=u,C=u=0,j=null,R=d.next();S!==null&&!R.done;C++,R=d.next()){S.index>C?(j=S,S=null):j=S.sibling;var G=p(f,S,R.value,y);if(G===null){S===null&&(S=j);break}e&&S&&G.alternate===null&&t(f,S),u=i(G,u,C),N===null?E=G:N.sibling=G,N=G,S=j}if(R.done)return n(f,S),Z&&qt(f,C),E;if(S===null){for(;!R.done;C++,R=d.next())R=m(f,R.value,y),R!==null&&(u=i(R,u,C),N===null?E=R:N.sibling=R,N=R);return Z&&qt(f,C),E}for(S=r(f,S);!R.done;C++,R=d.next())R=w(S,f,C,R.value,y),R!==null&&(e&&R.alternate!==null&&S.delete(R.key===null?C:R.key),u=i(R,u,C),N===null?E=R:N.sibling=R,N=R);return e&&S.forEach(function(Pe){return t(f,Pe)}),Z&&qt(f,C),E}function P(f,u,d,y){if(typeof d=="object"&&d!==null&&d.type===gn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Xr:e:{for(var E=d.key,N=u;N!==null;){if(N.key===E){if(E=d.type,E===gn){if(N.tag===7){n(f,N.sibling),u=o(N,d.props.children),u.return=f,f=u;break e}}else if(N.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Rt&&Nu(E)===N.type){n(f,N.sibling),u=o(N,d.props),u.ref=qn(f,N,d),u.return=f,f=u;break e}n(f,N);break}else t(f,N);N=N.sibling}d.type===gn?(u=rn(d.props.children,f.mode,y,d.key),u.return=f,f=u):(y=Lo(d.type,d.key,d.props,null,f.mode,y),y.ref=qn(f,u,d),y.return=f,f=y)}return l(f);case hn:e:{for(N=d.key;u!==null;){if(u.key===N)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(f,u.sibling),u=o(u,d.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=xl(d,f.mode,y),u.return=f,f=u}return l(f);case Rt:return N=d._init,P(f,u,N(d._payload),y)}if(rr(d))return v(f,u,d,y);if(Yn(d))return g(f,u,d,y);oo(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(n(f,u.sibling),u=o(u,d),u.return=f,f=u):(n(f,u),u=wl(d,f.mode,y),u.return=f,f=u),l(f)):n(f,u)}return P}var Fn=N0(!0),P0=N0(!1),Wr={},gt=Gt(Wr),Pr=Gt(Wr),Lr=Gt(Wr);function tn(e){if(e===Wr)throw Error(k(174));return e}function oa(e,t){switch(Y(Lr,t),Y(Pr,e),Y(gt,Wr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$l(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$l(t,e)}K(gt),Y(gt,t)}function Dn(){K(gt),K(Pr),K(Lr)}function L0(e){tn(Lr.current);var t=tn(gt.current),n=$l(t,e.type);t!==n&&(Y(Pr,e),Y(gt,n))}function ia(e){Pr.current===e&&(K(gt),K(Pr))}var q=Gt(0);function Go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pl=[];function la(){for(var e=0;e<pl.length;e++)pl[e]._workInProgressVersionPrimary=null;pl.length=0}var ko=Pt.ReactCurrentDispatcher,ml=Pt.ReactCurrentBatchConfig,an=0,J=null,ie=null,ae=null,Zo=!1,fr=!1,Tr=0,t2=0;function ge(){throw Error(k(321))}function sa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!at(e[n],t[n]))return!1;return!0}function aa(e,t,n,r,o,i){if(an=i,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ko.current=e===null||e.memoizedState===null?i2:l2,e=n(r,o),fr){i=0;do{if(fr=!1,Tr=0,25<=i)throw Error(k(301));i+=1,ae=ie=null,t.updateQueue=null,ko.current=s2,e=n(r,o)}while(fr)}if(ko.current=qo,t=ie!==null&&ie.next!==null,an=0,ae=ie=J=null,Zo=!1,t)throw Error(k(300));return e}function ua(){var e=Tr!==0;return Tr=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?J.memoizedState=ae=e:ae=ae.next=e,ae}function Je(){if(ie===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=ae===null?J.memoizedState:ae.next;if(t!==null)ae=t,ie=e;else{if(e===null)throw Error(k(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},ae===null?J.memoizedState=ae=e:ae=ae.next=e}return ae}function zr(e,t){return typeof t=="function"?t(e):t}function hl(e){var t=Je(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ie,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,c=i;do{var h=c.lane;if((an&h)===h)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=m,l=r):a=a.next=m,J.lanes|=h,un|=h}c=c.next}while(c!==null&&c!==i);a===null?l=r:a.next=s,at(r,t.memoizedState)||(Re=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,J.lanes|=i,un|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function gl(e){var t=Je(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);at(i,t.memoizedState)||(Re=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function T0(){}function z0(e,t){var n=J,r=Je(),o=t(),i=!at(r.memoizedState,o);if(i&&(r.memoizedState=o,Re=!0),r=r.queue,ca(O0.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ae!==null&&ae.memoizedState.tag&1){if(n.flags|=2048,Rr(9,j0.bind(null,n,r,o,t),void 0,null),ue===null)throw Error(k(349));an&30||R0(n,t,o)}return o}function R0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function j0(e,t,n,r){t.value=n,t.getSnapshot=r,$0(t)&&I0(e)}function O0(e,t,n){return n(function(){$0(t)&&I0(e)})}function $0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!at(e,n)}catch{return!0}}function I0(e){var t=_t(e,1);t!==null&&st(t,e,1,-1)}function Pu(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zr,lastRenderedState:e},t.queue=e,e=e.dispatch=o2.bind(null,J,e),[t.memoizedState,e]}function Rr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function M0(){return Je().memoizedState}function Eo(e,t,n,r){var o=ft();J.flags|=e,o.memoizedState=Rr(1|t,n,void 0,r===void 0?null:r)}function pi(e,t,n,r){var o=Je();r=r===void 0?null:r;var i=void 0;if(ie!==null){var l=ie.memoizedState;if(i=l.destroy,r!==null&&sa(r,l.deps)){o.memoizedState=Rr(t,n,i,r);return}}J.flags|=e,o.memoizedState=Rr(1|t,n,i,r)}function Lu(e,t){return Eo(8390656,8,e,t)}function ca(e,t){return pi(2048,8,e,t)}function F0(e,t){return pi(4,2,e,t)}function D0(e,t){return pi(4,4,e,t)}function A0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function V0(e,t,n){return n=n!=null?n.concat([e]):null,pi(4,4,A0.bind(null,t,e),n)}function fa(){}function U0(e,t){var n=Je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&sa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function B0(e,t){var n=Je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&sa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function H0(e,t,n){return an&21?(at(n,t)||(n=Yc(),J.lanes|=n,un|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=n)}function n2(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=ml.transition;ml.transition={};try{e(!1),t()}finally{B=n,ml.transition=r}}function W0(){return Je().memoizedState}function r2(e,t,n){var r=Wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Q0(e))Y0(t,n);else if(n=C0(e,t,n,r),n!==null){var o=Ee();st(n,e,r,o),X0(n,t,r)}}function o2(e,t,n){var r=Wt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Q0(e))Y0(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,at(s,l)){var a=t.interleaved;a===null?(o.next=o,na(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=C0(e,t,o,r),n!==null&&(o=Ee(),st(n,e,r,o),X0(n,t,r))}}function Q0(e){var t=e.alternate;return e===J||t!==null&&t===J}function Y0(e,t){fr=Zo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function X0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bs(e,n)}}var qo={readContext:qe,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},i2={readContext:qe,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:qe,useEffect:Lu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Eo(4194308,4,A0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Eo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Eo(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=r2.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:Pu,useDebugValue:fa,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=Pu(!1),t=e[0];return e=n2.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,o=ft();if(Z){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ue===null)throw Error(k(349));an&30||R0(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Lu(O0.bind(null,r,i,e),[e]),r.flags|=2048,Rr(9,j0.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ft(),t=ue.identifierPrefix;if(Z){var n=St,r=xt;n=(r&~(1<<32-lt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=t2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},l2={readContext:qe,useCallback:U0,useContext:qe,useEffect:ca,useImperativeHandle:V0,useInsertionEffect:F0,useLayoutEffect:D0,useMemo:B0,useReducer:hl,useRef:M0,useState:function(){return hl(zr)},useDebugValue:fa,useDeferredValue:function(e){var t=Je();return H0(t,ie.memoizedState,e)},useTransition:function(){var e=hl(zr)[0],t=Je().memoizedState;return[e,t]},useMutableSource:T0,useSyncExternalStore:z0,useId:W0,unstable_isNewReconciler:!1},s2={readContext:qe,useCallback:U0,useContext:qe,useEffect:ca,useImperativeHandle:V0,useInsertionEffect:F0,useLayoutEffect:D0,useMemo:B0,useReducer:gl,useRef:M0,useState:function(){return gl(zr)},useDebugValue:fa,useDeferredValue:function(e){var t=Je();return ie===null?t.memoizedState=e:H0(t,ie.memoizedState,e)},useTransition:function(){var e=gl(zr)[0],t=Je().memoizedState;return[e,t]},useMutableSource:T0,useSyncExternalStore:z0,useId:W0,unstable_isNewReconciler:!1};function An(e,t){try{var n="",r=t;do n+=I1(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function vl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function rs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var a2=typeof WeakMap=="function"?WeakMap:Map;function K0(e,t,n){n=Ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){bo||(bo=!0,ps=r),rs(e,t)},n}function G0(e,t,n){n=Ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){rs(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){rs(e,t),typeof r!="function"&&(Ht===null?Ht=new Set([this]):Ht.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Tu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new a2;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=C2.bind(null,e,t,n),t.then(e,e))}function zu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ru(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ct(-1,1),t.tag=2,Bt(n,t,1))),n.lanes|=1),e)}var u2=Pt.ReactCurrentOwner,Re=!1;function Ce(e,t,n,r){t.child=e===null?P0(t,null,n,r):Fn(t,e.child,n,r)}function ju(e,t,n,r,o){n=n.render;var i=t.ref;return Rn(t,o),r=aa(e,t,n,r,i,o),n=ua(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Nt(e,t,o)):(Z&&n&&Zs(t),t.flags|=1,Ce(e,t,r,o),t.child)}function Ou(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!wa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Z0(e,t,i,r,o)):(e=Lo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:kr,n(l,r)&&e.ref===t.ref)return Nt(e,t,o)}return t.flags|=1,e=Qt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Z0(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(kr(i,r)&&e.ref===t.ref)if(Re=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Re=!0);else return t.lanes=e.lanes,Nt(e,t,o)}return os(e,t,n,r,o)}function q0(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(Nn,Fe),Fe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(Nn,Fe),Fe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Y(Nn,Fe),Fe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Y(Nn,Fe),Fe|=r;return Ce(e,t,o,n),t.child}function J0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function os(e,t,n,r,o){var i=Oe(n)?ln:xe.current;return i=In(t,i),Rn(t,o),n=aa(e,t,n,r,i,o),r=ua(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Nt(e,t,o)):(Z&&r&&Zs(t),t.flags|=1,Ce(e,t,n,o),t.child)}function $u(e,t,n,r,o){if(Oe(n)){var i=!0;Ho(t)}else i=!1;if(Rn(t,o),t.stateNode===null)_o(e,t),_0(t,n,r),ns(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=qe(c):(c=Oe(n)?ln:xe.current,c=In(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==c)&&_u(t,l,r,c),jt=!1;var p=t.memoizedState;l.state=p,Ko(t,r,l,o),a=t.memoizedState,s!==r||p!==a||je.current||jt?(typeof h=="function"&&(ts(t,n,h,r),a=t.memoizedState),(s=jt||Eu(t,n,s,r,p,a,c))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,k0(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:rt(t.type,s),l.props=c,m=t.pendingProps,p=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=qe(a):(a=Oe(n)?ln:xe.current,a=In(t,a));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==m||p!==a)&&_u(t,l,r,a),jt=!1,p=t.memoizedState,l.state=p,Ko(t,r,l,o);var v=t.memoizedState;s!==m||p!==v||je.current||jt?(typeof w=="function"&&(ts(t,n,w,r),v=t.memoizedState),(c=jt||Eu(t,n,c,r,p,v,a)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=a,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return is(e,t,n,r,i,o)}function is(e,t,n,r,o,i){J0(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&wu(t,n,!1),Nt(e,t,i);r=t.stateNode,u2.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Fn(t,e.child,null,i),t.child=Fn(t,null,s,i)):Ce(e,t,s,i),t.memoizedState=r.state,o&&wu(t,n,!0),t.child}function b0(e){var t=e.stateNode;t.pendingContext?yu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&yu(e,t.context,!1),oa(e,t.containerInfo)}function Iu(e,t,n,r,o){return Mn(),Js(o),t.flags|=256,Ce(e,t,n,r),t.child}var ls={dehydrated:null,treeContext:null,retryLane:0};function ss(e){return{baseLanes:e,cachePool:null,transitions:null}}function ef(e,t,n){var r=t.pendingProps,o=q.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Y(q,o&1),e===null)return bl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=gi(l,r,0,null),e=rn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ss(n),t.memoizedState=ls,e):da(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return c2(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Qt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Qt(s,i):(i=rn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?ss(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=ls,r}return i=e.child,e=i.sibling,r=Qt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function da(e,t){return t=gi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function io(e,t,n,r){return r!==null&&Js(r),Fn(t,e.child,null,n),e=da(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function c2(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=vl(Error(k(422))),io(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=gi({mode:"visible",children:r.children},o,0,null),i=rn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Fn(t,e.child,null,l),t.child.memoizedState=ss(l),t.memoizedState=ls,i);if(!(t.mode&1))return io(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(k(419)),r=vl(i,r,void 0),io(e,t,l,r)}if(s=(l&e.childLanes)!==0,Re||s){if(r=ue,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,_t(e,o),st(r,e,o,-1))}return ya(),r=vl(Error(k(421))),io(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=k2.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,De=Ut(o.nextSibling),Ve=t,Z=!0,it=null,e!==null&&(Xe[Ke++]=xt,Xe[Ke++]=St,Xe[Ke++]=sn,xt=e.id,St=e.overflow,sn=t),t=da(t,r.children),t.flags|=4096,t)}function Mu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),es(e.return,t,n)}function yl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function tf(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ce(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mu(e,n,t);else if(e.tag===19)Mu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(q,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Go(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),yl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Go(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}yl(t,!0,n,null,i);break;case"together":yl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _o(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),un|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function f2(e,t,n){switch(t.tag){case 3:b0(t),Mn();break;case 5:L0(t);break;case 1:Oe(t.type)&&Ho(t);break;case 4:oa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Y(Yo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?ef(e,t,n):(Y(q,q.current&1),e=Nt(e,t,n),e!==null?e.sibling:null);Y(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return tf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Y(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,q0(e,t,n)}return Nt(e,t,n)}var nf,as,rf,of;nf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};as=function(){};rf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,tn(gt.current);var i=null;switch(n){case"input":o=zl(e,o),r=zl(e,r),i=[];break;case"select":o=b({},o,{value:void 0}),r=b({},r,{value:void 0}),i=[];break;case"textarea":o=Ol(e,o),r=Ol(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Uo)}Il(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(gr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(gr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&X("scroll",e),i||s===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};of=function(e,t,n,r){n!==r&&(t.flags|=4)};function Jn(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function d2(e,t,n){var r=t.pendingProps;switch(qs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Oe(t.type)&&Bo(),ve(t),null;case 3:return r=t.stateNode,Dn(),K(je),K(xe),la(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ro(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,it!==null&&(gs(it),it=null))),as(e,t),ve(t),null;case 5:ia(t);var o=tn(Lr.current);if(n=t.type,e!==null&&t.stateNode!=null)rf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ve(t),null}if(e=tn(gt.current),ro(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[mt]=t,r[Nr]=i,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(o=0;o<ir.length;o++)X(ir[o],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":Qa(r,i),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},X("invalid",r);break;case"textarea":Xa(r,i),X("invalid",r)}Il(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&no(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&no(r.textContent,s,e),o=["children",""+s]):gr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&X("scroll",r)}switch(n){case"input":Kr(r),Ya(r,i,!0);break;case"textarea":Kr(r),Ka(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Uo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Rc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[mt]=t,e[Nr]=r,nf(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ml(n,r),n){case"dialog":X("cancel",e),X("close",e),o=r;break;case"iframe":case"object":case"embed":X("load",e),o=r;break;case"video":case"audio":for(o=0;o<ir.length;o++)X(ir[o],e);o=r;break;case"source":X("error",e),o=r;break;case"img":case"image":case"link":X("error",e),X("load",e),o=r;break;case"details":X("toggle",e),o=r;break;case"input":Qa(e,r),o=zl(e,r),X("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=b({},r,{value:void 0}),X("invalid",e);break;case"textarea":Xa(e,r),o=Ol(e,r),X("invalid",e);break;default:o=r}Il(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?$c(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&jc(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&vr(e,a):typeof a=="number"&&vr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(gr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&X("scroll",e):a!=null&&Ms(e,i,a,l))}switch(n){case"input":Kr(e),Ya(e,r,!1);break;case"textarea":Kr(e),Ka(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Yt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Pn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Pn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Uo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)of(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=tn(Lr.current),tn(gt.current),ro(t)){if(r=t.stateNode,n=t.memoizedProps,r[mt]=t,(i=r.nodeValue!==n)&&(e=Ve,e!==null))switch(e.tag){case 3:no(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&no(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=t,t.stateNode=r}return ve(t),null;case 13:if(K(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&De!==null&&t.mode&1&&!(t.flags&128))S0(),Mn(),t.flags|=98560,i=!1;else if(i=ro(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[mt]=t}else Mn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),i=!1}else it!==null&&(gs(it),it=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?le===0&&(le=3):ya())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return Dn(),as(e,t),e===null&&Er(t.stateNode.containerInfo),ve(t),null;case 10:return ta(t.type._context),ve(t),null;case 17:return Oe(t.type)&&Bo(),ve(t),null;case 19:if(K(q),i=t.memoizedState,i===null)return ve(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Jn(i,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Go(e),l!==null){for(t.flags|=128,Jn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(q,q.current&1|2),t.child}e=e.sibling}i.tail!==null&&te()>Vn&&(t.flags|=128,r=!0,Jn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Go(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Jn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Z)return ve(t),null}else 2*te()-i.renderingStartTime>Vn&&n!==1073741824&&(t.flags|=128,r=!0,Jn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=te(),t.sibling=null,n=q.current,Y(q,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return va(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Fe&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function p2(e,t){switch(qs(t),t.tag){case 1:return Oe(t.type)&&Bo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dn(),K(je),K(xe),la(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ia(t),null;case 13:if(K(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(q),null;case 4:return Dn(),null;case 10:return ta(t.type._context),null;case 22:case 23:return va(),null;case 24:return null;default:return null}}var lo=!1,we=!1,m2=typeof WeakSet=="function"?WeakSet:Set,T=null;function _n(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function us(e,t,n){try{n()}catch(r){ee(e,t,r)}}var Fu=!1;function h2(e,t){if(Yl=Do,e=a0(),Gs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,c=0,h=0,m=e,p=null;t:for(;;){for(var w;m!==n||o!==0&&m.nodeType!==3||(s=l+o),m!==i||r!==0&&m.nodeType!==3||(a=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(w=m.firstChild)!==null;)p=m,m=w;for(;;){if(m===e)break t;if(p===n&&++c===o&&(s=l),p===i&&++h===r&&(a=l),(w=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=w}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xl={focusedElem:e,selectionRange:n},Do=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var g=v.memoizedProps,P=v.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?g:rt(t.type,g),P);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(y){ee(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return v=Fu,Fu=!1,v}function dr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&us(t,n,i)}o=o.next}while(o!==r)}}function mi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function cs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function lf(e){var t=e.alternate;t!==null&&(e.alternate=null,lf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[Nr],delete t[Zl],delete t[qd],delete t[Jd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sf(e){return e.tag===5||e.tag===3||e.tag===4}function Du(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Uo));else if(r!==4&&(e=e.child,e!==null))for(fs(e,t,n),e=e.sibling;e!==null;)fs(e,t,n),e=e.sibling}function ds(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ds(e,t,n),e=e.sibling;e!==null;)ds(e,t,n),e=e.sibling}var de=null,ot=!1;function zt(e,t,n){for(n=n.child;n!==null;)af(e,t,n),n=n.sibling}function af(e,t,n){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(li,n)}catch{}switch(n.tag){case 5:we||_n(n,t);case 6:var r=de,o=ot;de=null,zt(e,t,n),de=r,ot=o,de!==null&&(ot?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(ot?(e=de,n=n.stateNode,e.nodeType===8?fl(e.parentNode,n):e.nodeType===1&&fl(e,n),Sr(e)):fl(de,n.stateNode));break;case 4:r=de,o=ot,de=n.stateNode.containerInfo,ot=!0,zt(e,t,n),de=r,ot=o;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&us(n,t,l),o=o.next}while(o!==r)}zt(e,t,n);break;case 1:if(!we&&(_n(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ee(n,t,s)}zt(e,t,n);break;case 21:zt(e,t,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,zt(e,t,n),we=r):zt(e,t,n);break;default:zt(e,t,n)}}function Au(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new m2),t.forEach(function(r){var o=E2.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function tt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:de=s.stateNode,ot=!1;break e;case 3:de=s.stateNode.containerInfo,ot=!0;break e;case 4:de=s.stateNode.containerInfo,ot=!0;break e}s=s.return}if(de===null)throw Error(k(160));af(i,l,o),de=null,ot=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){ee(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)uf(t,e),t=t.sibling}function uf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(tt(t,e),ct(e),r&4){try{dr(3,e,e.return),mi(3,e)}catch(g){ee(e,e.return,g)}try{dr(5,e,e.return)}catch(g){ee(e,e.return,g)}}break;case 1:tt(t,e),ct(e),r&512&&n!==null&&_n(n,n.return);break;case 5:if(tt(t,e),ct(e),r&512&&n!==null&&_n(n,n.return),e.flags&32){var o=e.stateNode;try{vr(o,"")}catch(g){ee(e,e.return,g)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Tc(o,i),Ml(s,l);var c=Ml(s,i);for(l=0;l<a.length;l+=2){var h=a[l],m=a[l+1];h==="style"?$c(o,m):h==="dangerouslySetInnerHTML"?jc(o,m):h==="children"?vr(o,m):Ms(o,h,m,c)}switch(s){case"input":Rl(o,i);break;case"textarea":zc(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Pn(o,!!i.multiple,w,!1):p!==!!i.multiple&&(i.defaultValue!=null?Pn(o,!!i.multiple,i.defaultValue,!0):Pn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Nr]=i}catch(g){ee(e,e.return,g)}}break;case 6:if(tt(t,e),ct(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(g){ee(e,e.return,g)}}break;case 3:if(tt(t,e),ct(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Sr(t.containerInfo)}catch(g){ee(e,e.return,g)}break;case 4:tt(t,e),ct(e);break;case 13:tt(t,e),ct(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ha=te())),r&4&&Au(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(we=(c=we)||h,tt(t,e),we=c):tt(t,e),ct(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(T=e,h=e.child;h!==null;){for(m=T=h;T!==null;){switch(p=T,w=p.child,p.tag){case 0:case 11:case 14:case 15:dr(4,p,p.return);break;case 1:_n(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(g){ee(r,n,g)}}break;case 5:_n(p,p.return);break;case 22:if(p.memoizedState!==null){Uu(m);continue}}w!==null?(w.return=p,T=w):Uu(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{o=m.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,a=m.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Oc("display",l))}catch(g){ee(e,e.return,g)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(g){ee(e,e.return,g)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:tt(t,e),ct(e),r&4&&Au(e);break;case 21:break;default:tt(t,e),ct(e)}}function ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(sf(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(vr(o,""),r.flags&=-33);var i=Du(e);ds(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Du(e);fs(e,s,l);break;default:throw Error(k(161))}}catch(a){ee(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function g2(e,t,n){T=e,cf(e)}function cf(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var o=T,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||lo;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||we;s=lo;var c=we;if(lo=l,(we=a)&&!c)for(T=o;T!==null;)l=T,a=l.child,l.tag===22&&l.memoizedState!==null?Bu(o):a!==null?(a.return=l,T=a):Bu(o);for(;i!==null;)T=i,cf(i),i=i.sibling;T=o,lo=s,we=c}Vu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,T=i):Vu(e)}}function Vu(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:we||mi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!we)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:rt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ku(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ku(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Sr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}we||t.flags&512&&cs(t)}catch(p){ee(t,t.return,p)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Uu(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Bu(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{mi(4,t)}catch(a){ee(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){ee(t,o,a)}}var i=t.return;try{cs(t)}catch(a){ee(t,i,a)}break;case 5:var l=t.return;try{cs(t)}catch(a){ee(t,l,a)}}}catch(a){ee(t,t.return,a)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var v2=Math.ceil,Jo=Pt.ReactCurrentDispatcher,pa=Pt.ReactCurrentOwner,Ze=Pt.ReactCurrentBatchConfig,M=0,ue=null,re=null,me=0,Fe=0,Nn=Gt(0),le=0,jr=null,un=0,hi=0,ma=0,pr=null,ze=null,ha=0,Vn=1/0,yt=null,bo=!1,ps=null,Ht=null,so=!1,Mt=null,ei=0,mr=0,ms=null,No=-1,Po=0;function Ee(){return M&6?te():No!==-1?No:No=te()}function Wt(e){return e.mode&1?M&2&&me!==0?me&-me:e2.transition!==null?(Po===0&&(Po=Yc()),Po):(e=B,e!==0||(e=window.event,e=e===void 0?16:bc(e.type)),e):1}function st(e,t,n,r){if(50<mr)throw mr=0,ms=null,Error(k(185));Ur(e,n,r),(!(M&2)||e!==ue)&&(e===ue&&(!(M&2)&&(hi|=n),le===4&&$t(e,me)),$e(e,r),n===1&&M===0&&!(t.mode&1)&&(Vn=te()+500,fi&&Zt()))}function $e(e,t){var n=e.callbackNode;ed(e,t);var r=Fo(e,e===ue?me:0);if(r===0)n!==null&&qa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&qa(n),t===1)e.tag===0?bd(Hu.bind(null,e)):y0(Hu.bind(null,e)),Gd(function(){!(M&6)&&Zt()}),n=null;else{switch(Xc(r)){case 1:n=Us;break;case 4:n=Wc;break;case 16:n=Mo;break;case 536870912:n=Qc;break;default:n=Mo}n=yf(n,ff.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ff(e,t){if(No=-1,Po=0,M&6)throw Error(k(327));var n=e.callbackNode;if(jn()&&e.callbackNode!==n)return null;var r=Fo(e,e===ue?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ti(e,r);else{t=r;var o=M;M|=2;var i=pf();(ue!==e||me!==t)&&(yt=null,Vn=te()+500,nn(e,t));do try{x2();break}catch(s){df(e,s)}while(!0);ea(),Jo.current=i,M=o,re!==null?t=0:(ue=null,me=0,t=le)}if(t!==0){if(t===2&&(o=Ul(e),o!==0&&(r=o,t=hs(e,o))),t===1)throw n=jr,nn(e,0),$t(e,r),$e(e,te()),n;if(t===6)$t(e,r);else{if(o=e.current.alternate,!(r&30)&&!y2(o)&&(t=ti(e,r),t===2&&(i=Ul(e),i!==0&&(r=i,t=hs(e,i))),t===1))throw n=jr,nn(e,0),$t(e,r),$e(e,te()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Jt(e,ze,yt);break;case 3:if($t(e,r),(r&130023424)===r&&(t=ha+500-te(),10<t)){if(Fo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ee(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Gl(Jt.bind(null,e,ze,yt),t);break}Jt(e,ze,yt);break;case 4:if($t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-lt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*v2(r/1960))-r,10<r){e.timeoutHandle=Gl(Jt.bind(null,e,ze,yt),r);break}Jt(e,ze,yt);break;case 5:Jt(e,ze,yt);break;default:throw Error(k(329))}}}return $e(e,te()),e.callbackNode===n?ff.bind(null,e):null}function hs(e,t){var n=pr;return e.current.memoizedState.isDehydrated&&(nn(e,t).flags|=256),e=ti(e,t),e!==2&&(t=ze,ze=n,t!==null&&gs(t)),e}function gs(e){ze===null?ze=e:ze.push.apply(ze,e)}function y2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!at(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $t(e,t){for(t&=~ma,t&=~hi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-lt(t),r=1<<n;e[n]=-1,t&=~r}}function Hu(e){if(M&6)throw Error(k(327));jn();var t=Fo(e,0);if(!(t&1))return $e(e,te()),null;var n=ti(e,t);if(e.tag!==0&&n===2){var r=Ul(e);r!==0&&(t=r,n=hs(e,r))}if(n===1)throw n=jr,nn(e,0),$t(e,t),$e(e,te()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jt(e,ze,yt),$e(e,te()),null}function ga(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(Vn=te()+500,fi&&Zt())}}function cn(e){Mt!==null&&Mt.tag===0&&!(M&6)&&jn();var t=M;M|=1;var n=Ze.transition,r=B;try{if(Ze.transition=null,B=1,e)return e()}finally{B=r,Ze.transition=n,M=t,!(M&6)&&Zt()}}function va(){Fe=Nn.current,K(Nn)}function nn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Kd(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(qs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Bo();break;case 3:Dn(),K(je),K(xe),la();break;case 5:ia(r);break;case 4:Dn();break;case 13:K(q);break;case 19:K(q);break;case 10:ta(r.type._context);break;case 22:case 23:va()}n=n.return}if(ue=e,re=e=Qt(e.current,null),me=Fe=t,le=0,jr=null,ma=hi=un=0,ze=pr=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}en=null}return e}function df(e,t){do{var n=re;try{if(ea(),ko.current=qo,Zo){for(var r=J.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Zo=!1}if(an=0,ae=ie=J=null,fr=!1,Tr=0,pa.current=null,n===null||n.return===null){le=1,jr=t,re=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=me,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,h=s,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=zu(l);if(w!==null){w.flags&=-257,Ru(w,l,s,i,t),w.mode&1&&Tu(i,c,t),t=w,a=c;var v=t.updateQueue;if(v===null){var g=new Set;g.add(a),t.updateQueue=g}else v.add(a);break e}else{if(!(t&1)){Tu(i,c,t),ya();break e}a=Error(k(426))}}else if(Z&&s.mode&1){var P=zu(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Ru(P,l,s,i,t),Js(An(a,s));break e}}i=a=An(a,s),le!==4&&(le=2),pr===null?pr=[i]:pr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=K0(i,a,t);Cu(i,f);break e;case 1:s=a;var u=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ht===null||!Ht.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=G0(i,s,t);Cu(i,y);break e}}i=i.return}while(i!==null)}hf(n)}catch(E){t=E,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function pf(){var e=Jo.current;return Jo.current=qo,e===null?qo:e}function ya(){(le===0||le===3||le===2)&&(le=4),ue===null||!(un&268435455)&&!(hi&268435455)||$t(ue,me)}function ti(e,t){var n=M;M|=2;var r=pf();(ue!==e||me!==t)&&(yt=null,nn(e,t));do try{w2();break}catch(o){df(e,o)}while(!0);if(ea(),M=n,Jo.current=r,re!==null)throw Error(k(261));return ue=null,me=0,le}function w2(){for(;re!==null;)mf(re)}function x2(){for(;re!==null&&!Q1();)mf(re)}function mf(e){var t=vf(e.alternate,e,Fe);e.memoizedProps=e.pendingProps,t===null?hf(e):re=t,pa.current=null}function hf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=p2(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,re=null;return}}else if(n=d2(n,t,Fe),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);le===0&&(le=5)}function Jt(e,t,n){var r=B,o=Ze.transition;try{Ze.transition=null,B=1,S2(e,t,n,r)}finally{Ze.transition=o,B=r}return null}function S2(e,t,n,r){do jn();while(Mt!==null);if(M&6)throw Error(k(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(td(e,i),e===ue&&(re=ue=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||so||(so=!0,yf(Mo,function(){return jn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ze.transition,Ze.transition=null;var l=B;B=1;var s=M;M|=4,pa.current=null,h2(e,n),uf(n,e),Ud(Xl),Do=!!Yl,Xl=Yl=null,e.current=n,g2(n),Y1(),M=s,B=l,Ze.transition=i}else e.current=n;if(so&&(so=!1,Mt=e,ei=o),i=e.pendingLanes,i===0&&(Ht=null),G1(n.stateNode),$e(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(bo)throw bo=!1,e=ps,ps=null,e;return ei&1&&e.tag!==0&&jn(),i=e.pendingLanes,i&1?e===ms?mr++:(mr=0,ms=e):mr=0,Zt(),null}function jn(){if(Mt!==null){var e=Xc(ei),t=Ze.transition,n=B;try{if(Ze.transition=null,B=16>e?16:e,Mt===null)var r=!1;else{if(e=Mt,Mt=null,ei=0,M&6)throw Error(k(331));var o=M;for(M|=4,T=e.current;T!==null;){var i=T,l=i.child;if(T.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(T=c;T!==null;){var h=T;switch(h.tag){case 0:case 11:case 15:dr(8,h,i)}var m=h.child;if(m!==null)m.return=h,T=m;else for(;T!==null;){h=T;var p=h.sibling,w=h.return;if(lf(h),h===c){T=null;break}if(p!==null){p.return=w,T=p;break}T=w}}}var v=i.alternate;if(v!==null){var g=v.child;if(g!==null){v.child=null;do{var P=g.sibling;g.sibling=null,g=P}while(g!==null)}}T=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,T=l;else e:for(;T!==null;){if(i=T,i.flags&2048)switch(i.tag){case 0:case 11:case 15:dr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,T=f;break e}T=i.return}}var u=e.current;for(T=u;T!==null;){l=T;var d=l.child;if(l.subtreeFlags&2064&&d!==null)d.return=l,T=d;else e:for(l=u;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:mi(9,s)}}catch(E){ee(s,s.return,E)}if(s===l){T=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,T=y;break e}T=s.return}}if(M=o,Zt(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(li,e)}catch{}r=!0}return r}finally{B=n,Ze.transition=t}}return!1}function Wu(e,t,n){t=An(n,t),t=K0(e,t,1),e=Bt(e,t,1),t=Ee(),e!==null&&(Ur(e,1,t),$e(e,t))}function ee(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ht===null||!Ht.has(r))){e=An(n,e),e=G0(t,e,1),t=Bt(t,e,1),e=Ee(),t!==null&&(Ur(t,1,e),$e(t,e));break}}t=t.return}}function C2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ee(),e.pingedLanes|=e.suspendedLanes&n,ue===e&&(me&n)===n&&(le===4||le===3&&(me&130023424)===me&&500>te()-ha?nn(e,0):ma|=n),$e(e,t)}function gf(e,t){t===0&&(e.mode&1?(t=qr,qr<<=1,!(qr&130023424)&&(qr=4194304)):t=1);var n=Ee();e=_t(e,t),e!==null&&(Ur(e,t,n),$e(e,n))}function k2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gf(e,n)}function E2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),gf(e,n)}var vf;vf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)Re=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Re=!1,f2(e,t,n);Re=!!(e.flags&131072)}else Re=!1,Z&&t.flags&1048576&&w0(t,Qo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;_o(e,t),e=t.pendingProps;var o=In(t,xe.current);Rn(t,n),o=aa(null,t,r,e,o,n);var i=ua();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oe(r)?(i=!0,Ho(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ra(t),o.updater=di,t.stateNode=o,o._reactInternals=t,ns(t,r,e,n),t=is(null,t,r,!0,i,n)):(t.tag=0,Z&&i&&Zs(t),Ce(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(_o(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=N2(r),e=rt(r,e),o){case 0:t=os(null,t,r,e,n);break e;case 1:t=$u(null,t,r,e,n);break e;case 11:t=ju(null,t,r,e,n);break e;case 14:t=Ou(null,t,r,rt(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),os(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),$u(e,t,r,o,n);case 3:e:{if(b0(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,o=i.element,k0(e,t),Ko(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=An(Error(k(423)),t),t=Iu(e,t,r,n,o);break e}else if(r!==o){o=An(Error(k(424)),t),t=Iu(e,t,r,n,o);break e}else for(De=Ut(t.stateNode.containerInfo.firstChild),Ve=t,Z=!0,it=null,n=P0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mn(),r===o){t=Nt(e,t,n);break e}Ce(e,t,r,n)}t=t.child}return t;case 5:return L0(t),e===null&&bl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Kl(r,o)?l=null:i!==null&&Kl(r,i)&&(t.flags|=32),J0(e,t),Ce(e,t,l,n),t.child;case 6:return e===null&&bl(t),null;case 13:return ef(e,t,n);case 4:return oa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fn(t,null,r,n):Ce(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),ju(e,t,r,o,n);case 7:return Ce(e,t,t.pendingProps,n),t.child;case 8:return Ce(e,t,t.pendingProps.children,n),t.child;case 12:return Ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,Y(Yo,r._currentValue),r._currentValue=l,i!==null)if(at(i.value,l)){if(i.children===o.children&&!je.current){t=Nt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Ct(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?a.next=a:(a.next=h.next,h.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),es(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(k(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),es(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ce(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Rn(t,n),o=qe(o),r=r(o),t.flags|=1,Ce(e,t,r,n),t.child;case 14:return r=t.type,o=rt(r,t.pendingProps),o=rt(r.type,o),Ou(e,t,r,o,n);case 15:return Z0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),_o(e,t),t.tag=1,Oe(r)?(e=!0,Ho(t)):e=!1,Rn(t,n),_0(t,r,o),ns(t,r,o,n),is(null,t,r,!0,e,n);case 19:return tf(e,t,n);case 22:return q0(e,t,n)}throw Error(k(156,t.tag))};function yf(e,t){return Hc(e,t)}function _2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ge(e,t,n,r){return new _2(e,t,n,r)}function wa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function N2(e){if(typeof e=="function")return wa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ds)return 11;if(e===As)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=Ge(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")wa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case gn:return rn(n.children,o,i,t);case Fs:l=8,o|=8;break;case Nl:return e=Ge(12,n,t,o|2),e.elementType=Nl,e.lanes=i,e;case Pl:return e=Ge(13,n,t,o),e.elementType=Pl,e.lanes=i,e;case Ll:return e=Ge(19,n,t,o),e.elementType=Ll,e.lanes=i,e;case Nc:return gi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ec:l=10;break e;case _c:l=9;break e;case Ds:l=11;break e;case As:l=14;break e;case Rt:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ge(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function rn(e,t,n,r){return e=Ge(7,e,r,t),e.lanes=n,e}function gi(e,t,n,r){return e=Ge(22,e,r,t),e.elementType=Nc,e.lanes=n,e.stateNode={isHidden:!1},e}function wl(e,t,n){return e=Ge(6,e,null,t),e.lanes=n,e}function xl(e,t,n){return t=Ge(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function P2(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=el(0),this.expirationTimes=el(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=el(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function xa(e,t,n,r,o,i,l,s,a){return e=new P2(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ge(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ra(i),e}function L2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function wf(e){if(!e)return Xt;e=e._reactInternals;e:{if(dn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Oe(n))return v0(e,n,t)}return t}function xf(e,t,n,r,o,i,l,s,a){return e=xa(n,r,!0,e,o,i,l,s,a),e.context=wf(null),n=e.current,r=Ee(),o=Wt(n),i=Ct(r,o),i.callback=t??null,Bt(n,i,o),e.current.lanes=o,Ur(e,o,r),$e(e,r),e}function vi(e,t,n,r){var o=t.current,i=Ee(),l=Wt(o);return n=wf(n),t.context===null?t.context=n:t.pendingContext=n,t=Ct(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Bt(o,t,l),e!==null&&(st(e,o,l,i),Co(e,o,l)),l}function ni(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Sa(e,t){Qu(e,t),(e=e.alternate)&&Qu(e,t)}function T2(){return null}var Sf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ca(e){this._internalRoot=e}yi.prototype.render=Ca.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));vi(e,t,null,null)};yi.prototype.unmount=Ca.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cn(function(){vi(null,e,null,null)}),t[Et]=null}};function yi(e){this._internalRoot=e}yi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&t!==0&&t<Ot[n].priority;n++);Ot.splice(n,0,e),n===0&&Jc(e)}};function ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yu(){}function z2(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=ni(l);i.call(c)}}var l=xf(t,r,e,0,null,!1,!1,"",Yu);return e._reactRootContainer=l,e[Et]=l.current,Er(e.nodeType===8?e.parentNode:e),cn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=ni(a);s.call(c)}}var a=xa(e,0,!1,null,null,!1,!1,"",Yu);return e._reactRootContainer=a,e[Et]=a.current,Er(e.nodeType===8?e.parentNode:e),cn(function(){vi(t,a,n,r)}),a}function xi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=ni(l);s.call(a)}}vi(t,l,e,o)}else l=z2(n,t,e,o,r);return ni(l)}Kc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=or(t.pendingLanes);n!==0&&(Bs(t,n|1),$e(t,te()),!(M&6)&&(Vn=te()+500,Zt()))}break;case 13:cn(function(){var r=_t(e,1);if(r!==null){var o=Ee();st(r,e,1,o)}}),Sa(e,1)}};Hs=function(e){if(e.tag===13){var t=_t(e,134217728);if(t!==null){var n=Ee();st(t,e,134217728,n)}Sa(e,134217728)}};Gc=function(e){if(e.tag===13){var t=Wt(e),n=_t(e,t);if(n!==null){var r=Ee();st(n,e,t,r)}Sa(e,t)}};Zc=function(){return B};qc=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};Dl=function(e,t,n){switch(t){case"input":if(Rl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ci(r);if(!o)throw Error(k(90));Lc(r),Rl(r,o)}}}break;case"textarea":zc(e,n);break;case"select":t=n.value,t!=null&&Pn(e,!!n.multiple,t,!1)}};Fc=ga;Dc=cn;var R2={usingClientEntryPoint:!1,Events:[Hr,xn,ci,Ic,Mc,ga]},bn={findFiberByHostInstance:bt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},j2={bundleType:bn.bundleType,version:bn.version,rendererPackageName:bn.rendererPackageName,rendererConfig:bn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Uc(e),e===null?null:e.stateNode},findFiberByHostInstance:bn.findFiberByHostInstance||T2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ao.isDisabled&&ao.supportsFiber)try{li=ao.inject(j2),ht=ao}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R2;He.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ka(t))throw Error(k(200));return L2(e,t,null,n)};He.createRoot=function(e,t){if(!ka(e))throw Error(k(299));var n=!1,r="",o=Sf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=xa(e,1,!1,null,null,n,!1,r,o),e[Et]=t.current,Er(e.nodeType===8?e.parentNode:e),new Ca(t)};He.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Uc(t),e=e===null?null:e.stateNode,e};He.flushSync=function(e){return cn(e)};He.hydrate=function(e,t,n){if(!wi(t))throw Error(k(200));return xi(null,e,t,!0,n)};He.hydrateRoot=function(e,t,n){if(!ka(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Sf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=xf(t,null,e,1,n??null,o,!1,i,l),e[Et]=t.current,Er(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new yi(t)};He.render=function(e,t,n){if(!wi(t))throw Error(k(200));return xi(null,e,t,!1,n)};He.unmountComponentAtNode=function(e){if(!wi(e))throw Error(k(40));return e._reactRootContainer?(cn(function(){xi(null,null,e,!1,function(){e._reactRootContainer=null,e[Et]=null})}),!0):!1};He.unstable_batchedUpdates=ga;He.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!wi(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return xi(e,t,n,!1,r)};He.version="18.2.0-next-9e3b772b8-20220608";function Cf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cf)}catch(e){console.error(e)}}Cf(),wc.exports=He;var O2=wc.exports,Xu=O2;El.createRoot=Xu.createRoot,El.hydrateRoot=Xu.hydrateRoot;function uo({text:e,targetId:t}){return x.jsx("a",{href:`#${t}`,className:"text-secondary-color text-3xl font-bold border-b-4 border-transparent hover:cursor-pointer hidden sm:block hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-lime-300 to-green-400",children:e})}function $2(){return x.jsx("div",{className:" w-full bg-primary-color h-24 px-10 f items-center justify-end flex",children:x.jsxs("div",{className:"flex justify-normal gap-6",children:[x.jsx(uo,{text:"About Me",targetId:"Main"}),x.jsx(uo,{text:"Projects",targetId:"Projects"}),x.jsx(uo,{text:"Experience",targetId:"work-experience"}),x.jsx(uo,{text:"Contact",targetId:"Contact"})]})})}const kf=e=>x.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"40px",height:"40px",className:e.className,children:x.jsx("path",{d:"M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"})}),I2=e=>x.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"40px",height:"40px",className:e.className,children:x.jsx("path",{d:"M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"})}),M2="/Portfolio/assets/Me2-rQCRXdA-.jpg";function mn({text:e}){return x.jsx("div",{className:`bg-secondary-color text-text-color rounded-lg p-1 lg:w-20 lg:p-2\r
        flex justify-center font-semibold `,children:e})}const Si=({left:e,children:t,id:n})=>x.jsx("div",{className:"h-full flex flex-col justify-center items-start  ",children:x.jsx("div",{id:`${n}`,className:`h-3/4 w-full ${e?"bg-gradient-to-l":"bg-gradient-to-r"}  flex flex-col  items-center  justify-centerrounded-3xl p-7 gap-5 `,children:t})});function F2(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function D2(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var A2=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(D2(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=F2(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),ye="-ms-",ri="-moz-",F="-webkit-",Ef="comm",Ea="rule",_a="decl",V2="@import",_f="@keyframes",U2="@layer",B2=Math.abs,Ci=String.fromCharCode,H2=Object.assign;function W2(e,t){return pe(e,0)^45?(((t<<2^pe(e,0))<<2^pe(e,1))<<2^pe(e,2))<<2^pe(e,3):0}function Nf(e){return e.trim()}function Q2(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,n){return e.replace(t,n)}function vs(e,t){return e.indexOf(t)}function pe(e,t){return e.charCodeAt(t)|0}function Or(e,t,n){return e.slice(t,n)}function dt(e){return e.length}function Na(e){return e.length}function co(e,t){return t.push(e),e}function Y2(e,t){return e.map(t).join("")}var ki=1,Un=1,Pf=0,Ie=0,ne=0,Qn="";function Ei(e,t,n,r,o,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:ki,column:Un,length:l,return:""}}function er(e,t){return H2(Ei("",null,null,"",null,null,0),e,{length:-e.length},t)}function X2(){return ne}function K2(){return ne=Ie>0?pe(Qn,--Ie):0,Un--,ne===10&&(Un=1,ki--),ne}function Ue(){return ne=Ie<Pf?pe(Qn,Ie++):0,Un++,ne===10&&(Un=1,ki++),ne}function vt(){return pe(Qn,Ie)}function To(){return Ie}function Qr(e,t){return Or(Qn,e,t)}function $r(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Lf(e){return ki=Un=1,Pf=dt(Qn=e),Ie=0,[]}function Tf(e){return Qn="",e}function zo(e){return Nf(Qr(Ie-1,ys(e===91?e+2:e===40?e+1:e)))}function G2(e){for(;(ne=vt())&&ne<33;)Ue();return $r(e)>2||$r(ne)>3?"":" "}function Z2(e,t){for(;--t&&Ue()&&!(ne<48||ne>102||ne>57&&ne<65||ne>70&&ne<97););return Qr(e,To()+(t<6&&vt()==32&&Ue()==32))}function ys(e){for(;Ue();)switch(ne){case e:return Ie;case 34:case 39:e!==34&&e!==39&&ys(ne);break;case 40:e===41&&ys(e);break;case 92:Ue();break}return Ie}function q2(e,t){for(;Ue()&&e+ne!==57;)if(e+ne===84&&vt()===47)break;return"/*"+Qr(t,Ie-1)+"*"+Ci(e===47?e:Ue())}function J2(e){for(;!$r(vt());)Ue();return Qr(e,Ie)}function b2(e){return Tf(Ro("",null,null,null,[""],e=Lf(e),0,[0],e))}function Ro(e,t,n,r,o,i,l,s,a){for(var c=0,h=0,m=l,p=0,w=0,v=0,g=1,P=1,f=1,u=0,d="",y=o,E=i,N=r,S=d;P;)switch(v=u,u=Ue()){case 40:if(v!=108&&pe(S,m-1)==58){vs(S+=D(zo(u),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:S+=zo(u);break;case 9:case 10:case 13:case 32:S+=G2(v);break;case 92:S+=Z2(To()-1,7);continue;case 47:switch(vt()){case 42:case 47:co(ep(q2(Ue(),To()),t,n),a);break;default:S+="/"}break;case 123*g:s[c++]=dt(S)*f;case 125*g:case 59:case 0:switch(u){case 0:case 125:P=0;case 59+h:f==-1&&(S=D(S,/\f/g,"")),w>0&&dt(S)-m&&co(w>32?Gu(S+";",r,n,m-1):Gu(D(S," ","")+";",r,n,m-2),a);break;case 59:S+=";";default:if(co(N=Ku(S,t,n,c,h,o,s,d,y=[],E=[],m),i),u===123)if(h===0)Ro(S,t,N,N,y,i,m,s,E);else switch(p===99&&pe(S,3)===110?100:p){case 100:case 108:case 109:case 115:Ro(e,N,N,r&&co(Ku(e,N,N,0,0,o,s,d,o,y=[],m),E),o,E,m,s,r?y:E);break;default:Ro(S,N,N,N,[""],E,0,s,E)}}c=h=w=0,g=f=1,d=S="",m=l;break;case 58:m=1+dt(S),w=v;default:if(g<1){if(u==123)--g;else if(u==125&&g++==0&&K2()==125)continue}switch(S+=Ci(u),u*g){case 38:f=h>0?1:(S+="\f",-1);break;case 44:s[c++]=(dt(S)-1)*f,f=1;break;case 64:vt()===45&&(S+=zo(Ue())),p=vt(),h=m=dt(d=S+=J2(To())),u++;break;case 45:v===45&&dt(S)==2&&(g=0)}}return i}function Ku(e,t,n,r,o,i,l,s,a,c,h){for(var m=o-1,p=o===0?i:[""],w=Na(p),v=0,g=0,P=0;v<r;++v)for(var f=0,u=Or(e,m+1,m=B2(g=l[v])),d=e;f<w;++f)(d=Nf(g>0?p[f]+" "+u:D(u,/&\f/g,p[f])))&&(a[P++]=d);return Ei(e,t,n,o===0?Ea:s,a,c,h)}function ep(e,t,n){return Ei(e,t,n,Ef,Ci(X2()),Or(e,2,-2),0)}function Gu(e,t,n,r){return Ei(e,t,n,_a,Or(e,0,r),Or(e,r+1,-1),r)}function On(e,t){for(var n="",r=Na(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function tp(e,t,n,r){switch(e.type){case U2:if(e.children.length)break;case V2:case _a:return e.return=e.return||e.value;case Ef:return"";case _f:return e.return=e.value+"{"+On(e.children,r)+"}";case Ea:e.value=e.props.join(",")}return dt(n=On(e.children,r))?e.return=e.value+"{"+n+"}":""}function np(e){var t=Na(e);return function(n,r,o,i){for(var l="",s=0;s<t;s++)l+=e[s](n,r,o,i)||"";return l}}function rp(e){return function(t){t.root||(t=t.return)&&e(t)}}function op(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var ip=function(t,n,r){for(var o=0,i=0;o=i,i=vt(),o===38&&i===12&&(n[r]=1),!$r(i);)Ue();return Qr(t,Ie)},lp=function(t,n){var r=-1,o=44;do switch($r(o)){case 0:o===38&&vt()===12&&(n[r]=1),t[r]+=ip(Ie-1,n,r);break;case 2:t[r]+=zo(o);break;case 4:if(o===44){t[++r]=vt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Ci(o)}while(o=Ue());return t},sp=function(t,n){return Tf(lp(Lf(t),n))},Zu=new WeakMap,ap=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Zu.get(r))&&!o){Zu.set(t,!0);for(var i=[],l=sp(n,i),s=r.props,a=0,c=0;a<l.length;a++)for(var h=0;h<s.length;h++,c++)t.props[c]=i[a]?l[a].replace(/&\f/g,s[h]):s[h]+" "+l[a]}}},up=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function zf(e,t){switch(W2(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+ri+e+ye+e+e;case 6828:case 4268:return F+e+ye+e+e;case 6165:return F+e+ye+"flex-"+e+e;case 5187:return F+e+D(e,/(\w+).+(:[^]+)/,F+"box-$1$2"+ye+"flex-$1$2")+e;case 5443:return F+e+ye+"flex-item-"+D(e,/flex-|-self/,"")+e;case 4675:return F+e+ye+"flex-line-pack"+D(e,/align-content|flex-|-self/,"")+e;case 5548:return F+e+ye+D(e,"shrink","negative")+e;case 5292:return F+e+ye+D(e,"basis","preferred-size")+e;case 6060:return F+"box-"+D(e,"-grow","")+F+e+ye+D(e,"grow","positive")+e;case 4554:return F+D(e,/([^-])(transform)/g,"$1"+F+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+e+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(dt(e)-1-t>6)switch(pe(e,t+1)){case 109:if(pe(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+ri+(pe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~vs(e,"stretch")?zf(D(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(pe(e,t+1)!==115)break;case 6444:switch(pe(e,dt(e)-3-(~vs(e,"!important")&&10))){case 107:return D(e,":",":"+F)+e;case 101:return D(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+F+(pe(e,14)===45?"inline-":"")+"box$3$1"+F+"$2$3$1"+ye+"$2box$3")+e}break;case 5936:switch(pe(e,t+11)){case 114:return F+e+ye+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+ye+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+ye+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return F+e+ye+e+e}return e}var cp=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case _a:t.return=zf(t.value,t.length);break;case _f:return On([er(t,{value:D(t.value,"@","@"+F)})],o);case Ea:if(t.length)return Y2(t.props,function(i){switch(Q2(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return On([er(t,{props:[D(i,/:(read-\w+)/,":"+ri+"$1")]})],o);case"::placeholder":return On([er(t,{props:[D(i,/:(plac\w+)/,":"+F+"input-$1")]}),er(t,{props:[D(i,/:(plac\w+)/,":"+ri+"$1")]}),er(t,{props:[D(i,/:(plac\w+)/,ye+"input-$1")]})],o)}return""})}},fp=[cp],dp=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(g){var P=g.getAttribute("data-emotion");P.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var o=t.stylisPlugins||fp,i={},l,s=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var P=g.getAttribute("data-emotion").split(" "),f=1;f<P.length;f++)i[P[f]]=!0;s.push(g)});var a,c=[ap,up];{var h,m=[tp,rp(function(g){h.insert(g)})],p=np(c.concat(o,m)),w=function(P){return On(b2(P),p)};a=function(P,f,u,d){h=u,w(P?P+"{"+f.styles+"}":f.styles),d&&(v.inserted[f.name]=!0)}}var v={key:n,sheet:new A2({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:a};return v.sheet.hydrate(s),v},Rf={exports:{}},H={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ce=typeof Symbol=="function"&&Symbol.for,Pa=ce?Symbol.for("react.element"):60103,La=ce?Symbol.for("react.portal"):60106,_i=ce?Symbol.for("react.fragment"):60107,Ni=ce?Symbol.for("react.strict_mode"):60108,Pi=ce?Symbol.for("react.profiler"):60114,Li=ce?Symbol.for("react.provider"):60109,Ti=ce?Symbol.for("react.context"):60110,Ta=ce?Symbol.for("react.async_mode"):60111,zi=ce?Symbol.for("react.concurrent_mode"):60111,Ri=ce?Symbol.for("react.forward_ref"):60112,ji=ce?Symbol.for("react.suspense"):60113,pp=ce?Symbol.for("react.suspense_list"):60120,Oi=ce?Symbol.for("react.memo"):60115,$i=ce?Symbol.for("react.lazy"):60116,mp=ce?Symbol.for("react.block"):60121,hp=ce?Symbol.for("react.fundamental"):60117,gp=ce?Symbol.for("react.responder"):60118,vp=ce?Symbol.for("react.scope"):60119;function Qe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Pa:switch(e=e.type,e){case Ta:case zi:case _i:case Pi:case Ni:case ji:return e;default:switch(e=e&&e.$$typeof,e){case Ti:case Ri:case $i:case Oi:case Li:return e;default:return t}}case La:return t}}}function jf(e){return Qe(e)===zi}H.AsyncMode=Ta;H.ConcurrentMode=zi;H.ContextConsumer=Ti;H.ContextProvider=Li;H.Element=Pa;H.ForwardRef=Ri;H.Fragment=_i;H.Lazy=$i;H.Memo=Oi;H.Portal=La;H.Profiler=Pi;H.StrictMode=Ni;H.Suspense=ji;H.isAsyncMode=function(e){return jf(e)||Qe(e)===Ta};H.isConcurrentMode=jf;H.isContextConsumer=function(e){return Qe(e)===Ti};H.isContextProvider=function(e){return Qe(e)===Li};H.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pa};H.isForwardRef=function(e){return Qe(e)===Ri};H.isFragment=function(e){return Qe(e)===_i};H.isLazy=function(e){return Qe(e)===$i};H.isMemo=function(e){return Qe(e)===Oi};H.isPortal=function(e){return Qe(e)===La};H.isProfiler=function(e){return Qe(e)===Pi};H.isStrictMode=function(e){return Qe(e)===Ni};H.isSuspense=function(e){return Qe(e)===ji};H.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===_i||e===zi||e===Pi||e===Ni||e===ji||e===pp||typeof e=="object"&&e!==null&&(e.$$typeof===$i||e.$$typeof===Oi||e.$$typeof===Li||e.$$typeof===Ti||e.$$typeof===Ri||e.$$typeof===hp||e.$$typeof===gp||e.$$typeof===vp||e.$$typeof===mp)};H.typeOf=Qe;Rf.exports=H;var yp=Rf.exports,za=yp,wp={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},xp={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Sp={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Of={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ra={};Ra[za.ForwardRef]=Sp;Ra[za.Memo]=Of;function qu(e){return za.isMemo(e)?Of:Ra[e.$$typeof]||wp}var Cp=Object.defineProperty,kp=Object.getOwnPropertyNames,Ju=Object.getOwnPropertySymbols,Ep=Object.getOwnPropertyDescriptor,_p=Object.getPrototypeOf,bu=Object.prototype;function $f(e,t,n){if(typeof t!="string"){if(bu){var r=_p(t);r&&r!==bu&&$f(e,r,n)}var o=kp(t);Ju&&(o=o.concat(Ju(t)));for(var i=qu(e),l=qu(t),s=0;s<o.length;++s){var a=o[s];if(!xp[a]&&!(n&&n[a])&&!(l&&l[a])&&!(i&&i[a])){var c=Ep(t,a);try{Cp(e,a,c)}catch{}}}}return e}var Np=$f;const Pp=Ts(Np);var Lp=!0;function If(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var ja=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||Lp===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},Mf=function(t,n,r){ja(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function Tp(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var zp={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Rp=/[A-Z]|^ms/g,jp=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ff=function(t){return t.charCodeAt(1)===45},ec=function(t){return t!=null&&typeof t!="boolean"},Sl=op(function(e){return Ff(e)?e:e.replace(Rp,"-$&").toLowerCase()}),tc=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(jp,function(r,o,i){return pt={name:o,styles:i,next:pt},o})}return zp[t]!==1&&!Ff(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ir(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return pt={name:n.name,styles:n.styles,next:pt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)pt={name:r.name,styles:r.styles,next:pt},r=r.next;var o=n.styles+";";return o}return Op(e,t,n)}case"function":{if(e!==void 0){var i=pt,l=n(e);return pt=i,Ir(e,t,l)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function Op(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Ir(e,t,n[o])+";";else for(var i in n){var l=n[i];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=i+"{"+t[l]+"}":ec(l)&&(r+=Sl(i)+":"+tc(i,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var s=0;s<l.length;s++)ec(l[s])&&(r+=Sl(i)+":"+tc(i,l[s])+";");else{var a=Ir(e,t,l);switch(i){case"animation":case"animationName":{r+=Sl(i)+":"+a+";";break}default:r+=i+"{"+a+"}"}}}return r}var nc=/label:\s*([^\s;\n{]+)\s*(;|$)/g,pt,Oa=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";pt=void 0;var l=t[0];l==null||l.raw===void 0?(o=!1,i+=Ir(r,n,l)):i+=l[0];for(var s=1;s<t.length;s++)i+=Ir(r,n,t[s]),o&&(i+=l[s]);nc.lastIndex=0;for(var a="",c;(c=nc.exec(i))!==null;)a+="-"+c[1];var h=Tp(i)+a;return{name:h,styles:i,next:pt}},$p=function(t){return t()},Ip=Ua.useInsertionEffect?Ua.useInsertionEffect:!1,Df=Ip||$p,$a={}.hasOwnProperty,Af=z.createContext(typeof HTMLElement<"u"?dp({key:"css"}):null);Af.Provider;var Vf=function(t){return z.forwardRef(function(n,r){var o=z.useContext(Af);return t(n,o,r)})},Uf=z.createContext({}),ws="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Mp=function(t,n){var r={};for(var o in n)$a.call(n,o)&&(r[o]=n[o]);return r[ws]=t,r},Fp=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return ja(n,r,o),Df(function(){return Mf(n,r,o)}),null},Dp=Vf(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[ws],i=[r],l="";typeof e.className=="string"?l=If(t.registered,i,e.className):e.className!=null&&(l=e.className+" ");var s=Oa(i,void 0,z.useContext(Uf));l+=t.key+"-"+s.name;var a={};for(var c in e)$a.call(e,c)&&c!=="css"&&c!==ws&&(a[c]=e[c]);return a.ref=n,a.className=l,z.createElement(z.Fragment,null,z.createElement(Fp,{cache:t,serialized:s,isStringTag:typeof o=="string"}),z.createElement(o,a))}),Ap=Dp,Vp=x.Fragment;function se(e,t,n){return $a.call(t,"css")?x.jsx(Ap,Mp(e,t),n):x.jsx(e,t,n)}function Bf(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Oa(t)}var _=function(){var t=Bf.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Up=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(i!=null){var l=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))l=e(i);else{l="";for(var s in i)i[s]&&s&&(l&&(l+=" "),l+=s)}break}default:l=i}l&&(o&&(o+=" "),o+=l)}}return o};function Bp(e,t,n){var r=[],o=If(e,r,n);return r.length<2?n:o+t(r)}var Hp=function(t){var n=t.cache,r=t.serializedArr;return Df(function(){for(var o=0;o<r.length;o++)Mf(n,r[o],!1)}),null},Cl=Vf(function(e,t){var n=!1,r=[],o=function(){for(var c=arguments.length,h=new Array(c),m=0;m<c;m++)h[m]=arguments[m];var p=Oa(h,t.registered);return r.push(p),ja(t,p,!1),t.key+"-"+p.name},i=function(){for(var c=arguments.length,h=new Array(c),m=0;m<c;m++)h[m]=arguments[m];return Bp(t.registered,o,Up(h))},l={css:o,cx:i,theme:z.useContext(Uf)},s=e.children(l);return n=!0,z.createElement(z.Fragment,null,z.createElement(Hp,{cache:t,serializedArr:r}),s)}),Wp=Object.defineProperty,Qp=(e,t,n)=>t in e?Wp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,fo=(e,t,n)=>(Qp(e,typeof t!="symbol"?t+"":t,n),n),xs=new Map,po=new WeakMap,rc=0,Yp=void 0;function Xp(e){return e?(po.has(e)||(rc+=1,po.set(e,rc.toString())),po.get(e)):"0"}function Kp(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?Xp(e.root):e[t]}`).toString()}function Gp(e){const t=Kp(e);let n=xs.get(t);if(!n){const r=new Map;let o;const i=new IntersectionObserver(l=>{l.forEach(s=>{var a;const c=s.isIntersecting&&o.some(h=>s.intersectionRatio>=h);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=c),(a=r.get(s.target))==null||a.forEach(h=>{h(c,s)})})},e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},xs.set(t,n)}return n}function Hf(e,t,n={},r=Yp){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:o,observer:i,elements:l}=Gp(n),s=l.get(e)||[];return l.has(e)||l.set(e,s),s.push(t),i.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(l.delete(e),i.unobserve(e)),l.size===0&&(i.disconnect(),xs.delete(o))}}function Zp(e){return typeof e.children!="function"}var oc=class extends z.Component{constructor(e){super(e),fo(this,"node",null),fo(this,"_unobserveCb",null),fo(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),fo(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),Zp(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:i}=this.props;this._unobserveCb=Hf(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:w,entry:v}=this.state;return e({inView:w,entry:v,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:o,rootMargin:i,onChange:l,skip:s,trackVisibility:a,delay:c,initialInView:h,fallbackInView:m,...p}=this.props;return z.createElement(t||"div",{ref:this.handleNode,...p},e)}};function Wf({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:i,skip:l,initialInView:s,fallbackInView:a,onChange:c}={}){var h;const[m,p]=z.useState(null),w=z.useRef(),[v,g]=z.useState({inView:!!s,entry:void 0});w.current=c,z.useEffect(()=>{if(l||!m)return;let d;return d=Hf(m,(y,E)=>{g({inView:y,entry:E}),w.current&&w.current(y,E),E.isIntersecting&&i&&d&&(d(),d=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},a),()=>{d&&d()}},[Array.isArray(e)?e.toString():e,m,o,r,i,l,n,a,t]);const P=(h=v.entry)==null?void 0:h.target,f=z.useRef();!m&&P&&!i&&!l&&f.current!==P&&(f.current=P,g({inView:!!s,entry:void 0}));const u=[p,v.inView,v.entry];return u.ref=u[0],u.inView=u[1],u.entry=u[2],u}var Qf={exports:{}},W={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ia=Symbol.for("react.element"),Ma=Symbol.for("react.portal"),Ii=Symbol.for("react.fragment"),Mi=Symbol.for("react.strict_mode"),Fi=Symbol.for("react.profiler"),Di=Symbol.for("react.provider"),Ai=Symbol.for("react.context"),qp=Symbol.for("react.server_context"),Vi=Symbol.for("react.forward_ref"),Ui=Symbol.for("react.suspense"),Bi=Symbol.for("react.suspense_list"),Hi=Symbol.for("react.memo"),Wi=Symbol.for("react.lazy"),Jp=Symbol.for("react.offscreen"),Yf;Yf=Symbol.for("react.module.reference");function be(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ia:switch(e=e.type,e){case Ii:case Fi:case Mi:case Ui:case Bi:return e;default:switch(e=e&&e.$$typeof,e){case qp:case Ai:case Vi:case Wi:case Hi:case Di:return e;default:return t}}case Ma:return t}}}W.ContextConsumer=Ai;W.ContextProvider=Di;W.Element=Ia;W.ForwardRef=Vi;W.Fragment=Ii;W.Lazy=Wi;W.Memo=Hi;W.Portal=Ma;W.Profiler=Fi;W.StrictMode=Mi;W.Suspense=Ui;W.SuspenseList=Bi;W.isAsyncMode=function(){return!1};W.isConcurrentMode=function(){return!1};W.isContextConsumer=function(e){return be(e)===Ai};W.isContextProvider=function(e){return be(e)===Di};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ia};W.isForwardRef=function(e){return be(e)===Vi};W.isFragment=function(e){return be(e)===Ii};W.isLazy=function(e){return be(e)===Wi};W.isMemo=function(e){return be(e)===Hi};W.isPortal=function(e){return be(e)===Ma};W.isProfiler=function(e){return be(e)===Fi};W.isStrictMode=function(e){return be(e)===Mi};W.isSuspense=function(e){return be(e)===Ui};W.isSuspenseList=function(e){return be(e)===Bi};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ii||e===Fi||e===Mi||e===Ui||e===Bi||e===Jp||typeof e=="object"&&e!==null&&(e.$$typeof===Wi||e.$$typeof===Hi||e.$$typeof===Di||e.$$typeof===Ai||e.$$typeof===Vi||e.$$typeof===Yf||e.getModuleId!==void 0)};W.typeOf=be;Qf.exports=W;var bp=Qf.exports;_`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;_`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;_`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;_`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;_`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;_`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;_`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;_`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;_`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;_`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;_`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;_`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;_`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;const Xf=_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function em({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=Xf,iterationCount:o=1}){return Bf`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function tm(e){return e==null}function nm(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Kf(e,t){return n=>n?e():t()}function Mr(e){return Kf(e,()=>null)}function Ss(e){return Mr(()=>({opacity:0}))(e)}const Gf=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:i=0,keyframes:l=Xf,triggerOnce:s=!1,className:a,style:c,childClassName:h,childStyle:m,children:p,onVisibilityChange:w}=e,v=z.useMemo(()=>em({keyframes:l,duration:o}),[o,l]);return tm(p)?null:nm(p)?se(om,{...e,animationStyles:v,children:String(p)}):bp.isFragment(p)?se(Zf,{...e,animationStyles:v}):se(Vp,{children:z.Children.map(p,(g,P)=>{if(!z.isValidElement(g))return null;const f=r+(t?P*o*n:0);switch(g.type){case"ol":case"ul":return se(Cl,{children:({cx:u})=>se(g.type,{...g.props,className:u(a,g.props.className),style:Object.assign({},c,g.props.style),children:se(Gf,{...e,children:g.props.children})})});case"li":return se(oc,{threshold:i,triggerOnce:s,onChange:w,children:({inView:u,ref:d})=>se(Cl,{children:({cx:y})=>se(g.type,{...g.props,ref:d,className:y(h,g.props.className),css:Mr(()=>v)(u),style:Object.assign({},m,g.props.style,Ss(!u),{animationDelay:f+"ms"})})})});default:return se(oc,{threshold:i,triggerOnce:s,onChange:w,children:({inView:u,ref:d})=>se("div",{ref:d,className:a,css:Mr(()=>v)(u),style:Object.assign({},c,Ss(!u),{animationDelay:f+"ms"}),children:se(Cl,{children:({cx:y})=>se(g.type,{...g.props,className:y(h,g.props.className),style:Object.assign({},m,g.props.style)})})})})}})})},rm={display:"inline-block",whiteSpace:"pre"},om=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:i=1e3,fraction:l=0,triggerOnce:s=!1,className:a,style:c,children:h,onVisibilityChange:m}=e,{ref:p,inView:w}=Wf({triggerOnce:s,threshold:l,onChange:m});return Kf(()=>se("div",{ref:p,className:a,style:Object.assign({},c,rm),children:h.split("").map((v,g)=>se("span",{css:Mr(()=>t)(w),style:{animationDelay:o+g*i*r+"ms"},children:v},g))}),()=>se(Zf,{...e,children:h}))(n)},Zf=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:i,children:l,onVisibilityChange:s}=e,{ref:a,inView:c}=Wf({triggerOnce:r,threshold:n,onChange:s});return se("div",{ref:a,className:o,css:Mr(()=>t)(c),style:Object.assign({},i,Ss(!c)),children:l})};_`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;_`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;_`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;_`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;_`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`;_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`;_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`;_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;_`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;_`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;_`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;_`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;_`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;_`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;_`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;const im=_`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,lm=_`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,sm=_`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,am=_`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,um=_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,cm=_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,fm=_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,dm=_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function pm(e,t){switch(t){case"down":return e?um:im;case"right":return e?fm:sm;case"up":return e?dm:am;case"left":default:return e?cm:lm}}const Qi=e=>{const{direction:t,reverse:n=!1,...r}=e,o=z.useMemo(()=>pm(n,t),[t,n]);return se(Gf,{keyframes:o,...r})};_`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;_`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function mm(){return x.jsx(Qi,{triggerOnce:!0,direction:"right",children:x.jsxs(Si,{left:!0,id:"Main",children:[x.jsx("div",{className:"h-full w-full hidden lg:flex justify-end pr-36",children:x.jsx("div",{className:"w-1/8 flex justify-center",children:x.jsx("img",{src:M2,alt:"",className:"shadow rounded-full max-w-full h-auto align-middle border-none"})})}),x.jsx("div",{className:"flex justify-center items-center w-full",children:x.jsxs("div",{className:"h-full w-4/5 flex flex-col justify-center items-center gap-6",children:[" ",x.jsx("h1",{className:"text-6xl sm:text-9xl font-bold text-text-color text-center",children:"Bartosz Pers"}),x.jsxs("div",{className:"flex gap-3",children:[x.jsx(mn,{text:"React"}),x.jsx(mn,{text:"Express"}),x.jsx(mn,{text:"Python"}),x.jsx(mn,{text:"MongoDB"}),x.jsx(mn,{text:"SQL"}),x.jsx(mn,{text:"C++"})]}),x.jsx("p",{className:"text-text-color text-center text-lg sm:text-4xl",children:"Third year computer science student at Poznan University Of Technology. Passionate in web development and gym"}),x.jsxs("div",{className:"flex justify-center gap-5",children:[x.jsx("a",{href:"https://github.com/Bonioszko",target:"_blank",rel:"noopener noreferrer",children:x.jsx(kf,{className:"fill-white hover:fill-green-500"})}),x.jsx("a",{href:"https://www.linkedin.com/in/bartosz-pers-5038812b9/",target:"_blank",rel:"noopener noreferrer",children:x.jsx(I2,{className:"fill-white hover:fill-sky-600"})})]})]})})]})})}const hm=e=>x.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"40px",height:"40px",className:e.className,children:x.jsx("path",{d:"M 8.03125 8.4570312 C 7.770375 8.4589063 7.5103125 8.5625312 7.3203125 8.7695312 C 3.3953125 13.041531 1 18.741 1 25 C 1 31.259 3.3953125 36.958469 7.3203125 41.230469 C 7.7003125 41.644469 8.3569063 41.643094 8.7539062 41.246094 L 10.882812 39.117188 C 11.265812 38.734187 11.263391 38.124656 10.900391 37.722656 C 7.8553906 34.352656 6 29.889 6 25 C 6 20.111 7.8553906 15.647344 10.900391 12.277344 C 11.263391 11.875344 11.265813 11.266812 10.882812 10.882812 L 8.7539062 8.7539062 C 8.5554063 8.5554063 8.292125 8.4551562 8.03125 8.4570312 z M 41.96875 8.4570312 C 41.707625 8.4554062 41.444594 8.5554062 41.246094 8.7539062 L 39.115234 10.884766 C 38.732234 11.267766 38.734656 11.875344 39.097656 12.277344 C 42.143656 15.646344 44 20.111 44 25 C 44 29.889 42.144609 34.352656 39.099609 37.722656 C 38.736609 38.124656 38.734188 38.733187 39.117188 39.117188 L 41.246094 41.246094 C 41.643094 41.643094 42.299687 41.643469 42.679688 41.230469 C 46.604687 36.958469 49 31.259 49 25 C 49 18.741 46.604687 13.041531 42.679688 8.7695312 C 42.489688 8.5625312 42.229875 8.4586563 41.96875 8.4570312 z M 35.625 14.837891 C 35.355125 14.824516 35.079594 14.920406 34.871094 15.128906 L 32.740234 17.259766 C 32.381234 17.618766 32.341969 18.196938 32.667969 18.585938 C 34.123969 20.323937 35 22.561 35 25 C 35 27.439 34.123969 29.675109 32.667969 31.412109 C 32.341969 31.801109 32.381234 32.379281 32.740234 32.738281 L 34.871094 34.871094 C 35.288094 35.288094 35.967516 35.250687 36.353516 34.804688 C 38.625516 32.175687 40 28.748 40 25 C 40 21.252 38.625516 17.824312 36.353516 15.195312 C 36.160516 14.972313 35.894875 14.851266 35.625 14.837891 z M 14.375 14.839844 C 14.105125 14.853219 13.839484 14.974266 13.646484 15.197266 C 11.374484 17.825266 10 21.252 10 25 C 10 28.748 11.374484 32.175688 13.646484 34.804688 C 14.032484 35.250687 14.711906 35.288094 15.128906 34.871094 L 17.259766 32.740234 C 17.618766 32.381234 17.658031 31.803062 17.332031 31.414062 C 15.876031 29.676062 15 27.439 15 25 C 15 22.561 15.876031 20.324891 17.332031 18.587891 C 17.658031 18.198891 17.618766 17.620719 17.259766 17.261719 L 15.128906 15.128906 C 14.920406 14.920406 14.644875 14.826469 14.375 14.839844 z M 25 19 C 21.686 19 19 21.686 19 25 C 19 28.314 21.686 31 25 31 C 28.314 31 31 28.314 31 25 C 31 21.686 28.314 19 25 19 z"})}),gm="data:image/svg+xml,%3csvg%20height='2500'%20viewBox='175.7%2078%20490.6%20436.9'%20width='2194'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20fill='%2361dafb'%3e%3cpath%20d='m666.3%20296.5c0-32.5-40.7-63.3-103.1-82.4%2014.4-63.6%208-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6%200%208.3.9%2011.4%202.6%2013.6%207.8%2019.5%2037.5%2014.9%2075.7-1.1%209.4-2.9%2019.3-5.1%2029.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50%2032.6-30.3%2063.2-46.9%2084-46.9v-22.3c-27.5%200-63.5%2019.6-99.9%2053.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7%200%2051.4%2016.5%2084%2046.6-14%2014.7-28%2031.4-41.3%2049.9-22.6%202.4-44%206.1-63.6%2011-2.3-10-4-19.7-5.2-29-4.7-38.2%201.1-67.9%2014.6-75.8%203-1.8%206.9-2.6%2011.5-2.6v-22.3c-8.4%200-16%201.8-22.6%205.6-28.1%2016.2-34.4%2066.7-19.9%20130.1-62.2%2019.2-102.7%2049.9-102.7%2082.3%200%2032.5%2040.7%2063.3%20103.1%2082.4-14.4%2063.6-8%20114.2%2020.2%20130.4%206.5%203.8%2014.1%205.6%2022.5%205.6%2027.5%200%2063.5-19.6%2099.9-53.6%2036.4%2033.8%2072.4%2053.2%2099.9%2053.2%208.4%200%2016-1.8%2022.6-5.6%2028.1-16.2%2034.4-66.7%2019.9-130.1%2062-19.1%20102.5-49.9%20102.5-82.3zm-130.2-66.7c-3.7%2012.9-8.3%2026.2-13.5%2039.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4%2014.2%202.1%2027.9%204.7%2041%207.9zm-45.8%20106.5c-7.8%2013.5-15.8%2026.3-24.1%2038.2-14.9%201.3-30%202-45.2%202-15.1%200-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8%206.2-13.4%2013.2-26.8%2020.7-39.9%207.8-13.5%2015.8-26.3%2024.1-38.2%2014.9-1.3%2030-2%2045.2-2%2015.1%200%2030.2.7%2045%201.9%208.3%2011.9%2016.4%2024.6%2024.2%2038%207.6%2013.1%2014.5%2026.4%2020.8%2039.8-6.3%2013.4-13.2%2026.8-20.7%2039.9zm32.3-13c5.4%2013.4%2010%2026.8%2013.8%2039.8-13.1%203.2-26.9%205.9-41.2%208%204.9-7.7%209.8-15.6%2014.4-23.7%204.6-8%208.9-16.1%2013-24.1zm-101.4%20106.7c-9.3-9.6-18.6-20.3-27.8-32%209%20.4%2018.2.7%2027.5.7%209.4%200%2018.7-.2%2027.8-.7-9%2011.7-18.3%2022.4-27.5%2032zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9%203.7-12.9%208.3-26.2%2013.5-39.5%204.1%208%208.4%2016%2013.1%2024s9.5%2015.8%2014.4%2023.4zm73.9-208.1c9.3%209.6%2018.6%2020.3%2027.8%2032-9-.4-18.2-.7-27.5-.7-9.4%200-18.7.2-27.8.7%209-11.7%2018.3-22.4%2027.5-32zm-74%2058.9c-4.9%207.7-9.8%2015.6-14.4%2023.7-4.6%208-8.9%2016-13%2024-5.4-13.4-10-26.8-13.8-39.8%2013.1-3.1%2026.9-5.8%2041.2-7.9zm-90.5%20125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6%2058.3-50.6c8.6-3.7%2018-7%2027.7-10.1%205.7%2019.6%2013.2%2040%2022.5%2060.9-9.2%2020.8-16.6%2041.1-22.2%2060.6-9.9-3.1-19.3-6.5-28-10.2zm53.8%20142.9c-13.6-7.8-19.5-37.5-14.9-75.7%201.1-9.4%202.9-19.3%205.1-29.4%2019.6%204.8%2041%208.5%2063.5%2010.9%2013.5%2018.5%2027.5%2035.3%2041.6%2050-32.6%2030.3-63.2%2046.9-84%2046.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7%2038.2-1.1%2067.9-14.6%2075.8-3%201.8-6.9%202.6-11.5%202.6-20.7%200-51.4-16.5-84-46.6%2014-14.7%2028-31.4%2041.3-49.9%2022.6-2.4%2044-6.1%2063.6-11%202.3%2010.1%204.1%2019.8%205.2%2029.1zm38.5-66.7c-8.6%203.7-18%207-27.7%2010.1-5.7-19.6-13.2-40-22.5-60.9%209.2-20.8%2016.6-41.1%2022.2-60.6%209.9%203.1%2019.3%206.5%2028.1%2010.2%2035.4%2015.1%2058.3%2034.9%2058.3%2050.6-.1%2015.7-23%2035.6-58.4%2050.6z'/%3e%3ccircle%20cx='420.9'%20cy='296.5'%20r='45.7'/%3e%3c/g%3e%3c/svg%3e",vm="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3efile_type_tailwind%3c/title%3e%3cpath%20d='M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z'%20style='fill:%2344a8b3'/%3e%3c/svg%3e",ym="data:image/svg+xml,%3csvg%20height='2500'%20viewBox='8.738%20-5.03622834%2017.45992422%2039.40619484'%20width='2500'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m15.9.087.854%201.604c.192.296.4.558.645.802a22.406%2022.406%200%200%201%202.004%202.266c1.447%201.9%202.423%204.01%203.12%206.292.418%201.394.645%202.824.662%204.27.07%204.323-1.412%208.035-4.4%2011.12a12.7%2012.7%200%200%201%20-1.57%201.342c-.296%200-.436-.227-.558-.436a3.589%203.589%200%200%201%20-.436-1.255c-.105-.523-.174-1.046-.14-1.586v-.244c-.024-.052-.285-24.052-.181-24.175z'%20fill='%23599636'/%3e%3cpath%20d='m15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55%201.342-2.77%202.963-3.747%204.776-1.3%202.44-1.97%205.055-2.16%207.808-.087.993.314%204.497.627%205.508.854%202.684%202.388%204.933%204.375%206.885.488.47%201.01.906%201.55%201.325.157%200%20.174-.14.21-.244a4.78%204.78%200%200%200%20.157-.68l.35-2.614z'%20fill='%236cac48'/%3e%3cpath%20d='m16.754%2028.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453a3.235%203.235%200%200%201%20-.26-.575c-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37%2017.37%200%200%201%20-.314%202.353c-.052.314-.087.627-.28.906%200%20.035%200%20.07.017.122.314.924.4%201.865.453%202.824v.35c0%20.418-.017.33.33.47.14.052.296.07.436.174.105%200%20.122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z'%20fill='%23c2bfbf'/%3e%3c/svg%3e",wm="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='nonzero'%20clip-rule='nonzero'%20d='M0%201.75C0%200.783501%200.783502%200%201.75%200H14.25C15.2165%200%2016%200.783502%2016%201.75V3.75C16%204.16421%2015.6642%204.5%2015.25%204.5C14.8358%204.5%2014.5%204.16421%2014.5%203.75V1.75C14.5%201.61193%2014.3881%201.5%2014.25%201.5H1.75C1.61193%201.5%201.5%201.61193%201.5%201.75V14.25C1.5%2014.3881%201.61193%2014.5%201.75%2014.5H15.25C15.6642%2014.5%2016%2014.8358%2016%2015.25C16%2015.6642%2015.6642%2016%2015.25%2016H1.75C0.783501%2016%200%2015.2165%200%2014.25V1.75ZM4.75%206.5C4.75%206.08579%205.08579%205.75%205.5%205.75H9.25C9.66421%205.75%2010%206.08579%2010%206.5C10%206.91421%209.66421%207.25%209.25%207.25H8.25V12.5C8.25%2012.9142%207.91421%2013.25%207.5%2013.25C7.08579%2013.25%206.75%2012.9142%206.75%2012.5V7.25H5.5C5.08579%207.25%204.75%206.91421%204.75%206.5ZM11.2757%206.58011C11.6944%206.08164%2012.3507%205.75%2013.25%205.75C14.0849%205.75%2014.7148%206.03567%2015.1394%206.48481C15.4239%206.78583%2015.4105%207.26052%2015.1095%207.54505C14.8085%207.82958%2014.3338%207.81621%2014.0493%207.51519C13.9394%207.39898%2013.7204%207.25%2013.25%207.25C12.7493%207.25%2012.5306%207.41836%2012.4243%207.54489C12.2934%207.70065%2012.25%207.896%2012.25%208C12.25%208.104%2012.2934%208.29935%2012.4243%208.45511C12.5306%208.58164%2012.7493%208.75%2013.25%208.75C13.3257%208.75%2013.3988%208.76121%2013.4676%208.78207C14.1307%208.87646%2014.6319%209.17251%2014.9743%209.58011C15.3684%2010.0493%2015.5%2010.604%2015.5%2011C15.5%2011.396%2015.3684%2011.9507%2014.9743%2012.4199C14.5556%2012.9184%2013.8993%2013.25%2013%2013.25C12.1651%2013.25%2011.5352%2012.9643%2011.1106%2012.5152C10.8261%2012.2142%2010.8395%2011.7395%2011.1405%2011.4549C11.4415%2011.1704%2011.9162%2011.1838%2012.2007%2011.4848C12.3106%2011.601%2012.5296%2011.75%2013%2011.75C13.5007%2011.75%2013.7194%2011.5816%2013.8257%2011.4551C13.9566%2011.2993%2014%2011.104%2014%2011C14%2010.896%2013.9566%2010.7007%2013.8257%2010.5449C13.7194%2010.4184%2013.5007%2010.25%2013%2010.25C12.9243%2010.25%2012.8512%2010.2388%2012.7824%2010.2179C12.1193%2010.1235%2011.6181%209.82749%2011.2757%209.41989C10.8816%208.95065%2010.75%208.396%2010.75%208C10.75%207.604%2010.8816%207.04935%2011.2757%206.58011Z'%20fill='%23FFFFFF'/%3e%3c/svg%3e",xm="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%20width='64'%20height='64'%20%3e%3cpath%20d='M32%2024.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365%207.257c-.613.873-1.256%201.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214%201.86-.105%202.535.88l4.765%206.435%204.8-6.4c.615-.873%201.276-1.205%202.38-.883l-2.48%203.288-3.36%204.375c-.4.5-.345.842.023%201.325L32%2024.795zM.008%2015.427l.562-2.764C2.1%207.193%208.37%204.92%2012.694%208.3c2.527%201.988%203.155%204.8%203.03%207.95H1.48c-.214%205.67%203.867%209.092%209.07%207.346%201.825-.613%202.9-2.042%203.438-3.83.273-.896.725-1.036%201.567-.78-.43%202.236-1.4%204.104-3.45%205.273-3.063%201.75-7.435%201.184-9.735-1.248C1%2021.6.434%2019.812.18%2017.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58%202.813-6.746%207.037z'%20fill='%23F8F8FF'/%3e%3c/svg%3e",Sm="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M1.25%202C1.25%201.58579%201.58579%201.25%202%201.25H14C14.3033%201.25%2014.5768%201.43273%2014.6929%201.71299C14.809%201.99324%2014.7448%202.31583%2014.5303%202.53033L9.06066%208L14.5303%2013.4697C14.7448%2013.6842%2014.809%2014.0068%2014.6929%2014.287C14.5768%2014.5673%2014.3033%2014.75%2014%2014.75H2C1.58579%2014.75%201.25%2014.4142%201.25%2014V2ZM2.75%202.75V13.25H12.1893L7.46967%208.53033C7.17678%208.23744%207.17678%207.76256%207.46967%207.46967L12.1893%202.75H2.75Z'%20fill='%23FFFFFF'/%3e%3c/svg%3e",Cm="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20fill='%23FFFFFF'%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='800px'%20height='800px'%20viewBox='0%200%20548.29%20548.291'%20xml:space='preserve'%3e%3cg%3e%3cg%3e%3cpath%20d='M276.043,244.216c-24.575,0-38.741,24.087-38.741,53.862c-0.241,30.228,14.407,53.382,38.5,53.382%20c24.323,0,38.512-22.92,38.512-54.091C314.313,268.303,300.604,244.216,276.043,244.216z'/%3e%3cpath%20d='M486.2,196.116h-13.164V132.59c0-0.399-0.064-0.795-0.116-1.2c-0.021-2.52-0.824-4.997-2.551-6.96L364.656,3.677%20c-0.031-0.031-0.064-0.044-0.085-0.075c-0.629-0.704-1.364-1.29-2.141-1.796c-0.231-0.154-0.462-0.283-0.704-0.419%20c-0.672-0.365-1.386-0.672-2.121-0.893c-0.199-0.052-0.377-0.134-0.576-0.186C358.229,0.118,357.4,0,356.562,0H96.757%20C84.893,0,75.256,9.649,75.256,21.502v174.613H62.093c-16.967,0-30.733,13.756-30.733,30.733v159.812%20c0,16.961,13.766,30.731,30.733,30.731h13.163V526.79c0,11.854,9.637,21.501,21.501,21.501h354.777%20c11.853,0,21.502-9.647,21.502-21.501V417.392H486.2c16.977,0,30.729-13.771,30.729-30.731V226.849%20C516.93,209.872,503.177,196.116,486.2,196.116z%20M96.757,21.502h249.053v110.006c0,5.943,4.818,10.751,10.751,10.751h94.973%20v53.861H96.757V21.502z%20M353.033,376.96l-10.394,27.884c-22.666-6.619-41.565-13.479-62.828-22.445%20c-3.527-1.418-7.317-2.132-11.094-2.362c-35.909-2.352-69.449-28.819-69.449-80.778c0-47.711,30.236-83.623,77.71-83.623%20c48.675,0,75.351,36.854,75.351,80.317c0,36.142-16.766,61.638-37.785,71.091v0.945%20C326.828,371.528,340.519,374.367,353.033,376.96z%20M72.912,370.116l7.328-29.764c9.69,4.96,24.554,9.915,39.917,9.915%20c16.525,0,25.271-6.84,25.271-17.228c0-9.928-7.56-15.597-26.691-22.442c-26.457-9.217-43.696-23.858-43.696-47.014%20c0-27.163,22.68-47.948,60.231-47.948c17.954,0,31.184,3.791,40.623,8.03l-8.021,29.061c-6.375-3.076-17.711-7.564-33.3-7.564%20c-15.599,0-23.163,7.079-23.163,15.357c0,10.15,8.977,14.646,29.533,22.447c28.108,10.394,41.332,25.023,41.332,47.464%20c0,26.699-20.557,49.365-64.253,49.365C99.844,379.785,81.899,375.06,72.912,370.116z%20M451.534,520.962H96.757v-103.57h354.777%20V520.962z%20M475.387,377.428h-99.455V218.231h36.158v128.97h63.297V377.428z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",km="data:image/svg+xml,%3csvg%20width='2222'%20height='2500'%20viewBox='0%200%20256%20288'%20xmlns='http://www.w3.org/2000/svg'%20preserveAspectRatio='xMinYMin%20meet'%3e%3cpath%20d='M255.569%2084.72c-.002-4.83-1.035-9.098-3.124-12.761-2.052-3.602-5.125-6.621-9.247-9.008-34.025-19.619-68.083-39.178-102.097-58.817-9.17-5.294-18.061-5.101-27.163.269C100.395%2012.39%2032.59%2051.237%2012.385%2062.94%204.064%2067.757.015%2075.129.013%2084.711%200%20124.166.013%20163.62%200%20203.076c.002%204.724.991%208.909%202.988%2012.517%202.053%203.711%205.169%206.813%209.386%209.254%2020.206%2011.703%2088.02%2050.547%20101.56%2058.536%209.106%205.373%2017.997%205.565%2027.17.269%2034.015-19.64%2068.075-39.198%20102.105-58.817%204.217-2.44%207.333-5.544%209.386-9.252%201.994-3.608%202.985-7.793%202.987-12.518%200%200%200-78.889-.013-118.345'%20fill='%235C8DBC'/%3e%3cpath%20d='M128.182%20143.509L2.988%20215.593c2.053%203.711%205.169%206.813%209.386%209.254%2020.206%2011.703%2088.02%2050.547%20101.56%2058.536%209.106%205.373%2017.997%205.565%2027.17.269%2034.015-19.64%2068.075-39.198%20102.105-58.817%204.217-2.44%207.333-5.544%209.386-9.252l-124.413-72.074'%20fill='%231A4674'/%3e%3cpath%20d='M91.101%20164.861c7.285%2012.718%2020.98%2021.296%2036.69%2021.296%2015.807%200%2029.58-8.687%2036.828-21.541l-36.437-21.107-37.081%2021.352'%20fill='%231A4674'/%3e%3cpath%20d='M255.569%2084.72c-.002-4.83-1.035-9.098-3.124-12.761l-124.263%2071.55%20124.413%2072.074c1.994-3.608%202.985-7.793%202.987-12.518%200%200%200-78.889-.013-118.345'%20fill='%231B598E'/%3e%3cpath%20d='M248.728%20148.661h-9.722v9.724h-9.724v-9.724h-9.721v-9.721h9.721v-9.722h9.724v9.722h9.722v9.721M213.253%20148.661h-9.721v9.724h-9.722v-9.724h-9.722v-9.721h9.722v-9.722h9.722v9.722h9.721v9.721'%20fill='%23FFF'/%3e%3cpath%20d='M164.619%20164.616c-7.248%2012.854-21.021%2021.541-36.828%2021.541-15.71%200-29.405-8.578-36.69-21.296a42.062%2042.062%200%200%201-5.574-20.968c0-23.341%2018.923-42.263%2042.264-42.263%2015.609%200%2029.232%208.471%2036.553%2021.059l36.941-21.272c-14.683-25.346-42.096-42.398-73.494-42.398-46.876%200-84.875%2038-84.875%2084.874%200%2015.378%204.091%2029.799%2011.241%2042.238%2014.646%2025.48%2042.137%2042.637%2073.634%2042.637%2031.555%200%2059.089-17.226%2073.714-42.781l-36.886-21.371'%20fill='%23FFF'/%3e%3c/svg%3e",Em="/Portfolio/assets/TrainingApp-z3MdpAwC.jpg",_m="/Portfolio/assets/Portfolio-CAWEX1B3.jpg",Nm="/Portfolio/assets/PaymentPal-BorU3PEZ.jpg",Pm={PaymentPal:Nm,TrainingApp:Em,Portfolio:_m},Lm={React:gm,Express:xm,MongoDB:ym,Tailwind:vm,Typescript:wm,Kotlin:Sm,SQL:Cm,C:km},Tm=({name:e,description:t,technologies:n,githubLink:r,liveSiteLink:o,active:i})=>{const l=Pm[e];return x.jsx(x.Fragment,{children:i?x.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 animate-slideInFromLeft",children:[x.jsxs("div",{className:"w-full flex items-center justify-center relative group",children:[x.jsx("img",{src:l,alt:e,className:"w-full rounded-3xl border-2 group-hover:opacity-45"}),o&&x.jsx("div",{className:"text-text-color absolute opacity-0 group-hover:opacity-100 group-hover:animate-slideInFromLeft",children:x.jsx("a",{href:o,className:"text-bold text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-300 to-green-400",children:"Site"})})]}),x.jsxs("div",{className:" h-13 w-full flex flex-col items-center gap-5",children:[x.jsx("h1",{className:"col text-text-color text-5xl",children:e}),x.jsx("div",{className:"flex justify-center gap-5  ",children:n.map(s=>x.jsx("img",{src:Lm[s],alt:s,className:"w-10"},s))}),x.jsx("p",{className:"text-text-color w-3/5",children:t}),x.jsxs("div",{className:"flex justify-center gap-3",children:[x.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:x.jsx(kf,{className:"fill-white hover:fill-green-500"})}),o&&x.jsx("a",{href:o,target:"_blank",rel:"noopener noreferrer",children:x.jsx(hm,{className:"fill-text-color hover:fill-red-600"})})]})]})," "]}):x.jsx(x.Fragment,{})})},ic=[{name:"PaymentPal",imageLink:"../../public/PaymentPal.jpg",description:"App to manage bills for landlors. User can kepp track of their apartments and invoices related to them. Landlord can easily send an email to tenant without leaving the application. App supports English and Polish language",technologies:["React","Express","MongoDB","Tailwind","Typescript"],githubLink:"https://github.com/Bonioszko/BillTracker",liveSiteLink:"https://paymentpal.onrender.com/"},{name:"TrainingApp",imageLink:"../../public/TrainingApp.jpg",description:"I wanted to create application to track my personal trainings. Application allows you to create your own trainings and exercises. Based on created trainings you can create specific training with repetitions, sets and weight used. Interesting functionality is a built in timer, so you do not need to use separate application to track time between sets. To access content you need to firstly register and then login into your account",technologies:["React","Express","MongoDB"],githubLink:"https://github.com/Bonioszko/TrainingApp",liveSiteLink:"https://trainingappfull.onrender.com/"},{name:"Portfolio",imageLink:"../../public/Portfolio.jpg",description:"This is my personal website to showcase myself and my skills in creating appealing and responsive webistes",technologies:["React","Tailwind","Typescript"],githubLink:"https://github.com/Bonioszko/Portfolio",liveSiteLink:"https://bonioszko.github.io/Portfolio/"}],Fa=({text:e})=>x.jsx("h1",{className:"text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-300 to-green-400 pb-3",children:e}),zm=()=>{const[e,t]=z.useState(0);return x.jsxs(Si,{left:!1,id:"Projects",children:[x.jsx(Fa,{text:"Projects"}),x.jsx("div",{className:"flex gap-4",children:ic.map((n,r)=>x.jsx("h1",{onClick:()=>t(r),className:`text-text-color border-b-2 font-semibold sm:text-xl cursor-pointer  ${r===e?" transition-border-color  border-secondary-color":"border-transparent"}`,children:n.name},n.name))}),x.jsx("div",{className:" flex flex-col sm:flex-row gap-4",children:ic.map((n,r)=>x.jsx(Tm,{name:n.name,imageLink:n.imageLink,description:n.description,technologies:n.technologies,githubLink:n.githubLink,liveSiteLink:n.liveSiteLink,active:r===e},r))})]})};function Rm(){return x.jsx(Qi,{triggerOnce:!0,direction:"left",children:x.jsx(zm,{})})}const Fr={_origin:"https://api.emailjs.com"},jm=(e,t="https://api.emailjs.com")=>{Fr._userID=e,Fr._origin=t},qf=(e,t,n)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class lc{constructor(t){this.status=t.status,this.text=t.responseText}}const Jf=(e,t,n={})=>new Promise((r,o)=>{const i=new XMLHttpRequest;i.addEventListener("load",({target:l})=>{const s=new lc(l);s.status===200||s.text==="OK"?r(s):o(s)}),i.addEventListener("error",({target:l})=>{o(new lc(l))}),i.open("POST",Fr._origin+e,!0),Object.keys(n).forEach(l=>{i.setRequestHeader(l,n[l])}),i.send(t)}),Om=(e,t,n,r)=>{const o=r||Fr._userID;return qf(o,e,t),Jf("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:o,service_id:e,template_id:t,template_params:n}),{"Content-type":"application/json"})},$m=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},Im=(e,t,n,r)=>{const o=r||Fr._userID,i=$m(n);qf(o,e,t);const l=new FormData(i);return l.append("lib_version","3.2.0"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",o),Jf("/api/v1.0/email/send-form",l)},Mm={init:jm,send:Om,sendForm:Im};var bf={exports:{}},Fm="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Dm=Fm,Am=Dm;function e1(){}function t1(){}t1.resetWarningCache=e1;var Vm=function(){function e(r,o,i,l,s,a){if(a!==Am){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:t1,resetWarningCache:e1};return n.PropTypes=n,n};bf.exports=Vm();var Um=bf.exports;const Te=Ts(Um);var Bm=["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl","isolated"];function Cs(){return Cs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cs.apply(this,arguments)}function Hm(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function mo(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Wm(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ks(e,t)}function ks(e,t){return ks=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},ks(e,t)}var Yi=function(e){Wm(t,e);function t(){var r;return r=e.call(this)||this,r.handleExpired=r.handleExpired.bind(mo(r)),r.handleErrored=r.handleErrored.bind(mo(r)),r.handleChange=r.handleChange.bind(mo(r)),r.handleRecaptchaRef=r.handleRecaptchaRef.bind(mo(r)),r}var n=t.prototype;return n.getCaptchaFunction=function(o){return this.props.grecaptcha?this.props.grecaptcha.enterprise?this.props.grecaptcha.enterprise[o]:this.props.grecaptcha[o]:null},n.getValue=function(){var o=this.getCaptchaFunction("getResponse");return o&&this._widgetId!==void 0?o(this._widgetId):null},n.getWidgetId=function(){return this.props.grecaptcha&&this._widgetId!==void 0?this._widgetId:null},n.execute=function(){var o=this.getCaptchaFunction("execute");if(o&&this._widgetId!==void 0)return o(this._widgetId);this._executeRequested=!0},n.executeAsync=function(){var o=this;return new Promise(function(i,l){o.executionResolve=i,o.executionReject=l,o.execute()})},n.reset=function(){var o=this.getCaptchaFunction("reset");o&&this._widgetId!==void 0&&o(this._widgetId)},n.forceReset=function(){var o=this.getCaptchaFunction("reset");o&&o()},n.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},n.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},n.handleChange=function(o){this.props.onChange&&this.props.onChange(o),this.executionResolve&&(this.executionResolve(o),delete this.executionReject,delete this.executionResolve)},n.explicitRender=function(){var o=this.getCaptchaFunction("render");if(o&&this._widgetId===void 0){var i=document.createElement("div");this._widgetId=o(i,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge,isolated:this.props.isolated}),this.captcha.appendChild(i)}this._executeRequested&&this.props.grecaptcha&&this._widgetId!==void 0&&(this._executeRequested=!1,this.execute())},n.componentDidMount=function(){this.explicitRender()},n.componentDidUpdate=function(){this.explicitRender()},n.handleRecaptchaRef=function(o){this.captcha=o},n.render=function(){var o=this.props;o.sitekey,o.onChange,o.theme,o.type,o.tabindex,o.onExpired,o.onErrored,o.size,o.stoken,o.grecaptcha,o.badge,o.hl,o.isolated;var i=Hm(o,Bm);return z.createElement("div",Cs({},i,{ref:this.handleRecaptchaRef}))},t}(z.Component);Yi.displayName="ReCAPTCHA";Yi.propTypes={sitekey:Te.string.isRequired,onChange:Te.func,grecaptcha:Te.object,theme:Te.oneOf(["dark","light"]),type:Te.oneOf(["image","audio"]),tabindex:Te.number,onExpired:Te.func,onErrored:Te.func,size:Te.oneOf(["compact","normal","invisible"]),stoken:Te.string,hl:Te.string,badge:Te.oneOf(["bottomright","bottomleft","inline"]),isolated:Te.bool};Yi.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};function Es(){return Es=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Es.apply(this,arguments)}function Qm(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Ym(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var nt={},Xm=0;function Km(e,t){return t=t||{},function(r){var o=r.displayName||r.name||"Component",i=function(s){Ym(a,s);function a(h,m){var p;return p=s.call(this,h,m)||this,p.state={},p.__scriptURL="",p}var c=a.prototype;return c.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+Xm++),this.__scriptLoaderID},c.setupScriptURL=function(){return this.__scriptURL=typeof e=="function"?e():e,this.__scriptURL},c.asyncScriptLoaderHandleLoad=function(m){var p=this;this.setState(m,function(){return p.props.asyncScriptOnLoad&&p.props.asyncScriptOnLoad(p.state)})},c.asyncScriptLoaderTriggerOnScriptLoaded=function(){var m=nt[this.__scriptURL];if(!m||!m.loaded)throw new Error("Script is not loaded.");for(var p in m.observers)m.observers[p](m);delete window[t.callbackName]},c.componentDidMount=function(){var m=this,p=this.setupScriptURL(),w=this.asyncScriptLoaderGetScriptLoaderID(),v=t,g=v.globalName,P=v.callbackName,f=v.scriptId;if(g&&typeof window[g]<"u"&&(nt[p]={loaded:!0,observers:{}}),nt[p]){var u=nt[p];if(u&&(u.loaded||u.errored)){this.asyncScriptLoaderHandleLoad(u);return}u.observers[w]=function(S){return m.asyncScriptLoaderHandleLoad(S)};return}var d={};d[w]=function(S){return m.asyncScriptLoaderHandleLoad(S)},nt[p]={loaded:!1,observers:d};var y=document.createElement("script");y.src=p,y.async=!0;for(var E in t.attributes)y.setAttribute(E,t.attributes[E]);f&&(y.id=f);var N=function(C){if(nt[p]){var j=nt[p],R=j.observers;for(var G in R)C(R[G])&&delete R[G]}};P&&typeof window<"u"&&(window[P]=function(){return m.asyncScriptLoaderTriggerOnScriptLoaded()}),y.onload=function(){var S=nt[p];S&&(S.loaded=!0,N(function(C){return P?!1:(C(S),!0)}))},y.onerror=function(){var S=nt[p];S&&(S.errored=!0,N(function(C){return C(S),!0}))},document.body.appendChild(y)},c.componentWillUnmount=function(){var m=this.__scriptURL;if(t.removeOnUnmount===!0)for(var p=document.getElementsByTagName("script"),w=0;w<p.length;w+=1)p[w].src.indexOf(m)>-1&&p[w].parentNode&&p[w].parentNode.removeChild(p[w]);var v=nt[m];v&&(delete v.observers[this.asyncScriptLoaderGetScriptLoaderID()],t.removeOnUnmount===!0&&delete nt[m])},c.render=function(){var m=t.globalName,p=this.props;p.asyncScriptOnLoad;var w=p.forwardedRef,v=Qm(p,["asyncScriptOnLoad","forwardedRef"]);return m&&typeof window<"u"&&(v[m]=typeof window[m]<"u"?window[m]:void 0),v.ref=w,z.createElement(r,v)},a}(z.Component),l=z.forwardRef(function(s,a){return z.createElement(i,Es({},s,{forwardedRef:a}))});return l.displayName="AsyncScriptLoader("+o+")",l.propTypes={asyncScriptOnLoad:Te.func},Pp(l,r)}}var _s="onloadcallback",Gm="grecaptcha";function Ns(){return typeof window<"u"&&window.recaptchaOptions||{}}function Zm(){var e=Ns(),t=e.useRecaptchaNet?"recaptcha.net":"www.google.com";return e.enterprise?"https://"+t+"/recaptcha/enterprise.js?onload="+_s+"&render=explicit":"https://"+t+"/recaptcha/api.js?onload="+_s+"&render=explicit"}const qm=Km(Zm,{callbackName:_s,globalName:Gm,attributes:Ns().nonce?{nonce:Ns().nonce}:{}})(Yi);function n1(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=n1(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Ft(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=n1(e))&&(r&&(r+=" "),r+=t);return r}const Dr=e=>typeof e=="number"&&!isNaN(e),on=e=>typeof e=="string",Ae=e=>typeof e=="function",jo=e=>on(e)||Ae(e)?e:null,Ps=e=>z.isValidElement(e)||on(e)||Ae(e)||Dr(e);function Jm(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=r+"px",o.transition=`all ${n}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)})})}function Xi(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:o=!0,collapseDuration:i=300}=e;return function(l){let{children:s,position:a,preventExitTransition:c,done:h,nodeRef:m,isIn:p,playToast:w}=l;const v=r?`${t}--${a}`:t,g=r?`${n}--${a}`:n,P=z.useRef(0);return z.useLayoutEffect(()=>{const f=m.current,u=v.split(" "),d=y=>{y.target===m.current&&(w(),f.removeEventListener("animationend",d),f.removeEventListener("animationcancel",d),P.current===0&&y.type!=="animationcancel"&&f.classList.remove(...u))};f.classList.add(...u),f.addEventListener("animationend",d),f.addEventListener("animationcancel",d)},[]),z.useEffect(()=>{const f=m.current,u=()=>{f.removeEventListener("animationend",u),o?Jm(f,h,i):h()};p||(c?u():(P.current=1,f.className+=` ${g}`,f.addEventListener("animationend",u)))},[p]),U.createElement(U.Fragment,null,s)}}function sc(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const ke=new Map;let Ar=[];const Ls=new Set,bm=e=>Ls.forEach(t=>t(e)),r1=()=>ke.size>0;function o1(e,t){var n;if(t)return!((n=ke.get(t))==null||!n.isToastActive(e));let r=!1;return ke.forEach(o=>{o.isToastActive(e)&&(r=!0)}),r}function i1(e,t){Ps(e)&&(r1()||Ar.push({content:e,options:t}),ke.forEach(n=>{n.buildToast(e,t)}))}function ac(e,t){ke.forEach(n=>{t!=null&&t!=null&&t.containerId?(t==null?void 0:t.containerId)===n.id&&n.toggle(e,t==null?void 0:t.id):n.toggle(e,t==null?void 0:t.id)})}function e3(e){const{subscribe:t,getSnapshot:n,setProps:r}=z.useRef(function(i){const l=i.containerId||1;return{subscribe(s){const a=function(h,m,p){let w=1,v=0,g=[],P=[],f=[],u=m;const d=new Map,y=new Set,E=()=>{f=Array.from(d.values()),y.forEach(C=>C())},N=C=>{P=C==null?[]:P.filter(j=>j!==C),E()},S=C=>{const{toastId:j,onOpen:R,updateId:G,children:Pe}=C.props,Ye=G==null;C.staleId&&d.delete(C.staleId),d.set(j,C),P=[...P,C.props.toastId].filter(et=>et!==C.staleId),E(),p(sc(C,Ye?"added":"updated")),Ye&&Ae(R)&&R(z.isValidElement(Pe)&&Pe.props)};return{id:h,props:u,observe:C=>(y.add(C),()=>y.delete(C)),toggle:(C,j)=>{d.forEach(R=>{j!=null&&j!==R.props.toastId||Ae(R.toggle)&&R.toggle(C)})},removeToast:N,toasts:d,clearQueue:()=>{v-=g.length,g=[]},buildToast:(C,j)=>{if((V=>{let{containerId:fe,toastId:oe,updateId:Le}=V;const Se=fe?fe!==h:h!==1,ut=d.has(oe)&&Le==null;return Se||ut})(j))return;const{toastId:R,updateId:G,data:Pe,staleId:Ye,delay:et}=j,Lt=()=>{N(R)},Tt=G==null;Tt&&v++;const Me={...u,style:u.toastStyle,key:w++,...Object.fromEntries(Object.entries(j).filter(V=>{let[fe,oe]=V;return oe!=null})),toastId:R,updateId:G,data:Pe,closeToast:Lt,isIn:!1,className:jo(j.className||u.toastClassName),bodyClassName:jo(j.bodyClassName||u.bodyClassName),progressClassName:jo(j.progressClassName||u.progressClassName),autoClose:!j.isLoading&&(L=j.autoClose,O=u.autoClose,L===!1||Dr(L)&&L>0?L:O),deleteToast(){const V=d.get(R),{onClose:fe,children:oe}=V.props;Ae(fe)&&fe(z.isValidElement(oe)&&oe.props),p(sc(V,"removed")),d.delete(R),v--,v<0&&(v=0),g.length>0?S(g.shift()):E()}};var L,O;Me.closeButton=u.closeButton,j.closeButton===!1||Ps(j.closeButton)?Me.closeButton=j.closeButton:j.closeButton===!0&&(Me.closeButton=!Ps(u.closeButton)||u.closeButton);let $=C;z.isValidElement(C)&&!on(C.type)?$=z.cloneElement(C,{closeToast:Lt,toastProps:Me,data:Pe}):Ae(C)&&($=C({closeToast:Lt,toastProps:Me,data:Pe}));const A={content:$,props:Me,staleId:Ye};u.limit&&u.limit>0&&v>u.limit&&Tt?g.push(A):Dr(et)?setTimeout(()=>{S(A)},et):S(A)},setProps(C){u=C},setToggle:(C,j)=>{d.get(C).toggle=j},isToastActive:C=>P.some(j=>j===C),getSnapshot:()=>u.newestOnTop?f.reverse():f}}(l,i,bm);ke.set(l,a);const c=a.observe(s);return Ar.forEach(h=>i1(h.content,h.options)),Ar=[],()=>{c(),ke.delete(l)}},setProps(s){var a;(a=ke.get(l))==null||a.setProps(s)},getSnapshot(){var s;return(s=ke.get(l))==null?void 0:s.getSnapshot()}}}(e)).current;r(e);const o=z.useSyncExternalStore(t,n,n);return{getToastToRender:function(i){if(!o)return[];const l=new Map;return o.forEach(s=>{const{position:a}=s.props;l.has(a)||l.set(a,[]),l.get(a).push(s)}),Array.from(l,s=>i(s[0],s[1]))},isToastActive:o1,count:o==null?void 0:o.length}}function t3(e){const[t,n]=z.useState(!1),[r,o]=z.useState(!1),i=z.useRef(null),l=z.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:s,pauseOnHover:a,closeToast:c,onClick:h,closeOnClick:m}=e;var p,w;function v(){n(!0)}function g(){n(!1)}function P(d){const y=i.current;l.canDrag&&y&&(l.didMove=!0,t&&g(),l.delta=e.draggableDirection==="x"?d.clientX-l.start:d.clientY-l.start,l.start!==d.clientX&&(l.canCloseOnClick=!1),y.style.transform=`translate3d(${e.draggableDirection==="x"?`${l.delta}px, var(--y)`:`0, calc(${l.delta}px + var(--y))`},0)`,y.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance)))}function f(){document.removeEventListener("pointermove",P),document.removeEventListener("pointerup",f);const d=i.current;if(l.canDrag&&l.didMove&&d){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return o(!0),e.closeToast(),void e.collapseAll();d.style.transition="transform 0.2s, opacity 0.2s",d.style.removeProperty("transform"),d.style.removeProperty("opacity")}}(w=ke.get((p={id:e.toastId,containerId:e.containerId,fn:n}).containerId||1))==null||w.setToggle(p.id,p.fn),z.useEffect(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||g(),window.addEventListener("focus",v),window.addEventListener("blur",g),()=>{window.removeEventListener("focus",v),window.removeEventListener("blur",g)}},[e.pauseOnFocusLoss]);const u={onPointerDown:function(d){if(e.draggable===!0||e.draggable===d.pointerType){l.didMove=!1,document.addEventListener("pointermove",P),document.addEventListener("pointerup",f);const y=i.current;l.canCloseOnClick=!0,l.canDrag=!0,y.style.transition="none",e.draggableDirection==="x"?(l.start=d.clientX,l.removalDistance=y.offsetWidth*(e.draggablePercent/100)):(l.start=d.clientY,l.removalDistance=y.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(d){const{top:y,bottom:E,left:N,right:S}=i.current.getBoundingClientRect();d.nativeEvent.type!=="touchend"&&e.pauseOnHover&&d.clientX>=N&&d.clientX<=S&&d.clientY>=y&&d.clientY<=E?g():v()}};return s&&a&&(u.onMouseEnter=g,e.stacked||(u.onMouseLeave=v)),m&&(u.onClick=d=>{h&&h(d),l.canCloseOnClick&&c()}),{playToast:v,pauseToast:g,isRunning:t,preventExitTransition:r,toastRef:i,eventHandlers:u}}function n3(e){let{delay:t,isRunning:n,closeToast:r,type:o="default",hide:i,className:l,style:s,controlledProgress:a,progress:c,rtl:h,isIn:m,theme:p}=e;const w=i||a&&c===0,v={...s,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused"};a&&(v.transform=`scaleX(${c})`);const g=Ft("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${p}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":h}),P=Ae(l)?l({rtl:h,type:o,defaultClassName:g}):Ft(g,l),f={[a&&c>=1?"onTransitionEnd":"onAnimationEnd"]:a&&c<1?null:()=>{m&&r()}};return U.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":w},U.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${p} Toastify__progress-bar--${o}`}),U.createElement("div",{role:"progressbar","aria-hidden":w?"true":"false","aria-label":"notification timer",className:P,style:v,...f}))}let r3=1;const l1=()=>""+r3++;function o3(e){return e&&(on(e.toastId)||Dr(e.toastId))?e.toastId:l1()}function hr(e,t){return i1(e,t),t.toastId}function oi(e,t){return{...t,type:t&&t.type||e,toastId:o3(t)}}function ho(e){return(t,n)=>hr(t,oi(e,n))}function Q(e,t){return hr(e,oi("default",t))}Q.loading=(e,t)=>hr(e,oi("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),Q.promise=function(e,t,n){let r,{pending:o,error:i,success:l}=t;o&&(r=on(o)?Q.loading(o,n):Q.loading(o.render,{...n,...o}));const s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},a=(h,m,p)=>{if(m==null)return void Q.dismiss(r);const w={type:h,...s,...n,data:p},v=on(m)?{render:m}:m;return r?Q.update(r,{...w,...v}):Q(v.render,{...w,...v}),p},c=Ae(e)?e():e;return c.then(h=>a("success",l,h)).catch(h=>a("error",i,h)),c},Q.success=ho("success"),Q.info=ho("info"),Q.error=ho("error"),Q.warning=ho("warning"),Q.warn=Q.warning,Q.dark=(e,t)=>hr(e,oi("default",{theme:"dark",...t})),Q.dismiss=function(e){(function(t){var n;if(r1()){if(t==null||on(n=t)||Dr(n))ke.forEach(r=>{r.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){const r=ke.get(t.containerId);r?r.removeToast(t.id):ke.forEach(o=>{o.removeToast(t.id)})}}else Ar=Ar.filter(r=>t!=null&&r.options.toastId!==t)})(e)},Q.clearWaitingQueue=function(e){e===void 0&&(e={}),ke.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},Q.isActive=o1,Q.update=function(e,t){t===void 0&&(t={});const n=((r,o)=>{var i;let{containerId:l}=o;return(i=ke.get(l||1))==null?void 0:i.toasts.get(r)})(e,t);if(n){const{props:r,content:o}=n,i={delay:100,...r,...t,toastId:t.toastId||e,updateId:l1()};i.toastId!==e&&(i.staleId=e);const l=i.render||o;delete i.render,hr(l,i)}},Q.done=e=>{Q.update(e,{progress:1})},Q.onChange=function(e){return Ls.add(e),()=>{Ls.delete(e)}},Q.play=e=>ac(!0,e),Q.pause=e=>ac(!1,e);const i3=typeof window<"u"?z.useLayoutEffect:z.useEffect,go=e=>{let{theme:t,type:n,isLoading:r,...o}=e;return U.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...o})},kl={info:function(e){return U.createElement(go,{...e},U.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return U.createElement(go,{...e},U.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return U.createElement(go,{...e},U.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return U.createElement(go,{...e},U.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return U.createElement("div",{className:"Toastify__spinner"})}},l3=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:o,playToast:i}=t3(e),{closeButton:l,children:s,autoClose:a,onClick:c,type:h,hideProgressBar:m,closeToast:p,transition:w,position:v,className:g,style:P,bodyClassName:f,bodyStyle:u,progressClassName:d,progressStyle:y,updateId:E,role:N,progress:S,rtl:C,toastId:j,deleteToast:R,isIn:G,isLoading:Pe,closeOnClick:Ye,theme:et}=e,Lt=Ft("Toastify__toast",`Toastify__toast-theme--${et}`,`Toastify__toast--${h}`,{"Toastify__toast--rtl":C},{"Toastify__toast--close-on-click":Ye}),Tt=Ae(g)?g({rtl:C,position:v,type:h,defaultClassName:Lt}):Ft(Lt,g),Me=function(A){let{theme:V,type:fe,isLoading:oe,icon:Le}=A,Se=null;const ut={theme:V,type:fe};return Le===!1||(Ae(Le)?Se=Le({...ut,isLoading:oe}):z.isValidElement(Le)?Se=z.cloneElement(Le,ut):oe?Se=kl.spinner():(s1=>s1 in kl)(fe)&&(Se=kl[fe](ut))),Se}(e),L=!!S||!a,O={closeToast:p,type:h,theme:et};let $=null;return l===!1||($=Ae(l)?l(O):z.isValidElement(l)?z.cloneElement(l,O):function(A){let{closeToast:V,theme:fe,ariaLabel:oe="close"}=A;return U.createElement("button",{className:`Toastify__close-button Toastify__close-button--${fe}`,type:"button",onClick:Le=>{Le.stopPropagation(),V(Le)},"aria-label":oe},U.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},U.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(O)),U.createElement(w,{isIn:G,done:R,position:v,preventExitTransition:n,nodeRef:r,playToast:i},U.createElement("div",{id:j,onClick:c,"data-in":G,className:Tt,...o,style:P,ref:r},U.createElement("div",{...G&&{role:N},className:Ae(f)?f({type:h}):Ft("Toastify__toast-body",f),style:u},Me!=null&&U.createElement("div",{className:Ft("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!Pe})},Me),U.createElement("div",null,s)),$,U.createElement(n3,{...E&&!L?{key:`pb-${E}`}:{},rtl:C,theme:et,delay:a,isRunning:t,isIn:G,closeToast:p,hide:m,type:h,style:y,className:d,controlledProgress:L,progress:S||0})))},Ki=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},s3=Xi(Ki("bounce",!0));Xi(Ki("slide",!0));Xi(Ki("zoom"));Xi(Ki("flip"));const a3={position:"top-right",transition:s3,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function u3(e){let t={...a3,...e};const n=e.stacked,[r,o]=z.useState(!0),i=z.useRef(null),{getToastToRender:l,isToastActive:s,count:a}=e3(t),{className:c,style:h,rtl:m,containerId:p}=t;function w(g){const P=Ft("Toastify__toast-container",`Toastify__toast-container--${g}`,{"Toastify__toast-container--rtl":m});return Ae(c)?c({position:g,rtl:m,defaultClassName:P}):Ft(P,jo(c))}function v(){n&&(o(!0),Q.play())}return i3(()=>{if(n){var g;const P=i.current.querySelectorAll('[data-in="true"]'),f=12,u=(g=t.position)==null?void 0:g.includes("top");let d=0,y=0;Array.from(P).reverse().forEach((E,N)=>{const S=E;S.classList.add("Toastify__toast--stacked"),N>0&&(S.dataset.collapsed=`${r}`),S.dataset.pos||(S.dataset.pos=u?"top":"bot");const C=d*(r?.2:1)+(r?0:f*N);S.style.setProperty("--y",`${u?C:-1*C}px`),S.style.setProperty("--g",`${f}`),S.style.setProperty("--s",""+(1-(r?y:0))),d+=S.offsetHeight,y+=.025})}},[r,a,n]),U.createElement("div",{ref:i,className:"Toastify",id:p,onMouseEnter:()=>{n&&(o(!1),Q.pause())},onMouseLeave:v},l((g,P)=>{const f=P.length?{...h}:{...h,pointerEvents:"none"};return U.createElement("div",{className:w(g),style:f,key:`container-${g}`},P.map(u=>{let{content:d,props:y}=u;return U.createElement(l3,{...y,stacked:n,collapseAll:v,isIn:s(y.toastId,y.containerId),style:y.style,key:`toast-${y.key}`},d)}))}))}const c3=()=>{const[e,t]=z.useState(!1),n=z.useRef(null),[r,o]=z.useState({}),i=z.useRef(null),[l,s]=z.useState({user_email:!1,message:!1}),[a,c]=z.useState({user_email:"",user_name:"",message:""});z.useEffect(()=>{(l.user_email||l.message)&&m()},[a]);const h=v=>{const{name:g,value:P}=v.target;s(f=>({...f,[g]:!0})),c({...a,[g]:P}),m()},m=()=>{let v=!0;const g={email:"",message:"",captcha:""};return!a.user_email&&l.user_email?(g.email="Email is required",v=!1):!/\S+@\S+\.\S+/.test(a.user_email)&&l.user_email&&(g.email="Email is not valid",v=!1),a.message||(g.message="Message is required",v=!1),e||(g.captcha="Captcha is required",v=!1),o(g),v},p=v=>{v.preventDefault(),s({user_email:!0,message:!0}),m()?n.current&&(Mm.sendForm("service_7wez88i","template_w2tdb3t",n.current,"_TAyPYK5RnC_Of3u3").then(g=>{console.log("SUCCESS!",g.text)},g=>{console.log("FAILED...",g)}),Q.success("Mail sent"),s({user_email:!1,message:!1}),c({user_email:"",user_name:"",message:""}),o({}),t(!1),n.current.reset(),i.current&&i.current.reset()):s({user_email:!0,message:!0})};function w(){t(!0),r.captcha=""}return x.jsxs(x.Fragment,{children:[x.jsx(Qi,{direction:"left",triggerOnce:!0,children:x.jsxs(Si,{left:!0,id:"Contact",children:[x.jsxs("form",{ref:n,onSubmit:p,className:" text-text-color flex flex-col justify-center items-center gap-2",children:[x.jsx(Fa,{text:"Contact me"}),x.jsx("div",{className:"w-56 flex justify-start",children:x.jsx("label",{className:"",children:"Name"})}),x.jsx("input",{type:"text",name:"user_name",onChange:h,className:"p-1 bg-primary-color border-2 border-secondary-color focus:outline-none focus:scale-110 rounded-lg w-56"}),x.jsxs("div",{className:"w-56 flex justify-between",children:[x.jsx("label",{className:"",children:"Email"}),x.jsx("div",{className:"bg-clip-text font-bold text-transparent bg-gradient-to-r from-red-500 to-pink-700",children:r.email})]}),x.jsx("div",{className:`w-56 ${l.user_email&&(!a.user_email||!/\S+@\S+\.\S+/.test(a.user_email))?"bg-gradient-to-r from-red-500 to-pink-700":"bg-secondary-color"} p-0.5 rounded-lg focus-within:scale-105  `,children:x.jsx("input",{type:"email",name:"user_email",onChange:h,placeholder:"example@example.com",className:"p-1 bg-primary-color border-2 focus:outline-none border-transparent  rounded-lg w-full h-full"})}),x.jsxs("div",{className:"w-56 flex justify-between",children:[x.jsx("label",{className:"",children:"Message"}),l.message&&!a.message?x.jsx("div",{className:"bg-clip-text font-bold text-transparent bg-gradient-to-r from-red-500 to-pink-700",children:r.message}):null]}),x.jsx("div",{className:`w-56   ${l.message&&!a.message?"bg-gradient-to-r from-red-500 to-pink-700":"bg-secondary-color"} pt-2 px-2 rounded-lg focus-within:scale-105 `,children:x.jsx("textarea",{name:"message",onChange:h,className:"p-1 bg-primary-color border-2 focus:outline-none border-transparent rounded-lg w-full h-full"})}),x.jsx("div",{className:" w-full text-end bg-clip-text font-bold text-transparent bg-gradient-to-r from-red-500 to-pink-700",children:r.captcha}),x.jsx("div",{className:`  ${r.captcha?"bg-gradient-to-r from-red-500 to-pink-700":"bg-secondary-color"} p-1 pt-1.5 pl-1.5 rounded-lg focus-within:scale-105`,children:x.jsx(qm,{ref:i,sitekey:"6LfD85opAAAAAM9edr0f03lTH0pYwHfR7TXNNVqc",onChange:w,onExpired:()=>t(!1),theme:"dark"})}),x.jsx("input",{type:"submit",value:"Send",className:" font-bold bg-primary-color border-2 border-secondary-color hover:cursor-pointer hover:bg-gradient-to-r from-lime-300 to-green-400 hover:text-primary-color py-2 rounded-lg px-4 active:scale-110"})]}),x.jsx("div",{className:"h-full flex justify-start items-start ",children:x.jsx("h1",{})})]})}),x.jsx(u3,{theme:"dark"})]})};function tr({text:e}){return x.jsxs("li",{className:"flex gap-4 items-center bg-primary-color rounded-xl p-3 max-w-3xl",children:[x.jsx("div",{className:"min-w-6  lg:w-5  h-1  bg-secondary-color rounded-lg"}),x.jsx("p",{className:"text-text-color",children:e})]})}function f3(){return x.jsx(Qi,{triggerOnce:!0,direction:"right",children:x.jsxs(Si,{left:!0,id:"work-experience",children:[x.jsx(Fa,{text:"Work Experience"}),x.jsxs("div",{className:"flex flex-col gap-2",children:[x.jsx("h2",{className:"text-2xl  bg-gradient-to-r to-lime-300 from-green-400 text-primary-color font-bold p-2 rounded-xl",children:"Air Spiralo Poland - Information Communication Technology Support"}),x.jsx("h1",{className:"text-3xl text-center text-text-color"}),x.jsx("h1",{className:"text-3xl text-center text-text-color",children:"My responsibilities"}),x.jsxs("ul",{className:"gap-4 flex flex-col",children:[x.jsx(tr,{text:`Developing apps using Power Apps and Power\r
                                Automate (ex. User request, tracking signed documents, tracking scrap)`}),x.jsx(tr,{text:`Creating reports in\r
                            SSRS using SQL data, creating new and changing existing stored procedures`}),x.jsx(tr,{text:`Doing reasearch about new topics and\r
                            implementing them (ex. moving intranet to\r
                            Sharepoint)`}),x.jsx(tr,{text:"Managing PRTG Hosted Monitor instance"}),x.jsx(tr,{text:"Creating manuals for users so they can use software and hardware"})]})]})]})})}function d3(){return x.jsxs("div",{className:"w-full min-h-screen bg-primary-color font-default flex flex-col gap-24",children:[x.jsx($2,{}),x.jsx(mm,{}),x.jsx(Rm,{}),x.jsx(f3,{}),x.jsx(c3,{})]})}El.createRoot(document.getElementById("root")).render(x.jsx(U.StrictMode,{children:x.jsx(d3,{})}));
