const DEMO_VERSION = "2026-05-07-pages";
const STORE_KEY = "smileJapaneseDemoState";
const SESSION_KEY = "smileJapaneseDemoSession";
const LAST_ORDER_KEY = "smileJapaneseLastOrder";

const DEFAULT_COURSES = [
  {
    id: "course-kana-free",
    title: "五十音微笑入門課",
    category: "免費入門",
    type: "免費錄播",
    price: 0,
    duration: "1.5 小時",
    audience: "零基礎成人",
    status: "可試看",
    kana: "あ",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=900&q=80",
    description: "平假名、片假名、發音口型與基本拍音，適合完全零基礎的成人學生先建立安全感。",
    chapters: [
      { id: "kana-01", title: "平假名あ行與發音口型", duration: "12 分鐘", type: "試看" },
      { id: "kana-02", title: "か行到さ行：拍音節奏", duration: "15 分鐘", type: "影片" },
      { id: "kana-03", title: "片假名入門與外來語", duration: "18 分鐘", type: "影片" },
      { id: "kana-04", title: "五十音總複習小測驗", duration: "10 分鐘", type: "測驗" },
    ],
  },
  {
    id: "course-n5-basic",
    title: "微笑日語 N5 初級班",
    category: "初級日語",
    type: "付費錄播",
    price: 2800,
    duration: "8 小時",
    audience: "五十音完成",
    status: "熱賣中",
    kana: "日",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=900&q=80",
    description: "從自我介紹、名詞句、助詞到日常句型，搭配章節測驗與直播練習，建立第一段穩定日語基礎。",
    chapters: [
      { id: "n5-01", title: "自我介紹：私はリンです", duration: "14 分鐘", type: "試看" },
      { id: "n5-02", title: "名詞句與です/ではありません", duration: "18 分鐘", type: "影片" },
      { id: "n5-03", title: "助詞は/が/を：先建立直覺", duration: "24 分鐘", type: "影片" },
      { id: "n5-04", title: "これ・それ・あれ：指示詞練習", duration: "21 分鐘", type: "影片" },
      { id: "n5-05", title: "動詞ます形與日常行動", duration: "28 分鐘", type: "影片" },
      { id: "n5-06", title: "小測驗：助詞選擇", duration: "8 分鐘", type: "測驗" },
    ],
  },
  {
    id: "course-conversation",
    title: "生活日語會話小班",
    category: "會話練習",
    type: "團體直播",
    price: 3600,
    duration: "6 堂直播",
    audience: "N5-N4",
    status: "可預約",
    kana: "話",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    description: "每週主題演練點餐、問路、購物、旅館與自我介紹，讓學生把錄播內容轉成開口能力。",
    chapters: [
      { id: "talk-01", title: "餐廳點餐：お願いします", duration: "60 分鐘", type: "直播" },
      { id: "talk-02", title: "問路與交通：駅はどこですか", duration: "60 分鐘", type: "直播" },
      { id: "talk-03", title: "購物會話：これはいくらですか", duration: "60 分鐘", type: "直播" },
    ],
  },
  {
    id: "course-n4-reading",
    title: "N4 句型與閱讀進階",
    category: "進階付費",
    type: "付費錄播",
    price: 4200,
    duration: "10 小時",
    audience: "N5 完成",
    status: "即將開課",
    kana: "進",
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=900&q=80",
    description: "強化長句理解、閱讀速度與考前題型策略，適合已經完成 N5 並準備往 N4 前進的學生。",
    chapters: [
      { id: "n4-01", title: "長句拆解與接續詞", duration: "32 分鐘", type: "影片" },
      { id: "n4-02", title: "閱讀題型與關鍵字", duration: "35 分鐘", type: "影片" },
      { id: "n4-03", title: "N4 句型整理", duration: "40 分鐘", type: "影片" },
    ],
  },
  {
    id: "course-travel",
    title: "日本旅行日語速成",
    category: "會話練習",
    type: "短期課",
    price: 1200,
    duration: "3 小時",
    audience: "旅遊前",
    status: "開放報名",
    kana: "旅",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80",
    description: "交通、住宿、餐廳與購物情境，出發前快速建立可直接使用的旅遊句型包。",
    chapters: [
      { id: "travel-01", title: "機場與交通", duration: "28 分鐘", type: "影片" },
      { id: "travel-02", title: "餐廳與便利商店", duration: "30 分鐘", type: "影片" },
      { id: "travel-03", title: "住宿與求助", duration: "26 分鐘", type: "影片" },
    ],
  },
  {
    id: "course-particles",
    title: "助詞與動詞變化精修",
    category: "進階付費",
    type: "文法精修",
    price: 2200,
    duration: "5 小時",
    audience: "N5 學生",
    status: "開放報名",
    kana: "文",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=900&q=80",
    description: "針對は、が、を、に、で與ます形、て形做集中練習，補強初學者最常卡住的文法節點。",
    chapters: [
      { id: "particle-01", title: "は與が的語感差異", duration: "24 分鐘", type: "影片" },
      { id: "particle-02", title: "を、に、で的句型練習", duration: "28 分鐘", type: "影片" },
      { id: "particle-03", title: "ます形與て形轉換", duration: "32 分鐘", type: "測驗" },
    ],
  },
];

const DEFAULT_PRODUCTS = [
  { id: "product-workbook", title: "五十音練習本", category: "教材", price: 280, stock: 48, icon: "本", image: "linear-gradient(135deg, #fff0f4, #e7f4fb)", description: "搭配課程章節的書寫練習本，含平假名與片假名。" },
  { id: "product-omamori", title: "櫻花學習御守", category: "幸運小物", price: 380, stock: 26, icon: "櫻", image: "linear-gradient(135deg, #ffe6ee, #fff4d7)", description: "可愛但不幼稚的小吊飾，搭配學習願望卡。" },
  { id: "product-flashcards", title: "富士山單字卡", category: "教材", price: 420, stock: 35, icon: "山", image: "linear-gradient(135deg, #e7f4fb, #fffaf5)", description: "N5 常用單字 120 張，適合通勤與睡前複習。" },
  { id: "product-stationery", title: "日語筆記文具組", category: "文具", price: 520, stock: 19, icon: "筆", image: "linear-gradient(135deg, #fff3dc, #e8f5ef)", description: "格線筆記本、重點貼與柔色螢光筆。" },
  { id: "product-audio", title: "聽力練習音檔包", category: "教材", price: 360, stock: 999, icon: "聽", image: "linear-gradient(135deg, #f1f4ff, #fff0f4)", description: "日常句型、店員對話與旅遊問答音檔。" },
  { id: "product-daruma", title: "達摩目標書籤", category: "幸運小物", price: 180, stock: 42, icon: "達", image: "linear-gradient(135deg, #fff7dc, #ffe6ee)", description: "寫下本月學習目標，完成後替達摩畫上另一隻眼。" },
];

const DEFAULT_TEACHERS = [
  { id: "teacher-ando", name: "安達老師", language: "日語", category: "日語老師", specialty: "入門日語 / 成人會話", status: "啟用", photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80", slots: "週二、週四晚間" },
  { id: "teacher-misaki", name: "美咲老師", language: "日語", category: "日語老師", specialty: "發音矯正 / N5-N4", status: "啟用", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80", slots: "週三、週六下午" },
  { id: "teacher-sora", name: "Sora 老師", language: "日語", category: "日語老師", specialty: "旅行日語 / 小班練習", status: "啟用", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80", slots: "週一、週五晚間" },
  { id: "teacher-korean", name: "韓語擴充教師", language: "韓語", category: "後續擴充", specialty: "保留分類，尚未上線", status: "規劃中", photo: "", slots: "待排程" },
  { id: "teacher-english", name: "英語擴充教師", language: "英語", category: "後續擴充", specialty: "保留分類，尚未上線", status: "規劃中", photo: "", slots: "待排程" },
];

const DEFAULT_USERS = [
  { name: "王佳穎", email: "student@example.com", password: "demo1234", phone: "0912-345-678" },
];

const DEFAULT_STATE = {
  version: DEMO_VERSION,
  courses: DEFAULT_COURSES,
  products: DEFAULT_PRODUCTS,
  teachers: DEFAULT_TEACHERS,
  users: DEFAULT_USERS,
  enrollments: {
    "student@example.com": [
      { courseId: "course-n5-basic", completed: ["n5-01", "n5-02"], currentChapterId: "n5-03", recent: "助詞は/が/を", updatedAt: "2026-05-07" },
      { courseId: "course-kana-free", completed: ["kana-01", "kana-02", "kana-03", "kana-04"], currentChapterId: "kana-04", recent: "五十音總複習", updatedAt: "2026-05-06" },
      { courseId: "course-conversation", completed: ["talk-01"], currentChapterId: "talk-02", recent: "餐廳點餐", updatedAt: "2026-05-05" },
    ],
  },
  bookings: {
    "student@example.com": [
      { title: "團體班：餐廳點餐", teacher: "安達老師", date: "05/10", time: "20:00", status: "已預約" },
      { title: "一對一：發音診斷", teacher: "美咲老師", date: "05/13", time: "19:30", status: "提醒中" },
    ],
  },
  cart: [
    { kind: "course", id: "course-n5-basic", qty: 1 },
    { kind: "product", id: "product-omamori", qty: 1 },
  ],
  orders: [
    {
      id: "ORD-20260507-018",
      customer: "王佳穎",
      email: "student@example.com",
      payment: "信用卡",
      status: "已付款",
      createdAt: "2026/05/07 15:30",
      items: [
        { kind: "course", id: "course-n5-basic", title: "微笑日語 N5 初級班", price: 2800, qty: 1 },
        { kind: "product", id: "product-omamori", title: "櫻花學習御守", price: 380, qty: 1 },
      ],
      total: 3180,
    },
  ],
};

function cloneDefaultState() {
  return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function readState() {
  const raw = localStorage.getItem(STORE_KEY);
  if (!raw) return resetDemoState(false);
  try {
    const parsed = JSON.parse(raw);
    if (parsed.version !== DEMO_VERSION) return resetDemoState(false);
    return parsed;
  } catch {
    return resetDemoState(false);
  }
}

function writeState(state) {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}

function resetDemoState(redirect = true) {
  const next = cloneDefaultState();
  writeState(next);
  localStorage.setItem(SESSION_KEY, "student@example.com");
  localStorage.setItem(LAST_ORDER_KEY, next.orders[0].id);
  if (redirect) window.location.reload();
  return next;
}

function currentEmail() {
  return localStorage.getItem(SESSION_KEY);
}

function setCurrentEmail(email) {
  if (email) localStorage.setItem(SESSION_KEY, email);
  else localStorage.removeItem(SESSION_KEY);
}

function getCurrentUser(state = readState()) {
  return state.users.find((user) => user.email === currentEmail()) || null;
}

function pageName() {
  return window.location.pathname.split("/").pop() || "index.html";
}

function formatMoney(value) {
  return Number(value) === 0 ? "免費" : `NT$${Number(value).toLocaleString("zh-TW")}`;
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }[char]));
}

function statusClass(status = "") {
  if (status.includes("付款") || status.includes("完成") || status.includes("上架") || status.includes("啟用") || status.includes("試看")) return "state-on";
  if (status.includes("預約") || status.includes("直播") || status.includes("提醒")) return "state-blue";
  if (status.includes("即將") || status.includes("匯款") || status.includes("草稿") || status.includes("備貨") || status.includes("規劃")) return "state-warn";
  return "state-pink";
}

function courseById(state, id) {
  return state.courses.find((course) => course.id === id);
}

function productById(state, id) {
  return state.products.find((product) => product.id === id);
}

function ensureEnrollment(state, email, courseId) {
  state.enrollments[email] ||= [];
  let enrollment = state.enrollments[email].find((item) => item.courseId === courseId);
  if (!enrollment) {
    const course = courseById(state, courseId);
    enrollment = {
      courseId,
      completed: [],
      currentChapterId: course?.chapters?.[0]?.id || "",
      recent: course?.chapters?.[0]?.title || "尚未開始",
      updatedAt: "2026-05-07",
    };
    state.enrollments[email].push(enrollment);
  }
  return enrollment;
}

function progressFor(course, enrollment) {
  const total = course?.chapters?.length || 1;
  const done = enrollment?.completed?.length || 0;
  return Math.min(100, Math.round((done / total) * 100));
}

function nextChapter(course, enrollment) {
  const completed = new Set(enrollment?.completed || []);
  return course?.chapters?.find((chapter) => !completed.has(chapter.id)) || course?.chapters?.[0] || null;
}

function resolveCartItem(state, item) {
  if (item.kind === "course") {
    const course = courseById(state, item.id);
    if (!course) return null;
    return {
      kind: "course",
      id: course.id,
      title: course.title,
      price: Number(course.price),
      qty: item.qty || 1,
      icon: course.kana || "日",
      meta: `${course.type} · ${course.duration}`,
    };
  }
  const product = productById(state, item.id);
  if (!product) return null;
  return {
    kind: "product",
    id: product.id,
    title: product.title,
    price: Number(product.price),
    qty: item.qty || 1,
    icon: product.icon || "物",
    meta: `${product.category} · 數量 ${item.qty || 1}`,
  };
}

function cartItems(state) {
  return state.cart.map((item) => resolveCartItem(state, item)).filter(Boolean);
}

function cartTotal(state) {
  return cartItems(state).reduce((sum, item) => sum + item.price * item.qty, 0);
}

function addToCart(kind, id) {
  const state = readState();
  const existing = state.cart.find((item) => item.kind === kind && item.id === id);
  if (existing && kind === "product") existing.qty += 1;
  if (!existing) state.cart.push({ kind, id, qty: 1 });
  writeState(state);
}

function renderNav() {
  const state = readState();
  const nav = document.querySelector(".site-nav");
  if (nav && !nav.querySelector('a[href="architecture.html"]')) {
    const checkoutLink = nav.querySelector('a[href="checkout.html"]');
    const architectureLink = document.createElement("a");
    architectureLink.href = "architecture.html";
    architectureLink.textContent = "架構";
    if (pageName() === "architecture.html") architectureLink.classList.add("is-active");
    nav.insertBefore(architectureLink, checkoutLink || null);
  }
  if (nav) {
    const activeMap = {
      "course-detail.html": "courses.html",
      "learn.html": "dashboard.html",
      "login.html": "dashboard.html",
      "order-complete.html": "checkout.html",
    };
    const activeHref = activeMap[pageName()] || pageName();
    nav.querySelectorAll("a").forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === activeHref);
    });
  }

  const actions = document.querySelector(".nav-actions");
  if (!actions) return;
  const user = getCurrentUser(state);
  actions.innerHTML = user
    ? `<a class="btn btn-outline" href="dashboard.html">${escapeHtml(user.name)}</a><button class="btn btn-primary" type="button" data-logout>登出</button>`
    : `<a class="btn btn-outline" href="login.html">學生登入</a><a class="btn btn-primary" href="courses.html">查看課程</a>`;
}

function renderDemoDisclaimer() {
  const header = document.querySelector(".site-header");
  if (!header || document.querySelector(".demo-disclaimer")) return;
  const note = document.createElement("div");
  note.className = "demo-disclaimer";
  note.innerHTML = `<div class="page-shell"><strong>展示站</strong><span>本網站為可操作流程 demo，資料皆為示意，不含真金流、真個資或真 API。</span></div>`;
  header.insertAdjacentElement("afterend", note);
}

function showToast(message) {
  let toast = document.querySelector(".demo-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "demo-toast";
    document.body.append(toast);
  }
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

function courseCard(course) {
  const action = course.price === 0
    ? `<a class="btn btn-small btn-soft" href="learn.html?course=${course.id}">開始學習</a>`
    : `<button class="btn btn-small btn-primary" type="button" data-add-course="${course.id}">加入購物車</button>`;
  return `
    <article class="course-card" data-category="${escapeHtml(course.category)}" data-status="${escapeHtml(course.status)}">
      <div class="course-art" data-kana="${escapeHtml(course.kana)}" style="--image: url('${escapeHtml(course.image)}')">
        <span class="tag ${course.price === 0 ? "tag-free" : course.category.includes("會話") ? "tag-live" : course.category.includes("進階") ? "tag-paid" : "tag-new"}">${escapeHtml(course.category)}</span>
      </div>
      <div class="card-body">
        <h3>${escapeHtml(course.title)}</h3>
        <p>${escapeHtml(course.description)}</p>
        <div class="card-meta"><span>${escapeHtml(course.duration)}</span><span>適合：${escapeHtml(course.audience)}</span><span class="state-pill ${statusClass(course.status)}">${escapeHtml(course.status)}</span></div>
        <div class="card-foot"><span class="price">${formatMoney(course.price)}</span><span class="button-pair"><a class="btn btn-small btn-outline" href="course-detail.html?course=${course.id}">介紹</a>${action}</span></div>
      </div>
    </article>
  `;
}

function renderCoursesPage() {
  const grid = document.querySelector(".course-grid");
  if (!grid) return;
  const state = readState();
  let activeCategory = "全部課程";
  grid.innerHTML = state.courses.map(courseCard).join("");

  document.querySelectorAll(".filter-group button").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.textContent.trim();
      const visibleCourses = activeCategory.includes("全部")
        ? state.courses
        : state.courses.filter((course) => course.category === activeCategory || course.status === activeCategory);
      grid.innerHTML = visibleCourses.map(courseCard).join("") || `<div class="empty-state">目前沒有符合條件的課程。</div>`;
    });
  });
}

function renderCourseDetailPage() {
  if (pageName() !== "course-detail.html") return;
  const state = readState();
  const params = new URLSearchParams(window.location.search);
  const course = courseById(state, params.get("course")) || courseById(state, "course-n5-basic") || state.courses[0];
  const teacher = state.teachers.find((item) => item.language === "日語" && item.status === "啟用") || state.teachers[0];
  document.querySelector(".page-main").innerHTML = `
    <section class="page-shell section content-grid">
      <div class="panel">
        <p class="eyebrow">課程介紹頁 · ${escapeHtml(course.category)}</p>
        <div class="detail-hero">
          <h1>${escapeHtml(course.title)}</h1>
          <p>${escapeHtml(course.description)}</p>
          <div class="toolbar">
            <span class="tag tag-new">${escapeHtml(course.duration)}</span>
            <span class="tag tag-live">${escapeHtml(course.type)}</span>
            <span class="tag">適合 ${escapeHtml(course.audience)}</span>
          </div>
        </div>
        <div class="video-shell" style="margin-top: 18px;">
          <div class="video-placeholder" style="min-height: 310px;">
            <div>
              <div class="play-button">▶</div>
              <h2 style="margin: 16px 0 6px;">試看：${escapeHtml(course.chapters[0]?.title || "第一課")}</h2>
              <p style="color: rgba(255,255,255,.78);">影片播放器示意 · 實際上線可串錄播平台或站內影片</p>
            </div>
          </div>
        </div>
      </div>
      <aside>
        <section class="panel">
          <div class="panel-head"><h2>購買方案</h2><span class="state-pill ${statusClass(course.status)}">${escapeHtml(course.status)}</span></div>
          <div class="summary-row"><span>課程價格</span><strong>${formatMoney(course.price)}</strong></div>
          <div class="summary-row"><span>課程時數</span><strong>${escapeHtml(course.duration)}</strong></div>
          <div class="summary-row"><span>課程類型</span><strong>${escapeHtml(course.type)}</strong></div>
          <button class="btn btn-primary" type="button" data-add-course="${course.id}" data-go-checkout>加入購物車並結帳</button>
          <a class="btn btn-outline" href="booking.html">先預約體驗</a>
          <p class="notice">展示用畫面，不串接真實金流、發票或 API。</p>
        </section>
        <section class="panel">
          <h2>適合對象</h2>
          <ul class="feature-list">
            <li>${escapeHtml(course.audience)}可以依照章節循序學習</li>
            <li>需要錄播、測驗與預約課整合的成人學生</li>
            <li>想在學習中心追蹤進度與最近觀看紀錄</li>
          </ul>
        </section>
      </aside>
    </section>
    <section class="section">
      <div class="page-shell content-grid">
        <section class="panel">
          <div class="panel-head"><h2>章節列表</h2><span class="price-pill">共 ${course.chapters.length} 章節</span></div>
          <ul class="lesson-list">
            ${course.chapters.map((chapter, index) => `
              <li class="lesson-item">
                <span class="lesson-index">${String(index + 1).padStart(2, "0")}</span>
                <span><strong class="item-title">${escapeHtml(chapter.title)}</strong><span class="item-meta">${escapeHtml(chapter.type)} · ${escapeHtml(chapter.duration)}</span></span>
                ${index === 0 ? `<a class="btn btn-small btn-soft" href="learn.html?course=${course.id}">試看</a>` : `<span class="state-pill ${course.price === 0 ? "state-on" : "state-warn"}">${course.price === 0 ? "可觀看" : "購買後解鎖"}</span>`}
              </li>
            `).join("")}
          </ul>
        </section>
        <aside>
          <section class="teacher-card">
            <div class="teacher-photo" style="--image: url('${escapeHtml(teacher.photo || course.image)}')"></div>
            <div>
              <h3>${escapeHtml(teacher.name)}</h3>
              <p>${escapeHtml(teacher.specialty)}</p>
              <span class="state-pill state-blue">日語入門主講</span>
            </div>
          </section>
          <section class="panel">
            <h2>講師介紹</h2>
            <p>以「先敢開口、再修細節」為教學核心，適合害怕文法、需要陪跑節奏的初學者。</p>
            <ul class="feature-list">
              <li>每章節提供一句可立即使用的會話模板</li>
              <li>搭配錄播與直播練習，降低自學卡關</li>
              <li>後台可追蹤學生觀看與作業狀態</li>
            </ul>
          </section>
        </aside>
      </div>
    </section>
  `;
}

function renderLoginPage() {
  if (pageName() !== "login.html") return;
  const user = getCurrentUser();
  const message = user ? `<div class="notice">目前已登入：${escapeHtml(user.name)}。你也可以登出後測試另一個帳號。</div>` : "";
  document.querySelector(".page-main").innerHTML = `
    <div class="page-shell">
      <div class="page-title">
        <div>
          <h1>學生登入 / 註冊</h1>
          <p>這是展示用會員流程，資料只存在瀏覽器 localStorage，不會送到伺服器。</p>
        </div>
        <button class="btn btn-outline" type="button" data-reset-demo>重置 demo 資料</button>
      </div>
      <section class="content-grid">
        <div class="panel auth-card">
          <div class="panel-head"><h2>登入學習中心</h2><span class="state-pill state-pink">測試帳號</span></div>
          ${message}
          <form class="form-grid" id="loginForm">
            <div class="field-full"><label for="loginEmail">Email</label><input id="loginEmail" name="email" type="email" value="student@example.com" autocomplete="email"></div>
            <div class="field-full"><label for="loginPassword">密碼</label><input id="loginPassword" name="password" type="password" value="demo1234" autocomplete="current-password"></div>
            <div class="field-full"><button class="btn btn-primary" type="submit">登入</button></div>
          </form>
        </div>
        <aside class="panel auth-card">
          <div class="panel-head"><h2>註冊新學生</h2><span class="state-pill state-blue">Demo</span></div>
          <form class="form-grid" id="registerForm">
            <div class="field-full"><label for="registerName">姓名</label><input id="registerName" name="name" value="林小晴"></div>
            <div class="field-full"><label for="registerEmail">Email</label><input id="registerEmail" name="email" type="email" value="newstudent@example.com"></div>
            <div class="field-full"><label for="registerPassword">密碼</label><input id="registerPassword" name="password" type="password" value="demo1234"></div>
            <div class="field-full"><button class="btn btn-matcha" type="submit">建立帳號並登入</button></div>
          </form>
        </aside>
      </section>
    </div>
  `;
}

function renderDashboardPage() {
  if (pageName() !== "dashboard.html") return;
  const state = readState();
  const user = getCurrentUser(state);
  if (!user) {
    document.querySelector(".page-main").innerHTML = `
      <div class="page-shell">
        <div class="page-title"><div><h1>學習中心</h1><p>請先登入或註冊，就能看到已購買課程、學習進度與預約提醒。</p></div><a class="btn btn-primary" href="login.html">前往登入</a></div>
        <section class="panel"><h2>展示提醒</h2><p>會員資料與進度會儲存在 localStorage，重整頁面後仍可保留 demo 狀態。</p></section>
      </div>
    `;
    return;
  }
  const enrollments = state.enrollments[user.email] || [];
  const bookings = state.bookings[user.email] || [];
  const rows = enrollments.map((enrollment) => {
    const course = courseById(state, enrollment.courseId);
    if (!course) return "";
    const progress = progressFor(course, enrollment);
    return `
      <li class="lesson-item">
        <span class="lesson-index">${escapeHtml(course.kana)}</span>
        <span><strong class="item-title">${escapeHtml(course.title)}</strong><span class="item-meta">最近觀看：${escapeHtml(enrollment.recent)} · ${enrollment.completed.length}/${course.chapters.length} 章節</span><span class="progress-bar"><span style="--value: ${progress}%"></span></span></span>
        <a class="btn btn-small btn-primary" href="learn.html?course=${course.id}">繼續學習</a>
      </li>
    `;
  }).join("");
  const totalChapters = enrollments.reduce((sum, enrollment) => sum + (courseById(state, enrollment.courseId)?.chapters.length || 0), 0);
  const doneChapters = enrollments.reduce((sum, enrollment) => sum + enrollment.completed.length, 0);
  const overall = totalChapters ? Math.round((doneChapters / totalChapters) * 100) : 0;
  const todoItems = enrollments.flatMap((enrollment) => {
    const course = courseById(state, enrollment.courseId);
    const chapter = nextChapter(course, enrollment);
    return chapter ? [{ course, chapter }] : [];
  }).slice(0, 4);

  document.querySelector(".page-main").innerHTML = `
    <div class="page-shell">
      <div class="page-title">
        <div><h1>學習中心</h1><p>${escapeHtml(user.name)}，歡迎回來。這裡會同步顯示已購買課程、學習進度、最近觀看、待完成章節與預約提醒。</p></div>
        <a class="btn btn-matcha" href="learn.html?course=${enrollments[0]?.courseId || "course-n5-basic"}">繼續學習</a>
      </div>
      <section class="stats-grid">
        <div class="stat-card"><span>目前課程</span><strong>${enrollments.length}</strong></div>
        <div class="stat-card"><span>整體進度</span><strong>${overall}%</strong></div>
        <div class="stat-card"><span>待完成章節</span><strong>${Math.max(totalChapters - doneChapters, 0)}</strong></div>
        <div class="stat-card"><span>預約課</span><strong>${bookings.length}</strong></div>
      </section>
      <section class="section dashboard-grid">
        <div class="panel">
          <div class="panel-head"><h2>已購買課程</h2><span class="state-pill state-pink">${escapeHtml(user.name)}</span></div>
          <ul class="lesson-list">${rows || `<li class="empty-state">尚未購買課程，可先到課程列表加入購物車。</li>`}</ul>
        </div>
        <aside>
          <section class="panel">
            <div class="panel-head"><h2>待完成章節</h2><span class="state-pill state-warn">${todoItems.length} 項</span></div>
            <ul class="mini-list">
              ${todoItems.map((item, index) => `
                <li class="mini-item"><span class="item-icon">${index + 1}</span><span><strong class="item-title">${escapeHtml(item.chapter.title)}</strong><span class="item-meta">${escapeHtml(item.course.title)} · ${escapeHtml(item.chapter.duration)}</span></span><a class="btn btn-small btn-soft" href="learn.html?course=${item.course.id}">開始</a></li>
              `).join("") || `<li class="empty-state">目前沒有待完成章節。</li>`}
            </ul>
          </section>
          <section class="panel">
            <div class="panel-head"><h2>預約提醒</h2><span class="state-pill state-blue">本週</span></div>
            <ul class="reminder-list">
              ${bookings.map((booking) => `
                <li class="reminder-item"><span class="time-chip">${escapeHtml(booking.date)}<br>${escapeHtml(booking.time)}</span><span><strong class="item-title">${escapeHtml(booking.title)}</strong><span class="item-meta">${escapeHtml(booking.teacher)} · 60 分鐘</span></span><span class="state-pill ${statusClass(booking.status)}">${escapeHtml(booking.status)}</span></li>
              `).join("") || `<li class="empty-state">尚無預約提醒。</li>`}
            </ul>
          </section>
        </aside>
      </section>
    </div>
  `;
}

function renderLearnPage() {
  if (pageName() !== "learn.html") return;
  const state = readState();
  const user = getCurrentUser(state);
  const params = new URLSearchParams(window.location.search);
  const course = courseById(state, params.get("course")) || courseById(state, "course-n5-basic") || state.courses[0];
  if (!user) {
    document.querySelector(".page-main").innerHTML = `
      <div class="page-shell">
        <div class="page-title"><div><h1>課程觀看頁</h1><p>請先登入，系統才會記錄完成章節與最近觀看。</p></div><a class="btn btn-primary" href="login.html">登入</a></div>
      </div>
    `;
    return;
  }
  const enrollment = ensureEnrollment(state, user.email, course.id);
  writeState(state);
  const current = course.chapters.find((chapter) => chapter.id === enrollment.currentChapterId) || nextChapter(course, enrollment) || course.chapters[0];
  const progress = progressFor(course, enrollment);
  const completed = new Set(enrollment.completed);
  document.querySelector(".page-main").innerHTML = `
    <div class="page-shell">
      <div class="page-title">
        <div><h1>課程觀看頁</h1><p>錄播課程觀看體驗：章節清單、播放器、筆記、完成章節與下一課按鈕會更新 localStorage 學習進度。</p></div>
        <span class="state-pill state-pink">${escapeHtml(course.title)} · ${progress}%</span>
      </div>
      <section class="watch-layout">
        <aside class="panel">
          <div class="panel-head"><h2>章節清單</h2><span class="price-pill">${enrollment.completed.length}/${course.chapters.length}</span></div>
          <ul class="lesson-list">
            ${course.chapters.map((chapter, index) => {
              const done = completed.has(chapter.id);
              const active = chapter.id === current.id;
              return `
                <li class="lesson-item ${active ? "is-current" : ""}">
                  <span class="lesson-index">${done ? "✓" : active ? "▶" : index + 1}</span>
                  <span><strong class="item-title">${escapeHtml(chapter.title)}</strong><span class="item-meta">${escapeHtml(chapter.duration)} · ${done ? "已完成" : active ? "觀看中" : "待完成"}</span></span>
                  <button class="state-pill ${done ? "state-on" : active ? "state-pink" : ""}" type="button" data-jump-chapter="${chapter.id}">${done ? "完成" : active ? "現在" : "觀看"}</button>
                </li>
              `;
            }).join("")}
          </ul>
        </aside>
        <section>
          <div class="video-shell">
            <div class="video-placeholder">
              <div>
                <div class="play-button">▶</div>
                <h2 style="margin: 16px 0 6px;">${escapeHtml(current.title)}</h2>
                <p style="color: rgba(255,255,255,.78);">影片播放器 placeholder · 第一版網站展示用</p>
              </div>
            </div>
            <div class="video-info">
              <div>
                <strong class="item-title">現在播放：${escapeHtml(current.title)} · ${escapeHtml(current.duration)}</strong>
                <span class="item-meta">完成後會更新學習進度、最近觀看與待完成章節</span>
              </div>
              <div class="toolbar">
                <button class="btn btn-outline" type="button" data-complete-chapter="${current.id}" data-course-id="${course.id}">標記完成</button>
                <button class="btn btn-primary" type="button" data-next-chapter="${course.id}">下一課</button>
              </div>
            </div>
          </div>
          <div class="content-grid section" style="grid-template-columns: minmax(0, 1fr) 320px;">
            <section class="panel">
              <div class="panel-head"><h2>我的筆記</h2><span class="state-pill state-blue">自動儲存示意</span></div>
              <textarea class="note-box" data-note-course="${course.id}">は：主題標記，說明「我要談的是...」
が：強調主詞或新資訊
を：動作的受詞，例如 りんごを食べます</textarea>
            </section>
            <aside class="panel">
              <h2>本課任務</h2>
              <ul class="feature-list">
                <li>完成本章節影片</li>
                <li>記下三個例句</li>
                <li>預約一堂口說練習</li>
              </ul>
            </aside>
          </div>
        </section>
      </section>
    </div>
  `;
}

function productCard(product) {
  return `
    <article class="product-card">
      <div class="product-art" data-icon="${escapeHtml(product.icon)}" style="--image: ${escapeHtml(product.image)};"></div>
      <div class="card-body">
        <h3>${escapeHtml(product.title)}</h3>
        <p>${escapeHtml(product.description)}</p>
        <div class="card-meta"><span>庫存 ${Number(product.stock) >= 999 ? "數位商品" : escapeHtml(product.stock)}</span><span>${escapeHtml(product.category)}</span></div>
        <div class="card-foot"><span class="price">${formatMoney(product.price)}</span><button class="btn btn-small btn-primary" type="button" data-add-product="${product.id}">加入購物車</button></div>
      </div>
    </article>
  `;
}

function renderShopPage() {
  const grid = document.querySelector(".product-grid");
  if (!grid || pageName() !== "shop.html") return;
  const state = readState();
  grid.innerHTML = state.products.map(productCard).join("");
}

function renderCheckoutPage() {
  if (pageName() !== "checkout.html") return;
  const state = readState();
  const user = getCurrentUser(state) || DEFAULT_USERS[0];
  const items = cartItems(state);
  const total = cartTotal(state);
  document.querySelector(".page-main").innerHTML = `
    <div class="page-shell">
      <div class="page-title">
        <div><h1>結帳頁</h1><p>基礎金流與訂單流程展示：購物車、付款方式 placeholder、訂單摘要與完成後訂單紀錄。</p></div>
        <span class="notice">展示畫面，不串接真實金流、發票或 API。</span>
      </div>
      <section class="checkout-layout">
        <div>
          <section class="shop-panel">
            <div class="panel-head"><h2>購物車</h2><span class="state-pill state-pink">${items.length} 項</span></div>
            <ul class="cart-list">
              ${items.map((item) => `
                <li class="cart-item"><span class="item-icon">${escapeHtml(item.icon)}</span><span><strong class="item-title">${escapeHtml(item.title)}</strong><span class="item-meta">${escapeHtml(item.meta)}</span></span><strong>${formatMoney(item.price * item.qty)}</strong></li>
              `).join("") || `<li class="empty-state">購物車目前是空的，請先到課程或商城加入項目。</li>`}
            </ul>
            <div class="toolbar" style="margin-top: 14px;">
              <a class="btn btn-outline" href="courses.html">加購課程</a>
              <a class="btn btn-outline" href="shop.html">加購商品</a>
              <button class="btn btn-soft" type="button" data-clear-cart>清空購物車</button>
            </div>
          </section>
          <section class="shop-panel">
            <div class="panel-head"><h2>付款方式</h2><span class="state-pill state-blue">Placeholder</span></div>
            <div class="lesson-list" data-payment-group>
              ${["信用卡", "Line Pay", "台灣 Pay", "轉帳"].map((method, index) => `
                <button class="payment-card ${index === 0 ? "is-active" : ""}" type="button" data-payment="${method}">
                  <span class="pay-logo">${index === 0 ? "CC" : index === 1 ? "LP" : index === 2 ? "TW" : "ATM"}</span>
                  <span><strong class="item-title">${method}</strong><span class="item-meta">${method === "信用卡" ? "展示付款選項，不送出真實刷卡資料" : method === "轉帳" ? "可搭配後台人工對帳與訂單狀態" : "未串接 API，僅呈現第一版網站流程"}</span></span>
                  <span class="state-pill ${index === 0 ? "state-on" : method === "轉帳" ? "state-warn" : ""}">${index === 0 ? "推薦" : "可選"}</span>
                </button>
              `).join("")}
            </div>
          </section>
          <section class="shop-panel">
            <div class="panel-head"><h2>購買人資訊</h2><span class="state-pill state-pink">會員資料</span></div>
            <form class="form-grid" id="buyerForm">
              <div class="field"><label for="buyerName">姓名</label><input id="buyerName" name="name" value="${escapeHtml(user.name)}"></div>
              <div class="field"><label for="buyerEmail">Email</label><input id="buyerEmail" name="email" value="${escapeHtml(user.email)}"></div>
              <div class="field"><label for="buyerPhone">手機</label><input id="buyerPhone" name="phone" value="${escapeHtml(user.phone || "0912-345-678")}"></div>
              <div class="field"><label for="buyerNotice">訂單通知</label><select id="buyerNotice"><option>Email + 站內通知</option><option>僅 Email</option></select></div>
              <div class="field-full"><label for="buyerNote">備註</label><textarea id="buyerNote" placeholder="需要備註課程、商品或預約需求可填寫於此"></textarea></div>
            </form>
          </section>
        </div>
        <aside>
          <section class="shop-panel">
            <h2>訂單摘要</h2>
            ${items.map((item) => `<div class="summary-row"><span>${escapeHtml(item.title)} × ${item.qty}</span><strong>${formatMoney(item.price * item.qty)}</strong></div>`).join("")}
            <div class="summary-row"><span>第一版展示優惠</span><strong>${total > 0 ? "-NT$180" : "NT$0"}</strong></div>
            <div class="summary-row total"><span>應付金額</span><strong>${formatMoney(Math.max(total - 180, 0))}</strong></div>
            <button class="btn btn-primary" type="button" data-confirm-payment ${items.length ? "" : "disabled"}>確認付款</button>
            <p class="notice">付款完成後，訂單紀錄、學習權限與預約提醒會同步顯示在學習中心與後台。</p>
          </section>
          <section class="shop-panel">
            <h2>後續可擴充</h2>
            <ul class="feature-list">
              <li>依實際金流商 API 文件串接</li>
              <li>電子發票與會員發票紀錄</li>
              <li>庫存同步與出貨狀態</li>
              <li>付款失敗提醒與人工對帳</li>
            </ul>
          </section>
        </aside>
      </section>
    </div>
  `;
}

function renderOrderCompletePage() {
  if (pageName() !== "order-complete.html") return;
  const state = readState();
  const order = state.orders.find((item) => item.id === localStorage.getItem(LAST_ORDER_KEY)) || state.orders[0];
  document.querySelector(".page-main").innerHTML = `
    <section class="page-shell complete-hero">
      <div class="complete-card">
        <div class="complete-mark">✓</div>
        <h1>訂單完成</h1>
        <p>這是第一版網站的訂單完成頁展示。實際上線時可在此顯示付款結果、課程權限、預約提醒與商品出貨狀態。</p>
        <div class="summary-row"><span>訂單編號</span><strong>${escapeHtml(order.id)}</strong></div>
        <div class="summary-row"><span>付款方式</span><strong>${escapeHtml(order.payment)}展示</strong></div>
        <div class="summary-row"><span>訂單狀態</span><strong>${escapeHtml(order.status)}</strong></div>
        <div class="summary-row"><span>訂單金額</span><strong>${formatMoney(order.total)}</strong></div>
        <div class="toolbar" style="justify-content: center; margin-top: 22px;">
          <a class="btn btn-primary" href="dashboard.html">開始學習</a>
          <a class="btn btn-outline" href="admin.html">查看後台紀錄</a>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="page-shell content-grid">
        <section class="panel">
          <div class="panel-head"><h2>訂單紀錄</h2><span class="state-pill state-on">已建立</span></div>
          <ul class="cart-list">
            ${order.items.map((item) => `<li class="cart-item"><span class="item-icon">${item.kind === "course" ? "日" : "物"}</span><span><strong class="item-title">${escapeHtml(item.title)}</strong><span class="item-meta">數量 ${item.qty}</span></span><span class="state-pill ${item.kind === "course" ? "state-on" : "state-warn"}">${item.kind === "course" ? "可觀看" : "備貨中"}</span></li>`).join("")}
          </ul>
        </section>
        <aside class="panel">
          <h2>學生下一步</h2>
          <ul class="feature-list">
            <li>前往學習中心觀看第一堂課</li>
            <li>加入預約課提醒</li>
            <li>等待商品出貨通知</li>
            <li>後台同步建立訂單紀錄</li>
          </ul>
        </aside>
      </div>
    </section>
  `;
}

function renderAdminPage() {
  if (pageName() !== "admin.html") return;
  const state = readState();
  const main = document.querySelector(".page-main");
  const paidOrders = state.orders.filter((order) => order.status.includes("付款") || order.status.includes("完成")).length;
  main.innerHTML = `
    <div class="page-shell">
      <div class="page-title">
        <div><h1>後台管理</h1><p>教師、課程、學生、商品與訂單的營運管理示意，資料會寫入 localStorage，方便展示第一階段上線版流程。</p></div>
        <button class="btn btn-outline" type="button" data-reset-demo>重置 demo 資料</button>
      </div>
      <section class="stats-grid">
        <div class="stat-card"><span>上架課程</span><strong>${state.courses.length}</strong></div>
        <div class="stat-card"><span>訂單紀錄</span><strong>${state.orders.length}</strong></div>
        <div class="stat-card"><span>付費訂單</span><strong>${paidOrders}</strong></div>
        <div class="stat-card"><span>教師分類</span><strong>${state.teachers.length}</strong></div>
      </section>
      <section class="section admin-layout">
        <div>
          <section class="admin-panel">
            <div class="panel-head"><h2>課程管理</h2><span class="state-pill state-pink">新增 / 編輯 / 刪除</span></div>
            <form class="form-grid admin-form" id="adminCourseForm">
              <input type="hidden" name="id">
              <div class="field"><label>課程名稱</label><input name="title" required value="日語發音暖身課"></div>
              <div class="field"><label>分類</label><select name="category"><option>免費入門</option><option>初級日語</option><option>會話練習</option><option>進階付費</option></select></div>
              <div class="field"><label>價格</label><input name="price" type="number" min="0" value="900"></div>
              <div class="field"><label>時數</label><input name="duration" value="2 小時"></div>
              <div class="field"><label>適合對象</label><input name="audience" value="發音想打底的初學者"></div>
              <div class="field"><label>狀態</label><select name="status"><option>開放報名</option><option>可試看</option><option>熱賣中</option><option>可預約</option><option>即將開課</option><option>草稿</option></select></div>
              <div class="field-full"><label>課程描述</label><textarea name="description">用短講與跟讀練習，快速建立五十音發音的穩定節奏。</textarea></div>
              <div class="field-full toolbar"><button class="btn btn-primary" type="submit">儲存課程</button><button class="btn btn-outline" type="button" data-clear-course-form>清空表單</button></div>
            </form>
            <div class="table-wrap">
              <table>
                <thead><tr><th>課程名稱</th><th>類型</th><th>價格</th><th>學生數</th><th>狀態</th><th>操作</th></tr></thead>
                <tbody>
                  ${state.courses.map((course, index) => `
                    <tr><td data-label="課程名稱">${escapeHtml(course.title)}</td><td data-label="類型">${escapeHtml(course.category)}</td><td data-label="價格">${formatMoney(course.price)}</td><td data-label="學生數">${index === 0 ? "1,248" : 42 + index * 36}</td><td data-label="狀態"><span class="state-pill ${statusClass(course.status)}">${escapeHtml(course.status)}</span></td><td data-label="操作"><button class="table-btn" type="button" data-edit-course="${course.id}">編輯</button><button class="table-btn danger" type="button" data-delete-course="${course.id}">刪除</button></td></tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </section>
          <section class="admin-panel">
            <div class="panel-head"><h2>商品管理</h2><span class="state-pill state-blue">商城資料</span></div>
            <form class="form-grid admin-form" id="adminProductForm">
              <input type="hidden" name="id">
              <div class="field"><label>商品名稱</label><input name="title" required value="日語手帳貼紙"></div>
              <div class="field"><label>分類</label><select name="category"><option>教材</option><option>文具</option><option>幸運小物</option></select></div>
              <div class="field"><label>價格</label><input name="price" type="number" min="0" value="160"></div>
              <div class="field"><label>庫存</label><input name="stock" type="number" min="0" value="60"></div>
              <div class="field"><label>圖示文字</label><input name="icon" value="貼"></div>
              <div class="field-full"><label>商品描述</label><textarea name="description">搭配日語筆記的柔色貼紙，用於標記單字、文法與複習日。</textarea></div>
              <div class="field-full toolbar"><button class="btn btn-primary" type="submit">儲存商品</button><button class="btn btn-outline" type="button" data-clear-product-form>清空表單</button></div>
            </form>
            <div class="table-wrap">
              <table>
                <thead><tr><th>商品名稱</th><th>分類</th><th>價格</th><th>庫存</th><th>操作</th></tr></thead>
                <tbody>
                  ${state.products.map((product) => `
                    <tr><td data-label="商品名稱">${escapeHtml(product.title)}</td><td data-label="分類">${escapeHtml(product.category)}</td><td data-label="價格">${formatMoney(product.price)}</td><td data-label="庫存">${escapeHtml(product.stock)}</td><td data-label="操作"><button class="table-btn" type="button" data-edit-product="${product.id}">編輯</button><button class="table-btn danger" type="button" data-delete-product="${product.id}">刪除</button></td></tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </section>
          <section class="admin-panel">
            <div class="panel-head"><h2>學生名單</h2><span class="price-pill">最近登入</span></div>
            <div class="table-wrap">
              <table>
                <thead><tr><th>學生</th><th>Email</th><th>購買課程</th><th>整體進度</th><th>預約狀態</th></tr></thead>
                <tbody>
                  ${state.users.map((user) => {
                    const enrollments = state.enrollments[user.email] || [];
                    const avg = enrollments.length ? Math.round(enrollments.reduce((sum, item) => sum + progressFor(courseById(state, item.courseId), item), 0) / enrollments.length) : 0;
                    return `<tr><td data-label="學生">${escapeHtml(user.name)}</td><td data-label="Email">${escapeHtml(user.email)}</td><td data-label="購買課程">${enrollments.length}</td><td data-label="整體進度">${avg}%</td><td data-label="預約狀態"><span class="state-pill ${state.bookings[user.email]?.length ? "state-on" : ""}">${state.bookings[user.email]?.length ? "已預約" : "尚未預約"}</span></td></tr>`;
                  }).join("")}
                </tbody>
              </table>
            </div>
          </section>
        </div>
        <aside>
          <section class="admin-panel">
            <div class="panel-head"><h2>訂單紀錄</h2><a class="btn btn-small btn-outline" href="order-complete.html">看訂單頁</a></div>
            <ul class="cart-list">
              ${state.orders.map((order) => `
                <li class="cart-item"><span class="item-icon">#</span><span><strong class="item-title">${escapeHtml(order.id)}</strong><span class="item-meta">${escapeHtml(order.customer)} · ${formatMoney(order.total)}</span></span><select class="status-select" data-order-status="${order.id}"><option ${order.status === "已付款" ? "selected" : ""}>已付款</option><option ${order.status === "待匯款" ? "selected" : ""}>待匯款</option><option ${order.status === "備貨中" ? "selected" : ""}>備貨中</option><option ${order.status === "已完成" ? "selected" : ""}>已完成</option><option ${order.status === "已取消" ? "selected" : ""}>已取消</option></select></li>
              `).join("")}
            </ul>
          </section>
          <section class="admin-panel">
            <div class="panel-head"><h2>教師管理</h2><span class="state-pill state-on">日語為主</span></div>
            <form class="form-grid admin-form" id="adminTeacherForm">
              <input type="hidden" name="id">
              <div class="field-full"><label>教師名稱</label><input name="name" value="新日語老師"></div>
              <div class="field"><label>語言</label><select name="language"><option>日語</option><option>韓語</option><option>英語</option></select></div>
              <div class="field"><label>狀態</label><select name="status"><option>啟用</option><option>規劃中</option><option>停用</option></select></div>
              <div class="field-full"><label>專長</label><input name="specialty" value="五十音 / 初級會話"></div>
              <div class="field-full"><label>可預約時段</label><input name="slots" value="週六上午"></div>
              <div class="field-full toolbar"><button class="btn btn-matcha" type="submit">儲存教師</button></div>
            </form>
            <div class="teacher-stack">
              ${state.teachers.map((teacher) => `
                <div class="teacher-card">
                  <div class="teacher-photo" style="--image: url('${escapeHtml(teacher.photo || "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=500&q=80")}')"></div>
                  <div><h3>${escapeHtml(teacher.name)}</h3><p>${escapeHtml(teacher.language)} · ${escapeHtml(teacher.specialty)}</p><span class="state-pill ${statusClass(teacher.status)}">${escapeHtml(teacher.status)}</span><div class="mini-actions"><button class="table-btn" type="button" data-edit-teacher="${teacher.id}">編輯</button><button class="table-btn danger" type="button" data-delete-teacher="${teacher.id}">刪除</button></div></div>
                </div>
              `).join("")}
            </div>
          </section>
          <section class="admin-panel">
            <div class="panel-head"><h2>正式版執行架構</h2><a class="btn btn-small btn-outline" href="architecture.html">完整說明</a></div>
            <ul class="feature-list">
              <li>正式版以 WordPress 作為網站核心。</li>
              <li>LMS 管理課程、章節、會員學習進度。</li>
              <li>WooCommerce 管理商品、購物車、訂單。</li>
              <li>依實際金流商 API 文件與電子發票規格確認後串接。</li>
              <li>多教師分潤、點數折抵、複雜預約與退費列為後續擴充。</li>
            </ul>
          </section>
        </aside>
      </section>
    </div>
  `;
}

function createOrderFromCart() {
  const state = readState();
  const user = getCurrentUser(state) || DEFAULT_USERS[0];
  const items = cartItems(state);
  if (!items.length) return null;
  const buyerForm = document.querySelector("#buyerForm");
  const formData = buyerForm ? new FormData(buyerForm) : null;
  const customer = formData?.get("name") || user.name;
  const email = formData?.get("email") || user.email;
  const payment = document.querySelector("[data-payment].is-active")?.dataset.payment || "信用卡";
  const order = {
    id: `ORD-${Date.now()}`,
    customer,
    email,
    payment,
    status: payment === "轉帳" ? "待匯款" : "已付款",
    createdAt: new Date().toLocaleString("zh-TW", { hour12: false }),
    items: items.map((item) => ({ kind: item.kind, id: item.id, title: item.title, price: item.price, qty: item.qty })),
    total: Math.max(cartTotal(state) - 180, 0),
  };
  state.orders.unshift(order);
  if (!state.users.some((item) => item.email === email)) {
    state.users.push({ name: customer, email, password: "demo1234", phone: formData?.get("phone") || "" });
  }
  items.filter((item) => item.kind === "course").forEach((item) => ensureEnrollment(state, email, item.id));
  state.cart = [];
  writeState(state);
  setCurrentEmail(email);
  localStorage.setItem(LAST_ORDER_KEY, order.id);
  return order;
}

function bindGlobalEvents() {
  document.addEventListener("click", (event) => {
    const submitButton = event.target.closest("button[type='submit']");
    const submitForm = submitButton?.form;
    if (submitForm && isManagedForm(submitForm)) {
      event.preventDefault();
      handleManagedForm(submitForm);
      return;
    }

    const choiceButton = event.target.closest("[data-choice-group] button");
    if (choiceButton) {
      const group = choiceButton.closest("[data-choice-group]");
      group.querySelectorAll("button").forEach((item) => item.classList.remove("is-active"));
      choiceButton.classList.add("is-active");
    }

    const paymentButton = event.target.closest("[data-payment]");
    if (paymentButton) {
      document.querySelectorAll("[data-payment]").forEach((item) => item.classList.remove("is-active"));
      paymentButton.classList.add("is-active");
    }

    const logoutButton = event.target.closest("[data-logout]");
    if (logoutButton) {
      setCurrentEmail("");
      showToast("已登出 demo 帳號");
      if (pageName() === "login.html") {
        renderLoginPage();
        renderNav();
      } else {
        window.setTimeout(() => window.location.assign("login.html"), 250);
      }
    }

    const resetButton = event.target.closest("[data-reset-demo]");
    if (resetButton) resetDemoState(true);

    const courseButton = event.target.closest("[data-add-course]");
    if (courseButton) {
      addToCart("course", courseButton.dataset.addCourse);
      showToast("課程已加入購物車");
      if (courseButton.hasAttribute("data-go-checkout")) window.setTimeout(() => window.location.assign("checkout.html"), 350);
    }

    const productButton = event.target.closest("[data-add-product]");
    if (productButton) {
      addToCart("product", productButton.dataset.addProduct);
      productButton.textContent = "已加入";
      productButton.classList.add("btn-matcha");
      showToast("商品已加入購物車");
    }

    const clearCart = event.target.closest("[data-clear-cart]");
    if (clearCart) {
      const state = readState();
      state.cart = [];
      writeState(state);
      renderCheckoutPage();
      showToast("購物車已清空");
    }

    const confirmPayment = event.target.closest("[data-confirm-payment]");
    if (confirmPayment) {
      const order = createOrderFromCart();
      if (order) window.location.assign("order-complete.html");
    }

    const completeChapter = event.target.closest("[data-complete-chapter]");
    if (completeChapter) {
      const state = readState();
      const user = getCurrentUser(state);
      if (!user) return;
      const course = courseById(state, completeChapter.dataset.courseId);
      const chapter = course?.chapters.find((item) => item.id === completeChapter.dataset.completeChapter);
      const enrollment = ensureEnrollment(state, user.email, completeChapter.dataset.courseId);
      if (!enrollment.completed.includes(chapter.id)) enrollment.completed.push(chapter.id);
      enrollment.recent = chapter.title;
      const next = nextChapter(course, enrollment);
      enrollment.currentChapterId = next?.id || chapter.id;
      enrollment.updatedAt = "2026-05-07";
      writeState(state);
      showToast("已標記完成，學習進度已更新");
      renderLearnPage();
    }

    const jumpChapter = event.target.closest("[data-jump-chapter]");
    if (jumpChapter) {
      const state = readState();
      const user = getCurrentUser(state);
      const params = new URLSearchParams(window.location.search);
      const courseId = params.get("course") || "course-n5-basic";
      const enrollment = ensureEnrollment(state, user.email, courseId);
      const course = courseById(state, courseId);
      const chapter = course?.chapters.find((item) => item.id === jumpChapter.dataset.jumpChapter);
      enrollment.currentChapterId = jumpChapter.dataset.jumpChapter;
      enrollment.recent = chapter?.title || enrollment.recent;
      writeState(state);
      renderLearnPage();
    }

    const nextChapterButton = event.target.closest("[data-next-chapter]");
    if (nextChapterButton) {
      const state = readState();
      const user = getCurrentUser(state);
      const course = courseById(state, nextChapterButton.dataset.nextChapter);
      const enrollment = ensureEnrollment(state, user.email, course.id);
      const currentIndex = course.chapters.findIndex((chapter) => chapter.id === enrollment.currentChapterId);
      const next = course.chapters[Math.min(currentIndex + 1, course.chapters.length - 1)];
      enrollment.currentChapterId = next.id;
      enrollment.recent = next.title;
      writeState(state);
      renderLearnPage();
    }

    const editCourse = event.target.closest("[data-edit-course]");
    if (editCourse) fillCourseForm(editCourse.dataset.editCourse);
    const deleteCourse = event.target.closest("[data-delete-course]");
    if (deleteCourse) {
      const state = readState();
      state.courses = state.courses.filter((course) => course.id !== deleteCourse.dataset.deleteCourse);
      writeState(state);
      renderAdminPage();
      showToast("課程已刪除");
    }

    const clearCourseForm = event.target.closest("[data-clear-course-form]");
    if (clearCourseForm) document.querySelector("#adminCourseForm")?.reset();

    const editProduct = event.target.closest("[data-edit-product]");
    if (editProduct) fillProductForm(editProduct.dataset.editProduct);
    const deleteProduct = event.target.closest("[data-delete-product]");
    if (deleteProduct) {
      const state = readState();
      state.products = state.products.filter((product) => product.id !== deleteProduct.dataset.deleteProduct);
      writeState(state);
      renderAdminPage();
      showToast("商品已刪除");
    }

    const clearProductForm = event.target.closest("[data-clear-product-form]");
    if (clearProductForm) document.querySelector("#adminProductForm")?.reset();

    const editTeacher = event.target.closest("[data-edit-teacher]");
    if (editTeacher) fillTeacherForm(editTeacher.dataset.editTeacher);
    const deleteTeacher = event.target.closest("[data-delete-teacher]");
    if (deleteTeacher) {
      const state = readState();
      state.teachers = state.teachers.filter((teacher) => teacher.id !== deleteTeacher.dataset.deleteTeacher);
      writeState(state);
      renderAdminPage();
      showToast("教師已刪除");
    }
  });

  document.addEventListener("change", (event) => {
    const orderSelect = event.target.closest("[data-order-status]");
    if (orderSelect) {
      const state = readState();
      const order = state.orders.find((item) => item.id === orderSelect.dataset.orderStatus);
      if (order) order.status = orderSelect.value;
      writeState(state);
      showToast("訂單狀態已更新");
    }
  });

  document.addEventListener("submit", (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;
    event.preventDefault();
    handleManagedForm(form);
  });
}

function handleManagedForm(form) {
  const formId = form.getAttribute("id");
  if (formId === "loginForm") handleLogin(form);
  if (formId === "registerForm") handleRegister(form);
  if (formId === "adminCourseForm") handleCourseSave(form);
  if (formId === "adminProductForm") handleProductSave(form);
  if (formId === "adminTeacherForm") handleTeacherSave(form);
}

function isManagedForm(form) {
  return ["loginForm", "registerForm", "adminCourseForm", "adminProductForm", "adminTeacherForm"].includes(form.getAttribute("id"));
}

function handleLogin(form) {
  const data = new FormData(form);
  const state = readState();
  const user = state.users.find((item) => item.email === data.get("email") && item.password === data.get("password"));
  if (!user) {
    showToast("登入失敗，請使用 demo 帳號或先註冊");
    return;
  }
  setCurrentEmail(user.email);
  showToast("登入成功");
  window.setTimeout(() => window.location.assign("dashboard.html"), 350);
}

function handleRegister(form) {
  const data = new FormData(form);
  const state = readState();
  const email = String(data.get("email")).trim();
  if (!email) return;
  let user = state.users.find((item) => item.email === email);
  if (!user) {
    user = { name: String(data.get("name")).trim() || "新學生", email, password: String(data.get("password")) || "demo1234", phone: "" };
    state.users.push(user);
  } else {
    user.name = String(data.get("name")).trim() || user.name;
    user.password = String(data.get("password")) || user.password;
  }
  ensureEnrollment(state, email, "course-kana-free");
  state.bookings[email] ||= [{ title: "一對一：學習診斷", teacher: "安達老師", date: "05/18", time: "19:30", status: "提醒中" }];
  writeState(state);
  setCurrentEmail(email);
  showToast("註冊完成，已登入");
  window.setTimeout(() => window.location.assign("dashboard.html"), 350);
}

function handleCourseSave(form) {
  const data = new FormData(form);
  const state = readState();
  const id = String(data.get("id") || "").trim() || `course-${Date.now()}`;
  const existing = courseById(state, id);
  const course = {
    id,
    title: String(data.get("title")).trim(),
    category: String(data.get("category")),
    type: String(data.get("category")).includes("會話") ? "直播/預約" : Number(data.get("price")) === 0 ? "免費錄播" : "付費錄播",
    price: Number(data.get("price") || 0),
    duration: String(data.get("duration")).trim(),
    audience: String(data.get("audience")).trim(),
    status: String(data.get("status")),
    kana: existing?.kana || "日",
    image: existing?.image || "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=900&q=80",
    description: String(data.get("description")).trim(),
    chapters: existing?.chapters || [
      { id: `${id}-01`, title: "課程暖身與學習目標", duration: "12 分鐘", type: "試看" },
      { id: `${id}-02`, title: "核心句型示範", duration: "22 分鐘", type: "影片" },
      { id: `${id}-03`, title: "課後練習與小測驗", duration: "10 分鐘", type: "測驗" },
    ],
  };
  if (existing) Object.assign(existing, course);
  else state.courses.unshift(course);
  writeState(state);
  renderAdminPage();
  showToast("課程已儲存，前台課程列表會同步更新");
}

function fillCourseForm(id) {
  const state = readState();
  const course = courseById(state, id);
  const form = document.querySelector("#adminCourseForm");
  if (!course || !form) return;
  form.elements.id.value = course.id;
  form.elements.title.value = course.title;
  form.elements.category.value = course.category;
  form.elements.price.value = course.price;
  form.elements.duration.value = course.duration;
  form.elements.audience.value = course.audience;
  form.elements.status.value = course.status;
  form.elements.description.value = course.description;
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function handleProductSave(form) {
  const data = new FormData(form);
  const state = readState();
  const id = String(data.get("id") || "").trim() || `product-${Date.now()}`;
  const existing = productById(state, id);
  const product = {
    id,
    title: String(data.get("title")).trim(),
    category: String(data.get("category")),
    price: Number(data.get("price") || 0),
    stock: Number(data.get("stock") || 0),
    icon: String(data.get("icon") || "物").slice(0, 2),
    image: existing?.image || "linear-gradient(135deg, #fff0f4, #e7f4fb)",
    description: String(data.get("description")).trim(),
  };
  if (existing) Object.assign(existing, product);
  else state.products.unshift(product);
  writeState(state);
  renderAdminPage();
  showToast("商品已儲存，商城會同步更新");
}

function fillProductForm(id) {
  const state = readState();
  const product = productById(state, id);
  const form = document.querySelector("#adminProductForm");
  if (!product || !form) return;
  form.elements.id.value = product.id;
  form.elements.title.value = product.title;
  form.elements.category.value = product.category;
  form.elements.price.value = product.price;
  form.elements.stock.value = product.stock;
  form.elements.icon.value = product.icon;
  form.elements.description.value = product.description;
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function handleTeacherSave(form) {
  const data = new FormData(form);
  const state = readState();
  const id = String(data.get("id") || "").trim() || `teacher-${Date.now()}`;
  const existing = state.teachers.find((teacher) => teacher.id === id);
  const teacher = {
    id,
    name: String(data.get("name")).trim(),
    language: String(data.get("language")),
    category: String(data.get("language")) === "日語" ? "日語老師" : "後續擴充",
    specialty: String(data.get("specialty")).trim(),
    status: String(data.get("status")),
    photo: existing?.photo || "",
    slots: String(data.get("slots")).trim(),
  };
  if (existing) Object.assign(existing, teacher);
  else state.teachers.unshift(teacher);
  writeState(state);
  renderAdminPage();
  showToast("教師資料已儲存");
}

function fillTeacherForm(id) {
  const state = readState();
  const teacher = state.teachers.find((item) => item.id === id);
  const form = document.querySelector("#adminTeacherForm");
  if (!teacher || !form) return;
  form.elements.id.value = teacher.id;
  form.elements.name.value = teacher.name;
  form.elements.language.value = teacher.language;
  form.elements.status.value = teacher.status;
  form.elements.specialty.value = teacher.specialty;
  form.elements.slots.value = teacher.slots;
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function initPage() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("reset") === "1") {
    resetDemoState(false);
    params.delete("reset");
    const cleanQuery = params.toString();
    const cleanUrl = `${window.location.pathname.split("/").pop() || "index.html"}${cleanQuery ? `?${cleanQuery}` : ""}`;
    window.history.replaceState(null, "", cleanUrl);
  }
  readState();
  renderLoginPage();
  renderCourseDetailPage();
  renderCoursesPage();
  renderDashboardPage();
  renderLearnPage();
  renderShopPage();
  renderCheckoutPage();
  renderOrderCompletePage();
  renderAdminPage();
  renderNav();
  renderDemoDisclaimer();
  bindGlobalEvents();
}

document.addEventListener("DOMContentLoaded", initPage);
