import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './About'
import Blog from './Blog'
import Footer from './Footer'
import Header from './Header'
import HeaderTwo from './HeaderTwo'
import Home from './Home'
import ShopSingle from './ShopSingle'
import Registration from '../components/registration'

export default function RouterPage() {
  return (
    <div>
       
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/registration' element={<HeaderTwo><Registration /></HeaderTwo>} />
                <Route path='/blog' element={<HeaderTwo><Blog /></HeaderTwo>} />
                <Route path='/shop-single' element={<HeaderTwo><ShopSingle /></HeaderTwo>} />
            </Routes>
        </BrowserRouter>
        <Footer />
    </div>
  )
}
