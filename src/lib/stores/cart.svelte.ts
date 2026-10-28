import type { CartItem, PerfumeProduct } from '$lib/types';

class CartStore {
  items = $state<CartItem[]>([]);
  isCartOpen = $state<boolean>(false);
  selectedFreeSample = $state<string | null>('379');

  totalItems = $derived(
    this.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  subtotal = $derived(
    this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  );

  discountAmount = $derived(
    Math.round(this.subtotal * 0.15)
  );

  finalTotal = $derived(
    Math.max(0, this.subtotal - this.discountAmount)
  );

  formatIdr(amount: number): string {
    return `Rp ${new Intl.NumberFormat('id-ID').format(Math.round(amount))}`;
  }

  addItem(product: PerfumeProduct, size: '30ml' | '100ml' | '5ml' = '100ml', qty: number = 1) {
    const price = product.prices[size];
    const existingIndex = this.items.findIndex(
      item => item.productId === product.id && item.size === size
    );

    if (existingIndex > -1) {
      this.items[existingIndex].quantity += qty;
    } else {
      this.items.push({
        id: `${product.id}-${size}-${Date.now()}`,
        productId: product.id,
        code: product.code,
        name: product.name,
        size,
        price,
        quantity: qty,
        image: product.image,
        familyColor: product.familyColor
      });
    }

    this.isCartOpen = true;
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  updateQuantity(index: number, delta: number) {
    if (index >= 0 && index < this.items.length) {
      const newQty = this.items[index].quantity + delta;
      if (newQty <= 0) {
        this.removeItem(index);
      } else {
        this.items[index].quantity = newQty;
      }
    }
  }

  setFreeSample(code: string) {
    this.selectedFreeSample = code;
  }

  openCart() {
    this.isCartOpen = true;
  }

  closeCart() {
    this.isCartOpen = false;
  }

  clear() {
    this.items = [];
  }
}

export const cart = new CartStore();
