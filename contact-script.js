mapboxgl.accessToken =
  "pk.eyJ1IjoibWFyazQiLCJhIjoiY2t0MTVma2c0MDc3djJucjJyYmY2M2x2bSJ9.de0t3ixNhUuXNOok-SovUA";
var map = new mapboxgl.Map({
  container: "mapbox",
  style: "mapbox://styles/mark4/clenkpcxq00am01kgi5iqnq36",
  center: [80.1866397, 12.7307319], // starting position
  zoom: 15, // starting zoom
  cooperativeGestures: true,
});

map.addControl(new mapboxgl.FullscreenControl());
// map.addControl(
//   new MapboxDirections({
//     accessToken: mapboxgl.accessToken,
//   }),
//   "top-left"
// );
// map.scrollZoom.disable();
// map.touchZoomRotate.enable();
map.addControl(new mapboxgl.NavigationControl());

// Create a new marker.
const marker = new mapboxgl.Marker({
  // color: "#FFFFFF",
  // draggable: true,
})
  .setLngLat([80.1866397, 12.7307319])
  .addTo(map);

const mapBoxControlContainer = document.querySelector(
  ".mapboxgl-control-container"
);

console.log(mapBoxControlContainer);
mapBoxControlContainer.insertAdjacentHTML(
  "beforeend",
  `
  <div class = 'map-view-toggle street'>
    <p>satellite view</p>
  </div>
`
);

mapBoxControlContainer.insertAdjacentHTML(
  "afterbegin",
  `
  <div class = 'google-navigation-box'>
  <h5>DD services</h5>
    <p> No 73, illalur Road, Thiruporur-603110</p>
    <a target="_blank" href="https://www.google.com/maps/dir//DD+services,+Thiruporur+-+Kattur+Rd,+Illalur+RF,+Thiruporur,+Tamil+Nadu+603110/@12.7307319,80.1866397,218m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x3a5256b347788b75:0x8cedb3a34d965a66!2m2!1d80.1866299!2d12.7306225!3e0">View direction</a>
  </div>
`
);

document
  .querySelector(".map-view-toggle")
  .addEventListener("click", function (e) {
    if (this.classList.contains("street")) {
      map.setStyle("mapbox://styles/mapbox/satellite-streets-v12");
    } else {
      map.setStyle("mapbox://styles/mark4/clenkpcxq00am01kgi5iqnq36");
    }
    this.classList.toggle("street");
  });

// mail functionality

const showModal = function (isSuccess) {
  const mailResultEl = document.querySelector(".mail-response-modal > div h4");
  mailResultEl.textContent = isSuccess
    ? "Mail sent successfully"
    : "Sending mail failed";
  mailResultEl.classList.add(isSuccess ? "success" : "error");
  mailResultEl.closest(".mail-response-modal").classList.add("active");
  if (isSuccess) {
    document.querySelector(".contact-section form #name").value = "";
    document.querySelector(".contact-section form #email").value = "";
    document.querySelector(".contact-section form #phone").value = "";
    document.querySelector(".contact-section form #message").value = "";
  }
};

const mailModalEl = document.querySelector(".mail-response-modal");
mailModalEl.addEventListener("click", function () {
  console.log("hi");
  mailModalEl.classList.remove("active");
});

document
  .querySelector(".mail-response-modal > div span")
  .addEventListener("click", function () {
    this.closest(".mail-response-modal").classList.remove("active");
  });

const sendEmail = function ({ userName, userEmail, userPhone, userMessage }) {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "vikram.cn5@gmail.com",
    Password: "E23F6E9165FFC7A518C11BC44D21963D29E0",
    To: "vikram.cn5@gmail.com",
    From: "Vikram.cn5@gmail.com",
    Subject: "Regarding cctv service",
    Body: `
      Name: ${userName}<br/><hr/>
      User Email: ${userEmail}<br/><hr/>
      ${userPhone && `Contact No.: ${userPhone}<br/><hr/>`}
      User message: ${userMessage}<br/><hr/>
    `,
  }).then((message) => (message === "OK" ? showModal(true) : showModal(false)));
};

document
  .querySelector('.contact-section form button[type="submit"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    const userName = document.querySelector(
      ".contact-section form #name"
    ).value;
    const userEmail = document.querySelector(
      ".contact-section form #email"
    ).value;
    const userPhone = document.querySelector(
      ".contact-section form #phone"
    ).value;
    const userMessage = document.querySelector(
      ".contact-section form #message"
    ).value;
    // console.log(userName, userEmail, userPhone, userMessage);
    sendEmail({ userName, userEmail, userPhone, userMessage });
  });

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

stickyHeaderObserver.observe(document.querySelector(".contact-banner-section"));

// navigation logic

document
  .querySelector(".nav-links li a[data-section='contact']")
  .addEventListener("click", function (e) {
    e.preventDefault();
  });

document
  .querySelector(".footer-section .nav-links-list li a[data-section='contact']")
  .addEventListener("click", function (e) {
    e.preventDefault();
  });
