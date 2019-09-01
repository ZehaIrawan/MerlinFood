import React from 'react';
import './App.css';
import Coupon from './components/Coupon';
import DailyDish from './components/DailyDish';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import How from './components/How';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <DailyDish></DailyDish>
      <How></How>
      <Experience></Experience>
      <Coupon></Coupon>
      <Footer></Footer>
    </div>
  );
}

export default App;
