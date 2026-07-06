import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { deflateSync } from 'node:zlib';

const width = 1920;
const height = 1080;
const output = resolve('client/src/assets/ubuntu-wallpaper.png');

const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n += 1) {
  let c = n;
  for (let k = 0; k < 8; k += 1) {
    c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  }
  crcTable[n] = c >>> 0;
}

function crc32(buffer) {
  let c = 0xffffffff;
  for (let i = 0; i < buffer.length; i += 1) {
    c = crcTable[(c ^ buffer[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data = Buffer.alloc(0)) {
  const typeBuffer = Buffer.from(type);
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])), 0);
  return Buffer.concat([length, typeBuffer, data, crc]);
}

function clamp(value) {
  return Math.max(0, Math.min(255, Math.round(value)));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function mix(a, b, t) {
  return [
    lerp(a[0], b[0], t),
    lerp(a[1], b[1], t),
    lerp(a[2], b[2], t),
  ];
}

const aubergine = [48, 10, 36];
const charcoal = [22, 5, 20];
const plum = [78, 18, 62];
const orange = [233, 84, 32];
const copper = [168, 60, 32];
const rose = [120, 32, 74];

const raw = Buffer.alloc((width * 4 + 1) * height);

for (let y = 0; y < height; y += 1) {
  const rowStart = y * (width * 4 + 1);
  raw[rowStart] = 0;

  for (let x = 0; x < width; x += 1) {
    const nx = x / width;
    const ny = y / height;
    const radialLeft = Math.max(0, 1 - Math.hypot(nx - 0.18, ny - 0.36) / 0.82);
    const radialRight = Math.max(0, 1 - Math.hypot(nx - 0.88, ny - 0.24) / 0.7);
    const diagonal = Math.max(0, 1 - Math.abs(nx * 0.8 + ny * 1.1 - 1.18) / 0.19);
    const fold = Math.max(0, 1 - Math.abs(nx * 1.1 - ny * 0.65 - 0.19) / 0.08);
    const softGlow = Math.max(0, 1 - Math.hypot(nx - 0.78, ny - 0.82) / 0.42);

    let color = mix(aubergine, charcoal, ny * 0.72 + nx * 0.18);
    color = mix(color, plum, radialLeft * 0.38);
    color = mix(color, rose, radialRight * 0.28);
    color = mix(color, copper, diagonal * 0.34);
    color = mix(color, orange, softGlow * 0.38);
    color = mix(color, [250, 130, 74], fold * 0.16);

    const vignette = 0.88 + 0.12 * Math.max(0, 1 - Math.hypot(nx - 0.5, ny - 0.5));
    const fineNoise = ((x * 17 + y * 31 + ((x * y) % 13)) % 23) - 11;
    const pixel = rowStart + 1 + x * 4;

    raw[pixel] = clamp(color[0] * vignette + fineNoise * 0.22);
    raw[pixel + 1] = clamp(color[1] * vignette + fineNoise * 0.16);
    raw[pixel + 2] = clamp(color[2] * vignette + fineNoise * 0.2);
    raw[pixel + 3] = 255;
  }
}

const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(width, 0);
ihdr.writeUInt32BE(height, 4);
ihdr[8] = 8;
ihdr[9] = 6;
ihdr[10] = 0;
ihdr[11] = 0;
ihdr[12] = 0;

const png = Buffer.concat([
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  chunk('IHDR', ihdr),
  chunk('IDAT', deflateSync(raw, { level: 9 })),
  chunk('IEND'),
]);

mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, png);
console.log(`Generated ${output}`);
