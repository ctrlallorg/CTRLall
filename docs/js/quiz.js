/**
 * CTRL All — Keyboard Shortcut Quiz
 * Plain vanilla JavaScript. No frameworks, no build step.
 *
 * HOW TO USE ON A PAGE:
 *   1. Add `quiz: true` to the page's frontmatter
 *   2. Add <div id="ctrl-quiz"></div> in the page body
 *
 * HOW IT WORKS:
 *   Finds the #ctrl-quiz div, builds the HTML inside it, then manages
 *   all interactivity (selecting difficulty + category, answering,
 *   scoring, moving to the next question, showing results).
 *
 * DIFFICULTY LEVELS:
 *   Beginner     — shortcuts everyone needs in their first week
 *   Intermediate — less obvious, more powerful shortcuts
 */


// ─── 1. QUESTION BANK ────────────────────────────────────────────────────────
// Each question has:
//   shortcut   — the key combination shown to the user
//   answer     — the correct answer text
//   category   — "Word" | "Excel" | "PowerPoint" | "Windows"
//   difficulty — "Beginner" | "Intermediate"
//   hint       — optional clue the user can reveal

const QUESTIONS = [

  // ── Windows ── Beginner ──────────────────────────────────────────────────
  { shortcut: "Windows + D",                answer: "Show Desktop",     category: "Windows", difficulty: "Beginner",     hint: "Minimise all windows at once" },
  { shortcut: "Windows + L",                answer: "Lock Screen",      category: "Windows", difficulty: "Beginner",     hint: "Stop others using your PC" },
  { shortcut: "Windows + Up Arrow",          answer: "Maximise Window",  category: "Windows", difficulty: "Beginner",     hint: "Make the window fill the screen" },
  { shortcut: "Windows + Left/Right Arrow",  answer: "Snap Window",      category: "Windows", difficulty: "Beginner",     hint: "Pin a window to one side" },

  // ── Word ── Beginner ─────────────────────────────────────────────────────
  { shortcut: "Ctrl + S",  answer: "Save",           category: "Word", difficulty: "Beginner", hint: "Store your work" },
  { shortcut: "Ctrl + N",  answer: "New Document",   category: "Word", difficulty: "Beginner", hint: "Start from scratch" },
  { shortcut: "Ctrl + O",  answer: "Open File",      category: "Word", difficulty: "Beginner", hint: "Load an existing document" },
  { shortcut: "Ctrl + W",  answer: "Close Document", category: "Word", difficulty: "Beginner", hint: "Close this file but keep Word open" },
  { shortcut: "Ctrl + P",  answer: "Print",          category: "Word", difficulty: "Beginner", hint: "Send to printer" },
  { shortcut: "Ctrl + Z",  answer: "Undo",           category: "Word", difficulty: "Beginner", hint: "Go back one step" },
  { shortcut: "Ctrl + Y",  answer: "Redo",           category: "Word", difficulty: "Beginner", hint: "Go forward one step" },
  { shortcut: "Ctrl + X",  answer: "Cut",            category: "Word", difficulty: "Beginner", hint: "Remove to clipboard" },
  { shortcut: "Ctrl + C",  answer: "Copy",           category: "Word", difficulty: "Beginner", hint: "Duplicate to clipboard" },
  { shortcut: "Ctrl + V",  answer: "Paste",          category: "Word", difficulty: "Beginner", hint: "Place from clipboard" },
  { shortcut: "Ctrl + A",  answer: "Select All",     category: "Word", difficulty: "Beginner", hint: "Highlight everything" },
  { shortcut: "Ctrl + B",  answer: "Bold",           category: "Word", difficulty: "Beginner", hint: "Make text heavier" },
  { shortcut: "Ctrl + I",  answer: "Italic",         category: "Word", difficulty: "Beginner", hint: "Slant the text" },
  { shortcut: "Ctrl + U",  answer: "Underline",      category: "Word", difficulty: "Beginner", hint: "Add a line below text" },

  // ── Word ── Intermediate ─────────────────────────────────────────────────
  { shortcut: "Ctrl + F",         answer: "Find",               category: "Word", difficulty: "Intermediate", hint: "Search in document" },
  { shortcut: "Ctrl + H",         answer: "Find & Replace",     category: "Word", difficulty: "Intermediate", hint: "Search and swap text" },
  { shortcut: "Ctrl + L",         answer: "Left Align",         category: "Word", difficulty: "Intermediate", hint: "Push text to the left" },
  { shortcut: "Ctrl + E",         answer: "Centre Align",       category: "Word", difficulty: "Intermediate", hint: "Centre the text" },
  { shortcut: "Ctrl + R",         answer: "Right Align",        category: "Word", difficulty: "Intermediate", hint: "Push text to the right" },
  { shortcut: "Ctrl + Enter",     answer: "Page Break",         category: "Word", difficulty: "Intermediate", hint: "Force a new page" },
  { shortcut: "Ctrl + K",         answer: "Insert Hyperlink",   category: "Word", difficulty: "Intermediate", hint: "Add a clickable link" },
  { shortcut: "Ctrl + + (plus)",  answer: "Zoom In",            category: "Word", difficulty: "Intermediate", hint: "Make content appear larger" },
  { shortcut: "Ctrl + - (minus)", answer: "Zoom Out",           category: "Word", difficulty: "Intermediate", hint: "Make content appear smaller" },
  { shortcut: "Ctrl + 0",         answer: "Reset Zoom to 100%", category: "Word", difficulty: "Intermediate", hint: "Return to default zoom" },

  // ── Excel ── Beginner ────────────────────────────────────────────────────
  { shortcut: "Ctrl + S",  answer: "Save",             category: "Excel", difficulty: "Beginner", hint: "Store your workbook" },
  { shortcut: "Ctrl + N",  answer: "New Workbook",     category: "Excel", difficulty: "Beginner", hint: "Start from scratch" },
  { shortcut: "Ctrl + O",  answer: "Open File",        category: "Excel", difficulty: "Beginner", hint: "Load an existing workbook" },
  { shortcut: "Ctrl + W",  answer: "Close Workbook",   category: "Excel", difficulty: "Beginner", hint: "Close this file but keep Excel open" },
  { shortcut: "Ctrl + P",  answer: "Print",            category: "Excel", difficulty: "Beginner", hint: "Send to printer" },
  { shortcut: "Ctrl + Z",  answer: "Undo",             category: "Excel", difficulty: "Beginner", hint: "Go back one step" },
  { shortcut: "Ctrl + Y",  answer: "Redo",             category: "Excel", difficulty: "Beginner", hint: "Go forward one step" },
  { shortcut: "Ctrl + X",  answer: "Cut",              category: "Excel", difficulty: "Beginner", hint: "Remove to clipboard" },
  { shortcut: "Ctrl + C",  answer: "Copy",             category: "Excel", difficulty: "Beginner", hint: "Duplicate to clipboard" },
  { shortcut: "Ctrl + V",  answer: "Paste",            category: "Excel", difficulty: "Beginner", hint: "Place from clipboard" },
  { shortcut: "Ctrl + A",  answer: "Select All Cells", category: "Excel", difficulty: "Beginner", hint: "Highlight everything" },

  // ── Excel ── Intermediate ────────────────────────────────────────────────
  { shortcut: "Ctrl + F",         answer: "Find",                 category: "Excel", difficulty: "Intermediate", hint: "Search for a value" },
  { shortcut: "Ctrl + H",         answer: "Find & Replace",       category: "Excel", difficulty: "Intermediate", hint: "Search and swap values" },
  { shortcut: "Ctrl + E",         answer: "Flash Fill",           category: "Excel", difficulty: "Intermediate", hint: "Auto-fill a pattern" },
  { shortcut: "Ctrl + Home",      answer: "Go to Cell A1",        category: "Excel", difficulty: "Intermediate", hint: "Jump to the beginning" },
  { shortcut: "Ctrl + End",       answer: "Go to Last Used Cell", category: "Excel", difficulty: "Intermediate", hint: "Jump to the last data" },
  { shortcut: "F2",               answer: "Edit Cell",            category: "Excel", difficulty: "Intermediate", hint: "Enter edit mode in a cell" },
  { shortcut: "Ctrl + Shift + L", answer: "Toggle Filters",       category: "Excel", difficulty: "Intermediate", hint: "Turn on/off dropdown filters" },
  { shortcut: "Alt + =",          answer: "AutoSum",              category: "Excel", difficulty: "Intermediate", hint: "Sum selected cells" },
  { shortcut: "Ctrl + + (plus)",  answer: "Zoom In",              category: "Excel", difficulty: "Intermediate", hint: "Make content appear larger" },
  { shortcut: "Ctrl + - (minus)", answer: "Zoom Out",             category: "Excel", difficulty: "Intermediate", hint: "Make content appear smaller" },

  // ── PowerPoint ── Beginner ───────────────────────────────────────────────
  { shortcut: "Ctrl + S",  answer: "Save",                category: "PowerPoint", difficulty: "Beginner", hint: "Store your presentation" },
  { shortcut: "Ctrl + N",  answer: "New Presentation",    category: "PowerPoint", difficulty: "Beginner", hint: "Start from scratch" },
  { shortcut: "Ctrl + O",  answer: "Open File",           category: "PowerPoint", difficulty: "Beginner", hint: "Load an existing presentation" },
  { shortcut: "Ctrl + P",  answer: "Print",               category: "PowerPoint", difficulty: "Beginner", hint: "Send to printer" },
  { shortcut: "Ctrl + Z",  answer: "Undo",                category: "PowerPoint", difficulty: "Beginner", hint: "Go back one step" },
  { shortcut: "Ctrl + C",  answer: "Copy",                category: "PowerPoint", difficulty: "Beginner", hint: "Duplicate to clipboard" },
  { shortcut: "Ctrl + V",  answer: "Paste",               category: "PowerPoint", difficulty: "Beginner", hint: "Place from clipboard" },
  { shortcut: "Ctrl + M",  answer: "New Slide",           category: "PowerPoint", difficulty: "Beginner", hint: "Add another slide" },
  { shortcut: "F5",         answer: "Start Slideshow",    category: "PowerPoint", difficulty: "Beginner", hint: "Begin the presentation" },

  // ── PowerPoint ── Intermediate ───────────────────────────────────────────
  { shortcut: "Shift + F5", answer: "Slideshow from Current Slide", category: "PowerPoint", difficulty: "Intermediate", hint: "Present from this slide onwards" },
  { shortcut: "Ctrl + D",   answer: "Duplicate Slide",              category: "PowerPoint", difficulty: "Intermediate", hint: "Copy the current slide" },
  { shortcut: "Ctrl + K",   answer: "Insert Hyperlink",             category: "PowerPoint", difficulty: "Intermediate", hint: "Add a clickable link" },
  { shortcut: "Ctrl + B",   answer: "Bold",                         category: "PowerPoint", difficulty: "Intermediate", hint: "Make text heavier" },
  { shortcut: "Ctrl + I",   answer: "Italic",                       category: "PowerPoint", difficulty: "Intermediate", hint: "Slant the text" },
  { shortcut: "Ctrl + U",   answer: "Underline",                    category: "PowerPoint", difficulty: "Intermediate", hint: "Add a line below text" },

];

const QUIZ_LENGTH = 8; // Maximum questions per round


// ─── 2. HELPER FUNCTIONS ─────────────────────────────────────────────────────

// Returns a new array in random order (doesn't change the original)
function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

// Picks 3 wrong answers + the correct one, then shuffles them.
// Falls back to full question bank if pool is too small for 4 options.
function buildOptions(correctQuestion, pool) {
  const source = pool.length >= 4 ? pool : QUESTIONS;
  const wrongOnes = source.filter(q => q.answer !== correctQuestion.answer);
  const threeWrong = shuffle(wrongOnes).slice(0, 3);
  return shuffle([correctQuestion, ...threeWrong]);
}

// Filters by category and difficulty, then picks up to QUIZ_LENGTH questions.
// "All" means no filter on that dimension.
function buildQuestionSet(category, difficulty) {
  let pool = QUESTIONS;
  if (category !== "All")   pool = pool.filter(q => q.category === category);
  if (difficulty !== "All") pool = pool.filter(q => q.difficulty === difficulty);

  const length = Math.min(QUIZ_LENGTH, pool.length);
  return shuffle(pool).slice(0, length).map(q => ({
    ...q,
    options: buildOptions(q, pool)
  }));
}

// Returns how many questions match the current selection (for preview)
function previewCount(category, difficulty) {
  let pool = QUESTIONS;
  if (category !== "All")   pool = pool.filter(q => q.category === category);
  if (difficulty !== "All") pool = pool.filter(q => q.difficulty === difficulty);
  return Math.min(QUIZ_LENGTH, pool.length);
}


// ─── 3. STATE ────────────────────────────────────────────────────────────────

let questions  = [];
let current    = 0;
let score      = 0;
let answers    = [];
let category   = "All";
let difficulty = "Beginner";


// ─── 4. RENDER FUNCTIONS ─────────────────────────────────────────────────────

function getContainer() {
  return document.getElementById("ctrl-quiz");
}

// START SCREEN — shown before quiz begins and after it ends
function renderStart(showResults) {
  const container = getContainer();

  // Results section (only after a completed quiz)
  let resultsHTML = "";
  if (showResults) {
    const total   = questions.length;
    const pct     = Math.round((score / total) * 100);
    const message = pct === 100 ? "Perfect! 🎉" : pct >= 70 ? "Great work!" : "Keep practising!";

    const rows = answers.map((a, i) => `
      <div class="caq-review-row ${a.correct ? "caq-correct" : "caq-wrong"}">
        <span class="caq-review-icon">${a.correct ? "✓" : "✗"}</span>
        <code class="caq-kbd">${questions[i].shortcut}</code>
        <span class="caq-review-label">
          ${a.correct ? a.actual : `<s>${a.chosen}</s> → ${a.actual}`}
        </span>
      </div>
    `).join("");

    resultsHTML = `
      <div class="caq-results">
        <div class="caq-score-circle ${pct >= 70 ? "caq-pass" : "caq-fail"}">${score}/${total}</div>
        <div class="caq-score-label"><strong>${pct}%</strong> — ${message}</div>
        <div class="caq-review">${rows}</div>
      </div>
    `;
  }

  // Difficulty buttons
  const difficulties = ["Beginner", "Intermediate"];
  const diffButtons = difficulties.map(d => `
    <button class="caq-diff-btn ${d === difficulty ? "caq-diff-active caq-diff-active--" + d.toLowerCase() : ""}"
            data-diff="${d}">${d}</button>
  `).join("");

  // Category buttons
  const cats = ["All", "Windows", "Word", "Excel", "PowerPoint"];
  const catButtons = cats.map(cat => `
    <button class="caq-cat-btn ${cat === category ? "caq-cat-active" : ""}"
            data-cat="${cat}">${cat}</button>
  `).join("");

  // Question count preview
  const count       = previewCount(category, difficulty);
  const previewText = count > 0
    ? `${count} question${count !== 1 ? "s" : ""} available`
    : `<span class="caq-warn">No questions match — try a different combination</span>`;

  container.innerHTML = `
    <div class="caq-panel">
      <div class="caq-header">
        <img src="/assets/images/Ctrl-All-logo-og.png" alt="Ctrl All" class="caq-logo">
        <h2 class="caq-title">Keyboard Shortcut Quiz</h2>
        <p class="caq-subtitle">How well do you know your shortcuts?</p>
      </div>

      ${resultsHTML}

      <div class="caq-selector-label">Difficulty</div>
      <div class="caq-diffs">${diffButtons}</div>

      <div class="caq-selector-label">Program</div>
      <div class="caq-cats">${catButtons}</div>

      <div class="caq-preview">${previewText}</div>

      <button class="caq-start-btn" id="caq-start" ${count === 0 ? "disabled" : ""}>
        ${showResults ? "Try Again" : "Start Quiz"} →
      </button>
    </div>
  `;

  // Difficulty handlers
  container.querySelectorAll(".caq-diff-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      difficulty = btn.dataset.diff;
      renderStart(showResults);
    });
  });

  // Category handlers
  container.querySelectorAll(".caq-cat-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      category = btn.dataset.cat;
      renderStart(showResults);
    });
  });

  container.querySelector("#caq-start").addEventListener("click", startQuiz);
}


// QUESTION SCREEN
function renderQuestion() {
  const container = getContainer();
  const q         = questions[current];
  const letters   = ["A", "B", "C", "D"];

  // Progress dots
  const dots = Array.from({ length: questions.length }).map((_, i) => {
    if (i < answers.length) {
      return `<span class="caq-dot ${answers[i].correct ? "caq-dot-correct" : "caq-dot-wrong"}"></span>`;
    }
    return `<span class="caq-dot caq-dot-empty"></span>`;
  }).join("");

  // Answer buttons
  const optionButtons = q.options.map((opt, i) => `
    <button class="caq-option" data-answer="${opt.answer}">
      <span class="caq-option-letter">${letters[i]}</span>
      ${opt.answer}
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
          <span class="caq-category-tag caq-cat-${q.category.toLowerCase()}">${q.category}</span>
        </div>
      </div>

      <p class="caq-question-label">What does this shortcut do?</p>
      <div class="caq-shortcut">${q.shortcut}</div>

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


// Called when user selects an answer
function handleAnswer(chosen) {
  const q       = questions[current];
  const correct = chosen === q.answer;

  answers.push({ correct, chosen, actual: q.answer });
  if (correct) score++;

  const container = getContainer();
  container.querySelectorAll(".caq-option").forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.answer === q.answer)              btn.classList.add("caq-option-correct");
    else if (btn.dataset.answer === chosen && !correct) btn.classList.add("caq-option-wrong");
    else                                               btn.classList.add("caq-option-dim");
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
  questions = buildQuestionSet(category, difficulty);
  current   = 0;
  score     = 0;
  answers   = [];
  renderQuestion();
}


// ─── 6. STYLES ───────────────────────────────────────────────────────────────

function injectStyles() {
  const style = document.createElement("style");
  style.textContent = `
    #ctrl-quiz {
      font-family: 'Inter', sans-serif;
      max-width: 540px;
      margin: 2rem auto;
    }
    .caq-panel {
      background: #fff;
      border: 1px solid #e0d9f5;
      border-radius: 14px;
      padding: 28px;
      box-shadow: 0 2px 20px rgba(107,79,187,0.08);
    }

    /* Header */
    .caq-header { text-align: center; margin-bottom: 24px; }
    .caq-logo { height: 48px; width: auto; margin-bottom: 10px; }
    .caq-title { font-size: 22px; color: #1A1035; margin: 0 0 6px; }
    .caq-subtitle { color: #6B5FA0; font-size: 14px; margin: 0; }

    /* Selector labels */
    .caq-selector-label {
      font-size: 11px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #9B8EC4;
      margin-bottom: 8px;
    }

    /* Difficulty buttons */
    .caq-diffs { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px; }
    .caq-diff-btn {
      padding: 8px 20px;
      border-radius: 8px;
      border: 2px solid #e0d9f5;
      background: #fff;
      color: #5A4A8A;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.15s;
    }
    .caq-diff-active--beginner     { background: #2d6a4f; border-color: #2d6a4f; color: #fff; font-weight: 700; }
    .caq-diff-active--intermediate { background: #2D1B69; border-color: #2D1B69; color: #fff; font-weight: 700; }

    /* Category buttons */
    .caq-cats { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px; }
    .caq-cat-btn {
      padding: 8px 16px;
      border-radius: 8px;
      border: 2px solid #e0d9f5;
      background: #5A4A8A;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.15s;
    }
    .caq-cat-active { background: #6B5FA0; border-color: #6B5FA0 color: #fff; font-weight: 700; }

    /* Preview count */
    .caq-preview { font-size: 13px; color: #9B8EC4; margin-bottom: 16px; min-height: 20px; }
    .caq-warn { color: #C43E1C; }

    /* Start / Next buttons */
    .caq-start-btn, .caq-next-btn {
      width: 100%;
      padding: 13px;
      border-radius: 10px;
      border: none;
      background: #452C50;
      color: #fff;
      font-size: 15px;
      font-weight: 700;
      cursor: pointer;
      margin-top: 16px;
      transition: background 0.15s;
    }
    .caq-start-btn:hover:not(:disabled), .caq-next-btn:hover { background: #654175; }
    .caq-start-btn:disabled { background: #c4b8e8; cursor: not-allowed; }

    /* Progress bar */
    .caq-progress-bar-wrap { height: 4px; background: #ede9fa; border-radius: 4px; margin-bottom: 16px; }
    .caq-progress-bar { height: 4px; background: #452C50; border-radius: 4px; transition: width 0.3s; }

    /* Meta row */
    .caq-meta { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
    .caq-meta-right { display: flex; align-items: center; gap: 6px; }
    .caq-counter { font-size: 13px; color: #9B8EC4; }

    /* Category tags */
    .caq-category-tag { font-size: 11px; padding: 3px 10px; border-radius: 20px; color: #fff; letter-spacing: 1px; }
    .caq-cat-windows    { background: #0078d4; }
    .caq-cat-word       { background: #6B4FBB; }
    .caq-cat-excel      { background: #1E7145; }
    .caq-cat-powerpoint { background: #C43E1C; }
    .caq-cat-all        { background: #2D2D2D; }

    /* Difficulty badge (shown during question) */
    .caq-diff-badge { font-size: 11px; padding: 3px 10px; border-radius: 20px; letter-spacing: 1px; }
    .caq-diff-badge--beginner     { background: #d4f4dd; color: #2d6a4f; }
    .caq-diff-badge--intermediate { background: #e0e7ff; color: #2D1B69; }

    /* Shortcut display */
    .caq-question-label {
      text-align: center; font-size: 13px; color: #9B8EC4;
      letter-spacing: 1px; text-transform: uppercase; margin-bottom: 10px;
    }
    .caq-shortcut {
      text-align: center;
      background: #1A1035;
      color: #E8E0FF;
      font-family: 'Courier New', monospace;
      font-size: 22px;
      font-weight: 700;
      padding: 8px 12px;
      border-radius: 10px;
      letter-spacing: 2px;
      margin-bottom: 8px;
      box-shadow: 0 4px 0 #0D0820;
    }

    /* Hint */
    .caq-hint-wrap { text-align: center; margin-bottom: 20px; min-height: 28px; }
    .caq-hint-btn {
      background: none; border: 1px dashed #c4b8e8; border-radius: 6px;
      color: #9B8EC4; padding: 5px 14px; font-size: 13px; cursor: pointer;
    }
    .caq-hint-text { color: #6B4FBB; font-size: 14px; font-style: italic; }

    /* Answer options */
    .caq-options { display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; }
    .caq-option {
      display: flex; align-items: center; gap: 10px;
      padding: 12px 14px; border-radius: 9px;
      border: 2px solid #e0d9f5; background: #f8f6ff;
      color: #2D1B69; font-size: 14px; text-align: left;
      cursor: pointer; transition: border-color 0.15s, background 0.15s;
    }
    .caq-option:hover:not(:disabled) { border-color: #6B4FBB; }
    .caq-option-letter {
      width: 24px; height: 24px; border-radius: 50%;
      background: #e0d9f5; color: #9B8EC4;
      display: flex; align-items: center; justify-content: center;
      font-size: 12px; font-weight: 700; flex-shrink: 0;
    }
    .caq-option-correct { background: #f0faf4 !important; border-color: #1E7145 !important; color: #1E7145 !important; }
    .caq-option-correct .caq-option-letter { background: #1E7145; color: #fff; }
    .caq-option-wrong   { background: #fff5f5 !important; border-color: #C43E1C !important; color: #C43E1C !important; }
    .caq-option-wrong .caq-option-letter   { background: #C43E1C; color: #fff; }
    .caq-option-dim { opacity: 0.4; }

    /* Progress dots */
    .caq-dots { display: flex; justify-content: center; gap: 6px; margin-top: 16px; }
    .caq-dot  { width: 8px; height: 8px; border-radius: 50%; }
    .caq-dot-correct { background: #1E7145; }
    .caq-dot-wrong   { background: #C43E1C; }
    .caq-dot-empty   { background: #e0d9f5; }

    /* Results */
    .caq-results { margin-bottom: 24px; }
    .caq-score-circle {
      width: 60px; height: 60px; border-radius: 50%; border: 3px solid;
      display: flex; align-items: center; justify-content: center;
      font-size: 16px; font-weight: 700; margin: 0 auto 10px;
    }
    .caq-pass { background: #f0faf4; border-color: #1E7145; color: #1E7145; }
    .caq-fail { background: #fff5f5; border-color: #C43E1C; color: #C43E1C; }
    .caq-score-label { text-align: center; color: #1A1035; margin-bottom: 16px; }

    /* Review rows */
    .caq-review { display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px; }
    .caq-review-row {
      display: flex; align-items: center; gap: 10px;
      padding: 8px 12px; border-radius: 8px; border: 1px solid; font-size: 13px;
    }
    .caq-review-row.caq-correct { background: #f0faf4; border-color: #c8e6c9; }
    .caq-review-row.caq-wrong   { background: #fff5f5; border-color: #ffcdd2; }
    .caq-review-icon { font-size: 15px; flex-shrink: 0; }
    .caq-kbd {
      background: #ede9fa; color: #2D1B69; padding: 2px 6px;
      border-radius: 4px; font-family: 'Courier New', monospace;
      font-size: 12px; flex-shrink: 0;
    }
    .caq-review-label { color: #333; }
    .caq-review-row.caq-wrong .caq-review-label { color: #C43E1C; }
    .caq-review-row.caq-wrong s { color: #aaa; }
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
