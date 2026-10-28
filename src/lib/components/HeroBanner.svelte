<script lang="ts">
  import { nav } from '$lib/stores/nav.svelte';
  import { PRODUCTS } from '$lib/data/products';

  const heroProduct = PRODUCTS[0]; // Sasmita 379
</script>

<section class="relative w-full h-[580px] sm:h-[680px] lg:h-[760px] bg-[#080706] overflow-hidden select-none">
  <!-- Studio Alchemical Glowing Background -->
  <img
    src="/assets/editorial/hero-alchemist.jpg"
    alt="3D Studio Perfume Alchemist Stage"
    class="absolute inset-0 w-full h-full object-cover object-center"
  />

  <!-- Subtle Vignette Overlay -->
  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"></div>

  <!-- Center Floating Perfume Bottle 379 with Glass Reflection -->
  <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-auto">
    <div
      class="group cursor-pointer transition-transform duration-700 ease-out hover:scale-105"
      onclick={() => nav.goToDetail(heroProduct)}
      title="{heroProduct.name} - Klik untuk beli"
    >
      <img
        src={heroProduct.image}
        alt={heroProduct.name}
        class="w-[300px] sm:w-[420px] md:w-[480px] lg:w-[540px] h-auto drop-shadow-[0_28px_55px_rgba(0,0,0,0.85)]"
      />
    </div>
  </div>

  <!-- Bottom Left Promo Headline (Signature Esenzzia typography) -->
  <div class="absolute bottom-10 sm:bottom-14 left-6 sm:left-12 lg:left-16 z-20 max-w-lg">
    <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none mb-3">
      WANGI JAWI
    </h1>
    <div class="inline-block text-base sm:text-xl font-black text-white uppercase tracking-wider border-b-2 sm:border-b-4 border-white pb-1">
      -15% DISKON LAUNCHING
    </div>
  </div>

  <!-- Right Slide Indicators (Signature Esenzzia side dots) -->
  <div class="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 flex-col gap-2.5">
    <button class="w-3.5 h-3.5 rounded-full bg-white shadow-md"></button>
    <button class="w-3.5 h-3.5 rounded-full border border-white hover:bg-white/40 transition-colors"></button>
    <button class="w-3.5 h-3.5 rounded-full border border-white hover:bg-white/40 transition-colors"></button>
    <button class="w-3.5 h-3.5 rounded-full border border-white hover:bg-white/40 transition-colors"></button>
    <button class="w-3.5 h-3.5 rounded-full border border-white hover:bg-white/40 transition-colors"></button>
    <button class="w-3.5 h-3.5 rounded-full border border-white hover:bg-white/40 transition-colors"></button>
    <button class="w-3.5 h-3.5 rounded-full border border-white hover:bg-white/40 transition-colors"></button>
  </div>
</section>
