<script lang="ts">
  import type { PerfumeProduct } from '$lib/types';
  import { cart } from '$lib/stores/cart.svelte';
  import { nav } from '$lib/stores/nav.svelte';
  import { sounds } from '$lib/utils/audio';
  import { Star, ChevronDown, Check } from 'lucide-svelte';
  import confetti from 'canvas-confetti';

  let { product }: { product: PerfumeProduct } = $props();

  let selectedSize = $state<'30ml' | '100ml' | '5ml'>('100ml');
  let cardEl: HTMLElement;
  let isAdded = $state(false);

  // 3D Card Tilt Variables
  let tiltX = $state(0);
  let tiltY = $state(0);
  let isHovered = $state(false);

  function handleMouseMove(e: MouseEvent) {
    if (!cardEl) return;
    const rect = cardEl.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    tiltX = x * 10;
    tiltY = -y * 10;
  }

  function handleMouseLeave() {
    isHovered = false;
    tiltX = 0;
    tiltY = 0;
  }

  function handleAdd(e: MouseEvent) {
    e.stopPropagation();
    sounds.playSpritz();
    cart.addItem(product, selectedSize, 1);
    isAdded = true;

    // Trigger subtle golden perfume confetti burst
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    confetti({
      particleCount: 28,
      spread: 60,
      origin: { x, y },
      colors: ['#F59E0B', '#FBBF24', '#10B981', '#FFFFFF'],
      disableForReducedMotion: true,
      scalar: 0.8
    });

    setTimeout(() => {
      isAdded = false;
    }, 1200);
  }
</script>

<div
  bind:this={cardEl}
  onmousemove={handleMouseMove}
  onmouseenter={() => { isHovered = true; sounds.playHoverTick(); }}
  onmouseleave={handleMouseLeave}
  onclick={() => { sounds.playGlassClink(); nav.goToDetail(product); }}
  style="transform: perspective(1000px) rotateY({tiltX}deg) rotateX({tiltY}deg);"
  class="group relative flex flex-col justify-between bg-white text-black border border-black/10 overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:shadow-[0_20px_45px_rgba(0,0,0,0.18)] hover:border-black select-none rounded-[1px]"
  title="{product.name} - Klik untuk lihat detail lengkap"
>
  <!-- Card Header Block (Signature Esenzzia Meta Layout) -->
  <div class="p-5 pb-2">
    
    <!-- Top Row: Family Square + Category Left, Discount Right -->
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <!-- Colored Square Tag with pulsating glow when hovered -->
        <span
          class="w-3 h-3 rounded-[1px] shrink-0 transition-transform duration-300 group-hover:scale-125 shadow-sm"
          style="background-color: {product.familyColor}"
        ></span>
        <span class="text-xs font-mono font-bold text-black uppercase tracking-wider">
          {product.family}
        </span>
      </div>

      <!-- Discount Badge -->
      <span class="text-[11px] font-mono font-bold px-2 py-0.5 border border-black bg-white text-black transition-colors group-hover:bg-black group-hover:text-white">
        -{product.discountPercent}%
      </span>
    </div>

    <!-- Giant Number Code (Signature Esenzzia Element with smooth hover shift) -->
    <div class="text-4xl sm:text-5xl font-black tracking-tight text-black mt-2 leading-none transition-transform duration-300 group-hover:translate-x-1">
      {product.code}
    </div>

    <!-- Category Label -->
    <div class="text-xs font-semibold text-black/70 mt-1 uppercase tracking-wider">
      {product.category}
    </div>

    <!-- Inspiration Subtitle -->
    <div class="text-xs font-bold text-black mt-2 uppercase tracking-tight line-clamp-1">
      {product.inspiration}
    </div>

    <!-- Star Ratings -->
    <div class="flex items-center gap-1.5 mt-2">
      <div class="flex text-amber-500">
        {#each Array(5) as _}
          <Star class="w-3 h-3 fill-amber-500 stroke-none" />
        {/each}
      </div>
      <span class="text-[11px] font-mono text-black/60 font-medium">
        {product.reviewCount} Ulasan
      </span>
    </div>

  </div>

  <!-- Card Middle: Product Bottle & Tube Studio Image with 3D Depth Layering -->
  <div class="relative w-full aspect-[4/3] bg-[#EBE7DF] overflow-hidden flex items-center justify-center p-4 my-2 transition-colors duration-500 group-hover:bg-[#E5DFD4]">
    
    <!-- Exclusive Badge Tag -->
    <div class="absolute top-2.5 left-2.5 bg-black text-white text-[9px] font-mono font-black tracking-widest uppercase px-2 py-0.5 z-10 shadow">
      EXCLUSIVE
    </div>

    <img
      src={product.image}
      alt={product.name}
      class="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-110 drop-shadow-md"
      loading="lazy"
    />
  </div>

  <!-- Card Footer: Size Dropdown & Añadir al carrito Button -->
  <div class="p-4 pt-1 bg-white border-t border-black/10 flex items-center justify-between gap-2">
    
    <!-- Size Selector -->
    <div class="relative flex-1">
      <select
        bind:value={selectedSize}
        onclick={(e) => e.stopPropagation()}
        class="w-full appearance-none bg-transparent text-xs font-mono font-bold py-2 pr-6 focus:outline-none cursor-pointer"
      >
        <option value="100ml">100 ml - {cart.formatIdr(product.prices['100ml'])}</option>
        <option value="30ml">30 ml - {cart.formatIdr(product.prices['30ml'])}</option>
        <option value="5ml">Sample 5 ml - {cart.formatIdr(product.prices['5ml'])}</option>
      </select>
      <ChevronDown class="w-3.5 h-3.5 absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none text-black/60" />
    </div>

    <!-- Add to Cart Tactile Button with Spritz Feedback -->
    <button
      onclick={handleAdd}
      class="bg-black hover:bg-neutral-800 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-2.5 rounded-[1px] transition-all transform active:scale-95 whitespace-nowrap cursor-pointer shrink-0 flex items-center gap-1.5 shadow"
    >
      {#if isAdded}
        <Check class="w-3.5 h-3.5 text-emerald-400" />
        <span>+ Masuk!</span>
      {:else}
        <span>+ Keranjang</span>
      {/if}
    </button>

  </div>

</div>
