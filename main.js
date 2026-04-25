// Enhanced Google-style Portfolio Interactions
document.addEventListener("DOMContentLoaded", function () {
  console.log("Portfolio Initializing...");

  // 1. Carousel Initializations
  function safeInitCarousel(trackId, prevBtnId, nextBtnId) {
    try {
      const track = document.getElementById(trackId);
      const prev = document.getElementById(prevBtnId);
      const next = document.getElementById(nextBtnId);
      
      if (!track || !prev || !next) {
        console.warn(`Carousel elements missing: ${trackId}, ${prevBtnId}, ${nextBtnId}`);
        return;
      }

      const scrollAmount = () => {
        const firstCard = track.querySelector('.modern-card');
        return firstCard ? firstCard.clientWidth + 32 : track.clientWidth * 0.8;
      };

      prev.addEventListener("click", (e) => {
        e.preventDefault();
        track.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
      });

      next.addEventListener("click", (e) => {
        e.preventDefault();
        track.scrollBy({ left: scrollAmount(), behavior: "smooth" });
      });
      
      console.log(`Carousel initialized: ${trackId}`);
    } catch (e) {
      console.error(`Carousel Init Error (${trackId}):`, e);
    }
  }

  safeInitCarousel("projectsTrack", "projectPrev", "projectNext");
  safeInitCarousel("certificationsTrack", "certPrev", "certNext");

  // 2. Project Filtering Logic
  const initProjectFilters = () => {
    try {
      const filterTrack = document.getElementById("projectsTrack");
      const filterContainer = document.querySelector(".projects-filter-container");
      if (!filterTrack || !filterContainer) return;

      const chips = filterContainer.querySelectorAll(".filter-chip");
      const cards = filterTrack.querySelectorAll(".modern-card");

      filterContainer.addEventListener("click", (e) => {
        const chip = e.target.closest(".filter-chip");
        if (!chip) return;

        // Update UI
        chips.forEach(c => c.classList.remove("active"));
        chip.classList.add("active");

        const filter = chip.getAttribute("data-filter");

        // Filter cards
        cards.forEach(card => {
          if (filter === "all" || card.getAttribute("data-category") === filter) {
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        });

        // Reset scroll
        filterTrack.scrollTo({ left: 0, behavior: "smooth" });
        console.log(`Filtered projects by: ${filter}`);
      });
    } catch (e) {
      console.error("Filter Initialization Error:", e);
    }
  };

  initProjectFilters();

  // Google-style ripple effect for buttons
  function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add("ripple-effect");

    const ripple = button.getElementsByClassName("ripple-effect")[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);

    setTimeout(() => circle.remove(), 600);
  }

  document.querySelectorAll(".btn, .social-btn, .project-btn, .carousel-btn, .fab").forEach((btn) => {
    btn.addEventListener("click", createRipple);
  });

  // 4. Smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      const navHeight = document.querySelector(".app-bar").offsetHeight;
      const targetPosition = target.offsetTop - navHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  });

  const appBar = document.getElementById("appBar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      appBar.classList.add("scrolled");
    } else {
      appBar.classList.remove("scrolled");
    }
  });

  // Enhanced animations and interactions
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
      }
    });
  }, observerOptions);

  // Observe skill items and project cards for slide-in animation
  document.querySelectorAll(".skill-item, .project-card").forEach((item) => {
    observer.observe(item);
  });

  // Google-style loading dots for dynamic content
  function showLoadingDots(element) {
    const dots = document.createElement("div");
    dots.className = "loading-dots";
    for (let i = 0; i < 3; i++) {
      const dot = document.createElement("div");
      dot.className = "loading-dot";
      dots.appendChild(dot);
    }
    element.appendChild(dots);
    return dots;
  }

  // Remove redundant CSS-already-handled hover logic to prevent distortion
  // document.querySelectorAll(".btn").forEach((btn) => { ... });

  // Mobile Menu Toggle
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

    // Close menu when clicking a nav item
    navItems.querySelectorAll(".nav-item").forEach(item => {
      item.addEventListener("click", () => {
        navItems.classList.remove("nav-open");
        const icon = menuBtn.querySelector(".material-symbols-rounded");
        if (icon) icon.textContent = "menu";
      });
    });
  }

  // Game-style cursor trail effect
  const cursorTrail = document.getElementById("cursorTrail");
  let trailTimeout;

  document.addEventListener("mousemove", (e) => {
    cursorTrail.style.left = e.clientX - 10 + "px";
    cursorTrail.style.top = e.clientY - 10 + "px";

    // Show trail on movement
    cursorTrail.style.opacity = "1";
    clearTimeout(trailTimeout);
    trailTimeout = setTimeout(() => {
      cursorTrail.style.opacity = "0";
    }, 100);
  });

  // Hide trail when mouse leaves window
  document.addEventListener("mouseleave", () => {
    cursorTrail.style.opacity = "0";
  });

  // Game-style keyboard effects
  document.addEventListener("keydown", (e) => {
    // Space bar creates particle burst
    if (e.code === "Space") {
      e.preventDefault();
      createParticleBurst();
    }

    // Arrow keys create directional effects
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.code)) {
      e.preventDefault();
      createDirectionalEffect(e.code);
    }
  });

  function createParticleBurst() {
    if (googleScene && googleScene.createParticleBurst) {
      googleScene.createParticleBurst();
    }
  }

  function createDirectionalEffect(direction) {
    if (googleScene && googleScene.createDirectionalEffect) {
      googleScene.createDirectionalEffect(direction);
    }
  }

  // Progress bar animation on scroll
  const progressBars = document.querySelectorAll(".progress-bar");
  const progressObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "progressFill 2s ease-out forwards";
        }
      });
    },
    { threshold: 0.5 },
  );

  progressBars.forEach((bar) => progressObserver.observe(bar));

  // Project Filtering Logic
  const filterChips = document.querySelectorAll(".filter-chip");
  const projectsGrid = document.querySelector(".projects-grid");

  // Re-query project cards after dynamic rendering
  const getProjectCards = () => document.querySelectorAll(".project-card");

  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      // Update active chip
      filterChips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");

      const filter = chip.getAttribute("data-filter");

      const projectCards = getProjectCards();
      projectCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        const tags = card.getAttribute("data-tags")?.split(',') || [];
        
        // Match logic: 'ai' matches 'ml' category or tags, 'web' matches 'web'
        const isMatch = filter === "all" || 
                        category === filter || 
                        tags.includes(filter) ||
                        (filter === "ai" && (category === "ml" || tags.includes("ml")));

        if (isMatch) {
          card.classList.remove("hidden");
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 10);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.8)";
          setTimeout(() => {
            card.classList.add("hidden");
          }, 300);
        }
      });

      // Scroll projects grid back to start when filter changes
      const scrollContainer = document.querySelector(".projects-scroll-container");
      if (scrollContainer) {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      }
    });
  });

  // Drag to scroll for projects
  const scrollContainer = document.querySelector(".projects-scroll-container");
  if (scrollContainer) {
    let isDown = false;
    let startX;
    let scrollLeft;

    scrollContainer.addEventListener("mousedown", (e) => {
      isDown = true;
      scrollContainer.classList.add("active");
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener("mouseleave", () => {
      isDown = false;
    });

    scrollContainer.addEventListener("mouseup", () => {
      isDown = false;
    });

    scrollContainer.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed
      scrollContainer.scrollLeft = scrollLeft - walk;
    });
  }
});

// Google-style Three.js Background Scene
class GoogleStyleScene {
  constructor() {
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.shapes = [];
    this.energyRings = [];
    this.dataCubes = [];
    this.trailParticles = [];
    this.clickEffects = [];
    this.particleBursts = [];
    this.directionalEffects = [];
    this.mouse = new THREE.Vector2();
    this.raycaster = new THREE.Raycaster();
    this.animationId = null;
    this.init();
  }

  init() {
    // Create scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf8fafd); // Match the surface color

    // Create camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    this.camera.position.z = 30;

    // Create renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Create container and add to DOM
    const container = document.createElement("div");
    container.id = "threejs-container";
    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.zIndex = "-1";
    container.style.pointerEvents = "none";
    document.body.appendChild(container);
    container.appendChild(this.renderer.domElement);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    this.scene.add(directionalLight);

    // Create Google-style floating shapes
    this.createShapes();

    // Create particle system
    this.createParticles();

    // Create game-style effects
    this.createGameEffects();
    this.createFloatingPanels();
    this.createLineNetwork();

    // Add mouse interaction
    this.addMouseInteraction();

    // Handle window resize
    window.addEventListener("resize", () => this.onWindowResize());
  }

  createShapes() {
    const googleColors = [
      0x4285f4, // Google Blue
      0xea4335, // Google Red
      0xfbbc04, // Google Yellow
      0x34a853, // Google Green
    ];

    const shapeTypes = ["box", "sphere", "cylinder", "torus"];

    for (let i = 0; i < 12; i++) {
      const color =
        googleColors[Math.floor(Math.random() * googleColors.length)];
      const shapeType =
        shapeTypes[Math.floor(Math.random() * shapeTypes.length)];

      let geometry;
      switch (shapeType) {
        case "box":
          geometry = new THREE.BoxGeometry(1, 1, 1);
          break;
        case "sphere":
          geometry = new THREE.SphereGeometry(0.5, 16, 16);
          break;
        case "cylinder":
          geometry = new THREE.CylinderGeometry(0.3, 0.3, 1, 16);
          break;
        case "torus":
          geometry = new THREE.TorusGeometry(0.4, 0.2, 8, 16);
          break;
      }

      let material;
      if (Math.random() > 0.5) {
        // Some shapes use basic material with gradient-like effect
        material = new THREE.MeshBasicMaterial({
          color: color,
          transparent: true,
          opacity: 0.08,
          wireframe: Math.random() > 0.8,
        });
      } else {
        // Others use phong material
        material = new THREE.MeshPhongMaterial({
          color: color,
          transparent: true,
          opacity: 0.1,
          shininess: 100,
          wireframe: Math.random() > 0.7, // Some shapes have wireframe for Google-style aesthetic
        });
      }

      const shape = new THREE.Mesh(geometry, material);

      // Random position
      shape.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 20,
      );

      // Random rotation
      shape.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      );

      // Store animation properties
      shape.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01,
        },
        floatSpeed: Math.random() * 0.005 + 0.002,
        floatOffset: Math.random() * Math.PI * 2,
      };

      this.shapes.push(shape);
      this.scene.add(shape);
    }
  }

  createParticles() {
    const particleCount = 50;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const googleColors = [
      new THREE.Color(0x4285f4), // Google Blue
      new THREE.Color(0xea4335), // Google Red
      new THREE.Color(0xfbbc04), // Google Yellow
      new THREE.Color(0x34a853), // Google Green
    ];

    for (let i = 0; i < particleCount; i++) {
      // Random positions
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

      // Random Google colors
      const color =
        googleColors[Math.floor(Math.random() * googleColors.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );
    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3),
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.5,
      transparent: true,
      opacity: 0.6,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    });

    this.particles = new THREE.Points(particlesGeometry, particlesMaterial);
    this.scene.add(this.particles);

    // Store particle animation data
    this.particles.userData = {
      originalPositions: positions.slice(),
      speeds: Array.from({ length: particleCount }, () => ({
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02,
      })),
    };
  }

  createGameEffects() {
    // Create energy rings (like in sci-fi games)
    this.energyRings = [];
    for (let i = 0; i < 3; i++) {
      const ringGeometry = new THREE.RingGeometry(
        2 + i * 1.5,
        2.2 + i * 1.5,
        32,
      );
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: [0x4285f4, 0xea4335, 0x34a853][i],
        transparent: true,
        opacity: 0.1,
        side: THREE.DoubleSide,
      });

      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.set(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 10,
      );

      ring.userData = {
        rotationSpeed: 0.005 + i * 0.002,
        pulseSpeed: 0.8 + i * 0.3,
        originalScale: 1,
      };

      this.energyRings.push(ring);
      this.scene.add(ring);
    }

    // Create floating "data cubes" (like in cyberpunk games)
    this.dataCubes = [];
    for (let i = 0; i < 5; i++) {
      const cubeGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
      const cubeMaterial = new THREE.MeshPhongMaterial({
        color: 0x4285f4,
        transparent: true,
        opacity: 0.15,
        emissive: 0x0b57d0,
        emissiveIntensity: 0.1,
        wireframe: true,
      });

      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.position.set(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 35,
        (Math.random() - 0.5) * 15,
      );

      cube.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02,
        },
        floatSpeed: Math.random() * 0.01 + 0.005,
        floatOffset: Math.random() * Math.PI * 2,
        glowIntensity: Math.random() * 0.2 + 0.1,
      };

      this.dataCubes.push(cube);
      this.scene.add(cube);
    }

    // Create particle trails (like spaceship trails)
    this.createParticleTrails();
  }

  createFloatingPanels() {
    this.floatingPanels = [];
    const panelColors = [
      0x4285f4, 0xea4335, 0xfbbc04, 0x34a853, 0x9c27b0, 0xff7043,
    ];

    for (let i = 0; i < 6; i++) {
      const panelGeometry = new THREE.PlaneGeometry(4, 2.5);
      const panelMaterial = new THREE.MeshBasicMaterial({
        color: panelColors[i % panelColors.length],
        transparent: true,
        opacity: 0.08,
        side: THREE.DoubleSide,
      });

      const panel = new THREE.Mesh(panelGeometry, panelMaterial);
      panel.position.set(
        (Math.random() - 0.5) * 70,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 25,
      );
      panel.rotation.set(
        Math.random() * 0.4 - 0.2,
        Math.random() * Math.PI,
        Math.random() * 0.4 - 0.2,
      );
      panel.userData = {
        rotateSpeed: new THREE.Vector3(
          (Math.random() - 0.5) * 0.002,
          (Math.random() - 0.5) * 0.002,
          (Math.random() - 0.5) * 0.002,
        ),
        floatOffset: Math.random() * Math.PI * 2,
        floatSpeed: 0.002 + Math.random() * 0.003,
      };

      this.floatingPanels.push(panel);
      this.scene.add(panel);
    }
  }

  createLineNetwork() {
    this.networkLines = [];

    for (let i = 0; i < 10; i++) {
      const count = 5 + Math.floor(Math.random() * 4);
      const points = [];
      for (let j = 0; j < count; j++) {
        points.push(
          new THREE.Vector3(
            (Math.random() - 0.5) * 100,
            (Math.random() - 0.5) * 70,
            (Math.random() - 0.5) * 30,
          ),
        );
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.08,
      });
      const line = new THREE.Line(geometry, lineMaterial);
      line.userData = {
        rotationSpeed: (Math.random() - 0.5) * 0.0005,
      };

      this.networkLines.push(line);
      this.scene.add(line);
    }
  }

  createParticleTrails() {
    this.trailParticles = [];
    for (let i = 0; i < 2; i++) {
      const trailGeometry = new THREE.BufferGeometry();
      const trailLength = 20;
      const positions = new Float32Array(trailLength * 3);
      const colors = new Float32Array(trailLength * 3);

      for (let j = 0; j < trailLength; j++) {
        positions[j * 3] = (Math.random() - 0.5) * 60;
        positions[j * 3 + 1] = (Math.random() - 0.5) * 40;
        positions[j * 3 + 2] = (Math.random() - 0.5) * 20;

        const alpha = j / trailLength;
        colors[j * 3] = 0.2 + alpha * 0.8; // Blue gradient
        colors[j * 3 + 1] = 0.4 + alpha * 0.6;
        colors[j * 3 + 2] = 1.0; // Full blue at end
      }

      trailGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3),
      );
      trailGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      const trailMaterial = new THREE.PointsMaterial({
        size: 0.3,
        transparent: true,
        opacity: 0.8,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
      });

      const trail = new THREE.Points(trailGeometry, trailMaterial);
      trail.userData = {
        speed: 0.5 + Math.random() * 0.5,
        direction: new THREE.Vector3(
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2,
        ).normalize(),
        life: 0,
      };

      this.trailParticles.push(trail);
      this.scene.add(trail);
    }
  }

  addMouseInteraction() {
    // Mouse move handler for interactive effects
    document.addEventListener("mousemove", (event) => {
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Update raycaster
      this.raycaster.setFromCamera(this.mouse, this.camera);

      // Check for intersections with shapes
      const intersects = this.raycaster.intersectObjects(this.shapes);
      if (intersects.length > 0) {
        const intersectedShape = intersects[0].object;
        // Add a glow effect to hovered shapes
        if (!intersectedShape.userData.isHovered) {
          intersectedShape.userData.isHovered = true;
          intersectedShape.userData.originalOpacity =
            intersectedShape.material.opacity;
          intersectedShape.material.emissive = new THREE.Color(
            intersectedShape.material.color,
          );
          intersectedShape.material.emissiveIntensity = 0.3;
        }
      } else {
        // Reset glow effect
        this.shapes.forEach((shape) => {
          if (shape.userData.isHovered) {
            shape.userData.isHovered = false;
            shape.material.emissive = new THREE.Color(0x000000);
            shape.material.emissiveIntensity = 0;
          }
        });
      }
    });

    // Click interaction for game-like effects
    document.addEventListener("click", (event) => {
      // Create a click ripple effect
      this.createClickEffect(event.clientX, event.clientY);
    });
  }

  createClickEffect(x, y) {
    // Convert screen coordinates to 3D world coordinates
    const vector = new THREE.Vector3(
      (x / window.innerWidth) * 2 - 1,
      -(y / window.innerHeight) * 2 + 1,
      0.5,
    );
    vector.unproject(this.camera);

    const dir = vector.sub(this.camera.position).normalize();
    const distance = -this.camera.position.z / dir.z;
    const pos = this.camera.position.clone().add(dir.multiplyScalar(distance));

    // Create expanding ring effect
    const ringGeometry = new THREE.RingGeometry(0.1, 0.3, 16);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x4285f4,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide,
    });

    const clickRing = new THREE.Mesh(ringGeometry, ringMaterial);
    clickRing.position.copy(pos);
    clickRing.lookAt(this.camera.position);

    clickRing.userData = {
      life: 60, // frames
      maxLife: 60,
      scaleSpeed: 0.1,
    };

    this.scene.add(clickRing);

    // Store for animation
    if (!this.clickEffects) this.clickEffects = [];
    this.clickEffects.push(clickRing);
  }

  createParticleBurst() {
    // Create a burst of particles at center of screen
    const burstCount = 20;
    const burstGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(burstCount * 3);
    const colors = new Float32Array(burstCount * 3);
    const velocities = [];

    const googleColors = [
      new THREE.Color(0x4285f4),
      new THREE.Color(0xea4335),
      new THREE.Color(0xfbbc04),
      new THREE.Color(0x34a853),
    ];

    for (let i = 0; i < burstCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = 0;

      const color =
        googleColors[Math.floor(Math.random() * googleColors.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      velocities.push({
        x: (Math.random() - 0.5) * 0.5,
        y: (Math.random() - 0.5) * 0.5,
        z: (Math.random() - 0.5) * 0.5,
      });
    }

    burstGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );
    burstGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const burstMaterial = new THREE.PointsMaterial({
      size: 0.8,
      transparent: true,
      opacity: 0.9,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    });

    const burst = new THREE.Points(burstGeometry, burstMaterial);
    burst.userData = {
      velocities: velocities,
      life: 120,
      maxLife: 120,
    };

    this.scene.add(burst);

    if (!this.particleBursts) this.particleBursts = [];
    this.particleBursts.push(burst);
  }

  createDirectionalEffect(direction) {
    // Create a directional energy wave
    const waveGeometry = new THREE.PlaneGeometry(2, 20, 1, 10);
    const waveMaterial = new THREE.MeshBasicMaterial({
      color: 0x4285f4,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide,
    });

    const wave = new THREE.Mesh(waveGeometry, waveMaterial);

    // Position based on direction
    switch (direction) {
      case "ArrowUp":
        wave.position.set(0, -10, 0);
        wave.rotation.z = 0;
        break;
      case "ArrowDown":
        wave.position.set(0, 10, 0);
        wave.rotation.z = Math.PI;
        break;
      case "ArrowLeft":
        wave.position.set(15, 0, 0);
        wave.rotation.z = Math.PI / 2;
        break;
      case "ArrowRight":
        wave.position.set(-15, 0, 0);
        wave.rotation.z = -Math.PI / 2;
        break;
    }

    wave.userData = {
      life: 60,
      maxLife: 60,
      direction: direction,
      speed: 0.3,
    };

    this.scene.add(wave);

    if (!this.directionalEffects) this.directionalEffects = [];
    this.directionalEffects.push(wave);
  }

  animate = () => {
    this.animationId = requestAnimationFrame(this.animate);

    const time = Date.now() * 0.001;

    // Animate shapes
    this.shapes.forEach((shape, index) => {
      // Rotate shapes
      shape.rotation.x += shape.userData.rotationSpeed.x;
      shape.rotation.y += shape.userData.rotationSpeed.y;
      shape.rotation.z += shape.userData.rotationSpeed.z;

      // Gentle floating motion
      shape.position.y +=
        Math.sin(time + shape.userData.floatOffset) * shape.userData.floatSpeed;

      // Subtle pulsing opacity
      const pulse = Math.sin(time * 0.5 + index) * 0.05 + 0.1;
      shape.material.opacity = Math.max(0.05, pulse);
    });

    // Animate particles
    if (this.particles) {
      const positions = this.particles.geometry.attributes.position.array;
      this.particles.userData.speeds.forEach((speed, i) => {
        positions[i * 3] += speed.x;
        positions[i * 3 + 1] += speed.y;
        positions[i * 3 + 2] += speed.z;

        // Wrap around screen edges
        if (positions[i * 3] > 50) positions[i * 3] = -50;
        if (positions[i * 3] < -50) positions[i * 3] = 50;
        if (positions[i * 3 + 1] > 40) positions[i * 3 + 1] = -40;
        if (positions[i * 3 + 1] < -40) positions[i * 3 + 1] = 40;
        if (positions[i * 3 + 2] > 20) positions[i * 3 + 2] = -20;
        if (positions[i * 3 + 2] < -20) positions[i * 3 + 2] = 20;
      });
      this.particles.geometry.attributes.position.needsUpdate = true;

      // Subtle particle opacity pulsing
      this.particles.material.opacity = 0.3 + Math.sin(time * 0.8) * 0.1;
    }

    // Animate energy rings
    if (this.energyRings) {
      this.energyRings.forEach((ring, index) => {
        ring.rotation.z += ring.userData.rotationSpeed;

        // Pulsing scale effect
        const scale =
          1 + Math.sin(time * ring.userData.pulseSpeed + index) * 0.2;
        ring.scale.setScalar(scale);

        // Opacity pulsing
        ring.material.opacity = 0.05 + Math.sin(time * 0.5 + index) * 0.05;
      });
    }

    // Animate data cubes
    if (this.dataCubes) {
      this.dataCubes.forEach((cube, index) => {
        // Complex rotation
        cube.rotation.x += cube.userData.rotationSpeed.x;
        cube.rotation.y += cube.userData.rotationSpeed.y;
        cube.rotation.z += cube.userData.rotationSpeed.z;

        // Floating motion
        cube.position.y +=
          Math.sin(time + cube.userData.floatOffset) * cube.userData.floatSpeed;

        // Glowing effect
        cube.material.emissiveIntensity =
          cube.userData.glowIntensity + Math.sin(time * 2 + index) * 0.1;

        // Scale pulsing
        const scale = 1 + Math.sin(time * 1.5 + index) * 0.1;
        cube.scale.setScalar(scale);
      });
    }

    // Animate floating panels
    if (this.floatingPanels) {
      this.floatingPanels.forEach((panel, index) => {
        panel.rotation.x += panel.userData.rotateSpeed.x;
        panel.rotation.y += panel.userData.rotateSpeed.y;
        panel.rotation.z += panel.userData.rotateSpeed.z;

        panel.position.y +=
          Math.sin(time + panel.userData.floatOffset) *
          panel.userData.floatSpeed;

        panel.material.opacity = 0.05 + Math.sin(time * 0.7 + index) * 0.03;
      });
    }

    // Animate background network lines
    if (this.networkLines) {
      this.networkLines.forEach((line, index) => {
        line.rotation.z += (index % 2 === 0 ? 1 : -1) * 0.0003;
        line.rotation.x += 0.0001;
      });
    }

    // Animate particle trails
    if (this.trailParticles) {
      this.trailParticles.forEach((trail, index) => {
        const positions = trail.geometry.attributes.position.array;

        // Move trail particles
        for (let i = positions.length - 6; i >= 0; i -= 3) {
          positions[i] = positions[i - 3];
          positions[i + 1] = positions[i - 2];
          positions[i + 2] = positions[i - 1];
        }

        // Add new particle at the front
        const frontIndex = 0;
        positions[frontIndex] +=
          trail.userData.direction.x * trail.userData.speed;
        positions[frontIndex + 1] +=
          trail.userData.direction.y * trail.userData.speed;
        positions[frontIndex + 2] +=
          trail.userData.direction.z * trail.userData.speed;

        // Wrap around
        if (positions[frontIndex] > 60) positions[frontIndex] = -60;
        if (positions[frontIndex] < -60) positions[frontIndex] = 60;
        if (positions[frontIndex + 1] > 50) positions[frontIndex + 1] = -50;
        if (positions[frontIndex + 1] < -50) positions[frontIndex + 1] = 50;

        trail.geometry.attributes.position.needsUpdate = true;
      });
    }

    // Animate click effects
    if (this.clickEffects) {
      this.clickEffects = this.clickEffects.filter((effect) => {
        effect.userData.life--;

        if (effect.userData.life <= 0) {
          this.scene.remove(effect);
          return false;
        }

        // Expand and fade
        const progress = 1 - effect.userData.life / effect.userData.maxLife;
        const scale = 1 + progress * 3;
        effect.scale.setScalar(scale);
        effect.material.opacity = (1 - progress) * 0.8;

        return true;
      });
    }

    // Animate particle bursts
    if (this.particleBursts) {
      this.particleBursts = this.particleBursts.filter((burst) => {
        burst.userData.life--;

        if (burst.userData.life <= 0) {
          this.scene.remove(burst);
          return false;
        }

        // Update positions
        const positions = burst.geometry.attributes.position.array;
        burst.userData.velocities.forEach((vel, i) => {
          positions[i * 3] += vel.x;
          positions[i * 3 + 1] += vel.y;
          positions[i * 3 + 2] += vel.z;

          // Add gravity
          vel.y -= 0.01;
        });

        burst.geometry.attributes.position.needsUpdate = true;

        // Fade out
        const progress = 1 - burst.userData.life / burst.userData.maxLife;
        burst.material.opacity = (1 - progress) * 0.9;

        return true;
      });
    }

    // Animate directional effects
    if (this.directionalEffects) {
      this.directionalEffects = this.directionalEffects.filter((effect) => {
        effect.userData.life--;

        if (effect.userData.life <= 0) {
          this.scene.remove(effect);
          return false;
        }

        // Move in direction
        switch (effect.userData.direction) {
          case "ArrowUp":
            effect.position.y += effect.userData.speed;
            break;
          case "ArrowDown":
            effect.position.y -= effect.userData.speed;
            break;
          case "ArrowLeft":
            effect.position.x -= effect.userData.speed;
            break;
          case "ArrowRight":
            effect.position.x += effect.userData.speed;
            break;
        }

        // Fade and scale
        const progress = 1 - effect.userData.life / effect.userData.maxLife;
        effect.material.opacity = (1 - progress) * 0.6;
        effect.scale.y = 1 + progress * 2;

        return true;
      });
    }

    // Subtle camera movement
    this.camera.position.x = Math.sin(time * 0.1) * 2;
    this.camera.position.y = Math.cos(time * 0.15) * 1;
    this.camera.lookAt(0, 0, 0);

    this.renderer.render(this.scene, this.camera);
  };

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  pause() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  resume() {
    if (!this.animationId) {
      this.animate();
    }
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
    const container = document.getElementById("threejs-container");
    if (container) {
      container.remove();
    }
  }
}

// Initialize Three.js scene when DOM is loaded
let googleScene;
document.addEventListener("DOMContentLoaded", () => {
  googleScene = new GoogleStyleScene();
});

// Performance optimization: pause animation when tab is not visible
document.addEventListener("visibilitychange", () => {
  if (googleScene) {
    if (document.hidden) {
      googleScene.pause();
    } else {
      googleScene.resume();
    }
  }
});

// Clean up on page unload
window.addEventListener("beforeunload", () => {
  if (googleScene) {
    googleScene.destroy();
  }
});

// FAB visibility based on scroll
const fab = document.querySelector(".fab");
window.addEventListener("scroll", () => {
  if (fab) {
    if (window.scrollY > 300) {
      fab.style.opacity = "1";
      fab.style.transform = "scale(1)";
    } else {
      fab.style.opacity = "0";
      fab.style.transform = "scale(0.8)";
    }
  }
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (!href || href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    let target;
    try {
      target = document.querySelector(href);
    } catch (error) {
      return;
    }

    if (!target) {
      return;
    }

    e.preventDefault();
    const navHeight = document.querySelector(".app-bar")?.offsetHeight || 72;
    const targetPosition = target.offsetTop - navHeight - 20;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});
