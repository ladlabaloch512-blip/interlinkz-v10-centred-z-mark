/* Interlinkz Variant 10 animation layer.
   Desktop only. Content is fully visible without this file.
   Frame sequence: the centred IZ mark in the hero assembles piece by piece. */
(function () {
  if (!window.matchMedia("(min-width: 1024px)").matches) return;
  if (!window.gsap) return;
  gsap.registerPlugin(ScrollTrigger);

  /* D10 frame sequence: IZ mark assembly */
  document.querySelectorAll(".seq-iz").forEach(function (svg) {
    var tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(svg.querySelectorAll(".iz-i"), { y: -26, opacity: 0, duration: 0.55, stagger: 0.14 })
      .from(svg.querySelectorAll(".iz-zt"), { x: -30, opacity: 0, duration: 0.5 }, "-=0.2")
      .from(svg.querySelectorAll(".iz-zd"), { opacity: 0, scale: 0.6, transformOrigin: "50% 50%", duration: 0.5 }, "-=0.15")
      .from(svg.querySelectorAll(".iz-zb"), { x: 30, opacity: 0, duration: 0.5 }, "-=0.2");
  });

  /* Services Z ribbon: the ink centre line draws on scroll */
  document.querySelectorAll(".z-ribbon .rib-line").forEach(function (p) {
    var len = p.getTotalLength();
    gsap.fromTo(p, { strokeDasharray: len, strokeDashoffset: len },
      { strokeDashoffset: 0, duration: 1.5, ease: "power2.out",
        scrollTrigger: { trigger: p.closest(".cards-rel") || p, start: "top 78%" } });
  });

  /* Gentle rise for marked blocks */
  gsap.utils.toArray("[data-rise]").forEach(function (el) {
    gsap.from(el, { y: 30, opacity: 0, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 88%" } });
  });

  /* Joined groups light up in sequence */
  gsap.utils.toArray("[data-joins]").forEach(function (el) {
    gsap.from(el.children, { opacity: 0, y: 14, duration: 0.5, stagger: 0.12, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 86%" } });
  });

  /* Nodes pop in, then a soft travelling pulse */
  gsap.utils.toArray("[data-nodes]").forEach(function (g) {
    var nodes = g.querySelectorAll(".pnode");
    if (!nodes.length) return;
    gsap.from(nodes, { scale: 0, transformOrigin: "50% 50%", duration: 0.5, stagger: 0.1, ease: "back.out(2)",
      scrollTrigger: { trigger: g, start: "top 86%" } });
    gsap.to(nodes, { opacity: 0.35, duration: 0.55, stagger: { each: 0.4, repeat: -1, yoyo: true }, delay: 1.2 });
  });
})();
