import React from "react";
import "../../styles/faq.css";

import videoImg from "../../images/video.png";
import articleImg from "../../images/article.png";
import caseStudy from "../../images/case-study.png";

const blogData = [
  {
    imgUrl: videoImg,
    title: "Video",
    desc: "To know more watch some video f....",
    linkUrl:
      "https://www.youtube.com/watch?v=IJT9dMrkvMg&ab_channel=Estock-ERP",
  },
  {
    imgUrl: articleImg,
    title: "Articles",
    desc: "Do you want to improve the way your brand interacts with customer? Lets talk ....",
    linkUrl: "https://4acc.com/article/5-ways-erp-supports-growth/",
  },
  {
    imgUrl: caseStudy,
    title: "Case Study",
    desc: "Know more about ERP Softwares....",
    linkUrl:
      "https://www.netsuite.com/portal/resource/articles/erp/erp-implementation-case-study.shtml",
  },
];

const Faq = () => {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="blog_top-content">
          <h6 className="subtitle">Our Blog</h6>
          <h2>
            Let's have a look at our
            <span className="highlight"> latest blogs</span>
          </h2>
        </div>

        <div className="blog_wrapper">
          {blogData.map((item, index) => (
            <div className="blog_item" key={index}>
              <h3>{item.title}</h3>
              <div className="blog_img">
                <img src={item.imgUrl} alt="" />
              </div>
              <p className="description blog_desc">{item.desc}</p>
              <div>
                <a href={item.linkUrl} target="_blank" className="learn_more">
                  <i class="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
