<script lang="ts">
  import { nav } from '$lib/stores/nav.svelte';
</script>

<section class="w-full space-y-3 bg-black py-3">
  
  <!-- Banner 1: Perfumes de Equivalencia / Koleksi Utama -->
  <div class="relative w-full h-[320px] sm:h-[420px] md:h-[480px] overflow-hidden select-none group cursor-pointer" onclick={() => nav.goToCatalog('Semua')}>
    <!-- Background Image -->
    <img
      src="/assets/editorial/sasmita-tubes-flatlay.jpg"
      alt="Koleksi Parfum Sasmita Jawi"
      class="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent"></div>

    <!-- Content Overlay -->
    <div class="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-12 flex flex-col justify-between py-10 sm:py-14 text-white">
      <div></div>

      <div class="space-y-4 max-w-xl">
        <h2 class="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
          PARFUM REMPAH JAWI MODERN
        </h2>

        <!-- Quick Filter Underlined Links -->
        <div class="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-bold tracking-wider uppercase text-white">
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Semua'); }} class="underline underline-offset-4 hover:text-amber-400">
            Top Penjualan
          </button>
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Pria'); }} class="underline underline-offset-4 hover:text-amber-400">
            Pria
          </button>
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Wanita'); }} class="underline underline-offset-4 hover:text-amber-400">
            Wanita
          </button>
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Unisex'); }} class="underline underline-offset-4 hover:text-amber-400">
            Unisex
          </button>
        </div>
      </div>

      <!-- Right Count Pill -->
      <div class="self-end text-xs font-mono font-bold tracking-widest text-white/80 uppercase">
        254 Formulasi Aroma
      </div>
    </div>
  </div>

  <!-- Banner 2: Novedades / Rilisan Terbaru (Glass Shelf with Bottles) -->
  <div class="relative w-full h-[320px] sm:h-[420px] md:h-[480px] overflow-hidden select-none group cursor-pointer" onclick={() => nav.goToCatalog('Semua')}>
    <img
      src="/assets/editorial/shelf-background.jpg"
      alt="Rilisan Botol Parfum Sasmita Terbaru"
      class="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
    />
    
    <!-- Render Lineup of 5 Sasmita Bottles on the Shelf -->
    <div class="absolute inset-0 flex items-center justify-end pr-6 sm:pr-16 pointer-events-none opacity-85">
      <div class="flex items-end gap-2 sm:gap-4 scale-75 sm:scale-90 md:scale-100 origin-right">
        <img src="/assets/bottles/bottle-017.png" alt="017" class="w-36 h-auto drop-shadow-2xl" />
        <img src="/assets/bottles/bottle-108.png" alt="108" class="w-36 h-auto drop-shadow-2xl" />
        <img src="/assets/bottles/bottle-245.png" alt="245" class="w-36 h-auto drop-shadow-2xl" />
        <img src="/assets/bottles/bottle-502.png" alt="502" class="w-36 h-auto drop-shadow-2xl" />
        <img src="/assets/bottles/bottle-764.png" alt="764" class="w-36 h-auto drop-shadow-2xl" />
      </div>
    </div>

    <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent"></div>

    <!-- Content Overlay -->
    <div class="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-12 flex flex-col justify-center text-white">
      <div class="space-y-4 max-w-xl">
        <h2 class="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
          RILISAN TERBARU
        </h2>

        <!-- Month Filter Links -->
        <div class="flex flex-col items-start gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-white">
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Semua'); }} class="underline underline-offset-4 hover:text-amber-400">
            Oktober Panen
          </button>
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Semua'); }} class="underline underline-offset-4 hover:text-amber-400">
            September
          </button>
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Semua'); }} class="underline underline-offset-4 hover:text-amber-400">
            Agustus
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Banner 3: Top Ventas / Best Sellers on Studio Horizon -->
  <div class="relative w-full h-[280px] sm:h-[360px] overflow-hidden select-none group cursor-pointer bg-[#1C1917]" onclick={() => nav.goToCatalog('Semua')}>
    <img
      src="/assets/editorial/silver-horizon.jpg"
      alt="Top Ventas Sasmita Studio"
      class="w-full h-full object-cover object-center"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-transparent"></div>

    <div class="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-12 flex flex-col justify-center text-white">
      <div class="space-y-3 max-w-md">
        <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
          TOP SELLER
        </h2>

        <div class="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-bold tracking-wider uppercase text-white">
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Pria'); }} class="underline underline-offset-4 hover:text-amber-400">
            Pria
          </button>
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Wanita'); }} class="underline underline-offset-4 hover:text-amber-400">
            Wanita
          </button>
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Unisex'); }} class="underline underline-offset-4 hover:text-amber-400">
            Unisex
          </button>
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Semua'); }} class="underline underline-offset-4 hover:text-amber-400">
            Discovery Packs
          </button>
        </div>
      </div>
    </div>
  </div>

</section>
