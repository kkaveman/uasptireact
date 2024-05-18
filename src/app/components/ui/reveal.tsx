"use client"
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
}

export const Revealx = ({ children, width = "fit-content" }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation(); // Move useAnimation inside the component body

    useEffect(() => {
        const startAnimation = async () => {
            if (isInView) {
                await mainControls.start("visible");
            }
        };
        startAnimation(); // Call the function to start the animation
    }, [isInView, mainControls]); // Include mainControls in the dependency array

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
        </div>
    );
};
