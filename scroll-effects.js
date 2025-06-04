// document.addEventListener('DOMContentLoaded', () => {
//     gsap.registerPlugin(ScrollTrigger);
//     createOrbitElements();
//     initOrbitAnimations();
// });
//
// function createOrbitElements() {
//     const container = document.createElement('div');
//     container.id = 'orbital-container';
//     container.style.cssText = `
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     pointer-events: none;
//     z-index: -1;
//     overflow: hidden;
//   `;
//     document.body.appendChild(container);
//
//     // Main large sphere (dark blue)
//     const sphere1 = document.createElement('div');
//     sphere1.id = 'main-sphere';
//     sphere1.className = 'orbital-sphere';
//     sphere1.style.cssText = `
//     position: absolute;
//     width: 280px;
//     height: 280px;
//     border-radius: 50%;
//     background: radial-gradient(circle at 30% 30%,
//                              rgba(30, 40, 90, 0.9) 0%,
//                              rgba(20, 30, 80, 0.8) 60%,
//                              rgba(10, 20, 60, 0.7) 100%);
//     box-shadow: inset 10px 10px 30px rgba(100, 140, 255, 0.3),
//                 inset -10px -10px 30px rgba(10, 20, 60, 0.8),
//                 0 0 40px rgba(50, 100, 255, 0.2);
//     will-change: transform;
//     filter: blur(2px);
//   `;
//
//     const reflection1 = document.createElement('div');
//     reflection1.className = 'sphere-reflection';
//     reflection1.style.cssText = `
//     position: absolute;
//     top: 15%;
//     left: 20%;
//     width: 40%;
//     height: 25%;
//     border-radius: 50%;
//     background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 60%);
//     transform: rotate(-20deg);
//   `;
//     sphere1.appendChild(reflection1);
//     container.appendChild(sphere1);
//
//     // Medium sphere (purple)
//     const sphere2 = document.createElement('div');
//     sphere2.id = 'second-sphere';
//     sphere2.className = 'orbital-sphere';
//     sphere2.style.cssText = `
//     position: absolute;
//     width: 180px;
//     height: 180px;
//     border-radius: 50%;
//     background: radial-gradient(circle at 30% 30%,
//                              rgba(80, 30, 120, 0.9) 0%,
//                              rgba(60, 20, 100, 0.8) 60%,
//                              rgba(40, 10, 80, 0.7) 100%);
//     box-shadow: inset 10px 10px 30px rgba(150, 100, 255, 0.3),
//                 inset -10px -10px 30px rgba(40, 10, 80, 0.8),
//                 0 0 30px rgba(120, 80, 255, 0.2);
//     will-change: transform;
//     filter: blur(1.5px);
//   `;
//
//     const reflection2 = document.createElement('div');
//     reflection2.className = 'sphere-reflection';
//     reflection2.style.cssText = `
//     position: absolute;
//     top: 15%;
//     left: 20%;
//     width: 40%;
//     height: 25%;
//     border-radius: 50%;
//     background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 60%);
//     transform: rotate(-20deg);
//   `;
//     sphere2.appendChild(reflection2);
//     container.appendChild(sphere2);
//
//     // Small sphere (white with blue tint)
//     const sphere3 = document.createElement('div');
//     sphere3.id = 'third-sphere';
//     sphere3.className = 'orbital-sphere';
//     sphere3.style.cssText = `
//     position: absolute;
//     width: 100px;
//     height: 100px;
//     border-radius: 50%;
//     background: radial-gradient(circle at 30% 30%,
//                              rgba(220, 225, 255, 0.9) 0%,
//                              rgba(180, 190, 255, 0.7) 70%,
//                              rgba(150, 170, 255, 0.5) 100%);
//     box-shadow: inset 5px 5px 20px rgba(255, 255, 255, 0.4),
//                 inset -5px -5px 20px rgba(130, 150, 255, 0.4),
//                 0 0 25px rgba(180, 200, 255, 0.3);
//     will-change: transform;
//     filter: blur(1px);
//   `;
//
//     const reflection3 = document.createElement('div');
//     reflection3.className = 'sphere-reflection';
//     reflection3.style.cssText = `
//     position: absolute;
//     top: 15%;
//     left: 20%;
//     width: 40%;
//     height: 25%;
//     border-radius: 50%;
//     background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%);
//     transform: rotate(-20deg);
//   `;
//     sphere3.appendChild(reflection3);
//     container.appendChild(sphere3);
//
//     // Hide spheres initially
//     gsap.set([sphere1, sphere2, sphere3], {
//         x: -1000,
//         y: -1000,
//         opacity: 0
//     });
// }
//
// function initOrbitAnimations() {
//     const mainSphere = document.getElementById('main-sphere');
//     const secondSphere = document.getElementById('second-sphere');
//     const thirdSphere = document.getElementById('third-sphere');
//
//     let screenWidth = window.innerWidth;
//     let screenHeight = window.innerHeight;
//     let centerX = screenWidth / 2;
//     let centerY = screenHeight / 2;
//
//     let sizeFactor = Math.min(screenWidth, screenHeight) / 1200;
//     let orbitScale = Math.min(1, Math.max(0.6, sizeFactor));
//
//     // Fade in spheres initially with staggered timing
//     gsap.to([mainSphere, secondSphere, thirdSphere], {
//         opacity: 1,
//         duration: 1.5,
//         stagger: 0.3,
//         ease: "power2.out"
//     });
//
//
//     // Main sphere path (large blue sphere)
//     ScrollTrigger.create({
//         trigger: "body",
//         start: "top top",
//         end: "bottom bottom",
//         scrub: 1.2,
//         onUpdate: (self) => {
//             const progress = self.progress;
//
//             const angle = progress * Math.PI * 4;
//             const radiusX = 350 * orbitScale;
//             const radiusY = 250 * orbitScale;
//
//             const x = Math.cos(angle) * radiusX * (1 + 0.1 * Math.sin(angle * 2)) + centerX - 140;
//             const y = Math.sin(angle) * radiusY * (1 + 0.2 * Math.cos(angle * 3)) + centerY - 140;
//
//             const distance = Math.sqrt(
//                 Math.pow((x - (centerX - 140)) / radiusX, 2) +
//                 Math.pow((y - (centerY - 140)) / radiusY, 2)
//             );
//
//             // Visual effects based on position in orbit
//             const scale = 0.9 + 0.2 * (1 - distance);
//             const blur = 2 + distance * 3;
//             const zIndex = Math.round((1 - distance) * 10);
//
//             // Apply transformations
//             gsap.set(mainSphere, {
//                 x: x,
//                 y: y,
//                 scale: scale,
//                 filter: `blur(${blur}px)`,
//                 zIndex: zIndex,
//                 rotation: progress * 360,
//             });
//         }
//     });
//
//     // Second sphere path (medium purple sphere)
//     ScrollTrigger.create({
//         trigger: "body",
//         start: "top top",
//         end: "bottom bottom",
//         scrub: 1,
//         onUpdate: (self) => {
//             const progress = self.progress;
//
//             const angle = progress * Math.PI * 3 + Math.PI;
//             const radiusX = 450 * orbitScale;
//             const radiusY = 300 * orbitScale;
//
//             const x = Math.sin(angle) * radiusX * (1 + 0.2 * Math.cos(angle * 2)) + centerX - 90;
//             const y = Math.cos(angle) * radiusY * (1 - 0.15 * Math.sin(angle * 2)) + centerY - 90;
//
//             const distance = Math.sqrt(
//                 Math.pow((x - (centerX - 90)) / radiusX, 2) +
//                 Math.pow((y - (centerY - 90)) / radiusY, 2)
//             );
//
//             const scale = 0.85 + 0.3 * (1 - distance);
//             const blur = 1.5 + distance * 2.5;
//             const zIndex = Math.round((1 - distance) * 8);
//
//             gsap.set(secondSphere, {
//                 x: x,
//                 y: y,
//                 scale: scale,
//                 filter: `blur(${blur}px)`,
//                 zIndex: zIndex,
//                 rotation: -progress * 420,
//             });
//
//             gsap.set(secondSphere.querySelector('.sphere-reflection'), {
//                 opacity: 0.2 + 0.3 * (1 - distance),
//             });
//         }
//     });
//
//     // Third sphere path (small white sphere)
//     ScrollTrigger.create({
//         trigger: "body",
//         start: "top top",
//         end: "bottom bottom",
//         scrub: 0.8,
//         onUpdate: (self) => {
//             const progress = self.progress;
//
//             const angle = progress * Math.PI * 5 + Math.PI * 0.5;
//             const radiusX = 400 * orbitScale;
//             const radiusY = 380 * orbitScale;
//
//             const x = Math.sin(angle) * Math.cos(angle * 0.5) * radiusX * 0.7 + centerX - 50;
//             const y = Math.cos(angle) * radiusY * (0.5 + 0.2 * Math.sin(angle)) + centerY - 50;
//
//             const distance = Math.sqrt(
//                 Math.pow((x - (centerX - 50)) / (radiusX * 0.7), 2) +
//                 Math.pow((y - (centerY - 50)) / radiusY, 2)
//             ) * 0.7;
//
//             // Visual effects
//             const scale = 0.8 + 0.4 * (1 - distance);
//             const blur = 1 + distance * 2;
//             const zIndex = Math.round((1 - distance) * 12);
//
//             // Apply transformations
//             gsap.set(thirdSphere, {
//                 x: x,
//                 y: y,
//                 scale: scale,
//                 filter: `blur(${blur}px)`,
//                 zIndex: zIndex,
//                 rotation: progress * 540,
//                 opacity: 0.8 + 0.2 * (1 - distance),
//             });
//         }
//     });
//
//     // Main sphere subtle pulsing
//     gsap.to(mainSphere, {
//         boxShadow: "inset 10px 10px 40px rgba(100, 140, 255, 0.4), inset -10px -10px 40px rgba(10, 20, 60, 0.8), 0 0 50px rgba(50, 100, 255, 0.3)",
//         duration: 3,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut"
//     });
//
//     // Second sphere subtle color shift
//     gsap.to(secondSphere, {
//         background: "radial-gradient(circle at 30% 30%, rgba(85, 35, 130, 0.9) 0%, rgba(65, 25, 110, 0.8) 60%, rgba(45, 15, 90, 0.7) 100%)",
//         boxShadow: "inset 10px 10px 35px rgba(160, 110, 255, 0.35), inset -10px -10px 35px rgba(45, 15, 90, 0.8), 0 0 40px rgba(130, 90, 255, 0.25)",
//         duration: 4,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut"
//     });
//
//     // Third sphere glow animation
//     gsap.to(thirdSphere, {
//         boxShadow: "inset 5px 5px 25px rgba(255, 255, 255, 0.5), inset -5px -5px 25px rgba(140, 160, 255, 0.5), 0 0 35px rgba(190, 210, 255, 0.4)",
//         duration: 2,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut"
//     });
//
//     // Handle window resize
//     window.addEventListener('resize', () => {
//         // Recalculate dimensions
//         screenWidth = window.innerWidth;
//         screenHeight = window.innerHeight;
//
//         centerX = screenWidth / 2;
//         centerY = screenHeight / 2;
//
//         sizeFactor = Math.min(screenWidth, screenHeight) / 1200;
//         orbitScale = Math.min(1, Math.max(0.6, sizeFactor));
//
//         ScrollTrigger.refresh();
//     });
// }