import './style.css';
import { easing, tween, styler } from 'popmotion';

import { spring, listen, value, pointer } from 'popmotion';// Example 2

// Example 1
const divStyler = styler(document.querySelector('.box1'));

tween({
  from: {x: 0, scale:1},
  to: { x: 300, rotate: 180, scale: 1.5 },
  duration: 1000,
  ease: easing.backOut,
  flip: Infinity,
  // elapsed: 500,
  // loop: 5,
  // yoyo: 5
}).start(divStyler.set);


// Example 2 
const ball = document.querySelector('.ball');
const divBallStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divBallStyler.set);

listen(ball,'mousedown touchstart')
    .start(e=> {
      e.preventDefault();
      pointer(ballXY.get()).start(ballXY); // Pointer means the mouse pointer

    })

listen(document, 'mouseup touchend')
      .start(() => {
        spring({
         from: ballXY.get(),
         velocity: ballXY.getVelocity(),
         to: {x:0, y:0},
         stiffness: 200
        }).start(ballXY);
      })

