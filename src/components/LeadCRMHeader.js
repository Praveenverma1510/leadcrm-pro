import React from 'react';
import './LeadCRMHeader.css';

import productImage from '../images/product-hunt.png';

const LeadCRMHeader = () => {
  return (
    <div
      className="elementor-element elementor-element-6614910 e-flex e-con-boxed e-con e-parent"
      data-id="6614910"
      data-element_type="container"
      style={{ backgroundBackground: "classic" }}
    >
      <div className="e-con-inner">
        <div
          className="elementor-element elementor-element-89d3b75 e-con-full e-flex e-con e-child"
          data-id="89d3b75"
          data-element_type="container"
        >
          <div
            className="elementor-element elementor-element-0671f7d elementor-widget elementor-widget-heading"
            data-id="0671f7d"
            data-element_type="widget"
            data-widget_type="heading.default"
          >
            <h2 className="elementor-heading-title elementor-size-default">
              <span className="ez-toc-section" id="Turn_Your_LinkedIn_into_a_Revenue_Engine"></span>
              Join Thousands of Professionals Using LeadCRM
              <span className="ez-toc-section-end"></span>
            </h2>
          </div>

          <div
            className="elementor-element elementor-element-d3b2744 e-con-full e-flex e-con e-child"
            data-id="d3b2744"
            data-element_type="container"
            style={{ backgroundBackground: "classic" }}
          >
            <img src={productImage} alt="Product Hunt" style={{
              height: '100%',
              width: '80vw'
            }} />
          </div>

          <div className="app-stores" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
            <div style={{
              display: 'flex', padding: '12px', borderRadius: '13px', height: '60px',
              background: '#B3FC6A'
            }}>
              <h3 className="section-title-3">Get Started Today</h3>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadCRMHeader;   