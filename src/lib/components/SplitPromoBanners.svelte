<script lang="ts">
  import { nav } from '$lib/stores/nav.svelte';
</script>

<div class="w-full space-y-3 bg-black py-3 select-none">
  
  <!-- 01. Banner: PARFUM REMPAH JAWI (Real Esenzzia Flatlay Tubes) -->
  <div
    class="relative w-full h-[380px] sm:h-[480px] md:h-[560px] overflow-hidden group cursor-pointer"
    onclick={() => nav.goToCatalog('Semua')}
  >
    <img
      src="/assets/esenzzia/01-banner-equivalencia.jpg"
      alt="Parfum Rempah Jawi Modern Sasmita"
      class="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-transparent"></div>

    <div class="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-14 flex flex-col justify-between py-12 sm:py-16 text-white">
      <div></div>
      <div class="space-y-4 max-w-xl">
        <h2 class="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
          PARFUM REMPAH JAWI
        </h2>
        <div class="flex flex-wrap items-center gap-5 text-xs sm:text-sm font-bold tracking-wider uppercase text-white">
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Semua'); }} class="underline underline-offset-4 hover:text-amber-400 cursor-pointer">
            Top Penjualan
          </button>
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Pria'); }} class="underline underline-offset-4 hover:text-amber-400 cursor-pointer">
            Pria
          </button>
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Wanita'); }} class="underline underline-offset-4 hover:text-amber-400 cursor-pointer">
            Wanita
          </button>
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Unisex'); }} class="underline underline-offset-4 hover:text-amber-400 cursor-pointer">
            Unisex
          </button>
        </div>
      </div>
      <div class="self-end text-xs font-mono font-bold tracking-widest text-white/90 uppercase">
        1044 Formulasi Parfum
      </div>
    </div>
  </div>

  <!-- 02. Banner: RILISAN TERBARU (Real Esenzzia Glass Shelf Lineup) -->
  <div
    class="relative w-full h-[380px] sm:h-[480px] md:h-[560px] overflow-hidden group cursor-pointer"
    onclick={() => nav.goToCatalog('Semua')}
  >
    <img
      src="/assets/esenzzia/02-banner-novedades.jpg"
      alt="Rilisan Botol Parfum Sasmita Terbaru"
      class="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-transparent"></div>

    <div class="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-14 flex flex-col justify-center text-white">
      <div class="space-y-4 max-w-xl">
        <h2 class="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
          RILISAN TERBARU
        </h2>
        <div class="flex flex-col items-start gap-2.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-white">
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Semua'); }} class="underline underline-offset-4 hover:text-amber-400 cursor-pointer">
            Panen Oktober
          </button>
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Semua'); }} class="underline underline-offset-4 hover:text-amber-400 cursor-pointer">
            September
          </button>
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Semua'); }} class="underline underline-offset-4 hover:text-amber-400 cursor-pointer">
            Agustus
          </button>
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Semua'); }} class="underline underline-offset-4 hover:text-amber-400 cursor-pointer">
            Juli
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 03. Banner: TOP SELLER (Real Esenzzia Pastel 3D Podiums) -->
  <div
    class="relative w-full h-[380px] sm:h-[480px] md:h-[560px] overflow-hidden group cursor-pointer"
    onclick={() => nav.goToCatalog('Semua')}
  >
    <img
      src="/assets/esenzzia/03-banner-topventas.jpg"
      alt="Top Seller Sasmita Studio"
      class="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent"></div>

    <div class="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-14 flex flex-col justify-center text-white">
      <div class="space-y-4 max-w-md">
        <h2 class="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
          TOP SELLER
        </h2>
        <div class="flex flex-col items-start gap-2.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-white">
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Pria'); }} class="underline underline-offset-4 hover:text-amber-400 cursor-pointer">
            Pria
          </button>
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Wanita'); }} class="underline underline-offset-4 hover:text-amber-400 cursor-pointer">
            Wanita
          </button>
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Unisex'); }} class="underline underline-offset-4 hover:text-amber-400 cursor-pointer">
            Unisex
          </button>
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Semua'); }} class="underline underline-offset-4 hover:text-amber-400 cursor-pointer">
            Paket Discovery
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 04. Banner: PAKET KADO (Real Esenzzia Red Studio Box) -->
  <div
    class="relative w-full h-[380px] sm:h-[480px] md:h-[560px] overflow-hidden group cursor-pointer"
    onclick={() => nav.goToCatalog('Semua')}
  >
    <img
      src="/assets/esenzzia/04-banner-packs.jpg"
      alt="Paket Discovery Sasmita Gift Box"
      class="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>

    <div class="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-14 flex flex-col justify-center text-white">
      <div class="space-y-4 max-w-md">
        <h2 class="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
          PAKET DISCOVERY
        </h2>
        <div class="flex flex-col items-start gap-2.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-white">
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Pria'); }} class="underline underline-offset-4 hover:text-amber-400 cursor-pointer">
            Pria
          </button>
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Wanita'); }} class="underline underline-offset-4 hover:text-amber-400 cursor-pointer">
            Wanita
          </button>
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Unisex'); }} class="underline underline-offset-4 hover:text-amber-400 cursor-pointer">
            Unisex
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 05. Banner: HADIAH & BINGKISAN (Real Esenzzia Diagonal Pink/Coral Tubes) -->
  <div
    class="relative w-full h-[380px] sm:h-[480px] md:h-[560px] overflow-hidden group cursor-pointer"
    onclick={() => nav.goToCatalog('Semua')}
  >
    <img
      src="/assets/esenzzia/05-banner-regalos.jpg"
      alt="Bingkisan Hadiah Sasmita"
      class="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>

    <div class="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-14 flex flex-col justify-center text-white">
      <div class="space-y-4 max-w-md">
        <h2 class="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
          HADIAH &amp; BINGKISAN
        </h2>
        <div class="flex flex-col items-start gap-2.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-white">
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Semua'); }} class="underline underline-offset-4 hover:text-amber-400 cursor-pointer">
            Kartu Hadiah Khusus
          </button>
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Semua'); }} class="underline underline-offset-4 hover:text-amber-400 cursor-pointer">
            Boks Parsel Eksklusif
          </button>
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Semua'); }} class="underline underline-offset-4 hover:text-amber-400 cursor-pointer">
            Aksesori &amp; Semprotan Saku
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 06. Banner: EKSKLUSIF (PARFUM NICHE) (Real Esenzzia Water Ripple) -->
  <div
    class="relative w-full h-[380px] sm:h-[480px] md:h-[560px] overflow-hidden group cursor-pointer"
    onclick={() => nav.goToCatalog('Semua')}
  >
    <img
      src="/assets/esenzzia/06-banner-exclusive.jpg"
      alt="Eksklusif Parfum Niche Sasmita"
      class="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-transparent"></div>

    <div class="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-14 flex flex-col justify-center text-white">
      <div class="space-y-4 max-w-lg">
        <h2 class="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
          EKSKLUSIF (Parfum Niche)
        </h2>
        <div class="flex flex-wrap items-center gap-5 text-xs sm:text-sm font-bold tracking-wider uppercase text-white">
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Semua'); }} class="underline underline-offset-4 hover:text-amber-400 cursor-pointer">
            Top Penjualan
          </button>
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Pria'); }} class="underline underline-offset-4 hover:text-amber-400 cursor-pointer">
            Pria
          </button>
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Wanita'); }} class="underline underline-offset-4 hover:text-amber-400 cursor-pointer">
            Wanita
          </button>
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Unisex'); }} class="underline underline-offset-4 hover:text-amber-400 cursor-pointer">
            Unisex
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 07. Banner: EDISI DESAINER (Real Esenzzia Cyan Sky with Tubes) -->
  <div
    class="relative w-full h-[380px] sm:h-[480px] md:h-[560px] overflow-hidden group cursor-pointer"
    onclick={() => nav.goToCatalog('Semua')}
  >
    <img
      src="/assets/esenzzia/07-banner-disenador.jpg"
      alt="Edisi Desainer Sasmita Atelier"
      class="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-transparent"></div>

    <div class="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-14 flex flex-col justify-center text-white">
      <div class="space-y-4 max-w-md">
        <h2 class="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
          EDISI DESAINER
        </h2>
        <div class="flex flex-wrap items-center gap-5 text-xs sm:text-sm font-bold tracking-wider uppercase text-white">
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Semua'); }} class="underline underline-offset-4 hover:text-amber-400 cursor-pointer">
            Top Penjualan
          </button>
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Pria'); }} class="underline underline-offset-4 hover:text-amber-400 cursor-pointer">
            Pria
          </button>
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Wanita'); }} class="underline underline-offset-4 hover:text-amber-400 cursor-pointer">
            Wanita
          </button>
          <button onclick={(e) => { e.stopPropagation(); nav.goToCatalog('Unisex'); }} class="underline underline-offset-4 hover:text-amber-400 cursor-pointer">
            Unisex
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 08. Banner: BUTIK ATELIER (Rebranded Real 3D Sasmita Signboard) -->
  <div
    class="relative w-full h-[340px] sm:h-[440px] overflow-hidden group cursor-pointer"
    onclick={() => nav.goToCatalog('Semua')}
  >
    <img
      src="/assets/esenzzia/08-banner-tienda-clean.jpg"
      alt="Butik Studio Sasmita Atelier"
      class="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>

    <div class="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-14 flex flex-col justify-center text-white">
      <div class="space-y-3 max-w-md">
        <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
          BUTIK ATELIER
        </h2>
        <p class="text-xs font-mono text-white/80">
          Uji aroma langsung di slow bar wewangian kami.
        </p>
      </div>
    </div>
  </div>

</div>
