export type OlfactiveFamily = 
  | 'Cítrico'
  | 'Amaderada'
  | 'Floral'
  | 'Oriental'
  | 'Aromática'
  | 'Almizcle';

export type GenderCategory = 'Pria' | 'Wanita' | 'Unisex';
export type Intensity = 'Intenso' | 'Intermedio' | 'Suave';
export type Season = 'Kemarau / Panas' | 'Hujan / Dingin' | 'Sepanjang Tahun';
export type AgeRange = 'Remaja' | '+20' | '+30' | '+40' | '+50';

export interface PerfumeProduct {
  id: string;
  code: string;
  name: string;
  javaneseName?: string;
  family: OlfactiveFamily;
  familyColor: string;
  category: GenderCategory;
  season: Season[];
  intensity: Intensity;
  inspiration: string;
  rating: number;
  reviewCount: number;
  discountPercent: number;
  isExclusive: boolean;
  prices: {
    '30ml': number;
    '100ml': number;
    '5ml': number;
  };
  image: string;
  description: string;
  pyramid: {
    top: string[];
    heart: string[];
    base: string[];
  };
  longevity: string;
  sillage: string;
  ingredients: string;
}

export interface CartItem {
  id: string;
  productId: string;
  code: string;
  name: string;
  size: '30ml' | '100ml' | '5ml';
  price: number;
  quantity: number;
  image: string;
  familyColor: string;
}

export type ViewPage = 'home' | 'catalog' | 'detail';
