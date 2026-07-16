# Maulina / Builds — site structure

Static site, no build step, but split up so it's easy to edit and grow into
more pages later.

```
index.html                 ← homepage shell, just lists which sections to load
page-template.html         ← copy this to start a new page
assets/
  css/style.css            ← all custom CSS (colors mostly live in tailwind.config.js)
  js/
    tailwind.config.js     ← Tailwind theme (colors, etc.)
    data.js                ← ALL editable content: text, cards, projects, notes...
    app.js                 ← Alpine.js behavior (state + functions), no content
    include.js             ← loads the section files into the page, don't edit
sections/
  nav.html, header.html, hero.html, current-chapter.html,
  featured-builds.html, how-i-build.html, project-library.html,
  tiny-experiments.html, playground.html, about.html, skills.html,
  now.html, notes.html, contact.html, footer.html
```

## The 90% edit: `assets/js/data.js`

Almost everything on the page — hero text, timeline entries, project cards,
skills, notes, the "now" list, contact info, footer — is a JavaScript object
or array in this one file. To change text, edit the string. To add a project,
copy an existing object in the array and tweak it. To remove a card, delete
its object. No HTML editing needed for these.

Example — adding a new "Tiny Experiment" card:

```js
tinyExperiments: [
    { tag: '⏳ 30m hack', index: '01/10', title: 'Quick Invoice Generator', desc: '...' },
    // add a new one right here:
    { tag: '🧪 New hack', index: '07/10', title: 'My New Thing', desc: 'What it does.' },
],
```

## Changing layout/styling of a section

Open the matching file in `/sections`. Each one is a small, self-contained
HTML file (with Tailwind utility classes) that only handles *how* a section
looks, not the content — content still comes from `data.js` via
`x-text="data.xxx"` bindings. This means you can freely restyle a section
without breaking its data.

Global look-and-feel (fonts, base colors, scrollbar, etc.) lives in
`assets/css/style.css` and `assets/js/tailwind.config.js`.

## Reordering or removing a whole section

Edit the list of `<div data-include="sections/....html"></div>` lines in
`index.html`. Delete a line to remove a section, reorder lines to reorder
sections, or point to a new file to swap one in.

## Adding a new page

1. Copy `page-template.html` to a new file, e.g. `projects.html`.
2. Either write the page's content directly inside the `<main>` block, or
   (recommended, keeps things consistent) create a new file in `/sections`
   for it and include it the same way the homepage does:
   ```html
   <div data-include="sections/my-new-page.html"></div>
   ```
3. If the page needs its own data (e.g. a single project's full write-up),
   add a new object/array to `data.js` and reference it in the section file
   the same way the rest of the site does.
4. Link to the new page from wherever makes sense (e.g. add an entry to
   `SITE_DATA.nav` in `data.js` if it should appear in the floating nav, or
   just link to it from a project card / timeline item in `data.js`).

## Important: this needs a local web server to preview

Sections are loaded with `fetch()`, which browsers block when a page is
opened directly as a `file://` URL. To preview locally, run a tiny static
server from the site folder, for example:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Any real static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.)
works fine with no extra configuration — this restriction only affects
double-clicking the HTML file on your own computer.
