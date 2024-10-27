import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css'
import HomePage from './Landing_page/Home/HomePage'
import Signup from './Landing_page/Signup/Signup'
import About from './Landing_page/About/AboutPage'
import Products from './Landing_page/Products/ProductPage'
import Pricing from './Landing_page/Pricing/PricingPage'
import Support from './Landing_page/Support/SupportPage'
import Nabar from './Landing_page/Nabar';
import Footer from './Landing_page/Footer';
import NotFound from './Landing_page/NotFound';
import Login from './Landing_page/Signup/Login';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Nabar/>
  <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/products' element={<Products/>}></Route>
    <Route path='/pricing' element={<Pricing/>}></Route>  
    <Route path='/support' element={<Support/>}></Route> 
    <Route path='/login' element={<Login/>}></Route> 
    <Route path='*' element={<NotFound/>}></Route> 
  </Routes>
    <Footer/>
  </BrowserRouter>
)
