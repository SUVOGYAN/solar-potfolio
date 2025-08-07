import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Planet from './Planet';

const SolarSystem = () => {
  const navigate = useNavigate();
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [autoRotate, setAutoRotate] = useState(true);

  const planets = [
    {
      id: 'home',
      name: 'Home',
      subtitle: 'Welcome',
      color: '#4facfe',
      gradient: 'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
      size: 120,
      distance: 0,
      moons: [],
      description: 'Welcome to my creative universe! I\'m a passionate developer who loves turning ideas into beautiful digital experiences.',
      content: {
        title: 'Creative Developer',
        subtitle: 'Building Digital Experiences',
        description: 'Welcome to my portfolio! I\'m a creative developer passionate about building innovative web experiences and turning complex problems into elegant solutions.',
        details: [
          'Full-Stack Development',
          'UI/UX Design',
          'Mobile Applications',
          'Cloud Solutions'
        ]
      }
    },
    {
      id: 'about',
      name: 'About',
      subtitle: 'Who I Am',
      color: '#43e97b',
      gradient: 'linear-gradient(45deg, #43e97b 0%, #38f9d7 100%)',
      size: 100,
      distance: 200,
      moons: [
        { name: 'Passion', color: '#43e97b' },
        { name: 'Innovation', color: '#38f9d7' }
      ],
      description: 'I\'m a creative developer with a passion for building beautiful, functional, and user-centered digital experiences.',
      content: {
        title: 'About Me',
        subtitle: 'Creative Problem Solver',
        description: 'I\'m a creative developer with a passion for building beautiful, functional, and user-centered digital experiences. I believe that design is about more than just making things look pretty – it\'s about solving problems and creating intuitive, enjoyable experiences for users.',
        details: [
          '5+ Years Experience',
          '50+ Projects Completed',
          'Full-Stack Expertise',
          'Design Thinking'
        ]
      }
    },
    {
      id: 'skills',
      name: 'Skills',
      subtitle: 'Technologies',
      color: '#fa709a',
      gradient: 'linear-gradient(45deg, #fa709a 0%, #fee140 100%)',
      size: 140,
      distance: 400,
      moons: [
        { name: 'Frontend', color: '#fa709a' },
        { name: 'Backend', color: '#fee140' },
        { name: 'Design', color: '#ff6b6b' }
      ],
      description: 'My technical toolkit includes modern web technologies, design principles, and development methodologies.',
      content: {
        title: 'Skills & Technologies',
        subtitle: 'Modern Tech Stack',
        description: 'My technical toolkit includes modern web technologies, design principles, and development methodologies. I\'m constantly learning and adapting to new technologies to deliver the best solutions.',
        details: [
          'React, Vue.js, Angular',
          'Node.js, Python, Django',
          'UI/UX Design, Figma',
          'AWS, Docker, Git'
        ]
      }
    },
    {
      id: 'projects',
      name: 'Projects',
      subtitle: 'Creative Work',
      color: '#a8edea',
      gradient: 'linear-gradient(45deg, #a8edea 0%, #fed6e3 100%)',
      size: 110,
      distance: 600,
      moons: [
        { name: 'Web App', color: '#a8edea' },
        { name: 'Mobile', color: '#fed6e3' },
        { name: 'Design', color: '#ff9a9e' }
      ],
      description: 'From concept to deployment, I\'ve worked on a variety of projects that showcase my skills and creativity.',
      content: {
        title: 'Projects',
        subtitle: 'Portfolio Showcase',
        description: 'From concept to deployment, I\'ve worked on a variety of projects that showcase my skills in web development, mobile apps, and creative design solutions.',
        details: [
          'E-Commerce Platform',
          'Task Management App',
          'Mobile Fitness App',
          'Portfolio Website'
        ]
      }
    },
    {
      id: 'experience',
      name: 'Experience',
      subtitle: 'Work History',
      color: '#ffecd2',
      gradient: 'linear-gradient(45deg, #ffecd2 0%, #fcb69f 100%)',
      size: 130,
      distance: 800,
      moons: [
        { name: 'Senior', color: '#ffecd2' },
        { name: 'Team Lead', color: '#fcb69f' },
        { name: 'Freelance', color: '#ff9a9e' }
      ],
      description: 'With years of experience in the tech industry, I\'ve worked on diverse projects and delivered quality solutions.',
      content: {
        title: 'Experience',
        subtitle: 'Professional Journey',
        description: 'With years of experience in the tech industry, I\'ve worked on diverse projects ranging from startups to enterprise solutions, always focusing on delivering quality and innovation.',
        details: [
          'Senior Full-Stack Developer',
          'Technical Lead',
          'Freelance Consultant',
          '5+ Years Experience'
        ]
      }
    },
    {
      id: 'contact',
      name: 'Contact',
      subtitle: 'Let\'s Connect',
      color: '#ff9a9e',
      gradient: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 100%)',
      size: 90,
      distance: 1000,
      moons: [],
      description: 'Ready to start a project or just want to chat? I\'m always open to discussing new opportunities.',
      content: {
        title: 'Contact',
        subtitle: 'Let\'s Work Together',
        description: 'Ready to start a project or just want to chat? I\'m always open to discussing new opportunities and creative collaborations.',
        details: [
          'hello@yourportfolio.com',
          '+1 (555) 123-4567',
          'San Francisco, CA',
          'Available for Projects'
        ]
      }
    }
  ];

  useEffect(() => {
    if (autoRotate) {
      const interval = setInterval(() => {
        setSelectedPlanet(prev => {
          const currentIndex = planets.findIndex(p => p.id === prev);
          const nextIndex = (currentIndex + 1) % planets.length;
          return planets[nextIndex].id;
        });
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [autoRotate, planets]);

  const handlePlanetClick = (planetId) => {
    setSelectedPlanet(planetId);
    navigate(`/section/${planetId}`);
  };

  return (
    <motion.div
      className="solar-system"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{
          fontSize: '3rem',
          fontWeight: 700,
          marginBottom: '2rem',
          textAlign: 'center',
          background: 'linear-gradient(45deg, #4facfe, #00f2fe)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Portfolio Explorer
        <motion.span
          style={{
            display: 'block',
            fontSize: '1.2rem',
            fontWeight: 300,
            marginTop: '0.5rem',
            color: 'rgba(255, 255, 255, 0.8)',
          }}
        >
          Creative Developer
        </motion.span>
      </motion.h1>

      <motion.div
        className="planets-container"
        style={{
          position: 'relative',
          width: '100%',
          height: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {planets.map((planet, index) => (
          <Planet
            key={planet.id}
            planet={planet}
            index={index}
            isSelected={selectedPlanet === planet.id}
            onClick={() => handlePlanetClick(planet.id)}
            autoRotate={autoRotate}
          />
        ))}
      </motion.div>

      <motion.div
        className="controls"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          display: 'flex',
          gap: '1rem',
        }}
      >
        <motion.button
          className="nav-button"
          onClick={() => setAutoRotate(!autoRotate)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className={`fas fa-${autoRotate ? 'pause' : 'play'}`}></i>
          {autoRotate ? ' Pause' : ' Play'}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default SolarSystem; 