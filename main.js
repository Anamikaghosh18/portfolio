// --- Mobile menu toggle ---
document.getElementById('mobile-menu-btn').onclick = function () {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
};

// --- Dark/Light mode toggle ---
const themeBtn = document.getElementById('theme-toggle');
themeBtn.onclick = function () {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
};
if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark');

// --- Typewriter animation for Home section ---
const roles = [
  "Full Stack Developer",
  "Mobile App Developer",
  
];
let roleIndex = 0, charIndex = 0, typing = true;
const typewriter = document.getElementById('typewriter-text');
function typeRole() {
  if (typing) {
    if (charIndex < roles[roleIndex].length) {
      typewriter.textContent += roles[roleIndex][charIndex++];
      setTimeout(typeRole, 80);
    } else {
      typing = false;
      setTimeout(typeRole, 1200);
    }
  } else {
    if (charIndex > 0) {
      typewriter.textContent = roles[roleIndex].slice(0, --charIndex);
      setTimeout(typeRole, 30);
    } else {
      typing = true;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, 300);
    }
  }
}
typeRole();

// --- Skills in About section ---
const skills = [
  "JavaScript", "React", "Node.js", "Python", "TypeScript", "MongoDB", "PostgreSQL", "Docker", "AWS", "Git", "Figma", "Redis"
];
const topSkills = skills.slice(0, 3);
const topSkillsEl = document.getElementById('top-skills');
const allSkillsEl = document.getElementById('all-skills');
topSkills.forEach(skill => {
  const li = document.createElement('li');
  li.className = "px-3 py-1 rounded-full text-sm skill-chip";
  li.textContent = skill;
  topSkillsEl.appendChild(li);
});
skills.slice(3).forEach(skill => {
  const li = document.createElement('li');
  li.className = "px-3 py-1 rounded-full text-sm skill-chip";
  li.textContent = skill;
  allSkillsEl.appendChild(li);
});
document.getElementById('view-more-skills').onclick = function () {
  allSkillsEl.classList.toggle('hidden');
  this.textContent = allSkillsEl.classList.contains('hidden') ? "View More" : "View Less";
};

// --- Projects section with filtering ---

// Add a category property to each project
const projects = [
  {
    title: "E-Commerce Platform",
    desc: "A full-stack e-commerce solution built with React, Node.js, and MongoDB.",
    img: "https://via.placeholder.com/400x200/eeeeee/7c3aed?text=Project+1",
    tags: ["React", "Node.js", "MongoDB"],
    demo: "#",
    github: "#",
    category: "web"
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio built with modern web technologies.",
    img: "https://via.placeholder.com/400x200/eeeeee/7c3aed?text=Project+2",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    github: "#",
    category: "web"
  },
  {
    title: "Chat Application",
    desc: "Real-time chat app using Socket.io and Node.js.",
    img: "https://via.placeholder.com/400x200/eeeeee/7c3aed?text=Project+3",
    tags: ["Node.js", "Socket.io"],
    demo: "#",
    github: "#",
    category: "web"
  },
  {
    title: "Task Manager",
    desc: "A productivity app for managing daily tasks.",
    img: "https://via.placeholder.com/400x200/eeeeee/7c3aed?text=Project+4",
    tags: ["React", "Redux"],
    demo: "#",
    github: "#",
    category: "mobile"
  },
  {
    title: "Blog Platform",
    desc: "A blogging platform with markdown support.",
    img: "https://via.placeholder.com/400x200/eeeeee/7c3aed?text=Project+5",
    tags: ["Vue.js", "Firebase"],
    demo: "#",
    github: "#",
    category: "web"
  },
  {
    title: "AI Chatbot",
    desc: "Conversational AI chatbot using NLP.",
    img: "https://via.placeholder.com/400x200/eeeeee/7c3aed?text=Project+6",
    tags: ["Python", "NLP"],
    demo: "#",
    github: "#",
    category: "ai"
  }
  // Add more projects as needed
];

let showProjects = 4;
let expanded = false;
let currentFilter = "all";
const projectsList = document.getElementById('projects-list');
const viewMoreBtn = document.getElementById('view-more-projects');

// Filter logic
function renderProjects() {
  projectsList.innerHTML = '';
  let filtered = currentFilter === "all"
    ? projects
    : projects.filter(p => p.category === currentFilter);
  const count = expanded ? filtered.length : showProjects;
  filtered.slice(0, count).forEach(project => {
    const div = document.createElement('div');
    div.className = "bg-white border border-gray-200 rounded-lg p-6 shadow flex flex-col card-anim";
    div.innerHTML = `
      <img src="${project.img}" alt="${project.title}" class="w-full h-40 object-cover rounded mb-4">
      <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
      <p class="text-gray-600 mb-4">${project.desc}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        ${project.tags.map(tag => `<span class="px-3 py-1 bg-purple-50 text-gray-500 italic rounded-full text-sm font-medium">${tag}</span>`).join('')}
      </div>
      <div class="flex gap-4 mt-auto">
        <a href="${project.demo}" class="text-purple-700 hover:underline" target="_blank">Live Demo</a>
        <a href="${project.github}" class="text-purple-700 hover:underline" target="_blank">GitHub</a>
      </div>
    `;
    projectsList.appendChild(div);
  });
  if (filtered.length <= showProjects) {
    viewMoreBtn.style.display = 'none';
  } else {
    viewMoreBtn.style.display = 'inline-block';
    viewMoreBtn.textContent = expanded ? 'View Less' : 'View More';
  }
}

// Filter button logic
document.querySelectorAll('.project-filter').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.project-filter').forEach(b => b.classList.remove('bg-purple-700', 'text-white', 'active'));
    this.classList.add('bg-purple-700', 'text-white', 'active');
    currentFilter = this.dataset.filter;
    expanded = false;
    renderProjects();
  });
});

// View more/less logic
viewMoreBtn.onclick = function () {
  expanded = !expanded;
  renderProjects();
};

renderProjects();



// --- Chatbot ---
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotForm = document.getElementById('chatbot-form');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotMessages = document.getElementById('chatbot-messages');

chatbotToggle.onclick = () => chatbotWindow.classList.toggle('hidden');
chatbotClose.onclick = () => chatbotWindow.classList.add('hidden');
chatbotForm.onsubmit = function (e) {
  e.preventDefault();
  const msg = chatbotInput.value.trim();
  if (!msg) return;
  addChatMessage('You', msg, 'right');
  chatbotInput.value = '';
  setTimeout(() => {
    addChatMessage('Bot', getBotReply(msg), 'left');
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }, 600);
};
function addChatMessage(sender, text, align) {
  const div = document.createElement('div');
  div.className = `mb-2 flex ${align === 'right' ? 'justify-end' : 'justify-start'}`;
  div.innerHTML = `<div class="px-3 py-2 rounded-lg ${align === 'right' ? 'bg-purple-700 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white'} max-w-[70%]">${text}</div>`;
  chatbotMessages.appendChild(div);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}
function getBotReply(msg) {
  msg = msg.toLowerCase();
  if (msg.includes('hello') || msg.includes('hi')) return "Hello! How can I help you today?";
  if (msg.includes('project')) return "You can see my projects in the Projects section above!";
  if (msg.includes('contact')) return "You can contact me using the form in the Contact section.";
  if (msg.includes('skills')) return "My top skills are JavaScript, React, and Node.js!";
  return "I'm here to help! Ask me anything about my portfolio.";
}

