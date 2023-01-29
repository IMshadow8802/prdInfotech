import React from "react";
import "../../styles/testimonials.css";

import Slider from "react-slick";

import ava01 from "../../images/ava-1.jpg";
import ava02 from "../../images/ava-2.jpg";
import ava03 from "../../images/ava-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <section>
      <div className="container">
        <div className="slider_content-top">
          <h6 className="subtitle">Testimonials</h6>
          <h2>
            Trusted by more than{" "}
            <span className="highlight">5,000 customers</span>
          </h2>
        </div>

        <div className="slider_wrapper">
          <Slider {...settings}>
            <div className="slider_item">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                maxime mollitia aliquam at harum facilis culpa expedita
                adipisci, voluptas corrupti eligendi provident soluta similique
                maiores minima pariatur ipsum earum, sapiente nihil! Libero
                commodi optio velit non sint quisquam recusandae delectus.
              </p>

              <div className="customer_details">
                <div className="customer_img">
                  <img src={ava01} alt="ava1" />
                </div>

                <div>
                  <h5 className="customer_name">John Doe</h5>
                  <p className="description">CEO, Workcreation</p>
                </div>
              </div>
            </div>

            <div className="slider_item">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                maxime mollitia aliquam at harum facilis culpa expedita
                adipisci, voluptas corrupti eligendi provident soluta similique
                maiores minima pariatur ipsum earum, sapiente nihil! Libero
                commodi optio velit non sint quisquam recusandae delectus.
              </p>

              <div className="customer_details">
                <div className="customer_img">
                  <img src={ava02} alt="ava2" />
                </div>

                <div>
                  <h5 className="customer_name">Sylvia Martin</h5>
                  <p className="description">Sr. Product Designer</p>
                </div>
              </div>
            </div>

            <div className="slider_item">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                maxime mollitia aliquam at harum facilis culpa expedita
                adipisci, voluptas corrupti eligendi provident soluta similique
                maiores minima pariatur ipsum earum, sapiente nihil! Libero
                commodi optio velit non sint quisquam recusandae delectus.
              </p>

              <div className="customer_details">
                <div className="customer_img">
                  <img src={ava03} alt="ava3" />
                </div>

                <div>
                  <h5 className="customer_name">Johnny Raymond</h5>
                  <p className="description">Software Devloper</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
