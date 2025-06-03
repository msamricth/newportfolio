// src/utils/splitting.js
let Splitting = () => []  // SSR‐safe no-op

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  // We’re running in the browser—inline the original factory body:
  Splitting = (function() {
    'use strict';

    var root = document;
    var createText = root.createTextNode.bind(root);

    function setProperty(el, varName, value) {
      el.style.setProperty(varName, value);
    }

    function appendChild(el, child) {
      return el.appendChild(child);
    }

    // Modified: createElement now accepts a "key" that can include multiple classes
    function createElement(parent, key, text) {
      var el = root.createElement('span');
      if (key) {
        // key may be something like "word mr-1"
        el.className = key;
      }
      if (text) {
        el.innerHTML = text + '&nbsp;';
      }
      return (parent && appendChild(parent, el)) || el;
    }

    function getData(el, key) {
      return el.getAttribute('data-' + key);
    }

    function $$(e, parent) {
      if (!e || e.length === 0) return [];
      if (e.nodeName) return [e];
      var list = e[0] && e[0].nodeName ? e : (parent || root).querySelectorAll(e);
      return [].slice.call(list);
    }

    function each(items, fn) {
      items && items.some(fn);
    }

    function index(el, key, items) {
      var prefix = '--' + key, cssVar = prefix + '-index';
      each(items, function(chunk, i) {
        if (Array.isArray(chunk)) {
          each(chunk, function(c) {
            setProperty(c, cssVar, i);
          });
        } else {
          setProperty(chunk, cssVar, i);
        }
      });
      setProperty(el, prefix + '-total', items.length);
    }

    var plugins = {};

    function resolvePlugins(by, parent, deps) {
      var idx = deps.indexOf(by);
      if (idx === -1) {
        deps.unshift(by);
        var p = plugins[by];
        if (!p) throw new Error('plugin not loaded: ' + by);
        each(p.depends, function(d) {
          resolvePlugins(d, by, deps);
        });
      } else {
        var parentIdx = deps.indexOf(parent);
        deps.splice(idx, 1);
        deps.splice(parentIdx, 0, by);
      }
      return deps;
    }

    function selectFrom(obj) {
      return function(key) {
        return obj[key];
      };
    }

    function createPlugin(by, depends, key, split) {
      return { by: by, depends: depends, key: key, split: split };
    }

    function resolve(by) {
      return resolvePlugins(by, 0, []).map(selectFrom(plugins));
    }

    function addPlugin(o) {
      plugins[o.by] = o;
    }

    // Modified: splitText no longer creates whitespace nodes or spans; adds "mr-1" class to each word
    function splitText(el, key, splitOn, includePrev, preserveWhite) {
      el.normalize();
      var out = [], frag = document.createDocumentFragment(), all = [];

      $$(el.childNodes).some(function(node) {
        if (node.tagName && !node.hasChildNodes()) {
          // if it's an element node with no children, keep it as-is
          all.push(node);
        } else if (node.childNodes && node.childNodes.length) {
          all.push(node);
          out.push.apply(out, splitText(node, key, splitOn, includePrev, preserveWhite));
        } else {
          var txt = (node.wholeText || '').trim();
          if (txt.length) {
            // Split on whitespace regex; for words, splitOn is /\s+/
            var useSeg = splitOn === '' && typeof Intl.Segmenter === 'function';
            var bits = useSeg
              ? Array.from(new Intl.Segmenter().segment(txt)).map(function(s) { return s.segment; })
              : txt.split(splitOn);

            each(bits, function(piece) {
              // Create a <span class="word mr-1">piece</span>
              var span = createElement(frag, key, piece);
              out.push(span);
              all.push(span);
            });
          }
        }
      });

      each(all, function(n) { appendChild(frag, n); });
      el.innerHTML = '';
      appendChild(el, frag);
      return out;
    }

    // Define core plugins with the modified splitText behavior
    var WORDS = 'words';
    var CHARS = 'chars';

    addPlugin(createPlugin(WORDS, [], 'word', function(el) {
      return splitText(el, 'word', /\s+/, 0, 0);
    }));

    // For CHARS, we operate on the WORDS output; characters get no extra margin class
    addPlugin(createPlugin(CHARS, [WORDS], 'char', function(el, opts, ctx) {
      var res = [];
      each(ctx[WORDS], function(w, i) {
        var chars = [];
        // Split each word into characters without adding mr-1
        w.normalize();
        var letters = (w.textContent || '').split('');
        each(letters, function(letter) {
          var charSpan = createElement(frag, 'char', letter);
          chars.push(charSpan);
        });
        // replace the existing word span with its chars
        w.innerHTML = '';
        each(chars, function(c) { appendChild(w, c); });
        res.push(chars);
      });
      return res;
    }));

    // If you have other plugins (lines, rows, etc.), add them similarly with no whitespace output

    function SplittingAPI(opts) {
      opts = opts || {};
      return $$(opts.target || '[data-splitting]').map(function(el) {
        var ctx = el['🍌'];
        if (!opts.force && ctx) return ctx;
        ctx = el['🍌'] = { el: el };
        var by = opts.by || getData(el, 'splitting') || CHARS;
        var pluginsToRun = resolve(by);
        var cfg = Object.assign({}, opts);

        each(pluginsToRun, function(plugin) {
          if (plugin.split) {
            var key = (opts.key ? '-' + opts.key : '') + plugin.key;
            var items = plugin.split(el, cfg, ctx);
            key && index(el, key, items);
            ctx[plugin.by] = items;
            el.classList.add(plugin.by);
          }
        });

        el.classList.add('splitting');
        return ctx;
      });
    }

    SplittingAPI.html = function(opts) {
      opts = opts || {};
      var parent = createElement();
      parent.innerHTML = opts.content;
      SplittingAPI(opts);
      return parent.outerHTML;
    };
    SplittingAPI.add = addPlugin;

    return SplittingAPI;
  })();
}

export default Splitting;