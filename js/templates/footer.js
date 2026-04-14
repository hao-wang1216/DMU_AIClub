/**
 * DMU AI Club — Footer Template
 */

/**
 * Render footer HTML.
 * @param {string} tagline - subtitle text for the footer
 * @returns {string} HTML string
 */
export function renderFooter(tagline) {
  return `<footer class="site-footer">
    <div class="container footer-wrap">
      <p>© 2026 DMU AI Community</p>
      <p>${tagline}</p>
    </div>
  </footer>`;
}
