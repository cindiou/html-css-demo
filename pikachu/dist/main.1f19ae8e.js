// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.str = void 0;
var str = ".pikachu .content .upPart .nose {\n  width: 10px;\n  height: 5px;\n  border: 5px black solid;\n  \n  position: absolute;\n  left: 50%;\n  top: 200px;\n  margin-left: -5px;\n  border-color: black transparent transparent;\n}\n\n.pikachu .content .upPart .nose:hover {\n  animation: shake 200ms infinite ease-in-out;\n}\n\n.pikachu .content .upPart .nose::after {\n  content: \"\";\n  display: block;\n  height: 3px;\n  width: 10px;\n  border-top-right-radius: 5px 3px;\n  border-top-left-radius: 5px 3px;\n  background-color: #000;\n  position: absolute;\n  left: -5px;\n  top: -8px;\n}\n\n.pikachu .content .upPart .eye {\n  position: relative;\n}\n\n.pikachu .content .upPart .eye div {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background-color: #303031;\n  border: 1px solid black;\n  position: absolute;\n  top: 180px;\n  left: 50%;\n  margin-left: -16px;\n}\n\n.pikachu .content .upPart .eye ::after {\n  content: \"\";\n  display: block;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background-color: #fff;\n  position: absolute;\n  left: 3px;\n}\n\n.pikachu .content .upPart .eye .left {\n  transform: translateX(-100px);\n}\n\n.pikachu .content .upPart .eye .right {\n  transform: translateX(100px);\n}\n\n.pikachu .content .downPart {\n  width: 200px;\n  height: 150px;\n  position: absolute;\n  left: 50%;\n  top: 250px;\n  margin-left: -100px;\n}\n\n.pikachu .content .downPart .dimple div {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  border: 1px solid black;\n  background-color: #ff5140;\n  position: absolute;\n  left: 50%;\n  top: 0px;\n  margin-left: -32px;\n}\n\n.pikachu .content .downPart .dimple .left {\n  transform: translateX(-150px);\n}\n\n.pikachu .content .downPart .dimple .right {\n  transform: translateX(150px);\n}\n\n.pikachu .content .downPart .mouth {\n  position: absolute;\n  width: inherit;\n  height: inherit;\n  overflow: hidden;\n}\n\n.pikachu .content .downPart .mouth .mouthCorner {\n  position: absolute;\n  z-index: -1;\n}\n\n.pikachu .content .downPart .mouth .mouthCorner div {\n  width: 100px;\n  height: 20px;\n  background-color: #fee433;\n  border: 2px solid black;\n  border-top: none;\n  border-right: none;\n  border-bottom-left-radius: 50px 20px;\n  position: absolute;\n  left: 0;\n  top: -20px;\n  transform-origin: right top;\n}\n\n.pikachu .content .downPart .mouth .mouthCorner .left {\n  transform: rotate(-15deg);\n}\n\n.pikachu .content .downPart .mouth .mouthCorner .right {\n  transform: scaleX(-1) rotate(-15deg);\n}\n\n.pikachu .content .downPart .mouth .mouthUp {\n  width: 150px;\n  height: 500px;\n  border: 1px solid black;\n  border-bottom-left-radius: 75px 250px;\n  border-bottom-right-radius: 75px 250px;\n  background-color: #cc4143;\n  z-index: -2;\n  position: absolute;\n  left: 25px;\n  top: -380px;\n  overflow: hidden;\n}\n\n.pikachu .content .downPart .mouth .mouthUp .mouthDown {\n  width: 200px;\n  height: 300px;\n  background-color: #dd666a;\n  position: absolute;\n  left: -25px;\n  top: 390px;\n  border-top-left-radius: 100px 150px;\n  border-top-right-radius: 100px 150px;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: rotate(0deg);\n  }\n  25% {\n    transform: rotate(10deg);\n  }\n  75% {\n    transform: rotate(-10deg);\n  }\n}";
exports.str = str;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _data = require("./data.js");

var style = document.querySelector("#style");
var desc = document.querySelector("#description");
var n = 1,
    timer,
    speed = 50;

var step = function step(speed) {
  timer = setInterval(function () {
    if (n > _data.str.length) {
      return;
    } // s += str[n++];


    style.innerHTML = _data.str.slice(0, n);
    desc.innerText = _data.str.slice(0, n);
    n++;
    desc.scrollTop = desc.scrollHeight; // step(speed);
  }, speed);
};

step(speed);

btnPause.onclick = function () {
  //   clearTimeout(timer);
  clearInterval(timer);
  alert("Pause!");
};

btnPlay.onclick = function () {
  //   clearTimeout(timer);
  clearInterval(timer);
  step(speed);
  alert("Play!");
};

btnNormal.onclick = function () {
  alert("正常！");
  speed = 50; //   clearTimeout(timer);

  clearInterval(timer);
  step(speed);
};

btnFast.onclick = function () {
  alert("快速！");
  speed = 0; //   clearTimeout(timer);

  clearInterval(timer);
  step(speed);
};

btnSlow.onclick = function () {
  alert("慢速！");
  speed = 200; //   clearTimeout(timer);

  clearInterval(timer);
  step(speed);
};
},{"./data.js":"data.js"}],"../../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62375" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map