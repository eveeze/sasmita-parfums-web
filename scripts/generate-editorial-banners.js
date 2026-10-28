import fs from 'fs';
import { execSync } from 'child_process';

const outDir = '/home/eveeze/Project/personal/sasmita-parfums-web/public/assets/editorial';
fs.mkdirSync(outDir, { recursive: true });

// 1. Hero 3D Studio Banner with Bottle 379
const heroSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="1600" height="900">
  <defs>
    <radialGradient id="greenGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#22C55E" stop-opacity="0.35" />
      <stop offset="40%" stop-color="#15803D" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="purpleBack" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#3B0764" stop-opacity="0.5" />
      <stop offset="50%" stop-color="#1E1B4B" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#080706" stop-opacity="1" />
    </radialGradient>
    <linearGradient id="podiumGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#262320" />
      <stop offset="100%" stop-color="#0C0A09" />
    </linearGradient>
  </defs>

  <!-- Dark Atmospheric Background -->
  <rect width="1600" height="900" fill="#080706" />
  <rect width="1600" height="900" fill="url(#purpleBack)" />
  
  <!-- Glowing Alchemical Magic / Mist -->
  <circle cx="800" cy="450" r="450" fill="url(#greenGlow)" />
  
  <!-- Arch Silhouette behind -->
  <path d="M600,600 C600,280 1000,280 1000,600 Z" fill="none" stroke="#A855F7" stroke-width="2.5" opacity="0.35" />
  <circle cx="800" cy="300" r="160" fill="#FFFFFF" opacity="0.08" />

  <!-- Studio Cauldron / Circular Stand Base -->
  <ellipse cx="800" cy="740" rx="420" ry="85" fill="url(#podiumGrad)" stroke="#3E3A36" stroke-width="2" />
  <ellipse cx="800" cy="720" rx="360" ry="60" fill="#141210" stroke="#262320" stroke-width="2" />

  <!-- Glowing swirl arcs -->
  <path d="M680,620 Q740,480 880,380" fill="none" stroke="#4ADE80" stroke-width="3" opacity="0.8" />
  <path d="M890,560 Q940,420 860,340" fill="none" stroke="#22C55E" stroke-width="2" opacity="0.6" />
</svg>
`;
fs.writeFileSync('/tmp/hero-base.svg', heroSvg.trim());
execSync(`magick /tmp/hero-base.svg -quality 95 "${outDir}/hero-alchemist.jpg"`);

// 2. Banner Novedades (Lineup of Bottles on Shelf)
const shelfSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 800" width="1600" height="800">
  <defs>
    <linearGradient id="shelfBack" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1E1035" />
      <stop offset="60%" stop-color="#2D1B4E" />
      <stop offset="100%" stop-color="#0A080D" />
    </linearGradient>
    <linearGradient id="glassShelf" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.7" />
      <stop offset="50%" stop-color="#E0F2FE" stop-opacity="0.95" />
      <stop offset="100%" stop-color="#38BDF8" stop-opacity="0.7" />
    </linearGradient>
  </defs>

  <rect width="1600" height="800" fill="url(#shelfBack)" />
  <line x1="100" y1="560" x2="1500" y2="560" stroke="url(#glassShelf)" stroke-width="5" />
  <rect x="100" y="562" width="1400" height="12" fill="#0284C7" opacity="0.25" />
  <ellipse cx="800" cy="560" rx="550" ry="120" fill="#38BDF8" opacity="0.08" />
</svg>
`;
fs.writeFileSync('/tmp/shelf-base.svg', shelfSvg.trim());
execSync(`magick /tmp/shelf-base.svg -quality 95 "${outDir}/shelf-background.jpg"`);

// 3. Banner Top Ventas (Studio Horizon)
const horizonSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 800" width="1600" height="800">
  <defs>
    <radialGradient id="silverSpot" cx="50%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="40%" stop-color="#D6D3D1" />
      <stop offset="85%" stop-color="#44403C" />
      <stop offset="100%" stop-color="#1C1917" />
    </radialGradient>
    <linearGradient id="floorGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0C0A09" />
      <stop offset="25%" stop-color="#44403C" />
      <stop offset="100%" stop-color="#1C1917" />
    </linearGradient>
  </defs>

  <!-- Wall -->
  <rect x="0" y="0" width="1600" height="520" fill="url(#silverSpot)" />
  <line x1="0" y1="520" x2="1600" y2="520" stroke="#000000" stroke-width="3" />
  <!-- Reflective Floor -->
  <rect x="0" y="520" width="1600" height="280" fill="url(#floorGrad)" />
</svg>
`;
fs.writeFileSync('/tmp/horizon-base.svg', horizonSvg.trim());
execSync(`magick /tmp/horizon-base.svg -quality 95 "${outDir}/silver-horizon.jpg"`);

console.log('Generated all editorial studio backgrounds.');
