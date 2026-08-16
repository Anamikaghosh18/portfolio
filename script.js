document.addEventListener("DOMContentLoaded", () => {
  // ─── PREVENT AUTO-SCROLL TO #CONTACT ──────────────────────
  if (window.location.hash === "#contact") {
    history.replaceState(null, null, window.location.pathname);
    window.scrollTo(0, 0);
  }

  // ─── DATA ────────────────────────────────────────────────
  const data = {
    hero: {
      points: [
        "i build things with <strong>backend, ai/ml, and a bit of everything</strong> — turning interesting ideas into working code.",
        "i love <strong>tinkering with code</strong> — breaking things, exploring random ideas, and sometimes building something useful.",
        "right now, i'm learning more about <strong>ai agents, rag, and distributed systems</strong> — how intelligent systems work, and what's next to learn.",
      ],
    },
    skills: [
      "Python",
      "Java",
      "FastAPI",
      "PyTorch",
      "scikit-learn",
      "LangChain",
      "PostgreSQL",
      "MongoDB",
      "Docker",
    ],
    projects: [
      {
        title: "Analytica",
        cat: "web",
        tag: "Live",
        tagType: "live",
        desc: "intelligence-driven api monitoring with anomaly detection & llm insights. catches issues before they break things.",
        stack: "FastAPI · LangChain",
        links: [
          {
            text: "Source →",
            url: "https://github.com/Anamikaghosh18/analytica",
          },
          { text: "Demo →", url: "https://analytica-gules.vercel.app/" },
        ],
        img: "analytica.png",
      },
      {
        title: "Fraud Detection",
        cat: "ml",
        tag: "In progress",
        tagType: "wip",
        desc: "graph neural network system to detect fraudulent financial transactions. exploring how relationships reveal hidden patterns.",
        stack: "PyTorch · MLflow",
        links: [
          {
            text: "Source →",
            url: "https://github.com/Anamikaghosh18/GNN-based-Fraud-Detection-System",
          },
        ],
        img: "GNN.png",
      },
      {
        title: "AirSense AI",
        cat: "ml",
        tag: "Live",
        tagType: "live",
        desc: "analyzes global air quality trends using ai models with interactive visualizations. making climate data accessible.",
        stack: "scikit-learn · FastAPI",
        links: [
          {
            text: "Source →",
            url: "https://github.com/Anamikaghosh18/AirSense",
          },
          {
            text: "Demo →",
            url: "https://airsenseintelligentsystem.streamlit.app/",
          },
        ],
        img: "airsense.png",
      },
    ],
    experience: [
      {
        role: "AI/ML Intern",
        company: "Infosys Springboard",
        date: "Jun 2024 – Aug 2024",
        bullets: [
          "built a document summarization pipeline using huggingface transformers, reducing review time by 40%.",
          "fine-tuned a bert-based model for named entity recognition on financial data.",
          "deployed the service as a fastapi microservice with docker.",
        ],
        tags: ["Python", "Transformers", "FastAPI"],
      },
      {
        role: "Data Science Intern",
        company: "Edunet Foundation (IBM)",
        date: "Jan 2024 – Apr 2024",
        bullets: [
          "developed a predictive model for student performance using sql and scikit-learn.",
          "designed interactive dashboards with plotly to visualize learning patterns.",
          "collaborated with a team of 5 to deliver a prototype for an adaptive learning platform.",
        ],
        tags: ["SQL", "scikit-learn", "Plotly"],
      },
    ],
    education: [
      {
        year: "2023 — Present",
        degree: "B.Tech — Computer Science",
        school: "Lovely Professional University",
        detail:
          "learning my way through backend, AI/ML and distributed systems, with a habit of turning interesting ideas into things i can actually build and experiment with.",
      },
      {
        year: "2021 — 2023",
        degree: "Senior Secondary (PCM)",
        school: "Jawahar Navodaya Vidyalaya",
        detail:
          "focused on PCM — where i first discovered my love for logical reasoning and breaking down complex problems.",
      },
      {
        year: "2019 — 2021",
        degree: "Higher Secondary",
        school: "Jawahar Navodaya Vidyalaya",
        detail:
          "built a strong foundation that continues to shape how i approach problems, systems and code today.",
      },
    ],
  };

  // ─── RENDER FUNCTIONS ──────────────────────────────────────

  function renderHero() {
    const container = document.getElementById("hero-section");
    if (!container) return;
    const pointsHtml = data.hero.points.map((p) => `<li>${p}</li>`).join("");
    container.innerHTML = `
            <div class="hero-top-flex">
                <div class="hero-avatar">
                    <img src="images/professional image.jpeg" alt="Anamika Ghosh" onerror="this.remove()" />
                </div>
                <div class="hero-name-col">
                    <div class="name-row">
                        <h1 class="hero-name">Anamika Ghosh</h1>
                        <span class="verified-tick" title="Verified">
                            <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 0.5L13.09 2.5L15.94 1.9L16.85 4.65L19.6 5.56L19 8.41L21 10.5L19 12.59L19.6 15.44L16.85 16.35L15.94 19.1L13.09 18.5L11 20.5L8.91 18.5L6.06 19.1L5.15 16.35L2.4 15.44L3 12.59L1 10.5L3 8.41L2.4 5.56L5.15 4.65L6.06 1.9L8.91 2.5L11 0.5Z" fill="#3e4ce4" />
                                <path d="M7 11L9.8 13.8L15 8.2" stroke="#111111" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                    </div>
                    <div class="hero-role mono">backend developer · ai/ml builder</div>
                </div>
            </div>
            <ul class="hero-points">${pointsHtml}</ul>
            <div class="hero-socials">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anamikaghosh.work@gmail.com" target="_blank" rel="noopener" class="social-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#EA4335">
                        <path d="M0 4c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V4zm2 0v16h20V4H2zm2 2.5l8 6 8-6V8l-8 6-8-6V6.5z"/>
                    </svg>
                    <span>Email</span>
                </a>
                <a href="https://github.com/Anamikaghosh18" target="_blank" rel="noopener" class="social-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#FFFFFF">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span>GitHub</span>
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener" class="social-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#EC1C24">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
                        <path d="M8 12h8v2H8v-2zm0 4h5v2H8v-2zm0-8h3v2H8V8z"/>
                    </svg>
                    <span>Resume</span>
                </a>
                <a href="https://linkedin.com/in/anamikaghosh18" target="_blank" rel="noopener" class="social-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#0A66C2">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span>LinkedIn</span>
                </a>
                
            </div>
        `;
  }

  function renderSkills() {
    const container = document.getElementById("skills-container");
    if (!container) return;
    const iconMap = {
      Python: "python/3776AB",
      Java: "openjdk/437291",
      FastAPI: "fastapi/009688",
      PyTorch: "pytorch/EE4C2C",
      "scikit-learn": "scikitlearn/F7931E",
      LangChain: "langchain/1C3C3C",
      PostgreSQL: "postgresql/4169E1",
      MongoDB: "mongodb/47A248",
      Docker: "docker/2496ED",
    };
    const logos = data.skills
      .map((skill) => {
        const icon = iconMap[skill] || "simpleicons/default";
        return `<span class="skill-logo-item"><img src="https://cdn.simpleicons.org/${icon}" alt="" />${skill}</span>`;
      })
      .join("");
    container.innerHTML = `
            <h2 class="section-title">tech stack i work with</h2>
            <div class="skill-logos">${logos}</div>
        `;
  }

  function renderProjects() {
    const container = document.getElementById("projects-container");
    if (!container) return;
    const projectsToShow = data.projects.slice(0, 4);
    const filters = ["all", "ml", "web"];
    const filterBtns = filters
      .map(
        (f) =>
          `<button class="fchip ${f === "all" ? "active" : ""}" data-filter="${f}">${f}</button>`,
      )
      .join("");
    const listHtml = projectsToShow
      .map((p, index) => {
        const linksHtml = p.links
          .map(
            (l) =>
              `<a href="${l.url}" target="_blank" rel="noopener" class="p-link">${l.text}</a>`,
          )
          .join("");
        return `
                    <div class="proj-entry" data-cat="${p.cat}" data-index="${index}">
                        <div class="proj-thumb">
                            <img src="images/${p.img}" alt="${p.title}" onerror="this.style.display='none'" />
                        </div>
                        <div>
                            <div class="proj-top">
                                <span class="p-name">${p.title}</span>
                                <span class="p-tag ${p.tagType}">${p.tag}</span>
                            </div>
                            <div class="p-desc">${p.desc}</div>
                            <div class="p-stack">${p.stack}</div>
                            <div class="p-links">${linksHtml}</div>
                        </div>
                    </div>
                `;
      })
      .join("");
    container.innerHTML = `
            <h2 class="section-title">projects i've built</h2>
            <div class="filter-row" id="filterRow">${filterBtns}</div>
            <div class="proj-list" id="projList">${listHtml}</div>
        `;
    // Scroll reveal
    const projectEntries = document.querySelectorAll(".proj-entry");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    projectEntries.forEach((entry) => observer.observe(entry));
    // Filter events
    document.querySelectorAll(".fchip").forEach((chip) => {
      chip.addEventListener("click", () => {
        document
          .querySelectorAll(".fchip")
          .forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        const f = chip.dataset.filter;
        document.querySelectorAll(".proj-entry").forEach((entry) => {
          entry.hidden = !(f === "all" || entry.dataset.cat === f);
        });
      });
    });
  }

  function renderBlogs() {
    const container = document.getElementById("blogs-container");
    if (!container) return;
    const username = "anamikaghosh18";
    container.innerHTML = `<h2 class="section-title">recent writings.</h2><p style="color:var(--ink-60);">loading...</p>`;

    function fetchArticles(retry = false) {
      fetch(`https://dev.to/api/articles?username=${username}`)
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return res.json();
        })
        .then((articles) => {
          if (!articles || articles.length === 0) {
            if (!retry) {
              setTimeout(() => fetchArticles(true), 3000);
              return;
            }
            throw new Error("No articles found after retry");
          }
          renderBlogList(articles);
        })
        .catch((error) => {
          console.warn("Blog fetch failed:", error);
          renderFallback();
        });
    }

    function renderBlogList(articles) {
      const list = articles
        .slice(0, 6)
        .map((article) => {
          const date = new Date(article.published_at);
          const formattedDate = date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          });
          return `
                        <div class="blog-item">
                            <a href="${article.url}" target="_blank" rel="noopener" class="blog-title">${article.title}</a>
                            <div class="blog-meta">
                                <span class="blog-date">${formattedDate}</span>
                                <a href="${article.url}" target="_blank" rel="noopener" class="blog-read-link">read →</a>
                            </div>
                        </div>
                    `;
        })
        .join("");
      container.innerHTML = `
                <h2 class="section-title">recent writings.</h2>
                <div class="blog-list">${list}</div>
            `;
    }

    function renderFallback() {
      container.innerHTML = `
                <h2 class="section-title">recent writings.</h2>
                <div class="blog-list">
                    <div class="blog-item" style="justify-content:center;padding:24px 0;border-bottom:none;">
                        <div style="text-align:center;">
                            <div style="font-size:28px;margin-bottom:8px;">📝</div>
                            <div style="font-size:16px;color:var(--ink-60);margin-bottom:4px;">read my blogs on</div>
                            <a href="https://dev.to/anamikaghosh18" target="_blank" rel="noopener" style="font-size:18px;font-weight:600;color:var(--accent-cyan);border-bottom:2px solid var(--accent-cyan);transition:all 0.2s ease;">
                                dev.to
                            </a>
                            <div style="font-size:13px;color:var(--ink-30);margin-top:12px;">— or check back later for new posts —</div>
                        </div>
                    </div>
                </div>
            `;
    }
    fetchArticles();
  }

  function renderExperience() {
    const container = document.getElementById("experience-container");
    if (!container) return;
    const listHtml = data.experience
      .map((exp) => {
        const bullets = exp.bullets.map((b) => `<li>${b}</li>`).join("");
        const tags = exp.tags.map((t) => `<span>${t}</span>`).join("");
        return `
                    <div class="exp-row">
                        <div class="exp-top-row">
                            <span class="exp-role">${exp.role}</span>
                            <span class="exp-company">· ${exp.company}</span>
                            <span class="exp-date mono">${exp.date}</span>
                        </div>
                        <ul class="exp-bullets">${bullets}</ul>
                        <div class="exp-tags">${tags}</div>
                    </div>
                `;
      })
      .join("");
    container.innerHTML = `
            <h2 class="section-title">where i've worked</h2>
            <div class="exp-list">${listHtml}</div>
        `;
  }

  function renderEducation() {
    const container = document.getElementById("education-container");
    if (!container) return;
    const listHtml = data.education
      .map(
        (edu) => `
                <div class="edu-row">
                    <div class="edu-top-row">
                        <span class="edu-degree">${edu.degree}</span>
                        <span class="edu-school">· ${edu.school}</span>
                        <span class="edu-date mono">${edu.year}</span>
                    </div>
                    <div class="edu-detail">${edu.detail}</div>
                </div>
            `,
      )
      .join("");
    container.innerHTML = `
            <h2 class="section-title">educational background</h2>
            <div class="edu-list">${listHtml}</div>
        `;
  }

  function renderCertifications() {
    const container = document.getElementById("certifications-container");
    if (!container) return;
    const certs = [
      {
        name: "Automation Anywhere",
        sub: "RPA fundamentals and bot creation",
        link: "https://certificates.automationanywhere.com/9ae38350-233d-4c0f-a484-72083c713630",
        svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#A9225C" style="width:28px;height:28px;">
                        <path d="M12 2L2 22h4l2-4h8l2 4h4L12 2zm-2 12l2-6 2 6h-4z"/>
                        <circle cx="12" cy="14" r="2.5" fill="#0d0d0d" stroke="#A9225C" stroke-width="1.5"/>
                      </svg>`,
      },
      {
        name: "OCI Generative AI",
        sub: "LLMs and RAG solutions · Oracle",
        link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E51DC57A08CA7F5C85B3B6DFE2B588E9A124407DF1025FAD5018358707C87211",
        svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#F80000" style="width:28px;height:28px;">
                        <path d="M16.1 5.4H7.9C4.2 5.4 1.2 8.4 1.2 12s3 6.6 6.7 6.6h8.2c3.7 0 6.7-3 6.7-6.6s-3-6.6-6.7-6.6zm0 10.8H7.9c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2h8.2c2.3 0 4.2 1.9 4.2 4.2s-1.9 4.2-4.2 4.2z"/>
                      </svg>`,
      },
      {
        name: "OCI AI Foundations",
        sub: "Machine learning and AI services · Oracle Cloud",
        link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=239C1C850330F0CB4EBB46C0D69385475E6AA053977DB4573A6B70808FBDB127",
        svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#F80000" style="width:28px;height:28px;">
                        <path d="M16.1 5.4H7.9C4.2 5.4 1.2 8.4 1.2 12s3 6.6 6.7 6.6h8.2c3.7 0 6.7-3 6.7-6.6s-3-6.6-6.7-6.6zm0 10.8H7.9c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2h8.2c2.3 0 4.2 1.9 4.2 4.2s-1.9 4.2-4.2 4.2z"/>
                      </svg>`,
      },
    ];
    const listHtml = certs
      .map(
        (cert) => `
                    <div class="cert-row">
                        <div class="cert-logo-box">${cert.svg}</div>
                        <div class="cert-info">
                            <div class="cert-name">${cert.name}</div>
                            <div class="cert-sub">${cert.sub}</div>
                        </div>
                        <a href="${cert.link}" target="_blank" rel="noopener" class="cert-link">View →</a>
                    </div>
                `,
      )
      .join("");
    container.innerHTML = `
            <h2 class="section-title">certifications i've earned</h2>
            <div class="certs-list">${listHtml}</div>
        `;
  }

  function renderContact() {
    const container = document.getElementById("contact-container");
    if (!container) return;
    container.innerHTML = `
            <h2 class="contact-heading">let's build something.</h2>
            <p class="contact-sub">
                i'm open to <strong>freelance projects, internships, and new-grad opportunities</strong>
                where i can build, learn, and solve interesting problems.
                if you have something you're working on — or just want to talk about
                ai/ml, backend systems, or ideas worth building — i'd love to hear from you.
            </p>
            <div class="hero-actions">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anamikaghosh.work@gmail.com" target="_blank" rel="noopener" class="hero-action">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#EA4335">
                        <path d="M0 4c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V4zm2 0v16h20V4H2zm2 2.5l8 6 8-6V8l-8 6-8-6V6.5z"/>
                    </svg>
                    <span>Email</span>
                </a>
                <a href="https://github.com/Anamikaghosh18" target="_blank" rel="noopener" class="hero-action">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFFFFF">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span>GitHub</span>
                </a>
                <a href="https://linkedin.com/in/anamikaghosh18" target="_blank" rel="noopener" class="hero-action">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#0A66C2">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span>LinkedIn</span>
                </a>
                <a href="https://x.com/aka_anamka" target="_blank" rel="noopener" class="hero-action">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFFFFF">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    <span>X</span>
                </a>
            </div>
        `;
  }

  function renderQuote() {
    const block = document.getElementById("quoteBlock");
    if (!block) return;
    const quotes = [
      { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
      {
        text: "Programs must be written for people to read, and only incidentally for machines to execute.",
        author: "Harold Abelson",
      },
      {
        text: "The best error message is the one that never shows up.",
        author: "Thomas Fuchs",
      },
      {
        text: "Simplicity is prerequisite for reliability.",
        author: "Edsger Dijkstra",
      },
      {
        text: "First, solve the problem. Then, write the code.",
        author: "John Johnson",
      },
    ];
    const pick = quotes[Math.floor(Math.random() * quotes.length)];
    block.innerHTML = `
            <div class="quote-block">
                <span class="quote-mark">“</span>
                <p class="quote-text">${pick.text}</p>
                <div class="quote-cite">— ${pick.author}</div>
            </div>
        `;
  }

  // ─── INIT ──────────────────────────────────────────────────
  renderHero();
  renderSkills();
  renderProjects();
  renderBlogs();
  renderExperience();
  renderEducation();
  renderCertifications();
  renderContact();
  renderQuote();

  // ─── SMOOTH SCROLL ──────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const t = document.querySelector(a.getAttribute("href"));
      if (t) {
        e.preventDefault();
        t.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // ─── SECTION TITLE FADE UP ─────────────────────────────
  document.querySelectorAll(".section-title").forEach((title) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = "fadeUp 0.8s ease forwards";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    observer.observe(title);
  });

  // ─── HAMBURGER MENU (safe) ─────────────────────────────
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    const overlay = document.createElement("div");
    overlay.className = "nav-overlay";
    document.body.appendChild(overlay);

    function toggleMenu() {
      const isOpen = navLinks.classList.toggle("open");
      hamburger.classList.toggle("active");
      overlay.classList.toggle("active");
      hamburger.setAttribute("aria-expanded", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    }

    hamburger.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", toggleMenu);

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (navLinks.classList.contains("open")) {
          toggleMenu();
        }
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navLinks.classList.contains("open")) {
        toggleMenu();
      }
    });
  } else {
    console.warn("Hamburger or navLinks not found.");
  }
});
