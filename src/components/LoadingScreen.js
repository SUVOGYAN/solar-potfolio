import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ isLoading }) => {
  return (
    <motion.div
      className={`loading ${!isLoading ? 'hidden' : ''}`}
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="spinner"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <motion.h2
        style={{
          position: 'absolute',
          bottom: '30%',
          color: 'white',
          fontSize: '24px',
          fontWeight: 300,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Loading Portfolio Universe...
      </motion.h2>
    </motion.div>
  );
};

export default LoadingScreen; 