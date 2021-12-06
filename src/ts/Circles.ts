import isMobile from "ismobilejs"
import * as P5 from "p5"

interface circle {
  pointNum: number
  cx: number
  cy: number
  r: number
  degree: number
  noiseScale: number
  seed: number
  seedStep: number
}

let eF = 1
let dC = 0

const sketch = (p5: P5) => {
  const circles = Array(100)

  const setCoordination = (c: circle) => {
    c.cx = p5.width / 2
    c.cy = p5.height / 2
    c.r = (p5.min(p5.windowWidth, p5.windowHeight) / 2) * 1.1
  }

  p5.preload = () => {
    //
  }

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight)

    ;[...new Array(circles.length)].forEach((_, i) => {
      circles[i] = {}
      setCoordination(circles[i])

      circles[i].pointNum = p5.floor(p5.random(20, 60))
      circles[i].degree = p5.random(-90, 90)
      circles[i].noiseScale = isMobile().any ? 0.005 : 0.002
      circles[i].seed = p5.random(100)
      circles[i].seedStep = p5.random(0.001, 0.0025)
    })

    p5.noFill()
    p5.stroke(isMobile().any ? "rgba(255,255,255,.2)" : "255")
    p5.strokeWeight(isMobile().any ? 0.5 : 0.2)
    // p5.noLoop();
  }

  p5.draw = () => {
    p5.clear()
    p5.background("#333")
    p5.smooth()

    // Circular Dots
    circles.forEach((c, i) => {
      const startPoints = []
      p5.beginShape()

      ;[...new Array(c.pointNum)].forEach((_, j) => {
        const rad = (j / c.pointNum) * p5.PI * 2 + c.degree

        const pN = p5.noise(c.r * p5.cos(rad) * c.noiseScale + c.cx, c.r * p5.sin(rad) * c.noiseScale + c.cy, c.seed)
        const pR = c.r * p5.noise(pN)

        // Set expansion parameter if the pR is too small
        if (i === 0 && j === 0 && pR < c.r / 2 && dC === 0) {
          eF = (c.r / pR) * 0.5
          // console.log(eF);
        }

        const x = pR * eF * p5.cos(rad) + c.cx
        const y = pR * eF * p5.sin(rad) + c.cy

        // Draw points for debug
        // p5.stroke('red');
        // p5.point(x, y);

        // Draw curve vertex
        // p5.stroke(255);
        p5.curveVertex(x, y)

        // Set 3 points for closing
        if (j < 3) {
          startPoints[j] = {}
          startPoints[j].x = x
          startPoints[j].y = y
        }
      })

      // Draw residual curve vertex
      startPoints.forEach((c, _) => {
        p5.curveVertex(c.x, c.y)
      })

      p5.endShape()
      c.seed += c.seedStep
    })

    dC++
  }

  // Resize
  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
    circles.forEach((c, _) => {
      setCoordination(c)
    })
  }
}

new P5(sketch)
