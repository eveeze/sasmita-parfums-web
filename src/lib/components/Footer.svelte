<script lang="ts">
  import { nav } from '$lib/stores/nav.svelte';

  let email = $state('');
  let isDone = $state(false);

  function handleSubscribe() {
    if (!email || !email.includes('@')) {
      alert('Silakan masukkan email yang valid.');
      return;
    }
    isDone = true;
  }
</script>

<footer class="bg-black text-white pt-20 pb-14 px-6 sm:px-10 lg:px-14 border-t border-white/10 font-sans">
  <div class="max-w-7xl mx-auto">
    
    <!-- Top Row: Newsletter Subscription Box -->
    <div class="pb-16 border-b border-white/15 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
      <div class="max-w-md">
        <h3 class="text-2xl font-black uppercase tracking-tight text-white">
          KORAN SASMITA ATELIER
        </h3>
        <p class="text-xs text-white/60 font-light mt-1.5 leading-relaxed">
          Dapatkan akses eksklusif perilisan batch ekstraksi terbatas, potongan harga 15%, dan sampel vial aroma baru langsung ke email Anda.
        </p>
      </div>

      <!-- Newsletter Form -->
      <div class="w-full lg:w-auto max-w-md">
        {#if isDone}
          <div class="p-3 bg-white/10 border border-white/30 text-xs font-mono text-amber-300">
            ✓ Terima kasih! Anda telah terdaftar dalam lingkar Sasmita.
          </div>
        {:else}
          <div class="flex border border-white/30 bg-neutral-900">
            <input
              type="email"
              bind:value={email}
              placeholder="Masukkan alamat email Anda"
              class="w-full px-4 py-3 text-xs bg-transparent text-white placeholder-white/40 focus:outline-none font-mono"
            />
            <button
              onclick={handleSubscribe}
              class="px-6 py-3 text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-colors shrink-0"
            >
              DAFTAR
            </button>
          </div>
        {/if}
      </div>
    </div>

    <!-- 4 Navigation Columns -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 py-14 text-xs font-mono text-white/70">
      
      <div class="space-y-2.5">
        <div class="text-xs font-black uppercase text-white tracking-wider mb-4">
          PERFUMES
        </div>
        <div><button onclick={() => nav.goToCatalog('Pria')} class="hover:text-white">Parfum Pria</button></div>
        <div><button onclick={() => nav.goToCatalog('Wanita')} class="hover:text-white">Parfum Wanita</button></div>
        <div><button onclick={() => nav.goToCatalog('Unisex')} class="hover:text-white">Parfum Unisex</button></div>
        <div><button onclick={() => nav.goToCatalog('Semua')} class="hover:text-white">Koleksi Exclusive</button></div>
        <div><button onclick={() => nav.goToCatalog('Semua')} class="hover:text-white">Discovery Packs</button></div>
      </div>

      <div class="space-y-2.5">
        <div class="text-xs font-black uppercase text-white tracking-wider mb-4">
          KELUARGA AROMA
        </div>
        <div><button onclick={() => nav.goToCatalog('Semua', 'Cítrico')} class="hover:text-white">Cítrico &bull; Jeruk Purut</button></div>
        <div><button onclick={() => nav.goToCatalog('Semua', 'Amaderada')} class="hover:text-white">Amaderada &bull; Kayu Cendana</button></div>
        <div><button onclick={() => nav.goToCatalog('Semua', 'Floral')} class="hover:text-white">Floral &bull; Melati Keraton</button></div>
        <div><button onclick={() => nav.goToCatalog('Semua', 'Oriental')} class="hover:text-white">Oriental &bull; Rempah Maluku</button></div>
        <div><button onclick={() => nav.goToCatalog('Semua', 'Aromática')} class="hover:text-white">Aromática &bull; Teh &amp; Tembakau</button></div>
      </div>

      <div class="space-y-2.5">
        <div class="text-xs font-black uppercase text-white tracking-wider mb-4">
          BANTUAN &amp; LAYANAN
        </div>
        <div><a href="#faq" class="hover:text-white">Cara Pemesanan</a></div>
        <div><a href="#faq" class="hover:text-white">Kebijakan Sampel Gratis</a></div>
        <div><a href="#faq" class="hover:text-white">Pengiriman &amp; Ekspedisi</a></div>
        <div><a href="#faq" class="hover:text-white">Garansi &amp; Pengembalian</a></div>
        <div><a href="#faq" class="hover:text-white">Hubungi WhatsApp Konsultan</a></div>
      </div>

      <div class="space-y-2.5">
        <div class="text-xs font-black uppercase text-white tracking-wider mb-4">
          TENTANG SASMITA
        </div>
        <p class="text-[11px] text-white/50 font-sans leading-relaxed">
          Sasmita Atelier adalah studio haute parfumerie independen yang memadukan keanggunan struktur wewangian Grasse dengan kemewahan botani rempah tanah Jawa.
        </p>
        <div class="pt-2 text-[10px] text-amber-400 font-mono">
          ATELIER JAWA TENGAH &bull; NUSANTARA
        </div>
      </div>

    </div>

    <!-- Bottom Giant Wordmark -->
    <div class="pt-10 border-t border-white/10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
      <div>
        <a href="/" class="text-5xl sm:text-7xl font-black lowercase tracking-[-0.04em] text-white hover:opacity-85 transition-opacity">
          sasmita
        </a>
        <div class="text-[10px] font-mono text-white/40 tracking-[0.2em] uppercase mt-1">
          HAUTE PARFUMERIE JAWI MODERN &bull; EXTRACT CONCENTRATION 30%
        </div>
      </div>

      <div class="text-[11px] font-mono text-white/40">
        &copy; 2026 Sasmita Parfums Atelier. Hak Cipta Dilindungi.
      </div>
    </div>

  </div>
</footer>
