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
quiz: fixing-irregular-spacing-quiz
---
<h1>Fixing irregular spacing</h1>

<a href="#ctrl-quiz" class="quiz-badge jump">Test yourself! Go to the Quiz &#8595;</a>

<!-- Intermediate only -->
<body data-intermediate-only="true">

<section class="section-light">
<p>Text in your document a disaster? These fixes can get you out of trouble:</p>
<ul>
  <li><a href="#irregular-line-spacing">Irregular line spacing in text</a></li>
  <li><a href="#irregular-spacing-words">Irregular spacing between words</a></li>
  <li><a href="#remove-multiple-blank lines">Remove multiple blank lines</a></li>
  <li><a href="#remove-duplicate-punctuation">Remove duplicate punctuation</a></li>
  <li><a href="#remove-space-before-punctuation">Remove spaces before punctuation</a></li>
  <li><a href="#hyphens-en-dashes-em-dashes">Hyphens, en dashes and em dashes</a></li>
  <li><a href="#replace-unspaced-hyphens-with-spaced-hyphens">Replacing unspaced hyphens with spaced hyphens</a></li>
</ul>

<h2 id="irregular-line-spacing">Irregular line spacing in text</h2>
<p>If you ever have a document with irregular line spacing in your text usually this is either Word applying paragraph formatting you don't want or if it's pasted text it may have brought some external formatting over with it.</p>
<p>The quickest tool to fix it is <strong>Format Painter</strong>. Here's an the example of some non-matching text which I've coloured blue:</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/Fixing irregular spacing/Irregular line spacing from pasted text.png' | url }}" alt="Example of irregular line spacing in paragraphs in Word" style="max-width:600px; width:100%; height:auto; vertical-align:middle"></p>
<p>Here's how it works:</p>
<ol>
  <li>First, click on the text you want it to look like (i.e. the formatting that you will apply to the text with irregular line spacing).</li>
  <li>
  <p>Then select the <strong>Format Painter</strong> tool on the ribbon via <strong>Home > Clipboard</strong>, it's the one with the paintbrush icon:</p>
  <p><img class="thumbnail border" src="{{ '/assets/images/word/Fixing irregular spacing/Format painter.png' | url }}" alt="Format painter tool on ribbon in Word" style="max-width:175px; width:100%; height:auto; vertical-align:middle"></p>
  </li>
  <li>Once selected, drag over the text with spacing you want to fix and it will format it accordingly.</li>
</ol>
<p>Here's an example of it:</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/Fixing irregular spacing/Fix irregular line spacing from pasted text.gif' | url }}" alt="Demonstration fixing irregular line spacing with format painter in Word" style="max-width:900px; width:100%; height:auto; vertical-align:middle"></p>

<h2 id="irregular-spacing-words">Irregular spacing between words</h2>
<p>If you ever get text with irregular spacing between words like this below it could be some formatting issues with the file or even pasted text that's brought along odd formatting with it.</p>
<p> Luckily there's a nice <strong>Find and Replace</strong> trick to fix it all in one go.</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/Fixing irregular spacing/Irregular spacing between words.png' | url }}" alt="Example of irregular spacing between words in a paragraph in Word" style="max-width:550px; width:100%; height:auto; vertical-align:middle"></p>
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
    <p><img class="thumbnail border" src="{{ '/assets/images/word/Fixing irregular spacing/Irregular spacing between words Find and Replace.png' | url }}" alt="Irregular spacing between words Find and Replace" style="max-width:600px; width:100%; height:auto; vertical-align:middle"></p>
  </li>
  <li>Then hit <strong>Replace All</strong>.</li>
</ol>

<p>The spacing will now be fixed. Here's it in action:</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/Fixing irregular spacing/Fix irregular spacing between words.gif' | url }}" alt="Demonstration fixing irregular spacing between words with Find and Replace in Word" style="max-width:700px; width:100%; height:auto; vertical-align:middle"></p>



<h2 id="remove-multiple-blank lines">Remove multiple blank lines</h2>
<p>Sometimes you might find multiple blank lines irregularly through inherited formatting when pasting or a lack of housekeeping in a document. You may also find this in older documents as a previously common but now outdated rule used to be doing a double return after each paragraph. Whatever the situation there's a wildcard you can use to reduce multiple blanks lines to just one.</p>

<p><img class="thumbnail border" src="{{ '/assets/images/word/Fixing irregular spacing/Fix multiple paragraph marks example.png' | url }}" alt="Example of multiple paragraph marks in Word" style="max-width:600px; width:100%; height:auto; vertical-align:middle"></p>
<ol>
  <li>Select the area in your document with the paragraphs and spaces that needs fixing, or if you need the whole document fixed click anywhere click anywhere selecting nothing in particular.</li>
  <li>Open up <strong>Find and Replace</strong> with <strong>Ctrl + H</strong>.</li>
  <li>
    <p>In the <strong>Find what</strong> field: type <strong>^13{2,}</strong><p>
    <p>(<strong>^13</strong> means paragraph mark or a <span class="glossary-hover" data-term="hard-return">hard return</span> while <strong>{2,}</strong> means two or more repetitions).</p>
  </li>
  <li>
    <p>In the <strong>Replace with</strong> field: type <strong>^p</strong></p>
    <p>(<strong>^p</strong> is standard code for a paragraph mark. So why use ^13 above? It's Word being...Word. Both mean the same thing and normally you'd use ^p, but Word doesn't let you use ^p in the 'Find what' field so we use ^13 instead.)</p>
  </li>
  <li>
  <p>Click the <strong>More > ></strong> button bottom left which brings up more options, then check <strong>Use wildcards</strong>.</p>
    <p><img class="thumbnail border" src="{{ '/assets/images/word/Fixing irregular spacing/Fix multiple paragraph marks Find and Replace.png' | url }}" alt="" style="max-width:600px; width:100%; height:auto; vertical-align:middle"></p>
  </li>
  <li>Lastly click <strong>Replace All</strong>.</li>
</ol>
<p>Now all the multiple paragraph marks are reduced to just one per standard digital formatting. Here's a demonstration of the above:</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/Fixing irregular spacing/Fix multiple paragraph marks.gif' | url }}" alt="Demonstration fixing multiple paragraph marks with Find and Replace in Word" style="max-width:700px; width:100%; height:auto; vertical-align:middle"></p>

<h4>What if it's not a hard return? (Soft returns)</h4>
<p>If you're finding lines at the end of your paragraphs are the problem then it's <span class="glossary-hover" data-term="soft-return">soft returns</span> you need to remove.</p>
<p>Do the above find and replace but use <strong>^l</strong> instead of <strong>^p</strong>:</p>

<ol>
  <li>Select the area in your document with the paragraphs and spaces that needs fixing, or if you need the whole document fixed click anywhere click anywhere selecting nothing in particular.</li>
  <li>Open up <strong>Find and Replace</strong> with <strong>Ctrl + H</strong>.</li>
  <li>
    <p>In the <strong>Find what</strong> field: type <strong>^l</strong> for a soft return.</p>
  </li>
  <li>
    <p>Leave the <strong>Replace with</strong> field blank.</p>
    <p>This will replace all soft returns with nothing, essentially removing them.</p>
  </li>
  <li>There's no need to enable wildcards for this one so lastly click <strong>Replace All</strong>.</li>
</ol>

<p><img class="thumbnail border" src="{{ '/assets/images/word/Fixing irregular spacing/Remove all soft returns.gif' | url }}" alt="Removing all soft returns from text in Word" style="max-width:700px; width:100%; height:auto; vertical-align:middle"></p>

<h2 id="remove-space-before-punctuation">Remove spaces before punctuation</h2>
<p>This is less common but you may sometimes find typing errors where a space has been added before punctuation such as <strong>. , : ; ?</strong> or <strong>!</strong></p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/Fixing irregular spacing/Spaces before punctuation example.png' | url }}" alt="Example of spaces before punctuation in a paragraph in Word" style="max-width:600px; width:100%; height:auto; vertical-align:middle"></p>
<p>There's a wildcard to get rid of these for all the above punctuation marks:</p>
<ol>
  <li>Go to <strong>Find and Replace</strong> (<strong>Ctrl + H</strong>).</li>
  <li>In the <strong>Find what</strong> field: type a literal <strong>space</strong> and then <strong>([.,;:\?\!])</strong></li>
  <p>(This is basically grouping all the punctuation types.)</p>
  <li>
  <p>In the <strong>Replace with</strong> field: type <strong>\1</strong></p>
  <p>(The <strong>\1</strong> means whatever was captured in the set of parentheses. So by replacing it just what was in the brackets, the space we added before is not included and effectively elimated.)</p>
  </li>
</ol>
<p><img class="thumbnail border" src="{{ '/assets/images/word/Fixing irregular spacing/Spaces before punctuation demonstration.gif' | url }}" alt="Demonstration fixing spaces before punctuation in a paragraph with Find and Replace in Word" style="max-width:700px; width:100%; height:auto; vertical-align:middle"></p>

<h2 id="hyphens-en-dashes-em-dashes">Hyphens, en dashes and em dashes</h2>
<p>Hyphens are something everyone uses casually but you may need to replace them with en dashes or em dashes. Let's look at the wildcard codes involved:</p>
<div class="tooltip-wrapper" style="margin: 2rem 0rem 1rem; text-align: left;">
  <table class="table-center">
    <colgroup>
      <col style="width: 33%;">
      <col style="width: 33%;">
      <col style="width: 33%;">
    </colgroup>
    <thead>
      <tr>
        <th>Character</th>
        <th>Example</th>
        <th>Wildcard code</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Hyphen (unspaced)</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>en dash (unspaced)</td>
        <td>–</td>
        <td>^=</td>
      </tr>
      <tr>
        <td>em dash (unspaced)</td>
        <td>—</td>
        <td>^+</td>
      </tr>
      <tr>
        <td>Spaced hyphen</td>
        <td>"&nbsp;-&nbsp;"</td>
        <td>&lt;space&gt;-&lt;space&gt;</td>
      </tr>
      <tr>
        <td>Spaced en dash</td>
        <td>"&nbsp;–&nbsp;"</td>
        <td>&lt;space&gt;^=&lt;space&gt;</td>
      </tr>
      <tr>
        <td>Spaced em dash</td>
        <td>"&nbsp;–&nbsp;"</td>
        <td>&lt;space&gt;^+&lt;space&gt;</td>
      </tr>
    </tbody>
  </table>
</div>
<p>Using the above you can use <strong>Find and Replace</strong> (<strong>Ctrl + H</strong>) to replace what you have with what you need.</p>

<h3 id="replace-unspaced-hyphens-with-spaced-hyphens">Warning: replacing unspaced hyphens with spaced hyphens</h3>
<p>Before adding spaces around hyphens, you need to be careful. Word’s wildcard engine can’t tell the difference between a hyphen inside a hyphenated compound word (like <em>long-term</em> or <em>mother-in-law</em>) and a hyphen that should be spaced (<em>word - word</em>). If you blindly replace every hyphen with a spaced hyphen, you’ll break those compound words.</p>
<p>So what do we do here?</p>
<p>If you’re 100% certain your document has no hyphenated compound words then spacing all hyphens is safe to do. Use <strong>Find and Replace</strong> (<strong>Ctrl + H</strong>) to replace hyphens with spaced hyphens using the code above.</li></p>
<ol>
  <li>Go to <strong>Find and Replace</strong> (<strong>Ctrl + H</strong>).</li>
  <li>In the <strong>Find what</strong> field: <strong>-</strong></li>
  <li>In the <strong>Replace with</strong> field: type <strong>&lt;space&gt;-&lt;space&gt;</strong></li>
</ol>
<h4>What if I have compound words throughout my document and I need to space all hyphens?</h4>
<p>If your document has compound words and all hyphens are unspaced then Word sees every hyphen like <i>letter-hyphen-letter</i>; it can't distinguish hyphens within compound words from hyphens between whole words. This example below is just one paragraph but if you've got this happening several times over a multi-page document you've got yourself a problem.</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/Fixing irregular spacing/Compound words and unspaced hyphens.png' | url }}" alt="Example of Compound words and unspaced hyphens in a paragraph in Word" style="max-width:600px; width:100%; height:auto; vertical-align:middle"></p>
<p>This does involves some surgery: you need to find all the compound words in your document first, make a note of them, then replace all hyphens with spaced hyphens, then fix the compounds words after.</p>
<p><u>Note</u>: There's a few corners of the internet claiming to solve this with particularly clever wildcard code but it either doesn't work or misses what we're trying to achieve. The method below is <u>guaranteed</u> to fix this problem despite being a bit laborious:</p>
<ol>
  <li>Using the <strong>Find</strong> tool (<strong>Ctrl + F</strong>) search for a single hyphen.</li>
  <li>Click the <strong>Results</strong> tab, look down the list for compound words and make a note of them. If there are too many instances of hyphens to list them in Results, click back to <strong>Headings</strong> and press <strong>Enter</strong> to cycle through each of the hyphens in your document, noting down the compound words.</li>
  <li>When you have all the compound words noted down use <strong>Find and Replace</strong> (<strong>Ctrl + H</strong>) to replace hyphens with spaced hyphens:
  <ul>
    <li>Find what: <strong>-</strong></li>
    <li>Replace with: <strong>&lt;space&gt;-&lt;space&gt;</strong></li>
  </ul>
  </li>
  <li><p>Then repair the hyphenated words with <strong>Find and Replace</strong>, replacing broken compound words (<i>long - term</i>) with the correct syntax (<i>long-term</i>).</p>
  <p>e.g.:</p>
  <ul>
    <li>Find what: <strong>long - term</strong></li>
    <li>Replace with: <strong>long-term</strong></li>
  </ul>
  </li>
<p>Here's a small demonstration of it all:</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/Fixing irregular spacing/Compound words and unspaced hyphens.gif' | url }}" alt="Example of Compound words and unspaced hyphens in a paragraph in Word" style="max-width:700px; width:100%; height:auto; vertical-align:middle"></p>

</section>

<div id="ctrl-quiz"></div>

<div class="article-share">
{% include "share-menu.liquid" %}
</div>