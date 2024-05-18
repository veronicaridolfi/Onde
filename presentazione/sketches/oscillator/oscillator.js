
let osc, playing, freq, amp;
let sf
let sa

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(playOscillator);
  osc = new p5.Oscillator('sine');

  sf = createSlider(0,500, 0, 1)
  sf.position(80,30)
  sf.size(200)
  
  sa = createSlider(0,10, 0, 0.1)
  sa.position(80,50)
  sa.size(200)


}

function draw() {
  background(255)
  
  let mx = 10;
	let my = 2;
  
	//sinusoide
  let numero_di_punti = 2000;
  noStroke();
  
  freq = sf.value()
  amp  = sa.value()
 
  for (let i = 0; i < numero_di_punti; i++) {
     
     const x = map(i, 0, numero_di_punti, -mx, mx);
     const x_plot = map(x, -mx, mx, 0, width);
  
	   const y1 = sin(x*freq*0.01)*amp*0.1;
  
	  fill(255,0,0);
	  rect(x_plot, map(y1, -my, my, 0, height), 2, 2);
	} 



  text('tap to play', 20, 20);
  text('freq: ' + freq, 20, 43);
  text('amp: ' + amp, 20, 63);

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

