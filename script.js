/* ================================================================
   Hiiclub Agency — script.js
   Hamburger · Header · FAQ · WhatsApp Popup · Scroll
================================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ---- Hamburger Menu ---- */
  var hamburger = document.getElementById('hamburger');
  var navMenu   = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      var open = navMenu.classList.contains('open');
      navMenu.classList.toggle('open');
      hamburger.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', String(!open));
    });

    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---- Sticky Header Shadow ---- */
  var header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  /* ---- Active Nav Link ---- */
  var page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html') || (page === '/' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ---- FAQ Accordion ---- */
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var answer = this.nextElementSibling;
      var wasOpen = answer.classList.contains('open');

      document.querySelectorAll('.faq-a').forEach(function (a) { a.classList.remove('open'); });
      document.querySelectorAll('.faq-q').forEach(function (q) { q.classList.remove('active'); });

      if (!wasOpen) {
        answer.classList.add('open');
        this.classList.add('active');
      }
    });
  });

  /* ---- WhatsApp Channel Popup ---- */
  var WA_KEY     = 'hiiclub_popup_v1';
  var popup      = document.getElementById('wa-popup');
  var overlay    = document.getElementById('popup-overlay');
  var btnClose   = document.getElementById('popup-close');
  var btnLater   = document.getElementById('popup-later');

  function openPopup () {
    if (!popup || !overlay) return;
    popup.classList.add('show');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closePopup () {
    if (!popup || !overlay) return;
    popup.classList.remove('show');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
    try { localStorage.setItem(WA_KEY, '1'); } catch (e) {}
  }

  if (popup) {
    var dismissed = false;
    try { dismissed = !!localStorage.getItem(WA_KEY); } catch (e) {}
    if (!dismissed) {
      setTimeout(openPopup, 3000);
    }
  }

  if (btnClose) btnClose.addEventListener('click', closePopup);
  if (btnLater) btnLater.addEventListener('click', closePopup);
  if (overlay)  overlay.addEventListener('click', closePopup);
  if (popup)    popup.addEventListener('click', function (e) { e.stopPropagation(); });

  /* ---- Smooth Scroll ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var offset = header ? header.offsetHeight + 12 : 80;
      var top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

});
