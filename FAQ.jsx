import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import CtaBanner from './components/CtaBanner';
import WhyUs from './components/WhyUs';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import MapSection from './components/MapSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Services />
      <CtaBanner />
      <WhyUs />
      <Reviews />
      <FAQ />
      <MapSection />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
