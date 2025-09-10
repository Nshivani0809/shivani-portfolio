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

 document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Create form data object
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('message', message);
            formData.append('_subject', 'New Contact Form Submission from Portfolio');
            formData.append('_template', 'table');
            formData.append('_captcha', 'false');
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';
            submitBtn.disabled = true;
            
            // Send form data using Fetch API
            fetch('https://formsubmit.co/ajax/shivani.noru@gmail.com', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                // Show success message
                showPopup();
                
                // Reset form
                document.getElementById('contactForm').reset();
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error sending your message. Please try again later.');
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
        });
        
        // Show popup function
        function showPopup() {
            document.getElementById('confirmationPopup').classList.add('active');
        }
        
        // Close popup function
        function closePopup() {
            document.getElementById('confirmationPopup').classList.remove('active');
        }
        
        // Close popup when clicking outside
        document.getElementById('confirmationPopup').addEventListener('click', function(e) {
            if (e.target === this) {
                closePopup();
            }
        });