/**
 * DMU AI Club — Main Application Entry
 */

import { initNav } from './modules/nav.js';
import { scrollHeaderHandler } from './modules/utils.js';
import { renderFooter } from './templates/footer.js';
import { init as initIndex } from './pages/index.js';
import { init as initResearch } from './pages/research.js';
import { init as initMembers } from './pages/members.js';
import { init as initLearning } from './pages/learning.js';
import { init as initCollab } from './pages/collab.js';

/** @type {Record<string, { tagline: string, init: Function }>} */
const PAGE_META = {
  'index.html':    { tagline: 'Portal Homepage',  init: initIndex },
  'research.html': { tagline: 'Research & Competitions', init: initResearch },
  'members.html':  { tagline: 'Members Homepage', init: initMembers },
  'learning.html': { tagline: 'Learning Path',     init: initLearning },
  'collab.html':   { tagline: 'Join Us',          init: initCollab },
};

/**
 * Render the footer into the placeholder div.
 */
function renderFooterIntoPage(tagline) {
  const placeholder = document.querySelector('.site-footer-placeholder');
  if (placeholder) {
    placeholder.outerHTML = renderFooter(tagline);
  }
}

function init() {
  // Determine current page
  const path = window.location.pathname;
  const page = path.split('/').pop() || 'index.html';
  const meta = PAGE_META[page] || PAGE_META['index.html'];

  // Render footer
  renderFooterIntoPage(meta.tagline);

  // Initialize navigation
  initNav();

  // Initialize scroll header
  scrollHeaderHandler();

  // Initialize page-specific logic
  meta.init();
}

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
