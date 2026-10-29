import type { PerfumeProduct } from '$lib/types';

export const PRODUCTS: PerfumeProduct[] = [
  {
    id: 'sasmita-379',
    code: '379',
    name: 'TIRTA AMBARAWA',
    javaneseName: 'Banyu Ambarawa',
    family: 'Cítrico',
    familyColor: '#EAB308',
    category: 'Unisex',
    season: ['Kemarau / Panas', 'Sepanjang Tahun'],
    intensity: 'Intermedio',
    inspiration: 'Inspirasi LOUIS VUITTON MÉTÉORE',
    rating: 5.0,
    reviewCount: 14,
    discountPercent: 15,
    isExclusive: true,
    prices: {
      '30ml': 280000,
      '100ml': 450000,
      '5ml': 65000
    },
    image: '/assets/products/sasmita-379.jpg',
    description: 'Kesegaran hembusan angin pagi di atas telaga Rawa Pening. Pembuka sitrus jeruk purut segar bertabrakan dengan daun pandan liar dan vetiver basah. Sangat renyah, bersih, dan berwibawa.',
    pyramid: {
      top: ['Jeruk Purut Jawa', 'Bergamot Calabria', 'Mandarin Zest'],
      heart: ['Daun Pandan Segar', 'Kapulaga Putih', 'Lada Merah'],
      base: ['Akar Wangi (Vetiver)', 'Kayu Cedar', 'White Amber']
    },
    longevity: '8 - 10 Jam',
    sillage: 'Moderat ke Kuat (1 - 2 meter)',
    ingredients: 'Alcohol Denat, Aqua, Parfum, Limonene, Linalool, Citronellol, Citral.'
  },
  {
    id: 'sasmita-428',
    code: '428',
    name: 'CENDANA MATARAM',
    javaneseName: 'Kayu Prabu Mataram',
    family: 'Amaderada',
    familyColor: '#16A34A',
    category: 'Pria',
    season: ['Hujan / Dingin', 'Sepanjang Tahun'],
    intensity: 'Intenso',
    inspiration: 'Inspirasi ROJA PARFUMS RECKLESS',
    rating: 4.9,
    reviewCount: 38,
    discountPercent: 15,
    isExclusive: true,
    prices: {
      '30ml': 310000,
      '100ml': 490000,
      '5ml': 75000
    },
    image: '/assets/products/sasmita-428.jpg',
    description: 'Aroma sakral kayu cendana Jawa yang dibakar lambat di bangsal keraton. Kaya akan tekstur kayu kering, iris beludru, dan sentuhan kulit samak bangsawan kuno.',
    pyramid: {
      top: ['Kapur Barus Halus', 'Bunga Violet', 'Kapulaga Jawa'],
      heart: ['Iris Keraton', 'Papirus', 'Kayu Gaharu Muda'],
      base: ['Kayu Cendana Asli', 'Kulit Samak Lembut', 'Ambergris']
    },
    longevity: '12 - 14 Jam',
    sillage: 'Kuat & Berwibawa (Jejak aroma pekat)',
    ingredients: 'Alcohol Denat, Parfum, Santalol, Farnesol, Geraniol, Benzyl Benzoate.'
  },
  {
    id: 'sasmita-565',
    code: '565',
    name: 'SEKAR KEDHATON',
    javaneseName: 'Sekar Gambir Kusuma',
    family: 'Floral',
    familyColor: '#A855F7',
    category: 'Wanita',
    season: ['Sepanjang Tahun'],
    intensity: 'Intenso',
    inspiration: 'Inspirasi PARFUMS DE MARLY PALATINE',
    rating: 5.0,
    reviewCount: 52,
    discountPercent: 15,
    isExclusive: true,
    prices: {
      '30ml': 320000,
      '100ml': 510000,
      '5ml': 80000
    },
    image: '/assets/products/sasmita-565.jpg',
    description: 'Kelopak melati gambir dan sedap malam yang dipetik saat tengah malam. Manis anggun berlapis mineral amber dan sapuan safron keemasan yang membius siapa pun yang menciumnya.',
    pyramid: {
      top: ['Melati Gambir', 'Safron Kashmir', 'Mawar Damaskus'],
      heart: ['Sedap Malam Ambarawa', 'Gula Bakar Karamel', 'Kayu Amber'],
      base: ['Resin Fir Balsam', 'Cedar Atlas', 'Musk Kristal']
    },
    longevity: '14 - 18 Jam (Tahan cuci baju)',
    sillage: 'Ultra Kuat & Magnetis',
    ingredients: 'Alcohol Denat, Parfum, Evernyl, Hedione, Ambroxan, Ethyl Maltol.'
  },
  {
    id: 'sasmita-708',
    code: '708',
    name: 'REMPAH SULTAN',
    javaneseName: 'Ksatria Singasari',
    family: 'Amaderada',
    familyColor: '#16A34A',
    category: 'Pria',
    season: ['Kemarau / Panas', 'Sepanjang Tahun'],
    intensity: 'Intenso',
    inspiration: 'Inspirasi CREED AVENTUS',
    rating: 4.9,
    reviewCount: 64,
    discountPercent: 15,
    isExclusive: true,
    prices: {
      '30ml': 330000,
      '100ml': 520000,
      '5ml': 85000
    },
    image: '/assets/products/sasmita-708.jpg',
    description: 'Karakter pemimpin berkarisma. Paduan asap birch, nanas manis tropis lereng Gunung Kelud, bergamot segar, dan base oakmoss yang maskulin abadi.',
    pyramid: {
      top: ['Nanas Manis Tropis', 'Blackcurrant Liar', 'Bergamot Italia'],
      heart: ['Kayu Birch Berasap', 'Patchouli Jawa', 'Bunga Melati'],
      base: ['Oakmoss Matang', 'Ambergris Mineral', 'Vanilla Bourbon']
    },
    longevity: '12 - 16 Jam',
    sillage: 'Sangat Kuat (Meninggalkan jejak wangi)',
    ingredients: 'Alcohol Denat, Parfum, Limonene, Linalool, Citronellol.'
  },
  {
    id: 'sasmita-728',
    code: '728',
    name: 'GAHARU LAWU',
    javaneseName: 'Kalon Kayu Suci',
    family: 'Oriental',
    familyColor: '#DC2626',
    category: 'Unisex',
    season: ['Hujan / Dingin'],
    intensity: 'Intenso',
    inspiration: 'Inspirasi ACQUA DI PARMA OUD',
    rating: 4.8,
    reviewCount: 31,
    discountPercent: 15,
    isExclusive: true,
    prices: {
      '30ml': 340000,
      '100ml': 540000,
      '5ml': 90000
    },
    image: '/assets/products/sasmita-728.jpg',
    description: 'Resin gaharu Kalimantan dan kayu oud purba lereng Lawu. Kombinasi rempah ketumbar, kulit jeruk bergamot, getah labdanum, dan kulit samak lembut.',
    pyramid: {
      top: ['Jeruk Bergamot Calabria', 'Jeruk Manis'],
      heart: ['Minyak Kayu Gaharu (Oud)', 'Ketumbar Rusia', 'Kayu Amyris'],
      base: ['Kulit Samak', 'Patchouli', 'Cedarwood Atlas']
    },
    longevity: '14 - 18 Jam',
    sillage: 'Pekat & Meditatif',
    ingredients: 'Alcohol Denat, Parfum, Coumarin, Eugenol, Isoeugenol.'
  },
  {
    id: 'sasmita-773',
    code: '773',
    name: 'TEMARAM MALAM',
    javaneseName: 'Mendem Wilis',
    family: 'Aromática',
    familyColor: '#EA580C',
    category: 'Wanita',
    season: ['Hujan / Dingin', 'Sepanjang Tahun'],
    intensity: 'Intenso',
    inspiration: 'Inspirasi TOM FORD NOIR EXTREME',
    rating: 5.0,
    reviewCount: 45,
    discountPercent: 15,
    isExclusive: true,
    prices: {
      '30ml': 325000,
      '100ml': 515000,
      '5ml': 80000
    },
    image: '/assets/products/sasmita-773.jpg',
    description: 'Sensualitas malam di taman keputren. Kapulaga eksotis, aroma kulfi manis susu berempah, bunga jeruk, dan kayu cendana amber hangat yang sangat memikat.',
    pyramid: {
      top: ['Kapulaga Jawa', 'Pala Banda', 'Neroli', 'Mandarin'],
      heart: ['Kulfi Susu Berempah', 'Mawar Damaskus', 'Melati Sambac'],
      base: ['Vanilla Manis', 'Ambergris', 'Kayu Cendana']
    },
    longevity: '12 - 14 Jam',
    sillage: 'Intim, Manis & Memikat',
    ingredients: 'Alcohol Denat, Parfum, Benzyl Salicylate, Hydroxycitronellal.'
  }
];
