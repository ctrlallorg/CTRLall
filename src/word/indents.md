---
title: "Indents"
layout: layout.liquid
permalink: /word/indents/
canonical: /word/indents/
description: Indents in Microsoft Word with clear steps, visuals, and animations.
image: /assets/images/Ctrl All logo blue.svg
asset_id: ctrlall-indents-v1
date: 2025-10-26
last_modified: 2025-10-26
tags:
  - ctrlall.org
  - ctrlall
  - ctrl all
  - microsoft word
  - indents
  - indenting
  - indentation
  - indent markers
  - tab stops
  - tabs
  - move the first line
  - move rest of the paragraph
  - move text left and right
  - move text horizontally
  - margins
  - hanging indents
  - first line indents
  - left indents
  - spaces
  - spacing
active: word
---

<h1>Indents</h1>

<section class="section-light">

<p>Indents are spaces between content and the margin.</p>

<p>You can create indents pressing the <strong>Tab</strong> key and remove them by deleting them with <strong>backspace</strong>.</p>

<p><img class="border" src="{{ '/assets/images/word/Indents/Indent%20example.png' | url }}" alt="An indented paragraph" style="display: inline; height:80%; width: 80%;"></p>

<p>You can also adjust indents with indent markers on the <strong>ruler</strong> tool. To enable to the ruler go to <strong>View > Show</strong> and check <strong>Ruler</strong>. Below we'll look at different uses</p>

<p><img src="{{ '/assets/images/word/Indents/ruler.png' | url }}" alt="Ruler tool checkbox on ribbon in Word" style="display: inline; height:20%; width: 20%;"></p>


<h2 id="paragraphs-and-indents">Paragraphs and indents</h2>

With the <span class="glossary-hover" data-term="insertion-point">insertion point</span> on the paragraph, on the ruler above the page you'll see the indent markers aligned together like this:
<p><img class="border" src="{{ '/assets/images/word/Indents/Paragraph%20indent%20markers%20on%20ruler.png' | url }}" alt="Paragraph and indent markers on ruler in Word" style="display: inline; height:100%; width: 100%;"></p>

<p>Here's what each of the indent markers do when working with paragraphs:</p>

<table class="no-border">
    <colgroup>
      <col style="width: 20%;">
      <col style="width: 80%;">
    </colgroup>
    <tbody>
      <tr>
        <td><img src="{{ '/assets/images/word/Indents/First%20line%20indent.png' | url }}" alt="Fire line indent arrow icon" style="display: block; height:50%; width: 50%;"></td>
        <td><strong>First line indent</strong> - Controls where the first line of the paragraph begins.</td>
      </tr>
      <tr>
        <td><img src="{{ '/assets/images/word/Indents/Hanging%20Indent.png' | url }}" alt="Hanging indent arrow icon" style="display: block; height:50%; width: 50%;"></td>
        <td><strong>Hanging Indent</strong> - Controls where all lines except the first line begin.
      <tr>
        <td><img src="{{ '/assets/images/word/Indents/Left%20Indent.png' | url }}" alt="Left indent rectangle icon" style="display: block; height:50%; width: 50%;"></td>
        <td><strong>Left Indent</strong> - Moves both the above indents together, shifting the entire paragraph left or right.
      </tr>
</table>

<p><img class="border" src="{{ '/assets/images/word/Indents/Paragraph%20indent%20marker%20adjust%20example.gif' | url }}" alt="Demonstration adjusting paragraph and indent markers" style="display: inline; height:100%; width: 100%;"></p>


<section class="indent-demo" style="background-color: #EBFFFF; padding: 40px;">
  <h3> Try it out</h3>
  <p>Adjust the sliders to see how the different indent markers interact with a paragraph of text.</p>

  <div class="indent-controls" style="margin-bottom: 1em;">


    <label for="firstLineIndent"><img src="{{ '/assets/images/word/Indents/First%20line%20indent.png' | url }}" alt="First line indent" style="display: inline; padding-top: 0.5em;padding-right: 0.5em;height:5%; width: 5%;"> <strong>First line indent</strong> (Move first line of text):</label>
    <input type="range" id="firstLineIndent" min="0" max="5" step="0.25" value="0" oninput="updateIndent()">
    <span id="firstLineVal">0.00</span> cm

    <label for="hangingIndent"><img src="{{ '/assets/images/word/Indents/Hanging%20indent.png' | url }}" alt="Hanging indent" style="display: inline; padding-right: 0.5em; height:5%; width: 5%;"> <strong>Hanging indent</strong> (Move all text except first line):</label>
    <input type="range" id="hangingIndent" min="0" max="5" step="0.25" value="0" oninput="updateIndent()">
    <span id="hangingVal">0.00</span> cm

    <label for="leftIndent"><img src="{{ '/assets/images/word/Indents/Left%20indent.png' | url }}" alt="Left indent" style="display: inline; padding-top: 0.5em; padding-right: 0.5em; height:5%; width: 5%;"> <strong>Left indent</strong> (Move all pargraph text together):</label>
    <input type="range" id="leftIndent" min="0" max="5" step="0.25" value="1.27" oninput="updateIndent()">
    <span id="leftVal">1.27</span> cm 

  </div>

  <p id="demoText" style="max-width: 100%;">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
  </p>

  <script>
    function updateIndent() {
      const left = parseFloat(document.getElementById('leftIndent').value);
      const first = parseFloat(document.getElementById('firstLineIndent').value);
      const hanging = parseFloat(document.getElementById('hangingIndent').value);

      document.getElementById('leftVal').textContent = left.toFixed(2);
      document.getElementById('firstLineVal').textContent = first.toFixed(2);
      document.getElementById('hangingVal').textContent = hanging.toFixed(2);

      const text = document.getElementById('demoText');

      // Base indent for the whole paragraph
      text.style.paddingLeft = (left + hanging) + 'cm';

      // Pull first line back to simulate fixed position
      text.style.textIndent = (first - hanging) + 'cm';
    }
  </script>
</section>

<div style="margin-top: 100px;"></div>

<h2 id="lists-and-indents">Lists and indents</h2>

When it comes to bullet and number lists, the indent markers work slightly differently. They're not aligned like in paragraphs and this is to do with the different functions they have for lists.

<p><img class="border" src="{{ '/assets/images/word/Indents/List%20indent%20markers%20on%20ruler.png' | url }}" alt="Lists and indent markers on ruler in Word" style="display: inline; height:50%; width: 50%;"></p>

<table class="no-border">
    <colgroup>
      <col style="width: 20%;">
      <col style="width: 80%;">
    </colgroup>
    <tbody>
      <tr>
        <td><img src="{{ '/assets/images/word/Indents/First%20line%20indent.png' | url }}" alt="First line indent arrow icon" style="display: block; height:50%; width: 50%;"></td>
        <td><strong>First line indent</strong> - Controls where bullet/number begins.</td>
      </tr>
      <tr>
        <td><img src="{{ '/assets/images/word/Indents/Hanging%20Indent.png' | url }}" alt="Hanging indent arrow icon" style="display: block; height:50%; width: 50%;"></td>
        <td><strong>Hanging Indent</strong> - Controls where the text begins after the bullet.
      <tr>
        <td><img src="{{ '/assets/images/word/Indents/Left%20Indent.png' | url }}" alt="Left indent rectangular icon" style="display: block; height:50%; width: 50%;"></td>
        <td><strong>Left Indent</strong> - Moves both the above indents together, shifting both the bullet/number and line/paragraph left or right.
      </tr>
</table>

<p>Here's a simple example adjusting the bullet and spacing on a single sub-bullet. Typically you'd  adjust all the sub-bullets together, in which case you'd select them all first then drag the indent markers as needed.</p>

<p><img class="border" src="{{ '/assets/images/word/Indents/List%20indent%20marker%20adjust%20example.gif' | url }}" alt="Demontration adjusting list indent marker" style="display: inline; height:50%; width: 50%;"></p>

<section class="indent-demo" style="background-color: #EBFFFF; padding: 40px;">
  <h3>Have a go</h3>
 <p>Adjust the sliders to see how the different indent markers interact with bullet/number lists.</p>

  <div class="indent-controls">
    <label for="svgFirstLineIndent"><strong>First line indent</strong> (moves bullet):</label>
    <input type="range" id="svgFirstLineIndent" min="0" max="5" step="0.25" value="0" oninput="updateSvgIndent()">
    <span id="svgFirstLineVal">0.00</span> cm

    <label for="svgHangingIndent"><strong>Hanging indent</strong> (moves text):</label>
    <input type="range" id="svgHangingIndent" min="0" max="5" step="0.25" value="0" oninput="updateSvgIndent()">
    <span id="svgHangingVal">0.00</span> cm

    <label for="svgLeftIndent"><strong>Left indent</strong> (moves both together):</label>
    <input type="range" id="svgLeftIndent" min="0" max="5" step="0.25" value="0" oninput="updateSvgIndent()">
    <span id="svgLeftVal">0.00</span> cm
  </div>

 <svg id="indentSVG" width="800" height="100" xmlns="http://www.w3.org/2000/svg">
  <text id="bullet" x="50" y="40"
        font-size="14px"
        font-family="Inter, system-ui, sans-serif"
        fill="#333">•</text>
  <text id="text" x="70" y="40"
        font-size="14px"
        font-family="Inter, system-ui, sans-serif"
        fill="#333">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</text>
</svg>


  <script>
    function updateSvgIndent() {
      const cmToPx = 37.8;

      const leftIndent = parseFloat(document.getElementById("svgLeftIndent").value);
      const firstLineIndent = parseFloat(document.getElementById("svgFirstLineIndent").value);
      const hangingIndent = parseFloat(document.getElementById("svgHangingIndent").value);

      document.getElementById("svgLeftVal").textContent = leftIndent.toFixed(2);
      document.getElementById("svgFirstLineVal").textContent = firstLineIndent.toFixed(2);
      document.getElementById("svgHangingVal").textContent = hangingIndent.toFixed(2);

      const baseX = 50 + leftIndent * cmToPx;
      const bulletX = baseX + firstLineIndent * cmToPx;
      let textX = baseX + hangingIndent * cmToPx;

      const gap = textX - bulletX;
      if (gap < 0.7 * cmToPx) {
        const overlapSteps = Math.ceil((0.7 * cmToPx - gap) / (0.7 * cmToPx));
        textX += overlapSteps * 0.7 * cmToPx;
      }

      document.getElementById("bullet").setAttribute("x", bulletX);
      document.getElementById("text").setAttribute("x", textX);
    }

    window.onload = updateSvgIndent;
  </script>
</section>


<h4>If you want to be precise</h4>
<p>Word gives you the option to specify the measurements exactly if you need to. Just <strong>right click</strong> on the bullet/number and select <strong>Adjust list indents</strong> and you'll be able to adjust in detail as you need it:</p>

<p><img src="{{ '/assets/images/word/Indents/Adjust%20list%20indents.png' | url }}" alt="Adjust lists indents options in Word" style="display: inline; height:75%; width: 75%;"></p>


<h2 id="table-lists-and-indents">Table lists and indents</h2>
<p>If you apply a bullet/number list in a table it'll look something like this below. Word's default spacing jutting out from the column border like that isn't exactly useful when you're typically limited for space in columns, but you can fix this up using the indent markers:</p>
<img class="thumbnail border" src="{{ '/assets/images/word/Indents/Table%20list%20default%20indent.png' | url }}" alt="Table list default indents in Word" style="display: inline; height:80%; width: 80%;">

<p>Since it's a list the indent markers will work based on that, but because we're inside a table there's another marker called a <strong>Column boundary marker</strong> to be aware of too:</p>

<table class="no-border">
    <colgroup>
      <col style="width: 20%;">
      <col style="width: 80%;">
    </colgroup>
    <tbody>
      <tr>
        <td><img class="thumbnail" src="{{ '/assets/images/word/Indents/First%20line%20indent.png' | url }}" alt="First line indent arrow icon" style="display: block; height:50%; width: 50%;"></td>
        <td><strong>First line indent</strong> - Controls where bullet/number begins.</td>
      </tr>
      <tr>
        <td><img class="thumbnail" src="{{ '/assets/images/word/Indents/Hanging%20Indent.png' | url }}" alt="Hanging indent arrow icon" style="display: block; height:50%; width: 50%;"></td>
        <td><strong>Hanging Indent</strong> - Controls where the text begins after the bullet/number.
      <tr>
        <td><img class="thumbnail" src="{{ '/assets/images/word/Indents/Left%20Indent.png' | url }}" alt="Left indent rectangular icon" style="display: block; height:50%; width: 50%;"></td>
        <td><strong>Left Indent</strong> - Moves both the above indents together, shifting both the bullet/number and line/paragraph left or right.
      </tr>
      <tr>
        <td><img class="thumbnail" src="{{ '/assets/images/word/Indents/Column%20boundary%20marker.png' | url }}" alt="Column boundary marker hatch icon" style="display: block; height:50%; width: 50%;"></td>
        <td><strong>Column boundary marker</strong> - Marks the position of a column border in a multi-column table, you can also drag this to adjust the column width. </td>
      </tr>
</table>

<p>Here's a trick to neaten up bullets/numbers in lists:</p> 
<p>Adjust the <strong>First line indent</strong> dragging it right to reduce the space between the bullet/number and the content, then drag the <strong>Left indent</strong> to the left to bring everything closer to the column border. Take a look:</p>

<p><img class="thumbnail border" src="{{ '/assets/images/word/Indents/Table%20list%20indent%20marker%20adjust%20example.gif' | url }}" alt="Demonstration adjusting table list indent marker" style="display: inline; height:75%; width: 75%;"></p>

<p>The <strong>column boundary marker</strong> can be dragged to adjust the column border as well:</p>

<p><img class="thumbnail border" src="{{ '/assets/images/word/Indents/Column%20boundary%20marker%20adjust%20example.gif' | url }}" alt="Demonstration adjusting column boundary marker" style="display: inline; height:75%; width: 75%;"></p>

</section>