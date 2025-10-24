---
title: "Tables: Fixing tables over pages"
layout: layout.liquid
active: word
permalink: /word/tables-fixing-tables-over-pages/
canonical: /word/tables-fixing-tables-over-pages/
asset_id: ctrlall-tables-fixing-tables-over-pages-v1
image: /assets/images/Ctrl All logo blue.svg
description: How to alter tables extending over pages Microsoft Word with clear steps, visuals, and animations.
keywords: Word, Microsoft Word, table, table layout, column, row height, row distribution, rogue row, space, white space, extend, extended, off the page, offscreen, off-screen off the screen, can't see, invisible, can't control, gone, over the edge, area, beyond the margin, disappears, disappeared, moves to next page, shifts down, jumps down, page break, split table, splitting, separates, repeat header row, top of page, merged rows, fit on page, how do i, broken, not working, problem, issue, error, help, get back, retrieve, solution, answer.
---

<h1>Fixing tables over pages</h1>

Tables extending across multiple pages can sometimes throw up a few headaches. Here's a few scenarios you might encounter and fixes for them. In this article:
<ul style="list-style-type: circle;">
    <li><a href="#table-row-break">Table content splitting across pages</a></li>
    <li><a href="#table-content-fit-one-page">What if I need my content to stay on one page?</a></li>
    <li><a href="#header-rows-repeat">Repeating a table header row across pages</a></li>
    <li><a href="#header-rows-include-other-rows">Include other rows in repeated table header rows</a></li>
    <li><a href="#header-rows-unwanted-merged-rows">Table header rows repeating with unwanted merged cells</a></li>
    <li><a href="#merge-rows-with-header-row">Merging multiple rows with the header row</a></li>
</ul>


<section class="section-light">

<h2 id="table-row-break">Table content splitting across pages</h2> 

<p>If your table content can’t fit on a page it will overflow to the next page. So now the row is essentially split straddling both pages. If you don’t want table rows breaking across two pages like this then there is an option you can apply to push the whole row affected down to the next page. This can be useful where it’s important to keep information together.</p>

<img class="thumbnail" src="{{ '/assets/images/word/Tables fixing tables over pages/Table row row break over pages.png' | url }}"  alt="Table row breaking over pages" style="height:65%; width:65%; vertical-align:middle">

<p><strong>Right click</strong> anywhere on the table and select <strong>Table Properties</strong>.</p>

<img class="thumbnail" src="{{ '/assets/images/word/Tables fixing tables over pages/Table properties.png' | url }}"  alt="Table Properties" style="height:25%; width:25%; vertical-align:middle">

<p>In Table Properties under the <strong>Row</strong> tab the option <strong>Allow row to break across pages</strong> will be checked by default, <strong>uncheck it</strong>, then press OK.</p>

<img class="thumbnail" src="{{ '/assets/images/word/Tables fixing tables over pages/Table properties row break across pages option.png' | url }}"  alt="Table properties row break across pages option" style="height:40%; width:40%; vertical-align:middle">

Now instead of content overflowing the whole row moves down to the next page instead.
<p><u>Note</u>: It will leave a space on the page before, so consider whether this is what you want.</p>

<img class="thumbnail" src="{{ '/assets/images/word/Tables fixing tables over pages/Table row not breaking across pages.png' | url }}"  alt="Table row not breaking across pages" style="height:65%; width:65%; vertical-align:middle">



<h2 id="table-content-fit-one-page">What if I need my content to stay on one page?</h2> 

<p>Table content overflows to the next page if it can't all fit on that page. If you need all the content to fit on the page before consider:</p>
<ul>
    <li>Removing empty lines that you don't need (typically caused by <span class="glossary-hover" data-term="hard-return">hard returns</span> or <span class="glossary-hover" data-term="soft-return">soft returns</span>)</li>
    <li><a href="/word/formatting-text/">Reducing the font size</a></li>
    <li><a href="/word/images/#image-resize">Resizing images</a> to fit</li>
    <li>If you have space try <a href="/word/tables/">expanding the column width</a> to give the content more space</li>
    <li>If possible alter the document's <span class="glossary-hover" data-term="margin">top and bottom margins</span> to be wider. This should be a last resort though as it affects the whole document or <span class="glossary-hover" data-term="section">section</span>.</li>
</ul>



<h2 id="header-rows-repeat">Repeating a table header row across pages</h2>

<p>If your table is over more than one page and you have a header row you it won't come across to the next page by default. To have the header row appear the top of each page your table extends to is an easy fix.</p>

<img class="thumbnail" src="{{ '/assets/images/word/Tables fixing tables over pages/Table with header row.png' | url }}"  alt="Table with header row" style="height:85%; width:85%; vertical-align:middle">

<p>Click on that header row, then <strong>right click</strong> and select <strong>Table properties</strong>.</p>

<img class="thumbnail" src="{{ '/assets/images/word/Tables fixing tables over pages/Table properties.png' | url }}"  alt="Table Properties" style="height:30%; width:30%; vertical-align:middle">
s
<p>In Table Properties under <strong>Row</strong> check the option <strong>Repeat as header row at the top of each page</strong>, then click <strong>OK</strong>.</p> 
    <p><u>Note</u>: If the option is greyed out for you that means you’ve clicked on/selected another row that’s not the header row.</p>

<img class="thumbnail" src="{{ '/assets/images/word/Tables fixing tables over pages/Table properties repeat header row.png' | url }}"  alt="Table properties repeat header row" style="height:50%; width:50%; vertical-align:middle">

<p>Now the header row is applied at the top of each page.</p>

<img class="thumbnail" src="{{ '/assets/images/word/Tables fixing tables over pages/Header row over multiple pages.png' | url }}"  alt="Table with header row" style="height:85%; width:85%; vertical-align:middle">

<h3>Issues you can come across</h3>
<p>Even when <strong>Repeat as header row</strong> is selected, there are other things that might require some surgery for it to work as you need it.</p>

<h2 id="header-rows-include-other-rows">Include other rows with repeated table header rows</h2>

<p>In some cases you might want subheading rows to repeat with the header row on other pages the table extends to.</p>

<img class="thumbnail border" src="{{ '/assets/images/word/Tables fixing tables over pages/Header row and subheading row.png' | url }}"  alt="Header row and subheading row" style="height:50%; width:50%; vertical-align:middle">

<p>To do this simply select the header row and extra rows you want to include, then do the same as shown above; <strong>right click</strong>, go to <strong>Table properties</strong> then on the <strong>Row</strong> tab check <strong>Repeat as header row at the top of each page</strong>, then click <strong>OK</strong>.</p> 

<img class="thumbnail border" src="{{ '/assets/images/word/Tables fixing tables over pages/Header row and subheading row selected.png' | url }}"  alt="Header row and subheading row selected" style="height:50%; width:50%; vertical-align:middle">

<img class="thumbnail" src="{{ '/assets/images/word/Tables fixing tables over pages/Header row and subheading row over multiple pages.png' | url }}"  alt="Header row and subheading row repeated over multiple pages" style="height:85%; width:85%; vertical-align:middle">

<h2 id="header-rows-unwanted-merged-rows">Table header rows repeating with unwanted merged cells</h2>

<p>Here we’ve got a cell on the right column merged with the header row. When repeating the header row on the next page, because it's merged with the header row and we have <strong>Repeat as header row</strong> switched on, it's bringing across that second row as well.</p>

<img class="border" src="{{ '/assets/images/word/Tables fixing tables over pages/Header row merged cell.png' | url }}"  alt="Header row with merged cells over multiple pages" style="height:55%; width:55%; vertical-align:middle">
 <img class="thumbnail" src="{{ '/assets/images/word/Tables fixing tables over pages/Header row merged cell over multiple pages.png' | url }}"  alt="Header row with merged cells over multiple pages" style="height:85%; width:85%; vertical-align:middle">

<p>What if you don't want that and just want the top header row repeating? There’s a few ways we can tackle this:</p>

<ol>
    <li>Ask yourself do those cells really need to be merged? You can have them separate and <a href="/word/tables-formatting/">alter the table's formatting</a> with borders and shading so it still <i>looks</i> merged if needed. That way the top row remains a true header row and Word will only repeat that. 
    <p>For the example above we'd rebuild the rows. The easiest way to do that would be to merge the left column's 2nd row with the header row, create a new row below it and move the extra content into that row (<span class="glossary-hover" data-term="cut-and-paste">cut and paste</span> it), then clean up the header row height (<a href="/word/tables/">adjusting it with your mouse</a>) and if needed <a href="/word/tables-formatting/">style</a> the new row e.g. if you want it to stand out as a subheading.</p></li>
    <img class="thumbnail" src="{{ '/assets/images/word/Tables fixing tables over pages/Fixing merged table rows.gif' | url }}"  alt="Fixing merged table rows" style="height:85%; width:85%; vertical-align:middle">
    <li>If you want merged cells to show on some pages but not on others then that’s trickier. Instead it’s better to split your table into different tables and create a new header row matching the last.</li>
</ol>

<h2 id="merge-rows-with-header-row">Merging multiple rows with the header row</h2>  

<p>Another trick to keep in mind is so long as <strong>Repeat as header row</strong> is switched on, any rows merged with the header row (including any rows merged with that row too) will be repeated on other pages the table extends to. You can actually get quite complex with this, like in this example below where the merged rows on the right share the same row as the merged rows on the left, so Word includes them all as one large header row.</p> 

<img class="thumbnail" src="{{ '/assets/images/word/Tables fixing tables over pages/Complex header row example.png' | url }}"  alt="Complex header and subheading rows example" style="height:65%; width:65%; vertical-align:middle"> 
<img class="thumbnail" src="{{ '/assets/images/word/Tables fixing tables over pages/Complex header row example across pages.png' | url }}"  alt="Complex header and subheading rows example across pages" style="height:100%; width:100%; vertical-align:middle">

