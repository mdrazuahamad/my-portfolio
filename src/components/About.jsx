import React from "react";
import "../assets/styles/About.css";
import { motion } from "framer-motion"; // Adjust the path as necessary
import profileImg from "/avatars/MD Razu Ahamad 8.png"; // Adjust the path as necessary
import cvFile from "../assets/files/MD Razu Ahamad Final Version.pdf"; // Place your CV in this path

const About = () => {
  return (
    <section className='about' id='about'>
      <motion.h2
        className='section-title'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        About Me
        <motion.p className='section-subtitle'>
          Where Function Meets Design — Expert in Frontend Frameworks & Backend Logic
        </motion.p>
      </motion.h2>

      <div className='about-wrapper'>
        <motion.div
          className='about-left'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}>
          <img src={profileImg} alt='Razu Ahamad' className='profile-img' />
          <p className='about-intro'>
            I'm <strong>MD Razu Ahamad</strong>, a passionate Web Developer with expertise
            in CMS and full-stack development. I help businesses create elegant, scalable,
            and high-performing web solutions.
          </p>
          <a href={cvFile} download className='btn cv-btn'>
            📄 Download CV
          </a>
        </motion.div>

        <motion.div
          className='about-right'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}>
          <div className='about-grid'>
            <div className='about-card'>
              <h3>🎯 Experience</h3>
              <p>
                4+ years in WordPress, Shopify, and React-based web development with
                real-world results.
              </p>
            </div>
            <div className='about-card'>
              <h3>🛠️ Skills</h3>
              <p>
                React, Node.js, Express, MongoDB, WordPress, Shopify, HTML, CSS, JS, Git,
                Figma.
              </p>
            </div>
            <div className='about-card'>
              <h3>🌐 Projects</h3>
              <p>
                Built 50+ websites including custom CMS, eCommerce platforms, and web
                apps.
              </p>
            </div>
            <div className='about-card'>
              <h3>📫 Contact</h3>
              <p>
                Email: razuahmad.dev@gmail.com
                <br />
                Location: Jessore, Khulna, Bangladesh
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
