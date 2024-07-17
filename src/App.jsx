import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header'
import Home from './pages/home'
import About from './pages/aboutus'
import Services from './pages/service'
import Contact from './pages/contactus'
import ResumeReview from './pages/resumereview';
import Footer from './components/footer';
import EntryLevel from './pages/entry-level';
import MidLevel from './pages/mid-service';
import SeniorLevel from './pages/senior-level';
import ProfessionalLevel from './pages/professional-level';
import ExecutiveLevel from './pages/executive-level';

function App() {

  return (
  <div>
    {/* <TopHeader/> */}
    <Router>
      <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
      <Routes>
        <Route path="/" element={<EntryLevel />} />
        <Route path="/entry-level" element={<EntryLevel />} />
        <Route path="/mid-level" element={<MidLevel/>} />
        <Route path="/senior-level" element={<SeniorLevel/>} />
        <Route path="/professional-level" element={<ProfessionalLevel/>} />
        <Route path="/executive-level" element={<ExecutiveLevel/>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/free-resume-review" element={<ResumeReview />} />
      </Routes>
      </main>

      <Footer/> 
      </div>

    </Router>
  </div>
  )
}

export default App
