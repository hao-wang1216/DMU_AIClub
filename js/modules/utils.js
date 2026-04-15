/**
 * DMU AI Club — Utility Functions
 */

/**
 * Get the current page filename from the URL.
 * @returns {string} e.g. "index.html", "research.html"
 */
export function getCurrentPage() {
  const path = window.location.pathname;
  const page = path.split('/').pop() || 'index.html';
  if (page === '') return 'index.html';
  return page;
}

/**
 * Run a function when the DOM is ready.
 * @param {Function} fn
 */
export function ready(fn) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    fn();
  }
}

/**
 * Set up scroll-based header state (adds 'scrolled' class).
 */
export function scrollHeaderHandler() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        header.classList.toggle('scrolled', window.scrollY > 20);
        ticking = false;
      });
      ticking = true;
    }
  });
}
