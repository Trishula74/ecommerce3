import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import './styles/App.css';


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [checkout, setCheckout] = useState(false);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find(item => item.id === product.id);
      if (itemExists) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const proceedToCheckout = () => setCheckout(true);

  return (
    <div className="App">
      <h1>E-Commerce Application</h1>
      {!checkout ? (
        <>
          <ProductList addToCart={addToCart} />
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          {cartItems.length > 0 && <button onClick={proceedToCheckout}>Checkout</button>}
        </>
      ) : (
        <Checkout />
      )}
    </div>
  );
}

export default App;
