// var dell'immagine
var immagine;

// var del suono
var musica;
var analyzer;

// var del colore
var colorList = [
  "thistle",
  "plum",
  "aliceBlue"
];

function preload() {
  // preload del file dell'immagine
  immagine = loadImage("./assets/rosa.jpg");

  // preload del file della canzone
  musica = loadSound("./assets/bensound-onceagain.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // setup del background
  background("white");

  analyzer = new p5.Amplitude();
  analyzer.setInput(musica);

}

function draw() {

  var volume = analyzer.getLevel();
  var index = floor(random() * colorList.length);
  var colorHex = colorList[index];

  // impostazioni dell'immagine
  image(immagine);
  immagine.resize(1008, 639);
  imageMode(CENTER);
  image(immagine, width / 2, height / 2, immagine.width, immagine.height);

  // linee che si muovono in base alla canzone
  for (var x = 216; x < 1216; x += 45) {
    for (var y = 75; y < 350; y += 40) {
      noFill();
      stroke(color(colorHex));
      line(x, y, x + volume * 100, y + volume * 100);
    }
  }
}

// al primo click del mouse la canzone inizia e il colore del background cambia; al secondo click la canzone si ferma e il background torna bianco
function mousePressed() {
  if (musica.isPlaying()) {
    musica.pause(); // la canzone riprende da dove si era fermata
    background("white");
  } else {
    musica.play();
    background("thistle");
  }
}
