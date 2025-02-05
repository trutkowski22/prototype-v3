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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/auth */ \"(api)/./utils/auth.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    session: {\n        jwt: true\n    },\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            async authorize (credentials) {\n                const username = credentials.username;\n                const password = credentials.password;\n                // Replace with your actual database query\n                const user = {\n                    username: \"admin\",\n                    password: await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().hash(\"admin\", 12)\n                };\n                if (!user || user.username !== username) {\n                    throw new Error(\"No user found with that username.\");\n                }\n                const isValid = await (0,_utils_auth__WEBPACK_IMPORTED_MODULE_3__.verifyPassword)(password, user.password);\n                if (!isValid) {\n                    throw new Error(\"Could not sign you in!\");\n                }\n                return {\n                    username: user.username\n                };\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.username = user.username;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            session.username = token.username;\n            return session;\n        }\n    },\n    secret: process.env.JWT_SECRET\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ2lDO0FBQ3BDO0FBQ3VCO0FBRXJELGlFQUFlQSxnREFBUUEsQ0FBQztJQUN0QkksU0FBUztRQUNQQyxLQUFLO0lBQ1A7SUFDQUMsV0FBVztRQUNUTCxzRUFBbUJBLENBQUM7WUFDbEIsTUFBTU0sV0FBVUMsV0FBVztnQkFDekIsTUFBTUMsV0FBV0QsWUFBWUMsUUFBUTtnQkFDckMsTUFBTUMsV0FBV0YsWUFBWUUsUUFBUTtnQkFFckMsMENBQTBDO2dCQUMxQyxNQUFNQyxPQUFPO29CQUNYRixVQUFVO29CQUNWQyxVQUFVLE1BQU1SLG9EQUFXLENBQUMsU0FBUztnQkFDdkM7Z0JBRUEsSUFBSSxDQUFDUyxRQUFRQSxLQUFLRixRQUFRLEtBQUtBLFVBQVU7b0JBQ3ZDLE1BQU0sSUFBSUksTUFBTTtnQkFDbEI7Z0JBRUEsTUFBTUMsVUFBVSxNQUFNWCwyREFBY0EsQ0FBQ08sVUFBVUMsS0FBS0QsUUFBUTtnQkFFNUQsSUFBSSxDQUFDSSxTQUFTO29CQUNaLE1BQU0sSUFBSUQsTUFBTTtnQkFDbEI7Z0JBRUEsT0FBTztvQkFBRUosVUFBVUUsS0FBS0YsUUFBUTtnQkFBQztZQUNuQztRQUNGO0tBQ0Q7SUFDRE0sV0FBVztRQUNULE1BQU1WLEtBQUksRUFBRVcsS0FBSyxFQUFFTCxJQUFJLEVBQUU7WUFDdkIsSUFBSUEsTUFBTTtnQkFDUkssTUFBTVAsUUFBUSxHQUFHRSxLQUFLRixRQUFRO1lBQ2hDO1lBQ0EsT0FBT087UUFDVDtRQUNBLE1BQU1aLFNBQVEsRUFBRUEsT0FBTyxFQUFFWSxLQUFLLEVBQUU7WUFDOUJaLFFBQVFLLFFBQVEsR0FBR08sTUFBTVAsUUFBUTtZQUNqQyxPQUFPTDtRQUNUO0lBQ0Y7SUFDQWEsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxVQUFVO0FBQ2hDLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xhbmRzY2FwaW5nLWFwcC8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMnO1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcyc7XG5pbXBvcnQgeyB2ZXJpZnlQYXNzd29yZCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2F1dGgnO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIHNlc3Npb246IHtcbiAgICBqd3Q6IHRydWUsXG4gIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gY3JlZGVudGlhbHMudXNlcm5hbWU7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gY3JlZGVudGlhbHMucGFzc3dvcmQ7XG5cbiAgICAgICAgLy8gUmVwbGFjZSB3aXRoIHlvdXIgYWN0dWFsIGRhdGFiYXNlIHF1ZXJ5XG4gICAgICAgIGNvbnN0IHVzZXIgPSB7XG4gICAgICAgICAgdXNlcm5hbWU6ICdhZG1pbicsXG4gICAgICAgICAgcGFzc3dvcmQ6IGF3YWl0IGJjcnlwdC5oYXNoKCdhZG1pbicsIDEyKSwgLy8gRXhhbXBsZSBoYXNoZWQgcGFzc3dvcmRcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIXVzZXIgfHwgdXNlci51c2VybmFtZSAhPT0gdXNlcm5hbWUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHVzZXIgZm91bmQgd2l0aCB0aGF0IHVzZXJuYW1lLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IHZlcmlmeVBhc3N3b3JkKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcblxuICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBzaWduIHlvdSBpbiEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lIH07XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0b2tlbi51c2VybmFtZSA9IHVzZXIudXNlcm5hbWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgc2Vzc2lvbi51c2VybmFtZSA9IHRva2VuLnVzZXJuYW1lO1xuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgfSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfU0VDUkVULFxufSk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYmNyeXB0IiwidmVyaWZ5UGFzc3dvcmQiLCJzZXNzaW9uIiwiand0IiwicHJvdmlkZXJzIiwiYXV0aG9yaXplIiwiY3JlZGVudGlhbHMiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidXNlciIsImhhc2giLCJFcnJvciIsImlzVmFsaWQiLCJjYWxsYmFja3MiLCJ0b2tlbiIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   verifyPassword: () => (/* binding */ verifyPassword)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function verifyPassword(password, hashedPassword) {\n    try {\n        return await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.compare)(password, hashedPassword);\n    } catch (error) {\n        console.error(\"Password verification failed:\", error);\n        return false;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9hdXRoLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFtQztBQUU1QixlQUFlQyxlQUFlQyxRQUFRLEVBQUVDLGNBQWM7SUFDM0QsSUFBSTtRQUNGLE9BQU8sTUFBTUgsaURBQU9BLENBQUNFLFVBQVVDO0lBQ2pDLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsaUNBQWlDQTtRQUMvQyxPQUFPO0lBQ1Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2xhbmRzY2FwaW5nLWFwcC8uL3V0aWxzL2F1dGguanM/ZWI2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wYXJlIH0gZnJvbSAnYmNyeXB0anMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5UGFzc3dvcmQocGFzc3dvcmQsIGhhc2hlZFBhc3N3b3JkKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGF3YWl0IGNvbXBhcmUocGFzc3dvcmQsIGhhc2hlZFBhc3N3b3JkKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdQYXNzd29yZCB2ZXJpZmljYXRpb24gZmFpbGVkOicsIGVycm9yKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJjb21wYXJlIiwidmVyaWZ5UGFzc3dvcmQiLCJwYXNzd29yZCIsImhhc2hlZFBhc3N3b3JkIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/auth.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();