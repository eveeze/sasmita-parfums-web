<script lang="ts">
  import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-svelte';
  import { nav } from '$lib/stores/nav.svelte';
  import { PRODUCTS } from '$lib/data/products';

  const reviews = [
    {
      author: 'Irma J.',
      date: '26/10/2026',
      stars: 5,
      comment: 'Aroma jeruk purut dan daun pandannya benar-benar segar dan autentik! Tidak bikin enek sama sekali, sangat tahan lama di cuaca panas seharian.',
      product: PRODUCTS[0], // 379
      vialImage: '/assets/bottles/bottle-379.png'
    },
    {
      author: 'Maria K.',
      date: '17/10/2026',
      stars: 5,
      comment: 'Cendana Mataram ini bikin berwibawa banget. Karakternya woody mewah seperti masuk keraton Jawa tapi kemasannya sangat modern clean.',
      product: PRODUCTS[1], // 017
      vialImage: '/assets/bottles/bottle-017.png'
    },
    {
      author: 'Elisabet M.',
      date: '15/10/2026',
      stars: 5,
      comment: 'Melati Keraton 108 langsung jadi signature scent saya. Bunga sedap malamnya mistis elegan dan projection-nya luar biasa tahan cuci.',
      product: PRODUCTS[2], // 108
      vialImage: '/assets/bottles/bottle-108.png'
    },
    {
      author: 'Bagus A.',
      date: '12/10/2026',
      stars: 5,
      comment: 'Rempah Sultan 245 aroma cengkeh & vanilinya hangat maskulin. Dapet bonus 1 sample vial gratis juga di dalam paketnya.',
      product: PRODUCTS[3], // 245
      vialImage: '/assets/bottles/bottle-245.png'
    }
  ];
</script>

<section class="bg-black text-white py-20 px-4 sm:px-8 border-t border-white/10 select-none">
  <div class="max-w-7xl mx-auto">
    
    <!-- Top Overall Rating (Signature Esenzzia Header) -->
    <div class="text-center mb-12">
      <div class="text-4xl sm:text-6xl font-black tracking-tight text-white flex items-center justify-center gap-2">
        <span class="text-amber-400">★</span>
        <span>4.8</span>
        <span class="text-2xl sm:text-3xl font-normal text-white/50">/5</span>
      </div>
      <div class="text-xs font-mono uppercase tracking-widest text-white/60 mt-2">
        8.228 Ulasan Pelanggan Terverifikasi
      </div>

      <!-- Arrow Controls -->
      <div class="flex items-center justify-center gap-4 mt-4 text-white/60">
        <button class="p-1 hover:text-white transition-colors"><ChevronLeft class="w-5 h-5" /></button>
        <button class="p-1 hover:text-white transition-colors"><ChevronRight class="w-5 h-5" /></button>
      </div>
    </div>

    <!-- Review Cards Grid (4 Columns) -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each reviews as r}
        <div class="bg-white text-black p-5 flex flex-col justify-between border border-black/10 rounded-[1px] shadow-lg">
          
          <div>
            <!-- Author & Date -->
            <div class="flex items-center justify-between text-xs font-bold">
              <div class="flex items-center gap-1.5">
                <span>{r.author}</span>
                <CheckCircle2 class="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />
              </div>
              <span class="text-[10px] font-mono text-black/40 font-normal">{r.date}</span>
            </div>

            <!-- Stars -->
            <div class="flex text-amber-500 my-2">
              {#each Array(r.stars) as _}
                <Star class="w-3 h-3 fill-amber-500 stroke-none" />
              {/each}
            </div>

            <!-- Comment -->
            <p class="text-xs text-black/80 font-sans leading-relaxed line-clamp-4">
              "{r.comment}"
            </p>
          </div>

          <!-- Referenced Product Footer Box -->
          <div
            onclick={() => nav.goToDetail(r.product)}
            class="mt-6 pt-3 border-t border-black/10 flex items-center gap-3 cursor-pointer group hover:bg-neutral-50 p-1 -m-1 transition-colors"
          >
            <div class="w-10 h-10 bg-neutral-100 p-1 rounded-[1px] shrink-0">
              <img src={r.vialImage} alt={r.product.name} class="w-full h-full object-contain mix-blend-multiply" />
            </div>

            <div class="min-w-0">
              <div class="text-xs font-black font-mono leading-none group-hover:text-amber-700">
                {r.product.code}
              </div>
              <div class="text-[10px] text-black/60 truncate uppercase font-semibold">
                {r.product.inspiration}
              </div>
            </div>
          </div>

        </div>
      {/each}
    </div>

  </div>
</section>
