const header = document.getElementById('siteHeader');
const heroTitle = document.querySelector('.hero-title');
const heroSubtitle = document.querySelector('.hero-subtitle');
const langPicker = document.getElementById('langPicker');
const langTrigger = document.getElementById('langTrigger');
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobileDrawer = document.getElementById('mobileDrawer');
const mobileMenuIconTop = document.getElementById('mobileMenuIconTop');
const mobileMenuIconMiddle = document.getElementById('mobileMenuIconMiddle');
const mobileMenuIconBottom = document.getElementById('mobileMenuIconBottom');
const mobileLinks = document.querySelectorAll('.mobile-nav a, .mobile-drawer-bottom a');
const scheduleTrack = document.querySelector('.schedule-track');
const scheduleControls = document.getElementById('scheduleControls');
const schedulePrev = document.getElementById('schedulePrev');
const scheduleNext = document.getElementById('scheduleNext');
const initialThreshold = Math.max(120, window.innerHeight * 0.18);
let mobileMenuForcedCompact = false;

const onScroll = () => {
  if (window.scrollY > initialThreshold) {
    header.classList.add('is-compact');
  } else {
    header.classList.remove('is-compact');
  }
};

const fitSingleLine = (element, maxSize, minSize) => {
  if (!element) return;
  let size = maxSize;
  element.style.fontSize = `${size}px`;

  while (element.scrollWidth > element.clientWidth && size > minSize) {
    size -= 1;
    element.style.fontSize = `${size}px`;
  }
};

const fitHeroText = () => {
  if (window.innerWidth <= 640) {
    if (heroTitle) heroTitle.style.fontSize = '';
    if (heroSubtitle) heroSubtitle.style.fontSize = '';
    return;
  }
  fitSingleLine(heroTitle, 74, 18);
  fitSingleLine(heroSubtitle, 19, 11);
};

const toggleLangMenu = () => {
  if (!langPicker || !langTrigger) return;
  const isOpen = langPicker.classList.toggle('is-open');
  langTrigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
};

const closeLangMenu = () => {
  if (!langPicker || !langTrigger) return;
  langPicker.classList.remove('is-open');
  langTrigger.setAttribute('aria-expanded', 'false');
};

const openMobileMenu = () => {
  if (!mobileOverlay || !mobileDrawer) return;
  if (window.scrollY <= initialThreshold) mobileMenuForcedCompact = true;
  document.body.classList.add('mobile-menu-open');
  header.classList.add('is-compact');
  updateMobileMenuOffset();
  mobileOverlay.classList.add('is-open');
  mobileDrawer.classList.add('is-open');
  mobileDrawer.setAttribute('aria-hidden', 'false');
  if (mobileMenuButton) {
    mobileMenuButton.classList.add('is-open');
    mobileMenuButton.setAttribute('aria-label', 'Tancar menú');
    mobileMenuButton.setAttribute('aria-expanded', 'true');
  }
  setMobileMenuIcon(true);
  document.body.style.overflow = 'hidden';
};

const closeMobileMenu = () => {
  if (!mobileOverlay || !mobileDrawer) return;
  mobileOverlay.classList.remove('is-open');
  mobileDrawer.classList.remove('is-open');
  mobileDrawer.setAttribute('aria-hidden', 'true');
  if (mobileMenuButton) {
    mobileMenuButton.classList.remove('is-open');
    mobileMenuButton.setAttribute('aria-label', 'Obrir menú');
    mobileMenuButton.setAttribute('aria-expanded', 'false');
  }
  setMobileMenuIcon(false);
  document.body.style.overflow = '';
  document.body.classList.remove('mobile-menu-open');
  if (mobileMenuForcedCompact && window.scrollY <= initialThreshold) {
    header.classList.remove('is-compact');
  }
  mobileMenuForcedCompact = false;
};

const toggleMobileMenu = () => {
  if (!mobileDrawer) return;
  if (mobileDrawer.classList.contains('is-open')) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
};

const setMobileMenuIcon = (isOpen) => {
  if (!mobileMenuIconTop || !mobileMenuIconMiddle || !mobileMenuIconBottom) return;
  if (isOpen) {
    mobileMenuIconTop.setAttribute('d', 'M6 6l12 12');
    mobileMenuIconMiddle.setAttribute('d', '');
    mobileMenuIconBottom.setAttribute('d', 'M18 6L6 18');
  } else {
    mobileMenuIconTop.setAttribute('d', 'M4 7h16');
    mobileMenuIconMiddle.setAttribute('d', 'M4 12h16');
    mobileMenuIconBottom.setAttribute('d', 'M4 17h16');
  }
};

const updateMobileMenuOffset = () => {
  if (!header) return;
  document.documentElement.style.setProperty('--mobile-header-offset', `${header.offsetHeight}px`);
};

const updateScheduleControls = () => {
  if (!scheduleTrack || !scheduleControls || !schedulePrev || !scheduleNext) return;
  const maxScroll = scheduleTrack.scrollWidth - scheduleTrack.clientWidth;
  const hasOverflow = maxScroll > 8;
  scheduleControls.classList.toggle('is-visible', hasOverflow);

  if (!hasOverflow) return;

  schedulePrev.disabled = scheduleTrack.scrollLeft <= 8;
  scheduleNext.disabled = scheduleTrack.scrollLeft >= maxScroll - 8;
};

const scrollScheduleBy = (direction) => {
  if (!scheduleTrack) return;
  const amount = Math.max(220, Math.round(scheduleTrack.clientWidth * 0.82));
  scheduleTrack.scrollBy({ left: amount * direction, behavior: 'smooth' });
};

fitHeroText();
onScroll();
updateScheduleControls();
updateMobileMenuOffset();
setMobileMenuIcon(false);

window.addEventListener('resize', () => {
  fitHeroText();
  updateScheduleControls();
  updateMobileMenuOffset();
});
window.addEventListener('scroll', onScroll, { passive: true });
if (scheduleTrack) scheduleTrack.addEventListener('scroll', updateScheduleControls, { passive: true });

if (langTrigger) {
  langTrigger.addEventListener('click', toggleLangMenu);
  document.addEventListener('click', (event) => {
    if (!langPicker) return;
    if (!langPicker.contains(event.target)) closeLangMenu();
  });
}

if (mobileMenuButton) mobileMenuButton.addEventListener('click', toggleMobileMenu);
if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);
mobileLinks.forEach((link) => link.addEventListener('click', closeMobileMenu));
if (schedulePrev) schedulePrev.addEventListener('click', () => scrollScheduleBy(-1));
if (scheduleNext) scheduleNext.addEventListener('click', () => scrollScheduleBy(1));
