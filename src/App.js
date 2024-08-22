import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Catalogo from './pages/catalogo'

function App() {

  const [cart, setCart] = useState([])

  function addToCart(item) {
    setCart([...cart, item])
    console.log(cart)
  }

  return (
    <Router>
      <ul>
        <li><a href='/'>Catalogo</a></li>
        <li><a href='/cart'>Carrinho</a></li>
      </ul>
      <Routes>
        <Route path='/' element= { <Catalogo addToCart={addToCart} /> } />
      </Routes>
    </Router>
  );
}

export default App;