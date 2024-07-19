"use client";

import { contactInfo } from "@/src/staticData/home/home";
import { useState } from "react";
import Input from "../ui/fields/Input";
import Textarea from "../ui/fields/TextArea";
import SectionHeading from "../shared/SectionHeading";
import ContactInfo from "./ContactInfo";
import emailjs from 'emailjs-com';

const ContactMe = () => {
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const { fullName, email, message } = formValues;

  const reset = () => {
    setFormValues({
      fullName: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_qus9gbu',
      'template_lyq7rmd',   
      {
        from_name: formValues.fullName,
        to_name: 'Lucas',
        message: formValues.message,
        email_contact: formValues.email,
      },
      '-K0MYm-FYXjMhsE5V'
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      reset();
    }).catch((error) => {
      console.log('FAILED...', error);
    });


    // reset after form submit
    reset();
  };

  return (
    <div
      data-scroll-index="8"
      id="contact"
      className="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
    >
      <div className="px-5 py-8 bg-white dark:bg-nightBlack rounded-2xl contact-section lg:p-13">
        <SectionHeading {...contactInfo.contactInfoHeading} />

        <div className="grid gap-12 mt-8 mb-10 md:my-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <ul className="space-y-6 md:space-y-10 2xl:space-y-12 contact-info">
              {contactInfo?.contactInfoData?.map((item) => (
                <ContactInfo key={item?.id} {...item} />
              ))}
            </ul>
          </div>

          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-group">
                <Input handleChange={handleChange} value={fullName} className="w-full p-5 text-sm outline-none h-13 focus:border-theme dark:focus:border-theme dark:placeholder:text-white/40" />
              </div>
              <div className="form-group">
                <Input
                  type="email"
                  placeholder="Email Address"
                  handleChange={handleChange}
                  name="email"
                  value={email}
                  className="w-full p-5 text-sm outline-none h-13 focus:border-theme dark:focus:border-theme dark:placeholder:text-white/40"
                />
              </div>
              <div className="form-group">
                <Textarea
                  handleChange={handleChange}
                  name="message"
                  value={message}
                  className="w-full px-5 py-4 text-sm outline-none focus:border-theme dark:placeholder:text-white/40"
                />
              </div>
              <div className=" form-group">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 text-[15px] font-medium border border-theme bg-theme text-white py-4.5 px-9 rounded-4xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover"
                  aria-label="Send Message"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <iframe
          className="w-full overflow-hidden border-10 border-platinum dark:border-greyBlack embed-map h-80 2xl:h-96 rounded-2xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1979.8266293287137!2d-39.32244080812781!3d-7.212984327229356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7bdf2e9c4f1a5f1%3A0x4bca35a6c37caa5b!2sS%C3%ADtio%20Riach%C3%A3o%2C%20Juazeiro%20do%20Norte%20-%20CE%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1699271377092!5m2!1spt-BR!2sus" 
          aria-label="Contact Map"
        />
      </div>
    </div>
  );
};

export default ContactMe;
