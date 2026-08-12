
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio Initialized");

  // 1. Navigation & Scroll Effects
  const appBar = document.getElementById("appBar");
  const scrollHandler = () => {
    if (window.scrollY > 20) {
      appBar.classList.add("scrolled");
    } else {
      appBar.classList.remove("scrolled");
    }
  };
  window.addEventListener("scroll", scrollHandler);

  // 2. Smooth Scrolling for Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navHeight = appBar.offsetHeight;
        window.scrollTo({
          top: targetElement.offsetTop - navHeight,
          behavior: "smooth",
        });
      }
    });
  });

  // 3. Project Filtering Logic
  const filterChips = document.querySelectorAll(".filter-chip");
  const projectCards = document.querySelectorAll(".modern-card");
  const projectsTrack = document.getElementById("projectsTrack");

  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const filter = chip.getAttribute("data-filter");
      
      // Update UI
      filterChips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");

      // Filter Logic
      projectCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.style.display = "block";
          setTimeout(() => card.style.opacity = "1", 10);
        } else {
          card.style.opacity = "0";
          setTimeout(() => card.style.display = "none", 300);
        }
      });

      // Reset horizontal scroll
      if (projectsTrack) projectsTrack.scrollTo({ left: 0, behavior: "smooth" });
    });
  });

  // 4. Carousel Navigation (for Projects & Certifications)
  const initCarousel = (trackId, prevId, nextId) => {
    const track = document.getElementById(trackId);
    const prev = document.getElementById(prevId);
    const next = document.getElementById(nextId);

    if (track && prev && next) {
      const getScrollAmount = () => track.clientWidth * 0.8;
      
      prev.addEventListener("click", () => {
        track.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
      });
      
      next.addEventListener("click", () => {
        track.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
      });
    }
  };

  initCarousel("projectsTrack", "projectPrev", "projectNext");

  // 5. Intersection Observer for Reveal Animations
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll("section, .bento-item, .modern-card").forEach((el) => {
    revealObserver.observe(el);
  });

  // 6. Macbook-style Image Parallax
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const avatar = document.querySelector(".avatar");
    if (avatar) {
      avatar.style.transform = `translateY(${scrolled * 0.05}px)`;
    }
  });

  // 7. Mobile Menu
  const menuBtn = document.querySelector(".menu-btn");
  const navItems = document.querySelector(".nav-items");
  if (menuBtn && navItems) {
    menuBtn.addEventListener("click", () => {
      navItems.classList.toggle("nav-open");
      const icon = menuBtn.querySelector(".material-symbols-rounded");
      if (icon) {
        icon.textContent = navItems.classList.contains("nav-open") ? "close" : "menu";
      }
    });
  }
});

// Scroll to top utility
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
