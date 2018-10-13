var sans;
var megalovainia;
var isPlaying = false;

function preload() {
  soundFormats('mp3', 'ogg');
  megalovainia = loadSound('song.mp3');
}

function setup() {
    noCanvas();
    sans = createImg('https://slm-assets2.secondlife.com/assets/12703379/view_large/sans_512.jpg?1446743951');
    
}

function draw() {
    if (sans.mouseClicked(true)) {
      if (isPlaying == true) {
        stopSound();
        return;
      } else {
        playSound();
      }
    }
}

function playSound() {
    megalovainia.play();
    isPlaying = true;
}

function stopSound() {
    megalovainia.stop();
}
