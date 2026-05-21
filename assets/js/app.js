/* =====================================================
   QtrShoe Docs — application logic
   ===================================================== */
(function () {
  "use strict";

  /* ---------- language ---------- */
  var LANG = (function () {
    try { return localStorage.getItem("docLang") || "en"; } catch (e) { return "en"; }
  })();

  /* Swap on-page English text for translations from I18N (see i18n.js). */
  function translatePage(root) {
    if (LANG === "en" || typeof window.I18N === "undefined" || !window.I18N[LANG]) return;
    var dict = window.I18N[LANG];
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var nodes = [], n;
    while ((n = walker.nextNode())) nodes.push(n);
    nodes.forEach(function (node) {
      var raw = node.nodeValue, key = raw.trim();
      if (!key) return;
      var p = node.parentElement;
      if (!p || p.tagName === "SCRIPT" || p.tagName === "STYLE" || p.closest(".notranslate")) return;
      if (dict[key]) node.nodeValue = raw.replace(key, dict[key]);
    });
    Array.prototype.forEach.call(root.querySelectorAll("input[placeholder]"), function (inp) {
      var k = inp.getAttribute("placeholder");
      if (dict[k]) inp.setAttribute("placeholder", dict[k]);
    });
  }

  /* Look up one string (used where text is split before render). */
  function t(str) {
    if (LANG === "en" || typeof window.I18N === "undefined" || !window.I18N[LANG]) return str;
    return window.I18N[LANG][str] || str;
  }

  /* ---------- SVG icon library (Lucide-style) ---------- */
  var ICONS = {
    truck: '<path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
    headset: '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="2" y="14" width="5" height="7" rx="2"/><rect x="17" y="14" width="5" height="7" rx="2"/><path d="M19 19v.5a2.5 2.5 0 0 1-2.5 2.5H13"/>',
    store: '<path d="M3 9.5 4.8 4h14.4L21 9.5"/><path d="M5 9.6V20h14V9.6"/><path d="M3 9.5a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/><path d="M9.5 20v-5.5h5V20"/>',
    calculator: '<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="8" y2="10"/><line x1="12" y1="10" x2="12" y2="10"/><line x1="16" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="8" y2="14"/><line x1="12" y1="14" x2="12" y2="14"/><line x1="8" y1="18" x2="12" y2="18"/><line x1="16" y1="14" x2="16" y2="18"/>',
    login: '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/>',
    home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9 21v-6h6v6"/>',
    package: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.3 7 12 12 20.7 7"/><line x1="12" y1="22" x2="12" y2="12"/>',
    route: '<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/>',
    "x-circle": '<circle cx="12" cy="12" r="9"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>',
    ban: '<circle cx="12" cy="12" r="9"/><line x1="5.6" y1="5.6" x2="18.4" y2="18.4"/>',
    rotate: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
    repeat: '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
    lightbulb: '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.1 14c.8-1 2.4-2.5 2.7-3.6A6 6 0 1 0 6.2 10.4c.3 1.1 1.9 2.6 2.7 3.6Z"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    clipboard: '<rect x="8" y="3" width="8" height="4" rx="1"/><path d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><path d="M9 12h6"/><path d="M9 16h4"/>',
    activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    "user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>',
    map: '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z"/><line x1="9" y1="4" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="20"/>',
    git: '<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
    sliders: '<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',
    inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
    message: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"/>',
    check: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
    coins: '<circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/>',
    bank: '<line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/>',
    send: '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/>',
    card: '<rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>',
    alert: '<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12" y2="17"/>',
    search: '<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    "arrow-right": '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
    "arrow-left": '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
    "arrow-up": '<line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>',
    "chevron-down": '<polyline points="6 9 12 15 18 9"/>',
    menu: '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
    x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    info: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="8"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
    zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    compass: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>'
  };

  function icon(name, cls) {
    return '<svg class="' + (cls || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      (ICONS[name] || ICONS.book) + '</svg>';
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function countShots(role) {
    var n = 0;
    role.sections.forEach(function (s) {
      s.blocks.forEach(function (b) {
        if (b.t === "img") n += 1;
        else if (b.t === "gallery") n += b.x.length;
      });
    });
    return n;
  }

  /* ---------- block rendering ---------- */
  function renderListItem(item) {
    item = t(item);
    var i = item.indexOf(" — ");
    if (i > 0) {
      return "<li><b>" + esc(item.slice(0, i)) + "</b> — " + esc(item.slice(i + 3)) + "</li>";
    }
    return "<li>" + esc(item) + "</li>";
  }
  function imgEl(file, role, alt) {
    var dims = window.IMG_DIMS && window.IMG_DIMS[role.id];
    var d = dims && dims[file];
    var wh = d ? ' width="' + d[0] + '" height="' + d[1] + '"' : "";
    return '<img src="' + role.imgBase + file + '"' + wh +
      ' alt="' + esc(alt || "") + '" loading="lazy">';
  }
  function renderBlock(b, role) {
    switch (b.t) {
      case "text":
        return '<p class="doc-text">' + esc(b.x) + "</p>";
      case "sub":
        return '<h3 class="doc-sub">' + esc(b.x) + "</h3>";
      case "list":
        return '<ul class="doc-list">' + b.x.map(renderListItem).join("") + "</ul>";
      case "steps":
        return '<ol class="doc-steps">' + b.x.map(function (s) {
          return "<li>" + esc(s) + "</li>";
        }).join("") + "</ol>";
      case "note":
        var v = b.v || "info";
        var ic = v === "warn" ? "alert" : v === "tip" ? "lightbulb" : "info";
        return '<div class="doc-note note-' + v + '"><span class="note-ic">' + icon(ic) +
          "</span><div>" + esc(b.x) + "</div></div>";
      case "img":
        return '<figure class="doc-figure"><div class="figure-frame">' +
          imgEl(b.x, role, b.c) + "</div>" +
          (b.c ? '<figcaption class="figure-cap">' + esc(b.c) + "</figcaption>" : "") +
          "</figure>";
      case "gallery":
        return '<figure class="doc-figure"><div class="doc-gallery">' +
          b.x.map(function (s) { return imgEl(s, role, b.c); }).join("") +
          "</div>" +
          (b.c ? '<figcaption class="figure-cap">' + esc(b.c) + "</figcaption>" : "") +
          "</figure>";
    }
    return "";
  }

  /* ---------- search ---------- */
  function buildIndex() {
    var idx = [];
    DOCS.roles.forEach(function (r) {
      idx.push({ role: r, anchor: null, title: r.name + " Guide",
                 context: "Complete role guide", icon: r.icon });
      r.sections.forEach(function (s) {
        idx.push({ role: r, anchor: s.id, title: s.title,
                   context: r.name + " guide", icon: s.icon });
        var n = 0;
        s.blocks.forEach(function (b) {
          if (b.t === "sub") {
            n += 1;
            idx.push({ role: r, anchor: s.id + "-s" + n, title: b.x,
                       context: "in " + s.title, icon: s.icon });
          }
        });
      });
    });
    return idx;
  }
  function targetUrl(hit) {
    var u = "guide.html?role=" + hit.role.id;
    if (hit.anchor) u += "#" + hit.anchor;
    return u;
  }

  function editDistance(a , b){
    var m=a.length, n=b.length, i, j;
    if(!m) return n;
    if(!n) return m;
    var perv=[] , cur=[];
    for(i=0; i<=n; i++) perv[i]=i;
    for (i=1 ; i<=m ; i++){
      cur[0]=i
      for(j=1; j<=n; j++){
        var cost=a[i-1]===b[j-1] ? 0 : 1;
        cur[j]=Math.min(prev[j]+1, 
                        cur[j-1]+1,
                        perv[j-1]+cost);
      }
       for (j = 0; j <= n; j++) prev[j] = curr[j];
    }
  return prev[n];
  }


  function fuzzyScore(q, text) {
  text = text.toLowerCase();
  var best = editDistance(q, text.slice(0, q.length));
  text.split(/\s+/).forEach(function (w) {
    best = Math.min(best, editDistance(q, w));                  // "paymnet" ~ "payment"
    best = Math.min(best, editDistance(q, w.slice(0, q.length)));// "inita"  ~ "intro"duction
  });
  return best;
}

  function attachSearch(input, results, currentRole) {
    if (!input || !results) return;
    var index = buildIndex();
    var hits = [];
    var sel = -1;

    function hide() { results.classList.remove("show"); sel = -1; }

    function go(hit) {
      if (currentRole && hit.role.id === currentRole.id && hit.anchor) {
        var el = document.getElementById(hit.anchor);
        if (el) {
          var html = document.documentElement;
          var prev = html.style.scrollBehavior;
          html.style.scrollBehavior = "auto";
          window.scrollTo(0, Math.max(0, el.getBoundingClientRect().top + window.scrollY - 86));
          html.style.scrollBehavior = prev;
        }
        if (history.replaceState) history.replaceState(null, "", "#" + hit.anchor);
        hide(); input.value = ""; input.blur();
      } else {
        location.href = targetUrl(hit);
      }
    }

    function highlight(text, q) {
      var i = text.toLowerCase().indexOf(q);
      if (i < 0) return esc(text);
      return esc(text.slice(0, i)) + "<mark>" + esc(text.slice(i, i + q.length)) +
        "</mark>" + esc(text.slice(i + q.length));
    }

    function setSel(n) {
      var items = results.querySelectorAll(".sr-item");
      if (!items.length) return;
      sel = (n + items.length) % items.length;
      Array.prototype.forEach.call(items, function (el, i) {
        el.classList.toggle("active", i === sel);
      });
      items[sel].scrollIntoView({ block: "nearest" });
    }



    function draw(q) {
      q = q.trim();
      if (!q) { hide(); return; }
      var ql = q.toLowerCase();
      hits = index.filter(function (h) {
        return h.title.toLowerCase().indexOf(ql) > -1 ||
          h.role.name.toLowerCase().indexOf(ql) > -1;
      }).slice(0, 9);

      /* nothing matched exactly — suggest the closest sections */
      if (!hits.length) {
        var limit = Math.ceil(ql.length / 2);   
        hits = index
          .map(function (h) {
            return { hit: h, d: Math.min(fuzzyScore(ql, h.title),
                                         fuzzyScore(ql, h.role.name)) };
          })
          .filter(function (x) { return x.d <= limit; })
          .sort(function (a, b) { return a.d - b.d; })  // closest first
          .slice(0, 6)
          .map(function (x) { return x.hit; });
      }

      sel = -1;
      if (!hits.length) {
        results.innerHTML = '<div class="sr-empty">' + icon("search") +
          "<span>No matches for <b>" + esc(q) + "</b></span>" +
          "<small>Try a section name like &ldquo;payment&rdquo; or &ldquo;returns&rdquo;.</small></div>";
      } else {
        var rows = hits.map(function (h, i) {
          return '<a class="sr-item" data-i="' + i + '" href="' + targetUrl(h) + '">' +
            '<span class="sr-ic">' + icon(h.icon) + "</span>" +
            '<span class="sr-text">' +
            '<span class="sr-title">' +
            (LANG === "ml" ? esc(h.title) : highlight(h.title, ql)) + "</span>" +
            '<span class="sr-meta">' + esc(h.context) + "</span></span>" +
            '<span class="sr-badge">' + esc(h.role.name) + "</span>" +
            '<span class="sr-go">' + icon("arrow-right") + "</span></a>";
        }).join("");
        results.innerHTML =
          '<div class="sr-head">' + hits.length + " result" + (hits.length > 1 ? "s" : "") +
          "</div><div class=\"sr-list\">" + rows + "</div>" +
          '<div class="sr-foot">' +
          "<span><kbd>&uarr;</kbd><kbd>&darr;</kbd> Navigate</span>" +
          "<span><kbd>&crarr;</kbd> Open</span>" +
          "<span><kbd>Esc</kbd> Close</span></div>";
        Array.prototype.forEach.call(results.querySelectorAll(".sr-item"), function (el) {
          var i = +el.getAttribute("data-i");
          el.addEventListener("click", function (e) { e.preventDefault(); go(hits[i]); });
          el.addEventListener("mousemove", function () { if (i !== sel) setSel(i); });
        });
        setSel(0);
      }
      translatePage(results);
      results.classList.add("show");
    }

    input.addEventListener("input", function () { draw(input.value); });
    input.addEventListener("focus", function () { if (input.value.trim()) draw(input.value); });
    input.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown") { e.preventDefault(); setSel(sel + 1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); setSel(sel - 1); }
      else if (e.key === "Enter") {
        if (hits.length) { e.preventDefault(); go(hits[sel >= 0 ? sel : 0]); }
      } else if (e.key === "Escape") { hide(); input.blur(); }
    });
    document.addEventListener("click", function (e) {
      if (!results.contains(e.target) && e.target !== input) hide();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "/" && document.activeElement !== input) {
        var tag = (document.activeElement && document.activeElement.tagName) || "";
        if (tag !== "INPUT" && tag !== "TEXTAREA") { e.preventDefault(); input.focus(); }
      }
    });
  }

  /* ---------- lightbox ---------- */
  function initLightbox() {
    var lb = document.getElementById("lightbox");
    if (!lb) return;
    var img = lb.querySelector("img");
    document.addEventListener("click", function (e) {
      var t = e.target;
      if (t.tagName === "IMG" && t.closest(".doc-figure")) {
        img.src = t.src;
        lb.classList.add("show");
        document.body.style.overflow = "hidden";
      }
    });
    function close() {
      lb.classList.remove("show");
      document.body.style.overflow = "";
    }
    lb.addEventListener("click", close);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  /* ---------- reveal on scroll ---------- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || !els.length) {
      Array.prototype.forEach.call(els, function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0, rootMargin: "0px 0px -10% 0px" });
    Array.prototype.forEach.call(els, function (el, i) {
      el.style.transitionDelay = (Math.min(i, 6) * 60) + "ms";
      io.observe(el);
    });
  }

  /* ===================================================
     LANDING PAGE
     =================================================== */
  function initLanding() {
    var grid = document.getElementById("roleGrid");
    if (!grid) return false;

    grid.innerHTML = DOCS.roles.map(function (r) {
      return '<a class="role-card reveal" href="guide.html?role=' + r.id + '">' +
        '<div class="role-card-top"><span class="role-icon">' + icon(r.icon) + "</span>" +
        "<div><h3>" + esc(r.name) + '</h3><div class="role-sub">User Guide</div></div></div>' +
        "<p>" + esc(r.tagline) + "</p>" +
        '<div class="role-meta"><span>' + r.sections.length + " sections</span>" +
        '<span class="role-cta">Open ' + icon("arrow-right") + "</span></div></a>";
    }).join("");

    var fr = document.getElementById("footerRoles");
    if (fr) {
      fr.innerHTML = DOCS.roles.map(function (r) {
        return '<a href="guide.html?role=' + r.id + '">' + esc(r.name) + "</a>";
      }).join("");
    }

    attachSearch(document.getElementById("heroSearch"),
      document.getElementById("heroResults"), null);

    initReveal();
    translatePage(document.body);
    return true;
  }

  /* ===================================================
     GUIDE PAGE
     =================================================== */
  function initGuide() {
    var content = document.getElementById("content");
    if (!content) return false;

    if ("scrollRestoration" in history) history.scrollRestoration = "manual";

    var params = new URLSearchParams(location.search);
    var role = DOCS.roles.filter(function (r) { return r.id === params.get("role"); })[0]
      || DOCS.roles[0];

    document.title = role.name + " Guide — QtrShoe Docs";

    /* ---- sidebar ---- */
    var sidebar = document.getElementById("sidebar");
    var nav = role.sections.map(function (s, i) {
      return '<li><a href="#' + s.id + '" data-sec="' + s.id + '">' +
        '<span class="nav-ic">' + icon(s.icon) + "</span>" +
        "<span>" + esc(s.title) + "</span>" +
        '<span class="nav-num">' + (i + 1) + "</span></a></li>";
    }).join("");

    var switcher = DOCS.roles.map(function (r) {
      return '<a href="guide.html?role=' + r.id + '" class="' +
        (r.id === role.id ? "current" : "") + '">' + icon(r.icon) +
        "<span>" + esc(r.name) + "</span></a>";
    }).join("");

    sidebar.innerHTML =
      '<div class="sidebar-role"><span class="sr-icon">' + icon(role.icon) + "</span>" +
      '<div><div class="sr-name">' + esc(role.name) + '</div>' +
      '<div class="sr-tag">QtrShoe Delivery App</div></div></div>' +
      '<div class="role-switch" id="roleSwitch">' +
      '<button class="role-switch-btn" id="roleSwitchBtn">' +
      "<span>Switch role</span>" + icon("chevron-down") + "</button>" +
      '<div class="role-switch-menu">' + switcher + "</div></div>" +
      '<div class="sidebar-label">On this page</div>' +
      '<ul class="nav-list" id="navList">' + nav + "</ul>";

    /* ---- content ---- */
    var sectionsHtml = role.sections.map(function (s) {
      var subN = 0;
      var body = s.blocks.map(function (b) {
        if (b.t === "sub") {
          subN += 1;
          return '<h3 class="doc-sub" id="' + s.id + "-s" + subN + '">' + esc(b.x) + "</h3>";
        }
        return renderBlock(b, role);
      }).join("");
      return '<section class="doc-section reveal" id="' + s.id + '">' +
        '<h2><span class="h2-ic">' + icon(s.icon) + "</span>" + esc(s.title) + "</h2>" +
        body + "</section>";
    }).join("");

    var ri = DOCS.roles.indexOf(role);
    var nextRole = DOCS.roles[(ri + 1) % DOCS.roles.length];
    var prevRole = DOCS.roles[(ri - 1 + DOCS.roles.length) % DOCS.roles.length];

    content.innerHTML =
      '<nav class="crumbs"><a href="index.html">All Roles</a>' + icon("chevron-down", "") +
      '<span class="here">' + esc(role.name) + "</span></nav>" +
      '<header class="doc-hero">' +
      '<div class="eyebrow">QtrShoe Delivery App</div>' +
      "<h1>" + esc(role.name) + " User Guide</h1>" +  
      '<p class="lead">' + esc(role.intro) + "</p>" +
      '<div class="doc-meta">' +
      '<span class="chip">' + icon("layers") + role.sections.length + " sections</span>" +
      '<span class="chip">' + icon("calendar") + "Updated " + esc(DOCS.updated) + "</span>" +
      "</div></header>" +
      sectionsHtml +
      '<div class="doc-pager">' +
      '<a class="pager-link" href="guide.html?role=' + prevRole.id + '">' +
      '<span class="pager-dir">Previous role</span>' +
      '<span class="pager-title">' + icon("arrow-left") + esc(prevRole.name) + "</span></a>" +
      '<a class="pager-link next" href="guide.html?role=' + nextRole.id + '">' +
      '<span class="pager-dir">Next role</span>' +
      '<span class="pager-title">' + esc(nextRole.name) + icon("arrow-right") + "</span></a>" +
      "</div>" +
      '<div class="guide-foot">' +
      "<span>QtrShoe Delivery App &middot; " + esc(role.name) + " documentation</span>" +
      '<a href="index.html">' + icon("grid") + "Back to all roles</a></div>";

    /* crumb separator should be a chevron-right look */
    var crumbSep = content.querySelector(".crumbs svg");
    if (crumbSep) crumbSep.style.transform = "rotate(-90deg)";

    translatePage(document.body);

    /* ---- behaviour ---- */
    initRoleSwitch();
    initScrollSpy(role);
    initMobileMenu();
    initLightbox();
    initToTop();
    attachSearch(document.getElementById("headerSearch"),
      document.getElementById("headerResults"), role);
    initHeaderSearchToggle();
    initReveal();

    /* scroll handling — jump to the hash, or pin to the top.
       A safety re-scroll runs on load, unless the user has already moved. */
    var touched = false;
    ["wheel", "touchmove", "keydown"].forEach(function (ev) {
      window.addEventListener(ev, function () { touched = true; }, { passive: true, once: true });
    });
    if (location.hash) {
      var hid = location.hash.slice(1);
      var jump = function () {
        var t = document.getElementById(hid);
        if (!t) return;
        var html = document.documentElement;
        var prev = html.style.scrollBehavior;
        html.style.scrollBehavior = "auto";
        var y = t.getBoundingClientRect().top + window.scrollY - 86;
        window.scrollTo(0, Math.max(0, y));
        html.style.scrollBehavior = prev;
      };
      requestAnimationFrame(function () {
        jump();
        setActiveNav(hid.replace(/-s\d+$/, ""));
      });
      window.addEventListener("load", function () { if (!touched) jump(); });
    } else {
      window.scrollTo(0, 0);
      window.addEventListener("load", function () { if (!touched) window.scrollTo(0, 0); });
    }
    return true;
  }

  function initRoleSwitch() {
    var sw = document.getElementById("roleSwitch");
    var btn = document.getElementById("roleSwitchBtn");
    if (!sw || !btn) return;
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      sw.classList.toggle("open");
    });
    document.addEventListener("click", function (e) {
      if (!sw.contains(e.target)) sw.classList.remove("open");
    });
  }

  function setActiveNav(id) {
    var links = document.querySelectorAll("#navList a");
    Array.prototype.forEach.call(links, function (a) {
      var on = a.getAttribute("data-sec") === id;
      a.classList.toggle("active", on);
      if (on && a.scrollIntoView) {
        var box = a.getBoundingClientRect();
        var side = document.getElementById("sidebar").getBoundingClientRect();
        if (box.bottom > side.bottom || box.top < side.top) {
          a.scrollIntoView({ block: "nearest" });
        }
      }
    });
  }

  function initScrollSpy(role) {
    var ids = role.sections.map(function (s) { return s.id; });
    var sections = ids.map(function (id) { return document.getElementById(id); });
    var current = "";

    function update() {
      var line = 150; /* px from top of viewport */
      var found = ids[0];
      for (var i = 0; i < sections.length; i++) {
        if (sections[i] && sections[i].getBoundingClientRect().top <= line) {
          found = ids[i];
        }
      }
      /* near the very bottom -> last section */
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
        found = ids[ids.length - 1];
      }
      if (found !== current) { current = found; setActiveNav(found); }
    }
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(function () { update(); ticking = false; });
        ticking = true;
      }
    }, { passive: true });
    window.addEventListener("hashchange", function () {
      if (location.hash) setActiveNav(location.hash.slice(1).replace(/-s\d+$/, ""));
    });
    /* click closes mobile menu */
    Array.prototype.forEach.call(document.querySelectorAll("#navList a"), function (a) {
      a.addEventListener("click", function () {
        closeMobile();
        setActiveNav(a.getAttribute("data-sec"));
      });
    });
    update();
  }

  function closeMobile() {
    var sb = document.getElementById("sidebar");
    var ov = document.getElementById("overlay");
    if (sb) sb.classList.remove("open");
    if (ov) ov.classList.remove("show");
  }
  function initMobileMenu() {
    var toggle = document.getElementById("menuToggle");
    var sb = document.getElementById("sidebar");
    var ov = document.getElementById("overlay");
    if (!toggle || !sb) return;
    toggle.addEventListener("click", function () {
      var open = sb.classList.toggle("open");
      if (ov) ov.classList.toggle("show", open);
    });
    if (ov) ov.addEventListener("click", closeMobile);
  }

  function initToTop() {
    var btn = document.getElementById("toTop");
    if (!btn) return;
    window.addEventListener("scroll", function () {
      btn.classList.toggle("show", window.scrollY > 600);
    }, { passive: true });
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- mobile header search (collapsed → expand on tap) ---------- */
  function initHeaderSearchToggle() {
    var wrap = document.querySelector(".header-search");
    if (!wrap) return;
    var input = wrap.querySelector("input");
    wrap.addEventListener("click", function () {
      if (!wrap.classList.contains("search-open")) {
        wrap.classList.add("search-open");
        input.focus();
      }
    });
    document.addEventListener("click", function (e) {
      if (!wrap.contains(e.target)) wrap.classList.remove("search-open");
    });
    input.addEventListener("keydown", function (e) {
      if (e.key === "Escape") wrap.classList.remove("search-open");
    });
  }

  /* ---------- language switch ---------- */
  function setLang(lang) {
    try { localStorage.setItem("docLang", lang); } catch (e) {}
    location.reload();
  }
  function initLangSwitch() {
    var sw = document.getElementById("langSwitch");
    if (!sw) return;
    var btn = document.getElementById("langBtn");
    var label = document.getElementById("langCurrent");

    if (label) label.textContent = LANG === "ml" ? "ML" : "EN";
    var active = sw.querySelector('[data-lang="' + LANG + '"]');
    if (active) active.classList.add("active");

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = sw.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", function (e) {
      if (!sw.contains(e.target)) {
        sw.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
    Array.prototype.forEach.call(sw.querySelectorAll("[data-lang]"), function (el) {
      el.addEventListener("click", function () {
        if (el.getAttribute("data-lang") !== LANG) setLang(el.getAttribute("data-lang"));
        else sw.classList.remove("open");
      });
    });
  }

  /* ---------- boot ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    initLangSwitch();
    if (typeof window.DOCS === "undefined") {
      console.error("DOCS data not loaded.");
      return;
    }
    if (!initGuide()) initLanding();
  });
})();
