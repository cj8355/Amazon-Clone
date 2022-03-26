import './App.css';
import Cart from './Cart';
import Header from './Header';
import Home from './Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from './firebase';

function App() {
  const [cartItems,setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      let tempItems = [];
      tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }))
      setCartItems(tempItems);
    })
  }


  useEffect(() => {
    getCartItems();
  }, [])

  console.log(cartItems);

  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
       
          <Route exact path="/cart" element={<Cart cartItems={cartItems} />}/>
          <Route exact path="/" element={<Home/>}/>
        
    </Routes>
    </div>
    </Router>
  );
}

export default App;
