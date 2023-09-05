import React from 'react'
import Banner from '../Components/Banner'
import Product from '../Components/Product'
import FeatureProduct from './../Components/FeatureProduct';
import Footer from './../Components/Footer';

const Home = () => {

  return (
    <>
      <Banner />
      <Product />
      <h5 className='text-center mt-5 mb-5'>
        FEATURED PRODUCTS
      </h5>
      <FeatureProduct />
      <Footer />
    </>
  )
}

export default Home