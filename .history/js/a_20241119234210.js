// Select the carousel container
const carousel = document.querySelector('.carousel');
const items = Array.from(carousel.children);

// Clone items to create an infinite loop effect
items.forEach(item => {
    const clone = item.cloneNode(true);
    carousel.appendChild(clone);
});

// Scroll position and animation speed
let scrollPosition = 0;
const itemWidth = items[0].offsetWidth + 20; // Width of each item + margin
const scrollSpeed = 2; // Speed of scrolling (higher is faster)

// Function to auto-scroll the carousel
function autoScroll() {
    scrollPosition += scrollSpeed;

    // Reset scroll when it reaches halfway (due to cloning)
    if (scrollPosition >= carousel.scrollWidth / 2) {
        scrollPosition = 0;
    }

    // Apply smooth scrolling
    carousel.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
}

// Set interval to keep scrolling
const scrollInterval = setInterval(autoScroll, 20);

// Pause scrolling on hover
carousel.addEventListener('mouseenter', () => {
    clearInterval(scrollInterval);
});

// Resume scrolling when hover ends
carousel.addEventListener('mouseleave', () => {
    setInterval(autoScroll, 20);
});
