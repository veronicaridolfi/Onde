let c1f, c1o, c1a
let c2f, c2o, c2a
let c3f, c3o, c3a

function setup() {
	createCanvas(windowWidth, windowHeight);
// //1
// 	c1f = createSlider(-15, 15, 0, 0.1)
// 	c1f.position(10, 30)
// 	c1f.size(200)

// 	c1o = createSlider(-3, 3, 0, 0.1)
// 	c1o.position(220, 30)
// 	c1o.size(200)

// 	c1a = createSlider(0, 1, 1, 0.1)
// 	c1a.position(430, 30)
// 	c1a.size(200)

// //2
// 	c2f = createSlider(-15, 15, 0, 0.1)
// 	c2f.position(10, 230)
// 	c2f.size(200)

// 	c2o = createSlider(-3, 3, 0, 0.1)
// 	c2o.position(220, 230)
// 	c2o.size(200)

// 	c2a = createSlider(0, 1, 1, 0.1)
// 	c2a.position(430, 230)
// 	c2a.size(200)
// //3
// 	c3f = createSlider(-15,15, 0, 0.1)
// 	c3f.position(10, 430)
// 	c3f.size(200)

// 	c3o = createSlider(-3, 3, 0, 0.1)
// 	c3o.position(220, 430)
// 	c3o.size(200)

// 	c3a = createSlider(0, 1, 1, 0.1)
// 	c3a.position(430, 430)
// 	c3a.size(200)

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

		const y1 = sin(x * 9 - t * -2.3) * 0.5;
		const y2 = sin(x * -9.5 - t * 0.3) * 0.6;
		const y4 = cos(x * -10 - t * 1.5) * 0.1
		const y3 = y1 + y2 + y4;

		// text('freq: ' + c1f.value(), 10,30);
		// text('freq: ' + c2f.value(), 10,230);
		// text('freq: ' + c3f.value(), 10,430);

		// text('fase: ' + c1o.value(), 220,30);
		// text('fase: ' + c2o.value(), 220,230);
		// text('fase: ' + c3o.value(), 220,430);

		// text('amp: ' + c1a.value(),430,30);
		// text('amp: ' + c2a.value(),430,230);
		// text('amp: ' + c3a.value(),430,430);


	


		// // y1
		// fill(255, 0, 0);
		// rect(x_plot, map(y1, -my, my, 0, altezza) + altezza * 0, 2, 2);

		// // y2
		// fill(255, 0, 0);
		// rect(x_plot, map(y2, -my, my, 0, altezza) + altezza * 1, 2, 2);

		// // y4
		// fill(255,0,0)
        // rect(x_plot, map(y4, -my, my, 0, altezza) + altezza * 2, 2, 2)

		// y3
		fill(0);
		rect(x_plot, map(y3, -my, my, 0, altezza) + altezza * 1, 2, 2);
	}
}
