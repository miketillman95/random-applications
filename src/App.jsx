import { useState } from 'react'
import '../src/Css/App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import ProductList from './Components/ProductList'

function App() {

  return (
    <Router>
    <Routes>
        <Route index element={<HomePage />} />
        <Route path='productlist' element={<ProductList />} />
    </Routes>
  </Router>
  
  )
}

export default App
