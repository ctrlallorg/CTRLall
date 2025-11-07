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
    dropbtn.addEventListener("click", (e) => {
      e.preventDefault();
      const isVisible = dropdown.style.display === "block";
      dropdown.style.display = isVisible ? "none" : "flex";
      dropdown.style.position = "fixed";
      dropdown.style.top = "60px";
      dropdown.style.left = "50%";
      dropdown.style.transform = "translateX(-50%)";
      dropdown.style.flexDirection = "row";
      dropdown.style.gap = "12px";
      dropdown.style.alignItems = "center";
      dropdown.style.animation = isVisible ? "" : "fadeIn 0.2s ease-out";
    });

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

  // ─── Footer Fade-In on Scroll ───────────────
  const footer = document.querySelector(".site-footer");
  window.addEventListener("scroll", () => {
    const scrollBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
    footer.style.opacity = scrollBottom ? "1" : "0";
  });

  // ─── GIF Tooltip on Table Row Hover ─────────
  const tooltip = document.getElementById("gif-tooltip");
  const tooltipImg = tooltip?.querySelector("img");

  if (tooltip && tooltipImg) {
    document.querySelectorAll(".tooltip-row").forEach((row) => {
      row.addEventListener("mouseenter", () => {
        const gifSrc = row.getAttribute("data-gif");
        tooltipImg.src = gifSrc;
        tooltip.style.display = "block";
      });

      row.addEventListener("mousemove", (e) => {
        tooltip.style.left = e.pageX + 15 + "px";
        tooltip.style.top = e.pageY + 15 + "px";
      });

      row.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
        tooltipImg.src = "";
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


  // ─── Mobile Orientation Overlay ─────────────
  function checkOrientation() {
    const overlay = document.getElementById("portrait-overlay");
    if (overlay) {
      overlay.style.display = window.innerHeight > window.innerWidth ? "flex" : "none";
    }
  }

  window.addEventListener("resize", checkOrientation);
  window.addEventListener("load", checkOrientation);

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

  document.querySelectorAll('.glossary-hover').forEach(el => {
    const term = el.dataset.term;

    el.addEventListener('mouseenter', () => {
      isHoveringTerm = true;

      const row = glossaryTable.querySelector(`td[id="${term}"]`);
      const definitionCell = row?.nextElementSibling;

      if (row && definitionCell) {
        tooltip.innerHTML = definitionCell.innerHTML;

        // Patch glossary links inside tooltip
        tooltip.querySelectorAll('a[href^="#"]').forEach(link => {
          const hash = link.getAttribute('href');
          link.setAttribute('href', `/glossary/${hash}`);
          link.setAttribute('target', '_blank');
          link.setAttribute('rel', 'noopener noreferrer');
        });

        const rect = el.getBoundingClientRect();
        tooltip.style.top = `${rect.bottom + window.scrollY}px`;
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        tooltip.hidden = false;
      }
    });

    el.addEventListener('mouseleave', () => {
      isHoveringTerm = false;
      setTimeout(() => {
        if (!isHoveringTerm && !isHoveringTooltip) {
          tooltip.hidden = true;
        }
      }, 150);
    });
  });

  tooltip.addEventListener('mouseenter', () => {
    isHoveringTooltip = true;
  });

  tooltip.addEventListener('mouseleave', () => {
    isHoveringTooltip = false;
    setTimeout(() => {
      if (!isHoveringTerm && !isHoveringTooltip) {
        tooltip.hidden = true;
      }
    }, 150);
  });
});

 // ─── Locale Toggle + Spelling Variant Swap ─────────────────────────────
(async function () {
  const dictionary = await fetch("/assets/spellingVariants.json").then(res => res.json());

  let saved = localStorage.getItem("locale");

  // ─── Auto-reset if saved value is invalid ────────────────────────────
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
    "en": "gb" // fallback for generic English
  };

  const browserLocale = localeMap[lang] || "gb";
  const region = saved || browserLocale;

  console.log("Detected browser language:", lang);
  console.log("Resolved region:", region);

  const toggle = document.getElementById("locale-toggle");
  if (toggle) {
    toggle.checked = region === "gb";

    toggle.addEventListener("change", () => {
      const newLocale = toggle.checked ? "gb" : "us";
      localStorage.setItem("locale", newLocale);
      location.reload();
    });
  }

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (!node.nodeValue || node.parentNode.closest(".us-only")) continue;

    const swapped = node.nodeValue.replace(/\b(\w+)\b/g, (word) => {
      const entry = dictionary[word.toLowerCase()];
      if (!entry || !entry[region]) return word;

      const replacement = entry[region];
      if (word === word.toUpperCase()) return replacement.toUpperCase();
      if (word[0] === word[0].toUpperCase()) return replacement[0].toUpperCase() + replacement.slice(1);
      return replacement;
    });

    if (swapped !== node.nodeValue) {
      node.nodeValue = swapped;
    }
  }
})();

  // ─── Search Bar Logic ─────────────────────────────

console.log("Main.js loaded");

const searchInput = document.getElementById('searchInput');
const suggestionsList = document.getElementById('suggestions');
let activeIndex = -1;
let currentResults = [];

// ─── Fetch and Filter Suggestions ─────────────────
async function fetchSuggestions(query) {
  try {
    const response = await fetch('/search-index.json');
    if (!response.ok) throw new Error("Failed to load search index");

    const items = await response.json();
    const lowerQuery = query.toLowerCase();

    return items.filter(item => {
      const inTitle = item.title.toLowerCase().includes(lowerQuery);
      const inDesc = item.description.toLowerCase().includes(lowerQuery);
      const inTags = item.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
      return inTitle || inDesc || inTags;
    });
  } catch (error) {
    console.error("Search error:", error);
    return [];
  }
}

// ─── Highlight Matched Terms ──────────────────────
function highlightMatch(text, query) {
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

// ─── Render Suggestions ───────────────────────────
function renderSuggestions(results, query) {
  suggestionsList.innerHTML = '';
  activeIndex = -1;
  currentResults = results;

  results.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = highlightMatch(item.title, query);
    li.setAttribute('data-index', index);
    li.classList.add('suggestion-item');
    li.onclick = () => window.location.href = item.permalink;
    suggestionsList.appendChild(li);
  });
}

// ─── Handle Input with Debounce ───────────────────
let debounceTimer;
searchInput.addEventListener('input', () => {
  clearTimeout(debounceTimer);
  const query = searchInput.value.trim();
  if (query.length === 0) {
    suggestionsList.innerHTML = '';
    return;
  }

  debounceTimer = setTimeout(async () => {
    const results = await fetchSuggestions(query);
    renderSuggestions(results, query);
  }, 200);
});

// ─── Keyboard Navigation ──────────────────────────
searchInput.addEventListener('keydown', (e) => {
  const items = suggestionsList.querySelectorAll('.suggestion-item');
  if (items.length === 0) return;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    activeIndex = (activeIndex + 1) % items.length;
    updateActiveItem(items);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    activeIndex = (activeIndex - 1 + items.length) % items.length;
    updateActiveItem(items);
  } else if (e.key === 'Enter' && activeIndex >= 0) {
    e.preventDefault();
    items[activeIndex].click();
  }
});

function updateActiveItem(items) {
  items.forEach(item => item.classList.remove('active'));
  items[activeIndex].classList.add('active');
  items[activeIndex].scrollIntoView({ block: 'nearest' });
}
