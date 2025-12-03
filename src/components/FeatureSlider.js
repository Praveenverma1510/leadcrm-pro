// components/FeatureSlider.js
import React from 'react';
import './FeatureSlider.css';

const FeatureSlider = () => {
  const features = [
    {
      icon: '/images/feature-leadcrm-1.webp',
      text: 'One click push to CRM'
    },
    {
      icon: '/images/feature-leadcrm-2.webp',
      text: 'Custom Field Mapping'
    },
    {
      icon: '/images/feature-leadcrm-3.webp',
      text: 'Instant Email Finder'
    },
    {
      icon: '/images/sWI1LwozDyPn.webp',
      text: 'Advanced Waterfall Enrichment'
    },
    {
      icon: '/images/lsV7JmNK0Tmt.webp',
      text: 'Seamless Deal Management'
    },
    {
      icon: '/images/f6lfxh0vkJsU.webp',
      text: 'Access to 700M+ Contacts'
    },
    {
      icon: '/images/gMryqDHStHoo.webp',
      text: 'Advanced AI Productivity'
    },
    {
      icon: '/images/feature-leadcrm-8.webp',
      text: 'Bulk Export & Enrich'
    },
  ];

  return (
    <div className="feature-slider-wrapper">
      <div className="slider-track">
        {features.map((feature, index) => (
          <div className="slide" key={`original-${index}`}>
            <img 
              src={feature.icon} 
              alt={feature.text} 
              loading="lazy"
            />
            <div className="slide-text">{feature.text}</div>
          </div>
        ))}
        
        {features.map((feature, index) => (
          <div className="slide" key={`duplicate-${index}`}>
            <img 
              src={feature.icon} 
              alt={feature.text} 
              loading="lazy"
            />
            <div className="slide-text">{feature.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSlider;