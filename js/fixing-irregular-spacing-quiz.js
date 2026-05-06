/**
 * CTRL All — Fixing Irregular Spacing Quiz
 * Plain vanilla JavaScript. No frameworks, no build step.
 *
 * HOW TO USE ON A PAGE:
 *   1. Add `quiz: fixing-irregular-spacing-quiz` to the page's frontmatter
 *   2. Add <div id="ctrl-quiz"></div> in the page body
 *
 * DIFFICULTY LEVELS:
 *   Beginner     — core concepts from the article
 *   Intermediate — wildcards, Find and Replace details
 */


// ─── 1. QUESTION BANK ────────────────────────────────────────────────────────

const QUESTIONS = [

  {
    question:   "What is the quickest tool to fix irregular line spacing in text?",
    answer:     "Format Painter",
    difficulty: "Beginner",
    hint:       "It copies formatting from one place and applies it to another",
    options: [
      "Find & Replace",
      "Format Painter",
      "Clear Formatting",
      "Styles"
    ]
  },

  {
    question:   "What <em>Find and Replace</em> wildcard code means 'any whitespace'?",
    answer:     "^w",
    difficulty: "Beginner",
    hint:       "It covers regular spaces, irregular spaces, non-breaking spaces and tabs",
    options: [
      "^s",
      "^t",
      "^w",
      "^p"
    ]
  },

  {
    question:   "What do you put in the <em>Replace with</em> field when fixing irregular spacing between words?",
    answer:     "A single space",
    difficulty: "Beginner",
    hint:       "You're replacing any whitespace with one consistent character",
    options: [
      "^w",
      "^p",
      "Nothing — leave it blank",
      "A single space"
    ]
  },

  {
    question:   "What wildcard code finds two or more consecutive paragraph marks?",
    answer:     "^13{2,}",
    difficulty: "Beginner",
    hint:       "^13 means paragraph mark, and the second part means two or more",
    options: [
      "^p{2,}",
      "^13{2,}",
      "^l{2,}",
      "^13^13"
    ]
  },

  {
    question:   "Why can't you use ^p in the <em>Find what</em> field when removing multiple blank lines?",
    answer:     "Word doesn't allow ^p in the <em>Find what</em> field — it only works in Replace with",
    difficulty: "Beginner",
    hint:       "It's a quirk of how Word handles wildcard searches",
    options: [
      "^p only works when wildcards are turned off",
      "^p means something different in Find what",
      "Word doesn't allow ^p in the <em>Find what</em> field — it only works in Replace with",
      "^p can only be used in the <em>Replace with</em> field for soft returns"
    ]
  },

  {
    question:   "What option must you enable in Find and Replace when using the ^13{2,} wildcard?",
    answer:     "Use wildcards",
    difficulty: "Intermediate",
    hint:       "It's found by clicking the More button bottom left",
    options: [
      "Match case",
      "Use wildcards",
      "Find all word forms",
      "Match prefix"
    ]
  },

  {
    question:   "What wildcard code represents a soft return in Find and Replace?",
    answer:     "^l",
    difficulty: "Intermediate",
    hint:       "A soft return is created with Shift + Enter",
    options: [
      "^s",
      "^p",
      "^n",
      "^l"
    ]
  },

  {
    question:   "What is the risk of blindly replacing all unspaced hyphens with spaced hyphens?",
    answer:     "It will break hyphenated compound words like long-term or mother-in-law",
    difficulty: "Intermediate",
    hint:       "Word can't tell the difference between two types of hyphen use",
    options: [
      "It will remove all hyphens from the document entirely",
      "It will break hyphenated compound words like long-term or mother-in-law",
      "It will convert hyphens to en dashes",
      "Find and Replace won't recognise hyphens as a valid search term"
    ]
  },

  {
    question:   "What is the wildcard code for an en dash in Find and Replace?",
    answer:     "^=",
    difficulty: "Intermediate",
    hint:       "The en dash sits between a hyphen and an em dash in length",
    options: [
      "^-",
      "^+",
      "^=",
      "^~"
    ]
  },

  {
    question:   "What does \\1 mean in the <em>Replace with</em> field?",
    answer:     "Whatever was captured in the parentheses in the <em>Find what</em> field",
    difficulty: "Intermediate",
    hint:       "It refers back to a grouped part of the search pattern",
    options: [
      "The first word in the document",
      "A literal backslash followed by the number 1",
      "Whatever was captured in the parentheses in the <em>Find what</em> field",
      "The first character of the matched text"
    ]
  },

];

const QUIZ_LENGTH = 6;


// ─── 2. HELPER FUNCTIONS ─────────────────────────────────────────────────────

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function buildQuestionSet(difficulty) {
  let pool = QUESTIONS;
  if (difficulty !== "All") pool = pool.filter(q => q.difficulty === difficulty);
  const length = Math.min(QUIZ_LENGTH, pool.length);
  return shuffle(pool).slice(0, length).map(q => ({
    ...q,
    shuffledOptions: shuffle(q.options)
  }));
}

function previewCount(difficulty) {
  let pool = QUESTIONS;
  if (difficulty !== "All") pool = pool.filter(q => q.difficulty === difficulty);
  return Math.min(QUIZ_LENGTH, pool.length);
}


// ─── 3. STATE ────────────────────────────────────────────────────────────────

let questions  = [];
let current    = 0;
let score      = 0;
let answers    = [];
let difficulty = "Intermediate";


// ─── 4. RENDER FUNCTIONS ─────────────────────────────────────────────────────

function getContainer() {
  return document.getElementById("ctrl-quiz");
}

function renderStart(showResults) {
  const container = getContainer();

  let resultsHTML = "";
  if (showResults) {
    const total   = questions.length;
    const pct     = Math.round((score / total) * 100);
    const message = pct === 100 ? "Perfect! 🎉" : pct >= 70 ? "Great work!" : "Keep practising!";

    const rows = answers.map((a, i) => `
      <div class="caq-review-row ${a.correct ? "caq-correct" : "caq-wrong"}">
        <span class="caq-review-icon">${a.correct ? "✓" : "✗"}</span>
        <span class="caq-review-label">
          ${a.correct ? a.actual : `<s>${a.chosen}</s> → ${a.actual}`}
        </span>
      </div>
    `).join("");

    const quizUrl    = "https://ctrlall.org/word/fixing-irregular-spacing/";
    const displayMsg = `I got ${pct}% on the Fixing Irregular Spacing quiz — how well do you know Word?`;
    const shareText  = `${displayMsg} ${quizUrl}`;
    const encoded    = encodeURIComponent(shareText);
    const urlOnly    = encodeURIComponent(quizUrl);
    const titleOnly  = encodeURIComponent("Fixing Irregular Spacing Quiz – CTRL All");

    const shareLinks = [
      { label: "LinkedIn", img: "/assets/images/topbar/linkedin.png", color: "#2867B2", url: `https://www.linkedin.com/sharing/share-offsite/?url=${urlOnly}` },
      { label: "Facebook", img: "/assets/images/topbar/facebook.png", color: "#0266FF", url: `https://www.facebook.com/sharer/sharer.php?u=${urlOnly}&quote=${encoded}` },
      { label: "Bluesky",  img: "/assets/images/topbar/bluesky.png",  color: "#B3DDFF", url: `https://bsky.app/intent/compose?text=${encoded}` },
      { label: "Threads",  img: "/assets/images/topbar/threads.png",  color: "#000",    url: `https://www.threads.net/intent/post?text=${encoded}` },
      { label: "Reddit",   img: "/assets/images/topbar/reddit.png",   color: "#FF4500", url: `https://www.reddit.com/submit?url=${urlOnly}&title=${titleOnly}` },
      { label: "Email",    img: null,                                  color: "#2c3e50", url: `mailto:?subject=${titleOnly}&body=${encoded}` }
    ];

    const shareButtons = shareLinks.map(s => `
      <a href="${s.url}" ${s.label !== "Email" ? 'target="_blank" rel="noopener noreferrer"' : ""}
         class="caq-share-btn" style="background:${s.color}" aria-label="Share on ${s.label}">
        ${s.img
          ? `<img src="${s.img}" alt="${s.label}" class="caq-share-logo">`
          : `<span class="caq-share-envelope">✉</span>`
        }
      </a>
    `).join("");

    resultsHTML = `
      <div class="caq-results">
        <div class="caq-score-circle ${pct >= 70 ? "caq-pass" : "caq-fail"}">${score}/${total}</div>
        <div class="caq-score-label"><strong>${pct}%</strong> — ${message}</div>
        <div class="caq-share-wrap">
          <div class="caq-share-label">Share your score</div>
          <div class="caq-share-text">${displayMsg}</div>
          <div class="caq-share-buttons">${shareButtons}</div>
        </div>
        <div class="caq-review">${rows}</div>
      </div>
    `;
  }

  const count       = previewCount(difficulty);
  const previewText = `${count} question${count !== 1 ? "s" : ""} available`;

  container.innerHTML = `
    <div class="caq-panel">
      <div class="caq-header">
        <img src="/assets/images/Ctrl-All-logo-og.png" alt="Ctrl All" class="caq-logo">
        <h2 class="caq-title">Fixing Irregular Spacing Quiz</h2>
        <p class="caq-subtitle">Test your understanding of spacing fixes in Word</p>
      </div>

      ${resultsHTML}

      <div class="caq-preview">${previewText}</div>

      <button class="caq-start-btn" id="caq-start" ${count === 0 ? "disabled" : ""}>
        ${showResults ? "Try Again" : "Start Quiz"} →
      </button>
    </div>
  `;

  container.querySelector("#caq-start").addEventListener("click", startQuiz);
}

function renderQuestion() {
  const container = getContainer();
  const q         = questions[current];
  const letters   = ["A", "B", "C", "D"];

  const dots = Array.from({ length: questions.length }).map((_, i) => {
    if (i < answers.length) {
      return `<span class="caq-dot ${answers[i].correct ? "caq-dot-correct" : "caq-dot-wrong"}"></span>`;
    }
    return `<span class="caq-dot caq-dot-empty"></span>`;
  }).join("");

  const optionButtons = q.shuffledOptions.map((opt, i) => `
    <button class="caq-option" data-answer="${opt}">
      <span class="caq-option-letter">${letters[i]}</span>
      ${opt}
    </button>
  `).join("");

  container.innerHTML = `
    <div class="caq-panel">
      <div class="caq-progress-bar-wrap">
        <div class="caq-progress-bar" style="width: ${(current / questions.length) * 100}%"></div>
      </div>
      <div class="caq-meta">
        <span class="caq-counter">${current + 1} / ${questions.length}</span>
        <div class="caq-meta-right">
          <span class="caq-diff-badge caq-diff-badge--${q.difficulty.toLowerCase()}">${q.difficulty}</span>
          <span class="caq-category-tag caq-cat-word">Word</span>
        </div>
      </div>
      <p class="caq-question-text">${q.question}</p>
      <div class="caq-hint-wrap">
        <button class="caq-hint-btn" id="caq-hint-btn">Show hint</button>
        <span class="caq-hint-text" id="caq-hint-text" hidden>💡 ${q.hint}</span>
      </div>
      <div class="caq-options">${optionButtons}</div>
      <div class="caq-dots">${dots}</div>
    </div>
  `;

  container.querySelector("#caq-hint-btn").addEventListener("click", () => {
    container.querySelector("#caq-hint-btn").hidden = true;
    container.querySelector("#caq-hint-text").hidden = false;
  });
  container.querySelectorAll(".caq-option").forEach(btn => {
    btn.addEventListener("click", () => handleAnswer(btn.dataset.answer));
  });
}

function handleAnswer(chosen) {
  const q       = questions[current];
  const correct = chosen === q.answer;

  answers.push({ correct, chosen, actual: q.answer });
  if (correct) score++;

  const container = getContainer();
  container.querySelectorAll(".caq-option").forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.answer === q.answer)               btn.classList.add("caq-option-correct");
    else if (btn.dataset.answer === chosen && !correct) btn.classList.add("caq-option-wrong");
    else                                                btn.classList.add("caq-option-dim");
  });

  const nextBtn       = document.createElement("button");
  nextBtn.className   = "caq-next-btn";
  nextBtn.textContent = current + 1 >= questions.length ? "See Results →" : "Next Question →";
  nextBtn.addEventListener("click", () => {
    current++;
    current >= questions.length ? renderStart(true) : renderQuestion();
  });
  container.querySelector(".caq-panel").appendChild(nextBtn);
}


// ─── 5. QUIZ FLOW ─────────────────────────────────────────────────────────────

function startQuiz() {
  questions = buildQuestionSet(difficulty);
  current   = 0;
  score     = 0;
  answers   = [];
  renderQuestion();
}


// ─── 6. STYLES ───────────────────────────────────────────────────────────────

function injectStyles() {
  const style = document.createElement("style");
  style.textContent = `
    #ctrl-quiz { font-family: 'Inter', sans-serif; max-width: 540px; margin: 2rem auto; }
    .caq-panel { background: #fff; border: 1px solid #e0d9f5; border-radius: 14px; padding: 28px; box-shadow: 0 2px 20px rgba(107,79,187,0.08); }

    .caq-header { text-align: center; margin-bottom: 24px; }
    .caq-logo { height: 48px; width: auto; margin-bottom: 10px; }
    .caq-title { font-size: 22px; color: #1A1035; margin: 0 0 6px; }
    .caq-subtitle { color: #6B5FA0; font-size: 14px; margin: 0; }

    .caq-selector-label { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #9B8EC4; margin-bottom: 8px; }

    .caq-diffs { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px; }
    .caq-diff-btn { padding: 8px 20px; border-radius: 8px; border: 2px solid #e0d9f5; background: #fff; color: #5A4A8A; font-size: 14px; cursor: pointer; transition: all 0.15s; }
    .caq-diff-active--beginner     { background: #2d6a4f; border-color: #2d6a4f; color: #fff; font-weight: 700; }
    .caq-diff-active--intermediate { background: #2C3E50; border-color: #2C3E50; color: #fff; font-weight: 700; }

    .caq-preview { font-size: 13px; color: #9B8EC4; margin-bottom: 16px; min-height: 20px; }
    .caq-warn { color: #C43E1C; }

    .caq-start-btn, .caq-next-btn { width: 100%; padding: 13px; border-radius: 10px; border: none; background: #452c50; color: #fff; font-size: 15px; font-weight: 700; cursor: pointer; margin-top: 16px; transition: background 0.15s; }
    .caq-start-btn:hover:not(:disabled), .caq-next-btn:hover { background: #654175; }
    .caq-start-btn:disabled { background: #c4b8e8; cursor: not-allowed; }

    .caq-progress-bar-wrap { height: 4px; background: #ede9fa; border-radius: 4px; margin-bottom: 16px; }
    .caq-progress-bar { height: 4px; background: #452c50; border-radius: 4px; transition: width 0.3s; }

    .caq-meta { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
    .caq-meta-right { display: flex; align-items: center; gap: 6px; }
    .caq-counter { font-size: 13px; color: #9B8EC4; }

    .caq-category-tag { font-size: 11px; padding: 3px 10px; border-radius: 20px; color: #fff; letter-spacing: 1px; }
    .caq-cat-word { background: #0078d4; }

    .caq-diff-badge { font-size: 11px; padding: 3px 10px; border-radius: 20px; letter-spacing: 1px; }
    .caq-diff-badge--beginner     { background: #d4f4dd; color: #2d6a4f; }
    .caq-diff-badge--intermediate { background: #e0e7ff; color: #2C3E50; }

    .caq-question-text { font-size: 17px; font-weight: 600; color: #1A1035; text-align: center; margin: 0 0 16px; line-height: 1.4; }

    .caq-hint-wrap { text-align: center; margin-bottom: 20px; min-height: 28px; }
    .caq-hint-btn { background: none; border: 1px dashed #c4b8e8; border-radius: 6px; color: #9B8EC4; padding: 5px 14px; font-size: 13px; cursor: pointer; }
    .caq-hint-text { color: #6B4FBB; font-size: 14px; font-style: italic; }

    .caq-options { display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; }
    .caq-option { display: flex; align-items: center; gap: 10px; padding: 12px 14px; border-radius: 9px; border: 2px solid #e0d9f5; background: #f8f6ff; color: #2D1B69; font-size: 14px; text-align: left; cursor: pointer; transition: border-color 0.15s, background 0.15s; }
    .caq-option:hover:not(:disabled) { border-color: #6B4FBB; }
    .caq-option-letter { width: 24px; height: 24px; border-radius: 50%; background: #e0d9f5; color: #9B8EC4; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; flex-shrink: 0; }
    .caq-option-correct { background: #f0faf4 !important; border-color: #1E7145 !important; color: #1E7145 !important; }
    .caq-option-correct .caq-option-letter { background: #1E7145; color: #fff; }
    .caq-option-wrong   { background: #fff5f5 !important; border-color: #C43E1C !important; color: #C43E1C !important; }
    .caq-option-wrong .caq-option-letter   { background: #C43E1C; color: #fff; }
    .caq-option-dim { opacity: 0.4; }

    .caq-dots { display: flex; justify-content: center; gap: 6px; margin-top: 16px; }
    .caq-dot  { width: 8px; height: 8px; border-radius: 50%; }
    .caq-dot-correct { background: #1E7145; }
    .caq-dot-wrong   { background: #C43E1C; }
    .caq-dot-empty   { background: #e0d9f5; }

    .caq-results { margin-bottom: 24px; }
    .caq-score-circle { width: 60px; height: 60px; border-radius: 50%; border: 3px solid; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 700; margin: 0 auto 10px; }
    .caq-pass { background: #f0faf4; border-color: #1E7145; color: #1E7145; }
    .caq-fail { background: #fff5f5; border-color: #C43E1C; color: #C43E1C; }
    .caq-score-label { text-align: center; color: #1A1035; margin-bottom: 16px; }

    .caq-review { display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px; }
    .caq-review-row { display: flex; align-items: center; gap: 10px; padding: 8px 12px; border-radius: 8px; border: 1px solid; font-size: 13px; }
    .caq-review-row.caq-correct { background: #f0faf4; border-color: #c8e6c9; }
    .caq-review-row.caq-wrong   { background: #fff5f5; border-color: #ffcdd2; }
    .caq-review-icon { font-size: 15px; flex-shrink: 0; }
    .caq-review-label { color: #333; }
    .caq-review-row.caq-wrong .caq-review-label { color: #C43E1C; }
    .caq-review-row.caq-wrong s { color: #aaa; }

    .caq-share-wrap { margin-bottom: 20px; }
    .caq-share-label { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #9B8EC4; margin-bottom: 8px; }
    .caq-share-text { font-size: 14px; color: #2c3e50; font-style: italic; margin-bottom: 12px; line-height: 1.4; }
    .caq-share-buttons { display: flex; flex-wrap: wrap; gap: 8px; }
    .caq-share-btn { display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 8px; text-decoration: none; transition: opacity 0.15s, transform 0.1s; }
    .caq-share-btn:hover { opacity: 0.85; transform: translateY(-2px); }
    .caq-share-logo { width: 22px; height: 22px; object-fit: contain; display: block; margin: 0; }
    .caq-share-envelope { font-size: 18px; color: #fff; line-height: 1; }
  `;
  document.head.appendChild(style);
}


// ─── 7. INITIALISE ───────────────────────────────────────────────────────────

function init() {
  const container = document.getElementById("ctrl-quiz");
  if (!container) return;
  injectStyles();
  renderStart(false);
}

document.addEventListener("DOMContentLoaded", init);
