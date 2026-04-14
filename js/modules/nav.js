/**
 * DMU AI Club — Nav Rendering Module
 */

import { renderDesktopNav, renderMobileNav } from '../templates/nav.js';
import { getCurrentPage } from './utils.js';

/**
 * Initialize the navigation: render desktop + mobile nav, attach event listeners.
 */
export function initNav() {
  const cfg = window.DMU_NAV;
  if (!cfg) return;

  const currentPage = getCurrentPage();

  // Render desktop nav
  const desktopNav = document.querySelector('.nav-links');
  if (desktopNav) {
    desktopNav.innerHTML = renderDesktopNav(currentPage);
  }

  // Render mobile nav
  const navMobile = document.getElementById('navMobile');
  if (navMobile) {
    navMobile.innerHTML = renderMobileNav(currentPage);

    // Hamburger toggle
    const closeBtn = document.getElementById('navMobileClose');

    function openNav() {
      navMobile.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeNav() {
      navMobile.classList.remove('open');
      document.body.style.overflow = '';
    }

    document.getElementById('menuBtn')?.addEventListener('click', openNav);
    closeBtn?.addEventListener('click', closeNav);
    navMobile.addEventListener('click', (e) => {
      if (e.target === navMobile) closeNav();
    });

    // Close on non-toggle link clicks
    navMobile.querySelectorAll('a:not(.nav-mobile-toggle)').forEach((link) => {
      link.addEventListener('click', closeNav);
    });

    // Accordion sub-menus
    navMobile.querySelectorAll('.nav-mobile-toggle').forEach((toggle) => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const sub = toggle.nextElementSibling;
        const arrow = toggle.querySelector('.nav-mobile-arrow');
        if (sub?.classList.contains('nav-mobile-sub')) {
          sub.classList.toggle('open');
          arrow?.classList.toggle('open');
        }
      });
    });
  }
}
