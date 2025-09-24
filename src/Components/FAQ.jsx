import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    q: 'What is DareAISearch?',
    a: `DareAISearch is an operating System for AI-Search Visibility, helping brands get discovered, cited, and chosen across AI platforms like ChatGPT, Perplexity, and Gemini.`,
  },
  {
    q: 'Why does my brand need to care about AI-Search?',
    a: `Over 30% of Gen Z searches already happen on AI platforms, and nearly 60% of searches end without a website click. Without AI-Search optimization, brands risk invisibility in the next wave of digital discovery.`,
  },
  {
    q: 'How is DareAISearch different from traditional SEO?',
    a: `Traditional SEO focuses on ranking websites in Google SERPs. DareAISearch ensures your brand is accurately represented in AI-generated answers by optimizing prompts, citations, schema, and contextual content.`,
  },
  {
    q: 'What is Generative Engine Optimization (GEO)?',
    a: `Generative Engine Optimization (GEO) is the practice of making your brand visible in AI-driven responses. DareAISearch provides the world’s first structured GEO solution, combining prompt monitoring, negative source neutralization, and contextual content optimization.`,
  },
  {
    q: 'Is DareAISearch only about GEO?',
    a: `No, DareAISearch goes beyond GEO. It combines GEO + SEO + Brand Visibility tools, ensuring your brand wins across AI answers, traditional search, and omnichannel discovery.`,
  },
  {
    q: 'Which AI platforms does DareAISearch optimize for?',
    a: `We cover ChatGPT, Gemini, Perplexity and other emerging AI assistants, ensuring consistent visibility and brand accuracy across the AI ecosystem.`,
  },
  {
    q: 'What kind of results can I expect?',
    a: `Brands working with DareAISearch have seen a minimum 30% quarter-on-quarter growth in AI-driven traffic, with measurable improvements in qualified leads, add-to-carts, and conversions.`,
  },
  {
    q: 'How long does it take to see results?',
    a: `Initial improvements can be seen in 4–6 weeks, with stronger compounding impact as AI systems update their data sources and response models.`,
  },
  {
    q: 'What industries can benefit from DareAISearch?',
    a: `DareAISearch is industry-agnostic and has delivered results for e-commerce, healthcare, fintech, education, wellness, and enterprise brands. Any brand seeking AI-Search visibility and authority can benefit.`,
  },
  {
    q: 'How do you measure success in AI-Search?',
    a: `We track AI-driven sessions, citations, user engagement, key events (signups, checkouts), and attributed revenue through a live AI Visibility Dashboard.`,
  },
  {
    q: 'Does DareAISearch replace SEO or complement it?',
    a: `It complements SEO. While SEO ensures you rank in traditional search engines, DareAISearch ensures your brand is trusted, cited, and recommended in AI answers, together delivering 360° visibility.`,
  },
  {
    q: 'How do I get started with DareAISearch?',
    a: `Book a demo with our team. We’ll conduct an AI-Search Visibility Audit, share your AI-Visibility Score, and build a roadmap tailored to your industry and growth goals.`,
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    // Force close all others and only open the clicked one
    setOpenIndex(current => current === index ? null : index);
  };

  // Split items into two columns (even/odd) so each column lays out independently
  const items = faqData.map((item, idx) => ({ ...item, idx }));
  const leftCol = items.filter(it => it.idx % 2 === 0);
  const rightCol = items.filter(it => it.idx % 2 === 1);

  return (
    <section id="faq" className="faq-section">
      <div className="faq-inner container">
        <div className="faq-header">
          <h2 className="book-demo-heading">Frequently Asked Questions</h2>
        </div>

        <div className="faq-grid">
          <div className="faq-column">
            {leftCol.map(item => (
              <div className={`faq-card ${openIndex === item.idx ? 'open' : ''}`} key={`faq-left-${item.idx}`}>
                <button
                  type="button"
                  aria-expanded={openIndex === item.idx}
                  className="faq-question"
                  onClick={() => handleToggle(item.idx)}
                >
                  <span className="q-text">{item.q}</span>
                  <span className={`chev ${openIndex === item.idx ? 'rot' : ''}`}>▾</span>
                </button>
                <div
                  className="faq-answer"
                  style={{ display: openIndex === item.idx ? 'block' : 'none' }}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="faq-column">
            {rightCol.map(item => (
              <div className={`faq-card ${openIndex === item.idx ? 'open' : ''}`} key={`faq-right-${item.idx}`}>
                <button
                  type="button"
                  aria-expanded={openIndex === item.idx}
                  className="faq-question"
                  onClick={() => handleToggle(item.idx)}
                >
                  <span className="q-text">{item.q}</span>
                  <span className={`chev ${openIndex === item.idx ? 'rot' : ''}`}>▾</span>
                </button>
                <div
                  className="faq-answer"
                  style={{ display: openIndex === item.idx ? 'block' : 'none' }}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
