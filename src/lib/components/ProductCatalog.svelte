<script lang="ts">
  import { PRODUCTS } from '$lib/data/products';
  import { nav } from '$lib/stores/nav.svelte';
  import type { OlfactiveFamily, GenderCategory, Intensity } from '$lib/types';
  import ProductCard from './ProductCard.svelte';
  import { ChevronDown, SlidersHorizontal, RotateCcw } from 'lucide-svelte';

  const families: OlfactiveFamily[] = ['Cítrico', 'Amaderada', 'Floral', 'Oriental', 'Aromática', 'Almizcle'];
  const intensities: Intensity[] = ['Intenso', 'Intermedio', 'Suave'];

  let activeSeason = $state<string>('Semua');
  let activeAge = $state<string>('Semua');

  const filteredProducts = $derived(
    PRODUCTS.filter(p => {
      if (nav.selectedCategory !== 'Semua' && p.category !== nav.selectedCategory) {
        return false;
      }
      if (nav.selectedFamily !== 'Semua' && p.family !== nav.selectedFamily) {
        return false;
      }
      if (nav.selectedIntensity !== 'Semua' && p.intensity !== nav.selectedIntensity) {
        return false;
      }
      if (activeSeason !== 'Semua' && !p.season.includes(activeSeason as any) && !p.season.includes('Sepanjang Tahun')) {
        return false;
      }
      return true;
    })
  );

  function resetFilters() {
    nav.selectedCategory = 'Semua';
    nav.selectedFamily = 'Semua';
    nav.selectedIntensity = 'Semua';
    activeSeason = 'Semua';
    activeAge = 'Semua';
  }
</script>

<div class="bg-white text-black min-h-screen py-8 px-4 sm:px-8 select-none">
  <div class="max-w-7xl mx-auto">
    
    <!-- Breadcrumbs -->
    <div class="text-[11px] font-mono text-black/60 uppercase tracking-wider mb-6 flex items-center gap-2">
      <button onclick={() => nav.goToHome()} class="hover:underline cursor-pointer">Beranda</button>
      <span>&gt;</span>
      <span class="font-bold text-black">{nav.selectedCategory === 'Semua' ? 'Semua Parfum' : nav.selectedCategory}</span>
    </div>

    <!-- Main Grid: Left Filter Sidebar + Right Products -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      <!-- Left Filters Sidebar (Signature Esenzzia Filter Tree) -->
      <aside class="lg:col-span-3 bg-neutral-50 p-6 border border-black/10 space-y-6 text-xs font-mono">
        
        <div class="flex items-center justify-between border-b border-black/10 pb-3">
          <div class="flex items-center gap-2 font-bold uppercase tracking-wider">
            <SlidersHorizontal class="w-4 h-4" />
            <span>FILTER AROMA</span>
          </div>

          <button
            onclick={resetFilters}
            class="text-[10px] text-black/60 hover:text-black flex items-center gap-1 cursor-pointer transition-colors"
            title="Reset Semua Filter"
          >
            <RotateCcw class="w-3 h-3" />
            <span>Reset</span>
          </button>
        </div>

        <!-- 1. Kategori Gender -->
        <div>
          <div class="font-bold uppercase tracking-wider mb-2.5 flex justify-between items-center text-black/90">
            <span>KATEGORI</span>
            <ChevronDown class="w-3.5 h-3.5 text-black/40" />
          </div>
          <div class="flex flex-wrap gap-1.5">
            {#each ['Semua', 'Pria', 'Wanita', 'Unisex'] as cat}
              <button
                onclick={() => nav.selectedCategory = cat as any}
                class="px-3 py-1.5 border text-[11px] font-semibold transition-all cursor-pointer {nav.selectedCategory === cat ? 'bg-black text-white border-black' : 'bg-white text-black border-black/20 hover:border-black'}"
              >
                {cat}
              </button>
            {/each}
          </div>
        </div>

        <!-- 2. Intensitas / Kekuatan (Fuerza) -->
        <div>
          <div class="font-bold uppercase tracking-wider mb-2.5 flex justify-between items-center text-black/90">
            <span>KEKUATAN AROMA</span>
            <ChevronDown class="w-3.5 h-3.5 text-black/40" />
          </div>
          <div class="flex flex-wrap gap-1.5">
            <button
              onclick={() => nav.selectedIntensity = 'Semua'}
              class="px-2.5 py-1.5 border text-[11px] cursor-pointer transition-all {nav.selectedIntensity === 'Semua' ? 'bg-black text-white border-black font-bold' : 'bg-white text-black border-black/20 hover:border-black'}"
            >
              Semua
            </button>
            {#each intensities as int}
              <button
                onclick={() => nav.selectedIntensity = int as any}
                class="px-2.5 py-1.5 border text-[11px] cursor-pointer transition-all {nav.selectedIntensity === int ? 'bg-black text-white border-black font-bold' : 'bg-white text-black border-black/20 hover:border-black'}"
              >
                {int}
              </button>
            {/each}
          </div>
        </div>

        <!-- 3. Familia Olfativa / Keluarga Aroma -->
        <div>
          <div class="font-bold uppercase tracking-wider mb-2.5 flex justify-between items-center text-black/90">
            <span>KELUARGA AROMA</span>
            <ChevronDown class="w-3.5 h-3.5 text-black/40" />
          </div>
          <div class="flex flex-wrap gap-1.5">
            <button
              onclick={() => nav.selectedFamily = 'Semua'}
              class="px-2.5 py-1.5 border text-[11px] cursor-pointer transition-all {nav.selectedFamily === 'Semua' ? 'bg-black text-white border-black font-bold' : 'bg-white text-black border-black/20 hover:border-black'}"
            >
              Semua
            </button>
            {#each families as fam}
              <button
                onclick={() => nav.selectedFamily = fam}
                class="px-2.5 py-1.5 border text-[11px] cursor-pointer transition-all {nav.selectedFamily === fam ? 'bg-black text-white border-black font-bold' : 'bg-white text-black border-black/20 hover:border-black'}"
              >
                {fam}
              </button>
            {/each}
          </div>
        </div>

        <!-- 4. Musim / Cuaca (Temporada) -->
        <div>
          <div class="font-bold uppercase tracking-wider mb-2.5 flex justify-between items-center text-black/90">
            <span>SUASANA CUACA</span>
            <ChevronDown class="w-3.5 h-3.5 text-black/40" />
          </div>
          <div class="flex flex-wrap gap-1.5">
            {#each ['Semua', 'Kemarau / Panas', 'Hujan / Dingin'] as s}
              <button
                onclick={() => activeSeason = s}
                class="px-2.5 py-1.5 border text-[10px] cursor-pointer transition-all {activeSeason === s ? 'bg-black text-white border-black font-bold' : 'bg-white text-black border-black/20 hover:border-black'}"
              >
                {s}
              </button>
            {/each}
          </div>
        </div>

        <!-- 5. Rentang Usia (Edad) -->
        <div>
          <div class="font-bold uppercase tracking-wider mb-2.5 flex justify-between items-center text-black/90">
            <span>KARAKTER USIA</span>
            <ChevronDown class="w-3.5 h-3.5 text-black/40" />
          </div>
          <div class="flex flex-wrap gap-1.5">
            {#each ['Semua', 'Remaja', '+20', '+30', '+40', '+50'] as a}
              <button
                onclick={() => activeAge = a}
                class="px-2.5 py-1.5 border text-[10px] cursor-pointer transition-all {activeAge === a ? 'bg-black text-white border-black font-bold' : 'bg-white text-black border-black/20 hover:border-black'}"
              >
                {a}
              </button>
            {/each}
          </div>
        </div>

      </aside>

      <!-- Right Products Content -->
      <main class="lg:col-span-9 space-y-6">
        
        <!-- Giant Category Title -->
        <div>
          <h1 class="text-5xl sm:text-7xl font-black uppercase tracking-tight text-black leading-none">
            {nav.selectedCategory === 'Semua' ? 'Koleksi Parfum' : nav.selectedCategory}
          </h1>
          <div class="text-xs font-mono font-bold uppercase tracking-wider text-black/70 mt-3">
            TOTAL FORMULASI TERSEDIA ({filteredProducts.length})
          </div>
        </div>

        <!-- Products Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 pt-2">
          {#each filteredProducts as product (product.id)}
            <ProductCard {product} />
          {/each}
        </div>

      </main>

    </div>

  </div>
</div>
