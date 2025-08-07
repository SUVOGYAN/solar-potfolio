import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

const Planet = ({ planet, index, isSelected, onClick, autoRotate }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (autoRotate) {
      const interval = setInterval(() => {
        setRotation(prev => prev + 0.5);
      }, 50);

      return () => clearInterval(interval);
    }
  }, [autoRotate]);

  const planetVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: isSelected ? 1.2 : 1,
      opacity: 1,
      rotate: rotation,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    hover: {
      scale: 1.3,
      transition: { duration: 0.2 }
    }
  };

  const moonVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: 1,
      opacity: 1,
      transition: { delay: index * 0.1 }
    }
  };

  return (
    <motion.div
      className="planet-container"
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: `translate(-50%, -50%) translateX(${planet.distance}px)`,
        zIndex: isSelected ? 10 : 1,
      }}
      variants={planetVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Planet */}
      <motion.div
        className="planet"
        style={{
          width: planet.size,
          height: planet.size,
          borderRadius: '50%',
          background: planet.gradient,
          boxShadow: `
            0 0 20px ${planet.color}40,
            0 0 40px ${planet.color}20,
            inset 0 0 20px rgba(255, 255, 255, 0.1)
          `,
          cursor: 'pointer',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          textShadow: '0 2px 4px rgba(0,0,0,0.5)',
        }}
        whileHover={{
          boxShadow: `
            0 0 30px ${planet.color}60,
            0 0 60px ${planet.color}40,
            inset 0 0 30px rgba(255, 255, 255, 0.2)
          `,
        }}
      >
        {planet.name}
      </motion.div>

      {/* Planet Label */}
      <motion.div
        className="planet-label"
        style={{
          position: 'absolute',
          top: planet.size + 10,
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          color: 'white',
          fontSize: '0.9rem',
          fontWeight: 300,
          opacity: isHovered || isSelected ? 1 : 0.7,
        }}
        animate={{
          opacity: isHovered || isSelected ? 1 : 0.7,
        }}
      >
        <div style={{ fontWeight: 'bold', marginBottom: '2px' }}>
          {planet.name}
        </div>
        <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>
          {planet.subtitle}
        </div>
      </motion.div>

      {/* Moons */}
      {planet.moons.map((moon, moonIndex) => (
        <motion.div
          key={moon.name}
          className="moon"
          variants={moonVariants}
          style={{
            position: 'absolute',
            width: 20,
            height: 20,
            borderRadius: '50%',
            background: moon.color,
            boxShadow: `0 0 10px ${moon.color}60`,
            top: -10 - moonIndex * 30,
            left: planet.size / 2 - 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.6rem',
            color: 'white',
            fontWeight: 'bold',
          }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: moonIndex * 0.5,
          }}
        >
          {moon.name.charAt(0)}
        </motion.div>
      ))}

      {/* Trajectory Ring */}
      <motion.div
        className="trajectory"
        style={{
          position: 'absolute',
          width: planet.size + 40,
          height: planet.size + 40,
          border: `1px solid ${planet.color}30`,
          borderRadius: '50%',
          top: -20,
          left: -20,
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Hover Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="tooltip"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            style={{
              position: 'absolute',
              top: -80,
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(0, 0, 0, 0.9)',
              backdropFilter: 'blur(10px)',
              padding: '10px 15px',
              borderRadius: '8px',
              fontSize: '0.8rem',
              color: 'white',
              whiteSpace: 'nowrap',
              zIndex: 100,
              border: `1px solid ${planet.color}40`,
            }}
          >
            {planet.description}
            <div
              style={{
                position: 'absolute',
                bottom: -5,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 0,
                height: 0,
                borderLeft: '5px solid transparent',
                borderRight: '5px solid transparent',
                borderTop: `5px solid rgba(0, 0, 0, 0.9)`,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Planet; 