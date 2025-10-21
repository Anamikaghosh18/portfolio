// main.js

// ------------------- TYPEWRITER EFFECT -------------------
const typewriterTexts = [
  "Aspiring AI Engineer",
  "Machine Learning Enthusiast",
  "Full Stack Developer",
  "AI & ML Explorer",
];
let typeIndex = 0;
let charIndex = 0;
const typeElement = document.getElementById("typewriter");

function typeWriter() {
  if (!typeElement) return;
  if (charIndex < typewriterTexts[typeIndex].length) {
    typeElement.textContent += typewriterTexts[typeIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100);
  } else {
    setTimeout(eraseWriter, 1500);
  }
}

function eraseWriter() {
  if (!typeElement) return;
  if (charIndex > 0) {
    typeElement.textContent = typewriterTexts[typeIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(eraseWriter, 50);
  } else {
    typeIndex = (typeIndex + 1) % typewriterTexts.length;
    setTimeout(typeWriter, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeWriter();
});

// ------------------- SEE MORE PROJECTS -------------------
const viewMoreBtn = document.getElementById("view-more-projects");
const moreProjectsContainer = document.getElementById("more-projects");

const moreProjects = [
  {
    img: "/images/project2.jpg",
    title: "Project Two",
    demo: "#",
    desc: "Description of project two.",
    tech: "Python, Flask",
  },
  {
    img: "/images/project3.jpg",
    title: "Project Three",
    demo: "#",
    desc: "Description of project three.",
    tech: "React, Node.js",
  },
];

viewMoreBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  if (moreProjectsContainer.style.display === "none") {
    moreProjectsContainer.style.display = "block";
    moreProjects.forEach((proj) => {
      const div = document.createElement("div");
      div.classList.add("project-item", "flex", "gap-4", "items-start");
      div.innerHTML = `
        <div class="project-image">
          <img src="${proj.img}" alt="${proj.title}" />
        </div>
        <div class="project-content">
          <h3 class="flex items-center gap-2">
            <span class="font-medium text-gray-800">${proj.title}</span>
            <span class="text-gray-400">|</span>
            <a href="${proj.demo}" target="_blank" class="text-blue-500 hover:text-blue-700 inline-flex items-center gap-1" style="text-decoration: none; font-size: 14px">
              demo <span style="font-size: 14px">→</span>
            </a>
          </h3>
          <p class="mt-2 text-gray-700">${proj.desc}</p>
          <p class="tech-tags text-gray-500">${proj.tech}</p>
        </div>
      `;
      moreProjectsContainer.appendChild(div);
    });
    viewMoreBtn.textContent = "See Less Projects →";
  } else {
    moreProjectsContainer.style.display = "none";
    moreProjectsContainer.innerHTML = "";
    viewMoreBtn.textContent = "See More Projects →";
  }
});

// ------------------- RESPONSIVE NAVBAR TOGGLE -------------------
const navLinks = document.querySelector(".nav-links");

function createHamburger() {
  const nav = document.querySelector("nav");
  const burger = document.createElement("div");
  burger.classList.add("hamburger");
  burger.innerHTML = `<div style="width:25px;height:3px;background:#000;margin:5px 0;"></div>
  <div style="width:25px;height:3px;background:#000;margin:5px 0;"></div>
  <div style="width:25px;height:3px;background:#000;margin:5px 0;"></div>`;
  burger.style.cursor = "pointer";
  nav.appendChild(burger);

  burger.addEventListener("click", () => {
    if (navLinks.style.display === "flex") {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "flex";
      navLinks.style.flexDirection = "column";
      navLinks.style.background = "rgba(255,255,255,0.95)";
      navLinks.style.position = "absolute";
      navLinks.style.top = "60px";
      navLinks.style.right = "20px";
      navLinks.style.padding = "20px";
      navLinks.style.borderRadius = "12px";
      navLinks.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)";
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navLinks.style.display = "flex";
      navLinks.style.flexDirection = "row";
      navLinks.style.position = "static";
      navLinks.style.background = "transparent";
      navLinks.style.padding = "0";
      navLinks.style.boxShadow = "none";
    }
  });
}

if (window.innerWidth <= 768) {
  createHamburger();
}
