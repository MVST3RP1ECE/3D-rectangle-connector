// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"eZFTg":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "9eacdeebc9112ede";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"9Fk10":[function(require,module,exports,__globalThis) {
var _draw = require("./canvas/draw");
var _dataConverter = require("./dataConverter");
var _interact = require("./canvas/interact");
// Функция для привязки точки к ближайшей грани прямоугольника
function snapPointToRectEdge(rect, point) {
    const { position, size } = rect;
    const left = position.x - size.width / 2;
    const right = position.x + size.width / 2;
    const top = position.y - size.height / 2;
    const bottom = position.y + size.height / 2;
    // Считаем расстояния до каждой из четырёх граней
    const dLeft = Math.abs(point.x - left);
    const dRight = Math.abs(point.x - right);
    const dTop = Math.abs(point.y - top);
    const dBottom = Math.abs(point.y - bottom);
    const minDist = Math.min(dLeft, dRight, dTop, dBottom);
    if (minDist === dLeft) return {
        x: left,
        y: Math.max(top, Math.min(point.y, bottom))
    };
    if (minDist === dRight) return {
        x: right,
        y: Math.max(top, Math.min(point.y, bottom))
    };
    if (minDist === dTop) return {
        x: Math.max(left, Math.min(point.x, right)),
        y: top
    };
    return {
        x: Math.max(left, Math.min(point.x, right)),
        y: bottom
    };
}
const canvas = document.getElementById('main-canvas');
const ctx = canvas.getContext('2d');
// Пример данных для начальной отрисовки
let rect1 = {
    position: {
        x: 150,
        y: 100
    },
    size: {
        width: 80,
        height: 80
    }
};
let rect2 = {
    position: {
        x: 500,
        y: 250
    },
    size: {
        width: 80,
        height: 80
    }
};
let cPoint1 = {
    point: {
        x: 150,
        y: 60
    },
    angle: -90
};
let cPoint2 = {
    point: {
        x: 500,
        y: 290
    },
    angle: 90
};
function drawConnectionPoint(ctx, p) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(p.x, p.y, 7, 0, 2 * Math.PI);
    ctx.fillStyle = '#1976d2';
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}
function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    (0, _draw.drawRect)(ctx, rect1);
    (0, _draw.drawRect)(ctx, rect2);
    drawConnectionPoint(ctx, cPoint1.point);
    drawConnectionPoint(ctx, cPoint2.point);
    const polyline = (0, _dataConverter.dataConverter)(rect1, rect2, cPoint1, cPoint2);
    (0, _draw.drawPolyline)(ctx, polyline);
}
// Drag&Drop
let dragTarget = null;
let dragOffset = {
    x: 0,
    y: 0
};
canvas.addEventListener('mousedown', (e)=>{
    const rect = canvas.getBoundingClientRect();
    console.log(rect);
    const mouse = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
    // Проверяем соединительные точки
    if ((0, _interact.isPointNear)(mouse, cPoint1.point)) {
        dragTarget = {
            type: 'cpoint',
            cpointIndex: 1
        };
        dragOffset = {
            x: mouse.x - cPoint1.point.x,
            y: mouse.y - cPoint1.point.y
        };
        return;
    }
    if ((0, _interact.isPointNear)(mouse, cPoint2.point)) {
        dragTarget = {
            type: 'cpoint',
            cpointIndex: 2
        };
        dragOffset = {
            x: mouse.x - cPoint2.point.x,
            y: mouse.y - cPoint2.point.y
        };
        return;
    }
    // Проверяем прямоугольники
    if ((0, _interact.isPointInRect)(mouse, rect1)) {
        dragTarget = {
            type: 'rect',
            rectIndex: 1
        };
        dragOffset = {
            x: mouse.x - rect1.position.x,
            y: mouse.y - rect1.position.y
        };
        return;
    }
    if ((0, _interact.isPointInRect)(mouse, rect2)) {
        dragTarget = {
            type: 'rect',
            rectIndex: 2
        };
        dragOffset = {
            x: mouse.x - rect2.position.x,
            y: mouse.y - rect2.position.y
        };
        return;
    }
});
canvas.addEventListener('mousemove', (e)=>{
    if (!dragTarget) return;
    const rect = canvas.getBoundingClientRect();
    const mouse = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
    if (dragTarget.type === 'rect') {
        if (dragTarget.rectIndex === 1) {
            rect1.position = {
                x: mouse.x - dragOffset.x,
                y: mouse.y - dragOffset.y
            };
            // Перемещаем и соединительную точку вместе с прямоугольником
            const dx = rect1.position.x - cPoint1.point.x;
            const dy = rect1.position.y - cPoint1.point.y;
            cPoint1.point = {
                x: cPoint1.point.x + dx,
                y: cPoint1.point.y + dy
            };
        } else {
            rect2.position = {
                x: mouse.x - dragOffset.x,
                y: mouse.y - dragOffset.y
            };
            const dx = rect2.position.x - cPoint2.point.x;
            const dy = rect2.position.y - cPoint2.point.y;
            cPoint2.point = {
                x: cPoint2.point.x + dx,
                y: cPoint2.point.y + dy
            };
        }
    } else if (dragTarget.type === 'cpoint') {
        if (dragTarget.cpointIndex === 1) cPoint1.point = snapPointToRectEdge(rect1, {
            x: mouse.x - dragOffset.x,
            y: mouse.y - dragOffset.y
        });
        else cPoint2.point = snapPointToRectEdge(rect2, {
            x: mouse.x - dragOffset.x,
            y: mouse.y - dragOffset.y
        });
    }
    render();
});
canvas.addEventListener('mouseup', ()=>{
    dragTarget = null;
});
canvas.addEventListener('mouseleave', ()=>{
    dragTarget = null;
});
render();

},{"./canvas/draw":"7EQuI","./dataConverter":"etncb","./canvas/interact":"1ppjD"}],"7EQuI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Рисует прямоугольник на canvas
 */ parcelHelpers.export(exports, "drawRect", ()=>drawRect);
/**
 * Рисует ломаную линию по массиву точек
 */ parcelHelpers.export(exports, "drawPolyline", ()=>drawPolyline);
function drawRect(ctx, rect, color = 'rgba(0,0,255,0.5)') {
    ctx.save();
    ctx.fillStyle = color;
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.rect(rect.position.x - rect.size.width / 2, rect.position.y - rect.size.height / 2, rect.size.width, rect.size.height);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}
function drawPolyline(ctx, points, color = '#000') {
    if (points.length < 2) return;
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for(let i = 1; i < points.length; i++)ctx.lineTo(points[i].x, points[i].y);
    ctx.stroke();
    ctx.restore();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"etncb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dataConverter", ()=>dataConverter);
var _rectUtils = require("./geometry/rectUtils");
const dataConverter = (rect1, rect2, cPoint1, cPoint2)=>{
    // Проверка корректности соединений
    if (!(0, _rectUtils.isPointOnRectEdge)(rect1, cPoint1.point)) throw new Error("\u0422\u043E\u0447\u043A\u0430 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F 1 \u043D\u0435 \u043B\u0435\u0436\u0438\u0442 \u043D\u0430 \u0433\u0440\u0430\u043D\u0438 \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430 1");
    if (!(0, _rectUtils.isPointOnRectEdge)(rect2, cPoint2.point)) throw new Error("\u0422\u043E\u0447\u043A\u0430 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F 2 \u043D\u0435 \u043B\u0435\u0436\u0438\u0442 \u043D\u0430 \u0433\u0440\u0430\u043D\u0438 \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430 2");
    // Если угол не наружу, заменить его на наружный (перпендикуляр к грани)
    let angle1 = cPoint1.angle;
    if (!(0, _rectUtils.isAngleOutward)(rect1, cPoint1)) {
        const normal = (0, _rectUtils.getRectEdgeNormal)(rect1, cPoint1.point);
        if (normal) angle1 = Math.atan2(normal.y, normal.x) * 180 / Math.PI;
    }
    let angle2 = cPoint2.angle;
    if (!(0, _rectUtils.isAngleOutward)(rect2, cPoint2)) {
        const normal = (0, _rectUtils.getRectEdgeNormal)(rect2, cPoint2.point);
        if (normal) angle2 = Math.atan2(normal.y, normal.x) * 180 / Math.PI;
    }
    // Стартовая и конечная точки с небольшим отступом от прямоугольника
    const OFFSET = 16; // px
    const start = (0, _rectUtils.getOffsetPoint)(cPoint1.point, angle1, OFFSET);
    const end = (0, _rectUtils.getOffsetPoint)(cPoint2.point, angle2, OFFSET);
    // Проверяем, пересекает ли прямой путь какой-либо прямоугольник
    const intersects1 = (0, _rectUtils.doesSegmentIntersectRect)(start, end, rect1);
    const intersects2 = (0, _rectUtils.doesSegmentIntersectRect)(start, end, rect2);
    if (!intersects1 && !intersects2) return [
        cPoint1.point,
        start,
        end,
        cPoint2.point
    ];
    // Если пересекает, строим ломаную с обходом (манхэттенский маршрут)
    // Сначала идём по X, потом по Y (или наоборот, если так не пересекает)
    const mid1 = {
        x: end.x,
        y: start.y
    };
    const mid2 = {
        x: start.x,
        y: end.y
    };
    // Проверяем оба варианта обхода
    const cross1 = (0, _rectUtils.doesSegmentIntersectRect)(start, mid1, rect1) || (0, _rectUtils.doesSegmentIntersectRect)(start, mid1, rect2) || (0, _rectUtils.doesSegmentIntersectRect)(mid1, end, rect1) || (0, _rectUtils.doesSegmentIntersectRect)(mid1, end, rect2);
    if (!cross1) return [
        cPoint1.point,
        start,
        mid1,
        end,
        cPoint2.point
    ];
    const cross2 = (0, _rectUtils.doesSegmentIntersectRect)(start, mid2, rect1) || (0, _rectUtils.doesSegmentIntersectRect)(start, mid2, rect2) || (0, _rectUtils.doesSegmentIntersectRect)(mid2, end, rect1) || (0, _rectUtils.doesSegmentIntersectRect)(mid2, end, rect2);
    if (!cross2) return [
        cPoint1.point,
        start,
        mid2,
        end,
        cPoint2.point
    ];
    // Если оба варианта пересекают, возвращаем базовый (но такого быть не должно)
    return [
        cPoint1.point,
        start,
        end,
        cPoint2.point
    ];
};

},{"./geometry/rectUtils":"bUAPU","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bUAPU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Проверяет, лежит ли точка на одной из граней прямоугольника (с учетом допуска)
 * @param rect Прямоугольник
 * @param point Точка
 * @param epsilon Допуск (по умолчанию 1e-6)
 */ parcelHelpers.export(exports, "isPointOnRectEdge", ()=>isPointOnRectEdge);
/**
 * Возвращает нормаль (единичный вектор) наружу для точки на грани прямоугольника
 * @param rect Прямоугольник
 * @param point Точка на грани
 */ parcelHelpers.export(exports, "getRectEdgeNormal", ()=>getRectEdgeNormal);
/**
 * Проверяет, что угол соединения перпендикулярен грани и направлен наружу
 * @param rect Прямоугольник
 * @param cPoint Точка соединения
 * @param epsilon Допуск (по умолчанию 1e-4)
 */ parcelHelpers.export(exports, "isAngleOutward", ()=>isAngleOutward);
/**
 * Возвращает точку, смещённую от исходной на заданное расстояние по углу
 * @param point Исходная точка
 * @param angle Угол в градусах
 * @param distance Расстояние
 */ parcelHelpers.export(exports, "getOffsetPoint", ()=>getOffsetPoint);
/**
 * Проверяет, пересекает ли отрезок [a, b] прямоугольник rect
 */ parcelHelpers.export(exports, "doesSegmentIntersectRect", ()=>doesSegmentIntersectRect);
function isPointOnRectEdge(rect, point, epsilon = 1e-6) {
    const { position, size } = rect;
    const left = position.x - size.width / 2;
    const right = position.x + size.width / 2;
    const top = position.y - size.height / 2;
    const bottom = position.y + size.height / 2;
    // Проверяем, лежит ли точка на одной из четырех граней
    const onLeft = Math.abs(point.x - left) < epsilon && point.y >= top - epsilon && point.y <= bottom + epsilon;
    const onRight = Math.abs(point.x - right) < epsilon && point.y >= top - epsilon && point.y <= bottom + epsilon;
    const onTop = Math.abs(point.y - top) < epsilon && point.x >= left - epsilon && point.x <= right + epsilon;
    const onBottom = Math.abs(point.y - bottom) < epsilon && point.x >= left - epsilon && point.x <= right + epsilon;
    return onLeft || onRight || onTop || onBottom;
}
function getRectEdgeNormal(rect, point) {
    const { position, size } = rect;
    const left = position.x - size.width / 2;
    const right = position.x + size.width / 2;
    const top = position.y - size.height / 2;
    const bottom = position.y + size.height / 2;
    if (Math.abs(point.x - left) < 1e-6) return {
        x: -1,
        y: 0
    };
    if (Math.abs(point.x - right) < 1e-6) return {
        x: 1,
        y: 0
    };
    if (Math.abs(point.y - top) < 1e-6) return {
        x: 0,
        y: -1
    };
    if (Math.abs(point.y - bottom) < 1e-6) return {
        x: 0,
        y: 1
    };
    return null;
}
function isAngleOutward(rect, cPoint, epsilon = 1e-4) {
    const normal = getRectEdgeNormal(rect, cPoint.point);
    if (!normal) return false;
    // Переводим угол в радианы
    const angleRad = cPoint.angle * Math.PI / 180;
    const dir = {
        x: Math.cos(angleRad),
        y: Math.sin(angleRad)
    };
    // Скалярное произведение должно быть положительным (направление наружу)
    const dot = normal.x * dir.x + normal.y * dir.y;
    // И направление должно быть почти перпендикулярно (dot ~ 1)
    return dot > 1 - epsilon;
}
function getOffsetPoint(point, angle, distance) {
    const rad = angle * Math.PI / 180;
    return {
        x: point.x + Math.cos(rad) * distance,
        y: point.y + Math.sin(rad) * distance
    };
}
function doesSegmentIntersectRect(a, b, rect) {
    const { position, size } = rect;
    const left = position.x - size.width / 2;
    const right = position.x + size.width / 2;
    const top = position.y - size.height / 2;
    const bottom = position.y + size.height / 2;
    // Вспомогательная функция для пересечения двух отрезков
    function segmentsIntersect(p1, p2, q1, q2) {
        function ccw(a, b, c) {
            return (c.y - a.y) * (b.x - a.x) > (b.y - a.y) * (c.x - a.x);
        }
        return ccw(p1, q1, q2) !== ccw(p2, q1, q2) && ccw(p1, p2, q1) !== ccw(p1, p2, q2);
    }
    // Грани прямоугольника
    const corners = [
        {
            x: left,
            y: top
        },
        {
            x: right,
            y: top
        },
        {
            x: right,
            y: bottom
        },
        {
            x: left,
            y: bottom
        }
    ];
    for(let i = 0; i < 4; i++){
        const p1 = corners[i];
        const p2 = corners[(i + 1) % 4];
        if (segmentsIntersect(a, b, p1, p2)) return true;
    }
    // Также проверим, не лежит ли весь отрезок внутри прямоугольника
    const inside = a.x >= left && a.x <= right && a.y >= top && a.y <= bottom && b.x >= left && b.x <= right && b.y >= top && b.y <= bottom;
    return inside;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1ppjD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Проверяет, находится ли точка внутри прямоугольника
 */ parcelHelpers.export(exports, "isPointInRect", ()=>isPointInRect);
/**
 * Проверяет, находится ли точка вблизи соединительной точки (радиус 10px)
 */ parcelHelpers.export(exports, "isPointNear", ()=>isPointNear);
function isPointInRect(point, rect) {
    return point.x >= rect.position.x - rect.size.width / 2 && point.x <= rect.position.x + rect.size.width / 2 && point.y >= rect.position.y - rect.size.height / 2 && point.y <= rect.position.y + rect.size.height / 2;
}
function isPointNear(point, target, radius = 5) {
    const dx = point.x - target.x;
    const dy = point.y - target.y;
    return dx * dx + dy * dy <= radius * radius;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["eZFTg","9Fk10"], "9Fk10", "parcelRequirea430", {})

//# sourceMappingURL=3D-Rectangle-TypeScript.c9112ede.js.map
