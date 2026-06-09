---
title: Embedded Files in Microsoft Word – OLE Objects, Linked vs Embedded and File Types – Ctrl All
layout: layout.liquid
permalink: /word/objects-embedded-files/
description: How to embed and link external files in Microsoft Word as OLE objects. Covers the difference between embedded and linked OLE objects, when to use each, supported file types including Word, Excel, PowerPoint, PDF and audio, inserting as an icon or visual content, opening, resizing and wrapping OLE objects on the page.
asset_id: ctrlall-word-objects-embedded-files-v1
date: 2025-10-26
last_modified: 2026-06-07
difficultyLevels:
  - level: Intermediate
    description: "Explores advanced topic of embedding and linking external OLE objects in a Word document for intermediate level."
    urlSuffix: "#intermediate"
tags:
  - ctrlall.org
  - ctrlall
  - ctrl all
  - microsoft word
  - OLE objects
  - OLE framework
  - Object Linking and Embedding
  - insert a file into a word document
  - inserting a file into a word document
  - insert files into a word document
  - inserting files into a word document
  - embedded files
  - embedding files
  - attaching files to a word document
  - attached files
  - external files
  - file attachment
  - outside files
  - other files
  - different files
  - another file
  - file inside word document
  - attach to word document
  - attach file to word document
  - attach a file to word document
  - attach files to word document
  - attach to a word document
  - attach a file to a word document
  - attach file to a word document
  - attach files to a word document
  - become part of the document
  - become part of a document
  - microsoft excel
  - microsoft powerpoint
  - microsoft outlook
  - email messages
  - zipped files
  - zip files
  - 7z files
  - audio files
  - sound files
  - video files
  - PDFs
  - docx
  - xlsx
  - pptx
  - msgs
  - zips
  - mp3s
  - mp4s
intermediate_only: true
active: word
---

<h1>Embedded files (OLE objects)</h1>

<div id="article-badge" class="article-badge intermediate-only">⚡ Intermediate Level Only</div>

<section class="section-light">

<p>You can embed a file in a Word document as an OLE object.</p>

<h2 id="what-is-an-OLE-object">What is an OLE object?</h2>
<p>OLE stands for Object Linking and Embedding. It’s a Microsoft framework that allows an application like Word to insert and interact with content from another application like Excel, PowerPoint, PDFs or even media players.</p> 
<p>In Word, an OLE <i>object</i> uses that OLE framework to import content from an external file onto the document page, showing either the file's icon which can be double clicked on to open it up, or the external file's actual content shown in an OLE container. Here's what both look like on the page:</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/Objects Embedded files/OLE objects.png' | url }}" alt="An OLE object icon and visual content in a Word document" style="max-width:600px; width:100%; height:auto; vertical-align:middle"></p>

<p id="OLE-object-types">OLE objects are shown as either an icon or visual content of an external file, simple enough. However there are two different types of OLE object you can insert into a document and it's important to understand the difference:</p>
<ul>
    <li>An <strong>Embedded OLE object</strong> stores content inside your Word document that becomes a static, self-contained copy/version of the source file, i.e. it doesn't update if the source file is changed.</li>
    <li>A <strong>Linked OLE object</strong> stores a reference in your Word document that connects to content within a source file. If the content in the source file changes, the linked OLE object updates in real time.</li>
</ul>

<h4>So which one should you go with?</h4> 
<p>On paper it sounds like the linked OLE object is better as it updates with the source file, but be warned — linked OLE objects are <u>fragile</u>; if the source file is moved, renamed, or deleted, then the link breaks.</p>
<p>Embedded OLE objects on the other hand are <u>static</u>; while they don’t update, they’re portable and safer for sharing.</p>
<p>You need to decide what is needed for your document. Do you need the external content/data displayed to be live? If so you'll want it linked. Or is the document complete, signed off, in a finished draft state for example and you need to display a copy of that specific version? If so you'll want it embedded.</p>

<h2>Factors to consider</h2>
<div class="table-wrapper">
 <table class="section-light">
    <colgroup>
      <col style="width: 50%;">
      <col style="width: 50%;">
    </colgroup>
    <thead>
      <tr>
        <th>Embedded OLE object</th>
        <th>Linked OLE object</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Document file size increases — the source file's file size is added onto your file.</td>
        <td>File size isn't as affected because you're linking to content externally.</td>
      </tr>
      <tr>
        <td>Can slow down the Word application and cause lag, especially in large documents. In some cases it may be wiser to link than embed.</td>
        <td>Less likely to slow down the Word application.</td>
      </tr>
      <tr>
        <td>Content is accessed within the document, it does not rely on access to an external file.</td>
        <td>The user must have access to the same source file in order to view the content.</td>
      </tr>
      <tr>
        <td colspan="2">A Word document with an OLE object may not open correctly on other devices, <span class="glossary-hover" data-term="OS">OSs</span> or platforms — think Mac, mobile, or web versions of Word.</td>
        </tr>
      <tr>
        <td colspan="2"><p>Both embedded and linked OLE objects can trigger macro warnings or security prompts. Linked OLE objects can also produce warnings if source files are missing or inaccessible.</p>
        <p><img class="thumbnail border" src="{{ '/assets/images/word/Objects Embedded files/Linked file warning.png' | url }}" alt="OLE object linked file warning message: This document contains links that may refer to other files" style="max-width:400px; width:100%; height:auto; vertical-align:middle"></p>
        </td>
      </tr>
    </tbody>
  </table>
 </div>
<br>
<h4>That's a lot of info, let's refresh:</h4>
<div class="table-wrapper">
 <table>
    <colgroup>
      <col style="width: 20%;">
      <col style="width: 40%;">
      <col style="width: 40%;">
    </colgroup>
    <thead>
      <tr>
        <th>Behaviour</th>
        <th>Embedded OLE object</th>
        <th>Linked OLE object</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Stored in document</td>
        <td>Yes</td>
        <td>No</td>
      </tr>
      <tr>
        <td>File size impact</td>
        <td>High</td>
        <td>Low</td>
      </tr>
      <tr>
        <td>Source updates when edited</td>
        <td>No</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Access</td>
        <td>All within document</td>
        <td>Requires additional access to source file</td>
      </tr>
      <tr>
        <td>Format</td>
        <td>File icon or content</td>
        <td>File icon or content</td>
      </tr>
      <tr>
        <td>Compatibility</td>
        <td>Varies based on system</td>
        <td>Varies based on system</td>
      </tr>
    </tbody>
 </table>
</div>
<h2>What files can I insert into an OLE object?</h2>
<ul>
    <li>Word - linked or embedded, icon or visual content</li>
    <li>Excel - as above</li>
    <li>PowerPoint - as above</li>
    <li>PDFs - as above</li>
    <li>Zipped files (in various formats: .zip, .7z etc) - linked or embedded, but cannot show visual content</li>
    <li>Audio and video files - linked or embedded, but cannot show visual content</li>
</ul>

<h2 id="insert-OLE-object">Inserting an OLE object</h2>
<p>With OLE objects, whether embedded or linked in the document, the visual representation is either an icon or the external visual content itself. Here's how to insert both (<u>Note</u>: use this website's top left toggle to collapse the sidebar to see the following images more clearly):</p>
<p>Go to <strong>Insert > Object</strong>:</p>

<p><img class="thumbnail left" src="{{ '/assets/images/word/Objects Embedded files/Insert Object.png' | url }}" alt="Insert Object option on ribbon in Word" style="max-width:325px; width:100%; height:auto; vertical-align:middle"></p>

<p>Next select the <strong>Create from File</strong> tab (the 'Create New' tab lets you choose between some formats first but it'll end up asking you to choose a file anyway). Click <strong>Browse</strong> and choose the external file you need:</p>

<p><img class="thumbnail left" src="{{ '/assets/images/word/Objects Embedded files/Insert Object Create from file.png' | url }}" alt="Insert Object option Create from file" style="max-width:475px; width:100%; height:auto; vertical-align:middle"></p>

<p>Those two little checkboxes affect whether it will be displayed as an icon or visual content and whether it will be linked or embedded within this document:</p>
<div class="table-wrapper">
<table>
    <colgroup>
      <col style="width: 50%;">
      <col style="width: 50%;">
    </colgroup>
    <thead>
      <tr>
        <th>Icon - Embedded</th>
        <th>Visual content - Embedded</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="vertical-align: top;">
        <p>Before talking about which checkbox to check, the easiest way to embed a file with an icon is to just simply drag and drop an existing file icon into your open Word document and it'll embed itself on the page wherever your <span class="glossary-hover" data-term="insertion-point">insertion point</span> was when you dropped it.</p>
        <p><img class="thumbnail" src="{{ '/assets/images/word/Objects/Insert embedded file.gif' | url }}" alt="Insert embedded file in Word" style="max-width: 100%; height: auto; display: inline;"></p>
        <p>But if you want to do it via Insert > Object, in this window check <strong>Display as icon</strong>, then click <strong>OK</strong>:</p>
        <p><img class="thumbnail" src="{{ '/assets/images/word/Objects Embedded files/Insert Object Create from file embedded icon.png' | url }}" alt="Insert Object Create from file embedded icon" style="max-width: 100%; height: auto; display: block;"></p>
        </td>
        <td style="vertical-align: top;">
        <p>Leave both checkboxes unchecked, then click <strong>OK</strong>.</p>
        <p><img class="thumbnail" src="{{ '/assets/images/word/Objects Embedded files/Insert Object Create from file embedded content.png' | url }}" alt="Insert Object Create from file embedded content" style="max-width: 100%; height: auto; display: block;"></p>
        </td>
      </tr>
    </tbody>
</table>
</div>
<div class="table-wrapper">
<table>
    <colgroup>
      <col style="width: 50%;">
      <col style="width: 50%;">
    </colgroup>
    <thead>
      <tr>
        <th>Icon - Linked</th>
        <th>Visual content - Linked</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="vertical-align: top;">
        <p>Check both checkboxes <strong>Link to file</strong> and <strong>Display as icon</strong>, then click <strong>OK</strong>.</p>
        <p><img class="thumbnail" src="{{ '/assets/images/word/Objects Embedded files/Insert Object Create from file linked content icon.png' | url }}" alt="Insert Object Create from file linked content icon" style="max-width: 100%; height: auto; display: block;"></p>
        </td>
        <td style="vertical-align: top;">
        <p>Check <strong>Link to file</strong>, then click <strong>OK</strong>.</p>
        <p><img class="thumbnail" src="{{ '/assets/images/word/Objects Embedded files/Insert Object Create from file linked content.png' | url }}" alt="Insert Object Create from file linked content" style="max-width: 100%; height: auto; display: block;"></p>
        </td>
      </tr>
    </tbody>
</table>
</div>
<p>Once inserted OLE objects look like this:</p>
<div class="table-wrapper">
<table>
    <colgroup>
      <col style="width: 50%;">
      <col style="width: 50%;">
    </colgroup>
    <thead>
      <tr>
        <th>Icon</th>
        <th>Visual content</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
        <p><img class="thumbnail" src="{{ '/assets/images/word/Objects Embedded files/OLE object Word doc icon.png' | url }}" alt="OLE object Word doc icon" style="max-width:100px; width:100%; height:auto; vertical-align:middle"></p>
        </td>
        <td>
        <p><img class="thumbnail" src="{{ '/assets/images/word/Objects Embedded files/OLE object Word doc visual content.png' | url }}" alt="OLE object Word doc visual content" style="max-width:400px; width:100%; height:auto; vertical-align:middle"></p>
        </td>
      </tr>
    </tbody>
</table>
</div>
<h4>What does each filetype look like?</h4>
<div class="table-wrapper">
<table>
    <colgroup>
        <col style="width: 15%;">
        <col style="width: 25%;">
        <col style="width: 30%;">
        <col style="width: 30%;">
    </colgroup>
    <thead>
      <tr>
        <th>Filetype</th>
        <th style="text-align: center;"><strong>Icon</strong><p>(linked or embedded)</p></th>
        <th style="text-align: center;"><strong>Visual content</strong><p>(embedded)</p></th>
        <th style="text-align: center;"><strong>Visual content</strong><p>(linked)</p></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Word</td>
        <td><img class="thumbnail" src="{{ '/assets/images/word/Objects Embedded files/OLE object Word doc icon.png' | url }}" alt="OLE object Word doc icon" style="max-width:115px; width:100%; height:auto; vertical-align:middle"></td>
        <td colspan="2"><img class="thumbnail" src="{{ '/assets/images/word/Objects Embedded files/OLE object Word doc visual content.png' | url }}" alt="OLE object Word doc visual content" style="max-width:400px; width:100%; height:auto; vertical-align:middle"></td>
     </tr>
     <tr>
        <td>Excel</td>
        <td><img class="thumbnail" src="{{ '/assets/images/word/Objects Embedded files/OLE object excel icon.png' | url }}" alt="OLE object excel icon" style="max-width:115px; width:100%; height:auto; vertical-align:middle"></td>
        <td colspan="2"><img class="thumbnail" src="{{ '/assets/images/word/Objects Embedded files/OLE object Excel visual content.png' | url }}" alt="OLE object Excel visual content" style="max-width:350px; width:100%; height:auto; vertical-align:middle"></td>
     </tr>
     <tr>
        <td>PowerPoint</td>
        <td><img class="thumbnail" src="{{ '/assets/images/word/Objects Embedded files/OLE object ppt icon.png' | url }}" alt="OLE object ppt icon" style="max-width:115px; width:100%; height:auto; vertical-align:middle"></td>
        <td colspan="2"><img class="thumbnail" src="{{ '/assets/images/word/Objects Embedded files/OLE object ppt visual content.png' | url }}" alt="OLE object ppt visual content" style="max-width:400px; width:100%; height:auto; vertical-align:middle"></td>
     </tr>
     <tr>
        <td>Outlook message</td>
        <td><img class="thumbnail" src="{{ '/assets/images/word/Objects Embedded files/OLE object outlook msg icon.png' | url }}" alt="OLE object outlook msg icon" style="max-width:115px; width:100%; height:auto; vertical-align:middle"></td>
        <td><img class="thumbnail" src="{{ '/assets/images/word/Objects Embedded files/OLE object outlook msg content embedded.png' | url }}" alt="OLE object outlook msg content embedded" style="max-width:115px; width:100%; height:auto; vertical-align:middle"></td>
        <td><img class="thumbnail" src="{{ '/assets/images/word/Objects Embedded files/OLE object outlook msg content linked.png' | url }}" alt="OLE object outlook msg content linked" style="max-width:300px; width:100%; height:auto; vertical-align:middle"></td>        
    </tr>
     <tr>
        <td>PDF</td>
        <td><img class="thumbnail" src="{{ '/assets/images/word/Objects Embedded files/OLE object pdf icon.png' | url }}" alt="OLE object pdf icon" style="max-width:115px; width:100%; height:auto; vertical-align:middle"></td>
        <td colspan="2"><img class="thumbnail" src="{{ '/assets/images/word/Objects Embedded files/OLE object pdf visual content.png' | url }}" alt="OLE object pdf visual content" style="max-width:350px; width:100%; height:auto; vertical-align:middle"></td>
     </tr>
     <tr>
        <td>Zipped file</td>
        <td><img class="thumbnail" src="{{ '/assets/images/word/Objects Embedded files/OLE object zipped icon.png' | url }}" alt="OLE object zipped icon" style="max-width:115px; width:100%; height:auto; vertical-align:middle"></td>
        <td><img class="thumbnail" src="{{ '/assets/images/word/Objects Embedded files/OLE object zipped content embedded.png' | url }}" alt="OLE object zipped content embedded" style="max-width:150px; width:100%; height:auto; vertical-align:middle"></td>
        <td><img class="thumbnail" src="{{ '/assets/images/word/Objects Embedded files/OLE object zipped content linked.png' | url }}" alt="OLE object zipped content linked" style="max-width:300px; width:100%; height:auto; vertical-align:middle"></td>
     </tr>
     <tr>
        <td>Audio</td>
        <td><img class="thumbnail" src="{{ '/assets/images/word/Objects Embedded files/OLE object audio icon.png' | url }}" alt="OLE object audio icon" style="max-width:140px; width:100%; height:auto; vertical-align:middle"></td>
        <td><img class="thumbnail" src="{{ '/assets/images/word/Objects Embedded files/OLE object audio content embedded.png' | url }}" alt="OLE object audio content embedded" style="max-width:150px; width:100%; height:auto; vertical-align:middle"></td>
        <td><img class="thumbnail" src="{{ '/assets/images/word/Objects Embedded files/OLE object audio content linked.png' | url }}" alt="OLE object audio content linked" style="max-width:300px; width:100%; height:auto; vertical-align:middle"></td>
     </tr>
     <tr>
        <td>Video</td>
        <td><img class="thumbnail" src="{{ '/assets/images/word/Objects Embedded files/OLE object video icon.png' | url }}" alt="OLE object video icon" style="max-width:150px; width:100%; height:auto; vertical-align:middle"></td>
        <td><img class="thumbnail" src="{{ '/assets/images/word/Objects Embedded files/OLE object video content embedded.png' | url }}" alt="OLE object video content embedded" style="max-width:150px; width:100%; height:auto; vertical-align:middle"></td>
        <td><img class="thumbnail" src="{{ '/assets/images/word/Objects Embedded files/OLE object video content linked.png' | url }}" alt="OLE object video content linked" style="max-width:300px; width:100%; height:auto; vertical-align:middle"></td>
     </tr>
     <tr>
        <td>Other</td>
        <td style="text-align: center;">As above</td>
        <td colspan="2" style="text-align: center;">Depends on file</td>
     </tr>
    </tbody>
</table>
</div>


<h2>Opening an OLE object</h2>
<p>To open an OLE object file (linked or embedded), simply <strong>double click on it</strong> and its respective application will open. With the example in this article I'm opening an embedded Word document — note the 'Document in Document1' title on the Quick Access Toolbar.</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/Objects Embedded files/Embedded file OLE object open.png' | url }}" alt="Embedded file OLE object opened with title document in document1" style="max-width:500px; width:100%; height:auto; vertical-align:middle"></p>
<h4 id="object-not-updated">Why hasn't the OLE object content updated since I last edited the original/source file?</h4>
<p>OLE objects only update with the source file if the content is <i>linked</i> to the source file. What you likely have is an OLE object with content previously imported from the source file, so the content at the time became embedded into the document; it won't update with the external source file as it's a separate past version of it. You'll want to delete this and create a linked OLE object instead.</p>
<ul>
    <li>Understand the difference more: <a href="#OLE-object-types">OLE object types</a></li>
    <li>How to insert the different types: <a href="#insert-OLE-object">Inserting OLE objects</a></li>
</ul>

<h2 id="resize-embedded-file">Resizing an OLE object</h2>
<p>Icons can't be resized, but visual content can. Select the visual content then click and drag the sizing handles at the edges of the OLE container to resize visual content on the page as needed.</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/Objects Embedded files/Resize OLE container.gif' | url }}" alt="Demonstration of resizing an embedded object OLE container" style="max-width:350px; width:100%; height:auto; vertical-align:middle"></p>


<h2 id="wrap-embedded-file">Wrapping an OLE object</h2>
<p>By default OLE objects are set to be in line with text. They behave slightly differently than images as they don’t expose the floating layout widget and require wrapping manually. To set wrapping for an OLE object <strong>right click</strong> on it then select <strong>Picture</strong>.</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/Objects Embedded files/Embedded file OLE object menu.png' | url }}" alt="Embedded file OLE object right click menu Picture option" style="max-width:550px; width:100%; height:auto; vertical-align:middle"></p>
<p>Select the <strong>Layout</strong> tab in the window that pops up. This gives you some wrapping styles and alignment options but if you click <strong>Advanced</strong> it gives you a few more including the Top and Bottom style, and spacing from the surrounding text.</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/Objects Embedded files/Embedded file OLE object wrap settings.png' | url }}" alt="Format object wrap options and advanced options" style="max-width:450px; width:100%; height:auto; vertical-align:middle"></p>
<p>Here's the Top and Bottom wrapping style applied with some added 'distance from text' spacing top and bottom:</p>
<p><img class="thumbnail border" src="{{ '/assets/images/word/Objects Embedded files/Embedded file OLE object wrap.png' | url }}" alt="Embedded file icon in a paragraph with top and bottom wrapping" style="max-width:600px; width:100%; height:auto; vertical-align:middle"></p>

</section>

<div class="article-share">
{% include "share-menu.liquid" %}
</div>