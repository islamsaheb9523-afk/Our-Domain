// scroll-to-card.js – reliable scroll after full page load
(function () {
  // Immediately disable browser's automatic scroll restoration
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  const targetId = sessionStorage.getItem('scrollToAnimeId');
  if (!targetId) return;
  sessionStorage.removeItem('scrollToAnimeId');

  function scrollToTarget() {
    const card = document.getElementById(targetId);
    if (!card) {
      console.warn('scroll-to-card: element with id "' + targetId + '" not found');
      return;
    }

    const searchWrapper = document.querySelector('.search-global-wrapper');
    const offset = searchWrapper ? searchWrapper.offsetHeight + 20 : 20;
    const top = card.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: 'smooth' });

    // Flash highlight
    setTimeout(() => {
      card.style.transition = 'box-shadow 0.3s ease';
      card.style.boxShadow = '0 0 0 3px #f97316, 0 0 0 6px rgba(249,115,22,0.3)';
    }, 400); // start after scroll animation

    setTimeout(() => {
      card.style.boxShadow = '';
    }, 2400);
  }

  // Wait for the entire page (images etc) to load, then scroll.
  if (document.readyState === 'complete') {
    // Already fully loaded – a tiny delay ensures layout is stable
    setTimeout(scrollToTarget, 100);
  } else {
    window.addEventListener('load', () => {
      // Let the browser finish any final layout work
      setTimeout(scrollToTarget, 100);
    });
  }
})();