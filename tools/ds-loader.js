/* Lanre preview loader.
   1) Tries the compiled runtime bundle (_ds_bundle.js) and detects its namespace.
   2) If the bundle is missing or stale, transpiles the listed components/<group>/<Name>.jsx in-browser (Babel) instead.
   Exposes window.MP (component registry) and window.MPReady (Promise<registry>).
   Usage: <script src="tools/ds-loader.js" data-root="." data-components="buttons/Button,hud/CurrencyPill"></script> */
(function () {
  var script = document.currentScript;
  var ROOT = (script.getAttribute('data-root') || '.').replace(/\/$/, '');
  var list = (script.getAttribute('data-components') || '').split(',').map(function (s) { return s.trim(); }).filter(Boolean);
  var KNOWN = ['Lanre', 'LanreDS', 'LanreGameUIDesignSystem', 'ExplorationGamingDesignSystem', 'DS', 'DesignSystem'];
  var registry = {};
  window.MP = registry;

  function hasFns(v) { try { return v && typeof v === 'object' && Object.keys(v).some(function (k) { return typeof v[k] === 'function' && /^[A-Z]/.test(k); }); } catch (e) { return false; } }
  function findNS(before) {
    for (var i = 0; i < KNOWN.length; i++) { if (hasFns(window[KNOWN[i]])) return window[KNOWN[i]]; }
    var keys = Object.keys(window);
    for (var j = 0; j < keys.length; j++) { var k = keys[j]; if (before[k]) continue; try { if (hasFns(window[k])) return window[k]; } catch (e) {} }
    return null;
  }
  function loadScript(src) { return new Promise(function (res, rej) { var s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej; document.head.appendChild(s); }); }
  function normalize(p) { var parts = []; p.split('/').forEach(function (seg) { if (seg === '..') parts.pop(); else if (seg !== '.' && seg !== '') parts.push(seg); }); return parts.join('/'); }

  var cache = {};
  async function loadModule(path) {
    if (cache[path]) return cache[path];
    var url = ROOT + '/' + path;
    var res = null, err = null;
    for (var attempt = 0; attempt < 4 && !res; attempt++) { // transient network hiccups happen when many previews load at once
      try { var r = await fetch(url); if (r.ok) res = r; else if (r.status === 404) throw new Error('ds-loader: cannot fetch ' + url); } catch (e) { err = e; if (/cannot fetch/.test(String(e.message))) throw e; await new Promise(function (ok) { setTimeout(ok, 250 * (attempt + 1)); }); }
    }
    if (!res) throw err || new Error('ds-loader: cannot fetch ' + url);
    var src = await res.text();
    var dir = path.slice(0, path.lastIndexOf('/') + 1);
    var deps = {}; var re = /from\s+['"]([^'"]+)['"]/g; var m;
    while ((m = re.exec(src))) { var spec = m[1]; if (spec[0] === '.') { var p = normalize(dir + spec); if (!/\.(jsx|js)$/.test(p)) p += '.jsx'; deps[spec] = await loadModule(p); } }
    var out = Babel.transform(src, { presets: [['env', { modules: 'commonjs' }], ['react', { runtime: 'classic' }]], plugins: ['transform-modules-commonjs'], filename: path }).code;
    var module = { exports: {} };
    var require = function (spec) {
      if (spec === 'react') return React; if (spec === 'react-dom') return ReactDOM;
      if (deps[spec]) return deps[spec]; throw new Error('ds-loader: unresolved import ' + spec + ' in ' + path);
    };
    new Function('require', 'module', 'exports', 'React', out)(require, module, module.exports, React);
    cache[path] = module.exports; return module.exports;
  }

  window.MPReady = (async function () {
    var before = {}; Object.keys(window).forEach(function (k) { before[k] = true; });
    var ns = null;
    try {
      var probe = await fetch(ROOT + '/_ds_bundle.js', { method: 'HEAD' });
      if (probe.ok) { await loadScript(ROOT + '/_ds_bundle.js'); ns = findNS(before); }
    } catch (e) { ns = null; }
    var complete = ns && list.every(function (c) { return typeof ns[c.split('/').pop()] === 'function'; });
    if (complete) { Object.assign(registry, ns); registry.__source = 'bundle'; return registry; }
    for (var i = 0; i < list.length; i++) { var mod = await loadModule('components/' + list[i] + '.jsx'); Object.assign(registry, mod); }
    registry.__source = 'jsx';
    return registry;
  })();
})();
