import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import LeadCRM from './components/leadCRM';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import CRMIntegrations from './components/CRMIntegrations';
import LeadCRMHeader from './components/LeadCRMHeader';

function App() {
  return (
    <div className="App">
      <Header />
      <LeadCRM />
      <HowItWorks />
      <Testimonials/>
      {/* <LinkedInSolutions /> */}
      <CRMIntegrations />
      <LeadCRMHeader />
      {/* <HeroSection /> */}
      <Footer />
    </div>
  );
}

export default App;