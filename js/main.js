/* CTRL All glossary logic v1.0
   Added Tooltip functionality
   Asset fingerprint: glossary-core | owner: Steve Williams | origin: ctrlall.com */

document.addEventListener("DOMContentLoaded", () => {
  // ─── Topbar Menu Toggle ─────────────────────
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // ─── Share Menu Actions ─────────────────────
  function copyPageLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url)
      .then(() => {
        const tooltip = document.getElementById("copy-tooltip");
        tooltip.style.visibility = "visible";
        setTimeout(() => {
          tooltip.style.visibility = "hidden";
        }, 1500);
      })
      .catch(err => console.error("Copy failed:", err));
  }

  function emailCurrentPage(event) {
    event.preventDefault();
    const subject = "Check this out";
    const body = window.location.href;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  // ─── Populate Social Share Links ─────────────
  const pageUrl = encodeURIComponent(window.location.href);
  const pageTitle = encodeURIComponent(document.title);

  const socialLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
    reddit: `https://www.reddit.com/submit?url=${pageUrl}&title=${pageTitle}`,
    bluesky: `https://bsky.app/intent/compose?text=${pageTitle}%20${pageUrl}`,
    threads: `https://www.threads.net/intent/post?text=${pageTitle}%20${pageUrl}`
  };

  Object.entries(socialLinks).forEach(([id, url]) => {
    const el = document.getElementById(`${id}-share`);
    if (el) el.href = url;
  });

  // ─── Share Dropdown Behavior ────────────────
 const dropbtn = document.querySelector(".dropbtn");
const dropdown = document.getElementById("share-dropdown");

if (dropbtn && dropdown) {
  // Toggle dropdown on button click
  dropbtn.addEventListener("click", (e) => {
    e.preventDefault();
    const isVisible = dropdown.style.display === "flex";
    dropdown.style.display = isVisible ? "none" : "flex";

    // trigger fade-in animation only when showing
    if (!isVisible) {
      dropdown.style.animation = "fadeInDown 0.2s ease-out";
    } else {
      dropdown.style.animation = "";
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target) && !dropbtn.contains(e.target)) {
      dropdown.style.display = "none";
      dropdown.style.animation = "";
    }
  });
}

  // ─── Sidebar Nested Toggle ──────────────────
  document.querySelectorAll(".nav-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const submenu = button.nextElementSibling;
      const isNowOpen = submenu.classList.toggle("show");
      button.classList.toggle("expanded", isNowOpen);
      button.setAttribute("aria-expanded", isNowOpen);
    });
  });

  // ─── Sidebar Collapse Toggle ────────────────
  const toggleBtn = document.getElementById("navbar-toggle");
  const sidebarWrapper = document.querySelector(".sidebar-wrapper");

  if (toggleBtn && sidebarWrapper) {
    const wasCollapsed = localStorage.getItem("sidebarCollapsed") === "true";
    if (wasCollapsed) {
      sidebarWrapper.classList.add("collapsed");
      toggleBtn.setAttribute("aria-expanded", "false");
    } else {
      sidebarWrapper.classList.remove("collapsed");
      toggleBtn.setAttribute("aria-expanded", "true");
    }

    toggleBtn.addEventListener("click", () => {
      const isCollapsed = sidebarWrapper.classList.toggle("collapsed");
      toggleBtn.setAttribute("aria-expanded", !isCollapsed);
      localStorage.setItem("sidebarCollapsed", isCollapsed);
    });
  }

  // ─── Collapse Sidebar on Link Click (Mobile Only) ────────────────
const sidebarLinks = document.querySelectorAll(".sidebar-wrapper a");

sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Check if viewport is mobile size
    if (window.innerWidth <= 1024) {
      sidebarWrapper.classList.add("collapsed");
      toggleBtn.setAttribute("aria-expanded", "false");
      localStorage.setItem("sidebarCollapsed", true);
    }
  });
});

// ─── Collapse Sidebar on Outside Click (Mobile Only) ────────────────
document.addEventListener("click", (event) => {
  if (window.innerWidth <= 1024) {
    const clickedInsideSidebar = sidebarWrapper.contains(event.target);
    const clickedToggleBtn = toggleBtn.contains(event.target);

    if (!clickedInsideSidebar && !clickedToggleBtn) {
      sidebarWrapper.classList.add("collapsed");
      toggleBtn.setAttribute("aria-expanded", "false");
      localStorage.setItem("sidebarCollapsed", true);
    }
  }
});


// ─── Footer Fade-In on Scroll ───────────────
const footer = document.querySelector(".site-footer");

if (footer) {
  window.addEventListener("scroll", () => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;

    // Allow a small buffer (e.g. 50px) so footer appears near bottom
    if (scrollPosition >= pageHeight - 50) {
      footer.style.opacity = "1";
    } else {
      footer.style.opacity = "0";
    }
  });
}

// ─── Tooltip on Table Row Hover ─────────
const tooltip = document.getElementById("tooltip");
const tooltipImg = tooltip?.querySelector("img");

if (tooltip && tooltipImg) {
  document.querySelectorAll(".tooltip-row").forEach((row) => {
    row.addEventListener("mouseenter", () => {
      const gifSrc = row.getAttribute("data-gif");
      if (gifSrc) {
        tooltipImg.src = gifSrc;
      }

      // optional per-row style overrides
      const gifStyle = row.getAttribute("data-gif-style");
      if (gifStyle) {
        tooltipImg.setAttribute("style", gifStyle);
      } else {
        tooltipImg.removeAttribute("style");
      }

      // show tooltip with fade-in
      tooltip.classList.add("visible");
    });

    row.addEventListener("mousemove", (e) => {
      // default position to the right/below cursor
      let left = e.pageX + 15;
      let top = e.pageY + 15;

      const tooltipWidth = tooltip.offsetWidth;
      const tooltipHeight = tooltip.offsetHeight;

      // snap left if overflowing right edge
      if (left + tooltipWidth > window.innerWidth) {
        left = e.pageX - tooltipWidth - 15;
      }

      // snap above if overflowing bottom edge
      if (top + tooltipHeight > window.innerHeight) {
        top = e.pageY - tooltipHeight - 15;
      }

      // basic clamps so it never goes offscreen entirely
      if (left < 10) left = 10;
      if (top < 10) top = 10;

      tooltip.style.left = left + "px";
      tooltip.style.top = top + "px";
    });

    row.addEventListener("mouseleave", () => {
      // hide tooltip with fade-out
      tooltip.classList.remove("visible");
      tooltipImg.src = "";
      tooltipImg.removeAttribute("style");
    });
  });
}




// Keyboard shortcut image alt description automation
// ─── Scoped Alt Text Injection for Keyboard Shortcut Tooltips ─────────
if (
  window.location.pathname.includes("/content-control/keyboard-shortcuts")
) {
  const tooltip = document.getElementById("gif-tooltip");
  const tooltipImg = tooltip?.querySelector("img");

  if (tooltip && tooltipImg) {
    document.querySelectorAll(".tooltip-row").forEach((row) => {
      row.addEventListener("mouseenter", () => {
        const gifSrc = row.getAttribute("data-gif");
        const shortcut = row.querySelector("td:nth-child(1)")?.textContent.trim();
        const description = row.querySelector("td:nth-child(2)")?.textContent.trim();

        tooltipImg.src = gifSrc;
        tooltipImg.alt = `${shortcut} shortcut: ${description}`;
        tooltip.style.display = "block";
      });

      row.addEventListener("mousemove", (e) => {
        tooltip.style.left = e.pageX + 15 + "px";
        tooltip.style.top = e.pageY + 15 + "px";
      });

      row.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
        tooltipImg.src = "";
        tooltipImg.alt = "";
      });
    });
  }
}

// ─── Device Detection Helper ────────────────
function isMobileOrTablet() {
  // Matches common mobile/tablet identifiers in the user agent
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

// ─── Mobile Overlay ────────────────
// Show overlay only if device is mobile/tablet AND orientation is portrait
function toggleMobileOverlay() {
  const overlay = document.getElementById("mobileOverlay");
  if (!overlay) return; // guard against missing element

  const isPortrait = window.matchMedia("(orientation: portrait)").matches;

  if (isMobileOrTablet() && isPortrait) {
    overlay.style.display = "flex";
  } else {
    overlay.style.display = "none";
  }
}

window.addEventListener("load", toggleMobileOverlay);
window.addEventListener("resize", toggleMobileOverlay);
window.addEventListener("orientationchange", toggleMobileOverlay);



// ─── Modal Image Preview ─────────────────────
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");

document.querySelectorAll(".thumbnail").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

document.querySelector(".close")?.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", () => {
  modal.style.display = "none";
});

  // ─── Portrait Mode Warning ──────────────────────
function checkOrientation() {
  const warning = document.getElementById('portrait-warning');
  if (window.matchMedia("(orientation: portrait)").matches) {
    warning.style.display = 'flex';
  } else {
    warning.style.display = 'none';
  }
}

window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);
document.addEventListener('DOMContentLoaded', checkOrientation);

  // ─── Contact Form Subject Line ───────────────
  const category = document.getElementById("category");
  const subjectLine = document.getElementById("subjectLine");

  if (category && subjectLine) {
    category.addEventListener("change", () => {
      const selected = category.value;
      subjectLine.value = selected && selected !== "#" ? `Inquiry from ${selected}` : "New Inquiry";
    });
  }

  // ─── Contact Form Confirmation ───────────────
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("formSuccess");

  if (form && successMessage) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json"
          }
        });

        if (response.ok) {
          form.reset();
          successMessage.style.display = "block";
        } else {
          alert("Oops! Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        alert("Network error. Please try again later.");
      }
    });
  }
});
// ─── Glossary tooltip ───────────────
document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('/glossary');
  const text = await response.text();
  const parser = new DOMParser();
  const glossaryDoc = parser.parseFromString(text, 'text/html');

  const tooltip = document.getElementById('glossary-tooltip');
  if (!tooltip) return;

  const glossaryTemplate = glossaryDoc.getElementById('tooltip-glossary');
  if (!glossaryTemplate) return;

  const glossaryTable = glossaryTemplate.content.querySelector('table');
  if (!glossaryTable) return;

  let isHoveringTerm = false;
  let isHoveringTooltip = false;

  function showTooltip(content, rect) {
    tooltip.innerHTML = content;

    // Patch glossary links inside tooltip
    tooltip.querySelectorAll('a[href^="#"]').forEach(link => {
      const hash = link.getAttribute('href');
      link.setAttribute('href', `/glossary/${hash}`);
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    });

    tooltip.style.display = 'block';

    const tooltipWidth = tooltip.offsetWidth;
    let top = rect.bottom + window.scrollY;
    let left = rect.left + window.scrollX;

    if (left + tooltipWidth > window.innerWidth) {
      left = rect.right + window.scrollX - tooltipWidth;
      if (left < 10) left = 10;
    }

    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
  }

  function hideTooltip() {
    tooltip.style.display = 'none';
  }

  document.querySelectorAll('.glossary-hover').forEach(el => {
    const term = el.dataset.term;

    el.addEventListener('mouseenter', () => {
      isHoveringTerm = true;

      const row = glossaryTable.querySelector(`td[id="${term}"]`);
      const definitionCell = row?.nextElementSibling;

      if (row && definitionCell) {
        showTooltip(definitionCell.innerHTML, el.getBoundingClientRect());
      }
    });

    el.addEventListener('mouseleave', () => {
      isHoveringTerm = false;
      setTimeout(() => {
        if (!isHoveringTerm && !isHoveringTooltip) hideTooltip();
      }, 150);
    });
  });

  tooltip.addEventListener('mouseenter', () => {
    isHoveringTooltip = true;
  });

  tooltip.addEventListener('mouseleave', () => {
    isHoveringTooltip = false;
    setTimeout(() => {
      if (!isHoveringTerm && !isHoveringTooltip) hideTooltip();
    }, 150);
  });

  // Click outside to dismiss
  document.addEventListener('click', (event) => {
    const isClickInsideTerm = event.target.closest('.glossary-hover');
    const isClickInsideTooltip = tooltip.contains(event.target);
    if (!isClickInsideTerm && !isClickInsideTooltip) hideTooltip();
  });
});



// ─── Locale Toggle + Spelling Variant Swap ─────────────────────────────
document.addEventListener("DOMContentLoaded", async () => {
  let dictionary = {};
  try {
    const res = await fetch("/assets/spellingVariants.json");
    if (!res.ok) throw new Error(`Failed to load dictionary: ${res.status} ${res.statusText}`);
    dictionary = await res.json();
    console.log("✅ Dictionary loaded from /assets:", Object.keys(dictionary).slice(0, 10));
  } catch (error) {
    console.warn("⚠️ Fetch failed. Using fallback dictionary.", error);
    dictionary = {
      "colour": { "us": "color", "gb": "colour" },
      "colours": { "us": "colors", "gb": "colours" },
      "favourite": { "us": "favorite", "gb": "favourite" },
      "favourites": { "us": "favorites", "gb": "favourites" },
      "honour": { "us": "honor", "gb": "honour" },
      "honours": { "us": "honors", "gb": "honours" }
    };
    console.log("✅ Fallback dictionary loaded:", Object.keys(dictionary).slice(0, 10));
  }

  window.dictionary = dictionary;

  let saved = localStorage.getItem("locale");
  if (saved !== "us" && saved !== "gb") {
    localStorage.removeItem("locale");
    saved = null;
  }

  const lang = navigator.language?.toLowerCase();
  const localeMap = {
    "en-us": "us",
    "en-gb": "gb",
    "en-au": "gb",
    "en-nz": "gb",
    "en-ca": "gb",
    "en-ie": "gb",
    "en": "gb"
  };

  const browserLocale = localeMap[lang] || "gb";
  const region = saved || browserLocale;

  console.log("Detected browser language:", lang);
  console.log("Resolved region:", region);
  window.region = region;
  console.log("🔎 Test swap:", dictionary["colour"]?.[region]);

  const toggle = document.getElementById("locale-toggle");
  if (toggle) {
    toggle.checked = region === "gb";
    toggle.addEventListener("change", () => {
      const newLocale = toggle.checked ? "gb" : "us";
      console.log("Toggle changed →", newLocale);
      localStorage.setItem("locale", newLocale);
      location.reload();
    });
  }

  console.log("Starting text swap...");

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const parent = node.parentNode;

    if (!node.nodeValue?.trim()) continue;
    if (parent && parent.closest(".us-only")) continue;

    const original = node.nodeValue;
    const swapped = original.replace(/\b[\w]+(?:-[\w]+)*\b/g, (word) => {
      const parts = word.split("-");
      const swappedParts = parts.map(part => {
        const lower = part.toLowerCase();
        const entry = dictionary[lower];
        const replacement = entry?.[region];

        if (!replacement) return part;
        if (part === part.toUpperCase()) return replacement.toUpperCase();
        if (part[0] === part[0].toUpperCase()) return replacement[0].toUpperCase() + replacement.slice(1);
        return replacement;
      });

      const result = swappedParts.join("-");
      if (result !== word) {
        console.debug(`✅ Replacing "${word}" → "${result}"`);
      }

      return result;
    });

    if (swapped !== original) {
      node.nodeValue = swapped;
    }
  }

  // 🔁 Initialize search after dictionary and region are ready
  if (typeof window.initSearch === "function") {
    window.initSearch();
  }
});
// ─── Search Bar Logic ─────────────────────────────
window.initSearch = function () {
  console.log("🔍 Search initialized");

  const searchInput = document.getElementById("searchInput");
  const suggestionsList = document.getElementById("suggestions");
  let activeIndex = -1;
  let currentResults = [];

  // Escape regex special characters
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  // Highlight matching query text
  function highlightMatch(text, query) {
    const regex = new RegExp(`(${escapeRegExp(query)})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  }

  // Render suggestions
  function renderSuggestions(results, query) {
    suggestionsList.innerHTML = "";
    activeIndex = -1;
    currentResults = results;

    if (results.length === 0) {
      suggestionsList.innerHTML = `<li class="no-results">No matches found for "${query}"</li>`;
      return;
    }

    results.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${highlightMatch(item.title || "Untitled", query)}
      `;
      li.classList.add("suggestion-item");
      li.setAttribute("data-index", index);

      const destination = item.permalink || item.url || "/";
      console.log("🔗 Navigating to:", destination, item);
      li.onclick = () => {
        window.location.href = destination;
      };

      suggestionsList.appendChild(li);
    });

    suggestionsList.style.display = "block";
  }

  // Fetch suggestions from index
  async function fetchSuggestions(query) {
    try {
      const response = await fetch("/search-index.json");
      if (!response.ok) throw new Error("Failed to load search index");
      const items = await response.json();

      const lowerQuery = query.toLowerCase();

      return items.filter((item) =>
        Object.values(item).some((value) => {
          if (typeof value === "string") return value.toLowerCase().includes(lowerQuery);
          if (Array.isArray(value)) return value.some((v) => typeof v === "string" && v.toLowerCase().includes(lowerQuery));
          return false;
        })
      );
    } catch (error) {
      console.error("Search error:", error);
      return [];
    }
  }

  // Debounce input
  let debounceTimer;
  searchInput.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    const rawQuery = searchInput.value.trim();
    if (!rawQuery) {
      suggestionsList.innerHTML = "";
      suggestionsList.style.display = "none";
      return;
    }

    debounceTimer = setTimeout(async () => {
      const results = await fetchSuggestions(rawQuery);
      renderSuggestions(results, rawQuery);
    }, 200);
  });

  // Keyboard navigation
  searchInput.addEventListener("keydown", (e) => {
    const items = suggestionsList.querySelectorAll(".suggestion-item");
    if (!items.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      activeIndex = (activeIndex + 1) % items.length;
      updateActiveItem(items);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      activeIndex = (activeIndex - 1 + items.length) % items.length;
      updateActiveItem(items);
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      items[activeIndex].click();
    }
  });

  // Update active suggestion
  function updateActiveItem(items) {
    items.forEach((item) => item.classList.remove("active"));
    items[activeIndex].classList.add("active");
    items[activeIndex].scrollIntoView({ block: "nearest" });
  }

  // Hide suggestions when clicking outside
  document.addEventListener("click", (event) => {
    if (!searchInput.contains(event.target) && !suggestionsList.contains(event.target)) {
      suggestionsList.innerHTML = "";
      suggestionsList.style.display = "none";
    }
  });
};

// ─── Difficulty Toggle ─────────────────────────────
function setView(view, isIntermediateOnly = false, isNoDifficulty = false) {
  if (!isIntermediateOnly && !isNoDifficulty) {
    localStorage.setItem('preferredView', view);
  } else if (isIntermediateOnly) {
    view = 'intermediate';
  }

  // Show/hide article versions
  const beginnerContent = document.querySelector('.beginner-version');
  const intermediateContent = document.querySelector('.intermediate-version');
  if (!isNoDifficulty && beginnerContent && intermediateContent) {
    beginnerContent.style.display = (view === 'beginner') ? 'block' : 'none';
    intermediateContent.style.display = (view === 'intermediate') ? 'block' : 'none';
  }

  // Update badge
  const badge = document.getElementById('article-badge');
  if (badge) {
    if (isNoDifficulty) {
      badge.className = 'article-badge disabled';
      badge.textContent = 'ℹ️ No Difficulty Toggle';
    } else {
      badge.className = 'article-badge ' + (isIntermediateOnly ? 'intermediate-only' : view);
      badge.textContent = isIntermediateOnly
        ? '⚡ Intermediate Only'
        : (view === 'beginner' ? '⭐ Beginner Level' : '⚡ Intermediate Level');
    }
  }

  // Update toggle buttons
  const beginnerBtn = document.getElementById('beginner-toggle');
  const intermediateBtn = document.getElementById('intermediate-toggle');
  if (beginnerBtn && intermediateBtn) {
    if (isNoDifficulty) {
      beginnerBtn.classList.remove('active');
      intermediateBtn.classList.remove('active');
      beginnerBtn.disabled = true;
      intermediateBtn.disabled = true;
      beginnerBtn.title = 'Difficulty toggle not available on this page';
      intermediateBtn.title = 'Difficulty toggle not available on this page';
    } else {
      beginnerBtn.classList.toggle('active', view === 'beginner');
      intermediateBtn.classList.toggle('active', view === 'intermediate');

      if (isIntermediateOnly) {
        beginnerBtn.disabled = true;
        beginnerBtn.title = 'This page is Intermediate level only';
        intermediateBtn.disabled = false;
        intermediateBtn.removeAttribute('title');
      } else {
        beginnerBtn.disabled = false;
        intermediateBtn.disabled = false;
        beginnerBtn.removeAttribute('title');
        intermediateBtn.removeAttribute('title');
      }
    }
  }

  // Update nav link labels only if not a no-difficulty page
  if (!isNoDifficulty) {
    document.querySelectorAll('a[data-beginner]').forEach(link => {
      link.textContent = (view === 'beginner') ? link.dataset.beginner : link.dataset.intermediate;
    });
  }
}

window.onload = function() {
  const isIntermediateOnly = document.body.dataset.intermediateOnly === "true";
  const isNoDifficulty = document.body.dataset.noDifficulty === "true";

  const savedView = localStorage.getItem('preferredView') || 'beginner';
  const initialView = isIntermediateOnly ? 'intermediate' : savedView;

  setView(initialView, isIntermediateOnly, isNoDifficulty);

  const beginnerBtn = document.getElementById('beginner-toggle');
  const intermediateBtn = document.getElementById('intermediate-toggle');

  if (!isIntermediateOnly && !isNoDifficulty) {
    if (beginnerBtn) beginnerBtn.onclick = () => setView('beginner');
    if (intermediateBtn) intermediateBtn.onclick = () => setView('intermediate');
  }
};
