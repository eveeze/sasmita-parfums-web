<script lang="ts">
  import { nav } from '$lib/stores/nav.svelte';
</script>

<div class="w-full space-y-3 bg-black py-3 select-none">
  
  <!-- 01. Banner: PERFUMES DE EQUIVALENCIA (Flatlay Cylinder Tubes) -->
  <div
    class="relative w-full h-[360px] sm:h-[460px] md:h-[520px] overflow-hidden group cursor-pointer"
    onclick={() => nav.goToCatalog('Semua')}
  >
    <img
      src="/assets/editorial/sasmita-tubes-flatlay.jpg"
      alt="Parfum Rempah Jawi Modern Sasmita"
      class="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent"></div>

    <div class="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-12 flex flex-col justify-between py-10 sm:py-14 text-white">
      <div></div>
      <div class="space-y-4 max-w-xl">
        <h2 class="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
          PARFUM REMPAH JAWI
        </h2>
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
      <div class="self-end text-xs font-mono font-bold tracking-widest text-white/80 uppercase">
        1044 Formulasi Parfum
      </div>
    </div>
  </div>

  <!-- 02. Banner: NOVEDADES / RILISAN TERBARU (Illuminated Glass Shelf Lineup) -->
  <div
    class="relative w-full h-[360px] sm:h-[460px] md:h-[520px] overflow-hidden group cursor-pointer"
    onclick={() => nav.goToCatalog('Semua')}
  >
    <img
      src="/assets/editorial/shelf-background.jpg"
      alt="Rilisan Botol Parfum Sasmita Terbaru"
      class="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
    />
    
    <!-- Real Sasmita Bottles Lineup Standing on Shelf -->
    <div class="absolute inset-0 flex items-center justify-end pr-6 sm:pr-16 pointer-events-none opacity-90">
      <div class="flex items-end gap-2 sm:gap-4 scale-75 sm:scale-90 md:scale-100 origin-right">
        <img src="/assets/bottles/bottle-017.png" alt="017" class="w-32 md:w-36 h-auto drop-shadow-2xl" />
        <img src="/assets/bottles/bottle-108.png" alt="108" class="w-32 md:w-36 h-auto drop-shadow-2xl" />
        <img src="/assets/bottles/bottle-245.png" alt="245" class="w-32 md:w-36 h-auto drop-shadow-2xl" />
        <img src="/assets/bottles/bottle-502.png" alt="502" class="w-32 md:w-36 h-auto drop-shadow-2xl" />
        <img src="/assets/bottles/bottle-764.png" alt="764" class="w-32 md:w-36 h-auto drop-shadow-2xl" />
      </div>
    </div>

    <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent"></div>

    <div class="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-12 flex flex-col justify-center text-white">
      <div class="space-y-4 max-w-xl">
        <h2 class="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
          RILISAN TERBARU
        </h2>
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
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Semua'); }} class="underline underline-offset-4 hover:text-amber-400">
            Juli
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 03. Banner: TOP VENTAS / BEST SELLERS (Pastel 3D Podium with Tubes 073, 603, 201) -->
  <div
    class="relative w-full h-[360px] sm:h-[460px] md:h-[520px] overflow-hidden group cursor-pointer"
    onclick={() => nav.goToCatalog('Semua')}
  >
    <img
      src="/assets/editorial/sasmita-top-ventas.jpg"
      alt="Top Ventas Sasmita Studio"
      class="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent"></div>

    <div class="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-12 flex flex-col justify-center text-white">
      <div class="space-y-4 max-w-md">
        <h2 class="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
          TOP SELLER
        </h2>
        <div class="flex flex-col items-start gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-white">
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

  <!-- 04. Banner: PACKS (Bold Red Studio Background with Open Gift Box) -->
  <div
    class="relative w-full h-[360px] sm:h-[460px] md:h-[520px] overflow-hidden group cursor-pointer"
    onclick={() => nav.goToCatalog('Semua')}
  >
    <img
      src="/assets/editorial/sasmita-packs-giftbox.jpg"
      alt="Packs Discovery Sasmita Gift Box"
      class="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent"></div>

    <div class="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-12 flex flex-col justify-center text-white">
      <div class="space-y-4 max-w-md">
        <h2 class="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
          PACKS
        </h2>
        <div class="flex flex-col items-start gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-white">
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
    </div>
  </div>

  <!-- 05. Banner: REGALOS / BINGKISAN HADIAH (Diagonal Rows of Pink/Red Tubes) -->
  <div
    class="relative w-full h-[360px] sm:h-[460px] md:h-[520px] overflow-hidden group cursor-pointer"
    onclick={() => nav.goToCatalog('Semua')}
  >
    <img
      src="/assets/editorial/sasmita-regalos.jpg"
      alt="Bingkisan Hadiah Sasmita Regalos"
      class="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent"></div>

    <div class="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-12 flex flex-col justify-center text-white">
      <div class="space-y-4 max-w-md">
        <h2 class="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
          REGALOS
        </h2>
        <div class="flex flex-col items-start gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-white">
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Semua'); }} class="underline underline-offset-4 hover:text-amber-400">
            Kartu Hadiah
          </button>
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Semua'); }} class="underline underline-offset-4 hover:text-amber-400">
            Packs Hadiah
          </button>
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Semua'); }} class="underline underline-offset-4 hover:text-amber-400">
            Aksesori &amp; Semprotan
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 06. Banner: EXCLUSIVE (PERFUMES NICHO) (Water Ripple Reflection) -->
  <div
    class="relative w-full h-[360px] sm:h-[460px] md:h-[520px] overflow-hidden group cursor-pointer"
    onclick={() => nav.goToCatalog('Semua')}
  >
    <img
      src="/assets/editorial/sasmita-exclusive-water.jpg"
      alt="Exclusive Perfumes Nicho Sasmita"
      class="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent"></div>

    <div class="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-12 flex flex-col justify-center text-white">
      <div class="space-y-4 max-w-lg">
        <h2 class="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
          EXCLUSIVE (PARFUMS NICHO)
        </h2>
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
    </div>
  </div>

  <!-- 07. Banner: TIENDA (Physical Boutique Storefront Sign) -->
  <div
    class="relative w-full h-[320px] sm:h-[400px] overflow-hidden group cursor-pointer"
    onclick={() => alert('Atelier Sasmita: Kunjungi butik kami di Solo & Ambarawa.')}
  >
    <img
      src="/assets/editorial/sasmita-boutique-storefront.jpg"
      alt="Butik Toko Sasmita Tienda"
      class="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

    <div class="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-12 flex flex-col justify-center text-white">
      <div class="space-y-2 max-w-md">
        <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
          TIENDA &bull; BUTIK
        </h2>
        <p class="text-xs font-mono text-white/70">
          Uji aroma langsung di slow bar atelier kami.
        </p>
      </div>
    </div>
  </div>

</div>
