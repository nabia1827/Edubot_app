import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

const styles = {
    iconWrapper: {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: 'white',
      color: '#1D399F',
      fontSize: '24px',
      
      textDecoration: 'none'
    }
  };

const SocialMediaIcon = ({ icon, link }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover="hover"
      variants={iconVariants}
      style={styles.iconWrapper}
    >
      {icon}
    </motion.a>
  );
};

export default SocialMediaIcon;