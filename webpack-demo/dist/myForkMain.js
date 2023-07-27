(function () {
  var __webpack_modules__ = {
    "./src/a.js": (module, exports, __webpack_require__) => {
      exports.default = () => {
        console.log("hello a");
      };
      //   const setParam = {
      //     default: () => () => {
      //       console.log("hello");
      //     },
      //   };

      //   __webpack_require__.d(exports, setParam);
    },
  };
  //   (() => {
  //     __webpack_require__.d = (exports, definition) => {
  //       // key ==== default
  //       for (var key in definition) {
  //         exports.default = setParam("default");

  //         /*  Object.defineProperty(exports, key, {
  //           enumerable: true,
  //           get: definition[key],
  //         }); */
  //       }
  //     };
  //   })();

  // 第一次执行的时候 moduleId ---> "./src/a.js"
  function __webpack_require__(moduleId) {
    /*    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = (__webpack_module_cache__[moduleId] = {
      exports: {},
    }); */

    // 定义了一个对象
    var module = {
      exports: {},
    };

    // 执行完webpack_modules[moduleId]()  网module.exports里追加一些值 default
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__); //!!!!!!!!!!!!

    // 执行完有！代码后 module.exports.default = ()=>console.log('hello a')

    return module.exports;
  }

  // 调用了webpack_require函数，同时传递 './src/a.js'
  __webpack_require__.r(__webpack_exports__);

  //   下面这个立即执行函数 就是index.js
  (() => {
    //   commonjs 规范 require
    // import executor from './src/a.js' ES6
    // webpack在没有ES6的时候就支持模块化，我们可以理解为webpack内部自己实现了一套模块化系统
    var result = __webpack_require__("./src/a.js");

    // result === module.exports; result["default"] === executor

    result["default"](); // 属性访问器 let obj={a:1}; obj['a'] = 1
    // (0, _a__WEBPACK_IMPORTED_MODULE_0__["default"])(); // 逗号运算符 1,2 返回2
  })();
})();
