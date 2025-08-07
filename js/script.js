// Navbar toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('active');
};

// Auto-close nav when a link is clicked
document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('active');
  });

  document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    navbar.classList.remove('active');
    menuIcon.classList.remove('active');
  }
});

});


// Sticky header & active nav highlight
window.onscroll = () => {
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove('active'));
      document.querySelector(`header nav a[href*="${id}"]`)?.classList.add('active');
    }
  });
};

// Scroll Reveal Animations (using ScrollReveal library)
ScrollReveal({
  // reset: true, // Optional: uncomment to re-animate on scroll back
  distance: '80px',
  duration: 2000,
  delay: 200
});

// Reveal from top
ScrollReveal().reveal('.home-content, .about-content, .heading', { origin: 'top' });

// Reveal from bottom
ScrollReveal().reveal('.home-image, .about-img, .exp-container, .proj-box, .ed-box, .sk-box, .footer-content', { origin: 'bottom' });

// Reveal from left
ScrollReveal().reveal('.home-content h1', { origin: 'left' });

// Reveal from right
ScrollReveal().reveal('.home-content p', { origin: 'right' });

// Typed.js Effect — for animated typing text
const typed = new Typed('.multiple-text', {
  strings: [
    'Certified Frontend Developer',
    'Learning Backend Development',
    'BSCS Student at Virtual University'
  ],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 700,
  loop: true
});

// Contact Form 
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const submitBtn = form.querySelector('button');

    submitBtn.disabled = true;
    submitBtn.innerText = 'Sending...';

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        window.location.href = "thankyou.html";
      } else {
        alert('Oops! Something went wrong. Please try again.');
        submitBtn.disabled = false;
        submitBtn.innerText = 'Send Message';
      }
    } catch (error) {
      alert('Error: Form not submitted.');
      submitBtn.disabled = false;
      submitBtn.innerText = 'Send Message';
    }
  });

  //Contact Form Animation 
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.animate-up').forEach(el => {
    observer.observe(el);
  });
