import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import Services from './components/frontend/Services';
import Projects from './components/frontend/Projects';
import Blogs from './components/frontend/Blogs';
import ContactUs from './components/frontend/ContactUs';
import Login from './components/backend/Login';
import Dashboard from './components/backend/Dashboard';
import { ToastContainer, toast } from 'react-toastify';
import './assets/css/style.scss';
import 'react-toastify/dist/ReactToastify.css';

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
        <Route path='/admin/login' element={<Login />}></Route>
        <Route path='/admin/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer />
    </>
  )
}

export default App;
