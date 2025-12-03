import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Install the Extension",
      description: "Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.",
      image: {
        src: "//img.leadcrm.io/wp-content/uploads/2025/07/08131216/install-the-extension.webp",
        alt: "install the extension",
        srcSet: "//img.leadcrm.io/wp-content/uploads/2025/07/08131216/install-the-extension.webp 642w, //img.leadcrm.io/wp-content/uploads/2025/07/08131216/install-the-extension-300x188.webp 300w",
        width: 640,
        height: 401
      }
    },
    {
      number: "2",
      title: "Browse LinkedIn",
      description: "Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.",
      image: {
        src: "//img.leadcrm.io/wp-content/uploads/2025/07/08132934/Browse-LinkedIn-768x533.webp",
        alt: "Browse LinkedIn",
        srcSet: "//img.leadcrm.io/wp-content/uploads/2025/07/08132934/Browse-LinkedIn-768x533.webp 768w, //img.leadcrm.io/wp-content/uploads/2025/07/08132934/Browse-LinkedIn-300x208.webp 300w, //img.leadcrm.io/wp-content/uploads/2025/07/08132934/Browse-LinkedIn.webp 969w",
        width: 640,
        height: 444
      }
    },
    {
      number: "3",
      title: "Get Enriched Data",
      description: "Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.",
      image: {
        src: "//img.leadcrm.io/wp-content/uploads/2025/07/08132935/Get-Enriched-Data-768x551.webp",
        alt: "Get Enriched Data",
        srcSet: "//img.leadcrm.io/wp-content/uploads/2025/07/08132935/Get-Enriched-Data-768x551.webp 768w, //img.leadcrm.io/wp-content/uploads/2025/07/08132935/Get-Enriched-Data-300x215.webp 300w, //img.leadcrm.io/wp-content/uploads/2025/07/08132935/Get-Enriched-Data.webp 969w",
        width: 640,
        height: 459
      }
    },
    {
      number: "4",
      title: "Sync to CRM Instantly",
      description: "Prospect data syncs to your CRM instantly with history, tracking, and AI powered insights for better follow ups.",
      image: {
        src: "//img.leadcrm.io/wp-content/uploads/2025/07/08132933/Sync-to-CRM-Instantly-768x418.webp",
        alt: "Sync to CRM Instantly",
        srcSet: "//img.leadcrm.io/wp-content/uploads/2025/07/08132933/Sync-to-CRM-Instantly-768x418.webp 768w, //img.leadcrm.io/wp-content/uploads/2025/07/08132933/Sync-to-CRM-Instantly-300x163.webp 300w, //img.leadcrm.io/wp-content/uploads/2025/07/08132933/Sync-to-CRM-Instantly.webp 1002w",
        width: 640,
        height: 348
      }
    }
  ];

  return (
    <div className="how-it-works elementor-element elementor-element-c64fbb7 e-flex e-con-boxed e-con e-parent">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-a30dd78 elementor-widget elementor-widget-heading">
          <h2 className="elementor-heading-title elementor-size-default">
            <span className="ez-toc-section" id="How_it_Works"></span>
            How it Works
            <span className="ez-toc-section-end"></span>
          </h2>
        </div>

        <div className="elementor-element elementor-element-d5dcfa9 elementor-widget elementor-widget-heading">
          <p className="elementor-heading-title elementor-size-default">
            From setup to success in <b>4 simple steps</b>
          </p>
        </div>

        <div className="steps-grid elementor-element elementor-element-e4fb3c8 e-grid e-con-full e-con e-child">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`step-card elementor-element elementor-element-${step.number} e-con-full e-transform e-flex e-con e-child`}
              data-id={step.number}
            >
              <div className="elementor-element elementor-widget elementor-widget-eael-info-box">
                <div className="eael-infobox icon-on-top">
                  <div className="infobox-icon">
                    <div className="infobox-icon-wrap">
                      <span className="infobox-icon-number">{step.number}</span>
                    </div>
                  </div>
                  <div className="infobox-content">
                    <div className="infobox-title-section">
                      <h3 className="title">{step.title}</h3>
                    </div>
                    <div>
                      <p>{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="elementor-element elementor-widget elementor-widget-image">
                <img
                  decoding="async"
                  width={step.image.width}
                  height={step.image.height}
                  src={step.image.src}
                  className="attachment-medium_large size-medium_large wp-image"
                  alt={step.image.alt}
                  srcSet={step.image.srcSet}
                  sizes="(max-width: 640px) 100vw, 640px"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        

        <div className="elementor-element elementor-element-c2f8e0c elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image">
          <img
            decoding="async"
            width="99"
            height="106"
            src="//img.leadcrm.io/wp-content/uploads/2025/07/11124315/Ball.webp"
            className="attachment-thumbnail size-thumbnail wp-image-60675"
            alt="Ball"
            loading="lazy"
          />
        </div>
      </div>
      <div className="app-stores" style={{ paddingTop: '40px' }}>
        <div style={{
          display: 'flex', padding: '12px', borderRadius: '13px', height: '60px',
          background: '#B3FC6A'
        }}>
          <h3 className="section-title-3">Get a Free Trial Now!</h3>
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;