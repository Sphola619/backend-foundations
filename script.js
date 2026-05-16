function simulateRequest(method) {
  let response;

  if (method === "GET") {
    response = {
      message: "Fetching users...",
      data: ["Sipho", "John", "Sarah"]
    };
  }

  if (method === "POST") {
    response = {
      message: "User created successfully",
      user: "New User"
    };
  }

  if (method === "PUT") {
    response = {
      message: "User updated successfully"
    };
  }

  if (method === "DELETE") {
    response = {
      message: "User deleted"
    };
  }

  document.getElementById("output").textContent =
    JSON.stringify(response, null, 2);
}

// ── Hamburger nav toggle ──────────────────────────────────

const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a link is tapped (mobile UX)
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}