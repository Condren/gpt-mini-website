// script.js — simple JS to show interactivity

// 1) Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');
menuBtn.addEventListener('click', () => {
  const open = mainNav.style.display === 'flex';
  mainNav.style.display = open ? '' : 'flex';
  menuBtn.setAttribute('aria-expanded', String(!open));
});

// close menu when a nav link is clicked (good UX)
mainNav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' && window.innerWidth <= 760) {
    mainNav.style.display = '';
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});

// 2) Gallery modal (lightbox)
const grid = document.getElementById('gridGallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalClose = document.getElementById('modalClose');

grid.addEventListener('click', (e) => {
  const img = e.target.closest('img.thumb');
  if (!img) return;
  const full = img.dataset.full;
  modalImg.src = full;
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden', 'false');
});

// close modal
modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
  modalImg.src = '';
});

// close modal when clicking outside image
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modalClose.click();
  }
});

// 3) Simple form validation + feedback (client-side)
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent actual submit for demo
  const name = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  if (!name || !email) {
    formMsg.textContent = 'Please fill in name and email.';
    formMsg.style.color = 'crimson';
    return;
  }
  // emulated send
  formMsg.style.color = 'green';
  formMsg.textContent = 'Thanks — your message was sent (demo).';
  form.reset();
});
