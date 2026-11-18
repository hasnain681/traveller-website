const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

// Switch the sample membership prices between monthly and yearly billing.
const billingToggle = document.querySelector('.toggle-pill');
const billingLabels = document.querySelectorAll('.billing-toggle > span');
billingToggle.addEventListener('click', () => {
  const yearly = billingToggle.classList.toggle('yearly');
  billingLabels[0].classList.toggle('active-label', !yearly);
  billingLabels[2].classList.toggle('active-label', yearly);
  document.querySelectorAll('.price').forEach(price => {
    const amount = yearly ? price.dataset.yearly : price.dataset.monthly;
    price.innerHTML = `$${amount} <small>/ month</small>`;
  });
});

document.querySelector('.subscribe-form').addEventListener('submit', event => {
  event.preventDefault();
  const message = document.querySelector('.form-message');
  message.textContent = 'Thanks for subscribing! (Demo form)';
  event.target.reset();
});

document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', event => event.preventDefault());
});

document.getElementById('year').textContent = new Date().getFullYear();
