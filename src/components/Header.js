import React from 'react';
import './Header.css';
import iconWork from '../images/Icon-work-with.png';
import startReview from '../images/star-review.webp';
import Chrome from '../images/Chrome.webp';



const Header = () => {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-left">
          <img
            src="https://www.leadcrm.io/wp-content/uploads/2024/12/LeadCRM-removebg-preview-1.webp"
            alt="leadcrm"
            className="company-logo"
          />
        </div>
        <div className="nav-center">
          <a className="nav-link">Product</a>
          <a className="nav-link">Pricing</a>
          <a className="nav-link">Resources</a>
          <a className="nav-link">Company</a>
        </div>
        <div className="nav-right">
          <button className="btn-outline">Get Your Free Account</button>
          <button className="btn-primary">Login</button>
        </div>
      </nav>

      <main className="main-content">
        <div className="top-banner">
          <p className="banner-text"> <img src='https://img.leadcrm.io/wp-content/uploads/2025/07/08045258/rocket-icon.svg' alt='rocket' width={20} height={20} style={{ marginRight: '10px' }} /> Thousands of Professional using LeadCRM</p>
        </div>

        <div className="hero-section">
          <h1 className="main-title" style={{ margin: '0px' }}>LinkedIn CRM Integration</h1>
          <h2 className="main-title" style={{ margin: '0px' }} >Capture, Sync and Enrich in <span className='both-way'>Both Ways
            <img src='https://img.leadcrm.io/wp-content/uploads/2025/07/08050121/line-1.webp' className='both-way-bottom-icon' />
          </span></h2>
          <p className="description">
            Automatically sync LinkedIn prospects to your CRM and overlay existing CRM contacts on<br />
            Linkedin profiles.Complete bi-directional integration with HubSpot, Salesforce, and Pipedrive.
          </p>
        </div>

        <div className="crm-animation-wrapper">
          <h3 className="section-title">Works with</h3>
          <div className="logos-container">
            <div className="logo-item">
              <div className="logo-box">
                <img src={iconWork} alt="HubSpot" className="company-logo-work" />
              </div>

              <span className="logo-name">HubSpot</span>
            </div>
          </div>
        </div>
        <div className="logo-box-2">
          <img src={startReview} alt="HubSpot" className="star-review" />
        </div>

        <div className="available-section" style={{ paddingBottom: '40px' }}>
          <div className="app-stores">
            <div style={{
              display: 'flex', flexDirection: 'column', padding: '12px', borderRadius: '13px', height: '60px',
              background: '#373737'
            }}>
              <h3 className="section-title-0" style={{ color: 'white' }}>Available in</h3>
              <h3 className="section-title-2">Chrome web Store <a className="store-link">
                <img
                  src={Chrome}
                  alt="Get it on Google Play"
                  className="store-badge"
                />
              </a></h3>

            </div>

          </div>
          <div className="app-stores">
            <div style={{
              display: 'flex', padding: '12px', borderRadius: '13px', height: '60px',
              background: '#B3FC6A'
            }}>
              <h3 className="section-title-3">Get a Free Trial Now!</h3>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Header;