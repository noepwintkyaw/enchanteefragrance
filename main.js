//perfume hovering effect//
const products = [
  { perfume: document.getElementById("scent-606-perfume"), background: document.getElementById("sea-image") },
  { perfume: document.querySelector(".tokyo-sakura-perfume"), background: document.getElementById("cherry-blossoms") },
  { perfume: document.querySelector(".lotus-aroma-perfume"), background: document.getElementById("lotus-flower1") },
  { perfume: document.querySelector(".violet-bliss-perfume"), background: document.getElementById("violet") }
];

// creating background styles and adding effects//
products.forEach(item => {
  item.background.style.opacity = 0; // invisible//
  item.background.style.transition = "opacity 0.7s ease-in-out"; // smooth fade//
  item.background.style.position = "absolute"; // overlay content//
  item.background.style.zIndex = 10; // stay on top//
  item.background.style.pointerEvents = "none"; // allowing hover through//

  item.perfume.addEventListener("mouseenter", () => { item.background.style.opacity = 1; });
  item.perfume.addEventListener("mouseleave", () => { item.background.style.opacity = 0; });
});

// make perfume cursor a pointer//
products.forEach(item => { item.perfume.style.cursor = "pointer"; });


//artisan box being toggled when clicked //
document.addEventListener("DOMContentLoaded", () => {
  const sets = [
    { circle: '.circle-plus1', line: '#line5', box: '.artisan-box-wrapper1' },
    { circle: '.circle-plus2', line: '#line5-1', box: '.artisan-box-wrapper2' },
    { circle: '.circle-plus3', line: '#line5-2', box: '.artisan-box-wrapper3' }
  ];

  sets.forEach(({ circle, line, box }) => {
    const circleEl = document.querySelector(circle);
    const lineEl = document.querySelector(line);
    const boxEl = document.querySelector(box);

    if (!circleEl || !lineEl || !boxEl) return; // skips if missing //

    circleEl.addEventListener('click', () => {
      const isActive = circleEl.classList.contains('active');

      if (isActive) {
        circleEl.classList.remove('active');
        lineEl.classList.remove('active');
        boxEl.classList.remove('active');
      } else {
        circleEl.classList.add('active');
        lineEl.classList.add('active');
        boxEl.classList.add('active');
      }
    });
  });
});


// GSAP scroll animations //
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("section").forEach(section => {
  gsap.fromTo(
    section,
    { opacity: 0 }, // start invisible//
    {
      opacity: 1, // fade in//
      duration: 2,
      scrollTrigger: {
        trigger: section,
        start: "top 80%", // trigger when section top hits 80% of viewport//
        toggleActions: "play reverse play reverse"
      }
    }
  );
});

// force page to scroll to top on refresh//
window.onbeforeunload = function () { window.scrollTo(0, 0); };


// audio controls toggling//
document.addEventListener("DOMContentLoaded", () => {
  const soundIcon = document.querySelector(".sound-icon"); // 🔊
  const muteIcon = document.querySelector(".sound-icon-muted"); // 🔇
  const audio = document.getElementById("artisanAudio");

  let isMuted = true; //start muted//
  audio.pause(); // ensure audio is paused//

  function toggleSound() {
    if (isMuted) {
      audio.play();
      muteIcon.style.display = "none";
      soundIcon.style.display = "block";
      isMuted = false;
    } else {
      audio.pause();
      soundIcon.style.display = "none";
      muteIcon.style.display = "block";
      isMuted = true;
    }
  }

  muteIcon.addEventListener("click", toggleSound);
  soundIcon.addEventListener("click", toggleSound);

  audio.loop = true; // loops audio//
});
