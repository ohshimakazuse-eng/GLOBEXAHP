/* =========================================================
   Globexa Inc. — Interactions
   ========================================================= */
(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Loader ---------- */
  const loader = document.getElementById("loader");
  const hero = document.getElementById("hero");
  const countEl = document.getElementById("loaderCount");
  const barEl = document.getElementById("loaderBar");

  function startHero() {
    if (hero) hero.classList.add("ready");
    revealInView(); // trigger anything already on screen
  }

  function finishLoad() {
    if (reduceMotion) {
      if (loader) loader.classList.add("done");
      startHero();
      return;
    }
    let n = 0;
    const tick = setInterval(() => {
      n += Math.max(1, Math.round((100 - n) * 0.14));
      if (n >= 100) { n = 100; clearInterval(tick); }
      if (countEl) countEl.textContent = n;
      if (barEl) barEl.style.width = n + "%";
      if (n === 100) {
        setTimeout(() => {
          loader.classList.add("done");
          startHero();
        }, 350);
      }
    }, 90);
  }

  window.addEventListener("load", finishLoad);
  // safety: if load already fired
  if (document.readyState === "complete") finishLoad();

  /* ---------- Year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Nav scroll state ---------- */
  const nav = document.getElementById("nav");
  const toTop = document.getElementById("toTop");
  let lastY = 0;

  function onScroll() {
    const y = window.scrollY;
    if (nav) nav.classList.toggle("scrolled", y > 40);
    if (toTop) toTop.classList.toggle("show", y > window.innerHeight);

    // nav color over dark sections (mobile where mix-blend off)
    updateNavDark(y);
    lastY = y;
  }

  const darkSections = Array.from(document.querySelectorAll(".services, .company, .footer"));
  function updateNavDark(y) {
    if (!nav) return;
    const navMid = y + 40;
    const onDark = darkSections.some((s) => {
      const top = s.offsetTop;
      return navMid >= top && navMid < top + s.offsetHeight;
    });
    nav.classList.toggle("on-dark", onDark);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- To top ---------- */
  if (toTop) toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));

  /* ---------- Mobile menu ---------- */
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");

  function toggleMenu(force) {
    const open = force !== undefined ? force : !menu.classList.contains("open");
    menu.classList.toggle("open", open);
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-hidden", String(!open));
    document.body.classList.toggle("is-locked", open);
  }
  if (burger) burger.addEventListener("click", () => toggleMenu());
  document.querySelectorAll("[data-menu-link]").forEach((a) =>
    a.addEventListener("click", () => toggleMenu(false))
  );

  /* ---------- Smooth anchor (all internal links) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      history.replaceState(null, "", id);
    });
  });

  /* ---------- Services accordion ---------- */
  document.querySelectorAll("[data-svc]").forEach((item) => {
    const row = item.querySelector(".svc__row");
    row.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      // close siblings for a clean, editorial feel
      document.querySelectorAll("[data-svc].open").forEach((o) => {
        if (o !== item) { o.classList.remove("open"); o.querySelector(".svc__row").setAttribute("aria-expanded", "false"); }
      });
      item.classList.toggle("open", !isOpen);
      row.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  /* ---------- Reveal on scroll ---------- */
  const revealTargets = Array.from(document.querySelectorAll(".reveal, .reveal-line"));

  let io;
  if ("IntersectionObserver" in window && !reduceMotion) {
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    revealTargets.forEach((t) => io.observe(t));
  } else {
    revealTargets.forEach((t) => t.classList.add("in"));
  }

  function revealInView() {
    // ensure above-the-fold elements show even before scroll
    revealTargets.forEach((t) => {
      const r = t.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92) {
        t.classList.add("in");
        if (io) io.unobserve(t);
      }
    });
  }

  /* ---------- Count up ---------- */
  const counters = Array.from(document.querySelectorAll("[data-count]"));
  if ("IntersectionObserver" in window && !reduceMotion) {
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const el = en.target;
          const target = parseInt(el.getAttribute("data-count"), 10);
          let cur = 0;
          const step = Math.max(1, Math.round(target / 36));
          const t = setInterval(() => {
            cur += step;
            if (cur >= target) { cur = target; clearInterval(t); }
            el.textContent = cur;
          }, 28);
          cio.unobserve(el);
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((c) => cio.observe(c));
  }

  /* ---------- Marquee duplicate guard (keeps loop seamless) ---------- */
  // markup already duplicated; nothing to do.

})();
