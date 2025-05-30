(function() {

    const isMobile = window.matchMedia("(max-width: 768px)").matches ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const tiltCard = document.getElementById('tilt-card');
    if (!tiltCard) return;
    if (isMobile) {
        if (tiltCard.vanillaTilt) {
            tiltCard.vanillaTilt.destroy();
        }
        VanillaTilt.init(tiltCard, {
            max: 30,
            speed: 1500,
            scale: 1.03,
            glare: false,
            "max-glare": 0,
            perspective: 800,
            gyroscope: true,
            gyroscopeMinAngleX: -10,
            gyroscopeMaxAngleX: 10,
            gyroscopeMinAngleY: -10,
            gyroscopeMaxAngleY: 10,
            gyroscopeSamples: 10
        });

        const tiltLayers = document.querySelectorAll('.tilt-layer');

        const handleTouchMove = (e) => {
            const touch = e.touches[0];
            const rect = tiltCard.getBoundingClientRect();

            const x = touch.clientX - rect.left;
            const y = touch.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            tiltLayers.forEach(element => {
                const depth = parseFloat(element.getAttribute('data-depth') || 0.1) * 0.4;
                const moveX = (x - centerX) * depth;
                const moveY = (y - centerY) * depth;
                element.style.transition = 'transform 0.3s ease-out';
                element.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
            });
        };
        const handleTouchEnd = () => {
            tiltLayers.forEach(element => {
                element.style.transition = 'transform 0.5s ease-out';
                element.style.transform = 'translate3d(0, 0, 0)';
            });
        };
        tiltCard.addEventListener('touchmove', handleTouchMove, { passive: true });
        tiltCard.addEventListener('touchend', handleTouchEnd);
        tiltCard.addEventListener('touchcancel', handleTouchEnd);
        window.addEventListener('deviceorientation', (e) => {
            if (!e.beta || !e.gamma) return;
            if (!tiltCard.classList.contains('is-touch-active')) {
                tiltLayers.forEach(element => {
                    const depth = parseFloat(element.getAttribute('data-depth') || 0.1) * 0.2;
                    const moveX = Math.max(-5, Math.min(5, e.gamma * 0.2)) * depth;
                    const moveY = Math.max(-5, Math.min(5, e.beta * 0.2)) * depth;
                    element.style.transition = 'transform 0.8s ease-out';
                    element.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
                });
            }
        });
        tiltCard.addEventListener('touchstart', () => {
            tiltCard.classList.add('is-touch-active');
        }, { passive: true });
        tiltCard.addEventListener('touchend', () => {
            tiltCard.classList.remove('is-touch-active');
        });
    }
    const adjustTiltContainer = () => {
        const tiltContainer = document.querySelector('.tilt-container');
        if (!tiltContainer) return;

        if (window.innerWidth <= 480) {
            tiltContainer.style.paddingTop = '1.5rem';
            tiltContainer.style.paddingBottom = '1.5rem';
        } else if (window.innerWidth <= 768) {
            tiltContainer.style.paddingTop = '1rem';
            tiltContainer.style.paddingBottom = '1rem';
        } else {
            tiltContainer.style.paddingTop = '0';
            tiltContainer.style.paddingBottom = '0';
        }
    };
    adjustTiltContainer();
    window.addEventListener('resize', adjustTiltContainer);
})();
VanillaTilt.init(document.getElementById('tilt-card'), {
    max: 25,
    speed: 600,
    glare: true,
    "max-glare": 0.3,
    scale: 1.05,
    perspective: 1000,
    transition: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    gyroscope: true,
    gyroscopeMinAngleX: -45,
    gyroscopeMaxAngleX: 45,
    gyroscopeMinAngleY: -45,
    gyroscopeMaxAngleY: 45
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