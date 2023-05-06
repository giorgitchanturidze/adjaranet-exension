// On movie page i want to hide the movie controls when the mouse is not moving and show them when the mouse is moving
// I want to hide the controls after 3 seconds of not moving the mouse
// I want to show the controls when the mouse is moving
// controls div class name is vjs-control-bar
const controls = document.querySelector(".vjs-control-bar");
const video = document.querySelector("video");
let timeout;

function hideControls() {
    controls.style.display = "none";
    }

function showControls() {
    controls.style.display = "flex";
    }

function handleMouseMove() {
    if (timeout) {
        clearTimeout(timeout);
        timeout = null;
    }
    showControls();
    timeout = setTimeout(hideControls, 3000);
}

function handleMouseLeave() {
    hideControls();
}

function init() {
    video.addEventListener("mousemove", handleMouseMove);
    video.addEventListener("mouseleave", handleMouseLeave);
}

if (controls) {
    init();
}

console.log("This is a popup!");