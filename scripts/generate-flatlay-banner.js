import fs from 'fs';
import { execSync } from 'child_process';

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 700" width="1600" height="700">
  <defs>
    <!-- Dark Studio Stone Floor -->
    <radialGradient id="studioLighting" cx="60%" cy="40%" r="70%">
      <stop offset="0%" stop-color="#262320" />
      <stop offset="60%" stop-color="#141210" />
      <stop offset="100%" stop-color="#080706" />
    </radialGradient>

    <!-- Cylinders Shadows -->
    <filter id="dropShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="15" dy="25" stdDeviation="20" flood-color="#000000" flood-opacity="0.6" />
    </filter>

    <!-- Cylinder Color Gradients -->
    <linearGradient id="gradYellow" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#F59E0B" />
      <stop offset="60%" stop-color="#D97706" />
      <stop offset="100%" stop-color="#92400E" />
    </linearGradient>

    <linearGradient id="gradBlue" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#38BDF8" />
      <stop offset="60%" stop-color="#0284C7" />
      <stop offset="100%" stop-color="#0369A1" />
    </linearGradient>

    <linearGradient id="gradPurple" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#C084FC" />
      <stop offset="60%" stop-color="#9333EA" />
      <stop offset="100%" stop-color="#6B21A8" />
    </linearGradient>

    <linearGradient id="gradPink" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#F472B6" />
      <stop offset="60%" stop-color="#DB2777" />
      <stop offset="100%" stop-color="#9D174D" />
    </linearGradient>

    <linearGradient id="gradGreen" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#4ADE80" />
      <stop offset="60%" stop-color="#16A34A" />
      <stop offset="100%" stop-color="#14532D" />
    </linearGradient>

    <linearGradient id="gradBlack" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#3F3C38" />
      <stop offset="60%" stop-color="#1C1917" />
      <stop offset="100%" stop-color="#0C0A09" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1600" height="700" fill="url(#studioLighting)" />

  <!-- Composition of Laid-Down Cylinder Tube Boxes (Signature Esenzzia Flatlay Aesthetic) -->
  
  <!-- 1. Blue Tube 678 (Top Center) -->
  <g transform="translate(720, 40) rotate(-35)" filter="url(#dropShadow)">
    <rect width="180" height="340" rx="14" fill="url(#gradBlue)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
    <line x1="0" y1="70" x2="180" y2="70" stroke="#000000" stroke-width="2.5" />
    <text x="90" y="50" font-family="Inter, sans-serif" font-size="12" font-weight="700" letter-spacing="0.2em" fill="#E0F2FE" text-anchor="middle">SASMITA</text>
    <text x="90" y="180" font-family="Inter, sans-serif" font-size="52" font-weight="900" letter-spacing="-0.04em" fill="#FFFFFF" text-anchor="middle">678</text>
    <text x="90" y="210" font-family="Inter, sans-serif" font-size="11" font-weight="600" letter-spacing="0.15em" fill="#E0F2FE" text-anchor="middle">UNISEX</text>
    <text x="90" y="240" font-family="Inter, sans-serif" font-size="20" font-weight="700" fill="#FFFFFF" text-anchor="middle">Almizcle</text>
  </g>

  <!-- 2. Yellow Tube 073 (Top Right) -->
  <g transform="translate(1220, 100) rotate(-40)" filter="url(#dropShadow)">
    <rect width="190" height="360" rx="14" fill="url(#gradYellow)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
    <line x1="0" y1="75" x2="190" y2="75" stroke="#000000" stroke-width="2.5" />
    <text x="95" y="52" font-family="Inter, sans-serif" font-size="13" font-weight="700" letter-spacing="0.2em" fill="#FEF3C7" text-anchor="middle">SASMITA</text>
    <text x="95" y="195" font-family="Inter, sans-serif" font-size="56" font-weight="900" letter-spacing="-0.04em" fill="#FFFFFF" text-anchor="middle">073</text>
    <text x="95" y="225" font-family="Inter, sans-serif" font-size="11" font-weight="600" letter-spacing="0.15em" fill="#FEF3C7" text-anchor="middle">WANITA</text>
    <text x="95" y="258" font-family="Inter, sans-serif" font-size="22" font-weight="700" fill="#FFFFFF" text-anchor="middle">Cítrica</text>
  </g>

  <!-- 3. Purple Tube 764 (Bottom Center) -->
  <g transform="translate(620, 360) rotate(-42)" filter="url(#dropShadow)">
    <rect width="200" height="380" rx="14" fill="url(#gradPurple)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
    <line x1="0" y1="80" x2="200" y2="80" stroke="#000000" stroke-width="2.5" />
    <text x="100" y="55" font-family="Inter, sans-serif" font-size="13" font-weight="700" letter-spacing="0.2em" fill="#F3E8FF" text-anchor="middle">SASMITA</text>
    <text x="100" y="210" font-family="Inter, sans-serif" font-size="62" font-weight="900" letter-spacing="-0.04em" fill="#FFFFFF" text-anchor="middle">764</text>
    <text x="100" y="242" font-family="Inter, sans-serif" font-size="11" font-weight="600" letter-spacing="0.15em" fill="#F3E8FF" text-anchor="middle">WANITA</text>
    <text x="100" y="280" font-family="Inter, sans-serif" font-size="24" font-weight="700" fill="#FFFFFF" text-anchor="middle">Aromática</text>
  </g>

  <!-- 4. Pink Tube 297 (Bottom Right) -->
  <g transform="translate(1100, 440) rotate(-48)" filter="url(#dropShadow)">
    <rect width="190" height="350" rx="14" fill="url(#gradPink)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
    <line x1="0" y1="75" x2="190" y2="75" stroke="#000000" stroke-width="2.5" />
    <text x="95" y="52" font-family="Inter, sans-serif" font-size="12" font-weight="700" letter-spacing="0.2em" fill="#FCE7F3" text-anchor="middle">SASMITA</text>
    <text x="95" y="195" font-family="Inter, sans-serif" font-size="58" font-weight="900" letter-spacing="-0.04em" fill="#FFFFFF" text-anchor="middle">297</text>
    <text x="95" y="225" font-family="Inter, sans-serif" font-size="11" font-weight="600" letter-spacing="0.15em" fill="#FCE7F3" text-anchor="middle">WANITA</text>
    <text x="95" y="258" font-family="Inter, sans-serif" font-size="22" font-weight="700" fill="#FFFFFF" text-anchor="middle">Floral</text>
  </g>

  <!-- 5. Real Glass Bottle 992 Exclusive (Laying on Center with Liquid Glow) -->
  <g transform="translate(900, 240) rotate(-45)" filter="url(#dropShadow)">
    <!-- Liquid -->
    <rect x="15" y="60" width="120" height="170" rx="10" fill="#FDBA74" opacity="0.85" />
    <!-- Glass Wall -->
    <rect width="150" height="230" rx="16" fill="none" stroke="rgba(255,255,255,0.8)" stroke-width="3" />
    <!-- Black Cap -->
    <rect x="45" y="-55" width="60" height="58" rx="4" fill="url(#gradBlack)" stroke="#57534E" stroke-width="1" />
    <!-- Label -->
    <rect x="25" y="75" width="100" height="120" rx="2" fill="#141210" stroke="rgba(255,255,255,0.2)" stroke-width="1" />
    <text x="75" y="98" font-family="Inter, sans-serif" font-size="8" font-weight="800" letter-spacing="0.2em" fill="#E7E5E4" text-anchor="middle">SASMITA</text>
    <text x="75" y="135" font-family="Inter, sans-serif" font-size="28" font-weight="900" letter-spacing="-0.03em" fill="#FFFFFF" text-anchor="middle">992</text>
    <text x="75" y="148" font-family="Inter, sans-serif" font-size="7" font-weight="600" fill="#A8A29E" text-anchor="middle">PRIA</text>
    <text x="75" y="170" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">Exclusive</text>
  </g>
</svg>
`;

const outPath = '/home/eveeze/Project/personal/sasmita-parfums-web/public/assets/editorial/sasmita-tubes-flatlay.jpg';
fs.writeFileSync('/tmp/tubes-flatlay.svg', svg.trim());
execSync(`magick /tmp/tubes-flatlay.svg -quality 95 "${outPath}"`);
console.log(`Rendered: ${outPath}`);
