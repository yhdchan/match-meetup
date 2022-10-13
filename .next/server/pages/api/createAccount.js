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
exports.id = "pages/api/createAccount";
exports.ids = ["pages/api/createAccount"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/createAccount.js":
/*!************************************!*\
  !*** ./pages/api/createAccount.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/mongodb */ \"(api)/./util/mongodb.js\");\n\nasync function handler(req, res) {\n    const { db  } = await (0,_util_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)();\n    const data = req.query;\n    const response = db.collection(\"players\").insertOne(data);\n    res.json(response);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3JlYXRlQWNjb3VudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF1RDtBQUV4QyxlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU0sRUFBRUMsRUFBRSxHQUFFLEdBQUcsTUFBTUosZ0VBQWlCLEVBQUU7SUFFeEMsTUFBTUssSUFBSSxHQUFHSCxHQUFHLENBQUNJLEtBQUs7SUFFdEIsTUFBTUMsUUFBUSxHQUFHSCxFQUFFLENBQUNJLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQ0MsU0FBUyxDQUFDSixJQUFJLENBQUM7SUFFekRGLEdBQUcsQ0FBQ08sSUFBSSxDQUFDSCxRQUFRLENBQUMsQ0FBQztBQUNyQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1kYXRhLWZyb20tYXBpLy4vcGFnZXMvYXBpL2NyZWF0ZUFjY291bnQuanM/MGFhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gXCIuLi8uLi91dGlsL21vbmdvZGJcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuXG4gIGNvbnN0IGRhdGEgPSByZXEucXVlcnk7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBkYi5jb2xsZWN0aW9uKFwicGxheWVyc1wiKS5pbnNlcnRPbmUoZGF0YSk7XG5cbiAgcmVzLmpzb24ocmVzcG9uc2UpO1xufVxuIl0sIm5hbWVzIjpbImNvbm5lY3RUb0RhdGFiYXNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImRiIiwiZGF0YSIsInF1ZXJ5IiwicmVzcG9uc2UiLCJjb2xsZWN0aW9uIiwiaW5zZXJ0T25lIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/createAccount.js\n");

/***/ }),

/***/ "(api)/./util/mongodb.js":
/*!*************************!*\
  !*** ./util/mongodb.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDatabase\": () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { MONGODB_URI , MONGODB_DB  } = process.env;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\nif (!MONGODB_DB) {\n    throw new Error(\"Please define the MONGODB_DB environment variable inside .env.local\");\n}\nlet cached = global.mongo;\nif (!cached) {\n    cached = global.mongo = {\n        conn: null,\n        promise: null\n    };\n}\nasync function connectToDatabase() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        };\n        cached.promise = mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(MONGODB_URI, opts).then((client)=>{\n            return {\n                client,\n                db: client.db(MONGODB_DB)\n            };\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlsL21vbmdvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXRDLE1BQU0sRUFBRUMsV0FBVyxHQUFFQyxVQUFVLEdBQUUsR0FBR0MsT0FBTyxDQUFDQyxHQUFHO0FBRS9DLElBQUksQ0FBQ0gsV0FBVyxFQUFFO0lBQ2hCLE1BQU0sSUFBSUksS0FBSyxDQUNiLHNFQUFzRSxDQUN2RSxDQUFDO0FBQ0osQ0FBQztBQUVELElBQUksQ0FBQ0gsVUFBVSxFQUFFO0lBQ2YsTUFBTSxJQUFJRyxLQUFLLENBQ2IscUVBQXFFLENBQ3RFLENBQUM7QUFDSixDQUFDO0FBRUQsSUFBSUMsTUFBTSxHQUFHQyxNQUFNLENBQUNDLEtBQUs7QUFFekIsSUFBSSxDQUFDRixNQUFNLEVBQUU7SUFDWEEsTUFBTSxHQUFHQyxNQUFNLENBQUNDLEtBQUssR0FBRztRQUFFQyxJQUFJLEVBQUUsSUFBSTtRQUFFQyxPQUFPLEVBQUUsSUFBSTtLQUFFLENBQUM7QUFDeEQsQ0FBQztBQUVNLGVBQWVDLGlCQUFpQixHQUFHO0lBQ3hDLElBQUlMLE1BQU0sQ0FBQ0csSUFBSSxFQUFFO1FBQ2YsT0FBT0gsTUFBTSxDQUFDRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUksQ0FBQ0gsTUFBTSxDQUFDSSxPQUFPLEVBQUU7UUFDbkIsTUFBTUUsSUFBSSxHQUFHO1lBQ1hDLGVBQWUsRUFBRSxJQUFJO1lBQ3JCQyxrQkFBa0IsRUFBRSxJQUFJO1NBQ3pCO1FBRURSLE1BQU0sQ0FBQ0ksT0FBTyxHQUFHVix3REFBbUIsQ0FBQ0MsV0FBVyxFQUFFVyxJQUFJLENBQUMsQ0FBQ0ksSUFBSSxDQUFDLENBQUNDLE1BQU0sR0FBSztZQUN2RSxPQUFPO2dCQUNMQSxNQUFNO2dCQUNOQyxFQUFFLEVBQUVELE1BQU0sQ0FBQ0MsRUFBRSxDQUFDaEIsVUFBVSxDQUFDO2FBQzFCLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDREksTUFBTSxDQUFDRyxJQUFJLEdBQUcsTUFBTUgsTUFBTSxDQUFDSSxPQUFPLENBQUM7SUFDbkMsT0FBT0osTUFBTSxDQUFDRyxJQUFJLENBQUM7QUFDckIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtZGF0YS1mcm9tLWFwaS8uL3V0aWwvbW9uZ29kYi5qcz80NTA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuY29uc3QgeyBNT05HT0RCX1VSSSwgTU9OR09EQl9EQiB9ID0gcHJvY2Vzcy5lbnY7XG5cbmlmICghTU9OR09EQl9VUkkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIFwiUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWxcIlxuICApO1xufVxuXG5pZiAoIU1PTkdPREJfREIpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIFwiUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9EQiBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbFwiXG4gICk7XG59XG5cbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ287XG5cbmlmICghY2FjaGVkKSB7XG4gIGNhY2hlZCA9IGdsb2JhbC5tb25nbyA9IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gIGlmIChjYWNoZWQuY29ubikge1xuICAgIHJldHVybiBjYWNoZWQuY29ubjtcbiAgfVxuXG4gIGlmICghY2FjaGVkLnByb21pc2UpIHtcbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgIH07XG5cbiAgICBjYWNoZWQucHJvbWlzZSA9IE1vbmdvQ2xpZW50LmNvbm5lY3QoTU9OR09EQl9VUkksIG9wdHMpLnRoZW4oKGNsaWVudCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2xpZW50LFxuICAgICAgICBkYjogY2xpZW50LmRiKE1PTkdPREJfREIpLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xuICByZXR1cm4gY2FjaGVkLmNvbm47XG59XG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJNT05HT0RCX1VSSSIsIk1PTkdPREJfREIiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJtb25nbyIsImNvbm4iLCJwcm9taXNlIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJvcHRzIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29ubmVjdCIsInRoZW4iLCJjbGllbnQiLCJkYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./util/mongodb.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/createAccount.js"));
module.exports = __webpack_exports__;

})();