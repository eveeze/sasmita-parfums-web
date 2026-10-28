import type { ViewPage, PerfumeProduct, OlfactiveFamily, GenderCategory } from '$lib/types';
import { PRODUCTS } from '$lib/data/products';

class NavStore {
  currentPage = $state<ViewPage>('home');
  selectedProduct = $state<PerfumeProduct>(PRODUCTS[0]);
  
  // Catalog Filters
  selectedCategory = $state<GenderCategory | 'Semua'>('Semua');
  selectedFamily = $state<OlfactiveFamily | 'Semua'>('Semua');
  selectedIntensity = $state<'Semua' | 'Intenso' | 'Intermedio' | 'Suave'>('Semua');

  goToHome() {
    this.currentPage = 'home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goToCatalog(category: GenderCategory | 'Semua' = 'Semua', family: OlfactiveFamily | 'Semua' = 'Semua') {
    this.selectedCategory = category;
    this.selectedFamily = family;
    this.currentPage = 'catalog';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goToDetail(product: PerfumeProduct) {
    this.selectedProduct = product;
    this.currentPage = 'detail';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

export const nav = new NavStore();
