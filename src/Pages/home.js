import React from 'react';

import AboutSection from '../Components/AboutSection';
import HeroSection from '../Components/HeroSection';
import ProjectSection from '../Components/ProjectsSection';
import ServiceSection from '../Components/ServiceSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
    </div>
  );
}
