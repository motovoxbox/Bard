document.onkeyup = (event) => {
    let key = event.key;
    if ([1, 2, 3].indexOf(Number(key)) > -1) {
        const audio = document.querySelector(`#audio${key}`);
        if (audio.paused) {
            audio.play();
        } else {
            fadeOut(audio);
        }
    }
};

function fadeOut(audio) {
    // TODO: loop for 2 seconds dropping the volume as you go
    audio.pause()
}
