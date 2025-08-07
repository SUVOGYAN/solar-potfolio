import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const PortfolioSection = () => {
  const { sectionId } = useParams();
  const navigate = useNavigate();
  const [section, setSection] = useState(null);

  const sections = {
    home: {
      title: 'Creative Developer',
      subtitle: 'Building Digital Experiences',
      description: 'Welcome to my portfolio! I\'m a creative developer passionate about building innovative web experiences and turning complex problems into elegant solutions.',
      details: [
        'Full-Stack Development',
        'UI/UX Design',
        'Mobile Applications',
        'Cloud Solutions'
      ],
      color: '#4facfe',
      gradient: 'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)'
    },
    about: {
      title: 'About Me',
      subtitle: 'Creative Problem Solver',
      description: 'I\'m a creative developer with a passion for building beautiful, functional, and user-centered digital experiences. I believe that design is about more than just making things look pretty – it\'s about solving problems and creating intuitive, enjoyable experiences for users.',
      details: [
        '5+ Years Experience',
        '50+ Projects Completed',
        'Full-Stack Expertise',
        'Design Thinking'
      ],
      color: '#43e97b',
      gradient: 'linear-gradient(45deg, #43e97b 0%, #38f9d7 100%)'
    },
    skills: {
      title: 'Skills & Technologies',
      subtitle: 'Modern Tech Stack',
      description: 'My technical toolkit includes modern web technologies, design principles, and development methodologies. I\'m constantly learning and adapting to new technologies to deliver the best solutions.',
      details: [
        'React, Vue.js, Angular',
        'Node.js, Python, Django',
        'UI/UX Design, Figma',
        'AWS, Docker, Git'
      ],
      color: '#fa709a',
      gradient: 'linear-gradient(45deg, #fa709a 0%, #fee140 100%)'
    },
    projects: {
      title: 'Projects',
      subtitle: 'Portfolio Showcase',
      description: 'From concept to deployment, I\'ve worked on a variety of projects that showcase my skills in web development, mobile apps, and creative design solutions.',
      details: [
        'E-Commerce Platform',
        'Task Management App',
        'Mobile Fitness App',
        'Portfolio Website'
      ],
      color: '#a8edea',
      gradient: 'linear-gradient(45deg, #a8edea 0%, #fed6e3 100%)'
    },
    experience: {
      title: 'Experience',
      subtitle: 'Professional Journey',
      description: 'With years of experience in the tech industry, I\'ve worked on diverse projects ranging from startups to enterprise solutions, always focusing on delivering quality and innovation.',
      details: [
        'Senior Full-Stack Developer',
        'Technical Lead',
        'Freelance Consultant',
        '5+ Years Experience'
      ],
      color: '#ffecd2',
      gradient: 'linear-gradient(45deg, #ffecd2 0%, #fcb69f 100%)'
    },
    contact: {
      title: 'Contact',
      subtitle: 'Let\'s Work Together',
      description: 'Ready to start a project or just want to chat? I\'m always open to discussing new opportunities and creative collaborations.',
      details: [
        'hello@yourportfolio.com',
        '+1 (555) 123-4567',
        'San Francisco, CA',
        'Available for Projects'
      ],
      color: '#ff9a9e',
      gradient: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 100%)'
    }
  };

  useEffect(() => {
    if (sections[sectionId]) {
      setSection(sections[sectionId]);
    }
  }, [sectionId]);

  if (!section) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <div>Loading...</div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="portfolio-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        minHeight: '100vh',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Back Button */}
      <motion.button
        className="nav-button"
        onClick={() => navigate('/')}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        style={{
          position: 'absolute',
          top: '2rem',
          left: '2rem',
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <i className="fas fa-arrow-left"></i> Back to Universe
      </motion.button>

      {/* Main Content */}
      <motion.div
        className="section-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          maxWidth: '800px',
          textAlign: 'center',
        }}
      >
        {/* Header */}
        <motion.div
          className="section-header"
          style={{
            marginBottom: '3rem',
          }}
        >
          <motion.h1
            className="section-title"
            style={{
              fontSize: '3rem',
              fontWeight: 700,
              marginBottom: '1rem',
              background: section.gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {section.title}
          </motion.h1>
          
          <motion.h2
            className="section-subtitle"
            style={{
              fontSize: '1.5rem',
              fontWeight: 300,
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '2rem',
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {section.subtitle}
          </motion.h2>
        </motion.div>

        {/* Description */}
        <motion.p
          className="section-description"
          style={{
            fontSize: '1.1rem',
            lineHeight: 1.8,
            marginBottom: '3rem',
            color: 'rgba(255, 255, 255, 0.9)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {section.description}
        </motion.p>

        {/* Details Grid */}
        <motion.div
          className="details-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {section.details.map((detail, index) => (
            <motion.div
              key={index}
              className="detail-card"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                padding: '1.5rem',
                borderRadius: '15px',
                border: `1px solid ${section.color}30`,
                transition: 'all 0.3s ease',
              }}
              whileHover={{
                transform: 'translateY(-5px)',
                boxShadow: `0 10px 30px ${section.color}20`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
            >
              <div
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  color: 'white',
                }}
              >
                {detail}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="action-buttons"
          style={{
            marginTop: '3rem',
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.button
            className="nav-button"
            style={{
              background: section.gradient,
              border: 'none',
              padding: '12px 24px',
              fontSize: '1rem',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-download"></i> Download Resume
          </motion.button>
          
          <motion.button
            className="nav-button"
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-home"></i> Back to Universe
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioSection; 