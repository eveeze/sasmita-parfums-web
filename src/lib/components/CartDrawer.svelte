<script lang="ts">
  import { cart } from '$lib/stores/cart.svelte';
  import { PRODUCTS } from '$lib/data/products';
  import { X, Trash2, ShoppingBag, Gift, Check, ArrowRight } from 'lucide-svelte';

  let checkoutDone = $state(false);

  function handleCheckout() {
    checkoutDone = true;
    setTimeout(() => {
      cart.clear();
      checkoutDone = false;
      cart.closeCart();
    }, 2200);
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && cart.isCartOpen) {
      cart.closeCart();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

{#if cart.isCartOpen}
  <!-- Backdrop -->
  <div
    role="presentation"
    onclick={() => cart.closeCart()}
    class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
  ></div>

  <!-- Slide-out Drawer Panel -->
  <div
    role="dialog"
    aria-modal="true"
    aria-label="Keranjang Belanja Sasmita"
    class="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white text-black shadow-2xl z-50 flex flex-col justify-between overflow-hidden animate-slideLeft border-l border-black/10"
  >
    <!-- Drawer Header -->
    <div class="p-6 border-b border-black/10 flex items-center justify-between bg-white">
      <div class="flex items-center gap-2">
        <ShoppingBag class="w-5 h-5 text-black" />
        <h3 class="text-lg font-black tracking-tight uppercase">
          KERANJANG SAYA ({cart.totalItems})
        </h3>
      </div>

      <button
        onclick={() => cart.closeCart()}
        class="p-1 hover:opacity-60 transition-opacity cursor-pointer"
        aria-label="Tutup Keranjang"
      >
        <X class="w-6 h-6" />
      </button>
    </div>

    <!-- Free Sample Reward Banner (Signature Esenzzia Feature) -->
    <div class="bg-amber-50 border-b border-amber-200 p-4 font-mono text-xs">
      <div class="flex items-center gap-2 font-bold text-amber-900 mb-1.5">
        <Gift class="w-4 h-4 text-amber-600" />
        <span>BONUS: 1 VIAL SAMPLE GRATIS (5 ML)</span>
      </div>
      <p class="text-[11px] text-amber-800/80 mb-2 font-sans">
        Pilih 1 sampel aroma ekstra untuk disertakan gratis dalam paket kiriman Anda:
      </p>

      <select
        bind:value={cart.selectedFreeSample}
        class="w-full bg-white border border-amber-300 px-3 py-1.5 text-xs font-mono font-bold focus:outline-none"
      >
        {#each PRODUCTS as p}
          <option value={p.code}>
            Vial {p.code} &mdash; {p.name} ({p.family})
          </option>
        {/each}
      </select>
    </div>

    <!-- Items List or Empty State -->
    <div class="flex-1 overflow-y-auto p-6 space-y-4">
      {#if cart.items.length === 0}
        <div class="h-full flex flex-col items-center justify-center text-center p-8 space-y-4 text-black">
          <div class="w-16 h-16 bg-neutral-100 flex items-center justify-center rounded-full text-black/40">
            <ShoppingBag class="w-8 h-8" />
          </div>
          <div>
            <h4 class="text-xl font-black uppercase">Keranjang Kosong</h4>
            <p class="text-xs text-black/60 mt-1 max-w-xs font-sans">
              Temukan aroma identitas Anda dari koleksi parfum rempah Jawi modern kami.
            </p>
          </div>
          <button
            onclick={() => cart.closeCart()}
            class="px-6 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
          >
            Mulai Belanja
          </button>
        </div>
      {:else}
        {#each cart.items as item, index}
          <div class="p-4 bg-neutral-50 border border-black/10 flex items-start gap-4">
            <!-- Thumbnail Bottle -->
            <div class="w-16 h-20 bg-neutral-200/60 p-1 flex items-center justify-center shrink-0">
              <img src={item.image} alt={item.name} class="w-full h-full object-contain mix-blend-multiply" />
            </div>

            <div class="flex-1 min-w-0">
              <div class="flex items-start justify-between gap-2">
                <div>
                  <span class="text-[10px] font-mono font-bold uppercase px-1.5 py-0.5 bg-black text-white">
                    {item.code}
                  </span>
                  <h4 class="text-xs font-bold uppercase mt-1 truncate">{item.name}</h4>
                  <div class="text-[11px] font-mono text-black/60">{item.size}</div>
                </div>

                <button
                  onclick={() => cart.removeItem(index)}
                  class="text-black/40 hover:text-red-600 transition-colors p-1"
                  title="Hapus"
                >
                  <Trash2 class="w-4 h-4" />
                </button>
              </div>

              <!-- Price & Quantity -->
              <div class="flex items-center justify-between pt-3 mt-2 border-t border-black/10">
                <span class="text-xs font-mono font-bold">
                  {cart.formatIdr(item.price * item.quantity)}
                </span>

                <div class="flex items-center border border-black/30 bg-white font-mono text-xs">
                  <button
                    onclick={() => cart.updateQuantity(index, -1)}
                    class="px-2 py-0.5 hover:bg-neutral-100"
                  >
                    -
                  </button>
                  <span class="w-6 text-center font-bold">{item.quantity}</span>
                  <button
                    onclick={() => cart.updateQuantity(index, 1)}
                    class="px-2 py-0.5 hover:bg-neutral-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        {/each}
      {/if}
    </div>

    <!-- Drawer Footer / Checkout -->
    {#if cart.items.length > 0}
      <div class="p-6 bg-neutral-100 border-t border-black/15 space-y-4 font-mono text-xs">
        
        <div class="space-y-1.5">
          <div class="flex justify-between text-black/70">
            <span>Subtotal ({cart.totalItems} item):</span>
            <span>{cart.formatIdr(cart.subtotal)}</span>
          </div>

          <div class="flex justify-between text-red-600 font-bold">
            <span>Diskon Peluncuran (-15%):</span>
            <span>-{cart.formatIdr(cart.discountAmount)}</span>
          </div>

          <div class="flex justify-between text-emerald-800 font-bold">
            <span>Pengiriman Cepat:</span>
            <span>GRATIS</span>
          </div>

          <div class="flex justify-between text-base font-black text-black pt-3 border-t border-black/15">
            <span>TOTAL PEMBAYARAN:</span>
            <span class="text-lg">{cart.formatIdr(cart.finalTotal)}</span>
          </div>
        </div>

        <!-- Checkout Action Button -->
        {#if checkoutDone}
          <div class="w-full py-4 bg-emerald-700 text-white font-black uppercase tracking-wider text-center flex items-center justify-center gap-2">
            <Check class="w-4 h-4" />
            <span>PESANAN PARFUM DITERIMA!</span>
          </div>
        {:else}
          <button
            onclick={handleCheckout}
            class="w-full py-4 bg-black hover:bg-neutral-800 text-white font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl"
          >
            <span>LANJUT KE PEMBAYARAN</span>
            <ArrowRight class="w-4 h-4" />
          </button>
        {/if}

        <p class="text-[10px] text-center text-black/50">
          Ekstrak Konsentrat Asli 30% Pure Oil &bull; Garansi 100% Puas
        </p>

      </div>
    {/if}

  </div>
{/if}

<style>
  @keyframes slideLeft {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  }
  .animate-slideLeft {
    animation: slideLeft 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
</style>
