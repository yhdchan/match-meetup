"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/players";
exports.ids = ["pages/players"];
exports.modules = {

/***/ "./pages/players.js":
/*!**************************!*\
  !*** ./pages/players.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ players),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/mongodb */ \"./util/mongodb.js\");\n\n\nfunction players({ players  }) {\n    const handleClick = async ()=>{\n        const username = \"13OCT\";\n        const data = await fetch(`http://localhost:3000/api/createAccount?username=${username}`);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleClick(),\n                children: \"ADD\"\n            }, void 0, false, {\n                fileName: \"/Users/ltc/Desktop/match-meetup/pages/players.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                children: players.map((player)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: player.username\n                    }, player._id, false, {\n                        fileName: \"/Users/ltc/Desktop/match-meetup/pages/players.js\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/ltc/Desktop/match-meetup/pages/players.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\nasync function getServerSideProps(context) {\n    const { db  } = await (0,_util_mongodb__WEBPACK_IMPORTED_MODULE_1__.connectToDatabase)();\n    const data = await db.collection(\"players\").find({}).toArray();\n    const players = JSON.parse(JSON.stringify(data));\n    return {\n        props: {\n            players: players\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wbGF5ZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBb0Q7QUFFckMsU0FBU0MsT0FBTyxDQUFDLEVBQUVBLE9BQU8sR0FBRSxFQUFFO0lBQzNDLE1BQU1DLFdBQVcsR0FBRyxVQUFZO1FBQzlCLE1BQU1DLFFBQVEsR0FBRyxPQUFPO1FBQ3hCLE1BQU1DLElBQUksR0FBRyxNQUFNQyxLQUFLLENBQ3RCLENBQUMsaURBQWlELEVBQUVGLFFBQVEsQ0FBQyxDQUFDLENBQy9EO0lBQ0gsQ0FBQztJQUVELHFCQUNFOzswQkFDRSw4REFBQ0csUUFBTTtnQkFBQ0MsT0FBTyxFQUFFLElBQU1MLFdBQVcsRUFBRTswQkFBRSxLQUFHOzs7OztvQkFBUzswQkFDbEQsOERBQUNNLElBQUU7MEJBQ0FQLE9BQU8sQ0FBQ1EsR0FBRyxDQUFDLENBQUNDLE1BQU0saUJBQ2xCLDhEQUFDQyxJQUFFO2tDQUFtQkQsTUFBTSxDQUFDUCxRQUFRO3VCQUE1Qk8sTUFBTSxDQUFDRSxHQUFHOzs7OzRCQUF3QixDQUMzQzs7Ozs7b0JBQ0M7O29CQUNKLENBQ0g7QUFDSixDQUFDO0FBRU0sZUFBZUMsa0JBQWtCLENBQUNDLE9BQU8sRUFBRTtJQUNoRCxNQUFNLEVBQUVDLEVBQUUsR0FBRSxHQUFHLE1BQU1mLGdFQUFpQixFQUFFO0lBRXhDLE1BQU1JLElBQUksR0FBRyxNQUFNVyxFQUFFLENBQUNDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDQyxPQUFPLEVBQUU7SUFFOUQsTUFBTWpCLE9BQU8sR0FBR2tCLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLFNBQVMsQ0FBQ2pCLElBQUksQ0FBQyxDQUFDO0lBRWhELE9BQU87UUFDTGtCLEtBQUssRUFBRTtZQUFFckIsT0FBTyxFQUFFQSxPQUFPO1NBQUU7S0FDNUIsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWRhdGEtZnJvbS1hcGkvLi9wYWdlcy9wbGF5ZXJzLmpzP2NjMGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tIFwiLi4vdXRpbC9tb25nb2RiXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsYXllcnMoeyBwbGF5ZXJzIH0pIHtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdXNlcm5hbWUgPSBcIjEzT0NUXCI7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvY3JlYXRlQWNjb3VudD91c2VybmFtZT0ke3VzZXJuYW1lfWBcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soKX0+QUREPC9idXR0b24+XG4gICAgICA8b2w+XG4gICAgICAgIHtwbGF5ZXJzLm1hcCgocGxheWVyKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17cGxheWVyLl9pZH0+e3BsYXllci51c2VybmFtZX08L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvb2w+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwicGxheWVyc1wiKS5maW5kKHt9KS50b0FycmF5KCk7XG5cbiAgY29uc3QgcGxheWVycyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgcGxheWVyczogcGxheWVycyB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbImNvbm5lY3RUb0RhdGFiYXNlIiwicGxheWVycyIsImhhbmRsZUNsaWNrIiwidXNlcm5hbWUiLCJkYXRhIiwiZmV0Y2giLCJidXR0b24iLCJvbkNsaWNrIiwib2wiLCJtYXAiLCJwbGF5ZXIiLCJsaSIsIl9pZCIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJkYiIsImNvbGxlY3Rpb24iLCJmaW5kIiwidG9BcnJheSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/players.js\n");

/***/ }),

/***/ "./util/mongodb.js":
/*!*************************!*\
  !*** ./util/mongodb.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDatabase\": () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { MONGODB_URI , MONGODB_DB  } = process.env;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\nif (!MONGODB_DB) {\n    throw new Error(\"Please define the MONGODB_DB environment variable inside .env.local\");\n}\nlet cached = global.mongo;\nif (!cached) {\n    cached = global.mongo = {\n        conn: null,\n        promise: null\n    };\n}\nasync function connectToDatabase() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        };\n        cached.promise = mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(MONGODB_URI, opts).then((client)=>{\n            return {\n                client,\n                db: client.db(MONGODB_DB)\n            };\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsL21vbmdvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXRDLE1BQU0sRUFBRUMsV0FBVyxHQUFFQyxVQUFVLEdBQUUsR0FBR0MsT0FBTyxDQUFDQyxHQUFHO0FBRS9DLElBQUksQ0FBQ0gsV0FBVyxFQUFFO0lBQ2hCLE1BQU0sSUFBSUksS0FBSyxDQUNiLHNFQUFzRSxDQUN2RSxDQUFDO0FBQ0osQ0FBQztBQUVELElBQUksQ0FBQ0gsVUFBVSxFQUFFO0lBQ2YsTUFBTSxJQUFJRyxLQUFLLENBQ2IscUVBQXFFLENBQ3RFLENBQUM7QUFDSixDQUFDO0FBRUQsSUFBSUMsTUFBTSxHQUFHQyxNQUFNLENBQUNDLEtBQUs7QUFFekIsSUFBSSxDQUFDRixNQUFNLEVBQUU7SUFDWEEsTUFBTSxHQUFHQyxNQUFNLENBQUNDLEtBQUssR0FBRztRQUFFQyxJQUFJLEVBQUUsSUFBSTtRQUFFQyxPQUFPLEVBQUUsSUFBSTtLQUFFLENBQUM7QUFDeEQsQ0FBQztBQUVNLGVBQWVDLGlCQUFpQixHQUFHO0lBQ3hDLElBQUlMLE1BQU0sQ0FBQ0csSUFBSSxFQUFFO1FBQ2YsT0FBT0gsTUFBTSxDQUFDRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUksQ0FBQ0gsTUFBTSxDQUFDSSxPQUFPLEVBQUU7UUFDbkIsTUFBTUUsSUFBSSxHQUFHO1lBQ1hDLGVBQWUsRUFBRSxJQUFJO1lBQ3JCQyxrQkFBa0IsRUFBRSxJQUFJO1NBQ3pCO1FBRURSLE1BQU0sQ0FBQ0ksT0FBTyxHQUFHVix3REFBbUIsQ0FBQ0MsV0FBVyxFQUFFVyxJQUFJLENBQUMsQ0FBQ0ksSUFBSSxDQUFDLENBQUNDLE1BQU0sR0FBSztZQUN2RSxPQUFPO2dCQUNMQSxNQUFNO2dCQUNOQyxFQUFFLEVBQUVELE1BQU0sQ0FBQ0MsRUFBRSxDQUFDaEIsVUFBVSxDQUFDO2FBQzFCLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDREksTUFBTSxDQUFDRyxJQUFJLEdBQUcsTUFBTUgsTUFBTSxDQUFDSSxPQUFPLENBQUM7SUFDbkMsT0FBT0osTUFBTSxDQUFDRyxJQUFJLENBQUM7QUFDckIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtZGF0YS1mcm9tLWFwaS8uL3V0aWwvbW9uZ29kYi5qcz80NTA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuY29uc3QgeyBNT05HT0RCX1VSSSwgTU9OR09EQl9EQiB9ID0gcHJvY2Vzcy5lbnY7XG5cbmlmICghTU9OR09EQl9VUkkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIFwiUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWxcIlxuICApO1xufVxuXG5pZiAoIU1PTkdPREJfREIpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIFwiUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9EQiBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbFwiXG4gICk7XG59XG5cbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ287XG5cbmlmICghY2FjaGVkKSB7XG4gIGNhY2hlZCA9IGdsb2JhbC5tb25nbyA9IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gIGlmIChjYWNoZWQuY29ubikge1xuICAgIHJldHVybiBjYWNoZWQuY29ubjtcbiAgfVxuXG4gIGlmICghY2FjaGVkLnByb21pc2UpIHtcbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgIH07XG5cbiAgICBjYWNoZWQucHJvbWlzZSA9IE1vbmdvQ2xpZW50LmNvbm5lY3QoTU9OR09EQl9VUkksIG9wdHMpLnRoZW4oKGNsaWVudCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2xpZW50LFxuICAgICAgICBkYjogY2xpZW50LmRiKE1PTkdPREJfREIpLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xuICByZXR1cm4gY2FjaGVkLmNvbm47XG59XG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJNT05HT0RCX1VSSSIsIk1PTkdPREJfREIiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJtb25nbyIsImNvbm4iLCJwcm9taXNlIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJvcHRzIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29ubmVjdCIsInRoZW4iLCJjbGllbnQiLCJkYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./util/mongodb.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/players.js"));
module.exports = __webpack_exports__;

})();