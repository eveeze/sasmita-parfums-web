<script lang="ts">
  import { nav } from '$lib/stores/nav.svelte';
  import { PRODUCTS } from '$lib/data/products';
  import { sounds } from '$lib/utils/audio';
  import AtomizerParticles from './AtomizerParticles.svelte';
  import { Sparkles, Volume2, VolumeX, Eye } from 'lucide-svelte';

  const heroProduct = PRODUCTS[0]; // Sasmita 379

  let atomizerRef: any = $state();
  let mouseTiltX = $state(0);
  let mouseTiltY = $state(0);
  let isSpritzing = $state(false);
  let audioEnabled = $state(true);

  function handleMouseMove(e: MouseEvent) {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    mouseTiltX = x * 15; // deg
    mouseTiltY = -y * 12; // deg
  }

  function handleSpritz() {
    sounds.playSpritz();
    if (atomizerRef && atomizerRef.triggerSpritz) {
      atomizerRef.triggerSpritz();
    }
    isSpritzing = true;
    setTimeout(() => {
      isSpritzing = false;
    }, 700);
  }

  function toggleAudio() {
    audioEnabled = !audioEnabled;
    sounds.enabled = audioEnabled;
  }
</script>

<svelte:window onmousemove={handleMouseMove} />

<section class="relative w-full h-[620px] sm:h-[720px] lg:h-[800px] bg-[#080706] overflow-hidden select-none">
  <!-- Studio Alchemical Glowing Background -->
  <img
    src="/assets/editorial/hero-alchemist.jpg"
    alt="3D Studio Perfume Alchemist Stage"
    class="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
  />

  <!-- Three.js Live Scent Particles / Mist Canvas -->
  <AtomizerParticles bind:this={atomizerRef} />

  <!-- Subtle Vignette Overlay -->
  <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 pointer-events-none z-10"></div>

  <!-- Audio Toggle Badge -->
  <button
    onclick={toggleAudio}
    class="absolute top-6 right-6 z-30 p-2.5 rounded-full bg-black/60 border border-white/20 text-white hover:bg-black/90 transition-all flex items-center gap-2 text-[11px] font-mono cursor-pointer backdrop-blur-md"
    title="Nyalakan / Matikan Efek Suara Semprotan"
  >
    {#if audioEnabled}
      <Volume2 class="w-4 h-4 text-amber-400" />
      <span class="hidden sm:inline">AUDIO ON</span>
    {:else}
      <VolumeX class="w-4 h-4 text-white/50" />
      <span class="hidden sm:inline">MUTED</span>
    {/if}
  </button>

  <!-- Center Floating 3D Perfume Bottle 379 with Mouse Parallax Tilt -->
  <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto">
    
    <!-- Floating Volumetric Radial Scent Aura -->
    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] rounded-full bg-gradient-to-r from-emerald-500/20 via-amber-500/20 to-purple-500/10 blur-3xl pointer-events-none transition-transform duration-700 {isSpritzing ? 'scale-125 opacity-100' : 'scale-100 opacity-60'}"
    ></div>

    <!-- 3D Transform Card Container -->
    <div
      style="transform: perspective(1000px) rotateY({mouseTiltX}deg) rotateX({mouseTiltY}deg);"
      class="transition-transform duration-300 ease-out cursor-pointer group"
      onclick={() => { sounds.playGlassClink(); nav.goToDetail(heroProduct); }}
      onmouseenter={() => sounds.playHoverTick()}
      title="{heroProduct.name} - Klik untuk beli"
    >
      <img
        src={heroProduct.image}
        alt={heroProduct.name}
        class="w-[320px] sm:w-[440px] md:w-[500px] lg:w-[560px] h-auto drop-shadow-[0_32px_65px_rgba(0,0,0,0.9)] transition-all duration-500 {isSpritzing ? 'scale-[1.03] filter brightness-110' : 'group-hover:scale-105'}"
      />

      <!-- Floating Bottle Pulse Ring when Spritzing -->
      {#if isSpritzing}
        <div class="absolute top-[28%] left-[28%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-emerald-400/80 animate-ping pointer-events-none"></div>
      {/if}
    </div>

  </div>

  <!-- Bottom Left Promo Headline & Interactive Spritz Trigger Button -->
  <div class="absolute bottom-10 sm:bottom-14 left-6 sm:left-12 lg:left-16 z-30 max-w-lg space-y-4">
    
    <div>
      <div class="inline-block px-2.5 py-1 bg-amber-500/20 border border-amber-400/50 text-amber-300 font-mono text-[10px] tracking-widest uppercase mb-2 backdrop-blur-md">
        EXTRAIT DE PARFUM 30% PURE OIL
      </div>
      <h1 class="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-none">
        WANGI JAWI
      </h1>
      <div class="inline-block text-base sm:text-xl font-black text-white uppercase tracking-wider border-b-2 sm:border-b-4 border-white pb-1 mt-2">
        -15% DISKON LAUNCHING
      </div>
    </div>

    <!-- Gacor Motion Action Buttons: Test Spritz & View Details -->
    <div class="flex flex-wrap items-center gap-3 pt-2">
      
      <!-- Interactive Spritz Mist Button -->
      <button
        onclick={handleSpritz}
        class="px-5 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-black text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(245,158,11,0.4)] cursor-pointer rounded-[1px]"
      >
        <Sparkles class="w-4 h-4 fill-black stroke-none" />
        <span>SEMPROT TESTER AROMA</span>
      </button>

      <!-- View Product Button -->
      <button
        onclick={() => { sounds.playGlassClink(); nav.goToDetail(heroProduct); }}
        class="px-5 py-3 bg-white/10 hover:bg-white text-white hover:text-black font-mono font-bold text-xs uppercase tracking-wider border border-white/30 hover:border-white transition-all flex items-center gap-2 backdrop-blur-md cursor-pointer rounded-[1px]"
      >
        <Eye class="w-4 h-4" />
        <span>LIHAT DETAIL 379</span>
      </button>

    </div>

  </div>

  <!-- Right Slide Indicators (Signature Esenzzia side dots) -->
  <div class="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-2.5">
    <button class="w-3.5 h-3.5 rounded-full bg-white shadow-md"></button>
    <button onclick={() => nav.goToCatalog('Semua')} class="w-3.5 h-3.5 rounded-full border border-white hover:bg-white/40 transition-colors"></button>
    <button onclick={() => nav.goToCatalog('Pria')} class="w-3.5 h-3.5 rounded-full border border-white hover:bg-white/40 transition-colors"></button>
    <button onclick={() => nav.goToCatalog('Wanita')} class="w-3.5 h-3.5 rounded-full border border-white hover:bg-white/40 transition-colors"></button>
    <button onclick={() => nav.goToCatalog('Unisex')} class="w-3.5 h-3.5 rounded-full border border-white hover:bg-white/40 transition-colors"></button>
    <button onclick={() => nav.goToCatalog('Semua')} class="w-3.5 h-3.5 rounded-full border border-white hover:bg-white/40 transition-colors"></button>
    <button onclick={() => nav.goToCatalog('Semua')} class="w-3.5 h-3.5 rounded-full border border-white hover:bg-white/40 transition-colors"></button>
  </div>
</section>
