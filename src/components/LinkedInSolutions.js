import React, { useState } from 'react';
import './LinkedInSolutions.css';

const LinkedInSolutions = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Tab data
  const tabs = [
    {
      id: 1,
      title: "CRM Data Enrichment",
      icon: "//img.leadcrm.io/wp-content/uploads/2025/07/11073852/tab-icon-3.webp",
      alt: "Complete LinkedIn Sales Solutions"
    },
    {
      id: 2,
      title: "CRM Data Sync",
      icon: "//img.leadcrm.io/wp-content/uploads/2025/07/11073853/tab-icon-4.webp",
      alt: "Complete LinkedIn Sales Solutions"
    },
    {
      id: 3,
      title: "Bulk Export & Enrichment",
      icon: "//img.leadcrm.io/wp-content/uploads/2025/07/11073851/tab-icon-2.webp",
      alt: "Complete LinkedIn Sales Solutions"
    },
    {
      id: 4,
      title: "AI Productivity",
      icon: "//img.leadcrm.io/wp-content/uploads/2025/07/11073854/tab-icon-1.webp",
      alt: "Complete LinkedIn Sales Solutions"
    }
  ];

  // Tab content data
  const tabContents = {
    1: {
      problem: {
        title: "It's hard to find the accurate contact data for every prospects.",
        badge: "Incomplete Data"
      },
      solutions: [
        {
          id: 1,
          buttonText: "Try LeadCRM Data Enrichment",
          buttonLink: "/features/lead-finder/",
          image: {
            src: "//img.leadcrm.io/wp-content/uploads/2025/07/09101433/CRM-Data-Enrichment-d-768x464.png",
            alt: "CRM Data Enrichment",
            width: 640,
            height: 387
          },
          bgColor: "#F0F4FD",
          features: [
           ' Here is how LeadCRM tackles that situation.'
          ]
        },
        {
          id: 2,
          buttonText: "Try Our Advanced Waterfall Enrichment",
          buttonLink: "/features/waterfall-data-enrichment/",
          image: {
            src: "//img.leadcrm.io/wp-content/uploads/2025/07/09101012/CRM-Data-Enrichment-768x474.webp",
            alt: "CRM Data Enrichment",
            width: 640,
            height: 395
          },
          bgColor: "#F0F4FD",
          contactInfo: {
            name: "David Steinhoff",
            email: "davidsteinhoff@gmail.com",
            position: "Founder via anexio",
            phone: "+1 932 xxx xxx",
            status: "Contact Found"
          },
          waterfallVendors: [
            { name: "DropContact", status: "Contact Not Found" },
            { name: "Datagma", status: "Contact Not Found" },
            { name: "Rocket Reach", status: "Contact Not Found" },
            { name: "Signal Hire", status: "Signal Hire" }
          ]
        }
      ]
    },
    2: {
      problem: {
        title: "40+ hours lost to copy-paste. Every. Single. Month.",
        badge: "Lost Lead Context"
      },
      solutions: [
        {
          id: 1,
          title: "The Solution? LeadCRM's Instant Data Sync.",
          buttonText: "Try LeadCRM Data Sync",
          buttonLink: "/features/linkedin-to-crm-data-sync/",
          image: {
            src: "//img.leadcrm.io/wp-content/uploads/2025/07/11075917/CRM-Data-Sync.png",
            alt: "CRM Data Sync",
            width: 640,
            height: 393
          },
          bgColor: "#FFFFCE"
        },
        {
          id: 2,
          title: "Unlock instant CRM insights on every profile you visit.",
          buttonText: "Try LeadCRM Data Overlay",
          buttonLink: "/features/crm-data-overlay/",
          image: {
            src: "//img.leadcrm.io/wp-content/uploads/2025/07/11080104/CRM-Data-Sync-1.png",
            alt: "CRM Data Sync",
            width: 640,
            height: 383
          },
          bgColor: "#FFFFCE"
        }
      ]
    },
    3: {
      problem: {
        title: "Your Sales Navigator Workflow is Broken.",
        badge: "Lost Productivity"
      },
      solutions: [
        {
          id: 1,
          title: "Enrich & Export 250 Profiles in Just 60 Seconds.",
          buttonText: "Try LeadCRM Bulk Export",
          buttonLink: "/features/linkedin-data-bulk-export/",
          image: {
            src: "//img.leadcrm.io/wp-content/uploads/2025/07/11075922/Bulk-Export-Enrichment.png",
            alt: "Bulk Export & Enrichment",
            width: 640,
            height: 396
          },
          bgColor: "#ECEAFF"
        },
        {
          id: 2,
          title: "Export & enrich profiles to the CRM or G-Sheet",
          buttonText: "Try LeadCRM Bulk Export",
          buttonLink: "https://www.leadcrm.io/features/linkedin-data-bulk-export/",
          image: {
            src: "//img.leadcrm.io/wp-content/uploads/2025/07/11075921/Bulk-Export-Enrichment-1.png",
            alt: "Bulk Export & Enrichment (1)",
            width: 640,
            height: 362
          },
          bgColor: "#ECEAFF"
        }
      ]
    },
    4: {
      problem: {
        title: "Your Most Valuable LinkedIn Activity is Also Your Biggest Time Sink.",
        badge: "No Smart Assistance"
      },
      solutions: [
        {
          id: 1,
          title: "Get the same high-impact engagement in 80% less time.",
          buttonText: "Try LeadCRM AI Response",
          buttonLink: "https://www.leadcrm.io/features/ai-responses-inside-linkedin/",
          image: {
            src: "//img.leadcrm.io/wp-content/uploads/2025/05/28111308/AI-Comment-image-1-768x603.webp",
            alt: "AI Comment",
            width: 640,
            height: 503
          },
          bgColor: "#FFE9FE"
        },
        {
          id: 2,
          title: "Use Shortcuts to reply faster.",
          buttonText: "Try LeadCRM Templates",
          buttonLink: "https://www.leadcrm.io/features/templates-and-shortcuts/",
          image: {
            src: "//img.leadcrm.io/wp-content/uploads/2025/05/29113839/Template-imges-2-768x529.webp",
            alt: "Template and shortcuts",
            width: 640,
            height: 441
          },
          bgColor: "#FFE9FE"
        }
      ]
    }
  };

  const currentContent = tabContents[activeTab];

  return (
    <div className="linkedin-solutions elementor-element elementor-element-ba6ecff e-flex e-con-boxed e-con e-parent">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-ff001bf e-con-full e-flex e-con e-child">
          <div className="elementor-element elementor-element-87c56f8 elementor-widget elementor-widget-heading">
            <h2 className="elementor-heading-title elementor-size-default">
              <span className="ez-toc-section" id="Complete_LinkedIn_Sales_Solutions"></span>
              Complete LinkedIn Sales Solutions
            </h2>
          </div>
          <div className="elementor-element elementor-element-cb30656 elementor-widget elementor-widget-heading">
            <p className="elementor-heading-title elementor-size-default">
              Everything you need for professional LinkedIn prospecting
            </p>
          </div>
        </div>

        <div className="tab-solutions elementor-widget elementor-widget-eael-adv-tabs">
          <div className="eael-advance-tabs eael-tabs-horizontal eael-tab-auto-active active-caret-on responsive-vertical-layout">
            <div className="eael-tabs-nav">
              <ul className="eael-tab-inline-icon" role="tablist">
                {tabs.map((tab) => (
                  <li
                    key={tab.id}
                    className={`eael-tab-item-trigger eael-tab-nav-item ${activeTab === tab.id ? 'active' : 'inactive'}`}
                    aria-selected={activeTab === tab.id}
                    data-tab={tab.id}
                    role="tab"
                    tabIndex={activeTab === tab.id ? 0 : -1}
                    aria-controls={`tab-${tab.id}`}
                    aria-expanded={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    onKeyPress={(e) => e.key === 'Enter' && setActiveTab(tab.id)}
                  >
                    <img
                      decoding="async"
                      src={tab.icon}
                      alt={tab.alt}
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div className="eael-tabs-content">
              <div
                id="tab-1"
                className={`clearfix eael-tab-content-item ${activeTab === 1 ? 'active' : 'inactive'}`}
                style={{ display: activeTab === 1 ? 'block' : 'none' }}
              >
                {currentContent && (
                  <>
                    <div className="problem-section">
                      <div className="elementor-divider">
                        <span className="elementor-divider-separator"></span>
                      </div>
                      <div className="problem-statement">
                        <h2 className="elementor-heading-title elementor-size-default">
                          {currentContent.problem.title}
                          <span className="red-badge">{currentContent.problem.badge}</span>
                        </h2>
                      </div>

                      <div className="solution-subtitle">
                        <p>Here is how LeadCRM tackles that situation.</p>
                        <a href="/features/lead-finder/" className="solution-link">
                          Try LeadCRM Data Enrichment →
                        </a>
                      </div>
                    </div>

                    <div className="solutions-grid">
                      {currentContent.solutions.map((solution) => (
                        <div
                          key={solution.id}
                          className="solution-card"
                          style={{ backgroundColor: solution.bgColor }}
                        >
                          <div className="solution-content">
                            <h2 className="solution-title">{solution.title}</h2>

                            {solution.features && (
                              <div className="features-list">
                                <ul>
                                  {solution.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            <a
                              className="solution-button"
                              href={solution.buttonLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="button-content-wrapper">
                                <span className="button-icon">
                                  <i aria-hidden="true" className="icon icon-right-arrow1"></i>
                                </span>
                                <span className="button-text">If it does not works for you, try our Advanced Waterfall Enrichments →</span>
                              </span>
                            </a>
                          </div>

                          <div className="solution-image">
                            <img
                              decoding="async"
                              width={solution.image.width}
                              height={solution.image.height}
                              src={solution.image.src}
                              className="attachment-medium_large size-medium_large"
                              alt={solution.image.alt}
                              loading="lazy"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInSolutions;