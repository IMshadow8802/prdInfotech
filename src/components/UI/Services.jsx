import React from "react";
import "../../styles/services.css";

const serviceData = [
  {
    icon: "ri-rocket-line",
    title: "ERP Solutions",
    desc: "Inventory Mangaement, Billing Software, Accounting Solution, Jewellery Management, Barcode solutions, CRM, SEO and much more.",
  },
  {
    icon: "ri-apps-line",
    title: "App Devlopment",
    desc: " Increase your reach to customers with our expertise in cross platform App devlopment with Industry leading technologies and experts.",
  },
  {
    icon: "ri-code-s-slash-line",
    title: "Web Devlopment",
    desc: "Make your Buisness stand out from others with the help of our expert Web designers and Our Industry leading SEO to grow your buisness.",
  },
  {
    icon: "ri-group-line",
    title: "CRM",
    desc: "Through our Customer Relationship Management Software you can connect with your clients at ease and Increase your Sales and Profit.",
  },
];

const Services = () => {
  return (
    <section className="service" id="service">
      <div className="container">
        <div className="services_top-content">
          <h6 className="subtitle">Our Services</h6>
          <h2>Save time Managing your Buisness with</h2>
          <h2 className="highlight">our best services</h2>
        </div>

        <div className="service_item-wrapper">
          {serviceData.map((item, index) => (
            <div className="services_item" key={index}>
              <span className="service_icon">
                <i class={item.icon}></i>
              </span>
              <h3 className="service_title">{item.title}</h3>
              <p className="description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
