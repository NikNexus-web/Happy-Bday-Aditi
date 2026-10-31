// ==========================================
// ADITI'S BIRTHDAY WEBSITE
// COUNTDOWN + MUSIC + GIFTS + CAKE + FIREWORKS
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // 1. BIRTHDAY COUNTDOWN (10 SECOND TEST)
    // ==========================================

    const birthdayDate = new Date(
    "2026-11-13T00:00:00+05:30"
).getTime();

    const countdownScreen = document.getElementById("countdownScreen");

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    const countdownStars = document.getElementById("countdownStars");

    let countdownInterval = null;

    function updateCountdown() {

        const difference = birthdayDate - Date.now();

        if (difference <= 0) {

            if (daysElement) daysElement.textContent = "00";
            if (hoursElement) hoursElement.textContent = "00";
            if (minutesElement) minutesElement.textContent = "00";
            if (secondsElement) secondsElement.textContent = "00";

            const heading = document.querySelector(".timer-heading");

            if (heading) {
                heading.textContent = "HAPPY BIRTHDAY ADITI! ❤️";
            }

            clearInterval(countdownInterval);

            if (countdownScreen) {

                countdownScreen.classList.add("hide");

                setTimeout(function () {
                    countdownScreen.style.display = "none";
                    document.body.style.overflow = "auto";
                }, 1300);
            }

            return;
        }

        const days = Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );

        const hours = Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );

        const minutes = Math.floor(
            (difference / (1000 * 60)) % 60
        );

        const seconds = Math.floor(
            (difference / 1000) % 60
        );

        if (daysElement) daysElement.textContent = String(days).padStart(2, "0");
        if (hoursElement) hoursElement.textContent = String(hours).padStart(2, "0");
        if (minutesElement) minutesElement.textContent = String(minutes).padStart(2, "0");
        if (secondsElement) secondsElement.textContent = String(seconds).padStart(2, "0");
    }

    if (countdownScreen) {

        document.body.style.overflow = "hidden";

        updateCountdown();

        countdownInterval = setInterval(updateCountdown, 1000);
    }

    // ==========================================
    // 2. COUNTDOWN STARS
    // ==========================================

    if (countdownStars) {

        for (let i = 0; i < 100; i++) {

            const star = document.createElement("div");

            star.className = "star-particle";
            star.style.left = Math.random() * 100 + "%";
            star.style.top = Math.random() * 100 + "%";
            star.style.animationDelay = Math.random() * 3 + "s";

            countdownStars.appendChild(star);
        }
    }

    // ==========================================
    // 3. MAIN ELEMENTS
    // ==========================================

    const intro = document.getElementById("intro");
    const mainContent = document.getElementById("mainContent");
    const enterButton = document.getElementById("enterButton");
    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");
    const surpriseButton = document.getElementById("surpriseButton");
    const surpriseMessage = document.getElementById("surpriseMessage");

    // ==========================================
    // 4. ENTER WEBSITE
    // ==========================================

    if (enterButton) {

        enterButton.addEventListener("click", async function () {

            if (intro) {
                intro.style.display = "none";
            }

            if (mainContent) {
                mainContent.classList.add("show");
            }

            window.scrollTo(0, 0);

            if (music) {

                try {

                    await music.play();

                    if (musicBtn) {
                        musicBtn.textContent = "♫ MUSIC ON";
                    }

                } catch (error) {

                    console.error("Music Error:", error);

                    if (musicBtn) {
                        musicBtn.textContent = "♫ MUSIC OFF";
                    }
                }
            }
        });
    }

    // ==========================================
    // 5. MUSIC ON / OFF
    // ==========================================

    if (musicBtn && music) {

        musicBtn.addEventListener("click", async function () {

            if (music.paused) {

                try {

                    await music.play();
                    musicBtn.textContent = "♫ MUSIC ON";

                } catch (error) {

                    console.error("Audio Error:", error);
                }

            } else {

                music.pause();
                musicBtn.textContent = "♫ MUSIC OFF";
            }
        });
    }

    // ==========================================
    // 6. MYSTERY GIFT BOXES
    // ==========================================

    const giftCards = document.querySelectorAll(".gift-card");

    const giftMessage = document.getElementById("giftMessage");
    const giftMessageIcon = document.getElementById("giftMessageIcon");
    const giftMessageTitle = document.getElementById("giftMessageTitle");
    const giftMessageText = document.getElementById("giftMessageText");

    const gifts = [

        {
            icon: "❤️",
            title: "A Gift of Happiness",
            message: "Aditi, may your life always be filled with happiness, laughter and beautiful memories. You deserve the best!"
        },

        {
            icon: "🌸",
            title: "A Beautiful Soul",
            message: "Never change yourself for anyone. Keep being the wonderful, kind and amazing person you are."
        },

        {
            icon: "✨",
            title: "A Wish From Nikunj",
            message: "I wish you endless happiness, success and love. May every dream of yours come true. Happy Birthday!"
        }
    ];

    giftCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const giftIndex = Number(card.dataset.gift);
            const selectedGift = gifts[giftIndex];

            if (!selectedGift) return;

            if (giftMessageIcon) giftMessageIcon.textContent = selectedGift.icon;
            if (giftMessageTitle) giftMessageTitle.textContent = selectedGift.title;
            if (giftMessageText) giftMessageText.textContent = selectedGift.message;

            if (giftMessage) {

                giftMessage.classList.remove("show");
                void giftMessage.offsetWidth;
                giftMessage.classList.add("show");
            }

            card.classList.add("opened");

            const hint = card.querySelector(".gift-hint");

            if (hint) {
                hint.textContent = "OPENED ❤️";
            }

            createHeartBurst(12);
        });
    });

    // ==========================================
    // 7. BIRTHDAY CAKE
    // ==========================================

    const cakeContainer = document.querySelector(".cake-container");
    const blowCandlesBtn = document.getElementById("blowCandlesBtn");
    const cakeMessage = document.getElementById("cakeMessage");
    const celebrateBtn = document.getElementById("celebrateBtn");

    if (blowCandlesBtn && cakeContainer && cakeMessage) {

        blowCandlesBtn.addEventListener("click", function () {

            if (cakeContainer.classList.contains("blown")) return;

            cakeContainer.classList.add("blown");
            cakeMessage.classList.add("show");

            blowCandlesBtn.textContent = "WISH MADE! ❤️";
            blowCandlesBtn.disabled = true;

            createHeartBurst(25);
            launchFireworks(5);
        });
    }

    // ==========================================
    // 8. CELEBRATION BUTTON
    // ==========================================

    if (celebrateBtn) {

        celebrateBtn.addEventListener("click", function () {

            launchFireworks(12);
            createHeartBurst(35);
        });
    }

    // ==========================================
    // 9. FLOATING HEARTS
    // ==========================================

    const celebrationLayer = document.getElementById("celebrationLayer");

    const heartSymbols = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "✨",
        "🌸"
    ];

    function createFloatingHeart() {

        if (!celebrationLayer) return;

        const heart = document.createElement("div");

        heart.className = "floating-heart";

        heart.textContent =
            heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

        heart.style.left = Math.random() * 100 + "%";

        heart.style.fontSize =
            (Math.random() * 18 + 15) + "px";

        const duration = Math.random() * 5 + 5;

        heart.style.animationDuration = duration + "s";

        celebrationLayer.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, duration * 1000);
    }

    let heartInterval = null;

    if (enterButton) {

        enterButton.addEventListener("click", function () {

            if (!heartInterval) {
                heartInterval = setInterval(createFloatingHeart, 900);
            }
        });
    }

    // ==========================================
    // 10. HEART BURST
    // ==========================================

    function createHeartBurst(amount) {

        if (!celebrationLayer) return;

        for (let i = 0; i < amount; i++) {

            const heart = document.createElement("div");

            heart.className = "floating-heart";

            heart.textContent =
                heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

            heart.style.left = (10 + Math.random() * 80) + "%";

            heart.style.fontSize =
                (Math.random() * 20 + 15) + "px";

            heart.style.animationDuration =
                (Math.random() * 3 + 3) + "s";

            celebrationLayer.appendChild(heart);

            setTimeout(function () {
                heart.remove();
            }, 6000);
        }
    }

    // ==========================================
    // 11. FIREWORKS SYSTEM
    // ==========================================

    const canvas = document.getElementById("fireworksCanvas");
    const ctx = canvas ? canvas.getContext("2d") : null;

    let fireworks = [];
    let particles = [];
    let animationRunning = false;

    function resizeCanvas() {

        if (!canvas || !ctx) return;

        const ratio = Math.min(window.devicePixelRatio || 1, 2);

        canvas.width = window.innerWidth * ratio;
        canvas.height = window.innerHeight * ratio;

        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";

        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    class Firework {

        constructor(x, targetY) {

            this.x = x;
            this.y = window.innerHeight;
            this.targetY = targetY;
            this.speed = 5 + Math.random() * 3;

            this.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
        }

        update() {

            this.y -= this.speed;

            if (this.y <= this.targetY) {

                createExplosion(this.x, this.y, this.color);

                return true;
            }

            return false;
        }

        draw() {

            if (!ctx) return;

            ctx.beginPath();
            ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    class Particle {

        constructor(x, y, color) {

            this.x = x;
            this.y = y;
            this.color = color;

            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 5 + 1;

            this.vx = Math.cos(angle) * speed;
            this.vy = Math.sin(angle) * speed;

            this.alpha = 1;
            this.gravity = 0.045;
            this.size = Math.random() * 3 + 1;
        }

        update() {

            this.x += this.vx;
            this.y += this.vy;

            this.vy += this.gravity;

            this.vx *= 0.99;
            this.vy *= 0.99;

            this.alpha -= 0.015;
        }

        draw() {

            if (!ctx) return;

            ctx.globalAlpha = Math.max(0, this.alpha);

            ctx.beginPath();

            ctx.arc(
                this.x,
                this.y,
                this.size,
                0,
                Math.PI * 2
            );

            ctx.fillStyle = this.color;
            ctx.fill();

            ctx.globalAlpha = 1;
        }
    }

    function createExplosion(x, y, color) {

        for (let i = 0; i < 55; i++) {
            particles.push(new Particle(x, y, color));
        }
    }

    function animateFireworks() {

        if (!ctx) {
            animationRunning = false;
            return;
        }

        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        fireworks = fireworks.filter(function (firework) {

            const finished = firework.update();

            if (!finished) {
                firework.draw();
            }

            return !finished;
        });

        particles = particles.filter(function (particle) {

            particle.update();
            particle.draw();

            return particle.alpha > 0;
        });

        if (fireworks.length > 0 || particles.length > 0) {

            requestAnimationFrame(animateFireworks);

        } else {

            animationRunning = false;

            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        }
    }

    function launchFireworks(amount) {

        if (!ctx) return;

        for (let i = 0; i < amount; i++) {

            const x = Math.random() * window.innerWidth;

            const targetY =
                80 + Math.random() * (window.innerHeight * 0.55);

            fireworks.push(new Firework(x, targetY));
        }

        if (!animationRunning) {

            animationRunning = true;

            requestAnimationFrame(animateFireworks);
        }
    }

    // ==========================================
    // 12. FINAL SURPRISE
    // ==========================================

    if (surpriseButton && surpriseMessage) {

        surpriseButton.addEventListener("click", function () {

            surpriseMessage.classList.toggle("show");

            if (surpriseMessage.classList.contains("show")) {

                surpriseButton.textContent = "CLOSE SURPRISE ❤️";

                createHeartBurst(20);

            } else {

                surpriseButton.textContent = "OPEN YOUR SURPRISE 🎁";
            }
        });
    }

    // ==========================================
    // 13. WEBSITE READY
    // ==========================================

    console.log("Aditi's Birthday Website Loaded Successfully! ❤️");

});