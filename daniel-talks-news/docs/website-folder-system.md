# Website Folder System

Use this structure for creator/news websites that need quick revision and easy Netlify deployment.

## Recommended Layout

- `index.html`, `styles.css`, `script.js`: the live editable version for browser preview.
- `assets/`: local image and media assets referenced by the editable site.
- `netlify-drop/`: clean deploy copy with only files Netlify needs.
- `releases/`: dated or named ZIP exports ready for drag-and-drop deployment.
- `docs/`: notes for revision history, design direction, and deployment instructions.

## Revision Flow

1. Edit the root working files.
2. Preview `index.html` in the browser.
3. Copy the changed files into `netlify-drop/`.
4. Rebuild a ZIP into `releases/`.
5. Drag the latest ZIP into Netlify Drop.

## Current Project

- Site: Daniel Talks News
- Host identity: Danny Williams
- Location treatment: Manchester, UK
- Deploy package: `releases/daniel-talks-news-netlify.zip`
