/**
 * DMU AI Club — Nav Templates
 */

const NAV_ICONS = {
  research: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>`,
  learning: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.5 4.78c0 1.194.224 2.347.616 3.395.393.992.92 1.86 1.556 2.564a25.25 25.25 0 0 0 4.78.5c.85-.004 1.705-.08 2.539-.214l-.183-1.043a9.492 9.492 0 0 1-1.484-1.01l.184-1.09a7.428 7.428 0 0 0 1.01-1.484l-1.042-.183a60.43 60.43 0 0 0-.214-2.54c.003-.2.003-.4.003-.603 0-.2-.001-.4-.003-.602a59.77 59.77 0 0 0 .214-2.539 9.483 9.483 0 0 1 1.484-1.01l-1.042-.183a7.428 7.428 0 0 0 1.01-1.484l1.09.184a9.492 9.492 0 0 1 1.484-1.01l.183-1.043a60.43 60.43 0 0 0-2.539-.214 60.438 60.438 0 0 0-.5-4.78 60.438 60.438 0 0 0-.5-4.78 60.43 60.43 0 0 0-2.539-.214 60.43 60.43 0 0 0-2.539.214 9.492 9.492 0 0 1-1.484 1.01l1.042.183a7.428 7.428 0 0 0-1.01 1.484l-1.09-.184a9.492 9.492 0 0 1-1.484-1.01l.183 1.043a60.43 60.43 0 0 0 .214 2.539 60.438 60.438 0 0 0 .5 4.78 60.438 60.438 0 0 0 .5 4.78c.067.33.119.662.152 1z" /></svg>`,
  members: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>`,
  collab: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>`,
  news: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" /></svg>`,
  chevronDown: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>`
};

/**
 * Render desktop nav HTML from window.DMU_NAV config.
 * @param {string} currentPage - current page filename
 * @returns {string} HTML string
 */
export function renderDesktopNav(currentPage) {
  const cfg = window.DMU_NAV;
  if (!cfg) return '';

  let html = '';
  cfg.desktop.forEach((item) => {
    const isActive = item.page === currentPage;
    if (item.subs.length > 0) {
      html += `<div class="nav-item">` +
        `<a class="nav-link${isActive ? ' active' : ''}" href="${item.href}" data-page="${item.page}">` +
          (item.icon || '') + item.label +
        `</a>` +
        `<div class="nav-dropdown">`;
      item.subs.forEach((sub) => {
        html += `<a href="${sub.href}">${sub.label}</a>`;
      });
      html += `</div></div>`;
    } else {
      html += `<a class="nav-link${isActive ? ' active' : ''}" href="${item.href}" data-page="${item.page}">` +
        (item.icon || '') + item.label +
      `</a>`;
    }
  });
  return html;
}

/**
 * Render mobile nav HTML from window.DMU_NAV config.
 * @param {string} currentPage - current page filename
 * @returns {string} HTML string
 */
export function renderMobileNav(currentPage) {
  const cfg = window.DMU_NAV;
  if (!cfg) return '';

  let html = `<div class="nav-mobile-panel">` +
    `<div class="nav-mobile-header">` +
      `<a class="brand" href="./index.html">` +
        `<span class="brand-mark">${cfg.brand.mark}</span>` +
        `<span class="brand-text">${cfg.brand.shortText}</span>` +
      `</a>` +
      `<button class="nav-mobile-close" id="navMobileClose" aria-label="关闭导航">` +
        NAV_ICONS.close +
      `</button>` +
    `</div>` +
    `<ul class="nav-mobile-links">`;

  cfg.desktop.forEach((item) => {
    const isActive = item.page === currentPage;
    if (item.subs.length > 0) {
      html += `<li>` +
        `<a class="nav-mobile-link nav-mobile-toggle${isActive ? ' active' : ''}" href="#" data-page="${item.page}">` +
          item.label +
          `<svg class="nav-mobile-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>` +
        `</a>` +
        `<ul class="nav-mobile-sub">`;
      item.subs.forEach((sub) => {
        html += `<li><a href="${sub.href}">${sub.label}</a></li>`;
      });
      html += `</ul></li>`;
    } else {
      html += `<li><a class="nav-mobile-link${isActive ? ' active' : ''}" href="${item.href}" data-page="${item.page}">${item.label}</a></li>`;
    }
  });

  html += `</ul></div>`;
  return html;
}
