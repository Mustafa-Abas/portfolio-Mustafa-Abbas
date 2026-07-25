import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { usePortfolio } from "../Context/PortfolioContext";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaCode, FaTools, FaLaptopCode } from "react-icons/fa"; // أيقونات

import styles from "../Skills/Skills.module.css";

const Skills = () => {
  const { darkMode } = usePortfolio();
  const { ref, inView } = useInView({ triggerOnce: true });

  const titleAnimation = useSpring({
    from: { y: -50, opacity: 0 },
    to: { y: 0, opacity: 1 },
    config: { duration: 800 },
  });

  const cardAnimation = useSpring({
    from: { y: 50, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 400,
    config: { duration: 1000 },
  });

  // مكون فرعي لكل مهارة
  const SkillBar = ({ label, value }) => {
    const barAnimation = useSpring({
      width: inView ? `${value}%` : "0%",
      config: { duration: 2000 },
    });

    return (
      <div className={styles.skillItem}>
        <div className={styles.skillLabelRow}>
          <span>{label}</span>
          <span className={styles.percent}>
            {inView && <CountUp end={value} duration={2} />}%
          </span>
        </div>
        <div className={styles.progress}>
          <animated.div className={styles.progressFill} style={barAnimation}></animated.div>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={ref}
      className={`${styles.skillsSection} ${darkMode ? styles.dark : styles.light}`}
    >
      <div className={styles.container}>
        {/* العنوان */}
        <animated.div style={titleAnimation} className={styles.sectionTitle}>
          <h2>My Skills</h2>
          <div className={styles.titleUnderline}></div>
        </animated.div>

        <div className={styles.skillsContent}>
          <animated.div style={cardAnimation} className={styles.skillCard}>
            <h3><FaCode className={styles.icon}/> Programming & Tools</h3>
            <SkillBar label="Python" value={92} />
            <SkillBar label="Excel / VBA" value={88} />
          </animated.div>

          <animated.div style={cardAnimation} className={styles.skillCard}>
            <h3><FaTools className={styles.icon}/> Databases & SQL</h3>
            <SkillBar label="SQL" value={95} />
          </animated.div>

          <animated.div style={cardAnimation} className={styles.skillCard}>
            <h3><FaLaptopCode className={styles.icon}/> Visualization</h3>
            <SkillBar label="Power BI" value={90} />
            <SkillBar label="Tableau" value={85} />
          </animated.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
