---
title: Contact us
description: Contact us.
layout: layout.liquid
permalink: /contact/
canonical: /contact/
asset_id: ctrlall-contact-v1
image: /assets/images/Ctrl All logo og.png
date: 2025-10-26
last_modified: 2025-10-26
tags:
  - ctrlall.org
  - ctrlall
  - ctrl all
  - contact us
  - contact form
  - message
  - email
  - digital literacy
  - query
  - queries
  - problems
  - requests
  - educators
  - eduction providers
  - library
  - libraries
  - librarian
  - community organisations
  - community organizations
  - unions
  - government
  - corporate
  - admin@ctrlall.org
active: contact
---

<section class="section-light">
<h1>Contact us</h1>
<p>If you're stuck on a problem, have a query or something else, feel free to drop us a message.</p>
<form action="https://formspree.io/f/mblzanjy" method="POST" id="contactForm">
  <label for="email">Your Email</label>
  <input type="email" name="email" id="email" required>
  <select name="category" id="category" required>
    <option value="#">Select</option>
    <option value="Individual">Individual</option>
    <option value="Educator">Educator</option>
    <option value="Education provider">Education provider</option>
    <option value="Library">Library</option>
    <option value="Community organisation">Community organisation</option>
    <option value="Union">Union</option>
    <option value="Government">Government</option>
    <option value="Corporate">Corporate</option>
    <option value="Other">Other</option>
  </select>
  <label for="message">Message</label>
  <textarea name="message" id="message" rows="6" required></textarea>
  <input type="hidden" name="_subject" id="subjectLine" value="New Inquiry">
  <button type="submit">Send</button>
</form>
<div id="formSuccess" style="display:none; margin-top:1rem; color:white;">Thanks! Message sent.</div>
</section>