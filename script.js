document.onkeyup = (event) => {
    let key = event.key;
    if ([1, 2, 3].indexOf(Number(key)) > -1) {
        const audio = document.querySelector(`#audio${key}`);
        if (audio.paused) {
            audio.play();
        } else {
            var fadeInterval = setInterval(function(){fadeOut(audio) },300);
            fadeOut(audio);
        }
    }
};

function fadeOut(audio) {
    // TODO: loop for 2 seconds dropping the volume as you go
    if(audio.volume >= 0.0){
          audio.volume -= 0.1;
      }else{
          //audio.pause();
          clearInterval(fadeInterval)
          audio.pause();
      }
}
