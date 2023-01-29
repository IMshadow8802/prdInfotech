import React from "react";
import "../../styles/about.css";

import aboutImg from "../../images/about-us.jpg";

const chooseData = [
  {
    icon: "ri-lock-2-line",
    title: "Smart And Secure (S)",
    desc: "Our cloud ERP solution comes with an extensive layer of security and our software is compatible with most platforms and the modules can be customized as per the client's requirements.",
  },
  {
    icon: "ri-computer-line",
    title: "Accessible (A)",
    desc: "Never miss a thing! Access and analyze your data from various departments all at one place. Access all your data from your laptop and give life to your ideas on the go.",
  },
  {
    icon: "ri-file-chart-line",
    title: "Flexible Reporting (F)",
    desc: "Our cloud ERP solution will help you to create customized reports with just a few clicks.",
  },
  {
    icon: "ri-global-line",
    title: "End-to-End Solution (E)",
    desc: "PRD is your one-stop destination to help streamline your business process and get complete control of your organization.",
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about_wrapper">
          <div className="about_content">
            <h6 className="subtitle">Why Choose Us</h6>
            <h2>Specialist in providing solutions for </h2>
            <h2 className="highlight">Business Management</h2>
            <p className="description about_content-desc">
              PRD InfoTech is the result of the passion and desire of a finance
              veteran to transform the way companies run their business process
              and improve the lives of business professionals across the globe.
              Manual business processes most often create a slump in employee
              productivity due to reasons such as duplicity of data and
              redundant tasks that build fatigue and open up a Pandora's box of
              problems. PRD is built on decades of knowledge and experience of
              its founders across industry types, geography and company sizes,
              and can be used by aspiring companies as a plug and play Cloud ERP
              Platform. PRD platform is a multi-industry cloud ERP platform that
              can fit into your business process and provide you with the
              flexibility of auto-scaling to your business as it grows. It is an
              affordable all-in-one solution that is easy to implement in just a
              few days
            </p>

            <div className="choose_item-wrapper">
              {chooseData.map((item, index) => (
                <div className="choose_us-item" key={index}>
                  <span className="choose_us-icon">
                    <i class={item.icon}></i>
                  </span>
                  <div>
                    <h4 className="choose_us-title">{item.title}</h4>
                    <p className="description">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about_img">
            <img src={aboutImg} alt="aboutimg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
