import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const SpotlightButton = () => {
    const btnRef = useRef(null);
    const spanRef = useRef(null);
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        const { width } = e.target.getBoundingClientRect();
        const offset = e.offsetX;
        const left = `${(offset / width) * 100}%`;
  
        spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
      };
  
      const handleMouseLeave = () => {
        spanRef.current.animate(
          { left: "50%" },
          { duration: 100, fill: "forwards" }
        );
      };
  
      btnRef.current.addEventListener("mousemove", handleMouseMove);
      btnRef.current.addEventListener("mouseleave", handleMouseLeave);
  
      return () => {
        btnRef.current.removeEventListener("mousemove", handleMouseMove);
        btnRef.current.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, []);
  
    return (
      <motion.button
        whileTap={{ scale: 0.985 }}
        ref={btnRef}
        className="spotlight-button"
      >
        <span className="span-text">Hover me</span>
        <span ref={spanRef} className="span-background" />
      </motion.button>
    );
  };
  
  export default SpotlightButton;