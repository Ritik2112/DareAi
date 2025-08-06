import React, { useState, useEffect, useRef } from 'react';
import './Geo.css'; // Make sure this path is correct

/**
 * A custom React Hook to detect when an element is in the viewport.
 * @param {object} options - Intersection Observer options (e.g., threshold, rootMargin)
 * @returns {[React.MutableRefObject, boolean]} - A ref to attach to the element and a boolean indicating if it's in view.
 */
const useIntersectionObserver = (options) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Update our state when observer callback fires
      setIsInView(entry.isIntersecting);
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]); // Rerun effect if ref or options change

  return [ref, isInView];
};


const Geo = () => {
  // Use our custom hook. Animate when 25% of the component is visible.
  // The hook returns the ref and a boolean `isInView`.
  const [containerRef, isInView] = useIntersectionObserver({ threshold: 0.25 });

  // Data for the lists to make the JSX cleaner and add keys easily
  const geoItems = [
    "Prompt Monitoring",
    "Segment in AI response",
    "Contextual content structuring",
    "Source Influence on Input",
    "AI hallucination monitoring"
  ];

  const seoItems = [
    "SERP rankings",
    "Backlinks & Keywords",
    "Technical Optimization",
    "Page Speed & Crawlability",
    "Sitemaps & Schema"
  ];

  const overlapItems = [
    "Brand Visibility",
    "Consistent Messaging",
    "Content Quality & Accuracy",
    "Competitive Benchmarking"
  ];

  return (
    // 1. Attach the ref to the container we want to observe.
    // 2. Conditionally add the 'is-visible' class based on the `isInView` state.
    <div
      ref={containerRef}
      className={`geo-seo-container ${isInView ? 'is-visible' : ''}`}
    >
      <h1 className="main-heading">We Empower Your Brand</h1>
      <div className="venn-diagram">
        {/* Left Circle - GEO */}
        <div className="circle geo-circle">
          <div className="content-block" style={{ textAlign: 'center' }}>
            <h2>GEO</h2>
            <ul>
              {geoItems.map((item, index) => (
                <li key={`geo-${index}`}>
                  <span className="checkmark">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Circle - SEO */}
        <div className="circle seo-circle">
          <div className="content-block" style={{ color: 'black' }}>
            <h2>SEO</h2>
            <ul>
              {seoItems.map((item, index) => (
                <li key={`seo-${index}`}>
                  <span className="checkmark dark">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Overlapping Content */}
        <div className="overlap-content">
          <div className="content-block1" style={{ textAlign: 'center' }}>
            <ul>
              {overlapItems.map((item, index) => (
                <li key={`overlap-${index}`}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Geo;