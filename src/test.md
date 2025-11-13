<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>TOC Tooltip Test</title>
  <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
  <header class="topbar"></header>

  <!-- First tooltip overlay -->
  <div class="overlay-container">
    <img src="/assets/images/word/TOC/Custom TOC options.png" alt="TOC Options Dialog" class="base-image">
    <div class="hotspot rich-tooltip-trigger" data-tooltip-id="tooltip-1" style="top:214px; left:-10px;"></div>
    <div class="hotspot rich-tooltip-trigger" data-tooltip-id="tooltip-2" style="top:232px; left:-10px;"></div>
    <div class="hotspot rich-tooltip-trigger" data-tooltip-id="tooltip-3" style="top:214px; left:250px;"></div>
    <div class="hotspot rich-tooltip-trigger" data-tooltip-id="tooltip-4" style="top:254px; left:255px;"></div>
    <div class="hotspot rich-tooltip-trigger" data-tooltip-id="tooltip-5" style="top:325px; left:233px;"></div>
    <div class="hotspot rich-tooltip-trigger" data-tooltip-id="tooltip-6" style="top:349px; left:175px;"></div>
  </div>

  <!-- Second tooltip overlay -->
  <div class="overlay-container">
    <img src="/assets/images/word/TOC/TOC options.png" alt="TOC Options Dialog" class="base-image">
    <div class="hotspot rich-tooltip-trigger" data-tooltip-id="toc-options-tooltip-1" style="top:60px; left:0px;"></div>
    <div class="hotspot rich-tooltip-trigger" data-tooltip-id="toc-options-tooltip-2" style="top:247px; left:0px;"></div>
    <div class="hotspot rich-tooltip-trigger" data-tooltip-id="toc-options-tooltip-3" style="top:267px; left:0px;"></div>
    <div class="hotspot rich-tooltip-trigger" data-tooltip-id="toc-options-tooltip-4" style="top:297px; left:0px;"></div>
    <div class="hotspot rich-tooltip-trigger" data-tooltip-id="toc-options-tooltip-5" style="top:105px; left:240px;"></div>
  </div>

  <!-- Global tooltip layer -->
  <div id="tooltip-layer"></div>

  <!-- Tooltip logic -->
  <script>
    const tooltips = {
      "tooltip-1": `
        <div class="rich-tooltip">
          <p><img class="thumbnail border" src="/assets/images/word/TOC/Show page numbers.png" alt="Show page numbers"></p>
          <p>Will show page numbers. By default, this also aligns them right. Turn this off to show only the headings.</p>
        </div>`,
      "tooltip-2": `
        <div class="rich-tooltip">
          <p><img class="thumbnail border" src="/assets/images/word/TOC/Right align page numbers.png" alt="Right align page numbers"></p>
          <p>Page numbers are right aligned by default. For short entries or digital documents, left alignment may be suitable.</p>
        </div>`,
      "tooltip-3": `
        <div class="rich-tooltip">
          <p>This option adds a hyperlink to the content in the document. Its name refers to the web view, which is only relevant when saving as HTML.</p>
          <p>In Word’s default view, links activate with <strong>Ctrl + click</strong>. In PDFs, they work with a simple click.</p>
          <p><u>Note</u>: To remove page numbers, uncheck <strong>Show page numbers</strong> to the left.</p>
        </div>`,
      "tooltip-4": `
        <div class="rich-tooltip">
          <p><img class="thumbnail border" src="/assets/images/word/TOC/Tab leader.png" alt="Tab leader TOC menu in Word"></p>
          <p>Tab leaders are the lines between the text and the page number. Choose the style you prefer.</p>
        </div>`,
      "tooltip-5": `
        <div class="rich-tooltip">
          <p><img class="thumbnail border" src="/assets/images/word/TOC/TOC formats.png" alt="Table of contents formats in Word"></p>
          <p>Pre-made TOC designs like Classic, Modern, or Simple. The preview updates when selected.</p>
        </div>`,
      "tooltip-6": `
        <div class="rich-tooltip">
          <p>Set how many heading levels to include in the TOC. The default is Headings 1–3.</p>
        </div>`
    };

    document.querySelectorAll('.rich-tooltip-trigger').forEach(trigger => {
      trigger.addEventListener('mouseenter', () => {
        const id = trigger.dataset.tooltipId;
        if (!tooltips[id]) return;

        const rect = trigger.getBoundingClientRect();
        const layer = document.getElementById('tooltip-layer');
        layer.innerHTML = '';

        const wrapper = document.createElement('div');
        wrapper.innerHTML = tooltips[id];
        const tooltip = wrapper.firstElementChild;

        // Anchor tooltip to the right of the hotspot
        tooltip.style.position = 'fixed';
        tooltip.style.top = `${rect.top + (rect.height / 2) - (tooltip.offsetHeight / 2)}px`;
        tooltip.style.left = `${rect.right + 10}px`;
        tooltip.style.display = 'block';

        layer.appendChild(tooltip);
      });

      trigger.addEventListener('mouseleave', () => {
        document.getElementById('tooltip-layer').innerHTML = '';
      });
    });
  </script>

  <!-- Temporary visibility force (remove once confirmed) -->
  <style>
    .overlay-container { position: relative !important; display: inline-block !important; }
    .base-image { display: block !important; }
    .hotspot { 
      position: absolute !important; 
      width: 20px !important; 
      height: 20px !important; 
      background: rgba(255,0,0,0.7) !important; 
      border-radius: 50% !important; 
      z-index: 10001 !important; 
      outline: 2px solid lime !important;
    }
  </style>
</body>
</html>
