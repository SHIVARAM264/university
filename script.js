const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const currentTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});
document.addEventListener('DOMContentLoaded', function () {
    const slides = Array.from(document.querySelectorAll('.slider .slide'));
    if (!slides.length) return;
    
    slides.forEach((s, i) => {
        s.style.position = 'absolute';
        s.style.top = '0';
        s.style.left = '0';
        s.style.width = '100%';
        s.style.height = '100%';
        s.style.objectFit = 'cover';
        s.style.transition = 'opacity 0.6s ease-in-out';
        s.style.opacity = i === 0 ? '1' : '0';
        s.style.zIndex = i === 0 ? '2' : '1';
    });

    if (slides.length <= 1) return;

    let current = 0;
    setInterval(() => {
        const next = (current + 1) % slides.length;
        slides[current].style.opacity = '0';
        slides[current].style.zIndex = '1';
        slides[next].style.opacity = '1';
        slides[next].style.zIndex = '2';
        current = next;
    }, 2000);
});