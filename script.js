// ====== NAVIGATION HANDLER (FINAL FIX) ======
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const homeSection = document.querySelector('.home-section');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const page = link.getAttribute('data-page');

    // Remove active highlight from all links
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    // Hide all pages first
    pages.forEach(p => p.classList.remove('active'));
    pages.forEach(p => (p.style.display = 'none'));

    // Hide home by default
    homeSection.style.display = 'none';

    // Show the selected page
    if (page === 'home') {
      // Show home section again
      homeSection.style.display = 'flex';
    } else {
      // Show the target page (About, Services, Books, Contact)
      const activePage = document.getElementById(page);
      if (activePage) {
        activePage.style.display = 'block';
        activePage.classList.add('active');
      }
    }
  });
});


// ====== MODALS (HOME + ABOUT) ======
const homeExplore = document.getElementById('homeExplore');   // Explore More button (Home)
const aboutExplore = document.getElementById('aboutExplore'); // Learn More button (About)

const eventsModal = document.getElementById('eventsModal');   // Modal for Home
const aboutModal = document.getElementById('aboutModal');     // Modal for About

const closeButtons = document.querySelectorAll('.close-btn'); // All X buttons in modals


// --- OPEN MODALS ---
if (homeExplore && eventsModal) {
  homeExplore.addEventListener('click', e => {
    e.preventDefault();
    eventsModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
}

if (aboutExplore && aboutModal) {
  aboutExplore.addEventListener('click', e => {
    e.preventDefault();
    aboutModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
}


// --- CLOSE MODALS (X button) ---
closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});


// --- CLOSE MODAL WHEN CLICKING OUTSIDE ---
window.addEventListener('click', e => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});


// ====== OPTIONAL: AUTO-REDIRECT WHEN "Explore More" ACTS AS LINK ======
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', e => {
    if (btn.dataset.page === 'about') {
      e.preventDefault();
      document.querySelector('.nav-link[data-page="about"]').click();
    }
  });
});


// ===== BOOK CATEGORY SWITCHING =====
const categoryBtns = document.querySelectorAll('.category-btn');
const bookContainers = document.querySelectorAll('.book-container');

categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // remove active sa buttons
    categoryBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // show selected category
    const category = btn.getAttribute('data-category');
    bookContainers.forEach(container => {
      container.classList.remove('active');
      if (container.id === category) {
        container.classList.add('active');
      }
    });
  });
});

// Modal open
const authModal = document.getElementById('authModal');
document.querySelectorAll('.auth-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    authModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
});

// Close modal
document.querySelector('.close-btn').addEventListener('click', () => {
  authModal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

window.addEventListener('click', e => {
  if (e.target === authModal) {
    authModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

// Switch forms
function showForm(form) {
  const loginForm = document.querySelector('.login-form');
  const signupForm = document.querySelector('.signup-form');
  const loginBtn = document.querySelector('.login-btn');
  const signupBtn = document.querySelector('.signup-btn');

  if(form === 'login') {
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
    loginBtn.classList.add('active');
    signupBtn.classList.remove('active');
  } else {
    loginForm.classList.remove('active');
    signupForm.classList.add('active');
    loginBtn.classList.remove('active');
    signupBtn.classList.add('active');
  }
}
