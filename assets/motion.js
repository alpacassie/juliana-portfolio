// Gentle scroll reveals. Elements fade up as they enter the viewport;
// items in the same grid get a small stagger. Two safety nets make sure
// content can never stay hidden: anything on screen at load is revealed
// on a timer, and if the observer never reports back, everything shows.
(function () {
  var groups = [
    ['.intro h1, .intro p, .intro .actions', 110],
    ['.section > .wrap > h2', 0],
    ['.work-grid > .project', 80],
    ['.services > .service', 70],
    ['.about > *', 120],
    ['.contact', 0],
    ['.case-head h1, .case-head p, .case-head .meta', 80],
    ['.results', 0],
    ['.results-grid > .result-item', 90],
    ['main > .media', 0],
    ['.case-body', 0],
    ['.next', 0]
  ];

  var targets = [];
  groups.forEach(function (g) {
    var els = document.querySelectorAll(g[0]);
    els.forEach(function (el, i) {
      el.classList.add('reveal');
      // Stagger within a row of two cards, not down the whole list
      var step = g[0].indexOf('project') > -1 ? i % 2 : i;
      el.style.setProperty('--d', step * g[1] + 'ms');
      targets.push(el);
    });
  });

  function show(el) { el.classList.add('in'); }
  function showAll() { targets.forEach(show); }

  if (!('IntersectionObserver' in window)) { showAll(); return; }

  // Reveal what's already in view without waiting on the observer
  setTimeout(function () {
    targets.forEach(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) show(el);
    });
  }, 40);

  var heard = false;
  var io = new IntersectionObserver(function (entries) {
    heard = true;
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        show(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

  targets.forEach(function (el) { io.observe(el); });

  // If the observer never reports (rare embedded or paused contexts), show everything
  setTimeout(function () { if (!heard) showAll(); }, 1500);
})();
