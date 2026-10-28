<script lang="ts">
  import { nav } from '$lib/stores/nav.svelte';
  import { cart } from '$lib/stores/cart.svelte';
  import { sounds } from '$lib/utils/audio';
  import { Star, Heart, Truck, Check, Sparkles, Volume2 } from 'lucide-svelte';
  import confetti from 'canvas-confetti';

  const product = $derived(nav.selectedProduct);

  let selectedSize = $state<'30ml' | '100ml' | '5ml'>('100ml');
  let quantity = $state<number>(1);
  let activeTab = $state<'deskripsi' | 'intensitas' | 'notas' | 'ingredientes'>('deskripsi');
  let isWishlisted = $state(false);
  let isAdded = $state(false);
  let isSpritzing = $state(false);

  // 3D Tilt for product photo
  let tiltX = $state(0);
  let tiltY = $state(0);

  function handleMouseMove(e: MouseEvent) {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    tiltX = x * 14;
    tiltY = -y * 14;
  }

  function handleMouseLeave() {
    tiltX = 0;
    tiltY = 0;
  }

  function handleSpritz(e: MouseEvent) {
    sounds.playSpritz();
    isSpritzing = true;

    // Confetti mist spray from button
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    confetti({
      particleCount: 45,
      spread: 75,
      origin: { x, y },
      colors: [product.familyColor, '#F59E0B', '#10B981', '#FFFFFF'],
      disableForReducedMotion: true,
      scalar: 0.9
    });

    setTimeout(() => {
      isSpritzing = false;
    }, 700);
  }

  function handleAddToCart(e: MouseEvent) {
    sounds.playSpritz();
    cart.addItem(product, selectedSize, quantity);
    isAdded = true;

    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { x, y },
      colors: ['#F59E0B', '#FFFFFF', '#000000'],
      disableForReducedMotion: true
    });

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
      <button onclick={() => nav.goToCatalog('Semua')} class="hover:underline">Parfumes</button>
      <span>&gt;</span>
      <span class="font-bold text-black">{product.code} {product.name}</span>
    </div>

    <!-- 50/50 Product Detail Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
      
      <!-- Left 50%: Giant Studio Product Photograph with 3D Mouse Parallax -->
      <div
        onmousemove={handleMouseMove}
        onmouseleave={handleMouseLeave}
        class="lg:col-span-6 bg-[#171513] p-8 sm:p-14 rounded-[2px] flex items-center justify-center relative overflow-hidden shadow-2xl border border-black/10 group cursor-crosshair"
      >
        <!-- Dynamic Olfactive Glow in Background -->
        <div
          class="absolute inset-0 bg-radial from-neutral-800/60 via-transparent to-black pointer-events-none transition-all duration-700"
          style="background: radial-gradient(circle at 50% 50%, {product.familyColor}25 0%, transparent 65%, #0C0A09 100%);"
        ></div>

        <!-- 3D Transform Bottle Image -->
        <div
          style="transform: perspective(1000px) rotateY({tiltX}deg) rotateX({tiltY}deg);"
          class="transition-transform duration-200 ease-out z-10 w-full flex justify-center"
        >
          <img
            src={product.image}
            alt="{product.code} {product.name}"
            class="w-full max-w-[480px] h-auto object-contain drop-shadow-[0_28px_55px_rgba(0,0,0,0.9)] transition-all duration-500 {isSpritzing ? 'scale-[1.04] brightness-110' : 'group-hover:scale-105'}"
          />
        </div>

        <!-- Exclusive Badge -->
        <div class="absolute top-4 left-4 bg-black text-white text-[10px] font-mono font-black tracking-widest uppercase px-3 py-1 border border-white/20 z-20 shadow">
          EXCLUSIVE
        </div>

        <!-- Spritz Tester Action Over Bottle Image -->
        <button
          onclick={handleSpritz}
          class="absolute bottom-4 right-4 z-20 px-3.5 py-2 bg-black/80 hover:bg-black text-amber-300 font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 border border-amber-400/40 rounded-[1px] backdrop-blur-md transition-all transform hover:scale-105 shadow-xl cursor-pointer"
        >
          <Sparkles class="w-3.5 h-3.5 text-amber-400" />
          <span>Tes Semprot Aroma</span>
        </button>
      </div>

      <!-- Right 50%: Configuration, Meta, & Buy CTA -->
      <div class="lg:col-span-6 space-y-6">
        
        <!-- Header Info -->
        <div>
          <!-- Family & Reviews -->
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="w-3.5 h-3.5 rounded-[1px] shrink-0 shadow-sm" style="background-color: {product.familyColor}"></span>
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
              onclick={() => { sounds.playHoverTick(); isWishlisted = !isWishlisted; }}
              class="p-2 border border-black/20 hover:border-black rounded-[1px] transition-colors cursor-pointer"
              aria-label="Wishlist"
            >
              <Heart class="w-5 h-5 {isWishlisted ? 'fill-red-600 text-red-600' : 'text-black'}" />
            </button>
          </div>

          <div class="text-xs font-bold font-mono uppercase tracking-widest text-black/60 mt-1">
            {product.category.toUpperCase()} &bull; {product.name}
          </div>

          <!-- Inspiration Banner Box (Signature Esenzzia element) -->
          <div class="mt-4 p-4 border border-black flex items-center justify-between bg-neutral-50 shadow-sm">
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
          <label class="flex items-center justify-between p-3.5 border cursor-pointer transition-all {selectedSize === '100ml' ? 'border-black bg-neutral-100 font-bold ring-1 ring-black shadow-sm' : 'border-black/20 hover:border-black'}">
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
              onclick={() => { sounds.playHoverTick(); quantity = Math.max(1, quantity - 1); }}
              class="w-10 h-12 flex items-center justify-center font-bold hover:bg-neutral-100 transition-colors cursor-pointer"
            >
              -
            </button>
            <span class="w-10 text-center font-bold">{quantity}</span>
            <button
              onclick={() => { sounds.playHoverTick(); quantity += 1; }}
              class="w-10 h-12 flex items-center justify-center font-bold hover:bg-neutral-100 transition-colors cursor-pointer"
            >
              +
            </button>
          </div>

          <!-- Big Black Button (AÑADIR AL CARRITO) -->
          <button
            onclick={handleAddToCart}
            class="flex-1 h-12 bg-black hover:bg-neutral-800 text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all transform active:scale-95 cursor-pointer shadow-xl rounded-[1px]"
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
          <div class="flex items-center gap-2 font-bold uppercase text-black">
            <Truck class="w-4 h-4 text-emerald-600" />
            <span>PENGIRIMAN STANDAR GRATIS SE-INDONESIA</span>
          </div>
          <p class="text-[11px] text-black/70 font-sans">
            Estimasi tiba 2-4 hari kerja via JNE Express / SiCepat. Dikemas kotak busa khusus anti-pecah dan asuransi penuh.
          </p>
        </div>

        <!-- Tabbed Information (Signature Esenzzia Bottom Spec) -->
        <div class="pt-4 border-t border-black/10">
          
          <!-- Tab Navigation -->
          <div class="flex border-b border-black/15 text-xs font-mono font-bold uppercase">
            <button
              onclick={() => { sounds.playHoverTick(); activeTab = 'deskripsi'; }}
              class="py-2.5 px-4 border-b-2 transition-all cursor-pointer {activeTab === 'deskripsi' ? 'border-black text-black' : 'border-transparent text-black/40 hover:text-black'}"
            >
              Deskripsi
            </button>
            <button
              onclick={() => { sounds.playHoverTick(); activeTab = 'intensitas'; }}
              class="py-2.5 px-4 border-b-2 transition-all cursor-pointer {activeTab === 'intensitas' ? 'border-black text-black' : 'border-transparent text-black/40 hover:text-black'}"
            >
              Intensitas
            </button>
            <button
              onclick={() => { sounds.playHoverTick(); activeTab = 'notas'; }}
              class="py-2.5 px-4 border-b-2 transition-all cursor-pointer {activeTab === 'notas' ? 'border-black text-black' : 'border-transparent text-black/40 hover:text-black'}"
            >
              Piramida Notes
            </button>
            <button
              onclick={() => { sounds.playHoverTick(); activeTab = 'ingredientes'; }}
              class="py-2.5 px-4 border-b-2 transition-all cursor-pointer {activeTab === 'ingredientes' ? 'border-black text-black' : 'border-transparent text-black/40 hover:text-black'}"
            >
              Bahan
            </button>
          </div>

          <!-- Tab Content Body -->
          <div class="py-5 text-xs text-black/80 font-sans leading-relaxed">
            {#if activeTab === 'deskripsi'}
              <p class="text-sm leading-relaxed">{product.description}</p>
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
                <div class="p-3 bg-neutral-100 rounded-[1px] border-l-2 border-amber-500">
                  <span class="text-[10px] text-black/50 block font-bold">TOP NOTES (0-30 Menit):</span>
                  <span class="font-semibold text-black">{product.pyramid.top.join(' • ')}</span>
                </div>
                <div class="p-3 bg-neutral-100 rounded-[1px] border-l-2 border-purple-500">
                  <span class="text-[10px] text-black/50 block font-bold">HEART NOTES (30 Menit - 4 Jam):</span>
                  <span class="font-semibold text-black">{product.pyramid.heart.join(' • ')}</span>
                </div>
                <div class="p-3 bg-neutral-100 rounded-[1px] border-l-2 border-emerald-500">
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
