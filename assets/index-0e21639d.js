function Gd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Xd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ju={exports:{}},ti={},Zu={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ar=Symbol.for("react.element"),Kd=Symbol.for("react.portal"),Jd=Symbol.for("react.fragment"),Zd=Symbol.for("react.strict_mode"),qd=Symbol.for("react.profiler"),ep=Symbol.for("react.provider"),tp=Symbol.for("react.context"),np=Symbol.for("react.forward_ref"),rp=Symbol.for("react.suspense"),op=Symbol.for("react.memo"),ip=Symbol.for("react.lazy"),_a=Symbol.iterator;function lp(e){return e===null||typeof e!="object"?null:(e=_a&&e[_a]||e["@@iterator"],typeof e=="function"?e:null)}var qu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ec=Object.assign,tc={};function Dn(e,t,n){this.props=e,this.context=t,this.refs=tc,this.updater=n||qu}Dn.prototype.isReactComponent={};Dn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Dn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nc(){}nc.prototype=Dn.prototype;function ys(e,t,n){this.props=e,this.context=t,this.refs=tc,this.updater=n||qu}var vs=ys.prototype=new nc;vs.constructor=ys;ec(vs,Dn.prototype);vs.isPureReactComponent=!0;var Pa=Array.isArray,rc=Object.prototype.hasOwnProperty,xs={current:null},oc={key:!0,ref:!0,__self:!0,__source:!0};function ic(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)rc.call(t,r)&&!oc.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Ar,type:e,key:i,ref:l,props:o,_owner:xs.current}}function sp(e,t){return{$$typeof:Ar,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ws(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ar}function ap(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ja=/\/+/g;function Vi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ap(""+e.key):t.toString(36)}function mo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ar:case Kd:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Vi(l,0):r,Pa(o)?(n="",e!=null&&(n=e.replace(ja,"$&/")+"/"),mo(o,t,n,"",function(c){return c})):o!=null&&(ws(o)&&(o=sp(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ja,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Pa(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+Vi(i,s);l+=mo(i,t,n,a,o)}else if(a=lp(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+Vi(i,s++),l+=mo(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Qr(e,t,n){if(e==null)return e;var r=[],o=0;return mo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function up(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},ho={transition:null},cp={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:ho,ReactCurrentOwner:xs};O.Children={map:Qr,forEach:function(e,t,n){Qr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Qr(e,function(){t++}),t},toArray:function(e){return Qr(e,function(t){return t})||[]},only:function(e){if(!ws(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Dn;O.Fragment=Jd;O.Profiler=qd;O.PureComponent=ys;O.StrictMode=Zd;O.Suspense=rp;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cp;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ec({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=xs.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)rc.call(t,a)&&!oc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Ar,type:e.type,key:o,ref:i,props:r,_owner:l}};O.createContext=function(e){return e={$$typeof:tp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ep,_context:e},e.Consumer=e};O.createElement=ic;O.createFactory=function(e){var t=ic.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:np,render:e}};O.isValidElement=ws;O.lazy=function(e){return{$$typeof:ip,_payload:{_status:-1,_result:e},_init:up}};O.memo=function(e,t){return{$$typeof:op,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=ho.transition;ho.transition={};try{e()}finally{ho.transition=t}};O.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};O.useCallback=function(e,t){return Ee.current.useCallback(e,t)};O.useContext=function(e){return Ee.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};O.useEffect=function(e,t){return Ee.current.useEffect(e,t)};O.useId=function(){return Ee.current.useId()};O.useImperativeHandle=function(e,t,n){return Ee.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return Ee.current.useMemo(e,t)};O.useReducer=function(e,t,n){return Ee.current.useReducer(e,t,n)};O.useRef=function(e){return Ee.current.useRef(e)};O.useState=function(e){return Ee.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return Ee.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return Ee.current.useTransition()};O.version="18.2.0";Zu.exports=O;var M=Zu.exports;const lc=Xd(M),Ta=Gd({__proto__:null,default:lc},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fp=M,dp=Symbol.for("react.element"),pp=Symbol.for("react.fragment"),mp=Object.prototype.hasOwnProperty,hp=fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gp={key:!0,ref:!0,__self:!0,__source:!0};function sc(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)mp.call(t,r)&&!gp.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:dp,type:e,key:i,ref:l,props:o,_owner:hp.current}}ti.Fragment=pp;ti.jsx=sc;ti.jsxs=sc;Ju.exports=ti;var g=Ju.exports,vl={},ac={exports:{}},$e={},uc={exports:{}},cc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,z){var I=_.length;_.push(z);e:for(;0<I;){var V=I-1>>>1,K=_[V];if(0<o(K,z))_[V]=z,_[I]=K,I=V;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var z=_[0],I=_.pop();if(I!==z){_[0]=I;e:for(var V=0,K=_.length,Wr=K>>>1;V<Wr;){var Wt=2*(V+1)-1,Bi=_[Wt],Ht=Wt+1,Hr=_[Ht];if(0>o(Bi,I))Ht<K&&0>o(Hr,Bi)?(_[V]=Hr,_[Ht]=I,V=Ht):(_[V]=Bi,_[Wt]=I,V=Wt);else if(Ht<K&&0>o(Hr,I))_[V]=Hr,_[Ht]=I,V=Ht;else break e}}return z}function o(_,z){var I=_.sortIndex-z.sortIndex;return I!==0?I:_.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],c=[],p=1,m=null,h=3,w=!1,x=!1,y=!1,j=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(_){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=_)r(c),z.sortIndex=z.expirationTime,t(a,z);else break;z=n(c)}}function v(_){if(y=!1,d(_),!x)if(n(a)!==null)x=!0,xt(C);else{var z=n(c);z!==null&&un(v,z.startTime-_)}}function C(_,z){x=!1,y&&(y=!1,f(T),T=-1),w=!0;var I=h;try{for(d(z),m=n(a);m!==null&&(!(m.expirationTime>z)||_&&!we());){var V=m.callback;if(typeof V=="function"){m.callback=null,h=m.priorityLevel;var K=V(m.expirationTime<=z);z=e.unstable_now(),typeof K=="function"?m.callback=K:m===n(a)&&r(a),d(z)}else r(a);m=n(a)}if(m!==null)var Wr=!0;else{var Wt=n(c);Wt!==null&&un(v,Wt.startTime-z),Wr=!1}return Wr}finally{m=null,h=I,w=!1}}var N=!1,k=null,T=-1,H=5,L=-1;function we(){return!(e.unstable_now()-L<H)}function F(){if(k!==null){var _=e.unstable_now();L=_;var z=!0;try{z=k(!0,_)}finally{z?vt():(N=!1,k=null)}}else N=!1}var vt;if(typeof u=="function")vt=function(){u(F)};else if(typeof MessageChannel<"u"){var Vt=new MessageChannel,Vr=Vt.port2;Vt.port1.onmessage=F,vt=function(){Vr.postMessage(null)}}else vt=function(){j(F,0)};function xt(_){k=_,N||(N=!0,vt())}function un(_,z){T=j(function(){_(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){x||w||(x=!0,xt(C))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(_){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var I=h;h=z;try{return _()}finally{h=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,z){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var I=h;h=_;try{return z()}finally{h=I}},e.unstable_scheduleCallback=function(_,z,I){var V=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?V+I:V):I=V,_){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=I+K,_={id:p++,callback:z,priorityLevel:_,startTime:I,expirationTime:K,sortIndex:-1},I>V?(_.sortIndex=I,t(c,_),n(a)===null&&_===n(c)&&(y?(f(T),T=-1):y=!0,un(v,I-V))):(_.sortIndex=K,t(a,_),x||w||(x=!0,xt(C))),_},e.unstable_shouldYield=we,e.unstable_wrapCallback=function(_){var z=h;return function(){var I=h;h=z;try{return _.apply(this,arguments)}finally{h=I}}}})(cc);uc.exports=cc;var yp=uc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fc=M,Oe=yp;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dc=new Set,hr={};function sn(e,t){zn(e,t),zn(e+"Capture",t)}function zn(e,t){for(hr[e]=t,e=0;e<t.length;e++)dc.add(t[e])}var pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xl=Object.prototype.hasOwnProperty,vp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,za={},Ia={};function xp(e){return xl.call(Ia,e)?!0:xl.call(za,e)?!1:vp.test(e)?Ia[e]=!0:(za[e]=!0,!1)}function wp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sp(e,t,n,r){if(t===null||typeof t>"u"||wp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ce(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new Ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new Ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new Ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new Ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new Ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new Ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ss=/[\-:]([a-z])/g;function ks(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ss,ks);me[t]=new Ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ss,ks);me[t]=new Ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ss,ks);me[t]=new Ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Es(e,t,n,r){var o=me.hasOwnProperty(t)?me[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Sp(t,n,o,r)&&(n=null),r||o===null?xp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var yt=fc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yr=Symbol.for("react.element"),fn=Symbol.for("react.portal"),dn=Symbol.for("react.fragment"),Cs=Symbol.for("react.strict_mode"),wl=Symbol.for("react.profiler"),pc=Symbol.for("react.provider"),mc=Symbol.for("react.context"),Ns=Symbol.for("react.forward_ref"),Sl=Symbol.for("react.suspense"),kl=Symbol.for("react.suspense_list"),_s=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),hc=Symbol.for("react.offscreen"),Ra=Symbol.iterator;function Wn(e){return e===null||typeof e!="object"?null:(e=Ra&&e[Ra]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Wi;function nr(e){if(Wi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wi=t&&t[1]||""}return`
`+Wi+e}var Hi=!1;function Qi(e,t){if(!e||Hi)return"";Hi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Hi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?nr(e):""}function kp(e){switch(e.tag){case 5:return nr(e.type);case 16:return nr("Lazy");case 13:return nr("Suspense");case 19:return nr("SuspenseList");case 0:case 2:case 15:return e=Qi(e.type,!1),e;case 11:return e=Qi(e.type.render,!1),e;case 1:return e=Qi(e.type,!0),e;default:return""}}function El(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case dn:return"Fragment";case fn:return"Portal";case wl:return"Profiler";case Cs:return"StrictMode";case Sl:return"Suspense";case kl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case mc:return(e.displayName||"Context")+".Consumer";case pc:return(e._context.displayName||"Context")+".Provider";case Ns:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _s:return t=e.displayName||null,t!==null?t:El(e.type)||"Memo";case Et:t=e._payload,e=e._init;try{return El(e(t))}catch{}}return null}function Ep(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return El(t);case 8:return t===Cs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cp(e){var t=gc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gr(e){e._valueTracker||(e._valueTracker=Cp(e))}function yc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=gc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function To(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Cl(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function La(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vc(e,t){t=t.checked,t!=null&&Es(e,"checked",t,!1)}function Nl(e,t){vc(e,t);var n=Dt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_l(e,t.type,n):t.hasOwnProperty("defaultValue")&&_l(e,t.type,Dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ma(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function _l(e,t,n){(t!=="number"||To(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var rr=Array.isArray;function En(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Dt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Pl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Oa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(rr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Dt(n)}}function xc(e,t){var n=Dt(t.value),r=Dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $a(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xr,Sc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xr=Xr||document.createElement("div"),Xr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function gr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var lr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Np=["Webkit","ms","Moz","O"];Object.keys(lr).forEach(function(e){Np.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),lr[t]=lr[e]})});function kc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||lr.hasOwnProperty(e)&&lr[e]?(""+t).trim():t+"px"}function Ec(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=kc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var _p=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tl(e,t){if(t){if(_p[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function zl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Il=null;function Ps(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rl=null,Cn=null,Nn=null;function Aa(e){if(e=br(e)){if(typeof Rl!="function")throw Error(S(280));var t=e.stateNode;t&&(t=li(t),Rl(e.stateNode,e.type,t))}}function Cc(e){Cn?Nn?Nn.push(e):Nn=[e]:Cn=e}function Nc(){if(Cn){var e=Cn,t=Nn;if(Nn=Cn=null,Aa(e),t)for(e=0;e<t.length;e++)Aa(t[e])}}function _c(e,t){return e(t)}function Pc(){}var Yi=!1;function jc(e,t,n){if(Yi)return e(t,n);Yi=!0;try{return _c(e,t,n)}finally{Yi=!1,(Cn!==null||Nn!==null)&&(Pc(),Nc())}}function yr(e,t){var n=e.stateNode;if(n===null)return null;var r=li(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Ll=!1;if(pt)try{var Hn={};Object.defineProperty(Hn,"passive",{get:function(){Ll=!0}}),window.addEventListener("test",Hn,Hn),window.removeEventListener("test",Hn,Hn)}catch{Ll=!1}function Pp(e,t,n,r,o,i,l,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var sr=!1,zo=null,Io=!1,Ml=null,jp={onError:function(e){sr=!0,zo=e}};function Tp(e,t,n,r,o,i,l,s,a){sr=!1,zo=null,Pp.apply(jp,arguments)}function zp(e,t,n,r,o,i,l,s,a){if(Tp.apply(this,arguments),sr){if(sr){var c=zo;sr=!1,zo=null}else throw Error(S(198));Io||(Io=!0,Ml=c)}}function an(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Tc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Da(e){if(an(e)!==e)throw Error(S(188))}function Ip(e){var t=e.alternate;if(!t){if(t=an(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Da(o),e;if(i===r)return Da(o),t;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function zc(e){return e=Ip(e),e!==null?Ic(e):null}function Ic(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ic(e);if(t!==null)return t;e=e.sibling}return null}var Rc=Oe.unstable_scheduleCallback,Fa=Oe.unstable_cancelCallback,Rp=Oe.unstable_shouldYield,Lp=Oe.unstable_requestPaint,te=Oe.unstable_now,Mp=Oe.unstable_getCurrentPriorityLevel,js=Oe.unstable_ImmediatePriority,Lc=Oe.unstable_UserBlockingPriority,Ro=Oe.unstable_NormalPriority,Op=Oe.unstable_LowPriority,Mc=Oe.unstable_IdlePriority,ni=null,it=null;function $p(e){if(it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(ni,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:Fp,Ap=Math.log,Dp=Math.LN2;function Fp(e){return e>>>=0,e===0?32:31-(Ap(e)/Dp|0)|0}var Kr=64,Jr=4194304;function or(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Lo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=or(s):(i&=l,i!==0&&(r=or(i)))}else l=n&~o,l!==0?r=or(l):i!==0&&(r=or(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Je(t),o=1<<n,r|=e[n],t&=~o;return r}function bp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Up(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Je(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=bp(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function Ol(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Oc(){var e=Kr;return Kr<<=1,!(Kr&4194240)&&(Kr=64),e}function Gi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Dr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function Bp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Je(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ts(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var b=0;function $c(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ac,zs,Dc,Fc,bc,$l=!1,Zr=[],zt=null,It=null,Rt=null,vr=new Map,xr=new Map,Nt=[],Vp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ba(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":vr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xr.delete(t.pointerId)}}function Qn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=br(t),t!==null&&zs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Wp(e,t,n,r,o){switch(t){case"focusin":return zt=Qn(zt,e,t,n,r,o),!0;case"dragenter":return It=Qn(It,e,t,n,r,o),!0;case"mouseover":return Rt=Qn(Rt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return vr.set(i,Qn(vr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,xr.set(i,Qn(xr.get(i)||null,e,t,n,r,o)),!0}return!1}function Uc(e){var t=Gt(e.target);if(t!==null){var n=an(t);if(n!==null){if(t=n.tag,t===13){if(t=Tc(n),t!==null){e.blockedOn=t,bc(e.priority,function(){Dc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function go(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Al(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Il=r,n.target.dispatchEvent(r),Il=null}else return t=br(n),t!==null&&zs(t),e.blockedOn=n,!1;t.shift()}return!0}function Ua(e,t,n){go(e)&&n.delete(t)}function Hp(){$l=!1,zt!==null&&go(zt)&&(zt=null),It!==null&&go(It)&&(It=null),Rt!==null&&go(Rt)&&(Rt=null),vr.forEach(Ua),xr.forEach(Ua)}function Yn(e,t){e.blockedOn===t&&(e.blockedOn=null,$l||($l=!0,Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority,Hp)))}function wr(e){function t(o){return Yn(o,e)}if(0<Zr.length){Yn(Zr[0],e);for(var n=1;n<Zr.length;n++){var r=Zr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(zt!==null&&Yn(zt,e),It!==null&&Yn(It,e),Rt!==null&&Yn(Rt,e),vr.forEach(t),xr.forEach(t),n=0;n<Nt.length;n++)r=Nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Nt.length&&(n=Nt[0],n.blockedOn===null);)Uc(n),n.blockedOn===null&&Nt.shift()}var _n=yt.ReactCurrentBatchConfig,Mo=!0;function Qp(e,t,n,r){var o=b,i=_n.transition;_n.transition=null;try{b=1,Is(e,t,n,r)}finally{b=o,_n.transition=i}}function Yp(e,t,n,r){var o=b,i=_n.transition;_n.transition=null;try{b=4,Is(e,t,n,r)}finally{b=o,_n.transition=i}}function Is(e,t,n,r){if(Mo){var o=Al(e,t,n,r);if(o===null)ol(e,t,r,Oo,n),ba(e,r);else if(Wp(o,e,t,n,r))r.stopPropagation();else if(ba(e,r),t&4&&-1<Vp.indexOf(e)){for(;o!==null;){var i=br(o);if(i!==null&&Ac(i),i=Al(e,t,n,r),i===null&&ol(e,t,r,Oo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ol(e,t,r,null,n)}}var Oo=null;function Al(e,t,n,r){if(Oo=null,e=Ps(r),e=Gt(e),e!==null)if(t=an(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Tc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Oo=e,null}function Bc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mp()){case js:return 1;case Lc:return 4;case Ro:case Op:return 16;case Mc:return 536870912;default:return 16}default:return 16}}var Pt=null,Rs=null,yo=null;function Vc(){if(yo)return yo;var e,t=Rs,n=t.length,r,o="value"in Pt?Pt.value:Pt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return yo=o.slice(e,1<r?1-r:void 0)}function vo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qr(){return!0}function Ba(){return!1}function Ae(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?qr:Ba,this.isPropagationStopped=Ba,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qr)},persist:function(){},isPersistent:qr}),t}var Fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ls=Ae(Fn),Fr=q({},Fn,{view:0,detail:0}),Gp=Ae(Fr),Xi,Ki,Gn,ri=q({},Fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ms,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gn&&(Gn&&e.type==="mousemove"?(Xi=e.screenX-Gn.screenX,Ki=e.screenY-Gn.screenY):Ki=Xi=0,Gn=e),Xi)},movementY:function(e){return"movementY"in e?e.movementY:Ki}}),Va=Ae(ri),Xp=q({},ri,{dataTransfer:0}),Kp=Ae(Xp),Jp=q({},Fr,{relatedTarget:0}),Ji=Ae(Jp),Zp=q({},Fn,{animationName:0,elapsedTime:0,pseudoElement:0}),qp=Ae(Zp),e0=q({},Fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),t0=Ae(e0),n0=q({},Fn,{data:0}),Wa=Ae(n0),r0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},o0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=i0[e])?!!t[e]:!1}function Ms(){return l0}var s0=q({},Fr,{key:function(e){if(e.key){var t=r0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?o0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ms,charCode:function(e){return e.type==="keypress"?vo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),a0=Ae(s0),u0=q({},ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ha=Ae(u0),c0=q({},Fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ms}),f0=Ae(c0),d0=q({},Fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),p0=Ae(d0),m0=q({},ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),h0=Ae(m0),g0=[9,13,27,32],Os=pt&&"CompositionEvent"in window,ar=null;pt&&"documentMode"in document&&(ar=document.documentMode);var y0=pt&&"TextEvent"in window&&!ar,Wc=pt&&(!Os||ar&&8<ar&&11>=ar),Qa=String.fromCharCode(32),Ya=!1;function Hc(e,t){switch(e){case"keyup":return g0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pn=!1;function v0(e,t){switch(e){case"compositionend":return Qc(t);case"keypress":return t.which!==32?null:(Ya=!0,Qa);case"textInput":return e=t.data,e===Qa&&Ya?null:e;default:return null}}function x0(e,t){if(pn)return e==="compositionend"||!Os&&Hc(e,t)?(e=Vc(),yo=Rs=Pt=null,pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wc&&t.locale!=="ko"?null:t.data;default:return null}}var w0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ga(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!w0[e.type]:t==="textarea"}function Yc(e,t,n,r){Cc(r),t=$o(t,"onChange"),0<t.length&&(n=new Ls("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ur=null,Sr=null;function S0(e){of(e,0)}function oi(e){var t=gn(e);if(yc(t))return e}function k0(e,t){if(e==="change")return t}var Gc=!1;if(pt){var Zi;if(pt){var qi="oninput"in document;if(!qi){var Xa=document.createElement("div");Xa.setAttribute("oninput","return;"),qi=typeof Xa.oninput=="function"}Zi=qi}else Zi=!1;Gc=Zi&&(!document.documentMode||9<document.documentMode)}function Ka(){ur&&(ur.detachEvent("onpropertychange",Xc),Sr=ur=null)}function Xc(e){if(e.propertyName==="value"&&oi(Sr)){var t=[];Yc(t,Sr,e,Ps(e)),jc(S0,t)}}function E0(e,t,n){e==="focusin"?(Ka(),ur=t,Sr=n,ur.attachEvent("onpropertychange",Xc)):e==="focusout"&&Ka()}function C0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oi(Sr)}function N0(e,t){if(e==="click")return oi(t)}function _0(e,t){if(e==="input"||e==="change")return oi(t)}function P0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qe=typeof Object.is=="function"?Object.is:P0;function kr(e,t){if(qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!xl.call(t,o)||!qe(e[o],t[o]))return!1}return!0}function Ja(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Za(e,t){var n=Ja(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ja(n)}}function Kc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Kc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jc(){for(var e=window,t=To();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=To(e.document)}return t}function $s(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function j0(e){var t=Jc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Kc(n.ownerDocument.documentElement,n)){if(r!==null&&$s(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Za(n,i);var l=Za(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var T0=pt&&"documentMode"in document&&11>=document.documentMode,mn=null,Dl=null,cr=null,Fl=!1;function qa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fl||mn==null||mn!==To(r)||(r=mn,"selectionStart"in r&&$s(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),cr&&kr(cr,r)||(cr=r,r=$o(Dl,"onSelect"),0<r.length&&(t=new Ls("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mn)))}function eo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hn={animationend:eo("Animation","AnimationEnd"),animationiteration:eo("Animation","AnimationIteration"),animationstart:eo("Animation","AnimationStart"),transitionend:eo("Transition","TransitionEnd")},el={},Zc={};pt&&(Zc=document.createElement("div").style,"AnimationEvent"in window||(delete hn.animationend.animation,delete hn.animationiteration.animation,delete hn.animationstart.animation),"TransitionEvent"in window||delete hn.transitionend.transition);function ii(e){if(el[e])return el[e];if(!hn[e])return e;var t=hn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zc)return el[e]=t[n];return e}var qc=ii("animationend"),ef=ii("animationiteration"),tf=ii("animationstart"),nf=ii("transitionend"),rf=new Map,eu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bt(e,t){rf.set(e,t),sn(t,[e])}for(var tl=0;tl<eu.length;tl++){var nl=eu[tl],z0=nl.toLowerCase(),I0=nl[0].toUpperCase()+nl.slice(1);bt(z0,"on"+I0)}bt(qc,"onAnimationEnd");bt(ef,"onAnimationIteration");bt(tf,"onAnimationStart");bt("dblclick","onDoubleClick");bt("focusin","onFocus");bt("focusout","onBlur");bt(nf,"onTransitionEnd");zn("onMouseEnter",["mouseout","mouseover"]);zn("onMouseLeave",["mouseout","mouseover"]);zn("onPointerEnter",["pointerout","pointerover"]);zn("onPointerLeave",["pointerout","pointerover"]);sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));sn("onBeforeInput",["compositionend","keypress","textInput","paste"]);sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ir));function tu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,zp(r,t,void 0,e),e.currentTarget=null}function of(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;tu(o,s,c),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,c=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;tu(o,s,c),i=a}}}if(Io)throw e=Ml,Io=!1,Ml=null,e}function Y(e,t){var n=t[Wl];n===void 0&&(n=t[Wl]=new Set);var r=e+"__bubble";n.has(r)||(lf(t,e,2,!1),n.add(r))}function rl(e,t,n){var r=0;t&&(r|=4),lf(n,e,r,t)}var to="_reactListening"+Math.random().toString(36).slice(2);function Er(e){if(!e[to]){e[to]=!0,dc.forEach(function(n){n!=="selectionchange"&&(R0.has(n)||rl(n,!1,e),rl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[to]||(t[to]=!0,rl("selectionchange",!1,t))}}function lf(e,t,n,r){switch(Bc(t)){case 1:var o=Qp;break;case 4:o=Yp;break;default:o=Is}n=o.bind(null,t,n,e),o=void 0,!Ll||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ol(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=Gt(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}jc(function(){var c=i,p=Ps(n),m=[];e:{var h=rf.get(e);if(h!==void 0){var w=Ls,x=e;switch(e){case"keypress":if(vo(n)===0)break e;case"keydown":case"keyup":w=a0;break;case"focusin":x="focus",w=Ji;break;case"focusout":x="blur",w=Ji;break;case"beforeblur":case"afterblur":w=Ji;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Va;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Kp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=f0;break;case qc:case ef:case tf:w=qp;break;case nf:w=p0;break;case"scroll":w=Gp;break;case"wheel":w=h0;break;case"copy":case"cut":case"paste":w=t0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Ha}var y=(t&4)!==0,j=!y&&e==="scroll",f=y?h!==null?h+"Capture":null:h;y=[];for(var u=c,d;u!==null;){d=u;var v=d.stateNode;if(d.tag===5&&v!==null&&(d=v,f!==null&&(v=yr(u,f),v!=null&&y.push(Cr(u,v,d)))),j)break;u=u.return}0<y.length&&(h=new w(h,x,null,n,p),m.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==Il&&(x=n.relatedTarget||n.fromElement)&&(Gt(x)||x[mt]))break e;if((w||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,w?(x=n.relatedTarget||n.toElement,w=c,x=x?Gt(x):null,x!==null&&(j=an(x),x!==j||x.tag!==5&&x.tag!==6)&&(x=null)):(w=null,x=c),w!==x)){if(y=Va,v="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(y=Ha,v="onPointerLeave",f="onPointerEnter",u="pointer"),j=w==null?h:gn(w),d=x==null?h:gn(x),h=new y(v,u+"leave",w,n,p),h.target=j,h.relatedTarget=d,v=null,Gt(p)===c&&(y=new y(f,u+"enter",x,n,p),y.target=d,y.relatedTarget=j,v=y),j=v,w&&x)t:{for(y=w,f=x,u=0,d=y;d;d=cn(d))u++;for(d=0,v=f;v;v=cn(v))d++;for(;0<u-d;)y=cn(y),u--;for(;0<d-u;)f=cn(f),d--;for(;u--;){if(y===f||f!==null&&y===f.alternate)break t;y=cn(y),f=cn(f)}y=null}else y=null;w!==null&&nu(m,h,w,y,!1),x!==null&&j!==null&&nu(m,j,x,y,!0)}}e:{if(h=c?gn(c):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var C=k0;else if(Ga(h))if(Gc)C=_0;else{C=C0;var N=E0}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=N0);if(C&&(C=C(e,c))){Yc(m,C,n,p);break e}N&&N(e,h,c),e==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&_l(h,"number",h.value)}switch(N=c?gn(c):window,e){case"focusin":(Ga(N)||N.contentEditable==="true")&&(mn=N,Dl=c,cr=null);break;case"focusout":cr=Dl=mn=null;break;case"mousedown":Fl=!0;break;case"contextmenu":case"mouseup":case"dragend":Fl=!1,qa(m,n,p);break;case"selectionchange":if(T0)break;case"keydown":case"keyup":qa(m,n,p)}var k;if(Os)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else pn?Hc(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Wc&&n.locale!=="ko"&&(pn||T!=="onCompositionStart"?T==="onCompositionEnd"&&pn&&(k=Vc()):(Pt=p,Rs="value"in Pt?Pt.value:Pt.textContent,pn=!0)),N=$o(c,T),0<N.length&&(T=new Wa(T,e,null,n,p),m.push({event:T,listeners:N}),k?T.data=k:(k=Qc(n),k!==null&&(T.data=k)))),(k=y0?v0(e,n):x0(e,n))&&(c=$o(c,"onBeforeInput"),0<c.length&&(p=new Wa("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:c}),p.data=k))}of(m,t)})}function Cr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $o(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=yr(e,n),i!=null&&r.unshift(Cr(e,i,o)),i=yr(e,t),i!=null&&r.push(Cr(e,i,o))),e=e.return}return r}function cn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function nu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,o?(a=yr(n,i),a!=null&&l.unshift(Cr(n,a,s))):o||(a=yr(n,i),a!=null&&l.push(Cr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var L0=/\r\n?/g,M0=/\u0000|\uFFFD/g;function ru(e){return(typeof e=="string"?e:""+e).replace(L0,`
`).replace(M0,"")}function no(e,t,n){if(t=ru(t),ru(e)!==t&&n)throw Error(S(425))}function Ao(){}var bl=null,Ul=null;function Bl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vl=typeof setTimeout=="function"?setTimeout:void 0,O0=typeof clearTimeout=="function"?clearTimeout:void 0,ou=typeof Promise=="function"?Promise:void 0,$0=typeof queueMicrotask=="function"?queueMicrotask:typeof ou<"u"?function(e){return ou.resolve(null).then(e).catch(A0)}:Vl;function A0(e){setTimeout(function(){throw e})}function il(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),wr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);wr(t)}function Lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function iu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var bn=Math.random().toString(36).slice(2),ot="__reactFiber$"+bn,Nr="__reactProps$"+bn,mt="__reactContainer$"+bn,Wl="__reactEvents$"+bn,D0="__reactListeners$"+bn,F0="__reactHandles$"+bn;function Gt(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mt]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=iu(e);e!==null;){if(n=e[ot])return n;e=iu(e)}return t}e=n,n=e.parentNode}return null}function br(e){return e=e[ot]||e[mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function li(e){return e[Nr]||null}var Hl=[],yn=-1;function Ut(e){return{current:e}}function G(e){0>yn||(e.current=Hl[yn],Hl[yn]=null,yn--)}function W(e,t){yn++,Hl[yn]=e.current,e.current=t}var Ft={},xe=Ut(Ft),Pe=Ut(!1),tn=Ft;function In(e,t){var n=e.type.contextTypes;if(!n)return Ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function je(e){return e=e.childContextTypes,e!=null}function Do(){G(Pe),G(xe)}function lu(e,t,n){if(xe.current!==Ft)throw Error(S(168));W(xe,t),W(Pe,n)}function sf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(S(108,Ep(e)||"Unknown",o));return q({},n,r)}function Fo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ft,tn=xe.current,W(xe,e),W(Pe,Pe.current),!0}function su(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=sf(e,t,tn),r.__reactInternalMemoizedMergedChildContext=e,G(Pe),G(xe),W(xe,e)):G(Pe),W(Pe,n)}var ut=null,si=!1,ll=!1;function af(e){ut===null?ut=[e]:ut.push(e)}function b0(e){si=!0,af(e)}function Bt(){if(!ll&&ut!==null){ll=!0;var e=0,t=b;try{var n=ut;for(b=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ut=null,si=!1}catch(o){throw ut!==null&&(ut=ut.slice(e+1)),Rc(js,Bt),o}finally{b=t,ll=!1}}return null}var vn=[],xn=0,bo=null,Uo=0,Fe=[],be=0,nn=null,ct=1,ft="";function Qt(e,t){vn[xn++]=Uo,vn[xn++]=bo,bo=e,Uo=t}function uf(e,t,n){Fe[be++]=ct,Fe[be++]=ft,Fe[be++]=nn,nn=e;var r=ct;e=ft;var o=32-Je(r)-1;r&=~(1<<o),n+=1;var i=32-Je(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,ct=1<<32-Je(t)+o|n<<o|r,ft=i+e}else ct=1<<i|n<<o|r,ft=e}function As(e){e.return!==null&&(Qt(e,1),uf(e,1,0))}function Ds(e){for(;e===bo;)bo=vn[--xn],vn[xn]=null,Uo=vn[--xn],vn[xn]=null;for(;e===nn;)nn=Fe[--be],Fe[be]=null,ft=Fe[--be],Fe[be]=null,ct=Fe[--be],Fe[be]=null}var Le=null,Re=null,X=!1,Ke=null;function cf(e,t){var n=Ue(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function au(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Le=e,Re=Lt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Le=e,Re=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=nn!==null?{id:ct,overflow:ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ue(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Le=e,Re=null,!0):!1;default:return!1}}function Ql(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Yl(e){if(X){var t=Re;if(t){var n=t;if(!au(e,t)){if(Ql(e))throw Error(S(418));t=Lt(n.nextSibling);var r=Le;t&&au(e,t)?cf(r,n):(e.flags=e.flags&-4097|2,X=!1,Le=e)}}else{if(Ql(e))throw Error(S(418));e.flags=e.flags&-4097|2,X=!1,Le=e}}}function uu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function ro(e){if(e!==Le)return!1;if(!X)return uu(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Bl(e.type,e.memoizedProps)),t&&(t=Re)){if(Ql(e))throw ff(),Error(S(418));for(;t;)cf(e,t),t=Lt(t.nextSibling)}if(uu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Re=Lt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Re=null}}else Re=Le?Lt(e.stateNode.nextSibling):null;return!0}function ff(){for(var e=Re;e;)e=Lt(e.nextSibling)}function Rn(){Re=Le=null,X=!1}function Fs(e){Ke===null?Ke=[e]:Ke.push(e)}var U0=yt.ReactCurrentBatchConfig;function Ge(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Bo=Ut(null),Vo=null,wn=null,bs=null;function Us(){bs=wn=Vo=null}function Bs(e){var t=Bo.current;G(Bo),e._currentValue=t}function Gl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pn(e,t){Vo=e,bs=wn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(_e=!0),e.firstContext=null)}function Ve(e){var t=e._currentValue;if(bs!==e)if(e={context:e,memoizedValue:t,next:null},wn===null){if(Vo===null)throw Error(S(308));wn=e,Vo.dependencies={lanes:0,firstContext:e}}else wn=wn.next=e;return t}var Xt=null;function Vs(e){Xt===null?Xt=[e]:Xt.push(e)}function df(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Vs(t)):(n.next=o.next,o.next=n),t.interleaved=n,ht(e,r)}function ht(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ct=!1;function Ws(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function dt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,ht(e,n)}return o=r.interleaved,o===null?(t.next=t,Vs(r)):(t.next=o.next,o.next=t),r.interleaved=t,ht(e,n)}function xo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ts(e,n)}}function cu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wo(e,t,n,r){var o=e.updateQueue;Ct=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,c=a.next;a.next=null,l===null?i=c:l.next=c,l=a;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==l&&(s===null?p.firstBaseUpdate=c:s.next=c,p.lastBaseUpdate=a))}if(i!==null){var m=o.baseState;l=0,p=c=a=null,s=i;do{var h=s.lane,w=s.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,y=s;switch(h=t,w=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){m=x.call(w,m,h);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,h=typeof x=="function"?x.call(w,m,h):x,h==null)break e;m=q({},m,h);break e;case 2:Ct=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[s]:h.push(s))}else w={eventTime:w,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(c=p=w,a=m):p=p.next=w,l|=h;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;h=s,s=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(p===null&&(a=m),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);on|=l,e.lanes=l,e.memoizedState=m}}function fu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var mf=new fc.Component().refs;function Xl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ai={isMounted:function(e){return(e=e._reactInternals)?an(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),o=$t(e),i=dt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Mt(e,i,o),t!==null&&(Ze(t,e,o,r),xo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),o=$t(e),i=dt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Mt(e,i,o),t!==null&&(Ze(t,e,o,r),xo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=$t(e),o=dt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Mt(e,o,r),t!==null&&(Ze(t,e,r,n),xo(t,e,r))}};function du(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!kr(n,r)||!kr(o,i):!0}function hf(e,t,n){var r=!1,o=Ft,i=t.contextType;return typeof i=="object"&&i!==null?i=Ve(i):(o=je(t)?tn:xe.current,r=t.contextTypes,i=(r=r!=null)?In(e,o):Ft),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ai,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function pu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ai.enqueueReplaceState(t,t.state,null)}function Kl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=mf,Ws(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ve(i):(i=je(t)?tn:xe.current,o.context=In(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Xl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ai.enqueueReplaceState(o,o.state,null),Wo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Xn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;s===mf&&(s=o.refs={}),l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function oo(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mu(e){var t=e._init;return t(e._payload)}function gf(e){function t(f,u){if(e){var d=f.deletions;d===null?(f.deletions=[u],f.flags|=16):d.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function o(f,u){return f=At(f,u),f.index=0,f.sibling=null,f}function i(f,u,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<u?(f.flags|=2,u):d):(f.flags|=2,u)):(f.flags|=1048576,u)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,u,d,v){return u===null||u.tag!==6?(u=pl(d,f.mode,v),u.return=f,u):(u=o(u,d),u.return=f,u)}function a(f,u,d,v){var C=d.type;return C===dn?p(f,u,d.props.children,v,d.key):u!==null&&(u.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Et&&mu(C)===u.type)?(v=o(u,d.props),v.ref=Xn(f,u,d),v.return=f,v):(v=No(d.type,d.key,d.props,null,f.mode,v),v.ref=Xn(f,u,d),v.return=f,v)}function c(f,u,d,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=ml(d,f.mode,v),u.return=f,u):(u=o(u,d.children||[]),u.return=f,u)}function p(f,u,d,v,C){return u===null||u.tag!==7?(u=en(d,f.mode,v,C),u.return=f,u):(u=o(u,d),u.return=f,u)}function m(f,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=pl(""+u,f.mode,d),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Yr:return d=No(u.type,u.key,u.props,null,f.mode,d),d.ref=Xn(f,null,u),d.return=f,d;case fn:return u=ml(u,f.mode,d),u.return=f,u;case Et:var v=u._init;return m(f,v(u._payload),d)}if(rr(u)||Wn(u))return u=en(u,f.mode,d,null),u.return=f,u;oo(f,u)}return null}function h(f,u,d,v){var C=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return C!==null?null:s(f,u,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Yr:return d.key===C?a(f,u,d,v):null;case fn:return d.key===C?c(f,u,d,v):null;case Et:return C=d._init,h(f,u,C(d._payload),v)}if(rr(d)||Wn(d))return C!==null?null:p(f,u,d,v,null);oo(f,d)}return null}function w(f,u,d,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(d)||null,s(u,f,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Yr:return f=f.get(v.key===null?d:v.key)||null,a(u,f,v,C);case fn:return f=f.get(v.key===null?d:v.key)||null,c(u,f,v,C);case Et:var N=v._init;return w(f,u,d,N(v._payload),C)}if(rr(v)||Wn(v))return f=f.get(d)||null,p(u,f,v,C,null);oo(u,v)}return null}function x(f,u,d,v){for(var C=null,N=null,k=u,T=u=0,H=null;k!==null&&T<d.length;T++){k.index>T?(H=k,k=null):H=k.sibling;var L=h(f,k,d[T],v);if(L===null){k===null&&(k=H);break}e&&k&&L.alternate===null&&t(f,k),u=i(L,u,T),N===null?C=L:N.sibling=L,N=L,k=H}if(T===d.length)return n(f,k),X&&Qt(f,T),C;if(k===null){for(;T<d.length;T++)k=m(f,d[T],v),k!==null&&(u=i(k,u,T),N===null?C=k:N.sibling=k,N=k);return X&&Qt(f,T),C}for(k=r(f,k);T<d.length;T++)H=w(k,f,T,d[T],v),H!==null&&(e&&H.alternate!==null&&k.delete(H.key===null?T:H.key),u=i(H,u,T),N===null?C=H:N.sibling=H,N=H);return e&&k.forEach(function(we){return t(f,we)}),X&&Qt(f,T),C}function y(f,u,d,v){var C=Wn(d);if(typeof C!="function")throw Error(S(150));if(d=C.call(d),d==null)throw Error(S(151));for(var N=C=null,k=u,T=u=0,H=null,L=d.next();k!==null&&!L.done;T++,L=d.next()){k.index>T?(H=k,k=null):H=k.sibling;var we=h(f,k,L.value,v);if(we===null){k===null&&(k=H);break}e&&k&&we.alternate===null&&t(f,k),u=i(we,u,T),N===null?C=we:N.sibling=we,N=we,k=H}if(L.done)return n(f,k),X&&Qt(f,T),C;if(k===null){for(;!L.done;T++,L=d.next())L=m(f,L.value,v),L!==null&&(u=i(L,u,T),N===null?C=L:N.sibling=L,N=L);return X&&Qt(f,T),C}for(k=r(f,k);!L.done;T++,L=d.next())L=w(k,f,T,L.value,v),L!==null&&(e&&L.alternate!==null&&k.delete(L.key===null?T:L.key),u=i(L,u,T),N===null?C=L:N.sibling=L,N=L);return e&&k.forEach(function(F){return t(f,F)}),X&&Qt(f,T),C}function j(f,u,d,v){if(typeof d=="object"&&d!==null&&d.type===dn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Yr:e:{for(var C=d.key,N=u;N!==null;){if(N.key===C){if(C=d.type,C===dn){if(N.tag===7){n(f,N.sibling),u=o(N,d.props.children),u.return=f,f=u;break e}}else if(N.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Et&&mu(C)===N.type){n(f,N.sibling),u=o(N,d.props),u.ref=Xn(f,N,d),u.return=f,f=u;break e}n(f,N);break}else t(f,N);N=N.sibling}d.type===dn?(u=en(d.props.children,f.mode,v,d.key),u.return=f,f=u):(v=No(d.type,d.key,d.props,null,f.mode,v),v.ref=Xn(f,u,d),v.return=f,f=v)}return l(f);case fn:e:{for(N=d.key;u!==null;){if(u.key===N)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(f,u.sibling),u=o(u,d.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=ml(d,f.mode,v),u.return=f,f=u}return l(f);case Et:return N=d._init,j(f,u,N(d._payload),v)}if(rr(d))return x(f,u,d,v);if(Wn(d))return y(f,u,d,v);oo(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(n(f,u.sibling),u=o(u,d),u.return=f,f=u):(n(f,u),u=pl(d,f.mode,v),u.return=f,f=u),l(f)):n(f,u)}return j}var Ln=gf(!0),yf=gf(!1),Ur={},lt=Ut(Ur),_r=Ut(Ur),Pr=Ut(Ur);function Kt(e){if(e===Ur)throw Error(S(174));return e}function Hs(e,t){switch(W(Pr,t),W(_r,e),W(lt,Ur),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:jl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=jl(t,e)}G(lt),W(lt,t)}function Mn(){G(lt),G(_r),G(Pr)}function vf(e){Kt(Pr.current);var t=Kt(lt.current),n=jl(t,e.type);t!==n&&(W(_r,e),W(lt,n))}function Qs(e){_r.current===e&&(G(lt),G(_r))}var J=Ut(0);function Ho(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sl=[];function Ys(){for(var e=0;e<sl.length;e++)sl[e]._workInProgressVersionPrimary=null;sl.length=0}var wo=yt.ReactCurrentDispatcher,al=yt.ReactCurrentBatchConfig,rn=0,Z=null,ie=null,ae=null,Qo=!1,fr=!1,jr=0,B0=0;function he(){throw Error(S(321))}function Gs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qe(e[n],t[n]))return!1;return!0}function Xs(e,t,n,r,o,i){if(rn=i,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wo.current=e===null||e.memoizedState===null?Q0:Y0,e=n(r,o),fr){i=0;do{if(fr=!1,jr=0,25<=i)throw Error(S(301));i+=1,ae=ie=null,t.updateQueue=null,wo.current=G0,e=n(r,o)}while(fr)}if(wo.current=Yo,t=ie!==null&&ie.next!==null,rn=0,ae=ie=Z=null,Qo=!1,t)throw Error(S(300));return e}function Ks(){var e=jr!==0;return jr=0,e}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?Z.memoizedState=ae=e:ae=ae.next=e,ae}function We(){if(ie===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=ae===null?Z.memoizedState:ae.next;if(t!==null)ae=t,ie=e;else{if(e===null)throw Error(S(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},ae===null?Z.memoizedState=ae=e:ae=ae.next=e}return ae}function Tr(e,t){return typeof t=="function"?t(e):t}function ul(e){var t=We(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=ie,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,c=i;do{var p=c.lane;if((rn&p)===p)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=m,l=r):a=a.next=m,Z.lanes|=p,on|=p}c=c.next}while(c!==null&&c!==i);a===null?l=r:a.next=s,qe(r,t.memoizedState)||(_e=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Z.lanes|=i,on|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function cl(e){var t=We(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);qe(i,t.memoizedState)||(_e=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function xf(){}function wf(e,t){var n=Z,r=We(),o=t(),i=!qe(r.memoizedState,o);if(i&&(r.memoizedState=o,_e=!0),r=r.queue,Js(Ef.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ae!==null&&ae.memoizedState.tag&1){if(n.flags|=2048,zr(9,kf.bind(null,n,r,o,t),void 0,null),ue===null)throw Error(S(349));rn&30||Sf(n,t,o)}return o}function Sf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function kf(e,t,n,r){t.value=n,t.getSnapshot=r,Cf(t)&&Nf(e)}function Ef(e,t,n){return n(function(){Cf(t)&&Nf(e)})}function Cf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qe(e,n)}catch{return!0}}function Nf(e){var t=ht(e,1);t!==null&&Ze(t,e,1,-1)}function hu(e){var t=tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Tr,lastRenderedState:e},t.queue=e,e=e.dispatch=H0.bind(null,Z,e),[t.memoizedState,e]}function zr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function _f(){return We().memoizedState}function So(e,t,n,r){var o=tt();Z.flags|=e,o.memoizedState=zr(1|t,n,void 0,r===void 0?null:r)}function ui(e,t,n,r){var o=We();r=r===void 0?null:r;var i=void 0;if(ie!==null){var l=ie.memoizedState;if(i=l.destroy,r!==null&&Gs(r,l.deps)){o.memoizedState=zr(t,n,i,r);return}}Z.flags|=e,o.memoizedState=zr(1|t,n,i,r)}function gu(e,t){return So(8390656,8,e,t)}function Js(e,t){return ui(2048,8,e,t)}function Pf(e,t){return ui(4,2,e,t)}function jf(e,t){return ui(4,4,e,t)}function Tf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zf(e,t,n){return n=n!=null?n.concat([e]):null,ui(4,4,Tf.bind(null,t,e),n)}function Zs(){}function If(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Rf(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Lf(e,t,n){return rn&21?(qe(n,t)||(n=Oc(),Z.lanes|=n,on|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=n)}function V0(e,t){var n=b;b=n!==0&&4>n?n:4,e(!0);var r=al.transition;al.transition={};try{e(!1),t()}finally{b=n,al.transition=r}}function Mf(){return We().memoizedState}function W0(e,t,n){var r=$t(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Of(e))$f(t,n);else if(n=df(e,t,n,r),n!==null){var o=ke();Ze(n,e,r,o),Af(n,t,r)}}function H0(e,t,n){var r=$t(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Of(e))$f(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,qe(s,l)){var a=t.interleaved;a===null?(o.next=o,Vs(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=df(e,t,o,r),n!==null&&(o=ke(),Ze(n,e,r,o),Af(n,t,r))}}function Of(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function $f(e,t){fr=Qo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Af(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ts(e,n)}}var Yo={readContext:Ve,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},Q0={readContext:Ve,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:gu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,So(4194308,4,Tf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return So(4194308,4,e,t)},useInsertionEffect:function(e,t){return So(4,2,e,t)},useMemo:function(e,t){var n=tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=W0.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:hu,useDebugValue:Zs,useDeferredValue:function(e){return tt().memoizedState=e},useTransition:function(){var e=hu(!1),t=e[0];return e=V0.bind(null,e[1]),tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,o=tt();if(X){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ue===null)throw Error(S(349));rn&30||Sf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,gu(Ef.bind(null,r,i,e),[e]),r.flags|=2048,zr(9,kf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=tt(),t=ue.identifierPrefix;if(X){var n=ft,r=ct;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=jr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=B0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Y0={readContext:Ve,useCallback:If,useContext:Ve,useEffect:Js,useImperativeHandle:zf,useInsertionEffect:Pf,useLayoutEffect:jf,useMemo:Rf,useReducer:ul,useRef:_f,useState:function(){return ul(Tr)},useDebugValue:Zs,useDeferredValue:function(e){var t=We();return Lf(t,ie.memoizedState,e)},useTransition:function(){var e=ul(Tr)[0],t=We().memoizedState;return[e,t]},useMutableSource:xf,useSyncExternalStore:wf,useId:Mf,unstable_isNewReconciler:!1},G0={readContext:Ve,useCallback:If,useContext:Ve,useEffect:Js,useImperativeHandle:zf,useInsertionEffect:Pf,useLayoutEffect:jf,useMemo:Rf,useReducer:cl,useRef:_f,useState:function(){return cl(Tr)},useDebugValue:Zs,useDeferredValue:function(e){var t=We();return ie===null?t.memoizedState=e:Lf(t,ie.memoizedState,e)},useTransition:function(){var e=cl(Tr)[0],t=We().memoizedState;return[e,t]},useMutableSource:xf,useSyncExternalStore:wf,useId:Mf,unstable_isNewReconciler:!1};function On(e,t){try{var n="",r=t;do n+=kp(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function fl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Jl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var X0=typeof WeakMap=="function"?WeakMap:Map;function Df(e,t,n){n=dt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Xo||(Xo=!0,ss=r),Jl(e,t)},n}function Ff(e,t,n){n=dt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Jl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Jl(e,t),typeof r!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function yu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new X0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=um.bind(null,e,t,n),t.then(e,e))}function vu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=dt(-1,1),t.tag=2,Mt(n,t,1))),n.lanes|=1),e)}var K0=yt.ReactCurrentOwner,_e=!1;function Se(e,t,n,r){t.child=e===null?yf(t,null,n,r):Ln(t,e.child,n,r)}function wu(e,t,n,r,o){n=n.render;var i=t.ref;return Pn(t,o),r=Xs(e,t,n,r,i,o),n=Ks(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gt(e,t,o)):(X&&n&&As(t),t.flags|=1,Se(e,t,r,o),t.child)}function Su(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!la(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,bf(e,t,i,r,o)):(e=No(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:kr,n(l,r)&&e.ref===t.ref)return gt(e,t,o)}return t.flags|=1,e=At(i,r),e.ref=t.ref,e.return=t,t.child=e}function bf(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(kr(i,r)&&e.ref===t.ref)if(_e=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(_e=!0);else return t.lanes=e.lanes,gt(e,t,o)}return Zl(e,t,n,r,o)}function Uf(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(kn,Ie),Ie|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(kn,Ie),Ie|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,W(kn,Ie),Ie|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,W(kn,Ie),Ie|=r;return Se(e,t,o,n),t.child}function Bf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Zl(e,t,n,r,o){var i=je(n)?tn:xe.current;return i=In(t,i),Pn(t,o),n=Xs(e,t,n,r,i,o),r=Ks(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gt(e,t,o)):(X&&r&&As(t),t.flags|=1,Se(e,t,n,o),t.child)}function ku(e,t,n,r,o){if(je(n)){var i=!0;Fo(t)}else i=!1;if(Pn(t,o),t.stateNode===null)ko(e,t),hf(t,n,r),Kl(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ve(c):(c=je(n)?tn:xe.current,c=In(t,c));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==c)&&pu(t,l,r,c),Ct=!1;var h=t.memoizedState;l.state=h,Wo(t,r,l,o),a=t.memoizedState,s!==r||h!==a||Pe.current||Ct?(typeof p=="function"&&(Xl(t,n,p,r),a=t.memoizedState),(s=Ct||du(t,n,s,r,h,a,c))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,pf(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Ge(t.type,s),l.props=c,m=t.pendingProps,h=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ve(a):(a=je(n)?tn:xe.current,a=In(t,a));var w=n.getDerivedStateFromProps;(p=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==m||h!==a)&&pu(t,l,r,a),Ct=!1,h=t.memoizedState,l.state=h,Wo(t,r,l,o);var x=t.memoizedState;s!==m||h!==x||Pe.current||Ct?(typeof w=="function"&&(Xl(t,n,w,r),x=t.memoizedState),(c=Ct||du(t,n,c,r,h,x,a)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=a,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return ql(e,t,n,r,i,o)}function ql(e,t,n,r,o,i){Bf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&su(t,n,!1),gt(e,t,i);r=t.stateNode,K0.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Ln(t,e.child,null,i),t.child=Ln(t,null,s,i)):Se(e,t,s,i),t.memoizedState=r.state,o&&su(t,n,!0),t.child}function Vf(e){var t=e.stateNode;t.pendingContext?lu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&lu(e,t.context,!1),Hs(e,t.containerInfo)}function Eu(e,t,n,r,o){return Rn(),Fs(o),t.flags|=256,Se(e,t,n,r),t.child}var es={dehydrated:null,treeContext:null,retryLane:0};function ts(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wf(e,t,n){var r=t.pendingProps,o=J.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),W(J,o&1),e===null)return Yl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=di(l,r,0,null),e=en(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ts(n),t.memoizedState=es,e):qs(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return J0(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=At(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=At(s,i):(i=en(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?ts(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=es,r}return i=e.child,e=i.sibling,r=At(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function qs(e,t){return t=di({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function io(e,t,n,r){return r!==null&&Fs(r),Ln(t,e.child,null,n),e=qs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function J0(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=fl(Error(S(422))),io(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=di({mode:"visible",children:r.children},o,0,null),i=en(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Ln(t,e.child,null,l),t.child.memoizedState=ts(l),t.memoizedState=es,i);if(!(t.mode&1))return io(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(S(419)),r=fl(i,r,void 0),io(e,t,l,r)}if(s=(l&e.childLanes)!==0,_e||s){if(r=ue,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,ht(e,o),Ze(r,e,o,-1))}return ia(),r=fl(Error(S(421))),io(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=cm.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Re=Lt(o.nextSibling),Le=t,X=!0,Ke=null,e!==null&&(Fe[be++]=ct,Fe[be++]=ft,Fe[be++]=nn,ct=e.id,ft=e.overflow,nn=t),t=qs(t,r.children),t.flags|=4096,t)}function Cu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Gl(e.return,t,n)}function dl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Hf(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Se(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cu(e,n,t);else if(e.tag===19)Cu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(J,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ho(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),dl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ho(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}dl(t,!0,n,null,i);break;case"together":dl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ko(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),on|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=At(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=At(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Z0(e,t,n){switch(t.tag){case 3:Vf(t),Rn();break;case 5:vf(t);break;case 1:je(t.type)&&Fo(t);break;case 4:Hs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;W(Bo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?Wf(e,t,n):(W(J,J.current&1),e=gt(e,t,n),e!==null?e.sibling:null);W(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Hf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),W(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,Uf(e,t,n)}return gt(e,t,n)}var Qf,ns,Yf,Gf;Qf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ns=function(){};Yf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Kt(lt.current);var i=null;switch(n){case"input":o=Cl(e,o),r=Cl(e,r),i=[];break;case"select":o=q({},o,{value:void 0}),r=q({},r,{value:void 0}),i=[];break;case"textarea":o=Pl(e,o),r=Pl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ao)}Tl(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(hr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(hr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&Y("scroll",e),i||s===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Gf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Kn(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function q0(e,t,n){var r=t.pendingProps;switch(Ds(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return je(t.type)&&Do(),ge(t),null;case 3:return r=t.stateNode,Mn(),G(Pe),G(xe),Ys(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ro(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ke!==null&&(cs(Ke),Ke=null))),ns(e,t),ge(t),null;case 5:Qs(t);var o=Kt(Pr.current);if(n=t.type,e!==null&&t.stateNode!=null)Yf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ge(t),null}if(e=Kt(lt.current),ro(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ot]=t,r[Nr]=i,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(o=0;o<ir.length;o++)Y(ir[o],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":La(r,i),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Y("invalid",r);break;case"textarea":Oa(r,i),Y("invalid",r)}Tl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&no(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&no(r.textContent,s,e),o=["children",""+s]):hr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&Y("scroll",r)}switch(n){case"input":Gr(r),Ma(r,i,!0);break;case"textarea":Gr(r),$a(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ao)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[ot]=t,e[Nr]=r,Qf(e,t,!1,!1),t.stateNode=e;e:{switch(l=zl(n,r),n){case"dialog":Y("cancel",e),Y("close",e),o=r;break;case"iframe":case"object":case"embed":Y("load",e),o=r;break;case"video":case"audio":for(o=0;o<ir.length;o++)Y(ir[o],e);o=r;break;case"source":Y("error",e),o=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),o=r;break;case"details":Y("toggle",e),o=r;break;case"input":La(e,r),o=Cl(e,r),Y("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=q({},r,{value:void 0}),Y("invalid",e);break;case"textarea":Oa(e,r),o=Pl(e,r),Y("invalid",e);break;default:o=r}Tl(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Ec(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Sc(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&gr(e,a):typeof a=="number"&&gr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(hr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&Y("scroll",e):a!=null&&Es(e,i,a,l))}switch(n){case"input":Gr(e),Ma(e,r,!1);break;case"textarea":Gr(e),$a(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Dt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?En(e,!!r.multiple,i,!1):r.defaultValue!=null&&En(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ao)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ge(t),null;case 6:if(e&&t.stateNode!=null)Gf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Kt(Pr.current),Kt(lt.current),ro(t)){if(r=t.stateNode,n=t.memoizedProps,r[ot]=t,(i=r.nodeValue!==n)&&(e=Le,e!==null))switch(e.tag){case 3:no(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&no(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ot]=t,t.stateNode=r}return ge(t),null;case 13:if(G(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Re!==null&&t.mode&1&&!(t.flags&128))ff(),Rn(),t.flags|=98560,i=!1;else if(i=ro(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[ot]=t}else Rn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ge(t),i=!1}else Ke!==null&&(cs(Ke),Ke=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?le===0&&(le=3):ia())),t.updateQueue!==null&&(t.flags|=4),ge(t),null);case 4:return Mn(),ns(e,t),e===null&&Er(t.stateNode.containerInfo),ge(t),null;case 10:return Bs(t.type._context),ge(t),null;case 17:return je(t.type)&&Do(),ge(t),null;case 19:if(G(J),i=t.memoizedState,i===null)return ge(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Kn(i,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Ho(e),l!==null){for(t.flags|=128,Kn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(J,J.current&1|2),t.child}e=e.sibling}i.tail!==null&&te()>$n&&(t.flags|=128,r=!0,Kn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ho(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Kn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!X)return ge(t),null}else 2*te()-i.renderingStartTime>$n&&n!==1073741824&&(t.flags|=128,r=!0,Kn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=te(),t.sibling=null,n=J.current,W(J,r?n&1|2:n&1),t):(ge(t),null);case 22:case 23:return oa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ie&1073741824&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function em(e,t){switch(Ds(t),t.tag){case 1:return je(t.type)&&Do(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mn(),G(Pe),G(xe),Ys(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Qs(t),null;case 13:if(G(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Rn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(J),null;case 4:return Mn(),null;case 10:return Bs(t.type._context),null;case 22:case 23:return oa(),null;case 24:return null;default:return null}}var lo=!1,ve=!1,tm=typeof WeakSet=="function"?WeakSet:Set,P=null;function Sn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function rs(e,t,n){try{n()}catch(r){ee(e,t,r)}}var Nu=!1;function nm(e,t){if(bl=Mo,e=Jc(),$s(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,c=0,p=0,m=e,h=null;t:for(;;){for(var w;m!==n||o!==0&&m.nodeType!==3||(s=l+o),m!==i||r!==0&&m.nodeType!==3||(a=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(w=m.firstChild)!==null;)h=m,m=w;for(;;){if(m===e)break t;if(h===n&&++c===o&&(s=l),h===i&&++p===r&&(a=l),(w=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=w}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ul={focusedElem:e,selectionRange:n},Mo=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,j=x.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ge(t.type,y),j);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(v){ee(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return x=Nu,Nu=!1,x}function dr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&rs(t,n,i)}o=o.next}while(o!==r)}}function ci(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function os(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xf(e){var t=e.alternate;t!==null&&(e.alternate=null,Xf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ot],delete t[Nr],delete t[Wl],delete t[D0],delete t[F0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Kf(e){return e.tag===5||e.tag===3||e.tag===4}function _u(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Kf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function is(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ao));else if(r!==4&&(e=e.child,e!==null))for(is(e,t,n),e=e.sibling;e!==null;)is(e,t,n),e=e.sibling}function ls(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ls(e,t,n),e=e.sibling;e!==null;)ls(e,t,n),e=e.sibling}var fe=null,Xe=!1;function wt(e,t,n){for(n=n.child;n!==null;)Jf(e,t,n),n=n.sibling}function Jf(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(ni,n)}catch{}switch(n.tag){case 5:ve||Sn(n,t);case 6:var r=fe,o=Xe;fe=null,wt(e,t,n),fe=r,Xe=o,fe!==null&&(Xe?(e=fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(Xe?(e=fe,n=n.stateNode,e.nodeType===8?il(e.parentNode,n):e.nodeType===1&&il(e,n),wr(e)):il(fe,n.stateNode));break;case 4:r=fe,o=Xe,fe=n.stateNode.containerInfo,Xe=!0,wt(e,t,n),fe=r,Xe=o;break;case 0:case 11:case 14:case 15:if(!ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&rs(n,t,l),o=o.next}while(o!==r)}wt(e,t,n);break;case 1:if(!ve&&(Sn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ee(n,t,s)}wt(e,t,n);break;case 21:wt(e,t,n);break;case 22:n.mode&1?(ve=(r=ve)||n.memoizedState!==null,wt(e,t,n),ve=r):wt(e,t,n);break;default:wt(e,t,n)}}function Pu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new tm),t.forEach(function(r){var o=fm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:fe=s.stateNode,Xe=!1;break e;case 3:fe=s.stateNode.containerInfo,Xe=!0;break e;case 4:fe=s.stateNode.containerInfo,Xe=!0;break e}s=s.return}if(fe===null)throw Error(S(160));Jf(i,l,o),fe=null,Xe=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){ee(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Zf(t,e),t=t.sibling}function Zf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qe(t,e),et(e),r&4){try{dr(3,e,e.return),ci(3,e)}catch(y){ee(e,e.return,y)}try{dr(5,e,e.return)}catch(y){ee(e,e.return,y)}}break;case 1:Qe(t,e),et(e),r&512&&n!==null&&Sn(n,n.return);break;case 5:if(Qe(t,e),et(e),r&512&&n!==null&&Sn(n,n.return),e.flags&32){var o=e.stateNode;try{gr(o,"")}catch(y){ee(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&vc(o,i),zl(s,l);var c=zl(s,i);for(l=0;l<a.length;l+=2){var p=a[l],m=a[l+1];p==="style"?Ec(o,m):p==="dangerouslySetInnerHTML"?Sc(o,m):p==="children"?gr(o,m):Es(o,p,m,c)}switch(s){case"input":Nl(o,i);break;case"textarea":xc(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?En(o,!!i.multiple,w,!1):h!==!!i.multiple&&(i.defaultValue!=null?En(o,!!i.multiple,i.defaultValue,!0):En(o,!!i.multiple,i.multiple?[]:"",!1))}o[Nr]=i}catch(y){ee(e,e.return,y)}}break;case 6:if(Qe(t,e),et(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){ee(e,e.return,y)}}break;case 3:if(Qe(t,e),et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wr(t.containerInfo)}catch(y){ee(e,e.return,y)}break;case 4:Qe(t,e),et(e);break;case 13:Qe(t,e),et(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(na=te())),r&4&&Pu(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(ve=(c=ve)||p,Qe(t,e),ve=c):Qe(t,e),et(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(P=e,p=e.child;p!==null;){for(m=P=p;P!==null;){switch(h=P,w=h.child,h.tag){case 0:case 11:case 14:case 15:dr(4,h,h.return);break;case 1:Sn(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){ee(r,n,y)}}break;case 5:Sn(h,h.return);break;case 22:if(h.memoizedState!==null){Tu(m);continue}}w!==null?(w.return=h,P=w):Tu(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{o=m.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,a=m.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=kc("display",l))}catch(y){ee(e,e.return,y)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(y){ee(e,e.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Qe(t,e),et(e),r&4&&Pu(e);break;case 21:break;default:Qe(t,e),et(e)}}function et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Kf(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(gr(o,""),r.flags&=-33);var i=_u(e);ls(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=_u(e);is(e,s,l);break;default:throw Error(S(161))}}catch(a){ee(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rm(e,t,n){P=e,qf(e)}function qf(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var o=P,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||lo;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||ve;s=lo;var c=ve;if(lo=l,(ve=a)&&!c)for(P=o;P!==null;)l=P,a=l.child,l.tag===22&&l.memoizedState!==null?zu(o):a!==null?(a.return=l,P=a):zu(o);for(;i!==null;)P=i,qf(i),i=i.sibling;P=o,lo=s,ve=c}ju(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,P=i):ju(e)}}function ju(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ve||ci(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ve)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ge(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&fu(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}fu(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&wr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ve||t.flags&512&&os(t)}catch(h){ee(t,t.return,h)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function Tu(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function zu(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ci(4,t)}catch(a){ee(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){ee(t,o,a)}}var i=t.return;try{os(t)}catch(a){ee(t,i,a)}break;case 5:var l=t.return;try{os(t)}catch(a){ee(t,l,a)}}}catch(a){ee(t,t.return,a)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var om=Math.ceil,Go=yt.ReactCurrentDispatcher,ea=yt.ReactCurrentOwner,Be=yt.ReactCurrentBatchConfig,$=0,ue=null,re=null,pe=0,Ie=0,kn=Ut(0),le=0,Ir=null,on=0,fi=0,ta=0,pr=null,Ne=null,na=0,$n=1/0,at=null,Xo=!1,ss=null,Ot=null,so=!1,jt=null,Ko=0,mr=0,as=null,Eo=-1,Co=0;function ke(){return $&6?te():Eo!==-1?Eo:Eo=te()}function $t(e){return e.mode&1?$&2&&pe!==0?pe&-pe:U0.transition!==null?(Co===0&&(Co=Oc()),Co):(e=b,e!==0||(e=window.event,e=e===void 0?16:Bc(e.type)),e):1}function Ze(e,t,n,r){if(50<mr)throw mr=0,as=null,Error(S(185));Dr(e,n,r),(!($&2)||e!==ue)&&(e===ue&&(!($&2)&&(fi|=n),le===4&&_t(e,pe)),Te(e,r),n===1&&$===0&&!(t.mode&1)&&($n=te()+500,si&&Bt()))}function Te(e,t){var n=e.callbackNode;Up(e,t);var r=Lo(e,e===ue?pe:0);if(r===0)n!==null&&Fa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Fa(n),t===1)e.tag===0?b0(Iu.bind(null,e)):af(Iu.bind(null,e)),$0(function(){!($&6)&&Bt()}),n=null;else{switch($c(r)){case 1:n=js;break;case 4:n=Lc;break;case 16:n=Ro;break;case 536870912:n=Mc;break;default:n=Ro}n=sd(n,ed.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ed(e,t){if(Eo=-1,Co=0,$&6)throw Error(S(327));var n=e.callbackNode;if(jn()&&e.callbackNode!==n)return null;var r=Lo(e,e===ue?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Jo(e,r);else{t=r;var o=$;$|=2;var i=nd();(ue!==e||pe!==t)&&(at=null,$n=te()+500,qt(e,t));do try{sm();break}catch(s){td(e,s)}while(1);Us(),Go.current=i,$=o,re!==null?t=0:(ue=null,pe=0,t=le)}if(t!==0){if(t===2&&(o=Ol(e),o!==0&&(r=o,t=us(e,o))),t===1)throw n=Ir,qt(e,0),_t(e,r),Te(e,te()),n;if(t===6)_t(e,r);else{if(o=e.current.alternate,!(r&30)&&!im(o)&&(t=Jo(e,r),t===2&&(i=Ol(e),i!==0&&(r=i,t=us(e,i))),t===1))throw n=Ir,qt(e,0),_t(e,r),Te(e,te()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Yt(e,Ne,at);break;case 3:if(_t(e,r),(r&130023424)===r&&(t=na+500-te(),10<t)){if(Lo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Vl(Yt.bind(null,e,Ne,at),t);break}Yt(e,Ne,at);break;case 4:if(_t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Je(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*om(r/1960))-r,10<r){e.timeoutHandle=Vl(Yt.bind(null,e,Ne,at),r);break}Yt(e,Ne,at);break;case 5:Yt(e,Ne,at);break;default:throw Error(S(329))}}}return Te(e,te()),e.callbackNode===n?ed.bind(null,e):null}function us(e,t){var n=pr;return e.current.memoizedState.isDehydrated&&(qt(e,t).flags|=256),e=Jo(e,t),e!==2&&(t=Ne,Ne=n,t!==null&&cs(t)),e}function cs(e){Ne===null?Ne=e:Ne.push.apply(Ne,e)}function im(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!qe(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _t(e,t){for(t&=~ta,t&=~fi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),r=1<<n;e[n]=-1,t&=~r}}function Iu(e){if($&6)throw Error(S(327));jn();var t=Lo(e,0);if(!(t&1))return Te(e,te()),null;var n=Jo(e,t);if(e.tag!==0&&n===2){var r=Ol(e);r!==0&&(t=r,n=us(e,r))}if(n===1)throw n=Ir,qt(e,0),_t(e,t),Te(e,te()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yt(e,Ne,at),Te(e,te()),null}function ra(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&($n=te()+500,si&&Bt())}}function ln(e){jt!==null&&jt.tag===0&&!($&6)&&jn();var t=$;$|=1;var n=Be.transition,r=b;try{if(Be.transition=null,b=1,e)return e()}finally{b=r,Be.transition=n,$=t,!($&6)&&Bt()}}function oa(){Ie=kn.current,G(kn)}function qt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,O0(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(Ds(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Do();break;case 3:Mn(),G(Pe),G(xe),Ys();break;case 5:Qs(r);break;case 4:Mn();break;case 13:G(J);break;case 19:G(J);break;case 10:Bs(r.type._context);break;case 22:case 23:oa()}n=n.return}if(ue=e,re=e=At(e.current,null),pe=Ie=t,le=0,Ir=null,ta=fi=on=0,Ne=pr=null,Xt!==null){for(t=0;t<Xt.length;t++)if(n=Xt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Xt=null}return e}function td(e,t){do{var n=re;try{if(Us(),wo.current=Yo,Qo){for(var r=Z.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Qo=!1}if(rn=0,ae=ie=Z=null,fr=!1,jr=0,ea.current=null,n===null||n.return===null){le=1,Ir=t,re=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=pe,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,p=s,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var w=vu(l);if(w!==null){w.flags&=-257,xu(w,l,s,i,t),w.mode&1&&yu(i,c,t),t=w,a=c;var x=t.updateQueue;if(x===null){var y=new Set;y.add(a),t.updateQueue=y}else x.add(a);break e}else{if(!(t&1)){yu(i,c,t),ia();break e}a=Error(S(426))}}else if(X&&s.mode&1){var j=vu(l);if(j!==null){!(j.flags&65536)&&(j.flags|=256),xu(j,l,s,i,t),Fs(On(a,s));break e}}i=a=On(a,s),le!==4&&(le=2),pr===null?pr=[i]:pr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Df(i,a,t);cu(i,f);break e;case 1:s=a;var u=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ot===null||!Ot.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Ff(i,s,t);cu(i,v);break e}}i=i.return}while(i!==null)}od(n)}catch(C){t=C,re===n&&n!==null&&(re=n=n.return);continue}break}while(1)}function nd(){var e=Go.current;return Go.current=Yo,e===null?Yo:e}function ia(){(le===0||le===3||le===2)&&(le=4),ue===null||!(on&268435455)&&!(fi&268435455)||_t(ue,pe)}function Jo(e,t){var n=$;$|=2;var r=nd();(ue!==e||pe!==t)&&(at=null,qt(e,t));do try{lm();break}catch(o){td(e,o)}while(1);if(Us(),$=n,Go.current=r,re!==null)throw Error(S(261));return ue=null,pe=0,le}function lm(){for(;re!==null;)rd(re)}function sm(){for(;re!==null&&!Rp();)rd(re)}function rd(e){var t=ld(e.alternate,e,Ie);e.memoizedProps=e.pendingProps,t===null?od(e):re=t,ea.current=null}function od(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=em(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,re=null;return}}else if(n=q0(n,t,Ie),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);le===0&&(le=5)}function Yt(e,t,n){var r=b,o=Be.transition;try{Be.transition=null,b=1,am(e,t,n,r)}finally{Be.transition=o,b=r}return null}function am(e,t,n,r){do jn();while(jt!==null);if($&6)throw Error(S(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Bp(e,i),e===ue&&(re=ue=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||so||(so=!0,sd(Ro,function(){return jn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Be.transition,Be.transition=null;var l=b;b=1;var s=$;$|=4,ea.current=null,nm(e,n),Zf(n,e),j0(Ul),Mo=!!bl,Ul=bl=null,e.current=n,rm(n),Lp(),$=s,b=l,Be.transition=i}else e.current=n;if(so&&(so=!1,jt=e,Ko=o),i=e.pendingLanes,i===0&&(Ot=null),$p(n.stateNode),Te(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Xo)throw Xo=!1,e=ss,ss=null,e;return Ko&1&&e.tag!==0&&jn(),i=e.pendingLanes,i&1?e===as?mr++:(mr=0,as=e):mr=0,Bt(),null}function jn(){if(jt!==null){var e=$c(Ko),t=Be.transition,n=b;try{if(Be.transition=null,b=16>e?16:e,jt===null)var r=!1;else{if(e=jt,jt=null,Ko=0,$&6)throw Error(S(331));var o=$;for($|=4,P=e.current;P!==null;){var i=P,l=i.child;if(P.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(P=c;P!==null;){var p=P;switch(p.tag){case 0:case 11:case 15:dr(8,p,i)}var m=p.child;if(m!==null)m.return=p,P=m;else for(;P!==null;){p=P;var h=p.sibling,w=p.return;if(Xf(p),p===c){P=null;break}if(h!==null){h.return=w,P=h;break}P=w}}}var x=i.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var j=y.sibling;y.sibling=null,y=j}while(y!==null)}}P=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,P=l;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:dr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,P=f;break e}P=i.return}}var u=e.current;for(P=u;P!==null;){l=P;var d=l.child;if(l.subtreeFlags&2064&&d!==null)d.return=l,P=d;else e:for(l=u;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ci(9,s)}}catch(C){ee(s,s.return,C)}if(s===l){P=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,P=v;break e}P=s.return}}if($=o,Bt(),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(ni,e)}catch{}r=!0}return r}finally{b=n,Be.transition=t}}return!1}function Ru(e,t,n){t=On(n,t),t=Df(e,t,1),e=Mt(e,t,1),t=ke(),e!==null&&(Dr(e,1,t),Te(e,t))}function ee(e,t,n){if(e.tag===3)Ru(e,e,n);else for(;t!==null;){if(t.tag===3){Ru(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ot===null||!Ot.has(r))){e=On(n,e),e=Ff(t,e,1),t=Mt(t,e,1),e=ke(),t!==null&&(Dr(t,1,e),Te(t,e));break}}t=t.return}}function um(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,ue===e&&(pe&n)===n&&(le===4||le===3&&(pe&130023424)===pe&&500>te()-na?qt(e,0):ta|=n),Te(e,t)}function id(e,t){t===0&&(e.mode&1?(t=Jr,Jr<<=1,!(Jr&130023424)&&(Jr=4194304)):t=1);var n=ke();e=ht(e,t),e!==null&&(Dr(e,t,n),Te(e,n))}function cm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),id(e,n)}function fm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),id(e,n)}var ld;ld=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pe.current)_e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return _e=!1,Z0(e,t,n);_e=!!(e.flags&131072)}else _e=!1,X&&t.flags&1048576&&uf(t,Uo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ko(e,t),e=t.pendingProps;var o=In(t,xe.current);Pn(t,n),o=Xs(null,t,r,e,o,n);var i=Ks();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(r)?(i=!0,Fo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ws(t),o.updater=ai,t.stateNode=o,o._reactInternals=t,Kl(t,r,e,n),t=ql(null,t,r,!0,i,n)):(t.tag=0,X&&i&&As(t),Se(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ko(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=pm(r),e=Ge(r,e),o){case 0:t=Zl(null,t,r,e,n);break e;case 1:t=ku(null,t,r,e,n);break e;case 11:t=wu(null,t,r,e,n);break e;case 14:t=Su(null,t,r,Ge(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),Zl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),ku(e,t,r,o,n);case 3:e:{if(Vf(t),e===null)throw Error(S(387));r=t.pendingProps,i=t.memoizedState,o=i.element,pf(e,t),Wo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=On(Error(S(423)),t),t=Eu(e,t,r,n,o);break e}else if(r!==o){o=On(Error(S(424)),t),t=Eu(e,t,r,n,o);break e}else for(Re=Lt(t.stateNode.containerInfo.firstChild),Le=t,X=!0,Ke=null,n=yf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rn(),r===o){t=gt(e,t,n);break e}Se(e,t,r,n)}t=t.child}return t;case 5:return vf(t),e===null&&Yl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Bl(r,o)?l=null:i!==null&&Bl(r,i)&&(t.flags|=32),Bf(e,t),Se(e,t,l,n),t.child;case 6:return e===null&&Yl(t),null;case 13:return Wf(e,t,n);case 4:return Hs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ln(t,null,r,n):Se(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),wu(e,t,r,o,n);case 7:return Se(e,t,t.pendingProps,n),t.child;case 8:return Se(e,t,t.pendingProps.children,n),t.child;case 12:return Se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,W(Bo,r._currentValue),r._currentValue=l,i!==null)if(qe(i.value,l)){if(i.children===o.children&&!Pe.current){t=gt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=dt(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?a.next=a:(a.next=p.next,p.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Gl(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(S(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Gl(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Se(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Pn(t,n),o=Ve(o),r=r(o),t.flags|=1,Se(e,t,r,n),t.child;case 14:return r=t.type,o=Ge(r,t.pendingProps),o=Ge(r.type,o),Su(e,t,r,o,n);case 15:return bf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),ko(e,t),t.tag=1,je(r)?(e=!0,Fo(t)):e=!1,Pn(t,n),hf(t,r,o),Kl(t,r,o,n),ql(null,t,r,!0,e,n);case 19:return Hf(e,t,n);case 22:return Uf(e,t,n)}throw Error(S(156,t.tag))};function sd(e,t){return Rc(e,t)}function dm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(e,t,n,r){return new dm(e,t,n,r)}function la(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pm(e){if(typeof e=="function")return la(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ns)return 11;if(e===_s)return 14}return 2}function At(e,t){var n=e.alternate;return n===null?(n=Ue(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function No(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")la(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case dn:return en(n.children,o,i,t);case Cs:l=8,o|=8;break;case wl:return e=Ue(12,n,t,o|2),e.elementType=wl,e.lanes=i,e;case Sl:return e=Ue(13,n,t,o),e.elementType=Sl,e.lanes=i,e;case kl:return e=Ue(19,n,t,o),e.elementType=kl,e.lanes=i,e;case hc:return di(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pc:l=10;break e;case mc:l=9;break e;case Ns:l=11;break e;case _s:l=14;break e;case Et:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Ue(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function en(e,t,n,r){return e=Ue(7,e,r,t),e.lanes=n,e}function di(e,t,n,r){return e=Ue(22,e,r,t),e.elementType=hc,e.lanes=n,e.stateNode={isHidden:!1},e}function pl(e,t,n){return e=Ue(6,e,null,t),e.lanes=n,e}function ml(e,t,n){return t=Ue(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function mm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gi(0),this.expirationTimes=Gi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function sa(e,t,n,r,o,i,l,s,a){return e=new mm(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ue(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ws(i),e}function hm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ad(e){if(!e)return Ft;e=e._reactInternals;e:{if(an(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(je(n))return sf(e,n,t)}return t}function ud(e,t,n,r,o,i,l,s,a){return e=sa(n,r,!0,e,o,i,l,s,a),e.context=ad(null),n=e.current,r=ke(),o=$t(n),i=dt(r,o),i.callback=t??null,Mt(n,i,o),e.current.lanes=o,Dr(e,o,r),Te(e,r),e}function pi(e,t,n,r){var o=t.current,i=ke(),l=$t(o);return n=ad(n),t.context===null?t.context=n:t.pendingContext=n,t=dt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Mt(o,t,l),e!==null&&(Ze(e,o,l,i),xo(e,o,l)),l}function Zo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function aa(e,t){Lu(e,t),(e=e.alternate)&&Lu(e,t)}function gm(){return null}var cd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ua(e){this._internalRoot=e}mi.prototype.render=ua.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));pi(e,t,null,null)};mi.prototype.unmount=ua.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ln(function(){pi(null,e,null,null)}),t[mt]=null}};function mi(e){this._internalRoot=e}mi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nt.length&&t!==0&&t<Nt[n].priority;n++);Nt.splice(n,0,e),n===0&&Uc(e)}};function ca(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Mu(){}function ym(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Zo(l);i.call(c)}}var l=ud(t,r,e,0,null,!1,!1,"",Mu);return e._reactRootContainer=l,e[mt]=l.current,Er(e.nodeType===8?e.parentNode:e),ln(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=Zo(a);s.call(c)}}var a=sa(e,0,!1,null,null,!1,!1,"",Mu);return e._reactRootContainer=a,e[mt]=a.current,Er(e.nodeType===8?e.parentNode:e),ln(function(){pi(t,a,n,r)}),a}function gi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=Zo(l);s.call(a)}}pi(t,l,e,o)}else l=ym(n,t,e,o,r);return Zo(l)}Ac=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=or(t.pendingLanes);n!==0&&(Ts(t,n|1),Te(t,te()),!($&6)&&($n=te()+500,Bt()))}break;case 13:ln(function(){var r=ht(e,1);if(r!==null){var o=ke();Ze(r,e,1,o)}}),aa(e,1)}};zs=function(e){if(e.tag===13){var t=ht(e,134217728);if(t!==null){var n=ke();Ze(t,e,134217728,n)}aa(e,134217728)}};Dc=function(e){if(e.tag===13){var t=$t(e),n=ht(e,t);if(n!==null){var r=ke();Ze(n,e,t,r)}aa(e,t)}};Fc=function(){return b};bc=function(e,t){var n=b;try{return b=e,t()}finally{b=n}};Rl=function(e,t,n){switch(t){case"input":if(Nl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=li(r);if(!o)throw Error(S(90));yc(r),Nl(r,o)}}}break;case"textarea":xc(e,n);break;case"select":t=n.value,t!=null&&En(e,!!n.multiple,t,!1)}};_c=ra;Pc=ln;var vm={usingClientEntryPoint:!1,Events:[br,gn,li,Cc,Nc,ra]},Jn={findFiberByHostInstance:Gt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},xm={bundleType:Jn.bundleType,version:Jn.version,rendererPackageName:Jn.rendererPackageName,rendererConfig:Jn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zc(e),e===null?null:e.stateNode},findFiberByHostInstance:Jn.findFiberByHostInstance||gm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ao.isDisabled&&ao.supportsFiber)try{ni=ao.inject(xm),it=ao}catch{}}$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vm;$e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ca(t))throw Error(S(200));return hm(e,t,null,n)};$e.createRoot=function(e,t){if(!ca(e))throw Error(S(299));var n=!1,r="",o=cd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=sa(e,1,!1,null,null,n,!1,r,o),e[mt]=t.current,Er(e.nodeType===8?e.parentNode:e),new ua(t)};$e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=zc(t),e=e===null?null:e.stateNode,e};$e.flushSync=function(e){return ln(e)};$e.hydrate=function(e,t,n){if(!hi(t))throw Error(S(200));return gi(null,e,t,!0,n)};$e.hydrateRoot=function(e,t,n){if(!ca(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=cd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=ud(t,null,e,1,n??null,o,!1,i,l),e[mt]=t.current,Er(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new mi(t)};$e.render=function(e,t,n){if(!hi(t))throw Error(S(200));return gi(null,e,t,!1,n)};$e.unmountComponentAtNode=function(e){if(!hi(e))throw Error(S(40));return e._reactRootContainer?(ln(function(){gi(null,null,e,!1,function(){e._reactRootContainer=null,e[mt]=null})}),!0):!1};$e.unstable_batchedUpdates=ra;$e.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!hi(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return gi(e,t,n,!1,r)};$e.version="18.2.0-next-9e3b772b8-20220608";function fd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fd)}catch(e){console.error(e)}}fd(),ac.exports=$e;var wm=ac.exports,Ou=wm;vl.createRoot=Ou.createRoot,vl.hydrateRoot=Ou.hydrateRoot;const Un="lg:px-36 md:px-24 px-12",dd="my-expertise",pd="work-experience",md="hero-section",hd="contact-section",gd="testimonials-section",yi="hover:-translate-y-1 transition-transform ease-in",fa="-";function Sm(e){const t=Em(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;function o(l){const s=l.split(fa);return s[0]===""&&s.length!==1&&s.shift(),yd(s,t)||km(l)}function i(l,s){const a=n[l]||[];return s&&r[l]?[...a,...r[l]]:a}return{getClassGroupId:o,getConflictingClassGroupIds:i}}function yd(e,t){var l;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),o=r?yd(e.slice(1),r):void 0;if(o)return o;if(t.validators.length===0)return;const i=e.join(fa);return(l=t.validators.find(({validator:s})=>s(i)))==null?void 0:l.classGroupId}const $u=/^\[(.+)\]$/;function km(e){if($u.test(e)){const t=$u.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}}function Em(e){const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return Nm(Object.entries(e.classGroups),n).forEach(([i,l])=>{fs(l,r,i,t)}),r}function fs(e,t,n,r){e.forEach(o=>{if(typeof o=="string"){const i=o===""?t:Au(t,o);i.classGroupId=n;return}if(typeof o=="function"){if(Cm(o)){fs(o(r),t,n,r);return}t.validators.push({validator:o,classGroupId:n});return}Object.entries(o).forEach(([i,l])=>{fs(l,Au(t,i),n,r)})})}function Au(e,t){let n=e;return t.split(fa).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n}function Cm(e){return e.isThemeGetter}function Nm(e,t){return t?e.map(([n,r])=>{const o=r.map(i=>typeof i=="string"?t+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([l,s])=>[t+l,s])):i);return[n,o]}):e}function _m(e){if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;function o(i,l){n.set(i,l),t++,t>e&&(t=0,r=n,n=new Map)}return{get(i){let l=n.get(i);if(l!==void 0)return l;if((l=r.get(i))!==void 0)return o(i,l),l},set(i,l){n.has(i)?n.set(i,l):o(i,l)}}}const vd="!";function Pm(e){const t=e.separator,n=t.length===1,r=t[0],o=t.length;return function(l){const s=[];let a=0,c=0,p;for(let y=0;y<l.length;y++){let j=l[y];if(a===0){if(j===r&&(n||l.slice(y,y+o)===t)){s.push(l.slice(c,y)),c=y+o;continue}if(j==="/"){p=y;continue}}j==="["?a++:j==="]"&&a--}const m=s.length===0?l:l.substring(c),h=m.startsWith(vd),w=h?m.substring(1):m,x=p&&p>c?p-c:void 0;return{modifiers:s,hasImportantModifier:h,baseClassName:w,maybePostfixModifierPosition:x}}}function jm(e){if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t}function Tm(e){return{cache:_m(e.cacheSize),splitModifiers:Pm(e),...Sm(e)}}const zm=/\s+/;function Im(e,t){const{splitModifiers:n,getClassGroupId:r,getConflictingClassGroupIds:o}=t,i=new Set;return e.trim().split(zm).map(l=>{const{modifiers:s,hasImportantModifier:a,baseClassName:c,maybePostfixModifierPosition:p}=n(l);let m=r(p?c.substring(0,p):c),h=!!p;if(!m){if(!p)return{isTailwindClass:!1,originalClassName:l};if(m=r(c),!m)return{isTailwindClass:!1,originalClassName:l};h=!1}const w=jm(s).join(":");return{isTailwindClass:!0,modifierId:a?w+vd:w,classGroupId:m,originalClassName:l,hasPostfixModifier:h}}).reverse().filter(l=>{if(!l.isTailwindClass)return!0;const{modifierId:s,classGroupId:a,hasPostfixModifier:c}=l,p=s+a;return i.has(p)?!1:(i.add(p),o(a,c).forEach(m=>i.add(s+m)),!0)}).reverse().map(l=>l.originalClassName).join(" ")}function Rm(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=xd(t))&&(r&&(r+=" "),r+=n);return r}function xd(e){if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=xd(e[r]))&&(n&&(n+=" "),n+=t);return n}function Lm(e,...t){let n,r,o,i=l;function l(a){const c=t.reduce((p,m)=>m(p),e());return n=Tm(c),r=n.cache.get,o=n.cache.set,i=s,s(a)}function s(a){const c=r(a);if(c)return c;const p=Im(a,n);return o(a,p),p}return function(){return i(Rm.apply(null,arguments))}}function Q(e){const t=n=>n[e]||[];return t.isThemeGetter=!0,t}const wd=/^\[(?:([a-z-]+):)?(.+)\]$/i,Mm=/^\d+\/\d+$/,Om=new Set(["px","full","screen"]),$m=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Am=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Dm=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Fm=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function Ye(e){return Jt(e)||Om.has(e)||Mm.test(e)}function St(e){return Bn(e,"length",Ym)}function Jt(e){return!!e&&!Number.isNaN(Number(e))}function uo(e){return Bn(e,"number",Jt)}function Zn(e){return!!e&&Number.isInteger(Number(e))}function bm(e){return e.endsWith("%")&&Jt(e.slice(0,-1))}function R(e){return wd.test(e)}function kt(e){return $m.test(e)}const Um=new Set(["length","size","percentage"]);function Bm(e){return Bn(e,Um,Sd)}function Vm(e){return Bn(e,"position",Sd)}const Wm=new Set(["image","url"]);function Hm(e){return Bn(e,Wm,Xm)}function Qm(e){return Bn(e,"",Gm)}function qn(){return!0}function Bn(e,t,n){const r=wd.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1}function Ym(e){return Am.test(e)}function Sd(){return!1}function Gm(e){return Dm.test(e)}function Xm(e){return Fm.test(e)}function Km(){const e=Q("colors"),t=Q("spacing"),n=Q("blur"),r=Q("brightness"),o=Q("borderColor"),i=Q("borderRadius"),l=Q("borderSpacing"),s=Q("borderWidth"),a=Q("contrast"),c=Q("grayscale"),p=Q("hueRotate"),m=Q("invert"),h=Q("gap"),w=Q("gradientColorStops"),x=Q("gradientColorStopPositions"),y=Q("inset"),j=Q("margin"),f=Q("opacity"),u=Q("padding"),d=Q("saturate"),v=Q("scale"),C=Q("sepia"),N=Q("skew"),k=Q("space"),T=Q("translate"),H=()=>["auto","contain","none"],L=()=>["auto","hidden","clip","visible","scroll"],we=()=>["auto",R,t],F=()=>[R,t],vt=()=>["",Ye,St],Vt=()=>["auto",Jt,R],Vr=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],xt=()=>["solid","dashed","dotted","double","none"],un=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],_=()=>["start","end","center","between","around","evenly","stretch"],z=()=>["","0",R],I=()=>["auto","avoid","all","avoid-page","page","left","right","column"],V=()=>[Jt,uo],K=()=>[Jt,R];return{cacheSize:500,separator:":",theme:{colors:[qn],spacing:[Ye,St],blur:["none","",kt,R],brightness:V(),borderColor:[e],borderRadius:["none","","full",kt,R],borderSpacing:F(),borderWidth:vt(),contrast:V(),grayscale:z(),hueRotate:K(),invert:z(),gap:F(),gradientColorStops:[e],gradientColorStopPositions:[bm,St],inset:we(),margin:we(),opacity:V(),padding:F(),saturate:V(),scale:V(),sepia:z(),skew:K(),space:F(),translate:F()},classGroups:{aspect:[{aspect:["auto","square","video",R]}],container:["container"],columns:[{columns:[kt]}],"break-after":[{"break-after":I()}],"break-before":[{"break-before":I()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Vr(),R]}],overflow:[{overflow:L()}],"overflow-x":[{"overflow-x":L()}],"overflow-y":[{"overflow-y":L()}],overscroll:[{overscroll:H()}],"overscroll-x":[{"overscroll-x":H()}],"overscroll-y":[{"overscroll-y":H()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[y]}],"inset-x":[{"inset-x":[y]}],"inset-y":[{"inset-y":[y]}],start:[{start:[y]}],end:[{end:[y]}],top:[{top:[y]}],right:[{right:[y]}],bottom:[{bottom:[y]}],left:[{left:[y]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Zn,R]}],basis:[{basis:we()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",R]}],grow:[{grow:z()}],shrink:[{shrink:z()}],order:[{order:["first","last","none",Zn,R]}],"grid-cols":[{"grid-cols":[qn]}],"col-start-end":[{col:["auto",{span:["full",Zn,R]},R]}],"col-start":[{"col-start":Vt()}],"col-end":[{"col-end":Vt()}],"grid-rows":[{"grid-rows":[qn]}],"row-start-end":[{row:["auto",{span:[Zn,R]},R]}],"row-start":[{"row-start":Vt()}],"row-end":[{"row-end":Vt()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",R]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",R]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",..._()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",..._(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[..._(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[u]}],px:[{px:[u]}],py:[{py:[u]}],ps:[{ps:[u]}],pe:[{pe:[u]}],pt:[{pt:[u]}],pr:[{pr:[u]}],pb:[{pb:[u]}],pl:[{pl:[u]}],m:[{m:[j]}],mx:[{mx:[j]}],my:[{my:[j]}],ms:[{ms:[j]}],me:[{me:[j]}],mt:[{mt:[j]}],mr:[{mr:[j]}],mb:[{mb:[j]}],ml:[{ml:[j]}],"space-x":[{"space-x":[k]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[k]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",R,t]}],"min-w":[{"min-w":["min","max","fit",R,Ye]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[kt]},kt,R]}],h:[{h:[R,t,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",Ye,R]}],"max-h":[{"max-h":[R,t,"min","max","fit"]}],"font-size":[{text:["base",kt,St]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",uo]}],"font-family":[{font:[qn]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",R]}],"line-clamp":[{"line-clamp":["none",Jt,uo]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ye,R]}],"list-image":[{"list-image":["none",R]}],"list-style-type":[{list:["none","disc","decimal",R]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[f]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[f]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...xt(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Ye,St]}],"underline-offset":[{"underline-offset":["auto",Ye,R]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:F()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",R]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",R]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[f]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Vr(),Vm]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Bm]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Hm]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[x]}],"gradient-via-pos":[{via:[x]}],"gradient-to-pos":[{to:[x]}],"gradient-from":[{from:[w]}],"gradient-via":[{via:[w]}],"gradient-to":[{to:[w]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[f]}],"border-style":[{border:[...xt(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[f]}],"divide-style":[{divide:xt()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...xt()]}],"outline-offset":[{"outline-offset":[Ye,R]}],"outline-w":[{outline:[Ye,St]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:vt()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[f]}],"ring-offset-w":[{"ring-offset":[Ye,St]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",kt,Qm]}],"shadow-color":[{shadow:[qn]}],opacity:[{opacity:[f]}],"mix-blend":[{"mix-blend":un()}],"bg-blend":[{"bg-blend":un()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[a]}],"drop-shadow":[{"drop-shadow":["","none",kt,R]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[p]}],invert:[{invert:[m]}],saturate:[{saturate:[d]}],sepia:[{sepia:[C]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[a]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[p]}],"backdrop-invert":[{"backdrop-invert":[m]}],"backdrop-opacity":[{"backdrop-opacity":[f]}],"backdrop-saturate":[{"backdrop-saturate":[d]}],"backdrop-sepia":[{"backdrop-sepia":[C]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",R]}],duration:[{duration:K()}],ease:[{ease:["linear","in","out","in-out",R]}],delay:[{delay:K()}],animate:[{animate:["none","spin","ping","pulse","bounce",R]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[v]}],"scale-x":[{"scale-x":[v]}],"scale-y":[{"scale-y":[v]}],rotate:[{rotate:[Zn,R]}],"translate-x":[{"translate-x":[T]}],"translate-y":[{"translate-y":[T]}],"skew-x":[{"skew-x":[N]}],"skew-y":[{"skew-y":[N]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",R]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",R]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":F()}],"scroll-mx":[{"scroll-mx":F()}],"scroll-my":[{"scroll-my":F()}],"scroll-ms":[{"scroll-ms":F()}],"scroll-me":[{"scroll-me":F()}],"scroll-mt":[{"scroll-mt":F()}],"scroll-mr":[{"scroll-mr":F()}],"scroll-mb":[{"scroll-mb":F()}],"scroll-ml":[{"scroll-ml":F()}],"scroll-p":[{"scroll-p":F()}],"scroll-px":[{"scroll-px":F()}],"scroll-py":[{"scroll-py":F()}],"scroll-ps":[{"scroll-ps":F()}],"scroll-pe":[{"scroll-pe":F()}],"scroll-pt":[{"scroll-pt":F()}],"scroll-pr":[{"scroll-pr":F()}],"scroll-pb":[{"scroll-pb":F()}],"scroll-pl":[{"scroll-pl":F()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",R]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Ye,St,uo]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const Jm=Lm(Km),oe=Jm;var Rr=(e=>(e.BLUE="blue",e.RED="red",e))(Rr||{});const qo=({variant:e,className:t,style:n})=>e==="blue"?g.jsx("div",{className:oe("absolute w-96 h-96 bg-cyan-600 rounded-full blur-3xl",t),style:n}):g.jsx("div",{className:oe("absolute w-96 h-96 bg-pink-950 rounded-full blur-3xl",t),style:n}),Zm="/assets/my_picture_no_bg-b36f1d32.png",qm=({className:e,style:t})=>g.jsx("div",{className:e,style:t,children:g.jsx("img",{src:Zm})}),Tt=({iconClassNames:e,link:t})=>g.jsx("a",{href:t,className:`w-12 h-12 bg-gradient-to-b from-white/10 to-white/5 rounded-3xl flex justify-center items-center hover:to-white/10 cursor-pointer ${yi}`,target:"_blank",children:g.jsx("i",{className:`${e} text-cyan-500`})}),Zt={name:"Rohan Hussain",titles:["Software Engineer","UI/UX Designer","Vector Illustration Artist","Master Communicator","Leader","Team Player"],phoneNumber:"+923320460729",email:"contact@rohanhussain.com",linkedIn:"https://linkedin.com/in/rohan-hussain",github:"https://github.com/hallucinogenizer"},eh="/assets/Rohan Hussain-3b1d13f9.pdf",th=({className:e})=>g.jsxs("div",{className:oe("flex flex-col gap-2",e),children:[g.jsx(nh,{className:"mb-4"}),g.jsx(oh,{className:"mb-2"}),g.jsx(ih,{}),g.jsx(lh,{className:"mt-10"}),g.jsx(sh,{className:"mt-8"})]}),nh=({className:e})=>g.jsxs("div",{className:oe("inline-flex items-center gap-4",e),children:[g.jsx(rh,{})," ",g.jsx("p",{className:"text-stone-300 text-2xl leading-loose",style:{fontFamily:"Roboto Mono"},children:"Hello!"})]}),rh=()=>g.jsx("div",{className:"w-8 h-px border-2 border-sky-700"}),oh=({className:e})=>g.jsx("h1",{className:oe("text-light text-6xl font-bold font-['Poppins'] uppercase leading-none",e),children:Zt.name}),ih=()=>{const[e,t]=M.useState(0);return M.useEffect(()=>{const n=setInterval(()=>{t(r=>(r+1)%Zt.titles.length)},1500);return()=>clearInterval(n)},[]),g.jsxs("h3",{className:"text-3xl font-medium leading-10 tracking-widest",style:{fontFamily:"Roboto Mono"},children:[g.jsx("span",{className:"text-stone-300",children:"I'm a "}),g.jsx("span",{className:"text-teal-500",children:Zt.titles[e]})]})},lh=({className:e})=>g.jsx("a",{className:oe("px-3 py-2 w-fit border border-teal-500 hover:bg-teal-500 text-teal-500 hover:text-white rounded",e),href:eh,children:"Download Resume"}),sh=({className:e})=>g.jsxs("div",{className:oe("flex gap-6",e),children:[g.jsx(Tt,{iconClassNames:"fa-solid fa-phone",link:`tel:${Zt.phoneNumber}`}),g.jsx(Tt,{iconClassNames:"fa-regular fa-envelope",link:`mailto:${Zt.email}`}),g.jsx(Tt,{iconClassNames:"fa-brands fa-github",link:Zt.github}),g.jsx(Tt,{iconClassNames:"fa-brands fa-linkedin-in",link:Zt.linkedIn})]});function ah(){return g.jsxs("div",{className:"w-full relative",style:{minHeight:"42rem"},id:md,children:[g.jsx(qo,{variant:Rr.BLUE,className:"left-16"}),g.jsxs("div",{className:oe("pt-24 md:pt-52 flex gap-4 md:flex-row flex-col-reverse justify-between relative z-10",Un),children:[g.jsx(th,{className:"flex-shrink"}),g.jsxs("div",{className:"relative",children:[g.jsx(qm,{className:"absolute z-10 top-0 right-0 md:w-[30rem] md:h-[30rem] w-40 h-40"}),g.jsx(qo,{variant:Rr.RED,className:"right-0 top-0 bg-[#9E2A3D]",style:{width:"27rem",height:"27rem"}})]})]})]})}const uh="/assets/bg-stars-78e98123.png",vi=({title:e})=>g.jsxs("h1",{className:"leading-10 font-['Poppins']",children:[g.jsx("span",{className:"text-neutral-300 text-4xl font-medium",children:e[0]}),g.jsx("br",{}),g.jsx("span",{className:"text-cyan-500 text-6xl font-semibold ",children:e[1]})]});function ch({content:e}){return g.jsxs("div",{className:oe("w-96 h-72 bg-white/10 rounded-lg p-8 text-light","flex flex-col gap-4",yi),style:{minHeight:"15rem"},children:[g.jsxs("div",{className:"relative w-12 h-12",children:[g.jsx("div",{className:"absolute z-10 top-3 left-2",children:g.jsx("i",{className:`${e.icon} fa-2xl text-cyan-500`})}),g.jsx("div",{className:"bg-cyan-500/50 absolute blur-md rounded-full w-12 h-12 top-0 left-0"})]}),g.jsx("h3",{className:"text-neutral-300 text-lg font-medium leading-relaxed",style:{fontFamily:"Roboto Mono"},children:e.title}),g.jsx("p",{className:"text-stone-300 text-base font-normal font-['Segoe UI'] leading-loose line-clamp-3 overflow-ellipsis",children:e.description})]})}const fh=[{icon:"fa-brands fa-react",title:"ReactJS, NextJS",description:"Experienced in building modern interactive user interfaces using React, Server Components, and NextJS 14 App Router."},{icon:"fa-brands fa-react",title:"NextJS",description:"Proficient in developing server-side rendered and statically generated React applications with NextJS."},{icon:"fa-brands fa-node",title:"ExpressJS, NestJS",description:"Skilled in building scalable and maintainable server-side applications using NestJS."},{icon:"fa-brands fa-aws",title:"DevOps with AWS",description:"Expertise in cloud computing with AWS, including IAM, EC2, Lambdas, and CI/CD CodePipeline."},{icon:"fa-solid fa-paint-brush",title:"UI/UX Design",description:"Proficient in creating visually appealing and user-friendly interfaces, considering both design and user experience principles."},{icon:"fa-solid fa-comments",title:"Communication",description:"Excellent communication is my superpower and I use it to enable my team to work smoothly."}];function dh(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function ph(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var mh=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(ph(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=dh(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),ye="-ms-",ei="-moz-",A="-webkit-",kd="comm",da="rule",pa="decl",hh="@import",Ed="@keyframes",gh="@layer",yh=Math.abs,xi=String.fromCharCode,vh=Object.assign;function xh(e,t){return de(e,0)^45?(((t<<2^de(e,0))<<2^de(e,1))<<2^de(e,2))<<2^de(e,3):0}function Cd(e){return e.trim()}function wh(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,n){return e.replace(t,n)}function ds(e,t){return e.indexOf(t)}function de(e,t){return e.charCodeAt(t)|0}function Lr(e,t,n){return e.slice(t,n)}function nt(e){return e.length}function ma(e){return e.length}function co(e,t){return t.push(e),e}function Sh(e,t){return e.map(t).join("")}var wi=1,An=1,Nd=0,ze=0,ne=0,Vn="";function Si(e,t,n,r,o,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:wi,column:An,length:l,return:""}}function er(e,t){return vh(Si("",null,null,"",null,null,0),e,{length:-e.length},t)}function kh(){return ne}function Eh(){return ne=ze>0?de(Vn,--ze):0,An--,ne===10&&(An=1,wi--),ne}function Me(){return ne=ze<Nd?de(Vn,ze++):0,An++,ne===10&&(An=1,wi++),ne}function st(){return de(Vn,ze)}function _o(){return ze}function Br(e,t){return Lr(Vn,e,t)}function Mr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _d(e){return wi=An=1,Nd=nt(Vn=e),ze=0,[]}function Pd(e){return Vn="",e}function Po(e){return Cd(Br(ze-1,ps(e===91?e+2:e===40?e+1:e)))}function Ch(e){for(;(ne=st())&&ne<33;)Me();return Mr(e)>2||Mr(ne)>3?"":" "}function Nh(e,t){for(;--t&&Me()&&!(ne<48||ne>102||ne>57&&ne<65||ne>70&&ne<97););return Br(e,_o()+(t<6&&st()==32&&Me()==32))}function ps(e){for(;Me();)switch(ne){case e:return ze;case 34:case 39:e!==34&&e!==39&&ps(ne);break;case 40:e===41&&ps(e);break;case 92:Me();break}return ze}function _h(e,t){for(;Me()&&e+ne!==47+10;)if(e+ne===42+42&&st()===47)break;return"/*"+Br(t,ze-1)+"*"+xi(e===47?e:Me())}function Ph(e){for(;!Mr(st());)Me();return Br(e,ze)}function jh(e){return Pd(jo("",null,null,null,[""],e=_d(e),0,[0],e))}function jo(e,t,n,r,o,i,l,s,a){for(var c=0,p=0,m=l,h=0,w=0,x=0,y=1,j=1,f=1,u=0,d="",v=o,C=i,N=r,k=d;j;)switch(x=u,u=Me()){case 40:if(x!=108&&de(k,m-1)==58){ds(k+=D(Po(u),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:k+=Po(u);break;case 9:case 10:case 13:case 32:k+=Ch(x);break;case 92:k+=Nh(_o()-1,7);continue;case 47:switch(st()){case 42:case 47:co(Th(_h(Me(),_o()),t,n),a);break;default:k+="/"}break;case 123*y:s[c++]=nt(k)*f;case 125*y:case 59:case 0:switch(u){case 0:case 125:j=0;case 59+p:f==-1&&(k=D(k,/\f/g,"")),w>0&&nt(k)-m&&co(w>32?Fu(k+";",r,n,m-1):Fu(D(k," ","")+";",r,n,m-2),a);break;case 59:k+=";";default:if(co(N=Du(k,t,n,c,p,o,s,d,v=[],C=[],m),i),u===123)if(p===0)jo(k,t,N,N,v,i,m,s,C);else switch(h===99&&de(k,3)===110?100:h){case 100:case 108:case 109:case 115:jo(e,N,N,r&&co(Du(e,N,N,0,0,o,s,d,o,v=[],m),C),o,C,m,s,r?v:C);break;default:jo(k,N,N,N,[""],C,0,s,C)}}c=p=w=0,y=f=1,d=k="",m=l;break;case 58:m=1+nt(k),w=x;default:if(y<1){if(u==123)--y;else if(u==125&&y++==0&&Eh()==125)continue}switch(k+=xi(u),u*y){case 38:f=p>0?1:(k+="\f",-1);break;case 44:s[c++]=(nt(k)-1)*f,f=1;break;case 64:st()===45&&(k+=Po(Me())),h=st(),p=m=nt(d=k+=Ph(_o())),u++;break;case 45:x===45&&nt(k)==2&&(y=0)}}return i}function Du(e,t,n,r,o,i,l,s,a,c,p){for(var m=o-1,h=o===0?i:[""],w=ma(h),x=0,y=0,j=0;x<r;++x)for(var f=0,u=Lr(e,m+1,m=yh(y=l[x])),d=e;f<w;++f)(d=Cd(y>0?h[f]+" "+u:D(u,/&\f/g,h[f])))&&(a[j++]=d);return Si(e,t,n,o===0?da:s,a,c,p)}function Th(e,t,n){return Si(e,t,n,kd,xi(kh()),Lr(e,2,-2),0)}function Fu(e,t,n,r){return Si(e,t,n,pa,Lr(e,0,r),Lr(e,r+1,-1),r)}function Tn(e,t){for(var n="",r=ma(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function zh(e,t,n,r){switch(e.type){case gh:if(e.children.length)break;case hh:case pa:return e.return=e.return||e.value;case kd:return"";case Ed:return e.return=e.value+"{"+Tn(e.children,r)+"}";case da:e.value=e.props.join(",")}return nt(n=Tn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Ih(e){var t=ma(e);return function(n,r,o,i){for(var l="",s=0;s<t;s++)l+=e[s](n,r,o,i)||"";return l}}function Rh(e){return function(t){t.root||(t=t.return)&&e(t)}}function Lh(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Mh=function(t,n,r){for(var o=0,i=0;o=i,i=st(),o===38&&i===12&&(n[r]=1),!Mr(i);)Me();return Br(t,ze)},Oh=function(t,n){var r=-1,o=44;do switch(Mr(o)){case 0:o===38&&st()===12&&(n[r]=1),t[r]+=Mh(ze-1,n,r);break;case 2:t[r]+=Po(o);break;case 4:if(o===44){t[++r]=st()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=xi(o)}while(o=Me());return t},$h=function(t,n){return Pd(Oh(_d(t),n))},bu=new WeakMap,Ah=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!bu.get(r))&&!o){bu.set(t,!0);for(var i=[],l=$h(n,i),s=r.props,a=0,c=0;a<l.length;a++)for(var p=0;p<s.length;p++,c++)t.props[c]=i[a]?l[a].replace(/&\f/g,s[p]):s[p]+" "+l[a]}}},Dh=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function jd(e,t){switch(xh(e,t)){case 5103:return A+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return A+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return A+e+ei+e+ye+e+e;case 6828:case 4268:return A+e+ye+e+e;case 6165:return A+e+ye+"flex-"+e+e;case 5187:return A+e+D(e,/(\w+).+(:[^]+)/,A+"box-$1$2"+ye+"flex-$1$2")+e;case 5443:return A+e+ye+"flex-item-"+D(e,/flex-|-self/,"")+e;case 4675:return A+e+ye+"flex-line-pack"+D(e,/align-content|flex-|-self/,"")+e;case 5548:return A+e+ye+D(e,"shrink","negative")+e;case 5292:return A+e+ye+D(e,"basis","preferred-size")+e;case 6060:return A+"box-"+D(e,"-grow","")+A+e+ye+D(e,"grow","positive")+e;case 4554:return A+D(e,/([^-])(transform)/g,"$1"+A+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,A+"$1"),/(image-set)/,A+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,A+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,A+"box-pack:$3"+ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+A+e+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,A+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nt(e)-1-t>6)switch(de(e,t+1)){case 109:if(de(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+A+"$2-$3$1"+ei+(de(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ds(e,"stretch")?jd(D(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(de(e,t+1)!==115)break;case 6444:switch(de(e,nt(e)-3-(~ds(e,"!important")&&10))){case 107:return D(e,":",":"+A)+e;case 101:return D(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+A+(de(e,14)===45?"inline-":"")+"box$3$1"+A+"$2$3$1"+ye+"$2box$3")+e}break;case 5936:switch(de(e,t+11)){case 114:return A+e+ye+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return A+e+ye+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return A+e+ye+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return A+e+ye+e+e}return e}var Fh=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case pa:t.return=jd(t.value,t.length);break;case Ed:return Tn([er(t,{value:D(t.value,"@","@"+A)})],o);case da:if(t.length)return Sh(t.props,function(i){switch(wh(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Tn([er(t,{props:[D(i,/:(read-\w+)/,":"+ei+"$1")]})],o);case"::placeholder":return Tn([er(t,{props:[D(i,/:(plac\w+)/,":"+A+"input-$1")]}),er(t,{props:[D(i,/:(plac\w+)/,":"+ei+"$1")]}),er(t,{props:[D(i,/:(plac\w+)/,ye+"input-$1")]})],o)}return""})}},bh=[Fh],Uh=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var j=y.getAttribute("data-emotion");j.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var o=t.stylisPlugins||bh,i={},l,s=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var j=y.getAttribute("data-emotion").split(" "),f=1;f<j.length;f++)i[j[f]]=!0;s.push(y)});var a,c=[Ah,Dh];{var p,m=[zh,Rh(function(y){p.insert(y)})],h=Ih(c.concat(o,m)),w=function(j){return Tn(jh(j),h)};a=function(j,f,u,d){p=u,w(j?j+"{"+f.styles+"}":f.styles),d&&(x.inserted[f.name]=!0)}}var x={key:n,sheet:new mh({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:a};return x.sheet.hydrate(s),x},Td={exports:{}},U={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ce=typeof Symbol=="function"&&Symbol.for,ha=ce?Symbol.for("react.element"):60103,ga=ce?Symbol.for("react.portal"):60106,ki=ce?Symbol.for("react.fragment"):60107,Ei=ce?Symbol.for("react.strict_mode"):60108,Ci=ce?Symbol.for("react.profiler"):60114,Ni=ce?Symbol.for("react.provider"):60109,_i=ce?Symbol.for("react.context"):60110,ya=ce?Symbol.for("react.async_mode"):60111,Pi=ce?Symbol.for("react.concurrent_mode"):60111,ji=ce?Symbol.for("react.forward_ref"):60112,Ti=ce?Symbol.for("react.suspense"):60113,Bh=ce?Symbol.for("react.suspense_list"):60120,zi=ce?Symbol.for("react.memo"):60115,Ii=ce?Symbol.for("react.lazy"):60116,Vh=ce?Symbol.for("react.block"):60121,Wh=ce?Symbol.for("react.fundamental"):60117,Hh=ce?Symbol.for("react.responder"):60118,Qh=ce?Symbol.for("react.scope"):60119;function De(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ha:switch(e=e.type,e){case ya:case Pi:case ki:case Ci:case Ei:case Ti:return e;default:switch(e=e&&e.$$typeof,e){case _i:case ji:case Ii:case zi:case Ni:return e;default:return t}}case ga:return t}}}function zd(e){return De(e)===Pi}U.AsyncMode=ya;U.ConcurrentMode=Pi;U.ContextConsumer=_i;U.ContextProvider=Ni;U.Element=ha;U.ForwardRef=ji;U.Fragment=ki;U.Lazy=Ii;U.Memo=zi;U.Portal=ga;U.Profiler=Ci;U.StrictMode=Ei;U.Suspense=Ti;U.isAsyncMode=function(e){return zd(e)||De(e)===ya};U.isConcurrentMode=zd;U.isContextConsumer=function(e){return De(e)===_i};U.isContextProvider=function(e){return De(e)===Ni};U.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ha};U.isForwardRef=function(e){return De(e)===ji};U.isFragment=function(e){return De(e)===ki};U.isLazy=function(e){return De(e)===Ii};U.isMemo=function(e){return De(e)===zi};U.isPortal=function(e){return De(e)===ga};U.isProfiler=function(e){return De(e)===Ci};U.isStrictMode=function(e){return De(e)===Ei};U.isSuspense=function(e){return De(e)===Ti};U.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ki||e===Pi||e===Ci||e===Ei||e===Ti||e===Bh||typeof e=="object"&&e!==null&&(e.$$typeof===Ii||e.$$typeof===zi||e.$$typeof===Ni||e.$$typeof===_i||e.$$typeof===ji||e.$$typeof===Wh||e.$$typeof===Hh||e.$$typeof===Qh||e.$$typeof===Vh)};U.typeOf=De;Td.exports=U;var Yh=Td.exports,Id=Yh,Gh={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Xh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Rd={};Rd[Id.ForwardRef]=Gh;Rd[Id.Memo]=Xh;var Kh=!0;function Ld(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var va=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||Kh===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},Md=function(t,n,r){va(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function Jh(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Zh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},qh=/[A-Z]|^ms/g,eg=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Od=function(t){return t.charCodeAt(1)===45},Uu=function(t){return t!=null&&typeof t!="boolean"},hl=Lh(function(e){return Od(e)?e:e.replace(qh,"-$&").toLowerCase()}),Bu=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(eg,function(r,o,i){return rt={name:o,styles:i,next:rt},o})}return Zh[t]!==1&&!Od(t)&&typeof n=="number"&&n!==0?n+"px":n};function Or(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return rt={name:n.name,styles:n.styles,next:rt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)rt={name:r.name,styles:r.styles,next:rt},r=r.next;var o=n.styles+";";return o}return tg(e,t,n)}case"function":{if(e!==void 0){var i=rt,l=n(e);return rt=i,Or(e,t,l)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function tg(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Or(e,t,n[o])+";";else for(var i in n){var l=n[i];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=i+"{"+t[l]+"}":Uu(l)&&(r+=hl(i)+":"+Bu(i,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var s=0;s<l.length;s++)Uu(l[s])&&(r+=hl(i)+":"+Bu(i,l[s])+";");else{var a=Or(e,t,l);switch(i){case"animation":case"animationName":{r+=hl(i)+":"+a+";";break}default:r+=i+"{"+a+"}"}}}return r}var Vu=/label:\s*([^\s;\n{]+)\s*(;|$)/g,rt,xa=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";rt=void 0;var l=t[0];l==null||l.raw===void 0?(o=!1,i+=Or(r,n,l)):i+=l[0];for(var s=1;s<t.length;s++)i+=Or(r,n,t[s]),o&&(i+=l[s]);Vu.lastIndex=0;for(var a="",c;(c=Vu.exec(i))!==null;)a+="-"+c[1];var p=Jh(i)+a;return{name:p,styles:i,next:rt}},ng=function(t){return t()},rg=Ta["useInsertionEffect"]?Ta["useInsertionEffect"]:!1,$d=rg||ng,wa={}.hasOwnProperty,Ad=M.createContext(typeof HTMLElement<"u"?Uh({key:"css"}):null);Ad.Provider;var Dd=function(t){return M.forwardRef(function(n,r){var o=M.useContext(Ad);return t(n,o,r)})},Fd=M.createContext({}),ms="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",og=function(t,n){var r={};for(var o in n)wa.call(n,o)&&(r[o]=n[o]);return r[ms]=t,r},ig=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return va(n,r,o),$d(function(){return Md(n,r,o)}),null},lg=Dd(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[ms],i=[r],l="";typeof e.className=="string"?l=Ld(t.registered,i,e.className):e.className!=null&&(l=e.className+" ");var s=xa(i,void 0,M.useContext(Fd));l+=t.key+"-"+s.name;var a={};for(var c in e)wa.call(e,c)&&c!=="css"&&c!==ms&&(a[c]=e[c]);return a.ref=n,a.className=l,M.createElement(M.Fragment,null,M.createElement(ig,{cache:t,serialized:s,isStringTag:typeof o=="string"}),M.createElement(o,a))}),sg=lg,ag=g.Fragment;function se(e,t,n){return wa.call(t,"css")?g.jsx(sg,og(e,t),n):g.jsx(e,t,n)}function bd(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return xa(t)}var E=function(){var t=bd.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},ug=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(i!=null){var l=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))l=e(i);else{l="";for(var s in i)i[s]&&s&&(l&&(l+=" "),l+=s)}break}default:l=i}l&&(o&&(o+=" "),o+=l)}}return o};function cg(e,t,n){var r=[],o=Ld(e,r,n);return r.length<2?n:o+t(r)}var fg=function(t){var n=t.cache,r=t.serializedArr;return $d(function(){for(var o=0;o<r.length;o++)Md(n,r[o],!1)}),null},gl=Dd(function(e,t){var n=!1,r=[],o=function(){for(var c=arguments.length,p=new Array(c),m=0;m<c;m++)p[m]=arguments[m];var h=xa(p,t.registered);return r.push(h),va(t,h,!1),t.key+"-"+h.name},i=function(){for(var c=arguments.length,p=new Array(c),m=0;m<c;m++)p[m]=arguments[m];return cg(t.registered,o,ug(p))},l={css:o,cx:i,theme:M.useContext(Fd)},s=e.children(l);return n=!0,M.createElement(M.Fragment,null,M.createElement(fg,{cache:t,serializedArr:r}),s)}),dg=Object.defineProperty,pg=(e,t,n)=>t in e?dg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,fo=(e,t,n)=>(pg(e,typeof t!="symbol"?t+"":t,n),n),hs=new Map,po=new WeakMap,Wu=0,mg=void 0;function hg(e){return e?(po.has(e)||(Wu+=1,po.set(e,Wu.toString())),po.get(e)):"0"}function gg(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?hg(e.root):e[t]}`).toString()}function yg(e){let t=gg(e),n=hs.get(t);if(!n){const r=new Map;let o;const i=new IntersectionObserver(l=>{l.forEach(s=>{var a;const c=s.isIntersecting&&o.some(p=>s.intersectionRatio>=p);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=c),(a=r.get(s.target))==null||a.forEach(p=>{p(c,s)})})},e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},hs.set(t,n)}return n}function Ud(e,t,n={},r=mg){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:o,observer:i,elements:l}=yg(n);let s=l.get(e)||[];return l.has(e)||l.set(e,s),s.push(t),i.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(l.delete(e),i.unobserve(e)),l.size===0&&(i.disconnect(),hs.delete(o))}}function vg(e){return typeof e.children!="function"}var Hu=class extends M.Component{constructor(e){super(e),fo(this,"node",null),fo(this,"_unobserveCb",null),fo(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),fo(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),vg(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:i}=this.props;this._unobserveCb=Ud(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:w,entry:x}=this.state;return e({inView:w,entry:x,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:o,rootMargin:i,onChange:l,skip:s,trackVisibility:a,delay:c,initialInView:p,fallbackInView:m,...h}=this.props;return M.createElement(t||"div",{ref:this.handleNode,...h},e)}};function Bd({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:i,skip:l,initialInView:s,fallbackInView:a,onChange:c}={}){var p;const[m,h]=M.useState(null),w=M.useRef(),[x,y]=M.useState({inView:!!s,entry:void 0});w.current=c,M.useEffect(()=>{if(l||!m)return;let d;return d=Ud(m,(v,C)=>{y({inView:v,entry:C}),w.current&&w.current(v,C),C.isIntersecting&&i&&d&&(d(),d=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},a),()=>{d&&d()}},[Array.isArray(e)?e.toString():e,m,o,r,i,l,n,a,t]);const j=(p=x.entry)==null?void 0:p.target,f=M.useRef();!m&&j&&!i&&!l&&f.current!==j&&(f.current=j,y({inView:!!s,entry:void 0}));const u=[h,x.inView,x.entry];return u.ref=u[0],u.inView=u[1],u.entry=u[2],u}var Vd={exports:{}},B={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sa=Symbol.for("react.element"),ka=Symbol.for("react.portal"),Ri=Symbol.for("react.fragment"),Li=Symbol.for("react.strict_mode"),Mi=Symbol.for("react.profiler"),Oi=Symbol.for("react.provider"),$i=Symbol.for("react.context"),xg=Symbol.for("react.server_context"),Ai=Symbol.for("react.forward_ref"),Di=Symbol.for("react.suspense"),Fi=Symbol.for("react.suspense_list"),bi=Symbol.for("react.memo"),Ui=Symbol.for("react.lazy"),wg=Symbol.for("react.offscreen"),Wd;Wd=Symbol.for("react.module.reference");function He(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Sa:switch(e=e.type,e){case Ri:case Mi:case Li:case Di:case Fi:return e;default:switch(e=e&&e.$$typeof,e){case xg:case $i:case Ai:case Ui:case bi:case Oi:return e;default:return t}}case ka:return t}}}B.ContextConsumer=$i;B.ContextProvider=Oi;B.Element=Sa;B.ForwardRef=Ai;B.Fragment=Ri;B.Lazy=Ui;B.Memo=bi;B.Portal=ka;B.Profiler=Mi;B.StrictMode=Li;B.Suspense=Di;B.SuspenseList=Fi;B.isAsyncMode=function(){return!1};B.isConcurrentMode=function(){return!1};B.isContextConsumer=function(e){return He(e)===$i};B.isContextProvider=function(e){return He(e)===Oi};B.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sa};B.isForwardRef=function(e){return He(e)===Ai};B.isFragment=function(e){return He(e)===Ri};B.isLazy=function(e){return He(e)===Ui};B.isMemo=function(e){return He(e)===bi};B.isPortal=function(e){return He(e)===ka};B.isProfiler=function(e){return He(e)===Mi};B.isStrictMode=function(e){return He(e)===Li};B.isSuspense=function(e){return He(e)===Di};B.isSuspenseList=function(e){return He(e)===Fi};B.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ri||e===Mi||e===Li||e===Di||e===Fi||e===wg||typeof e=="object"&&e!==null&&(e.$$typeof===Ui||e.$$typeof===bi||e.$$typeof===Oi||e.$$typeof===$i||e.$$typeof===Ai||e.$$typeof===Wd||e.getModuleId!==void 0)};B.typeOf=He;Vd.exports=B;var Sg=Vd.exports;E`
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
`;E`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;E`
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
`;E`
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
`;E`
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
`;E`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;E`
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
`;E`
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
`;E`
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
`;E`
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
`;E`
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
`;E`
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
`;E`
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
`;const kg=E`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Eg=E`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Cg=E`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ng=E`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,_g=E`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ea=E`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Pg=E`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,jg=E`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Tg=E`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,zg=E`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ig=E`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Rg=E`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Lg=E`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Mg({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=Ea,iterationCount:o=1}){return bd`
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
  `}function Og(e){return e==null}function $g(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Hd(e,t){return n=>n?e():t()}function $r(e){return Hd(e,()=>null)}function gs(e){return $r(()=>({opacity:0}))(e)}const Qd=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:i=0,keyframes:l=Ea,triggerOnce:s=!1,className:a,style:c,childClassName:p,childStyle:m,children:h,onVisibilityChange:w}=e,x=M.useMemo(()=>Mg({keyframes:l,duration:o}),[o,l]);return Og(h)?null:$g(h)?se(Dg,{...e,animationStyles:x,children:String(h)}):Sg.isFragment(h)?se(Yd,{...e,animationStyles:x}):se(ag,{children:M.Children.map(h,(y,j)=>{if(!M.isValidElement(y))return null;const f=r+(t?j*o*n:0);switch(y.type){case"ol":case"ul":return se(gl,{children:({cx:u})=>se(y.type,{...y.props,className:u(a,y.props.className),style:Object.assign({},c,y.props.style),children:se(Qd,{...e,children:y.props.children})})});case"li":return se(Hu,{threshold:i,triggerOnce:s,onChange:w,children:({inView:u,ref:d})=>se(gl,{children:({cx:v})=>se(y.type,{...y.props,ref:d,className:v(p,y.props.className),css:$r(()=>x)(u),style:Object.assign({},m,y.props.style,gs(!u),{animationDelay:f+"ms"})})})});default:return se(Hu,{threshold:i,triggerOnce:s,onChange:w,children:({inView:u,ref:d})=>se("div",{ref:d,className:a,css:$r(()=>x)(u),style:Object.assign({},c,gs(!u),{animationDelay:f+"ms"}),children:se(gl,{children:({cx:v})=>se(y.type,{...y.props,className:v(p,y.props.className),style:Object.assign({},m,y.props.style)})})})})}})})},Ag={display:"inline-block",whiteSpace:"pre"},Dg=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:i=1e3,fraction:l=0,triggerOnce:s=!1,className:a,style:c,children:p,onVisibilityChange:m}=e,{ref:h,inView:w}=Bd({triggerOnce:s,threshold:l,onChange:m});return Hd(()=>se("div",{ref:h,className:a,style:Object.assign({},c,Ag),children:p.split("").map((x,y)=>se("span",{css:$r(()=>t)(w),style:{animationDelay:o+y*i*r+"ms"},children:x},y))}),()=>se(Yd,{...e,children:p}))(n)},Yd=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:i,children:l,onVisibilityChange:s}=e,{ref:a,inView:c}=Bd({triggerOnce:r,threshold:n,onChange:s});return se("div",{ref:a,className:o,css:$r(()=>t)(c),style:Object.assign({},i,gs(!c)),children:l})};E`
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
`;E`
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
`;E`
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
`;E`
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
`;E`
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
`;E`
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
`;E`
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
`;E`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;E`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;E`
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
`;const Fg=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,bg=E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Ug=E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Bg=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Vg=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Wg=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Hg=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Qg=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Yg=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Gg=E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Xg=E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Kg=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Jg=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function Zg(e,t,n){switch(n){case"bottom-left":return t?bg:Eg;case"bottom-right":return t?Ug:Cg;case"down":return e?t?Vg:_g:t?Bg:Ng;case"left":return e?t?Hg:Pg:t?Wg:Ea;case"right":return e?t?Yg:Tg:t?Qg:jg;case"top-left":return t?Gg:zg;case"top-right":return t?Xg:Ig;case"up":return e?t?Jg:Lg:t?Kg:Rg;default:return t?Fg:kg}}const Ca=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,i=M.useMemo(()=>Zg(t,r,n),[t,n,r]);return se(Qd,{keyframes:i,...o})};E`
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
`;E`
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
`;E`
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
`;E`
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
`;E`
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
`;E`
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
`;E`
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
`;E`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;E`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;E`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;E`
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
`;E`
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
`;E`
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
`;E`
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
`;E`
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
`;E`
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
`;E`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;E`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;E`
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
`;function qg(){return g.jsxs("div",{className:oe("flex flex-col gap-16 bg-right-top bg-no-repeat",Un),style:{backgroundImage:`url("${uh}")`},id:dd,children:[g.jsx(vi,{title:["My","Expertise"]}),g.jsx(e1,{})]})}const e1=()=>g.jsx("div",{className:"flex flex-wrap gap-6 justify-center",children:fh.map((e,t)=>g.jsx(Ca,{direction:"up",delay:50*t,triggerOnce:!0,children:g.jsx(ch,{content:e})}))}),t1=()=>g.jsx("div",{className:"absolute top-6 right-1/2 w-5/6 max-w-6xl h-12 z-20",children:g.jsxs("ul",{className:"relative -right-1/2 list-none px-8 py-3 bg-slate-900 bg-opacity-90 shadow flex justify-between leading-tight text-neutral-300",children:[g.jsx("li",{className:"text-base ",children:"Logo"}),g.jsxs("div",{className:"text-sm flex gap-6 justify-evenly",children:[g.jsx(tr,{text:"Home",sectionIdToGoTo:md}),g.jsx(tr,{text:"Expertise",sectionIdToGoTo:dd}),g.jsx(tr,{text:"Work",sectionIdToGoTo:pd}),g.jsx(tr,{text:"Testimonials",sectionIdToGoTo:gd}),g.jsx(tr,{text:"Contact",sectionIdToGoTo:hd})]})]})}),tr=({text:e,sectionIdToGoTo:t})=>{const[n,r]=M.useState(!1);return g.jsx("a",{href:`#${t}`,className:"hover:font-semibold",children:g.jsxs("li",{className:"flex items-center gap-2 cursor-pointer",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[g.jsx(n1,{isHovered:n})," ",e]})})},n1=({isHovered:e})=>g.jsx("div",{className:oe("w-2 h-2 rounded-full border border-teal-500",e&&"bg-teal-500 border-none")}),r1="/assets/hexagonal-pattern-background-c9dce096.svg",o1="/assets/timelineBranchRight-e3bf1bfb.svg",i1="/assets/timelineBranchLeft-7783d5d6.svg";function l1({content:e}){return g.jsxs("div",{className:oe("flex flex-col gap-4 pt-16 md:max-w-[30rem] max-w-none"),children:[g.jsx("p",{className:"text-neutral-300 text-base font-normal leading-loose",children:e.date}),g.jsxs("div",{className:"left-0 top-0 bg-white bg-opacity-10 rounded-lg p-8 flex flex-col gap-2",style:{minHeight:"15rem"},children:[g.jsx("h3",{className:" text-teal-500 text-lg font-medium leading-relaxed",style:{fontFamily:"Roboto Mono"},children:e.companyName}),g.jsx("h4",{className:" text-neutral-300 text-base font-bold leading-normal",children:e.jobTitle}),g.jsx("p",{className:" text-neutral-300 text-sm font-normal leading-tight text-justify",children:e.description})]})]})}const Qu=[{date:"May 2023 - Present",companyName:"Apollo Group (Y-Combinator Startup)",jobTitle:"Full Stack Software Engineer",description:"Apollo Group Is The Next Project Of The Airlift Technologies Team, That Raised $120M+ In Capital Before Shutting Down.I Have Helped Launch 2 MVP Products, Involving GPT-Based Chatbots And React-Based Web Applications. I Am Working In A Dynamic Startup Environment With A Small Team Of Software Engineers."},{date:"August 2022 - April 2023",companyName:"Educative",jobTitle:"Full Stack Software Engineer",description:"I worked in the Learner Experience team at Educative where we dealt with upto 80% of the codebase and shipped features directly used by over a million users. Good programming practices, scalability, and healthy teamwork were at the heart of our work at Educative."},{date:"May - July 2022",companyName:"Airlift Technologies Pakistan",jobTitle:"Full Stack Software Engineer",description:"Airlift was the largest startup in the history of Pakistan. Joined with preference for Full Stack/Backend Development and ended due to Airlift shutting down in Pakistan."},{date:"August 2021 - April 2023",companyName:"Open Data Pakistan (Funded by Higher Education Commission)",jobTitle:"Team Lead Software Engineer",description:"Built on the Open Source CKAN project | Developed custom plugins and themes | Managed team of 3 developers | Upgraded the production AWS EC2 instance from CKAN 2.8 to CKAN 2.9 | This project also acted as my Senior Year Project."},{date:"December 2021 - April 2022",companyName:"Institute of Emerging Careers (IEC)",jobTitle:"Team Lead Software Engineer",description:`Designed for Low-Computer-Literate Students from non-Urban Areas | System optimized for low-power systems | Server-side routing | Ideated 4 scalable independent systems for the 4 phases of the IEC Process (Acquisition, Learning, Placement, Community) that work in harmony.
      For over a year I worked as the only engineer on the project. Afterwards as a 6-month exit plan, I helped build a team and assumed the role of Engineering Manager and Mentor before finally leaving the company when the team no longer needed my oversight.`}];function Yu(){const{innerWidth:e,innerHeight:t}=window;return{width:e,height:t}}function s1(){const[e,t]=M.useState(Yu());return M.useEffect(()=>{function n(){t(Yu())}return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}function a1(){const{width:e}=s1();return g.jsxs("div",{className:"flex text-light h-full",children:[g.jsx("div",{className:"h-full hidden md:flex flex-col justify-start items-end pt-12",style:{flexBasis:"calc(50% - 0.375rem)"},children:Qu.map((t,n)=>g.jsx(Gu,{content:t,side:"LEFT",className:n%2===0?"invisible":"visible"}))}),g.jsx("div",{className:"w-1.5 min-h-max bg-gradient-to-b from-neutral-900/60 via-20% via-cyan-500/60 to-neutral-900/60"}),g.jsx("div",{className:"h-full flex flex-col justify-start items-start pt-12 md:basis-[calc(50%-0.375rem)]",children:Qu.map((t,n)=>g.jsx(Gu,{content:t,side:"RIGHT",className:oe(n%2!==0&&e>=786?"invisible":"")}))})]})}const Gu=({content:e,side:t,className:n})=>g.jsx(Ca,{direction:"up",triggerOnce:!0,children:g.jsxs("div",{className:oe(`flex gap-6 ${yi}`,t==="LEFT"&&"flex-row-reverse",n),children:[g.jsx("img",{src:t==="RIGHT"?o1:i1,className:"w-10 h-auto self-start"}),g.jsx(l1,{content:e})]})});function u1(){return g.jsxs("div",{className:oe("flex flex-col gap-16 relative overflow-clip",Un),id:pd,children:[g.jsxs("div",{className:"relative z-10 flex flex-col gap-16",children:[g.jsx(vi,{title:["My Work","Experience"]}),g.jsx(a1,{})]}),g.jsx("div",{className:"absolute",children:g.jsx("img",{src:r1,className:"opacity-20"})})]})}const yl="/assets/testomonial-profile-picture-423b5de3.png",c1="/assets/wasiq-71392339.jpeg",Na=[{quote:"I had the pleasure of collaborating with Rohan on a search feature for our platform, and I was thoroughly impressed with his skills as an engineer. Rohan is incredibly intelligent, and responsible, and has a remarkable ability to take ownership and develop products.",person:{name:"Wasiq Noor Qasmi",image:c1,title:"Senior Software Engineer | Mentor"}},{quote:"Lorem ipsum dolor sit amet consectetur. Id faucibus sollicitudin faucibus lectus placerat. Dui pellentesque justo at elit faucibus pellentesque. Pulvinar et non arcu vel.",person:{name:"Hamza Khan",image:yl,title:"Agile Coach | Speaker | Trainer"}},{quote:"Lorem ipsum dolor sit amet consectetur. Id faucibus sollicitudin faucibus lectus placerat. Dui pellentesque justo at elit faucibus pellentesque. Pulvinar et non arcu vel.",person:{name:"Minahil Tanveer",image:yl,title:"Agile Coach | Speaker | Trainer"}},{quote:"Lorem ipsum dolor sit amet consectetur. Id faucibus sollicitudin faucibus lectus placerat. Dui pellentesque justo at elit faucibus pellentesque. Pulvinar et non arcu vel.",person:{name:"Ali Sethi",image:yl,title:"Singer | Composer"}}];function f1({testimonialsToDisplayRange:e}){return g.jsx("div",{className:"flex flex-wrap justify-center gap-16",children:Na.slice(e[0],e[1]).map(t=>g.jsx(d1,{content:t}))})}const d1=({content:e})=>g.jsx(Ca,{direction:"up",triggerOnce:!0,children:g.jsxs("div",{className:`bg-zinc-400 bg-opacity-20 flex flex-col justify-around shadow p-6 rounded-lg ${yi}`,style:{width:"21.625rem",height:"22.375rem"},children:[g.jsxs("div",{className:"flex flex-col gap-4",children:[g.jsx("div",{children:g.jsx("i",{className:"fa-solid fa-quote-left fa-2xl text-teal-500"})}),g.jsx("p",{className:"text-light text-justify leading-tight overflow-ellipsis line-clamp-[7]",children:e.quote})]}),g.jsx(p1,{content:e.person})]})}),p1=({content:e})=>g.jsxs("div",{className:"flex gap-4",children:[g.jsx("img",{src:e.image,className:"rounded-full object-fill w-16 h-16"}),g.jsxs("div",{className:"flex flex-col gap-1",children:[g.jsx("h5",{className:"text-light text-lg font-medium leading-relaxed",style:{fontFamily:"Roboto Mono"},children:e.name}),g.jsx("p",{className:"text-stone-300 text-sm font-normal capitalize leading-tight",children:e.title})]})]}),Xu=({direction:e,onClick:t,disabled:n})=>{const[r,o]=M.useState(!1);return g.jsxs("button",{className:"bg-white/10 rounded-full w-16 h-16 relative",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),onClick:t,disabled:n,children:[g.jsx("div",{className:"relative z-10",children:g.jsx("i",{className:`fa-solid fa-lg text-light ${e==="LEFT"?"fa-chevron-left":"fa-chevron-right"}`})}),r&&!n&&g.jsx("div",{className:"w-16 h-16 bg-sky-900 rounded-full blur-lg absolute z-0 top-0 left-0"})]})},m1=({testimonialsToDisplayRange:e,setTestimonialsToDisplayRange:t})=>g.jsxs("div",{className:"flex gap-8",children:[g.jsx(Xu,{direction:"LEFT",disabled:e[0]===0,onClick:()=>t(n=>[n[0]-1,n[1]-1])}),g.jsx(Xu,{direction:"RIGHT",disabled:e[1]===Na.length,onClick:()=>t(n=>[n[0]+1,n[1]+1])})]}),Ku=3;function h1(){const[e,t]=M.useState([0,Ku]);return g.jsxs("div",{className:oe("relative",Un),id:gd,children:[g.jsxs("div",{className:"flex flex-col gap-16 relative z-10",children:[g.jsxs("div",{className:"flex justify-between items-center",children:[g.jsx(vi,{title:["My","Testimonials"]}),Na.length>Ku&&g.jsx(m1,{testimonialsToDisplayRange:e,setTestimonialsToDisplayRange:t})]}),g.jsx(f1,{testimonialsToDisplayRange:e})]}),g.jsx(qo,{variant:Rr.BLUE,className:"-left-24 top-0 bg-opacity-50"}),g.jsx(qo,{variant:Rr.RED,className:"-right-24 bottom-0 bg-opacity-50"})]})}function g1({content:e}){const[t,n]=M.useState(!1);return g.jsx("a",{href:e.link,style:{height:"28rem"},target:"_blank",children:g.jsxs("div",{className:"bg-zinc-300/10 rounded-lg text-light transition-all",style:{width:"21.25rem",height:t?"28.5rem":"27rem"},onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[g.jsxs("div",{className:"relative w-full h-56 flex justify-center items-center bg-cyan-400/10 overflow-clip",children:[g.jsx("img",{src:e.thumbnail,className:"relative z-10 max-h-52 max-w-[80%]"}),g.jsx("div",{className:oe("absolute z-0 w-36 h-36 rounded-full blur-lg bg-cyan-500/20 transition-all",t&&"w-11/12 h-44 bg-cyan-500/40")})]}),g.jsxs("div",{className:"flex flex-col justify-between px-6 h-52",children:[g.jsxs("div",{className:"flex flex-col gap-3 py-6 flex-grow max-h-52",children:[g.jsx("h4",{className:"font-medium tracking-tight leading-none line-clamp-3 text-ellipsis",style:{fontFamily:"Roboto Mono"},children:e.title}),g.jsxs("div",{className:"flex gap-2",children:[g.jsx("div",{className:"w-px h-6 origin-top-left border border-cyan-500"}),g.jsx("p",{children:e.datePosted})]}),g.jsx("p",{className:"text-sm leading-tight text-ellipsis line-clamp-3",children:e.description})]}),g.jsxs("a",{href:e.link,className:oe(t?"block":"hidden","text-teal-500 text-sm font-medium font-['Roboto Mono'] leading-tight"),target:"_blank",children:["Read More ",g.jsx("i",{className:"fa-solid fa-chevron-right"})]})]})]})})}const y1="/assets/supertokens-blog-post-467ca9b8.png",v1="/assets/react-state-management-551cfd8e.png",x1="/assets/typescript-python-2e7c5894.jpeg",w1=[{title:"Setting up Supertokens with a NextJS 13 Frontend and an ExpressJS Backend",link:"https://rohanhussain.com/blog/post/supertokens-with-nextjs-and-expressjs/",description:"This article teaches you how to locally set up a NextJS 13 frontend (with App Router as well as Pages Router) and a separate ExpressJS backend and also explains how the whole setup works.",thumbnail:y1,datePosted:"August 12, 2023"},{title:"State Management Tools in React",link:"https://rohanhussain.com/blog/post/react-state-management-tools/",description:"ContextAPI, Redux, Zustand, Jotai, what to use?",thumbnail:v1,datePosted:"May 8, 2023"},{title:"Typescript-like Types in Python 3",link:"https://rohanhussain.com/blog/post/typescript-like-types-in-python/",description:"def sum(x: int, y: int) -> int",thumbnail:x1,datePosted:"February 14, 2023"}];function S1(){return g.jsxs("div",{className:oe("flex flex-col gap-16",Un),children:[g.jsx(vi,{title:["My","Blog"]}),g.jsx("div",{className:"flex flex-wrap gap-12 justify-center",style:{gap:"4.375rem"},children:w1.slice(0,3).map(e=>g.jsx(g1,{content:e}))})]})}function k1(){return g.jsxs("div",{className:oe("py-10 w-full h-44","flex flex-col gap-4 items-center","bg-gradient-to-b from-fuchsia-950/20 from-10 to-cyan-400/0",Un),id:hd,children:[g.jsxs("div",{className:"flex gap-8",children:[g.jsx(Tt,{iconClassNames:"fa-solid fa-phone"}),g.jsx(Tt,{iconClassNames:"fa-regular fa-envelope"}),g.jsx(Tt,{iconClassNames:"fa-brands fa-github"}),g.jsx(Tt,{iconClassNames:"fa-brands fa-linkedin-in"})]}),g.jsx("p",{className:"text-light",children:"Feel free to contact me"})]})}function E1(){return g.jsxs("div",{className:"bg-slate-950 w-full overflow-x-clip min-h-screen py-6 flex flex-col gap-20",children:[g.jsx(t1,{}),g.jsx(ah,{}),g.jsx(qg,{}),g.jsx(u1,{}),g.jsx(h1,{}),g.jsx(S1,{}),g.jsx(k1,{})]})}vl.createRoot(document.getElementById("root")).render(g.jsx(lc.StrictMode,{children:g.jsx(E1,{})}));
