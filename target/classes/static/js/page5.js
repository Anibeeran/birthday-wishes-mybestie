



let name = localStorage.getItem("birthdayName");
document.getElementById("userName").innerText = name || "Bestie";

const playBtn = document.getElementById("playBtn");
const song = document.getElementById("song");
const overlay = document.getElementById("overlay");

song.loop = true;

// Play button
playBtn.addEventListener("click", () => {

    song.play();

    playBtn.style.display = "none";

    overlay.style.opacity = "0";

    setTimeout(() => {
        overlay.style.display = "none";
    }, 500);

});

// Vinyl button play/pause
function toggleMusic() {

    if (song.paused) {
        song.play();
    } else {
        song.pause();
    }

}