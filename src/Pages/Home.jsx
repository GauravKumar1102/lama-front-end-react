import React from 'react'
import Navbar from '../Components/Navbar'
import Advertisement from '../Components/Advertisement'
import Categories from '../Components/Categories'
import Product from '../Components/Product'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import Slidy from '../Components/Slidy'

const Home = () => {
  return (
   <div>
    <Advertisement/>
    <Navbar/>
    <Slidy/>
    <Categories/>
    <Product/>
    <Newsletter/>
    <Footer/>
   </div>
  )
}

export default Home