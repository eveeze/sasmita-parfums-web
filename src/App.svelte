<script lang="ts">
  import { onMount } from 'svelte';
  import Lenis from 'lenis';

  import TopPromoBar from '$lib/components/TopPromoBar.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import HeroBanner from '$lib/components/HeroBanner.svelte';
  import SplitPromoBanners from '$lib/components/SplitPromoBanners.svelte';
  import CustomerReviews from '$lib/components/CustomerReviews.svelte';
  import ProductCatalog from '$lib/components/ProductCatalog.svelte';
  import ProductDetailView from '$lib/components/ProductDetailView.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import CartDrawer from '$lib/components/CartDrawer.svelte';

  import { nav } from '$lib/stores/nav.svelte';

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

      <!-- 02. Exact Esenzzia Full-Bleed Runway Banners (All 7 Sections) -->
      <SplitPromoBanners />

      <!-- 03. Customer Reviews Section (4.8/5 Stars with 4 Review Cards) -->
      <CustomerReviews />

    {:else if nav.currentPage === 'catalog'}
      <!-- 04. Full Catalog with Interactive Esenzzia Left Sidebar Filters -->
      <ProductCatalog />

    {:else if nav.currentPage === 'detail'}
      <!-- 05. 50/50 Full Product Detail Page -->
      <ProductDetailView />
    {/if}
  </main>

  <!-- Modern Luxury Footer -->
  <Footer />

  <!-- Global Slide-Out Cart Drawer -->
  <CartDrawer />
</div>
