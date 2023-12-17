import React, { useState } from 'react';
import './App.css';

import Content from './components/Content/Content';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ListProduct from './components/ListProduct';
import CreateProduct from './components/CreateProduct';

import dataSoure from "./data/data.json"
import LayoutDashboard from './components/LayoutDashboard';


function App() {
  const [data, setData] = useState(dataSoure)

  return (
    <>
      <div className='container'>
        <Router>
          <Routes>
            <Route path='' element={<Content data={data} setData={setData}/>} />
            <Route path='/dashboard' element={<LayoutDashboard/>}>
              <Route path='' element={<Dashboard />}/>
              <Route path='products' element={<ListProduct data={data} setData={setData}/>}/>
              <Route path='products/create' element={<CreateProduct data={data} setData={setData}/>}/>
            </Route>

          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App;
