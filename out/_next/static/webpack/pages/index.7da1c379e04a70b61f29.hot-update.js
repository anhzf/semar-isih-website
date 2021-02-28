webpackHotUpdate_N_E("pages/index",{

/***/ "./components/blocks/TheNav.jsx":
/*!**************************************!*\
  !*** ./components/blocks/TheNav.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TheNav; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/button */ "./node_modules/primereact/button.js");
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\Repositories\\semar-isih-next\\components\\blocks\\TheNav.jsx";

function TheNav(_ref) {
  var reveal = _ref.reveal;
  // const elm = useRef();
  var bgColor = reveal ? 'bg-white' : 'bg-transparent';
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
    className: "fixed hidden z-50 w-full px-16 py-4 ".concat(bgColor, " sm:flex flex-row flex-nowrap justify-end gap-x-8 shadow-md"),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "#timeline",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        label: "Timeline",
        className: "p-button-text p-button-rounded"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "#prize",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        label: "Prize",
        className: "p-button-text p-button-rounded"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "#contact",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        label: "Contact",
        className: "p-button-text p-button-rounded"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "#register",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(primereact_button__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        label: "Register",
        className: "p-button-rounded p-button-warning"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
_c = TheNav;
;

var _c;

$RefreshReg$(_c, "TheNav");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9ja3MvVGhlTmF2LmpzeCJdLCJuYW1lcyI6WyJUaGVOYXYiLCJyZXZlYWwiLCJiZ0NvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLE1BQVQsT0FBNkI7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFDMUM7QUFDQSxNQUFNQyxPQUFPLEdBQUdELE1BQU0sR0FBRyxVQUFILEdBQWdCLGdCQUF0QztBQUVBLHNCQUNFO0FBQUssYUFBUyxnREFBeUNDLE9BQXpDLGdFQUFkO0FBQUEsNEJBQ0U7QUFBRyxVQUFJLEVBQUMsV0FBUjtBQUFBLDZCQUNFLHFFQUFDLHdEQUFEO0FBQVEsYUFBSyxFQUFDLFVBQWQ7QUFBeUIsaUJBQVMsRUFBQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0U7QUFBRyxVQUFJLEVBQUMsUUFBUjtBQUFBLDZCQUNFLHFFQUFDLHdEQUFEO0FBQVEsYUFBSyxFQUFDLE9BQWQ7QUFBc0IsaUJBQVMsRUFBQztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBU0U7QUFBRyxVQUFJLEVBQUMsVUFBUjtBQUFBLDZCQUNFLHFFQUFDLHdEQUFEO0FBQVEsYUFBSyxFQUFDLFNBQWQ7QUFBd0IsaUJBQVMsRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGLGVBYUU7QUFBRyxVQUFJLEVBQUMsV0FBUjtBQUFBLDZCQUNFLHFFQUFDLHdEQUFEO0FBQVEsYUFBSyxFQUFDLFVBQWQ7QUFBeUIsaUJBQVMsRUFBQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUJEO0tBdkJ1QkYsTTtBQXVCdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2RhMWMzNzllMDRhNzBiNjFmMjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3ByaW1lcmVhY3QvYnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGhlTmF2ICh7IHJldmVhbCB9KSB7XG4gIC8vIGNvbnN0IGVsbSA9IHVzZVJlZigpO1xuICBjb25zdCBiZ0NvbG9yID0gcmV2ZWFsID8gJ2JnLXdoaXRlJyA6ICdiZy10cmFuc3BhcmVudCc7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT17YGZpeGVkIGhpZGRlbiB6LTUwIHctZnVsbCBweC0xNiBweS00ICR7YmdDb2xvcn0gc206ZmxleCBmbGV4LXJvdyBmbGV4LW5vd3JhcCBqdXN0aWZ5LWVuZCBnYXAteC04IHNoYWRvdy1tZGB9PlxuICAgICAgPGEgaHJlZj1cIiN0aW1lbGluZVwiPlxuICAgICAgICA8QnV0dG9uIGxhYmVsPVwiVGltZWxpbmVcIiBjbGFzc05hbWU9XCJwLWJ1dHRvbi10ZXh0IHAtYnV0dG9uLXJvdW5kZWRcIiAvPlxuICAgICAgPC9hPlxuXG4gICAgICA8YSBocmVmPVwiI3ByaXplXCI+XG4gICAgICAgIDxCdXR0b24gbGFiZWw9XCJQcml6ZVwiIGNsYXNzTmFtZT1cInAtYnV0dG9uLXRleHQgcC1idXR0b24tcm91bmRlZFwiIC8+XG4gICAgICA8L2E+XG5cbiAgICAgIDxhIGhyZWY9XCIjY29udGFjdFwiPlxuICAgICAgICA8QnV0dG9uIGxhYmVsPVwiQ29udGFjdFwiIGNsYXNzTmFtZT1cInAtYnV0dG9uLXRleHQgcC1idXR0b24tcm91bmRlZFwiIC8+XG4gICAgICA8L2E+XG5cbiAgICAgIDxhIGhyZWY9XCIjcmVnaXN0ZXJcIj5cbiAgICAgICAgPEJ1dHRvbiBsYWJlbD1cIlJlZ2lzdGVyXCIgY2xhc3NOYW1lPVwicC1idXR0b24tcm91bmRlZCBwLWJ1dHRvbi13YXJuaW5nXCIgLz5cbiAgICAgIDwvYT5cbiAgICA8L25hdj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9