let scrollY = 0;

const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

scroll.on("scroll", (args) => {
  scrollY = args.scroll.y;
});

const listItems = document.querySelectorAll('.list-item');
const hoverImg = document.querySelector('.hover-img');

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY + scrollY;
});

listItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const img = item.getAttribute('data-img');
        hoverImg.style.backgroundImage = `url(${img})`
        hoverImg.style.opacity = 1;
        // hoverImg.style.scale = 1;

    });
    item.addEventListener('mouseleave', () => {
        hoverImg.style.opacity = 0;
        // hoverImg.style.scale = 0;
    })
})

function animate() {
    currentX += (mouseX - currentX) * 0.3;
    currentY += (mouseY - currentY) * 0.3;

    const deltaX = mouseX - currentX;
    const deltaY = mouseY - currentY;

    const skewX = deltaX * 0.2;
    const skewY = deltaY * 0.2;

    hoverImg.style.left = `${currentX}px`;
    hoverImg.style.top = `${currentY}px`;
    hoverImg.style.transform = `translate(5%, 5%) skew(${skewX}deg, ${skewY}deg)`;

    customCursor.style.left = `${currentX}px`;
    customCursor.style.top = `${currentY}px`;

    console.log(`mouseY: ${mouseY}, scrollY: ${scrollY}, currentY: ${currentY}`);
    requestAnimationFrame(animate);


}


var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: false,
  spaceBetween: 30,
});

document.addEventListener("mousemove", (e) => {
  if (e.target.closest(".swiper")) {
    customCursor.style.transform = "translate(-50%, -50%) scale(1)";
  } else {
    customCursor.style.transform = "translate(-50%, -50%) scale(0)";
  }
});

const customCursor = document.getElementById("custom-cursor");
const swiperElem = document.querySelector(".swiper")

swiperElem.addEventListener("mousedown", () => {
  customCursor.style.transform = "translate(-50%, -50%) scale(0.8)";
});
swiperElem.addEventListener("mouseup", () => {
  customCursor.style.transform = "translate(-50%, -50%) scale(1)";
});

const menu = document.querySelector("#nav h3");
const drop = document.querySelector("#menu-drop");
const navimg = document.querySelector("#nav img");
var flag = 0;

menu.addEventListener("click", () => {
  console.log("CLICKED MENU");
  if (flag === 0) {
    drop.style.top = `0%`;
    drop.classList.add("active");  // ⬅️ Important
    navimg.style.opacity = 0;
    flag = 1;
  } else {
    drop.style.top = `-100%`;
    drop.classList.remove("active"); // ✅ This was missing
    navimg.style.opacity = 1;
    flag = 0;
  }
});

var header = document.querySelector("#header");
setTimeout(() => {
  header.style.top = "-100%"
}, 4300)

animate()