import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import ITBusinessConsultingPage from "../pages/ITConsulting";
import AgileCoachingPage from "../pages/Agile";
import ProjectManagementPage from "../pages/ProjectMan";
import WebAppDevelopmentPage from "../pages/WebApp";
import HRSolutionsPage from "../pages/HrSolution";
import CareerCoachingPage from "../pages/CareerCoaching";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import MeetTheTeam from "../pages/Founders";
import CaseStudies from "../pages/CaseStudies";
import SoftwareDevelopmentPage from "../pages/Software";
import ResearchSolutionDevelopmentPage from "../pages/Research";
import ManagementConsultingPage from "../pages/ManagementConsulting";
import WhatsAppCTA from "../components/FloatingWhatsApp";
import AssessmentPage from "../pages/AssessmentPage";


// ... import the rest

export default function AppRouter() {
  return (
    <BrowserRouter>
    <Navbar/>
    <WhatsAppCTA/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/it-consulting" element={<ITBusinessConsultingPage/>}/>
        <Route path="/agile" element={<AgileCoachingPage/>}/>
        <Route path="/project-management" element={<ProjectManagementPage/>}/>
        <Route path="/web-app" element={<WebAppDevelopmentPage/>}/>
        <Route path="hr-solutions" element={<HRSolutionsPage/>}/>
        <Route path="/career-coaching" element={<CareerCoachingPage/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/founders" element={<MeetTheTeam/>}/>
        <Route path="/case-studies" element={<CaseStudies/>}/>
        <Route path="/software" element={<SoftwareDevelopmentPage/>}/>
        <Route path="/research-consulting" element={<ResearchSolutionDevelopmentPage/>}/>
        <Route path="/management-consulting" element={<ManagementConsultingPage/>}/>
        <Route path="/assessment/:service" element={<AssessmentPage />} />

       
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}
