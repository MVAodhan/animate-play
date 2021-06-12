import "../styles/globals.css";

import { Box } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <MotionBox key={router.route}>
        <Component {...pageProps} />
      </MotionBox>
    </AnimatePresence>
  );
}

export default MyApp;
