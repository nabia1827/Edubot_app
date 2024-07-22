import React from 'react';
import { motion } from "framer-motion";

// Estilos en línea

const loaderContainerStyle = {
    display: 'flex',
    gap: '4px', // Espacio entre barras
};

const barStyle = {
    height: '1.0em', // h-12
    width: '1.0em', // w-2
    background: 'linear-gradient(to bottom, #5178FB, #47BAD8)',
    borderRadius: '10px',
    marginLeft: '0.25em',
    marginRight: '0.25em'
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
function LoaderMessage() {
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
}
export default LoaderMessage;