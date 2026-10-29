import fs from 'fs';
import { execSync } from 'child_process';

// 1. Create 3D White letters for "sasmita" on angled perspective
// The signboard runs from x=450 to 1920, y=480 to 930
// Perspective tilt is around 8 degrees
const signSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1300" height="420" viewBox="0 0 1300 420">
  <defs>
    <filter id="shadow3D" x="-20%" y="-20%" width="150%" height="150%">
      <feDropShadow dx="-8" dy="18" stdDeviation="12" flood-color="#000000" flood-opacity="0.85" />
    </filter>
  </defs>

  <!-- Clean matte black cover matching the signboard texture -->
  <rect width="1300" height="420" fill="#1C1A18" />

  <!-- 3D White Extruded Letters: sasmita -->
  <g transform="translate(100, 270) skewY(6.5)" filter="url(#shadow3D)">
    <!-- 3D Extrusion Side Wall -->
    <text x="0" y="24" font-family="Inter, sans-serif" font-size="240" font-weight="900" letter-spacing="-0.04em" fill="#94A3B8">sasmita</text>
    <text x="0" y="16" font-family="Inter, sans-serif" font-size="240" font-weight="900" letter-spacing="-0.04em" fill="#CBD5E1">sasmita</text>
    <text x="0" y="8" font-family="Inter, sans-serif" font-size="240" font-weight="900" letter-spacing="-0.04em" fill="#E2E8F0">sasmita</text>
    <!-- Front Face -->
    <text x="0" y="0" font-family="Inter, sans-serif" font-size="240" font-weight="900" letter-spacing="-0.04em" fill="#FFFFFF">sasmita</text>
  </g>
</svg>
`;

fs.writeFileSync('/tmp/tienda-sasmita.svg', signSvg.trim());
execSync(`magick /tmp/tienda-sasmita.svg -background none /tmp/tienda-sasmita.png`);

// Composite onto 08-banner-tienda.jpg at +420+490
execSync(`magick /home/eveeze/Project/personal/sasmita-parfums-web/public/assets/esenzzia/08-banner-tienda.jpg \
  /tmp/tienda-sasmita.png -geometry +420+490 -composite \
  /home/eveeze/Project/personal/sasmita-parfums-web/public/assets/esenzzia/08-banner-tienda-clean.jpg`);

console.log('Saved 08-banner-tienda-clean.jpg');
