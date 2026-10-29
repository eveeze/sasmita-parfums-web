import fs from 'fs';
import { execSync } from 'child_process';

const outDir = '/home/eveeze/Project/personal/sasmita-parfums-web/public/assets/products';
fs.mkdirSync(outDir, { recursive: true });

console.log('Final calibration of bespoke luxury perfume bottles...');

// 1. TIRTA AMBARAWA (379) - ALREADY PERFECT!
// 2. CENDANA MATARAM (428) - ALREADY PERFECT!

// 3. SEKAR KEDHATON (565) - Shift to x=548, y=560
const svg565 = `
<svg xmlns="http://www.w3.org/2000/svg" width="225" height="245" viewBox="0 0 225 245">
  <defs>
    <filter id="sh565" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.2" />
    </filter>
  </defs>
  <rect x="2" y="2" width="221" height="241" rx="2" fill="#D9B244" stroke="#8C6200" stroke-width="1.5" filter="url(#sh565)" />
  <rect x="5" y="5" width="215" height="235" rx="1" fill="#E5C158" stroke="#FFFFFF" stroke-width="0.8" />
  <rect x="9" y="9" width="207" height="227" rx="1" fill="#DFB748" />
  <text x="112" y="46" font-family="Noto Serif, serif" font-size="9.5" font-weight="700" letter-spacing="2.5" fill="#5A3E00" text-anchor="middle">PARFUMS JAWI</text>
  <text x="112" y="88" font-family="Noto Serif, serif" font-size="20" font-weight="900" letter-spacing="1" fill="#1C1917" text-anchor="middle">SEKAR</text>
  <text x="112" y="118" font-family="Noto Serif, serif" font-size="20" font-weight="900" letter-spacing="1" fill="#1C1917" text-anchor="middle">KEDHATON</text>
  <line x1="30" y1="134" x2="195" y2="134" stroke="#8C6200" stroke-width="1" />
  <text x="112" y="160" font-family="sans-serif" font-size="8.5" font-weight="800" letter-spacing="1" fill="#4A1D96" text-anchor="middle">MELATI &amp; SEDAP MALAM</text>
  <text x="112" y="188" font-family="sans-serif" font-size="11.5" font-weight="900" letter-spacing="2" fill="#1C1917" text-anchor="middle">No. 565</text>
  <text x="112" y="210" font-family="sans-serif" font-size="8" letter-spacing="2" fill="#5A3E00" text-anchor="middle">EXTRAIT • 100 ML</text>
</svg>
`;
fs.writeFileSync('/tmp/label-565.svg', svg565.trim());
execSync(`magick /tmp/base-565.jpg /tmp/label-565.svg -geometry +546+562 -composite -quality 95 "${outDir}/sasmita-565.jpg"`);
console.log('✓ 3. SEKAR KEDHATON');


// 4. REMPAH SULTAN (708) - Shift to x=562, y=456
const svg708 = `
<svg xmlns="http://www.w3.org/2000/svg" width="240" height="255" viewBox="0 0 240 255">
  <defs>
    <filter id="sh708" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.2" />
    </filter>
  </defs>
  <rect x="2" y="2" width="236" height="251" rx="2" fill="#FAF6EE" stroke="#D97706" stroke-width="2" filter="url(#sh708)" />
  <rect x="6" y="6" width="228" height="243" rx="1" fill="none" stroke="#F59E0B" stroke-width="0.8" />
  <text x="120" y="46" font-family="Noto Serif, serif" font-size="9.5" font-weight="700" letter-spacing="2.5" fill="#92400E" text-anchor="middle">PARFUMS JAWI</text>
  <text x="120" y="90" font-family="Noto Serif, serif" font-size="21" font-weight="900" letter-spacing="1" fill="#451A03" text-anchor="middle">REMPAH</text>
  <text x="120" y="120" font-family="Noto Serif, serif" font-size="21" font-weight="900" letter-spacing="1" fill="#451A03" text-anchor="middle">SULTAN</text>
  <line x1="35" y1="138" x2="205" y2="138" stroke="#D97706" stroke-width="1" />
  <text x="120" y="166" font-family="sans-serif" font-size="8.5" font-weight="800" letter-spacing="1" fill="#B45309" text-anchor="middle">CENGKEH &amp; VANILA BOURBON</text>
  <text x="120" y="196" font-family="sans-serif" font-size="12" font-weight="900" letter-spacing="2" fill="#451A03" text-anchor="middle">No. 708</text>
  <text x="120" y="220" font-family="sans-serif" font-size="8" letter-spacing="2" fill="#78350F" text-anchor="middle">EXTRAIT • 100 ML</text>
</svg>
`;
fs.writeFileSync('/tmp/label-708.svg', svg708.trim());
execSync(`magick /tmp/base-708.jpg /tmp/label-708.svg -geometry +560+452 -composite -quality 95 "${outDir}/sasmita-708.jpg"`);
console.log('✓ 4. REMPAH SULTAN');


// 5. GAHARU LAWU (728) - Shift to x=482, y=608
const svg728 = `
<svg xmlns="http://www.w3.org/2000/svg" width="254" height="284" viewBox="0 0 254 284">
  <defs>
    <filter id="sh728" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#000000" flood-opacity="0.4" />
    </filter>
  </defs>
  <rect x="2" y="2" width="250" height="280" rx="2" fill="#0C0A09" stroke="#E5C158" stroke-width="2.5" filter="url(#sh728)" />
  <rect x="7" y="7" width="240" height="270" rx="1" fill="none" stroke="#E5C158" stroke-width="0.8" />
  <text x="127" y="52" font-family="Noto Serif, serif" font-size="10" font-weight="700" letter-spacing="2.5" fill="#D4AF37" text-anchor="middle">PARFUMS JAWI</text>
  <text x="127" y="104" font-family="Noto Serif, serif" font-size="23" font-weight="900" letter-spacing="1" fill="#FFFFFF" text-anchor="middle">GAHARU</text>
  <text x="127" y="138" font-family="Noto Serif, serif" font-size="23" font-weight="900" letter-spacing="1" fill="#FFFFFF" text-anchor="middle">LAWU</text>
  <line x1="35" y1="158" x2="219" y2="158" stroke="#D4AF37" stroke-width="1.2" />
  <text x="127" y="188" font-family="sans-serif" font-size="9" font-weight="800" letter-spacing="1.2" fill="#E5C158" text-anchor="middle">AGARWOOD &amp; DUPA SULTAN</text>
  <text x="127" y="220" font-family="sans-serif" font-size="13" font-weight="900" letter-spacing="2" fill="#FFFFFF" text-anchor="middle">No. 728</text>
  <text x="127" y="246" font-family="sans-serif" font-size="8.5" letter-spacing="2" fill="#A8A29E" text-anchor="middle">EXTRAIT DE PARFUM • 100 ML</text>
</svg>
`;
fs.writeFileSync('/tmp/label-728.svg', svg728.trim());
execSync(`magick /tmp/base-728.jpg /tmp/label-728.svg -geometry +482+608 -composite -quality 95 "${outDir}/sasmita-728.jpg"`);
console.log('✓ 5. GAHARU LAWU');


// 6. TEMARAM MALAM (773) - Height extended to 340 to cover EAU DE PARFUM
const svg773 = `
<svg xmlns="http://www.w3.org/2000/svg" width="370" height="340" viewBox="0 0 370 340">
  <defs>
    <filter id="sh773" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="5" flood-color="#000000" flood-opacity="0.5" />
    </filter>
  </defs>
  <rect x="2" y="2" width="366" height="336" rx="3" fill="#030712" stroke="#38BDF8" stroke-width="1.5" filter="url(#sh773)" />
  <rect x="8" y="8" width="354" height="324" rx="1" fill="none" stroke="#1E293B" stroke-width="0.8" />
  <text x="185" y="62" font-family="Noto Serif, serif" font-size="11" font-weight="700" letter-spacing="3" fill="#94A3B8" text-anchor="middle">PARFUMS JAWI MODERN</text>
  <text x="185" y="125" font-family="Noto Serif, serif" font-size="28" font-weight="900" letter-spacing="1" fill="#F8FAFC" text-anchor="middle">TEMARAM MALAM</text>
  <line x1="50" y1="152" x2="320" y2="152" stroke="#38BDF8" stroke-width="1.2" />
  <text x="185" y="195" font-family="sans-serif" font-size="11.5" font-weight="800" letter-spacing="1.5" fill="#38BDF8" text-anchor="middle">KASTURI HITAM &amp; AMBER VIOLET</text>
  <text x="185" y="238" font-family="sans-serif" font-size="16" font-weight="900" letter-spacing="2" fill="#F8FAFC" text-anchor="middle">No. 773</text>
  <text x="185" y="278" font-family="sans-serif" font-size="10" letter-spacing="3" fill="#64748B" text-anchor="middle">EXTRAIT DE PARFUM • 100 ML</text>
</svg>
`;
fs.writeFileSync('/tmp/label-773.svg', svg773.trim());
execSync(`
  magick /tmp/editorial-bottles/e3.jpg /tmp/label-773.svg -geometry +460+280 -composite \\
    -gravity Center -crop 800x800+0+0 -resize 1200x1200 +repage -quality 95 "${outDir}/sasmita-773.jpg"
`);
console.log('✓ 6. TEMARAM MALAM');

console.log('ALL CALIBRATIONS FINISHED!');
