import React, { createContext, useState, useContext } from 'react';

// Criação do contexto
const CartContext = createContext();

// Hook para consumir o contexto
export const useCart = () => useContext(CartContext);

// Provedor do contexto
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Adicionar um produto ao carrinho
  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);

    if (existingProduct) {
      // Se o produto já estiver no carrinho, aumentar a quantidade
      const updatedCart = cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCart);
    } else {
      // Caso o produto não esteja no carrinho, adicioná-lo
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Remover um produto do carrinho
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  // Aumentar a quantidade de um produto
  const increaseQuantity = (productId) => {
    const updatedCart = cartItems.map(item =>
      item.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartItems(updatedCart);
  };

  // Diminuir a quantidade de um produto
  const decreaseQuantity = (productId) => {
    const updatedCart = cartItems.map(item =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
