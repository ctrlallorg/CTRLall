---
title: Altering images and objects
layout: layout.liquid
permalink: /word/altering-images-and-objects/
canonical: /word/altering-images-and-objects/
description: Alter, resize, rotate and edit images and graphic visuals in Microsoft Word with clear steps, visuals, and animations.
asset_id: ctrlall-word-altering-images-and-objects-v1
date: 2025-10-26
last_modified: 2025-12-06
difficultyLevels:
  - level: Beginner
    description: "Introduces resizing and rotation basics with clear visual cues."
    urlSuffix: "#beginner"
  - level: Intermediate
    description: "Expands on resizing basics with advanced alteration techniques."
    urlSuffix: "#intermediate"
tags:
  - ctrlall.org
  - ctrlall
  - ctrl all
  - microsoft word
  - images
  - graphics
  - visuals
  - pictures
  - icons
  - SmartArt
  - charts
  - screenshot
  - WordArt
  - objects
  - text boxes
  - drawing canvases
  - embedded files
  - OLE objects
  - edit an image
  - edit images
  - editing an image
  - editing images
  - alter an image
  - alter images
  - altering an image
  - altering images
  - change an image
  - change images
  - changing an image
  - changing images
  - edit an object
  - edit objects
  - editing an object
  - editing objects
  - alter an object
  - alter objects
  - altering an object
  - altering objects
  - change an object
  - change objects
  - changing an object
  - changing objects
  - redraw
  - make smaller
  - make bigger
  - enlarge sizes
  - reduce sizes
  - resize an image
  - resize images
  - resizing an image
  - resizing images
  - rotate an image
  - rotate images
  - rotating an image
  - rotating images
  - resize an object
  - resize objects
  - resizing an object
  - resizing objects
  - rotate an object
  - rotate objects
  - rotating an object
  - rotating objects
  - change colors
  - change colours
  - move around
  - wrapping
active: word
---
<h1>Altering images, graphic visuals and objects</h1>

<article class="difficulty-wrapper" role="article" aria-label="Altering images tutorial with beginner and intermediate versions">
<div id="article-badge" class="article-badge beginner">⭐ Beginner Level</div>
<!-- Beginner version -->
<div class="difficulty beginner-version"  aria-label="Beginner introduction to altering images">

  <section class="section-light">
  <p>This article introduces how to alter <a href="/word/images/">images and graphic visuals</a> and some <a href="/word/objects/">objects</a>, specifically these:</p>
  <ul>
    <li><a href="#resize">Resize</a></li>
    <li><a href="#rotate">Rotate</a></li>
    <li><a href="#move">Move</a></li>
    <li><a href="#alter-shapes">Alter (Shapes only)</a></li>
    <li><a href="#text-shapes">Add text (Shapes only)</a></li>
    <li><a href="#rotate-3d-model">Rotate (3D Models only)</a></li>
  </ul>

  <h2 id="alter-image-object">Altering images and objects</h2>
  <p>When you insert an image or object it will be selected by default. You can tell this by the <strong>selection frame</strong> that appears around it. Selection frames have points on them that let you edit an image or object. The white dots around the selection frame are called <strong>sizing handles</strong>. You use these to resize the image/object. Some images/objects will also have a <strong>rotate handle</strong> icon to the side so you can rotate your image/object.</p>
  <p>Your mouse's cursor icon changes depending on where you hover it over the image/object. The type of icon that shows indicates what you can do with it by <span class="glossary-hover" data-term="drag">clicking and dragging</span>.</p>
  <p>All the different actions you an do are listed in the table below. Hover over the rows to see an example of each in action:</p>

  <div id="resize" class="table-wrapper">
  <table class="word-images-cursor-icons hover-table">
      <colgroup>
        <col style="width: 35%;">
        <col style="width: 35%;">
        <col style="width: 10%;">
      </colgroup>
      <thead>
        <tr>
          <th>Function</th>
          <th>Action</th>
          <th>Cursor icon</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tooltip-row" data-gif="{{ '/assets/images/word/Images/Resize image.gif' | url }}">
          <td><strong>Resize</strong>: Hover over sizing handles<p><img class="thumbnail" src="{{ '/assets/images/word/Images/Sizing handles.png' | url }}" alt="Sizing handles indicated on an image's selection frame" style="max-width:175px; width:100%; height:auto; vertical-align:middle"></p></td>
          <td>Hover over the sizing handles (white dots) and you'll see a two-way arrow indicating what direction you can resize in (i.e. horizonal, vertical or diagonal). Click and drag on the sizing handles to resize; drag inward to reduce the size; drag outward to increase the size.</td>
          <td>
          <img class="thumbnail" src="{{ '/assets/images/word/Images/Resize arrow diagonal.png' | url }}" alt="Resize arrow diagonal" style="max-width:50px; width:100%; height:auto; vertical-align:middle">
          <img class="thumbnail" src="{{ '/assets/images/word/Images/Resize arrow horizontal.png' | url }}" alt="Resize arrow horizontal" style="max-width:50px; width:100%; height:auto; vertical-align:middle">
          <img class="thumbnail" src="{{ '/assets/images/word/Images/Resize arrow vertical.png' | url }}" alt="Resize arrow vertical" style="max-width:50px; width:100%; height:auto; vertical-align:middle">
          </td>
        </tr>
        <tr id="rotate" class="tooltip-row" data-gif="{{ '/assets/images/word/Images/Rotate image.gif' | url }}">
          <td><strong>Rotate</strong>: Hover over the rotate handle<p><img class="thumbnail" src="{{ '/assets/images/word/Images/Rotate handle.png' | url }}" alt="Rotate handle on an image's selection frame" style="max-width:75px; width:100%; height:auto; vertical-align:middle"></p></td>
          <td><p>Hover over the rotate handle and you cursor icon will change to a rotation icon. Click and drag clockwise or anti-clockwise to rotate the image.</p></td>
          <td><img class="thumbnail" src="{{ '/assets/images/word/Images/Rotate arrow.png' | url }}" alt="Rotate arrow" style="max-width:75px; width:100%; height:auto; vertical-align:middle"></td>
        </tr>
        <tr id="move" class="tooltip-row" data-gif="{{ '/assets/images/word/Images/Move image.gif' | url }}">
          <td><strong>Move</strong>: Hover anywhere over the image/shape</td>
          <td><p>Hover over the image/shape, then when the cursor icon changes to a four-way arrow you can click and drag to move it.</p> <p><u>Note</u>: By default images sit alongside the text sharing a line with it; this restricts how and where you move it (shown in the animation). You can move images more freely so they 'float' above, below or amongst text as you move them around; this is changed by <a href="#layout-options">Layout options</a>.</p></td>
          <td><img class="thumbnail" src="{{ '/assets/images/word/Images/Move arrow grey background.png' | url }}" alt="Move arrow" style="max-width:75px; width:100%; height:auto; vertical-align:middle"></td>
        </tr>
        <tr id="alter-shapes" class="tooltip-row" data-gif="{{ '/assets/images/word/Images/Adjustment handle example.gif' | url }}">
          <td><strong>(Shapes only) Alter</strong>: Hover over adjustment handle<p><img class="thumbnail" src="{{ '/assets/images/word/Images/Adjustment handle.png' | url }}" alt="Adjustment handle on an shape's selection frame" style="max-width:125px; width:100%; height:auto; vertical-align:middle"></p></td>
          <td><p>Shapes may have a yellow circle called an adjustment handle. Hover over it and when the cursor icon changes to a different white arrow you can then click and drag to alter the internal dimensions of the shape like the angle, curve, width or custom geometry tweaks.</p></td>
          <td><img class="thumbnail" src="{{ '/assets/images/word/Images/Adjustment handle cursor arrow.png' | url }}" alt="Move arrow" style="max-width:50px; width:100%; height:auto; vertical-align:middle"></td>
        </tr>
        <tr id="text-shapes" class="tooltip-row" data-gif="{{ '/assets/images/word/Images/Adjustment handle example.gif' | url }}">
          <td><strong>Add text (Shapes only)</strong>: Click inside the shape<p><img class="thumbnail" src="{{ '/assets/images/word/Images/Typing inside shape.png' | url }}" alt="Text inside a shape in Word" style="max-width:100px; width:100%; height:auto; vertical-align:middle"></p></td>
          <td><p>Some shapes like speech bubbles let you type into them straight away. Others you need to click into. When hovering over the centre of the shape you'll sometimes see a text cursor appear. Click in the centre and then start typing.</p></td>
          <td><img class="thumbnail" src="{{ '/assets/images/word/Images/Text cursor.png' | url }}" alt="Move arrow" style="max-width:40px; width:100%; height:auto; vertical-align:middle"></td>
        </tr>
        <tr id="rotate-3d-model" class="tooltip-row" data-gif="{{ '/assets/images/word/Images/Rotate 3D model example.gif' | url }}">
          <td><strong>(3D Models only) Rotate</strong>: Hover over the central rotate handle<p><img class="thumbnail" src="{{ '/assets/images/word/Images/Rotate 3D model handle.png' | url }}" alt="Rotate handle on a selected 3D model" style="max-width:75px; width:100%; height:auto; vertical-align:middle"></p></td>
          <td><p>This is for 3D models only. Hover over the 3D model and when the cursor icon changes to the rotate icon you can then click and drag to rotate the model around anyway.</p></td>
          <td><img class="thumbnail" src="{{ '/assets/images/word/Images/Rotate arrow.png' | url }}" alt="Move arrow" style="max-width:75px; width:100%; height:auto; vertical-align:middle"></td>
        </tr>
      </tbody>
      </table>
      
  </section>
</div>

<!-- Intermediate version -->
<div class="difficulty intermediate-version" aria-label="Intermediate article exploring altering images" style="display:none;">
  <section class="section-light">
  <p>This article looks in depth at how to alter <a href="/word/images/">images and graphic visuals</a> and some <a href="/word/objects/">objects</a>:</p>
  <ul>
    <li><a href="#alter-image-object-int">Altering images and objects</a></li>
    <li><a href="#layout-options-int">Layout options</a></li>
    <li><a href="#anchoring-int">Anchoring</a></li>
    <li><a href="#locked-anchor-int">Locked Anchor</a></li>
  </ul>
  <br>
  <p>Content-wise the below applies specifically to these images and objects:</p>
  <ul>
    <li><a href="/word/images/#image-insert">Images/Pictures</a></li>
    <li><a href="/word/images/#image-insert-shape-icon-model">Shapes, Icons and 3D models</a></li>  
    <li><a href="/word/images/#image-insert-smartart">SmartArt</a></li>
    <li><a href="/word/images/#image-insert-chart">Charts</a></li>
    <li><a href="/word/images/#image-insert-screenshot">Screenshots</a></li>
    <li><a href="/word/images/#image-insert-WordArt">WordArt</a></li>
    <li><a href="/word/objects/#object-text-box">Text boxes</a></li>
    <li><a href="/word/objects/#object-embedded-files">Embedded files (OLE objects)</a></li>
    <li><a href="/word/objects/#object-drawing-canvas">Drawing canvas</a></li>
  </ul>  

  <h2 id="alter-image-object-int">Altering images and objects</h2>
  <p>When an image or object is inserted it is automatically selected with a <strong>selection frame</strong> around it. The selection frame has points around the image called <strong>sizing handles</strong> used to resize it as needed. Some will also have a <strong>rotate handle</strong> icon to rotate your image/shape freely.</p>
  <p>Your cursor icon changes depending on where you hover it, indicating available actions you can do by <span class="glossary-hover" data-term="drag">clicking and dragging</span>.</p>
  <p>Hover over the table rows below to see an example of each in action:</p>

  <div class="table-wrapper">
  <table class="word-images-cursor-icons hover-table">
      <colgroup>
        <col style="width: 35%;">
        <col style="width: 35%;">
        <col style="width: 10%;">
      </colgroup>
      <thead>
        <tr>
          <th>Function</th>
          <th>Action</th>
          <th>Cursor icon</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tooltip-row" data-gif="{{ '/assets/images/word/Images/Resize image.gif' | url }}">
          <td>
            <p><strong>Resize</strong>: Hover over sizing handles<p><img class="thumbnail" src="{{ '/assets/images/word/Images/Sizing handles.png' | url }}" alt="Sizing handles indicated on an image's selection frame" style="max-width:175px; width:100%; height:auto; vertical-align:middle"></p></td>
            <td>Click and drag the sizing handles (horizonal, vertical or diagonal) to resize; drag inward to reduce the size, drag outward to increase the size.</p>
            <p>A note on proportions when resizing:
            <ul>
              <li><u>Resize in proportion</u>: Just drag the sizing handles as needed.</li>
              <li><u>Freeform resizing</u>: Hold <strong>Shift</strong> and drag the sizing handles.</li>
              <li><u>Resize from centre point (instead of from the opposite edge)</u>: Hold <strong>Ctrl</strong> and drag the sizing handles to resize the image from its centre point.</li>
              <li><u>Freeform resizing from the centre point</u>: Freeform resize the image from its centre point by holding <strong>Ctrl</strong> and <strong>Shift</strong> and dragging the sizing handles.</li>
            </ul>          
            </p>
          </td>
          <td>
            <img class="thumbnail" src="{{ '/assets/images/word/Images/Resize arrow diagonal.png' | url }}" alt="Resize arrow diagonal" style="max-width:50px; width:100%; height:auto; vertical-align:middle">
            <img class="thumbnail" src="{{ '/assets/images/word/Images/Resize arrow horizontal.png' | url }}" alt="Resize arrow horizontal" style="max-width:50px; width:100%; height:auto; vertical-align:middle">
            <img class="thumbnail" src="{{ '/assets/images/word/Images/Resize arrow vertical.png' | url }}" alt="Resize arrow vertical" style="max-width:50px; width:100%; height:auto; vertical-align:middle">
          </td>
        </tr>
        <tr class="tooltip-row" data-gif="{{ '/assets/images/word/Images/Rotate image.gif' | url }}">
          <td><strong>Rotate</strong>: Hover over the rotate handle<p><img class="thumbnail" src="{{ '/assets/images/word/Images/Rotate handle.png' | url }}" alt="Rotate handle on an image's selection frame" style="max-width:75px; width:100%; height:auto; vertical-align:middle"></p></td>
          <td><p>Click and drag the rotate handle clockwise or anti-clockwise to rotate the image.</p> <p>Alternatively you can also use the <strong>Layout Options</strong> or <strong>Picture Format</strong> tab for precise rotation like 90° or flip horizontal/vertical.</p></td>
          <td><img class="thumbnail" src="{{ '/assets/images/word/Images/Rotate arrow.png' | url }}" alt="Rotate arrow" style="max-width:75px; width:100%; height:auto; vertical-align:middle"></td>
        </tr>
        <tr class="tooltip-row" data-gif="{{ '/assets/images/word/Images/Move image.gif' | url }}">
          <td><strong>Move</strong>: Hover anywhere over the image/shape</td>
          <td><p><strong>Move</strong>: Hover anywhere over the image/shape and the cursor changes to a four-way arrow. Click and drag to move the image around.</p> <p><u>Note</u>: By default images fit within the text sharing a line with it which will restrict how and where you move it. To move images more freely you can change its <a href="layout-options-int">layout options</a> so it 'floats' above, below or amongst text.</p></td>
          <td><img class="thumbnail" src="{{ '/assets/images/word/Images/Move arrow grey background.png' | url }}" alt="Move arrow" style="max-width:75px; width:100%; height:auto; vertical-align:middle"></td>
        </tr>
        <tr class="tooltip-row" data-gif="{{ '/assets/images/word/Images/Adjustment handle example.gif' | url }}">
          <td><strong>(Shapes only) Alter</strong>: Hover over adjustment handle<p><img class="thumbnail" src="{{ '/assets/images/word/Images/Adjustment handle.png' | url }}" alt="Adjustment handle on an shape's selection frame" style="max-width:125px; width:100%; height:auto; vertical-align:middle"></p></td>
          <td><p>Depending on the shape sometimes you'll see a yellow circle called an adjustment handle which you can click and drag to alter the internal dimensions of the shape like the angle, curve, width, tail length or custom geometry tweaks.</p></td>
          <td><img class="thumbnail" src="{{ '/assets/images/word/Images/Adjustment handle cursor arrow.png' | url }}" alt="Move arrow" style="max-width:50px; width:100%; height:auto; vertical-align:middle"></td>
        </tr>
        <tr id="text-shapes" class="tooltip-row" data-gif="{{ '/assets/images/word/Images/Adjustment handle example.gif' | url }}">
          <td><strong>Add text (Shapes only)</strong>: Click inside the shape<p><img class="thumbnail" src="{{ '/assets/images/word/Images/Typing inside shape.png' | url }}" alt="Text inside a shape in Word" style="max-width:100px; width:100%; height:auto; vertical-align:middle"></p></td>
          <td><p>Certain shapes like speech bubbles let you type into them as soon as you've inserted them. For other shapes that allow text you need to click into them in order to type text.</p></td>
          <td><img class="thumbnail" src="{{ '/assets/images/word/Images/Text cursor.png' | url }}" alt="Move arrow" style="max-width:40px; width:100%; height:auto; vertical-align:middle"></td>
        </tr>
        <tr class="tooltip-row" data-gif="{{ '/assets/images/word/Images/Rotate 3D model example.gif' | url }}">
          <td><strong>(3D Models only) Rotate</strong>: Hover over the central rotate handle<p><img class="thumbnail" src="{{ '/assets/images/word/Images/Rotate 3D model handle.png' | url }}" alt="Rotate handle on a selected 3D model" style="max-width:75px; width:100%; height:auto; vertical-align:middle"></p></td>
          <td><p>This applies to 3D models only; clicking and dragging the central rotate icon lets you rotate the model around on a Y and Z axis.</p></td>
          <td><img class="thumbnail" src="{{ '/assets/images/word/Images/Rotate arrow.png' | url }}" alt="Move arrow" style="max-width:75px; width:100%; height:auto; vertical-align:middle"></td>
        </tr>
      </tbody>
      </table>
      </div>
      <h3 id="layout-options-int">Layout options</h3>
      <p>Select an image/shape and you'll see a small box appear top right. Clicking this shows layout options with <strong>wrapping</strong> styles. Wrapping alters how text and content flow around the image/object and whether it can move between, above or below the text rather than in line with it. Wrapping is useful to improve your document's layout, readability and aesthetics.</p>
      <img class="thumbnail" src="{{ '/assets/images/word/Images/Layout options.png' | url }}" alt="Layout options menu on a selected image" style="max-width:350px; width:100%; height:auto; vertical-align:middle">
      <p>Hover over the rows below to see how text acts around the image/shape each option:</p>
      <div class="table-wrapper">
      <table class="word-images-cursor-icons hover-table">
      <colgroup>
        <col style="width: 20%;">
        <col style="width: 80%;">
      </colgroup>
      <thead>
        <tr>
          <th>Layout option</th>
          <th>Function</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tooltip-row" data-gif="{{ '/assets/images/word/Images/Layout options in line with text example.png' | url }}">
          <td><strong>Layout options in line with text</strong><img class="thumbnail" src="{{ '/assets/images/word/Images/Layout options in line with text.png' | url }}" alt="Layout options in line with text icon" style="max-width:40px; width:100%; height:auto; vertical-align:middle"></td>
          <td>This is the default option. The image/shape will sit alongside text sharing the same line.</td>
        </tr>
        <tr class="tooltip-row" data-gif="{{ '/assets/images/word/Images/Layout options square wrap example.png' | url }}">
          <td><strong>Layout options square wrap</strong><img class="thumbnail" src="{{ '/assets/images/word/Images/Layout options square wrap.png' | url }}" alt="Layout options square wrap icon" style="max-width:40px; width:100%; height:auto; vertical-align:middle"></td>
          <td>Text wraps around the outer edge of the image/shape’s selection frame in a square or rectangular shape depending on what you've inserted. This is useful for placing images/shapes beside paragraphs or in columns.</td>
        </tr>
        <tr class="tooltip-row" data-gif="{{ '/assets/images/word/Images/Layout options tight wrap example.png' | url }}">
          <td><strong>Layout options tight wrap</strong><img class="thumbnail" src="{{ '/assets/images/word/Images/Layout options tight wrap.png' | url }}" alt="Layout options tight wrap icon" style="max-width:40px; width:100%; height:auto; vertical-align:middle"></td>
          <td>Text treats the image/shape like a solid block flowing around it, but doesn’t enter any internal gaps. This works well for Logos, cutouts and images with transparent backgrounds.</td>
        </tr>
        <tr class="tooltip-row" data-gif="{{ '/assets/images/word/Images/Layout options through wrap example.png' | url }}">
          <td><strong>Layout options through wrap</strong><img class="thumbnail" src="{{ '/assets/images/word/Images/Layout options through wrap.png' | url }}" alt="Layout options through wrap icon.png" style="max-width:40px; width:100%; height:auto; vertical-align:middle"></td>
          <td>As above but text will also wrap through transparent or open areas inside the image. Only noticeable on images with transparency and it needs to be a particular shape for this effect to work.</td>
        </tr>
        <tr class="tooltip-row" data-gif="{{ '/assets/images/word/Images/Layout options top and bottom wrap example.png' | url }}">
          <td><strong>Layout options top and bottom wrap</strong><img class="thumbnail" src="{{ '/assets/images/word/Images/Layout options top and bottom wrap.png' | url }}" alt="Layout options top and bottom wrap icon" style="max-width:40px; width:100%; height:auto; vertical-align:middle"></td>
          <td>Text remains above and below the image/shape, never beside it. This is useful for isolating visuals to make them stand out.</td>
        </tr>
        <tr class="tooltip-row" data-gif="{{ '/assets/images/word/Images/Layout options behind text wrap example.png' | url }}">
          <td><strong>Layout options behind text wrap</strong><img class="thumbnail" src="{{ '/assets/images/word/Images/Layout options behind text wrap.png' | url }}" alt="Layout options behind text wrap icon" style="max-width:40px; width:100%; height:auto; vertical-align:middle"></td>
          <td>The image/shape will sit behind the text like a background. This is useful for watermarks or decorative backgrounds, though it may make text hard to read. With this wrap option the image/shape can be moved freely anywhere on the page.</td>
        </tr>
        <tr class="tooltip-row" data-gif="{{ '/assets/images/word/Images/Layout options in front of text wrap example.png' | url }}">
          <td><strong>Layout options in front of text wrap</strong><img class="thumbnail" src="{{ '/assets/images/word/Images/Layout options in front of text wrap.png' | url }}" alt="Layout 0options in front of text wrap icon"style="max-width:40px; width:100%; height:auto; vertical-align:middle"></td>
          <td>The image/shape floats over the text, potentially obscuring it. Can be used for overlays, callouts, or dramatic visual effects. This wrap option lets you freely move the image/shape anywhere on the page.</td>
        </tr>
        </tbody>
        </table>
        </div>

  <p>When you select one of the text wrapping options two other options become active to choose from. Hover over below to see how each work:</p> 
  <div class="table-wrapper">
  <table class="word-images-cursor-icons hover-table">
      <colgroup>
        <col style="width: 20%;">
        <col style="width: 80%;">
      </colgroup>
      <thead>
        <tr>
          <th>Text wrapping option </th>
          <th>Function</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tooltip-row" data-gif="{{ '/assets/images/word/Images/Layout options move with text.gif' | url }}">
          <td><strong>Move with text</strong></td>
          <td><p>This is the default option. The image/shape will around move with the text when text or any other content is added or removed before it.</p><p><u>Note</u>: This won't work for wrapping behind and in front of text.</p></td>
        </tr>
        <tr class="tooltip-row" data-gif="{{ '/assets/images/word/Images/Layout options fix position on page.gif' | url }}">
          <td><strong>Fix position on page</strong></td>
          <td>The image/shape will stay in place unaffected by any text or content added or removed before it. Text will flow around the image/shape instead.</td>
        </tr>
      </tbody>
  </table>
  </div>


  <h3 id="anchoring-int">Anchoring</h3>

  <p>An image/shape set to be <strong>In Line with Text</strong> behaves like a text character on a line of text. It doesn't have a visible anchor icon because it's part of the text layer itself.</p>

  <p>By contrast, images set to any other other wrapping styles (e.g. Square, 'Tight', or 'Behind Text') are known as <strong>floating images</strong>. You can position these anywhere independent of text, but they are also 'anchored' to a specific paragraph. This is indicated by a small blue anchor in the left margin when selected.</p>

  <p>The anchor is helpful if you have the default option <strong>Move with text</strong> enabled, as you can use it to predict whether your image/shape will shift if that paragraph — or one before it — moves.</p>

  <img class="thumbnail border" src="{{ '/assets/images/word/Images/Anchor with square wrap.png' | url }}" alt="Anchor indicated in margin for an image with square wrap" style="max-width:600px; width:100%; height:auto; vertical-align:middle">

  <h4 id="locked-anchor-int">Locked Anchor</h4>
  <p>With floating images if you drag the image/shape far enough up or down the page, Word  reassigns its anchor to a different paragraph. To prevent this, you can 'lock' the anchor.</p>

  <p>Locking the anchor means that the image/shape will stay associated or 'anchored' with its original paragraph, even if you move it elsewhere on the page. The image/shape can move but its anchor — and thereby its association to that paragraph — stays fixed.</p>

  <p>Why does this matter? Because if the anchored paragraph is moved (drag and dropped or cut and pasted elsewhere, for example), then the image will move with it, maintaining the same relative position from the paragraph as you've chosen to position it.</p>

  <p>To lock an anchor <strong>right click</strong> the image, then from the menu:</p>

  <ul>
    <li>For images, icons and 3D models select <strong>Size and Position</strong></li>
    <li>For shapes select <strong>More Layout Options</strong></li>
  </ul>

  <img class="thumbnail border" src="{{ '/assets/images/word/Images/Lock anchor options.png' | url }}" alt="Different menu options to get to locked anchor setting" style="max-width:400px; width:100%; height:auto; vertical-align:middle">

  <p>On the window that pops up select the <strong>Position</strong> tab and then check <strong>Lock anchor</strong>.</p>

  <img class="thumbnail" src="{{ '/assets/images/word/Images/Lock anchor.png' | url }}" alt="Lock Anchor option in Layout settings window" style="max-width:450px; width:100%; height:auto; vertical-align:middle">

  <p>The anchor turns black and gains a little yellow padlock symbol indicating it's now locked as shown in the example below. Note how the image is far below the paragraph its anchored to. Unless the image is moved it will keep that position and distance from the paragraph wherever it is.</p>

  <img class="thumbnail border" src="{{ '/assets/images/word/Images/Lock anchor example.png' | url }}" alt="Locked Anchor indicated in margin for an image with square wrap" style="max-width:400px; width:100%; height:auto; vertical-align:middle">

  </section>

</div>
</article>

<div id="tooltip">
    <img />
  </div> 