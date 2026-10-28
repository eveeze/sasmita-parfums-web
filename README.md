# SASMITA ATELIER // Parfums Jawi Modern

A high-contrast Scandinavian & Continental luxury e-commerce experience for artisanal Javanese botanical fragrances. Adapted from **Esenzzia Madrid** via ATM (*Amati, Tiru, Modifikasi*).

Local server running at: **`http://localhost:5176`**

---

## Brand Architecture: "Sasmita" (Isyarat Halus)

> *"Sasmita ora tau mbengok, nanging semerbak ing sajroning jiwa."*  
> (Sasmita never shouts, but resonates deep within the soul).

In Javanese philosophy, **Sasmita** represents subtle spiritual cues, unspoken elegance, and deep unspoken meaning. The fragrance collection takes legendary olfactory profiles and infuses them with sacred Indonesian botanical terroir (Cendana Jawa, Melati Gambir Keraton, Cengkeh Maluku, Jeruk Purut, Kemenyan, dan Tembakau Boyolali).

---

## Key Formulations & Number Codes

| Code | Formulation | Olfactive Family | Terroir Notes & Inspiration |
| :--- | :--- | :--- | :--- |
| **`379`** | **SEGAR RAWA PENING** | 🟨 Cítrico | Jeruk Purut, Daun Pandan Liar, Vetiver Basah *(Inspirado en LV Météore)* |
| **`017`** | **CENDANA MATARAM** | 🟩 Amaderada | Kayu Cendana Keraton, Kulit Samak, Iris Beludru *(Inspirado en Santal 33)* |
| **`108`** | **MELATI KERATON** | 🟪 Floral | Melati Gambir Malam, Sedap Malam, Gula Karamel *(Inspirado en Baccarat Rouge 540)* |
| **`245`** | **REMPAH SULTAN** | 🟥 Oriental | Cengkeh Maluku, Tembakau Madu, Vanili Bourbon *(Inspirado en Tobacco Vanille)* |
| **`502`** | **TEMARAM KABUT** | 🟧 Aromática | Teh Hitam Merbabu, Buah Tin, Asap Dupa Kemenyan *(Inspirado en Thé Noir 29)* |
| **`764`** | **PUTERI SOLO** | 🟦 Almizcle | Bedak Beras Mawar, Gula Aren Praline, White Musk *(Inspirado en Angels' Share)* |

---

## 1:1 Architecture Imitated from Esenzzia.com

1. **Top 3-Pill Promo Header**: `-15% Diskon Khusus`, `Gratis Ongkir > Rp 300.000`, `1 Vial Sample Gratis Pilihanmu`.
2. **Sticky Minimalist Nav**: Back navigation button, bold lowercase grotesque wordmark `sasmita`, category dropdowns, search, account, and dynamic cart counter `(n)`.
3. **Hero 3D Studio Banner**: Alchemical studio backdrop with floating **`379`** glass bottle + black cylinder tube box, and side slide navigation indicators.
4. **Signature Split Banners**:
   - *Parfum Rempah Jawi Modern*: Flatlay of colored cylinder tube boxes with instant quick-filters (Top Penjualan, Pria, Wanita, Unisex).
   - *Rilisan Terbaru*: Bottle lineup standing on an illuminated blue glass shelf in purple studio lighting.
   - *Top Seller*: Studio horizon spotlight background.
5. **Interactive Catalog Page**:
   - Left Sidebar Filters: Kategori (Pria/Wanita/Unisex), Kekuatan Aroma (Intenso, Intermedio, Suave), Keluarga Aroma (6 Olfactive families), Suasana Cuaca, Karakter Usia.
   - Right Product Grid: Olfactive family square tag, giant number codes (**`379`**, **`017`**, **`108`**), `-15%` badge, 4:3 studio bottle visual with `EXCLUSIVE` tag, size dropdown, and `+ Keranjang` button.
6. **50/50 Full Product Detail Page**:
   - Left: Full-bleed dark studio render of cylinder glass bottle + matching round packaging box.
   - Right: Number code, wishlist heart, inspiration box, size selector (30ml, 100ml, 5ml), quantity stepper, `AÑADIR AL CARRITO` button, free shipping badge, and tabbed specifications (Deskripsi, Intensitas & Daya Tahan, Piramida Notes, Bahan).
7. **Slide-Out Cart Drawer**:
   - Signature Esenzzia **Free Sample Vial Picker** ("Pilih 1 sampel gratis!").
   - Interactive quantity stepper, removal, real-time 15% discount calculation, and checkout simulator.
8. **Dark Luxury Haute Footer**:
   - Koran Sasmita newsletter, 4 categorised sitemap columns, giant `sasmita` wordmark, and legal copyright.

---

## Tech Stack

- **Svelte 5** (Runes `$state`, `$derived`, `$props`)
- **Vite 6**
- **Tailwind CSS 3**
- **Lenis Smooth Scroll**
- **Lucide Icons**

---

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview build
pnpm preview
```

---

## License

MIT &bull; Crafted by [Tito Zaki Saputro (@eveeze)](https://github.com/eveeze)
