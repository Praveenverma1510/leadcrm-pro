import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="leadcrm-footer">
      <div className="leadcrm-footer-container">

        <div className="logo-section">
          <div className="nav-left">
            <img
              src="https://www.leadcrm.io/wp-content/uploads/2024/12/LeadCRM-removebg-preview-1.webp"
              alt="leadcrm"
              className="company-logo"
            />
          </div>
          <p className="company-description">
            LeadCRM is LinkedIn integration tool for your CRM.
          </p>
        </div>

        <div className="leadcrm-content-section">

          <div className="footer-column">
            <h3 className="column-title">Integrations</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="https://www.leadcrm.io/linkedin-hubspot-integration/" className="footer-link">
                  HubSpot
                </a>
              </li>
              <li className="footer-item">
                <a href="https://www.leadcrm.io/linkedin-integration-with-salesforce/" className="footer-link">
                  Salesforce
                </a>
              </li>
              <li className="footer-item">
                <a href="https://www.leadcrm.io/linkedin-integration-with-pipedrive/" className="footer-link">
                  Pipedrive
                </a>
              </li>
              <li className="footer-item">
                <a href="https://www.leadcrm.io/linkedin-integration-with-zoho/" className="footer-link">
                  Zoho
                </a>
              </li>
              <li className="footer-item">
                <a href="https://www.leadcrm.io/linkedin-integration-with-copper-crm/" className="footer-link">
                  Copper CRM
                </a>
              </li>
              <li className="footer-item">
                <a href="https://www.leadcrm.io/linkedin-integration-with-google-sheets/" className="footer-link">
                  Google Sheets
                </a>
              </li>
              <li className="footer-item">
                <a href="https://www.leadcrm.io/linkedin-gohighlevel-integration/" className="footer-link">
                  GohighLevel
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="column-title">Alternative</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="https://www.leadcrm.io/leadcrm-alternative/" className="footer-link">
                  LeadCRM Alternatives
                </a>
              </li>
              <li className="footer-item">
                <a href="https://www.leadcrm.io/surfe-alternative/" className="footer-link">
                  Surfe Alternative
                </a>
              </li>
              <li className="footer-item">
                <a href="https://www.leadcrm.io/linkmatch-alternative/" className="footer-link">
                  Linkmatch Alternative
                </a>
              </li>
              <li className="footer-item">
                <a href="https://www.leadcrm.io/apollo-alternative/" className="footer-link">
                  Apollo.io Alternative
                </a>
              </li>
              <li className="footer-item">
                <a href="https://www.leadcrm.io/hublead-alternative/" className="footer-link">
                  Hublead Alternative
                </a>
              </li>
            </ul>

            <div className="legal-section">
              <h3 className="column-title">Legal</h3>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href="https://www.leadcrm.io/privacy-policy/" className="footer-link">
                    Privacy Policy
                  </a>
                </li>
                <li className="footer-item">
                  <a href="https://www.leadcrm.io/terms-of-use/" className="footer-link">
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="column-title">Resources</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="https://www.leadcrm.io/blog/sync-linkedin-messages-to-hubspot/" className="footer-link">
                  Sync LinkedIn Messages to Hubspot
                </a>
              </li>
              <li className="footer-item">
                <a href="https://www.leadcrm.io/blog/sync-linkedin-messages-to-zoho/" className="footer-link">
                  Sync LinkedIn Messages to Zoho
                </a>
              </li>
              <li className="footer-item">
                <a href="https://www.leadcrm.io/blog/sync-linkedin-messages-to-pipedrive/" className="footer-link">
                  Sync LinkedIn Messages to Pipedrive
                </a>
              </li>
              <li className="footer-item">
                <a href="https://www.leadcrm.io/blog/sync-linkedin-messages-to-salesforce/" className="footer-link">
                  Sync LinkedIn Messages to Salesforce
                </a>
              </li>
              <li className="footer-item">
                <a href="https://www.leadcrm.io/blog/sync-linkedin-messages-to-copper-crm/" className="footer-link">
                  Sync LinkedIn Messages to Copper
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="column-title">Contact Us</h3>
            <ul className="contact-list">
              <li className="contact-item">
                <a href="mailto:support@leadcrm.io" className="contact-link">
                  <span className="contact-icon">✉️</span>
                  support@leadcrm.io
                </a>
              </li>
              <li className="contact-item">
                <a href="tel:+1-231-538-7466" className="contact-link">
                  <span className="contact-icon">📞</span>
                  +1 231-538-7466
                </a>
              </li>
              <li className="contact-item">
                <a href="https://help.leadcrm.io/en/" className="contact-link">
                  <span className="contact-icon">❓</span>
                  Help Center
                </a>
              </li>
              <li className="contact-item">
                <a href="https://roadmap.leadcrm.io/" className="contact-link">
                  <span className="contact-icon">🗺️</span>
                  Roadmap
                </a>
              </li>
              <li className="contact-item">
                <a href="https://www.leadcrm.io/affiliate-program/" className="contact-link">
                  <span className="contact-icon">👥</span>
                  Partner Program
                </a>
              </li>
            </ul>

            <div className="chrome-extension-section">
              <div className="chrome-badge">
                <img
                  src="https://img.leadcrm.io/wp-content/uploads/2025/01/30081627/Google_Chrome_Web_Store_icon-2048x1779-2.webp"
                  alt="Chrome Web Store"
                  className="chrome-icon"
                />
                <div className="chrome-text">
                  <h4 className="chrome-title">Available in</h4>
                  <p className="chrome-subtitle">Chrome</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="copyright-section">
          <p className="copyright-text">
            Copyright © 2025 LeadCRM. All Rights Reserved.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Footer;