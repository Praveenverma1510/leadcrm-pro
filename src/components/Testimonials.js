import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  // Star Rating Component
  const StarRating = ({ rating = 5 }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <div key={index} className="e-icon">
        <div className="e-icon-wrapper e-icon-marked">
          <svg
            aria-hidden="true"
            className="e-font-icon-svg e-eicon-star"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
          </svg>
        </div>
      </div>
    ));

    return (
      <div className="e-rating" itemType="https://schema.org/Rating" itemScope="" itemProp="reviewRating">
        <meta itemProp="worstRating" content="0" />
        <meta itemProp="bestRating" content="5" />
        <div className="e-rating-wrapper" itemProp="ratingValue" content={rating} role="img" aria-label={`Rated ${rating} out of 5`}>
          {stars}
        </div>
      </div>
    );
  };

  // Testimonials Data
  const testimonials = [
    {
      id: 1,
      quote: "It's been a really positive experience overall. I use LeadCRM to build qualified leads from LinkedIn and sync them into HubSpot. The platform has saved me hours of manual work every week. I would especially highlight their customer support — they are fast, knowledgeable, and genuinely helpful.",
      rating: 5,
      platform: {
        name: "Capterra",
        icon: "//img.leadcrm.io/wp-content/uploads/2025/02/18104714/capterra-icon.png",
        alt: "capterra icon"
      },
      author: {
        name: "Olivia M.",
        title: "On Capterra",
        avatar: "//img.leadcrm.io/wp-content/uploads/2025/07/18160607/olivia.jpg",
        alt: "User Feedback"
      }
    },
    {
      id: 2,
      quote: "Keeps Me Organized I never lose track of a lead now that I can see and create tasks right in LinkedIn. The inbuilt enrichment is excellent, and when it misses anything, integrations fill in the gaps.",
      rating: 5,
      platform: {
        name: "Google",
        icon: "//img.leadcrm.io/wp-content/uploads/2025/02/18104715/google-icon.png",
        alt: "google icon"
      },
      author: {
        name: "Paul Kevin",
        title: "On Google",
        avatar: "//img.leadcrm.io/wp-content/uploads/2025/02/18121000/Avatar-Users2_17.png",
        alt: "Avatar Users"
      }
    },
    {
      id: 3,
      quote: "Hunter.io Integration is Great I love that LeadCRM uses multiple sources, including its own. If one source doesn't have the data, the next source does. Message templates help me send quick, consistent messages.",
      rating: 5,
      platform: {
        name: "Trustpilot",
        icon: "//img.leadcrm.io/wp-content/uploads/2025/02/18103830/670fca1b7afabe8bd0ddeea1_Vectors-Wrapper.svg",
        alt: "Trustpilot"
      },
      author: {
        name: "Ruthie Smith",
        title: "On G2",
        avatar: "//img.leadcrm.io/wp-content/uploads/2025/02/18095636/Avatar-Users2_50.png",
        alt: "Avatar Users"
      }
    }
  ];

  return (
    <div className="testimonials-section elementor-element elementor-element-d0fe101 elementor-hidden-mobile e-flex e-con-boxed e-con e-parent">
      <div className="e-con-inner">


        <div className="testimonials-main-title">
          <h2 className="elementor-heading-title elementor-size-default">
            <span className="ez-toc-section" id="What_people_are_saying_about_LeadCRM"></span>
            What people are saying about LeadCRM
          </h2>
        </div>

        <div className="elementor-element elementor-element-a988f51 elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image" style={{
          position: 'absolute',
          top: 0,
          /* right: 0; */
          opacity: '1.1',
          zIndex: '5',
          /* background: transparent; */
          left: '-175px'
        }}>
          <img
            decoding="async"
            width="112"
            height="146"
            src="//img.leadcrm.io/wp-content/uploads/2025/07/11124555/icon.webp"
            className="attachment-thumbnail size-thumbnail wp-image-60676"
            alt="icon"
            loading="lazy"
          />
        </div>

        <div className="elementor-element elementor-element-4afa9ed e-grid e-con-full e-con e-child">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`elementor-element elementor-element-${testimonial.id} e-con-full e-flex e-con e-child`}
              data-id={testimonial.id}
            >
              <div className="testimonial-card">
                <div className="elementor-element elementor-widget elementor-widget-text-editor">
                  <p>
                    <span style={{ color: '#333399' }}>
                      "{testimonial.quote}"
                    </span>
                  </p>
                </div>

                <div className="testimonial-meta">
                  <div className="elementor-element elementor-widget__width-auto elementor-widget elementor-widget-image">
                    <img
                      decoding="async"
                      width="25"
                      height="25"
                      src={testimonial.platform.icon}
                      className="attachment-full size-full wp-image"
                      alt={testimonial.platform.alt}
                      loading="lazy"
                    />
                  </div>
                  <div className="elementor-element elementor-widget__width-auto elementor-widget elementor-widget-rating">
                    <StarRating rating={testimonial.rating} />
                  </div>
                </div>

                <div className="elementor-element elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                  <div className="elementor-divider">
                    <span className="elementor-divider-separator"></span>
                  </div>
                </div>

                <div className="testimonial-author">
                  <div className="author-details">
                    <div className="elementor-element elementor-widget elementor-widget-heading">
                      <h2 className="elementor-heading-title elementor-size-default">
                        <span className="ez-toc-section" id={testimonial.author.name.replace(/\s+/g, '_')}></span>
                        {testimonial.author.name}
                      </h2>
                    </div>
                    <div className="elementor-element elementor-widget elementor-widget-heading">
                      <p className="elementor-heading-title elementor-size-default">
                        {testimonial.author.title}
                      </p>
                    </div>
                  </div>
                  <div className="author-avatar">
                    <div className="elementor-element elementor-widget elementor-widget-image">
                      <img
                        decoding="async"
                        width="100"
                        height="100"
                        src={testimonial.author.avatar}
                        className="attachment-large size-large wp-image"
                        alt={testimonial.author.alt}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;