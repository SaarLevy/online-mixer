const clap = new Audio("./sounds/clap.wav");
$("#clapButton").click(() => {
    clap.currentTime = 0.125; // Temporary, soundfile has a bit of nothing at the beginning 
    clap.play();
});
