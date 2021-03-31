import * as P5 from 'p5';

const sketch = p5 => {
  const setting = {
    circleNum: 100,
    cx: p5.width / 2,
    cy: p5.height / 2,
  }

  p5.preload = () => {
    //
  };

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
  };

  p5.draw = () => {
    p5.clear();
    p5.background('#333');

    // Circle
    // p5.stroke(255);
    // p5.noFill();
    //
    // let diameter = Math.min(p5.windowWidth, p5.windowHeight) - 20;
    // p5.circle(p5.windowWidth / 2, p5.windowHeight / 2, diameter);


  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  }
};

const sketchP = new P5(sketch);