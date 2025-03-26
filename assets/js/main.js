gsap.registerPlugin(ScrollTrigger);
let lenis;
//
const SCROLL_TRIGGER_START = "top bottom";
const SCROLL_TRIGGER_END = "bottom top";

//
const initLenis = () => {
  const lenis = new Lenis({
    duration: 2, // Durée de l'animation de défilement
    smoothWheel: true, // Lissage du défilement de la molette
    wheelMultiplier: 2, // Multiplicateur de vitesse de défilement
  });

  // Synchroniser Lenis avec ScrollTrigger
  lenis.on("scroll", ScrollTrigger.update);

  // Synchroniser GSAP avec Lenis
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  // Désactiver le lissage par défaut de GSAP
  gsap.ticker.lagSmoothing(0);

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};

//
const animeL = () => {
  const projectItems = document.querySelectorAll(".project_item");
  projectItems.forEach((item, index) => {
    gsap.from(item, {
      opacity: 0,
      y: 50,
      clipPath: `inset(100% round 4px)`,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: item,
        start: "top 80%", // Démarre quand l'élément est à 80% de la vue
        end: "top 60%",
        toggleActions: "play none none reverse",
        // markers: true, // Décommentez pour le débogage
      },
    });
  });
};

// PARALLAXE
const parallaxe = () => {
  // Sélectionne tous les éléments avec la classe "parallax-image"
  const parallaxImages = document.querySelectorAll(".parallax-image");
  parallaxImages.forEach((image) => {
    gsap.fromTo(
      image,
      { yPercent: -30 },
      {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: image.closest(".pParent"),
          start: SCROLL_TRIGGER_START,
          end: SCROLL_TRIGGER_END,
          scrub: true,
        },
      }
    );
  });
};

window.addEventListener("DOMContentLoaded", () => {
  initLenis();
  animeL();
  ScrollTrigger.refresh();
  parallaxe();
});
