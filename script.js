// GET ELEMENTS

const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");

const enterButton = document.getElementById("enterButton");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const surpriseButton = document.getElementById("surpriseButton");
const surpriseMessage = document.getElementById("surpriseMessage");


// ENTER WEBSITE

enterButton.addEventListener("click", async function () {

    intro.style.display = "none";

    mainContent.classList.add("show");

    window.scrollTo(0, 0);

    // START MUSIC AFTER USER CLICK

    try {

        await music.play();

        musicBtn.innerHTML = "♫ MUSIC ON";

    } catch (error) {

        console.log("Music could not start:", error);

        musicBtn.innerHTML = "♫ MUSIC OFF";

    }

});


// MUSIC ON / OFF

musicBtn.addEventListener("click", async function () {

    if (music.paused) {

        try {

            await music.play();

            musicBtn.innerHTML = "♫ MUSIC ON";

        } catch (error) {

            console.log("Audio Error:", error);

        }

    } else {

        music.pause();

        musicBtn.innerHTML = "♫ MUSIC OFF";

    }

});


// FINAL SURPRISE

surpriseButton.addEventListener("click", function () {

    surpriseMessage.classList.toggle("show");

    if (surpriseMessage.classList.contains("show")) {

        surpriseButton.innerHTML = "CLOSE SURPRISE ❤️";

    } else {

        surpriseButton.innerHTML = "OPEN YOUR SURPRISE 🎁";

    }

});