<script lang="ts">
  import type { PerfumeProduct } from '$lib/types';
  import { cart } from '$lib/stores/cart.svelte';
  import { nav } from '$lib/stores/nav.svelte';
  import { Star, ChevronDown, Check } from 'lucide-svelte';

  let { product }: { product: PerfumeProduct } = $props();

  let selectedSize = $state<'30ml' | '100ml' | '5ml'>('100ml');
  let isAdded = $state(false);

  function handleAdd(e: MouseEvent) {
    e.stopPropagation();
    cart.addItem(product, selectedSize, 1);
    isAdded = true;
    setTimeout(() => {
      isAdded = false;
    }, 1200);
  }
</script>

<div
  onclick={() => nav.goToDetail(product)}
  class="group flex flex-col justify-between bg-white text-black border border-black/10 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl select-none"
  title="{product.name} - Klik untuk lihat detail lengkap"
>
  <!-- Card Header Block (Signature Esenzzia Meta Layout) -->
  <div class="p-5 pb-2">
    
    <!-- Top Row: Family Square + Category Left, Discount Right -->
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span
          class="w-3 h-3 rounded-[1px] shrink-0"
          style="background-color: {product.familyColor}"
        ></span>
        <span class="text-xs font-mono font-bold text-black uppercase tracking-wider">
          {product.family}
        </span>
      </div>

      <!-- Discount Badge -->
      <span class="text-[11px] font-mono font-bold px-2 py-0.5 border border-black bg-white text-black">
        -{product.discountPercent}%
      </span>
    </div>

    <!-- Giant Number Code (Signature Esenzzia Element) -->
    <div class="text-4xl sm:text-5xl font-black tracking-tight text-black mt-2 leading-none">
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
        {product.reviewCount} Opiniones
      </span>
    </div>

  </div>

  <!-- Card Middle: Real Studio Product Photography -->
  <div class="relative w-full aspect-[4/3] bg-neutral-900 overflow-hidden flex items-center justify-center my-2">
    
    {#if product.isExclusive}
      <div class="absolute top-2.5 left-2.5 bg-black text-white text-[9px] font-mono font-black tracking-widest uppercase px-2 py-0.5 z-10 border border-white/20">
        EXCLUSIVE
      </div>
    {/if}

    <img
      src={product.image}
      alt={product.name}
      class="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
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
        <option value="5ml">Muestra 5 ml - {cart.formatIdr(product.prices['5ml'])}</option>
      </select>
      <ChevronDown class="w-3.5 h-3.5 absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none text-black/60" />
    </div>

    <!-- Add to Cart Tactile Button -->
    <button
      onclick={handleAdd}
      class="bg-black hover:bg-neutral-800 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-2.5 rounded-[1px] transition-colors whitespace-nowrap cursor-pointer shrink-0 flex items-center gap-1.5"
    >
      {#if isAdded}
        <Check class="w-3.5 h-3.5 text-emerald-400" />
        <span>Añadido</span>
      {:else}
        <span>Añadir al carrito</span>
      {/if}
    </button>

  </div>

</div>
