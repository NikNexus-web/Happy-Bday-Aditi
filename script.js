// ==========================================
// ADITI'S BIRTHDAY WEBSITE
// COUNTDOWN + MUSIC + INTRO + SURPRISE
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // 1. BIRTHDAY COUNTDOWN SETTINGS
    // ==========================================

    // 13 November 2026, 12:00 AM Indian Time

    const birthdayDate = new Date(
        "2026-11-13T00:00:00+05:30"
    ).getTime();

    // Countdown Elements

    const countdownScreen = document.getElementById("countdownScreen");
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
    const countdownStars = document.getElementById("countdownStars");

    let countdownInterval = null;

    // ==========================================
    // 2. COUNTDOWN FUNCTION
    // ==========================================

    function updateCountdown() {

        const currentTime = Date.now();
        const difference = birthdayDate - currentTime;

        // Check countdown elements

        if (
            !daysElement ||
            !hoursElement ||
            !minutesElement ||
            !secondsElement
        ) {
            console.error("Countdown elements not found!");
            clearInterval(countdownInterval);
            return;
        }

        // Birthday reached

        if (difference <= 0) {

            daysElement.textContent = "00";
            hoursElement.textContent = "00";
            minutesElement.textContent = "00";
            secondsElement.textContent = "00";

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

        // Calculate remaining time

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

        // Update display

        daysElement.textContent = String(days).padStart(2, "0");
        hoursElement.textContent = String(hours).padStart(2, "0");
        minutesElement.textContent = String(minutes).padStart(2, "0");
        secondsElement.textContent = String(seconds).padStart(2, "0");
    }

    // ==========================================
    // 3. START COUNTDOWN
    // ==========================================

    if (countdownScreen) {

        document.body.style.overflow = "hidden";

        updateCountdown();

        if (Date.now() < birthdayDate) {
            countdownInterval = setInterval(updateCountdown, 1000);
        }

    }

    // ==========================================
    // 4. GENERATE COUNTDOWN STARS
    // ==========================================

    if (countdownStars) {

        for (let i = 0; i < 100; i++) {

            const star = document.createElement("div");

            star.classList.add("star-particle");

            star.style.left = Math.random() * 100 + "%";
            star.style.top = Math.random() * 100 + "%";
            star.style.animationDelay = Math.random() * 3 + "s";
            star.style.opacity = Math.random();

            countdownStars.appendChild(star);
        }

    }

    // ==========================================
    // 5. ORIGINAL WEBSITE ELEMENTS
    // ==========================================

    const intro = document.getElementById("intro");
    const mainContent = document.getElementById("mainContent");
    const enterButton = document.getElementById("enterButton");

    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");

    const surpriseButton = document.getElementById("surpriseButton");
    const surpriseMessage = document.getElementById("surpriseMessage");

    // ==========================================
    // 6. ENTER WEBSITE
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

            // Start background music

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
    // 7. MUSIC ON / OFF
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
    // 8. FINAL SURPRISE
    // ==========================================

    if (surpriseButton && surpriseMessage) {

        surpriseButton.addEventListener("click", function () {

            surpriseMessage.classList.toggle("show");

            if (surpriseMessage.classList.contains("show")) {

                surpriseButton.textContent = "CLOSE SURPRISE ❤️";

            } else {

                surpriseButton.textContent = "OPEN YOUR SURPRISE 🎁";

            }

        });

    }

});