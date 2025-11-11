---
title: Table of contents
layout: layout.liquid
permalink: /word/table-of-contents/
canonical: /word/table-of-contents/
description: A guide to tables of contents in Microsoft Word with clear steps, visuals, and animations.
image: /assets/images/Ctrl All logo blue.svg
asset_id: ctrlall-table-of-contents-v1
date: 2025-10-26
last_modified: 2025-10-26
tags:
  - microsoft word
  - insert table of contents
  - insert a table of contents
  - inserting a table of contents
  - edit table of contents
  - edit a table of contents
  - update table of contents
  - update a table of contents
  - updating table of contents
  - updating a table of contents
  - headings
  - page numbers
  - page numbering
  - hyperlinks
  - links
  - TOC
  - How a table of contents works in Word
active: word
---

<h1>Table of contents</h1>

<p>In this article:</p>
<ul>
    <li><a href="#using-toc">Using a table of contents in Word</a></li>
    <li><a href="#insert-toc">Inserting a table of contents</a></li>
    <li><a href="#automated-toc">Automated table of contents</a></li>
    <li><a href="#manual-toc">Manual table of contents</a></li>
    <li><a href="#custom-toc">Custom table of contents</a></li>
    <li><a href="#delete-toc">Deleting a table of contents</a></li>
    <li><a href="#update-toc">Updating a table of contents</a></li>
</ul>

<section class="section-light">
<h2 id="using-toc">Using a table of contents in Word</h2>
<p>A table of contents (TOC) in Word lists headings in the document much like you'd find in a book or long form publication like a report. By default the headings in a TOC are also hyperlinks which will take you directly to the location of a heading when holding down Ctrl and clicking on one.</p>

<!-- GIF click on TOC heading link -->

<h2 id="insert-toc">Inserting a table of contents</h2>
<p>Go to <strong>References</strong> and then select the <strong>Table of Contents</strong> drop down. From there you can choose which style of TOC to insert.</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/TOC/References TOC.png' | url }}"  alt="References TOC on the ribbon in Word" style="width:50%; vertical-align:middle"></p>

<h3 id="automated-toc">Automated table of contents</h3>
<p>Automated table of contents styles 1 and 2 require you to have headings, or more specifically heading styles, in place in your document. If you insert one of these without headings it will insert a blank TOC with a warning:</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/TOC/Automated TOC blank.png' | url }}"  alt="Automated blank table of contents in Word" style="width:65%; vertical-align:middle"></p>

<h4>A note on automated heading levels</h4>
<p>When you have a document with several heading levels, one point that catches a lot of people out is that a TOC only includes the top three default heading styles i.e. Heading 1, Heading 2 and Heading 3. Take this example with four heading levels:</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/TOC/Heading 1-4 examples.png' | url }}"  alt="Heading 1-4 examples in Word" style="width:75%; vertical-align:middle"></p>
<p>If we add an automated table of contents to this document we get this:</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/TOC/TOC basic example.png' | url }}"  alt="Basic table of contents example in Word" style="width:75%; vertical-align:middle"></p>
<p>Note how heading level 4 isn't included, no other level after 3 is; the reason behind this is to prevent the TOC becoming too granular and long. Typically a table of contents is to help readers get to main sections of a document/publication.</p>

<h3 id="manual-toc">Manual table of contents</h3>
<p>The manual style lets you enter in your own headings and page numbers into the TOC irrespective of what actual headings you have in your document. These can be useful for short or non-structured documents with custom layouts where the content is minimal and/or doesn't rely on headings so much, such as a program, brochure or booklet, a portfolio or a one-page newsletter for example.</p>
<p><img class="thumbnail" src="{{ '/assets/images/word/TOC/Manual TOC editing.gif' | url }}"  alt="Manual Table of contents editing example in Word" style="width:75%; vertical-align:middle"></p>
<p>Be careful to make sure your custom headings match up correctly with your content. That goes for the page numbering too as it's all manual. The manual option can be quite labour-intensive, especially with the indentation of the different levels; you may want to add custom <span class="glossary-hover" data-term="tab-stop">tab stops</span> for the different levels.</p>

<h3 id="custom-toc">Custom table of contents</h3>
<p>You can select <strong>Custom Table of Contents</strong> at the bottom of the drop down which provides options a TOC's style and layout.</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/TOC/Custom TOC.png' | url }}"  alt="Custom TOC button in Word ribbon, opens advanced formatting options" style="width:50%; vertical-align:middle"></p>
<p>You'll be presented with this window with multiple options to customise your table of contents.</p>

<!-- Interactive TOC options window -->
<body>
  <header class="topbar">
  </header>

  <!-- Tooltip hotspot overlay (now layout-independent) -->
  <div class="overlay-container">
    <img src="/assets/images/word/TOC/Custom TOC options.png" alt="TOC Options Dialog" class="base-image">

    <!-- Hotspots only -->
    <div class="hotspot rich-tooltip-trigger" data-tooltip-id="tooltip-1" style="top: 214px; left: -10px;"></div>
    <div class="hotspot rich-tooltip-trigger" data-tooltip-id="tooltip-2" style="top: 232px; left: -10px;"></div>
    <div class="hotspot rich-tooltip-trigger" data-tooltip-id="tooltip-3" style="top: 214px; left: 250px;"></div>
    <div class="hotspot rich-tooltip-trigger" data-tooltip-id="tooltip-4" style="top: 254px; left: 255px;"></div>
    <div class="hotspot rich-tooltip-trigger" data-tooltip-id="tooltip-5" style="top: 325px; left: 233px;"></div>
    <div class="hotspot rich-tooltip-trigger" data-tooltip-id="tooltip-6" style="top: 349px; left: 175px;"></div>
  </div>

  <!-- Global tooltip layer -->
  <div id="tooltip-layer"></div>

  <!-- Tooltip logic -->
  <script>
    const tooltips = {
      "tooltip-1": `
        <div class="rich-tooltip">
          <p><img class="thumbnail border" src="/assets/images/word/TOC/Show page numbers.png" alt="Show page numbers" style="width:100%; vertical-align:middle"></p>
          <p>Will show page numbers. By default, this also aligns them right. Turn this off to show only the headings, which may be preferable for short-form documents or custom layouts.</p>
        </div>`,
      "tooltip-2": `
        <div class="rich-tooltip">
          <p><img class="thumbnail border" src="/assets/images/word/TOC/Right align page numbers.png" alt="Right align page numbers" style="width:100%; vertical-align:middle"></p>
          <p>Page numbers are right aligned by default. In most cases, you'd need a reason to want them next to the text, which tends to look awkward. However, for short entries or digital documents, it might be more suitable.</p>
        </div>`,
      "tooltip-3": `
        <div class="rich-tooltip">
          <p>This option adds on a hyperlink to the content in the document. It's name refers to the web view which is really only for when you save documents as html files for web browser viewing.</p><p>You're unlikely to use that, so refer to the Print Preview top left as that's what you'll see and use in the default view of Word. To activate a link in Word hover the cursor over the linked text and press <strong>Ctrl + left click</strong>. If you save the document as a PDF the link will apply there too to simply left click.</p> 
        <p><u>Note</u>: For 'print' this doesn't get rid of page numbers like the option implies, for that you'd need to uncheck the <strong>Show page numbers</strong> checkbox to the left.</p>
        </div>`,
        "tooltip-4": `
        <div class="rich-tooltip">
          <p><img class="thumbnail border" src="{{ '/assets/images/word/TOC/Tab leader.png' | url }}"  alt="Tab leader ROC menu in Word" style="width:50%; vertical-align:middle"></p>
          <p>A few styles to choose from, tab leaders are the lines between the text and the page number.</p>
        </div>`,
        "tooltip-5": `
        <div class="rich-tooltip">
          <p><img class="thumbnail border" src="{{ '/assets/images/word/TOC/TOC formats.png' | url }}"  alt="Table of contents formats in Word" style="width:50%; vertical-align:middle"></p>
          <p>Choice of pre-made TOC designs like Classic, Modern, or Simple which are shown in the preview when selected.</p>
        </div>`,
        "tooltip-6": `
        <div class="rich-tooltip">
          <p>Set how many heading levels to include in the TOC, the default is Headings 1–3.</p>
        </div>`
    };

    document.querySelectorAll('.rich-tooltip-trigger').forEach(trigger => {
      trigger.addEventListener('mouseenter', () => {
        const id = trigger.dataset.tooltipId;
        const rect = trigger.getBoundingClientRect();
        const layer = document.getElementById('tooltip-layer');
        layer.innerHTML = tooltips[id];
        const tooltip = layer.querySelector('.rich-tooltip');
        tooltip.style.position = 'fixed';
        tooltip.style.top = `${rect.top - 10}px`;
        tooltip.style.left = `${rect.left + 30}px`;
        tooltip.style.zIndex = '10000';
        tooltip.style.display = 'block';
      });

      trigger.addEventListener('mouseleave', () => {
        document.getElementById('tooltip-layer').innerHTML = '';
      });
    });
  </script>
</body>


<table>
    <colgroup>
      <col style="width: 45%;">
      <col style="width: 55%;">
    </colgroup>
    <thead>
      <tr>
        <th>Option</th>
        <th>Function</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><p><strong>Options</strong></p><p><img class="thumbnail border" src="{{ '/assets/images/word/TOC/TOC options.png' | url }}"  alt="Custom Table of contents options in Word" style="width:100%; vertical-align:middle"></p></td>
        <td><p>Lets you map styles to TOC levels as well as choose how many.</p>
        <p><u>Outline levels</u>: include any paragraph that has outline levels set via <a href="/word/paragraph-options/">paragraph options</a></p>
        <p><u>Table entry fields</u>:</p></td>
      </tr>
      <tr>
        <td><p><strong>Modify</strong></p><p><img class="thumbnail border" src="{{ '/assets/images/word/TOC/TOC modify options.png' | url }}"  alt="Custom Table of contents modify options in Word" style="width:100%; vertical-align:middle"></p></td>
        <td>Allows you to change the formatting of the 'TOC' styles, for each TOC level you can customise the font, indentation, leader dots, and spacing.</td>
      </tr>
    </tbody>
</table>


<h2 id="delete-toc">Deleting a table of contents</h2>
<p>Either go to <strong>References > Table of contents > Remove table of contents</strong> or delete the TOC on the page manually with <strong>backspace</strong> or <strong>delete</strong>.</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/TOC/Remove TOC.png' | url }}"  alt="Remove table of contents on ribbon in Word" style="width:50%; vertical-align:middle"></p>

<h2 id="update-toc">Updating a table of contents</h2>
<p></p>
<!-- ask copilot to explain some features -->

</section>