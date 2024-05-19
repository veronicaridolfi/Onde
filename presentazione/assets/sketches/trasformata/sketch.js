let c1f, c1o, c1a
let c2f, c2o, c2a
let c3f, c3o, c3a

function setup() {
	createCanvas(windowWidth, windowHeight);
//1
	c1f = createSlider(-15, 15, 0, 0.1)
	c1f.position(10, 10)
	c1f.size(200)

	c1o = createSlider(-3, 3, 0, 0.1)
	c1o.position(220, 10)
	c1o.size(200)

	c1a = createSlider(0, 1, 1, 0.1)
	c1a.position(430, 10)
	c1a.size(200)

//2
	c2f = createSlider(-15, 15, 0, 0.1)
	c2f.position(10, 130)
	c2f.size(200)

	c2o = createSlider(-3, 3, 0, 0.1)
	c2o.position(220, 130)
	c2o.size(200)

	c2a = createSlider(0, 1, 1, 0.1)
	c2a.position(430, 130)
	c2a.size(200)
//3
	c3f = createSlider(-15,15, 0, 0.1)
	c3f.position(10, 250)
	c3f.size(200)

	c3o = createSlider(-3, 3, 0, 0.1)
	c3o.position(220, 250)
	c3o.size(200)

	c3a = createSlider(0, 1, 1, 0.1)
	c3a.position(430, 250)
	c3a.size(200)

}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(255);


	const mx = 10;
	const my = 2;
	const altezza = height / 4

	const numero_di_punti = 1000;

	const t = frameCount * 0.05;

	noStroke();

	for (let i = 0; i < numero_di_punti; i++) {
		const x = map(i, 0, numero_di_punti, -mx, mx);
		const x_plot = map(x, -mx, mx, 0, width);

		const y1 = sin(x * c1f.value() - t * c1o.value()) * c1a.value();
		const y2 = sin(x * c2f.value() - t * c2o.value()) * c2a.value();
		const y4 = cos(x * c3f.value() - t * c3o.value()) * c3a.value() 
		const y3 = y1 + y2 + y4;

		text('freq: ' + c1f.value() + ' hz', 10,10);
		text('freq: ' + c2f.value() + ' hz', 10,130);
		text('freq: ' + c3f.value() + ' hz', 10,250);

		text('fase: ' + c1o.value(), 220,10);
		text('fase: ' + c2o.value(), 220,130);
		text('fase: ' + c3o.value(), 220,250);

		text('amp: ' + c1a.value(),430,10);
		text('amp: ' + c2a.value(),430,130);
		text('amp: ' + c3a.value(),430,250);


	


		// y1
		fill(255, 0, 0);
		rect(x_plot, map(y1, -my, my, 0, altezza) + altezza * 0, 2, 2);

		// y2
		fill(255, 0, 0);
		rect(x_plot, map(y2, -my, my, 0, altezza) + altezza * 1, 2, 2);

		// y4
		fill(255,0,0)
        rect(x_plot, map(y4, -my, my, 0, altezza) + altezza * 2, 2, 2)

		// y3
		fill(255, 0, 0);
		rect(x_plot, map(y3, -my, my, 0, altezza) + altezza * 3, 2, 2);
	}
}
