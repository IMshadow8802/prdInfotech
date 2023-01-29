import React from "react";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../../styles/contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g9kaktd",
        "template_gy4lq6y",
        form.current,
        "v4cwDoa_JUFZRu6m5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h2 className="heading">
        Contact <span className="highlight"> Us</span>
      </h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>PRDInfotech@gmail.com</h5>
            <a href="mailto:12shadowrider@gmail.com" target="_blank">
              Send a mail
            </a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>PRD Infotech</h5>
            <a href="mailto:12shadowrider@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>PRD Infotech</h5>
            <a
              href="https://api.whatsapp.com/send?phone=8459490411"
              target="_blank"
            >
              Send a message on Whatsapp
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />

          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="secondary_btn    send_btn">
            Send Messgae
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
