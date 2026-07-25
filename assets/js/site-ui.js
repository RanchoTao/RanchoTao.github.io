(function () {
  'use strict';

  var root = document.documentElement;
  var themeButton = document.querySelector('[data-theme-toggle]');
  var menuButton = document.querySelector('[data-menu-toggle]');
  var navigation = document.querySelector('[data-site-navigation]');

  function setTheme(theme, persist) {
    root.setAttribute('data-theme', theme);
    root.style.colorScheme = theme;
    if (themeButton) {
      themeButton.setAttribute('aria-label', theme === 'dark' ? themeButton.dataset.labelLight : themeButton.dataset.labelDark);
    }
    var themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) themeMeta.setAttribute('content', theme === 'dark' ? '#0b0f14' : '#f8fafc');
    if (persist) {
      try { localStorage.setItem('site-theme', theme); } catch (error) { /* Storage may be unavailable. */ }
    }
  }

  if (themeButton) {
    setTheme(root.getAttribute('data-theme') || 'light', false);
    themeButton.addEventListener('click', function () {
      setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true);
    });
  }

  function closeMenu() {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', menuButton.dataset.labelOpen);
    navigation.classList.remove('is-open');
  }

  if (menuButton && navigation) {
    menuButton.addEventListener('click', function () {
      var willOpen = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(willOpen));
      menuButton.setAttribute('aria-label', willOpen ? menuButton.dataset.labelClose : menuButton.dataset.labelOpen);
      navigation.classList.toggle('is-open', willOpen);
    });

    navigation.addEventListener('click', function (event) {
      if (event.target.closest('a')) closeMenu();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeMenu();
        menuButton.focus();
      }
    });

    window.addEventListener('resize', function () {
      if (window.matchMedia('(min-width: 769px)').matches) closeMenu();
    });
  }
}());
