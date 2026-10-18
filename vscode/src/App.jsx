
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './sections/header.jsx';
import Home from './spa/home.jsx';
import HeroSection from './sections/hero.jsx';
import Features from './sections/features.jsx';
import DashboardPreview from './sections/dashboardpreview.jsx';
import HowItWorks from './sections/howitworks.jsx';
import Testimonials from './sections/testimonials.jsx';
import CTA from './sections/cta.jsx';
import Footer from './sections/footer.jsx';

import Background from './effects/background.jsx';

import Pricing from './spa/pricing.jsx';
import Docs from './spa/docs.jsx';
import Blog from './spa/blog.jsx';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <DashboardPreview />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </>
  );
};

const App = () => {
  return (
    <main className="min-h-screen w-full bg-slate-950 text-white">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage />
          }
        />

        <Route
          path="/home"
          element={<Home />}
        />

        <Route
          path="/pricing"
          element={<Pricing />}
        />

        <Route
          path="/docs"
          element={<Docs />}
        />

        <Route
          path="/blog"
          element={<Blog />}
        />
      </Routes>

      <Footer />
      <Background />
    </main>
  );
};

export default App;
