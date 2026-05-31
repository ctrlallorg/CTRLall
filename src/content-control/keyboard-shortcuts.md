---
title: Keyboard Shortcuts for Windows, Microsoft Word, Excel and PowerPoint – Ctrl All
layout: layout.liquid
permalink: /content-control/keyboard-shortcuts/
description: Complete keyboard shortcut reference for Windows, Microsoft Word, Excel and PowerPoint. Covers shortcuts for saving, copying, pasting, formatting, find and replace, zoom, and more.
asset_id: ctrlall-keyboard-shortcuts-v1
type: keyboard-shortcuts
tags:
  - ctrlall.org
  - ctrlall
  - ctrl all
  - windows shortcuts
  - microsoft word shorcuts
  - microsoft excel shortcuts
  - microsoft powerpoint shortcuts
  - microsoft outlook shortcuts
  - hotkeys
  - keyboard shortcuts
  - keys
  - buttons
active: content-control
---

<body data-no-difficulty="true">

<h1>Keyboard Shortcuts</h1>

<section class="section-light">

<p>Here's some keyboard shortcuts that are genuinely useful for everyday use.</p>

<!-- Search bar -->
<div style="display:flex; align-items:center; gap:10px; margin:1.5rem 0 0.75rem;">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:#888; flex-shrink:0"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
  <input type="text" id="sc-input" oninput="filterShortcuts()" placeholder="Search shortcuts or descriptions…" style="flex:1; padding:8px 12px; border:1px solid #ccc; border-radius:6px; font-size:15px; outline:none;">
  <span id="sc-count" style="font-size:13px; color:#888; white-space:nowrap;"></span>
</div>

<!-- App filter pills -->
<div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:1.5rem;">
  <button class="sc-pill sc-pill-active" onclick="setPill(this,'')">All</button>
  <button class="sc-pill" onclick="setPill(this,'windows')">
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-1px; margin-right:5px"><path d="M0 3.449 9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.8"/></svg>
    Windows
  </button>
  <button class="sc-pill" onclick="setPill(this,'word')">
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" style="vertical-align:-1px; margin-right:5px"><rect width="24" height="24" rx="3" fill="#2B579A"/><text x="12" y="17" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" font-family="sans-serif">W</text></svg>
    Word
  </button>
  <button class="sc-pill" onclick="setPill(this,'excel')">
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" style="vertical-align:-1px; margin-right:5px"><rect width="24" height="24" rx="3" fill="#217346"/><text x="12" y="17" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" font-family="sans-serif">X</text></svg>
    Excel
  </button>
  <button class="sc-pill" onclick="setPill(this,'powerpoint')">
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" style="vertical-align:-1px; margin-right:5px"><rect width="24" height="24" rx="3" fill="#D24726"/><text x="12" y="17" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" font-family="sans-serif">P</text></svg>
    PowerPoint
  </button>
  <button class="sc-pill" onclick="setPill(this,'outlook')">
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" style="vertical-align:-1px; margin-right:5px"><rect width="24" height="24" rx="3" fill="#0078D4"/><text x="12" y="17" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" font-family="sans-serif">O</text></svg>
    Outlook
  </button>
</div>

<style>
.sc-pill {
  display: inline-flex;
  align-items: center;
  padding: 5px 13px;
  border: 1px solid #ccc;
  border-radius: 20px;
  background: #fff;
  font-size: 13px;
  color: #444;
  cursor: pointer;
}
.sc-pill:hover { background: #f5f5f5; }
.sc-pill-active { background: #1e3a5f; border-color: #1e3a5f; color: #fff; }
.sc-pill-active:hover { background: #16305a; }
.sc-section { }
.sc-section-hidden { display: none; }
</style>

<p>Try testing your knowledge with our Keyboard shortcuts quiz:</p>
<div class="keyboard-shortcuts-quiz-button-area">
    <a href="/content-control/keyboard-shortcuts-quiz/" class="start-button">Keyboard shortcuts quiz</a>
</div>
<br>

<!-- ═══════════════ WINDOWS ═══════════════ -->
<div class="sc-section" data-app="windows">
<h2 id="windows-keyboard-shortcuts">Windows shortcuts</h2>

<div class="preload-images">
  <img src="/assets/images/keyboard shortcuts/Win+D.png" alt="Windows + D shortcut: Shows the desktop (minimise all windows)">
  <img src="/assets/images/keyboard shortcuts/Win+L.png" alt="Windows + L shortcut: Locks the screen">
  <img src="/assets/images/keyboard shortcuts/Win+up.png" alt="Windows + Up Arrow shortcut: Maximises the current window to full screen">
  <img src="/assets/images/keyboard shortcuts/Win+leftright.png" alt="Windows + Left/Right Arrow shortcut: Snaps window to left or right side of the screen">
  <img src="/assets/images/keyboard shortcuts/Win+V.png" alt="Windows + V shortcut: Open Clipboard History">
  <img src="/assets/images/keyboard shortcuts/Win+Shift+S.png" alt="Windows + Shift + S shortcut: Take a screenshot">
  <img src="/assets/images/keyboard shortcuts/Win+Shift+M.png" alt="Windows + Shift + M shortcut: Restore all minimised windows">
  <img src="/assets/images/keyboard shortcuts/Win+U.png" alt="Windows + U shortcut: Open Accessibility settings">
  <img src="/assets/images/keyboard shortcuts/Ctrl+Shift+Esc.png" alt="Ctrl + Shift + Esc shortcut: Open Task Manager">
  <img src="/assets/images/keyboard shortcuts/Win+W.png" alt="Ctrl + W shortcut: Close the current window/tab/document">
  <img src="/assets/images/keyboard shortcuts/Alt+F4.png" alt="Alt + F4 shortcut: Close the current app">
  <img src="/assets/images/keyboard shortcuts/Ctrl+Shift+N.png" alt="Ctrl + Shift + N shortcut: Create a new folder">
  <img src="/assets/images/keyboard shortcuts/Ctrl+T.png" alt="Ctrl + T shortcut: Create a new tab">
  <img src="/assets/images/keyboard shortcuts/Ctrl+Shift+T.png" alt="Ctrl + Shift + T shortcut: Reopen last closed tab">
  <img src="/assets/images/keyboard shortcuts/Win+Ctrl+D.png" alt="Windows + Ctrl + D shortcut: Create a new virtual desktop">
  <img src="/assets/images/keyboard shortcuts/Win+Ctrl+leftright.png" alt="Windows + Ctrl + Left/Right Arrow shortcut: Switch between virtual desktops">
</div>

<table class="shortcut-tables-cursor-icons hover-table" data-app="windows">
  <thead>
    <tr>
      <th>Shortcut</th>
      <th>Purpose/Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Win+D.png' | url }}">
      <td>Windows + D</td>
      <td>Shows the desktop (minimise all windows)</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Win+L.png' | url }}">
      <td>Windows + L</td>
      <td>Locks the screen</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Win+up.png' | url }}">
      <td>Windows + Up Arrow</td>
      <td>Maximises the current window to full screen</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Win+leftright.png' | url }}">
      <td>Windows + Left/Right Arrow</td>
      <td>'Snaps' window to left or right side of the screen</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Win+V.png' | url }}">
      <td>Windows + V</td>
      <td>Open Clipboard History to see everything copied to the virtual clipboard.</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Win+Shift+S.png' | url }}">
      <td>Windows + Shift + S</td>
      <td>Take a screenshot.</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Win+Shift+M.png' | url }}">
      <td>Windows + Shift + M</td>
      <td>Restores all minimised windows.</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Win+U.png' | url }}">
      <td>Windows + U</td>
      <td>Open Accessibility settings.</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+Shift+Esc.png' | url }}">
      <td>Ctrl + Shift + Esc</td>
      <td>Open Task Manager.</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Win+W.png' | url }}">
      <td>Ctrl + W</td>
      <td>Close the current window/tab/document.</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Alt+F4.png' | url }}">
      <td>Alt + F4</td>
      <td>Close the current app.</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+Shift+N.png' | url }}">
      <td>Ctrl + Shift + N</td>
      <td>Create a new folder.</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+T.png' | url }}">
      <td>Ctrl + T</td>
      <td>Create new tab (File Explorer + browsers).</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+Shift+T.png' | url }}">
      <td>Ctrl + Shift + T</td>
      <td>Reopen last closed tab (File Explorer + browsers).</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Win+Ctrl+D.png' | url }}">
      <td>Windows + Ctrl + D</td>
      <td>Create a new virtual desktop.</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Win+Ctrl+leftright.png' | url }}">
      <td>Windows + Ctrl + Left / Right Arrow</td>
      <td>Switch between virtual desktops.</td>
    </tr>
  </tbody>
</table>
</div>


<!-- ═══════════════ WORD ═══════════════ -->
<div class="sc-section" data-app="word">

<div class="preload-images" hidden>
  <img src="/assets/images/keyboard shortcuts/Ctrl+S.png" alt="Ctrl + S shortcut: Save the current file">
  <img src="/assets/images/keyboard shortcuts/Ctrl+N.png" alt="Ctrl + N shortcut: Create a new document">
  <img src="/assets/images/keyboard shortcuts/Ctrl+O.png" alt="Ctrl + O shortcut: Open an existing file">
  <img src="/assets/images/keyboard shortcuts/Ctrl+W.png" alt="Ctrl + W shortcut: Close the document (keeping the application open)">
  <img src="/assets/images/keyboard shortcuts/Ctrl+P.png" alt="Ctrl + P shortcut: Print">
  <img src="/assets/images/keyboard shortcuts/Ctrl+Z.png" alt="Ctrl + Z shortcut: Undo the previous action">
  <img src="/assets/images/keyboard shortcuts/Ctrl+Y.png" alt="Ctrl + Y shortcut: Redo the previous action">
  <img src="/assets/images/keyboard shortcuts/Ctrl+X.png" alt="Ctrl + X shortcut: Cut the selected content">
  <img src="/assets/images/keyboard shortcuts/Ctrl+C.png" alt="Ctrl + C shortcut: Copy the selected content">
  <img src="/assets/images/keyboard shortcuts/Ctrl+V.png" alt="Ctrl + V shortcut: Paste the copied or cut content">
  <img src="/assets/images/keyboard shortcuts/Ctrl+A.png" alt="Ctrl + A shortcut: Select all content">
  <img src="/assets/images/keyboard shortcuts/Ctrl+F.png" alt="Ctrl + F shortcut: Find text">
  <img src="/assets/images/keyboard shortcuts/Ctrl+H.png" alt="Ctrl + H shortcut: Find and Replace text">
  <img src="/assets/images/keyboard shortcuts/Ctrl+L.png" alt="Ctrl + L shortcut: Left align content">
  <img src="/assets/images/keyboard shortcuts/Ctrl+E.png" alt="Ctrl + E shortcut: Centre align content">
  <img src="/assets/images/keyboard shortcuts/Ctrl+R.png" alt="Ctrl + R shortcut: Right align content">
  <img src="/assets/images/keyboard shortcuts/Ctrl+B.png" alt="Ctrl + B shortcut: Bold selected text">
  <img src="/assets/images/keyboard shortcuts/Ctrl+I.png" alt="Ctrl + I shortcut: Italicise selected text">
  <img src="/assets/images/keyboard shortcuts/Ctrl+U.png" alt="Ctrl + U shortcut: Underline selected text">
  <img src="/assets/images/keyboard shortcuts/Ctrl+K.png" alt="Ctrl + K shortcut: Insert hyperlink">
  <img src="/assets/images/keyboard shortcuts/Ctrl++.png" alt="Ctrl + + shortcut: Zoom in">
  <img src="/assets/images/keyboard shortcuts/Ctrl+-.png" alt="Ctrl + - shortcut: Zoom out">
  <img src="/assets/images/keyboard shortcuts/Ctrl+0.png" alt="Ctrl + 0 shortcut: Reset zoom level to 100%">
</div>

<h2 id="word-keyboard-shortcuts">Microsoft Word shortcuts</h2>
<br>
<table class="shortcut-tables-cursor-icons hover-table" data-app="word">
  <colgroup>
    <col style="width: 10%;">
    <col style="width: 90%;">
  </colgroup>
  <thead>
    <tr>
      <th>Shortcut</th>
      <th>Purpose/Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+S.png' | url }}">
      <td>Ctrl + S</td>
      <td>Save the current file</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+N.png' | url }}">
      <td>Ctrl + N</td>
      <td>Create a new document</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+O.png' | url }}">
      <td>Ctrl + O</td>
      <td>Open an existing file</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+W.png' | url }}">
      <td>Ctrl + W</td>
      <td>Close the document (keeping the application open)</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+P.png' | url }}">
      <td>Ctrl + P</td>
      <td>Print</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+Z.png' | url }}">
      <td>Ctrl + Z</td>
      <td>Undo the previous action</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+Y.png' | url }}">
      <td>Ctrl + Y</td>
      <td>Redo the previous action (doesn't work in all instances)</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+X.png' | url }}">
      <td>Ctrl + X</td>
      <td>Cut the selected content</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+C.png' | url }}">
      <td>Ctrl + C</td>
      <td>Copy the selected content to the clipboard</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+V.png' | url }}">
      <td>Ctrl + V</td>
      <td>Paste the copied or cut content from the clipboard</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+A.png' | url }}">
      <td>Ctrl + A</td>
      <td>Select all content</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+F.png' | url }}">
      <td>Ctrl + F</td>
      <td>Find text</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+H.png' | url }}">
      <td>Ctrl + H</td>
      <td>Find and Replace text</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+L.png' | url }}">
      <td>Ctrl + L</td>
      <td>Left align content</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+E.png' | url }}">
      <td>Ctrl + E</td>
      <td>Centre align content</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+R.png' | url }}">
      <td>Ctrl + R</td>
      <td>Right align content</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+B.png' | url }}">
      <td>Ctrl + B</td>
      <td>Bold selected text</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+I.png' | url }}">
      <td>Ctrl + I</td>
      <td>Italicize selected text</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+U.png' | url }}">
      <td>Ctrl + U</td>
      <td>Underline selected text</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+K.png' | url }}">
      <td>Ctrl + K</td>
      <td>Insert hyperlink</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl++.png' | url }}">
      <td>Ctrl + + (plus)</td>
      <td>Zoom in</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+-.png' | url }}">
      <td>Ctrl + - (minus)</td>
      <td>Zoom out</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+0.png' | url }}">
      <td>Ctrl + 0</td>
      <td>Reset zoom level to 100%</td>
    </tr>
  </tbody>
</table>
</div>


<!-- ═══════════════ EXCEL ═══════════════ -->
<div class="sc-section" data-app="excel">

<div class="preload-images" hidden>
  <img src="/assets/images/keyboard shortcuts/Ctrl+S.png" alt="Ctrl + S shortcut: Save the current workbook">
  <img src="/assets/images/keyboard shortcuts/Ctrl+N.png" alt="Ctrl + N shortcut: Create a new workbook">
  <img src="/assets/images/keyboard shortcuts/Ctrl+O.png" alt="Ctrl + O shortcut: Open an existing workbook">
  <img src="/assets/images/keyboard shortcuts/Ctrl+W.png" alt="Ctrl + W shortcut: Close the workbook (keeping the application open)">
  <img src="/assets/images/keyboard shortcuts/Ctrl+P.png" alt="Ctrl + P shortcut: Print">
  <img src="/assets/images/keyboard shortcuts/Ctrl+Z.png" alt="Ctrl + Z shortcut: Undo the previous action">
  <img src="/assets/images/keyboard shortcuts/Ctrl+Y.png" alt="Ctrl + Y shortcut: Redo the previous action">
  <img src="/assets/images/keyboard shortcuts/Ctrl+X.png" alt="Ctrl + X shortcut: Cut the selected content">
  <img src="/assets/images/keyboard shortcuts/Ctrl+C.png" alt="Ctrl + C shortcut: Copy the selected content to the clipboard">
  <img src="/assets/images/keyboard shortcuts/Ctrl+V.png" alt="Ctrl + V shortcut: Paste the copied or cut content from the clipboard">
  <img src="/assets/images/keyboard shortcuts/Ctrl+A.png" alt="Ctrl + A shortcut: Select all cells">
  <img src="/assets/images/keyboard shortcuts/Ctrl+F.png" alt="Ctrl + F shortcut: Find a value">
  <img src="/assets/images/keyboard shortcuts/Ctrl+H.png" alt="Ctrl + H shortcut: Find and Replace values">
  <img src="/assets/images/keyboard shortcuts/Ctrl+E.png" alt="Ctrl + E shortcut: Flash fill">
  <img src="/assets/images/keyboard shortcuts/Ctrl++.png" alt="Ctrl + + shortcut: Zoom in">
  <img src="/assets/images/keyboard shortcuts/Ctrl+-.png" alt="Ctrl + - shortcut: Zoom out">
</div>

<h2 id="excel-keyboard-shortcuts">Microsoft Excel shortcuts</h2>
<br>
<table class="shortcut-tables-cursor-icons hover-table" data-app="excel">
  <colgroup>
    <col style="width: 11%;">
    <col style="width: 90%;">
  </colgroup>
  <thead>
    <tr>
      <th>Shortcut</th>
      <th>Purpose/Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+S.png' | url }}">
      <td>Ctrl + S</td>
      <td>Save the current workbook</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+N.png' | url }}">
      <td>Ctrl + N</td>
      <td>Create a new workbook</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+O.png' | url }}">
      <td>Ctrl + O</td>
      <td>Open an existing workbook</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+W.png' | url }}">
      <td>Ctrl + W</td>
      <td>Close the workbook (keeping the application open)</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+P.png' | url }}">
      <td>Ctrl + P</td>
      <td>Print</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+Z.png' | url }}">
      <td>Ctrl + Z</td>
      <td>Undo the previous action</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+Y.png' | url }}">
      <td>Ctrl + Y</td>
      <td>Redo the previous action (doesn't work in all instances)</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+X.png' | url }}">
      <td>Ctrl + X</td>
      <td>Cut the selected content</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+C.png' | url }}">
      <td>Ctrl + C</td>
      <td>Copy the selected content to the clipboard</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+V.png' | url }}">
      <td>Ctrl + V</td>
      <td>Paste the copied or cut content from the clipboard</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+A.png' | url }}">
      <td>Ctrl + A</td>
      <td>Select all cells</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+F.png' | url }}">
      <td>Ctrl + F</td>
      <td>Find a value</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+H.png' | url }}">
      <td>Ctrl + H</td>
      <td>Find and Replace values</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+E.png' | url }}">
      <td>Ctrl + E</td>
      <td>Flash fill</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl++.png' | url }}">
      <td>Ctrl + + (plus)</td>
      <td>Zoom in</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+-.png' | url }}">
      <td>Ctrl + - (minus)</td>
      <td>Zoom out</td>
    </tr>
  </tbody>
</table>
</div>


<!-- ═══════════════ POWERPOINT ═══════════════ -->
<div class="sc-section" data-app="powerpoint">

<div class="preload-images" hidden>
  <img src="/assets/images/keyboard shortcuts/Ctrl+S.png" alt="Ctrl + S shortcut: Save the current presentation">
  <img src="/assets/images/keyboard shortcuts/Ctrl+N.png" alt="Ctrl + N shortcut: Create a new presentation">
  <img src="/assets/images/keyboard shortcuts/Ctrl+O.png" alt="Ctrl + O shortcut: Open an existing presentation">
  <img src="/assets/images/keyboard shortcuts/Ctrl+W.png" alt="Ctrl + W shortcut: Close the presentation (keeping the application open)">
  <img src="/assets/images/keyboard shortcuts/Ctrl+M.png" alt="Ctrl + M shortcut: Add a slide">
  <img src="/assets/images/keyboard shortcuts/F5.png" alt="F5 shortcut: View the presentation">
  <img src="/assets/images/keyboard shortcuts/Shift+F5.png" alt="Shift + F5 shortcut: View presentation from current slide onwards">
  <img src="/assets/images/keyboard shortcuts/Ctrl+D.png" alt="Ctrl + D shortcut: Copy the current slide">
  <img src="/assets/images/keyboard shortcuts/Ctrl+P.png" alt="Ctrl + P shortcut: Print">
  <img src="/assets/images/keyboard shortcuts/Ctrl+Z.png" alt="Ctrl + Z shortcut: Undo the previous action">
  <img src="/assets/images/keyboard shortcuts/Ctrl+Y.png" alt="Ctrl + Y shortcut: Redo the previous action">
  <img src="/assets/images/keyboard shortcuts/Ctrl+X.png" alt="Ctrl + X shortcut: Cut the selected content">
  <img src="/assets/images/keyboard shortcuts/Ctrl+C.png" alt="Ctrl + C shortcut: Copy the selected content to the clipboard">
  <img src="/assets/images/keyboard shortcuts/Ctrl+V.png" alt="Ctrl + V shortcut: Paste the copied or cut content from the clipboard">
  <img src="/assets/images/keyboard shortcuts/Ctrl+A.png" alt="Ctrl + A shortcut: Select all content">
  <img src="/assets/images/keyboard shortcuts/Ctrl+G.png" alt="Ctrl + G shortcut: Group objects together">
  <img src="/assets/images/keyboard shortcuts/Ctrl+Shift+G.png" alt="Ctrl + Shift + G shortcut: Ungroup objects">
  <img src="/assets/images/keyboard shortcuts/Ctrl+F.png" alt="Ctrl + F shortcut: Find text">
  <img src="/assets/images/keyboard shortcuts/Ctrl+H.png" alt="Ctrl + H shortcut: Find and Replace text">
  <img src="/assets/images/keyboard shortcuts/Ctrl+B.png" alt="Ctrl + B shortcut: Bold selected text">
  <img src="/assets/images/keyboard shortcuts/Ctrl+I.png" alt="Ctrl + I shortcut: Italicize selected text">
  <img src="/assets/images/keyboard shortcuts/Ctrl+U.png" alt="Ctrl + U shortcut: Underline selected text">
  <img src="/assets/images/keyboard shortcuts/Ctrl+K.png" alt="Ctrl + K shortcut: Insert hyperlink">
</div>

<h2 id="powerpoint-keyboard-shortcuts">Microsoft PowerPoint shortcuts</h2>
<br>
<table class="shortcut-tables-cursor-icons hover-table" data-app="powerpoint">
  <colgroup>
    <col style="width: 11%;">
    <col style="width: 90%;">
  </colgroup>
  <thead>
    <tr>
      <th>Shortcut</th>
      <th>Purpose/Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+S.png' | url }}">
      <td>Ctrl + S</td>
      <td>Save the current presentation</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+N.png' | url }}">
      <td>Ctrl + N</td>
      <td>Create a new presentation</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+O.png' | url }}">
      <td>Ctrl + O</td>
      <td>Open an existing presentation</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+W.png' | url }}">
      <td>Ctrl + W</td>
      <td>Close the presentation (keeping the application open)</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+M.png' | url }}">
      <td>Ctrl + M</td>
      <td>Add a slide</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/F5.png' | url }}">
      <td>F5</td>
      <td>View the presentation</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Shift+F5.png' | url }}">
      <td>Shift + F5</td>
      <td>View presentation from current slide onwards</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+D.png' | url }}">
      <td>Ctrl + D</td>
      <td>Copy the current slide</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+P.png' | url }}">
      <td>Ctrl + P</td>
      <td>Print</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+Z.png' | url }}">
      <td>Ctrl + Z</td>
      <td>Undo the previous action</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+Y.png' | url }}">
      <td>Ctrl + Y</td>
      <td>Redo the previous action (doesn't work in all instances)</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+X.png' | url }}">
      <td>Ctrl + X</td>
      <td>Cut the selected content</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+C.png' | url }}">
      <td>Ctrl + C</td>
      <td>Copy the selected content to the clipboard</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+V.png' | url }}">
      <td>Ctrl + V</td>
      <td>Paste the copied or cut content from the clipboard</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+A.png' | url }}">
      <td>Ctrl + A</td>
      <td>Select all content</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+G.png' | url }}">
      <td>Ctrl + G</td>
      <td>Group objects together</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+Shift+G.png' | url }}">
      <td>Ctrl + Shift + G</td>
      <td>Ungroup objects</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+F.png' | url }}">
      <td>Ctrl + F</td>
      <td>Find text</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+H.png' | url }}">
      <td>Ctrl + H</td>
      <td>Find and Replace text</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+B.png' | url }}">
      <td>Ctrl + B</td>
      <td>Bold selected text</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+I.png' | url }}">
      <td>Ctrl + I</td>
      <td>Italicize selected text</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+U.png' | url }}">
      <td>Ctrl + U</td>
      <td>Underline selected text</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+K.png' | url }}">
      <td>Ctrl + K</td>
      <td>Insert hyperlink</td>
    </tr>
  </tbody>
</table>
</div>


<!-- ═══════════════ OUTLOOK ═══════════════ -->

<div class="preload-images" hidden>
  <img src="/assets/images/keyboard shortcuts/Ctrl+N.png" alt="Ctrl + N shortcut: New email">
  <img src="/assets/images/keyboard shortcuts/Ctrl+O.png" alt="Ctrl + O shortcut: Open selected email">
  <img src="/assets/images/keyboard shortcuts/Ctrl+S.png" alt="Ctrl + S shortcut: Save email as a draft">
  <img src="/assets/images/keyboard shortcuts/Ctrl+P.png" alt="Ctrl + P shortcut: Print">
  <img src="/assets/images/keyboard shortcuts/Ctrl+W.png" alt="Ctrl + W shortcut: Close active window">
  <img src="/assets/images/keyboard shortcuts/Ctrl+Z.png" alt="Ctrl + Z shortcut: Undo the previous action">
  <img src="/assets/images/keyboard shortcuts/Ctrl+Y.png" alt="Ctrl + Y shortcut: Redo the previous action">
  <img src="/assets/images/keyboard shortcuts/Ctrl+A.png" alt="Ctrl + A shortcut: Select all content">
  <img src="/assets/images/keyboard shortcuts/Ctrl+X.png" alt="Ctrl + X shortcut: Cut the selected content">
  <img src="/assets/images/keyboard shortcuts/Ctrl+V.png" alt="Ctrl + V shortcut: Paste the copied or cut content from the clipboard">
  <img src="/assets/images/keyboard shortcuts/Ctrl+F.png" alt="Ctrl + F shortcut: Find (search in an email)">
  <img src="/assets/images/keyboard shortcuts/Ctrl+E.png" alt="Ctrl + E shortcut: Find (search in mailbox) / Centre align content">
  <img src="/assets/images/keyboard shortcuts/Question mark.png" alt="? shortcut: Show a full list of shortcuts">
  <img src="/assets/images/keyboard shortcuts/Ctrl+Q.png" alt="Ctrl + Q shortcut: Mark as read">
  <img src="/assets/images/keyboard shortcuts/Ctrl+U.png" alt="Ctrl + U shortcut: Mark as unread / Underline selected text">
  <img src="/assets/images/keyboard shortcuts/Ctrl+Alt+J.png" alt="Ctrl + Alt + J shortcut: Mark as junk">
  <img src="/assets/images/keyboard shortcuts/Ctrl+Shift+V.png" alt="Ctrl + Shift + V shortcut: Move email to folder">
  <img src="/assets/images/keyboard shortcuts/Ctrl+Shift+G.png" alt="Ctrl + Shift + G shortcut: Set flag/reminder">
  <img src="/assets/images/keyboard shortcuts/Ctrl+Shift+Del.png" alt="Ctrl + Shift + Delete shortcut: Empty deleted items">
  <img src="/assets/images/keyboard shortcuts/Ctrl+L.png" alt="Ctrl + L shortcut: Left align content">
  <img src="/assets/images/keyboard shortcuts/Ctrl+R.png" alt="Ctrl + R shortcut: Right align content">
  <img src="/assets/images/keyboard shortcuts/Ctrl+B.png" alt="Ctrl + B shortcut: Bold selected text">
  <img src="/assets/images/keyboard shortcuts/Ctrl+I.png" alt="Ctrl + I shortcut: Italicize selected text">
  <img src="/assets/images/keyboard shortcuts/Ctrl+K.png" alt="Ctrl + K shortcut: Insert hyperlink">
</div>

<div class="sc-section" data-app="outlook">
<h2 id="outlook-keyboard-shortcuts">Microsoft Outlook shortcuts</h2>
<br>
<table class="shortcut-tables-cursor-icons hover-table" data-app="outlook">
  <colgroup>
    <col style="width: 11%;">
    <col style="width: 90%;">
  </colgroup>
  <thead>
    <tr>
      <th>Shortcut</th>
      <th>Purpose/Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+N.png' | url }}">
      <td>Ctrl + N</td>
      <td>New email</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+O.png' | url }}">
      <td>Ctrl + O</td>
      <td>Open selected email</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+O.png' | url }}">
      <td>Ctrl + S</td>
      <td>Save email as a draft</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+P.png' | url }}">
      <td>Ctrl + P</td>
      <td>Print</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+W.png' | url }}">
      <td>Ctrl + W</td>
      <td>Close active window</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+Z.png' | url }}">
      <td>Ctrl + Z</td>
      <td>Undo the previous action</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+Y.png' | url }}">
      <td>Ctrl + Y</td>
      <td>Redo the previous action (doesn't work in all instances)</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+A.png' | url }}">
      <td>Ctrl + A</td>
      <td>Select all content</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+X.png' | url }}">
      <td>Ctrl + X</td>
      <td>Cut the selected content</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+V.png' | url }}">
      <td>Ctrl + V</td>
      <td>Paste the copied or cut content from the clipboard</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+F.png' | url }}">
      <td>Ctrl + F</td>
      <td>Find (search in an email)</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+E.png' | url }}">
      <td>Ctrl + E</td>
      <td>Find (search in mailbox)</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Question mark.png' | url }}">
      <td>?</td>
      <td>Show a full list of shortcuts</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+Q.png' | url }}">
      <td>Ctrl + Q</td>
      <td>Mark as read</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+U.png' | url }}">
      <td>Ctrl + U</td>
      <td>Mark as unread</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+Alt+J.png' | url }}">
      <td>Ctrl + Alt + J</td>
      <td>Mark as junk</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+Shift+V.png' | url }}">
      <td>Ctrl + Shift + V</td>
      <td>Move email to folder</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+Shift+G.png' | url }}">
      <td>Ctrl + Shift + G</td>
      <td>Set flag/reminder</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+Shift+Del.png' | url }}">
      <td>Ctrl + Shift + Delete</td>
      <td>Empty deleted items</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+L.png' | url }}">
      <td>Ctrl + L</td>
      <td>Left align content</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+E.png' | url }}">
      <td>Ctrl + E</td>
      <td>Centre align content</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+R.png' | url }}">
      <td>Ctrl + R</td>
      <td>Right align content</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+B.png' | url }}">
      <td>Ctrl + B</td>
      <td>Bold selected text</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+I.png' | url }}">
      <td>Ctrl + I</td>
      <td>Italicize selected text</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+U.png' | url }}">
      <td>Ctrl + U</td>
      <td>Underline selected text</td>
    </tr>
    <tr class="tooltip-row" data-gif="{{ '/assets/images/keyboard shortcuts/Ctrl+K.png' | url }}">
      <td>Ctrl + K</td>
      <td>Insert hyperlink</td>
    </tr>
  </tbody>
</table>
</div>


<div id="tooltip">
  <img src="" alt="Tooltip preview">
</div>

</section>

<div class="article-share">
  {% include "share-menu.liquid" %}
</div>

<script>
var _activePill = '';

function setPill(btn, app) {
  _activePill = app;
  document.querySelectorAll('.sc-pill').forEach(function(p) {
    p.classList.toggle('sc-pill-active', p === btn);
  });
  document.querySelectorAll('.sc-section').forEach(function(sec) {
    sec.style.display = (!app || sec.dataset.app === app) ? '' : 'none';
  });
  filterShortcuts();
}

function filterShortcuts() {
  var q  = document.getElementById('sc-input').value.trim();
  var ql = q.toLowerCase();

  var tables = _activePill
    ? document.querySelectorAll('.sc-section[data-app="' + _activePill + '"] .hover-table')
    : document.querySelectorAll('.hover-table');

  var visible = 0;

  tables.forEach(function(table) {
    var rows = table.querySelectorAll('tbody tr');
    var tableVisible = false;

    rows.forEach(function(tr) {
      if (!tr.cells[0] || !tr.cells[1]) return;

      if (!tr.cells[0].dataset.original) {
        tr.cells[0].dataset.original = tr.cells[0].innerHTML;
        tr.cells[1].dataset.original = tr.cells[1].innerHTML;
      }

      var shortcutText = tr.cells[0].textContent.toLowerCase();
      var descText     = tr.cells[1].textContent.toLowerCase();
      var show = !q || shortcutText.includes(ql) || descText.includes(ql);

      tr.style.display = show ? '' : 'none';

      if (show) {
        visible++;
        tableVisible = true;
        tr.cells[0].innerHTML = q ? highlightHTML(tr.cells[0].dataset.original, q) : tr.cells[0].dataset.original;
        tr.cells[1].innerHTML = q ? highlightHTML(tr.cells[1].dataset.original, q) : tr.cells[1].dataset.original;
      }
    });

    table.style.display = tableVisible ? '' : 'none';
  });

  var countEl = document.getElementById('sc-count');
  if (countEl) countEl.textContent = q ? (visible + ' result' + (visible !== 1 ? 's' : '')) : '';
}

function highlightHTML(html, q) {
  var escaped = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  var re = new RegExp('(' + escaped + ')(?![^<]*>)', 'gi');
  return html.replace(re, function(match, p1, offset, string) {
    var before = string.slice(0, offset);
    var insideLink = before.split('<a ').length > before.split('</a>').length;
    var colour = insideLink ? '#1e3a5f' : '#92400e';
    return '<mark style="background:#fef3c7; color:' + colour + '; border-radius:2px; padding:0 1px;">' + match + '</mark>';
  });
}

document.addEventListener('click', function(e) {
  var link = e.target.closest('a');
  if (!link) return;
  var href = link.getAttribute('href');
  if (href && href.startsWith('#')) {
    var input = document.getElementById('sc-input');
    if (input && input.value) {
      input.value = '';
      filterShortcuts();
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.hover-table a, .tooltip-wrapper a').forEach(function(link) {
    var href = link.getAttribute('href');
    if (href && !href.startsWith('#')) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
});
</script>
