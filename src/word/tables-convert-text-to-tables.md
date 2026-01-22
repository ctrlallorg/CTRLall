---
title: "Tables:  Convert text to tables"
layout: layout.liquid
permalink: /word/tables-convert-text-to-tables/
canonical: /word/tables-convert-text-to-tables/
description: A guide to tables in Microsoft Word with clear steps, visuals, and animations.
asset_id: ctrlall-word-tables-convert-text-to-tables-v1
date: 2026-01-26
last_modified: 2026-01-26
difficultyLevels:
  - level: Intermediate
    description: "Explores converting text into a table at an intermediate level."
    urlSuffix: "#intermediate"
tags:
  - ctrlall.org
  - ctrlall
  - ctrl all
  - microsoft word
  - how to convert text to table
  - converting text to table
  - how to turn text into table
  - turning text in table
  - how to turn text into a table
  - turning text into a table
  - how to change text into a table
  - how to change text into tables
  - text formatting
  - text issues
  - table issues
  - table format
  - table content issues
  - table content format
  - tables
  - rows
  - columns
  - delimiters
active: word
---

<div id="tooltip">
  <img src="" alt="Tooltip preview">
</div>

<!-- Intermediate only -->
<body data-intermediate-only="true">

<h1>Converting text to a table</h1>

<section>
  
  <p>Sometimes when copying tables from elsewhere only the table's content appears rather than a whole table with lines. Here's how to convert text into a table.</p>

  <p>Here's a few simple examples of what you might find:</p>

  <p>Text separated by tabs</p>
  <p><img class="border left" src="{{ '/assets/images/word/Tables convert text to tables/Text separated by tabs.png' | url }}" alt="Text separated by tabs in Word" style="max-width:270px; width:100%; height:auto; vertical-align:middle"></p>
  <p>Text separated by commas</p>
  <p><img class="border left" src="{{ '/assets/images/word/Tables convert text to tables/Text separated by commas.png' | url }}" alt="Text separated by commas in Word" style="max-width:200px; width:100%; height:auto; vertical-align:middle"></p>
  <p>Text separated by paragraph (new lines)</p>
  <p><img class="border left" src="{{ '/assets/images/word/Tables convert text to tables/Text separated by paragraphs.png' | url }}" alt="Text separated by paragraphs in Word" style="max-width:125px; width:100%; height:auto; vertical-align:middle"></p>
  <p>Text separated by spaces</p>
  <p><img class="border left" src="{{ '/assets/images/word/Tables convert text to tables/Text separated by spaces.png' | url }}" alt="Text separated by spaces in Word" style="max-width:200px; width:100%; height:auto; vertical-align:middle"></p>
  <p>To convert text to tables in Word select the text in question then go to <strong>Insert > Tables > Convert Text to Table</strong>:</p>
  <p><img class="border left" src="{{ '/assets/images/word/Tables convert text to tables/Convert table to text.png' | url }}" alt="Convert table to text option on ribbon in Word" style="max-width:225px; width:100%; height:auto; vertical-align:middle"></p>

  <p>You'll see this dialog box appear to configure the table from the text. Hover over the red dots for what each option does:</p>
  <!-- Convert text to table dialog options tooltip overlay -->
  <div class="overlay-container">
    <img src="/assets/images/word/Tables convert text to tables/Convert text to table dialog options.png" alt="Convert text to table dialog options" class="base-image" data-width="253" data-height="312">
    <div class="hotspot rich-tooltip-trigger" data-tooltip-id="Covert-text-to-table-tooltip-1" style="top:60px; left:209px;"></div>
    <div class="hotspot rich-tooltip-trigger" data-tooltip-id="Covert-text-to-table-tooltip-2" style="top:83px; left:209px;"></div>
    <div class="hotspot rich-tooltip-trigger" data-tooltip-id="Covert-text-to-table-tooltip-3" style="top:127px; left:14px;"></div>
    <div class="hotspot rich-tooltip-trigger" data-tooltip-id="Covert-text-to-table-tooltip-4" style="top:148px; left:14px;"></div>
    <div class="hotspot rich-tooltip-trigger" data-tooltip-id="Covert-text-to-table-tooltip-5" style="top:170px; left:14px;"></div>
    <div class="hotspot rich-tooltip-trigger" data-tooltip-id="Covert-text-to-table-tooltip-6" style="top:225px; left:200px;"></div>
  </div>

  <p>Select <strong>OK</strong> and the table will be created with content inside. It may take a bit of trial and error experimenting with the number of columns and reformatting the text so it fits. </p>

  <p><u>Note</u>: The examples above were simple. When you have table content pasting from a table elsewhere the text in that situation is usually a bit messy and may require some editing around the delimiters before it'll convert neatly. A successful conversion of the above examples would look to this:</p>
  <p><img class="border left" src="{{ '/assets/images/word/Tables convert text to tables/Text converted to table.png' | url }}" alt="Text converted to table in Word" style="max-width:627px; width:100%; height:auto; vertical-align:middle"></p>

</section>

<!-- Global tooltip layer -->
  <div id="tooltip-layer"></div>

  <!-- Tooltip logic -->
  <script>
    const tooltips = {
      "Covert-text-to-table-tooltip-1": `
        <div class="rich-tooltip">
          <p><strong>Number of columns</strong>: Choose the number of columns the table should have.</p>
        </div>`,
      "Covert-text-to-table-tooltip-2": `
        <div class="rich-tooltip">
          <p><strong>Number of rows</strong>: Word automatically calculates the number of rows based on how many lines of text you selected.</p>
        </div>`,
      "Covert-text-to-table-tooltip-3": `
        <div class="rich-tooltip">
          <p><strong>Fixed column width</strong>: Usually you can leave this as <strong>Auto</strong>, unless you have a specific column width in mind.</p>
        </div>`,
      "Covert-text-to-table-tooltip-4": `
        <div class="rich-tooltip">
          <p><strong>AutoFit to contents</strong>: Have the table and it's columns only span as far as the length of the content in the cells.</p>
        </div>`,
      "Covert-text-to-table-tooltip-5": `
        <div class="rich-tooltip">
          <p><strong>AutoFit to window</strong>: Have the table span the width of the editable area.</p>
        </div>`,
      "Covert-text-to-table-tooltip-6": `
        <div class="rich-tooltip">
          <p><strong>Separate text at</strong>: Here you're selecting the delimiter i.e the character(s) Word uses to to decide where one column ends and the next one begins. Choose which is separating your text, if it's not the most common three which are a <strong>Paragraph</strong> (i.e. a new line), a <strong>Comma</strong> or a <strong>Tab</strong>, then you can enter it in <strong>Other</strong> e.g. a hyphen, a space or something else.</p>
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
