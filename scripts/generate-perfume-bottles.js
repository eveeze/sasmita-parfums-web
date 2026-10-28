import fs from 'fs';
import { execSync } from 'child_process';

const perfumes = [
  {
    code: '379',
    name: 'SEGAR RAWA PENING',
    family: 'Cítrico',
    colorHex: '#EAB308',
    liquidColor1: '#FFFBEB',
    liquidColor2: '#FEF08A',
    category: 'Unisex',
    inspiration: 'Nuansa Danau Rawa Pening & Daun Pandan Liar',
    filename: 'bottle-379.png'
  },
  {
    code: '017',
    name: 'CENDANA MATARAM',
    family: 'Amaderada',
    colorHex: '#16A34A',
    liquidColor1: '#FEFCE8',
    liquidColor2: '#FDE047',
    category: 'Pria',
    inspiration: 'Kayu Cendana Asli Keraton & Akar Wangi',
    filename: 'bottle-017.png'
  },
  {
    code: '108',
    name: 'MELATI KERATON',
    family: 'Floral',
    colorHex: '#A855F7',
    liquidColor1: '#FAF5FF',
    liquidColor2: '#E9D5FF',
    category: 'Wanita',
    inspiration: 'Kelopak Melati Gambir Malam & Sedap Malam',
    filename: 'bottle-108.png'
  },
  {
    code: '245',
    name: 'REMPAH SULTAN',
    family: 'Oriental',
    colorHex: '#DC2626',
    liquidColor1: '#FFF7ED',
    liquidColor2: '#FDBA74',
    category: 'Pria',
    inspiration: 'Cengkeh Maluku, Kapulaga & Kayu Manis Jawa',
    filename: 'bottle-245.png'
  },
  {
    code: '502',
    name: 'TEMARAM KABUT',
    family: 'Aromática',
    colorHex: '#EA580C',
    liquidColor1: '#F5F5F4',
    liquidColor2: '#D6D3D1',
    category: 'Unisex',
    inspiration: 'Asap Kemenyan Halus, Tembakau & Kopi Selo',
    filename: 'bottle-502.png'
  },
  {
    code: '764',
    name: 'PUTERI SOLO',
    family: 'Almizcle',
    colorHex: '#3B82F6',
    liquidColor1: '#FFF1F2',
    liquidColor2: '#FECDD3',
    category: 'Wanita',
    inspiration: 'Gula Kelapa Karamel, Kelopak Mawar & Musk',
    filename: 'bottle-764.png'
  }
];

const outDir = '/home/eveeze/Project/personal/sasmita-parfums-web/public/assets/bottles';
fs.mkdirSync(outDir, { recursive: true });

for (const p of perfumes) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 850" width="900" height="850">
      <defs>
        <!-- Luxury Studio Shadows -->
        <filter id="shadowHeavy" x="-20%" y="-15%" width="140%" height="135%">
          <feDropShadow dx="0" dy="35" stdDeviation="28" flood-color="#000000" flood-opacity="0.45" />
        </filter>
        <filter id="shadowTube" x="-20%" y="-15%" width="140%" height="135%">
          <feDropShadow dx="15" dy="30" stdDeviation="25" flood-color="#000000" flood-opacity="0.5" />
        </filter>

        <!-- Glass Cylinder Gradients -->
        <linearGradient id="glassWall" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.65" />
          <stop offset="12%" stop-color="#E2E8F0" stop-opacity="0.25" />
          <stop offset="45%" stop-color="#FFFFFF" stop-opacity="0.1" />
          <stop offset="85%" stop-color="#94A3B8" stop-opacity="0.2" />
          <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.5" />
        </linearGradient>

        <!-- Liquid Fluid Gradient -->
        <linearGradient id="liquidGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${p.liquidColor1}" stop-opacity="0.95" />
          <stop offset="100%" stop-color="${p.liquidColor2}" stop-opacity="0.85" />
        </linearGradient>

        <!-- Matte Black Tube Gradient -->
        <linearGradient id="tubeMatte" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#2D2926" />
          <stop offset="25%" stop-color="#1B1917" />
          <stop offset="70%" stop-color="#12100E" />
          <stop offset="100%" stop-color="#262320" />
        </linearGradient>

        <!-- Black Cap Gradient -->
        <linearGradient id="capGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#44403C" />
          <stop offset="30%" stop-color="#1C1917" />
          <stop offset="80%" stop-color="#0C0A09" />
          <stop offset="100%" stop-color="#292524" />
        </linearGradient>
      </defs>

      <!-- 1. Right Cylinder Box (Packaging Tube) -->
      <g filter="url(#shadowTube)">
        <!-- Cylinder Main Tube -->
        <rect x="470" y="270" width="310" height="460" rx="14" fill="url(#tubeMatte)" stroke="#3E3A36" stroke-width="1.5" />
        <!-- Tube Lid Rim -->
        <line x1="470" y1="360" x2="780" y2="360" stroke="#000000" stroke-width="3" />
        <line x1="470" y1="362" x2="780" y2="362" stroke="#57534E" stroke-width="1" />

        <!-- Brand Name on Tube Lid -->
        <text x="625" y="325" font-family="Inter, sans-serif" font-size="16" font-weight="700" letter-spacing="0.25em" fill="#A8A29E" text-anchor="middle">SASMITA</text>

        <!-- Big Number Code on Tube Body (Signature Esenzzia typography) -->
        <text x="625" y="490" font-family="Inter, sans-serif" font-size="88" font-weight="900" letter-spacing="-0.04em" fill="#E7E5E4" text-anchor="middle">${p.code}</text>
        <text x="625" y="525" font-family="Inter, sans-serif" font-size="13" font-weight="600" letter-spacing="0.22em" fill="#A8A29E" text-anchor="middle">${p.category.toUpperCase()}</text>
        <text x="625" y="570" font-family="Inter, sans-serif" font-size="28" font-weight="600" letter-spacing="0.08em" fill="#FFFFFF" text-anchor="middle">Exclusive</text>

        <!-- Small details at bottom of tube -->
        <text x="625" y="685" font-family="monospace" font-size="11" letter-spacing="0.2em" fill="#78716C" text-anchor="middle">EXTRAIT DE PARFUM • 100 ML</text>
      </g>

      <!-- 2. Circular Bottle Podium Stand / Lid Base -->
      <g filter="url(#shadowHeavy)">
        <ellipse cx="280" cy="710" rx="140" ry="24" fill="#0C0A09" opacity="0.4" />
        <path d="M150,670 C150,650 410,650 410,670 L410,710 C410,730 150,730 150,710 Z" fill="url(#tubeMatte)" stroke="#3E3A36" stroke-width="1" />
        <ellipse cx="280" cy="670" rx="130" ry="18" fill="#1C1917" stroke="#44403C" stroke-width="1" />
        <text x="280" y="700" font-family="Inter, sans-serif" font-size="14" font-weight="800" letter-spacing="0.2em" fill="#A8A29E" text-anchor="middle">SASMITA</text>
      </g>

      <!-- 3. Cylinder Glass Perfume Bottle Sitting on Stand -->
      <g filter="url(#shadowHeavy)">
        
        <!-- Fragrance Liquid Inside Glass -->
        <rect x="180" y="380" width="200" height="260" rx="16" fill="url(#liquidGrad)" />

        <!-- Heavy Crystal Glass Base & Walls -->
        <rect x="175" y="360" width="210" height="295" rx="20" fill="url(#glassWall)" stroke="rgba(255,255,255,0.7)" stroke-width="2.5" />
        
        <!-- Thick Glass Bottom Base -->
        <rect x="177" y="635" width="206" height="20" rx="6" fill="#FFFFFF" opacity="0.3" />

        <!-- Pump Neck Collar (Metallic Chrome/Gold) -->
        <rect x="255" y="325" width="50" height="36" rx="2" fill="url(#capGrad)" stroke="#78716C" stroke-width="1" />
        
        <!-- Dip Tube inside Liquid -->
        <line x1="280" y1="350" x2="275" y2="635" stroke="rgba(255,255,255,0.6)" stroke-width="2.5" />

        <!-- Heavy Black Cylinder Cap -->
        <rect x="240" y="225" width="80" height="105" rx="6" fill="url(#capGrad)" stroke="#57534E" stroke-width="1.5" />
        <!-- Cap Top Specular -->
        <ellipse cx="280" cy="230" rx="38" ry="8" fill="#57534E" opacity="0.7" />

        <!-- Signature Bottle Label (Black Rect with White Type & Color Accent) -->
        <g transform="translate(195, 410)">
          <!-- Black Label Background -->
          <rect x="0" y="0" width="170" height="190" rx="2" fill="#12100E" stroke="rgba(255,255,255,0.15)" stroke-width="1" />
          
          <!-- Small Olfactive Color Accent Bar -->
          <rect x="15" y="14" width="16" height="4" rx="1" fill="${p.colorHex}" />

          <!-- Brand Logo Text -->
          <text x="85" y="36" font-family="Inter, sans-serif" font-size="10" font-weight="800" letter-spacing="0.25em" fill="#E7E5E4" text-anchor="middle">SASMITA</text>

          <!-- Big Number Code on Bottle -->
          <text x="85" y="85" font-family="Inter, sans-serif" font-size="44" font-weight="900" letter-spacing="-0.03em" fill="#FFFFFF" text-anchor="middle">${p.code}</text>
          
          <!-- Gender & Exclusive Tag -->
          <text x="85" y="104" font-family="Inter, sans-serif" font-size="8" font-weight="600" letter-spacing="0.18em" fill="#A8A29E" text-anchor="middle">${p.category.toUpperCase()}</text>
          <text x="85" y="130" font-family="Inter, sans-serif" font-size="16" font-weight="700" letter-spacing="0.05em" fill="#FFFFFF" text-anchor="middle">Exclusive</text>

          <line x1="20" y1="150" x2="150" y2="150" stroke="#292524" stroke-width="1" />

          <!-- Bottom Metric -->
          <text x="35" y="170" font-family="monospace" font-size="7" fill="#78716C">3.4 FL.OZ</text>
          <text x="135" y="170" font-family="monospace" font-size="7" fill="#78716C" text-anchor="end">100 ML</text>
        </g>
      </g>
    </svg>
  `;

  const svgPath = `/tmp/${p.filename}.svg`;
  const pngPath = `${outDir}/${p.filename}`;
  fs.writeFileSync(svgPath, svg.trim());
  execSync(`magick -background none "${svgPath}" -quality 95 "${pngPath}"`);
  console.log(`Rendered: ${pngPath}`);
}
