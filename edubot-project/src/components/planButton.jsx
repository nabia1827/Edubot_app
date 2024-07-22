import React from 'react';
import { motion } from 'framer-motion';


const PlanButton = (props) => {
    const {primaryColor, hoverColor } =props;
    return (
        <motion.button
            whileHover={{ scale: 1.1, backgroundColor: hoverColor }}
            whileTap={{ scale: 0.9 }}
            style={{ padding: '1em 2em', borderRadius: '8px', border: 'none', cursor: 'pointer', background: primaryColor, color: '#fff' }}
        >
            Comprar
        </motion.button>
    );
}

export default PlanButton;