let slider1, slider2 


function setup() {
	createCanvas(1000, 500);
	
	slider1 = createSlider(0,255);
	slider1.position(10, 10);
	slider1.size(100);
	
	slider2 = createSlider(0, 255);
	slider2.position(10, 30);
	slider2.size(100);
}
  
  function draw() {
	background(220);
	let a = slider1.value();
	let b = slider2.value();
  
  
	let mx = 10;
	let my = 2;
  
	let numero_di_punti = 1000;
  
	noStroke();
  
	for (let i = 0; i < numero_di_punti; i++) {
	  let x = map(i, 0, numero_di_punti, -mx, mx);
  
	  let y1 = sin(x* 0.9 - frameCount/a);
	  let y2 = sin(x*3 - frameCount/b) * 0.3;
	  
  
	  let y_somma = y1 + y2;
  
	  let x_plot = map(x, -mx, mx, 0, width);
  
	  fill(255,0,0);
	  rect(x_plot, map(y1, -my, my, 0, height/6), 2, 2);
	 
	  fill(255,0,0);
	  rect(x_plot, map(y2, -my, my, 0, height/2.5),2, 2);
	  
	  //somma
	  fill(255,0,0);
	  rect(x_plot, map(y_somma, -my, my, 0, height/0.8), 2, 2);
	}
  }
  