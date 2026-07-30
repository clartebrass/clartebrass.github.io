const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Quiet reveal-on-scroll for content blocks and individual work photos
const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el) => observer.observe(el));

// Very subtle parallax on the large photography moments only.
// Skipped entirely when the visitor prefers reduced motion.
if (!prefersReducedMotion) {
  const parallaxEls = document.querySelectorAll(".hero-photo, .photo-break img");
  let ticking = false;

  const updateParallax = () => {
    const viewportHeight = window.innerHeight;

    parallaxEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > viewportHeight) return;

      const centerOffset = rect.top + rect.height / 2 - viewportHeight / 2;
      const shift = Math.max(-24, Math.min(24, centerOffset * -0.04));
      el.style.transform = `scale(1.08) translateY(${shift}px)`;
    });

    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    },
    { passive: true }
  );

  updateParallax();
}
