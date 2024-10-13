// src/App.js

import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header';
import Home from './pages/home';
import Contact from './pages/contactus';
import ResumeReview from './pages/resumereview';
import Footer from './components/footer';
import EntryLevel from './pages/entry-level';
import MidLevel from './pages/mid-service';
import SeniorLevel from './pages/senior-level';
import ProfessionalLevel from './pages/professional-level';
import ExecutiveLevel from './pages/executive-level';
import WhyChooseUs from './pages/why-choose-us';
import PricingPage from './pages/pricing';
import NotFound from './pages/404'; // Import the NotFound component
import Redesign from './pages/Redesign';
function App() {
  return (
    <div>
      <Router>
        {/* <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/entry-level" element={<EntryLevel />} />
              <Route path="/mid-level" element={<MidLevel />} />
              <Route path="/senior-level" element={<SeniorLevel />} />
              <Route path="/professional-level" element={<ProfessionalLevel />} />
              <Route path="/executive-level" element={<ExecutiveLevel />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/free-resume-review" element={<ResumeReview />} />
              <Route path="/about-us" element={<WhyChooseUs />} />
              <Route path="/our-pricing" element={<PricingPage />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div> */}
        <Routes>
        <Route path="/" element={<Redesign />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
