---
title: "Indents"
layout: layout.liquid
permalink: /word/indents/
canonical: /word/indents/
description: Indents in Microsoft Word with clear steps, visuals, and animations.
asset_id: ctrlall-word-indents-v1
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

<article class="difficulty-wrapper" role="article" aria-label="Indents tutorial with beginner and intermediate versions">
<div id="article-badge" class="article-badge beginner">⭐ Beginner Level</div>
<!-- Beginner version -->
<div class="difficulty beginner-version"  aria-label="Beginner introduction to basics of indentation">

<section class="section-light">

  <h3>Indenting</h3>

  <p>Indents are spaces between content and the margin space on the page. Increasing an indent moves content further inward away from the page margin and decreasing moves it toward the mergin. The quickest way to apply an indent to a line or paragraph is set the <span class="glossary-hover" data-term="insertion-point">insertion point</span> to the left of the line and press the <strong>Tab</strong> button on your keyboard.</p>
  <p><img class="thumbnail border" src="{{ '/assets/images/word/Indents/Indent example.png' | url }}" alt="An indented paragraph" style="max-width:700px; width:100%; height:auto; vertical-align:middle"></p>
  <p>To remove an indent simply delete them with <strong>backspace</strong> key.</p>

  <h3>Indenting from the ribbon</h3>
  <p>There are two buttons under <strong>Home > Paragraph > Increase/Decrease Indent</strong> which we looked at in the <a href="/word/formatting-text">Formatting text</a> article, which allow you to increase or decrease an indent:</p>
  <p><img class="thumbnail border left" src="{{ '/assets/images/word/Paragraph options/Home Paragraph Increase Decrease Indents.png' | url }}"  alt="Home Paragraph Increase Decrease Indents" style="max-width:200px; width:100%; height:auto; vertical-align:middle"></p>

  <h3>Indenting with Paragraph Options</h3>
  <p>For beginners one feature to consider is the <strong>Paragraph Options</strong> which allow you to apply left and right indentation to a selected paragraph(s) or every paragraph in the document, see here for more: <a href="/word/paragraph-options/#indentation-beg">Paragraph Options - Indentation</a>.</p>
  <p><img class="thumbnail border left" src="{{ '/assets/images/word/Paragraph options/Paragraph Options Indents and Spacing Indentation.png' | url }}"  alt="Paragraph Options Indents and Spacing Indentation" style="max-width:400px; width:100%; height:auto; vertical-align:middle"></p>

  <h3>Indenting with the ruler</h3>
  <p>You can also adjust indents with <strong>indent markers</strong> on the <strong>ruler</strong> tool. You'll first need to enable to the ruler; go to <strong>View > Show</strong> and check <strong>Ruler</strong> and you'll see vertical and horizontal rulers appear on the screen.</p>
  <p><img class="thumbnail left" src="{{ '/assets/images/word/Indents/Ruler.png' | url }}" alt="Ruler tool checkbox on ribbon in Word" style="max-width:175px; width:100%; height:auto; vertical-align:middle"></p>
  Make sure your <span class="glossary-hover" data-term="insertion-point">insertion point</span> is pointed on the paragraph first. On the horizontal ruler above the page you'll see three indent markers clumped together on the left like this:
  <p><img class="thumbnail border" src="{{ '/assets/images/word/Indents/Paragraph indent markers on ruler.png' | url }}" alt="Paragraph and indent markers on ruler in Word" style="display: inline; max-width:900px; width:100%; height:auto; vertical-align:middle"></p>

  <p>Each of these indent markers have different jobs when working with paragraphs:</p>

  <div class="table-wrapper">
  <table class="no-border">
      <colgroup>
        <col style="width: 10%;">
        <col style="width: 90%;">
      </colgroup>
      <tbody>
        <tr>
          <td class="td-v-align-middle"><img class="thumbnail img-no-space" src="{{ '/assets/images/word/Indents/First line indent.png' | url }}" alt="Fire line indent arrow icon" style="display: inline; max-width:55px; width:100%; height:auto; vertical-align:middle"></td>
          <td class="td-v-align-middle"><strong>First line indent</strong> - Controls where the first line of the paragraph begins.</td>
        </tr>
        <tr>
          <td class="td-v-align-middle"><img class="thumbnail img-no-space" src="{{ '/assets/images/word/Indents/Hanging indent.png' | url }}" alt="Hanging indent arrow icon" style="display: inline; max-width:55px; width:100%; height:auto; vertical-align:middle"></td>
          <td class="td-v-align-middle"><strong>Hanging Indent</strong> - Controls where all lines except the first line begin.
        <tr>
          <td class="td-v-align-middle"><img class="thumbnail img-no-space" src="{{ '/assets/images/word/Indents/Left indent.png' | url }}" alt="Left indent rectangle icon" style="display: inline; max-width:55px; width:100%; height:auto; vertical-align:middle"></td>
          <td class="td-v-align-middle"><strong>Left Indent</strong> - Moves both the above indents together, shifting the entire paragraph left or right.
        </tr>
  </table>
  </div>
  <p>Here's a demonstration of all of them in action:</p>
  <p><img class="thumbnail border" src="{{ '/assets/images/word/Indents/Paragraph indent marker adjust example.gif' | url }}" alt="Demonstration adjusting paragraph and indent markers" style="display: inline; max-width:700px; width:100%; height:auto; vertical-align:middle"></p>

<!-- Indent marker paragraph interactivity -->
<section class="indent-demo" style="background-color:#EBFFFF; padding:40px;">
  <h3>Try it out: Indent Markers and paragraphs</h3>
  <p>Adjust the sliders to see how the different indent markers interact with a paragraph of text.</p>

  <div class="indent-controls" style="margin-bottom:1em;">
  <div class="control-row">
    <label for="firstLineIndent">
      <img src="{{ '/assets/images/word/Indents/First line indent.png' | url }}" alt="First line indent">
      <span><strong>First line indent</strong> (Move first line of text):</span>
    </label>
    <input type="range" id="firstLineIndent" min="0" max="5" step="0.25" value="0">
    <span id="firstLineVal">0.00</span> cm
  </div>

  <div class="control-row">
    <label for="hangingIndent">
      <img src="{{ '/assets/images/word/Indents/Hanging Indent.png' | url }}" alt="Hanging indent">
      <span><strong>Hanging indent</strong> (Move all text except first line):</span>
    </label>
    <input type="range" id="hangingIndent" min="0" max="5" step="0.25" value="0">
    <span id="hangingVal">0.00</span> cm
  </div>

  <div class="control-row">
    <label for="leftIndent">
      <img src="{{ '/assets/images/word/Indents/Left Indent.png' | url }}" alt="Left indent">
      <span><strong>Left indent</strong> (Move all paragraph text together):</span>
    </label>
    <input type="range" id="leftIndent" min="0" max="5" step="0.25" value="0">
    <span id="leftVal">0.00</span> cm
  </div>
</div>



  <p id="demoText" style="max-width:300px;">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa…
  </p>
</section>

<script>
function updateIndent() {
  const left = parseFloat(document.getElementById('leftIndent').value);
  const first = parseFloat(document.getElementById('firstLineIndent').value);
  const hanging = parseFloat(document.getElementById('hangingIndent').value);

  document.getElementById('leftVal').textContent = left.toFixed(2);
  document.getElementById('firstLineVal').textContent = first.toFixed(2);
  document.getElementById('hangingVal').textContent = hanging.toFixed(2);

  const text = document.getElementById('demoText');

  // Baseline: move the whole paragraph
  text.style.marginLeft = left + 'cm';

  // Hanging: push subsequent lines right
  text.style.paddingLeft = hanging + 'cm';

  // First line: keep it independent of hanging (first − hanging cancels padding on first line)
  text.style.textIndent = (first - hanging) + 'cm';
}
</script>


  <div style="margin-top: 100px;"></div>

  <h2 id="lists-and-indents">Lists and indents</h2>

  When it comes to bullet and number lists, the indent markers work slightly differently. They're not aligned like in paragraphs and this is to do with the different functions they have for lists.

  <p><img class="thumbnail border" src="{{ '/assets/images/word/Indents/List indent markers on ruler.png' | url }}" alt="Lists and indent markers on ruler in Word" style="display: inline; max-width:400px; width:100%; height:auto; vertical-align:middle"></p>
  <div class="table-wrapper">
  <table class="no-border">
      <colgroup>
        <col style="width: 10%;">
        <col style="width: 90%;">
      </colgroup>
      <tbody>
        <tr>
          <td class="td-v-align-middle"><img class="thumbnail img-no-space" src="{{ '/assets/images/word/Indents/First line indent.png' | url }}" alt="First line indent arrow icon" style="display: inline; max-width:55px; width:100%; height:auto; vertical-align:middle"></td>
          <td class="td-v-align-middle"><strong>First line indent</strong> - Controls where bullet/number begins.</td>
        </tr>
        <tr>
          <td class="td-v-align-middle"><img class="thumbnail img-no-space" src="{{ '/assets/images/word/Indents/Hanging indent.png' | url }}" alt="Hanging indent arrow icon" style="display: inline; max-width:55px; width:100%; height:auto; vertical-align:middle"></td>
          <td class="td-v-align-middle"><strong>Hanging Indent</strong> - Controls where the text begins after the bullet.
        <tr>
          <td class="td-v-align-middle"><img class="thumbnail img-no-space" src="{{ '/assets/images/word/Indents/Left indent.png' | url }}" alt="Left indent rectangular icon" style="display: inline; max-width:55px; width:100%; height:auto; vertical-align:middle"></td>
          <td class="td-v-align-middle"><strong>Left Indent</strong> - Moves both the above indents together, shifting both the bullet/number and line/paragraph left or right.
        </tr>
  </table>
  </div>
  <p>Here's a simple example adjusting the bullet and spacing on a single sub-bullet. Typically you'd  adjust all the sub-bullets together, in which case you'd select them all first then drag the indent markers as needed.</p>

  <p><img class="thumbnail border" src="{{ '/assets/images/word/Indents/List indent marker adjust example.gif' | url }}" alt="Demontration adjusting list indent marker" style="display: inline; max-width:400px; width:100%; height:auto; vertical-align:middle"></p>



<!-- Indent marker bullet list interactivity -->   
<section class="indent-demo" style="background-color:#EBFFFF; padding:40px;">
  <h3>Try it out: Indent markers and bullet lists</h3>
  <p>Adjust the sliders to see how the different indent markers interact with bullet/number lists.</p>
  
  <div class="indent-controls">
  <div class="control-row">
    <label for="svgFirstLineIndent">
      <img src="{{ '/assets/images/word/Indents/First line indent.png' | url }}" alt="First line indent">
      <span><strong>First line indent</strong> (moves bullet):</span>
    </label>
    <input type="range" id="svgFirstLineIndent" min="0" max="5" step="0.25" value="0">
    <span id="svgFirstLineVal">0.00</span> cm
  </div>

  <div class="control-row">
    <label for="svgHangingIndent">
      <img src="{{ '/assets/images/word/Indents/Hanging Indent.png' | url }}" alt="Hanging indent">
      <span><strong>Hanging indent</strong> (moves text):</span>
    </label>
    <input type="range" id="svgHangingIndent" min="0" max="5" step="0.25" value="0">
    <span id="svgHangingVal">0.00</span> cm
  </div>

  <div class="control-row">
    <label for="svgLeftIndent">
      <img src="{{ '/assets/images/word/Indents/Left Indent.png' | url }}" alt="Left indent">
      <span><strong>Left indent</strong> (moves both together):</span>
    </label>
    <input type="range" id="svgLeftIndent" min="0" max="5" step="0.25" value="0">
    <span id="svgLeftVal">0.00</span> cm
  </div>
</div>


  <svg id="indentSVG" class="indent-svg" height="75" xmlns="http://www.w3.org/2000/svg">
    <text id="bullet" x="50" y="40" font-size="14px" font-family="Inter, system-ui, sans-serif" fill="#333">•</text>
    <text id="text" x="70" y="40" font-size="14px" textLength="520" font-family="Inter, system-ui, sans-serif" fill="#333">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    </text>
  </svg>
</section>

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

  // Bullet moves gradually with first line indent
  const bulletX = baseX + firstLineIndent * cmToPx;

  // Text starts at hanging indent position
  let textX = baseX + hangingIndent * cmToPx;

  // Stagger effect: if bullet gets too close, push text further right
  const minGap = 0.7 * cmToPx; // minimum space between bullet and text
  const gap = textX - bulletX;

  if (gap < minGap) {
    // Push text right in increments of minGap until gap is safe
    const steps = Math.ceil((minGap - gap) / minGap);
    textX += steps * minGap;
  }

  document.getElementById("bullet").setAttribute("x", bulletX);
  document.getElementById("text").setAttribute("x", textX);
}
</script>

    
  </section>


  <h4>If you want to be precise</h4>
  <p>Word gives you the option to specify the measurements exactly if you need to. Just <strong>right click</strong> on the bullet/number and select <strong>Adjust list indents</strong> and you'll be able to adjust in detail as you need it:</p>

  <p><img src="{{ '/assets/images/word/Indents/Adjust list indents.png' | url }}" alt="Adjust lists indents options in Word" style="display: inline; max-width:550px; width:100%; height:auto; vertical-align:middle"></p>


  <h2 id="table-lists-and-indents">Table lists and indents</h2>
  <p>If you apply a bullet/number list in a table it'll look something like this below. Word's default spacing jutting out from the column border like that isn't exactly useful when you're typically limited for space in columns, but you can fix this up using the indent markers:</p>
  <img class="thumbnail border" src="{{ '/assets/images/word/Indents/Table list default indent.png' | url }}" alt="Table list default indents in Word" style="display: inline; max-width:600px; width:100%; height:auto; vertical-align:middle">

  <p>Since it's a list the indent markers will work based on that, but because we're inside a table there's another marker called a <strong>Column boundary marker</strong> to be aware of too:</p>
  <div class="table-wrapper">
  <table class="no-border">
      <colgroup>
        <col style="width: 10%;">
        <col style="width: 90%;">
      </colgroup>
      <tbody>
        <tr>
          <td><img class="thumbnail img-no-space" src="{{ '/assets/images/word/Indents/First line indent.png' | url }}" alt="First line indent arrow icon" style="display: inline; max-width:55px; width:100%; height:auto; vertical-align:middle"></td>
          <td><strong>First line indent</strong> - Controls where bullet/number begins.</td>
        </tr>
        <tr>
          <td><img class="thumbnail img-no-space" src="{{ '/assets/images/word/Indents/Hanging indent.png' | url }}" alt="Hanging indent arrow icon" style="display: inline; max-width:55px; width:100%; height:auto; vertical-align:middle"></td>
          <td><strong>Hanging Indent</strong> - Controls where the text begins after the bullet/number.
        <tr>
          <td><img class="thumbnail img-no-space" src="{{ '/assets/images/word/Indents/Left indent.png' | url }}" alt="Left indent rectangular icon" style="display: inline; max-width:55px; width:100%; height:auto; vertical-align:middle"></td>
          <td><strong>Left Indent</strong> - Moves both the above indents together, shifting both the bullet/number and line/paragraph left or right.
        </tr>
        <tr>
          <td><img class="thumbnail img-no-space" src="{{ '/assets/images/word/Indents/Column boundary marker.png' | url }}" alt="Column boundary marker hatch icon" style="display: inline; max-width:55px; width:100%; height:auto; vertical-align:middle">
          <td><strong>Column boundary marker</strong> - Marks the position of a column border in a multi-column table, you can also drag this to adjust the column width. </td>
        </tr>
  </table>
  </div>
  <p>Here's a trick to neaten up bullets/numbers in lists:</p> 
  <p>Adjust the <strong>First line indent</strong> dragging it right to reduce the space between the bullet/number and the content, then drag the <strong>Left indent</strong> to the left to bring everything closer to the column border. Take a look:</p>

  <p><img class="thumbnail border" src="{{ '/assets/images/word/Indents/Table list indent marker adjust example.gif' | url }}" alt="Demonstration adjusting table list indent marker" style="display: inline; max-width:600px; width:100%; height:auto; vertical-align:middle"></p>

  <p>The <strong>column boundary marker</strong> can be dragged to adjust the column border as well:</p>

  <p><img class="thumbnail border" src="{{ '/assets/images/word/Indents/Column boundary marker adjust example.gif' | url }}" alt="Demonstration adjusting column boundary marker" style="display: inline; max-width:600px; width:100%; height:auto; vertical-align:middle"></p>

</section>
</div>


<!-- Intermediate version -->
<div class="difficulty intermediate-version" aria-label="Intermediate article exploring altering images" style="display:none;">

 <section class="section-light">

  <!-- Intermediate Indent marker paragraph interactivity -->
<section class="indent-demo" style="background-color:#FFF8E1; padding:40px;">
  <h3>Intermediate: Indent Markers and paragraphs</h3>
  <p>Adjust the sliders to see how the different indent markers interact with a paragraph of text.</p>

  <div class="indent-controls" style="margin-bottom:1em;">
    <div class="control-row">
      <label for="intFirstLineIndent">
        <img src="{{ '/assets/images/word/Indents/First line indent.png' | url }}" alt="First line indent">
        <span><strong>First line indent</strong> (Move first line of text):</span>
      </label>
      <input type="range" id="intFirstLineIndent" min="0" max="5" step="0.25" value="0">
      <span id="intFirstLineVal">0.00</span> cm
    </div>

    <div class="control-row">
      <label for="intHangingIndent">
        <img src="{{ '/assets/images/word/Indents/Hanging Indent.png' | url }}" alt="Hanging indent">
        <span><strong>Hanging indent</strong> (Move all text except first line):</span>
      </label>
      <input type="range" id="intHangingIndent" min="0" max="5" step="0.25" value="0">
      <span id="intHangingVal">0.00</span> cm
    </div>

    <div class="control-row">
      <label for="intLeftIndent">
        <img src="{{ '/assets/images/word/Indents/Left Indent.png' | url }}" alt="Left indent">
        <span><strong>Left indent</strong> (Move all paragraph text together):</span>
      </label>
      <input type="range" id="intLeftIndent" min="0" max="5" step="0.25" value="0">
      <span id="intLeftVal">0.00</span> cm
    </div>
  </div>

  <p id="intDemoText" style="max-width:300px;">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa…
  </p>
</section>

<script>
function updateIntIndent() {
  const left = parseFloat(document.getElementById('intLeftIndent').value);
  const first = parseFloat(document.getElementById('intFirstLineIndent').value);
  const hanging = parseFloat(document.getElementById('intHangingIndent').value);

  document.getElementById('intLeftVal').textContent = left.toFixed(2);
  document.getElementById('intFirstLineVal').textContent = first.toFixed(2);
  document.getElementById('intHangingVal').textContent = hanging.toFixed(2);

  const text = document.getElementById('intDemoText');

  text.style.marginLeft = left + 'cm';
  text.style.paddingLeft = hanging + 'cm';
  text.style.textIndent = (first - hanging) + 'cm';
}
</script>


<!-- Intermediate Indent marker bullet list interactivity -->
<section class="indent-demo" style="background-color:#FFF8E1; padding:40px;">
  <h3>Intermediate: Indent markers and bullet lists</h3>
  <p>Adjust the sliders to see how the different indent markers interact with bullet/number lists.</p>

  <div class="indent-controls">
    <div class="control-row">
      <label for="intSvgFirstLineIndent">
        <img src="{{ '/assets/images/word/Indents/First line indent.png' | url }}" alt="First line indent">
        <span><strong>First line indent</strong> (moves bullet):</span>
      </label>
      <input type="range" id="intSvgFirstLineIndent" min="0" max="5" step="0.25" value="0">
      <span id="intSvgFirstLineVal">0.00</span> cm
    </div>

    <div class="control-row">
      <label for="intSvgHangingIndent">
        <img src="{{ '/assets/images/word/Indents/Hanging Indent.png' | url }}" alt="Hanging indent">
        <span><strong>Hanging indent</strong> (moves text):</span>
      </label>
      <input type="range" id="intSvgHangingIndent" min="0" max="5" step="0.25" value="0">
      <span id="intSvgHangingVal">0.00</span> cm
    </div>

    <div class="control-row">
      <label for="intSvgLeftIndent">
        <img src="{{ '/assets/images/word/Indents/Left Indent.png' | url }}" alt="Left indent">
        <span><strong>Left indent</strong> (moves both together):</span>
      </label>
      <input type="range" id="intSvgLeftIndent" min="0" max="5" step="0.25" value="0">
      <span id="intSvgLeftVal">0.00</span> cm
    </div>
  </div>

<svg id="intIndentSVG"
     class="indent-svg"
     viewBox="0 0 600 75"
     width="600"
     height="75"
     preserveAspectRatio="xMinYMin meet"
     xmlns="http://www.w3.org/2000/svg">
  <text id="intBullet"
        x="50" y="40"
        font-size="14px"
        font-family="Inter, system-ui, sans-serif"
        fill="#333">•</text>
  <text id="intText"
        x="70" y="40"
        font-size="14px"
        font-family="Inter, system-ui, sans-serif"
        fill="#333">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
  </text>
</svg>

</section>

<script>
function updateIntSvgIndent() {
  const cmToPx = 37.8;

  const leftIndent = parseFloat(document.getElementById("intSvgLeftIndent").value);
  const firstLineIndent = parseFloat(document.getElementById("intSvgFirstLineIndent").value);
  const hangingIndent = parseFloat(document.getElementById("intSvgHangingIndent").value);

  document.getElementById("intSvgLeftVal").textContent = leftIndent.toFixed(2);
  document.getElementById("intSvgFirstLineVal").textContent = firstLineIndent.toFixed(2);
  document.getElementById("intSvgHangingVal").textContent = hangingIndent.toFixed(2);

  const baseX = 50 + leftIndent * cmToPx;
  const bulletX = baseX + firstLineIndent * cmToPx;
  let textX = baseX + hangingIndent * cmToPx;

  const minGap = 0.7 * cmToPx;
  const gap = textX - bulletX;

  if (gap < minGap) {
    const steps = Math.ceil((minGap - gap) / minGap);
    textX += steps * minGap;
  }

  document.getElementById("intBullet").setAttribute("x", bulletX);
  document.getElementById("intText").setAttribute("x", textX);
}
</script>

 </section>

</div>
</article>

<!-- Initialize both indent marker interactivities -->
<script>
document.addEventListener("DOMContentLoaded", () => {
  // Attach listeners for paragraph interactivity
  ["leftIndent","firstLineIndent","hangingIndent"].forEach(id =>
    document.getElementById(id).addEventListener("input", updateIndent)
  );
  updateIndent();

  // Attach listeners for bullet list interactivity
  ["svgLeftIndent","svgFirstLineIndent","svgHangingIndent"].forEach(id =>
    document.getElementById(id).addEventListener("input", updateSvgIndent)
  );
  updateSvgIndent();
});
</script>

<script>
  document.addEventListener("DOMContentLoaded", () => {
  // Intermediate paragraph demo
  ["intLeftIndent","intFirstLineIndent","intHangingIndent"].forEach(id =>
    document.getElementById(id).addEventListener("input", updateIntIndent)
  );
  updateIntIndent();

  // Intermediate bullet list demo
  ["intSvgLeftIndent","intSvgFirstLineIndent","intSvgHangingIndent"].forEach(id =>
    document.getElementById(id).addEventListener("input", updateIntSvgIndent)
  );
  updateIntSvgIndent();
});

</script>