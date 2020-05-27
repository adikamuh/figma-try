import React from 'react';
import './App.scss';
import './assets/fonts/NotoSansJP-Regular.otf'

import Navbar from './components/navbar'
import Header from './components/header'
import Description from './components/description'
import Features from './components/features'
import Testimonials from './components/testimonials'
import Footer from './components/footer'

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Description />
      <Features />
      <Testimonials />
      <hr></hr>
      <Footer />
    </div>
  );
}

export default App;
