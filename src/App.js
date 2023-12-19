import React, { useState } from 'react';
import './App.css';

import Content from './components/Content/Content';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ListProduct from './components/ListProduct';
import CreateProduct from './components/CreateProduct';

import LayoutDashboard from './components/LayoutDashboard';
import Carts from './components/Carts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function App() {

  const [cart, setCart] = useState([]);
  const [statusCart, setStatusCart] = useState(false);

  return (
    <>
      <div className='container'>
        <Router>
          <Routes>
            <Route path='' element={<Content cart={cart} setCart={setCart} statusCart={statusCart} setStatusCart={setStatusCart}/>} />
            <Route path='/dashboard' element={<LayoutDashboard/>}>
              <Route path='' element={<Dashboard />}/>
              <Route path='products' element={<ListProduct/>}/>
              <Route path='products/create' element={<CreateProduct/>}/>
            </Route>
            <Route path='/carts' element={<Carts cart={cart} setCart={setCart} statusCart={statusCart} setStatusCart={setStatusCart}/>}/>

          </Routes>
        </Router>
      </div>
      <ToastContainer/>
    </>
  )
}

export default App;
