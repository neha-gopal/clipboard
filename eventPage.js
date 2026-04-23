# Clipboard Chrome Extension

A lightweight Chrome extension that lets users save highlighted text from webpages and revisit it later in a simple clipboard history view.

## What changed
This version keeps the original structure of the project, but makes a few small improvements so it is easier to upload to GitHub and present as a polished project:
- migrated the extension from Manifest V2 to Manifest V3
- stores multiple saved clips instead of only one
- saves clips in `chrome.storage.local`
- adds timestamps for each saved item
- supports search, delete, copy, and clear-all actions in the popup

## Files
- `manifest.json` – extension configuration
- `eventPage.js` – background service worker that saves selected text
- `newtab.html` – popup UI
- `popout.js` – popup logic for rendering and managing clips

## How to run
1. Download or clone this repository.
2. Open `chrome://extensions/` in Chrome.
3. Turn on **Developer mode**.
4. Click **Load unpacked**.
5. Select this project folder.

## How to use
1. Highlight text on any webpage.
2. Right click and choose **Save to Clipboard**.
3. Open the extension popup to view saved clips.
4. Search, copy, delete, or clear saved items.

## Tech
- JavaScript
- HTML/CSS
- Chrome Extensions API
- Chrome Storage API
