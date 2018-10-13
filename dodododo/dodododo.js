var sans;
var megalovainia;

function preload() {
  soundFormats('mp3', 'ogg');
  megalovainia = loadSound('song.mp3');
}

function setup() {
    noCanvas();
    sans = createImg('https://slm-assets2.secondlife.com/assets/12703379/view_large/sans_512.jpg?1446743951');
    sans.mousePressed(playSound());
    sans.mouseReleased(stopSound());
}

function draw() {
    
}

function playSound() {
    megalovainia.play();
}

function stopSound() {
    megalovainia.stop();
}