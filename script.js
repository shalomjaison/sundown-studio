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

    console.log(`mouseY: ${mouseY}, scrollY: ${scrollY}, currentY: ${currentY}`);
    requestAnimationFrame(animate);


}


animate()