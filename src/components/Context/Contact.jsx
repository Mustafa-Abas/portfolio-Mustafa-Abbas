import React, { createContext, useContext } from "react";
import emailjs from "emailjs-com";

const ContactContext = createContext();
export const useContact = () => useContext(ContactContext);

export const ContactProvider = ({ children }) => {
  const sendEmail = async (formData) => {
    try {
      emailjs.init("Ie4xDZuo3juMgV5sj"); // Public Key الصحيح من حساب EmailJS
      const result = await emailjs.send(
        "service_vtp50ns",       // Service ID الصحيح من حسابك
        "template_8cmy0xc",       // Template ID الصحيح من حسابك
        {
          name: formData.name,    // يتطابق مع {{name}}
          email: formData.email,  // يتطابق مع {{email}}
          title: formData.subject, // يتطابق مع {{title}} في القالب
          message: formData.message,
          to_email: "eng.mustafaahmed10@gmail.com"
        },
        "Ie4xDZuo3juMgV5sj"      // Public Key الصحيح من حساب EmailJS
      );
      return result;
    } catch (error) {
      console.error("EmailJS send error:", error);
      throw error;
    }
  };

  return (
    <ContactContext.Provider value={{ sendEmail }}>
      {children}
    </ContactContext.Provider>
  );
};
