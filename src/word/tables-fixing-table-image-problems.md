---
title: "Tables: Fixing table image problems"
layout: layout.liquid
permalink: /word/tables-fixing-table-image-problems/
canonical: /word/tables-fixing-table-image-problems/
description: How to fix problems with images in tables in Microsoft Word with clear steps, visuals, and animations.
asset_id: ctrlall-word-tables-fixing-table-image-problems-v1
date: 2025-12-30
last_modified: 2025-12-30
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
active: word
---

<!-- Intermediate only -->
<body data-intermediate-only="true">


<h1>Fixing table image problems</h1>

<section class="section-light">

<p>Images and Microsoft Word tables are not friends. Here's a few fixes for common problems.</p>

<ul>
  <li><a href="#image-changed-cell-size">Image has changed my cell size (column width / row height)</a></li>
  <li><a href="#image-too-big-for-cell">Image doesn't fit inside the cell</a></li>
  <li><a href="#image-cell-alignment">Image doesn't align properly in the cell</a></li>
  <li><a href="#image-pushing-table-over-pages">Image pushes table across pages</a></li>
  <li><a href="#image-anchoring-wrapping">Image is anchored to the page rather than the table cell</a></li>
</ul>

<h2 id="image-changed-cell-size">Image has changed my cell size (column width / row height)</h2>
- resize image and column resizes automatically with it
<p>This is pretty normal. An image pasted into a table cell that's larger than the cell's width will expand it. Typically the cell's column expands the most and row height with it. This can leave your table looking a bit skewed.</p>
<p>When this happens you need to resize the image to be smaller using the <strong>sizing handles</strong> (white dots); the column border will adjust with it as you reduce the image's size. Take a look below. More on altering images can be found here: <a href="/word/altering-images-and-objects/#alter-image-object">Altering images and objects</a>.</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/Tables/Resize image in table.gif' | url }}" alt="Demnstration resizing an image in a table in Word" style="max-width:600px; width:100%; height:auto; vertical-align:middle"></p>

<h2 id="image-too-big-for-cell">Image doesn't fit inside the cell</h2>
- image too large for cell - needs to be resized

<h2 id="image-cell-alignment">Image doesn't align properly in the cell</h2>
- image disappears behind the table or obstructs the table due to wrap setting in front of text or behind text
or
- vertical alignment within the cell

<h2 id="image-pushing-table-over-pages">Image pushes table across pages</h2>
- resize image smaller

<h2 id="image-anchoring-wrapping">Image is anchored to the page rather than the table cell</h2>
- Image is anchored to the page rather than the table cell
The problem:  
When an image is inserted with a wrapping style other than In line with text, Word treats it as a floating object. Floating objects are anchored to a paragraph, not a table cell. If the anchor belongs to a paragraph outside the table, the image will drift, jump, or refuse to stay inside the cell.

The fix:  
You have two reliable options:

Option 1 — Force the image to behave like text (most stable)
Set the image’s Wrap Text to In line with text
The image now becomes part of the cell’s text flow
It will stay inside the cell and move with the table
This is the most predictable behaviour for beginners and avoids 90% of layout chaos.

Option 2 — Keep it floating but anchor it correctly
If you need a floating image (e.g., for precise positioning):
Select the image
Look for the anchor icon in the left margin
Drag the anchor into the correct table cell’s paragraph
Or open Layout Options → Fix position on page or Move with text depending on the behaviour you want

Key teaching point:  
The anchor determines what the image is attached to, not where it visually sits. If the anchor is outside the table, the image will never behave like it belongs inside the table.


</section>


