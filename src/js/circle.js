import * as P5 from 'p5';

const sketch = p5 => {
  const setting = {
    circleNum: 200,
    cx: 0,
    cy: 0,
    r: 0,
  }

  p5.preload = () => {
    //
  };

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    setting.cx = p5.width / 2;
    setting.cy = p5.height / 2;
    setting.r = Math.min(p5.windowWidth, p5.windowHeight) / 2 - 20;
  };

  p5.draw = () => {
    p5.clear();
    p5.background('#333');

    // Circular Dots
    p5.stroke(255);
    p5.noFill();

    // Circular Dots
    [...new Array(setting.circleNum)].forEach((_, i) => {
      const rad = i / setting.circleNum * p5.PI * 2;
      const x = setting.r * p5.cos(rad) + setting.cx;
      const y = setting.r * p5.sin(rad) + setting.cy;
      p5.point(x, y);
    });
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  }
};

const sketchP = new P5(sketch);