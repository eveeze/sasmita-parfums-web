<script lang="ts">
  import { nav } from '$lib/stores/nav.svelte';
  import { cart } from '$lib/stores/cart.svelte';
  import { ArrowLeft, Search, User, ShoppingBag, ChevronDown } from 'lucide-svelte';

  let isSearchOpen = $state(false);
  let searchQuery = $state('');

  function handleBack() {
    if (nav.currentPage === 'detail') {
      nav.currentPage = 'catalog';
    } else {
      nav.currentPage = 'home';
    }
  }
</script>

<nav class="sticky top-0 z-40 bg-white text-black border-b border-black/10 py-3 sm:py-4 px-4 sm:px-8">
  <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
    
    <!-- Left: Back Button & Wordmark: sasmita -->
    <div class="flex items-center gap-3 sm:gap-4 shrink-0">
      {#if nav.currentPage !== 'home'}
        <button
          onclick={handleBack}
          class="p-1 hover:opacity-60 transition-opacity cursor-pointer"
          aria-label="Kembali"
        >
          <ArrowLeft class="w-6 h-6 stroke-[2.5]" />
        </button>
      {/if}

      <button
        onclick={() => nav.goToHome()}
        class="text-2xl sm:text-3xl font-black tracking-[-0.03em] lowercase cursor-pointer hover:opacity-85 transition-opacity leading-none"
      >
        sasmita
      </button>
    </div>

    <!-- Center Navigation Links (Signature Esenzzia menu layout) -->
    <div class="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-bold uppercase tracking-wider text-black">
      <button
        onclick={() => nav.goToCatalog('Semua')}
        class="flex items-center gap-1 hover:opacity-60 transition-opacity cursor-pointer"
      >
        <span>PERFUMES</span>
        <ChevronDown class="w-3.5 h-3.5" />
      </button>

      <button
        onclick={() => nav.goToCatalog('Pria')}
        class="flex items-center gap-1 hover:opacity-60 transition-opacity cursor-pointer"
      >
        <span>PRIA</span>
      </button>

      <button
        onclick={() => nav.goToCatalog('Wanita')}
        class="flex items-center gap-1 hover:opacity-60 transition-opacity cursor-pointer"
      >
        <span>WANITA</span>
      </button>

      <button
        onclick={() => nav.goToCatalog('Unisex')}
        class="flex items-center gap-1 hover:opacity-60 transition-opacity cursor-pointer"
      >
        <span>UNISEX</span>
      </button>

      <button
        onclick={() => nav.goToCatalog('Semua')}
        class="flex items-center gap-1 text-red-600 hover:opacity-75 transition-opacity cursor-pointer font-black"
      >
        <span>EXCLUSIVE</span>
        <ChevronDown class="w-3.5 h-3.5" />
      </button>

      <button
        onclick={() => nav.goToCatalog('Semua')}
        class="flex items-center gap-1 hover:opacity-60 transition-opacity cursor-pointer"
      >
        <span>PACKS</span>
      </button>
    </div>

    <!-- Right Utilities: Search, Account, Cart -->
    <div class="flex items-center gap-4 sm:gap-6 shrink-0">
      
      <!-- Search Input / Icon -->
      <button
        onclick={() => nav.goToCatalog('Semua')}
        class="p-1 text-black hover:opacity-60 transition-opacity cursor-pointer"
        aria-label="Cari Produk"
      >
        <Search class="w-5 h-5 stroke-[2.2]" />
      </button>

      <!-- Account Icon -->
      <button
        onclick={() => alert('Member Portal Sasmita Atelier: Silakan masuk ke akun Anda.')}
        class="hidden sm:block p-1 text-black hover:opacity-60 transition-opacity cursor-pointer"
        aria-label="Akun Saya"
      >
        <User class="w-5 h-5 stroke-[2.2]" />
      </button>

      <!-- Cart Button with Count Badge (Esenzzia style: Cart (0)) -->
      <button
        onclick={() => cart.openCart()}
        class="flex items-center gap-1.5 p-1 text-black hover:opacity-60 transition-opacity cursor-pointer font-bold text-xs"
        aria-label="Buka Keranjang"
      >
        <ShoppingBag class="w-5 h-5 stroke-[2.2]" />
        <span>({cart.totalItems})</span>
      </button>

    </div>

  </div>
</nav>
