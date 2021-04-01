import * as p5 from 'p5';

const sketch = (p: p5) => {
  const noiseScale = .001;
  const setting = {
    circleNum: 400,
    cx: 0,
    cy: 0,
    r: 0,
  };
  let r = 0;
  let seed = [10];

  p.preload = () => {
    //
  };

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    setting.cx = p.width / 2;
    setting.cy = p.height / 2;
    setting.r = Math.min(p.windowWidth, p.windowHeight) / 2;
    r = setting.r;

    // p.noLoop();
  };

  p.draw = () => {
    p.clear();
    p.background('#333');

    // Circular Dots
    p.smooth();
    p.stroke(255);
    p.noFill();

    // Circular Dots
    [...new Array(20)].forEach((_, i) => {
      [...new Array(setting.circleNum)].forEach((_, j) => {
        const rad = j / setting.circleNum * p.PI * 2;
        const pN = p.noise(
          r * p.cos(rad) * noiseScale + setting.cx,
          r * p.sin(rad) * noiseScale + setting.cy,
          seed[i]
        );
        const pR = r * p.noise(pN);
        const x = pR * p.cos(rad) + setting.cx;
        const y = pR * p.sin(rad) + setting.cy;
        p.point(x, y);
      });

      seed[i] += .001;
    });
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }
};

new p5(sketch);