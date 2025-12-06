"use client";

import styles from "./works.module.scss";
import clsx from "clsx";
import { works } from "./work/works";
import Work from "./work/Work";
import { useStartWeb } from "@/hooks/useStartWeb";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const backgroundAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const Works = () => {
  const { theme } = useStartWeb();

  return (
    <div
      className={clsx(
        styles.works,
        theme === "light" ? styles.background : styles.background__dark
      )}
    >
      {theme === "light" ? (
        <></>
      ) : (
        <motion.div
          className={styles.backgroundBlur}
          initial="hidden"
          whileInView="visible"
          variants={backgroundAnimation}
        ></motion.div>
      )}

      <motion.p
        className={styles.works__map}
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ delay: 0.2 }}
      >
        {">"} Главная / <span>лучшие кейсы</span>
      </motion.p>

      <motion.h1
        className={styles.works__title}
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ delay: 0.3 }}
      >
        #Кейсы —{" "}
        <span className={theme === "light" ? styles.invert : ""}>которым</span>{" "}
        доверяют
      </motion.h1>

      <motion.section
        className={styles.works__grid}
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
      >
        {works.map((item, index) => (
          <Work key={index} {...item} />
        ))}
      </motion.section>
    </div>
  );
};
export default Works;
