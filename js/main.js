// ========== NAVBAR MOBILE MENU ==========
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

if (hamburger && mobileMenu) {
  // OPEN / CLOSE MENU
  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("flex");

    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    hamburger.classList.toggle("active");

    // lock body scroll
    document.body.style.overflow = isOpen ? "" : "hidden";
  });

  // CLOSE WHEN CLICKING LINKS
  document.querySelectorAll("#mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  // CLOSE WHEN CLICKING BACKDROP
  mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) {
      closeMenu();
    }
  });
}

function closeMenu() {
  mobileMenu.classList.add("hidden");
  mobileMenu.classList.remove("flex");
  hamburger.classList.remove("active");
  document.body.style.overflow = "";
}


const heroTrialBtn = document.getElementById("heroTrialBtn");
const startTrialBtn = document.getElementById("startTrialBtn");
const signupModal = document.getElementById("signupModal");
const closeModal = document.getElementById("closeModal");

heroTrialBtn.addEventListener("click", () => signupModal.classList.remove("hidden"));
startTrialBtn.addEventListener("click", () => signupModal.classList.remove("hidden"));
closeModal.addEventListener("click", () => signupModal.classList.add("hidden"));

signupModal.addEventListener("click", (e) => {
    if (e.target === signupModal) signupModal.classList.add("hidden");
});


// ========== FORM SUBMIT ==========
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your trial request has been received.");
    signupModal.classList.add("hidden");
    signupForm.reset();
});


// ========== FAQ TOGGLE ==========
const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const answer = btn.nextElementSibling;

        answer.classList.toggle("hidden");
        btn.querySelector("span").textContent =
            answer.classList.contains("hidden") ? "+" : "−";
    });
});


// ========== COUNTERS ==========

const counters = document.querySelectorAll("[data-counter]");
let counterTriggered = false;

function runCounters() {
    if (counterTriggered) return;

    counters.forEach(counter => {
        const target = +counter.getAttribute("data-counter");
        let count = 0;
        const speed = 20;

        const updateCounter = () => {
            if (count < target) {
                count += Math.ceil(target / 100);
                counter.textContent = count;
                setTimeout(updateCounter, speed);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });

    counterTriggered = true;
}

window.addEventListener("scroll", () => {
    const statsSection = document.getElementById("stats");
    const position = statsSection.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {
        runCounters();
    }
});


// ========== AOS INIT ==========                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
AOS.init({
    duration: 1000,
    once: true,
});


// ========== PARTICLES ==========
tsParticles.load("tsparticles", {
    particles: {
        number: { value: 60 },
        size: { value: 2 },
        move: { speed: 1 },
        opacity: { value: 0.4 },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.2,
        }
    }
});

