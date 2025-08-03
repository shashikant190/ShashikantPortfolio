import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProfessionalSummary from './components/ProfessionalSummary';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CommunityInvolvement from './components/CommunityInvolvement';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Footer from './components/Footer';
import FloatingShapes from './components/FloatingShapes';

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <FloatingShapes />
      <Header />
      <Hero />
      <ProfessionalSummary />
      <WorkExperience />
      <Projects />
      <Skills />
      <CommunityInvolvement />
      <Education />
      <Certificates />
      <Footer />
    </div>
  );
}

export default App;