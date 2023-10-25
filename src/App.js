import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Watchlist from './pages/Watchlist';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
       <Header/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/wishlist' element={<Watchlist/>}/>
       </Routes>
       <Footer/>
    </>
  );
}

export default App;
