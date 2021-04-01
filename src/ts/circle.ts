import * as P5 from 'p5';

interface circle {
  pointNum: number,
  cx: number,
  cy: number,
  r: number,
  degree: number,
  noiseScale: number,
  opacity: number,
  seed: number,
  seedStep: number
}

const sketch = (p5: P5) => {
  const circles = Array(100);

  const setCoordination = (c: circle) => {
    c.cx = p5.width / 2;
    c.cy = p5.height / 2;
    c.r = p5.min(p5.windowWidth, p5.windowHeight) / 2;
  };

  p5.preload = () => {
    //
  };

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);

    [...new Array(circles.length)].forEach((_, i) => {
      circles[i] = {};
      setCoordination(circles[i]);

      circles[i].pointNum = p5.floor(p5.random(20, 50));
      circles[i].degree = p5.random(-90, 90);
      circles[i].noiseScale = .01;
      circles[i].seed = p5.random(100);
      circles[i].seedStep = p5.random(.001, .0025);
    });

    p5.strokeWeight(.1);
    // p5.noLoop();

    p5.background('#333')
  };

  p5.draw = () => {
    // p5.clear();
    p5.background('#333');

    // Circular Dots
    p5.smooth();
    p5.stroke(255);
    p5.noFill();

    // Circular Dots
    circles.forEach((c, i) => {
      const startPoints = [];
      p5.beginShape();

      [...new Array(c.pointNum)].forEach((_, j) => {
        const rad = j / c.pointNum * p5.PI * 2 + c.degree;

        const pN = p5.noise(
            c.r * p5.cos(rad) * c.noiseScale + c.cx,
            c.r * p5.sin(rad) * c.noiseScale + c.cy,
            c.seed
        );
        const pR = c.r * p5.noise(pN);

        const x = pR * p5.cos(rad) + c.cx;
        const y = pR * p5.sin(rad) + c.cy;

        // Draw points for debug
        // p5.stroke('red');
        // p5.point(x, y);

        // Draw curve vertex
        // p5.stroke(255);
        p5.curveVertex(x, y);

        // Set 3 points for closing
        if (j < 3) {
          startPoints[j] = {};
          startPoints[j].x = x;
          startPoints[j].y = y;
        }
      });

      // Draw residual curve vertex
      startPoints.forEach((c, j) => {
        p5.curveVertex(c.x, c.y);
      });

      p5.endShape();
      c.seed += c.seedStep;
    });
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    circles.forEach((c, _) => {
      setCoordination(c);
    });
  }
};

new P5(sketch);