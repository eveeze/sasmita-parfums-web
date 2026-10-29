<script lang="ts">
  import { nav } from '$lib/stores/nav.svelte';
  import { cart } from '$lib/stores/cart.svelte';
  import { Star, Heart, Truck, Check, Info } from 'lucide-svelte';

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

<div class="bg-white text-black min-h-screen py-8 px-4 sm:px-8 select-none">
  <div class="max-w-7xl mx-auto">
    
    <!-- Top Breadcrumbs -->
    <div class="text-[11px] font-mono text-black/60 uppercase tracking-wider mb-6 flex items-center gap-2">
      <button onclick={() => nav.goToHome()} class="hover:underline">Beranda</button>
      <span>&gt;</span>
      <button onclick={() => nav.goToCatalog('Semua')} class="hover:underline">Perfumes de imitación</button>
      <span>&gt;</span>
      <span class="font-bold text-black">{product.code} {product.name}</span>
    </div>

    <!-- 50/50 Product Detail Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
      
      <!-- Left 50%: Giant Studio Product Photography from Esenzzia -->
      <div class="lg:col-span-6 bg-neutral-900 rounded-[2px] flex items-center justify-center relative overflow-hidden shadow-xl border border-black/10">
        <img
          src={product.image}
          alt="{product.code} {product.name}"
          class="w-full h-auto object-cover object-center max-h-[620px]"
        />

        {#if product.isExclusive}
          <div class="absolute top-4 left-4 bg-black text-white text-[10px] font-mono font-black tracking-widest uppercase px-3 py-1 border border-white/20">
            EXCLUSIVE
          </div>
        {/if}
      </div>

      <!-- Right 50%: Configuration, Meta, & Buy CTA (Signature Esenzzia Spec) -->
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
              <span class="text-xs font-mono underline cursor-pointer text-black/70 hover:text-black">
                Ver {product.reviewCount} Opiniones
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
              class="p-2 border border-black/20 hover:border-black rounded-[1px] transition-colors cursor-pointer"
              aria-label="Wishlist"
            >
              <Heart class="w-5 h-5 {isWishlisted ? 'fill-red-600 text-red-600' : 'text-black'}" />
            </button>
          </div>

          <div class="text-xs font-bold font-mono uppercase tracking-widest text-black/60 mt-1">
            {product.category.toUpperCase()} &bull; {product.name}
          </div>

          <!-- Inspiration Banner Box (Signature Esenzzia Element) -->
          <div class="mt-4 p-4 border border-black flex items-center justify-between bg-neutral-50">
            <div>
              <div class="text-[10px] font-mono uppercase text-black/60">INSPIRASI AROMA:</div>
              <div class="text-xs sm:text-sm font-bold uppercase text-black">{product.inspiration}</div>
            </div>
            
            <div class="text-right">
              <span class="inline-block px-2.5 py-1 border border-black text-[11px] font-bold uppercase tracking-wider bg-white">
                SASMITA ATELIER
              </span>
              <div class="text-[10px] font-mono text-black/60 mt-1">
                Vendidos 6.055 perfumes
              </div>
            </div>
          </div>
        </div>

        <!-- Sizing Selector Radio Cards -->
        <div class="space-y-2.5 font-mono text-xs">
          <!-- 30ml -->
          <label class="flex items-center justify-between p-3.5 border cursor-pointer transition-all {selectedSize === '30ml' ? 'border-black bg-neutral-100 font-bold' : 'border-black/20 hover:border-black'}">
            <div class="flex items-center gap-3">
              <input type="radio" name="size" value="30ml" bind:group={selectedSize} class="accent-black" />
              <span>30 ml &mdash; {cart.formatIdr(product.prices['30ml'])}</span>
            </div>
            <span class="text-black/60 line-through">Rp 330.000</span>
          </label>

          <!-- 100ml (Default) -->
          <label class="flex items-center justify-between p-3.5 border cursor-pointer transition-all {selectedSize === '100ml' ? 'border-black bg-neutral-100 font-bold ring-1 ring-black' : 'border-black/20 hover:border-black'}">
            <div class="flex items-center gap-3">
              <input type="radio" name="size" value="100ml" bind:group={selectedSize} class="accent-black" />
              <span>100 ml &mdash; {cart.formatIdr(product.prices['100ml'])}</span>
            </div>
            <span class="text-black/60 line-through">Rp 530.000</span>
          </label>

          <!-- 5ml Sample -->
          <label class="flex items-center justify-between p-3.5 border cursor-pointer transition-all {selectedSize === '5ml' ? 'border-black bg-neutral-100 font-bold' : 'border-black/20 hover:border-black'}">
            <div class="flex items-center gap-3">
              <input type="radio" name="size" value="5ml" bind:group={selectedSize} class="accent-black" />
              <span>Muestra 5 ml &mdash; {cart.formatIdr(product.prices['5ml'])}</span>
            </div>
            <span class="text-emerald-700 font-bold">Vial Semprot</span>
          </label>
        </div>

        <!-- Quantity Stepper & Big Tactile CTA -->
        <div class="space-y-3 pt-1">
          
          <div class="flex items-center gap-3">
            <!-- Stepper [-] [1] [+] -->
            <div class="flex items-center border border-black bg-white font-mono text-sm">
              <button
                onclick={() => quantity = Math.max(1, quantity - 1)}
                class="w-10 h-12 flex items-center justify-center font-bold hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                -
              </button>
              <span class="w-10 text-center font-bold">{quantity}</span>
              <button
                onclick={() => quantity += 1}
                class="w-10 h-12 flex items-center justify-center font-bold hover:bg-neutral-100 transition-colors cursor-pointer"
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
                <span>AÑADIDO AL CARRITO</span>
              {:else}
                <span>AÑADIR AL CARRITO &bull; {cart.formatIdr(product.prices[selectedSize] * quantity)} (-15%)</span>
              {/if}
            </button>
          </div>

          <div class="flex items-center justify-between text-[11px] font-mono text-black/70 px-1">
            <span>Ahorras {cart.formatIdr(Math.round(product.prices[selectedSize] * 0.15))} / unit</span>
            <span class="flex items-center gap-1 text-black/50"><Info class="w-3.5 h-3.5" /> Diskon Peluncuran</span>
          </div>

        </div>

        <!-- Shipping Box (ENVÍO ESTÁNDAR) -->
        <div class="p-4 bg-neutral-50 border border-black/10 space-y-1.5 text-xs font-mono">
          <div class="flex items-center gap-2 font-bold uppercase text-black">
            <Truck class="w-4 h-4 text-emerald-600" />
            <span>ENVÍO ESTÁNDAR: GRATIS</span>
          </div>
          <p class="text-[11px] text-black/70 font-sans">
            Estimasi tiba 2-4 hari kerja via JNE Express / SiCepat ke seluruh Indonesia. Dikemas kotak anti-pecah.
          </p>
        </div>

        <!-- Tabbed Information (Signature Esenzzia Spec) -->
        <div class="pt-4 border-t border-black/10">
          
          <!-- Tab Navigation -->
          <div class="flex border-b border-black/15 text-xs font-mono font-bold uppercase">
            <button
              onclick={() => activeTab = 'deskripsi'}
              class="py-2.5 px-4 border-b-2 transition-all cursor-pointer {activeTab === 'deskripsi' ? 'border-black text-black' : 'border-transparent text-black/40 hover:text-black'}"
            >
              Descripción
            </button>
            <button
              onclick={() => activeTab = 'intensitas'}
              class="py-2.5 px-4 border-b-2 transition-all cursor-pointer {activeTab === 'intensitas' ? 'border-black text-black' : 'border-transparent text-black/40 hover:text-black'}"
            >
              Uso e Intensidad
            </button>
            <button
              onclick={() => activeTab = 'notas'}
              class="py-2.5 px-4 border-b-2 transition-all cursor-pointer {activeTab === 'notas' ? 'border-black text-black' : 'border-transparent text-black/40 hover:text-black'}"
            >
              Notas
            </button>
            <button
              onclick={() => activeTab = 'ingredientes'}
              class="py-2.5 px-4 border-b-2 transition-all cursor-pointer {activeTab === 'ingredientes' ? 'border-black text-black' : 'border-transparent text-black/40 hover:text-black'}"
            >
              Ingredientes
            </button>
          </div>

          <!-- Tab Content Body -->
          <div class="py-5 text-xs text-black/80 font-sans leading-relaxed">
            {#if activeTab === 'deskripsi'}
              <p class="text-sm leading-relaxed">{product.description}</p>
            {:else if activeTab === 'intensitas'}
              <div class="space-y-3 font-mono">
                <div class="flex justify-between border-b border-black/10 pb-2">
                  <span class="text-black/60">Fuerza / Intensitas:</span>
                  <span class="font-bold text-black">{product.intensity}</span>
                </div>
                <div class="flex justify-between border-b border-black/10 pb-2">
                  <span class="text-black/60">Ketahanan Kulit:</span>
                  <span class="font-bold text-black">{product.longevity}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-black/60">Sillage / Estela:</span>
                  <span class="font-bold text-black">{product.sillage}</span>
                </div>
              </div>
            {:else if activeTab === 'notas'}
              <div class="space-y-3 font-mono">
                <div class="p-3 bg-neutral-100 rounded-[1px]">
                  <span class="text-[10px] text-black/50 block font-bold">NOTAS DE SALIDA (Top Notes):</span>
                  <span class="font-semibold text-black">{product.pyramid.top.join(' • ')}</span>
                </div>
                <div class="p-3 bg-neutral-100 rounded-[1px]">
                  <span class="text-[10px] text-black/50 block font-bold">NOTAS DE CORAZÓN (Heart Notes):</span>
                  <span class="font-semibold text-black">{product.pyramid.heart.join(' • ')}</span>
                </div>
                <div class="p-3 bg-neutral-100 rounded-[1px]">
                  <span class="text-[10px] text-black/50 block font-bold">NOTAS DE FONDO (Base Notes):</span>
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
