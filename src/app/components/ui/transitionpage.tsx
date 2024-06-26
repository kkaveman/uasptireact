import { motion } from "framer-motion";
import React from "react";

type OgComponentType = React.ComponentType<any>;

const transition = (OgComponent: OgComponentType) => {
  const TransitionComponent: React.FC = () => (
    <>
      <OgComponent />
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );

  return React.memo(TransitionComponent);
};

// Set display name for the transition component
transition.displayName = `Transition`;

export default transition;
