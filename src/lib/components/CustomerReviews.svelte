<script lang="ts">
  import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-svelte';
  import { nav } from '$lib/stores/nav.svelte';
  import { PRODUCTS } from '$lib/data/products';

  const reviews = [
    {
      author: 'Irma J.',
      date: '26/10/2026',
      stars: 5,
      comment: 'Me encanta las notas de salida, tenía miedo al fondo... pero que rica es de todo. Daun pandan dan sitrusnya luar biasa segar.',
      product: PRODUCTS[0], // 379
      vialImage: '/assets/esenzzia/products/379-meteore.jpg'
    },
    {
      author: 'Maria K.',
      date: '17/10/2026',
      stars: 5,
      comment: 'La compré para probarla y me ha encantado. Cendana Mataram ini bikin berwibawa banget. Karakternya woody mewah seperti masuk keraton Jawa.',
      product: PRODUCTS[1], // 428
      vialImage: '/assets/esenzzia/products/428-reckless.jpg'
    },
    {
      author: 'Elisabet M.',
      date: '15/10/2026',
      stars: 5,
      comment: 'Se me pusieron los pelos de punta al olerlo. Era mi perfume de joven y fue como volver... Melati Keraton projection-nya luar biasa tahan cuci.',
      product: PRODUCTS[2], // 565
      vialImage: '/assets/esenzzia/products/565-palatine.jpg'
    },
    {
      author: 'Miguel A.',
      date: '12/10/2026',
      stars: 5,
      comment: 'Gran descubrimiento, lo pedí en un conjunto de muestras de vario... Rempah Sultan 601 aromanya hangat maskulin.',
      product: PRODUCTS[3], // 601
      vialImage: '/assets/esenzzia/products/017-santal.jpg'
    }
  ];
</script>

<section class="bg-black text-white py-20 px-4 sm:px-8 border-t border-white/10 select-none">
  <div class="max-w-7xl mx-auto">
    
    <!-- Top Overall Rating (Signature Esenzzia Header) -->
    <div class="text-center mb-12">
      <div class="text-4xl sm:text-6xl font-black tracking-tight text-white flex items-center justify-center gap-2">
        <span class="text-amber-400">★</span>
        <span>4.5</span>
        <span class="text-2xl sm:text-3xl font-normal text-white/50">/5</span>
      </div>
      <div class="text-xs font-mono uppercase tracking-widest text-white/60 mt-2">
        8.228 Opiniones
      </div>

      <!-- Arrow Controls -->
      <div class="flex items-center justify-center gap-4 mt-4 text-white/60">
        <button class="p-1 hover:text-white transition-colors cursor-pointer"><ChevronLeft class="w-5 h-5" /></button>
        <button class="p-1 hover:text-white transition-colors cursor-pointer"><ChevronRight class="w-5 h-5" /></button>
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
            <div class="w-12 h-12 bg-neutral-900 rounded-[1px] overflow-hidden shrink-0">
              <img src={r.vialImage} alt={r.product.name} class="w-full h-full object-cover" />
            </div>

            <div class="min-w-0">
              <div class="text-xs font-black font-mono leading-none group-hover:text-amber-700">
                {r.product.code}
              </div>
              <div class="text-[10px] text-black/60 truncate uppercase font-semibold mt-1">
                {r.product.inspiration}
              </div>
            </div>
          </div>

        </div>
      {/each}
    </div>

  </div>
</section>
