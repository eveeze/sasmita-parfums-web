<script lang="ts">
  import { nav } from '$lib/stores/nav.svelte';
  import { PRODUCTS } from '$lib/data/products';

  const heroProduct = PRODUCTS[0]; // Sasmita 379
  let activeSlide = $state(0);
</script>

<section class="relative w-full h-[620px] sm:h-[720px] lg:h-[820px] bg-black overflow-hidden select-none">
  <!-- Actual High-Res 3D Haute Perfume Visual from Esenzzia -->
  <img
    src="/assets/esenzzia/00-hero-desktop.png"
    alt="Sasmita Haute Parfumerie Hero"
    class="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 ease-out hover:scale-[1.015]"
  />

  <!-- Subtle Minimal Vignette -->
  <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none"></div>

  <!-- Bottom Left Promo Headline (Signature Esenzzia Typography) -->
  <div class="absolute bottom-12 sm:bottom-16 left-6 sm:left-14 lg:left-20 z-20 max-w-xl">
    <h1 class="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-none mb-3">
      WANGI JAWI
    </h1>
    <button
      onclick={() => nav.goToCatalog('Semua')}
      class="inline-block text-base sm:text-xl font-black text-white uppercase tracking-wider border-b-2 sm:border-b-4 border-white pb-1 hover:text-amber-400 hover:border-amber-400 transition-colors cursor-pointer"
    >
      -15% DISKON LAUNCHING
    </button>
  </div>

  <!-- Right Slide Indicators (Signature Esenzzia 8 Dots) -->
  <div class="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 flex-col gap-3">
    {#each Array(8) as _, i}
      <button
        onclick={() => { activeSlide = i; nav.goToCatalog('Semua'); }}
        class="w-3.5 h-3.5 rounded-full transition-all cursor-pointer {activeSlide === i ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'border border-white/70 hover:bg-white/40'}"
        aria-label="Slide {i + 1}"
      ></button>
    {/each}
  </div>
</section>
