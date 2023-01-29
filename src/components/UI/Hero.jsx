import React from "react";
import { useEffect } from "react";
import "../../styles/hero.css";

import heroDarkImg from "../../images/hero-img.png";
import lightImg from "../../images/light-hero-bg.jpg";

const Hero = ({ theme }) => {
  const handleContactClick = () => {
    window.location.assign("#contact");
  };

  const handleServiceClick = () => {
    window.location.assign("#service");
  };

  useEffect(() => {
    if (window.location.hash === "#contact") {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    } else if (window.location.hash === "#service") {
      document.getElementById("service").scrollIntoView({ behavior: "smooth" });
    }
  }, [window.location.hash]);

  return (
    <section className="hero_section" id="home">
      <div className="container">
        <div className="hero_wrapper">
          <div className="hero_content">
            <div>
              <h2>We Provide perfect</h2>
              <h2>Software solutions to</h2>
              <h2 className="highlight">Help your Buisness</h2>
            </div>
            <p className="description">
              Your Unified software suite for all your business needs all under
              one place, a complete ERP solution. Designed to Solve all problems
              behind Business Management.
            </p>

            <div className="hero_btns">
              <button className="primary_btn" onClick={handleContactClick}>
                Get Started Now
              </button>
              <button className="secondary_btn" onClick={handleServiceClick}>
                Discover More
              </button>
            </div>
          </div>

          <div className="hero_img">
            <img
              src={theme === "light-theme" ? lightImg : heroDarkImg}
              alt="hero-Img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
