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
import { auth, db } from './firebase';
import Login from './Login';

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
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

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user');
      setUser(null);
    })
  }


  useEffect(() => {
    getCartItems();
  }, [])

  console.log("User", user);

  return (
    <Router>
      
        {
          !user ? (
            <Routes>
            <Route exact path="/login" element={<Login setUser={setUser}/>}/>
            </Routes>
          ) : (
            <>
            <Header user={user} cartItems={cartItems} signOut={signOut} />
            {/* <Home/> */}
            <Routes>
              <Route exact path="/cart" element={<Cart cartItems={cartItems} />}/>
              {/* <Route exact path="/login" element={<Login setUser={setUser}/>}/> */}
              <Route exact path="/" element={<Home/>}/>
        
            </Routes>
            </>
          )
        }
       
          
   
    </Router>
  );
}

export default App;
