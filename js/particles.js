tsParticles.load("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    color: { value: "#ffffff" },
    move: { enable: true, speed: 1.5, direction: "none", random: false, straight: false },
    opacity: { value: 0.7 },
    links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.3, width: 1 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    }
  },
  retina_detect: true
});
