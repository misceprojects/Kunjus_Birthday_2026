// Locks a day page until its unlock time (India time). Add ?preview=1 to bypass.
(function () {
  var s = document.currentScript, at = new Date(s.dataset.unlock).getTime(), label = s.dataset.label;
  if (/[?&]preview=1/.test(location.search) || Date.now() >= at) return;
  var css = '#gd{position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:14px;text-align:center;padding:24px;background:radial-gradient(ellipse at 50% 0,#3b2a7a,#0d0a1f 70%);color:#fff;font:600 18px/1.4 system-ui,sans-serif}#gd b{font-size:64px}#gd h1{font:800 34px/1.1 system-ui,sans-serif;color:#ffd66b}#gd a{color:#0d0a1f;background:#ffd66b;border-radius:40px;padding:12px 22px;text-decoration:none;font-weight:700}#gd .t{font:700 28px/1 ui-monospace,monospace;color:#ff6fa3}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  function show() {
    if (document.getElementById('gd')) return;
    var d = document.createElement('div'); d.id = 'gd';
    d.innerHTML = '<b>🔒</b><h1>Not yet, Kunjus!</h1><div>This delivery opens on ' + label + '.</div><div class="t" id="gdt"></div><a href="../index.html">← All deliveries</a>';
    document.body.appendChild(d);
    function tick() {
      var l = at - Date.now(); if (l <= 0) { location.reload(); return; }
      var x = Math.floor(l / 1000), h = Math.floor(x / 3600), m = Math.floor(x % 3600 / 60), sec = x % 60;
      document.getElementById('gdt').textContent = String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0') + ':' + String(sec).padStart(2, '0');
    }
    tick(); setInterval(tick, 1000);
  }
  if (document.body) show(); else document.addEventListener('DOMContentLoaded', show);
})();
