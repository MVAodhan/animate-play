import React from "react";
import NextLink from "next/link";

import { Box } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const MotionLink = motion(NextLink);

const MotionBox = motion(Box);
const About = () => {
  return (
    <MotionBox
      bgColor="#2f62fa"
      d="flex"
      justifyContent="center"
      alignItems="center"
      h="100vh"
      initial={{ opacity: 0, y: "100vh" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ y: "-100vh" }}
      transition={{
        type: "tween",
        stiffness: 400,
        damping: 150,
        opacity: {
          duration: 0.2,
        },
        duration: 0.8,
      }}
    >
      <MotionBox as="main" color="#fa4e2f">
        <MotionBox as="h1">About page</MotionBox>

        <MotionLink href="/">
          <a> Go Home </a>
        </MotionLink>
      </MotionBox>
    </MotionBox>
  );
};

export default About;
