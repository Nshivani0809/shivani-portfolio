document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');
  const root = document.documentElement;

  toggleBtn.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    root.setAttribute('data-theme', isDark ? 'light' : 'dark');
    icon.classList.toggle('fa-moon', !isDark);
    icon.classList.toggle('fa-sun', isDark);
  });
});
const roles = ["Java Developer", "Backend Engineer", "Spring Boot Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
const typedElement = document.getElementById("typed-role");

function type() {
  if (!typedElement) return;

  const role = roles[roleIndex];
  if (charIndex < role.length) {
    typedElement.textContent += role.charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  const role = roles[roleIndex];
  if (charIndex > 0) {
    typedElement.textContent = role.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 100);
  }
}

document.addEventListener("DOMContentLoaded", type);
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-tab");

    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(target).classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-btn");
  const panes = document.querySelectorAll(".tab-pane");

  let currentIndex = 0;
  let autoSwitchInterval;
  let pauseTimeout;

  function switchTab(index) {
    tabs.forEach((tab, i) => {
      tab.classList.toggle("active", i === index);
      panes[i].classList.toggle("active", i === index);
    });
    currentIndex = index;
  }

  function startAutoSwitch() {
    autoSwitchInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % tabs.length;
      switchTab(currentIndex);
    }, 5000);
  }

  tabs.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      clearInterval(autoSwitchInterval);
      clearTimeout(pauseTimeout);
      switchTab(index);
      pauseTimeout = setTimeout(startAutoSwitch, 300000); // 5 min pause
    });
  });

  switchTab(0);  // show first tab on load
  startAutoSwitch();
});

