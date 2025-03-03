"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import "../../styles/landingpage.scss";

const Landingpg = () => {
  const [blackScreenVisible, setBlackScreenVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBlackScreenVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const textAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 1.2 },
  };
  
  const staggerTextAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5, delay: 0.2 },
  };
  
  const staggerTextAnimation1 = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 1, delay: 0.7 },
  };
  
  const staggerTextAnimation2 = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 1.2, delay: 1 },
  };
  
  const gradientTextStyles = {
    color: "transparent",
    background: "-webkit-linear-gradient(45deg, #2196F3, #ffffff)",
    WebkitBackgroundClip: "text",
    fontWeight: "bold",
    fontSize: "4rem",
  };
  
  const customExitAnimation = {
    initial: { opacity: 1, y: 0 },
    animate: { opacity: 0, y: -100 },
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Initial loading animation */}
      <AnimatePresence>
        {blackScreenVisible && (
          <motion.div
            key="black-screen"
            initial={{ backgroundColor: "#000" }}
            animate={{ backgroundColor: "#000" }}
            exit={customExitAnimation}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999,
              transition: "all ease 1s",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.div
              key="text-container"
              className="text-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              style={{ position: "absolute", textAlign: "center" }}
            >
              <motion.p {...staggerTextAnimation} style={gradientTextStyles}>
                Innovative
              </motion.p>
              <motion.p {...staggerTextAnimation1} style={gradientTextStyles}>
                Dynamic
              </motion.p>
              <motion.p {...staggerTextAnimation2} style={gradientTextStyles}>
                Immersive
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Background - Full Width */}
      <div className="absolute inset-0 w-screen h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-screen h-screen object-cover"
        >
          <source 
            src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Web%20home%20page%202.0.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay to improve text readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              {...textAnimation}
            >
              Let's build your dream together!
            </motion.h1>
            
            <motion.p
              className="text-xl text-white mb-8"
              {...textAnimation}
            >
              From concept to creation, we've got you covered.<br />
              We're not just buddies, we're your tech dream team.<br />
              Your idea, our expertise, a digital masterpiece.
            </motion.p>
            
            <motion.div
              {...textAnimation}
            >
              <Link href="/contact">
                <div className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
                  Get in Touch
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpg;