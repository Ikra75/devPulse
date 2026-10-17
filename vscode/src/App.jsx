import React from 'react';
import { Routes, Route } from "react-router-dom";



import Header from './sections/headerr.jsx';
import Home from './spa/home.jsx';
import HeroSection from './sections/hero.jsx';
import Features from './sections/features.jsx';
import DashboardPreview from './sections/dashboardpreview.jsx';
import HowItWorks from './sections/howitworks.jsx';
import Testimonials from './sections/testimonials.jsx';
import CTA from './sections/cta.jsx';
import Footer from './sections/footer.jsx';


import Background from './effects/background.jsx';


import Pricing from "./spa/Pricing";
import Docs from "./spa/Docs";
import Blog from "./spa/Blog";
 import HowItWork from "./spa/HowItWork";

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/how-it-works" element={<HowItWorks />} />
  <Route path="/pricing" element={<Pricing />} />
  <Route path="/docs" element={<Docs />} />
  <Route path="/blog" element={<Blog />} />
</Routes>


const App = () => {
  return (
    <main className=' min-h-screen w-full bg-slate-950 text-white'>
      <Header/>
      <HeroSection />
      <Features />
      <DashboardPreview />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />



      <Background />



    </main>
  );
}

export default App ;
/*import { Routes, Route } from "react-router-dom";

import Home from "./spa/home";
import Pricing from "./spa/pricing";
import Docs from "./spa/docs";
import Blog from "./spa/blog";
import HowItWork from "./spa/howitwork";
import Login from "./spa/login";
import GetStarted from "./spa/getstarted";

import DashbordLayout from "./menu/dashbordlayout";
import Dashbord from "./menu/dashbord";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/how-it-works" element={<HowItWork />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/get-started" element={<GetStarted />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
  <Route index element={<Dashboard />} />
</Route>


    </Routes>
  );
}

export default App;*/