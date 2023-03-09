"use strict";

console.log("hi");

const bannerArrows = document.querySelectorAll(".banner-arrow");
const sliderDots = document.querySelectorAll(".slider-dots span");

const switchCards = function () {
  document.querySelector(".banner-card-0").classList.toggle("active");
  document.querySelector(".banner-card-1").classList.toggle("active");
  document.querySelectorAll(".slider-dots span")[0].classList.toggle("active");
  document.querySelectorAll(".slider-dots span")[1].classList.toggle("active");
};

const switchSpecificCard = function (cardToActivate) {
  Array.from(document.querySelectorAll(".banner-card"), (el) =>
    el.classList.remove("active")
  );
  document
    .querySelector(`.banner-card-${cardToActivate}`)
    .classList.add("active");
  Array.from(document.querySelectorAll(".slider-dots span"), (el) =>
    el.classList.remove("active")
  );
  document
    .querySelectorAll(".slider-dots span")
    [cardToActivate].classList.add("active");
};

for (let i = 0; i < bannerArrows.length; i++) {
  bannerArrows[i].addEventListener("click", switchCards);
  sliderDots[i].addEventListener("click", function () {
    switchSpecificCard(i);
  });
}

// products logic

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
  .slice(0, 6)
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

// animation observer logic
const animationObserverHandler = function (e, observer) {
  e.forEach((entry) => {
    if (entry.isIntersecting) {
      // console.log(entry);
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
};

const animationObserver = new IntersectionObserver(animationObserverHandler, {
  root: null,
  // rootMargin: "-50",
  threshold: 0.6,
});

const aboutUsImgEl = document.querySelector(".about-us-img");
const securityImgEl = document.querySelector(".security-img");

[aboutUsImgEl, securityImgEl].forEach((el) => animationObserver.observe(el));

// Top navigation logic

const navLinksAsArray = Array.from(
  document.querySelectorAll(".nav-links li a"),
  (el) => el
);
console.log(navLinksAsArray);
navLinksAsArray.forEach((link) => {
  link.addEventListener("click", function (e) {
    if (
      link.dataset.section === "products" ||
      link.dataset.section === "contact"
    )
      return;
    e.preventDefault();
    if (link.closest("li").classList.contains("active")) return;
    e.target
      .closest(".nav-links")
      .querySelector(".active")
      .classList.remove("active");
    // e.target.closest("li").classList.add("active");
    const scrollTo = e.target.dataset.section;
    document
      .querySelector(`#${scrollTo}`)
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Bottom navigation logic

const bottomNavLinksAsArray = Array.from(
  document.querySelectorAll(".footer-section .nav-links-list li a"),
  (el) => el
);
console.log(navLinksAsArray);
bottomNavLinksAsArray.forEach((link) => {
  link.addEventListener("click", function (e) {
    if (
      link.dataset.section === "products" ||
      link.dataset.section === "contact"
    )
      return;
    e.preventDefault();
    // if (link.closest("li").classList.contains("active")) return;
    // e.target
    //   .closest(".nav-links")
    //   .querySelector(".active")
    //   .classList.remove("active");
    // e.target.closest("li").classList.add("active");
    const scrollTo = e.target.dataset.section;
    document
      .querySelector(`#${scrollTo}`)
      .scrollIntoView({ behavior: "smooth" });
  });
});

// numbers increment logic

const statsAnimDur = 2;

const statValEls = [
  document.querySelector(".stats div:first-child h3 .stat-value"),
  document.querySelector(".stats div:nth-child(2) h3 .stat-value"),
  document.querySelector(".stats div:last-child h3 .stat-value"),
];

const statsValFinal = [
  parseInt(
    document.querySelector(".stats div:first-child h3 .stat-value").textContent
  ),
  parseInt(
    document.querySelector(".stats div:nth-child(2) h3 .stat-value").textContent
  ),
  parseInt(
    document.querySelector(".stats div:last-child h3 .stat-value").textContent
  ),
];

const statsValCurrent = [0, 0, 0];

console.log(statsValFinal, statValEls, statsValCurrent);

const valToIncrease = statsValFinal.map((val) => val / (statsAnimDur * 100));

console.log(valToIncrease);

statValEls.forEach((el, i) => (el.textContent = statsValCurrent[i]));

const statsObserverHandler = function (e, observer) {
  if (e[0].isIntersecting) {
    const statsInterval = setInterval(function () {
      statValEls.forEach((el, i) => {
        statsValCurrent[i] += valToIncrease[i];
        if (Math.trunc(statsValCurrent[i]) <= statsValFinal[i]) {
          el.textContent = Math.trunc(statsValCurrent[i]);
        }
        console.log("hi dude");
      });
    }, 10);

    setTimeout(() => clearInterval(statsInterval), (statsAnimDur + 5) * 1000);
    observer.unobserve(e[0].target);
  }
};
const statsObserver = new IntersectionObserver(statsObserverHandler, {
  root: null,
  threshold: 0.75,
});

statsObserver.observe(document.querySelector(".why-choose-section .stats"));

// maps logic
// mapboxgl.accessToken =
//   "pk.eyJ1IjoibWFyazQiLCJhIjoiY2t0MTVma2c0MDc3djJucjJyYmY2M2x2bSJ9.de0t3ixNhUuXNOok-SovUA";
// var map = new mapboxgl.Map({
//   container: "mapbox",
//   style: "mapbox://styles/mark4/clenkpcxq00am01kgi5iqnq36",
//   center: [80.1866397, 12.7307319], // starting position
//   zoom: 15, // starting zoom
//   cooperativeGestures: true,
// });

// map.addControl(new mapboxgl.FullscreenControl());
// // map.addControl(
// //   new MapboxDirections({
// //     accessToken: mapboxgl.accessToken,
// //   }),
// //   "top-left"
// // );
// // map.scrollZoom.disable();
// // map.touchZoomRotate.enable();
// map.addControl(new mapboxgl.NavigationControl());

// // Create a new marker.
// const marker = new mapboxgl.Marker({
//   // color: "#FFFFFF",
//   // draggable: true,
// })
//   .setLngLat([80.1866397, 12.7307319])
//   .addTo(map);

// const mapBoxControlContainer = document.querySelector(
//   ".mapboxgl-control-container"
// );

// console.log(mapBoxControlContainer);
// mapBoxControlContainer.insertAdjacentHTML(
//   "beforeend",
//   `
//   <div class = 'map-view-toggle street'>
//     <p>satellite view</p>
//   </div>
// `
// );

// mapBoxControlContainer.insertAdjacentHTML(
//   "afterbegin",
//   `
//   <div class = 'google-navigation-box'>
//   <h5>DD services</h5>
//     <p> No 73, illalur Road, Thiruporur-603110</p>
//     <a target="_blank" href="https://www.google.com/maps/dir//DD+services,+Thiruporur+-+Kattur+Rd,+Illalur+RF,+Thiruporur,+Tamil+Nadu+603110/@12.7307319,80.1866397,218m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x3a5256b347788b75:0x8cedb3a34d965a66!2m2!1d80.1866299!2d12.7306225!3e0">View direction</a>
//   </div>
// `
// );

// document
//   .querySelector(".map-view-toggle")
//   .addEventListener("click", function (e) {
//     if (this.classList.contains("street")) {
//       map.setStyle("mapbox://styles/mapbox/satellite-streets-v12");
//     } else {
//       map.setStyle("mapbox://styles/mark4/clenkpcxq00am01kgi5iqnq36");
//     }
//     this.classList.toggle("street");
//   });

// sticky header observer

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

stickyHeaderObserver.observe(document.querySelector(".banner-section"));

// section observer

const sectionObserverHandler = function (e) {
  e.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting && entry.target.id) {
      Array.from(
        document.querySelectorAll(`.banner-section .nav-links li`),
        (link) => link.classList.remove("active")
      );
      document
        .querySelector(
          `.banner-section .nav-links a[data-section="${entry.target.id}"]`
        )
        .closest("li")
        .classList.add("active");
    }
  });
};
const sectionObserver = new IntersectionObserver(sectionObserverHandler, {
  root: null,
  rootMargin: "-50%",
});

Array.from(document.querySelectorAll("section"), (section) => {
  sectionObserver.observe(section);
});

// mail functionality

// const sendEmail = function ({ userName, userEmail, userPhone, userMessage }) {
//   Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "vikram.cn5@gmail.com",
//     Password: "E23F6E9165FFC7A518C11BC44D21963D29E0",
//     To: "vikram.cn5@gmail.com",
//     From: "Vikram.cn5@gmail.com",
//     Subject: "Regarding cctv service",
//     Body: `
//       Name: ${userName}<br/><hr/>
//       User Email: ${userEmail}<br/><hr/>
//       ${userPhone && `Contact No.: ${userPhone}<br/><hr/>`}
//       User message: ${userMessage}<br/><hr/>
//     `,
//   }).then((message) => alert(message));
// };

// document
//   .querySelector('.contact-section form button[type="submit"]')
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     const userName = document.querySelector(
//       ".contact-section form #name"
//     ).value;
//     const userEmail = document.querySelector(
//       ".contact-section form #email"
//     ).value;
//     const userPhone = document.querySelector(
//       ".contact-section form #phone"
//     ).value;
//     const userMessage = document.querySelector(
//       ".contact-section form #message"
//     ).value;
//     // console.log(userName, userEmail, userPhone, userMessage);
//     sendEmail({ userName, userEmail, userPhone, userMessage });
//   });
