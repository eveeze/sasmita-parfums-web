<script lang="ts">
  import { onMount } from 'svelte';
  import Lenis from 'lenis';

  import TopPromoBar from '$lib/components/TopPromoBar.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import HeroBanner from '$lib/components/HeroBanner.svelte';
  import SplitPromoBanners from '$lib/components/SplitPromoBanners.svelte';
  import ProductCatalog from '$lib/components/ProductCatalog.svelte';
  import ProductDetailView from '$lib/components/ProductDetailView.svelte';
  import ProductCard from '$lib/components/ProductCard.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import CartDrawer from '$lib/components/CartDrawer.svelte';

  import { nav } from '$lib/stores/nav.svelte';
  import { PRODUCTS } from '$lib/data/products';

  onMount(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  });
</script>

<div class="min-h-screen bg-[#0C0A09] text-[#F5F3EF] flex flex-col font-sans selection:bg-amber-500 selection:text-black">
  <!-- Top 3-Pill Promo Bar (15% Diskon, Gratis Ongkir, Free Sample) -->
  <TopPromoBar />

  <!-- Main Navbar (sasmita wordmark, dropdowns, cart) -->
  <Navbar />

  <!-- Main Dynamic Views -->
  <main class="flex-grow">
    {#if nav.currentPage === 'home'}
      <!-- 01. 3D Dark Studio Hero Banner with Sasmita 379 -->
      <HeroBanner />

      <!-- 02. Curated Best Sellers Showcase -->
      <section class="bg-white text-black py-16 px-4 sm:px-8 border-b border-black/10">
        <div class="max-w-7xl mx-auto">
          <div class="flex items-baseline justify-between mb-8">
            <div>
              <span class="text-[10px] font-mono font-bold tracking-widest uppercase text-black/50">
                PILIHAN UTAMA &bull; BEST SELLERS
              </span>
              <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black mt-1">
                POPULER MINGGU INI
              </h2>
            </div>

            <button
              onclick={() => nav.goToCatalog('Semua')}
              class="text-xs font-mono font-bold uppercase tracking-wider underline underline-offset-4 hover:opacity-60 cursor-pointer"
            >
              Lihat Semua (254) &rarr;
            </button>
          </div>

          <!-- Product Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each PRODUCTS.slice(0, 3) as product}
              <ProductCard {product} />
            {/each}
          </div>
        </div>
      </section>

      <!-- 03. Esenzzia Signature Split Promo Banners -->
      <SplitPromoBanners />

      <!-- 04. More Exclusive Creations Grid -->
      <section class="bg-neutral-100 text-black py-16 px-4 sm:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="flex items-baseline justify-between mb-8">
            <div>
              <span class="text-[10px] font-mono font-bold tracking-widest uppercase text-red-600">
                EXCLUSIVE BOTANI JAWI
              </span>
              <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black mt-1">
                KONSENTRAT TINGGI 30%
              </h2>
            </div>

            <button
              onclick={() => nav.goToCatalog('Semua')}
              class="text-xs font-mono font-bold uppercase tracking-wider underline underline-offset-4 hover:opacity-60 cursor-pointer"
            >
              Eksplorasi Lengkap &rarr;
            </button>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each PRODUCTS.slice(3, 6) as product}
              <ProductCard {product} />
            {/each}
          </div>
        </div>
      </section>

    {:else if nav.currentPage === 'catalog'}
      <!-- 05. Full Catalog with Interactive Esenzzia Left Sidebar Filters -->
      <ProductCatalog />

    {:else if nav.currentPage === 'detail'}
      <!-- 06. 50/50 Full Product Detail Page -->
      <ProductDetailView />
    {/if}
  </main>

  <!-- Modern Luxury Footer -->
  <Footer />

  <!-- Global Slide-Out Cart Drawer -->
  <CartDrawer />
</div>
