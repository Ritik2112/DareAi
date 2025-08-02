import React, { useState } from "react";
import "./Price.css";

const pricingPlans = [
  {
    title: "STARTER",
    price: "$50",
    period: "per month",
    features: [
      "Up to 10 projects",
      "Basic analytics",
      "48-hour support response time",
      "Limited API access",
      "Community support",
    ],
    button: "Start Free Trial",
    footnote: "Perfect for individuals and small projects",
  },
  {
    title: "PROFESSIONAL",
    price: "$99",
    period: "per month",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "24-hour support response time",
      "Full API access",
      "Priority support",
      "Team collaboration",
      "Custom integrations",
    ],
    button: "Get Started",
    footnote: "Ideal for growing teams and businesses",
  },
  {
    title: "ENTERPRISE",
    price: "$299",
    period: "per month",
    features: [
      "Everything in Professional",
      "Custom solutions",
      "Dedicated account manager",
      "1-hour support response time",
      "SSO Authentication",
      "Advanced security",
      "Custom contracts",
      "SLA agreement",
    ],
    button: "Contact Sales",
    footnote: "",
  },
];

const Price = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <section className="pricing-section">
      <h2 className="pricing-heading">Simple, Transparent Pricing</h2>
      <p className="pricing-subheading">
        Choose the plan that works for you. All plans include access to our platform,
        lead generation tools, and dedicated support.
      </p>

      <div className="billing-toggle">
        <label>
          <input type="checkbox" />
          <span className="toggle-label">Annual billing (Save 20%)</span>
        </label>
      </div>

      <div className="pricing-cards">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${selectedIndex === index ? "highlighted" : ""}`}
            onClick={() => setSelectedIndex(index)}
          >
            <h3>{plan.title}</h3>
            <p className="price">
              <span className="amount">{plan.price}</span> / {plan.period}
            </p>
            <p className="billed-monthly">billed monthly</p>
            <ul className="features">
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>
            <button className="action-button">
              {plan.button}
            </button>
            {plan.footnote && (
              <p className="footnote">{plan.footnote}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Price;
