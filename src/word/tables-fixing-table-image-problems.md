---
title: "Tables: Fixing Table Image Problems in Microsoft Word – Cell Size, Alignment and Wrap Settings – Ctrl All"
layout: layout.liquid
permalink: /word/tables-fixing-table-image-problems/
description: How to fix common image problems in Microsoft Word tables. Covers images expanding column width and row height, images too large for a cell, cell alignment with different wrap settings, resizing large images that push a table across pages, and images disappearing behind or in front of table content.
asset_id: ctrlall-word-tables-fixing-table-image-problems-v1
date: 2025-12-30
last_modified: 2026-06-07
difficultyLevels:
  - level: Intermediate
    description: "Explores amending table images issues with advanced solutions for intermediate level."
    urlSuffix: "#intermediate"
tags:
  - ctrlall.org
  - ctrlall
  - ctrl all
  - microsoft word
  - tables
  - table layout
  - columns
  - column width
  - column distribution
  - rogue columns
  - extending off screen
  - going off screen
  - disappears
  - disappeared
  - can't see
  - invisible
  - can't control
  - gone
  - over the edge
  - beyond the margins
  - grey areas
  - issues
  - problems
  - errors
  - broken
  - not working
  - help
  - how do i
  - retrieve
  - get back
intermediate_only: true
active: word
---

<h1>Fixing table image problems</h1>

<div id="article-badge" class="article-badge intermediate-only">⚡ Intermediate Level Only</div>

<section class="section-light">

<p>Images and Microsoft Word tables are not friends. Here's a few fixes for common problems.</p>

<ul>
  <li><a href="#image-changed-cell-size">Image has changed my cell size (column width / row height)</a></li>
  <li><a href="#image-too-big-for-cell">Image doesn't fit inside the cell</a></li>
  <li><a href="#image-cell-alignment">Image doesn't align properly in the cell</a></li>
  <li><a href="#image-pushing-table-over-pages">Image pushes table across pages</a></li>
</ul>

<h2 id="image-changed-cell-size">Image has changed my cell size (column width / row height)</h2>
<p>This is pretty normal. An image pasted into a table cell that's larger than the cell's width will expand it. Typically the cell's column expands the most and row height with it. This can leave your table looking a bit skewed.</p>
<p>When this happens you need to resize the image to be smaller using the <strong>sizing handles</strong> (white dots); the column border will adjust with it as you reduce the image's size. Take a look below. More on altering images can be found here: <a href="/word/altering-images-and-objects/#alter-image-object">Altering images and objects</a>.</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/Tables fixing image problems/Resize image in table.gif' | url }}" alt="Demonstration resizing an image in a table in Word" style="max-width:600px; width:100%; height:auto; vertical-align:middle"></p>

<h2 id="image-too-big-for-cell">Image doesn't fit inside the cell</h2>
<p>Pasted an image that is larger than the cell? Everything gets squashed and you can't see some of the image you've pasted. Here's an example:</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/Tables fixing image problems/Image too big for cell example 1.png' | url }}" alt="Example image too large for table cell in Word" style="max-width:600px; width:100%; height:auto; vertical-align:middle"></p>

<p><img class="thumbnail border" src="{{ '/assets/images/word/Tables fixing image problems/Image too big for cell example 2.png' | url }}" alt="Example image too large for table cell in Word" style="max-width:600px; width:100%; height:auto; vertical-align:middle"></p>

<p>See how the image's selection frame is extended beyond the column but it's still visible? The solution is the same as the one above, simply resize using the corner sizing handle to make the image smaller so it fits the cell; the column width will reduce with the image automatically.</p>

<p><img class="thumbnail border" src="{{ '/assets/images/word/Tables fixing image problems/Image too big for cell example.gif' | url }}" alt="Demonstration resizing an image too large for its table cell in Word" style="max-width:600px; width:100%; height:auto; vertical-align:middle"></p>

<h2 id="image-cell-alignment">Image doesn't align properly in the cell</h2>
<h4>Table cell alignment</h4>
<p>When pasting an image into a table cell by default they'll have the wrap setting <strong>In line with Text</strong> so they sit on the same line as the text. The default cell alignment for content in table cells is <strong>Align Top Left</strong>. If you want to change this then select the table cell(s) and go to <strong>Table Layout > Alignment</strong> where you'll see a grid of cell horizontal and vertical cell alignment options.</p>
<p><u>Note</u>: The alignment applies to <u>all</u> content in the cell.</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/Tables fixing image problems/Image and text table cell alignment example.gif' | url }}" alt="Image and text table cell alignment demonstration in Word" style="max-width:600px; width:100%; height:auto; vertical-align:middle"></p>

<h4>Table cell alignment with other wrap settings</h4>
<p>If your table image's wrapping setting is not the default <strong>In line with Text</strong> then it will behave differently with the cell alignment options. You'll find that it only responds to changes to vertical alignment; it won't listen to any horizontal alignment. Any text in the cell will still respond as normal but your options with the image are limited.</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/Tables fixing image problems/Image and text table cell alignment other wrap settings example.gif' | url }}" alt="Image with non-default wrap settings and text table cell alignment demonstration in Word" style="max-width:600px; width:100%; height:auto; vertical-align:middle"></p>


<h2 id="image-pushing-table-over-pages">Image pushes table across pages</h2>
<p>Some really large images can push a table over to another page. In these instances it can be difficult to select and drag the sizing handles of such large images; instead one way to reduce very large images is via the <strong>right click menu > Size and Position</strong> option.</p>

<p><img class="thumbnail border left" src="{{ '/assets/images/word/Tables fixing image problems/Right click Size and Position.png' | url }}" alt="Right click menu Size and Position option in Word" style="max-width:225px; width:100%; height:auto; vertical-align:middle"></p>

<p>This brings up the <strong>Layout</strong> dialog. Under <strong>Scale</strong> you'll see the <strong>Height</strong> and <strong>Width</strong> of the selected image in percentages. By default these two are locked together so you can just lower the percentage of one and the other will recalculate accordingly. Reduce the scale to a lower number so the image fits in the cell or it's small enough to resize down some more via the sizing handles.</p>
<p><img class="thumbnail border left" src="{{ '/assets/images/word/Tables fixing image problems/Layout size.png' | url }}" alt="Image layout size options in Word" style="max-width:450px; width:100%; height:auto; vertical-align:middle"></p>
<p>Here it is in action:</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/Tables fixing image problems/Image pushing table over pages.gif' | url }}" alt="Image pushing table over pages demonstration in Word" style="max-width:600px; width:100%; height:auto; vertical-align:middle"></p>

<h2>Image disappears behind/above the table</h2>
<p>Got an image floating behind or above your table?</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/Tables fixing image problems/Image behind text in table 1.png' | url }}" alt="Image behind text in table in Word" style="max-width:600px; width:100%; height:auto; vertical-align:middle"></p>
<p>This is happening because you have a certain wrap setting for your image; either <strong>Behind Text</strong> or <strong>In Front of Text</strong> is selected. You need to change this to a different wrap type. Do this via the <strong>Layout Options</strong> with the image selected.</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/Tables fixing image problems/Image behind text in table 2.png' | url }}" alt="Image behind text in table in Word" style="max-width:600px; width:100%; height:auto; vertical-align:middle"></p>
<p><u>Note</u>: Cell alignment works differently for wrap types that aren't <strong>In Line with Text</strong>, see here for more: <a href="#image-cell-alignment">Table cell alignment</a>.</p>

</section>

<div class="article-share">
{% include "share-menu.liquid" %}
</div>

