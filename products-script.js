const productsList = [
  {
    prdId: 1,
    prdName: "Hikvision Dome HD 2MP",
    imgPath: "./img/cctv-dome-2mp.png",
    actualPrice: 1900,
    discountPrice: 1650,
  },

  {
    prdId: 2,
    prdName: "Hikvision DOM-CLR HD 2MP",
    imgPath: "./img/cctv-dom-clr-hd-2mp.png",
    actualPrice: 2600,
    discountPrice: 2150,
  },

  {
    prdId: 3,
    prdName: "Hikvision Bullet CLR HD 2MP",
    imgPath: "./img/cctv-bullet-clr-hd-2mp.png",
    actualPrice: 2600,
    discountPrice: 2250,
  },

  {
    prdId: 4,
    prdName: "Hikvision Bullet 2MP HD Camera",
    imgPath: "./img/cctv-bullet-2mp-hd-camera.png",
    actualPrice: 2100,
    discountPrice: 1850,
  },

  {
    prdId: 5,
    prdName: "Hikvision Bullet 2MP HD Camera",
    imgPath: "./img/cctv-bullet-2mp-hd-camera2.png",
    actualPrice: 2200,
    discountPrice: 1850,
  },

  {
    prdId: 6,
    prdName: "Hikvision Hik-DOM-2MP-Mic",
    imgPath: "./img/cctv-hik-dom-2mp-mic.png",
    actualPrice: 2000,
    discountPrice: 1750,
  },

  {
    prdId: 7,
    prdName: "Hikvision 5MP Bull Metal",
    imgPath: "./img/cctv-bullet-2mp-hd-camera2.png",
    actualPrice: 2250,
    discountPrice: 1950,
  },

  {
    prdId: 8,
    prdName: "Hikvision Dome Camera 5MP",
    imgPath: "./img/cctv-dome-camera-5mp.png",
    actualPrice: 2520,
    discountPrice: 1850,
  },
];

const prdWrapperEl = document.querySelector(".products-wrapper");

const prdsListAsString = productsList
  .map(
    (prd) => `
  <div class="product">
    <div class="product-img">
      <img src="${prd.imgPath}" alt="${prd.prdName}" />
    </div>
    <h4>${prd.prdName}</h4>
    <h5><span>₹${prd.actualPrice}</span>₹${prd.discountPrice}</h5>
  </div>
`
  )
  .join("\n");

prdWrapperEl.insertAdjacentHTML("beforeend", prdsListAsString);

// sticky header logic
const stickyHeaderObserverHandler = function (e) {
  console.log(e[0]);
  if (!e[0].isIntersecting) {
    document.querySelector(".nav-bar").classList.add("sticky");
  } else {
    document.querySelector(".nav-bar").classList.remove("sticky");
  }
};

const stickyHeaderObserver = new IntersectionObserver(
  stickyHeaderObserverHandler,
  { root: null, rootMargin: "-86px" }
);

stickyHeaderObserver.observe(
  document.querySelector(".products-banner-section")
);

// navigation logic

document
  .querySelector(".nav-links li a[data-section='products']")
  .addEventListener("click", function (e) {
    e.preventDefault();
  });

document
  .querySelector(
    ".footer-section .nav-links-list li a[data-section='products']"
  )
  .addEventListener("click", function (e) {
    e.preventDefault();
  });
