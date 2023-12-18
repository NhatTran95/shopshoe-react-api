import React, { useState } from 'react';
import './App.css';

import Content from './components/Content/Content';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ListProduct from './components/ListProduct';
import CreateProduct from './components/CreateProduct';

import LayoutDashboard from './components/LayoutDashboard';
import Carts from './components/Carts';


function App() {


  return (
    <>
      <div className='container'>
        <Router>
          <Routes>
            <Route path='' element={<Content/>} />
            <Route path='/dashboard' element={<LayoutDashboard/>}>
              <Route path='' element={<Dashboard />}/>
              <Route path='products' element={<ListProduct/>}/>
              <Route path='products/create' element={<CreateProduct/>}/>
            </Route>
            <Route path='/carts' element={<Carts/>}/>

          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App;
