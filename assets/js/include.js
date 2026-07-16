/**
 * =============================================================================
 *  SECTION LOADER
 * =============================================================================
 * Finds every element with a `data-include="path/to/partial.html"` attribute,
 * fetches that file, and injects it in place. This lets each section of the
 * page live in its own small HTML file under /sections, while still working
 * as a single page.
 *
 * IMPORTANT: this uses fetch(), so the site must be viewed through a local
 * or real web server (http://...), not opened directly as a file:// URL —
 * browsers block fetch() of local files for security reasons. Any static
 * host (GitHub Pages, Netlify, Vercel, `python3 -m http.server`, etc.) works.
 *
 * We also hold Alpine.js back from starting until every partial has been
 * injected (via `window.deferLoadingAlpine`, a hook Alpine's CDN build
 * checks for), otherwise Alpine would scan the page before the sections
 * exist and none of the x-data/x-for bindings would run.
 * =============================================================================
 */

window.deferLoadingAlpine = function (startAlpine) {
    window._startAlpine = startAlpine;
};

async function loadIncludes() {
    const nodes = Array.from(document.querySelectorAll('[data-include]'));

    await Promise.all(nodes.map(async (node) => {
        const path = node.getAttribute('data-include');
        try {
            const res = await fetch(path);
            if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
            node.innerHTML = await res.text();
        } catch (err) {
            node.innerHTML = `<div style="padding:2rem;font-family:monospace;font-size:12px;color:#b91c1c;background:#fee2e2;border-radius:8px;">
                Failed to load section: ${path}<br>${err.message}<br>
                (Are you opening this file directly instead of via a local web server?)
            </div>`;
            console.error('Include failed:', path, err);
        }
    }));
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadIncludes();

    // Icons need to run after every partial is in the DOM
    if (window.lucide) lucide.createIcons();

    // Now it's safe to let Alpine scan the fully-assembled page
    if (window._startAlpine) window._startAlpine();
});
