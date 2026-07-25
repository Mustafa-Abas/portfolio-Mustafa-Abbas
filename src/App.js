import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // استيراد الـ CSS الخاص بالمؤثرات
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,  // مدة الأنيميشن بالمللي ثانية
      once: true,      // يحصل التأثير مرة واحدة بس
      offset: 100,     // يبدأ التأثير قبل ما يوصل العنصر بـ 100px
    });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about" data-aos="fade-up">
          <About />
        </section>

        <section id="skills" data-aos="fade-up">
          <Skills />
        </section>

        <section id="Projects" data-aos="fade-up">
          <Projects />
        </section>

        <section id="Contact" data-aos="fade-up">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
