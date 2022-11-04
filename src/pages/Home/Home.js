import React from 'react';

import Contact from '../../components/Contact/Contact';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Hotels from '../../components/Hotels/Hotels';


const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Hotels />
      <Contact />
      <Footer />
    </>
  )
}

export default Home;