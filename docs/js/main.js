/* CTRL All glossary logic v1.0
   Added Tooltip functionality
   Asset fingerprint: glossary-core | owner: Steve Williams | origin: ctrlall.com */

// ─────────────────────────────────────────────────────────────
// Difficulty system: beginner / intermediate toggle
// Defined outside DOMContentLoaded so it's available globally,
// but only *called* once the DOM is ready.
// ─────────────────────────────────────────────────────────────

function setView(view, isIntermediateOnlyArg = false, isNoDifficultyArg = false) {
  let effectiveView = view;

  if (isIntermediateOnlyArg) {
    effectiveView = "intermediate";
  }

  if (!isIntermediateOnlyArg && !isNoDifficultyArg) {
    localStorage.setItem("preferredView", effectiveView);
  }

  const beginners = document.querySelectorAll(".beginner-version");
  const intermediates = document.querySelectorAll(".intermediate-version");

  beginners.forEach(el => el.classList.add("difficulty"));
  intermediates.forEach(el => el.classList.add("difficulty"));

  beginners.forEach(el => {
    const showBeg = effectiveView === "beginner";
    el.style.display = showBeg ? "block" : "none";
    el.classList.toggle("visible", showBeg);
  });

  intermediates.forEach(el => {
    const showInt = effectiveView === "intermediate";
    el.style.display = showInt ? "block" : "none";
    el.classList.toggle("visible", showInt);
  });

  // ─── Update badge ──────────────────────────────
  const badge = document.getElementById("article-badge");
  if (badge) {
    if (isNoDifficultyArg) {
      badge.className = "article-badge disabled";
      badge.textContent = "ℹ️ No Difficulty Toggle";
    } else if (isIntermediateOnlyArg) {
      badge.className = "article-badge intermediate-only";
      badge.textContent = "⚡ Intermediate Only";
    } else {
      badge.className = "article-badge " + effectiveView;
      badge.textContent =
        effectiveView === "beginner"
          ? "⭐ Beginner Level"
          : "⚡ Intermediate Level";
    }
  }

  // ─── Update toggle buttons ─────────────────────
  const beginnerBtn = document.getElementById("beginner-toggle");
  const intermediateBtn = document.getElementById("intermediate-toggle");

  if (beginnerBtn && intermediateBtn) {
    if (isNoDifficultyArg) {
      beginnerBtn.classList.remove("active");
      intermediateBtn.classList.remove("active");
      beginnerBtn.disabled = true;
      intermediateBtn.disabled = true;
      beginnerBtn.title = "Difficulty toggle not available on this page";
      intermediateBtn.title = "Difficulty toggle not available on this page";
    } else {
      beginnerBtn.disabled = false;
      intermediateBtn.disabled = false;
      beginnerBtn.removeAttribute("title");
      intermediateBtn.removeAttribute("title");

      beginnerBtn.classList.toggle("active", effectiveView === "beginner");
      intermediateBtn.classList.toggle("active", effectiveView === "intermediate");

      if (isIntermediateOnlyArg) {
        beginnerBtn.disabled = true;
        beginnerBtn.title = "This page is Intermediate level only";
      }
    }
  }

  // ─── Update nav labels ─────────────────────────
  if (!isNoDifficultyArg) {
    document.querySelectorAll("a[data-beginner]").forEach((link) => {
      link.textContent =
        effectiveView === "beginner"
          ? link.dataset.beginner
          : link.dataset.intermediate;
    });
  }
}

function cleanDifficultyParam() {
  if (window.location.search.includes("difficulty")) {
    window.history.replaceState({}, "", window.location.pathname);
  }
}

// ─────────────────────────────────────────────────────────────
// Search bar logic — initialised after locale swap completes
// ─────────────────────────────────────────────────────────────

window.initSearch = function () {
  console.log("🔍 Search initialized");

  const searchInput = document.getElementById("searchInput");
  const suggestionsList = document.getElementById("suggestions");
  if (!searchInput || !suggestionsList) return;

  let activeIndex = -1;
  let currentResults = [];

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function highlightMatch(text, query) {
    const regex = new RegExp(`(${escapeRegExp(query)})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  }

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
      li.innerHTML = highlightMatch(item.title || "Untitled", query);
      li.classList.add("suggestion-item");
      li.setAttribute("data-index", index);

      const destination = item.permalink || item.url || "/";
      li.onclick = () => { window.location.href = destination; };

      suggestionsList.appendChild(li);
    });

    suggestionsList.style.display = "block";
  }

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

  function updateActiveItem(items) {
    items.forEach((item) => item.classList.remove("active"));
    items[activeIndex].classList.add("active");
    items[activeIndex].scrollIntoView({ block: "nearest" });
  }

  document.addEventListener("click", (event) => {
    if (!searchInput.contains(event.target) && !suggestionsList.contains(event.target)) {
      suggestionsList.innerHTML = "";
      suggestionsList.style.display = "none";
    }
  });
};

// ─────────────────────────────────────────────────────────────
// Main DOMContentLoaded block
// ─────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {

  // ─── Topbar Menu Toggle ──────────────────────
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
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

  // ─── Copy Page Link ──────────────────────────
  window.copyPageLink = function () {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        const tooltip = document.getElementById("copy-tooltip");
        if (tooltip) {
          tooltip.style.visibility = "visible";
          setTimeout(() => { tooltip.style.visibility = "hidden"; }, 1500);
        }
      })
      .catch(err => console.error("Copy failed:", err));
  };

  window.emailCurrentPage = function (event) {
    event.preventDefault();
    const subject = "Check this out";
    const body = window.location.href;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // ─── Share Dropdown Behavior ─────────────────
  const dropbtn = document.querySelector(".dropbtn");
  const dropdown = document.getElementById("share-dropdown");

  if (dropbtn && dropdown) {
    dropbtn.addEventListener("click", (e) => {
      e.preventDefault();
      const isVisible = dropdown.style.display === "flex";
      dropdown.style.display = isVisible ? "none" : "flex";
      dropdown.style.animation = isVisible ? "" : "fadeInDown 0.2s ease-out";
    });

    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target) && !dropbtn.contains(e.target)) {
        dropdown.style.display = "none";
        dropdown.style.animation = "";
      }
    });
  }

  // ─── Sidebar Nested Toggle ───────────────────
  document.querySelectorAll(".nav-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const submenu = button.nextElementSibling;
      const isNowOpen = submenu.classList.toggle("show");
      button.classList.toggle("expanded", isNowOpen);
      button.setAttribute("aria-expanded", isNowOpen);
    });
  });

  // ─── Sidebar Collapse Toggle ─────────────────
  const toggleBtn = document.getElementById("navbar-toggle");
  const sidebarWrapper = document.querySelector(".sidebar-wrapper");

  if (toggleBtn && sidebarWrapper) {

    // Two separate flags:
    // "sidebarCollapsed"    — set by the user manually toggling the sidebar button (persists)
    // "sidebarNavCollapsed" — set when a nav link is clicked on mobile (one-shot, clears on load)
    const wasManuallyCollapsed = localStorage.getItem("sidebarCollapsed") === "true";
    const wasNavCollapsed = sessionStorage.getItem("sidebarNavCollapsed") === "true";
    const wasCollapsed = wasManuallyCollapsed || wasNavCollapsed;

    // Clear the nav-click flag immediately — it's only needed for this one page load
    sessionStorage.removeItem("sidebarNavCollapsed");

    sidebarWrapper.classList.toggle("collapsed", wasCollapsed);
    toggleBtn.setAttribute("aria-expanded", !wasCollapsed);

    // Manual toggle button — persists across pages
    toggleBtn.addEventListener("click", () => {
      const isCollapsed = sidebarWrapper.classList.toggle("collapsed");
      toggleBtn.setAttribute("aria-expanded", !isCollapsed);
      localStorage.setItem("sidebarCollapsed", isCollapsed);
    });

    // ─── Collapse Sidebar on Link Click (Mobile) ──
    // Uses sessionStorage + a separate key so it doesn't permanently
    // override the user's manual collapsed/expanded preference.
    document.querySelectorAll(".sidebar-wrapper a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 1024) {
          sidebarWrapper.classList.add("collapsed");
          toggleBtn.setAttribute("aria-expanded", "false");
          sessionStorage.setItem("sidebarNavCollapsed", "true");
        }
      });
    });

    // ─── Collapse Sidebar on Outside Click (Mobile) ──
    document.addEventListener("click", (event) => {
      if (window.innerWidth <= 1024) {
        if (!sidebarWrapper.contains(event.target) && !toggleBtn.contains(event.target)) {
          sidebarWrapper.classList.add("collapsed");
          toggleBtn.setAttribute("aria-expanded", "false");
          sessionStorage.setItem("sidebarNavCollapsed", "true");
        }
      }
    });
  }

  // ─── Footer Fade-In on Scroll ────────────────
  const footer = document.querySelector(".site-footer");
  if (footer) {
    window.addEventListener("scroll", () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      footer.style.opacity = scrollPosition >= pageHeight - 50 ? "1" : "0";
    });
  }

  // ─── Tooltip on Table Row Hover ──────────────
  const tooltip = document.getElementById("tooltip");
  const tooltipImg = tooltip?.querySelector("img");

  if (tooltip && tooltipImg) {
    document.querySelectorAll(".tooltip-row").forEach((row) => {
      row.addEventListener("mouseenter", () => {
        const gifSrc = row.getAttribute("data-gif");
        if (gifSrc) tooltipImg.src = gifSrc;

        const gifStyle = row.getAttribute("data-gif-style");
        if (gifStyle) {
          tooltipImg.setAttribute("style", gifStyle);
        } else {
          tooltipImg.removeAttribute("style");
        }

        tooltip.classList.add("visible");
      });

      row.addEventListener("mousemove", (e) => {
        let left = e.pageX + 15;
        let top = e.pageY + 15;

        const tooltipWidth = tooltip.offsetWidth;
        const tooltipHeight = tooltip.offsetHeight;

        if (left + tooltipWidth > window.innerWidth) left = e.pageX - tooltipWidth - 15;
        if (top + tooltipHeight > window.innerHeight) top = e.pageY - tooltipHeight - 15;
        if (left < 10) left = 10;
        if (top < 10) top = 10;

        tooltip.style.left = left + "px";
        tooltip.style.top = top + "px";
      });

      row.addEventListener("mouseleave", () => {
        tooltip.classList.remove("visible");
        tooltipImg.src = "";
        tooltipImg.removeAttribute("style");
      });
    });
  }

  // ─── Keyboard Shortcut Page: Alt Text Injection ──
  if (window.location.pathname.includes("/content-control/keyboard-shortcuts")) {
    const gifTooltip = document.getElementById("gif-tooltip");
    const gifTooltipImg = gifTooltip?.querySelector("img");

    if (gifTooltip && gifTooltipImg) {
      document.querySelectorAll(".tooltip-row").forEach((row) => {
        row.addEventListener("mouseenter", () => {
          const gifSrc = row.getAttribute("data-gif");
          const shortcut = row.querySelector("td:nth-child(1)")?.textContent.trim();
          const description = row.querySelector("td:nth-child(2)")?.textContent.trim();

          gifTooltipImg.src = gifSrc;
          gifTooltipImg.alt = `${shortcut} shortcut: ${description}`;
          gifTooltip.style.display = "block";
        });

        row.addEventListener("mousemove", (e) => {
          gifTooltip.style.left = e.pageX + 15 + "px";
          gifTooltip.style.top = e.pageY + 15 + "px";
        });

        row.addEventListener("mouseleave", () => {
          gifTooltip.style.display = "none";
          gifTooltipImg.src = "";
          gifTooltipImg.alt = "";
        });
      });
    }
  }

  // ─── Device Detection ────────────────────────
  function isMobileOrTablet() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  // ─── Mobile Overlay ──────────────────────────
  function toggleMobileOverlay() {
    const overlay = document.getElementById("mobileOverlay");
    if (!overlay) return;
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;
    overlay.style.display = (isMobileOrTablet() && isPortrait) ? "flex" : "none";
  }

  window.addEventListener("load", toggleMobileOverlay);
  window.addEventListener("resize", toggleMobileOverlay);
  window.addEventListener("orientationchange", toggleMobileOverlay);

  // ─── Portrait Mode Warning ───────────────────
  function checkOrientation() {
    const warning = document.getElementById("portrait-warning");
    if (!warning) return;
    warning.style.display = window.matchMedia("(orientation: portrait)").matches ? "flex" : "none";
  }

  window.addEventListener("resize", checkOrientation);
  window.addEventListener("orientationchange", checkOrientation);
  checkOrientation();

  // ─── Modal Image Preview ─────────────────────
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");

  if (modal && modalImg) {
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
  }

  // ─── Contact Form Subject Line ────────────────
  const category = document.getElementById("category");
  const subjectLine = document.getElementById("subjectLine");

  if (category && subjectLine) {
    category.addEventListener("change", () => {
      const selected = category.value;
      subjectLine.value = selected && selected !== "#" ? `Inquiry from ${selected}` : "New Inquiry";
    });
  }

  // ─── Contact Form Submission ──────────────────
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
          headers: { Accept: "application/json" }
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

  // ─────────────────────────────────────────────────────────────
  // Difficulty system — runs inside DOMContentLoaded so
  // document.body and all badge/toggle elements are guaranteed
  // to exist when setView() is called.
  // ─────────────────────────────────────────────────────────────

  // URL override — store preference from query param
  (function () {
    const params = new URLSearchParams(window.location.search);
    const urlDifficulty = params.get("difficulty");
    if (urlDifficulty === "beginner" || urlDifficulty === "intermediate") {
      localStorage.setItem("preferredView", urlDifficulty);
    }
  })();

  const isIntermediateOnly = document.body.dataset.intermediateOnly === "true";
  const isNoDifficulty = document.body.dataset.noDifficulty === "true";
  const savedView = localStorage.getItem("preferredView") || "beginner";
  const initialView = isIntermediateOnly ? "intermediate" : savedView;

  setView(initialView, isIntermediateOnly, isNoDifficulty);

  document.getElementById("beginner-toggle")?.addEventListener("click", () => {
    setView("beginner", isIntermediateOnly, isNoDifficulty);
    cleanDifficultyParam();
  });

  document.getElementById("intermediate-toggle")?.addEventListener("click", () => {
    setView("intermediate", isIntermediateOnly, isNoDifficulty);
    cleanDifficultyParam();
  });

  // ─────────────────────────────────────────────────────────────
  // Glossary hover tooltip
  // ─────────────────────────────────────────────────────────────

  (async () => {
    const glossaryTooltip = document.getElementById("glossary-tooltip");
    if (!glossaryTooltip) return;

    let glossaryTable = null;

    try {
      const response = await fetch("/glossary");
      const text = await response.text();
      const parser = new DOMParser();
      const glossaryDoc = parser.parseFromString(text, "text/html");
      const glossaryTemplate = glossaryDoc.getElementById("tooltip-glossary");
      glossaryTable = glossaryTemplate?.content.querySelector("table") || null;
    } catch (e) {
      console.warn("Could not load glossary for tooltips:", e);
      return;
    }

    if (!glossaryTable) return;

    let isHoveringTerm = false;
    let isHoveringTooltip = false;

    function showGlossaryTooltip(content, rect) {
      glossaryTooltip.innerHTML = content;

      glossaryTooltip.querySelectorAll("a[href^=\"#\"]").forEach(link => {
        const hash = link.getAttribute("href");
        link.setAttribute("href", `/glossary/${hash}`);
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      });

      glossaryTooltip.style.display = "block";

      const tooltipWidth = glossaryTooltip.offsetWidth;
      let top = rect.bottom + window.scrollY;
      let left = rect.left + window.scrollX;

      if (left + tooltipWidth > window.innerWidth) {
        left = rect.right + window.scrollX - tooltipWidth;
        if (left < 10) left = 10;
      }

      glossaryTooltip.style.top = `${top}px`;
      glossaryTooltip.style.left = `${left}px`;
    }

    function hideGlossaryTooltip() {
      glossaryTooltip.style.display = "none";
    }

    document.querySelectorAll(".glossary-hover").forEach(el => {
      const term = el.dataset.term;

      el.addEventListener("mouseenter", () => {
        isHoveringTerm = true;
        const row = glossaryTable.querySelector(`td[id="${term}"]`);
        const definitionCell = row?.nextElementSibling;
        if (row && definitionCell) {
          showGlossaryTooltip(definitionCell.innerHTML, el.getBoundingClientRect());
        }
      });

      el.addEventListener("mouseleave", () => {
        isHoveringTerm = false;
        setTimeout(() => {
          if (!isHoveringTerm && !isHoveringTooltip) hideGlossaryTooltip();
        }, 150);
      });
    });

    glossaryTooltip.addEventListener("mouseenter", () => { isHoveringTooltip = true; });
    glossaryTooltip.addEventListener("mouseleave", () => {
      isHoveringTooltip = false;
      setTimeout(() => {
        if (!isHoveringTerm && !isHoveringTooltip) hideGlossaryTooltip();
      }, 150);
    });

    document.addEventListener("click", (event) => {
      if (!event.target.closest(".glossary-hover") && !glossaryTooltip.contains(event.target)) {
        hideGlossaryTooltip();
      }
    });
  })();

  // ─────────────────────────────────────────────────────────────
  // Locale toggle + spelling variant swap
  // ─────────────────────────────────────────────────────────────

  (async () => {
    let dictionary = {};

    try {
      const res = await fetch("/assets/spellingVariants.json");
      if (!res.ok) throw new Error(`Failed to load dictionary: ${res.status} ${res.statusText}`);
      dictionary = await res.json();
      console.log("✅ Dictionary loaded from /assets:", Object.keys(dictionary).slice(0, 10));
    } catch (error) {
      console.warn("⚠️ Fetch failed. Using fallback dictionary.", error);
      dictionary = {
        "colour":     { "us": "color",     "gb": "colour" },
        "colours":    { "us": "colors",    "gb": "colours" },
        "favourite":  { "us": "favorite",  "gb": "favourite" },
        "favourites": { "us": "favorites", "gb": "favourites" },
        "honour":     { "us": "honor",     "gb": "honour" },
        "honours":    { "us": "honors",    "gb": "honours" }
      };
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
      "en":    "gb"
    };

    const browserLocale = localeMap[lang] || "gb";
    const region = saved || browserLocale;
    window.region = region;

    const toggle = document.getElementById("locale-toggle");
    if (toggle) {
      toggle.checked = region === "gb";
      toggle.addEventListener("change", () => {
        localStorage.setItem("locale", toggle.checked ? "gb" : "us");
        location.reload();
      });
    }

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
        return swappedParts.join("-");
      });

      if (swapped !== original) node.nodeValue = swapped;
    }

    // Initialise search after locale swap is complete
    if (typeof window.initSearch === "function") {
      window.initSearch();
    }
  })();

}); // end DOMContentLoaded

// ─────────────────────────────────────────────────────────────
// Carousel scroll on mouseover with edge-based speed
// (runs outside DOMContentLoaded — guards against missing els)
// ─────────────────────────────────────────────────────────────

const track     = document.querySelector(".mv-scroll");
const leftZone  = document.querySelector(".mv-hover-left");
const rightZone = document.querySelector(".mv-hover-right");
const fadeLeft  = document.querySelector(".mv-fade-left");
const fadeRight = document.querySelector(".mv-fade-right");

if (track && leftZone && rightZone && fadeLeft && fadeRight) {
  let scrollInterval = null;
  let lastMouseX = null;

  function updateFades() {
    const maxScroll = track.scrollWidth - track.clientWidth;
    fadeLeft.classList.toggle("hidden",  track.scrollLeft <= 5);
    fadeRight.classList.toggle("hidden", track.scrollLeft >= maxScroll - 5);
  }

  function startScrolling(direction, zone) {
    stopScrolling();
    scrollInterval = setInterval(() => {
      if (lastMouseX === null) return;

      const rect = zone.getBoundingClientRect();
      const distance = direction === "left"
        ? lastMouseX - rect.left
        : rect.right - lastMouseX;

      let factor = 1 - (distance / rect.width);
      factor = Math.min(1, Math.max(0, factor));

      const speed = 3 + factor * 17; // 3–20px per tick

      track.scrollBy({ left: direction === "left" ? -speed : speed, behavior: "auto" });
      updateFades();
    }, 20);
  }

  function stopScrolling() {
    clearInterval(scrollInterval);
    scrollInterval = null;
    lastMouseX = null;
  }

  leftZone.addEventListener("mouseenter", (e) => { lastMouseX = e.clientX; startScrolling("left",  leftZone);  });
  leftZone.addEventListener("mousemove",  (e) => { lastMouseX = e.clientX; });
  leftZone.addEventListener("mouseleave", stopScrolling);

  rightZone.addEventListener("mouseenter", (e) => { lastMouseX = e.clientX; startScrolling("right", rightZone); });
  rightZone.addEventListener("mousemove",  (e) => { lastMouseX = e.clientX; });
  rightZone.addEventListener("mouseleave", stopScrolling);

  track.addEventListener("scroll", updateFades);
  updateFades();
}