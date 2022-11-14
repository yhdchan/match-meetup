"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[786],{9396:function(e,t,r){function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}r.d(t,{Z:function(){return s}})},7536:function(e,t,r){r.d(t,{cI:function(){return Ae}});var s=r(7294),a=e=>"checkbox"===e.type,i=e=>e instanceof Date,n=e=>null==e;const o=e=>"object"===typeof e;var u=e=>!n(e)&&!Array.isArray(e)&&o(e)&&!i(e),l=e=>u(e)&&e.target?a(e.target)?e.target.checked:e.target.value:e,c=(e,t)=>e.has((e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e)(t)),f=e=>Array.isArray(e)?e.filter(Boolean):[],d=e=>void 0===e,y=(e,t,r)=>{if(!t||!u(e))return r;const s=f(t.split(/[,[\].]+?/)).reduce(((e,t)=>n(e)?e:e[t]),e);return d(s)||s===e?d(e[t])?r:e[t]:s};const m="blur",h="focusout",g="onBlur",p="onChange",v="onSubmit",b="onTouched",_="all",w="max",V="min",A="maxLength",F="minLength",S="pattern",k="required",x="validate";s.createContext(null);var D=(e,t,r,s=!0)=>{const a={defaultValues:t._defaultValues};for(const i in e)Object.defineProperty(a,i,{get:()=>{const a=i;return t._proxyFormState[a]!==_&&(t._proxyFormState[a]=!s||_),r&&(r[a]=!0),e[a]}});return a},O=e=>u(e)&&!Object.keys(e).length,j=(e,t,r)=>{const{name:s,...a}=e;return O(a)||Object.keys(a).length>=Object.keys(t).length||Object.keys(a).find((e=>t[e]===(!r||_)))},E=e=>Array.isArray(e)?e:[e];function C(e){const t=s.useRef(e);t.current=e,s.useEffect((()=>{const r=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>{r&&r.unsubscribe()}}),[e.disabled])}var T=e=>"string"===typeof e,N=(e,t,r,s)=>{const a=Array.isArray(e);return T(e)?(s&&t.watch.add(e),y(r,e)):a?e.map((e=>(s&&t.watch.add(e),y(r,e)))):(s&&(t.watchAll=!0),r)},L=e=>"function"===typeof e,U=e=>{for(const t in e)if(L(e[t]))return!0;return!1};var B=(e,t,r,s,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:a||!0}}:{},M=e=>/^\w*$/.test(e),P=e=>f(e.replace(/["|']|\]/g,"").split(/\.|\[/));function q(e,t,r){let s=-1;const a=M(t)?[t]:P(t),i=a.length,n=i-1;for(;++s<i;){const t=a[s];let i=r;if(s!==n){const r=e[t];i=u(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}e[t]=i,e=e[t]}return e}const I=(e,t,r)=>{for(const s of r||Object.keys(e)){const r=y(e,s);if(r){const{_f:e,...s}=r;if(e&&t(e.name)){if(e.ref.focus){e.ref.focus();break}if(e.refs&&e.refs[0].focus){e.refs[0].focus();break}}else u(s)&&I(s,t)}}};var $=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))))),H=(e,t,r)=>{const s=f(y(e,r));return q(s,"root",t[r]),q(e,r,s),e},R=e=>"boolean"===typeof e,W=e=>"file"===e.type,Z=e=>T(e)||s.isValidElement(e),z=e=>"radio"===e.type,G=e=>e instanceof RegExp;const J={value:!1,isValid:!1},K={value:!0,isValid:!0};var Q=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!d(e[0].attributes.value)?d(e[0].value)||""===e[0].value?K:{value:e[0].value,isValid:!0}:K:J}return J};const X={isValid:!1,value:null};var Y=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),X):X;function ee(e,t,r="validate"){if(Z(e)||Array.isArray(e)&&e.every(Z)||R(e)&&!e)return{type:r,message:Z(e)?e:"",ref:t}}var te=e=>u(e)&&!G(e)?e:{value:e,message:""},re=async(e,t,r,s,i)=>{const{ref:o,refs:l,required:c,maxLength:f,minLength:d,min:y,max:m,pattern:h,validate:g,name:p,valueAsNumber:v,mount:b,disabled:_}=e._f;if(!b||_)return{};const D=l?l[0]:o,j=e=>{s&&T(e)&&(D.setCustomValidity(e),D.reportValidity())},E={},C=z(o),N=a(o),U=C||N,M=(v||W(o))&&!o.value||""===t||Array.isArray(t)&&!t.length,P=B.bind(null,p,r,E),q=(e,t,r,s=A,a=F)=>{const i=e?t:r;E[p]={type:e?s:a,message:i,ref:o,...P(e?s:a,i)}};if(i?!Array.isArray(t)||!t.length:c&&(!U&&(M||n(t))||R(t)&&!t||N&&!Q(l).isValid||C&&!Y(l).isValid)){const{value:e,message:t}=Z(c)?{value:!!c,message:c}:te(c);if(e&&(E[p]={type:k,message:t,ref:D,...P(k,t)},!r))return j(t),E}if(!M&&(!n(y)||!n(m))){let e,s;const a=te(m),i=te(y);if(n(t)||isNaN(t)){const r=o.valueAsDate||new Date(t),n=e=>new Date((new Date).toDateString()+" "+e),u="time"==o.type,l="week"==o.type;T(a.value)&&t&&(e=u?n(t)>n(a.value):l?t>a.value:r>new Date(a.value)),T(i.value)&&t&&(s=u?n(t)<n(i.value):l?t<i.value:r<new Date(i.value))}else{const r=o.valueAsNumber||(t?+t:t);n(a.value)||(e=r>a.value),n(i.value)||(s=r<i.value)}if((e||s)&&(q(!!e,a.message,i.message,w,V),!r))return j(E[p].message),E}if((f||d)&&!M&&(T(t)||i&&Array.isArray(t))){const e=te(f),s=te(d),a=!n(e.value)&&t.length>e.value,i=!n(s.value)&&t.length<s.value;if((a||i)&&(q(a,e.message,s.message),!r))return j(E[p].message),E}if(h&&!M&&T(t)){const{value:e,message:s}=te(h);if(G(e)&&!t.match(e)&&(E[p]={type:S,message:s,ref:o,...P(S,s)},!r))return j(s),E}if(g)if(L(g)){const e=ee(await g(t),D);if(e&&(E[p]={...e,...P(x,e.message)},!r))return j(e.message),E}else if(u(g)){let e={};for(const s in g){if(!O(e)&&!r)break;const a=ee(await g[s](t),D,s);a&&(e={...a,...P(s,a.message)},j(a.message),r&&(E[p]=e))}if(!O(e)&&(E[p]={ref:D,...e},!r))return E}return j(!0),E};var se="undefined"!==typeof window&&"undefined"!==typeof window.HTMLElement&&"undefined"!==typeof document;function ae(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(se&&(e instanceof Blob||e instanceof FileList)||!r&&!u(e))return e;if(t=r?[]:{},Array.isArray(e)||(e=>{const t=e.constructor&&e.constructor.prototype;return u(t)&&t.hasOwnProperty("isPrototypeOf")})(e))for(const r in e)t[r]=ae(e[r]);else t=e}return t}var ie=e=>({isOnSubmit:!e||e===v,isOnBlur:e===g,isOnChange:e===p,isOnAll:e===_,isOnTouch:e===b});function ne(e){for(const t in e)if(!d(e[t]))return!1;return!0}function oe(e,t){const r=M(t)?[t]:P(t),s=1==r.length?e:function(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=d(e)?s++:e[t[s++]];return e}(e,r),a=r[r.length-1];let i;s&&delete s[a];for(let n=0;n<r.slice(0,-1).length;n++){let t,s=-1;const a=r.slice(0,-(n+1)),o=a.length-1;for(n>0&&(i=e);++s<a.length;){const r=a[s];t=t?t[r]:e[r],o===s&&(u(t)&&O(t)||Array.isArray(t)&&ne(t))&&(i?delete i[r]:delete e[r]),i=t}}return e}function ue(){let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}}var le=e=>n(e)||!o(e);function ce(e,t){if(le(e)||le(t))return e===t;if(i(e)&&i(t))return e.getTime()===t.getTime();const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const a of r){const r=e[a];if(!s.includes(a))return!1;if("ref"!==a){const e=t[a];if(i(r)&&i(e)||u(r)&&u(e)||Array.isArray(r)&&Array.isArray(e)?!ce(r,e):r!==e)return!1}}return!0}var fe=e=>{const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},de=e=>"select-multiple"===e.type,ye=e=>fe(e)&&e.isConnected;function me(e,t={}){const r=Array.isArray(e);if(u(e)||r)for(const s in e)Array.isArray(e[s])||u(e[s])&&!U(e[s])?(t[s]=Array.isArray(e[s])?[]:{},me(e[s],t[s])):n(e[s])||(t[s]=!0);return t}function he(e,t,r){const s=Array.isArray(e);if(u(e)||s)for(const a in e)Array.isArray(e[a])||u(e[a])&&!U(e[a])?d(t)||le(r[a])?r[a]=Array.isArray(e[a])?me(e[a],[]):{...me(e[a])}:he(e[a],n(t)?{}:t[a],r[a]):ce(e[a],t[a])?delete r[a]:r[a]=!0;return r}var ge=(e,t)=>he(e,t,me(t)),pe=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>d(e)?e:t?""===e?NaN:e?+e:e:r&&T(e)?new Date(e):s?s(e):e;function ve(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return W(t)?t.files:z(t)?Y(e.refs).value:de(t)?[...t.selectedOptions].map((({value:e})=>e)):a(t)?Q(e.refs).value:pe(d(t.value)?e.ref.value:t.value,e)}var be=e=>d(e)?void 0:G(e)?e.source:u(e)?G(e.value)?e.value.source:e.value:e;function _e(e,t,r){const s=y(e,r);if(s||M(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),i=y(t,s),n=y(e,s);if(i&&!Array.isArray(i)&&r!==s)return{name:r};if(n&&n.type)return{name:s,error:n};a.pop()}return{name:r}}const we={mode:v,reValidateMode:p,shouldFocusError:!0};function Ve(e={}){let t,r={...we,...e},s={submitCount:0,isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},o={},u=ae(r.defaultValues)||{},g=r.shouldUnregister?{}:ae(u),p={action:!1,mount:!1,watch:!1},v={mount:new Set,unMount:new Set,array:new Set,watch:new Set},b=0,w={};const V={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},A={watch:ue(),array:ue(),state:ue()},F=ie(r.mode),S=ie(r.reValidateMode),k=r.criteriaMode===_,x=async()=>{let e=!1;return V.isValid&&(e=r.resolver?O((await U()).errors):await B(o,!0),e!==s.isValid&&(s.isValid=e,A.state.next({isValid:e}))),e},D=(e,t,r,s)=>{const a=y(o,e);if(a){const i=y(g,e,d(r)?y(u,e):r);d(i)||s&&s.defaultChecked||t?q(g,e,t?i:ve(a._f)):Z(e,i),p.mount&&x()}},j=(e,t,r,a,i)=>{let n=!1;const o={name:e},l=y(s.touchedFields,e);if(V.isDirty){const e=s.isDirty;s.isDirty=o.isDirty=M(),n=e!==o.isDirty}if(V.dirtyFields&&(!r||a)){const r=y(s.dirtyFields,e);ce(y(u,e),t)?oe(s.dirtyFields,e):q(s.dirtyFields,e,!0),o.dirtyFields=s.dirtyFields,n=n||r!==y(s.dirtyFields,e)}return r&&!l&&(q(s.touchedFields,e,r),o.touchedFields=s.touchedFields,n=n||V.touchedFields&&l!==r),n&&i&&A.state.next(o),n?o:{}},C=(r,a,i,n)=>{const o=y(s.errors,r),u=V.isValid&&R(a)&&s.isValid!==a;var l;if(e.delayError&&i?(l=()=>((e,t)=>{q(s.errors,e,t),A.state.next({errors:s.errors})})(r,i),t=e=>{clearTimeout(b),b=window.setTimeout(l,e)},t(e.delayError)):(clearTimeout(b),t=null,i?q(s.errors,r,i):oe(s.errors,r)),(i?!ce(o,i):o)||!O(n)||u){const e={...n,...u&&R(a)?{isValid:a}:{},errors:s.errors,name:r};s={...s,...e},A.state.next(e)}w[r]--,V.isValidating&&!Object.values(w).some((e=>e))&&(A.state.next({isValidating:!1}),w={})},U=async e=>r.resolver?await r.resolver({...g},r.context,((e,t,r,s)=>{const a={};for(const i of e){const e=y(t,i);e&&q(a,i,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}})(e||v.mount,o,r.criteriaMode,r.shouldUseNativeValidation)):{},B=async(e,t,a={valid:!0})=>{for(const i in e){const n=e[i];if(n){const{_f:e,...i}=n;if(e){const i=v.array.has(e.name),o=await re(n,y(g,e.name),k,r.shouldUseNativeValidation,i);if(o[e.name]&&(a.valid=!1,t))break;!t&&(y(o,e.name)?i?H(s.errors,o,e.name):q(s.errors,e.name,o[e.name]):oe(s.errors,e.name))}i&&await B(i,t,a)}}return a.valid},M=(e,t)=>(e&&t&&q(g,e,t),!ce(X(),u)),P=(e,t,r)=>{const s={...p.mount?g:d(t)?u:T(e)?{[e]:t}:t};return N(e,v,s,r)},Z=(e,t,r={})=>{const s=y(o,e);let i=t;if(s){const r=s._f;r&&(!r.disabled&&q(g,e,pe(t,r)),i=se&&fe(r.ref)&&n(t)?"":t,de(r.ref)?[...r.ref.options].forEach((e=>e.selected=i.includes(e.value))):r.refs?a(r.ref)?r.refs.length>1?r.refs.forEach((e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(i)?!!i.find((t=>t===e.value)):i===e.value))):r.refs[0]&&(r.refs[0].checked=!!i):r.refs.forEach((e=>e.checked=e.value===i)):W(r.ref)?r.ref.value="":(r.ref.value=i,r.ref.type||A.watch.next({name:e})))}(r.shouldDirty||r.shouldTouch)&&j(e,i,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&Q(e)},G=(e,t,r)=>{for(const s in t){const a=t[s],n=`${e}.${s}`,u=y(o,n);!v.array.has(e)&&le(a)&&(!u||u._f)||i(a)?Z(n,a,r):G(n,a,r)}},J=(e,t,r={})=>{const a=y(o,e),i=v.array.has(e),l=ae(t);q(g,e,l),i?(A.array.next({name:e,values:g}),(V.isDirty||V.dirtyFields)&&r.shouldDirty&&(s.dirtyFields=ge(u,g),A.state.next({name:e,dirtyFields:s.dirtyFields,isDirty:M(e,l)}))):!a||a._f||n(l)?Z(e,l,r):G(e,l,r),$(e,v)&&A.state.next({}),A.watch.next({name:e})},K=async e=>{const a=e.target;let i=a.name;const n=y(o,i);if(n){let c,f;const d=a.type?ve(n._f):l(e),p=e.type===m||e.type===h,b=!((u=n._f).mount&&(u.required||u.min||u.max||u.maxLength||u.minLength||u.pattern||u.validate))&&!r.resolver&&!y(s.errors,i)&&!n._f.deps||((e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:!(r?s.isOnChange:a.isOnChange)||e))(p,y(s.touchedFields,i),s.isSubmitted,S,F),_=$(i,v,p);q(g,i,d),p?(n._f.onBlur&&n._f.onBlur(e),t&&t(0)):n._f.onChange&&n._f.onChange(e);const D=j(i,d,p,!1),E=!O(D)||_;if(!p&&A.watch.next({name:i,type:e.type}),b)return V.isValid&&x(),E&&A.state.next({name:i,..._?{}:D});if(!p&&_&&A.state.next({}),w[i]=w[i]?w[i]+1:1,A.state.next({isValidating:!0}),r.resolver){const{errors:e}=await U([i]),t=_e(s.errors,o,i),r=_e(e,o,t.name||i);c=r.error,i=r.name,f=O(e)}else c=(await re(n,y(g,i),k,r.shouldUseNativeValidation))[i],x();n._f.deps&&Q(n._f.deps),C(i,f,c,D)}var u},Q=async(e,t={})=>{let a,i;const n=E(e);if(A.state.next({isValidating:!0}),r.resolver){const t=await(async e=>{const{errors:t}=await U();if(e)for(const r of e){const e=y(t,r);e?q(s.errors,r,e):oe(s.errors,r)}else s.errors=t;return t})(d(e)?e:n);a=O(t),i=e?!n.some((e=>y(t,e))):a}else e?(i=(await Promise.all(n.map((async e=>{const t=y(o,e);return await B(t&&t._f?{[e]:t}:t)})))).every(Boolean),(i||s.isValid)&&x()):i=a=await B(o);return A.state.next({...!T(e)||V.isValid&&a!==s.isValid?{}:{name:e},...r.resolver||!e?{isValid:a}:{},errors:s.errors,isValidating:!1}),t.shouldFocus&&!i&&I(o,(e=>e&&y(s.errors,e)),e?n:v.mount),i},X=e=>{const t={...u,...p.mount?g:{}};return d(e)?t:T(e)?y(t,e):e.map((e=>y(t,e)))},Y=(e,t)=>({invalid:!!y((t||s).errors,e),isDirty:!!y((t||s).dirtyFields,e),isTouched:!!y((t||s).touchedFields,e),error:y((t||s).errors,e)}),ee=(e,t={})=>{for(const a of e?E(e):v.mount)v.mount.delete(a),v.array.delete(a),y(o,a)&&(t.keepValue||(oe(o,a),oe(g,a)),!t.keepError&&oe(s.errors,a),!t.keepDirty&&oe(s.dirtyFields,a),!t.keepTouched&&oe(s.touchedFields,a),!r.shouldUnregister&&!t.keepDefaultValue&&oe(u,a));A.watch.next({}),A.state.next({...s,...t.keepDirty?{isDirty:M()}:{}}),!t.keepIsValid&&x()},te=(e,t={})=>{let s=y(o,e);const i=R(t.disabled);return q(o,e,{...s||{},_f:{...s&&s._f?s._f:{ref:{name:e}},name:e,mount:!0,...t}}),v.mount.add(e),s?i&&q(g,e,t.disabled?void 0:y(g,e,ve(s._f))):D(e,!0,t.value),{...i?{disabled:t.disabled}:{},...r.shouldUseNativeValidation?{required:!!t.required,min:be(t.min),max:be(t.max),minLength:be(t.minLength),maxLength:be(t.maxLength),pattern:be(t.pattern)}:{},name:e,onChange:K,onBlur:K,ref:i=>{if(i){te(e,t),s=y(o,e);const r=d(i.value)&&i.querySelectorAll&&i.querySelectorAll("input,select,textarea")[0]||i,n=(e=>z(e)||a(e))(r),l=s._f.refs||[];if(n?l.find((e=>e===r)):r===s._f.ref)return;q(o,e,{_f:{...s._f,...n?{refs:[...l.filter(ye),r,...Array.isArray(y(u,e))?[{}]:[]],ref:{type:r.type,name:e}}:{ref:r}}}),D(e,!1,void 0,r)}else s=y(o,e,{}),s._f&&(s._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&(!c(v.array,e)||!p.action)&&v.unMount.add(e)}}},ne=()=>r.shouldFocusError&&I(o,(e=>e&&y(s.errors,e)),v.mount);return{control:{register:te,unregister:ee,getFieldState:Y,_executeSchema:U,_focusError:ne,_getWatch:P,_getDirty:M,_updateValid:x,_removeUnmounted:()=>{for(const e of v.unMount){const t=y(o,e);t&&(t._f.refs?t._f.refs.every((e=>!ye(e))):!ye(t._f.ref))&&ee(e)}v.unMount=new Set},_updateFieldArray:(e,t=[],r,a,i=!0,n=!0)=>{if(a&&r){if(p.action=!0,n&&Array.isArray(y(o,e))){const t=r(y(o,e),a.argA,a.argB);i&&q(o,e,t)}if(V.errors&&n&&Array.isArray(y(s.errors,e))){const t=r(y(s.errors,e),a.argA,a.argB);i&&q(s.errors,e,t),((e,t)=>{!f(y(e,t)).length&&oe(e,t)})(s.errors,e)}if(V.touchedFields&&n&&Array.isArray(y(s.touchedFields,e))){const t=r(y(s.touchedFields,e),a.argA,a.argB);i&&q(s.touchedFields,e,t)}V.dirtyFields&&(s.dirtyFields=ge(u,g)),A.state.next({isDirty:M(e,t),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})}else q(g,e,t)},_getFieldArray:t=>f(y(p.mount?g:u,t,e.shouldUnregister?y(u,t,[]):[])),_subjects:A,_proxyFormState:V,get _fields(){return o},get _formValues(){return g},get _stateFlags(){return p},set _stateFlags(e){p=e},get _defaultValues(){return u},get _names(){return v},set _names(e){v=e},get _formState(){return s},set _formState(e){s=e},get _options(){return r},set _options(e){r={...r,...e}}},trigger:Q,register:te,handleSubmit:(e,t)=>async a=>{a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let i=!0,n=ae(g);A.state.next({isSubmitting:!0});try{if(r.resolver){const{errors:e,values:t}=await U();s.errors=e,n=t}else await B(o);O(s.errors)?(A.state.next({errors:{},isSubmitting:!0}),await e(n,a)):(t&&await t({...s.errors},a),ne())}catch(u){throw i=!1,u}finally{s.isSubmitted=!0,A.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:O(s.errors)&&i,submitCount:s.submitCount+1,errors:s.errors})}},watch:(e,t)=>L(e)?A.watch.subscribe({next:r=>e(P(void 0,t),r)}):P(e,t,!0),setValue:J,getValues:X,reset:(t,r)=>((t,r={})=>{const a=t||u,i=ae(a),n=t&&!O(t)?i:u;if(r.keepDefaultValues||(u=a),!r.keepValues){if(r.keepDirtyValues)for(const e of v.mount)y(s.dirtyFields,e)?q(n,e,y(g,e)):J(e,y(n,e));else{if(se&&d(t))for(const e of v.mount){const t=y(o,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(fe(e)){const t=e.closest("form");if(t){t.reset();break}}}}o={}}g=e.shouldUnregister?r.keepDefaultValues?ae(u):{}:i,A.array.next({values:n}),A.watch.next({values:n})}v={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},p.mount=!V.isValid||!!r.keepIsValid,p.watch=!!e.shouldUnregister,A.state.next({submitCount:r.keepSubmitCount?s.submitCount:0,isDirty:r.keepDirty||r.keepDirtyValues?s.isDirty:!(!r.keepDefaultValues||ce(t,u)),isSubmitted:!!r.keepIsSubmitted&&s.isSubmitted,dirtyFields:r.keepDirty||r.keepDirtyValues?s.dirtyFields:r.keepDefaultValues&&t?ge(u,t):{},touchedFields:r.keepTouched?s.touchedFields:{},errors:r.keepErrors?s.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})})(L(t)?t(g):t,r),resetField:(e,t={})=>{y(o,e)&&(d(t.defaultValue)?J(e,y(u,e)):(J(e,t.defaultValue),q(u,e,t.defaultValue)),t.keepTouched||oe(s.touchedFields,e),t.keepDirty||(oe(s.dirtyFields,e),s.isDirty=t.defaultValue?M(e,y(u,e)):M()),t.keepError||(oe(s.errors,e),V.isValid&&x()),A.state.next({...s}))},clearErrors:e=>{e?E(e).forEach((e=>oe(s.errors,e))):s.errors={},A.state.next({errors:s.errors})},unregister:ee,setError:(e,t,r)=>{const a=(y(o,e,{_f:{}})._f||{}).ref;q(s.errors,e,{...t,ref:a}),A.state.next({name:e,errors:s.errors,isValid:!1}),r&&r.shouldFocus&&a&&a.focus&&a.focus()},setFocus:(e,t={})=>{const r=y(o,e),s=r&&r._f;if(s){const e=s.refs?s.refs[0]:s.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:Y}}function Ae(e={}){const t=s.useRef(),[r,a]=s.useState({isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:e.defaultValues});t.current||(t.current={...Ve(e),formState:r});const i=t.current.control;return i._options=e,C({subject:i._subjects.state,callback:s.useCallback((e=>{j(e,i._proxyFormState,!0)&&(i._formState={...i._formState,...e},a({...i._formState}))}),[i])}),s.useEffect((()=>{i._stateFlags.mount||(i._proxyFormState.isValid&&i._updateValid(),i._stateFlags.mount=!0),i._stateFlags.watch&&(i._stateFlags.watch=!1,i._subjects.state.next({})),i._removeUnmounted()})),s.useEffect((()=>{r.submitCount&&i._focusError()}),[i,r.submitCount]),t.current.formState=D(r,i),t.current}}}]);