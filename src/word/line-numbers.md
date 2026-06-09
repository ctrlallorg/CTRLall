---
title: Line numbers in Microsoft Word – Ctrl All
layout: layout.liquid
permalink: /word/line-numbers/
description: How to use, edit and suppress line numbers in Microsoft Word with clear steps, visuals, and animations.
asset_id: ctrlall-word-line-numbers-v1
date: 2026-06-07
last_modified: 2026-06-07
difficultyLevels:
  - level: Intermediate
    description: "Explores how to apply and alter line numbers in Word with advanced options for intermediate level."
    urlSuffix: "#intermediate"

tags:
  - ctrlall.org
  - ctrlall
  - ctrl all
  - microsoft word
  - line numbers
  - line numbering
  - add line numbers
  - add line numbering
  - adding line numbers
  - adding line numbering
  - how to add line numbers
  - how to add line numbering
  - how to insert line numbers
  - how to insert line numbering
  - how to create line numbers
  - how to create line numbering
  - how do i add line numbers
  - how do i add line numbering
  - how to suppress line numbers
  - how to suppress line numbering
  - how to pause line numbers
  - how to pause line numbering
  - legal documents
  - scripts
  - playscripts
active: word
intermediate_only: true
---


<h1>Line numbering</h1>

<section class="section-light">
<div id="article-badge" class="article-badge intermediate-only">⚡ Intermediate Level Only</div>

<p>Line numbers have several uses, in legal documents, contracts, transcripts and screenplays to name a few. Numbers are given to each line in the left margin.</p>

<p><img class="thumbnail border" src="{{ '/assets/images/word/Line numbers/Line numbers example.png' | url }}"  alt="Line numbers example" style="max-width:700px; width:100%; height:auto; vertical-align:middle"></p>

<h2>How to insert line numbers</h2>
<p>To insert line numbers, on the <span class="glossary-hover" data-term="ribbon">ribbon</span> go to <strong>Layout > Page Set-up > Line numbers > Continuous</strong>:</p>
<p><img class="thumbnail border left" src="{{ '/assets/images/word/Line numbers/Line numbers.png' | url }}"  alt="Line numbers example" style="max-width:256px; width:100%; height:auto; vertical-align:middle"></p>

<p>The other options let you edit how the line numbers are applied within the document.</p>

<h4>Restart Each Page</h4>
<p>This will make line numbers restart at '1' at the beginning of each page should you need it.</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/Line numbers/Line numbers example restart each page.png' | url }}"  alt="Line numbers example restarting on a new page" style="max-width:700px; width:100%; height:auto; vertical-align:middle"></p>

<h4>Restart Each Section</h4>
<p>Same as above except applied to <span class="glossary-hover" data-term="section">sections</span> in your document rather than pages. You'll need to have <span class="glossary-hover" data-term="section-break">section breaks</span> set up which are explored in this article: <a href="/word/section-breaks/">Section breaks</a>.</p>

<h4>Suppress for Current Paragraph</h4>
<p>This option lets you leave a gap in the line numbers for a selected paragraph(s). Select the paragraph(s) first then select this option and the line numbers besides it will disappear and continue on lines after it.</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/Line numbers/Line numbers example suppress for current paragraph.png' | url }}"  alt="Example of line numbers suppressed" style="max-width:700px; width:100%; height:auto; vertical-align:middle"></p>

<h4>Line Numbering Options...</h4>
<p>Advanced options are found this way. Clicking <strong>Line Numbering Options...</strong> will bring up the Page Setup Options dialog. Select the <strong>Line numbers</strong> button at the bottom and the advanced line number options appear.</p> 

<p><em>Hover over the red dots for what each option does.</em></p>

<!-- Styles formatting options tooltip overlay -->
  <div class="overlay-container">
    <img src="/assets/images/word/Line numbers/Page setup options.png" alt="Advanced line numbering options" class="base-image" data-width="404" data-height="547">
    <div class="hotspot rich-tooltip-trigger" data-tooltip-id="Line-number-options-tooltip-1" style="top:152px; left:240px;"></div>
    <div class="hotspot rich-tooltip-trigger" data-tooltip-id="Line-number-options-tooltip-2" style="top:171px; left:240px;"></div>
    <div class="hotspot rich-tooltip-trigger" data-tooltip-id="Line-number-options-tooltip-3" style="top:195px; left:240px;"></div>
    <div class="hotspot rich-tooltip-trigger" data-tooltip-id="Line-number-options-tooltip-4" style="top:215px; left:240px;"></div>
    <div class="hotspot rich-tooltip-trigger" data-tooltip-id="Line-number-options-tooltip-5" style="top:257px; left:125px;"></div>
  </div>

</section>

<div class="article-share">
{% include "share-menu.liquid" %}
</div>

<!-- Global tooltip layer -->
  <div id="tooltip-layer"></div>

  <!-- Tooltip logic -->
  <script>
    const tooltips = {
      "Line-number-options-tooltip-1": `
        <div class="rich-tooltip">
          <p><strong>Add line numbering</strong>: Check this checkbox to apply line numbering, uncheck to remove line numbering.</p>
        </div>`,
      "Line-number-options-tooltip-2": `
        <div class="rich-tooltip">
          <p><strong>Start at</strong>: Determines the number the line numbering will start counting from.</p>
        </div>`,
      "Line-number-options-tooltip-3": `
        <div class="rich-tooltip">
          <p><strong>From text</strong>: Determines the position of the line numbers on the page away from the text. The more you increase this the further left the numbers will move from the text. This is set to <strong>Auto</strong> by default.</p>
        </div>`,
      "Line-number-options-tooltip-4": `
        <div class="rich-tooltip">
          <p><strong>Count by</strong>: Determines how frequently the line numbers appear.</p>
          <p>E.g. Setting this to '2' will make line numbers appear only every two lines:</p>
          <p><img class="thumbnail border" src="{{ '/assets/images/word/Line numbers/Count by.png' | url }}"  alt="Line numbers Count by 2 example" style="max-width:655px; width:100%; height:auto; vertical-align:middle"></p>
        </div>`,
        "Line-number-options-tooltip-5": `
        <div class="rich-tooltip">
          <p><strong>Numbering</strong>: Same options as described above: <strong>Restart each page</strong>, <strong>Restart each section</strong> and <strong>Continuous</strong>.</p>
        </div>`
    };
    


document.querySelectorAll('.rich-tooltip-trigger').forEach(trigger => {
  const id = trigger.dataset.tooltipId;
  const layer = document.getElementById('tooltip-layer');

  trigger.addEventListener('mouseenter', () => {
    if (!tooltips[id]) return;

    // clear previous
    layer.innerHTML = '';

    // build tooltip
    const wrapper = document.createElement('div');
    wrapper.innerHTML = tooltips[id];
    const tooltip = wrapper.firstElementChild;

    // position tooltip near hotspot
    const rect = trigger.getBoundingClientRect();
    tooltip.style.position = 'fixed';
    tooltip.style.top = `${rect.top + (rect.height / 2)}px`;
    tooltip.style.left = `${rect.right + 10}px`;
    tooltip.style.display = 'block';

    // rely on CSS for max-width and wrapping
    tooltip.style.maxWidth = "400px";

    // add to layer
    layer.appendChild(tooltip);

    // keep visible while hovering tooltip
    tooltip.addEventListener('mouseenter', () => {
      tooltip.classList.add('visible');
    });
    tooltip.addEventListener('mouseleave', () => {
      tooltip.remove();
    });
  });

  trigger.addEventListener('mouseleave', () => {
    const tooltip = document.querySelector('#tooltip-layer .rich-tooltip');
    if (tooltip) {
      // delay so you can move into tooltip
      setTimeout(() => {
        if (!tooltip.matches(':hover')) {
          tooltip.remove();
        }
      }, 150);
    }
  });
});
</script>
