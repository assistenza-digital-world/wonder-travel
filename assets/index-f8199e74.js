const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PrivacyPage-BcZ3x0D4.js","assets/LegalLayout-UzqGeK4f.js","assets/CookiePage-d2FG6H3E.js"])))=>i.map(i=>d[i]);
function By(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Uy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hp={exports:{}},zo={},pp={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var es=Symbol.for("react.element"),$y=Symbol.for("react.portal"),Wy=Symbol.for("react.fragment"),Hy=Symbol.for("react.strict_mode"),Ky=Symbol.for("react.profiler"),Gy=Symbol.for("react.provider"),qy=Symbol.for("react.context"),Yy=Symbol.for("react.forward_ref"),Qy=Symbol.for("react.suspense"),Xy=Symbol.for("react.memo"),Zy=Symbol.for("react.lazy"),fd=Symbol.iterator;function Jy(e){return e===null||typeof e!="object"?null:(e=fd&&e[fd]||e["@@iterator"],typeof e=="function"?e:null)}var mp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gp=Object.assign,vp={};function Wr(e,t,n){this.props=e,this.context=t,this.refs=vp,this.updater=n||mp}Wr.prototype.isReactComponent={};Wr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Wr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function yp(){}yp.prototype=Wr.prototype;function wu(e,t,n){this.props=e,this.context=t,this.refs=vp,this.updater=n||mp}var Su=wu.prototype=new yp;Su.constructor=wu;gp(Su,Wr.prototype);Su.isPureReactComponent=!0;var hd=Array.isArray,xp=Object.prototype.hasOwnProperty,ku={current:null},wp={key:!0,ref:!0,__self:!0,__source:!0};function Sp(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)xp.call(t,r)&&!wp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:es,type:e,key:s,ref:o,props:i,_owner:ku.current}}function e0(e,t){return{$$typeof:es,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Pu(e){return typeof e=="object"&&e!==null&&e.$$typeof===es}function t0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var pd=/\/+/g;function ga(e,t){return typeof e=="object"&&e!==null&&e.key!=null?t0(""+e.key):t.toString(36)}function zs(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case es:case $y:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+ga(o,0):r,hd(i)?(n="",e!=null&&(n=e.replace(pd,"$&/")+"/"),zs(i,t,n,"",function(u){return u})):i!=null&&(Pu(i)&&(i=e0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(pd,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",hd(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+ga(s,a);o+=zs(s,t,n,l,i)}else if(l=Jy(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+ga(s,a++),o+=zs(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ps(e,t,n){if(e==null)return e;var r=[],i=0;return zs(e,r,"","",function(s){return t.call(n,s,i++)}),r}function n0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Qe={current:null},Fs={transition:null},r0={ReactCurrentDispatcher:Qe,ReactCurrentBatchConfig:Fs,ReactCurrentOwner:ku};function kp(){throw Error("act(...) is not supported in production builds of React.")}K.Children={map:ps,forEach:function(e,t,n){ps(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ps(e,function(){t++}),t},toArray:function(e){return ps(e,function(t){return t})||[]},only:function(e){if(!Pu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=Wr;K.Fragment=Wy;K.Profiler=Ky;K.PureComponent=wu;K.StrictMode=Hy;K.Suspense=Qy;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r0;K.act=kp;K.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=gp({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=ku.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)xp.call(t,l)&&!wp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:es,type:e.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(e){return e={$$typeof:qy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Gy,_context:e},e.Consumer=e};K.createElement=Sp;K.createFactory=function(e){var t=Sp.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:Yy,render:e}};K.isValidElement=Pu;K.lazy=function(e){return{$$typeof:Zy,_payload:{_status:-1,_result:e},_init:n0}};K.memo=function(e,t){return{$$typeof:Xy,type:e,compare:t===void 0?null:t}};K.startTransition=function(e){var t=Fs.transition;Fs.transition={};try{e()}finally{Fs.transition=t}};K.unstable_act=kp;K.useCallback=function(e,t){return Qe.current.useCallback(e,t)};K.useContext=function(e){return Qe.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return Qe.current.useDeferredValue(e)};K.useEffect=function(e,t){return Qe.current.useEffect(e,t)};K.useId=function(){return Qe.current.useId()};K.useImperativeHandle=function(e,t,n){return Qe.current.useImperativeHandle(e,t,n)};K.useInsertionEffect=function(e,t){return Qe.current.useInsertionEffect(e,t)};K.useLayoutEffect=function(e,t){return Qe.current.useLayoutEffect(e,t)};K.useMemo=function(e,t){return Qe.current.useMemo(e,t)};K.useReducer=function(e,t,n){return Qe.current.useReducer(e,t,n)};K.useRef=function(e){return Qe.current.useRef(e)};K.useState=function(e){return Qe.current.useState(e)};K.useSyncExternalStore=function(e,t,n){return Qe.current.useSyncExternalStore(e,t,n)};K.useTransition=function(){return Qe.current.useTransition()};K.version="18.3.1";pp.exports=K;var E=pp.exports;const Me=Uy(E),i0=By({__proto__:null,default:Me},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0=E,o0=Symbol.for("react.element"),a0=Symbol.for("react.fragment"),l0=Object.prototype.hasOwnProperty,u0=s0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c0={key:!0,ref:!0,__self:!0,__source:!0};function Pp(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)l0.call(t,r)&&!c0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:o0,type:e,key:s,ref:o,props:i,_owner:u0.current}}zo.Fragment=a0;zo.jsx=Pp;zo.jsxs=Pp;hp.exports=zo;var d=hp.exports,ol={},Tp={exports:{}},ct={},Ep={exports:{}},Cp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,I){var U=L.length;L.push(I);e:for(;0<U;){var Z=U-1>>>1,xe=L[Z];if(0<i(xe,I))L[Z]=I,L[U]=xe,U=Z;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var I=L[0],U=L.pop();if(U!==I){L[0]=U;e:for(var Z=0,xe=L.length,Vn=xe>>>1;Z<Vn;){var bt=2*(Z+1)-1,Rn=L[bt],_t=bt+1,Dn=L[_t];if(0>i(Rn,U))_t<xe&&0>i(Dn,Rn)?(L[Z]=Dn,L[_t]=U,Z=_t):(L[Z]=Rn,L[bt]=U,Z=bt);else if(_t<xe&&0>i(Dn,U))L[Z]=Dn,L[_t]=U,Z=_t;else break e}}return I}function i(L,I){var U=L.sortIndex-I.sortIndex;return U!==0?U:L.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,g=!1,w=!1,S=!1,C=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=L)r(u),I.sortIndex=I.expirationTime,t(l,I);else break;I=n(u)}}function P(L){if(S=!1,v(L),!w)if(n(l)!==null)w=!0,De(T);else{var I=n(u);I!==null&&Q(P,I.startTime-L)}}function T(L,I){w=!1,S&&(S=!1,m(j),j=-1),g=!0;var U=h;try{for(v(I),f=n(l);f!==null&&(!(f.expirationTime>I)||L&&!le());){var Z=f.callback;if(typeof Z=="function"){f.callback=null,h=f.priorityLevel;var xe=Z(f.expirationTime<=I);I=e.unstable_now(),typeof xe=="function"?f.callback=xe:f===n(l)&&r(l),v(I)}else r(l);f=n(l)}if(f!==null)var Vn=!0;else{var bt=n(u);bt!==null&&Q(P,bt.startTime-I),Vn=!1}return Vn}finally{f=null,h=U,g=!1}}var A=!1,R=null,j=-1,$=5,F=-1;function le(){return!(e.unstable_now()-F<$)}function H(){if(R!==null){var L=e.unstable_now();F=L;var I=!0;try{I=R(!0,L)}finally{I?W():(A=!1,R=null)}}else A=!1}var W;if(typeof p=="function")W=function(){p(H)};else if(typeof MessageChannel!="undefined"){var te=new MessageChannel,ne=te.port2;te.port1.onmessage=H,W=function(){ne.postMessage(null)}}else W=function(){C(H,0)};function De(L){R=L,A||(A=!0,W())}function Q(L,I){j=C(function(){L(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,De(T))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(L){switch(h){case 1:case 2:case 3:var I=3;break;default:I=h}var U=h;h=I;try{return L()}finally{h=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,I){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var U=h;h=L;try{return I()}finally{h=U}},e.unstable_scheduleCallback=function(L,I,U){var Z=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?Z+U:Z):U=Z,L){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=U+xe,L={id:c++,callback:I,priorityLevel:L,startTime:U,expirationTime:xe,sortIndex:-1},U>Z?(L.sortIndex=U,t(u,L),n(l)===null&&L===n(u)&&(S?(m(j),j=-1):S=!0,Q(P,U-Z))):(L.sortIndex=xe,t(l,L),w||g||(w=!0,De(T))),L},e.unstable_shouldYield=le,e.unstable_wrapCallback=function(L){var I=h;return function(){var U=h;h=I;try{return L.apply(this,arguments)}finally{h=U}}}})(Cp);Ep.exports=Cp;var d0=Ep.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f0=E,lt=d0;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ap=new Set,Li={};function nr(e,t){Dr(e,t),Dr(e+"Capture",t)}function Dr(e,t){for(Li[e]=t,e=0;e<t.length;e++)Ap.add(t[e])}var en=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),al=Object.prototype.hasOwnProperty,h0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,md={},gd={};function p0(e){return al.call(gd,e)?!0:al.call(md,e)?!1:h0.test(e)?gd[e]=!0:(md[e]=!0,!1)}function m0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function g0(e,t,n,r){if(t===null||typeof t=="undefined"||m0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Xe(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Oe[e]=new Xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Oe[t]=new Xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Oe[e]=new Xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Oe[e]=new Xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Oe[e]=new Xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Oe[e]=new Xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Oe[e]=new Xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Oe[e]=new Xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Oe[e]=new Xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Tu=/[\-:]([a-z])/g;function Eu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Tu,Eu);Oe[t]=new Xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Tu,Eu);Oe[t]=new Xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Tu,Eu);Oe[t]=new Xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Oe[e]=new Xe(e,1,!1,e.toLowerCase(),null,!1,!1)});Oe.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Oe[e]=new Xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Cu(e,t,n,r){var i=Oe.hasOwnProperty(t)?Oe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(g0(t,n,i,r)&&(n=null),r||i===null?p0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var sn=f0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ms=Symbol.for("react.element"),ur=Symbol.for("react.portal"),cr=Symbol.for("react.fragment"),Au=Symbol.for("react.strict_mode"),ll=Symbol.for("react.profiler"),jp=Symbol.for("react.provider"),Np=Symbol.for("react.context"),ju=Symbol.for("react.forward_ref"),ul=Symbol.for("react.suspense"),cl=Symbol.for("react.suspense_list"),Nu=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),Vp=Symbol.for("react.offscreen"),vd=Symbol.iterator;function Zr(e){return e===null||typeof e!="object"?null:(e=vd&&e[vd]||e["@@iterator"],typeof e=="function"?e:null)}var he=Object.assign,va;function ci(e){if(va===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);va=t&&t[1]||""}return`
`+va+e}var ya=!1;function xa(e,t){if(!e||ya)return"";ya=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{ya=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ci(e):""}function v0(e){switch(e.tag){case 5:return ci(e.type);case 16:return ci("Lazy");case 13:return ci("Suspense");case 19:return ci("SuspenseList");case 0:case 2:case 15:return e=xa(e.type,!1),e;case 11:return e=xa(e.type.render,!1),e;case 1:return e=xa(e.type,!0),e;default:return""}}function dl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case cr:return"Fragment";case ur:return"Portal";case ll:return"Profiler";case Au:return"StrictMode";case ul:return"Suspense";case cl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Np:return(e.displayName||"Context")+".Consumer";case jp:return(e._context.displayName||"Context")+".Provider";case ju:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Nu:return t=e.displayName||null,t!==null?t:dl(e.type)||"Memo";case un:t=e._payload,e=e._init;try{return dl(e(t))}catch{}}return null}function y0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dl(t);case 8:return t===Au?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function x0(e){var t=Rp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gs(e){e._valueTracker||(e._valueTracker=x0(e))}function Dp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Rp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function to(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function fl(e,t){var n=t.checked;return he({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function yd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Pn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Lp(e,t){t=t.checked,t!=null&&Cu(e,"checked",t,!1)}function hl(e,t){Lp(e,t);var n=Pn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?pl(e,t.type,n):t.hasOwnProperty("defaultValue")&&pl(e,t.type,Pn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function pl(e,t,n){(t!=="number"||to(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var di=Array.isArray;function Cr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Pn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ml(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return he({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(di(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Pn(n)}}function bp(e,t){var n=Pn(t.value),r=Pn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Sd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function _p(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?_p(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vs,Mp=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vs=vs||document.createElement("div"),vs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function bi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var vi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},w0=["Webkit","ms","Moz","O"];Object.keys(vi).forEach(function(e){w0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),vi[t]=vi[e]})});function zp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||vi.hasOwnProperty(e)&&vi[e]?(""+t).trim():t+"px"}function Fp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=zp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var S0=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vl(e,t){if(t){if(S0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function yl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xl=null;function Vu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wl=null,Ar=null,jr=null;function kd(e){if(e=rs(e)){if(typeof wl!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Uo(t),wl(e.stateNode,e.type,t))}}function Op(e){Ar?jr?jr.push(e):jr=[e]:Ar=e}function Ip(){if(Ar){var e=Ar,t=jr;if(jr=Ar=null,kd(e),t)for(e=0;e<t.length;e++)kd(t[e])}}function Bp(e,t){return e(t)}function Up(){}var wa=!1;function $p(e,t,n){if(wa)return e(t,n);wa=!0;try{return Bp(e,t,n)}finally{wa=!1,(Ar!==null||jr!==null)&&(Up(),Ip())}}function _i(e,t){var n=e.stateNode;if(n===null)return null;var r=Uo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Sl=!1;if(en)try{var Jr={};Object.defineProperty(Jr,"passive",{get:function(){Sl=!0}}),window.addEventListener("test",Jr,Jr),window.removeEventListener("test",Jr,Jr)}catch{Sl=!1}function k0(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var yi=!1,no=null,ro=!1,kl=null,P0={onError:function(e){yi=!0,no=e}};function T0(e,t,n,r,i,s,o,a,l){yi=!1,no=null,k0.apply(P0,arguments)}function E0(e,t,n,r,i,s,o,a,l){if(T0.apply(this,arguments),yi){if(yi){var u=no;yi=!1,no=null}else throw Error(N(198));ro||(ro=!0,kl=u)}}function rr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Wp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Pd(e){if(rr(e)!==e)throw Error(N(188))}function C0(e){var t=e.alternate;if(!t){if(t=rr(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Pd(i),e;if(s===r)return Pd(i),t;s=s.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function Hp(e){return e=C0(e),e!==null?Kp(e):null}function Kp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Kp(e);if(t!==null)return t;e=e.sibling}return null}var Gp=lt.unstable_scheduleCallback,Td=lt.unstable_cancelCallback,A0=lt.unstable_shouldYield,j0=lt.unstable_requestPaint,ye=lt.unstable_now,N0=lt.unstable_getCurrentPriorityLevel,Ru=lt.unstable_ImmediatePriority,qp=lt.unstable_UserBlockingPriority,io=lt.unstable_NormalPriority,V0=lt.unstable_LowPriority,Yp=lt.unstable_IdlePriority,Fo=null,Ut=null;function R0(e){if(Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(Fo,e,void 0,(e.current.flags&128)===128)}catch{}}var Vt=Math.clz32?Math.clz32:b0,D0=Math.log,L0=Math.LN2;function b0(e){return e>>>=0,e===0?32:31-(D0(e)/L0|0)|0}var ys=64,xs=4194304;function fi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function so(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=fi(a):(s&=o,s!==0&&(r=fi(s)))}else o=n&~i,o!==0?r=fi(o):s!==0&&(r=fi(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Vt(t),i=1<<n,r|=e[n],t&=~i;return r}function _0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function M0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Vt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=_0(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Pl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qp(){var e=ys;return ys<<=1,!(ys&4194240)&&(ys=64),e}function Sa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ts(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Vt(t),e[t]=n}function z0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Vt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Du(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Vt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var X=0;function Xp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zp,Lu,Jp,em,tm,Tl=!1,ws=[],mn=null,gn=null,vn=null,Mi=new Map,zi=new Map,dn=[],F0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ed(e,t){switch(e){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":Mi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zi.delete(t.pointerId)}}function ei(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=rs(t),t!==null&&Lu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function O0(e,t,n,r,i){switch(t){case"focusin":return mn=ei(mn,e,t,n,r,i),!0;case"dragenter":return gn=ei(gn,e,t,n,r,i),!0;case"mouseover":return vn=ei(vn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Mi.set(s,ei(Mi.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,zi.set(s,ei(zi.get(s)||null,e,t,n,r,i)),!0}return!1}function nm(e){var t=In(e.target);if(t!==null){var n=rr(t);if(n!==null){if(t=n.tag,t===13){if(t=Wp(n),t!==null){e.blockedOn=t,tm(e.priority,function(){Jp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Os(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=El(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xl=r,n.target.dispatchEvent(r),xl=null}else return t=rs(n),t!==null&&Lu(t),e.blockedOn=n,!1;t.shift()}return!0}function Cd(e,t,n){Os(e)&&n.delete(t)}function I0(){Tl=!1,mn!==null&&Os(mn)&&(mn=null),gn!==null&&Os(gn)&&(gn=null),vn!==null&&Os(vn)&&(vn=null),Mi.forEach(Cd),zi.forEach(Cd)}function ti(e,t){e.blockedOn===t&&(e.blockedOn=null,Tl||(Tl=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,I0)))}function Fi(e){function t(i){return ti(i,e)}if(0<ws.length){ti(ws[0],e);for(var n=1;n<ws.length;n++){var r=ws[n];r.blockedOn===e&&(r.blockedOn=null)}}for(mn!==null&&ti(mn,e),gn!==null&&ti(gn,e),vn!==null&&ti(vn,e),Mi.forEach(t),zi.forEach(t),n=0;n<dn.length;n++)r=dn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<dn.length&&(n=dn[0],n.blockedOn===null);)nm(n),n.blockedOn===null&&dn.shift()}var Nr=sn.ReactCurrentBatchConfig,oo=!0;function B0(e,t,n,r){var i=X,s=Nr.transition;Nr.transition=null;try{X=1,bu(e,t,n,r)}finally{X=i,Nr.transition=s}}function U0(e,t,n,r){var i=X,s=Nr.transition;Nr.transition=null;try{X=4,bu(e,t,n,r)}finally{X=i,Nr.transition=s}}function bu(e,t,n,r){if(oo){var i=El(e,t,n,r);if(i===null)Ra(e,t,r,ao,n),Ed(e,r);else if(O0(i,e,t,n,r))r.stopPropagation();else if(Ed(e,r),t&4&&-1<F0.indexOf(e)){for(;i!==null;){var s=rs(i);if(s!==null&&Zp(s),s=El(e,t,n,r),s===null&&Ra(e,t,r,ao,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ra(e,t,r,null,n)}}var ao=null;function El(e,t,n,r){if(ao=null,e=Vu(r),e=In(e),e!==null)if(t=rr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Wp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ao=e,null}function rm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(N0()){case Ru:return 1;case qp:return 4;case io:case V0:return 16;case Yp:return 536870912;default:return 16}default:return 16}}var hn=null,_u=null,Is=null;function im(){if(Is)return Is;var e,t=_u,n=t.length,r,i="value"in hn?hn.value:hn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Is=i.slice(e,1<r?1-r:void 0)}function Bs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ss(){return!0}function Ad(){return!1}function dt(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ss:Ad,this.isPropagationStopped=Ad,this}return he(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ss)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ss)},persist:function(){},isPersistent:Ss}),t}var Hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mu=dt(Hr),ns=he({},Hr,{view:0,detail:0}),$0=dt(ns),ka,Pa,ni,Oo=he({},ns,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ni&&(ni&&e.type==="mousemove"?(ka=e.screenX-ni.screenX,Pa=e.screenY-ni.screenY):Pa=ka=0,ni=e),ka)},movementY:function(e){return"movementY"in e?e.movementY:Pa}}),jd=dt(Oo),W0=he({},Oo,{dataTransfer:0}),H0=dt(W0),K0=he({},ns,{relatedTarget:0}),Ta=dt(K0),G0=he({},Hr,{animationName:0,elapsedTime:0,pseudoElement:0}),q0=dt(G0),Y0=he({},Hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Q0=dt(Y0),X0=he({},Hr,{data:0}),Nd=dt(X0),Z0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ex={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ex[e])?!!t[e]:!1}function zu(){return tx}var nx=he({},ns,{key:function(e){if(e.key){var t=Z0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?J0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zu,charCode:function(e){return e.type==="keypress"?Bs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rx=dt(nx),ix=he({},Oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vd=dt(ix),sx=he({},ns,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zu}),ox=dt(sx),ax=he({},Hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),lx=dt(ax),ux=he({},Oo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cx=dt(ux),dx=[9,13,27,32],Fu=en&&"CompositionEvent"in window,xi=null;en&&"documentMode"in document&&(xi=document.documentMode);var fx=en&&"TextEvent"in window&&!xi,sm=en&&(!Fu||xi&&8<xi&&11>=xi),Rd=" ",Dd=!1;function om(e,t){switch(e){case"keyup":return dx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function am(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dr=!1;function hx(e,t){switch(e){case"compositionend":return am(t);case"keypress":return t.which!==32?null:(Dd=!0,Rd);case"textInput":return e=t.data,e===Rd&&Dd?null:e;default:return null}}function px(e,t){if(dr)return e==="compositionend"||!Fu&&om(e,t)?(e=im(),Is=_u=hn=null,dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return sm&&t.locale!=="ko"?null:t.data;default:return null}}var mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ld(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mx[e.type]:t==="textarea"}function lm(e,t,n,r){Op(r),t=lo(t,"onChange"),0<t.length&&(n=new Mu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var wi=null,Oi=null;function gx(e){xm(e,0)}function Io(e){var t=pr(e);if(Dp(t))return e}function vx(e,t){if(e==="change")return t}var um=!1;if(en){var Ea;if(en){var Ca="oninput"in document;if(!Ca){var bd=document.createElement("div");bd.setAttribute("oninput","return;"),Ca=typeof bd.oninput=="function"}Ea=Ca}else Ea=!1;um=Ea&&(!document.documentMode||9<document.documentMode)}function _d(){wi&&(wi.detachEvent("onpropertychange",cm),Oi=wi=null)}function cm(e){if(e.propertyName==="value"&&Io(Oi)){var t=[];lm(t,Oi,e,Vu(e)),$p(gx,t)}}function yx(e,t,n){e==="focusin"?(_d(),wi=t,Oi=n,wi.attachEvent("onpropertychange",cm)):e==="focusout"&&_d()}function xx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Io(Oi)}function wx(e,t){if(e==="click")return Io(t)}function Sx(e,t){if(e==="input"||e==="change")return Io(t)}function kx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dt=typeof Object.is=="function"?Object.is:kx;function Ii(e,t){if(Dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!al.call(t,i)||!Dt(e[i],t[i]))return!1}return!0}function Md(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zd(e,t){var n=Md(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Md(n)}}function dm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?dm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fm(){for(var e=window,t=to();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=to(e.document)}return t}function Ou(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Px(e){var t=fm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dm(n.ownerDocument.documentElement,n)){if(r!==null&&Ou(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=zd(n,s);var o=zd(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tx=en&&"documentMode"in document&&11>=document.documentMode,fr=null,Cl=null,Si=null,Al=!1;function Fd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Al||fr==null||fr!==to(r)||(r=fr,"selectionStart"in r&&Ou(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Si&&Ii(Si,r)||(Si=r,r=lo(Cl,"onSelect"),0<r.length&&(t=new Mu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=fr)))}function ks(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hr={animationend:ks("Animation","AnimationEnd"),animationiteration:ks("Animation","AnimationIteration"),animationstart:ks("Animation","AnimationStart"),transitionend:ks("Transition","TransitionEnd")},Aa={},hm={};en&&(hm=document.createElement("div").style,"AnimationEvent"in window||(delete hr.animationend.animation,delete hr.animationiteration.animation,delete hr.animationstart.animation),"TransitionEvent"in window||delete hr.transitionend.transition);function Bo(e){if(Aa[e])return Aa[e];if(!hr[e])return e;var t=hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in hm)return Aa[e]=t[n];return e}var pm=Bo("animationend"),mm=Bo("animationiteration"),gm=Bo("animationstart"),vm=Bo("transitionend"),ym=new Map,Od="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cn(e,t){ym.set(e,t),nr(t,[e])}for(var ja=0;ja<Od.length;ja++){var Na=Od[ja],Ex=Na.toLowerCase(),Cx=Na[0].toUpperCase()+Na.slice(1);Cn(Ex,"on"+Cx)}Cn(pm,"onAnimationEnd");Cn(mm,"onAnimationIteration");Cn(gm,"onAnimationStart");Cn("dblclick","onDoubleClick");Cn("focusin","onFocus");Cn("focusout","onBlur");Cn(vm,"onTransitionEnd");Dr("onMouseEnter",["mouseout","mouseover"]);Dr("onMouseLeave",["mouseout","mouseover"]);Dr("onPointerEnter",["pointerout","pointerover"]);Dr("onPointerLeave",["pointerout","pointerover"]);nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ax=new Set("cancel close invalid load scroll toggle".split(" ").concat(hi));function Id(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,E0(r,t,void 0,e),e.currentTarget=null}function xm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Id(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Id(i,a,u),s=l}}}if(ro)throw e=kl,ro=!1,kl=null,e}function re(e,t){var n=t[Dl];n===void 0&&(n=t[Dl]=new Set);var r=e+"__bubble";n.has(r)||(wm(t,e,2,!1),n.add(r))}function Va(e,t,n){var r=0;t&&(r|=4),wm(n,e,r,t)}var Ps="_reactListening"+Math.random().toString(36).slice(2);function Bi(e){if(!e[Ps]){e[Ps]=!0,Ap.forEach(function(n){n!=="selectionchange"&&(Ax.has(n)||Va(n,!1,e),Va(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ps]||(t[Ps]=!0,Va("selectionchange",!1,t))}}function wm(e,t,n,r){switch(rm(t)){case 1:var i=B0;break;case 4:i=U0;break;default:i=bu}n=i.bind(null,t,n,e),i=void 0,!Sl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ra(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=In(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}$p(function(){var u=s,c=Vu(n),f=[];e:{var h=ym.get(e);if(h!==void 0){var g=Mu,w=e;switch(e){case"keypress":if(Bs(n)===0)break e;case"keydown":case"keyup":g=rx;break;case"focusin":w="focus",g=Ta;break;case"focusout":w="blur",g=Ta;break;case"beforeblur":case"afterblur":g=Ta;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=jd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=H0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=ox;break;case pm:case mm:case gm:g=q0;break;case vm:g=lx;break;case"scroll":g=$0;break;case"wheel":g=cx;break;case"copy":case"cut":case"paste":g=Q0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Vd}var S=(t&4)!==0,C=!S&&e==="scroll",m=S?h!==null?h+"Capture":null:h;S=[];for(var p=u,v;p!==null;){v=p;var P=v.stateNode;if(v.tag===5&&P!==null&&(v=P,m!==null&&(P=_i(p,m),P!=null&&S.push(Ui(p,P,v)))),C)break;p=p.return}0<S.length&&(h=new g(h,w,null,n,c),f.push({event:h,listeners:S}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==xl&&(w=n.relatedTarget||n.fromElement)&&(In(w)||w[tn]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=u,w=w?In(w):null,w!==null&&(C=rr(w),w!==C||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=u),g!==w)){if(S=jd,P="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(S=Vd,P="onPointerLeave",m="onPointerEnter",p="pointer"),C=g==null?h:pr(g),v=w==null?h:pr(w),h=new S(P,p+"leave",g,n,c),h.target=C,h.relatedTarget=v,P=null,In(c)===u&&(S=new S(m,p+"enter",w,n,c),S.target=v,S.relatedTarget=C,P=S),C=P,g&&w)t:{for(S=g,m=w,p=0,v=S;v;v=or(v))p++;for(v=0,P=m;P;P=or(P))v++;for(;0<p-v;)S=or(S),p--;for(;0<v-p;)m=or(m),v--;for(;p--;){if(S===m||m!==null&&S===m.alternate)break t;S=or(S),m=or(m)}S=null}else S=null;g!==null&&Bd(f,h,g,S,!1),w!==null&&C!==null&&Bd(f,C,w,S,!0)}}e:{if(h=u?pr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var T=vx;else if(Ld(h))if(um)T=Sx;else{T=xx;var A=yx}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=wx);if(T&&(T=T(e,u))){lm(f,T,n,c);break e}A&&A(e,h,u),e==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&pl(h,"number",h.value)}switch(A=u?pr(u):window,e){case"focusin":(Ld(A)||A.contentEditable==="true")&&(fr=A,Cl=u,Si=null);break;case"focusout":Si=Cl=fr=null;break;case"mousedown":Al=!0;break;case"contextmenu":case"mouseup":case"dragend":Al=!1,Fd(f,n,c);break;case"selectionchange":if(Tx)break;case"keydown":case"keyup":Fd(f,n,c)}var R;if(Fu)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else dr?om(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(sm&&n.locale!=="ko"&&(dr||j!=="onCompositionStart"?j==="onCompositionEnd"&&dr&&(R=im()):(hn=c,_u="value"in hn?hn.value:hn.textContent,dr=!0)),A=lo(u,j),0<A.length&&(j=new Nd(j,e,null,n,c),f.push({event:j,listeners:A}),R?j.data=R:(R=am(n),R!==null&&(j.data=R)))),(R=fx?hx(e,n):px(e,n))&&(u=lo(u,"onBeforeInput"),0<u.length&&(c=new Nd("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=R))}xm(f,t)})}function Ui(e,t,n){return{instance:e,listener:t,currentTarget:n}}function lo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=_i(e,n),s!=null&&r.unshift(Ui(e,s,i)),s=_i(e,t),s!=null&&r.push(Ui(e,s,i))),e=e.return}return r}function or(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bd(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=_i(n,s),l!=null&&o.unshift(Ui(n,l,a))):i||(l=_i(n,s),l!=null&&o.push(Ui(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var jx=/\r\n?/g,Nx=/\u0000|\uFFFD/g;function Ud(e){return(typeof e=="string"?e:""+e).replace(jx,`
`).replace(Nx,"")}function Ts(e,t,n){if(t=Ud(t),Ud(e)!==t&&n)throw Error(N(425))}function uo(){}var jl=null,Nl=null;function Vl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rl=typeof setTimeout=="function"?setTimeout:void 0,Vx=typeof clearTimeout=="function"?clearTimeout:void 0,$d=typeof Promise=="function"?Promise:void 0,Rx=typeof queueMicrotask=="function"?queueMicrotask:typeof $d!="undefined"?function(e){return $d.resolve(null).then(e).catch(Dx)}:Rl;function Dx(e){setTimeout(function(){throw e})}function Da(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Fi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Fi(t)}function yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Kr=Math.random().toString(36).slice(2),It="__reactFiber$"+Kr,$i="__reactProps$"+Kr,tn="__reactContainer$"+Kr,Dl="__reactEvents$"+Kr,Lx="__reactListeners$"+Kr,bx="__reactHandles$"+Kr;function In(e){var t=e[It];if(t)return t;for(var n=e.parentNode;n;){if(t=n[tn]||n[It]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wd(e);e!==null;){if(n=e[It])return n;e=Wd(e)}return t}e=n,n=e.parentNode}return null}function rs(e){return e=e[It]||e[tn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Uo(e){return e[$i]||null}var Ll=[],mr=-1;function An(e){return{current:e}}function se(e){0>mr||(e.current=Ll[mr],Ll[mr]=null,mr--)}function ee(e,t){mr++,Ll[mr]=e.current,e.current=t}var Tn={},Ke=An(Tn),et=An(!1),qn=Tn;function Lr(e,t){var n=e.type.contextTypes;if(!n)return Tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function tt(e){return e=e.childContextTypes,e!=null}function co(){se(et),se(Ke)}function Hd(e,t,n){if(Ke.current!==Tn)throw Error(N(168));ee(Ke,t),ee(et,n)}function Sm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(N(108,y0(e)||"Unknown",i));return he({},n,r)}function fo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tn,qn=Ke.current,ee(Ke,e),ee(et,et.current),!0}function Kd(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=Sm(e,t,qn),r.__reactInternalMemoizedMergedChildContext=e,se(et),se(Ke),ee(Ke,e)):se(et),ee(et,n)}var qt=null,$o=!1,La=!1;function km(e){qt===null?qt=[e]:qt.push(e)}function _x(e){$o=!0,km(e)}function jn(){if(!La&&qt!==null){La=!0;var e=0,t=X;try{var n=qt;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}qt=null,$o=!1}catch(i){throw qt!==null&&(qt=qt.slice(e+1)),Gp(Ru,jn),i}finally{X=t,La=!1}}return null}var gr=[],vr=0,ho=null,po=0,mt=[],gt=0,Yn=null,Yt=1,Qt="";function _n(e,t){gr[vr++]=po,gr[vr++]=ho,ho=e,po=t}function Pm(e,t,n){mt[gt++]=Yt,mt[gt++]=Qt,mt[gt++]=Yn,Yn=e;var r=Yt;e=Qt;var i=32-Vt(r)-1;r&=~(1<<i),n+=1;var s=32-Vt(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Yt=1<<32-Vt(t)+i|n<<i|r,Qt=s+e}else Yt=1<<s|n<<i|r,Qt=e}function Iu(e){e.return!==null&&(_n(e,1),Pm(e,1,0))}function Bu(e){for(;e===ho;)ho=gr[--vr],gr[vr]=null,po=gr[--vr],gr[vr]=null;for(;e===Yn;)Yn=mt[--gt],mt[gt]=null,Qt=mt[--gt],mt[gt]=null,Yt=mt[--gt],mt[gt]=null}var at=null,ot=null,ae=!1,jt=null;function Tm(e,t){var n=yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Gd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,at=e,ot=yn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,at=e,ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Yn!==null?{id:Yt,overflow:Qt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,at=e,ot=null,!0):!1;default:return!1}}function bl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _l(e){if(ae){var t=ot;if(t){var n=t;if(!Gd(e,t)){if(bl(e))throw Error(N(418));t=yn(n.nextSibling);var r=at;t&&Gd(e,t)?Tm(r,n):(e.flags=e.flags&-4097|2,ae=!1,at=e)}}else{if(bl(e))throw Error(N(418));e.flags=e.flags&-4097|2,ae=!1,at=e}}}function qd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function Es(e){if(e!==at)return!1;if(!ae)return qd(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Vl(e.type,e.memoizedProps)),t&&(t=ot)){if(bl(e))throw Em(),Error(N(418));for(;t;)Tm(e,t),t=yn(t.nextSibling)}if(qd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ot=yn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ot=null}}else ot=at?yn(e.stateNode.nextSibling):null;return!0}function Em(){for(var e=ot;e;)e=yn(e.nextSibling)}function br(){ot=at=null,ae=!1}function Uu(e){jt===null?jt=[e]:jt.push(e)}var Mx=sn.ReactCurrentBatchConfig;function ri(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function Cs(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Yd(e){var t=e._init;return t(e._payload)}function Cm(e){function t(m,p){if(e){var v=m.deletions;v===null?(m.deletions=[p],m.flags|=16):v.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=kn(m,p),m.index=0,m.sibling=null,m}function s(m,p,v){return m.index=v,e?(v=m.alternate,v!==null?(v=v.index,v<p?(m.flags|=2,p):v):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,p,v,P){return p===null||p.tag!==6?(p=Ia(v,m.mode,P),p.return=m,p):(p=i(p,v),p.return=m,p)}function l(m,p,v,P){var T=v.type;return T===cr?c(m,p,v.props.children,P,v.key):p!==null&&(p.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===un&&Yd(T)===p.type)?(P=i(p,v.props),P.ref=ri(m,p,v),P.return=m,P):(P=qs(v.type,v.key,v.props,null,m.mode,P),P.ref=ri(m,p,v),P.return=m,P)}function u(m,p,v,P){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Ba(v,m.mode,P),p.return=m,p):(p=i(p,v.children||[]),p.return=m,p)}function c(m,p,v,P,T){return p===null||p.tag!==7?(p=Kn(v,m.mode,P,T),p.return=m,p):(p=i(p,v),p.return=m,p)}function f(m,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ia(""+p,m.mode,v),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ms:return v=qs(p.type,p.key,p.props,null,m.mode,v),v.ref=ri(m,null,p),v.return=m,v;case ur:return p=Ba(p,m.mode,v),p.return=m,p;case un:var P=p._init;return f(m,P(p._payload),v)}if(di(p)||Zr(p))return p=Kn(p,m.mode,v,null),p.return=m,p;Cs(m,p)}return null}function h(m,p,v,P){var T=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:a(m,p,""+v,P);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ms:return v.key===T?l(m,p,v,P):null;case ur:return v.key===T?u(m,p,v,P):null;case un:return T=v._init,h(m,p,T(v._payload),P)}if(di(v)||Zr(v))return T!==null?null:c(m,p,v,P,null);Cs(m,v)}return null}function g(m,p,v,P,T){if(typeof P=="string"&&P!==""||typeof P=="number")return m=m.get(v)||null,a(p,m,""+P,T);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case ms:return m=m.get(P.key===null?v:P.key)||null,l(p,m,P,T);case ur:return m=m.get(P.key===null?v:P.key)||null,u(p,m,P,T);case un:var A=P._init;return g(m,p,v,A(P._payload),T)}if(di(P)||Zr(P))return m=m.get(v)||null,c(p,m,P,T,null);Cs(p,P)}return null}function w(m,p,v,P){for(var T=null,A=null,R=p,j=p=0,$=null;R!==null&&j<v.length;j++){R.index>j?($=R,R=null):$=R.sibling;var F=h(m,R,v[j],P);if(F===null){R===null&&(R=$);break}e&&R&&F.alternate===null&&t(m,R),p=s(F,p,j),A===null?T=F:A.sibling=F,A=F,R=$}if(j===v.length)return n(m,R),ae&&_n(m,j),T;if(R===null){for(;j<v.length;j++)R=f(m,v[j],P),R!==null&&(p=s(R,p,j),A===null?T=R:A.sibling=R,A=R);return ae&&_n(m,j),T}for(R=r(m,R);j<v.length;j++)$=g(R,m,j,v[j],P),$!==null&&(e&&$.alternate!==null&&R.delete($.key===null?j:$.key),p=s($,p,j),A===null?T=$:A.sibling=$,A=$);return e&&R.forEach(function(le){return t(m,le)}),ae&&_n(m,j),T}function S(m,p,v,P){var T=Zr(v);if(typeof T!="function")throw Error(N(150));if(v=T.call(v),v==null)throw Error(N(151));for(var A=T=null,R=p,j=p=0,$=null,F=v.next();R!==null&&!F.done;j++,F=v.next()){R.index>j?($=R,R=null):$=R.sibling;var le=h(m,R,F.value,P);if(le===null){R===null&&(R=$);break}e&&R&&le.alternate===null&&t(m,R),p=s(le,p,j),A===null?T=le:A.sibling=le,A=le,R=$}if(F.done)return n(m,R),ae&&_n(m,j),T;if(R===null){for(;!F.done;j++,F=v.next())F=f(m,F.value,P),F!==null&&(p=s(F,p,j),A===null?T=F:A.sibling=F,A=F);return ae&&_n(m,j),T}for(R=r(m,R);!F.done;j++,F=v.next())F=g(R,m,j,F.value,P),F!==null&&(e&&F.alternate!==null&&R.delete(F.key===null?j:F.key),p=s(F,p,j),A===null?T=F:A.sibling=F,A=F);return e&&R.forEach(function(H){return t(m,H)}),ae&&_n(m,j),T}function C(m,p,v,P){if(typeof v=="object"&&v!==null&&v.type===cr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ms:e:{for(var T=v.key,A=p;A!==null;){if(A.key===T){if(T=v.type,T===cr){if(A.tag===7){n(m,A.sibling),p=i(A,v.props.children),p.return=m,m=p;break e}}else if(A.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===un&&Yd(T)===A.type){n(m,A.sibling),p=i(A,v.props),p.ref=ri(m,A,v),p.return=m,m=p;break e}n(m,A);break}else t(m,A);A=A.sibling}v.type===cr?(p=Kn(v.props.children,m.mode,P,v.key),p.return=m,m=p):(P=qs(v.type,v.key,v.props,null,m.mode,P),P.ref=ri(m,p,v),P.return=m,m=P)}return o(m);case ur:e:{for(A=v.key;p!==null;){if(p.key===A)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(m,p.sibling),p=i(p,v.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=Ba(v,m.mode,P),p.return=m,m=p}return o(m);case un:return A=v._init,C(m,p,A(v._payload),P)}if(di(v))return w(m,p,v,P);if(Zr(v))return S(m,p,v,P);Cs(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,v),p.return=m,m=p):(n(m,p),p=Ia(v,m.mode,P),p.return=m,m=p),o(m)):n(m,p)}return C}var _r=Cm(!0),Am=Cm(!1),mo=An(null),go=null,yr=null,$u=null;function Wu(){$u=yr=go=null}function Hu(e){var t=mo.current;se(mo),e._currentValue=t}function Ml(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Vr(e,t){go=e,$u=yr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Je=!0),e.firstContext=null)}function wt(e){var t=e._currentValue;if($u!==e)if(e={context:e,memoizedValue:t,next:null},yr===null){if(go===null)throw Error(N(308));yr=e,go.dependencies={lanes:0,firstContext:e}}else yr=yr.next=e;return t}var Bn=null;function Ku(e){Bn===null?Bn=[e]:Bn.push(e)}function jm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ku(t)):(n.next=i.next,i.next=n),t.interleaved=n,nn(e,r)}function nn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cn=!1;function Gu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,nn(e,n)}return i=r.interleaved,i===null?(t.next=t,Ku(r)):(t.next=i.next,i.next=t),r.interleaved=t,nn(e,n)}function Us(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Du(e,n)}}function Qd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vo(e,t,n,r){var i=e.updateQueue;cn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,S=a;switch(h=t,g=n,S.tag){case 1:if(w=S.payload,typeof w=="function"){f=w.call(g,f,h);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,h=typeof w=="function"?w.call(g,f,h):w,h==null)break e;f=he({},f,h);break e;case 2:cn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Xn|=o,e.lanes=o,e.memoizedState=f}}function Xd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var is={},$t=An(is),Wi=An(is),Hi=An(is);function Un(e){if(e===is)throw Error(N(174));return e}function qu(e,t){switch(ee(Hi,t),ee(Wi,e),ee($t,is),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gl(t,e)}se($t),ee($t,t)}function Mr(){se($t),se(Wi),se(Hi)}function Vm(e){Un(Hi.current);var t=Un($t.current),n=gl(t,e.type);t!==n&&(ee(Wi,e),ee($t,n))}function Yu(e){Wi.current===e&&(se($t),se(Wi))}var ue=An(0);function yo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ba=[];function Qu(){for(var e=0;e<ba.length;e++)ba[e]._workInProgressVersionPrimary=null;ba.length=0}var $s=sn.ReactCurrentDispatcher,_a=sn.ReactCurrentBatchConfig,Qn=0,fe=null,Te=null,Ae=null,xo=!1,ki=!1,Ki=0,zx=0;function Ie(){throw Error(N(321))}function Xu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dt(e[n],t[n]))return!1;return!0}function Zu(e,t,n,r,i,s){if(Qn=s,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$s.current=e===null||e.memoizedState===null?Bx:Ux,e=n(r,i),ki){s=0;do{if(ki=!1,Ki=0,25<=s)throw Error(N(301));s+=1,Ae=Te=null,t.updateQueue=null,$s.current=$x,e=n(r,i)}while(ki)}if($s.current=wo,t=Te!==null&&Te.next!==null,Qn=0,Ae=Te=fe=null,xo=!1,t)throw Error(N(300));return e}function Ju(){var e=Ki!==0;return Ki=0,e}function zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?fe.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function St(){if(Te===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Ae===null?fe.memoizedState:Ae.next;if(t!==null)Ae=t,Te=e;else{if(e===null)throw Error(N(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Ae===null?fe.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function Gi(e,t){return typeof t=="function"?t(e):t}function Ma(e){var t=St(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=Te,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Qn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,fe.lanes|=c,Xn|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Dt(r,t.memoizedState)||(Je=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,fe.lanes|=s,Xn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function za(e){var t=St(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Dt(s,t.memoizedState)||(Je=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Rm(){}function Dm(e,t){var n=fe,r=St(),i=t(),s=!Dt(r.memoizedState,i);if(s&&(r.memoizedState=i,Je=!0),r=r.queue,ec(_m.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,qi(9,bm.bind(null,n,r,i,t),void 0,null),Re===null)throw Error(N(349));Qn&30||Lm(n,t,i)}return i}function Lm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bm(e,t,n,r){t.value=n,t.getSnapshot=r,Mm(t)&&zm(e)}function _m(e,t,n){return n(function(){Mm(t)&&zm(e)})}function Mm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dt(e,n)}catch{return!0}}function zm(e){var t=nn(e,1);t!==null&&Rt(t,e,1,-1)}function Zd(e){var t=zt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:e},t.queue=e,e=e.dispatch=Ix.bind(null,fe,e),[t.memoizedState,e]}function qi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Fm(){return St().memoizedState}function Ws(e,t,n,r){var i=zt();fe.flags|=e,i.memoizedState=qi(1|t,n,void 0,r===void 0?null:r)}function Wo(e,t,n,r){var i=St();r=r===void 0?null:r;var s=void 0;if(Te!==null){var o=Te.memoizedState;if(s=o.destroy,r!==null&&Xu(r,o.deps)){i.memoizedState=qi(t,n,s,r);return}}fe.flags|=e,i.memoizedState=qi(1|t,n,s,r)}function Jd(e,t){return Ws(8390656,8,e,t)}function ec(e,t){return Wo(2048,8,e,t)}function Om(e,t){return Wo(4,2,e,t)}function Im(e,t){return Wo(4,4,e,t)}function Bm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Um(e,t,n){return n=n!=null?n.concat([e]):null,Wo(4,4,Bm.bind(null,t,e),n)}function tc(){}function $m(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wm(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Hm(e,t,n){return Qn&21?(Dt(n,t)||(n=Qp(),fe.lanes|=n,Xn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=n)}function Fx(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=_a.transition;_a.transition={};try{e(!1),t()}finally{X=n,_a.transition=r}}function Km(){return St().memoizedState}function Ox(e,t,n){var r=Sn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gm(e))qm(t,n);else if(n=jm(e,t,n,r),n!==null){var i=qe();Rt(n,e,r,i),Ym(n,t,r)}}function Ix(e,t,n){var r=Sn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gm(e))qm(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Dt(a,o)){var l=t.interleaved;l===null?(i.next=i,Ku(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=jm(e,t,i,r),n!==null&&(i=qe(),Rt(n,e,r,i),Ym(n,t,r))}}function Gm(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function qm(e,t){ki=xo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ym(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Du(e,n)}}var wo={readContext:wt,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},Bx={readContext:wt,useCallback:function(e,t){return zt().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:Jd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ws(4194308,4,Bm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ws(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ws(4,2,e,t)},useMemo:function(e,t){var n=zt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=zt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ox.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var t=zt();return e={current:e},t.memoizedState=e},useState:Zd,useDebugValue:tc,useDeferredValue:function(e){return zt().memoizedState=e},useTransition:function(){var e=Zd(!1),t=e[0];return e=Fx.bind(null,e[1]),zt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=fe,i=zt();if(ae){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),Re===null)throw Error(N(349));Qn&30||Lm(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Jd(_m.bind(null,r,s,e),[e]),r.flags|=2048,qi(9,bm.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=zt(),t=Re.identifierPrefix;if(ae){var n=Qt,r=Yt;n=(r&~(1<<32-Vt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ki++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=zx++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ux={readContext:wt,useCallback:$m,useContext:wt,useEffect:ec,useImperativeHandle:Um,useInsertionEffect:Om,useLayoutEffect:Im,useMemo:Wm,useReducer:Ma,useRef:Fm,useState:function(){return Ma(Gi)},useDebugValue:tc,useDeferredValue:function(e){var t=St();return Hm(t,Te.memoizedState,e)},useTransition:function(){var e=Ma(Gi)[0],t=St().memoizedState;return[e,t]},useMutableSource:Rm,useSyncExternalStore:Dm,useId:Km,unstable_isNewReconciler:!1},$x={readContext:wt,useCallback:$m,useContext:wt,useEffect:ec,useImperativeHandle:Um,useInsertionEffect:Om,useLayoutEffect:Im,useMemo:Wm,useReducer:za,useRef:Fm,useState:function(){return za(Gi)},useDebugValue:tc,useDeferredValue:function(e){var t=St();return Te===null?t.memoizedState=e:Hm(t,Te.memoizedState,e)},useTransition:function(){var e=za(Gi)[0],t=St().memoizedState;return[e,t]},useMutableSource:Rm,useSyncExternalStore:Dm,useId:Km,unstable_isNewReconciler:!1};function Ct(e,t){if(e&&e.defaultProps){t=he({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function zl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:he({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ho={isMounted:function(e){return(e=e._reactInternals)?rr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=qe(),i=Sn(e),s=Xt(r,i);s.payload=t,n!=null&&(s.callback=n),t=xn(e,s,i),t!==null&&(Rt(t,e,i,r),Us(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=qe(),i=Sn(e),s=Xt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=xn(e,s,i),t!==null&&(Rt(t,e,i,r),Us(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=qe(),r=Sn(e),i=Xt(n,r);i.tag=2,t!=null&&(i.callback=t),t=xn(e,i,r),t!==null&&(Rt(t,e,r,n),Us(t,e,r))}};function ef(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Ii(n,r)||!Ii(i,s):!0}function Qm(e,t,n){var r=!1,i=Tn,s=t.contextType;return typeof s=="object"&&s!==null?s=wt(s):(i=tt(t)?qn:Ke.current,r=t.contextTypes,s=(r=r!=null)?Lr(e,i):Tn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ho,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function tf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ho.enqueueReplaceState(t,t.state,null)}function Fl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Gu(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=wt(s):(s=tt(t)?qn:Ke.current,i.context=Lr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(zl(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ho.enqueueReplaceState(i,i.state,null),vo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function zr(e,t){try{var n="",r=t;do n+=v0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Fa(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Ol(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Wx=typeof WeakMap=="function"?WeakMap:Map;function Xm(e,t,n){n=Xt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ko||(ko=!0,Yl=r),Ol(e,t)},n}function Zm(e,t,n){n=Xt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ol(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ol(e,t),typeof r!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function nf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Wx;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=i1.bind(null,e,t,n),t.then(e,e))}function rf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function sf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xt(-1,1),t.tag=2,xn(n,t,1))),n.lanes|=1),e)}var Hx=sn.ReactCurrentOwner,Je=!1;function Ge(e,t,n,r){t.child=e===null?Am(t,null,n,r):_r(t,e.child,n,r)}function of(e,t,n,r,i){n=n.render;var s=t.ref;return Vr(t,i),r=Zu(e,t,n,r,s,i),n=Ju(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rn(e,t,i)):(ae&&n&&Iu(t),t.flags|=1,Ge(e,t,r,i),t.child)}function af(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!uc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Jm(e,t,s,r,i)):(e=qs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ii,n(o,r)&&e.ref===t.ref)return rn(e,t,i)}return t.flags|=1,e=kn(s,r),e.ref=t.ref,e.return=t,t.child=e}function Jm(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Ii(s,r)&&e.ref===t.ref)if(Je=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Je=!0);else return t.lanes=e.lanes,rn(e,t,i)}return Il(e,t,n,r,i)}function eg(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(wr,it),it|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(wr,it),it|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ee(wr,it),it|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,ee(wr,it),it|=r;return Ge(e,t,i,n),t.child}function tg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Il(e,t,n,r,i){var s=tt(n)?qn:Ke.current;return s=Lr(t,s),Vr(t,i),n=Zu(e,t,n,r,s,i),r=Ju(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rn(e,t,i)):(ae&&r&&Iu(t),t.flags|=1,Ge(e,t,n,i),t.child)}function lf(e,t,n,r,i){if(tt(n)){var s=!0;fo(t)}else s=!1;if(Vr(t,i),t.stateNode===null)Hs(e,t),Qm(t,n,r),Fl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=wt(u):(u=tt(n)?qn:Ke.current,u=Lr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&tf(t,o,r,u),cn=!1;var h=t.memoizedState;o.state=h,vo(t,r,o,i),l=t.memoizedState,a!==r||h!==l||et.current||cn?(typeof c=="function"&&(zl(t,n,c,r),l=t.memoizedState),(a=cn||ef(t,n,a,r,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Nm(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ct(t.type,a),o.props=u,f=t.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=wt(l):(l=tt(n)?qn:Ke.current,l=Lr(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&tf(t,o,r,l),cn=!1,h=t.memoizedState,o.state=h,vo(t,r,o,i);var w=t.memoizedState;a!==f||h!==w||et.current||cn?(typeof g=="function"&&(zl(t,n,g,r),w=t.memoizedState),(u=cn||ef(t,n,u,r,h,w,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Bl(e,t,n,r,s,i)}function Bl(e,t,n,r,i,s){tg(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Kd(t,n,!1),rn(e,t,s);r=t.stateNode,Hx.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=_r(t,e.child,null,s),t.child=_r(t,null,a,s)):Ge(e,t,a,s),t.memoizedState=r.state,i&&Kd(t,n,!0),t.child}function ng(e){var t=e.stateNode;t.pendingContext?Hd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hd(e,t.context,!1),qu(e,t.containerInfo)}function uf(e,t,n,r,i){return br(),Uu(i),t.flags|=256,Ge(e,t,n,r),t.child}var Ul={dehydrated:null,treeContext:null,retryLane:0};function $l(e){return{baseLanes:e,cachePool:null,transitions:null}}function rg(e,t,n){var r=t.pendingProps,i=ue.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(ue,i&1),e===null)return _l(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=qo(o,r,0,null),e=Kn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=$l(n),t.memoizedState=Ul,e):nc(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Kx(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=kn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=kn(a,s):(s=Kn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?$l(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Ul,r}return s=e.child,e=s.sibling,r=kn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function nc(e,t){return t=qo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function As(e,t,n,r){return r!==null&&Uu(r),_r(t,e.child,null,n),e=nc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kx(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Fa(Error(N(422))),As(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=qo({mode:"visible",children:r.children},i,0,null),s=Kn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&_r(t,e.child,null,o),t.child.memoizedState=$l(o),t.memoizedState=Ul,s);if(!(t.mode&1))return As(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(N(419)),r=Fa(s,r,void 0),As(e,t,o,r)}if(a=(o&e.childLanes)!==0,Je||a){if(r=Re,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,nn(e,i),Rt(r,e,i,-1))}return lc(),r=Fa(Error(N(421))),As(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=s1.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,ot=yn(i.nextSibling),at=t,ae=!0,jt=null,e!==null&&(mt[gt++]=Yt,mt[gt++]=Qt,mt[gt++]=Yn,Yt=e.id,Qt=e.overflow,Yn=t),t=nc(t,r.children),t.flags|=4096,t)}function cf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ml(e.return,t,n)}function Oa(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ig(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Ge(e,t,r.children,n),r=ue.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cf(e,n,t);else if(e.tag===19)cf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(ue,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&yo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oa(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&yo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oa(t,!0,n,null,s);break;case"together":Oa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=kn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Gx(e,t,n){switch(t.tag){case 3:ng(t),br();break;case 5:Vm(t);break;case 1:tt(t.type)&&fo(t);break;case 4:qu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ee(mo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(ue,ue.current&1),t.flags|=128,null):n&t.child.childLanes?rg(e,t,n):(ee(ue,ue.current&1),e=rn(e,t,n),e!==null?e.sibling:null);ee(ue,ue.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ig(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(ue,ue.current),r)break;return null;case 22:case 23:return t.lanes=0,eg(e,t,n)}return rn(e,t,n)}var sg,Wl,og,ag;sg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wl=function(){};og=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Un($t.current);var s=null;switch(n){case"input":i=fl(e,i),r=fl(e,r),s=[];break;case"select":i=he({},i,{value:void 0}),r=he({},r,{value:void 0}),s=[];break;case"textarea":i=ml(e,i),r=ml(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=uo)}vl(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Li.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Li.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&re("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};ag=function(e,t,n,r){n!==r&&(t.flags|=4)};function ii(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function qx(e,t,n){var r=t.pendingProps;switch(Bu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return tt(t.type)&&co(),Be(t),null;case 3:return r=t.stateNode,Mr(),se(et),se(Ke),Qu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Es(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,jt!==null&&(Zl(jt),jt=null))),Wl(e,t),Be(t),null;case 5:Yu(t);var i=Un(Hi.current);if(n=t.type,e!==null&&t.stateNode!=null)og(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return Be(t),null}if(e=Un($t.current),Es(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[It]=t,r[$i]=s,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(i=0;i<hi.length;i++)re(hi[i],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":yd(r,s),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},re("invalid",r);break;case"textarea":wd(r,s),re("invalid",r)}vl(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ts(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ts(r.textContent,a,e),i=["children",""+a]):Li.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&re("scroll",r)}switch(n){case"input":gs(r),xd(r,s,!0);break;case"textarea":gs(r),Sd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=uo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_p(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[It]=t,e[$i]=r,sg(e,t,!1,!1),t.stateNode=e;e:{switch(o=yl(n,r),n){case"dialog":re("cancel",e),re("close",e),i=r;break;case"iframe":case"object":case"embed":re("load",e),i=r;break;case"video":case"audio":for(i=0;i<hi.length;i++)re(hi[i],e);i=r;break;case"source":re("error",e),i=r;break;case"img":case"image":case"link":re("error",e),re("load",e),i=r;break;case"details":re("toggle",e),i=r;break;case"input":yd(e,r),i=fl(e,r),re("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=he({},r,{value:void 0}),re("invalid",e);break;case"textarea":wd(e,r),i=ml(e,r),re("invalid",e);break;default:i=r}vl(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Fp(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Mp(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&bi(e,l):typeof l=="number"&&bi(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Li.hasOwnProperty(s)?l!=null&&s==="onScroll"&&re("scroll",e):l!=null&&Cu(e,s,l,o))}switch(n){case"input":gs(e),xd(e,r,!1);break;case"textarea":gs(e),Sd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Pn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Cr(e,!!r.multiple,s,!1):r.defaultValue!=null&&Cr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=uo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Be(t),null;case 6:if(e&&t.stateNode!=null)ag(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Un(Hi.current),Un($t.current),Es(t)){if(r=t.stateNode,n=t.memoizedProps,r[It]=t,(s=r.nodeValue!==n)&&(e=at,e!==null))switch(e.tag){case 3:Ts(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ts(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[It]=t,t.stateNode=r}return Be(t),null;case 13:if(se(ue),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&ot!==null&&t.mode&1&&!(t.flags&128))Em(),br(),t.flags|=98560,s=!1;else if(s=Es(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(N(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(N(317));s[It]=t}else br(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Be(t),s=!1}else jt!==null&&(Zl(jt),jt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ue.current&1?Ee===0&&(Ee=3):lc())),t.updateQueue!==null&&(t.flags|=4),Be(t),null);case 4:return Mr(),Wl(e,t),e===null&&Bi(t.stateNode.containerInfo),Be(t),null;case 10:return Hu(t.type._context),Be(t),null;case 17:return tt(t.type)&&co(),Be(t),null;case 19:if(se(ue),s=t.memoizedState,s===null)return Be(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)ii(s,!1);else{if(Ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=yo(e),o!==null){for(t.flags|=128,ii(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(ue,ue.current&1|2),t.child}e=e.sibling}s.tail!==null&&ye()>Fr&&(t.flags|=128,r=!0,ii(s,!1),t.lanes=4194304)}else{if(!r)if(e=yo(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ii(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ae)return Be(t),null}else 2*ye()-s.renderingStartTime>Fr&&n!==1073741824&&(t.flags|=128,r=!0,ii(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ye(),t.sibling=null,n=ue.current,ee(ue,r?n&1|2:n&1),t):(Be(t),null);case 22:case 23:return ac(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?it&1073741824&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Yx(e,t){switch(Bu(t),t.tag){case 1:return tt(t.type)&&co(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mr(),se(et),se(Ke),Qu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Yu(t),null;case 13:if(se(ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(ue),null;case 4:return Mr(),null;case 10:return Hu(t.type._context),null;case 22:case 23:return ac(),null;case 24:return null;default:return null}}var js=!1,$e=!1,Qx=typeof WeakSet=="function"?WeakSet:Set,M=null;function xr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){me(e,t,r)}else n.current=null}function Hl(e,t,n){try{n()}catch(r){me(e,t,r)}}var df=!1;function Xx(e,t){if(jl=oo,e=fm(),Ou(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=e,h=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===e)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nl={focusedElem:e,selectionRange:n},oo=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var S=w.memoizedProps,C=w.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?S:Ct(t.type,S),C);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(P){me(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return w=df,df=!1,w}function Pi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Hl(t,n,s)}i=i.next}while(i!==r)}}function Ko(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Kl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function lg(e){var t=e.alternate;t!==null&&(e.alternate=null,lg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[It],delete t[$i],delete t[Dl],delete t[Lx],delete t[bx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ug(e){return e.tag===5||e.tag===3||e.tag===4}function ff(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ug(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=uo));else if(r!==4&&(e=e.child,e!==null))for(Gl(e,t,n),e=e.sibling;e!==null;)Gl(e,t,n),e=e.sibling}function ql(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ql(e,t,n),e=e.sibling;e!==null;)ql(e,t,n),e=e.sibling}var _e=null,At=!1;function on(e,t,n){for(n=n.child;n!==null;)cg(e,t,n),n=n.sibling}function cg(e,t,n){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(Fo,n)}catch{}switch(n.tag){case 5:$e||xr(n,t);case 6:var r=_e,i=At;_e=null,on(e,t,n),_e=r,At=i,_e!==null&&(At?(e=_e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(At?(e=_e,n=n.stateNode,e.nodeType===8?Da(e.parentNode,n):e.nodeType===1&&Da(e,n),Fi(e)):Da(_e,n.stateNode));break;case 4:r=_e,i=At,_e=n.stateNode.containerInfo,At=!0,on(e,t,n),_e=r,At=i;break;case 0:case 11:case 14:case 15:if(!$e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Hl(n,t,o),i=i.next}while(i!==r)}on(e,t,n);break;case 1:if(!$e&&(xr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){me(n,t,a)}on(e,t,n);break;case 21:on(e,t,n);break;case 22:n.mode&1?($e=(r=$e)||n.memoizedState!==null,on(e,t,n),$e=r):on(e,t,n);break;default:on(e,t,n)}}function hf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Qx),t.forEach(function(r){var i=o1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:_e=a.stateNode,At=!1;break e;case 3:_e=a.stateNode.containerInfo,At=!0;break e;case 4:_e=a.stateNode.containerInfo,At=!0;break e}a=a.return}if(_e===null)throw Error(N(160));cg(s,o,i),_e=null,At=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){me(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)dg(t,e),t=t.sibling}function dg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pt(t,e),Mt(e),r&4){try{Pi(3,e,e.return),Ko(3,e)}catch(S){me(e,e.return,S)}try{Pi(5,e,e.return)}catch(S){me(e,e.return,S)}}break;case 1:Pt(t,e),Mt(e),r&512&&n!==null&&xr(n,n.return);break;case 5:if(Pt(t,e),Mt(e),r&512&&n!==null&&xr(n,n.return),e.flags&32){var i=e.stateNode;try{bi(i,"")}catch(S){me(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Lp(i,s),yl(a,o);var u=yl(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?Fp(i,f):c==="dangerouslySetInnerHTML"?Mp(i,f):c==="children"?bi(i,f):Cu(i,c,f,u)}switch(a){case"input":hl(i,s);break;case"textarea":bp(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Cr(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Cr(i,!!s.multiple,s.defaultValue,!0):Cr(i,!!s.multiple,s.multiple?[]:"",!1))}i[$i]=s}catch(S){me(e,e.return,S)}}break;case 6:if(Pt(t,e),Mt(e),r&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(S){me(e,e.return,S)}}break;case 3:if(Pt(t,e),Mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fi(t.containerInfo)}catch(S){me(e,e.return,S)}break;case 4:Pt(t,e),Mt(e);break;case 13:Pt(t,e),Mt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(sc=ye())),r&4&&hf(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?($e=(u=$e)||c,Pt(t,e),$e=u):Pt(t,e),Mt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(M=e,c=e.child;c!==null;){for(f=M=c;M!==null;){switch(h=M,g=h.child,h.tag){case 0:case 11:case 14:case 15:Pi(4,h,h.return);break;case 1:xr(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(S){me(r,n,S)}}break;case 5:xr(h,h.return);break;case 22:if(h.memoizedState!==null){mf(f);continue}}g!==null?(g.return=h,M=g):mf(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=zp("display",o))}catch(S){me(e,e.return,S)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(S){me(e,e.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Pt(t,e),Mt(e),r&4&&hf(e);break;case 21:break;default:Pt(t,e),Mt(e)}}function Mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ug(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(bi(i,""),r.flags&=-33);var s=ff(e);ql(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ff(e);Gl(e,a,o);break;default:throw Error(N(161))}}catch(l){me(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zx(e,t,n){M=e,fg(e)}function fg(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||js;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||$e;a=js;var u=$e;if(js=o,($e=l)&&!u)for(M=i;M!==null;)o=M,l=o.child,o.tag===22&&o.memoizedState!==null?gf(i):l!==null?(l.return=o,M=l):gf(i);for(;s!==null;)M=s,fg(s),s=s.sibling;M=i,js=a,$e=u}pf(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):pf(e)}}function pf(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:$e||Ko(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!$e)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ct(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Xd(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xd(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Fi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}$e||t.flags&512&&Kl(t)}catch(h){me(t,t.return,h)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function mf(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function gf(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ko(4,t)}catch(l){me(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){me(t,i,l)}}var s=t.return;try{Kl(t)}catch(l){me(t,s,l)}break;case 5:var o=t.return;try{Kl(t)}catch(l){me(t,o,l)}}}catch(l){me(t,t.return,l)}if(t===e){M=null;break}var a=t.sibling;if(a!==null){a.return=t.return,M=a;break}M=t.return}}var Jx=Math.ceil,So=sn.ReactCurrentDispatcher,rc=sn.ReactCurrentOwner,xt=sn.ReactCurrentBatchConfig,q=0,Re=null,ke=null,Fe=0,it=0,wr=An(0),Ee=0,Yi=null,Xn=0,Go=0,ic=0,Ti=null,Ze=null,sc=0,Fr=1/0,Gt=null,ko=!1,Yl=null,wn=null,Ns=!1,pn=null,Po=0,Ei=0,Ql=null,Ks=-1,Gs=0;function qe(){return q&6?ye():Ks!==-1?Ks:Ks=ye()}function Sn(e){return e.mode&1?q&2&&Fe!==0?Fe&-Fe:Mx.transition!==null?(Gs===0&&(Gs=Qp()),Gs):(e=X,e!==0||(e=window.event,e=e===void 0?16:rm(e.type)),e):1}function Rt(e,t,n,r){if(50<Ei)throw Ei=0,Ql=null,Error(N(185));ts(e,n,r),(!(q&2)||e!==Re)&&(e===Re&&(!(q&2)&&(Go|=n),Ee===4&&fn(e,Fe)),nt(e,r),n===1&&q===0&&!(t.mode&1)&&(Fr=ye()+500,$o&&jn()))}function nt(e,t){var n=e.callbackNode;M0(e,t);var r=so(e,e===Re?Fe:0);if(r===0)n!==null&&Td(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Td(n),t===1)e.tag===0?_x(vf.bind(null,e)):km(vf.bind(null,e)),Rx(function(){!(q&6)&&jn()}),n=null;else{switch(Xp(r)){case 1:n=Ru;break;case 4:n=qp;break;case 16:n=io;break;case 536870912:n=Yp;break;default:n=io}n=wg(n,hg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function hg(e,t){if(Ks=-1,Gs=0,q&6)throw Error(N(327));var n=e.callbackNode;if(Rr()&&e.callbackNode!==n)return null;var r=so(e,e===Re?Fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=To(e,r);else{t=r;var i=q;q|=2;var s=mg();(Re!==e||Fe!==t)&&(Gt=null,Fr=ye()+500,Hn(e,t));do try{n1();break}catch(a){pg(e,a)}while(!0);Wu(),So.current=s,q=i,ke!==null?t=0:(Re=null,Fe=0,t=Ee)}if(t!==0){if(t===2&&(i=Pl(e),i!==0&&(r=i,t=Xl(e,i))),t===1)throw n=Yi,Hn(e,0),fn(e,r),nt(e,ye()),n;if(t===6)fn(e,r);else{if(i=e.current.alternate,!(r&30)&&!e1(i)&&(t=To(e,r),t===2&&(s=Pl(e),s!==0&&(r=s,t=Xl(e,s))),t===1))throw n=Yi,Hn(e,0),fn(e,r),nt(e,ye()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Mn(e,Ze,Gt);break;case 3:if(fn(e,r),(r&130023424)===r&&(t=sc+500-ye(),10<t)){if(so(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){qe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Rl(Mn.bind(null,e,Ze,Gt),t);break}Mn(e,Ze,Gt);break;case 4:if(fn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Vt(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Jx(r/1960))-r,10<r){e.timeoutHandle=Rl(Mn.bind(null,e,Ze,Gt),r);break}Mn(e,Ze,Gt);break;case 5:Mn(e,Ze,Gt);break;default:throw Error(N(329))}}}return nt(e,ye()),e.callbackNode===n?hg.bind(null,e):null}function Xl(e,t){var n=Ti;return e.current.memoizedState.isDehydrated&&(Hn(e,t).flags|=256),e=To(e,t),e!==2&&(t=Ze,Ze=n,t!==null&&Zl(t)),e}function Zl(e){Ze===null?Ze=e:Ze.push.apply(Ze,e)}function e1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Dt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fn(e,t){for(t&=~ic,t&=~Go,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Vt(t),r=1<<n;e[n]=-1,t&=~r}}function vf(e){if(q&6)throw Error(N(327));Rr();var t=so(e,0);if(!(t&1))return nt(e,ye()),null;var n=To(e,t);if(e.tag!==0&&n===2){var r=Pl(e);r!==0&&(t=r,n=Xl(e,r))}if(n===1)throw n=Yi,Hn(e,0),fn(e,t),nt(e,ye()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mn(e,Ze,Gt),nt(e,ye()),null}function oc(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(Fr=ye()+500,$o&&jn())}}function Zn(e){pn!==null&&pn.tag===0&&!(q&6)&&Rr();var t=q;q|=1;var n=xt.transition,r=X;try{if(xt.transition=null,X=1,e)return e()}finally{X=r,xt.transition=n,q=t,!(q&6)&&jn()}}function ac(){it=wr.current,se(wr)}function Hn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Vx(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(Bu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&co();break;case 3:Mr(),se(et),se(Ke),Qu();break;case 5:Yu(r);break;case 4:Mr();break;case 13:se(ue);break;case 19:se(ue);break;case 10:Hu(r.type._context);break;case 22:case 23:ac()}n=n.return}if(Re=e,ke=e=kn(e.current,null),Fe=it=t,Ee=0,Yi=null,ic=Go=Xn=0,Ze=Ti=null,Bn!==null){for(t=0;t<Bn.length;t++)if(n=Bn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Bn=null}return e}function pg(e,t){do{var n=ke;try{if(Wu(),$s.current=wo,xo){for(var r=fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xo=!1}if(Qn=0,Ae=Te=fe=null,ki=!1,Ki=0,rc.current=null,n===null||n.return===null){Ee=1,Yi=t,ke=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=Fe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=rf(o);if(g!==null){g.flags&=-257,sf(g,o,a,s,t),g.mode&1&&nf(s,u,t),t=g,l=u;var w=t.updateQueue;if(w===null){var S=new Set;S.add(l),t.updateQueue=S}else w.add(l);break e}else{if(!(t&1)){nf(s,u,t),lc();break e}l=Error(N(426))}}else if(ae&&a.mode&1){var C=rf(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),sf(C,o,a,s,t),Uu(zr(l,a));break e}}s=l=zr(l,a),Ee!==4&&(Ee=2),Ti===null?Ti=[s]:Ti.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=Xm(s,l,t);Qd(s,m);break e;case 1:a=l;var p=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(wn===null||!wn.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t;var P=Zm(s,a,t);Qd(s,P);break e}}s=s.return}while(s!==null)}vg(n)}catch(T){t=T,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function mg(){var e=So.current;return So.current=wo,e===null?wo:e}function lc(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),Re===null||!(Xn&268435455)&&!(Go&268435455)||fn(Re,Fe)}function To(e,t){var n=q;q|=2;var r=mg();(Re!==e||Fe!==t)&&(Gt=null,Hn(e,t));do try{t1();break}catch(i){pg(e,i)}while(!0);if(Wu(),q=n,So.current=r,ke!==null)throw Error(N(261));return Re=null,Fe=0,Ee}function t1(){for(;ke!==null;)gg(ke)}function n1(){for(;ke!==null&&!A0();)gg(ke)}function gg(e){var t=xg(e.alternate,e,it);e.memoizedProps=e.pendingProps,t===null?vg(e):ke=t,rc.current=null}function vg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Yx(n,t),n!==null){n.flags&=32767,ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ee=6,ke=null;return}}else if(n=qx(n,t,it),n!==null){ke=n;return}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);Ee===0&&(Ee=5)}function Mn(e,t,n){var r=X,i=xt.transition;try{xt.transition=null,X=1,r1(e,t,n,r)}finally{xt.transition=i,X=r}return null}function r1(e,t,n,r){do Rr();while(pn!==null);if(q&6)throw Error(N(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(z0(e,s),e===Re&&(ke=Re=null,Fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ns||(Ns=!0,wg(io,function(){return Rr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=xt.transition,xt.transition=null;var o=X;X=1;var a=q;q|=4,rc.current=null,Xx(e,n),dg(n,e),Px(Nl),oo=!!jl,Nl=jl=null,e.current=n,Zx(n),j0(),q=a,X=o,xt.transition=s}else e.current=n;if(Ns&&(Ns=!1,pn=e,Po=i),s=e.pendingLanes,s===0&&(wn=null),R0(n.stateNode),nt(e,ye()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ko)throw ko=!1,e=Yl,Yl=null,e;return Po&1&&e.tag!==0&&Rr(),s=e.pendingLanes,s&1?e===Ql?Ei++:(Ei=0,Ql=e):Ei=0,jn(),null}function Rr(){if(pn!==null){var e=Xp(Po),t=xt.transition,n=X;try{if(xt.transition=null,X=16>e?16:e,pn===null)var r=!1;else{if(e=pn,pn=null,Po=0,q&6)throw Error(N(331));var i=q;for(q|=4,M=e.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:Pi(8,c,s)}var f=c.child;if(f!==null)f.return=c,M=f;else for(;M!==null;){c=M;var h=c.sibling,g=c.return;if(lg(c),c===u){M=null;break}if(h!==null){h.return=g,M=h;break}M=g}}}var w=s.alternate;if(w!==null){var S=w.child;if(S!==null){w.child=null;do{var C=S.sibling;S.sibling=null,S=C}while(S!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Pi(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,M=m;break e}M=s.return}}var p=e.current;for(M=p;M!==null;){o=M;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,M=v;else e:for(o=p;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ko(9,a)}}catch(T){me(a,a.return,T)}if(a===o){M=null;break e}var P=a.sibling;if(P!==null){P.return=a.return,M=P;break e}M=a.return}}if(q=i,jn(),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(Fo,e)}catch{}r=!0}return r}finally{X=n,xt.transition=t}}return!1}function yf(e,t,n){t=zr(n,t),t=Xm(e,t,1),e=xn(e,t,1),t=qe(),e!==null&&(ts(e,1,t),nt(e,t))}function me(e,t,n){if(e.tag===3)yf(e,e,n);else for(;t!==null;){if(t.tag===3){yf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wn===null||!wn.has(r))){e=zr(n,e),e=Zm(t,e,1),t=xn(t,e,1),e=qe(),t!==null&&(ts(t,1,e),nt(t,e));break}}t=t.return}}function i1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=qe(),e.pingedLanes|=e.suspendedLanes&n,Re===e&&(Fe&n)===n&&(Ee===4||Ee===3&&(Fe&130023424)===Fe&&500>ye()-sc?Hn(e,0):ic|=n),nt(e,t)}function yg(e,t){t===0&&(e.mode&1?(t=xs,xs<<=1,!(xs&130023424)&&(xs=4194304)):t=1);var n=qe();e=nn(e,t),e!==null&&(ts(e,t,n),nt(e,n))}function s1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),yg(e,n)}function o1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),yg(e,n)}var xg;xg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||et.current)Je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Je=!1,Gx(e,t,n);Je=!!(e.flags&131072)}else Je=!1,ae&&t.flags&1048576&&Pm(t,po,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hs(e,t),e=t.pendingProps;var i=Lr(t,Ke.current);Vr(t,n),i=Zu(null,t,r,e,i,n);var s=Ju();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tt(r)?(s=!0,fo(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Gu(t),i.updater=Ho,t.stateNode=i,i._reactInternals=t,Fl(t,r,e,n),t=Bl(null,t,r,!0,s,n)):(t.tag=0,ae&&s&&Iu(t),Ge(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=l1(r),e=Ct(r,e),i){case 0:t=Il(null,t,r,e,n);break e;case 1:t=lf(null,t,r,e,n);break e;case 11:t=of(null,t,r,e,n);break e;case 14:t=af(null,t,r,Ct(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),Il(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),lf(e,t,r,i,n);case 3:e:{if(ng(t),e===null)throw Error(N(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Nm(e,t),vo(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=zr(Error(N(423)),t),t=uf(e,t,r,n,i);break e}else if(r!==i){i=zr(Error(N(424)),t),t=uf(e,t,r,n,i);break e}else for(ot=yn(t.stateNode.containerInfo.firstChild),at=t,ae=!0,jt=null,n=Am(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(br(),r===i){t=rn(e,t,n);break e}Ge(e,t,r,n)}t=t.child}return t;case 5:return Vm(t),e===null&&_l(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Vl(r,i)?o=null:s!==null&&Vl(r,s)&&(t.flags|=32),tg(e,t),Ge(e,t,o,n),t.child;case 6:return e===null&&_l(t),null;case 13:return rg(e,t,n);case 4:return qu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=_r(t,null,r,n):Ge(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),of(e,t,r,i,n);case 7:return Ge(e,t,t.pendingProps,n),t.child;case 8:return Ge(e,t,t.pendingProps.children,n),t.child;case 12:return Ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,ee(mo,r._currentValue),r._currentValue=o,s!==null)if(Dt(s.value,o)){if(s.children===i.children&&!et.current){t=rn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Xt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ml(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(N(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ml(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ge(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Vr(t,n),i=wt(i),r=r(i),t.flags|=1,Ge(e,t,r,n),t.child;case 14:return r=t.type,i=Ct(r,t.pendingProps),i=Ct(r.type,i),af(e,t,r,i,n);case 15:return Jm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),Hs(e,t),t.tag=1,tt(r)?(e=!0,fo(t)):e=!1,Vr(t,n),Qm(t,r,i),Fl(t,r,i,n),Bl(null,t,r,!0,e,n);case 19:return ig(e,t,n);case 22:return eg(e,t,n)}throw Error(N(156,t.tag))};function wg(e,t){return Gp(e,t)}function a1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,n,r){return new a1(e,t,n,r)}function uc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function l1(e){if(typeof e=="function")return uc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ju)return 11;if(e===Nu)return 14}return 2}function kn(e,t){var n=e.alternate;return n===null?(n=yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function qs(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")uc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case cr:return Kn(n.children,i,s,t);case Au:o=8,i|=8;break;case ll:return e=yt(12,n,t,i|2),e.elementType=ll,e.lanes=s,e;case ul:return e=yt(13,n,t,i),e.elementType=ul,e.lanes=s,e;case cl:return e=yt(19,n,t,i),e.elementType=cl,e.lanes=s,e;case Vp:return qo(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jp:o=10;break e;case Np:o=9;break e;case ju:o=11;break e;case Nu:o=14;break e;case un:o=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=yt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Kn(e,t,n,r){return e=yt(7,e,r,t),e.lanes=n,e}function qo(e,t,n,r){return e=yt(22,e,r,t),e.elementType=Vp,e.lanes=n,e.stateNode={isHidden:!1},e}function Ia(e,t,n){return e=yt(6,e,null,t),e.lanes=n,e}function Ba(e,t,n){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function u1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sa(0),this.expirationTimes=Sa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function cc(e,t,n,r,i,s,o,a,l){return e=new u1(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=yt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gu(s),e}function c1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ur,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Sg(e){if(!e)return Tn;e=e._reactInternals;e:{if(rr(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(tt(n))return Sm(e,n,t)}return t}function kg(e,t,n,r,i,s,o,a,l){return e=cc(n,r,!0,e,i,s,o,a,l),e.context=Sg(null),n=e.current,r=qe(),i=Sn(n),s=Xt(r,i),s.callback=t!=null?t:null,xn(n,s,i),e.current.lanes=i,ts(e,i,r),nt(e,r),e}function Yo(e,t,n,r){var i=t.current,s=qe(),o=Sn(i);return n=Sg(n),t.context===null?t.context=n:t.pendingContext=n,t=Xt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xn(i,t,o),e!==null&&(Rt(e,i,o,s),Us(e,i,o)),o}function Eo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function dc(e,t){xf(e,t),(e=e.alternate)&&xf(e,t)}function d1(){return null}var Pg=typeof reportError=="function"?reportError:function(e){console.error(e)};function fc(e){this._internalRoot=e}Qo.prototype.render=fc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Yo(e,t,null,null)};Qo.prototype.unmount=fc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zn(function(){Yo(null,e,null,null)}),t[tn]=null}};function Qo(e){this._internalRoot=e}Qo.prototype.unstable_scheduleHydration=function(e){if(e){var t=em();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dn.length&&t!==0&&t<dn[n].priority;n++);dn.splice(n,0,e),n===0&&nm(e)}};function hc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wf(){}function f1(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Eo(o);s.call(u)}}var o=kg(t,r,e,0,null,!1,!1,"",wf);return e._reactRootContainer=o,e[tn]=o.current,Bi(e.nodeType===8?e.parentNode:e),Zn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Eo(l);a.call(u)}}var l=cc(e,0,!1,null,null,!1,!1,"",wf);return e._reactRootContainer=l,e[tn]=l.current,Bi(e.nodeType===8?e.parentNode:e),Zn(function(){Yo(t,l,n,r)}),l}function Zo(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Eo(o);a.call(l)}}Yo(t,o,e,i)}else o=f1(n,t,e,i,r);return Eo(o)}Zp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fi(t.pendingLanes);n!==0&&(Du(t,n|1),nt(t,ye()),!(q&6)&&(Fr=ye()+500,jn()))}break;case 13:Zn(function(){var r=nn(e,1);if(r!==null){var i=qe();Rt(r,e,1,i)}}),dc(e,1)}};Lu=function(e){if(e.tag===13){var t=nn(e,134217728);if(t!==null){var n=qe();Rt(t,e,134217728,n)}dc(e,134217728)}};Jp=function(e){if(e.tag===13){var t=Sn(e),n=nn(e,t);if(n!==null){var r=qe();Rt(n,e,t,r)}dc(e,t)}};em=function(){return X};tm=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};wl=function(e,t,n){switch(t){case"input":if(hl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Uo(r);if(!i)throw Error(N(90));Dp(r),hl(r,i)}}}break;case"textarea":bp(e,n);break;case"select":t=n.value,t!=null&&Cr(e,!!n.multiple,t,!1)}};Bp=oc;Up=Zn;var h1={usingClientEntryPoint:!1,Events:[rs,pr,Uo,Op,Ip,oc]},si={findFiberByHostInstance:In,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},p1={bundleType:si.bundleType,version:si.version,rendererPackageName:si.rendererPackageName,rendererConfig:si.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Hp(e),e===null?null:e.stateNode},findFiberByHostInstance:si.findFiberByHostInstance||d1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Vs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vs.isDisabled&&Vs.supportsFiber)try{Fo=Vs.inject(p1),Ut=Vs}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h1;ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hc(t))throw Error(N(200));return c1(e,t,null,n)};ct.createRoot=function(e,t){if(!hc(e))throw Error(N(299));var n=!1,r="",i=Pg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=cc(e,1,!1,null,null,n,!1,r,i),e[tn]=t.current,Bi(e.nodeType===8?e.parentNode:e),new fc(t)};ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Hp(t),e=e===null?null:e.stateNode,e};ct.flushSync=function(e){return Zn(e)};ct.hydrate=function(e,t,n){if(!Xo(t))throw Error(N(200));return Zo(null,e,t,!0,n)};ct.hydrateRoot=function(e,t,n){if(!hc(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Pg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=kg(t,null,e,1,n!=null?n:null,i,!1,s,o),e[tn]=t.current,Bi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Qo(t)};ct.render=function(e,t,n){if(!Xo(t))throw Error(N(200));return Zo(null,e,t,!1,n)};ct.unmountComponentAtNode=function(e){if(!Xo(e))throw Error(N(40));return e._reactRootContainer?(Zn(function(){Zo(null,null,e,!1,function(){e._reactRootContainer=null,e[tn]=null})}),!0):!1};ct.unstable_batchedUpdates=oc;ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xo(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Zo(e,t,n,!1,r)};ct.version="18.3.1-next-f1338f8080-20240426";function Tg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tg)}catch(e){console.error(e)}}Tg(),Tp.exports=ct;var m1=Tp.exports,Sf=m1;ol.createRoot=Sf.createRoot,ol.hydrateRoot=Sf.hydrateRoot;const g1="modulepreload",v1=function(e){return"/"+e},kf={},ss=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=v1(l),l in kf)return;kf[l]=!0;const u=l.endsWith(".css"),c=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":g1,u||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),u)return new Promise((h,g)=>{f.addEventListener("load",h),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};function y1(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var n,r,i,s,o=[],a="",l=e.split("/");for(l[0]||l.shift();i=l.shift();)n=i[0],n==="*"?(o.push(n),a+=i[1]==="?"?"(?:/(.*))?":"/(.*)"):n===":"?(r=i.indexOf("?",1),s=i.indexOf(".",1),o.push(i.substring(1,~r?r:~s?s:i.length)),a+=~r&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(a+=(~r?"?":"")+"\\"+i.substring(s))):a+="/"+i;return{keys:o,pattern:new RegExp("^"+a+(t?"(?=$|/)":"/?$"),"i")}}var Eg={exports:{}},Cg={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Or=E;function x1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var w1=typeof Object.is=="function"?Object.is:x1,S1=Or.useState,k1=Or.useEffect,P1=Or.useLayoutEffect,T1=Or.useDebugValue;function E1(e,t){var n=t(),r=S1({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return P1(function(){i.value=n,i.getSnapshot=t,Ua(i)&&s({inst:i})},[e,n,t]),k1(function(){return Ua(i)&&s({inst:i}),e(function(){Ua(i)&&s({inst:i})})},[e]),T1(n),n}function Ua(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!w1(e,n)}catch{return!0}}function C1(e,t){return t()}var A1=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?C1:E1;Cg.useSyncExternalStore=Or.useSyncExternalStore!==void 0?Or.useSyncExternalStore:A1;Eg.exports=Cg;var j1=Eg.exports;const N1=i0.useInsertionEffect,V1=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",R1=V1?E.useLayoutEffect:E.useEffect,D1=N1||R1,Ag=e=>{const t=E.useRef([e,(...n)=>t[0](...n)]).current;return D1(()=>{t[0]=e}),t[1]},L1="popstate",pc="pushState",mc="replaceState",b1="hashchange",Pf=[L1,pc,mc,b1],_1=e=>{for(const t of Pf)addEventListener(t,e);return()=>{for(const t of Pf)removeEventListener(t,e)}},jg=(e,t)=>j1.useSyncExternalStore(_1,e,t),Tf=()=>location.search,M1=({ssrSearch:e}={})=>jg(Tf,e!=null?()=>e:Tf),Ef=()=>location.pathname,z1=({ssrPath:e}={})=>jg(Ef,e!=null?()=>e:Ef),F1=(e,{replace:t=!1,state:n=null}={})=>history[t?mc:pc](n,"",e),O1=(e={})=>[z1(e),F1],Cf=Symbol.for("wouter_v3");if(typeof history!="undefined"&&typeof window[Cf]=="undefined"){for(const e of[pc,mc]){const t=history[e];history[e]=function(){const n=t.apply(this,arguments),r=new Event(e);return r.arguments=arguments,dispatchEvent(r),n}}Object.defineProperty(window,Cf,{value:!0})}const I1=(e,t)=>t.toLowerCase().indexOf(e.toLowerCase())?"~"+t:t.slice(e.length)||"/",Ng=(e="")=>e==="/"?"":e,B1=(e,t)=>e[0]==="~"?e.slice(1):Ng(t)+e,U1=(e="",t)=>I1(Af(Ng(e)),Af(t)),Af=e=>{try{return decodeURI(e)}catch{return e}},Vg={hook:O1,searchHook:M1,parser:y1,base:"",ssrPath:void 0,ssrSearch:void 0,ssrContext:void 0,hrefs:e=>e,aroundNav:(e,t,n)=>e(t,n)},Rg=E.createContext(Vg),os=()=>E.useContext(Rg),Dg={},Lg=E.createContext(Dg),$1=()=>E.useContext(Lg),Jo=e=>{const[t,n]=e.hook(e);return[U1(e.base,t),Ag((r,i)=>e.aroundNav(n,B1(r,e.base),i))]},gc=()=>Jo(os()),bg=(e,t,n,r)=>{const{pattern:i,keys:s}=t instanceof RegExp?{keys:!1,pattern:t}:e(t||"*",r),o=i.exec(n)||[],[a,...l]=o;return a!==void 0?[!0,(()=>{const u=s!==!1?Object.fromEntries(s.map((f,h)=>[f,l[h]])):o.groups;let c={...l};return u&&Object.assign(c,u),c})(),...r?[a]:[]]:[!1,null]},_g=({children:e,...t})=>{var c,f,h,g,w,S,C,m,p;const n=os(),r=t.hook?Vg:n;let i=r;const[s,o=(c=t.ssrSearch)!=null?c:""]=(h=(f=t.ssrPath)==null?void 0:f.split("?"))!=null?h:[];s&&(t.ssrSearch=o,t.ssrPath=s),t.hrefs=(w=t.hrefs)!=null?w:(g=t.hook)==null?void 0:g.hrefs,t.searchHook=(C=t.searchHook)!=null?C:(S=t.hook)==null?void 0:S.searchHook;let a=E.useRef({}),l=a.current,u=l;for(let v in r){const P=v==="base"?r[v]+((m=t[v])!=null?m:""):(p=t[v])!=null?p:r[v];l===u&&P!==u[v]&&(a.current=u={...u}),u[v]=P,(P!==r[v]||P!==i[v])&&(i=u)}return E.createElement(Rg.Provider,{value:i,children:e})},jf=({children:e,component:t},n)=>t?E.createElement(t,{params:n}):typeof e=="function"?e(n):e,W1=e=>{let t=E.useRef(Dg);const n=t.current;return t.current=Object.keys(e).length!==Object.keys(n).length||Object.entries(e).some(([r,i])=>i!==n[r])?e:n},oi=({path:e,nest:t,match:n,...r})=>{const i=os(),[s]=Jo(i),[o,a,l]=n!=null?n:bg(i.parser,e,s,t),u=W1({...$1(),...a});if(!o)return null;const c=l?E.createElement(_g,{base:l},jf(r,u)):jf(r,u);return E.createElement(Lg.Provider,{value:u,children:c})},Jl=E.forwardRef((e,t)=>{const n=os(),[r,i]=Jo(n),{to:s="",href:o=s,onClick:a,asChild:l,children:u,className:c,replace:f,state:h,transition:g,...w}=e,S=Ag(m=>{m.ctrlKey||m.metaKey||m.altKey||m.shiftKey||m.button!==0||(a==null||a(m),m.defaultPrevented||(m.preventDefault(),i(o,e)))}),C=n.hrefs(o[0]==="~"?o.slice(1):n.base+o,n);return l&&E.isValidElement(u)?E.cloneElement(u,{onClick:S,href:C}):E.createElement("a",{...w,onClick:S,href:C,className:c!=null&&c.call?c(r===o):c,children:u,ref:t})}),Mg=e=>Array.isArray(e)?e.flatMap(t=>Mg(t&&t.type===E.Fragment?t.props.children:t)):[e],H1=({children:e,location:t})=>{const n=os(),[r]=Jo(n);for(const i of Mg(e)){let s=0;if(E.isValidElement(i)&&(s=bg(n.parser,i.props.path,t||r,i.props.nest))[0])return E.cloneElement(i,{match:s})}return null},vc=E.createContext({});function ir(e){const t=E.useRef(null);return t.current===null&&(t.current=e()),t.current}const ea=E.createContext(null),Ir=E.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"user"});class K1 extends E.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function G1({ children: e, isPresent: t }) {
   const n = E.useId(),
     r = E.useRef(null),
     i = E.useRef({ width: 0, height: 0, top: 0, left: 0 }),
     { nonce: s } = E.useContext(Ir);
   return (
     E.useInsertionEffect(() => {
       const { width: o, height: a, top: l, left: u } = i.current;
       if (t || !r.current || !o || !a) return;
       r.current.dataset.motionPopId = n;
       const c = document.createElement("style");
       return (
         s && (c.nonce = s),
         document.head.appendChild(c),
         c.sheet &&
           c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),
         () => {
           document.head.removeChild(c);
         }
       );
     }, [t]),
     d.jsx(K1, {
       isPresent: t,
       childRef: r,
       sizeRef: i,
       children: E.cloneElement(e, { ref: r }),
     })
   );
 }
 const q1 = ({
   children: e,
   initial: t,
   isPresent: n,
   onExitComplete: r,
   custom: i,
   presenceAffectsLayout: s,
   mode: o,
 }) => {
   const a = ir(Y1),
     l = E.useId(),
     u = E.useCallback(
       (f) => {
         a.set(f, !0);
         for (const h of a.values()) if (!h) return;
         r && r();
       },
       [a, r],
     ),
     c = E.useMemo(
       () => ({
         id: l,
         initial: t,
         isPresent: n,
         custom: i,
         onExitComplete: u,
         register: (f) => (a.set(f, !1), () => a.delete(f)),
       }),
       s ? [Math.random(), u] : [n, u],
     );
   return (
     E.useMemo(() => {
       a.forEach((f, h) => a.set(h, !1));
     }, [n]),
     E.useEffect(() => {
       !n && !a.size && r && r();
     }, [n]),
     o === "popLayout" && (e = d.jsx(G1, { isPresent: n, children: e })),
     d.jsx(ea.Provider, { value: c, children: e })
   );
 };
 function Y1() {
   return new Map();
 }
 function zg(e = !0) {
   const t = E.useContext(ea);
   if (t === null) return [!0, null];
   const { isPresent: n, onExitComplete: r, register: i } = t,
     s = E.useId();
   E.useEffect(() => {
     e && i(s);
   }, [e]);
   const o = E.useCallback(() => e && r && r(s), [s, r, e]);
   return !n && r ? [!1, o] : [!0];
 }
 const Rs = (e) => e.key || "";
 function Nf(e) {
   const t = [];
   return (
     E.Children.forEach(e, (n) => {
       E.isValidElement(n) && t.push(n);
     }),
     t
   );
 }
 const yc = typeof window != "undefined",
   ta = yc ? E.useLayoutEffect : E.useEffect,
   Fg = ({
     children: e,
     custom: t,
     initial: n = !0,
     onExitComplete: r,
     presenceAffectsLayout: i = !0,
     mode: s = "sync",
     propagate: o = !1,
   }) => {
     const [a, l] = zg(o),
       u = E.useMemo(() => Nf(e), [e]),
       c = o && !a ? [] : u.map(Rs),
       f = E.useRef(!0),
       h = E.useRef(u),
       g = ir(() => new Map()),
       [w, S] = E.useState(u),
       [C, m] = E.useState(u);
     ta(() => {
       ((f.current = !1), (h.current = u));
       for (let P = 0; P < C.length; P++) {
         const T = Rs(C[P]);
         c.includes(T) ? g.delete(T) : g.get(T) !== !0 && g.set(T, !1);
       }
     }, [C, c.length, c.join("-")]);
     const p = [];
     if (u !== w) {
       let P = [...u];
       for (let T = 0; T < C.length; T++) {
         const A = C[T],
           R = Rs(A);
         c.includes(R) || (P.splice(T, 0, A), p.push(A));
       }
       (s === "wait" && p.length && (P = p), m(Nf(P)), S(u));
       return;
     }
     const { forceRender: v } = E.useContext(vc);
     return d.jsx(d.Fragment, {
       children: C.map((P) => {
         const T = Rs(P),
           A = o && !a ? !1 : u === C || c.includes(T),
           R = () => {
             if (g.has(T)) g.set(T, !0);
             else return;
             let j = !0;
             (g.forEach(($) => {
               $ || (j = !1);
             }),
               j &&
                 (v == null || v(),
                 m(h.current),
                 o && (l == null || l()),
                 r && r()));
           };
         return d.jsx(
           q1,
           {
             isPresent: A,
             initial: !f.current || n ? void 0 : !1,
             custom: A ? void 0 : t,
             presenceAffectsLayout: i,
             mode: s,
             onExitComplete: A ? void 0 : R,
             children: P,
           },
           T,
         );
       }),
     });
   },
   Ye = (e) => e;
 let Q1 = Ye,
   Og = Ye;
 function xc(e) {
   let t;
   return () => (t === void 0 && (t = e()), t);
 }
 const Jn = (e, t, n) => {
     const r = t - e;
     return r === 0 ? 1 : (n - e) / r;
   },
   Zt = (e) => e * 1e3,
   Jt = (e) => e / 1e3,
   X1 = { useManualTiming: !1 };
 function Z1(e) {
   let t = new Set(),
     n = new Set(),
     r = !1,
     i = !1;
   const s = new WeakSet();
   let o = { delta: 0, timestamp: 0, isProcessing: !1 };
   function a(u) {
     (s.has(u) && (l.schedule(u), e()), u(o));
   }
   const l = {
     schedule: (u, c = !1, f = !1) => {
       const g = f && r ? t : n;
       return (c && s.add(u), g.has(u) || g.add(u), u);
     },
     cancel: (u) => {
       (n.delete(u), s.delete(u));
     },
     process: (u) => {
       if (((o = u), r)) {
         i = !0;
         return;
       }
       ((r = !0),
         ([t, n] = [n, t]),
         t.forEach(a),
         t.clear(),
         (r = !1),
         i && ((i = !1), l.process(u)));
     },
   };
   return l;
 }
 const Ds = [
     "read",
     "resolveKeyframes",
     "update",
     "preRender",
     "render",
     "postRender",
   ],
   J1 = 40;
 function Ig(e, t) {
   let n = !1,
     r = !0;
   const i = { delta: 0, timestamp: 0, isProcessing: !1 },
     s = () => (n = !0),
     o = Ds.reduce((m, p) => ((m[p] = Z1(s)), m), {}),
     {
       read: a,
       resolveKeyframes: l,
       update: u,
       preRender: c,
       render: f,
       postRender: h,
     } = o,
     g = () => {
       const m = performance.now();
       ((n = !1),
         (i.delta = r ? 1e3 / 60 : Math.max(Math.min(m - i.timestamp, J1), 1)),
         (i.timestamp = m),
         (i.isProcessing = !0),
         a.process(i),
         l.process(i),
         u.process(i),
         c.process(i),
         f.process(i),
         h.process(i),
         (i.isProcessing = !1),
         n && t && ((r = !1), e(g)));
     },
     w = () => {
       ((n = !0), (r = !0), i.isProcessing || e(g));
     };
   return {
     schedule: Ds.reduce((m, p) => {
       const v = o[p];
       return (
         (m[p] = (P, T = !1, A = !1) => (n || w(), v.schedule(P, T, A))),
         m
       );
     }, {}),
     cancel: (m) => {
       for (let p = 0; p < Ds.length; p++) o[Ds[p]].cancel(m);
     },
     state: i,
     steps: o,
   };
 }
 const {
     schedule: Y,
     cancel: Lt,
     state: Ce,
     steps: $a,
   } = Ig(
     typeof requestAnimationFrame != "undefined" ? requestAnimationFrame : Ye,
     !0,
   ),
   Bg = E.createContext({ strict: !1 }),
   Vf = {
     animation: [
       "animate",
       "variants",
       "whileHover",
       "whileTap",
       "exit",
       "whileInView",
       "whileFocus",
       "whileDrag",
     ],
     exit: ["exit"],
     drag: ["drag", "dragControls"],
     focus: ["whileFocus"],
     hover: ["whileHover", "onHoverStart", "onHoverEnd"],
     tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
     pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
     inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
     layout: ["layout", "layoutId"],
   },
   Br = {};
 for (const e in Vf) Br[e] = { isEnabled: (t) => Vf[e].some((n) => !!t[n]) };
 function ew(e) {
   for (const t in e) Br[t] = { ...Br[t], ...e[t] };
 }
 const tw = new Set([
   "animate",
   "exit",
   "variants",
   "initial",
   "style",
   "values",
   "variants",
   "transition",
   "transformTemplate",
   "custom",
   "inherit",
   "onBeforeLayoutMeasure",
   "onAnimationStart",
   "onAnimationComplete",
   "onUpdate",
   "onDragStart",
   "onDrag",
   "onDragEnd",
   "onMeasureDragConstraints",
   "onDirectionLock",
   "onDragTransitionEnd",
   "_dragX",
   "_dragY",
   "onHoverStart",
   "onHoverEnd",
   "onViewportEnter",
   "onViewportLeave",
   "globalTapTarget",
   "ignoreStrict",
   "viewport",
 ]);
 function Co(e) {
   return (
     e.startsWith("while") ||
     (e.startsWith("drag") && e !== "draggable") ||
     e.startsWith("layout") ||
     e.startsWith("onTap") ||
     e.startsWith("onPan") ||
     e.startsWith("onLayout") ||
     tw.has(e)
   );
 }
 let Ug = (e) => !Co(e);
 function $g(e) {
   e && (Ug = (t) => (t.startsWith("on") ? !Co(t) : e(t)));
 }
 try {
   $g(require("@emotion/is-prop-valid").default);
 } catch {}
 function nw(e, t, n) {
   const r = {};
   for (const i in e)
     (i === "values" && typeof e.values == "object") ||
       ((Ug(i) ||
         (n === !0 && Co(i)) ||
         (!t && !Co(i)) ||
         (e.draggable && i.startsWith("onDrag"))) &&
         (r[i] = e[i]));
   return r;
 }
 function rw({ children: e, isValidProp: t, ...n }) {
   (t && $g(t),
     (n = { ...E.useContext(Ir), ...n }),
     (n.isStatic = ir(() => n.isStatic)));
   const r = E.useMemo(
     () => n,
     [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion],
   );
   return d.jsx(Ir.Provider, { value: r, children: e });
 }
 function iw(e) {
   if (typeof Proxy == "undefined") return e;
   const t = new Map(),
     n = (...r) => e(...r);
   return new Proxy(n, {
     get: (r, i) =>
       i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
   });
 }
 const na = E.createContext({});
 function Qi(e) {
   return typeof e == "string" || Array.isArray(e);
 }
 function ra(e) {
   return e !== null && typeof e == "object" && typeof e.start == "function";
 }
 const wc = [
     "animate",
     "whileInView",
     "whileFocus",
     "whileHover",
     "whileTap",
     "whileDrag",
     "exit",
   ],
   Sc = ["initial", ...wc];
 function ia(e) {
   return ra(e.animate) || Sc.some((t) => Qi(e[t]));
 }
 function Wg(e) {
   return !!(ia(e) || e.variants);
 }
 function sw(e, t) {
   if (ia(e)) {
     const { initial: n, animate: r } = e;
     return {
       initial: n === !1 || Qi(n) ? n : void 0,
       animate: Qi(r) ? r : void 0,
     };
   }
   return e.inherit !== !1 ? t : {};
 }
 function ow(e) {
   const { initial: t, animate: n } = sw(e, E.useContext(na));
   return E.useMemo(() => ({ initial: t, animate: n }), [Rf(t), Rf(n)]);
 }
 function Rf(e) {
   return Array.isArray(e) ? e.join(" ") : e;
 }
 const aw = Symbol.for("motionComponentSymbol");
 function Sr(e) {
   return (
     e &&
     typeof e == "object" &&
     Object.prototype.hasOwnProperty.call(e, "current")
   );
 }
 function lw(e, t, n) {
   return E.useCallback(
     (r) => {
       (r && e.onMount && e.onMount(r),
         t && (r ? t.mount(r) : t.unmount()),
         n && (typeof n == "function" ? n(r) : Sr(n) && (n.current = r)));
     },
     [t],
   );
 }
 const kc = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
   uw = "framerAppearId",
   Hg = "data-" + kc(uw),
   { schedule: Pc } = Ig(queueMicrotask, !1),
   Kg = E.createContext({});
 function cw(e, t, n, r, i) {
   var s, o;
   const { visualElement: a } = E.useContext(na),
     l = E.useContext(Bg),
     u = E.useContext(ea),
     c = E.useContext(Ir).reducedMotion,
     f = E.useRef(null);
   ((r = r || l.renderer),
     !f.current &&
       r &&
       (f.current = r(e, {
         visualState: t,
         parent: a,
         props: n,
         presenceContext: u,
         blockInitialAnimation: u ? u.initial === !1 : !1,
         reducedMotionConfig: c,
       })));
   const h = f.current,
     g = E.useContext(Kg);
   h &&
     !h.projection &&
     i &&
     (h.type === "html" || h.type === "svg") &&
     dw(f.current, n, i, g);
   const w = E.useRef(!1);
   E.useInsertionEffect(() => {
     h && w.current && h.update(n, u);
   });
   const S = n[Hg],
     C = E.useRef(
       !!S &&
         !(
           !((s = window.MotionHandoffIsComplete) === null || s === void 0) &&
           s.call(window, S)
         ) &&
         ((o = window.MotionHasOptimisedAnimation) === null || o === void 0
           ? void 0
           : o.call(window, S)),
     );
   return (
     ta(() => {
       h &&
         ((w.current = !0),
         (window.MotionIsMounted = !0),
         h.updateFeatures(),
         Pc.render(h.render),
         C.current && h.animationState && h.animationState.animateChanges());
     }),
     E.useEffect(() => {
       h &&
         (!C.current && h.animationState && h.animationState.animateChanges(),
         C.current &&
           (queueMicrotask(() => {
             var m;
             (m = window.MotionHandoffMarkAsComplete) === null ||
               m === void 0 ||
               m.call(window, S);
           }),
           (C.current = !1)));
     }),
     h
   );
 }
 function dw(e, t, n, r) {
   const {
     layoutId: i,
     layout: s,
     drag: o,
     dragConstraints: a,
     layoutScroll: l,
     layoutRoot: u,
   } = t;
   ((e.projection = new n(
     e.latestValues,
     t["data-framer-portal-id"] ? void 0 : Gg(e.parent),
   )),
     e.projection.setOptions({
       layoutId: i,
       layout: s,
       alwaysMeasureLayout: !!o || (a && Sr(a)),
       visualElement: e,
       animationType: typeof s == "string" ? s : "both",
       initialPromotionConfig: r,
       layoutScroll: l,
       layoutRoot: u,
     }));
 }
 function Gg(e) {
   if (e) return e.options.allowProjection !== !1 ? e.projection : Gg(e.parent);
 }
 function fw({
   preloadedFeatures: e,
   createVisualElement: t,
   useRender: n,
   useVisualState: r,
   Component: i,
 }) {
   var s, o;
   e && ew(e);
   function a(u, c) {
     let f;
     const h = { ...E.useContext(Ir), ...u, layoutId: hw(u) },
       { isStatic: g } = h,
       w = ow(u),
       S = r(u, g);
     if (!g && yc) {
       pw();
       const C = mw(h);
       ((f = C.MeasureLayout),
         (w.visualElement = cw(i, S, h, t, C.ProjectionNode)));
     }
     return d.jsxs(na.Provider, {
       value: w,
       children: [
         f && w.visualElement
           ? d.jsx(f, { visualElement: w.visualElement, ...h })
           : null,
         n(i, u, lw(S, w.visualElement, c), S, g, w.visualElement),
       ],
     });
   }
   a.displayName = `motion.${typeof i == "string" ? i : `create(${(o = (s = i.displayName) !== null && s !== void 0 ? s : i.name) !== null && o !== void 0 ? o : ""})`}`;
   const l = E.forwardRef(a);
   return ((l[aw] = i), l);
 }
 function hw({ layoutId: e }) {
   const t = E.useContext(vc).id;
   return t && e !== void 0 ? t + "-" + e : e;
 }
 function pw(e, t) {
   E.useContext(Bg).strict;
 }
 function mw(e) {
   const { drag: t, layout: n } = Br;
   if (!t && !n) return {};
   const r = { ...t, ...n };
   return {
     MeasureLayout:
       (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
         ? r.MeasureLayout
         : void 0,
     ProjectionNode: r.ProjectionNode,
   };
 }
 const gw = [
   "animate",
   "circle",
   "defs",
   "desc",
   "ellipse",
   "g",
   "image",
   "line",
   "filter",
   "marker",
   "mask",
   "metadata",
   "path",
   "pattern",
   "polygon",
   "polyline",
   "rect",
   "stop",
   "switch",
   "symbol",
   "svg",
   "text",
   "tspan",
   "use",
   "view",
 ];
 function Tc(e) {
   return typeof e != "string" || e.includes("-")
     ? !1
     : !!(gw.indexOf(e) > -1 || /[A-Z]/u.test(e));
 }
 function Df(e) {
   const t = [{}, {}];
   return (
     e == null ||
       e.values.forEach((n, r) => {
         ((t[0][r] = n.get()), (t[1][r] = n.getVelocity()));
       }),
     t
   );
 }
 function Ec(e, t, n, r) {
   if (typeof t == "function") {
     const [i, s] = Df(r);
     t = t(n !== void 0 ? n : e.custom, i, s);
   }
   if (
     (typeof t == "string" && (t = e.variants && e.variants[t]),
     typeof t == "function")
   ) {
     const [i, s] = Df(r);
     t = t(n !== void 0 ? n : e.custom, i, s);
   }
   return t;
 }
 const eu = (e) => Array.isArray(e),
   vw = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
   yw = (e) => (eu(e) ? e[e.length - 1] || 0 : e),
   He = (e) => !!(e && e.getVelocity);
 function Ys(e) {
   const t = He(e) ? e.get() : e;
   return vw(t) ? t.toValue() : t;
 }
 function xw(
   { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
   r,
   i,
   s,
 ) {
   const o = { latestValues: ww(r, i, s, e), renderState: t() };
   return (
     n &&
       ((o.onMount = (a) => n({ props: r, current: a, ...o })),
       (o.onUpdate = (a) => n(a))),
     o
   );
 }
 const qg = (e) => (t, n) => {
   const r = E.useContext(na),
     i = E.useContext(ea),
     s = () => xw(e, t, r, i);
   return n ? s() : ir(s);
 };
 function ww(e, t, n, r) {
   const i = {},
     s = r(e, {});
   for (const h in s) i[h] = Ys(s[h]);
   let { initial: o, animate: a } = e;
   const l = ia(e),
     u = Wg(e);
   t &&
     u &&
     !l &&
     e.inherit !== !1 &&
     (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
   let c = n ? n.initial === !1 : !1;
   c = c || o === !1;
   const f = c ? a : o;
   if (f && typeof f != "boolean" && !ra(f)) {
     const h = Array.isArray(f) ? f : [f];
     for (let g = 0; g < h.length; g++) {
       const w = Ec(e, h[g]);
       if (w) {
         const { transitionEnd: S, transition: C, ...m } = w;
         for (const p in m) {
           let v = m[p];
           if (Array.isArray(v)) {
             const P = c ? v.length - 1 : 0;
             v = v[P];
           }
           v !== null && (i[p] = v);
         }
         for (const p in S) i[p] = S[p];
       }
     }
   }
   return i;
 }
 const Gr = [
     "transformPerspective",
     "x",
     "y",
     "z",
     "translateX",
     "translateY",
     "translateZ",
     "scale",
     "scaleX",
     "scaleY",
     "rotate",
     "rotateX",
     "rotateY",
     "rotateZ",
     "skew",
     "skewX",
     "skewY",
   ],
   sr = new Set(Gr),
   Yg = (e) => (t) => typeof t == "string" && t.startsWith(e),
   Qg = Yg("--"),
   Sw = Yg("var(--"),
   Cc = (e) => (Sw(e) ? kw.test(e.split("/*")[0].trim()) : !1),
   kw =
     /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
   Xg = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
   Kt = (e, t, n) => (n > t ? t : n < e ? e : n),
   qr = {
     test: (e) => typeof e == "number",
     parse: parseFloat,
     transform: (e) => e,
   },
   Xi = { ...qr, transform: (e) => Kt(0, 1, e) },
   Ls = { ...qr, default: 1 },
   as = (e) => ({
     test: (t) =>
       typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
     parse: parseFloat,
     transform: (t) => `${t}${e}`,
   }),
   an = as("deg"),
   Wt = as("%"),
   B = as("px"),
   Pw = as("vh"),
   Tw = as("vw"),
   Lf = {
     ...Wt,
     parse: (e) => Wt.parse(e) / 100,
     transform: (e) => Wt.transform(e * 100),
   },
   Ew = {
     borderWidth: B,
     borderTopWidth: B,
     borderRightWidth: B,
     borderBottomWidth: B,
     borderLeftWidth: B,
     borderRadius: B,
     radius: B,
     borderTopLeftRadius: B,
     borderTopRightRadius: B,
     borderBottomRightRadius: B,
     borderBottomLeftRadius: B,
     width: B,
     maxWidth: B,
     height: B,
     maxHeight: B,
     top: B,
     right: B,
     bottom: B,
     left: B,
     padding: B,
     paddingTop: B,
     paddingRight: B,
     paddingBottom: B,
     paddingLeft: B,
     margin: B,
     marginTop: B,
     marginRight: B,
     marginBottom: B,
     marginLeft: B,
     backgroundPositionX: B,
     backgroundPositionY: B,
   },
   Cw = {
     rotate: an,
     rotateX: an,
     rotateY: an,
     rotateZ: an,
     scale: Ls,
     scaleX: Ls,
     scaleY: Ls,
     scaleZ: Ls,
     skew: an,
     skewX: an,
     skewY: an,
     distance: B,
     translateX: B,
     translateY: B,
     translateZ: B,
     x: B,
     y: B,
     z: B,
     perspective: B,
     transformPerspective: B,
     opacity: Xi,
     originX: Lf,
     originY: Lf,
     originZ: B,
   },
   bf = { ...qr, transform: Math.round },
   Ac = {
     ...Ew,
     ...Cw,
     zIndex: bf,
     size: B,
     fillOpacity: Xi,
     strokeOpacity: Xi,
     numOctaves: bf,
   },
   Aw = {
     x: "translateX",
     y: "translateY",
     z: "translateZ",
     transformPerspective: "perspective",
   },
   jw = Gr.length;
 function Nw(e, t, n) {
   let r = "",
     i = !0;
   for (let s = 0; s < jw; s++) {
     const o = Gr[s],
       a = e[o];
     if (a === void 0) continue;
     let l = !0;
     if (
       (typeof a == "number"
         ? (l = a === (o.startsWith("scale") ? 1 : 0))
         : (l = parseFloat(a) === 0),
       !l || n)
     ) {
       const u = Xg(a, Ac[o]);
       if (!l) {
         i = !1;
         const c = Aw[o] || o;
         r += `${c}(${u}) `;
       }
       n && (t[o] = u);
     }
   }
   return ((r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r);
 }
 function jc(e, t, n) {
   const { style: r, vars: i, transformOrigin: s } = e;
   let o = !1,
     a = !1;
   for (const l in t) {
     const u = t[l];
     if (sr.has(l)) {
       o = !0;
       continue;
     } else if (Qg(l)) {
       i[l] = u;
       continue;
     } else {
       const c = Xg(u, Ac[l]);
       l.startsWith("origin") ? ((a = !0), (s[l] = c)) : (r[l] = c);
     }
   }
   if (
     (t.transform ||
       (o || n
         ? (r.transform = Nw(t, e.transform, n))
         : r.transform && (r.transform = "none")),
     a)
   ) {
     const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = s;
     r.transformOrigin = `${l} ${u} ${c}`;
   }
 }
 const Vw = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
   Rw = { offset: "strokeDashoffset", array: "strokeDasharray" };
 function Dw(e, t, n = 1, r = 0, i = !0) {
   e.pathLength = 1;
   const s = i ? Vw : Rw;
   e[s.offset] = B.transform(-r);
   const o = B.transform(t),
     a = B.transform(n);
   e[s.array] = `${o} ${a}`;
 }
 function _f(e, t, n) {
   return typeof e == "string" ? e : B.transform(t + n * e);
 }
 function Lw(e, t, n) {
   const r = _f(t, e.x, e.width),
     i = _f(n, e.y, e.height);
   return `${r} ${i}`;
 }
 function Nc(
   e,
   {
     attrX: t,
     attrY: n,
     attrScale: r,
     originX: i,
     originY: s,
     pathLength: o,
     pathSpacing: a = 1,
     pathOffset: l = 0,
     ...u
   },
   c,
   f,
 ) {
   if ((jc(e, u, f), c)) {
     e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
     return;
   }
   ((e.attrs = e.style), (e.style = {}));
   const { attrs: h, style: g, dimensions: w } = e;
   (h.transform && (w && (g.transform = h.transform), delete h.transform),
     w &&
       (i !== void 0 || s !== void 0 || g.transform) &&
       (g.transformOrigin = Lw(
         w,
         i !== void 0 ? i : 0.5,
         s !== void 0 ? s : 0.5,
       )),
     t !== void 0 && (h.x = t),
     n !== void 0 && (h.y = n),
     r !== void 0 && (h.scale = r),
     o !== void 0 && Dw(h, o, a, l, !1));
 }
 const Vc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
   Zg = () => ({ ...Vc(), attrs: {} }),
   Rc = (e) => typeof e == "string" && e.toLowerCase() === "svg";
 function Jg(e, { style: t, vars: n }, r, i) {
   Object.assign(e.style, t, i && i.getProjectionStyles(r));
   for (const s in n) e.style.setProperty(s, n[s]);
 }
 const ev = new Set([
   "baseFrequency",
   "diffuseConstant",
   "kernelMatrix",
   "kernelUnitLength",
   "keySplines",
   "keyTimes",
   "limitingConeAngle",
   "markerHeight",
   "markerWidth",
   "numOctaves",
   "targetX",
   "targetY",
   "surfaceScale",
   "specularConstant",
   "specularExponent",
   "stdDeviation",
   "tableValues",
   "viewBox",
   "gradientTransform",
   "pathLength",
   "startOffset",
   "textLength",
   "lengthAdjust",
 ]);
 function tv(e, t, n, r) {
   Jg(e, t, void 0, r);
   for (const i in t.attrs) e.setAttribute(ev.has(i) ? i : kc(i), t.attrs[i]);
 }
 const Ao = {};
 function bw(e) {
   Object.assign(Ao, e);
 }
 function nv(e, { layout: t, layoutId: n }) {
   return (
     sr.has(e) ||
     e.startsWith("origin") ||
     ((t || n !== void 0) && (!!Ao[e] || e === "opacity"))
   );
 }
 function Dc(e, t, n) {
   var r;
   const { style: i } = e,
     s = {};
   for (const o in i)
     (He(i[o]) ||
       (t.style && He(t.style[o])) ||
       nv(o, e) ||
       ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
         ? void 0
         : r.liveStyle) !== void 0) &&
       (s[o] = i[o]);
   return s;
 }
 function rv(e, t, n) {
   const r = Dc(e, t, n);
   for (const i in e)
     if (He(e[i]) || He(t[i])) {
       const s =
         Gr.indexOf(i) !== -1
           ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
           : i;
       r[s] = e[i];
     }
   return r;
 }
 function _w(e, t) {
   try {
     t.dimensions =
       typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
   } catch {
     t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
   }
 }
 const Mf = ["x", "y", "width", "height", "cx", "cy", "r"],
   Mw = {
     useVisualState: qg({
       scrapeMotionValuesFromProps: rv,
       createRenderState: Zg,
       onUpdate: ({
         props: e,
         prevProps: t,
         current: n,
         renderState: r,
         latestValues: i,
       }) => {
         if (!n) return;
         let s = !!e.drag;
         if (!s) {
           for (const a in i)
             if (sr.has(a)) {
               s = !0;
               break;
             }
         }
         if (!s) return;
         let o = !t;
         if (t)
           for (let a = 0; a < Mf.length; a++) {
             const l = Mf[a];
             e[l] !== t[l] && (o = !0);
           }
         o &&
           Y.read(() => {
             (_w(n, r),
               Y.render(() => {
                 (Nc(r, i, Rc(n.tagName), e.transformTemplate), tv(n, r));
               }));
           });
       },
     }),
   },
   zw = {
     useVisualState: qg({
       scrapeMotionValuesFromProps: Dc,
       createRenderState: Vc,
     }),
   };
 function iv(e, t, n) {
   for (const r in t) !He(t[r]) && !nv(r, n) && (e[r] = t[r]);
 }
 function Fw({ transformTemplate: e }, t) {
   return E.useMemo(() => {
     const n = Vc();
     return (jc(n, t, e), Object.assign({}, n.vars, n.style));
   }, [t]);
 }
 function Ow(e, t) {
   const n = e.style || {},
     r = {};
   return (iv(r, n, e), Object.assign(r, Fw(e, t)), r);
 }
 function Iw(e, t) {
   const n = {},
     r = Ow(e, t);
   return (
     e.drag &&
       e.dragListener !== !1 &&
       ((n.draggable = !1),
       (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
       (r.touchAction =
         e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
     e.tabIndex === void 0 &&
       (e.onTap || e.onTapStart || e.whileTap) &&
       (n.tabIndex = 0),
     (n.style = r),
     n
   );
 }
 function Bw(e, t, n, r) {
   const i = E.useMemo(() => {
     const s = Zg();
     return (
       Nc(s, t, Rc(r), e.transformTemplate),
       { ...s.attrs, style: { ...s.style } }
     );
   }, [t]);
   if (e.style) {
     const s = {};
     (iv(s, e.style, e), (i.style = { ...s, ...i.style }));
   }
   return i;
 }
 function Uw(e = !1) {
   return (n, r, i, { latestValues: s }, o) => {
     const l = (Tc(n) ? Bw : Iw)(r, s, o, n),
       u = nw(r, typeof n == "string", e),
       c = n !== E.Fragment ? { ...u, ...l, ref: i } : {},
       { children: f } = r,
       h = E.useMemo(() => (He(f) ? f.get() : f), [f]);
     return E.createElement(n, { ...c, children: h });
   };
 }
 function $w(e, t) {
   return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
     const o = {
       ...(Tc(r) ? Mw : zw),
       preloadedFeatures: e,
       useRender: Uw(i),
       createVisualElement: t,
       Component: r,
     };
     return fw(o);
   };
 }
 function sv(e, t) {
   if (!Array.isArray(t)) return !1;
   const n = t.length;
   if (n !== e.length) return !1;
   for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
   return !0;
 }
 function sa(e, t, n) {
   const r = e.getProps();
   return Ec(r, t, n !== void 0 ? n : r.custom, e);
 }
 const ov = xc(() => window.ScrollTimeline !== void 0);
 class Ww {
   constructor(t) {
     ((this.stop = () => this.runAll("stop")),
       (this.animations = t.filter(Boolean)));
   }
   get finished() {
     return Promise.all(
       this.animations.map((t) => ("finished" in t ? t.finished : t)),
     );
   }
   getAll(t) {
     return this.animations[0][t];
   }
   setAll(t, n) {
     for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
   }
   attachTimeline(t, n) {
     const r = this.animations.map((i) => {
       if (ov() && i.attachTimeline) return i.attachTimeline(t);
       if (typeof n == "function") return n(i);
     });
     return () => {
       r.forEach((i, s) => {
         (i && i(), this.animations[s].stop());
       });
     };
   }
   get time() {
     return this.getAll("time");
   }
   set time(t) {
     this.setAll("time", t);
   }
   get speed() {
     return this.getAll("speed");
   }
   set speed(t) {
     this.setAll("speed", t);
   }
   get startTime() {
     return this.getAll("startTime");
   }
   get duration() {
     let t = 0;
     for (let n = 0; n < this.animations.length; n++)
       t = Math.max(t, this.animations[n].duration);
     return t;
   }
   runAll(t) {
     this.animations.forEach((n) => n[t]());
   }
   flatten() {
     this.runAll("flatten");
   }
   play() {
     this.runAll("play");
   }
   pause() {
     this.runAll("pause");
   }
   cancel() {
     this.runAll("cancel");
   }
   complete() {
     this.runAll("complete");
   }
 }
 class Hw extends Ww {
   then(t, n) {
     return Promise.all(this.animations).then(t).catch(n);
   }
 }
 function Lc(e, t) {
   return e ? e[t] || e.default || e : void 0;
 }
 const tu = 2e4;
 function av(e) {
   let t = 0;
   const n = 50;
   let r = e.next(t);
   for (; !r.done && t < tu; ) ((t += n), (r = e.next(t)));
   return t >= tu ? 1 / 0 : t;
 }
 function bc(e) {
   return typeof e == "function";
 }
 function zf(e, t) {
   ((e.timeline = t), (e.onfinish = null));
 }
 const _c = (e) => Array.isArray(e) && typeof e[0] == "number",
   Kw = { linearEasing: void 0 };
 function Gw(e, t) {
   const n = xc(e);
   return () => {
     var r;
     return (r = Kw[t]) !== null && r !== void 0 ? r : n();
   };
 }
 const jo = Gw(() => {
     try {
       document
         .createElement("div")
         .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
     } catch {
       return !1;
     }
     return !0;
   }, "linearEasing"),
   lv = (e, t, n = 10) => {
     let r = "";
     const i = Math.max(Math.round(t / n), 2);
     for (let s = 0; s < i; s++) r += e(Jn(0, i - 1, s)) + ", ";
     return `linear(${r.substring(0, r.length - 2)})`;
   };
 function uv(e) {
   return !!(
     (typeof e == "function" && jo()) ||
     !e ||
     (typeof e == "string" && (e in nu || jo())) ||
     _c(e) ||
     (Array.isArray(e) && e.every(uv))
   );
 }
 const pi = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
   nu = {
     linear: "linear",
     ease: "ease",
     easeIn: "ease-in",
     easeOut: "ease-out",
     easeInOut: "ease-in-out",
     circIn: pi([0, 0.65, 0.55, 1]),
     circOut: pi([0.55, 0, 1, 0.45]),
     backIn: pi([0.31, 0.01, 0.66, -0.59]),
     backOut: pi([0.33, 1.53, 0.69, 0.99]),
   };
 function cv(e, t) {
   if (e)
     return typeof e == "function" && jo()
       ? lv(e, t)
       : _c(e)
         ? pi(e)
         : Array.isArray(e)
           ? e.map((n) => cv(n, t) || nu.easeOut)
           : nu[e];
 }
 const Tt = { x: !1, y: !1 };
 function dv() {
   return Tt.x || Tt.y;
 }
 function fv(e, t, n) {
   var r;
   if (e instanceof Element) return [e];
   if (typeof e == "string") {
     let i = document;
     const s =
       (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
     return s ? Array.from(s) : [];
   }
   return Array.from(e);
 }
 function hv(e, t) {
   const n = fv(e),
     r = new AbortController(),
     i = { passive: !0, ...t, signal: r.signal };
   return [n, i, () => r.abort()];
 }
 function Ff(e) {
   return (t) => {
     t.pointerType === "touch" || dv() || e(t);
   };
 }
 function qw(e, t, n = {}) {
   const [r, i, s] = hv(e, n),
     o = Ff((a) => {
       const { target: l } = a,
         u = t(a);
       if (typeof u != "function" || !l) return;
       const c = Ff((f) => {
         (u(f), l.removeEventListener("pointerleave", c));
       });
       l.addEventListener("pointerleave", c, i);
     });
   return (
     r.forEach((a) => {
       a.addEventListener("pointerenter", o, i);
     }),
     s
   );
 }
 const pv = (e, t) => (t ? (e === t ? !0 : pv(e, t.parentElement)) : !1),
   Mc = (e) =>
     e.pointerType === "mouse"
       ? typeof e.button != "number" || e.button <= 0
       : e.isPrimary !== !1,
   Yw = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
 function Qw(e) {
   return Yw.has(e.tagName) || e.tabIndex !== -1;
 }
 const mi = new WeakSet();
 function Of(e) {
   return (t) => {
     t.key === "Enter" && e(t);
   };
 }
 function Wa(e, t) {
   e.dispatchEvent(
     new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
   );
 }
 const Xw = (e, t) => {
   const n = e.currentTarget;
   if (!n) return;
   const r = Of(() => {
     if (mi.has(n)) return;
     Wa(n, "down");
     const i = Of(() => {
         Wa(n, "up");
       }),
       s = () => Wa(n, "cancel");
     (n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t));
   });
   (n.addEventListener("keydown", r, t),
     n.addEventListener("blur", () => n.removeEventListener("keydown", r), t));
 };
 function If(e) {
   return Mc(e) && !dv();
 }
 function Zw(e, t, n = {}) {
   const [r, i, s] = hv(e, n),
     o = (a) => {
       const l = a.currentTarget;
       if (!If(a) || mi.has(l)) return;
       mi.add(l);
       const u = t(a),
         c = (g, w) => {
           (window.removeEventListener("pointerup", f),
             window.removeEventListener("pointercancel", h),
             !(!If(g) || !mi.has(l)) &&
               (mi.delete(l), typeof u == "function" && u(g, { success: w })));
         },
         f = (g) => {
           c(g, n.useGlobalTarget || pv(l, g.target));
         },
         h = (g) => {
           c(g, !1);
         };
       (window.addEventListener("pointerup", f, i),
         window.addEventListener("pointercancel", h, i));
     };
   return (
     r.forEach((a) => {
       (!Qw(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0),
         (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, i),
         a.addEventListener("focus", (u) => Xw(u, i), i));
     }),
     s
   );
 }
 function Jw(e) {
   return e === "x" || e === "y"
     ? Tt[e]
       ? null
       : ((Tt[e] = !0),
         () => {
           Tt[e] = !1;
         })
     : Tt.x || Tt.y
       ? null
       : ((Tt.x = Tt.y = !0),
         () => {
           Tt.x = Tt.y = !1;
         });
 }
 const mv = new Set([
   "width",
   "height",
   "top",
   "left",
   "right",
   "bottom",
   ...Gr,
 ]);
 let Qs;
 function eS() {
   Qs = void 0;
 }
 const Ht = {
   now: () => (
     Qs === void 0 &&
       Ht.set(
         Ce.isProcessing || X1.useManualTiming
           ? Ce.timestamp
           : performance.now(),
       ),
     Qs
   ),
   set: (e) => {
     ((Qs = e), queueMicrotask(eS));
   },
 };
 function zc(e, t) {
   e.indexOf(t) === -1 && e.push(t);
 }
 function Fc(e, t) {
   const n = e.indexOf(t);
   n > -1 && e.splice(n, 1);
 }
 class Oc {
   constructor() {
     this.subscriptions = [];
   }
   add(t) {
     return (zc(this.subscriptions, t), () => Fc(this.subscriptions, t));
   }
   notify(t, n, r) {
     const i = this.subscriptions.length;
     if (i)
       if (i === 1) this.subscriptions[0](t, n, r);
       else
         for (let s = 0; s < i; s++) {
           const o = this.subscriptions[s];
           o && o(t, n, r);
         }
   }
   getSize() {
     return this.subscriptions.length;
   }
   clear() {
     this.subscriptions.length = 0;
   }
 }
 function Ic(e, t) {
   return t ? e * (1e3 / t) : 0;
 }
 const Bf = 30,
   tS = (e) => !isNaN(parseFloat(e)),
   Ci = { current: void 0 };
 class nS {
   constructor(t, n = {}) {
     ((this.version = "11.18.2"),
       (this.canTrackVelocity = null),
       (this.events = {}),
       (this.updateAndNotify = (r, i = !0) => {
         const s = Ht.now();
         (this.updatedAt !== s && this.setPrevFrameValue(),
           (this.prev = this.current),
           this.setCurrent(r),
           this.current !== this.prev &&
             this.events.change &&
             this.events.change.notify(this.current),
           i &&
             this.events.renderRequest &&
             this.events.renderRequest.notify(this.current));
       }),
       (this.hasAnimated = !1),
       this.setCurrent(t),
       (this.owner = n.owner));
   }
   setCurrent(t) {
     ((this.current = t),
       (this.updatedAt = Ht.now()),
       this.canTrackVelocity === null &&
         t !== void 0 &&
         (this.canTrackVelocity = tS(this.current)));
   }
   setPrevFrameValue(t = this.current) {
     ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
   }
   onChange(t) {
     return this.on("change", t);
   }
   on(t, n) {
     this.events[t] || (this.events[t] = new Oc());
     const r = this.events[t].add(n);
     return t === "change"
       ? () => {
           (r(),
             Y.read(() => {
               this.events.change.getSize() || this.stop();
             }));
         }
       : r;
   }
   clearListeners() {
     for (const t in this.events) this.events[t].clear();
   }
   attach(t, n) {
     ((this.passiveEffect = t), (this.stopPassiveEffect = n));
   }
   set(t, n = !0) {
     !n || !this.passiveEffect
       ? this.updateAndNotify(t, n)
       : this.passiveEffect(t, this.updateAndNotify);
   }
   setWithVelocity(t, n, r) {
     (this.set(n),
       (this.prev = void 0),
       (this.prevFrameValue = t),
       (this.prevUpdatedAt = this.updatedAt - r));
   }
   jump(t, n = !0) {
     (this.updateAndNotify(t),
       (this.prev = t),
       (this.prevUpdatedAt = this.prevFrameValue = void 0),
       n && this.stop(),
       this.stopPassiveEffect && this.stopPassiveEffect());
   }
   get() {
     return (Ci.current && Ci.current.push(this), this.current);
   }
   getPrevious() {
     return this.prev;
   }
   getVelocity() {
     const t = Ht.now();
     if (
       !this.canTrackVelocity ||
       this.prevFrameValue === void 0 ||
       t - this.updatedAt > Bf
     )
       return 0;
     const n = Math.min(this.updatedAt - this.prevUpdatedAt, Bf);
     return Ic(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
   }
   start(t) {
     return (
       this.stop(),
       new Promise((n) => {
         ((this.hasAnimated = !0),
           (this.animation = t(n)),
           this.events.animationStart && this.events.animationStart.notify());
       }).then(() => {
         (this.events.animationComplete &&
           this.events.animationComplete.notify(),
           this.clearAnimation());
       })
     );
   }
   stop() {
     (this.animation &&
       (this.animation.stop(),
       this.events.animationCancel && this.events.animationCancel.notify()),
       this.clearAnimation());
   }
   isAnimating() {
     return !!this.animation;
   }
   clearAnimation() {
     delete this.animation;
   }
   destroy() {
     (this.clearListeners(),
       this.stop(),
       this.stopPassiveEffect && this.stopPassiveEffect());
   }
 }
 function Bt(e, t) {
   return new nS(e, t);
 }
 function rS(e, t, n) {
   e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Bt(n));
 }
 function iS(e, t) {
   const n = sa(e, t);
   let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
   s = { ...s, ...r };
   for (const o in s) {
     const a = yw(s[o]);
     rS(e, o, a);
   }
 }
 function sS(e) {
   return !!(He(e) && e.add);
 }
 function ru(e, t) {
   const n = e.getValue("willChange");
   if (sS(n)) return n.add(t);
 }
 function gv(e) {
   return e.props[Hg];
 }
 const vv = (e, t, n) =>
     (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
   oS = 1e-7,
   aS = 12;
 function lS(e, t, n, r, i) {
   let s,
     o,
     a = 0;
   do ((o = t + (n - t) / 2), (s = vv(o, r, i) - e), s > 0 ? (n = o) : (t = o));
   while (Math.abs(s) > oS && ++a < aS);
   return o;
 }
 function ls(e, t, n, r) {
   if (e === t && n === r) return Ye;
   const i = (s) => lS(s, 0, 1, e, n);
   return (s) => (s === 0 || s === 1 ? s : vv(i(s), t, r));
 }
 const yv = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
   xv = (e) => (t) => 1 - e(1 - t),
   wv = ls(0.33, 1.53, 0.69, 0.99),
   Bc = xv(wv),
   Sv = yv(Bc),
   kv = (e) =>
     (e *= 2) < 1 ? 0.5 * Bc(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
   Uc = (e) => 1 - Math.sin(Math.acos(e)),
   Pv = xv(Uc),
   Tv = yv(Uc),
   Ev = (e) => /^0[^.\s]+$/u.test(e);
 function uS(e) {
   return typeof e == "number"
     ? e === 0
     : e !== null
       ? e === "none" || e === "0" || Ev(e)
       : !0;
 }
 const Ai = (e) => Math.round(e * 1e5) / 1e5,
   $c = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
 function cS(e) {
   return e == null;
 }
 const dS =
     /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
   Wc = (e, t) => (n) =>
     !!(
       (typeof n == "string" && dS.test(n) && n.startsWith(e)) ||
       (t && !cS(n) && Object.prototype.hasOwnProperty.call(n, t))
     ),
   Cv = (e, t, n) => (r) => {
     if (typeof r != "string") return r;
     const [i, s, o, a] = r.match($c);
     return {
       [e]: parseFloat(i),
       [t]: parseFloat(s),
       [n]: parseFloat(o),
       alpha: a !== void 0 ? parseFloat(a) : 1,
     };
   },
   fS = (e) => Kt(0, 255, e),
   Ha = { ...qr, transform: (e) => Math.round(fS(e)) },
   $n = {
     test: Wc("rgb", "red"),
     parse: Cv("red", "green", "blue"),
     transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
       "rgba(" +
       Ha.transform(e) +
       ", " +
       Ha.transform(t) +
       ", " +
       Ha.transform(n) +
       ", " +
       Ai(Xi.transform(r)) +
       ")",
   };
 function hS(e) {
   let t = "",
     n = "",
     r = "",
     i = "";
   return (
     e.length > 5
       ? ((t = e.substring(1, 3)),
         (n = e.substring(3, 5)),
         (r = e.substring(5, 7)),
         (i = e.substring(7, 9)))
       : ((t = e.substring(1, 2)),
         (n = e.substring(2, 3)),
         (r = e.substring(3, 4)),
         (i = e.substring(4, 5)),
         (t += t),
         (n += n),
         (r += r),
         (i += i)),
     {
       red: parseInt(t, 16),
       green: parseInt(n, 16),
       blue: parseInt(r, 16),
       alpha: i ? parseInt(i, 16) / 255 : 1,
     }
   );
 }
 const iu = { test: Wc("#"), parse: hS, transform: $n.transform },
   kr = {
     test: Wc("hsl", "hue"),
     parse: Cv("hue", "saturation", "lightness"),
     transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
       "hsla(" +
       Math.round(e) +
       ", " +
       Wt.transform(Ai(t)) +
       ", " +
       Wt.transform(Ai(n)) +
       ", " +
       Ai(Xi.transform(r)) +
       ")",
   },
   Ue = {
     test: (e) => $n.test(e) || iu.test(e) || kr.test(e),
     parse: (e) =>
       $n.test(e) ? $n.parse(e) : kr.test(e) ? kr.parse(e) : iu.parse(e),
     transform: (e) =>
       typeof e == "string"
         ? e
         : e.hasOwnProperty("red")
           ? $n.transform(e)
           : kr.transform(e),
   },
   pS =
     /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
 function mS(e) {
   var t, n;
   return (
     isNaN(e) &&
     typeof e == "string" &&
     (((t = e.match($c)) === null || t === void 0 ? void 0 : t.length) || 0) +
       (((n = e.match(pS)) === null || n === void 0 ? void 0 : n.length) || 0) >
       0
   );
 }
 const Av = "number",
   jv = "color",
   gS = "var",
   vS = "var(",
   Uf = "${}",
   yS =
     /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
 function Zi(e) {
   const t = e.toString(),
     n = [],
     r = { color: [], number: [], var: [] },
     i = [];
   let s = 0;
   const a = t
     .replace(
       yS,
       (l) => (
         Ue.test(l)
           ? (r.color.push(s), i.push(jv), n.push(Ue.parse(l)))
           : l.startsWith(vS)
             ? (r.var.push(s), i.push(gS), n.push(l))
             : (r.number.push(s), i.push(Av), n.push(parseFloat(l))),
         ++s,
         Uf
       ),
     )
     .split(Uf);
   return { values: n, split: a, indexes: r, types: i };
 }
 function Nv(e) {
   return Zi(e).values;
 }
 function Vv(e) {
   const { split: t, types: n } = Zi(e),
     r = t.length;
   return (i) => {
     let s = "";
     for (let o = 0; o < r; o++)
       if (((s += t[o]), i[o] !== void 0)) {
         const a = n[o];
         a === Av
           ? (s += Ai(i[o]))
           : a === jv
             ? (s += Ue.transform(i[o]))
             : (s += i[o]);
       }
     return s;
   };
 }
 const xS = (e) => (typeof e == "number" ? 0 : e);
 function wS(e) {
   const t = Nv(e);
   return Vv(e)(t.map(xS));
 }
 const En = {
     test: mS,
     parse: Nv,
     createTransformer: Vv,
     getAnimatableNone: wS,
   },
   SS = new Set(["brightness", "contrast", "saturate", "opacity"]);
 function kS(e) {
   const [t, n] = e.slice(0, -1).split("(");
   if (t === "drop-shadow") return e;
   const [r] = n.match($c) || [];
   if (!r) return e;
   const i = n.replace(r, "");
   let s = SS.has(t) ? 1 : 0;
   return (r !== n && (s *= 100), t + "(" + s + i + ")");
 }
 const PS = /\b([a-z-]*)\(.*?\)/gu,
   su = {
     ...En,
     getAnimatableNone: (e) => {
       const t = e.match(PS);
       return t ? t.map(kS).join(" ") : e;
     },
   },
   TS = {
     ...Ac,
     color: Ue,
     backgroundColor: Ue,
     outlineColor: Ue,
     fill: Ue,
     stroke: Ue,
     borderColor: Ue,
     borderTopColor: Ue,
     borderRightColor: Ue,
     borderBottomColor: Ue,
     borderLeftColor: Ue,
     filter: su,
     WebkitFilter: su,
   },
   Hc = (e) => TS[e];
 function Rv(e, t) {
   let n = Hc(e);
   return (
     n !== su && (n = En),
     n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
   );
 }
 const ES = new Set(["auto", "none", "0"]);
 function CS(e, t, n) {
   let r = 0,
     i;
   for (; r < e.length && !i; ) {
     const s = e[r];
     (typeof s == "string" && !ES.has(s) && Zi(s).values.length && (i = e[r]),
       r++);
   }
   if (i && n) for (const s of t) e[s] = Rv(n, i);
 }
 const $f = (e) => e === qr || e === B,
   Wf = (e, t) => parseFloat(e.split(", ")[t]),
   Hf =
     (e, t) =>
     (n, { transform: r }) => {
       if (r === "none" || !r) return 0;
       const i = r.match(/^matrix3d\((.+)\)$/u);
       if (i) return Wf(i[1], t);
       {
         const s = r.match(/^matrix\((.+)\)$/u);
         return s ? Wf(s[1], e) : 0;
       }
     },
   AS = new Set(["x", "y", "z"]),
   jS = Gr.filter((e) => !AS.has(e));
 function NS(e) {
   const t = [];
   return (
     jS.forEach((n) => {
       const r = e.getValue(n);
       r !== void 0 &&
         (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
     }),
     t
   );
 }
 const Ur = {
   width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
     e.max - e.min - parseFloat(t) - parseFloat(n),
   height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
     e.max - e.min - parseFloat(t) - parseFloat(n),
   top: (e, { top: t }) => parseFloat(t),
   left: (e, { left: t }) => parseFloat(t),
   bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
   right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
   x: Hf(4, 13),
   y: Hf(5, 14),
 };
 Ur.translateX = Ur.x;
 Ur.translateY = Ur.y;
 const Gn = new Set();
 let ou = !1,
   au = !1;
 function Dv() {
   if (au) {
     const e = Array.from(Gn).filter((r) => r.needsMeasurement),
       t = new Set(e.map((r) => r.element)),
       n = new Map();
     (t.forEach((r) => {
       const i = NS(r);
       i.length && (n.set(r, i), r.render());
     }),
       e.forEach((r) => r.measureInitialState()),
       t.forEach((r) => {
         r.render();
         const i = n.get(r);
         i &&
           i.forEach(([s, o]) => {
             var a;
             (a = r.getValue(s)) === null || a === void 0 || a.set(o);
           });
       }),
       e.forEach((r) => r.measureEndState()),
       e.forEach((r) => {
         r.suspendedScrollY !== void 0 &&
           window.scrollTo(0, r.suspendedScrollY);
       }));
   }
   ((au = !1), (ou = !1), Gn.forEach((e) => e.complete()), Gn.clear());
 }
 function Lv() {
   Gn.forEach((e) => {
     (e.readKeyframes(), e.needsMeasurement && (au = !0));
   });
 }
 function VS() {
   (Lv(), Dv());
 }
 class Kc {
   constructor(t, n, r, i, s, o = !1) {
     ((this.isComplete = !1),
       (this.isAsync = !1),
       (this.needsMeasurement = !1),
       (this.isScheduled = !1),
       (this.unresolvedKeyframes = [...t]),
       (this.onComplete = n),
       (this.name = r),
       (this.motionValue = i),
       (this.element = s),
       (this.isAsync = o));
   }
   scheduleResolve() {
     ((this.isScheduled = !0),
       this.isAsync
         ? (Gn.add(this), ou || ((ou = !0), Y.read(Lv), Y.resolveKeyframes(Dv)))
         : (this.readKeyframes(), this.complete()));
   }
   readKeyframes() {
     const {
       unresolvedKeyframes: t,
       name: n,
       element: r,
       motionValue: i,
     } = this;
     for (let s = 0; s < t.length; s++)
       if (t[s] === null)
         if (s === 0) {
           const o = i == null ? void 0 : i.get(),
             a = t[t.length - 1];
           if (o !== void 0) t[0] = o;
           else if (r && n) {
             const l = r.readValue(n, a);
             l != null && (t[0] = l);
           }
           (t[0] === void 0 && (t[0] = a), i && o === void 0 && i.set(t[0]));
         } else t[s] = t[s - 1];
   }
   setFinalKeyframe() {}
   measureInitialState() {}
   renderEndStyles() {}
   measureEndState() {}
   complete() {
     ((this.isComplete = !0),
       this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
       Gn.delete(this));
   }
   cancel() {
     this.isComplete || ((this.isScheduled = !1), Gn.delete(this));
   }
   resume() {
     this.isComplete || this.scheduleResolve();
   }
 }
 const bv = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
   RS = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
 function DS(e) {
   const t = RS.exec(e);
   if (!t) return [,];
   const [, n, r, i] = t;
   return [`--${n != null ? n : r}`, i];
 }
 function _v(e, t, n = 1) {
   const [r, i] = DS(e);
   if (!r) return;
   const s = window.getComputedStyle(t).getPropertyValue(r);
   if (s) {
     const o = s.trim();
     return bv(o) ? parseFloat(o) : o;
   }
   return Cc(i) ? _v(i, t, n + 1) : i;
 }
 const Mv = (e) => (t) => t.test(e),
   LS = { test: (e) => e === "auto", parse: (e) => e },
   zv = [qr, B, Wt, an, Tw, Pw, LS],
   Kf = (e) => zv.find(Mv(e));
 class Fv extends Kc {
   constructor(t, n, r, i, s) {
     super(t, n, r, i, s, !0);
   }
   readKeyframes() {
     const { unresolvedKeyframes: t, element: n, name: r } = this;
     if (!n || !n.current) return;
     super.readKeyframes();
     for (let l = 0; l < t.length; l++) {
       let u = t[l];
       if (typeof u == "string" && ((u = u.trim()), Cc(u))) {
         const c = _v(u, n.current);
         (c !== void 0 && (t[l] = c),
           l === t.length - 1 && (this.finalKeyframe = u));
       }
     }
     if ((this.resolveNoneKeyframes(), !mv.has(r) || t.length !== 2)) return;
     const [i, s] = t,
       o = Kf(i),
       a = Kf(s);
     if (o !== a)
       if ($f(o) && $f(a))
         for (let l = 0; l < t.length; l++) {
           const u = t[l];
           typeof u == "string" && (t[l] = parseFloat(u));
         }
       else this.needsMeasurement = !0;
   }
   resolveNoneKeyframes() {
     const { unresolvedKeyframes: t, name: n } = this,
       r = [];
     for (let i = 0; i < t.length; i++) uS(t[i]) && r.push(i);
     r.length && CS(t, r, n);
   }
   measureInitialState() {
     const { element: t, unresolvedKeyframes: n, name: r } = this;
     if (!t || !t.current) return;
     (r === "height" && (this.suspendedScrollY = window.pageYOffset),
       (this.measuredOrigin = Ur[r](
         t.measureViewportBox(),
         window.getComputedStyle(t.current),
       )),
       (n[0] = this.measuredOrigin));
     const i = n[n.length - 1];
     i !== void 0 && t.getValue(r, i).jump(i, !1);
   }
   measureEndState() {
     var t;
     const { element: n, name: r, unresolvedKeyframes: i } = this;
     if (!n || !n.current) return;
     const s = n.getValue(r);
     s && s.jump(this.measuredOrigin, !1);
     const o = i.length - 1,
       a = i[o];
     ((i[o] = Ur[r](
       n.measureViewportBox(),
       window.getComputedStyle(n.current),
     )),
       a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
       !((t = this.removedTransforms) === null || t === void 0) &&
         t.length &&
         this.removedTransforms.forEach(([l, u]) => {
           n.getValue(l).set(u);
         }),
       this.resolveNoneKeyframes());
   }
 }
 const Gf = (e, t) =>
   t === "zIndex"
     ? !1
     : !!(
         typeof e == "number" ||
         Array.isArray(e) ||
         (typeof e == "string" &&
           (En.test(e) || e === "0") &&
           !e.startsWith("url("))
       );
 function bS(e) {
   const t = e[0];
   if (e.length === 1) return !0;
   for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
 }
 function _S(e, t, n, r) {
   const i = e[0];
   if (i === null) return !1;
   if (t === "display" || t === "visibility") return !0;
   const s = e[e.length - 1],
     o = Gf(i, t),
     a = Gf(s, t);
   return !o || !a ? !1 : bS(e) || ((n === "spring" || bc(n)) && r);
 }
 const MS = (e) => e !== null;
 function oa(e, { repeat: t, repeatType: n = "loop" }, r) {
   const i = e.filter(MS),
     s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
   return !s || r === void 0 ? i[s] : r;
 }
 const zS = 40;
 class Ov {
   constructor({
     autoplay: t = !0,
     delay: n = 0,
     type: r = "keyframes",
     repeat: i = 0,
     repeatDelay: s = 0,
     repeatType: o = "loop",
     ...a
   }) {
     ((this.isStopped = !1),
       (this.hasAttemptedResolve = !1),
       (this.createdAt = Ht.now()),
       (this.options = {
         autoplay: t,
         delay: n,
         type: r,
         repeat: i,
         repeatDelay: s,
         repeatType: o,
         ...a,
       }),
       this.updateFinishedPromise());
   }
   calcStartTime() {
     return this.resolvedAt
       ? this.resolvedAt - this.createdAt > zS
         ? this.resolvedAt
         : this.createdAt
       : this.createdAt;
   }
   get resolved() {
     return (
       !this._resolved && !this.hasAttemptedResolve && VS(),
       this._resolved
     );
   }
   onKeyframesResolved(t, n) {
     ((this.resolvedAt = Ht.now()), (this.hasAttemptedResolve = !0));
     const {
       name: r,
       type: i,
       velocity: s,
       delay: o,
       onComplete: a,
       onUpdate: l,
       isGenerator: u,
     } = this.options;
     if (!u && !_S(t, r, i, s))
       if (o) this.options.duration = 0;
       else {
         (l && l(oa(t, this.options, n)),
           a && a(),
           this.resolveFinishedPromise());
         return;
       }
     const c = this.initPlayback(t, n);
     c !== !1 &&
       ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
       this.onPostResolved());
   }
   onPostResolved() {}
   then(t, n) {
     return this.currentFinishedPromise.then(t, n);
   }
   flatten() {
     ((this.options.type = "keyframes"), (this.options.ease = "linear"));
   }
   updateFinishedPromise() {
     this.currentFinishedPromise = new Promise((t) => {
       this.resolveFinishedPromise = t;
     });
   }
 }
 const ce = (e, t, n) => e + (t - e) * n;
 function Ka(e, t, n) {
   return (
     n < 0 && (n += 1),
     n > 1 && (n -= 1),
     n < 1 / 6
       ? e + (t - e) * 6 * n
       : n < 1 / 2
         ? t
         : n < 2 / 3
           ? e + (t - e) * (2 / 3 - n) * 6
           : e
   );
 }
 function FS({ hue: e, saturation: t, lightness: n, alpha: r }) {
   ((e /= 360), (t /= 100), (n /= 100));
   let i = 0,
     s = 0,
     o = 0;
   if (!t) i = s = o = n;
   else {
     const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
       l = 2 * n - a;
     ((i = Ka(l, a, e + 1 / 3)), (s = Ka(l, a, e)), (o = Ka(l, a, e - 1 / 3)));
   }
   return {
     red: Math.round(i * 255),
     green: Math.round(s * 255),
     blue: Math.round(o * 255),
     alpha: r,
   };
 }
 function No(e, t) {
   return (n) => (n > 0 ? t : e);
 }
 const Ga = (e, t, n) => {
     const r = e * e,
       i = n * (t * t - r) + r;
     return i < 0 ? 0 : Math.sqrt(i);
   },
   OS = [iu, $n, kr],
   IS = (e) => OS.find((t) => t.test(e));
 function qf(e) {
   const t = IS(e);
   if (!t) return !1;
   let n = t.parse(e);
   return (t === kr && (n = FS(n)), n);
 }
 const Yf = (e, t) => {
     const n = qf(e),
       r = qf(t);
     if (!n || !r) return No(e, t);
     const i = { ...n };
     return (s) => (
       (i.red = Ga(n.red, r.red, s)),
       (i.green = Ga(n.green, r.green, s)),
       (i.blue = Ga(n.blue, r.blue, s)),
       (i.alpha = ce(n.alpha, r.alpha, s)),
       $n.transform(i)
     );
   },
   BS = (e, t) => (n) => t(e(n)),
   us = (...e) => e.reduce(BS),
   lu = new Set(["none", "hidden"]);
 function US(e, t) {
   return lu.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
 }
 function $S(e, t) {
   return (n) => ce(e, t, n);
 }
 function Gc(e) {
   return typeof e == "number"
     ? $S
     : typeof e == "string"
       ? Cc(e)
         ? No
         : Ue.test(e)
           ? Yf
           : KS
       : Array.isArray(e)
         ? Iv
         : typeof e == "object"
           ? Ue.test(e)
             ? Yf
             : WS
           : No;
 }
 function Iv(e, t) {
   const n = [...e],
     r = n.length,
     i = e.map((s, o) => Gc(s)(s, t[o]));
   return (s) => {
     for (let o = 0; o < r; o++) n[o] = i[o](s);
     return n;
   };
 }
 function WS(e, t) {
   const n = { ...e, ...t },
     r = {};
   for (const i in n)
     e[i] !== void 0 && t[i] !== void 0 && (r[i] = Gc(e[i])(e[i], t[i]));
   return (i) => {
     for (const s in r) n[s] = r[s](i);
     return n;
   };
 }
 function HS(e, t) {
   var n;
   const r = [],
     i = { color: 0, var: 0, number: 0 };
   for (let s = 0; s < t.values.length; s++) {
     const o = t.types[s],
       a = e.indexes[o][i[o]],
       l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
     ((r[s] = l), i[o]++);
   }
   return r;
 }
 const KS = (e, t) => {
   const n = En.createTransformer(t),
     r = Zi(e),
     i = Zi(t);
   return r.indexes.var.length === i.indexes.var.length &&
     r.indexes.color.length === i.indexes.color.length &&
     r.indexes.number.length >= i.indexes.number.length
     ? (lu.has(e) && !i.values.length) || (lu.has(t) && !r.values.length)
       ? US(e, t)
       : us(Iv(HS(r, i), i.values), n)
     : No(e, t);
 };
 function Bv(e, t, n) {
   return typeof e == "number" && typeof t == "number" && typeof n == "number"
     ? ce(e, t, n)
     : Gc(e)(e, t);
 }
 const GS = 5;
 function Uv(e, t, n) {
   const r = Math.max(t - GS, 0);
   return Ic(n - e(r), t - r);
 }
 const pe = {
     stiffness: 100,
     damping: 10,
     mass: 1,
     velocity: 0,
     duration: 800,
     bounce: 0.3,
     visualDuration: 0.3,
     restSpeed: { granular: 0.01, default: 2 },
     restDelta: { granular: 0.005, default: 0.5 },
     minDuration: 0.01,
     maxDuration: 10,
     minDamping: 0.05,
     maxDamping: 1,
   },
   qa = 0.001;
 function qS({
   duration: e = pe.duration,
   bounce: t = pe.bounce,
   velocity: n = pe.velocity,
   mass: r = pe.mass,
 }) {
   let i,
     s,
     o = 1 - t;
   ((o = Kt(pe.minDamping, pe.maxDamping, o)),
     (e = Kt(pe.minDuration, pe.maxDuration, Jt(e))),
     o < 1
       ? ((i = (u) => {
           const c = u * o,
             f = c * e,
             h = c - n,
             g = uu(u, o),
             w = Math.exp(-f);
           return qa - (h / g) * w;
         }),
         (s = (u) => {
           const f = u * o * e,
             h = f * n + n,
             g = Math.pow(o, 2) * Math.pow(u, 2) * e,
             w = Math.exp(-f),
             S = uu(Math.pow(u, 2), o);
           return ((-i(u) + qa > 0 ? -1 : 1) * ((h - g) * w)) / S;
         }))
       : ((i = (u) => {
           const c = Math.exp(-u * e),
             f = (u - n) * e + 1;
           return -qa + c * f;
         }),
         (s = (u) => {
           const c = Math.exp(-u * e),
             f = (n - u) * (e * e);
           return c * f;
         })));
   const a = 5 / e,
     l = QS(i, s, a);
   if (((e = Zt(e)), isNaN(l)))
     return { stiffness: pe.stiffness, damping: pe.damping, duration: e };
   {
     const u = Math.pow(l, 2) * r;
     return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
   }
 }
 const YS = 12;
 function QS(e, t, n) {
   let r = n;
   for (let i = 1; i < YS; i++) r = r - e(r) / t(r);
   return r;
 }
 function uu(e, t) {
   return e * Math.sqrt(1 - t * t);
 }
 const XS = ["duration", "bounce"],
   ZS = ["stiffness", "damping", "mass"];
 function Qf(e, t) {
   return t.some((n) => e[n] !== void 0);
 }
 function JS(e) {
   let t = {
     velocity: pe.velocity,
     stiffness: pe.stiffness,
     damping: pe.damping,
     mass: pe.mass,
     isResolvedFromDuration: !1,
     ...e,
   };
   if (!Qf(e, ZS) && Qf(e, XS))
     if (e.visualDuration) {
       const n = e.visualDuration,
         r = (2 * Math.PI) / (n * 1.2),
         i = r * r,
         s = 2 * Kt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
       t = { ...t, mass: pe.mass, stiffness: i, damping: s };
     } else {
       const n = qS(e);
       ((t = { ...t, ...n, mass: pe.mass }), (t.isResolvedFromDuration = !0));
     }
   return t;
 }
 function $v(e = pe.visualDuration, t = pe.bounce) {
   const n =
     typeof e != "object"
       ? { visualDuration: e, keyframes: [0, 1], bounce: t }
       : e;
   let { restSpeed: r, restDelta: i } = n;
   const s = n.keyframes[0],
     o = n.keyframes[n.keyframes.length - 1],
     a = { done: !1, value: s },
     {
       stiffness: l,
       damping: u,
       mass: c,
       duration: f,
       velocity: h,
       isResolvedFromDuration: g,
     } = JS({ ...n, velocity: -Jt(n.velocity || 0) }),
     w = h || 0,
     S = u / (2 * Math.sqrt(l * c)),
     C = o - s,
     m = Jt(Math.sqrt(l / c)),
     p = Math.abs(C) < 5;
   (r || (r = p ? pe.restSpeed.granular : pe.restSpeed.default),
     i || (i = p ? pe.restDelta.granular : pe.restDelta.default));
   let v;
   if (S < 1) {
     const T = uu(m, S);
     v = (A) => {
       const R = Math.exp(-S * m * A);
       return (
         o - R * (((w + S * m * C) / T) * Math.sin(T * A) + C * Math.cos(T * A))
       );
     };
   } else if (S === 1) v = (T) => o - Math.exp(-m * T) * (C + (w + m * C) * T);
   else {
     const T = m * Math.sqrt(S * S - 1);
     v = (A) => {
       const R = Math.exp(-S * m * A),
         j = Math.min(T * A, 300);
       return (
         o - (R * ((w + S * m * C) * Math.sinh(j) + T * C * Math.cosh(j))) / T
       );
     };
   }
   const P = {
     calculatedDuration: (g && f) || null,
     next: (T) => {
       const A = v(T);
       if (g) a.done = T >= f;
       else {
         let R = 0;
         S < 1 && (R = T === 0 ? Zt(w) : Uv(v, T, A));
         const j = Math.abs(R) <= r,
           $ = Math.abs(o - A) <= i;
         a.done = j && $;
       }
       return ((a.value = a.done ? o : A), a);
     },
     toString: () => {
       const T = Math.min(av(P), tu),
         A = lv((R) => P.next(T * R).value, T, 30);
       return T + "ms " + A;
     },
   };
   return P;
 }
 function Xf({
   keyframes: e,
   velocity: t = 0,
   power: n = 0.8,
   timeConstant: r = 325,
   bounceDamping: i = 10,
   bounceStiffness: s = 500,
   modifyTarget: o,
   min: a,
   max: l,
   restDelta: u = 0.5,
   restSpeed: c,
 }) {
   const f = e[0],
     h = { done: !1, value: f },
     g = (j) => (a !== void 0 && j < a) || (l !== void 0 && j > l),
     w = (j) =>
       a === void 0
         ? l
         : l === void 0 || Math.abs(a - j) < Math.abs(l - j)
           ? a
           : l;
   let S = n * t;
   const C = f + S,
     m = o === void 0 ? C : o(C);
   m !== C && (S = m - f);
   const p = (j) => -S * Math.exp(-j / r),
     v = (j) => m + p(j),
     P = (j) => {
       const $ = p(j),
         F = v(j);
       ((h.done = Math.abs($) <= u), (h.value = h.done ? m : F));
     };
   let T, A;
   const R = (j) => {
     g(h.value) &&
       ((T = j),
       (A = $v({
         keyframes: [h.value, w(h.value)],
         velocity: Uv(v, j, h.value),
         damping: i,
         stiffness: s,
         restDelta: u,
         restSpeed: c,
       })));
   };
   return (
     R(0),
     {
       calculatedDuration: null,
       next: (j) => {
         let $ = !1;
         return (
           !A && T === void 0 && (($ = !0), P(j), R(j)),
           T !== void 0 && j >= T ? A.next(j - T) : (!$ && P(j), h)
         );
       },
     }
   );
 }
 const ek = ls(0.42, 0, 1, 1),
   tk = ls(0, 0, 0.58, 1),
   Wv = ls(0.42, 0, 0.58, 1),
   nk = (e) => Array.isArray(e) && typeof e[0] != "number",
   rk = {
     linear: Ye,
     easeIn: ek,
     easeInOut: Wv,
     easeOut: tk,
     circIn: Uc,
     circInOut: Tv,
     circOut: Pv,
     backIn: Bc,
     backInOut: Sv,
     backOut: wv,
     anticipate: kv,
   },
   Zf = (e) => {
     if (_c(e)) {
       Og(e.length === 4);
       const [t, n, r, i] = e;
       return ls(t, n, r, i);
     } else if (typeof e == "string") return rk[e];
     return e;
   };
 function ik(e, t, n) {
   const r = [],
     i = n || Bv,
     s = e.length - 1;
   for (let o = 0; o < s; o++) {
     let a = i(e[o], e[o + 1]);
     if (t) {
       const l = Array.isArray(t) ? t[o] || Ye : t;
       a = us(l, a);
     }
     r.push(a);
   }
   return r;
 }
 function qc(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
   const s = e.length;
   if ((Og(s === t.length), s === 1)) return () => t[0];
   if (s === 2 && t[0] === t[1]) return () => t[1];
   const o = e[0] === e[1];
   e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
   const a = ik(t, r, i),
     l = a.length,
     u = (c) => {
       if (o && c < e[0]) return t[0];
       let f = 0;
       if (l > 1) for (; f < e.length - 2 && !(c < e[f + 1]); f++);
       const h = Jn(e[f], e[f + 1], c);
       return a[f](h);
     };
   return n ? (c) => u(Kt(e[0], e[s - 1], c)) : u;
 }
 function sk(e, t) {
   const n = e[e.length - 1];
   for (let r = 1; r <= t; r++) {
     const i = Jn(0, t, r);
     e.push(ce(n, 1, i));
   }
 }
 function Hv(e) {
   const t = [0];
   return (sk(t, e.length - 1), t);
 }
 function ok(e, t) {
   return e.map((n) => n * t);
 }
 function ak(e, t) {
   return e.map(() => t || Wv).splice(0, e.length - 1);
 }
 function Vo({
   duration: e = 300,
   keyframes: t,
   times: n,
   ease: r = "easeInOut",
 }) {
   const i = nk(r) ? r.map(Zf) : Zf(r),
     s = { done: !1, value: t[0] },
     o = ok(n && n.length === t.length ? n : Hv(t), e),
     a = qc(o, t, { ease: Array.isArray(i) ? i : ak(t, i) });
   return {
     calculatedDuration: e,
     next: (l) => ((s.value = a(l)), (s.done = l >= e), s),
   };
 }
 const lk = (e) => {
     const t = ({ timestamp: n }) => e(n);
     return {
       start: () => Y.update(t, !0),
       stop: () => Lt(t),
       now: () => (Ce.isProcessing ? Ce.timestamp : Ht.now()),
     };
   },
   uk = { decay: Xf, inertia: Xf, tween: Vo, keyframes: Vo, spring: $v },
   ck = (e) => e / 100;
 class Yc extends Ov {
   constructor(t) {
     (super(t),
       (this.holdTime = null),
       (this.cancelTime = null),
       (this.currentTime = 0),
       (this.playbackSpeed = 1),
       (this.pendingPlayState = "running"),
       (this.startTime = null),
       (this.state = "idle"),
       (this.stop = () => {
         if (
           (this.resolver.cancel(),
           (this.isStopped = !0),
           this.state === "idle")
         )
           return;
         this.teardown();
         const { onStop: l } = this.options;
         l && l();
       }));
     const { name: n, motionValue: r, element: i, keyframes: s } = this.options,
       o = (i == null ? void 0 : i.KeyframeResolver) || Kc,
       a = (l, u) => this.onKeyframesResolved(l, u);
     ((this.resolver = new o(s, a, n, r, i)), this.resolver.scheduleResolve());
   }
   flatten() {
     (super.flatten(),
       this._resolved &&
         Object.assign(
           this._resolved,
           this.initPlayback(this._resolved.keyframes),
         ));
   }
   initPlayback(t) {
     const {
         type: n = "keyframes",
         repeat: r = 0,
         repeatDelay: i = 0,
         repeatType: s,
         velocity: o = 0,
       } = this.options,
       a = bc(n) ? n : uk[n] || Vo;
     let l, u;
     a !== Vo &&
       typeof t[0] != "number" &&
       ((l = us(ck, Bv(t[0], t[1]))), (t = [0, 100]));
     const c = a({ ...this.options, keyframes: t });
     (s === "mirror" &&
       (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
       c.calculatedDuration === null && (c.calculatedDuration = av(c)));
     const { calculatedDuration: f } = c,
       h = f + i,
       g = h * (r + 1) - i;
     return {
       generator: c,
       mirroredGenerator: u,
       mapPercentToKeyframes: l,
       calculatedDuration: f,
       resolvedDuration: h,
       totalDuration: g,
     };
   }
   onPostResolved() {
     const { autoplay: t = !0 } = this.options;
     (this.play(),
       this.pendingPlayState === "paused" || !t
         ? this.pause()
         : (this.state = this.pendingPlayState));
   }
   tick(t, n = !1) {
     const { resolved: r } = this;
     if (!r) {
       const { keyframes: j } = this.options;
       return { done: !0, value: j[j.length - 1] };
     }
     const {
       finalKeyframe: i,
       generator: s,
       mirroredGenerator: o,
       mapPercentToKeyframes: a,
       keyframes: l,
       calculatedDuration: u,
       totalDuration: c,
       resolvedDuration: f,
     } = r;
     if (this.startTime === null) return s.next(0);
     const {
       delay: h,
       repeat: g,
       repeatType: w,
       repeatDelay: S,
       onUpdate: C,
     } = this.options;
     (this.speed > 0
       ? (this.startTime = Math.min(this.startTime, t))
       : this.speed < 0 &&
         (this.startTime = Math.min(t - c / this.speed, this.startTime)),
       n
         ? (this.currentTime = t)
         : this.holdTime !== null
           ? (this.currentTime = this.holdTime)
           : (this.currentTime = Math.round(t - this.startTime) * this.speed));
     const m = this.currentTime - h * (this.speed >= 0 ? 1 : -1),
       p = this.speed >= 0 ? m < 0 : m > c;
     ((this.currentTime = Math.max(m, 0)),
       this.state === "finished" &&
         this.holdTime === null &&
         (this.currentTime = c));
     let v = this.currentTime,
       P = s;
     if (g) {
       const j = Math.min(this.currentTime, c) / f;
       let $ = Math.floor(j),
         F = j % 1;
       (!F && j >= 1 && (F = 1),
         F === 1 && $--,
         ($ = Math.min($, g + 1)),
         !!($ % 2) &&
           (w === "reverse"
             ? ((F = 1 - F), S && (F -= S / f))
             : w === "mirror" && (P = o)),
         (v = Kt(0, 1, F) * f));
     }
     const T = p ? { done: !1, value: l[0] } : P.next(v);
     a && (T.value = a(T.value));
     let { done: A } = T;
     !p &&
       u !== null &&
       (A = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
     const R =
       this.holdTime === null &&
       (this.state === "finished" || (this.state === "running" && A));
     return (
       R && i !== void 0 && (T.value = oa(l, this.options, i)),
       C && C(T.value),
       R && this.finish(),
       T
     );
   }
   get duration() {
     const { resolved: t } = this;
     return t ? Jt(t.calculatedDuration) : 0;
   }
   get time() {
     return Jt(this.currentTime);
   }
   set time(t) {
     ((t = Zt(t)),
       (this.currentTime = t),
       this.holdTime !== null || this.speed === 0
         ? (this.holdTime = t)
         : this.driver &&
           (this.startTime = this.driver.now() - t / this.speed));
   }
   get speed() {
     return this.playbackSpeed;
   }
   set speed(t) {
     const n = this.playbackSpeed !== t;
     ((this.playbackSpeed = t), n && (this.time = Jt(this.currentTime)));
   }
   play() {
     if (
       (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
     ) {
       this.pendingPlayState = "running";
       return;
     }
     if (this.isStopped) return;
     const { driver: t = lk, onPlay: n, startTime: r } = this.options;
     (this.driver || (this.driver = t((s) => this.tick(s))), n && n());
     const i = this.driver.now();
     (this.holdTime !== null
       ? (this.startTime = i - this.holdTime)
       : this.startTime
         ? this.state === "finished" && (this.startTime = i)
         : (this.startTime = r != null ? r : this.calcStartTime()),
       this.state === "finished" && this.updateFinishedPromise(),
       (this.cancelTime = this.startTime),
       (this.holdTime = null),
       (this.state = "running"),
       this.driver.start());
   }
   pause() {
     var t;
     if (!this._resolved) {
       this.pendingPlayState = "paused";
       return;
     }
     ((this.state = "paused"),
       (this.holdTime =
         (t = this.currentTime) !== null && t !== void 0 ? t : 0));
   }
   complete() {
     (this.state !== "running" && this.play(),
       (this.pendingPlayState = this.state = "finished"),
       (this.holdTime = null));
   }
   finish() {
     (this.teardown(), (this.state = "finished"));
     const { onComplete: t } = this.options;
     t && t();
   }
   cancel() {
     (this.cancelTime !== null && this.tick(this.cancelTime),
       this.teardown(),
       this.updateFinishedPromise());
   }
   teardown() {
     ((this.state = "idle"),
       this.stopDriver(),
       this.resolveFinishedPromise(),
       this.updateFinishedPromise(),
       (this.startTime = this.cancelTime = null),
       this.resolver.cancel());
   }
   stopDriver() {
     this.driver && (this.driver.stop(), (this.driver = void 0));
   }
   sample(t) {
     return ((this.startTime = 0), this.tick(t, !0));
   }
 }
 const dk = new Set(["opacity", "clipPath", "filter", "transform"]);
 function fk(
   e,
   t,
   n,
   {
     delay: r = 0,
     duration: i = 300,
     repeat: s = 0,
     repeatType: o = "loop",
     ease: a = "easeInOut",
     times: l,
   } = {},
 ) {
   const u = { [t]: n };
   l && (u.offset = l);
   const c = cv(a, i);
   return (
     Array.isArray(c) && (u.easing = c),
     e.animate(u, {
       delay: r,
       duration: i,
       easing: Array.isArray(c) ? "linear" : c,
       fill: "both",
       iterations: s + 1,
       direction: o === "reverse" ? "alternate" : "normal",
     })
   );
 }
 const hk = xc(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
   Ro = 10,
   pk = 2e4;
 function mk(e) {
   return bc(e.type) || e.type === "spring" || !uv(e.ease);
 }
 function gk(e, t) {
   const n = new Yc({
     ...t,
     keyframes: e,
     repeat: 0,
     delay: 0,
     isGenerator: !0,
   });
   let r = { done: !1, value: e[0] };
   const i = [];
   let s = 0;
   for (; !r.done && s < pk; ) ((r = n.sample(s)), i.push(r.value), (s += Ro));
   return { times: void 0, keyframes: i, duration: s - Ro, ease: "linear" };
 }
 const Kv = { anticipate: kv, backInOut: Sv, circInOut: Tv };
 function vk(e) {
   return e in Kv;
 }
 class Jf extends Ov {
   constructor(t) {
     super(t);
     const { name: n, motionValue: r, element: i, keyframes: s } = this.options;
     ((this.resolver = new Fv(
       s,
       (o, a) => this.onKeyframesResolved(o, a),
       n,
       r,
       i,
     )),
       this.resolver.scheduleResolve());
   }
   initPlayback(t, n) {
     let {
       duration: r = 300,
       times: i,
       ease: s,
       type: o,
       motionValue: a,
       name: l,
       startTime: u,
     } = this.options;
     if (!a.owner || !a.owner.current) return !1;
     if (
       (typeof s == "string" && jo() && vk(s) && (s = Kv[s]), mk(this.options))
     ) {
       const {
           onComplete: f,
           onUpdate: h,
           motionValue: g,
           element: w,
           ...S
         } = this.options,
         C = gk(t, S);
       ((t = C.keyframes),
         t.length === 1 && (t[1] = t[0]),
         (r = C.duration),
         (i = C.times),
         (s = C.ease),
         (o = "keyframes"));
     }
     const c = fk(a.owner.current, l, t, {
       ...this.options,
       duration: r,
       times: i,
       ease: s,
     });
     return (
       (c.startTime = u != null ? u : this.calcStartTime()),
       this.pendingTimeline
         ? (zf(c, this.pendingTimeline), (this.pendingTimeline = void 0))
         : (c.onfinish = () => {
             const { onComplete: f } = this.options;
             (a.set(oa(t, this.options, n)),
               f && f(),
               this.cancel(),
               this.resolveFinishedPromise());
           }),
       { animation: c, duration: r, times: i, type: o, ease: s, keyframes: t }
     );
   }
   get duration() {
     const { resolved: t } = this;
     if (!t) return 0;
     const { duration: n } = t;
     return Jt(n);
   }
   get time() {
     const { resolved: t } = this;
     if (!t) return 0;
     const { animation: n } = t;
     return Jt(n.currentTime || 0);
   }
   set time(t) {
     const { resolved: n } = this;
     if (!n) return;
     const { animation: r } = n;
     r.currentTime = Zt(t);
   }
   get speed() {
     const { resolved: t } = this;
     if (!t) return 1;
     const { animation: n } = t;
     return n.playbackRate;
   }
   set speed(t) {
     const { resolved: n } = this;
     if (!n) return;
     const { animation: r } = n;
     r.playbackRate = t;
   }
   get state() {
     const { resolved: t } = this;
     if (!t) return "idle";
     const { animation: n } = t;
     return n.playState;
   }
   get startTime() {
     const { resolved: t } = this;
     if (!t) return null;
     const { animation: n } = t;
     return n.startTime;
   }
   attachTimeline(t) {
     if (!this._resolved) this.pendingTimeline = t;
     else {
       const { resolved: n } = this;
       if (!n) return Ye;
       const { animation: r } = n;
       zf(r, t);
     }
     return Ye;
   }
   play() {
     if (this.isStopped) return;
     const { resolved: t } = this;
     if (!t) return;
     const { animation: n } = t;
     (n.playState === "finished" && this.updateFinishedPromise(), n.play());
   }
   pause() {
     const { resolved: t } = this;
     if (!t) return;
     const { animation: n } = t;
     n.pause();
   }
   stop() {
     if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
       return;
     (this.resolveFinishedPromise(), this.updateFinishedPromise());
     const { resolved: t } = this;
     if (!t) return;
     const {
       animation: n,
       keyframes: r,
       duration: i,
       type: s,
       ease: o,
       times: a,
     } = t;
     if (n.playState === "idle" || n.playState === "finished") return;
     if (this.time) {
       const {
           motionValue: u,
           onUpdate: c,
           onComplete: f,
           element: h,
           ...g
         } = this.options,
         w = new Yc({
           ...g,
           keyframes: r,
           duration: i,
           type: s,
           ease: o,
           times: a,
           isGenerator: !0,
         }),
         S = Zt(this.time);
       u.setWithVelocity(w.sample(S - Ro).value, w.sample(S).value, Ro);
     }
     const { onStop: l } = this.options;
     (l && l(), this.cancel());
   }
   complete() {
     const { resolved: t } = this;
     t && t.animation.finish();
   }
   cancel() {
     const { resolved: t } = this;
     t && t.animation.cancel();
   }
   static supports(t) {
     const {
       motionValue: n,
       name: r,
       repeatDelay: i,
       repeatType: s,
       damping: o,
       type: a,
     } = t;
     if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return !1;
     const { onUpdate: l, transformTemplate: u } = n.owner.getProps();
     return (
       hk() &&
       r &&
       dk.has(r) &&
       !l &&
       !u &&
       !i &&
       s !== "mirror" &&
       o !== 0 &&
       a !== "inertia"
     );
   }
 }
 const yk = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
   xk = (e) => ({
     type: "spring",
     stiffness: 550,
     damping: e === 0 ? 2 * Math.sqrt(550) : 30,
     restSpeed: 10,
   }),
   wk = { type: "keyframes", duration: 0.8 },
   Sk = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
   kk = (e, { keyframes: t }) =>
     t.length > 2
       ? wk
       : sr.has(e)
         ? e.startsWith("scale")
           ? xk(t[1])
           : yk
         : Sk;
 function Pk({
   when: e,
   delay: t,
   delayChildren: n,
   staggerChildren: r,
   staggerDirection: i,
   repeat: s,
   repeatType: o,
   repeatDelay: a,
   from: l,
   elapsed: u,
   ...c
 }) {
   return !!Object.keys(c).length;
 }
 const Qc =
   (e, t, n, r = {}, i, s) =>
   (o) => {
     const a = Lc(r, e) || {},
       l = a.delay || r.delay || 0;
     let { elapsed: u = 0 } = r;
     u = u - Zt(l);
     let c = {
       keyframes: Array.isArray(n) ? n : [null, n],
       ease: "easeOut",
       velocity: t.getVelocity(),
       ...a,
       delay: -u,
       onUpdate: (h) => {
         (t.set(h), a.onUpdate && a.onUpdate(h));
       },
       onComplete: () => {
         (o(), a.onComplete && a.onComplete());
       },
       name: e,
       motionValue: t,
       element: s ? void 0 : i,
     };
     (Pk(a) || (c = { ...c, ...kk(e, c) }),
       c.duration && (c.duration = Zt(c.duration)),
       c.repeatDelay && (c.repeatDelay = Zt(c.repeatDelay)),
       c.from !== void 0 && (c.keyframes[0] = c.from));
     let f = !1;
     if (
       ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
         ((c.duration = 0), c.delay === 0 && (f = !0)),
       f && !s && t.get() !== void 0)
     ) {
       const h = oa(c.keyframes, a);
       if (h !== void 0)
         return (
           Y.update(() => {
             (c.onUpdate(h), c.onComplete());
           }),
           new Hw([])
         );
     }
     return !s && Jf.supports(c) ? new Jf(c) : new Yc(c);
   };
 function Tk({ protectedKeys: e, needsAnimating: t }, n) {
   const r = e.hasOwnProperty(n) && t[n] !== !0;
   return ((t[n] = !1), r);
 }
 function Gv(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
   var s;
   let { transition: o = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
   r && (o = r);
   const u = [],
     c = i && e.animationState && e.animationState.getState()[i];
   for (const f in l) {
     const h = e.getValue(
         f,
         (s = e.latestValues[f]) !== null && s !== void 0 ? s : null,
       ),
       g = l[f];
     if (g === void 0 || (c && Tk(c, f))) continue;
     const w = { delay: n, ...Lc(o || {}, f) };
     let S = !1;
     if (window.MotionHandoffAnimation) {
       const m = gv(e);
       if (m) {
         const p = window.MotionHandoffAnimation(m, f, Y);
         p !== null && ((w.startTime = p), (S = !0));
       }
     }
     (ru(e, f),
       h.start(
         Qc(
           f,
           h,
           g,
           e.shouldReduceMotion && mv.has(f) ? { type: !1 } : w,
           e,
           S,
         ),
       ));
     const C = h.animation;
     C && u.push(C);
   }
   return (
     a &&
       Promise.all(u).then(() => {
         Y.update(() => {
           a && iS(e, a);
         });
       }),
     u
   );
 }
 function cu(e, t, n = {}) {
   var r;
   const i = sa(
     e,
     t,
     n.type === "exit"
       ? (r = e.presenceContext) === null || r === void 0
         ? void 0
         : r.custom
       : void 0,
   );
   let { transition: s = e.getDefaultTransition() || {} } = i || {};
   n.transitionOverride && (s = n.transitionOverride);
   const o = i ? () => Promise.all(Gv(e, i, n)) : () => Promise.resolve(),
     a =
       e.variantChildren && e.variantChildren.size
         ? (u = 0) => {
             const {
               delayChildren: c = 0,
               staggerChildren: f,
               staggerDirection: h,
             } = s;
             return Ek(e, t, c + u, f, h, n);
           }
         : () => Promise.resolve(),
     { when: l } = s;
   if (l) {
     const [u, c] = l === "beforeChildren" ? [o, a] : [a, o];
     return u().then(() => c());
   } else return Promise.all([o(), a(n.delay)]);
 }
 function Ek(e, t, n = 0, r = 0, i = 1, s) {
   const o = [],
     a = (e.variantChildren.size - 1) * r,
     l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
   return (
     Array.from(e.variantChildren)
       .sort(Ck)
       .forEach((u, c) => {
         (u.notify("AnimationStart", t),
           o.push(
             cu(u, t, { ...s, delay: n + l(c) }).then(() =>
               u.notify("AnimationComplete", t),
             ),
           ));
       }),
     Promise.all(o)
   );
 }
 function Ck(e, t) {
   return e.sortNodePosition(t);
 }
 function Ak(e, t, n = {}) {
   e.notify("AnimationStart", t);
   let r;
   if (Array.isArray(t)) {
     const i = t.map((s) => cu(e, s, n));
     r = Promise.all(i);
   } else if (typeof t == "string") r = cu(e, t, n);
   else {
     const i = typeof t == "function" ? sa(e, t, n.custom) : t;
     r = Promise.all(Gv(e, i, n));
   }
   return r.then(() => {
     e.notify("AnimationComplete", t);
   });
 }
 const jk = Sc.length;
 function qv(e) {
   if (!e) return;
   if (!e.isControllingVariants) {
     const n = e.parent ? qv(e.parent) || {} : {};
     return (e.props.initial !== void 0 && (n.initial = e.props.initial), n);
   }
   const t = {};
   for (let n = 0; n < jk; n++) {
     const r = Sc[n],
       i = e.props[r];
     (Qi(i) || i === !1) && (t[r] = i);
   }
   return t;
 }
 const Nk = [...wc].reverse(),
   Vk = wc.length;
 function Rk(e) {
   return (t) =>
     Promise.all(t.map(({ animation: n, options: r }) => Ak(e, n, r)));
 }
 function Dk(e) {
   let t = Rk(e),
     n = eh(),
     r = !0;
   const i = (l) => (u, c) => {
     var f;
     const h = sa(
       e,
       c,
       l === "exit"
         ? (f = e.presenceContext) === null || f === void 0
           ? void 0
           : f.custom
         : void 0,
     );
     if (h) {
       const { transition: g, transitionEnd: w, ...S } = h;
       u = { ...u, ...S, ...w };
     }
     return u;
   };
   function s(l) {
     t = l(e);
   }
   function o(l) {
     const { props: u } = e,
       c = qv(e.parent) || {},
       f = [],
       h = new Set();
     let g = {},
       w = 1 / 0;
     for (let C = 0; C < Vk; C++) {
       const m = Nk[C],
         p = n[m],
         v = u[m] !== void 0 ? u[m] : c[m],
         P = Qi(v),
         T = m === l ? p.isActive : null;
       T === !1 && (w = C);
       let A = v === c[m] && v !== u[m] && P;
       if (
         (A && r && e.manuallyAnimateOnMount && (A = !1),
         (p.protectedKeys = { ...g }),
         (!p.isActive && T === null) ||
           (!v && !p.prevProp) ||
           ra(v) ||
           typeof v == "boolean")
       )
         continue;
       const R = Lk(p.prevProp, v);
       let j = R || (m === l && p.isActive && !A && P) || (C > w && P),
         $ = !1;
       const F = Array.isArray(v) ? v : [v];
       let le = F.reduce(i(m), {});
       T === !1 && (le = {});
       const { prevResolvedValues: H = {} } = p,
         W = { ...H, ...le },
         te = (Q) => {
           ((j = !0),
             h.has(Q) && (($ = !0), h.delete(Q)),
             (p.needsAnimating[Q] = !0));
           const L = e.getValue(Q);
           L && (L.liveStyle = !1);
         };
       for (const Q in W) {
         const L = le[Q],
           I = H[Q];
         if (g.hasOwnProperty(Q)) continue;
         let U = !1;
         (eu(L) && eu(I) ? (U = !sv(L, I)) : (U = L !== I),
           U
             ? L != null
               ? te(Q)
               : h.add(Q)
             : L !== void 0 && h.has(Q)
               ? te(Q)
               : (p.protectedKeys[Q] = !0));
       }
       ((p.prevProp = v),
         (p.prevResolvedValues = le),
         p.isActive && (g = { ...g, ...le }),
         r && e.blockInitialAnimation && (j = !1),
         j &&
           (!(A && R) || $) &&
           f.push(...F.map((Q) => ({ animation: Q, options: { type: m } }))));
     }
     if (h.size) {
       const C = {};
       (h.forEach((m) => {
         const p = e.getBaseTarget(m),
           v = e.getValue(m);
         (v && (v.liveStyle = !0), (C[m] = p != null ? p : null));
       }),
         f.push({ animation: C }));
     }
     let S = !!f.length;
     return (
       r &&
         (u.initial === !1 || u.initial === u.animate) &&
         !e.manuallyAnimateOnMount &&
         (S = !1),
       (r = !1),
       S ? t(f) : Promise.resolve()
     );
   }
   function a(l, u) {
     var c;
     if (n[l].isActive === u) return Promise.resolve();
     ((c = e.variantChildren) === null ||
       c === void 0 ||
       c.forEach((h) => {
         var g;
         return (g = h.animationState) === null || g === void 0
           ? void 0
           : g.setActive(l, u);
       }),
       (n[l].isActive = u));
     const f = o(l);
     for (const h in n) n[h].protectedKeys = {};
     return f;
   }
   return {
     animateChanges: o,
     setActive: a,
     setAnimateFunction: s,
     getState: () => n,
     reset: () => {
       ((n = eh()), (r = !0));
     },
   };
 }
 function Lk(e, t) {
   return typeof t == "string" ? t !== e : Array.isArray(t) ? !sv(t, e) : !1;
 }
 function bn(e = !1) {
   return {
     isActive: e,
     protectedKeys: {},
     needsAnimating: {},
     prevResolvedValues: {},
   };
 }
 function eh() {
   return {
     animate: bn(!0),
     whileInView: bn(),
     whileHover: bn(),
     whileTap: bn(),
     whileDrag: bn(),
     whileFocus: bn(),
     exit: bn(),
   };
 }
 class Nn {
   constructor(t) {
     ((this.isMounted = !1), (this.node = t));
   }
   update() {}
 }
 class bk extends Nn {
   constructor(t) {
     (super(t), t.animationState || (t.animationState = Dk(t)));
   }
   updateAnimationControlsSubscription() {
     const { animate: t } = this.node.getProps();
     ra(t) && (this.unmountControls = t.subscribe(this.node));
   }
   mount() {
     this.updateAnimationControlsSubscription();
   }
   update() {
     const { animate: t } = this.node.getProps(),
       { animate: n } = this.node.prevProps || {};
     t !== n && this.updateAnimationControlsSubscription();
   }
   unmount() {
     var t;
     (this.node.animationState.reset(),
       (t = this.unmountControls) === null || t === void 0 || t.call(this));
   }
 }
 let _k = 0;
 class Mk extends Nn {
   constructor() {
     (super(...arguments), (this.id = _k++));
   }
   update() {
     if (!this.node.presenceContext) return;
     const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
       { isPresent: r } = this.node.prevPresenceContext || {};
     if (!this.node.animationState || t === r) return;
     const i = this.node.animationState.setActive("exit", !t);
     n && !t && i.then(() => n(this.id));
   }
   mount() {
     const { register: t } = this.node.presenceContext || {};
     t && (this.unmount = t(this.id));
   }
   unmount() {}
 }
 const zk = { animation: { Feature: bk }, exit: { Feature: Mk } };
 function Ji(e, t, n, r = { passive: !0 }) {
   return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
 }
 function cs(e) {
   return { point: { x: e.pageX, y: e.pageY } };
 }
 const Fk = (e) => (t) => Mc(t) && e(t, cs(t));
 function ji(e, t, n, r) {
   return Ji(e, t, Fk(n), r);
 }
 const th = (e, t) => Math.abs(e - t);
 function Ok(e, t) {
   const n = th(e.x, t.x),
     r = th(e.y, t.y);
   return Math.sqrt(n ** 2 + r ** 2);
 }
 class Yv {
   constructor(
     t,
     n,
     { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {},
   ) {
     if (
       ((this.startEvent = null),
       (this.lastMoveEvent = null),
       (this.lastMoveEventInfo = null),
       (this.handlers = {}),
       (this.contextWindow = window),
       (this.updatePoint = () => {
         if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
         const f = Qa(this.lastMoveEventInfo, this.history),
           h = this.startEvent !== null,
           g = Ok(f.offset, { x: 0, y: 0 }) >= 3;
         if (!h && !g) return;
         const { point: w } = f,
           { timestamp: S } = Ce;
         this.history.push({ ...w, timestamp: S });
         const { onStart: C, onMove: m } = this.handlers;
         (h ||
           (C && C(this.lastMoveEvent, f),
           (this.startEvent = this.lastMoveEvent)),
           m && m(this.lastMoveEvent, f));
       }),
       (this.handlePointerMove = (f, h) => {
         ((this.lastMoveEvent = f),
           (this.lastMoveEventInfo = Ya(h, this.transformPagePoint)),
           Y.update(this.updatePoint, !0));
       }),
       (this.handlePointerUp = (f, h) => {
         this.end();
         const {
           onEnd: g,
           onSessionEnd: w,
           resumeAnimation: S,
         } = this.handlers;
         if (
           (this.dragSnapToOrigin && S && S(),
           !(this.lastMoveEvent && this.lastMoveEventInfo))
         )
           return;
         const C = Qa(
           f.type === "pointercancel"
             ? this.lastMoveEventInfo
             : Ya(h, this.transformPagePoint),
           this.history,
         );
         (this.startEvent && g && g(f, C), w && w(f, C));
       }),
       !Mc(t))
     )
       return;
     ((this.dragSnapToOrigin = s),
       (this.handlers = n),
       (this.transformPagePoint = r),
       (this.contextWindow = i || window));
     const o = cs(t),
       a = Ya(o, this.transformPagePoint),
       { point: l } = a,
       { timestamp: u } = Ce;
     this.history = [{ ...l, timestamp: u }];
     const { onSessionStart: c } = n;
     (c && c(t, Qa(a, this.history)),
       (this.removeListeners = us(
         ji(this.contextWindow, "pointermove", this.handlePointerMove),
         ji(this.contextWindow, "pointerup", this.handlePointerUp),
         ji(this.contextWindow, "pointercancel", this.handlePointerUp),
       )));
   }
   updateHandlers(t) {
     this.handlers = t;
   }
   end() {
     (this.removeListeners && this.removeListeners(), Lt(this.updatePoint));
   }
 }
 function Ya(e, t) {
   return t ? { point: t(e.point) } : e;
 }
 function nh(e, t) {
   return { x: e.x - t.x, y: e.y - t.y };
 }
 function Qa({ point: e }, t) {
   return {
     point: e,
     delta: nh(e, Qv(t)),
     offset: nh(e, Ik(t)),
     velocity: Bk(t, 0.1),
   };
 }
 function Ik(e) {
   return e[0];
 }
 function Qv(e) {
   return e[e.length - 1];
 }
 function Bk(e, t) {
   if (e.length < 2) return { x: 0, y: 0 };
   let n = e.length - 1,
     r = null;
   const i = Qv(e);
   for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Zt(t))); ) n--;
   if (!r) return { x: 0, y: 0 };
   const s = Jt(i.timestamp - r.timestamp);
   if (s === 0) return { x: 0, y: 0 };
   const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
   return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
 }
 const Xv = 1e-4,
   Uk = 1 - Xv,
   $k = 1 + Xv,
   Zv = 0.01,
   Wk = 0 - Zv,
   Hk = 0 + Zv;
 function ut(e) {
   return e.max - e.min;
 }
 function Kk(e, t, n) {
   return Math.abs(e - t) <= n;
 }
 function rh(e, t, n, r = 0.5) {
   ((e.origin = r),
     (e.originPoint = ce(t.min, t.max, e.origin)),
     (e.scale = ut(n) / ut(t)),
     (e.translate = ce(n.min, n.max, e.origin) - e.originPoint),
     ((e.scale >= Uk && e.scale <= $k) || isNaN(e.scale)) && (e.scale = 1),
     ((e.translate >= Wk && e.translate <= Hk) || isNaN(e.translate)) &&
       (e.translate = 0));
 }
 function Ni(e, t, n, r) {
   (rh(e.x, t.x, n.x, r ? r.originX : void 0),
     rh(e.y, t.y, n.y, r ? r.originY : void 0));
 }
 function ih(e, t, n) {
   ((e.min = n.min + t.min), (e.max = e.min + ut(t)));
 }
 function Gk(e, t, n) {
   (ih(e.x, t.x, n.x), ih(e.y, t.y, n.y));
 }
 function sh(e, t, n) {
   ((e.min = t.min - n.min), (e.max = e.min + ut(t)));
 }
 function Vi(e, t, n) {
   (sh(e.x, t.x, n.x), sh(e.y, t.y, n.y));
 }
 function qk(e, { min: t, max: n }, r) {
   return (
     t !== void 0 && e < t
       ? (e = r ? ce(t, e, r.min) : Math.max(e, t))
       : n !== void 0 && e > n && (e = r ? ce(n, e, r.max) : Math.min(e, n)),
     e
   );
 }
 function oh(e, t, n) {
   return {
     min: t !== void 0 ? e.min + t : void 0,
     max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
   };
 }
 function Yk(e, { top: t, left: n, bottom: r, right: i }) {
   return { x: oh(e.x, n, i), y: oh(e.y, t, r) };
 }
 function ah(e, t) {
   let n = t.min - e.min,
     r = t.max - e.max;
   return (
     t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
     { min: n, max: r }
   );
 }
 function Qk(e, t) {
   return { x: ah(e.x, t.x), y: ah(e.y, t.y) };
 }
 function Xk(e, t) {
   let n = 0.5;
   const r = ut(e),
     i = ut(t);
   return (
     i > r
       ? (n = Jn(t.min, t.max - r, e.min))
       : r > i && (n = Jn(e.min, e.max - i, t.min)),
     Kt(0, 1, n)
   );
 }
 function Zk(e, t) {
   const n = {};
   return (
     t.min !== void 0 && (n.min = t.min - e.min),
     t.max !== void 0 && (n.max = t.max - e.min),
     n
   );
 }
 const du = 0.35;
 function Jk(e = du) {
   return (
     e === !1 ? (e = 0) : e === !0 && (e = du),
     { x: lh(e, "left", "right"), y: lh(e, "top", "bottom") }
   );
 }
 function lh(e, t, n) {
   return { min: uh(e, t), max: uh(e, n) };
 }
 function uh(e, t) {
   return typeof e == "number" ? e : e[t] || 0;
 }
 const ch = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
   Pr = () => ({ x: ch(), y: ch() }),
   dh = () => ({ min: 0, max: 0 }),
   ve = () => ({ x: dh(), y: dh() });
 function pt(e) {
   return [e("x"), e("y")];
 }
 function Jv({ top: e, left: t, right: n, bottom: r }) {
   return { x: { min: t, max: n }, y: { min: e, max: r } };
 }
 function eP({ x: e, y: t }) {
   return { top: t.min, right: e.max, bottom: t.max, left: e.min };
 }
 function tP(e, t) {
   if (!t) return e;
   const n = t({ x: e.left, y: e.top }),
     r = t({ x: e.right, y: e.bottom });
   return { top: n.y, left: n.x, bottom: r.y, right: r.x };
 }
 function Xa(e) {
   return e === void 0 || e === 1;
 }
 function fu({ scale: e, scaleX: t, scaleY: n }) {
   return !Xa(e) || !Xa(t) || !Xa(n);
 }
 function zn(e) {
   return (
     fu(e) ||
     ey(e) ||
     e.z ||
     e.rotate ||
     e.rotateX ||
     e.rotateY ||
     e.skewX ||
     e.skewY
   );
 }
 function ey(e) {
   return fh(e.x) || fh(e.y);
 }
 function fh(e) {
   return e && e !== "0%";
 }
 function Do(e, t, n) {
   const r = e - n,
     i = t * r;
   return n + i;
 }
 function hh(e, t, n, r, i) {
   return (i !== void 0 && (e = Do(e, i, r)), Do(e, n, r) + t);
 }
 function hu(e, t = 0, n = 1, r, i) {
   ((e.min = hh(e.min, t, n, r, i)), (e.max = hh(e.max, t, n, r, i)));
 }
 function ty(e, { x: t, y: n }) {
   (hu(e.x, t.translate, t.scale, t.originPoint),
     hu(e.y, n.translate, n.scale, n.originPoint));
 }
 const ph = 0.999999999999,
   mh = 1.0000000000001;
 function nP(e, t, n, r = !1) {
   const i = n.length;
   if (!i) return;
   t.x = t.y = 1;
   let s, o;
   for (let a = 0; a < i; a++) {
     ((s = n[a]), (o = s.projectionDelta));
     const { visualElement: l } = s.options;
     (l && l.props.style && l.props.style.display === "contents") ||
       (r &&
         s.options.layoutScroll &&
         s.scroll &&
         s !== s.root &&
         Er(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
       o && ((t.x *= o.x.scale), (t.y *= o.y.scale), ty(e, o)),
       r && zn(s.latestValues) && Er(e, s.latestValues));
   }
   (t.x < mh && t.x > ph && (t.x = 1), t.y < mh && t.y > ph && (t.y = 1));
 }
 function Tr(e, t) {
   ((e.min = e.min + t), (e.max = e.max + t));
 }
 function gh(e, t, n, r, i = 0.5) {
   const s = ce(e.min, e.max, i);
   hu(e, t, n, s, r);
 }
 function Er(e, t) {
   (gh(e.x, t.x, t.scaleX, t.scale, t.originX),
     gh(e.y, t.y, t.scaleY, t.scale, t.originY));
 }
 function ny(e, t) {
   return Jv(tP(e.getBoundingClientRect(), t));
 }
 function rP(e, t, n) {
   const r = ny(e, n),
     { scroll: i } = t;
   return (i && (Tr(r.x, i.offset.x), Tr(r.y, i.offset.y)), r);
 }
 const ry = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
   iP = new WeakMap();
 class sP {
   constructor(t) {
     ((this.openDragLock = null),
       (this.isDragging = !1),
       (this.currentDirection = null),
       (this.originPoint = { x: 0, y: 0 }),
       (this.constraints = !1),
       (this.hasMutatedConstraints = !1),
       (this.elastic = ve()),
       (this.visualElement = t));
   }
   start(t, { snapToCursor: n = !1 } = {}) {
     const { presenceContext: r } = this.visualElement;
     if (r && r.isPresent === !1) return;
     const i = (c) => {
         const { dragSnapToOrigin: f } = this.getProps();
         (f ? this.pauseAnimation() : this.stopAnimation(),
           n && this.snapToCursor(cs(c).point));
       },
       s = (c, f) => {
         const {
           drag: h,
           dragPropagation: g,
           onDragStart: w,
         } = this.getProps();
         if (
           h &&
           !g &&
           (this.openDragLock && this.openDragLock(),
           (this.openDragLock = Jw(h)),
           !this.openDragLock)
         )
           return;
         ((this.isDragging = !0),
           (this.currentDirection = null),
           this.resolveConstraints(),
           this.visualElement.projection &&
             ((this.visualElement.projection.isAnimationBlocked = !0),
             (this.visualElement.projection.target = void 0)),
           pt((C) => {
             let m = this.getAxisMotionValue(C).get() || 0;
             if (Wt.test(m)) {
               const { projection: p } = this.visualElement;
               if (p && p.layout) {
                 const v = p.layout.layoutBox[C];
                 v && (m = ut(v) * (parseFloat(m) / 100));
               }
             }
             this.originPoint[C] = m;
           }),
           w && Y.postRender(() => w(c, f)),
           ru(this.visualElement, "transform"));
         const { animationState: S } = this.visualElement;
         S && S.setActive("whileDrag", !0);
       },
       o = (c, f) => {
         const {
           dragPropagation: h,
           dragDirectionLock: g,
           onDirectionLock: w,
           onDrag: S,
         } = this.getProps();
         if (!h && !this.openDragLock) return;
         const { offset: C } = f;
         if (g && this.currentDirection === null) {
           ((this.currentDirection = oP(C)),
             this.currentDirection !== null && w && w(this.currentDirection));
           return;
         }
         (this.updateAxis("x", f.point, C),
           this.updateAxis("y", f.point, C),
           this.visualElement.render(),
           S && S(c, f));
       },
       a = (c, f) => this.stop(c, f),
       l = () =>
         pt((c) => {
           var f;
           return (
             this.getAnimationState(c) === "paused" &&
             ((f = this.getAxisMotionValue(c).animation) === null ||
             f === void 0
               ? void 0
               : f.play())
           );
         }),
       { dragSnapToOrigin: u } = this.getProps();
     this.panSession = new Yv(
       t,
       {
         onSessionStart: i,
         onStart: s,
         onMove: o,
         onSessionEnd: a,
         resumeAnimation: l,
       },
       {
         transformPagePoint: this.visualElement.getTransformPagePoint(),
         dragSnapToOrigin: u,
         contextWindow: ry(this.visualElement),
       },
     );
   }
   stop(t, n) {
     const r = this.isDragging;
     if ((this.cancel(), !r)) return;
     const { velocity: i } = n;
     this.startAnimation(i);
     const { onDragEnd: s } = this.getProps();
     s && Y.postRender(() => s(t, n));
   }
   cancel() {
     this.isDragging = !1;
     const { projection: t, animationState: n } = this.visualElement;
     (t && (t.isAnimationBlocked = !1),
       this.panSession && this.panSession.end(),
       (this.panSession = void 0));
     const { dragPropagation: r } = this.getProps();
     (!r &&
       this.openDragLock &&
       (this.openDragLock(), (this.openDragLock = null)),
       n && n.setActive("whileDrag", !1));
   }
   updateAxis(t, n, r) {
     const { drag: i } = this.getProps();
     if (!r || !bs(t, i, this.currentDirection)) return;
     const s = this.getAxisMotionValue(t);
     let o = this.originPoint[t] + r[t];
     (this.constraints &&
       this.constraints[t] &&
       (o = qk(o, this.constraints[t], this.elastic[t])),
       s.set(o));
   }
   resolveConstraints() {
     var t;
     const { dragConstraints: n, dragElastic: r } = this.getProps(),
       i =
         this.visualElement.projection && !this.visualElement.projection.layout
           ? this.visualElement.projection.measure(!1)
           : (t = this.visualElement.projection) === null || t === void 0
             ? void 0
             : t.layout,
       s = this.constraints;
     (n && Sr(n)
       ? this.constraints || (this.constraints = this.resolveRefConstraints())
       : n && i
         ? (this.constraints = Yk(i.layoutBox, n))
         : (this.constraints = !1),
       (this.elastic = Jk(r)),
       s !== this.constraints &&
         i &&
         this.constraints &&
         !this.hasMutatedConstraints &&
         pt((o) => {
           this.constraints !== !1 &&
             this.getAxisMotionValue(o) &&
             (this.constraints[o] = Zk(i.layoutBox[o], this.constraints[o]));
         }));
   }
   resolveRefConstraints() {
     const { dragConstraints: t, onMeasureDragConstraints: n } =
       this.getProps();
     if (!t || !Sr(t)) return !1;
     const r = t.current,
       { projection: i } = this.visualElement;
     if (!i || !i.layout) return !1;
     const s = rP(r, i.root, this.visualElement.getTransformPagePoint());
     let o = Qk(i.layout.layoutBox, s);
     if (n) {
       const a = n(eP(o));
       ((this.hasMutatedConstraints = !!a), a && (o = Jv(a)));
     }
     return o;
   }
   startAnimation(t) {
     const {
         drag: n,
         dragMomentum: r,
         dragElastic: i,
         dragTransition: s,
         dragSnapToOrigin: o,
         onDragTransitionEnd: a,
       } = this.getProps(),
       l = this.constraints || {},
       u = pt((c) => {
         if (!bs(c, n, this.currentDirection)) return;
         let f = (l && l[c]) || {};
         o && (f = { min: 0, max: 0 });
         const h = i ? 200 : 1e6,
           g = i ? 40 : 1e7,
           w = {
             type: "inertia",
             velocity: r ? t[c] : 0,
             bounceStiffness: h,
             bounceDamping: g,
             timeConstant: 750,
             restDelta: 1,
             restSpeed: 10,
             ...s,
             ...f,
           };
         return this.startAxisValueAnimation(c, w);
       });
     return Promise.all(u).then(a);
   }
   startAxisValueAnimation(t, n) {
     const r = this.getAxisMotionValue(t);
     return (
       ru(this.visualElement, t),
       r.start(Qc(t, r, 0, n, this.visualElement, !1))
     );
   }
   stopAnimation() {
     pt((t) => this.getAxisMotionValue(t).stop());
   }
   pauseAnimation() {
     pt((t) => {
       var n;
       return (n = this.getAxisMotionValue(t).animation) === null ||
         n === void 0
         ? void 0
         : n.pause();
     });
   }
   getAnimationState(t) {
     var n;
     return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
       ? void 0
       : n.state;
   }
   getAxisMotionValue(t) {
     const n = `_drag${t.toUpperCase()}`,
       r = this.visualElement.getProps(),
       i = r[n];
     return (
       i ||
       this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
     );
   }
   snapToCursor(t) {
     pt((n) => {
       const { drag: r } = this.getProps();
       if (!bs(n, r, this.currentDirection)) return;
       const { projection: i } = this.visualElement,
         s = this.getAxisMotionValue(n);
       if (i && i.layout) {
         const { min: o, max: a } = i.layout.layoutBox[n];
         s.set(t[n] - ce(o, a, 0.5));
       }
     });
   }
   scalePositionWithinConstraints() {
     if (!this.visualElement.current) return;
     const { drag: t, dragConstraints: n } = this.getProps(),
       { projection: r } = this.visualElement;
     if (!Sr(n) || !r || !this.constraints) return;
     this.stopAnimation();
     const i = { x: 0, y: 0 };
     pt((o) => {
       const a = this.getAxisMotionValue(o);
       if (a && this.constraints !== !1) {
         const l = a.get();
         i[o] = Xk({ min: l, max: l }, this.constraints[o]);
       }
     });
     const { transformTemplate: s } = this.visualElement.getProps();
     ((this.visualElement.current.style.transform = s ? s({}, "") : "none"),
       r.root && r.root.updateScroll(),
       r.updateLayout(),
       this.resolveConstraints(),
       pt((o) => {
         if (!bs(o, t, null)) return;
         const a = this.getAxisMotionValue(o),
           { min: l, max: u } = this.constraints[o];
         a.set(ce(l, u, i[o]));
       }));
   }
   addListeners() {
     if (!this.visualElement.current) return;
     iP.set(this.visualElement, this);
     const t = this.visualElement.current,
       n = ji(t, "pointerdown", (l) => {
         const { drag: u, dragListener: c = !0 } = this.getProps();
         u && c && this.start(l);
       }),
       r = () => {
         const { dragConstraints: l } = this.getProps();
         Sr(l) &&
           l.current &&
           (this.constraints = this.resolveRefConstraints());
       },
       { projection: i } = this.visualElement,
       s = i.addEventListener("measure", r);
     (i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
       Y.read(r));
     const o = Ji(window, "resize", () =>
         this.scalePositionWithinConstraints(),
       ),
       a = i.addEventListener(
         "didUpdate",
         ({ delta: l, hasLayoutChanged: u }) => {
           this.isDragging &&
             u &&
             (pt((c) => {
               const f = this.getAxisMotionValue(c);
               f &&
                 ((this.originPoint[c] += l[c].translate),
                 f.set(f.get() + l[c].translate));
             }),
             this.visualElement.render());
         },
       );
     return () => {
       (o(), n(), s(), a && a());
     };
   }
   getProps() {
     const t = this.visualElement.getProps(),
       {
         drag: n = !1,
         dragDirectionLock: r = !1,
         dragPropagation: i = !1,
         dragConstraints: s = !1,
         dragElastic: o = du,
         dragMomentum: a = !0,
       } = t;
     return {
       ...t,
       drag: n,
       dragDirectionLock: r,
       dragPropagation: i,
       dragConstraints: s,
       dragElastic: o,
       dragMomentum: a,
     };
   }
 }
 function bs(e, t, n) {
   return (t === !0 || t === e) && (n === null || n === e);
 }
 function oP(e, t = 10) {
   let n = null;
   return (Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n);
 }
 class aP extends Nn {
   constructor(t) {
     (super(t),
       (this.removeGroupControls = Ye),
       (this.removeListeners = Ye),
       (this.controls = new sP(t)));
   }
   mount() {
     const { dragControls: t } = this.node.getProps();
     (t && (this.removeGroupControls = t.subscribe(this.controls)),
       (this.removeListeners = this.controls.addListeners() || Ye));
   }
   unmount() {
     (this.removeGroupControls(), this.removeListeners());
   }
 }
 const vh = (e) => (t, n) => {
   e && Y.postRender(() => e(t, n));
 };
 class lP extends Nn {
   constructor() {
     (super(...arguments), (this.removePointerDownListener = Ye));
   }
   onPointerDown(t) {
     this.session = new Yv(t, this.createPanHandlers(), {
       transformPagePoint: this.node.getTransformPagePoint(),
       contextWindow: ry(this.node),
     });
   }
   createPanHandlers() {
     const {
       onPanSessionStart: t,
       onPanStart: n,
       onPan: r,
       onPanEnd: i,
     } = this.node.getProps();
     return {
       onSessionStart: vh(t),
       onStart: vh(n),
       onMove: r,
       onEnd: (s, o) => {
         (delete this.session, i && Y.postRender(() => i(s, o)));
       },
     };
   }
   mount() {
     this.removePointerDownListener = ji(
       this.node.current,
       "pointerdown",
       (t) => this.onPointerDown(t),
     );
   }
   update() {
     this.session && this.session.updateHandlers(this.createPanHandlers());
   }
   unmount() {
     (this.removePointerDownListener(), this.session && this.session.end());
   }
 }
 const Xs = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
 function yh(e, t) {
   return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
 }
 const ai = {
     correct: (e, t) => {
       if (!t.target) return e;
       if (typeof e == "string")
         if (B.test(e)) e = parseFloat(e);
         else return e;
       const n = yh(e, t.target.x),
         r = yh(e, t.target.y);
       return `${n}% ${r}%`;
     },
   },
   uP = {
     correct: (e, { treeScale: t, projectionDelta: n }) => {
       const r = e,
         i = En.parse(e);
       if (i.length > 5) return r;
       const s = En.createTransformer(e),
         o = typeof i[0] != "number" ? 1 : 0,
         a = n.x.scale * t.x,
         l = n.y.scale * t.y;
       ((i[0 + o] /= a), (i[1 + o] /= l));
       const u = ce(a, l, 0.5);
       return (
         typeof i[2 + o] == "number" && (i[2 + o] /= u),
         typeof i[3 + o] == "number" && (i[3 + o] /= u),
         s(i)
       );
     },
   };
 class cP extends E.Component {
   componentDidMount() {
     const {
         visualElement: t,
         layoutGroup: n,
         switchLayoutGroup: r,
         layoutId: i,
       } = this.props,
       { projection: s } = t;
     (bw(dP),
       s &&
         (n.group && n.group.add(s),
         r && r.register && i && r.register(s),
         s.root.didUpdate(),
         s.addEventListener("animationComplete", () => {
           this.safeToRemove();
         }),
         s.setOptions({
           ...s.options,
           onExitComplete: () => this.safeToRemove(),
         })),
       (Xs.hasEverUpdated = !0));
   }
   getSnapshotBeforeUpdate(t) {
     const {
         layoutDependency: n,
         visualElement: r,
         drag: i,
         isPresent: s,
       } = this.props,
       o = r.projection;
     return (
       o &&
         ((o.isPresent = s),
         i || t.layoutDependency !== n || n === void 0
           ? o.willUpdate()
           : this.safeToRemove(),
         t.isPresent !== s &&
           (s
             ? o.promote()
             : o.relegate() ||
               Y.postRender(() => {
                 const a = o.getStack();
                 (!a || !a.members.length) && this.safeToRemove();
               }))),
       null
     );
   }
   componentDidUpdate() {
     const { projection: t } = this.props.visualElement;
     t &&
       (t.root.didUpdate(),
       Pc.postRender(() => {
         !t.currentAnimation && t.isLead() && this.safeToRemove();
       }));
   }
   componentWillUnmount() {
     const {
         visualElement: t,
         layoutGroup: n,
         switchLayoutGroup: r,
       } = this.props,
       { projection: i } = t;
     i &&
       (i.scheduleCheckAfterUnmount(),
       n && n.group && n.group.remove(i),
       r && r.deregister && r.deregister(i));
   }
   safeToRemove() {
     const { safeToRemove: t } = this.props;
     t && t();
   }
   render() {
     return null;
   }
 }
 function iy(e) {
   const [t, n] = zg(),
     r = E.useContext(vc);
   return d.jsx(cP, {
     ...e,
     layoutGroup: r,
     switchLayoutGroup: E.useContext(Kg),
     isPresent: t,
     safeToRemove: n,
   });
 }
 const dP = {
   borderRadius: {
     ...ai,
     applyTo: [
       "borderTopLeftRadius",
       "borderTopRightRadius",
       "borderBottomLeftRadius",
       "borderBottomRightRadius",
     ],
   },
   borderTopLeftRadius: ai,
   borderTopRightRadius: ai,
   borderBottomLeftRadius: ai,
   borderBottomRightRadius: ai,
   boxShadow: uP,
 };
 function fP(e, t, n) {
   const r = He(e) ? e : Bt(e);
   return (r.start(Qc("", r, t, n)), r.animation);
 }
 function hP(e) {
   return e instanceof SVGElement && e.tagName !== "svg";
 }
 const pP = (e, t) => e.depth - t.depth;
 class mP {
   constructor() {
     ((this.children = []), (this.isDirty = !1));
   }
   add(t) {
     (zc(this.children, t), (this.isDirty = !0));
   }
   remove(t) {
     (Fc(this.children, t), (this.isDirty = !0));
   }
   forEach(t) {
     (this.isDirty && this.children.sort(pP),
       (this.isDirty = !1),
       this.children.forEach(t));
   }
 }
 function gP(e, t) {
   const n = Ht.now(),
     r = ({ timestamp: i }) => {
       const s = i - n;
       s >= t && (Lt(r), e(s - t));
     };
   return (Y.read(r, !0), () => Lt(r));
 }
 const sy = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
   vP = sy.length,
   xh = (e) => (typeof e == "string" ? parseFloat(e) : e),
   wh = (e) => typeof e == "number" || B.test(e);
 function yP(e, t, n, r, i, s) {
   i
     ? ((e.opacity = ce(0, n.opacity !== void 0 ? n.opacity : 1, xP(r))),
       (e.opacityExit = ce(t.opacity !== void 0 ? t.opacity : 1, 0, wP(r))))
     : s &&
       (e.opacity = ce(
         t.opacity !== void 0 ? t.opacity : 1,
         n.opacity !== void 0 ? n.opacity : 1,
         r,
       ));
   for (let o = 0; o < vP; o++) {
     const a = `border${sy[o]}Radius`;
     let l = Sh(t, a),
       u = Sh(n, a);
     if (l === void 0 && u === void 0) continue;
     (l || (l = 0),
       u || (u = 0),
       l === 0 || u === 0 || wh(l) === wh(u)
         ? ((e[a] = Math.max(ce(xh(l), xh(u), r), 0)),
           (Wt.test(u) || Wt.test(l)) && (e[a] += "%"))
         : (e[a] = u));
   }
   (t.rotate || n.rotate) && (e.rotate = ce(t.rotate || 0, n.rotate || 0, r));
 }
 function Sh(e, t) {
   return e[t] !== void 0 ? e[t] : e.borderRadius;
 }
 const xP = oy(0, 0.5, Pv),
   wP = oy(0.5, 0.95, Ye);
 function oy(e, t, n) {
   return (r) => (r < e ? 0 : r > t ? 1 : n(Jn(e, t, r)));
 }
 function kh(e, t) {
   ((e.min = t.min), (e.max = t.max));
 }
 function ht(e, t) {
   (kh(e.x, t.x), kh(e.y, t.y));
 }
 function Ph(e, t) {
   ((e.translate = t.translate),
     (e.scale = t.scale),
     (e.originPoint = t.originPoint),
     (e.origin = t.origin));
 }
 function Th(e, t, n, r, i) {
   return (
     (e -= t),
     (e = Do(e, 1 / n, r)),
     i !== void 0 && (e = Do(e, 1 / i, r)),
     e
   );
 }
 function SP(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
   if (
     (Wt.test(t) &&
       ((t = parseFloat(t)), (t = ce(o.min, o.max, t / 100) - o.min)),
     typeof t != "number")
   )
     return;
   let a = ce(s.min, s.max, r);
   (e === s && (a -= t),
     (e.min = Th(e.min, t, n, a, i)),
     (e.max = Th(e.max, t, n, a, i)));
 }
 function Eh(e, t, [n, r, i], s, o) {
   SP(e, t[n], t[r], t[i], t.scale, s, o);
 }
 const kP = ["x", "scaleX", "originX"],
   PP = ["y", "scaleY", "originY"];
 function Ch(e, t, n, r) {
   (Eh(e.x, t, kP, n ? n.x : void 0, r ? r.x : void 0),
     Eh(e.y, t, PP, n ? n.y : void 0, r ? r.y : void 0));
 }
 function Ah(e) {
   return e.translate === 0 && e.scale === 1;
 }
 function ay(e) {
   return Ah(e.x) && Ah(e.y);
 }
 function jh(e, t) {
   return e.min === t.min && e.max === t.max;
 }
 function TP(e, t) {
   return jh(e.x, t.x) && jh(e.y, t.y);
 }
 function Nh(e, t) {
   return (
     Math.round(e.min) === Math.round(t.min) &&
     Math.round(e.max) === Math.round(t.max)
   );
 }
 function ly(e, t) {
   return Nh(e.x, t.x) && Nh(e.y, t.y);
 }
 function Vh(e) {
   return ut(e.x) / ut(e.y);
 }
 function Rh(e, t) {
   return (
     e.translate === t.translate &&
     e.scale === t.scale &&
     e.originPoint === t.originPoint
   );
 }
 class EP {
   constructor() {
     this.members = [];
   }
   add(t) {
     (zc(this.members, t), t.scheduleRender());
   }
   remove(t) {
     if (
       (Fc(this.members, t),
       t === this.prevLead && (this.prevLead = void 0),
       t === this.lead)
     ) {
       const n = this.members[this.members.length - 1];
       n && this.promote(n);
     }
   }
   relegate(t) {
     const n = this.members.findIndex((i) => t === i);
     if (n === 0) return !1;
     let r;
     for (let i = n; i >= 0; i--) {
       const s = this.members[i];
       if (s.isPresent !== !1) {
         r = s;
         break;
       }
     }
     return r ? (this.promote(r), !0) : !1;
   }
   promote(t, n) {
     const r = this.lead;
     if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
       (r.instance && r.scheduleRender(),
         t.scheduleRender(),
         (t.resumeFrom = r),
         n && (t.resumeFrom.preserveOpacity = !0),
         r.snapshot &&
           ((t.snapshot = r.snapshot),
           (t.snapshot.latestValues = r.animationValues || r.latestValues)),
         t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
       const { crossfade: i } = t.options;
       i === !1 && r.hide();
     }
   }
   exitAnimationComplete() {
     this.members.forEach((t) => {
       const { options: n, resumingFrom: r } = t;
       (n.onExitComplete && n.onExitComplete(),
         r && r.options.onExitComplete && r.options.onExitComplete());
     });
   }
   scheduleRender() {
     this.members.forEach((t) => {
       t.instance && t.scheduleRender(!1);
     });
   }
   removeLeadSnapshot() {
     this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
   }
 }
 function CP(e, t, n) {
   let r = "";
   const i = e.x.translate / t.x,
     s = e.y.translate / t.y,
     o = (n == null ? void 0 : n.z) || 0;
   if (
     ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
     (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
     n)
   ) {
     const {
       transformPerspective: u,
       rotate: c,
       rotateX: f,
       rotateY: h,
       skewX: g,
       skewY: w,
     } = n;
     (u && (r = `perspective(${u}px) ${r}`),
       c && (r += `rotate(${c}deg) `),
       f && (r += `rotateX(${f}deg) `),
       h && (r += `rotateY(${h}deg) `),
       g && (r += `skewX(${g}deg) `),
       w && (r += `skewY(${w}deg) `));
   }
   const a = e.x.scale * t.x,
     l = e.y.scale * t.y;
   return ((a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none");
 }
 const Fn = {
     type: "projectionFrame",
     totalNodes: 0,
     resolvedTargetDeltas: 0,
     recalculatedProjection: 0,
   },
   gi = typeof window != "undefined" && window.MotionDebug !== void 0,
   Za = ["", "X", "Y", "Z"],
   AP = { visibility: "hidden" },
   Dh = 1e3;
 let jP = 0;
 function Ja(e, t, n, r) {
   const { latestValues: i } = t;
   i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
 }
 function uy(e) {
   if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
   const { visualElement: t } = e.options;
   if (!t) return;
   const n = gv(t);
   if (window.MotionHasOptimisedAnimation(n, "transform")) {
     const { layout: i, layoutId: s } = e.options;
     window.MotionCancelOptimisedAnimation(n, "transform", Y, !(i || s));
   }
   const { parent: r } = e;
   r && !r.hasCheckedOptimisedAppear && uy(r);
 }
 function cy({
   attachResizeListener: e,
   defaultParent: t,
   measureScroll: n,
   checkIsScrollRoot: r,
   resetTransform: i,
 }) {
   return class {
     constructor(o = {}, a = t == null ? void 0 : t()) {
       ((this.id = jP++),
         (this.animationId = 0),
         (this.children = new Set()),
         (this.options = {}),
         (this.isTreeAnimating = !1),
         (this.isAnimationBlocked = !1),
         (this.isLayoutDirty = !1),
         (this.isProjectionDirty = !1),
         (this.isSharedProjectionDirty = !1),
         (this.isTransformDirty = !1),
         (this.updateManuallyBlocked = !1),
         (this.updateBlockedByResize = !1),
         (this.isUpdating = !1),
         (this.isSVG = !1),
         (this.needsReset = !1),
         (this.shouldResetTransform = !1),
         (this.hasCheckedOptimisedAppear = !1),
         (this.treeScale = { x: 1, y: 1 }),
         (this.eventHandlers = new Map()),
         (this.hasTreeAnimated = !1),
         (this.updateScheduled = !1),
         (this.scheduleUpdate = () => this.update()),
         (this.projectionUpdateScheduled = !1),
         (this.checkUpdateFailed = () => {
           this.isUpdating &&
             ((this.isUpdating = !1), this.clearAllSnapshots());
         }),
         (this.updateProjection = () => {
           ((this.projectionUpdateScheduled = !1),
             gi &&
               (Fn.totalNodes =
                 Fn.resolvedTargetDeltas =
                 Fn.recalculatedProjection =
                   0),
             this.nodes.forEach(RP),
             this.nodes.forEach(MP),
             this.nodes.forEach(zP),
             this.nodes.forEach(DP),
             gi && window.MotionDebug.record(Fn));
         }),
         (this.resolvedRelativeTargetAt = 0),
         (this.hasProjected = !1),
         (this.isVisible = !0),
         (this.animationProgress = 0),
         (this.sharedNodes = new Map()),
         (this.latestValues = o),
         (this.root = a ? a.root || a : this),
         (this.path = a ? [...a.path, a] : []),
         (this.parent = a),
         (this.depth = a ? a.depth + 1 : 0));
       for (let l = 0; l < this.path.length; l++)
         this.path[l].shouldResetTransform = !0;
       this.root === this && (this.nodes = new mP());
     }
     addEventListener(o, a) {
       return (
         this.eventHandlers.has(o) || this.eventHandlers.set(o, new Oc()),
         this.eventHandlers.get(o).add(a)
       );
     }
     notifyListeners(o, ...a) {
       const l = this.eventHandlers.get(o);
       l && l.notify(...a);
     }
     hasListeners(o) {
       return this.eventHandlers.has(o);
     }
     mount(o, a = this.root.hasTreeAnimated) {
       if (this.instance) return;
       ((this.isSVG = hP(o)), (this.instance = o));
       const { layoutId: l, layout: u, visualElement: c } = this.options;
       if (
         (c && !c.current && c.mount(o),
         this.root.nodes.add(this),
         this.parent && this.parent.children.add(this),
         a && (u || l) && (this.isLayoutDirty = !0),
         e)
       ) {
         let f;
         const h = () => (this.root.updateBlockedByResize = !1);
         e(o, () => {
           ((this.root.updateBlockedByResize = !0),
             f && f(),
             (f = gP(h, 250)),
             Xs.hasAnimatedSinceResize &&
               ((Xs.hasAnimatedSinceResize = !1), this.nodes.forEach(bh)));
         });
       }
       (l && this.root.registerSharedNode(l, this),
         this.options.animate !== !1 &&
           c &&
           (l || u) &&
           this.addEventListener(
             "didUpdate",
             ({
               delta: f,
               hasLayoutChanged: h,
               hasRelativeTargetChanged: g,
               layout: w,
             }) => {
               if (this.isTreeAnimationBlocked()) {
                 ((this.target = void 0), (this.relativeTarget = void 0));
                 return;
               }
               const S =
                   this.options.transition || c.getDefaultTransition() || UP,
                 { onLayoutAnimationStart: C, onLayoutAnimationComplete: m } =
                   c.getProps(),
                 p = !this.targetLayout || !ly(this.targetLayout, w) || g,
                 v = !h && g;
               if (
                 this.options.layoutRoot ||
                 (this.resumeFrom && this.resumeFrom.instance) ||
                 v ||
                 (h && (p || !this.currentAnimation))
               ) {
                 (this.resumeFrom &&
                   ((this.resumingFrom = this.resumeFrom),
                   (this.resumingFrom.resumingFrom = void 0)),
                   this.setAnimationOrigin(f, v));
                 const P = { ...Lc(S, "layout"), onPlay: C, onComplete: m };
                 ((c.shouldReduceMotion || this.options.layoutRoot) &&
                   ((P.delay = 0), (P.type = !1)),
                   this.startAnimation(P));
               } else
                 (h || bh(this),
                   this.isLead() &&
                     this.options.onExitComplete &&
                     this.options.onExitComplete());
               this.targetLayout = w;
             },
           ));
     }
     unmount() {
       (this.options.layoutId && this.willUpdate(),
         this.root.nodes.remove(this));
       const o = this.getStack();
       (o && o.remove(this),
         this.parent && this.parent.children.delete(this),
         (this.instance = void 0),
         Lt(this.updateProjection));
     }
     blockUpdate() {
       this.updateManuallyBlocked = !0;
     }
     unblockUpdate() {
       this.updateManuallyBlocked = !1;
     }
     isUpdateBlocked() {
       return this.updateManuallyBlocked || this.updateBlockedByResize;
     }
     isTreeAnimationBlocked() {
       return (
         this.isAnimationBlocked ||
         (this.parent && this.parent.isTreeAnimationBlocked()) ||
         !1
       );
     }
     startUpdate() {
       this.isUpdateBlocked() ||
         ((this.isUpdating = !0),
         this.nodes && this.nodes.forEach(FP),
         this.animationId++);
     }
     getTransformTemplate() {
       const { visualElement: o } = this.options;
       return o && o.getProps().transformTemplate;
     }
     willUpdate(o = !0) {
       if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
         this.options.onExitComplete && this.options.onExitComplete();
         return;
       }
       if (
         (window.MotionCancelOptimisedAnimation &&
           !this.hasCheckedOptimisedAppear &&
           uy(this),
         !this.root.isUpdating && this.root.startUpdate(),
         this.isLayoutDirty)
       )
         return;
       this.isLayoutDirty = !0;
       for (let c = 0; c < this.path.length; c++) {
         const f = this.path[c];
         ((f.shouldResetTransform = !0),
           f.updateScroll("snapshot"),
           f.options.layoutRoot && f.willUpdate(!1));
       }
       const { layoutId: a, layout: l } = this.options;
       if (a === void 0 && !l) return;
       const u = this.getTransformTemplate();
       ((this.prevTransformTemplateValue = u
         ? u(this.latestValues, "")
         : void 0),
         this.updateSnapshot(),
         o && this.notifyListeners("willUpdate"));
     }
     update() {
       if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
         (this.unblockUpdate(),
           this.clearAllSnapshots(),
           this.nodes.forEach(Lh));
         return;
       }
       (this.isUpdating || this.nodes.forEach(bP),
         (this.isUpdating = !1),
         this.nodes.forEach(_P),
         this.nodes.forEach(NP),
         this.nodes.forEach(VP),
         this.clearAllSnapshots());
       const a = Ht.now();
       ((Ce.delta = Kt(0, 1e3 / 60, a - Ce.timestamp)),
         (Ce.timestamp = a),
         (Ce.isProcessing = !0),
         $a.update.process(Ce),
         $a.preRender.process(Ce),
         $a.render.process(Ce),
         (Ce.isProcessing = !1));
     }
     didUpdate() {
       this.updateScheduled ||
         ((this.updateScheduled = !0), Pc.read(this.scheduleUpdate));
     }
     clearAllSnapshots() {
       (this.nodes.forEach(LP), this.sharedNodes.forEach(OP));
     }
     scheduleUpdateProjection() {
       this.projectionUpdateScheduled ||
         ((this.projectionUpdateScheduled = !0),
         Y.preRender(this.updateProjection, !1, !0));
     }
     scheduleCheckAfterUnmount() {
       Y.postRender(() => {
         this.isLayoutDirty
           ? this.root.didUpdate()
           : this.root.checkUpdateFailed();
       });
     }
     updateSnapshot() {
       this.snapshot || !this.instance || (this.snapshot = this.measure());
     }
     updateLayout() {
       if (
         !this.instance ||
         (this.updateScroll(),
         !(this.options.alwaysMeasureLayout && this.isLead()) &&
           !this.isLayoutDirty)
       )
         return;
       if (this.resumeFrom && !this.resumeFrom.instance)
         for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
       const o = this.layout;
       ((this.layout = this.measure(!1)),
         (this.layoutCorrected = ve()),
         (this.isLayoutDirty = !1),
         (this.projectionDelta = void 0),
         this.notifyListeners("measure", this.layout.layoutBox));
       const { visualElement: a } = this.options;
       a &&
         a.notify(
           "LayoutMeasure",
           this.layout.layoutBox,
           o ? o.layoutBox : void 0,
         );
     }
     updateScroll(o = "measure") {
       let a = !!(this.options.layoutScroll && this.instance);
       if (
         (this.scroll &&
           this.scroll.animationId === this.root.animationId &&
           this.scroll.phase === o &&
           (a = !1),
         a)
       ) {
         const l = r(this.instance);
         this.scroll = {
           animationId: this.root.animationId,
           phase: o,
           isRoot: l,
           offset: n(this.instance),
           wasRoot: this.scroll ? this.scroll.isRoot : l,
         };
       }
     }
     resetTransform() {
       if (!i) return;
       const o =
           this.isLayoutDirty ||
           this.shouldResetTransform ||
           this.options.alwaysMeasureLayout,
         a = this.projectionDelta && !ay(this.projectionDelta),
         l = this.getTransformTemplate(),
         u = l ? l(this.latestValues, "") : void 0,
         c = u !== this.prevTransformTemplateValue;
       o &&
         (a || zn(this.latestValues) || c) &&
         (i(this.instance, u),
         (this.shouldResetTransform = !1),
         this.scheduleRender());
     }
     measure(o = !0) {
       const a = this.measurePageBox();
       let l = this.removeElementScroll(a);
       return (
         o && (l = this.removeTransform(l)),
         $P(l),
         {
           animationId: this.root.animationId,
           measuredBox: a,
           layoutBox: l,
           latestValues: {},
           source: this.id,
         }
       );
     }
     measurePageBox() {
       var o;
       const { visualElement: a } = this.options;
       if (!a) return ve();
       const l = a.measureViewportBox();
       if (
         !(
           ((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) ||
           this.path.some(WP)
         )
       ) {
         const { scroll: c } = this.root;
         c && (Tr(l.x, c.offset.x), Tr(l.y, c.offset.y));
       }
       return l;
     }
     removeElementScroll(o) {
       var a;
       const l = ve();
       if (
         (ht(l, o), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
       )
         return l;
       for (let u = 0; u < this.path.length; u++) {
         const c = this.path[u],
           { scroll: f, options: h } = c;
         c !== this.root &&
           f &&
           h.layoutScroll &&
           (f.wasRoot && ht(l, o), Tr(l.x, f.offset.x), Tr(l.y, f.offset.y));
       }
       return l;
     }
     applyTransform(o, a = !1) {
       const l = ve();
       ht(l, o);
       for (let u = 0; u < this.path.length; u++) {
         const c = this.path[u];
         (!a &&
           c.options.layoutScroll &&
           c.scroll &&
           c !== c.root &&
           Er(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
           zn(c.latestValues) && Er(l, c.latestValues));
       }
       return (zn(this.latestValues) && Er(l, this.latestValues), l);
     }
     removeTransform(o) {
       const a = ve();
       ht(a, o);
       for (let l = 0; l < this.path.length; l++) {
         const u = this.path[l];
         if (!u.instance || !zn(u.latestValues)) continue;
         fu(u.latestValues) && u.updateSnapshot();
         const c = ve(),
           f = u.measurePageBox();
         (ht(c, f),
           Ch(
             a,
             u.latestValues,
             u.snapshot ? u.snapshot.layoutBox : void 0,
             c,
           ));
       }
       return (zn(this.latestValues) && Ch(a, this.latestValues), a);
     }
     setTargetDelta(o) {
       ((this.targetDelta = o),
         this.root.scheduleUpdateProjection(),
         (this.isProjectionDirty = !0));
     }
     setOptions(o) {
       this.options = {
         ...this.options,
         ...o,
         crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
       };
     }
     clearMeasurements() {
       ((this.scroll = void 0),
         (this.layout = void 0),
         (this.snapshot = void 0),
         (this.prevTransformTemplateValue = void 0),
         (this.targetDelta = void 0),
         (this.target = void 0),
         (this.isLayoutDirty = !1));
     }
     forceRelativeParentToResolveTarget() {
       this.relativeParent &&
         this.relativeParent.resolvedRelativeTargetAt !== Ce.timestamp &&
         this.relativeParent.resolveTargetDelta(!0);
     }
     resolveTargetDelta(o = !1) {
       var a;
       const l = this.getLead();
       (this.isProjectionDirty ||
         (this.isProjectionDirty = l.isProjectionDirty),
         this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
         this.isSharedProjectionDirty ||
           (this.isSharedProjectionDirty = l.isSharedProjectionDirty));
       const u = !!this.resumingFrom || this !== l;
       if (
         !(
           o ||
           (u && this.isSharedProjectionDirty) ||
           this.isProjectionDirty ||
           (!((a = this.parent) === null || a === void 0) &&
             a.isProjectionDirty) ||
           this.attemptToResolveRelativeTarget ||
           this.root.updateBlockedByResize
         )
       )
         return;
       const { layout: f, layoutId: h } = this.options;
       if (!(!this.layout || !(f || h))) {
         if (
           ((this.resolvedRelativeTargetAt = Ce.timestamp),
           !this.targetDelta && !this.relativeTarget)
         ) {
           const g = this.getClosestProjectingParent();
           g && g.layout && this.animationProgress !== 1
             ? ((this.relativeParent = g),
               this.forceRelativeParentToResolveTarget(),
               (this.relativeTarget = ve()),
               (this.relativeTargetOrigin = ve()),
               Vi(
                 this.relativeTargetOrigin,
                 this.layout.layoutBox,
                 g.layout.layoutBox,
               ),
               ht(this.relativeTarget, this.relativeTargetOrigin))
             : (this.relativeParent = this.relativeTarget = void 0);
         }
         if (!(!this.relativeTarget && !this.targetDelta)) {
           if (
             (this.target ||
               ((this.target = ve()), (this.targetWithTransforms = ve())),
             this.relativeTarget &&
             this.relativeTargetOrigin &&
             this.relativeParent &&
             this.relativeParent.target
               ? (this.forceRelativeParentToResolveTarget(),
                 Gk(
                   this.target,
                   this.relativeTarget,
                   this.relativeParent.target,
                 ))
               : this.targetDelta
                 ? (this.resumingFrom
                     ? (this.target = this.applyTransform(
                         this.layout.layoutBox,
                       ))
                     : ht(this.target, this.layout.layoutBox),
                   ty(this.target, this.targetDelta))
                 : ht(this.target, this.layout.layoutBox),
             this.attemptToResolveRelativeTarget)
           ) {
             this.attemptToResolveRelativeTarget = !1;
             const g = this.getClosestProjectingParent();
             g &&
             !!g.resumingFrom == !!this.resumingFrom &&
             !g.options.layoutScroll &&
             g.target &&
             this.animationProgress !== 1
               ? ((this.relativeParent = g),
                 this.forceRelativeParentToResolveTarget(),
                 (this.relativeTarget = ve()),
                 (this.relativeTargetOrigin = ve()),
                 Vi(this.relativeTargetOrigin, this.target, g.target),
                 ht(this.relativeTarget, this.relativeTargetOrigin))
               : (this.relativeParent = this.relativeTarget = void 0);
           }
           gi && Fn.resolvedTargetDeltas++;
         }
       }
     }
     getClosestProjectingParent() {
       if (
         !(
           !this.parent ||
           fu(this.parent.latestValues) ||
           ey(this.parent.latestValues)
         )
       )
         return this.parent.isProjecting()
           ? this.parent
           : this.parent.getClosestProjectingParent();
     }
     isProjecting() {
       return !!(
         (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
         this.layout
       );
     }
     calcProjection() {
       var o;
       const a = this.getLead(),
         l = !!this.resumingFrom || this !== a;
       let u = !0;
       if (
         ((this.isProjectionDirty ||
           (!((o = this.parent) === null || o === void 0) &&
             o.isProjectionDirty)) &&
           (u = !1),
         l &&
           (this.isSharedProjectionDirty || this.isTransformDirty) &&
           (u = !1),
         this.resolvedRelativeTargetAt === Ce.timestamp && (u = !1),
         u)
       )
         return;
       const { layout: c, layoutId: f } = this.options;
       if (
         ((this.isTreeAnimating = !!(
           (this.parent && this.parent.isTreeAnimating) ||
           this.currentAnimation ||
           this.pendingAnimation
         )),
         this.isTreeAnimating ||
           (this.targetDelta = this.relativeTarget = void 0),
         !this.layout || !(c || f))
       )
         return;
       ht(this.layoutCorrected, this.layout.layoutBox);
       const h = this.treeScale.x,
         g = this.treeScale.y;
       (nP(this.layoutCorrected, this.treeScale, this.path, l),
         a.layout &&
           !a.target &&
           (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
           ((a.target = a.layout.layoutBox), (a.targetWithTransforms = ve())));
       const { target: w } = a;
       if (!w) {
         this.prevProjectionDelta &&
           (this.createProjectionDeltas(), this.scheduleRender());
         return;
       }
       (!this.projectionDelta || !this.prevProjectionDelta
         ? this.createProjectionDeltas()
         : (Ph(this.prevProjectionDelta.x, this.projectionDelta.x),
           Ph(this.prevProjectionDelta.y, this.projectionDelta.y)),
         Ni(this.projectionDelta, this.layoutCorrected, w, this.latestValues),
         (this.treeScale.x !== h ||
           this.treeScale.y !== g ||
           !Rh(this.projectionDelta.x, this.prevProjectionDelta.x) ||
           !Rh(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
           ((this.hasProjected = !0),
           this.scheduleRender(),
           this.notifyListeners("projectionUpdate", w)),
         gi && Fn.recalculatedProjection++);
     }
     hide() {
       this.isVisible = !1;
     }
     show() {
       this.isVisible = !0;
     }
     scheduleRender(o = !0) {
       var a;
       if (
         ((a = this.options.visualElement) === null ||
           a === void 0 ||
           a.scheduleRender(),
         o)
       ) {
         const l = this.getStack();
         l && l.scheduleRender();
       }
       this.resumingFrom &&
         !this.resumingFrom.instance &&
         (this.resumingFrom = void 0);
     }
     createProjectionDeltas() {
       ((this.prevProjectionDelta = Pr()),
         (this.projectionDelta = Pr()),
         (this.projectionDeltaWithTransform = Pr()));
     }
     setAnimationOrigin(o, a = !1) {
       const l = this.snapshot,
         u = l ? l.latestValues : {},
         c = { ...this.latestValues },
         f = Pr();
       ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
         (this.relativeTarget = this.relativeTargetOrigin = void 0),
         (this.attemptToResolveRelativeTarget = !a));
       const h = ve(),
         g = l ? l.source : void 0,
         w = this.layout ? this.layout.source : void 0,
         S = g !== w,
         C = this.getStack(),
         m = !C || C.members.length <= 1,
         p = !!(
           S &&
           !m &&
           this.options.crossfade === !0 &&
           !this.path.some(BP)
         );
       this.animationProgress = 0;
       let v;
       ((this.mixTargetDelta = (P) => {
         const T = P / 1e3;
         (_h(f.x, o.x, T),
           _h(f.y, o.y, T),
           this.setTargetDelta(f),
           this.relativeTarget &&
             this.relativeTargetOrigin &&
             this.layout &&
             this.relativeParent &&
             this.relativeParent.layout &&
             (Vi(
               h,
               this.layout.layoutBox,
               this.relativeParent.layout.layoutBox,
             ),
             IP(this.relativeTarget, this.relativeTargetOrigin, h, T),
             v && TP(this.relativeTarget, v) && (this.isProjectionDirty = !1),
             v || (v = ve()),
             ht(v, this.relativeTarget)),
           S &&
             ((this.animationValues = c), yP(c, u, this.latestValues, T, p, m)),
           this.root.scheduleUpdateProjection(),
           this.scheduleRender(),
           (this.animationProgress = T));
       }),
         this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
     }
     startAnimation(o) {
       (this.notifyListeners("animationStart"),
         this.currentAnimation && this.currentAnimation.stop(),
         this.resumingFrom &&
           this.resumingFrom.currentAnimation &&
           this.resumingFrom.currentAnimation.stop(),
         this.pendingAnimation &&
           (Lt(this.pendingAnimation), (this.pendingAnimation = void 0)),
         (this.pendingAnimation = Y.update(() => {
           ((Xs.hasAnimatedSinceResize = !0),
             (this.currentAnimation = fP(0, Dh, {
               ...o,
               onUpdate: (a) => {
                 (this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a));
               },
               onComplete: () => {
                 (o.onComplete && o.onComplete(), this.completeAnimation());
               },
             })),
             this.resumingFrom &&
               (this.resumingFrom.currentAnimation = this.currentAnimation),
             (this.pendingAnimation = void 0));
         })));
     }
     completeAnimation() {
       this.resumingFrom &&
         ((this.resumingFrom.currentAnimation = void 0),
         (this.resumingFrom.preserveOpacity = void 0));
       const o = this.getStack();
       (o && o.exitAnimationComplete(),
         (this.resumingFrom =
           this.currentAnimation =
           this.animationValues =
             void 0),
         this.notifyListeners("animationComplete"));
     }
     finishAnimation() {
       (this.currentAnimation &&
         (this.mixTargetDelta && this.mixTargetDelta(Dh),
         this.currentAnimation.stop()),
         this.completeAnimation());
     }
     applyTransformsToTarget() {
       const o = this.getLead();
       let {
         targetWithTransforms: a,
         target: l,
         layout: u,
         latestValues: c,
       } = o;
       if (!(!a || !l || !u)) {
         if (
           this !== o &&
           this.layout &&
           u &&
           dy(this.options.animationType, this.layout.layoutBox, u.layoutBox)
         ) {
           l = this.target || ve();
           const f = ut(this.layout.layoutBox.x);
           ((l.x.min = o.target.x.min), (l.x.max = l.x.min + f));
           const h = ut(this.layout.layoutBox.y);
           ((l.y.min = o.target.y.min), (l.y.max = l.y.min + h));
         }
         (ht(a, l),
           Er(a, c),
           Ni(this.projectionDeltaWithTransform, this.layoutCorrected, a, c));
       }
     }
     registerSharedNode(o, a) {
       (this.sharedNodes.has(o) || this.sharedNodes.set(o, new EP()),
         this.sharedNodes.get(o).add(a));
       const u = a.options.initialPromotionConfig;
       a.promote({
         transition: u ? u.transition : void 0,
         preserveFollowOpacity:
           u && u.shouldPreserveFollowOpacity
             ? u.shouldPreserveFollowOpacity(a)
             : void 0,
       });
     }
     isLead() {
       const o = this.getStack();
       return o ? o.lead === this : !0;
     }
     getLead() {
       var o;
       const { layoutId: a } = this.options;
       return a
         ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
             this
         : this;
     }
     getPrevLead() {
       var o;
       const { layoutId: a } = this.options;
       return a
         ? (o = this.getStack()) === null || o === void 0
           ? void 0
           : o.prevLead
         : void 0;
     }
     getStack() {
       const { layoutId: o } = this.options;
       if (o) return this.root.sharedNodes.get(o);
     }
     promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
       const u = this.getStack();
       (u && u.promote(this, l),
         o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
         a && this.setOptions({ transition: a }));
     }
     relegate() {
       const o = this.getStack();
       return o ? o.relegate(this) : !1;
     }
     resetSkewAndRotation() {
       const { visualElement: o } = this.options;
       if (!o) return;
       let a = !1;
       const { latestValues: l } = o;
       if (
         ((l.z ||
           l.rotate ||
           l.rotateX ||
           l.rotateY ||
           l.rotateZ ||
           l.skewX ||
           l.skewY) &&
           (a = !0),
         !a)
       )
         return;
       const u = {};
       l.z && Ja("z", o, u, this.animationValues);
       for (let c = 0; c < Za.length; c++)
         (Ja(`rotate${Za[c]}`, o, u, this.animationValues),
           Ja(`skew${Za[c]}`, o, u, this.animationValues));
       o.render();
       for (const c in u)
         (o.setStaticValue(c, u[c]),
           this.animationValues && (this.animationValues[c] = u[c]));
       o.scheduleRender();
     }
     getProjectionStyles(o) {
       var a, l;
       if (!this.instance || this.isSVG) return;
       if (!this.isVisible) return AP;
       const u = { visibility: "" },
         c = this.getTransformTemplate();
       if (this.needsReset)
         return (
           (this.needsReset = !1),
           (u.opacity = ""),
           (u.pointerEvents = Ys(o == null ? void 0 : o.pointerEvents) || ""),
           (u.transform = c ? c(this.latestValues, "") : "none"),
           u
         );
       const f = this.getLead();
       if (!this.projectionDelta || !this.layout || !f.target) {
         const S = {};
         return (
           this.options.layoutId &&
             ((S.opacity =
               this.latestValues.opacity !== void 0
                 ? this.latestValues.opacity
                 : 1),
             (S.pointerEvents =
               Ys(o == null ? void 0 : o.pointerEvents) || "")),
           this.hasProjected &&
             !zn(this.latestValues) &&
             ((S.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
           S
         );
       }
       const h = f.animationValues || f.latestValues;
       (this.applyTransformsToTarget(),
         (u.transform = CP(
           this.projectionDeltaWithTransform,
           this.treeScale,
           h,
         )),
         c && (u.transform = c(h, u.transform)));
       const { x: g, y: w } = this.projectionDelta;
       ((u.transformOrigin = `${g.origin * 100}% ${w.origin * 100}% 0`),
         f.animationValues
           ? (u.opacity =
               f === this
                 ? (l =
                     (a = h.opacity) !== null && a !== void 0
                       ? a
                       : this.latestValues.opacity) !== null && l !== void 0
                   ? l
                   : 1
                 : this.preserveOpacity
                   ? this.latestValues.opacity
                   : h.opacityExit)
           : (u.opacity =
               f === this
                 ? h.opacity !== void 0
                   ? h.opacity
                   : ""
                 : h.opacityExit !== void 0
                   ? h.opacityExit
                   : 0));
       for (const S in Ao) {
         if (h[S] === void 0) continue;
         const { correct: C, applyTo: m } = Ao[S],
           p = u.transform === "none" ? h[S] : C(h[S], f);
         if (m) {
           const v = m.length;
           for (let P = 0; P < v; P++) u[m[P]] = p;
         } else u[S] = p;
       }
       return (
         this.options.layoutId &&
           (u.pointerEvents =
             f === this
               ? Ys(o == null ? void 0 : o.pointerEvents) || ""
               : "none"),
         u
       );
     }
     clearSnapshot() {
       this.resumeFrom = this.snapshot = void 0;
     }
     resetTree() {
       (this.root.nodes.forEach((o) => {
         var a;
         return (a = o.currentAnimation) === null || a === void 0
           ? void 0
           : a.stop();
       }),
         this.root.nodes.forEach(Lh),
         this.root.sharedNodes.clear());
     }
   };
 }
 function NP(e) {
   e.updateLayout();
 }
 function VP(e) {
   var t;
   const n =
     ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
     e.snapshot;
   if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
     const { layoutBox: r, measuredBox: i } = e.layout,
       { animationType: s } = e.options,
       o = n.source !== e.layout.source;
     s === "size"
       ? pt((f) => {
           const h = o ? n.measuredBox[f] : n.layoutBox[f],
             g = ut(h);
           ((h.min = r[f].min), (h.max = h.min + g));
         })
       : dy(s, n.layoutBox, r) &&
         pt((f) => {
           const h = o ? n.measuredBox[f] : n.layoutBox[f],
             g = ut(r[f]);
           ((h.max = h.min + g),
             e.relativeTarget &&
               !e.currentAnimation &&
               ((e.isProjectionDirty = !0),
               (e.relativeTarget[f].max = e.relativeTarget[f].min + g)));
         });
     const a = Pr();
     Ni(a, r, n.layoutBox);
     const l = Pr();
     o ? Ni(l, e.applyTransform(i, !0), n.measuredBox) : Ni(l, r, n.layoutBox);
     const u = !ay(a);
     let c = !1;
     if (!e.resumeFrom) {
       const f = e.getClosestProjectingParent();
       if (f && !f.resumeFrom) {
         const { snapshot: h, layout: g } = f;
         if (h && g) {
           const w = ve();
           Vi(w, n.layoutBox, h.layoutBox);
           const S = ve();
           (Vi(S, r, g.layoutBox),
             ly(w, S) || (c = !0),
             f.options.layoutRoot &&
               ((e.relativeTarget = S),
               (e.relativeTargetOrigin = w),
               (e.relativeParent = f)));
         }
       }
     }
     e.notifyListeners("didUpdate", {
       layout: r,
       snapshot: n,
       delta: l,
       layoutDelta: a,
       hasLayoutChanged: u,
       hasRelativeTargetChanged: c,
     });
   } else if (e.isLead()) {
     const { onExitComplete: r } = e.options;
     r && r();
   }
   e.options.transition = void 0;
 }
 function RP(e) {
   (gi && Fn.totalNodes++,
     e.parent &&
       (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
       e.isSharedProjectionDirty ||
         (e.isSharedProjectionDirty = !!(
           e.isProjectionDirty ||
           e.parent.isProjectionDirty ||
           e.parent.isSharedProjectionDirty
         )),
       e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty)));
 }
 function DP(e) {
   e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
 }
 function LP(e) {
   e.clearSnapshot();
 }
 function Lh(e) {
   e.clearMeasurements();
 }
 function bP(e) {
   e.isLayoutDirty = !1;
 }
 function _P(e) {
   const { visualElement: t } = e.options;
   (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
     e.resetTransform());
 }
 function bh(e) {
   (e.finishAnimation(),
     (e.targetDelta = e.relativeTarget = e.target = void 0),
     (e.isProjectionDirty = !0));
 }
 function MP(e) {
   e.resolveTargetDelta();
 }
 function zP(e) {
   e.calcProjection();
 }
 function FP(e) {
   e.resetSkewAndRotation();
 }
 function OP(e) {
   e.removeLeadSnapshot();
 }
 function _h(e, t, n) {
   ((e.translate = ce(t.translate, 0, n)),
     (e.scale = ce(t.scale, 1, n)),
     (e.origin = t.origin),
     (e.originPoint = t.originPoint));
 }
 function Mh(e, t, n, r) {
   ((e.min = ce(t.min, n.min, r)), (e.max = ce(t.max, n.max, r)));
 }
 function IP(e, t, n, r) {
   (Mh(e.x, t.x, n.x, r), Mh(e.y, t.y, n.y, r));
 }
 function BP(e) {
   return e.animationValues && e.animationValues.opacityExit !== void 0;
 }
 const UP = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
   zh = (e) =>
     typeof navigator != "undefined" &&
     navigator.userAgent &&
     navigator.userAgent.toLowerCase().includes(e),
   Fh = zh("applewebkit/") && !zh("chrome/") ? Math.round : Ye;
 function Oh(e) {
   ((e.min = Fh(e.min)), (e.max = Fh(e.max)));
 }
 function $P(e) {
   (Oh(e.x), Oh(e.y));
 }
 function dy(e, t, n) {
   return (
     e === "position" || (e === "preserve-aspect" && !Kk(Vh(t), Vh(n), 0.2))
   );
 }
 function WP(e) {
   var t;
   return (
     e !== e.root &&
     ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
   );
 }
 const HP = cy({
     attachResizeListener: (e, t) => Ji(e, "resize", t),
     measureScroll: () => ({
       x: document.documentElement.scrollLeft || document.body.scrollLeft,
       y: document.documentElement.scrollTop || document.body.scrollTop,
     }),
     checkIsScrollRoot: () => !0,
   }),
   el = { current: void 0 },
   fy = cy({
     measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
     defaultParent: () => {
       if (!el.current) {
         const e = new HP({});
         (e.mount(window),
           e.setOptions({ layoutScroll: !0 }),
           (el.current = e));
       }
       return el.current;
     },
     resetTransform: (e, t) => {
       e.style.transform = t !== void 0 ? t : "none";
     },
     checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
   }),
   KP = {
     pan: { Feature: lP },
     drag: { Feature: aP, ProjectionNode: fy, MeasureLayout: iy },
   };
 function Ih(e, t, n) {
   const { props: r } = e;
   e.animationState &&
     r.whileHover &&
     e.animationState.setActive("whileHover", n === "Start");
   const i = "onHover" + n,
     s = r[i];
   s && Y.postRender(() => s(t, cs(t)));
 }
 class GP extends Nn {
   mount() {
     const { current: t } = this.node;
     t &&
       (this.unmount = qw(
         t,
         (n) => (Ih(this.node, n, "Start"), (r) => Ih(this.node, r, "End")),
       ));
   }
   unmount() {}
 }
 class qP extends Nn {
   constructor() {
     (super(...arguments), (this.isActive = !1));
   }
   onFocus() {
     let t = !1;
     try {
       t = this.node.current.matches(":focus-visible");
     } catch {
       t = !0;
     }
     !t ||
       !this.node.animationState ||
       (this.node.animationState.setActive("whileFocus", !0),
       (this.isActive = !0));
   }
   onBlur() {
     !this.isActive ||
       !this.node.animationState ||
       (this.node.animationState.setActive("whileFocus", !1),
       (this.isActive = !1));
   }
   mount() {
     this.unmount = us(
       Ji(this.node.current, "focus", () => this.onFocus()),
       Ji(this.node.current, "blur", () => this.onBlur()),
     );
   }
   unmount() {}
 }
 function Bh(e, t, n) {
   const { props: r } = e;
   e.animationState &&
     r.whileTap &&
     e.animationState.setActive("whileTap", n === "Start");
   const i = "onTap" + (n === "End" ? "" : n),
     s = r[i];
   s && Y.postRender(() => s(t, cs(t)));
 }
 class YP extends Nn {
   mount() {
     const { current: t } = this.node;
     t &&
       (this.unmount = Zw(
         t,
         (n) => (
           Bh(this.node, n, "Start"),
           (r, { success: i }) => Bh(this.node, r, i ? "End" : "Cancel")
         ),
         { useGlobalTarget: this.node.props.globalTapTarget },
       ));
   }
   unmount() {}
 }
 const pu = new WeakMap(),
   tl = new WeakMap(),
   QP = (e) => {
     const t = pu.get(e.target);
     t && t(e);
   },
   XP = (e) => {
     e.forEach(QP);
   };
 function ZP({ root: e, ...t }) {
   const n = e || document;
   tl.has(n) || tl.set(n, {});
   const r = tl.get(n),
     i = JSON.stringify(t);
   return (
     r[i] || (r[i] = new IntersectionObserver(XP, { root: e, ...t })),
     r[i]
   );
 }
 function JP(e, t, n) {
   const r = ZP(t);
   return (
     pu.set(e, n),
     r.observe(e),
     () => {
       (pu.delete(e), r.unobserve(e));
     }
   );
 }
 const eT = { some: 0, all: 1 };
 class tT extends Nn {
   constructor() {
     (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
   }
   startObserver() {
     this.unmount();
     const { viewport: t = {} } = this.node.getProps(),
       { root: n, margin: r, amount: i = "some", once: s } = t,
       o = {
         root: n ? n.current : void 0,
         rootMargin: r,
         threshold: typeof i == "number" ? i : eT[i],
       },
       a = (l) => {
         const { isIntersecting: u } = l;
         if (
           this.isInView === u ||
           ((this.isInView = u), s && !u && this.hasEnteredView)
         )
           return;
         (u && (this.hasEnteredView = !0),
           this.node.animationState &&
             this.node.animationState.setActive("whileInView", u));
         const { onViewportEnter: c, onViewportLeave: f } =
             this.node.getProps(),
           h = u ? c : f;
         h && h(l);
       };
     return JP(this.node.current, o, a);
   }
   mount() {
     this.startObserver();
   }
   update() {
     if (typeof IntersectionObserver == "undefined") return;
     const { props: t, prevProps: n } = this.node;
     ["amount", "margin", "root"].some(nT(t, n)) && this.startObserver();
   }
   unmount() {}
 }
 function nT({ viewport: e = {} }, { viewport: t = {} } = {}) {
   return (n) => e[n] !== t[n];
 }
 const rT = {
     inView: { Feature: tT },
     tap: { Feature: YP },
     focus: { Feature: qP },
     hover: { Feature: GP },
   },
   iT = { layout: { ProjectionNode: fy, MeasureLayout: iy } },
   Lo = { current: null },
   Xc = { current: !1 };
 function hy() {
   if (((Xc.current = !0), !!yc))
     if (window.matchMedia) {
       const e = window.matchMedia("(prefers-reduced-motion)"),
         t = () => (Lo.current = e.matches);
       (e.addListener(t), t());
     } else Lo.current = !1;
 }
 const sT = [...zv, Ue, En],
   oT = (e) => sT.find(Mv(e)),
   Uh = new WeakMap();
 function aT(e, t, n) {
   for (const r in t) {
     const i = t[r],
       s = n[r];
     if (He(i)) e.addValue(r, i);
     else if (He(s)) e.addValue(r, Bt(i, { owner: e }));
     else if (s !== i)
       if (e.hasValue(r)) {
         const o = e.getValue(r);
         o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
       } else {
         const o = e.getStaticValue(r);
         e.addValue(r, Bt(o !== void 0 ? o : i, { owner: e }));
       }
   }
   for (const r in n) t[r] === void 0 && e.removeValue(r);
   return t;
 }
 const $h = [
   "AnimationStart",
   "AnimationComplete",
   "Update",
   "BeforeLayoutMeasure",
   "LayoutMeasure",
   "LayoutAnimationStart",
   "LayoutAnimationComplete",
 ];
 class lT {
   scrapeMotionValuesFromProps(t, n, r) {
     return {};
   }
   constructor(
     {
       parent: t,
       props: n,
       presenceContext: r,
       reducedMotionConfig: i,
       blockInitialAnimation: s,
       visualState: o,
     },
     a = {},
   ) {
     ((this.current = null),
       (this.children = new Set()),
       (this.isVariantNode = !1),
       (this.isControllingVariants = !1),
       (this.shouldReduceMotion = null),
       (this.values = new Map()),
       (this.KeyframeResolver = Kc),
       (this.features = {}),
       (this.valueSubscriptions = new Map()),
       (this.prevMotionValues = {}),
       (this.events = {}),
       (this.propEventSubscriptions = {}),
       (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
       (this.render = () => {
         this.current &&
           (this.triggerBuild(),
           this.renderInstance(
             this.current,
             this.renderState,
             this.props.style,
             this.projection,
           ));
       }),
       (this.renderScheduledAt = 0),
       (this.scheduleRender = () => {
         const g = Ht.now();
         this.renderScheduledAt < g &&
           ((this.renderScheduledAt = g), Y.render(this.render, !1, !0));
       }));
     const { latestValues: l, renderState: u, onUpdate: c } = o;
     ((this.onUpdate = c),
       (this.latestValues = l),
       (this.baseTarget = { ...l }),
       (this.initialValues = n.initial ? { ...l } : {}),
       (this.renderState = u),
       (this.parent = t),
       (this.props = n),
       (this.presenceContext = r),
       (this.depth = t ? t.depth + 1 : 0),
       (this.reducedMotionConfig = i),
       (this.options = a),
       (this.blockInitialAnimation = !!s),
       (this.isControllingVariants = ia(n)),
       (this.isVariantNode = Wg(n)),
       this.isVariantNode && (this.variantChildren = new Set()),
       (this.manuallyAnimateOnMount = !!(t && t.current)));
     const { willChange: f, ...h } = this.scrapeMotionValuesFromProps(
       n,
       {},
       this,
     );
     for (const g in h) {
       const w = h[g];
       l[g] !== void 0 && He(w) && w.set(l[g], !1);
     }
   }
   mount(t) {
     ((this.current = t),
       Uh.set(t, this),
       this.projection && !this.projection.instance && this.projection.mount(t),
       this.parent &&
         this.isVariantNode &&
         !this.isControllingVariants &&
         (this.removeFromVariantTree = this.parent.addVariantChild(this)),
       this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
       Xc.current || hy(),
       (this.shouldReduceMotion =
         this.reducedMotionConfig === "never"
           ? !1
           : this.reducedMotionConfig === "always"
             ? !0
             : Lo.current),
       this.parent && this.parent.children.add(this),
       this.update(this.props, this.presenceContext));
   }
   unmount() {
     (Uh.delete(this.current),
       this.projection && this.projection.unmount(),
       Lt(this.notifyUpdate),
       Lt(this.render),
       this.valueSubscriptions.forEach((t) => t()),
       this.valueSubscriptions.clear(),
       this.removeFromVariantTree && this.removeFromVariantTree(),
       this.parent && this.parent.children.delete(this));
     for (const t in this.events) this.events[t].clear();
     for (const t in this.features) {
       const n = this.features[t];
       n && (n.unmount(), (n.isMounted = !1));
     }
     this.current = null;
   }
   bindToMotionValue(t, n) {
     this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
     const r = sr.has(t),
       i = n.on("change", (a) => {
         ((this.latestValues[t] = a),
           this.props.onUpdate && Y.preRender(this.notifyUpdate),
           r && this.projection && (this.projection.isTransformDirty = !0));
       }),
       s = n.on("renderRequest", this.scheduleRender);
     let o;
     (window.MotionCheckAppearSync &&
       (o = window.MotionCheckAppearSync(this, t, n)),
       this.valueSubscriptions.set(t, () => {
         (i(), s(), o && o(), n.owner && n.stop());
       }));
   }
   sortNodePosition(t) {
     return !this.current ||
       !this.sortInstanceNodePosition ||
       this.type !== t.type
       ? 0
       : this.sortInstanceNodePosition(this.current, t.current);
   }
   updateFeatures() {
     let t = "animation";
     for (t in Br) {
       const n = Br[t];
       if (!n) continue;
       const { isEnabled: r, Feature: i } = n;
       if (
         (!this.features[t] &&
           i &&
           r(this.props) &&
           (this.features[t] = new i(this)),
         this.features[t])
       ) {
         const s = this.features[t];
         s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
       }
     }
   }
   triggerBuild() {
     this.build(this.renderState, this.latestValues, this.props);
   }
   measureViewportBox() {
     return this.current
       ? this.measureInstanceViewportBox(this.current, this.props)
       : ve();
   }
   getStaticValue(t) {
     return this.latestValues[t];
   }
   setStaticValue(t, n) {
     this.latestValues[t] = n;
   }
   update(t, n) {
     ((t.transformTemplate || this.props.transformTemplate) &&
       this.scheduleRender(),
       (this.prevProps = this.props),
       (this.props = t),
       (this.prevPresenceContext = this.presenceContext),
       (this.presenceContext = n));
     for (let r = 0; r < $h.length; r++) {
       const i = $h[r];
       this.propEventSubscriptions[i] &&
         (this.propEventSubscriptions[i](),
         delete this.propEventSubscriptions[i]);
       const s = "on" + i,
         o = t[s];
       o && (this.propEventSubscriptions[i] = this.on(i, o));
     }
     ((this.prevMotionValues = aT(
       this,
       this.scrapeMotionValuesFromProps(t, this.prevProps, this),
       this.prevMotionValues,
     )),
       this.handleChildMotionValue && this.handleChildMotionValue(),
       this.onUpdate && this.onUpdate(this));
   }
   getProps() {
     return this.props;
   }
   getVariant(t) {
     return this.props.variants ? this.props.variants[t] : void 0;
   }
   getDefaultTransition() {
     return this.props.transition;
   }
   getTransformPagePoint() {
     return this.props.transformPagePoint;
   }
   getClosestVariantNode() {
     return this.isVariantNode
       ? this
       : this.parent
         ? this.parent.getClosestVariantNode()
         : void 0;
   }
   addVariantChild(t) {
     const n = this.getClosestVariantNode();
     if (n)
       return (
         n.variantChildren && n.variantChildren.add(t),
         () => n.variantChildren.delete(t)
       );
   }
   addValue(t, n) {
     const r = this.values.get(t);
     n !== r &&
       (r && this.removeValue(t),
       this.bindToMotionValue(t, n),
       this.values.set(t, n),
       (this.latestValues[t] = n.get()));
   }
   removeValue(t) {
     this.values.delete(t);
     const n = this.valueSubscriptions.get(t);
     (n && (n(), this.valueSubscriptions.delete(t)),
       delete this.latestValues[t],
       this.removeValueFromRenderState(t, this.renderState));
   }
   hasValue(t) {
     return this.values.has(t);
   }
   getValue(t, n) {
     if (this.props.values && this.props.values[t]) return this.props.values[t];
     let r = this.values.get(t);
     return (
       r === void 0 &&
         n !== void 0 &&
         ((r = Bt(n === null ? void 0 : n, { owner: this })),
         this.addValue(t, r)),
       r
     );
   }
   readValue(t, n) {
     var r;
     let i =
       this.latestValues[t] !== void 0 || !this.current
         ? this.latestValues[t]
         : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
             r !== void 0
           ? r
           : this.readValueFromInstance(this.current, t, this.options);
     return (
       i != null &&
         (typeof i == "string" && (bv(i) || Ev(i))
           ? (i = parseFloat(i))
           : !oT(i) && En.test(n) && (i = Rv(t, n)),
         this.setBaseTarget(t, He(i) ? i.get() : i)),
       He(i) ? i.get() : i
     );
   }
   setBaseTarget(t, n) {
     this.baseTarget[t] = n;
   }
   getBaseTarget(t) {
     var n;
     const { initial: r } = this.props;
     let i;
     if (typeof r == "string" || typeof r == "object") {
       const o = Ec(
         this.props,
         r,
         (n = this.presenceContext) === null || n === void 0
           ? void 0
           : n.custom,
       );
       o && (i = o[t]);
     }
     if (r && i !== void 0) return i;
     const s = this.getBaseTargetFromProps(this.props, t);
     return s !== void 0 && !He(s)
       ? s
       : this.initialValues[t] !== void 0 && i === void 0
         ? void 0
         : this.baseTarget[t];
   }
   on(t, n) {
     return (
       this.events[t] || (this.events[t] = new Oc()),
       this.events[t].add(n)
     );
   }
   notify(t, ...n) {
     this.events[t] && this.events[t].notify(...n);
   }
 }
 class py extends lT {
   constructor() {
     (super(...arguments), (this.KeyframeResolver = Fv));
   }
   sortInstanceNodePosition(t, n) {
     return t.compareDocumentPosition(n) & 2 ? 1 : -1;
   }
   getBaseTargetFromProps(t, n) {
     return t.style ? t.style[n] : void 0;
   }
   removeValueFromRenderState(t, { vars: n, style: r }) {
     (delete n[t], delete r[t]);
   }
   handleChildMotionValue() {
     this.childSubscription &&
       (this.childSubscription(), delete this.childSubscription);
     const { children: t } = this.props;
     He(t) &&
       (this.childSubscription = t.on("change", (n) => {
         this.current && (this.current.textContent = `${n}`);
       }));
   }
 }
 function uT(e) {
   return window.getComputedStyle(e);
 }
 class cT extends py {
   constructor() {
     (super(...arguments), (this.type = "html"), (this.renderInstance = Jg));
   }
   readValueFromInstance(t, n) {
     if (sr.has(n)) {
       const r = Hc(n);
       return (r && r.default) || 0;
     } else {
       const r = uT(t),
         i = (Qg(n) ? r.getPropertyValue(n) : r[n]) || 0;
       return typeof i == "string" ? i.trim() : i;
     }
   }
   measureInstanceViewportBox(t, { transformPagePoint: n }) {
     return ny(t, n);
   }
   build(t, n, r) {
     jc(t, n, r.transformTemplate);
   }
   scrapeMotionValuesFromProps(t, n, r) {
     return Dc(t, n, r);
   }
 }
 class dT extends py {
   constructor() {
     (super(...arguments),
       (this.type = "svg"),
       (this.isSVGTag = !1),
       (this.measureInstanceViewportBox = ve));
   }
   getBaseTargetFromProps(t, n) {
     return t[n];
   }
   readValueFromInstance(t, n) {
     if (sr.has(n)) {
       const r = Hc(n);
       return (r && r.default) || 0;
     }
     return ((n = ev.has(n) ? n : kc(n)), t.getAttribute(n));
   }
   scrapeMotionValuesFromProps(t, n, r) {
     return rv(t, n, r);
   }
   build(t, n, r) {
     Nc(t, n, this.isSVGTag, r.transformTemplate);
   }
   renderInstance(t, n, r, i) {
     tv(t, n, r, i);
   }
   mount(t) {
     ((this.isSVGTag = Rc(t.tagName)), super.mount(t));
   }
 }
 const fT = (e, t) =>
     Tc(e) ? new dT(t) : new cT(t, { allowProjection: e !== E.Fragment }),
   hT = $w({ ...zk, ...rT, ...KP, ...iT }, fT),
   J = iw(hT);
 function my(e, t) {
   let n;
   const r = () => {
     const { currentTime: i } = t,
       o = (i === null ? 0 : i.value) / 100;
     (n !== o && e(o), (n = o));
   };
   return (Y.update(r, !0), () => Lt(r));
 }
 const Zs = new WeakMap();
 let ln;
 function pT(e, t) {
   if (t) {
     const { inlineSize: n, blockSize: r } = t[0];
     return { width: n, height: r };
   } else
     return e instanceof SVGElement && "getBBox" in e
       ? e.getBBox()
       : { width: e.offsetWidth, height: e.offsetHeight };
 }
 function mT({ target: e, contentRect: t, borderBoxSize: n }) {
   var r;
   (r = Zs.get(e)) === null ||
     r === void 0 ||
     r.forEach((i) => {
       i({
         target: e,
         contentSize: t,
         get size() {
           return pT(e, n);
         },
       });
     });
 }
 function gT(e) {
   e.forEach(mT);
 }
 function vT() {
   typeof ResizeObserver != "undefined" && (ln = new ResizeObserver(gT));
 }
 function yT(e, t) {
   ln || vT();
   const n = fv(e);
   return (
     n.forEach((r) => {
       let i = Zs.get(r);
       (i || ((i = new Set()), Zs.set(r, i)),
         i.add(t),
         ln == null || ln.observe(r));
     }),
     () => {
       n.forEach((r) => {
         const i = Zs.get(r);
         (i == null || i.delete(t),
           (i != null && i.size) || ln == null || ln.unobserve(r));
       });
     }
   );
 }
 const Js = new Set();
 let Ri;
 function xT() {
   ((Ri = () => {
     const e = { width: window.innerWidth, height: window.innerHeight },
       t = { target: window, size: e, contentSize: e };
     Js.forEach((n) => n(t));
   }),
     window.addEventListener("resize", Ri));
 }
 function wT(e) {
   return (
     Js.add(e),
     Ri || xT(),
     () => {
       (Js.delete(e), !Js.size && Ri && (Ri = void 0));
     }
   );
 }
 function ST(e, t) {
   return typeof e == "function" ? wT(e) : yT(e, t);
 }
 const kT = 50,
   Wh = () => ({
     current: 0,
     offset: [],
     progress: 0,
     scrollLength: 0,
     targetOffset: 0,
     targetLength: 0,
     containerLength: 0,
     velocity: 0,
   }),
   PT = () => ({ time: 0, x: Wh(), y: Wh() }),
   TT = {
     x: { length: "Width", position: "Left" },
     y: { length: "Height", position: "Top" },
   };
 function Hh(e, t, n, r) {
   const i = n[t],
     { length: s, position: o } = TT[t],
     a = i.current,
     l = n.time;
   ((i.current = e[`scroll${o}`]),
     (i.scrollLength = e[`scroll${s}`] - e[`client${s}`]),
     (i.offset.length = 0),
     (i.offset[0] = 0),
     (i.offset[1] = i.scrollLength),
     (i.progress = Jn(0, i.scrollLength, i.current)));
   const u = r - l;
   i.velocity = u > kT ? 0 : Ic(i.current - a, u);
 }
 function ET(e, t, n) {
   (Hh(e, "x", t, n), Hh(e, "y", t, n), (t.time = n));
 }
 function CT(e, t) {
   const n = { x: 0, y: 0 };
   let r = e;
   for (; r && r !== t; )
     if (r instanceof HTMLElement)
       ((n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent));
     else if (r.tagName === "svg") {
       const i = r.getBoundingClientRect();
       r = r.parentElement;
       const s = r.getBoundingClientRect();
       ((n.x += i.left - s.left), (n.y += i.top - s.top));
     } else if (r instanceof SVGGraphicsElement) {
       const { x: i, y: s } = r.getBBox();
       ((n.x += i), (n.y += s));
       let o = null,
         a = r.parentNode;
       for (; !o; ) (a.tagName === "svg" && (o = a), (a = r.parentNode));
       r = o;
     } else break;
   return n;
 }
 const mu = { start: 0, center: 0.5, end: 1 };
 function Kh(e, t, n = 0) {
   let r = 0;
   if ((e in mu && (e = mu[e]), typeof e == "string")) {
     const i = parseFloat(e);
     e.endsWith("px")
       ? (r = i)
       : e.endsWith("%")
         ? (e = i / 100)
         : e.endsWith("vw")
           ? (r = (i / 100) * document.documentElement.clientWidth)
           : e.endsWith("vh")
             ? (r = (i / 100) * document.documentElement.clientHeight)
             : (e = i);
   }
   return (typeof e == "number" && (r = t * e), n + r);
 }
 const AT = [0, 0];
 function jT(e, t, n, r) {
   let i = Array.isArray(e) ? e : AT,
     s = 0,
     o = 0;
   return (
     typeof e == "number"
       ? (i = [e, e])
       : typeof e == "string" &&
         ((e = e.trim()),
         e.includes(" ") ? (i = e.split(" ")) : (i = [e, mu[e] ? e : "0"])),
     (s = Kh(i[0], n, r)),
     (o = Kh(i[1], t)),
     s - o
   );
 }
 const NT = {
     All: [
       [0, 0],
       [1, 1],
     ],
   },
   VT = { x: 0, y: 0 };
 function RT(e) {
   return "getBBox" in e && e.tagName !== "svg"
     ? e.getBBox()
     : { width: e.clientWidth, height: e.clientHeight };
 }
 function DT(e, t, n) {
   const { offset: r = NT.All } = n,
     { target: i = e, axis: s = "y" } = n,
     o = s === "y" ? "height" : "width",
     a = i !== e ? CT(i, e) : VT,
     l = i === e ? { width: e.scrollWidth, height: e.scrollHeight } : RT(i),
     u = { width: e.clientWidth, height: e.clientHeight };
   t[s].offset.length = 0;
   let c = !t[s].interpolate;
   const f = r.length;
   for (let h = 0; h < f; h++) {
     const g = jT(r[h], u[o], l[o], a[s]);
     (!c && g !== t[s].interpolatorOffsets[h] && (c = !0),
       (t[s].offset[h] = g));
   }
   (c &&
     ((t[s].interpolate = qc(t[s].offset, Hv(r), { clamp: !1 })),
     (t[s].interpolatorOffsets = [...t[s].offset])),
     (t[s].progress = Kt(0, 1, t[s].interpolate(t[s].current))));
 }
 function LT(e, t = e, n) {
   if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
     let r = t;
     for (; r && r !== e; )
       ((n.x.targetOffset += r.offsetLeft),
         (n.y.targetOffset += r.offsetTop),
         (r = r.offsetParent));
   }
   ((n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
     (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
     (n.x.containerLength = e.clientWidth),
     (n.y.containerLength = e.clientHeight));
 }
 function bT(e, t, n, r = {}) {
   return {
     measure: () => LT(e, r.target, n),
     update: (i) => {
       (ET(e, n, i), (r.offset || r.target) && DT(e, n, r));
     },
     notify: () => t(n),
   };
 }
 const li = new WeakMap(),
   Gh = new WeakMap(),
   nl = new WeakMap(),
   qh = (e) => (e === document.documentElement ? window : e);
 function Zc(e, { container: t = document.documentElement, ...n } = {}) {
   let r = nl.get(t);
   r || ((r = new Set()), nl.set(t, r));
   const i = PT(),
     s = bT(t, e, i, n);
   if ((r.add(s), !li.has(t))) {
     const a = () => {
         for (const h of r) h.measure();
       },
       l = () => {
         for (const h of r) h.update(Ce.timestamp);
       },
       u = () => {
         for (const h of r) h.notify();
       },
       c = () => {
         (Y.read(a, !1, !0), Y.read(l, !1, !0), Y.update(u, !1, !0));
       };
     li.set(t, c);
     const f = qh(t);
     (window.addEventListener("resize", c, { passive: !0 }),
       t !== document.documentElement && Gh.set(t, ST(t, c)),
       f.addEventListener("scroll", c, { passive: !0 }));
   }
   const o = li.get(t);
   return (
     Y.read(o, !1, !0),
     () => {
       var a;
       Lt(o);
       const l = nl.get(t);
       if (!l || (l.delete(s), l.size)) return;
       const u = li.get(t);
       (li.delete(t),
         u &&
           (qh(t).removeEventListener("scroll", u),
           (a = Gh.get(t)) === null || a === void 0 || a(),
           window.removeEventListener("resize", u)));
     }
   );
 }
 function _T({ source: e, container: t, axis: n = "y" }) {
   e && (t = e);
   const r = { value: 0 },
     i = Zc(
       (s) => {
         r.value = s[n].progress * 100;
       },
       { container: t, axis: n },
     );
   return { currentTime: r, cancel: i };
 }
 const rl = new Map();
 function gy({
   source: e,
   container: t = document.documentElement,
   axis: n = "y",
 } = {}) {
   (e && (t = e), rl.has(t) || rl.set(t, {}));
   const r = rl.get(t);
   return (
     r[n] ||
       (r[n] = ov()
         ? new ScrollTimeline({ source: t, axis: n })
         : _T({ source: t, axis: n })),
     r[n]
   );
 }
 function MT(e) {
   return e.length === 2;
 }
 function vy(e) {
   return e && (e.target || e.offset);
 }
 function zT(e, t) {
   return MT(e) || vy(t)
     ? Zc((n) => {
         e(n[t.axis].progress, n);
       }, t)
     : my(e, gy(t));
 }
 function FT(e, t) {
   if ((e.flatten(), vy(t)))
     return (
       e.pause(),
       Zc((n) => {
         e.time = e.duration * n[t.axis].progress;
       }, t)
     );
   {
     const n = gy(t);
     return e.attachTimeline
       ? e.attachTimeline(
           n,
           (r) => (
             r.pause(),
             my((i) => {
               r.time = r.duration * i;
             }, n)
           ),
         )
       : Ye;
   }
 }
 function OT(e, { axis: t = "y", ...n } = {}) {
   const r = { axis: t, ...n };
   return typeof e == "function" ? zT(e, r) : FT(e, r);
 }
 function Yh(e, t) {
   Q1(!!(!t || t.current));
 }
 const IT = () => ({
   scrollX: Bt(0),
   scrollY: Bt(0),
   scrollXProgress: Bt(0),
   scrollYProgress: Bt(0),
 });
 function BT({ container: e, target: t, layoutEffect: n = !0, ...r } = {}) {
   const i = ir(IT);
   return (
     (n ? ta : E.useEffect)(
       () => (
         Yh("target", t),
         Yh("container", e),
         OT(
           (o, { x: a, y: l }) => {
             (i.scrollX.set(a.current),
               i.scrollXProgress.set(a.progress),
               i.scrollY.set(l.current),
               i.scrollYProgress.set(l.progress));
           },
           {
             ...r,
             container: (e == null ? void 0 : e.current) || void 0,
             target: (t == null ? void 0 : t.current) || void 0,
           },
         )
       ),
       [e, t, JSON.stringify(r.offset)],
     ),
     i
   );
 }
 function UT(e) {
   const t = ir(() => Bt(e)),
     { isStatic: n } = E.useContext(Ir);
   if (n) {
     const [, r] = E.useState(e);
     E.useEffect(() => t.on("change", r), []);
   }
   return t;
 }
 function yy(e, t) {
   const n = UT(t()),
     r = () => n.set(t());
   return (
     r(),
     ta(() => {
       const i = () => Y.preRender(r, !1, !0),
         s = e.map((o) => o.on("change", i));
       return () => {
         (s.forEach((o) => o()), Lt(r));
       };
     }),
     n
   );
 }
 const $T = (e) => e && typeof e == "object" && e.mix,
   WT = (e) => ($T(e) ? e.mix : void 0);
 function HT(...e) {
   const t = !Array.isArray(e[0]),
     n = t ? 0 : -1,
     r = e[0 + n],
     i = e[1 + n],
     s = e[2 + n],
     o = e[3 + n],
     a = qc(i, s, { mixer: WT(s[0]), ...o });
   return t ? a(r) : a;
 }
 function KT(e) {
   ((Ci.current = []), e());
   const t = yy(Ci.current, e);
   return ((Ci.current = void 0), t);
 }
 function GT(e, t, n, r) {
   if (typeof e == "function") return KT(e);
   const i = typeof t == "function" ? t : HT(t, n, r);
   return Array.isArray(e) ? Qh(e, i) : Qh([e], ([s]) => i(s));
 }
 function Qh(e, t) {
   const n = ir(() => []);
   return yy(e, () => {
     n.length = 0;
     const r = e.length;
     for (let i = 0; i < r; i++) n[i] = e[i].get();
     return t(n);
   });
 }
 function qT() {
   !Xc.current && hy();
   const [e] = E.useState(Lo.current);
   return e;
 }
 const YT = {
     meta: {
       lang: "it",
       title: "Wonder Travel | Pellegrinaggi a Roma e Assisi",
       description:
         "Organizza il pellegrinaggio del tuo gruppo a Roma e Assisi: Vaticano, Udienza Papale, Basilica di San Francesco ed esperienze autentiche. Risposta in 24h.",
     },
     a11y: {
       skipToContent: "Vai al contenuto",
       skipToForm: "Vai al modulo di richiesta",
       openMenu: "Apri il menu",
       closeMenu: "Chiudi il menu",
       prevSlide: "Esperienza precedente",
       nextSlide: "Esperienza successiva",
       goToSlide: "Vai alla slide",
     },
     header: {
       logoAlt: "Wonder Travel",
       nav: [
         { id: "perche", label: "Perché noi" },
         { id: "roma", label: "Roma" },
         { id: "assisi", label: "Assisi" },
         { id: "esperienze", label: "Esperienze" },
         { id: "come-funziona", label: "Come funziona" },
       ],
       cta: "Richiedi informazioni",
     },
     hero: {
       eyebrow: "Pellegrinaggi e viaggi di gruppo in Italia, dal 1989",
       titleA: "Porta il tuo gruppo",
       titleB: "a Roma e Assisi.",
       titleAccent: "Al resto pensiamo noi.",
       subtitle:
         "Dal Vaticano alla Basilica di San Francesco, costruiamo pellegrinaggi su misura per parrocchie, diocesi, comunità religiose e agenzie. Cura in ogni dettaglio, esperienze autentiche, guide in portoghese.",
       cta: "Richiedi informazioni",
       ctaHint: "Risposta entro 24 ore, senza impegno",
       trust: [
         "Risposta entro 24h",
         "Operatori di fiducia dal 1989",
         "Assistenza H24 durante il viaggio",
       ],
       imageAlt:
         "La Basilica di San Pietro e Piazza San Pietro al tramonto, con un gruppo di pellegrini in primo piano",
       scrollHint: "Scopri",
     },
     trust: {
       since: "Operatori di fiducia dal 1989",
       stats: {
         destinations: "Destinazioni",
         km: "Chilometri di itinerari",
         tours: "Tour realizzati",
         clients: "Viaggiatori accompagnati",
       },
     },
     why: {
       eyebrow: "Perché Wonder Travel",
       title: "Chi organizza un gruppo sceglie chi se ne prende cura davvero",
       intro:
         "I grandi operatori gestiscono centinaia di gruppi a settimana. Noi ne seguiamo pochi alla volta. Per noi il tuo non è “uno dei tanti”: è IL gruppo della settimana.",
       items: [
         {
           icon: "heart",
           title: "Il tuo gruppo è IL gruppo",
           body: "Attenzione totale, non numeri. Seguiamo pochi gruppi per volta per curare ogni singolo dettaglio del vostro viaggio.",
         },
         {
           icon: "shield",
           title: "Pensiamo a tutto noi",
           body: "Hotel, trasporti privati, guide, ingressi e prenotazioni. Un unico referente dal primo contatto fino al rientro a casa.",
         },
         {
           icon: "globe",
           title: "Guide in portoghese",
           body: "I tuoi pellegrini vivono Roma e Assisi nella loro lingua, senza barriere e con il giusto raccoglimento.",
         },
         {
           icon: "key",
           title: "Accessi esclusivi",
           body: "Udienza Papale, Messe riservate e luoghi che solo chi conosce Roma da decenni sa raggiungere.",
         },
         {
           icon: "clock",
           title: "Assistenza H24",
           body: "Durante tutto il viaggio c’è una persona reale al vostro fianco, raggiungibile in ogni momento.",
         },
         {
           icon: "star",
           title: "Esperienza dal 1989",
           body: "Oltre 10.000 viaggiatori e centinaia di gruppi accompagnati in Italia e nel mondo. L’esperienza fa la differenza.",
         },
       ],
     },
     rome: {
       eyebrow: "La città eterna",
       title: "Roma, nel cuore della cristianità",
       intro:
         "La Città Eterna, dove la fede incontra duemila anni di storia. Solo alcuni esempi di ciò che il vostro gruppo può vivere.",
       highlights: [
         {
           img: "romeVatican",
           title: "Vaticano e Udienza Papale",
           body: "Piazza San Pietro, la Basilica e, quando possibile, l’Udienza con il Santo Padre. Un momento che resta nel cuore.",
           alt: "Piazza San Pietro gremita di fedeli durante un’udienza papale",
         },
         {
           img: "romeInterior",
           title: "Basilica di San Pietro",
           body: "La maestosità della più grande basilica della cristianità, tra arte, luce e raccoglimento.",
           alt: "L’interno monumentale della Basilica di San Pietro illuminato dalla luce",
         },
         {
           img: "romeBasilica",
           title: "Le Basiliche Maggiori",
           body: "San Giovanni in Laterano, Santa Maria Maggiore e San Paolo fuori le Mura: il cammino delle grandi basiliche.",
           alt: "La facciata di una basilica maggiore di Roma che si illumina al tramonto",
         },
         {
           img: "romeCatacombs",
           title: "Catacombe e Roma cristiana",
           body: "Le origini della fede lungo la Via Appia Antica, dove tutto è cominciato.",
           alt: "Un corridoio delle antiche catacombe romane illuminato dalla luce delle candele",
         },
       ],
       note: "Esempi indicativi. Ogni programma viene costruito su misura per il tuo gruppo.",
     },
     assisi: {
       eyebrow: "La città della pace",
       title: "Assisi, sulle orme di San Francesco",
       intro:
         "La città della pace e della spiritualità, tra le colline dell’Umbria. Un luogo dell’anima, oggi più che mai.",
       highlights: [
         {
           img: "assisiBasilica",
           title: "Basilica Papale e Sacro Convento",
           body: "Il complesso di San Francesco, con gli affreschi di Giotto e la tomba del Santo. Il cuore spirituale di Assisi.",
           alt: "La Basilica di San Francesco ad Assisi sulla collina umbra all’alba",
         },
         {
           img: "assisiTown",
           title: "Il borgo e la Basilica di Santa Chiara",
           body: "Vie medievali in pietra rosa, scorci sulla valle e i luoghi di Santa Chiara.",
           alt: "Vicoli medievali in pietra del borgo di Assisi nella luce calda del giorno",
         },
       ],
       features: [
         {
           kicker: "2026, Anno Giubilare Francescano",
           title: "800 anni dalla morte di San Francesco",
           body: "Un anniversario storico per tutta la Chiesa. Vivere Assisi nel 2026 ha un significato unico: pochi pellegrinaggi resteranno nella memoria come questo.",
         },
         {
           kicker: "Il santo dei giovani",
           title: "Carlo Acutis riposa ad Assisi",
           body: "Canonizzato nel settembre 2025, è amatissimo dai fedeli sudamericani. La sua presenza ad Assisi rende il pellegrinaggio ancora più intenso per le nuove generazioni.",
           imgAlt: "Un luogo di devozione ad Assisi con candele e fiori votivi",
         },
       ],
     },
     more: {
       eyebrow: "Oltre il pellegrinaggio",
       title: "Non solo fede: l’Italia che si vive",
       intro:
         "Ogni programma unisce le mete religiose a esperienze autentiche sul territorio. Perché un grande viaggio si ricorda anche per i sapori, i panorami e le emozioni condivise.",
       slides: {
         cooking: {
           title: "Cooking class",
           body: "Le mani in pasta con uno chef italiano: pasta fresca, sughi della tradizione e tiramisù.",
           alt: "Mani che preparano pasta fresca durante una cooking class italiana",
         },
         wine: {
           title: "Degustazioni di vino e olio",
           body: "I sapori di Roma, dell’Umbria e della Toscana, raccontati da chi li produce.",
           alt: "Tavolo di degustazione di vino e olio in una cantina toscana",
         },
         terrace: {
           title: "Cena sulla terrazza",
           body: "Una cena indimenticabile su una delle terrazze più belle di Roma, al calar del sole.",
           alt: "Cena su una terrazza panoramica con vista sui tetti di Roma al tramonto",
         },
         landscape: {
           title: "Paesaggi della Val d’Orcia",
           body: "Colline dorate, cipressi e borghi senza tempo: l’Italia da cartolina.",
           alt: "Le colline e i cipressi della Val d’Orcia nella luce dorata",
         },
         photo: {
           title: "Servizio fotografico",
           body: "Un fotografo professionista per ricordi che restano, nei luoghi più iconici.",
           alt: "Un fotografo professionista immortala un gruppo in un luogo iconico di Roma",
         },
       },
       note: "Esempi di esperienze. Il programma del tuo gruppo le combina con le mete religiose, su misura e senza pensieri.",
     },
     how: {
       eyebrow: "Come funziona",
       title: "Organizzare un viaggio di gruppo, senza stress",
       steps: [
         {
           n: "01",
           title: "Richiedi informazioni",
           body: "Raccontaci del tuo gruppo: quante persone, il periodo, i vostri desideri. Bastano pochi minuti.",
         },
         {
           n: "02",
           title: "Proposta su misura",
           body: "Ricevi un itinerario personalizzato con diverse opzioni di hotel, pensato attorno alle vostre esigenze.",
         },
         {
           n: "03",
           title: "Si parte",
           body: "Pensiamo a tutto noi. Voi vivete il viaggio, noi gestiamo ogni dettaglio, sempre al vostro fianco.",
         },
       ],
     },
     testimonials: {
       eyebrow: "Dicono di noi",
       title: "La fiducia di chi ha già viaggiato con noi",
       disclaimer:
         "Esempi illustrativi: verranno sostituiti con testimonianze e video reali dei vostri gruppi.",
       items: [
         {
           quote:
             "Organizzazione impeccabile dall’inizio alla fine. Il nostro gruppo si è sentito accompagnato in ogni momento. Torneremo sicuramente.",
           author: "Gruppo parrocchiale",
           role: "Responsabile del viaggio",
         },
         {
           quote:
             "Attenzione ai dettagli e disponibilità totale. I nostri pellegrini sono tornati entusiasti: per noi è un partner di fiducia.",
           author: "Agenzia di viaggi",
           role: "Direzione",
         },
         {
           quote:
             "Un pellegrinaggio ad Assisi che la nostra comunità non dimenticherà. Spiritualità e cura umana, esattamente ciò che cercavamo.",
           author: "Comunità religiosa",
           role: "Coordinatore",
         },
       ],
     },
     seasonality: {
       eyebrow: "Il momento giusto",
       title: "Agosto e settembre: il periodo ideale per partire",
       body: "Il 2026 è l’Anno Giubilare Francescano e i posti migliori (hotel, guide, Udienze) si prenotano con largo anticipo. Pianificare adesso significa assicurare al tuo gruppo l’esperienza migliore.",
       points: [
         "Disponibilità e tariffe migliori prenotando in anticipo",
         "Udienza Papale: richiede settimane di preavviso",
         "Gruppi da 25 a 200 persone (anche “gruppi uniti” per piccole parrocchie)",
       ],
       cta: "Richiedi informazioni",
       imageAlt: "Luce autunnale dorata su Roma e Assisi",
     },
     form: {
       eyebrow: "Richiedi informazioni",
       title: "Iniziamo a progettare il vostro pellegrinaggio",
       subtitle:
         "Compila il modulo: ti risponderemo entro 24 ore con una prima proposta su misura. Senza impegno.",
       fields: {
         name: { label: "Nome e cognome", placeholder: "Es. Maria Silva" },
         email: { label: "Email", placeholder: "nome@esempio.com" },
         phone: {
           label: "WhatsApp / Telefono",
           placeholder: "+55 11 99999 9999",
         },
         org: {
           label: "Organizzazione / Parrocchia",
           placeholder: "Nome della parrocchia, diocesi o agenzia",
         },
         role: {
           label: "Sei…",
           placeholder: "Seleziona",
           options: [
             "Parroco / Diocesi",
             "Comunità religiosa",
             "Agenzia di viaggi / Tour Operator",
             "Altro",
           ],
         },
         participants: {
           label: "Numero di partecipanti",
           placeholder: "Seleziona",
           options: ["Meno di 25", "25-50", "51-100", "101-200", "Oltre 200"],
         },
         period: {
           label: "Periodo preferito",
           placeholder: "Seleziona",
           options: [
             "Agosto 2026",
             "Settembre 2026",
             "Ottobre 2026",
             "Altro periodo / da definire",
           ],
         },
         hotel: {
           label: "Categoria hotel preferita",
           placeholder: "Seleziona (facoltativo)",
           options: [
             "3 stelle",
             "4 stelle",
             "5 stelle",
             "Casa religiosa / Convento",
             "Da definire",
           ],
         },
         message: {
           label: "Messaggio (facoltativo)",
           placeholder: "Raccontaci i vostri desideri o esigenze particolari…",
         },
       },
       consent: {
         label: "Ho letto e accetto la",
         linkLabel: "Privacy Policy",
         suffix:
           "e acconsento al trattamento dei miei dati per essere ricontattato.",
       },
       marketingConsent:
         "Desidero ricevere proposte e novità da Wonder Travel (facoltativo).",
       submit: "Richiedi informazioni",
       sending: "Invio in corso…",
       success: {
         title: "Richiesta inviata!",
         body: "Grazie. Ti ricontatteremo entro 24 ore con una prima proposta su misura.",
       },
       error: {
         title: "Qualcosa è andato storto",
         body: "Non siamo riusciti a inviare la richiesta. Riprova, oppure scrivici direttamente.",
         retry: "Riprova",
       },
       validation: {
         required: "Campo obbligatorio",
         email: "Inserisci un’email valida",
         phone: "Inserisci un numero di telefono valido",
         consent: "È necessario accettare la Privacy Policy per continuare",
       },
     },
     thankYou: {
       metaTitle: "Grazie | Wonder Travel",
       eyebrow: "Richiesta ricevuta",
       title: "Grazie! Abbiamo ricevuto la tua richiesta",
       body: "Un membro del nostro team ti ricontatterà entro 24 ore con una prima proposta su misura per il tuo gruppo.",
       stepsTitle: "Cosa succede adesso",
       steps: [
         "Studiamo la tua richiesta e le esigenze del gruppo.",
         "Ti inviamo un itinerario personalizzato con più opzioni di hotel.",
         "Definiamo insieme ogni dettaglio. Al resto pensiamo noi.",
       ],
       contactPrompt: "Vuoi parlarci subito?",
       backHome: "Torna alla home",
     },
     finalCta: {
       eyebrow: "Pronti a partire?",
       title: "Il vostro pellegrinaggio a Roma e Assisi inizia da qui",
       body: "Un primo passo, nessun impegno. Raccontaci del tuo gruppo e pensiamo a tutto noi.",
       cta: "Richiedi informazioni",
       imageAlt:
         "Un gruppo sale a bordo di un comodo pullman privato vicino a un monumento di Roma",
     },
     footer: {
       tagline:
         "Tour operator e agenzia viaggi specializzata in viaggi di gruppo e pellegrinaggi a Roma, in Italia e nel mondo. Emozioni di valore, servizi impeccabili.",
       contactsTitle: "Contatti",
       navTitle: "Naviga",
       legalTitle: "Dati societari",
       email: "Email",
       phone: "Telefono / WhatsApp",
       address: "Sede",
       links: { privacy: "Privacy Policy", cookie: "Cookie Policy" },
       rights: "Tutti i diritti riservati.",
       logoAlt: "Wonder Travel",
     },
     cookie: {
       message:
         "Usiamo cookie tecnici e, con il tuo consenso, cookie di statistica per migliorare l’esperienza. Puoi accettare o rifiutare quelli non essenziali.",
       accept: "Accetta",
       reject: "Rifiuta",
       settingsLink: "Cookie Policy",
     },
     legalPages: {
       privacy: {
         title: "Privacy Policy",
         updated: "Ultimo aggiornamento: 9 giugno 2026",
         draftNotice:
           "Per esercitare i tuoi diritti o revocare un consenso scrivi a info@wondertravel.it. Per le preferenze sui cookie usa il pulsante «Preferenze cookie» in basso a sinistra.",
         sections: [
           {
             h: "Titolare del trattamento",
             p: "Il Titolare del trattamento è Wonder Travel Srls, Via Mazzano Romano 31, 00191 Roma (Italia), P.IVA/C.F. IT16731391005, email info@wondertravel.it. Puoi contattare il Titolare per qualsiasi richiesta relativa ai tuoi dati personali.",
           },
           {
             h: "Tipologie di dati raccolti",
             p: "Tramite il modulo di contatto raccogliamo i dati che ci fornisci: nome e cognome, email, telefono/WhatsApp, organizzazione, ruolo, numero di partecipanti, periodo e preferenze di viaggio, eventuali messaggi e i consensi prestati. Raccogliamo inoltre dati tecnici e di navigazione (indirizzo IP, user-agent, parametri UTM, referrer, pagina di atterraggio) e, solo previo consenso, dati statistici e di marketing tramite cookie (vedi Cookie Policy).",
           },
           {
             h: "Finalità e basi giuridiche",
             p: "a) Riscontro alle richieste e invio di preventivi: esecuzione di misure precontrattuali su tua richiesta (art. 6.1.b GDPR). b) Marketing, statistiche e cookie non tecnici: tuo consenso libero e revocabile (art. 6.1.a GDPR). c) Sicurezza del sito, prevenzione di abusi e adempimenti di legge: legittimo interesse del Titolare e obblighi legali (artt. 6.1.f e 6.1.c GDPR). Per gli utenti in Brasile valgono le corrispondenti basi della LGPD (Lei 13.709/2018, art. 7).",
           },
           {
             h: "Natura del conferimento",
             p: "Il conferimento dei dati contrassegnati come obbligatori nel modulo è necessario per gestire la tua richiesta; il loro mancato conferimento ci impedisce di risponderti. Il consenso al marketing è facoltativo e non condiziona la risposta.",
           },
           {
             h: "Destinatari e responsabili del trattamento",
             p: "I dati sono trattati dal personale autorizzato del Titolare e possono essere comunicati a fornitori che agiscono come responsabili del trattamento ex art. 28 GDPR: Aruba S.p.A. (posta elettronica), il provider di hosting e database (Cloudways/DigitalOcean) per la conservazione delle richieste e, solo con il tuo consenso, Google Ireland Ltd. (Google Tag Manager e Google Analytics 4) e Meta Platforms Ireland Ltd. (Meta Pixel). I dati non sono diffusi né ceduti a terzi per finalità proprie.",
           },
           {
             h: "Trasferimenti fuori dall’UE",
             p: "Alcuni fornitori (Google, Meta) possono trattare dati anche al di fuori dello Spazio Economico Europeo, inclusi gli Stati Uniti. In tali casi il trasferimento avviene sulla base di garanzie adeguate ex artt. 44-49 GDPR (Clausole Contrattuali Standard della Commissione UE e/o adesione all’EU-US Data Privacy Framework).",
           },
           {
             h: "Periodo di conservazione",
             p: "Dati di contatto e della richiesta: 36 mesi dall’ultimo contatto, salvo diversa tua richiesta. Dati trattati per marketing: fino alla revoca del consenso. Registrazioni dei consensi (prove): conservate separatamente per la durata del trattamento e per il periodo di prescrizione applicabile, a fini di accountability (art. 7.1 GDPR). Log tecnici: tempi tecnici limitati.",
           },
           {
             h: "Diritti dell’interessato",
             p: "Hai diritto di chiedere l’accesso, la rettifica, la cancellazione, la limitazione e l’opposizione al trattamento, la portabilità dei dati e di revocare in qualsiasi momento i consensi prestati (senza pregiudicare la liceità del trattamento precedente). Per esercitarli scrivi a info@wondertravel.it: risponderemo entro i termini di legge.",
           },
           {
             h: "Diritto di reclamo",
             p: "Se ritieni che il trattamento violi la normativa, puoi proporre reclamo a un’autorità di controllo: in Italia il Garante per la protezione dei dati personali (www.garanteprivacy.it); in Brasile l’ANPD – Autoridade Nacional de Proteção de Dados (www.gov.br/anpd).",
           },
           {
             h: "Processi decisionali automatizzati",
             p: "Non effettuiamo profilazione né processi decisionali interamente automatizzati che producano effetti giuridici o significativi sull’interessato.",
           },
           {
             h: "Modifiche a questa informativa",
             p: "La presente informativa può essere aggiornata: la versione vigente è sempre pubblicata su questa pagina con la relativa data. Versione corrente: 2026-06-09.",
           },
         ],
         back: "Torna alla home",
       },
       cookie: {
         title: "Cookie Policy",
         updated: "Ultimo aggiornamento: 9 giugno 2026",
         draftNotice:
           "Puoi prestare, modificare o revocare il consenso in qualsiasi momento dal pulsante «Preferenze cookie» in basso a sinistra.",
         sections: [
           {
             h: "Cosa sono i cookie",
             p: "I cookie e le tecnologie simili (es. il localStorage del browser) sono piccoli file o elementi salvati sul tuo dispositivo. Li usiamo per far funzionare il sito e, solo con il tuo consenso, per finalità statistiche e di marketing.",
           },
           {
             h: "Cookie tecnici e di preferenza (necessari)",
             p: "Indispensabili al funzionamento del sito e a memorizzare le tue scelte sui cookie; non richiedono consenso. Usiamo «wt_cookie_consent» e «wt_consent_id», salvati nel localStorage del browser, per ricordare e documentare la tua scelta sui cookie. Durata: fino a 12 mesi o finché non li elimini.",
           },
           {
             h: "Cookie statistici (analytics)",
             p: "Solo previo consenso utilizziamo Google Analytics 4 (Google Ireland Ltd.), gestito tramite Google Tag Manager, per statistiche aggregate sull’uso del sito, con IP anonimizzato. Cookie tipici: «_ga» e «_ga_<id>» (durata fino a 24 mesi), «_gid» (24 ore). Non vengono installati prima del tuo consenso.",
           },
           {
             h: "Cookie di marketing",
             p: "Solo previo consenso utilizziamo il Meta Pixel (Meta Platforms Ireland Ltd.) per misurare le campagne e mostrare annunci pertinenti. Cookie tipici: «_fbp» (durata fino a 3 mesi) e, sul dominio di Meta, «fr». Non vengono installati prima del tuo consenso.",
           },
           {
             h: "Base giuridica e gestione del consenso",
             p: "I cookie tecnici si basano sulla necessità tecnica; quelli statistici e di marketing sul tuo consenso (art. 6.1.a GDPR), libero e revocabile. Puoi prestare, modificare o revocare il consenso in qualsiasi momento tramite il banner o il pulsante «Preferenze cookie» in basso a sinistra. La revoca non pregiudica la liceità del trattamento basato sul consenso precedente.",
           },
           {
             h: "Trasferimenti e durata del consenso",
             p: "Google e Meta possono trattare dati anche fuori dall’UE con garanzie adeguate (Clausole Contrattuali Standard / EU-US Data Privacy Framework). Il consenso ai cookie viene richiesto nuovamente alla scadenza (massimo 12 mesi) o in caso di modifiche rilevanti a questa policy.",
           },
           {
             h: "Gestione dal browser",
             p: "Puoi gestire o eliminare i cookie anche dalle impostazioni del tuo browser. La disattivazione dei cookie tecnici può compromettere alcune funzionalità del sito.",
           },
         ],
         back: "Torna alla home",
       },
     },
   },
   QT = {
     meta: {
       lang: "pt-BR",
       title: "Wonder Travel | Peregrinações a Roma e Assis",
       description:
         "Organize a peregrinação do seu grupo a Roma e Assis: Vaticano, Audiência Papal, Basílica de São Francisco e experiências autênticas. Resposta em até 24h.",
     },
     a11y: {
       skipToContent: "Ir para o conteúdo",
       skipToForm: "Ir para o formulário de contato",
       openMenu: "Abrir o menu",
       closeMenu: "Fechar o menu",
       prevSlide: "Experiência anterior",
       nextSlide: "Próxima experiência",
       goToSlide: "Ir para o slide",
     },
     header: {
       logoAlt: "Wonder Travel",
       nav: [
         { id: "perche", label: "Por que nós" },
         { id: "roma", label: "Roma" },
         { id: "assisi", label: "Assis" },
         { id: "esperienze", label: "Experiências" },
         { id: "come-funziona", label: "Como funciona" },
       ],
       cta: "Solicite informações",
     },
     hero: {
       eyebrow: "Peregrinações e viagens em grupo na Itália, desde 1989",
       titleA: "Leve o seu grupo",
       titleB: "a Roma e Assis.",
       titleAccent: "Do resto cuidamos nós.",
       subtitle:
         "Do Vaticano à Basílica de São Francisco, criamos peregrinações sob medida para paróquias, dioceses, comunidades religiosas e agências. Cuidado em cada detalhe, experiências autênticas, guias em português.",
       cta: "Solicite informações",
       ctaHint: "Resposta em até 24 horas, sem compromisso",
       trust: [
         "Resposta em até 24h",
         "Operadores de confiança desde 1989",
         "Assistência 24h durante a viagem",
       ],
       imageAlt:
         "A Basílica de São Pedro e a Praça São Pedro ao pôr do sol, com um grupo de peregrinos em primeiro plano",
       scrollHint: "Descubra",
     },
     trust: {
       since: "Operadores de confiança desde 1989",
       stats: {
         destinations: "Destinos",
         km: "Quilômetros de itinerários",
         tours: "Tours realizados",
         clients: "Viajantes acompanhados",
       },
     },
     why: {
       eyebrow: "Por que a Wonder Travel",
       title: "Quem organiza um grupo escolhe quem realmente cuida dele",
       intro:
         "As grandes operadoras administram centenas de grupos por semana. Nós acompanhamos poucos por vez. Para nós o seu não é “mais um”: é O grupo da semana.",
       items: [
         {
           icon: "heart",
           title: "O seu grupo é O grupo",
           body: "Atenção total, não números. Acompanhamos poucos grupos por vez para cuidar de cada detalhe da viagem de vocês.",
         },
         {
           icon: "shield",
           title: "Cuidamos de tudo",
           body: "Hotel, transporte privativo, guias, ingressos e reservas. Um único contato do primeiro atendimento até o retorno para casa.",
         },
         {
           icon: "globe",
           title: "Guias em português",
           body: "Os seus peregrinos vivem Roma e Assis no próprio idioma, sem barreiras e com o devido recolhimento.",
         },
         {
           icon: "key",
           title: "Acessos exclusivos",
           body: "Audiência Papal, missas reservadas e lugares que só quem conhece Roma há décadas sabe alcançar.",
         },
         {
           icon: "clock",
           title: "Assistência 24h",
           body: "Durante toda a viagem há uma pessoa real ao lado de vocês, disponível a qualquer momento.",
         },
         {
           icon: "star",
           title: "Experiência desde 1989",
           body: "Mais de 10.000 viajantes e centenas de grupos acompanhados na Itália e pelo mundo. A experiência faz a diferença.",
         },
       ],
     },
     rome: {
       eyebrow: "A cidade eterna",
       title: "Roma, no coração da cristandade",
       intro:
         "A Cidade Eterna, onde a fé encontra dois mil anos de história. Apenas alguns exemplos do que o seu grupo pode viver.",
       highlights: [
         {
           img: "romeVatican",
           title: "Vaticano e Audiência Papal",
           body: "A Praça São Pedro, a Basílica e, quando possível, a Audiência com o Santo Padre. Um momento que fica no coração.",
           alt: "Praça São Pedro lotada de fiéis durante uma audiência papal",
         },
         {
           img: "romeInterior",
           title: "Basílica de São Pedro",
           body: "A imponência da maior basílica da cristandade, entre arte, luz e recolhimento.",
           alt: "O interior monumental da Basílica de São Pedro iluminado pela luz",
         },
         {
           img: "romeBasilica",
           title: "As Basílicas Maiores",
           body: "São João de Latrão, Santa Maria Maior e São Paulo Extramuros: o caminho das grandes basílicas.",
           alt: "A fachada de uma basílica maior de Roma que se ilumina ao pôr do sol",
         },
         {
           img: "romeCatacombs",
           title: "Catacumbas e a Roma cristã",
           body: "As origens da fé ao longo da Via Ápia Antiga, onde tudo começou.",
           alt: "Um corredor das antigas catacumbas romanas iluminado pela luz das velas",
         },
       ],
       note: "Exemplos ilustrativos. Cada programa é criado sob medida para o seu grupo.",
     },
     assisi: {
       eyebrow: "A cidade da paz",
       title: "Assis, nos passos de São Francisco",
       intro:
         "A cidade da paz e da espiritualidade, entre as colinas da Úmbria. Um lugar da alma, hoje mais do que nunca.",
       highlights: [
         {
           img: "assisiBasilica",
           title: "Basílica Papal e Sacro Convento",
           body: "O complexo de São Francisco, com os afrescos de Giotto e o túmulo do Santo. O coração espiritual de Assis.",
           alt: "A Basílica de São Francisco em Assis na colina da Úmbria ao amanhecer",
         },
         {
           img: "assisiTown",
           title: "O centro histórico e a Basílica de Santa Clara",
           body: "Ruelas medievais de pedra rosada, vistas para o vale e os lugares de Santa Clara.",
           alt: "Ruelas medievais de pedra do centro histórico de Assis na luz quente do dia",
         },
       ],
       features: [
         {
           kicker: "2026, Ano Jubilar Franciscano",
           title: "800 anos da morte de São Francisco",
           body: "Um aniversário histórico para toda a Igreja. Viver Assis em 2026 tem um significado único: poucas peregrinações ficarão na memória como esta.",
         },
         {
           kicker: "O santo dos jovens",
           title: "Carlo Acutis descansa em Assis",
           body: "Canonizado em setembro de 2025, é muito amado pelos fiéis sul-americanos. A sua presença em Assis torna a peregrinação ainda mais intensa para as novas gerações.",
           imgAlt: "Um lugar de devoção em Assis com velas e flores votivas",
         },
       ],
     },
     more: {
       eyebrow: "Além da peregrinação",
       title: "Não só fé: a Itália que se vive",
       intro:
         "Cada programa une os lugares religiosos a experiências autênticas no território. Porque uma grande viagem também se lembra pelos sabores, pelas paisagens e pelas emoções compartilhadas.",
       slides: {
         cooking: {
           title: "Aula de culinária",
           body: "A mão na massa com um chef italiano: massa fresca, molhos da tradição e tiramisù.",
           alt: "Mãos preparando massa fresca durante uma aula de culinária italiana",
         },
         wine: {
           title: "Degustações de vinho e azeite",
           body: "Os sabores de Roma, da Úmbria e da Toscana, contados por quem os produz.",
           alt: "Mesa de degustação de vinho e azeite em uma vinícola toscana",
         },
         terrace: {
           title: "Jantar no terraço",
           body: "Um jantar inesquecível em um dos terraços mais bonitos de Roma, ao pôr do sol.",
           alt: "Jantar em um terraço panorâmico com vista para os telhados de Roma ao pôr do sol",
         },
         landscape: {
           title: "Paisagens da Val d’Orcia",
           body: "Colinas douradas, ciprestes e vilarejos atemporais: a Itália de cartão-postal.",
           alt: "As colinas e os ciprestes da Val d’Orcia na luz dourada",
         },
         photo: {
           title: "Ensaio fotográfico",
           body: "Um fotógrafo profissional para recordações que ficam, nos lugares mais icônicos.",
           alt: "Um fotógrafo profissional registra um grupo em um lugar icônico de Roma",
         },
       },
       note: "Exemplos de experiências. O programa do seu grupo as combina com os lugares religiosos, sob medida e sem preocupações.",
     },
     how: {
       eyebrow: "Como funciona",
       title: "Organizar uma viagem em grupo, sem estresse",
       steps: [
         {
           n: "01",
           title: "Solicite informações",
           body: "Conte-nos sobre o seu grupo: quantas pessoas, o período, os desejos de vocês. Leva poucos minutos.",
         },
         {
           n: "02",
           title: "Proposta sob medida",
           body: "Você recebe um itinerário personalizado com diferentes opções de hotel, pensado em torno das suas necessidades.",
         },
         {
           n: "03",
           title: "É hora de partir",
           body: "Cuidamos de tudo. Vocês vivem a viagem, nós cuidamos de cada detalhe, sempre ao seu lado.",
         },
       ],
     },
     testimonials: {
       eyebrow: "O que dizem de nós",
       title: "A confiança de quem já viajou conosco",
       disclaimer:
         "Exemplos ilustrativos: serão substituídos por depoimentos e vídeos reais dos seus grupos.",
       items: [
         {
           quote:
             "Organização impecável do início ao fim. O nosso grupo se sentiu acompanhado em todos os momentos. Com certeza voltaremos.",
           author: "Grupo paroquial",
           role: "Responsável pela viagem",
         },
         {
           quote:
             "Atenção aos detalhes e disponibilidade total. Os nossos peregrinos voltaram entusiasmados: para nós é um parceiro de confiança.",
           author: "Agência de viagens",
           role: "Direção",
         },
         {
           quote:
             "Uma peregrinação a Assis que a nossa comunidade não vai esquecer. Espiritualidade e cuidado humano, exatamente o que procurávamos.",
           author: "Comunidade religiosa",
           role: "Coordenador",
         },
       ],
     },
     seasonality: {
       eyebrow: "O momento certo",
       title: "Agosto e setembro: o período ideal para viajar",
       body: "2026 é o Ano Jubilar Franciscano e os melhores lugares (hotéis, guias, audiências) se reservam com bastante antecedência. Planejar agora significa garantir a melhor experiência para o seu grupo.",
       points: [
         "Disponibilidade e tarifas melhores reservando com antecedência",
         "Audiência Papal: exige semanas de antecedência",
         "Grupos de 25 a 200 pessoas (também “grupos unidos” para paróquias menores)",
       ],
       cta: "Solicite informações",
       imageAlt: "Luz dourada de outono sobre Roma e Assis",
     },
     form: {
       eyebrow: "Solicite informações",
       title: "Vamos começar a planejar a sua peregrinação",
       subtitle:
         "Preencha o formulário: respondemos em até 24 horas com uma primeira proposta sob medida. Sem compromisso.",
       fields: {
         name: { label: "Nome e sobrenome", placeholder: "Ex.: Maria Silva" },
         email: { label: "E-mail", placeholder: "nome@exemplo.com" },
         phone: {
           label: "WhatsApp / Telefone",
           placeholder: "+55 11 99999 9999",
         },
         org: {
           label: "Organização / Paróquia",
           placeholder: "Nome da paróquia, diocese ou agência",
         },
         role: {
           label: "Você é…",
           placeholder: "Selecione",
           options: [
             "Pároco / Diocese",
             "Comunidade religiosa",
             "Agência de viagens / Operadora",
             "Outro",
           ],
         },
         participants: {
           label: "Número de participantes",
           placeholder: "Selecione",
           options: [
             "Menos de 25",
             "25-50",
             "51-100",
             "101-200",
             "Mais de 200",
           ],
         },
         period: {
           label: "Período preferido",
           placeholder: "Selecione",
           options: [
             "Agosto de 2026",
             "Setembro de 2026",
             "Outubro de 2026",
             "Outro período / a definir",
           ],
         },
         hotel: {
           label: "Categoria de hotel preferida",
           placeholder: "Selecione (opcional)",
           options: [
             "3 estrelas",
             "4 estrelas",
             "5 estrelas",
             "Casa religiosa / Convento",
             "A definir",
           ],
         },
         message: {
           label: "Mensagem (opcional)",
           placeholder:
             "Conte-nos os desejos ou necessidades específicas de vocês…",
         },
       },
       consent: {
         label: "Li e aceito a",
         linkLabel: "Política de Privacidade",
         suffix: "e autorizo o tratamento dos meus dados para ser contatado.",
       },
       marketingConsent:
         "Desejo receber propostas e novidades da Wonder Travel (opcional).",
       submit: "Solicite informações",
       sending: "Enviando…",
       success: {
         title: "Solicitação enviada!",
         body: "Obrigado. Entraremos em contato em até 24 horas com uma primeira proposta sob medida.",
       },
       error: {
         title: "Algo deu errado",
         body: "Não conseguimos enviar a solicitação. Tente novamente ou escreva diretamente para nós.",
         retry: "Tentar novamente",
       },
       validation: {
         required: "Campo obrigatório",
         email: "Digite um e-mail válido",
         phone: "Digite um telefone válido",
         consent:
           "É necessário aceitar a Política de Privacidade para continuar",
       },
     },
     thankYou: {
       metaTitle: "Obrigado | Wonder Travel",
       eyebrow: "Solicitação recebida",
       title: "Obrigado! Recebemos a sua solicitação",
       body: "Um membro da nossa equipe entrará em contato em até 24 horas com uma primeira proposta sob medida para o seu grupo.",
       stepsTitle: "O que acontece agora",
       steps: [
         "Analisamos a sua solicitação e as necessidades do grupo.",
         "Enviamos um itinerário personalizado com várias opções de hotel.",
         "Definimos juntos cada detalhe. Do resto cuidamos nós.",
       ],
       contactPrompt: "Quer falar com a gente agora?",
       backHome: "Voltar para a página inicial",
     },
     finalCta: {
       eyebrow: "Prontos para partir?",
       title: "A peregrinação do seu grupo a Roma e Assis começa aqui",
       body: "Um primeiro passo, sem compromisso. Conte-nos sobre o seu grupo e cuidamos de tudo.",
       cta: "Solicite informações",
       imageAlt:
         "Um grupo embarca em um confortável ônibus privativo perto de um monumento de Roma",
     },
     footer: {
       tagline:
         "Operadora de turismo e agência de viagens especializada em viagens em grupo e peregrinações a Roma, pela Itália e pelo mundo. Emoções de valor, serviços impecáveis.",
       contactsTitle: "Contato",
       navTitle: "Navegue",
       legalTitle: "Dados da empresa",
       email: "E-mail",
       phone: "Telefone / WhatsApp",
       address: "Sede",
       links: {
         privacy: "Política de Privacidade",
         cookie: "Política de Cookies",
       },
       rights: "Todos os direitos reservados.",
       logoAlt: "Wonder Travel",
     },
     cookie: {
       message:
         "Usamos cookies técnicos e, com o seu consentimento, cookies estatísticos para melhorar a experiência. Você pode aceitar ou recusar os não essenciais.",
       accept: "Aceitar",
       reject: "Recusar",
       settingsLink: "Política de Cookies",
     },
     legalPages: {
       privacy: {
         title: "Política de Privacidade",
         updated: "Última atualização: 9 de junho de 2026",
         draftNotice:
           "Para exercer os seus direitos ou revogar um consentimento, escreva para info@wondertravel.it. Para as preferências de cookies use o botão «Preferências de cookies» no canto inferior esquerdo.",
         sections: [
           {
             h: "Controlador dos dados",
             p: "O Controlador dos dados é Wonder Travel Srls, Via Mazzano Romano 31, 00191 Roma (Itália), P.IVA/C.F. IT16731391005, e-mail info@wondertravel.it. Pode contactar o Controlador para qualquer pedido relativo aos seus dados pessoais.",
           },
           {
             h: "Tipos de dados coletados",
             p: "Por meio do formulário de contato coletamos os dados que você fornece: nome e sobrenome, e-mail, telefone/WhatsApp, organização, função, número de participantes, período e preferências de viagem, eventuais mensagens e os consentimentos prestados. Também coletamos dados técnicos e de navegação (endereço IP, user-agent, parâmetros UTM, referenciador, página de entrada) e, somente mediante consentimento, dados estatísticos e de marketing por meio de cookies (ver Política de Cookies).",
           },
           {
             h: "Finalidades e bases legais",
             p: "a) Resposta às solicitações e envio de orçamentos: execução de medidas pré-contratuais a seu pedido (art. 6.1.b GDPR). b) Marketing, estatísticas e cookies não técnicos: o seu consentimento livre e revogável (art. 6.1.a GDPR). c) Segurança do site, prevenção de abusos e obrigações legais: legítimo interesse do Controlador e obrigações legais (arts. 6.1.f e 6.1.c GDPR). Para utilizadores no Brasil aplicam-se as bases correspondentes da LGPD (Lei 13.709/2018, art. 7).",
           },
           {
             h: "Natureza do fornecimento",
             p: "O fornecimento dos dados marcados como obrigatórios no formulário é necessário para gerir o seu pedido; a sua não disponibilização impede-nos de responder. O consentimento de marketing é facultativo e não condiciona a resposta.",
           },
           {
             h: "Destinatários e operadores",
             p: "Os dados são tratados pelo pessoal autorizado do Controlador e podem ser comunicados a fornecedores que atuam como operadores (art. 28 GDPR): Aruba S.p.A. (e-mail), o provedor de hospedagem e base de dados (Cloudways/DigitalOcean) para a conservação das solicitações e, somente com o seu consentimento, Google Ireland Ltd. (Google Tag Manager e Google Analytics 4) e Meta Platforms Ireland Ltd. (Meta Pixel). Os dados não são divulgados nem cedidos a terceiros para fins próprios.",
           },
           {
             h: "Transferências fora da UE",
             p: "Alguns fornecedores (Google, Meta) podem tratar dados fora do Espaço Económico Europeu, incluindo os Estados Unidos. Nesses casos a transferência baseia-se em garantias adequadas (arts. 44-49 GDPR): Cláusulas Contratuais-Tipo da Comissão Europeia e/ou adesão ao EU-US Data Privacy Framework.",
           },
           {
             h: "Período de conservação",
             p: "Dados de contato e da solicitação: 36 meses a partir do último contato, salvo pedido em contrário. Dados tratados para marketing: até à revogação do consentimento. Registos dos consentimentos (provas): conservados separadamente durante o tratamento e pelo prazo de prescrição aplicável, para fins de accountability (art. 7.1 GDPR). Logs técnicos: prazos técnicos limitados.",
           },
           {
             h: "Direitos do titular",
             p: "Tem direito de solicitar o acesso, a retificação, a eliminação, a limitação e a oposição ao tratamento, a portabilidade dos dados e de revogar a qualquer momento os consentimentos prestados (sem prejuízo da licitude do tratamento anterior). Para exercê-los escreva para info@wondertravel.it: responderemos nos prazos legais.",
           },
           {
             h: "Direito de reclamação",
             p: "Se considerar que o tratamento viola a legislação, pode apresentar reclamação a uma autoridade de controlo: na Itália, o Garante per la protezione dei dati personali (www.garanteprivacy.it); no Brasil, a ANPD – Autoridade Nacional de Proteção de Dados (www.gov.br/anpd).",
           },
           {
             h: "Decisões automatizadas",
             p: "Não realizamos definição de perfis nem decisões totalmente automatizadas que produzam efeitos jurídicos ou significativos sobre o titular.",
           },
           {
             h: "Alterações a esta política",
             p: "Esta política pode ser atualizada: a versão em vigor é sempre publicada nesta página com a respetiva data. Versão atual: 2026-06-09.",
           },
         ],
         back: "Voltar para a página inicial",
       },
       cookie: {
         title: "Política de Cookies",
         updated: "Última atualização: 9 de junho de 2026",
         draftNotice:
           "Pode prestar, alterar ou revogar o consentimento a qualquer momento pelo botão «Preferências de cookies» no canto inferior esquerdo.",
         sections: [
           {
             h: "O que são cookies",
             p: "Os cookies e tecnologias semelhantes (ex.: o localStorage do navegador) são pequenos arquivos ou elementos guardados no seu dispositivo. Usamo-los para o funcionamento do site e, somente com o seu consentimento, para fins estatísticos e de marketing.",
           },
           {
             h: "Cookies técnicos e de preferência (necessários)",
             p: "Indispensáveis ao funcionamento do site e para memorizar as suas escolhas sobre cookies; não exigem consentimento. Usamos «wt_cookie_consent» e «wt_consent_id», guardados no localStorage do navegador, para recordar e documentar a sua escolha. Duração: até 12 meses ou até os eliminar.",
           },
           {
             h: "Cookies estatísticos (analytics)",
             p: "Somente mediante consentimento usamos o Google Analytics 4 (Google Ireland Ltd.), gerido através do Google Tag Manager, para estatísticas agregadas de uso do site, com IP anonimizado. Cookies típicos: «_ga» e «_ga_<id>» (até 24 meses), «_gid» (24 horas). Não são instalados antes do seu consentimento.",
           },
           {
             h: "Cookies de marketing",
             p: "Somente mediante consentimento usamos o Meta Pixel (Meta Platforms Ireland Ltd.) para medir campanhas e exibir anúncios relevantes. Cookies típicos: «_fbp» (até 3 meses) e, no domínio da Meta, «fr». Não são instalados antes do seu consentimento.",
           },
           {
             h: "Base legal e gestão do consentimento",
             p: "Os cookies técnicos baseiam-se na necessidade técnica; os estatísticos e de marketing no seu consentimento (art. 6.1.a GDPR), livre e revogável. Pode prestar, alterar ou revogar o consentimento a qualquer momento pelo banner ou pelo botão «Preferências de cookies». A revogação não afeta a licitude do tratamento baseado no consentimento anterior.",
           },
           {
             h: "Transferências e duração do consentimento",
             p: "A Google e a Meta podem tratar dados fora da UE com garantias adequadas (Cláusulas Contratuais-Tipo / EU-US Data Privacy Framework). O consentimento de cookies é solicitado novamente no fim da validade (máximo 12 meses) ou em caso de alterações relevantes a esta política.",
           },
           {
             h: "Gestão pelo navegador",
             p: "Também pode gerir ou eliminar os cookies nas definições do seu navegador. A desativação dos cookies técnicos pode comprometer algumas funcionalidades do site.",
           },
         ],
         back: "Voltar para a página inicial",
       },
     },
   },
   gu = { it: YT, pt: QT },
   Pe = {
     brand: "Wonder Travel",
     foundedYear: 1989,
     contacts: {
       email: "info@wondertravel.it",
       phoneDisplay: "+39 389 6795665",
       phoneHref: "+393896795665",
       whatsappHref: "393896795665",
       addressLine: "Via Mazzano Romano, 31",
       addressCity: "00191 Roma, Italia",
     },
     notifyEmail: "info@wondertravel.it",
     legal: {
       company: "Wonder Travel Srls",
       vat: "P.IVA / C.F. IT16731391005",
       rea: "REA RM 1672497",
       license: "Licenza: Provincia di Roma n. 3217/2009 del 19/05/2009",
       techDirector: "Direttore Tecnico: Ialungo Anna",
     },
     stats: [
       { value: 154, suffix: "", key: "destinations" },
       { value: 4165, suffix: "", key: "km" },
       { value: 38, suffix: "", key: "tours" },
       { value: 10560, suffix: "", key: "clients" },
     ],
     leadApiUrl: "/lead.php",
     consentApiUrl: "/consent.php",
     ga4Id: "",
     privacyVersion: "2026-06-09",
     cookiePolicyVersion: "2026-06-09",
   },
   XT = { it: "it-IT", pt: "pt-BR" };
 function ZT(e, t = "it-IT") {
   try {
     return new Intl.NumberFormat(t).format(e);
   } catch {
     return String(e);
   }
 }
 const aa = E.createContext({
   content: gu.it,
   locale: "it",
   intlLocale: "it-IT",
 });
 function JT({ locale: e = "it", children: t }) {
   const r = {
     content: gu[e] || gu.it,
     locale: e,
     intlLocale: XT[e] || "it-IT",
   };
   return d.jsx(aa.Provider, { value: r, children: t });
 }
 function rt() {
   return E.useContext(aa).content;
 }
 function eE() {
   return E.useContext(aa).locale;
 }
 function tE() {
   return E.useContext(aa).intlLocale;
 }
 function xy(e) {
   var t,
     n,
     r = "";
   if (typeof e == "string" || typeof e == "number") r += e;
   else if (typeof e == "object")
     if (Array.isArray(e)) {
       var i = e.length;
       for (t = 0; t < i; t++)
         e[t] && (n = xy(e[t])) && (r && (r += " "), (r += n));
     } else for (n in e) e[n] && (r && (r += " "), (r += n));
   return r;
 }
 function Ne() {
   for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
     (e = arguments[n]) && (t = xy(e)) && (r && (r += " "), (r += t));
   return r;
 }
 function nE(e = 24) {
   const [t, n] = E.useState(!1);
   return (
     E.useEffect(() => {
       const r = () => n(window.scrollY > e);
       return (
         r(),
         window.addEventListener("scroll", r, { passive: !0 }),
         () => window.removeEventListener("scroll", r)
       );
     }, [e]),
     t
   );
 }
 const rE =
     "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 min-h-[48px] px-7 py-3.5 text-base focus-visible:outline-none disabled:opacity-60 disabled:pointer-events-none motion-safe:active:scale-[0.98]",
   iE = {
     primary:
       "bg-teal-500 text-white shadow-soft hover:bg-teal-600 motion-safe:hover:-translate-y-0.5 hover:shadow-card",
     gold: "bg-gold-400 text-ink shadow-soft hover:bg-gold-300 motion-safe:hover:-translate-y-0.5 hover:shadow-card",
     outline:
       "border-2 border-teal-500 text-teal-600 hover:bg-teal-50 motion-safe:hover:-translate-y-0.5",
     outlineLight:
       "border-2 border-white/70 text-white hover:bg-white hover:text-ink motion-safe:hover:-translate-y-0.5",
     ghost: "text-teal-600 hover:text-teal-700 link-underline px-2",
   },
   sE = { md: "", lg: "md:px-9 md:py-4 md:text-lg" };
 function $r({
   as: e = "a",
   variant: t = "primary",
   size: n = "md",
   className: r,
   children: i,
   ...s
 }) {
   const o = e;
   return d.jsx(o, { className: Ne(rE, iE[t], sE[n], r), ...s, children: i });
 }
 const oE = {
   heart: d.jsx("path", {
     d: "M12 21s-7.5-4.6-10-9.3C.6 8.9 2 5.5 5.2 5.5c2 0 3.2 1.2 3.8 2.3C9.6 6.7 10.8 5.5 12.8 5.5c3.2 0 4.6 3.4 3.2 6.2C19.5 16.4 12 21 12 21z",
   }),
   shield: d.jsx("path", {
     d: "M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z",
   }),
   globe: d.jsxs(d.Fragment, {
     children: [
       d.jsx("circle", { cx: "12", cy: "12", r: "9" }),
       d.jsx("path", {
         d: "M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18",
       }),
     ],
   }),
   key: d.jsxs(d.Fragment, {
     children: [
       d.jsx("circle", { cx: "8", cy: "15", r: "4" }),
       d.jsx("path", { d: "M11 12l9-9M17 4l3 3M14 7l2 2" }),
     ],
   }),
   clock: d.jsxs(d.Fragment, {
     children: [
       d.jsx("circle", { cx: "12", cy: "12", r: "9" }),
       d.jsx("path", { d: "M12 7v5l3 2" }),
     ],
   }),
   star: d.jsx("path", {
     d: "M12 3l2.7 5.7 6.3.8-4.6 4.3 1.2 6.2L12 17.8 6.4 20.2l1.2-6.2L3 9.7l6.3-.8L12 3z",
   }),
   check: d.jsx("path", { d: "M4 12.5l5 5 11-11" }),
   arrowRight: d.jsx("path", { d: "M5 12h14M13 6l6 6-6 6" }),
   arrowDown: d.jsx("path", { d: "M12 5v14M6 13l6 6 6-6" }),
   mail: d.jsxs(d.Fragment, {
     children: [
       d.jsx("rect", { x: "3", y: "5", width: "18", height: "14", rx: "2" }),
       d.jsx("path", { d: "M3 7l9 6 9-6" }),
     ],
   }),
   phone: d.jsx("path", {
     d: "M5 4h3l2 5-2.5 1.5a11 11 0 005 5L16 13l5 2v3a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z",
   }),
   whatsapp: d.jsx("path", {
     d: "M20 11.5a8 8 0 01-11.8 7L4 20l1.6-4A8 8 0 1120 11.5zM9 9c-.3 0-.6.1-.8.4-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.7 2.8 4.3 3.8 2.1.8 2.6.7 3 .6.6-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2 0-.1-.3-.2-.6-.4-.3-.2-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.1-.3.2-.5.1-.3-.1-1-.4-2-1.3-.7-.7-1.2-1.5-1.4-1.7-.1-.3 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.8-2C9.7 9.1 9.5 9 9.3 9H9z",
   }),
   mapPin: d.jsxs(d.Fragment, {
     children: [
       d.jsx("path", { d: "M12 21s-7-6-7-11a7 7 0 1114 0c0 5-7 11-7 11z" }),
       d.jsx("circle", { cx: "12", cy: "10", r: "2.5" }),
     ],
   }),
   menu: d.jsx("path", { d: "M4 7h16M4 12h16M4 17h16" }),
   close: d.jsx("path", { d: "M6 6l12 12M18 6L6 18" }),
   chevronLeft: d.jsx("path", { d: "M15 6l-6 6 6 6" }),
   chevronRight: d.jsx("path", { d: "M9 6l6 6-6 6" }),
   sparkle: d.jsx("path", {
     d: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z",
   }),
   calendar: d.jsxs(d.Fragment, {
     children: [
       d.jsx("rect", { x: "3", y: "5", width: "18", height: "16", rx: "2" }),
       d.jsx("path", { d: "M3 9h18M8 3v4M16 3v4" }),
     ],
   }),
 };
 function Ve({
   name: e,
   className: t = "h-6 w-6",
   strokeWidth: n = 1.7,
   ...r
 }) {
   const i = oE[e];
   if (!i) return null;
   const s = ["whatsapp"].includes(e);
   return d.jsx("svg", {
     viewBox: "0 0 24 24",
     className: t,
     fill: s ? "currentColor" : "none",
     stroke: s ? "none" : "currentColor",
     strokeWidth: n,
     strokeLinecap: "round",
     strokeLinejoin: "round",
     "aria-hidden": "true",
     ...r,
     children: i,
   });
 }
 function Xh({ solid: e, locale: t, className: n }) {
   const r = e ? "text-neutral-400" : "text-white/60",
     i = e
       ? "text-neutral-600 hover:text-teal-600"
       : "text-white/80 hover:text-white",
     s = e ? "text-teal-600" : "text-white";
   return d.jsxs("div", {
     className: Ne("flex items-center gap-1.5 text-sm font-semibold", n),
     children: [
       d.jsx(Ve, {
         name: "globe",
         className: Ne("h-4 w-4", r),
         strokeWidth: 1.8,
       }),
       d.jsx("a", {
         href: "/it",
         "aria-current": t === "it" ? "true" : void 0,
         className: t === "it" ? s : i,
         children: "IT",
       }),
       d.jsx("span", { className: r, children: "/" }),
       d.jsx("a", {
         href: "/br",
         "aria-current": t === "pt" ? "true" : void 0,
         className: t === "pt" ? s : i,
         children: "PT",
       }),
     ],
   });
 }
 function aE() {
   const e = rt(),
     t = eE(),
     n = nE(40),
     [r, i] = E.useState(!1),
     s = n || r;
   return d.jsxs("header", {
     className: Ne(
       "fixed inset-x-0 top-0 z-50 transition-all duration-300",
       s ? "bg-cream/95 shadow-soft backdrop-blur-md" : "bg-transparent",
     ),
     children: [
       d.jsxs("div", {
         className:
           "container-wt flex h-[var(--header-h)] items-center justify-between gap-4",
         children: [
           d.jsx("a", {
             href: "#top",
             className: "flex items-center",
             "aria-label": e.header.logoAlt,
             children: d.jsx("img", {
               src: "/logos/wonder-travel.webp",
               alt: e.header.logoAlt,
               width: "80",
               height: "48",
               className: Ne(
                 "h-10 w-auto transition-all duration-300 sm:h-12",
                 !s && "drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]",
               ),
             }),
           }),
           d.jsx("nav", {
             className: "hidden items-center gap-7 lg:flex",
             "aria-label": "Principale",
             children: e.header.nav.map((o) =>
               d.jsx(
                 "a",
                 {
                   href: `#${o.id}`,
                   className: Ne(
                     "link-underline text-sm font-medium transition-colors",
                     s
                       ? "text-neutral-700 hover:text-teal-600"
                       : "text-white/90 hover:text-white",
                   ),
                   children: o.label,
                 },
                 o.id,
               ),
             ),
           }),
           d.jsxs("div", {
             className: "flex items-center gap-3",
             children: [
               d.jsx($r, {
                 href: "#contatti",
                 variant: s ? "primary" : "gold",
                 className:
                   "hidden sm:inline-flex !min-h-[44px] !px-5 !py-2.5 !text-sm",
                 children: e.header.cta,
               }),
               d.jsx("button", {
                 type: "button",
                 onClick: () => i((o) => !o),
                 "aria-expanded": r,
                 "aria-label": r ? e.a11y.closeMenu : e.a11y.openMenu,
                 className: Ne(
                   "inline-flex h-11 w-11 items-center justify-center rounded-xl lg:hidden",
                   s
                     ? "text-ink hover:bg-neutral-100"
                     : "text-white hover:bg-white/10",
                 ),
                 children: d.jsx(Ve, {
                   name: r ? "close" : "menu",
                   className: "h-6 w-6",
                 }),
               }),
             ],
           }),
         ],
       }),
       d.jsx(Fg, {
         children:
           r &&
           d.jsx(J.nav, {
             initial: { opacity: 0, height: 0 },
             animate: { opacity: 1, height: "auto" },
             exit: { opacity: 0, height: 0 },
             transition: { duration: 0.25 },
             className:
               "overflow-hidden border-t border-neutral-200 bg-cream lg:hidden",
             "aria-label": "Menu mobile",
             children: d.jsxs("div", {
               className: "container-wt flex flex-col gap-1 py-4",
               children: [
                 e.header.nav.map((o) =>
                   d.jsx(
                     "a",
                     {
                       href: `#${o.id}`,
                       onClick: () => i(!1),
                       className:
                         "rounded-lg px-3 py-3 text-base font-medium text-neutral-800 hover:bg-white",
                       children: o.label,
                     },
                     o.id,
                   ),
                 ),
                 d.jsx($r, {
                   href: "#contatti",
                   onClick: () => i(!1),
                   className: "mt-2 w-full",
                   children: e.header.cta,
                 }),
               ],
             }),
           }),
       }),
     ],
   });
 }
 function lE() {
   const e = rt(),
     t = e.footer;
   return d.jsx("footer", {
     className: "bg-ink text-white/80",
     children: d.jsxs("div", {
       className: "container-wt py-14",
       children: [
         d.jsxs("div", {
           className: "grid gap-10 md:grid-cols-2 lg:grid-cols-4",
           children: [
             d.jsxs("div", {
               className: "lg:col-span-1",
               children: [
                 d.jsx("img", {
                   src: "/logos/wonder-travel.webp",
                   alt: t.logoAlt,
                   className: "h-14 w-auto",
                   width: "94",
                   height: "56",
                 }),
                 d.jsx("p", {
                   className:
                     "mt-4 max-w-xs text-sm leading-relaxed text-white/65",
                   children: t.tagline,
                 }),
               ],
             }),
             d.jsxs("nav", {
               "aria-label": t.navTitle,
               children: [
                 d.jsx("h3", {
                   className:
                     "text-sm font-semibold uppercase tracking-wide text-gold-400",
                   children: t.navTitle,
                 }),
                 d.jsx("ul", {
                   className: "mt-4 space-y-2.5 text-sm",
                   children: e.header.nav.map((n) =>
                     d.jsx(
                       "li",
                       {
                         children: d.jsx("a", {
                           href: `#${n.id}`,
                           className:
                             "text-white/70 transition hover:text-white",
                           children: n.label,
                         }),
                       },
                       n.id,
                     ),
                   ),
                 }),
               ],
             }),
             d.jsxs("div", {
               children: [
                 d.jsx("h3", {
                   className:
                     "text-sm font-semibold uppercase tracking-wide text-gold-400",
                   children: t.contactsTitle,
                 }),
                 d.jsxs("ul", {
                   className: "mt-4 space-y-3 text-sm",
                   children: [
                     d.jsxs("li", {
                       className: "flex items-start gap-2.5",
                       children: [
                         d.jsx(Ve, {
                           name: "mail",
                           className: "mt-0.5 h-5 w-5 shrink-0 text-teal-300",
                         }),
                         d.jsx("a", {
                           href: `mailto:${Pe.contacts.email}`,
                           className: "hover:text-white",
                           children: Pe.contacts.email,
                         }),
                       ],
                     }),
                     d.jsxs("li", {
                       className: "flex items-start gap-2.5",
                       children: [
                         d.jsx(Ve, {
                           name: "phone",
                           className: "mt-0.5 h-5 w-5 shrink-0 text-teal-300",
                         }),
                         d.jsx("a", {
                           href: `tel:${Pe.contacts.phoneHref}`,
                           className: "hover:text-white",
                           children: Pe.contacts.phoneDisplay,
                         }),
                       ],
                     }),
                     d.jsxs("li", {
                       className: "flex items-start gap-2.5",
                       children: [
                         d.jsx(Ve, {
                           name: "mapPin",
                           className: "mt-0.5 h-5 w-5 shrink-0 text-teal-300",
                         }),
                         d.jsxs("span", {
                           className: "text-white/70",
                           children: [
                             Pe.contacts.addressLine,
                             d.jsx("br", {}),
                             Pe.contacts.addressCity,
                           ],
                         }),
                       ],
                     }),
                   ],
                 }),
               ],
             }),
             d.jsxs("div", {
               children: [
                 d.jsx("h3", {
                   className:
                     "text-sm font-semibold uppercase tracking-wide text-gold-400",
                   children: t.legalTitle,
                 }),
                 d.jsxs("ul", {
                   className:
                     "mt-4 space-y-1.5 text-xs leading-relaxed text-white/55",
                   children: [
                     d.jsx("li", { children: Pe.legal.company }),
                     d.jsx("li", { children: Pe.legal.vat }),
                     d.jsx("li", { children: Pe.legal.rea }),
                     d.jsx("li", { children: Pe.legal.license }),
                     d.jsx("li", { children: Pe.legal.techDirector }),
                   ],
                 }),
               ],
             }),
           ],
         }),
         d.jsxs("div", {
           className:
             "mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row",
           children: [
             d.jsxs("p", {
               children: [
                 "© ",
                 new Date().getFullYear(),
                 " ",
                 Pe.legal.company,
                 ". ",
                 t.rights,
               ],
             }),
             d.jsxs("div", {
               className: "flex items-center gap-5",
               children: [
                 d.jsx(Jl, {
                   href: "/privacy",
                   className: "hover:text-white",
                   children: t.links.privacy,
                 }),
                 d.jsx(Jl, {
                   href: "/cookie",
                   className: "hover:text-white",
                   children: t.links.cookie,
                 }),
               ],
             }),
           ],
         }),
       ],
     }),
   });
 }
 function uE() {
   const e = rt(),
     [t, n] = E.useState(!1);
   return (
     E.useEffect(() => {
       const r = () => n(window.scrollY > window.innerHeight * 0.85);
       return (
         r(),
         window.addEventListener("scroll", r, { passive: !0 }),
         () => window.removeEventListener("scroll", r)
       );
     }, []),
     d.jsx(Fg, {
       children:
         t &&
         d.jsx(J.div, {
           initial: { y: 80, opacity: 0 },
           animate: { y: 0, opacity: 1 },
           exit: { y: 80, opacity: 0 },
           transition: { duration: 0.28, ease: "easeOut" },
           className:
             "fixed inset-x-0 bottom-0 z-40 border-t border-neutral-200 bg-cream/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md sm:hidden",
           children: d.jsx($r, {
             href: "#contatti",
             className: "w-full",
             children: e.header.cta,
           }),
         }),
     })
   );
 }
 function wy() {
   return !!qT();
 }
 const Le = "/images",
   je = {
     hero: {
       src: `${Le}/hero-vaticano.webp`,
       fallback: `${Le}/hero-vaticano.jpg`,
       width: 1920,
       height: 1080,
       gradient:
         "linear-gradient(135deg, #04211f 0%, #015654 60%, #017f7b 100%)",
     },
     whyCare: {
       src: `${Le}/why-cura-gruppo.webp`,
       width: 1e3,
       height: 1250,
       gradient: "linear-gradient(160deg, #016b68 0%, #3c9c97 100%)",
     },
     romeVatican: {
       src: `${Le}/roma-udienza-papale.webp`,
       width: 1200,
       height: 800,
       gradient: "linear-gradient(135deg, #015654 0%, #017f7b 100%)",
     },
     romeInterior: {
       src: `${Le}/roma-san-pietro-interno.webp`,
       width: 1200,
       height: 800,
       gradient: "linear-gradient(135deg, #04403e 0%, #016b68 100%)",
     },
     romeBasilica: {
       src: `${Le}/roma-basilica-tramonto.webp`,
       width: 800,
       height: 800,
       gradient: "linear-gradient(135deg, #a85a30 0%, #d98b5f 100%)",
     },
     romeCatacombs: {
       src: `${Le}/roma-catacombe.webp`,
       width: 800,
       height: 800,
       gradient: "linear-gradient(135deg, #052e2d 0%, #04403e 100%)",
     },
     assisiBasilica: {
       src: `${Le}/assisi-basilica-alba.webp`,
       width: 1200,
       height: 800,
       gradient: "linear-gradient(135deg, #c5703f 0%, #fec850 100%)",
     },
     assisiTown: {
       src: `${Le}/assisi-borgo.webp`,
       width: 1e3,
       height: 1250,
       gradient: "linear-gradient(160deg, #a85a30 0%, #d98b5f 100%)",
     },
     assisiAcutis: {
       src: `${Le}/assisi-santuario-acutis.webp`,
       width: 1e3,
       height: 1250,
       gradient: "linear-gradient(160deg, #04403e 0%, #c5703f 100%)",
       licensed: !0,
     },
     expCooking: {
       src: `${Le}/esperienza-cooking-class.webp`,
       width: 1e3,
       height: 750,
       gradient: "linear-gradient(135deg, #c5703f 0%, #fed468 100%)",
     },
     expWine: {
       src: `${Le}/esperienza-degustazione.webp`,
       width: 1e3,
       height: 750,
       gradient: "linear-gradient(135deg, #7a5205 0%, #fec850 100%)",
     },
     expTerrace: {
       src: `${Le}/esperienza-terrazza-roma.webp`,
       width: 1e3,
       height: 750,
       gradient: "linear-gradient(135deg, #015654 0%, #fec850 100%)",
     },
     expLandscape: {
       src: `${Le}/esperienza-val-orcia.webp`,
       width: 1e3,
       height: 750,
       gradient: "linear-gradient(135deg, #3c9c97 0%, #fed468 100%)",
     },
     expPhoto: {
       src: `${Le}/esperienza-servizio-foto.webp`,
       width: 1e3,
       height: 750,
       gradient: "linear-gradient(135deg, #a85a30 0%, #6fb6b2 100%)",
     },
     seasonality: {
       src: `${Le}/stagionalita-autunno.webp`,
       width: 1600,
       height: 600,
       gradient: "linear-gradient(135deg, #04211f 0%, #a85a30 100%)",
     },
     finalCta: {
       src: `${Le}/cta-gruppo-bus.webp`,
       width: 1920,
       height: 1080,
       gradient: "linear-gradient(135deg, #04211f 0%, #015654 100%)",
     },
   },
   cC = [
     { img: "expCooking", key: "cooking" },
     { img: "expWine", key: "wine" },
     { img: "expTerrace", key: "terrace" },
     { img: "expLandscape", key: "landscape" },
     { img: "expPhoto", key: "photo" },
   ],
   st = {
     hidden: { opacity: 0, y: 28 },
     show: {
       opacity: 1,
       y: 0,
       transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
     },
   },
   Yr = (e = 0.12, t = 0) => ({
     hidden: {},
     show: { transition: { staggerChildren: e, delayChildren: t } },
   }),
   er = { once: !0, margin: "-10% 0px" };
 function cE() {
   const e = rt(),
     t = wy(),
     [n, r] = E.useState(!1),
     { scrollY: i } = BT(),
     s = GT(i, [0, 700], ["0%", t ? "0%" : "14%"]);
   return d.jsxs("section", {
     id: "top",
     className:
       "relative flex min-h-[100svh] items-center overflow-hidden bg-ink",
     children: [
       d.jsx(J.div, {
         style: { y: s, backgroundImage: je.hero.gradient },
         className: "absolute inset-0 -z-0",
         children:
           !n &&
           d.jsxs("picture", {
             children: [
               d.jsx("source", {
                 srcSet:
                   "/images/hero-vaticano-768.webp 768w, /images/hero-vaticano-1280.webp 1280w, /images/hero-vaticano.webp 1920w",
                 sizes: "100vw",
                 type: "image/webp",
               }),
               d.jsx("img", {
                 src: je.hero.fallback || je.hero.src,
                 alt: e.hero.imageAlt,
                 width: je.hero.width,
                 height: je.hero.height,
                 loading: "eager",
                 fetchpriority: "high",
                 decoding: "async",
                 onError: () => r(!0),
                 className: "h-full w-full object-cover",
               }),
             ],
           }),
       }),
       d.jsx("div", {
         className:
           "absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/55",
       }),
       d.jsx("div", {
         className:
           "absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/50",
       }),
       d.jsx("div", { className: "absolute inset-0 bg-ink/20" }),
       d.jsx("div", {
         id: "contenuto",
         className: "container-wt relative z-10 py-28 md:py-32",
         children: d.jsxs(J.div, {
           variants: Yr(0.14, 0.1),
           initial: "hidden",
           animate: "show",
           className: "max-w-3xl lg:max-w-5xl",
           children: [
             d.jsx(J.span, {
               variants: st,
               className:
                 "inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-fluid-cap font-semibold uppercase tracking-[0.16em] text-gold-300 ring-1 ring-white/15 backdrop-blur-sm",
               children: e.hero.eyebrow,
             }),
             d.jsxs(J.h1, {
               variants: st,
               className:
                 "mt-5 text-fluid-hero font-semibold leading-[1.08] text-white",
               children: [
                 e.hero.titleA,
                 " ",
                 d.jsx("span", {
                   className: "whitespace-nowrap",
                   children: e.hero.titleB,
                 }),
                 d.jsx("span", {
                   className: "mt-1 block text-gold-400",
                   children: e.hero.titleAccent,
                 }),
               ],
             }),
             d.jsx(J.p, {
               variants: st,
               className: "mt-5 max-w-2xl text-fluid-lead text-white/90",
               children: e.hero.subtitle,
             }),
             d.jsxs(J.div, {
               variants: st,
               className:
                 "mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center",
               children: [
                 d.jsxs($r, {
                   href: "#contatti",
                   variant: "gold",
                   size: "lg",
                   className: "w-full sm:w-auto",
                   children: [
                     e.hero.cta,
                     d.jsx(Ve, { name: "arrowRight", className: "h-5 w-5" }),
                   ],
                 }),
                 d.jsx("span", {
                   className: "text-sm text-white/70",
                   children: e.hero.ctaHint,
                 }),
               ],
             }),
             d.jsx(J.ul, {
               variants: st,
               className:
                 "mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/85",
               children: e.hero.trust.map((o) =>
                 d.jsxs(
                   "li",
                   {
                     className: "flex items-center gap-2",
                     children: [
                       d.jsx(Ve, {
                         name: "check",
                         className: "h-4 w-4 text-gold-400",
                         strokeWidth: 2.4,
                       }),
                       o,
                     ],
                   },
                   o,
                 ),
               ),
             }),
           ],
         }),
       }),
       d.jsxs("a", {
         href: "#perche",
         className:
           "absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/70 transition hover:text-white md:flex",
         "aria-hidden": "true",
         tabIndex: -1,
         children: [
           d.jsx("span", {
             className: "text-xs uppercase tracking-widest",
             children: e.hero.scrollHint,
           }),
           d.jsx(J.span, {
             animate: t ? void 0 : { y: [0, 6, 0] },
             transition: { duration: 1.6, repeat: 1 / 0, ease: "easeInOut" },
             children: d.jsx(Ve, { name: "arrowDown", className: "h-5 w-5" }),
           }),
         ],
       }),
     ],
   });
 }
 function dE({ margin: e = "-12% 0px", threshold: t = 0 } = {}) {
   const n = E.useRef(null),
     [r, i] = E.useState(!1);
   return (
     E.useEffect(() => {
       const s = n.current;
       if (!s || r) return;
       if (typeof IntersectionObserver == "undefined") {
         i(!0);
         return;
       }
       const o = new IntersectionObserver(
         (a) => {
           var l;
           (l = a[0]) != null && l.isIntersecting && (i(!0), o.disconnect());
         },
         { rootMargin: e, threshold: t },
       );
       return (o.observe(s), () => o.disconnect());
     }, [r, e, t]),
     [n, r]
   );
 }
 function fE(e, { active: t, duration: n = 1600 } = {}) {
   const r = wy(),
     [i, s] = E.useState(0),
     o = E.useRef(!1);
   return (
     E.useEffect(() => {
       if (!t || o.current) return;
       if (((o.current = !0), r)) {
         s(e);
         return;
       }
       let a, l;
       const u = (f) => 1 - Math.pow(1 - f, 3),
         c = (f) => {
           l === void 0 && (l = f);
           const h = Math.min((f - l) / n, 1);
           (s(Math.round(u(h) * e)), h < 1 && (a = requestAnimationFrame(c)));
         };
       return ((a = requestAnimationFrame(c)), () => cancelAnimationFrame(a));
     }, [t, e, n, r]),
     i
   );
 }
 function hE({ value: e, suffix: t = "", label: n, active: r, light: i = !1 }) {
   const s = fE(e, { active: r }),
     o = tE();
   return d.jsxs("div", {
     className: "text-center",
     children: [
       d.jsxs("div", {
         className: `tnum text-fluid-h1 font-display font-semibold leading-none ${i ? "text-white" : "text-teal-600"}`,
         children: [ZT(s, o), t],
       }),
       d.jsx("div", {
         className: `mt-2 text-fluid-cap font-medium uppercase tracking-wide ${i ? "text-white/70" : "text-neutral-500"}`,
         children: n,
       }),
     ],
   });
 }
 function tr({
   as: e = "div",
   variants: t = st,
   className: n,
   children: r,
   delay: i = 0,
   ...s
 }) {
   const o = J[e] || J.div;
   return d.jsx(o, {
     className: n,
     variants: t,
     initial: "hidden",
     whileInView: "show",
     viewport: er,
     transition: i ? { delay: i } : void 0,
     ...s,
     children: r,
   });
 }
 function pE() {
   const e = rt(),
     [t, n] = dE();
   return d.jsx("section", {
     "aria-label": e.trust.since,
     className: "bg-white",
     children: d.jsxs("div", {
       className: "container-wt py-12 md:py-16",
       children: [
         d.jsx(tr, {
           className: "mb-8 text-center",
           children: d.jsx("span", {
             className: "eyebrow",
             children: e.trust.since,
           }),
         }),
         d.jsx("div", {
           ref: t,
           className: "grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4",
           children: Pe.stats.map((r) =>
             d.jsx(
               hE,
               {
                 value: r.value,
                 suffix: r.suffix,
                 label: e.trust.stats[r.key],
                 active: n,
               },
               r.key,
             ),
           ),
         }),
       ],
     }),
   });
 }
 function Qr({
   id: e,
   as: t = "section",
   className: n,
   containerClassName: r,
   labelledById: i,
   children: s,
   full: o = !1,
 }) {
   const a = t;
   return d.jsx(a, {
     id: e,
     "aria-labelledby": i,
     className: Ne("relative py-[clamp(4rem,8vw,8rem)]", n),
     children: o
       ? s
       : d.jsx("div", { className: Ne("container-wt", r), children: s }),
   });
 }
 function Xr({
   eyebrow: e,
   title: t,
   intro: n,
   id: r,
   align: i = "center",
   light: s = !1,
 }) {
   return d.jsxs("div", {
     className: Ne(
       "max-w-3xl",
       i === "center" ? "mx-auto text-center" : "mr-auto text-left",
     ),
     children: [
       e && d.jsx("span", { className: "eyebrow", children: e }),
       t &&
         d.jsx("h2", {
           id: r,
           className: Ne(
             "mt-3 text-fluid-h2 font-semibold",
             s ? "text-white" : "text-ink",
           ),
           children: t,
         }),
       n &&
         d.jsx("p", {
           className: Ne(
             "mt-4 text-fluid-lead",
             s ? "text-white/80" : "text-neutral-600",
           ),
           children: n,
         }),
     ],
   });
 }
 function mE() {
   const t = rt().why;
   return d.jsxs(Qr, {
     id: "perche",
     className: "bg-cream",
     labelledById: "why-title",
     children: [
       d.jsx(Xr, {
         id: "why-title",
         eyebrow: t.eyebrow,
         title: t.title,
         intro: t.intro,
       }),
       d.jsx(J.div, {
         variants: Yr(0.1),
         initial: "hidden",
         whileInView: "show",
         viewport: er,
         className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
         children: t.items.map((n) =>
           d.jsxs(
             J.article,
             {
               variants: st,
               className:
                 "group rounded-3xl border border-neutral-100 bg-white p-7 shadow-soft transition-shadow duration-300 hover:shadow-card",
               children: [
                 d.jsx("span", {
                   className:
                     "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 transition-transform duration-300 group-hover:scale-110",
                   children: d.jsx(Ve, { name: n.icon, className: "h-6 w-6" }),
                 }),
                 d.jsx("h3", {
                   className: "mt-5 text-fluid-h3 font-semibold text-ink",
                   children: n.title,
                 }),
                 d.jsx("p", {
                   className: "mt-2.5 text-neutral-600",
                   children: n.body,
                 }),
               ],
             },
             n.title,
           ),
         ),
       }),
     ],
   });
 }
 function Sy({
   image: e,
   alt: t = "",
   sizes: n = "100vw",
   priority: r = !1,
   className: i,
   imgClassName: s,
   overlay: o,
   fill: a = !1,
 }) {
   const [l, u] = E.useState(!1),
     [c, f] = E.useState(!1);
   if (!e) return null;
   const h = e.width && e.height ? `${e.width} / ${e.height}` : "16 / 9";
   return d.jsxs("div", {
     className: Ne("relative overflow-hidden", a && "h-full w-full", i),
     style: { aspectRatio: a ? void 0 : h, backgroundImage: e.gradient },
     children: [
       !c &&
         d.jsxs("picture", {
           children: [
             e.avif && d.jsx("source", { srcSet: e.avif, type: "image/avif" }),
             d.jsx("source", { srcSet: e.src, type: "image/webp" }),
             d.jsx("img", {
               src: e.fallback || e.src,
               alt: t,
               width: e.width,
               height: e.height,
               sizes: n,
               loading: r ? "eager" : "lazy",
               decoding: "async",
               fetchpriority: r ? "high" : void 0,
               onLoad: () => u(!0),
               onError: () => f(!0),
               className: Ne(
                 "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
                 l ? "opacity-100" : "opacity-0",
                 s,
               ),
             }),
           ],
         }),
       o === "dark" &&
         d.jsx("div", {
           className:
             "absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent",
         }),
       o === "soft" &&
         d.jsx("div", {
           className:
             "absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent",
         }),
     ],
   });
 }
 function bo({
   image: e,
   alt: t,
   title: n,
   body: r,
   className: i,
   sizes: s = "(min-width: 1024px) 33vw, 100vw",
   aspect: o = "aspect-[4/3]",
 }) {
   return d.jsxs("article", {
     className: Ne(
       "group relative overflow-hidden rounded-3xl shadow-soft transition-shadow duration-300 hover:shadow-card",
       o,
       i,
     ),
     children: [
       d.jsx(Sy, {
         image: e,
         alt: t,
         sizes: s,
         overlay: "dark",
         fill: !0,
         imgClassName:
           "transition-transform duration-700 motion-safe:group-hover:scale-105",
       }),
       d.jsxs("div", {
         className: "absolute inset-x-0 bottom-0 p-6 md:p-7",
         children: [
           d.jsx("h3", {
             className: "text-fluid-h3 font-semibold text-white drop-shadow",
             children: n,
           }),
           d.jsx("p", {
             className:
               "mt-2 max-w-md text-sm leading-relaxed text-white/85 md:text-base",
             children: r,
           }),
         ],
       }),
     ],
   });
 }
 function gE() {
   const t = rt().rome,
     [n, ...r] = t.highlights;
   return d.jsxs(Qr, {
     id: "roma",
     className: "bg-white",
     labelledById: "rome-title",
     children: [
       d.jsx(Xr, {
         id: "rome-title",
         eyebrow: t.eyebrow,
         title: t.title,
         intro: t.intro,
         align: "left",
       }),
       d.jsxs(J.div, {
         variants: Yr(0.1),
         initial: "hidden",
         whileInView: "show",
         viewport: er,
         className: "mt-12 grid gap-5 lg:grid-cols-3",
         children: [
           d.jsx(J.div, {
             variants: st,
             className: "lg:col-span-3",
             children: d.jsx(bo, {
               image: je[n.img],
               alt: n.alt,
               title: n.title,
               body: n.body,
               sizes: "(min-width: 1024px) 1100px, 100vw",
               aspect: "aspect-[4/3] sm:aspect-[21/9]",
             }),
           }),
           r.map((i) =>
             d.jsx(
               J.div,
               {
                 variants: st,
                 children: d.jsx(bo, {
                   image: je[i.img],
                   alt: i.alt,
                   title: i.title,
                   body: i.body,
                   aspect: "aspect-[4/3] lg:aspect-[3/4]",
                 }),
               },
               i.title,
             ),
           ),
         ],
       }),
       d.jsxs("p", {
         className:
           "mt-6 flex items-center gap-2 text-sm italic text-neutral-500",
         children: [
           d.jsx(Ve, { name: "sparkle", className: "h-4 w-4 text-gold-500" }),
           t.note,
         ],
       }),
     ],
   });
 }
 function vE() {
   const t = rt().assisi,
     [n, r] = t.highlights,
     [i, s] = t.features;
   return d.jsxs(Qr, {
     id: "assisi",
     className: "bg-sand",
     labelledById: "assisi-title",
     children: [
       d.jsx(Xr, {
         id: "assisi-title",
         eyebrow: t.eyebrow,
         title: t.title,
         intro: t.intro,
         align: "left",
       }),
       d.jsxs(J.div, {
         variants: Yr(0.1),
         initial: "hidden",
         whileInView: "show",
         viewport: er,
         className: "mt-12 grid gap-5 lg:grid-cols-5",
         children: [
           d.jsx(J.div, {
             variants: st,
             className: "lg:col-span-3",
             children: d.jsx(bo, {
               image: je[n.img],
               alt: n.alt,
               title: n.title,
               body: n.body,
               sizes: "(min-width: 1024px) 660px, 100vw",
               aspect: "aspect-[4/3] lg:aspect-[16/11]",
             }),
           }),
           d.jsx(J.div, {
             variants: st,
             className: "lg:col-span-2",
             children: d.jsx(bo, {
               image: je[r.img],
               alt: r.alt,
               title: r.title,
               body: r.body,
               sizes: "(min-width: 1024px) 440px, 100vw",
               aspect: "aspect-[4/3] lg:aspect-auto lg:h-full",
             }),
           }),
         ],
       }),
       d.jsxs("div", {
         className: "mt-5 grid gap-5 lg:grid-cols-2",
         children: [
           d.jsxs(tr, {
             className:
               "relative overflow-hidden rounded-3xl bg-ink p-8 text-white shadow-card md:p-10",
             children: [
               d.jsx("div", {
                 className:
                   "pointer-events-none absolute -right-6 -top-10 select-none font-display text-[10rem] font-bold leading-none text-gold-400/15 md:text-[13rem]",
                 "aria-hidden": "true",
                 children: "800",
               }),
               d.jsx("span", {
                 className: "relative eyebrow !text-gold-400",
                 children: i.kicker,
               }),
               d.jsx("h3", {
                 className:
                   "relative mt-3 text-fluid-h2 font-semibold text-white",
                 children: i.title,
               }),
               d.jsx("p", {
                 className: "relative mt-4 max-w-md text-white/80",
                 children: i.body,
               }),
             ],
           }),
           d.jsx(tr, {
             className:
               "overflow-hidden rounded-3xl border border-neutral-100 bg-white shadow-soft",
             children: d.jsxs("div", {
               className: "grid h-full sm:grid-cols-2",
               children: [
                 d.jsx("div", {
                   className: "relative min-h-[220px] sm:min-h-full",
                   children: d.jsx(Sy, {
                     image: je.assisiAcutis,
                     alt: s.imgAlt,
                     sizes: "(min-width: 640px) 300px, 100vw",
                     fill: !0,
                     className: "h-full",
                   }),
                 }),
                 d.jsxs("div", {
                   className: "flex flex-col justify-center p-7 md:p-8",
                   children: [
                     d.jsx("span", {
                       className: "eyebrow !text-terracotta-600",
                       children: s.kicker,
                     }),
                     d.jsx("h3", {
                       className: "mt-2 text-fluid-h3 font-semibold text-ink",
                       children: s.title,
                     }),
                     d.jsx("p", {
                       className: "mt-3 text-neutral-600",
                       children: s.body,
                     }),
                   ],
                 }),
               ],
             }),
           }),
         ],
       }),
     ],
   });
 }
 const yE = E.lazy(() =>
   ss(() => import("./ExperienceCarousel-6f33e611.js"), []),
 );
 function xE() {
   const t = rt().more;
   return d.jsxs(Qr, {
     id: "esperienze",
     className: "bg-cream",
     labelledById: "more-title",
     children: [
       d.jsx(Xr, {
         id: "more-title",
         eyebrow: t.eyebrow,
         title: t.title,
         intro: t.intro,
       }),
       d.jsx(tr, {
         className: "mt-12",
         children: d.jsx(E.Suspense, {
           fallback: d.jsx("div", { className: "h-80", "aria-hidden": "true" }),
           children: d.jsx(yE, {}),
         }),
       }),
       d.jsxs("p", {
         className:
           "mt-7 flex items-center justify-center gap-2 text-center text-sm italic text-neutral-500",
         children: [
           d.jsx(Ve, {
             name: "sparkle",
             className: "h-4 w-4 shrink-0 text-gold-500",
           }),
           t.note,
         ],
       }),
     ],
   });
 }
 function wE() {
   const t = rt().how;
   return d.jsxs(Qr, {
     id: "come-funziona",
     className: "bg-white",
     labelledById: "how-title",
     children: [
       d.jsx(Xr, { id: "how-title", eyebrow: t.eyebrow, title: t.title }),
       d.jsxs("div", {
         className: "relative mt-14",
         children: [
           d.jsx(J.div, {
             "aria-hidden": "true",
             initial: { scaleX: 0 },
             whileInView: { scaleX: 1 },
             viewport: er,
             transition: { duration: 0.9, ease: "easeInOut" },
             className:
               "absolute left-0 right-0 top-8 hidden h-0.5 origin-left bg-gradient-to-r from-teal-200 via-teal-400 to-gold-400 md:block",
           }),
           d.jsx(J.ol, {
             variants: Yr(0.18),
             initial: "hidden",
             whileInView: "show",
             viewport: er,
             className: "grid gap-10 md:grid-cols-3 md:gap-8",
             children: t.steps.map((n) =>
               d.jsxs(
                 J.li,
                 {
                   variants: st,
                   className: "relative text-center md:text-left",
                   children: [
                     d.jsx("span", {
                       className:
                         "relative z-10 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-500 font-display text-2xl font-semibold text-white shadow-soft ring-8 ring-white",
                       children: n.n,
                     }),
                     d.jsx("h3", {
                       className: "mt-5 text-fluid-h3 font-semibold text-ink",
                       children: n.title,
                     }),
                     d.jsx("p", {
                       className: "mt-2 text-neutral-600",
                       children: n.body,
                     }),
                   ],
                 },
                 n.n,
               ),
             ),
           }),
         ],
       }),
     ],
   });
 }
 function SE() {
   const t = rt().testimonials;
   return d.jsxs(Qr, {
     className: "bg-teal-50",
     labelledById: "testi-title",
     children: [
       d.jsx(Xr, { id: "testi-title", eyebrow: t.eyebrow, title: t.title }),
       d.jsx(J.div, {
         variants: Yr(0.12),
         initial: "hidden",
         whileInView: "show",
         viewport: er,
         className: "mt-12 grid gap-5 md:grid-cols-3",
         children: t.items.map((n, r) =>
           d.jsxs(
             J.figure,
             {
               variants: st,
               className:
                 "flex flex-col rounded-3xl border border-white bg-white p-7 shadow-soft",
               children: [
                 d.jsx("span", {
                   "aria-hidden": "true",
                   className:
                     "font-display text-5xl leading-none text-gold-400",
                   children: "“",
                 }),
                 d.jsx("blockquote", {
                   className: "mt-2 flex-1 text-neutral-700",
                   children: n.quote,
                 }),
                 d.jsxs("figcaption", {
                   className: "mt-5 border-t border-neutral-100 pt-4",
                   children: [
                     d.jsx("div", {
                       className: "font-semibold text-ink",
                       children: n.author,
                     }),
                     d.jsx("div", {
                       className: "text-sm text-neutral-500",
                       children: n.role,
                     }),
                   ],
                 }),
               ],
             },
             r,
           ),
         ),
       }),
       d.jsx("p", {
         className: "mt-6 text-center text-xs italic text-neutral-400",
         children: t.disclaimer,
       }),
     ],
   });
 }
 function kE() {
   const t = rt().seasonality,
     [n, r] = E.useState(!1);
   return d.jsxs("section", {
     className: "relative overflow-hidden bg-ink",
     "aria-labelledby": "season-title",
     children: [
       d.jsxs("div", {
         className: "absolute inset-0",
         style: { backgroundImage: je.seasonality.gradient },
         children: [
           !n &&
             d.jsxs("picture", {
               children: [
                 d.jsx("source", {
                   srcSet: je.seasonality.src,
                   type: "image/webp",
                 }),
                 d.jsx("img", {
                   src: je.seasonality.src,
                   alt: t.imageAlt,
                   loading: "lazy",
                   decoding: "async",
                   onError: () => r(!0),
                   className: "h-full w-full object-cover opacity-50",
                 }),
               ],
             }),
           d.jsx("div", {
             className:
               "absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/40",
           }),
         ],
       }),
       d.jsx("div", {
         className: "container-wt relative z-10 py-[clamp(4rem,8vw,7rem)]",
         children: d.jsxs(tr, {
           className: "max-w-2xl",
           children: [
             d.jsx("span", {
               className: "eyebrow !text-gold-400",
               children: t.eyebrow,
             }),
             d.jsx("h2", {
               id: "season-title",
               className: "mt-3 text-fluid-h2 font-semibold text-white",
               children: t.title,
             }),
             d.jsx("p", {
               className: "mt-4 text-fluid-lead text-white/85",
               children: t.body,
             }),
             d.jsx("ul", {
               className: "mt-6 space-y-3",
               children: t.points.map((i) =>
                 d.jsxs(
                   "li",
                   {
                     className: "flex items-start gap-3 text-white/90",
                     children: [
                       d.jsx("span", {
                         className:
                           "mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-400 text-ink",
                         children: d.jsx(Ve, {
                           name: "check",
                           className: "h-4 w-4",
                           strokeWidth: 2.6,
                         }),
                       }),
                       i,
                     ],
                   },
                   i,
                 ),
               ),
             }),
             d.jsxs($r, {
               href: "#contatti",
               variant: "gold",
               size: "lg",
               className: "mt-9",
               children: [
                 t.cta,
                 d.jsx(Ve, { name: "arrowRight", className: "h-5 w-5" }),
               ],
             }),
           ],
         }),
       }),
     ],
   });
 }
 var ds = (e) => e.type === "checkbox",
   Wn = (e) => e instanceof Date,
   ze = (e) => e == null;
 const ky = (e) => typeof e == "object";
 var de = (e) => !ze(e) && !Array.isArray(e) && ky(e) && !Wn(e),
   PE = (e) =>
     de(e) && e.target ? (ds(e.target) ? e.target.checked : e.target.value) : e,
   TE = (e, t) =>
     t
       .split(".")
       .some((n, r, i) => !isNaN(Number(n)) && e.has(i.slice(0, r).join("."))),
   EE = (e) => {
     const t = e.constructor && e.constructor.prototype;
     return de(t) && t.hasOwnProperty("isPrototypeOf");
   },
   la =
     typeof window != "undefined" &&
     typeof window.HTMLElement != "undefined" &&
     typeof document != "undefined";
 function ge(e) {
   if (e instanceof Date) return new Date(e);
   const t = typeof FileList != "undefined" && e instanceof FileList;
   if (la && (e instanceof Blob || t)) return e;
   const n = Array.isArray(e);
   if (!n && !(de(e) && EE(e))) return e;
   const r = n ? [] : Object.create(Object.getPrototypeOf(e));
   for (const i in e)
     Object.prototype.hasOwnProperty.call(e, i) && (r[i] = ge(e[i]));
   return r;
 }
 const ar = {
     BLUR: "blur",
     FOCUS_OUT: "focusout",
     SUBMIT: "submit",
     TRIGGER: "trigger",
     VALID: "valid",
   },
   Nt = {
     onBlur: "onBlur",
     onChange: "onChange",
     onSubmit: "onSubmit",
     onTouched: "onTouched",
     all: "all",
   },
   Et = {
     max: "max",
     min: "min",
     maxLength: "maxLength",
     minLength: "minLength",
     pattern: "pattern",
     required: "required",
     validate: "validate",
   },
   il = "form",
   Py = "root",
   Ty = ["__proto__", "constructor", "prototype"];
 var fs = (e) => /^\w*$/.test(e),
   oe = (e) => e === void 0,
   ua = (e) => e.split(/[.[\]'"]/g).filter(Boolean),
   z = (e, t, n) => {
     if (!t || !de(e)) return n;
     const r = fs(t) ? [t] : ua(t);
     if (r.some((s) => Ty.includes(s))) return n;
     const i = r.reduce((s, o) => (ze(s) ? void 0 : s[o]), e);
     return oe(i) || i === e ? (oe(e[t]) ? n : e[t]) : i;
   },
   Ft = (e) => typeof e == "boolean",
   vt = (e) => typeof e == "function",
   ie = (e, t, n) => {
     let r = -1;
     const i = fs(t) ? [t] : ua(t),
       s = i.length,
       o = s - 1;
     for (; ++r < s; ) {
       const a = i[r];
       let l = n;
       if (r !== o) {
         const u = e[a];
         l = de(u) || Array.isArray(u) ? u : isNaN(+i[r + 1]) ? {} : [];
       }
       if (Ty.includes(a)) return;
       ((e[a] = l), (e = e[a]));
     }
   };
 const CE = Me.createContext(null);
 CE.displayName = "HookFormControlContext";
 var AE = (e, t, n, r = !0) => {
   const i = {};
   for (const s in e)
     Object.defineProperty(i, s, {
       get: () => {
         const o = s;
         return (
           t._proxyFormState[o] !== Nt.all &&
             (t._proxyFormState[o] = !r || Nt.all),
           e[o]
         );
       },
     });
   return i;
 };
 const jE = la ? Me.useLayoutEffect : Me.useEffect;
 var We = (e) => typeof e == "string",
   NE = (e, t, n, r, i) =>
     We(e)
       ? (r && t.watch.add(e), z(n, e, i))
       : Array.isArray(e)
         ? e.map((s) => (r && t.watch.add(s), z(n, s)))
         : (r && (t.watchAll = !0), n),
   vu = (e) => ze(e) || !ky(e);
 function Ot(e, t, n = new WeakSet()) {
   if (e === t) return !0;
   if (vu(e) || vu(t)) return Object.is(e, t);
   if (Wn(e) && Wn(t)) return Object.is(e.getTime(), t.getTime());
   const r = Object.keys(e),
     i = Object.keys(t);
   if (r.length !== i.length) return !1;
   if (n.has(e) || n.has(t)) return !0;
   (n.add(e), n.add(t));
   for (const s of r) {
     const o = e[s];
     if (!(s in t)) return !1;
     if (s !== "ref") {
       const a = t[s];
       if (
         (Wn(o) && Wn(a)) ||
         ((de(o) || Array.isArray(o)) && (de(a) || Array.isArray(a)))
           ? !Ot(o, a, n)
           : !Object.is(o, a)
       )
         return !1;
     }
   }
   return !0;
 }
 const VE = Me.createContext(null);
 VE.displayName = "HookFormContext";
 var RE = (e, t, n, r, i) =>
     t
       ? {
           ...n[e],
           types: { ...(n[e] && n[e].types ? n[e].types : {}), [r]: i || !0 },
         }
       : {},
   Ey = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
   eo = (e) => (Array.isArray(e) ? e : [e]),
   Zh = () => {
     let e = [];
     return {
       get observers() {
         return e;
       },
       next: (i) => {
         for (const s of e) s.next && s.next(i);
       },
       subscribe: (i) => (
         e.push(i),
         {
           unsubscribe: () => {
             e = e.filter((s) => s !== i);
           },
         }
       ),
       unsubscribe: () => {
         e = [];
       },
     };
   };
 function Cy(e, t) {
   const n = {};
   for (const r in e)
     if (e.hasOwnProperty(r)) {
       const i = e[r],
         s = t[r];
       if (i && de(i) && s) {
         const o = Cy(i, s);
         de(o) && (n[r] = o);
       } else e[r] && (n[r] = s);
     }
   return n;
 }
 var be = (e) => de(e) && !Object.keys(e).length,
   Jc = (e) => e.type === "file",
   _o = (e) => {
     if (!la) return !1;
     const t = e ? e.ownerDocument : 0;
     return (
       e instanceof
       (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
     );
   },
   Ay = (e) => e.type === "select-multiple",
   ed = (e) => e.type === "radio",
   DE = (e) => ed(e) || ds(e),
   sl = (e) => _o(e) && e.isConnected;
 function LE(e, t) {
   const n = t.slice(0, -1).length;
   let r = 0;
   for (; r < n; ) {
     if (ze(e)) {
       e = void 0;
       break;
     }
     ((e = e[t[r]]), r++);
   }
   return e;
 }
 function bE(e) {
   for (const t in e) if (e.hasOwnProperty(t) && !oe(e[t])) return !1;
   return !0;
 }
 function Se(e, t) {
   if (We(t) && Object.prototype.hasOwnProperty.call(e, t))
     return (delete e[t], e);
   const n = Array.isArray(t) ? t : fs(t) ? [t] : ua(t),
     r = n.length === 1 ? e : LE(e, n),
     i = n.length - 1,
     s = n[i];
   return (
     r && delete r[s],
     i !== 0 &&
       ((de(r) && be(r)) || (Array.isArray(r) && bE(r))) &&
       Se(e, n.slice(0, -1)),
     e
   );
 }
 var _E = (e) => {
   for (const t in e) if (vt(e[t])) return !0;
   return !1;
 };
 function jy(e) {
   return Array.isArray(e) || (de(e) && !_E(e));
 }
 function yu(e, t = {}) {
   for (const n in e) {
     const r = e[n];
     jy(r)
       ? ((t[n] = Array.isArray(r) ? [] : {}), yu(r, t[n]))
       : oe(r) || (t[n] = !0);
   }
   return t;
 }
 function xu(e) {
   if (e !== !1) {
     if (e === !0) return !0;
     if (Array.isArray(e)) {
       const t = e.map((n) => xu(n));
       return t.some((n) => n !== void 0) ? t : void 0;
     }
     if (de(e)) {
       const t = {};
       for (const n in e) {
         const r = xu(e[n]);
         oe(r) || (t[n] = r);
       }
       return Object.keys(t).length ? t : void 0;
     }
   }
 }
 function On(e, t, n) {
   n || (n = yu(t));
   for (const r in e) {
     const i = e[r];
     if (jy(i))
       oe(t) || vu(n[r])
         ? (n[r] = yu(i, Array.isArray(i) ? [] : {}))
         : On(i, ze(t) ? {} : t[r], n[r]);
     else {
       const s = t[r];
       n[r] = !Ot(i, s);
     }
   }
   return xu(n) || {};
 }
 const Jh = { value: !1, isValid: !1 },
   ep = { value: !0, isValid: !0 };
 var Ny = (e) => {
     if (Array.isArray(e)) {
       if (e.length > 1) {
         const t = e
           .filter((n) => n && n.checked && !n.disabled)
           .map((n) => n.value);
         return { value: t, isValid: !!t.length };
       }
       return e[0].checked && !e[0].disabled
         ? e[0].attributes && !oe(e[0].attributes.value)
           ? oe(e[0].value) || e[0].value === ""
             ? ep
             : { value: e[0].value, isValid: !0 }
           : ep
         : Jh;
     }
     return Jh;
   },
   Vy = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) =>
     oe(e)
       ? e
       : t
         ? e === ""
           ? NaN
           : e && +e
         : n && We(e)
           ? new Date(e)
           : r
             ? r(e)
             : e;
 const tp = { isValid: !1, value: null };
 var Ry = (e) =>
   Array.isArray(e)
     ? e.reduce(
         (t, n) =>
           n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : t,
         tp,
       )
     : tp;
 function np(e) {
   const t = e.ref;
   return Jc(t)
     ? t.files
     : ed(t)
       ? Ry(e.refs).value
       : Ay(t)
         ? [...t.selectedOptions].map(({ value: n }) => n)
         : ds(t)
           ? Ny(e.refs).value
           : Vy(oe(t.value) ? e.ref.value : t.value, e);
 }
 var ME = (e, t, n, r) => {
     const i = {};
     for (const s of e) {
       const o = z(t, s);
       o && ie(i, s, o._f);
     }
     return {
       criteriaMode: n,
       names: [...e],
       fields: i,
       shouldUseNativeValidation: r,
     };
   },
   Mo = (e) => e instanceof RegExp,
   ui = (e) =>
     oe(e)
       ? e
       : Mo(e)
         ? e.source
         : de(e)
           ? Mo(e.value)
             ? e.value.source
             : e.value
           : e,
   rp = (e) => ({
     isOnSubmit: !e || e === Nt.onSubmit,
     isOnBlur: e === Nt.onBlur,
     isOnChange: e === Nt.onChange,
     isOnAll: e === Nt.all,
     isOnTouch: e === Nt.onTouched,
   });
 const ip = "AsyncFunction";
 var zE = (e) =>
     !!e &&
     !!e.validate &&
     !!(
       (vt(e.validate) && e.validate.constructor.name === ip) ||
       (de(e.validate) &&
         Object.values(e.validate).find((t) => t.constructor.name === ip))
     ),
   FE = (e) =>
     e.mount &&
     (e.required ||
       e.min ||
       e.max ||
       e.maxLength ||
       e.minLength ||
       e.pattern ||
       e.validate),
   sp = (e, t, n) =>
     !n &&
     (t.watchAll ||
       t.watch.has(e) ||
       [...t.watch].some((r) => e.startsWith(`${r}.`)));
 const Di = (e, t, n, r) => {
   for (const i of n || Object.keys(e)) {
     const s = z(e, i);
     if (s) {
       const { _f: o, ...a } = s;
       if (o) {
         if (o.refs && o.refs[0] && t(o.refs[0], i) && !r) return !0;
         if (o.ref && t(o.ref, o.name) && !r) return !0;
         if (Di(a, t)) break;
       } else if (de(a) && Di(a, t)) break;
     }
   }
 };
 function op(e, t, n) {
   const r = z(e, n);
   if (r || fs(n)) return { error: r, name: n };
   const i = n.split(".");
   for (; i.length; ) {
     const s = i.join("."),
       o = z(t, s),
       a = z(e, s);
     if (o && !Array.isArray(o) && n !== s) return { name: n };
     if (a && a.type) return { name: s, error: a };
     if (a && a.root && a.root.type)
       return { name: `${s}.root`, error: a.root };
     i.pop();
   }
   return { name: n };
 }
 var OE = (e, t, n, r) => {
     n(e);
     const { name: i, ...s } = e;
     return (
       be(s) ||
       (r && Object.keys(s).length >= Object.keys(t).length) ||
       Object.keys(s).find((o) => t[o] === (!r || Nt.all))
     );
   },
   IE = (e, t, n) =>
     !e ||
     !t ||
     e === t ||
     eo(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r))),
   BE = (e, t, n, r, i) =>
     i.isOnAll
       ? !1
       : !n && i.isOnTouch
         ? !(t || e)
         : (n ? r.isOnBlur : i.isOnBlur)
           ? !e
           : (n ? r.isOnChange : i.isOnChange)
             ? e
             : !0,
   UE = (e, t) => !Ey(z(e, t)).length && Se(e, t),
   ap = (e, t, n) => {
     const r = z(e, n),
       i = Array.isArray(r) ? r : [];
     return (ie(i, Py, t[n]), ie(e, n, i), e);
   };
 function lp(e, t, n = "validate") {
   if (We(e) || (Array.isArray(e) && e.every(We)) || (Ft(e) && !e))
     return { type: n, message: We(e) ? e : "", ref: t };
 }
 var lr = (e) => (de(e) && !Mo(e) ? e : { value: e, message: "" }),
   up = async (e, t, n, r, i, s) => {
     const {
         ref: o,
         refs: a,
         required: l,
         maxLength: u,
         minLength: c,
         min: f,
         max: h,
         pattern: g,
         validate: w,
         name: S,
         valueAsNumber: C,
         mount: m,
       } = e._f,
       p = z(n, S);
     if (!m || t.has(S)) return {};
     const v = a ? a[0] : o,
       P = (H) => {
         i &&
           v.reportValidity &&
           (v.setCustomValidity(Ft(H) ? "" : H || ""), v.reportValidity());
       },
       T = {},
       A = ed(o),
       R = ds(o),
       j = A || R,
       $ =
         ((C || Jc(o)) && oe(o.value) && oe(p)) ||
         (_o(o) && o.value === "") ||
         p === "" ||
         (Array.isArray(p) && !p.length),
       F = RE.bind(null, S, r, T),
       le = (H, W, te, ne = Et.maxLength, De = Et.minLength) => {
         const Q = H ? W : te;
         T[S] = { type: H ? ne : De, message: Q, ref: o, ...F(H ? ne : De, Q) };
       };
     if (
       s
         ? !Array.isArray(p) || !p.length
         : l &&
           ((!j && ($ || ze(p))) ||
             (Ft(p) && !p) ||
             (R && !Ny(a).isValid) ||
             (A && !Ry(a).isValid))
     ) {
       const { value: H, message: W } = We(l)
         ? { value: !!l, message: l }
         : lr(l);
       if (
         H &&
         ((T[S] = {
           type: Et.required,
           message: W,
           ref: v,
           ...F(Et.required, W),
         }),
         !r)
       )
         return (P(W), T);
     }
     if (!$ && (!ze(f) || !ze(h))) {
       let H, W;
       const te = lr(h),
         ne = lr(f);
       if (!ze(p) && !isNaN(p)) {
         const De = o.valueAsNumber || (p && +p);
         (ze(te.value) || (H = De > te.value),
           ze(ne.value) || (W = De < ne.value));
       } else {
         const De = o.valueAsDate || new Date(p),
           Q = (U) => new Date(new Date().toDateString() + " " + U),
           L = o.type == "time",
           I = o.type == "week";
         (We(te.value) &&
           p &&
           (H = L
             ? Q(p) > Q(te.value)
             : I
               ? p > te.value
               : De > new Date(te.value)),
           We(ne.value) &&
             p &&
             (W = L
               ? Q(p) < Q(ne.value)
               : I
                 ? p < ne.value
                 : De < new Date(ne.value)));
       }
       if ((H || W) && (le(!!H, te.message, ne.message, Et.max, Et.min), !r))
         return (P(T[S].message), T);
     }
     if ((u || c) && !$ && (We(p) || (s && Array.isArray(p)))) {
       const H = lr(u),
         W = lr(c),
         te = !ze(H.value) && p.length > +H.value,
         ne = !ze(W.value) && p.length < +W.value;
       if ((te || ne) && (le(te, H.message, W.message), !r))
         return (P(T[S].message), T);
     }
     if (g && !$ && We(p)) {
       const { value: H, message: W } = lr(g);
       if (
         Mo(H) &&
         !p.match(H) &&
         ((T[S] = {
           type: Et.pattern,
           message: W,
           ref: o,
           ...F(Et.pattern, W),
         }),
         !r)
       )
         return (P(W), T);
     }
     if (w) {
       if (vt(w)) {
         const H = await w(p, n),
           W = lp(H, v);
         if (W && ((T[S] = { ...W, ...F(Et.validate, W.message) }), !r))
           return (P(W.message), T);
       } else if (de(w)) {
         let H = {};
         for (const W in w) {
           if (!be(H) && !r) break;
           const te = lp(await w[W](p, n), v, W);
           te &&
             ((H = { ...te, ...F(W, te.message) }),
             P(te.message),
             r && (T[S] = H));
         }
         if (!be(H) && ((T[S] = { ref: v, ...H }), !r)) return T;
       }
     }
     return (P(!0), T);
   };
 const $E = {
     mode: Nt.onSubmit,
     reValidateMode: Nt.onChange,
     shouldFocusError: !0,
   },
   Dy = {
     submitCount: 0,
     isDirty: !1,
     isReady: !1,
     isValidating: !1,
     isSubmitted: !1,
     isSubmitting: !1,
     isSubmitSuccessful: !1,
     isValid: !1,
     touchedFields: {},
     dirtyFields: {},
     validatingFields: {},
   };
 function WE(e = {}) {
   let t = { ...$E, ...e },
     n = {
       ...ge(Dy),
       isLoading: vt(t.defaultValues),
       errors: t.errors || {},
       disabled: t.disabled || !1,
     },
     r = {},
     i =
       de(t.defaultValues) || de(t.values)
         ? ge(t.defaultValues || t.values) || {}
         : {},
     s = t.shouldUnregister ? {} : ge(i),
     o = { action: !1, mount: !1, watch: !1, keepIsValid: !1 },
     a = {
       mount: new Set(),
       disabled: new Set(),
       unMount: new Set(),
       array: new Set(),
       watch: new Set(),
       registerName: new Set(),
     },
     l,
     u = 0;
   const c = {
       isDirty: !1,
       dirtyFields: !1,
       validatingFields: !1,
       touchedFields: !1,
       isValidating: !1,
       isValid: !1,
       errors: !1,
     },
     f = { ...c };
   let h = { ...f };
   const g = { array: Zh(), state: Zh() },
     w = t.criteriaMode === Nt.all,
     S = (y) => (x) => {
       (clearTimeout(u), (u = setTimeout(y, x)));
     },
     C = async (y) => {
       if (!o.keepIsValid && !t.disabled && (f.isValid || h.isValid || y)) {
         let x;
         (t.resolver
           ? ((x = be((await F()).errors)), m())
           : (x = await W({
               fields: r,
               onlyCheckValid: !0,
               eventType: ar.VALID,
             })),
           x !== n.isValid && g.state.next({ isValid: x }));
       }
     },
     m = (y, x) => {
       !t.disabled &&
         (f.isValidating ||
           f.validatingFields ||
           h.isValidating ||
           h.validatingFields) &&
         ((y || Array.from(a.mount)).forEach((k) => {
           k && (x ? ie(n.validatingFields, k, x) : Se(n.validatingFields, k));
         }),
         g.state.next({
           validatingFields: n.validatingFields,
           isValidating: !be(n.validatingFields),
         }));
     },
     p = () => {
       n.dirtyFields = On(i, s);
     },
     v = (y, x = [], k, V, b = !0, _ = !0) => {
       if (V && k && !t.disabled) {
         if (((o.action = !0), _ && Array.isArray(z(r, y)))) {
           const D = k(z(r, y), V.argA, V.argB);
           b && ie(r, y, D);
         }
         if (_ && Array.isArray(z(n.errors, y))) {
           const D = k(z(n.errors, y), V.argA, V.argB);
           (b && ie(n.errors, y, D), UE(n.errors, y));
         }
         if (
           (f.touchedFields || h.touchedFields) &&
           _ &&
           Array.isArray(z(n.touchedFields, y))
         ) {
           const D = k(z(n.touchedFields, y), V.argA, V.argB);
           b && ie(n.touchedFields, y, D);
         }
         ((f.dirtyFields || h.dirtyFields) && p(),
           g.state.next({
             name: y,
             isDirty: ne(y, x),
             dirtyFields: n.dirtyFields,
             errors: n.errors,
             isValid: n.isValid,
           }));
       } else ie(s, y, x);
     },
     P = (y, x) => {
       (ie(n.errors, y, x), g.state.next({ errors: n.errors }));
     },
     T = (y) => {
       ((n.errors = y), g.state.next({ errors: n.errors, isValid: !1 }));
     },
     A = (y) => {
       const x = fs(y) ? [y] : ua(y);
       let k = s,
         V = i;
       for (let b = 0; b < x.length - 1; b++) {
         const _ = x[b];
         if (
           ((k = ze(k) ? k : k[_]),
           (V = ze(V) ? V : V[_]),
           k === null && V !== null)
         )
           return !0;
       }
       return !1;
     },
     R = (y, x, k, V) => {
       const b = z(r, y);
       if (b) {
         if (A(y)) return;
         const _ = oe(z(s, y)),
           D = z(s, y, oe(k) ? z(i, y) : k);
         (oe(D) || (V && V.defaultChecked) || x
           ? ie(s, y, x ? D : np(b._f))
           : L(y, D),
           o.mount &&
             !o.action &&
             (C(),
             _ &&
               n.isDirty &&
               (f.isDirty || h.isDirty) &&
               (ne() || ((n.isDirty = !1), g.state.next({ ...n })))));
       }
     },
     j = (y, x, k, V, b) => {
       let _ = !1,
         D = !1;
       const O = { name: y };
       if (!t.disabled) {
         if (!k || V) {
           (f.isDirty || h.isDirty) &&
             ((D = n.isDirty),
             (n.isDirty = O.isDirty = ne()),
             (_ = D !== O.isDirty));
           const G = Ot(z(i, y), x);
           ((D = !!z(n.dirtyFields, y)),
             G !== n.isDirty
               ? (n.dirtyFields = On(i, s))
               : G
                 ? Se(n.dirtyFields, y)
                 : ie(n.dirtyFields, y, !0),
             (O.dirtyFields = n.dirtyFields),
             (_ = _ || ((f.dirtyFields || h.dirtyFields) && D !== !G)));
         }
         if (k) {
           const G = z(n.touchedFields, y);
           G ||
             (ie(n.touchedFields, y, k),
             (O.touchedFields = n.touchedFields),
             (_ = _ || ((f.touchedFields || h.touchedFields) && G !== k)));
         }
         _ && b && g.state.next(O);
       }
       return _ ? O : {};
     },
     $ = (y, x, k, V) => {
       const b = z(n.errors, y),
         _ = (f.isValid || h.isValid) && Ft(x) && n.isValid !== x;
       if (
         (t.delayError && k
           ? ((l = S(() => P(y, k))), l(t.delayError))
           : (clearTimeout(u),
             (l = null),
             k ? ie(n.errors, y, k) : Se(n.errors, y)),
         (k ? !Ot(b, k) : b) || !be(V) || _)
       ) {
         const D = {
           ...V,
           ...(_ && Ft(x) ? { isValid: x } : {}),
           errors: n.errors,
           name: y,
         };
         ((n = { ...n, ...D }), g.state.next(D));
       }
     },
     F = async (y) => (
       m(y, !0),
       await t.resolver(
         s,
         t.context,
         ME(y || a.mount, r, t.criteriaMode, t.shouldUseNativeValidation),
       )
     ),
     le = async (y) => {
       const { errors: x } = await F(y);
       if ((m(y), y))
         for (const k of y) {
           const V = z(x, k);
           V
             ? a.array.has(k) &&
               de(V) &&
               !Object.keys(V).some((b) => !Number.isNaN(Number(b)))
               ? ap(n.errors, { [k]: V }, k)
               : ie(n.errors, k, V)
             : Se(n.errors, k);
         }
       else n.errors = x;
       return x;
     },
     H = async ({ name: y, eventType: x }) => {
       if (e.validate) {
         const k = await e.validate({
           formValues: s,
           formState: n,
           name: y,
           eventType: x,
         });
         if (de(k))
           for (const V in k) {
             const b = k[V];
             b &&
               hs(`${il}.${V}`, {
                 message: We(b.message) ? b.message : "",
                 type: b.type || Et.validate,
               });
           }
         else
           We(k) || !k
             ? hs(il, { message: k || "", type: Et.validate })
             : rd(il);
         return k;
       }
       return !0;
     },
     W = async ({
       fields: y,
       onlyCheckValid: x,
       name: k,
       eventType: V,
       context: b = { valid: !0, runRootValidation: !1 },
     }) => {
       if (
         e.validate &&
         ((b.runRootValidation = !0),
         !(await H({ name: k, eventType: V })) && ((b.valid = !1), x))
       )
         return b.valid;
       for (const _ in y) {
         const D = y[_];
         if (D) {
           const { _f: O, ...G } = D;
           if (O) {
             const we = a.array.has(O.name),
               ft = D._f && zE(D._f),
               kt =
                 f.validatingFields ||
                 f.isValidating ||
                 h.validatingFields ||
                 h.isValidating;
             ft && kt && m([O.name], !0);
             const Ln = await up(
               D,
               a.disabled,
               s,
               w,
               t.shouldUseNativeValidation && !x,
               we,
             );
             if (
               (ft && kt && m([O.name]),
               (Ln[O.name] && ((b.valid = !1), x)) ||
                 (!x &&
                   (z(Ln, O.name)
                     ? we
                       ? ap(n.errors, Ln, O.name)
                       : ie(n.errors, O.name, Ln[O.name])
                     : Se(n.errors, O.name)),
                 e.shouldUseNativeValidation && Ln[O.name]))
             )
               break;
           }
           !be(G) &&
             (await W({
               context: b,
               onlyCheckValid: x,
               fields: G,
               name: _,
               eventType: V,
             }));
         }
       }
       return b.valid;
     },
     te = () => {
       for (const y of a.unMount) {
         const x = z(r, y);
         x &&
           (x._f.refs ? x._f.refs.every((k) => !sl(k)) : !sl(x._f.ref)) &&
           da(y);
       }
       a.unMount = new Set();
     },
     ne = (y, x) => !t.disabled && (y && x && ie(s, y, x), !Ot(_t(), i)),
     De = (y, x, k) =>
       NE(
         y,
         a,
         { ...(o.mount ? s : oe(x) ? i : We(y) ? { [y]: x } : x) },
         k,
         x,
       ),
     Q = (y) =>
       Ey(z(o.mount ? s : i, y, t.shouldUnregister ? z(i, y, []) : [])),
     L = (y, x, k = {}, V = !1) => {
       const b = z(r, y);
       let _ = x;
       if (b) {
         const D = b._f;
         D &&
           (!D.disabled && ie(s, y, Vy(x, D)),
           (_ = _o(D.ref) && ze(x) ? "" : x),
           Ay(D.ref)
             ? [...D.ref.options].forEach(
                 (O) => (O.selected = _.includes(O.value)),
               )
             : D.refs
               ? ds(D.ref)
                 ? D.refs.forEach((O) => {
                     (!O.defaultChecked || !O.disabled) &&
                       (Array.isArray(_)
                         ? (O.checked = !!_.find((G) => G === O.value))
                         : (O.checked = _ === O.value || !!_));
                   })
                 : D.refs.forEach((O) => (O.checked = O.value === _))
               : Jc(D.ref)
                 ? (D.ref.value = "")
                 : ((D.ref.value = _),
                   D.ref.type ||
                     g.state.next({ name: y, values: V ? s : ge(s) })));
       }
       ((k.shouldDirty || k.shouldTouch) &&
         j(y, _, k.shouldTouch, k.shouldDirty, !0),
         k.shouldValidate && Rn(y));
     },
     I = (y, x, k, V = !1) => {
       for (const b in x) {
         if (!x.hasOwnProperty(b)) return;
         const _ = x[b],
           D = y + "." + b,
           O = z(r, D);
         (a.array.has(y) || de(_) || (O && !O._f)) && !Wn(_)
           ? I(D, _, k, V)
           : L(D, _, k, V);
       }
     },
     U = (y, x, k, V) => {
       const b = z(r, y),
         _ = a.array.has(y),
         D = V ? x : ge(x),
         O = z(s, y),
         G = Ot(O, D);
       if ((G || ie(s, y, D), _))
         (g.array.next({ name: y, values: V ? s : ge(s) }),
           (f.isDirty || f.dirtyFields || h.isDirty || h.dirtyFields) &&
             k.shouldDirty &&
             (p(),
             g.state.next({
               name: y,
               dirtyFields: n.dirtyFields,
               isDirty: ne(y, D),
             })));
       else {
         const we = (Array.isArray(D) && !D.length) || be(D);
         !b || b._f || ze(D) || we ? L(y, D, k, V) : I(y, D, k, V);
       }
       if (!G) {
         const we = sp(y, a),
           ft = V ? s : ge(s);
         g.state.next({
           ...(we && n),
           name: o.mount || we ? y : void 0,
           values: ft,
         });
       }
     },
     Z = (y, x, k = {}) => U(y, x, k, !1),
     xe = (y, x = {}) => {
       const k = vt(y) ? y(s) : y;
       if (!Ot(s, k)) {
         s = { ...s, ...k };
         for (const V of a.mount) U(V, z(k, V), x, !0);
         (g.state.next({ ...n, name: void 0, type: void 0, values: s }),
           x.shouldValidate && C());
       }
     },
     Vn = async (y) => {
       o.mount = !0;
       const x = y.target;
       let k = x.name,
         V = !0;
       const b = z(r, k),
         _ = (G) => {
           V =
             Number.isNaN(G) ||
             (Wn(G) && isNaN(G.getTime())) ||
             Ot(G, z(s, k, G));
         },
         D = rp(t.mode),
         O = rp(t.reValidateMode);
       if (b) {
         let G, we;
         const ft = x.type ? np(b._f) : PE(y),
           kt = y.type === ar.BLUR || y.type === ar.FOCUS_OUT,
           Ln =
             (!FE(b._f) &&
               !e.validate &&
               !t.resolver &&
               !z(n.errors, k) &&
               !b._f.deps) ||
             BE(kt, z(n.touchedFields, k), n.isSubmitted, O, D),
           pa = sp(k, a, kt);
         (ie(s, k, ft),
           kt
             ? (!x || !x.readOnly) && (b._f.onBlur && b._f.onBlur(y), l && l(0))
             : b._f.onChange && b._f.onChange(y));
         const ma = j(k, ft, kt),
           Oy = !be(ma) || pa;
         if (
           (!kt && g.state.next({ name: k, type: y.type, values: ge(s) }), Ln)
         )
           return (
             (f.isValid || h.isValid) &&
               (t.mode === "onBlur" ? kt && C() : kt || C()),
             Oy && g.state.next({ name: k, ...(pa ? {} : ma) })
           );
         if (
           (!t.resolver &&
             e.validate &&
             (await H({ name: k, eventType: y.type })),
           !kt && pa && g.state.next({ ...n }),
           t.resolver)
         ) {
           const { errors: cd } = await F([k]);
           if ((m([k]), _(ft), V)) {
             const Iy = op(n.errors, r, k),
               dd = op(cd, r, Iy.name || k);
             ((G = dd.error), (k = dd.name), (we = be(cd)));
           }
         } else
           (m([k], !0),
             (G = (await up(b, a.disabled, s, w, t.shouldUseNativeValidation))[
               k
             ]),
             m([k]),
             _(ft),
             V &&
               (G
                 ? (we = !1)
                 : (f.isValid || h.isValid) &&
                   (we = await W({
                     fields: r,
                     onlyCheckValid: !0,
                     name: k,
                     eventType: y.type,
                   }))));
         V &&
           (b._f.deps &&
             (!Array.isArray(b._f.deps) || b._f.deps.length > 0) &&
             Rn(b._f.deps),
           $(k, we, G, ma));
       }
     },
     bt = (y, x) => {
       if (z(n.errors, x) && y.focus) return (y.focus(), 1);
     },
     Rn = async (y, x = {}) => {
       let k, V;
       const b = eo(y);
       if (t.resolver) {
         const _ = await le(oe(y) ? y : b);
         ((k = be(_)), (V = y ? !b.some((D) => z(_, D)) : k));
       } else
         y
           ? ((V = (
               await Promise.all(
                 b.map(async (_) => {
                   const D = z(r, _);
                   return await W({
                     fields: D && D._f ? { [_]: D } : D,
                     eventType: ar.TRIGGER,
                   });
                 }),
               )
             ).every(Boolean)),
             !(!V && !n.isValid) && C())
           : (V = k = await W({ fields: r, name: y, eventType: ar.TRIGGER }));
       return (
         g.state.next({
           ...(!We(y) || ((f.isValid || h.isValid) && k !== n.isValid)
             ? {}
             : { name: y }),
           ...(t.resolver || !y ? { isValid: k } : {}),
           errors: n.errors,
         }),
         x.shouldFocus && !V && Di(r, bt, y ? b : a.mount),
         V
       );
     },
     _t = (y, x) => {
       let k = { ...(o.mount ? s : i) };
       return (
         x && (k = Cy(x.dirtyFields ? n.dirtyFields : n.touchedFields, k)),
         oe(y) ? k : We(y) ? z(k, y) : y.map((V) => z(k, V))
       );
     },
     Dn = (y, x) => ({
       invalid: !!z((x || n).errors, y),
       isDirty: !!z((x || n).dirtyFields, y),
       error: z((x || n).errors, y),
       isValidating: !!z(n.validatingFields, y),
       isTouched: !!z((x || n).touchedFields, y),
     }),
     rd = (y) => {
       const x = y ? eo(y) : void 0;
       (x == null || x.forEach((k) => Se(n.errors, k)),
         x
           ? x.forEach((k) => {
               g.state.next({ name: k, errors: n.errors });
             })
           : g.state.next({ errors: {} }));
     },
     hs = (y, x, k) => {
       const V = (z(r, y, { _f: {} })._f || {}).ref,
         b = z(n.errors, y) || {},
         { ref: _, message: D, type: O, ...G } = b;
       (ie(n.errors, y, { ...G, ...x, ref: V }),
         g.state.next({ name: y, errors: n.errors, isValid: !1 }),
         k && k.shouldFocus && V && V.focus && V.focus());
     },
     Ly = (y, x) =>
       vt(y)
         ? g.state.subscribe({
             next: (k) => "values" in k && y(k.values || De(void 0, x), k),
           })
         : De(y, x, !0),
     id = (y) =>
       g.state.subscribe({
         next: (x) => {
           if (
             IE(y.name, x.name, y.exact) &&
             OE(x, y.formState || f, Fy, y.reRenderRoot)
           ) {
             const k = { ...s };
             y.callback({ values: k, ...n, ...x, defaultValues: i });
           }
         },
       }).unsubscribe,
     by = (y) => (
       (o.mount = !0),
       (h = { ...h, ...y.formState }),
       id({ ...y, formState: { ...c, ...y.formState } })
     ),
     da = (y, x = {}) => {
       for (const k of y ? eo(y) : a.mount)
         (a.mount.delete(k),
           a.array.delete(k),
           x.keepValue || (Se(r, k), Se(s, k)),
           !x.keepError && Se(n.errors, k),
           !x.keepDirty && Se(n.dirtyFields, k),
           !x.keepTouched && Se(n.touchedFields, k),
           !x.keepIsValidating && Se(n.validatingFields, k),
           !t.shouldUnregister && !x.keepDefaultValue && Se(i, k));
       (g.state.next({ values: ge(s) }),
         g.state.next({ ...n, ...(x.keepDirty ? { isDirty: ne() } : {}) }),
         !x.keepIsValid && C());
     },
     sd = ({ disabled: y, name: x }) => {
       if ((Ft(y) && o.mount) || y || a.disabled.has(x)) {
         const b = a.disabled.has(x) !== !!y;
         (y ? a.disabled.add(x) : a.disabled.delete(x),
           b && o.mount && !o.action && C());
       }
     },
     fa = (y, x = {}) => {
       let k = z(r, y);
       const V = Ft(x.disabled) || Ft(t.disabled),
         b = !a.registerName.has(y) && k && k._f && !k._f.mount;
       return (
         ie(r, y, {
           ...(k || {}),
           _f: {
             ...(k && k._f ? k._f : { ref: { name: y } }),
             name: y,
             mount: !0,
             ...x,
           },
         }),
         a.mount.add(y),
         k && !b
           ? sd({ disabled: Ft(x.disabled) ? x.disabled : t.disabled, name: y })
           : R(y, !0, x.value),
         {
           ...(V ? { disabled: x.disabled || t.disabled } : {}),
           ...(t.progressive
             ? {
                 required: !!x.required,
                 min: ui(x.min),
                 max: ui(x.max),
                 minLength: ui(x.minLength),
                 maxLength: ui(x.maxLength),
                 pattern: ui(x.pattern),
               }
             : {}),
           name: y,
           onChange: Vn,
           onBlur: Vn,
           ref: (_) => {
             if (_) {
               (a.registerName.add(y),
                 fa(y, x),
                 a.registerName.delete(y),
                 (k = z(r, y)));
               const D =
                   (oe(_.value) &&
                     _.querySelectorAll &&
                     _.querySelectorAll("input,select,textarea")[0]) ||
                   _,
                 O = DE(D),
                 G = k._f.refs || [];
               if (O ? G.find((we) => we === D) : D === k._f.ref) return;
               (ie(r, y, {
                 _f: {
                   ...k._f,
                   ...(O
                     ? {
                         refs: [
                           ...G.filter(sl),
                           D,
                           ...(Array.isArray(z(i, y)) ? [{}] : []),
                         ],
                         ref: { type: D.type, name: y },
                       }
                     : { ref: D }),
                 },
               }),
                 R(y, !1, void 0, D));
             } else
               ((k = z(r, y, {})),
                 k._f && (k._f.mount = !1),
                 (t.shouldUnregister || x.shouldUnregister) &&
                   !(TE(a.array, y) && o.action) &&
                   a.unMount.add(y));
           },
         }
       );
     },
     ha = () =>
       t.shouldFocusError && !t.shouldUseNativeValidation && Di(r, bt, a.mount),
     _y = (y) => {
       Ft(y) &&
         (g.state.next({ disabled: y }),
         Di(
           r,
           (x, k) => {
             const V = z(r, k);
             V &&
               ((x.disabled = V._f.disabled || y),
               Array.isArray(V._f.refs) &&
                 V._f.refs.forEach((b) => {
                   b.disabled = V._f.disabled || y;
                 }));
           },
           0,
           !1,
         ));
     },
     od = (y, x) => async (k) => {
       let V;
       k && (k.preventDefault && k.preventDefault(), k.persist && k.persist());
       let b = ge(s);
       if ((g.state.next({ isSubmitting: !0 }), t.resolver)) {
         const { errors: _, values: D } = await F();
         (m(), (n.errors = _), (b = ge(D)));
       } else await W({ fields: r, eventType: ar.SUBMIT });
       if (a.disabled.size) for (const _ of a.disabled) Se(b, _);
       if ((Se(n.errors, Py), be(n.errors))) {
         g.state.next({ errors: {} });
         try {
           await y(b, k);
         } catch (_) {
           V = _;
         }
       } else (x && (await x({ ...n.errors }, k)), ha(), setTimeout(ha));
       if (
         (g.state.next({
           isSubmitted: !0,
           isSubmitting: !1,
           isSubmitSuccessful: be(n.errors) && !V,
           submitCount: n.submitCount + 1,
           errors: n.errors,
         }),
         V)
       )
         throw V;
     },
     My = (y, x = {}) => {
       z(r, y) &&
         (oe(x.defaultValue)
           ? Z(y, ge(z(i, y)))
           : (Z(y, x.defaultValue), ie(i, y, ge(x.defaultValue))),
         x.keepTouched || Se(n.touchedFields, y),
         x.keepDirty ||
           (Se(n.dirtyFields, y),
           (n.isDirty = x.defaultValue ? ne(y, ge(z(i, y))) : ne())),
         x.keepError || (Se(n.errors, y), f.isValid && C()),
         g.state.next({ ...n }));
     },
     ad = (y, x = {}) => {
       const k = y ? ge(y) : i,
         V = ge(k),
         b = be(y),
         _ = V;
       if ((x.keepDefaultValues || (i = k), !x.keepValues)) {
         if (x.keepDirtyValues) {
           const D = new Set([...a.mount, ...Object.keys(On(i, s))]);
           for (const O of Array.from(D)) {
             const G = z(n.dirtyFields, O),
               we = z(s, O),
               ft = z(_, O);
             G && !oe(we) ? ie(_, O, we) : !G && !oe(ft) && Z(O, ft);
           }
         } else {
           if (la && oe(y))
             for (const D of a.mount) {
               const O = z(r, D);
               if (O && O._f) {
                 const G = Array.isArray(O._f.refs) ? O._f.refs[0] : O._f.ref;
                 if (_o(G)) {
                   const we = G.closest("form");
                   if (we) {
                     we.reset();
                     break;
                   }
                 }
               }
             }
           if (x.keepFieldsRef) for (const D of a.mount) Z(D, z(_, D));
           else r = {};
         }
         if (t.shouldUnregister) {
           if (((s = x.keepDefaultValues ? ge(i) : {}), x.keepFieldsRef))
             for (const D of a.mount) ie(s, D, z(_, D));
         } else s = ge(_);
         (g.array.next({ values: { ..._ } }),
           g.state.next({ values: { ..._ } }));
       }
       ((a = {
         mount: x.keepDirtyValues ? a.mount : new Set(),
         unMount: new Set(),
         array: new Set(),
         registerName: new Set(),
         disabled: new Set(),
         watch: new Set(),
         watchAll: !1,
         focus: "",
       }),
         (o.mount =
           !f.isValid ||
           !!x.keepIsValid ||
           !!x.keepDirtyValues ||
           (!t.shouldUnregister && !be(_))),
         (o.watch = !!t.shouldUnregister),
         (o.keepIsValid = !!x.keepIsValid),
         (o.action = !1),
         x.keepErrors || (n.errors = {}),
         g.state.next({
           submitCount: x.keepSubmitCount ? n.submitCount : 0,
           isDirty: b
             ? !1
             : x.keepDirty
               ? n.isDirty
               : x.keepValues
                 ? ne()
                 : !!(x.keepDefaultValues && !Ot(y, i)),
           isSubmitted: x.keepIsSubmitted ? n.isSubmitted : !1,
           dirtyFields: b
             ? {}
             : x.keepDirtyValues
               ? x.keepDefaultValues && s
                 ? On(i, s)
                 : n.dirtyFields
               : x.keepDefaultValues && y
                 ? On(i, y)
                 : x.keepDirty
                   ? n.dirtyFields
                   : {},
           touchedFields: x.keepTouched ? n.touchedFields : {},
           errors: x.keepErrors ? n.errors : {},
           isSubmitSuccessful: x.keepIsSubmitSuccessful
             ? n.isSubmitSuccessful
             : !1,
           isSubmitting: !1,
           defaultValues: i,
         }));
     },
     ld = (y, x) => ad(vt(y) ? y(s) : y, { ...t.resetOptions, ...x }),
     zy = (y, x = {}) => {
       const k = z(r, y),
         V = k && k._f;
       if (V) {
         const b = V.refs ? V.refs[0] : V.ref;
         b.focus &&
           setTimeout(() => {
             (b.focus(), x.shouldSelect && vt(b.select) && b.select());
           });
       }
     },
     Fy = (y) => {
       n = { ...n, ...y };
     },
     ud = {
       control: {
         register: fa,
         unregister: da,
         getFieldState: Dn,
         handleSubmit: od,
         setError: hs,
         _subscribe: id,
         _runSchema: F,
         _updateIsValidating: m,
         _focusError: ha,
         _getWatch: De,
         _getDirty: ne,
         _setValid: C,
         _setFieldArray: v,
         _setDisabledField: sd,
         _setErrors: T,
         _getFieldArray: Q,
         _reset: ad,
         _resetDefaultValues: () =>
           vt(t.defaultValues) &&
           t.defaultValues().then((y) => {
             (ld(y, t.resetOptions), g.state.next({ isLoading: !1 }));
           }),
         _removeUnmounted: te,
         _disableForm: _y,
         _subjects: g,
         _proxyFormState: f,
         get _fields() {
           return r;
         },
         get _formValues() {
           return s;
         },
         get _state() {
           return o;
         },
         set _state(y) {
           o = y;
         },
         get _defaultValues() {
           return i;
         },
         get _names() {
           return a;
         },
         set _names(y) {
           a = y;
         },
         get _formState() {
           return n;
         },
         get _options() {
           return t;
         },
         set _options(y) {
           t = { ...t, ...y };
         },
       },
       subscribe: by,
       trigger: Rn,
       register: fa,
       handleSubmit: od,
       watch: Ly,
       setValue: Z,
       setValues: xe,
       getValues: _t,
       reset: ld,
       resetField: My,
       resetDefaultValues: (y, x = {}) => {
         if (((i = ge(y)), !x.keepDirty)) {
           const k = On(i, s);
           ((n.dirtyFields = k), (n.isDirty = !be(k)));
         }
         (x.keepIsValid || C(), g.state.next({ ...n, defaultValues: i }));
       },
       clearErrors: rd,
       unregister: da,
       setError: hs,
       setFocus: zy,
       getFieldState: Dn,
     };
   return { ...ud, formControl: ud };
 }
 function HE(e = {}) {
   const t = Me.useRef(void 0),
     n = Me.useRef(void 0),
     [r, i] = Me.useState(() => ({
       ...ge(Dy),
       isLoading: vt(e.defaultValues),
       errors: e.errors || {},
       disabled: e.disabled || !1,
       defaultValues: vt(e.defaultValues) ? void 0 : e.defaultValues,
     }));
   if (!t.current)
     if (e.formControl)
       ((t.current = { ...e.formControl, formState: r }),
         e.defaultValues &&
           !vt(e.defaultValues) &&
           e.formControl.reset(e.defaultValues, e.resetOptions));
     else {
       const { formControl: o, ...a } = WE(e);
       t.current = { ...a, formState: r };
     }
   const s = t.current.control;
   return (
     (s._options = e),
     jE(() => {
       const o = s._subscribe({
         formState: s._proxyFormState,
         callback: () =>
           i({ ...s._formState, defaultValues: s._defaultValues }),
         reRenderRoot: !0,
       });
       return (
         i((a) => ({ ...a, isReady: !0 })),
         (s._formState.isReady = !0),
         o
       );
     }, [s]),
     Me.useEffect(() => s._disableForm(e.disabled), [s, e.disabled]),
     Me.useEffect(() => {
       (e.mode && (s._options.mode = e.mode),
         e.reValidateMode && (s._options.reValidateMode = e.reValidateMode));
     }, [s, e.mode, e.reValidateMode]),
     Me.useEffect(() => {
       e.errors && (s._setErrors(e.errors), s._focusError());
     }, [s, e.errors]),
     Me.useEffect(() => {
       e.shouldUnregister && s._subjects.state.next({ values: s._getWatch() });
     }, [s, e.shouldUnregister]),
     Me.useEffect(() => {
       if (s._proxyFormState.isDirty) {
         const o = s._getDirty();
         o !== r.isDirty && s._subjects.state.next({ isDirty: o });
       }
     }, [s, r.isDirty]),
     Me.useEffect(() => {
       var o;
       e.values && !Ot(e.values, n.current)
         ? (s._reset(e.values, {
             keepFieldsRef: !0,
             ...s._options.resetOptions,
           }),
           (!((o = s._options.resetOptions) === null || o === void 0) &&
             o.keepIsValid) ||
             s._setValid(),
           (n.current = e.values),
           i((a) => ({ ...a })))
         : s._resetDefaultValues();
     }, [s, e.values]),
     Me.useEffect(() => {
       (s._state.mount || (s._setValid(), (s._state.mount = !0)),
         s._state.watch &&
           ((s._state.watch = !1), s._subjects.state.next({ ...s._formState })),
         s._removeUnmounted());
     }),
     (t.current.formState = Me.useMemo(() => AE(r, s), [s, r])),
     t.current
   );
 }
 const KE = (e) => typeof e == "string" && e.trim().length > 0,
   GE = (e) =>
     typeof e == "string" && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e.trim()),
   qE = (e) =>
     typeof e != "string"
       ? !1
       : e.replace(/[^\d]/g, "").length >= 8 &&
         /^[+\d][\d\s()\-.]{6,}$/.test(e.trim());
 function YE(e) {
   return {
     name: { required: e.required, validate: (t) => KE(t) || e.required },
     email: { required: e.required, validate: (t) => GE(t) || e.email },
     phone: { required: e.required, validate: (t) => qE(t) || e.phone },
     org: { required: e.required },
     role: { required: e.required },
     participants: { required: e.required },
     period: { required: e.required },
     consent: { required: e.consent },
   };
 }
 function QE() {
   if (typeof window == "undefined") return {};
   const e = new URLSearchParams(window.location.search),
     t = {};
   return (
     [
       "utm_source",
       "utm_medium",
       "utm_campaign",
       "utm_term",
       "utm_content",
     ].forEach((n) => {
       const r = e.get(n);
       r && (t[n] = r);
     }),
     {
       ...t,
       referrer: document.referrer || void 0,
       landingPath: window.location.pathname,
     }
   );
 }
 async function XE(e) {
   const t =
       typeof window != "undefined" &&
       window.location.pathname.startsWith("/") ? "pt" : "pt",
     n = {
       ...e,
       locale: t,
       privacyVersion: Pe.privacyVersion,
       attribution: QE(),
       submittedAt: new Date().toISOString(),
     };
   typeof window != "undefined" &&
     Array.isArray(window.dataLayer) &&
     window.dataLayer.push({
       event: "form_submit",
       form: "lead_pellegrinaggi",
     });
   const r = await fetch(Pe.leadApiUrl, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       Accept: "application/json",
     },
     body: JSON.stringify(n),
   });
   if (!r.ok) throw new Error(`Lead submit failed: ${r.status}`);
   return { ok: !0 };
 }
 const td =
   "w-full rounded-xl border-neutral-200 bg-white text-neutral-800 placeholder:text-neutral-400 shadow-sm transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 min-h-[48px]";
 function nd({ htmlFor: e, children: t, required: n }) {
   return d.jsxs("label", {
     htmlFor: e,
     className: "mb-1.5 block text-sm font-medium text-neutral-700",
     children: [
       t,
       n && d.jsx("span", { className: "ml-0.5 text-error", children: "*" }),
     ],
   });
 }
 function ca({ id: e, message: t }) {
   return t
     ? d.jsx("p", {
         id: e,
         className: "mt-1.5 text-sm text-error",
         role: "alert",
         children: t,
       })
     : null;
 }
 const _s = E.forwardRef(function (
     {
       id: t,
       label: n,
       error: r,
       required: i,
       type: s = "text",
       placeholder: o,
       className: a,
       ...l
     },
     u,
   ) {
     const c = `${t}-error`;
     return d.jsxs("div", {
       className: a,
       children: [
         d.jsx(nd, { htmlFor: t, required: i, children: n }),
         d.jsx("input", {
           id: t,
           ref: u,
           type: s,
           placeholder: o,
           "aria-invalid": r ? "true" : void 0,
           "aria-describedby": r ? c : void 0,
           className: Ne(
             td,
             r && "border-error focus:border-error focus:ring-error/30",
           ),
           ...l,
         }),
         d.jsx(ca, { id: c, message: r }),
       ],
     });
   }),
   Ms = E.forwardRef(function (
     {
       id: t,
       label: n,
       error: r,
       required: i,
       placeholder: s,
       options: o = [],
       className: a,
       ...l
     },
     u,
   ) {
     const c = `${t}-error`;
     return d.jsxs("div", {
       className: a,
       children: [
         d.jsx(nd, { htmlFor: t, required: i, children: n }),
         d.jsxs("select", {
           id: t,
           ref: u,
           defaultValue: "",
           "aria-invalid": r ? "true" : void 0,
           "aria-describedby": r ? c : void 0,
           className: Ne(
             td,
             r && "border-error focus:border-error focus:ring-error/30",
           ),
           ...l,
           children: [
             d.jsx("option", { value: "", disabled: !0, children: s }),
             o.map((f) => d.jsx("option", { value: f, children: f }, f)),
           ],
         }),
         d.jsx(ca, { id: c, message: r }),
       ],
     });
   }),
   ZE = E.forwardRef(function (
     {
       id: t,
       label: n,
       error: r,
       required: i,
       placeholder: s,
       rows: o = 4,
       className: a,
       ...l
     },
     u,
   ) {
     const c = `${t}-error`;
     return d.jsxs("div", {
       className: a,
       children: [
         d.jsx(nd, { htmlFor: t, required: i, children: n }),
         d.jsx("textarea", {
           id: t,
           ref: u,
           rows: o,
           placeholder: s,
           "aria-invalid": r ? "true" : void 0,
           "aria-describedby": r ? c : void 0,
           className: Ne(
             td,
             "min-h-[120px] py-3",
             r && "border-error focus:border-error focus:ring-error/30",
           ),
           ...l,
         }),
         d.jsx(ca, { id: c, message: r }),
       ],
     });
   }),
   cp = E.forwardRef(function (
     { id: t, error: n, children: r, className: i, ...s },
     o,
   ) {
     const a = `${t}-error`;
     return d.jsxs("div", {
       className: i,
       children: [
         d.jsxs("label", {
           htmlFor: t,
           className:
             "flex cursor-pointer items-start gap-3 text-sm text-neutral-600",
           children: [
             d.jsx("input", {
               id: t,
               ref: o,
               type: "checkbox",
               "aria-invalid": n ? "true" : void 0,
               "aria-describedby": n ? a : void 0,
               className:
                 "mt-0.5 h-5 w-5 shrink-0 rounded border-neutral-300 text-teal-500 focus:ring-teal-500/40",
               ...s,
             }),
             d.jsx("span", { children: r }),
           ],
         }),
         d.jsx(ca, { id: a, message: n }),
       ],
     });
   });
 function JE() {
   var h, g, w, S, C, m, p, v;
   const e = rt(),
     t = e.form,
     n = e.finalCta,
     r = YE(t.validation),
     [, i] = gc(),
     {
       register: s,
       handleSubmit: o,
       reset: a,
       formState: { errors: l },
     } = HE({ mode: "onBlur" }),
     [u, c] = E.useState("idle"),
     f = async (P) => {
       if (P.company_url) {
         i("/grazie");
         return;
       }
       c("submitting");
       try {
         const { company_url: T, ...A } = P;
         (await XE(A), a(), i("/grazie"));
       } catch {
         c("error");
       }
     };
   return d.jsxs("section", {
     id: "contatti",
     className: "relative overflow-hidden bg-ink",
     "aria-labelledby": "form-title",
     children: [
       d.jsx("div", {
         className: "absolute inset-0 opacity-30",
         style: {
           backgroundImage:
             "radial-gradient(60% 60% at 80% 0%, #016b68 0%, transparent 70%)",
         },
         "aria-hidden": "true",
       }),
       d.jsxs("div", {
         className:
           "container-wt relative z-10 grid gap-12 py-[clamp(4rem,8vw,7rem)] lg:grid-cols-2 lg:gap-16",
         children: [
           d.jsxs(tr, {
             className: "lg:pt-6",
             children: [
               d.jsx("span", {
                 className: "eyebrow !text-gold-400",
                 children: n.eyebrow,
               }),
               d.jsx("h2", {
                 id: "form-title",
                 className: "mt-3 text-fluid-h1 font-semibold text-white",
                 children: n.title,
               }),
               d.jsx("p", {
                 className: "mt-4 max-w-md text-fluid-lead text-white/80",
                 children: n.body,
               }),
               d.jsx("ul", {
                 className: "mt-8 space-y-3",
                 children: e.hero.trust.map((P) =>
                   d.jsxs(
                     "li",
                     {
                       className: "flex items-center gap-3 text-white/90",
                       children: [
                         d.jsx("span", {
                           className:
                             "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-400 text-ink",
                           children: d.jsx(Ve, {
                             name: "check",
                             className: "h-4 w-4",
                             strokeWidth: 2.6,
                           }),
                         }),
                         P,
                       ],
                     },
                     P,
                   ),
                 ),
               }),
               d.jsxs("div", {
                 className: "mt-8 flex flex-col gap-3 text-sm text-white/70",
                 children: [
                   d.jsxs("a", {
                     href: `mailto:${Pe.contacts.email}`,
                     className: "flex items-center gap-3 hover:text-white",
                     children: [
                       d.jsx(Ve, {
                         name: "mail",
                         className: "h-5 w-5 shrink-0 text-teal-300",
                       }),
                       Pe.contacts.email,
                     ],
                   }),
                   d.jsxs("a", {
                     href: `tel:${Pe.contacts.phoneHref}`,
                     className: "flex items-center gap-3 hover:text-white",
                     children: [
                       d.jsx(Ve, {
                         name: "phone",
                         className: "h-5 w-5 shrink-0 text-teal-300",
                       }),
                       Pe.contacts.phoneDisplay,
                     ],
                   }),
                 ],
               }),
             ],
           }),
           d.jsxs(tr, {
             className: "rounded-3xl bg-white p-6 shadow-card sm:p-8",
             children: [
               d.jsxs("div", {
                 className: "mb-6",
                 children: [
                   d.jsx("span", { className: "eyebrow", children: t.eyebrow }),
                   d.jsx("h3", {
                     className: "mt-2 text-fluid-h3 font-semibold text-ink",
                     children: t.title,
                   }),
                   d.jsx("p", {
                     className: "mt-2 text-sm text-neutral-600",
                     children: t.subtitle,
                   }),
                 ],
               }),
               d.jsxs("form", {
                 onSubmit: o(f),
                 noValidate: !0,
                 className: "space-y-4",
                 children: [
                   d.jsx("input", {
                     type: "text",
                     tabIndex: -1,
                     autoComplete: "off",
                     "aria-hidden": "true",
                     className: "hidden",
                     ...s("company_url"),
                   }),
                   d.jsx(_s, {
                     id: "name",
                     label: t.fields.name.label,
                     placeholder: t.fields.name.placeholder,
                     required: !0,
                     autoComplete: "name",
                     error: (h = l.name) == null ? void 0 : h.message,
                     ...s("name", r.name),
                   }),
                   d.jsxs("div", {
                     className: "grid gap-4 sm:grid-cols-2",
                     children: [
                       d.jsx(_s, {
                         id: "email",
                         type: "email",
                         label: t.fields.email.label,
                         placeholder: t.fields.email.placeholder,
                         required: !0,
                         autoComplete: "email",
                         error: (g = l.email) == null ? void 0 : g.message,
                         ...s("email", r.email),
                       }),
                       d.jsx(_s, {
                         id: "phone",
                         type: "tel",
                         label: t.fields.phone.label,
                         placeholder: t.fields.phone.placeholder,
                         required: !0,
                         autoComplete: "tel",
                         error: (w = l.phone) == null ? void 0 : w.message,
                         ...s("phone", r.phone),
                       }),
                     ],
                   }),
                   d.jsx(_s, {
                     id: "org",
                     label: t.fields.org.label,
                     placeholder: t.fields.org.placeholder,
                     required: !0,
                     autoComplete: "organization",
                     error: (S = l.org) == null ? void 0 : S.message,
                     ...s("org", r.org),
                   }),
                   d.jsxs("div", {
                     className: "grid gap-4 sm:grid-cols-2",
                     children: [
                       d.jsx(Ms, {
                         id: "role",
                         label: t.fields.role.label,
                         placeholder: t.fields.role.placeholder,
                         options: t.fields.role.options,
                         required: !0,
                         error: (C = l.role) == null ? void 0 : C.message,
                         ...s("role", r.role),
                       }),
                       d.jsx(Ms, {
                         id: "participants",
                         label: t.fields.participants.label,
                         placeholder: t.fields.participants.placeholder,
                         options: t.fields.participants.options,
                         required: !0,
                         error:
                           (m = l.participants) == null ? void 0 : m.message,
                         ...s("participants", r.participants),
                       }),
                     ],
                   }),
                   d.jsxs("div", {
                     className: "grid gap-4 sm:grid-cols-2",
                     children: [
                       d.jsx(Ms, {
                         id: "period",
                         label: t.fields.period.label,
                         placeholder: t.fields.period.placeholder,
                         options: t.fields.period.options,
                         required: !0,
                         error: (p = l.period) == null ? void 0 : p.message,
                         ...s("period", r.period),
                       }),
                       d.jsx(Ms, {
                         id: "hotel",
                         label: t.fields.hotel.label,
                         placeholder: t.fields.hotel.placeholder,
                         options: t.fields.hotel.options,
                         ...s("hotel"),
                       }),
                     ],
                   }),
                   d.jsx(ZE, {
                     id: "message",
                     label: t.fields.message.label,
                     placeholder: t.fields.message.placeholder,
                     ...s("message"),
                   }),
                   d.jsxs(cp, {
                     id: "consent",
                     error: (v = l.consent) == null ? void 0 : v.message,
                     ...s("consent", r.consent),
                     children: [
                       t.consent.label,
                       " ",
                       d.jsx(Jl, {
                         href: "/privacy",
                         className: "font-medium text-teal-600 underline",
                         children: t.consent.linkLabel,
                       }),
                       " ",
                       t.consent.suffix,
                     ],
                   }),
                   d.jsx(cp, {
                     id: "marketing",
                     ...s("marketing"),
                     children: t.marketingConsent,
                   }),
                   u === "error" &&
                     d.jsxs("div", {
                       role: "alert",
                       className:
                         "rounded-xl border border-error/30 bg-error/5 p-4 text-sm text-error",
                       children: [
                         d.jsx("strong", {
                           className: "block font-semibold",
                           children: t.error.title,
                         }),
                         t.error.body,
                       ],
                     }),
                   d.jsx($r, {
                     as: "button",
                     type: "submit",
                     variant: "primary",
                     size: "lg",
                     disabled: u === "submitting",
                     className: "w-full",
                     children:
                       u === "submitting"
                         ? d.jsxs(d.Fragment, {
                             children: [
                               d.jsxs("svg", {
                                 className: "h-5 w-5 animate-spin",
                                 viewBox: "0 0 24 24",
                                 fill: "none",
                                 "aria-hidden": "true",
                                 children: [
                                   d.jsx("circle", {
                                     cx: "12",
                                     cy: "12",
                                     r: "9",
                                     stroke: "currentColor",
                                     strokeWidth: "3",
                                     className: "opacity-25",
                                   }),
                                   d.jsx("path", {
                                     d: "M21 12a9 9 0 00-9-9",
                                     stroke: "currentColor",
                                     strokeWidth: "3",
                                     strokeLinecap: "round",
                                   }),
                                 ],
                               }),
                               t.sending,
                             ],
                           })
                         : d.jsxs(d.Fragment, {
                             children: [
                               t.submit,
                               d.jsx(Ve, {
                                 name: "arrowRight",
                                 className: "h-5 w-5",
                               }),
                             ],
                           }),
                   }),
                 ],
               }),
             ],
           }),
         ],
       }),
     ],
   });
 }
 function dp() {
   const e = rt();
   return (
     E.useEffect(() => {
       ((document.title = e.meta.title),
         (document.documentElement.lang = e.meta.lang));
       const t = document.querySelector('meta[name="description"]');
       t && t.setAttribute("content", e.meta.description);
     }, [e]),
     d.jsxs(d.Fragment, {
       children: [
         d.jsx("a", {
           href: "#contenuto",
           className:
             "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-teal-600 focus:px-4 focus:py-2 focus:text-white",
           children: e.a11y.skipToContent,
         }),
         d.jsx(aE, {}),
         d.jsxs("main", {
           children: [
             d.jsx(cE, {}),
             d.jsx(pE, {}),
             d.jsx(mE, {}),
             d.jsx(gE, {}),
             d.jsx(vE, {}),
             d.jsx(xE, {}),
             d.jsx(wE, {}),
             d.jsx(kE, {}),
             d.jsx(wtGoogleReviews, {}),
             d.jsx(JE, {}),
           ],
         }),
         d.jsx(lE, {}),
         d.jsx(uE, {}),
       ],
     })
   );
 }
 const eC = [
   {
     code: "it",
     path: "/it",
     flag: "🇮🇹",
     label: "Italiano",
     sub: "Consulta il sito in italiano",
   },
   {
     code: "pt",
     path: "/br",
     flag: "🇧🇷",
     label: "Português (Brasil)",
     sub: "Acesse o site em português",
   },
 ];
 function tC() {
   var r;
   const [, e] = gc();
   E.useEffect(() => {
     ((document.title = "Wonder Travel — Roma & Assisi"),
       (document.documentElement.lang = "it"));
   }, []);
   const t =
       typeof navigator != "undefined" &&
       (r = navigator.language) != null &&
       r.toLowerCase().startsWith("pt")
         ? "pt"
         : "it",
     n = (i) => {
       try {
         localStorage.setItem("wt_locale", i.code);
       } catch {}
       e(i.path);
     };
   return d.jsxs("div", {
     className:
       "relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink p-4",
     children: [
       d.jsxs("div", {
         className: "absolute inset-0",
         style: { backgroundImage: je.hero.gradient },
         children: [
           d.jsxs("picture", {
             children: [
               d.jsx("source", {
                 srcSet:
                   "/images/hero-vaticano-768.webp 768w, /images/hero-vaticano-1280.webp 1280w, /images/hero-vaticano.webp 1920w",
                 sizes: "100vw",
                 type: "image/webp",
               }),
               d.jsx("img", {
                 src: je.hero.fallback || je.hero.src,
                 alt: "",
                 "aria-hidden": "true",
                 className: "h-full w-full object-cover",
                 onError: (i) => {
                   i.currentTarget.style.display = "none";
                 },
               }),
             ],
           }),
           d.jsx("div", { className: "absolute inset-0 bg-ink/80" }),
         ],
       }),
       d.jsxs(J.div, {
         initial: { opacity: 0, y: 16, scale: 0.98 },
         animate: { opacity: 1, y: 0, scale: 1 },
         transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
         role: "dialog",
         "aria-modal": "true",
         "aria-label": "Scegli la lingua / Escolha o idioma",
         className:
           "relative z-10 w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-card sm:p-10",
         children: [
           d.jsx("img", {
             src: "/logos/wonder-travel.webp",
             alt: "Wonder Travel",
             width: "120",
             height: "72",
             className: "mx-auto h-16 w-auto",
           }),
           d.jsxs("h1", {
             className: "mt-6 font-display text-2xl font-semibold text-ink",
             children: [
               "Scegli la lingua",
               d.jsx("span", {
                 className: "mt-1 block text-lg font-normal text-neutral-500",
                 children: "Escolha o idioma",
               }),
             ],
           }),
           d.jsx("div", {
             className: "mt-8 flex flex-col gap-3",
             children: eC.map((i) =>
               d.jsxs(
                 "button",
                 {
                   type: "button",
                   onClick: () => n(i),
                   className: `group flex items-center gap-4 rounded-2xl border-2 p-4 text-left transition-all ${t === i.code ? "border-teal-500 bg-teal-50/60" : "border-neutral-200 hover:border-teal-400 hover:bg-teal-50/40"}`,
                   children: [
                     d.jsx("span", {
                       className: "text-3xl",
                       "aria-hidden": "true",
                       children: i.flag,
                     }),
                     d.jsxs("span", {
                       className: "flex-1",
                       children: [
                         d.jsx("span", {
                           className: "block font-semibold text-ink",
                           children: i.label,
                         }),
                         d.jsx("span", {
                           className: "block text-sm text-neutral-500",
                           children: i.sub,
                         }),
                       ],
                     }),
                     d.jsx(Ve, {
                       name: "arrowRight",
                       className:
                         "h-5 w-5 text-neutral-300 transition-colors group-hover:text-teal-500",
                     }),
                   ],
                 },
                 i.code,
               ),
             ),
           }),
         ],
       }),
     ],
   });
 }
 const nC = E.lazy(() =>
     ss(() => import("./PrivacyPage-c20dd31d.js"), __vite__mapDeps([0, 1])),
   ),
   rC = E.lazy(() =>
     ss(() => import("./CookiePage-c2ba7d44.js"), __vite__mapDeps([2, 1])),
   ),
   iC = E.lazy(() => ss(() => import("./ThankYouPage-6c47d44f.js"), [])),
   sC = E.lazy(() => ss(() => import("./CookieBanner-4580ae50.js"), []));
 function fp({ locale: e, base: t }) {
   return d.jsx(JT, {
     locale: e,
     children: d.jsxs(_g, {
       base: t,
       children: [
         d.jsxs(H1, {
           children: [
             d.jsx(oi, { path: "/", component: dp }),
             d.jsx(oi, {
               path: "/privacy",
               children: d.jsx(E.Suspense, {
                 fallback: null,
                 children: d.jsx(nC, {}),
               }),
             }),
             d.jsx(oi, {
               path: "/cookie",
               children: d.jsx(E.Suspense, {
                 fallback: null,
                 children: d.jsx(rC, {}),
               }),
             }),
             d.jsx(oi, {
               path: "/grazie",
               children: d.jsx(E.Suspense, {
                 fallback: null,
                 children: d.jsx(iC, {}),
               }),
             }),
             d.jsx(oi, { component: dp }),
           ],
         }),
         d.jsx(E.Suspense, { fallback: null, children: d.jsx(sC, {}) }),
       ],
     }),
   });
 }
 function oC() {
   const [e] = gc(),
     t = e === "/br" || e.startsWith("/br/"),
     n = e === "/it" || e.startsWith("/it/");
   return d.jsx(rw, {
     reducedMotion: "user",
     children: d.jsx(fp, { locale: "pt", base: "" }),
   });
 }
 ol.createRoot(document.getElementById("root")).render(
   d.jsx(Me.StrictMode, { children: d.jsx(oC, {}) }),
 );
 function wtGoogleReviews() {
   var pt = true;
   var l = pt
     ? {
         eyebrow: "Avalia\u00e7\u00f5es",
         title: "O que dizem de n\u00f3s",
         sub: "Do perfil Google da Wonder Travel \u00b7 4,8 de 5 com 25 avalia\u00e7\u00f5es",
         starsLabel: "5 estrelas de 5",
         translated: "Traduzido do italiano",
         cta: "Leia todas as avalia\u00e7\u00f5es no Google",
         reviews: [
           {
             a: "Giorgia D\u2019Auria",
             t: "A experi\u00eancia foi absolutamente extraordin\u00e1ria! \u2026 organiza\u00e7\u00e3o impec\u00e1vel, traslados pontuais, guias locais competentes e sempre prontos a contar curiosidades \u00fanicas. \u2026 Recomendo vivamente a Wonder Travel a quem quiser viver experi\u00eancias inesquec\u00edveis.",
           },
           {
             a: "Paola Guzzo",
             t: "\u00abOrganiza\u00e7\u00e3o top\u00bb. Viajo com eles h\u00e1 anos, em viagens culturais e peregrina\u00e7\u00f5es. Os roteiros s\u00e3o sempre equilibrados entre visitas guiadas e momentos livres. \u2026 Uma ag\u00eancia s\u00e9ria, confi\u00e1vel e com excelente custo-benef\u00edcio.",
           },
           {
             a: "Gilberto C-G",
             t: "Ajudaram-nos na organiza\u00e7\u00e3o de uma peregrina\u00e7\u00e3o universit\u00e1ria. \u2026 a viagem foi maravilhosa. Encontraram para n\u00f3s \u00f3timos guias locais em cada etapa. Costumo evitar ag\u00eancias de turismo, mas \u00e0 Wondertravel volto sempre com prazer.",
           },
         ],
       }
     : {
         eyebrow: "Recensioni",
         title: "Dicono di noi",
         sub: "Dal profilo Google di Wonder Travel \u00b7 4,8 su 5 con 25 recensioni",
         starsLabel: "5 stelle su 5",
         translated: "",
         cta: "Leggi tutte le recensioni su Google",
         reviews: [
           {
             a: "Giorgia D\u2019Auria",
             t: "L\u2019esperienza \u00e8 stata assolutamente straordinaria! \u2026 organizzazione impeccabile, trasferimenti puntuali, guide locali competenti e sempre pronte a raccontare curiosit\u00e0 uniche. \u2026 Consiglio vivamente Wonder Travel a chiunque voglia vivere esperienze indimenticabili.",
           },
           {
             a: "Paola Guzzo",
             t: "\u00abOrganizzazione top\u00bb. Viaggio con loro da anni per viaggi culturali e per pellegrinaggi. Gli itinerari sono sempre bilanciati tra visite guidate e momenti di libert\u00e0. \u2026 Un\u2019agenzia seria, affidabile e con un rapporto qualit\u00e0-prezzo eccellente.",
           },
           {
             a: "Gilberto C-G",
             t: "Ci hanno aiutato nell\u2019organizzazione di un pellegrinaggio universitario. \u2026 il viaggio \u00e8 stato meraviglioso. Hanno trovato per noi ottime guide locali in ogni tappa. Di solito sto alla larga dalle agenzie turistiche, ma da Wondertravel torno sempre volentieri.",
           },
         ],
       };
   return d.jsx("section", {
     id: "recensioni",
     "aria-labelledby": "recensioni-title",
     className: "bg-cream",
     children: d.jsxs("div", {
       className: "container-wt py-[clamp(4rem,8vw,7rem)]",
       children: [
         d.jsxs("div", {
           className: "mx-auto max-w-2xl text-center",
           children: [
             d.jsx("span", { className: "eyebrow", children: l.eyebrow }),
             d.jsx("h2", {
               id: "recensioni-title",
               className: "mt-3 text-fluid-h1 font-semibold text-ink",
               children: l.title,
             }),
             d.jsxs("p", {
               className:
                 "mt-4 flex flex-col items-center justify-center gap-4 text-fluid-lead text-neutral-600",
               children: [
                 d.jsx("span", {
                   "aria-hidden": "true",
                   style: {
                     color: "#f59e0b",
                     letterSpacing: "3px",
                     fontSize: "1.4rem",
                     lineHeight: 1,
                   },
                   children: "\u2605\u2605\u2605\u2605\u2605",
                 }),
                 l.sub,
               ],
             }),
           ],
         }),
         d.jsx("div", {
           className: "mt-10 grid gap-4 md:grid-cols-3",
           style: { gap: "1.5rem" },
           children: l.reviews.map(function (r, i) {
             return d.jsxs(
               "div",
               {
                 className:
                   "flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-card",
                 children: [
                   d.jsx("div", {
                     "aria-label": l.starsLabel,
                     role: "img",
                     children: d.jsx("span", {
                       "aria-hidden": "true",
                       style: {
                         color: "#f59e0b",
                         letterSpacing: "2px",
                         fontSize: "1.05rem",
                       },
                       children: "\u2605\u2605\u2605\u2605\u2605",
                     }),
                   }),
                   d.jsx("p", {
                     className: "mt-3 text-sm leading-relaxed text-neutral-600",
                     style: { flex: 1 },
                     children: r.t,
                   }),
                   d.jsxs("div", {
                     className: "mt-4 flex items-center justify-between",
                     children: [
                       d.jsx("span", {
                         className: "text-sm font-semibold text-ink",
                         children: r.a,
                       }),
                       d.jsx("span", {
                         className: "text-xs text-neutral-500",
                         children: "Google",
                       }),
                     ],
                   }),
                   l.translated
                     ? d.jsx("div", {
                         className: "mt-2 text-xs text-neutral-500",
                         children: l.translated,
                       })
                     : null,
                 ],
               },
               i,
             );
           }),
         }),
       ],
     }),
   });
 }

export{Fg as A,$r as B,Ve as I,Jl as L,Sy as P,eE as a,wy as b,cC as e,je as i,d as j,J as m,E as r,Pe as s,rt as u};
