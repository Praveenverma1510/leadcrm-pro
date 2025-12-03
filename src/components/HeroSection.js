import React from 'react';
import './HeroSection.css'; // Optional CSS file for styling

const HeroSection = () => {
  return (
    <div className="hero-container elementor-element elementor-element-14f1d27 e-con-full e-flex e-con e-child">
      <div className="elementor-element elementor-element-07aa2c3 elementor-widget elementor-widget-heading">
        <h2 className="elementor-heading-title elementor-size-default">
          <span className="ez-toc-section" id="Capture_Every_Lead_Every_Time"></span>
          Capture Every Lead. Every Time.
          <span className="ez-toc-section-end"></span>
        </h2>
      </div>
      
      <div className="elementor-element elementor-element-f0835bc elementor-mobile-align-center elementor-widget elementor-widget-button">
        <a 
          className="elementor-button elementor-button-link elementor-size-sm"
          href="/features/waterfall-data-enrichment/" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="elementor-button-content-wrapper">
            <span className="elementor-button-icon">
              <i aria-hidden="true" className="icon icon-right-arrow1"></i>
            </span>
            <span className="elementor-button-text">
              Try Our Advanced Waterfall Enrichment
            </span>
          </span>
        </a>
      </div>
      
      <div className="elementor-element elementor-element-ea6f783 elementor-widget elementor-widget-image">
        <img
          decoding="async"
          width="640"
          height="395"
          src="//img.leadcrm.io/wp-content/uploads/2025/07/09101012/CRM-Data-Enrichment-768x474.webp"
          className="attachment-medium_large size-medium_large wp-image-60378"
          alt="CRM Data Enrichment"
          srcSet="//img.leadcrm.io/wp-content/uploads/2025/07/09101012/CRM-Data-Enrichment-768x474.webp 768w, //img.leadcrm.io/wp-content/uploads/2025/07/09101012/CRM-Data-Enrichment-300x185.webp 300w, //img.leadcrm.io/wp-content/uploads/2025/07/09101012/CRM-Data-Enrichment-1024x632.webp 1024w, //img.leadcrm.io/wp-content/uploads/2025/07/09101012/CRM-Data-Enrichment-1536x948.webp 1536w, //img.leadcrm.io/wp-content/uploads/2025/07/09101012/CRM-Data-Enrichment.webp 1851w"
          sizes="(max-width: 640px) 100vw, 640px"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default HeroSection;