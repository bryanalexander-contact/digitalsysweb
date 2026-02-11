import React from 'react';
import Seo from '../../components/Seo';
import styles from '../../css/Services.module.css';
import HeroSection from './components/HeroSection';
import LandingPage from './components/LandingPage';
import WebSite from './components/WebSite';
import Redesign from './components/Redesign';

const Services = () => {
  return (
    <div className={styles.mainContainer}>
      <Seo
        title="Servicios"
        description="Explora nuestros servicios de diseño web, landing pages y rediseño profesional para elevar tu marca digital."
        url="https://digitalsysweb.com/services"
        image="https://digitalsysweb.com/logo2.svg"
      />
      <HeroSection />
      <LandingPage />
      <WebSite />
      <Redesign />


    </div>
  );
};

export default Services;