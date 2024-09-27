import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import Services from './components/frontend/Services';
import Projects from './components/frontend/Projects';
import Blogs from './components/frontend/Blogs';
import ContactUs from './components/frontend/ContactUs';
import './assets/css/style.scss';


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/about' element={<About />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
