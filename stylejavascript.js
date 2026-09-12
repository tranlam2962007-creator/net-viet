/* =========================
   THANH ĐIỀU HƯỚNG
========================= */

const nav = document.querySelector(".navigation");

if (nav) {
  const links = nav.querySelectorAll("a");
  const indicator = nav.querySelector(".navigation-indicator");

  function moveIndicator(link) {
    if (!indicator || !link) {
      return;
    }

    indicator.style.left = link.offsetLeft + "px";
    indicator.style.width = link.offsetWidth + "px";
  }

  const currentPage = window.location.pathname.split("/").pop();

  let activeLink = null;

  links.forEach(function (link) {
    const href = link.getAttribute("href");

    if (!href) {
      return;
    }

    const linkPage = href.split("/").pop().split("#")[0];

    if (
      linkPage === currentPage ||
      (currentPage === "" && linkPage === "index.html")
    ) {
      activeLink = link;
    }
  });

  if (!activeLink && links.length > 0) {
    activeLink = links[0];
  }

  links.forEach(function (link) {
    link.classList.remove("active");
  });

  if (activeLink) {
    activeLink.classList.add("active");
    moveIndicator(activeLink);
  }

  window.addEventListener("resize", function () {
    if (activeLink) {
      moveIndicator(activeLink);
    }
  });
}

/* =========================
   BANNER
========================= */

const heroData = [
  {
    number: "01",
    image: "images/hero.jpg",
    title: "Nhìn Lịch Sử<br>Qua Nghệ Thuật",
    description:
      "Khám phá hành trình ngàn năm văn hiến Việt Nam qua những kiệt tác nghệ thuật đặc sắc.",
  },

  {
    number: "02",
    image: "images/hero-2.jpg",
    title: "Dấu Ấn<br>Thời Gian",
    description:
      "Mỗi tác phẩm là một lát cắt của lịch sử, kể lại những câu chuyện đã đi qua nhiều thế hệ.",
  },

  {
    number: "03",
    image: "images/hero-3.jpg",
    title: "Hồn Việt<br>Trong Từng Nét Vẽ",
    description:
      "Tìm hiểu vẻ đẹp văn hóa Việt Nam được lưu giữ qua hội họa và nghệ thuật dân gian.",
  },

  {
    number: "04",
    image: "images/hero-4.jpg",
    title: "Vẻ Đẹp<br>Nghìn Năm Văn Hiến",
    description:
      "Từ những công trình cổ kính đến các tác phẩm nghệ thuật đặc sắc của dân tộc.",
  },

  {
    number: "05",
    image: "images/hero-5.jpg",
    title: "Chạm Vào<br>Quá Khứ",
    description:
      "Một hành trình khám phá lịch sử Việt Nam bằng hình ảnh, nghệ thuật và những câu chuyện.",
  },
];

let currentHero = 0;

const hero = document.querySelector(".hero");
const heroNumber = document.getElementById("heroNumber");
const heroTitle = document.querySelector(".hero h2");
const heroDescription = document.querySelector(".hero-description");

function updateHero() {
  if (!hero || !heroNumber || !heroTitle || !heroDescription) {
    return;
  }

  const data = heroData[currentHero];

  hero.style.backgroundImage =
    "linear-gradient(90deg, rgba(24,13,8,.95), rgba(24,13,8,.52), rgba(24,13,8,.15)), url('" +
    data.image +
    "')";

  heroNumber.textContent = data.number;
  heroTitle.innerHTML = data.title;
  heroDescription.textContent = data.description;
}

function nextHero() {
  currentHero++;

  if (currentHero >= heroData.length) {
    currentHero = 0;
  }

  updateHero();
}

function previousHero() {
  currentHero--;

  if (currentHero < 0) {
    currentHero = heroData.length - 1;
  }

  updateHero();
}

if (hero) {
  setInterval(nextHero, 7000);
}

/* =========================
   NÚT KHÁM PHÁ
========================= */

function scrollToExplore() {
  const explore = document.getElementById("explore");

  if (explore) {
    explore.scrollIntoView({
      behavior: "smooth",
    });
  }
}

const themeButton = document.getElementById("themeButton");

if (themeButton) {
  themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      themeButton.textContent = "☾";
    } else {
      themeButton.textContent = "☼";
    }
  });
}

const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("input", function () {
    const keyword = searchInput.value.toLowerCase().trim();

    const elements = document.querySelectorAll(
      ".topic-card, .featured-artwork, .small-artworks figure, .timeline-item, .news-item, .discover-card",
    );

    elements.forEach(function (element) {
      element.classList.remove("search-result");
      element.classList.remove("search-hidden");

      if (keyword === "") {
        return;
      }

      const text = element.textContent.toLowerCase();

      if (text.includes(keyword)) {
        element.classList.add("search-result");
      } else {
        element.classList.add("search-hidden");
      }
    });
  });
}

const timelineItems = document.querySelectorAll(".timeline-item");

timelineItems.forEach(function (item) {
  item.addEventListener("click", function () {
    timelineItems.forEach(function (other) {
      other.classList.remove("active");
    });

    item.classList.add("active");
  });
});

const topicCards = document.querySelectorAll(".topic-card");

topicCards.forEach(function (card) {
  card.addEventListener("click", function () {
    topicCards.forEach(function (other) {
      other.style.transform = "";
    });

    card.style.transform = "translateY(-6px)";
  });
});

const artworkButton = document.querySelector(".featured-artwork .dark-button");

if (artworkButton) {
  artworkButton.addEventListener("click", function () {
    alert(
      "Lễ rước vua\n\n" +
        "Một tác phẩm tái hiện không gian cung đình " +
        "và nghi lễ truyền thống của Việt Nam.",
    );
  });
}

document.querySelectorAll(".primary-button").forEach(function (button) {
  button.addEventListener("mouseenter", function () {
    button.style.transform = "translateY(-2px)";
  });

  button.addEventListener("mouseleave", function () {
    button.style.transform = "";
  });
});

window.addEventListener("scroll", function () {
  const header = document.querySelector(".top-header");

  if (!header) {
    return;
  }

  if (window.scrollY > 50) {
    header.style.boxShadow = "0 5px 25px rgba(0,0,0,.35)";
  } else {
    header.style.boxShadow = "";
  }
});

const discoverFilterButtons = document.querySelectorAll(".discover-filter-btn");

const discoverCards = document.querySelectorAll(".discover-card");

const discoverResultTitle = document.getElementById("discoverResultTitle");

const discoverResultCount = document.getElementById("discoverResultCount");

const discoverEmpty = document.getElementById("discoverEmpty");

const discoverCategoryNames = {
  all: "Tất cả tác phẩm",

  painting: "Hội họa",

  sculpture: "Điêu khắc",

  architecture: "Kiến trúc",

  folk: "Nghệ thuật nhân gian",

  costume: "Trang phục thời xưa",

  pottery: "Gốm thời xưa",
};

function filterDiscoverArtworks(category) {
  let visibleCount = 0;

  discoverCards.forEach(function (card) {
    const cardCategory = card.dataset.category;

    const shouldShow = category === "all" || cardCategory === category;

    if (shouldShow) {
      card.classList.remove("discover-hidden");

      card.classList.remove("discover-filtering");

      visibleCount++;
    } else {
      card.classList.add("discover-hidden");
    }
  });

  if (discoverResultTitle) {
    discoverResultTitle.textContent =
      discoverCategoryNames[category] || "Tất cả tác phẩm";
  }

  if (discoverResultCount) {
    discoverResultCount.textContent = visibleCount + " tác phẩm";
  }

  if (discoverEmpty) {
    if (visibleCount === 0) {
      discoverEmpty.classList.add("show");
    } else {
      discoverEmpty.classList.remove("show");
    }
  }
}

discoverFilterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedCategory = button.dataset.category;

    discoverFilterButtons.forEach(function (otherButton) {
      otherButton.classList.remove("active");
    });

    button.classList.add("active");

    filterDiscoverArtworks(selectedCategory);
  });
});

if (discoverCards.length > 0 && discoverFilterButtons.length > 0) {
  filterDiscoverArtworks("all");
}
updateHero();
