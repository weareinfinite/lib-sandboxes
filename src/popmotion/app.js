import './style.css';
import { easing, tween, styler } from 'popmotion';

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
