export function SmoothHorizontalScrolling(e, time, amuont, start) {
  var eAmt = amuont / 100;
  var curTime = 0;
  var scrollCuonter = 0;
  const y = window.scrollY;
  while (curTime <= time) {
    window.setTimeout(SHS_B, curTime, e, scrollCuonter, eAmt, start, y);
    curTime += time / 100;
    scrollCuonter++;
  }
  window.scrollTo(0, y);
}

function SHS_B(e, sc, eAmt, start, y) {
  e.scrollLeft = eAmt * sc + start;
}

export const randomColor = (opacity) => {
  const R = Math.round(Math.random() * 256);
  const B = Math.round(Math.random() * 256);
  const G = Math.round(Math.random() * 256);

  let color = `rgba(${R}, ${G}, ${B}, ${opacity})`;
  return color;
};
