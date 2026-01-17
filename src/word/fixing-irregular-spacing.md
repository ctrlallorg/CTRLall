---
title: Fixing irregular spacing
layout: layout.liquid
permalink: /word/fixing-irregular-spacing/
canonical: /word/fixing-irregular-spacing/
description: Fixing irregular spacing in Microsoft Word with clear steps, visuals, and animations.
asset_id: ctrlall-word-fixing-irregular-spacing-v1
date: 2026-01-17
last_modified: 2026-01-17
difficultyLevels:
  - level: Intermediate
    description: "Explores fixing irregular spacing in Word at an intermediate level."
    urlSuffix: "#intermediate"
tags:
  - ctrlall.org
  - ctrlall
  - ctrl all
  - microsoft word
  - irregular line spacing
  - irregular spacing between lines
  - irregular word spacing
  - irregular spacing between words
  - irregular spaces between words
  - non-matching text
  - text does not match
  - text not matching
  - paragraphs do not match
  - paragraphs not matching
  - lines do not match
  - lines not matching
  - line spacing doesn't match
  - line spacing does not match
  - line spacing not matching
  - paragraph spacing doesn't match
  - paragraph spacing does not match
  - paragraph spacing not matching
  - pasted text not matching
  - pasted text does not match
  - pasted text doesn't match
  - pasted text problem
  - pasted text issue
  - pasting text problem
  - pasting text issue
  - pasting problem
  - pasting issue
  - pasted line spacing
  - copied line spacing
  - copied text not matching
  - copied text does not match
  - copied text doesn't match
  - copied text problem
  - copied text issue
  - copying text problem
  - copying text issue
  - copying problem
  - copying issue
  - format painter
  - format paragraphs
  - format text
  - format lines
  - space between paragraphs
  - space between sentences
  - space between lines
  - spacing above and below
  - make lines tighter
  - tighter line spacing
  - tighter line spaces
  - tightening line spacing
  - tighten line spaces
  - close up spacing
  - close up spaces
  - tighter spacing
  - tighter spaces
  - tightening spacing
  - tighten spaces
  - close up spacing
  - close up spaces
  - wildcard
Active: word
---
<h1>Fixing irregular spacing</h1>

<!-- Intermediate only -->
<body data-intermediate-only="true">

<section class="section-light">
<p>Text in your document a disaster? These fixes can get you out of trouble:</p>
<ul>
  <li><a href="#irregular-line-spacing">Irregular line spacing in text</a></li>
  <li><a href="#irregular-spacing-words">Irregular spacing between words</a></li>
</ul>

<h2 id="irregular-line-spacing">Irregular line spacing in text</h2>
<p>If you ever have a document with irregular line spacing in your text, (usually from pasting text from elsewhere that's brought it's formatting over), the quickest tool to fix it is <strong>Format Painter</strong>. Here's an the example of some non-matching text which I've coloured blue:</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/Irregular spacing/Irregular line spacing from pasted text.png' | url }}" alt="Example of irregular line spacing in paragraphs in Word" style="max-width:600px; width:100%; height:auto; vertical-align:middle"></p>
<p>Here's how it works:</p>
<ol>
  <li>First, click on the text you want it to look like (i.e. the formatting that you will apply to the text with irregular line spacing).</li>
  <li>
  <p>Then select the <strong>Format Painter</strong> tool on the ribbon via <strong>Home > Clipboard</strong>, it's the one with the paintbrush icon:</p>
  <p><img class="thumbnail border" src="{{ '/assets/images/word/Irregular spacing/Format painter.png' | url }}" alt="Format painter tool on ribbon in Word" style="max-width:175px; width:100%; height:auto; vertical-align:middle"></p>
  </li>
  <li>Once selected, drag over the text with spacing you want to fix and it will format it accordingly.</li>
</ol>
<p>Here's an example of it:</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/Irregular spacing/Fix irregular line spacing from pasted text.gif' | url }}" alt="Demonstration fixing irregular line spacing with format painter in Word" style="max-width:900px; width:100%; height:auto; vertical-align:middle"></p>

<h2 id="irregular-spacing-words">Irregular spacing between words</h2>
<p>If you ever get text with irregular spacing between words like this below it could be from some formatting issues with the file or even from text pasted that's brought along some odd formatting with it. There's a nice <strong>Find and Replace</strong> trick to fix it all in one go.</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/Irregular spacing/Irregular spacing between words.png' | url }}" alt="Example of irregular spacing between words in a paragraph in Word" style="max-width:550px; width:100%; height:auto; vertical-align:middle"></p>
<ol>
  <li>Select the paragraph(s) affected, then open up the <strong>Find and Replace</strong> tool with <strong>Ctrl + H</strong>.</li>
  <li>
    <p>In the <strong>Find what</strong> field: type <strong>^w</strong></p>
    <p><u>Note</u>: On most keyboards <strong>^</strong> is found as an alternative character on a number key. You'll need to press <strong>Shift</strong> and that number key. On mine it's on the 6 key so I'd press Shift + 6.</p>
    <p>(<strong>^w</strong> is a special wildcard code that essentially means 'any whitespace', such as regular spaces, irregular spaces, non‑breaking spaces or tabs.)</p>
  </li>
  <li>
    <p>In the <strong>Replace with</strong> field: add a single space.</p>
    <p>(So we're taking any white space and replacing it with a uniform single space.)</p>
    <p><img class="thumbnail border" src="{{ '/assets/images/word/Irregular spacing/Irregular spacing between words Find and Replace.png' | url }}" alt="Find and Replace dialog box in Word" style="max-width:600px; width:100%; height:auto; vertical-align:middle"></p>
  </li>
  <li>Then hit <strong>Replace All</strong>.</li>
</ol>

<p>The spacing will now be fixed. Here's it in action:</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/Irregular spacing/Fix irregular spacing between words.gif' | url }}" alt="Demonstration fixing irregular spacing between words with Find and Replace in Word" style="max-width:700px; width:100%; height:auto; vertical-align:middle"></p>
</section>