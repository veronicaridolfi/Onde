
let osc, playing, freq, amp;

function setup() {
  let cnv = createCanvas(500, 500);
  cnv.mousePressed(playOscillator);
  osc = new p5.Oscillator('sine');
}

function draw() {
  background(220)
  
  let mx = 10;
	let my = 2;
  
	//sinusoide
  let numero_di_punti = 1000;
  noStroke();
 	for (let i = 0; i < numero_di_punti; i++) {
	  let x = map(i, 0, numero_di_punti, -mx, mx);
  
	  let y1 = amp*sin(x);
  
	  let x_plot = map(x, -mx, mx, 0, width);
  
	  fill(255,0,0);
	  rect(x_plot, map(y1, -my, my, 0, height), 2, 2);
	} 


  freq = constrain(map(mouseX, 0, width, 100, 500), 100, 500);
  amp  = constrain(map(mouseY, height, 0, 0, 1), 0, 1);

  text('tap to play', 20, 20);
  text('freq: ' + freq, 20, 40);
  text('amp: ' + amp, 20, 60);

  if (playing) {
    // smooth the transitions by 0.1 seconds
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
  }
}

function playOscillator() {
  // starting an oscillator on a user gesture will enable audio
  // in browsers that have a strict autoplay policy.
  // See also: userStartAudio();
  osc.start();
  playing = true;
}

function mouseReleased() {
  // ramp amplitude to 0 over 0.5 seconds
  osc.amp(0, 0.5);
  playing = false;
}
