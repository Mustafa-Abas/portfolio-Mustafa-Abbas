import React, { useState } from "react";
import styles from "../Contact/Contact.module.css";
import { usePortfolio } from "../Context/PortfolioContext";
import { useContact } from "../Context/Contact";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const { darkMode } = usePortfolio();
  const { sendEmail } = useContact();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendEmail(formData);
      setSuccessMessage("تمام، الرسالة وصلت!");
      setErrorMessage("");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSuccessMessage(""), 5000);
    } catch (error) {
      console.error("Send email failed:", error);
      setErrorMessage("حصل خطأ في الإرسال، جرّب مرة تانية.");
      setSuccessMessage("");
    }
  };

  return (
    <section className={`${styles.contactSection} ${darkMode ? styles.dark : styles.light}`}>
      <div className={styles.container}>
        <h2>Get In Touch</h2>
        <div className={styles.titleUnderline}></div>
        {successMessage && (
          <div className={styles.successMessage}>{successMessage}</div>
        )}
        {errorMessage && (
          <div className={styles.errorMessage}>{errorMessage}</div>
        )}

        <div className={styles.contactWrapper}>
          <div className={styles.contactInfo}>
            <h3>Let's Connect!</h3>
            <p>Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>

            <div className={styles.infoItem}>
              <span>📧</span> eng.mustafaahmed10@gmail.com
            </div>
            <div className={styles.infoItem}>
              <span>📞</span> +20 109 879 9596
            </div>
            <div className={styles.infoItem}>
              <span>📍</span> Cairo, Nasr City
            </div>

            <div className={styles.socials}>
  <a 
     href="https://www.linkedin.com/in/mustafa-ahmed-9935b1295?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaLinkedin />
  </a>

  <a 
     href="https://github.com/Mustafa-Abas" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaGithub />
  </a>

  {/* <a 
    href="https://instagram.com/mohamedsamir111" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaInstagram />
  </a> */}
</div>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
