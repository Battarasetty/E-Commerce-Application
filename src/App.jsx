import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import ProductList from './Pages/ProductList'
import Product from './Pages/Product'
import Register from './Pages/Register'
import Login from './Pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Home /> */}
        {/* <ProductList /> */}
        {/* <Product /> */}
        {/* <Register /> */}
        <Login />
      </div>
    </>
  )
}

export default App
