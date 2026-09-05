import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('ikla_luxury_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [giftPackaging, setGiftPackaging] = useState(true);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('ikla_luxury_cart', JSON.stringify(items));
    } catch (e) {
      console.error('Failed to persist cart:', e);
    }
  }, [items]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 3500);
  };

  const addToCart = (product, size, color, quantity = 1) => {
    const selectedSize = size || (product.sizes ? product.sizes[0] : 'Standard');
    const selectedColor = color || (product.colors ? product.colors[0].name : 'Default');
    const cartItemId = `${product.id}-${selectedSize}-${selectedColor}`;

    setItems((prevItems) => {
      const existing = prevItems.find((item) => item.cartItemId === cartItemId);
      if (existing) {
        return prevItems.map((item) =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prevItems,
        {
          cartItemId,
          productId: product.id,
          brandId: product.brandId,
          brandName: product.brandName,
          name: product.name,
          price: product.price,
          image: product.image,
          selectedSize,
          selectedColor,
          quantity,
        },
      ];
    });

    showToast(`Added to your shopping bag: ${product.name}`);
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId) => {
    setItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId, delta) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.cartItemId === cartItemId) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const freeShippingThreshold = 350;
  const isEligibleForFreeShipping = subtotal >= freeShippingThreshold;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        toggleCart: () => setIsCartOpen((prev) => !prev),
        totalItems,
        subtotal,
        giftPackaging,
        setGiftPackaging,
        freeShippingThreshold,
        isEligibleForFreeShipping,
        amountToFreeShipping,
        toastMessage,
        setToastMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
