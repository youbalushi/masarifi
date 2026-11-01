/* محرك عرض بسيط لقالب التطبيق: يحوّل الشجرة إلى عناصر Preact مع كل تحديث */
(function () {
  var h = preact.h;
  function DCLogic(props) { this.props = props || {}; }
  window.DCLogic = DCLogic;

  function lookup(path, scope) {
    var parts = path.split('.');
    var cur;
    var first = parts[0];
    for (var i = scope.length - 1; i >= 0; i--) {
      if (scope[i] && Object.prototype.hasOwnProperty.call(scope[i], first)) { cur = scope[i][first]; break; }
    }
    for (var j = 1; j < parts.length; j++) { if (cur == null) return undefined; cur = cur[parts[j]]; }
    return cur;
  }
  var HOLE = /\{\{\s*([\w.$]+)\s*\}\}/g;
  var SINGLE = /^\{\{\s*([\w.$]+)\s*\}\}$/;
  function interp(str, scope) {
    var m = SINGLE.exec(str);
    if (m) return lookup(m[1], scope);
    return str.replace(HOLE, function (_, p) { var v = lookup(p, scope); return v == null ? '' : String(v); });
  }
  function str(v) { return v == null || v === false ? '' : String(v); }

  function renderChildren(nodes, scope, out) {
    for (var i = 0; i < nodes.length; i++) renderNode(nodes[i], scope, out);
    return out;
  }
  function renderNode(n, scope, out) {
    if (n.t != null) {
      if (n.t.indexOf('{{') === -1) { out.push(n.t); return; }
      var v = n.t.replace(HOLE, function (_, p) { return str(lookup(p, scope)); });
      out.push(v);
      return;
    }
    var tag = n.n, a = n.a || {};
    if (tag === 'sc-if') {
      if (interp(a.value || '', scope)) renderChildren(n.c, scope, out);
      return;
    }
    if (tag === 'sc-for') {
      var list = interp(a.list || '', scope) || [];
      var as = a.as || 'item';
      for (var k = 0; k < list.length; k++) {
        var fr = {}; fr[as] = list[k];
        var sub = scope.concat([fr]);
        var kids = renderChildren(n.c, sub, []);
        for (var q = 0; q < kids.length; q++) {
          var kd = kids[q];
          if (kd && typeof kd === 'object' && kd.key == null) kd.key = 'f' + k + '_' + q;
          out.push(kd);
        }
      }
      return;
    }
    var props = {};
    var isField = tag === 'input' || tag === 'textarea';
    var type = (a.type || '').toLowerCase();
    for (var name in a) {
      if (name.indexOf('hint-') === 0) continue;
      var raw = a[name];
      var val = raw.indexOf('{{') === -1 ? raw : interp(raw, scope);
      if (name.length > 2 && name[0] === 'o' && name[1] === 'n') {
        if (typeof val !== 'function') continue;
        var ev = name;
        if (name === 'onChange' && isField && type !== 'file' && type !== 'checkbox' && type !== 'radio') ev = 'onInput';
        if (name === 'onSubmit') { val = (function (fn) { return function (e) { if (e && e.preventDefault) e.preventDefault(); return fn(e); }; })(val); }
        props[ev] = val;
        continue;
      }
      if (name === 'ref') { if (typeof val === 'function') props.ref = val; continue; }
      if (val === false || val == null) continue;
      if (val === true) val = '';
      if (name === 'value' && isField) { props.value = String(val); continue; }
      props[name] = typeof val === 'object' ? String(val) : val;
    }
    if (tag === 'textarea' && props.value == null && n.c && n.c.length) {
      props.value = renderChildren(n.c, scope, []).join('');
      out.push(h(tag, props));
      return;
    }
    if (tag === 'select' && props.value != null) {
      var sv = props.value;
      props.value = String(sv);
    }
    out.push(h.apply(null, [tag, props].concat(n.c ? renderChildren(n.c, scope, []) : [])));
  }

  function mount(Component, tree, container) {
    var comp = new Component({});
    var pending = false, mounted = false, prevState = comp.state;
    comp.setState = function (patch) {
      if (typeof patch === 'function') patch = patch(this.state);
      this.state = Object.assign({}, this.state, patch);
      schedule();
    };
    function draw() {
      pending = false;
      var vals = comp.renderVals();
      var kids = renderChildren(tree, [vals], []);
      preact.render(h(preact.Fragment, null, kids), container);
      var ps = prevState;
      prevState = comp.state;
      if (!mounted) { mounted = true; if (comp.componentDidMount) comp.componentDidMount(); }
      else if (comp.componentDidUpdate) { try { comp.componentDidUpdate(comp.props, ps); } catch (e) { console.error(e); } }
    }
    function schedule() { if (pending) return; pending = true; Promise.resolve().then(function () { try { draw(); } catch (e) { pending = false; console.error(e); } }); }
    comp.__forceRender = schedule;
    draw();
    return comp;
  }
  window.DCRuntime = { mount: mount };
})();
