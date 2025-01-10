function Qd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Yd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ku={exports:{}},ri={},Ju={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fr=Symbol.for("react.element"),Gd=Symbol.for("react.portal"),Xd=Symbol.for("react.fragment"),Kd=Symbol.for("react.strict_mode"),Jd=Symbol.for("react.profiler"),Zd=Symbol.for("react.provider"),qd=Symbol.for("react.context"),ep=Symbol.for("react.forward_ref"),tp=Symbol.for("react.suspense"),np=Symbol.for("react.memo"),rp=Symbol.for("react.lazy"),Na=Symbol.iterator;function op(e){return e===null||typeof e!="object"?null:(e=Na&&e[Na]||e["@@iterator"],typeof e=="function"?e:null)}var Zu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qu=Object.assign,ec={};function Bn(e,t,n){this.props=e,this.context=t,this.refs=ec,this.updater=n||Zu}Bn.prototype.isReactComponent={};Bn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Bn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function tc(){}tc.prototype=Bn.prototype;function vs(e,t,n){this.props=e,this.context=t,this.refs=ec,this.updater=n||Zu}var xs=vs.prototype=new tc;xs.constructor=vs;qu(xs,Bn.prototype);xs.isPureReactComponent=!0;var _a=Array.isArray,nc=Object.prototype.hasOwnProperty,ws={current:null},rc={key:!0,ref:!0,__self:!0,__source:!0};function oc(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)nc.call(t,r)&&!rc.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Fr,type:e,key:i,ref:l,props:o,_owner:ws.current}}function ip(e,t){return{$$typeof:Fr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ss(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fr}function lp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ja=/\/+/g;function Hi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?lp(""+e.key):t.toString(36)}function yo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Fr:case Gd:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Hi(l,0):r,_a(o)?(n="",e!=null&&(n=e.replace(ja,"$&/")+"/"),yo(o,t,n,"",function(c){return c})):o!=null&&(Ss(o)&&(o=ip(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ja,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",_a(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+Hi(i,s);l+=yo(i,t,n,a,o)}else if(a=op(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+Hi(i,s++),l+=yo(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Xr(e,t,n){if(e==null)return e;var r=[],o=0;return yo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function sp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},vo={transition:null},ap={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:vo,ReactCurrentOwner:ws};O.Children={map:Xr,forEach:function(e,t,n){Xr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Xr(e,function(){t++}),t},toArray:function(e){return Xr(e,function(t){return t})||[]},only:function(e){if(!Ss(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Bn;O.Fragment=Xd;O.Profiler=Jd;O.PureComponent=vs;O.StrictMode=Kd;O.Suspense=tp;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ap;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=qu({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ws.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)nc.call(t,a)&&!rc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Fr,type:e.type,key:o,ref:i,props:r,_owner:l}};O.createContext=function(e){return e={$$typeof:qd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Zd,_context:e},e.Consumer=e};O.createElement=oc;O.createFactory=function(e){var t=oc.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:ep,render:e}};O.isValidElement=Ss;O.lazy=function(e){return{$$typeof:rp,_payload:{_status:-1,_result:e},_init:sp}};O.memo=function(e,t){return{$$typeof:np,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=vo.transition;vo.transition={};try{e()}finally{vo.transition=t}};O.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};O.useCallback=function(e,t){return Ee.current.useCallback(e,t)};O.useContext=function(e){return Ee.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};O.useEffect=function(e,t){return Ee.current.useEffect(e,t)};O.useId=function(){return Ee.current.useId()};O.useImperativeHandle=function(e,t,n){return Ee.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return Ee.current.useMemo(e,t)};O.useReducer=function(e,t,n){return Ee.current.useReducer(e,t,n)};O.useRef=function(e){return Ee.current.useRef(e)};O.useState=function(e){return Ee.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return Ee.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return Ee.current.useTransition()};O.version="18.2.0";Ju.exports=O;var L=Ju.exports;const ic=Yd(L),Pa=Qd({__proto__:null,default:ic},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var up=L,cp=Symbol.for("react.element"),fp=Symbol.for("react.fragment"),dp=Object.prototype.hasOwnProperty,pp=up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mp={key:!0,ref:!0,__self:!0,__source:!0};function lc(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)dp.call(t,r)&&!mp.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:cp,type:e,key:i,ref:l,props:o,_owner:pp.current}}ri.Fragment=fp;ri.jsx=lc;ri.jsxs=lc;Ku.exports=ri;var h=Ku.exports,xl={},sc={exports:{}},$e={},ac={exports:{}},uc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,T){var R=_.length;_.push(T);e:for(;0<R;){var V=R-1>>>1,J=_[V];if(0<o(J,T))_[V]=T,_[R]=J,R=V;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var T=_[0],R=_.pop();if(R!==T){_[0]=R;e:for(var V=0,J=_.length,Yr=J>>>1;V<Yr;){var Qt=2*(V+1)-1,Wi=_[Qt],Yt=Qt+1,Gr=_[Yt];if(0>o(Wi,R))Yt<J&&0>o(Gr,Wi)?(_[V]=Gr,_[Yt]=R,V=Yt):(_[V]=Wi,_[Qt]=R,V=Qt);else if(Yt<J&&0>o(Gr,R))_[V]=Gr,_[Yt]=R,V=Yt;else break e}}return T}function o(_,T){var R=_.sortIndex-T.sortIndex;return R!==0?R:_.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],c=[],p=1,m=null,g=3,w=!1,x=!1,y=!1,P=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(_){for(var T=n(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=_)r(c),T.sortIndex=T.expirationTime,t(a,T);else break;T=n(c)}}function v(_){if(y=!1,d(_),!x)if(n(a)!==null)x=!0,wt(C);else{var T=n(c);T!==null&&dn(v,T.startTime-_)}}function C(_,T){x=!1,y&&(y=!1,f(z),z=-1),w=!0;var R=g;try{for(d(T),m=n(a);m!==null&&(!(m.expirationTime>T)||_&&!we());){var V=m.callback;if(typeof V=="function"){m.callback=null,g=m.priorityLevel;var J=V(m.expirationTime<=T);T=e.unstable_now(),typeof J=="function"?m.callback=J:m===n(a)&&r(a),d(T)}else r(a);m=n(a)}if(m!==null)var Yr=!0;else{var Qt=n(c);Qt!==null&&dn(v,Qt.startTime-T),Yr=!1}return Yr}finally{m=null,g=R,w=!1}}var N=!1,k=null,z=-1,H=5,M=-1;function we(){return!(e.unstable_now()-M<H)}function D(){if(k!==null){var _=e.unstable_now();M=_;var T=!0;try{T=k(!0,_)}finally{T?xt():(N=!1,k=null)}}else N=!1}var xt;if(typeof u=="function")xt=function(){u(D)};else if(typeof MessageChannel<"u"){var Ht=new MessageChannel,Qr=Ht.port2;Ht.port1.onmessage=D,xt=function(){Qr.postMessage(null)}}else xt=function(){P(D,0)};function wt(_){k=_,N||(N=!0,xt())}function dn(_,T){z=P(function(){_(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){x||w||(x=!0,wt(C))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(_){switch(g){case 1:case 2:case 3:var T=3;break;default:T=g}var R=g;g=T;try{return _()}finally{g=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,T){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var R=g;g=_;try{return T()}finally{g=R}},e.unstable_scheduleCallback=function(_,T,R){var V=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?V+R:V):R=V,_){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=R+J,_={id:p++,callback:T,priorityLevel:_,startTime:R,expirationTime:J,sortIndex:-1},R>V?(_.sortIndex=R,t(c,_),n(a)===null&&_===n(c)&&(y?(f(z),z=-1):y=!0,dn(v,R-V))):(_.sortIndex=J,t(a,_),x||w||(x=!0,wt(C))),_},e.unstable_shouldYield=we,e.unstable_wrapCallback=function(_){var T=g;return function(){var R=g;g=T;try{return _.apply(this,arguments)}finally{g=R}}}})(uc);ac.exports=uc;var hp=ac.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cc=L,Oe=hp;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fc=new Set,xr={};function un(e,t){Ln(e,t),Ln(e+"Capture",t)}function Ln(e,t){for(xr[e]=t,e=0;e<t.length;e++)fc.add(t[e])}var pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wl=Object.prototype.hasOwnProperty,gp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,za={},Ta={};function yp(e){return wl.call(Ta,e)?!0:wl.call(za,e)?!1:gp.test(e)?Ta[e]=!0:(za[e]=!0,!1)}function vp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xp(e,t,n,r){if(t===null||typeof t>"u"||vp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ce(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new Ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new Ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new Ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new Ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new Ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new Ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var ks=/[\-:]([a-z])/g;function Es(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ks,Es);me[t]=new Ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ks,Es);me[t]=new Ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ks,Es);me[t]=new Ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Cs(e,t,n,r){var o=me.hasOwnProperty(t)?me[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(xp(t,n,o,r)&&(n=null),r||o===null?yp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var yt=cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Kr=Symbol.for("react.element"),mn=Symbol.for("react.portal"),hn=Symbol.for("react.fragment"),Ns=Symbol.for("react.strict_mode"),Sl=Symbol.for("react.profiler"),dc=Symbol.for("react.provider"),pc=Symbol.for("react.context"),_s=Symbol.for("react.forward_ref"),kl=Symbol.for("react.suspense"),El=Symbol.for("react.suspense_list"),js=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),mc=Symbol.for("react.offscreen"),Ra=Symbol.iterator;function Yn(e){return e===null||typeof e!="object"?null:(e=Ra&&e[Ra]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,Qi;function ir(e){if(Qi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qi=t&&t[1]||""}return`
`+Qi+e}var Yi=!1;function Gi(e,t){if(!e||Yi)return"";Yi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Yi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ir(e):""}function wp(e){switch(e.tag){case 5:return ir(e.type);case 16:return ir("Lazy");case 13:return ir("Suspense");case 19:return ir("SuspenseList");case 0:case 2:case 15:return e=Gi(e.type,!1),e;case 11:return e=Gi(e.type.render,!1),e;case 1:return e=Gi(e.type,!0),e;default:return""}}function Cl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hn:return"Fragment";case mn:return"Portal";case Sl:return"Profiler";case Ns:return"StrictMode";case kl:return"Suspense";case El:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pc:return(e.displayName||"Context")+".Consumer";case dc:return(e._context.displayName||"Context")+".Provider";case _s:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case js:return t=e.displayName||null,t!==null?t:Cl(e.type)||"Memo";case Ct:t=e._payload,e=e._init;try{return Cl(e(t))}catch{}}return null}function Sp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cl(t);case 8:return t===Ns?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kp(e){var t=hc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jr(e){e._valueTracker||(e._valueTracker=kp(e))}function gc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=hc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Io(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Nl(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ia(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yc(e,t){t=t.checked,t!=null&&Cs(e,"checked",t,!1)}function _l(e,t){yc(e,t);var n=Ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?jl(e,t.type,n):t.hasOwnProperty("defaultValue")&&jl(e,t.type,Ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ma(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function jl(e,t,n){(t!=="number"||Io(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var lr=Array.isArray;function _n(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ft(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Pl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function La(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(lr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ft(n)}}function vc(e,t){var n=Ft(t.value),r=Ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Oa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zr,wc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zr=Zr||document.createElement("div"),Zr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ep=["Webkit","ms","Moz","O"];Object.keys(ur).forEach(function(e){Ep.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ur[t]=ur[e]})});function Sc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ur.hasOwnProperty(e)&&ur[e]?(""+t).trim():t+"px"}function kc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Sc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Cp=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tl(e,t){if(t){if(Cp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Rl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Il=null;function Ps(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ml=null,jn=null,Pn=null;function $a(e){if(e=Vr(e)){if(typeof Ml!="function")throw Error(S(280));var t=e.stateNode;t&&(t=ai(t),Ml(e.stateNode,e.type,t))}}function Ec(e){jn?Pn?Pn.push(e):Pn=[e]:jn=e}function Cc(){if(jn){var e=jn,t=Pn;if(Pn=jn=null,$a(e),t)for(e=0;e<t.length;e++)$a(t[e])}}function Nc(e,t){return e(t)}function _c(){}var Xi=!1;function jc(e,t,n){if(Xi)return e(t,n);Xi=!0;try{return Nc(e,t,n)}finally{Xi=!1,(jn!==null||Pn!==null)&&(_c(),Cc())}}function Sr(e,t){var n=e.stateNode;if(n===null)return null;var r=ai(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Ll=!1;if(pt)try{var Gn={};Object.defineProperty(Gn,"passive",{get:function(){Ll=!0}}),window.addEventListener("test",Gn,Gn),window.removeEventListener("test",Gn,Gn)}catch{Ll=!1}function Np(e,t,n,r,o,i,l,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var cr=!1,Mo=null,Lo=!1,Ol=null,_p={onError:function(e){cr=!0,Mo=e}};function jp(e,t,n,r,o,i,l,s,a){cr=!1,Mo=null,Np.apply(_p,arguments)}function Pp(e,t,n,r,o,i,l,s,a){if(jp.apply(this,arguments),cr){if(cr){var c=Mo;cr=!1,Mo=null}else throw Error(S(198));Lo||(Lo=!0,Ol=c)}}function cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Pc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ba(e){if(cn(e)!==e)throw Error(S(188))}function zp(e){var t=e.alternate;if(!t){if(t=cn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return ba(o),e;if(i===r)return ba(o),t;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function zc(e){return e=zp(e),e!==null?Tc(e):null}function Tc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Tc(e);if(t!==null)return t;e=e.sibling}return null}var Rc=Oe.unstable_scheduleCallback,Aa=Oe.unstable_cancelCallback,Tp=Oe.unstable_shouldYield,Rp=Oe.unstable_requestPaint,ne=Oe.unstable_now,Ip=Oe.unstable_getCurrentPriorityLevel,zs=Oe.unstable_ImmediatePriority,Ic=Oe.unstable_UserBlockingPriority,Oo=Oe.unstable_NormalPriority,Mp=Oe.unstable_LowPriority,Mc=Oe.unstable_IdlePriority,oi=null,it=null;function Lp(e){if(it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(oi,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:bp,Op=Math.log,$p=Math.LN2;function bp(e){return e>>>=0,e===0?32:31-(Op(e)/$p|0)|0}var qr=64,eo=4194304;function sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $o(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=sr(s):(i&=l,i!==0&&(r=sr(i)))}else l=n&~o,l!==0?r=sr(l):i!==0&&(r=sr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Je(t),o=1<<n,r|=e[n],t&=~o;return r}function Ap(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Je(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=Ap(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function $l(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lc(){var e=qr;return qr<<=1,!(qr&4194240)&&(qr=64),e}function Ki(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ur(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function Fp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Je(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ts(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var F=0;function Oc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var $c,Rs,bc,Ac,Dc,bl=!1,to=[],It=null,Mt=null,Lt=null,kr=new Map,Er=new Map,_t=[],Up="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Da(e,t){switch(e){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":Lt=null;break;case"pointerover":case"pointerout":kr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Er.delete(t.pointerId)}}function Xn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Vr(t),t!==null&&Rs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Bp(e,t,n,r,o){switch(t){case"focusin":return It=Xn(It,e,t,n,r,o),!0;case"dragenter":return Mt=Xn(Mt,e,t,n,r,o),!0;case"mouseover":return Lt=Xn(Lt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return kr.set(i,Xn(kr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Er.set(i,Xn(Er.get(i)||null,e,t,n,r,o)),!0}return!1}function Fc(e){var t=Kt(e.target);if(t!==null){var n=cn(t);if(n!==null){if(t=n.tag,t===13){if(t=Pc(n),t!==null){e.blockedOn=t,Dc(e.priority,function(){bc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Al(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Il=r,n.target.dispatchEvent(r),Il=null}else return t=Vr(n),t!==null&&Rs(t),e.blockedOn=n,!1;t.shift()}return!0}function Fa(e,t,n){xo(e)&&n.delete(t)}function Vp(){bl=!1,It!==null&&xo(It)&&(It=null),Mt!==null&&xo(Mt)&&(Mt=null),Lt!==null&&xo(Lt)&&(Lt=null),kr.forEach(Fa),Er.forEach(Fa)}function Kn(e,t){e.blockedOn===t&&(e.blockedOn=null,bl||(bl=!0,Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority,Vp)))}function Cr(e){function t(o){return Kn(o,e)}if(0<to.length){Kn(to[0],e);for(var n=1;n<to.length;n++){var r=to[n];r.blockedOn===e&&(r.blockedOn=null)}}for(It!==null&&Kn(It,e),Mt!==null&&Kn(Mt,e),Lt!==null&&Kn(Lt,e),kr.forEach(t),Er.forEach(t),n=0;n<_t.length;n++)r=_t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<_t.length&&(n=_t[0],n.blockedOn===null);)Fc(n),n.blockedOn===null&&_t.shift()}var zn=yt.ReactCurrentBatchConfig,bo=!0;function Wp(e,t,n,r){var o=F,i=zn.transition;zn.transition=null;try{F=1,Is(e,t,n,r)}finally{F=o,zn.transition=i}}function Hp(e,t,n,r){var o=F,i=zn.transition;zn.transition=null;try{F=4,Is(e,t,n,r)}finally{F=o,zn.transition=i}}function Is(e,t,n,r){if(bo){var o=Al(e,t,n,r);if(o===null)ll(e,t,r,Ao,n),Da(e,r);else if(Bp(o,e,t,n,r))r.stopPropagation();else if(Da(e,r),t&4&&-1<Up.indexOf(e)){for(;o!==null;){var i=Vr(o);if(i!==null&&$c(i),i=Al(e,t,n,r),i===null&&ll(e,t,r,Ao,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ll(e,t,r,null,n)}}var Ao=null;function Al(e,t,n,r){if(Ao=null,e=Ps(r),e=Kt(e),e!==null)if(t=cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Pc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ao=e,null}function Uc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ip()){case zs:return 1;case Ic:return 4;case Oo:case Mp:return 16;case Mc:return 536870912;default:return 16}default:return 16}}var Pt=null,Ms=null,wo=null;function Bc(){if(wo)return wo;var e,t=Ms,n=t.length,r,o="value"in Pt?Pt.value:Pt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return wo=o.slice(e,1<r?1-r:void 0)}function So(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function no(){return!0}function Ua(){return!1}function be(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?no:Ua,this.isPropagationStopped=Ua,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),t}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ls=be(Vn),Br=ee({},Vn,{view:0,detail:0}),Qp=be(Br),Ji,Zi,Jn,ii=ee({},Br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Os,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jn&&(Jn&&e.type==="mousemove"?(Ji=e.screenX-Jn.screenX,Zi=e.screenY-Jn.screenY):Zi=Ji=0,Jn=e),Ji)},movementY:function(e){return"movementY"in e?e.movementY:Zi}}),Ba=be(ii),Yp=ee({},ii,{dataTransfer:0}),Gp=be(Yp),Xp=ee({},Br,{relatedTarget:0}),qi=be(Xp),Kp=ee({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),Jp=be(Kp),Zp=ee({},Vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qp=be(Zp),e0=ee({},Vn,{data:0}),Va=be(e0),t0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},n0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},r0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=r0[e])?!!t[e]:!1}function Os(){return o0}var i0=ee({},Br,{key:function(e){if(e.key){var t=t0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=So(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?n0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Os,charCode:function(e){return e.type==="keypress"?So(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?So(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),l0=be(i0),s0=ee({},ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wa=be(s0),a0=ee({},Br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Os}),u0=be(a0),c0=ee({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),f0=be(c0),d0=ee({},ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),p0=be(d0),m0=[9,13,27,32],$s=pt&&"CompositionEvent"in window,fr=null;pt&&"documentMode"in document&&(fr=document.documentMode);var h0=pt&&"TextEvent"in window&&!fr,Vc=pt&&(!$s||fr&&8<fr&&11>=fr),Ha=String.fromCharCode(32),Qa=!1;function Wc(e,t){switch(e){case"keyup":return m0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gn=!1;function g0(e,t){switch(e){case"compositionend":return Hc(t);case"keypress":return t.which!==32?null:(Qa=!0,Ha);case"textInput":return e=t.data,e===Ha&&Qa?null:e;default:return null}}function y0(e,t){if(gn)return e==="compositionend"||!$s&&Wc(e,t)?(e=Bc(),wo=Ms=Pt=null,gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vc&&t.locale!=="ko"?null:t.data;default:return null}}var v0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ya(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!v0[e.type]:t==="textarea"}function Qc(e,t,n,r){Ec(r),t=Do(t,"onChange"),0<t.length&&(n=new Ls("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var dr=null,Nr=null;function x0(e){rf(e,0)}function li(e){var t=xn(e);if(gc(t))return e}function w0(e,t){if(e==="change")return t}var Yc=!1;if(pt){var el;if(pt){var tl="oninput"in document;if(!tl){var Ga=document.createElement("div");Ga.setAttribute("oninput","return;"),tl=typeof Ga.oninput=="function"}el=tl}else el=!1;Yc=el&&(!document.documentMode||9<document.documentMode)}function Xa(){dr&&(dr.detachEvent("onpropertychange",Gc),Nr=dr=null)}function Gc(e){if(e.propertyName==="value"&&li(Nr)){var t=[];Qc(t,Nr,e,Ps(e)),jc(x0,t)}}function S0(e,t,n){e==="focusin"?(Xa(),dr=t,Nr=n,dr.attachEvent("onpropertychange",Gc)):e==="focusout"&&Xa()}function k0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return li(Nr)}function E0(e,t){if(e==="click")return li(t)}function C0(e,t){if(e==="input"||e==="change")return li(t)}function N0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qe=typeof Object.is=="function"?Object.is:N0;function _r(e,t){if(qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!wl.call(t,o)||!qe(e[o],t[o]))return!1}return!0}function Ka(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ja(e,t){var n=Ka(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ka(n)}}function Xc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kc(){for(var e=window,t=Io();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Io(e.document)}return t}function bs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _0(e){var t=Kc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Xc(n.ownerDocument.documentElement,n)){if(r!==null&&bs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ja(n,i);var l=Ja(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var j0=pt&&"documentMode"in document&&11>=document.documentMode,yn=null,Dl=null,pr=null,Fl=!1;function Za(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fl||yn==null||yn!==Io(r)||(r=yn,"selectionStart"in r&&bs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pr&&_r(pr,r)||(pr=r,r=Do(Dl,"onSelect"),0<r.length&&(t=new Ls("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=yn)))}function ro(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vn={animationend:ro("Animation","AnimationEnd"),animationiteration:ro("Animation","AnimationIteration"),animationstart:ro("Animation","AnimationStart"),transitionend:ro("Transition","TransitionEnd")},nl={},Jc={};pt&&(Jc=document.createElement("div").style,"AnimationEvent"in window||(delete vn.animationend.animation,delete vn.animationiteration.animation,delete vn.animationstart.animation),"TransitionEvent"in window||delete vn.transitionend.transition);function si(e){if(nl[e])return nl[e];if(!vn[e])return e;var t=vn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jc)return nl[e]=t[n];return e}var Zc=si("animationend"),qc=si("animationiteration"),ef=si("animationstart"),tf=si("transitionend"),nf=new Map,qa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bt(e,t){nf.set(e,t),un(t,[e])}for(var rl=0;rl<qa.length;rl++){var ol=qa[rl],P0=ol.toLowerCase(),z0=ol[0].toUpperCase()+ol.slice(1);Bt(P0,"on"+z0)}Bt(Zc,"onAnimationEnd");Bt(qc,"onAnimationIteration");Bt(ef,"onAnimationStart");Bt("dblclick","onDoubleClick");Bt("focusin","onFocus");Bt("focusout","onBlur");Bt(tf,"onTransitionEnd");Ln("onMouseEnter",["mouseout","mouseover"]);Ln("onMouseLeave",["mouseout","mouseover"]);Ln("onPointerEnter",["pointerout","pointerover"]);Ln("onPointerLeave",["pointerout","pointerover"]);un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));un("onBeforeInput",["compositionend","keypress","textInput","paste"]);un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),T0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ar));function eu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Pp(r,t,void 0,e),e.currentTarget=null}function rf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;eu(o,s,c),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,c=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;eu(o,s,c),i=a}}}if(Lo)throw e=Ol,Lo=!1,Ol=null,e}function Y(e,t){var n=t[Hl];n===void 0&&(n=t[Hl]=new Set);var r=e+"__bubble";n.has(r)||(of(t,e,2,!1),n.add(r))}function il(e,t,n){var r=0;t&&(r|=4),of(n,e,r,t)}var oo="_reactListening"+Math.random().toString(36).slice(2);function jr(e){if(!e[oo]){e[oo]=!0,fc.forEach(function(n){n!=="selectionchange"&&(T0.has(n)||il(n,!1,e),il(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[oo]||(t[oo]=!0,il("selectionchange",!1,t))}}function of(e,t,n,r){switch(Uc(t)){case 1:var o=Wp;break;case 4:o=Hp;break;default:o=Is}n=o.bind(null,t,n,e),o=void 0,!Ll||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ll(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=Kt(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}jc(function(){var c=i,p=Ps(n),m=[];e:{var g=nf.get(e);if(g!==void 0){var w=Ls,x=e;switch(e){case"keypress":if(So(n)===0)break e;case"keydown":case"keyup":w=l0;break;case"focusin":x="focus",w=qi;break;case"focusout":x="blur",w=qi;break;case"beforeblur":case"afterblur":w=qi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Ba;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Gp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=u0;break;case Zc:case qc:case ef:w=Jp;break;case tf:w=f0;break;case"scroll":w=Qp;break;case"wheel":w=p0;break;case"copy":case"cut":case"paste":w=qp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Wa}var y=(t&4)!==0,P=!y&&e==="scroll",f=y?g!==null?g+"Capture":null:g;y=[];for(var u=c,d;u!==null;){d=u;var v=d.stateNode;if(d.tag===5&&v!==null&&(d=v,f!==null&&(v=Sr(u,f),v!=null&&y.push(Pr(u,v,d)))),P)break;u=u.return}0<y.length&&(g=new w(g,x,null,n,p),m.push({event:g,listeners:y}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&n!==Il&&(x=n.relatedTarget||n.fromElement)&&(Kt(x)||x[mt]))break e;if((w||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,w?(x=n.relatedTarget||n.toElement,w=c,x=x?Kt(x):null,x!==null&&(P=cn(x),x!==P||x.tag!==5&&x.tag!==6)&&(x=null)):(w=null,x=c),w!==x)){if(y=Ba,v="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(y=Wa,v="onPointerLeave",f="onPointerEnter",u="pointer"),P=w==null?g:xn(w),d=x==null?g:xn(x),g=new y(v,u+"leave",w,n,p),g.target=P,g.relatedTarget=d,v=null,Kt(p)===c&&(y=new y(f,u+"enter",x,n,p),y.target=d,y.relatedTarget=P,v=y),P=v,w&&x)t:{for(y=w,f=x,u=0,d=y;d;d=pn(d))u++;for(d=0,v=f;v;v=pn(v))d++;for(;0<u-d;)y=pn(y),u--;for(;0<d-u;)f=pn(f),d--;for(;u--;){if(y===f||f!==null&&y===f.alternate)break t;y=pn(y),f=pn(f)}y=null}else y=null;w!==null&&tu(m,g,w,y,!1),x!==null&&P!==null&&tu(m,P,x,y,!0)}}e:{if(g=c?xn(c):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var C=w0;else if(Ya(g))if(Yc)C=C0;else{C=k0;var N=S0}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(C=E0);if(C&&(C=C(e,c))){Qc(m,C,n,p);break e}N&&N(e,g,c),e==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&jl(g,"number",g.value)}switch(N=c?xn(c):window,e){case"focusin":(Ya(N)||N.contentEditable==="true")&&(yn=N,Dl=c,pr=null);break;case"focusout":pr=Dl=yn=null;break;case"mousedown":Fl=!0;break;case"contextmenu":case"mouseup":case"dragend":Fl=!1,Za(m,n,p);break;case"selectionchange":if(j0)break;case"keydown":case"keyup":Za(m,n,p)}var k;if($s)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else gn?Wc(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Vc&&n.locale!=="ko"&&(gn||z!=="onCompositionStart"?z==="onCompositionEnd"&&gn&&(k=Bc()):(Pt=p,Ms="value"in Pt?Pt.value:Pt.textContent,gn=!0)),N=Do(c,z),0<N.length&&(z=new Va(z,e,null,n,p),m.push({event:z,listeners:N}),k?z.data=k:(k=Hc(n),k!==null&&(z.data=k)))),(k=h0?g0(e,n):y0(e,n))&&(c=Do(c,"onBeforeInput"),0<c.length&&(p=new Va("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:c}),p.data=k))}rf(m,t)})}function Pr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Do(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Sr(e,n),i!=null&&r.unshift(Pr(e,i,o)),i=Sr(e,t),i!=null&&r.push(Pr(e,i,o))),e=e.return}return r}function pn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function tu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,o?(a=Sr(n,i),a!=null&&l.unshift(Pr(n,a,s))):o||(a=Sr(n,i),a!=null&&l.push(Pr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var R0=/\r\n?/g,I0=/\u0000|\uFFFD/g;function nu(e){return(typeof e=="string"?e:""+e).replace(R0,`
`).replace(I0,"")}function io(e,t,n){if(t=nu(t),nu(e)!==t&&n)throw Error(S(425))}function Fo(){}var Ul=null,Bl=null;function Vl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wl=typeof setTimeout=="function"?setTimeout:void 0,M0=typeof clearTimeout=="function"?clearTimeout:void 0,ru=typeof Promise=="function"?Promise:void 0,L0=typeof queueMicrotask=="function"?queueMicrotask:typeof ru<"u"?function(e){return ru.resolve(null).then(e).catch(O0)}:Wl;function O0(e){setTimeout(function(){throw e})}function sl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Cr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Cr(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ou(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Wn=Math.random().toString(36).slice(2),ot="__reactFiber$"+Wn,zr="__reactProps$"+Wn,mt="__reactContainer$"+Wn,Hl="__reactEvents$"+Wn,$0="__reactListeners$"+Wn,b0="__reactHandles$"+Wn;function Kt(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mt]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ou(e);e!==null;){if(n=e[ot])return n;e=ou(e)}return t}e=n,n=e.parentNode}return null}function Vr(e){return e=e[ot]||e[mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function ai(e){return e[zr]||null}var Ql=[],wn=-1;function Vt(e){return{current:e}}function G(e){0>wn||(e.current=Ql[wn],Ql[wn]=null,wn--)}function W(e,t){wn++,Ql[wn]=e.current,e.current=t}var Ut={},xe=Vt(Ut),je=Vt(!1),rn=Ut;function On(e,t){var n=e.type.contextTypes;if(!n)return Ut;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Pe(e){return e=e.childContextTypes,e!=null}function Uo(){G(je),G(xe)}function iu(e,t,n){if(xe.current!==Ut)throw Error(S(168));W(xe,t),W(je,n)}function lf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(S(108,Sp(e)||"Unknown",o));return ee({},n,r)}function Bo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ut,rn=xe.current,W(xe,e),W(je,je.current),!0}function lu(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=lf(e,t,rn),r.__reactInternalMemoizedMergedChildContext=e,G(je),G(xe),W(xe,e)):G(je),W(je,n)}var ut=null,ui=!1,al=!1;function sf(e){ut===null?ut=[e]:ut.push(e)}function A0(e){ui=!0,sf(e)}function Wt(){if(!al&&ut!==null){al=!0;var e=0,t=F;try{var n=ut;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ut=null,ui=!1}catch(o){throw ut!==null&&(ut=ut.slice(e+1)),Rc(zs,Wt),o}finally{F=t,al=!1}}return null}var Sn=[],kn=0,Vo=null,Wo=0,De=[],Fe=0,on=null,ct=1,ft="";function Gt(e,t){Sn[kn++]=Wo,Sn[kn++]=Vo,Vo=e,Wo=t}function af(e,t,n){De[Fe++]=ct,De[Fe++]=ft,De[Fe++]=on,on=e;var r=ct;e=ft;var o=32-Je(r)-1;r&=~(1<<o),n+=1;var i=32-Je(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,ct=1<<32-Je(t)+o|n<<o|r,ft=i+e}else ct=1<<i|n<<o|r,ft=e}function As(e){e.return!==null&&(Gt(e,1),af(e,1,0))}function Ds(e){for(;e===Vo;)Vo=Sn[--kn],Sn[kn]=null,Wo=Sn[--kn],Sn[kn]=null;for(;e===on;)on=De[--Fe],De[Fe]=null,ft=De[--Fe],De[Fe]=null,ct=De[--Fe],De[Fe]=null}var Me=null,Ie=null,K=!1,Ke=null;function uf(e,t){var n=Ue(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function su(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Me=e,Ie=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Me=e,Ie=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=on!==null?{id:ct,overflow:ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ue(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Me=e,Ie=null,!0):!1;default:return!1}}function Yl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gl(e){if(K){var t=Ie;if(t){var n=t;if(!su(e,t)){if(Yl(e))throw Error(S(418));t=Ot(n.nextSibling);var r=Me;t&&su(e,t)?uf(r,n):(e.flags=e.flags&-4097|2,K=!1,Me=e)}}else{if(Yl(e))throw Error(S(418));e.flags=e.flags&-4097|2,K=!1,Me=e}}}function au(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Me=e}function lo(e){if(e!==Me)return!1;if(!K)return au(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Vl(e.type,e.memoizedProps)),t&&(t=Ie)){if(Yl(e))throw cf(),Error(S(418));for(;t;)uf(e,t),t=Ot(t.nextSibling)}if(au(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ie=Ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ie=null}}else Ie=Me?Ot(e.stateNode.nextSibling):null;return!0}function cf(){for(var e=Ie;e;)e=Ot(e.nextSibling)}function $n(){Ie=Me=null,K=!1}function Fs(e){Ke===null?Ke=[e]:Ke.push(e)}var D0=yt.ReactCurrentBatchConfig;function Ge(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ho=Vt(null),Qo=null,En=null,Us=null;function Bs(){Us=En=Qo=null}function Vs(e){var t=Ho.current;G(Ho),e._currentValue=t}function Xl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Tn(e,t){Qo=e,Us=En=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(_e=!0),e.firstContext=null)}function Ve(e){var t=e._currentValue;if(Us!==e)if(e={context:e,memoizedValue:t,next:null},En===null){if(Qo===null)throw Error(S(308));En=e,Qo.dependencies={lanes:0,firstContext:e}}else En=En.next=e;return t}var Jt=null;function Ws(e){Jt===null?Jt=[e]:Jt.push(e)}function ff(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ws(t)):(n.next=o.next,o.next=n),t.interleaved=n,ht(e,r)}function ht(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Nt=!1;function Hs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function df(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function dt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $t(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,ht(e,n)}return o=r.interleaved,o===null?(t.next=t,Ws(r)):(t.next=o.next,o.next=t),r.interleaved=t,ht(e,n)}function ko(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ts(e,n)}}function uu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Yo(e,t,n,r){var o=e.updateQueue;Nt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,c=a.next;a.next=null,l===null?i=c:l.next=c,l=a;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==l&&(s===null?p.firstBaseUpdate=c:s.next=c,p.lastBaseUpdate=a))}if(i!==null){var m=o.baseState;l=0,p=c=a=null,s=i;do{var g=s.lane,w=s.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,y=s;switch(g=t,w=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){m=x.call(w,m,g);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,g=typeof x=="function"?x.call(w,m,g):x,g==null)break e;m=ee({},m,g);break e;case 2:Nt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[s]:g.push(s))}else w={eventTime:w,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(c=p=w,a=m):p=p.next=w,l|=g;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;g=s,s=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(1);if(p===null&&(a=m),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);sn|=l,e.lanes=l,e.memoizedState=m}}function cu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var pf=new cc.Component().refs;function Kl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ci={isMounted:function(e){return(e=e._reactInternals)?cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),o=At(e),i=dt(r,o);i.payload=t,n!=null&&(i.callback=n),t=$t(e,i,o),t!==null&&(Ze(t,e,o,r),ko(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),o=At(e),i=dt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=$t(e,i,o),t!==null&&(Ze(t,e,o,r),ko(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=At(e),o=dt(n,r);o.tag=2,t!=null&&(o.callback=t),t=$t(e,o,r),t!==null&&(Ze(t,e,r,n),ko(t,e,r))}};function fu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!_r(n,r)||!_r(o,i):!0}function mf(e,t,n){var r=!1,o=Ut,i=t.contextType;return typeof i=="object"&&i!==null?i=Ve(i):(o=Pe(t)?rn:xe.current,r=t.contextTypes,i=(r=r!=null)?On(e,o):Ut),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ci,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function du(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ci.enqueueReplaceState(t,t.state,null)}function Jl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=pf,Hs(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ve(i):(i=Pe(t)?rn:xe.current,o.context=On(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Kl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ci.enqueueReplaceState(o,o.state,null),Yo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Zn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;s===pf&&(s=o.refs={}),l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function so(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pu(e){var t=e._init;return t(e._payload)}function hf(e){function t(f,u){if(e){var d=f.deletions;d===null?(f.deletions=[u],f.flags|=16):d.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function o(f,u){return f=Dt(f,u),f.index=0,f.sibling=null,f}function i(f,u,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<u?(f.flags|=2,u):d):(f.flags|=2,u)):(f.flags|=1048576,u)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,u,d,v){return u===null||u.tag!==6?(u=hl(d,f.mode,v),u.return=f,u):(u=o(u,d),u.return=f,u)}function a(f,u,d,v){var C=d.type;return C===hn?p(f,u,d.props.children,v,d.key):u!==null&&(u.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ct&&pu(C)===u.type)?(v=o(u,d.props),v.ref=Zn(f,u,d),v.return=f,v):(v=Po(d.type,d.key,d.props,null,f.mode,v),v.ref=Zn(f,u,d),v.return=f,v)}function c(f,u,d,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=gl(d,f.mode,v),u.return=f,u):(u=o(u,d.children||[]),u.return=f,u)}function p(f,u,d,v,C){return u===null||u.tag!==7?(u=nn(d,f.mode,v,C),u.return=f,u):(u=o(u,d),u.return=f,u)}function m(f,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=hl(""+u,f.mode,d),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Kr:return d=Po(u.type,u.key,u.props,null,f.mode,d),d.ref=Zn(f,null,u),d.return=f,d;case mn:return u=gl(u,f.mode,d),u.return=f,u;case Ct:var v=u._init;return m(f,v(u._payload),d)}if(lr(u)||Yn(u))return u=nn(u,f.mode,d,null),u.return=f,u;so(f,u)}return null}function g(f,u,d,v){var C=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return C!==null?null:s(f,u,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Kr:return d.key===C?a(f,u,d,v):null;case mn:return d.key===C?c(f,u,d,v):null;case Ct:return C=d._init,g(f,u,C(d._payload),v)}if(lr(d)||Yn(d))return C!==null?null:p(f,u,d,v,null);so(f,d)}return null}function w(f,u,d,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(d)||null,s(u,f,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Kr:return f=f.get(v.key===null?d:v.key)||null,a(u,f,v,C);case mn:return f=f.get(v.key===null?d:v.key)||null,c(u,f,v,C);case Ct:var N=v._init;return w(f,u,d,N(v._payload),C)}if(lr(v)||Yn(v))return f=f.get(d)||null,p(u,f,v,C,null);so(u,v)}return null}function x(f,u,d,v){for(var C=null,N=null,k=u,z=u=0,H=null;k!==null&&z<d.length;z++){k.index>z?(H=k,k=null):H=k.sibling;var M=g(f,k,d[z],v);if(M===null){k===null&&(k=H);break}e&&k&&M.alternate===null&&t(f,k),u=i(M,u,z),N===null?C=M:N.sibling=M,N=M,k=H}if(z===d.length)return n(f,k),K&&Gt(f,z),C;if(k===null){for(;z<d.length;z++)k=m(f,d[z],v),k!==null&&(u=i(k,u,z),N===null?C=k:N.sibling=k,N=k);return K&&Gt(f,z),C}for(k=r(f,k);z<d.length;z++)H=w(k,f,z,d[z],v),H!==null&&(e&&H.alternate!==null&&k.delete(H.key===null?z:H.key),u=i(H,u,z),N===null?C=H:N.sibling=H,N=H);return e&&k.forEach(function(we){return t(f,we)}),K&&Gt(f,z),C}function y(f,u,d,v){var C=Yn(d);if(typeof C!="function")throw Error(S(150));if(d=C.call(d),d==null)throw Error(S(151));for(var N=C=null,k=u,z=u=0,H=null,M=d.next();k!==null&&!M.done;z++,M=d.next()){k.index>z?(H=k,k=null):H=k.sibling;var we=g(f,k,M.value,v);if(we===null){k===null&&(k=H);break}e&&k&&we.alternate===null&&t(f,k),u=i(we,u,z),N===null?C=we:N.sibling=we,N=we,k=H}if(M.done)return n(f,k),K&&Gt(f,z),C;if(k===null){for(;!M.done;z++,M=d.next())M=m(f,M.value,v),M!==null&&(u=i(M,u,z),N===null?C=M:N.sibling=M,N=M);return K&&Gt(f,z),C}for(k=r(f,k);!M.done;z++,M=d.next())M=w(k,f,z,M.value,v),M!==null&&(e&&M.alternate!==null&&k.delete(M.key===null?z:M.key),u=i(M,u,z),N===null?C=M:N.sibling=M,N=M);return e&&k.forEach(function(D){return t(f,D)}),K&&Gt(f,z),C}function P(f,u,d,v){if(typeof d=="object"&&d!==null&&d.type===hn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Kr:e:{for(var C=d.key,N=u;N!==null;){if(N.key===C){if(C=d.type,C===hn){if(N.tag===7){n(f,N.sibling),u=o(N,d.props.children),u.return=f,f=u;break e}}else if(N.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ct&&pu(C)===N.type){n(f,N.sibling),u=o(N,d.props),u.ref=Zn(f,N,d),u.return=f,f=u;break e}n(f,N);break}else t(f,N);N=N.sibling}d.type===hn?(u=nn(d.props.children,f.mode,v,d.key),u.return=f,f=u):(v=Po(d.type,d.key,d.props,null,f.mode,v),v.ref=Zn(f,u,d),v.return=f,f=v)}return l(f);case mn:e:{for(N=d.key;u!==null;){if(u.key===N)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(f,u.sibling),u=o(u,d.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=gl(d,f.mode,v),u.return=f,f=u}return l(f);case Ct:return N=d._init,P(f,u,N(d._payload),v)}if(lr(d))return x(f,u,d,v);if(Yn(d))return y(f,u,d,v);so(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(n(f,u.sibling),u=o(u,d),u.return=f,f=u):(n(f,u),u=hl(d,f.mode,v),u.return=f,f=u),l(f)):n(f,u)}return P}var bn=hf(!0),gf=hf(!1),Wr={},lt=Vt(Wr),Tr=Vt(Wr),Rr=Vt(Wr);function Zt(e){if(e===Wr)throw Error(S(174));return e}function Qs(e,t){switch(W(Rr,t),W(Tr,e),W(lt,Wr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:zl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=zl(t,e)}G(lt),W(lt,t)}function An(){G(lt),G(Tr),G(Rr)}function yf(e){Zt(Rr.current);var t=Zt(lt.current),n=zl(t,e.type);t!==n&&(W(Tr,e),W(lt,n))}function Ys(e){Tr.current===e&&(G(lt),G(Tr))}var Z=Vt(0);function Go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ul=[];function Gs(){for(var e=0;e<ul.length;e++)ul[e]._workInProgressVersionPrimary=null;ul.length=0}var Eo=yt.ReactCurrentDispatcher,cl=yt.ReactCurrentBatchConfig,ln=0,q=null,ie=null,ae=null,Xo=!1,mr=!1,Ir=0,F0=0;function he(){throw Error(S(321))}function Xs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qe(e[n],t[n]))return!1;return!0}function Ks(e,t,n,r,o,i){if(ln=i,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Eo.current=e===null||e.memoizedState===null?W0:H0,e=n(r,o),mr){i=0;do{if(mr=!1,Ir=0,25<=i)throw Error(S(301));i+=1,ae=ie=null,t.updateQueue=null,Eo.current=Q0,e=n(r,o)}while(mr)}if(Eo.current=Ko,t=ie!==null&&ie.next!==null,ln=0,ae=ie=q=null,Xo=!1,t)throw Error(S(300));return e}function Js(){var e=Ir!==0;return Ir=0,e}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?q.memoizedState=ae=e:ae=ae.next=e,ae}function We(){if(ie===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=ae===null?q.memoizedState:ae.next;if(t!==null)ae=t,ie=e;else{if(e===null)throw Error(S(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},ae===null?q.memoizedState=ae=e:ae=ae.next=e}return ae}function Mr(e,t){return typeof t=="function"?t(e):t}function fl(e){var t=We(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=ie,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,c=i;do{var p=c.lane;if((ln&p)===p)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=m,l=r):a=a.next=m,q.lanes|=p,sn|=p}c=c.next}while(c!==null&&c!==i);a===null?l=r:a.next=s,qe(r,t.memoizedState)||(_e=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,q.lanes|=i,sn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function dl(e){var t=We(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);qe(i,t.memoizedState)||(_e=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function vf(){}function xf(e,t){var n=q,r=We(),o=t(),i=!qe(r.memoizedState,o);if(i&&(r.memoizedState=o,_e=!0),r=r.queue,Zs(kf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ae!==null&&ae.memoizedState.tag&1){if(n.flags|=2048,Lr(9,Sf.bind(null,n,r,o,t),void 0,null),ue===null)throw Error(S(349));ln&30||wf(n,t,o)}return o}function wf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Sf(e,t,n,r){t.value=n,t.getSnapshot=r,Ef(t)&&Cf(e)}function kf(e,t,n){return n(function(){Ef(t)&&Cf(e)})}function Ef(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qe(e,n)}catch{return!0}}function Cf(e){var t=ht(e,1);t!==null&&Ze(t,e,1,-1)}function mu(e){var t=tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mr,lastRenderedState:e},t.queue=e,e=e.dispatch=V0.bind(null,q,e),[t.memoizedState,e]}function Lr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Nf(){return We().memoizedState}function Co(e,t,n,r){var o=tt();q.flags|=e,o.memoizedState=Lr(1|t,n,void 0,r===void 0?null:r)}function fi(e,t,n,r){var o=We();r=r===void 0?null:r;var i=void 0;if(ie!==null){var l=ie.memoizedState;if(i=l.destroy,r!==null&&Xs(r,l.deps)){o.memoizedState=Lr(t,n,i,r);return}}q.flags|=e,o.memoizedState=Lr(1|t,n,i,r)}function hu(e,t){return Co(8390656,8,e,t)}function Zs(e,t){return fi(2048,8,e,t)}function _f(e,t){return fi(4,2,e,t)}function jf(e,t){return fi(4,4,e,t)}function Pf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zf(e,t,n){return n=n!=null?n.concat([e]):null,fi(4,4,Pf.bind(null,t,e),n)}function qs(){}function Tf(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Rf(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function If(e,t,n){return ln&21?(qe(n,t)||(n=Lc(),q.lanes|=n,sn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=n)}function U0(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=cl.transition;cl.transition={};try{e(!1),t()}finally{F=n,cl.transition=r}}function Mf(){return We().memoizedState}function B0(e,t,n){var r=At(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Lf(e))Of(t,n);else if(n=ff(e,t,n,r),n!==null){var o=ke();Ze(n,e,r,o),$f(n,t,r)}}function V0(e,t,n){var r=At(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lf(e))Of(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,qe(s,l)){var a=t.interleaved;a===null?(o.next=o,Ws(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=ff(e,t,o,r),n!==null&&(o=ke(),Ze(n,e,r,o),$f(n,t,r))}}function Lf(e){var t=e.alternate;return e===q||t!==null&&t===q}function Of(e,t){mr=Xo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $f(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ts(e,n)}}var Ko={readContext:Ve,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},W0={readContext:Ve,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:hu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Co(4194308,4,Pf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Co(4194308,4,e,t)},useInsertionEffect:function(e,t){return Co(4,2,e,t)},useMemo:function(e,t){var n=tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=B0.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:mu,useDebugValue:qs,useDeferredValue:function(e){return tt().memoizedState=e},useTransition:function(){var e=mu(!1),t=e[0];return e=U0.bind(null,e[1]),tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,o=tt();if(K){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ue===null)throw Error(S(349));ln&30||wf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,hu(kf.bind(null,r,i,e),[e]),r.flags|=2048,Lr(9,Sf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=tt(),t=ue.identifierPrefix;if(K){var n=ft,r=ct;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ir++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=F0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},H0={readContext:Ve,useCallback:Tf,useContext:Ve,useEffect:Zs,useImperativeHandle:zf,useInsertionEffect:_f,useLayoutEffect:jf,useMemo:Rf,useReducer:fl,useRef:Nf,useState:function(){return fl(Mr)},useDebugValue:qs,useDeferredValue:function(e){var t=We();return If(t,ie.memoizedState,e)},useTransition:function(){var e=fl(Mr)[0],t=We().memoizedState;return[e,t]},useMutableSource:vf,useSyncExternalStore:xf,useId:Mf,unstable_isNewReconciler:!1},Q0={readContext:Ve,useCallback:Tf,useContext:Ve,useEffect:Zs,useImperativeHandle:zf,useInsertionEffect:_f,useLayoutEffect:jf,useMemo:Rf,useReducer:dl,useRef:Nf,useState:function(){return dl(Mr)},useDebugValue:qs,useDeferredValue:function(e){var t=We();return ie===null?t.memoizedState=e:If(t,ie.memoizedState,e)},useTransition:function(){var e=dl(Mr)[0],t=We().memoizedState;return[e,t]},useMutableSource:vf,useSyncExternalStore:xf,useId:Mf,unstable_isNewReconciler:!1};function Dn(e,t){try{var n="",r=t;do n+=wp(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function pl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Zl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Y0=typeof WeakMap=="function"?WeakMap:Map;function bf(e,t,n){n=dt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Zo||(Zo=!0,as=r),Zl(e,t)},n}function Af(e,t,n){n=dt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Zl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Zl(e,t),typeof r!="function"&&(bt===null?bt=new Set([this]):bt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Y0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=sm.bind(null,e,t,n),t.then(e,e))}function yu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=dt(-1,1),t.tag=2,$t(n,t,1))),n.lanes|=1),e)}var G0=yt.ReactCurrentOwner,_e=!1;function Se(e,t,n,r){t.child=e===null?gf(t,null,n,r):bn(t,e.child,n,r)}function xu(e,t,n,r,o){n=n.render;var i=t.ref;return Tn(t,o),r=Ks(e,t,n,r,i,o),n=Js(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gt(e,t,o)):(K&&n&&As(t),t.flags|=1,Se(e,t,r,o),t.child)}function wu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!sa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Df(e,t,i,r,o)):(e=Po(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:_r,n(l,r)&&e.ref===t.ref)return gt(e,t,o)}return t.flags|=1,e=Dt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Df(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(_r(i,r)&&e.ref===t.ref)if(_e=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(_e=!0);else return t.lanes=e.lanes,gt(e,t,o)}return ql(e,t,n,r,o)}function Ff(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Nn,Re),Re|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Nn,Re),Re|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,W(Nn,Re),Re|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,W(Nn,Re),Re|=r;return Se(e,t,o,n),t.child}function Uf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ql(e,t,n,r,o){var i=Pe(n)?rn:xe.current;return i=On(t,i),Tn(t,o),n=Ks(e,t,n,r,i,o),r=Js(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gt(e,t,o)):(K&&r&&As(t),t.flags|=1,Se(e,t,n,o),t.child)}function Su(e,t,n,r,o){if(Pe(n)){var i=!0;Bo(t)}else i=!1;if(Tn(t,o),t.stateNode===null)No(e,t),mf(t,n,r),Jl(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ve(c):(c=Pe(n)?rn:xe.current,c=On(t,c));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==c)&&du(t,l,r,c),Nt=!1;var g=t.memoizedState;l.state=g,Yo(t,r,l,o),a=t.memoizedState,s!==r||g!==a||je.current||Nt?(typeof p=="function"&&(Kl(t,n,p,r),a=t.memoizedState),(s=Nt||fu(t,n,s,r,g,a,c))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,df(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Ge(t.type,s),l.props=c,m=t.pendingProps,g=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ve(a):(a=Pe(n)?rn:xe.current,a=On(t,a));var w=n.getDerivedStateFromProps;(p=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==m||g!==a)&&du(t,l,r,a),Nt=!1,g=t.memoizedState,l.state=g,Yo(t,r,l,o);var x=t.memoizedState;s!==m||g!==x||je.current||Nt?(typeof w=="function"&&(Kl(t,n,w,r),x=t.memoizedState),(c=Nt||fu(t,n,c,r,g,x,a)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=a,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return es(e,t,n,r,i,o)}function es(e,t,n,r,o,i){Uf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&lu(t,n,!1),gt(e,t,i);r=t.stateNode,G0.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=bn(t,e.child,null,i),t.child=bn(t,null,s,i)):Se(e,t,s,i),t.memoizedState=r.state,o&&lu(t,n,!0),t.child}function Bf(e){var t=e.stateNode;t.pendingContext?iu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&iu(e,t.context,!1),Qs(e,t.containerInfo)}function ku(e,t,n,r,o){return $n(),Fs(o),t.flags|=256,Se(e,t,n,r),t.child}var ts={dehydrated:null,treeContext:null,retryLane:0};function ns(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vf(e,t,n){var r=t.pendingProps,o=Z.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),W(Z,o&1),e===null)return Gl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=mi(l,r,0,null),e=nn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ns(n),t.memoizedState=ts,e):ea(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return X0(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Dt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Dt(s,i):(i=nn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?ns(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=ts,r}return i=e.child,e=i.sibling,r=Dt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ea(e,t){return t=mi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ao(e,t,n,r){return r!==null&&Fs(r),bn(t,e.child,null,n),e=ea(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function X0(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=pl(Error(S(422))),ao(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=mi({mode:"visible",children:r.children},o,0,null),i=nn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&bn(t,e.child,null,l),t.child.memoizedState=ns(l),t.memoizedState=ts,i);if(!(t.mode&1))return ao(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(S(419)),r=pl(i,r,void 0),ao(e,t,l,r)}if(s=(l&e.childLanes)!==0,_e||s){if(r=ue,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,ht(e,o),Ze(r,e,o,-1))}return la(),r=pl(Error(S(421))),ao(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=am.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ie=Ot(o.nextSibling),Me=t,K=!0,Ke=null,e!==null&&(De[Fe++]=ct,De[Fe++]=ft,De[Fe++]=on,ct=e.id,ft=e.overflow,on=t),t=ea(t,r.children),t.flags|=4096,t)}function Eu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Xl(e.return,t,n)}function ml(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Wf(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Se(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Eu(e,n,t);else if(e.tag===19)Eu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Z,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Go(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ml(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Go(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ml(t,!0,n,null,i);break;case"together":ml(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function No(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function K0(e,t,n){switch(t.tag){case 3:Bf(t),$n();break;case 5:yf(t);break;case 1:Pe(t.type)&&Bo(t);break;case 4:Qs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;W(Ho,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?Vf(e,t,n):(W(Z,Z.current&1),e=gt(e,t,n),e!==null?e.sibling:null);W(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Wf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),W(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,Ff(e,t,n)}return gt(e,t,n)}var Hf,rs,Qf,Yf;Hf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rs=function(){};Qf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Zt(lt.current);var i=null;switch(n){case"input":o=Nl(e,o),r=Nl(e,r),i=[];break;case"select":o=ee({},o,{value:void 0}),r=ee({},r,{value:void 0}),i=[];break;case"textarea":o=Pl(e,o),r=Pl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Fo)}Tl(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(xr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(xr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&Y("scroll",e),i||s===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Yf=function(e,t,n,r){n!==r&&(t.flags|=4)};function qn(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function J0(e,t,n){var r=t.pendingProps;switch(Ds(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return Pe(t.type)&&Uo(),ge(t),null;case 3:return r=t.stateNode,An(),G(je),G(xe),Gs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(lo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ke!==null&&(fs(Ke),Ke=null))),rs(e,t),ge(t),null;case 5:Ys(t);var o=Zt(Rr.current);if(n=t.type,e!==null&&t.stateNode!=null)Qf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ge(t),null}if(e=Zt(lt.current),lo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ot]=t,r[zr]=i,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(o=0;o<ar.length;o++)Y(ar[o],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":Ia(r,i),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Y("invalid",r);break;case"textarea":La(r,i),Y("invalid",r)}Tl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&io(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&io(r.textContent,s,e),o=["children",""+s]):xr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&Y("scroll",r)}switch(n){case"input":Jr(r),Ma(r,i,!0);break;case"textarea":Jr(r),Oa(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Fo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[ot]=t,e[zr]=r,Hf(e,t,!1,!1),t.stateNode=e;e:{switch(l=Rl(n,r),n){case"dialog":Y("cancel",e),Y("close",e),o=r;break;case"iframe":case"object":case"embed":Y("load",e),o=r;break;case"video":case"audio":for(o=0;o<ar.length;o++)Y(ar[o],e);o=r;break;case"source":Y("error",e),o=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),o=r;break;case"details":Y("toggle",e),o=r;break;case"input":Ia(e,r),o=Nl(e,r),Y("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ee({},r,{value:void 0}),Y("invalid",e);break;case"textarea":La(e,r),o=Pl(e,r),Y("invalid",e);break;default:o=r}Tl(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?kc(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&wc(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&wr(e,a):typeof a=="number"&&wr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(xr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&Y("scroll",e):a!=null&&Cs(e,i,a,l))}switch(n){case"input":Jr(e),Ma(e,r,!1);break;case"textarea":Jr(e),Oa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ft(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?_n(e,!!r.multiple,i,!1):r.defaultValue!=null&&_n(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Fo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ge(t),null;case 6:if(e&&t.stateNode!=null)Yf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Zt(Rr.current),Zt(lt.current),lo(t)){if(r=t.stateNode,n=t.memoizedProps,r[ot]=t,(i=r.nodeValue!==n)&&(e=Me,e!==null))switch(e.tag){case 3:io(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&io(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ot]=t,t.stateNode=r}return ge(t),null;case 13:if(G(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Ie!==null&&t.mode&1&&!(t.flags&128))cf(),$n(),t.flags|=98560,i=!1;else if(i=lo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[ot]=t}else $n(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ge(t),i=!1}else Ke!==null&&(fs(Ke),Ke=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?le===0&&(le=3):la())),t.updateQueue!==null&&(t.flags|=4),ge(t),null);case 4:return An(),rs(e,t),e===null&&jr(t.stateNode.containerInfo),ge(t),null;case 10:return Vs(t.type._context),ge(t),null;case 17:return Pe(t.type)&&Uo(),ge(t),null;case 19:if(G(Z),i=t.memoizedState,i===null)return ge(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)qn(i,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Go(e),l!==null){for(t.flags|=128,qn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(Z,Z.current&1|2),t.child}e=e.sibling}i.tail!==null&&ne()>Fn&&(t.flags|=128,r=!0,qn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Go(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),qn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!K)return ge(t),null}else 2*ne()-i.renderingStartTime>Fn&&n!==1073741824&&(t.flags|=128,r=!0,qn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ne(),t.sibling=null,n=Z.current,W(Z,r?n&1|2:n&1),t):(ge(t),null);case 22:case 23:return ia(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Re&1073741824&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function Z0(e,t){switch(Ds(t),t.tag){case 1:return Pe(t.type)&&Uo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return An(),G(je),G(xe),Gs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ys(t),null;case 13:if(G(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));$n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Z),null;case 4:return An(),null;case 10:return Vs(t.type._context),null;case 22:case 23:return ia(),null;case 24:return null;default:return null}}var uo=!1,ve=!1,q0=typeof WeakSet=="function"?WeakSet:Set,j=null;function Cn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function os(e,t,n){try{n()}catch(r){te(e,t,r)}}var Cu=!1;function em(e,t){if(Ul=bo,e=Kc(),bs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,c=0,p=0,m=e,g=null;t:for(;;){for(var w;m!==n||o!==0&&m.nodeType!==3||(s=l+o),m!==i||r!==0&&m.nodeType!==3||(a=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(w=m.firstChild)!==null;)g=m,m=w;for(;;){if(m===e)break t;if(g===n&&++c===o&&(s=l),g===i&&++p===r&&(a=l),(w=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=w}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bl={focusedElem:e,selectionRange:n},bo=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,P=x.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ge(t.type,y),P);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(v){te(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return x=Cu,Cu=!1,x}function hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&os(t,n,i)}o=o.next}while(o!==r)}}function di(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function is(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Gf(e){var t=e.alternate;t!==null&&(e.alternate=null,Gf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ot],delete t[zr],delete t[Hl],delete t[$0],delete t[b0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xf(e){return e.tag===5||e.tag===3||e.tag===4}function Nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ls(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fo));else if(r!==4&&(e=e.child,e!==null))for(ls(e,t,n),e=e.sibling;e!==null;)ls(e,t,n),e=e.sibling}function ss(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ss(e,t,n),e=e.sibling;e!==null;)ss(e,t,n),e=e.sibling}var fe=null,Xe=!1;function St(e,t,n){for(n=n.child;n!==null;)Kf(e,t,n),n=n.sibling}function Kf(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(oi,n)}catch{}switch(n.tag){case 5:ve||Cn(n,t);case 6:var r=fe,o=Xe;fe=null,St(e,t,n),fe=r,Xe=o,fe!==null&&(Xe?(e=fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(Xe?(e=fe,n=n.stateNode,e.nodeType===8?sl(e.parentNode,n):e.nodeType===1&&sl(e,n),Cr(e)):sl(fe,n.stateNode));break;case 4:r=fe,o=Xe,fe=n.stateNode.containerInfo,Xe=!0,St(e,t,n),fe=r,Xe=o;break;case 0:case 11:case 14:case 15:if(!ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&os(n,t,l),o=o.next}while(o!==r)}St(e,t,n);break;case 1:if(!ve&&(Cn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){te(n,t,s)}St(e,t,n);break;case 21:St(e,t,n);break;case 22:n.mode&1?(ve=(r=ve)||n.memoizedState!==null,St(e,t,n),ve=r):St(e,t,n);break;default:St(e,t,n)}}function _u(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new q0),t.forEach(function(r){var o=um.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:fe=s.stateNode,Xe=!1;break e;case 3:fe=s.stateNode.containerInfo,Xe=!0;break e;case 4:fe=s.stateNode.containerInfo,Xe=!0;break e}s=s.return}if(fe===null)throw Error(S(160));Kf(i,l,o),fe=null,Xe=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){te(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Jf(t,e),t=t.sibling}function Jf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qe(t,e),et(e),r&4){try{hr(3,e,e.return),di(3,e)}catch(y){te(e,e.return,y)}try{hr(5,e,e.return)}catch(y){te(e,e.return,y)}}break;case 1:Qe(t,e),et(e),r&512&&n!==null&&Cn(n,n.return);break;case 5:if(Qe(t,e),et(e),r&512&&n!==null&&Cn(n,n.return),e.flags&32){var o=e.stateNode;try{wr(o,"")}catch(y){te(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&yc(o,i),Rl(s,l);var c=Rl(s,i);for(l=0;l<a.length;l+=2){var p=a[l],m=a[l+1];p==="style"?kc(o,m):p==="dangerouslySetInnerHTML"?wc(o,m):p==="children"?wr(o,m):Cs(o,p,m,c)}switch(s){case"input":_l(o,i);break;case"textarea":vc(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?_n(o,!!i.multiple,w,!1):g!==!!i.multiple&&(i.defaultValue!=null?_n(o,!!i.multiple,i.defaultValue,!0):_n(o,!!i.multiple,i.multiple?[]:"",!1))}o[zr]=i}catch(y){te(e,e.return,y)}}break;case 6:if(Qe(t,e),et(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){te(e,e.return,y)}}break;case 3:if(Qe(t,e),et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Cr(t.containerInfo)}catch(y){te(e,e.return,y)}break;case 4:Qe(t,e),et(e);break;case 13:Qe(t,e),et(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ra=ne())),r&4&&_u(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(ve=(c=ve)||p,Qe(t,e),ve=c):Qe(t,e),et(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(j=e,p=e.child;p!==null;){for(m=j=p;j!==null;){switch(g=j,w=g.child,g.tag){case 0:case 11:case 14:case 15:hr(4,g,g.return);break;case 1:Cn(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){te(r,n,y)}}break;case 5:Cn(g,g.return);break;case 22:if(g.memoizedState!==null){Pu(m);continue}}w!==null?(w.return=g,j=w):Pu(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{o=m.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,a=m.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Sc("display",l))}catch(y){te(e,e.return,y)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(y){te(e,e.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Qe(t,e),et(e),r&4&&_u(e);break;case 21:break;default:Qe(t,e),et(e)}}function et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xf(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(wr(o,""),r.flags&=-33);var i=Nu(e);ss(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Nu(e);ls(e,s,l);break;default:throw Error(S(161))}}catch(a){te(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tm(e,t,n){j=e,Zf(e)}function Zf(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var o=j,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||uo;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||ve;s=uo;var c=ve;if(uo=l,(ve=a)&&!c)for(j=o;j!==null;)l=j,a=l.child,l.tag===22&&l.memoizedState!==null?zu(o):a!==null?(a.return=l,j=a):zu(o);for(;i!==null;)j=i,Zf(i),i=i.sibling;j=o,uo=s,ve=c}ju(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,j=i):ju(e)}}function ju(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ve||di(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ve)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ge(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&cu(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}cu(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Cr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ve||t.flags&512&&is(t)}catch(g){te(t,t.return,g)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Pu(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function zu(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{di(4,t)}catch(a){te(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){te(t,o,a)}}var i=t.return;try{is(t)}catch(a){te(t,i,a)}break;case 5:var l=t.return;try{is(t)}catch(a){te(t,l,a)}}}catch(a){te(t,t.return,a)}if(t===e){j=null;break}var s=t.sibling;if(s!==null){s.return=t.return,j=s;break}j=t.return}}var nm=Math.ceil,Jo=yt.ReactCurrentDispatcher,ta=yt.ReactCurrentOwner,Be=yt.ReactCurrentBatchConfig,$=0,ue=null,oe=null,pe=0,Re=0,Nn=Vt(0),le=0,Or=null,sn=0,pi=0,na=0,gr=null,Ne=null,ra=0,Fn=1/0,at=null,Zo=!1,as=null,bt=null,co=!1,zt=null,qo=0,yr=0,us=null,_o=-1,jo=0;function ke(){return $&6?ne():_o!==-1?_o:_o=ne()}function At(e){return e.mode&1?$&2&&pe!==0?pe&-pe:D0.transition!==null?(jo===0&&(jo=Lc()),jo):(e=F,e!==0||(e=window.event,e=e===void 0?16:Uc(e.type)),e):1}function Ze(e,t,n,r){if(50<yr)throw yr=0,us=null,Error(S(185));Ur(e,n,r),(!($&2)||e!==ue)&&(e===ue&&(!($&2)&&(pi|=n),le===4&&jt(e,pe)),ze(e,r),n===1&&$===0&&!(t.mode&1)&&(Fn=ne()+500,ui&&Wt()))}function ze(e,t){var n=e.callbackNode;Dp(e,t);var r=$o(e,e===ue?pe:0);if(r===0)n!==null&&Aa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Aa(n),t===1)e.tag===0?A0(Tu.bind(null,e)):sf(Tu.bind(null,e)),L0(function(){!($&6)&&Wt()}),n=null;else{switch(Oc(r)){case 1:n=zs;break;case 4:n=Ic;break;case 16:n=Oo;break;case 536870912:n=Mc;break;default:n=Oo}n=ld(n,qf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qf(e,t){if(_o=-1,jo=0,$&6)throw Error(S(327));var n=e.callbackNode;if(Rn()&&e.callbackNode!==n)return null;var r=$o(e,e===ue?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ei(e,r);else{t=r;var o=$;$|=2;var i=td();(ue!==e||pe!==t)&&(at=null,Fn=ne()+500,tn(e,t));do try{im();break}catch(s){ed(e,s)}while(1);Bs(),Jo.current=i,$=o,oe!==null?t=0:(ue=null,pe=0,t=le)}if(t!==0){if(t===2&&(o=$l(e),o!==0&&(r=o,t=cs(e,o))),t===1)throw n=Or,tn(e,0),jt(e,r),ze(e,ne()),n;if(t===6)jt(e,r);else{if(o=e.current.alternate,!(r&30)&&!rm(o)&&(t=ei(e,r),t===2&&(i=$l(e),i!==0&&(r=i,t=cs(e,i))),t===1))throw n=Or,tn(e,0),jt(e,r),ze(e,ne()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Xt(e,Ne,at);break;case 3:if(jt(e,r),(r&130023424)===r&&(t=ra+500-ne(),10<t)){if($o(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Wl(Xt.bind(null,e,Ne,at),t);break}Xt(e,Ne,at);break;case 4:if(jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Je(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*nm(r/1960))-r,10<r){e.timeoutHandle=Wl(Xt.bind(null,e,Ne,at),r);break}Xt(e,Ne,at);break;case 5:Xt(e,Ne,at);break;default:throw Error(S(329))}}}return ze(e,ne()),e.callbackNode===n?qf.bind(null,e):null}function cs(e,t){var n=gr;return e.current.memoizedState.isDehydrated&&(tn(e,t).flags|=256),e=ei(e,t),e!==2&&(t=Ne,Ne=n,t!==null&&fs(t)),e}function fs(e){Ne===null?Ne=e:Ne.push.apply(Ne,e)}function rm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!qe(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jt(e,t){for(t&=~na,t&=~pi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),r=1<<n;e[n]=-1,t&=~r}}function Tu(e){if($&6)throw Error(S(327));Rn();var t=$o(e,0);if(!(t&1))return ze(e,ne()),null;var n=ei(e,t);if(e.tag!==0&&n===2){var r=$l(e);r!==0&&(t=r,n=cs(e,r))}if(n===1)throw n=Or,tn(e,0),jt(e,t),ze(e,ne()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Xt(e,Ne,at),ze(e,ne()),null}function oa(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(Fn=ne()+500,ui&&Wt())}}function an(e){zt!==null&&zt.tag===0&&!($&6)&&Rn();var t=$;$|=1;var n=Be.transition,r=F;try{if(Be.transition=null,F=1,e)return e()}finally{F=r,Be.transition=n,$=t,!($&6)&&Wt()}}function ia(){Re=Nn.current,G(Nn)}function tn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,M0(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(Ds(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Uo();break;case 3:An(),G(je),G(xe),Gs();break;case 5:Ys(r);break;case 4:An();break;case 13:G(Z);break;case 19:G(Z);break;case 10:Vs(r.type._context);break;case 22:case 23:ia()}n=n.return}if(ue=e,oe=e=Dt(e.current,null),pe=Re=t,le=0,Or=null,na=pi=sn=0,Ne=gr=null,Jt!==null){for(t=0;t<Jt.length;t++)if(n=Jt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Jt=null}return e}function ed(e,t){do{var n=oe;try{if(Bs(),Eo.current=Ko,Xo){for(var r=q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Xo=!1}if(ln=0,ae=ie=q=null,mr=!1,Ir=0,ta.current=null,n===null||n.return===null){le=1,Or=t,oe=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=pe,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,p=s,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var w=yu(l);if(w!==null){w.flags&=-257,vu(w,l,s,i,t),w.mode&1&&gu(i,c,t),t=w,a=c;var x=t.updateQueue;if(x===null){var y=new Set;y.add(a),t.updateQueue=y}else x.add(a);break e}else{if(!(t&1)){gu(i,c,t),la();break e}a=Error(S(426))}}else if(K&&s.mode&1){var P=yu(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),vu(P,l,s,i,t),Fs(Dn(a,s));break e}}i=a=Dn(a,s),le!==4&&(le=2),gr===null?gr=[i]:gr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=bf(i,a,t);uu(i,f);break e;case 1:s=a;var u=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(bt===null||!bt.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Af(i,s,t);uu(i,v);break e}}i=i.return}while(i!==null)}rd(n)}catch(C){t=C,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(1)}function td(){var e=Jo.current;return Jo.current=Ko,e===null?Ko:e}function la(){(le===0||le===3||le===2)&&(le=4),ue===null||!(sn&268435455)&&!(pi&268435455)||jt(ue,pe)}function ei(e,t){var n=$;$|=2;var r=td();(ue!==e||pe!==t)&&(at=null,tn(e,t));do try{om();break}catch(o){ed(e,o)}while(1);if(Bs(),$=n,Jo.current=r,oe!==null)throw Error(S(261));return ue=null,pe=0,le}function om(){for(;oe!==null;)nd(oe)}function im(){for(;oe!==null&&!Tp();)nd(oe)}function nd(e){var t=id(e.alternate,e,Re);e.memoizedProps=e.pendingProps,t===null?rd(e):oe=t,ta.current=null}function rd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Z0(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,oe=null;return}}else if(n=J0(n,t,Re),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);le===0&&(le=5)}function Xt(e,t,n){var r=F,o=Be.transition;try{Be.transition=null,F=1,lm(e,t,n,r)}finally{Be.transition=o,F=r}return null}function lm(e,t,n,r){do Rn();while(zt!==null);if($&6)throw Error(S(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Fp(e,i),e===ue&&(oe=ue=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||co||(co=!0,ld(Oo,function(){return Rn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Be.transition,Be.transition=null;var l=F;F=1;var s=$;$|=4,ta.current=null,em(e,n),Jf(n,e),_0(Bl),bo=!!Ul,Bl=Ul=null,e.current=n,tm(n),Rp(),$=s,F=l,Be.transition=i}else e.current=n;if(co&&(co=!1,zt=e,qo=o),i=e.pendingLanes,i===0&&(bt=null),Lp(n.stateNode),ze(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Zo)throw Zo=!1,e=as,as=null,e;return qo&1&&e.tag!==0&&Rn(),i=e.pendingLanes,i&1?e===us?yr++:(yr=0,us=e):yr=0,Wt(),null}function Rn(){if(zt!==null){var e=Oc(qo),t=Be.transition,n=F;try{if(Be.transition=null,F=16>e?16:e,zt===null)var r=!1;else{if(e=zt,zt=null,qo=0,$&6)throw Error(S(331));var o=$;for($|=4,j=e.current;j!==null;){var i=j,l=i.child;if(j.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(j=c;j!==null;){var p=j;switch(p.tag){case 0:case 11:case 15:hr(8,p,i)}var m=p.child;if(m!==null)m.return=p,j=m;else for(;j!==null;){p=j;var g=p.sibling,w=p.return;if(Gf(p),p===c){j=null;break}if(g!==null){g.return=w,j=g;break}j=w}}}var x=i.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var P=y.sibling;y.sibling=null,y=P}while(y!==null)}}j=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,j=l;else e:for(;j!==null;){if(i=j,i.flags&2048)switch(i.tag){case 0:case 11:case 15:hr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,j=f;break e}j=i.return}}var u=e.current;for(j=u;j!==null;){l=j;var d=l.child;if(l.subtreeFlags&2064&&d!==null)d.return=l,j=d;else e:for(l=u;j!==null;){if(s=j,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:di(9,s)}}catch(C){te(s,s.return,C)}if(s===l){j=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,j=v;break e}j=s.return}}if($=o,Wt(),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(oi,e)}catch{}r=!0}return r}finally{F=n,Be.transition=t}}return!1}function Ru(e,t,n){t=Dn(n,t),t=bf(e,t,1),e=$t(e,t,1),t=ke(),e!==null&&(Ur(e,1,t),ze(e,t))}function te(e,t,n){if(e.tag===3)Ru(e,e,n);else for(;t!==null;){if(t.tag===3){Ru(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bt===null||!bt.has(r))){e=Dn(n,e),e=Af(t,e,1),t=$t(t,e,1),e=ke(),t!==null&&(Ur(t,1,e),ze(t,e));break}}t=t.return}}function sm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,ue===e&&(pe&n)===n&&(le===4||le===3&&(pe&130023424)===pe&&500>ne()-ra?tn(e,0):na|=n),ze(e,t)}function od(e,t){t===0&&(e.mode&1?(t=eo,eo<<=1,!(eo&130023424)&&(eo=4194304)):t=1);var n=ke();e=ht(e,t),e!==null&&(Ur(e,t,n),ze(e,n))}function am(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),od(e,n)}function um(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),od(e,n)}var id;id=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)_e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return _e=!1,K0(e,t,n);_e=!!(e.flags&131072)}else _e=!1,K&&t.flags&1048576&&af(t,Wo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;No(e,t),e=t.pendingProps;var o=On(t,xe.current);Tn(t,n),o=Ks(null,t,r,e,o,n);var i=Js();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pe(r)?(i=!0,Bo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Hs(t),o.updater=ci,t.stateNode=o,o._reactInternals=t,Jl(t,r,e,n),t=es(null,t,r,!0,i,n)):(t.tag=0,K&&i&&As(t),Se(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(No(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=fm(r),e=Ge(r,e),o){case 0:t=ql(null,t,r,e,n);break e;case 1:t=Su(null,t,r,e,n);break e;case 11:t=xu(null,t,r,e,n);break e;case 14:t=wu(null,t,r,Ge(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),ql(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),Su(e,t,r,o,n);case 3:e:{if(Bf(t),e===null)throw Error(S(387));r=t.pendingProps,i=t.memoizedState,o=i.element,df(e,t),Yo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Dn(Error(S(423)),t),t=ku(e,t,r,n,o);break e}else if(r!==o){o=Dn(Error(S(424)),t),t=ku(e,t,r,n,o);break e}else for(Ie=Ot(t.stateNode.containerInfo.firstChild),Me=t,K=!0,Ke=null,n=gf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($n(),r===o){t=gt(e,t,n);break e}Se(e,t,r,n)}t=t.child}return t;case 5:return yf(t),e===null&&Gl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Vl(r,o)?l=null:i!==null&&Vl(r,i)&&(t.flags|=32),Uf(e,t),Se(e,t,l,n),t.child;case 6:return e===null&&Gl(t),null;case 13:return Vf(e,t,n);case 4:return Qs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=bn(t,null,r,n):Se(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),xu(e,t,r,o,n);case 7:return Se(e,t,t.pendingProps,n),t.child;case 8:return Se(e,t,t.pendingProps.children,n),t.child;case 12:return Se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,W(Ho,r._currentValue),r._currentValue=l,i!==null)if(qe(i.value,l)){if(i.children===o.children&&!je.current){t=gt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=dt(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?a.next=a:(a.next=p.next,p.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Xl(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(S(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Xl(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Se(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Tn(t,n),o=Ve(o),r=r(o),t.flags|=1,Se(e,t,r,n),t.child;case 14:return r=t.type,o=Ge(r,t.pendingProps),o=Ge(r.type,o),wu(e,t,r,o,n);case 15:return Df(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),No(e,t),t.tag=1,Pe(r)?(e=!0,Bo(t)):e=!1,Tn(t,n),mf(t,r,o),Jl(t,r,o,n),es(null,t,r,!0,e,n);case 19:return Wf(e,t,n);case 22:return Ff(e,t,n)}throw Error(S(156,t.tag))};function ld(e,t){return Rc(e,t)}function cm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(e,t,n,r){return new cm(e,t,n,r)}function sa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fm(e){if(typeof e=="function")return sa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_s)return 11;if(e===js)return 14}return 2}function Dt(e,t){var n=e.alternate;return n===null?(n=Ue(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Po(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")sa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case hn:return nn(n.children,o,i,t);case Ns:l=8,o|=8;break;case Sl:return e=Ue(12,n,t,o|2),e.elementType=Sl,e.lanes=i,e;case kl:return e=Ue(13,n,t,o),e.elementType=kl,e.lanes=i,e;case El:return e=Ue(19,n,t,o),e.elementType=El,e.lanes=i,e;case mc:return mi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case dc:l=10;break e;case pc:l=9;break e;case _s:l=11;break e;case js:l=14;break e;case Ct:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Ue(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function nn(e,t,n,r){return e=Ue(7,e,r,t),e.lanes=n,e}function mi(e,t,n,r){return e=Ue(22,e,r,t),e.elementType=mc,e.lanes=n,e.stateNode={isHidden:!1},e}function hl(e,t,n){return e=Ue(6,e,null,t),e.lanes=n,e}function gl(e,t,n){return t=Ue(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ki(0),this.expirationTimes=Ki(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ki(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function aa(e,t,n,r,o,i,l,s,a){return e=new dm(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ue(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hs(i),e}function pm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function sd(e){if(!e)return Ut;e=e._reactInternals;e:{if(cn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Pe(n))return lf(e,n,t)}return t}function ad(e,t,n,r,o,i,l,s,a){return e=aa(n,r,!0,e,o,i,l,s,a),e.context=sd(null),n=e.current,r=ke(),o=At(n),i=dt(r,o),i.callback=t??null,$t(n,i,o),e.current.lanes=o,Ur(e,o,r),ze(e,r),e}function hi(e,t,n,r){var o=t.current,i=ke(),l=At(o);return n=sd(n),t.context===null?t.context=n:t.pendingContext=n,t=dt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=$t(o,t,l),e!==null&&(Ze(e,o,l,i),ko(e,o,l)),l}function ti(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Iu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ua(e,t){Iu(e,t),(e=e.alternate)&&Iu(e,t)}function mm(){return null}var ud=typeof reportError=="function"?reportError:function(e){console.error(e)};function ca(e){this._internalRoot=e}gi.prototype.render=ca.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));hi(e,t,null,null)};gi.prototype.unmount=ca.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;an(function(){hi(null,e,null,null)}),t[mt]=null}};function gi(e){this._internalRoot=e}gi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ac();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_t.length&&t!==0&&t<_t[n].priority;n++);_t.splice(n,0,e),n===0&&Fc(e)}};function fa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Mu(){}function hm(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=ti(l);i.call(c)}}var l=ad(t,r,e,0,null,!1,!1,"",Mu);return e._reactRootContainer=l,e[mt]=l.current,jr(e.nodeType===8?e.parentNode:e),an(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=ti(a);s.call(c)}}var a=aa(e,0,!1,null,null,!1,!1,"",Mu);return e._reactRootContainer=a,e[mt]=a.current,jr(e.nodeType===8?e.parentNode:e),an(function(){hi(t,a,n,r)}),a}function vi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=ti(l);s.call(a)}}hi(t,l,e,o)}else l=hm(n,t,e,o,r);return ti(l)}$c=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=sr(t.pendingLanes);n!==0&&(Ts(t,n|1),ze(t,ne()),!($&6)&&(Fn=ne()+500,Wt()))}break;case 13:an(function(){var r=ht(e,1);if(r!==null){var o=ke();Ze(r,e,1,o)}}),ua(e,1)}};Rs=function(e){if(e.tag===13){var t=ht(e,134217728);if(t!==null){var n=ke();Ze(t,e,134217728,n)}ua(e,134217728)}};bc=function(e){if(e.tag===13){var t=At(e),n=ht(e,t);if(n!==null){var r=ke();Ze(n,e,t,r)}ua(e,t)}};Ac=function(){return F};Dc=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};Ml=function(e,t,n){switch(t){case"input":if(_l(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ai(r);if(!o)throw Error(S(90));gc(r),_l(r,o)}}}break;case"textarea":vc(e,n);break;case"select":t=n.value,t!=null&&_n(e,!!n.multiple,t,!1)}};Nc=oa;_c=an;var gm={usingClientEntryPoint:!1,Events:[Vr,xn,ai,Ec,Cc,oa]},er={findFiberByHostInstance:Kt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ym={bundleType:er.bundleType,version:er.version,rendererPackageName:er.rendererPackageName,rendererConfig:er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zc(e),e===null?null:e.stateNode},findFiberByHostInstance:er.findFiberByHostInstance||mm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fo.isDisabled&&fo.supportsFiber)try{oi=fo.inject(ym),it=fo}catch{}}$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gm;$e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fa(t))throw Error(S(200));return pm(e,t,null,n)};$e.createRoot=function(e,t){if(!fa(e))throw Error(S(299));var n=!1,r="",o=ud;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=aa(e,1,!1,null,null,n,!1,r,o),e[mt]=t.current,jr(e.nodeType===8?e.parentNode:e),new ca(t)};$e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=zc(t),e=e===null?null:e.stateNode,e};$e.flushSync=function(e){return an(e)};$e.hydrate=function(e,t,n){if(!yi(t))throw Error(S(200));return vi(null,e,t,!0,n)};$e.hydrateRoot=function(e,t,n){if(!fa(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=ud;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=ad(t,null,e,1,n??null,o,!1,i,l),e[mt]=t.current,jr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new gi(t)};$e.render=function(e,t,n){if(!yi(t))throw Error(S(200));return vi(null,e,t,!1,n)};$e.unmountComponentAtNode=function(e){if(!yi(e))throw Error(S(40));return e._reactRootContainer?(an(function(){vi(null,null,e,!1,function(){e._reactRootContainer=null,e[mt]=null})}),!0):!1};$e.unstable_batchedUpdates=oa;$e.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!yi(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return vi(e,t,n,!1,r)};$e.version="18.2.0-next-9e3b772b8-20220608";function cd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cd)}catch(e){console.error(e)}}cd(),sc.exports=$e;var vm=sc.exports,Lu=vm;xl.createRoot=Lu.createRoot,xl.hydrateRoot=Lu.hydrateRoot;const fn="lg:px-36 md:px-24 px-12",fd="my-expertise",dd="work-experience",xm="hero-section",pd="contact-section",md="testimonials-section",xi="hover:-translate-y-1 transition-transform ease-in",da="-";function wm(e){const t=km(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;function o(l){const s=l.split(da);return s[0]===""&&s.length!==1&&s.shift(),hd(s,t)||Sm(l)}function i(l,s){const a=n[l]||[];return s&&r[l]?[...a,...r[l]]:a}return{getClassGroupId:o,getConflictingClassGroupIds:i}}function hd(e,t){var l;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),o=r?hd(e.slice(1),r):void 0;if(o)return o;if(t.validators.length===0)return;const i=e.join(da);return(l=t.validators.find(({validator:s})=>s(i)))==null?void 0:l.classGroupId}const Ou=/^\[(.+)\]$/;function Sm(e){if(Ou.test(e)){const t=Ou.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}}function km(e){const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return Cm(Object.entries(e.classGroups),n).forEach(([i,l])=>{ds(l,r,i,t)}),r}function ds(e,t,n,r){e.forEach(o=>{if(typeof o=="string"){const i=o===""?t:$u(t,o);i.classGroupId=n;return}if(typeof o=="function"){if(Em(o)){ds(o(r),t,n,r);return}t.validators.push({validator:o,classGroupId:n});return}Object.entries(o).forEach(([i,l])=>{ds(l,$u(t,i),n,r)})})}function $u(e,t){let n=e;return t.split(da).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n}function Em(e){return e.isThemeGetter}function Cm(e,t){return t?e.map(([n,r])=>{const o=r.map(i=>typeof i=="string"?t+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([l,s])=>[t+l,s])):i);return[n,o]}):e}function Nm(e){if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;function o(i,l){n.set(i,l),t++,t>e&&(t=0,r=n,n=new Map)}return{get(i){let l=n.get(i);if(l!==void 0)return l;if((l=r.get(i))!==void 0)return o(i,l),l},set(i,l){n.has(i)?n.set(i,l):o(i,l)}}}const gd="!";function _m(e){const t=e.separator,n=t.length===1,r=t[0],o=t.length;return function(l){const s=[];let a=0,c=0,p;for(let y=0;y<l.length;y++){let P=l[y];if(a===0){if(P===r&&(n||l.slice(y,y+o)===t)){s.push(l.slice(c,y)),c=y+o;continue}if(P==="/"){p=y;continue}}P==="["?a++:P==="]"&&a--}const m=s.length===0?l:l.substring(c),g=m.startsWith(gd),w=g?m.substring(1):m,x=p&&p>c?p-c:void 0;return{modifiers:s,hasImportantModifier:g,baseClassName:w,maybePostfixModifierPosition:x}}}function jm(e){if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t}function Pm(e){return{cache:Nm(e.cacheSize),splitModifiers:_m(e),...wm(e)}}const zm=/\s+/;function Tm(e,t){const{splitModifiers:n,getClassGroupId:r,getConflictingClassGroupIds:o}=t,i=new Set;return e.trim().split(zm).map(l=>{const{modifiers:s,hasImportantModifier:a,baseClassName:c,maybePostfixModifierPosition:p}=n(l);let m=r(p?c.substring(0,p):c),g=!!p;if(!m){if(!p)return{isTailwindClass:!1,originalClassName:l};if(m=r(c),!m)return{isTailwindClass:!1,originalClassName:l};g=!1}const w=jm(s).join(":");return{isTailwindClass:!0,modifierId:a?w+gd:w,classGroupId:m,originalClassName:l,hasPostfixModifier:g}}).reverse().filter(l=>{if(!l.isTailwindClass)return!0;const{modifierId:s,classGroupId:a,hasPostfixModifier:c}=l,p=s+a;return i.has(p)?!1:(i.add(p),o(a,c).forEach(m=>i.add(s+m)),!0)}).reverse().map(l=>l.originalClassName).join(" ")}function Rm(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=yd(t))&&(r&&(r+=" "),r+=n);return r}function yd(e){if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=yd(e[r]))&&(n&&(n+=" "),n+=t);return n}function Im(e,...t){let n,r,o,i=l;function l(a){const c=t.reduce((p,m)=>m(p),e());return n=Pm(c),r=n.cache.get,o=n.cache.set,i=s,s(a)}function s(a){const c=r(a);if(c)return c;const p=Tm(a,n);return o(a,p),p}return function(){return i(Rm.apply(null,arguments))}}function Q(e){const t=n=>n[e]||[];return t.isThemeGetter=!0,t}const vd=/^\[(?:([a-z-]+):)?(.+)\]$/i,Mm=/^\d+\/\d+$/,Lm=new Set(["px","full","screen"]),Om=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,$m=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,bm=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Am=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function Ye(e){return qt(e)||Lm.has(e)||Mm.test(e)}function kt(e){return Hn(e,"length",Qm)}function qt(e){return!!e&&!Number.isNaN(Number(e))}function po(e){return Hn(e,"number",qt)}function tr(e){return!!e&&Number.isInteger(Number(e))}function Dm(e){return e.endsWith("%")&&qt(e.slice(0,-1))}function I(e){return vd.test(e)}function Et(e){return Om.test(e)}const Fm=new Set(["length","size","percentage"]);function Um(e){return Hn(e,Fm,xd)}function Bm(e){return Hn(e,"position",xd)}const Vm=new Set(["image","url"]);function Wm(e){return Hn(e,Vm,Gm)}function Hm(e){return Hn(e,"",Ym)}function nr(){return!0}function Hn(e,t,n){const r=vd.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1}function Qm(e){return $m.test(e)}function xd(){return!1}function Ym(e){return bm.test(e)}function Gm(e){return Am.test(e)}function Xm(){const e=Q("colors"),t=Q("spacing"),n=Q("blur"),r=Q("brightness"),o=Q("borderColor"),i=Q("borderRadius"),l=Q("borderSpacing"),s=Q("borderWidth"),a=Q("contrast"),c=Q("grayscale"),p=Q("hueRotate"),m=Q("invert"),g=Q("gap"),w=Q("gradientColorStops"),x=Q("gradientColorStopPositions"),y=Q("inset"),P=Q("margin"),f=Q("opacity"),u=Q("padding"),d=Q("saturate"),v=Q("scale"),C=Q("sepia"),N=Q("skew"),k=Q("space"),z=Q("translate"),H=()=>["auto","contain","none"],M=()=>["auto","hidden","clip","visible","scroll"],we=()=>["auto",I,t],D=()=>[I,t],xt=()=>["",Ye,kt],Ht=()=>["auto",qt,I],Qr=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],wt=()=>["solid","dashed","dotted","double","none"],dn=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],_=()=>["start","end","center","between","around","evenly","stretch"],T=()=>["","0",I],R=()=>["auto","avoid","all","avoid-page","page","left","right","column"],V=()=>[qt,po],J=()=>[qt,I];return{cacheSize:500,separator:":",theme:{colors:[nr],spacing:[Ye,kt],blur:["none","",Et,I],brightness:V(),borderColor:[e],borderRadius:["none","","full",Et,I],borderSpacing:D(),borderWidth:xt(),contrast:V(),grayscale:T(),hueRotate:J(),invert:T(),gap:D(),gradientColorStops:[e],gradientColorStopPositions:[Dm,kt],inset:we(),margin:we(),opacity:V(),padding:D(),saturate:V(),scale:V(),sepia:T(),skew:J(),space:D(),translate:D()},classGroups:{aspect:[{aspect:["auto","square","video",I]}],container:["container"],columns:[{columns:[Et]}],"break-after":[{"break-after":R()}],"break-before":[{"break-before":R()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Qr(),I]}],overflow:[{overflow:M()}],"overflow-x":[{"overflow-x":M()}],"overflow-y":[{"overflow-y":M()}],overscroll:[{overscroll:H()}],"overscroll-x":[{"overscroll-x":H()}],"overscroll-y":[{"overscroll-y":H()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[y]}],"inset-x":[{"inset-x":[y]}],"inset-y":[{"inset-y":[y]}],start:[{start:[y]}],end:[{end:[y]}],top:[{top:[y]}],right:[{right:[y]}],bottom:[{bottom:[y]}],left:[{left:[y]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",tr,I]}],basis:[{basis:we()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",I]}],grow:[{grow:T()}],shrink:[{shrink:T()}],order:[{order:["first","last","none",tr,I]}],"grid-cols":[{"grid-cols":[nr]}],"col-start-end":[{col:["auto",{span:["full",tr,I]},I]}],"col-start":[{"col-start":Ht()}],"col-end":[{"col-end":Ht()}],"grid-rows":[{"grid-rows":[nr]}],"row-start-end":[{row:["auto",{span:[tr,I]},I]}],"row-start":[{"row-start":Ht()}],"row-end":[{"row-end":Ht()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",I]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",I]}],gap:[{gap:[g]}],"gap-x":[{"gap-x":[g]}],"gap-y":[{"gap-y":[g]}],"justify-content":[{justify:["normal",..._()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",..._(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[..._(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[u]}],px:[{px:[u]}],py:[{py:[u]}],ps:[{ps:[u]}],pe:[{pe:[u]}],pt:[{pt:[u]}],pr:[{pr:[u]}],pb:[{pb:[u]}],pl:[{pl:[u]}],m:[{m:[P]}],mx:[{mx:[P]}],my:[{my:[P]}],ms:[{ms:[P]}],me:[{me:[P]}],mt:[{mt:[P]}],mr:[{mr:[P]}],mb:[{mb:[P]}],ml:[{ml:[P]}],"space-x":[{"space-x":[k]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[k]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",I,t]}],"min-w":[{"min-w":["min","max","fit",I,Ye]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[Et]},Et,I]}],h:[{h:[I,t,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",Ye,I]}],"max-h":[{"max-h":[I,t,"min","max","fit"]}],"font-size":[{text:["base",Et,kt]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",po]}],"font-family":[{font:[nr]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",I]}],"line-clamp":[{"line-clamp":["none",qt,po]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ye,I]}],"list-image":[{"list-image":["none",I]}],"list-style-type":[{list:["none","disc","decimal",I]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[f]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[f]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...wt(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Ye,kt]}],"underline-offset":[{"underline-offset":["auto",Ye,I]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:D()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",I]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",I]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[f]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Qr(),Bm]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Um]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Wm]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[x]}],"gradient-via-pos":[{via:[x]}],"gradient-to-pos":[{to:[x]}],"gradient-from":[{from:[w]}],"gradient-via":[{via:[w]}],"gradient-to":[{to:[w]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[f]}],"border-style":[{border:[...wt(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[f]}],"divide-style":[{divide:wt()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...wt()]}],"outline-offset":[{"outline-offset":[Ye,I]}],"outline-w":[{outline:[Ye,kt]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:xt()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[f]}],"ring-offset-w":[{"ring-offset":[Ye,kt]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Et,Hm]}],"shadow-color":[{shadow:[nr]}],opacity:[{opacity:[f]}],"mix-blend":[{"mix-blend":dn()}],"bg-blend":[{"bg-blend":dn()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[a]}],"drop-shadow":[{"drop-shadow":["","none",Et,I]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[p]}],invert:[{invert:[m]}],saturate:[{saturate:[d]}],sepia:[{sepia:[C]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[a]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[p]}],"backdrop-invert":[{"backdrop-invert":[m]}],"backdrop-opacity":[{"backdrop-opacity":[f]}],"backdrop-saturate":[{"backdrop-saturate":[d]}],"backdrop-sepia":[{"backdrop-sepia":[C]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",I]}],duration:[{duration:J()}],ease:[{ease:["linear","in","out","in-out",I]}],delay:[{delay:J()}],animate:[{animate:["none","spin","ping","pulse","bounce",I]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[v]}],"scale-x":[{"scale-x":[v]}],"scale-y":[{"scale-y":[v]}],rotate:[{rotate:[tr,I]}],"translate-x":[{"translate-x":[z]}],"translate-y":[{"translate-y":[z]}],"skew-x":[{"skew-x":[N]}],"skew-y":[{"skew-y":[N]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",I]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",I]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":D()}],"scroll-mx":[{"scroll-mx":D()}],"scroll-my":[{"scroll-my":D()}],"scroll-ms":[{"scroll-ms":D()}],"scroll-me":[{"scroll-me":D()}],"scroll-mt":[{"scroll-mt":D()}],"scroll-mr":[{"scroll-mr":D()}],"scroll-mb":[{"scroll-mb":D()}],"scroll-ml":[{"scroll-ml":D()}],"scroll-p":[{"scroll-p":D()}],"scroll-px":[{"scroll-px":D()}],"scroll-py":[{"scroll-py":D()}],"scroll-ps":[{"scroll-ps":D()}],"scroll-pe":[{"scroll-pe":D()}],"scroll-pt":[{"scroll-pt":D()}],"scroll-pr":[{"scroll-pr":D()}],"scroll-pb":[{"scroll-pb":D()}],"scroll-pl":[{"scroll-pl":D()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",I]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Ye,kt,po]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const Km=Im(Xm),X=Km;var In=(e=>(e.BLUE="blue",e.RED="red",e))(In||{});const vr=({variant:e,className:t,style:n})=>e==="blue"?h.jsx("div",{className:X("absolute w-96 h-96 rounded-full blur-[175px]",t),style:{...n,backgroundColor:"#008AAA"}}):h.jsx("div",{className:X("absolute w-96 h-96 bg-pink-950 rounded-full blur-[175px]",t),style:n}),Jm="/assets/wasiq-71392339.jpeg",Zm="/assets/danish-7b5d2871.jpg",qm="/assets/Wahab-7ec08efd.jpeg",eh="/assets/supertokens-blog-post-467ca9b8.png",th="/assets/react-state-management-551cfd8e.png",nh="/assets/understanding-large-unfamiliar-codebases-b5651f36.webp",rh="/assets/orval-logo-d9856eab.png",oh="/assets/typescript-python-2e7c5894.jpeg",ih="/assets/my_picture_no_bg-b36f1d32.png",vt={person:{picture:ih,name:"Rohan Hussain",titles:["Software Engineer","Master Communicator","UI/UX Designer","Leader","Team Player"],phoneNumber:"+923320460729",email:"contact@rohanhussain.com",linkedIn:"https://linkedin.com/in/rohan-hussain",github:"https://github.com/hallucinogenizer"},skills:[{icon:"fa-brands fa-react",title:"ReactJS, NextJS",description:"Experienced in building modern interactive user interfaces using React, Server Components, and NextJS 14 App Router."},{icon:"fa-brands fa-react",title:"NextJS App Router",description:"Proficient in developing React applications with NextJS v14/15."},{icon:"fa-brands fa-node",title:"ExpressJS, NestJS",description:"Skilled in building scalable and maintainable server-side applications using NestJS."},{icon:"fa-brands fa-aws",title:"DevOps with AWS",description:"Expertise in cloud computing with AWS, including IAM, EC2, Lambdas, and CI/CD CodePipeline."},{icon:"fa-solid fa-paint-brush",title:"UI/UX Design",description:"Proficient in creating visually appealing and user-friendly interfaces, considering both design and user experience principles."},{icon:"fa-solid fa-comments",title:"Communication",description:"Excellent communication is my superpower and I use it to enable my team to work smoothly."}],testimonials:[{quote:"I had the pleasure of collaborating with Rohan on a search feature for our platform, and I was thoroughly impressed with his skills as an engineer. Rohan is incredibly intelligent, and responsible, and has a remarkable ability to take ownership and develop products.",person:{name:"Wasiq Noor Qasmi",image:Jm,title:`Senior Software Engineer, Mentor
  @ Educative`}},{quote:`I highly recommend Rohan for any tech leadership role. His versatility in both back-end and front-end development is outstanding. With a childhood background in design, he brings a unique creative perspective, enabling him to develop visually appealing portals without extensive support.
  
  Rohan's well-rounded understanding of business, coupled with his ownership mindset, is reflected in the valuable suggestions he consistently provides related to tech and beyond.`,person:{name:"Danish Khan",image:Zm,title:`Founder & CEO
  KICKSAT Preparations`}},{quote:`Having worked closely with Rohan at IEC and across various projects, I can attest that it's been an incredible journey. Rohan stands out as a well-rounded engineer—an empathetic manager and an exceptional problem solver. His blend of kindness, empathy, and problem-solving skills make him not only a valuable asset but a standout addition to any team. 
        
  Highly recommended!`,person:{name:"Abdul Wahab",image:qm,title:`Full Stack Software Engineer
  Coworker at IEC`}}],experience:[{date:"May 2023 - Present",companyName:"Metal (Y-Combinator Startup)",jobTitle:"Founding Full Stack Frontend-Heavy Software Engineer II (Level 4)",description:`Metal formerly known as Apollo Group is the next project of the Airlift Technologies team, that raised $120M+ in capital before shutting down. I have helped launch 2 MVP products, involving GPT-based chatbots and React-based web applications. I am working in a dynamic startup environment with a small team of software engineers.
      
      Within a period of 8 months, I was promoted two times due to exceptional performance.`},{date:"August 2022 - April 2023",companyName:"Educative",jobTitle:"Full Stack Software Engineer",description:"I worked in the Learner Experience team at Educative where we dealt with upto 80% of the codebase and shipped features directly used by over a million users. Good programming practices, scalability, and healthy teamwork were at the heart of our work at Educative."},{date:"May - July 2022",companyName:"Airlift Technologies Pakistan",jobTitle:"Full Stack Software Engineer",description:"Airlift was the largest startup in the history of Pakistan. Joined with preference for Full Stack/Backend Development and ended due to Airlift shutting down in Pakistan."},{date:"August 2021 - April 2023",companyName:"Open Data Pakistan (Funded by Higher Education Commission)",jobTitle:"Team Lead Software Engineer",description:"Built on the Open Source CKAN project | Developed custom plugins and themes | Managed team of 3 developers | Upgraded the production AWS EC2 instance from CKAN 2.8 to CKAN 2.9 | This project also acted as my Senior Year Project."},{date:"December 2021 - April 2022",companyName:"Institute of Emerging Careers (IEC)",jobTitle:"Team Lead Software Engineer",description:`Designed for Low-Computer-Literate Students from non-Urban Areas | System optimized for low-power systems | Server-side routing | Ideated 4 scalable independent systems for the 4 phases of the IEC Process (Acquisition, Learning, Placement, Community) that work in harmony.
  
  For over a year I worked as the only engineer on the project. Afterwards as a 6-month exit plan, I helped build a team and assumed the role of Engineering Manager and Mentor before finally leaving the company when the team no longer needed my oversight.`}],blog:[{title:"How to incrementally add TypeScript response-types to your React/Svelte/Vue/Angular API data fetching",link:"https://rohanhussain.com/blog/blog/post/how-to-incrementally-introduce-strong-typing-to-your-api-fetches-in-react/",description:"This article dives into how you can use projects like orval to consume an OpenAPI spec file and produce a client wrapper for almost any fetching library of your choosing",thumbnail:rh,datePosted:"July 26, 2024"},{title:"Setting up Supertokens with a NextJS 13 Frontend and an ExpressJS Backend",link:"https://rohanhussain.com/blog/blog/post/supertokens-with-nextjs-and-expressjs/",description:"This article teaches you how to locally set up a NextJS 13 frontend (with App Router as well as Pages Router) and a separate ExpressJS backend and also explains how the whole setup works.",thumbnail:eh,datePosted:"August 12, 2023"},{title:"State Management Tools in React",link:"https://rohanhussain.com/blog/blog/post/react-state-management-tools/",description:"ContextAPI, Redux, Zustand, Jotai, what to use?",thumbnail:th,datePosted:"May 8, 2023"},{title:"Typescript-like Types in Python 3",link:"https://rohanhussain.com/blog/blog/post/typescript-like-types-in-python/",description:"def sum(x: int, y: int) -> int",thumbnail:oh,datePosted:"February 14, 2023"},{title:"Understanding Large Unfamiliar Codebases",link:"https://rohanhussain.com/blog/blog/post/understanding-large-codebases/",description:"This article explores techniques that help you get started with understanding large and complex codebases that you are new to.",thumbnail:nh,datePosted:"September 23, 2022"}]},lh=({className:e,style:t})=>h.jsx("div",{className:e,style:t,children:h.jsx("img",{src:vt.person.picture})}),Tt=({iconClassNames:e,link:t})=>h.jsx("a",{href:t,className:`w-12 h-12 bg-gradient-to-b from-white/10 to-white/5 rounded-3xl flex justify-center items-center hover:to-white/10 cursor-pointer ${xi}`,target:"_blank",children:h.jsx("i",{className:`${e} text-cyan-500`})}),sh="/assets/Rohan Hussain-f3838a0b.pdf",{person:en}=vt,ah=({className:e})=>h.jsxs("div",{className:X("flex flex-col gap-3",e),children:[h.jsx(uh,{className:"md:mb-4 mb-2"}),h.jsx(fh,{className:"md:mb-2 mb-1"}),h.jsx(dh,{}),h.jsx(ph,{className:"md:mt-10 mt-4"}),h.jsx(mh,{className:"mt-8"})]}),uh=({className:e})=>h.jsxs("div",{className:X("inline-flex items-center gap-4",e),children:[h.jsx(ch,{})," ",h.jsx("p",{className:"text-stone-300 text-xl leading-loose",style:{fontFamily:"Roboto Mono"},children:"Hello!"})]}),ch=()=>h.jsx("div",{className:"w-8 h-px border-2 border-sky-700"}),fh=({className:e})=>h.jsx("h1",{className:X("text-light md:text-6xl text-5xl font-bold font-['Poppins'] uppercase leading-none",e),children:en.name}),dh=()=>{const[e,t]=L.useState(0);return L.useEffect(()=>{const n=setInterval(()=>{t(r=>(r+1)%en.titles.length)},2e3);return()=>clearInterval(n)},[]),h.jsxs("div",{className:X("md:text-3xl text-2xl font-bold leading-10 tracking-widest","flex items-start gap-x-5 lg:flex-row flex-col"),style:{fontFamily:"Roboto Mono"},children:[h.jsx("p",{className:"text-stone-300",children:"I'm a "}),h.jsx("div",{className:"text-teal-500 h-10 overflow-clip relative",style:{width:"30rem"},children:en.titles.map((n,r)=>h.jsx("p",{className:X("absolute left-0 top-24 transition-all duration-500",r===e&&"top-0"),children:n}))})]})},ph=({className:e})=>{const[t,n]=L.useState(!1);return h.jsxs("a",{className:X("px-3 py-2 w-fit border border-teal-500 hover:bg-teal-500 rounded","md:text-base text-sm text-teal-500 hover:text-white","flex items-center gap-1",e),onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),href:sh,children:[h.jsx("span",{children:"Download Resume"}),h.jsx("i",{className:X("fa-solid fa-chevron-down transition-all duration-500 pl-1",t&&"-rotate-90 pl-0")})]})},mh=({className:e})=>h.jsxs("div",{className:X("flex gap-6",e),children:[h.jsx(Tt,{iconClassNames:"fa-solid fa-phone",link:`tel:${en.phoneNumber}`}),h.jsx(Tt,{iconClassNames:"fa-regular fa-envelope",link:`mailto:${en.email}`}),h.jsx(Tt,{iconClassNames:"fa-brands fa-github",link:en.github}),h.jsx(Tt,{iconClassNames:"fa-brands fa-linkedin-in",link:en.linkedIn})]});function hh(){return h.jsxs("div",{className:"w-full relative py-16",id:xm,children:[h.jsx(vr,{variant:In.BLUE,className:"left-16"}),h.jsx(vr,{variant:In.RED,className:"right-0 -bottom-24 bg-[#9E2A3D]/50 absolute lg:hidden w-96 h-96"}),h.jsxs("div",{className:X("pt-0 md:pt-32 lg:pt-0 flex gap-4 md:flex-row flex-col-reverse justify-between relative z-10",fn),children:[h.jsx(ah,{className:"flex-shrink"}),h.jsxs("div",{className:"relative",children:[h.jsx(lh,{className:"lg:absolute z-10 top-0 right-0 lg:w-[30rem] lg:h-[30rem] md:w-96 md:h-96 w-52 h-52"}),h.jsx(vr,{variant:In.RED,className:"right-12 top-0 bg-[#9E2A3D] lg:absolute lg:block hidden w-96 h-96"})]})]})]})}const gh="/assets/bg-stars-78e98123.png",wi=({title:e})=>h.jsxs("h1",{className:"leading-10 font-['Poppins']",children:[h.jsx("span",{className:"text-neutral-300 md:text-4xl text-4xl font-medium",children:e[0]}),h.jsx("br",{}),h.jsx("span",{className:"text-cyan-500 md:text-6xl text-5xl font-semibold ",children:e[1]})]});function yh({content:e}){return h.jsxs("div",{className:X("md:w-96 w-full md:h-72 bg-white/10 rounded-lg md:p-8 p-6 text-light","flex flex-col gap-4",xi),style:{minHeight:"15rem"},children:[h.jsxs("div",{className:"relative w-12 h-12",children:[h.jsx("div",{className:"absolute z-10 top-3 left-2",children:h.jsx("i",{className:`${e.icon} fa-2xl text-cyan-500`})}),h.jsx("div",{className:"bg-cyan-500/50 absolute blur-md rounded-full w-12 h-12 top-0 left-0"})]}),h.jsx("h3",{className:"text-neutral-300 text-lg font-medium leading-relaxed",style:{fontFamily:"Roboto Mono"},children:e.title}),h.jsx("p",{className:"text-stone-300 text-base font-normal font-['Segoe UI'] leading-loose line-clamp-3 overflow-ellipsis",children:e.description})]})}function vh(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function xh(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var wh=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(xh(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=vh(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),ye="-ms-",ni="-moz-",b="-webkit-",wd="comm",pa="rule",ma="decl",Sh="@import",Sd="@keyframes",kh="@layer",Eh=Math.abs,Si=String.fromCharCode,Ch=Object.assign;function Nh(e,t){return de(e,0)^45?(((t<<2^de(e,0))<<2^de(e,1))<<2^de(e,2))<<2^de(e,3):0}function kd(e){return e.trim()}function _h(e,t){return(e=t.exec(e))?e[0]:e}function A(e,t,n){return e.replace(t,n)}function ps(e,t){return e.indexOf(t)}function de(e,t){return e.charCodeAt(t)|0}function $r(e,t,n){return e.slice(t,n)}function nt(e){return e.length}function ha(e){return e.length}function mo(e,t){return t.push(e),e}function jh(e,t){return e.map(t).join("")}var ki=1,Un=1,Ed=0,Te=0,re=0,Qn="";function Ei(e,t,n,r,o,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:ki,column:Un,length:l,return:""}}function rr(e,t){return Ch(Ei("",null,null,"",null,null,0),e,{length:-e.length},t)}function Ph(){return re}function zh(){return re=Te>0?de(Qn,--Te):0,Un--,re===10&&(Un=1,ki--),re}function Le(){return re=Te<Ed?de(Qn,Te++):0,Un++,re===10&&(Un=1,ki++),re}function st(){return de(Qn,Te)}function zo(){return Te}function Hr(e,t){return $r(Qn,e,t)}function br(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Cd(e){return ki=Un=1,Ed=nt(Qn=e),Te=0,[]}function Nd(e){return Qn="",e}function To(e){return kd(Hr(Te-1,ms(e===91?e+2:e===40?e+1:e)))}function Th(e){for(;(re=st())&&re<33;)Le();return br(e)>2||br(re)>3?"":" "}function Rh(e,t){for(;--t&&Le()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return Hr(e,zo()+(t<6&&st()==32&&Le()==32))}function ms(e){for(;Le();)switch(re){case e:return Te;case 34:case 39:e!==34&&e!==39&&ms(re);break;case 40:e===41&&ms(e);break;case 92:Le();break}return Te}function Ih(e,t){for(;Le()&&e+re!==47+10;)if(e+re===42+42&&st()===47)break;return"/*"+Hr(t,Te-1)+"*"+Si(e===47?e:Le())}function Mh(e){for(;!br(st());)Le();return Hr(e,Te)}function Lh(e){return Nd(Ro("",null,null,null,[""],e=Cd(e),0,[0],e))}function Ro(e,t,n,r,o,i,l,s,a){for(var c=0,p=0,m=l,g=0,w=0,x=0,y=1,P=1,f=1,u=0,d="",v=o,C=i,N=r,k=d;P;)switch(x=u,u=Le()){case 40:if(x!=108&&de(k,m-1)==58){ps(k+=A(To(u),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:k+=To(u);break;case 9:case 10:case 13:case 32:k+=Th(x);break;case 92:k+=Rh(zo()-1,7);continue;case 47:switch(st()){case 42:case 47:mo(Oh(Ih(Le(),zo()),t,n),a);break;default:k+="/"}break;case 123*y:s[c++]=nt(k)*f;case 125*y:case 59:case 0:switch(u){case 0:case 125:P=0;case 59+p:f==-1&&(k=A(k,/\f/g,"")),w>0&&nt(k)-m&&mo(w>32?Au(k+";",r,n,m-1):Au(A(k," ","")+";",r,n,m-2),a);break;case 59:k+=";";default:if(mo(N=bu(k,t,n,c,p,o,s,d,v=[],C=[],m),i),u===123)if(p===0)Ro(k,t,N,N,v,i,m,s,C);else switch(g===99&&de(k,3)===110?100:g){case 100:case 108:case 109:case 115:Ro(e,N,N,r&&mo(bu(e,N,N,0,0,o,s,d,o,v=[],m),C),o,C,m,s,r?v:C);break;default:Ro(k,N,N,N,[""],C,0,s,C)}}c=p=w=0,y=f=1,d=k="",m=l;break;case 58:m=1+nt(k),w=x;default:if(y<1){if(u==123)--y;else if(u==125&&y++==0&&zh()==125)continue}switch(k+=Si(u),u*y){case 38:f=p>0?1:(k+="\f",-1);break;case 44:s[c++]=(nt(k)-1)*f,f=1;break;case 64:st()===45&&(k+=To(Le())),g=st(),p=m=nt(d=k+=Mh(zo())),u++;break;case 45:x===45&&nt(k)==2&&(y=0)}}return i}function bu(e,t,n,r,o,i,l,s,a,c,p){for(var m=o-1,g=o===0?i:[""],w=ha(g),x=0,y=0,P=0;x<r;++x)for(var f=0,u=$r(e,m+1,m=Eh(y=l[x])),d=e;f<w;++f)(d=kd(y>0?g[f]+" "+u:A(u,/&\f/g,g[f])))&&(a[P++]=d);return Ei(e,t,n,o===0?pa:s,a,c,p)}function Oh(e,t,n){return Ei(e,t,n,wd,Si(Ph()),$r(e,2,-2),0)}function Au(e,t,n,r){return Ei(e,t,n,ma,$r(e,0,r),$r(e,r+1,-1),r)}function Mn(e,t){for(var n="",r=ha(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function $h(e,t,n,r){switch(e.type){case kh:if(e.children.length)break;case Sh:case ma:return e.return=e.return||e.value;case wd:return"";case Sd:return e.return=e.value+"{"+Mn(e.children,r)+"}";case pa:e.value=e.props.join(",")}return nt(n=Mn(e.children,r))?e.return=e.value+"{"+n+"}":""}function bh(e){var t=ha(e);return function(n,r,o,i){for(var l="",s=0;s<t;s++)l+=e[s](n,r,o,i)||"";return l}}function Ah(e){return function(t){t.root||(t=t.return)&&e(t)}}function Dh(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Fh=function(t,n,r){for(var o=0,i=0;o=i,i=st(),o===38&&i===12&&(n[r]=1),!br(i);)Le();return Hr(t,Te)},Uh=function(t,n){var r=-1,o=44;do switch(br(o)){case 0:o===38&&st()===12&&(n[r]=1),t[r]+=Fh(Te-1,n,r);break;case 2:t[r]+=To(o);break;case 4:if(o===44){t[++r]=st()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Si(o)}while(o=Le());return t},Bh=function(t,n){return Nd(Uh(Cd(t),n))},Du=new WeakMap,Vh=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Du.get(r))&&!o){Du.set(t,!0);for(var i=[],l=Bh(n,i),s=r.props,a=0,c=0;a<l.length;a++)for(var p=0;p<s.length;p++,c++)t.props[c]=i[a]?l[a].replace(/&\f/g,s[p]):s[p]+" "+l[a]}}},Wh=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function _d(e,t){switch(Nh(e,t)){case 5103:return b+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return b+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return b+e+ni+e+ye+e+e;case 6828:case 4268:return b+e+ye+e+e;case 6165:return b+e+ye+"flex-"+e+e;case 5187:return b+e+A(e,/(\w+).+(:[^]+)/,b+"box-$1$2"+ye+"flex-$1$2")+e;case 5443:return b+e+ye+"flex-item-"+A(e,/flex-|-self/,"")+e;case 4675:return b+e+ye+"flex-line-pack"+A(e,/align-content|flex-|-self/,"")+e;case 5548:return b+e+ye+A(e,"shrink","negative")+e;case 5292:return b+e+ye+A(e,"basis","preferred-size")+e;case 6060:return b+"box-"+A(e,"-grow","")+b+e+ye+A(e,"grow","positive")+e;case 4554:return b+A(e,/([^-])(transform)/g,"$1"+b+"$2")+e;case 6187:return A(A(A(e,/(zoom-|grab)/,b+"$1"),/(image-set)/,b+"$1"),e,"")+e;case 5495:case 3959:return A(e,/(image-set\([^]*)/,b+"$1$`$1");case 4968:return A(A(e,/(.+:)(flex-)?(.*)/,b+"box-pack:$3"+ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+b+e+e;case 4095:case 3583:case 4068:case 2532:return A(e,/(.+)-inline(.+)/,b+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nt(e)-1-t>6)switch(de(e,t+1)){case 109:if(de(e,t+4)!==45)break;case 102:return A(e,/(.+:)(.+)-([^]+)/,"$1"+b+"$2-$3$1"+ni+(de(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ps(e,"stretch")?_d(A(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(de(e,t+1)!==115)break;case 6444:switch(de(e,nt(e)-3-(~ps(e,"!important")&&10))){case 107:return A(e,":",":"+b)+e;case 101:return A(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+b+(de(e,14)===45?"inline-":"")+"box$3$1"+b+"$2$3$1"+ye+"$2box$3")+e}break;case 5936:switch(de(e,t+11)){case 114:return b+e+ye+A(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return b+e+ye+A(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return b+e+ye+A(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return b+e+ye+e+e}return e}var Hh=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case ma:t.return=_d(t.value,t.length);break;case Sd:return Mn([rr(t,{value:A(t.value,"@","@"+b)})],o);case pa:if(t.length)return jh(t.props,function(i){switch(_h(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Mn([rr(t,{props:[A(i,/:(read-\w+)/,":"+ni+"$1")]})],o);case"::placeholder":return Mn([rr(t,{props:[A(i,/:(plac\w+)/,":"+b+"input-$1")]}),rr(t,{props:[A(i,/:(plac\w+)/,":"+ni+"$1")]}),rr(t,{props:[A(i,/:(plac\w+)/,ye+"input-$1")]})],o)}return""})}},Qh=[Hh],Yh=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var P=y.getAttribute("data-emotion");P.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var o=t.stylisPlugins||Qh,i={},l,s=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var P=y.getAttribute("data-emotion").split(" "),f=1;f<P.length;f++)i[P[f]]=!0;s.push(y)});var a,c=[Vh,Wh];{var p,m=[$h,Ah(function(y){p.insert(y)})],g=bh(c.concat(o,m)),w=function(P){return Mn(Lh(P),g)};a=function(P,f,u,d){p=u,w(P?P+"{"+f.styles+"}":f.styles),d&&(x.inserted[f.name]=!0)}}var x={key:n,sheet:new wh({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:a};return x.sheet.hydrate(s),x},jd={exports:{}},U={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ce=typeof Symbol=="function"&&Symbol.for,ga=ce?Symbol.for("react.element"):60103,ya=ce?Symbol.for("react.portal"):60106,Ci=ce?Symbol.for("react.fragment"):60107,Ni=ce?Symbol.for("react.strict_mode"):60108,_i=ce?Symbol.for("react.profiler"):60114,ji=ce?Symbol.for("react.provider"):60109,Pi=ce?Symbol.for("react.context"):60110,va=ce?Symbol.for("react.async_mode"):60111,zi=ce?Symbol.for("react.concurrent_mode"):60111,Ti=ce?Symbol.for("react.forward_ref"):60112,Ri=ce?Symbol.for("react.suspense"):60113,Gh=ce?Symbol.for("react.suspense_list"):60120,Ii=ce?Symbol.for("react.memo"):60115,Mi=ce?Symbol.for("react.lazy"):60116,Xh=ce?Symbol.for("react.block"):60121,Kh=ce?Symbol.for("react.fundamental"):60117,Jh=ce?Symbol.for("react.responder"):60118,Zh=ce?Symbol.for("react.scope"):60119;function Ae(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ga:switch(e=e.type,e){case va:case zi:case Ci:case _i:case Ni:case Ri:return e;default:switch(e=e&&e.$$typeof,e){case Pi:case Ti:case Mi:case Ii:case ji:return e;default:return t}}case ya:return t}}}function Pd(e){return Ae(e)===zi}U.AsyncMode=va;U.ConcurrentMode=zi;U.ContextConsumer=Pi;U.ContextProvider=ji;U.Element=ga;U.ForwardRef=Ti;U.Fragment=Ci;U.Lazy=Mi;U.Memo=Ii;U.Portal=ya;U.Profiler=_i;U.StrictMode=Ni;U.Suspense=Ri;U.isAsyncMode=function(e){return Pd(e)||Ae(e)===va};U.isConcurrentMode=Pd;U.isContextConsumer=function(e){return Ae(e)===Pi};U.isContextProvider=function(e){return Ae(e)===ji};U.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ga};U.isForwardRef=function(e){return Ae(e)===Ti};U.isFragment=function(e){return Ae(e)===Ci};U.isLazy=function(e){return Ae(e)===Mi};U.isMemo=function(e){return Ae(e)===Ii};U.isPortal=function(e){return Ae(e)===ya};U.isProfiler=function(e){return Ae(e)===_i};U.isStrictMode=function(e){return Ae(e)===Ni};U.isSuspense=function(e){return Ae(e)===Ri};U.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ci||e===zi||e===_i||e===Ni||e===Ri||e===Gh||typeof e=="object"&&e!==null&&(e.$$typeof===Mi||e.$$typeof===Ii||e.$$typeof===ji||e.$$typeof===Pi||e.$$typeof===Ti||e.$$typeof===Kh||e.$$typeof===Jh||e.$$typeof===Zh||e.$$typeof===Xh)};U.typeOf=Ae;jd.exports=U;var qh=jd.exports,zd=qh,eg={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},tg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Td={};Td[zd.ForwardRef]=eg;Td[zd.Memo]=tg;var ng=!0;function Rd(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var xa=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||ng===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},Id=function(t,n,r){xa(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function rg(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var og={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ig=/[A-Z]|^ms/g,lg=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Md=function(t){return t.charCodeAt(1)===45},Fu=function(t){return t!=null&&typeof t!="boolean"},yl=Dh(function(e){return Md(e)?e:e.replace(ig,"-$&").toLowerCase()}),Uu=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(lg,function(r,o,i){return rt={name:o,styles:i,next:rt},o})}return og[t]!==1&&!Md(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ar(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return rt={name:n.name,styles:n.styles,next:rt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)rt={name:r.name,styles:r.styles,next:rt},r=r.next;var o=n.styles+";";return o}return sg(e,t,n)}case"function":{if(e!==void 0){var i=rt,l=n(e);return rt=i,Ar(e,t,l)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function sg(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Ar(e,t,n[o])+";";else for(var i in n){var l=n[i];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=i+"{"+t[l]+"}":Fu(l)&&(r+=yl(i)+":"+Uu(i,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var s=0;s<l.length;s++)Fu(l[s])&&(r+=yl(i)+":"+Uu(i,l[s])+";");else{var a=Ar(e,t,l);switch(i){case"animation":case"animationName":{r+=yl(i)+":"+a+";";break}default:r+=i+"{"+a+"}"}}}return r}var Bu=/label:\s*([^\s;\n{]+)\s*(;|$)/g,rt,wa=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";rt=void 0;var l=t[0];l==null||l.raw===void 0?(o=!1,i+=Ar(r,n,l)):i+=l[0];for(var s=1;s<t.length;s++)i+=Ar(r,n,t[s]),o&&(i+=l[s]);Bu.lastIndex=0;for(var a="",c;(c=Bu.exec(i))!==null;)a+="-"+c[1];var p=rg(i)+a;return{name:p,styles:i,next:rt}},ag=function(t){return t()},ug=Pa["useInsertionEffect"]?Pa["useInsertionEffect"]:!1,Ld=ug||ag,Sa={}.hasOwnProperty,Od=L.createContext(typeof HTMLElement<"u"?Yh({key:"css"}):null);Od.Provider;var $d=function(t){return L.forwardRef(function(n,r){var o=L.useContext(Od);return t(n,o,r)})},bd=L.createContext({}),hs="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",cg=function(t,n){var r={};for(var o in n)Sa.call(n,o)&&(r[o]=n[o]);return r[hs]=t,r},fg=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return xa(n,r,o),Ld(function(){return Id(n,r,o)}),null},dg=$d(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[hs],i=[r],l="";typeof e.className=="string"?l=Rd(t.registered,i,e.className):e.className!=null&&(l=e.className+" ");var s=wa(i,void 0,L.useContext(bd));l+=t.key+"-"+s.name;var a={};for(var c in e)Sa.call(e,c)&&c!=="css"&&c!==hs&&(a[c]=e[c]);return a.ref=n,a.className=l,L.createElement(L.Fragment,null,L.createElement(fg,{cache:t,serialized:s,isStringTag:typeof o=="string"}),L.createElement(o,a))}),pg=dg,mg=h.Fragment;function se(e,t,n){return Sa.call(t,"css")?h.jsx(pg,cg(e,t),n):h.jsx(e,t,n)}function Ad(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return wa(t)}var E=function(){var t=Ad.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},hg=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(i!=null){var l=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))l=e(i);else{l="";for(var s in i)i[s]&&s&&(l&&(l+=" "),l+=s)}break}default:l=i}l&&(o&&(o+=" "),o+=l)}}return o};function gg(e,t,n){var r=[],o=Rd(e,r,n);return r.length<2?n:o+t(r)}var yg=function(t){var n=t.cache,r=t.serializedArr;return Ld(function(){for(var o=0;o<r.length;o++)Id(n,r[o],!1)}),null},vl=$d(function(e,t){var n=!1,r=[],o=function(){for(var c=arguments.length,p=new Array(c),m=0;m<c;m++)p[m]=arguments[m];var g=wa(p,t.registered);return r.push(g),xa(t,g,!1),t.key+"-"+g.name},i=function(){for(var c=arguments.length,p=new Array(c),m=0;m<c;m++)p[m]=arguments[m];return gg(t.registered,o,hg(p))},l={css:o,cx:i,theme:L.useContext(bd)},s=e.children(l);return n=!0,L.createElement(L.Fragment,null,L.createElement(yg,{cache:t,serializedArr:r}),s)}),vg=Object.defineProperty,xg=(e,t,n)=>t in e?vg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ho=(e,t,n)=>(xg(e,typeof t!="symbol"?t+"":t,n),n),gs=new Map,go=new WeakMap,Vu=0,wg=void 0;function Sg(e){return e?(go.has(e)||(Vu+=1,go.set(e,Vu.toString())),go.get(e)):"0"}function kg(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?Sg(e.root):e[t]}`).toString()}function Eg(e){let t=kg(e),n=gs.get(t);if(!n){const r=new Map;let o;const i=new IntersectionObserver(l=>{l.forEach(s=>{var a;const c=s.isIntersecting&&o.some(p=>s.intersectionRatio>=p);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=c),(a=r.get(s.target))==null||a.forEach(p=>{p(c,s)})})},e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},gs.set(t,n)}return n}function Dd(e,t,n={},r=wg){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:o,observer:i,elements:l}=Eg(n);let s=l.get(e)||[];return l.has(e)||l.set(e,s),s.push(t),i.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(l.delete(e),i.unobserve(e)),l.size===0&&(i.disconnect(),gs.delete(o))}}function Cg(e){return typeof e.children!="function"}var Wu=class extends L.Component{constructor(e){super(e),ho(this,"node",null),ho(this,"_unobserveCb",null),ho(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),ho(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),Cg(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:i}=this.props;this._unobserveCb=Dd(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:w,entry:x}=this.state;return e({inView:w,entry:x,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:o,rootMargin:i,onChange:l,skip:s,trackVisibility:a,delay:c,initialInView:p,fallbackInView:m,...g}=this.props;return L.createElement(t||"div",{ref:this.handleNode,...g},e)}};function Fd({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:i,skip:l,initialInView:s,fallbackInView:a,onChange:c}={}){var p;const[m,g]=L.useState(null),w=L.useRef(),[x,y]=L.useState({inView:!!s,entry:void 0});w.current=c,L.useEffect(()=>{if(l||!m)return;let d;return d=Dd(m,(v,C)=>{y({inView:v,entry:C}),w.current&&w.current(v,C),C.isIntersecting&&i&&d&&(d(),d=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},a),()=>{d&&d()}},[Array.isArray(e)?e.toString():e,m,o,r,i,l,n,a,t]);const P=(p=x.entry)==null?void 0:p.target,f=L.useRef();!m&&P&&!i&&!l&&f.current!==P&&(f.current=P,y({inView:!!s,entry:void 0}));const u=[g,x.inView,x.entry];return u.ref=u[0],u.inView=u[1],u.entry=u[2],u}var Ud={exports:{}},B={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ka=Symbol.for("react.element"),Ea=Symbol.for("react.portal"),Li=Symbol.for("react.fragment"),Oi=Symbol.for("react.strict_mode"),$i=Symbol.for("react.profiler"),bi=Symbol.for("react.provider"),Ai=Symbol.for("react.context"),Ng=Symbol.for("react.server_context"),Di=Symbol.for("react.forward_ref"),Fi=Symbol.for("react.suspense"),Ui=Symbol.for("react.suspense_list"),Bi=Symbol.for("react.memo"),Vi=Symbol.for("react.lazy"),_g=Symbol.for("react.offscreen"),Bd;Bd=Symbol.for("react.module.reference");function He(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ka:switch(e=e.type,e){case Li:case $i:case Oi:case Fi:case Ui:return e;default:switch(e=e&&e.$$typeof,e){case Ng:case Ai:case Di:case Vi:case Bi:case bi:return e;default:return t}}case Ea:return t}}}B.ContextConsumer=Ai;B.ContextProvider=bi;B.Element=ka;B.ForwardRef=Di;B.Fragment=Li;B.Lazy=Vi;B.Memo=Bi;B.Portal=Ea;B.Profiler=$i;B.StrictMode=Oi;B.Suspense=Fi;B.SuspenseList=Ui;B.isAsyncMode=function(){return!1};B.isConcurrentMode=function(){return!1};B.isContextConsumer=function(e){return He(e)===Ai};B.isContextProvider=function(e){return He(e)===bi};B.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ka};B.isForwardRef=function(e){return He(e)===Di};B.isFragment=function(e){return He(e)===Li};B.isLazy=function(e){return He(e)===Vi};B.isMemo=function(e){return He(e)===Bi};B.isPortal=function(e){return He(e)===Ea};B.isProfiler=function(e){return He(e)===$i};B.isStrictMode=function(e){return He(e)===Oi};B.isSuspense=function(e){return He(e)===Fi};B.isSuspenseList=function(e){return He(e)===Ui};B.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Li||e===$i||e===Oi||e===Fi||e===Ui||e===_g||typeof e=="object"&&e!==null&&(e.$$typeof===Vi||e.$$typeof===Bi||e.$$typeof===bi||e.$$typeof===Ai||e.$$typeof===Di||e.$$typeof===Bd||e.getModuleId!==void 0)};B.typeOf=He;Ud.exports=B;var jg=Ud.exports;E`
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
`;const Pg=E`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,zg=E`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Tg=E`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Rg=E`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ig=E`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ca=E`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Mg=E`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Lg=E`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Og=E`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$g=E`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,bg=E`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ag=E`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Dg=E`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Fg({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=Ca,iterationCount:o=1}){return Ad`
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
  `}function Ug(e){return e==null}function Bg(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Vd(e,t){return n=>n?e():t()}function Dr(e){return Vd(e,()=>null)}function ys(e){return Dr(()=>({opacity:0}))(e)}const Wd=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:i=0,keyframes:l=Ca,triggerOnce:s=!1,className:a,style:c,childClassName:p,childStyle:m,children:g,onVisibilityChange:w}=e,x=L.useMemo(()=>Fg({keyframes:l,duration:o}),[o,l]);return Ug(g)?null:Bg(g)?se(Wg,{...e,animationStyles:x,children:String(g)}):jg.isFragment(g)?se(Hd,{...e,animationStyles:x}):se(mg,{children:L.Children.map(g,(y,P)=>{if(!L.isValidElement(y))return null;const f=r+(t?P*o*n:0);switch(y.type){case"ol":case"ul":return se(vl,{children:({cx:u})=>se(y.type,{...y.props,className:u(a,y.props.className),style:Object.assign({},c,y.props.style),children:se(Wd,{...e,children:y.props.children})})});case"li":return se(Wu,{threshold:i,triggerOnce:s,onChange:w,children:({inView:u,ref:d})=>se(vl,{children:({cx:v})=>se(y.type,{...y.props,ref:d,className:v(p,y.props.className),css:Dr(()=>x)(u),style:Object.assign({},m,y.props.style,ys(!u),{animationDelay:f+"ms"})})})});default:return se(Wu,{threshold:i,triggerOnce:s,onChange:w,children:({inView:u,ref:d})=>se("div",{ref:d,className:a,css:Dr(()=>x)(u),style:Object.assign({},c,ys(!u),{animationDelay:f+"ms"}),children:se(vl,{children:({cx:v})=>se(y.type,{...y.props,className:v(p,y.props.className),style:Object.assign({},m,y.props.style)})})})})}})})},Vg={display:"inline-block",whiteSpace:"pre"},Wg=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:i=1e3,fraction:l=0,triggerOnce:s=!1,className:a,style:c,children:p,onVisibilityChange:m}=e,{ref:g,inView:w}=Fd({triggerOnce:s,threshold:l,onChange:m});return Vd(()=>se("div",{ref:g,className:a,style:Object.assign({},c,Vg),children:p.split("").map((x,y)=>se("span",{css:Dr(()=>t)(w),style:{animationDelay:o+y*i*r+"ms"},children:x},y))}),()=>se(Hd,{...e,children:p}))(n)},Hd=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:i,children:l,onVisibilityChange:s}=e,{ref:a,inView:c}=Fd({triggerOnce:r,threshold:n,onChange:s});return se("div",{ref:a,className:o,css:Dr(()=>t)(c),style:Object.assign({},i,ys(!c)),children:l})};E`
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
`;const Hg=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Qg=E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Yg=E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Gg=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Xg=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Kg=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Jg=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Zg=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,qg=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,e1=E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,t1=E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,n1=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,r1=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function o1(e,t,n){switch(n){case"bottom-left":return t?Qg:zg;case"bottom-right":return t?Yg:Tg;case"down":return e?t?Xg:Ig:t?Gg:Rg;case"left":return e?t?Jg:Mg:t?Kg:Ca;case"right":return e?t?qg:Og:t?Zg:Lg;case"top-left":return t?e1:$g;case"top-right":return t?t1:bg;case"up":return e?t?r1:Dg:t?n1:Ag;default:return t?Hg:Pg}}const Rt=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,i=L.useMemo(()=>o1(t,r,n),[t,n,r]);return se(Wd,{keyframes:i,...o})};E`
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
`;function i1(){return h.jsxs("div",{className:X("flex flex-col gap-16 bg-right-top bg-no-repeat",fn),style:{backgroundImage:`url("${gh}")`},id:fd,children:[h.jsx(wi,{title:["My","Expertise"]}),h.jsx(l1,{})]})}const l1=()=>{const{skills:e}=vt;return h.jsx("div",{className:"flex flex-wrap gap-6 justify-center",children:e.map((t,n)=>h.jsx(Rt,{direction:"up",delay:50*n,triggerOnce:!0,children:h.jsx(yh,{content:t})}))})},s1=()=>h.jsx("div",{className:X(`sticky w-full top-2 z-20 h-20 ${fn}`,"px-2"),children:h.jsx("div",{className:"w-full h-full",children:h.jsxs("ul",{className:"list-none md:px-16 px-2 py-3 bg-slate-900 shadow flex justify-around leading-tight text-neutral-300 md:text-sm text-xs",children:[h.jsx(or,{text:"Blog",link:"/blog"}),h.jsx(or,{text:"Expertise",sectionIdToGoTo:fd}),h.jsx(or,{text:"Work",sectionIdToGoTo:dd}),h.jsx(or,{text:"Testimonials",sectionIdToGoTo:md}),h.jsx(or,{text:"Contact",sectionIdToGoTo:pd})]})})}),or=({text:e,sectionIdToGoTo:t,link:n,className:r})=>{const[o,i]=L.useState(!1);return h.jsx("a",{href:n||(t?`#${t}`:"#"),className:X("hover:font-semibold",r),children:h.jsxs("li",{className:"flex items-center gap-2 cursor-pointer",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[h.jsx(a1,{isHovered:o})," ",e]})})},a1=({isHovered:e})=>h.jsx("div",{className:X("w-2 h-2 rounded-full border border-teal-500",e&&"bg-teal-500 border-none")}),u1="/assets/hexagonal-pattern-background-c9dce096.svg",c1="/assets/timelineBranchRight-e3bf1bfb.svg",f1="/assets/timelineBranchLeft-7783d5d6.svg";function d1({content:e}){return h.jsxs("div",{className:X("flex flex-col gap-4 pt-16 md:max-w-[30rem] max-w-none"),children:[h.jsx("p",{className:"text-neutral-300 text-base font-normal leading-loose",children:e.date}),h.jsxs("div",{className:"left-0 top-0 bg-white bg-opacity-10 rounded-lg p-8 flex flex-col gap-2",style:{minHeight:"15rem"},children:[h.jsx("h3",{className:" text-teal-500 text-lg font-medium leading-relaxed",style:{fontFamily:"Roboto Mono"},children:e.companyName}),h.jsx("h4",{className:" text-neutral-300 text-base font-bold leading-normal",children:e.jobTitle}),h.jsx("p",{className:" text-neutral-300 text-sm font-normal whitespace-pre-line leading-tight text-justify",children:e.description})]})]})}function Hu(){const{innerWidth:e,innerHeight:t}=window;return{width:e,height:t}}function p1(){const[e,t]=L.useState(Hu());return L.useEffect(()=>{function n(){t(Hu())}return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e}const{experience:Qu}=vt;function m1(){const{width:e}=p1();return h.jsxs("div",{className:"flex text-light h-full",children:[h.jsx("div",{className:"h-full hidden md:flex flex-col justify-start items-end pt-12",style:{flexBasis:"calc(50% - 0.375rem)"},children:Qu.map((t,n)=>h.jsx(Yu,{content:t,side:"LEFT",className:n%2===0?"invisible":"visible"}))}),h.jsx("div",{className:"w-1.5 min-h-max bg-gradient-to-b from-neutral-900/60 via-20% via-cyan-500/60 to-neutral-900/60"}),h.jsx("div",{className:"h-full flex flex-col justify-start items-start pt-12 md:basis-[calc(50%-0.375rem)]",children:Qu.map((t,n)=>h.jsx(Yu,{content:t,side:"RIGHT",className:X(n%2!==0&&e>=786?"invisible":"")}))})]})}const Yu=({content:e,side:t,className:n})=>h.jsx(Rt,{direction:"up",triggerOnce:!0,children:h.jsxs("div",{className:X(`flex gap-6 ${xi}`,t==="LEFT"&&"flex-row-reverse",n),children:[h.jsx("img",{src:t==="RIGHT"?c1:f1,className:"w-10 h-auto self-start"}),h.jsx(d1,{content:e})]})});function h1(){return h.jsxs("div",{className:X("flex flex-col gap-16 relative overflow-clip",fn),id:dd,children:[h.jsxs("div",{className:"relative z-10 flex flex-col md:gap-16 gap-2",children:[h.jsx(wi,{title:["My Work","Experience"]}),h.jsx(m1,{})]}),h.jsx("div",{className:"absolute",children:h.jsx("img",{src:u1,className:"opacity-20"})})]})}function g1({testimonialsToDisplayRange:e}){return h.jsx("div",{className:"flex flex-wrap justify-between gap-16",children:vt.testimonials.slice(e[0],e[1]).map((t,n)=>h.jsx(Rt,{direction:"up",delay:n*200,triggerOnce:!0,children:h.jsx(y1,{content:t})}))})}const y1=({content:e})=>h.jsxs("div",{className:`bg-zinc-400 bg-opacity-20 flex flex-col gap-8 justify-around shadow p-6 rounded-lg ${xi} md:w-[21.625rem] w-full`,children:[h.jsxs("div",{className:"flex flex-col gap-4",children:[h.jsx("div",{children:h.jsx("i",{className:"fa-solid fa-quote-left fa-2xl text-teal-500"})}),h.jsx("p",{className:"text-light md:text-base text-sm text-justify leading-tight whitespace-pre-wrap overflow-ellipsis line-clamp-[14]",children:e.quote})]}),h.jsx(v1,{content:e.person})]}),v1=({content:e})=>h.jsxs("div",{className:"flex gap-4 items-center",children:[h.jsx("img",{src:e.image,className:"rounded-full object-fill w-16 h-16"}),h.jsxs("div",{className:"flex flex-col gap-1",children:[h.jsx("h5",{className:"text-light md:text-lg text-base font-medium leading-relaxed",style:{fontFamily:"Roboto Mono"},children:e.name}),h.jsx("p",{className:"text-stone-300 text-sm whitespace-pre-wrap font-normal capitalize leading-tight",children:e.title})]})]}),Gu=({direction:e,onClick:t,disabled:n})=>{const[r,o]=L.useState(!1);return h.jsxs("button",{className:"bg-white/10 rounded-full w-16 h-16 relative",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),onClick:t,disabled:n,children:[h.jsx("div",{className:"relative z-10",children:h.jsx("i",{className:`fa-solid fa-lg text-light ${e==="LEFT"?"fa-chevron-left":"fa-chevron-right"}`})}),r&&!n&&h.jsx("div",{className:"w-16 h-16 bg-sky-900 rounded-full blur-lg absolute z-0 top-0 left-0"})]})},{testimonials:x1}=vt,w1=({testimonialsToDisplayRange:e,setTestimonialsToDisplayRange:t})=>h.jsxs("div",{className:"flex gap-8",children:[h.jsx(Gu,{direction:"LEFT",disabled:e[0]===0,onClick:()=>t(n=>[n[0]-1,n[1]-1])}),h.jsx(Gu,{direction:"RIGHT",disabled:e[1]===x1.length,onClick:()=>t(n=>[n[0]+1,n[1]+1])})]}),{testimonials:S1}=vt,Xu=3;function k1(){const[e,t]=L.useState([0,Xu]);return h.jsxs("div",{className:X("relative",fn),id:md,children:[h.jsxs("div",{className:"flex flex-col gap-16 relative z-10",children:[h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx(wi,{title:["My","Testimonials"]}),S1.length>Xu&&h.jsx(w1,{testimonialsToDisplayRange:e,setTestimonialsToDisplayRange:t})]}),h.jsx(g1,{testimonialsToDisplayRange:e})]}),h.jsx(vr,{variant:In.BLUE,className:"-left-24 top-0 bg-opacity-50"}),h.jsx(vr,{variant:In.RED,className:"-right-24 bottom-0 bg-opacity-50"})]})}function E1({content:e}){const[t,n]=L.useState(!1);return h.jsx("a",{href:e.link,style:{height:"28rem"},target:"_blank",children:h.jsxs("div",{className:"bg-zinc-300/10 rounded-lg text-light transition-all md:w-[21.25rem] w-full h-[27rem] hover:h-[28.5rem]",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[h.jsxs("div",{className:"relative w-full h-56 flex justify-center items-center bg-cyan-400/10 overflow-clip",children:[h.jsx("img",{src:e.thumbnail,className:"relative z-10 max-h-52 max-w-[80%]"}),h.jsx("div",{className:X("absolute z-0 w-36 h-36 rounded-full blur-lg bg-cyan-500/20 transition-all",t&&"w-11/12 h-44 bg-cyan-500/40")})]}),h.jsxs("div",{className:"flex flex-col justify-between px-6 h-52",children:[h.jsxs("div",{className:"flex flex-col gap-3 py-6 flex-grow max-h-52",children:[h.jsx("h4",{className:"font-medium tracking-tight leading-none line-clamp-3 text-ellipsis",style:{fontFamily:"Roboto Mono"},children:e.title}),h.jsxs("div",{className:"flex gap-2",children:[h.jsx("div",{className:"w-px h-6 origin-top-left border border-cyan-500"}),h.jsx("p",{children:e.datePosted})]}),h.jsx("p",{className:"text-sm leading-tight text-ellipsis line-clamp-3",children:e.description})]}),h.jsxs("a",{href:e.link,className:X(t?"block":"hidden","text-teal-500 text-sm font-medium font-['Roboto Mono'] leading-tight"),target:"_blank",children:["Read More ",h.jsx("i",{className:"fa-solid fa-chevron-right"})]})]})]})})}function C1(){const{blog:e}=vt;return h.jsxs("div",{className:X("flex flex-col gap-16",fn),children:[h.jsx(wi,{title:["My","Blog"]}),h.jsx("div",{className:"flex flex-wrap gap-12 justify-center",style:{gap:"4.375rem"},children:e.map((t,n)=>h.jsx(Rt,{direction:"up",delay:n*200,triggerOnce:!0,children:h.jsx(E1,{content:t})}))})]})}function N1(){const{person:e}=vt;return h.jsxs("div",{className:X("py-10 w-full h-44","flex flex-col gap-4 items-center","bg-gradient-to-b from-fuchsia-950/20 from-10 to-cyan-400/0",fn),id:pd,children:[h.jsxs("div",{className:"flex gap-8",children:[h.jsx(Rt,{direction:"up",triggerOnce:!0,children:h.jsx(Tt,{iconClassNames:"fa-solid fa-phone",link:`tel:${e.phoneNumber}`})}),h.jsx(Rt,{direction:"up",triggerOnce:!0,children:h.jsx(Tt,{iconClassNames:"fa-regular fa-envelope",link:`mailto:${e.email}`})}),h.jsx(Rt,{direction:"up",triggerOnce:!0,children:h.jsx(Tt,{iconClassNames:"fa-brands fa-github",link:e.github})}),h.jsx(Rt,{direction:"up",triggerOnce:!0,children:h.jsx(Tt,{iconClassNames:"fa-brands fa-linkedin-in",link:e.linkedIn})})]}),h.jsx("p",{className:"text-light",children:"Feel free to contact me"})]})}function _1(){return h.jsxs("div",{className:"bg-slate-950 w-full overflow-x-clip min-h-screen py-6 flex flex-col gap-20",children:[h.jsx(s1,{}),h.jsx(hh,{}),h.jsx(i1,{}),h.jsx(h1,{}),h.jsx(k1,{}),h.jsx(C1,{}),h.jsx(N1,{})]})}xl.createRoot(document.getElementById("root")).render(h.jsx(ic.StrictMode,{children:h.jsx(_1,{})}));
