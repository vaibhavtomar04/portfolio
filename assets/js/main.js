/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    // Remove active class from all tab contents
    tabContents.forEach(content => content.classList.remove('filters__active'));
    // Add active class to selected tab content
    target.classList.add('filters__active');

    // Remove active class from all tabs
    tabs.forEach(t => t.classList.remove('filter-tab-active'));
    // Add active class to clicked tab
    tab.classList.add('filter-tab-active');
  });
});

/*=============== DARK / LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Get previously selected theme and icon from localStorage
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Functions to get current theme and icon
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// Apply previously selected theme and icon
if (selectedTheme) {
  document.body.classList.toggle(darkTheme, selectedTheme === 'dark');
  themeButton.classList.toggle(iconTheme, selectedIcon === 'ri-moon-line');
}

// Toggle theme and icon on button click
themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  
  // Save current theme and icon to localStorage
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400
});

// Reveal elements with staggered delays
sr.reveal('.profile__border');
sr.reveal('.profile__name', { delay: 500 });
sr.reveal('.profile__profession', { delay: 600 });
sr.reveal('.profile__social', { delay: 700 });
sr.reveal('.profile__info-group', { interval: 100, delay: 700 });
sr.reveal('.profile__buttons', { delay: 800 });
sr.reveal('.filters__content', { delay: 900 });
sr.reveal('.filters', { delay: 1000 });
