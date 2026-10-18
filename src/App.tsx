import { useEffect, useState } from 'react';
import { productType, CartItem } from './types/types';
import {Header} from './components/Header.tsx';
import { BestSellers } from './components/BestSellers.tsx';
import { Route, Routes } from 'react-router';
import './App.css'
import { Product } from './components/Product.tsx';
import { Cart } from './components/Cart.tsx';
import { OrderConfirmed } from './components/OrderConfirmed.tsx';

// достаём сохранённую корзину из localStorage (если её там нет, начинаем с пустой)
const getSavedCart = (): CartItem[] => {
  const saved = localStorage.getItem("cart");
  if (saved) {
    return JSON.parse(saved);
  }
  return [];
};

function App() {
  const [cart, setCart] = useState<CartItem[]>(getSavedCart);

  const addToCart = (product: productType) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        // такой товар уже есть: увеличиваем количество
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // новый товар: добавляем с количеством 1
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // убрать товар из корзины целиком: оставляем все, кроме товара с этим id
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // очистить корзину целиком (после «оплаты»)
  const clearCart = () => {
    setCart([]);
  };

  // общее число штук в корзине
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // каждый раз, когда корзина изменилась, сохраняем её в localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  return (
    <div className='appContainer'>
      <Header cartCount={cartCount} />

      <Routes>
        <Route path='/' element={ <BestSellers />} />
        <Route path='/product/:id' element={ <Product onAddToCart={addToCart} />} />
        <Route path='/cart' element={ <Cart cart={cart} onRemove={removeFromCart} onPay={clearCart} />} />
        <Route path='/order-confirmed' element={ <OrderConfirmed />} />
      </Routes>
    </div>
  )
}

export default App