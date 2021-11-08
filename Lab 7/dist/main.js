/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var https_cdn_skypack_dev_three_0_132_2_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js */ \"https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([https_cdn_skypack_dev_three_0_132_2_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_0__]);\nhttps_cdn_skypack_dev_three_0_132_2_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\ndocument.getElementById('inputfile')\r\n            .addEventListener('change', function() {\r\n                let polylinesarr= [];\r\n     var cor = [];\r\n     let arrs=[];\r\n            var fr=new FileReader();\r\n            fr.onload=function(){\r\n                var scene = new THREE.Scene();\r\nvar camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 100);\r\ncamera.position.set(0, 5, 15);\r\ncamera.lookAt(0, 5, 5);\r\ncamera.up.set(0,0,1);\r\nvar renderer = new THREE.WebGLRenderer();\r\nrenderer.setSize(window.innerWidth, window.innerHeight);\r\ndocument.body.appendChild(renderer.domElement);\r\nconsole.log(arrs)\r\nrenderer.render( scene, camera );\r\n\r\n\r\nvar lines = fr.result.split(\"\\r\\n\");\r\nvar polylines;\r\nvar pointsInPolylines;\r\n\r\n\r\n\r\nfor(j=0; j < lines.length; j++)\r\n{\r\n  lines[j] = lines[j].replace(/[\"]/g,'');\r\n  cor[j] = lines[j].split(\",\");\r\n\r\n \r\n\r\n}\r\n\r\nfor(var k =1; k<cor.length; k++ ){\r\n    polylines =parseInt(cor[0][0]) ;\r\n    \r\nconsole.log(polylines)\r\n    for(var i =0; i<polylines; i++ )\r\n{\r\n    pointsInPolylines = parseInt(cor[k][0]) \r\n    k++;\r\n    console.log(pointsInPolylines)\r\n\r\n    poipoly = [];\r\n    for(j=0; j< pointsInPolylines;  j++)\r\n    {\r\n        const x = parseInt(cor[k][0].split(\" \")[0] )  \r\n        const y =parseInt(cor[k][0].split(\" \")[1] )\r\n        k++;\r\n        x=x/100\r\n        y=y/100\r\n     poipoly.push(new THREE.Vector3(x, y,0));\r\n     \r\n    }  \r\n    polylinesarr.push(poipoly);\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n}\r\nconsole.log(polylinesarr);\r\n\r\nfor(var p=0; p<polylinesarr.length ; p++)\r\n    {\r\n      console.log(polylinesarr[p])\r\n     const material = new THREE.LineBasicMaterial( { color: \"white\" } );\r\n    const geometry = new THREE.BufferGeometry().setFromPoints( polylinesarr[p]);\r\n    const line = new THREE.Line( geometry, material );\r\n   \r\n    scene.add(line);\r\n    console.log(line)\r\n    renderer.render( scene, camera );\r\n    }\r\n   \r\n    renderer.render( scene, camera );\r\n  \r\n}\r\n\r\n\r\n     \r\n \r\nrenderer.render( scene, camera );\r\n\r\n          }\r\n              \r\n            fr.readAsText(this.files[0]);\r\n        })\r\n\n});\n\n//# sourceURL=webpack://lab-7/./src/index.js?");

/***/ }),

/***/ "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js":
false

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var completeQueue = (queue) => {
/******/ 			if(queue) {
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var completeFunction = (fn) => (!--fn.r && fn());
/******/ 		var queueFunction = (queue, fn) => (queue ? queue.push(fn) : completeFunction(fn));
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackThen]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					});
/******/ 					var obj = {};
/******/ 												obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep.catch(reject));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 								ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 								ret[webpackExports] = dep;
/******/ 								return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue = hasAwait && [];
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var isEvaluating = true;
/******/ 			var nested = false;
/******/ 			var whenAll = (deps, onResolve, onReject) => {
/******/ 				if (nested) return;
/******/ 				nested = true;
/******/ 				onResolve.r += deps.length;
/******/ 				deps.map((dep, i) => (dep[webpackThen](onResolve, onReject)));
/******/ 				nested = false;
/******/ 			};
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = () => (resolve(exports), completeQueue(queue), queue = 0);
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackThen] = (fn, rejectFn) => {
/******/ 				if (isEvaluating) { return completeFunction(fn); }
/******/ 				if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 				queueFunction(queue, fn);
/******/ 				promise.catch(rejectFn);
/******/ 			};
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				if(!deps) return outerResolve();
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn, result;
/******/ 				var promise = new Promise((resolve, reject) => {
/******/ 					fn = () => (resolve(result = currentDeps.map((d) => (d[webpackExports]))));
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : result;
/******/ 			}).then(outerResolve, reject);
/******/ 			isEvaluating = false;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;