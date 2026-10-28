<script lang="ts">
  import { Sparkles, Truck, Gift } from 'lucide-svelte';
</script>

<div class="bg-black text-white text-[11px] font-mono border-b border-white/10 select-none py-1.5 px-4">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 text-center items-center">
    
    <!-- Promo 1 -->
    <div class="flex items-center justify-center gap-1.5 hover:text-amber-400 transition-colors cursor-pointer">
      <span class="font-bold text-white uppercase tracking-wider">-15% DISKON KHUSUS</span>
      <span class="text-white/50 text-[10px] hidden lg:inline">• KODE: SASMITA15</span>
    </div>

    <!-- Promo 2 -->
    <div class="hidden md:flex items-center justify-center gap-1.5 hover:text-amber-400 transition-colors cursor-pointer border-x border-white/10 px-2">
      <Truck class="w-3.5 h-3.5 text-amber-400" />
      <span>Gratis Ongkir Seluruh Indonesia &gt; Rp 300.000</span>
    </div>

    <!-- Promo 3 -->
    <div class="hidden md:flex items-center justify-center gap-1.5 hover:text-amber-400 transition-colors cursor-pointer">
      <Gift class="w-3.5 h-3.5 text-amber-400" />
      <span>1 Vial Sample 5ml Gratis Bebas Pilih</span>
    </div>

  </div>
</div>
