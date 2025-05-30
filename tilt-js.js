VanillaTilt.init(document.getElementById('tilt-card'), {
    max: 25,
    speed: 600,
    glare: true,
    "max-glare": 0.3,
    scale: 1.05,
    perspective: 1000,
    transition: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    gyroscope: false
});
document.querySelectorAll('.tilt-layer').forEach(element => {
    const depth = parseFloat(element.getAttribute('data-depth') || 1);
    document.getElementById('tilt-card').addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const moveX = (x - centerX) * depth;
        const moveY = (y - centerY) * depth;

        element.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    });
    document.getElementById('tilt-card').addEventListener('mouseleave', function() {
        element.style.transform = 'translate3d(0, 0, 0)';
    });
});