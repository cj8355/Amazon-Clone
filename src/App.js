
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

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
       
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/" element={<Home/>}/>
        
    </Routes>
    </div>
    </Router>
  );
}

export default App;
