import React, { useEffect, useState, useRef } from "react";

import Link from "next/link";
import Image from "next/image";
// import { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { motion, useAnimation } from "framer-motion";

const Herosection = ({ handlecontactusModal }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const textAnimation1 = {
    hidden: { opacity: 0, y: "0%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 5.5, ease: "easeOut" },
    },
  };

  const containerStyle = {
    padding: "20px",
    position: "sticky",
  };

  const textContainerStyle = {
    marginBottom: "30%",
    position: "sticky",
    left: "50%",
    zIndex: 2,
    color: "#fff",
    textAlign: "center",
    top: "30%",
  };

  const imageContainerStyle = {
    position: "sticky",
    top: "30%",
    left: "50%",
    // transform: `translateX(-50%) translateY(-${scrollPosition / 2}px)`,
    width: "100%",
    height: "100%",
    overflow: "hidden",

    top: "15rem",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    transition: "transform 0.3s ease-out",
    opacity: "0.7",
  };

  const buttonHeader = {
    border: isHovered ? "0px" : "1px solid white",
    background: isHovered
      ? "linear-gradient(180deg, color(display-p3 0.2471 0.5412 0.8863) 0%, color(display-p3 0.137 0.3826 0.6708) 100%)"
      : "transparent",
    color: isHovered ? "white" : "white", // Change the text color as needed
    padding: "10px 20px",
    fontSize: "16px",
    transition: "background-color 0.3s, transform 0.3s",
    cursor: "pointer",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
    marginTop: "3rem",
  };

  return (
    <>
      <div style={containerStyle}>
        <div style={textContainerStyle}>
          <h1 style={{ fontSize: "3rem" }}>
            Hyper-realistic Visuals with Leading 3D CGI Company - Hey Buddy
          </h1>
          <h1 style={{ fontSize: "3rem" }}></h1>
          <Button
            onClick={handlecontactusModal}
            style={buttonHeader}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Consult Now
          </Button>
        </div>
        <div style={imageContainerStyle}>
          {/* Replace 'your-image.jpg' with the actual image source */}
          <Image
            loading="lazy"
            style={imageStyle}
            width={450}
            height={450}
            className="h-[24px] w-[24px] bg-white mx-auto mt-4"
            src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/636e60aaec9c3203abcd2b03ebcda23f.jpeg"
            alt="Background"
          />
        </div>
      </div>

      <div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={textAnimation1}
        className="py-8 text-xl text-white "
      >
        <p>
          Partner with Hey Buddy for assured, high-quality CGI delivered on
          time. Our strong CGI team has deployed top-class technical proficiency
          for creative and innovative CGI effects perfect for your project.
        </p>
      </div>
    </>
  );
};

export default Herosection;
