
import { useState } from 'react';

import Header from './components/Layout/Header';
import Dishes from './components/Dishes/dishes';
import Cart from './components/Cart/Cart';
import CartProvider from './components/Store/cartProvider';



function App() {
  const [cartIsShown , setCartIsShown] =useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () =>{
    setCartIsShown(false);
  }
  return (
    <CartProvider>
    { cartIsShown &&  <Cart onClose ={hideCartHandler}/>}
    <Header  onShowCart = {showCartHandler}/>
    <main>
    <Dishes/>
    </main>
    </CartProvider>
  );
}

export default App;
