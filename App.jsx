import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Consultation from './pages/Consultation/Consultation';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Work from './pages/Work/Work';
import Quote from './pages/Quote/Quote';
import Foragencies from './pages/Foragencies/foragencies';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Front_end from './pages/Front_end/Front_end';
import Services from './pages/Services/Services';
import Backend from "./pages/Back-End/Backend";
import PortfolioPage from './components/Our_Work/Portfoliopage'
import ContactPage from './pages/Contactus/ContactPage';

// ScrollToTop component definition
const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/foragencies" element={<Foragencies/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/front_end" element={<Front_end/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/backend" element={<Backend />} />
            <Route path="/contactPage" element={<ContactPage />} />

            <Route path="/work/:projectId" element={<PortfolioPage />} />
      

          </Routes>
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
};

export default App;