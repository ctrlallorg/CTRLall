---
title: "Tables: Formatting"
layout: layout.liquid
permalink: /word/tables-formatting/
canonical: /word/tables-formatting/
description: Style tables in Word with clear steps, visuals, and animations.
image: /assets/images/Ctrl All logo og.png
asset_id: ctrlall-tables-formatting-v1
date: 2025-10-26
last_modified: 2025-10-26
tags:
  - ctrlall.org
  - ctrlall
  - ctrl all
  - microsoft word
  - tables
  - format a table
  - format tables
  - formatting a table
  - formatting tables
  - style a table
  - style tables
  - styling a table
  - styling tables
  - table layout
  - rows
  - row height
  - row distribution
  - adjust
  - table cell alignment
  - table borders
  - table shading
  - remove paragraph spacing in a table
  - bullet list in table
  - number list in table
  - bullet lists in table
  - number lists in table
active: word
---
<h1>Tables: Formatting</h1>

<section class="section-light">

<p>Besides <span class="glossary-hover" data-term="formatting">formatting text</span> inside a table, there's various ways to format tables themselves:</p>
<ul style="list-style-type: circle;">
    <li><a href="#table-cell-alignment">Table cell alignment</a></li>
    <li><a href="#table-borders">Table borders</a></li>
    <li><a href="#table-shading">Table shading</a></li>
    <li><a href="#remove-paragraph-spacing-from-table">Remove paragraph spacing in a table</a></li>
    <li><a href="#lists-in-tables">Bullet/Number lists in tables</a></li>
</ul>

<h2 id="table-cell-alignment">Table cell alignment</h2> 
<p>Align content vertically and horizontally in the table cell via Table <strong>Layout > Alignment</strong>:</p>
<img class="thumbnail border" src="{{ '/assets/images/word/Tables formatting/Table cell alignment of text examples.gif' | url }}"  alt="Demonstration of table cell alignment in Word" style="height:50%; width:50%; vertical-align:middle">

<h2 id="table-borders">Table borders</h2> 
<p>You can choose whether to have table borders visible or not via options in <strong>Table Design > Borders</strong> drop down. The example below shows how these options work on a table that's been fully selected (hover over and click top left square): </p> 
<table class="no-border">
    <colgroup>
      <col style="width: 20%;">
      <col style="width: 80%;">
    </colgroup>
    <tbody>
      <tr>
        <td><img class="thumbnail border" src="{{ '/assets/images/word/Tables formatting/Table Design Borders drop down menu.png' | url }}"  alt="Table Design Borders drop down menu on ribbon in Word" style="height:100%; width:100%; vertical-align:middle"></td>
        <td><img class="thumbnail border" src="{{ '/assets/images/word/Tables formatting/Table border line edit.gif' | url }}"  alt="Demonstration of table border lines being edited in Word" style="height:100%; width:100%; vertical-align:middle"></td>
      </tr>
</table>

<h2 id="table-shading">Table shading</h2> 
<p>You can colour the background of cell with the <strong>Shading</strong> colour palette via <strong>Table Design > Shading</strong>:</p> 
<img class="thumbnail border" src="{{ '/assets/images/word/Tables formatting/Table shading edit.gif' | url }}"  alt="Demonstration of table background colour shading being edited in Word" style="height:75%; width:75%; vertical-align:middle">
<p>The example above is applying shading to a whole table but you might want to apply shading to just the header row like this:</p>
<img src="{{ '/assets/images/word/Tables formatting/Header row shading.png' | url }}"  alt="Table header row shaded grey in Word" style="height:6%; width:65%; vertical-align:middle">

<h2 id="remove-paragraph-spacing-from-table">Remove paragraph spacing in a table</h2> 
<p>If you're coping a table from other Word document, Excel or a web browser it can come across with unwanted paragraph spacing. To remove this go to the <strong>Home > Paragraph options (bottom right corner button)</strong> and remove spacing 'points' as needed. Typically it's spacing after that needs reducing. Take a look:</p> 
<img class="thumbnail border" src="{{ '/assets/images/word/Tables formatting/Remove paragraph spacing from table.gif' | url }}"  alt="Demonstration removing paragraph spacing from a table in Word" style="height:70%; width:70%; vertical-align:middle">

<h2 id="lists-in-tables">Bullet/Number lists in tables</h2> 
<p>You might find when applying a bullet list or number list to a table that the default indent Word applies isn't ideal in such a contrained space, see a quick fix here involving indent markers on the horizontal ruler: <a href="/word/indents/#table-lists-and-indents">Table lists and indents</a>.</p>

<img class="thumbnail border" src="{{ '/assets/images/word/Indents/Table list default indent.png' | url }}"  alt="List in a table selected with default indent marker positions in Word" style="height:70%; width:70%; vertical-align:middle">

<h4>Cut, copy and paste tables</h4> 
<p>When it comes to pasting tables you get some different pasting options. Firs there's a referesher on cut, copy and paste if you need it:</p>
<ul>
  <li><u>Cut</u>: see <a href="/content-control/moving-content/#cut-and-paste" target="_blank">Moving content</a></li>
  <li><u>Copy</u>: see <a href="/content-control/copying-content/" target="_blank">Copying content</a></li>
  <li><u>Paste</u>: depending on what content you've cut or copied, and where you are pasting, you'll see different paste options in and around tables:</li>
  </ul>
<table>
  <colgroup>
      <col style="width: 30%;">
      <col style="width: 70%;">
    </colgroup>
    <thead>
      <tr>
        <th>Paste icon</th>
        <th>Definition</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background-color: #f0f0f0;">
        <td colspan="2"><strong>Pasting non-table content into a table</strong>
        <div style="text-align: center;"><img class="thumbnail" src="{{ '/assets/images/word/Tables formatting/Pasting non-table content into table options.png' | url }}"  alt="Pasting non-table content into table option icons" style="width:33%; vertical-align:middle"></div></td>
      </tr>
      <tr>
        <td>Paste - Keep Source Formatting
        <div style="text-align: center;"><img class="thumbnail" src="{{ '/assets/images/word/Formatting text/Paste Keep Source Formatting.png' | url }}"  alt="Paste Keep Source Formatting icon" style="width:20%; vertical-align:middle"></div></td>
        <td>Pastes the content into the table retaining its existing formatting. Think about whether you want external formatting brought into your table before choosing this option.</td>
      </tr>
      <tr>
        <td>Paste - Merge Formatting
        <div style="text-align: center;"><img class="thumbnail" src="{{ '/assets/images/word/Formatting text/Paste Merge Formatting.png' | url }}"  alt="Paste Merge Formatting icon" style="width:20%; vertical-align:middle"></div></td>
        <td>Paste content into the table taking on the destination table's formatting.</td>
      </tr>
      <tr>
        <td>Paste - Picture
        <div style="text-align: center;"><img class="thumbnail" src="{{ '/assets/images/word/Formatting text/Paste Picture.png' | url }}"  alt="Paste Picture icon" style="width:20%; vertical-align:middle"></div></td>
        <td><p>Pastes content as an image.</p>
        <p><u>Note</u>: Depending on the size images can alter the table layout pushing columns and rows out.</p></td>
      </tr>
      <tr>
        <td>Paste - Keep Text Only
        <div style="text-align: center;"><img class="thumbnail" src="{{ '/assets/images/word/Formatting text/Paste Keep Text Only.png' | url }}"  alt="Paste Keep Text Only icon" style="width:20%; vertical-align:middle"></div></td>
        <td><p>Pastes text into the table without any formatting, just it's character value.</p> <p><u>Note</u>: The content will not take on any formatting inside the destination table.</p></td>
      </tr>
      <tr style="background-color: #f0f0f0;">
        <td colspan="2"><strong>Pasting cut/copied table content into a table</strong>
        <div style="text-align: center;"><img class="thumbnail" src="{{ '/assets/images/word/Tables formatting/Pasting table content into table options.png' | url }}"  alt="Pasting table content into table option icons" style="width:33%; vertical-align:middle"></div></td>
      </tr>
      <tr>
        <td>Paste - Nest Table
        <div style="text-align: center;"><img class="thumbnail" src="{{ '/assets/images/word/Tables formatting/Paste Nest Table.png' | url }}"  alt="Paste Nest Table icon" style="width:20%; vertical-align:middle"></div></td>
        <td><p>Pastes the table content as a table within a table.</p>
        <p><u>Note</u>: A word of warning, this can get messy, if using this option choose what content you want to paste selectively, and consider which cell to paste it in with the <span class="glossary-hover" data-term="insertion-point">insertion point</span> beforehand. Less is more here as it will almost certainly expand the destination cell's column width and row height.</p></td>
      </tr>
      <tr>
        <td>Paste - Merge Table
        <div style="text-align: center;"><img class="thumbnail" src="{{ '/assets/images/word/Tables formatting/Paste Merge Table.png' | url }}"  alt="Paste Merge Table icon" style="width:20%; vertical-align:middle"></div></td>
        <td><p>I'd recommend not using this paste option within a table, or at least use it cautiously as it can be quite erratic pasting certain cells. Generally it pastes copied/cut table cell content in the rows below where you've selected, overwriting the content in those cells rather than 'merging' it.</p>
        <p>If you select all the columns in the destination table then use this option, it will typically add the cut/copied table content as new columns on the left, subsequently pushing everything else right and likely off the page. If you find your table in this situation and can't immediately <span class="glossary-hover" data-term="undo">undo</span> the damage see this article on how to fix it: <a href="/word/tables-fixing-tables-extending-offscreen/">Tables extending off the page</a>.</p></td>
      </tr>
      <tr>
        <td>Paste - Insert as New Rows
        <div style="text-align: center;"><img class="thumbnail" src="{{ '/assets/images/word/Tables formatting/Paste Insert as New Rows.png' | url }}"  alt="Paste Insert as New Rows icon" style="width:20%; vertical-align:middle"></div></td>
        <td>Pastes table content as new row(s) below the row you pointed the <span class="glossary-hover" data-term="insertion-point">insertion point</span> at.</td>
      </tr>
      <tr>
        <td>Paste - Insert as New Columns
        <div style="text-align: center;"><img class="thumbnail" src="{{ '/assets/images/word/Tables formatting/Paste Insert as New Columns.png' | url }}"  alt="Paste Insert as New Columns icon" style="width:20%; vertical-align:middle"></div></td>
        <td>Pastes content as new column(s) left of the column you pointed the <span class="glossary-hover" data-term="insertion-point">insertion point</span> at.</td>
      </tr>
      <tr>
        <td>Paste - Overwrite Cells
        <div style="text-align: center;"><img class="thumbnail" src="{{ '/assets/images/word/Tables formatting/Paste Overwrite Cells.png' | url }}"  alt="Paste Overwrite Cells icon" style="width:20%; vertical-align:middle"></div></td>
        <td>Pastes over the data in the table with the copied/cut table content. The table layout doesn't change but the data does; the new data bring its formatting with it into the table.</td>
      </tr>
      <tr>
        <td>Paste - Keep Text Only
        <div style="text-align: center;"><img class="thumbnail" src="{{ '/assets/images/word/Tables formatting/Paste Keep Text Only.png' | url }}"  alt="Paste Keep Text Only icon" style="width:20%; vertical-align:middle"></div></td>
        <td><p>Pastes table content without any formatting it originally had, just the character value.</p> <p><u>Note</u>: The content will not take on any formatting in the destination table.</p></td>
      </tr>
      <tr>
      <tr style="background-color: #f0f0f0;">
      <td colspan="2"><strong>Pasting cut/copied table content directly underneath a table</strong>
        <div style="text-align: center;"><img class="thumbnail" src="{{ '/assets/images/word/Tables formatting/Pasting table content beneath table options.png' | url }}"  alt="Pasting table content beneath table option icons" style="width:33%; vertical-align:middle"></div></td>
      <tr>
        <td>Paste - Keep Original Table Formatting
        <div style="text-align: center;"><img class="thumbnail" src="{{ '/assets/images/word/Tables formatting/Paste Keep Original Table Formatting.png' | url }}"  alt="Paste Keep Original Table Formatting icon" style="width:20%; vertical-align:middle"></div></td>
        <td><p>Pastes table content 'as is' with its original formatting intact. It becomes part of the table above as added rows/columns underneath.</p>
        <p><u>Note</u>: With this paste option the column border edges of the pasted content sometimes don't quite align with the table above so you may have to tweak it.<p></td>
      </tr>
      <tr>
        <td>Paste - Merge Table
        <div style="text-align: center;"><img class="thumbnail" src="{{ '/assets/images/word/Tables formatting/Paste Merge Table.png' | url }}"  alt="Paste Merge Table icon" style="width:20%; vertical-align:middle"></div></td>
        <td>Pastes table content which becomes part of the destination table above it as added rows/columns.</td>
      </tr></strong></td>
      </tr>
      <tr>
        <td>Paste - Keep Text Only
        <div style="text-align: center;"><img class="thumbnail" src="{{ '/assets/images/word/Tables formatting/Paste Keep Text Only.png' | url }}"  alt="Paste Keep Text Only icon" style="width:20%; vertical-align:middle"></div></td>
        <td>Pastes table content without a table frame around it, content is instead structured by <span class="glossary-hover" data-term="tab-stop">tabs</span> for columns and <span class="glossary-hover" data-term="hard-return">hard returns</span> for rows.</p></td>
      </tr>
    </tbody>
</table>

</section>