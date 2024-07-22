import React from 'react';
import { motion } from "framer-motion";
import HoverDevCards from './components/animationPrueba';

const Example = () => {
  return (
    <HoverDevCards />
  );
};

const variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "circIn",
    },
  },
};

const BarLoader = () => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial="initial"
      animate="animate"
      style={loaderContainerStyle}
    >
      <motion.div variants={variants} style={barStyle} />
      <motion.div variants={variants} style={barStyle} />
      <motion.div variants={variants} style={barStyle} />
      <motion.div variants={variants} style={barStyle} />
      <motion.div variants={variants} style={barStyle} />
    </motion.div>
  );
};

// Estilos en línea
const containerStyle = {
  display: 'grid',
  placeContent: 'center',
  backgroundColor: 'white', // bg-violet-600
  padding: '24px',
  width:'100%',
  height: '100%', // para centrar verticalmente en toda la ventana
};

const loaderContainerStyle = {
  display: 'flex',
  gap: '4px', // Espacio entre barras
};

const barStyle = {
  height: '48px', // h-12
  width: '8px', // w-2
  backgroundColor: 'white',
};

export default Example;
