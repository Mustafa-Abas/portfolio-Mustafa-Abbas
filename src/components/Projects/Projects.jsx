import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FaGithub, FaTimes } from 'react-icons/fa';
import { usePortfolio } from '../Context/PortfolioContext';
import dashboardOverview from '../../assets/sales-dashboard/1.png';
import rootCauseAnalysis from '../../assets/sales-dashboard/2.png';
import customerSegmentation from '../../assets/sales-dashboard/3.png';
import forecastingAnalysis from '../../assets/sales-dashboard/4.png';
import excelSalesDashboard from '../../assets/sales-dashboard/excel-sales-dashboard.png';
import styles from '../Projects/Projects.module.css';

const projects = [
  {
    title: 'Sales Performance BI Dashboard',
    description: 'An end-to-end Business Intelligence solution built in Power BI to analyze sales performance, profitability, customer behavior, and pricing strategies—turning raw data into actionable insights for data-driven decisions.',
    technologies: ['Power BI', 'DAX', 'Power Query', 'Data Modeling', 'Data Visualization'],
    githubLink: 'https://github.com/Mustafa-Abas/Sales-Permance-Analysis-Power-BI',
    images: [
      { src: dashboardOverview, label: 'Main Dashboard' },
      { src: rootCauseAnalysis, label: 'Root Cause Analysis' },
      { src: customerSegmentation, label: 'Customer Segmentation' },
      { src: forecastingAnalysis, label: 'Forecasting Analysis' }
    ]
  },
  {
    title: 'Advanced Sales Dashboard with KPI Analysis',
    description: 'A dynamic Sales Performance Dashboard built with Microsoft Excel to analyze business performance, monitor KPIs, identify sales trends, and evaluate overall business health for better decision-making.',
    technologies: ['Excel', 'Power Pivot', 'Data Modeling', 'DAX', 'Visualization'],
    githubLink: 'https://github.com/Mustafa-Abas/Advanced-Sales-Dashboard-with-KPI-Analysis-Excel-',
    images: [{ src: excelSalesDashboard, label: 'Excel Sales Activity Dashboard' }]
  }
];

const Projects = () => {
  const { darkMode } = usePortfolio();
  const [selectedProject, setSelectedProject] = useState(null);

  const titleAnimation = useSpring({
    from: { y: -50, opacity: 0 },
    to: { y: 0, opacity: 1 },
    config: { duration: 800 }
  });

  return (
    <section id="projects" className={`${styles.projectsSection} ${darkMode ? styles.dark : styles.light}`}>
      <div className={styles.container}>
        <animated.div style={titleAnimation} className={styles.sectionTitle}>
          <h2>My Projects</h2>
          <div className={styles.titleUnderline} />
        </animated.div>

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <article key={project.title} className={styles.projectCard}>
              <div className={styles.imageWrapper}>
                <img src={project.images[0].src} alt={`${project.title} overview`} className={styles.projectImage} />
              </div>

              <div className={styles.projectContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.techStack}>
                  {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
                <div className={styles.buttons}>
                  <button type="button" className={styles.demoBtn} onClick={() => setSelectedProject(project)}>View Photos</button>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.githubBtn}><FaGithub /> GitHub</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className={styles.modalOverlay} role="dialog" aria-modal="true" aria-label={`${selectedProject.title} photos`} onClick={() => setSelectedProject(null)}>
          <div className={styles.galleryModal} onClick={(event) => event.stopPropagation()}>
            <button type="button" className={styles.closeButton} onClick={() => setSelectedProject(null)} aria-label="Close gallery"><FaTimes /></button>
            <h3>{selectedProject.title}</h3>
            <div className={styles.galleryGrid}>
              {selectedProject.images.map((image) => (
                <figure key={image.label}>
                  <img src={image.src} alt={image.label} />
                  <figcaption>{image.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
