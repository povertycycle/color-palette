export function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getLuma(color: string) {
  var rgb = parseInt(
    color.slice(color.indexOf('#') + 1, color.indexOf('#') + 7),
    16
  );
  return (
    0.2126 * ((rgb >> 16) & 0xff) +
    0.7152 * ((rgb >> 8) & 0xff) +
    0.0722 * ((rgb >> 0) & 0xff)
  );
}

export function isDark(c?: string) {
  return c ? getLuma(c) < 156 : false;
}

export function blendColors(colorA: string, colorB: string) {
  const [rA, gA, bA] = (colorA.match(/\w\w/g) as string[]).map((c) =>
    parseInt(c, 16)
  );
  const [rB, gB, bB] = (colorB.match(/\w\w/g) as string[]).map((c) =>
    parseInt(c, 16)
  );
  const r = Math.round(rA + (rB - rA) * 0.5)
    .toString(16)
    .padStart(2, '0');
  const g = Math.round(gA + (gB - gA) * 0.5)
    .toString(16)
    .padStart(2, '0');
  const b = Math.round(bA + (bB - bA) * 0.5)
    .toString(16)
    .padStart(2, '0');
  return '#' + r + g + b;
}
