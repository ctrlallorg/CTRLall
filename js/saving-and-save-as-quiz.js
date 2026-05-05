/**
 * CTRL All — Saving and Save As Quiz
 * Plain vanilla JavaScript. No frameworks, no build step.
 *
 * HOW TO USE ON A PAGE:
 *   1. Add `quiz: saving-and-save-as-quiz` to the page's frontmatter
 *   2. Add <div id="ctrl-quiz"></div> in the page body
 *
 * DIFFICULTY LEVELS:
 *   Beginner     — core concepts covered in the article
 *   Intermediate — advanced saving options and settings
 */


// ─── 1. QUESTION BANK ────────────────────────────────────────────────────────

const QUESTIONS = [

  // ── Beginner ─────────────────────────────────────────────────────────────

  {
    question:   "What does saving a document do?",
    answer:     "Keeps your changes so they are there next time you open the file",
    difficulty: "Beginner",
    hint:       "Think about what happens if you don't save",
    options: [
      "Sends the document to your printer",
      "Keeps your changes so they are there next time you open the file",
      "Creates a copy of the document in a new folder",
      "Closes the document and opens a new one"
    ]
  },

  {
    question:   "What keyboard shortcut saves a document in Word?",
    answer:     "Ctrl + S",
    difficulty: "Beginner",
    hint:       "S is for save",
    options: [
      "Ctrl + A",
      "Ctrl + P",
      "Ctrl + S",
      "Ctrl + Z"
    ]
  },

  {
    question:   "What does Save As allow you to do that regular Save doesn't?",
    answer:     "Save the file with a new name, location, or file type",
    difficulty: "Beginner",
    hint:       "Think about the extra choices Save As gives you",
    options: [
      "Save the file faster",
      "Save the file with a new name, location, or file type",
      "Save the file to a USB drive only",
      "Save a backup copy automatically every few seconds"
    ]
  },

  {
    question:   "What does Autosave do?",
    answer:     "Automatically saves your edits every few seconds so you don't have to manually save",
    difficulty: "Beginner",
    hint:       "It takes the effort of saving out of your hands",
    options: [
      "Saves a copy of your document to your desktop every hour",
      "Automatically saves your edits every few seconds so you don't have to manually save",
      "Creates a new version of your document each time you save",
      "Saves your document as a PDF automatically"
    ]
  },

  {
    question:   "Where does Autosave store your files?",
    answer:     "OneDrive or SharePoint",
    difficulty: "Beginner",
    hint:       "These are Microsoft's cloud storage services",
    options: [
      "Your desktop",
      "Your Documents folder",
      "OneDrive or SharePoint",
      "A USB drive"
    ]
  },

  // ── Intermediate ──────────────────────────────────────────────────────────

  {
    question:   "When using Save As to change file type, should you choose the file type before or after selecting the location — and why?",
    answer:     "Before — Word can divert to a different default folder for some file types",
    difficulty: "Intermediate",
    hint:       "The order matters because Word may change the folder on you",
    options: [
      "After — the location should always be decided first",
      "Before — Word can divert to a different default folder for some file types",
      "It doesn't matter — Word always saves to the same folder regardless",
      "After — the file type determines which locations are available"
    ]
  },

  {
    question:   "Where in Word do you go to change the default save location?",
    answer:     "File > Options > Save",
    difficulty: "Intermediate",
    hint:       "It's tucked away in Word's settings",
    options: [
      "File > Save As > Settings",
      "File > Options > Save",
      "View > Options > Save",
      "File > Info > Save Options"
    ]
  },

  {
    question:   "Where in Word Options do you find the default save location settings?",
    answer:     "The Save section in the left menu",
    difficulty: "Intermediate",
    hint:       "Look at the left-hand menu in Word Options",
    options: [
      "The General section in the left menu",
      "The Advanced section in the left menu",
      "The Save section in the left menu",
      "The Trust Center section in the left menu"
    ]
  },

  {
    question:   "What are the two default folder locations you can set in Word's Save Options?",
    answer:     "Word documents and Word templates",
    difficulty: "Intermediate",
    hint:       "They correspond to the two main Word file types",
    options: [
      "OneDrive and SharePoint",
      "Word documents and PDFs",
      "Word documents and Word templates",
      "Local files and network files"
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
let difficulty = "Beginner";


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

    const quizUrl    = "https://ctrlall.org/word/saving-and-save-as/";
    const displayMsg = `I got ${pct}% on the Saving and Save As quiz — how well do you know Word?`;
    const shareText  = `${displayMsg} ${quizUrl}`;
    const encoded    = encodeURIComponent(shareText);
    const urlOnly    = encodeURIComponent(quizUrl);
    const titleOnly  = encodeURIComponent("Saving and Save As Quiz – CTRL All");

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

  const difficulties = ["Beginner", "Intermediate"];
  const diffButtons  = difficulties.map(d => `
    <button class="caq-diff-btn ${d === difficulty ? "caq-diff-active caq-diff-active--" + d.toLowerCase() : ""}"
            data-diff="${d}">${d}</button>
  `).join("");

  const count       = previewCount(difficulty);
  const previewText = count > 0
    ? `${count} question${count !== 1 ? "s" : ""} available`
    : `<span class="caq-warn">No questions match — try a different combination</span>`;

  container.innerHTML = `
    <div class="caq-panel">
      <div class="caq-header">
        <img src="/assets/images/Ctrl-All-logo-og.png" alt="Ctrl All" class="caq-logo">
        <h2 class="caq-title">Saving and Save As Quiz</h2>
        <p class="caq-subtitle">Test your understanding of saving in Word</p>
      </div>

      ${resultsHTML}

      <div class="caq-selector-label">Difficulty</div>
      <div class="caq-diffs">${diffButtons}</div>

      <div class="caq-preview">${previewText}</div>

      <button class="caq-start-btn" id="caq-start" ${count === 0 ? "disabled" : ""}>
        ${showResults ? "Try Again" : "Start Quiz"} →
      </button>
    </div>
  `;

  container.querySelectorAll(".caq-diff-btn").forEach(btn => {
    btn.addEventListener("click", () => { difficulty = btn.dataset.diff; renderStart(showResults); });
  });
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
    .caq-diff-badge--intermediate { background: #e0e7ff; color: #2D1B69; }

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
