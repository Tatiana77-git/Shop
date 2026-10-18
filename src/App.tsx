
import { useEffect, useState } from 'react';
import { productType, CartItem } from './types/types';
import {Header} from './components/Header.tsx';
import { BestSellers } from './components/BestSellers.tsx';
import { Route, Routes } from 'react-router';
import './App.css'
import { Product } from './components/Product.tsx';

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

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

// временно, чтобы увидеть корзину; позже уберём
useEffect(() => {
  console.log(cart);
}, [cart]);
  return (
   <div className='appContainer'>
   <Header/>
     
   <Routes>
       <Route path='/' element= { <BestSellers />} />
      <Route path='/product/:id' element={ <Product onAddToCart={addToCart} />} />
   </Routes>

   
  </div>
  )
}

export default App
