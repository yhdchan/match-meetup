(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[217],{3066:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/find-match",function(){return t(4371)}])},4292:function(e,r,t){"use strict";t.d(r,{Z:function(){return f}});var n=t(1799),a=t(9396);function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function c(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"===typeof e)return i(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=t(5893),l=t(7294),o=t(7536),d=t(1664),u=t.n(d);function h(e){var r=e.match,t=r.date.slice(0,16).replace("T"," ");return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("main",{children:(0,s.jsx)("div",{className:"mx-auto max-w-7xl py-6 sm:px-6 lg:px-8",children:(0,s.jsx)("div",{className:"lg:p-6 md:w-full flex justify-center mt-10",children:(0,s.jsxs)("div",{className:"w-4/5 gap-y-2 rounded-2xl overflow-hidden shadow-lg bg-gray-800 text-white",children:[(0,s.jsx)("img",{className:"w-full",src:"/images/".concat(r.pitch.name,".jpeg"),alt:"Pitch Image"}),(0,s.jsx)("div",{className:"px-6 py-4 lg:h-40",children:(0,s.jsxs)("h1",{className:"tracking-widest test-xs title-font font-medium mb-1",children:[r.pitch.name,(0,s.jsx)("br",{}),t]})}),(0,s.jsx)("div",{className:"pb-3 pl-3",children:(0,s.jsx)(u(),{href:"/find-match/[_id]",as:"/find-match/".concat(r._id),children:(0,s.jsx)("button",{className:"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full",children:"Match Details"})})})]})})})})})}function f(e){var r=e.matches,t=(0,o.cI)(),i=t.register,d=t.handleSubmit,u=(0,l.useState)([]),f=u[0],m=u[1];(0,l.useEffect)((function(){m(r)}),[r]);var p=function(e){return Number(e.slice(0,16).replace("T"," ").replace("-","").replace("-","").replace(" ","").replace(":",""))};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("header",{className:"bg-inherit",children:[(0,s.jsx)("div",{className:"mx-auto max-w-7xl p-6 px-4 sm:px-6 lg:px-8",children:(0,s.jsx)("h1",{className:"pl-2 text-3xl font-bold tracking-tight text-inherit",children:"Find Match"})}),(0,s.jsxs)("form",{className:"pl-6",onSubmit:d((function(e){if(console.log(e.sort_by),1===e.sort_by){var r=c(f).sort((function(e,r){return p(r.date)-p(e.date)}));m(r)}else{var t=c(f).sort((function(e,r){return p(e.date)-p(r.date)}));m(t)}})),children:[(0,s.jsxs)("select",(0,a.Z)((0,n.Z)({id:"sort",className:"px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40",placeholder:"Sort By.."},i("sort_by")),{children:[(0,s.jsx)("option",{value:"1",children:"Date (ascending)"}),(0,s.jsx)("option",{value:"2",children:"Date (descending)"}),(0,s.jsx)("option",{value:"3",children:"Spaces Remaining(ascending)"}),(0,s.jsx)("option",{value:"4",children:"Spaces Remaining(descending)"})]})),(0,s.jsx)("div",{className:"px-28 pt-4",children:(0,s.jsx)("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full",children:"Filter"})})]})]}),f.map((function(e){return(0,s.jsx)(h,{match:e},e._id)}))]})}},4371:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSP:function(){return i},default:function(){return c}});var n=t(5893),a=t(4292),i=!0;function c(e){var r=e.matches;return(0,n.jsx)("div",{children:(0,n.jsx)(a.Z,{matches:r})})}}},function(e){e.O(0,[786,774,888,179],(function(){return r=3066,e(e.s=r);var r}));var r=e.O();_N_E=r}]);