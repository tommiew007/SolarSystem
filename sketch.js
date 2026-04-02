const canvas = document.getElementById('c'), ctx = canvas.getContext('2d');
let W, H; function resize(){W=canvas.width=innerWidth;H=canvas.height=innerHeight;}
window.onresize = resize; resize();

const audioCtx = new (window.AudioContext||window.webkitAudioContext)();
const oscL = audioCtx.createOscillator(), oscR = audioCtx.createOscillator();
const pL = audioCtx.createStereoPanner(), pR = audioCtx.createStereoPanner();
oscL.connect(pL).connect(audioCtx.destination); oscR.connect(pR).connect(audioCtx.destination);
pL.pan.value = -1; pR.pan.value = 1; oscL.start(); oscR.start();

const moments = [
  { start:[210,50,80], end:[240,60,90], flash:0.2, base:200, offset:4, dur:8000 },
  { start:[240,60,90], end:[270,40,70], flash:0.1, base:180, offset:6, dur:10000 },
  // add more
];

let idx = 0, t0 = performance.now();

function draw(now){
  let m = moments[idx], t = (now - t0)/m.dur;
  if (t >= 1){ idx = (idx+1)%moments.length; t0 = now; m = moments[idx]; t = 0;
    oscL.frequency.setValueAtTime(m.base, audioCtx.currentTime);
    oscR.frequency.setValueAtTime(m.base + m.offset, audioCtx.currentTime);
  }

  // interpolate HSB then convert to RGB
  const lerp = (a,b) => a + (b-a)*t;
  const [h1,s1,b1] = m.start, [h2,s2,b2] = m.end;
  const [h,s,b] = [lerp(h1,h2), lerp(s1,s2), lerp(b1,b2)];
  ctx.fillStyle = `hsl(${h},${s}%,${b}%)`; ctx.fillRect(0,0,W,H);

  if (m.flash > 0 && Math.floor(now/500)%2===0){
    ctx.fillStyle = `rgba(255,255,255,${m.flash})`;
    ctx.fillRect(0,0,W,H);
  }

  requestAnimationFrame(draw);
}

audioCtx.resume().then(()=>requestAnimationFrame(draw));
