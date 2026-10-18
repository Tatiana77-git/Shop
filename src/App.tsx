import {Header} from './components/Header.tsx';
import { BestSellers } from './components/BestSellers.tsx';
import { Route, Routes } from 'react-router';
import './App.css'
import { Product } from './components/Product.tsx';

function App() {
  return (
   <div className='appContainer'>
   <Header/>
     
   <Routes>
       <Route path='/' element= { <BestSellers />} />
       <Route path='/product/:id' element= { <Product />} />
   </Routes>

   
  </div>
  )
}

export default App
