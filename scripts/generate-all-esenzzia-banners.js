import fs from 'fs';
import { execSync } from 'child_process';

const outDir = '/home/eveeze/Project/personal/sasmita-parfums-web/public/assets/editorial';
fs.mkdirSync(outDir, { recursive: true });

// 1. TOP VENTAS: Pastel Podium Blocks with Colorful Sasmita Tubes (Slice 2 & 3 style)
const topVentasSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 750" width="1600" height="750">
  <defs>
    <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0284C7" />
      <stop offset="60%" stop-color="#38BDF8" />
      <stop offset="100%" stop-color="#BAE6FD" />
    </linearGradient>
    <filter id="shadowBox" x="-20%" y="-20%" width="150%" height="150%">
      <feDropShadow dx="10" dy="20" stdDeviation="15" flood-color="#000000" flood-opacity="0.35" />
    </filter>
  </defs>

  <!-- Cyan Sky Back -->
  <rect width="1600" height="750" fill="url(#skyGrad)" />

  <!-- 3D Pastel Studio Blocks -->
  <!-- Lavender Block Left -->
  <polygon points="400,320 800,240 800,750 400,750" fill="#DDD6FE" />
  <polygon points="400,320 800,240 700,200 300,280" fill="#EDE9FE" />

  <!-- Yellow Block Right -->
  <polygon points="700,300 1600,220 1600,750 700,750" fill="#FACC15" />
  <polygon points="700,300 1600,220 1500,180 600,260" fill="#FEF08A" />

  <!-- Soft Pink Floor Block -->
  <polygon points="100,450 750,380 750,750 100,750" fill="#FBCFE8" />

  <!-- Colorful Tubes Standing on Blocks -->
  <!-- Yellow Tube 073 on Top Block -->
  <g transform="translate(740, 110)" filter="url(#shadowBox)">
    <rect width="160" height="290" rx="12" fill="#F59E0B" />
    <line x1="0" y1="60" x2="160" y2="60" stroke="#000000" stroke-width="2" />
    <text x="80" y="42" font-family="Inter, sans-serif" font-size="11" font-weight="700" letter-spacing="0.2em" fill="#FEF3C7" text-anchor="middle">SASMITA</text>
    <text x="80" y="155" font-family="Inter, sans-serif" font-size="52" font-weight="900" fill="#FFFFFF" text-anchor="middle">073</text>
    <text x="80" y="180" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#FEF3C7" text-anchor="middle">WANITA</text>
    <text x="80" y="215" font-family="Inter, sans-serif" font-size="20" font-weight="700" fill="#FFFFFF" text-anchor="middle">Cítrica</text>
  </g>

  <!-- Lavender Tube 603 on Left Block -->
  <g transform="translate(520, 240)" filter="url(#shadowBox)">
    <rect width="170" height="310" rx="12" fill="#A78BFA" />
    <line x1="0" y1="65" x2="170" y2="65" stroke="#000000" stroke-width="2" />
    <text x="85" y="45" font-family="Inter, sans-serif" font-size="12" font-weight="700" letter-spacing="0.2em" fill="#F5F3FF" text-anchor="middle">SASMITA</text>
    <text x="85" y="170" font-family="Inter, sans-serif" font-size="56" font-weight="900" fill="#FFFFFF" text-anchor="middle">603</text>
    <text x="85" y="195" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#F5F3FF" text-anchor="middle">PRIA</text>
    <text x="85" y="235" font-family="Inter, sans-serif" font-size="22" font-weight="700" fill="#FFFFFF" text-anchor="middle">Aromática</text>
  </g>

  <!-- Hot Pink Tube 201 on Right Front Block -->
  <g transform="translate(860, 310)" filter="url(#shadowBox)">
    <rect width="180" height="320" rx="12" fill="#EC4899" />
    <line x1="0" y1="65" x2="180" y2="65" stroke="#000000" stroke-width="2" />
    <text x="90" y="45" font-family="Inter, sans-serif" font-size="12" font-weight="700" letter-spacing="0.2em" fill="#FDF2F8" text-anchor="middle">SASMITA</text>
    <text x="90" y="180" font-family="Inter, sans-serif" font-size="62" font-weight="900" fill="#FFFFFF" text-anchor="middle">201</text>
    <text x="90" y="208" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#FDF2F8" text-anchor="middle">WANITA</text>
    <text x="90" y="248" font-family="Inter, sans-serif" font-size="24" font-weight="700" fill="#FFFFFF" text-anchor="middle">Floral</text>
  </g>
</svg>
`;
fs.writeFileSync('/tmp/top-ventas.svg', topVentasSvg.trim());
execSync(`magick /tmp/top-ventas.svg -quality 95 "${outDir}/sasmita-top-ventas.jpg"`);

// 2. PACKS: Bold Red Studio Background with Open White Gift Box (Slice 3 style)
const packsSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 750" width="1600" height="750">
  <defs>
    <radialGradient id="redStudio" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#DC2626" />
      <stop offset="70%" stop-color="#991B1B" />
      <stop offset="100%" stop-color="#450A0A" />
    </radialGradient>
    <filter id="boxShadow" x="-20%" y="-20%" width="150%" height="150%">
      <feDropShadow dx="25" dy="35" stdDeviation="25" flood-color="#000000" flood-opacity="0.55" />
    </filter>
  </defs>

  <rect width="1600" height="750" fill="url(#redStudio)" />

  <!-- Open White Cardboard Gift Box (Tilted Isometric) -->
  <g transform="translate(820, 160) rotate(-18)" filter="url(#boxShadow)">
    <!-- Box Bottom Shell -->
    <rect x="0" y="0" width="460" height="340" rx="10" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2" />
    <rect x="15" y="15" width="430" height="310" rx="6" fill="#F8FAFC" />

    <!-- Box Open Lid flap -->
    <polygon points="0,0 460,0 490,-160 30,-160" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2" />
    <text x="260" y="-80" font-family="Inter, sans-serif" font-size="15" font-weight="700" fill="#334155" text-anchor="middle">
      ¿Ingin temukan aroma identitas Anda?
    </text>
    <text x="260" y="-55" font-family="Inter, sans-serif" font-size="12" fill="#64748B" text-anchor="middle">
      Buka, semprotkan, dan temukan harmoni rasa.
    </text>

    <!-- 3 Internal Tubes inside box slots -->
    <!-- Slot 1: Yellow Tube 044 -->
    <g transform="translate(50, 70) rotate(-10)">
      <rect width="90" height="180" rx="8" fill="#F59E0B" />
      <text x="45" y="65" font-family="Inter, sans-serif" font-size="24" font-weight="900" fill="#FFFFFF" text-anchor="middle">044</text>
      <text x="45" y="90" font-family="Inter, sans-serif" font-size="9" fill="#FFFFFF" text-anchor="middle">Cítrico</text>
    </g>

    <!-- Slot 2: Hot Pink Tube 201 -->
    <g transform="translate(175, 55)">
      <rect width="95" height="195" rx="8" fill="#EC4899" />
      <text x="47" y="70" font-family="Inter, sans-serif" font-size="28" font-weight="900" fill="#FFFFFF" text-anchor="middle">201</text>
      <text x="47" y="95" font-family="Inter, sans-serif" font-size="10" fill="#FFFFFF" text-anchor="middle">Floral</text>
    </g>

    <!-- Slot 3: Red Tube 668 -->
    <g transform="translate(305, 75) rotate(10)">
      <rect width="90" height="180" rx="8" fill="#EF4444" />
      <text x="45" y="65" font-family="Inter, sans-serif" font-size="24" font-weight="900" fill="#FFFFFF" text-anchor="middle">668</text>
      <text x="45" y="90" font-family="Inter, sans-serif" font-size="9" fill="#FFFFFF" text-anchor="middle">Oriental</text>
    </g>
  </g>
</svg>
`;
fs.writeFileSync('/tmp/packs.svg', packsSvg.trim());
execSync(`magick /tmp/packs.svg -quality 95 "${outDir}/sasmita-packs-giftbox.jpg"`);

// 3. REGALOS: Rows of Bright Red & Pink Tubes (Slice 4 style)
const regalosSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 750" width="1600" height="750">
  <defs>
    <radialGradient id="pinkFloor" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#FCE7F3" />
      <stop offset="100%" stop-color="#F3E8FF" />
    </radialGradient>
    <filter id="tubeShadow" x="-20%" y="-20%" width="150%" height="150%">
      <feDropShadow dx="15" dy="25" stdDeviation="18" flood-color="#000000" flood-opacity="0.3" />
    </filter>
  </defs>

  <rect width="1600" height="750" fill="url(#pinkFloor)" />

  <!-- Diagonal Repeating Tubes -->
  <g transform="translate(150, -50) rotate(-35)" filter="url(#tubeShadow)">
    {#each Array(5) as _, i}
      <g transform="translate(500, 100)">
        <rect width="160" height="340" rx="14" fill="#F43F5E" />
        <text x="80" y="160" font-family="Inter, sans-serif" font-size="52" font-weight="900" fill="#FFFFFF" text-anchor="middle">219</text>
        <text x="80" y="210" font-family="Inter, sans-serif" font-size="18" font-weight="700" fill="#FFFFFF" text-anchor="middle">Oriental</text>
      </g>
      <g transform="translate(740, 60)">
        <rect width="170" height="360" rx="14" fill="#E11D48" />
        <text x="85" y="170" font-family="Inter, sans-serif" font-size="56" font-weight="900" fill="#FFFFFF" text-anchor="middle">243</text>
        <text x="85" y="220" font-family="Inter, sans-serif" font-size="20" font-weight="700" fill="#FFFFFF" text-anchor="middle">Oriental</text>
      </g>
      <g transform="translate(1000, 20)">
        <rect width="180" height="370" rx="14" fill="#BE123C" />
        <text x="90" y="180" font-family="Inter, sans-serif" font-size="62" font-weight="900" fill="#FFFFFF" text-anchor="middle">192</text>
        <text x="90" y="235" font-family="Inter, sans-serif" font-size="22" font-weight="700" fill="#FFFFFF" text-anchor="middle">Oriental</text>
      </g>
      <g transform="translate(1260, -20)">
        <rect width="180" height="380" rx="14" fill="#EC4899" />
        <text x="90" y="185" font-family="Inter, sans-serif" font-size="62" font-weight="900" fill="#FFFFFF" text-anchor="middle">297</text>
        <text x="90" y="240" font-family="Inter, sans-serif" font-size="22" font-weight="700" fill="#FFFFFF" text-anchor="middle">Floral</text>
      </g>
  </g>
</svg>
`;
fs.writeFileSync('/tmp/regalos.svg', regalosSvg.trim());
execSync(`magick /tmp/regalos.svg -quality 95 "${outDir}/sasmita-regalos.jpg"`);

// 4. EXCLUSIVE (PERFUMES NICHO): Water Ripple Reflection (Slice 5 style)
const exclusiveSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 750" width="1600" height="750">
  <defs>
    <radialGradient id="waterGrad" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.3" />
      <stop offset="40%" stop-color="#0F172A" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#020617" stop-opacity="1" />
    </radialGradient>
  </defs>

  <rect width="1600" height="750" fill="#090D16" />
  <rect width="1600" height="750" fill="url(#waterGrad)" />

  <!-- Concentric Water Ripples -->
  <ellipse cx="900" cy="380" rx="550" ry="140" fill="none" stroke="#60A5FA" stroke-width="1.5" opacity="0.35" />
  <ellipse cx="900" cy="380" rx="420" ry="105" fill="none" stroke="#93C5FD" stroke-width="2" opacity="0.45" />
  <ellipse cx="900" cy="380" rx="280" ry="70" fill="none" stroke="#BAE6FD" stroke-width="2.5" opacity="0.65" />
  <ellipse cx="900" cy="380" rx="160" ry="40" fill="none" stroke="#E0F2FE" stroke-width="3" opacity="0.8" />

  <!-- Glass Bottle Standing in Water with Reflection -->
  <g transform="translate(820, 110)">
    <!-- Real Bottle Image will be placed on top or rendered here -->
    <rect x="40" y="100" width="120" height="200" rx="12" fill="#E2E8F0" opacity="0.2" stroke="#FFFFFF" stroke-width="2" />
    <rect x="70" y="40" width="60" height="65" rx="4" fill="#0F172A" stroke="#475569" stroke-width="1.5" />
    <rect x="50" y="130" width="100" height="120" rx="2" fill="#020617" stroke="rgba(255,255,255,0.2)" />
    <text x="100" y="150" font-family="Inter, sans-serif" font-size="8" font-weight="700" fill="#94A3B8" text-anchor="middle">SASMITA</text>
    <text x="100" y="185" font-family="Inter, sans-serif" font-size="28" font-weight="900" fill="#FFFFFF" text-anchor="middle">715</text>
    <text x="100" y="210" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">Exclusive</text>

    <!-- Reflection Below Water Surface -->
    <g opacity="0.3" transform="scale(1, -0.6) translate(0, -680)">
      <rect x="40" y="100" width="120" height="200" rx="12" fill="#E2E8F0" opacity="0.2" stroke="#FFFFFF" stroke-width="2" />
      <rect x="50" y="130" width="100" height="120" rx="2" fill="#020617" />
    </g>
  </g>
</svg>
`;
fs.writeFileSync('/tmp/exclusive.svg', exclusiveSvg.trim());
execSync(`magick /tmp/exclusive.svg -quality 95 "${outDir}/sasmita-exclusive-water.jpg"`);

// 5. TIENDA: Physical Boutique Storefront (Slice 6 & 7 style)
const tiendaSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 700" width="1600" height="700">
  <defs>
    <linearGradient id="boutiqueGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1E1B18" />
      <stop offset="45%" stop-color="#141210" />
      <stop offset="100%" stop-color="#080706" />
    </linearGradient>
  </defs>

  <rect width="1600" height="700" fill="url(#boutiqueGrad)" />

  <!-- Studio Ceiling Spotlights -->
  <rect x="350" y="0" width="80" height="140" fill="#FFFFFF" rx="4" />
  <rect x="650" y="0" width="80" height="140" fill="#FFFFFF" rx="4" />
  <line x1="100" y1="80" x2="1500" y2="80" stroke="#78716C" stroke-width="4" />

  <!-- Matte Black Signboard with 3D White Letters: sasmita -->
  <rect x="250" y="160" width="1100" height="340" rx="4" fill="#0C0A09" stroke="#292524" stroke-width="3" />
  
  <text x="800" y="380" font-family="Inter, sans-serif" font-size="160" font-weight="900" letter-spacing="-0.04em" fill="#FFFFFF" text-anchor="middle">
    sasmita
  </text>
  <text x="800" y="440" font-family="monospace" font-size="16" letter-spacing="0.3em" fill="#A8A29E" text-anchor="middle">
    ATELIER &amp; BOUTIQUE JAWI MODERN
  </text>
</svg>
`;
fs.writeFileSync('/tmp/tienda.svg', tiendaSvg.trim());
execSync(`magick /tmp/tienda.svg -quality 95 "${outDir}/sasmita-boutique-storefront.jpg"`);

console.log('All 5 missing Esenzzia-style banners generated successfully.');
