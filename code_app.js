/* NeetCode150 list data (id, title, category, difficulty)
   Source list: https://hayapenguin.com/notes/neetcode150
*/
const DATA = [[217,"Contains Duplicate","Array&Hashing","easy"],[242,"Valid Anagram","Array&Hashing","easy"],[1,"Two Sum","Array&Hashing","easy"],[49,"Group Anagrams","Array&Hashing","medium"],[347,"Top K Frequent Elements","Array&Hashing","medium"],[238,"Product of Array Except Self","Array&Hashing","medium"],[36,"Valid Sudoku","Array&Hashing","medium"],[271,"Encode and Decode Strings","Array&Hashing","medium"],[128,"Longest Consecutive Sequence","Array&Hashing","medium"],[20,"Valid Parentheses","Stack","easy"],[155,"Min Stack","Stack","medium"],[150,"Evaluate Reverse Polish Notation","Stack","medium"],[22,"Generate Parentheses","Stack","medium"],[739,"Daily Temperatures","Stack","medium"],[853,"Car Fleet","Stack","medium"],[84,"Largest Rectangle in Histogram","Stack","hard"],[125,"Valid Palindrome","Two Pointers","easy"],[167,"Two Sum II - Input Array Is Sorted","Two Pointers","medium"],[15,"3Sum","Two Pointers","medium"],[11,"Container With Most Water","Two Pointers","medium"],[42,"Trapping Rain Water","Two Pointers","hard"],[704,"Binary Search","Binary Search","easy"],[74,"Search a 2D Matrix","Binary Search","medium"],[875,"Koko Eating Bananas","Binary Search","medium"],[153,"Find Minimum in Rotated Sorted Array","Binary Search","medium"],[33,"Search in Rotated Sorted Array","Binary Search","medium"],[981,"Time Based Key-Value Store","Binary Search","medium"],[4,"Median of Two Sorted Arrays","Binary Search","hard"],[121,"Best Time to Buy and Sell Stock","Sliding Window","easy"],[3,"Longest Substring Without Repeating Characters","Sliding Window","medium"],[424,"Longest Repeating Character Replacement","Sliding Window","medium"],[567,"Permutation in String","Sliding Window","medium"],[76,"Minimum Window Substring","Sliding Window","hard"],[239,"Sliding Window Maximum","Sliding Window","hard"],[206,"Reverse Linked List","Linked List","easy"],[21,"Merge Two Sorted Lists","Linked List","easy"],[141,"Linked List Cycle","Linked List","easy"],[143,"Reorder List","Linked List","medium"],[19,"Remove Nth Node From End of List","Linked List","medium"],[138,"Copy List with Random Pointer","Linked List","medium"],[2,"Add Two Numbers","Linked List","medium"],[287,"Find the Duplicate Number","Linked List","medium"],[146,"LRU Cache","Linked List","medium"],[23,"Merge k Sorted Lists","Linked List","hard"],[25,"Reverse Nodes in k-Group","Linked List","hard"],[226,"Invert Binary Tree","Trees","easy"],[104,"Maximum Depth of Binary Tree","Trees","easy"],[543,"Diameter of Binary Tree","Trees","easy"],[110,"Balanced Binary Tree","Trees","easy"],[100,"Same Tree","Trees","easy"],[572,"Subtree of Another Tree","Trees","easy"],[235,"Lowest Common Ancestor of a Binary Search Tree","Trees","medium"],[102,"Binary Tree Level Order Traversal","Trees","medium"],[199,"Binary Tree Right Side View","Trees","medium"],[1448,"Count Good Nodes in Binary Tree","Trees","medium"],[98,"Validate Binary Search Tree","Trees","medium"],[230,"Kth Smallest Element in a BST","Trees","medium"],[105,"Construct Binary Tree from Preorder and Inorder Traversal","Trees","medium"],[124,"Binary Tree Maximum Path Sum","Trees","hard"],[297,"Serialize and Deserialize Binary Tree","Trees","hard"],[208,"Implement Trie (Prefix Tree)","Tries","medium"],[211,"Design Add and Search Words Data Structure","Tries","medium"],[212,"Word Search II","Tries","hard"],[703,"Kth Largest Element in a Stream","Heap / Priority Queue","easy"],[1046,"Last Stone Weight","Heap / Priority Queue","easy"],[973,"K Closest Points to Origin","Heap / Priority Queue","medium"],[215,"Kth Largest Element in an Array","Heap / Priority Queue","medium"],[621,"Task Scheduler","Heap / Priority Queue","medium"],[355,"Design Twitter","Heap / Priority Queue","medium"],[295,"Find Median from Data Stream","Heap / Priority Queue","hard"],[78,"Subsets","Backtracking","medium"],[39,"Combination Sum","Backtracking","medium"],[46,"Permutations","Backtracking","medium"],[90,"Subsets II","Backtracking","medium"],[40,"Combination Sum II","Backtracking","medium"],[79,"Word Search","Backtracking","medium"],[131,"Palindrome Partitioning","Backtracking","medium"],[17,"Letter Combinations of a Phone Number","Backtracking","medium"],[51,"N-Queens","Backtracking","hard"],[200,"Number of Islands","Graphs","medium"],[133,"Clone Graph","Graphs","medium"],[695,"Max Area of Island","Graphs","medium"],[417,"Pacific Atlantic Water Flow","Graphs","medium"],[130,"Surrounded Regions","Graphs","medium"],[994,"Rotting Oranges","Graphs","medium"],[286,"Walls and Gates","Graphs","medium"],[207,"Course Schedule","Graphs","medium"],[210,"Course Schedule II","Graphs","medium"],[684,"Redundant Connection","Graphs","medium"],[323,"Number of Connected Components in an Undirected Graph","Graphs","medium"],[261,"Graph Valid Tree","Graphs","medium"],[127,"Word Ladder","Graphs","hard"],[70,"Climbing Stairs","1-D Dynamic Programming","easy"],[746,"Min Cost Climbing Stairs","1-D Dynamic Programming","easy"],[198,"House Robber","1-D Dynamic Programming","medium"],[213,"House Robber II","1-D Dynamic Programming","medium"],[5,"Longest Palindromic Substring","1-D Dynamic Programming","medium"],[647,"Palindromic Substrings","1-D Dynamic Programming","medium"],[91,"Decode Ways","1-D Dynamic Programming","medium"],[322,"Coin Change","1-D Dynamic Programming","medium"],[152,"Maximum Product Subarray","1-D Dynamic Programming","medium"],[139,"Word Break","1-D Dynamic Programming","medium"],[300,"Longest Increasing Subsequence","1-D Dynamic Programming","medium"],[416,"Partition Equal Subset Sum","1-D Dynamic Programming","medium"],[252,"Meeting Rooms","Intervals","easy"],[57,"Insert Interval","Intervals","medium"],[56,"Merge Intervals","Intervals","medium"],[435,"Non-overlapping Intervals","Intervals","medium"],[253,"Meeting Rooms II","Intervals","medium"],[1851,"Minimum Interval to Include Each Query","Intervals","hard"],[53,"Maximum Subarray","Greedy","medium"],[55,"Jump Game","Greedy","medium"],[45,"Jump Game II","Greedy","medium"],[134,"Gas Station","Greedy","medium"],[846,"Hand of Straights","Greedy","medium"],[1899,"Merge Triplets to Form Target Triplet","Greedy","medium"],[763,"Partition Labels","Greedy","medium"],[678,"Valid Parenthesis String","Greedy","medium"],[1584,"Min Cost to Connect All Points","Advanced Graphs","medium"],[743,"Network Delay Time","Advanced Graphs","medium"],[787,"Cheapest Flights Within K Stops","Advanced Graphs","medium"],[332,"Reconstruct Itinerary","Advanced Graphs","hard"],[778,"Swim in Rising Water","Advanced Graphs","hard"],[269,"Alien Dictionary","Advanced Graphs","hard"],[62,"Unique Paths","2-D Dynamic Programming","medium"],[1143,"Longest Common Subsequence","2-D Dynamic Programming","medium"],[309,"Best Time to Buy and Sell Stock with Cooldown","2-D Dynamic Programming","medium"],[518,"Coin Change II","2-D Dynamic Programming","medium"],[494,"Target Sum","2-D Dynamic Programming","medium"],[97,"Interleaving String","2-D Dynamic Programming","medium"],[72,"Edit Distance","2-D Dynamic Programming","medium"],[329,"Longest Increasing Path in a Matrix","2-D Dynamic Programming","hard"],[115,"Distinct Subsequences","2-D Dynamic Programming","hard"],[312,"Burst Balloons","2-D Dynamic Programming","hard"],[10,"Regular Expression Matching","2-D Dynamic Programming","hard"],[136,"Single Number","Bit Manipulation","easy"],[191,"Number of 1 Bits","Bit Manipulation","easy"],[338,"Counting Bits","Bit Manipulation","easy"],[190,"Reverse Bits","Bit Manipulation","easy"],[268,"Missing Number","Bit Manipulation","easy"],[371,"Sum of Two Integers","Bit Manipulation","medium"],[7,"Reverse Integer","Bit Manipulation","medium"],[202,"Happy Number","Math & Geometry","easy"],[66,"Plus One","Math & Geometry","easy"],[48,"Rotate Image","Math & Geometry","medium"],[54,"Spiral Matrix","Math & Geometry","medium"],[73,"Set Matrix Zeroes","Math & Geometry","medium"],[50,"Pow(x, n)","Math & Geometry","medium"],[43,"Multiply Strings","Math & Geometry","medium"],[2013,"Detect Squares","Math & Geometry","medium"]];

const STORAGE_KEY = "nc150_progress_v1";

/** LeetCode slug overrides for tricky titles */
const LEETCODE_SLUG_OVERRIDES = {
  50: "powx-n"
};

function slugifyLeetCode(title) {
  // 기본 slugify (대부분 문제에 통함)
  return title
    .toLowerCase()
    .replace(/’/g, "")
    .replace(/-/g, " ")
    .replace(/[()]/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, "-");
}

function leetCodeUrl(id, title) {
  const slug = LEETCODE_SLUG_OVERRIDES[id] || slugifyLeetCode(title);
  return `https://leetcode.com/problems/${slug}/`;
}

function neetCodeUrl(id, title) {
  // NeetCode는 /problems/<slug> 형태가 일반적이라 slugify 기반으로 링크 구성
  const slug = slugifyLeetCode(title);
  return `https://neetcode.io/problems/${slug}?list=neetcode150`;
}

function loadChecked() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const arr = JSON.parse(raw);
    return new Set(arr);
  } catch {
    return new Set();
  }
}

function saveChecked(set) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
}

function groupByCategory(items) {
  const map = new Map();
  for (const it of items) {
    if (!map.has(it.category)) map.set(it.category, []);
    map.get(it.category).push(it);
  }
  return map;
}

function fmtDiff(diff) {
  if (diff === "easy") return "Easy";
  if (diff === "medium") return "Medium";
  return "Hard";
}

function buildProblemObjects() {
  return DATA.map(([id, title, category, difficulty]) => ({
    id, title, category, difficulty
  }));
}

function computeStats(items, checked) {
  const total = items.length;
  const done = items.filter(x => checked.has(x.id)).length;

  const byDiff = { easy: { total:0, done:0 }, medium:{ total:0, done:0 }, hard:{ total:0, done:0 } };
  for (const it of items) {
    byDiff[it.difficulty].total++;
    if (checked.has(it.id)) byDiff[it.difficulty].done++;
  }
  return { total, done, byDiff };
}

function renderStats(stats) {
  const el = document.getElementById("stats");
  el.innerHTML = `
    <div class="pill"><strong>${stats.done}</strong> / ${stats.total} Solved</div>
    <div class="pill"><strong>${stats.byDiff.easy.done}</strong> / ${stats.byDiff.easy.total} Easy</div>
    <div class="pill"><strong>${stats.byDiff.medium.done}</strong> / ${stats.byDiff.medium.total} Med</div>
    <div class="pill"><strong>${stats.byDiff.hard.done}</strong> / ${stats.byDiff.hard.total} Hard</div>
  `;
}

function renderCategorySelect(categories) {
  const sel = document.getElementById("cat");
  sel.innerHTML = `<option value="all">전체</option>` + categories
    .map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`)
    .join("");
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (m) => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
  }[m]));
}

function buildRow(it, checked) {
  const done = checked.has(it.id);
  const lc = leetCodeUrl(it.id, it.title);
  const nc = neetCodeUrl(it.id, it.title);

  return `
    <tr class="row">
      <td style="width:42px;">
        <input class="doneBox" type="checkbox" data-id="${it.id}" ${done ? "checked" : ""} />
      </td>
      <td>
        <div class="problem">
          <div class="meta">
            <span class="linkchip">#${it.id}</span>
            <a href="${lc}" target="_blank" rel="noreferrer" title="LeetCode로 이동">
              ${escapeHtml(it.title)}
            </a>
            <a class="linkchip" href="${nc}" target="_blank" rel="noreferrer" title="NeetCode로 이동">NC</a>
          </div>
        </div>
      </td>
      <td style="width:120px;">
        <span class="badge ${it.difficulty}">${fmtDiff(it.difficulty)}</span>
      </td>
    </tr>
  `;
}

function buildSection(category, items, checked, expanded=true) {
  const doneCount = items.filter(x => checked.has(x.id)).length;
  const total = items.length;

  const rows = items
    .slice()
    .sort((a,b) => a.id - b.id)
    .map(it => buildRow(it, checked))
    .join("");

  return `
    <div class="section" data-cat="${escapeHtml(category)}">
      <div class="sectionHeader" data-toggle="${escapeHtml(category)}">
        <div class="sectionTitle">
          <span>${escapeHtml(category)}</span>
          <small>${doneCount} / ${total}</small>
        </div>
        <div class="pill"><strong>${Math.round((doneCount/total)*100) || 0}%</strong></div>
      </div>
      <div class="sectionBody ${expanded ? "" : "hidden"}" data-body="${escapeHtml(category)}">
        <table class="table">
          <thead>
            <tr>
              <th>Done</th>
              <th>Problem</th>
              <th>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function applyFilters(allItems) {
  const q = document.getElementById("q").value.trim().toLowerCase();
  const cat = document.getElementById("cat").value;
  const diff = document.getElementById("diff").value;

  return allItems.filter(it => {
    if (cat !== "all" && it.category !== cat) return false;
    if (diff !== "all" && it.difficulty !== diff) return false;
    if (q) {
      const hay = `${it.id} ${it.title}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

function renderBoard(allItems, checked, expandedState) {
  const board = document.getElementById("board");
  const filtered = applyFilters(allItems);

  // stats는 "전체" 기준으로 보여주는 게 보통이라 전체로 유지
  renderStats(computeStats(allItems, checked));

  const map = groupByCategory(filtered);
  const cats = [...map.keys()];

  if (filtered.length === 0) {
    board.innerHTML = `
      <div class="section">
        <div class="sectionHeader">
          <div class="sectionTitle"><span>결과 없음</span><small>필터를 바꿔보세요</small></div>
        </div>
        <div class="sectionBody">
          <div style="padding:8px 6px; color: var(--muted);">검색어/카테고리/난이도 조건에 맞는 문제가 없습니다.</div>
        </div>
      </div>
    `;
    return;
  }

  board.innerHTML = cats.map(c => {
    const expanded = expandedState.get(c) ?? true;
    return buildSection(c, map.get(c), checked, expanded);
  }).join("");

  // section toggle
  board.querySelectorAll(".sectionHeader").forEach(h => {
    h.addEventListener("click", (e) => {
      const key = h.dataset.toggle;
      const body = board.querySelector(`.sectionBody[data-body="${CSS.escape(key)}"]`);
      body.classList.toggle("hidden");
      expandedState.set(key, !body.classList.contains("hidden"));
    });
  });

  // checkbox handlers
  board.querySelectorAll(".doneBox").forEach(cb => {
    cb.addEventListener("change", () => {
      const id = Number(cb.dataset.id);
      if (cb.checked) checked.add(id);
      else checked.delete(id);
      saveChecked(checked);

      // UI 즉시 업데이트: 헤더 카운트, 상단 stats
      renderBoard(allItems, checked, expandedState);
    });
  });
}

(function init(){
  const allItems = buildProblemObjects();
  const checked = loadChecked();

  // category select
  const categories = [...new Set(allItems.map(x => x.category))].sort((a,b)=>a.localeCompare(b));
  renderCategorySelect(categories);

  const expandedState = new Map(categories.map(c => [c, true]));

  // filters -> rerender
  ["q","cat","diff"].forEach(id => {
    document.getElementById(id).addEventListener("input", () => {
      renderBoard(allItems, checked, expandedState);
    });
    document.getElementById(id).addEventListener("change", () => {
      renderBoard(allItems, checked, expandedState);
    });
  });

  // expand/collapse
  document.getElementById("btnExpand").addEventListener("click", () => {
    for (const c of categories) expandedState.set(c, true);
    renderBoard(allItems, checked, expandedState);
  });
  document.getElementById("btnCollapse").addEventListener("click", () => {
    for (const c of categories) expandedState.set(c, false);
    renderBoard(allItems, checked, expandedState);
  });

  // reset
  document.getElementById("btnReset").addEventListener("click", () => {
    checked.clear();
    saveChecked(checked);
    renderBoard(allItems, checked, expandedState);
  });

  renderBoard(allItems, checked, expandedState);
})();
