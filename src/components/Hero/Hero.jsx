import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useSpring, animated } from '@react-spring/web';
import { usePortfolio } from '../Context/PortfolioContext';
import styles from '../Hero/Hero.module.css';
import sphereImage from '../image/IMG_1843.jpeg';

export default function Hero() {
  const { darkMode } = usePortfolio();

  const animation = useSpring({
    from: { y: 100, opacity: 0 },
    to: { y: 0, opacity: 1 },
    config: { duration: 1000 },
  });

  const socialAnimation = useSpring({
    from: { x: -100, opacity: 0 },
    to: { x: 0, opacity: 1 },
    delay: 1000,
    config: { duration: 1000 },
  });

  const sphereAnimation = useSpring({
    from: { transform: 'scale(0) rotate(0deg)' },
    to: { transform: 'scale(1) rotate(360deg)' },
    config: { duration: 2000 },
  });

  // دالة للتمرير السلس إلى قسم Contact
  const scrollToContact = () => {
    const section = document.getElementById('Contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // دالة تحميل السيرة الذاتية من مجلد public
  return (
    <div className={`${styles.hero} ${darkMode ? styles.dark : styles.light}`}>
      <animated.div style={animation} className={styles.content}>
        <h2>Hello, I'm</h2>
        <h1>Mustafa Abbas</h1>
        <h3>Data Analyst & BI Specialist</h3>
        <p>Transforming raw data into powerful insights. Specializing in advanced analytics, visualization, and data-driven decision making.</p>

        <div className={styles.cta}>
          {/* زر التمرير لقسم Contact */}
          <button onClick={scrollToContact} className={styles.hireBtn}>
            Hire Me
          </button>

          {/* زر تحميل السيرة الذاتية */}
        </div>

        <animated.div style={socialAnimation} className={styles.social}>
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
        </animated.div>
      </animated.div>

      <animated.div style={sphereAnimation} className={styles.sphere}>
        <img src={sphereImage} alt="Sphere" />
      </animated.div>
    </div>
  );
}
