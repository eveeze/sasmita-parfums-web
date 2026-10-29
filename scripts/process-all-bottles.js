import fs from 'fs';
import { execSync } from 'child_process';

const outDir = '/home/eveeze/Project/personal/sasmita-parfums-web/public/assets/products';
fs.mkdirSync(outDir, { recursive: true });

const items = [
  {
    src: '/home/eveeze/Project/personal/sasmita-parfums-web/public/assets/esenzzia/products/379-meteore.jpg',
    out: `${outDir}/sasmita-379.jpg`,
    code: '379',
    category: 'UNISEX',
    edition: 'Exclusive'
  },
  {
    src: '/home/eveeze/Project/personal/sasmita-parfums-web/public/assets/esenzzia/products/428-reckless.jpg',
    out: `${outDir}/sasmita-428.jpg`,
    code: '428',
    category: 'PRIA',
    edition: 'Exclusive'
  },
  {
    src: '/home/eveeze/Project/personal/sasmita-parfums-web/public/assets/esenzzia/products/565-palatine.jpg',
    out: `${outDir}/sasmita-565.jpg`,
    code: '565',
    category: 'WANITA',
    edition: 'Exclusive'
  },
  {
    src: '/home/eveeze/Project/personal/sasmita-parfums-web/public/assets/esenzzia/products/708-creed.jpg',
    out: `${outDir}/sasmita-708.jpg`,
    code: '708',
    category: 'PRIA',
    edition: 'Exclusive'
  },
  {
    src: '/home/eveeze/Project/personal/sasmita-parfums-web/public/assets/esenzzia/products/728-oud.jpg',
    out: `${outDir}/sasmita-728.jpg`,
    code: '728',
    category: 'UNISEX',
    edition: 'Exclusive'
  },
  {
    src: '/home/eveeze/Project/personal/sasmita-parfums-web/public/assets/esenzzia/products/773-noir.jpg',
    out: `${outDir}/sasmita-773.jpg`,
    code: '773',
    category: 'WANITA',
    edition: 'Exclusive'
  }
];

for (const p of items) {
  // 1. Generate matte black paper sticker label (96x118)
  const stickerSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="96" height="118" viewBox="0 0 96 118">
  <rect width="96" height="118" rx="2" fill="#1C1A19" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
  <text x="48" y="24" font-family="Inter, sans-serif" font-size="11.5" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="-0.02em">sasmita</text>
  <text x="48" y="64" font-family="Inter, sans-serif" font-size="32" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="-0.04em">${p.code}</text>
  <text x="48" y="78" font-family="Inter, sans-serif" font-size="7" font-weight="700" fill="#A8A29E" text-anchor="middle" letter-spacing="0.12em">${p.category}</text>
  <text x="48" y="93" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">${p.edition}</text>
  <line x1="15" y1="100" x2="81" y2="100" stroke="#33302E" stroke-width="0.8" />
  <text x="16" y="110" font-family="monospace" font-size="5" fill="#78716C">3.4 FL.OZ</text>
  <text x="80" y="110" font-family="monospace" font-size="5" fill="#78716C" text-anchor="end">100 ML</text>
</svg>
`;
  const svgPath = `/tmp/sticker-${p.code}.svg`;
  const pngPath = `/tmp/sticker-${p.code}.png`;
  fs.writeFileSync(svgPath, stickerSvg.trim());
  execSync(`magick "${svgPath}" "${pngPath}"`);

  // 2. Composite onto original studio photography with seamless pedestal patch
  // The pedestal text "esenzzia" is located at x=252 to 348, y=350 to 374
  execSync(`magick "${p.src}" \
    -fill "#0E090D" -draw "rectangle 252,350 348,374" \
    "${pngPath}" -geometry +241+160 -composite \
    "${p.out}"`);

  console.log(`Rendered clean luxury bottle: ${p.out}`);
}
