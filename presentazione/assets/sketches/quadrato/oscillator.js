
let osc, playing, freq, amp;


function setup() {
  let cnv = createCanvas(100,100);
  cnv.mousePressed(playOscillator);

  osc = new p5.Oscillator('square')
}

function draw() {
  background(255)
  
  let mx = 10;
	let my = 2;
  
	//sinusoide
  let numero_di_punti = 2000;
  noStroke();
  
  freq = 200
  amp  = 2

rect(20, 20,60,60)


  fill(255,0,0)
  text('tap to play', 20, 15);
 

  if (playing) {
    // smooth the transitions by 0.1 seconds
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
  }
}

function playOscillator() {
  osc.start()
  playing = true
}
function mouseReleased() {
  // ramp amplitude to 0 over 0.5 seconds
  osc.amp(0, 0.5);
  playing = false;
}

