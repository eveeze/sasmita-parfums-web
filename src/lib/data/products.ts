import type { PerfumeProduct } from '$lib/types';

export const PRODUCTS: PerfumeProduct[] = [
  {
    id: 'sasmita-379',
    code: '379',
    name: 'SEGAR RAWA PENING',
    javaneseName: 'Tirta Ambarawa',
    family: 'Cítrico',
    familyColor: '#EAB308',
    category: 'Unisex',
    season: ['Kemarau / Panas', 'Sepanjang Tahun'],
    intensity: 'Intermedio',
    inspiration: 'Inspirado en LOUIS VUITTON METEORE',
    rating: 5.0,
    reviewCount: 14,
    discountPercent: 15,
    isExclusive: true,
    prices: {
      '30ml': 280000,
      '100ml': 450000,
      '5ml': 65000
    },
    image: '/assets/esenzzia/products/379-meteore.jpg',
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
    inspiration: 'Inspirado en ROJA PARFUMS RECKLESS',
    rating: 4.9,
    reviewCount: 38,
    discountPercent: 15,
    isExclusive: true,
    prices: {
      '30ml': 310000,
      '100ml': 490000,
      '5ml': 75000
    },
    image: '/assets/esenzzia/products/428-reckless.jpg',
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
    name: 'MELATI KERATON',
    javaneseName: 'Sekar Gambir Kusuma',
    family: 'Floral',
    familyColor: '#A855F7',
    category: 'Wanita',
    season: ['Sepanjang Tahun'],
    intensity: 'Intenso',
    inspiration: 'Inspirado en PARFUMS DE MARLY PALATINE',
    rating: 5.0,
    reviewCount: 52,
    discountPercent: 15,
    isExclusive: true,
    prices: {
      '30ml': 320000,
      '100ml': 510000,
      '5ml': 80000
    },
    image: '/assets/esenzzia/products/565-palatine.jpg',
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
    id: 'sasmita-601',
    code: '601',
    name: 'REMPAH SULTAN',
    javaneseName: 'Wangi Prajurit Nusantara',
    family: 'Oriental',
    familyColor: '#DC2626',
    category: 'Pria',
    season: ['Hujan / Dingin'],
    intensity: 'Intenso',
    inspiration: 'Inspirado en ABERCROMBIE & FITCH FIERCE',
    rating: 4.8,
    reviewCount: 29,
    discountPercent: 15,
    isExclusive: false,
    prices: {
      '30ml': 295000,
      '100ml': 475000,
      '5ml': 70000
    },
    image: '/assets/esenzzia/products/017-santal.jpg',
    description: 'Kehangatan rempah jalur maritim Nusantara. Ledakan cengkeh pilihan, kayu manis Jawa, dan tembakau madu yang dibalut kelembutan vanili bourbon hangat.',
    pyramid: {
      top: ['Cengkeh Maluku', 'Kayu Manis Jawa', 'Jahe Hangat'],
      heart: ['Daun Tembakau Kering', 'Kakao Bittersweet', 'Bunga Cengkeh'],
      base: ['Vanili Madu', 'Tonka Bean', 'Getah Kayu Manis']
    },
    longevity: '10 - 12 Jam',
    sillage: 'Hangat, Intim & Memikat',
    ingredients: 'Alcohol Denat, Parfum, Eugenol, Coumarin, Cinnamal, Isoeugenol.'
  },
  {
    id: 'sasmita-603',
    code: '603',
    name: 'TEMARAM KABUT',
    javaneseName: 'Mega Mendung Asri',
    family: 'Aromática',
    familyColor: '#EA580C',
    category: 'Unisex',
    season: ['Hujan / Dingin', 'Sepanjang Tahun'],
    intensity: 'Intermedio',
    inspiration: 'Inspirado en AGUA FRESCA ADOLFO DOMINGUEZ',
    rating: 4.9,
    reviewCount: 23,
    discountPercent: 15,
    isExclusive: false,
    prices: {
      '30ml': 290000,
      '100ml': 465000,
      '5ml': 68000
    },
    image: '/assets/esenzzia/products/108-melati.jpg',
    description: 'Kabut sore di perkebunan teh lereng Merbabu. Seduhan teh hitam pekat bertaut dengan buah tin manis, daun salam, dan hembusan asap dupa temaram yang menenangkan jiwa.',
    pyramid: {
      top: ['Buah Tin Manis', 'Daun Salam Jawa', 'Jeruk Bergamot'],
      heart: ['Teh Hitam Seduh', 'Tembakau Cerutu', 'Kayu Cedar'],
      base: ['Kemenyan Halus', 'Vetiver Dingin', 'Musk Hangat']
    },
    longevity: '9 - 11 Jam',
    sillage: 'Elegan & Misterius',
    ingredients: 'Alcohol Denat, Parfum, Limonene, Linalool, Geraniol.'
  },
  {
    id: 'sasmita-604',
    code: '604',
    name: 'PUTERI SOLO',
    javaneseName: 'Kusuma Ayuningrat',
    family: 'Almizcle',
    familyColor: '#3B82F6',
    category: 'Wanita',
    season: ['Kemarau / Panas', 'Sepanjang Tahun'],
    intensity: 'Suave',
    inspiration: 'Inspirado en BAMBÚ ADOLFO DOMINGUEZ',
    rating: 4.9,
    reviewCount: 41,
    discountPercent: 15,
    isExclusive: false,
    prices: {
      '30ml': 305000,
      '100ml': 485000,
      '5ml': 72000
    },
    image: '/assets/esenzzia/products/245-rempah.jpg',
    description: 'Kelembutan bedak beras dan kelopak mawar keraton Solo. Gourmand yang halus dengan sentuhan gula aren cair, kayu manis praline, dan musk selembut sutra sutera.',
    pyramid: {
      top: ['Bedak Mawar Segar', 'Karamel Gula Jawa', 'Cognac'],
      heart: ['Kayu Manis Halus', 'Kacang Hazelnut', 'Ekstrak Oak'],
      base: ['Praline Vanili', 'Cendana Putih', 'Musk Bedak']
    },
    longevity: '10 - 13 Jam',
    sillage: 'Manis Lembut & Melekat Mesra',
    ingredients: 'Alcohol Denat, Parfum, Benzyl Alcohol, Cinnamyl Alcohol, Benzyl Salicylate.'
  }
];
