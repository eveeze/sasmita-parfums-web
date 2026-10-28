import fs from 'fs';
import { execSync } from 'child_process';

const outDir = '/home/eveeze/Project/personal/sasmita-parfums-web/public/assets/editorial';

const regalosSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 750" width="1600" height="750">
  <defs>
    <radialGradient id="pinkFloor" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#FCE7F3" />
      <stop offset="60%" stop-color="#FBCFE8" />
      <stop offset="100%" stop-color="#F5D0FE" />
    </radialGradient>
    <filter id="tubeShadow" x="-20%" y="-20%" width="150%" height="150%">
      <feDropShadow dx="15" dy="25" stdDeviation="16" flood-color="#000000" flood-opacity="0.35" />
    </filter>
  </defs>

  <rect width="1600" height="750" fill="url(#pinkFloor)" />

  <!-- Diagonal Repeating Sasmita Tubes on Right Center (Signature Esenzzia Slice 4 Style) -->
  <g transform="translate(480, 260) rotate(-32)" filter="url(#tubeShadow)">
    
    <!-- Tube 219 (Red) -->
    <g transform="translate(100, 50)">
      <rect width="155" height="340" rx="14" fill="#F43F5E" />
      <line x1="0" y1="65" x2="155" y2="65" stroke="#000000" stroke-width="2" />
      <text x="77" y="45" font-family="Inter, sans-serif" font-size="11" font-weight="700" letter-spacing="0.2em" fill="#FFE4E6" text-anchor="middle">SASMITA</text>
      <text x="77" y="165" font-family="Inter, sans-serif" font-size="52" font-weight="900" fill="#FFFFFF" text-anchor="middle">219</text>
      <text x="77" y="195" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#FFE4E6" text-anchor="middle">WANITA</text>
      <text x="77" y="235" font-family="Inter, sans-serif" font-size="22" font-weight="700" fill="#FFFFFF" text-anchor="middle">Oriental</text>
    </g>

    <!-- Tube 243 (Bright Red) -->
    <g transform="translate(320, 20)">
      <rect width="165" height="360" rx="14" fill="#E11D48" />
      <line x1="0" y1="70" x2="165" y2="70" stroke="#000000" stroke-width="2" />
      <text x="82" y="48" font-family="Inter, sans-serif" font-size="12" font-weight="700" letter-spacing="0.2em" fill="#FFE4E6" text-anchor="middle">SASMITA</text>
      <text x="82" y="175" font-family="Inter, sans-serif" font-size="56" font-weight="900" fill="#FFFFFF" text-anchor="middle">243</text>
      <text x="82" y="205" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#FFE4E6" text-anchor="middle">WANITA</text>
      <text x="82" y="245" font-family="Inter, sans-serif" font-size="22" font-weight="700" fill="#FFFFFF" text-anchor="middle">Oriental</text>
    </g>

    <!-- Tube 192 (Dark Red) -->
    <g transform="translate(560, -10)">
      <rect width="175" height="380" rx="14" fill="#BE123C" />
      <line x1="0" y1="75" x2="175" y2="75" stroke="#000000" stroke-width="2" />
      <text x="87" y="52" font-family="Inter, sans-serif" font-size="12" font-weight="700" letter-spacing="0.2em" fill="#FFE4E6" text-anchor="middle">SASMITA</text>
      <text x="87" y="185" font-family="Inter, sans-serif" font-size="62" font-weight="900" fill="#FFFFFF" text-anchor="middle">192</text>
      <text x="87" y="215" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#FFE4E6" text-anchor="middle">WANITA</text>
      <text x="87" y="258" font-family="Inter, sans-serif" font-size="24" font-weight="700" fill="#FFFFFF" text-anchor="middle">Oriental</text>
    </g>

    <!-- Tube 180 (Pink) -->
    <g transform="translate(800, -40)">
      <rect width="180" height="390" rx="14" fill="#DB2777" />
      <line x1="0" y1="75" x2="180" y2="75" stroke="#000000" stroke-width="2" />
      <text x="90" y="52" font-family="Inter, sans-serif" font-size="13" font-weight="700" letter-spacing="0.2em" fill="#FDF2F8" text-anchor="middle">SASMITA</text>
      <text x="90" y="190" font-family="Inter, sans-serif" font-size="62" font-weight="900" fill="#FFFFFF" text-anchor="middle">180</text>
      <text x="90" y="220" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#FDF2F8" text-anchor="middle">WANITA</text>
      <text x="90" y="260" font-family="Inter, sans-serif" font-size="24" font-weight="700" fill="#FFFFFF" text-anchor="middle">Floral</text>
    </g>

    <!-- Tube 201 (Hot Pink) -->
    <g transform="translate(1040, -70)">
      <rect width="180" height="400" rx="14" fill="#EC4899" />
      <line x1="0" y1="75" x2="180" y2="75" stroke="#000000" stroke-width="2" />
      <text x="90" y="52" font-family="Inter, sans-serif" font-size="13" font-weight="700" letter-spacing="0.2em" fill="#FDF2F8" text-anchor="middle">SASMITA</text>
      <text x="90" y="195" font-family="Inter, sans-serif" font-size="64" font-weight="900" fill="#FFFFFF" text-anchor="middle">201</text>
      <text x="90" y="225" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#FDF2F8" text-anchor="middle">WANITA</text>
      <text x="90" y="265" font-family="Inter, sans-serif" font-size="24" font-weight="700" fill="#FFFFFF" text-anchor="middle">Floral</text>
    </g>

  </g>
</svg>
`;

fs.writeFileSync('/tmp/regalos-fixed.svg', regalosSvg.trim());
execSync(`magick /tmp/regalos-fixed.svg -quality 95 "${outDir}/sasmita-regalos.jpg"`);
console.log('Fixed sasmita-regalos.jpg');
