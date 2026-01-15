import React from 'react';
import styles from '../../css/Services.module.css';
import HeroSection from './components/HeroSection';
import LandingPage from './components/LandingPage';
import WebSite from './components/WebSite';
import Redesign from './components/Redesign';

const Services = () => {
  return (
    <div className={styles.mainContainer}>
      <HeroSection />
      <LandingPage />
      <WebSite />
      <Redesign />
      
      
    </div>
  );
};

export default Services;