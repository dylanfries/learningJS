function setup() {
  createCanvas(255, 255); // Set canvas size to 255 by 255 pixels.
  noStroke(); // Disable the drawing of outlines around shapes.
}

function draw() {
  background(255, 10); // White background with an alpha transparency.
  let oscillation = 127 * sin(frameCount / 100) + 128; // Sinusoidal transition from 1-ish to 255-ish.
  fill(oscillation, 0, 255 - oscillation); // The fill color of the circle.
  circle(mouseX, mouseY, oscillation); // Draw the circle at the current mouse position.
}