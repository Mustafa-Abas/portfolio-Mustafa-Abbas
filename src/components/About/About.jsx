import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { usePortfolio } from '../Context/PortfolioContext';
import styles from '../About/About.module.css';
import profileImage from '../image/data-analysis.png';

const About = () => {
  const { darkMode } = usePortfolio();

  const titleAnimation = useSpring({ from: { y: -50, opacity: 0 }, to: { y: 0, opacity: 1 }, config: { duration: 800 } });
  const contentAnimation = useSpring({ from: { x: -100, opacity: 0 }, to: { x: 0, opacity: 1 }, delay: 400, config: { duration: 1000 } });
  const imageAnimation = useSpring({ from: { x: 100, opacity: 0, scale: 0.8 }, to: { x: 0, opacity: 1, scale: 1 }, delay: 600, config: { duration: 1200 } });
  const statsAnimation = useSpring({ from: { y: 50, opacity: 0 }, to: { y: 0, opacity: 1 }, delay: 800, config: { duration: 1000 } });

  return (
    <section className={`${styles.aboutSection} ${darkMode ? styles.dark : styles.light}`}>
      <div className={styles.container}>
        <animated.div style={titleAnimation} className={styles.sectionTitle}>
          <h2>About Me</h2>
          <div className={styles.titleUnderline}></div>
        </animated.div>

        <div className={styles.aboutContent}>
          {/* النصوص */}
          <animated.div style={contentAnimation} className={styles.aboutText}>
            <h3>Turning Data Into Decisions</h3>
            <div className={styles.textUnderline}></div>

            <div className={styles.description}>
              <p>I'm a passionate Data Analyst with expertise in transforming complex datasets into clear, actionable insights. I combine statistical rigor with compelling storytelling to help organizations make data-driven decisions.</p>
              <p>My approach bridges the gap between technical analysis and business strategy, ensuring that data insights directly translate into measurable outcomes.</p>
            </div>

            <div className={styles.skillsContainer}>
              <animated.div style={statsAnimation} className={styles.skills}>
                <div className={styles.skillBadge}>Python</div>
                <div className={styles.skillBadge}>SQL</div>
                <div className={styles.skillBadge}>Power BI</div>
                <div className={styles.skillBadge}>Statistics</div>
              </animated.div>
            </div>
          </animated.div>

          {/* الصورة بدل الشكل */}
          <animated.div style={imageAnimation} className={styles.aboutImage}>
            <div className={styles.imageContainer}>
              <img 
                src={profileImage} 
                alt="Data analysis dashboards and visualizations" 
                className={styles.profileImage} 
              />
            </div>
          </animated.div>
        </div>
      </div>
    </section>
  );
};

export default About;
