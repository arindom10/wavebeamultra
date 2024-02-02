//navbar
const checkbox = document.getElementById("check");
const shadow = document.getElementById("shadow");
checkbox.addEventListener("click", function () {
  if (checkbox.checked) {
    shadow.classList.add("shadow-bg");
  } else {
    shadow.classList.remove("shadow-bg");
  }
});
shadow.addEventListener("click", function () {
  checkbox.checked = false;
  shadow.classList.remove("shadow-bg");
});

// Get all reviewer images and swiper div
const reviewerImages = document.querySelectorAll(".reviewer-img");
const swiperDivs = document.querySelectorAll(".swiper-div");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
let activeIndex = 0;

// Add click event listeners to reviewer images
reviewerImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    setActiveReviewer(index);
  });
});

// Add click event listeners to next and previous buttons
prevButton.addEventListener("click", () => {
  setActiveReviewer(activeIndex - 1);
});

nextButton.addEventListener("click", () => {
  setActiveReviewer(activeIndex + 1);
});

// Function to set the active reviewer and update swiper-div
function setActiveReviewer(index) {
  if (index < 0) {
    index = reviewerImages.length - 1;
  } else if (index >= reviewerImages.length) {
    index = 0;
  }

  reviewerImages[activeIndex].classList.remove("active-reviewer-img");
  reviewerImages[index].classList.add("active-reviewer-img");

  swiperDivs[activeIndex].style.display = "none";
  swiperDivs[index].style.display = "block";

  activeIndex = index;
}

///owlCarusel slider for brands
$(".clients-carousel").owlCarousel({
  autoplay: true,
  loop: true,
  margin: 15,
  dots: false,
  slideTransition: "linear",
  autoplayTimeout: 4500,
  autoplayHoverPause: true,
  autoplaySpeed: 4500,
  responsive: {
    320: {
      items: 2,
    },
    576: {
      items: 3,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
    1200: {
      items: 4,
    },
    1400: {
      items: 5,
    },
    1536: {
      items: 5,
    },
    1920: {
      items: 5,
    },
  },
});
$(".clients-carousel-2").owlCarousel({
  autoplay: true,
  loop: true,
  margin: 15,
  dots: false,
  slideTransition: "linear",
  autoplayTimeout: 5500,
  autoplayHoverPause: true,
  autoplaySpeed: 5500,
  rtl: true,
  responsive: {
    320: {
      items: 3,
    },
    576: {
      items: 4,
    },
    768: {
      items: 4,
    },
    992: {
      items: 5,
    },
    1200: {
      items: 5,
    },
    1400: {
      items: 6,
    },
    1536: {
      items: 6,
    },
    1920: {
      items: 6,
    },
  },
});
$(".clients-carousel-1").owlCarousel({
  autoplay: true,
  loop: true,
  margin: 15,
  dots: false,
  slideTransition: "linear",
  autoplayTimeout: 5500,
  autoplayHoverPause: true,
  autoplaySpeed: 5500,
  responsive: {
    320: {
      items: 3,
    },
    576: {
      items: 4,
    },
    768: {
      items: 4,
    },
    992: {
      items: 5,
    },
    1200: {
      items: 5,
    },
    1400: {
      items: 6,
    },
    1536: {
      items: 6,
    },
    1920: {
      items: 6,
    },
  },
});

document.getElementById("shop-plus").addEventListener("click", function () {
  increaseQuantity();
});

document.getElementById("shop-minus").addEventListener("click", function () {
  decreaseQuantity();
});

function increaseQuantity() {
  var quantityElement = document.getElementById("shop-quantity");
  var currentQuantity = parseInt(quantityElement.textContent);
  quantityElement.textContent = currentQuantity + 1;
}

function decreaseQuantity() {
  var quantityElement = document.getElementById("shop-quantity");
  var currentQuantity = parseInt(quantityElement.textContent);

  // Make sure the quantity doesn't go below 0
  if (currentQuantity > 0) {
    quantityElement.textContent = currentQuantity - 1;
  }
}

const text = document.querySelector(".btn-circle-text p");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 17.1}deg)">${char}</span>`
  )
  .join("");

// play pause for intro video
document.getElementById("playpause_img1").style.display = "none";
document.getElementById("playpause_img2").style.display = "none";

function playpause(video, playpauseImgId) {
  if (video.paused) {
    video.play();
    document.getElementById(playpauseImgId).style.display = "none";
  } else {
    video.pause();
    document.getElementById(playpauseImgId).style.display = "block";
  }
}

// my alert box
function myAlert() {
  alert("Successfully Send");
}
