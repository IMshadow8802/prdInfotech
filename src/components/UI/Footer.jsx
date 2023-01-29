import React from "react";
import "../../styles/footer.css";

const quickLinks01 = [
  {
    path: "#",
    display: "ERP Solutions",
  },
  {
    path: "#",
    display: "Web Devlopment",
  },
  {
    path: "#",
    display: "App Devlopment",
  },
  {
    path: "#",
    display: "Accounting Solutions",
  },
  {
    path: "#",
    display: "CRM",
  },
];

const quickLinks02 = [
  {
    path: "#",
    display: "About Us",
  },
  {
    path: "#",
    display: "Contact",
  },
];

const quickLinks03 = [
  {
    path: "#",
    display: "Pricing",
  },
  {
    path: "#",
    display: "Documentation",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_logo">
            <h2>PRD Infotech</h2>
            <p className="description">
              A one stop solution for all your Business needs.
            </p>
            <p className="small_text description">
              Office: A-16, Street No 1, Dabri, Dashrathpuri, New. Delhi-110045
            </p>
            <p className="small_text description">
              Phone: +91 8459490411,926660786
            </p>
          </div>

          <div className="footer_quick-links">
            <h3 className="quick_links-title">Products</h3>
            <ul className="quick_links">
              {quickLinks01.map((item, index) => (
                <li className="quick_links-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer_quick-links">
            <h3 className="quick_links-title">Company</h3>
            <ul className="quick_links">
              {quickLinks02.map((item, index) => (
                <li className="quick_links-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer_quick-links">
            <h3 className="quick_links-title">Support</h3>
            <ul className="quick_links">
              {quickLinks03.map((item, index) => (
                <li className="quick_links-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="copyright">Copyright {year}, PRD Infotech Pvt. Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
