/**
 * Yogaia BCN — index-v2.js
 * Scroll animations, sticky header, mobile menu, lang picker, schedule carousel
 */

(function () {
  'use strict';

  // ─── Refs ────────────────────────────────────────────────
  const header        = document.getElementById('siteHeader');
  const mobileBtn     = document.getElementById('mobileMenuButton');
  const mobileDrawer  = document.getElementById('mobileDrawer');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const drawerClose   = document.getElementById('mobileDrawerClose');
  const langTrigger   = document.getElementById('langTrigger');
  const langMenu      = document.getElementById('langMenu');
  const schedPrev     = document.getElementById('schedulePrev');
  const schedNext     = document.getElementById('scheduleNext');
  const schedTrack    = document.getElementById('scheduleTrack');

  // ─── Sticky header ───────────────────────────────────────
  const onScroll = () => {
    header.classList.toggle('is-compact', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // ─── Mobile menu ─────────────────────────────────────────
  let mobileOpen = false;
  const firstFocusable = () => mobileDrawer.querySelector('a, button, [tabindex]:not([tabindex="-1"])');

  const openMobile = () => {
    mobileOpen = true;
    mobileDrawer.classList.add('is-open');
    mobileOverlay.classList.add('is-open');
    mobileDrawer.style.display = '';
    mobileOverlay.style.display = '';
    mobileBtn.setAttribute('aria-expanded', 'true');
    mobileDrawer.removeAttribute('aria-hidden');
    mobileOverlay.removeAttribute('aria-hidden');
    document.body.style.overflow = 'hidden';
    // Focus primer element
    setTimeout(() => { if (drawerClose) drawerClose.focus(); }, 50);
  };

  const closeMobile = () => {
    mobileOpen = false;
    mobileDrawer.classList.remove('is-open');
    mobileOverlay.classList.remove('is-open');
    mobileBtn.setAttribute('aria-expanded', 'false');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    mobileOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    mobileBtn.focus();
    setTimeout(() => {
      if (!mobileOpen) {
        mobileDrawer.style.display = '';
        mobileOverlay.style.display = '';
      }
    }, 320);
  };

  if (mobileBtn) mobileBtn.addEventListener('click', () => mobileOpen ? closeMobile() : openMobile());
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobile);
  if (drawerClose) drawerClose.addEventListener('click', closeMobile);

  // Tanca menú mòbil en clicar qualsevol link del drawer
  if (mobileDrawer) {
    mobileDrawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobile));
  }

  // Escape tanca el menú
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (mobileOpen) closeMobile();
      if (langOpen) closeLang();
    }
  });

  // ─── Lang picker ─────────────────────────────────────────
  let langOpen = false;

  const openLang = () => {
    langOpen = true;
    langMenu.classList.add('is-open');
    langTrigger.setAttribute('aria-expanded', 'true');
    langMenu.querySelector('.lang-option')?.focus();
  };

  const closeLang = () => {
    langOpen = false;
    langMenu.classList.remove('is-open');
    langTrigger.setAttribute('aria-expanded', 'false');
  };

  if (langTrigger) {
    langTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      langOpen ? closeLang() : openLang();
    });
  }

  document.addEventListener('click', e => {
    if (langOpen && !document.getElementById('langPicker')?.contains(e.target)) {
      closeLang();
    }
  });

  // ─── Schedule carousel ───────────────────────────────────
  if (schedTrack && schedPrev && schedNext) {
    const getCardWidth = () => {
      const card = schedTrack.querySelector('.schedule-card');
      if (!card) return 0;
      const style = window.getComputedStyle(schedTrack);
      const gap = parseFloat(style.gap) || 14;
      return card.offsetWidth + gap;
    };

    schedNext.addEventListener('click', () => {
      schedTrack.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
    });
    schedPrev.addEventListener('click', () => {
      schedTrack.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
    });

    // Actualitza aria-disabled per indicar límits
    const updateArrows = () => {
      const atStart = schedTrack.scrollLeft <= 4;
      const atEnd   = schedTrack.scrollLeft >= schedTrack.scrollWidth - schedTrack.clientWidth - 4;
      schedPrev.setAttribute('aria-disabled', atStart ? 'true' : 'false');
      schedNext.setAttribute('aria-disabled', atEnd ? 'true' : 'false');
      schedPrev.style.opacity = atStart ? '0.4' : '1';
      schedNext.style.opacity = atEnd   ? '0.4' : '1';
    };
    schedTrack.addEventListener('scroll', updateArrows, { passive: true });
    updateArrows();
  }

  // ─── Reveal on scroll (IntersectionObserver) ─────────────
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: mostra tot directament
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  // ─── Smooth close mobile menu on nav link (hash change) ──
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileOpen) closeMobile();
    });
  });

})();
