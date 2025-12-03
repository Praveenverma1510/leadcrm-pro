import React from 'react';
import './CRMIntegrations.css';

const CRMIntegrations = () => {
  // CRM platforms data (from screenshot)
  const crmPlatforms = [
    { name: "HubSpot", type: "CRM" },
    { name: "Salesforce", type: "CRM" },
    { name: "Pipedrive", type: "CRM" },
    { name: "Zoho", type: "CRM" },
    { name: "Freshworks", type: "CRM" },
    { name: "Monday", type: "CRM" },
    { name: "Copper", type: "CRM" },
    { name: "ActiveCampaign", type: "CRM" }
  ];

  // Data fields that can be synced (from screenshot)
  const dataFields = [
    { name: "First Name", category: "Contacts" },
    { name: "Last Name", category: "Contacts" },
    { name: "Email", category: "Contacts" },
    { name: "Phone", category: "Contacts" },
    { name: "Company", category: "Company" },
    { name: "Title", category: "Company" },
    { name: "Website", category: "Company" },
    { name: "Location", category: "Company" },
    { name: "LinkedIn URL", category: "Social" },
    { name: "Conversations", category: "Social" },
    { name: "Company Employees", category: "Company" },
    { name: "Last Activity", category: "Activity" },
    { name: "Notes", category: "Activity" },
    { name: "Tags", category: "Organization" },
    { name: "Deal Stage", category: "Sales" },
    { name: "Lead Source", category: "Sales" }
  ];

  return (
    <div className="crm-integrations elementor-element elementor-element-2716740 elementor-hidden-mobile e-flex e-con-boxed e-con e-parent">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-c11372e elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image">
          <img
            decoding="async"
            width="108"
            height="97"
            src="//img.leadcrm.io/wp-content/uploads/2025/07/11124853/comment-icon.webp"
            className="attachment-thumbnail size-thumbnail wp-image-60677"
            alt="comment icon"
            loading="lazy"
          />
        </div>

        <div className="elementor-element elementor-element-38f9bcb e-con-full e-flex e-con e-child">
          <div className="crm-header-title">
            <h2 className="elementor-heading-title elementor-size-default">
              <span className="ez-toc-section" id="Our_Supported_LeadCRM"></span>
              Our Supported LeadCRM
            </h2>
          </div>

          <div className="elementor-element elementor-element-b301ed5 elementor-widget elementor-widget-heading">
            <h2 className="elementor-heading-title elementor-size-default">
              <span className="ez-toc-section" id="Your_CRM_Now_the_Single_Source_of_Truth"></span>
              Everything you need for professional LinkedIn prospecting
              <span className="ez-toc-section-end"></span>
            </h2>
          </div>
          <div className="elementor-element elementor-element-9f2a52e elementor-hidden-mobile elementor-widget elementor-widget-image">
            <img
              decoding="async"
              width="1536"
              height="636"
              src="//img.leadcrm.io/wp-content/uploads/2025/07/11082644/leadcrm-supported-1536x636.png"
              className="attachment-1536x1536 size-1536x1536 wp-image-60636"
              alt="leadcrm supported"
              loading="lazy"
            />
          </div>

          <div className="app-stores" style={{ paddingTop: '40px' }}>
            <div style={{
              display: 'flex', padding: '12px', borderRadius: '13px', height: '60px',
              background: '#B3FC6A'
            }}>
              <h3 className="section-title-3">Lets Integrate your CRM Now!</h3>
            </div>

          </div>
        </div>

        <div className="elementor-element elementor-element-633958c elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image">
          <img
            decoding="async"
            width="115"
            height="150"
            src="//img.leadcrm.io/wp-content/uploads/2025/07/11125144/Collaboration-115x150.webp"
            className="attachment-thumbnail size-thumbnail wp-image-60678"
            alt="Collaboration"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default CRMIntegrations;