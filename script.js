const CATEGORIES = [
  {
    name: "Arrays & Hashing",
    problems: [
      ["Contains Duplicate", "Easy"],
      ["Valid Anagram", "Easy"],
      ["Two Sum", "Easy"],
      ["Group Anagrams", "Medium"],
      ["Top K Frequent Elements", "Medium"],
      ["Encode and Decode Strings", "Medium"],
      ["Product of Array Except Self", "Medium"],
      ["Valid Sudoku", "Medium"],
      ["Longest Consecutive Sequence", "Medium"]
    ]
  },
  {
    name: "Two Pointers",
    problems: [
      ["Valid Palindrome", "Easy"],
      ["Two Sum II Input Array Is Sorted", "Medium"],
      ["3Sum", "Medium"],
      ["Container With Most Water", "Medium"],
      ["Trapping Rain Water", "Hard"]
    ]
  },
  {
    name: "Sliding Window",
    problems: [
      ["Best Time to Buy and Sell Stock", "Easy"],
      ["Longest Substring Without Repeating Characters", "Medium"],
      ["Longest Repeating Character Replacement", "Medium"],
      ["Permutation in String", "Medium"],
      ["Minimum Window Substring", "Hard"],
      ["Sliding Window Maximum", "Hard"]
    ]
  },
  {
    name: "Stack",
    problems: [
      ["Valid Parentheses", "Easy"],
      ["Min Stack", "Medium"],
      ["Evaluate Reverse Polish Notation", "Medium"],
      ["Daily Temperatures", "Medium"],
      ["Car Fleet", "Medium"],
      ["Largest Rectangle in Histogram", "Hard"]
    ]
  },
  {
    name: "Binary Search",
    problems: [
      ["Binary Search", "Easy"],
      ["Search a 2D Matrix", "Medium"],
      ["Koko Eating Bananas", "Medium"],
      ["Find Minimum in Rotated Sorted Array", "Medium"],
      ["Search in Rotated Sorted Array", "Medium"],
      ["Time Based Key-Value Store", "Medium"],
      ["Median of Two Sorted Arrays", "Hard"]
    ]
  },
  {
    name: "Linked List",
    problems: [
      ["Reverse Linked List", "Easy"],
      ["Merge Two Sorted Lists", "Easy"],
      ["Reorder List", "Medium"],
      ["Remove Nth Node From End of List", "Medium"],
      ["Copy List with Random Pointer", "Medium"],
      ["Add Two Numbers", "Medium"],
      ["Linked List Cycle", "Easy"],
      ["Find the Duplicate Number", "Medium"],
      ["LRU Cache", "Medium"],
      ["Merge K Sorted Lists", "Hard"],
      ["Reverse Nodes in K-Group", "Hard"]
    ]
  },
  {
    name: "Trees",
    problems: [
      ["Invert Binary Tree", "Easy"],
      ["Maximum Depth of Binary Tree", "Easy"],
      ["Diameter of Binary Tree", "Easy"],
      ["Balanced Binary Tree", "Easy"],
      ["Same Tree", "Easy"],
      ["Subtree of Another Tree", "Easy"],
      ["Lowest Common Ancestor of a BST", "Medium"],
      ["Binary Tree Level Order Traversal", "Medium"],
      ["Binary Tree Right Side View", "Medium"],
      ["Count Good Nodes in Binary Tree", "Medium"],
      ["Validate Binary Search Tree", "Medium"],
      ["Kth Smallest Element in a BST", "Medium"],
      ["Construct Binary Tree from Preorder and Inorder Traversal", "Medium"],
      ["Binary Tree Maximum Path Sum", "Hard"],
      ["Serialize and Deserialize Binary Tree", "Hard"]
    ]
  },
  {
    name: "Heap / Priority Queue",
    problems: [
      ["Kth Largest Element in a Stream", "Easy"],
      ["Last Stone Weight", "Easy"],
      ["K Closest Points to Origin", "Medium"],
      ["Kth Largest Element in an Array", "Medium"],
      ["Task Scheduler", "Medium"],
      ["Design Twitter", "Medium"],
      ["Find Median from Data Stream", "Hard"]
    ]
  },
  {
    name: "Backtracking",
    problems: [
      ["Subsets", "Medium"],
      ["Combination Sum", "Medium"],
      ["Permutations", "Medium"],
      ["Subsets II", "Medium"],
      ["Combination Sum II", "Medium"],
      ["Word Search", "Medium"],
      ["Palindrome Partitioning", "Medium"],
      ["Letter Combinations of a Phone Number", "Medium"],
      ["N-Queens", "Hard"],
      ["Restore IP Addresses", "Medium"]
    ]
  },
  {
    name: "Tries",
    problems: [
      ["Implement Trie Prefix Tree", "Medium"],
      ["Design Add and Search Words Data Structure", "Medium"],
      ["Word Search II", "Hard"]
    ]
  },
  {
    name: "Graphs",
    problems: [
      ["Number of Islands", "Medium"],
      ["Clone Graph", "Medium"],
      ["Max Area of Island", "Medium"],
      ["Pacific Atlantic Water Flow", "Medium"],
      ["Surrounded Regions", "Medium"],
      ["Rotting Oranges", "Medium"],
      ["Walls and Gates", "Medium"],
      ["Course Schedule", "Medium"],
      ["Course Schedule II", "Medium"],
      ["Redundant Connection", "Medium"],
      ["Number of Connected Components in an Undirected Graph", "Medium"],
      ["Graph Valid Tree", "Medium"],
      ["Word Ladder", "Hard"]
    ]
  },
  {
    name: "Advanced Graphs",
    problems: [
      ["Reconstruct Itinerary", "Hard"],
      ["Min Cost to Connect All Points", "Medium"],
      ["Network Delay Time", "Medium"],
      ["Swim in Rising Water", "Hard"],
      ["Alien Dictionary", "Hard"],
      ["Cheapest Flights Within K Stops", "Medium"]
    ]
  },
  {
    name: "1-D Dynamic Programming",
    problems: [
      ["Climbing Stairs", "Easy"],
      ["Min Cost Climbing Stairs", "Easy"],
      ["House Robber", "Medium"],
      ["House Robber II", "Medium"],
      ["Longest Palindromic Substring", "Medium"],
      ["Palindromic Substrings", "Medium"],
      ["Decode Ways", "Medium"],
      ["Coin Change", "Medium"],
      ["Maximum Product Subarray", "Medium"],
      ["Word Break", "Medium"],
      ["Longest Increasing Subsequence", "Medium"],
      ["Partition Equal Subset Sum", "Medium"]
    ]
  },
  {
    name: "2-D Dynamic Programming",
    problems: [
      ["Unique Paths", "Medium"],
      ["Longest Common Subsequence", "Medium"],
      ["Best Time to Buy and Sell Stock with Cooldown", "Medium"],
      ["Coin Change II", "Medium"],
      ["Target Sum", "Medium"],
      ["Interleaving String", "Medium"],
      ["Longest Increasing Path in a Matrix", "Hard"],
      ["Distinct Subsequences", "Hard"],
      ["Edit Distance", "Hard"],
      ["Burst Balloons", "Hard"],
      ["Regular Expression Matching", "Hard"]
    ]
  },
  {
    name: "Greedy",
    problems: [
      ["Maximum Subarray", "Medium"],
      ["Jump Game", "Medium"],
      ["Jump Game II", "Medium"],
      ["Gas Station", "Medium"],
      ["Hand of Straights", "Medium"],
      ["Merge Triplets to Form Target Triplet", "Medium"],
      ["Partition Labels", "Medium"],
      ["Valid Parenthesis String", "Medium"]
    ]
  },
  {
    name: "Intervals",
    problems: [
      ["Insert Interval", "Medium"],
      ["Merge Intervals", "Medium"],
      ["Non Overlapping Intervals", "Medium"],
      ["Meeting Rooms", "Easy"],
      ["Meeting Rooms II", "Medium"],
      ["Minimum Interval to Include Each Query", "Hard"]
    ]
  },
  {
    name: "Math & Geometry",
    problems: [
      ["Rotate Image", "Medium"],
      ["Spiral Matrix", "Medium"],
      ["Set Matrix Zeroes", "Medium"],
      ["Happy Number", "Easy"],
      ["Plus One", "Easy"],
      ["Pow(x, n)", "Medium"],
      ["Multiply Strings", "Medium"],
      ["Detect Squares", "Medium"]
    ]
  },
  {
    name: "Bit Manipulation",
    problems: [
      ["Single Number", "Easy"],
      ["Number of 1 Bits", "Easy"],
      ["Counting Bits", "Easy"],
      ["Reverse Bits", "Easy"],
      ["Missing Number", "Easy"],
      ["Sum of Two Integers", "Medium"],
      ["Reverse Integer", "Medium"]
    ]
  }
];

const flatProblems = CATEGORIES.flatMap((category, categoryIndex) =>
  category.problems.map(([title, difficulty], problemIndex) => ({
    id: `${categoryIndex}-${problemIndex}-${slugify(title)}`,
    title,
    difficulty,
    category: category.name,
    url: `https://leetcode.com/problems/${slugify(title)}/`
  }))
);

const state = {
  activeUser: localStorage.getItem("tck_active_user") || "guest",
  records: {},
  expanded: new Set([CATEGORIES[0].name])
};

const els = {
  menuToggle: document.querySelector("#menuToggle"),
  menuClose: document.querySelector("#menuClose"),
  sideMenu: document.querySelector("#sideMenu"),
  overlay: document.querySelector("#overlay"),
  cursorGlow: document.querySelector("#cursorGlow"),
  pageButtons: document.querySelectorAll("[data-page]"),
  homePage: document.querySelector("#homePage"),
  practicePage: document.querySelector("#practicePage"),
  userName: document.querySelector("#userName"),
  switchUserBtn: document.querySelector("#switchUserBtn"),
  activeUserLabel: document.querySelector("#activeUserLabel"),
  problemList: document.querySelector("#problemList"),
  searchInput: document.querySelector("#searchInput"),
  difficultyFilter: document.querySelector("#difficultyFilter"),
  statusFilter: document.querySelector("#statusFilter"),
  expandAllBtn: document.querySelector("#expandAllBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  solvedCount: document.querySelector("#solvedCount"),
  totalCount: document.querySelector("#totalCount"),
  easySolved: document.querySelector("#easySolved"),
  easyTotal: document.querySelector("#easyTotal"),
  mediumSolved: document.querySelector("#mediumSolved"),
  mediumTotal: document.querySelector("#mediumTotal"),
  hardSolved: document.querySelector("#hardSolved"),
  hardTotal: document.querySelector("#hardTotal"),
  overallPercent: document.querySelector("#overallPercent"),
  progressRing: document.querySelector("#progressRing")
};

init();

function init() {
  els.userName.value = state.activeUser;
  loadUser(state.activeUser);
  bindEvents();
  initHomeEffects();
  render();
  setPage(location.hash.replace("#", "") || "home");
}

function bindEvents() {
  els.menuToggle.addEventListener("click", openMenu);
  els.menuClose.addEventListener("click", closeMenu);
  els.overlay.addEventListener("click", closeMenu);

  document.querySelectorAll("[data-open-menu]").forEach((button) => {
    button.addEventListener("click", openMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  document.addEventListener("mousemove", (event) => {
    if (!els.cursorGlow) return;
    els.cursorGlow.style.left = `${event.clientX}px`;
    els.cursorGlow.style.top = `${event.clientY}px`;
  });

  els.pageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const page = button.dataset.page;
      if (!page) return;
      setPage(page);
      closeMenu();
    });
  });

  els.switchUserBtn.addEventListener("click", () => {
    const nextUser = sanitizeUserName(els.userName.value);
    loadUser(nextUser);
    localStorage.setItem("tck_active_user", nextUser);
    state.activeUser = nextUser;
    render();
  });

  els.userName.addEventListener("keydown", (event) => {
    if (event.key === "Enter") els.switchUserBtn.click();
  });

  [els.searchInput, els.difficultyFilter, els.statusFilter].forEach((el) => {
    el.addEventListener("input", renderProblems);
    el.addEventListener("change", renderProblems);
  });

  els.expandAllBtn.addEventListener("click", () => {
    const allExpanded = state.expanded.size === CATEGORIES.length;
    state.expanded = allExpanded ? new Set() : new Set(CATEGORIES.map((category) => category.name));
    els.expandAllBtn.textContent = allExpanded ? "Expand All" : "Collapse All";
    renderProblems();
  });

  els.resetBtn.addEventListener("click", () => {
    const ok = confirm(`Delete all problem records for ${state.activeUser}?`);
    if (!ok) return;
    localStorage.removeItem(storageKey(state.activeUser));
    state.records = {};
    render();
  });

  els.problemList.addEventListener("click", (event) => {
    const categoryButton = event.target.closest("[data-category-toggle]");
    if (!categoryButton) return;

    const categoryName = categoryButton.dataset.categoryToggle;
    if (state.expanded.has(categoryName)) state.expanded.delete(categoryName);
    else state.expanded.add(categoryName);
    renderProblems();
  });

  els.problemList.addEventListener("change", (event) => {
    const target = event.target;
    const problemId = target.dataset.problemId;
    if (!problemId) return;

    const record = getRecord(problemId);

    if (target.matches(".solve-check")) {
      record.status = target.checked ? "solved" : "not-started";
    }

    if (target.matches(".status-select")) {
      record.status = target.value;
    }

    if (target.matches(".note-input")) {
      record.note = target.value.trim();
    }

    record.updatedAt = new Date().toISOString();
    state.records[problemId] = record;
    saveCurrentUser();
    render();
  });
}


function initHomeEffects() {
  initTypingLine();
  initTiltCards();
  initHeroParticles();
}

function initTypingLine() {
  const target = document.querySelector("#typingLine");
  if (!target) return;

  const lines = [
    "Ideas become projects.",
    "Projects become a portfolio.",
    "Learning becomes momentum.",
    "This is my digital lab."
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = lines[lineIndex];
    const nextText = deleting
      ? current.slice(0, Math.max(0, charIndex - 1))
      : current.slice(0, charIndex + 1);

    target.textContent = `${nextText}${deleting ? "" : "|"}`;
    charIndex = deleting ? charIndex - 1 : charIndex + 1;

    let delay = deleting ? 38 : 68;

    if (!deleting && charIndex === current.length) {
      delay = 1200;
      deleting = true;
    }

    if (deleting && charIndex === 0) {
      deleting = false;
      lineIndex = (lineIndex + 1) % lines.length;
      delay = 280;
    }

    window.setTimeout(tick, delay);
  }

  tick();
}

function initTiltCards() {
  const cards = document.querySelectorAll("[data-tilt]");
  if (!cards.length) return;

  cards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${-y * 7}deg) rotateY(${x * 9}deg) translateY(-4px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

function initHeroParticles() {
  const canvas = document.querySelector("#heroParticles");
  if (!canvas) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const homePage = document.querySelector("#homePage");
  const mouse = { x: -9999, y: -9999 };
  let particles = [];
  let width = 0;
  let height = 0;
  let animationId = null;

  function resize() {
    const rect = homePage.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(rect.width, window.innerWidth);
    height = Math.max(rect.height, window.innerHeight);
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    const count = Math.min(82, Math.floor(width / 18));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 1.8 + 0.8
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((particle) => {
      const dx = mouse.x - particle.x;
      const dy = mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 150) {
        particle.x -= dx * 0.0018;
        particle.y -= dy * 0.0018;
      }

      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > height) particle.vy *= -1;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(245, 245, 240, 0.45)";
      ctx.fill();
    });

    for (let i = 0; i < particles.length; i += 1) {
      for (let j = i + 1; j < particles.length; j += 1) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 115) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(183, 255, 220, ${0.12 * (1 - distance / 115)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    animationId = requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  document.addEventListener("mousemove", (event) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = event.clientX - rect.left;
    mouse.y = event.clientY - rect.top;
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden && animationId) cancelAnimationFrame(animationId);
    if (!document.hidden) draw();
  });

  resize();
  draw();
}

function openMenu() {
  els.sideMenu.classList.add("open");
  els.overlay.classList.add("open");
  els.sideMenu.setAttribute("aria-hidden", "false");
  els.menuToggle.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  els.sideMenu.classList.remove("open");
  els.overlay.classList.remove("open");
  els.sideMenu.setAttribute("aria-hidden", "true");
  els.menuToggle.setAttribute("aria-expanded", "false");
}

function setPage(page) {
  const normalized = page === "practice" ? "practice" : "home";
  els.homePage.classList.toggle("active", normalized === "home");
  els.practicePage.classList.toggle("active", normalized === "practice");
  history.replaceState(null, "", `#${normalized}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function loadUser(userName) {
  const cleanName = sanitizeUserName(userName);
  const raw = localStorage.getItem(storageKey(cleanName));
  state.activeUser = cleanName;
  state.records = raw ? JSON.parse(raw) : {};
  els.userName.value = cleanName;
}

function saveCurrentUser() {
  localStorage.setItem(storageKey(state.activeUser), JSON.stringify(state.records));
}

function storageKey(userName) {
  return `tck_code_practice_records_${sanitizeUserName(userName)}`;
}

function sanitizeUserName(value) {
  return (value || "guest")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]/gi, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "") || "guest";
}

function render() {
  renderDashboard();
  renderProblems();
}

function renderDashboard() {
  const totals = countTotals(flatProblems);
  const solved = countSolved(flatProblems);
  const percent = Math.round((solved.all / totals.all) * 100) || 0;

  els.totalCount.textContent = totals.all;
  els.solvedCount.textContent = solved.all;
  els.easySolved.textContent = solved.Easy;
  els.easyTotal.textContent = totals.Easy;
  els.mediumSolved.textContent = solved.Medium;
  els.mediumTotal.textContent = totals.Medium;
  els.hardSolved.textContent = solved.Hard;
  els.hardTotal.textContent = totals.Hard;
  els.overallPercent.textContent = `${percent}%`;
  els.progressRing.style.setProperty("--progress", `${percent * 3.6}deg`);
  els.activeUserLabel.textContent = `${state.activeUser}'s records`;
}

function renderProblems() {
  const keyword = els.searchInput.value.trim().toLowerCase();
  const difficulty = els.difficultyFilter.value;
  const status = els.statusFilter.value;

  const html = CATEGORIES.map((category) => {
    const filteredProblems = category.problems
      .map(([title, problemDifficulty], index) => ({
        id: `${CATEGORIES.indexOf(category)}-${index}-${slugify(title)}`,
        title,
        difficulty: problemDifficulty,
        category: category.name,
        url: `https://leetcode.com/problems/${slugify(title)}/`
      }))
      .filter((problem) => {
        const record = getRecord(problem.id);
        const matchesKeyword = !keyword ||
          problem.title.toLowerCase().includes(keyword) ||
          category.name.toLowerCase().includes(keyword);
        const matchesDifficulty = difficulty === "all" || problem.difficulty === difficulty;
        const matchesStatus = status === "all" || record.status === status;
        return matchesKeyword && matchesDifficulty && matchesStatus;
      });

    if (filteredProblems.length === 0) return "";

    const categoryAllProblems = flatProblems.filter((problem) => problem.category === category.name);
    const solvedInCategory = categoryAllProblems.filter((problem) => getRecord(problem.id).status === "solved").length;
    const isOpen = state.expanded.has(category.name);

    return `
      <article class="category-card ${isOpen ? "open" : ""}">
        <button class="category-head" data-category-toggle="${escapeHtml(category.name)}" type="button">
          <span class="category-title">
            <strong>${escapeHtml(category.name)}</strong>
            <span>${filteredProblems.length} visible · ${categoryAllProblems.length} total</span>
          </span>
          <span class="category-progress">${solvedInCategory}/${categoryAllProblems.length}</span>
          <span class="chevron">⌄</span>
        </button>
        <div class="problem-table-wrap">
          <table class="problem-table">
            <thead>
              <tr>
                <th></th>
                <th>Problem</th>
                <th>Difficulty</th>
                <th>Status</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              ${filteredProblems.map(renderProblemRow).join("")}
            </tbody>
          </table>
        </div>
      </article>
    `;
  }).join("");

  els.problemList.innerHTML = html || `
    <div class="empty-state">
      No problems match your filters. Try changing the search keyword or filter options.
    </div>
  `;
}

function renderProblemRow(problem) {
  const record = getRecord(problem.id);
  return `
    <tr>
      <td class="check-cell">
        <input class="solve-check" type="checkbox" data-problem-id="${problem.id}" ${record.status === "solved" ? "checked" : ""} aria-label="Mark ${escapeHtml(problem.title)} solved" />
      </td>
      <td>
        <a class="problem-title" href="${problem.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(problem.title)}</a>
      </td>
      <td><span class="diff-badge diff-${problem.difficulty}">${problem.difficulty}</span></td>
      <td>
        <select class="status-select" data-problem-id="${problem.id}" aria-label="Status for ${escapeHtml(problem.title)}">
          ${statusOption("not-started", "Not Started", record.status)}
          ${statusOption("in-progress", "In Progress", record.status)}
          ${statusOption("solved", "Solved", record.status)}
          ${statusOption("review", "Review", record.status)}
        </select>
      </td>
      <td>
        <input class="note-input" data-problem-id="${problem.id}" value="${escapeHtml(record.note || "")}" placeholder="Solution note" />
      </td>
    </tr>
  `;
}

function statusOption(value, label, current) {
  return `<option value="${value}" ${current === value ? "selected" : ""}>${label}</option>`;
}

function getRecord(problemId) {
  return state.records[problemId] || { status: "not-started", note: "", updatedAt: null };
}

function countTotals(problems) {
  return problems.reduce((acc, problem) => {
    acc.all += 1;
    acc[problem.difficulty] += 1;
    return acc;
  }, { all: 0, Easy: 0, Medium: 0, Hard: 0 });
}

function countSolved(problems) {
  return problems.reduce((acc, problem) => {
    if (getRecord(problem.id).status === "solved") {
      acc.all += 1;
      acc[problem.difficulty] += 1;
    }
    return acc;
  }, { all: 0, Easy: 0, Medium: 0, Hard: 0 });
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/\(x, n\)/g, "x-n")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
