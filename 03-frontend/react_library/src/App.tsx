import React from 'react';
import './App.css';
import { Navbar } from './layouts/HomePage/NavbarAndFooter/Navbar';
import { HomePage } from './layouts/HomePage/HomePage';
import { Footer } from './layouts/HomePage/NavbarAndFooter/Footer';

export const App = () => {
  return (
    <>
      <Navbar/>
      <HomePage/>
      <Footer/>
    </>
  );
}

