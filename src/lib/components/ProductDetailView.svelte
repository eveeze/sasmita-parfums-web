<script lang="ts">
  import { nav } from '$lib/stores/nav.svelte';
  import { cart } from '$lib/stores/cart.svelte';
  import { Star, Heart, Truck, ShieldCheck, Check, Sparkles } from 'lucide-svelte';

  const product = $derived(nav.selectedProduct);

  let selectedSize = $state<'30ml' | '100ml' | '5ml'>('100ml');
  let quantity = $state<number>(1);
  let activeTab = $state<'deskripsi' | 'intensitas' | 'notas' | 'ingredientes'>('deskripsi');
  let isWishlisted = $state(false);
  let isAdded = $state(false);

  function handleAddToCart() {
    cart.addItem(product, selectedSize, quantity);
    isAdded = true;
    setTimeout(() => {
      isAdded = false;
    }, 1500);
  }
</script>

<div class="bg-white text-black min-h-screen py-8 px-4 sm:px-8">
  <div class="max-w-7xl mx-auto">
    
    <!-- Top Breadcrumbs -->
    <div class="text-[11px] font-mono text-black/60 uppercase tracking-wider mb-6 flex items-center gap-2">
      <button onclick={() => nav.goToHome()} class="hover:underline">Beranda</button>
      <span>&gt;</span>
      <button onclick={() => nav.goToCatalog('Semua')} class="hover:underline">Parfumes</button>
      <span>&gt;</span>
      <span class="font-bold text-black">{product.code} {product.name}</span>
    </div>

    <!-- 50/50 Product Detail Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
      
      <!-- Left 50%: Giant Studio Product Photograph with Stand & Cylinder Box -->
      <div class="lg:col-span-6 bg-[#171513] p-8 sm:p-14 rounded-[2px] flex items-center justify-center relative overflow-hidden shadow-2xl border border-black/10">
        
        <!-- Subtle studio spotlight behind bottle -->
        <div class="absolute inset-0 bg-radial from-neutral-800/40 via-transparent to-black pointer-events-none"></div>

        <img
          src={product.image}
          alt="{product.code} {product.name}"
          class="w-full max-w-[480px] h-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)] transition-transform duration-700 ease-out hover:scale-105"
        />

        <!-- Exclusive Badge -->
        <div class="absolute top-4 left-4 bg-black text-white text-[10px] font-mono font-black tracking-widest uppercase px-3 py-1 border border-white/20">
          EXCLUSIVE
        </div>
      </div>

      <!-- Right 50%: Configuration, Meta, & Buy CTA -->
      <div class="lg:col-span-6 space-y-6">
        
        <!-- Header Info -->
        <div>
          <!-- Family & Reviews -->
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="w-3.5 h-3.5 rounded-[1px] shrink-0" style="background-color: {product.familyColor}"></span>
              <span class="text-xs font-mono font-bold uppercase tracking-wider text-black">
                {product.family}
              </span>
            </div>

            <!-- Star Rating -->
            <div class="flex items-center gap-1.5">
              <div class="flex text-amber-500">
                {#each Array(5) as _}
                  <Star class="w-3.5 h-3.5 fill-amber-500 stroke-none" />
                {/each}
              </div>
              <span class="text-xs font-mono underline cursor-pointer text-black/70">
                Lihat {product.reviewCount} Ulasan
              </span>
            </div>
          </div>

          <!-- Giant Number Code & Wishlist -->
          <div class="flex items-center justify-between mt-3">
            <h1 class="text-6xl sm:text-7xl font-black tracking-tight text-black leading-none">
              {product.code}
            </h1>

            <button
              onclick={() => isWishlisted = !isWishlisted}
              class="p-2 border border-black/20 hover:border-black rounded-[1px] transition-colors"
              aria-label="Wishlist"
            >
              <Heart class="w-5 h-5 {isWishlisted ? 'fill-red-600 text-red-600' : 'text-black'}" />
            </button>
          </div>

          <div class="text-xs font-bold font-mono uppercase tracking-widest text-black/60 mt-1">
            {product.category.toUpperCase()} &bull; {product.name}
          </div>

          <!-- Inspiration Banner Box (Signature Esenzzia element) -->
          <div class="mt-4 p-4 border border-black flex items-center justify-between bg-neutral-50">
            <div>
              <div class="text-[10px] font-mono uppercase text-black/60">INSPIRASI AROMA:</div>
              <div class="text-xs sm:text-sm font-bold uppercase text-black">{product.inspiration}</div>
            </div>
            <div class="text-right text-[10px] font-mono text-black/60">
              Terjual 6.055+ botol
            </div>
          </div>
        </div>

        <!-- Sizing Selector Radio Cards -->
        <div class="space-y-2.5 font-mono text-xs">
          <!-- 30ml -->
          <label class="flex items-center justify-between p-3.5 border cursor-pointer transition-all {selectedSize === '30ml' ? 'border-black bg-neutral-100 font-bold' : 'border-black/20 hover:border-black'}">
            <div class="flex items-center gap-3">
              <input type="radio" name="size" value="30ml" bind:group={selectedSize} class="accent-black" />
              <span>30 ml &mdash; Botol Kaca Silinder Saku</span>
            </div>
            <span>{cart.formatIdr(product.prices['30ml'])}</span>
          </label>

          <!-- 100ml (Default) -->
          <label class="flex items-center justify-between p-3.5 border cursor-pointer transition-all {selectedSize === '100ml' ? 'border-black bg-neutral-100 font-bold ring-1 ring-black' : 'border-black/20 hover:border-black'}">
            <div class="flex items-center gap-3">
              <input type="radio" name="size" value="100ml" bind:group={selectedSize} class="accent-black" />
              <span>100 ml &mdash; Botol Kaca + Tube Box Exclusive</span>
            </div>
            <span class="text-amber-800">{cart.formatIdr(product.prices['100ml'])}</span>
          </label>

          <!-- 5ml Sample -->
          <label class="flex items-center justify-between p-3.5 border cursor-pointer transition-all {selectedSize === '5ml' ? 'border-black bg-neutral-100 font-bold' : 'border-black/20 hover:border-black'}">
            <div class="flex items-center gap-3">
              <input type="radio" name="size" value="5ml" bind:group={selectedSize} class="accent-black" />
              <span>Muestra 5 ml &mdash; Vial Semprot Kaca Percobaan</span>
            </div>
            <span>{cart.formatIdr(product.prices['5ml'])}</span>
          </label>
        </div>

        <!-- Quantity Stepper & Big Tactile CTA -->
        <div class="flex items-center gap-3 pt-2">
          
          <!-- Stepper [-] [1] [+] -->
          <div class="flex items-center border border-black bg-white font-mono text-sm">
            <button
              onclick={() => quantity = Math.max(1, quantity - 1)}
              class="w-10 h-12 flex items-center justify-center font-bold hover:bg-neutral-100 transition-colors"
            >
              -
            </button>
            <span class="w-10 text-center font-bold">{quantity}</span>
            <button
              onclick={() => quantity += 1}
              class="w-10 h-12 flex items-center justify-center font-bold hover:bg-neutral-100 transition-colors"
            >
              +
            </button>
          </div>

          <!-- Big Black Button (AÑADIR AL CARRITO) -->
          <button
            onclick={handleAddToCart}
            class="flex-1 h-12 bg-black hover:bg-neutral-800 text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg rounded-[1px]"
          >
            {#if isAdded}
              <Check class="w-4 h-4 text-emerald-400" />
              <span>BERHASIL MASUK KERANJANG</span>
            {:else}
              <span>AÑADIR AL CARRITO &bull; {cart.formatIdr(product.prices[selectedSize] * quantity)} (-15%)</span>
            {/if}
          </button>

        </div>

        <!-- Shipping & Guarantee Box -->
        <div class="p-4 bg-neutral-50 border border-black/10 space-y-2 text-xs font-mono">
          <div class="flex items-center gap-2 font-bold uppercase">
            <Truck class="w-4 h-4 text-emerald-600" />
            <span>PENGIRIMAN STANDAR GRATIS</span>
          </div>
          <p class="text-[11px] text-black/70 font-sans">
            Estimasi tiba 2-4 hari kerja via JNE Express / SiCepat ke seluruh nusantara. Dikemas kotak busa khusus anti-pecah.
          </p>
        </div>

        <!-- Tabbed Information (Signature Esenzzia Bottom Spec) -->
        <div class="pt-4 border-t border-black/10">
          
          <!-- Tab Navigation -->
          <div class="flex border-b border-black/15 text-xs font-mono font-bold uppercase">
            <button
              onclick={() => activeTab = 'deskripsi'}
              class="py-2.5 px-4 border-b-2 transition-all {activeTab === 'deskripsi' ? 'border-black text-black' : 'border-transparent text-black/40 hover:text-black'}"
            >
              Deskripsi
            </button>
            <button
              onclick={() => activeTab = 'intensitas'}
              class="py-2.5 px-4 border-b-2 transition-all {activeTab === 'intensitas' ? 'border-black text-black' : 'border-transparent text-black/40 hover:text-black'}"
            >
              Intensitas
            </button>
            <button
              onclick={() => activeTab = 'notas'}
              class="py-2.5 px-4 border-b-2 transition-all {activeTab === 'notas' ? 'border-black text-black' : 'border-transparent text-black/40 hover:text-black'}"
            >
              Piramida Notes
            </button>
            <button
              onclick={() => activeTab = 'ingredientes'}
              class="py-2.5 px-4 border-b-2 transition-all {activeTab === 'ingredientes' ? 'border-black text-black' : 'border-transparent text-black/40 hover:text-black'}"
            >
              Bahan
            </button>
          </div>

          <!-- Tab Content Body -->
          <div class="py-5 text-xs text-black/80 font-sans leading-relaxed">
            {#if activeTab === 'deskripsi'}
              <p>{product.description}</p>
            {:else if activeTab === 'intensitas'}
              <div class="space-y-3 font-mono">
                <div class="flex justify-between border-b border-black/10 pb-2">
                  <span class="text-black/60">Kekuatan Aroma:</span>
                  <span class="font-bold text-black">{product.intensity}</span>
                </div>
                <div class="flex justify-between border-b border-black/10 pb-2">
                  <span class="text-black/60">Ketahanan Kulit:</span>
                  <span class="font-bold text-black">{product.longevity}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-black/60">Jejak Sillage:</span>
                  <span class="font-bold text-black">{product.sillage}</span>
                </div>
              </div>
            {:else if activeTab === 'notas'}
              <div class="space-y-3 font-mono">
                <div class="p-3 bg-neutral-100 rounded-[1px]">
                  <span class="text-[10px] text-black/50 block font-bold">TOP NOTES (0-30 Menit):</span>
                  <span class="font-semibold text-black">{product.pyramid.top.join(' • ')}</span>
                </div>
                <div class="p-3 bg-neutral-100 rounded-[1px]">
                  <span class="text-[10px] text-black/50 block font-bold">HEART NOTES (30 Menit - 4 Jam):</span>
                  <span class="font-semibold text-black">{product.pyramid.heart.join(' • ')}</span>
                </div>
                <div class="p-3 bg-neutral-100 rounded-[1px]">
                  <span class="text-[10px] text-black/50 block font-bold">BASE NOTES (4 - 14 Jam):</span>
                  <span class="font-semibold text-black">{product.pyramid.base.join(' • ')}</span>
                </div>
              </div>
            {:else if activeTab === 'ingredientes'}
              <p class="font-mono text-[11px] text-black/70">
                {product.ingredients}
              </p>
            {/if}
          </div>

        </div>

      </div>

    </div>

  </div>
</div>
