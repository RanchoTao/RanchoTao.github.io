(function () {
  'use strict';

  var header = document.getElementById('site-header');
  if (!header) return;

  var scheduled = false;

  function updateHeader() {
    header.classList.toggle('is-scrolled', window.scrollY > 16);
    scheduled = false;
  }

  function requestHeaderUpdate() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(updateHeader);
  }

  updateHeader();
  window.addEventListener('scroll', requestHeaderUpdate, { passive: true });
}());
