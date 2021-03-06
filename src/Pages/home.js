import React from 'react';

import AboutSection from '../Components/AboutSection';
import ContactBanner from '../Components/ContactBanner';
import HeroSection from '../Components/HeroSection';
import ProjectSection from '../Components/ProjectsSection';
import ServiceSection from '../Components/ServiceSection';
import TestimonialSection from '../Components/TestimonialSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <TestimonialSection />
      <ContactBanner />
    </div>
  );
}
